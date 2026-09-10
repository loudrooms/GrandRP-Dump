let easter_bigbox_blips;
let easter_bigbox_shape;
let christmas_arena_marker;
let christmas_arena_shape;
let christmas_arena_interval;
global.EasterMenuOpened = false;
mp.events.add("Client_ShowEasterMenu", (_0x56c49a, _0x537e5e) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x3a4702 = 0;
  if (localplayer.model != 1885233650) {
    _0x3a4702 = 1;
  }
  const _0x3192c9 = "{\"snow_balance\":" + _0x56c49a + ",\"online\":" + _0x537e5e + ",\"gender\":" + _0x3a4702 + ",\"show\":true}";
  main_browser.execute("APPS.state.easter = " + _0x3192c9);
  EasterMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseEasterMenu = function () {
  if (EasterMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.easter.show = false;");
    EasterMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (is_easter && need_to_back_easter_event) {
      ReturnEasterEventMenu();
    }
  }
};
mp.events.add("Client_UpdateEggBalance", _0x2ced10 => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.easter.snow_balance = " + _0x2ced10 + ";");
  }
});
mp.events.add("Client_CloseEasterMenu", () => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    CloseEasterMenu();
  }
});
mp.events.add("Client_EasterBuyEggs", () => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EasterBuyEggs");
    }
  }
});
mp.events.add("Client_EasterSellResources", () => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EasterSellResources");
    }
  }
});
mp.events.add("Client_EasterBuyItem", _0x20c235 => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EasterBuyItem", _0x20c235);
    }
  }
});
mp.events.add("Client_EasterClothesItem", _0x442164 => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EasterClothesItem", _0x442164);
    }
  }
});
mp.events.add("Client_GotoEasterArena", () => {
  if (EasterMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GotoEasterArena");
    }
  }
});
mp.events.add("playerEnterColshape", _0x5bbadd => {
  if (_0x5bbadd == easter_bigbox_shape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (easter_bigbox_blips) {
      easter_bigbox_blips.destroy();
      easter_bigbox_blips = undefined;
    }
    if (easter_bigbox_shape) {
      easter_bigbox_shape.destroy();
      easter_bigbox_shape = undefined;
    }
  }
});
global.at_easter_bigbox = false;
mp.events.add("Client_BigBoxInteractEaster", _0x2a0141 => {
  if (_0x2a0141 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_easter_bigbox = _0x2a0141;
});
mp.events.add("Client_EasterBoxRoute", (_0x16d62d, _0x5f55ec, _0x504837) => {
  if (easter_bigbox_blips) {
    easter_bigbox_blips.destroy();
    easter_bigbox_blips = undefined;
  }
  easter_bigbox_blips = mp.blips.new(568, new mp.Vector3(_0x16d62d, _0x5f55ec, _0x504837), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  easter_bigbox_blips.setRoute(true);
  if (easter_bigbox_shape) {
    easter_bigbox_shape.destroy();
    easter_bigbox_shape = undefined;
  }
  easter_bigbox_shape = mp.colshapes.newCircle(_0x16d62d, _0x5f55ec, 10, 0);
});
mp.events.add("Client_EasterBoxDestroy", () => {
  if (easter_bigbox_blips) {
    easter_bigbox_blips.destroy();
    easter_bigbox_blips = undefined;
  }
  if (easter_bigbox_shape) {
    easter_bigbox_shape.destroy();
    easter_bigbox_shape = undefined;
  }
});
mp.events.add("Client_GetEasterConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetEasterConstruction");
  }
});
mp.events.add("Client_RepairEasterConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RepairEasterConstruction");
  }
});
mp.events.add("Client_DeleteEasterConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteEasterConstruction");
  }
});
const christmas_arena_radius = 300;
global.at_easter_arena = false;
mp.events.add("Client_LoadEasterArena", (_0x2dbb3f, _0x2aab89, _0x19733a) => {
  ChangeArenaTextures(36);
  at_easter_arena = true;
  christmas_arena_marker = mp.markers.new(1, new mp.Vector3(2815.115, -3816.798, 79.37799999999999), 600, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: _0x2dbb3f
  });
  christmas_arena_shape = mp.colshapes.newCircle(2815.115, -3816.798, 300, _0x2dbb3f);
  christmas_arena_shape.is_easter_arena_shape = true;
  main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Зайцы[curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x2aab89[0] + ";");
  main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Курицы[curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x2aab89[1] + ";");
  christmas_arena_interval ||= setInterval(() => {
    let _0x53ac93 = --_0x19733a % 60;
    let _0x2ba284 = _0x19733a / 60;
    let _0x10420c = "";
    _0x10420c = _0x53ac93 >= 10 ? Math.floor(_0x2ba284) + ":" + Math.round(_0x53ac93) : Math.floor(_0x2ba284) + ":0" + Math.round(_0x53ac93);
    main_browser.execute("APPS.state.hud.arena_last_time = '" + _0x10420c + "'");
    if (_0x19733a <= 0) {
      if (christmas_arena_interval) {
        clearInterval(christmas_arena_interval);
        christmas_arena_interval = null;
      }
      main_browser.execute("APPS.state.hud.arena_show = false;");
    }
  }, 1000);
  main_browser.execute("APPS.state.hud.arena_show = true;");
});
mp.events.add("Client_UpdateEasterPoints", _0x5029ea => {
  if (_0x5029ea[0] > _0x5029ea[1]) {
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Зайцы[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x5029ea[1] + ";");
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Курицы[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x5029ea[0] + ";");
  } else {
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Зайцы[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x5029ea[1] + ";");
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Курицы[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x5029ea[0] + ";");
  }
});
mp.events.add("playerExitColshape", _0x790068 => {
  if (mp.colshapes.exists(_0x790068) && _0x790068.is_easter_arena_shape == 1) {
    mp.events.callRemote("Server_ExitEasterArena");
  }
});
mp.events.add("Client_DeleteEasterArenaVariables", () => {
  at_easter_arena = false;
  if (christmas_arena_marker && mp.markers.exists(christmas_arena_marker)) {
    christmas_arena_marker.destroy();
    christmas_arena_marker = undefined;
  }
  if (christmas_arena_shape && mp.markers.exists(christmas_arena_shape)) {
    christmas_arena_shape.destroy();
    christmas_arena_shape = undefined;
  }
  if (christmas_arena_interval) {
    clearInterval(christmas_arena_interval);
    christmas_arena_interval = null;
  }
  main_browser.execute("APPS.state.hud.arena_show = false;");
});
const santa_models = [mp.game.joaat("a_c_hen"), mp.game.joaat("a_c_rabbit_01")];
mp.events.add("entityStreamIn", function (_0x1e84ca) {
  if (_0x1e84ca !== null && _0x1e84ca.type === "ped" && loggedin && santa_models.indexOf(parseInt(_0x1e84ca.model)) != -1) {
    mp.game.invoke("0xBB9CE077274F6A1B", _0x1e84ca.handle, 10, 10);
    _0x1e84ca.setProofs(false, true, true, true, true, true, true, true);
    _0x1e84ca.taskCombat(localplayer.handle, 0, 16);
    _0x1e84ca.setSuffersCriticalHits(false);
    _0x1e84ca.is_rabbit = true;
  }
});
const gameplayCamera = mp.cameras.new("gameplay");
mp.events.add("playerWeaponShot", (_0x59b33c, _0x45ee4) => {
  let _0x53968a = gameplayCamera.getCoord();
  let _0x434bb1 = gameplayCamera.getDirection();
  let _0x1f2b0e = new mp.Vector3(_0x434bb1.x * 50 + _0x53968a.x, _0x434bb1.y * 50 + _0x53968a.y, _0x434bb1.z * 50 + _0x53968a.z);
  const _0x3332cc = mp.raycasting.testPointToPoint(gameplayCamera.getCoord(), _0x1f2b0e, localplayer, [1, 16]);
  if (_0x3332cc) {
    const _0x3ab5f5 = mp.peds.atHandle(_0x3332cc.entity.handle);
    if (mp.peds.exists(_0x3ab5f5) && _0x3ab5f5.is_rabbit == 1 && (_0x3ab5f5.getHealth() <= 0 || _0x3ab5f5.isDead())) {
      mp.events.callRemote("Server_KilledEasterAnimal", _0x3ab5f5);
    }
    if (typeof _0x3332cc.entity == "number" && _0x3332cc.entity !== 0 && mp.game.entity.doesExist(_0x3332cc.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x3332cc.entity);
    }
  }
});
global.need_to_back_easter_event = false;
mp.events.add("Client_GotoEasterCases", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseEasterAnnounceMenu();
    need_to_back_easter_event = true;
    mp.events.callRemote("Server_GotoContainersFromEaster");
  }
});
mp.events.add("Client_GotoEasterDesign", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseEasterAnnounceMenu();
    need_to_back_easter_event = true;
    mp.events.callRemote("Server_OpenEasterMenu");
  }
});
mp.events.add("Client_GotoOfficeDesign", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseEasterAnnounceMenu();
    need_to_back_easter_event = true;
    mp.events.callRemote("Server_OpenOffice");
  }
});
global.ReturnEasterEventMenu = function () {
  if (need_to_back_easter_event) {
    need_to_back_easter_event = false;
    main_browser.execute("APPS.state.easter_announce.show = true;");
    EasterAnnounceMenuOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
};