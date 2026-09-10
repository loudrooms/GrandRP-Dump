let christmas_bigbox_blips;
let christmas_bigbox_shape;
let christmas_arena_marker;
let christmas_arena_shape;
let christmas_arena_interval;
global.ChristmasMenuOpened = false;
mp.events.add("Client_ShowChristmasMenu", (_0x398bdd, _0x3b26c2, _0x40bf48) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x4784c7 = 0;
  if (localplayer.model != 1885233650) {
    _0x4784c7 = 1;
  }
  const _0x595b91 = "{\"snow_balance\":" + _0x398bdd + ",\"online\":" + _0x3b26c2 + ",\"gender\":" + _0x4784c7 + ",\"timings\":[" + _0x40bf48 + "],\"show\":true}";
  main_browser.execute("APPS.state.christmas = " + _0x595b91);
  ChristmasMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseChristmasMenu = function () {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.christmas.show = false;");
    ChristmasMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (need_to_back_christmas_event) {
      ReturnChristmasEventMenu();
    }
  }
};
mp.events.add("Client_UpdateSnowBalance", _0x2c1edc => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.christmas.snow_balance = " + _0x2c1edc + ";");
  }
});
mp.events.add("Client_CloseChristmasMenu", () => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    CloseChristmasMenu();
  }
});
mp.events.add("Client_ChristmasBuySnow", () => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasBuySnow");
    }
  }
});
mp.events.add("Client_ChristmasSellResources", () => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasSellResources");
    }
  }
});
mp.events.add("Client_ChristmasGetQuest", _0xc159c2 => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasGetQuest", _0xc159c2);
    }
  }
});
mp.events.add("Client_ChristmasSetQuest", _0x22090d => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasSetQuest", _0x22090d);
    }
  }
});
mp.events.add("Client_ChristmasBuyItem", _0x542897 => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasBuyItem", _0x542897);
    }
  }
});
mp.events.add("Client_ChristmasClothesItem", _0x3b873e => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChristmasClothesItem", _0x3b873e);
    }
  }
});
mp.events.add("Client_GotoChristmasArena", () => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GotoChristmasArena");
    }
  }
});
mp.events.add("Client_BuyLuckyTickets", () => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyLuckyTickets");
    }
  }
});
mp.events.add("Client_UpdateLuckyTicketCount", _0x4ec9cb => {
  if (ChristmasMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.christmas.tickets = " + _0x4ec9cb);
  }
});
mp.events.add("playerEnterColshape", _0x15078b => {
  if (_0x15078b == christmas_bigbox_shape) {
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
  if (_0x15078b.repair_colshape) {
    at_repair_colshape = 1;
    main_browser.execute("APPS.state.hud.interact = true;");
  } else if (_0x15078b.secretNPC) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_secret_npc = 1;
  } else if (_0x15078b.newyeartree) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_newyear_tree = 1;
  } else if (_0x15078b.Tamagotchi) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_tamagotchi = 1;
    tamagotchi_id = _0x15078b.TamagotchiID;
  } else if (_0x15078b.gift_colshape) {
    mp.events.callRemote("Server_GiftDelivered");
  } else if (_0x15078b.digsnow) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_snow_quest = 1;
  } else if (_0x15078b.snowman) {
    mp.events.callRemote("Server_SnowmanHandle");
  } else if (_0x15078b.airport_christmastree) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_airport_christmastree = 1;
  }
});
global.at_christmas_bigbox = false;
mp.events.add("Client_BigBoxInterct", _0x5e9547 => {
  if (_0x5e9547 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_christmas_bigbox = _0x5e9547;
});
mp.events.add("Client_ChristmasBoxRoute", (_0x71410, _0x3c373d, _0x404a1b) => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  christmas_bigbox_blips = mp.blips.new(568, new mp.Vector3(_0x71410, _0x3c373d, _0x404a1b), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  christmas_bigbox_blips.setRoute(true);
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
  christmas_bigbox_shape = mp.colshapes.newCircle(_0x71410, _0x3c373d, 10, 0);
});
mp.events.add("Client_ChristmasBoxDestroy", () => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
});
mp.events.add("Client_GetChristmasConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetChristmasConstruction");
  }
});
mp.events.add("Client_RepairChristmasConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RepairChristmasConstruction");
  }
});
mp.events.add("Client_DeleteChristmasConstruction", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteChristmasConstruction");
  }
});
const christmas_arena_radius = 50;
global.at_christmas_arena = false;
mp.events.add("Client_LoadChristmasArena", (_0x573662, _0x240d68, _0x2addaa) => {
  at_christmas_arena = true;
  christmas_arena_marker = mp.markers.new(1, new mp.Vector3(1785, 895, -45), 100, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: _0x573662
  });
  christmas_arena_shape = mp.colshapes.newCircle(1785, 895, 50, _0x573662);
  christmas_arena_shape.is_christmas_arena_shape = true;
  main_browser.execute("APPS.state.hud.arena_player1 = '" + language["Санта-клаус"][curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x240d68[0] + ";");
  main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Гринч[curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x240d68[1] + ";");
  christmas_arena_interval ||= setInterval(() => {
    let _0x3286ae = --_0x2addaa % 60;
    let _0x2bab6c = _0x2addaa / 60;
    let _0x4aa137 = "";
    _0x4aa137 = _0x3286ae >= 10 ? Math.floor(_0x2bab6c) + ":" + Math.round(_0x3286ae) : Math.floor(_0x2bab6c) + ":0" + Math.round(_0x3286ae);
    main_browser.execute("APPS.state.hud.arena_last_time = '" + _0x4aa137 + "'");
    if (_0x2addaa <= 0) {
      if (christmas_arena_interval) {
        clearInterval(christmas_arena_interval);
        christmas_arena_interval = null;
      }
      main_browser.execute("APPS.state.hud.arena_show = false;");
    }
  }, 1000);
  main_browser.execute("APPS.state.hud.arena_show = true;");
});
mp.events.add("Client_UpdateChristmasPoints", _0x377cf5 => {
  if (_0x377cf5[0] > _0x377cf5[1]) {
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language["Санта-клаус"][curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x377cf5[0] + ";");
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Гринч[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x377cf5[1] + ";");
  } else {
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language["Санта-клаус"][curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x377cf5[0] + ";");
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Гринч[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x377cf5[1] + ";");
  }
});
mp.events.add("playerExitColshape", _0x4036dc => {
  if (mp.colshapes.exists(_0x4036dc) && _0x4036dc.is_christmas_arena_shape == 1) {
    mp.events.callRemote("Server_ExitChristmasArena");
  } else if (_0x4036dc.secretNPC) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_secret_npc = 0;
  } else if (_0x4036dc.newyeartree) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_newyear_tree = 0;
  } else if (_0x4036dc.Tamagotchi) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_tamagotchi = 0;
    tamagotchi_id = 0;
  } else if (_0x4036dc.repair_colshape) {
    at_repair_colshape = 0;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x4036dc.digsnow) {
    at_snow_quest = 0;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x4036dc.airport_christmastree) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_airport_christmastree = 0;
  }
});
mp.events.add("Client_DeleteChristmasArenaVariables", () => {
  at_christmas_arena = false;
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
const santa_models = [mp.game.joaat("Badsanta")];
mp.events.add("entityStreamIn", function (_0x4a264b) {
  if (_0x4a264b !== null && _0x4a264b.type === "ped" && loggedin && santa_models.indexOf(parseInt(_0x4a264b.model)) != -1) {
    if (_0x4a264b.badsanta_npc) {
      return;
    }
    if (_0x4a264b.grinch != 1) {
      mp.game.invoke("0xBB9CE077274F6A1B", _0x4a264b.handle, 10, 10);
      _0x4a264b.setProofs(false, true, true, true, true, true, true, true);
      _0x4a264b.taskCombat(localplayer.handle, 0, 16);
      _0x4a264b.setSuffersCriticalHits(false);
      _0x4a264b.is_santa = true;
    }
  }
});
const gameplayCamera = mp.cameras.new("gameplay");
let secretSantaEntity;
function CreateSecretNPC(_0x1c3802) {
  const _0x8bf6ac = {
    name: "Bad Santa",
    model: "Badsanta",
    position: new mp.Vector3(SecretNPCPosition[_0x1c3802].x, SecretNPCPosition[_0x1c3802].y, SecretNPCPosition[_0x1c3802].z),
    rotation: SecretNPCPosition[_0x1c3802].heading,
    conversation_id: 5008,
    cam_pos: SecretNPCPosition[_0x1c3802].campos,
    cam_point: SecretNPCPosition[_0x1c3802].campoint
  };
  mp.labels.new(_0x8bf6ac.name, new mp.Vector3(_0x8bf6ac.position.x, _0x8bf6ac.position.y, _0x8bf6ac.position.z + 1), {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  });
  if (_0x8bf6ac.model) {
    secretSantaEntity = mp.peds.new(mp.game.joaat(_0x8bf6ac.model), _0x8bf6ac.position, _0x8bf6ac.rotation, 0);
    secretSantaEntity.badsanta_npc = true;
    mp.colshapes.newSphere(_0x8bf6ac.position.x, _0x8bf6ac.position.y, _0x8bf6ac.position.z, 2.5, 0).secretNPC = true;
  }
}
mp.events.add("playerWeaponShot", (_0x169655, _0x5b4e89) => {
  let _0x4807e4 = gameplayCamera.getCoord();
  let _0xc227c6 = gameplayCamera.getDirection();
  let _0x27a6f6 = new mp.Vector3(_0xc227c6.x * 50 + _0x4807e4.x, _0xc227c6.y * 50 + _0x4807e4.y, _0xc227c6.z * 50 + _0x4807e4.z);
  const _0x321518 = mp.raycasting.testPointToPoint(gameplayCamera.getCoord(), _0x27a6f6, localplayer, [1, 16]);
  if (_0x321518) {
    const _0x4dc475 = mp.peds.atHandle(_0x321518.entity.handle);
    if (mp.peds.exists(_0x4dc475)) {
      if (_0x4dc475.grinch) {
        if (GrinchEntity && mp.peds.exists(GrinchEntity)) {
          GrinchEntity.setHealth(0);
        }
        if (_0x4dc475.getHealth() <= 0 || _0x4dc475.isDead()) {
          mp.events.callRemote("Server_KilledGrinch");
          if (GrinchEntity && mp.peds.exists(GrinchEntity)) {
            GrinchEntity.destroy();
            GrinchEntity = undefined;
          }
          if (GrinchBlip) {
            GrinchBlip.setRoute(false);
            GrinchBlip.destroy();
            GrinchBlip = undefined;
          }
        }
      } else if (_0x4dc475.is_santa == 1 && (_0x4dc475.getHealth() <= 0 || _0x4dc475.isDead())) {
        mp.events.callRemote("Server_KilledChristmasSanta", _0x4dc475);
      }
    }
    if (typeof _0x321518.entity == "number" && _0x321518.entity !== 0 && mp.game.entity.doesExist(_0x321518.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x321518.entity);
    }
  }
});
global.ChristmasEventOpened = false;
mp.events.add("Client_OpenChristmasDailyReminder", _0x14be6f => {
  if (GlobalCheck() == 1 && ChristmasEventOpened == 0) {
    return;
  }
  const _0xf76bc9 = "{\"days_left\":" + _0x14be6f + ",\"show\":true}";
  main_browser.execute("APPS.state.christmas_event = " + _0xf76bc9);
  ChristmasEventOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseChristmasEventMenu = function () {
  if (ChristmasEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.christmas_event.show = false;");
    ChristmasEventOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    need_to_back_christmas_event = false;
  }
};
global.ReturnChristmasEventMenu = function () {
  if (need_to_back_christmas_event) {
    need_to_back_christmas_event = false;
    main_browser.execute("APPS.state.christmas_event.show = true;");
    ChristmasEventOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
};
mp.events.add("Client_CloseChristmasEvent", () => {
  CloseChristmasEventMenu();
});
mp.events.add("Client_ChooseChristmasRole", _0x402c17 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChooseChristmasRole", _0x402c17);
  }
});
global.need_to_back_christmas_event = false;
mp.events.add("Client_GotoContainers", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseChristmasEventMenu();
    need_to_back_christmas_event = true;
    mp.events.callRemote("Server_GotoContainersFromChristmas");
  }
});
mp.events.add("Client_GotoChristmasMenu", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseChristmasEventMenu();
    need_to_back_christmas_event = true;
    mp.events.callRemote("Server_GotoChristmasMenu");
  }
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
mp.events.add("Client_SetChristmasSecretNPC", _0x3b78fe => {
  if (loggedin) {
    SecretNPCRandom = _0x3b78fe;
    CreateSecretNPC(_0x3b78fe);
  }
});
let NewYearTree_Colshape = mp.colshapes.newSphere(-1175.258, 4927.098, 223.442, 6);
NewYearTree_Colshape.newyeartree = true;
global.at_newyear_tree = 0;
const ChristmasTreePosition = new mp.Vector3(-1175.258, 4927.098, 223.442);
let badsantaEntity;
mp.events.add("Client_ShowChristmasTree", () => {
  let _0x32b5f1 = 0;
  let _0x516688 = ChristmasTreePosition;
  let _0x53d68d = setInterval(function () {
    let _0x57604b = _0x516688.z + 20;
    let _0x2d6e1c = _0x516688.x + Math.random() * 15 + 0;
    let _0x48b1d0 = _0x516688.y + Math.random() * 15 + 0;
    const _0x17988b = new mp.Vector3(_0x2d6e1c, _0x48b1d0, _0x57604b);
    const _0xceddfc = Math.random() * 4 + 0;
    let _0x3ba745 = "scr_firework_xmas_ring_burst_rgw";
    if (_0xceddfc == 0) {
      _0x3ba745 = "scr_firework_xmas_ring_burst_rgw";
    } else if (_0xceddfc == 1) {
      _0x3ba745 = "scr_firework_xmas_burst_rgw";
    } else if (_0xceddfc == 2) {
      _0x3ba745 = "scr_firework_xmas_repeat_burst_rgw";
    } else if (_0xceddfc == 3) {
      _0x3ba745 = "scr_firework_xmas_spiral_burst_rgw";
    }
    StartParticleEffect("scr_indep_fireworks", "scr_indep_firework_starburst", _0x516688, 10000);
    StartParticleEffect("proj_xmas_firework", _0x3ba745, _0x17988b, 10000);
    StartParticleEffect("scr_rcpaparazzo1", "scr_mich4_firework_burst_spawn", _0x17988b, 10000);
    _0x32b5f1++;
    if (_0x32b5f1 >= 20) {
      if (_0x53d68d != null) {
        clearInterval(_0x53d68d);
      }
      _0x53d68d = undefined;
    }
  }, 2000);
});
mp.events.add("Client_CreateChristmasTamagotchi", _0x1b7fb1 => {
  CreateTamagotchi(_0x1b7fb1);
});
global.TamagotchiInfo = [{
  position: new mp.Vector3(-1168.308, 4922.278, 222.814),
  heading: -58.504,
  campos: new mp.Vector3(-1167.201, 4922.677, 223.314),
  campoint: new mp.Vector3(-1168.308, 4922.278, 223.314)
}, {
  position: new mp.Vector3(-1167.672, 4930.458, 223.363),
  heading: -131.052,
  campos: new mp.Vector3(-1166.795, 4929.536, 223.863),
  campoint: new mp.Vector3(-1167.672, 4930.458, 223.863)
}, {
  position: new mp.Vector3(-1161.992, 4930.987, 223.328),
  heading: -177.244,
  campos: new mp.Vector3(-1161.912, 4929.778, 223.828),
  campoint: new mp.Vector3(-1161.992, 4930.987, 223.828)
}, {
  position: new mp.Vector3(-1164.604, 4919.6, 222.379),
  heading: -29.845,
  campos: new mp.Vector3(-1164.141, 4920.468, 222.879),
  campoint: new mp.Vector3(-1164.604, 4919.6, 222.879)
}, {
  position: new mp.Vector3(-1159.353, 4930.025, 222.97),
  heading: -171.056,
  campos: new mp.Vector3(-1159.482, 4928.853, 223.47),
  campoint: new mp.Vector3(-1159.353, 4930.025, 223.47)
}, {
  position: new mp.Vector3(-1162.692, 4917.843, 221.989),
  heading: -24.104,
  campos: new mp.Vector3(-1161.928, 4918.94, 222.489),
  campoint: new mp.Vector3(-1162.692, 4917.843, 222.489)
}, {
  position: new mp.Vector3(-1168.199, 4926.53, 223.088),
  heading: -103.206,
  campos: new mp.Vector3(-1166.918, 4926.262, 223.488),
  campoint: new mp.Vector3(-1168.199, 4926.53, 223.488)
}];
global.at_tamagotchi = 0;
global.tamagotchi_id = 0;
let TamagocthiEntities = [];
let TamagotchiColshapes = [];
function CreateTamagotchi(_0x356d2a) {
  for (let _0x5a8109 = 0; _0x5a8109 < _0x356d2a; _0x5a8109++) {
    if (_0x5a8109 >= TamagotchiInfo.length) {
      return;
    }
    const _0x2129ac = {
      name: "Minion #" + (_0x5a8109 + 1),
      model: "Minion",
      position: TamagotchiInfo[_0x5a8109].position,
      rotation: TamagotchiInfo[_0x5a8109].heading,
      cam_pos: TamagotchiInfo[_0x5a8109].campos,
      cam_point: TamagotchiInfo[_0x5a8109].campoint
    };
    mp.labels.new(_0x2129ac.name, new mp.Vector3(_0x2129ac.position.x, _0x2129ac.position.y, _0x2129ac.position.z + 1), {
      los: true,
      font: 0,
      drawDistance: 6,
      color: [255, 255, 255, 255],
      dimension: 0
    });
    if (_0x2129ac.model) {
      let _0x13a0ed = mp.peds.new(mp.game.joaat(_0x2129ac.model), _0x2129ac.position, _0x2129ac.rotation, 0);
      TamagocthiEntities.push(_0x13a0ed);
      let _0x59ded9 = mp.colshapes.newSphere(_0x2129ac.position.x, _0x2129ac.position.y, _0x2129ac.position.z, 2.5, 0);
      TamagotchiColshapes.push(_0x59ded9);
      _0x59ded9.Tamagotchi = true;
      _0x59ded9.TamagotchiID = _0x5a8109 + 1;
    }
  }
}
const GrinchPositions = [{
  position: new mp.Vector3(-443.653, 1584.739, 358.507),
  heading: 0
}, {
  position: new mp.Vector3(335.738, 3571.017, 33.353),
  heading: 0
}, {
  position: new mp.Vector3(-754.109, -413.697, 35.572),
  heading: 0
}, {
  position: new mp.Vector3(647.75, -1741.67, 9.684),
  heading: 0
}, {
  position: new mp.Vector3(2798.772, -702.702, 3.534),
  heading: 0
}, {
  position: new mp.Vector3(-2305.037, 2346.723, 1.408),
  heading: 0
}];
let GrinchBlip;
let GrinchEntity;
mp.events.add("Client_SpawnGrinch", () => {
  const _0x24a230 = getRandomInt(0, GrinchPositions.length);
  const _0x316497 = {
    name: "Christmas Thief",
    model: "Badsanta",
    position: GrinchPositions[_0x24a230].position,
    rotation: GrinchPositions[_0x24a230].heading
  };
  if (_0x316497.model) {
    GrinchEntity = mp.peds.new(mp.game.joaat(_0x316497.model), _0x316497.position, _0x316497.rotation, 0);
    GrinchEntity.grinch = true;
  }
  GrinchBlip = mp.blips.new(781, _0x316497.position, {
    name: language["Рождественское задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
  GrinchBlip.setRoute(true);
});
const RepairPositions = [{
  position: new mp.Vector3(-1047.71, 4938.414, 207.336)
}, {
  position: new mp.Vector3(-1106.67, 4935.28, 217.37)
}, {
  position: new mp.Vector3(-1134.221, 4948.818, 221.261)
}, {
  position: new mp.Vector3(-1176.188, 4900.067, 214.478)
}, {
  position: new mp.Vector3(-1134.705, 4873.646, 211.255)
}];
let RepairColshape;
let RepairMarker;
let RepairBlip;
let GiftMarker;
let GiftColshape;
let GiftBlip;
let VillageBlip;
global.at_repair_colshape = 0;
mp.events.add("Client_StartVillageRepair", _0x5913e7 => {
  if (RepairColshape) {
    RepairColshape.destroy();
    RepairColshape = undefined;
  }
  if (RepairMarker) {
    RepairMarker.destroy();
    RepairMarker = undefined;
  }
  if (RepairBlip) {
    RepairBlip.destroy();
    RepairBlip = undefined;
  }
  RepairColshape = mp.colshapes.newSphere(RepairPositions[_0x5913e7].position.x, RepairPositions[_0x5913e7].position.y, RepairPositions[_0x5913e7].position.z, 2.5, 0);
  RepairColshape.repair_colshape = true;
  RepairMarker = mp.markers.new(1, RepairPositions[_0x5913e7].position, 5, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 0
  });
  RepairBlip = mp.blips.new(781, RepairPositions[_0x5913e7].position, {
    name: language["Рождественское задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
  RepairBlip.setRoute(true);
});
mp.events.add("Client_ClearVillageRepair", () => {
  if (RepairColshape) {
    RepairColshape.destroy();
    RepairColshape = undefined;
  }
  if (RepairMarker) {
    RepairMarker.destroy();
    RepairMarker = undefined;
  }
  if (RepairBlip) {
    RepairBlip.destroy();
    RepairBlip = undefined;
  }
});
mp.events.add("Client_ChristmasGiftsToHouses", _0x16b9c1 => {
  if (GiftColshape) {
    GiftColshape.destroy();
    GiftColshape = undefined;
  }
  if (GiftMarker) {
    GiftMarker.destroy();
    GiftMarker = undefined;
  }
  if (GiftBlip) {
    GiftBlip.setRoute(false);
    GiftBlip.destroy();
    GiftBlip = undefined;
  }
  GiftColshape = mp.colshapes.newSphere(_0x16b9c1.x, _0x16b9c1.y, _0x16b9c1.z, 2.5, 0);
  GiftColshape.gift_colshape = true;
  GiftMarker = mp.markers.new(1, _0x16b9c1, 5, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 0
  });
  GiftBlip = mp.blips.new(781, _0x16b9c1, {
    name: language["Рождественское задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
  GiftBlip.setRoute(true);
});
mp.events.add("Client_CleanChristmasGiftsToHouses", () => {
  if (GiftColshape) {
    GiftColshape.destroy();
    GiftColshape = undefined;
  }
  if (GiftMarker) {
    GiftMarker.destroy();
    GiftMarker = undefined;
  }
  if (GiftBlip) {
    GiftBlip.setRoute(false);
    GiftBlip.destroy();
    GiftBlip = undefined;
  }
});
let SnowMarker;
let SnowColshape;
let SnowBlip;
let VillagePosition = new mp.Vector3(-1115.07, 4923.946, 218.034);
VillageBlip = mp.blips.new(141, VillagePosition, {
  name: language["Рождествеснкая деревня"][curr_lang],
  scale: 1,
  color: 25,
  drawDistance: 25,
  shortRange: true
});
mp.events.add("Client_SetRouteToChristmasVillage", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (VillageBlip) {
      VillageBlip.setRoute(true);
    }
    CloseChristmasDesign();
    ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
  }
});
let SnowPositions = [{
  position: new mp.Vector3(-976.155, 5076.581, 184.904)
}, {
  position: new mp.Vector3(-1159.243, 5017.974, 160.743)
}, {
  position: new mp.Vector3(-1230.669, 4936.066, 176.728)
}, {
  position: new mp.Vector3(-1200.812, 4878.512, 202.157)
}, {
  position: new mp.Vector3(-1162.519, 4798.564, 224.853)
}, {
  position: new mp.Vector3(-1097.292, 4791.217, 212.772)
}, {
  position: new mp.Vector3(-1078.469, 4860.167, 231.038)
}];
let SnowmanCreatingCount = 0;
global.at_snow_quest = 0;
let SnowmanPosition = new mp.Vector3(-1123.677, 4935.795, 218.009);
function CleanSnowMarkers() {
  if (SnowMarker) {
    SnowMarker.destroy();
    SnowMarker = undefined;
  }
  if (SnowColshape) {
    SnowColshape.destroy();
    SnowColshape = undefined;
  }
  if (SnowBlip) {
    SnowBlip.setRoute(false);
    SnowBlip.destroy();
    SnowBlip = undefined;
  }
}
mp.events.add("Client_NewPosToDigSnow", () => {
  const _0x482910 = getRandomInt(0, SnowPositions.length);
  CleanSnowMarkers();
  SnowColshape = mp.colshapes.newSphere(SnowPositions[_0x482910].position.x, SnowPositions[_0x482910].position.y, SnowPositions[_0x482910].position.z, 2, 0);
  SnowColshape.digsnow = true;
  SnowMarker = mp.markers.new(1, SnowPositions[_0x482910].position, 4, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  SnowBlip = mp.blips.new(781, SnowPositions[_0x482910].position, {
    name: language["Рождественское задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
});
mp.events.add("Client_CleanDigSnowMarkers", () => {
  CleanSnowMarkers();
});
mp.events.add("Client_RouteToSnowman", () => {
  CleanSnowMarkers();
  SnowColshape = mp.colshapes.newSphere(SnowmanPosition.x, SnowmanPosition.y, SnowmanPosition.z, 2, 0);
  SnowColshape.snowman = true;
  SnowMarker = mp.markers.new(1, SnowmanPosition, 4, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  SnowBlip = mp.blips.new(781, SnowmanPosition, {
    name: language["Рождественское задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
  SnowBlip.setRoute(true);
});
mp.events.add("Client_CreateSnowman", () => {
  mp.objects.new(mp.game.joaat("prop_prlg_snowpile"), new mp.Vector3(SnowmanPosition.x, SnowmanPosition.y, SnowmanPosition.z), {
    rotation: new mp.Vector3(0, 0, 176.93),
    alpha: 255,
    dimension: 0
  });
});
const ChristmasJobList = [{
  position: new mp.Vector3(-1113.269, 4903.626, 218.596)
}, {
  position: new mp.Vector3(-1098.771, 4893.432, 216.066)
}, {
  position: new mp.Vector3(-1075.661, 4897.608, 214.271)
}, {
  position: new mp.Vector3(-1144.193, 4908.51, 220.968)
}];
let ChristmasJobBlip;
mp.events.add("Client_SetRouteToChristmasJob", _0x549e27 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (!(_0x549e27 < 0) && !(_0x549e27 >= ChristmasJobList.length)) {
      if (ChristmasJobBlip) {
        ChristmasJobBlip.destroy();
        ChristmasJobBlip = undefined;
      }
      ChristmasJobBlip = mp.blips.new(792, ChristmasJobList[_0x549e27].position, {
        name: language["Рождествеснкая профессия"][curr_lang],
        scale: 1,
        color: 1,
        drawDistance: 25,
        shortRange: true
      });
      if (ChristmasJobBlip) {
        ChristmasJobBlip.setRoute(true);
        ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
      }
      CloseChristmasDesign();
    }
  }
});
global.ChristmasDesignOpened = false;
global.CloseChristmasDesign = function () {
  main_browser.execute("APPS.state.newyear2024.show = false");
  ChristmasDesignOpened = false;
  SwitchHUDToDesign(false);
};
mp.events.add("Client_OpenChristmasDesign", (_0x233301, _0x2e886f, _0x518601, _0x1840ef) => {
  if (ChristmasDesignOpened || !loggedin || chatActive) {
    return;
  }
  const _0x10027a = "{\"dailyquests\":[" + _0x1840ef + "],\"keyprogress\":" + _0x518601 + ",\"balance\":" + _0x233301 + ", \"job\":" + _0x2e886f + " ,\"show\":true}";
  main_browser.execute("APPS.state.newyear2024 = " + _0x10027a);
  ChristmasDesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseChristmasDesign", () => {
  if (ChristmasDesignOpened) {
    CloseChristmasDesign();
  }
});
mp.events.add("Client_SwitchChristmasPageNumber1", _0x23ab6e => {
  main_browser.execute("APPS.state.newyear2024.progress = " + +_0x23ab6e);
});
mp.events.add("Client_SwitchChristmasPageNumber2", _0x1cad3f => {
  let _0x45291c = new Array(12);
  _0x45291c.fill(0);
  for (let _0x108ae7 = 0; _0x108ae7 < 12; _0x108ae7++) {
    _0x45291c[_0x108ae7] = 2;
    if (_0x108ae7 == _0x1cad3f - 1) {
      _0x45291c[_0x108ae7] = 1;
      break;
    }
  }
  main_browser.execute("APPS.state.newyear2024.storyquests = " + JSON.stringify(_0x45291c));
  main_browser.execute("APPS.state.newyear2024.activestoryquest = " + +_0x1cad3f);
});
mp.events.add("Client_SwitchChristmasPageNumber3", (_0x5a81d3, _0x4c70ca) => {
  let _0x36539b = new Array(7);
  _0x36539b.fill(0);
  for (let _0x5349f8 = 0; _0x5349f8 < _0x4c70ca; _0x5349f8++) {
    _0x36539b[_0x5349f8] = 1;
  }
  main_browser.execute("APPS.state.newyear2024.tamagotchi_open = " + JSON.stringify(_0x36539b));
  main_browser.execute("APPS.state.newyear2024.tamagotchiquest = " + JSON.stringify(_0x5a81d3));
});
mp.events.add("Client_SwitchChristmasPageNumber4", (_0x30e9b6, _0x3d7230) => {
  main_browser.execute("APPS.state.newyear2024.globaltop = " + JSON.stringify(_0x30e9b6));
  main_browser.execute("APPS.state.newyear2024.dailytop = " + JSON.stringify(_0x3d7230));
});
mp.events.add("Client_RequestSwitchPage", _0xa9784c => {
  mp.events.callRemote("Server_ChristmasSwitchPageHandle", _0xa9784c);
});
mp.events.add("Client_RequestMoreChristmasGlobalTop", _0x2a1a51 => {
  mp.events.callRemote("Server_RequestMoreChristmasGlobalTop", _0x2a1a51);
});
mp.events.add("Client_UpdateChristmasGlobalTop", _0x25d6a3 => {
  main_browser.execute("APPS.state.newyear2024.globaltop = " + JSON.stringify(_0x25d6a3));
});
mp.events.add("Client_RequestMoreChristmasDailyTop", _0x2a0569 => {
  mp.events.callRemote("Server_RequestMoreChristmasDailyTop", _0x2a0569);
});
mp.events.add("Client_UpdateChristmasDailyTop", _0x3140ff => {
  main_browser.execute("APPS.state.newyear2024.dailytop = " + JSON.stringify(_0x3140ff));
});
mp.events.add("Client_GetPrizeForDailyTop", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetPrizeForDailyTop");
  }
});
mp.events.add("Client_SwitchIPLToBroken", _0x408ccc => {
  for (let _0x2bb2e1 = 0; _0x2bb2e1 < RepairedIpl.length; _0x2bb2e1++) {
    mp.game.streaming.removeIpl(RepairedIpl[_0x2bb2e1]);
  }
  for (let _0x2b6499 = 0; _0x2b6499 < BrokenIpl.length; _0x2b6499++) {
    mp.game.streaming.requestIpl(BrokenIpl[_0x2b6499]);
  }
});
mp.events.add("Client_SwitchIPLToRepair", _0x428cd2 => {
  for (let _0x4e0844 = 0; _0x4e0844 < BrokenIpl.length; _0x4e0844++) {
    mp.game.streaming.removeIpl(BrokenIpl[_0x4e0844]);
  }
  for (let _0x29a2dc = 0; _0x29a2dc < RepairedIpl.length; _0x29a2dc++) {
    mp.game.streaming.requestIpl(RepairedIpl[_0x29a2dc]);
  }
});
mp.events.add("Client_SetChristmasTreeIPL", _0x1fa9f3 => {
  if (_0x1fa9f3) {
    for (let _0xf9c856 = 0; _0xf9c856 < BrokenChristmasTree.length; _0xf9c856++) {
      mp.game.streaming.removeIpl(BrokenChristmasTree[_0xf9c856]);
    }
    for (let _0x5b3856 = 0; _0x5b3856 < RepairedChristmasTree.length; _0x5b3856++) {
      mp.game.streaming.requestIpl(RepairedChristmasTree[_0x5b3856]);
    }
  } else {
    for (let _0x8942e2 = 0; _0x8942e2 < RepairedChristmasTree.length; _0x8942e2++) {
      mp.game.streaming.removeIpl(RepairedChristmasTree[_0x8942e2]);
    }
    for (let _0x22fd2c = 0; _0x22fd2c < BrokenChristmasTree.length; _0x22fd2c++) {
      mp.game.streaming.requestIpl(BrokenChristmasTree[_0x22fd2c]);
    }
  }
});
const BrokenIpl = ["gr_ny_hut1_broken", "ny_hut1_broken_lodlights", "ny_hut1_broken_distantlights", "gr_ny_hut2_broken", "ny_hut2_broken_lodlights", "ny_hut2_broken_distantlights", "gr_ny_hut3_broken", "ny_hut3_broken_lodlights", "ny_hut3_broken_distantlights", "gr_ny_hut4_broken", "ny_hut4_broken_lodlights", "ny_hut4_broken_distantlights", "gr_ny_hut5_broken", "ny_hut5_broken_lodlights", "ny_hut5_broken_distantlights", "gr_ny_hut8_broken", "ny_hut8_broken_lodlights", "ny_hut8_broken_distantlights", "gr_ny_ghh_69_broken", "ny_ghh_69_broken_lodlights", "ny_ghh_69_broken_distantlights", "gr_ny_barn_broken", "ny_barn_broken_lodlights", "ny_barn_broken_distantlights"];
const RepairedIpl = ["gr_ny_hut1_fixed", "ny_hut1_fixed_lodlights", "ny_hut1_fixed_distantlights", "gr_ny_hut2_fixed", "ny_hut2_fixed_lodlights", "ny_hut2_fixed_distantlights", "gr_ny_hut3_fixed", "ny_hut3_fixed_lodlights", "ny_hut3_fixed_distantlights", "gr_ny_hut4_fixed", "ny_hut4_fixed_lodlights", "ny_hut4_fixed_distantlights", "gr_ny_hut5_fixed", "ny_hut5_fixed_lodlights", "ny_hut5_fixed_distantlights", "gr_ny_hut8_fixed", "ny_hut8_fixed_lodlights", "ny_hut8_fixed_distantlights", "gr_ny_ghh_69_fixed", "ny_ghh_69_fixed_lodlights", "ny_ghh_69_fixed_distantlights", "gr_ny_barn_fixed", "ny_barn_fixed_lodlights", "ny_barn_fixed_distantlights"];
const BrokenChristmasTree = ["gr_broken_construction_obj", "gr_broken_construction_lodlights", "gr_broken_construction_distantlights"];
const RepairedChristmasTree = ["gr_fixed_around_obj", "fixed_around_obj_lodlights", "fixed_around_obj_distantlights"];
let christmasTreeAtAirport_Object;
let christmasTreeAtAirport_Colshape;
let StoryQuestRouteBlip;
let christmasTreeAtAirport_Position = new mp.Vector3(-1857.322, -3151.579, 12.944);
global.at_airport_christmastree = 0;
mp.events.add("Client_SpawnChristmasTreeAtAirport", () => {
  if (christmasTreeAtAirport_Object) {
    christmasTreeAtAirport_Object.destroy();
    christmasTreeAtAirport_Object = undefined;
  }
  if (christmasTreeAtAirport_Colshape) {
    christmasTreeAtAirport_Colshape.destroy();
    christmasTreeAtAirport_Colshape = undefined;
  }
  christmasTreeAtAirport_Object = mp.objects.new(mp.game.joaat("xm_prop_x17_xmas_tree_int"), christmasTreeAtAirport_Position, {
    rotation: new mp.Vector3(0, 0, 176.93),
    alpha: 255,
    dimension: 0
  });
  christmasTreeAtAirport_Colshape = mp.colshapes.newSphere(christmasTreeAtAirport_Position.x, christmasTreeAtAirport_Position.y, christmasTreeAtAirport_Position.z, 3);
  christmasTreeAtAirport_Colshape.airport_christmastree = true;
});
mp.events.add("Client_DestoryAirportChristmasTree", () => {
  if (christmasTreeAtAirport_Object) {
    christmasTreeAtAirport_Object.destroy();
    christmasTreeAtAirport_Object = undefined;
  }
  if (christmasTreeAtAirport_Colshape) {
    christmasTreeAtAirport_Colshape.destroy();
    christmasTreeAtAirport_Colshape = undefined;
  }
});
global.ChristmasJobDesignOpened = false;
mp.events.add("Client_OpenChristmasJobDesign", _0x266b13 => {
  if (!ChristmasJobDesignOpened && !!loggedin && !chatActive) {
    main_browser.execute("APPS.state.jobinfo.job = " + +_0x266b13 + ";");
    main_browser.execute("APPS.state.jobinfo.show = true;");
    ChristmasJobDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
global.CloseChristmasJobDesign = function () {
  if (ChristmasJobDesignOpened) {
    main_browser.execute("APPS.state.jobinfo.show = false");
    ChristmasJobDesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseChristmasJobDesign", () => {
  if (ChristmasJobDesignOpened) {
    CloseChristmasJobDesign();
  }
});
mp.events.add("Client_StartDailyChristmasQuest", _0x2d8227 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_StartDailyChristmasQuest", _0x2d8227);
  }
});
const StoryQuestRoute = [new mp.Vector3(-1115.07, 4923.946, 218.034), new mp.Vector3(-1068.837, 4920.411, 212.966), new mp.Vector3(-1164.436, 4926.42, 222.994)];
let DailyRouteBlip;
mp.events.add("Client_SetRouteStoryQuest", _0x1f2e4a => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    _0x1f2e4a = parseInt(_0x1f2e4a);
    if (!isNaN(_0x1f2e4a) && !(--_0x1f2e4a < 0) && !(_0x1f2e4a >= StoryQuestRoute.length)) {
      if (StoryQuestRouteBlip) {
        StoryQuestRouteBlip.destroy();
        StoryQuestRouteBlip = undefined;
      }
      StoryQuestRouteBlip = mp.blips.new(781, StoryQuestRoute[_0x1f2e4a], {
        name: language["Рождественское задание"][curr_lang],
        scale: 1,
        color: 2,
        drawDistance: 25,
        shortRange: false
      });
      if (StoryQuestRouteBlip) {
        StoryQuestRouteBlip.setRoute(true);
      }
      CloseChristmasDesign();
      ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
    }
  }
});
global.CleanStoryQuestBlip = function () {
  if (StoryQuestRouteBlip) {
    StoryQuestRouteBlip.setRoute(false);
    StoryQuestRouteBlip.destroy();
    StoryQuestRouteBlip = undefined;
  }
};
mp.events.add("Client_CheckTamgotchi", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CheckTamagotchiCount");
  }
});
mp.events.add("Client_BuyChristmasKeys", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyChristmasKeys");
  }
});
mp.events.add("Client_SetRouteToSanta", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (DailyRouteBlip) {
      DailyRouteBlip.destroy();
      DailyRouteBlip = undefined;
    }
    DailyRouteBlip = mp.blips.new(781, new mp.Vector3(-1071.744, 4927.829, 212.799), {
      name: language["Санта Клаус"][curr_lang],
      scale: 1,
      color: 2,
      drawDistance: 25,
      shortRange: false
    });
    DailyRouteBlip.setRoute(true);
    CloseChristmasDesign();
    ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
  }
});
global.CleanDailyRouteBlip = function () {
  if (DailyRouteBlip) {
    DailyRouteBlip.setRoute(false);
    DailyRouteBlip.destroy();
    DailyRouteBlip = undefined;
  }
};
mp.events.add("Client_SetRouteToChristmasTree", () => {
  if (DailyRouteBlip) {
    DailyRouteBlip.destroy();
    DailyRouteBlip = undefined;
  }
  DailyRouteBlip = mp.blips.new(781, ChristmasTreePosition, {
    name: language["Рождественская ёлка"][curr_lang],
    scale: 1,
    color: 2,
    drawDistance: 25,
    shortRange: false
  });
  DailyRouteBlip.setRoute(true);
});
mp.events.add("Client_BuyTamagotchi", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyTamagothci");
  }
});
mp.events.add("Client_RespawnTamagotchi", _0x5818b6 => {
  TamagocthiEntities.forEach(_0x130cc6 => {
    if (mp.peds.exists(_0x130cc6)) {
      _0x130cc6.destroy();
    }
  });
  TamagocthiEntities = [];
  TamagotchiColshapes.forEach(_0x51c3e8 => {
    if (mp.colshapes.exists(_0x51c3e8)) {
      _0x51c3e8.destroy();
    }
  });
  TamagotchiColshapes = [];
  CreateTamagotchi(_0x5818b6);
});