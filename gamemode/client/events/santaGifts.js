const SANTA_HASH = mp.game.joaat("grand_xmas_sledge_1");
const CARGO_BOX_HASH = mp.game.joaat("grand_xmas_prop_biggift4");
const GIFT_PYRAMID_HASH = mp.game.joaat("grand_xmas_gifts_pyramid");
const COLLECTING_DURATION = 14000;
const GIFT_FALL_DURATION = 8000;
global.atSantaGiftCollectInteract = false;
global.atSantaGiftCollectInProcess = false;
const santaGifts = {
  flyingSantas: new Map(),
  fallingGifts: new Map(),
  landedGifts: new Map(),
  tickInterval: null,
  activeSounds: new Map(),
  trailMaxLines: 80,
  trailPositions: [],
  trailRotationOffsets: [],
  trailWidth: 0.5,
  trailSeparation: 1.2,
  trailThickness: 0.2,
  trailEnabled: false
};
global.santaGifts = santaGifts;
const SANTA_ROUTE = [new mp.Vector3(-33.132, 8122.016, 68.936), new mp.Vector3(122.116, 6820.549, 51.701), new mp.Vector3(-13.831, 6420.004, 52.91), new mp.Vector3(-416.913, 5971.413, 51.468), new mp.Vector3(-602.221, 5623.7, 76.689), new mp.Vector3(-651.31, 5169.044, 159.528), new mp.Vector3(-557.898, 4716.158, 253.268), new mp.Vector3(-374.89, 4133.852, 173.489), new mp.Vector3(-170.287, 3695.422, 114.057), new mp.Vector3(128.136, 3236.323, 79.865), new mp.Vector3(286.682, 2873.326, 75.934), new mp.Vector3(793.227, 2325.374, 90.266), new mp.Vector3(1289.955, 2281.652, 118.85), new mp.Vector3(1722.696, 2624.891, 74.476), new mp.Vector3(1887.554, 2977.44, 75.77), new mp.Vector3(1840.369, 3683.241, 60.594), new mp.Vector3(1883.664, 4701.554, 64.751), new mp.Vector3(2020.839, 4975.984, 55.501), new mp.Vector3(2294.156, 5040.421, 66.17), new mp.Vector3(2567.347, 4859.59, 74.748), new mp.Vector3(2746.306, 4532.018, 69.424), new mp.Vector3(2886.342, 4079.428, 69.463), new mp.Vector3(2905.861, 3785.808, 71.344), new mp.Vector3(2782.449, 3394.285, 75.025), new mp.Vector3(2513.109, 3010.144, 68.859), new mp.Vector3(2202.065, 2747.359, 60.867), new mp.Vector3(1912.405, 2442.577, 79.316), new mp.Vector3(1759.134, 1873.31, 99.146), new mp.Vector3(1667.188, 1332.584, 116.218), new mp.Vector3(1528.149, 888.958, 105.878), new mp.Vector3(1237.46, 506.235, 109.893), new mp.Vector3(966.924, 171.713, 108.963), new mp.Vector3(743.129, -118.224, 106.643), new mp.Vector3(348.538, -427.104, 75.351), new mp.Vector3(161.802, -844.095, 69.717), new mp.Vector3(247.696, -1126.784, 63.179), new mp.Vector3(497.814, -1461.143, 57.749), new mp.Vector3(763.494, -1789.908, 63.216), new mp.Vector3(789.045, -2098.637, 51.393), new mp.Vector3(656.887, -2345.192, 53.602), new mp.Vector3(354.537, -2545.997, 44.575), new mp.Vector3(6.936, -2502.887, 44.593), new mp.Vector3(-210.955, -2030.224, 50.472), new mp.Vector3(-177.078, -1633.974, 63.335), new mp.Vector3(-331.517, -1168.398, 66.899), new mp.Vector3(-420.141, -892.932, 58.212), new mp.Vector3(-320.186, -375.469, 64.437), new mp.Vector3(-413.679, -173.221, 80.992), new mp.Vector3(-649.825, -165.094, 69.297), new mp.Vector3(-950.427, -181.157, 69.801), new mp.Vector3(-1225.595, -303.416, 59.427), new mp.Vector3(-1559.979, -508.558, 57.026), new mp.Vector3(-1798.188, -735.328, 52.206), new mp.Vector3(-1805.435, -1152.492, 46.596), new mp.Vector3(-1554.137, -1411.704, 21.015), new mp.Vector3(-1350.179, -1466.442, 32.379), new mp.Vector3(-1212.316, -1583.211, 33.883), new mp.Vector3(-850.278, -1641.575, 39.058), new mp.Vector3(-422.694, -1465.226, 58.88), new mp.Vector3(52.917, -1121.036, 64.366), new mp.Vector3(296.312, -483.125, 79.968), new mp.Vector3(103.094, -85.769, 118.427), new mp.Vector3(-417.829, 74.313, 118.171), new mp.Vector3(-1274.43, 256.443, 92.87), new mp.Vector3(-1557.54, 40.892, 85.502), new mp.Vector3(-1910.66, 87.591, 111.633), new mp.Vector3(-2050.272, 579.906, 160.91), new mp.Vector3(-1683.04, 950.042, 191.645), new mp.Vector3(-1523.259, 1631.941, 164.294), new mp.Vector3(-1502.108, 2256.598, 102.693), new mp.Vector3(-1612.483, 2802.617, 54.772), new mp.Vector3(-1763.803, 3147.74, 66.298), new mp.Vector3(-2086.607, 3362.261, 56.736), new mp.Vector3(-2449.362, 3429.707, 54.179), new mp.Vector3(-3265.148, 3720.166, 61.507), new mp.Vector3(-4626.72, 4250.407, 107.153)];
const FLIGHT_DURATION = 900000;
function loadPtfxAsset(_0x5ee773) {
  return new Promise(_0x34161f => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x5ee773)) {
      return _0x34161f(true);
    }
    mp.game.streaming.requestNamedPtfxAsset(_0x5ee773);
    let _0x2c2a4e = 0;
    const _0x220a9c = setInterval(() => {
      if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x5ee773) || _0x2c2a4e > 50) {
        clearInterval(_0x220a9c);
        _0x34161f(mp.game.streaming.hasNamedPtfxAssetLoaded(_0x5ee773));
      }
      _0x2c2a4e++;
    }, 100);
  });
}
async function createSantaSound(_0x4f88fd, _0x125d18) {
  try {
    mp.console.logInfo("createSantaSound: mp.objects.exists(santaObject): " + mp.objects.exists(_0x4f88fd));
    const _0x2e90cb = mp.game.audio.requestScriptAudioBank("FBI_HEIST_ELEVATOR_DEBRIS_01", false);
    mp.console.logInfo("createSantaSound: res1: " + _0x2e90cb);
    await new Promise(_0x1af6e5 => setTimeout(_0x1af6e5, 1000));
    const _0x48114b = mp.game.audio.requestScriptAudioBank("FBI_HEIST_ELEVATOR_DEBRIS_01", false);
    mp.console.logInfo("createSantaSound: res2: " + _0x48114b);
    const _0x5c7b1e = mp.game.audio.getSoundId();
    mp.game.audio.playSoundFromEntity(_0x5c7b1e, "Land_01", _0x4f88fd.handle, "FBI_HEIST_ELEVATOR_SHAFT_DEBRIS_SOUNDS", false, 0);
    santaGifts.activeSounds.set(_0x125d18, _0x5c7b1e);
    return _0x5c7b1e;
  } catch (_0xa89c0b) {
    return -1;
  }
}
function lerpAngle(_0x883f4b, _0x5e16b8, _0x2d0345) {
  let _0x401dd1 = (_0x5e16b8 = (_0x5e16b8 % 360 + 360) % 360) - (_0x883f4b = (_0x883f4b % 360 + 360) % 360);
  if (_0x401dd1 > 180) {
    _0x401dd1 -= 360;
  } else if (_0x401dd1 < -180) {
    _0x401dd1 += 360;
  }
  return ((_0x883f4b + _0x401dd1 * _0x2d0345) % 360 + 360) % 360;
}
async function createSantaTrailEffect(_0x37bb4e, _0x3d4828) {
  try {
    if (!(await loadPtfxAsset("proj_xmas_snowball")) || !mp.objects.exists(_0x37bb4e)) {
      return null;
    }
    const _0x452905 = setInterval(() => {
      const _0x47c134 = santaGifts.flyingSantas.get(_0x3d4828);
      if (!_0x47c134 || !mp.objects.exists(_0x47c134.object)) {
        clearInterval(_0x452905);
        return;
      }
      const _0x5cbfdf = _0x47c134.object.position;
      const _0x35428a = 7 + Math.floor(Math.random() * 4);
      for (let _0x3df198 = 0; _0x3df198 < _0x35428a; _0x3df198++) {
        const _0x3f16e3 = 2 + Math.random() * 2;
        const _0x47e893 = Math.random() * Math.PI * 2;
        const _0x5b3944 = Math.cos(_0x47e893) * _0x3f16e3;
        const _0x1878bf = Math.sin(_0x47e893) * _0x3f16e3;
        const _0x4e362a = (Math.random() - 0.5) * 2;
        mp.game.graphics.setPtfxAssetNextCall("proj_xmas_snowball");
        mp.game.graphics.startParticleFxNonLoopedAtCoord("exp_air_snowball", _0x5cbfdf.x + _0x5b3944, _0x5cbfdf.y + _0x1878bf, _0x5cbfdf.z + _0x4e362a, 0, 0, 0, 1, false, false, false);
      }
    }, 300);
    return _0x452905;
  } catch (_0x424d72) {
    return null;
  }
}
async function createSantaSnowTrailEffect(_0x45a587) {
  try {
    if (!(await loadPtfxAsset("core")) || !mp.objects.exists(_0x45a587)) {
      return null;
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    return mp.game.graphics.startParticleFxLoopedOnEntity("ent_amb_snow_mist_base", _0x45a587.handle, 3, 0, -0.5, 0, 0, 0, 2.5, false, false, false);
  } catch (_0x1ad834) {
    return null;
  }
}
async function createGiftFallEffect(_0x7db029) {
  try {
    if (!(await loadPtfxAsset("core")) || !mp.objects.exists(_0x7db029)) {
      return null;
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    return mp.game.graphics.startParticleFxLoopedOnEntity("ent_amb_snow_mist_base", _0x7db029.handle, 0, 0, 0, 0, 0, 0, 5, false, false, false);
  } catch (_0x37743d) {
    return null;
  }
}
function startSantaTick() {
  if (santaGifts.tickInterval) {
    clearInterval(santaGifts.tickInterval);
    santaGifts.tickInterval = null;
  }
  santaGifts.tickInterval = setInterval(() => {
    try {
      const _0x14f28c = Date.now();
      santaGifts.flyingSantas.forEach((_0x56ba20, _0x3e728a) => {
        if (!_0x56ba20.object || !mp.objects.exists(_0x56ba20.object)) {
          cleanupSanta(_0x3e728a, _0x56ba20);
          return;
        }
        _0x56ba20.object.setLodDist(3500);
        const _0x2504a8 = _0x14f28c - _0x56ba20.startTime;
        const _0x36502f = Math.min(_0x2504a8 / _0x56ba20.flightDuration, 1);
        const _0x2ff517 = calculatePositionOnRoute(_0x56ba20.route, _0x36502f);
        _0x56ba20.object.position;
        _0x56ba20.object.position = new mp.Vector3(_0x2ff517.x, _0x2ff517.y, _0x2ff517.z);
        const _0x250762 = Math.min((_0x2504a8 + 2000) / _0x56ba20.flightDuration, 1);
        const _0x19b082 = calculatePositionOnRoute(_0x56ba20.route, _0x250762);
        const _0x48d961 = _0x19b082.x - _0x2ff517.x;
        const _0xf01b46 = _0x19b082.y - _0x2ff517.y;
        const _0x1a369a = Math.atan2(_0xf01b46, _0x48d961) * 180 / Math.PI;
        _0x56ba20.currentHeading ||= _0x1a369a;
        if (_0x56ba20.currentRoll === undefined) {
          _0x56ba20.currentRoll = 0;
        }
        let _0x59a076 = _0x1a369a - _0x56ba20.currentHeading;
        while (_0x59a076 > 180) {
          _0x59a076 -= 360;
        }
        while (_0x59a076 < -180) {
          _0x59a076 += 360;
        }
        const _0xcc7142 = Math.abs(_0x59a076);
        let _0x38d9b6;
        _0x38d9b6 = _0xcc7142 < 10 ? 0.015 : _0xcc7142 < 30 ? 0.035 : _0xcc7142 < 60 ? 0.055 : 0.08;
        const _0x148ecd = _0x56ba20.currentHeading;
        _0x56ba20.currentHeading = lerpAngle(_0x56ba20.currentHeading, _0x1a369a, _0x38d9b6);
        const _0x1e8986 = _0x56ba20.currentHeading - _0x148ecd;
        const _0x486a24 = Math.min(Math.abs(_0x59a076) / 30, 1.5);
        const _0xbc323c = _0xcc7142 > 45 ? (_0xcc7142 - 45) * 0.2 : 0;
        const _0x56cc6e = (-_0x1e8986 * 15 + -_0x59a076 / 2 * 0.3 * _0x486a24 + Math.sign(_0x59a076) * -_0xbc323c) * (1 + _0x486a24 * 0.5);
        const _0x2e3ffd = Math.max(-45, Math.min(45, _0x56cc6e));
        const _0x1938f4 = Math.abs(_0x2e3ffd - _0x56ba20.currentRoll) > 5 ? 0.35 : 0.2;
        _0x56ba20.currentRoll = _0x56ba20.currentRoll * (1 - _0x1938f4) + _0x2e3ffd * _0x1938f4;
        _0x56ba20.object.rotation = new mp.Vector3(_0x56ba20.currentRoll, 0, _0x56ba20.currentHeading + 90);
        updateTrail(_0x56ba20.object.position, _0x56ba20.object.rotation);
        if (!_0x56ba20.startedEffects && _0x56ba20.object.handle !== 0) {
          _0x56ba20.startedEffects = true;
          createSantaTrailEffect(_0x56ba20.object, _0x3e728a).then(_0xf54ff0 => {
            const _0x4f8d48 = santaGifts.flyingSantas.get(_0x3e728a);
            if (_0x4f8d48) {
              _0x4f8d48.snowballIntervalId = _0xf54ff0;
            }
          });
        }
        const _0x577136 = Date.now();
        if (_0x577136 - _0x56ba20.lastSoundTime >= 20000) {
          const _0x436432 = localplayer.position;
          const _0x7c3732 = _0x56ba20.object.position;
          if (mp.game.system.vdist(_0x436432.x, _0x436432.y, _0x436432.z, _0x7c3732.x, _0x7c3732.y, _0x7c3732.z) <= 300) {
            playSantaGiftsSound();
            _0x56ba20.lastSoundTime = _0x577136;
          }
        }
        if (_0x36502f >= 1) {
          cleanupSanta(_0x3e728a, _0x56ba20);
        }
      });
      santaGifts.fallingGifts.forEach((_0x2ccfcf, _0x503554) => {
        if (!_0x2ccfcf.object || !mp.objects.exists(_0x2ccfcf.object)) {
          santaGifts.fallingGifts.delete(_0x503554);
          return;
        }
        const _0x412b05 = _0x14f28c - _0x2ccfcf.startTime;
        const _0x489470 = Math.min(_0x412b05 / _0x2ccfcf.fallDuration, 1);
        if (_0x489470 >= 1 && !_0x2ccfcf.hasLanded) {
          _0x2ccfcf.hasLanded = true;
          handleGiftLanding(_0x503554, _0x2ccfcf);
          return;
        }
        _0x2ccfcf.swingParams ||= {
          swingAmplitudeX: 0.5 + Math.random() * 1,
          swingAmplitudeY: 0.5 + Math.random() * 1,
          swingFrequencyX: 1.5 + Math.random() * 1,
          swingFrequencyY: 1.8 + Math.random() * 1,
          phaseOffsetX: Math.random() * Math.PI * 2,
          phaseOffsetY: Math.random() * Math.PI * 2,
          rotationSpeedX: 20 + Math.random() * 40,
          rotationSpeedY: 15 + Math.random() * 35,
          rotationSpeedZ: 30 + Math.random() * 50,
          initialRotation: new mp.Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360)
        };
        const _0x8b88ff = _0x2ccfcf.swingParams;
        const _0x43d38a = _0x412b05 / 1000;
        const _0x75332f = Math.min(_0x489470 * 2, 1);
        const _0x287902 = Math.sin(_0x43d38a * _0x8b88ff.swingFrequencyX + _0x8b88ff.phaseOffsetX) * _0x8b88ff.swingAmplitudeX * _0x75332f;
        const _0x438132 = Math.sin(_0x43d38a * _0x8b88ff.swingFrequencyY + _0x8b88ff.phaseOffsetY) * _0x8b88ff.swingAmplitudeY * _0x75332f;
        const _0x42b248 = _0x2ccfcf.landPos.x + _0x287902;
        const _0x3912f1 = _0x2ccfcf.landPos.y + _0x438132;
        const _0x246ee8 = _0x2ccfcf.startPos.z + (_0x2ccfcf.landPos.z - _0x2ccfcf.startPos.z) * _0x489470;
        _0x2ccfcf.object.position = new mp.Vector3(_0x42b248, _0x3912f1, _0x246ee8);
        const _0x2b9f09 = 1 - _0x489470 * 0.3;
        const _0x1d24b8 = _0x8b88ff.initialRotation.x + _0x8b88ff.rotationSpeedX * _0x43d38a * _0x2b9f09;
        const _0x2d4b36 = _0x8b88ff.initialRotation.y + _0x8b88ff.rotationSpeedY * _0x43d38a * _0x2b9f09;
        const _0x1b7693 = _0x8b88ff.initialRotation.z + _0x8b88ff.rotationSpeedZ * _0x43d38a * _0x2b9f09;
        const _0x6a8748 = _0x287902 * 15;
        const _0x100ea8 = _0x438132 * 15;
        _0x2ccfcf.object.rotation = new mp.Vector3(_0x1d24b8 + _0x6a8748, _0x2d4b36 + _0x100ea8, _0x1b7693);
      });
      if (santaGifts.flyingSantas.size === 0 && santaGifts.fallingGifts.size === 0) {
        stopSantaTick();
      }
    } catch (_0x4472ae) {
      mp.console.logInfo(_0x4472ae.toString());
    }
  }, 16);
}
function stopSantaTick() {
  if (santaGifts.tickInterval) {
    clearInterval(santaGifts.tickInterval);
    santaGifts.tickInterval = null;
  }
}
function calculatePositionOnRoute(_0x544a67, _0x2e5e4a) {
  if (_0x2e5e4a >= 1) {
    return _0x544a67[_0x544a67.length - 1];
  }
  if (_0x2e5e4a <= 0) {
    return _0x544a67[0];
  }
  const _0x1ccf76 = _0x544a67.length - 1;
  const _0x1abb13 = _0x2e5e4a * _0x1ccf76;
  const _0x363ff2 = Math.floor(_0x1abb13);
  const _0x580ae5 = _0x1abb13 - _0x363ff2;
  if (_0x363ff2 >= _0x1ccf76) {
    return _0x544a67[_0x544a67.length - 1];
  }
  const _0x126681 = _0x544a67[_0x363ff2];
  const _0x1dede0 = _0x544a67[_0x363ff2 + 1];
  return {
    x: _0x126681.x + (_0x1dede0.x - _0x126681.x) * _0x580ae5,
    y: _0x126681.y + (_0x1dede0.y - _0x126681.y) * _0x580ae5,
    z: _0x126681.z + (_0x1dede0.z - _0x126681.z) * _0x580ae5
  };
}
function cleanupSanta(_0x371994, _0x365005) {
  if (_0x365005.snowballIntervalId) {
    clearInterval(_0x365005.snowballIntervalId);
  }
  if (_0x365005.snowTrailHandle) {
    mp.game.graphics.stopParticleFxLooped(_0x365005.snowTrailHandle, false);
  }
  const _0x2ddec0 = santaGifts.activeSounds.get(_0x371994);
  if (_0x2ddec0 !== undefined && _0x2ddec0 !== -1) {
    mp.game.audio.stopSound(_0x2ddec0);
    mp.game.audio.releaseSoundId(_0x2ddec0);
    santaGifts.activeSounds.delete(_0x371994);
  }
  if (_0x365005.object && mp.objects.exists(_0x365005.object)) {
    _0x365005.object.destroy();
  }
  santaGifts.flyingSantas.delete(_0x371994);
}
function createGiftDropFireworks(_0x53029c, _0x33f1a9) {
  const _0x2e8850 = "proj_xmas_firework";
  const _0x33877a = "scr_firework_xmas_spiral_burst_rgw";
  mp.game.audio.requestScriptAudioBank("FIREWORK_SOUNDSET", false);
  loadPtfxAsset(_0x2e8850).then(_0x169844 => {
    if (!_0x169844) {
      return;
    }
    const _0xc1def3 = (_0x33f1a9 || 0) * Math.PI / 180;
    const _0x2ba968 = Math.cos(_0xc1def3);
    const _0x303364 = -Math.sin(_0xc1def3);
    const _0x35b909 = new mp.Vector3(_0x53029c.x + _0x2ba968 * 4, _0x53029c.y + _0x303364 * 4, _0x53029c.z + -1);
    const _0x1fc087 = new mp.Vector3(_0x53029c.x - _0x2ba968 * 4, _0x53029c.y - _0x303364 * 4, _0x53029c.z + -1);
    const _0x5dd6ea = localplayer.position;
    if (!(mp.game.system.vdist(_0x5dd6ea.x, _0x5dd6ea.y, _0x5dd6ea.z, _0x53029c.x, _0x53029c.y, _0x53029c.z) > 500)) {
      mp.game.graphics.setPtfxAssetNextCall(_0x2e8850);
      mp.game.graphics.startParticleFxNonLoopedAtCoord(_0x33877a, _0x35b909.x, _0x35b909.y, _0x35b909.z, 0, 0, 0, 1.5, false, false, false);
      setTimeout(() => {
        mp.game.graphics.setPtfxAssetNextCall(_0x2e8850);
        mp.game.graphics.startParticleFxNonLoopedAtCoord(_0x33877a, _0x1fc087.x, _0x1fc087.y, _0x1fc087.z, 0, 0, 0, 1.5, false, false, false);
      }, 100);
    }
  }).catch(_0x359590 => {});
}
function handleGiftLanding(_0x2ab71e, _0x562e7f) {
  try {
    if (_0x562e7f.ptfxHandle) {
      mp.game.graphics.stopParticleFxLooped(_0x562e7f.ptfxHandle, false);
    }
    const _0x4cbcd8 = _0x562e7f.landPos;
    const _0x126d9a = _0x562e7f.object;
    if (_0x126d9a && mp.objects.exists(_0x126d9a)) {
      _0x126d9a.destroy();
    }
    const _0x152ff0 = mp.objects.new(GIFT_PYRAMID_HASH, new mp.Vector3(_0x4cbcd8.x, _0x4cbcd8.y, _0x4cbcd8.z - 1.5), {
      rotation: new mp.Vector3(0, 0, Math.random() * 360),
      alpha: 255,
      dimension: 0
    });
    _0x152ff0.streamingRange = 500;
    _0x152ff0.setLodDist(500);
    if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x4cbcd8.x, _0x4cbcd8.y, _0x4cbcd8.z) < 250) {
      loadPtfxAsset("core").then(_0x49c4f1 => {
        if (_0x49c4f1) {
          mp.game.graphics.setPtfxAssetNextCall("core");
          mp.game.graphics.startParticleFxNonLoopedAtCoord("exp_grd_grenade_smoke", _0x4cbcd8.x, _0x4cbcd8.y, _0x4cbcd8.z, 0, 0, 0, 10, false, false, false);
        }
      });
      loadPtfxAsset("proj_indep_firework_v2").then(_0x1ace64 => {
        if (_0x1ace64) {
          mp.game.graphics.setPtfxAssetNextCall("proj_indep_firework_v2");
          mp.game.graphics.startParticleFxNonLoopedAtCoord("scr_firework_indep_repeat_burst_rwb", _0x4cbcd8.x, _0x4cbcd8.y, _0x4cbcd8.z + 3, 0, 0, 0, 1, false, false, false);
        }
      });
      mp.game.cam.shakeGameplayCam("SMALL_EXPLOSION_SHAKE", 0.1);
      mp.game.audio.playSoundFrontend(-1, "CHECKPOINT_MISSED", "HUD_MINI_GAME_SOUNDSET", false);
      setTimeout(() => {
        mp.game.audio.playSoundFrontend(-1, "CHECKPOINT_PERFECT", "HUD_MINI_GAME_SOUNDSET", false);
      }, 300);
    }
    santaGifts.landedGifts.set(_0x2ab71e, {
      id: _0x2ab71e,
      object: _0x152ff0,
      position: _0x4cbcd8
    });
    santaGifts.fallingGifts.delete(_0x2ab71e);
  } catch (_0x576e53) {
    mp.console.logInfo(_0x576e53.toString());
  }
}
function initializeTrail() {
  santaGifts.trailPositions = [];
  santaGifts.trailRotationOffsets = [];
  for (let _0x9f46d1 = 0; _0x9f46d1 < santaGifts.trailMaxLines; _0x9f46d1++) {
    santaGifts.trailPositions[_0x9f46d1] = new mp.Vector3(0, 0, 0);
    santaGifts.trailRotationOffsets[_0x9f46d1] = [0, 0];
  }
  santaGifts.trailEnabled = false;
}
function updateTrail(_0x48c0ce, _0x449b70) {
  if (!_0x48c0ce) {
    return;
  }
  if (santaGifts.trailPositions[0].x === 0 && santaGifts.trailPositions[0].y === 0) {
    for (let _0x1ce81f = 0; _0x1ce81f < santaGifts.trailMaxLines; _0x1ce81f++) {
      santaGifts.trailPositions[_0x1ce81f] = new mp.Vector3(_0x48c0ce.x, _0x48c0ce.y, _0x48c0ce.z);
    }
    santaGifts.trailEnabled = true;
  }
  const _0x58829a = _0x449b70.z * Math.PI / 180;
  const _0x437702 = Math.cos(_0x58829a);
  const _0x1cc1de = -Math.sin(_0x58829a);
  for (let _0x5c4f8e = santaGifts.trailMaxLines - 1; _0x5c4f8e > 0; _0x5c4f8e--) {
    santaGifts.trailPositions[_0x5c4f8e] = santaGifts.trailPositions[_0x5c4f8e - 1];
    santaGifts.trailRotationOffsets[_0x5c4f8e] = santaGifts.trailRotationOffsets[_0x5c4f8e - 1];
  }
  santaGifts.trailPositions[0] = new mp.Vector3(_0x48c0ce.x, _0x48c0ce.y, _0x48c0ce.z);
  santaGifts.trailRotationOffsets[0] = [_0x437702, _0x1cc1de];
}
function getOffsetPosition(_0x2197f9, _0xdf688a) {
  return new mp.Vector3(_0x2197f9.x + _0xdf688a.x, _0x2197f9.y + _0xdf688a.y, _0x2197f9.z + _0xdf688a.z);
}
function drawPoly(_0x33c6bf, _0x2bc022, _0xb4b585, _0x368025, _0x3518dd, _0x3b8074, _0x8373a7) {
  mp.game.graphics.drawPoly(_0x33c6bf.x, _0x33c6bf.y, _0x33c6bf.z, _0x2bc022.x, _0x2bc022.y, _0x2bc022.z, _0xb4b585.x, _0xb4b585.y, _0xb4b585.z, _0x368025, _0x3518dd, _0x3b8074, _0x8373a7);
}
function renderTrail() {
  if (santaGifts.trailEnabled) {
    try {
      const _0xb0c2f2 = santaGifts.trailMaxLines;
      const _0x5f015d = localplayer.position;
      for (let _0x338fe7 = 0; _0x338fe7 < _0xb0c2f2 - 1; _0x338fe7++) {
        const _0x5905fc = santaGifts.trailPositions[_0x338fe7];
        const _0x8b97e0 = santaGifts.trailPositions[_0x338fe7 + 1];
        if (_0x5905fc.x === 0 || _0x8b97e0.x === 0) {
          continue;
        }
        if (mp.game.system.vdist(_0x5f015d.x, _0x5f015d.y, _0x5f015d.z, _0x5905fc.x, _0x5905fc.y, _0x5905fc.z) > 500) {
          continue;
        }
        const _0x2b9045 = santaGifts.trailRotationOffsets[_0x338fe7];
        const _0x2e0f87 = santaGifts.trailRotationOffsets[_0x338fe7 + 1];
        let _0x897ce3 = 140;
        const _0x1ff228 = parseInt(_0xb0c2f2 * 0.5);
        if (_0x338fe7 > _0x1ff228) {
          _0x897ce3 = parseInt((1 - (_0x338fe7 - _0x1ff228) / (_0xb0c2f2 - _0x1ff228)) * 140);
        }
        const _0x1c80ba = _0x338fe7 / _0xb0c2f2;
        const _0x372069 = [255, 0, 0];
        const _0x1e5e41 = [255, 255, 255];
        const _0x51e829 = parseInt(_0x372069[0] + (_0x1e5e41[0] - _0x372069[0]) * _0x1c80ba);
        const _0x544aad = parseInt(_0x372069[1] + (_0x1e5e41[1] - _0x372069[1]) * _0x1c80ba);
        const _0xe60b00 = parseInt(_0x372069[2] + (_0x1e5e41[2] - _0x372069[2]) * _0x1c80ba);
        const _0x38e53b = Date.now() / 1000;
        const _0x575202 = Math.sin(_0x38e53b * 3 + _0x338fe7 * 0.5) * 0.2 + 1;
        const _0x4f997f = parseInt(_0x897ce3 * _0x575202);
        drawHorizontalTrail(_0x5905fc, _0x8b97e0, _0x2b9045, _0x2e0f87, -1, _0x51e829, _0x544aad, _0xe60b00, _0x4f997f);
        drawHorizontalTrail(_0x5905fc, _0x8b97e0, _0x2b9045, _0x2e0f87, 1, _0x51e829, _0x544aad, _0xe60b00, _0x4f997f);
      }
    } catch (_0x1ceb2c) {}
  }
}
function drawHorizontalTrail(_0x2efa6c, _0x3c1150, _0x5a4b3b, _0x265df8, _0xd277e7, _0x19bb9b, _0x1bd88b, _0x22cc14, _0x3e03e2) {
  const _0x2a92ac = santaGifts.trailWidth / 2;
  const _0x5591c2 = santaGifts.trailThickness / 2;
  const _0x26d41b = _0x2efa6c.x + _0x5a4b3b[0] * _0xd277e7 * santaGifts.trailSeparation;
  const _0x64fb6a = _0x2efa6c.y + _0x5a4b3b[1] * _0xd277e7 * santaGifts.trailSeparation;
  const _0x2c48a2 = _0x3c1150.x + _0x265df8[0] * _0xd277e7 * santaGifts.trailSeparation;
  const _0x47f97e = _0x3c1150.y + _0x265df8[1] * _0xd277e7 * santaGifts.trailSeparation;
  const _0x775693 = _0x2c48a2 - _0x26d41b;
  const _0x2ef7fd = _0x47f97e - _0x64fb6a;
  const _0x2cad1f = Math.sqrt(_0x775693 * _0x775693 + _0x2ef7fd * _0x2ef7fd);
  if (_0x2cad1f < 0.01) {
    return;
  }
  const _0x34efd6 = -(_0x2ef7fd / _0x2cad1f);
  const _0x84dbd = _0x775693 / _0x2cad1f;
  const _0x1aec26 = new mp.Vector3(_0x26d41b + _0x34efd6 * _0x2a92ac, _0x64fb6a + _0x84dbd * _0x2a92ac, _0x2efa6c.z + _0x5591c2);
  const _0x4bfd16 = new mp.Vector3(_0x26d41b - _0x34efd6 * _0x2a92ac, _0x64fb6a - _0x84dbd * _0x2a92ac, _0x2efa6c.z + _0x5591c2);
  const _0x54d767 = new mp.Vector3(_0x2c48a2 + _0x34efd6 * _0x2a92ac, _0x47f97e + _0x84dbd * _0x2a92ac, _0x3c1150.z + _0x5591c2);
  const _0xe6a641 = new mp.Vector3(_0x2c48a2 - _0x34efd6 * _0x2a92ac, _0x47f97e - _0x84dbd * _0x2a92ac, _0x3c1150.z + _0x5591c2);
  const _0x36d57c = new mp.Vector3(_0x26d41b + _0x34efd6 * _0x2a92ac, _0x64fb6a + _0x84dbd * _0x2a92ac, _0x2efa6c.z - _0x5591c2);
  const _0x12bfe3 = new mp.Vector3(_0x26d41b - _0x34efd6 * _0x2a92ac, _0x64fb6a - _0x84dbd * _0x2a92ac, _0x2efa6c.z - _0x5591c2);
  const _0x2f7cbc = new mp.Vector3(_0x2c48a2 + _0x34efd6 * _0x2a92ac, _0x47f97e + _0x84dbd * _0x2a92ac, _0x3c1150.z - _0x5591c2);
  const _0x5bfbd3 = new mp.Vector3(_0x2c48a2 - _0x34efd6 * _0x2a92ac, _0x47f97e - _0x84dbd * _0x2a92ac, _0x3c1150.z - _0x5591c2);
  drawPoly(_0x1aec26, _0x54d767, _0x4bfd16, _0x19bb9b, _0x1bd88b, _0x22cc14, _0x3e03e2);
  drawPoly(_0x4bfd16, _0x54d767, _0xe6a641, _0x19bb9b, _0x1bd88b, _0x22cc14, _0x3e03e2);
  drawPoly(_0x36d57c, _0x12bfe3, _0x2f7cbc, _0x19bb9b, _0x1bd88b, _0x22cc14, _0x3e03e2);
  drawPoly(_0x12bfe3, _0x5bfbd3, _0x2f7cbc, _0x19bb9b, _0x1bd88b, _0x22cc14, _0x3e03e2);
}
function startTrailRendering() {
  mp.events.add("render", renderTrail);
}
function stopTrailRendering() {
  santaGifts.trailEnabled = false;
  mp.events.remove("render", renderTrail);
}
function playSantaGiftsSound() {
  main_browser.execute("this.AppComponents.hud.playSantaGiftsSound();");
}
mp.events.add("Client_SantaSpawn", _0x43db23 => {
  try {
    const _0x54d732 = SANTA_ROUTE;
    const _0x2c284f = _0x54d732[0];
    const _0x56deda = _0x54d732.length > 1 ? Math.atan2(_0x54d732[1].y - _0x54d732[0].y, _0x54d732[1].x - _0x54d732[0].x) * 180 / Math.PI : 0;
    const _0x1c6304 = new mp.Vector3(0, 0, _0x56deda + 90);
    const _0x1169c8 = mp.objects.new(SANTA_HASH, _0x2c284f, {
      rotation: _0x1c6304,
      alpha: 255,
      dimension: 0
    });
    _0x1169c8.streamingRange = 2000;
    santaGifts.flyingSantas.set(_0x43db23, {
      id: _0x43db23,
      object: _0x1169c8,
      route: _0x54d732,
      startTime: Date.now(),
      flightDuration: 900000,
      snowballIntervalId: null,
      snowTrailHandle: null,
      soundId: null,
      startedEffects: false,
      currentHeading: _0x56deda,
      currentRoll: 0,
      lastSoundTime: Date.now()
    });
    if (santaGifts.flyingSantas.size === 1) {
      startSantaTick();
      initializeTrail();
      startTrailRendering();
    }
  } catch (_0x5e6fcb) {
    mp.console.logInfo(_0x5e6fcb.toString());
  }
});
mp.events.add("Client_GiftDrop", (_0x21ea68, _0xb6e4ae, _0x398936, _0x4851d3) => {
  try {
    const _0x2a2a04 = new mp.Vector3(_0xb6e4ae.x, _0xb6e4ae.y, _0xb6e4ae.z);
    const _0x2ef708 = new mp.Vector3(_0x398936.x, _0x398936.y, _0x398936.z + 1.5);
    createGiftDropFireworks(_0x2a2a04, _0x4851d3);
    const _0x29e561 = localplayer.position;
    if (mp.game.system.vdist(_0x29e561.x, _0x29e561.y, _0x29e561.z, _0x2a2a04.x, _0x2a2a04.y, _0x2a2a04.z) <= 300) {
      const _0x3f4fcc = Date.now();
      let _0x9229b6 = true;
      santaGifts.flyingSantas.forEach(_0x4d77e8 => {
        if (_0x3f4fcc - _0x4d77e8.lastSoundTime < 10000) {
          _0x9229b6 = false;
        }
      });
      if (_0x9229b6) {
        playSantaGiftsSound();
        santaGifts.flyingSantas.forEach(_0x59efa9 => {
          _0x59efa9.lastSoundTime = _0x3f4fcc;
        });
      }
    }
    const _0x376dc0 = mp.objects.new(CARGO_BOX_HASH, _0x2a2a04, {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    _0x376dc0.streamingRange = 2000;
    _0x376dc0.setLodDist(2000);
    santaGifts.fallingGifts.set(_0x21ea68, {
      id: _0x21ea68,
      object: _0x376dc0,
      startPos: _0x2a2a04,
      landPos: _0x2ef708,
      startTime: Date.now(),
      fallDuration: 8000,
      hasLanded: false,
      ptfxHandle: null,
      isCargoBox: true
    });
    createGiftFallEffect(_0x376dc0).then(_0x4d6c1d => {
      const _0xabd40a = santaGifts.fallingGifts.get(_0x21ea68);
      if (_0xabd40a) {
        _0xabd40a.ptfxHandle = _0x4d6c1d;
      }
    });
  } catch (_0x323329) {
    mp.console.logInfo(_0x323329.toString());
  }
});
mp.events.add("Client_SpawnStaticGifts", _0x2e111a => {
  setTimeout(() => {
    _0x2e111a.forEach(_0x488804 => {
      _0x488804.position = new mp.Vector3(_0x488804.position.x, _0x488804.position.y, _0x488804.position.z);
      const _0x1a5642 = mp.objects.new(GIFT_PYRAMID_HASH, _0x488804.position, {
        rotation: new mp.Vector3(0, 0, Math.random() * 360),
        alpha: 255,
        dimension: 0
      });
      _0x1a5642.streamingRange = 500;
      const _0x2f3ed3 = {
        id: _0x488804.id,
        object: _0x1a5642,
        position: _0x488804.position
      };
      santaGifts.landedGifts.set(_0x488804.id, _0x2f3ed3);
    });
  }, 2000);
});
mp.events.add("Client_SantaRemove", _0x2b6e94 => {
  const _0x3dcdbd = santaGifts.flyingSantas.get(_0x2b6e94);
  if (_0x3dcdbd) {
    cleanupSanta(_0x2b6e94, _0x3dcdbd);
  }
  if (santaGifts.flyingSantas.size === 0) {
    stopTrailRendering();
  }
});
mp.events.add("Client_GiftRemove", _0x398cd5 => {
  const _0x3aa332 = santaGifts.landedGifts.get(_0x398cd5);
  if (_0x3aa332) {
    if (_0x3aa332.object && mp.objects.exists(_0x3aa332.object)) {
      _0x3aa332.object.destroy();
    }
    santaGifts.landedGifts.delete(_0x398cd5);
  }
  const _0x42d9dd = santaGifts.fallingGifts.get(_0x398cd5);
  if (_0x42d9dd) {
    if (_0x42d9dd.ptfxHandle) {
      mp.game.graphics.stopParticleFxLooped(_0x42d9dd.ptfxHandle, false);
    }
    if (_0x42d9dd.object && mp.objects.exists(_0x42d9dd.object)) {
      _0x42d9dd.object.destroy();
    }
    santaGifts.fallingGifts.delete(_0x398cd5);
  }
});
mp.events.add("Client_GiftCollectInteract", _0x34195e => {
  if (_0x34195e) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  global.atSantaGiftCollectInteract = _0x34195e;
});
mp.events.add("Client_GiftStartCollectingAnimation", _0xb23efb => {
  const _0x2166fd = mp.players.atRemoteId(_0xb23efb);
  if (mp.players.exists(_0x2166fd)) {
    if (_0x2166fd === localplayer) {
      global.atSantaGiftCollectInProcess = true;
    }
    global.play_animation2(_0x2166fd, "amb@prop_human_bbq@male@idle_a", "idle_c", 8, -8, 11000, 1, 0);
    setTimeout(() => {
      if (mp.players.exists(_0x2166fd)) {
        global.play_animation2(_0x2166fd, "anim@heists@load_box", "lift_box", 8, -8, 4000, 1, 0);
        setTimeout(() => {
          if (!mp.players.exists(_0x2166fd)) {
            return;
          }
          mp.events.call("Client_attachObject2", _0x2166fd.remoteId, "{\"Bone\": 6286, \"Model\": \"grand_xmas_prop_giftbox_06\", \"PosOffset1\": 0.0,\"PosOffset2\": 0.0,\"PosOffset3\": -0.25, \"RotOffset1\": -90.0, \"RotOffset2\": 90.0, \"RotOffset3\": 0}");
        }, 1200);
        setTimeout(() => {
          if (mp.players.exists(_0x2166fd)) {
            mp.events.call("Client_detachObject", _0x2166fd.remoteId);
            global.stop_animation(_0x2166fd, "anim@heists@load_box", "lift_box");
            if (_0x2166fd === localplayer) {
              global.atSantaGiftCollectInProcess = false;
            }
          }
        }, 3000);
      }
    }, 10500);
  }
});
mp.events.add("Client_SantaGiftShowProgressBar", () => {
  const _0x133533 = {
    progress: 0,
    delay: 100,
    duration: parseInt(12.6),
    isIncrease: true,
    title: "Выбираем подарок...",
    displayAt: "center"
  };
  main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x133533) + ";");
});