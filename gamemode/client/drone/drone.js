let drone = {};
global.isInDrone = false;
let contRcRatePR = 1.5;
let contRcRateY = 1.5;
let contExpoPR = 0.8;
let contExpoY = 0.8;
let contRateP = 0.5;
let contRateR = 0.5;
let contRateY = 0.3;
drone.playSound = function (_0x1f15a1, _0x52fea0, _0x2319f4, _0x52973c = "") {
  let _0x417990 = mp.vehicles.atRemoteId(_0x1f15a1);
  if (_0x417990 !== undefined && mp.vehicles.exists(_0x417990)) {
    if (_0x417990.currentSound || _0x417990.currentSound === 0) {
      let _0x58ff88 = _0x417990.currentSound;
      mp.game.audio.stopSound(_0x58ff88);
      mp.game.audio.releaseSoundId(_0x58ff88);
      _0x417990.currentSound = null;
    }
    let _0x2c9fba = mp.game.invoke("0x430386FE9BF80B45");
    mp.game.audio.playSoundFromEntity(_0x2c9fba, _0x2319f4, _0x417990.handle, _0x52973c, true, 0);
    _0x417990.currentSound = _0x2c9fba;
  }
};
drone.exit = function () {
  isInDrone = false;
  vision_state = 0;
  mp.events.callRemote("server:stopSpecMission");
  mp.game.graphics.setNightvision(false);
  mp.game.graphics.setSeethrough(false);
  main_browser.execute("APPS.state.hud.usesDrone = false;");
};
drone.startOrEnd = function () {
  if (isInDrone) {
    drone.exit();
  }
};
drone.isDrone = function () {
  return isInDrone;
};
drone.calculateDegSec = function (_0x1dcad0, _0x423a79, _0x3fff67, _0x5cc2d0) {
  return 200 / (1 - Math.abs(_0x1dcad0) * _0x3fff67) * (_0x1dcad0 * _0x1dcad0 * _0x1dcad0 * _0x5cc2d0 + _0x1dcad0 * (1 - _0x5cc2d0)) * _0x423a79;
};
drone.calculateDegSecPitch = function (_0x5207a8) {
  return drone.calculateDegSec(_0x5207a8, contRcRatePR, contRateP, contExpoPR);
};
drone.calculateDegSecRoll = function (_0x27cdb2) {
  return drone.calculateDegSec(_0x27cdb2, contRcRatePR, contRateR, contExpoPR);
};
drone.calculateDegSecYaw = function (_0x4fe3cb) {
  return drone.calculateDegSec(_0x4fe3cb, contRcRateY, contRateY, contExpoY);
};
drone.vectorMag = function (_0x3226e5) {
  return Math.sqrt(_0x3226e5.x * _0x3226e5.x + _0x3226e5.y * _0x3226e5.y);
};
drone.vectorNorm = function (_0x16c169) {
  return Math.sqrt(_0x16c169.x * _0x16c169.x + _0x16c169.y * _0x16c169.y);
};
let maxSpeed = 13;
let speedSlowly = 0.1;
let currentSpeed = 0;
let currentSpeedZ = 0;
let speedOffset = 0.4;
let speedLeftRight = 0.9;
let vision_state = 0;
drone.keyPressToggleVision = function () {
  if (isInDrone) {
    if (!loggedin || chatActive) {
      return;
    }
    if (vision_state === 0) {
      mp.game.graphics.setNightvision(true);
      vision_state = 1;
    } else if (vision_state === 1) {
      mp.game.graphics.setNightvision(false);
      mp.game.graphics.setSeethrough(true);
      vision_state = 2;
    } else {
      mp.game.graphics.setNightvision(false);
      mp.game.graphics.setSeethrough(false);
      vision_state = 0;
    }
    mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
  }
};
mp.events.add("playerLeaveVehicle", () => {
  if (isInDrone) {
    isInDrone = false;
    mp.game.graphics.setNightvision(false);
    mp.game.graphics.setSeethrough(false);
    vision_state = 0;
  }
});
let is_disabled_vision = false;
mp.events.add("Client_DroneState", (_0x906839, _0x79d57f) => {
  is_disabled_vision = _0x79d57f;
  if (_0x906839 == 1) {
    if (defaultmic) {
      ToggleVoiceChat(false, 0);
    }
    if (racionmic == 1) {
      ToggleVoiceChat(false, 1);
    }
    if (familymic == 1) {
      ToggleVoiceChat(false, 2);
    }
    isInDrone = true;
    main_browser.execute("APPS.state.hud.droneAllowedVision = " + !is_disabled_vision + ";");
    main_browser.execute("APPS.state.hud.usesDrone = true;");
  }
});
mp.events.add("Client_CloseDrone", () => {
  CloseDrone();
});
mp.events.add("vSync:Sound", _0x47c2e9 => {
  const _0x3c0544 = mp.vehicles.atRemoteId(_0x47c2e9);
  if (_0x3c0544 !== undefined && mp.vehicles.exists(_0x3c0544)) {
    _0x3c0544.setAlpha(0);
    drone.playSound(_0x3c0544.remoteId, "drone", "Flight_Loop", "DLC_Arena_Drone_Sounds");
    _0x3c0544.setCanBeDamaged(false);
    _0x3c0544.setInvincible(true);
  }
});
const drones_pressets = [{
  Bone: "bodyshell",
  Model: 1657647215,
  PosOffset1: 0,
  PosOffset2: 0,
  PosOffset3: 0.03,
  RotOffset1: 0,
  RotOffset2: 0,
  RotOffset3: 180
}, {
  Bone: "bodyshell",
  Model: 442185650,
  PosOffset1: 0,
  PosOffset2: 0,
  PosOffset3: 0.03,
  RotOffset1: 0,
  RotOffset2: 0,
  RotOffset3: 180
}, {
  Bone: "bodyshell",
  Model: -388213579,
  PosOffset1: 0,
  PosOffset2: 0,
  PosOffset3: 0.03,
  RotOffset1: 0,
  RotOffset2: 0,
  RotOffset3: 180
}];
mp.events.addDataHandler("markAsDrone", (_0x53ef0d, _0x4e278c) => {
  if (_0x53ef0d.handle !== 0) {
    attachObjects(_0x53ef0d, drones_pressets[_0x4e278c - 1]);
  }
});
let attachedObjects = [];
function deattachObjects(_0x9a4d7b) {
  if (_0x9a4d7b && _0x9a4d7b.handle !== 0 && attachedObjects[_0x9a4d7b.id] != null) {
    attachedObjects[_0x9a4d7b.id].destroy();
    attachedObjects[_0x9a4d7b.id] = undefined;
  }
}
function attachObjects(_0x4b4f68, _0x3790f0) {
  if (_0x4b4f68 && _0x4b4f68.handle !== 0) {
    if (attachedObjects[_0x4b4f68.id] != null) {
      attachedObjects[_0x4b4f68.id].destroy();
      attachedObjects[_0x4b4f68.id] = undefined;
    }
    if (!_0x3790f0) {
      return;
    }
    const _0x287cb = _0x3790f0;
    const _0x22eaf0 = _0x4b4f68.getBoneIndexByName(_0x287cb.Bone);
    const _0x25ee03 = mp.objects.new(_0x287cb.Model, _0x4b4f68.position, {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: _0x4b4f68.dimension
    });
    _0x25ee03.setCollision(false, false);
    _0x25ee03.attachTo(_0x4b4f68.handle, _0x22eaf0, _0x287cb.PosOffset1, _0x287cb.PosOffset2, _0x287cb.PosOffset3, _0x287cb.RotOffset1, _0x287cb.RotOffset2, _0x287cb.RotOffset3, true, false, false, false, 0, true);
    setTimeout(function () {
      if (_0x25ee03 && mp.objects.exists(_0x25ee03) && _0x4b4f68 && _0x4b4f68.handle !== 0) {
        _0x25ee03.attachTo(_0x4b4f68.handle, _0x22eaf0, _0x287cb.PosOffset1, _0x287cb.PosOffset2, _0x287cb.PosOffset3, _0x287cb.RotOffset1, _0x287cb.RotOffset2, _0x287cb.RotOffset3, true, false, false, false, 0, true);
      }
    }, 250);
    attachedObjects[_0x4b4f68.id] = _0x25ee03;
  }
}
mp.events.add("Client_detachVehicleObject", function (_0x3a81e5) {
  deattachObjects(_0x3a81e5);
});
mp.events.add("entityStreamOut", function (_0x3b779f) {
  if (_0x3b779f.type === "vehicle") {
    deattachObjects(_0x3b779f);
  }
});
mp.events.add("render", () => {
  if (!isInDrone || !loggedin || chatActive) {
    return;
  }
  mp.game.ui.hideHudComponentThisFrame(6);
  const _0x2e75fc = mp.players.local.vehicle;
  if (_0x2e75fc) {
    drone.disableControls();
    let _0x585116 = mp.game.controls.isDisabledControlPressed(0, 32);
    let _0x5da903 = mp.game.controls.isDisabledControlPressed(0, 33);
    let _0x4a1e47 = mp.game.controls.isDisabledControlPressed(0, 34);
    let _0x282989 = mp.game.controls.isDisabledControlPressed(0, 35);
    let _0x57d363 = mp.game.controls.isDisabledControlPressed(0, 326);
    let _0x20613d = mp.game.controls.isDisabledControlPressed(0, 321);
    let _0x5ece77 = _0x585116 ? speedOffset : 0;
    let _0xe54153 = _0x5da903 ? speedOffset * -1 : 0;
    let _0x5bfd14 = _0x4a1e47 ? speedLeftRight : 0;
    let _0x1af2ab = _0x282989 ? speedLeftRight * -1 : 0;
    let _0x546339 = _0x2e75fc.hasCollidedWithAnything();
    let _0x5d8b55 = 0;
    let _0x335dec = 0;
    let _0x37e5ed = 0;
    if (_0x585116) {
      _0x335dec = -0.6;
    }
    if (_0x5da903) {
      _0x335dec = 0.6;
    }
    if (_0x4a1e47 && (currentSpeed > 5 || currentSpeed < -5)) {
      _0x37e5ed = -2;
    }
    if (_0x282989 && (currentSpeed > 5 || currentSpeed < -5)) {
      _0x37e5ed = 2;
    }
    let _0x386f9b = 0;
    let _0x1ec48f = 0;
    if (mp.game.controls.isDisabledControlPressed(0, 44) && !_0x546339) {
      _0x386f9b = 0.004;
    }
    if (mp.game.controls.isDisabledControlPressed(0, 20) && !_0x546339) {
      _0x386f9b = -0.004;
    }
    if (!mp.game.controls.isDisabledControlPressed(0, 20) && !mp.game.controls.isDisabledControlPressed(0, 44) && !_0x546339) {
      if (currentSpeedZ < -0.1) {
        _0x1ec48f = 0.004;
      } else if (currentSpeedZ > 0.1) {
        _0x1ec48f = -0.004;
      } else if (currentSpeedZ < 0) {
        _0x1ec48f = 0.001;
      } else if (currentSpeedZ > 0) {
        _0x1ec48f = -0.001;
      }
    }
    if (!_0x4a1e47 && !_0x282989) {
      if (_0x2e75fc.getRotation(0).y < -1) {
        _0x37e5ed = 2;
      } else if (_0x2e75fc.getRotation(0).y > 1) {
        _0x37e5ed = -2;
      } else if (_0x2e75fc.getRotation(0).y < 0) {
        _0x37e5ed = 0.001;
      } else if (_0x2e75fc.getRotation(0).y > 0) {
        _0x37e5ed = -0.001;
      }
    }
    if (!_0x585116 && !_0x5da903 && currentSpeed !== 0) {
      if (currentSpeed < -1) {
        _0x5d8b55 = 0.05;
      } else if (currentSpeed > 1) {
        _0x5d8b55 = -0.05;
      } else if (currentSpeed < 0) {
        _0x5d8b55 = 0.001;
      } else if (currentSpeed > 0) {
        _0x5d8b55 = -0.001;
      }
      if (_0x2e75fc.getRotation(0).x < -1) {
        _0x335dec = 0.6;
      } else if (_0x2e75fc.getRotation(0).x > 1) {
        _0x335dec = -0.6;
      } else if (_0x2e75fc.getRotation(0).x < 0) {
        _0x335dec = 0.001;
      } else if (_0x2e75fc.getRotation(0).x > 0) {
        _0x335dec = -0.001;
      }
    }
    let _0x2d38e4 = _0x5bfd14 + _0x1af2ab;
    currentSpeed += _0x5ece77 + _0xe54153 + _0x5d8b55;
    if (_0x2e75fc.isInWater()) {
      _0x386f9b = 0.01;
    }
    let _0x17a5f4 = 0;
    if (currentSpeed > 1) {
      _0x17a5f4 = _0x386f9b + _0x2e75fc.getRotation(0).x / -200;
    }
    if (currentSpeed < -1) {
      _0x17a5f4 = _0x386f9b + _0x2e75fc.getRotation(0).x / 400;
    }
    currentSpeedZ += _0x386f9b + _0x1ec48f;
    if (currentSpeedZ > maxSpeed / 100) {
      currentSpeedZ = maxSpeed / 100;
    }
    if (currentSpeedZ < maxSpeed / -100) {
      currentSpeedZ = maxSpeed / -100;
    }
    if (maxSpeed < currentSpeed) {
      currentSpeed = maxSpeed;
    }
    if (maxSpeed * -1 / 2 > currentSpeed) {
      currentSpeed = maxSpeed * -1 / 2;
    }
    if (_0x546339 && currentSpeed > 5) {
      currentSpeed = 5;
    }
    let _0x1aa97f = _0x2e75fc.getOffsetFromInWorldCoords(0, currentSpeed / 50, currentSpeedZ + _0x17a5f4);
    let _0x1117e6 = _0x2e75fc.getRotation(0).z;
    let _0x30c39a = _0x1aa97f.z;
    if (_0x20613d) {
      _0x30c39a += 0.25;
    } else if (_0x57d363) {
      const _0x5344a7 = mp.game.gameplay.getGroundZFor3dCoord(_0x1aa97f.x, _0x1aa97f.y, _0x1aa97f.z - 0.25, 0, false);
      if (_0x1aa97f.z - 0.25 > _0x5344a7 && _0x5344a7 != 0) {
        _0x30c39a -= 0.25;
      }
    }
    _0x2e75fc.setVelocity(0, currentSpeed / 30, currentSpeedZ + _0x2e75fc.getRotation(0).x / -100);
    let _0x3d18b2 = _0x335dec + _0x2e75fc.getRotation(0).x;
    let _0x303abf = _0x37e5ed + _0x2e75fc.getRotation(0).y;
    if (_0x3d18b2 > 25) {
      _0x3d18b2 = 25;
    }
    if (_0x3d18b2 < -25) {
      _0x3d18b2 = -25;
    }
    if (_0x303abf > 50) {
      _0x303abf = 50;
    }
    if (_0x303abf < -50) {
      _0x303abf = -50;
    }
    _0x2e75fc.setRotation(_0x3d18b2, _0x303abf, _0x1117e6 + _0x2d38e4, 0, false);
    _0x2e75fc.setCoordsNoOffset(_0x1aa97f.x, _0x1aa97f.y, _0x30c39a, true, true, true);
  } else {
    drone.exit();
  }
});
global.CloseDrone = function () {
  if (isInDrone) {
    drone.exit();
  }
};
mp.keys.bind(78, true, function () {
  if (isInDrone && !is_disabled_vision) {
    drone.keyPressToggleVision();
  }
});
drone.disableControls = function () {
  mp.game.controls.disableControlAction(0, 85, true);
  mp.game.controls.disableControlAction(0, 75, true);
  mp.game.controls.disableControlAction(0, 8, true);
  mp.game.controls.disableControlAction(0, 9, true);
  mp.game.controls.disableControlAction(0, 30, true);
  mp.game.controls.disableControlAction(0, 31, true);
  mp.game.controls.disableControlAction(0, 32, true);
  mp.game.controls.disableControlAction(0, 33, true);
  mp.game.controls.disableControlAction(0, 34, true);
  mp.game.controls.disableControlAction(0, 35, true);
  mp.game.controls.disableControlAction(0, 36, true);
  mp.game.controls.disableControlAction(0, 63, true);
  mp.game.controls.disableControlAction(0, 64, true);
  mp.game.controls.disableControlAction(0, 71, true);
  mp.game.controls.disableControlAction(0, 72, true);
  mp.game.controls.disableControlAction(0, 77, true);
  mp.game.controls.disableControlAction(0, 78, true);
  mp.game.controls.disableControlAction(0, 78, true);
  mp.game.controls.disableControlAction(0, 87, true);
  mp.game.controls.disableControlAction(0, 88, true);
  mp.game.controls.disableControlAction(0, 89, true);
  mp.game.controls.disableControlAction(0, 90, true);
  mp.game.controls.disableControlAction(0, 129, true);
  mp.game.controls.disableControlAction(0, 130, true);
  mp.game.controls.disableControlAction(0, 133, true);
  mp.game.controls.disableControlAction(0, 134, true);
  mp.game.controls.disableControlAction(0, 136, true);
  mp.game.controls.disableControlAction(0, 139, true);
  mp.game.controls.disableControlAction(0, 146, true);
  mp.game.controls.disableControlAction(0, 147, true);
  mp.game.controls.disableControlAction(0, 148, true);
  mp.game.controls.disableControlAction(0, 149, true);
  mp.game.controls.disableControlAction(0, 150, true);
  mp.game.controls.disableControlAction(0, 151, true);
  mp.game.controls.disableControlAction(0, 232, true);
  mp.game.controls.disableControlAction(0, 266, true);
  mp.game.controls.disableControlAction(0, 267, true);
  mp.game.controls.disableControlAction(0, 268, true);
  mp.game.controls.disableControlAction(0, 269, true);
  mp.game.controls.disableControlAction(0, 278, true);
  mp.game.controls.disableControlAction(0, 279, true);
  mp.game.controls.disableControlAction(0, 338, true);
  mp.game.controls.disableControlAction(0, 339, true);
  mp.game.controls.disableControlAction(0, 44, true);
  mp.game.controls.disableControlAction(0, 20, true);
  mp.game.controls.disableControlAction(0, 47, true);
};
mp.game.graphics.setNightvision(false);
mp.game.graphics.setSeethrough(false);