global.finger = new class {
  constructor() {
    this.active = false;
    this.updating = false;
    this.gameplayCamera = mp.cameras.new("gameplay");
    this.dataUpdateDelay = 500;
    this.players_with_fingers = [];
    this.sendDataToServer = global.throttle((_0xc92092, _0x4f93de) => {}, this.dataUpdateDelay, {
      leading: false,
      trailing: true
    });
    this.array_controls = [24, 25, 69, 92, 114, 140, 141, 142, 257, 263, 264];
    mp.events.add("render", () => {
      this.players_with_fingers.forEach(_0x4ba008 => {
        if (!_0x4ba008.handle) {
          this.stopPlayer(_0x4ba008);
          return;
        }
        if (typeof _0x4ba008.fpPitchInterpolator != "function" || typeof _0x4ba008.fpHeadingInterpolator != "function") {
          return;
        }
        const _0x238e36 = Date.now();
        const _0x4fa3f9 = _0x4ba008.fpPrevTime + this.dataUpdateDelay;
        const _0x165501 = (_0x238e36 - _0x4ba008.fpPrevTime) / (_0x4fa3f9 - _0x4ba008.fpPrevTime);
        if (_0x165501 > 1) {
          return;
        }
        const _0x3d117b = _0x4ba008.fpPitchInterpolator(_0x165501);
        const _0xd39cb6 = _0x4ba008.fpHeadingInterpolator(_0x165501);
        mp.game.invoke("0xd5bb4025ae449a4e", _0x4ba008.handle, "Pitch", _0x3d117b);
        mp.game.invoke("0xd5bb4025ae449a4e", _0x4ba008.handle, "Heading", _0xd39cb6);
      });
      this.update();
      if (this.active) {
        this.array_controls.forEach(_0x3e36f8 => {
          mp.game.controls.disableControlAction(0, _0x3e36f8, true);
        });
      }
    });
    mp.events.add("fpsync.update", (_0x328291, _0x1960c7, _0x81d2c0) => {
      const _0x5f0dab = mp.players.atRemoteId(_0x328291);
      if (_0x5f0dab && _0x5f0dab !== mp.players.local && mp.players.exists(_0x5f0dab)) {
        if (!_0x5f0dab.fpActive) {
          this.startPlayer(_0x5f0dab);
        }
        this.updatePlayer(_0x5f0dab, _0x1960c7, _0x81d2c0, 0, 0);
        if (typeof _0x5f0dab.fpStopUpdateReceive == "function") {
          _0x5f0dab.fpStopUpdateReceive();
        }
      }
    });
  }
  update() {
    if (!this.updating) {
      return;
    }
    mp.game.invoke("0x921ce12c489c4c41", mp.players.local.handle);
    let _0x737c15 = this.getRelativePitch();
    if (_0x737c15 < -70) {
      _0x737c15 = -70;
    } else if (_0x737c15 > 42) {
      _0x737c15 = 42;
    }
    _0x737c15 = (_0x737c15 + 70) / 112;
    let _0x1eafa1 = mp.game.cam.getGameplayCamRelativeHeading();
    const _0x345359 = mp.game.system.cos(_0x1eafa1);
    const _0x529432 = mp.game.system.sin(_0x1eafa1);
    if (_0x1eafa1 < -180) {
      _0x1eafa1 = -180;
    } else if (_0x1eafa1 > 180) {
      _0x1eafa1 = 180;
    }
    _0x1eafa1 = 1 - (_0x1eafa1 = (_0x1eafa1 + 180) / 360);
    const _0xaa217c = mp.players.local.getOffsetFromGivenWorldCoords(_0x345359 * -0.2 - _0x529432 * (_0x1eafa1 * 0.4 + 0.3), _0x529432 * -0.2 + _0x345359 * (_0x1eafa1 * 0.4 + 0.3), 0.6);
    const _0x54fefb = !!mp.raycasting.testCapsule(new mp.Vector3(_0xaa217c.x, _0xaa217c.y, _0xaa217c.z - 0.2), new mp.Vector3(_0xaa217c.x, _0xaa217c.y, _0xaa217c.z + 0.2), 0.4, mp.players.local, 95);
    this.updatePlayer(mp.players.local, _0x737c15, _0x1eafa1, _0x54fefb, mp.game.invoke("0xEE778F8C7E1142E2", mp.game.invoke("0x19CAFA3C87F7C2FF")) === 4);
    if (_0x54fefb && typeof _0x54fefb.entity == "number" && _0x54fefb.entity !== 0 && mp.game.entity.doesExist(_0x54fefb.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x54fefb.entity);
    }
  }
  getRelativePitch() {
    return this.gameplayCamera.getRot(2).x - mp.players.local.getPitch();
  }
  updatePlayer(_0x5c9787, _0x1e26cf, _0x570e1f, _0x58681d, _0x488b0e) {
    if (_0x5c9787.fpActive) {
      this.updateInterpolation(_0x5c9787, _0x1e26cf, _0x570e1f);
      mp.game.invoke("0xb0a6cfd2c69c1088", _0x5c9787.handle, "isBlocked", _0x58681d);
      mp.game.invoke("0xb0a6cfd2c69c1088", _0x5c9787.handle, "isFirstPerson", _0x488b0e);
    }
  }
  updateInterpolation(_0x35226a, _0x3fabfd, _0x473bd5) {
    _0x35226a.fpPrevTime = Date.now();
    _0x35226a.fpPrevPitch = _0x35226a.fpCurrentPitch || 0;
    _0x35226a.fpPrevHeading = _0x35226a.fpCurrentHeading || 0;
    _0x35226a.fpCurrentPitch = _0x3fabfd;
    _0x35226a.fpCurrentHeading = _0x473bd5;
    if (_0x35226a.fpPrevPitch !== undefined && _0x35226a.fpPrevHeading !== undefined) {
      _0x35226a.fpPitchInterpolator = this.getInterpolator(_0x35226a.fpPrevPitch, _0x35226a.fpCurrentPitch);
      _0x35226a.fpHeadingInterpolator = this.getInterpolator(_0x35226a.fpPrevHeading, _0x35226a.fpCurrentHeading);
    }
  }
  getInterpolator(_0x1c890b, _0x5846a4) {
    return _0x4c7eea => _0x1c890b * (1 - _0x4c7eea) + _0x5846a4 * _0x4c7eea;
  }
  start() {
    if (!this.active) {
      this.active = true;
      this.startPlayer(mp.players.local, () => {
        this.updating = true;
      });
      this.gameplayCamera.setAffectsAiming(false);
    }
  }
  stop() {
    if (this.active) {
      this.active = false;
      this.updating = false;
      clearInterval(this.interval);
      delete this.interval;
      this.stopPlayer(mp.players.local);
      this.gameplayCamera.setAffectsAiming(true);
    }
  }
  startPlayer(_0x2a862d, _0x197398) {
    if (!_0x2a862d.fpActive) {
      if (!this.players_with_fingers.includes(_0x2a862d)) {
        this.players_with_fingers.push(_0x2a862d);
      }
      _0x2a862d.fpActive = true;
      _0x2a862d.fpStopUpdateReceive = global.debounce(function () {
        finger.stopPlayer(_0x2a862d);
      }, this.dataUpdateDelay * 2);
      this.requestAnimDictEx("anim@mp_point").then(function () {
        if (mp.players.exists(_0x2a862d) && _0x2a862d.handle) {
          mp.game.invoke("0xADF692B254977C0C", _0x2a862d.handle, mp.game.joaat("WEAPON_UNARMED"), true);
          _0x2a862d.setConfigFlag(36, true);
          _0x2a862d.taskMoveNetwork("task_mp_pointing", 0.5, false, "anim@mp_point", 24);
          mp.game.streaming.removeAnimDict("anim@mp_point");
          if (typeof _0x197398 == "function") {
            _0x197398();
          }
        }
      }).catch(console.log);
    }
  }
  stopPlayer(_0x337236) {
    if (_0x337236.fpActive && mp.players.exists(_0x337236) && _0x337236.handle) {
      const _0x16cb5a = this.players_with_fingers.indexOf(_0x337236);
      if (_0x16cb5a != -1) {
        this.players_with_fingers.splice(_0x16cb5a, 1);
      }
      _0x337236.fpActive = false;
      delete _0x337236.fpStopUpdateReceive;
      delete _0x337236.fpPrevTime;
      delete _0x337236.fpPrevPitch;
      delete _0x337236.fpPrevHeading;
      delete _0x337236.fpPitchInterpolator;
      delete _0x337236.fpHeadingInterpolator;
      delete _0x337236.fpCurrentPitch;
      delete _0x337236.fpCurrentHeading;
      mp.game.invoke("0xd01015c7316ae176", _0x337236.handle, "Stop");
      _0x337236.setConfigFlag(36, false);
      if (!_0x337236.isInjured()) {
        mp.game.invoke("0x176CECF6F920D707", _0x337236.handle);
      }
    }
  }
  requestAnimDictEx(_0xe729ab) {
    if (mp.game.streaming.hasAnimDictLoaded(_0xe729ab)) {
      return Promise.resolve();
    } else {
      mp.game.streaming.requestAnimDict(_0xe729ab);
      return new Promise((_0x2f5a61, _0x118b7e) => {
        const _0x5b17e9 = setInterval(() => {
          if (mp.game.streaming.hasAnimDictLoaded(_0xe729ab)) {
            clearInterval(_0x5b17e9);
            _0x2f5a61();
          }
        }, 100);
      });
    }
  }
}();