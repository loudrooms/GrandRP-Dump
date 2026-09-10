const trashcan_pos = [[416.737, -2068.849, 21.529], [115.475, -1576.047, 29.603], [-4.458, -1084.021, 26.672], [543.156, -204.268, 54.326], [373.6, 351.699, 102.793], [-570.012, -858.632, 26.461], [-1256.375, -864.448, 12.321], [-1131.142, -1414.886, 5.153], [-1245.71, 460.736, 93.114], [-180.666, 243.255, 92.793], [1179.977, -304.417, 69.076], [1908.536, 575.966, 175.822], [2571.036, 483.612, 108.677], [2492.058, 1569.076, 32.72], [1925.427, 3744.835, 32.516], [1659.902, 4821.937, 42], [1597.212, 6460.103, 25.317], [171.982, 6648.858, 31.501], [-93.459, 6494.933, 31.491], [-266.997, 6217.438, 31.525], [-683.681, 5788.117, 17.331], [-580.069, 5230.097, 70.487], [-2225.395, 4224.166, 47.083], [-2523.366, 2302.075, 33.285], [-1089.625, 2722.906, 19.043], [636.276, 2730.527, 41.882], [1193.117, 2631.99, 37.81], [-3172.997, 1096.093, 20.838], [-3052.128, 588.789, 7.738], [-2036.942, -255.098, 23.386], [-1844.693, -1181.801, 13.017], [-1018.927, -1118.689, 2.134], [-709.013, -1140.001, 10.812], [-700.993, -2446.416, 13.944], [-42.368, -1758.087, 29.492], [34.129, -1009.812, 29.451], [-701.56, -1002.609, 15.993], [-176.37, -1291.044, 31.296], [120.41, -1327.772, 29.369], [300.854, -1285.766, 30.383], [778.73, -1252.786, 26.534], [1231.559, -1235.734, 35.589], [1251.051, -1592.024, 53.445], [854.449, -2364.432, 30.346], [218.069, -2011.932, 18.912], [230.061, -1777.887, 28.903], [270.935, -1524.135, 29.292], [379.085, -1117.967, 29.406], [-2952.205, 445.672, 15.285], [-795.885, -961.173, 15.254], [50.426, -831.642, 31.077], [395.032, -329.936, 46.937], [-36.756, -93.044, 57.262]];
const trash_pos = [[[435.046, -2039.09, 22.7496, 0, 0, 90], [432.188, -2037.23, 22.6652, 0, 0, 90]], [[144.801, -1521.51, 28.4416, 0, 0, 90], [151.339, -1527.85, 28.3418, 0, 0, 90]], [[-67.0154, -1088.57, 26.0325, 0, 0, 90], [-41.0839, -1082.7, 25.9265, 0, 0, 90]], [[530.297, -146.821, 57.5163, 0, 0, 95], [541.329, -192.16, 53.6863, 0, 0, 90]], [[414.332, 315.027, 102.321, 0, 0, 90], [369.019, 324.496, 102.888, 0, 0, 90]], [[-592.122, -891.823, 25.2327, 0, 0, 90], [-588.517, -870.87, 25.0761, 0, 0, 90]], [[-1216.59, -895.092, 11.9929, 0, 0, 90], [-1201.94, -886.117, 12.4217, 0, 0, 90]], [[-1148.5, -1387.2, 4.45167, 0, 0, 90], [-1153.43, -1390.48, 4.31753, 0, 0, 90]], [[-1260.97, 457.451, 93.9399, 0, 0, 90], [-1233.62, 474.428, 92.0147, 0, 0, 90]], [[-140.854, 229.806, 94.2461, 0, 0, 90], [-121.887, 228.839, 94.1127, 0, 0, 90]], [[1144.91, -302.168, 68.0308, 0, 0, 90], [1162.4, -311.763, 68.4825, 0, 0, 90]], [[1916.02, 583.833, 175.573, 0, 0, 90], [1896.02, 584.61, 177.604, 0, 0, 90]], [[2558.76, 355.779, 107.821, 0, 0, 90], [2588.76, 433.345, 107.813, 0, 0, 90]], [[2460.98, 1579.72, 32.3176, 0, 0, 90], [2471.57, 1597.46, 31.9203, 0, 0, 90]], [[1858.42, 3681.96, 33.0308, 0, 0, 90], [1836.32, 3669.29, 32.877, 0, 0, 90]], [[1678.19, 4849.32, 41.2569, 0, 0, 90], [1659.2, 4866.59, 41.3638, 0, 0, 90]], [[1581.18, 6453.51, 24.6172, 0, 0, 90], [1589.13, 6449.42, 24.6172, 0, 0, 90]], [[159.983, 6590.41, 31.449, 0, 0, 90], [164.822, 6631.39, 30.8858, 0, 0, 90]], [[-56.9375, 6499.64, 30.7358, 0, 0, 90], [-54.9659, 6520.44, 30.7908, 0, 0, 90]], [[-250.88, 6213.02, 30.7892, 0, 0, 90], [-235.717, 6201.23, 31.2442, 0, 0, 90]], [[-702.186, 5790.85, 16.8268, 0, 0, 90], [-704.66, 5769.14, 16.531, 0, 0, 90]], [[-582.262, 5338.95, 69.5145, 0, 0, 90], [-574.512, 5350.47, 69.5145, 0, 0, 90]], [[-2191.63, 4285.41, 48.3811, 0, 0, 90], [-2196, 4292.67, 48.3777, 0, 0, 90]], [[-2556.63, 2315.31, 32.5161, 0, 0, 90], [-2532.11, 2319.62, 32.4153, 0, 0, 90]], [[-1135.06, 2683.15, 17.6764, 0, 0, 90], [-1119.78, 2713.5, 18.2892, 0, 0, 90]], [[583.641, 2744, 41.2916, 0, 0, 90], [605.762, 2745.58, 41.2059, 0, 0, 90]], [[1204.26, 2704.7, 37.3037, 0, 0, 90], [1195.68, 2660.96, 37.0387, 0, 0, 90]], [[-3158, 1093.5, 20.1529, 0, 0, 90], [-3156.68, 1097.23, 20.1524, 0, 0, 90]], [[-3047.44, 614.164, 6.60795, 0, 0, 90], [-3050.3, 627.14, 6.58107, 0, 0, 90]], [[-2073.56, -329.485, 12.616, 0, 0, 90], [-2074.99, -333.211, 12.616, 0, 0, 90]], [[-1837.65, -1233.39, 12.2173, 0, 0, 90], [-1819.89, -1219.59, 12.3174, 0, 0, 90]], [[-1015.76, -1089.84, 1.21137, 0, 0, 90], [-1029.99, -1094.46, 1.14065, 0, 0, 90]], [[-742.481, -1124, 9.91517, 0, 0, 90], [-734.396, -1138.32, 9.80832, 0, 0, 90]], [[-700.029, -2413.93, 13.2445, 0, 0, 90], [-678.299, -2401.04, 13.2445, 0, 0, 90]], [[-66.514, -1780.66, 27.5352, 0, 0, 90], [-59.398, -1748.76, 28.6181, 0, 0, 90]], [[50.3477, -1000.88, 28.6574, 0, 0, 90], [32.1687, -996.262, 28.666, 0, 0, 90]], [[-698.878, -1057.12, 14.2, 0, 0, 90], [-676.745, -1033.64, 16.5635, 0, 0, 90]], [[-202.619, -1309.37, 30.5937, 0, 0, 90], [-187.797, -1315.3, 30.4983, 0, 0, 90]], [[97.6606, -1307.62, 28.5057, 0, 0, 90], [98.7929, -1310.21, 28.4679, 0, 0, 90]], [[344.569, -1298.6, 31.71, 0, 0, 90], [338.691, -1299.89, 31.8166, 0, 0, 90]], [[781.587, -1297.58, 25.5781, 0, 0, 90], [782.45, -1277.69, 25.6711, 0, 0, 90]], [[1213.2, -1239.47, 35.6258, 0, 0, 90], [1192.33, -1237.58, 35.6258, 0, 0, 90]], [[1194.91, -1631.94, 42.9605, 0, 0, 90], [1221.85, -1627.77, 48.1191, 0, 0, 90]], [[819.881, -2347.99, 29.6343, 0, 0, 90], [818.693, -2364.22, 29.3926, 0, 0, 90]], [[173.999, -2023.96, 17.5125, 0, 0, 90], [182.772, -2028.17, 17.5656, 0, 0, 90]], [[224.319, -1791.77, 27.8334, 0, 0, 90], [211.844, -1779.14, 28.3588, 0, 0, 90]], [[217.699, -1527.01, 28.4909, 0, 0, 90], [227.299, -1540.92, 28.5258, 0, 0, 90]], [[454.198, -1116.93, 28.4097, 0, 0, 90], [454.623, -1143.61, 28.6177, 0, 0, 90]], [[-2947.84, 484.578, 14.7566, 0, 0, 90], [-2953.28, 473.116, 14.6687, 0, 0, 90]], [[-821.39, -931.398, 15.7126, 0, 0, 90], [-797.194, -937.046, 16.51, 0, 0, 90]], [[52.5724, -798.057, 30.7936, 0, 0, 90], [63.1174, -802.24, 30.8542, 0, 0, 90]], [[406.072, -349.106, 46.0307, 0, 0, 90], [389.042, -342.233, 46.1108, 0, 0, 90]], [[-23.7562, -111.547, 56.3273, 0, 0, 90], [-44.011, -103.649, 57.0522, 0, 0, 90]]];
global.at_trash = false;
global.has_put_trash = false;
mp.events.add("Client_GarbageWorkJoin", () => {
  if (!!jobDesignOpened && !chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GarbageWorkJoin");
  }
});
mp.events.add("Client_ChangeGarbageStatus", _0x9a9d18 => {
  if (jobDesignOpened) {
    main_browser.execute("APPS.state.job.job = " + _0x9a9d18 + ";");
  }
});
mp.events.add("Client_RentGarbageVehicle", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ArendGarbageVeh");
  }
});
let int_val;
let trash_info = {
  blip: undefined,
  colshape: undefined,
  objects: [undefined, undefined]
};
function DestroyTrashInfo(_0x22588f = [true, true]) {
  if (trash_info.blip && mp.blips.exists(trash_info.blip)) {
    trash_info.blip.destroy();
    trash_info.blip = undefined;
  }
  if (trash_info.colshape && mp.colshapes.exists(trash_info.colshape)) {
    trash_info.colshape.destroy();
    trash_info.colshape = undefined;
  }
  if (_0x22588f[0] != 0 && trash_info.objects[0] && mp.objects.exists(trash_info.objects[0])) {
    trash_info.objects[0].destroy();
    trash_info.objects[0] = undefined;
  }
  if (_0x22588f[1] != 0 && trash_info.objects[1] && mp.objects.exists(trash_info.objects[1])) {
    trash_info.objects[1].destroy();
    trash_info.objects[1] = undefined;
  }
}
mp.events.add("Client_SwitchGarbageContract", (_0x573e22, _0xa4cf46 = 0) => {
  has_put_trash = _0x573e22;
  if (_0x573e22 == 1) {
    if (_0xa4cf46 == 0 && trash_info.objects[0] && mp.objects.exists(trash_info.objects[0])) {
      trash_info.objects[0].destroy();
      trash_info.objects[0] = undefined;
    } else if (_0xa4cf46 == 1 && trash_info.objects[1] && mp.objects.exists(trash_info.objects[1])) {
      trash_info.objects[1].destroy();
      trash_info.objects[1] = undefined;
    }
  }
});
mp.events.add("Client_CreateGarbageNav", (_0x4039c0, _0x52a6d1, _0x16bdd4 = 0, _0x47995e = false) => {
  DestroyTrashInfo(_0x4039c0 == 1 && _0x16bdd4 == 1 || _0x4039c0 == 2 && _0x16bdd4 == 0 ? [true, false] : [true, true]);
  let _0x1669df = trash_pos[_0x52a6d1][_0x16bdd4];
  if (_0x4039c0 == 2) {
    _0x1669df = trashcan_pos[_0x52a6d1];
  }
  if (!_0x47995e) {
    trash_info.colshape = mp.colshapes.newCircle(_0x1669df[0], _0x1669df[1], 1);
    trash_info.colshape.is_garbage = true;
    trash_info.colshape.type = _0x4039c0;
  }
  trash_info.blip = mp.blips.new(1, new mp.Vector3(_0x1669df[0], _0x1669df[1], _0x1669df[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 43,
    dimension: 0
  });
  trash_info.blip.setRoute(true);
  if (!_0x47995e && _0x4039c0 == 1 && _0x16bdd4 == 0) {
    trash_info.objects[0] = mp.objects.new(mp.game.joaat("prop_ld_rub_binbag_01"), new mp.Vector3(trash_pos[_0x52a6d1][0][0], trash_pos[_0x52a6d1][0][1], trash_pos[_0x52a6d1][0][2]), {
      rotation: new mp.Vector3(trash_pos[_0x52a6d1][0][3], trash_pos[_0x52a6d1][0][4], trash_pos[_0x52a6d1][0][5]),
      alpha: 255,
      dimension: localplayer.dimension
    });
    trash_info.objects[1] = mp.objects.new(mp.game.joaat("prop_ld_rub_binbag_01"), new mp.Vector3(trash_pos[_0x52a6d1][1][0], trash_pos[_0x52a6d1][1][1], trash_pos[_0x52a6d1][1][2]), {
      rotation: new mp.Vector3(trash_pos[_0x52a6d1][1][3], trash_pos[_0x52a6d1][1][4], trash_pos[_0x52a6d1][1][5]),
      alpha: 255,
      dimension: localplayer.dimension
    });
  }
});
mp.events.add("Client_GarbageDeleteBlip", () => {
  DestroyTrashInfo();
});
mp.events.add("playerEnterColshape", _0x3d19f4 => {
  if (mp.colshapes.exists(_0x3d19f4) && _0x3d19f4.is_garbage == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_trash = _0x3d19f4.type;
  } else if (mp.colshapes.exists(_0x3d19f4) && _0x3d19f4.is_garbage_unload == 1) {
    if (!localplayer.vehicle) {
      return;
    }
    if (localplayer.vehicle.getPedInSeat(-1) !== localplayer.handle) {
      return;
    }
    mp.events.callRemote("Server_TogglePlayerEngineGarbage", false);
    let _0x58f04e = 0;
    int_val = setInterval(function () {
      try {
        _0x58f04e += 30;
        main_browser.execute("APPS.state.hud.fire_process = " + _0x58f04e + ";");
        if (_0x58f04e >= 5000) {
          if (int_val != null) {
            clearInterval(int_val);
            int_val = undefined;
          }
          mp.events.callRemote("Server_TogglePlayerEngineGarbage", true);
          mp.events.callRemote("Server_GarbageUnloadTrash");
          main_browser.execute("APPS.state.hud.fire_process = 0;");
        }
      } catch (_0x5318ee) {
        console.log("ERROR[change weather]:", _0x5318ee);
      }
    }, 100);
  }
});
mp.events.add("playerExitColshape", _0x4e0586 => {
  if (mp.colshapes.exists(_0x4e0586) && _0x4e0586.is_garbage == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_trash = false;
  }
});
mp.events.add("Client_RouteGarbageToUnload", () => {
  DestroyTrashInfo();
  trash_info.colshape = mp.colshapes.newCircle(1564.411, -2162.597, 4);
  trash_info.colshape.is_garbage_unload = true;
  trash_info.blip = mp.blips.new(1, new mp.Vector3(1564.411, -2162.597, 77.238), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 43,
    dimension: 0
  });
  trash_info.blip.setRoute(true);
});
mp.events.add("Client_GarbageLoadCargo", (_0x1a8c5c, _0x177fe8) => {
  if (_0x1a8c5c == 1) {
    main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Загружено[curr_lang] + "\";");
    main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["мусора:"][curr_lang] + "\";");
    main_browser.execute("APPS.state.hud.hud_job_count = \"" + _0x177fe8 + "\";");
    main_browser.execute("APPS.state.hud.job_hud = 121;");
    main_browser.execute("APPS.state.hud.job_hud_show = true;");
  } else {
    main_browser.execute("APPS.state.hud.job_hud_show = false;");
  }
});