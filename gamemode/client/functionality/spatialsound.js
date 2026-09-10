const player = mp.players.local;
const soundsData = new Map();
const vehicleSounds = new Map();
const attachedSounds = new Map();
const SOUND_PRESETS = {
  VERY_SHORT: {
    loudDistance: 10,
    maxDistance: 30
  },
  SHORT: {
    loudDistance: 30,
    maxDistance: 50
  },
  MEDIUM: {
    loudDistance: 50,
    maxDistance: 70
  },
  LONG: {
    loudDistance: 100,
    maxDistance: 120
  },
  VEHICLE: {
    loudDistance: 5,
    maxDistance: 15
  }
};
const DISTANCE_MULTIPLIER = 2;
let lastPlayerPosition = {
  x: 0,
  y: 0,
  z: 0,
  heading: 0
};
let spatialSoundBrowser = null;
let updateInterval = null;
let soundIdCounter = 0;
function createSound(_0xf68be3, _0x301735, _0x2f18e8 = {}) {
  if (!spatialSoundBrowser) {
    return null;
  }
  try {
    const _0x3db883 = _0x2f18e8.id || "sound_" + ++soundIdCounter;
    if (soundsData.has(_0x3db883)) {
      removeSound(_0x3db883);
    }
    const _0x1d3af7 = {
      soundUrl: _0xf68be3,
      position: _0x301735,
      options: _0x2f18e8
    };
    soundsData.set(_0x3db883, _0x1d3af7);
    if (_0x2f18e8.vehicle) {
      const _0x2a5329 = _0x2f18e8.vehicle;
      const _0x1b167c = getVehicleDoorCount(_0x2a5329);
      vehicleSounds.set(_0x2a5329, {
        id: _0x3db883,
        totalDoors: _0x1b167c,
        lastOpenDoors: -1
      });
      _0x2a5329.spatialSoundId = _0x3db883;
    }
    if (_0x2f18e8.attached) {
      const _0x288175 = _0x2f18e8.attached;
      _0x288175.spatialSoundId = _0x3db883;
      attachedSounds.set(_0x288175, {
        id: _0x3db883
      });
    }
    if (_0x2f18e8.length) {
      setTimeout(() => {
        if (_0x2f18e8.attached && mp.players.exists(_0x2f18e8.attached)) {
          delete _0x2f18e8.attached.spatialSoundId;
        }
        removeSound(_0x3db883);
      }, _0x2f18e8.length);
    }
    spatialSoundBrowser.execute("createSound('" + _0x3db883 + "', '" + _0xf68be3 + "', " + JSON.stringify(_0x301735) + ", " + JSON.stringify(_0x2f18e8) + ")");
    return _0x3db883;
  } catch (_0x3bf8ac) {
    mp.console.logInfo("createSound: " + JSON.stringify(_0x3bf8ac));
  }
}
function createSoundWithPreset(_0x6d9092, _0x3e528c, _0x40097c = "SHORT", _0x2a087b = {}) {
  const _0x466aab = SOUND_PRESETS[_0x40097c] || SOUND_PRESETS.SHORT;
  return createSound(_0x6d9092, _0x3e528c, {
    ..._0x2a087b,
    loop: _0x2a087b.loop ?? false,
    volume: _0x2a087b.volume ?? 0.1,
    autoplay: _0x2a087b.autoplay ?? true,
    maxDistance: _0x466aab.maxDistance,
    loudDistance: _0x466aab.loudDistance
  });
}
function createAttachedSoundWithPreset(_0xcc746d, _0x3314ec, _0x6f9383 = "SHORT", _0xe21f40 = {}) {
  const _0x4ea083 = _0x3314ec.position;
  return createSoundWithPreset(_0xcc746d, {
    x: _0x4ea083.x,
    y: _0x4ea083.y,
    z: _0x4ea083.z
  }, _0x6f9383, {
    ..._0xe21f40,
    attached: _0x3314ec
  });
}
function createVehicleSound(_0x307c70, _0x58a398, _0x449db3 = "VEHICLE", _0x273ffc = {}) {
  if (!_0x58a398 || !mp.vehicles.exists(_0x58a398)) {
    return null;
  }
  const _0x36c8e3 = _0x58a398.position;
  return createSoundWithPreset(_0x307c70, {
    x: _0x36c8e3.x,
    y: _0x36c8e3.y,
    z: _0x36c8e3.z
  }, _0x449db3, {
    ..._0x273ffc,
    vehicle: _0x58a398,
    isVehicleSound: true
  });
}
function removeSound(_0x4f9fe3) {
  if (spatialSoundBrowser && soundsData.has(_0x4f9fe3)) {
    soundsData.delete(_0x4f9fe3);
    vehicleSounds.delete(_0x4f9fe3);
    attachedSounds.delete(_0x4f9fe3);
    spatialSoundBrowser.execute("removeSound('" + _0x4f9fe3 + "')");
  }
}
function removeAllSounds() {
  if (spatialSoundBrowser) {
    soundsData.clear();
    vehicleSounds.clear();
    attachedSounds.clear();
    spatialSoundBrowser.execute("removeAllSounds()");
  }
}
function updateSoundPosition(_0x1e945b, _0x4abea4) {
  if (spatialSoundBrowser && soundsData.has(_0x1e945b)) {
    soundsData.get(_0x1e945b).position = _0x4abea4;
    spatialSoundBrowser.execute("updateSoundPosition('" + _0x1e945b + "', " + JSON.stringify(_0x4abea4) + ")");
  }
}
function setSoundVolume(_0x3d93d6, _0x3123de) {
  if (spatialSoundBrowser && soundsData.has(_0x3d93d6)) {
    spatialSoundBrowser.execute("setSoundVolume('" + _0x3d93d6 + "', " + _0x3123de + ")");
  }
}
function toggleSound(_0x3e2ea4) {
  if (spatialSoundBrowser) {
    spatialSoundBrowser.execute("toggleSound('" + _0x3e2ea4 + "')");
  }
}
function updateListener() {
  if (!spatialSoundBrowser || !soundsData.size) {
    return;
  }
  const _0x14cfb7 = mp.cameras.new("gameplay").getCoord();
  const _0x33c4cc = mp.game.cam.getGameplayCamRot(2).z;
  if (lastPlayerPosition.x !== _0x14cfb7.x || lastPlayerPosition.y !== _0x14cfb7.y || lastPlayerPosition.z !== _0x14cfb7.z || lastPlayerPosition.heading !== _0x33c4cc) {
    lastPlayerPosition = {
      x: _0x14cfb7.x,
      y: _0x14cfb7.y,
      z: _0x14cfb7.z,
      heading: _0x33c4cc
    };
    spatialSoundBrowser.execute("updateListener(" + JSON.stringify({
      x: _0x14cfb7.x,
      y: _0x14cfb7.y,
      z: _0x14cfb7.z
    }) + ", " + _0x33c4cc + ")");
  }
  updateVehicleSounds();
  updateAttachedSounds();
  const _0xd7d67a = [];
  soundsData.forEach((_0x1b533c, _0x4b5c6a) => {
    const _0x3b268c = (_0x1b533c.options?.maxDistance || 10) * 2;
    if (mp.game.system.vdist(_0x1b533c.position.x, _0x1b533c.position.y, _0x1b533c.position.z, _0x14cfb7.x, _0x14cfb7.y, _0x14cfb7.z) > _0x3b268c) {
      _0xd7d67a.push(_0x4b5c6a);
    }
  });
  _0xd7d67a.forEach(_0x40de3d => removeSound(_0x40de3d));
}
function updateAttachedSounds() {
  const _0x1361e7 = [];
  attachedSounds.forEach((_0x33db21, _0x3b4d88) => {
    const {
      id: _0x13f40c
    } = _0x33db21;
    const _0x422f05 = _0x3b4d88.position;
    const _0x35fc79 = soundsData.get(_0x13f40c);
    if (_0x35fc79) {
      _0x35fc79.position = {
        x: _0x422f05.x,
        y: _0x422f05.y,
        z: _0x422f05.z
      };
      _0x1361e7.push({
        type: "updatePosition",
        id: _0x13f40c,
        position: _0x35fc79.position
      });
    }
  });
  if (_0x1361e7.length) {
    spatialSoundBrowser.execute("batchUpdate(" + JSON.stringify(_0x1361e7) + ")");
  }
}
function updateVehicleSounds() {
  if (!vehicleSounds.size) {
    return;
  }
  const _0x174e79 = [];
  const _0x1fcb17 = [];
  vehicleSounds.forEach((_0x44b1a8, _0x5badd8) => {
    const {
      id: _0xdd4203,
      totalDoors: _0x3834f2
    } = _0x44b1a8;
    if (!mp.vehicles.exists(_0x5badd8)) {
      _0x1fcb17.push(_0xdd4203);
      return;
    }
    const _0x4ecae2 = _0x5badd8.position;
    const _0x4fe893 = soundsData.get(_0xdd4203);
    if (_0x4fe893) {
      _0x4fe893.position = {
        x: _0x4ecae2.x,
        y: _0x4ecae2.y,
        z: _0x4ecae2.z
      };
      _0x174e79.push({
        type: "updatePosition",
        id: _0xdd4203,
        position: _0x4fe893.position
      });
    }
    const _0x43dc89 = getVehicleOpenDoorsCount(_0x5badd8, _0x3834f2);
    if (_0x43dc89 !== _0x44b1a8.lastOpenDoors) {
      _0x44b1a8.lastOpenDoors = _0x43dc89;
      _0x174e79.push({
        type: "updateDoorRolloff",
        id: _0xdd4203,
        openDoors: _0x43dc89
      });
    }
  });
  _0x1fcb17.forEach(_0x285278 => removeSound(_0x285278));
  if (_0x174e79.length) {
    spatialSoundBrowser.execute("batchUpdate(" + JSON.stringify(_0x174e79) + ")");
  }
}
function getVehicleDoorCount(_0x26a819) {
  if (!_0x26a819 || !mp.vehicles.exists(_0x26a819)) {
    return 0;
  }
  let _0x2ae4a9 = 0;
  for (let _0x5e3d28 = -1; _0x5e3d28 < 8; _0x5e3d28++) {
    try {
      const _0x2667b0 = _0x26a819.getEntryPositionOfDoor(_0x5e3d28);
      if (_0x2667b0 && (_0x2667b0.x || _0x2667b0.y || _0x2667b0.z)) {
        _0x2ae4a9++;
      }
    } catch (_0x55e0ac) {
      mp.console.logError("getVehicleDoorCount: " + String(_0x55e0ac), true, true);
    }
  }
  return _0x2ae4a9 || 4;
}
function getVehicleOpenDoorsCount(_0x56d542, _0x51645e) {
  if (!_0x56d542 || !mp.vehicles.exists(_0x56d542)) {
    return 0;
  }
  let _0x1bd62b = 0;
  for (let _0xd26095 = -1; _0xd26095 < Math.min(_0x51645e, 8); _0xd26095++) {
    if (_0x56d542.getDoorAngleRatio(_0xd26095) > 0) {
      _0x1bd62b++;
    }
  }
  return _0x1bd62b;
}
function subscribeToEvents() {
  mp.events.add("Client_CreateSpatial", createSound);
  mp.events.add("Client_CreateSpatialPreset", createSoundWithPreset);
  mp.events.add("Client_RemoveSpatial", removeSound);
  mp.events.add("Client_RemoveAllSpatial", removeAllSounds);
  mp.events.add("Client_UpdateSpatialPosition", updateSoundPosition);
  mp.events.add("Client_SetSpatialVolume", setSoundVolume);
  mp.events.add("Client_ToggleSpatial", toggleSound);
  mp.events.add("entityStreamOut", _0x2cfd6b => {
    if (_0x2cfd6b.spatialSoundId) {
      removeSound(_0x2cfd6b.spatialSoundId);
    }
  });
}
function showSoundsInfo() {
  if (!soundsData.size) {
    return mp.gui.chat.push("[Spatial] No active sounds");
  }
  const _0x3b51b3 = mp.players.local.position;
  mp.gui.chat.push("[Spatial] Active sounds: " + soundsData.size + " (vehicles: " + vehicleSounds.size + ")");
  soundsData.forEach((_0x36667b, _0x3e032d) => {
    const _0x543183 = mp.game.system.vdist(_0x36667b.position.x, _0x36667b.position.y, _0x36667b.position.z, _0x3b51b3.x, _0x3b51b3.y, _0x3b51b3.z).toFixed(1);
    const _0x262e0e = vehicleSounds.has(_0x3e032d) ? " [Vehicle]" : "";
    mp.gui.chat.push("  - " + _0x3e032d + ": " + _0x543183 + "m" + _0x262e0e);
  });
}
function debugCreatePresetSound(_0x34bf84, _0x52c85e = "cef/spatialSound/test.mp3", _0x27d911 = mp.players.local.position, _0x1bfbf1 = 0) {
  const _0x15fa5 = _0x27d911;
  const _0x206d1f = createSoundWithPreset(_0x52c85e, {
    x: _0x15fa5.x,
    y: _0x15fa5.y,
    z: _0x15fa5.z
  }, _0x34bf84);
  const _0x43f000 = mp.objects.new(mp.game.joaat("prop_speaker_06"), new mp.Vector3(_0x15fa5.x, _0x15fa5.y, _0x15fa5.z), {
    alpha: 255,
    dimension: mp.players.local.dimension
  });
  const _0x40a32a = SOUND_PRESETS[_0x34bf84];
  mp.gui.chat.push("[Spatial] Created " + _0x34bf84 + ": " + _0x206d1f);
  mp.gui.chat.push("Loud: " + _0x40a32a.loudDistance + "m | Max: " + _0x40a32a.maxDistance + "m");
  if (_0x1bfbf1 > 0) {
    setTimeout(() => {
      removeSound(_0x206d1f);
      if (_0x43f000 && mp.objects.exists(_0x43f000)) {
        _0x43f000.destroy();
      }
    }, _0x1bfbf1);
  }
}
mp.events.add("playerReady", () => {
  spatialSoundBrowser = mp.browsers.new("cef/spatialSound/index.html");
  subscribeToEvents();
  updateInterval ||= setInterval(updateListener, 100);
});
global.spatialSound = {
  createSound: createSound,
  createSoundWithPreset: createSoundWithPreset,
  createVehicleSound: createVehicleSound,
  removeSound: removeSound,
  removeAllSounds: removeAllSounds,
  updateSoundPosition: updateSoundPosition,
  setSoundVolume: setSoundVolume,
  toggleSound: toggleSound,
  createAttachedSoundWithPreset: createAttachedSoundWithPreset
};
let debugVehicle = null;
function debugCreateVehicleSound() {
  if (!mp.players.local.vehicle) {
    return mp.gui.chat.push("[Spatial] You must be in a vehicle!");
  }
  debugVehicle = mp.players.local.vehicle;
  const _0x15cce = createVehicleSound("cef/spatialSound/test.mp3", debugVehicle, "VEHICLE");
  const _0x271316 = getVehicleDoorCount(debugVehicle);
  mp.gui.chat.push("[Spatial] Created vehicle sound: " + _0x15cce);
  mp.gui.chat.push("  Doors: " + _0x271316 + " | Open/close to change volume!");
}
function debugOpenDoor(_0x1def54) {
  if (!mp.vehicles.exists(debugVehicle)) {
    return mp.gui.chat.push("[Spatial] Vehicle not found!");
  }
  debugVehicle.setDoorOpen(_0x1def54, false, true);
}
function registerDebugBinds() {}
mp.events.add("Client_CreateBoombox", (_0x180db8, _0x37951e) => {
  debugCreatePresetSound("SHORT", _0x37951e, _0x180db8);
});
mp.events.add("Client_CreateVehicleSound", _0x221d14 => {
  debugVehicle = _0x221d14;
  createVehicleSound("cef/spatialSound/test.mp3", debugVehicle, "VEHICLE");
  getVehicleDoorCount(debugVehicle);
});
const spatialSoundLinks = [{
  id: 1,
  item: 7095,
  case: 439,
  url: "https://launcher.gta5grand.com/game/spatialSounds/1.mp3",
  length: 4600
}, {
  id: 2,
  item: 7096,
  case: 439,
  url: "https://launcher.gta5grand.com/game/spatialSounds/2.mp3",
  length: 4650,
  volume: 0.2
}, {
  id: 3,
  item: 7097,
  case: 438,
  url: "https://launcher.gta5grand.com/game/spatialSounds/3.mp3",
  length: 4250
}, {
  id: 4,
  item: 7098,
  case: 438,
  url: "https://launcher.gta5grand.com/game/spatialSounds/4.mp3",
  length: 7100
}, {
  id: 5,
  item: 7099,
  case: 437,
  url: "https://launcher.gta5grand.com/game/spatialSounds/5.mp3",
  length: 870
}, {
  id: 6,
  item: 7100,
  case: 437,
  url: "https://launcher.gta5grand.com/game/spatialSounds/6.mp3",
  length: 940
}, {
  id: 7,
  item: 7101,
  case: 436,
  url: "https://launcher.gta5grand.com/game/spatialSounds/7.mp3",
  length: 3150
}, {
  id: 8,
  item: 7102,
  case: 436,
  url: "https://launcher.gta5grand.com/game/spatialSounds/8.mp3",
  length: 6600
}, {
  id: 9,
  item: 7103,
  case: 435,
  url: "https://launcher.gta5grand.com/game/spatialSounds/9.mp3",
  length: 700
}, {
  id: 10,
  item: 7104,
  case: 435,
  url: "https://launcher.gta5grand.com/game/spatialSounds/10.mp3",
  length: 4650
}, {
  id: 11,
  item: 7105,
  case: 434,
  url: "https://launcher.gta5grand.com/game/spatialSounds/11.mp3",
  length: 1800
}, {
  id: 12,
  item: 7106,
  case: 434,
  url: "https://launcher.gta5grand.com/game/spatialSounds/12.mp3",
  length: 410
}, {
  id: 13,
  item: 7107,
  case: 433,
  url: "https://launcher.gta5grand.com/game/spatialSounds/13.mp3",
  length: 3050
}, {
  id: 14,
  item: 7108,
  case: 433,
  url: "https://launcher.gta5grand.com/game/spatialSounds/14.mp3",
  length: 940
}, {
  id: 15,
  item: 7187,
  case: 441,
  url: "https://launcher.gta5grand.com/game/spatialSounds/15.mp3",
  length: 2400
}, {
  id: 16,
  item: 7188,
  case: 441,
  url: "https://launcher.gta5grand.com/game/spatialSounds/16.mp3",
  length: 1370
}, {
  id: 17,
  item: 7256,
  case: 443,
  url: "https://launcher.gta5grand.com/game/spatialSounds/17.mp3",
  length: 3000
}, {
  id: 18,
  item: 7257,
  case: 443,
  url: "https://launcher.gta5grand.com/game/spatialSounds/18.mp3",
  length: 3000
}, {
  id: 19,
  item: 7317,
  case: 448,
  url: "https://launcher.gta5grand.com/game/spatialSounds/19.mp3",
  length: 2690
}, {
  id: 20,
  item: 7318,
  case: 448,
  url: "https://launcher.gta5grand.com/game/spatialSounds/20.mp3",
  length: 2320
}, {
  id: 21,
  item: 7319,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/21.mp3",
  length: 2120
}, {
  id: 22,
  item: 7320,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/22.mp3",
  length: 2120
}, {
  id: 23,
  item: 7378,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/23.mp3",
  length: 5352
}, {
  id: 24,
  item: 7379,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/24.mp3",
  length: 1224
}, {
  id: 25,
  item: 7380,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/25.mp3",
  length: 2904
}, {
  id: 26,
  item: 7381,
  case: 449,
  url: "https://launcher.gta5grand.com/game/spatialSounds/26.mp3",
  length: 1920
}, {
  id: 27,
  item: 7451,
  battlepass: true,
  url: "https://launcher.gta5grand.com/game/spatialSounds/27.mp3",
  length: 1056
}, {
  id: 28,
  item: 7452,
  battlepass: true,
  url: "https://launcher.gta5grand.com/game/spatialSounds/28.mp3",
  length: 6552
}, {
  id: 29,
  item: 7453,
  battlepass: true,
  url: "https://launcher.gta5grand.com/game/spatialSounds/29.mp3",
  length: 6660
}, {
  id: 30,
  item: 7454,
  battlepass: true,
  url: "https://launcher.gta5grand.com/game/spatialSounds/30.mp3",
  length: 7888
}, {
  id: 31,
  item: 7455,
  battlepass: true,
  url: "https://launcher.gta5grand.com/game/spatialSounds/31.mp3",
  length: 4101
}, {
  id: 32,
  item: 7455,
  case: 452,
  url: "https://launcher.gta5grand.com/game/spatialSounds/32.mp3",
  length: 888
}, {
  id: 33,
  item: 7456,
  case: 452,
  url: "https://launcher.gta5grand.com/game/spatialSounds/33.mp3",
  length: 1032
}, {
  id: 34,
  item: 7510,
  case: 453,
  url: "https://launcher.gta5grand.com/game/spatialSounds/34.mp3",
  length: 1740
}, {
  id: 35,
  item: 7511,
  case: 453,
  url: "https://launcher.gta5grand.com/game/spatialSounds/35.mp3",
  length: 1280
}];
mp.events.add("Client_RequestPlaySpatialSound", _0x5a5d47 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestPlaySpatialSound", _0x5a5d47);
    }
  }
});
mp.events.add("Client_PlaySpatialSoundAttached", (_0x96b061, _0x2e59fc) => {
  if (mp.storage.data.muteSpatialSound) {
    return;
  }
  const _0x318511 = mp.players.atRemoteId(_0x2e59fc);
  if (!_0x318511 || !mp.players.exists(_0x318511)) {
    return;
  }
  const _0xe0ca4b = spatialSoundLinks.find(_0x24f979 => _0x24f979.id === _0x96b061);
  if (_0xe0ca4b) {
    spatialSound.createAttachedSoundWithPreset(_0xe0ca4b.url, _0x318511, "VERY_SHORT", {
      length: _0xe0ca4b.length,
      volume: _0xe0ca4b.volume ?? 0.1
    });
  }
});
mp.events.add("Client_ChangeSpatialSoundState", _0x25a589 => {
  if (_0x25a589 == 1) {
    mp.storage.data.muteSpatialSound = 1;
    removeAllSounds();
  } else {
    mp.storage.data.muteSpatialSound = 0;
  }
  mp.storage.flush();
});
mp.events.add("Client_RequestShowSpatialSoundWhereToGet", _0x4477f5 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseBindAnimationDesign();
      mp.events.callRemote("Server_RequestShowSpatialSoundWhereToGet", _0x4477f5);
    }
  }
});