const ROLLERS_CONFIG = {
  left: {
    model: "ice_skates",
    bone: 57717,
    offset: new mp.Vector3(0, 0, -0.02),
    rotation: new mp.Vector3(-1, 0, 0)
  },
  right: {
    model: "ice_skates",
    bone: 24806,
    offset: new mp.Vector3(0, 0, -0.02),
    rotation: new mp.Vector3(-2, 0, 0)
  }
};
const ROLLERS_ALLOWED_PLACE_POSITION = new mp.Vector3(1101.819, -642.768, 56.301);
const ROLLERS_ALLOWED_PLACE_DISTANCE = 100;
mp.blips.new(126, new mp.Vector3(1115.065, -663.869, 56.813), {
  name: language.Каток[curr_lang],
  shortRange: true,
  color: 45
});
const rollersObjects = new Map();
let rollersInterval = null;
function clearRollersInterval() {
  if (rollersInterval) {
    clearInterval(rollersInterval);
    rollersInterval = null;
  }
}
function createRollerObject(_0x4fdde4, _0x56a8c3) {
  if (!mp.players.exists(_0x4fdde4) || _0x4fdde4.handle === 0) {
    return null;
  }
  const _0x26098b = ROLLERS_CONFIG[_0x56a8c3];
  const _0x46953c = mp.game.joaat(_0x26098b.model);
  const _0x87f1c6 = mp.objects.new(_0x46953c, _0x4fdde4.position, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: _0x4fdde4.dimension
  });
  if (_0x87f1c6) {
    _0x87f1c6.__rollersData = {
      targetPlayerId: _0x4fdde4.remoteId,
      bone: _0x26098b.bone,
      offset: _0x26098b.offset,
      rotation: _0x26098b.rotation
    };
    _0x87f1c6.notifyStreaming = true;
    return _0x87f1c6;
  } else {
    return null;
  }
}
function attachRollerObject(_0x305eb4) {
  if (!_0x305eb4 || !mp.objects.exists(_0x305eb4)) {
    return;
  }
  if (!_0x305eb4.__rollersData) {
    return;
  }
  const {
    targetPlayerId: _0xea9dd1,
    bone: _0x119751,
    offset: _0x50e5df,
    rotation: _0x1a00ba
  } = _0x305eb4.__rollersData;
  const _0x570b71 = mp.players.atRemoteId(_0xea9dd1);
  if (!mp.players.exists(_0x570b71) || _0x570b71.handle === 0) {
    return;
  }
  const _0x12aa26 = _0x570b71.getBoneIndex(_0x119751);
  _0x305eb4.setCollision(false, false);
  _0x305eb4.attachTo(_0x570b71.handle, _0x12aa26, _0x50e5df.x, _0x50e5df.y, _0x50e5df.z, _0x1a00ba.x, _0x1a00ba.y, _0x1a00ba.z, true, false, false, false, 0, true);
}
function createRollersForPlayer(_0x3c4396) {
  if (!mp.players.exists(_0x3c4396)) {
    return;
  }
  destroyRollersForPlayer(_0x3c4396);
  const _0x3c8539 = createRollerObject(_0x3c4396, "left");
  const _0x132650 = createRollerObject(_0x3c4396, "right");
  if (_0x3c8539 || _0x132650) {
    rollersObjects.set(_0x3c4396.remoteId, {
      left: _0x3c8539,
      right: _0x132650
    });
  }
}
function destroyRollersForPlayer(_0x500fd4) {
  const _0x3516d2 = _0x500fd4.remoteId;
  const _0x290d00 = rollersObjects.get(_0x3516d2);
  if (_0x290d00) {
    if (_0x290d00.left && mp.objects.exists(_0x290d00.left)) {
      _0x290d00.left.destroy();
    }
    if (_0x290d00.right && mp.objects.exists(_0x290d00.right)) {
      _0x290d00.right.destroy();
    }
    rollersObjects.delete(_0x3516d2);
  }
}
function enableRollers(_0x1828a2) {
  if (mp.players.exists(_0x1828a2)) {
    global.play_animation2(_0x1828a2, "grand_animations_props_custom", "rollers", 8, -8, -1, 33, 1, false, false, false);
    if (_0x1828a2.handle !== 0) {
      createRollersForPlayer(_0x1828a2);
    }
    if (_0x1828a2 === localplayer) {
      clearRollersInterval();
      rollersInterval = setInterval(() => {
        if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, ROLLERS_ALLOWED_PLACE_POSITION.x, ROLLERS_ALLOWED_PLACE_POSITION.y, ROLLERS_ALLOWED_PLACE_POSITION.z) > 100 || localplayer.vehicle || localplayer.dimension !== 0) {
          mp.events.callRemote("Server_DisableRollers");
        }
      }, 1000);
    }
  }
}
function disableRollers(_0x54782a) {
  if (mp.players.exists(_0x54782a)) {
    global.stop_animation(_0x54782a, "grand_animations_props_custom", "rollers");
    destroyRollersForPlayer(_0x54782a);
    if (_0x54782a === localplayer) {
      clearRollersInterval();
    }
  }
}
mp.events.addDataHandler("onRollers", (_0x48a1ee, _0x4ea8f4) => {
  if (_0x4ea8f4) {
    enableRollers(_0x48a1ee);
  } else {
    disableRollers(_0x48a1ee);
  }
});
mp.events.add("entityStreamIn", _0x3a9817 => {
  if (_0x3a9817) {
    if (_0x3a9817.type === "object" && _0x3a9817.__rollersData) {
      attachRollerObject(_0x3a9817);
    } else if (_0x3a9817.type === "player" && _0x3a9817.getVariable("onRollers")) {
      setTimeout(() => {
        if (mp.players.exists(_0x3a9817) && _0x3a9817.getVariable("onRollers")) {
          global.play_animation2(_0x3a9817, "grand_animations_props_custom", "rollers", 8, -8, -1, 33, 1, false, false, false);
          createRollersForPlayer(_0x3a9817);
        }
      }, 500);
    }
  }
});
mp.events.add("entityStreamOut", _0x36dd94 => {
  if (_0x36dd94 && _0x36dd94.type === "player") {
    destroyRollersForPlayer(_0x36dd94);
  }
});
mp.events.add("render", () => {
  if (localplayer.getVariable("onRollers")) {
    mp.game.player.disableFiring(true);
  }
});