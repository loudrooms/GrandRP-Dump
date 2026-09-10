const player = mp.players.local;
const soundsData = new Map(); // id -> { soundUrl, position, options }
const vehicleSounds = new Map(); // vehicle -> { id, totalDoors, lastDoorMultiplier }

const SOUND_PRESETS = {
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
const DISTANCE_MULTIPLIER = 2; // Чтоб удалять звуки на большем расстоянии из soundsData, а не сразу как только вышел

let lastPlayerPosition = {
  x: 0,
  y: 0,
  z: 0,
  heading: 0
};
let spatialSoundBrowser = null;
let updateInterval = null;
let soundIdCounter = 0;
function createSound(soundUrl, position, options = {}) {
  if (!spatialSoundBrowser) {
    return null;
  }
  const id = options.id || `sound_${++soundIdCounter}`;
  if (soundsData.has(id)) {
    removeSound(id);
  }
  const soundData = {
    soundUrl,
    position,
    options
  };
  soundsData.set(id, soundData);
  if (options.vehicle) {
    const vehicle = options.vehicle;
    const totalDoors = getVehicleDoorCount(vehicle);
    vehicleSounds.set(vehicle, {
      id,
      totalDoors,
      lastOpenDoors: -1
    });
    vehicle.spatialSoundId = id;
  }
  spatialSoundBrowser.execute(`createSound('${id}', '${soundUrl}', ${JSON.stringify(position)}, ${JSON.stringify(options)})`);
  return id;
}
function createSoundWithPreset(soundUrl, position, preset = "SHORT", customOptions = {}) {
  const presetConfig = SOUND_PRESETS[preset] || SOUND_PRESETS.SHORT;
  return createSound(soundUrl, position, {
    ...customOptions,
    loop: customOptions.loop ?? true,
    volume: customOptions.volume ?? 1,
    autoplay: customOptions.autoplay ?? true,
    maxDistance: presetConfig.maxDistance,
    loudDistance: presetConfig.loudDistance
  });
}
function createVehicleSound(soundUrl, vehicle, preset = "VEHICLE", customOptions = {}) {
  if (!vehicle || !mp.vehicles.exists(vehicle)) {
    return null;
  }
  const pos = vehicle.position;
  return createSoundWithPreset(soundUrl, {
    x: pos.x,
    y: pos.y,
    z: pos.z
  }, preset, {
    ...customOptions,
    vehicle,
    isVehicleSound: true
  });
}
function removeSound(id) {
  if (!spatialSoundBrowser || !soundsData.has(id)) {
    return;
  }
  soundsData.delete(id);
  vehicleSounds.delete(id);
  spatialSoundBrowser.execute(`removeSound('${id}')`);
}
function removeAllSounds() {
  if (!spatialSoundBrowser) {
    return;
  }
  soundsData.clear();
  vehicleSounds.clear();
  spatialSoundBrowser.execute(`removeAllSounds()`);
}
function updateSoundPosition(id, position) {
  if (!spatialSoundBrowser || !soundsData.has(id)) {
    return;
  }
  soundsData.get(id).position = position;
  spatialSoundBrowser.execute(`updateSoundPosition('${id}', ${JSON.stringify(position)})`);
}
function setSoundVolume(id, volume) {
  if (!spatialSoundBrowser || !soundsData.has(id)) {
    return;
  }
  spatialSoundBrowser.execute(`setSoundVolume('${id}', ${volume})`);
}
function toggleSound(id) {
  if (!spatialSoundBrowser) {
    return;
  }
  spatialSoundBrowser.execute(`toggleSound('${id}')`);
}
function updateListener() {
  if (!spatialSoundBrowser || !soundsData.size) {
    return;
  }
  const pos = mp.cameras.new("gameplay").getCoord();
  const camRot = mp.game.cam.getGameplayCamRot(2);
  const heading = camRot.z;
  const posChanged = lastPlayerPosition.x !== pos.x || lastPlayerPosition.y !== pos.y || lastPlayerPosition.z !== pos.z || lastPlayerPosition.heading !== heading;
  if (posChanged) {
    lastPlayerPosition = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      heading
    };
    spatialSoundBrowser.execute(`updateListener(${JSON.stringify({
      x: pos.x,
      y: pos.y,
      z: pos.z
    })}, ${heading})`);
  }
  updateVehicleSounds();
  const soundsToRemove = [];
  soundsData.forEach((data, id) => {
    const maxDist = data.options?.maxDistance || 10;
    const distanceToRemove = maxDist * DISTANCE_MULTIPLIER;
    if (mp.game.system.vdist(data.position.x, data.position.y, data.position.z, pos.x, pos.y, pos.z) > distanceToRemove) {
      soundsToRemove.push(id);
    }
  });
  soundsToRemove.forEach(id => removeSound(id));
}
function updateVehicleSounds() {
  if (!vehicleSounds.size) {
    return;
  }
  const operations = [];
  const toRemove = [];
  vehicleSounds.forEach((vehData, vehicle) => {
    const {
      id,
      totalDoors
    } = vehData;
    if (!mp.vehicles.exists(vehicle)) {
      toRemove.push(id);
      return;
    }
    const vehPos = vehicle.position;
    const soundData = soundsData.get(id);
    if (soundData) {
      soundData.position = {
        x: vehPos.x,
        y: vehPos.y,
        z: vehPos.z
      };
      operations.push({
        type: "updatePosition",
        id: id,
        position: soundData.position
      });
    }
    const openDoors = getVehicleOpenDoorsCount(vehicle, totalDoors);
    if (openDoors !== vehData.lastOpenDoors) {
      vehData.lastOpenDoors = openDoors;
      operations.push({
        type: "updateDoorRolloff",
        id: id,
        openDoors: openDoors
      });
    }
  });
  toRemove.forEach(id => removeSound(id));
  if (operations.length) {
    spatialSoundBrowser.execute(`batchUpdate(${JSON.stringify(operations)})`);
  }
}
function getVehicleDoorCount(vehicle) {
  if (!vehicle || !mp.vehicles.exists(vehicle)) {
    return 0;
  }
  let count = 0;
  for (let i = -1; i < 8; i++) {
    try {
      const doorPosition = vehicle.getEntryPositionOfDoor(i);
      if (doorPosition && (doorPosition.x || doorPosition.y || doorPosition.z)) {
        count++;
      }
    } catch (e) {
      mp.console.logError(`getVehicleDoorCount: ${String(e)}`, true, true);
    }
  }
  return count || 4;
}
function getVehicleOpenDoorsCount(vehicle, totalDoors) {
  if (!vehicle || !mp.vehicles.exists(vehicle)) {
    return 0;
  }
  let openDoors = 0;
  for (let i = -1; i < Math.min(totalDoors, 8); i++) {
    if (vehicle.getDoorAngleRatio(i) > 0) {
      openDoors++;
    }
  }
  return openDoors;
}
function subscribeToEvents() {
  mp.events.add("Client_CreateSpatial", createSound);
  mp.events.add("Client_CreateSpatialPreset", createSoundWithPreset);
  mp.events.add("Client_RemoveSpatial", removeSound);
  mp.events.add("Client_RemoveAllSpatial", removeAllSounds);
  mp.events.add("Client_UpdateSpatialPosition", updateSoundPosition);
  mp.events.add("Client_SetSpatialVolume", setSoundVolume);
  mp.events.add("Client_ToggleSpatial", toggleSound);
  mp.events.add("entityStreamOut", entity => {
    if (entity.type === "vehicle" && entity.spatialSoundId) {
      removeSound(entity.spatialSoundId);
    }
  });
}
mp.events.add("playerReady", () => {
  spatialSoundBrowser = mp.browsers.new("package://spacialSound/index.html");
  registerDebugBinds();
  subscribeToEvents();
  if (!updateInterval) {
    updateInterval = setInterval(updateListener, 200);
  }
});
global.spatialSound = {
  createSound,
  createSoundWithPreset,
  createVehicleSound,
  removeSound,
  removeAllSounds,
  updateSoundPosition,
  setSoundVolume,
  toggleSound
};

