let bunker_progress_interval = [];
let bunker_progresses = [];
let bunker_progress_accum = [];
global.BunkerMoneyOpened = false;
global.JuiceProductionOpened = false;
const max_progresses = [{
  max_progress: 18000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1012,
    count: 250
  },
  chance: 100
}, {
  max_progress: 18000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1003,
    count: 3
  },
  chance: 100
}, {
  max_progress: 18000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1010,
    count: 500
  },
  chance: 100
}, {
  max_progress: 18000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1262,
    count: 15
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2161,
    count: 10
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1692,
    count: 10
  },
  chance: 100
}, {
  max_progress: 54000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1571,
    count: 1
  },
  chance: 50
}, {
  max_progress: 54000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2222,
    count: 1
  },
  chance: 100
}, {
  max_progress: 54000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 1624,
    count: 1
  },
  chance: 100
}, {
  max_progress: 54000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2300,
    count: 1
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2363,
    count: 1
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2364,
    count: 1
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 2382,
    count: 1
  },
  chance: 100
}, {
  max_progress: 10800,
  rawItems: [{
    id: 2220,
    count: 1
  }, {
    id: 2854,
    count: 1
  }],
  resultItem: {
    id: 2220,
    count: 2
  },
  chance: 100
}, {
  max_progress: 36000,
  rawItems: [{
    id: 2220,
    count: 1
  }],
  resultItem: {
    id: 3940,
    count: 1
  },
  chance: 100
}];
function getBunkerProductionSpeedMult() {
  if (!player_vip || player_vip <= 0) {
    return 1;
  }
  const _0x500437 = player_viplevel | 0;
  if (_0x500437 >= 5) {
    return 1.2;
  } else if (_0x500437 >= 4) {
    return 1.1;
  } else {
    return 1;
  }
}
function getBunkerTimeLeftSeconds(_0x48b9ac) {
  const _0x525262 = getBunkerProductionSpeedMult();
  return Math.max(0, Math.ceil(_0x48b9ac / _0x525262));
}
function formatBunkerHMS(_0x44b2fd) {
  let _0x5ddb03 = _0x44b2fd;
  const _0x5211bc = Math.floor(_0x5ddb03 / 3600);
  _0x5ddb03 -= _0x5211bc * 3600;
  let _0x5e7715 = Math.floor(_0x5ddb03 / 60);
  let _0x5cbc33 = _0x5ddb03 - _0x5e7715 * 60;
  if (_0x5e7715 < 10) {
    _0x5e7715 = "0" + _0x5e7715;
  }
  if (_0x5cbc33 < 10) {
    _0x5cbc33 = "0" + _0x5cbc33;
  }
  return _0x5211bc + ":" + _0x5e7715 + ":" + _0x5cbc33;
}
mp.events.add("Client_StartBunkerProgresses", _0xc51ded => {
  for (let _0x5d754d = 0; _0x5d754d < _0xc51ded.length; _0x5d754d++) {
    if (_0xc51ded[_0x5d754d] > 0) {
      bunker_progresses[_0x5d754d] = _0xc51ded[_0x5d754d];
      if (_0xc51ded[_0x5d754d] < max_progresses[_0x5d754d].max_progress) {
        if (!bunker_progress_interval[_0x5d754d]) {
          bunker_progresses[_0x5d754d] = _0xc51ded[_0x5d754d];
          bunker_progress_accum[_0x5d754d] = 0;
          bunker_progress_interval[_0x5d754d] = setInterval(() => {
            bunker_progress_accum[_0x5d754d] += getBunkerProductionSpeedMult();
            const _0x28d675 = Math.floor(bunker_progress_accum[_0x5d754d]);
            if (_0x28d675 <= 0) {
              return;
            }
            bunker_progress_accum[_0x5d754d] -= _0x28d675;
            const _0x4765ef = bunker_progresses[_0x5d754d];
            bunker_progresses[_0x5d754d] += _0x28d675;
            if (Math.floor(_0x4765ef / 300) !== Math.floor(bunker_progresses[_0x5d754d] / 300) || bunker_progresses[_0x5d754d] >= max_progresses[_0x5d754d].max_progress) {
              mp.events.callRemote("Server_SaveBunkerProgress", _0x5d754d + 1, bunker_progresses[_0x5d754d]);
            }
          }, 1000);
        }
      }
    }
  }
});
mp.events.add("Client_CleanBunkerProgressId", _0x44d6c5 => {
  if (!bunker_progress_interval[_0x44d6c5]) {
    clearInterval(bunker_progress_interval[_0x44d6c5]);
    bunker_progress_interval[_0x44d6c5] = undefined;
  }
  delete bunker_progresses[_0x44d6c5];
  delete bunker_progress_accum[_0x44d6c5];
});
mp.events.add("Client_UpdateBunkerProgress", _0x55567b => {
  bunker_progresses[_0x55567b - 1] += 1800;
});
mp.events.add("Client_CancelBunkerInterval", _0x3f7dc2 => {
  if (bunker_progress_interval[_0x3f7dc2 - 1] != null) {
    clearInterval(bunker_progress_interval[_0x3f7dc2 - 1]);
    bunker_progress_interval[_0x3f7dc2 - 1] = undefined;
  }
  if (bunker_progresses[_0x3f7dc2 - 1] != null) {
    bunker_progresses[_0x3f7dc2 - 1] = undefined;
  }
  bunker_progress_accum[_0x3f7dc2 - 1] = undefined;
});
mp.events.add("Client_CancelAllBunkerProgresses", () => {
  for (let _0xb92b88 = 0; _0xb92b88 < bunker_progress_interval.length; _0xb92b88++) {
    if (bunker_progress_interval[_0xb92b88] != null) {
      clearInterval(bunker_progress_interval[_0xb92b88]);
      bunker_progress_interval[_0xb92b88] = undefined;
    }
    if (bunker_progresses[_0xb92b88] != null) {
      bunker_progresses[_0xb92b88] = undefined;
    }
    bunker_progress_accum[_0xb92b88] = undefined;
  }
});
const shooting_poses = [[[896.9789, -3165.362, -95.43014], [895.319, -3165.069, -95.43014], [893.7652, -3164.795, -95.43014], [898.6178, -3165.651, -95.43014], [900.3204, -3165.951, -95.43014], [900.8453, -3163.662, -95.43014], [899.1157, -3163.357, -95.43014], [897.5756, -3163.086, -95.43014], [895.8439, -3162.781, -95.43014], [894.2903, -3162.506, -95.43014], [902.444, -3153.77, -95.47369], [900.8063, -3153.482, -95.47369], [899.1743, -3153.194, -95.47369], [897.4426, -3152.889, -95.47369], [895.8889, -3152.615, -95.47369], [901.2216, -3160.913, -95.42642], [899.5143, -3160.612, -95.42642], [897.9519, -3160.337, -95.42642], [896.2202, -3160.031, -95.42642], [894.6665, -3159.757, -95.42642], [901.2216, -3160.913, -95.42642], [899.6981, -3160.644, -95.42642], [897.9519, -3160.337, -95.42642], [896.2202, -3160.031, -95.42642], [894.6665, -3159.757, -95.42642], [901.9014, -3157.736, -95.42642], [900.0809, -3157.415, -95.42642], [898.5144, -3157.139, -95.42642], [896.8999, -3156.854, -95.42642], [895.3463, -3156.58, -95.42642], [901.6646, -3148.859, -95.47369], [903.3023, -3149.148, -95.47369], [900.0327, -3148.571, -95.47369], [898.3009, -3148.266, -95.47369], [896.7473, -3147.992, -95.47369], [902.5901, -3143.456, -95.43627], [904.2278, -3143.744, -95.43627], [900.958, -3143.168, -95.43627], [899.2264, -3142.863, -95.43627], [897.6727, -3142.588, -95.43627], [903.7879, -3137.171, -95.43202], [905.4256, -3137.459, -95.43202], [902.156, -3136.883, -95.43202], [900.4242, -3136.578, -95.43202], [898.8705, -3136.303, -95.43202], [904.9809, -3129.962, -95.43511], [906.6187, -3130.251, -95.43511], [903.349, -3129.674, -95.43511], [901.6173, -3129.368, -95.43511], [900.0636, -3129.095, -95.43511]], [[-2339.249, 3237.857, 32.06627], [-2336.707, 3242.259, 32.06627], [-2338.326, 3237.319, 32.06627], [-2335.784, 3241.721, 32.06627], [-2337.487, 3236.888, 32.06627], [-2334.945, 3241.291, 32.06627], [-2336.564, 3236.351, 32.06627], [-2334.022, 3240.753, 32.06627], [-2335.714, 3235.892, 32.06627], [-2333.172, 3240.294, 32.06627], [-2334.791, 3235.354, 32.06627], [-2332.249, 3239.757, 32.06627], [-2333.952, 3234.924, 32.06627], [-2331.41, 3239.326, 32.06627], [-2333.029, 3234.386, 32.06627], [-2330.487, 3238.788, 32.06627], [-2332.191, 3233.88, 32.06627], [-2329.65, 3238.283, 32.06627], [-2331.269, 3233.343, 32.06627], [-2328.727, 3237.745, 32.06627]]];
let shooting_object;
let shooting_time_passed;
let shooting_shape;
let shooting_prepare_interval;
let shooting_state;
let shooting_points = 0;
function RandomShootingObject() {
  if (shooting_object) {
    shooting_object.destroy();
    shooting_object = undefined;
  }
  const _0x3f732d = getRandomInt(0, shooting_poses[shooting_state - 1].length);
  const _0xc1f008 = shooting_state == 1 ? parseFloat(0.9961947) : parseFloat(-27);
  const _0x48072e = shooting_state == 1 ? "prop_range_target_01" : "gr_prop_gr_target_05a";
  shooting_object = mp.objects.new(mp.game.joaat(_0x48072e), new mp.Vector3(parseFloat(shooting_poses[shooting_state - 1][_0x3f732d][0]), parseFloat(shooting_poses[shooting_state - 1][_0x3f732d][1]), parseFloat(shooting_poses[shooting_state - 1][_0x3f732d][2])), {
    rotation: new mp.Vector3(0, 0, _0xc1f008),
    alpha: 255,
    dimension: mp.players.local.dimension
  });
}
function CancelShootingPractice(_0x4e71a2 = false) {
  is_in_shooting = false;
  if (_0x4e71a2 == 1) {
    mp.events.callRemote("Server_CancelShootingPractice", shooting_state, new Date().getTime() - shooting_time_passed);
  }
  givenWeapon = -1569615261;
  main_browser.execute("APPS.state.hud.ammo = 0;");
  if (shooting_object) {
    shooting_object.destroy();
    shooting_object = undefined;
  }
  if (shooting_prepare_interval != null) {
    clearInterval(shooting_prepare_interval);
    shooting_prepare_interval = undefined;
    main_browser.execute("APPS.state.hud.event_coutdown = 0;");
  }
}
global.is_in_shooting = false;
mp.events.add("Client_BunkerStartShootingPractice", (_0x38b827 = 1) => {
  mp.game.ui.notifications.show(language["Стреляйте по мишеням"][curr_lang], false, 0, 25);
  shooting_points = 0;
  is_in_shooting = true;
  shooting_state = _0x38b827;
  shooting_shape = _0x38b827 == 2 ? mp.colshapes.newSphere(-2342.755, 3222.941, 33.076, 10, localplayer.dimension) : mp.colshapes.newSphere(895.442, -3172.419, -97.124, 10, localplayer.dimension);
  shooting_shape.is_bunker_shooting_shape = true;
  if (!shooting_prepare_interval) {
    let _0x30ada2 = 6;
    shooting_prepare_interval = setInterval(() => {
      if (_0x30ada2 > 0) {
        _0x30ada2--;
        main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x30ada2) + ";");
        if (_0x30ada2 == 0) {
          shooting_time_passed = new Date().getTime();
          RandomShootingObject();
          shooting_prepare_interval = undefined;
        }
      }
    }, 1000);
  }
});
mp.events.add("render", () => {
  if (is_in_shooting == 1) {
    if (shooting_object && mp.objects.exists(shooting_object) && shooting_object.hasBeenDamagedBy(mp.players.local.handle, true)) {
      shooting_points++;
      if (shooting_points == 20) {
        CancelShootingPractice(true);
      } else {
        RandomShootingObject();
      }
    }
    mp.game.graphics.drawText(TranslateText("Осталось: {0}", 20 - shooting_points), [0.5, 0.005], {
      font: 7,
      color: [255, 255, 255, 185],
      scale: [1.2, 1.2],
      outline: true
    });
  }
});
mp.events.add("Client_GetSolarBattery", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetSolarBattery");
  }
});
mp.events.add("Client_RepairSolarBattery", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RepairSolarBattery");
  }
});
mp.events.add("Client_DeleteSolarBattery", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteSolarBattery");
  }
});
global.ResourceGathererSetupConfirmOpened = false;
mp.events.add("Client_OpenResourceGathererSetupConfirm", _0x1a7c3f => {
  if (!ResourceGathererSetupConfirmOpened) {
    ResourceGathererSetupConfirmOpened = true;
    main_browser.execute("APPS.state.resourceGathererSetupConfirm.itemId = " + _0x1a7c3f + ";");
    main_browser.execute("APPS.state.resourceGathererSetupConfirm.show = true;");
    SwitchHUDToDesign(true);
  }
});
global.closeResourceGathererSetupConfirm = function () {
  ResourceGathererSetupConfirmOpened = false;
  main_browser.execute("APPS.state.resourceGathererSetupConfirm.show = false;");
  SwitchHUDToDesign(false);
};
mp.events.add("Client_CloseResourceGathererSetupConfirm", closeResourceGathererSetupConfirm);
mp.events.add("Client_ResourceGathererSetupConfirm", _0xed34fb => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    closeResourceGathererSetupConfirm();
    mp.events.callRemote("Server_ResourceGathererSetupConfirm", _0xed34fb);
  }
});
mp.events.add("Client_DeleteResourceGatherer", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteResourceGatherer");
  }
});
mp.events.add("Client_DeleteMushroomBed", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteMushroomBed");
  }
});
global.BunkerOpened = false;
mp.events.add("Client_OpenBunker", (_0x49c4d5, _0x142d6b, _0x7f218e = false, _0x30ac27 = 0) => {
  if (_0x7f218e) {
    main_browser.execute("APPS.state.bunker.bunkers = " + JSON.stringify(_0x142d6b));
    main_browser.execute("APPS.state.bunker.bunker = " + _0x49c4d5);
    main_browser.execute("this.AppComponents.bunker.$forceUpdate();");
    return;
  }
  {
    if (GlobalCheck() == 1) {
      return;
    }
    const _0x3f7188 = "{\"bunkers\":" + JSON.stringify(_0x142d6b) + ",\"bunker\":" + _0x49c4d5 + ",\"show\":true,\"hintToOwnerId\":" + _0x30ac27 + "}";
    main_browser.execute("APPS.state.bunker = " + _0x3f7188);
  }
  BunkerOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBunker = function () {
  if (BunkerOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunker.show = false;");
    BunkerOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseBunker");
  }
};
mp.events.add("Client_LoadedMoreBunkers", _0x5cdbc7 => {
  if (BunkerOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunker.bunkers = APPS.state.bunker.bunkers.concat(" + JSON.stringify(_0x5cdbc7) + ")");
  }
});
mp.events.add("Client_CloseBunker", () => {
  CloseBunker();
});
mp.events.add("Client_BuyBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyBunker");
  }
});
mp.events.add("Client_EnterBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EnterBunker");
  }
});
mp.events.add("Client_SellBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SellBunker");
  }
});
mp.events.add("Client_LockBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LockBunker");
  }
});
mp.events.add("Client_EnterOtheBunker", _0x3ffdd9 => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EnterOtheBunker", _0x3ffdd9);
  }
});
mp.events.add("Client_LoadMoreBunkers", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!BunkerOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadMoreBunkers");
  }
});
const futuristic_race_poses = [[-1230.325, -883.156, 12.483, 0.779, 0.085, -54.431], [-1134.098, -809.043, 15.904, 3.617, -0.431, -47.264], [-1033.105, -723.29, 19.814, 1.237, 0.039, -46.44], [-860.621, -661.703, 27.783, -0.624, 0.303, -102.569], [-680.993, -663.073, 31.31, 0.659, 0.613, -86.68], [-537.244, -664.776, 33.398, -0.696, 0.493, -90.044], [-347.754, -665.449, 32.255, 0.789, 1.359, -92.291], [-131.127, -708.53, 41.137, 5.396, -1.238, -102.578], [-5.919, -761.719, 44.113, -0.943, 0.198, -102.355], [51.03, -750.467, 44.115, -1.334, 1.549, -27.595], [75.26, -679.974, 44.382, -0.548, 0.597, -16.061], [102.493, -603.382, 44.3, -0.592, 0.003, -20.67], [123.206, -532.534, 43.301, -0.697, -0.788, -14.772], [147.584, -456.997, 42.014, -4.532, -0.368, -18.982], [169.286, -393.74, 42.005, 2.695, -0.205, -18.923], [199.897, -316.069, 44.152, 0.741, 0.327, -18.799], [226.209, -239.392, 54.068, -0.655, 1.333, -18.259], [179.909, -196.463, 54.117, 0.825, -1.944, 61.102], [127.947, -178.073, 54.681, -0.228, -0.279, 73.273], [49.092, -146.505, 55.244, 0.809, 0.368, 67.16], [-28.462, -117.52, 57.24, 0.573, 0.245, 69.942], [-117.49, -84.928, 56.798, -3.717, 0.665, 69.869], [-216.781, -52.42, 50.286, -3.247, 1.04, 72.754], [-333.501, -12.163, 48.076, -1.885, -0.262, 69.978], [-480.701, 11.889, 45.379, -1.268, -0.15, 88.227], [-552.761, 8.159, 44.33, -0.774, -0.427, 95.752], [-642.781, -2.903, 40.769, -3.617, 2.498, 94.783], [-780.504, -60.823, 37.985, -0.939, -0.142, 118.783], [-882.516, -112.877, 38.176, -0.592, -0.6, 120.401], [-1011.117, -179.768, 37.916, -0.553, -0.048, 118.481], [-991.821, -225.402, 37.894, -0.608, 0.439, -114.969], [-934.86, -254.715, 39.655, 2.865, 1.667, -116.032], [-877.807, -284.394, 40.545, -1.222, -0.558, -121.882], [-809.708, -320.314, 37.267, -0.848, -0.965, -115.878], [-718.148, -354.976, 34.965, -2.587, 1.578, -109.306], [-581.204, -378.487, 34.725, -0.009, 0.308, -74.4], [-500.91, -379.761, 34.958, -2.32, 0.742, -91.012], [-410.985, -392.695, 32.296, -2.365, 1.127, -99.548], [-330.595, -400.159, 30.204, -0.836, 0.29, -94.912], [-255.512, -406.713, 30.231, -0.104, 0.212, -94.967], [-165.098, -385.659, 33.565, 0.978, -3.2, -58.085], [-125.839, -304.072, 40.082, 4.582, 0.314, -18.548], [-33.309, -265.611, 46.328, 0.676, 2.033, -122.8], [49.705, -293.677, 47.845, -0.569, 0.135, -111.29], [154.324, -334.274, 44.536, -2.172, 0.902, -111.202], [270.137, -372.796, 45.136, 0.806, 1.986, -106.913], [372.751, -397.861, 46.192, 1.811, -0.693, -101.478], [475.306, -343.769, 45.838, -4.826, 2.829, -64.324], [573.613, -367.654, 43.574, -0.527, 1.53, -112.287], [667.249, -410.87, 41.782, -0.224, 0.494, -117.468], [734.148, -468.304, 37.328, -3.731, 2.29, -132.566], [770.379, -577.868, 31.076, -4.577, -0.902, -178.051], [772.757, -676.18, 28.993, -0.519, -0.158, -179.686], [773.303, -772.371, 26.634, -1.249, 0.035, -179.683], [773.799, -863.507, 25.582, -1.821, -0.067, -179.682], [777.981, -977.1, 26.612, -0.015, 0.451, -177.091], [788.031, -1081.501, 29.073, 1.86, -0.313, -172.53], [795.702, -1263.451, 26.474, -0.439, 0.251, -175.724], [795.366, -1342.879, 26.405, -0.398, -0.013, -177.021], [803.393, -1439.814, 27.195, -0.505, 0.367, -166.748], [824.774, -1520.84, 29.014, 1.045, -0.698, -164.824], [831.856, -1629.083, 31.097, -4.681, 2.283, 177.117], [823.571, -1711.258, 29.445, -0.57, 0.061, 173.623], [906.926, -1759.693, 30.722, 0.763, 0.159, -105.309], [989.729, -1767.347, 31.63, 1.288, -0.294, -88.965], [1072.531, -1753.434, 35.788, -0.549, -0.273, -73.921], [1146.255, -1725.35, 35.859, -0.429, 0.192, -68.138], [1252.074, -1671.579, 44.515, 8.044, 1.022, -59.097], [1328.593, -1616.887, 52.382, 1.091, -0.046, -48.568], [1306.254, -1562.45, 50.454, -6.272, 0.337, 26.363], [1276.891, -1482.957, 37.622, -7.899, -0.144, 19.558], [1249.94, -1407.078, 35.362, -0.195, 0.042, 19.565], [1248.932, -1294.323, 35.278, -1.08, -1.278, 0.563], [1247.147, -1235.684, 35.74, -0.341, -1.055, 10.052], [1226.796, -1145.833, 37.738, -0.225, -1.932, 20.999], [1183.501, -1057.882, 42.196, 1.64, 1.029, 27.594], [1169.455, -969.616, 46.851, 2.11, -2.34, 3.289], [1169.41, -880.492, 53.734, 2.63, 2.818, 0.545], [1197.18, -778.862, 57.206, 0.933, 0.214, -7.839], [1184.2, -641.926, 62.54, 0.947, -0.149, 12.192], [1179.078, -570.633, 64.485, -0.588, 1.758, 3.958], [1196.39, -454.358, 66.786, 0.384, 0.366, -8.254], [1189.816, -279.032, 69.066, -1.461, 0.048, 17.338], [1101.262, -229.177, 69.277, -0.862, 2.146, 64.996], [1015.628, -185.802, 70.447, 1.209, 3.29, 56.949], [906.933, -118.349, 77.304, 1.808, 2.2, 57.778], [806.87, -47.425, 80.523, -0.908, 0.39, 39.104], [859.498, 20.952, 79.079, -3.101, 2.038, -39.184], [895.173, 17.425, 78.811, -1.588, 0.077, -53.215], [918.311, 51.133, 80.769, -1.668, 0.164, -18.771]];
let death_race_checkpoint;
let death_race_blips;
let death_race_shape;
let death_race_check = 1;
const death_race_dimension = 5025;
function CreateDeathRaceCheck() {
  if (death_race_blips) {
    death_race_blips.destroy();
    death_race_blips = null;
  }
  if (death_race_shape) {
    death_race_shape.destroy();
    death_race_shape = null;
  }
  if (death_race_checkpoint) {
    death_race_checkpoint.destroy();
    death_race_checkpoint = null;
  }
  death_race_checkpoint = death_race_check + 1 == futuristic_race_poses.length ? mp.checkpoints.new(4, new mp.Vector3(futuristic_race_poses[death_race_check - 1][0], futuristic_race_poses[death_race_check - 1][1], futuristic_race_poses[death_race_check - 1][2] - 1), 5, {
    direction: new mp.Vector3(0, 0, 0),
    color: [255, 0, 0, 255],
    visible: true,
    dimension: 5025
  }) : mp.checkpoints.new(2, new mp.Vector3(futuristic_race_poses[death_race_check - 1][0], futuristic_race_poses[death_race_check - 1][1], futuristic_race_poses[death_race_check - 1][2] - 1), 5, {
    direction: new mp.Vector3(futuristic_race_poses[death_race_check][0], futuristic_race_poses[death_race_check][1], futuristic_race_poses[death_race_check][2]),
    color: [255, 0, 0, 255],
    visible: true,
    dimension: 5025
  });
  death_race_shape = mp.colshapes.newCircle(futuristic_race_poses[death_race_check - 1][0], futuristic_race_poses[death_race_check - 1][1], 5, 5025);
  death_race_shape.is_death_race = true;
  death_race_blips = mp.blips.new(1, new mp.Vector3(futuristic_race_poses[death_race_check - 1][0], futuristic_race_poses[death_race_check - 1][1], futuristic_race_poses[death_race_check - 1][2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 5025
  });
  death_race_blips.setRoute(true);
}
let race_prepare_interval;
let bunker_dm_marker;
let bunker_dm_shape;
let bunker_dm_blips;
global.at_bunker_money = false;
global.at_juice_production = false;
mp.events.add("playerEnterColshape", _0x15c25f => {
  if (mp.colshapes.exists(_0x15c25f) && at_death_race && _0x15c25f.is_death_race == 1) {
    death_race_check++;
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    if (death_race_check + 1 >= futuristic_race_poses.length) {
      mp.events.callRemote("Server_EndFuturisticRace");
    } else {
      CreateDeathRaceCheck();
    }
  }
  if (mp.colshapes.exists(_0x15c25f) && _0x15c25f.isBunkerMoney == 1) {
    at_bunker_money = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
  if (mp.colshapes.exists(_0x15c25f) && _0x15c25f.isJuiceProduction == 1) {
    at_juice_production = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
});
global.death_race_preenter = false;
global.bunker_pres_start_interval = undefined;
mp.events.add("Client_PreStartDeathRace", () => {
  death_race_preenter = true;
  if (localplayer.vehicle) {
    localplayer.vehicle.freezePosition(true);
    vehicle_engine = true;
    main_browser.execute("APPS.state.hud.engine = true;");
    TurnOnEngine(localplayer.vehicle);
    localplayer.vehicle.setUndriveable(false);
  }
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(-1301.35, -964.966, 36.923), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(-1271.99, -905.798, 10.201);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
  mp.gui.cursor.show(false, false);
});
mp.events.add("Client_BunkerTimerToStart", _0x501988 => {
  let _0x4fdd34 = _0x501988 + 6;
  mp.gui.cursor.show(false, false);
  bunker_pres_start_interval = setInterval(() => {
    if (_0x4fdd34 > 0) {
      _0x4fdd34--;
      main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x4fdd34) + ";");
      if (_0x4fdd34 == 0) {
        if (bunker_pres_start_interval != null) {
          clearInterval(bunker_pres_start_interval);
          bunker_pres_start_interval = undefined;
        }
        main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      }
    }
  }, 1000);
});
mp.events.add("Client_CancelDeathRaceVariables", () => {
  death_race_preenter = false;
  at_death_race = false;
  if (death_race_blips) {
    death_race_blips.destroy();
    death_race_blips = null;
  }
  if (death_race_shape) {
    death_race_shape.destroy();
    death_race_shape = null;
  }
  if (death_race_checkpoint) {
    death_race_checkpoint.destroy();
    death_race_checkpoint = null;
  }
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (bunker_pres_start_interval != null) {
    clearInterval(bunker_pres_start_interval);
    bunker_pres_start_interval = undefined;
  }
  localplayer.setCanBeKnockedOffVehicle(0);
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
});
global.at_death_race = false;
mp.events.add("Client_PreparetoDeathRace", () => {
  if (!race_prepare_interval) {
    if (bunker_pres_start_interval != null) {
      clearInterval(bunker_pres_start_interval);
      bunker_pres_start_interval = undefined;
    }
    main_browser.execute("APPS.state.hud.event_coutdown = 0;");
    at_death_race = true;
    let _0xfa5c0b = 6;
    mp.gui.cursor.show(false, false);
    race_prepare_interval = setInterval(() => {
      if (_0xfa5c0b > 0) {
        _0xfa5c0b--;
        main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0xfa5c0b) + ";");
        if (_0xfa5c0b == 0) {
          death_race_check = 1;
          CreateDeathRaceCheck();
          if (race_prepare_interval != null) {
            clearInterval(race_prepare_interval);
          }
          race_prepare_interval = undefined;
          main_browser.execute("APPS.state.hud.event_show = false;");
          main_browser.execute("APPS.state.hud.prepare_escort = false;");
          main_browser.execute("APPS.state.hud.event_coutdown = 0;");
          mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
          PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
          mp.gui.cursor.show(false, false);
          mp.game.cam.renderScriptCams(false, true, 0, true, false);
          if (localcamera != null) {
            localcamera.destroy();
            localcamera = null;
          }
          if (localplayer.vehicle) {
            localplayer.setCanBeKnockedOffVehicle(1);
            localplayer.vehicle.freezePosition(false);
            vehicle_engine = true;
            main_browser.execute("APPS.state.hud.engine = true;");
            TurnOnEngine(localplayer.vehicle);
            localplayer.vehicle.setUndriveable(false);
          }
        }
      }
    }, 1000);
  }
});
global.at_bunker_dm = false;
const death_match_dimension = 5030;
function ExitBunkerDM() {
  localplayer.freezePosition(false);
  duel_cant_do_damage = false;
  at_bunker_dm = false;
  if (bunker_dm_marker) {
    bunker_dm_marker.destroy();
    bunker_dm_marker = null;
  }
  if (bunker_dm_shape) {
    bunker_dm_shape.destroy();
    bunker_dm_shape = null;
  }
  if (bunker_dm_blips) {
    bunker_dm_blips.destroy();
    bunker_dm_blips = undefined;
  }
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (arena_interval != null) {
    clearInterval(arena_interval);
    arena_interval = null;
  }
  if (bunker_pres_start_interval != null) {
    clearInterval(bunker_pres_start_interval);
    bunker_pres_start_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
  main_browser.execute("APPS.state.hud.arena_show = false;");
}
let deathmatch_prepare_interval;
mp.events.add("Client_PreStartBunkerDeathMatch", () => {
  localplayer.freezePosition(true);
  duel_cant_do_damage = true;
  at_bunker_dm = true;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  bunker_dm_marker = mp.markers.new(1, new mp.Vector3(1056, 2313.093, -24.499000000000002), 480, {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 5030
  });
  bunker_dm_shape = mp.colshapes.newCircle(1056, 2313.093, 240, 5030);
  bunker_dm_shape.is_duel_bunker = true;
  bunker_dm_blips = mp.blips.new(zone_blips, new mp.Vector3(1056, 2313.093, 0), {
    radius: parseFloat(240),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
  localcamera = mp.cameras.new("default", new mp.Vector3(965.287, 2204.327, 82.646), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(1045.571, 2269.295, 46.806);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
});
mp.events.add("Client_CancelDeathMatchVariables", () => {
  ExitBunkerDM();
});
mp.events.add("playerExitColshape", _0xda6326 => {
  if (mp.colshapes.exists(_0xda6326) && _0xda6326.is_duel_bunker == 1) {
    mp.events.callRemote("Server_ExitFromBunkerDM");
  } else if (_0xda6326.is_bunker_shooting_shape == 1) {
    CancelShootingPractice(false);
  } else if (_0xda6326.isBunkerMoney == 1) {
    at_bunker_money = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0xda6326.isJuiceProduction == 1) {
    at_juice_production = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
mp.events.add("Client_PreparetoDeathMatch", () => {
  if (!deathmatch_prepare_interval) {
    if (bunker_pres_start_interval != null) {
      clearInterval(bunker_pres_start_interval);
      bunker_pres_start_interval = undefined;
    }
    main_browser.execute("APPS.state.hud.event_coutdown = 0;");
    let _0x38073f = 6;
    mp.gui.cursor.show(false, false);
    deathmatch_prepare_interval = setInterval(() => {
      if (_0x38073f > 0) {
        _0x38073f--;
        main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x38073f) + ";");
        if (_0x38073f == 0) {
          mp.gui.cursor.show(false, false);
          duel_cant_do_damage = false;
          localplayer.freezePosition(false);
          if (deathmatch_prepare_interval != null) {
            clearInterval(deathmatch_prepare_interval);
          }
          deathmatch_prepare_interval = undefined;
          main_browser.execute("APPS.state.hud.event_show = false;");
          main_browser.execute("APPS.state.hud.prepare_escort = false;");
          main_browser.execute("APPS.state.hud.event_coutdown = 0;");
          mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
          PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
          mp.game.cam.renderScriptCams(false, true, 0, true, false);
          if (localcamera != null) {
            localcamera.destroy();
            localcamera = null;
          }
        }
      }
    }, 1000);
  }
});
global.BunkerInfoOpened = false;
mp.events.add("Client_LoadPropertyDesignPage4", (_0x5176a9, _0x221294, _0x5e0926, _0x2922dc, _0xd530b1, _0x385926, _0x11a8e1, _0x3b2723, _0x5396de = false) => {
  let _0xd1ac34 = [];
  let _0x5782d0 = 0;
  let _0x216fa0 = [];
  let _0x2991e4 = 0;
  for (let _0x2acfa6 = 0; _0x2acfa6 < bunker_progresses.length; _0x2acfa6++) {
    _0x5782d0 = 0;
    _0x2991e4 = 0;
    let _0x16d031 = 0;
    if (bunker_progresses[_0x2acfa6] != null) {
      _0x16d031 = getBunkerTimeLeftSeconds(max_progresses[_0x2acfa6].max_progress - bunker_progresses[_0x2acfa6]);
      _0x5782d0 = 100 - Math.floor((max_progresses[_0x2acfa6].max_progress - bunker_progresses[_0x2acfa6]) / max_progresses[_0x2acfa6].max_progress * 100);
    }
    _0xd1ac34.push(_0x16d031);
    _0x216fa0.push(_0x5782d0);
  }
  if (_0x5396de) {
    playerPropertyDesignOpened = true;
    SwitchHUDToDesign(true);
    main_browser.execute("APPS.state.property.show = true");
    main_browser.execute("this.AppComponents.propertydesign.loadPage(3);");
  }
  main_browser.execute("APPS.state.property.serverTime = " + _0x5176a9);
  main_browser.execute("APPS.state.property.bunkerNpc = " + JSON.stringify(_0x221294));
  main_browser.execute("APPS.state.property.bunkerDays = " + _0x5e0926);
  main_browser.execute("APPS.state.property.bunkerProgress = " + JSON.stringify(_0x2922dc));
  main_browser.execute("APPS.state.property.time_left_arrays = " + JSON.stringify(_0xd1ac34));
  main_browser.execute("APPS.state.property.percentsArray = " + JSON.stringify(_0x216fa0));
  main_browser.execute("APPS.state.property.bunkerExp = " + _0xd530b1);
  main_browser.execute("APPS.state.property.accessToNPC = " + _0x385926);
  main_browser.execute("APPS.state.property.guardDays = " + _0x11a8e1);
  main_browser.execute("APPS.state.property.bunkerType = " + _0x3b2723);
  main_browser.execute("APPS.state.property.hasBunker = 1");
  main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
});
mp.events.add("Client_LoadPropertyDesignPage4WithoutBunker", () => {
  if (!playerPropertyDesignOpened) {
    playerPropertyDesignOpened = true;
    SwitchHUDToDesign(true);
    main_browser.execute("APPS.state.property.hasBunker = 0");
    main_browser.execute("APPS.state.property.show = true");
    main_browser.execute("this.AppComponents.propertydesign.loadPage(3, true);");
  }
});
mp.events.add("Client_LoadBunkerPage", (_0x5d81d8, _0x39f21e, _0x264ebf, _0x35809f, _0x3df216, _0x1f174f, _0x1c16cf) => {
  CloseMobile();
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x22c1cf = [];
  let _0xf5dc97 = [];
  let _0x15867a = "00:00:00";
  let _0x22a495 = 0;
  let _0x33e8b7 = 0;
  for (let _0x8d4052 = 0; _0x8d4052 < bunker_progresses.length; _0x8d4052++) {
    _0x15867a = "00:00:00";
    _0x22a495 = 0;
    _0x33e8b7 = 0;
    if (bunker_progresses[_0x8d4052] != null) {
      const _0x20d3eb = max_progresses[_0x8d4052].max_progress - bunker_progresses[_0x8d4052];
      _0x22a495 = 100 - Math.floor(_0x20d3eb / max_progresses[_0x8d4052].max_progress * 100);
      _0x15867a = _0x22a495 + "% (" + formatBunkerHMS(getBunkerTimeLeftSeconds(_0x20d3eb)) + ")";
      _0x33e8b7 = 1;
    } else if (_0x35809f[_0x8d4052]) {
      _0x33e8b7 = 1;
      _0x22a495 = 100;
      _0x15867a = "100%";
    }
    _0x22c1cf.push(_0x15867a);
    _0xf5dc97.push(_0x33e8b7);
  }
  const _0x3863ed = "{\"hour\":" + _0x5d81d8 + ",\"bought_npcs\":[" + _0x39f21e + "],\"time_left_arrays\":" + JSON.stringify(_0x22c1cf) + ",\"is_active_arrays\":[" + _0xf5dc97 + "],\"GuardDays\":" + _0x1c16cf + ",\"bunker_days\":" + _0x264ebf + ",\"PlayerBunkerExp\":" + _0x3df216 + ",\"bought_access\":" + _0x1f174f + ",\"show\":true}";
  main_browser.execute("APPS.state.bunker_info = " + _0x3863ed);
  BunkerInfoOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBunkerInfo = function () {
  if (BunkerInfoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunker_info.show = false;");
    BunkerInfoOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_PayForBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PayForBunker");
  }
});
mp.events.add("Client_GetToBunkerEvent", _0x2cd58f => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetToBunkerEvent", _0x2cd58f);
  }
});
mp.events.add("Client_UpdateBunkerInfoDays", _0x170279 => {
  if (BunkerInfoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunker_info.bunker_days = " + _0x170279 + ";");
  }
});
mp.events.add("Client_ReloadBoughtNpcs", _0x390d5b => {
  if ((BunkerInfoOpened || playerPropertyDesignOpened) && loggedin && !chatActive) {
    if (BunkerInfoOpened) {
      main_browser.execute("APPS.state.bunker_info.bought_npcs = [" + _0x390d5b + "];");
    }
    if (playerPropertyDesignOpened) {
      main_browser.execute("APPS.state.property.bunkerNpc = [" + _0x390d5b + "];");
    }
  }
});
mp.events.add("Client_BuyBunkerNpc", _0x395cce => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyBunkerNpc", _0x395cce);
  }
});
mp.events.add("Client_BuyAccessToNPC", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyAccessToNPC");
  }
});
mp.events.add("Client_ChooseMoneyProduction", _0x25fa99 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChooseMoneyProduction", _0x25fa99);
  }
});
mp.events.add("Client_TakeProfitMoneyMachine", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TakeProfitMoneyMachine");
  }
});
mp.events.add("Client_CloseBunkerInfo", () => {
  CloseBunkerInfo();
});
global.BunkerNPCOpened = false;
let last_bunker_npc = 0;
mp.events.add("Client_OpenBunkerNPC", (_0x37a7ea, _0x31b1ab, _0x1a82f6, _0x39fbab, _0x27deba) => {
  if (GlobalCheck() == 1) {
    return;
  }
  last_bunker_npc = _0x37a7ea;
  let _0x53ab6c = "00:00:00";
  let _0x5ea304 = 0;
  let _0x3271e3 = 0;
  const _0x48b605 = _0x37a7ea - 1;
  if (bunker_progresses[_0x48b605] != null) {
    const _0x1b334e = max_progresses[_0x48b605].max_progress - bunker_progresses[_0x48b605];
    _0x5ea304 = 100 - Math.floor(_0x1b334e / max_progresses[_0x48b605].max_progress * 100);
    _0x53ab6c = formatBunkerHMS(getBunkerTimeLeftSeconds(_0x1b334e));
    _0x3271e3 = 1;
  } else if (_0x39fbab) {
    _0x3271e3 = 1;
    _0x5ea304 = 100;
  }
  const {
    rawItems: _0xd16e38,
    resultItem: _0xeedc95,
    chance: _0x473c60
  } = max_progresses[_0x48b605];
  const _0x4bc622 = {
    percents: _0x5ea304,
    timeLeft: _0x53ab6c,
    rawItems: _0xd16e38,
    resultItem: _0xeedc95,
    playerHave: _0x27deba,
    isActive: _0x3271e3,
    npcId: _0x37a7ea,
    boughtAccessNPCs: _0x31b1ab,
    boughtNPC: _0x1a82f6,
    craftChance: _0x473c60,
    show: true
  };
  main_browser.execute("APPS.state.bunkerNPC = " + JSON.stringify(_0x4bc622));
  BunkerNPCOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_BunkerNPCUpdateAccess", (_0x22c0f4 = true) => {
  main_browser.execute("APPS.state.bunkerNPC.boughtAccessNPCs = " + _0x22c0f4 + ";");
  main_browser.execute("APPS.state.property.accessToNPC = " + _0x22c0f4 + ";");
});
global.CloseBunkerNPC = function () {
  if (BunkerNPCOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunkerNPC.show = false;");
    BunkerNPCOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    last_bunker_npc = 0;
  }
};
mp.events.add("Client_GetProductsFromNPCBunker", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!last_bunker_npc) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetProductsFromNPCBunker", last_bunker_npc);
  }
});
mp.events.add("Client_PutBunkerNPCGenerators", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!last_bunker_npc) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PutBunkerNPCGenerators", last_bunker_npc);
  }
});
mp.events.add("Client_ReloadBoughtNpcs", _0x2f52ed => {
  if (BunkerNPCOpened && last_bunker_npc && _0x2f52ed[last_bunker_npc - 1]) {
    main_browser.execute("APPS.state.bunkerNPC.boughtNPC = true");
  }
});
mp.events.add("Client_CloseBunkerNPC", CloseBunkerNPC);
let bunkerRaid_interval;
let bunkerRaid_blip;
let bunkerRaid_zoneBlip;
let bunkerRaid_marker;
let bunkerMoneyColshape = mp.colshapes.newSphere(934.755, -3215.313, -98.001, 3, -1);
function createBunkerRaidMarkers(_0x5bd59b, _0x3ca80b, _0xab6f14) {
  if (bunkerRaid_blip) {
    bunkerRaid_blip.destroy();
    bunkerRaid_blip = undefined;
  }
  if (bunkerRaid_zoneBlip) {
    bunkerRaid_zoneBlip.destroy();
    bunkerRaid_zoneBlip = undefined;
  }
  if (bunkerRaid_marker) {
    bunkerRaid_marker.destroy();
    bunkerRaid_marker = undefined;
  }
  bunkerRaid_blip = mp.blips.new(1, _0x5bd59b, {
    name: language.Рейд[curr_lang],
    scale: 0.8,
    color: 46,
    alpha: 255,
    shortRange: false,
    dimension: _0xab6f14
  });
  bunkerRaid_zoneBlip = mp.blips.new(zone_blips, new mp.Vector3(_0x5bd59b.x, _0x5bd59b.y, _0x5bd59b.z), {
    radius: 15,
    alpha: 100,
    color: zone_color,
    dimension: _0xab6f14
  });
  _0x5bd59b = new mp.Vector3(_0x5bd59b.x, _0x5bd59b.y, _0x5bd59b.z - 1.5);
  bunkerRaid_marker = mp.markers.new(1, _0x5bd59b, 30, {
    color: [255, 255, 0, 75],
    dimension: _0xab6f14
  });
}
bunkerMoneyColshape.isBunkerMoney = true;
mp.events.add("Client_OpenBunkerMoneyMachine", (_0x25bee8, _0x25271b, _0x1fb80c) => {
  if (GlobalCheck() == 1 && BunkerMoneyOpened == 0) {
    return;
  }
  const _0x10f292 = "{\"timeleft\":" + _0x25bee8 + ",\"timeneed\":" + _0x25271b + ",\"state\":" + _0x1fb80c + ",\"show\":true}";
  main_browser.execute("APPS.state.bunker_money = " + _0x10f292 + ";");
  BunkerMoneyOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBunkerMoney = function () {
  if (BunkerMoneyOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bunker_money.show = false;");
    BunkerMoneyOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseBunkerMoney", () => {
  CloseBunkerMoney();
});
mp.events.add("Client_TakeProfitMoneyMachine", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!last_bunker_npc) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TakeProfitMoneyMachine");
  }
});
mp.events.add("Client_BunkerRaidCreateMarkers", (_0x3b7439, _0x102729, _0xab7f02) => {
  createBunkerRaidMarkers(_0x3b7439, _0x102729, _0xab7f02);
  mp.events.call("Client_SetRouteToCoords", [_0x3b7439.x, _0x3b7439.y, _0x3b7439.z, true, _0xab7f02]);
  HintShow(language["Отправляйтесь к печатному станку и удерживайте его 10 минут"][curr_lang]);
});
mp.events.add("Client_BunkerRaidIntervalCounter", (_0x387050, _0x5c027f, _0x4d34ce, _0x47847c, _0x670f6f, _0x16b013, _0x2d65ec, _0x4b7b21 = false) => {
  if (_0x4b7b21) {
    createBunkerRaidMarkers(_0x670f6f, _0x16b013, _0x2d65ec);
  }
  if (bunkerRaid_interval != null) {
    clearInterval(bunkerRaid_interval);
    bunkerRaid_interval = undefined;
  }
  bunkerRaid_interval = setInterval(function () {
    if (_0x4d34ce > 0) {
      _0x4d34ce--;
    }
    if (_0x4d34ce == 10) {
      PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
    }
    let _0x936141 = [0, 0];
    mp.players.forEachInRange(_0x670f6f, _0x16b013, _0xab0484 => {
      if (_0xab0484.name == _0x5c027f && _0xab0484.dimension == localplayer.dimension) {
        if (_0xab0484.getAlpha() != 0) {
          _0x936141[0]++;
        }
      } else if (_0xab0484.name == _0x387050 && _0xab0484.dimension == localplayer.dimension && _0xab0484.getAlpha() != 0) {
        _0x936141[1]++;
      }
    });
    ShowDrugLabsDesign(_0x5c027f, _0x936141[0], _0x387050, _0x936141[1], "", 0, "", 0, "", 0, _0x4d34ce, _0x47847c, language.Рейд[curr_lang]);
    if (_0x4d34ce <= 0 && (_0x936141[0] == 0 || _0x936141[1] == 0)) {
      if (bunkerRaid_interval != null) {
        clearInterval(bunkerRaid_interval);
        bunkerRaid_interval = undefined;
      }
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearBunkerRaidIntervalCounter", (_0x3a4ce4 = true) => {
  if (bunkerRaid_interval != null) {
    clearInterval(bunkerRaid_interval);
    bunkerRaid_interval = undefined;
  }
  if (_0x3a4ce4) {
    if (bunkerRaid_blip) {
      bunkerRaid_blip.destroy();
      bunkerRaid_blip = undefined;
    }
    if (bunkerRaid_zoneBlip) {
      bunkerRaid_zoneBlip.destroy();
      bunkerRaid_zoneBlip = undefined;
    }
    if (bunkerRaid_marker) {
      bunkerRaid_marker.destroy();
      bunkerRaid_marker = undefined;
    }
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
let juiceProduction_Colshape = mp.colshapes.newSphere(847.129, -3244.611, -98.699, 5, -1);
juiceProduction_Colshape.isJuiceProduction = true;
mp.events.add("Client_OpenJuiceProduction", (_0x437d27, _0x2cfea2, _0x3280e1) => {
  if (GlobalCheck() == 1 && JuiceProductionOpened == 0) {
    return;
  }
  const _0x2871ed = "{\"timeleft\":" + _0x437d27 + ",\"state\":" + _0x3280e1 + ",\"Mushrooms\":" + _0x2cfea2 + ",\"show\":true}";
  main_browser.execute("APPS.state.juice_craft = " + _0x2871ed + ";");
  JuiceProductionOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseJuiceProduction = function () {
  if (JuiceProductionOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.juice_craft.show = false;");
    JuiceProductionOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseJuiceProduction", () => {
  CloseJuiceProduction();
});
mp.events.add("Client_CraftJuice", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CraftJuice");
  }
});
mp.events.add("Client_CollectJuice", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CollectJuiceProduction");
  }
});
mp.events.add("Client_MoneyMachineStartRaid", _0x4b63fb => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_MoneyMachineStartRaid", _0x4b63fb);
  }
});
const bunkerBlipsData = [{
  title: language["Денежная машина"][curr_lang],
  position: new mp.Vector3(934.755, -3215.313, -98.001)
}, {
  title: language["Производство сока"][curr_lang],
  position: new mp.Vector3(847.129, -3244.611, -98.699)
}, {
  title: "John Golden",
  position: new mp.Vector3(897.944, -3173.469, -97.124)
}, {
  npcId: 1,
  title: "Mark Hunt",
  position: new mp.Vector3(885.525, -3199.466, -98.196)
}, {
  npcId: 2,
  title: "Cori Scott",
  position: new mp.Vector3(891.753, -3196.942, -98.196)
}, {
  npcId: 3,
  title: "Bertram Dorsey",
  position: new mp.Vector3(884.427, -3207.937, -98.196)
}, {
  npcId: 4,
  title: "Nicholas Nash",
  position: new mp.Vector3(907.918, -3211.2, -98.222)
}, {
  npcId: 5,
  title: "Kelley Dennis",
  position: new mp.Vector3(889.436, -3206.573, -98.19)
}, {
  npcId: 6,
  title: "Sophie Douglas",
  position: new mp.Vector3(896.569, -3217.448, -98.226)
}, {
  npcId: 7,
  title: "Neal Rogers",
  position: new mp.Vector3(897.937, -3221.314, -98.246)
}, {
  npcId: 8,
  title: "Stuart Jordan",
  position: new mp.Vector3(899.367, -3223.841, -98.264)
}, {
  npcId: 9,
  title: "Piers McBride",
  position: new mp.Vector3(891.84, -3211.571, -98.2)
}, {
  npcId: 10,
  title: "Peter Floyd",
  position: new mp.Vector3(909.942, -3222.279, -98.266)
}, {
  npcId: 11,
  title: "Paul Bell",
  position: new mp.Vector3(905.807, -3230.671, -98.294)
}, {
  npcId: 12,
  title: "James Logan",
  position: new mp.Vector3(901.675, -3219.215, -98.242)
}, {
  npcId: 13,
  title: "Ethan Shields",
  position: new mp.Vector3(893.55, -3201.277, -98.19)
}, {
  npcId: 14,
  title: "Brian Poole",
  position: new mp.Vector3(887.415, -3209.713, -98.196)
}, {
  npcId: 15,
  title: "Ryan Cooper",
  position: new mp.Vector3(885.301, -3203.379, -98.196)
}];
const bunkerBlips = [];
function createBunkerBlips() {
  if (!(bunkerBlips.length > 0)) {
    bunkerBlipsData.forEach(_0x445b12 => {
      const _0x5b1c76 = mp.blips.new(1, _0x445b12.position, {
        name: _0x445b12.title,
        scale: 0.6,
        color: 46,
        alpha: 255,
        shortRange: false,
        dimension: mp.players.local.getVariable("REMOTE_ID")
      });
      bunkerBlips.push(_0x5b1c76);
    });
  }
}
function destroyBunkerBlips() {
  bunkerBlips.forEach(_0x31c848 => {
    _0x31c848.destroy();
  });
  bunkerBlips.splice(-bunkerBlips.length);
}
function updateBunkerNPCs(_0x47876d) {
  bunker_npc.forEach((_0x169e00, _0x1f942b) => {
    _0x169e00.setAlpha(_0x47876d[_0x1f942b] == 1 ? 255 : 80, false);
  });
}
mp.events.add("Client_ReloadBoughtNpcs", updateBunkerNPCs);
mp.events.add("Client_BunkerEnter", _0x3ab8ff => {
  mp.events.call("Client_CloseBunker");
  if (_0x3ab8ff && Array.isArray(_0x3ab8ff)) {
    createBunkerBlips();
    setTimeout(() => updateBunkerNPCs(_0x3ab8ff), 3000);
  }
});
mp.events.add("Client_BunkerExit", () => {
  destroyBunkerBlips();
});
const bunkerRoutes = {
  moneyMachine: new mp.Vector3(934.755, -3215.313, -98.001),
  juiceProduction: new mp.Vector3(847.129, -3244.611, -98.699)
};
mp.events.add("Client_BunkerSetRouteTo", (_0xcd4850, _0x58f94d) => {
  const _0x524dc2 = mp.game.system.vdist(886.5, -3228, -99.5, mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z);
  if (!mp.players.local.dimension || _0x524dc2 > 100) {
    return ShowNotification(language["Вы должны быть в бункере"][curr_lang], 6);
  }
  let _0x21354c = bunkerRoutes[_0xcd4850];
  if (_0xcd4850 == "npc") {
    const _0x4be35b = _0x58f94d + 1;
    _0x21354c = bunkerBlipsData.find(_0x41b017 => _0x41b017.npcId == _0x4be35b)?.position;
  }
  if (_0x21354c) {
    SetGPSLocation(_0x21354c.x, _0x21354c.y, _0x21354c.z, true, mp.players.local.dimension);
  }
});
mp.events.add("Client_OpenAvailableBunkerRaids", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenAvailableBunkerRaids");
    }
  }
});