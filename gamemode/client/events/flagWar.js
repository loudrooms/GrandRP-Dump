global.at_flag_war = false;
global.flag_war_carrying = false;
global.flag_war_carry_owner_fam = 0;
global.flag_war_placement = false;
global.flag_war_participation_placing = false;
global.flag_war_place_color = 0;
global.flag_war_event_active = false;
global.flag_war_event_time_left = 0;
global.flag_war_billiard_active = false;
const FLAG_COUNT = 30;
const FLAG_PROP_NAMES = Array.from({
  length: 30
}, (_0x200614, _0xef8de4) => "grand_prop_v_flag_" + (_0xef8de4 + 1));
const FLAG_DEFAULT_PROP = FLAG_PROP_NAMES[0];
const FLAG_PLAYER_BONE = 24818;
const FLAG_PLAYER_OFFSET = {
  x: 0.1,
  y: -0.1,
  z: 0
};
const FLAG_PLAYER_ROT = {
  x: -90,
  y: 0,
  z: -90
};
const FLAG_VEHICLE_ROOF_EXTRA_Z = -0.4;
const FLAG_ATTACH_RETRY_MS = 100;
const FLAG_CARRIER_SYNC_MS = 400;
const DELIVERY_TIME_SEC = 300;
let flagWarCarrierSyncInterval;
let flagWarOwnMarker = null;
let flagWarOwnMarkerActive = false;
const flagWarCarriers = new Map();
const flagWarPendingCarriers = new Map();
const FLAG_LABEL_HEIGHT = 2.2;
const FLAG_LABEL_DISTANCE_SQ = 3600;
function getFamilyNameById(_0x4bc487) {
  const _0x3f02a8 = parseInt(_0x4bc487);
  if (isNaN(_0x3f02a8) || _0x3f02a8 <= 0) {
    return "Fam";
  }
  const _0x2b21af = global.families_names?.[_0x3f02a8 - 1];
  if (_0x2b21af && String(_0x2b21af).length > 0) {
    return String(_0x2b21af);
  } else {
    return "Fam " + _0x3f02a8;
  }
}
function getFlagWarLabelText(_0x28c288) {
  return "Flag " + getFamilyNameById(_0x28c288);
}
function drawFlagWarLabelAt(_0x479e20, _0xb45503, _0x3d0d92, _0x592f75, _0xf788a0, _0x593fc2 = 2.2) {
  const _0x3c4d35 = _0x592f75.x - _0x479e20;
  const _0x18320f = _0x592f75.y - _0xb45503;
  const _0x5cfde3 = _0x592f75.z - _0x3d0d92;
  if (_0x3c4d35 * _0x3c4d35 + _0x18320f * _0x18320f + _0x5cfde3 * _0x5cfde3 > 3600) {
    return;
  }
  const _0x29f88d = local_family > 0 && _0xf788a0 === local_family;
  mp.game.graphics.drawText(getFlagWarLabelText(_0xf788a0), [_0x592f75.x, _0x592f75.y, _0x592f75.z + _0x593fc2], {
    font: 4,
    color: _0x29f88d ? [255, 228, 0, 255] : [255, 255, 255, 215],
    scale: [0.35, 0.35],
    outline: true
  });
}
function getPlayerCarriedFlagData(_0x5e37d2) {
  if (_0x5e37d2 === localplayer && flag_war_carrying && flag_war_carry_owner_fam) {
    return {
      ownerFam: flag_war_carry_owner_fam,
      flagColor: flag_war_place_color
    };
  }
  if (_0x5e37d2.hasVariable("flagWar")) {
    const _0x985a34 = decodeFlagWarVariable(_0x5e37d2.getVariable("flagWar"));
    if (_0x985a34) {
      return _0x985a34;
    }
  }
  return null;
}
function getEntityWorldPos(_0x499e0) {
  if (!_0x499e0 || _0x499e0.handle === 0) {
    return null;
  }
  try {
    const _0xb86c5e = mp.game.entity.getEntityCoords(_0x499e0.handle, false);
    return {
      x: _0xb86c5e.x,
      y: _0xb86c5e.y,
      z: _0xb86c5e.z
    };
  } catch (_0x3851d7) {
    return null;
  }
}
function getCarriedFlagLabelPos(_0x1f2eda) {
  const _0xccd2ab = flagWarCarriers.get(_0x1f2eda.remoteId);
  if (_0xccd2ab && _0xccd2ab.object && mp.objects.exists(_0xccd2ab.object) && _0xccd2ab.object.handle !== 0) {
    try {
      const _0x5f451b = mp.game.entity.getOffsetFromEntityInWorldCoords(_0xccd2ab.object.handle, 0, 0, 2.2);
      return {
        x: _0x5f451b.x,
        y: _0x5f451b.y,
        z: _0x5f451b.z
      };
    } catch (_0x4f13e3) {}
    const _0x467b62 = getEntityWorldPos(_0xccd2ab.object);
    if (_0x467b62) {
      return _0x467b62;
    }
  }
  if (_0x1f2eda.handle !== 0) {
    const _0x3267ea = parseInt(_0x1f2eda.getBoneIndex(24818));
    if (!isNaN(_0x3267ea) && _0x3267ea >= 0) {
      return _0x1f2eda.getBoneCoords(_0x3267ea, FLAG_PLAYER_OFFSET.x, FLAG_PLAYER_OFFSET.y, FLAG_PLAYER_OFFSET.z + 2.2);
    }
  }
  if (_0x1f2eda.vehicle && mp.vehicles.exists(_0x1f2eda.vehicle)) {
    const _0x187fd9 = getEntityWorldPos(_0x1f2eda.vehicle);
    if (_0x187fd9) {
      return {
        x: _0x187fd9.x,
        y: _0x187fd9.y,
        z: _0x187fd9.z + 2
      };
    }
  }
  return getEntityWorldPos(_0x1f2eda) || _0x1f2eda.position;
}
function drawCarriedFlagWarLabelForPlayer(_0x56abfd, _0x2c64fe, _0x35e7cf, _0x58aeda) {
  if (!_0x56abfd || !mp.players.exists(_0x56abfd)) {
    return;
  }
  if (_0x56abfd === localplayer && flag_war_billiard_active) {
    return;
  }
  const _0x470f7d = getPlayerCarriedFlagData(_0x56abfd);
  if (!_0x470f7d || !_0x470f7d.ownerFam) {
    return;
  }
  drawFlagWarLabelAt(_0x2c64fe, _0x35e7cf, _0x58aeda, getCarriedFlagLabelPos(_0x56abfd), _0x470f7d.ownerFam, 0);
}
function drawCarriedFlagWarLabels() {
  if (!loggedin || !flag_war_event_active) {
    return;
  }
  const _0x412463 = localplayer.position.x;
  const _0x2835a6 = localplayer.position.y;
  const _0x58bd88 = localplayer.position.z;
  drawCarriedFlagWarLabelForPlayer(localplayer, _0x412463, _0x2835a6, _0x58bd88);
  mp.players.forEachInStreamRange(_0x484bd2 => {
    if (_0x484bd2 && mp.players.exists(_0x484bd2) && _0x484bd2 !== localplayer) {
      drawCarriedFlagWarLabelForPlayer(_0x484bd2, _0x412463, _0x2835a6, _0x58bd88);
    }
  });
}
const FLAG_TAKE_HOLD_SEC = 10;
const FLAG_TAKE_PROGRESS_DELAY = 100;
let flagWarTakeProgressActive = false;
function isValidFlagColor(_0x1b6928) {
  const _0x240376 = parseInt(_0x1b6928);
  return !isNaN(_0x240376) && _0x240376 >= 0 && _0x240376 < 30;
}
function getFlagPropName(_0x2c419a) {
  return isValidFlagColor(_0x2c419a) && FLAG_PROP_NAMES[parseInt(_0x2c419a)] || FLAG_DEFAULT_PROP;
}
function decodeFlagWarVariable(_0x234a72) {
  if (!_0x234a72 || typeof _0x234a72 != "string") {
    return null;
  }
  const _0x3fe912 = _0x234a72.split("_");
  if (_0x3fe912.length < 2) {
    return null;
  }
  const _0x50f2de = parseInt(_0x3fe912[0]);
  const _0x105a40 = parseInt(_0x3fe912[1]);
  if (isNaN(_0x50f2de) || _0x50f2de <= 0 || isNaN(_0x105a40)) {
    return null;
  } else {
    return {
      ownerFam: _0x50f2de,
      flagColor: _0x105a40
    };
  }
}
function getVehicleRoofFlagOffset(_0x379f0b) {
  return {
    x: 0,
    y: 0,
    z: mp.game.gameplay.getModelDimensions(_0x379f0b.getModel()).max.z + -0.4
  };
}
function requestFlagModel(_0x2dfe96) {
  const _0x89e8c7 = mp.game.joaat(_0x2dfe96);
  if (!mp.game.streaming.hasModelLoaded(_0x89e8c7)) {
    mp.game.streaming.requestModel(_0x89e8c7);
  }
  return _0x89e8c7;
}
function preloadFlagModels() {
  FLAG_PROP_NAMES.forEach(_0xf01f => requestFlagModel(_0xf01f));
}
function waitForEntityHandle(_0x1400ac, _0xe97a2, _0x264964 = 80) {
  if (_0x1400ac) {
    if (_0x1400ac.handle !== 0) {
      return _0xe97a2(_0x1400ac);
    } else if (_0x264964 <= 0) {
      return _0xe97a2(null);
    } else {
      setTimeout(() => waitForEntityHandle(_0x1400ac, _0xe97a2, _0x264964 - 1), 25);
      return;
    }
  } else {
    return _0xe97a2(null);
  }
}
function scheduleFlagAttach(_0x5aa6cb, _0xde3a9, _0x48e453, _0x778db7, _0x5614e2) {
  setTimeout(() => {
    if (_0x5aa6cb && mp.objects.exists(_0x5aa6cb) && _0x5aa6cb.handle !== 0 && _0xde3a9) {
      _0x5aa6cb.setCollision(false, false);
      _0x5aa6cb.attachTo(_0xde3a9, _0x48e453, _0x778db7.x, _0x778db7.y, _0x778db7.z, _0x5614e2.x, _0x5614e2.y, _0x5614e2.z, true, false, false, false, 0, true);
    }
  }, 100);
}
function attachFlagToPlayer(_0x493f59, _0x251fa6) {
  if (!_0x493f59 || !mp.objects.exists(_0x493f59) || _0x493f59.handle === 0 || !_0x251fa6 || !mp.players.exists(_0x251fa6) || _0x251fa6.handle === 0) {
    return;
  }
  const _0x5dbb84 = parseInt(_0x251fa6.getBoneIndex(24818));
  _0x493f59.setCollision(false, false);
  _0x493f59.attachTo(_0x251fa6.handle, _0x5dbb84, FLAG_PLAYER_OFFSET.x, FLAG_PLAYER_OFFSET.y, FLAG_PLAYER_OFFSET.z, FLAG_PLAYER_ROT.x, FLAG_PLAYER_ROT.y, FLAG_PLAYER_ROT.z, true, false, false, false, 0, true);
  scheduleFlagAttach(_0x493f59, _0x251fa6.handle, _0x5dbb84, FLAG_PLAYER_OFFSET, FLAG_PLAYER_ROT);
}
function attachFlagToVehicle(_0x249048, _0x24c6d4) {
  if (!_0x249048 || !mp.objects.exists(_0x249048) || _0x249048.handle === 0 || !_0x24c6d4 || !mp.vehicles.exists(_0x24c6d4) || _0x24c6d4.handle === 0) {
    return;
  }
  const _0x3a0e60 = getVehicleRoofFlagOffset(_0x24c6d4);
  const _0xe42042 = {
    x: 0,
    y: 0,
    z: 90
  };
  _0x249048.setCollision(false, false);
  _0x249048.attachTo(_0x24c6d4.handle, -1, _0x3a0e60.x, _0x3a0e60.y, _0x3a0e60.z, _0xe42042.x, _0xe42042.y, _0xe42042.z, true, false, false, false, 0, true);
  scheduleFlagAttach(_0x249048, _0x24c6d4.handle, -1, _0x3a0e60, _0xe42042);
}
function destroyCarrierFlag(_0x390de2) {
  const _0x31d2c8 = flagWarCarriers.get(_0x390de2);
  if (_0x31d2c8) {
    if (_0x31d2c8.object && mp.objects.exists(_0x31d2c8.object)) {
      _0x31d2c8.object.destroy();
    }
    flagWarCarriers.delete(_0x390de2);
    flagWarPendingCarriers.delete(_0x390de2);
  }
}
function destroyAllCarrierFlags() {
  flagWarCarriers.forEach((_0x43f73a, _0x2c9bcc) => destroyCarrierFlag(_0x2c9bcc));
  flagWarPendingCarriers.clear();
}
function applyCarrierFlagAttachment(_0x3a724e, _0x21da82) {
  if (_0x21da82 && _0x21da82.object && mp.objects.exists(_0x21da82.object) && _0x3a724e && mp.players.exists(_0x3a724e)) {
    waitForEntityHandle(_0x21da82.object, _0x584e6a => {
      if (!_0x584e6a || !mp.objects.exists(_0x584e6a)) {
        return;
      }
      const _0x26ef74 = flagWarCarriers.get(_0x3a724e.remoteId);
      if (_0x26ef74 && _0x26ef74.object === _0x584e6a && mp.players.exists(_0x3a724e) && _0x3a724e.handle !== 0) {
        if (_0x26ef74.mode === "vehicle") {
          const _0x25f5b4 = _0x3a724e.vehicle && mp.vehicles.exists(_0x3a724e.vehicle) ? _0x3a724e.vehicle : null;
          if (!_0x25f5b4 || _0x25f5b4.remoteId !== _0x26ef74.vehicleRemoteId) {
            return;
          }
          waitForEntityHandle(_0x25f5b4, _0x2ac9b9 => {
            if (_0x2ac9b9) {
              attachFlagToVehicle(_0x584e6a, _0x2ac9b9);
            }
          });
          return;
        }
        attachFlagToPlayer(_0x584e6a, _0x3a724e);
      }
    });
  }
}
function getCarrierAttachmentState(_0x3a2b30) {
  const _0x56f151 = _0x3a2b30.vehicle && mp.vehicles.exists(_0x3a2b30.vehicle) ? _0x3a2b30.vehicle : null;
  return {
    mode: _0x56f151 ? "vehicle" : "player",
    vehicleRemoteId: _0x56f151 ? _0x56f151.remoteId : -1,
    vehicle: _0x56f151
  };
}
function shouldHideCarrierFlag(_0x3a667a) {
  return _0x3a667a === localplayer && flag_war_billiard_active;
}
function syncPlayerCarrierFlag(_0x41e367, _0x2137ef = null) {
  if (!_0x41e367 || !mp.players.exists(_0x41e367)) {
    return;
  }
  if (!flag_war_event_active && !_0x2137ef) {
    return;
  }
  const _0x418f61 = _0x41e367.remoteId;
  const _0x549348 = _0x2137ef || decodeFlagWarVariable(_0x41e367.getVariable("flagWar"));
  if (!_0x549348 || shouldHideCarrierFlag(_0x41e367)) {
    destroyCarrierFlag(_0x418f61);
    return;
  }
  const _0x3c4178 = getCarrierAttachmentState(_0x41e367);
  const _0x3e02ae = flagWarCarriers.get(_0x418f61);
  if (_0x3e02ae && _0x3e02ae.ownerFam === _0x549348.ownerFam && _0x3e02ae.flagColor === _0x549348.flagColor && _0x3e02ae.mode === _0x3c4178.mode && _0x3e02ae.vehicleRemoteId === _0x3c4178.vehicleRemoteId && _0x3e02ae.object && mp.objects.exists(_0x3e02ae.object)) {
    applyCarrierFlagAttachment(_0x41e367, _0x3e02ae);
    return;
  }
  destroyCarrierFlag(_0x418f61);
  if (_0x41e367.handle === 0) {
    flagWarPendingCarriers.set(_0x418f61, _0x549348);
    return;
  }
  const _0x49f12e = requestFlagModel(getFlagPropName(_0x549348.flagColor));
  const _0x118aaf = _0x3c4178.vehicle ? _0x3c4178.vehicle.position : _0x41e367.position;
  const _0x2e58c7 = mp.objects.new(_0x49f12e, _0x118aaf, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: _0x41e367.dimension
  });
  if (!_0x2e58c7 || !mp.objects.exists(_0x2e58c7)) {
    return;
  }
  const _0x16b006 = {
    object: _0x2e58c7,
    ownerFam: _0x549348.ownerFam,
    flagColor: _0x549348.flagColor,
    mode: _0x3c4178.mode,
    vehicleRemoteId: _0x3c4178.vehicleRemoteId
  };
  flagWarCarriers.set(_0x418f61, _0x16b006);
  flagWarPendingCarriers.delete(_0x418f61);
  applyCarrierFlagAttachment(_0x41e367, _0x16b006);
}
function refreshAllCarrierFlags() {
  if (flag_war_event_active) {
    mp.players.forEachInStreamRange(_0x169fad => syncPlayerCarrierFlag(_0x169fad));
  }
}
function startFlagWarCarrierSync() {
  if (flagWarCarrierSyncInterval == null) {
    preloadFlagModels();
    refreshAllCarrierFlags();
    flagWarCarrierSyncInterval = setInterval(refreshAllCarrierFlags, 400);
  }
}
function stopFlagWarCarrierSync() {
  if (flagWarCarrierSyncInterval != null) {
    clearInterval(flagWarCarrierSyncInterval);
    flagWarCarrierSyncInterval = undefined;
  }
  destroyAllCarrierFlags();
}
const FLAG_WAR_PRIZES = [{
  id: 1,
  needFlags: 1,
  maxProgress: 600,
  item: {
    item_id: 10000,
    type: "money"
  }
}, {
  id: 2,
  needFlags: 2,
  maxProgress: 900,
  item: {
    item_id: 6595,
    count: 5,
    type: "item"
  }
}, {
  id: 3,
  needFlags: 5,
  maxProgress: 1200,
  item: {
    item_id: 2941,
    count: 1,
    type: "item"
  }
}, {
  id: 4,
  needFlags: 10,
  maxProgress: 600,
  item: {
    item_id: 6596,
    count: 1,
    type: "item"
  }
}];
function clearFlagWarHud() {
  main_browser.execute("\n\t\tif(this.AppComponents.FlagWar) this.AppComponents.FlagWar.reset();\n\t\tAPPS.state.hud.showFlagWar = false;\n\t\tAPPS.state.hud.flagWarMenuOffset = 0;\n\t\tAPPS.state.hud.flag_time = -1;\n\t\tAPPS.state.hud.flag_war_carry_hint = false;\n\t\tAPPS.state.hud.flag_war_place_hint = false;\n\t\tAPPS.state.hud.interact = false;\n\t\tAPPS.state.hud.progressManual = false;\n\t\tif(APPS.state.hud.progressBar) APPS.state.hud.progressBar.displayAt = null;\n\t\tif(APPS.state.new_events) APPS.state.new_events.hasFlagStolen = false;\n\t");
}
function clearFlagWarEventMenu() {
  main_browser.execute("\n\t\tif(this.AppComponents.new_events) {\n\t\t\tif(this.AppComponents.new_events.itemModal && this.AppComponents.new_events.itemModal.isFlagWar) {\n\t\t\t\tthis.AppComponents.new_events.closeModal();\n\t\t\t} else {\n\t\t\t\tthis.AppComponents.new_events.resetFlagWarState();\n\t\t\t}\n\t\t}\n\t");
}
function pushFlagWarHudPartial(_0x5105f6, _0x1df598 = null) {
  if ((_0x5105f6.timeToEndEvent == null || _0x5105f6.timeToEndEvent <= 0) && flag_war_event_time_left > 0) {
    _0x5105f6.timeToEndEvent = flag_war_event_time_left;
  }
  const _0x4a21d0 = JSON.stringify(_0x5105f6);
  main_browser.execute("\n\t\tAPPS.state.hud.showFlagWar = true;\n\t\tsetTimeout(() => {\n\t\t\tif (this.AppComponents.FlagWar) {\n\t\t\t\tthis.AppComponents.FlagWar.syncPartial(" + _0x4a21d0 + ");\n\t\t\t\t" + (Array.isArray(_0x1df598) && _0x1df598.length ? "this.AppComponents.FlagWar.showPrizeReward(" + JSON.stringify(_0x1df598) + ");" : "") + "\n\t\t\t}\n\t\t}, 0);\n\t");
}
function buildFlagWarHudTargets(_0xee94e5, _0x12fb0e, _0x531c6a, _0x1d746f) {
  const _0x1038f2 = _0x1d746f == null || isNaN(parseInt(_0x1d746f)) ? _0xee94e5 : parseInt(_0x1d746f);
  return FLAG_WAR_PRIZES.map((_0x289ce9, _0x16c0a7) => {
    const _0x37e467 = _0x1038f2 >= _0x289ce9.needFlags;
    const _0x32fed3 = parseInt(_0x12fb0e[_0x16c0a7]);
    const _0x45bedf = Math.max(0, isNaN(_0x32fed3) ? _0x289ce9.maxProgress : _0x32fed3);
    const _0x193a07 = _0x37e467 && _0x45bedf > 0 && _0x45bedf < _0x289ce9.maxProgress;
    const _0xc12320 = _0x37e467 && _0x45bedf === _0x289ce9.maxProgress;
    const _0x4bb3ea = _0x37e467 && _0x45bedf === 0 && _0x531c6a === "active";
    const _0x308174 = _0x37e467 && _0x531c6a !== "active" && _0x45bedf < _0x289ce9.maxProgress;
    return {
      id: _0x289ce9.id,
      totalFlags: _0x289ce9.needFlags,
      hasStarted: _0x37e467 && (_0x193a07 || _0xc12320 || _0x4bb3ea || _0x308174),
      timeLeft: _0x45bedf,
      maxProgress: _0x289ce9.maxProgress,
      completed: false,
      awaitingPrize: _0x4bb3ea,
      item: _0x289ce9.item
    };
  });
}
function pushFlagWarPrizeTimers(_0x4c77a2, _0x245747, _0x2efd6e, _0x4ef68a, _0x19d34b, _0x401341, _0x39d760 = null) {
  const _0x14b61e = parseInt(_0x19d34b);
  if (!isNaN(_0x14b61e) && _0x14b61e > 0) {
    flag_war_event_time_left = _0x14b61e;
  }
  const _0x207766 = parseInt(_0x401341);
  pushFlagWarHudPartial({
    timeToEndEvent: !isNaN(_0x14b61e) && _0x14b61e > 0 ? _0x14b61e : flag_war_event_time_left,
    mainFlagStatus: _0x2efd6e || "active",
    mainFlagRespawn: parseInt(_0x4ef68a) || 0,
    collectedFlags: parseInt(_0x4c77a2) || 0,
    prizeFlags: isNaN(_0x207766) ? parseInt(_0x4c77a2) || 0 : _0x207766,
    targets: buildFlagWarHudTargets(_0x4c77a2, _0x245747, _0x2efd6e, _0x401341)
  }, _0x39d760);
}
function setFlagWarInteract(_0x231c7f) {
  at_flag_war = _0x231c7f;
  if (_0x231c7f == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
}
function updateFlagWarKeyHints() {
  const _0x138472 = flag_war_billiard_active && (flag_war_carrying || flag_war_participation_placing);
  const _0x1a600f = flag_war_carrying && !flag_war_billiard_active;
  main_browser.execute("APPS.state.hud.flag_war_carry_hint = " + (_0x1a600f ? "true" : "false") + ";APPS.state.hud.flag_war_place_hint = " + (_0x138472 ? "true" : "false") + ";");
}
function clearFlagWarParticipantState() {
  if (localplayer && mp.players.exists(localplayer)) {
    destroyCarrierFlag(localplayer.remoteId);
  }
  hideFlagHudDelivery();
  hideFlagWarTakeProgress();
  clearFlagWarHud();
  clearFlagWarEventMenu();
  setFlagWarInteract(false);
  flag_war_carrying = false;
  flag_war_carry_owner_fam = 0;
  flag_war_placement = false;
  flag_war_participation_placing = false;
  flag_war_billiard_active = false;
  updateFlagWarKeyHints();
  flagWarOwnMarker = null;
  flagWarOwnMarkerActive = false;
}
function resetFlagWarClientState() {
  clearFlagWarParticipantState();
  flag_war_event_time_left = 0;
}
function showFlagHudDelivery(_0x8d278c) {
  main_browser.execute("APPS.state.hud.flag_time = " + _0x8d278c + ";");
}
function hideFlagHudDelivery() {
  main_browser.execute("APPS.state.hud.flag_time = -1;");
}
function showFlagWarTakeProgress(_0x19dbd4 = 10) {
  try {
    const _0x3be2b6 = parseInt(_0x19dbd4);
    flagWarTakeProgressActive = true;
    const _0x4b556a = {
      progress: 0,
      delay: 100,
      duration: !isNaN(_0x3be2b6) && _0x3be2b6 > 0 ? _0x3be2b6 : 10,
      isIncrease: true,
      title: language["Захват флага"][curr_lang],
      displayAt: "center"
    };
    main_browser.execute("APPS.state.hud.progressManual = false;APPS.state.hud.progressBar = " + JSON.stringify(_0x4b556a) + ";");
  } catch (_0x1fdd5e) {
    mp.console.logInfo("[flagWar] showFlagWarTakeProgress: " + _0x1fdd5e.message);
  }
}
function hideFlagWarTakeProgress() {
  try {
    flagWarTakeProgressActive = false;
    main_browser.execute("APPS.state.hud.progressManual=false;if(APPS.state.hud.progressBar) APPS.state.hud.progressBar.displayAt=null;");
  } catch (_0xd3ee9f) {
    mp.console.logInfo("[flagWar] hideFlagWarTakeProgress: " + _0xd3ee9f.message);
  }
}
mp.events.add("Client_FlagWarStart", _0x1eedb0 => {
  flag_war_event_active = true;
  const _0xe2c39a = parseInt(_0x1eedb0);
  if (!isNaN(_0xe2c39a) && _0xe2c39a > 0) {
    flag_war_event_time_left = _0xe2c39a;
  }
  startFlagWarCarrierSync();
});
mp.events.add("Client_FlagWarLoginSync", (_0x1fd79b, _0x273119, _0x4191c0, _0xe2b79e, _0x440fe4, _0x18f173) => {
  setTimeout(() => {
    flag_war_event_active = true;
    const _0xf51314 = parseInt(_0x440fe4);
    if (!isNaN(_0xf51314) && _0xf51314 > 0) {
      flag_war_event_time_left = _0xf51314;
    }
    startFlagWarCarrierSync();
    let _0x2792c2 = [0, 0, 0, 0];
    try {
      _0x2792c2 = JSON.parse(_0x1fd79b);
    } catch (_0x264e12) {}
    pushFlagWarPrizeTimers(_0x273119, _0x2792c2, _0x4191c0, _0xe2b79e, _0x440fe4, _0x18f173);
  }, 1000);
});
mp.events.add("Client_FlagWarInteract", _0x4f8032 => {
  setFlagWarInteract(_0x4f8032);
});
mp.events.add("Client_FlagWarTakeProgress", (_0x3dc41, _0x535f43) => {
  if (loggedin) {
    if (_0x3dc41 === true || _0x3dc41 === 1) {
      showFlagWarTakeProgress(_0x535f43);
    } else {
      hideFlagWarTakeProgress();
    }
  }
});
mp.events.add("Client_FlagWarCarryState", (_0x5a7c8c, _0x26065c, _0xf292ce, _0xad4556, _0x5eac0b) => {
  flag_war_carrying = _0x5a7c8c;
  flag_war_carry_owner_fam = _0x5a7c8c == 1 && parseInt(_0x26065c) || 0;
  flag_war_placement = _0xad4556 == 1;
  if (_0x5a7c8c == 1 && _0xf292ce != null) {
    flag_war_place_color = isValidFlagColor(_0xf292ce) ? parseInt(_0xf292ce) : 0;
  }
  if (localplayer && mp.players.exists(localplayer)) {
    if (_0x5a7c8c == 1) {
      const _0x1fd963 = parseInt(_0x26065c);
      const _0x2f7c47 = parseInt(_0xf292ce);
      if (isNaN(_0x1fd963) || isNaN(_0x2f7c47)) {
        return;
      }
      hideFlagWarTakeProgress();
      if (!flag_war_event_active) {
        flag_war_event_active = true;
        startFlagWarCarrierSync();
      }
      const _0x344966 = {
        ownerFam: _0x1fd963,
        flagColor: _0x2f7c47
      };
      syncPlayerCarrierFlag(localplayer, _0x344966);
      setTimeout(() => {
        syncPlayerCarrierFlag(localplayer, _0x344966);
      }, 150);
      setTimeout(() => {
        syncPlayerCarrierFlag(localplayer);
      }, 500);
      if (_0xad4556 != 1) {
        const _0x515d9b = parseInt(_0x5eac0b);
        showFlagHudDelivery(!isNaN(_0x515d9b) && _0x515d9b > 0 ? _0x515d9b : 300);
      }
      updateFlagWarKeyHints();
    } else {
      hideFlagHudDelivery();
      syncPlayerCarrierFlag(localplayer);
      updateFlagWarKeyHints();
    }
  }
});
mp.events.add("Client_FlagWarCanPlace", _0xab75f3 => {
  flag_war_place_color = isValidFlagColor(_0xab75f3) ? parseInt(_0xab75f3) : 0;
});
mp.events.add("Client_FlagWarRoute", (_0x1087f8, _0x3ec8f6, _0x3caabc) => {
  SetGPSLocation(_0x1087f8, _0x3ec8f6, _0x3caabc, true);
});
mp.events.add("Client_SetWaypointToFamFlag", _0x2d4a85 => {
  if (!loggedin) {
    return;
  }
  const _0x3e1f0a = parseInt(_0x2d4a85);
  if (_0x3e1f0a) {
    mp.events.callRemote("Server_FlagWarRouteToFlag", _0x3e1f0a);
  } else {
    mp.events.callRemote("Server_FlagWarRouteToOwnFlag");
  }
});
mp.events.add("Client_FlagWarLoadEventMenu", () => {
  if (loggedin) {
    mp.events.callRemote("Server_FlagWarLoadEventMenu");
  }
});
mp.events.add("Client_FlagWarTakeFlagFromMenu", () => {
  if (loggedin) {
    mp.events.callRemote("Server_FlagWarTakeFlagFromMenu");
  }
});
mp.events.add("Client_FlagWarParticipationPlaceStart", _0x1a7983 => {
  if (loggedin) {
    flag_war_participation_placing = true;
    flag_war_place_color = isValidFlagColor(_0x1a7983) ? parseInt(_0x1a7983) : 0;
    flag_war_placement = true;
    flag_war_carrying = false;
    mp.events.call("Client_Set_Billiard", 29, _0x1a7983);
  }
});
mp.events.add("Client_FlagWarParticipationPlaceEnd", () => {
  flag_war_participation_placing = false;
  flag_war_placement = false;
  updateFlagWarKeyHints();
});
mp.events.add("Client_FlagWarParticipationPlaceCanceled", () => {
  if (flag_war_participation_placing) {
    flag_war_participation_placing = false;
    flag_war_placement = false;
    updateFlagWarKeyHints();
    mp.events.callRemote("Server_FlagWarCancelParticipationPlace");
  }
});
mp.events.add("Client_FlagWarEventMenu", _0x516de1 => {
  if (loggedin) {
    try {
      const _0x15c2ec = JSON.parse(_0x516de1);
      main_browser.execute("if(this.AppComponents.new_events) this.AppComponents.new_events.setFlagWarMenuData(" + JSON.stringify(_0x15c2ec) + ");");
    } catch (_0x5904e6) {}
  }
});
mp.events.add("Client_FlagWarOpenMenu", _0x19d8f6 => {
  mp.events.call("Client_FlagWarEventMenu", _0x19d8f6);
});
mp.events.add("Client_FlagWarSync", (_0x5d7665, _0x3601b6, _0x4c8d57, _0x248ac2, _0x4e1986) => {
  if (!loggedin) {
    return;
  }
  const _0x2ee3bb = parseInt(_0x5d7665);
  if (!isNaN(_0x2ee3bb) && _0x2ee3bb > 0) {
    flag_war_event_time_left = _0x2ee3bb;
  }
  pushFlagWarHudPartial({
    timeToEndEvent: !isNaN(_0x2ee3bb) && _0x2ee3bb > 0 ? _0x2ee3bb : flag_war_event_time_left,
    collectedFlags: parseInt(_0x3601b6) || 0,
    mainFlagStatus: _0x248ac2 || (_0x4c8d57 ? "active" : "stolen"),
    mainFlagRespawn: parseInt(_0x4e1986) || 0
  });
});
mp.events.add("Client_FlagWarPrizeTimers", (_0x279fc0, _0x5346b9, _0x1e7aad, _0x1474b2, _0x512ebc, _0x12e45d) => {
  if (!loggedin) {
    return;
  }
  let _0x33226f = [0, 0, 0, 0];
  try {
    _0x33226f = JSON.parse(_0x279fc0);
  } catch (_0xfca63a) {}
  pushFlagWarPrizeTimers(_0x5346b9, _0x33226f, _0x1e7aad, _0x1474b2, _0x512ebc, _0x12e45d);
});
mp.events.add("Client_FlagWarFullSync", (_0x7f09d0, _0x7858c0, _0xf476c9, _0x19dd07, _0x5cf8c0, _0x47f183, _0x14cb0d) => {
  if (!loggedin) {
    return;
  }
  const _0x2b82d8 = parseInt(_0x7f09d0);
  if (!isNaN(_0x2b82d8) && _0x2b82d8 > 0) {
    flag_war_event_time_left = _0x2b82d8;
  }
  const _0xe21074 = JSON.parse(_0x47f183);
  pushFlagWarHudPartial({
    timeToEndEvent: !isNaN(_0x2b82d8) && _0x2b82d8 > 0 ? _0x2b82d8 : flag_war_event_time_left,
    collectedFlags: parseInt(_0x7858c0) || 0,
    mainFlagStatus: _0x19dd07 || (_0xf476c9 ? "active" : "stolen"),
    mainFlagRespawn: parseInt(_0x5cf8c0) || 0
  });
  pushFlagWarPrizeTimers(_0x7858c0, _0xe21074, _0x19dd07, _0x5cf8c0, _0x7f09d0, _0x14cb0d);
});
mp.events.add("Client_FlagWarPrize", (_0x162525, _0x227902, _0x293eaf, _0x2dcf8e, _0x336f35, _0x59eccf, _0x20b157) => {
  if (!loggedin) {
    return;
  }
  let _0x2d2ebd = [];
  try {
    _0x2d2ebd = JSON.parse(_0x162525);
  } catch (_0x1b80e6) {}
  if (!Array.isArray(_0x2d2ebd)) {
    _0x2d2ebd = [];
  }
  let _0x5ef302 = [0, 0, 0, 0];
  try {
    _0x5ef302 = JSON.parse(_0x227902);
  } catch (_0x1ab239) {}
  pushFlagWarPrizeTimers(_0x293eaf, _0x5ef302, _0x2dcf8e, _0x336f35, _0x59eccf, _0x20b157, _0x2d2ebd);
});
mp.events.add("Client_FlagWarOwnFlagMarker", (_0x172458, _0x9bc9c9, _0x47e7f2, _0x2092c1) => {
  if (_0x2092c1 == 1) {
    flagWarOwnMarker = new mp.Vector3(_0x172458, _0x9bc9c9, _0x47e7f2);
    flagWarOwnMarkerActive = true;
  } else {
    flagWarOwnMarker = null;
    flagWarOwnMarkerActive = false;
  }
});
mp.events.add("Client_FlagWarFamilyRemoved", () => {
  clearFlagWarParticipantState();
});
mp.events.add("Client_ChangeFamilyState", _0x524da5 => {
  const _0x8c4cd9 = parseInt(_0x524da5);
  if (!_0x8c4cd9 || _0x8c4cd9 <= 0) {
    clearFlagWarParticipantState();
  } else if (loggedin && flag_war_event_active) {
    mp.events.callRemote("Server_FlagWarRequestJoinSync");
  }
});
mp.events.add("Client_FlagWarEnd", () => {
  flag_war_event_active = false;
  stopFlagWarCarrierSync();
  resetFlagWarClientState();
});
mp.events.add("Client_Set_Billiard", _0x30a090 => {
  if (_0x30a090 == 29 || _0x30a090 == 30) {
    flag_war_billiard_active = true;
    updateFlagWarKeyHints();
    if (_0x30a090 == 30 && localplayer && mp.players.exists(localplayer)) {
      syncPlayerCarrierFlag(localplayer);
    }
  }
});
mp.events.add("Client_FlagWarRefreshCarrier", () => {
  if (localplayer && mp.players.exists(localplayer)) {
    syncPlayerCarrierFlag(localplayer);
  }
  updateFlagWarKeyHints();
});
mp.events.addDataHandler("flagWar", (_0x3fed09, _0x1a03d1) => {
  if (!_0x3fed09 || _0x3fed09.type !== "player") {
    return;
  }
  const _0x52f71a = decodeFlagWarVariable(_0x1a03d1);
  if (flag_war_event_active || _0x3fed09 === localplayer && _0x52f71a) {
    if (_0x52f71a) {
      if (_0x3fed09.handle !== 0) {
        flagWarPendingCarriers.delete(_0x3fed09.remoteId);
        syncPlayerCarrierFlag(_0x3fed09, _0x52f71a);
      } else {
        flagWarPendingCarriers.set(_0x3fed09.remoteId, _0x52f71a);
      }
      return;
    } else {
      if (_0x3fed09 === localplayer) {
        hideFlagHudDelivery();
      }
      destroyCarrierFlag(_0x3fed09.remoteId);
      return;
    }
  } else {
    return undefined;
  }
});
mp.events.add("entityStreamIn", _0x4b41d3 => {
  if (!flag_war_event_active || !_0x4b41d3 || _0x4b41d3.type !== "player") {
    return;
  }
  syncPlayerCarrierFlag(_0x4b41d3, flagWarPendingCarriers.get(_0x4b41d3.remoteId) || null);
});
mp.events.add("entityStreamOut", _0x250b87 => {
  if (_0x250b87 && _0x250b87.type === "player") {
    destroyCarrierFlag(_0x250b87.remoteId);
  }
});
mp.events.add("playerEnterVehicle", () => {
  if (flag_war_event_active && loggedin && localplayer && mp.players.exists(localplayer)) {
    syncPlayerCarrierFlag(localplayer);
  }
});
mp.events.add("playerLeaveVehicle", () => {
  if (flag_war_event_active && loggedin && localplayer && mp.players.exists(localplayer)) {
    syncPlayerCarrierFlag(localplayer);
  }
});
mp.events.add("render", () => {
  drawCarriedFlagWarLabels();
});