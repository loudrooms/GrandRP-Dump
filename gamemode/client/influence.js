global.InfluenceMapOpened = false;
mp.events.add("Client_OpenInfluenceMenu", (_0xd04db3, _0x119572, _0x265aca, _0x349d13) => {
  CloseFamilyMenu();
  if (GlobalCheck() == 1) {
    return;
  }
  InfluenceMapOpened = true;
  const _0x46967a = "{\"territories\":" + JSON.stringify(_0xd04db3) + ",\"my_influence\":" + _0x119572 + ",\"my_attacks\":" + _0x265aca + ",\"my_territories\":" + _0x349d13 + ",update_zone:'',\"show\":true}";
  main_browser.execute("APPS.state.influence = " + _0x46967a);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseInfluenceMap = function () {
  main_browser.execute("APPS.state.influence = false;");
  InfluenceMapOpened = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
};
mp.events.add("Client_InfluenceZoneCapture", _0x13f3a6 => {
  if (InfluenceMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AttackInfluenceZone", _0x13f3a6);
    }
  }
});
mp.events.add("Client_InfluenceZoneVote", _0x2e60b0 => {
  if (InfluenceMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DecideWhoWillWin", _0x2e60b0);
    }
  }
});
mp.events.add("Client_InfluenceZoneBet", _0x10b24d => {
  if (InfluenceMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_InfluenceMoneyBattle", _0x10b24d);
    }
  }
});
mp.events.add("Client_InfluenceZoneRoute", _0xa59d62 => {
  if (InfluenceMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GPSRouteToInfluenceZone", _0xa59d62);
    }
  }
});
mp.events.add("Client_GotoInfluencePage", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenInfluenceMenu");
  }
});
mp.events.add("Client_CloseInfluenceMap", () => {
  CloseInfluenceMap();
});
mp.events.add("Client_UpdateInfluenceZone", _0x623716 => {
  if (InfluenceMapOpened) {
    main_browser.execute("APPS.state.influence.update_zone = '" + JSON.stringify(_0x623716) + "';");
  }
});
let big_war_blips = null;
mp.events.add("Client_SetBigWarCaptureBlips", (_0xcef9de, _0x58c061, _0x2f4ad3, _0x54942a) => {
  big_war_blips = mp.blips.new(zone_blips, new mp.Vector3(_0xcef9de, _0x58c061, 0), {
    radius: parseFloat(_0x54942a),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_HideBigWarCaptureBlips", () => {
  if (loggedin && big_war_blips) {
    big_war_blips.destroy();
    big_war_blips = null;
  }
});
let race_blip;
let race_colshape;
let race_checkpoint;
let race_blips = null;
mp.events.add("Client_SetBigWarRaceBlips", (_0x17f5bc, _0x2748eb, _0x3d5026, _0x8e100c) => {
  race_blips = mp.blips.new(zone_blips, new mp.Vector3(_0x17f5bc, _0x2748eb, 0), {
    radius: parseFloat(_0x8e100c),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_HideBigWarRaceBlips", () => {
  if (loggedin && race_blips) {
    race_blips.destroy();
    race_blips = null;
  }
});
mp.events.add("Client_RaceFinalCountDown", () => {
  let _0x1cf867 = 6;
  let _0x1d1f35 = setInterval(() => {
    if (_0x1cf867 > 0) {
      _0x1cf867--;
      main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x1cf867) + ";");
      if (_0x1cf867 == 0) {
        if (_0x1d1f35 != null) {
          clearInterval(_0x1d1f35);
        }
        _0x1d1f35 = undefined;
        HideUnoffCaptureInterval();
      }
    }
  }, 1000);
});
mp.events.add("Client_ShowInfluenceRaceCheckpoint", (_0x278246, _0x387de4, _0x4d54fd, _0x571cd4 = []) => {
  if (race_blip && mp.blips.exists(race_blip)) {
    race_blip.destroy();
    race_blip = null;
  }
  if (race_colshape && mp.colshapes.exists(race_colshape)) {
    race_colshape.destroy();
    race_colshape = null;
  }
  if (race_checkpoint && mp.checkpoints.exists(race_checkpoint)) {
    race_checkpoint.destroy();
    race_checkpoint = null;
  }
  race_checkpoint = _0x4d54fd == 1 ? mp.checkpoints.new(4, new mp.Vector3(_0x387de4[0], _0x387de4[1], _0x387de4[2] - 1), 9, {
    direction: new mp.Vector3(0, 0, 0),
    color: [165, 0, 0, 255],
    visible: true,
    dimension: localplayer.dimension
  }) : mp.checkpoints.new(2, new mp.Vector3(_0x387de4[0], _0x387de4[1], _0x387de4[2] - 1), 9, {
    direction: new mp.Vector3(_0x571cd4[0], _0x571cd4[1], _0x571cd4[2]),
    color: [165, 0, 0, 255],
    visible: true,
    dimension: localplayer.dimension
  });
  race_colshape = mp.colshapes.newCircle(_0x387de4[0], _0x387de4[1], 9, localplayer.dimension);
  if (_0x278246 == 1) {
    race_colshape.is_influence_race = true;
  } else if (_0x278246 == 2) {
    race_colshape.is_club_race = true;
  } else if (_0x278246 == 3) {
    race_colshape.is_club_global_activity = true;
  }
  race_blip = mp.blips.new(1, new mp.Vector3(_0x387de4[0], _0x387de4[1], _0x387de4[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: localplayer.dimension
  });
  race_blip.setRoute(true);
});
mp.events.add("Client_HideRaceVariables", (_0x2e7de3 = 1) => {
  if (race_blip && mp.blips.exists(race_blip)) {
    race_blip.destroy();
    race_blip = null;
  }
  if (race_colshape && mp.colshapes.exists(race_colshape)) {
    race_colshape.destroy();
    race_colshape = null;
  }
  if (race_checkpoint && mp.checkpoints.exists(race_checkpoint)) {
    race_checkpoint.destroy();
    race_checkpoint = null;
  }
  if (_0x2e7de3 == 2) {
    main_browser.execute("APPS.state.hud.club_race_show = false;");
    if (club_race_interval != null) {
      clearInterval(club_race_interval);
      club_race_interval = undefined;
    }
  }
});
mp.events.add("playerEnterColshape", _0x267fcb => {
  if (_0x267fcb.is_influence_race == 1 && localplayer.isInAnyVehicle(false)) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.events.callRemote("Server_GetInfluenceRaceCheckpoint");
  } else if (_0x267fcb.is_club_race == 1 && localplayer.isInAnyVehicle(false)) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.events.callRemote("Server_GetClubRaceCheckpoint");
  } else if (_0x267fcb.is_club_global_activity == 1 && localplayer.isInAnyVehicle(false)) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.events.callRemote("Server_GetClubGlobalRaceCheckpoint");
  }
});
let influence_notification_timeout = null;
mp.events.add("Client_InfluenceNotification", (_0x116615, _0x1a89a3) => {
  if (influence_notification_timeout) {
    main_browser.execute("APPS.state.hud.influence_notif = false;");
    clearTimeout(influence_notification_timeout);
    influence_notification_timeout = null;
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  main_browser.execute("APPS.state.hud.influence_small_text = '" + _0x116615 + "';");
  main_browser.execute("APPS.state.hud.influence_text = '" + _0x1a89a3 + "';");
  main_browser.execute("APPS.state.hud.influence_notif = true;");
  influence_notification_timeout = setTimeout(() => {
    influence_notification_timeout = null;
    main_browser.execute("APPS.state.hud.influence_notif = false;");
  }, 10000);
});
global.at_influence_race = false;
mp.events.add("Client_CantLeaveVehicle", _0x4fabf6 => {
  at_influence_race = _0x4fabf6;
});