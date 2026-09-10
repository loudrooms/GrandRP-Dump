global.CollectorJobOpened = false;
mp.events.add("Client_CollectorJobBrowser", (_0x4a020d, _0x355ece) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  CollectorJobOpened = true;
  const _0x23e951 = "{\"count\":" + _0x355ece + ",\"job\":" + _0x4a020d + ",\"show\":true}";
  main_browser.execute("APPS.state.work_cashcollector = " + _0x23e951);
  mp.gui.cursor.show(true, true);
});
global.CloseCollectorBrowser = function () {
  if (CollectorJobOpened) {
    CollectorJobOpened = false;
    main_browser.execute("APPS.state.work_cashcollector.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CollectorEmployment", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CollectorJobEvent");
  }
});
mp.events.add("Client_RentCashCollectorVehicle", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RentCashCollectorVehicle");
  }
});
mp.events.add("Client_CollectorJobChangeButton", _0x146981 => {
  main_browser.execute("APPS.state.work_cashcollector.job = " + _0x146981);
});
const bank_poses = [[-1211.322, -335.666, 37.781], [-353.492, -54.294, 49.037], [311.757, -283.318, 54.165], [147.424, -1044.951, 29.368], [1175.895, 2711.611, 38.088], [-107.42, 6475.282, 31.627]];
let collector_blips;
let collector_shape;
let collector_bank_marker;
let collector_bank_shape;
let collector_bank_position;
function DeleteMarkersAndShapes() {
  if (collector_shape) {
    collector_shape.destroy();
    collector_shape = undefined;
  }
  if (collector_blips) {
    collector_blips.destroy();
    collector_blips = undefined;
  }
  if (collector_bank_marker) {
    collector_bank_marker.destroy();
    collector_bank_marker = undefined;
  }
  if (collector_bank_shape) {
    collector_bank_shape.destroy();
    collector_bank_shape = undefined;
  }
}
mp.events.add("Client_CollectorCreatePlace", (_0x51e299, _0x3f3de2 = true) => {
  if (collector_shape) {
    collector_shape.destroy();
    collector_shape = undefined;
  }
  if (collector_blips) {
    collector_blips.destroy();
    collector_blips = undefined;
  }
  collector_blips = mp.blips.new(1, new mp.Vector3(bank_poses[_0x51e299][0], bank_poses[_0x51e299][1], bank_poses[_0x51e299][2]), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  collector_blips.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  collector_shape = mp.colshapes.newCircle(bank_poses[_0x51e299][0], bank_poses[_0x51e299][1], 10, 0);
  collector_shape.is_collector_gps_shape = true;
  if (collector_bank_marker) {
    collector_bank_marker.destroy();
    collector_bank_marker = undefined;
  }
  if (collector_bank_shape) {
    collector_bank_shape.destroy();
    collector_bank_shape = undefined;
  }
  collector_bank_position = _0x51e299;
  collector_bank_marker = mp.markers.new(29, new mp.Vector3(bank_poses[_0x51e299][0], bank_poses[_0x51e299][1], bank_poses[_0x51e299][2]), 1, {
    color: [255, 255, 0, 150],
    visible: true,
    dimension: 0
  });
  collector_bank_shape = mp.colshapes.newSphere(bank_poses[_0x51e299][0], bank_poses[_0x51e299][1], bank_poses[_0x51e299][2], 1);
  if (_0x3f3de2 == 1) {
    collector_bank_shape.is_load_collector = true;
    can_unload_collector = false;
  } else {
    collector_bank_shape.is_unload_collector = true;
    can_unload_collector = true;
  }
});
global.GetBankMoneyFromVehicle = function () {
  const _0x521da9 = GetClosestVehicle(5);
  if (_0x521da9 && _0x521da9.model == 1747439474) {
    if (mp.game.system.vdist(bank_poses[collector_bank_position][0], bank_poses[collector_bank_position][1], bank_poses[collector_bank_position][2], localplayer.position.x, localplayer.position.y, localplayer.position.z) > 100) {
      return mp.game.ui.notifications.show(language["Вы должны находиться около банковского отделения"][curr_lang], false, 0, 6);
    }
    mp.events.callRemote("Server_UnloadCashFromVehicle", _0x521da9);
  }
};
global.can_unload_collector = false;
global.can_load_collector = false;
mp.events.add("playerEnterColshape", _0x1534d8 => _0x1534d8.is_collector_gps_shape == 1 ? (collector_shape && (collector_shape.destroy(), collector_shape = undefined), collector_blips && (collector_blips.destroy(), collector_blips = undefined), PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET"), void (can_unload_collector && mp.game.ui.notifications.show(language["Нажмите клавишу E, чтобы взять деньги из транспорта"][curr_lang], false, 0, 2))) : mp.colshapes.exists(_0x1534d8) && _0x1534d8.is_load_collector == 1 ? (main_browser.execute("APPS.state.hud.interact = 2;"), PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET"), void (can_load_collector = true)) : void (mp.colshapes.exists(_0x1534d8) && _0x1534d8.is_unload_collector == 1 ? mp.events.callRemote("Server_SetMoneyInBankFromVehicle") : mp.colshapes.exists(_0x1534d8) && _0x1534d8.is_steal_collector_veh == 1 && localplayer.isInAnyVehicle(false) && localplayer.vehicle && localplayer.vehicle.model == 1747439474 && (mp.events.callRemote("Server_TheftCollectorVehicle", localplayer.vehicle), DeleteMarkersAndShapes())));
mp.events.add("playerExitColshape", _0x42656d => {
  if (mp.colshapes.exists(_0x42656d) && _0x42656d.is_load_collector == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    can_load_collector = false;
    return;
  }
});
global.collector_cash_in_hands = false;
mp.events.add("Client_Collector_Money_In_Hands", _0x52093c => {
  collector_cash_in_hands = _0x52093c;
});
mp.events.add("Client_DeleteCollectorVariables", () => {
  DeleteMarkersAndShapes();
  collector_cash_in_hands = false;
  can_unload_collector = false;
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});
mp.events.add("Client_UpdateCollectorMoneyInVehicle", _0x14a60e => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Загружено[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["мешков:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = \"" + _0x14a60e + "\";");
  main_browser.execute("APPS.state.hud.job_hud = 141;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("Client_GangStealCollectorVehicle", _0x500b2a => {
  if (_0x500b2a == 1) {
    collector_blips = mp.blips.new(1, new mp.Vector3(-524.334, -2902.21, 6), {
      name: language["Место направления"][curr_lang],
      color: 83
    });
    collector_blips.setRoute(true);
    mp.game.ui.notifications.show(language["Сдайте инкассаторскую машину в доках"][curr_lang], false, 0, 2);
    if (collector_bank_marker) {
      collector_bank_marker.destroy();
      collector_bank_marker = undefined;
    }
    if (collector_bank_shape) {
      collector_bank_shape.destroy();
      collector_bank_shape = undefined;
    }
    collector_bank_marker = mp.markers.new(1, new mp.Vector3(-524.334, -2902.21, 5), 1, {
      color: [255, 255, 0, 150],
      visible: true,
      dimension: 0
    });
    collector_bank_shape = mp.colshapes.newSphere(-524.334, -2902.21, 6, 1);
    collector_bank_shape.is_steal_collector_veh = true;
  } else {
    DeleteMarkersAndShapes();
  }
});