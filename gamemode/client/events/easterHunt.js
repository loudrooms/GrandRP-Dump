global.easterHuntActive = false;
let easterHuntDimension = 0;
let easterHuntPlayers = [];
let easterHuntObjects = [];
let speedBoostPtfxHandle = null;
let speedBoostActive = false;
let speedBoostTimeout = null;
const ABILITY_TYPES = {
  FREEZE: 0,
  TELEPORT: 1,
  SPEED_BOOST: 2
};
const ABILITY_KEYS = {
  [ABILITY_TYPES.FREEZE]: 69,
  [ABILITY_TYPES.TELEPORT]: 70,
  [ABILITY_TYPES.SPEED_BOOST]: 71
};
const ABILITY_COOLDOWN = {
  [ABILITY_TYPES.FREEZE]: 7,
  [ABILITY_TYPES.TELEPORT]: 15,
  [ABILITY_TYPES.SPEED_BOOST]: 15
};
function loadPtfxAsset(_0x24085a) {
  return new Promise(_0x4fb049 => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x24085a)) {
      return _0x4fb049(true);
    }
    mp.game.streaming.requestNamedPtfxAsset(_0x24085a);
    let _0x3f79aa = 0;
    const _0x1b8313 = setInterval(() => {
      if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x24085a) || _0x3f79aa > 50) {
        clearInterval(_0x1b8313);
        _0x4fb049(mp.game.streaming.hasNamedPtfxAssetLoaded(_0x24085a));
      }
      _0x3f79aa++;
    }, 100);
  });
}
const EGGS_POSITIONS = [new mp.Vector3(664.336, 4886.695, 413.528), new mp.Vector3(655.412, 4863.071, 413.528), new mp.Vector3(643.754, 4860.345, 413.528), new mp.Vector3(672.39, 4848.457, 413.521), new mp.Vector3(676.365, 4831.62, 413.528), new mp.Vector3(658.935, 4831.49, 413.528), new mp.Vector3(709.637, 4841.708, 413.528), new mp.Vector3(732.01, 4861.649, 413.519), new mp.Vector3(719.713, 4904.372, 413.521), new mp.Vector3(686.472, 4924.544, 413.528), new mp.Vector3(685.181, 4897.207, 413.51), new mp.Vector3(650.827, 4914.092, 413.528), new mp.Vector3(664.622, 4890.662, 413.526), new mp.Vector3(687.437, 4869.872, 413.526), new mp.Vector3(665.266, 4879.563, 413.528), new mp.Vector3(659.075, 4879.063, 413.528), new mp.Vector3(674.578, 4851.983, 413.528), new mp.Vector3(667.136, 4837.041, 413.515), new mp.Vector3(650.936, 4844.509, 413.522), new mp.Vector3(636.471, 4887.98, 413.528), new mp.Vector3(648.424, 4903.17, 413.512), new mp.Vector3(662.672, 4869.684, 413.524), new mp.Vector3(721.807, 4859.991, 413.515), new mp.Vector3(688.48, 4824.915, 413.497), new mp.Vector3(682.05, 4823.677, 413.526), new mp.Vector3(694.824, 4881.56, 413.497), new mp.Vector3(646.893, 4919.205, 413.52), new mp.Vector3(628.376, 4885.695, 413.51), new mp.Vector3(693.224, 4911.108, 413.502), new mp.Vector3(643.149, 4865.288, 413.512)];
function showHuntHud() {
  updateGameHud({
    eventTimer: 300,
    foundEggs: 0,
    freezeTime: 7,
    teleportTime: 15,
    boostTime: 15
  });
  main_browser.execute("APPS.state.easterHud2026.show = true;");
}
function hideHuntHud() {
  main_browser.execute("APPS.state.easterHud2026.show = false;");
  ChangeHudState(true);
  mp.events.call("Enablechat");
  mp.game.ui.displayRadar(true);
  mp.gui.cursor.show(false, false);
}
let easterHuntCountdownInterval;
function startCountdown() {
  let _0x4299f7 = 10;
  easterHuntCountdownInterval = setInterval(() => {
    if (_0x4299f7 > 0) {
      _0x4299f7--;
      main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x4299f7) + ";");
      if (_0x4299f7 > 0) {
        PlayAudioSound("5_Second_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
      } else if (_0x4299f7 === 0) {
        PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
        if (easterHuntCountdownInterval !== null) {
          clearInterval(easterHuntCountdownInterval);
          easterHuntCountdownInterval = null;
        }
        main_browser.execute("\n                    APPS.state.hud.event_coutdown = 0;\n                ");
        mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
        ChangeHudState(false);
        mp.game.ui.displayRadar(false);
        showHuntHud();
        mp.players.local.freezePosition(false);
      }
      if (_0x4299f7 === 1) {
        playLocalSound("easterHunt_main", "easter2026/main.mp3", 0.01);
        disablePlayerHandle = false;
      }
    }
  }, 1000);
}
function playBoxAnim(_0x562aad) {
  if (mp.players.exists(_0x562aad) && _0x562aad.handle) {
    global.play_animation2(_0x562aad, "anim@heists@box_carry@", "idle", 8, -8, -1, 49, 0, false, false, false);
  }
}
function applyPlayerAnim(_0x2e5cdd) {
  if (!mp.players.exists(_0x2e5cdd) || !_0x2e5cdd.handle) {
    return;
  }
  const _0x55edaa = mp.objects.new(mp.game.joaat("grand_easter_korzina_prop"), _0x2e5cdd.position, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: easterHuntDimension
  });
  _0x55edaa.player = _0x2e5cdd;
  _0x55edaa.notifyStreaming = true;
  _0x2e5cdd.atEasterHuntObject = _0x55edaa;
  easterHuntObjects.push(_0x55edaa);
  playBoxAnim(_0x2e5cdd);
}
function applyPlayersAnims() {
  if (easterHuntActive) {
    easterHuntPlayers.forEach(applyPlayerAnim);
  }
}
function clearPlayersAnims() {
  easterHuntObjects.forEach(_0x3c567a => {
    if (mp.objects.exists(_0x3c567a)) {
      if (mp.players.exists(_0x3c567a.player)) {
        delete _0x3c567a.player.atEasterHuntObject;
      }
      _0x3c567a.destroy();
    }
  });
  easterHuntObjects = [];
}
async function playFreezeEffect(_0x12d02b) {
  try {
    if (!mp.players.exists(_0x12d02b)) {
      return;
    }
    const _0x32c95f = _0x12d02b.position;
    if (!(await loadPtfxAsset("scr_rcpaparazzo1"))) {
      return;
    }
    mp.game.graphics.setPtfxAssetNextCall("scr_rcpaparazzo1");
    mp.game.graphics.startParticleFxNonLoopedAtCoord("scr_mich4_firework_trailburst_spawn", _0x32c95f.x, _0x32c95f.y, _0x32c95f.z, 0, 0, 0, 2, false, false, false);
  } catch (_0x359d1b) {
    mp.console.logInfo(String(_0x359d1b));
  }
}
function applyFreezeToPlayer(_0x2b20d0) {
  if (mp.players.exists(_0x2b20d0)) {
    global.play_animation2(_0x2b20d0, "kuromipang@gracecurte10", "grace", 8, -8, -1, 1, 0, false, false, false);
  }
}
async function playTeleportFromEffect(_0x124977, _0x404625, _0x213b75) {
  try {
    if (!(await loadPtfxAsset("core"))) {
      return;
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    mp.game.graphics.startParticleFxNonLoopedAtCoord("ent_sht_electrical_box", _0x124977, _0x404625, _0x213b75, 0, 0, 0, 2, false, false, false);
  } catch (_0xcc56aa) {
    mp.console.logInfo(String(_0xcc56aa));
  }
}
async function playTeleportToEffect(_0xb774d0, _0x18977e, _0x1c1f4d) {
  try {
    if (!(await loadPtfxAsset("scr_rcbarry2"))) {
      return;
    }
    mp.game.graphics.setPtfxAssetNextCall("scr_rcbarry2");
    mp.game.graphics.startParticleFxNonLoopedAtCoord("scr_exp_clown", _0xb774d0, _0x18977e, _0x1c1f4d, 0, 0, 0, 1.5, false, false, false);
  } catch (_0x3bec78) {
    mp.console.logInfo(String(_0x3bec78));
  }
}
async function startSpeedBoostVfx(_0x4b9445) {
  try {
    if (!mp.players.exists(_0x4b9445)) {
      return;
    }
    if (!(await loadPtfxAsset("des_shipwreck"))) {
      return;
    }
    const _0x4231c0 = _0x4b9445.handle === mp.players.local.handle;
    const _0x1d3189 = setInterval(() => {
      if (mp.players.exists(_0x4b9445)) {
        mp.game.graphics.setPtfxAssetNextCall("des_shipwreck");
        mp.game.graphics.startParticleFxNonLoopedOnEntity("ent_ray_shipwreck_sparks", _0x4b9445.handle, -0.2, -0.05, 0.4, 35, -65, -70, 1.5, true, true, true);
      } else {
        clearInterval(_0x1d3189);
      }
    }, 150);
    if (_0x4231c0) {
      speedBoostActive = true;
      speedBoostPtfxHandle = _0x1d3189;
    } else {
      _0x4b9445._easterSpeedPtfx = _0x1d3189;
    }
  } catch (_0x5a6de5) {
    mp.console.logInfo(String(_0x5a6de5));
  }
}
function stopSpeedBoostVfx(_0x3dfa67) {
  try {
    if (!mp.players.exists(_0x3dfa67)) {
      return;
    }
    if (_0x3dfa67.handle === mp.players.local.handle) {
      speedBoostActive = false;
      if (speedBoostPtfxHandle !== null) {
        clearInterval(speedBoostPtfxHandle);
        speedBoostPtfxHandle = null;
      }
    } else if (_0x3dfa67._easterSpeedPtfx !== undefined && _0x3dfa67._easterSpeedPtfx !== null) {
      clearInterval(_0x3dfa67._easterSpeedPtfx);
      _0x3dfa67._easterSpeedPtfx = null;
    }
  } catch (_0xd34596) {
    mp.console.logInfo(String(_0xd34596));
  }
}
global.joinEasterHuntLobby = () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EasterHunt_JoinLobby");
  }
};
mp.events.add("Client_EasterHunt_JoinLobby", joinEasterHuntLobby);
global.leaveEasterHuntLobby = () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    disablePlayerHandle = false;
    mp.events.callRemote("Server_EasterHunt_LeaveLobby");
  }
};
mp.events.add("Client_EasterHunt_LeaveLobby", leaveEasterHuntLobby);
mp.events.add("Client_EasterHunt_LobbyUpdate", (_0x366f38, _0x35253c) => {
  main_browser.execute("APPS.state.easterEvent2026.participants = " + _0x366f38 + ";");
});
mp.events.add("Client_EasterHunt_GameStart", (_0x3cfc72, _0x79f6e3) => {
  mp.game.streaming.requestIpl("grand_labyrinth");
  mp.game.streaming.requestIpl("grand_labyrinth_additional");
  CloseBrowsers();
  easterHuntActive = true;
  easterHuntDimension = _0x3cfc72;
  easterHuntPlayers = _0x79f6e3.map(_0x51ae5d => mp.players.atRemoteId(_0x51ae5d));
  disablePlayerHandle = true;
  mp.events.call("Disablechat");
  mp.players.local.freezePosition(true);
  createDefaultEggs();
  startCountdown();
  setTimeout(() => {
    applyPlayersAnims();
  }, 1000);
});
mp.events.add("entityStreamIn", _0x4b85cb => {
  try {
    if (!easterHuntActive) {
      return;
    }
    if (_0x4b85cb.type === "player" && easterHuntPlayers.includes(_0x4b85cb)) {
      playBoxAnim(_0x4b85cb);
      if (_0x4b85cb.atEasterHuntObject) {
        return;
      }
      applyPlayerAnim(_0x4b85cb);
    } else if (_0x4b85cb.type === "object" && _0x4b85cb.player !== undefined && mp.players.exists(_0x4b85cb.player)) {
      _0x4b85cb.attachTo(_0x4b85cb.player.handle, 90, 0, -0.15, -0.19, 40, -5, 0, true, false, false, false, 0, true);
    }
  } catch (_0x4420a3) {
    mp.console.logInfo(String(_0x4420a3));
  }
});
mp.events.add("entityStreamOut", _0x4e0ee7 => {
  try {
    if (!easterHuntActive) {
      return;
    }
    if (_0x4e0ee7.type === "player" && easterHuntPlayers.includes(_0x4e0ee7) && _0x4e0ee7.atEasterHuntObject && mp.objects.exists(_0x4e0ee7.atEasterHuntObject)) {
      easterHuntObjects = easterHuntObjects.filter(_0x284890 => _0x284890 !== _0x4e0ee7.atEasterHuntObject);
      _0x4e0ee7.atEasterHuntObject.destroy();
      delete _0x4e0ee7.atEasterHuntObject;
    }
  } catch (_0x25ecf6) {
    mp.console.logInfo(String(_0x25ecf6));
  }
});
mp.events.add("playerQuit", _0x4671dc => {
  if (easterHuntActive && mp.players.exists(_0x4671dc) && _0x4671dc.atEasterHuntObject && mp.objects.exists(_0x4671dc.atEasterHuntObject)) {
    easterHuntObjects = easterHuntObjects.filter(_0x118cb9 => _0x118cb9 !== _0x4671dc.atEasterHuntObject);
    _0x4671dc.atEasterHuntObject.destroy();
    delete _0x4671dc.atEasterHuntObject;
  }
});
mp.events.add("Client_EasterHunt_GameResults", (_0xc94efa, _0x4b2534) => {
  try {
    mp.events.call("Client_EasterHunt_GameEnd", false, _0x4b2534);
    main_browser.execute("\n            if (this.AppComponents && this.AppComponents.easterHud) {\n                this.AppComponents.easterHud.gameResults = " + JSON.stringify(_0xc94efa) + ";\n                this.AppComponents.easterHud.isGameFinished = true;\n            }\n        ");
    mp.gui.cursor.show(true, true);
    playLocalSound("easterHunt_end_game", "easter2026/end_game.mp3", 0.05);
  } catch (_0x1055a6) {}
});
mp.events.add("Client_EasterHunt_CloseGameHud", hideHuntHud);
mp.events.add("Client_EasterHunt_UseAbility", _0x27584d => {
  mp.events.callRemote("Server_EasterHunt_UseAbility", _0x27584d);
});
mp.events.add("Client_EasterHunt_Unfreeze", () => {
  mp.players.local.freezePosition(false);
  mp.players.local.clearTasks();
  global.play_animation2(mp.players.local, "anim@heists@box_carry@", "idle", 8, -8, -1, 49, 0, false, false, false);
});
mp.events.add("Client_EasterHunt_SpeedBoost", _0x358125 => {
  if (speedBoostTimeout !== null) {
    clearTimeout(speedBoostTimeout);
    speedBoostTimeout = null;
  }
  mp.game.player.setRunSprintMultiplierFor(1.49);
  speedBoostTimeout = setTimeout(() => {
    mp.game.player.setRunSprintMultiplierFor(1);
    speedBoostTimeout = null;
  }, _0x358125);
});
mp.events.add("Client_EasterHunt_EggCollected", () => {
  playLocalSound("easterHunt_egg_collect", "easter2026/egg_collect.mp3", 0.25);
});
mp.events.add("Client_EasterHunt_AbilityCooldown", _0x8093cf => {
  const _0x27bb62 = _0x8093cf === ABILITY_TYPES.FREEZE ? "freezeTime" : _0x8093cf === ABILITY_TYPES.TELEPORT ? "teleportTime" : "boostTime";
  let _0xcfff2f = ABILITY_COOLDOWN[_0x8093cf];
  updateGameHud({
    [_0x27bb62]: _0xcfff2f
  });
});
mp.events.add("Client_EasterHunt_AbilityUsed", (_0x35931a, _0x18239e, _0x228090, ..._0x54cd62) => {
  try {
    if (!easterHuntActive) {
      return;
    }
    const _0x5a6c72 = mp.players.atRemoteId(_0x18239e);
    if (_0x35931a === ABILITY_TYPES.FREEZE) {
      const _0x2ed5fa = mp.players.atRemoteId(_0x228090);
      if (!_0x2ed5fa || !mp.players.exists(_0x2ed5fa)) {
        return;
      }
      if (_0x5a6c72 === localplayer) {
        playLocalSound("easterHunt_freeze", "easter2026/freeze.mp3", 0.2);
      }
      if (_0x2ed5fa === localplayer) {
        playLocalSound("easterHunt_freeze_pov", "easter2026/freeze_pov.mp3", 0.2);
      }
      playFreezeEffect(_0x2ed5fa);
      applyFreezeToPlayer(_0x2ed5fa);
      if (_0x2ed5fa.handle === mp.players.local.handle) {
        mp.players.local.freezePosition(true);
      }
    } else if (_0x35931a === ABILITY_TYPES.TELEPORT) {
      const [_0x36b581, _0x391942, _0x42ced7, _0x3bf287, _0xe6a849, _0x276931] = _0x54cd62;
      playTeleportFromEffect(_0x36b581, _0x391942, _0x42ced7);
      playTeleportToEffect(_0x3bf287, _0xe6a849, _0x276931);
      if (_0x5a6c72 === localplayer) {
        playLocalSound("easterHunt_teleport", "easter2026/teleport.mp3", 0.2);
      }
      if (_0x5a6c72 && mp.players.exists(_0x5a6c72)) {
        if (_0x5a6c72 === localplayer) {
          mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 1500, true);
        }
        playBoxAnim(_0x5a6c72);
      }
    } else if (_0x35931a === ABILITY_TYPES.SPEED_BOOST && _0x5a6c72 && mp.players.exists(_0x5a6c72)) {
      startSpeedBoostVfx(_0x5a6c72);
      if (_0x5a6c72 === localplayer) {
        playLocalSound("easterHunt_speed_boost", "easter2026/speed_boost.mp3", 0.05);
      }
      setTimeout(() => {
        if (mp.players.exists(_0x5a6c72)) {
          stopSpeedBoostVfx(_0x5a6c72);
          if (_0x5a6c72 === localplayer) {
            stopLocalSound("easterHunt_speed_boost");
          }
        }
      }, 7000);
    }
  } catch (_0x45656f) {
    mp.console.logInfo(String(_0x45656f));
  }
});
mp.events.add("Client_EasterHunt_GameEnd", (_0x4a9710 = true, _0x5c8ae0) => {
  try {
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd");
    }
    if (easterHuntCountdownInterval !== null) {
      if (global.test_mode) {
        mp.console.logInfo("Client_EasterHunt_GameEnd 1");
      }
      clearInterval(easterHuntCountdownInterval);
      easterHuntCountdownInterval = null;
      if (global.test_mode) {
        mp.console.logInfo("Client_EasterHunt_GameEnd 2");
      }
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
    }
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 3");
    }
    destroyAllEggs();
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 4");
    }
    easterHuntActive = false;
    easterHuntDimension = 0;
    clearPlayersAnims();
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 5");
    }
    if (speedBoostTimeout !== null) {
      if (global.test_mode) {
        mp.console.logInfo("Client_EasterHunt_GameEnd 6");
      }
      clearTimeout(speedBoostTimeout);
      speedBoostTimeout = null;
    }
    if (speedBoostPtfxHandle !== null) {
      if (global.test_mode) {
        mp.console.logInfo("Client_EasterHunt_GameEnd 7");
      }
      clearInterval(speedBoostPtfxHandle);
      speedBoostPtfxHandle = null;
    }
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 8");
    }
    speedBoostActive = false;
    _0x5c8ae0 = parseInt(_0x5c8ae0);
    if (!isNaN(_0x5c8ae0) && _0x5c8ae0 >= 0 && _0x5c8ae0 <= 2) {
      mp.events.call("SetPlayerStaminaLevel", _0x5c8ae0, -1);
    } else {
      mp.game.player.setRunSprintMultiplierFor(1);
    }
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 9");
    }
    mp.players.local.freezePosition(false);
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 10");
    }
    stopLocalSound("easterHunt_main");
    stopLocalSound("easterHunt_speed_boost");
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 11");
    }
    if (_0x4a9710) {
      if (global.test_mode) {
        mp.console.logInfo("Client_EasterHunt_GameEnd 12");
      }
      hideHuntHud();
    }
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 13");
    }
    mp.game.streaming.removeIpl("grand_labyrinth");
    mp.game.streaming.removeIpl("grand_labyrinth_additional");
    if (global.test_mode) {
      mp.console.logInfo("Client_EasterHunt_GameEnd 14");
    }
  } catch (_0x1b01cc) {
    mp.console.logInfo(String(_0x1b01cc));
  }
});
const hudWhiteList = ["freezeTime", "teleportTime", "boostTime", "eventTimer", "foundEggs"];
function updateGameHud(_0x2df91f) {
  for (const _0x1da7f2 in _0x2df91f) {
    if (hudWhiteList.includes(_0x1da7f2)) {
      main_browser.execute("APPS.state.easterHud2026." + _0x1da7f2 + " = " + _0x2df91f[_0x1da7f2] + ";");
    }
  }
}
mp.events.add("Client_EasterHunt_GameHudUpdate", updateGameHud);
const eggs = new Map();
const EGG_FLOAT_AMPLITUDE = 0.12;
const EGG_FLOAT_SPEED = 2.5;
let eggFloatInterval = null;
function startEggFloating() {
  if (eggFloatInterval === null) {
    eggFloatInterval = setInterval(() => {
      try {
        const _0x232d01 = Date.now() / 1000;
        eggs.forEach(_0x15922e => {
          if (!mp.objects.exists(_0x15922e.object) || _0x15922e.dropping) {
            return;
          }
          const _0x1ec3f7 = Math.sin(_0x232d01 * 2.5 + _0x15922e.phaseOffset) * 0.12;
          _0x15922e.object.setCoordsNoOffset(_0x15922e.basePos.x, _0x15922e.basePos.y, _0x15922e.basePos.z + _0x1ec3f7, false, false, false);
        });
      } catch (_0x3d78f9) {
        mp.console.logInfo(String(_0x3d78f9));
      }
    }, 16);
  }
}
function stopEggFloating() {
  if (eggFloatInterval !== null) {
    clearInterval(eggFloatInterval);
    eggFloatInterval = null;
  }
}
function createDefaultEggs() {
  EGGS_POSITIONS.forEach((_0x178729, _0x1e265f) => {
    createEgg(_0x1e265f + 1, _0x178729);
  });
  setTimeout(() => {
    Array.from(eggs.values()).forEach(_0x137530 => {
      if (mp.objects.exists(_0x137530.object)) {
        _0x137530.object.setCollision(false, false);
      }
    });
  }, 200);
  startEggFloating();
}
function getEggObjectName() {
  return "grandegg_" + getRandomInt(1, 4);
}
function createEgg(_0x2fc032, _0x59d694) {
  const _0x10a2e3 = mp.objects.new(mp.game.joaat(getEggObjectName()), _0x59d694, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: easterHuntDimension
  });
  const _0x329aac = mp.colshapes.newSphere(_0x59d694.x, _0x59d694.y, _0x59d694.z, 1, easterHuntDimension);
  _0x329aac.eggId = _0x2fc032;
  _0x329aac.isEasterHuntEgg = true;
  eggs.set(_0x2fc032, {
    object: _0x10a2e3,
    colshape: _0x329aac,
    basePos: {
      x: _0x59d694.x,
      y: _0x59d694.y,
      z: _0x59d694.z
    },
    phaseOffset: Math.random() * Math.PI * 2
  });
}
mp.events.add("Client_EasterHunt_EggCreate", createEgg);
const EGG_DROP_DURATION = 800;
const EGG_DROP_ARC_HEIGHT = 1.5;
function createEggDrop(_0x920b4f, _0x29aaa1, _0x2d7909, _0x2c8ab7, _0x1f952a, _0x52f470, _0x5dc965) {
  const _0x4ac771 = mp.objects.new(mp.game.joaat(getEggObjectName()), new mp.Vector3(_0x29aaa1, _0x2d7909, _0x2c8ab7), {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: easterHuntDimension
  });
  _0x4ac771.setCollision(false, false);
  const _0x179e20 = Date.now();
  const _0x14b5ac = setInterval(() => {
    try {
      if (!mp.objects.exists(_0x4ac771)) {
        clearInterval(_0x14b5ac);
        return;
      }
      const _0x44e598 = Date.now() - _0x179e20;
      const _0xee0cd3 = Math.min(_0x44e598 / 800, 1);
      const _0x2fd3dd = _0x29aaa1 + (_0x1f952a - _0x29aaa1) * _0xee0cd3;
      const _0x2f2774 = _0x2d7909 + (_0x52f470 - _0x2d7909) * _0xee0cd3;
      const _0x4792df = _0x2c8ab7 + (_0x5dc965 - _0x2c8ab7) * _0xee0cd3 + _0xee0cd3 * 6 * (1 - _0xee0cd3);
      _0x4ac771.setCoordsNoOffset(_0x2fd3dd, _0x2f2774, _0x4792df, false, false, false);
      if (_0xee0cd3 >= 1) {
        clearInterval(_0x14b5ac);
        const _0x4499e8 = mp.colshapes.newSphere(_0x1f952a, _0x52f470, _0x5dc965, 1, easterHuntDimension);
        _0x4499e8.eggId = _0x920b4f;
        _0x4499e8.isEasterHuntEgg = true;
        _0x4ac771.setCollision(false, false);
        eggs.set(_0x920b4f, {
          object: _0x4ac771,
          colshape: _0x4499e8,
          basePos: {
            x: _0x1f952a,
            y: _0x52f470,
            z: _0x5dc965
          },
          phaseOffset: Math.random() * Math.PI * 2
        });
      }
    } catch (_0x374e80) {
      mp.console.logInfo(String(_0x374e80));
    }
  }, 16);
}
function destroyEgg(_0x480637) {
  const _0x21f9ac = eggs.get(_0x480637);
  if (_0x21f9ac) {
    if (mp.objects.exists(_0x21f9ac.object)) {
      _0x21f9ac.object.destroy();
    }
    if (mp.colshapes.exists(_0x21f9ac.colshape)) {
      _0x21f9ac.colshape.destroy();
    }
    eggs.delete(_0x480637);
  }
}
function destroyAllEggs() {
  stopEggFloating();
  eggs.forEach((_0x12961a, _0x5b82e6) => {
    destroyEgg(_0x5b82e6);
  });
}
mp.events.add("Client_EasterHunt_EggDrop", createEggDrop);
mp.events.add("Client_EasterHunt_EggDestroy", destroyEgg);
mp.events.add("playerEnterColshape", _0x1392b1 => {
  if (easterHuntActive && _0x1392b1.isEasterHuntEgg) {
    mp.events.callRemote("Server_EasterHunt_EggInteract", _0x1392b1.eggId);
  }
});
const EASTER_HUNT_DISABLED_CONTROLS = [24, 25, 47, 58, 140, 141, 142, 143, 257, 263, 264, 45, 37, 91, 23, 75, 44, 22];
mp.events.add("render", () => {
  if (easterHuntActive) {
    for (let _0x2db3a3 = 0; _0x2db3a3 < EASTER_HUNT_DISABLED_CONTROLS.length; _0x2db3a3++) {
      mp.game.controls.disableControlAction(2, EASTER_HUNT_DISABLED_CONTROLS[_0x2db3a3], true);
    }
  }
});
mp.game.streaming.removeIpl("grand_labyrinth");
mp.game.streaming.removeIpl("grand_labyrinth_additional");