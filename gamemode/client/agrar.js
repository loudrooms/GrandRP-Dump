let seed_obj;
let seed_pos;
let harvest_checkpoint;
let in_seed_process = false;
function StartSeedRender() {
  HintShow(language["ЛКМ - посадить семена<br>ПКМ - отменить посадку семян"][curr_lang]);
  seed_obj = mp.objects.new(mp.game.joaat("prop_grapes_01"), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 10), {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 200,
    dimension: 0
  });
}
function FinishSeed(_0x9f3204) {
  if (in_seed_process == 1) {
    in_seed_process = false;
    if (_0x9f3204 == 1 && localplayer.isInWater()) {
      if (seed_obj && mp.objects.exists(seed_obj)) {
        seed_obj.destroy();
        seed_obj = undefined;
      }
      mp.game.ui.notifications.show(language["Нельзя сажать урожай в воде"][curr_lang], false, 0, 6);
      return mp.events.callRemote("Server_CancelSeed");
    }
    if (_0x9f3204 == 1 && mp.objects.exists(seed_obj)) {
      mp.events.callRemote("Server_StartCreateSeed", JSON.stringify(seed_pos));
    } else {
      mp.events.callRemote("Server_CancelSeed");
    }
    if (seed_obj && mp.objects.exists(seed_obj)) {
      seed_obj.destroy();
      seed_obj = undefined;
    }
  }
  HintClose();
}
mp.events.add("click", (_0x1c1186, _0x4a8967, _0x3238cf, _0x130e3c, _0x4a36a8, _0x1c92a9, _0x40fa09, _0x28ad2e) => {
  if (loggedin && in_seed_process != 0) {
    if (_0x130e3c == "left") {
      FinishSeed(1);
    } else if (_0x130e3c == "right") {
      FinishSeed(2);
    }
  }
});
mp.events.add("render", () => {
  if (!loggedin || in_seed_process == 0) {
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
  let _0x346e6d = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2, res.y / 2, 0));
  let _0x10b91c = mp.game.gameplay.getGroundZFor3dCoord(_0x346e6d.x, _0x346e6d.y, _0x346e6d.z, 0, false);
  for (let _0x5ae00d = 1; _0x5ae00d < 11 && (_0x10b91c != 0 || (_0x10b91c = mp.game.gameplay.getGroundZFor3dCoord(_0x346e6d.x, _0x346e6d.y, _0x346e6d.z + _0x5ae00d, 0, false), _0x10b91c == 0)); _0x5ae00d++);
  if (_0x10b91c == 0) {
    _0x10b91c = mp.game.gameplay.getGroundZFor3dCoord(_0x346e6d.x, _0x346e6d.y, _0x346e6d.z + 50, 0, false);
  }
  _0x346e6d.z = _0x10b91c + 0.15;
  seed_pos = _0x346e6d;
  seed_obj.position = _0x346e6d;
});
mp.events.add("Client_Start_SeedPlant", () => {
  if (in_seed_process != 1) {
    StartSeedRender();
    in_seed_process = true;
  }
});
let harvest_blip;
let can_harvest = false;
mp.events.add("Harvest_Route_To_Field", (_0x513f51, _0x67ded9, _0x37387a) => {
  harvest_checkpoint = mp.checkpoints.new(14, new mp.Vector3(_0x513f51, _0x67ded9, _0x37387a), 15, {
    direction: new mp.Vector3(0, 0, 0),
    color: [0, 255, 0, 255],
    visible: true,
    dimension: 0
  });
  can_harvest = true;
  harvest_blip = mp.blips.new(1, new mp.Vector3(_0x513f51, _0x67ded9, _0x37387a), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 2,
    dimension: 0
  });
  harvest_blip.setRoute(true);
});
mp.events.add("Client_Destroy_Agrar_Checkpoint", () => {
  if (harvest_checkpoint) {
    harvest_checkpoint.destroy();
    harvest_checkpoint = undefined;
  }
  if (harvest_blip) {
    harvest_blip.destroy();
    harvest_blip = undefined;
  }
  can_harvest = false;
});
mp.events.add("playerEnterCheckpoint", (_0xc303ea, _0x1d2ce3) => {
  if (can_harvest == 1) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.events.callRemote("Server_Agrar_FarmField");
  }
});
global.HarvestOpened = false;
mp.events.add("OpenHarvestClient", (_0x210f8b, _0x498cb4, _0x184e51, _0x434b26, _0x190263, _0x49c658, _0x1d7264, _0x19bf05, _0x45dc63, _0x491f30, _0x504c2f = true) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x43e288 = "{\"cost\":" + _0x210f8b + ",\"owner_id\":" + _0x498cb4 + ",\"type\":" + _0x184e51 + ",\"fam_owner\":\"" + _0x434b26 + "\",\"count\":" + _0x190263 + ",\"full_count\":" + _0x49c658 + ",\"profit\":" + _0x1d7264 + ",\"profit2\":" + _0x19bf05 + ",\"profit3\":" + _0x45dc63 + ",\"profit4\":" + _0x491f30 + ",\"is_agrar\":" + _0x504c2f + ",\"show\":true}";
  main_browser.execute("APPS.state.family_business = " + _0x43e288);
  HarvestOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseHarvest = function () {
  if (HarvestOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.family_business.show = false;");
    HarvestOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseHarvest");
  }
};
mp.events.add("Client_CloseHarvestNow", () => {
  CloseHarvest();
});
mp.events.add("Client_GetHarvest", () => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetHarvest");
  }
});
mp.events.add("Client_BuyHarvest", () => {
  if (!(new Date().getTime() - lastCheck < 1500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyHarvest");
  }
});
mp.events.add("Client_BuyCowsed", () => {
  if (!(new Date().getTime() - lastCheck < 1500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyCowsed");
  }
});
mp.events.add("Harvest_Error", _0x3117f7 => {
  if (HarvestOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x3117f7 + "');");
  }
});
const cowsed_cows = [{
  position: new mp.Vector3(2518.607, 4740.182, 34.304),
  rotation: 43.035,
  cowsed: 1,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2517.135, 4738.975, 34.304),
  rotation: 47.163,
  cowsed: 1,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2515.675, 4737.062, 34.304),
  rotation: 47.544,
  cowsed: 1,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2503.931, 4749.553, 34.304),
  rotation: 129.84,
  cowsed: 1,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2502.496, 4750.49, 34.304),
  rotation: 133.998,
  cowsed: 1,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2500.8, 4752.19, 34.304),
  rotation: 128.605,
  cowsed: 1,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2491.717, 4763.703, 34.355),
  rotation: 43.504,
  cowsed: 1,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2493.371, 4765.127, 34.384),
  rotation: 47.391,
  cowsed: 1,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2495.279, 4766.714, 34.416),
  rotation: 45.553,
  cowsed: 1,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2477.668, 4760.037, 34.304),
  rotation: 309.764,
  cowsed: 2,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2476.207, 4761.595, 34.304),
  rotation: 311.518,
  cowsed: 2,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2474.65, 4763.126, 34.304),
  rotation: 308.496,
  cowsed: 2,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2461.653, 4776.621, 34.471),
  rotation: 315.236,
  cowsed: 2,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2460.394, 4778.276, 34.504),
  rotation: 308.817,
  cowsed: 2,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2458.912, 4779.8, 34.534),
  rotation: 311.518,
  cowsed: 2,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2445.72, 4792.882, 34.711),
  rotation: 314.738,
  cowsed: 2,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2444.21, 4794.221, 34.691),
  rotation: 313.19,
  cowsed: 2,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2442.728, 4795.883, 34.664),
  rotation: 314.549,
  cowsed: 2,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2441.69, 4732.064, 34.299),
  rotation: 140.395,
  cowsed: 3,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2440.362, 4733.394, 34.299),
  rotation: 134.919,
  cowsed: 3,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2438.669, 4734.98, 34.298),
  rotation: 136.549,
  cowsed: 3,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2421.326, 4761.402, 34.305),
  rotation: 220.691,
  cowsed: 3,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2419.908, 4760.17, 34.305),
  rotation: 226.896,
  cowsed: 3,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2418.125, 4758.566, 34.303),
  rotation: 224.078,
  cowsed: 3,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2397.312, 4778.307, 34.596),
  rotation: 44.28,
  cowsed: 3,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2398.707, 4779.748, 34.661),
  rotation: 37.643,
  cowsed: 3,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2400.741, 4781.235, 34.71),
  rotation: 39.826,
  cowsed: 3,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2256.602, 4832.902, 40.657),
  rotation: 145.139,
  cowsed: 4,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2255.038, 4833.961, 40.657),
  rotation: 137.129,
  cowsed: 4,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2253.033, 4835.384, 40.657),
  rotation: 145.178,
  cowsed: 4,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2249.579, 4840.287, 40.657),
  rotation: 136.652,
  cowsed: 4,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2248.022, 4841.438, 40.657),
  rotation: 137.966,
  cowsed: 4,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2246.317, 4843.181, 40.657),
  rotation: 134.651,
  cowsed: 4,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2242.905, 4847.805, 40.698),
  rotation: 136.232,
  cowsed: 4,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2241.524, 4849.141, 40.725),
  rotation: 132.22,
  cowsed: 4,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2239.789, 4851.02, 40.769),
  rotation: 133.313,
  cowsed: 4,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2245.746, 4875, 40.869),
  rotation: 315.617,
  cowsed: 5,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2247.355, 4873.904, 40.881),
  rotation: 315.727,
  cowsed: 5,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2248.806, 4872.002, 40.908),
  rotation: 313.83,
  cowsed: 5,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2224.032, 4890.505, 40.76),
  rotation: 44.445,
  cowsed: 5,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2225.356, 4892.008, 40.686),
  rotation: 47.255,
  cowsed: 5,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2227.313, 4893.758, 40.619),
  rotation: 46.935,
  cowsed: 5,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2209.529, 4907.247, 40.758),
  rotation: 38.047,
  cowsed: 5,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2211.107, 4908.932, 40.689),
  rotation: 42,
  cowsed: 5,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2212.469, 4910.113, 40.681),
  rotation: 40.579,
  cowsed: 5,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2259.582, 4901.807, 40.815),
  rotation: 226.548,
  cowsed: 6,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2258.283, 4900.393, 40.8),
  rotation: 232.725,
  cowsed: 6,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2256.452, 4898.571, 40.829),
  rotation: 207.096,
  cowsed: 6,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2241.195, 4914.834, 40.66),
  rotation: 223.938,
  cowsed: 6,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2243.168, 4916.672, 40.684),
  rotation: 226.558,
  cowsed: 6,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2244.353, 4918.631, 40.717),
  rotation: 220.377,
  cowsed: 6,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2222.601, 4936.498, 40.92),
  rotation: 46.231,
  cowsed: 6,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2223.99, 4937.904, 40.948),
  rotation: 47.384,
  cowsed: 6,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2225.825, 4939.635, 40.982),
  rotation: 42.224,
  cowsed: 6,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2186.753, 4957.182, 41.292),
  rotation: 137.232,
  cowsed: 7,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2185.486, 4958.275, 41.29),
  rotation: 130.931,
  cowsed: 7,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2184.002, 4959.605, 41.288),
  rotation: 134.247,
  cowsed: 7,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2172.814, 4947.774, 41.366),
  rotation: 135.429,
  cowsed: 7,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2171.708, 4949.1, 41.377),
  rotation: 132.523,
  cowsed: 7,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2167.83, 4947.174, 41.392),
  rotation: 322.72,
  cowsed: 7,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2162.004, 4967.543, 41.37),
  rotation: 135.158,
  cowsed: 7,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2160.449, 4969.255, 41.357),
  rotation: 137.749,
  cowsed: 7,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2158.961, 4971.185, 41.34),
  rotation: 131.387,
  cowsed: 7,
  cowsed_index: 3,
  cow_index: 2
}, {
  position: new mp.Vector3(2169.171, 4995.644, 41.366),
  rotation: 223.477,
  cowsed: 8,
  cowsed_index: 1,
  cow_index: 0
}, {
  position: new mp.Vector3(2167.409, 4993.964, 41.335),
  rotation: 222.942,
  cowsed: 8,
  cowsed_index: 1,
  cow_index: 1
}, {
  position: new mp.Vector3(2165.414, 4992.266, 41.33),
  rotation: 222.819,
  cowsed: 8,
  cowsed_index: 1,
  cow_index: 2
}, {
  position: new mp.Vector3(2147.475, 4974.439, 41.33),
  rotation: 225.57,
  cowsed: 8,
  cowsed_index: 2,
  cow_index: 0
}, {
  position: new mp.Vector3(2145.98, 4972.812, 41.385),
  rotation: 217.08,
  cowsed: 8,
  cowsed_index: 2,
  cow_index: 1
}, {
  position: new mp.Vector3(2143.818, 4971.033, 41.345),
  rotation: 219.282,
  cowsed: 8,
  cowsed_index: 2,
  cow_index: 2
}, {
  position: new mp.Vector3(2141.679, 5002.627, 41.337),
  rotation: 129.392,
  cowsed: 8,
  cowsed_index: 3,
  cow_index: 0
}, {
  position: new mp.Vector3(2140.447, 5004.261, 41.307),
  rotation: 132.722,
  cowsed: 8,
  cowsed_index: 3,
  cow_index: 1
}, {
  position: new mp.Vector3(2138.618, 5006.115, 41.218),
  rotation: 132.768,
  cowsed: 8,
  cowsed_index: 3,
  cow_index: 2
}];
for (let e = 0; e < cowsed_cows.length; e++) {
  mp.peds.new(mp.game.joaat("a_c_cow"), cowsed_cows[e].position, cowsed_cows[e].rotation, _0x5b67a8 => {}, 0);
  let o = mp.colshapes.newSphere(cowsed_cows[e].position.x, cowsed_cows[e].position.y, cowsed_cows[e].position.z, 1);
  o.is_cowsed_shape = true;
  o.cowsed_number = cowsed_cows[e].cowsed;
  o.cowsed_index = cowsed_cows[e].cowsed_index;
  o.cow_index = cowsed_cows[e].cow_index;
}
global.can_cowsed_interact = false;
let cowsed_number = 0;
let cow_index = 0;
let cowsed_index = 0;
mp.events.add("playerEnterColshape", _0x187b33 => {
  if (mp.colshapes.exists(_0x187b33) && _0x187b33.is_cowsed_shape == 1) {
    can_cowsed_interact = true;
    cowsed_number = _0x187b33.cowsed_number;
    cowsed_index = _0x187b33.cowsed_index;
    cow_index = _0x187b33.cow_index;
    main_browser.execute("APPS.state.hud.interact = true;");
    return;
  }
});
mp.events.add("playerExitColshape", _0x8c6ed => {
  if (mp.colshapes.exists(_0x8c6ed) && _0x8c6ed.is_cowsed_shape == 1) {
    can_cowsed_interact = false;
    cowsed_number = 0;
    cowsed_index = 0;
    cow_index = 0;
    main_browser.execute("APPS.state.hud.interact = false;");
    return;
  }
});
global.SendCowsedData = function () {
  if (can_cowsed_interact == 1) {
    mp.events.callRemote("Server_SetCowsedMilk", cowsed_number, cowsed_index, cow_index);
  }
};
global.SeedInfoOpened = false;
mp.events.add("Client_ShowSeedInformation", (_0x49bdbf, _0x473f1e) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x5c9880 = "{\"type\":" + _0x49bdbf + ",\"fulltime\":'" + _0x473f1e + "',\"show\":true}";
  main_browser.execute("APPS.state.familycabbage = " + _0x5c9880);
  SeedInfoOpened = true;
  ChangeHudState(false);
  mp.gui.chat.activate(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseSeedInformation = function () {
  if (SeedInfoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.familycabbage.show = false;");
    SeedInfoOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseSeedInformation");
  }
};
mp.events.add("Client_InteractFamilySeed", () => {
  if (SeedInfoOpened != 0) {
    if (!(new Date().getTime() - lastCheck < 1500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_Interact_Seed");
    }
  }
});
mp.events.add("SeedInformation_Error", _0x4c9788 => {
  if (SeedInfoOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x4c9788 + "');");
  }
});
mp.events.add("Client_CloseSeedInformation", () => {
  if (SeedInfoOpened != 0) {
    CloseSeedInformation();
  }
});