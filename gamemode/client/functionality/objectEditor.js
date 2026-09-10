global.inObjectEditor = false;
const AXIS_CONFIG = {
  x: {
    key: "x",
    direction: new mp.Vector3(1, 0, 0),
    color: [255, 95, 95, 255]
  },
  y: {
    key: "y",
    direction: new mp.Vector3(0, 1, 0),
    color: [95, 255, 125, 255]
  },
  z: {
    key: "z",
    direction: new mp.Vector3(0, 0, 1),
    color: [95, 140, 255, 255]
  }
};
const DEFAULT_VARIANT_OFFSETS = {
  16: 0.05,
  24: 1.2,
  26: 0.7,
  27: 1,
  32: -0.1,
  6794: 0.85,
  6795: 0.9,
  6796: 0.9,
  6797: 0.9,
  6798: 0.17,
  6799: 0.35,
  6807: 0.9,
  7005: 0.9
};
const SET_FURNITURE_DISTANCE = {
  min: 1,
  max: 3
};
const PREVIEW_MOVE_STEP_SLOW = 0.01;
const PREVIEW_MOVE_STEP = 0.1;
const PREVIEW_MOVE_STEP_FAST = 1;
const PREVIEW_ROTATION_STEP_SLOW = 1;
const PREVIEW_ROTATION_STEP = 4;
const PREVIEW_ROTATION_STEP_FAST = 16;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_UP = 38;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;
const state = createInitialState();
function createInitialState() {
  return {
    active: false,
    stage: "idle",
    modelName: null,
    modelHash: null,
    dimension: null,
    previewObject: null,
    currentObject: null,
    axisLength: 2,
    hoveredAxis: null,
    draggingAxis: null,
    dragStartCursor: null,
    dragStartPosition: null,
    cursorWasVisible: false,
    dragSensitivity: 0.02,
    dragSensitivityBoostMultiplier: 3,
    dragAxisDirection: null,
    dragAxisScreenVector: null,
    dragAxisRotationMultiplier: 1,
    modelDimensions: null,
    groundOffset: 0,
    cachedPosition: null,
    cachedRotation: null,
    loadInterval: null,
    hintVisible: false,
    transformMode: "translate",
    initialStage: "preview",
    rotationSensitivity: 0.35,
    axisThickness: 0.005,
    axisSelectionThreshold: 32,
    rotationSelectionThreshold: 36,
    axisLabelScale: 0.7,
    minPlacementDistance: 5,
    previewAdditionalZ: 0,
    previewVariantId: null,
    previewGroundProbeSteps: 10,
    previewGroundProbeStep: 1,
    previewGroundFallbackHeight: 50,
    previewScreenProjection: createDefaultScreenProjection(),
    previewVariantOffsets: createDefaultVariantOffsets(),
    initialPositionProvided: false,
    type: "default",
    gameplayCamera: null,
    dragStartRotation: null,
    lastRayDirection: null,
    lastRayOrigin: null,
    previewKeybindsBound: false,
    previewVerticalOffset: 0,
    previewOnly: false
  };
}
function parseOptions(_0x499ad4) {
  if (!_0x499ad4) {
    return {};
  }
  if (typeof _0x499ad4 == "string") {
    try {
      return JSON.parse(_0x499ad4);
    } catch (_0x4a7fd1) {
      return {};
    }
  }
  if (typeof _0x499ad4 == "object") {
    return _0x499ad4;
  } else {
    return {};
  }
}
function start(_0x153bb9, _0x53fa86, _0x58de2f = {}) {
  if (!_0x153bb9) {
    return;
  }
  const _0x18fced = resolveModel(_0x153bb9, _0x58de2f.modelName);
  if (_0x18fced) {
    stopInternal(true);
    state.type = _0x53fa86 || "default";
    inObjectEditor = true;
    state.active = true;
    state.stage = "loading";
    state.modelName = _0x153bb9 || _0x58de2f.modelName || null;
    state.modelHash = _0x18fced;
    state.dimension = typeof _0x58de2f.dimension == "number" ? _0x58de2f.dimension : mp.players.local.dimension;
    state.cursorWasVisible = mp.gui.cursor.visible;
    state.previewScreenProjection = resolvePreviewProjection(_0x58de2f);
    state.previewVariantOffsets = resolvePreviewVariantOffsets(_0x58de2f);
    state.previewAdditionalZ = resolvePreviewAdditionalZ(_0x58de2f);
    state.previewVariantId = resolvePreviewVariant(_0x58de2f);
    state.initialStage = _0x58de2f.skipPreview ? "editing" : "preview";
    state.previewOnly = typeof _0x58de2f.previewOnly == "boolean" && _0x58de2f.previewOnly;
    if (state.previewOnly) {
      state.initialStage = "preview";
    }
    if (state.initialStage === "preview") {
      mp.gui.cursor.show(false, false);
    }
    state.cachedRotation = resolveRotation(_0x58de2f.rotation);
    state.cachedPosition = resolvePosition(_0x58de2f.position);
    state.initialPositionProvided = !!state.cachedPosition;
    requestModel(_0x18fced).then(_0x3e367e => {
      if (!_0x3e367e || !state.active) {
        if (state.active) {
          notify("object_editor_model_failed", "Unable to load model: " + String(_0x153bb9));
        }
        cancelPlacement();
        return;
      }
      setupModelDimensions();
      createPreview();
    });
  }
}
function confirmPlacement(_0x3d21a5 = false, _0xd5806d = false) {
  const _0x116f03 = state.stage === "editing" || state.previewOnly && state.stage === "preview";
  if (!state.active || !_0x116f03 || !state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  if (inBarricadeEditor == 1) {
    return;
  }
  const _0x419096 = state.currentObject.position;
  const _0x4dffb9 = state.currentObject.rotation;
  if (!_0x3d21a5) {
    const _0x4603b5 = {
      model: state.modelName || state.modelHash,
      hash: state.modelHash,
      position: {
        x: _0x419096.x,
        y: _0x419096.y,
        z: _0x419096.z
      },
      rotation: {
        x: _0x4dffb9.x,
        y: _0x4dffb9.y,
        z: _0x4dffb9.z
      },
      dimension: state.dimension
    };
    if (state.type === "setFurniture" && localplayer.isInWater()) {
      return mp.game.ui.notifications.show(language["Нельзя устанавливать объкты здесь"][curr_lang], false, 0, 6);
    }
    if (state.type === "setFurniture" && !_0xd5806d) {
      mp.events.callRemote("Server_ObjectEditor_ConfirmFurniturePlacement");
      return;
    }
    if (state.type === "barricade") {
      setBarricadeModel(_0x4603b5);
      return;
    }
    mp.events.callRemote("Server_ObjectEditor_Confirm", JSON.stringify(_0x4603b5));
  }
  stopInternal();
}
function cancelPlacement(_0x2112e3 = true) {
  if (state.active) {
    if (_0x2112e3) {
      mp.events.callRemote("Server_ObjectEditor_Cancel");
    }
    stopInternal();
  }
}
function requestModel(_0x52e800) {
  return new Promise(_0x27b1d5 => {
    if (mp.game.streaming.hasModelLoaded(_0x52e800)) {
      return _0x27b1d5(true);
    }
    mp.game.streaming.requestModel(_0x52e800);
    let _0x2154b4 = 0;
    state.loadInterval = setInterval(() => state.active ? (_0x2154b4 += 1, mp.game.streaming.hasModelLoaded(_0x52e800) ? (clearInterval(state.loadInterval), state.loadInterval = null, _0x27b1d5(true)) : _0x2154b4 >= 30 ? (clearInterval(state.loadInterval), state.loadInterval = null, _0x27b1d5(false)) : undefined) : (clearInterval(state.loadInterval), state.loadInterval = null, _0x27b1d5(false)), 50);
  });
}
function setupModelDimensions() {
  try {
    state.modelDimensions = mp.game.gameplay.getModelDimensions(state.modelHash);
    if (state.modelDimensions) {
      state.groundOffset = -state.modelDimensions.min.z;
      const _0xb7cc1b = state.modelDimensions.max.x - state.modelDimensions.min.x;
      const _0x172acf = state.modelDimensions.max.y - state.modelDimensions.min.y;
      const _0x500012 = state.modelDimensions.max.z - state.modelDimensions.min.z;
      state.axisLength = Math.max(1.5, Math.max(_0xb7cc1b, _0x172acf, _0x500012) * 1.1);
    }
  } catch (_0x364d7c) {
    state.modelDimensions = null;
    state.groundOffset = 0;
    state.axisLength = 2;
  }
}
function createPreview() {
  let _0x1c52c8 = state.cachedPosition;
  if (_0x1c52c8) {
    _0x1c52c8 = new mp.Vector3(_0x1c52c8.x, _0x1c52c8.y, _0x1c52c8.z);
  } else {
    const _0x347621 = mp.players.local.getOffsetFromInWorldCoords(0, 0, 0);
    _0x1c52c8 = new mp.Vector3(_0x347621.x, _0x347621.y, _0x347621.z);
  }
  let _0x36c64e = state.cachedRotation;
  _0x36c64e = _0x36c64e ? new mp.Vector3(_0x36c64e.x, _0x36c64e.y, _0x36c64e.z) : new mp.Vector3(0, 0, mp.players.local.getHeading());
  state.previewObject = mp.objects.new(state.modelHash, _0x1c52c8, {
    rotation: _0x36c64e,
    alpha: 110,
    dimension: state.dimension
  });
  if (!state.previewObject || !mp.objects.exists(state.previewObject)) {
    notify("object_editor_entity_failed", "Failed to create preview object");
    stopInternal();
    return;
  }
  state.previewObject.setCollision(false, false);
  state.previewObject.freezePosition(true);
  state.currentObject = state.previewObject;
  state.cachedRotation = _0x36c64e;
  if (state.initialStage === "editing") {
    if (state.initialPositionProvided) {
      state.cachedPosition = new mp.Vector3(_0x1c52c8.x, _0x1c52c8.y, _0x1c52c8.z);
      state.previewObject.position = new mp.Vector3(state.cachedPosition.x, state.cachedPosition.y, state.cachedPosition.z);
    } else {
      updatePreviewFromRaycast(true);
      const _0x10a45d = state.currentObject.position;
      state.cachedPosition = new mp.Vector3(_0x10a45d.x, _0x10a45d.y, _0x10a45d.z);
    }
    anchorPreview();
    showHint();
  } else {
    updatePreviewFromRaycast(true);
    const _0x3038cf = state.currentObject.position;
    state.cachedPosition = new mp.Vector3(_0x3038cf.x, _0x3038cf.y, _0x3038cf.z);
    state.stage = "preview";
    state.previewVerticalOffset = 0;
    bindPreviewControls();
    showHint();
  }
}
function onRender() {
  if (state.active) {
    mp.game.controls.disableControlAction(2, 22, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
    mp.game.controls.disableControlAction(0, 45, true);
    mp.game.controls.disableControlAction(0, 140, true);
    mp.game.controls.disableControlAction(0, 141, true);
    mp.game.controls.disableControlAction(0, 142, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 0, true);
    if (state.stage !== "loading") {
      if (state.stage === "preview") {
        updatePreviewFromRaycast();
      } else if (state.stage === "editing") {
        updateDragging();
        if (state.transformMode === "translate") {
          drawAxes();
        } else {
          drawRotationGizmo();
        }
      }
    }
  }
}
function updatePreviewFromRaycast(_0x12f711 = false) {
  if (!state.previewObject || !mp.objects.exists(state.previewObject)) {
    return;
  }
  let _0x4509bc = computePreviewPlacementPoint();
  if (!_0x4509bc) {
    let _0x38b367 = 100;
    if (state.type === "setFurniture") {
      _0x38b367 = 30;
    }
    const _0x31ec1a = performCameraRaycast(_0x38b367);
    if (!_0x31ec1a || !_0x31ec1a.position) {
      return;
    }
    _0x4509bc = new mp.Vector3(_0x31ec1a.position.x, _0x31ec1a.position.y, _0x31ec1a.position.z);
  }
  const _0x415ab8 = findGroundZForPoint(_0x4509bc);
  if (_0x415ab8 !== null) {
    _0x4509bc.z = _0x415ab8;
  }
  const _0x2677e1 = resolvePlacementAdditionalOffset();
  let _0x2e5a35 = new mp.Vector3(_0x4509bc.x, _0x4509bc.y, _0x4509bc.z + _0x2677e1 + state.groundOffset);
  if (typeof state.previewVerticalOffset == "number" && state.previewVerticalOffset !== 0) {
    _0x2e5a35 = new mp.Vector3(_0x2e5a35.x, _0x2e5a35.y, _0x2e5a35.z + state.previewVerticalOffset);
  }
  const _0x27c4e5 = mp.players.local.position;
  const _0x35f1ac = new mp.Vector3(_0x2e5a35.x - _0x27c4e5.x, _0x2e5a35.y - _0x27c4e5.y, _0x2e5a35.z - _0x27c4e5.z);
  let _0x3575f6 = vectorLength(_0x35f1ac);
  let _0xa5f549 = normalizeVector(_0x35f1ac);
  if (state.type === "setFurniture") {
    const _0x469067 = SET_FURNITURE_DISTANCE.min;
    const _0x31b565 = SET_FURNITURE_DISTANCE.max;
    let _0x224b0c = _0xa5f549;
    if (!_0x224b0c && state.lastRayDirection) {
      _0x224b0c = normalizeVector(state.lastRayDirection);
    }
    _0x224b0c ||= normalizeVector(new mp.Vector3(0, 1, 0));
    const _0x180460 = Math.min(Math.max(_0x3575f6 || 0, _0x469067), _0x31b565);
    if (_0x224b0c) {
      _0x2e5a35 = new mp.Vector3(_0x27c4e5.x + _0x224b0c.x * _0x180460, _0x27c4e5.y + _0x224b0c.y * _0x180460, _0x2e5a35.z);
      _0xa5f549 = _0x224b0c;
      _0x3575f6 = _0x180460;
    }
    const _0x4a5dcd = _0x27c4e5.z - 1;
    if (_0x2e5a35.z < _0x4a5dcd) {
      _0x2e5a35 = new mp.Vector3(_0x2e5a35.x, _0x2e5a35.y, _0x4a5dcd);
    }
  }
  if (_0xa5f549) {
    state.lastRayDirection = _0xa5f549;
  }
  state.lastRayOrigin = new mp.Vector3(_0x27c4e5.x, _0x27c4e5.y, _0x27c4e5.z + 0.5);
  if (_0x12f711 || !state.cachedPosition || distanceSquared(_0x2e5a35, state.cachedPosition) > 0.000001) {
    state.previewObject.position = _0x2e5a35;
    state.cachedPosition = _0x2e5a35;
  }
  if (state.previewObject && mp.objects.exists(state.previewObject)) {
    state.previewObject.setCollision(false, false);
  }
  if (!state.cachedRotation) {
    state.cachedRotation = new mp.Vector3(0, 0, mp.players.local.getHeading());
    state.previewObject.rotation = state.cachedRotation;
  }
}
function computePreviewPlacementPoint() {
  const _0x38c8bb = mp.game.graphics.getScreenActiveResolution(1, 1);
  if (!_0x38c8bb) {
    return null;
  }
  const _0x28bb28 = state.previewScreenProjection || createDefaultScreenProjection();
  const _0x226000 = new mp.Vector3(_0x38c8bb.x / (_0x28bb28.xFactor || 1) + (_0x28bb28.xOffset || 0), _0x38c8bb.y / (_0x28bb28.yFactor || 1) + (_0x28bb28.yOffset || 0), 0);
  let _0x2fb94d = mp.game.graphics.screen2dToWorld3d(_0x226000);
  if (!_0x2fb94d) {
    const _0x207300 = new mp.Vector3(_0x38c8bb.x / 2, _0x38c8bb.y / 2, 0);
    _0x2fb94d = mp.game.graphics.screen2dToWorld3d(_0x207300);
  }
  if (_0x2fb94d) {
    return new mp.Vector3(_0x2fb94d.x, _0x2fb94d.y, _0x2fb94d.z);
  } else {
    return null;
  }
}
function findGroundZForPoint(_0x511fd4) {
  const _0x3a27a6 = _0x35fbe4 => {
    const _0x1ae372 = mp.game.gameplay.getGroundZFor3dCoord(_0x511fd4.x, _0x511fd4.y, _0x511fd4.z + _0x35fbe4, 0, false);
    if (typeof _0x1ae372 != "number" || Number.isNaN(_0x1ae372)) {
      return 0;
    } else {
      return _0x1ae372;
    }
  };
  let _0x809bad = _0x3a27a6(0);
  if (_0x809bad === 0) {
    for (let _0x1a2664 = 1; _0x1a2664 <= state.previewGroundProbeSteps; _0x1a2664 += 1) {
      const _0x59a57a = _0x3a27a6(_0x1a2664 * state.previewGroundProbeStep);
      if (_0x59a57a !== 0) {
        _0x809bad = _0x59a57a;
        break;
      }
    }
  }
  if (_0x809bad === 0) {
    const _0x5b513e = _0x3a27a6(state.previewGroundFallbackHeight);
    if (_0x5b513e !== 0) {
      _0x809bad = _0x5b513e;
    }
  }
  return _0x809bad;
}
function resolvePlacementAdditionalOffset() {
  let _0x2b7e0c = typeof state.previewAdditionalZ == "number" ? state.previewAdditionalZ : 0;
  if (typeof state.previewVariantId == "number" && state.previewVariantOffsets && typeof state.previewVariantOffsets[state.previewVariantId] == "number") {
    _0x2b7e0c += state.previewVariantOffsets[state.previewVariantId];
  }
  return _0x2b7e0c;
}
function bindPreviewControls() {
  if (!state.previewKeybindsBound) {
    mp.keys.bind(38, true, handlePreviewMoveUp);
    mp.keys.bind(40, true, handlePreviewMoveDown);
    mp.keys.bind(37, true, handlePreviewRotateLeft);
    mp.keys.bind(39, true, handlePreviewRotateRight);
    state.previewKeybindsBound = true;
  }
}
function unbindPreviewControls() {
  if (state.previewKeybindsBound) {
    mp.keys.unbind(38, true, handlePreviewMoveUp);
    mp.keys.unbind(40, true, handlePreviewMoveDown);
    mp.keys.unbind(37, true, handlePreviewRotateLeft);
    mp.keys.unbind(39, true, handlePreviewRotateRight);
    state.previewKeybindsBound = false;
  }
}
function handlePreviewMoveUp() {
  adjustPreviewPosition(1);
}
function handlePreviewMoveDown() {
  adjustPreviewPosition(-1);
}
function handlePreviewRotateLeft() {
  adjustPreviewRotation("z", -1);
}
function handlePreviewRotateRight() {
  adjustPreviewRotation("x", 1);
}
function adjustPreviewPosition(_0x7d0a49) {
  if (!state.active || state.stage !== "preview" || chatActive) {
    return;
  }
  if (!state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  const _0x300004 = mp.game.controls.isControlPressed(0, 21);
  const _0x4bffd7 = mp.game.controls.isControlPressed(0, 19);
  let _0x1cbcd0 = 0.1;
  if (_0x300004) {
    _0x1cbcd0 = 1;
  } else if (_0x4bffd7) {
    _0x1cbcd0 = 0.01;
  }
  state.previewVerticalOffset = (state.previewVerticalOffset || 0) + _0x1cbcd0 * _0x7d0a49;
  updatePreviewFromRaycast(true);
}
function adjustPreviewRotation(_0x24b979, _0x1273d2) {
  if (!state.active || state.stage !== "preview" || chatActive) {
    return;
  }
  if (!state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  const _0x4c464f = state.currentObject.rotation;
  if (!_0x4c464f) {
    return;
  }
  const _0x3063b3 = mp.game.controls.isControlPressed(0, 21);
  const _0x2337ea = mp.game.controls.isControlPressed(0, 19);
  let _0x7a5ce0 = 4;
  if (_0x3063b3) {
    _0x7a5ce0 = 16;
  } else if (_0x2337ea) {
    _0x7a5ce0 = 1;
  }
  const _0x255867 = _0x7a5ce0 * _0x1273d2;
  const _0x5947c6 = new mp.Vector3(_0x4c464f.x, _0x4c464f.y, _0x4c464f.z);
  if (_0x24b979 === "z") {
    _0x5947c6.z = normalizeAngle(_0x5947c6.z + _0x255867);
  } else {
    if (_0x24b979 !== "x") {
      return;
    }
    _0x5947c6.x = normalizeAngle(_0x5947c6.x + _0x255867);
  }
  state.currentObject.rotation = _0x5947c6;
  state.cachedRotation = new mp.Vector3(_0x5947c6.x, _0x5947c6.y, _0x5947c6.z);
}
function drawAxes() {
  if (!state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  const _0xea4a67 = state.currentObject.position;
  const _0x5cca02 = getCurrentAxesDirections();
  const _0x39fec0 = mp.game.graphics.getScreenActiveResolution(0, 0);
  const _0x1b1470 = mp.gui.cursor.position;
  let _0x31b612 = null;
  Object.values(AXIS_CONFIG).forEach(_0x6224f1 => {
    const _0x26663d = _0x5cca02[_0x6224f1.key] || _0x6224f1.direction;
    const _0x336d42 = new mp.Vector3(_0xea4a67.x + _0x26663d.x * state.axisLength, _0xea4a67.y + _0x26663d.y * state.axisLength, _0xea4a67.z + _0x26663d.z * state.axisLength);
    const _0x4bd349 = resolveAxisColor(_0x6224f1.key, _0x6224f1.color);
    drawThickLine(_0xea4a67, _0x336d42, _0x4bd349, state.axisThickness);
    const _0x57307a = new mp.Vector3(_0x336d42.x + _0x26663d.x * 0.15, _0x336d42.y + _0x26663d.y * 0.15, _0x336d42.z + _0x26663d.z * 0.15 + 0.05);
    if (_0x6224f1.key === "z") {
      _0x57307a.z += 0.15;
    }
    drawAxisLabel(_0x6224f1.key.toUpperCase(), _0x57307a, _0x4bd349);
    if (_0x1b1470 && _0x39fec0) {
      const _0x146ff9 = buildAxisScreenPoints(_0xea4a67, _0x26663d, _0x39fec0);
      for (let _0x8555db = 0; _0x8555db < _0x146ff9.length - 1; _0x8555db += 1) {
        const _0x920e9c = _0x146ff9[_0x8555db];
        const _0x53a826 = _0x146ff9[_0x8555db + 1];
        if (distancePointToSegment2D(_0x1b1470[0], _0x1b1470[1], _0x920e9c[0], _0x920e9c[1], _0x53a826[0], _0x53a826[1]) <= state.axisSelectionThreshold) {
          _0x31b612 = _0x6224f1.key;
          break;
        }
      }
    }
  });
  if (!state.draggingAxis) {
    state.hoveredAxis = _0x31b612;
  }
}
function drawRotationGizmo() {
  if (!state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  const _0x5c052a = state.currentObject.position;
  const _0x4b62eb = getCurrentAxesDirections();
  const _0x15a28b = mp.game.graphics.getScreenActiveResolution(0, 0);
  const _0x5086b6 = mp.gui.cursor.position;
  let _0x1b495e = null;
  Object.values(AXIS_CONFIG).forEach(_0x16b18b => {
    const _0x1abb3f = resolveAxisColor(_0x16b18b.key, _0x16b18b.color);
    const _0x1b6183 = state.axisLength * 1.05;
    const _0x1d94e2 = _0x4b62eb[_0x16b18b.key] || _0x16b18b.direction;
    const _0x38ed0e = buildRotationCirclePoints(_0x5c052a, _0x1d94e2, _0x1b6183, 48);
    for (let _0x2e61d9 = 0; _0x2e61d9 < _0x38ed0e.length; _0x2e61d9 += 1) {
      drawThickLine(_0x38ed0e[_0x2e61d9], _0x38ed0e[(_0x2e61d9 + 1) % _0x38ed0e.length], _0x1abb3f, state.axisThickness * 0.85);
    }
    const _0x5381b4 = computeRotationLabelPosition(_0x5c052a, _0x1d94e2, _0x1b6183 + 0.2);
    drawAxisLabel(_0x16b18b.key.toUpperCase(), _0x5381b4, _0x1abb3f, true);
    if (_0x5086b6 && _0x15a28b) {
      for (let _0x53ad91 = 0; _0x53ad91 < _0x38ed0e.length; _0x53ad91 += 1) {
        const _0x1c8a7e = _0x38ed0e[_0x53ad91];
        const _0x25df38 = _0x38ed0e[(_0x53ad91 + 1) % _0x38ed0e.length];
        const _0x2f632f = mp.game.graphics.world3dToScreen2d(_0x1c8a7e.x, _0x1c8a7e.y, _0x1c8a7e.z);
        const _0x287a44 = mp.game.graphics.world3dToScreen2d(_0x25df38.x, _0x25df38.y, _0x25df38.z);
        if (_0x2f632f && _0x287a44) {
          if (distancePointToSegment2D(_0x5086b6[0], _0x5086b6[1], _0x2f632f.x * _0x15a28b.x, _0x2f632f.y * _0x15a28b.y, _0x287a44.x * _0x15a28b.x, _0x287a44.y * _0x15a28b.y) <= state.rotationSelectionThreshold) {
            _0x1b495e = _0x16b18b.key;
            break;
          }
        }
      }
    }
  });
  if (!state.draggingAxis) {
    state.hoveredAxis = _0x1b495e;
  }
}
function buildRotationCirclePoints(_0x5a3891, _0x31c54f, _0x113bff, _0xfe6c2f = 48) {
  const _0x125639 = normalizeVector(_0x31c54f);
  if (!_0x125639) {
    return [];
  }
  let _0x20ac7a = normalizeVector(crossProduct(_0x125639, new mp.Vector3(0, 0, 1)));
  _0x20ac7a ||= normalizeVector(crossProduct(_0x125639, new mp.Vector3(0, 1, 0)));
  let _0x5b0aed = null;
  if (_0x20ac7a) {
    _0x5b0aed = normalizeVector(crossProduct(_0x125639, _0x20ac7a));
  }
  if (!_0x20ac7a || !_0x5b0aed) {
    return [];
  }
  const _0x3b687b = [];
  for (let _0x532fd6 = 0; _0x532fd6 < _0xfe6c2f; _0x532fd6 += 1) {
    const _0x4e66bd = Math.PI * 2 * _0x532fd6 / _0xfe6c2f;
    const _0x4440ec = Math.cos(_0x4e66bd);
    const _0x28b2ed = Math.sin(_0x4e66bd);
    const _0x301581 = new mp.Vector3(_0x5a3891.x + (_0x20ac7a.x * _0x4440ec + _0x5b0aed.x * _0x28b2ed) * _0x113bff, _0x5a3891.y + (_0x20ac7a.y * _0x4440ec + _0x5b0aed.y * _0x28b2ed) * _0x113bff, _0x5a3891.z + (_0x20ac7a.z * _0x4440ec + _0x5b0aed.z * _0x28b2ed) * _0x113bff);
    _0x3b687b.push(_0x301581);
  }
  return _0x3b687b;
}
function computeRotationLabelPosition(_0xa8014d, _0x2c18dd, _0x4b62e6) {
  const _0x19a59b = normalizeVector(_0x2c18dd);
  if (!_0x19a59b) {
    return new mp.Vector3(_0xa8014d.x, _0xa8014d.y, _0xa8014d.z + 0.1);
  }
  let _0x2024ed = normalizeVector(crossProduct(_0x19a59b, new mp.Vector3(0, 0, 1)));
  _0x2024ed ||= normalizeVector(crossProduct(_0x19a59b, new mp.Vector3(0, 1, 0)));
  _0x2024ed ||= new mp.Vector3(1, 0, 0);
  return new mp.Vector3(_0xa8014d.x + _0x2024ed.x * _0x4b62e6 + _0x19a59b.x * 0.1, _0xa8014d.y + _0x2024ed.y * _0x4b62e6 + _0x19a59b.y * 0.1, _0xa8014d.z + _0x2024ed.z * _0x4b62e6 + _0x19a59b.z * 0.1);
}
function drawThickLine(_0x126922, _0x5497dd, _0x33570e, _0x53206e) {
  mp.game.graphics.drawLine(_0x126922.x, _0x126922.y, _0x126922.z, _0x5497dd.x, _0x5497dd.y, _0x5497dd.z, _0x33570e[0], _0x33570e[1], _0x33570e[2], _0x33570e[3]);
  const _0xaa7fd = normalizeVector(new mp.Vector3(_0x5497dd.x - _0x126922.x, _0x5497dd.y - _0x126922.y, _0x5497dd.z - _0x126922.z));
  if (!_0xaa7fd) {
    return;
  }
  let _0x1396ee = new mp.Vector3(0, 0, 1);
  let _0x57f33a = crossProduct(_0xaa7fd, _0x1396ee);
  if (vectorLength(_0x57f33a) < 0.0001) {
    _0x1396ee = new mp.Vector3(0, 1, 0);
    _0x57f33a = crossProduct(_0xaa7fd, _0x1396ee);
  }
  _0x57f33a = normalizeVector(_0x57f33a);
  const _0x2be711 = normalizeVector(crossProduct(_0xaa7fd, _0x57f33a));
  [scaleVector(_0x57f33a, _0x53206e), scaleVector(_0x57f33a, -_0x53206e), scaleVector(_0x2be711, _0x53206e), scaleVector(_0x2be711, -_0x53206e)].forEach(_0x12a3c7 => {
    const _0x1e4028 = addVectors(_0x126922, _0x12a3c7);
    const _0x36ff82 = addVectors(_0x5497dd, _0x12a3c7);
    mp.game.graphics.drawLine(_0x1e4028.x, _0x1e4028.y, _0x1e4028.z, _0x36ff82.x, _0x36ff82.y, _0x36ff82.z, _0x33570e[0], _0x33570e[1], _0x33570e[2], _0x33570e[3]);
  });
}
function drawAxisLabel(_0x4f13c6, _0x492954, _0x12e78c, _0x51ebd4 = false) {
  const _0x599a11 = _0x51ebd4 ? state.axisLabelScale + 0.15 : state.axisLabelScale;
  mp.game.graphics.drawText(_0x4f13c6, [_0x492954.x, _0x492954.y, _0x492954.z], {
    font: 0,
    color: [_0x12e78c[0], _0x12e78c[1], _0x12e78c[2], 230],
    scale: [_0x599a11, _0x599a11],
    centre: true,
    outline: true
  });
}
function distancePointToSegment2D(_0x3c1557, _0x21faf0, _0x90385b, _0x4da08a, _0x136d0b, _0x843280) {
  const _0x5a08b9 = _0x136d0b - _0x90385b;
  const _0x20700c = _0x843280 - _0x4da08a;
  const _0x512793 = _0x5a08b9 * _0x5a08b9 + _0x20700c * _0x20700c;
  if (_0x512793 === 0) {
    return Math.sqrt((_0x3c1557 - _0x90385b) ** 2 + (_0x21faf0 - _0x4da08a) ** 2);
  }
  let _0x56c75d = ((_0x3c1557 - _0x90385b) * _0x5a08b9 + (_0x21faf0 - _0x4da08a) * _0x20700c) / _0x512793;
  _0x56c75d = Math.max(0, Math.min(1, _0x56c75d));
  const _0xdc7146 = _0x90385b + _0x56c75d * _0x5a08b9;
  const _0x3b55c9 = _0x4da08a + _0x56c75d * _0x20700c;
  return Math.sqrt((_0x3c1557 - _0xdc7146) ** 2 + (_0x21faf0 - _0x3b55c9) ** 2);
}
function resolveAxisColor(_0x29e3d7, _0x3760b2) {
  if (state.draggingAxis === _0x29e3d7) {
    return [170, 170, 170, 255];
  } else if (state.hoveredAxis === _0x29e3d7) {
    return [255, 255, 255, 255];
  } else {
    return _0x3760b2;
  }
}
function getDefaultAxisDirections() {
  return {
    x: new mp.Vector3(AXIS_CONFIG.x.direction.x, AXIS_CONFIG.x.direction.y, AXIS_CONFIG.x.direction.z),
    y: new mp.Vector3(AXIS_CONFIG.y.direction.x, AXIS_CONFIG.y.direction.y, AXIS_CONFIG.y.direction.z),
    z: new mp.Vector3(AXIS_CONFIG.z.direction.x, AXIS_CONFIG.z.direction.y, AXIS_CONFIG.z.direction.z)
  };
}
function getCurrentAxesDirections() {
  const _0x4be997 = getDefaultAxisDirections();
  if (!state.currentObject || !mp.objects.exists(state.currentObject)) {
    return _0x4be997;
  }
  try {
    const _0x2b034d = state.currentObject.rotation;
    if (!_0x2b034d) {
      return _0x4be997;
    }
    const _0x1d9e87 = rotationToAxes(_0x2b034d);
    return _0x1d9e87 || _0x4be997;
  } catch (_0x15d3cc) {
    return _0x4be997;
  }
}
function computeAxisScreenVector(_0x46a6f4, _0x2c8da6) {
  if (!_0x46a6f4 || !_0x2c8da6) {
    return null;
  }
  const _0x1620a2 = mp.game.graphics.getScreenActiveResolution(0, 0);
  if (!_0x1620a2) {
    return null;
  }
  const _0x5da561 = normalizeVector(_0x2c8da6);
  if (!_0x5da561) {
    return null;
  }
  const _0x4db088 = buildAxisScreenPoints(_0x46a6f4, _0x5da561, _0x1620a2);
  if (_0x4db088.length < 2) {
    return null;
  }
  const _0x4321e0 = _0x4db088[0];
  const _0x1f6472 = _0x4db088[_0x4db088.length - 1];
  return [_0x1f6472[0] - _0x4321e0[0], _0x1f6472[1] - _0x4321e0[1]];
}
function computeRotationMultiplier(_0x1ab84a) {
  const _0x31e9fc = normalizeVector(_0x1ab84a);
  if (!_0x31e9fc) {
    return 1;
  }
  const _0xd9ca0b = getGameplayCameraDirection();
  if (!_0xd9ca0b) {
    return 1;
  }
  if (_0x31e9fc.x * _0xd9ca0b.x + _0x31e9fc.y * _0xd9ca0b.y + _0x31e9fc.z * _0xd9ca0b.z >= 0) {
    return -1;
  } else {
    return 1;
  }
}
function updateDragging() {
  if (!state.draggingAxis || !state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  const _0x26fead = mp.gui.cursor.position;
  if (!_0x26fead || !state.dragStartCursor) {
    return;
  }
  const _0x3103f8 = _0x26fead[0] - state.dragStartCursor[0];
  const _0x375e0a = _0x26fead[1] - state.dragStartCursor[1];
  const _0xd6208e = mp.game.controls.isControlPressed(0, 21);
  const _0x39d686 = state.dragSensitivity * (state.stage === "editing" && _0xd6208e && state.dragSensitivityBoostMultiplier || 1);
  if (state.transformMode === "translate") {
    if (!state.dragStartPosition) {
      return;
    }
    const _0x3eec21 = normalizeVector(getCurrentAxesDirections()[state.draggingAxis]) || state.dragAxisDirection;
    if (_0x3eec21) {
      state.dragAxisDirection = _0x3eec21;
    }
    if (_0x3eec21) {
      const _0x4dab6e = computeAxisScreenVector(state.currentObject.position, _0x3eec21);
      if (_0x4dab6e) {
        state.dragAxisScreenVector = _0x4dab6e;
      }
    }
    let _0x4cba55 = 0;
    if (state.dragAxisScreenVector) {
      const _0x46afca = state.dragAxisScreenVector;
      const _0x41ab7e = _0x46afca[0] ** 2 + _0x46afca[1] ** 2;
      if (_0x41ab7e > 0.0001) {
        const _0x361b5a = 1 / Math.sqrt(_0x41ab7e);
        const _0x34d7eb = [_0x46afca[0] * _0x361b5a, _0x46afca[1] * _0x361b5a];
        _0x4cba55 = (_0x3103f8 * _0x34d7eb[0] + _0x375e0a * _0x34d7eb[1]) * _0x39d686;
      }
    }
    if ((!_0x3eec21 || Math.abs(_0x4cba55) < 0.000001) && state.draggingAxis) {
      if (state.draggingAxis === "x") {
        _0x4cba55 = -_0x3103f8 * _0x39d686;
      } else if (state.draggingAxis === "y") {
        _0x4cba55 = _0x3103f8 * _0x39d686;
      } else if (state.draggingAxis === "z") {
        _0x4cba55 = -_0x375e0a * _0x39d686;
      }
    }
    let _0x4ba1de;
    let _0x225e89 = _0x3eec21 || state.dragAxisDirection;
    if (!_0x225e89 && state.draggingAxis) {
      const _0x26177 = AXIS_CONFIG[state.draggingAxis];
      if (_0x26177) {
        _0x225e89 = normalizeVector(_0x26177.direction);
      }
    }
    _0x4ba1de = _0x225e89 ? new mp.Vector3(state.dragStartPosition.x + _0x225e89.x * _0x4cba55, state.dragStartPosition.y + _0x225e89.y * _0x4cba55, state.dragStartPosition.z + _0x225e89.z * _0x4cba55) : new mp.Vector3(state.dragStartPosition.x, state.dragStartPosition.y, state.dragStartPosition.z);
    state.currentObject.position = _0x4ba1de;
    state.cachedPosition = _0x4ba1de;
  } else {
    if (!state.dragStartRotation) {
      return;
    }
    let _0x1ee38f = 0;
    if (state.draggingAxis === "x") {
      _0x1ee38f = -_0x375e0a * state.rotationSensitivity;
    } else if (state.draggingAxis === "y" || state.draggingAxis === "z") {
      _0x1ee38f = _0x3103f8 * state.rotationSensitivity;
    }
    _0x1ee38f *= typeof state.dragAxisRotationMultiplier == "number" ? state.dragAxisRotationMultiplier : 1;
    const _0x52eaf1 = new mp.Vector3(state.dragStartRotation.x, state.dragStartRotation.y, state.dragStartRotation.z);
    if (state.draggingAxis === "x") {
      _0x52eaf1.x = normalizeAngle(_0x52eaf1.x + _0x1ee38f);
    } else if (state.draggingAxis === "y") {
      _0x52eaf1.y = normalizeAngle(_0x52eaf1.y + _0x1ee38f);
    } else if (state.draggingAxis === "z") {
      _0x52eaf1.z = normalizeAngle(_0x52eaf1.z + _0x1ee38f);
    }
    state.currentObject.rotation = _0x52eaf1;
    state.cachedRotation = _0x52eaf1;
  }
  if (state.currentObject && mp.objects.exists(state.currentObject)) {
    state.currentObject.setCollision(false, false);
  }
}
function onClick(_0x416a85, _0x2ec43b, _0x4feb1f, _0x1f72a1) {
  if (!!state.active && !dialog_window && !chatActive) {
    if (_0x1f72a1 !== "right") {
      if (_0x1f72a1 === "left") {
        if (_0x4feb1f === "down") {
          if (state.stage === "preview") {
            if (!state.previewOnly) {
              anchorPreview();
            }
            confirmPlacement();
          } else if (state.stage === "editing") {
            if (state.hoveredAxis) {
              tryStartDrag();
            } else {
              confirmPlacement();
            }
          }
        } else if (_0x4feb1f === "up" && state.stage === "editing" && state.draggingAxis) {
          stopDrag();
        }
      }
    } else if (_0x4feb1f === "down") {
      if (state.stage === "preview") {
        if (!state.previewOnly) {
          anchorPreview();
        }
      } else if (state.stage === "editing") {
        returnToPreview();
      }
    }
  }
}
function anchorPreview() {
  if (state.previewObject && mp.objects.exists(state.previewObject)) {
    if (!state.previewOnly) {
      state.previewObject.setAlpha(200);
      state.previewObject.freezePosition(false);
      state.previewObject.setCollision(false, false);
      state.currentObject = state.previewObject;
      state.stage = "editing";
      state.draggingAxis = null;
      state.dragStartCursor = null;
      state.dragStartPosition = null;
      state.dragStartRotation = null;
      unbindPreviewControls();
      showHint();
      mp.gui.cursor.show(true, true);
    }
  }
}
function returnToPreview() {
  if (state.previewObject && mp.objects.exists(state.previewObject)) {
    stopDrag();
    state.stage = "preview";
    state.previewObject.setAlpha(110);
    state.previewObject.freezePosition(true);
    state.previewObject.setCollision(false, false);
    state.currentObject = state.previewObject;
    state.cachedPosition = new mp.Vector3(state.previewObject.position.x, state.previewObject.position.y, state.previewObject.position.z);
    showHint();
    updatePreviewFromRaycast(true);
    bindPreviewControls();
    if (!state.cursorWasVisible) {
      mp.gui.cursor.show(false, false);
    }
  }
}
function tryStartDrag() {
  if (!state.hoveredAxis || !state.currentObject || !mp.objects.exists(state.currentObject)) {
    return;
  }
  state.draggingAxis = state.hoveredAxis;
  const _0x13a62c = mp.gui.cursor.position;
  if (_0x13a62c) {
    state.dragStartCursor = [_0x13a62c[0], _0x13a62c[1]];
  }
  const _0x198c3a = getCurrentAxesDirections()[state.draggingAxis];
  state.dragAxisDirection = normalizeVector(_0x198c3a);
  state.dragAxisScreenVector = computeAxisScreenVector(state.currentObject.position, state.dragAxisDirection);
  state.dragAxisRotationMultiplier = 1;
  if (state.transformMode === "translate") {
    const _0x17d3e8 = state.currentObject.position;
    state.dragStartPosition = new mp.Vector3(_0x17d3e8.x, _0x17d3e8.y, _0x17d3e8.z);
    state.dragStartRotation = null;
    state.dragAxisScreenVector ||= computeAxisScreenVector(state.currentObject.position, _0x198c3a);
  } else {
    const _0x25a912 = state.currentObject.rotation;
    state.dragStartRotation = new mp.Vector3(_0x25a912.x, _0x25a912.y, _0x25a912.z);
    state.dragStartPosition = null;
    state.dragAxisRotationMultiplier = computeRotationMultiplier(state.dragAxisDirection || _0x198c3a);
  }
}
function stopDrag() {
  state.draggingAxis = null;
  state.dragStartCursor = null;
  state.dragStartPosition = null;
  state.dragStartRotation = null;
  state.dragAxisDirection = null;
  state.dragAxisScreenVector = null;
  state.dragAxisRotationMultiplier = 1;
}
function stopInternal(_0xebc0d2 = false) {
  if (state.loadInterval) {
    clearInterval(state.loadInterval);
    state.loadInterval = null;
  }
  state.stage = "idle";
  if (state.previewObject && mp.objects.exists(state.previewObject)) {
    state.previewObject.destroy();
  }
  state.previewObject = null;
  if (state.currentObject && mp.objects.exists(state.currentObject) && state.currentObject !== state.previewObject) {
    state.currentObject.destroy();
  }
  state.currentObject = null;
  if (state.modelHash) {
    mp.game.streaming.setModelAsNoLongerNeeded(state.modelHash);
  }
  if (state.active && !state.cursorWasVisible) {
    mp.gui.cursor.show(false, false);
  } else if (state.cursorWasVisible) {
    mp.gui.cursor.show(true, true);
  }
  state.hoveredAxis = null;
  state.draggingAxis = null;
  state.dragStartCursor = null;
  state.dragStartPosition = null;
  state.dragStartRotation = null;
  state.dragAxisDirection = null;
  state.dragAxisScreenVector = null;
  state.dragAxisRotationMultiplier = 1;
  state.lastRayOrigin = null;
  state.lastRayDirection = null;
  state.cachedPosition = null;
  state.cachedRotation = null;
  state.modelDimensions = null;
  state.groundOffset = 0;
  state.axisLength = 2;
  state.transformMode = "translate";
  state.previewAdditionalZ = 0;
  state.previewVariantId = null;
  state.previewScreenProjection = createDefaultScreenProjection();
  state.previewVariantOffsets = createDefaultVariantOffsets();
  state.initialStage = "preview";
  state.initialPositionProvided = false;
  state.previewVerticalOffset = 0;
  state.previewOnly = false;
  state.active = false;
  state.modelName = null;
  state.modelHash = null;
  state.dimension = null;
  unbindPreviewControls();
  inObjectEditor = false;
  main_browser.execute("APPS.state.hud.in_object_editor = false");
}
function resolveModel(_0x10f111, _0x167913 = null) {
  if (typeof _0x10f111 == "number") {
    return _0x10f111;
  }
  if (typeof _0x10f111 == "string") {
    const _0x3c70d9 = _0x10f111.trim();
    if (!_0x3c70d9.length) {
      return null;
    }
    if (/^0x[0-9a-f]+$/i.test(_0x3c70d9)) {
      return parseInt(_0x3c70d9, 16);
    } else {
      return mp.game.joaat(_0x3c70d9);
    }
  }
  return null;
}
function resolveRotation(_0x3c47fe) {
  if (!_0x3c47fe) {
    return null;
  }
  if (typeof _0x3c47fe == "string") {
    try {
      return vectorFromObject(JSON.parse(_0x3c47fe));
    } catch (_0x296f3f) {
      return null;
    }
  }
  if (typeof _0x3c47fe == "object") {
    return vectorFromObject(_0x3c47fe);
  } else {
    return null;
  }
}
function resolvePosition(_0x354e08) {
  if (!_0x354e08) {
    return null;
  }
  if (typeof _0x354e08 == "string") {
    try {
      return vectorFromObject(JSON.parse(_0x354e08));
    } catch (_0x505964) {
      return null;
    }
  }
  if (typeof _0x354e08 == "object") {
    return vectorFromObject(_0x354e08);
  } else {
    return null;
  }
}
function createDefaultScreenProjection() {
  return {
    xFactor: 2.05,
    xOffset: -10,
    yFactor: 1.6,
    yOffset: 0
  };
}
function resolvePreviewProjection(_0x5810d1) {
  const _0x5cace4 = createDefaultScreenProjection();
  if (!_0x5810d1 || typeof _0x5810d1 != "object") {
    return _0x5cace4;
  }
  const _0x5da3f5 = _0x5810d1.previewProjection || _0x5810d1.screenProjection || _0x5810d1.projection;
  if (_0x5da3f5 && typeof _0x5da3f5 == "object") {
    if (typeof _0x5da3f5.xFactor == "number") {
      _0x5cace4.xFactor = _0x5da3f5.xFactor;
    }
    if (typeof _0x5da3f5.xOffset == "number") {
      _0x5cace4.xOffset = _0x5da3f5.xOffset;
    }
    if (typeof _0x5da3f5.yFactor == "number") {
      _0x5cace4.yFactor = _0x5da3f5.yFactor;
    }
    if (typeof _0x5da3f5.yOffset == "number") {
      _0x5cace4.yOffset = _0x5da3f5.yOffset;
    }
  }
  [{
    key: "x_factor",
    prop: "xFactor"
  }, {
    key: "x_offset",
    prop: "xOffset"
  }, {
    key: "y_factor",
    prop: "yFactor"
  }, {
    key: "y_offset",
    prop: "yOffset"
  }].forEach(({
    key: _0x4908b0,
    prop: _0x1e06ed
  }) => {
    if (typeof _0x5810d1[_0x4908b0] == "number") {
      _0x5cace4[_0x1e06ed] = _0x5810d1[_0x4908b0];
    }
  });
  return _0x5cace4;
}
function createDefaultVariantOffsets() {
  return {
    ...DEFAULT_VARIANT_OFFSETS
  };
}
function resolvePreviewVariantOffsets(_0x4e1ada) {
  const _0x464871 = createDefaultVariantOffsets();
  if (!_0x4e1ada || typeof _0x4e1ada != "object") {
    return _0x464871;
  }
  const _0xb689f7 = _0x4e1ada.variantOffsets || _0x4e1ada.previewVariantOffsets;
  if (_0xb689f7 && typeof _0xb689f7 == "object") {
    Object.keys(_0xb689f7).forEach(_0x4611f3 => {
      const _0x523e44 = Number(_0x4611f3);
      if (!Number.isNaN(_0x523e44) && typeof _0xb689f7[_0x4611f3] == "number") {
        _0x464871[_0x523e44] = _0xb689f7[_0x4611f3];
      }
    });
  }
  return _0x464871;
}
function resolvePreviewAdditionalZ(_0xc9fdd2) {
  if (!_0xc9fdd2) {
    return 0;
  }
  const _0x45a19d = ["additionalZ", "additional_z", "additional"];
  for (let _0x272f58 = 0; _0x272f58 < _0x45a19d.length; _0x272f58 += 1) {
    const _0x13d5b5 = _0x45a19d[_0x272f58];
    if (typeof _0xc9fdd2[_0x13d5b5] == "number") {
      return _0xc9fdd2[_0x13d5b5];
    }
  }
  return 0;
}
function resolvePreviewVariant(_0x3f3575) {
  if (!_0x3f3575) {
    return null;
  }
  const _0x1055c4 = ["barricadeNumber", "barricade_number", "variantId", "variant"];
  for (let _0x517f68 = 0; _0x517f68 < _0x1055c4.length; _0x517f68 += 1) {
    const _0x15fe6c = _0x1055c4[_0x517f68];
    if (typeof _0x3f3575[_0x15fe6c] == "number") {
      return _0x3f3575[_0x15fe6c];
    }
  }
  return null;
}
function vectorFromObject(_0x4b3e3c) {
  if (!_0x4b3e3c) {
    return null;
  }
  const _0x8746a4 = typeof _0x4b3e3c.x == "number" ? _0x4b3e3c.x : 0;
  const _0x2d8842 = typeof _0x4b3e3c.y == "number" ? _0x4b3e3c.y : 0;
  const _0x50f35c = typeof _0x4b3e3c.z == "number" ? _0x4b3e3c.z : 0;
  return new mp.Vector3(_0x8746a4, _0x2d8842, _0x50f35c);
}
function performCameraRaycast(_0x4fa69f = 100) {
  const _0x57acfd = ensureGameplayCamera();
  let _0x5ba02e;
  let _0x46ba3c;
  if (_0x57acfd && typeof _0x57acfd.getCoord == "function") {
    const _0x2ab7b4 = _0x57acfd.getCoord();
    _0x5ba02e = new mp.Vector3(_0x2ab7b4.x, _0x2ab7b4.y, _0x2ab7b4.z + 0.5);
  } else {
    const _0x53e098 = mp.players.local.position;
    _0x5ba02e = new mp.Vector3(_0x53e098.x, _0x53e098.y, _0x53e098.z + 0.5);
  }
  if (_0x57acfd && typeof _0x57acfd.getDirection == "function") {
    const _0x59e898 = _0x57acfd.getDirection();
    _0x46ba3c = new mp.Vector3(_0x59e898.x, _0x59e898.y, _0x59e898.z);
  } else if (_0x57acfd && typeof _0x57acfd.getRot == "function") {
    _0x46ba3c = rotationToDirection(_0x57acfd.getRot(2));
  } else {
    _0x46ba3c = headingToDirection(mp.players.local.getHeading());
  }
  const _0x2c614c = _0x5ba02e;
  const _0x4fb2c9 = new mp.Vector3(_0x5ba02e.x + _0x46ba3c.x * _0x4fa69f, _0x5ba02e.y + _0x46ba3c.y * _0x4fa69f, _0x5ba02e.z + _0x46ba3c.z * _0x4fa69f);
  state.lastRayOrigin = new mp.Vector3(_0x2c614c.x, _0x2c614c.y, _0x2c614c.z);
  state.lastRayDirection = normalizeVector(_0x46ba3c);
  return mp.raycasting.testPointToPoint(_0x2c614c, _0x4fb2c9, mp.players.local, [1, 16, 256]);
}
function rotationToAxes(_0x1ee766) {
  if (!_0x1ee766) {
    return null;
  }
  const _0x242ae1 = degToRad(_0x1ee766.x || 0);
  const _0x4eb5db = degToRad(_0x1ee766.y || 0);
  const _0x21f415 = degToRad(_0x1ee766.z || 0);
  const _0x5083ff = Math.cos(_0x242ae1);
  const _0x4bf0a2 = Math.sin(_0x242ae1);
  const _0x41b03e = Math.cos(_0x4eb5db);
  const _0x472c32 = Math.sin(_0x4eb5db);
  const _0x1f1a1c = Math.cos(_0x21f415);
  const _0x4721a7 = Math.sin(_0x21f415);
  const _0x5c5858 = _0x1f1a1c * _0x41b03e;
  const _0x3a1d38 = _0x1f1a1c * _0x472c32 * _0x4bf0a2 - _0x4721a7 * _0x5083ff;
  const _0x3a158f = _0x1f1a1c * _0x472c32 * _0x5083ff + _0x4721a7 * _0x4bf0a2;
  const _0x33bb5b = _0x4721a7 * _0x41b03e;
  const _0x5f1d66 = _0x4721a7 * _0x472c32 * _0x4bf0a2 + _0x1f1a1c * _0x5083ff;
  const _0x6f3c07 = _0x4721a7 * _0x472c32 * _0x5083ff - _0x1f1a1c * _0x4bf0a2;
  const _0x252436 = -_0x472c32;
  const _0x227616 = _0x41b03e * _0x4bf0a2;
  const _0x2d0ac4 = _0x41b03e * _0x5083ff;
  return {
    x: normalizeVector(new mp.Vector3(_0x5c5858, _0x33bb5b, _0x252436)) || new mp.Vector3(1, 0, 0),
    y: normalizeVector(new mp.Vector3(_0x3a1d38, _0x5f1d66, _0x227616)) || new mp.Vector3(0, 1, 0),
    z: normalizeVector(new mp.Vector3(_0x3a158f, _0x6f3c07, _0x2d0ac4)) || new mp.Vector3(0, 0, 1)
  };
}
function rotationToDirection(_0xda8146) {
  const _0x489a34 = degToRad(_0xda8146.z);
  const _0x2e80c5 = degToRad(_0xda8146.x);
  const _0xcfa74a = Math.abs(Math.cos(_0x2e80c5));
  return new mp.Vector3(-Math.sin(_0x489a34) * _0xcfa74a, Math.cos(_0x489a34) * _0xcfa74a, Math.sin(_0x2e80c5));
}
function headingToDirection(_0x3f54bc) {
  const _0x5fff46 = degToRad(_0x3f54bc);
  return new mp.Vector3(-Math.sin(_0x5fff46), Math.cos(_0x5fff46), -0.3);
}
function normalizeAngle(_0x34f90e) {
  let _0x1b9c9b = _0x34f90e % 360;
  if (_0x1b9c9b > 180) {
    _0x1b9c9b -= 360;
  }
  if (_0x1b9c9b < -180) {
    _0x1b9c9b += 360;
  }
  return _0x1b9c9b;
}
function normalizeVector(_0x41ce24) {
  const _0x26dca4 = vectorLength(_0x41ce24);
  if (_0x26dca4) {
    return new mp.Vector3(_0x41ce24.x / _0x26dca4, _0x41ce24.y / _0x26dca4, _0x41ce24.z / _0x26dca4);
  } else {
    return null;
  }
}
function buildAxisScreenPoints(_0x497c75, _0x5c27b4, _0x2b38af, _0x5a4b95 = 12) {
  if (!_0x497c75 || !_0x5c27b4 || !_0x2b38af) {
    return [];
  }
  const _0x11c75b = normalizeVector(_0x5c27b4);
  if (!_0x11c75b) {
    return [];
  }
  const _0xc03e4e = [];
  for (let _0x4a4864 = 0; _0x4a4864 <= _0x5a4b95; _0x4a4864 += 1) {
    const _0x171149 = state.axisLength * _0x4a4864 / _0x5a4b95;
    const _0x1e0d1f = new mp.Vector3(_0x497c75.x + _0x11c75b.x * _0x171149, _0x497c75.y + _0x11c75b.y * _0x171149, _0x497c75.z + _0x11c75b.z * _0x171149);
    const _0x27d9f8 = mp.game.graphics.world3dToScreen2d(_0x1e0d1f.x, _0x1e0d1f.y, _0x1e0d1f.z);
    if (_0x27d9f8) {
      _0xc03e4e.push([_0x27d9f8.x * _0x2b38af.x, _0x27d9f8.y * _0x2b38af.y]);
    }
  }
  return _0xc03e4e;
}
function vectorLength(_0x2720d4) {
  return Math.sqrt(_0x2720d4.x ** 2 + _0x2720d4.y ** 2 + _0x2720d4.z ** 2);
}
function crossProduct(_0x14b78, _0x9ba3e5) {
  return new mp.Vector3(_0x14b78.y * _0x9ba3e5.z - _0x14b78.z * _0x9ba3e5.y, _0x14b78.z * _0x9ba3e5.x - _0x14b78.x * _0x9ba3e5.z, _0x14b78.x * _0x9ba3e5.y - _0x14b78.y * _0x9ba3e5.x);
}
function scaleVector(_0x3ada24, _0x48e8bb) {
  return new mp.Vector3(_0x3ada24.x * _0x48e8bb, _0x3ada24.y * _0x48e8bb, _0x3ada24.z * _0x48e8bb);
}
function addVectors(_0x55c7a7, _0x1ae17f) {
  return new mp.Vector3(_0x55c7a7.x + _0x1ae17f.x, _0x55c7a7.y + _0x1ae17f.y, _0x55c7a7.z + _0x1ae17f.z);
}
function degToRad(_0x8cdf8) {
  return _0x8cdf8 * Math.PI / 180;
}
function distanceSquared(_0x3a288f, _0x2ba61c) {
  return (_0x3a288f.x - _0x2ba61c.x) ** 2 + (_0x3a288f.y - _0x2ba61c.y) ** 2 + (_0x3a288f.z - _0x2ba61c.z) ** 2;
}
function notify(_0x3061aa) {
  if (_0x3061aa) {
    mp.game.ui.notifications.show(_0x3061aa, false, 0, 6);
  }
}
function showHint() {
  main_browser.execute("APPS.state.hud.in_object_editor = '" + state.stage + "'");
}
function toggleTransformMode() {
  if (state.transformMode === "translate") {
    state.transformMode = "rotate";
  } else {
    state.transformMode = "translate";
  }
  stopDrag();
  state.hoveredAxis = null;
}
function getGameplayCameraDirection() {
  try {
    const _0x59caba = mp.game.cam.getGameplayCamRot(2);
    if (_0x59caba) {
      const _0x12b6f8 = rotationToDirection(_0x59caba);
      if (_0x12b6f8) {
        return _0x12b6f8;
      }
    }
  } catch (_0x2eab01) {}
  if (state.lastRayDirection) {
    return state.lastRayDirection;
  } else {
    return null;
  }
}
function ensureGameplayCamera() {
  if (!state.gameplayCamera) {
    try {
      state.gameplayCamera = mp.cameras.new("gameplay");
    } catch (_0x4caae2) {
      state.gameplayCamera = null;
    }
  }
  return state.gameplayCamera;
}
function bindEvents() {
  mp.events.add("render", onRender);
  mp.events.add("click", onClick);
  mp.events.add("Client_ObjectEditor_Start", (_0x8f2315, _0x4b228c, _0x4ae840) => {
    start(_0x8f2315, _0x4b228c, parseOptions(_0x4ae840));
  });
  mp.events.add("Client_ObjectEditor_Stop", () => {
    cancelPlacement(false);
  });
  mp.events.add("Client_ObjectEditor_ConfirmPlacement", () => {
    confirmPlacement(false, true);
  });
  mp.events.add("Client_ObjectEditor_ForceCancel", () => {
    cancelPlacement(false);
  });
  mp.keys.bind(82, true, () => {
    if (state.active && state.stage === "editing" && !chatActive) {
      toggleTransformMode();
    }
  });
  global.ObjectEditorConfirm = () => confirmPlacement();
  global.ObjectEditorCancel = () => cancelPlacement();
  global.ObjectEditorStart = (_0x4189d5, _0x5c4254, _0xea3869) => {
    if (state.active) {
      cancelPlacement(false);
    }
    start(_0x4189d5, _0x5c4254, parseOptions(_0xea3869));
  };
}
function initialize() {
  ensureGameplayCamera();
  bindEvents();
}
initialize();