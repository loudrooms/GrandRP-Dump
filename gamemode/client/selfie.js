global.selfieSystem = {
  selfieMode: false,
  selfieAnim: 1,
  fov: 60,
  pRotate: 0,
  baseRotate: 0,
  rotateCount: 0,
  angleCount: 0,
  camX: 0,
  camY: 0,
  hand: 41,
  controlsRenderHandler: null,
  openCameraTimer: null,
  targetRotateCount: 0,
  targetAngleCount: 0,
  lastFrameTime: 0,
  pauseAimUntil: 0
};
const SELFIE_MOUSE_SENSITIVITY_X = 4;
const SELFIE_MOUSE_SENSITIVITY_Y = 4;
const SELFIE_CAMERA_SMOOTH_SPEED = 20;
const SELFIE_ZOOM_STEP = 2;
const SELFIE_BASE_ROTATE_OFFSET = -190;
const SELFIE_ROTATE_MIN = -12;
const SELFIE_ROTATE_MAX = 28;
const SELFIE_ANGLE_MIN = -15;
const SELFIE_ANGLE_MAX = 15;
const SELFIE_RAD = Math.PI / 180;
const SELFIE_HEAD_Z_OFFSET = 0;
const SELFIE_FACE_UP_OFFSET = 0.018;
const SELFIE_FACE_TOWARD_CAMERA_OFFSET = 0.055;
const SELFIE_LOOK_AT_MIN_OFFSET = 0.05;
const SELFIE_LOOK_AT_MAX_OFFSET = 0.45;
const SELFIE_LOOK_AT_DIST_MUL = 1;
const SELFIE_LOOK_AT_SAFE_DIST_FACTOR = 0.8;
const SELFIE_VECTOR_EPSILON = 0.0001;
const SELFIE_MOVE_CONTROLS = [21, 22, 30, 31, 32, 33, 34, 35];
const SELFIE_LOCAL_ANIM_FLAG = 50;
const SELFIE_ANIM_AIM_PAUSE_MS = 200;
const SELFIE_HAND_BONE = 57005;
const SELFIE_HAND_BONE_OFFSET = {
  x: -0.3,
  y: 0,
  z: 0.2
};
function normalizeSelfieHeading(_0x311d47) {
  if (_0x311d47 > 360) {
    _0x311d47 -= 360;
  } else if (_0x311d47 < 0) {
    _0x311d47 += 360;
  }
  return _0x311d47;
}
function normalizeVector3(_0x365eda, _0x54bcc2, _0x11bc68) {
  const _0xe63ce0 = Math.sqrt(_0x365eda * _0x365eda + _0x54bcc2 * _0x54bcc2 + _0x11bc68 * _0x11bc68);
  if (_0xe63ce0 <= 0.0001) {
    return null;
  } else {
    return {
      x: _0x365eda / _0xe63ce0,
      y: _0x54bcc2 / _0xe63ce0,
      z: _0x11bc68 / _0xe63ce0,
      length: _0xe63ce0
    };
  }
}
function crossVector3(_0x482109, _0x3caaae) {
  return {
    x: _0x482109.y * _0x3caaae.z - _0x482109.z * _0x3caaae.y,
    y: _0x482109.z * _0x3caaae.x - _0x482109.x * _0x3caaae.z,
    z: _0x482109.x * _0x3caaae.y - _0x482109.y * _0x3caaae.x
  };
}
function rotateVectorAroundAxis(_0x32d26b, _0x4a28bf, _0x30f731) {
  const _0x19ce6c = normalizeVector3(_0x4a28bf.x, _0x4a28bf.y, _0x4a28bf.z);
  if (!_0x19ce6c || Math.abs(_0x30f731) <= 0.000001) {
    return {
      x: _0x32d26b.x,
      y: _0x32d26b.y,
      z: _0x32d26b.z
    };
  }
  const _0x1a74b8 = Math.cos(_0x30f731);
  const _0x598b72 = Math.sin(_0x30f731);
  const _0x720809 = _0x32d26b.x * _0x19ce6c.x + _0x32d26b.y * _0x19ce6c.y + _0x32d26b.z * _0x19ce6c.z;
  const _0x9bd4be = crossVector3(_0x19ce6c, _0x32d26b);
  return {
    x: _0x32d26b.x * _0x1a74b8 + _0x9bd4be.x * _0x598b72 + _0x19ce6c.x * _0x720809 * (1 - _0x1a74b8),
    y: _0x32d26b.y * _0x1a74b8 + _0x9bd4be.y * _0x598b72 + _0x19ce6c.y * _0x720809 * (1 - _0x1a74b8),
    z: _0x32d26b.z * _0x1a74b8 + _0x9bd4be.z * _0x598b72 + _0x19ce6c.z * _0x720809 * (1 - _0x1a74b8)
  };
}
function getCurrentSelfieControlLimits() {
  let _0x503beb = -12;
  let _0x51b088 = 28;
  let _0x37a017 = -15;
  let _0xb9d39 = 15;
  if (_0x503beb > _0x51b088) {
    const _0x2ec6c7 = _0x503beb;
    _0x503beb = _0x51b088;
    _0x51b088 = _0x2ec6c7;
  }
  if (_0x37a017 > _0xb9d39) {
    const _0x1bdef1 = _0x37a017;
    _0x37a017 = _0xb9d39;
    _0xb9d39 = _0x1bdef1;
  }
  return {
    rotateMin: _0x503beb,
    rotateMax: _0x51b088,
    angleMin: _0x37a017,
    angleMax: _0xb9d39
  };
}
function clampSelfieControlValue(_0x3050a3, _0x461c6b, _0x1fd2f4) {
  if (_0x3050a3 < _0x461c6b) {
    return _0x461c6b;
  } else if (_0x3050a3 > _0x1fd2f4) {
    return _0x1fd2f4;
  } else {
    return _0x3050a3;
  }
}
function clampSelfieControlValues(_0x49aa79 = false) {
  const _0x17a06e = getCurrentSelfieControlLimits();
  selfieSystem.rotateCount = clampSelfieControlValue(selfieSystem.rotateCount, _0x17a06e.rotateMin, _0x17a06e.rotateMax);
  selfieSystem.angleCount = clampSelfieControlValue(selfieSystem.angleCount, _0x17a06e.angleMin, _0x17a06e.angleMax);
  selfieSystem.targetRotateCount = clampSelfieControlValue(selfieSystem.targetRotateCount, _0x17a06e.rotateMin, _0x17a06e.rotateMax);
  selfieSystem.targetAngleCount = clampSelfieControlValue(selfieSystem.targetAngleCount, _0x17a06e.angleMin, _0x17a06e.angleMax);
  if (_0x49aa79) {
    updateSelfieCameraAim();
  }
  return _0x17a06e;
}
function lerpSelfieValue(_0x30d8d5, _0x567bef, _0x3ffb41) {
  return _0x30d8d5 + (_0x567bef - _0x30d8d5) * (1 - Math.exp(_0x3ffb41 * -20));
}
function getSelfieFrameDeltaSeconds() {
  const _0x385687 = Date.now();
  const _0x3d9a88 = selfieSystem.lastFrameTime ? _0x385687 - selfieSystem.lastFrameTime : 16;
  selfieSystem.lastFrameTime = _0x385687;
  return Math.min(_0x3d9a88, 50) / 1000;
}
function enableSelfieMovementControls() {
  for (const _0x5417d3 of SELFIE_MOVE_CONTROLS) {
    mp.game.controls.enableControlAction(0, _0x5417d3, true);
    mp.game.controls.enableControlAction(1, _0x5417d3, true);
    mp.game.controls.enableControlAction(2, _0x5417d3, true);
  }
}
function isSelfieMovementPressed() {
  for (const _0x3932cb of [32, 33, 34, 35, 30, 31]) {
    if (mp.game.controls.isControlPressed(0, _0x3932cb) || Math.abs(mp.game.controls.getDisabledControlNormal(0, _0x3932cb)) > 0.05) {
      return true;
    }
  }
  return false;
}
function clearSelfieLookAtTask() {
  try {
    mp.game.task.clearLookAt(localplayer.handle);
  } catch (_0x31d720) {}
}
function isSelfiePlayerMoving() {
  return isSelfieMovementPressed() || localplayer.getSpeed() > 0.15;
}
function getSelfieFaceCoord() {
  return localplayer.getBoneCoords(12844, 0, 0, 0.018);
}
function calculateSelfieAimData() {
  if (localcamera == null || !mp.cameras.exists(localcamera)) {
    return null;
  }
  const _0x4a6716 = localcamera.getCoord();
  const _0x508ad6 = getSelfieFaceCoord();
  let _0x5f00a9 = normalizeVector3(_0x508ad6.x - _0x4a6716.x, _0x508ad6.y - _0x4a6716.y, _0x508ad6.z - _0x4a6716.z);
  if (!_0x5f00a9) {
    return null;
  }
  const _0x245f0a = {
    x: _0x508ad6.x - _0x5f00a9.x * 0.055,
    y: _0x508ad6.y - _0x5f00a9.y * 0.055,
    z: _0x508ad6.z - _0x5f00a9.z * 0.055
  };
  _0x5f00a9 = normalizeVector3(_0x245f0a.x - _0x4a6716.x, _0x245f0a.y - _0x4a6716.y, _0x245f0a.z - _0x4a6716.z);
  if (!_0x5f00a9) {
    return null;
  }
  const _0x559b7c = selfieSystem.rotateCount * SELFIE_RAD;
  const _0x8a96a6 = selfieSystem.angleCount * SELFIE_RAD;
  const _0xef9d4e = {
    x: 0,
    y: 0,
    z: 1
  };
  let _0xfc68d8 = rotateVectorAroundAxis(_0x5f00a9, _0xef9d4e, _0x559b7c);
  let _0x4bdd27 = crossVector3(_0xfc68d8, _0xef9d4e);
  let _0x19c610 = normalizeVector3(_0x4bdd27.x, _0x4bdd27.y, _0x4bdd27.z);
  if (!_0x19c610) {
    const _0x9d00c = localplayer.getHeading() * SELFIE_RAD;
    _0x19c610 = {
      x: Math.cos(_0x9d00c),
      y: -Math.sin(_0x9d00c),
      z: 0
    };
  }
  _0xfc68d8 = rotateVectorAroundAxis(_0xfc68d8, _0x19c610, _0x8a96a6);
  const _0x59d079 = normalizeVector3(_0xfc68d8.x, _0xfc68d8.y, _0xfc68d8.z);
  if (!_0x59d079) {
    return null;
  }
  const _0x515baa = Math.max(0.2, _0x5f00a9.length);
  const _0xb8a07 = {
    x: _0x4a6716.x + _0x59d079.x * _0x515baa,
    y: _0x4a6716.y + _0x59d079.y * _0x515baa,
    z: _0x4a6716.z + _0x59d079.z * _0x515baa
  };
  return {
    camCoord: _0x4a6716,
    faceCoord: _0x245f0a,
    camToFaceNorm: _0x5f00a9,
    camToFaceLength: _0x5f00a9.length,
    targetCoord: _0xb8a07
  };
}
function isSelfieAimUpdatePaused() {
  return Date.now() < selfieSystem.pauseAimUntil;
}
function pauseSelfieCameraAim(_0xe96aef = 200) {
  selfieSystem.pauseAimUntil = Date.now() + _0xe96aef;
}
function updateSelfieCameraAim() {
  if (isSelfieAimUpdatePaused()) {
    return null;
  }
  const _0x5897ed = calculateSelfieAimData();
  if (_0x5897ed) {
    localcamera.pointAtCoord(_0x5897ed.targetCoord.x, _0x5897ed.targetCoord.y, _0x5897ed.targetCoord.z);
    return _0x5897ed;
  } else {
    return null;
  }
}
function isSelfieHandCameraAttached() {
  return selfieSystem.hand === 71;
}
function attachSelfieHandCamera() {
  if (localcamera != null && mp.cameras.exists(localcamera)) {
    localcamera.attachToPedBone(mp.players.local.handle, 57005, SELFIE_HAND_BONE_OFFSET.x, SELFIE_HAND_BONE_OFFSET.y, SELFIE_HAND_BONE_OFFSET.z, true);
    selfieSystem.hand = 71;
  }
}
const PHONE_ATTACH_DATA = "{\"Bone\": 57005, \"Model\": \"prop_npc_phone_02\", \"PosOffset1\": 0.15, \"PosOffset2\": 0.028, \"PosOffset3\": -0.03, \"RotOffset1\": 105, \"RotOffset2\": -20, \"RotOffset3\": 110}";
const selfieAnimations = [{
  id: 0,
  dict: "cellphone@self",
  name: "selfie",
  speed: 4,
  flag: 18
}, {
  id: 1,
  dict: "cellphone@self@franklin@",
  name: "peace",
  speed: 4,
  flag: 18
}, {
  id: 2,
  dict: "cellphone@self@franklin@",
  name: "west_coast",
  speed: 4,
  flag: 18
}, {
  id: 3,
  dict: "cellphone@self@trevor@",
  name: "proud_finger",
  speed: 4,
  flag: 18
}, {
  id: 4,
  dict: "cellphone@self@trevor@",
  name: "throat_slit",
  speed: 4,
  flag: 18
}, {
  id: 5,
  dict: "cellphone@self@franklin@",
  name: "chest_bump",
  speed: 4,
  flag: 18
}, {
  id: 6,
  dict: "cellphone@",
  name: "cellphone_text_read_base_cover_low",
  speed: 4,
  flag: 18
}, {
  id: 7,
  dict: "cellphone@self@michael@",
  name: "run_chin",
  speed: 4,
  flag: 18
}];
function setSelfieAnimation(_0x4a1016) {
  const _0x474bdf = selfieAnimations.find(_0x3834cf => _0x3834cf.id === _0x4a1016);
  if (!_0x474bdf) {
    return;
  }
  selfieSystem.selfieAnim = _0x4a1016;
  pauseSelfieCameraAim();
  global.play_animation2(localplayer, _0x474bdf.dict, _0x474bdf.name, _0x474bdf.speed, _0x474bdf.speed, -1, 50, 0, false, false, false);
  if (selfieSystem.selfieMode && !isSelfieHandCameraAttached()) {
    attachSelfieHandCamera();
  }
  clampSelfieControlValues(false);
  const _0x6bd2e9 = _0x4a1016;
  setTimeout(() => {
    if (selfieSystem.selfieMode && selfieSystem.selfieAnim === _0x6bd2e9) {
      if (!isSelfiePlayerMoving()) {
        resetLookAtCam();
      }
    }
  }, 200);
  if (selfieSystem.selfieMode) {
    mp.events.callRemote("Server_SyncSelfieAnimation", _0x4a1016);
  }
}
function stopAnimation(_0x494d61, _0x498b5c) {
  const _0x5c966e = selfieAnimations.find(_0x5993bf => _0x5993bf.id === _0x498b5c);
  if (_0x5c966e) {
    global.stop_animation(_0x494d61, _0x5c966e.dict, _0x5c966e.name);
  }
}
function resetLookAtCam() {
  if (isSelfiePlayerMoving()) {
    clearSelfieLookAtTask();
    return;
  }
  const _0x1e5532 = calculateSelfieAimData();
  if (!_0x1e5532) {
    return;
  }
  const _0x54b05a = (selfieSystem.fov - 40) / 40;
  const _0x59db20 = 0.05 + Math.min(1, Math.max(0, _0x54b05a)) * 0.4;
  const _0x1c1c2a = Math.max(0.03, _0x1e5532.camToFaceLength * 0.8);
  const _0x21037c = Math.min(_0x59db20, _0x1c1c2a);
  const _0x1ebe4a = Math.max(0.0125, _0x21037c * 1);
  mp.game.task.lookAtCoord(localplayer.handle, _0x1e5532.camCoord.x + _0x1e5532.camToFaceNorm.x * _0x1ebe4a, _0x1e5532.camCoord.y + _0x1e5532.camToFaceNorm.y * _0x1ebe4a, _0x1e5532.camCoord.z + _0x1e5532.camToFaceNorm.z * _0x1ebe4a, -1, 2048, 2);
}
function checkSelfieControls() {
  if (!selfieSystem.selfieMode) {
    return;
  }
  if (localcamera == null || !mp.cameras.exists(localcamera)) {
    return;
  }
  setSelfieControlsState(true);
  enableSelfieMovementControls();
  if (mp.gui.cursor.visible) {
    return;
  }
  const _0x5f1bac = clampSelfieControlValues();
  const _0x173051 = getSelfieFrameDeltaSeconds();
  const _0x54ddda = mp.game.controls.getDisabledControlNormal(0, 220);
  const _0xd0443f = mp.game.controls.getDisabledControlNormal(0, 221);
  if (Math.abs(_0x54ddda) > 0.0001) {
    selfieSystem.targetRotateCount -= _0x54ddda * 4;
    selfieSystem.targetRotateCount = clampSelfieControlValue(selfieSystem.targetRotateCount, _0x5f1bac.rotateMin, _0x5f1bac.rotateMax);
  }
  if (Math.abs(_0xd0443f) > 0.0001) {
    selfieSystem.targetAngleCount -= _0xd0443f * 4;
    selfieSystem.targetAngleCount = clampSelfieControlValue(selfieSystem.targetAngleCount, _0x5f1bac.angleMin, _0x5f1bac.angleMax);
  }
  selfieSystem.rotateCount = lerpSelfieValue(selfieSystem.rotateCount, selfieSystem.targetRotateCount, _0x173051);
  selfieSystem.angleCount = lerpSelfieValue(selfieSystem.angleCount, selfieSystem.targetAngleCount, _0x173051);
  let _0x43abf2 = false;
  if (mp.game.controls.isDisabledControlJustPressed(0, 241) && selfieSystem.fov > 40) {
    selfieSystem.fov -= 2;
    if (selfieSystem.fov < 40) {
      selfieSystem.fov = 40;
    }
    _0x43abf2 = true;
  }
  if (mp.game.controls.isDisabledControlJustPressed(0, 242) && selfieSystem.fov < 80) {
    selfieSystem.fov += 2;
    if (selfieSystem.fov > 80) {
      selfieSystem.fov = 80;
    }
    _0x43abf2 = true;
  }
  if (_0x43abf2) {
    localcamera.setFov(selfieSystem.fov);
  }
  if (mp.game.controls.isControlJustPressed(0, 20)) {
    mp.events.call("Client_ChangeSelfieAnimation", "prev");
  } else if (mp.game.controls.isControlJustPressed(0, 73)) {
    mp.events.call("Client_ChangeSelfieAnimation", "next");
  } else if (mp.game.controls.isDisabledControlJustPressed(0, 26)) {
    mp.events.call("Client_RepeatSelfieAnimation");
  }
  updateSelfieCameraAim();
  if (isSelfiePlayerMoving()) {
    clearSelfieLookAtTask();
  } else {
    resetLookAtCam();
  }
}
function attachPhone(_0x241cbc) {
  mp.events.call("Client_attachObject2", _0x241cbc.remoteId, PHONE_ATTACH_DATA);
}
function detachPhone(_0x4d690c) {
  mp.events.call("Client_detachObject", _0x4d690c.remoteId);
}
function CalculCameraPos(_0x2064f7, _0x12f2a7) {
  selfieSystem.camX = _0x2064f7.x;
  selfieSystem.camY = _0x2064f7.y;
  selfieSystem.fov = 60;
  selfieSystem.rotateCount = 0;
  selfieSystem.angleCount = 0;
  selfieSystem.targetRotateCount = 0;
  selfieSystem.targetAngleCount = 0;
  selfieSystem.lastFrameTime = 0;
  selfieSystem.camX += Math.sin(-_0x12f2a7 * (Math.PI / 180)) * 3;
  selfieSystem.camY += Math.cos(-_0x12f2a7 * (Math.PI / 180)) * 3;
  _0x12f2a7 = normalizeSelfieHeading(_0x12f2a7 + -190);
  selfieSystem.baseRotate = _0x12f2a7;
  selfieSystem.pRotate = _0x12f2a7;
  clampSelfieControlValues();
  localcamera.setActive(true);
  attachSelfieHandCamera();
  resetLookAtCam();
  setTimeout(() => selfieSystem.selfieMode && resetLookAtCam(), 4000);
  localcamera.setRot(0, 0, _0x12f2a7, 2);
  updateSelfieCameraAim();
  localcamera.setFov(selfieSystem.fov);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
}
function setSelfieControlsState(_0x15999d) {
  mp.game.controls.disableControlAction(0, 44, _0x15999d);
  mp.game.controls.disableControlAction(0, 38, _0x15999d);
  mp.game.controls.disableControlAction(0, 26, _0x15999d);
  mp.game.controls.disableControlAction(0, 1, _0x15999d);
  mp.game.controls.disableControlAction(0, 2, _0x15999d);
  mp.game.controls.disableControlAction(0, 241, _0x15999d);
  mp.game.controls.disableControlAction(0, 242, _0x15999d);
  mp.game.controls.disableControlAction(3, 177, _0x15999d);
  mp.game.controls.disableControlAction(32, 169, _0x15999d);
}
function toggleSelfieControls(_0x265d25) {
  setSelfieControlsState(_0x265d25);
  if (selfieSystem.controlsRenderHandler) {
    mp.events.remove("render", selfieSystem.controlsRenderHandler);
    selfieSystem.controlsRenderHandler = null;
  }
  if (_0x265d25) {
    selfieSystem.lastFrameTime = 0;
    selfieSystem.controlsRenderHandler = checkSelfieControls;
    mp.events.add("render", selfieSystem.controlsRenderHandler);
  }
}
global.selfieModeEnabled = false;
mp.events.add("Client_SyncSelfieCamera", (_0x3041c0, _0x14dd96) => {
  const _0x4e8e55 = mp.players.atRemoteId(_0x3041c0);
  if (mp.players.exists(_0x4e8e55) && _0x4e8e55 === localplayer) {
    global.selfieModeEnabled = _0x14dd96;
    if (_0x14dd96) {
      mp.events.call("Client_SetSelfieMode");
    } else {
      mp.events.call("Client_EndSelfieMode");
    }
  }
});
mp.events.add("Client_SetSelfieMode", () => {
  const _0x31f76e = localplayer.getOffsetFromInWorldCoords(0, 10, 1);
  localplayer.setBlockingOfNonTemporaryEvents(true);
  setSelfieAnimation(0);
  mp.game.task.lookAtCoord(localplayer.handle, _0x31f76e.x, _0x31f76e.y, _0x31f76e.z, -1, 2048, 2);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  selfieSystem.pRotate = localplayer.getRotation(2).z;
  mp.game.task.lookAtCoord(localplayer.handle, _0x31f76e.x, _0x31f76e.y, _0x31f76e.z, -1, 2048, 2);
  attachPhone(localplayer);
  if (selfieSystem.openCameraTimer) {
    clearTimeout(selfieSystem.openCameraTimer);
  }
  selfieSystem.openCameraTimer = setTimeout(() => {
    selfieSystem.openCameraTimer = null;
    CalculCameraPos(localplayer.position, selfieSystem.pRotate);
  }, 1200);
  toggleSelfieControls(true);
  selfieSystem.selfieMode = true;
  global.selfieModeEnabled = true;
});
mp.events.add("Client_ChangeSelfieAnimation", (_0x15f116 = "next") => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (_0x15f116 === "next") {
      selfieSystem.selfieAnim++;
      if (selfieSystem.selfieAnim >= selfieAnimations.length) {
        selfieSystem.selfieAnim = 1;
      }
    } else {
      selfieSystem.selfieAnim--;
      if (selfieSystem.selfieAnim < 1) {
        selfieSystem.selfieAnim = selfieAnimations.length - 1;
      }
    }
    setSelfieAnimation(selfieSystem.selfieAnim);
  }
});
mp.events.add("Client_RepeatSelfieAnimation", () => {
  if (selfieSystem.selfieMode) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      setSelfieAnimation(selfieSystem.selfieAnim);
    }
  }
});
mp.events.add("Client_EndSelfieMode", () => {
  if (selfieSystem.openCameraTimer) {
    clearTimeout(selfieSystem.openCameraTimer);
    selfieSystem.openCameraTimer = null;
  }
  localplayer.setBlockingOfNonTemporaryEvents(false);
  toggleSelfieControls(false);
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (localcamera != null) {
    localcamera.setActive(false);
    localcamera.destroy();
    localcamera = null;
  }
  selfieSystem.hand = 41;
  stopAnimation(localplayer, selfieSystem.selfieAnim);
  selfieSystem.selfieMode = false;
  global.selfieModeEnabled = false;
  detachPhone(localplayer);
});
mp.events.add("Client_LookAtCoord", (_0x3b0de8, _0x43183b, _0x51d823, _0x38fb47, _0x592638, _0x2df26b) => {
  mp.game.task.lookAtCoord(localplayer.handle, _0x3b0de8, _0x43183b, _0x51d823, _0x38fb47, _0x592638, _0x2df26b);
});