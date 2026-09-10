global.last_engine_turned_id = -1;
global.engine_notif_count = 0;
global.TurnOnEngine = function (_0x1b4d6f) {
  last_engine_turned_id = _0x1b4d6f.id;
  _0x1b4d6f.setEngineOn(true, true, false);
};
global.stopVehicleDueToNoFuel = function () {
  if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) === localplayer.handle) {
    if (!mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model)) {
      vehicle_engine = false;
      localplayer.vehicle.setEngineOn(false, false, true);
      localplayer.vehicle.setUndriveable(true);
      main_browser.execute("APPS.state.hud.engine = false;");
    }
  }
};
mp.events.add("playerLeaveVehicle", (_0x1c7be3, _0x2bf4b6) => {
  UpdatePositionAC();
  engine_notif_count = 0;
  last_engine_turned_id = -1;
  main_browser.execute("APPS.state.hud.in_veh = false;");
  if (is_radar_enabled) {
    is_radar_enabled = false;
    hudHideRadarKeyHint();
  }
  last_f_veh &&= null;
  if (new_version == 1 && fly.flying == 1) {
    localplayer.setAlpha(0);
  }
});
const default_vehicles_to_boost = [83136452, 3162245632, 1456336509, 4080061290, 3126015148, 970598228, 872704284, 767087018, 3847255899, 3253274834, 1274868363, 2072687711, 3249425686, 108773431, 3728579874, 2889029532, 3460613305, 3963499524, 2997294755, 544021352, 4086055493, 482197771, 4152024626, 1032823388, 2833484545, 2765724541, 2360515092, 3884762073, 3787471536, 2537130571, 1886268224, 384071873, 159274291, 500482303, 1504306544, 3312836369, 633712403, 2598821281, 1392481335, 418536135, 2246633323, 1034187331, 1987142870, 2536829930, 2465164804, 234062309, 1352136073, 819197656, 1663218586, 272929391, 338562499, 2672523198, 917809321, 3812247419, 1031562256, 408192225, 3918533058, 3612858749, 1591739866, 2997294755, 2445973230, 867799010, 3620039993, 719660200, 3078201489, 3981782132, 2983812512, 3003014393, 1426219628, 1234311532, 3062131285, 1034187331, 2123327359, 2067820283, 1939284556, 3630826055, 3296789504, 2891838741];
const is_additional_boost_veh = [1044193113, 3160260734, 2566281822, 2936769864];
global.player_vip = 0;
global.player_viplevel = 0;
global.vipFreeRepairUsed = false;
global.TEMP_DISABLE_VEHICLE_DRIFT_MODE = true;
global.HasVipDriftMode = function () {
  return !global.TEMP_DISABLE_VEHICLE_DRIFT_MODE && player_vip > 0 && (player_viplevel | 0) >= 5;
};
global.HasVipExtraFastSlot = function () {
  return player_vip > 0 && (player_viplevel | 0) >= 3;
};
global.HasVipExtraBackpackSlots = function () {
  return player_vip > 0 && (player_viplevel | 0) >= 5;
};
mp.events.add("Client_VipStatus", (_0x1b2839, _0x37060 = 0) => {
  player_vip = _0x1b2839;
  player_viplevel = _0x37060 || 0;
  if (typeof main_browser != "undefined" && main_browser) {
    main_browser.execute("APPS.state.hud_mobile.vip = " + (player_vip > 0 ? 1 : 0) + "; APPS.state.hud_mobile.viplevel = " + player_viplevel + ";");
    main_browser.execute("APPS.state.inventory.prime = " + player_vip + "; APPS.state.inventory.viplevel = " + player_viplevel + ";");
  }
  if (typeof AnimListOpened != "undefined" && AnimListOpened) {
    main_browser.execute("APPS.state.animlist.vip = " + (player_vip > 0 ? 1 : 0) + "; APPS.state.animlist.viplevel = " + player_viplevel + ";");
  }
});
mp.events.add("Client_VipFreeRepairUsed", _0x46071b => {
  vipFreeRepairUsed = !!_0x46071b;
  if (newCircleOpened) {
    main_browser.execute("APPS.state.hud.newCircle.vipFreeRepairUsed = " + vipFreeRepairUsed + ";");
  }
});
const vehicles_with_hidden_hud_info = [4008920556];
let last_speed_boost = 0;
mp.events.add("ShowCarHud", (_0x37e831, _0x36c66d, _0x193395, _0x408521, _0x147859, _0x1b18e1, _0x323feb) => {
  if ((!localplayer.vehicle || localplayer.vehicle.model !== mp.game.joaat("banana")) && (main_browser.execute("APPS.state.hud.belt = false;"), player_vip == 0 ? localplayer.setConfigFlag(32, true) : (localplayer.setConfigFlag(32, false), main_browser.execute("APPS.state.hud.belt_notif = true;"), main_browser.execute("APPS.state.hud.belt = true;"), setTimeout(() => {
    main_browser.execute("APPS.state.hud.belt_notif = false;");
  }, 2500)), fail_turn_engine_count = 0, speedlimit = 0, main_browser.execute("APPS.state.hud.tank_size = " + _0x36c66d + ";"), main_browser.execute("APPS.state.hud.engine_durability = " + _0x193395 + ";"), _0x408521 == 1 ? main_browser.execute("APPS.state.hud.is_premium_oil = 1;") : main_browser.execute("APPS.state.hud.is_premium_oil = 0;"), localplayer.isInAnyVehicle(false) && mp.players.local.vehicle && (mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) ? (main_browser.execute("APPS.state.hud.tank = 0;"), main_browser.execute("APPS.state.hud.is_bicycle = 1;"), vehicle_fuel = 0) : (main_browser.execute("APPS.state.hud.tank = " + _0x1b18e1 + ";"), main_browser.execute("APPS.state.hud.is_bicycle = 0;"), vehicle_fuel = _0x1b18e1), vehicles_with_hidden_hud_info.includes(mp.players.local.vehicle.model) && main_browser.execute("APPS.state.hud.is_bicycle = 1;")), main_browser.execute("APPS.state.hud.in_veh = true;"), localplayer.vehicle)) {
    main_browser.execute("APPS.state.hud.cruize = false;");
    if (mp.players.local.vehicle.getDoorLockStatus() == 2) {
      main_browser.execute("APPS.state.hud.lock = true;");
    } else if (mp.players.local.vehicle.getDoorLockStatus() == 1) {
      main_browser.execute("APPS.state.hud.lock = false;");
    }
    if (white_list_vehicles.indexOf(localplayer.vehicle.model) != -1) {
      main_browser.execute("APPS.state.hud.is_electro_veh = true;");
      main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
    } else {
      main_browser.execute("APPS.state.hud.is_electro_veh = false;");
    }
    if (just_registered == 1 && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle && GlobalCheck() == 0) {
      mp.game.ui.notifications.show(TranslateText("Чтобы завести двигатель используйте {0}", GetKeyCode(mp.storage.data.bind_controls.engine)), false, 0, 2);
    }
    localplayer.vehicle.setReduceGrip(false);
    localplayer.vehicle.setMaxSpeed(99999);
    if (_0x147859) {
      if (_0x147859.DriveBias != 0) {
        localplayer.vehicle.setHandling("fDriveBiasFront", _0x147859.DriveBias);
      }
      if (_0x147859.BrakeBias != 0) {
        localplayer.vehicle.setHandling("fBrakeBiasFront", _0x147859.BrakeBias);
      }
      if (_0x147859.SteeringLock != 0) {
        let _0x468432 = _0x147859.SteeringLock;
        if (_0x468432 <= 2) {
          _0x468432 /= 0.0174533;
        }
        localplayer.vehicle.setHandling("fSteeringLock", _0x468432);
      }
      if (_0x147859.HandBrakeForce != 0 && !_0x323feb) {
        localplayer.vehicle.setHandling("fHandBrakeForce", _0x147859.HandBrakeForce);
      }
      if (_0x147859.TractionCurveMax != 0) {
        localplayer.vehicle.setHandling("fTractionCurveMax", _0x147859.TractionCurveMax);
      }
      if (_0x147859.TractionCurveMin != 0) {
        localplayer.vehicle.setHandling("fTractionCurveMin", _0x147859.TractionCurveMin);
      }
      if (_0x147859.DriftMode != 0) {
        localplayer.vehicle.drift_mode = true;
      } else {
        localplayer.vehicle.drift_mode = false;
      }
    }
    const _0x20eff8 = localplayer.vehicle.model;
    const _0x1290b6 = default_vehicles_to_boost.indexOf(_0x20eff8);
    const _0x94e8dc = is_additional_boost_veh.indexOf(_0x20eff8);
    if (_0x1290b6 != -1) {
      if (_0x37e831) {
        _0x37e831 += 30;
      } else {
        _0x37e831 = 30;
      }
    } else if (_0x94e8dc != -1) {
      if (_0x37e831) {
        _0x37e831 += 45;
      } else {
        _0x37e831 = 45;
      }
    }
    let _0xcd37f7 = 0;
    if (_0x408521 == 1) {
      _0xcd37f7 = 15;
    }
    if (_0x37e831 == null || isNaN(_0x37e831)) {
      localplayer.vehicle.setEnginePowerMultiplier(player_boost + _0xcd37f7);
      localplayer.vehicle.setEngineTorqueMultiplier(player_boost + _0xcd37f7);
    } else {
      last_speed_boost = _0x37e831;
      _0x37e831 += player_boost;
      localplayer.vehicle.setEnginePowerMultiplier(_0x37e831 + _0xcd37f7);
      localplayer.vehicle.setEngineTorqueMultiplier(_0x37e831 + _0xcd37f7);
    }
    if (_0x323feb) {
      const _0x38e731 = parseInt(_0x323feb) * 0.5;
      let _0x25388f = GetMaxAttributeValue("fHandBrakeForce");
      localplayer.vehicle.setHandling("fHandBrakeForce", _0x25388f + _0x38e731);
      _0x25388f = GetMaxAttributeValue("fBrakeForce");
      localplayer.vehicle.setHandling("fBrakeForce", _0x25388f + _0x38e731);
    }
  }
});
global.GetMaxAttributeValue = function (_0x48e665) {
  return 0;
};
let CarPass_deal_type;
let player_boost = 0;
let boost_level = 0;
let boost_level_exp = 0;
mp.events.add("SetPlayerBoostLevel", _0x5c0457 => {
  try {
    if ((_0x5c0457 = parseInt(_0x5c0457)) < 0 || _0x5c0457 > 2) {
      return;
    }
    if (_0x5c0457 == 0) {
      player_boost = -25;
    } else if (_0x5c0457 == 1) {
      player_boost = -5;
    } else if (_0x5c0457 == 2) {
      player_boost = 6;
    }
    boost_level = _0x5c0457;
    boost_level_exp = 0;
    if (localplayer.vehicle) {
      last_speed_boost ||= 0;
      localplayer.vehicle.setEnginePowerMultiplier(last_speed_boost + player_boost);
      localplayer.vehicle.setEngineTorqueMultiplier(last_speed_boost + player_boost);
    }
  } catch (_0x260bb0) {
    mp.gui.chat.push("boost_level.error: " + _0x260bb0);
  }
});
setInterval(function () {
  if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle && boost_level < 2 && localplayer.vehicle.getSpeed() > 0) {
    boost_level_exp++;
    if (boost_level_exp >= 1500) {
      boost_level_exp = 0;
      mp.events.callRemote("Server_BoostVehicleProgress");
    }
  }
}, 1000);
setInterval(function () {
  if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle && vehicle_fuel > 0) {
    if (vehicle_engine || localplayer.vehicle.getIsEngineRunning()) {
      mp.events.callRemote("Server_SetLowerFuel");
    }
  }
}, 30000);
mp.events.add("Client_PremiumOilToggle", _0x1f29dc => {
  try {
    let _0x555711 = 0;
    if (_0x1f29dc == 1) {
      _0x555711 = 15;
      main_browser.execute("APPS.state.hud.is_premium_oil = 1;");
    } else {
      _0x555711 = -15;
      main_browser.execute("APPS.state.hud.is_premium_oil = 0;");
    }
    if (localplayer.vehicle) {
      last_speed_boost ||= 0;
      localplayer.vehicle.setEnginePowerMultiplier(last_speed_boost + player_boost + _0x555711);
      localplayer.vehicle.setEngineTorqueMultiplier(last_speed_boost + player_boost + _0x555711);
    }
  } catch (_0x424345) {
    mp.gui.chat.push("Client_PremiumOilToggle.error", _0x424345);
  }
});
mp.events.add("UpdateBoostLevel", _0x34800f => {
  try {
    if (!localplayer.vehicle) {
      return;
    }
    let _0x250803 = parseInt(_0x34800f) + parseInt(player_boost);
    localplayer.vehicle.setEnginePowerMultiplier(_0x250803);
    localplayer.vehicle.setEngineTorqueMultiplier(_0x250803);
  } catch (_0x2d4bbf) {
    mp.gui.chat.push("boost_level.error: " + _0x2d4bbf);
  }
});
mp.events.add("ChangeVehDurability", _0x499ee2 => {
  main_browser.execute("APPS.state.hud.engine_durability = " + _0x499ee2 + ";");
});
mp.keys.bind(66, true, _0x97b8da => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && !GlobalCheck()) {
    if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) === localplayer.handle && localplayer.vehicle.getClass() === 18) {
      if (localplayer.vehicle.getVariable("silentMode")) {
        mp.game.ui.notifications.show(language["Вы выключили безвучный режим"][curr_lang], false, 0, 6);
      } else {
        mp.game.ui.notifications.show(language["Вы включили безвучный режим"][curr_lang], false, 0, 2);
      }
      mp.events.callRemote("syncSirens", localplayer.vehicle);
    }
  }
});
mp.events.addDataHandler("silentMode", (_0x5c52bd, _0x48433b) => {
  if (_0x5c52bd.type === "vehicle") {
    _0x5c52bd.setSirenSound(_0x48433b);
  }
});
global.car_pass_opened = false;
let last_in_chip_info_opened = false;
mp.events.add("ShowCarInfo", (_0x4412b4, _0x3715ab, _0x93f9b7, _0x18e4f1, _0x485fbe = 0, _0x13a652, _0x3e5081, _0x2ebb5, _0x26b74b = [], _0x53bebf = 0, _0x5d74fe = 0, _0x35bc09 = []) => {
  CloseCircle(1);
  CarPass_deal_type = _0x485fbe;
  let _0x2ba343 = 3;
  if (mp.game.vehicle.isThisModelAPlane(_0x18e4f1)) {
    _0x2ba343 = 0;
  } else if (mp.game.vehicle.isThisModelABicycle(_0x18e4f1)) {
    _0x2ba343 = 1;
  } else if (mp.game.vehicle.isThisModelABoat(_0x18e4f1)) {
    _0x2ba343 = 2;
  } else if (mp.game.vehicle.isThisModelACar(_0x18e4f1)) {
    _0x2ba343 = 3;
  } else if (mp.game.vehicle.isThisModelAHeli(_0x18e4f1)) {
    _0x2ba343 = 4;
  } else if (mp.game.vehicle.isThisModelABike(_0x18e4f1)) {
    _0x2ba343 = 5;
  }
  last_in_chip_info_opened = _0x2ebb5;
  const _0x583153 = "{\"CarInfo\":" + _0x4412b4 + ",\"Durability\":" + _0x3715ab + ",\"veh_owner\":" + _0x93f9b7 + ",\"veh_type\":" + _0x2ba343 + ",\"deal_type\":" + _0x485fbe + ",perfomance_upgrade:[" + _0x3e5081 + "],\"in_chip\":" + _0x2ebb5 + ",\"perfomance_item_level\":[" + _0x13a652 + "],\"upgrade_cost\":[" + _0x26b74b + "],\"upgrade_cost_old\":[" + (_0x35bc09 || []) + "],\"vip_discount\":" + (parseInt(_0x5d74fe) || 0) + ",\"show\":true,\"taxiLicense\":'" + _0x53bebf + "'}";
  main_browser.execute("APPS.state.car_passport = " + _0x583153);
  car_pass_opened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCarPass = function () {
  if (car_pass_opened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.car_passport.show = false;");
    car_pass_opened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (last_in_chip_info_opened) {
      mp.events.callRemote("ServerCloseChipTune");
    } else {
      mp.events.callRemote("ServerCloseCarPass");
    }
  }
};
mp.events.add("CarPass_Action_Button", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CarPass_Action", CarPass_deal_type);
  }
});
mp.events.add("Close_CarPass", () => {
  CloseCarPass();
});
mp.events.add("CarPass_Error", _0x36a7df => {
  if (car_pass_opened) {
    main_browser.execute("APP.sendErrorMessage('" + _0x36a7df + "');");
  }
});
mp.events.add("Client_UpdatePerfomanceLevels", _0x348cca => {
  if (car_pass_opened) {
    main_browser.execute("APPS.state.car_passport.perfomance_item_level = [" + _0x348cca + "];");
  }
});
mp.events.add("Client_InstallNewVehicleDetail", (_0x4bb48b, _0x2e33a3) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_InstallNewVehicleDetail", _0x4bb48b, _0x2e33a3);
  }
});