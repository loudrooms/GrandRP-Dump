global.teleport_active = false;
let teleport_marker_size = 0.5;
let teleport_pinned_pos = null;
let coord_pick_active = false;
let coord_pick_points = [];
const COORD_PICK_MAX_VISIBLE = 30;
const COORD_PICK_SEND_CHUNK = 250;
const COORD_PICK_SEND_DELAY = 400;
const COORD_PICK_MARKER_SIZE = 0.5;
function canUseCoordPick() {
  return is_admin === true && test_mode === true;
}
function setCoordPickActive(_0x5b5d4a) {
  coord_pick_active = _0x5b5d4a === true;
  if (coord_pick_active) {
    teleport_active = false;
    teleport_pinned_pos = null;
    mp.gui.cursor.show(false, true);
    mp.gui.chat.push("Coord pick ON (" + coord_pick_points.length + " points)");
  } else {
    mp.gui.cursor.show(false, false);
    mp.gui.chat.push("Coord pick OFF (" + coord_pick_points.length + " points)");
  }
}
function addCoordPickPoint(_0x3deb1c) {
  coord_pick_points.push({
    x: parseFloat(_0x3deb1c.x.toFixed(3)),
    y: parseFloat(_0x3deb1c.y.toFixed(3)),
    z: parseFloat(_0x3deb1c.z.toFixed(3))
  });
  mp.gui.chat.push("Added #" + coord_pick_points.length + ": " + coord_pick_points[coord_pick_points.length - 1].x + ", " + coord_pick_points[coord_pick_points.length - 1].y + ", " + coord_pick_points[coord_pick_points.length - 1].z);
}
function removeCoordPickPoint(_0x3714ee) {
  return !(_0x3714ee < 1) && !(_0x3714ee > coord_pick_points.length) && (coord_pick_points.splice(_0x3714ee - 1, 1), true);
}
function getCoordPickDistanceToPlayer(_0x4f9a37) {
  const _0x52fd95 = mp.players.local.position;
  return mp.game.system.vdist(_0x52fd95.x, _0x52fd95.y, _0x52fd95.z, _0x4f9a37.x, _0x4f9a37.y, _0x4f9a37.z);
}
function getCoordPickVisiblePoints() {
  if (!coord_pick_points.length) {
    return [];
  }
  const _0x15b448 = coord_pick_points.map((_0x309428, _0x2bcf9f) => ({
    index: _0x2bcf9f + 1,
    point: _0x309428,
    distance: getCoordPickDistanceToPlayer(_0x309428)
  }));
  _0x15b448.sort((_0x4b2c7f, _0x6bfb2e) => _0x4b2c7f.distance - _0x6bfb2e.distance);
  return _0x15b448.slice(0, 30);
}
function formatCoordPickChunk(_0x59ac9f, _0x2e3c31, _0x516798) {
  let _0xa8d13c = "[coordpick " + _0x2e3c31 + "/" + _0x516798 + "] ";
  for (let _0x38acff = 0; _0x38acff < _0x59ac9f.length; _0x38acff++) {
    const _0x45e704 = _0x59ac9f[_0x38acff];
    _0xa8d13c += "new mp.Vector3(" + _0x45e704.x + ", " + _0x45e704.y + ", " + _0x45e704.z + "),";
  }
  return _0xa8d13c;
}
function sendCoordPickToServer() {
  if (!coord_pick_points.length) {
    mp.gui.chat.push("Coord pick is empty");
    return;
  }
  const _0x42a1ba = Math.ceil(coord_pick_points.length / 250);
  mp.gui.chat.push("Sending " + coord_pick_points.length + " points in " + _0x42a1ba + " packet(s)...");
  for (let _0x1673be = 0; _0x1673be < _0x42a1ba; _0x1673be++) {
    setTimeout(() => {
      const _0x1973c8 = formatCoordPickChunk(coord_pick_points.slice(_0x1673be * 250, (_0x1673be + 1) * 250), _0x1673be + 1, _0x42a1ba);
      mp.events.callRemote("Server_log", _0x1973c8);
    }, _0x1673be * 400);
  }
}
mp.keys.bind(113, false, () => {
  if ((GlobalCheck() != 1 || at_pubg != 0) && !at_drive_mode) {
    if (is_admin === true) {
      if (coord_pick_active) {
        setCoordPickActive(false);
      }
      teleport_active = !teleport_active;
      teleport_marker_size = 0.5;
      teleport_pinned_pos = null;
      if (teleport_active) {
        mp.gui.cursor.show(false, true);
      } else {
        mp.gui.cursor.show(false, false);
      }
    }
  }
});
mp.keys.bind(70, false, () => {
  if (teleport_active && is_admin === true) {
    if (teleport_pinned_pos) {
      teleport_pinned_pos = null;
    } else {
      const _0x574f9a = mp.gui.cursor.position;
      const _0x3fd2cb = screen2d3d.screen2dToWorld3d(_0x574f9a[0], _0x574f9a[1]);
      if (_0x3fd2cb && _0x3fd2cb.position) {
        teleport_pinned_pos = {
          x: _0x3fd2cb.position.x,
          y: _0x3fd2cb.position.y,
          z: _0x3fd2cb.position.z
        };
      }
    }
  }
});
mp.events.add("click", (_0x2332c1, _0x2bddee, _0x1c0ff4, _0x2b1d80, _0x41feaa, _0x12e83d, _0x2197b6, _0x506d2f) => {
  if (coord_pick_active == 1 && canUseCoordPick()) {
    if (GlobalCheck() == 1 && at_pubg == 0) {
      return;
    }
    if (_0x2b1d80 == "left" && _0x1c0ff4 === "up") {
      const _0x18585e = screen2d3d.screen2dToWorld3d(_0x2332c1, _0x2bddee);
      if (_0x18585e && _0x18585e.position) {
        addCoordPickPoint(_0x18585e.position);
      }
    }
  } else if (teleport_active != 0 && (GlobalCheck() != 1 || at_pubg != 0)) {
    if (_0x2b1d80 == "left" && _0x1c0ff4 === "up") {
      const _0x328679 = screen2d3d.screen2dToWorld3d(_0x2332c1, _0x2bddee);
      if (_0x328679 && _0x328679.position) {
        if (is_admin !== true) {
          return;
        }
        UpdatePositionAC();
        if (_0x328679.entity && _0x328679.entity.type == "vehicle") {
          mp.events.callRemote("Server_TeleportToVehicle", _0x328679.entity);
        } else if (_0x328679.entity && _0x328679.entity.type == "player") {
          mp.events.callRemote("Server_ReconPlayer", _0x328679.entity);
        } else {
          mp.players.local.position = new mp.Vector3(_0x328679.position.x, _0x328679.position.y, _0x328679.position.z);
          if (in_spectate) {
            mp.events.callRemote("Server_CloseSpectateWithPositions", _0x328679.position.x, _0x328679.position.y, _0x328679.position.z, localplayer.dimension);
          }
        }
        teleport_active = false;
        mp.gui.cursor.show(false, false);
      }
    } else if (_0x2b1d80 == "right" && _0x1c0ff4 === "up") {
      const _0x305a11 = teleport_pinned_pos || (() => {
        const _0x353298 = screen2d3d.screen2dToWorld3d(mp.gui.cursor.position[0], mp.gui.cursor.position[1]);
        if (_0x353298 && _0x353298.position) {
          return _0x353298.position;
        } else {
          return null;
        }
      })();
      if (_0x305a11) {
        let _0x5a6949 = _0x305a11.x.toFixed(3) + ", " + _0x305a11.y.toFixed(3) + ", " + _0x305a11.z.toFixed(3);
        if (teleport_marker_size !== 0.5) {
          _0x5a6949 += ", " + parseFloat(teleport_marker_size.toFixed(2));
        }
        main_browser.execute("window.copyToClipboard('" + _0x5a6949 + "')");
        ShowNotification(language["Вы скопировали координаты"][curr_lang], 2);
      }
    }
  }
});
mp.events.add("Client_DisableAdminTeleport", () => {
  teleport_active = false;
  if (coord_pick_active) {
    setCoordPickActive(false);
  }
  mp.gui.cursor.show(false, false);
});
mp.events.add("render", () => {
  if (is_admin === true) {
    if (teleport_active) {
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
      if (mp.game.controls.isDisabledControlJustPressed(2, 241)) {
        let _0x3b6005 = 1;
        if (mp.keys.isDown(17)) {
          _0x3b6005 = 5;
        } else if (mp.keys.isDown(16)) {
          _0x3b6005 = 0.2;
        }
        teleport_marker_size = parseFloat((teleport_marker_size + _0x3b6005).toFixed(2));
      }
      if (mp.game.controls.isDisabledControlJustPressed(2, 242)) {
        let _0xbde219 = 1;
        if (mp.keys.isDown(17)) {
          _0xbde219 = 5;
        } else if (mp.keys.isDown(16)) {
          _0xbde219 = 0.2;
        }
        teleport_marker_size = Math.max(0.1, parseFloat((teleport_marker_size - _0xbde219).toFixed(2)));
      }
      const _0x4f5a5f = mp.gui.cursor.position;
      let _0x532ee0 = screen2d3d.screen2dToWorld3d(_0x4f5a5f[0], _0x4f5a5f[1]);
      const _0x3a492b = teleport_pinned_pos || (_0x532ee0 && _0x532ee0.position ? _0x532ee0.position : null);
      if (_0x3a492b) {
        const _0x4a72a4 = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, _0x3a492b.x, _0x3a492b.y, _0x3a492b.z);
        let _0x2dc3ef = teleport_marker_size !== 0.5 ? "\nMarker size: " + teleport_marker_size : "";
        let _0x5c8b02 = teleport_pinned_pos ? "\n~b~PINNED" : "";
        let _0x30e7e1 = "[X: " + _0x3a492b.x.toFixed(1) + ", Y: " + _0x3a492b.y.toFixed(1) + ", Z: " + _0x3a492b.z.toFixed(1) + "]\nDistance: " + _0x4a72a4.toFixed(1) + _0x2dc3ef + _0x5c8b02;
        if (!teleport_pinned_pos && _0x532ee0 && _0x532ee0.entity) {
          if (_0x532ee0.entity.type == "vehicle") {
            _0x30e7e1 += "\n\n~r~vehicle";
          } else if (_0x532ee0.entity.type == "player" || _0x532ee0.entity.type == "object") {
            _0x30e7e1 += "\n\n~r~player";
          }
        }
        if (is_admin === true) {
          mp.game.graphics.drawText(_0x30e7e1, [_0x3a492b.x, _0x3a492b.y, _0x3a492b.z], {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.4, 0.4]
          });
          mp.game.graphics.drawMarker(28, _0x3a492b.x, _0x3a492b.y, _0x3a492b.z, 0, 0, 0, 0, 0, 0, teleport_marker_size, teleport_marker_size, teleport_marker_size, 255, 255, 255, 100, false, false, 2, false, null, null, false);
        }
      }
    }
    if (coord_pick_active && is_admin === true && test_mode === true) {
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
      const _0x4c4c8e = getCoordPickVisiblePoints();
      for (let _0x35552a = 0; _0x35552a < _0x4c4c8e.length; _0x35552a++) {
        const _0x445ef4 = _0x4c4c8e[_0x35552a];
        const _0x325736 = _0x445ef4.point;
        mp.game.graphics.drawMarker(28, _0x325736.x, _0x325736.y, _0x325736.z, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 0, 255, 0, 120, false, false, 2, false, null, null, false);
        mp.game.graphics.drawText("" + _0x445ef4.index, [_0x325736.x, _0x325736.y, _0x325736.z + 0.35], {
          font: 0,
          color: [0, 255, 0, 220],
          scale: [0.45, 0.45]
        });
      }
      const _0xbc0ca2 = mp.gui.cursor.position;
      const _0x449eee = screen2d3d.screen2dToWorld3d(_0xbc0ca2[0], _0xbc0ca2[1]);
      if (_0x449eee && _0x449eee.position) {
        const _0x44ee5d = _0x449eee.position;
        mp.game.graphics.drawMarker(28, _0x44ee5d.x, _0x44ee5d.y, _0x44ee5d.z, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 0, 255, 0, 80, false, false, 2, false, null, null, false);
        mp.game.graphics.drawText("[" + _0x44ee5d.x.toFixed(2) + ", " + _0x44ee5d.y.toFixed(2) + ", " + _0x44ee5d.z.toFixed(2) + "]\nPoints: " + coord_pick_points.length, [_0x44ee5d.x, _0x44ee5d.y, _0x44ee5d.z + 0.7], {
          font: 0,
          color: [255, 255, 255, 200],
          scale: [0.35, 0.35]
        });
      }
    }
  }
});
mp.events.add("playerCommand", _0x3b494a => {
  if (!canUseCoordPick()) {
    return;
  }
  const _0x4adb96 = _0x3b494a.split(/[ ]+/);
  const _0x4acb54 = _0x4adb96.splice(0, 1)[0];
  if (_0x4acb54 === "coordpick") {
    setCoordPickActive(!coord_pick_active);
  } else if (_0x4acb54 === "coordpickdel") {
    const _0x5f1354 = parseInt(_0x4adb96[0]);
    if (isNaN(_0x5f1354) || removeCoordPickPoint(_0x5f1354) == 0) {
      mp.gui.chat.push("Usage: /coordpickdel <index 1-" + coord_pick_points.length + ">");
      return;
    }
    mp.gui.chat.push("Removed coord #" + _0x5f1354 + ", total: " + coord_pick_points.length);
  } else if (_0x4acb54 === "coordpicksend") {
    sendCoordPickToServer();
  } else if (_0x4acb54 === "coordpickclear") {
    coord_pick_points = [];
    mp.gui.chat.push("Coord pick cleared");
  }
});