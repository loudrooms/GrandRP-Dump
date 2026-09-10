global.CarWashOpened = false;
mp.events.add("Client_ShowCarWash", (_0x57f5de, _0x20094a, _0x211b09, _0x2f8623, _0x11a412, _0x3d8510, _0x3c04a3) => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (localplayer.vehicle) {
    localplayer.vehicle.setVelocity(0, 0, 0);
  }
  const _0x2dd387 = {
    owner: _0x57f5de,
    fam_name: _0x20094a,
    is_my_family_owner: _0x211b09,
    can_lock_business: _0x2f8623,
    wash_cost: _0x11a412,
    sponge_cost: _0x3d8510,
    fam_money: _0x3c04a3,
    show: true
  };
  main_browser.execute("APPS.state.washing = " + JSON.stringify(_0x2dd387));
  CarWashOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCarWash = function () {
  if (CarWashOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.washing.show = false;");
    CarWashOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GetFamilyWashingProfit", () => {
  if (CarWashOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetFamilyCarWashProfit");
    }
  }
});
mp.events.add("Client_CloseCarWash", () => {
  CloseCarWash();
});
mp.events.add("Client_WashMyVehicle", () => {
  if (CarWashOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WashMyVehicle");
    }
  }
});
mp.events.add("Client_BuySponge", _0x53fc6c => {
  if (CarWashOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuySponge", _0x53fc6c);
    }
  }
});
mp.events.add("Client_UpdateCarWashFamilyBalance", _0x42cb72 => {
  if (CarWashOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.washing.fam_money = " + _0x42cb72 + ";");
  }
});
global.at_car_wash = false;
mp.events.add("Client_CarWashInteract", _0x19a0d3 => {
  if (_0x19a0d3 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_car_wash = _0x19a0d3;
});
const vehicle_wash = [new mp.Vector3(20.818, -1391.92, 31.971), new mp.Vector3(-699.791, -932.482, 22.661), new mp.Vector3(2524.539, 4194.91, 43.603), new mp.Vector3(170.626, -1718.375, 32.342)];
mp.events.add("Client_VehicleWash", (_0x31f3a2, _0x2fb2d0) => {
  StartParticleEffect("scr_carwash", "ent_amb_car_wash_jet", vehicle_wash[_0x2fb2d0 - 1], 5000, 0, 0, 0);
  if (_0x31f3a2 && mp.vehicles.exists(_0x31f3a2)) {
    _0x31f3a2.setDirtLevel(0);
  }
});
mp.events.add("Client_UseWashKit", (_0x7a231b, _0x2300f8) => {
  const _0x39b4ee = mp.players.atRemoteId(_0x7a231b);
  const _0x9ca4b9 = mp.vehicles.atRemoteId(_0x2300f8);
  if (!mp.players.exists(_0x39b4ee) || !mp.vehicles.exists(_0x9ca4b9)) {
    return;
  }
  mp.events.call("Client_attachObject2", _0x39b4ee.remoteId, "{\"Bone\": 6286, \"Model\": \"v_res_fa_sponge01\", \"PosOffset1\": 0.1,\"PosOffset2\": 0.015,\"PosOffset3\": -0.03, \"RotOffset1\": -178, \"RotOffset2\": -0.2, \"RotOffset3\": 202}");
  global.play_animation2(_0x39b4ee, "move_crouch_proto", "idle", 1, 1, 6000, 1, 0, false, false, false);
  global.play_animation2(_0x39b4ee, "timetable@maid@cleaning_window@base", "base", 1, 16, 6000, 49, 0, false, false, false);
  setTimeout(() => {
    if (mp.vehicles.exists(_0x9ca4b9) && mp.players.exists(_0x39b4ee)) {
      _0x9ca4b9.setDirtLevel(0);
      mp.events.call("Client_detachObject", _0x39b4ee.remoteId);
    }
  }, 6000);
});