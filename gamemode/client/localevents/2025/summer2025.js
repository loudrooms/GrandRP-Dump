const BIG_STATUE_POSITIONS = [new mp.Vector3(-1518.538, 2140.57, 56.017), new mp.Vector3(-1433.417, 2456.52, 27.94), new mp.Vector3(-932.706, 2274.767, 140.862), new mp.Vector3(-471.522, 2029.762, 216.903), new mp.Vector3(-345.417, 2688.3, 74.235), new mp.Vector3(-143.928, 2922.364, 40.268), new mp.Vector3(-496.326, 2969.466, 26.082), new mp.Vector3(-1238.965, 2735.193, 10.113), new mp.Vector3(-2235.007, 2534.962, 3.354), new mp.Vector3(-2235.007, 2534.966, 3.361), new mp.Vector3(-2914.969, 3094.55, 2.539), new mp.Vector3(-2767.054, 2520.952, 2.677), new mp.Vector3(-2661.781, 1303.039, 145.703), new mp.Vector3(-3125.383, 1287.81, 21.094), new mp.Vector3(-2029.525, -138.915, 27.886), new mp.Vector3(810.186, 1312.232, 362.786), new mp.Vector3(1556.247, 1430.215, 106.991), new mp.Vector3(2426.57, 3379.742, 48.048), new mp.Vector3(2481.46, 3823.726, 40.506), new mp.Vector3(2517.505, 4264.182, 40), new mp.Vector3(2997.324, 4400.96, 70.266), new mp.Vector3(1524.771, 4501.817, 54.912), new mp.Vector3(1066.999, 4253.062, 37.199), new mp.Vector3(303.839, 4323.106, 47.862), new mp.Vector3(-969.924, 4181.856, 135.263), new mp.Vector3(-1427.755, 4411.737, 47.016)];
const BIG_STATUE_MODEL = "grand_summer_totem";
const BIG_STATUE_MAX_HEALTH = 100;
const LABYRINTH_FINISH_POSITION = new mp.Vector3(-1784.651, -2991.317, 13.944);
const MAP_STATUES_POSITIONS = [new mp.Vector3(1796.568, 3277.996, 42.785), new mp.Vector3(1770.471, 3338.337, 41.433), new mp.Vector3(1695.391, 3542.088, 36.155), new mp.Vector3(1690.706, 3581.028, 35.621), new mp.Vector3(1688.797, 3607.991, 35.365), new mp.Vector3(1774.574, 3639.508, 34.558), new mp.Vector3(1898.765, 3732.48, 32.711), new mp.Vector3(1915.718, 3734.957, 32.64), new mp.Vector3(1920.508, 3729.436, 32.791), new mp.Vector3(1964.151, 3751.849, 32.247), new mp.Vector3(1968.851, 3784.746, 32.171), new mp.Vector3(1986.261, 3786.377, 32.274), new mp.Vector3(1988.597, 3789.086, 32.181), new mp.Vector3(1999.032, 3794.765, 32.181), new mp.Vector3(1991.73, 3819.377, 32.395), new mp.Vector3(1943.897, 3808.451, 32.037), new mp.Vector3(1867.984, 3761.89, 33.017), new mp.Vector3(1871.876, 3751.459, 32.982), new mp.Vector3(1748.186, 3691.752, 34.427), new mp.Vector3(1722.632, 3699.95, 34.463), new mp.Vector3(1633.253, 3590.674, 35.386), new mp.Vector3(1612.174, 3624.835, 35.228), new mp.Vector3(1578.018, 3615.292, 38.775), new mp.Vector3(1596.768, 3573.002, 38.738), new mp.Vector3(1559.49, 3520.92, 35.902), new mp.Vector3(1539.151, 3594.872, 38.767), new mp.Vector3(1539.693, 3765.172, 34.582), new mp.Vector3(1579.934, 3801.747, 34.461), new mp.Vector3(1977.916, 3931.996, 32.648), new mp.Vector3(2045.04, 3730.172, 32.809), new mp.Vector3(256.256, -869.525, 29.322), new mp.Vector3(215.915, -810.2, 30.723), new mp.Vector3(44.584, -866.936, 30.514), new mp.Vector3(-197.604, -794.058, 30.454), new mp.Vector3(145.58, -1058.79, 30.186), new mp.Vector3(-277.933, -786.011, 33.002), new mp.Vector3(6.871, -711.016, 45.973), new mp.Vector3(174.817, -669.813, 43.141), new mp.Vector3(133.354, -567.419, 43.826), new mp.Vector3(-99.331, -576.753, 40.459), new mp.Vector3(-296.824, -398.003, 30.342), new mp.Vector3(-269.956, -691.923, 34.277), new mp.Vector3(-454.813, -678.126, 32.719), new mp.Vector3(-708.676, -866.913, 23.374), new mp.Vector3(-569.009, -857.257, 26.54), new mp.Vector3(-555.493, -982.617, 23.114), new mp.Vector3(-619.289, -885.219, 24.966), new mp.Vector3(-760.137, -635.882, 30.276), new mp.Vector3(-910.262, -724.345, 19.916), new mp.Vector3(-942.344, -788.991, 15.951), new mp.Vector3(-1038.125, -834.172, 19.215), new mp.Vector3(-1270.764, -882.959, 11.93), new mp.Vector3(-668.051, -1018.817, 18.511), new mp.Vector3(-753.923, -1079.259, 11.76), new mp.Vector3(-784.527, -1178.923, 10.823), new mp.Vector3(-861.711, -1142.856, 6.989), new mp.Vector3(-1130.421, -1376.57, 5.152), new mp.Vector3(-1118.026, -1439.438, 5.108), new mp.Vector3(-1360.456, -1478.516, 5.102), new mp.Vector3(-1437.843, -989.943, 4.735), new mp.Vector3(-1560.503, -907.764, 9.155), new mp.Vector3(-1670.185, -1055.597, 13.154), new mp.Vector3(-1354.465, -776.708, 20.678), new mp.Vector3(-1422.292, -709.695, 24.603), new mp.Vector3(-1593.741, -586.425, 34.979), new mp.Vector3(-1547.584, -526.553, 35.835), new mp.Vector3(-1559.699, -461.558, 35.982), new mp.Vector3(-1592.447, -410.141, 43.04), new mp.Vector3(-1324.06, -422.249, 35.275), new mp.Vector3(-1363.619, -457.479, 36.749), new mp.Vector3(-1208.45, -270.892, 37.805), new mp.Vector3(-1164.64, -329.39, 38.418), new mp.Vector3(-1196.026, -374.419, 36.17), new mp.Vector3(-943.123, -338.842, 38.98), new mp.Vector3(-815.397, -280.12, 37.3), new mp.Vector3(-862.735, -395.902, 39.382), new mp.Vector3(-1041.096, -164.508, 38.144), new mp.Vector3(-1152.545, -213.55, 37.959), new mp.Vector3(-799.382, -95.875, 37.659), new mp.Vector3(-506.501, 23.277, 44.773), new mp.Vector3(-256.998, 22.592, 54.809), new mp.Vector3(118.886, -130.07, 54.835), new mp.Vector3(389.277, -356.167, 48.024), new mp.Vector3(386.961, -330.755, 46.891), new mp.Vector3(402.1, -370.491, 46.746), new mp.Vector3(879.692, -279.703, 65.499), new mp.Vector3(793.696, -241.624, 66.114), new mp.Vector3(760.434, -250.812, 66.114), new mp.Vector3(915.06, -316.675, 66.158), new mp.Vector3(1109.021, -630.432, 56.816), new mp.Vector3(163, 6632.229, 31.634), new mp.Vector3(-143.715, 6466.707, 31.713), new mp.Vector3(-195.903, 6265.455, 31.489), new mp.Vector3(-27.131, 6325.278, 33.794), new mp.Vector3(-279.879, 6016.73, 32.028), new mp.Vector3(-442.839, 6093.646, 31.543), new mp.Vector3(-74.766, 6439.541, 31.44), new mp.Vector3(-77.731, 6503.657, 31.491), new mp.Vector3(87.915, 6579.918, 31.455), new mp.Vector3(80.955, 6423.521, 31.673)];
const MAP_STATUE_MODEL = "grand_summer_maya_statue";
let bigStatueObject;
let labyrinthFinishColshape;
let waterBlip;
let waterShape;
let waterRaceInterval;
let waterCheckpoint;
let mapStatuesData = [];
function deleteBigStatue() {
  if (bigStatueObject && mp.objects.exists(bigStatueObject)) {
    bigStatueObject.destroy();
    bigStatueObject = undefined;
  }
}
function destroyLabyrinthFinish() {
  if (labyrinthFinishColshape && mp.colshapes.exists(labyrinthFinishColshape)) {
    labyrinthFinishColshape.destroy();
    labyrinthFinishColshape = undefined;
  }
}
function cleanWaterRaceEntites() {
  if (waterBlip) {
    waterBlip.destroy();
    waterBlip = undefined;
  }
  if (waterShape) {
    waterShape.destroy();
    waterShape = undefined;
  }
  if (waterCheckpoint) {
    waterCheckpoint.destroy();
    waterCheckpoint = undefined;
  }
}
mp.events.add("Client_SpawnBigStatueSummer2025", _0x391ecf => {
  deleteBigStatue();
  bigStatueObject = mp.objects.new(mp.game.joaat(BIG_STATUE_MODEL), new mp.Vector3(BIG_STATUE_POSITIONS[_0x391ecf].x, BIG_STATUE_POSITIONS[_0x391ecf].y, BIG_STATUE_POSITIONS[_0x391ecf].z - 1), {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: 0
  });
});
mp.events.add("playerWeaponShot", (_0x2245a6, _0x2c63fa) => {
  if (bSummer2025 && currentWeapon() != 101631238) {
    const _0x590d3b = mp.game.player.getEntityIsFreeAimingAt();
    if (_0x590d3b && _0x590d3b.model && _0x590d3b.model == 4206595061) {
      if (_0x590d3b.healthPoints == null) {
        _0x590d3b.healthPoints = 100;
      }
      _0x590d3b.healthPoints--;
      updateHealthBar(_0x590d3b.healthPoints, 100, "BIG STATUE");
      if (_0x590d3b.healthPoints <= 0) {
        mp.events.call("Client_ShowParticleEffect", "cut_finale1", "cs_finale1_car_explosion", bigStatueObject.position, 5000);
        deleteBigStatue();
        mp.events.callRemote("Server_DestroyBigStatueSummer2025");
      }
    }
  }
});
global.atSummerLabyrinth = false;
mp.events.add("Client_CreateLabyrinthFinish", () => {
  destroyLabyrinthFinish();
  labyrinthFinishColshape = mp.colshapes.newSphere(LABYRINTH_FINISH_POSITION.x, LABYRINTH_FINISH_POSITION.y, LABYRINTH_FINISH_POSITION.z, 5, localplayer.getVariable("REMOTE_ID"));
  labyrinthFinishColshape.isLabyrinthFinish = true;
  mp.game.streaming.requestIpl("changer_labirinto");
  atSummerLabyrinth = true;
});
mp.events.add("playerEnterColshape", _0x5cf5e5 => {
  if (_0x5cf5e5) {
    if (_0x5cf5e5.isLabyrinthFinish) {
      mp.events.callRemote("Server_FinishLabyrinth2025");
    } else if (_0x5cf5e5.mapStatueIndex) {
      main_browser.execute("APPS.state.hud.interact = true;");
      PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
      bAtMapStatue = _0x5cf5e5.mapStatueIndex;
    }
  }
});
mp.events.add("playerExitColshape", _0x3191e9 => {
  if (_0x3191e9 && _0x3191e9.mapStatueIndex) {
    main_browser.execute("APPS.state.hud.interact = false;");
    bAtMapStatue = false;
  }
});
mp.events.add("Client_DestroyLabyrinth", () => {
  destroyLabyrinthFinish();
  mp.game.streaming.removeIpl("changer_labirinto");
  atSummerLabyrinth = false;
});
mp.game.streaming.removeIpl("changer_labirinto");
const WATER_RACE_POSITIONS = [{
  position: new mp.Vector3(138.619, 3409.245, 29.997)
}, {
  position: new mp.Vector3(99.969, 3291.007, 29.764)
}, {
  position: new mp.Vector3(41.225, 3140.649, 25.404)
}, {
  position: new mp.Vector3(-75.807, 3108.934, 24.896)
}, {
  position: new mp.Vector3(-150.576, 3084.121, 18.478)
}, {
  position: new mp.Vector3(-231.226, 3001.128, 18.265)
}, {
  position: new mp.Vector3(-299.199, 3021.045, 17.626)
}, {
  position: new mp.Vector3(-399.364, 2985.497, 13.248)
}, {
  position: new mp.Vector3(-506.174, 2908.53, 13.086)
}, {
  position: new mp.Vector3(-644.893, 2932.359, 13.107)
}, {
  position: new mp.Vector3(-827.836, 2816.554, 9.753)
}, {
  position: new mp.Vector3(-1033.825, 2831.508, 4.206)
}, {
  position: new mp.Vector3(-1183.12, 2741.002, -0.018)
}, {
  position: new mp.Vector3(-1476.571, 2628.375, -0.031)
}, {
  position: new mp.Vector3(-1655.966, 2612.469, -0.069)
}, {
  position: new mp.Vector3(-1858.24, 2587.8, -0.061)
}, {
  position: new mp.Vector3(-2033.754, 2547.865, -0.067)
}, {
  position: new mp.Vector3(-2206.497, 2601.845, -0.075)
}, {
  position: new mp.Vector3(-2432.459, 2587.993, -0.093)
}, {
  position: new mp.Vector3(-2662.858, 2596.193, -0.109)
}, {
  position: new mp.Vector3(-2842.331, 2612.714, 0.102)
}];
function setWaterCheckpoint(_0x519ac8) {
  cleanWaterRaceEntites();
  waterShape = mp.colshapes.newSphere(WATER_RACE_POSITIONS[_0x519ac8].position.x, WATER_RACE_POSITIONS[_0x519ac8].position.y, WATER_RACE_POSITIONS[_0x519ac8].position.z, 3, mp.players.local.dimension);
  waterShape.bWaterShape = _0x519ac8;
  waterBlip = mp.blips.new(1, WATER_RACE_POSITIONS[_0x519ac8].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: mp.players.local.dimension
  });
  const _0x294d54 = WATER_RACE_POSITIONS[_0x519ac8 + 1] ? new mp.Vector3(WATER_RACE_POSITIONS[_0x519ac8 + 1].position.x, WATER_RACE_POSITIONS[_0x519ac8 + 1].position.y, WATER_RACE_POSITIONS[_0x519ac8 + 1].position.z) : new mp.Vector3(0, 0, 0);
  waterCheckpoint = mp.checkpoints.new(WATER_RACE_POSITIONS[_0x519ac8 + 1] ? 2 : 10, new mp.Vector3(WATER_RACE_POSITIONS[_0x519ac8].position.x, WATER_RACE_POSITIONS[_0x519ac8].position.y, WATER_RACE_POSITIONS[_0x519ac8].position.z - 1), 5, {
    direction: _0x294d54,
    color: [0, 160, 255, 255],
    visible: true,
    dimension: mp.players.local.dimension
  });
  waterBlip.setRoute(true);
}
const TIME_FOR_RACE = 180000;
function clearWaterRaceInterval() {
  if (waterRaceInterval != null) {
    clearInterval(waterRaceInterval);
    waterRaceInterval = undefined;
  }
}
mp.events.add("Client_ClearWaterRace2025", () => {
  clearWaterRaceInterval();
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
mp.events.add("Client_StartWaterRace2025", () => {
  if (mp.players.local.vehicle) {
    mp.players.local.vehicle.freezePosition(true);
  }
  let _0x28ab73 = 5;
  main_browser.execute("APPS.state.hud.event_coutdown = " + _0x28ab73 + ";");
  let _0x111c88 = setInterval(function () {
    _0x28ab73--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + _0x28ab73 + ";");
    if (_0x28ab73 <= 0) {
      if (mp.players.local.vehicle) {
        mp.players.local.vehicle.freezePosition(false);
      }
      if (_0x111c88 != null) {
        clearInterval(_0x111c88);
      }
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      clearWaterRaceInterval();
      let _0xeddbdb = 0;
      waterRaceInterval = setInterval(() => {
        _0xeddbdb++;
        ShowDrugLabsDesign(language.Гонщик[curr_lang], 1, "", 0, "", 0, "", 0, "", 0, 180 - _0xeddbdb, 180000, language.Гонка[curr_lang]);
        if (_0xeddbdb == 180) {
          if (waterRaceInterval != null) {
            clearInterval(waterRaceInterval);
            waterRaceInterval = undefined;
          }
          main_browser.execute("APPS.state.hud.drug_lab_show = false;");
          mp.events.callRemote("Server_FailedWaterRace");
        }
      }, 1000);
    }
  }, 1000);
  cleanWaterRaceEntites();
  setWaterCheckpoint(1);
});
mp.events.add("playerEnterColshape", _0x182bf2 => {
  if (_0x182bf2.bWaterShape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (_0x182bf2.bWaterShape + 1 >= WATER_RACE_POSITIONS.length) {
      cleanWaterRaceEntites();
      clearWaterRaceInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_FinishedWaterRace");
      return;
    }
    setWaterCheckpoint(_0x182bf2.bWaterShape + 1);
  }
});
mp.events.add("Client_CancelWaterRace", () => {
  if (waterRaceInterval != null) {
    clearInterval(waterRaceInterval);
    waterRaceInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  cleanWaterRaceEntites();
});
global.bAtSummerAltar = false;
mp.events.add("Client_AtSummerAltar2025", _0x4e1aed => {
  if (_0x4e1aed) {
    bAtSummerAltar = true;
    main_browser.execute("APPS.state.hud.interact = 2;");
  } else {
    bAtSummerAltar = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
let monkeyExitInterval;
let monkeyHunterInterval;
let altarMinigameOpened = false;
function destroyStatues() {
  mapStatuesData.forEach(_0x925013 => {
    if (_0x925013.colshape && mp.colshapes.exists(_0x925013.colshape)) {
      _0x925013.colshape.destroy();
    }
    if (_0x925013.object && mp.objects.exists(_0x925013.object)) {
      _0x925013.object.destroy();
    }
  });
  mapStatuesData = [];
}
function cleanMonkeyEventInterval() {
  if (monkeyExitInterval != null) {
    clearInterval(monkeyExitInterval);
    monkeyExitInterval = undefined;
  }
}
function clearMonkeyHunterInterval() {
  if (monkeyHunterInterval != null) {
    clearInterval(monkeyHunterInterval);
    monkeyHunterInterval = undefined;
  }
}
mp.events.add("Client_OpenAltarMinigame", () => {
  if (!!loggedin && !altarMinigameOpened && !chatActive) {
    altarMinigameOpened = true;
    SwitchHUDToDesign(true);
    main_browser.execute("APPS.state.summerEvent2025SearchMatchesMiniGame.show = true;");
  }
});
global.closeAltarMinigame = function (_0x5d8493 = false) {
  if (altarMinigameOpened) {
    if (!_0x5d8493) {
      mp.events.callRemote("Server_FinishedAltarMinigame");
    }
    altarMinigameOpened = false;
    main_browser.execute("APPS.state.summerEvent2025SearchMatchesMiniGame.show = false;");
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseAltarMinigame", () => {
  closeAltarMinigame();
});
global.bAtMapStatue = false;
mp.events.add("Client_CreateStatuesOnMap", _0x152eb8 => {
  destroyStatues();
  _0x152eb8.forEach(_0x319e9b => {
    if (_0x319e9b == -1) {
      return;
    }
    const _0x590159 = mp.objects.new(mp.game.joaat(MAP_STATUE_MODEL), new mp.Vector3(MAP_STATUES_POSITIONS[_0x319e9b].x, MAP_STATUES_POSITIONS[_0x319e9b].y, MAP_STATUES_POSITIONS[_0x319e9b].z - 0.5), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    const _0x1e0241 = mp.colshapes.newSphere(MAP_STATUES_POSITIONS[_0x319e9b].x, MAP_STATUES_POSITIONS[_0x319e9b].y, MAP_STATUES_POSITIONS[_0x319e9b].z, 2);
    _0x1e0241.mapStatueIndex = _0x319e9b + 1;
    mapStatuesData.push({
      id: _0x1e0241.mapStatueIndex,
      object: _0x590159,
      colshape: _0x1e0241
    });
  });
});
mp.events.add("Client_DeleteStatue2025", _0x1589a0 => {
  const _0x1ce427 = mapStatuesData.findIndex(_0x612f4f => _0x612f4f.id == _0x1589a0 + 1);
  if (_0x1ce427 != -1) {
    const _0x4599b5 = mapStatuesData[_0x1ce427];
    if (_0x4599b5.object && mp.objects.exists(_0x4599b5.object)) {
      _0x4599b5.object.destroy();
      _0x4599b5.object = undefined;
    }
    if (_0x4599b5.colshape && mp.colshapes.exists(_0x4599b5.colshape)) {
      _0x4599b5.colshape.destroy();
      _0x4599b5.colshape = undefined;
    }
    main_browser.execute("APPS.state.hud.interact = false;");
    bAtMapStatue = false;
  }
});
global.summerDesignOpened2025 = false;
mp.events.add("Client_OpenMainSummerDesign2025", (_0x26d97c, _0x4026a1, _0x107b77, _0x379350, _0x597eb1, _0x169d2d, _0x3c0a56, _0x2d2394, _0x59e5cb) => {
  if (summerDesignOpened2025 || !loggedin || chatActive) {
    return;
  }
  let _0x2e42af = 0;
  if (localplayer.model != 1885233650) {
    _0x2e42af = 1;
  }
  summerDesignOpened2025 = true;
  main_browser.execute("\n        APPS.state.summerEvent2025.dayonline = " + _0x26d97c + ";\n        APPS.state.summerEvent2025.serverTime = " + _0x4026a1 + ";\n        APPS.state.summerEvent2025.gender = " + _0x2e42af + ";\n        APPS.state.summerEvent2025.keyPart = " + _0x107b77 + ";\n        APPS.state.summerEvent2025.finishedLabyrinth = " + _0x379350 + ";\n        APPS.state.summerEvent2025.finishedWaterRace = " + _0x597eb1 + ";\n        APPS.state.summerEvent2025.donate = " + _0x169d2d + ";\n        APPS.state.summerEvent2025.dirtyStatues = " + _0x3c0a56 + ";\n        APPS.state.summerEvent2025.cleanStatues = " + _0x2d2394 + ";\n        APPS.state.summerEvent2025.show = true;\n    ");
  if (_0x59e5cb) {
    main_browser.execute("this.AppComponents.SummerEvent2025.showModal('ClearStatuette');");
  }
  SwitchHUDToDesign(true);
});
mp.events.add("Client_UpdateBalanceSummer2025", (_0x5bfaad, _0x10ccf7, _0x1b80eb) => {
  main_browser.execute("\n        APPS.state.summerEvent2025.donate = " + _0x5bfaad + ";\n        APPS.state.summerEvent2025.dirtyStatues = " + _0x1b80eb + ";\n        APPS.state.summerEvent2025.cleanStatues = " + _0x10ccf7 + ";\n    ");
});
global.closeSummerDesign2025 = function () {
  if (summerDesignOpened2025) {
    summerDesignOpened2025 = false;
    SwitchHUDToDesign(false);
    main_browser.execute("APPS.state.summerEvent2025.show = false;");
  }
};
mp.events.add("Client_CloseMainSummerDesign2025", () => {
  closeSummerDesign2025();
});
mp.events.add("Client_SetRouteToMainSummerLocation", () => {
  closeSummerDesign2025();
  SetGPSLocation(186.651, -966.316, 47.038, true);
});
mp.events.add("Client_HandleActionButtonSummer2025", _0x2c41ef => {
  if (summerDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HandleActionButtonSummer2025", _0x2c41ef);
    }
  }
});
mp.events.add("Client_RequestBuySummerStatues", _0x23c828 => {
  if (summerDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuySummerStatues", _0x23c828);
    }
  }
});
mp.events.add("Client_RequestBuySummerShop2025", _0x42e2ae => {
  if (summerDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuySummerShop2025", _0x42e2ae);
    }
  }
});
mp.events.add("Client_RequestTryShop2025", _0x2f9b17 => {
  if (summerDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestTryShop2025", _0x2f9b17);
    }
  }
});
mp.events.add("Client_CleanExitTimerMonkeySummer2025", () => {
  cleanMonkeyEventInterval();
});
mp.events.add("Client_StartExitTimerMonkeySummer2025", () => {
  cleanMonkeyEventInterval();
  let _0x1edd81 = 5;
  monkeyExitInterval = setInterval(() => {
    if (_0x1edd81 > 0) {
      mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x1edd81), false, 0, 6);
      _0x1edd81--;
    } else if (_0x1edd81 <= 0) {
      mp.events.callRemote("Server_EndExitFromMonkeyEvent");
      cleanMonkeyEventInterval();
    }
  }, 1000);
});
mp.blips.new(836, new mp.Vector3(186.651, -966.316, 47.038), {
  name: language["Обмен статуэток"][curr_lang],
  scale: 1,
  color: 25,
  drawDistance: 25,
  shortRange: true
});
mp.events.add("Client_RequestCleanStatueSummer2025", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestCleanStatueSummer2025");
    }
  }
});
mp.events.add("Client_UpdateStattueCleaningState", _0x14c4da => {
  main_browser.execute("APPS.state.summerEvent2025.successClean = " + _0x14c4da + ";");
});
mp.events.add("Client_StartMonkeyHunterTimer", () => {
  clearMonkeyHunterInterval();
  let _0x2314f7 = 300;
  monkeyHunterInterval = setInterval(function () {
    if (_0x2314f7 > 0) {
      _0x2314f7--;
    }
    if (_0x2314f7 == 10) {
      PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
    }
    let _0x233e33 = [0, 0];
    mp.players.forEachInRange(new mp.Vector3(-626.669, 5721.313, 27.986), 200, _0x48e996 => {
      if (_0x48e996.dimension == localplayer.dimension && _0x48e996.getAlpha() != 0) {
        if (_0x48e996.model == 1641334641) {
          _0x233e33[0]++;
        } else {
          _0x233e33[1]++;
        }
      }
    });
    ShowDrugLabsDesign(language.Обезьяны[curr_lang], _0x233e33[0], language.Охотники[curr_lang], _0x233e33[1], "", 0, "", 0, "", 0, _0x2314f7, 300, language.Событие[curr_lang]);
    if (_0x2314f7 <= 0) {
      clearMonkeyHunterInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearMonkeyHunterInterval", () => {
  clearMonkeyHunterInterval();
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});