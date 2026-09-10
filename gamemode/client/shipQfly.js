let second_cam;
let last_cam = null;
let shiparray = [];
let shipowner = [];
let shipcounter = 0;
let shipmarker = null;
function UpdateShip() {
  let _0x45ca85;
  if (shipmarker != null) {
    shipmarker.destroy();
    shipmarker = null;
  }
  _0x45ca85 = shipowner[shipcounter] == -1 ? [255, 225, 0, 255] : [255, 30, 0, 255];
  shipmarker = mp.markers.new(2, new mp.Vector3(shiparray[shipcounter][0], shiparray[shipcounter][1], shiparray[shipcounter][2] + 2), 5, {
    rotation: new mp.Vector3(180, 0, 0),
    color: _0x45ca85,
    visible: true,
    dimension: 0
  });
}
global.at_ship_arend = false;
mp.events.add("ShipArendStart", (_0x4e36a7, _0x5361e0) => {
  if (at_ship_arend) {
    return;
  }
  let _0x40ade8;
  at_ship_arend = true;
  shiparray = _0x4e36a7;
  shipowner = _0x5361e0;
  shipcounter = 0;
  mp.events.call("Disablechat");
  localplayer.freezePosition(true);
  SwitchShipCamera(1);
  _0x40ade8 = shipowner[0] == -1 ? [255, 225, 0, 255] : [255, 30, 0, 255];
  shipmarker = mp.markers.new(2, new mp.Vector3(shiparray[0][0], shiparray[0][1], shiparray[0][2] + 2), 5, {
    rotation: new mp.Vector3(180, 0, 0),
    color: _0x40ade8,
    visible: true,
    dimension: 0
  });
  mp.keys.bind(39, false, function () {
    if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!at_ship_arend) {
      lastCheck = new Date().getTime();
      if (shipcounter - 1 < 0) {
        shipcounter = shiparray.length - 1;
        SwitchShipCamera(5);
      } else {
        shipcounter--;
        if (shipcounter == 9) {
          SwitchShipCamera(1);
        } else if (shipcounter == 19) {
          SwitchShipCamera(2);
        } else if (shipcounter == 28) {
          SwitchShipCamera(3);
        } else if (shipcounter == 38) {
          SwitchShipCamera(4);
        }
      }
      UpdateShip();
    }
  });
  mp.keys.bind(37, false, function () {
    if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!at_ship_arend) {
      lastCheck = new Date().getTime();
      if (shipcounter + 1 >= shiparray.length) {
        SwitchShipCamera(1);
        shipcounter = 0;
      } else {
        shipcounter++;
        if (shipcounter == 10) {
          SwitchShipCamera(2);
        } else if (shipcounter == 20) {
          SwitchShipCamera(3);
        } else if (shipcounter == 29) {
          SwitchShipCamera(4);
        } else if (shipcounter == 39) {
          SwitchShipCamera(5);
        }
      }
      UpdateShip();
    }
  });
  mp.keys.bind(40, false, function () {
    if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!at_ship_arend) {
      lastCheck = new Date().getTime();
      CloseShipBought();
    }
  });
  mp.keys.bind(38, false, function () {
    if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && at_ship_arend) {
      lastCheck = new Date().getTime();
      if (shipowner[shipcounter] != -1) {
        return mp.game.ui.notifications.show(language["Дaннoe мecтo yжe apeндoвaнo"][curr_lang], false, 0, 6);
      }
      mp.events.callRemote("ShipArendProcess", shipcounter);
    }
  });
  HintShow(language["Выберите место, используя стрелки на клавиатуре(стрелка вверх - выбор)"][curr_lang]);
});
mp.events.add("UpdateShipsArend", (_0x3f8656, _0x1e9339) => {
  shipowner = _0x1e9339;
  if (_0x3f8656 == shipcounter) {
    UpdateShip();
  }
});
mp.events.add("ArendShipFinish", () => {
  CloseShipBought();
});
global.CloseShipBought = function () {
  if (at_ship_arend) {
    mp.events.call("Enablechat");
    at_ship_arend = false;
    mp.keys.unbind(37, false);
    mp.keys.unbind(39, false);
    mp.keys.unbind(40, false);
    if (is_admin !== true) {
      mp.keys.unbind(38, false);
    }
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
    last_cam = null;
    shiparray = [];
    shipowner = [];
    if (shipmarker != null) {
      shipmarker.destroy();
      shipmarker = null;
    }
    mp.events.callRemote("ServerFinishShipBought");
    HintClose();
  }
};
const ship_arend_cams = [[-887.1422119140625, -1383.5107421875, 61.30862045288086, -845.3086547851562, -1368.81494140625, 0.6101686358451843], [-716.3567504882812, -1404.6224365234375, 63.28873062133789, -769.53173828125, -1364.1533203125, -4.833034515380859], [-897.502, -1401.077, 45.891, -918.269, -1339.122, 0.61], [-975.192, -1337.255, 46.509, -958.072, -1387.802, 0.605], [-931.32, -1429.174, 42.209, -913.287, -1482.224, -2.456]];
function SwitchShipCamera(_0x27c0e4) {
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  if (last_cam != null && last_cam != _0x27c0e4) {
    second_cam = mp.cameras.new("default", new mp.Vector3(ship_arend_cams[last_cam - 1][0], ship_arend_cams[last_cam - 1][1], ship_arend_cams[last_cam - 1][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(ship_arend_cams[last_cam - 1][3], ship_arend_cams[last_cam - 1][4], ship_arend_cams[last_cam - 1][5]);
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(ship_arend_cams[_0x27c0e4 - 1][0], ship_arend_cams[_0x27c0e4 - 1][1], ship_arend_cams[_0x27c0e4 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(ship_arend_cams[_0x27c0e4 - 1][3], ship_arend_cams[_0x27c0e4 - 1][4], ship_arend_cams[_0x27c0e4 - 1][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x27c0e4 && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 2000, 0, 0);
  } else {
    mp.game.cam.renderScriptCams(true, true, 2000, true, true);
  }
  last_cam = _0x27c0e4;
}
let routed_blips;
let routed_marker;
let routed_shape;
global.at_fly = false;
mp.events.add("Client_RouteToFlyPoint", (_0x5eec16, _0x328691, _0x300d25) => {
  if (routed_shape) {
    routed_shape.destroy();
    routed_shape = undefined;
  }
  if (routed_marker) {
    routed_marker.destroy();
    routed_marker = undefined;
  }
  if (routed_blips) {
    routed_blips.destroy();
    routed_blips = undefined;
  }
  routed_shape = mp.colshapes.newSphere(_0x5eec16, _0x328691, _0x300d25, 10, 0);
  routed_shape.is_routed_shape = true;
  routed_blips = mp.blips.new(1, new mp.Vector3(_0x5eec16, _0x328691, _0x300d25), {
    color: 83
  });
  routed_blips.setRoute(true);
  routed_marker = mp.markers.new(2, new mp.Vector3(_0x5eec16, _0x328691, _0x300d25 + 7), 3, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [255, 0, 0, 188],
    visible: true,
    dimension: 0
  });
});
mp.events.add("playerEnterColshape", _0x27a736 => {
  if (mp.colshapes.exists(_0x27a736) && _0x27a736.is_routed_shape == 1) {
    if (routed_marker) {
      routed_marker.destroy();
      routed_marker = undefined;
    }
    if (routed_blips) {
      routed_blips.destroy();
      routed_blips = undefined;
    }
    if (routed_shape) {
      routed_shape.destroy();
      routed_shape = undefined;
    }
    return;
  }
  if (mp.colshapes.exists(_0x27a736) && _0x27a736.pilot_sphere == 1 && PilotWorkData.dropobject && PilotWorkData.dropobject[4] == 0) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    can_pickup_pilot_drop = true;
  }
});
mp.events.add("playerExitColshape", _0x409248 => {
  if (mp.colshapes.exists(_0x409248) && _0x409248.pilot_sphere == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    can_pickup_pilot_drop = false;
  }
});
const FlyRouteWorkPilotLoad = [[[[-1249.603, -2999.561, 21.665], [1702.091, 3249.3, 46.014], [1729.363, 3313.244, 42.409]], [[-1249.603, -2999.561, 21.665], [1702.091, 3249.3, 46.014], [1729.363, 3313.244, 42.409]]], [[[-968.519, -3159.69, 23.1], [3840.288, -4738.67, 117.101], [4443.771, -4494.278, 7.039]], [[-968.519, -3159.69, 23.1], [3840.288, -4738.67, 117.101], [4478.01, -4470.413, 7.567]]]];
const FlyRouteWorkPilot = [[[1558.205, 3210.119, 40.364], [-1578.556, -3005.625, 18.003], [-1233.549, -3218.374, 21.999]], [[3993.721, -4675.773, 12.767], [1252.722, 3125.287, 49.529], [1701.734, 3249.991, 48.656]]];
const FlyRouteWorkPilotUnLoad = [[[[-1257.546, -3400.931, 17.33]], [[-1292.103, -3379.074, 18.812]]], [[[1732.621, 3309.438, 42.014]], [[1795.635, 3262.335, 44.573]]]];
const FlyRouteWorlPilotToKayo = [[1489.549, 3087.043, 51.426], [3577.917, -4408.879, 62.232], [4365.446, -4540.426, 13.23]];
const FlyRouteWorlPilotToKayoLoad = [[4443.771, -4494.278, 7.039], [4478.01, -4470.413, 7.567]];
const cameraLoadPos = [[[1726.297, 3328.782, 46.874, 193.746], [1814.969, 3257.592, 49.478, 76.884]], [[4464.786, -4471.218, 13.558, 144.694], [4452.923, -4452.257, 16.067, 240.74]]];
const cameraUnLoadPos = [[[-1266.237, -3425.506, 25.43, 343.737], [-1312.132, -3402.825, 26.659, 306.364]], [[1726.297, 3328.782, 46.874, 193.746], [1814.969, 3257.592, 49.478, 76.884]]];
global.player_work_pilot = false;
global.PilotJobOpened = false;
let delivery_marker;
let delivery_blips;
let delivery_shape;
let int_val;
let PilotWorkData = {
  pilot_work_select_route: null,
  pilot_work_type_route: null,
  pilot_work_rand_load: -1,
  pilot_work_select_checkpoint: null,
  pilot_player_camera: null,
  pilot_load: false,
  current_data: [],
  dropobject: [],
  pending_first_checkpoint: null,
  taking_checkpoint: false,
  last_checkpoint_at: 0
};
function destroyPilotEntity(_0x4c88c7) {
  if (_0x4c88c7) {
    try {
      _0x4c88c7.destroy();
    } catch (_0x576758) {}
  }
}
function destroyPilotCheckpointVisuals() {
  destroyPilotEntity(PilotWorkData.current_data[0]);
  destroyPilotEntity(PilotWorkData.current_data[1]);
  destroyPilotEntity(PilotWorkData.current_data[3]);
  destroyPilotEntity(PilotWorkData.current_data[4]);
  destroyPilotEntity(PilotWorkData.current_data[5]);
  destroyPilotEntity(PilotWorkData.current_data[6]);
  PilotWorkData.current_data[0] = null;
  PilotWorkData.current_data[1] = null;
  PilotWorkData.current_data[3] = null;
  PilotWorkData.current_data[4] = null;
  PilotWorkData.current_data[5] = null;
  PilotWorkData.current_data[6] = null;
}
function copyPilotPos(_0x62eb9e) {
  if (_0x62eb9e) {
    return [_0x62eb9e[0], _0x62eb9e[1], _0x62eb9e[2]];
  }
}
function requestPilotFirstCheckpoint(_0x463949, _0x3ee216, _0x2eb834) {
  PilotWorkData.pending_first_checkpoint = null;
  if (!PilotWorkSetCheckpoint(_0x463949, _0x3ee216, _0x2eb834)) {
    if (PilotWorkData.pilot_work_select_route != null) {
      PilotWorkData.pending_first_checkpoint = {
        type: _0x463949,
        job_id: _0x3ee216,
        checkpoint: _0x2eb834
      };
    }
  }
}
function PilotWorkSetCheckpoint(_0x4335df, _0x5af4e, _0x2db9d4) {
  if (PilotWorkData.pilot_work_select_route == null) {
    return false;
  }
  const _0x5b068c = localplayer.isInAnyVehicle(false);
  const _0x11974f = localplayer.vehicle;
  const _0x3b96b6 = _0x11974f && _0x11974f.getPedInSeat ? _0x11974f.getPedInSeat(-1) : null;
  if (!_0x5b068c || !_0x11974f || _0x3b96b6 != localplayer.handle || !_0x11974f) {
    return false;
  }
  {
    let _0x311586;
    let _0x16a6dc;
    let _0x4a9600 = 0;
    switch (_0x4335df) {
      case 1:
        if (PilotWorkData.pilot_work_rand_load == -1) {
          PilotWorkData.pilot_work_rand_load = getRandomInt(0, 2);
        }
        _0x311586 = copyPilotPos(FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][_0x2db9d4]);
        if (FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load].length != _0x2db9d4 + 1) {
          _0x16a6dc = copyPilotPos(FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][_0x2db9d4 + 1]);
        }
        if (!_0x311586) {
          break;
        }
        if (_0x2db9d4 + 1 != FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load].length) {
          if (_0x2db9d4) {
            _0x311586[0] = _0x311586[0] + getRandomInt(0, 5);
            _0x311586[1] = _0x311586[1] + getRandomInt(0, 5);
          }
        } else {
          _0x4a9600 = 1;
        }
        break;
      case 2:
        _0x311586 = copyPilotPos(FlyRouteWorkPilot[_0x5af4e][_0x2db9d4]);
        if (!_0x311586) {
          break;
        }
        if (FlyRouteWorkPilot[_0x5af4e].length != _0x2db9d4 + 1) {
          _0x16a6dc = copyPilotPos(FlyRouteWorkPilot[_0x5af4e][_0x2db9d4 + 1]);
        } else if (FlyRouteWorkPilot[_0x5af4e].length == _0x2db9d4 + 1) {
          if (PilotWorkData.pilot_work_rand_load == -1) {
            PilotWorkData.pilot_work_rand_load = getRandomInt(0, 2);
          }
          _0x16a6dc = copyPilotPos(FlyRouteWorkPilotUnLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][0]);
        }
        _0x311586[0] = _0x311586[0] + getRandomInt(0, 5);
        _0x311586[1] = _0x311586[1] + getRandomInt(0, 5);
        break;
      case 3:
        _0x311586 = copyPilotPos(FlyRouteWorkPilotUnLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][_0x2db9d4]);
        if (FlyRouteWorkPilotUnLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load].length != _0x2db9d4 + 1) {
          _0x16a6dc = copyPilotPos(FlyRouteWorkPilotUnLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][_0x2db9d4 + 1]);
        }
        if (_0x2db9d4 + 1 != FlyRouteWorkPilotUnLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load].length) {
          _0x311586[0] = _0x311586[0] + getRandomInt(0, 5);
          _0x311586[1] = _0x311586[1] + getRandomInt(0, 5);
        } else {
          _0x4a9600 = 1;
        }
        break;
      case 4:
        if (_0x5af4e == 1) {
          _0x311586 = copyPilotPos(FlyRouteWorlPilotToKayo[_0x2db9d4]);
          if (FlyRouteWorlPilotToKayo.length != _0x2db9d4 + 1) {
            _0x16a6dc = copyPilotPos(FlyRouteWorlPilotToKayo[_0x2db9d4 + 1]);
          }
          _0x311586[0] = _0x311586[0] + getRandomInt(0, 5);
          _0x311586[1] = _0x311586[1] + getRandomInt(0, 5);
        } else {
          PilotWorkData.pilot_work_type_route = 1;
          if (PilotWorkData.pilot_work_rand_load == -1) {
            PilotWorkData.pilot_work_rand_load = 0;
          }
          _0x311586 = copyPilotPos(FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][0]);
          _0x16a6dc = copyPilotPos(FlyRouteWorkPilotLoad[_0x5af4e][PilotWorkData.pilot_work_rand_load][1]);
        }
        break;
      case 5:
        if (PilotWorkData.pilot_work_rand_load == -1) {
          PilotWorkData.pilot_work_rand_load = getRandomInt(0, 2);
        }
        _0x311586 = copyPilotPos(FlyRouteWorlPilotToKayoLoad[PilotWorkData.pilot_work_rand_load]);
        _0x4a9600 = 1;
    }
    return _0x311586 != null && (destroyPilotCheckpointVisuals(), PilotWorkData.current_data[0] = mp.markers.new(6, new mp.Vector3(_0x311586[0], _0x311586[1], _0x311586[2]), 15, {
      direction: new mp.Vector3(0, 0, 0),
      color: [255, 255, 0, 150],
      visible: true,
      dimension: 0
    }), PilotWorkData.current_data[1] = mp.markers.new(_0x4a9600 ? 5 : 7, new mp.Vector3(_0x311586[0], _0x311586[1], _0x311586[2]), _0x4a9600 ? 15 : 5, {
      direction: new mp.Vector3(0, 0, 0),
      color: [0, 175, 255, 255],
      visible: true,
      dimension: 0
    }), _0x16a6dc != null && (PilotWorkData.current_data[5] = mp.markers.new(6, new mp.Vector3(_0x16a6dc[0], _0x16a6dc[1], _0x16a6dc[2]), 15, {
      direction: new mp.Vector3(0, 0, 0),
      color: [255, 255, 0, 50],
      visible: true,
      dimension: 0
    }), PilotWorkData.current_data[6] = mp.markers.new(7, new mp.Vector3(_0x16a6dc[0], _0x16a6dc[1], _0x16a6dc[2]), 5, {
      direction: new mp.Vector3(0, 0, 0),
      color: [0, 175, 255, 150],
      visible: true,
      dimension: 0
    })), PilotWorkData.current_data[4] = mp.blips.new(1, new mp.Vector3(_0x311586[0], _0x311586[1], _0x311586[2]), {
      name: language.Маршрут[curr_lang],
      color: 83
    }), PilotWorkData.current_data[4].setRoute(true), PilotWorkData.current_data[3] = mp.colshapes.newCircle(_0x311586[0], _0x311586[1], _0x4a9600 ? 5 : 20), PilotWorkData.current_data[3].is_pilot = true, true);
  }
}
function PilotWorkChangeState(_0x3852eb, _0xf5a3fb) {
  let _0x5a3a10 = 20;
  main_browser.execute("APPS.state.hud.pilot_status = " + _0x3852eb + ";");
  mp.events.callRemote("Server_TogglePlayerEngine", false);
  PilotWorkData.pilot_player_camera = mp.cameras.new("default", new mp.Vector3(_0x3852eb ? cameraLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][0] : cameraUnLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][0], _0x3852eb ? cameraLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][1] : cameraUnLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][1], _0x3852eb ? cameraLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][2] : cameraUnLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][2]), new mp.Vector3(-20, 0, _0x3852eb ? cameraLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][3] : cameraUnLoadPos[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load][3]), 40);
  PilotWorkData.pilot_player_camera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, false);
  if (PilotWorkData.pilot_work_select_route && _0x3852eb == 1) {
    if (curr_lang == "ru") {
      StartCustomSound("load_illegal", "sounds/work_pilot/ru/load_illegal.ogg", 0.2);
    } else if (curr_lang == "en") {
      StartCustomSound("load_illegal", "sounds/work_pilot/en/load_illegal.ogg", 0.2);
    }
  }
  if (_0x3852eb == 0 && curr_lang == "ru") {
    StartCustomSound("unload_pilot", "sounds/work_pilot/ru/unload_pilot.ogg", 0.2);
  }
  PilotWorkData.pilot_load = true;
  let _0x258a8a = setInterval(() => {
    _0x5a3a10--;
    if (_0x5a3a10) {
      return main_browser.execute("APPS.state.hud.pilot_time = " + _0x5a3a10 + ";");
    }
    PilotWorkData.pilot_work_type_route = _0xf5a3fb;
    PilotWorkData.pilot_work_select_checkpoint = 0;
    if (_0x3852eb == 0) {
      mp.events.callRemote("Server_PilotWorkSalary", PilotWorkData.pilot_work_select_route);
      if (curr_lang == "ru") {
        StartCustomSound("after_unload", "sounds/work_pilot/ru/after_unload.ogg", 0.2);
      } else if (curr_lang == "en") {
        StartCustomSound("after_unload", "sounds/work_pilot/en/after_unload.ogg", 0.2);
      }
    }
    mp.events.callRemote("Server_TogglePlayerEngine", true);
    PilotWorkData.pilot_work_rand_load = -1;
    PilotWorkSetCheckpoint(PilotWorkData.pilot_work_type_route, PilotWorkData.pilot_work_select_route, PilotWorkData.pilot_work_select_checkpoint);
    main_browser.execute("APPS.state.hud.pilot_time = 0;");
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (PilotWorkData.pilot_player_camera) {
      PilotWorkData.pilot_player_camera.destroy();
    }
    PilotWorkData.pilot_load = false;
    setTimeout(function () {
      if (vehicle_engine == 0) {
        mp.events.callRemote("Server_TogglePlayerEngine", true);
      }
    }, 2000);
    if (_0x258a8a != null) {
      clearInterval(_0x258a8a);
    }
    _0x258a8a = undefined;
  }, 1000);
}
mp.events.add("OpenPilotWork", _0x7b8a0f => {
  if (chatActive || !loggedin) {
    return;
  }
  EndConversationFinally(true);
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  PilotJobOpened = true;
  const _0x574915 = "{\"count\":" + _0x7b8a0f + ",\"show\":true}";
  main_browser.execute("APPS.state.work_pilot = " + _0x574915);
  mp.gui.cursor.show(true, true);
});
global.ClosePilotWork = function () {
  if (PilotJobOpened) {
    PilotJobOpened = false;
    main_browser.execute("APPS.state.work_pilot.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_SetPilotRouteWork", _0x28bec1 => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SetPilotRouteWork", _0x28bec1);
  }
});
mp.events.add("Client_SetPiloteGetOrder", _0x1d57e1 => {
  if (!chatActive && loggedin) {
    ClosePilotWork();
    player_work_pilot = true;
    destroyPilotCheckpointVisuals();
    PilotWorkData.taking_checkpoint = false;
    PilotWorkData.last_checkpoint_at = 0;
    PilotWorkData.pilot_work_select_route = _0x1d57e1;
    PilotWorkData.pilot_work_select_checkpoint = 0;
    PilotWorkData.pilot_work_type_route = 1;
    requestPilotFirstCheckpoint(PilotWorkData.pilot_work_type_route, PilotWorkData.pilot_work_select_route, PilotWorkData.pilot_work_select_checkpoint);
    if (curr_lang == "ru") {
      StartCustomSound("after_rent_plane", "sounds/work_pilot/ru/after_rent_plane.ogg", 0.2);
    } else if (curr_lang == "en") {
      StartCustomSound("after_rent_plane", "sounds/work_pilot/en/after_rent_plane.ogg", 0.2);
    }
    if (PilotWorkData.pilot_work_select_route) {
      setTimeout(function () {
        if (curr_lang == "ru") {
          StartCustomSound("after_rent_illegal", "sounds/work_pilot/ru/after_rent_illegal.ogg", 0.2);
        } else if (curr_lang == "en") {
          StartCustomSound("after_rent_illegal", "sounds/work_pilot/en/after_rent_illegal.ogg", 0.2);
        }
      }, 4000);
    }
    setTimeout(function () {
      if (mp.players.local.vehicle) {
        if (!PilotWorkData.current_data[3]) {
          PilotWorkSetCheckpoint(PilotWorkData.pilot_work_type_route, PilotWorkData.pilot_work_select_route, PilotWorkData.pilot_work_select_checkpoint);
        }
        mp.vehicles.forEachInStreamRange(_0x2df657 => {
          if (mp.game.vehicle.isThisModelAPlane(_0x2df657.model)) {
            mp.players.local.vehicle.setNoCollision(_0x2df657.handle, false);
            _0x2df657.setNoCollision(mp.players.local.vehicle.handle, false);
            _0x2df657.setAlpha(230);
          }
        });
        setTimeout(() => {
          if (mp.players.local && mp.players.local.vehicle && mp.vehicles.exists(mp.players.local.vehicle) && mp.game.vehicle.isThisModelAPlane(mp.players.local.vehicle.model)) {
            mp.players.local.vehicle.setAlpha(255);
          }
        }, 30000);
      }
    }, 2000);
  }
});
mp.events.add("playerEnterVehicle", (_0xdfbd33, _0x4443be) => {
  const _0x47ac1e = PilotWorkData.pending_first_checkpoint;
  if (_0x47ac1e && player_work_pilot && _0x4443be === -1) {
    PilotWorkData.pending_first_checkpoint = null;
    if (!PilotWorkData.current_data[3]) {
      PilotWorkSetCheckpoint(_0x47ac1e.type, _0x47ac1e.job_id, _0x47ac1e.checkpoint);
    }
  }
});
mp.events.add("entityStreamIn", _0x5219fc => {
  if (_0x5219fc !== null && _0x5219fc.type === "vehicle" && mp.players.local.vehicle && player_work_pilot && mp.game.vehicle.isThisModelAPlane(_0x5219fc.model)) {
    mp.players.local.vehicle.setNoCollision(_0x5219fc.handle, false);
    _0x5219fc.setNoCollision(mp.players.local.vehicle.handle, false);
    _0x5219fc.setAlpha(230);
  }
});
mp.events.add("entityStreamOut", _0x4dc790 => {
  try {
    if (_0x4dc790.type !== "vehicle") {
      return;
    }
    if (_0x4dc790 && mp.vehicles.exists(_0x4dc790) && mp.players.local.vehicle && player_work_pilot && mp.game.vehicle.isThisModelAPlane(_0x4dc790.model)) {
      mp.players.local.vehicle.setNoCollision(_0x4dc790.handle, true);
      _0x4dc790.setNoCollision(mp.players.local.vehicle.handle, true);
      _0x4dc790.setAlpha(255);
    }
  } catch (_0x2afd37) {}
});
mp.events.add("playerEnterColshape", _0x15be29 => {
  if (_0x15be29 && _0x15be29 === PilotWorkData.current_data[3] && _0x15be29.is_pilot == 1 && !PilotWorkData.taking_checkpoint && !PilotWorkData.pilot_load && !(new Date().getTime() - PilotWorkData.last_checkpoint_at < 750) && localplayer.isInAnyVehicle(false) && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle) {
    PilotWorkData.taking_checkpoint = true;
    PilotWorkData.last_checkpoint_at = new Date().getTime();
    try {
      destroyPilotCheckpointVisuals();
      PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
      PilotWorkData.pilot_work_select_checkpoint++;
      let _0x55ecfe = false;
      switch (PilotWorkData.pilot_work_type_route) {
        case 1:
          if (PilotWorkData.pilot_work_select_checkpoint == 1) {
            if (curr_lang == "ru") {
              StartCustomSound("first_checkpoint", "sounds/work_pilot/ru/first_checkpoint.ogg", 0.2);
            } else if (curr_lang == "en") {
              StartCustomSound("first_checkpoint", "sounds/work_pilot/en/first_checkpoint.ogg", 0.2);
            }
          } else if (PilotWorkData.pilot_work_select_checkpoint + 5 == FlyRouteWorkPilotLoad[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load].length) {
            HintShow(language["Скоро будет посадка, начните снижение скорости"][curr_lang]);
          } else if (PilotWorkData.pilot_work_select_checkpoint == FlyRouteWorkPilotLoad[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load].length) {
            PilotWorkChangeState(true, ++PilotWorkData.pilot_work_type_route);
            _0x55ecfe = true;
          }
          break;
        case 2:
          if (PilotWorkData.pilot_work_select_checkpoint == FlyRouteWorkPilot[PilotWorkData.pilot_work_select_route].length) {
            PilotWorkData.pilot_work_type_route++;
            PilotWorkData.pilot_work_select_checkpoint = 0;
            if (getRandomInt(0, 2)) {
              if (curr_lang == "ru") {
                StartCustomSound("landing_plane_random", "sounds/work_pilot/ru/landing_plane_random.ogg", 0.2);
              } else if (curr_lang == "en") {
                StartCustomSound("landing_plane_random", "sounds/work_pilot/en/landing_plane_random.ogg", 0.2);
              }
            }
          } else if (PilotWorkData.pilot_work_select_checkpoint + 1 == FlyRouteWorkPilot[PilotWorkData.pilot_work_select_route].length && PilotWorkData.pilot_work_select_route == 1) {
            mp.events.callRemote("Server_PilotSendHintCops");
            if (curr_lang == "ru") {
              StartCustomSound("last_check_illegal", "sounds/work_pilot/ru/last_check_illegal.ogg", 0.2);
            } else if (curr_lang == "en") {
              StartCustomSound("last_check_illegal", "sounds/work_pilot/en/last_check_illegal.ogg", 0.2);
            }
          } else if (PilotWorkData.pilot_work_select_checkpoint == 5) {
            if (getRandomInt(0, 2)) {
              if (curr_lang == "ru") {
                StartCustomSound("center_random", "sounds/work_pilot/ru/center_random.ogg", 0.2);
              } else if (curr_lang == "en") {
                StartCustomSound("center_random", "sounds/work_pilot/en/center_random.ogg", 0.2);
              }
            }
          } else if (PilotWorkData.pilot_work_select_checkpoint + 4 == FlyRouteWorkPilot[PilotWorkData.pilot_work_select_route].length && !PilotWorkData.pilot_work_select_route) {
            HintShow(language["Скоро будет посадка, начните снижение скорости"][curr_lang]);
          }
          let _0x391477 = 0;
          if (PilotWorkData.pilot_work_select_route == 1 && (PilotWorkData.pilot_work_select_checkpoint == 14 && getRandomInt(0, 2) && !_0x391477 || PilotWorkData.pilot_work_select_checkpoint == 15 && getRandomInt(0, 2) && !_0x391477 || PilotWorkData.pilot_work_select_checkpoint == 16 && !_0x391477)) {
            mp.events.callRemote("Server_PilotWorkDropChannel", mp.game.gameplay.getGroundZFor3dCoord(localplayer.position.x, localplayer.position.y, localplayer.position.z, parseFloat(0), false));
            _0x391477 = 1;
          }
          break;
        case 3:
          if (PilotWorkData.pilot_work_select_checkpoint == FlyRouteWorkPilotUnLoad[PilotWorkData.pilot_work_select_route][PilotWorkData.pilot_work_rand_load].length) {
            PilotWorkChangeState(false, ++PilotWorkData.pilot_work_type_route);
            _0x55ecfe = true;
          }
          break;
        case 4:
          if (PilotWorkData.pilot_work_select_checkpoint + 3 == FlyRouteWorlPilotToKayo.length) {
            HintShow(language["Скоро будет посадка, начните снижение скорости"][curr_lang]);
          } else if (PilotWorkData.pilot_work_select_checkpoint == FlyRouteWorlPilotToKayo.length) {
            PilotWorkData.pilot_work_type_route++;
            PilotWorkData.pilot_work_select_checkpoint = 0;
          }
          break;
        case 5:
          PilotWorkChangeState(true, 2);
          _0x55ecfe = true;
      }
      if (!_0x55ecfe) {
        PilotWorkSetCheckpoint(PilotWorkData.pilot_work_type_route, PilotWorkData.pilot_work_select_route, PilotWorkData.pilot_work_select_checkpoint);
      }
    } finally {
      PilotWorkData.taking_checkpoint = false;
    }
  }
});
mp.events.add("Client_TestDropBox", () => {
  mp.events.callRemote("Server_PilotWorkDropChannel", mp.game.gameplay.getGroundZFor3dCoord(localplayer.position.x, localplayer.position.y, localplayer.position.z, parseFloat(0), false));
});
global.can_pickup_pilot_drop = false;
mp.events.add("Client_HidePilotDrop", () => {
  if (PilotWorkData.dropobject) {
    PilotWorkData.dropobject[4] = false;
    if (PilotWorkData.dropobject[5] && mp.objects.exists(PilotWorkData.dropobject[5])) {
      PilotWorkData.dropobject[5].destroy();
      PilotWorkData.dropobject[5] = null;
    }
    if (PilotWorkData.dropobject[0] && mp.objects.exists(PilotWorkData.dropobject[0])) {
      PilotWorkData.dropobject[0].destroy();
      PilotWorkData.dropobject[0] = null;
    }
    if (PilotWorkData.dropobject[6] && mp.game.graphics.doesParticleFxLoopedExist(PilotWorkData.dropobject[6])) {
      while (mp.game.graphics.doesParticleFxLoopedExist(PilotWorkData.dropobject[6])) {
        mp.game.graphics.stopParticleFxLooped(PilotWorkData.dropobject[6], false);
        mp.game.graphics.removeParticleFx(PilotWorkData.dropobject[6], true);
      }
      PilotWorkData.dropobject[6] = 0;
    }
    if (PilotWorkData.dropobject[7] && mp.colshapes.exists(PilotWorkData.dropobject[7])) {
      PilotWorkData.dropobject[7].destroy();
      PilotWorkData.dropobject[7] = null;
    }
    if (can_pickup_pilot_drop) {
      main_browser.execute("APPS.state.hud.interact = false;");
      can_pickup_pilot_drop = false;
    }
  }
});
mp.events.add("Client_SetPilotDrop", (_0x5659c0, _0x6731bc) => {
  if (!PilotWorkData.dropobject[0] || !mp.objects.exists(PilotWorkData.dropobject[0])) {
    main_browser.execute("APPS.state.hud.pilot_good = true;");
    setTimeout(function () {
      main_browser.execute("APPS.state.hud.pilot_good = false;");
    }, 40000);
    PilotWorkData.dropobject[1] = _0x5659c0.x;
    PilotWorkData.dropobject[2] = _0x5659c0.y;
    PilotWorkData.dropobject[3] = mp.game.gameplay.getGroundZFor3dCoord(_0x5659c0.x, _0x5659c0.y, _0x5659c0.z, parseFloat(0), false);
    PilotWorkData.dropobject[0] = mp.objects.new(mp.game.joaat("gr_prop_gr_rsply_crate04a"), new mp.Vector3(_0x5659c0.x, _0x5659c0.y, _0x6731bc ? PilotWorkData.dropobject[3] : _0x5659c0.z - 5), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    if (_0x6731bc) {
      PilotWorkData.dropobject[4] = false;
    } else {
      PilotWorkData.dropobject[5] = mp.objects.new(mp.game.joaat("p_cargo_chute_s"), new mp.Vector3(_0x5659c0.x, _0x5659c0.y, _0x5659c0.z), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: 0
      });
      PilotWorkData.dropobject[5].setCollision(true, true);
      PilotWorkData.dropobject[5].attachTo(PilotWorkData.dropobject[0].handle, 0, 0, 0, 0.5, 0, 0, 0, false, false, false, true, 2, true);
      PilotWorkData.dropobject[4] = true;
      if (!mp.game.streaming.hasNamedPtfxAssetLoaded("scr_oddjobtraffickingair")) {
        for (mp.game.streaming.requestNamedPtfxAsset("scr_oddjobtraffickingair"); !mp.game.streaming.hasNamedPtfxAssetLoaded("scr_oddjobtraffickingair");) {
          mp.game.wait(0);
        }
      }
      mp.game.graphics.setPtfxAssetNextCall("scr_oddjobtraffickingair");
      PilotWorkData.dropobject[6] = mp.game.graphics.startParticleFxLoopedAtCoord("scr_crate_drop_flare", PilotWorkData.dropobject[1], PilotWorkData.dropobject[2], PilotWorkData.dropobject[3], 180, 0, 0, 1, true, true, true, false);
      mp.game.graphics.setParticleFxLoopedColour(PilotWorkData.dropobject[6], 187, 1, 1, false);
    }
    PilotWorkData.dropobject[7] = mp.colshapes.newSphere(PilotWorkData.dropobject[1], PilotWorkData.dropobject[2], PilotWorkData.dropobject[3], 4);
    PilotWorkData.dropobject[7].pilot_sphere = true;
  }
});
mp.events.add("render", () => {
  if (PilotWorkData.pilot_load) {
    mp.game.controls.disableControlAction(0, 75, true);
  }
  if (PilotWorkData.dropobject[4] && PilotWorkData.dropobject[0].slide(PilotWorkData.dropobject[1], PilotWorkData.dropobject[2], PilotWorkData.dropobject[3], 0.1, 0.1, 0.1, false) == 1 && (PilotWorkData.dropobject[4] = false, mp.objects.exists(PilotWorkData.dropobject[5]) && (PilotWorkData.dropobject[5].destroy(), PilotWorkData.dropobject[5] = 0), PilotWorkData.dropobject[6] != 0)) {
    while (mp.game.graphics.doesParticleFxLoopedExist(PilotWorkData.dropobject[6])) {
      mp.game.graphics.stopParticleFxLooped(PilotWorkData.dropobject[6], false);
      mp.game.graphics.removeParticleFx(PilotWorkData.dropobject[6], true);
    }
    PilotWorkData.dropobject[6] = 0;
  }
});
mp.events.add("Client_ClearPilotWorkEnd", () => {
  destroyPilotCheckpointVisuals();
  PilotWorkData.pilot_work_select_route = null;
  PilotWorkData.pilot_work_type_route = null;
  PilotWorkData.pilot_work_rand_load = -1;
  PilotWorkData.pilot_work_select_checkpoint = null;
  PilotWorkData.pilot_player_camera = null;
  PilotWorkData.pilot_load = false;
  PilotWorkData.pending_first_checkpoint = null;
  PilotWorkData.taking_checkpoint = false;
  PilotWorkData.last_checkpoint_at = 0;
  player_work_pilot = false;
  PilotWorkData.current_data = [];
  if (curr_lang == "ru") {
    StartCustomSound("after_del_plane", "sounds/work_pilot/ru/after_del_plane.ogg", 0.2);
  } else if (curr_lang == "en") {
    StartCustomSound("after_del_plane", "sounds/work_pilot/en/after_del_plane.ogg", 0.2);
  }
  mp.vehicles.forEachInStreamRange(_0x16fc86 => {
    if (mp.game.vehicle.isThisModelAPlane(_0x16fc86.model)) {
      _0x16fc86.setAlpha(255);
    }
  });
});
mp.events.add("Client_ShowBathyscaphePos", (_0x266f9e, _0x2d8872, _0xf088ea) => {
  if (delivery_shape) {
    delivery_shape.destroy();
    delivery_shape = undefined;
  }
  if (delivery_blips) {
    delivery_blips.destroy();
    delivery_blips = undefined;
  }
  if (delivery_marker) {
    delivery_marker.destroy();
    delivery_marker = undefined;
  }
  delivery_blips = mp.blips.new(1, new mp.Vector3(parseFloat(_0x266f9e), parseFloat(_0x2d8872), parseFloat(_0xf088ea)), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  delivery_blips.setRoute(true);
  delivery_marker = mp.markers.new(1, new mp.Vector3(parseFloat(_0x266f9e), parseFloat(_0x2d8872), parseFloat(_0xf088ea) - 5), parseFloat(6), {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 0
  });
  delivery_shape = mp.colshapes.newCircle(parseFloat(_0x266f9e), parseFloat(_0x2d8872), 3, 0);
  delivery_shape.is_batyscape_gps_shape = true;
});
mp.events.add("playerEnterColshape", _0x5b3f11 => {
  if (_0x5b3f11.is_batyscape_gps_shape == 1) {
    if (delivery_shape) {
      delivery_shape.destroy();
      delivery_shape = undefined;
    }
    if (delivery_blips) {
      delivery_blips.destroy();
      delivery_blips = undefined;
    }
    mp.events.callRemote("Server_TogglePlayerEngineBathyscaphe", false);
    let _0x43efec = 0;
    int_val = setInterval(function () {
      try {
        _0x43efec += 30;
        main_browser.execute("APPS.state.hud.fire_process = " + _0x43efec + ";");
        if (_0x43efec >= 5000) {
          if (int_val != null) {
            clearInterval(int_val);
            int_val = undefined;
          }
          mp.events.callRemote("Server_TogglePlayerEngineBathyscaphe", true);
          mp.events.callRemote("Server_BathyscapheReachPoint");
          main_browser.execute("APPS.state.hud.fire_process = 0;");
        }
      } catch (_0x1ac842) {
        console.log("ERROR[change weather]:", _0x1ac842);
      }
    }, 100);
    return;
  }
});
mp.events.add("Client_DeleteBathyscapheVariables", () => {
  if (delivery_shape) {
    delivery_shape.destroy();
    delivery_shape = undefined;
  }
  if (delivery_blips) {
    delivery_blips.destroy();
    delivery_blips = undefined;
  }
  if (delivery_marker) {
    delivery_marker.destroy();
    delivery_marker = undefined;
  }
});