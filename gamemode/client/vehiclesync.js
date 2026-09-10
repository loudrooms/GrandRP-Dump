mp.game.vehicle.defaultEngineBehaviour = false;
global.vehicle_engine = false;
global.cant_enable_engine = new Date().getTime();
global.fail_turn_engine_count = 0;
mp.events.add("VehStream_SetEngineStatus", function (_0x5eb7a5, _0x3ec6c3, _0x365b50 = false, _0x22ef49 = false) {
  try {
    const _0x23d476 = mp.vehicles.atRemoteId(parseInt(_0x5eb7a5));
    if (!_0x23d476) {
      return;
    }
    if (localplayer.vehicle && _0x23d476 == localplayer.vehicle) {
      if (mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model)) {
        return;
      }
      vehicle_engine = _0x3ec6c3;
      if (_0x3ec6c3) {
        main_browser.execute("APPS.state.hud.engine = true;");
      } else {
        main_browser.execute("APPS.state.hud.engine = false;");
      }
      if (_0x3ec6c3 == 0 && cruize_state) {
        mp.events.call("Stop_Cruize");
      }
    }
    if (_0x3ec6c3 == 1) {
      TurnOnEngine(_0x23d476);
    } else {
      _0x23d476.setEngineOn(_0x3ec6c3, _0x3ec6c3, !_0x3ec6c3);
    }
    _0x23d476.setUndriveable(!_0x3ec6c3);
    if (_0x365b50 == 1) {
      mp.game.cam.shakeGameplayCam("VIBRATE_SHAKE", 1);
      fail_turn_engine_count = getRandomInt(0, 4);
      if (player_work_pilot == 1) {
        if (curr_lang == "ru") {
          StartCustomSound("when_pilot_damage", "sounds/work_pilot/ru/when_pilot_damage.ogg", 0.2);
        } else if (curr_lang == "en") {
          StartCustomSound("when_pilot_damage", "sounds/work_pilot/en/when_pilot_damage.ogg", 0.2);
        }
      }
    } else if (_0x22ef49 == 1) {
      mp.game.cam.shakeGameplayCam("VIBRATE_SHAKE", 1);
      cant_enable_engine = new Date().getTime();
      main_browser.execute("APPS.state.hud.engine = false;");
    }
  } catch (_0x24163a) {}
});
mp.events.add("VehStream_ClearVelocity", _0xeada1e => {
  try {
    const _0x1ad642 = mp.vehicles.atRemoteId(parseInt(_0xeada1e));
    if (_0x1ad642 && mp.vehicles.exists(_0x1ad642) && _0x1ad642 !== undefined) {
      _0x1ad642.setVelocity(0, 0, 0);
    }
  } catch (_0x5d35e8) {}
});
const lockStatusShowTimers = new Map();
function setVehicleLockStatusFx(_0xdb19d1, _0x4f285b) {
  try {
    _0xdb19d1.setLights(_0x4f285b ? 2 : 0);
    _0xdb19d1.setInteriorLight(!!_0x4f285b);
    _0xdb19d1.setIndicatorLights(1, !!_0x4f285b);
    _0xdb19d1.setIndicatorLights(0, !!_0x4f285b);
  } catch (_0x1e9369) {}
}
mp.events.add("Client_VehicleLockStatusShow", (_0x153530, _0x5d6fe8) => {
  try {
    const _0x51f7e1 = mp.vehicles.atRemoteId(parseInt(_0x153530));
    if (!_0x51f7e1 || !mp.vehicles.exists(_0x51f7e1)) {
      return;
    }
    const _0x384294 = lockStatusShowTimers.get(_0x153530);
    if (_0x384294) {
      clearTimeout(_0x384294);
    }
    const _0x330fdc = setTimeout(() => {
      lockStatusShowTimers.delete(_0x153530);
      if (_0x51f7e1 && mp.vehicles.exists(_0x51f7e1)) {
        setVehicleLockStatusFx(_0x51f7e1, false);
      }
    }, _0x5d6fe8);
    lockStatusShowTimers.set(_0x153530, _0x330fdc);
    setVehicleLockStatusFx(_0x51f7e1, true);
  } catch (_0x3ebc54) {}
});
mp.events.add("VehicleSetDoorsShut", _0x4c3b15 => {
  if (_0x4c3b15 && mp.vehicles.exists(_0x4c3b15)) {
    for (let _0x10ae10 = 0; _0x10ae10 < 4; _0x10ae10++) {
      _0x4c3b15.setDoorShut(_0x10ae10, true);
    }
  }
});
mp.events.add("VehStream_SetLockStatus", (_0x449db2, _0x23edd2) => {
  try {
    const _0x1a6802 = mp.vehicles.atRemoteId(parseInt(_0x449db2));
    if (_0x1a6802 && mp.vehicles.exists(_0x1a6802) && _0x1a6802 !== undefined) {
      if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle && _0x1a6802 == localplayer.vehicle) {
        if (_0x23edd2) {
          main_browser.execute("APPS.state.hud.lock = true;");
        } else {
          main_browser.execute("APPS.state.hud.lock = false;");
        }
      }
      if (_0x23edd2) {
        _0x1a6802.setDoorsLocked(2);
        mp.game.audio.playSoundFromEntity(1, "Remote_Control_Close", _0x1a6802.handle, "PI_Menu_Sounds", true, 0);
      } else {
        _0x1a6802.setDoorsLocked(1);
        mp.game.audio.playSoundFromEntity(1, "Remote_Control_Open", _0x1a6802.handle, "PI_Menu_Sounds", true, 0);
      }
    }
  } catch (_0x2e399f) {}
});
const NotABike = [1131912276, 448402357, 3458454463, 4108429845, 1127861609, 3061159916, 3894672200, 3005788552];
global.carlic_process = false;
mp.events.add("Client_CarLicProcess", _0x5e3bdf => {
  carlic_process = _0x5e3bdf;
});
let helicopterlic = false;
mp.events.add("Client_SetHelicopterLic", _0x1f7b14 => {
  helicopterlic = _0x1f7b14;
});
let boatlic = false;
mp.events.add("Client_SetBoatLic", _0x46dc7f => {
  boatlic = _0x46dc7f;
});
let carlic = false;
mp.events.add("Client_SetCarLic", _0x5efaa7 => {
  carlic = _0x5efaa7;
});
mp.events.add("GetVehicleLicenses", _0x53eee4 => {
  try {
    const _0x2323b8 = mp.vehicles.atRemoteId(parseInt(_0x53eee4));
    if (!_0x2323b8 || !mp.vehicles.exists(_0x2323b8)) {
      return;
    }
    if (mp.game.vehicle.isThisModelACar(_0x2323b8.model) || mp.game.vehicle.isThisModelABike(_0x2323b8.model) || mp.game.vehicle.isThisModelAQuadbike(_0x2323b8.model)) {
      let _0x32b0e6 = carlic;
      if (mp.game.vehicle.isThisModelABike(_0x2323b8.model) && NotABike.indexOf(_0x2323b8.model) != -1 || _0x2323b8.model == 2282120281 || _0x2323b8.model == 2190251782 || _0x2323b8.model == 2563579362) {
        _0x32b0e6 = true;
      }
      if (_0x32b0e6 != 1) {
        mp.game.ui.notifications.show(language["У Вас нет водительских прав"][curr_lang], false, 0, 6);
        localplayer.clearTasksImmediately();
      }
    } else if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle && helicopterlic != 1 && (mp.game.vehicle.isThisModelAHeli(_0x2323b8.model) || mp.game.vehicle.isThisModelAPlane(_0x2323b8.model))) {
      mp.game.ui.notifications.show(language["У Вас нет лицензии на управление воздушным транспортом"][curr_lang], false, 0, 6);
      localplayer.clearTasksImmediately();
    } else if (boatlic != 1 && mp.game.vehicle.isThisModelABoat(_0x2323b8.model)) {
      if (bSummer2025 && _0x2323b8.model == 3983945033 || bSummer2026 && (_0x2323b8.model == mp.game.joaat("toro2") || _0x2323b8.model == mp.game.joaat("jetmax") || _0x2323b8.model == mp.game.joaat("toro") || _0x2323b8.model == mp.game.joaat("banana"))) {
        return;
      }
      mp.game.ui.notifications.show(language["У Вас нет лицензии на управление водным транспортом"][curr_lang], false, 0, 6);
      localplayer.clearTasksImmediately();
    }
  } catch (_0x55f0f6) {
    mp.gui.chat.push("veh_lic.error: " + _0x55f0f6);
  }
});
mp.events.add("entityStreamIn", _0x2c453d => {
  if (_0x2c453d !== null) {
    try {
      if (_0x2c453d.type !== "vehicle") {
        return;
      }
      if (_0x2c453d && mp.vehicles.exists(_0x2c453d)) {
        if (_0x2c453d.getClass() === 18 && _0x2c453d.hasVariable("silentMode")) {
          if (_0x2c453d.getVariable("silentMode")) {
            _0x2c453d.setSirenSound(true);
          } else {
            _0x2c453d.setSirenSound(false);
          }
        }
        _0x2c453d.being_attached &&= undefined;
        _0x2c453d.setLodDist(mp.storage.data.vehicle_lod_distance);
        if (new_version == 0) {
          let _0x109834 = true;
          let _0x3a6d53 = false;
          _0x2c453d.trackVisibility();
          for (let _0x3d0fa5 = 0; _0x3d0fa5 < 8; _0x3d0fa5++) {
            _0x2c453d.setDoorBreakable(_0x3d0fa5, false);
          }
          setTimeout(() => {
            for (let _0x24e426 = 0; _0x24e426 < 8; _0x24e426++) {
              if (_0x2c453d && mp.vehicles.exists(_0x2c453d)) {
                _0x2c453d.setDoorBreakable(_0x24e426, true);
              }
            }
          }, 1500);
          _0x2c453d.setUndriveable(true);
          if (_0x3a6d53 != null && _0x109834 !== "undefined") {
            _0x2c453d.setEngineOn(_0x3a6d53, _0x3a6d53, !_0x3a6d53);
            _0x2c453d.setUndriveable(true);
            if (new_version != 1) {
              if (_0x2c453d.getVariable("Locked")) {
                _0x2c453d.setDoorsLocked(2);
              } else {
                _0x2c453d.setDoorsLocked(1);
              }
            }
          }
        }
        if (_0x2c453d.hasVariable("LightColor")) {
          const _0x1eb8b1 = _0x2c453d.getVariable("LightColor");
          if (_0x1eb8b1 != null) {
            _0x2c453d.toggleMod(22, true);
            SetVehicleLightColor(_0x2c453d, _0x1eb8b1);
          }
        }
        if (_0x2c453d.hasVariable("TrunkOpened")) {
          if (_0x2c453d.getVariable("TrunkOpened") == 1) {
            _0x2c453d.setDoorOpen(5, false, false);
          } else {
            _0x2c453d.setDoorShut(5, true);
          }
        }
        if (mp.players.local.vehicle && player_work_pilot && mp.game.vehicle.isThisModelAPlane(_0x2c453d.model)) {
          mp.players.local.vehicle.setNoCollision(_0x2c453d.handle, false);
          _0x2c453d.setAlpha(230);
        }
        if (_0x2c453d.hasVariable("markAsDrone")) {
          const _0x17d458 = _0x2c453d.getVariable("markAsDrone");
          if (_0x17d458) {
            _0x2c453d.setAlpha(0);
            drone.playSound(_0x2c453d.remoteId, "drone", "Flight_Loop", "DLC_Arena_Drone_Sounds");
            _0x2c453d.setCanBeDamaged(false);
            _0x2c453d.setInvincible(true);
            attachObjects(_0x2c453d, drones_pressets[_0x17d458 - 1]);
          }
        }
      }
    } catch (_0x19bbea) {}
  }
});
mp.events.addDataHandler("LightColor", function (_0x1ea4f0, _0x589b4a, _0x5998a8) {
  if (_0x1ea4f0 && _0x1ea4f0.type === "vehicle" && _0x589b4a != null) {
    _0x589b4a = parseInt(_0x589b4a);
    _0x1ea4f0.toggleMod(22, true);
    SetVehicleLightColor(_0x1ea4f0, _0x589b4a);
  }
});
mp.events.add("VehicleDoorSystem", function (_0x4aea76, _0x15951b, _0x50a787 = -1) {
  try {
    const _0x9bacef = mp.vehicles.atRemoteId(parseInt(_0x4aea76));
    if (_0x9bacef) {
      if (_0x50a787 != -1) {
        if (_0x50a787 == 0) {
          _0x9bacef.setDoorShut(_0x15951b, false);
        } else {
          _0x9bacef.setDoorOpen(_0x15951b, false, false);
        }
        return;
      }
      if (_0x9bacef.getDoorAngleRatio(_0x15951b) > 0.1) {
        _0x9bacef.setDoorShut(_0x15951b, false);
      } else {
        _0x9bacef.setDoorOpen(_0x15951b, false, false);
      }
    }
  } catch (_0x4ae8f5) {
    mp.gui.chat.push("door_system.error: " + _0x4ae8f5);
  }
});
mp.events.add("VehicleWindowSystem", function (_0x32991b, _0x39d324, _0x5e8da4) {
  try {
    const _0xcbf4b = mp.vehicles.atRemoteId(parseInt(_0x32991b));
    if (_0xcbf4b) {
      if (_0x5e8da4 == 1) {
        _0xcbf4b.rollDownWindow(_0x39d324);
      } else {
        _0xcbf4b.rollUpWindow(_0x39d324);
      }
    }
  } catch (_0x4ff07b) {
    mp.gui.chat.push("veh_window.error: " + _0x4ff07b);
  }
});