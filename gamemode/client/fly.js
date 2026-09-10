const controlsIds = {
  W: 32,
  S: 33,
  A: 34,
  D: 35,
  Space: 321,
  LCtrl: 326,
  Shift: 21,
  LAlt: 19
};
global.fly = {
  flying: false,
  f: 2,
  w: 2,
  h: 2,
  point_distance: 1000
};
global.gameplayCam = mp.cameras.new("gameplay");
let direction = null;
let coords = null;
function pointingAt(_0x19369b) {
  const _0x344089 = new mp.Vector3(direction.x * _0x19369b + coords.x, direction.y * _0x19369b + coords.y, direction.z * _0x19369b + coords.z);
  const _0x2ae99b = mp.raycasting.testPointToPoint(coords, _0x344089, [1, 16]);
  if (_0x2ae99b === undefined) {
    return "undefined";
  } else {
    if (_0x2ae99b && typeof _0x2ae99b.entity == "number" && _0x2ae99b.entity !== 0 && mp.game.entity.doesExist(_0x2ae99b.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x2ae99b.entity);
    }
    return _0x2ae99b;
  }
}
mp.keys.bind(90, false, function () {
  if (!loggedin || chatActive || in_spectate || in_another_spectate || GlobalCheck() == 1 && at_pubg == 0 && at_duel_location == 0 && at_famwar == 0 && at_bunker_dm == 0 && (!is_school || is_school && global.at_school_dm == 0) && !inObjectEditor && !inBarricadeEditor) {
    return;
  }
  if (is_admin !== true) {
    return;
  }
  UpdatePositionAC();
  const _0x1176b1 = mp.game.controls;
  const _0x24ec99 = global.fly;
  direction = global.gameplayCam.getDirection();
  coords = global.gameplayCam.getCoord();
  _0x24ec99.flying = !_0x24ec99.flying;
  const _0xfa21a7 = mp.players.local;
  _0xfa21a7.setInvincible(_0x24ec99.flying);
  _0xfa21a7.freezePosition(_0x24ec99.flying);
  if (!_0x24ec99.flying && !_0x1176b1.isControlPressed(0, controlsIds.Space)) {
    const _0x56ec0d = mp.players.local.position;
    _0x56ec0d.z = mp.game.gameplay.getGroundZFor3dCoord(_0x56ec0d.x, _0x56ec0d.y, _0x56ec0d.z, 0, false);
    mp.players.local.setCoordsNoOffset(_0x56ec0d.x, _0x56ec0d.y, _0x56ec0d.z, false, false, false);
  }
  mp.events.callRemote("invisible", _0x24ec99.flying);
});
mp.events.add("render", () => {
  if (fly.flying) {
    const _0x159cde = mp.game.controls;
    const _0x5ce70e = global.fly;
    direction = global.gameplayCam.getDirection();
    coords = global.gameplayCam.getCoord();
    let _0x58e3f0 = false;
    const _0x30654e = mp.players.local.position;
    let _0x2164c4 = _0x159cde.isControlPressed(0, controlsIds.Shift) ? 1 : 0.1;
    _0x2164c4 = _0x159cde.isControlPressed(0, controlsIds.LAlt) ? 0.05 : _0x2164c4;
    if (_0x159cde.isControlPressed(0, controlsIds.Shift) && _0x159cde.isControlPressed(0, controlsIds.LAlt)) {
      _0x2164c4 = 0.01;
    }
    if (_0x159cde.isControlPressed(0, controlsIds.W)) {
      if (_0x5ce70e.f < 8) {
        _0x5ce70e.f *= 1.025;
      }
      _0x30654e.x += direction.x * _0x5ce70e.f * _0x2164c4;
      _0x30654e.y += direction.y * _0x5ce70e.f * _0x2164c4;
      _0x30654e.z += direction.z * _0x5ce70e.f * _0x2164c4;
      _0x58e3f0 = true;
    } else if (_0x159cde.isControlPressed(0, controlsIds.S)) {
      if (_0x5ce70e.f < 8) {
        _0x5ce70e.f *= 1.025;
      }
      _0x30654e.x -= direction.x * _0x5ce70e.f * _0x2164c4;
      _0x30654e.y -= direction.y * _0x5ce70e.f * _0x2164c4;
      _0x30654e.z -= direction.z * _0x5ce70e.f * _0x2164c4;
      _0x58e3f0 = true;
    } else {
      _0x5ce70e.f = 2;
    }
    if (_0x159cde.isControlPressed(0, controlsIds.A)) {
      if (_0x5ce70e.l < 8) {
        _0x5ce70e.l *= 1.025;
      }
      _0x30654e.x += -direction.y * _0x5ce70e.l * _0x2164c4;
      _0x30654e.y += direction.x * _0x5ce70e.l * _0x2164c4;
      _0x58e3f0 = true;
    } else if (_0x159cde.isControlPressed(0, controlsIds.D)) {
      if (_0x5ce70e.l < 8) {
        _0x5ce70e.l *= 1.05;
      }
      _0x30654e.x -= -direction.y * _0x5ce70e.l * _0x2164c4;
      _0x30654e.y -= direction.x * _0x5ce70e.l * _0x2164c4;
      _0x58e3f0 = true;
    } else {
      _0x5ce70e.l = 2;
    }
    if (_0x159cde.isControlPressed(0, controlsIds.Space)) {
      if (_0x5ce70e.h < 8) {
        _0x5ce70e.h *= 1.025;
      }
      _0x30654e.z += _0x5ce70e.h * _0x2164c4;
      _0x58e3f0 = true;
    } else if (_0x159cde.isControlPressed(0, controlsIds.LCtrl)) {
      if (_0x5ce70e.h < 8) {
        _0x5ce70e.h *= 1.05;
      }
      _0x30654e.z -= _0x5ce70e.h * _0x2164c4;
      _0x58e3f0 = true;
    } else {
      _0x5ce70e.h = 2;
    }
    if (_0x58e3f0) {
      mp.players.local.setCoordsNoOffset(_0x30654e.x, _0x30654e.y, _0x30654e.z, false, false, false);
    }
  }
});
mp.events.add("getCamCoords", _0x2c8586 => {
  mp.events.callRemote("saveCamCoords", JSON.stringify(coords), JSON.stringify(pointingAt(fly.point_distance)), _0x2c8586);
});
const camera = mp.cameras.new("gameplay");
let startCameraPos = null;
let endCameraPos = null;
mp.events.add("Client_SetCameraPosition", (_0x5cfb6a, _0x4842b4, _0x3a3eec) => {
  if (is_admin !== true) {
    return;
  }
  let _0x1b3932 = camera.getCoord();
  let _0x21875b = camera.getRot(2);
  if (_0x5cfb6a == 0) {
    if (startCameraPos != null) {
      startCameraPos.destroy();
      startCameraPos = null;
    }
    startCameraPos = mp.cameras.new("default", new mp.Vector3(_0x1b3932.x, _0x1b3932.y, _0x1b3932.z), new mp.Vector3(_0x21875b.x, _0x21875b.y, _0x21875b.z), _0x4842b4);
    mp.game.cam.renderScriptCams(true, true, 0, true, false);
    setTimeout(function () {
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
    }, 1000);
  } else {
    if (endCameraPos != null) {
      endCameraPos.destroy();
      endCameraPos = null;
    }
    endCameraPos = mp.cameras.new("default", new mp.Vector3(_0x1b3932.x, _0x1b3932.y, _0x1b3932.z), new mp.Vector3(_0x21875b.x, _0x21875b.y, _0x21875b.z), _0x4842b4);
    endCameraPos.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 0, true, false);
    setTimeout(function () {
      startCameraPos.setActiveWithInterp(endCameraPos.handle, _0x3a3eec, 0, 0);
      setTimeout(function () {
        mp.game.cam.renderScriptCams(false, true, 0, true, false);
        if (startCameraPos != null) {
          startCameraPos.destroy();
          startCameraPos = null;
        }
        if (endCameraPos != null) {
          endCameraPos.destroy();
          endCameraPos = null;
        }
      }, _0x3a3eec);
    }, 1000);
  }
});
mp.events.add("Client_SetCameraPositionTest", (_0xd08f53, _0x37fd18, _0x281072) => {
  let _0x268a1f = camera.getCoord();
  let _0xfd7b66 = camera.getRot(2);
  if (_0xd08f53 == 0) {
    if (startCameraPos != null) {
      startCameraPos.destroy();
      startCameraPos = null;
    }
    startCameraPos = mp.cameras.new("default", new mp.Vector3(_0x268a1f.x, _0x268a1f.y, _0x268a1f.z), new mp.Vector3(_0xfd7b66.x, _0xfd7b66.y, _0xfd7b66.z), _0x37fd18);
    mp.game.cam.renderScriptCams(true, true, 0, true, false);
    setTimeout(function () {
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
    }, 1000);
  } else {
    if (!startCameraPos) {
      return;
    }
    if (endCameraPos != null) {
      endCameraPos.destroy();
      endCameraPos = null;
    }
    endCameraPos = mp.cameras.new("default", new mp.Vector3(_0x268a1f.x, _0x268a1f.y, _0x268a1f.z), new mp.Vector3(_0xfd7b66.x, _0xfd7b66.y, _0xfd7b66.z), _0x37fd18);
    mp.events.callRemote("savecamcoordsTest", JSON.stringify({
      start: {
        position: _0x268a1f,
        rotation: _0xfd7b66,
        fov: endCameraPos.getFov()
      },
      end: {
        position: startCameraPos.getCoord(),
        rotation: startCameraPos.getRot(2),
        fov: startCameraPos.getFov()
      }
    }));
    endCameraPos.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 0, true, false);
    setTimeout(function () {
      startCameraPos.setActiveWithInterp(endCameraPos.handle, _0x281072, 0, 0);
      setTimeout(function () {
        mp.game.cam.renderScriptCams(false, true, 0, true, false);
        if (startCameraPos != null) {
          startCameraPos.destroy();
          startCameraPos = null;
        }
        if (endCameraPos != null) {
          endCameraPos.destroy();
          endCameraPos = null;
        }
      }, _0x281072);
    }, 1000);
  }
});