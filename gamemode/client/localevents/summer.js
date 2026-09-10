let summer_arena_marker;
let summer_arena_shape;
let summer_arena_interval;
const summer_arena_radius = 100;
let treasureBlip;
global.at_summer_arena = false;
mp.events.add("Client_LoadSummerArena", (_0x4b8af9, _0x47d7b1, _0x37e052) => {
  at_summer_arena = true;
  summer_arena_marker = mp.markers.new(1, new mp.Vector3(-163.408, -2376.309, -60.681), 200, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: _0x4b8af9
  });
  summer_arena_shape = mp.colshapes.newCircle(-163.408, -2376.309, 100, _0x4b8af9);
  summer_arena_shape.is_summer_arena_shape = true;
  main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Пираты[curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x47d7b1[0] + ";");
  main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Люди[curr_lang] + "';");
  main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x47d7b1[1] + ";");
  summer_arena_interval ||= setInterval(() => {
    let _0x266545 = --_0x37e052 % 60;
    let _0x15b28a = _0x37e052 / 60;
    let _0x35a6f3 = "";
    _0x35a6f3 = _0x266545 >= 10 ? Math.floor(_0x15b28a) + ":" + Math.round(_0x266545) : Math.floor(_0x15b28a) + ":0" + Math.round(_0x266545);
    main_browser.execute("APPS.state.hud.arena_last_time = '" + _0x35a6f3 + "'");
    if (_0x37e052 <= 0) {
      if (summer_arena_interval) {
        clearInterval(summer_arena_interval);
        summer_arena_interval = null;
      }
      main_browser.execute("APPS.state.hud.arena_show = false;");
    }
  }, 1000);
  main_browser.execute("APPS.state.hud.arena_show = true;");
});
mp.events.add("Client_UpdateSummerPoints", _0x39747c => {
  if (_0x39747c[0] > _0x39747c[1]) {
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Пираты[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x39747c[0] + ";");
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Люди[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x39747c[1] + ";");
  } else {
    main_browser.execute("APPS.state.hud.arena_player2 = '" + language.Пираты[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player2_score = " + _0x39747c[0] + ";");
    main_browser.execute("APPS.state.hud.arena_player1 = '" + language.Люди[curr_lang] + "';");
    main_browser.execute("APPS.state.hud.arena_player1_score = " + _0x39747c[1] + ";");
  }
});
mp.events.add("playerExitColshape", _0x1e99de => {
  if (mp.colshapes.exists(_0x1e99de) && _0x1e99de.is_summer_arena_shape == 1) {
    mp.events.callRemote("Server_ExitSummerArena");
  }
});
mp.events.add("Client_DeleteSummerArenaVariables", () => {
  at_summer_arena = false;
  if (summer_arena_marker && mp.markers.exists(summer_arena_marker)) {
    summer_arena_marker.destroy();
    summer_arena_marker = undefined;
  }
  if (summer_arena_shape && mp.markers.exists(summer_arena_shape)) {
    summer_arena_shape.destroy();
    summer_arena_shape = undefined;
  }
  if (summer_arena_interval) {
    clearInterval(summer_arena_interval);
    summer_arena_interval = null;
  }
  main_browser.execute("APPS.state.hud.arena_show = false;");
});
mp.events.add("render", () => {
  if (at_summer_arena && mp.players.local.isInWater()) {
    at_summer_arena = false;
    mp.events.callRemote("Server_ExitSummerArena");
  }
});
global.bInTreasureColshape = false;
const OFFSETS = [75, 50, 25, 0];
const TREASURE_POSITIONS = [{
  position: new mp.Vector3(1522.104, 6339.408, 24.141)
}, {
  position: new mp.Vector3(-611.247, 3029.165, 19.922)
}, {
  position: new mp.Vector3(32.041, 4339.298, 42.593)
}, {
  position: new mp.Vector3(-65.83, 1906.294, 196.033)
}, {
  position: new mp.Vector3(2201.862, -808.676, 71.579)
}, {
  position: new mp.Vector3(1488.877, -2339.899, 73.329)
}, {
  position: new mp.Vector3(154.139, -2799.96, 5.975)
}, {
  position: new mp.Vector3(-223.576, 2647.58, 48.614)
}, {
  position: new mp.Vector3(169.699, 2211.62, 91.137)
}, {
  position: new mp.Vector3(653.754, 1297.861, 359.33)
}, {
  position: new mp.Vector3(1528.102, 2334.205, 70.237)
}, {
  position: new mp.Vector3(2046.295, 3438.954, 43.88)
}, {
  position: new mp.Vector3(2047.236, 3886.25, 31.663)
}, {
  position: new mp.Vector3(2284.441, 4601.65, 34.813)
}, {
  position: new mp.Vector3(-1386.988, -1613.961, 2.142)
}, {
  position: new mp.Vector3(-1798.185, -944.526, 2.627)
}, {
  position: new mp.Vector3(-2993.245, -6.979, 3.891)
}, {
  position: new mp.Vector3(-3304.316, 966.214, 2.025)
}, {
  position: new mp.Vector3(-2820.409, 2330.155, 2.692)
}, {
  position: new mp.Vector3(-1937.83, 1783.241, 173.458)
}, {
  position: new mp.Vector3(-602.443, 2028.358, 182.877)
}, {
  position: new mp.Vector3(2768.761, 1246.09, 3.515)
}, {
  position: new mp.Vector3(2903.8, 805.767, 1.925)
}, {
  position: new mp.Vector3(2902.091, 314.696, 3.067)
}, {
  position: new mp.Vector3(2662.999, -917.024, 2.151)
}, {
  position: new mp.Vector3(2774.885, -1576.062, 1.892)
}, {
  position: new mp.Vector3(2309.416, -2116.822, 3.399)
}, {
  position: new mp.Vector3(1069.297, -2648.475, 7.841)
}, {
  position: new mp.Vector3(-1367.885, 5365.896, 2.461)
}, {
  position: new mp.Vector3(-895.602, 5745.678, 4.539)
}, {
  position: new mp.Vector3(-609.583, 6308.388, 2.838)
}, {
  position: new mp.Vector3(-99.983, 6722.255, 1.371)
}, {
  position: new mp.Vector3(1064.058, 6606.622, 3.228)
}, {
  position: new mp.Vector3(3753.617, 4628.841, 3.042)
}, {
  position: new mp.Vector3(3854.162, 4397.174, 4.358)
}, {
  position: new mp.Vector3(-630.938, 2919.389, 14.857)
}, {
  position: new mp.Vector3(-1609.237, 2696.848, 3.156)
}, {
  position: new mp.Vector3(-2853.513, 3568.178, 2.925)
}, {
  position: new mp.Vector3(-2325.618, 4398.206, 5.163)
}, {
  position: new mp.Vector3(-1433.443, 4314.083, 2.079)
}, {
  position: new mp.Vector3(-264.828, 4254.5, 31.119)
}, {
  position: new mp.Vector3(1707.286, 4549.326, 39.714)
}, {
  position: new mp.Vector3(2719.886, 4418.808, 45.639)
}, {
  position: new mp.Vector3(2465.968, 3769.723, 41.429)
}, {
  position: new mp.Vector3(1857.147, 3371, 42.772)
}, {
  position: new mp.Vector3(1381.486, 3274.745, 38.629)
}, {
  position: new mp.Vector3(171.668, 2719.42, 42.113)
}, {
  position: new mp.Vector3(101.697, 3218.513, 27.322)
}];
const TREASURE_COLSHAPE_RADIUS = 5;
const GOLD_MOUNTAIN_COLSHAPE_RADIUS = 10;
const GOLD_MOUNTAIN_POSITIONS = [{
  position: new mp.Vector3(-1450.173, -364.193, 43.521)
}, {
  position: new mp.Vector3(-593.381, 192.736, 71.163)
}, {
  position: new mp.Vector3(-136.077, -24.258, 58.06)
}, {
  position: new mp.Vector3(507.339, -58.758, 88.849)
}, {
  position: new mp.Vector3(-41.672, -785.563, 44.276)
}, {
  position: new mp.Vector3(384.817, -753.261, 29.283)
}, {
  position: new mp.Vector3(471.348, -841.523, 26.43)
}, {
  position: new mp.Vector3(195.568, -932.832, 30.676)
}, {
  position: new mp.Vector3(-547.262, -899.74, 24.025)
}, {
  position: new mp.Vector3(-694.245, -1111.533, 14.517)
}, {
  position: new mp.Vector3(-919.305, -1534.237, 5.021)
}, {
  position: new mp.Vector3(-1240.739, -1823.174, 2.139)
}, {
  position: new mp.Vector3(-1850.142, -3152.239, 13.928)
}, {
  position: new mp.Vector3(-1682.817, -303.189, 51.795)
}, {
  position: new mp.Vector3(-1691.727, 45.976, 64.478)
}, {
  position: new mp.Vector3(-1737.239, 158.303, 64.364)
}, {
  position: new mp.Vector3(-1077.091, 2862.839, 12.362)
}, {
  position: new mp.Vector3(-3071.346, 3500.007, 2.006)
}, {
  position: new mp.Vector3(-2206.189, 5108.492, 11.054)
}, {
  position: new mp.Vector3(-1382.375, 5357.153, 2.418)
}, {
  position: new mp.Vector3(675.267, 6475.275, 30.263)
}, {
  position: new mp.Vector3(3703.476, 4517.932, 21.517)
}, {
  position: new mp.Vector3(3927.811, 4393.138, 16.522)
}, {
  position: new mp.Vector3(2802.563, -783.208, 7.644)
}];
let treasureColshape;
let goldMountainColshape;
let goldMountainBlip;
let summerChest;
let summerChestColshape;
let summerUnderwaterCaveColshape;
function CreateSecretNPC(_0x2e21c8) {
  const _0x45af65 = {
    name: "Hidden Pirate",
    model: "a_m_y_beach_01",
    position: new mp.Vector3(SecretNPCPosition[_0x2e21c8].x, SecretNPCPosition[_0x2e21c8].y, SecretNPCPosition[_0x2e21c8].z),
    rotation: SecretNPCPosition[_0x2e21c8].heading,
    conversation_id: 5008,
    cam_pos: SecretNPCPosition[_0x2e21c8].campos,
    cam_point: SecretNPCPosition[_0x2e21c8].campoint
  };
  mp.labels.new(_0x45af65.name, new mp.Vector3(_0x45af65.position.x, _0x45af65.position.y, _0x45af65.position.z + 1), {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  });
  if (_0x45af65.model) {
    mp.peds.new(mp.game.joaat(_0x45af65.model), _0x45af65.position, _0x45af65.rotation, 0);
    mp.colshapes.newSphere(_0x45af65.position.x, _0x45af65.position.y, _0x45af65.position.z, 2.5, 0).secretNPC = true;
  }
}
function createSummerStoryChest() {
  if (summerChest && mp.objects.exists(summerChest)) {
    summerChest.destroy();
    summerChest = undefined;
  }
  summerChest = mp.objects.new(mp.game.joaat("xm_prop_x17_chest_closed"), new mp.Vector3(-1611.728, -1046.501, 5), {
    rotation: new mp.Vector3(0, 0, 143.154),
    alpha: 255,
    dimension: 0
  });
  if (summerChestColshape && mp.colshapes.exists(summerChestColshape)) {
    summerChestColshape.destroy();
    summerChestColshape = undefined;
  }
  summerChestColshape = mp.colshapes.newSphere(-1611.728, -1046.501, 5.413, 2).isSummerChest = true;
  SetGPSLocation(-1611.728, -1046.501, 5.913, true);
}
global.atGoldMountain = false;
global.summerSoundOff = false;
mp.events.add("Client_ShowHiddenTreasure", (_0x48983a, _0x1ce284) => {
  closeSummerEventDesign2024();
  if (treasureBlip != null) {
    treasureBlip.destroy();
    treasureBlip = undefined;
  }
  let _0x2b7f32 = OFFSETS[_0x1ce284] == 0 ? 0 : randomInteger(-OFFSETS[_0x1ce284], OFFSETS[_0x1ce284]);
  let _0x49baa5 = OFFSETS[_0x1ce284] == 0 ? 0 : randomInteger(-OFFSETS[_0x1ce284], OFFSETS[_0x1ce284]);
  if (treasureColshape != null) {
    treasureColshape.destroy();
    treasureColshape = undefined;
  }
  SetGPSLocation(TREASURE_POSITIONS[_0x48983a].position.x + _0x2b7f32, TREASURE_POSITIONS[_0x48983a].position.y + _0x49baa5, TREASURE_POSITIONS[_0x48983a].position.z, true);
  treasureBlip = mp.blips.new(5, new mp.Vector3(TREASURE_POSITIONS[_0x48983a].position.x + _0x2b7f32, TREASURE_POSITIONS[_0x48983a].position.y + _0x49baa5, 0), {
    radius: parseFloat(OFFSETS[_0x1ce284] + 3),
    alpha: parseFloat(175),
    color: parseFloat(37),
    dimension: 0
  });
  treasureColshape = mp.colshapes.newSphere(TREASURE_POSITIONS[_0x48983a].position.x, TREASURE_POSITIONS[_0x48983a].position.y, TREASURE_POSITIONS[_0x48983a].position.z, 5);
  treasureColshape.bSummerTreasure = true;
  mp.game.invoke("0xA8B6AFDAC320AC87", treasureBlip.handle, 0);
  mp.game.invoke("0xF87683CDF73C3F6E", treasureBlip.handle, Math.ceil(0));
});
mp.events.add("playerEnterColshape", _0x48d7c9 => {
  if (_0x48d7c9.bSummerTreasure) {
    bInTreasureColshape = true;
  } else if (_0x48d7c9.isGoldMountain) {
    atGoldMountain = _0x48d7c9.isGoldMountain;
    main_browser.execute("APPS.state.hud.interact = 2;");
    mining_state = true;
  } else if (_0x48d7c9.secretNPC) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_secret_npc = 1;
  } else if (_0x48d7c9.isSummerChest) {
    mp.events.callRemote("Server_FoundStoryChestSummer2024");
  } else if (_0x48d7c9.isSummerUnderwaterCave) {
    mp.events.callRemote("Server_FoundUnderwaterCaveSummer2024");
  }
});
mp.events.add("playerExitColshape", _0xaefd0c => {
  if (_0xaefd0c.bSummerTreasure) {
    bInTreasureColshape = false;
  } else if (_0xaefd0c.isGoldMountain) {
    atGoldMountain = undefined;
    main_browser.execute("APPS.state.hud.interact = false;");
    mining_state = false;
  } else if (_0xaefd0c.secretNPC) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_secret_npc = 0;
  }
});
mp.events.add("Client_ClearTreasureEntities", () => {
  if (treasureColshape != null) {
    treasureColshape.destroy();
    treasureColshape = undefined;
  }
  if (treasureBlip != null) {
    treasureBlip.destroy();
    treasureBlip = undefined;
  }
});
mp.events.add("Client_CreateGoldMountainZone", _0x502994 => {
  if (goldMountainBlip != null) {
    goldMountainBlip.destroy();
    goldMountainBlip = undefined;
  }
  goldMountainBlip = mp.blips.new(zone_blips, new mp.Vector3(GOLD_MOUNTAIN_POSITIONS[_0x502994].position.x, GOLD_MOUNTAIN_POSITIONS[_0x502994].position.y, 0), {
    radius: parseFloat(70),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_CreateGoldMountainEntities", _0x2908fa => {
  if (!(_0x2908fa < 0) && !(_0x2908fa >= GOLD_MOUNTAIN_POSITIONS.length)) {
    if (goldMountainColshape != null) {
      goldMountainColshape.destroy();
      goldMountainColshape = undefined;
    }
    goldMountainColshape = mp.colshapes.newSphere(GOLD_MOUNTAIN_POSITIONS[_0x2908fa].position.x, GOLD_MOUNTAIN_POSITIONS[_0x2908fa].position.y, GOLD_MOUNTAIN_POSITIONS[_0x2908fa].position.z, 10);
    goldMountainColshape.isGoldMountain = ++_0x2908fa;
  }
});
mp.events.add("Client_DestroyGoldMountainEntities", () => {
  if (goldMountainColshape != null) {
    goldMountainColshape.destroy();
    goldMountainColshape = undefined;
  }
  if (goldMountainBlip != null) {
    goldMountainBlip.destroy();
    goldMountainBlip = undefined;
  }
});
mp.events.add("Client_PlayGoldCoinSound", () => {
  if (!summerSoundOff) {
    StartCustomSound("summer_sound", "/game/gui/sounds/summer2024/gold_coins.ogg", 0.1);
  }
});
global.summerDailyDesignOpened = false;
mp.events.add("Client_ShowDailySummer2024Login", (_0xb44e1d, _0x589c45) => {
  if (!summerDailyDesignOpened && !!loggedin && !chatActive) {
    main_browser.execute("APPS.state.loginpirates.gender = " + _0x589c45 + ";");
    main_browser.execute("APPS.state.loginpirates.summerDailyLogin = " + _0xb44e1d + ";");
    main_browser.execute("APPS.state.loginpirates.show = true;");
    summerDailyDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
global.closeDailySummer2024Design = function () {
  if (summerDailyDesignOpened) {
    main_browser.execute("APPS.state.loginpirates.show = false;");
    summerDailyDesignOpened = false;
    SwitchHUDToDesign(false);
    mp.events.callRemote("Server_CloseEasterAnnounceDesign", 6);
  }
};
mp.events.add("Client_CloseSummer2024Login", () => {
  closeDailySummer2024Design();
});
global.summerTamagotchiOpened = false;
mp.events.add("Client_OpenSummer2024Tamagotchi", (_0x405ad2, _0x5b9ac7, _0x34510d, _0x49c7da, _0x59dca4, _0x386704) => {
  const _0x2991d1 = "{\"ownerName\":\"" + _0x386704 + "\", \"gender\":" + _0x59dca4 + ",\"woodCount\":" + _0x405ad2 + ",\"tamagotchiLevel\":" + _0x5b9ac7 + ",\"timeleft\":" + _0x34510d + ",\"summerCurrency\":" + _0x49c7da + ",\"show\":true}";
  main_browser.execute("APPS.state.pirates_production = " + _0x2991d1);
  summerTamagotchiOpened = true;
  SwitchHUDToDesign(true);
});
global.closeSummer2024Tamagotchi = function () {
  if (summerTamagotchiOpened) {
    main_browser.execute("APPS.state.pirates_production.show = false");
    summerTamagotchiOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseSummer2024Tamagotchi", () => {
  closeSummer2024Tamagotchi();
});
mp.events.add("Client_TopUpSummerCurrency", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TopUpSummerCurrency");
    }
  }
});
mp.events.add("Client_UpdateSummerCurrencyBalance", _0x4e1974 => {
  if (summerTamagotchiOpened) {
    main_browser.execute("APPS.state.pirates_production.summerCurrency = " + _0x4e1974);
  } else if (mainSummerDesignOpened) {
    main_browser.execute("APPS.state.eventpirates.summerCurrency = " + _0x4e1974);
  }
});
mp.events.add("Client_BuyPiratePack", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyRareTamagotchi");
    }
  }
});
mp.events.add("Client_StartTamagotchiProduction", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_StartTamagotchiProduction");
    }
  }
});
mp.events.add("Client_UpgradeTamagotchi", () => {
  if (summerTamagotchiOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_UpgradeTamagotchi");
    }
  }
});
global.SecretNPCPosition = [{
  x: 1417.649,
  y: 3823.489,
  z: 32.003,
  heading: 167.201,
  campos: new mp.Vector3(1417.299, 3821.733, 32.503),
  campoint: new mp.Vector3(1417.649, 3823.489, 32.003, 32.503)
}, {
  x: 1874.758,
  y: 306.828,
  z: 163.762,
  heading: 67.844,
  campos: new mp.Vector3(1873.765, 307.277, 164.262),
  campoint: new mp.Vector3(1874.758, 306.828, 164.262)
}, {
  x: -450.969,
  y: 5167.499,
  z: 100.047,
  heading: 92.464,
  campos: new mp.Vector3(-451.893, 5167.483, 100.547),
  campoint: new mp.Vector3(-450.969, 5167.499, 100.547)
}, {
  x: -146.525,
  y: 1447.733,
  z: 293.896,
  heading: 51.492,
  campos: new mp.Vector3(-147.464, 1448.41, 294.396),
  campoint: new mp.Vector3(-146.525, 1447.733, 294.396)
}, {
  x: -1579.855,
  y: 2094.497,
  z: 69.06,
  heading: -34.182,
  campos: new mp.Vector3(-1578.921, 2095.585, 69.56),
  campoint: new mp.Vector3(-1579.855, 2094.497, 69.56)
}, {
  x: 1599.555,
  y: 6620.449,
  z: 15.921,
  heading: 124.51,
  campos: new mp.Vector3(1598.923, 6620.003, 16.421),
  campoint: new mp.Vector3(1599.555, 6620.449, 16.421)
}, {
  x: 2482.995,
  y: 3432.256,
  z: 50.017,
  heading: 136.76,
  campos: new mp.Vector3(2482.228, 3431.385, 50.517),
  campoint: new mp.Vector3(2482.995, 3432.256, 50.517)
}, {
  x: 2944.959,
  y: 2746.517,
  z: 43.379,
  heading: -74.221,
  campos: new mp.Vector3(2946.738, 2746.945, 43.879),
  campoint: new mp.Vector3(2944.959, 2746.517, 43.879)
}, {
  x: 25.532,
  y: 4327.692,
  z: 43.635,
  heading: -23.674,
  campos: new mp.Vector3(25.823, 4328.459, 44.135),
  campoint: new mp.Vector3(25.532, 4327.692, 44.135)
}, {
  x: -2774.046,
  y: 2706.11,
  z: 2.315,
  heading: -30.412,
  campos: new mp.Vector3(-2773.137, 2707.676, 2.815),
  campoint: new mp.Vector3(-2774.046, 2706.11, 2.815)
}, {
  x: 1122.887,
  y: -645.597,
  z: 56.79,
  heading: -79.475,
  campos: new mp.Vector3(1124.533, -645.179, 57.29),
  campoint: new mp.Vector3(1122.887, -645.597, 57.29)
}, {
  x: -122.758,
  y: -444.56,
  z: 35.901,
  heading: -26.121,
  campos: new mp.Vector3(-122.274, -443.97, 36.401),
  campoint: new mp.Vector3(-122.758, -444.56, 36.401)
}];
global.SecretNPCRandom = 0;
mp.events.add("Client_SetSummerSecretNPC", _0x482cff => {
  if (loggedin) {
    SecretNPCRandom = _0x482cff;
    CreateSecretNPC(_0x482cff);
  }
});
global.mainSummerDesignOpened = false;
mp.events.add("Client_CloseSummerEventDesign2024", () => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    closeSummerEventDesign2024();
  }
});
global.closeSummerEventDesign2024 = function () {
  main_browser.execute("APPS.state.eventpirates.show = false");
  mainSummerDesignOpened = false;
  SwitchHUDToDesign(false);
};
mp.events.add("Client_TakePirateShip", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TakePirateShip");
    }
  }
});
mp.events.add("Client_OpenMainEventDesign", (_0xe382b2, _0xb2261a, _0xe9db5f, _0x488db5, _0x181661, _0x21e542, _0x286a96) => {
  if (mainSummerDesignOpened || !loggedin || chatActive) {
    return;
  }
  const _0x1ce7c2 = "{\"productionTimeleft\":" + _0x286a96 + ",\"serverTime\":" + _0x21e542 + ", \"gender\":" + _0x181661 + ",\"summerCurrency\":" + _0xe382b2 + ",\"summerStoryQuest\":" + _0xb2261a + ",\"pirateShipSpawned\":" + _0xe9db5f + ",\"tamagotchiLevel\": " + _0x488db5 + ",\"show\":true}";
  main_browser.execute("APPS.state.eventpirates = " + _0x1ce7c2);
  mainSummerDesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_LoadSummerMainDesignPage3", _0x408f82 => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.eventpirates.summerTreasuresFound = " + JSON.stringify(_0x408f82));
  }
});
mp.events.add("Client_LoadSummerMainDesignPage4", _0x282c0d => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.eventpirates.items = " + JSON.stringify(_0x282c0d));
  }
});
mp.events.add("Client_RequestPageInfoSummer2024", _0x1e0393 => {
  mp.events.callRemote("Server_SummerMainDesignPageHandler", _0x1e0393);
});
mp.events.add("Client_RequestShowHiddenTreasure", _0x22f640 => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ShowHiddenTreasure", _0x22f640);
    }
  }
});
mp.events.add("Client_TryItemFromSummerShop", _0x52ae08 => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TryItemFromSummerShop", _0x52ae08);
    }
  }
});
mp.events.add("Client_BuySummerShopItem", _0x298d23 => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuySummerShopItem", _0x298d23);
    }
  }
});
mp.events.add("Client_RequestRecycleSummer2024", (_0x408dd8, _0x4a0ae6) => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestRecycleSummer2024", _0x408dd8, _0x4a0ae6);
    }
  }
});
mp.events.add("Client_JoinSummer2024Battle", () => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GotoSummerArena");
    }
  }
});
mp.events.add("Client_CreateSummerChest", () => {
  createSummerStoryChest();
});
mp.events.add("Client_DestroySummerStoryChest", () => {
  if (summerChest && mp.objects.exists(summerChest)) {
    summerChest.destroy();
    summerChest = undefined;
  }
  if (summerChestColshape && mp.colshapes.exists(summerChestColshape)) {
    summerChestColshape.destroy();
    summerChestColshape = undefined;
  }
});
mp.events.add("Client_CreateUnderwaterCaveLocation", () => {
  if (summerUnderwaterCaveColshape && mp.colshapes.exists(summerUnderwaterCaveColshape)) {
    summerUnderwaterCaveColshape.destroy();
    summerUnderwaterCaveColshape = undefined;
  }
  summerUnderwaterCaveColshape = mp.colshapes.newSphere(-3547.047, 637.29, -55.381, 10).isSummerUnderwaterCave = true;
  SetGPSLocation(-3547.047, 637.29, -55.381, true);
});
mp.events.add("Client_DestroySummerUnderwaterCave", () => {
  if (summerUnderwaterCaveColshape && mp.colshapes.exists(summerUnderwaterCaveColshape)) {
    summerUnderwaterCaveColshape.destroy();
    summerUnderwaterCaveColshape = undefined;
  }
});
mp.events.add("Client_FreezePositionForSummerArena2024", () => {
  is_freezed = true;
  localplayer.freezePosition(true);
  setTimeout(() => {
    is_freezed = false;
    localplayer.freezePosition(false);
  }, 2000);
});
mp.events.add("Client_RequestGPSToPirateShip", () => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestGPSToPirateShip");
    }
  }
});
mp.events.add("Client_SetGPSToPirateShip", _0x2681cb => {
  closeSummerEventDesign2024();
  SetGPSLocation(_0x2681cb.x, _0x2681cb.y, _0x2681cb.z, true);
});
mp.events.add("Client_GetPirateShip", () => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetPirateShip");
    }
  }
});
mp.events.add("Client_RequestGPSToGoldMountain", () => {
  if (mainSummerDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestGPSToGoldMountain");
    }
  }
});
mp.events.add("Client_SetGPSToGoldMountain", _0x34f0f6 => {
  SetGPSLocation(GOLD_MOUNTAIN_POSITIONS[_0x34f0f6].position.x, GOLD_MOUNTAIN_POSITIONS[_0x34f0f6].position.y, GOLD_MOUNTAIN_POSITIONS[_0x34f0f6].position.z, true);
});
mp.events.add("executeVueString", _0x13f7c0 => {
  main_browser.execute(_0x13f7c0);
});