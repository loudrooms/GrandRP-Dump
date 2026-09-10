const METEORITE_HASH = mp.game.joaat("prop_test_boulder_02");
const MINING_DURATION = 10000;
const meteoriteRain = {
  fallingMeteorites: new Map(),
  landedMeteorites: new Map(),
  currentMiningId: null,
  miningInteractVisible: false,
  activeSounds: new Map(),
  tickInterval: null
};
global.meteoriteRain = meteoriteRain;
const miningAnimations = new Map();
function loadPtfxAsset(_0x433ba2) {
  return new Promise(_0x120e66 => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x433ba2)) {
      return _0x120e66(true);
    }
    mp.game.streaming.requestNamedPtfxAsset(_0x433ba2);
    let _0x2c9bff = 0;
    const _0x5f3dab = setInterval(() => {
      if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x433ba2) || _0x2c9bff > 50) {
        clearInterval(_0x5f3dab);
        if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x433ba2)) {
          _0x120e66(true);
        } else {
          _0x120e66(false);
        }
      }
      _0x2c9bff++;
    }, 100);
  });
}
function createMeteoriteSound(_0x54d3f6, _0x214d7c) {
  try {
    if (!mp.objects.exists(_0x54d3f6)) {
      return -1;
    }
    const _0x102a2c = mp.game.audio.getSoundId();
    mp.game.audio.playSoundFromEntity(_0x102a2c, "Plane_Wind", _0x54d3f6.handle, "DLC_Pilot_Chase_Parachute_Sounds", true, 0);
    return _0x102a2c;
  } catch (_0x36b5cc) {
    return -1;
  }
}
async function createMeteoriteEffects(_0xf2b1b4) {
  try {
    if (!(await loadPtfxAsset("core"))) {
      return null;
    }
    if (!mp.objects.exists(_0xf2b1b4)) {
      return null;
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    return mp.game.graphics.startParticleFxLoopedOnEntity("proj_flare_trail", _0xf2b1b4.handle, 0, 0, 0, 0, 0, 0, 10, false, false, false);
  } catch (_0x35c5d6) {
    return null;
  }
}
async function createBurningEffect(_0x11f643) {
  try {
    if (!(await loadPtfxAsset("core"))) {
      return null;
    }
    if (!mp.objects.exists(_0x11f643)) {
      return null;
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    return mp.game.graphics.startParticleFxLoopedOnEntity("ent_ray_heli_aprtmnt_l_fire", _0x11f643.handle, 0, 0, 0.3, 0, 0, 0, 0.8, false, false, false);
  } catch (_0x467769) {
    return null;
  }
}
function startMeteoriteTick() {
  if (meteoriteRain.tickInterval) {
    clearInterval(meteoriteRain.tickInterval);
    meteoriteRain.tickInterval = null;
  }
  meteoriteRain.tickInterval = setInterval(() => {
    try {
      const _0x5393d4 = Date.now();
      meteoriteRain.fallingMeteorites.forEach((_0x4aef3d, _0x4309e9) => {
        if (!_0x4aef3d.object || !mp.objects.exists(_0x4aef3d.object)) {
          const _0x546ec5 = meteoriteRain.activeSounds.get(_0x4309e9);
          if (_0x546ec5 !== undefined && _0x546ec5 !== -1) {
            mp.game.audio.stopSound(_0x546ec5);
            mp.game.audio.releaseSoundId(_0x546ec5);
            meteoriteRain.activeSounds.delete(_0x4309e9);
          }
          meteoriteRain.fallingMeteorites.delete(_0x4309e9);
          if (meteoriteRain.fallingMeteorites.size <= 0) {
            stopMeteoriteTick();
          }
          return;
        }
        _0x4aef3d.object.setLodDist(3500);
        const _0x1cd292 = _0x5393d4 - _0x4aef3d.startTime;
        const _0x5c2744 = Math.min(_0x1cd292 / _0x4aef3d.fallDuration, 1);
        if (_0x5c2744 >= 1 && !_0x4aef3d.hasExploded) {
          _0x4aef3d.hasExploded = true;
          _0x4aef3d.object.position = new mp.Vector3(_0x4aef3d.landPos.x, _0x4aef3d.landPos.y, _0x4aef3d.landPos.z);
          handleMeteoriteLanding(_0x4309e9, _0x4aef3d);
          return;
        }
        const _0x578665 = _0x4aef3d.startPos.x + (_0x4aef3d.landPos.x - _0x4aef3d.startPos.x) * _0x5c2744;
        const _0x1c4fc8 = _0x4aef3d.startPos.y + (_0x4aef3d.landPos.y - _0x4aef3d.startPos.y) * _0x5c2744;
        const _0x20e1e9 = _0x4aef3d.startPos.z + (_0x4aef3d.landPos.z - _0x4aef3d.startPos.z) * _0x5c2744;
        if (!_0x4aef3d.startedEffects && _0x4aef3d.object.handle !== 0) {
          _0x4aef3d.startedEffects = true;
          createMeteoriteEffects(_0x4aef3d.object).then(_0x4db500 => {
            const _0x358106 = meteoriteRain.fallingMeteorites.get(_0x4309e9);
            if (_0x358106) {
              _0x358106.ptfxHandle = _0x4db500;
            }
          });
          const _0x4e8f8e = createMeteoriteSound(_0x4aef3d.object, _0x4309e9);
          if (_0x4e8f8e !== -1) {
            meteoriteRain.activeSounds.set(_0x4309e9, _0x4e8f8e);
          }
        }
        _0x4aef3d.object.position = new mp.Vector3(_0x578665, _0x1c4fc8, _0x20e1e9);
        const _0x498dd1 = 3240;
        const _0xad556e = _0x4aef3d.startRot.x + _0x498dd1 * _0x5c2744;
        const _0x52ec24 = _0x4aef3d.startRot.y + _0x498dd1 * _0x5c2744;
        const _0x24e30f = _0x4aef3d.startRot.z + _0x498dd1 * _0x5c2744;
        _0x4aef3d.object.rotation = new mp.Vector3(_0xad556e, _0x52ec24, _0x24e30f);
      });
    } catch (_0x28e4ae) {
      mp.console.logInfo(_0x28e4ae.toString());
    }
  }, 16);
}
function stopMeteoriteTick() {
  if (meteoriteRain.tickInterval) {
    clearInterval(meteoriteRain.tickInterval);
    meteoriteRain.tickInterval = null;
  }
}
function handleMeteoriteLanding(_0x51afc0, _0x1a083a) {
  try {
    if (_0x1a083a.ptfxHandle) {
      mp.game.graphics.stopParticleFxLooped(_0x1a083a.ptfxHandle, false);
    }
    const _0x2d585e = meteoriteRain.activeSounds.get(_0x51afc0);
    if (_0x2d585e !== undefined && _0x2d585e !== -1) {
      mp.game.audio.stopSound(_0x2d585e);
      mp.game.audio.releaseSoundId(_0x2d585e);
      meteoriteRain.activeSounds.delete(_0x51afc0);
    }
    const _0x25083c = _0x1a083a.landPos;
    const _0x48a5a8 = _0x1a083a.landRot;
    _0x1a083a.object.position = _0x25083c;
    _0x1a083a.object.rotation = _0x48a5a8;
    if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x25083c.x, _0x25083c.y, _0x25083c.z) < 250) {
      mp.game.fire.addExplosion(_0x25083c.x, _0x25083c.y, _0x25083c.z, 1, 3, true, false, 0.5);
      mp.game.graphics.startParticleFxNonLoopedAtCoord("exp_grd_grenade_smoke", _0x25083c.x, _0x25083c.y, _0x25083c.z, 0, 0, 0, 2, false, false, false);
      mp.game.cam.shakeGameplayCam("SMALL_EXPLOSION_SHAKE", 0.3);
    }
    createBurningEffect(_0x1a083a.object).then(_0x706e89 => {
      const _0x282b62 = meteoriteRain.landedMeteorites.get(_0x51afc0);
      if (_0x282b62) {
        _0x282b62.burningEffect = _0x706e89;
      }
    });
    meteoriteRain.landedMeteorites.set(_0x51afc0, _0x1a083a);
    meteoriteRain.fallingMeteorites.delete(_0x51afc0);
    if (meteoriteRain.fallingMeteorites.size <= 0) {
      stopMeteoriteTick();
    }
  } catch (_0x4d936b) {
    mp.console.logInfo(_0x4d936b.toString());
  }
}
mp.events.add("Client_MeteoriteSpawn", (_0x2c74d7, _0x44f2ca, _0x265979, _0x1d6d08, _0x778e63 = 30000) => {
  try {
    const _0x2693f6 = new mp.Vector3(_0x44f2ca.x, _0x44f2ca.y, _0x44f2ca.z);
    const _0x195ca5 = new mp.Vector3(_0x265979.x, _0x265979.y, _0x265979.z);
    const _0x1b1cb7 = new mp.Vector3(_0x1d6d08.x, _0x1d6d08.y, _0x1d6d08.z);
    const _0xb1b27f = new mp.Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360);
    const _0x416047 = mp.objects.new(METEORITE_HASH, _0x2693f6, {
      rotation: _0xb1b27f,
      alpha: 255,
      dimension: 0
    });
    _0x416047.streamingRange = 1500;
    if (meteoriteRain.fallingMeteorites.size <= 0) {
      startMeteoriteTick();
    }
    meteoriteRain.fallingMeteorites.set(_0x2c74d7, {
      object: _0x416047,
      startPos: _0x2693f6,
      landPos: _0x195ca5,
      startRot: _0xb1b27f,
      landRot: _0x1b1cb7,
      startTime: Date.now(),
      fallDuration: _0x778e63,
      hasExploded: false,
      ptfxHandle: null
    });
  } catch (_0x24b8c2) {
    mp.console.logInfo(_0x24b8c2.toString());
  }
});
mp.events.add("Client_SpawnStaticMeteorites", _0x38a1e2 => {
  setTimeout(() => {
    _0x38a1e2.forEach(_0x2e8928 => {
      _0x2e8928.position = new mp.Vector3(_0x2e8928.position.x, _0x2e8928.position.y, _0x2e8928.position.z);
      _0x2e8928.rotation = new mp.Vector3(_0x2e8928.rotation.x, _0x2e8928.rotation.y, _0x2e8928.rotation.z);
      const _0x2422c1 = mp.objects.new(METEORITE_HASH, _0x2e8928.position, {
        rotation: _0x2e8928.rotation,
        alpha: 255,
        dimension: 0
      });
      _0x2422c1.streamingRange = 500;
      const _0xb539c6 = {
        id: _0x2e8928.id,
        object: _0x2422c1,
        position: _0x2e8928.position,
        rotation: _0x2e8928.rotation,
        burningEffect: null
      };
      meteoriteRain.landedMeteorites.set(_0x2e8928.id, _0xb539c6);
      createBurningEffect(_0xb539c6.object).then(_0xfadf5a => {
        _0xb539c6.burningEffect = _0xfadf5a;
      });
    });
  }, 5000);
});
mp.events.add("Client_MeteoriteRemove", _0x4d7dc5 => {
  const _0x378963 = meteoriteRain.landedMeteorites.get(_0x4d7dc5);
  if (_0x378963) {
    if (_0x378963.burningEffect) {
      mp.game.graphics.stopParticleFxLooped(_0x378963.burningEffect, false);
    }
    if (_0x378963.object && mp.objects.exists(_0x378963.object)) {
      _0x378963.object.destroy();
    }
    miningAnimations.forEach((_0x3f15f9, _0x2bdc50) => {
      if (_0x4d7dc5 != _0x4d7dc5) {
        return;
      }
      const _0x227774 = mp.players.atRemoteId(_0x2bdc50);
      if (_0x227774) {
        global.stop_animation(_0x227774, "amb@world_human_hammering@male@base", "base");
        mp.events.call("Client_detachObject", _0x227774.remoteId);
        if (_0x227774 === localplayer) {
          meteoriteRain.currentMiningId = null;
          main_browser.execute("APPS.state.hud.progressBar && (APPS.state.hud.progressBar.displayAt = null);");
        }
      }
      miningAnimations.delete(_0x2bdc50);
    });
  }
  const _0x2e0b10 = meteoriteRain.activeSounds.get(_0x4d7dc5);
  if (_0x2e0b10 !== undefined && _0x2e0b10 !== -1) {
    mp.game.audio.stopSound(_0x2e0b10);
    mp.game.audio.releaseSoundId(_0x2e0b10);
    meteoriteRain.activeSounds.delete(_0x4d7dc5);
  }
  meteoriteRain.landedMeteorites.delete(_0x4d7dc5);
});
mp.events.add("Client_MeteoriteMiningInteract", _0x185af7 => {
  if (_0x185af7) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  meteoriteRain.miningInteractVisible = _0x185af7;
});
mp.events.add("Client_MeteoriteStartMiningAnimation", (_0x223a2e, _0x5cc314) => {
  const _0x7808e9 = mp.players.atRemoteId(_0x5cc314);
  if (!mp.players.exists(_0x7808e9)) {
    return;
  }
  miningAnimations.set(_0x5cc314, _0x223a2e);
  mp.events.call("Client_attachObject2", _0x7808e9.remoteId, "{\"Bone\": 6286, \"Model\": \"prop_tool_pickaxe\", \"PosOffset1\": -0.08,\"PosOffset2\": -0.2,\"PosOffset3\": 0.02, \"RotOffset1\": -80.0, \"RotOffset2\": 180.0, \"RotOffset3\": -30.0}");
  global.play_animation2(_0x7808e9, "amb@world_human_hammering@male@base", "base", 8, -8, 10000, 1, 0);
  setTimeout(() => {
    if (miningAnimations.has(_0x5cc314)) {
      global.stop_animation(_0x7808e9, "amb@world_human_hammering@male@base", "base");
      mp.events.call("Client_detachObject", _0x7808e9.remoteId);
      miningAnimations.delete(_0x5cc314);
      if (_0x7808e9 === localplayer) {
        meteoriteRain.currentMiningId = null;
      }
    }
  }, 10000);
  if (_0x7808e9 === localplayer) {
    meteoriteRain.currentMiningId = _0x223a2e;
    mp.events.call("Client_MeteoriteShowProgressBar");
  }
});
mp.events.add("Client_MeteoriteShowProgressBar", () => {
  const _0x326d94 = {
    progress: 0,
    delay: 100,
    duration: parseInt(9),
    isIncrease: true,
    title: "Добыча ресурсов из метеорита",
    displayAt: "center"
  };
  main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x326d94) + ";");
});