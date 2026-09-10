global.GhettoBrowserOpened = false;
let GhettoBrowser = null;
function AddCaptureBlip(_0x239189, _0x329b2f, _0x5003f8, _0xbfe8c5, _0x3e7126) {
  if (_0x329b2f == 1) {
    if (!capture_blips[_0x239189]) {
      capture_blips[_0x239189] = mp.game.ui.addBlipForArea(parseFloat(_0x5003f8.x), parseFloat(_0x5003f8.y), 0, _0xbfe8c5 * 2, _0xbfe8c5 * 2);
      mp.game.ui.setBlipSprite(capture_blips[_0x239189], _0x3e7126 == 1 ? 5 : zone_blips);
      mp.game.ui.setBlipAlpha(capture_blips[_0x239189], 100);
      mp.game.ui.setBlipAsShortRange(capture_blips[_0x239189], true);
      if (_0x239189 == 0 && _0x3e7126 == 1) {
        mp.game.ui.setBlipColour(capture_blips[_0x239189], 1);
      } else if (_0x239189 == 1 && _0x3e7126 == 1) {
        mp.game.ui.setBlipColour(capture_blips[_0x239189], 69);
      } else {
        mp.game.ui.setBlipColour(capture_blips[_0x239189], zone_color);
      }
      mp.game.ui.setBlipSquaredRotation(capture_blips[_0x239189], 90);
      mp.game.ui.setBlipRotation(capture_blips[_0x239189], Math.ceil(90));
      if (_0x239189 == 0 && _0x3e7126 == 1) {
        mp.game.ui.setBlipFlashTimer(capture_blips[_0x239189], 1000);
        mp.game.ui.setBlipFlashes(capture_blips[_0x239189], true);
      }
    }
  } else if (capture_blips[_0x239189]) {
    mp.game.ui.removeBlip(capture_blips[_0x239189]);
    capture_blips[_0x239189] = null;
  }
}
mp.events.add("GhettoMap", (_0x200445, _0x19c52b, _0x4cf1b9, _0x28dc9b, _0x47ca59, _0x40666a, _0x535bee, _0x47cd87, _0x2748a4, _0x5687a4, _0x4ca35e) => {
  if (GlobalCheck() != 1) {
    GhettoBrowserOpened = true;
    if (curr_lang != "ru") {
      let _0x4abd95;
      if (mp.players.local.getVariable("Member") >= 7 && mp.players.local.getVariable("Member") <= 11) {
        _0x4abd95 = {
          id: mp.players.local.getVariable("Member"),
          online: _0x47ca59.length + 1,
          runner_money: _0x19c52b[mp.players.local.getVariable("Member") - 7],
          attacks: _0x535bee[mp.players.local.getVariable("Member")][0],
          defences: _0x535bee[mp.players.local.getVariable("Member")][1],
          territories: _0x28dc9b[mp.players.local.getVariable("Member") - 7]
        };
      }
      const _0x2929b9 = Object.fromEntries(Object.entries(_0x535bee).map(([_0x5ccad7, _0x1e558e]) => [Number(_0x5ccad7), {
        attacks: _0x1e558e[0],
        defences: _0x1e558e[1]
      }]));
      let _0x369ff4 = null;
      if (_0x2748a4 != null) {
        const _0x89d21 = Number(_0x47cd87);
        const _0x4adb2f = _0x2748a4.scheduledTimestamp != null ? Math.floor((_0x2748a4.scheduledTimestamp - _0x89d21) / 1000) : 0;
        _0x369ff4 = {
          attackGang: _0x2748a4.attacker,
          defenseGang: _0x2748a4.defender,
          territoryId: _0x2748a4.territoryId,
          time_left: _0x4adb2f,
          weapon: _0x2748a4.weaponId,
          battle_type: _0x2748a4.battleType,
          started: _0x2748a4.started
        };
      }
      const _0x43cc36 = {
        x: mp.players.local.position.x,
        y: mp.players.local.position.y
      };
      const _0x44bec3 = Number(_0x47cd87);
      const _0x3b3866 = new Date(_0x44bec3);
      const _0x331eb1 = _0x3b3866.getMinutes() * 60 + _0x3b3866.getSeconds() + _0x3b3866.getMilliseconds() / 1000;
      const _0x50d13b = Math.min(3600, Math.floor(_0x331eb1 / 300) * 300 + 300);
      const _0x181854 = Math.max(0, Math.floor(_0x50d13b - _0x331eb1));
      main_browser.execute("\n            APPS.state.ghetto_map.trytocapt = false;\n            APPS.state.ghetto_map.availableActions = " + JSON.stringify(_0x2929b9) + ";\n            APPS.state.ghetto_map.player_gang = " + JSON.stringify(_0x4abd95 ?? null) + ";\n            APPS.state.ghetto_map.playerPosition = " + JSON.stringify(_0x43cc36) + ";\n            APPS.state.ghetto_map.gz_count = " + JSON.stringify(_0x28dc9b) + ";\n            APPS.state.ghetto_map.last_gz_count = " + JSON.stringify(_0x4cf1b9) + ";\n            APPS.state.ghetto_map.captinfo = " + JSON.stringify(_0x200445) + ";\n            APPS.state.ghetto_map.gangsters = " + JSON.stringify(_0x47ca59) + ";\n            APPS.state.ghetto_map.current_capture = " + JSON.stringify(_0x369ff4) + ";\n            APPS.state.ghetto_map.serverTime = " + _0x47cd87 + ";\n            APPS.state.ghetto_map.megaMallTimer = " + JSON.stringify(_0x181854) + ";\n            APPS.state.ghetto_map.timezoneOffset = " + _0x5687a4 + ";\n            APPS.state.ghetto_map.canSellTerritory = " + _0x4ca35e + ";\n            APPS.state.ghetto_map.show = true;\n        ");
    } else {
      main_browser.execute("\n            APPS.state.ghetto_map.ghettoRecruitment = [];\n            APPS.state.ghetto_map.members_online = [" + (_0x47ca59 ? _0x47ca59.length : 0) + "];\n            APPS.state.ghetto_map.gz_count = [" + _0x28dc9b + "];\n            APPS.state.ghetto_map.money_counts = [" + _0x19c52b + "];\n            APPS.state.ghetto_map.last_gz_count = [" + _0x4cf1b9 + "];\n            APPS.state.ghetto_map.captinfo = [" + _0x200445 + "];\n            APPS.state.ghetto_map.trytocapt = false;\n            APPS.state.ghetto_map.players_in_org = " + JSON.stringify(_0x47ca59 || []) + ";\n            APPS.state.ghetto_map.new_design_show = " + mp.storage.data.new_design_show + ";\n            APPS.state.ghetto_map.show = true;\n        ");
    }
    if (_0x40666a && _0x40666a.length) {
      main_browser.execute("APPS.state.ghetto_map.ghettoRecruitment = " + JSON.stringify(_0x40666a));
    }
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
    setTimeout(() => {
      mp.gui.cursor.show(true, true);
    }, 200);
  }
});
mp.events.add("Client_SellTerritory", (_0x5653d7, _0x313c7a, _0x43ebfb) => {
  if (loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SellTerritory", _0x5653d7, _0x313c7a, _0x43ebfb);
    }
  }
});
global.CloseGhettoMap = function () {
  main_browser.execute("APPS.state.ghetto_map.show = false;");
  GhettoBrowserOpened = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  mp.events.callRemote("CloseGhettoMap");
};
mp.events.add("Client_LoadNewCaptureBlips", function (_0x227788, _0x38ae1f, _0x156dff) {
  AddCaptureBlip(0, _0x227788, _0x38ae1f, _0x156dff, 1);
  AddCaptureBlip(1, _0x227788, _0x38ae1f, _0x156dff * 3, 1);
});
mp.events.add("Client_LoadCaptureBlips", function (_0x12e73b, _0x25a5e9, _0x513010) {
  AddCaptureBlip(0, _0x12e73b, _0x25a5e9, _0x513010, 0);
});
mp.events.add("Client_CloseGhettoMap", () => {
  CloseGhettoMap();
});
mp.events.add("GhettoMapReloadTry", () => {
  if (GhettoBrowserOpened) {
    main_browser.execute("APPS.state.ghetto_map.trytocapt = false;");
  }
});
mp.events.add("Capture_Error", _0x1ec3ae => {
  if (GhettoBrowserOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x1ec3ae + "');");
  }
});
mp.events.add("AttackCapture", _0x5b9058 => {
  if (new Date().getTime() - lastCheck < 500) {
    return main_browser.execute("APPS.state.ghetto_map.trytocapt = false;");
  }
  lastCheck = new Date().getTime();
  mp.events.callRemote("StartCapture", _0x5b9058);
});
let capture_blips = [null, null];
mp.events.add("InCaptureInfoUpdate", function (_0x1bff49) {
  main_browser.execute("APPS.state.hud.in_capture = " + _0x1bff49 + ";");
});
global.CaptureScoreOpened = false;
mp.events.add("ShowCaptureInfoBrowser", function (_0x3a612b, _0x53240c, _0xfa7f6c, _0x400c69, _0x321386, _0x35fa36, _0x135705) {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  CaptureScoreOpened = true;
  mp.gui.cursor.show(true, true);
  const _0x59c279 = "{\"date\":'" + _0x3a612b + "',\"duration\":'" + _0x53240c + "',\"gz_att\":[" + _0xfa7f6c + "],\"gz_def\":[" + _0x400c69 + "],\"win\":" + _0x321386 + ",\"attacker\":" + _0x35fa36 + ",\"defender\":" + _0x135705 + ",\"show\":true}";
  main_browser.execute("APPS.state.ghetto_win = " + _0x59c279);
});
global.CaptureScoreClose = function () {
  if (CaptureScoreOpened) {
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.ghetto_win.show = false;");
    CaptureScoreOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
  }
};
global.playerincapture = false;
mp.events.add("Client_JoinInCapture", function (_0x245470) {
  if (_0x245470) {
    playerincapture = true;
  }
});
mp.events.add("StopCapture", function () {
  main_browser.execute("APPS.state.hud.capture_show = false;");
  if (capture_blips[0]) {
    mp.game.ui.removeBlip(capture_blips[0]);
    capture_blips[0] = null;
  }
  if (capture_interval != null) {
    clearInterval(capture_interval);
    capture_interval = undefined;
  }
  if (capture_blips[1]) {
    mp.game.ui.removeBlip(capture_blips[1]);
    capture_blips[1] = null;
  }
  if (curr_lang == "ru") {
    playerincapture = false;
  }
  if (curr_lang == "ru" && global.new_version == 1) {
    if (mp.storage.data.graphic_select == 1) {
      mp.storage.data.players_streamed = 50;
      mp.storage.data.vehicles_streamed = 30;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 30;
      mp.storage.data.player_lod_distance = 50;
    } else if (mp.storage.data.graphic_select == 2) {
      mp.storage.data.players_streamed = 70;
      mp.storage.data.vehicles_streamed = 40;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 100;
      mp.storage.data.player_lod_distance = 100;
    } else if (mp.storage.data.graphic_select == 3) {
      mp.storage.data.players_streamed = 100;
      mp.storage.data.vehicles_streamed = 50;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 200;
      mp.storage.data.player_lod_distance = 200;
    } else if (mp.storage.data.graphic_select == 4) {
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
    }
    mp.storage.flush();
  }
  main_browser.execute("APPS.state.hud.capture_show = false;");
});
mp.events.add("UpdateCaptureStat", function (_0x459454, _0x183afa, _0xb02842, _0xccb27a, _0x117e5b) {
  main_browser.execute("APPS.state.hud.capturetime = " + _0xb02842 + ";");
  main_browser.execute("APPS.state.hud.gangcount1 = " + _0xccb27a + ";");
  main_browser.execute("APPS.state.hud.gangcount2 = " + _0x117e5b + ";");
  main_browser.execute("APPS.state.hud.gang1 = " + _0x459454 + ";");
  main_browser.execute("APPS.state.hud.gang2 = " + _0x183afa + ";");
  main_browser.execute("APPS.state.hud.capture_show = true;");
});
global.gang_width = 0.08;
global.gang_height = 0.011;
global.gang_border = 0.001;
global.gang_additional = 0.5;
global.gang_color = new Array(4);
global.missionstarted = false;
global.mission_step = 1;
const mission_info_keys = [{
  name: "Ограбление военной базы",
  task_one: "Выключить сигнализацию",
  task_two: "Выключить аварийный генератор",
  full_time: 900
}];
function getMissionInfo() {
  return mission_info_keys.map(_0x3c24c7 => ({
    name: TranslateText(_0x3c24c7.name),
    task_one: TranslateText(_0x3c24c7.task_one),
    task_two: TranslateText(_0x3c24c7.task_two),
    full_time: _0x3c24c7.full_time
  }));
}
mp.events.add("ShowGangMission", function (_0x3646d8, _0x314934, _0x3740ba, _0x4d0fba = 0) {
  const _0x172a22 = getMissionInfo()[0];
  main_browser.execute("APPS.state.hud.mission_complete3 = false;");
  main_browser.execute("APPS.state.hud.mission_name3 = '';");
  main_browser.execute("APPS.state.hud.mission_complete2 = " + _0x3740ba + ";");
  main_browser.execute("APPS.state.hud.mission_name2 = " + JSON.stringify(_0x172a22.task_two) + ";");
  if (_0x4d0fba == 0) {
    main_browser.execute("APPS.state.hud.mission_time_fulltime = " + _0x172a22.full_time + ";");
  } else {
    main_browser.execute("APPS.state.hud.mission_time_fulltime = " + _0x4d0fba + ";");
  }
  main_browser.execute("APPS.state.hud.mission_time = " + _0x3646d8 + ";");
  main_browser.execute("APPS.state.hud.mission_complete1 = " + _0x314934 + ";");
  main_browser.execute("APPS.state.hud.mission_name1 = " + JSON.stringify(_0x172a22.task_one) + ";");
  main_browser.execute("APPS.state.hud.mission_name = " + JSON.stringify(_0x172a22.name) + ";");
  main_browser.execute("APPS.state.hud.mission_show = true;");
});
mp.events.add("GangMissionStarted", function (_0xff7b39, _0x39fb81 = false, _0x1ef245) {
  if (_0xff7b39 == 1) {
    if (_0x1ef245 != 2) {
      missionstarted = true;
      mission_step = 1;
    }
    if (!_0x39fb81) {
      const _0x4c6810 = getMissionInfo()[0];
      main_browser.execute("APPS.state.hud.mission_complete3 = false;");
      main_browser.execute("APPS.state.hud.mission_name3 = '';");
      main_browser.execute("APPS.state.hud.mission_complete2 = false;");
      main_browser.execute("APPS.state.hud.mission_name2 = " + JSON.stringify(_0x4c6810.task_two) + ";");
      main_browser.execute("APPS.state.hud.mission_time_fulltime = " + _0x4c6810.full_time + ";");
      main_browser.execute("APPS.state.hud.mission_time = " + _0x4c6810.full_time + ";");
      main_browser.execute("APPS.state.hud.mission_complete1 = false;");
      main_browser.execute("APPS.state.hud.mission_name1 = " + JSON.stringify(_0x4c6810.task_one) + ";");
      main_browser.execute("APPS.state.hud.mission_name = " + JSON.stringify(_0x4c6810.name) + ";");
      main_browser.execute("APPS.state.hud.mission_show = true;");
    }
  } else if (_0xff7b39 == 2 && _0x1ef245 != 2) {
    missionstarted = true;
    mission_step = 2;
  }
});
mp.events.add("GangMissionProgress_Client", function (_0x113ddb, _0xb5d28a) {
  if (missionstarted) {
    gang_additional = _0xb5d28a;
  }
});
mp.events.add("GangMissionFail_Client", function () {
  main_browser.execute("APPS.state.hud.mission_show = false;");
  missionstarted = false;
  mission_step = 1;
});
mp.events.add("GangMissionSuccess_Client", function (_0x3babda) {
  if (_0x3babda == 1) {
    main_browser.execute("APPS.state.hud.mission_complete2 = false;");
    main_browser.execute("APPS.state.hud.mission_complete1 = true;");
    mission_step = 12;
  } else if (_0x3babda == 2) {
    main_browser.execute("APPS.state.hud.mission_complete2 = true;");
    main_browser.execute("APPS.state.hud.mission_complete1 = true;");
    mission_step = 21;
  }
});
mp.events.add("render", () => {
  if (loggedin && missionstarted && !(mission_step > 10)) {
    if (mission_step == 1) {
      if (mp.game.system.vdist(-2049.63, 3195.35, 32.81, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 10) {
        return;
      }
      let _0x5c710f = mp.game.graphics.world3dToScreen2d(new mp.Vector3(-2049.63, 3195.35, 32.81));
      if (_0x5c710f) {
        mp.game.graphics.drawRect(_0x5c710f.x, _0x5c710f.y, gang_width + gang_border * 2, gang_height + gang_border * 2, 0, 0, 0, 200);
        mp.game.graphics.drawRect(_0x5c710f.x, _0x5c710f.y, gang_width, gang_height, 150, 150, 150, 255);
        if (gang_additional < 0.3) {
          gang_color[0] = 230;
          gang_color[1] = 0;
          gang_color[2] = 0;
        } else if (gang_additional >= 0.3 && gang_additional < 0.7) {
          gang_color[0] = 240;
          gang_color[1] = 230;
          gang_color[2] = 0;
        } else if (gang_additional >= 0.7) {
          gang_color[0] = 0;
          gang_color[1] = 220;
          gang_color[2] = 0;
        }
        mp.game.graphics.drawRect(_0x5c710f.x - gang_width / 2 * (1 - gang_additional), _0x5c710f.y, gang_width * gang_additional, gang_height, gang_color[0], gang_color[1], gang_color[2], 255);
      }
    } else if (mission_step == 2) {
      if (mp.game.system.vdist(-1895.301, 3134.007, 32.81, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 10) {
        return;
      }
      let _0x27bb71 = mp.game.graphics.world3dToScreen2d(new mp.Vector3(-1895.301, 3134.007, 32.81));
      if (_0x27bb71) {
        mp.game.graphics.drawRect(_0x27bb71.x, _0x27bb71.y, gang_width + gang_border * 2, gang_height + gang_border * 2, 0, 0, 0, 200);
        mp.game.graphics.drawRect(_0x27bb71.x, _0x27bb71.y, gang_width, gang_height, 150, 150, 150, 255);
        if (gang_additional < 0.3) {
          gang_color[0] = 230;
          gang_color[1] = 0;
          gang_color[2] = 0;
        } else if (gang_additional >= 0.3 && gang_additional < 0.7) {
          gang_color[0] = 240;
          gang_color[1] = 230;
          gang_color[2] = 0;
        } else if (gang_additional >= 0.7) {
          gang_color[0] = 0;
          gang_color[1] = 220;
          gang_color[2] = 0;
        }
        mp.game.graphics.drawRect(_0x27bb71.x - gang_width / 2 * (1 - gang_additional), _0x27bb71.y, gang_width * gang_additional, gang_height, gang_color[0], gang_color[1], gang_color[2], 255);
      }
    }
  }
});
const Submarines_Box_Poses = [[-155.67300415039062, -3493.99169921875, -39.63440704345703], [722.1633911132812, -3706.105224609375, -82.43053436279297], [1085.9713134765625, -3584.90673828125, -51.786582946777344], [1471.2349853515625, -3504.11328125, -49.7052001953125]];
const submarine_box_final_poses = [456.3955993652344, -3372.960693359375, 0.4042187035083771];
let submarine_marker;
let submarine_colshape;
let submarine_marker_final;
let submarine_colshape_final;
let submarineblip = null;
function CloseSubmarineZone() {
  if (submarineblip) {
    mp.game.ui.removeBlip(submarineblip);
    submarineblip = null;
    submarine_marker.destroy();
    submarine_marker = null;
    submarine_colshape.destroy();
    submarine_colshape = null;
  }
  if (submarine_colshape_final) {
    submarine_marker_final.destroy();
    submarine_marker_final = null;
    submarine_colshape_final.destroy();
    submarine_colshape_final = null;
  }
}
mp.events.add("LoadSubmarineZone", () => {
  let _0x49c853 = randomInteger(-40, 40);
  let _0x2fe662 = randomInteger(-40, 40);
  let _0xd23ac9 = randomInteger(0, Submarines_Box_Poses.length - 1);
  submarineblip = mp.game.ui.addBlipForRadius(Submarines_Box_Poses[_0xd23ac9][0] + _0x49c853, Submarines_Box_Poses[_0xd23ac9][1] + _0x2fe662, Submarines_Box_Poses[_0xd23ac9][2], 50);
  mp.game.ui.setBlipSprite(submarineblip, 5);
  mp.game.ui.setBlipAlpha(submarineblip, 175);
  mp.game.ui.setBlipColour(submarineblip, 1);
  mp.game.ui.setBlipAsShortRange(submarineblip, true);
  submarine_marker = mp.markers.new(0, new mp.Vector3(Submarines_Box_Poses[_0xd23ac9][0], Submarines_Box_Poses[_0xd23ac9][1], Submarines_Box_Poses[_0xd23ac9][2]), 4, {
    color: [255, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  submarine_colshape = mp.colshapes.newCircle(Submarines_Box_Poses[_0xd23ac9][0], Submarines_Box_Poses[_0xd23ac9][1], 4);
});
mp.events.add("CancelSubmarineMission", () => {
  CloseSubmarineZone();
});
mp.events.add("playerEnterColshape", _0x14c779 => {
  if (localplayer.isInAnyVehicle(false)) {
    if (_0x14c779 == submarine_colshape) {
      CloseSubmarineZone();
      PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
      mp.game.ui.notifications.show(language["Bы взяли гpyз, вoзвpaщaйтecь в пopт"][curr_lang], false, 0, 2);
      submarine_marker_final = mp.markers.new(0, new mp.Vector3(submarine_box_final_poses[0], submarine_box_final_poses[1], submarine_box_final_poses[2] - 1), 4, {
        color: [255, 225, 0, 255],
        visible: true,
        dimension: 0
      });
      submarine_colshape_final = mp.colshapes.newCircle(submarine_box_final_poses[0], submarine_box_final_poses[1], 4);
    } else if (_0x14c779 == submarine_colshape_final) {
      PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
      submarine_marker_final.destroy();
      submarine_marker_final = null;
      submarine_colshape_final.destroy();
      submarine_colshape_final = null;
      mp.events.callRemote("Submarine_Mission_Done");
    }
  }
});
const drugs_warehouses_poses = [[500.353, -3382.72, 6.07], [505.257, -3348.22, 6.281], [472.534, -3350.997, 6.07]];
global.drugs_warehouses = new Array(3);
for (let e = 0; e < drugs_warehouses.length; e++) {
  drugs_warehouses[e] = 0;
}
mp.events.add("Load_Drugs_Info", _0x44f6b8 => {
  drugs_warehouses = _0x44f6b8;
});
const drugs_delivery_shape = mp.colshapes.newSphere(488.543, -3343.6, 6.07, 40);
let can_render_drugs = false;
mp.events.add("playerEnterColshape", _0x5820b5 => {
  if (mp.colshapes.exists(_0x5820b5) && _0x5820b5 == drugs_delivery_shape) {
    can_render_drugs = true;
  }
});
mp.events.add("playerExitColshape", _0x5c3959 => {
  if (mp.colshapes.exists(_0x5c3959) && _0x5c3959 == drugs_delivery_shape) {
    can_render_drugs = false;
  }
});
mp.events.add("render", () => {
  if (loggedin && can_render_drugs && (drugs_warehouses[0] != 0 || drugs_warehouses[1] != 0 || drugs_warehouses[2] != 0)) {
    for (let _0x3cdab3 = 0; _0x3cdab3 < 3; _0x3cdab3++) {
      if (drugs_warehouses[_0x3cdab3] != 0 && mp.game.system.vdist(drugs_warehouses_poses[_0x3cdab3][0], drugs_warehouses_poses[_0x3cdab3][1], drugs_warehouses_poses[_0x3cdab3][2], localplayer.position.x, localplayer.position.y, localplayer.position.z) <= 10) {
        let _0x4dd800 = mp.game.graphics.world3dToScreen2d(new mp.Vector3(drugs_warehouses_poses[_0x3cdab3][0], drugs_warehouses_poses[_0x3cdab3][1], drugs_warehouses_poses[_0x3cdab3][2]));
        if (_0x4dd800) {
          mp.game.graphics.drawRect(_0x4dd800.x, _0x4dd800.y, gang_width + gang_border * 2, gang_height + gang_border * 2, 0, 0, 0, 200);
          mp.game.graphics.drawRect(_0x4dd800.x, _0x4dd800.y, gang_width, gang_height, 150, 150, 150, 255);
          let _0x40281e = drugs_warehouses[_0x3cdab3] * 100 / 300 / 100;
          _0x40281e = parseFloat(_0x40281e);
          if (_0x40281e < 0.3) {
            gang_color[0] = 230;
            gang_color[1] = 0;
            gang_color[2] = 0;
          } else if (_0x40281e >= 0.3 && _0x40281e < 0.7) {
            gang_color[0] = 240;
            gang_color[1] = 230;
            gang_color[2] = 0;
          } else if (_0x40281e >= 0.7) {
            gang_color[0] = 0;
            gang_color[1] = 220;
            gang_color[2] = 0;
          }
          mp.game.graphics.drawRect(_0x4dd800.x - gang_width / 2 * (1 - _0x40281e), _0x4dd800.y, gang_width * _0x40281e, gang_height, gang_color[0], gang_color[1], gang_color[2], 255);
        }
      }
    }
  }
});
const drugs_mission_info_keys = [{
  name: "Поставка наркотиков",
  task_one: "Субмарина №1",
  task_two: "Субмарина №2",
  task_three: "Субмарина №3",
  full_time: 1200
}];
function getDrugsMissionInfo() {
  return drugs_mission_info_keys.map(_0x1528d6 => ({
    name: resolveTranslationValue(_0x1528d6.name),
    task_one: resolveTranslationValue(_0x1528d6.task_one),
    task_two: resolveTranslationValue(_0x1528d6.task_two),
    task_three: resolveTranslationValue(_0x1528d6.task_three),
    full_time: _0x1528d6.full_time
  }));
}
mp.events.add("Drugs_Mission_Browser", function (_0x36c630, _0x436697) {
  if (curr_lang == "ru" && mp.storage.data.new_design_show == 1 && playerincapture == 1) {
    return;
  }
  const _0x126765 = getDrugsMissionInfo()[0];
  main_browser.execute("APPS.state.hud.mission_complete3 = " + _0x36c630[2] + ";");
  main_browser.execute("APPS.state.hud.mission_name3 = " + JSON.stringify(_0x126765.task_three) + ";");
  main_browser.execute("APPS.state.hud.mission_complete2 = " + _0x36c630[1] + ";");
  main_browser.execute("APPS.state.hud.mission_name2 = " + JSON.stringify(_0x126765.task_two) + ";");
  main_browser.execute("APPS.state.hud.mission_time_fulltime = " + _0x126765.full_time + ";");
  main_browser.execute("APPS.state.hud.mission_time = " + _0x436697 + ";");
  main_browser.execute("APPS.state.hud.mission_complete1 = " + _0x36c630[0] + ";");
  main_browser.execute("APPS.state.hud.mission_name1 = " + JSON.stringify(_0x126765.task_one) + ";");
  main_browser.execute("APPS.state.hud.mission_name = " + JSON.stringify(_0x126765.name) + ";");
  main_browser.execute("APPS.state.hud.mission_show = true;");
});
mp.events.add("Drugs_Mission_Browser_Hide", function () {
  main_browser.execute("APPS.state.hud.mission_show = false;");
});
global.CreateGunOpened = false;
mp.events.add("OpenCreateGun", (_0x430003, _0x14aafe, _0x1f08bd) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  CreateGunOpened = true;
  mp.events.call("Disablechat");
  const _0x702557 = "{Craft_Items:[\n    {\"NeedItem\":1050,\"Count\":1,\"Preview\":74,\"Gun\":0,\"Name\":\"" + language["Основная часть пистолета"][curr_lang] + "\"},\n    {\"NeedItem\":1051,\"Count\":1,\"Preview\":75,\"Gun\":0,\"Name\":\"" + language.Рукоятка[curr_lang] + "\"},\n    //\n    {\"NeedItem\":1052,\"Count\":3,\"Preview\":76,\"Gun\":1,\"Name\":\"" + language["Основная часть пистолета-пулемета"][curr_lang] + "\"},\n    {\"NeedItem\":1053,\"Count\":3,\"Preview\":77,\"Gun\":1,\"Name\":\"" + language.Рукоятка[curr_lang] + "\"},\n    //\n    {\"NeedItem\":1054,\"Count\":1,\"Preview\":78,\"Gun\":2,\"Name\":\"" + language.Ствол[curr_lang] + "\"},\n    {\"NeedItem\":1055,\"Count\":1,\"Preview\":79,\"Gun\":2,\"Name\":\"" + language["Основная часть штурмовой винтовки"][curr_lang] + "\"},\n    {\"NeedItem\":1056,\"Count\":1,\"Preview\":80,\"Gun\":2,\"Name\":\"" + language.Рукоятка[curr_lang] + "\"},\n    //\n    {\"NeedItem\":1057,\"Count\":1,\"Preview\":81,\"Gun\":3,\"Name\":\"" + language["Основная часть дробовика"][curr_lang] + "\"},\n    {\"NeedItem\":1058,\"Count\":1,\"Preview\":82,\"Gun\":3,\"Name\":\"" + language.Рукоятка[curr_lang] + "\"},\n    //\n    {\"NeedItem\":1059,\"Count\":4,\"Preview\":83,\"Gun\":4,\"Name\":\"" + language["Задвижной механизм"][curr_lang] + "\"},\n    {\"NeedItem\":1060,\"Count\":4,\"Preview\":84,\"Gun\":4,\"Name\":\"" + language.Прицел[curr_lang] + "\"},\n    {\"NeedItem\":1061,\"Count\":4,\"Preview\":85,\"Gun\":4,\"Name\":\"" + language["Основная часть снайперской винтовки"][curr_lang] + "\"},\n    {\"NeedItem\":1062,\"Count\":4,\"Preview\":86,\"Gun\":4,\"Name\":\"" + language.Рукоятка[curr_lang] + "\"},\n    //\n    {\"NeedItem\":1321,\"Count\":1,\"Preview\":232,\"Gun\":5,\"Name\":\"" + language["Основная часть револьвера"][curr_lang] + "\"},\n    {\"NeedItem\":1322,\"Count\":1,\"Preview\":233,\"Gun\":5,\"Name\":\"" + language["Рукоятка револьвера"][curr_lang] + "\"},\n    {\"NeedItem\":1323,\"Count\":1,\"Preview\":234,\"Gun\":5,\"Name\":\"" + language["Барабан револьвера"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":1,\"Preview\":139,\"Gun\":6,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    {\"NeedItem\":1332,\"Count\":1,\"Preview\":140,\"Gun\":6,\"Name\":\"" + language["Ткань красного цвета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":1,\"Preview\":139,\"Gun\":7,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    {\"NeedItem\":1333,\"Count\":1,\"Preview\":141,\"Gun\":7,\"Name\":\"" + language["Ткань синего цвета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":1,\"Preview\":139,\"Gun\":8,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    {\"NeedItem\":1334,\"Count\":1,\"Preview\":142,\"Gun\":8,\"Name\":\"" + language["Ткань желтого цвета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":1,\"Preview\":139,\"Gun\":9,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    {\"NeedItem\":1335,\"Count\":1,\"Preview\":143,\"Gun\":9,\"Name\":\"" + language["Ткань зеленого цвета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":1,\"Preview\":139,\"Gun\":10,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    {\"NeedItem\":1336,\"Count\":1,\"Preview\":144,\"Gun\":10,\"Name\":\"" + language["Ткань фиолетового цвета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":5,\"Preview\":139,\"Gun\":11,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n    //\n    {\"NeedItem\":1331,\"Count\":5,\"Preview\":139,\"Gun\":12,\"Name\":\"" + language["Пластины для бронежилета"][curr_lang] + "\"},\n],\"Inv_Items\":[" + _0x430003 + "],\"player_pid\":" + _0x14aafe + ",\"selected_gun\":-1,\"selected_gunlist\":-1,\"Gun_Order\":" + JSON.stringify(_0x1f08bd) + ",\"show\":true}";
  main_browser.execute("APPS.state.create_gun = " + _0x702557);
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCreateGun = function () {
  if (CreateGunOpened) {
    main_browser.execute("APPS.state.create_gun.show = false;");
    CreateGunOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Gun_Create_Error", _0x48bfe6 => {
  if (CreateGunOpened) {
    main_browser.execute("APP.sendErrorMessage('" + _0x48bfe6 + "');");
  }
});
mp.events.add("Client_MakeGun", _0x42dd6f => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_MakeGangGun", _0x42dd6f);
  }
});
mp.events.add("ReLoad_Gun_Orders", _0x11bf3d => {
  if (CreateGunOpened) {
    main_browser.execute("APPS.state.create_gun.Gun_Order = " + JSON.stringify(_0x11bf3d));
  }
});
mp.events.add("ReLoad_Gun_Components", _0x1ba3b6 => {
  if (CreateGunOpened) {
    main_browser.execute("APPS.state.create_gun.Inv_Items = [" + _0x1ba3b6 + "]");
  }
});
mp.events.add("Client_GetGangGuns", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetGangGuns");
  }
});
let drug_obj;
let drug_pos;
let in_drug_process = false;
function StartDrugsRender() {
  HintShow(language["ЛКМ - посадить коноплю<br>ПКМ - отменить посадку конопли"][curr_lang]);
  drug_obj = mp.objects.new(mp.game.joaat("prop_weed_01"), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 200,
    dimension: 0
  });
}
function FinishWeedSeed(_0x3a8afe) {
  if (in_drug_process == 1) {
    in_drug_process = false;
    if (_0x3a8afe == 1 && localplayer.isInWater()) {
      if (drug_obj && mp.objects.exists(drug_obj)) {
        drug_obj.destroy();
        drug_obj = undefined;
      }
      return mp.game.ui.notifications.show(language["Нельзя сажать коноплю в воде"][curr_lang], false, 0, 6);
    }
    if (_0x3a8afe == 1 && mp.objects.exists(drug_obj)) {
      mp.events.callRemote("Server_StartCreateWeed", JSON.stringify(drug_pos));
    }
    if (drug_obj && mp.objects.exists(drug_obj)) {
      drug_obj.destroy();
      drug_obj = undefined;
    }
  }
  HintClose();
}
mp.events.add("click", (_0x5c7ff5, _0x4d34fc, _0x299210, _0x5208d0, _0x2daafa, _0x4d9368, _0x4a8443, _0x19b1f7) => {
  if (loggedin && in_drug_process != 0) {
    if (_0x5208d0 == "left") {
      FinishWeedSeed(1);
    } else if (_0x5208d0 == "right") {
      FinishWeedSeed(2);
    }
  }
});
mp.events.add("render", () => {
  if (!loggedin || in_drug_process == 0) {
    return;
  }
  mp.game.controls.disableControlAction(2, 22, true);
  mp.game.controls.disableControlAction(2, 24, true);
  mp.game.controls.disableControlAction(2, 69, true);
  mp.game.controls.disableControlAction(2, 70, true);
  mp.game.controls.disableControlAction(2, 92, true);
  mp.game.controls.disableControlAction(2, 114, true);
  mp.game.controls.disableControlAction(2, 121, true);
  mp.game.controls.disableControlAction(2, 140, true);
  mp.game.controls.disableControlAction(2, 141, true);
  mp.game.controls.disableControlAction(2, 142, true);
  mp.game.controls.disableControlAction(2, 257, true);
  mp.game.controls.disableControlAction(2, 263, true);
  mp.game.controls.disableControlAction(2, 264, true);
  mp.game.controls.disableControlAction(2, 331, true);
  mp.game.controls.disableControlAction(2, 25, true);
  mp.game.controls.disableControlAction(2, 66, true);
  mp.game.controls.disableControlAction(2, 67, true);
  mp.game.controls.disableControlAction(2, 68, true);
  mp.game.controls.disableControlAction(2, 91, true);
  let _0x3fbc8e = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2, res.y / 2, 0));
  let _0xf50420 = mp.game.gameplay.getGroundZFor3dCoord(_0x3fbc8e.x, _0x3fbc8e.y, _0x3fbc8e.z, 0, false);
  for (let _0x4019c6 = 1; _0x4019c6 < 11 && (_0xf50420 != 0 || (_0xf50420 = mp.game.gameplay.getGroundZFor3dCoord(_0x3fbc8e.x, _0x3fbc8e.y, _0x3fbc8e.z + _0x4019c6, 0, false), _0xf50420 == 0)); _0x4019c6++);
  if (_0xf50420 == 0) {
    _0xf50420 = mp.game.gameplay.getGroundZFor3dCoord(_0x3fbc8e.x, _0x3fbc8e.y, _0x3fbc8e.z + 50, 0, false);
  }
  _0x3fbc8e.z = _0xf50420;
  drug_pos = _0x3fbc8e;
  if (drug_obj && mp.objects.exists(drug_obj)) {
    drug_obj.position = _0x3fbc8e;
    drug_obj.setCollision(false, false);
  }
});
mp.events.add("Client_Start_WeedPlace", () => {
  if (in_drug_process != 1) {
    StartDrugsRender();
    in_drug_process = true;
  }
});
let weed_quest_blips;
let weed_quest_marker;
let weed_quest_colshape;
let sea_war_blips;
let sea_war_colshape;
let fam_order_blips;
let fam_order_colshape;
let weed_blips = null;
let weed_blips_timeout = null;
mp.events.add("Client_ShowWeedPlace", _0x4892b1 => {
  if (!_0x4892b1 || typeof _0x4892b1.x != "number" || typeof _0x4892b1.y != "number") {
    return;
  }
  if (weed_blips != null) {
    mp.game.ui.removeBlip(weed_blips);
    weed_blips = null;
  }
  if (weed_blips_timeout != null) {
    clearTimeout(weed_blips_timeout);
    weed_blips_timeout = null;
  }
  let _0x33ccc9 = randomInteger(-50, 50);
  let _0x302fc8 = randomInteger(-50, 50);
  const _0x339b6c = new mp.Vector3(_0x4892b1.x + _0x33ccc9, _0x4892b1.y + _0x302fc8, 0);
  const _0x1b8c12 = parseFloat(70);
  SetGPSLocation(_0x339b6c.x, _0x339b6c.y, _0x339b6c.z, true, 0, _0x1b8c12);
  weed_blips = mp.game.ui.addBlipForArea(_0x339b6c.x, _0x339b6c.y, _0x339b6c.z, _0x1b8c12 * 2, _0x1b8c12 * 2);
  mp.game.ui.setBlipSprite(weed_blips, 5);
  mp.game.ui.setBlipAlpha(weed_blips, 175);
  mp.game.ui.setBlipColour(weed_blips, 37);
  mp.game.ui.setBlipSquaredRotation(weed_blips, 0);
  mp.game.ui.setBlipRotation(weed_blips, 0);
  mp.game.ui.setBlipAsShortRange(weed_blips, true);
  mp.game.ui.notifications.show(language["Мecтoпoлoжeниe плантации конопли oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  weed_blips_timeout = setTimeout(() => {
    mp.game.ui.notifications.show(language["Paдap зaкoнчил cлeжeниe зa плантацией"][curr_lang], false, 0, 2);
    if (weed_blips != null) {
      mp.game.ui.removeBlip(weed_blips);
      weed_blips = null;
    }
    weed_blips_timeout = null;
  }, 300000);
});
mp.events.add("Client_LoadWeedVehicleZone", _0x8c9b20 => {
  if (weed_quest_marker) {
    weed_quest_marker.destroy();
    weed_quest_marker = null;
  }
  if (weed_quest_colshape) {
    weed_quest_colshape.destroy();
    weed_quest_colshape = null;
  }
  if (weed_quest_blips) {
    weed_quest_blips.destroy();
    weed_quest_blips = null;
  }
  weed_quest_colshape = mp.colshapes.newCircle(_0x8c9b20[0], _0x8c9b20[1], 5);
  weed_quest_colshape.is_weed_quest_vehicle_trace = true;
  weed_quest_blips = mp.blips.new(1, new mp.Vector3(_0x8c9b20[0], _0x8c9b20[1], _0x8c9b20[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  weed_quest_blips.setRoute(true);
});
mp.events.add("Client_LoadWeedZone", () => {
  if (weed_quest_marker) {
    weed_quest_marker.destroy();
    weed_quest_marker = null;
  }
  if (weed_quest_colshape) {
    weed_quest_colshape.destroy();
    weed_quest_colshape = null;
  }
  if (weed_quest_blips) {
    weed_quest_blips.destroy();
    weed_quest_blips = null;
  }
  const _0x203e9a = [[1659.489, 4961.446, 42.466], [1682.434, 6431.982, 32.157], [1426.416, 6349.722, 23.985], [-2170.796, 4282.287, 49.044]];
  const _0x2f45d9 = getRandomInt(0, _0x203e9a.length);
  weed_quest_marker = mp.markers.new(1, new mp.Vector3(_0x203e9a[_0x2f45d9][0], _0x203e9a[_0x2f45d9][1], _0x203e9a[_0x2f45d9][2] - 1), 5, {
    rotation: new mp.Vector3(0, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  weed_quest_colshape = mp.colshapes.newCircle(_0x203e9a[_0x2f45d9][0], _0x203e9a[_0x2f45d9][1], 15);
  weed_quest_colshape.is_weed_quest_trace = true;
  weed_quest_blips = mp.blips.new(1, new mp.Vector3(_0x203e9a[_0x2f45d9][0], _0x203e9a[_0x2f45d9][1], _0x203e9a[_0x2f45d9][2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  weed_quest_blips.setRoute(true);
});
mp.events.add("playerEnterColshape", _0x19bfc7 => {
  if (!mp.colshapes.exists(_0x19bfc7) || _0x19bfc7.is_weed_quest_trace != 1) {
    if (_0x19bfc7.is_weed_quest_vehicle_trace == 1) {
      if (weed_quest_marker) {
        weed_quest_marker.destroy();
        weed_quest_marker = null;
      }
      if (weed_quest_colshape) {
        weed_quest_colshape.destroy();
        weed_quest_colshape = null;
      }
      if (weed_quest_blips) {
        weed_quest_blips.destroy();
        weed_quest_blips = null;
      }
      return;
    } else if (_0x19bfc7.is_sea_war_locate == 1) {
      if (sea_war_colshape) {
        sea_war_colshape.destroy();
        sea_war_colshape = null;
      }
      if (sea_war_blips) {
        sea_war_blips.destroy();
        sea_war_blips = null;
      }
      return;
    } else if (_0x19bfc7.is_fam_load_order == 1) {
      if (fam_order_colshape) {
        fam_order_colshape.destroy();
        fam_order_colshape = null;
      }
      if (fam_order_blips) {
        fam_order_blips.destroy();
        fam_order_blips = null;
      }
      return;
    } else if (_0x19bfc7.is_fam_unload_order == 1) {
      if (fam_order_colshape) {
        fam_order_colshape.destroy();
        fam_order_colshape = null;
      }
      if (fam_order_blips) {
        fam_order_blips.destroy();
        fam_order_blips = null;
      }
      mp.events.callRemote("Server_Unload_Fam_Order_Gang");
      return;
    } else {
      if (_0x19bfc7.is_bookmark == 1) {
        mp.events.callRemote("Server_GangBookMarkDoneS");
      }
      return;
    }
  }
  mp.events.callRemote("Server_Weed_Passed_Finish");
});
mp.events.add("Client_LoadWeedZoneCancel", () => {
  if (weed_quest_marker) {
    weed_quest_marker.destroy();
    weed_quest_marker = null;
  }
  if (weed_quest_colshape) {
    weed_quest_colshape.destroy();
    weed_quest_colshape = null;
  }
  if (weed_quest_blips) {
    weed_quest_blips.destroy();
    weed_quest_blips = null;
  }
});
mp.blips.new(496, new mp.Vector3(-98.899, 1910.136, 196.991), {
  name: language["Поле конопли"][curr_lang],
  scale: 1,
  color: 2,
  drawDistance: 25,
  shortRange: true
});
mp.events.add("Client_SeaWarLocate", _0x5ab218 => {
  let _0x52be8c;
  if (sea_war_colshape) {
    sea_war_colshape.destroy();
    sea_war_colshape = null;
  }
  if (sea_war_blips) {
    sea_war_blips.destroy();
    sea_war_blips = null;
  }
  if (_0x5ab218 == 1) {
    _0x52be8c = [2831.599, -625.423, 1.864];
  } else if (_0x5ab218 == 2) {
    _0x52be8c = [-1740.251, 4956.126, 2.556];
  } else {
    if (_0x5ab218 != 3) {
      return;
    }
    _0x52be8c = [61.539, 7228.644, 3.158];
  }
  sea_war_colshape = mp.colshapes.newCircle(_0x52be8c[0], _0x52be8c[1], 40);
  sea_war_colshape.is_sea_war_locate = true;
  sea_war_blips = mp.blips.new(1, new mp.Vector3(_0x52be8c[0], _0x52be8c[1], _0x52be8c[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  sea_war_blips.setRoute(true);
});
mp.events.add("Client_SeaWarLocationDestroy", () => {
  if (sea_war_colshape) {
    sea_war_colshape.destroy();
    sea_war_colshape = null;
  }
  if (sea_war_blips) {
    sea_war_blips.destroy();
    sea_war_blips = null;
  }
});
mp.events.add("Client_ShowGangSeaWarTimer", function (_0x3c4ee0, _0xb1ae72 = 0) {
  main_browser.execute("APPS.state.hud.sea_battle_time_fulltime = " + _0xb1ae72 + ";");
  main_browser.execute("APPS.state.hud.sea_battle_time = " + _0x3c4ee0 + ";");
  main_browser.execute("APPS.state.hud.sea_battle_show = true;");
});
mp.events.add("Client_ShowGangSeaWarTimerHide", function () {
  main_browser.execute("APPS.state.hud.sea_battle_show = false;");
});
mp.events.add("Client_Fam_load_order_zone", function () {
  if (fam_order_colshape) {
    fam_order_colshape.destroy();
    fam_order_colshape = null;
  }
  if (fam_order_blips) {
    fam_order_blips.destroy();
    fam_order_blips = null;
  }
  fam_order_colshape = mp.colshapes.newCircle(130.559, -2992.885, 20);
  fam_order_colshape.is_fam_load_order = true;
  fam_order_blips = mp.blips.new(1, new mp.Vector3(130.559, -2992.885, 7.031), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  fam_order_blips.setRoute(true);
});
mp.events.add("Client_Fam_destroy_order_zone", () => {
  if (fam_order_colshape) {
    fam_order_colshape.destroy();
    fam_order_colshape = null;
  }
  if (fam_order_blips) {
    fam_order_blips.destroy();
    fam_order_blips = null;
  }
});
global.gang_order_box_in_hand = false;
mp.events.add("Client_Fam_Order_In_Hands", _0x3f2727 => {
  gang_order_box_in_hand = _0x3f2727;
});
mp.events.add("Client_Fam_Order_Event_Counter", _0x1b792a => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Загружено[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["амуниции:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = \"" + _0x1b792a + "\";");
  main_browser.execute("APPS.state.hud.job_hud = 121;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("Client_Fam_Order_Event_Counter_Destroy", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});
mp.events.add("Client_Show_Fam_Order_House_Location", function (_0x48a62b) {
  if (fam_order_colshape) {
    fam_order_colshape.destroy();
    fam_order_colshape = null;
  }
  if (fam_order_blips) {
    fam_order_blips.destroy();
    fam_order_blips = null;
  }
  fam_order_colshape = mp.colshapes.newCircle(_0x48a62b[0], _0x48a62b[1], 20);
  fam_order_colshape.is_fam_unload_order = true;
  fam_order_blips = mp.blips.new(1, new mp.Vector3(_0x48a62b[0], _0x48a62b[1], _0x48a62b[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  fam_order_blips.setRoute(true);
});
mp.colshapes.newSphere(1777.821, 2592.08, 50.55, 1.5).is_jail_computer = true;
global.at_jail_computer = false;
global.at_gang_graffiti = 0;
mp.events.add("playerEnterColshape", _0x69e34c => {
  if (mp.colshapes.exists(_0x69e34c) && _0x69e34c.is_jail_computer == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_jail_computer = true;
    return;
  }
  if (_0x69e34c.graffiti_index > 0) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_gang_graffiti = _0x69e34c.graffiti_index;
  }
});
mp.events.add("playerExitColshape", _0x3a93c0 => {
  if (_0x3a93c0.is_jail_computer == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_jail_computer = false;
    return;
  }
  if (_0x3a93c0.graffiti_index > 0) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_gang_graffiti = 0;
  }
});
mp.events.add("Client_StartJailBreak", () => {
  main_browser.execute("APPS.state.hud.interact = false;");
  at_jail_computer = false;
  StartCustomSound("skill_check", "sounds/skillcheck/skill_check.ogg", 0.2);
  main_browser.execute("APPS.state.skill_check = {\"show\":true}");
  mp.gui.cursor.show(true, true);
  is_skill_check = 2;
  localplayer.freezePosition(true);
});
mp.events.add("Client_CancelJailBreak", () => {
  main_browser.execute("APPS.state.skill_check.show = false;");
  localplayer.freezePosition(false);
  is_freezed = false;
  is_skill_check = 0;
  mp.gui.cursor.show(false, false);
});
mp.events.add("Client_SetJailBreakState", _0x2b1aed => {
  if (_0x2b1aed == 1) {
    const _0x51b478 = mp.game.interior.getInteriorAtCoordsWithType(1787.004, 2593.1984, 45.7978, "int_prison_main");
    mp.game.interior.enableInteriorProp(_0x51b478, "prison_alarm");
    mp.game.interior.refreshInterior(_0x51b478);
    mp.game.audio.startAlarm("PRISON_ALARMS", true);
  } else {
    const _0x3ccebe = mp.game.interior.getInteriorAtCoordsWithType(1787.004, 2593.1984, 45.7978, "int_prison_main");
    mp.game.interior.disableInteriorProp(_0x3ccebe, "prison_alarm");
    mp.game.interior.refreshInterior(_0x3ccebe);
    mp.game.audio.stopAlarm("PRISON_ALARMS", true);
  }
});
let army_interval;
let graffiti_war_positions = [[-1063.999, -1582.733, 4.984528], [-1090.214, -1494.656, 5.54144], [-1161.348, -1547.182, 5.374132], [-1134.697, -1454.019, 5.398067], [-32.93038, -1513.497, 31.57577], [64.45002, -1619.964, 31.01658], [159.2643, -1489.478, 30.46731], [378.3479, -1440.907, 30.19609], [393.6838, -1647.146, 30.2461], [178.6349, -1687.35, 30.50755], [275.5642, -1757.264, 29.69752], [39.775, -1758.4213, 29.8695], [183.2401, -1844.094, 27.77606], [241.0139, -1967.03, 23.24383], [343.5188, -2075.432, 21.25304], [365.1045, -1836.182, 28.79584], [456.7234, -1738.035, 29.33724], [546.6893, -1590.341, 29.15702], [1133.432, -1740.399, 29.376], [1275.808, -1746.505, 52.77223], [1266.369, -1907.897, 38.49915], [1231.906, -1487.258, 35.032], [-1216.343, -1316.74, 5.071144], [-1275.767, -1349.425, 4.933165], [-1239.326, -1217.985, 7.773088], [-1323.448, -1259.822, 5.268311], [-967.001, -1089.499, 2.492609], [-1011.844, -991.846, 2.455065], [-1102.125, -1057.871, 2.549], [-1045.34, -1137.973, 2.679375], [-358.8867, -1534.445, 28.29569], [-310.0295, -1331.22, 31.93451], [-170.5165, -1316.486, 33.30093], [-20.94198, -1311.688, 29.63584], [141.4297, -1288.602, 29.90005], [261.5517, -1359.311, 31.14216], [437.3979, -1317.314, 31.60426], [746.0532, -1542.456, 14.08723], [1164.389, -1310.431, 35.41022], [991.7937, -1814.5, 31.95873], [992.6995, -1939.472, 31.15731], [983.7428, -1988.411, 31.70356], [877.0973, -2008.482, 31.6706], [946.9106, -2142.237, 38.72734], [829.2359, -2333.872, 31.36108], [971.7253, -2416.676, 32.07115]];
if (global.curr_lang == "ru") {
  graffiti_war_positions = [[-1063.999, -1582.733, 4.984528], [-1090.214, -1494.656, 5.54144], [-1161.348, -1547.182, 5.374132], [-1134.697, -1454.019, 5.398067], [-32.93038, -1513.497, 31.57577], [64.45002, -1619.964, 31.01658], [159.2643, -1489.478, 30.46731], [378.3479, -1440.907, 30.19609], [393.6838, -1647.146, 30.2461], [178.6349, -1687.35, 30.50755], [275.5642, -1757.264, 29.69752], [39.775, -1758.4213, 29.8695], [183.2401, -1844.094, 27.77606], [241.0139, -1967.03, 23.24383], [343.5188, -2075.432, 21.25304], [365.1045, -1836.182, 28.79584], [456.7234, -1738.035, 29.33724], [546.6893, -1590.341, 29.15702], [1133.432, -1740.399, 29.376], [1275.808, -1746.505, 52.77223], [1266.369, -1907.897, 38.49915], [1231.906, -1487.258, 35.032], [-1216.343, -1316.74, 5.071144], [-983, -1331.6, 6.4], [-1239.326, -1217.985, 7.773088], [-1176.9, -1134.4, 6.3], [-967.001, -1089.499, 2.492609], [-1011.844, -991.846, 2.455065], [-1102.125, -1057.871, 2.549], [-1045.34, -1137.973, 2.679375], [-358.8867, -1534.445, 28.29569], [-310.0295, -1331.22, 31.93451], [-170.5165, -1316.486, 33.30093], [-20.94198, -1311.688, 29.63584], [141.4297, -1288.602, 29.90005], [261.5517, -1359.311, 31.14216], [437.3979, -1317.314, 31.60426], [746.0532, -1542.456, 14.08723], [1164.389, -1310.431, 35.41022], [991.7937, -1814.5, 31.95873], [992.6995, -1939.472, 31.15731], [983.7428, -1988.411, 31.70356], [877.0973, -2008.482, 31.6706], [946.9106, -2142.237, 38.72734], [829.2359, -2333.872, 31.36108], [971.7253, -2416.676, 32.07115]];
}
for (let e = 0; e < graffiti_war_positions.length; e++) {
  mp.colshapes.newSphere(graffiti_war_positions[e][0], graffiti_war_positions[e][1], graffiti_war_positions[e][2], 1.5).graffiti_index = e + 1;
}
let capture_interval;
let drugs_interval;
let army_interval_time = 0;
mp.events.add("Client_ArmyStartIntervalCounter", (_0x20ec09, _0x443ffa, _0x599b72, _0xf500ba, _0x4bf16b, _0x1b62c3, _0x5a4504 = "") => {
  if (army_interval != null) {
    clearInterval(army_interval);
    army_interval = undefined;
  }
  army_interval_time = _0x20ec09;
  army_interval = setInterval(function () {
    if (army_interval_time > 0) {
      army_interval_time--;
      if (army_interval_time == 10) {
        PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
      }
      let _0x32b01a = [0, 0, 0];
      mp.players.forEachInRange(_0x599b72, _0xf500ba, _0x44439d => {
        if (_0x44439d.member >= 7 && _0x44439d.member <= 11 && _0x44439d.dimension == 0) {
          if (_0x44439d.getAlpha() != 0) {
            _0x32b01a[0]++;
          }
        } else if (_0x44439d.member != 3 && _0x44439d.member != 4 && _0x44439d.member != 12 && _0x44439d.member != 2 || _0x44439d.dimension != 0) {
          if ((_0x44439d.member == 15 || _0x44439d.member == 16 || _0x44439d.member == 17 || _0x44439d.member == 18) && _0x44439d.dimension == 0) {
            if (_0x44439d.getAlpha() != 0) {
              _0x32b01a[2]++;
            }
          }
        } else if (_0x44439d.getAlpha() != 0) {
          _0x32b01a[1]++;
        }
      });
      ShowDrugLabsDesign(_0x4bf16b, _0x32b01a[0], _0x1b62c3, _0x32b01a[1], _0x5a4504, _0x32b01a[2], "", 0, "", 0, army_interval_time, _0x443ffa, language["Ограбление военной базы"][curr_lang]);
    } else {
      if (army_interval != null) {
        clearInterval(army_interval);
        army_interval = undefined;
      }
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearArmyIntervalCounter", () => {
  if (army_interval != null) {
    clearInterval(army_interval);
    army_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
mp.events.add("Client_UpdateArmyCaptureAreaTime", _0xf2ea55 => {
  army_interval_time = _0xf2ea55;
});
mp.events.add("Client_CaptureStartIntervalCounter", (_0x465b59, _0x2a5a4b, _0x13da72, _0x23a007, _0x3aad5e) => {
  if (capture_interval != null) {
    clearInterval(capture_interval);
    capture_interval = undefined;
  }
  capture_interval = setInterval(function () {
    if (_0x13da72 > 0) {
      if (--_0x13da72 == 10) {
        PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
      }
      let _0x279b30 = [0, 0];
      mp.players.forEachInStreamRange(_0x4695df => {
        if (mp.Vector3.Distance2D(_0x4695df.position, _0x23a007) <= _0x3aad5e && _0x4695df.dead_state != 1) {
          if (_0x4695df.member == _0x465b59 && _0x4695df.dimension == 400) {
            if (_0x4695df.getAlpha() != 0) {
              _0x279b30[0]++;
            }
          } else if (_0x4695df.member == _0x2a5a4b && _0x4695df.dimension == 400 && _0x4695df.getAlpha() != 0) {
            _0x279b30[1]++;
          }
        }
      });
      main_browser.execute("APPS.state.hud.capturetime = " + _0x13da72 + ";");
      main_browser.execute("APPS.state.hud.gangcount1 = " + _0x279b30[0] + ";");
      main_browser.execute("APPS.state.hud.gangcount2 = " + _0x279b30[1] + ";");
      main_browser.execute("APPS.state.hud.gang1 = " + _0x465b59 + ";");
      main_browser.execute("APPS.state.hud.gang2 = " + _0x2a5a4b + ";");
      main_browser.execute("APPS.state.hud.capture_show = true;");
    } else {
      if (capture_interval != null) {
        clearInterval(capture_interval);
        capture_interval = undefined;
      }
      main_browser.execute("APPS.state.hud.capture_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearCaptureIntervalCounter", () => {
  if (capture_interval != null) {
    clearInterval(capture_interval);
    capture_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.capture_show = false;");
});
mp.events.add("Client_GangRaidIntervalCounter", (_0x48b3c6, _0x123b08, _0x575b1d, _0x204841, _0x998043, _0x1c5a61) => {
  if (drugs_interval != null) {
    clearInterval(drugs_interval);
    drugs_interval = undefined;
  }
  drugs_interval = setInterval(function () {
    if (_0x123b08 > 0) {
      _0x123b08--;
    }
    if (_0x123b08 == 10) {
      PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
    }
    let _0x4a4828 = [0, 0, 0, 0, 0, 0];
    mp.players.forEachInRange(_0x204841, _0x998043, _0x22638e => {
      if (_0x22638e.member == _0x48b3c6 && _0x22638e.dimension == 0) {
        if (_0x22638e.getAlpha() != 0) {
          _0x4a4828[0]++;
        }
      } else if (_0x22638e.member == 3 && _0x22638e.dimension == 0) {
        if (_0x22638e.getAlpha() != 0) {
          _0x4a4828[1]++;
        }
      } else if (_0x22638e.member == 4 && _0x22638e.dimension == 0) {
        if (_0x22638e.getAlpha() != 0) {
          _0x4a4828[2]++;
        }
      } else if (_0x22638e.member == 12 && _0x22638e.dimension == 0) {
        if (_0x22638e.getAlpha() != 0) {
          _0x4a4828[3]++;
        }
      } else if (_0x22638e.member == 14 && _0x22638e.dimension == 0) {
        if (_0x22638e.getAlpha() != 0) {
          _0x4a4828[4]++;
        }
      } else if (_0x22638e.member == 2 && _0x22638e.dimension == 0 && _0x22638e.getAlpha() != 0) {
        _0x4a4828[5]++;
      }
    });
    ShowDrugLabsDesign(_0x1c5a61, _0x4a4828[0], language.LSPD[curr_lang], _0x4a4828[1], language.SAHP[curr_lang], _0x4a4828[2], language.FIB[curr_lang], _0x4a4828[3], language.GOV[curr_lang], _0x4a4828[4], _0x123b08, _0x575b1d, language["Рейд на банду"][curr_lang], language["Национальная гвардия"][curr_lang], _0x4a4828[5]);
    if (_0x123b08 <= 0 && (_0x4a4828[0] == 0 || _0x4a4828[1] == 0)) {
      if (drugs_interval != null) {
        clearInterval(drugs_interval);
        drugs_interval = undefined;
      }
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearRaidIntervalCounter", () => {
  if (drugs_interval != null) {
    clearInterval(drugs_interval);
    drugs_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
let bookmarks_market = null;
let bookmarks_sphere = null;
let bookmarks_blip = null;
function GenerateBookMarkPlace(_0x3b7b3e, _0x5bb974, _0x3079ea) {
  if (bookmarks_market) {
    bookmarks_market.destroy();
    bookmarks_market = null;
  }
  if (bookmarks_sphere) {
    bookmarks_sphere.destroy();
    bookmarks_sphere = null;
  }
  if (bookmarks_blip) {
    bookmarks_blip.destroy();
    bookmarks_blip = null;
  }
  mp.game.ui.notifications.show(language["Отправляйтесь на указанные координаты и спрячьте клад"][curr_lang], false, 0, 2);
  bookmarks_sphere = mp.colshapes.newCircle(_0x3b7b3e, _0x5bb974, 1.2);
  bookmarks_sphere.is_bookmark = true;
  bookmarks_blip = mp.blips.new(1, new mp.Vector3(_0x3b7b3e, _0x5bb974, _0x3079ea), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  bookmarks_blip.setRoute(true);
  bookmarks_market = mp.markers.new(2, new mp.Vector3(_0x3b7b3e, _0x5bb974, _0x3079ea), 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
}
mp.events.add("Client_AnnulateWorkBookMark", () => {
  if (bookmarks_market) {
    bookmarks_market.destroy();
    bookmarks_market = null;
  }
  if (bookmarks_sphere) {
    bookmarks_sphere.destroy();
    bookmarks_sphere = null;
  }
  if (bookmarks_blip) {
    bookmarks_blip.destroy();
    bookmarks_blip = null;
  }
});
mp.events.add("Client_StartWorkBookMark", (_0x453355, _0x55277c, _0x4aaa98) => {
  GenerateBookMarkPlace(_0x453355, _0x55277c, _0x4aaa98);
});
mp.events.addProc("Client_GetGhettoLeaderboardData", async () => {
  const _0x46f79a = await mp.events.callRemoteProc("Server_GetGhettoLeaderboardData");
  if (_0x46f79a && _0x46f79a.length) {
    return JSON.stringify(_0x46f79a);
  } else {
    return [];
  }
});
mp.events.addProc("Client_GetGhettoHistoryData", async () => {
  const _0x400401 = await mp.events.callRemoteProc("Server_GetGhettoHistoryData");
  mp.console.logInfo("data: " + JSON.stringify(_0x400401));
  if (_0x400401 && _0x400401.length) {
    return JSON.stringify(_0x400401);
  } else {
    return [];
  }
});
mp.events.add("Client_RequestStartCapture", (_0x3ecad8, _0x4ce7f3, _0x83b999, _0x365c54) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestStartCapture", _0x3ecad8, _0x4ce7f3, _0x83b999, _0x365c54);
  }
});
mp.events.add("Client_GetToCapture", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetToCapture");
  }
});
mp.events.add("Client_UpdateCaptureData", (_0x366066, _0x57cb1a) => {
  let _0x44fef0 = null;
  if (_0x366066 != null) {
    const _0x416b24 = Number(_0x57cb1a);
    const _0x368e1d = _0x366066.scheduledTimestamp != null ? Math.floor((_0x366066.scheduledTimestamp - _0x416b24) / 1000) : 0;
    _0x44fef0 = {
      attackGang: _0x366066.attacker,
      defenseGang: _0x366066.defender,
      territoryId: _0x366066.territoryId,
      time_left: _0x368e1d,
      weapon: _0x366066.weaponId,
      battle_type: _0x366066.battleType,
      started: _0x366066.started
    };
  }
  main_browser.execute("APPS.state.ghetto_map.current_capture = " + JSON.stringify(_0x44fef0) + ";");
});
global.captureWeapon = null;
mp.events.add("Client_SetPlayerAtCapture", _0x501962 => {
  CloseGhettoMap();
  captureWeapon = _0x501962;
});
const is_assault = [-1074790547, 961495388, -2084633992, -86904375, -1357824103, -1063057011, -1768145561, 2132975508, 2630476823, 1411633864, 3580733326, -714233970, -1664490473, -2066285827, 1649403952, -1658906650, 1169097655, 1893259930, 225678289, 1944373208, 1935736219, 4105699407, 2043510378, -189267889, 2131121731, 159133459, -618671525, 246470272, 1510232098, 643092200, 1479275977, 1872329548, 1049598265, 1601879086, 591348664, 3476462460, 4247612345, -47354951, -818504836, -416535927, 68064420, -573159372, 875322620, -310131221, -1692688104, 2335549165, 1947501357, 2617650185, 383319649, 2602279192, 3984836075, 3676295771, 1872837017, 1273326719, 1932551897, 1415169922, 3721807924, 3878431369, -1677317111, -1959418131, 2636060646, 2937143193, 3231910285];
const is_shotguns = [487013001, 1432025498, 2017895192, -494615257, -164528753, -1466123874, 984333226, -275439685, 317205821, -144582089, -1659689577, 2031082785, 1530821047, 118949450, 2204608296, 2635277719, 4150385207, -2090359000];
const is_revolver = [-1045183535, 713758669, -1889966421, 313667741, 1601192247, -129338303, -1074605776, -931231585, 413749043, 783018407, 79138191, 748196516, 2878787557, 2563517008, 3328708667, -966258629, -1416179739, -1731450288, 4203412798, 3893386441, -91554498, -401580855];
const is_smg = [mp.game.joaat("weapon_microsmg"), mp.game.joaat("weapon_smg"), mp.game.joaat("weapon_smg_mk2"), mp.game.joaat("weapon_assaultsmg"), mp.game.joaat("weapon_combatpdw"), -270015777];
mp.events.add("playerWeaponShot", (_0x3c6bbe, _0x261aa4) => {
  if (mp.players.local.dimension == 400 && captureWeapon != null) {
    const _0x4c7737 = currentWeapon();
    const _0x3eacf4 = captureWeapon;
    if (_0x3eacf4 === "assault_rifles") {
      allowed = is_assault;
    } else if (_0x3eacf4 === "revolvers") {
      allowed = is_revolver;
    } else if (_0x3eacf4 === "shotguns") {
      allowed = is_shotguns;
    } else if (_0x3eacf4 === "smg") {
      allowed = is_smg;
    }
    if (allowed.length && allowed.indexOf(_0x4c7737) === -1) {
      givenWeapon = -1569615261;
      main_browser.execute("APPS.state.hud.ammo = 0; APPS.state.hud.weapon = '';");
    }
  }
});