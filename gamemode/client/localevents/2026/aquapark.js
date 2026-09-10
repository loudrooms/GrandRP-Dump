"use strict";
global.aquaparkSliding = false;
global.aquaparkInArea = false;
const SLIDE_USE_DISTANCE = 2;
const SLIDE_SPEED_MULTIPLIER = 1.6;
const SLIDE_BASE_TICK_MS = 16;
const SLIDE_TICK_INTERVAL_MS = 16;
const AQUAPARK_AREA = new mp.Vector3(-1728.686, -1185.945, 3.764);
const AREA_RADIUS = 150;
const TURNSTILE_POS = new mp.Vector3(-1694.855, -1156.723, 2.401);
const TURNSTILE_HASH = mp.game.joaat("prop_turnstyle_bars");
const RIDE_PROP_HASH = mp.game.joaat("prop_cs_box_clothes");
const SEMAFOR_ON_HASH = mp.game.joaat("semafor_waterslide_on");
const SEMAFOR_OFF_HASH = mp.game.joaat("semafor_waterslide_off");
const SLIDE_DEFS = [{
  index: 0,
  coords: new mp.Vector3(-1706.43, -1158.43, 23.14),
  lightCoords: new mp.Vector3(-1708.097, -1158.331, 21.829),
  lightRotation: new mp.Vector3(0, 0, 213),
  targetHeading: 94
}, {
  index: 1,
  coords: new mp.Vector3(-1706.7, -1149.64, 22.86),
  lightCoords: new mp.Vector3(-1706.537, -1148.034, 21.829),
  lightRotation: new mp.Vector3(0, 0, 113),
  targetHeading: 7
}, {
  index: 2,
  coords: new mp.Vector3(-1710.24, -1153.66, 23.16),
  lightCoords: new mp.Vector3(-1709.988, -1152.127, 21.829),
  lightRotation: new mp.Vector3(0, 0, 113),
  targetHeading: 7
}, {
  index: 3,
  coords: new mp.Vector3(-1693.59, -1160.21, 22.84),
  lightCoords: new mp.Vector3(-1693.999, -1161.763, 21.829),
  lightRotation: new mp.Vector3(0, 0, -67),
  targetHeading: 187
}];
const slideRuntime = SLIDE_DEFS.map(() => ({
  using: false,
  handlerOn: null,
  handlerOff: null
}));
let aquaparkBlip = null;
let aquaparkAreaColshape = null;
let slideColshapes = [];
let nearestSlideIndex = null;
let isTurnstileLocked = true;
let isAquaparkInitialized = false;
const FALLBACK_ANIM_DICT = "rtx_waterpark_sit1@sharror";
const FALLBACK_ANIM_NAME = "rtx_waterpark_sit1_ierrorr";
const remoteRides = new Map();
const pendingRemoteRides = new Map();
function aquaparkLog(..._0x4e6a67) {
  if (global.test_mode) {
    try {
      mp.console.logInfo("[Aquapark] " + _0x4e6a67.map(String).join(" "));
    } catch (_0x34a853) {}
  }
}
function loadModel(_0x38aa71) {
  if (!mp.game.streaming.hasModelLoaded(_0x38aa71)) {
    mp.game.streaming.requestModel(_0x38aa71);
  }
}
function loadAnimDictAsync(_0x511789, _0x14bb11) {
  try {
    if (mp.game.streaming.hasAnimDictLoaded(_0x511789)) {
      _0x14bb11(true);
      return;
    }
    mp.game.streaming.requestAnimDict(_0x511789);
    let _0x546242 = 0;
    const _0x4d3534 = setInterval(() => {
      try {
        _0x546242++;
        if (mp.game.streaming.hasAnimDictLoaded(_0x511789)) {
          clearInterval(_0x4d3534);
          _0x14bb11(true);
        } else if (_0x546242 > 100) {
          clearInterval(_0x4d3534);
          _0x14bb11(false);
        }
      } catch (_0x3711d2) {
        clearInterval(_0x4d3534);
        _0x14bb11(false);
      }
    }, 50);
  } catch (_0x12e7d3) {
    _0x14bb11(false);
  }
}
function getSlidePath(_0x46d021) {
  const _0x31a1b7 = global.aquaparkPaths;
  return _0x31a1b7 && _0x31a1b7[_0x46d021 + 1] || null;
}
function createColshapes() {
  if (!aquaparkAreaColshape) {
    aquaparkAreaColshape = mp.colshapes.newSphere(AQUAPARK_AREA.x, AQUAPARK_AREA.y, AQUAPARK_AREA.z, 150, 0);
    aquaparkAreaColshape.aquaparkArea = true;
    slideColshapes = SLIDE_DEFS.map(_0x5ae7b2 => {
      const _0x526072 = mp.colshapes.newSphere(_0x5ae7b2.coords.x, _0x5ae7b2.coords.y, _0x5ae7b2.coords.z, 2, 0);
      _0x526072.aquaparkSlideIndex = _0x5ae7b2.index;
      return _0x526072;
    });
  }
}
function destroyColshapes() {
  if (aquaparkAreaColshape) {
    aquaparkAreaColshape.destroy();
    aquaparkAreaColshape = null;
  }
  for (const _0x654a69 of slideColshapes) {
    if (_0x654a69) {
      _0x654a69.destroy();
    }
  }
  slideColshapes = [];
}
function destroySemaphores() {
  for (const _0x5ccef8 of slideRuntime) {
    if (_0x5ccef8.handlerOn && mp.objects.exists(_0x5ccef8.handlerOn)) {
      _0x5ccef8.handlerOn.destroy();
    }
    if (_0x5ccef8.handlerOff && mp.objects.exists(_0x5ccef8.handlerOff)) {
      _0x5ccef8.handlerOff.destroy();
    }
    _0x5ccef8.handlerOn = null;
    _0x5ccef8.handlerOff = null;
  }
}
function ensureSemaphores() {
  for (let _0x54344c = 0; _0x54344c < SLIDE_DEFS.length; _0x54344c++) {
    const _0x254105 = SLIDE_DEFS[_0x54344c];
    const _0x36cc1c = slideRuntime[_0x54344c];
    if (!(mp.Vector3.Distance(localplayer.position, _0x254105.lightCoords) > 200)) {
      if (!_0x36cc1c.handlerOn || !mp.objects.exists(_0x36cc1c.handlerOn)) {
        loadModel(SEMAFOR_ON_HASH);
        if (mp.game.streaming.hasModelLoaded(SEMAFOR_ON_HASH)) {
          _0x36cc1c.handlerOn = mp.objects.new(SEMAFOR_ON_HASH, _0x254105.lightCoords, {
            rotation: _0x254105.lightRotation,
            dimension: 0
          });
          if (_0x36cc1c.handlerOn) {
            _0x36cc1c.handlerOn.setInvincible(true);
            _0x36cc1c.handlerOn.freezePosition(true);
          }
        }
      }
      if (!_0x36cc1c.handlerOff || !mp.objects.exists(_0x36cc1c.handlerOff)) {
        loadModel(SEMAFOR_OFF_HASH);
        if (mp.game.streaming.hasModelLoaded(SEMAFOR_OFF_HASH)) {
          _0x36cc1c.handlerOff = mp.objects.new(SEMAFOR_OFF_HASH, _0x254105.lightCoords, {
            rotation: _0x254105.lightRotation,
            dimension: 0
          });
          if (_0x36cc1c.handlerOff) {
            _0x36cc1c.handlerOff.setInvincible(true);
            _0x36cc1c.handlerOff.freezePosition(true);
          }
        }
      }
      try {
        if (_0x36cc1c.handlerOn && mp.objects.exists(_0x36cc1c.handlerOn)) {
          _0x36cc1c.handlerOn.setVisible(!_0x36cc1c.using, false);
        }
        if (_0x36cc1c.handlerOff && mp.objects.exists(_0x36cc1c.handlerOff)) {
          _0x36cc1c.handlerOff.setVisible(_0x36cc1c.using, false);
        }
      } catch (_0x4ac890) {}
    }
  }
}
let semaphoreInterval = null;
function startSemaphoreThread() {
  semaphoreInterval ||= setInterval(() => {
    if (aquaparkInArea) {
      try {
        ensureSemaphores();
      } catch (_0x3b1fa6) {}
    }
  }, 1500);
}
function stopSemaphoreThread() {
  if (semaphoreInterval) {
    clearInterval(semaphoreInterval);
    semaphoreInterval = null;
  }
  destroySemaphores();
}
let turnstileInterval = null;
function applyTurnstileLockState() {
  if (mp.Vector3.Distance(localplayer.position, TURNSTILE_POS) > 30) {
    return;
  }
  const _0x496f95 = mp.game.object.getClosestObjectOfType(TURNSTILE_POS.x, TURNSTILE_POS.y, TURNSTILE_POS.z, 2, TURNSTILE_HASH, false, false, false);
  if (_0x496f95 && _0x496f95 !== 0) {
    try {
      mp.game.invoke("0x428CA6DBD1094446", _0x496f95, isTurnstileLocked);
    } catch (_0x204d4d) {}
  }
}
function startTurnstileThread() {
  turnstileInterval ||= setInterval(() => {
    if (aquaparkInArea) {
      try {
        applyTurnstileLockState();
      } catch (_0x3db446) {}
    }
  }, 750);
}
function stopTurnstileThread() {
  if (turnstileInterval) {
    clearInterval(turnstileInterval);
    turnstileInterval = null;
  }
}
function activateAquapark() {
  if (!aquaparkInArea) {
    aquaparkInArea = true;
    aquaparkLog("Activated");
    mp.events.callRemote("Server_Aquapark_RequestSync");
    startSemaphoreThread();
    startTurnstileThread();
  }
}
function deactivateAquapark() {
  if (aquaparkInArea) {
    aquaparkInArea = false;
    aquaparkLog("Deactivated");
    nearestSlideIndex = null;
    stopSemaphoreThread();
    stopTurnstileThread();
    stopAllRemoteRides();
    pendingRemoteRides.clear();
  }
}
function tryShowHint(_0x52cb09) {
  if (typeof HintShow == "function") {
    HintShow(_0x52cb09, 5000);
  }
}
function tryUseSlide() {
  if (!loggedin || chatActive || GlobalCheck() || aquaparkSliding) {
    return;
  }
  if (!aquaparkInArea || nearestSlideIndex === null) {
    return;
  }
  if (slideRuntime[nearestSlideIndex].using) {
    return;
  }
  const _0x228ffc = SLIDE_DEFS[nearestSlideIndex];
  if (!(mp.Vector3.Distance(localplayer.position, _0x228ffc.coords) > 3)) {
    mp.events.callRemote("Server_Aquapark_UseSlide", nearestSlideIndex);
  }
}
function eKeyHandler() {
  if (aquaparkInArea && nearestSlideIndex !== null) {
    tryUseSlide();
  }
}
mp.events.add("Client_Aquapark_SyncStates", (_0x394e3d, _0x42471b) => {
  if (Array.isArray(_0x394e3d)) {
    for (let _0x280ff3 = 0; _0x280ff3 < _0x394e3d.length && _0x280ff3 < slideRuntime.length; _0x280ff3++) {
      slideRuntime[_0x280ff3].using = !!_0x394e3d[_0x280ff3];
    }
  }
  if (Array.isArray(_0x42471b) && aquaparkInArea) {
    const _0x3c5780 = new Set();
    for (const _0x3703f8 of _0x42471b) {
      if (_0x3703f8 && typeof _0x3703f8.remoteId == "number" && _0x3703f8.remoteId !== localplayer.remoteId) {
        _0x3c5780.add(_0x3703f8.remoteId);
        scheduleRemoteRide(_0x3703f8.remoteId, _0x3703f8.slideIndex, _0x3703f8.elapsedMs || 0);
      }
    }
    for (const _0x129bc2 of Array.from(remoteRides.keys())) {
      if (!_0x3c5780.has(_0x129bc2)) {
        stopRemoteRide(_0x129bc2);
      }
    }
    for (const _0x3bb96d of Array.from(pendingRemoteRides.keys())) {
      if (!_0x3c5780.has(_0x3bb96d)) {
        pendingRemoteRides.delete(_0x3bb96d);
      }
    }
  }
});
mp.events.add("Client_Aquapark_SlideUsing", (_0x33863e, _0x2b0c83) => {
  if (!(_0x33863e < 0) && !(_0x33863e >= slideRuntime.length)) {
    slideRuntime[_0x33863e].using = !!_0x2b0c83;
  }
});
mp.events.add("Client_Aquapark_TurnstileLock", _0x51baec => {
  isTurnstileLocked = !!_0x51baec;
  try {
    applyTurnstileLockState();
  } catch (_0x27dd40) {}
});
mp.events.add("Client_Aquapark_RemoteRideStart", (_0x4eb7c3, _0x15ba98) => {
  if (typeof _0x4eb7c3 == "number" && typeof _0x15ba98 == "number" && _0x4eb7c3 !== localplayer.remoteId && aquaparkInArea) {
    scheduleRemoteRide(_0x4eb7c3, _0x15ba98, 0);
  }
});
mp.events.add("Client_Aquapark_RemoteRideFinish", _0x42d1cb => {
  if (typeof _0x42d1cb == "number") {
    pendingRemoteRides.delete(_0x42d1cb);
    stopRemoteRide(_0x42d1cb);
  }
});
mp.events.add("playerEnterColshape", _0x149339 => {
  if (_0x149339 && mp.colshapes.exists(_0x149339)) {
    if (_0x149339.aquaparkArea) {
      activateAquapark();
    } else if (typeof _0x149339.aquaparkSlideIndex == "number") {
      nearestSlideIndex = _0x149339.aquaparkSlideIndex;
      showHudInteraction(true);
    }
  }
});
mp.events.add("playerExitColshape", _0x23d09c => {
  if (_0x23d09c && mp.colshapes.exists(_0x23d09c)) {
    if (_0x23d09c.aquaparkArea) {
      deactivateAquapark();
    } else if (typeof _0x23d09c.aquaparkSlideIndex == "number" && nearestSlideIndex === _0x23d09c.aquaparkSlideIndex) {
      nearestSlideIndex = null;
      showHudInteraction(false);
    }
  }
});
mp.keys.bind(69, false, eKeyHandler);
let activeRideObject = null;
let activeRideInterval = null;
let activeRideAnimDict = null;
let activeRideStartTimeMs = 0;
function startRide(_0x3b7258, _0x4fcf57, _0x21e0be, _0x972bb5, _0x4989cc) {
  try {
    localplayer.freezePosition(true);
  } catch (_0x2539c0) {}
  loadModel(RIDE_PROP_HASH);
  let _0x2dd911 = 0;
  const _0x3f02d8 = setInterval(() => {
    _0x2dd911++;
    if (mp.game.streaming.hasModelLoaded(RIDE_PROP_HASH) || _0x2dd911 > 100) {
      clearInterval(_0x3f02d8);
      spawnRideObject(_0x3b7258, _0x4fcf57, _0x21e0be, _0x972bb5, _0x4989cc);
    }
  }, 50);
}
function spawnRideObject(_0x4a2f21, _0x1083f5, _0x25154f, _0xd149b1, _0x1eb202) {
  const _0x3144b0 = _0x25154f[0];
  const _0x231756 = new mp.Vector3(_0x3144b0[0], _0x3144b0[1], _0x3144b0[2]);
  activeRideObject = mp.objects.new(RIDE_PROP_HASH, _0x231756, {
    dimension: 0
  });
  if (!activeRideObject) {
    finishRide();
    return;
  }
  activeRideAnimDict = _0xd149b1;
  let _0x261c1b = 0;
  const _0x27aa96 = setInterval(() => {
    _0x261c1b++;
    if (!aquaparkSliding) {
      clearInterval(_0x27aa96);
      return;
    }
    if (!activeRideObject || !mp.objects.exists(activeRideObject)) {
      clearInterval(_0x27aa96);
      finishRide();
      return;
    }
    const _0x515891 = activeRideObject.handle;
    if (_0x515891 && _0x515891 !== 0) {
      clearInterval(_0x27aa96);
      beginRide(_0x4a2f21, _0x1083f5, _0x25154f, _0xd149b1, _0x1eb202, _0x515891);
    } else if (_0x261c1b > 100) {
      clearInterval(_0x27aa96);
      aquaparkLog("Object handle not ready in time");
      finishRide();
    }
  }, 50);
}
function beginRide(_0x32fcb5, _0x2c6b09, _0x5601da, _0x5baad1, _0x57b9be, _0x13a60f) {
  const _0x3ca557 = _0x5601da[0];
  try {
    activeRideObject.setInvincible(true);
    activeRideObject.setVisible(false, false);
    activeRideObject.setCollision(false, false);
  } catch (_0x14b2d7) {
    aquaparkLog("Object setup error", _0x14b2d7);
  }
  try {
    activeRideObject.setCoordsNoOffset(_0x3ca557[0], _0x3ca557[1], _0x3ca557[2], true, false, false);
    mp.game.invoke("0x77B21BE7AC540F07", _0x13a60f, _0x3ca557[3], _0x3ca557[4], _0x3ca557[5], _0x3ca557[6]);
  } catch (_0x416622) {}
  try {
    localplayer.detach(false, false);
  } catch (_0x48a352) {}
  try {
    localplayer.setCoordsNoOffset(_0x3ca557[0], _0x3ca557[1], _0x3ca557[2] + 0.8, false, false, false);
  } catch (_0x3004be) {}
  try {
    localplayer.attachTo(_0x13a60f, 0, 0, 0, 0.8, 0, 0, 0, false, false, false, false, 2, true);
  } catch (_0xf4772b) {
    aquaparkLog("Attach error", _0xf4772b);
  }
  if (_0x5baad1) {
    try {
      localplayer.taskPlayAnim(_0x5baad1, _0x57b9be, 8, -8, -1, 1, 0, false, false, false);
    } catch (_0x5b6671) {
      aquaparkLog("Anim error", _0x5b6671);
    }
  }
  setTimeout(() => {
    if (aquaparkSliding) {
      if (activeRideObject && mp.objects.exists(activeRideObject)) {
        if (activeRideObject.handle && activeRideObject.handle !== 0) {
          try {
            localplayer.attachTo(activeRideObject.handle, 0, 0, 0, 0.8, 0, 0, 0, false, false, false, false, 2, true);
          } catch (_0x226975) {}
        }
        runPathInterpolation(_0x32fcb5, _0x2c6b09, _0x5601da);
      } else {
        finishRide();
      }
    }
  }, 200);
}
function computePathIndex(_0x3b339c) {
  return _0x3b339c / 16 * 1.6;
}
function runPathInterpolation(_0x4d528b, _0x3d6067, _0x2d1810) {
  const _0x1293b4 = _0x2d1810.length;
  if (activeRideInterval) {
    clearInterval(activeRideInterval);
  }
  activeRideInterval = setInterval(() => {
    if (!activeRideObject || !mp.objects.exists(activeRideObject)) {
      finishRide();
      return;
    }
    const _0x45d039 = computePathIndex(Date.now() - activeRideStartTimeMs);
    const _0x10875d = Math.floor(_0x45d039);
    if (_0x10875d >= _0x1293b4) {
      const _0x4fc216 = _0x2d1810[_0x1293b4 - 1];
      try {
        activeRideObject.setCoordsNoOffset(_0x4fc216[0], _0x4fc216[1], _0x4fc216[2], true, false, false);
        mp.game.invoke("0x77B21BE7AC540F07", activeRideObject.handle, _0x4fc216[3], _0x4fc216[4], _0x4fc216[5], _0x4fc216[6]);
      } catch (_0x5b18c9) {}
      finishRide();
      return;
    }
    const _0x1e618e = _0x2d1810[_0x10875d];
    try {
      activeRideObject.setCoordsNoOffset(_0x1e618e[0], _0x1e618e[1], _0x1e618e[2], true, false, false);
      mp.game.invoke("0x77B21BE7AC540F07", activeRideObject.handle, _0x1e618e[3], _0x1e618e[4], _0x1e618e[5], _0x1e618e[6]);
    } catch (_0x153208) {
      aquaparkLog("Path tick error", _0x153208);
    }
  }, 16);
}
function finishRide() {
  if (activeRideInterval) {
    clearInterval(activeRideInterval);
    activeRideInterval = null;
  }
  try {
    localplayer.freezePosition(false);
  } catch (_0x1a7b0d) {}
  try {
    localplayer.detach(false, false);
  } catch (_0x44842e) {}
  try {
    localplayer.clearTasks();
  } catch (_0x5b689f) {}
  if (activeRideObject && mp.objects.exists(activeRideObject)) {
    try {
      activeRideObject.destroy();
    } catch (_0x449e64) {}
  }
  activeRideObject = null;
  activeRideAnimDict = null;
  activeRideStartTimeMs = 0;
  const _0x4e962a = aquaparkSliding;
  aquaparkSliding = false;
  if (_0x4e962a) {
    try {
      mp.events.callRemote("Server_Aquapark_RideFinished");
    } catch (_0x473d9f) {}
  }
}
function scheduleRemoteRide(_0xc8e9cb, _0x247e11, _0x3aad7d) {
  if (_0x247e11 < 0 || _0x247e11 >= SLIDE_DEFS.length) {
    return;
  }
  if (remoteRides.has(_0xc8e9cb)) {
    return;
  }
  const _0x49eef1 = Date.now() - (_0x3aad7d || 0);
  const _0x5cf34e = mp.players.atRemoteId(_0xc8e9cb);
  if (_0x5cf34e && mp.players.exists(_0x5cf34e) && _0x5cf34e.handle !== 0) {
    pendingRemoteRides.delete(_0xc8e9cb);
    startRemoteRide(_0x5cf34e, _0xc8e9cb, _0x247e11, _0x49eef1);
  } else {
    pendingRemoteRides.set(_0xc8e9cb, {
      slideIndex: _0x247e11,
      startTimeMs: _0x49eef1
    });
  }
}
function startRemoteRide(_0x58408e, _0x349662, _0x9c495, _0x295177) {
  const _0x5a01e5 = getSlidePath(_0x9c495);
  if (!_0x5a01e5 || !_0x5a01e5.length) {
    return;
  }
  const _0x3beb80 = {
    remoteId: _0x349662,
    slideIndex: _0x9c495,
    path: _0x5a01e5,
    def: SLIDE_DEFS[_0x9c495],
    startTimeMs: _0x295177,
    rideObject: null,
    interval: null,
    attached: false,
    animPlayed: false,
    animLastReplayMs: 0,
    finished: false,
    modelWaitInterval: null,
    handleWaitInterval: null,
    animDict: null
  };
  remoteRides.set(_0x349662, _0x3beb80);
  loadAnimDictAsync(FALLBACK_ANIM_DICT, _0x95b83a => {
    if (!_0x3beb80.finished) {
      _0x3beb80.animDict = _0x95b83a ? FALLBACK_ANIM_DICT : null;
    }
  });
  loadModel(RIDE_PROP_HASH);
  let _0x50cf2b = 0;
  _0x3beb80.modelWaitInterval = setInterval(() => {
    _0x50cf2b++;
    if (_0x3beb80.finished) {
      clearInterval(_0x3beb80.modelWaitInterval);
      _0x3beb80.modelWaitInterval = null;
      return;
    }
    if (mp.game.streaming.hasModelLoaded(RIDE_PROP_HASH) || _0x50cf2b > 100) {
      clearInterval(_0x3beb80.modelWaitInterval);
      _0x3beb80.modelWaitInterval = null;
      spawnRemoteRideObject(_0x3beb80);
    }
  }, 50);
}
function spawnRemoteRideObject(_0x1afc80) {
  if (_0x1afc80.finished) {
    return;
  }
  const _0x925bff = _0x1afc80.path[0];
  const _0x3d3fe6 = new mp.Vector3(_0x925bff[0], _0x925bff[1], _0x925bff[2]);
  _0x1afc80.rideObject = mp.objects.new(RIDE_PROP_HASH, _0x3d3fe6, {
    dimension: 0
  });
  if (!_0x1afc80.rideObject) {
    stopRemoteRide(_0x1afc80.remoteId);
    return;
  }
  let _0x797fa0 = 0;
  _0x1afc80.handleWaitInterval = setInterval(() => {
    _0x797fa0++;
    if (_0x1afc80.finished) {
      clearInterval(_0x1afc80.handleWaitInterval);
      _0x1afc80.handleWaitInterval = null;
      return;
    }
    if (!_0x1afc80.rideObject || !mp.objects.exists(_0x1afc80.rideObject)) {
      clearInterval(_0x1afc80.handleWaitInterval);
      _0x1afc80.handleWaitInterval = null;
      stopRemoteRide(_0x1afc80.remoteId);
      return;
    }
    const _0x54f88a = _0x1afc80.rideObject.handle;
    if (_0x54f88a && _0x54f88a !== 0) {
      clearInterval(_0x1afc80.handleWaitInterval);
      _0x1afc80.handleWaitInterval = null;
      beginRemoteRide(_0x1afc80, _0x54f88a);
    } else if (_0x797fa0 > 100) {
      clearInterval(_0x1afc80.handleWaitInterval);
      _0x1afc80.handleWaitInterval = null;
      stopRemoteRide(_0x1afc80.remoteId);
    }
  }, 50);
}
function attachRemotePlayerToRideObject(_0x4a9c2c) {
  const _0x347d71 = mp.players.atRemoteId(_0x4a9c2c.remoteId);
  if (!_0x347d71 || !mp.players.exists(_0x347d71) || _0x347d71.handle === 0) {
    return false;
  }
  if (!_0x4a9c2c.rideObject || !mp.objects.exists(_0x4a9c2c.rideObject)) {
    return false;
  }
  const _0x625762 = _0x4a9c2c.rideObject.handle;
  if (!_0x625762 || _0x625762 === 0) {
    return false;
  }
  try {
    _0x347d71.attachTo(_0x625762, 0, 0, 0, 0.8, 0, 0, 0, false, false, false, false, 2, true);
  } catch (_0x612644) {
    aquaparkLog("Remote attach error", _0x612644);
    return false;
  }
  _0x4a9c2c.attached = true;
  tryPlayRemoteAnim(_0x4a9c2c);
  return true;
}
function tryPlayRemoteAnim(_0x49eb84) {
  if (!_0x49eb84.animDict) {
    return false;
  }
  const _0x2fd4bd = mp.players.atRemoteId(_0x49eb84.remoteId);
  if (!_0x2fd4bd || !mp.players.exists(_0x2fd4bd) || _0x2fd4bd.handle === 0) {
    return false;
  }
  let _0x4b94a9 = false;
  try {
    _0x4b94a9 = !!mp.game.invoke("0x1F0B79228E461EC9", _0x2fd4bd.handle, _0x49eb84.animDict, FALLBACK_ANIM_NAME, 3);
  } catch (_0x2bb90f) {}
  if (_0x4b94a9) {
    _0x49eb84.animPlayed = true;
    return false;
  }
  try {
    _0x2fd4bd.taskPlayAnim(_0x49eb84.animDict, FALLBACK_ANIM_NAME, 8, -8, -1, 1, 0, false, false, false);
    _0x49eb84.animPlayed = true;
    _0x49eb84.animLastReplayMs = Date.now();
    return true;
  } catch (_0x9a9531) {
    return false;
  }
}
function beginRemoteRide(_0xaaefd5, _0x272979) {
  const _0x4fd828 = _0xaaefd5.path[0];
  try {
    _0xaaefd5.rideObject.setInvincible(true);
    _0xaaefd5.rideObject.setVisible(false, false);
    _0xaaefd5.rideObject.setCollision(false, false);
  } catch (_0x1ad3f8) {}
  try {
    _0xaaefd5.rideObject.setCoordsNoOffset(_0x4fd828[0], _0x4fd828[1], _0x4fd828[2], true, false, false);
    mp.game.invoke("0x77B21BE7AC540F07", _0x272979, _0x4fd828[3], _0x4fd828[4], _0x4fd828[5], _0x4fd828[6]);
  } catch (_0x12fbfe) {}
  attachRemotePlayerToRideObject(_0xaaefd5);
  setTimeout(() => {
    if (!_0xaaefd5.finished) {
      if (_0xaaefd5.rideObject && mp.objects.exists(_0xaaefd5.rideObject)) {
        if (!_0xaaefd5.attached) {
          attachRemotePlayerToRideObject(_0xaaefd5);
        }
        runRemoteRidePathInterpolation(_0xaaefd5);
      } else {
        stopRemoteRide(_0xaaefd5.remoteId);
      }
    }
  }, 200);
}
function runRemoteRidePathInterpolation(_0x5ab443) {
  const _0x35c689 = _0x5ab443.path.length;
  if (_0x5ab443.interval) {
    clearInterval(_0x5ab443.interval);
  }
  _0x5ab443.interval = setInterval(() => {
    if (_0x5ab443.finished) {
      clearInterval(_0x5ab443.interval);
      _0x5ab443.interval = null;
      return;
    }
    if (!_0x5ab443.rideObject || !mp.objects.exists(_0x5ab443.rideObject)) {
      stopRemoteRide(_0x5ab443.remoteId);
      return;
    }
    const _0x24f9b3 = computePathIndex(Date.now() - _0x5ab443.startTimeMs);
    const _0x2fddde = Math.floor(_0x24f9b3);
    if (_0x2fddde >= _0x35c689) {
      const _0x36d6b6 = _0x5ab443.path[_0x35c689 - 1];
      try {
        _0x5ab443.rideObject.setCoordsNoOffset(_0x36d6b6[0], _0x36d6b6[1], _0x36d6b6[2], true, false, false);
        mp.game.invoke("0x77B21BE7AC540F07", _0x5ab443.rideObject.handle, _0x36d6b6[3], _0x36d6b6[4], _0x36d6b6[5], _0x36d6b6[6]);
      } catch (_0x11115b) {}
      stopRemoteRide(_0x5ab443.remoteId);
      return;
    }
    const _0x1201c8 = _0x5ab443.path[_0x2fddde];
    try {
      _0x5ab443.rideObject.setCoordsNoOffset(_0x1201c8[0], _0x1201c8[1], _0x1201c8[2], true, false, false);
      mp.game.invoke("0x77B21BE7AC540F07", _0x5ab443.rideObject.handle, _0x1201c8[3], _0x1201c8[4], _0x1201c8[5], _0x1201c8[6]);
    } catch (_0x4978c3) {}
    enforceRemoteRiderBinding(_0x5ab443, _0x1201c8);
  }, 16);
}
function enforceRemoteRiderBinding(_0x103dae, _0x10b7ce) {
  const _0x594878 = mp.players.atRemoteId(_0x103dae.remoteId);
  if (!_0x594878 || !mp.players.exists(_0x594878) || _0x594878.handle === 0) {
    return;
  }
  if (!_0x103dae.rideObject || !mp.objects.exists(_0x103dae.rideObject)) {
    return;
  }
  const _0x552c22 = _0x103dae.rideObject.handle;
  if (_0x552c22 && _0x552c22 !== 0) {
    try {
      _0x594878.attachTo(_0x552c22, 0, 0, 0, 0.8, 0, 0, 0, false, false, false, false, 2, true);
      _0x103dae.attached = true;
    } catch (_0x365e8a) {}
    if (_0x10b7ce) {
      try {
        _0x594878.setCoordsNoOffset(_0x10b7ce[0], _0x10b7ce[1], _0x10b7ce[2] + 0.8, false, false, false);
      } catch (_0x31dcba) {}
    }
    if (_0x103dae.animDict) {
      tryPlayRemoteAnim(_0x103dae);
    }
  }
}
function stopRemoteRide(_0x126e9c) {
  const _0x3eac93 = remoteRides.get(_0x126e9c);
  if (!_0x3eac93) {
    return;
  }
  _0x3eac93.finished = true;
  if (_0x3eac93.modelWaitInterval) {
    clearInterval(_0x3eac93.modelWaitInterval);
    _0x3eac93.modelWaitInterval = null;
  }
  if (_0x3eac93.handleWaitInterval) {
    clearInterval(_0x3eac93.handleWaitInterval);
    _0x3eac93.handleWaitInterval = null;
  }
  if (_0x3eac93.interval) {
    clearInterval(_0x3eac93.interval);
    _0x3eac93.interval = null;
  }
  const _0x237829 = mp.players.atRemoteId(_0x126e9c);
  if (_0x237829 && mp.players.exists(_0x237829) && _0x237829.handle !== 0) {
    try {
      _0x237829.detach(false, false);
    } catch (_0x51ac7e) {}
    try {
      _0x237829.clearTasks();
    } catch (_0x1a6c82) {}
  }
  if (_0x3eac93.rideObject && mp.objects.exists(_0x3eac93.rideObject)) {
    try {
      _0x3eac93.rideObject.destroy();
    } catch (_0x5ef22f) {}
  }
  _0x3eac93.rideObject = null;
  remoteRides.delete(_0x126e9c);
}
function stopAllRemoteRides() {
  for (const _0x2b5c34 of Array.from(remoteRides.keys())) {
    stopRemoteRide(_0x2b5c34);
  }
}
function initAquapark() {
  if (!isAquaparkInitialized) {
    isAquaparkInitialized = true;
    try {
      createColshapes();
      aquaparkLog("Initialized");
    } catch (_0x10d36f) {
      aquaparkLog("Init error", _0x10d36f);
    }
  }
}
mp.events.add("Client_Aquapark_StartRide", _0x410830 => {
  if (aquaparkSliding) {
    return;
  }
  if (_0x410830 < 0 || _0x410830 >= SLIDE_DEFS.length) {
    return;
  }
  const _0x481f8f = SLIDE_DEFS[_0x410830];
  if (mp.Vector3.Distance(localplayer.position, _0x481f8f.coords) > 10) {
    return;
  }
  const _0xa56408 = getSlidePath(_0x410830);
  if (_0xa56408 && _0xa56408.length) {
    aquaparkSliding = true;
    activeRideStartTimeMs = Date.now();
    loadAnimDictAsync(FALLBACK_ANIM_DICT, _0x493c9e => {
      startRide(_0x410830, _0x481f8f, _0xa56408, _0x493c9e ? FALLBACK_ANIM_DICT : null, FALLBACK_ANIM_NAME);
    });
  } else {
    aquaparkLog("No path data for slide", _0x410830);
  }
});
mp.events.add("render", () => {
  if (aquaparkSliding) {
    try {
      mp.game.controls.disableControlAction(0, 22, true);
      mp.game.controls.disableControlAction(0, 23, true);
      mp.game.controls.disableControlAction(0, 24, true);
      mp.game.controls.disableControlAction(0, 25, true);
      mp.game.controls.disableControlAction(0, 30, true);
      mp.game.controls.disableControlAction(0, 31, true);
      mp.game.controls.disableControlAction(0, 36, true);
      mp.game.controls.disableControlAction(0, 44, true);
      mp.game.controls.disableControlAction(0, 47, true);
      mp.game.controls.disableControlAction(0, 140, true);
      mp.game.controls.disableControlAction(0, 142, true);
      mp.game.controls.disableControlAction(0, 257, true);
    } catch (_0x481c45) {}
  }
});
mp.events.add("entityStreamIn", _0x53c53c => {
  if (!_0x53c53c || _0x53c53c.type !== "player") {
    return;
  }
  if (!aquaparkInArea) {
    return;
  }
  if (_0x53c53c.remoteId === localplayer.remoteId) {
    return;
  }
  const _0x38c98c = pendingRemoteRides.get(_0x53c53c.remoteId);
  if (_0x38c98c) {
    pendingRemoteRides.delete(_0x53c53c.remoteId);
    if (!remoteRides.has(_0x53c53c.remoteId)) {
      startRemoteRide(_0x53c53c, _0x53c53c.remoteId, _0x38c98c.slideIndex, _0x38c98c.startTimeMs);
    }
  }
});
mp.events.add("entityStreamOut", _0x4e94bb => {
  if (!_0x4e94bb || _0x4e94bb.type !== "player") {
    return;
  }
  const _0x3b05c0 = _0x4e94bb.remoteId;
  if (typeof _0x3b05c0 == "number" && remoteRides.has(_0x3b05c0)) {
    const _0x191c20 = remoteRides.get(_0x3b05c0);
    pendingRemoteRides.set(_0x3b05c0, {
      slideIndex: _0x191c20.slideIndex,
      startTimeMs: _0x191c20.startTimeMs
    });
    stopRemoteRide(_0x3b05c0);
  }
});
initAquapark();
mp.events.add("Client_Aquapark_Init", () => {
  initAquapark();
});
const SAND_MATERIALS = new Set([2699818980, 510490462, 909950165, 2387446527, 3158909604, 509508168, 1288448767].map(_0x3e3b4b => _0x3e3b4b >>> 0));
const GroundMaterial = {
  groundCapsuleRadius: 0.25,
  getMaterialUnderPlayer(_0x1c2b42 = mp.players.local) {
    const _0xefba0b = _0x1c2b42.position;
    const _0x3c8fcd = new mp.Vector3(_0xefba0b.x, _0xefba0b.y, _0xefba0b.z + 0.5);
    const _0x41c124 = new mp.Vector3(_0xefba0b.x, _0xefba0b.y, _0xefba0b.z - 3);
    const _0x3f2d1b = mp.raycasting.testCapsule(_0x3c8fcd, _0x41c124, this.groundCapsuleRadius, _0x1c2b42, 1);
    if (_0x3f2d1b) {
      if (_0x3f2d1b.material === undefined || _0x3f2d1b.material === null) {
        return null;
      } else {
        return _0x3f2d1b.material >>> 0;
      }
    } else {
      return null;
    }
  },
  isPlayerOnSand(_0x24a1de = mp.players.local) {
    const _0x21f336 = this.getMaterialUnderPlayer(_0x24a1de);
    return _0x21f336 !== null && SAND_MATERIALS.has(_0x21f336);
  }
};