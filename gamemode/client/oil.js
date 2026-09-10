const oil_cam_poses = [[1509.112, -2522.161, 64.336, 1505.281, -2592.774, 50.448], [1706.808, -1444.574, 122.478, 1672.879, -1435.161, 112.567], [1476.69, -1611.533, 78.897, 1496.829, -1547.135, 71.21], [1774.555, -1354.208, 106.699, 1834.022, -1308.854, 95.825], [1851.471, -1202.287, 100.944, 1823.652, -1200.081, 94.039], [1876.673, -1024.04, 84.77, 1875.57, -1036.14, 83.069], [1532.039, -2190.294, 84.952, 1518.093, -2171.841, 81.413], [1700.709, -1931.919, 120.602, 1653.926, -1847.321, 107.985], [1436.087, -2310.136, 75.437, 1371.123, -2327.684, 60.232], [1376.919, -2228.504, 70.926, 1347.36, -2198.047, 58.817], [1448.209, -2104.025, 64.612, 1407.472, -2076.079, 53.587], [1545.736, -2062.873, 89.072, 1514.304, -2072.673, 81.08], [1578.675, -1842.792, 104.253, 1532.601, -1909.108, 81.367], [1596.122, -1778.481, 97.01, 1533.89, -1773.587, 86.235], [1577.153, -1608.972, 100.382, 1442.063, -1512.078, 61.736]];
let oil_get_timeout;
global.OilStationOpened = false;
mp.events.add("Client_OpenOilStation", (_0x1bb1ab, _0x42d308, _0x169914, _0x660d08, _0x107643, _0x9cc079, _0x34185b, _0xe4227f) => {
  main_browser.execute("APPS.state.oil_station.fam_name = '" + _0x42d308 + "'");
  main_browser.execute("APPS.state.oil_station.fam_collect_profit_access = " + _0x169914);
  main_browser.execute("APPS.state.oil_station.oil_profit_balance = '" + _0x660d08 + "'");
  main_browser.execute("APPS.state.oil_station.fill = " + _0x107643);
  main_browser.execute("APPS.state.oil_station.workers = " + _0x9cc079);
  main_browser.execute("APPS.state.oil_station.count = 0");
  main_browser.execute("APPS.state.oil_station.get_success = false;");
  main_browser.execute("APPS.state.oil_station.get_id = 0;");
  main_browser.execute("APPS.state.oil_station.is_faster = " + _0x34185b + ";");
  main_browser.execute("APPS.state.oil_station.masterlevel = " + _0xe4227f + ";");
  main_browser.execute("APPS.state.oil_station.show = true;");
  localplayer.freezePosition(true);
  OilStationOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  localcamera = mp.cameras.new("default", new mp.Vector3(oil_cam_poses[_0x1bb1ab - 1][0], oil_cam_poses[_0x1bb1ab - 1][1], oil_cam_poses[_0x1bb1ab - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(oil_cam_poses[_0x1bb1ab - 1][3], oil_cam_poses[_0x1bb1ab - 1][4], oil_cam_poses[_0x1bb1ab - 1][5]);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 2000, true, true);
});
global.CloseOilStation = function () {
  if (OilStationOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.oil_station.show = false;");
    localplayer.freezePosition(false);
    is_freezed = false;
    OilStationOpened = false;
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    mp.events.callRemote("Server_CloseOilStation");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_OilSuccesMaterial", (_0x1ed388, _0x580e26) => {
  if (OilStationOpened && loggedin && !chatActive) {
    if (oil_get_timeout) {
      main_browser.execute("APPS.state.oil_station.get_success = false;");
      clearTimeout(oil_get_timeout);
      oil_get_timeout = null;
    }
    main_browser.execute("APPS.state.oil_station.count = 0");
    main_browser.execute("APPS.state.oil_station.fill = " + _0x580e26);
    main_browser.execute("APPS.state.oil_station.get_id = " + _0x1ed388);
    main_browser.execute("APPS.state.oil_station.get_success = true;");
    oil_get_timeout = setTimeout(() => {
      oil_get_timeout = null;
      main_browser.execute("APPS.state.oil_station.get_success = false;");
    }, 5000);
  }
});
mp.events.add("Client_UpdateOilOwner", _0x44bce2 => {
  if (OilStationOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.oil_station.fam_name = '" + _0x44bce2 + "'");
  }
});
mp.events.add("Client_UpdateOilProfitBalance", _0x489e83 => {
  if (OilStationOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.oil_station.oil_profit_balance = " + _0x489e83);
  }
});
mp.events.add("Client_OilStationMoneyInteract", () => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OilStationMoneyInteract");
  }
});
mp.events.add("Client_GetOilFinish", _0x896de5 => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    AFK_sec = 0;
    mp.events.callRemote("Server_GetOilFinish", _0x896de5);
  }
});
mp.events.add("Oil_Error", _0x1ef8b5 => {
  if (OilStationOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x1ef8b5 + "');");
  }
});
const oil_poses = [[1500.471, -2536.634, 55.721, 20], [1695.168, -1436.409, 112.558, 20], [1487.422, -1601.153, 72.169, 20], [1799.495, -1349.67, 99.336, 20], [1841.111, -1196.913, 92.224, 20], [1878.807, -1038.626, 79.115, 20], [1529.976, -2178.969, 77.418, 20], [1699.288, -1924.831, 115.204, 20], [1421.979, -2305.969, 66.847, 20], [1366.167, -2200.036, 60.227, 20], [1440.641, -2089.631, 54.688, 20], [1526.594, -2059.579, 77.273, 20], [1564.373, -1851.123, 92.441, 20], [1583.439, -1769.299, 88.37, 20], [1569.636, -1594.023, 90.731, 20]];
for (let e = 0; e < oil_poses.length; e++) {
  let t = mp.colshapes.newSphere(oil_poses[e][0], oil_poses[e][1], oil_poses[e][2], oil_poses[e][3]);
  t.index = e + 1;
  t.oil_shape = true;
}
let oil_blips;
let oil_marker;
let oil_colshape;
global.at_oil_shape = 0;
mp.events.add("playerEnterColshape", _0x482ba0 => {
  if (mp.colshapes.exists(_0x482ba0) && _0x482ba0.oil_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_oil_shape = _0x482ba0.index;
    return;
  }
});
mp.events.add("playerExitColshape", _0x35d881 => {
  if (mp.colshapes.exists(_0x35d881) && _0x35d881.oil_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_oil_shape = 0;
    return;
  }
});
mp.events.add("Client_Show_Oil_Trace", () => {
  if (oil_marker) {
    oil_marker.destroy();
    oil_marker = null;
  }
  if (oil_colshape) {
    oil_colshape.destroy();
    oil_colshape = null;
  }
  if (oil_blips) {
    oil_blips.destroy();
    oil_blips = null;
  }
  oil_marker = mp.markers.new(1, new mp.Vector3(2907.657, 4366.023, 49.337), 5, {
    rotation: new mp.Vector3(0, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  oil_colshape = mp.colshapes.newCircle(2907.657, 4366.023, 5);
  oil_colshape.is_oil_trace = true;
  oil_blips = mp.blips.new(1, new mp.Vector3(2907.657, 4366.023, 50.337), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  oil_blips.setRoute(true);
});
mp.events.add("playerEnterColshape", _0x350052 => {
  if (mp.colshapes.exists(_0x350052) && _0x350052.is_oil_trace == 1) {
    mp.events.callRemote("Server_Oil_Passed_Finish");
  }
});
mp.events.add("Client_Oil_Markers_Destroy", () => {
  if (oil_marker) {
    oil_marker.destroy();
    oil_marker = null;
  }
  if (oil_colshape) {
    oil_colshape.destroy();
    oil_colshape = null;
  }
  if (oil_blips) {
    oil_blips.destroy();
    oil_blips = null;
  }
});
global.OilJobOpened = false;
mp.events.add("Client_OilJobBrowser", (_0x373add, _0x3c300) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  OilJobOpened = true;
  const _0xd2a1ec = "{\"count\":" + _0x3c300 + ",\"job\":" + _0x373add + ",\"show\":true}";
  main_browser.execute("APPS.state.work_oil = " + _0xd2a1ec);
  mp.gui.cursor.show(true, true);
});
mp.events.add("OilJobChangeButton", _0x215635 => {
  if (OilJobOpened) {
    main_browser.execute("APPS.state.work_oil.job = " + _0x215635);
  }
});
mp.events.add("Client_OilJobEvent", () => {
  if (OilJobOpened) {
    if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OilJobEvent");
    }
  }
});
mp.events.add("Oil_Work_Error", _0x4e57cf => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage(\"" + _0x4e57cf + "\");");
});
global.CloseOilBrowser = function () {
  if (OilJobOpened) {
    OilJobOpened = false;
    main_browser.execute("APPS.state.work_oil.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.is_at_oil_job = false;
mp.events.add("Client_InOilJob", _0x14ea46 => {
  is_at_oil_job = _0x14ea46;
});