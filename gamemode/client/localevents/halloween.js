let HalloweenMusicInterval;
global.bHalloweenMusic = true;
let christmas_bigbox_blips;
let christmas_bigbox_shape;
let bHalloweenInZone = false;
function PlayHalloweenMusic() {
  if (!bPlayingHalloweenMusic) {
    StartCustomSound("halloween_music", "/game/gui/sounds/halloween/halloween_main_background.ogg", 0.1);
    bPlayingHalloweenMusic = true;
    HalloweenMusicInterval = setInterval(() => {
      StartCustomSound("halloween_music", "/game/gui/sounds/halloween/halloween_main_background.ogg", 0.1);
    }, 158000);
  }
}
function StopHalloweenMusic() {
  StopCustomSound("halloween_music");
  bPlayingHalloweenMusic = false;
  if (HalloweenMusicInterval != null) {
    clearInterval(HalloweenMusicInterval);
    HalloweenMusicInterval = undefined;
  }
}
mp.events.add("playerEnterColshape", _0x59266e => {
  if (_0x59266e == christmas_bigbox_shape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (christmas_bigbox_blips) {
      christmas_bigbox_blips.destroy();
      christmas_bigbox_blips = undefined;
    }
    if (christmas_bigbox_shape) {
      christmas_bigbox_shape.destroy();
      christmas_bigbox_shape = undefined;
    }
  }
  if (_0x59266e.is_halloween_main && bHalloweenMusic && mp.storage.data.halloween_music) {
    PlayHalloweenMusic();
    bHalloweenInZone = true;
  }
});
mp.events.add("playerExitColshape", _0x5e77f8 => {
  if (_0x5e77f8.is_halloween_main && mp.storage.data.halloween_music) {
    StopHalloweenMusic();
    bHalloweenInZone = false;
  }
});
global.bPlayingHalloweenMusic = false;
global.at_halloween_bigbox = false;
mp.events.add("Client_HalloweenBigBoxInterct", _0x37863f => {
  if (_0x37863f == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_halloween_bigbox = _0x37863f;
});
mp.events.add("Client_HalloweenBoxRoute", (_0x4a12ff, _0x2fc144, _0x2a1f4c) => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  christmas_bigbox_blips = mp.blips.new(484, new mp.Vector3(_0x4a12ff, _0x2fc144, _0x2a1f4c), {
    name: language["Место направления"][curr_lang],
    color: 44
  });
  christmas_bigbox_blips.setRoute(true);
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
  christmas_bigbox_shape = mp.colshapes.newCircle(_0x4a12ff, _0x2fc144, 10, 0);
});
mp.events.add("Client_HalloweenBoxDestroy", () => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
});
const zombie_models = [mp.game.joaat("u_m_y_zombie_01")];
mp.events.add("entityStreamIn", function (_0x223669) {
  if (_0x223669 !== null && _0x223669.type === "ped" && loggedin && zombie_models.indexOf(parseInt(_0x223669.model)) != -1) {
    mp.game.invoke("0xBB9CE077274F6A1B", _0x223669.handle, 10, 10);
    _0x223669.setProofs(false, true, true, true, true, true, true, true);
    _0x223669.taskCombat(localplayer.handle, 0, 16);
    _0x223669.setSuffersCriticalHits(false);
    _0x223669.is_zombie = true;
  }
});
const gameplayCamera = mp.cameras.new("gameplay");
mp.events.add("playerWeaponShot", (_0xc8ee55, _0x5cbe3b) => {
  let _0x37b216 = gameplayCamera.getCoord();
  let _0x1c2190 = gameplayCamera.getDirection();
  let _0x444665 = new mp.Vector3(_0x1c2190.x * 50 + _0x37b216.x, _0x1c2190.y * 50 + _0x37b216.y, _0x1c2190.z * 50 + _0x37b216.z);
  const _0x538b77 = mp.raycasting.testPointToPoint(gameplayCamera.getCoord(), _0x444665, localplayer, [1, 16]);
  if (_0x538b77) {
    const _0x40c8d0 = mp.peds.atHandle(_0x538b77.entity.handle);
    if (mp.peds.exists(_0x40c8d0) && _0x40c8d0.is_zombie == 1 && (_0x40c8d0.getHealth() <= 0 || _0x40c8d0.isDead())) {
      mp.events.callRemote("Server_KilledHalloweenZombie", _0x40c8d0);
    }
    if (typeof _0x538b77.entity == "number" && _0x538b77.entity !== 0 && mp.game.entity.doesExist(_0x538b77.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x538b77.entity);
    }
  }
});
global.HallowenRoleOpened = false;
mp.events.add("Client_ShowHalloweenRole", _0x26f8e7 => {
  if (GlobalCheck() == 1 && HallowenRoleOpened == 0) {
    return;
  }
  const _0xd31b0 = "{\"role\":" + _0x26f8e7 + ",\"show\":true}";
  main_browser.execute("APPS.state.halloweencard = " + _0xd31b0);
  HallowenRoleOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseHalloweenRole = function () {
  if (HallowenRoleOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.halloweencard.show = false;");
    HallowenRoleOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ShowNextEnterDesign", 15);
  }
};
global.HallowenMenuOpened = false;
mp.events.add("Client_OpenHalloweenMainMenu", (_0x473d95, _0x1734fe, _0x129fa6, _0x2fda2e) => {
  EndConversationFinally();
  if (GlobalCheck() == 1 && HallowenMenuOpened == 0) {
    return;
  }
  let _0xd0bfa2 = 0;
  if (localplayer.model != 1885233650) {
    _0xd0bfa2 = 1;
  }
  const _0x5f1aab = "{\"candies\":" + _0x473d95 + ",\"online\":" + _0x1734fe + ",\"gender\":" + _0xd0bfa2 + ",\"timings\":[" + _0x129fa6 + "],intergation:'" + _0x2fda2e + "',\"show\":true}";
  main_browser.execute("APPS.state.halloween_menu = " + _0x5f1aab);
  HallowenMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseHalloweenMenu = function () {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.halloween_menu.show = false;");
    HallowenMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseHalloweenMenu", () => {
  CloseHalloweenMenu();
});
mp.events.add("Client_TradeHalloweenCandies", () => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TradeHalloweenCandies");
    }
  }
});
mp.events.add("Client_HalloweenBuySnow", () => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HalloweenBuySnow");
    }
  }
});
mp.events.add("Client_HalloweenBuyItem", _0x1b0a70 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HalloweenBuyItem", _0x1b0a70);
    }
  }
});
mp.events.add("Client_HalloweenClothesItem", _0x40346c => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HalloweenClothesItem", _0x40346c);
    }
  }
});
mp.events.add("Client_GoToZombieArena", () => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GoToZombieArena");
    }
  }
});
mp.events.add("Client_UpdateHalloweenCandyBalance", _0x21f6e8 => {
  main_browser.execute("APPS.state.halloween_menu.candies = " + _0x21f6e8 + ";");
  main_browser.execute("APPS.state.donate.special_currency = " + _0x21f6e8 + ";");
});
mp.events.add("Client_ChangeZombieState", (_0x4b8cdf, _0x241ce7 = 0) => {
  if (_0x4b8cdf) {
    mp.game.player.setRunSprintMultiplierFor(1.2);
  } else {
    mp.game.player.setRunSprintMultiplierFor(1);
  }
  if (_0x241ce7 != 0) {
    is_zombie = _0x4b8cdf;
  }
});
global.at_zombie_arena = false;
mp.events.add("Client_AtZombieArena", _0x1755c1 => {
  at_zombie_arena = _0x1755c1;
});
mp._events.add("outgoingDamage", (_0x3d6a00, _0xbdd6e4, _0x1eb483, _0xd90fe, _0x5a93d7, _0x379082) => {
  if (new_version != 1) {
    return true;
  }
  if (at_zombie_arena && _0xbdd6e4.type == "player") {
    mp.events.callRemote("Server_InfectPlayerInZombieArena", _0xbdd6e4);
  }
  if (is_zombie && _0xbdd6e4.type == "player") {
    mp.events.callRemote("Server_InfectPlayerGlobal", _0xbdd6e4);
  }
});
global.in_halloween_death_note_state = false;
mp.events.add("Client_AskForCandiesFromHome", _0x4f1a56 => {
  if (HomeEnterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AskForCandiesFromHome", _0x4f1a56);
    }
  }
});
mp.events.add("Client_GiveCandiesFromHome", _0x56cdd7 => {
  if (HomeEnterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GiveCandiesFromHome", _0x56cdd7);
    }
  }
});
mp.events.add("Client_RotateHUD", _0x5806fc => {
  main_browser.execute("APPS.state.hud.bRotate = " + _0x5806fc + ";");
  if (_0x5806fc) {
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.bRotate = " + !_0x5806fc + ";");
    }, 600000);
  }
});
mp.events.add("Client_SetZombie", _0x36c800 => {
  is_zombie = _0x36c800;
});
let zombieblip = null;
const zombiePositions = [{
  position: new mp.Vector3(1045.83, 2333.555, 49.629)
}, {
  position: new mp.Vector3(374.534, -1670.897, 44.62)
}, {
  position: new mp.Vector3(-1209.378, -2767.58, 32.392)
}, {
  position: new mp.Vector3(-130.631, -1004.467, 54.237)
}, {
  position: new mp.Vector3(-171.724, 6363.365, 31.531)
}];
function CreateSecretNPC(_0x2cabb5) {
  const _0x1adf38 = {
    name: "Alien Unknown",
    model: "s_m_m_movalien_01",
    position: new mp.Vector3(SecretNPCPosition[_0x2cabb5].x, SecretNPCPosition[_0x2cabb5].y, SecretNPCPosition[_0x2cabb5].z),
    rotation: SecretNPCPosition[_0x2cabb5].heading,
    conversation_id: 5001,
    cam_pos: SecretNPCPosition[_0x2cabb5].campos,
    cam_point: SecretNPCPosition[_0x2cabb5].campoint
  };
  mp.labels.new(_0x1adf38.name, new mp.Vector3(_0x1adf38.position.x, _0x1adf38.position.y, _0x1adf38.position.z + 1), {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  });
  if (_0x1adf38.model) {
    mp.peds.new(mp.game.joaat(_0x1adf38.model), _0x1adf38.position, _0x1adf38.rotation, 0);
    mp.colshapes.newSphere(_0x1adf38.position.x, _0x1adf38.position.y, _0x1adf38.position.z, 2.5, 0).secretNPC = true;
  }
}
mp.events.add("Client_SetZombieBlip", _0x9d359e => {
  zombieblip ||= mp.blips.new(zone_blips, zombiePositions[_0x9d359e].position, {
    radius: parseFloat(200),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_DestroyZombieBlip", () => {
  if (zombieblip) {
    zombieblip.destroy();
    zombieblip = null;
  }
});
mp.events.add("Client_LoadMoreDailyTop", _0x569e5c => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadMoreDailyTop", _0x569e5c);
    }
  }
});
mp.events.add("Client_LoadMoreGlobalTop", _0x3eb54a => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadMoreGlobalTop", _0x3eb54a);
    }
  }
});
mp.events.add("UpdateHalloweenTop", (_0x570fd2, _0x5af60b) => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (_0x5af60b == 1) {
      main_browser.execute("APPS.state.halloween_menu.DailyTop = " + JSON.stringify(_0x570fd2));
    } else {
      main_browser.execute("APPS.state.halloween_menu.GlobalTop = " + JSON.stringify(_0x570fd2));
    }
  }
});
mp.events.add("Client_SwitchZombieHUD", _0x21c59e => {
  if (loggedin) {
    if (_0x21c59e == 0) {
      main_browser.execute("APPS.state.hud.ZombieEventStarted = 0;");
    } else {
      StartCustomSound("dark_night", "sounds/music/dark_night.mp3", 0.2);
      mp.game.invoke(getNative("_STOP_ALL_SCREEN_EFFECTS"));
      mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "CrossLine", 2000, true);
      setTimeout(() => {
        mp.game.invoke(getNative("_STOP_ALL_SCREEN_EFFECTS"));
        mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "CrossLineOut", 2000, true);
        StartCustomSound("dark_night", "sounds/notifications/dark_night_started.mp3", 0.2);
        main_browser.execute("APPS.state.hud.ZombieEventStarted = 1;");
      }, 20000);
    }
  }
});
mp.events.add("Client_PlayFartSound", () => {
  if (!loggedin) {
    return;
  }
  let _0x15ee66 = 0;
  let _0x4880b0 = setInterval(() => {
    if (_0x15ee66 >= 30 && _0x4880b0) {
      clearInterval(_0x4880b0);
      _0x4880b0 = undefined;
    }
    StartCustomSound("fart", "/game/gui/sounds/halloween/fart.ogg", 0.2);
    _0x15ee66++;
  }, 30000);
});
global.SecretNPCPosition = [{
  x: 452.865,
  y: 5586.288,
  z: 781.19,
  heading: -158.915,
  campos: new mp.Vector3(453.473, 5584.572, 781.69),
  campoint: new mp.Vector3(452.865, 5586.288, 781.69)
}, {
  x: 1297.821,
  y: -3349.763,
  z: 5.902,
  heading: 51.292,
  campos: new mp.Vector3(1296.572, -3348.864, 6.402),
  campoint: new mp.Vector3(1297.821, -3349.763, 6.402)
}, {
  x: -934.594,
  y: -3568.9,
  z: 14.082,
  heading: 18.667,
  campos: new mp.Vector3(-935.06, -3567.401, 14.582),
  campoint: new mp.Vector3(-934.594, -3568.9, 14.582)
}, {
  x: -607.648,
  y: -1636.452,
  z: 25.975,
  heading: 149.233,
  campos: new mp.Vector3(-608.216, -1637.671, 26.475),
  campoint: new mp.Vector3(-607.648, -1636.452, 26.475)
}, {
  x: 1122.378,
  y: 67.357,
  z: 80.89,
  heading: -121.524,
  campos: new mp.Vector3(1123.476, 66.712, 81.39),
  campoint: new mp.Vector3(1122.378, 67.357, 81.39)
}, {
  x: -722.1,
  y: -425.411,
  z: 35.076,
  heading: 86.288,
  campos: new mp.Vector3(-723.625, -425.4, 35.576),
  campoint: new mp.Vector3(-722.1, -425.411, 35.576)
}, {
  x: -41.494,
  y: 614.531,
  z: 197.528,
  heading: 61.725,
  campos: new mp.Vector3(-43.361, 615.433, 198.1),
  campoint: new mp.Vector3(-41.494, 614.531, 198.1)
}, {
  x: 422.31,
  y: 2006.369,
  z: 109.643,
  heading: 9.913,
  campos: new mp.Vector3(421.792, 2007.846, 110.143),
  campoint: new mp.Vector3(422.31, 2006.369, 110.143)
}, {
  x: -1186.059,
  y: 3858.209,
  z: 489.921,
  heading: 179.909,
  campos: new mp.Vector3(-1186.061, 3856.372, 490.421),
  campoint: new mp.Vector3(-1186.059, 3858.209, 490.421)
}, {
  x: 1467.618,
  y: 6551.973,
  z: 13.957,
  heading: 88.494,
  campos: new mp.Vector3(1466.598, 6552.054, 14.457),
  campoint: new mp.Vector3(1466.598, 6552.054, 14.457)
}, {
  x: 2583.157,
  y: 6165.404,
  z: 165.014,
  heading: -61.169,
  campos: new mp.Vector3(2584.124, 6165.807, 165.514),
  campoint: new mp.Vector3(2583.157, 6165.404, 165.514)
}, {
  x: 1443.838,
  y: 3748.8,
  z: 31.934,
  heading: -21.274,
  campos: new mp.Vector3(1444.241, 3749.893, 32.434),
  campoint: new mp.Vector3(1443.838, 3748.8, 32.434)
}];
global.SecretNPCRandom = 0;
mp.events.add("Client_SetHallowenSecretNPC", _0x366657 => {
  if (loggedin) {
    SecretNPCRandom = _0x366657;
    CreateSecretNPC(_0x366657);
  }
});
let Halloween_Music = mp.colshapes.newSphere(-1692.953, -216.729, 57.54, 100, 0);
Halloween_Music.is_halloween_main = true;
mp.events.add("Client_SwitchHalloweenMusic", _0x2008d5 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x2008d5 == 1) {
      mp.storage.data.halloween_music = 1;
      mp.storage.flush();
      bHalloweenMusic = true;
      if (bHalloweenInZone) {
        PlayHalloweenMusic();
      }
    } else {
      mp.storage.data.halloween_music = 0;
      mp.storage.flush();
      if (bHalloweenMusic) {
        StopHalloweenMusic();
        bHalloweenMusic = false;
      }
    }
  }
});
mp.events.add("Client_LoadCandyTops", () => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadCandyTops");
  }
});
mp.events.add("Client_LoadCandyTopsFromServer", (_0x5d2fa1, _0x13f6d9) => {
  main_browser.execute("APPS.state.halloween_menu.DailyTop = " + JSON.stringify(_0x5d2fa1));
  main_browser.execute("APPS.state.halloween_menu.GlobalTop = " + JSON.stringify(_0x13f6d9));
});
mp.events.add("Client_GetPrizeForCandyTop", () => {
  if (HallowenMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetPrizeForCandyTop");
    }
  }
});