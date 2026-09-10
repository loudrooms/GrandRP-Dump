let blipinfo;
global.FireJobOpened = false;
global.FireListOpened = false;
global.pushed_status = 0;
let render_water_drop_id = [];
let render_water_drop_object = [];
let fireJobData = {
  fire_id: -1,
  fire_object_list: [],
  fire_push_zoneid: undefined,
  last_tick_upd_zone: 0
};
const gameplayCamera = mp.cameras.new("gameplay");
function loadPtfxAsset(_0x258c38, _0x2786e5, _0x4a9f5e = 100) {
  if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x258c38)) {
    _0x2786e5(true);
    return;
  }
  mp.game.streaming.requestNamedPtfxAsset(_0x258c38);
  let _0x48ed04 = 0;
  const _0x197bb4 = () => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x258c38)) {
      _0x2786e5(true);
    } else if (_0x48ed04++ >= _0x4a9f5e) {
      _0x2786e5(false);
    } else {
      setTimeout(_0x197bb4, 0);
    }
  };
  setTimeout(_0x197bb4, 0);
}
function clearFireViewEffects() {
  if (fireJobData.fire_object_list) {
    for (let _0x1bd8aa = 0; _0x1bd8aa < fireJobData.fire_object_list.length; _0x1bd8aa++) {
      const _0x5116d6 = fireJobData.fire_object_list[_0x1bd8aa];
      if (_0x5116d6 && _0x5116d6.particle) {
        const _0x374b52 = _0x5116d6.particle;
        if (mp.game.graphics.doesParticleFxLoopedExist(_0x374b52)) {
          mp.game.graphics.stopParticleFxLooped(_0x374b52, false);
        }
        mp.game.graphics.removeParticleFx(_0x374b52, true);
      }
      if (_0x5116d6 && _0x5116d6.pos_x) {
        mp.game.fire.stopFireInRange(_0x5116d6.pos_x, _0x5116d6.pos_y, _0x5116d6.pos_z, 200);
      }
    }
    fireJobData.fire_id = -1;
    fireJobData.fire_object_list = [];
  }
}
function applyFireView(_0x532da3, _0x28b2da, _0x1ef231) {
  if (!Array.isArray(_0x1ef231)) {
    return;
  }
  const _0x16008c = _0x532da3 == 13 ? fire_job_global[_0x28b2da] : fire_job[_0x532da3];
  if (_0x16008c) {
    for (let _0x20dc04 = 0; _0x20dc04 < _0x1ef231.length; _0x20dc04++) {
      if (!_0x1ef231[_0x20dc04]) {
        mp.game.graphics.setPtfxAssetNextCall("scr_agencyheist");
        mp.game.fire.startScriptFire(_0x16008c[_0x20dc04][0], _0x16008c[_0x20dc04][1], _0x16008c[_0x20dc04][2], 25, true);
        fireJobData.fire_object_list.push({
          id: _0x20dc04,
          progress: 0,
          tick_progress: 0,
          pos_x: _0x16008c[_0x20dc04][0],
          pos_y: _0x16008c[_0x20dc04][1],
          pos_z: _0x16008c[_0x20dc04][2],
          particle: mp.game.graphics.startParticleFxLoopedAtCoord("scr_fbi_ext_blaze", _0x16008c[_0x20dc04][0], _0x16008c[_0x20dc04][1], _0x16008c[_0x20dc04][2], 180, 0, 0, 1, true, true, true, false)
        });
      }
    }
    fireJobData.fire_id = _0x532da3;
  }
}
let fire_shape;
let fire_job_global = [[[115.662, -748.359, 45.752, 331.671], [134.645, -763.755, 45.752, 254.291], [138.818, -770.547, 45.752, 231.285], [116.916, -756.816, 45.752, 46.785], [104.287, -743.487, 45.755, 228.605], [105.947, -753.996, 45.755, 227.135]], [[1953.879, 5053.922, 41.562, 42.921], [1915.818, 5019.156, 46.246, 113.533], [1907.391, 5018.754, 47.346, 92.943], [1911.544, 4997.451, 46.056, 92.944], [1914.163, 4992.918, 45.851, 114.008], [1981.43, 4991.029, 41.76, 76.184]], [[469.573, 6527.805, 29.217, 21.952], [501.947, 6498.769, 29.983, 339.615], [509.18, 6469.871, 30.733, 339.614], [525.918, 6508.014, 29.515, 314.123], [489.187, 6509.759, 30.331, 126.961], [467.797, 6479.136, 29.895, 142.901]], [[788.858, 1272.337, 360.296, 124.269], [767.326, 1268.564, 360.297, 94.065], [753.874, 1275.871, 360.297, 59.009], [748.022, 1276.455, 360.297, 116.784], [738.503, 1267.615, 360.291, 123.451], [713.034, 1281.671, 360.296, 59.851]], [[-552.483, -190.933, 38.208, 36.405], [-536.948, -185.895, 38.208, 308.683], [-534.708, -194.929, 42.704, 215.974], [-544.144, -204.801, 38.226, 40.958], [-519.501, -206.783, 37.612, 311.192], [-557.656, -224.196, 37.615, 155.158]], [[-1350.487, -1292.196, 5.181, 106.402], [-1337.523, -1323.689, 4.824, 117.419], [-1320.814, -1323.721, 4.75, 299.559], [-1316.462, -1346.149, 4.519, 250.397], [-1337.269, -1272.929, 4.895, 327.419], [-1343.636, -1257.675, 4.895, 221.606]], [[-43.851, -1108.628, 26.438, -170.094], [-51.868, -1105.743, 26.437, 68.389], [-62.678, -1094.1, 26.458, -27.461], [-60.02, -1085.697, 26.791, -27.198], [-39.316, -1117.877, 26.434, 163.969], [-36.585, -1110.644, 26.438, 174.563]], [[-58.356, -796.079, 44.225, 161.006], [-53.925, -802.469, 44.226, 100.932], [-64.405, -793.789, 44.225, 84.659], [-71.822, -791.847, 44.227, 103.374], [-69.773, -802.088, 44.227, 215.875], [-55.036, -763.781, 44.241, 313.283]], [[890.584, 29.055, 78.939, 351.322], [902.079, 46.336, 79.307, 321.047], [933.361, 42.578, 81.096, 20.683], [908.29, 16.076, 79.122, 50.006], [889.894, 6.051, 78.897, 93.783], [937.189, 75.181, 79.148, 288.954]]];
let fire_job = [[[-295.027, -1036.005, 36.35, 20.719], [-299.848, -1034.75, 36.35, 1.514], [-289.719, -1038.135, 36.35, 320.054], [-305.383, -1032.058, 36.35, 19.887]], [[-158.227, 285.407, 93.764, 346.972], [-162.28, 285.392, 93.764, 35.294], [-165.071, 285.412, 93.77, 52.782], [-170.052, 285.384, 93.764, 31.085]], [[-452.275, 1117.297, 325.854, 254.231], [-439.557, 1114.398, 325.854, 252.51], [-418.01, 1107.893, 325.856, 167.848], [-411.758, 1105.908, 325.854, 237.987]], [[111.986, -367.423, 43.544, 98.776], [116.397, -351.096, 42.59, 292.263], [85.823, -345.659, 42.28, 52.96], [64.077, -320.473, 44.605, 15.823]], [[-1748.349, -725.487, 10.424, 53.192], [-1744.259, -720.473, 10.467, 321.642], [-1740.676, -715.793, 10.436, 346.177], [-1735.593, -708.825, 10.202, 339.646]], [[411.426, -1914.624, 25.452, 301.72], [413.694, -1917.013, 25.45, 281.192], [418.846, -1923.128, 25.284, 227.601], [411.977, -1906.2, 25.493, 319.881]], [[330.16, -1667.387, 32.532, 40.892], [326.169, -1664.037, 32.532, -44.324], [322.082, -1660.555, 32.532, -49.045], [318.204, -1657.349, 32.532, -74.123]], [[-1466.162, -138.832, 50.702, 142.261], [-1470.656, -135.171, 51.089, 164.013], [-1476.787, -137.815, 51.174, 132.215], [-1483, -141.957, 51.618, 179.935]], [[-1080.371, -2422.573, 13.945, 320.553], [-1090.149, -2424.498, 13.945, 99.889], [-1084.516, -2405.529, 13.945, 302.726], [-1094.088, -2403.123, 13.945, 218.898]], [[-331.552, -2769.848, 5.141, 271.126], [-331.508, -2774.94, 5.143, 219.651], [-331.673, -2778.093, 5.144, 193.009], [-330.489, -2786.803, 5.149, 224.394]], [[1527.38, 795.5, 77.513, 20.963], [1535.76, 790.805, 77.53, 273.157], [1545.064, 784.921, 77.559, 260.018], [1527.806, 806.607, 77.522, 319.45]], [[-550.98, -1792.661, 22.328, 322.827], [-565.815, -1794.582, 22.57, 325.182], [-546.122, -1803.033, 21.728, 245.963], [-547.837, -1808.142, 21.582, 238.294]], [[1215.536, 1893.834, 77.926, 175.575], [1224.43, 1883.203, 78.88, 287.961], [1229.253, 1906.613, 77.968, 22.065], [1247.669, 1911.192, 78.54, 314.474]]];
global.CloseFireBrowser = function () {
  if (FireJobOpened) {
    FireJobOpened = false;
    main_browser.execute("APPS.state.work_fire.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("FireJobBrowser", (_0xac20e2, _0x28b3e1) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  FireJobOpened = true;
  const _0x3bab01 = "{\"count\":" + _0x28b3e1 + ",\"job\":" + _0xac20e2 + ",\"show\":true}";
  main_browser.execute("APPS.state.work_fire = " + _0x3bab01);
  mp.gui.cursor.show(true, true);
});
mp.events.add("FireJobChangeButton", _0x4842fb => {
  main_browser.execute("APPS.state.work_fire.job = " + _0x4842fb);
});
mp.events.add("Fire_Error", _0x20c625 => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x20c625 + "');");
});
mp.events.add("Client_FireEmployment", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_FireEmployment");
  }
});
mp.events.add("Client_FireJobChangeButton", _0x355293 => {
  main_browser.execute("APPS.state.work_fire.job = " + _0x355293);
});
global.can_call_fire_list = false;
mp.events.add("Client_CanCallFireList", _0x46d2cb => {
  can_call_fire_list = _0x46d2cb;
});
mp.events.add("FireListShow", (_0x12e641, _0x293474, _0x4b1865) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x1c2d64 = [];
  let _0x16bc97 = "";
  for (let _0x3a8bc5 = 0; _0x3a8bc5 < _0x12e641.length; _0x3a8bc5++) {
    if (_0x293474[_0x3a8bc5] == 0 || _0x293474[_0x3a8bc5] == null || !_0x293474[_0x3a8bc5]) {
      continue;
    }
    const _0x5eb84b = mp.game.gameplay.getDistanceBetweenCoords(_0x12e641[_0x3a8bc5][0], _0x12e641[_0x3a8bc5][1], _0x12e641[_0x3a8bc5][2], localplayer.position.x, localplayer.position.y, localplayer.position.z, true);
    _0x16bc97 = "{'Id': " + _0x3a8bc5 + ",'Name':'" + GetNameOfFire(_0x3a8bc5, _0x4b1865) + "','Status':'" + GetNameOfTypeFire(_0x293474[_0x3a8bc5]) + "','Distance':" + Math.round(_0x5eb84b) + "}";
    _0x1c2d64.push(_0x16bc97);
  }
  FireListOpened = true;
  const _0x815fe0 = "{\"items\":[" + _0x1c2d64 + "],\"show\":true}";
  main_browser.execute("APPS.state.work_fire_list = " + _0x815fe0);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  mp.events.callRemote("Fire_Orders", 1);
});
mp.events.add("FireUpdateList", (_0x2e2f5c, _0xd436e6, _0xb650c5) => {
  let _0x29ef83 = [];
  let _0x2b7abc = "";
  for (let _0x52f45f = 0; _0x52f45f < _0x2e2f5c.length; _0x52f45f++) {
    if (_0xd436e6[_0x52f45f] == 0 || _0xd436e6[_0x52f45f] == null || !_0xd436e6[_0x52f45f]) {
      continue;
    }
    const _0x3405b3 = mp.game.gameplay.getDistanceBetweenCoords(_0x2e2f5c[_0x52f45f][0], _0x2e2f5c[_0x52f45f][1], _0x2e2f5c[_0x52f45f][2], localplayer.position.x, localplayer.position.y, localplayer.position.z, true);
    _0x2b7abc = "{'Id': " + _0x52f45f + ",'Name':'" + GetNameOfFire(_0x52f45f, _0xb650c5) + "','Status':'" + GetNameOfTypeFire(_0xd436e6[_0x52f45f]) + "','Distance':" + Math.round(_0x3405b3) + "}";
    _0x29ef83.push(_0x2b7abc);
  }
  main_browser.execute("APPS.state.work_fire_list.items = [" + _0x29ef83 + "]");
});
global.CloseFireList = function () {
  if (FireListOpened) {
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_fire_list.show = false;");
    FireListOpened = false;
    mp.gui.cursor.show(false, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("Fire_Orders", 0);
  }
};
mp.events.add("FireCheckButton", _0x328b16 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("GetFireJob", _0x328b16);
    CloseFireList();
  }
});
mp.events.add("SetFireView", (_0x40af2f, _0x1aa153, _0x1aa2aa, _0x3733be) => {
  if (_0x3733be) {
    loadPtfxAsset("scr_agencyheist", _0x5270d1 => {
      if (_0x5270d1) {
        applyFireView(_0x40af2f, _0x1aa153, _0x1aa2aa);
      }
    });
  } else {
    clearFireViewEffects();
  }
});
mp.events.add("FireBlipCreate", _0x594f76 => {
  if (blipinfo) {
    blipinfo.destroy();
    blipinfo = null;
  }
  if (fire_shape) {
    fire_shape.destroy();
    fire_shape = null;
  }
  blipinfo = mp.blips.new(1, _0x594f76, {
    name: language.Пожар[curr_lang],
    color: 83
  });
  blipinfo.setRoute(true);
  fire_shape = mp.colshapes.newCircle(_0x594f76.x, _0x594f76.y, 5);
  fire_shape.is_fire_blip = true;
});
mp.events.add("playerEnterColshape", _0x57fd64 => {
  if (mp.colshapes.exists(_0x57fd64) && _0x57fd64.is_fire_blip == 1) {
    blipinfo.destroy();
    blipinfo = undefined;
    fire_shape.destroy();
    fire_shape = undefined;
  }
});
mp.events.add("Client_FirePushHose", _0x58edba => {
  const _0x9b0b90 = mp.players.atRemoteId(parseInt(_0x58edba));
  if (_0x9b0b90 && mp.players.exists(_0x9b0b90)) {
    loadPtfxAsset("core", _0x663fde => {
      if (_0x663fde) {
        mp.game.graphics.setPtfxAssetNextCall("core");
        render_water_drop_id.push(_0x9b0b90);
        render_water_drop_object.push(mp.game.graphics.startParticleFxLoopedOnPedBone("water_cannon_jet", _0x9b0b90.handle, 0.12, 0.3, 0.03, 20, 190, -35, 6286, 1, false, false, false));
      }
    });
  }
});
mp.events.add("Client_FirePushHoseCancel", _0x4366a4 => {
  const _0x6019d0 = mp.players.atRemoteId(parseInt(_0x4366a4));
  if (_0x6019d0 && mp.players.exists(_0x6019d0)) {
    const _0x338163 = render_water_drop_id.indexOf(_0x6019d0);
    if (_0x338163 !== -1) {
      if (render_water_drop_object && render_water_drop_object[_0x338163]) {
        const _0x365f18 = render_water_drop_object[_0x338163];
        if (mp.game.graphics.doesParticleFxLoopedExist(_0x365f18)) {
          mp.game.graphics.stopParticleFxLooped(_0x365f18, false);
        }
        mp.game.graphics.removeParticleFx(_0x365f18, true);
      }
      render_water_drop_id.splice(_0x338163, 1);
      render_water_drop_object.splice(_0x338163, 1);
    }
  }
});
let hoseKeyHeld = false;
function isFireExtinguisherEquipped() {
  return (typeof currentWeapon == "function" ? currentWeapon() : mp.game.invoke("0x0A6DB4965674D243", localplayer.handle)) == 101631238;
}
function isFirefighterAiming() {
  return !!mp.game.player.isFreeAiming() || !!localplayer.getConfigFlag(78, true) || !!mp.game.controls.isControlPressed(0, 25) || !!mp.game.controls.isDisabledControlPressed(0, 25);
}
function tryStartExtinguisherPush() {
  if (pushed_status != 0) {
    return;
  }
  if (!isFireExtinguisherEquipped() || !isFirefighterAiming()) {
    return;
  }
  if (!mp.game.controls.isControlPressed(0, 24) && !mp.game.controls.isDisabledControlPressed(0, 24)) {
    return;
  }
  if (GetPlayerNearFire(localplayer.position, 5) != -1) {
    pushed_status = 1;
    fireJobData.last_tick_upd_zone = new Date().getTime();
  }
}
function stopHosePush() {
  if (pushed_status == 2) {
    mp.events.callRemote("ServerFirePushHose", false);
  }
  mp.events.callRemote("ServerFirePushZoneID", undefined);
  fireJobData.fire_push_zoneid = undefined;
  pushed_status = 0;
  main_browser.execute("APPS.state.hud.fire_process = 0;");
}
function syncFirePushZone(_0x353663) {
  const _0x2224e4 = fireJobData.fire_object_list[_0x353663].id;
  if (fireJobData.fire_push_zoneid === _0x2224e4) {
    return _0x2224e4;
  }
  if (fireJobData.fire_push_zoneid !== undefined) {
    const _0xc24955 = fireJobData.fire_object_list.findIndex(_0x16a527 => _0x16a527.id == fireJobData.fire_push_zoneid);
    if (_0xc24955 !== -1 && fireJobData.fire_object_list[_0xc24955].tick_progress > 0) {
      mp.events.callRemote("ServerFireUpdateZone", fireJobData.fire_push_zoneid, fireJobData.fire_object_list[_0xc24955].tick_progress);
      fireJobData.fire_object_list[_0xc24955].tick_progress = 0;
      fireJobData.last_tick_upd_zone = new Date().getTime();
    }
  }
  fireJobData.fire_push_zoneid = _0x2224e4;
  mp.events.callRemote("ServerFirePushZoneID", _0x2224e4);
  return _0x2224e4;
}
function GetPlayerFixHose() {
  if (pushed_status == 2) {
    if (hoseKeyHeld) {
      return 1;
    } else {
      stopHosePush();
      return 0;
    }
  } else if (isFireExtinguisherEquipped() && isFirefighterAiming()) {
    return 1;
  } else {
    stopHosePush();
    return 0;
  }
}
function GetPlayerLookingAt() {
  const _0x39b9bd = gameplayCamera.getCoord();
  const _0xb9ed86 = gameplayCamera.getDirection();
  const _0x1100f8 = new mp.Vector3(_0xb9ed86.x * 20 + _0x39b9bd.x, _0xb9ed86.y * 20 + _0x39b9bd.y, _0xb9ed86.z * 20 + _0x39b9bd.z);
  const _0x3fa9c0 = mp.raycasting.testPointToPoint(_0x39b9bd, _0x1100f8, localplayer, 31);
  if (_0x3fa9c0 && _0x3fa9c0.position) {
    return _0x3fa9c0.position;
  } else {
    return new mp.Vector3(_0x1100f8.x, _0x1100f8.y, mp.game.gameplay.getGroundZFor3dCoord(_0x1100f8.x, _0x1100f8.y, _0x1100f8.z + 1, 0, false));
  }
}
function GetPlayerNearFire(_0xf1c561, _0xa6fa21) {
  if (fireJobData.fire_object_list.length) {
    for (let _0x1bfb76 = 0; _0x1bfb76 < fireJobData.fire_object_list.length; _0x1bfb76++) {
      if (fireJobData.fire_object_list[_0x1bfb76] && fireJobData.fire_object_list[_0x1bfb76].pos_x) {
        if (mp.game.gameplay.getDistanceBetweenCoords(_0xf1c561.x, _0xf1c561.y, _0xf1c561.z, fireJobData.fire_object_list[_0x1bfb76].pos_x, fireJobData.fire_object_list[_0x1bfb76].pos_y, fireJobData.fire_object_list[_0x1bfb76].pos_z, true) < _0xa6fa21) {
          return _0x1bfb76;
        }
      }
    }
  }
  return -1;
}
mp.keys.bind(72, true, () => {
  hoseKeyHeld = true;
  if (pushed_status != 0) {
    return;
  }
  if (new Date().getTime() - lastCheck < 250) {
    return;
  }
  lastCheck = new Date().getTime();
  if (GetPlayerNearFire(localplayer.position, 30) != -1 && isFireExtinguisherEquipped() && isFirefighterAiming()) {
    fireJobData.last_tick_upd_zone = new Date().getTime();
    mp.events.callRemote("ServerFirePushHose", true);
  }
});
mp.events.add("Client_FirePushHoseStatus", _0x3e2348 => {
  if (_0x3e2348 != 2 || hoseKeyHeld) {
    pushed_status = _0x3e2348;
  } else {
    mp.events.callRemote("ServerFirePushHose", false);
  }
});
mp.keys.bind(72, false, () => {
  hoseKeyHeld = false;
  if (pushed_status == 2) {
    stopHosePush();
  }
});
mp.events.add("playerWeaponShot", (_0x4687dd, _0x5ccc62) => {
  if (pushed_status != 0) {
    return;
  }
  if (GetPlayerNearFire(localplayer.position, 5) != -1 && isFireExtinguisherEquipped() && isFirefighterAiming()) {
    pushed_status = 1;
    fireJobData.last_tick_upd_zone = new Date().getTime();
  }
});
mp.events.add("render", () => {
  tryStartExtinguisherPush();
  if (!pushed_status || pushed_status == null) {
    return;
  }
  if (!GetPlayerFixHose()) {
    return;
  }
  const _0x5e4a4f = GetPlayerLookingAt();
  if (!_0x5e4a4f || _0x5e4a4f.x === undefined || _0x5e4a4f.y === undefined || _0x5e4a4f.z === undefined) {
    return;
  }
  mp.game.graphics.drawMarker(28, _0x5e4a4f.x, _0x5e4a4f.y, _0x5e4a4f.z, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 255, 0, 0, 100, false, false, 2, false, null, null, false);
  const _0x3f4368 = GetPlayerNearFire(_0x5e4a4f, 3.5);
  if (_0x3f4368 != -1) {
    syncFirePushZone(_0x3f4368);
    fireJobData.fire_object_list[_0x3f4368].progress += pushed_status;
    fireJobData.fire_object_list[_0x3f4368].tick_progress += pushed_status;
    main_browser.execute("APPS.state.hud.fire_process = " + fireJobData.fire_object_list[_0x3f4368].progress + ";");
    if (new Date().getTime() - fireJobData.last_tick_upd_zone > 2000 || fireJobData.fire_object_list[_0x3f4368].progress > 5000 && new Date().getTime() - fireJobData.last_tick_upd_zone > 500) {
      fireJobData.last_tick_upd_zone = new Date().getTime();
      mp.events.callRemote("ServerFireUpdateZone", fireJobData.fire_object_list[_0x3f4368].id, fireJobData.fire_object_list[_0x3f4368].tick_progress);
      fireJobData.fire_object_list[_0x3f4368].tick_progress = 0;
    }
    if (_0x5e4a4f && typeof _0x5e4a4f.entity == "number" && _0x5e4a4f.entity !== 0 && mp.game.entity.doesExist(_0x5e4a4f.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x5e4a4f.entity);
    }
  }
});
mp.events.add("Client_CancelFireExhaust", () => {
  localplayer.taskReloadWeapon(false);
  localplayer.taskSwapWeapon(false);
  mp.game.controls.disableControlAction(2, 24, true);
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
});
mp.events.add("Client_ChangeFireWorkStatus", _0x2755b5 => {
  at_fire_pushed = _0x2755b5;
});
mp.events.add("Client_FireOffHearth", _0x1f97b3 => {
  if (fireJobData.fire_object_list.length) {
    const _0x3d9bf7 = fireJobData.fire_object_list.findIndex(_0x1c735f => _0x1c735f.id == _0x1f97b3);
    if (_0x3d9bf7 !== -1) {
      if (fireJobData.fire_object_list[_0x3d9bf7] && fireJobData.fire_object_list[_0x3d9bf7].particle) {
        const _0x260bf0 = fireJobData.fire_object_list[_0x3d9bf7].particle;
        if (mp.game.graphics.doesParticleFxLoopedExist(_0x260bf0)) {
          mp.game.graphics.stopParticleFxLooped(_0x260bf0, false);
        }
        mp.game.graphics.removeParticleFx(_0x260bf0, true);
      }
      if (fireJobData.fire_object_list[_0x3d9bf7].pos_x) {
        mp.game.fire.stopFireInRange(fireJobData.fire_object_list[_0x3d9bf7].pos_x, fireJobData.fire_object_list[_0x3d9bf7].pos_y, fireJobData.fire_object_list[_0x3d9bf7].pos_z, 5);
      }
      fireJobData.fire_object_list.splice(_0x3d9bf7, 1);
    }
  }
});
mp.events.add("Client_UpdateFireZone", (_0x270211, _0x47f132) => {
  if (fireJobData.fire_object_list.length) {
    const _0x50116c = fireJobData.fire_object_list.findIndex(_0x462635 => _0x462635.id == _0x270211);
    if (_0x50116c !== -1 && fireJobData.fire_object_list[_0x50116c] !== undefined) {
      fireJobData.fire_object_list[_0x50116c].progress = _0x47f132;
    }
  }
});
const fire_names = [language.Палатки[curr_lang], language.Ресторан[curr_lang], language.Особняк[curr_lang], language.Стройка[curr_lang], language.Вилла[curr_lang], language.Бургерная[curr_lang], language["Бизнес-центр"][curr_lang], language.Склад[curr_lang], language.Контейнеры[curr_lang], language.Порт[curr_lang], language.Водосток[curr_lang], language["Склад мусора"][curr_lang], language.Хранилище[curr_lang]];
const fire_global_names = [language.FBI[curr_lang], language["Ферма №1"][curr_lang], language["Ферма №2"][curr_lang], language["Телевышка на Winewood"][curr_lang], language.Мэрия[curr_lang], language.Автоярмарка[curr_lang], language.Банк[curr_lang], language.Казино[curr_lang]];
function GetNameOfFire(_0x4ea7b1, _0x3d710a) {
  if (_0x4ea7b1 >= 0 && _0x4ea7b1 < 13) {
    return fire_names[_0x4ea7b1];
  } else {
    return fire_global_names[_0x3d710a];
  }
}
function GetNameOfTypeFire(_0x49e96) {
  switch (_0x49e96) {
    case 1:
      return language["Слабый очаг возгарания"][curr_lang];
    case 2:
      return language["Средний очаг возгарания"][curr_lang];
    case 3:
      return language["Высокий очаг возгарания"][curr_lang];
  }
}
mp.events.add("Client_LanguageChanged", (_0x40bd09, _0x2b51e4, _0x304fb7) => {
  if (!_0x304fb7 || !_0x40bd09 || !_0x2b51e4) {
    return;
  }
  const _0x172631 = global.buildLanguageReverseMap(_0x304fb7, _0x40bd09);
  for (let _0x4e39a6 = 0; _0x4e39a6 < fire_names.length; _0x4e39a6++) {
    if (typeof fire_names[_0x4e39a6] == "string") {
      fire_names[_0x4e39a6] = global.retranslateTextByMap(fire_names[_0x4e39a6], _0x172631, _0x2b51e4);
    }
  }
  for (let _0xffe651 = 0; _0xffe651 < fire_global_names.length; _0xffe651++) {
    if (typeof fire_global_names[_0xffe651] == "string") {
      fire_global_names[_0xffe651] = global.retranslateTextByMap(fire_global_names[_0xffe651], _0x172631, _0x2b51e4);
    }
  }
});