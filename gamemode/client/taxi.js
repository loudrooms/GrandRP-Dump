let blipinfo;
let driverblip;
let taxi_name = [];
let taxi_dis = [];
let taxi_playername = [];
let taxi_position = [];
mp.events.add("TaxiShow", (_0x5cb437, _0x21de11, _0x107166, _0x21a967) => {
  taxi_name = _0x5cb437;
  taxi_dis = _0x21de11;
  taxi_playername = _0x107166;
  taxi_position = _0x21a967;
  let _0x30674d = [];
  for (let _0x3603ca = 0; _0x3603ca < _0x5cb437.length; _0x3603ca++) {
    if (taxi_dis[_0x3603ca] != "None") {
      const _0x12633d = mp.game.system.vdist(_0x21a967[_0x3603ca].x, _0x21a967[_0x3603ca].y, _0x21a967[_0x3603ca].z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
      _0x30674d.push("{\"Name\":\"" + taxi_name[_0x3603ca] + "\",\"Distance\":" + Math.round(_0x12633d) + ",\"Discription\":\"" + taxi_dis[_0x3603ca] + "\"}");
    }
  }
  TaxiOpened = true;
  const _0x2e4fd6 = "{\"switch\":2,\"items\":[" + _0x30674d + "],\"show\":true}";
  main_browser.execute("APPS.state.work_taxi = " + _0x2e4fd6);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("TaxiCheckButton", _0x587903 => {
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  let _0x8fd1b6;
  lastCheck = new Date().getTime();
  _0x8fd1b6 = taxi_playername[_0x587903];
  mp.events.callRemote("TaxiAnswer", _0x8fd1b6, _0x587903);
  TaxiBrowserClose();
});
mp.events.add("Client_GetTaxiNPCOrder", () => {
  if (!!TaxiOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetTaxiNPCOrder");
  }
});
mp.events.add("Client_TaxiBrowserClose", () => {
  TaxiBrowserClose();
});
global.TaxiBrowserClose = function () {
  if (TaxiOpened) {
    TaxiOpened = false;
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_taxi.show = false;");
    mp.gui.cursor.show(false, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("CancelTaxiJob");
  }
};
mp.events.add("TaxiBlipCreate", _0x6ed2e9 => {
  blipinfo = mp.blips.new(1, taxi_position[_0x6ed2e9], {
    name: language["Ваш пассажир"][curr_lang],
    color: 83
  });
  blipinfo.setRoute(true);
});
mp.events.add("DriverBlipCreate", _0x1a2da8 => {
  if (driverblip) {
    driverblip.destroy();
  }
  driverblip = mp.blips.new(56, _0x1a2da8, {
    name: language["Ваше такси"][curr_lang],
    color: 4
  });
});
mp.events.add("DriverBlipDestroy", () => {
  if (driverblip && mp.blips.exists(driverblip)) {
    driverblip.destroy();
    driverblip = null;
  }
});
mp.events.add("TaxiBlipDestroy", () => {
  if (blipinfo && mp.blips.exists(blipinfo)) {
    blipinfo.destroy();
  }
});
let taxibiz;
let waypoint;
let taxi_colshape_exit;
let taxi_minimap_blip;
let passenger_blip;
let passenger_shape;
let passenger_ped;
let passenger_marker;
let blip_navigator = null;
let blip_colshape = null;
mp.events.add("Taxi_Navigator", _0x56eab8 => {
  if (blip_navigator) {
    blip_navigator.destroy();
    blip_navigator = null;
  }
  if (blip_colshape) {
    blip_colshape.destroy();
    blip_colshape = null;
  }
  blip_colshape = mp.colshapes.newCircle(_0x56eab8.x, _0x56eab8.y, 10, 0);
  blip_navigator = mp.blips.new(1, _0x56eab8, {
    name: language["Точка назначения"][curr_lang],
    color: 5
  });
  blip_navigator.setRoute(true);
});
mp.events.add("Taxi_NavigatorDestroy", () => {
  if (blip_navigator) {
    blip_navigator.destroy();
    blip_navigator = null;
  }
  if (blip_colshape) {
    blip_colshape.destroy();
    blip_colshape = null;
  }
});
global.TaxiOpened = false;
mp.events.add("TaxiJobBrowser", (_0x4b7139, _0x445132, _0x425dfd, _0x18da70, _0x590c1a, _0x278e62) => {
  taxibiz = _0x278e62;
  const _0x389e4c = "{\"switch\":1,\"bizname\":'" + (_0x425dfd = _0x425dfd + "(" + (parseInt(_0x278e62) + 1) + ")") + "',\"bizowner\":'" + _0x18da70 + "',\"cararend\":" + _0x445132 + ",\"gos_price\":" + _0x590c1a + ",\"items\":[],\"job\":" + _0x4b7139 + ",\"show\":true}";
  main_browser.execute("APPS.state.work_taxi = " + _0x389e4c);
  TaxiOpened = true;
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("TaxiJobUpdate", (_0x49e1df, _0x2751f1, _0x1e2ff3, _0x73e496, _0x18c6e7, _0x5c85d2) => {
  if (!TaxiOpened) {
    return true;
  }
  main_browser.execute("APPS.state.work_taxi.cararend = " + _0x2751f1);
  main_browser.execute("APPS.state.work_taxi.bizowner = '" + _0x73e496 + "'");
  main_browser.execute("APPS.state.work_taxi.job = " + _0x49e1df);
});
mp.events.add("TaxiJobEvent", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("TaxiJobStarted");
  }
});
mp.events.add("Client_TaxiJobVehicle", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 250) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TaxiJobVehicle");
  }
});
mp.events.add("TaxiJobChangeButton", _0x483cbb => {
  if (TaxiOpened) {
    main_browser.execute("APPS.state.work_taxi.job = " + _0x483cbb);
  }
});
mp.events.add("TaxiJobBuyEvent", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("BuyTaxi", taxibiz);
  }
});
mp.events.add("ShowTaxiCount", (_0x29be18 = 0, _0x4c826b = 0) => {
  if (_0x29be18 == 0) {
    main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Таксометр выключен"][curr_lang] + "\";");
  } else {
    main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Таксометр включен"][curr_lang] + "\";");
  }
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language.Заработано[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = " + parseInt(_0x4c826b) + ";");
  main_browser.execute("APPS.state.hud.job_hud = 11;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("UpdateTaxiCount", (_0xc1da5c, _0x16774d = 0) => {
  if (_0xc1da5c == 0) {
    main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Таксометр выключен"][curr_lang] + "\";");
  } else {
    main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Таксометр включен"][curr_lang] + "\";");
  }
  main_browser.execute("APPS.state.hud.hud_job_count = " + parseInt(_0x16774d) + ";");
});
mp.events.add("DestroyTaxiCounter", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});
mp.events.add("LocalTaxiCounterShow", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("Taxi_Error", _0x145f60 => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x145f60 + "');");
});
global.is_at_taxi_job = false;
mp.events.add("Client_InTaxiJob", _0x15a8cf => {
  is_at_taxi_job = _0x15a8cf;
});
mp.events.add("Taxi_Open_Circle", () => {
  OpenInteractionCircle("taxiJobActions");
});
setInterval(function () {
  if (new_version != 1 && waypoint !== mp.game.invoke("0x1DD1F58F493F1DA5")) {
    waypoint = mp.game.invoke("0x1DD1F58F493F1DA5");
    let _0x31ca20 = mp.game.invoke("0x186E5D252FA50E7D");
    let _0x3250bc = mp.game.invoke("0x1BEDE233E6CD2A1F", _0x31ca20);
    let _0x292ace = mp.game.invoke("0x14F96AA50D6FBEA7", _0x31ca20);
    for (let _0x26f529 = _0x3250bc; mp.game.invoke("0xA6DB27D19ECBB7DA", _0x26f529) != 0; _0x26f529 = _0x292ace) {
      if (mp.game.invoke("0xBE9B0959FFD0779B", _0x26f529) == 4) {
        const _0xc39416 = mp.game.ui.getBlipInfoIdCoord(_0x26f529);
        mp.events.callRemote("Server_playerCreateWaypoint", JSON.stringify(_0xc39416));
      }
    }
  }
}, 250);
mp.events.add("playerCreateWaypoint", _0x7433a7 => {
  if (new_version == 1) {
    mp.events.callRemote("Server_playerCreateWaypoint", JSON.stringify(_0x7433a7));
  }
});
mp.events.add("playerEnterColshape", _0x19eca4 => {
  if (blip_colshape && mp.colshapes.exists(blip_colshape) && _0x19eca4 == blip_colshape) {
    if (blip_navigator) {
      blip_navigator.destroy();
      blip_navigator = null;
    }
    if (blip_colshape) {
      blip_colshape.destroy();
      blip_colshape = null;
    }
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.game.ui.notifications.show(language["Bы дocтигли тoчки нaзнaчeния"][curr_lang], false, 0, 2);
    return;
  }
  if (mp.colshapes.exists(_0x19eca4) && _0x19eca4.is_enter_taxi == 1) {
    if (taxi_colshape_exit) {
      taxi_colshape_exit.destroy();
      taxi_colshape_exit = undefined;
    }
    mp.events.callRemote("Server_EnterTaxiCall");
  } else if (mp.colshapes.exists(_0x19eca4) && _0x19eca4.is_ped_get == 1) {
    mp.events.callRemote("Server_GetTaxiNPC");
  } else if (mp.colshapes.exists(_0x19eca4) && _0x19eca4.is_ped_set == 1) {
    mp.events.callRemote("Server_SetTaxiNPC");
  }
});
mp.events.add("playerExitColshape", _0x29fcb5 => {
  if (mp.colshapes.exists(_0x29fcb5) && _0x29fcb5.is_exit_taxi == 1) {
    if (taxi_colshape_exit) {
      taxi_colshape_exit.destroy();
      taxi_colshape_exit = undefined;
      mp.events.callRemote("Server_ExitTaxiCall");
    }
    if (taxi_minimap_blip != null) {
      mp.game.ui.removeBlip(taxi_minimap_blip);
      taxi_minimap_blip = undefined;
    }
  }
});
mp.events.add("Client_TaxiColshapeCreate", (_0x2371b3, _0x3e5b5e = 1, _0xd2baf4 = 0) => {
  if (taxi_colshape_exit) {
    taxi_colshape_exit.destroy();
    taxi_colshape_exit = undefined;
  }
  if (_0x3e5b5e == 1) {
    taxi_colshape_exit = mp.colshapes.newCircle(_0x2371b3.x, _0x2371b3.y, 20, localplayer.dimension);
    taxi_colshape_exit.is_exit_taxi = true;
    if (mobileOpen) {
      main_browser.execute("APPS.state.hud_mobile.taxiStatus = 1;");
    }
    taxi_minimap_blip = mp.game.ui.addBlipForRadius(_0x2371b3.x, _0x2371b3.y, _0x2371b3.z, 20);
    mp.game.ui.setBlipSprite(taxi_minimap_blip, zone_blips);
    mp.game.ui.setBlipAlpha(taxi_minimap_blip, 100);
    mp.game.ui.setBlipColour(taxi_minimap_blip, zone_color);
  } else if (_0x3e5b5e == 2) {
    taxi_colshape_exit = mp.colshapes.newCircle(_0x2371b3.x, _0x2371b3.y, 20, _0xd2baf4);
    taxi_colshape_exit.is_enter_taxi = true;
  }
});
mp.events.add("Client_UpdateMobileTaxiStatus", (_0x35b3ee = "", _0x4fdce6 = "", _0x5ad248 = 0) => {
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.taxiStatus = 2;");
    main_browser.execute("APPS.state.hud_mobile.taxi_name = '" + _0x35b3ee + "';");
    main_browser.execute("APPS.state.hud_mobile.taxi_surname = '" + _0x4fdce6 + "';");
    main_browser.execute("APPS.state.hud_mobile.taxinumber = '" + _0x5ad248 + "';");
  }
});
mp.events.add("Client_TaxiColshapeDelete", () => {
  if (taxi_colshape_exit) {
    const _0x1bd349 = taxi_colshape_exit;
    setTimeout(function () {
      if (_0x1bd349 && mp.colshapes.exists(_0x1bd349)) {
        _0x1bd349.destroy();
      }
    }, 100);
    taxi_colshape_exit = undefined;
  }
  if (taxi_minimap_blip != null) {
    mp.game.ui.removeBlip(taxi_minimap_blip);
    taxi_minimap_blip = undefined;
  }
});
mp.events.add("Client_TaxiNPCPassengerGet", (_0x54e60a, _0x4e2872, _0x189ad2, _0x234837 = 0) => {
  if (passenger_blip && mp.blips.exists(passenger_blip)) {
    passenger_blip.destroy();
    passenger_blip = undefined;
  }
  if (passenger_shape && mp.colshapes.exists(passenger_shape)) {
    passenger_shape.destroy();
    passenger_shape = undefined;
  }
  if (passenger_marker && mp.markers.exists(passenger_marker)) {
    passenger_marker.destroy();
    passenger_marker = undefined;
  }
  const _0x339e04 = _0x234837 ? 10 : 20;
  passenger_shape = mp.colshapes.newCircle(_0x54e60a, _0x4e2872, _0x339e04, 0);
  if (_0x234837 == 0) {
    passenger_shape.is_ped_get = true;
  } else if (_0x234837 == 1) {
    passenger_shape.is_ped_set = true;
  }
  passenger_marker = mp.markers.new(1, new mp.Vector3(parseFloat(_0x54e60a), parseFloat(_0x4e2872), parseFloat(_0x189ad2) - 5), parseFloat(_0x339e04 * 2), {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 0
  });
  passenger_blip = mp.blips.new(1, new mp.Vector3(_0x54e60a, _0x4e2872, _0x189ad2), {
    name: language["Точка назначения"][curr_lang],
    color: 5
  });
  passenger_blip.setRoute(true);
});
const npc_poses = [[-1013.205, -2735.156, 13.258], [-753.816, -2292.605, 12.465], [-147.355, -1977.378, 22.353], [311.531, -1374.82, 31.448], [318.482, -948.415, 28.918], [1033.758, 190.449, 80.463], [1179.329, -677.368, 60.584], [-491.09, -668.502, 32.367], [-764.068, -344.262, 35.605], [-659.78, -271.136, 35.418], [-759.341, -156.499, 37.18], [-478.908, 225.331, 83.113], [225.092, 284.036, 105.53], [292.25, 176.437, 104.122], [-1591.024, -643.788, 30.14], [-1134.996, -796.091, 16.523], [-397.71, 1235.876, 325.641], [228.807, 1172.903, 225.46], [908.183, 475.349, 120.984], [-1448.579, 531.009, 119.029], [-1601.209, 163.788, 59.367], [-2315.372, 448.676, 174.467], [-2974.737, 443.561, 15.08], [-3235.995, 976.679, 12.819], [-2710.722, 1500.092, 106.236], [-2549.993, 1910.742, 169.171], [-2526.582, 2321.477, 33.06], [-2210.385, 4276.317, 48.005], [-1575.768, 5167.017, 19.568], [-814.058, 5413.449, 33.894], [-684.284, 5844.833, 17.149], [-306.792, 6047.279, 31.416], [-211.689, 6336.884, 31.4], [431.611, 6529.068, 27.755], [1456.85, 6545.738, 14.861], [1584.554, 6441.184, 25.029], [1730.335, 6402.479, 34.608], [1924.348, 5149.783, 44.459], [1916.695, 4642.778, 39.989], [2548.167, 4692.475, 33.558], [2888.013, 4472.039, 48.089], [2525.077, 4173.152, 39.335], [1570.286, 3782.517, 34.601], [1620.289, 3572.166, 35.146], [2177.955, 3503.513, 45.309], [2532.119, 2626.463, 37.945], [2565.987, 399.155, 108.463], [2552.956, 343.676, 108.467], [1172.697, -3196.103, 5.84], [1507.445, 1729.2, 109.669], [1984.901, 2636.553, 46.366], [2005.489, 3055.5, 47.049], [2044.617, 3181.341, 44.966], [3413.144, 3744.345, 30.679], [2686.261, 3456.23, 55.77], [-142.192, 6315.599, 31.574], [-2494.824, 3666.228, 13.623], [-1300.688, 2518.001, 20.719], [-1496.122, 1511.936, 115.251], [-1558.138, 1382.696, 126.647]];
const ped_models = ["a_f_m_bevhills_01", "a_f_y_bevhills_01", "a_m_m_bevhills_01", "a_m_y_bevhills_01", "a_f_m_bevhills_02", "a_f_y_bevhills_02", "a_m_m_bevhills_02", "a_m_y_bevhills_02", "a_f_y_bevhills_03", "a_f_y_bevhills_04"];
let ped_interval_check;
function getFirstFreePassengerSeat(_0x5a6745) {
  for (let _0xf9e6d0 = 0; _0xf9e6d0 <= 3; _0xf9e6d0++) {
    if (_0x5a6745.isSeatFree(_0xf9e6d0)) {
      return _0xf9e6d0;
    }
  }
  return -1;
}
function preparePassengerPed(_0x7d35a8) {
  if (_0x7d35a8 && mp.peds.exists(_0x7d35a8) && _0x7d35a8.handle) {
    _0x7d35a8.freezePosition(false);
    _0x7d35a8.setBlockingOfNonTemporaryEvents(false);
    SetPedToVehicle(_0x7d35a8);
  }
}
function startPassengerBoardInterval() {
  if (ped_interval_check != null) {
    clearInterval(ped_interval_check);
    ped_interval_check = undefined;
  }
  let _0x3db419 = 0;
  ped_interval_check = setInterval(() => {
    if (passenger_ped && mp.peds.exists(passenger_ped)) {
      if (passenger_ped.isInAnyVehicle(false)) {
        clearInterval(ped_interval_check);
        ped_interval_check = undefined;
        return;
      }
      _0x3db419++;
      SetPedToVehicle(passenger_ped, _0x3db419 >= 15 ? 1 : 0);
    }
  }, 1000);
}
function SetPedToVehicle(_0x429787, _0x161363 = 0) {
  if (!_0x429787 || !mp.peds.exists(_0x429787) || !_0x429787.handle || !localplayer.vehicle) {
    return;
  }
  const _0x519bd9 = getFirstFreePassengerSeat(localplayer.vehicle);
  if (!(_0x519bd9 < 0)) {
    if (_0x161363 == 0) {
      _0x429787.taskEnterVehicle(localplayer.vehicle.handle, -1, _0x519bd9, 1, 1, 0);
    } else if (_0x161363 == 1) {
      _0x429787.taskWarpIntoVehicle(localplayer.vehicle.handle, _0x519bd9);
    }
  }
}
mp.events.add("Client_TaxiNPCPassengerCreateNPC", _0x24e659 => {
  if (ped_interval_check != null) {
    clearInterval(ped_interval_check);
    ped_interval_check = undefined;
  }
  if (passenger_ped && mp.peds.exists(passenger_ped)) {
    passenger_ped.destroy();
    passenger_ped = undefined;
  }
  const _0xf3193b = npc_poses[_0x24e659 - 1];
  passenger_ped = mp.peds.new(mp.game.joaat(ped_models[getRandomInt(0, ped_models.length)]), new mp.Vector3(_0xf3193b[0], _0xf3193b[1], _0xf3193b[2]), {
    frozen: false
  }, _0x4a9517 => {
    preparePassengerPed(_0x4a9517);
    startPassengerBoardInterval();
  }, 0);
});
mp.events.add("Client_TaxiNPCPassengerDeleteVariables", () => {
  if (passenger_blip && mp.blips.exists(passenger_blip)) {
    passenger_blip.destroy();
    passenger_blip = undefined;
  }
  if (passenger_shape && mp.colshapes.exists(passenger_shape)) {
    passenger_shape.destroy();
    passenger_shape = undefined;
  }
  if (passenger_ped && mp.peds.exists(passenger_ped)) {
    passenger_ped.destroy();
    passenger_ped = undefined;
  }
  if (passenger_marker && mp.markers.exists(passenger_marker)) {
    passenger_marker.destroy();
    passenger_marker = undefined;
  }
  if (ped_interval_check != null) {
    clearInterval(ped_interval_check);
    ped_interval_check = undefined;
  }
});