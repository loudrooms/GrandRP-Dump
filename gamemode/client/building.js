const building_info = [{
  get_material_pos: new mp.Vector3(-834.244, -805.03, 19.096),
  set_material_poses: [new mp.Vector3(-841.3, -795.744, 19.163), new mp.Vector3(-808.424, -798.947, 19.163), new mp.Vector3(-832.501, -781.675, 20.343), new mp.Vector3(-804.775, -816.263, 20.474)],
  set_material_driver: new mp.Vector3(-816.219, -823.495, 19.95)
}, {
  get_material_pos: new mp.Vector3(-515.165, -954.442, 23.571),
  set_material_poses: [new mp.Vector3(-505.123, -933.84, 24.241), new mp.Vector3(-495.111, -976.295, 23.55), new mp.Vector3(-490.749, -958.97, 23.806), new mp.Vector3(-492.431, -942.325, 23.964)],
  set_material_driver: new mp.Vector3(-521.941, -942.957, 23.492)
}, {
  get_material_pos: new mp.Vector3(-95.923, -1036.471, 27.756),
  set_material_poses: [new mp.Vector3(-83.294, -1006.308, 27.808), new mp.Vector3(-114.87, -1036.904, 27.345), new mp.Vector3(-102.616, -1018.789, 27.275), new mp.Vector3(-118.18, -1051.357, 27.274)],
  set_material_driver: new mp.Vector3(-77.186, -1039.417, 28.053)
}, {
  get_material_pos: new mp.Vector3(1300.997, -733.023, 64.849),
  set_material_poses: [new mp.Vector3(1343.083, -709.047, 66.645), new mp.Vector3(1327.307, -749.751, 65.967), new mp.Vector3(1326.067, -711.726, 65.736), new mp.Vector3(1333.156, -761.358, 66.816)],
  set_material_driver: new mp.Vector3(1286.428, -719.087, 64.583)
}];
let buildingConstructionPoints = [];
let buildingConstructionBlips = [];
let buildingConstructionLabels = [];
function localizeBuildingText(_0x26f8b6) {
  const _0x14a773 = language[_0x26f8b6];
  if (_0x14a773) {
    if (_0x14a773[curr_lang] !== undefined) {
      return _0x14a773[curr_lang];
    } else if (_0x14a773.ru !== undefined) {
      return _0x14a773.ru;
    } else if (_0x14a773.en !== undefined) {
      return _0x14a773.en;
    } else {
      return _0x26f8b6;
    }
  } else {
    return _0x26f8b6;
  }
}
function clearBuildingConstructionMapEntities() {
  for (let _0x488f5e = 0; _0x488f5e < buildingConstructionBlips.length; _0x488f5e++) {
    try {
      if (buildingConstructionBlips[_0x488f5e]) {
        buildingConstructionBlips[_0x488f5e].destroy();
      }
    } catch (_0x34cbad) {}
  }
  for (let _0x15dba0 = 0; _0x15dba0 < buildingConstructionLabels.length; _0x15dba0++) {
    try {
      if (buildingConstructionLabels[_0x15dba0]) {
        buildingConstructionLabels[_0x15dba0].destroy();
      }
    } catch (_0x5c12d7) {}
  }
  buildingConstructionBlips = [];
  buildingConstructionLabels = [];
}
function renderBuildingConstructionMapEntities() {
  clearBuildingConstructionMapEntities();
  if (Array.isArray(buildingConstructionPoints)) {
    for (let _0x1446ae = 0; _0x1446ae < buildingConstructionPoints.length; _0x1446ae++) {
      const _0x369ca4 = buildingConstructionPoints[_0x1446ae] && buildingConstructionPoints[_0x1446ae].position;
      if (!Array.isArray(_0x369ca4) || _0x369ca4.length < 3) {
        continue;
      }
      const _0x3a3a0d = new mp.Vector3(_0x369ca4[0], _0x369ca4[1], _0x369ca4[2]);
      const _0x562927 = mp.blips.new(411, _0x3a3a0d, {
        name: localizeBuildingText("Строительная площадка"),
        scale: 0.8,
        color: 47,
        drawDistance: 25,
        shortRange: true
      });
      const _0x2dc1ec = mp.labels.new(localizeBuildingText("Гардероб"), _0x3a3a0d, {
        los: true,
        font: 0,
        drawDistance: 10,
        color: [255, 255, 255, 255],
        dimension: 0
      });
      buildingConstructionBlips.push(_0x562927);
      buildingConstructionLabels.push(_0x2dc1ec);
    }
  }
}
mp.events.add("Client_SetBuildingConstructionPoints", _0x30e68e => {
  buildingConstructionPoints = Array.isArray(_0x30e68e) ? _0x30e68e : [];
  renderBuildingConstructionMapEntities();
});
mp.events.add("Client_LanguageChanged", () => {
  if (buildingConstructionPoints.length) {
    renderBuildingConstructionMapEntities();
  }
});
const landslide_work_poses = [[[-2288.22, -343.124, 13.348], [-2293.662, -335.026, 13.607], [-2290.741, -332.598, 13.601], [-2285.358, -330.656, 13.572], [-2282.861, -324.11, 13.563], [-2281.566, -317.265, 13.372], [-2277.916, -325.382, 13.528], [-2280.722, -336.996, 13.527]], [[1578.274, 1049.786, 80.192], [1582.135, 1048.963, 79.959], [1585.862, 1048.522, 79.99], [1590.982, 1046.714, 80.167], [1595.716, 1047.454, 80.053], [1606.379, 1049.43, 80.38], [1602.167, 1053.786, 80.27], [1610.973, 1043.672, 80.068]], [[1218.206, 1244.112, 146.443], [1223.624, 1244.415, 145.912], [1228.28, 1252.527, 144.818], [1233.989, 1254.099, 144.565], [1230.816, 1257.83, 144.341], [1230.346, 1260.653, 144.136], [1235.047, 1263.461, 143.942], [1236.995, 1258.985, 144.168]], [[-352.765, 966.555, 233.364], [-349.444, 966.698, 233.348], [-348.437, 962.866, 233.364], [-345.627, 959.039, 233.318], [-338.68, 960.44, 233.326], [-338.992, 955.386, 233.385], [-335.665, 952.39, 233.182], [-348.171, 971.886, 233.312]], [[-1614.338, 1155.56, 150.424], [-1619.162, 1151.681, 149.947], [-1624.275, 1155.526, 149.681], [-1628.457, 1154.482, 149.679], [-1632.65, 1155.586, 149.53], [-1634.853, 1152.77, 149.771], [-1638.145, 1154.82, 149.992], [-1641.9, 1158.377, 149.974]]];
const objstate_work_poses = [[[-6.651, -2413.411, 6.004], [-9.178, -2416.639, 6.005], [-15.928, -2422.365, 6.003], [-19.116, -2417.144, 6.001]], [[-465.317, -1432.53, 29.196], [-459.889, -1428.832, 29.364], [-456.161, -1434.109, 29.296], [-448.984, -1433.686, 29.25]], [[-106.842, -1026.261, 27.274], [-96.345, -1030.944, 27.441], [-86.994, -1028.968, 28.171], [-79.437, -1017.526, 28.539]], [[948.43, -1410.672, 31.48], [944.442, -1420.266, 31.306], [930.327, -1421.519, 31.316], [926.568, -1429.769, 31.367]], [[-2598.481, 2985.748, 16.631], [-2603.836, 2988.038, 16.639], [-2610.831, 2986.971, 16.609], [-2614.927, 2993.771, 16.606]], [[-225.645, 6134.675, 31.241], [-230.195, 6138.698, 31.224], [-233.839, 6142.19, 31.204], [-245.114, 6144.085, 31.176]], [[2111.651, 6023.255, 50.892], [2115.914, 6027.089, 50.956], [2121.522, 6032.318, 50.958], [2121.077, 6024.551, 51.109]], [[1089.641, -1833, 37.113], [1095.512, -1836.864, 37.134], [1109.039, -1848.329, 37.26], [1121.196, -1857.467, 37.294]], [[1969.536, 2934.535, 45.998], [1970.18, 2943.852, 45.739], [1978.463, 2939.516, 46.003], [1981.075, 2928.979, 46.506]], [[470.535, -2950.223, 6.044], [504.672, -2949.029, 6.016], [517.911, -2979.981, 6.038], [463.879, -2982.238, 6.032]], [[2833.584, 4396.683, 49.185], [2842.212, 4385.4, 49.036], [2839.654, 4376.023, 49.365], [2838.926, 4358.482, 49.841]], [[52.385, -483.007, 33.863], [62.941, -495.328, 34.078], [83.344, -503.513, 34.011], [85.581, -519.393, 34.064]], [[-1906.916, -231.429, 38.961], [-1903.099, -225.324, 38.946], [-1892.493, -226.442, 38.356], [-1883.42, -233.532, 38.879]], [[2192.765, 2713.606, 47.099], [2186.558, 2721.443, 47.198], [2174.731, 2734.219, 47.163], [2168.37, 2743.051, 47.151]], [[-1599.464, -1121.051, 2.572], [-1593.325, -1130.316, 2.208], [-1586.526, -1119.728, 2.874], [-1582.702, -1128.524, 2.578]], [[-675.061, 241, 81.121], [-693.097, 245.571, 81.013], [-708.764, 236.67, 80.105], [-696.339, 227.837, 80.614]], [[1537.222, 851.286, 77.444], [1521.146, 845.291, 76.944], [1507.749, 832.473, 77.089], [1524.673, 825.566, 77.448]], [[-1249.319, 5260.054, 50.041], [-1249.495, 5268.634, 50.107], [-1261.703, 5274.791, 50.477], [-1263.157, 5260.642, 50.543]], [[-363.699, 1445.941, 288.879], [-361.162, 1451.124, 288.916], [-367.405, 1453.751, 288.913], [-363.582, 1457.814, 288.885]], [[2272.292, 2990.607, 46.279], [2275.837, 3001.061, 45.934], [2285.261, 2998.482, 46.282], [2287.401, 2988.034, 46.445]]];
mp.events.add("Client_LandslideShowJobMarker", _0x4c1f74 => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  const _0x213993 = getRandomInt(0, landslide_work_poses[_0x4c1f74 - 1].length);
  building_get_material_blip_job = mp.blips.new(1, new mp.Vector3(landslide_work_poses[_0x4c1f74 - 1][_0x213993][0], landslide_work_poses[_0x4c1f74 - 1][_0x213993][1], landslide_work_poses[_0x4c1f74 - 1][_0x213993][2]), {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker = mp.markers.new(2, new mp.Vector3(landslide_work_poses[_0x4c1f74 - 1][_0x213993][0], landslide_work_poses[_0x4c1f74 - 1][_0x213993][1], landslide_work_poses[_0x4c1f74 - 1][_0x213993][2]), 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape = mp.colshapes.newSphere(landslide_work_poses[_0x4c1f74 - 1][_0x213993][0], landslide_work_poses[_0x4c1f74 - 1][_0x213993][1], landslide_work_poses[_0x4c1f74 - 1][_0x213993][2], 2);
  building_get_material_shape.is_building_job = true;
});
mp.events.add("Client_StateObjShowJobMarker", _0x208e5e => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  const _0x3f2434 = getRandomInt(0, objstate_work_poses[_0x208e5e - 1].length);
  building_get_material_blip_job = mp.blips.new(1, new mp.Vector3(objstate_work_poses[_0x208e5e - 1][_0x3f2434][0], objstate_work_poses[_0x208e5e - 1][_0x3f2434][1], objstate_work_poses[_0x208e5e - 1][_0x3f2434][2]), {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker = mp.markers.new(2, new mp.Vector3(objstate_work_poses[_0x208e5e - 1][_0x3f2434][0], objstate_work_poses[_0x208e5e - 1][_0x3f2434][1], objstate_work_poses[_0x208e5e - 1][_0x3f2434][2]), 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape = mp.colshapes.newSphere(objstate_work_poses[_0x208e5e - 1][_0x3f2434][0], objstate_work_poses[_0x208e5e - 1][_0x3f2434][1], objstate_work_poses[_0x208e5e - 1][_0x3f2434][2], 2);
  building_get_material_shape.is_building_job = true;
});
let building_get_material_shape = null;
let building_get_material_marker = null;
mp.events.add("Client_BuildingShowJobMarker", _0x28b140 => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  building_get_material_blip_job = mp.blips.new(1, building_info[_0x28b140 - 1].get_material_pos, {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker = mp.markers.new(2, building_info[_0x28b140 - 1].get_material_pos, 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape = mp.colshapes.newSphere(building_info[_0x28b140 - 1].get_material_pos.x, building_info[_0x28b140 - 1].get_material_pos.y, building_info[_0x28b140 - 1].get_material_pos.z, 2);
  building_get_material_shape.is_building_material = true;
});
const building_driver_positions = [[212.058, -3125.911, 5.79], [-747.013, -2573.523, 13.849], [793.925, -2520.298, 21.51], [-983.615, -2228.454, 8.862], [587.143, -2808.963, 6.053]];
mp.events.add("Client_BuildingShowDriverJobMarker", _0x23fefb => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  building_get_material_blip_job = mp.blips.new(1, new mp.Vector3(building_driver_positions[_0x23fefb - 1][0], building_driver_positions[_0x23fefb - 1][1], building_driver_positions[_0x23fefb - 1][2]), {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker = mp.markers.new(1, new mp.Vector3(building_driver_positions[_0x23fefb - 1][0], building_driver_positions[_0x23fefb - 1][1], building_driver_positions[_0x23fefb - 1][2] - 1), 2, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape = mp.colshapes.newSphere(building_driver_positions[_0x23fefb - 1][0], building_driver_positions[_0x23fefb - 1][1], building_driver_positions[_0x23fefb - 1][2], 2);
  building_get_material_shape.is_driver_building_material = true;
});
mp.events.add("Client_BuildingShowDriverJobMarkerMaterialUnload", _0x3f1477 => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  building_get_material_blip_job = mp.blips.new(1, building_info[_0x3f1477 - 1].set_material_driver, {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker = mp.markers.new(1, new mp.Vector3(building_info[_0x3f1477 - 1].set_material_driver.x, building_info[_0x3f1477 - 1].set_material_driver.y, building_info[_0x3f1477 - 1].set_material_driver.z - 1), 2, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape = mp.colshapes.newSphere(building_info[_0x3f1477 - 1].set_material_driver.x, building_info[_0x3f1477 - 1].set_material_driver.y, building_info[_0x3f1477 - 1].set_material_driver.z, 2);
  building_get_material_shape.is_driver_building_material_unload = true;
});
let building_get_material_shape_job = null;
let building_get_material_marker_job = null;
let building_get_material_blip_job = null;
mp.events.add("Client_ShowBuildingJobDoMarker", (_0x192b90, _0x2dd610) => {
  if (building_get_material_marker_job) {
    building_get_material_marker_job.destroy();
    building_get_material_marker_job = undefined;
  }
  if (building_get_material_shape_job) {
    building_get_material_shape_job.destroy();
    building_get_material_shape_job = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
  building_get_material_blip_job = mp.blips.new(1, building_info[_0x192b90 - 1].set_material_poses[_0x2dd610 - 1], {
    color: 83
  });
  building_get_material_blip_job.setRoute(true);
  building_get_material_marker_job = mp.markers.new(2, building_info[_0x192b90 - 1].set_material_poses[_0x2dd610 - 1], 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  building_get_material_shape_job = mp.colshapes.newSphere(building_info[_0x192b90 - 1].set_material_poses[_0x2dd610 - 1].x, building_info[_0x192b90 - 1].set_material_poses[_0x2dd610 - 1].y, building_info[_0x192b90 - 1].set_material_poses[_0x2dd610 - 1].z, 1);
  building_get_material_shape_job.is_building_job = true;
});
mp.events.add("Client_BuildingHideJobDoMarker", () => {
  if (building_get_material_marker_job) {
    building_get_material_marker_job.destroy();
    building_get_material_marker_job = undefined;
  }
  if (building_get_material_shape_job) {
    building_get_material_shape_job.destroy();
    building_get_material_shape_job = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
});
mp.events.add("Client_BuildingHideJobMarker", () => {
  if (building_get_material_marker) {
    building_get_material_marker.destroy();
    building_get_material_marker = undefined;
  }
  if (building_get_material_shape) {
    building_get_material_shape.destroy();
    building_get_material_shape = undefined;
  }
  if (building_get_material_marker_job) {
    building_get_material_marker_job.destroy();
    building_get_material_marker_job = undefined;
  }
  if (building_get_material_shape_job) {
    building_get_material_shape_job.destroy();
    building_get_material_shape_job = undefined;
  }
  if (building_get_material_blip_job) {
    building_get_material_blip_job.destroy();
    building_get_material_blip_job = undefined;
  }
});
global.is_skill_check = 0;
mp.events.add("playerEnterColshape", _0x4dcbfc => {
  if (mp.colshapes.exists(_0x4dcbfc) && _0x4dcbfc.is_building_material == 1) {
    return mp.events.callRemote("Server_GetBuildingMaterial");
  }
  if (mp.colshapes.exists(_0x4dcbfc) && _0x4dcbfc.is_building_job == 1) {
    StartCustomSound("skill_check", "sounds/skillcheck/skill_check.ogg", 0.2);
    const _0x5281a1 = "{\"show\":true}";
    main_browser.execute("APPS.state.skill_check = " + _0x5281a1);
    mp.gui.cursor.show(true, true);
    is_skill_check = 1;
    localplayer.freezePosition(true);
    return;
  }
  if (mp.colshapes.exists(_0x4dcbfc) && _0x4dcbfc.is_driver_building_material == 1) {
    return mp.events.callRemote("Server_SetBuildingMaterialDriver");
  } else if (mp.colshapes.exists(_0x4dcbfc) && _0x4dcbfc.is_driver_building_material_unload == 1) {
    return mp.events.callRemote("Server_SetBuildingMaterialDriverUnload");
  } else {
    return undefined;
  }
});
mp.events.add("Client_SuccessSkillCheck", () => {
  if (is_skill_check == 1) {
    main_browser.execute("APPS.state.skill_check.show = false;");
    localplayer.freezePosition(false);
    is_freezed = false;
    is_skill_check = 0;
    mp.gui.cursor.show(false, false);
    mp.events.callRemote("Server_SetBuildingMaterial");
  } else if (is_skill_check == 2) {
    main_browser.execute("APPS.state.skill_check.show = false;");
    main_browser.execute("APPS.state.skill_check.show = true;");
    mp.events.callRemote("Server_JailBreakNextStep");
  } else if (is_skill_check == 3) {
    CloseSkillCheck(true);
    mp.events.callRemote("Server_RobberyHouseSuccess");
  } else if (is_skill_check == 4) {
    CloseSkillCheck(true);
    mp.events.callRemote("Server_CandyHouseSuccess");
  } else if (is_skill_check == 5) {
    CloseSkillCheck(true);
    mp.events.callRemote("Server_RobberyATMSuccess");
  } else if (is_skill_check == 6) {
    CloseSkillCheck(true);
    mp.events.callRemote("Server_RobberyJuiceShopSuccess");
  }
});
mp.events.add("Client_FailedSkillCheck", () => {
  if (is_skill_check == 2 || is_skill_check >= 3) {
    CloseSkillCheck();
  }
});
global.CloseSkillCheck = function (_0x15c166 = false) {
  if (is_skill_check == 2 || is_skill_check == 3 || is_skill_check == 4 || is_skill_check == 5 || is_skill_check == 6) {
    main_browser.execute("APPS.state.skill_check.show = false;");
    localplayer.freezePosition(false);
    is_freezed = false;
    if (is_skill_check == 3) {
      main_browser.execute("APPS.state.hud.interact = true;");
    }
    if (is_skill_check == 2) {
      mp.events.callRemote("Server_SkillCheckFailJailBreak");
    } else if (is_skill_check == 3 && _0x15c166 == 0) {
      mp.events.callRemote("Server_SkillCheckFailHouseRobbery");
    } else if (is_skill_check == 4 && _0x15c166 == 0) {
      mp.events.callRemote("Server_SkillCheckFailHouseCandies");
    }
    is_skill_check = 0;
    mp.gui.cursor.show(false, false);
  }
};
global.BuildingTeamOpened = false;
mp.events.add("Client_OpenBuildTeamStats", (_0x51202e, _0x528a30, _0x1747c2) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x19396a = "{\"name\":" + JSON.stringify(_0x51202e) + ",\"players_ids\":[" + _0x528a30 + "],\"level\":[" + _0x1747c2 + "],\"show\":true}";
  main_browser.execute("APPS.state.building_company = " + _0x19396a);
  BuildingTeamOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBuildTeamStats = function () {
  if (BuildingTeamOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.building_company.show = false;");
    BuildingTeamOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ReloadBuildTeamStats", (_0x455962, _0x5eae12, _0x3013b9) => {
  if (BuildingTeamOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.building_company.name = " + JSON.stringify(_0x455962));
    main_browser.execute("APPS.state.building_company.players_ids = [" + _0x5eae12 + "]");
    main_browser.execute("APPS.state.building_company.level = [" + _0x3013b9 + "]");
  }
});
mp.events.add("Client_DeleteFromBuildingTeam", _0x15f231 => {
  if (!(new Date().getTime() - lastCheck < 500) && BuildingTeamOpened != 0) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteFromBuildingTeam", _0x15f231);
  }
});
mp.events.add("Client_BuildingTeamError", _0xc92daa => {
  if (BuildingTeamOpened != 0 || BuildingConstructionOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xc92daa + "');");
  }
});
global.BuildingConstructionOpened = false;
mp.events.add("Client_OpenBuildConstructionStats", _0x5d2664 => {
  EndConversationFinally(true);
  if (GlobalCheck() == 1) {
    return;
  }
  _0x5d2664 = _0x5d2664.map(_0x176c47 => ({
    ..._0x176c47,
    name: TranslateText(_0x176c47.name)
  }));
  const _0xb5939e = "{\"building_construction\":" + JSON.stringify(_0x5d2664) + ",\"show\":true}";
  main_browser.execute("APPS.state.building_cam = " + _0xb5939e);
  mp.events.callRemote("Server_OpenBuildConstructionStatsCorrectly");
  localplayer.freezePosition(true);
  BuildingConstructionOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  SwitchBuildingCamPos(0);
});
let last_cam = null;
let second_cam = null;
global.CloseBuildConstructionStats = function () {
  if (BuildingConstructionOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.building_cam.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    UpdatePositionAC();
    localplayer.position = new mp.Vector3(-1008.704, -478.943, 50.027);
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (second_cam != null) {
      second_cam.destroy();
      second_cam = null;
    }
    mp.events.callRemote("Server_CloseBuildConstructionStats");
    last_cam = null;
    BuildingConstructionOpened = false;
  }
};
mp.events.add("Client_BuyBuildingConstruction", _0x3b55dc => {
  if (!(new Date().getTime() - lastCheck < 500) && BuildingConstructionOpened != 0) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyBuildingConstruction", _0x3b55dc);
  }
});
mp.events.add("Client_SwitchBuildingConstructionCamera", _0x43418a => {
  if (!(new Date().getTime() - lastCheck < 500) && BuildingConstructionOpened != 0) {
    lastCheck = new Date().getTime();
    SwitchBuildingCamPos(_0x43418a);
  }
});
mp.events.add("Client_CloseBuildingConstruction", () => {
  if (BuildingConstructionOpened != 0) {
    CloseBuildConstructionStats();
  }
});
const building_construction_camera_poses = [[-856.302, -827.386, 35.524, -827.896, -801.003, 18.163], [-573.629, -897.836, 81.023, -473.433, -950.689, 37.122], [-34.22, -1110.476, 77.867, -146.135, -1038.54, 35.189], [1266.348, -701.212, 91.991, 1339.594, -738.252, 65.9]];
const building_construction_player_poses = [[-862.948, -832.185, 19.385, 315.107], [-568.236, -887.648, 25.187, 244.723], [-28.702, -1121.01, 26.662, 78.805], [1253.922, -700.589, 64.516, 263.679]];
function SwitchBuildingCamPos(_0x5446d8) {
  _0x5446d8 = parseInt(_0x5446d8);
  _0x5446d8++;
  UpdatePositionAC();
  localplayer.position = new mp.Vector3(building_construction_player_poses[_0x5446d8 - 1][0], building_construction_player_poses[_0x5446d8 - 1][1], building_construction_player_poses[_0x5446d8 - 1][2]);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  if (last_cam != null && last_cam != _0x5446d8) {
    second_cam = mp.cameras.new("default", new mp.Vector3(building_construction_camera_poses[last_cam - 1][0], building_construction_camera_poses[last_cam - 1][1], building_construction_camera_poses[last_cam - 1][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(building_construction_camera_poses[last_cam - 1][3], building_construction_camera_poses[last_cam - 1][4], building_construction_camera_poses[last_cam - 1][5]);
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(building_construction_camera_poses[_0x5446d8 - 1][0], building_construction_camera_poses[_0x5446d8 - 1][1], building_construction_camera_poses[_0x5446d8 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(building_construction_camera_poses[_0x5446d8 - 1][3], building_construction_camera_poses[_0x5446d8 - 1][4], building_construction_camera_poses[_0x5446d8 - 1][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x5446d8 && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 2000, 0, 0);
  } else {
    mp.game.cam.renderScriptCams(true, true, 2000, true, true);
  }
  last_cam = _0x5446d8;
}
let landeslide_timeout;
global.can_call_building_distant = false;
mp.events.add("CanCallDistantBuildingTeam", _0x450c8d => {
  can_call_building_distant = _0x450c8d;
});
mp.events.add("Client_UpdateBuildingStatsHud", (_0x2e9bea, _0x388c6b) => {
  main_browser.execute("APPS.state.hud.building_name = " + JSON.stringify(_0x2e9bea) + ";");
  main_browser.execute("APPS.state.hud.building_count = [" + _0x388c6b + "];");
  main_browser.execute("APPS.state.hud.building_job_show = true;");
});
mp.events.add("Client_HideBuildingStatsHud", () => {
  main_browser.execute("APPS.state.hud.building_job_show = false;");
});
mp.events.add("Client_LandeslideFall", _0x200935 => {
  if (curr_lang == "ru" && mp.storage.data.new_design_show == 1 && playerincapture == 1) {
    return;
  }
  let _0x1f9ec9 = "";
  mp.game.cam.shakeGameplayCam("MEDIUM_EXPLOSION_SHAKE", 0.3);
  if (landeslide_timeout) {
    main_browser.execute("APPS.state.hud.landeslide = false;");
    clearTimeout(landeslide_timeout);
    landeslide_timeout = null;
  }
  if (mp.storage.data.new_hud) {
    if (_0x200935 == 1) {
      _0x1f9ec9 = language["На шоссе Great Ocean сошел оползень"][curr_lang];
    } else if (_0x200935 == 2) {
      _0x1f9ec9 = language["На шоссе Лос-Сантоса сошел оползень"][curr_lang];
    } else if (_0x200935 == 3) {
      _0x1f9ec9 = language["На дороге Mount Haan Road сошел оползень"][curr_lang];
    } else if (_0x200935 == 4) {
      _0x1f9ec9 = language["На подъезде к озеру vinewood сошел оползень"][curr_lang];
    } else if (_0x200935 == 5) {
      _0x1f9ec9 = language["В районе richman сошел оползень"][curr_lang];
    }
    main_browser.execute("APPS.state.hud.landeslide_text = '" + _0x1f9ec9 + "';");
    main_browser.execute("APPS.state.hud.landeslide = true;");
  } else {
    if (_0x200935 == 1) {
      _0x1f9ec9 = language["На шоссе Great Ocean <span>сошел оползень</span>"][curr_lang];
    } else if (_0x200935 == 2) {
      _0x1f9ec9 = language["На шоссе Лос-Сантоса <span>сошел оползень</span>"][curr_lang];
    } else if (_0x200935 == 3) {
      _0x1f9ec9 = language["На дороге Mount Haan Road <span>сошел оползень</span>"][curr_lang];
    } else if (_0x200935 == 4) {
      _0x1f9ec9 = language["На подъезде к озеру vinewood <span>сошел оползень</span>"][curr_lang];
    } else if (_0x200935 == 5) {
      _0x1f9ec9 = language["В районе richman <span>сошел оползень</span>"][curr_lang];
    }
    main_browser.execute("APPS.state.hud.landeslide_text = '" + _0x1f9ec9 + "';");
    main_browser.execute("APPS.state.hud.landeslide = true;");
  }
  PlayAudioSound("CHECKPOINT_MISSED", "HUD_MINI_GAME_SOUNDSET");
  landeslide_timeout = setTimeout(() => {
    landeslide_timeout = null;
    main_browser.execute("APPS.state.hud.landeslide = false;");
  }, 10000);
});