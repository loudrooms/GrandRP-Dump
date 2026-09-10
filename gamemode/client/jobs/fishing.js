global.isLocalFishing = false;
global.inFishMinigame = false;
const fishingPlayers = new Map();
let rodRope = null;
const ROPE_VISIBILITY_DISTANCE = 10;
const CONFIG = Object.freeze({
  rodObjectData: {
    Bone: 36029,
    Model: "prop_fishing_rod_01",
    PosOffset1: 0.05,
    PosOffset2: 0,
    PosOffset3: 0.05,
    RotOffset1: 90,
    RotOffset2: -90,
    RotOffset3: 120
  },
  startAnimDict: "amb@world_human_stand_fishing@idle_a",
  startAnimName: "idle_a",
  animDict: "amb@world_human_stand_fishing@idle_a",
  animName: "idle_c",
  fishList: [{
    name: "Окунь",
    model: "a_c_fish"
  }, {
    name: "Карп",
    model: "a_c_fish"
  }, {
    name: "Форель",
    model: "a_c_fish"
  }, {
    name: "Лосось",
    model: "a_c_fish"
  }, {
    name: "Скат",
    model: "a_c_stingray"
  }, {
    name: "Косатка",
    model: "a_c_killerwhale"
  }, {
    name: "Мегалодон",
    model: "a_c_sharktiger"
  }, {
    name: "Горбатый кит",
    model: "a_c_humpback"
  }],
  fishingRods: [{
    name: "Удочка 1",
    item_id: 1723,
    model: "prop_fishing_rod_01",
    level: 1
  }, {
    name: "Удочка 2",
    item_id: 1724,
    model: "prop_fishing_rod_01",
    level: 2
  }, {
    name: "Удочка 3",
    item_id: 1725,
    model: "prop_fishing_rod_01",
    level: 3
  }, {
    name: "Удочка 4",
    item_id: 7089,
    model: "prop_fishing_rod_01",
    level: 4
  }, {
    name: "Удочка 5",
    item_id: 7090,
    model: "prop_fishing_rod_01",
    level: 5
  }]
});
mp.events.add("Client_FishingTryToStart", (_0x6f3bc5, _0x3d7f9a) => {
  if (isLocalFishing) {
    return ShowNotification(language["Вы уже рыбачите"][curr_lang], 2);
  }
  if (localplayer.isFalling() || localplayer.isReloading() || localplayer.getConfigFlag(78, true) || localplayer.getConfigFlag(388, true) || localplayer.isRagdoll() || !localplayer.isOnFoot() || localplayer.isInAir()) {
    return ShowNotification(language["Вы не можете рыбачить здесь"][curr_lang], 2);
  }
  if (localplayer.getSpeed() > 5) {
    return ShowNotification(language["Вы не можете рыбачить сейчас"][curr_lang], 2);
  }
  const _0x42215b = tryToStartFishing();
  if (_0x42215b == null) {
    return ShowNotification(language["Вы не можете рыбачить здесь"][curr_lang], 2);
  }
  if (_0x42215b === false) {
    return;
  }
  let _0x2cbc52 = false;
  if (fishingEventType != null) {
    _0x2cbc52 = isPositionInFishingEventZone(localplayer.position);
  }
  CloseInv();
  mp.events.callRemote("Server_FishingTryToStart", _0x6f3bc5, _0x3d7f9a, _0x42215b, _0x2cbc52);
});
const tryToStartFishing = () => {
  const _0x5921e5 = tryGetWaterRelativeToLocalPlayerYOffsetByRaycast(4);
  if (_0x5921e5 === null) {
    ShowNotification(language["Вы не можете рыбачить здесь"][curr_lang], 2);
    return false;
  }
  if (_0x5921e5 === undefined) {
    ShowNotification(language["Вода слишком мелкая"][curr_lang], 2);
    return false;
  }
  if (localplayer.vehicle || localplayer.isDead() || localplayer.isSprinting()) {
    ShowNotification(language["Вы не можете рыбачить сейчас"][curr_lang], 2);
    return false;
  }
  if (localplayer.isSwimming()) {
    ShowNotification(language["Вы находитесь в воде"][curr_lang], 2);
    return false;
  }
  const _0x23b702 = _0x5921e5.z - localplayer.position.z;
  if (_0x23b702 < -10) {
    ShowNotification(language["Вода находится слишком низко"][curr_lang], 2);
    return false;
  } else {
    return !(_0x23b702 >= 2) && _0x5921e5;
  }
};
function isPositionInFishingEventZone(_0x1d96e7) {
  if (!fishingEventType || fishingEventType === null) {
    return false;
  }
  const _0x234e17 = eventLocations[fishingEventType][fishingEventIndex];
  if (!_0x234e17 || !_0x234e17.position) {
    return false;
  }
  return mp.Vector3.Distance2D(_0x1d96e7, _0x234e17.position) <= _0x234e17.radius;
}
function tryGetWaterRelativeToLocalPlayerYOffsetByRaycast(_0x1d8ea1 = 5) {
  const _0x539e5c = mp.players.local.getOffsetFromInWorldCoords(0, _0x1d8ea1, 5);
  const _0x4da8d5 = mp.players.local.getOffsetFromInWorldCoords(0, _0x1d8ea1, -300);
  const _0x544e9a = mp.raycasting.testCapsule(_0x539e5c, _0x4da8d5, 0.1, mp.players.local, 1);
  if (!_0x544e9a) {
    return null;
  }
  if (typeof _0x544e9a.entity == "number" && _0x544e9a.entity !== 0 && mp.game.entity.isAnObject(_0x544e9a.entity)) {
    mp.game.shapetest.releaseScriptGuidFromEntity(_0x544e9a.entity);
  }
  if (!_0x544e9a || bannedMaterials.includes(_0x544e9a.material) || _0x544e9a.entity.type == "vehicle") {
    return null;
  }
  const _0x298e15 = mp.players.local.getBoneCoords(31086, 0, 0, 0);
  const _0x52b49d = mp.players.local.getOffsetFromInWorldCoords(0, 50, -25);
  const _0x584ef1 = mp.game.water.testProbeAgainstWater(_0x298e15.x, _0x298e15.y, _0x298e15.z, _0x52b49d.x, _0x52b49d.y, _0x52b49d.z);
  if (!_0x584ef1.hit) {
    return null;
  }
  const _0x1c8246 = _0x584ef1.position;
  if (Math.abs(_0x1c8246.z - _0x544e9a.position.z) < 0.6) {
    return null;
  } else {
    return new mp.Vector3(_0x1c8246.x, _0x1c8246.y, _0x1c8246.z);
  }
}
function isPositionInWater(_0x236b21, _0x9e958f = 0.6) {
  if (!_0x236b21) {
    return false;
  }
  const _0x3040e3 = mp.game.water.testVerticalProbeAgainstAllWater(_0x236b21.x, _0x236b21.y, _0x236b21.z + 10, 1, 1);
  if (!_0x3040e3) {
    return false;
  }
  const _0x256281 = new mp.Vector3(_0x236b21.x, _0x236b21.y, _0x236b21.z + 5);
  const _0x3ec981 = new mp.Vector3(_0x236b21.x, _0x236b21.y, _0x236b21.z - 25);
  const _0x1551e4 = mp.raycasting.testCapsule(_0x256281, _0x3ec981, 0.1, mp.players.local, 1);
  if (_0x1551e4 && typeof _0x1551e4.entity == "number" && _0x1551e4.entity !== 0 && mp.game.entity.isAnObject(_0x1551e4.entity)) {
    mp.game.shapetest.releaseScriptGuidFromEntity(_0x1551e4.entity);
  }
  if (!_0x1551e4 || bannedMaterials.includes(_0x1551e4.material)) {
    return _0x236b21.z < _0x3040e3;
  }
  return Math.abs(_0x3040e3 - _0x1551e4.position.z) >= _0x9e958f && _0x236b21.z < _0x3040e3;
}
global.tryToStartFishing = tryToStartFishing;
global.tryGetWaterRelativeToLocalPlayerYOffsetByRaycast = tryGetWaterRelativeToLocalPlayerYOffsetByRaycast;
global.isPositionInWater = isPositionInWater;
const bannedMaterials = [];
function startFishing(_0x406479, _0x9f7172 = null) {
  try {
    if (_0x406479.startFishing) {
      return;
    }
    if (_0x406479.vehicle || _0x406479.isDead() || _0x406479.isSprinting() || _0x406479.isSwimming()) {
      return;
    }
    const _0x24b2b6 = 1;
    _0x406479.startFishing = true;
    _0x406479.startFishingAt = Date.now();
    const _0xf75d32 = _0x406479.remoteId;
    if (_0xf75d32 == null) {
      return;
    }
    if (_0x406479 === localplayer) {
      disablePlayerHandle = true;
      isLocalFishing = true;
      inFishMinigame = true;
      main_browser.execute("APPS.state.fishingMiniGame.show = true;");
      bindFishingMouse();
    }
    _0x406479.freezePosition(true);
    play_animation2(_0x406479, CONFIG.startAnimDict, CONFIG.startAnimName, 8, -8, -1, 33, 0, false, false, false);
    createRodObject(_0x406479, _0x13951d => {
      if (!_0x13951d || !mp.objects.exists(_0x13951d)) {
        return;
      }
      if (!mp.players.exists(_0x406479)) {
        return clearAllFishingDataForId(_0x406479.remoteId);
      }
      const _0x284f2d = mp.Vector3.Distance(mp.players.local.position, _0x9f7172);
      RopeLoadTextures();
      rodRope = mp.game.rope.addRope(_0x406479.position.x, _0x406479.position.y, _0x406479.position.z, 0, 0, 0, _0x284f2d, 5, _0x284f2d, 0.5, 0.1, false, false, false, 0, false, 0);
      fishingPlayers.set(_0xf75d32, {
        object: _0x13951d,
        rope: rodRope,
        fishingSpot: _0x9f7172,
        fishDistance: _0x284f2d,
        stage: _0x24b2b6,
        isVisible: false,
        isTransitioning: false
      });
      _0x13951d.attachTo(_0x406479.handle, 62, CONFIG.rodObjectData.PosOffset1, CONFIG.rodObjectData.PosOffset2, CONFIG.rodObjectData.PosOffset3, CONFIG.rodObjectData.RotOffset1, CONFIG.rodObjectData.RotOffset2, CONFIG.rodObjectData.RotOffset3, true, false, false, false, 0, true);
      setTimeout(() => {
        if (!mp.players.exists(_0x406479)) {
          return clearAllFishingDataForId(_0x406479.remoteId);
        }
        attachRodRopeToPed(_0x406479.handle, _0x13951d, rodRope, _0x9f7172, _0x284f2d);
      }, 300);
      setTimeout(() => {
        if (!mp.players.exists(_0x406479)) {
          return;
        }
        const _0x4ee03d = fishingPlayers.get(_0xf75d32);
        if (_0x4ee03d && mp.objects.exists(_0x4ee03d.object)) {
          _0x4ee03d.object.attachTo(_0x406479.handle, 62, CONFIG.rodObjectData.PosOffset1, CONFIG.rodObjectData.PosOffset2, CONFIG.rodObjectData.PosOffset3, CONFIG.rodObjectData.RotOffset1, CONFIG.rodObjectData.RotOffset2, CONFIG.rodObjectData.RotOffset3, true, false, false, false, 0, true);
        }
      }, 1000);
    });
  } catch (_0x397c9e) {
    mp.console.logError("Error start fishing: " + _0x397c9e);
  }
}
mp.events.add("Client_FishingStart", (_0x48238a, _0x4db87a) => {
  const _0x142e68 = mp.players.atRemoteId(_0x48238a);
  if (!mp.players.exists(_0x142e68)) {
    return clearAllFishingDataForId(_0x48238a);
  }
  startFishing(_0x142e68, _0x4db87a);
});
mp.Vector3.Distance = function (_0x3edd6c, _0x483b3c) {
  return Math.abs(Math.sqrt(Math.pow(_0x483b3c.x - _0x3edd6c.x, 2) + Math.pow(_0x483b3c.y - _0x3edd6c.y, 2) + Math.pow(_0x483b3c.z - _0x3edd6c.z, 2)));
};
const attachRodRopeToPed = (_0x1237cd, _0x3f3e11, _0x4cd50c, _0x23b95a, _0x2394d7) => {
  if (!_0x4cd50c || !_0x23b95a) {
    return;
  }
  const _0x2f9f5b = _0x3f3e11.getOffsetFromInWorldCoords(0, 0, 2.5);
  mp.game.rope.attachEntitiesToRope(_0x4cd50c.result, _0x3f3e11.handle, _0x1237cd, _0x2f9f5b.x, _0x2f9f5b.y, _0x2f9f5b.z, _0x23b95a.x, _0x23b95a.y, _0x23b95a.z, _0x2394d7, false, false, 0, 0);
};
function hideFishingRope(_0xad9c65) {
  if (!_0xad9c65.ropeHidden && _0xad9c65.rope) {
    try {
      mp.game.rope.deleteRope(_0xad9c65.rope.result);
    } catch (_0x2ddfb8) {}
    _0xad9c65.ropeHidden = true;
  }
}
function showFishingRope(_0x30096c, _0x42cbc9) {
  if (_0x42cbc9.ropeHidden && _0x42cbc9.fishingSpot && mp.players.exists(_0x30096c) && _0x30096c.handle) {
    try {
      RopeLoadTextures();
      const _0x58e333 = mp.game.rope.addRope(_0x30096c.position.x, _0x30096c.position.y, _0x30096c.position.z, 0, 0, 0, _0x42cbc9.fishDistance, 5, _0x42cbc9.fishDistance, 0.5, 0.1, false, false, false, 0, false, 0);
      _0x42cbc9.rope = _0x58e333;
      _0x42cbc9.ropeHidden = false;
      if (mp.objects.exists(_0x42cbc9.object)) {
        attachRodRopeToPed(_0x30096c.handle, _0x42cbc9.object, _0x58e333, _0x42cbc9.fishingSpot, _0x42cbc9.fishDistance);
      }
    } catch (_0x3e3043) {
      mp.console.logError("Error showFishingRope: " + _0x3e3043);
    }
  }
}
function createRodObject(_0x5c1544, _0x1a36b0) {
  try {
    const _0x3fa1e5 = CONFIG.rodObjectData.Model;
    if (!_0x3fa1e5) {
      if (_0x1a36b0) {
        _0x1a36b0(null);
      }
      return;
    }
    const _0x198b25 = _0x5c1544?.remoteId;
    if (_0x198b25 == null) {
      return;
    }
    const _0x4fe3d9 = mp.objects.new(mp.game.joaat(_0x3fa1e5), new mp.Vector3(_0x5c1544.position.x, _0x5c1544.position.y, _0x5c1544.position.z - 5), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: _0x5c1544.dimension
    });
    const _0x35b8d0 = setInterval(() => {
      if (mp.objects.exists(_0x4fe3d9) && _0x4fe3d9.handle !== 0) {
        clearInterval(_0x35b8d0);
        if (_0x1a36b0) {
          _0x1a36b0(_0x4fe3d9);
        }
      }
    }, 5);
  } catch (_0x1fbd69) {
    mp.console.logError("Error creating object: " + _0x1fbd69.message);
    if (_0x1a36b0) {
      _0x1a36b0(null);
    }
  }
}
function calculateFishSpawnPoint(_0x336d89, _0x5adc25, _0x5a2942 = 6, _0x31a119 = -1) {
  const _0x31882f = _0x5adc25.x - _0x336d89.x;
  const _0x3cb10a = _0x5adc25.y - _0x336d89.y;
  const _0x25d49c = _0x5adc25.z - _0x336d89.z;
  const _0x26a4f1 = Math.sqrt(_0x31882f * _0x31882f + _0x3cb10a * _0x3cb10a + _0x25d49c * _0x25d49c);
  if (_0x26a4f1 === 0) {
    return _0x5adc25;
  }
  const _0x435533 = _0x31882f / _0x26a4f1;
  const _0x584509 = _0x3cb10a / _0x26a4f1;
  let _0x36f1f9 = new mp.Vector3(_0x5adc25.x + _0x435533 * _0x5a2942, _0x5adc25.y + _0x584509 * _0x5a2942, _0x5adc25.z + _0x31a119);
  if (isPositionInWater(_0x36f1f9)) {
    return _0x36f1f9;
  }
  const _0xb8becc = _0x5a2942 / 2;
  let _0x1f8d4f = new mp.Vector3(_0x5adc25.x + _0x435533 * _0xb8becc, _0x5adc25.y + _0x584509 * _0xb8becc, _0x5adc25.z + _0x31a119 / 2);
  if (isPositionInWater(_0x1f8d4f)) {
    return _0x1f8d4f;
  } else {
    return new mp.Vector3(_0x5adc25.x, _0x5adc25.y, _0x5adc25.z);
  }
}
function calculateSwimForceToFishingSpot(_0x3e99fc, _0x584c77, _0x58a6c6 = 3) {
  const _0x28123f = _0x584c77.x - _0x3e99fc.x;
  const _0xf7302a = _0x584c77.y - _0x3e99fc.y;
  const _0x48b5d3 = _0x584c77.z - _0x3e99fc.z;
  const _0x5917fa = Math.sqrt(_0x28123f * _0x28123f + _0xf7302a * _0xf7302a + _0x48b5d3 * _0x48b5d3);
  if (_0x5917fa === 0) {
    return {
      x: 0,
      y: 0,
      z: 0
    };
  } else {
    return {
      x: _0x28123f / _0x5917fa * _0x58a6c6,
      y: _0xf7302a / _0x5917fa * _0x58a6c6,
      z: _0x48b5d3 / _0x5917fa * _0x58a6c6
    };
  }
}
function calculateLaunchForceToPlayer(_0x5d4986, _0x1298fc, _0x3ae133 = 8, _0x29e125 = 12) {
  const _0xe0f4f = _0x1298fc.x - _0x5d4986.x;
  const _0x3cecbc = _0x1298fc.y - _0x5d4986.y;
  const _0x153f6a = Math.sqrt(_0xe0f4f * _0xe0f4f + _0x3cecbc * _0x3cecbc);
  if (_0x153f6a === 0) {
    return {
      x: 0,
      y: 0,
      z: _0x29e125
    };
  } else {
    return {
      x: _0xe0f4f / _0x153f6a * _0x3ae133,
      y: _0x3cecbc / _0x153f6a * _0x3ae133,
      z: _0x29e125
    };
  }
}
function calculateHeadingToTarget(_0x299394) {
  let _0x3682bd = _0x299394 - 180;
  if (_0x3682bd < -180) {
    _0x3682bd += 360;
  }
  return _0x3682bd;
}
function hasFishReachedTarget(_0x92e264, _0x2bc055, _0x5ad5dc = 1.5) {
  const _0x318cd3 = mp.game.ped.getBoneCoords(_0x92e264, 0, 0, 0, 0);
  return Math.sqrt(Math.pow(_0x318cd3.x - _0x2bc055.x, 2) + Math.pow(_0x318cd3.y - _0x2bc055.y, 2) + Math.pow(_0x318cd3.z - _0x2bc055.z, 2)) <= _0x5ad5dc;
}
global.myTestPed = null;
global.calculateFishSpawnPoint = calculateFishSpawnPoint;
global.calculateSwimForceToFishingSpot = calculateSwimForceToFishingSpot;
global.calculateLaunchForceToPlayer = calculateLaunchForceToPlayer;
global.calculateHeadingToTarget = calculateHeadingToTarget;
global.hasFishReachedTarget = hasFishReachedTarget;
let fishingMouseBound = false;
let fishingClickData = {
  clicks: [],
  startTime: 0,
  totalClicks: 0
};
function onMouseDown() {
  if (!main_browser) {
    return;
  }
  main_browser.execute("this.AppComponents.FishingGame.setMouseState(true);");
  const _0x661dce = Date.now();
  if (fishingClickData.startTime === 0) {
    fishingClickData.startTime = _0x661dce;
  }
  fishingClickData.totalClicks++;
  fishingClickData.clicks.push(_0x661dce);
  if (fishingClickData.clicks.length > 20) {
    fishingClickData.clicks.shift();
  }
}
function onMouseUp() {
  if (main_browser) {
    main_browser.execute("this.AppComponents.FishingGame.setMouseState(false);");
  }
}
function bindFishingMouse() {
  fishingMouseBound = true;
  fishingClickData = {
    clicks: [],
    startTime: 0,
    totalClicks: 0
  };
}
function unbindFishingMouse() {
  fishingMouseBound = false;
  onMouseUp();
}
function calculateInputQuality() {
  if (fishingClickData.totalClicks < 3) {
    return 1;
  }
  const _0x19417b = Date.now() - fishingClickData.startTime;
  if (_0x19417b < 1000) {
    return 0;
  }
  let _0x5b1bb3 = 0;
  if (fishingClickData.totalClicks / _0x19417b * 1000 > 15) {
    _0x5b1bb3++;
  }
  if (fishingClickData.clicks.length >= 5) {
    const _0x1a7d5a = [];
    for (let _0x469f33 = 1; _0x469f33 < fishingClickData.clicks.length; _0x469f33++) {
      _0x1a7d5a.push(fishingClickData.clicks[_0x469f33] - fishingClickData.clicks[_0x469f33 - 1]);
    }
    const _0x52fa9a = _0x1a7d5a.reduce((_0xa96822, _0x18b9e3) => _0xa96822 + _0x18b9e3, 0) / _0x1a7d5a.length;
    const _0x3ec8e2 = _0x1a7d5a.reduce((_0x476518, _0x34ac88) => _0x476518 + Math.pow(_0x34ac88 - _0x52fa9a, 2), 0) / _0x1a7d5a.length;
    if (Math.sqrt(_0x3ec8e2) < 10 && _0x1a7d5a.length > 8) {
      _0x5b1bb3 += 2;
    }
    if (_0x52fa9a < 30) {
      _0x5b1bb3++;
    }
  }
  if (fishingClickData.totalClicks > 50) {
    _0x5b1bb3++;
  }
  return Math.max(0, Math.min(1, 1 - _0x5b1bb3 * 0.25));
}
function stopForceMinigame() {
  if (isLocalFishing) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FishingFinishMinigame", false);
    }
  }
}
function clearAllFishingDataForId(_0x59686f) {
  const _0x23fb8a = fishingPlayers.get(_0x59686f);
  if (!_0x23fb8a) {
    return;
  }
  const _0x15fffb = _0x23fb8a?.rope;
  const _0x53ca26 = _0x23fb8a?.object;
  const _0x4ed9af = _0x23fb8a?.fishPed;
  if (mp.objects.exists(_0x53ca26)) {
    _0x53ca26.destroy();
  }
  if (_0x15fffb && !_0x23fb8a.ropeHidden) {
    mp.game.rope.deleteRope(_0x15fffb.result);
  }
  if (_0x4ed9af) {
    mp.game.ped.delete(_0x4ed9af);
  }
  if (_0x23fb8a.fishingProcessTimeOut) {
    clearTimeout(_0x23fb8a.fishingProcessTimeOut);
    _0x23fb8a.fishingProcessTimeOut = null;
  }
  if (_0x23fb8a.fishingProcessTimeOut2) {
    clearTimeout(_0x23fb8a.fishingProcessTimeOut2);
    _0x23fb8a.fishingProcessTimeOut2 = null;
  }
  if (_0x23fb8a.fishingProcessTimeOut3) {
    clearTimeout(_0x23fb8a.fishingProcessTimeOut3);
    _0x23fb8a.fishingProcessTimeOut3 = null;
  }
  fishingPlayers.delete(_0x59686f);
  if (!mp.players.exists(mp.players.atRemoteId(_0x59686f))) {
    return;
  }
  const _0x186ee1 = mp.players.atRemoteId(_0x59686f);
  delete _0x186ee1.startFishing;
  delete _0x186ee1.startFishingAt;
  _0x186ee1.freezePosition(false);
  if (_0x59686f === localplayer.remoteId) {
    main_browser.execute("APPS.state.fishingMiniGame.show = false;");
    main_browser.execute("window.MusicManager.stopFishingSound()");
    unbindFishingMouse();
    disablePlayerHandle = false;
    isLocalFishing = false;
  }
  stop_animation(_0x186ee1, CONFIG.startAnimDict, CONFIG.startAnimName);
}
function updateFishingAttachment(_0x5b91f8, _0x144bcc) {
  if (_0x144bcc && _0x5b91f8 !== localplayer) {
    if (mp.game.gameplay.getDistanceBetweenCoords(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x5b91f8.position.x, _0x5b91f8.position.y, _0x5b91f8.position.z, true) > 10) {
      hideFishingRope(_0x144bcc);
    } else {
      showFishingRope(_0x5b91f8, _0x144bcc);
    }
  }
}
mp.events.add("click", (_0x3bc532, _0x39eecd, _0x3939d6, _0x27d04f) => {
  if (fishingMouseBound && _0x27d04f === "left") {
    if (_0x3939d6 === "down") {
      onMouseDown();
    } else if (_0x3939d6 === "up") {
      onMouseUp();
    }
  }
});
global.stopForceMinigame = stopForceMinigame;
mp.events.add("Client_FishingFinishMinigame", (_0x204fc0, _0x2842a2) => {
  if (!isLocalFishing || !loggedin) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x1aad8a = calculateInputQuality();
  mp.events.callRemote("Server_FishingFinishMinigame", _0x204fc0, _0x1aad8a, _0x2842a2 || 0);
});
mp.events.add("Client_FishingProcessStop", _0x489e20 => {
  const _0x3bc7ad = mp.players.atRemoteId(_0x489e20);
  if (mp.players.exists(_0x3bc7ad)) {
    if (!_0x3bc7ad.startFishing) {
      return;
    }
    if (_0x3bc7ad === localplayer) {
      isLocalFishing = false;
      main_browser.execute("APPS.state.fishingMiniGame.show = false;");
      inFishMinigame = false;
      unbindFishingMouse();
    }
    clearAllFishingDataForId(_0x489e20);
  } else {
    clearAllFishingDataForId(_0x489e20);
  }
});
mp.events.add("Client_FishingProcessEnd", (_0x58c3b9, _0x13f609) => {
  const _0x155cb4 = mp.players.atRemoteId(_0x58c3b9);
  if (_0x58c3b9 == null || _0x155cb4 == null) {
    return;
  }
  if (!_0x155cb4.startFishing) {
    return;
  }
  if (_0x155cb4 === localplayer) {
    main_browser.execute("APPS.state.fishingMiniGame.show = false;");
    inFishMinigame = false;
    main_browser.execute("window.MusicManager.playFishingSound('twitching')");
  }
  const _0x452d90 = CONFIG.fishList[_0x13f609 - 1];
  const _0xfb39b3 = fishingPlayers.get(_0x58c3b9);
  if (!_0xfb39b3) {
    return;
  }
  _0xfb39b3.fishingProcessTimeOut = null;
  _0xfb39b3.fishingProcessTimeOut2 = null;
  _0xfb39b3.fishingProcessTimeOut3 = null;
  const _0x3a645e = _0xfb39b3?.fishingSpot;
  const _0x466a16 = _0xfb39b3?.object;
  const _0x448cc7 = _0xfb39b3?.fishDistance;
  if (!_0x3a645e) {
    _0xfb39b3.fishingProcessTimeOut3 = setTimeout(() => {
      clearAllFishingDataForId(_0x58c3b9);
      _0xfb39b3.fishingProcessTimeOut = null;
      _0xfb39b3.fishingProcessTimeOut2 = null;
      _0xfb39b3.fishingProcessTimeOut3 = null;
    }, 5600);
    return;
  }
  const _0x34b5c7 = _0x155cb4.position;
  const _0x583fe7 = calculateFishSpawnPoint(_0x34b5c7, _0x3a645e, 6, -1);
  const _0x5e42d3 = calculateHeadingToTarget(_0x155cb4.getHeading());
  mp.game.streaming.requestModel(mp.game.joaat(_0x452d90.model));
  _0xfb39b3.fishingProcessTimeOut = setTimeout(() => {
    if (!_0xfb39b3) {
      return;
    }
    _0xfb39b3.fishingProcessTimeOut = null;
    if (!mp.players.exists(_0x155cb4)) {
      return clearAllFishingDataForId(_0x58c3b9);
    }
    const _0x32b570 = mp.game.ped.createPed(26, mp.game.joaat(_0x452d90.model), _0x583fe7.x, _0x583fe7.y, _0x583fe7.z, _0x5e42d3, false, true);
    _0xfb39b3.fishPed = _0x32b570;
    mp.game.invoke("0x5BA7919BED300023", _0x32b570, false);
    mp.game.invoke("0x3882114BDE571AD4", _0x32b570, true);
    mp.game.invoke("0x56CEF0AC79073BDE", _0x32b570, false);
    mp.game.invoke("0x176CECF6F920D707", _0x32b570);
    mp.game.ped.setDesiredHeading(_0x32b570, _0x5e42d3);
    _0xfb39b3.fishingProcessTimeOut2 = setTimeout(() => {
      if (_0xfb39b3) {
        _0xfb39b3.fishingProcessTimeOut2 = null;
        mp.game.ped.setDesiredHeading(_0x32b570, _0x5e42d3);
        if (!mp.players.exists(_0x155cb4)) {
          return clearAllFishingDataForId(_0x58c3b9);
        }
        mp.game.invoke("0x5BA7919BED300023", _0x32b570, false);
        mp.game.invoke("0x3882114BDE571AD4", _0x32b570, true);
        mp.game.invoke("0x56CEF0AC79073BDE", _0x32b570, false);
        mp.game.invoke("0x176CECF6F920D707", _0x32b570);
        mp.game.invoke("0x5BC448CB78FA3E88", _0x32b570, _0x3a645e.x, _0x3a645e.y, _0x3a645e.z, 3, 0, false, 786603, 3212836864);
        _0xfb39b3.fishingProcessTimeOut3 = setTimeout(() => {
          if (!_0xfb39b3) {
            return;
          }
          _0xfb39b3.fishingProcessTimeOut3 = null;
          if (!mp.players.exists(_0x155cb4)) {
            return clearAllFishingDataForId(_0x58c3b9);
          }
          mp.game.invoke("0x06843DA7060A026B", _0x32b570, _0x3a645e.x, _0x3a645e.y, _0x3a645e.z - 0.5, 1, 0, 0, 1);
          const _0x4c8981 = mp.game.ped.getBoneCoords(_0x32b570, 0, 0, 0, 0);
          if (!_0xfb39b3.ropeHidden && _0xfb39b3.rope) {
            attachRodRopeToPed(_0x32b570, _0x466a16, _0xfb39b3.rope, _0x4c8981, _0x448cc7);
          }
          const _0x1c20e6 = calculateLaunchForceToPlayer(_0x3a645e, _0x34b5c7, 10, 18);
          if (_0x155cb4 === localplayer) {
            main_browser.execute("window.MusicManager.playFishingSound('success')");
          }
          mp.game.entity.applyForceTo(_0x32b570, 3, _0x1c20e6.x, _0x1c20e6.y, _0x1c20e6.z, 0, 0, 0, 0, false, false, true, false, false);
          setTimeout(() => {
            if (_0x155cb4 === localplayer && _0x13f609 >= 4) {
              StartCustomSound("notification_miner", "/sounds/notifications/expensive_item.ogg", 0.2);
            }
            clearAllFishingDataForId(_0x58c3b9);
          }, 1000);
        }, 4000);
      }
    }, 300);
  }, 300);
});
mp.events.add("entityStreamOut", _0xb009c9 => {
  if (_0xb009c9?.type === "player") {
    const _0x446b4a = _0xb009c9.remoteId;
    if (_0x446b4a == null) {
      return;
    }
    clearAllFishingDataForId(_0x446b4a);
  }
});
mp.events.add("render", () => {
  if (fishingPlayers.size) {
    fishingPlayers.forEach((_0x230417, _0x42d7d7) => {
      const _0x3f5656 = _0x42d7d7 === localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x42d7d7);
      if (mp.players.exists(_0x3f5656) && _0x3f5656.handle) {
        updateFishingAttachment(_0x3f5656, _0x230417);
      }
    });
  }
});
global.updateFishingAttachment = updateFishingAttachment;
global.fishingEventType = null;
global.fishingEventIndex = null;
global.fishingEventBlips = null;
global.fishingEventZoneBlips = null;
global.fishingEventMarker = null;
global.fishingEventColshape = null;
global.fishingEventPed = null;
global.fishingEventPedInterval = null;
const eventLocations = {
  megalodon: [{
    position: new mp.Vector3(-1867.728, -1255.032, 0),
    radius: 100,
    interval: 25000,
    pedPositions: [new mp.Vector3(-1835.018, -1279.208, -0.5), new mp.Vector3(-1894.785, -1225.019, -0.5)]
  }, {
    position: new mp.Vector3(2699.943, -1543.743, 0),
    radius: 140,
    interval: 30000,
    pedPositions: [new mp.Vector3(2721.942, -1502.337, -0.5), new mp.Vector3(2705.314, -1588.694, -0.5), new mp.Vector3(2716.532, -1541.655, -0.5)]
  }, {
    position: new mp.Vector3(3291.369, 5311.36, 0),
    radius: 140,
    interval: 25000,
    pedPositions: [new mp.Vector3(3339.324, 5270.958, -0.5), new mp.Vector3(3258.526, 5305.448, -0.5), new mp.Vector3(3300.548, 5341.333, -0.5)]
  }, {
    position: new mp.Vector3(-3448.745, 970.756, 0),
    radius: 140,
    interval: 20000,
    pedPositions: [new mp.Vector3(-3436.447, 939.05, -0.5), new mp.Vector3(-3435.115, 993.824, -0.5)]
  }],
  whale: [{
    position: new mp.Vector3(-281.375, -3337.902, 0),
    radius: 120,
    interval: 40000
  }, {
    position: new mp.Vector3(2092.638, -3423.249, 0),
    radius: 120,
    interval: 40000
  }, {
    position: new mp.Vector3(-3540.848, -158.665, 0),
    radius: 120,
    interval: 40000
  }, {
    position: new mp.Vector3(-2895.028, 4293.647, 0),
    radius: 120,
    interval: 40000
  }, {
    position: new mp.Vector3(1010.668, 7239.818, 0),
    radius: 120,
    interval: 40000
  }]
};
const eventData = {
  megalodon: {
    name: language["Охота на мегалодона"][curr_lang],
    model: "a_c_sharktiger"
  },
  whale: {
    name: language["Охота на китов"][curr_lang],
    model: "a_c_humpback"
  }
};
function endFishingEvent() {
  if (fishingEventType) {
    fishingEventType = null;
    fishingEventIndex = null;
    if (mp.blips.exists(fishingEventBlips)) {
      fishingEventBlips.destroy();
      fishingEventBlips = null;
    }
    if (fishingEventZoneBLips) {
      mp.game.ui.removeBlip(fishingEventZoneBLips);
      fishingEventZoneBLips = null;
    }
    if (fishingEventMarker) {
      fishingEventMarker.destroy();
      fishingEventMarker = null;
    }
    if (fishingEventColshape) {
      fishingEventColshape.destroy();
      fishingEventColshape = null;
    }
    removeFishingEventPed();
  }
}
function spawnFishingEventPed() {
  if (!fishingEventType) {
    return;
  }
  removeFishingEventPed();
  const _0x46ca9a = eventData[fishingEventType].model;
  const _0x20376d = eventLocations[fishingEventType][fishingEventIndex].position;
  mp.game.streaming.requestModel(mp.game.joaat(_0x46ca9a));
  fishingTimeout = setTimeout(() => {
    fishingTimeout = null;
    fishingEventPed = mp.game.ped.createPed(26, mp.game.joaat(_0x46ca9a), _0x20376d.x, _0x20376d.y, _0x20376d.z - 2, 0, false, true);
    fishingTimeout2 = setTimeout(() => {
      fishingTimeout2 = null;
      const _0x5c071b = eventLocations[fishingEventType][fishingEventIndex].interval || 15000;
      const _0x538008 = eventLocations[fishingEventType][fishingEventIndex].pedPositions || [];
      let _0x5cb4ee = 0;
      if (!_0x5c071b || _0x5c071b <= 0) {
        return;
      }
      let _0x863f8c = _0x20376d;
      if (fishingEventType !== "whale") {
        _0x538008[_0x5cb4ee];
      }
      _0x5cb4ee++;
      if (_0x5cb4ee >= _0x538008.length) {
        _0x5cb4ee = 0;
      }
      if (fishingEventType === "whale") {
        mp.game.invoke("0x06843DA7060A026B", fishingEventPed, _0x20376d.x, _0x20376d.y - 50, _0x20376d.z, 1, 0, 0, 1);
      }
      mp.game.invoke("0x5BC448CB78FA3E88", fishingEventPed, _0x863f8c.x, _0x863f8c.y, _0x863f8c.z, 2, 0, false, 786603, 3212836864);
      fishingEventPedInterval = setInterval(() => {
        if (fishingEventPed) {
          if (fishingEventType === "whale") {
            mp.game.invoke("0x06843DA7060A026B", fishingEventPed, _0x20376d.x, _0x20376d.y - 50, _0x20376d.z, 1, 0, 0, 1);
            mp.game.invoke("0x5BC448CB78FA3E88", fishingEventPed, _0x863f8c.x, _0x863f8c.y + 100, _0x863f8c.z, 2, 0, false, 786603, 3212836864);
          } else {
            _0x863f8c = _0x538008[_0x5cb4ee];
            _0x5cb4ee++;
            if (_0x5cb4ee >= _0x538008.length) {
              _0x5cb4ee = 0;
            }
            if (!_0x863f8c) {
              return;
            }
            mp.game.invoke("0x5BC448CB78FA3E88", fishingEventPed, _0x863f8c.x, _0x863f8c.y, _0x863f8c.z, 2, 0, false, 786603, 3212836864);
          }
        }
      }, _0x5c071b);
    }, 2000);
  }, 300);
}
function removeFishingEventPed() {
  if (fishingEventPedInterval !== null && typeof fishingEventPedInterval == "number") {
    try {
      clearInterval(fishingEventPedInterval);
    } catch (_0x550ef6) {
      mp.console.logError("Error clearing fishingTimeout1: " + _0x550ef6);
    }
    fishingEventPedInterval = null;
  }
  if (fishingEventPed) {
    mp.game.ped.delete(fishingEventPed);
    fishingEventPed = null;
  }
  if (fishingTimeout !== null && typeof fishingTimeout == "number") {
    try {
      clearTimeout(fishingTimeout);
    } catch (_0x248a7d) {
      mp.console.logError("Error clearing fishingTimeout2: " + _0x248a7d);
    }
    fishingTimeout = null;
  }
  if (fishingTimeout2 !== null && typeof fishingTimeout2 == "number") {
    try {
      clearTimeout(fishingTimeout2);
    } catch (_0x3310ed) {
      mp.console.logError("Error clearing fishingTimeout3: " + _0x3310ed);
    }
    fishingTimeout2 = null;
  }
}
mp.events.add("Client_StartFishingEvent", (_0x9bb070, _0x26d990, _0x54f035 = true) => {
  let _0x4d6d94 = eventLocations[_0x9bb070][_0x26d990].position;
  let _0x16bb2d = eventLocations[_0x9bb070][_0x26d990].radius;
  if (_0x4d6d94 && _0x16bb2d) {
    if (fishingEventType) {
      endFishingEvent();
    }
    fishingEventType = _0x9bb070;
    fishingEventIndex = _0x26d990;
    fishingEventBlips = mp.blips.new(914, new mp.Vector3(_0x4d6d94.x, _0x4d6d94.y, _0x4d6d94.z), {
      name: eventData[_0x9bb070].name,
      scale: 1,
      color: 3,
      drawDistance: 25,
      shortRange: true
    });
    fishingEventZoneBLips = mp.game.ui.addBlipForRadius(_0x4d6d94.x, _0x4d6d94.y, _0x4d6d94.z, _0x16bb2d / 2);
    mp.game.ui.setBlipSprite(fishingEventZoneBLips, zone_blips);
    mp.game.ui.setBlipAlpha(fishingEventZoneBLips, 100);
    mp.game.ui.setBlipColour(fishingEventZoneBLips, zone_color);
    fishingEventMarker = mp.markers.new(1, new mp.Vector3(_0x4d6d94.x, _0x4d6d94.y, _0x4d6d94.z - 90), _0x16bb2d, {
      color: [246, 225, 0, 255],
      visible: true,
      dimension: 0
    });
    fishingEventColshape = mp.colshapes.newSphere(_0x4d6d94.x, _0x4d6d94.y, _0x4d6d94.z, _0x16bb2d + 30, 0);
    fishingEventColshape.fishingEventShape = true;
    if (_0x9bb070 === "megalodon" && _0x54f035) {
      SendHudEventNotif(1001);
    } else if (_0x9bb070 === "whale" && _0x54f035) {
      SendHudEventNotif(1002);
    }
  }
});
global.endFishingEvent = endFishingEvent;
mp.events.add("Client_StopFishingEvent", endFishingEvent);
global.fishingTimeout = null;
global.fishingTimeout2 = null;
mp.events.add("playerEnterColshape", _0x31154f => {
  if (mp.colshapes.exists(_0x31154f) && _0x31154f.fishingEventShape == 1) {
    spawnFishingEventPed();
  }
});
mp.events.add("playerExitColshape", _0x47386f => {
  if (mp.colshapes.exists(_0x47386f) && _0x47386f.fishingEventShape == 1) {
    removeFishingEventPed();
  }
});
mp.events.add("playerQuit", _0xda0b6e => {
  removeFishingEventPed();
  fishingPlayers.forEach((_0x2dc974, _0x576e84) => {
    if (_0x576e84 === _0xda0b6e.remoteId) {
      clearAllFishingDataForId(_0x576e84);
    }
  });
});
global.routeToFishingEvent = function () {
  if (!fishingEventType || fishingEventIndex == null) {
    return ShowNotification(language["Событие еще не началось"][curr_lang], 2);
  }
  if (eventLocations[fishingEventType][fishingEventIndex].position) {
    mp.events.call("Client_SetRouteToCoords", eventLocations[fishingEventType][fishingEventIndex].position.x, eventLocations[fishingEventType][fishingEventIndex].position.y, eventLocations[fishingEventType][fishingEventIndex].position.z, true, 0, eventLocations[fishingEventType][fishingEventIndex].radius);
  }
};
mp.events.add("Client_FishingACData", (_0x458d20, _0xe43f1d) => {});