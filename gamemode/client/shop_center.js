let second_cam;
let last_cam = null;
const stores_positions = [[-1314.716, -1410.827, 4.313], [-1319.299, -1409.245, 4.313], [-1323.698, -1408.021, 4.315], [-1326.768, -1407.882, 4.315], [-1331.176, -1408.135, 4.314], [-1335.302, -1408.153, 4.313], [-1339.112, -1409.886, 4.313], [-1343.061, -1411.611, 4.313], [-1346.319, -1415.106, 4.313], [-1326.068, -1415.329, 4.313], [-1329.905, -1419.153, 4.313], [-1334.049, -1421.931, 4.313], [-1338.119, -1432.105, 4.313], [-1336.596, -1438.015, 4.313], [-1332.62, -1452.552, 4.314], [-1331.437, -1457.623, 4.314], [-1329.96, -1462.462, 4.314], [-1328.215, -1467.409, 4.314], [-1337.664, -1466.287, 4.314], [-1335.923, -1469.893, 4.314], [-1333.692, -1474.213, 4.314], [-1330.642, -1480.572, 4.314], [-1329, -1485.084, 4.314], [-1326.99, -1489.502, 4.314], [-1325.842, -1494.7, 4.314], [-1318.678, -1491.837, 4.314], [-1314.742, -1495.486, 4.314], [-1309.719, -1497.496, 4.314], [-1303.868, -1497.646, 4.314], [-1298.493, -1495.733, 4.317], [-1279.312, -1413.151, 4.337], [-1277.044, -1416.924, 4.345], [-1274.588, -1421.033, 4.347], [-1271.875, -1425.276, 4.351], [-1267.131, -1432.089, 4.352], [-1264.549, -1436.218, 4.352], [-1261.653, -1439.413, 4.352], [-1258.217, -1443.873, 4.352], [-1255.83, -1447.364, 4.352], [-1253.335, -1451.458, 4.354], [-1250.518, -1455.448, 4.329], [-1232.882, -1480.807, 4.339], [-1229.635, -1485.033, 4.345], [-1224.58, -1492.286, 4.346], [-1221.902, -1495.862, 4.345], [-1218.78, -1500.254, 4.342], [-1216.845, -1504.071, 4.346], [-1214.714, -1508.846, 4.352], [-1219.358, -1512.911, 4.287], [-1216.803, -1523.056, 4.246], [-1211.38, -1531.641, 4.254], [-1284.925, -1427.879, 4.599], [-1282.025, -1432.93, 4.671], [-1269.214, -1451.752, 4.61], [-1236.893, -1498.682, 4.359], [-1233.187, -1503.389, 4.348]];
const stores_cam_poses = [[-1325.334, -1424.311, 13.697, -1322.479, -1405.173, 4.845], [-1334.134, -1423.239, 14.261, -1343.369, -1407.848, 4.732], [-1340.333, -1406.78, 13.846, -1328.1, -1422.907, 3.1], [-1354.177, -1437.863, 15.363, -1334.455, -1434.405, 4.671], [-1342.616, -1464.18, 9.942, -1328.332, -1459.745, 4.214], [-1328.167, -1467.171, 6.791, -1337.17, -1470.882, 5.782], [-1318.699, -1482.063, 11.214, -1331.254, -1487.726, 4.777], [-1304.664, -1506.515, 10.435, -1306.316, -1494.332, 4.789], [-1281.932, -1423.126, 9.344, -1274.718, -1418.311, 4.91], [-1273.657, -1452.592, 10.179, -1255.922, -1442.113, 5.066], [-1238.833, -1496.566, 12.297, -1226.302, -1487.322, 4.981], [-1229.501, -1506.555, 10.891, -1218.395, -1505.881, 6.241], [-1221.478, -1531.749, 6.916, -1212.668, -1526.242, 4.395], [-1274.842, -1425.615, 6.26, -1293.25, -1436.206, 3.82], [-1262.131, -1446.631, 7.967, -1272.566, -1454.565, 4.075], [-1226.199, -1496.061, 7.584, -1240.998, -1505.017, 3.448]];
const close_stores_cams = [[-1315.722, -1414.942, 6.165, -1314.716, -1410.827, 4.313], [-1320.415, -1413.649, 5.989, -1319.299, -1409.245, 4.313], [-1324.506, -1410.571, 4.852, -1323.698, -1408.021, 4.315], [-1327.087, -1410.132, 4.866, -1326.768, -1407.882, 4.315], [-1331.468, -1409.82, 4.746, -1331.176, -1408.135, 4.314], [-1334.85, -1411.675, 5.46, -1335.302, -1408.153, 4.313], [-1338.102, -1412.509, 5.105, -1339.112, -1409.886, 4.313], [-1341.393, -1414.791, 5.049, -1343.061, -1411.611, 4.313], [-1343.306, -1418.815, 5.62, -1346.319, -1415.106, 4.313], [-1326.443, -1413.876, 4.622, -1326.068, -1415.329, 4.313], [-1330.491, -1417.801, 4.315, -1329.905, -1419.153, 4.313], [-1336.401, -1419.609, 5.016, -1334.049, -1421.931, 4.313], [-1340.816, -1432.28, 5.086, -1338.119, -1432.105, 4.313], [-1339.831, -1438.865, 5.133, -1336.596, -1438.015, 4.313], [-1335.437, -1453.176, 4.928, -1332.62, -1452.552, 4.314], [-1334.9, -1458.492, 5.527, -1331.437, -1457.623, 4.314], [-1332.683, -1462.879, 5.32, -1329.96, -1462.462, 4.314], [-1331.187, -1468.078, 5.179, -1328.215, -1467.409, 4.314], [-1334.074, -1464.515, 5.283, -1337.664, -1466.287, 4.314], [-1331.835, -1468.414, 5.283, -1335.923, -1469.893, 4.314], [-1329.95, -1472.854, 5.088, -1333.692, -1474.213, 4.314], [-1325.502, -1478.346, 5.394, -1330.642, -1480.572, 4.314], [-1323.71, -1483.017, 5.65, -1329, -1485.084, 4.314], [-1322.692, -1487.775, 5.335, -1326.99, -1489.502, 4.314], [-1322.064, -1493.185, 4.998, -1325.842, -1494.7, 4.314], [-1323.333, -1494.104, 5.921, -1318.678, -1491.837, 4.314], [-1317.869, -1499.24, 5.287, -1314.742, -1495.486, 4.314], [-1311.435, -1502.776, 5.764, -1309.719, -1497.496, 4.314], [-1303.637, -1500.939, 5.134, -1303.868, -1497.646, 4.314], [-1296.729, -1499.634, 5.232, -1298.493, -1495.733, 4.317], [-1283.759, -1416.159, 6.761, -1277.377, -1411.767, 3.323], [-1281.322, -1419.927, 6.76, -1274.942, -1415.772, 3.333], [-1278.962, -1423.681, 6.762, -1272.559, -1419.553, 3.341], [-1276.25, -1428.064, 6.761, -1270.012, -1423.94, 3.348], [-1271.562, -1433.047, 6.102, -1265.43, -1431.413, 4.009], [-1268.534, -1439.292, 6.097, -1262.336, -1434.597, 3.349], [-1265.808, -1442.995, 6.095, -1259.214, -1438.296, 3.401], [-1262.835, -1447.279, 6.407, -1255.846, -1442.224, 3.393], [-1260.394, -1450.78, 6.409, -1254.552, -1446.607, 3.829], [-1257.666, -1454.697, 6.408, -1250.897, -1449.803, 3.396], [-1254.961, -1458.529, 6.408, -1248.87, -1454.713, 3.874], [-1237.178, -1483.552, 6.552, -1232.148, -1480.175, 3.952], [-1231.992, -1488.044, 5.947, -1228.411, -1483.99, 4.164], [-1228.602, -1495.31, 6.416, -1223.148, -1491.659, 4.436], [-1226.134, -1499.108, 6.416, -1218.5, -1494.061, 3.389], [-1222.813, -1502.965, 6.189, -1216.582, -1498.591, 3.738], [-1219.323, -1507.16, 6.051, -1215.263, -1503.146, 4.179], [-1218.432, -1506.299, 6.728, -1212.014, -1511.272, 3.801], [-1222.287, -1509.244, 6.728, -1217.353, -1514.931, 3.787], [-1220.942, -1525.744, 6.255, -1215.573, -1522.067, 3.863], [-1215.689, -1534.711, 6.367, -1209.7, -1530.569, 4.094], [-1283.25, -1426.778, 5.192, -1289.028, -1430.424, 3.494], [-1280.3, -1431.997, 5.266, -1282.899, -1433.65, 4.396], [-1267.232, -1450.587, 5.195, -1271.428, -1453.153, 4.291], [-1234.567, -1497.173, 5.048, -1240.69, -1501.207, 3.855], [-1231.052, -1501.757, 5.05, -1238.432, -1507.314, 3.404]];
let stores_owners = [];
let store_counter = 0;
let store_marker = null;
global.at_shop_store = false;
global.at_shop = 0;
let store_action = false;
for (let e = 0; e < stores_positions.length; e++) {
  mp.colshapes.newSphere(stores_positions[e][0], stores_positions[e][1], stores_positions[e][2], 1.5).is_shop_center_shape = e + 1;
}
let story_shop_colshapes = [];
let story_shop_labels = [];
let story_shop_spawned = false;
function SpawnStoryDimensionShops() {
  if (story_shop_spawned) {
    return;
  }
  const _0x310e89 = localplayer.getVariable("REMOTE_ID");
  if (_0x310e89 == null) {
    return;
  }
  const _0x2a2e37 = _0x310e89 + 1;
  for (let _0x2643b7 = 0; _0x2643b7 < stores_positions.length; _0x2643b7++) {
    const _0x233402 = mp.colshapes.newSphere(stores_positions[_0x2643b7][0], stores_positions[_0x2643b7][1], stores_positions[_0x2643b7][2], 1.5, _0x2a2e37);
    _0x233402.is_shop_center_shape = _0x2643b7 + 1;
    story_shop_colshapes.push(_0x233402);
    story_shop_labels.push(mp.labels.new("Store №" + (_0x2643b7 + 1) + "\nClosed", new mp.Vector3(stores_positions[_0x2643b7][0], stores_positions[_0x2643b7][1], stores_positions[_0x2643b7][2]), {
      los: true,
      font: 0,
      drawDistance: 6,
      color: [255, 255, 255, 255],
      dimension: _0x2a2e37
    }));
  }
  story_shop_spawned = true;
}
global.DestroyStoryDimensionShops = function () {
  for (let _0x719a89 = 0; _0x719a89 < story_shop_colshapes.length; _0x719a89++) {
    if (story_shop_colshapes[_0x719a89] && mp.colshapes.exists(story_shop_colshapes[_0x719a89])) {
      story_shop_colshapes[_0x719a89].destroy();
    }
  }
  for (let _0x38c5ed = 0; _0x38c5ed < story_shop_labels.length; _0x38c5ed++) {
    if (story_shop_labels[_0x38c5ed] && mp.labels.exists(story_shop_labels[_0x38c5ed])) {
      story_shop_labels[_0x38c5ed].destroy();
    }
  }
  story_shop_colshapes = [];
  story_shop_labels = [];
  story_shop_spawned = false;
  if (at_shop) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_shop = 0;
  }
};
global.UpdateStoryDimensionShops = function () {
  if (loggedin && story_quest_progress > 0 && localplayer.dimension == localplayer.getVariable("REMOTE_ID") + 1) {
    SpawnStoryDimensionShops();
  }
};
mp.events.add("playerEnterColshape", _0x1ee8eb => {
  if (mp.colshapes.exists(_0x1ee8eb) && _0x1ee8eb.is_shop_center_shape > 0) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_shop = _0x1ee8eb.is_shop_center_shape;
    return;
  }
});
mp.events.add("playerExitColshape", _0x33298e => {
  if (_0x33298e.is_shop_center_shape > 0) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_shop = 0;
    return;
  }
});
const STORES_REVERSE_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23, 24, 51, 52, 53, 54, 55];
function CreateStoresMarker() {
  let _0x24e41f;
  if (store_marker != null) {
    store_marker.destroy();
    store_marker = null;
  }
  _0x24e41f = stores_owners[store_counter] ? [255, 30, 0, 255] : [255, 225, 0, 255];
  store_marker = mp.markers.new(2, new mp.Vector3(stores_positions[store_counter][0], stores_positions[store_counter][1], stores_positions[store_counter][2] + 1), 2.5, {
    rotation: new mp.Vector3(180, 0, 0),
    color: _0x24e41f,
    visible: true,
    dimension: 0
  });
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  let _0x57a466 = 0;
  if (store_counter <= 4) {
    _0x57a466 = 0;
  } else if (store_counter >= 5 && store_counter <= 8) {
    _0x57a466 = 1;
  } else if (store_counter >= 9 && store_counter <= 11) {
    _0x57a466 = 2;
  } else if (store_counter >= 12 && store_counter <= 13) {
    _0x57a466 = 3;
  } else if (store_counter >= 14 && store_counter <= 17) {
    _0x57a466 = 4;
  } else if (store_counter >= 18 && store_counter <= 20) {
    _0x57a466 = 5;
  } else if (store_counter >= 21 && store_counter <= 24) {
    _0x57a466 = 6;
  } else if (store_counter >= 25 && store_counter <= 29) {
    _0x57a466 = 7;
  }
  if (last_cam != null && last_cam != _0x57a466) {
    second_cam = mp.cameras.new("default", new mp.Vector3(stores_cam_poses[last_cam][0], stores_cam_poses[last_cam][1], stores_cam_poses[last_cam][2]), new mp.Vector3(0, 0, 0), 60);
    second_cam.pointAtCoord(stores_cam_poses[last_cam][3], stores_cam_poses[last_cam][4], stores_cam_poses[last_cam][5]);
  }
  if (store_counter <= 4) {
    _0x57a466 = 0;
  } else if (store_counter >= 5 && store_counter <= 8) {
    _0x57a466 = 1;
  } else if (store_counter >= 9 && store_counter <= 11) {
    _0x57a466 = 2;
  } else if (store_counter >= 12 && store_counter <= 13) {
    _0x57a466 = 3;
  } else if (store_counter >= 14 && store_counter <= 17) {
    _0x57a466 = 4;
  } else if (store_counter >= 18 && store_counter <= 20) {
    _0x57a466 = 5;
  } else if (store_counter >= 21 && store_counter <= 24) {
    _0x57a466 = 6;
  } else if (store_counter >= 25 && store_counter <= 29) {
    _0x57a466 = 7;
  } else if (store_counter >= 30 && store_counter <= 33) {
    _0x57a466 = 8;
  } else if (store_counter >= 34 && store_counter <= 40) {
    _0x57a466 = 9;
  } else if (store_counter >= 41 && store_counter <= 44) {
    _0x57a466 = 10;
  } else if (store_counter >= 45 && store_counter <= 48) {
    _0x57a466 = 11;
  } else if (store_counter >= 49 && store_counter <= 50) {
    _0x57a466 = 12;
  } else if (store_counter >= 51 && store_counter <= 52) {
    _0x57a466 = 13;
  } else if (store_counter == 53) {
    _0x57a466 = 14;
  } else if (store_counter >= 54 && store_counter <= 55) {
    _0x57a466 = 15;
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(stores_cam_poses[_0x57a466][0], stores_cam_poses[_0x57a466][1], stores_cam_poses[_0x57a466][2]), new mp.Vector3(0, 0, 0), 60);
  localcamera.pointAtCoord(stores_cam_poses[_0x57a466][3], stores_cam_poses[_0x57a466][4], stores_cam_poses[_0x57a466][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x57a466 && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 1000, false, false);
  } else {
    mp.game.cam.renderScriptCams(true, true, 1000, true, true);
  }
  last_cam = _0x57a466;
}
mp.events.add("Stores_Buy_Start", (_0x13ea87, _0x5d9b64) => {
  EndConversationFinally();
  if (GlobalCheck() != 1) {
    stores_owners = _0x13ea87;
    store_counter = _0x5d9b64;
    at_shop_store = true;
    mp.events.call("Disablechat");
    localplayer.freezePosition(true);
    store_action = false;
    CreateStoresMarker();
    mp.keys.bind(37, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && store_action != 1 && !!at_shop_store) {
        lastCheck = new Date().getTime();
        mp.console.logInfo("store_counter: " + store_counter);
        if (STORES_REVERSE_LIST.includes(store_counter)) {
          store_counter++;
        } else {
          store_counter--;
        }
        if (store_counter < 0) {
          store_counter = stores_positions.length - 1;
        }
        if (store_counter >= stores_positions.length) {
          store_counter = 0;
        }
        CreateStoresMarker();
      }
    });
    mp.keys.bind(39, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && store_action != 1 && !!at_shop_store) {
        lastCheck = new Date().getTime();
        mp.console.logInfo("store_counter: " + store_counter);
        if (STORES_REVERSE_LIST.includes(store_counter)) {
          store_counter--;
        } else {
          store_counter++;
        }
        if (store_counter < 0) {
          store_counter = stores_positions.length - 1;
        }
        if (store_counter >= stores_positions.length) {
          store_counter = 0;
        }
        CreateStoresMarker();
      }
    });
    mp.keys.bind(40, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && store_action != 1 && !!at_shop_store) {
        lastCheck = new Date().getTime();
        CloseStoreBought();
      }
    });
    mp.keys.bind(38, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && store_action != 1 && at_shop_store) {
        lastCheck = new Date().getTime();
        if (stores_owners[store_counter]) {
          return mp.game.ui.notifications.show(language["Дaннoe мecтo yжe apeндoвaнo"][curr_lang], false, 0, 6);
        }
        store_action = true;
        if (second_cam != null) {
          second_cam.destroy();
          second_cam = null;
        }
        second_cam = mp.cameras.new("default", new mp.Vector3(close_stores_cams[store_counter][0], close_stores_cams[store_counter][1], close_stores_cams[store_counter][2]), new mp.Vector3(0, 0, 0), 40);
        second_cam.pointAtCoord(close_stores_cams[store_counter][3], close_stores_cams[store_counter][4], close_stores_cams[store_counter][5]);
        second_cam.setActiveWithInterp(localcamera.handle, 1500, 0, 0);
        mp.events.callRemote("StoreArendProcess", store_counter);
      }
    });
    HintShow(language["Выберите место, используя стрелки на клавиатуре(стрелка вверх - выбор)"][curr_lang]);
  }
});
mp.events.add("UpdateStoreArend", (_0x187c8e, _0xfb1f70) => {
  stores_owners = _0xfb1f70;
  if (_0x187c8e == store_counter) {
    CreateStoresMarker();
  }
});
mp.events.add("ArendStoreFinish", () => {
  CloseStoreBought();
});
global.CloseStoreBought = function () {
  if (at_shop_store) {
    mp.events.call("Enablechat");
    at_shop_store = false;
    mp.keys.unbind(37, false);
    mp.keys.unbind(39, false);
    mp.keys.unbind(40, false);
    if (is_admin !== true) {
      mp.keys.unbind(38, false);
    }
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (store_marker != null) {
      store_marker.destroy();
      store_marker = null;
    }
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (second_cam != null) {
      second_cam.destroy();
      second_cam = null;
    }
    last_cam = null;
    mp.events.callRemote("ServerFinishStoreBought");
    HintClose();
  }
};
mp.events.add("Client_Store_Action_Reset", () => {
  store_action = false;
  if (localcamera && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 1500, 0, 0);
  }
});
const black_stores_positions = [[-79.966, -1241.75, 29.11], [-80.043, -1238.556, 29.11], [-74.577, -1241.607, 29.174], [-72.139, -1237.688, 29.076], [-66.257, -1236.395, 28.993], [-64.082, -1227.357, 28.829], [-56.489, -1225.532, 28.733], [-55.826, -1215.387, 28.707], [-61.568, -1212.296, 28.512], [-64.056, -1205.618, 28.107], [-68.762, -1205.765, 27.949], [-70.596, -1199.64, 27.675], [-40.479, -1217.827, 29.335], [-38.404, -1214.219, 29.334], [-32.403, -1215.559, 29.335], [-27.788, -1214.154, 29.34], [-25.856, -1215.676, 29.337], [-25.457, -1221.589, 29.335], [-25.55, -1227.995, 29.335], [-25.6, -1233.901, 29.335], [-25.841, -1239.547, 29.335], [-26.644, -1246.834, 29.335], [-28.635, -1250.249, 29.234], [-34.215, -1249.76, 29.32], [-40.389, -1252.727, 29.273], [-40.375, -1246.179, 29.335], [-40.243, -1236.115, 29.335]];
const black_stores_cam_poses = [[-83.625, -1240.544, 30.685, -72.817, -1240.043, 28.11], [-73.124, -1239.202, 31.908, -61.093, -1231.427, 28.566], [-54.444, -1221.577, 31.413, -62.992, -1203.351, 27.053], [-61.751, -1209.417, 31.804, -73.681, -1199.806, 26.662], [-36.232, -1225.575, 31.29, -37.51, -1211.028, 28.503], [-32.058, -1225.432, 31.836, -21.544, -1213.228, 28.644], [-36.463, -1231.426, 32.545, -19.823, -1233.917, 28.304], [-33.948, -1238.251, 32.189, -26.648, -1256.835, 28.197], [-33.936, -1249.901, 31.105, -43.398, -1249.654, 28.959], [-37.303, -1242.202, 32.058, -41.009, -1235.986, 29.405]];
const black_close_stores_cams = [[-79.075, -1238.81, 29.765, -78.27, -1241.863, 28.785], [-80.93, -1240.626, 29.845, -78.94, -1238.3, 28.805], [-75.273, -1238.482, 29.763, -73.591, -1242.06, 28.995], [-71.043, -1241.068, 30.186, -73.21, -1236.098, 28.572], [-69.175, -1233.241, 29.626, -65.882, -1236.734, 28.78], [-63.525, -1230.068, 29.594, -64.882, -1227.135, 28.761], [-58.812, -1223.8, 28.962, -54.527, -1227.296, 28.099], [-58.4, -1216.374, 29.355, -55.443, -1214.514, 28.627], [-59.277, -1211.487, 29.168, -65.308, -1212.58, 27.703], [-66.18, -1206.597, 28.86, -63.149, -1205.019, 27.849], [-67.374, -1204.292, 28.605, -69.3, -1205.809, 27.763], [-71.872, -1201.703, 28.328, -69.871, -1197.066, 27.281], [-38.117, -1218.745, 30.807, -41.3, -1217.659, 29.155], [-36.869, -1216.597, 29.989, -38.736, -1213.7, 29.123], [-33.059, -1217.647, 30.302, -32.396, -1214.916, 29.155], [-27.95, -1216.615, 30.002, -27.913, -1213.817, 29.118], [-28.241, -1215.694, 29.999, -25.385, -1215.317, 29.119], [-27.847, -1220.745, 29.99, -24.759, -1221.754, 29.119], [-28.366, -1227.326, 30.702, -25.225, -1227.532, 29.153], [-28.525, -1233.54, 29.989, -23.008, -1234.199, 28.335], [-27.992, -1238.311, 30.561, -25.477, -1239.707, 29.084], [-29.644, -1246.56, 30.713, -26.297, -1246.479, 29.119], [-29.236, -1247.802, 29.983, -28.511, -1250.623, 29.037], [-33.257, -1247.033, 29.988, -34.001, -1250.171, 29.108], [-37.71, -1252.536, 29.941, -40.801, -1252.612, 29.112], [-38.241, -1247.358, 29.99, -40.915, -1246.13, 29.119], [-38.787, -1237.808, 29.992, -41.41, -1235.657, 28.694]];
let black_stores_owners = [];
let black_store_counter = 0;
let black_store_marker = null;
global.black_at_shop_store = false;
global.black_at_shop = 0;
let black_store_action = false;
for (let e = 0; e < black_stores_positions.length; e++) {
  mp.colshapes.newSphere(black_stores_positions[e][0], black_stores_positions[e][1], black_stores_positions[e][2], 1).is_black_shop_center_shape = e + 1;
}
function CreateBlackStoresMarker() {
  let _0x2d9e91;
  if (black_store_marker != null) {
    black_store_marker.destroy();
    black_store_marker = null;
  }
  _0x2d9e91 = black_stores_owners[black_store_counter] ? [255, 30, 0, 255] : [255, 225, 0, 255];
  black_store_marker = mp.markers.new(2, new mp.Vector3(black_stores_positions[black_store_counter][0], black_stores_positions[black_store_counter][1], black_stores_positions[black_store_counter][2] + 1), 2.5, {
    rotation: new mp.Vector3(180, 0, 0),
    color: _0x2d9e91,
    visible: true,
    dimension: 0
  });
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  let _0x4196e0 = 0;
  if (black_store_counter <= 4 || black_store_counter >= 5 && black_store_counter <= 9 || black_store_counter >= 10 && black_store_counter <= 14) {
    _0x4196e0 = 0;
  }
  if (last_cam != null && last_cam != _0x4196e0) {
    second_cam = mp.cameras.new("default", new mp.Vector3(black_stores_cam_poses[last_cam][0], black_stores_cam_poses[last_cam][1], black_stores_cam_poses[last_cam][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(black_stores_cam_poses[last_cam][3], black_stores_cam_poses[last_cam][4], black_stores_cam_poses[last_cam][5]);
  }
  if (black_store_counter <= 3) {
    _0x4196e0 = 0;
  } else if (black_store_counter >= 4 && black_store_counter <= 6) {
    _0x4196e0 = 1;
  } else if (black_store_counter >= 7 && black_store_counter <= 9) {
    _0x4196e0 = 2;
  } else if (black_store_counter >= 10 && black_store_counter <= 11) {
    _0x4196e0 = 3;
  } else if (black_store_counter >= 12 && black_store_counter <= 14) {
    _0x4196e0 = 4;
  } else if (black_store_counter >= 15 && black_store_counter <= 17) {
    _0x4196e0 = 5;
  } else if (black_store_counter >= 18 && black_store_counter <= 20) {
    _0x4196e0 = 6;
  } else if (black_store_counter >= 21 && black_store_counter <= 23) {
    _0x4196e0 = 7;
  } else if (black_store_counter >= 24 && black_store_counter <= 25) {
    _0x4196e0 = 8;
  } else if (black_store_counter == 26) {
    _0x4196e0 = 9;
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(black_stores_cam_poses[_0x4196e0][0], black_stores_cam_poses[_0x4196e0][1], black_stores_cam_poses[_0x4196e0][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(black_stores_cam_poses[_0x4196e0][3], black_stores_cam_poses[_0x4196e0][4], black_stores_cam_poses[_0x4196e0][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x4196e0 && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 1000, false, false);
  } else {
    mp.game.cam.renderScriptCams(true, true, 1000, true, true);
  }
  last_cam = _0x4196e0;
}
mp.events.add("playerEnterColshape", _0x7bd82a => {
  if (mp.colshapes.exists(_0x7bd82a) && _0x7bd82a.is_black_shop_center_shape > 0) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    black_at_shop = _0x7bd82a.is_black_shop_center_shape;
    return;
  }
});
mp.events.add("playerExitColshape", _0x5ca1ba => {
  if (_0x5ca1ba.is_black_shop_center_shape > 0) {
    main_browser.execute("APPS.state.hud.interact = false;");
    black_at_shop = 0;
    return;
  }
});
mp.events.add("Client_Black_Stores_Buy_Start", _0x46b6b5 => {
  EndConversationFinally();
  if (GlobalCheck() != 1) {
    black_stores_owners = _0x46b6b5;
    black_store_counter = 0;
    black_at_shop_store = true;
    mp.events.call("Disablechat");
    localplayer.freezePosition(true);
    black_store_action = false;
    CreateBlackStoresMarker();
    mp.keys.bind(37, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && black_store_action != 1 && !!black_at_shop_store) {
        lastCheck = new Date().getTime();
        if (black_store_counter - 1 < 0) {
          black_store_counter = black_stores_positions.length - 1;
        } else {
          black_store_counter--;
        }
        CreateBlackStoresMarker();
      }
    });
    mp.keys.bind(39, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && black_store_action != 1 && !!black_at_shop_store) {
        lastCheck = new Date().getTime();
        if (black_store_counter + 1 >= black_stores_positions.length) {
          black_store_counter = 0;
        } else {
          black_store_counter++;
        }
        CreateBlackStoresMarker();
      }
    });
    mp.keys.bind(40, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && black_store_action != 1 && !!black_at_shop_store) {
        lastCheck = new Date().getTime();
        CloseBlackStoreBought();
      }
    });
    mp.keys.bind(38, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && black_store_action != 1 && black_at_shop_store) {
        lastCheck = new Date().getTime();
        if (black_stores_owners[black_store_counter]) {
          return mp.game.ui.notifications.show(language["Дaннoe мecтo yжe apeндoвaнo"][curr_lang], false, 0, 6);
        }
        black_store_action = true;
        if (second_cam != null) {
          second_cam.destroy();
          second_cam = null;
        }
        second_cam = mp.cameras.new("default", new mp.Vector3(black_close_stores_cams[black_store_counter][0], black_close_stores_cams[black_store_counter][1], black_close_stores_cams[black_store_counter][2]), new mp.Vector3(0, 0, 0), 40);
        second_cam.pointAtCoord(black_close_stores_cams[black_store_counter][3], black_close_stores_cams[black_store_counter][4], black_close_stores_cams[black_store_counter][5]);
        second_cam.setActiveWithInterp(localcamera.handle, 1500, 0, 0);
        mp.events.callRemote("Server_BlackStoreArendProcess", black_store_counter);
      }
    });
    HintShow(language["Выберите место, используя стрелки на клавиатуре(стрелка вверх - выбор)"][curr_lang]);
  }
});
mp.events.add("Client_BlackUpdateStoreArend", (_0x1c6ac4, _0x5b8d6d) => {
  black_stores_owners = _0x5b8d6d;
  if (_0x1c6ac4 == black_store_counter) {
    CreateBlackStoresMarker();
  }
});
mp.events.add("Client_Black_ArendStoreFinish", () => {
  CloseBlackStoreBought();
});
global.CloseBlackStoreBought = function () {
  if (black_at_shop_store) {
    mp.events.call("Enablechat");
    black_at_shop_store = false;
    mp.keys.unbind(37, false);
    mp.keys.unbind(39, false);
    mp.keys.unbind(40, false);
    if (is_admin !== true) {
      mp.keys.unbind(38, false);
    }
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (black_store_marker != null) {
      black_store_marker.destroy();
      black_store_marker = null;
    }
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (second_cam != null) {
      second_cam.destroy();
      second_cam = null;
    }
    last_cam = null;
    mp.events.callRemote("Server_BlackFinishStoreBought");
    HintClose();
  }
};
mp.events.add("Client_Black_Store_Action_Reset", () => {
  black_store_action = false;
  if (localcamera && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 1500, 0, 0);
  }
});
global.CraftItemOpened = false;
mp.events.add("Client_OpenCraftItems", (_0x3acf9a, _0x3d3442, _0x2266a9, _0x370c80) => {
  CloseInv();
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x1a0e9 = 0;
  if (localplayer.model != 1885233650) {
    _0x1a0e9 = 1;
  }
  const _0x488be2 = "{\"my_items\":" + JSON.stringify(_0x3acf9a) + ",\"gender\":" + _0x1a0e9 + ",\"show\":true}";
  main_browser.execute("APPS.state.creating_objects = " + _0x488be2);
  if (isNaN(parseInt(_0x3d3442))) {
    if (_0x2266a9) {
      main_browser.execute("this.AppComponents.creating_objects.craftReviewItemById(" + _0x2266a9 + ")");
    } else if (_0x370c80) {
      main_browser.execute("APPS.state.creating_objects.upgrade_trading_shop_item_id = " + _0x370c80.item_id);
      main_browser.execute("APPS.state.creating_objects.my_items_for_upgrade_trading_shop = " + JSON.stringify(_0x370c80.my_items));
      main_browser.execute("this.AppComponents.creating_objects.showUpgradeTradingShopModal()");
    }
  } else {
    main_browser.execute("this.AppComponents.creating_objects.setSelectedItem(" + _0x3d3442 + ")");
  }
  CraftItemOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
global.CloseCraftItemMenu = function (_0x2bbaff = true) {
  if (CraftItemOpened && loggedin && !chatActive) {
    if (_0x2bbaff) {
      main_browser.execute("APPS.state.creating_objects.show = false");
      CraftItemOpened = false;
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
    } else {
      main_browser.execute("this.AppComponents.creating_objects.tryClose()");
    }
  }
};
mp.events.add("Client_CloseCraftMenu", (_0x4401bc = true) => {
  CloseCraftItemMenu(_0x4401bc);
});
mp.events.add("Client_OpenCraftResultScreen", _0x143217 => {
  main_browser.execute("this.AppComponents.creating_objects.craftEnded(" + _0x143217 + ")");
});
mp.events.add("Client_CraftUniqueItemFromNPC", (_0x302f2b, _0x3cf08e = 0) => {
  if (CraftItemOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CraftUniqueItemFromNPC", _0x302f2b, _0x3cf08e);
    }
  }
});
mp.events.add("Client_ClothesUpItemFromCraft", _0xb61967 => {
  if (CraftItemOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ClothesUpItemFromCraft", _0xb61967);
    }
  }
});
mp.events.add("Client_OpenUpgradeTradingShopItem", _0x2916d3 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OrderCraftItems", null, null, _0x2916d3);
    }
  }
});
mp.events.add("Client_UpgradeTradingShop", _0x58f2e8 => {
  if (CraftItemOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_UpgradeTradingShop", _0x58f2e8);
    }
  }
});
mp.events.add("Client_UpgradeTradingShopSuccess", (_0xa9162c, _0x532f93) => {
  if (CraftItemOpened) {
    main_browser.execute("this.AppComponents.creating_objects.upgradeTradingShopSuccess()");
    setTimeout(() => {
      ShowNotification(TranslateText("Вы успешно увеличили количество слотов для этой лавки: с {0} до {1}", _0xa9162c, _0x532f93), 25);
    }, 3500);
  }
});