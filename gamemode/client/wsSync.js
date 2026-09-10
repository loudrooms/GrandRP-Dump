const ENTITY_TYPES = {
  player: () => mp.players,
  vehicle: () => mp.vehicles,
  object: () => mp.objects,
  ped: () => mp.peds
};
function getEntity(_0x242616, _0x35316a) {
  const _0x48c660 = ENTITY_TYPES[_0x242616];
  if (!_0x48c660) {
    return null;
  }
  const _0x213d7b = _0x48c660();
  if (_0x213d7b && typeof _0x213d7b.atRemoteId == "function") {
    return _0x213d7b.atRemoteId(_0x35316a);
  } else {
    return null;
  }
}
function setEntityVariable(_0x9b0077) {
  if (!_0x9b0077 || !_0x9b0077.entityType) {
    return;
  }
  const _0x2c8c30 = Number(_0x9b0077.remoteId);
  if (!Number.isFinite(_0x2c8c30)) {
    return;
  }
  const _0x52b9bb = _0x9b0077.key;
  if (typeof _0x52b9bb != "string" || !_0x52b9bb.length) {
    return;
  }
  const _0x1e3d62 = getEntity(_0x9b0077.entityType, _0x2c8c30);
  if (_0x1e3d62) {
    _0x1e3d62[_0x52b9bb] = _0x9b0077.value;
    if (_0x1e3d62.type === "vehicle" && _0x52b9bb === "animatedVinyl") {
      setAnimatedVinyl(_0x1e3d62, _0x9b0077.value);
    } else if (_0x1e3d62.type === "player" && _0x52b9bb === "customPetIndex") {
      setCustomPet(_0x1e3d62, _0x9b0077.value);
    } else if (_0x1e3d62.type === "player" && _0x52b9bb === "dead_state") {
      setDeadState(_0x1e3d62, _0x9b0077.value);
    }
  }
}
function setDeadState(_0x191dd3, _0x2d932e) {
  if (_0x191dd3 && mp.players.exists(_0x191dd3) && _0x191dd3.handle) {
    _0x191dd3.dead_state = _0x2d932e;
    if (_0x2d932e == 1) {
      global.applyDeathAnimation(_0x191dd3);
    } else {
      delete _0x191dd3.death_anim_applied;
    }
  }
}
function setCustomPet(_0x2552f4, _0x56a589) {
  destroyCustomPet(_0x2552f4);
  const _0x4eb277 = getCustomPetIndex(_0x56a589);
  _0x2552f4.customPetIndex = _0x4eb277 + 1;
  if (_0x2552f4.handle != 0) {
    spawnCustomPet(_0x2552f4);
  }
}
function deleteEntityVariable(_0x48d086) {
  if (!_0x48d086 || !_0x48d086.entityType) {
    return;
  }
  const _0x220311 = Number(_0x48d086.remoteId);
  if (!Number.isFinite(_0x220311)) {
    return;
  }
  const _0x5bc199 = _0x48d086.key;
  if (typeof _0x5bc199 != "string" || !_0x5bc199.length) {
    return;
  }
  const _0x43bc62 = getEntity(_0x48d086.entityType, _0x220311);
  if (_0x43bc62) {
    if (_0x43bc62.type === "vehicle") {
      if (_0x5bc199 === "animatedVinyl") {
        removeAnimatedVinyl(_0x43bc62);
      }
    } else if (_0x43bc62.type === "player") {
      if (_0x5bc199 === "customPetIndex") {
        destroyCustomPet(_0x43bc62, true);
      } else if (_0x5bc199 === "dead_state") {
        setDeadState(_0x43bc62, false);
      }
    }
    delete _0x43bc62[_0x5bc199];
  }
}
const animatedVinyls = new Map();
function setAnimatedVinyl(_0x59d479, _0xbf7b41) {
  if (!_0x59d479 || !mp.vehicles.exists(_0x59d479)) {
    return;
  }
  removeAnimatedVinyl(_0x59d479);
  if (!_0xbf7b41 || _0xbf7b41 === "null" || _0xbf7b41 === "false" || _0xbf7b41 === "") {
    return;
  }
  const _0x1f8950 = mp.browsers.newHeadless("cef/animatedVinyls/index.html?num=" + _0xbf7b41, 500, 500, false);
  if (_0x1f8950) {
    _0x1f8950.inputEnabled = false;
    _0x1f8950.mouseInputEnabled = false;
    _0x59d479.setLiveryTexture(_0x1f8950.headlessTextureDict, _0x1f8950.headlessTextureName);
    animatedVinyls.set(_0x59d479.remoteId, _0x1f8950);
    _0x59d479.animatedVinyl = _0xbf7b41;
  }
}
function removeAnimatedVinyl(_0x1d8374) {
  const _0x4153cd = _0x1d8374.remoteId;
  if (animatedVinyls.has(_0x4153cd)) {
    const _0x2d2ded = animatedVinyls.get(_0x4153cd);
    if (_0x2d2ded && typeof _0x2d2ded.destroy == "function") {
      try {
        _0x1d8374.setLiveryTexture("0", "0");
        _0x2d2ded.destroy();
      } catch (_0x512f41) {
        mp.console.logInfo(JSON.stringify(_0x512f41));
      }
    }
    animatedVinyls.delete(_0x4153cd);
  }
}
mp.events.add("entityStreamIn", _0x31fe49 => {});
mp.events.add("entityStreamOut", _0x46108e => {
  if (_0x46108e && _0x46108e.type === "vehicle" && _0x46108e.animatedVinyl) {
    _0x46108e.setLiveryTexture("0", "0");
    const _0x34e327 = animatedVinyls.get(_0x46108e.remoteId);
    if (_0x34e327 && typeof _0x34e327.destroy == "function") {
      _0x34e327.destroy();
    }
  }
});
const snapshotParts = new Map();
function applyMessage(_0x16e913) {
  if (!_0x16e913) {
    return;
  }
  if (Array.isArray(_0x16e913)) {
    for (const _0x4f5e08 of _0x16e913) {
      applyMessage(_0x4f5e08);
    }
    return;
  }
  const _0xf7202e = _0x16e913.action || _0x16e913.type;
  if (_0xf7202e === "snapshot") {
    const _0x14bd47 = _0x16e913.part || 1;
    const _0x300c10 = _0x16e913.total || 1;
    const _0x36d364 = _0x16e913.items || [];
    if (!snapshotParts.has(_0x300c10)) {
      snapshotParts.set(_0x300c10, {});
    }
    const _0x4849f2 = snapshotParts.get(_0x300c10);
    _0x4849f2[_0x14bd47] = _0x36d364;
    if (Object.keys(_0x4849f2).length === _0x300c10) {
      const _0x43ed17 = [];
      for (let _0x913eeb = 1; _0x913eeb <= _0x300c10; _0x913eeb++) {
        if (_0x4849f2[_0x913eeb] && Array.isArray(_0x4849f2[_0x913eeb])) {
          _0x43ed17.push(..._0x4849f2[_0x913eeb]);
        }
      }
      for (const _0x101dd7 of _0x43ed17) {
        if (_0x101dd7 && _0x101dd7.action === "set") {
          setEntityVariable(_0x101dd7);
        }
      }
      snapshotParts.delete(_0x300c10);
    }
    return;
  }
  if (_0xf7202e !== "set") {
    if (_0xf7202e === "delete") {
      deleteEntityVariable(_0x16e913);
    }
  } else {
    setEntityVariable(_0x16e913);
  }
}
mp.events.add("Client_WsSync", _0x59a8c9 => {
  if (!_0x59a8c9) {
    return;
  }
  let _0x3c66fb = _0x59a8c9;
  if (typeof _0x59a8c9 == "string") {
    try {
      _0x3c66fb = JSON.parse(_0x59a8c9);
    } catch (_0x19a0ef) {
      return;
    }
  }
  applyMessage(_0x3c66fb);
});
mp.events.add("Client_SetWsSyncUrl", _0x23a98f => {
  if (!global.main_browser) {
    return;
  }
  if (typeof _0x23a98f != "string" || !_0x23a98f.length) {
    return;
  }
  const _0x480362 = JSON.stringify(_0x23a98f);
  main_browser.execute("window.wsSyncConnect(" + _0x480362 + ");");
});