const CONFIG = Object.freeze({
  snowballProps: [{
    name: "grand_xmas_snowspheres_small",
    offset: [0, 0.5, -0.6]
  }, {
    name: "grand_xmas_snowspheres_medium",
    offset: [0, 0.3, 0.3]
  }, {
    name: "grand_xmas_snowspheres_big",
    offset: [0, 0.35, 0.4]
  }],
  stageDistances: [1, 9, 14],
  rotationSpeed: 2,
  animDict: "missfinale_c2ig_11",
  animName: "pushcar_offcliff_m",
  startAnimDict: "amb@world_human_gardener_plant@male@idle_a",
  startAnimName: "idle_b",
  finalAnimDict: "anim_heist@arcade@shared@female@right@",
  finalAnimName: "win",
  keyCode: 69
});
const snowballPlayers = new Map();
function createSnowObject(_0x5b3b7a, _0x1af67e, _0x9a9146) {
  try {
    const _0x29123e = CONFIG.snowballProps[_0x1af67e];
    if (!_0x29123e) {
      if (_0x9a9146) {
        _0x9a9146(null);
      }
      return;
    }
    const _0x4db87c = _0x5b3b7a?.remoteId;
    if (_0x4db87c == null) {
      return;
    }
    const _0x347643 = mp.objects.new(mp.game.joaat(_0x29123e.name), new mp.Vector3(_0x5b3b7a.position.x, _0x5b3b7a.position.y, _0x5b3b7a.position.z - 5), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 0,
      dimension: _0x5b3b7a.dimension
    });
    const _0x482ba1 = snowballPlayers.get(_0x4db87c);
    if (_0x482ba1) {
      _0x482ba1.isVisible = false;
    }
    const _0x38efcb = setInterval(() => {
      if (mp.objects.exists(_0x347643) && _0x347643.handle !== 0) {
        clearInterval(_0x38efcb);
        if (_0x9a9146) {
          _0x9a9146(_0x347643);
        }
      }
    }, 5);
  } catch (_0x13e069) {
    mp.console.logError("Error creating object: " + _0x13e069.message);
    if (_0x9a9146) {
      _0x9a9146(null);
    }
  }
}
function updateSnowAttachment(_0x4edc1a, _0x2d6571) {
  if (!_0x2d6571 || !mp.objects.exists(_0x2d6571.object)) {
    return;
  }
  const _0xb00083 = CONFIG.snowballProps?.[_0x2d6571.stage]?.offset;
  if (!_0xb00083) {
    return;
  }
  let _0x2d274 = _0xb00083[2];
  if (_0x2d6571.stage === 0) {
    _0x2d274 = startInitialStage(_0x2d6571, _0x2d274);
  }
  const _0x3fcf26 = _0x2d6571.stage === 0 ? -1 : 42;
  if (_0x4edc1a.isWalking()) {
    updateSnowRotation(_0x2d6571);
  }
  _0x2d6571.object.attachTo(_0x4edc1a.handle, _0x3fcf26, _0xb00083[0], _0xb00083[1], _0x2d274, 0, -_0x2d6571.angle, 0, false, false, false, false, 2, true);
  if (_0x2d6571 && !_0x2d6571.isVisible) {
    if (mp.objects.exists(_0x2d6571.object)) {
      _0x2d6571.object.setAlpha(255);
    }
    _0x2d6571.isVisible = true;
  }
}
function startInitialStage(_0x1a4226, _0x474262) {
  _0x1a4226.riseStartTime ||= Date.now();
  const _0x35363a = Date.now() - _0x1a4226.riseStartTime;
  if (_0x35363a < 3000) {
    const _0x33678e = -1;
    _0x474262 = _0x33678e + (_0x474262 - _0x33678e) * (_0x35363a / 3000);
  }
  return _0x474262;
}
function updateSnowRotation(_0x5ae6cd) {
  if (_0x5ae6cd) {
    _0x5ae6cd.angle += CONFIG.rotationSpeed;
    if (_0x5ae6cd.angle >= 360) {
      _0x5ae6cd.angle = 0;
    }
  }
}
function updateDistance(_0x241fa1, _0x522d87) {
  try {
    if (!_0x522d87 || !_0x522d87.lastPosition) {
      return;
    }
    const {
      x: _0x22fa57,
      y: _0x5190b0,
      z: _0x21a234
    } = _0x241fa1.position;
    const {
      x: _0x52000e,
      y: _0x416c1f,
      z: _0x160c87
    } = _0x522d87.lastPosition;
    const _0x210e1d = mp.game.system.vdist(_0x22fa57, _0x5190b0, _0x21a234, _0x52000e, _0x416c1f, _0x160c87);
    _0x522d87.totalDistance += _0x210e1d;
    _0x522d87.lastPosition = new mp.Vector3(_0x22fa57, _0x5190b0, _0x21a234);
    checkStageProgression(_0x241fa1, _0x522d87);
  } catch (_0xe7b928) {
    mp.console.logError("Error updating distance: " + _0xe7b928);
  }
}
function checkStageProgression(_0x2c86dc, _0x514760) {
  if (_0x514760.isTransitioning) {
    return;
  }
  const _0xbea21d = _0x514760.stage;
  if (_0x514760.totalDistance >= CONFIG.stageDistances[_0xbea21d]) {
    if (_0xbea21d >= CONFIG.snowballProps.length - 1 && _0x2c86dc === localplayer) {
      stopRollingSnow(_0x2c86dc, true);
      mp.events.callRemote("Server_SnowSculptingComplete");
      return;
    }
    _0x514760.isTransitioning = true;
    updateSnowStage(_0x2c86dc, _0xbea21d + 1, () => {
      const _0x3c4a6d = snowballPlayers.get(_0x2c86dc.remoteId);
      if (_0x3c4a6d) {
        _0x3c4a6d.isTransitioning = false;
      }
    });
  }
}
function updateSnowStage(_0x4181ca, _0x123b21, _0x20d934) {
  const _0xbf60d3 = _0x4181ca?.remoteId;
  if (_0xbf60d3 == null) {
    return;
  }
  const _0x224fba = snowballPlayers.get(_0xbf60d3);
  const _0x3abc43 = _0x224fba?.object;
  if (mp.objects.exists(_0x3abc43)) {
    _0x3abc43.destroy();
  }
  createSnowObject(_0x4181ca, _0x123b21, _0x47658d => {
    if (_0x47658d && mp.objects.exists(_0x47658d)) {
      if (_0x4181ca.startRollingSnow) {
        snowballPlayers.set(_0xbf60d3, {
          object: _0x47658d,
          stage: _0x123b21,
          angle: _0x224fba?.angle || 0,
          totalDistance: _0x224fba?.totalDistance || 0,
          lastPosition: _0x224fba?.lastPosition || new mp.Vector3(_0x4181ca.position.x, _0x4181ca.position.y, _0x4181ca.position.z),
          riseStartTime: _0x123b21 === 0 ? Date.now() : _0x224fba?.riseStartTime || null,
          isVisible: false,
          isTransitioning: false
        });
        if (_0x20d934) {
          _0x20d934();
        }
      }
    } else if (_0x20d934) {
      _0x20d934();
    }
  });
}
function startRollingSnow(_0x38b4d1) {
  try {
    _0x38b4d1.startRollingSnow = true;
    _0x38b4d1.startRollingSnowAt = Date.now();
    const _0x89152b = _0x38b4d1.remoteId;
    if (_0x89152b == null) {
      return;
    }
    if (snowballPlayers.has(_0x89152b)) {
      stopRollingSnow(_0x38b4d1, false);
    }
    if (_0x38b4d1.vehicle || _0x38b4d1.isDead() || _0x38b4d1.isSprinting() || _0x38b4d1.isSwimming()) {
      return;
    }
    if (_0x38b4d1 === localplayer) {
      isLocalSnowSculpting = true;
      CloseInv();
    }
    play_animation2(_0x38b4d1, CONFIG.startAnimDict, CONFIG.startAnimName, 1.5, 1.5, -1, 1, 0, false, false, false);
    _0x38b4d1.rollingSnowTimeout = setTimeout(() => {
      if (mp.players.exists(_0x38b4d1)) {
        delete _0x38b4d1.rollingSnowTimeout;
        updateSnowStage(_0x38b4d1, 0, () => {
          const _0xeee1f = snowballPlayers.get(_0x89152b);
          if (_0xeee1f) {
            _0xeee1f.isVisible = false;
          }
        });
        _0x38b4d1.rollingSnowTimeout = setTimeout(() => {
          if (!mp.players.exists(_0x38b4d1)) {
            return;
          }
          delete _0x38b4d1.rollingSnowTimeout;
          if (snowballPlayers.get(_0x89152b)) {
            loadDackWalk(_0x38b4d1);
            updateSnowStage(_0x38b4d1, 1, () => {
              if (mp.players.exists(_0x38b4d1) && snowballPlayers.has(_0x89152b)) {
                play_animation2(_0x38b4d1, CONFIG.animDict, CONFIG.animName, 1.5, 1.5, -1, 49, 0, false, false, false);
                stop_animation(_0x38b4d1, CONFIG.startAnimDict, CONFIG.startAnimName);
              }
            });
          }
        }, 2000);
      }
    }, 2000);
  } catch (_0x5f4c7f) {
    mp.console.logError("Error starting rolling snow: " + _0x5f4c7f);
  }
}
function stopRollingSnow(_0x1c4b52, _0x502c09) {
  delete _0x1c4b52.startRollingSnow;
  const _0x1ac050 = _0x1c4b52.remoteId;
  if (_0x1ac050 == null) {
    return;
  }
  if (_0x1c4b52.rollingSnowTimeout) {
    clearTimeout(_0x1c4b52.rollingSnowTimeout);
    delete _0x1c4b52.rollingSnowTimeout;
  }
  const _0x2024c3 = snowballPlayers.get(_0x1ac050);
  if (_0x502c09) {
    stop_animation(_0x1c4b52, CONFIG.animDict, CONFIG.animName);
    play_animation2(_0x1c4b52, CONFIG.finalAnimDict, CONFIG.finalAnimName, 8, -8, 2000, 0, 0, false, false, false);
  } else {
    stop_animation(_0x1c4b52, CONFIG.startAnimDict, CONFIG.startAnimName);
    stop_animation(_0x1c4b52, CONFIG.animDict, CONFIG.animName);
    _0x1c4b52.clearTasksImmediately();
    if (_0x1c4b52.startRollingSnowAt && Date.now() - _0x1c4b52.startRollingSnowAt < 1999) {
      setTimeout(() => {
        if (mp.players.exists(_0x1c4b52)) {
          _0x1c4b52.clearTasksImmediately();
        }
      }, 1000);
    }
  }
  if (_0x1c4b52 === localplayer) {
    isLocalSnowSculpting = false;
  }
  if (_0x2024c3) {
    stopDackWalk(_0x1c4b52);
    destroySnowball(_0x1c4b52);
  }
}
function destroySnowball(_0x5f2941) {
  const _0x475c32 = _0x5f2941.remoteId;
  if (_0x475c32 == null) {
    return;
  }
  const _0x10f08f = snowballPlayers.get(_0x475c32);
  if (_0x10f08f && mp.objects.exists(_0x10f08f.object)) {
    _0x10f08f.object.destroy();
  }
  snowballPlayers.delete(_0x475c32);
}
function loadDackWalk(_0x2a74ee) {
  if (mp.players.exists(_0x2a74ee)) {
    if (mp.game.streaming.hasClipSetLoaded("move_ped_crouched")) {
      loadSecondClipset(_0x2a74ee);
    } else {
      let _0x116937 = 0;
      const _0x3ff4e1 = setInterval(() => {
        if (mp.game.streaming.hasClipSetLoaded("move_ped_crouched") || _0x116937 >= 500) {
          clearInterval(_0x3ff4e1);
          loadSecondClipset(_0x2a74ee);
        }
        _0x116937++;
      }, 2);
    }
  }
}
function loadSecondClipset(_0x1b604c) {
  if (mp.players.exists(_0x1b604c)) {
    mp.game.invoke("0x6EA47DAE7FAD0EED", "move_ped_crouched");
    if (mp.game.streaming.hasClipSetLoaded("move_ped_crouched_strafing")) {
      if (mp.players.exists(_0x1b604c)) {
        mp.game.invoke("0x6EA47DAE7FAD0EED", "move_ped_crouched_strafing");
        _0x1b604c.setMovementClipset("move_ped_crouched", 0.25);
        _0x1b604c.setStrafeClipset("move_ped_crouched_strafing");
      }
    } else {
      mp.game.invoke("0x6EA47DAE7FAD0EED", "move_ped_crouched_strafing");
      let _0x5c560e = 0;
      const _0x2a9c45 = setInterval(() => {
        if (mp.game.streaming.hasClipSetLoaded("move_ped_crouched_strafing") || _0x5c560e >= 500) {
          clearInterval(_0x2a9c45);
          if (mp.players.exists(_0x1b604c)) {
            _0x1b604c.setMovementClipset("move_ped_crouched", 0.25);
            _0x1b604c.setStrafeClipset("move_ped_crouched_strafing");
          }
        }
        _0x5c560e++;
      }, 2);
    }
  }
}
function stopDackWalk(_0x5a9865) {
  if (mp.players.exists(_0x5a9865)) {
    _0x5a9865.resetMovementClipset(0);
    _0x5a9865.resetStrafeClipset();
  }
}
global.isLocalSnowSculpting = false;
global.stopSnowSculping = function () {
  if (isLocalSnowSculpting) {
    mp.events.callRemote("Server_SnowSculptingStop");
  }
};
mp.events.add("render", () => {
  if (snowballPlayers.size) {
    snowballPlayers.forEach((_0x2ab47c, _0x460b8a) => {
      const _0x5117c2 = _0x460b8a === localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x460b8a);
      if (mp.players.exists(_0x5117c2) && _0x5117c2.handle) {
        if (_0x460b8a == localplayer.remoteId) {
          mp.game.controls.disableControlAction(0, 21, true);
          mp.game.controls.disableControlAction(0, 22, true);
          mp.game.controls.disableControlAction(0, 23, true);
          mp.game.controls.disableControlAction(0, 24, true);
          mp.game.controls.disableControlAction(0, 25, true);
        }
        updateSnowAttachment(_0x5117c2, _0x2ab47c);
        updateDistance(_0x5117c2, _0x2ab47c);
      }
    });
  }
});
mp.events.add("entityStreamOut", _0x3eb7e5 => {
  if (_0x3eb7e5?.type === "player") {
    const _0x5631a7 = _0x3eb7e5.remoteId;
    if (_0x5631a7 == null) {
      return;
    }
    const _0x363e8b = snowballPlayers.get(_0x5631a7);
    if (_0x363e8b) {
      if (mp.objects.exists(_0x363e8b.object)) {
        _0x363e8b.object.destroy();
      }
      snowballPlayers.delete(_0x5631a7);
    }
  }
});
mp.events.add("Client_SnowSculptingStart", _0x4cd9c0 => {
  const _0x598c4f = mp.players.atRemoteId(_0x4cd9c0);
  if (mp.players.exists(_0x598c4f)) {
    startRollingSnow(_0x598c4f);
  }
});
mp.events.add("Client_SnowSculptingStop", (_0x4b01d7, _0x12f19c) => {
  const _0x362276 = mp.players.atRemoteId(_0x4b01d7);
  if (mp.players.exists(_0x362276)) {
    stopRollingSnow(_0x362276, _0x12f19c);
  }
});