// ==================== DEBUG ====================
function showSoundsInfo() {
  if (!soundsData.size) {
    return mp.gui.chat.push("[Spatial] No active sounds");
  }
  const playerPos = player.position;
  mp.gui.chat.push(`[Spatial] Active sounds: ${soundsData.size} (vehicles: ${vehicleSounds.size})`);
  soundsData.forEach((data, id) => {
    const dist = mp.game.system.vdist(data.position.x, data.position.y, data.position.z, playerPos.x, playerPos.y, playerPos.z).toFixed(1);
    const isVehicle = vehicleSounds.has(id) ? " [Vehicle]" : "";
    mp.gui.chat.push(`  - ${id}: ${dist}m${isVehicle}`);
  });
}
function debugCreatePresetSound(preset) {
  const pos = player.position;
  const testUrl = "package://spacialSound/test.mp3";
  //const testUrl = 'https://cdn5.drivemusic.club/dl/online/wihoBl4cxg_645kLNB3oKg/1767650922/download_music/2023/06/peggy-gou-it-goes-like-nanana-edit.mp3';

  const soundId = createSoundWithPreset(testUrl, {
    x: pos.x,
    y: pos.y,
    z: pos.z
  }, preset);
  mp.objects.new(mp.game.joaat("prop_speaker_06"), new mp.Vector3(pos.x, pos.y, pos.z), {
    alpha: 255,
    dimension: player.dimension
  });
  const presetInfo = SOUND_PRESETS[preset];
  mp.gui.chat.push(`[Spatial] Created ${preset}: ${soundId}`);
  mp.gui.chat.push(`  Loud: ${presetInfo.loudDistance}m | Max: ${presetInfo.maxDistance}m`);
}
let debugVehicle = null;
function debugCreateVehicleSound() {
  if (!mp.players.local.vehicle) {
    return mp.gui.chat.push("[Spatial] You must be in a vehicle!");
  }
  debugVehicle = mp.players.local.vehicle;
  const testUrl = "package://spacialSound/test.mp3";
  const soundId = createVehicleSound(testUrl, debugVehicle, "VEHICLE");
  const doorCount = getVehicleDoorCount(debugVehicle);
  mp.gui.chat.push(`[Spatial] Created vehicle sound: ${soundId}`);
  mp.gui.chat.push(`  Doors: ${doorCount} | Open/close to change volume!`);
}
function debugOpenDoor(index) {
  if (!mp.vehicles.exists(debugVehicle)) {
    return mp.gui.chat.push("[Spatial] Vehicle not found!");
  }
  debugVehicle.setDoorOpen(index, false, true);
}
function registerDebugBinds() {
  mp.keys.bind(103, true, () => debugCreatePresetSound("SHORT")); // Numpad 7
  mp.keys.bind(104, true, () => debugCreatePresetSound("MEDIUM")); // Numpad 8
  mp.keys.bind(105, true, () => debugCreatePresetSound("LONG")); // Numpad 9
  mp.keys.bind(102, true, () => debugCreateVehicleSound()); // Numpad 6
  mp.keys.bind(46, true, () => {
    // DELETE
    removeAllSounds();
    mp.gui.chat.push("[Spatial] All sounds removed");
  });
  mp.keys.bind(73, true, () => showSoundsInfo()); // I

  mp.keys.bind(48, true, () => debugOpenDoor(0));
  mp.keys.bind(49, true, () => debugOpenDoor(1));
  mp.keys.bind(50, true, () => debugOpenDoor(2));
  mp.keys.bind(51, true, () => debugOpenDoor(3));
  mp.keys.bind(52, true, () => debugOpenDoor(4));
  mp.keys.bind(53, true, () => debugOpenDoor(5));
  mp.gui.chat.push("=========== Spatial Sound ==============");
  mp.gui.chat.push("  Numpad 6 - Vehicle sound (door test)");
  mp.gui.chat.push("  Numpad 7 - SHORT sound (5/50m)");
  mp.gui.chat.push("  Numpad 8 - MEDIUM sound (50/70m)");
  mp.gui.chat.push("  Numpad 9 - LONG sound (100/120m)");
  mp.gui.chat.push("  DELETE  - Remove all sounds");
  mp.gui.chat.push("  I       - Show info");
  mp.gui.chat.push("  0-5     - Open vehicle doors");
  mp.gui.chat.push("========================================");
}