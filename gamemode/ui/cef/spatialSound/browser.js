const soundSources = new Map();
let listenerPosition = null;

/*
    С каких сторон идёт звук в гташке
    forwardX - 1 сзади, -1 спереди
    forwardY - 1 вверх, -1 вниз
    forwardZ - 1 направо, -1 налево
    
    Howler.orientation(forwardX, forwardY, forwardZ, 0, 0, 1);
*/

function initHowler() {
  if (typeof Howler === "undefined") {
    return console.error("[Spatial Sound] Howler.js not loaded");
  }
  Howler.volume(1);
  Howler.pos(0, 0, 0);
  Howler.orientation(0, 0, -1, 0, 0, 1);
  if (Howler.ctx?.state === "suspended") {
    Howler.ctx.resume();
  }
}
function createSound(id, soundUrl, position, options = {}) {
  if (soundSources.has(id)) {
    removeSound(id);
  }
  const sound = new Howl({
    src: [soundUrl],
    html5: false,
    loop: options.loop ?? false,
    volume: options.volume ?? 1,
    autoplay: options.autoplay ?? true,
    onload: () => {
      sound.pos(position.x, position.y, position.z);
      soundSources.set(id, {
        sound,
        gtaPosition: position,
        loudDistance: options.loudDistance ?? 10,
        maxDistance: options.maxDistance ?? 100,
        baseVolume: options.volume ?? 1
      });
      updateSoundVolumeByDistance(id);
      setPannerAttributes(id, {
        rolloffFactor: options.isVehicleSound ? 2 : 0.1
      });
    },
    onloaderror: (_, error) => console.error(`[Spatial Sound] Load error ${id}:`, error)
  });
}
function removeSound(id) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }
  source.sound.stop();
  source.sound.unload();
  soundSources.delete(id);
}
function removeAllSounds() {
  soundSources.forEach(source => {
    source.sound.stop();
    source.sound.unload();
  });
  soundSources.clear();
}
function updateSoundPosition(id, position) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }
  source.gtaPosition = position;
  source.sound.pos(position.x, position.y, position.z);
  updateSoundVolumeByDistance(id);
}
function setSoundVolume(id, volume) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }
  source.baseVolume = volume;
  updateSoundVolumeByDistance(id);
}
function updateVehicleDoorRolloff(id, openDoors) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }

  // Rolloff: 2.0 (закрыто, тихо) → 0.1 (открыто, громко)
  const rolloff = Math.max(0.1, 2 - openDoors * 0.5);
  setPannerAttributes(id, {
    rolloffFactor: rolloff
  });
}
function calculateDistanceVolume(distance, loudDistance, maxDistance, volume) {
  if (distance <= loudDistance) {
    return volume;
  }
  if (distance >= maxDistance) {
    return 0;
  }
  const fadeProgress = (distance - loudDistance) / (maxDistance - loudDistance);
  const volumeMultiplier = 1 - fadeProgress * fadeProgress;
  return volume * volumeMultiplier;
}
function updateSoundVolumeByDistance(id) {
  const source = soundSources.get(id);
  if (!source || !listenerPosition) {
    return;
  }
  const dx = source.gtaPosition.x - listenerPosition.x;
  const dy = source.gtaPosition.y - listenerPosition.y;
  const dz = source.gtaPosition.z - listenerPosition.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const volume = calculateDistanceVolume(distance, source.loudDistance, source.maxDistance, source.baseVolume);
  source.sound.volume(volume);
}
function updateAllSoundsVolume() {
  soundSources.forEach((_, id) => updateSoundVolumeByDistance(id));
}
function setPannerAttributes(id, properties) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }
  source.sound.pannerAttr({
    ...source.sound.pannerAttr(),
    ...properties
  });
}
function toggleSound(id) {
  const source = soundSources.get(id);
  if (!source) {
    return;
  }
  if (source.sound.playing()) {
    source.sound.pause();
  } else {
    source.sound.play();
  }
}
function updateListener(playerPos, heading) {
  if (!playerPos) {
    return;
  }
  listenerPosition = {
    x: playerPos.x,
    y: playerPos.y,
    z: playerPos.z
  };
  Howler.pos(playerPos.x, playerPos.y, playerPos.z);
  const rad = (heading ?? 0) * Math.PI / 180;
  const forwardX = -Math.sin(rad);
  const forwardY = Math.cos(rad);
  const forwardZ = 0;
  Howler.orientation(forwardX, forwardY, forwardZ, 0, 0, 1);
  updateAllSoundsVolume();
}
function batchUpdate(operations) {
  if (!Array.isArray(operations)) {
    return;
  }
  operations.forEach(op => {
    if (!op || !op.type) {
      return;
    }
    switch (op.type) {
      case "updatePosition":
        updateSoundPosition(op.id, op.position);
        break;
      case "updateDoorRolloff":
        updateVehicleDoorRolloff(op.id, op.openDoors);
        break;
      case "updateVolume":
        setSoundVolume(op.id, op.volume);
        break;
      default:
        console.warn(`[Spatial Sound] Unknown operation type: ${op.type}`);
    }
  });
}
window.addEventListener("load", () => {
  initHowler();
  const unlockAudio = () => {
    if (Howler.ctx?.state === "suspended") {
      Howler.ctx.resume();
    }
    document.removeEventListener("click", unlockAudio);
  };
  document.addEventListener("click", unlockAudio);
});