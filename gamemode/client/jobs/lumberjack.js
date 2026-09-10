global.isLumberjackJob = false;
global.isLocalAtLumberjackZone = false;
global.isLocalLumberjackWorking = false;
const TREE_MODELS = ["prop_tree_pine_01", "prop_tree_pine_02", "prop_w_r_cedar_01", "prop_tree_cedar_02", "prop_tree_cedar_03", "prop_tree_cedar_04", "test_tree_cedar_trunk_001", "prop_tree_birch_03", "prop_tree_cedar_s_01", "prop_tree_lficus_02", "prop_tree_jacada_02"];
const TREE_COLSHAPE_RADIUS = 2.5;
const TREE_GROW_VISIBILITY_RADIUS = 100;
const TREE_GROW_STALE_RECEIVE_BUFFER_MS = 1000;
const TREE_SLOT_GROWING = 1;
const TREE_SLOT_STANDING = 2;
const TREE_GROW_DEFAULT = {
  buriedZOffset: -2.8,
  durationMs: 7000
};
const TREE_GROW_BY_MODEL_INDEX = [{
  buriedZOffset: -29,
  durationMs: 7500
}, {
  buriedZOffset: -29,
  durationMs: 7400
}, {
  buriedZOffset: -29,
  durationMs: 8000
}, {
  buriedZOffset: -29,
  durationMs: 7900
}, {
  buriedZOffset: -29,
  durationMs: 8000
}, {
  buriedZOffset: -29,
  durationMs: 7800
}, {
  buriedZOffset: -29,
  durationMs: 9000
}, {
  buriedZOffset: -29,
  durationMs: 5500
}, {
  buriedZOffset: -29,
  durationMs: 5600
}, {
  buriedZOffset: -29,
  durationMs: 8500
}, {
  buriedZOffset: -29,
  durationMs: 8200
}];
function getTreeGrowSpec(_0x3b2043) {
  const _0x3c70fa = parseInt(_0x3b2043);
  if (!Number.isNaN(_0x3c70fa) && _0x3c70fa >= 0 && _0x3c70fa < TREE_GROW_BY_MODEL_INDEX.length) {
    return TREE_GROW_BY_MODEL_INDEX[_0x3c70fa];
  } else {
    return TREE_GROW_DEFAULT;
  }
}
function setLumberjackTreeWorldPos(_0x5d3036, _0x28535a, _0x3bc2c8, _0x5bafce) {
  try {
    if (!_0x5d3036 || !mp.objects.exists(_0x5d3036)) {
      return;
    }
    const _0x278248 = typeof _0x5d3036.handle == "number" ? _0x5d3036.handle : 0;
    if (_0x278248 !== 0) {
      mp.game.entity.setCoordsNoOffset(_0x278248, _0x28535a, _0x3bc2c8, _0x5bafce, false, false, false);
    } else if (typeof _0x5d3036.setCoords == "function") {
      _0x5d3036.setCoords(_0x28535a, _0x3bc2c8, _0x5bafce, false, false, false, false);
    } else {
      _0x5d3036.position = new mp.Vector3(_0x28535a, _0x3bc2c8, _0x5bafce);
    }
  } catch (_0x2e7646) {
    mp.console.logInfo("[lumberjack] setLumberjackTreeWorldPos: " + _0x2e7646.message);
  }
}
function setLumberjackTreeGrowthFreeze(_0x2e6ccc, _0x2b1acb) {
  try {
    if (!_0x2e6ccc || !mp.objects.exists(_0x2e6ccc)) {
      return;
    }
    const _0x62c9e0 = typeof _0x2e6ccc.handle == "number" ? _0x2e6ccc.handle : 0;
    if (_0x62c9e0 === 0) {
      return;
    }
    mp.game.entity.freezePosition(_0x62c9e0, _0x2b1acb);
  } catch (_0xc0e274) {
    mp.console.logInfo("[lumberjack] setLumberjackTreeGrowthFreeze: " + _0xc0e274.message);
  }
}
function thawLumberjackPropObject(_0x4c8faf) {
  try {
    if (!_0x4c8faf || !mp.objects.exists(_0x4c8faf)) {
      return;
    }
    const _0x1a9374 = typeof _0x4c8faf.handle == "number" ? _0x4c8faf.handle : 0;
    if (_0x1a9374 === 0) {
      return;
    }
    mp.game.entity.freezePosition(_0x1a9374, false);
  } catch (_0x494fa1) {
    mp.console.logInfo("[lumberjack] thawLumberjackPropObject: " + _0x494fa1.message);
  }
}
const lumberjackTreesMap = new Map();
function normWoodTreeSlotId(_0x335e52) {
  const _0xbf60f1 = parseInt(_0x335e52, 10);
  if (Number.isNaN(_0xbf60f1)) {
    return null;
  } else {
    return _0xbf60f1;
  }
}
const pendingAxeAttach = new Set();
const lumberjackWorkersInZone = new Set();
const axeRestoreTimers = new Map();
const lumberjackAxeSkipRestoreOnce = new Set();
let lumberjackAxeAttachListenersActive = false;
let lumberjackAxeOnAttach = null;
let lumberjackAxeOnDetach = null;
let lumberjackRenderActive = false;
const FALL_DURATION_MS = 1200;
const FALL_DELETE_AFTER_MS = 6000;
const LUMBERJACK_FALL_SAFE_RADIUS = 3;
const LUMBERJACK_FALL_CRUSH_HALF_WIDTH = 0.5;
const LUMBERJACK_FALL_IMPACT_START = 0.9;
const LUMBERJACK_FALL_IMPACT_END = 1.02;
const HIT_FREEZE_MS = 650;
const TREE_SHAKE = {
  posX: 0.04,
  posY: 0.015,
  rotX: 1.8,
  rotZ: 2,
  kf1: 60,
  kf2: 120,
  kf3: 180
};
let localAtLumberjackTreeIndex = null;
let activeTreeInteractions = 0;
const LUMBERJACK_INTERACT_KEY = "Click";
let lastLumberjackInteractHintShown;
let lumberjackAxeRouteBlip = null;
const LUMBERJACK_TREE_BLIP_SPRITE = 271;
const LUMBERJACK_TREE_BLIP_SCALE = 0.4;
const LUMBERJACK_TREE_BLIP_COLOR = 25;
const LUMBERJACK_ROUTE_NEAREST_POOL = 5;
let lastLocalSwingAt = 0;
const SWING_COOLDOWN_MS = 1000;
const SWING_ANIM_MS = 1700;
const SWING_IMPACT_MS = 1000;
const LUMBERJACK_AXE_ANIM_FLAG = 0;
let isLocalSwingInProgress = false;
let localSwingImpactTimer = null;
let localSwingEndTimer = null;
let localAxeAnimStopTimer = null;
let localFreezeUnfreezeTimer = null;
const LUMBERJACK_AXE_ANIM_DICT = "melee@large_wpn@streamed_core";
const LUMBERJACK_AXE_ANIM_NAME = "ground_attack_on_spot_body";
const LUMBERJACK_DISABLE_CONTROLS = true;
const DISABLED_CONTROLS = [24, 140, 141, 142, 143, 257];
const fallingTrees = new Map();
const AXE_ATTACH_DATA = "{\"Bone\": 6286, \"Model\": \"prop_ld_fireaxe\", \"PosOffset1\": 0.07,\"PosOffset2\": 0.0,\"PosOffset3\": -0.02, \"RotOffset1\": -110.0, \"RotOffset2\": 180.0, \"RotOffset3\": 0.0}";
const pendingProgressByTree = new Map();
const treeProgressCache = new Map();
const pendingFallObjects = new Map();
const IMPACT_PROGRESS_WINDOW_MS = 900;
const lastImpactAtByTree = new Map();
const completedTrees = new Set();
const TREE_BUSY_BLOCK_MS = 5000;
const POST_CUT_SWING_BLOCK_MS = 2800;
const treeBusyBlockedUntil = new Map();
let isProgressBarShowing = false;
let progressBarHideTimer = null;
let lumberjackSkipProgressClearOnTreeColshapeExit = false;
const LUMBERJACK_PROGRESS_HOLD_AT_100_MS = 300;
const LUMBERJACK_PROGRESS_IDLE_MS = 60000;
let wood_contract_inverval;
let lumberjackProgressIdleTimer = null;
function getLumberjackProgressTitle() {
  try {
    return language && language["Рубка дерева"] && language["Рубка дерева"][curr_lang] || "Рубка дерева";
  } catch (_0x253f4b) {
    mp.console.logInfo("[lumberjack] getLumberjackProgressTitle: " + _0x253f4b.message);
    return "Рубка дерева";
  }
}
function resetLumberjackProgressIdleTimer() {
  if (lumberjackProgressIdleTimer) {
    clearTimeout(lumberjackProgressIdleTimer);
    lumberjackProgressIdleTimer = null;
  }
  if (isProgressBarShowing) {
    lumberjackProgressIdleTimer = setTimeout(() => {
      lumberjackProgressIdleTimer = null;
      clearHudProgressBar();
    }, 60000);
  }
}
function showHudProgressBarPct(_0x1f279e) {
  try {
    isProgressBarShowing = true;
    const _0x5404a2 = {
      progress: _0x1f279e = parseFloat((_0x1f279e || 0).toFixed(2)),
      delay: 100,
      duration: 0,
      isIncrease: true,
      title: getLumberjackProgressTitle(),
      displayAt: "center"
    };
    main_browser.execute("APPS.state.hud.progressManual=true;APPS.state.hud.progressBar = " + JSON.stringify(_0x5404a2) + ";");
    resetLumberjackProgressIdleTimer();
  } catch (_0x1b51c0) {
    mp.console.logInfo("Error in showHudProgressBar(lumberjack): " + _0x1b51c0.message);
  }
}
function updateHudProgressBarPct(_0x3b6575) {
  try {
    _0x3b6575 = parseFloat((_0x3b6575 || 0).toFixed(2));
    main_browser.execute("APPS.state.hud.progressBar.progress = " + _0x3b6575 + ";");
    resetLumberjackProgressIdleTimer();
  } catch (_0x4955b2) {
    mp.console.logInfo("Error in updateHudProgressBar(lumberjack): " + _0x4955b2.message);
  }
}
function clearHudProgressBar() {
  try {
    isProgressBarShowing = false;
    lumberjackSkipProgressClearOnTreeColshapeExit = false;
    if (lumberjackProgressIdleTimer) {
      clearTimeout(lumberjackProgressIdleTimer);
      lumberjackProgressIdleTimer = null;
    }
    if (progressBarHideTimer) {
      clearTimeout(progressBarHideTimer);
      progressBarHideTimer = null;
    }
    main_browser.execute("APPS.state.hud.progressManual=false;APPS.state.hud.progressBar.displayAt=null;");
  } catch (_0x47b79f) {
    mp.console.logInfo("Error in clearHudProgressBar(lumberjack): " + _0x47b79f.message);
  }
}
function scheduleHideProgressBar(_0x446996 = 100) {
  if (progressBarHideTimer) {
    clearTimeout(progressBarHideTimer);
  }
  progressBarHideTimer = setTimeout(() => {
    progressBarHideTimer = null;
    clearHudProgressBar();
  }, _0x446996);
}
function cancelProgressBarHideTimer() {
  if (progressBarHideTimer) {
    clearTimeout(progressBarHideTimer);
    progressBarHideTimer = null;
  }
}
function clearRemovedTreeProgressCaches(_0x276b87) {
  _0x276b87 = parseInt(_0x276b87);
  if (!Number.isNaN(_0x276b87)) {
    pendingProgressByTree.delete(_0x276b87);
    treeProgressCache.delete(_0x276b87);
    lastImpactAtByTree.delete(_0x276b87);
  }
}
function clearTreeProgressStateForPos(_0x19838e) {
  clearRemovedTreeProgressCaches(_0x19838e);
  completedTrees.delete(_0x19838e);
}
function applyLumberjackWorkersInZone(_0x510472) {
  if (Array.isArray(_0x510472)) {
    _0x510472.forEach(_0x43d2e6 => {
      lumberjackWorkersInZone.add(_0x43d2e6);
      tryAttachAxe(_0x43d2e6, AXE_ATTACH_DATA);
    });
  }
}
function cancelLocalLumberjackSwing(_0x220cec) {
  if (localSwingImpactTimer) {
    clearTimeout(localSwingImpactTimer);
    localSwingImpactTimer = null;
  }
  if (localSwingEndTimer) {
    clearTimeout(localSwingEndTimer);
    localSwingEndTimer = null;
  }
  if (localAxeAnimStopTimer) {
    clearTimeout(localAxeAnimStopTimer);
    localAxeAnimStopTimer = null;
  }
  if (localFreezeUnfreezeTimer) {
    clearTimeout(localFreezeUnfreezeTimer);
    localFreezeUnfreezeTimer = null;
  }
  isLocalSwingInProgress = false;
  if (!localplayer.isInAnyVehicle(false)) {
    global.stop_animation(localplayer, LUMBERJACK_AXE_ANIM_DICT, LUMBERJACK_AXE_ANIM_NAME);
  }
  localplayer.freezePosition(false);
  const _0x54f573 = normWoodTreeSlotId(_0x220cec ?? localAtLumberjackTreeIndex);
  if (_0x54f573 !== null) {
    stopTreeShake(_0x54f573);
  }
}
function cancelRestoreLumberjackAxe(_0x4311f7) {
  const _0x55894a = axeRestoreTimers.get(_0x4311f7);
  if (_0x55894a) {
    clearTimeout(_0x55894a);
    axeRestoreTimers.delete(_0x4311f7);
  }
}
function scheduleRestoreLumberjackAxe(_0x20b19e, _0x27684c = 120) {
  if (lumberjackWorkersInZone.has(_0x20b19e)) {
    cancelRestoreLumberjackAxe(_0x20b19e);
    axeRestoreTimers.set(_0x20b19e, setTimeout(() => {
      axeRestoreTimers.delete(_0x20b19e);
      if (lumberjackWorkersInZone.has(_0x20b19e)) {
        tryAttachAxe(_0x20b19e, AXE_ATTACH_DATA);
      }
    }, _0x27684c));
  }
}
function detachLumberjackAxe(_0x15ab30, _0x37283f = false) {
  if (_0x37283f) {
    lumberjackAxeSkipRestoreOnce.add(_0x15ab30);
  }
  cancelRestoreLumberjackAxe(_0x15ab30);
  mp.events.call("Client_detachObject", _0x15ab30);
}
function onLumberjackAttachObject2(_0x42e812, _0x4f6fa0) {
  if (lumberjackWorkersInZone.has(_0x42e812) && _0x4f6fa0) {
    cancelRestoreLumberjackAxe(_0x42e812);
  }
}
function onLumberjackDetachObject(_0x41699f) {
  if (lumberjackAxeSkipRestoreOnce.has(_0x41699f)) {
    lumberjackAxeSkipRestoreOnce.delete(_0x41699f);
    cancelRestoreLumberjackAxe(_0x41699f);
    return;
  }
  if (lumberjackWorkersInZone.has(_0x41699f)) {
    scheduleRestoreLumberjackAxe(_0x41699f);
  }
}
function startLumberjackAxeAttachListeners() {
  if (!lumberjackAxeAttachListenersActive) {
    lumberjackAxeAttachListenersActive = true;
    mp.events.add("Client_attachObject2", onLumberjackAttachObject2);
    mp.events.add("Client_detachObject", onLumberjackDetachObject);
  }
}
function stopLumberjackAxeAttachListeners() {
  if (lumberjackAxeAttachListenersActive) {
    lumberjackAxeAttachListenersActive = false;
    mp.events.remove("Client_attachObject2", onLumberjackAttachObject2);
    mp.events.remove("Client_detachObject", onLumberjackDetachObject);
    axeRestoreTimers.forEach(_0x431c89 => clearTimeout(_0x431c89));
    axeRestoreTimers.clear();
    lumberjackAxeSkipRestoreOnce.clear();
  }
}
function detachLocalLumberjackAxeIfWorker() {
  if (isLocalLumberjackWorking) {
    lumberjackWorkersInZone.delete(localplayer.remoteId);
    pendingAxeAttach.delete(localplayer.remoteId);
    detachLumberjackAxe(localplayer.remoteId, true);
  }
}
function renderLumberjackJobHud(_0x5b8819) {
  const _0x29b678 = language["Порублено брёвен"][curr_lang];
  const _0x43a69e = language["штук:"][curr_lang];
  main_browser.execute("APPS.state.hud.job_hud_text = " + JSON.stringify(_0x29b678) + ";APPS.state.hud.job_hud_small_text = " + JSON.stringify(_0x43a69e) + ";APPS.state.hud.hud_job_count = " + _0x5b8819 + ";APPS.state.hud.job_hud = 1;APPS.state.hud.job_hud_show = true;");
}
function hideLumberjackJobCounterHud() {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
}
function lumberjackJobHudApply(_0x400506, _0x53f12b, _0x2b63d7) {
  if (_0x400506) {
    renderLumberjackJobHud(_0x2b63d7);
  } else {
    hideLumberjackJobCounterHud();
  }
}
function lumberjackTreeChoppable(_0x4b9029) {
  if ((_0x4b9029 = normWoodTreeSlotId(_0x4b9029)) === null) {
    return false;
  }
  const _0x4c63a0 = treeBusyBlockedUntil.get(_0x4b9029);
  if (_0x4c63a0) {
    if (Date.now() < _0x4c63a0) {
      return false;
    }
    treeBusyBlockedUntil.delete(_0x4b9029);
  }
  if (fallingTrees.has(_0x4b9029)) {
    return false;
  }
  const _0x5866d3 = lumberjackTreesMap.get(_0x4b9029);
  return !!_0x5866d3 && !!_0x5866d3.object && !!mp.objects.exists(_0x5866d3.object) && _0x5866d3.slotPhase !== 1;
}
function tryReconnectLumberjackTreeColshape(_0x42496e) {
  setTimeout(() => {
    try {
      if (!isLocalAtLumberjackZone || !isLocalLumberjackWorking) {
        return;
      }
      if (localAtLumberjackTreeIndex != null) {
        return;
      }
      if (!lumberjackTreesMap.has(_0x42496e)) {
        return;
      }
      const _0x14711d = TREE_POSITIONS[_0x42496e];
      if (!_0x14711d) {
        return;
      }
      if (mp.Vector3.Distance(localplayer.position, _0x14711d) > 2.5) {
        return;
      }
      activeTreeInteractions++;
      localAtLumberjackTreeIndex = normWoodTreeSlotId(_0x42496e);
      if (localAtLumberjackTreeIndex === null) {
        return;
      }
      mp.events.call("Client_LumberjackTreeInteraction", true, localAtLumberjackTreeIndex);
    } catch (_0x3cd32b) {
      mp.console.logInfo("Error in tryReconnectLumberjackTreeColshape: " + _0x3cd32b.message);
    }
  }, 50);
}
function lumberjackGrowthJustFinishedPulse(_0x3ef8b5) {
  if (!global.isLocalAtLumberjackWorking) {
    return;
  }
  const _0x592dc2 = normWoodTreeSlotId(localAtLumberjackTreeIndex);
  if (_0x592dc2 !== null && _0x592dc2 === _0x3ef8b5) {
    lastLumberjackInteractHintShown = undefined;
    syncLumberjackInteractHintVisibility();
  }
}
function updateGrowingLumberTrees(_0x1e1b72) {
  lumberjackTreesMap.forEach((_0x307e18, _0x3d257a) => {
    if (_0x307e18.slotPhase !== 1) {
      return;
    }
    if (_0x307e18.growthEndMs === null || _0x307e18.growthEndMs === undefined) {
      return;
    }
    const _0x10c3a2 = TREE_POSITIONS[_0x3d257a];
    if (!_0x10c3a2 || !_0x307e18.object || !mp.objects.exists(_0x307e18.object)) {
      return;
    }
    const _0x8df386 = _0x307e18.growDurationMs > 0 ? _0x307e18.growDurationMs : 7000;
    const _0x1739e9 = _0x307e18.growZOffset;
    const _0x17a63e = typeof _0x1739e9 != "number" || Number.isNaN(_0x1739e9) ? -5.5 : _0x1739e9;
    if (!_0x307e18.lumberjackFrozenProp) {
      const _0x28a7bc = _0x307e18.object.handle;
      if (typeof _0x28a7bc == "number" && _0x28a7bc !== 0) {
        setLumberjackTreeGrowthFreeze(_0x307e18.object, true);
        _0x307e18.lumberjackFrozenProp = true;
      }
    }
    if (_0x1e1b72 >= _0x307e18.growthEndMs) {
      setLumberjackTreeWorldPos(_0x307e18.object, _0x10c3a2.x, _0x10c3a2.y, _0x10c3a2.z);
      _0x307e18.slotPhase = 2;
      delete _0x307e18.growthSpawnMs;
      delete _0x307e18.growthEndMs;
      delete _0x307e18.growDurationMs;
      delete _0x307e18.growZOffset;
      lumberjackGrowthJustFinishedPulse(_0x3d257a);
      return;
    }
    let _0x1a03a8 = 101;
    _0x1a03a8 = mp.Vector3.Distance(localplayer.position, _0x10c3a2);
    const _0x207561 = _0x1a03a8 <= 100;
    const _0x291a79 = _0x307e18.growthSpawnMs;
    const _0x436cae = _0x291a79 != null ? (_0x1e1b72 - _0x291a79) / _0x8df386 : 1;
    const _0x544653 = Math.min(1, Math.max(0, _0x436cae));
    const _0x83ec9b = _0x207561 ? _0x10c3a2.z + _0x17a63e * (1 - _0x544653) : _0x10c3a2.z;
    setLumberjackTreeWorldPos(_0x307e18.object, _0x10c3a2.x, _0x10c3a2.y, _0x83ec9b);
  });
}
function spawnTreeAtPos(_0x1bc195, _0x2315c2, _0x2cad5d = null) {
  try {
    if ((_0x1bc195 = normWoodTreeSlotId(_0x1bc195)) === null) {
      return;
    }
    if (lumberjackTreesMap.has(_0x1bc195)) {
      return;
    }
    clearTreeProgressStateForPos(_0x1bc195);
    const _0x1ba150 = TREE_POSITIONS[_0x1bc195];
    if (!_0x1ba150) {
      return;
    }
    const _0x2ea73f = getTreeGrowSpec(_0x2315c2 = parseInt(_0x2315c2));
    const _0x48125a = _0x2ea73f.buriedZOffset;
    const _0x935bd3 = _0x2ea73f.durationMs;
    const _0x549a96 = Date.now();
    const _0x355086 = !!_0x2cad5d && _0x2cad5d.respawn === true;
    let _0x145b3b = null;
    let _0xd958cb = null;
    if (_0x355086) {
      const _0x398645 = _0x2cad5d.serverWaveTs;
      if (typeof _0x398645 != "number" || !!Number.isNaN(_0x398645) || !(_0x549a96 - _0x398645 >= _0x935bd3 + 1000)) {
        _0x145b3b = _0x549a96;
        _0xd958cb = _0x549a96 + _0x935bd3;
      }
    }
    let _0x4754f8 = _0x1ba150.z;
    if (_0xd958cb !== null && _0x549a96 < _0xd958cb) {
      const _0x386316 = mp.Vector3.Distance(localplayer.position, _0x1ba150);
      if (_0x386316 <= 100) {
        _0x4754f8 = _0x1ba150.z + _0x48125a;
      }
    }
    const _0x1f806e = TREE_MODELS[_0x2315c2];
    const _0x1b3323 = mp.game.joaat(_0x1f806e);
    const _0x5e1138 = {
      posIndex: _0x1bc195,
      modelId: _0x2315c2,
      slotPhase: _0xd958cb !== null ? 1 : 2,
      object: mp.objects.new(_0x1b3323, new mp.Vector3(_0x1ba150.x, _0x1ba150.y, _0x4754f8), {
        dimension: 0
      }),
      colshape: mp.colshapes.newSphere(_0x1ba150.x, _0x1ba150.y, _0x1ba150.z, 2.5),
      growthSpawnMs: _0x145b3b,
      growthEndMs: _0xd958cb,
      growDurationMs: _0xd958cb !== null ? _0x935bd3 : undefined,
      growZOffset: _0xd958cb !== null ? _0x48125a : undefined
    };
    _0x5e1138.colshape.lumberjackJobTreeIndex = _0x1bc195;
    lumberjackTreesMap.set(_0x1bc195, _0x5e1138);
    createLumberjackTreeBlip(_0x1bc195);
    if (_0xd958cb !== null && _0x5e1138.object && mp.objects.exists(_0x5e1138.object)) {
      setLumberjackTreeWorldPos(_0x5e1138.object, _0x1ba150.x, _0x1ba150.y, _0x4754f8);
      if (typeof _0x5e1138.object.handle == "number" && _0x5e1138.object.handle !== 0) {
        setLumberjackTreeGrowthFreeze(_0x5e1138.object, true);
        _0x5e1138.lumberjackFrozenProp = true;
      }
    }
    tryReconnectLumberjackTreeColshape(_0x1bc195);
  } catch (_0x1ec3a6) {
    mp.console.logInfo("Error spawning lumberjack tree colshape at pos " + _0x1bc195 + ": " + _0x1ec3a6.message);
  }
}
function destroyTreeAtPos(_0x4ac73b, _0x59ad56 = false) {
  try {
    if ((_0x4ac73b = normWoodTreeSlotId(_0x4ac73b)) === null) {
      return;
    }
    const _0x3c1064 = lumberjackTreesMap.get(_0x4ac73b);
    if (!_0x3c1064) {
      return;
    }
    stopTreeShake(_0x4ac73b);
    if (_0x3c1064.object && mp.objects.exists(_0x3c1064.object)) {
      thawLumberjackPropObject(_0x3c1064.object);
    }
    delete _0x3c1064.lumberjackFrozenProp;
    destroyLumberjackTreeBlip(_0x4ac73b);
    if (!_0x59ad56 && mp.objects.exists(_0x3c1064.object)) {
      _0x3c1064.object.destroy();
    }
    if (mp.colshapes.exists(_0x3c1064.colshape)) {
      _0x3c1064.colshape.destroy();
    }
    lumberjackTreesMap.delete(_0x4ac73b);
  } catch (_0x221140) {
    mp.console.logInfo("Error destroying lumberjack tree colshape at pos " + _0x4ac73b + ": " + _0x221140.message);
  }
}
function startTreeShake(_0x2a892b) {
  try {
    if ((_0x2a892b = normWoodTreeSlotId(_0x2a892b)) === null) {
      return;
    }
    const _0x5d542c = lumberjackTreesMap.get(_0x2a892b);
    if (!_0x5d542c || !_0x5d542c.object || !mp.objects.exists(_0x5d542c.object)) {
      return;
    }
    if (!lumberjackTreeChoppable(_0x2a892b)) {
      return;
    }
    lastImpactAtByTree.set(_0x2a892b, Date.now());
    const _0x390cf3 = pendingProgressByTree.get(_0x2a892b);
    if (_0x390cf3 && _0x390cf3.hitsNeeded > 0) {
      const _0x2e4348 = Math.min(100, Math.max(0, _0x390cf3.hitsDone / _0x390cf3.hitsNeeded * 100));
      if (isProgressBarShowing) {
        updateHudProgressBarPct(_0x2e4348);
      } else {
        showHudProgressBarPct(_0x2e4348);
      }
      if (_0x390cf3.hitsDone >= _0x390cf3.hitsNeeded) {
        updateHudProgressBarPct(100);
        completedTrees.add(_0x2a892b);
      }
      pendingProgressByTree.delete(_0x2a892b);
    }
    stopTreeShake(_0x2a892b);
    const _0x332139 = TREE_POSITIONS[_0x2a892b];
    if (!_0x332139) {
      return;
    }
    const _0x3e159b = _0x5d542c.object.rotation;
    const _0x4b3f17 = _0x332139.x;
    const _0x1a9378 = _0x332139.y;
    const _0x10c6c2 = _0x332139.z;
    setLumberjackTreeWorldPos(_0x5d542c.object, _0x4b3f17, _0x1a9378, _0x10c6c2);
    _0x5d542c.shakeOrigPos = new mp.Vector3(_0x4b3f17, _0x1a9378, _0x10c6c2);
    _0x5d542c.shakeOrigRot = new mp.Vector3(_0x3e159b.x, _0x3e159b.y, _0x3e159b.z);
    const _0xe1ca58 = Math.random() > 0.5 ? 1 : -1;
    const _0x4925c2 = _0x5d542c.shakeOrigRot.x;
    const _0x1638da = _0x5d542c.shakeOrigRot.y;
    const _0x4b96f5 = _0x5d542c.shakeOrigRot.z;
    setLumberjackTreeWorldPos(_0x5d542c.object, _0x4b3f17 + TREE_SHAKE.posX * _0xe1ca58, _0x1a9378 + TREE_SHAKE.posY * _0xe1ca58, _0x10c6c2);
    _0x5d542c.object.rotation = new mp.Vector3(_0x4925c2 + TREE_SHAKE.rotX * _0xe1ca58, _0x1638da, _0x4b96f5 - TREE_SHAKE.rotZ * _0xe1ca58);
    try {
      StartParticleEffect("core", "ent_amb_stoner_dust_drop", new mp.Vector3(_0x4b3f17, _0x1a9378, _0x10c6c2 + 1), 500);
    } catch (_0x2ac187) {
      mp.console.logInfo("[lumberjack] startTreeShake particle: " + _0x2ac187.message);
    }
    _0x5d542c.shakeKf1 = setTimeout(() => {
      _0x5d542c.shakeKf1 = null;
      const _0x45b8e8 = lumberjackTreesMap.get(_0x2a892b);
      if (_0x45b8e8 && _0x45b8e8.object && mp.objects.exists(_0x45b8e8.object) && _0x45b8e8.shakeOrigPos && _0x45b8e8.shakeOrigRot) {
        setLumberjackTreeWorldPos(_0x45b8e8.object, _0x4b3f17 - TREE_SHAKE.posX * _0xe1ca58, _0x1a9378 - TREE_SHAKE.posY * _0xe1ca58, _0x10c6c2);
        _0x45b8e8.object.rotation = new mp.Vector3(_0x4925c2 - _0xe1ca58 * 1.2, _0x1638da, _0x4b96f5 + _0xe1ca58 * 1.6);
      }
    }, TREE_SHAKE.kf1);
    _0x5d542c.shakeKf2 = setTimeout(() => {
      _0x5d542c.shakeKf2 = null;
      const _0x3cd893 = lumberjackTreesMap.get(_0x2a892b);
      if (_0x3cd893 && _0x3cd893.object && mp.objects.exists(_0x3cd893.object) && _0x3cd893.shakeOrigPos && _0x3cd893.shakeOrigRot) {
        setLumberjackTreeWorldPos(_0x3cd893.object, _0x4b3f17 + TREE_SHAKE.posX * 0.5 * _0xe1ca58, _0x1a9378 + TREE_SHAKE.posY * 0.5 * _0xe1ca58, _0x10c6c2);
        _0x3cd893.object.rotation = new mp.Vector3(_0x4925c2 + TREE_SHAKE.rotX * 0.5 * _0xe1ca58, _0x1638da, _0x4b96f5 - TREE_SHAKE.rotZ * 0.5 * _0xe1ca58);
      }
    }, TREE_SHAKE.kf2);
    _0x5d542c.shakeKf3 = setTimeout(() => {
      _0x5d542c.shakeKf3 = null;
      const _0x56a1d9 = lumberjackTreesMap.get(_0x2a892b);
      if (_0x56a1d9 && _0x56a1d9.object && mp.objects.exists(_0x56a1d9.object) && _0x56a1d9.shakeOrigPos && _0x56a1d9.shakeOrigRot) {
        setLumberjackTreeWorldPos(_0x56a1d9.object, _0x4b3f17, _0x1a9378, _0x10c6c2);
        _0x56a1d9.object.rotation = new mp.Vector3(_0x4925c2, _0x1638da, _0x4b96f5);
        _0x56a1d9.shakeOrigPos = null;
        _0x56a1d9.shakeOrigRot = null;
      }
    }, TREE_SHAKE.kf3);
  } catch (_0x34c92e) {
    mp.console.logInfo("Error in startTreeShake: " + _0x34c92e.message);
  }
}
function stopTreeShake(_0x5405f2) {
  if ((_0x5405f2 = normWoodTreeSlotId(_0x5405f2)) === null) {
    return;
  }
  const _0x13dd8a = lumberjackTreesMap.get(_0x5405f2);
  if (_0x13dd8a) {
    if (_0x13dd8a.shakeKf1 != null) {
      clearTimeout(_0x13dd8a.shakeKf1);
      _0x13dd8a.shakeKf1 = null;
    }
    if (_0x13dd8a.shakeKf2 != null) {
      clearTimeout(_0x13dd8a.shakeKf2);
      _0x13dd8a.shakeKf2 = null;
    }
    if (_0x13dd8a.shakeKf3 != null) {
      clearTimeout(_0x13dd8a.shakeKf3);
      _0x13dd8a.shakeKf3 = null;
    }
    if (_0x13dd8a.shakeOrigPos && _0x13dd8a.shakeOrigRot && _0x13dd8a.object && mp.objects.exists(_0x13dd8a.object)) {
      setLumberjackTreeWorldPos(_0x13dd8a.object, _0x13dd8a.shakeOrigPos.x, _0x13dd8a.shakeOrigPos.y, _0x13dd8a.shakeOrigPos.z);
      _0x13dd8a.object.rotation = new mp.Vector3(_0x13dd8a.shakeOrigRot.x, _0x13dd8a.shakeOrigRot.y, _0x13dd8a.shakeOrigRot.z);
    }
    _0x13dd8a.shakeOrigPos = null;
    _0x13dd8a.shakeOrigRot = null;
  }
}
function releaseLocalLumberjackTreeSlot(_0x5e75be) {
  if ((_0x5e75be = normWoodTreeSlotId(_0x5e75be)) === null) {
    return;
  }
  const _0x78a1c7 = normWoodTreeSlotId(localAtLumberjackTreeIndex);
  if (_0x78a1c7 !== null && _0x78a1c7 === _0x5e75be) {
    cancelLocalLumberjackSwing(_0x5e75be);
    localAtLumberjackTreeIndex = null;
    activeTreeInteractions = 0;
    if (isLocalAtLumberjackZone && isLocalLumberjackWorking) {
      mp.events.call("Client_LumberjackTreeInteraction", false, null, true);
    } else {
      showHudInteraction(false);
      lastLumberjackInteractHintShown = undefined;
      clearHudProgressBar();
    }
  }
}
function destroyLumberjackTreeColshapeIfPresent(_0x44f1a8) {
  if ((_0x44f1a8 = normWoodTreeSlotId(_0x44f1a8)) === null) {
    return;
  }
  const _0x172546 = lumberjackTreesMap.get(_0x44f1a8);
  if (_0x172546?.colshape && mp.colshapes.exists(_0x172546.colshape)) {
    _0x172546.colshape.destroy();
    _0x172546.colshape = null;
  }
}
function tryAttachAxe(_0x498572, _0x3d484b = AXE_ATTACH_DATA) {
  if (Number.isNaN(_0x498572)) {
    return;
  }
  cancelRestoreLumberjackAxe(_0x498572);
  try {
    const _0x1b4d94 = parseInt(localplayer.remoteId, 10);
    if (!Number.isNaN(_0x1b4d94) && _0x1b4d94 === _0x498572) {
      isLocalLumberjackWorking = true;
      lastLumberjackInteractHintShown = undefined;
      syncLumberjackTreeBlips();
    }
  } catch (_0x3c078d) {
    mp.console.logInfo("[lumberjack] tryAttachAxe: " + _0x3c078d.message);
  }
  const _0x5aaf7b = mp.players.atRemoteId(_0x498572);
  if (_0x5aaf7b && mp.players.exists(_0x5aaf7b) && _0x5aaf7b.handle !== 0) {
    mp.events.call("Client_attachObject2", _0x498572, _0x3d484b);
    const _0x38b0cf = global.syncAttachedObjects && global.syncAttachedObjects[_0x498572];
    if (_0x38b0cf && mp.objects.exists(_0x38b0cf)) {
      _0x38b0cf.notifyStreaming = true;
      _0x38b0cf.lumberjackOwnerRid = _0x498572;
    }
    pendingAxeAttach.delete(_0x498572);
    return;
  }
  pendingAxeAttach.add(_0x498572);
}
function lumberjackForwardDirFromHeadingDeg(_0x2c56f0) {
  const _0x12cfaf = parseFloat(_0x2c56f0);
  if (Number.isNaN(_0x12cfaf)) {
    return {
      x: 0,
      y: 1,
      z: 0
    };
  }
  const _0x30165b = (_0x12cfaf + 90) * Math.PI / 180;
  let _0x591a0a = Math.cos(_0x30165b);
  let _0x3bea43 = Math.sin(_0x30165b);
  const _0x21dc3e = Math.sqrt(_0x591a0a * _0x591a0a + _0x3bea43 * _0x3bea43) || 1;
  return {
    x: _0x591a0a / _0x21dc3e,
    y: _0x3bea43 / _0x21dc3e,
    z: 0
  };
}
function getLumberjackFallCrushLength(_0x1b60dd) {
  const _0x42ffdf = parseInt(_0x1b60dd, 10);
  const _0x4e83e0 = Number.isNaN(_0x42ffdf) ? 0 : _0x42ffdf;
  const _0x30cf99 = Math.abs(getTreeGrowSpec(_0x4e83e0).buriedZOffset || 0);
  return Math.min(20, Math.max(7, _0x30cf99 * 0.42));
}
function rotateVecYXZ(_0xef2f5f, _0x56357b, _0x49de3b, _0x2c955e, _0x569431, _0x1fb710) {
  const _0x1a1be6 = Math.PI / 180;
  let _0x50528f = Math.cos(_0x2c955e * _0x1a1be6);
  let _0x3da633 = Math.sin(_0x2c955e * _0x1a1be6);
  let _0x4a229e = -_0xef2f5f * _0x3da633 + _0x49de3b * _0x50528f;
  _0xef2f5f = _0xef2f5f * _0x50528f + _0x49de3b * _0x3da633;
  _0x49de3b = _0x4a229e;
  let _0x2d58b9 = Math.cos(_0x569431 * _0x1a1be6);
  let _0x42f637 = Math.sin(_0x569431 * _0x1a1be6);
  let _0x391ffd = _0x56357b * _0x42f637 + _0x49de3b * _0x2d58b9;
  _0x56357b = _0x56357b * _0x2d58b9 - _0x49de3b * _0x42f637;
  _0x49de3b = _0x391ffd;
  let _0x20707e = Math.cos(_0x1fb710 * _0x1a1be6);
  let _0x12d18a = Math.sin(_0x1fb710 * _0x1a1be6);
  return {
    x: _0xef2f5f * _0x20707e - _0x56357b * _0x12d18a,
    y: _0xef2f5f * _0x12d18a + _0x56357b * _0x20707e,
    z: _0x391ffd
  };
}
function getLumberjackFallRotationAt(_0x2256a6, _0x3bd23d, _0x3214c0) {
  const _0x1b2a1a = _0x3bd23d * 90;
  return {
    rotX: -_0x1b2a1a * (_0x2256a6.y || 0),
    rotY: _0x1b2a1a * (_0x2256a6.x || 0),
    rotZ: _0x3214c0 || 0
  };
}
function getLumberjackFallHorizontalDirAt(_0xcc178d, _0x49a481, _0x46de48) {
  if (!_0xcc178d) {
    return {
      x: 0,
      y: 1
    };
  }
  const _0x4735e3 = getLumberjackFallRotationAt(_0xcc178d, _0x49a481, _0x46de48);
  const _0x32cd5a = rotateVecYXZ(0, 0, 1, _0x4735e3.rotY, _0x4735e3.rotX, _0x4735e3.rotZ);
  const _0x2085cb = Math.sqrt(_0x32cd5a.x * _0x32cd5a.x + _0x32cd5a.y * _0x32cd5a.y);
  if (_0x2085cb < 0.05) {
    let _0x58f5d0 = _0xcc178d.x;
    let _0x2879ea = _0xcc178d.y;
    const _0x231497 = Math.sqrt(_0x58f5d0 * _0x58f5d0 + _0x2879ea * _0x2879ea) || 1;
    return {
      x: _0x58f5d0 / _0x231497,
      y: _0x2879ea / _0x231497
    };
  }
  return {
    x: _0x32cd5a.x / _0x2085cb,
    y: _0x32cd5a.y / _0x2085cb
  };
}
function isInLumberjackFallStrip(_0xbdb7d2, _0x3e20f7, _0x482243, _0x171bee, _0x2c5372, _0x3e087e) {
  const _0x40c85d = _0x171bee - _0xbdb7d2.x;
  const _0x1df996 = _0x2c5372 - _0xbdb7d2.y;
  if (Math.sqrt(_0x40c85d * _0x40c85d + _0x1df996 * _0x1df996) < 3) {
    return false;
  }
  const _0x5d4a20 = Math.sqrt(_0x3e20f7 * _0x3e20f7 + _0x482243 * _0x482243) || 1;
  const _0x23556f = _0x3e20f7 / _0x5d4a20;
  const _0x26ccdb = _0x482243 / _0x5d4a20;
  const _0x14dda1 = _0x40c85d * _0x23556f + _0x1df996 * _0x26ccdb;
  const _0x195433 = Math.abs(-_0x40c85d * _0x26ccdb + _0x1df996 * _0x23556f);
  return !(_0x14dda1 < 3) && !(_0x14dda1 > _0x3e087e) && !(_0x195433 > 0.5);
}
function isInLumberjackFallCrushZone(_0xe490be, _0x287d5b, _0x1324ca, _0x3905ca, _0x9cadee, _0x579620, _0x304c8b = 1) {
  if (!_0xe490be || !_0x287d5b) {
    return false;
  }
  const _0xe24936 = [0.9, 0.95, Math.min(1, _0x304c8b)];
  for (let _0x50ff6a = 0; _0x50ff6a < _0xe24936.length; _0x50ff6a++) {
    const _0x3271b1 = getLumberjackFallHorizontalDirAt(_0x287d5b, _0xe24936[_0x50ff6a], _0x579620);
    if (isInLumberjackFallStrip(_0xe490be, _0x3271b1.x, _0x3271b1.y, _0x1324ca, _0x3905ca, _0x9cadee)) {
      return true;
    }
  }
  return false;
}
function startTreeFalling(_0xb97a08, _0x1b1b2a, _0xac8330) {
  try {
    if ((_0xb97a08 = normWoodTreeSlotId(_0xb97a08)) === null) {
      return;
    }
    lumberjackSkipProgressClearOnTreeColshapeExit = true;
    destroyLumberjackTreeColshapeIfPresent(_0xb97a08);
    releaseLocalLumberjackTreeSlot(_0xb97a08);
    const _0x5755fa = lumberjackTreesMap.get(_0xb97a08);
    const _0x533ced = _0x5755fa?.object || pendingFallObjects.get(_0xb97a08);
    if (!_0x533ced || !mp.objects.exists(_0x533ced)) {
      return;
    }
    const _0x5d70d5 = TREE_POSITIONS[_0xb97a08];
    if (_0x5d70d5) {
      setLumberjackTreeWorldPos(_0x533ced, _0x5d70d5.x, _0x5d70d5.y, _0x5d70d5.z);
    }
    thawLumberjackPropObject(_0x533ced);
    if (_0x5755fa) {
      delete _0x5755fa.lumberjackFrozenProp;
    }
    pendingFallObjects.delete(_0xb97a08);
    let _0x3dac96 = lumberjackForwardDirFromHeadingDeg(_0xac8330);
    if (!_0x3dac96 || typeof _0x3dac96.x != "number" || typeof _0x3dac96.y != "number") {
      _0x3dac96 = {
        x: 0,
        y: 1,
        z: 0
      };
    }
    const _0x4e1a55 = _0x5755fa && _0x5755fa.modelId !== undefined && _0x5755fa.modelId !== null ? parseInt(_0x5755fa.modelId, 10) : 0;
    const _0x44c957 = Number.isNaN(_0x4e1a55) ? 0 : _0x4e1a55;
    let _0x48cc6a = 0;
    if (_0x533ced.rotation && typeof _0x533ced.rotation.z == "number" && !Number.isNaN(_0x533ced.rotation.z)) {
      _0x48cc6a = _0x533ced.rotation.z;
    }
    fallingTrees.set(_0xb97a08, {
      startedAt: Date.now(),
      dir: _0x3dac96,
      object: _0x533ced,
      baseRotZ: _0x48cc6a,
      crashReported: false,
      crushLength: getLumberjackFallCrushLength(_0x44c957)
    });
    setTimeout(() => {
      const _0x3d61d9 = fallingTrees.get(_0xb97a08);
      if (_0x3d61d9) {
        if (_0x3d61d9.object && mp.objects.exists(_0x3d61d9.object)) {
          _0x3d61d9.object.destroy();
        }
        fallingTrees.delete(_0xb97a08);
      }
    }, 6000);
  } catch (_0x19df15) {
    mp.console.logInfo("Error in startTreeFalling (lumberjack): " + _0x19df15.message);
  }
}
function shouldShowLumberjackTreeBlips() {
  return isLocalAtLumberjackZone && isLocalLumberjackWorking;
}
function createLumberjackTreeBlip(_0x1ddcaa) {
  try {
    if ((_0x1ddcaa = normWoodTreeSlotId(_0x1ddcaa)) === null) {
      return;
    }
    if (!shouldShowLumberjackTreeBlips()) {
      return;
    }
    const _0x3d15f2 = lumberjackTreesMap.get(_0x1ddcaa);
    if (!_0x3d15f2) {
      return;
    }
    if (_0x3d15f2.blip && mp.blips.exists(_0x3d15f2.blip)) {
      return;
    }
    const _0x24139c = TREE_POSITIONS[_0x1ddcaa];
    if (!_0x24139c) {
      return;
    }
    _0x3d15f2.blip = mp.blips.new(271, _0x24139c, {
      name: "Tree",
      scale: 0.4,
      color: 25,
      alpha: 255,
      shortRange: false,
      dimension: 0
    });
  } catch (_0x127972) {
    mp.console.logInfo("[lumberjack] createLumberjackTreeBlip: " + _0x127972.message);
  }
}
function destroyLumberjackTreeBlip(_0x1b9c95) {
  try {
    if ((_0x1b9c95 = normWoodTreeSlotId(_0x1b9c95)) === null) {
      return;
    }
    const _0xa24476 = lumberjackTreesMap.get(_0x1b9c95);
    if (!_0xa24476 || !_0xa24476.blip) {
      return;
    }
    if (mp.blips.exists(_0xa24476.blip)) {
      _0xa24476.blip.destroy();
    }
    _0xa24476.blip = null;
  } catch (_0x169a5b) {
    mp.console.logInfo("[lumberjack] destroyLumberjackTreeBlip: " + _0x169a5b.message);
  }
}
function clearAllLumberjackTreeBlips() {
  lumberjackTreesMap.forEach((_0x5e7b40, _0x209118) => {
    destroyLumberjackTreeBlip(_0x209118);
  });
}
function syncLumberjackTreeBlips() {
  if (shouldShowLumberjackTreeBlips()) {
    lumberjackTreesMap.forEach((_0xd61fb6, _0x1461a5) => {
      if (_0xd61fb6 && _0xd61fb6.object && mp.objects.exists(_0xd61fb6.object)) {
        createLumberjackTreeBlip(_0x1461a5);
      } else {
        destroyLumberjackTreeBlip(_0x1461a5);
      }
    });
  } else {
    clearAllLumberjackTreeBlips();
  }
}
function getRandomNearestTreePos(_0x4ac78f = 5) {
  const _0x52380a = localplayer.position;
  const _0x2fe9ab = [];
  lumberjackTreesMap.forEach((_0x1390f5, _0x362ec9) => {
    if (!_0x1390f5 || !_0x1390f5.object || !mp.objects.exists(_0x1390f5.object)) {
      return;
    }
    const _0x36b87a = TREE_POSITIONS[_0x362ec9];
    if (_0x36b87a) {
      _0x2fe9ab.push({
        distance: mp.Vector3.Distance2D(_0x52380a, _0x36b87a),
        pos: _0x36b87a
      });
    }
  });
  if (!_0x2fe9ab.length) {
    return null;
  }
  _0x2fe9ab.sort((_0x20c7d6, _0x3408f4) => _0x20c7d6.distance - _0x3408f4.distance);
  const _0xaa5fc0 = _0x2fe9ab.slice(0, Math.min(_0x4ac78f, _0x2fe9ab.length));
  const _0x4fdedb = _0xaa5fc0[Math.floor(Math.random() * _0xaa5fc0.length)];
  return new mp.Vector3(_0x4fdedb.pos.x, _0x4fdedb.pos.y, _0x4fdedb.pos.z);
}
function clearLumberjackAxeRouteBlip() {
  if (lumberjackAxeRouteBlip && mp.blips.exists(lumberjackAxeRouteBlip)) {
    lumberjackAxeRouteBlip.destroy();
  }
  lumberjackAxeRouteBlip = null;
}
function ensureRouteToNearestTree() {
  if (!testAntiFlood("nearest_tree", 2000)) {
    return;
  }
  const _0x27b71a = getRandomNearestTreePos();
  if (_0x27b71a) {
    clearLumberjackAxeRouteBlip();
    lumberjackAxeRouteBlip = mp.blips.new(1, _0x27b71a, {
      name: "Tree",
      scale: 0.8,
      color: 2,
      alpha: 255,
      shortRange: false,
      dimension: 0
    });
    lumberjackAxeRouteBlip.setRoute(true);
    ShowNotification(language["Ближайшее дерево отмечено на карте"][curr_lang], 2);
  }
}
function rotateLocalToPosition(_0x3d23ef) {
  try {
    if (!_0x3d23ef) {
      return;
    }
    const _0x5edf96 = localplayer.position;
    const _0x53494c = _0x3d23ef.x - _0x5edf96.x;
    const _0x5ddd99 = _0x3d23ef.y - _0x5edf96.y;
    const _0x195721 = Math.atan2(_0x5ddd99, _0x53494c) * 180 / Math.PI - 90;
    localplayer.setHeading(_0x195721);
  } catch (_0x2cdb7e) {
    mp.console.logInfo("Error in rotateLocalToPosition: " + _0x2cdb7e.message);
  }
}
function updateFallingTrees(_0x41a675) {
  fallingTrees.forEach((_0x3a011f, _0xaddd9e) => {
    if (!_0x3a011f || !_0x3a011f.object || !mp.objects.exists(_0x3a011f.object)) {
      return;
    }
    const _0x52de5d = TREE_POSITIONS[_0xaddd9e];
    if (_0x52de5d) {
      setLumberjackTreeWorldPos(_0x3a011f.object, _0x52de5d.x, _0x52de5d.y, _0x52de5d.z);
    }
    const _0x33e52b = Math.min(1, (_0x41a675 - _0x3a011f.startedAt) / 1200) * 90;
    const _0x6eea5b = -_0x33e52b * (_0x3a011f.dir.y || 0);
    const _0x17d9e9 = _0x33e52b * (_0x3a011f.dir.x || 0);
    const _0x364a16 = typeof _0x3a011f.baseRotZ != "number" || Number.isNaN(_0x3a011f.baseRotZ) ? _0x3a011f.object.rotation ? _0x3a011f.object.rotation.z : 0 : _0x3a011f.baseRotZ;
    _0x3a011f.object.setRotation(_0x6eea5b, _0x17d9e9, _0x364a16, 2, true);
    if (!_0x3a011f.crashReported && isLocalAtLumberjackZone && localplayer && mp.players.exists(localplayer)) {
      const _0x31571b = (_0x41a675 - _0x3a011f.startedAt) / 1200;
      if (_0x31571b >= 0.9 && _0x31571b <= 1.02) {
        const _0x1bac46 = TREE_POSITIONS[_0xaddd9e];
        const _0x12ed8d = _0x3a011f.crushLength || getLumberjackFallCrushLength(0);
        if (_0x1bac46 && _0x3a011f.dir) {
          let _0x192963 = localplayer.position;
          const _0x15b5f6 = localplayer.vehicle;
          if (_0x15b5f6 && mp.vehicles.exists(_0x15b5f6)) {
            _0x192963 = _0x15b5f6.position;
          }
          if (Math.abs(_0x192963.z - _0x1bac46.z) <= 8 && isInLumberjackFallCrushZone(_0x1bac46, _0x3a011f.dir, _0x192963.x, _0x192963.y, _0x12ed8d, _0x3a011f.baseRotZ, _0x31571b)) {
            if (global.test_mode) {
              mp.gui.chat.push("[Test server] Fall crush hit " + _0xaddd9e + " tr=" + _0x31571b.toFixed(2));
            }
            _0x3a011f.crashReported = true;
            mp.events.callRemote("Server_Lumberjack_FallingTreeHit", _0xaddd9e);
          }
        }
      }
    }
  });
}
function disableLumberjackControls() {
  DISABLED_CONTROLS.forEach(_0x330521 => {
    mp.game.controls.disableControlAction(0, _0x330521, true);
  });
}
function wasAxeClickPressed() {
  return mp.game.controls.isDisabledControlJustPressed(0, 24);
}
function freezeLocalForHit() {
  try {
    if (localFreezeUnfreezeTimer) {
      clearTimeout(localFreezeUnfreezeTimer);
      localFreezeUnfreezeTimer = null;
    }
    localplayer.freezePosition(true);
    localFreezeUnfreezeTimer = setTimeout(() => {
      localFreezeUnfreezeTimer = null;
      try {
        localplayer.freezePosition(false);
      } catch (_0xff1ed3) {
        mp.console.logInfo("[lumberjack] freezeLocalForHit unfreeze: " + _0xff1ed3.message);
      }
    }, 650);
  } catch (_0x205772) {
    mp.console.logInfo("[lumberjack] freezeLocalForHit: " + _0x205772.message);
  }
}
function playLocalAxeHitOnce(_0x2ba54b) {
  const _0x2fe7c3 = _0x2ba54b ? 900 : 1700;
  const _0x58367e = _0x2ba54b ? 49 : 0;
  try {
    if (localAxeAnimStopTimer) {
      clearTimeout(localAxeAnimStopTimer);
      localAxeAnimStopTimer = null;
    }
    if (typeof global.play_animation2 == "function") {
      global.play_animation2(localplayer, LUMBERJACK_AXE_ANIM_DICT, LUMBERJACK_AXE_ANIM_NAME, 8, -8, _0x2fe7c3, _0x58367e, 0);
    } else {
      localplayer.taskPlayAnim(LUMBERJACK_AXE_ANIM_DICT, LUMBERJACK_AXE_ANIM_NAME, 8, -8, _0x2fe7c3, _0x58367e, 0, false, false, false);
    }
    if (_0x2ba54b) {
      return;
    }
    localAxeAnimStopTimer = setTimeout(() => {
      localAxeAnimStopTimer = null;
      try {
        if (typeof global.stop_animation == "function") {
          global.stop_animation(localplayer, LUMBERJACK_AXE_ANIM_DICT, LUMBERJACK_AXE_ANIM_NAME);
        }
      } catch (_0x8446cf) {
        mp.console.logInfo("[lumberjack] playLocalAxeHitOnce stop anim: " + _0x8446cf.message);
      }
    }, 1750);
  } catch (_0x5e85d5) {
    mp.console.logInfo("[lumberjack] playLocalAxeHitOnce: " + _0x5e85d5.message);
  }
}
function getLocalTreeTargetPos(_0x1dc36f) {
  const _0x3ae6a7 = normWoodTreeSlotId(_0x1dc36f);
  if (_0x3ae6a7 === null) {
    return null;
  }
  const _0x1d4363 = lumberjackTreesMap.get(_0x3ae6a7);
  return _0x1d4363?.object?.position || TREE_POSITIONS[_0x3ae6a7];
}
function isAxeHeldDown() {
  return mp.game.controls.isDisabledControlPressed(0, 24);
}
function startLocalSwing() {
  if (isLocalSwingInProgress) {
    return;
  }
  const _0x1d902a = Date.now();
  if (_0x1d902a - lastLocalSwingAt < 1000 || GlobalCheck() || localplayer.isInAnyVehicle(false)) {
    return;
  }
  lastLocalSwingAt = _0x1d902a;
  if (localplayer.isFalling() || localplayer.isReloading() || localplayer.getConfigFlag(78, true) || localplayer.getConfigFlag(388, true) || localplayer.isRagdoll() || !localplayer.isOnFoot() || localplayer.isInAir()) {
    return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
  }
  const _0x251db1 = normWoodTreeSlotId(localAtLumberjackTreeIndex);
  if (_0x251db1 !== null) {
    const _0x27bdc1 = treeBusyBlockedUntil.get(_0x251db1);
    if (_0x27bdc1 && Date.now() < _0x27bdc1) {
      return;
    }
    if (!lumberjackTreeChoppable(_0x251db1)) {
      return;
    }
  }
  const _0x4b234d = _0x251db1 !== null;
  if (!_0x4b234d) {
    ensureRouteToNearestTree();
    playLocalAxeHitOnce(true);
    return;
  }
  clearLumberjackAxeRouteBlip();
  if (!isProgressBarShowing) {
    const _0x5cdabd = treeProgressCache.get(_0x251db1);
    showHudProgressBarPct(_0x5cdabd && _0x5cdabd.hitsNeeded > 0 ? Math.min(100, Math.max(0, _0x5cdabd.hitsDone / _0x5cdabd.hitsNeeded * 100)) : 0);
  }
  rotateLocalToPosition(getLocalTreeTargetPos(_0x251db1));
  freezeLocalForHit();
  playLocalAxeHitOnce(false);
  isLocalSwingInProgress = true;
  if (localSwingImpactTimer) {
    clearTimeout(localSwingImpactTimer);
  }
  if (localSwingEndTimer) {
    clearTimeout(localSwingEndTimer);
  }
  localSwingImpactTimer = setTimeout(() => {
    localSwingImpactTimer = null;
    if (isLocalAtLumberjackZone && isLocalLumberjackWorking && !GlobalCheck() && _0x4b234d && lumberjackTreeChoppable(localAtLumberjackTreeIndex)) {
      startTreeShake(localAtLumberjackTreeIndex);
      main_browser.execute("window.MusicManager.playSound('lumberjack/axe_hit.mp3', { volume: 0.2 })");
      mp.events.callRemote("Server_Lumberjack_SwingTree", localAtLumberjackTreeIndex, localplayer.getHeading());
    }
  }, 1000);
  localSwingEndTimer = setTimeout(() => {
    localSwingEndTimer = null;
    isLocalSwingInProgress = false;
  }, 1700);
}
function handleAxeInput() {
  if (isLocalSwingInProgress) {
    return;
  }
  const _0x5808bd = wasAxeClickPressed();
  const _0x47a839 = isAxeHeldDown();
  if (_0x5808bd || _0x47a839) {
    startLocalSwing();
  }
}
function syncLumberjackInteractHintVisibility() {
  if (!isLocalAtLumberjackZone || !isLocalLumberjackWorking) {
    return;
  }
  if (localAtLumberjackTreeIndex == null) {
    return;
  }
  const _0x3d0e37 = lumberjackTreeChoppable(localAtLumberjackTreeIndex) && !isAxeHeldDown() && !isLocalSwingInProgress;
  if (lastLumberjackInteractHintShown !== _0x3d0e37) {
    lastLumberjackInteractHintShown = _0x3d0e37;
    showHudInteraction(_0x3d0e37, "Click");
  }
}
function lumberjackRenderTick() {
  const _0x20a29f = Date.now();
  updateGrowingLumberTrees(_0x20a29f);
  updateFallingTrees(_0x20a29f);
  if (isLocalLumberjackWorking) {
    disableLumberjackControls();
    handleAxeInput();
    syncLumberjackInteractHintVisibility();
  }
}
function startLumberjackRender() {
  if (!lumberjackRenderActive) {
    lumberjackRenderActive = true;
    mp.events.add("render", lumberjackRenderTick);
  }
}
function stopLumberjackRender() {
  if (lumberjackRenderActive) {
    lumberjackRenderActive = false;
    mp.events.remove("render", lumberjackRenderTick);
  }
}
mp.events.add("WoodJobEvent", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("WoodJobEventServer");
  }
});
mp.events.add("Client_Lumberjack_JobHud", (_0x1f92cf, _0x21d36e = 0, _0x399df9 = 0) => {
  lumberjackJobHudApply(_0x1f92cf, _0x21d36e, _0x399df9);
});
mp.events.add("Client_JoinJobLumberjack", (_0x292488 = 0, _0x4ce99a = 0) => {
  lumberjackJobHudApply(true, _0x292488, _0x4ce99a);
  mp.events.call("Client_CloseJobDesign");
  mp.events.call("SwitchWeaponNoBullets");
  ensureRouteToNearestTree();
  can_call_wood_contracts = true;
});
mp.events.add("Client_LumberjackLevaeJob", () => {
  cancelLocalLumberjackSwing(localAtLumberjackTreeIndex);
  if (lumberjackWorkersInZone.has(localplayer.remoteId)) {
    lumberjackWorkersInZone.delete(localplayer.remoteId);
  }
  detachLocalLumberjackAxeIfWorker();
  hideLumberjackJobCounterHud();
  fallingTrees.clear();
  pendingFallObjects.clear();
  activeTreeInteractions = 0;
  localAtLumberjackTreeIndex = null;
  clearLumberjackAxeRouteBlip();
  clearAllLumberjackTreeBlips();
  lastLumberjackInteractHintShown = undefined;
  showHudInteraction(false);
  cancelProgressBarHideTimer();
  clearHudProgressBar();
  hideLumberjackJobCounterHud();
  pendingProgressByTree.clear();
  treeProgressCache.clear();
  lastImpactAtByTree.clear();
  completedTrees.clear();
  treeBusyBlockedUntil.clear();
  isLocalLumberjackWorking = false;
  can_call_wood_contracts = false;
  if (lumberjackWorkersInZone.has(localplayer.remoteId)) {
    lumberjackWorkersInZone.delete(localplayer.remoteId);
  }
});
global.can_call_wood_contracts = false;
mp.events.add("CanCallWoodContracts", _0x2d0c92 => {
  can_call_wood_contracts = _0x2d0c92;
});
mp.events.add("Client_StartWoodContract", _0x535c96 => {
  wood_contract_inverval ||= setInterval(function () {
    if (_0x535c96 > 0) {
      _0x535c96--;
    } else if (_0x535c96 <= 0) {
      if (wood_contract_inverval != null) {
        clearInterval(wood_contract_inverval);
      }
      wood_contract_inverval = undefined;
      mp.events.callRemote("Server_CancelWoodContract");
    }
  }, 1000);
});
mp.events.add("Client_CancelWoodContract", () => {
  if (wood_contract_inverval != null) {
    clearInterval(wood_contract_inverval);
    wood_contract_inverval = undefined;
  }
});
global.WoodContractClose = function () {
  if (WoodContractOpened) {
    WoodContractOpened = false;
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_wood_list.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
  }
};
global.WoodContractOpened = false;
mp.events.add("WoodContractsShow", (_0x5fd2b7, _0x16eae6, _0x4f2f75) => {
  mp.events.call("Disablechat");
  let _0xfb4750 = [];
  let _0x5a5a2c = "";
  for (let _0xeba5f8 = 0; _0xeba5f8 < _0x5fd2b7.length; _0xeba5f8++) {
    _0x5a5a2c = mp.storage.data.friends[_0x5fd2b7[_0xeba5f8]] != null || spose_name === _0x5fd2b7[_0xeba5f8] ? "{'Name':'" + _0x5fd2b7[_0xeba5f8].replace("_", " ") + "','Money':" + _0x16eae6[_0xeba5f8] + ",'Time':'" + Math.round(_0x4f2f75[_0xeba5f8] / 60) + "'}" : "{'Name':'" + language.Незнакомец[curr_lang] + "','Money':" + _0x16eae6[_0xeba5f8] + ",'Time':'" + Math.round(_0x4f2f75[_0xeba5f8] / 60) + "'}";
    _0xfb4750.push(_0x5a5a2c);
  }
  WoodContractOpened = true;
  const _0x40f2a7 = "{\"items\":[" + _0xfb4750 + "],\"show\":true}";
  main_browser.execute("APPS.state.work_wood_list = " + _0x40f2a7);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_LumberjackPlayerEnterZone", (_0x4b3ed7, _0xa5bd29) => {
  isLocalAtLumberjackZone = true;
  startLumberjackRender();
  startLumberjackAxeAttachListeners();
  if (Array.isArray(_0x4b3ed7)) {
    _0x4b3ed7.forEach(_0x1c55ec => {
      if (!Array.isArray(_0x1c55ec) || _0x1c55ec.length < 2) {
        return;
      }
      const _0x5b4f83 = normWoodTreeSlotId(_0x1c55ec[0]);
      if (_0x5b4f83 !== null) {
        spawnTreeAtPos(_0x5b4f83, _0x1c55ec[1]);
      }
    });
  }
  applyLumberjackWorkersInZone(_0xa5bd29);
  syncLumberjackTreeBlips();
});
mp.events.add("Client_LumberjackPlayerExitZone", () => {
  isLocalAtLumberjackZone = false;
  stopLumberjackRender();
  stopLumberjackAxeAttachListeners();
  pendingAxeAttach.clear();
  lumberjackWorkersInZone.clear();
  detachLocalLumberjackAxeIfWorker();
  hideLumberjackJobCounterHud();
  fallingTrees.forEach(_0x14e435 => {
    if (_0x14e435 && _0x14e435.object && mp.objects.exists(_0x14e435.object)) {
      _0x14e435.object.destroy();
    }
  });
  fallingTrees.clear();
  pendingFallObjects.clear();
  lumberjackTreesMap.forEach((_0x3d2418, _0xa9f170) => {
    destroyTreeAtPos(_0xa9f170);
  });
  activeTreeInteractions = 0;
  localAtLumberjackTreeIndex = null;
  clearLumberjackAxeRouteBlip();
  showHudInteraction(false);
  lastLumberjackInteractHintShown = undefined;
  cancelProgressBarHideTimer();
  clearHudProgressBar();
  pendingProgressByTree.clear();
  treeProgressCache.clear();
  lastImpactAtByTree.clear();
  completedTrees.clear();
});
mp.events.add("Client_Lumberjack_TreesRespawned", _0x224438 => {
  if (isLocalAtLumberjackZone && Array.isArray(_0x224438)) {
    _0x224438.forEach(_0x325890 => {
      if (!Array.isArray(_0x325890) || _0x325890.length < 2) {
        return;
      }
      const _0x370bf6 = parseInt(_0x325890[0]);
      const _0x50d1a8 = _0x325890[1];
      let _0x442433 = null;
      if (_0x325890.length >= 3) {
        const _0x25496d = parseInt(_0x325890[2], 10);
        if (!Number.isNaN(_0x25496d)) {
          _0x442433 = _0x25496d;
        }
      }
      if (!Number.isNaN(_0x370bf6)) {
        if (lumberjackTreesMap.has(_0x370bf6)) {
          destroyTreeAtPos(_0x370bf6);
        }
        spawnTreeAtPos(_0x370bf6, _0x50d1a8, {
          respawn: true,
          serverWaveTs: _0x442433
        });
      }
    });
  }
});
mp.events.add("playerEnterColshape", _0x59567b => {
  if (mp.colshapes.exists(_0x59567b) && _0x59567b.lumberjackJobTreeIndex !== undefined) {
    const _0x2f983f = normWoodTreeSlotId(_0x59567b.lumberjackJobTreeIndex);
    if (_0x2f983f === null) {
      return;
    }
    activeTreeInteractions++;
    localAtLumberjackTreeIndex = _0x2f983f;
    mp.events.call("Client_LumberjackTreeInteraction", true, _0x2f983f);
  }
});
mp.events.add("playerExitColshape", _0x3e54be => {
  if (mp.colshapes.exists(_0x3e54be) && _0x3e54be.lumberjackJobTreeIndex !== undefined) {
    activeTreeInteractions--;
    const _0x5bc427 = normWoodTreeSlotId(_0x3e54be.lumberjackJobTreeIndex);
    const _0x1686db = normWoodTreeSlotId(localAtLumberjackTreeIndex);
    if (_0x5bc427 !== null && _0x1686db !== null && _0x5bc427 === _0x1686db) {
      localAtLumberjackTreeIndex = null;
    }
    if (activeTreeInteractions <= 0) {
      activeTreeInteractions = 0;
      const _0x3fec43 = lumberjackSkipProgressClearOnTreeColshapeExit && isProgressBarShowing;
      lumberjackSkipProgressClearOnTreeColshapeExit = false;
      mp.events.call("Client_LumberjackTreeInteraction", false, null, _0x3fec43);
    }
  }
});
mp.events.add("Client_LumberjackTreeInteraction", (_0x54b005, _0x380fbf, _0x4b6e8e) => {
  if (!isLocalAtLumberjackZone || !isLocalLumberjackWorking) {
    showHudInteraction(false);
    lastLumberjackInteractHintShown = undefined;
    return;
  }
  if (_0x54b005) {
    lastLumberjackInteractHintShown = undefined;
    lumberjackSkipProgressClearOnTreeColshapeExit = false;
    if ((_0x380fbf = normWoodTreeSlotId(_0x380fbf)) === null) {
      return;
    }
    cancelProgressBarHideTimer();
    if (!lumberjackTreeChoppable(_0x380fbf)) {
      return;
    }
    const _0x5d18f3 = treeProgressCache.get(_0x380fbf);
    if (_0x5d18f3 && _0x5d18f3.hitsNeeded > 0 && _0x5d18f3.hitsDone < _0x5d18f3.hitsNeeded && lumberjackTreeChoppable(_0x380fbf)) {
      const _0x17eeb3 = Math.min(100, Math.max(0, _0x5d18f3.hitsDone / _0x5d18f3.hitsNeeded * 100));
      if (isProgressBarShowing) {
        updateHudProgressBarPct(_0x17eeb3);
      } else {
        showHudProgressBarPct(_0x17eeb3);
      }
    }
  } else {
    lastLumberjackInteractHintShown = undefined;
    showHudInteraction(false);
    if (!_0x4b6e8e) {
      clearHudProgressBar();
    }
  }
});
mp.events.add("Client_Lumberjack_AxeAttach", _0x438c56 => {
  lumberjackWorkersInZone.add(_0x438c56);
  tryAttachAxe(_0x438c56, AXE_ATTACH_DATA);
});
mp.events.add("Client_Lumberjack_AxeDetach", _0x3d91c3 => {
  lumberjackWorkersInZone.delete(_0x3d91c3);
  pendingAxeAttach.delete(_0x3d91c3);
  cancelRestoreLumberjackAxe(_0x3d91c3);
  detachLumberjackAxe(_0x3d91c3, true);
});
mp.events.add("entityStreamIn", _0x100054 => {
  if (_0x100054) {
    if (_0x100054.type === "object" && _0x100054.lumberjackOwnerRid !== undefined) {
      const _0x45fe3d = _0x100054.lumberjackOwnerRid;
      if (!lumberjackWorkersInZone.has(_0x45fe3d)) {
        return;
      }
      const _0x24afb8 = mp.players.atRemoteId(_0x45fe3d);
      if (!_0x24afb8 || !mp.players.exists(_0x24afb8) || _0x24afb8.handle === 0) {
        return;
      }
      try {
        const _0xe60586 = JSON.parse(AXE_ATTACH_DATA);
        const _0x341862 = _0x24afb8.getBoneIndex(_0xe60586.Bone);
        _0x100054.setCollision(false, false);
        _0x100054.attachTo(_0x24afb8.handle, _0x341862, _0xe60586.PosOffset1, _0xe60586.PosOffset2, _0xe60586.PosOffset3, _0xe60586.RotOffset1, _0xe60586.RotOffset2, _0xe60586.RotOffset3, true, false, false, false, 0, true);
      } catch (_0x570d92) {
        mp.console.logInfo("[lumberjack] axe streamIn attach: " + _0x570d92.message);
      }
      return;
    }
    if (_0x100054.type === "player" && isLocalAtLumberjackZone && lumberjackWorkersInZone.has(_0x100054.remoteId)) {
      setTimeout(() => {
        if (isLocalAtLumberjackZone && lumberjackWorkersInZone.has(_0x100054.remoteId)) {
          tryAttachAxe(_0x100054.remoteId, AXE_ATTACH_DATA);
        }
      }, 1000);
    }
  }
});
mp.events.add("entityStreamOut", _0x3d1ae8 => {
  if (_0x3d1ae8 && _0x3d1ae8.type === "player" && lumberjackWorkersInZone.has(_0x3d1ae8.remoteId)) {
    pendingAxeAttach.delete(_0x3d1ae8.remoteId);
    detachLumberjackAxe(_0x3d1ae8.remoteId, true);
  }
});
mp.events.add("Client_Lumberjack_ClearTreeProgress", _0x302ac3 => {
  try {
    if ((_0x302ac3 = normWoodTreeSlotId(_0x302ac3)) === null) {
      return;
    }
    completedTrees.delete(_0x302ac3);
    clearTreeProgressStateForPos(_0x302ac3);
    cancelLocalLumberjackSwing(_0x302ac3);
    if (normWoodTreeSlotId(localAtLumberjackTreeIndex) === _0x302ac3) {
      clearHudProgressBar();
    }
  } catch (_0x41bca9) {
    mp.console.logInfo("Error in Client_Lumberjack_ClearTreeProgress: " + _0x41bca9.message);
  }
});
mp.events.add("Client_Lumberjack_CancelSwing", _0xa0cc3b => {
  try {
    if ((_0xa0cc3b = normWoodTreeSlotId(_0xa0cc3b)) === null) {
      return;
    }
    cancelLocalLumberjackSwing(_0xa0cc3b);
    if (normWoodTreeSlotId(localAtLumberjackTreeIndex) === _0xa0cc3b) {
      clearTreeProgressStateForPos(_0xa0cc3b);
      clearHudProgressBar();
    }
    treeBusyBlockedUntil.set(_0xa0cc3b, Date.now() + 5000);
  } catch (_0x3995de) {
    mp.console.logInfo("Error in Client_Lumberjack_CancelSwing: " + _0x3995de.message);
  }
});
mp.events.add("Client_Lumberjack_UpdateProgress", (_0x117c55, _0x33d6c5, _0x2415c7) => {
  try {
    _0x117c55 = normWoodTreeSlotId(_0x117c55);
    _0x33d6c5 = parseInt(_0x33d6c5, 10);
    _0x2415c7 = parseInt(_0x2415c7, 10);
    if (fallingTrees.has(_0x117c55)) {
      return;
    }
    if (normWoodTreeSlotId(localAtLumberjackTreeIndex) !== _0x117c55) {
      return;
    }
    const _0x44dce9 = {
      hitsDone: _0x33d6c5,
      hitsNeeded: _0x2415c7
    };
    pendingProgressByTree.set(_0x117c55, _0x44dce9);
    treeProgressCache.set(_0x117c55, _0x44dce9);
    const _0x2e28e3 = Math.min(100, Math.max(0, _0x33d6c5 / _0x2415c7 * 100));
    if (isProgressBarShowing) {
      updateHudProgressBarPct(_0x2e28e3);
    } else {
      showHudProgressBarPct(_0x2e28e3);
    }
    if (_0x2415c7 > 0 && _0x33d6c5 >= _0x2415c7) {
      completedTrees.add(_0x117c55);
      treeBusyBlockedUntil.set(_0x117c55, Date.now() + 2800);
      lastLocalSwingAt = Date.now();
    }
    const _0x1190df = lastImpactAtByTree.get(_0x117c55) || 0;
    if (Date.now() - _0x1190df <= 900) {
      startTreeShake(_0x117c55);
    }
  } catch (_0x19acd7) {
    mp.console.logInfo("Error in Client_Lumberjack_UpdateProgress: " + _0x19acd7.message);
  }
});
mp.events.add("Client_Lumberjack_TreeRemoved", (_0x4b43df, _0x77420f, _0x59ab36) => {
  try {
    const _0x190469 = normWoodTreeSlotId(_0x4b43df);
    if (_0x190469 === null) {
      return;
    }
    const _0x4fc557 = parseInt(localplayer.remoteId, 10);
    const _0x303764 = typeof _0x77420f == "number" ? parseInt(_0x77420f, 10) : NaN;
    const _0x38dded = !Number.isNaN(_0x303764) && !Number.isNaN(_0x4fc557) && _0x303764 === _0x4fc557;
    const _0x63a278 = normWoodTreeSlotId(localAtLumberjackTreeIndex) === _0x190469;
    const _0x49871b = treeProgressCache.get(_0x190469);
    const _0x47c334 = _0x49871b && _0x49871b.hitsNeeded > 0 && _0x49871b.hitsDone > 0;
    const _0x656378 = _0x38dded || _0x63a278 || _0x47c334;
    const _0x39ba73 = typeof _0x77420f == "number";
    clearRemovedTreeProgressCaches(_0x190469);
    if (_0x39ba73 && _0x38dded) {
      treeBusyBlockedUntil.set(_0x190469, Date.now() + 2800);
      lastLocalSwingAt = Date.now();
    } else {
      treeBusyBlockedUntil.delete(_0x190469);
    }
    if (_0x656378) {
      cancelProgressBarHideTimer();
      cancelLocalLumberjackSwing(_0x190469);
      if (!_0x39ba73) {
        completedTrees.delete(_0x190469);
        clearHudProgressBar();
      }
    }
    if (_0x39ba73) {
      const _0x44e886 = lumberjackTreesMap.get(_0x190469);
      if (_0x44e886?.object && mp.objects.exists(_0x44e886.object)) {
        pendingFallObjects.set(_0x190469, _0x44e886.object);
      }
      stopTreeShake(_0x190469);
      const _0xfaedc0 = parseFloat(_0x59ab36);
      startTreeFalling(_0x190469, _0x77420f, Number.isNaN(_0xfaedc0) ? 0 : _0xfaedc0);
      destroyTreeAtPos(_0x190469, true);
      if (_0x656378) {
        updateHudProgressBarPct(100);
        scheduleHideProgressBar(1500);
        completedTrees.delete(_0x190469);
      }
    } else {
      completedTrees.delete(_0x190469);
      destroyTreeAtPos(_0x190469, !!fallingTrees.get(_0x190469));
    }
    if (_0x38dded) {
      ensureRouteToNearestTree();
    }
    if (_0x63a278) {
      localAtLumberjackTreeIndex = null;
      activeTreeInteractions = 0;
      lastLumberjackInteractHintShown = undefined;
      showHudInteraction(false);
    }
  } catch (_0x57dca3) {
    mp.console.logInfo("Error in Client_Lumberjack_TreeRemoved: " + _0x57dca3.message);
  }
});
const TREE_POSITIONS = [new mp.Vector3(-523.808, 5724.127, 44.18), new mp.Vector3(-533.635, 5699.853, 37.962), new mp.Vector3(-518.632, 5692.119, 44.6), new mp.Vector3(-494.46, 5674.168, 54.743), new mp.Vector3(-481.981, 5672.45, 59.211), new mp.Vector3(-470.573, 5679.96, 63.572), new mp.Vector3(-461.504, 5695.961, 69.48), new mp.Vector3(-476.733, 5637.918, 59.142), new mp.Vector3(-502.621, 5633.696, 58.43), new mp.Vector3(-514.4, 5652.064, 52.214), new mp.Vector3(-532.682, 5667.357, 43.013), new mp.Vector3(-550.763, 5655.921, 39.276), new mp.Vector3(-538.243, 5641.265, 46.88), new mp.Vector3(-545.4, 5610.564, 49.743), new mp.Vector3(-519.903, 5612.188, 58.47), new mp.Vector3(-507.091, 5611.893, 63.019), new mp.Vector3(-483.647, 5616.378, 64.346), new mp.Vector3(-457.885, 5613.833, 65.434), new mp.Vector3(-455.554, 5649.43, 68.1), new mp.Vector3(-456.375, 5593.719, 69.436), new mp.Vector3(-475.646, 5587.779, 68.7), new mp.Vector3(-488.824, 5562.689, 71.496), new mp.Vector3(-512.332, 5593.479, 65.45), new mp.Vector3(-530.338, 5588.673, 58.576), new mp.Vector3(-524.169, 5574.798, 64.374), new mp.Vector3(-550.715, 5585.581, 51.39), new mp.Vector3(-571.773, 5604.769, 42.015), new mp.Vector3(-566.96, 5625.553, 40.018), new mp.Vector3(-595.375, 5580.434, 40.777), new mp.Vector3(-617.964, 5568.387, 38.14), new mp.Vector3(-601.228, 5558.269, 44.794), new mp.Vector3(-583.985, 5570.436, 46.401), new mp.Vector3(-563.373, 5558.968, 51.397), new mp.Vector3(-553.638, 5545.713, 58.767), new mp.Vector3(-534.201, 5538.553, 63.496), new mp.Vector3(-510.78, 5537.831, 70.21), new mp.Vector3(-490.307, 5540.25, 73.675), new mp.Vector3(-463.334, 5571.767, 71.372), new mp.Vector3(-448.405, 5563.081, 71.57), new mp.Vector3(-461.605, 5541.863, 75.431), new mp.Vector3(-491.515, 5520.773, 75.866), new mp.Vector3(-509.606, 5520.402, 71.046), new mp.Vector3(-532.331, 5508.995, 64.234), new mp.Vector3(-544.15, 5524.586, 59.912), new mp.Vector3(-570.878, 5522.62, 54.012), new mp.Vector3(-572.7, 5509.494, 54.6), new mp.Vector3(-580.553, 5504.08, 53.366), new mp.Vector3(-573.621, 5485.426, 57.655), new mp.Vector3(-590.915, 5487.015, 54.073), new mp.Vector3(-589.155, 5470.794, 57.245), new mp.Vector3(-608.392, 5472.268, 54.23), new mp.Vector3(-614.671, 5487.228, 51.022), new mp.Vector3(-611.776, 5502.573, 49.976), new mp.Vector3(-589.122, 5521.391, 49.687), new mp.Vector3(-603.452, 5534.637, 47.129), new mp.Vector3(-585.504, 5547.495, 49.546), new mp.Vector3(-620.629, 5547.74, 42.056), new mp.Vector3(-639.172, 5551.26, 37.333), new mp.Vector3(-640.02, 5530.634, 41.625), new mp.Vector3(-648.404, 5508.154, 48.708), new mp.Vector3(-647.96, 5485.98, 50.476), new mp.Vector3(-666.969, 5494.031, 47.589), new mp.Vector3(-660.204, 5472.896, 50.534), new mp.Vector3(-664.357, 5517.353, 43.567), new mp.Vector3(-672.275, 5528.298, 38.415), new mp.Vector3(-689.753, 5511.037, 40.227), new mp.Vector3(-711.318, 5506.35, 37.015), new mp.Vector3(-703.671, 5494.13, 42.464), new mp.Vector3(-698.793, 5468.71, 44.644), new mp.Vector3(-726.147, 5481.675, 40.361), new mp.Vector3(-741.08, 5483.697, 37.235), new mp.Vector3(-765.126, 5470.766, 33.282), new mp.Vector3(-733.163, 5462.047, 37.535), new mp.Vector3(-672.306, 5453.643, 47.693), new mp.Vector3(-656.707, 5456.955, 50.459), new mp.Vector3(-626.669, 5460.716, 53.262), new mp.Vector3(-599.531, 5448.148, 56.868), new mp.Vector3(-578.101, 5436.927, 58.921), new mp.Vector3(-563.306, 5424.641, 60.826), new mp.Vector3(-593.979, 5423.367, 54.037), new mp.Vector3(-616.526, 5436.749, 52.698), new mp.Vector3(-648.473, 5434.201, 49.914), new mp.Vector3(-636.317, 5406.078, 49.717), new mp.Vector3(-558.898, 5466.568, 62.161), new mp.Vector3(-545.527, 5444.021, 65.199), new mp.Vector3(-530.409, 5443.835, 70.259), new mp.Vector3(-532.913, 5459.058, 69.418), new mp.Vector3(-546.537, 5466.795, 65.278), new mp.Vector3(-549.546, 5481.057, 61.767), new mp.Vector3(-529.665, 5489.122, 66.335), new mp.Vector3(-554.888, 5498.673, 58.768), new mp.Vector3(-513.385, 5498.167, 71.154), new mp.Vector3(-516.139, 5474.133, 73.315), new mp.Vector3(-501.807, 5483.098, 77.557), new mp.Vector3(-497.241, 5500.222, 77.432), new mp.Vector3(-482.488, 5490.37, 81.376), new mp.Vector3(-490.911, 5473.457, 81.94), new mp.Vector3(-504.474, 5463.901, 77.814), new mp.Vector3(-509.739, 5443.889, 75.265), new mp.Vector3(-493.546, 5443.262, 78.325), new mp.Vector3(-489.927, 5455.489, 81.17), new mp.Vector3(-477.963, 5462.737, 83.703), new mp.Vector3(-470.115, 5480.778, 84.007), new mp.Vector3(-463.414, 5465.386, 82.032), new mp.Vector3(-475.704, 5525.102, 77.842), new mp.Vector3(-456.152, 5514.039, 79.647), new mp.Vector3(-681.943, 5431.285, 46.11), new mp.Vector3(-741.132, 5431.778, 40.903), new mp.Vector3(-712.167, 5423.968, 44.941), new mp.Vector3(-708.876, 5410.069, 50.085), new mp.Vector3(-724.679, 5404.674, 49.75), new mp.Vector3(-747.385, 5407.102, 44.257), new mp.Vector3(-740.708, 5394.457, 48.839), new mp.Vector3(-755.432, 5386.725, 48.181), new mp.Vector3(-741.451, 5381.287, 53.32), new mp.Vector3(-729.984, 5392.402, 52.101), new mp.Vector3(-716.316, 5396.887, 52.473), new mp.Vector3(-721.818, 5382.321, 56.319), new mp.Vector3(-708.766, 5384.2, 56.898), new mp.Vector3(-717.014, 5370.116, 59.782), new mp.Vector3(-737.082, 5364.326, 59.05), new mp.Vector3(-753.469, 5371.287, 54.7), new mp.Vector3(-770.37, 5372.992, 48.759), new mp.Vector3(-767.386, 5358.423, 53.316), new mp.Vector3(-751.636, 5356.533, 58.094), new mp.Vector3(-729.078, 5347.648, 62.668), new mp.Vector3(-711.637, 5357.081, 63.937), new mp.Vector3(-702.166, 5372.86, 60.675), new mp.Vector3(-692.823, 5400.524, 51.209), new mp.Vector3(-688.574, 5383.52, 56.298), new mp.Vector3(-671.258, 5384.93, 53.399), new mp.Vector3(-677.415, 5369.932, 59.736), new mp.Vector3(-690.27, 5360.227, 64.903), new mp.Vector3(-663.392, 5360.898, 58.096), new mp.Vector3(-687.158, 5349.3, 66.694), new mp.Vector3(-662.94, 5343.312, 60.996), new mp.Vector3(-672.442, 5330.022, 64.742), new mp.Vector3(-693.613, 5325.24, 68.666), new mp.Vector3(-719.39, 5335.733, 68.171), new mp.Vector3(-740.507, 5327.499, 71.819), new mp.Vector3(-800.171, 5366.216, 52.016), new mp.Vector3(-825.843, 5355.89, 55.875), new mp.Vector3(-807.404, 5352.593, 61.064), new mp.Vector3(-783.702, 5344.186, 65.902), new mp.Vector3(-812.916, 5339.358, 69.7), new mp.Vector3(-796.615, 5333.365, 72.61), new mp.Vector3(-769.011, 5332.806, 73.123), new mp.Vector3(-779.17, 5314.486, 75.99), new mp.Vector3(-814.621, 5311.513, 77.535), new mp.Vector3(-802.738, 5302.473, 81.004), new mp.Vector3(-826.583, 5303.902, 79.739), new mp.Vector3(-820.226, 5293.454, 83.267), new mp.Vector3(-818.08, 5278.562, 85.826), new mp.Vector3(-801.014, 5285.955, 85.814), new mp.Vector3(-788.592, 5273.545, 88.163), new mp.Vector3(-748.33, 5301.633, 75.547), new mp.Vector3(-723.578, 5303.224, 71.618), new mp.Vector3(-718.694, 5288.507, 72.926), new mp.Vector3(-735.726, 5284.473, 78.004), new mp.Vector3(-753.916, 5283.292, 82.179), new mp.Vector3(-736.202, 5272.347, 81.715), new mp.Vector3(-724.614, 5274.239, 77.643), new mp.Vector3(-705.557, 5270.09, 74.171), new mp.Vector3(-683.181, 5276.573, 72.779), new mp.Vector3(-669.704, 5267.464, 75.179), new mp.Vector3(-653.681, 5263.091, 74.737), new mp.Vector3(-634.359, 5266.266, 71.489), new mp.Vector3(-652.409, 5281.854, 70.6), new mp.Vector3(-652.568, 5301.505, 66.589), new mp.Vector3(-668.167, 5290.699, 70.291), new mp.Vector3(-757.541, 5247.792, 94.3), new mp.Vector3(-778.783, 5253.366, 90.434), new mp.Vector3(-800.372, 5245.975, 93.19), new mp.Vector3(-786.674, 5242.441, 97.675), new mp.Vector3(-800, 5230.817, 99.983), new mp.Vector3(-782.574, 5228.238, 103.085), new mp.Vector3(-769.727, 5235.39, 98.464), new mp.Vector3(-748.339, 5230.237, 97.739), new mp.Vector3(-757.748, 5218.023, 104.584), new mp.Vector3(-775.73, 5215.406, 106.268), new mp.Vector3(-796.239, 5214.715, 106.194), new mp.Vector3(-778.852, 5202.377, 112.869), new mp.Vector3(-743.813, 5204.578, 103.488), new mp.Vector3(-755.556, 5194.437, 109.761), new mp.Vector3(-705.904, 5176.808, 105.767), new mp.Vector3(-677.749, 5175.185, 106.941), new mp.Vector3(-693.616, 5192.597, 102.765), new mp.Vector3(-675.438, 5195.191, 100.522), new mp.Vector3(-685.703, 5214.837, 95.914), new mp.Vector3(-662.815, 5211.917, 89.755), new mp.Vector3(-646.713, 5200.353, 90.985), new mp.Vector3(-649.316, 5185.893, 98.265), new mp.Vector3(-627.296, 5195.317, 89.294), new mp.Vector3(-612.718, 5194.973, 88.205), new mp.Vector3(-599.439, 5199.292, 85.4), new mp.Vector3(-606.596, 5185.228, 94.8), new mp.Vector3(-625.305, 5180.03, 96.84), new mp.Vector3(-640.747, 5175.307, 101.264), new mp.Vector3(-651.22, 5165.989, 107.479), new mp.Vector3(-663.662, 5183.207, 103.097), new mp.Vector3(-642.822, 5151.514, 112.645), new mp.Vector3(-633.015, 5162.574, 105.92), new mp.Vector3(-614.697, 5166.157, 101.526), new mp.Vector3(-599.521, 5172.256, 99.249), new mp.Vector3(-589.318, 5184.403, 92.993), new mp.Vector3(-581.413, 5199.283, 86.837), new mp.Vector3(-564.905, 5190.56, 93.87), new mp.Vector3(-575.543, 5174.497, 97.365), new mp.Vector3(-589.735, 5167.283, 103.361), new mp.Vector3(-606.194, 5155.689, 106.638), new mp.Vector3(-620.872, 5163.304, 103.3), new mp.Vector3(-625.959, 5138.858, 113.8), new mp.Vector3(-606.772, 5135.646, 114.101), new mp.Vector3(-588.577, 5144.562, 108.994), new mp.Vector3(-572.37, 5152.295, 103.857), new mp.Vector3(-563.768, 5169.242, 99.591), new mp.Vector3(-553.008, 5182.409, 95.406), new mp.Vector3(-543.863, 5210.239, 81.581), new mp.Vector3(-537.365, 5194.278, 86.112), new mp.Vector3(-538.363, 5175.239, 91.753), new mp.Vector3(-519.07, 5191.595, 87.89), new mp.Vector3(-527.305, 5208.41, 81.687), new mp.Vector3(-591.315, 5131.102, 113.392), new mp.Vector3(-570.668, 5137.402, 107.899), new mp.Vector3(-558.307, 5125.209, 108.267), new mp.Vector3(-574.958, 5124.171, 113.253), new mp.Vector3(-588.755, 5117.113, 117.865), new mp.Vector3(-610.713, 5121.832, 118.319), new mp.Vector3(-618.759, 5108.618, 124.118), new mp.Vector3(-600.585, 5105.628, 123.653), new mp.Vector3(-584.622, 5102.048, 122.484), new mp.Vector3(-569.639, 5108.989, 118.327), new mp.Vector3(-552.74, 5113.344, 112.187), new mp.Vector3(-557.875, 5102.112, 118.873), new mp.Vector3(-573.963, 5094.948, 123.788), new mp.Vector3(-590.137, 5082.528, 130.966), new mp.Vector3(-574.281, 5075.104, 129.303), new mp.Vector3(-562.205, 5073.626, 126.777), new mp.Vector3(-548.375, 5082.314, 122.384), new mp.Vector3(-593.104, 5436.321, 56.259), new mp.Vector3(-586.319, 5450.118, 59.264), new mp.Vector3(-581.326, 5419.257, 56.413)];