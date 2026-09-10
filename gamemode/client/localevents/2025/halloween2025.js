let raceInterval;
let raceBlip;
let raceShape;
let raceCheckpoint;
function cleanRaceEntities() {
  if (raceBlip) {
    raceBlip.destroy();
    raceBlip = undefined;
  }
  if (raceShape) {
    raceShape.destroy();
    raceShape = undefined;
  }
  if (raceCheckpoint) {
    raceCheckpoint.destroy();
    raceCheckpoint = undefined;
  }
}
global.halloweenDesignOpened2025 = false;
mp.events.add("Client_OpenHalloweenDesign2025", (_0x5b899b, _0x3238dc, _0x2ccb8b, _0x52f574, _0x1eeb0c, _0x2cafec, _0xf2d419, _0x125027, _0x5eb8a7, _0x2fbfef, _0x25dd10, _0x1d8d09) => {
  if (GlobalCheck() == 1 || halloweenDesignOpened2025) {
    return;
  }
  let _0x2dc70f = 0;
  if (localplayer.model != 1885233650) {
    _0x2dc70f = 1;
  }
  main_browser.execute("APPS.state.halloweenEvent2025.donate = " + _0x5b899b + ";\n        APPS.state.halloweenEvent2025.gender = " + _0x2dc70f + ";\n        APPS.state.halloweenEvent2025.candy = " + _0x3238dc + ";\n        APPS.state.halloweenEvent2025.dayonline = " + _0x2ccb8b + ";\n        APPS.state.halloweenEvent2025.personalKarma = " + _0x2cafec + ";\n        APPS.state.halloweenEvent2025.broomRaceCompleted = " + _0xf2d419 + ";\n        APPS.state.halloweenEvent2025.giftedStoleCandies = " + _0x125027 + ";\n        APPS.state.halloweenEvent2025.blessedOrCursedGhost = " + _0x25dd10 + ";\n        APPS.state.halloweenEvent2025.curseBlessCompleted = " + _0x5eb8a7 + ";\n        APPS.state.halloweenEvent2025.stoleGiftedToHouse = " + _0x2fbfef + ";\n        APPS.state.halloweenEvent2025.serverTime = " + _0x1d8d09 + ";\n        APPS.state.halloweenEvent2025.globalKarma.light = " + _0x52f574 + ";\n        APPS.state.halloweenEvent2025.globalKarma.dark = " + _0x1eeb0c + ";\n        APPS.state.halloweenEvent2025.show = true;\n    ");
  halloweenDesignOpened2025 = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseHalloweenDesign2025", () => {
  closeHalloweenDesign2025();
});
global.closeHalloweenDesign2025 = function () {
  if (halloweenDesignOpened2025) {
    main_browser.execute("APPS.state.halloweenEvent2025.show = false;");
    halloweenDesignOpened2025 = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_RequestBuyHalloweenCandy2025", _0x16a36c => {
  if (halloweenDesignOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyHalloweenCandy2025", _0x16a36c);
    }
  }
});
mp.events.add("Client_UpdateCandiesAndGrandcoins", (_0x1ddc54, _0x2223d6, _0x4911fb = false) => {
  main_browser.execute("APPS.state.halloweenEvent2025.donate = " + _0x1ddc54 + ";\n        APPS.state.halloweenEvent2025.candy = " + _0x2223d6 + ";\n        this.AppComponents.halloweenEvent2025.closeModal();\n    ");
  if (_0x4911fb) {
    main_browser.execute("this.AppComponents.halloweenEvent2025.exchange.closeExchangeModal();");
  }
});
mp.events.add("Client_RequestExchangeResourcesHalloween2025", (_0xf89b5c, _0x114d8d) => {
  if (loggedin && !chatActive && halloweenDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestExchangeResourcesHalloween2025", _0xf89b5c, _0x114d8d);
    }
  }
});
mp.events.add("Client_RequestBuyItemFromHalloweenShop2025", (_0x13022f, _0x56efaf) => {
  if (loggedin && !chatActive && halloweenDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyItemFromHalloweenShop2025", _0x13022f, _0x56efaf);
    }
  }
});
mp.events.add("Client_CancelEventRace", () => {
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  cleanRaceEntities();
});
const RACE_POSITIONS = [{
  position: new mp.Vector3(-1960.778, 600.521, 119.815)
}, {
  position: new mp.Vector3(-1982.496, 448.317, 101.128)
}, {
  position: new mp.Vector3(-1959.636, 297.029, 88.055)
}, {
  position: new mp.Vector3(-1891.158, 164.813, 81.475)
}, {
  position: new mp.Vector3(-1697.062, -9.248, 64.036)
}, {
  position: new mp.Vector3(-1613.084, -129.089, 57.13)
}, {
  position: new mp.Vector3(-1542.515, -212.104, 54.647)
}, {
  position: new mp.Vector3(-1512.283, -271.042, 50.246)
}, {
  position: new mp.Vector3(-1555.717, -358.31, 46.341)
}, {
  position: new mp.Vector3(-1450.959, -464.419, 35.112)
}, {
  position: new mp.Vector3(-1395.476, -569.152, 30.248)
}, {
  position: new mp.Vector3(-1529.307, -686.498, 28.875)
}, {
  position: new mp.Vector3(-1427.124, -770.612, 23.189)
}, {
  position: new mp.Vector3(-1307.553, -890.905, 11.576)
}, {
  position: new mp.Vector3(-1258.071, -1048.469, 8.452)
}, {
  position: new mp.Vector3(-1215.551, -1187.374, 7.712)
}, {
  position: new mp.Vector3(-1131.269, -1331.706, 5.163)
}, {
  position: new mp.Vector3(-967.312, -1237.462, 5.336)
}, {
  position: new mp.Vector3(-788.884, -1135.295, 10.619)
}, {
  position: new mp.Vector3(-672.348, -1065.647, 16.15)
}, {
  position: new mp.Vector3(-615.463, -959.54, 21.414)
}, {
  position: new mp.Vector3(-528.12, -949.188, 23.473)
}, {
  position: new mp.Vector3(-481.325, -845.046, 30.436)
}, {
  position: new mp.Vector3(-300.433, -865.439, 31.707)
}, {
  position: new mp.Vector3(-175.277, -876.713, 29.341)
}, {
  position: new mp.Vector3(-125.549, -740.528, 34.557)
}, {
  position: new mp.Vector3(-63.788, -566.971, 38.393)
}, {
  position: new mp.Vector3(26.989, -300.393, 47.441)
}, {
  position: new mp.Vector3(67.428, -187.847, 54.868)
}, {
  position: new mp.Vector3(117.389, -55.703, 67.488)
}, {
  position: new mp.Vector3(194.717, 153.6, 103.716)
}, {
  position: new mp.Vector3(255.569, 322.869, 105.524)
}, {
  position: new mp.Vector3(248.661, 425.704, 119.647)
}, {
  position: new mp.Vector3(243.084, 487.067, 127.908)
}, {
  position: new mp.Vector3(274.579, 603.263, 153.382)
}, {
  position: new mp.Vector3(301.286, 732.232, 180.236)
}, {
  position: new mp.Vector3(295.763, 837.967, 192.512)
}, {
  position: new mp.Vector3(384.789, 881.527, 198.036)
}, {
  position: new mp.Vector3(470.442, 888.976, 198.094)
}, {
  position: new mp.Vector3(503.694, 979.823, 208.012)
}, {
  position: new mp.Vector3(520.95, 1097.739, 229.922)
}, {
  position: new mp.Vector3(420.34, 1152.066, 240.289)
}, {
  position: new mp.Vector3(439.371, 1298.175, 271.665)
}, {
  position: new mp.Vector3(572.311, 1393.496, 307.005)
}, {
  position: new mp.Vector3(684.929, 1355.796, 329.423)
}, {
  position: new mp.Vector3(805.663, 1365.375, 347.418)
}, {
  position: new mp.Vector3(851.991, 1288.779, 361.125)
}];
function setRaceCheckpoint(_0x36a4b9) {
  cleanRaceEntities();
  raceShape = mp.colshapes.newCircle(RACE_POSITIONS[_0x36a4b9].position.x, RACE_POSITIONS[_0x36a4b9].position.y, 8, mp.players.local.dimension);
  raceShape.bRaceShape = _0x36a4b9;
  raceBlip = mp.blips.new(1, RACE_POSITIONS[_0x36a4b9].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 5,
    dimension: mp.players.local.dimension
  });
  const _0x5f4980 = RACE_POSITIONS[_0x36a4b9 + 1] ? new mp.Vector3(RACE_POSITIONS[_0x36a4b9 + 1].position.x, RACE_POSITIONS[_0x36a4b9 + 1].position.y, RACE_POSITIONS[_0x36a4b9 + 1].position.z) : new mp.Vector3(0, 0, 0);
  raceCheckpoint = mp.checkpoints.new(RACE_POSITIONS[_0x36a4b9 + 1] ? 2 : 10, new mp.Vector3(RACE_POSITIONS[_0x36a4b9].position.x, RACE_POSITIONS[_0x36a4b9].position.y, RACE_POSITIONS[_0x36a4b9].position.z - 1), 10, {
    direction: _0x5f4980,
    color: [246, 225, 0, 255],
    visible: true,
    dimension: mp.players.local.dimension
  });
  raceBlip.setRoute(true);
}
const TIME_FOR_RACE = 300000;
function clearRaceInterval() {
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
}
mp.events.add("Client_ClearHaloweenRace2025", () => {
  clearRaceInterval();
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
mp.events.add("Client_StartHalloweenRace2025", () => {
  if (mp.players.local.vehicle) {
    mp.players.local.vehicle.freezePosition(true);
  }
  disableVehicleHandle = true;
  let _0x1504d8 = 5;
  main_browser.execute("APPS.state.hud.event_coutdown = " + _0x1504d8 + ";");
  let _0x4e05f5 = setInterval(function () {
    _0x1504d8--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + _0x1504d8 + ";");
    if (_0x1504d8 <= 0) {
      if (mp.players.local.vehicle) {
        mp.players.local.vehicle.freezePosition(false);
      }
      disableVehicleHandle = false;
      if (_0x4e05f5 != null) {
        clearInterval(_0x4e05f5);
      }
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      clearRaceInterval();
      let _0x23940d = 0;
      raceInterval = setInterval(() => {
        _0x23940d++;
        ShowDrugLabsDesign(language.Гонщик[curr_lang], 1, "", 0, "", 0, "", 0, "", 0, 300 - _0x23940d, 300000, language.Гонка[curr_lang]);
        if (_0x23940d == 300) {
          clearRaceInterval();
          main_browser.execute("APPS.state.hud.drug_lab_show = false;");
          mp.events.callRemote("Server_FailedHalloweenRace");
        }
      }, 1000);
    }
  }, 1000);
  cleanRaceEntities();
  setRaceCheckpoint(1);
});
mp.events.add("playerEnterColshape", _0x1193be => {
  if (_0x1193be.bRaceShape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (_0x1193be.bRaceShape + 1 >= RACE_POSITIONS.length) {
      cleanRaceEntities();
      clearRaceInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_FinishedHalloweenRace");
      return;
    }
    setRaceCheckpoint(_0x1193be.bRaceShape + 1);
  }
});
mp.events.add("Client_HandleActionButtonHalloween2025", _0x555efd => {
  if (halloweenDesignOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HandleActionButtonHalloween2025", _0x555efd);
    }
  }
});
let bSuperJumpAllowed = false;
mp.events.add("Client_SetSuperJump", () => {
  bSuperJumpAllowed = true;
  mp.game.invoke("0xB128377056A54E2A", mp.players.local.handle, false);
  setTimeout(() => {
    bSuperJumpAllowed = false;
    mp.game.invoke("0xB128377056A54E2A", mp.players.local.handle, true);
  }, 120000);
});
let ghostObjectAnimZ;
let bCanSuperJump = false;
function setPlayerSpaceRagdoll() {
  mp.players.local.setToRagdoll(5000, 5000, 0, false, false, false);
}
mp.events.add("render", () => {
  if (bSuperJumpAllowed) {
    if (mp.players.local.isJumping() && bCanSuperJump) {
      bCanSuperJump = false;
      const _0x407410 = mp.players.local.getVelocity();
      mp.players.local.setVelocity(_0x407410.x, _0x407410.y, _0x407410.z + 20);
    } else if (!mp.players.local.isJumping()) {
      bCanSuperJump = true;
    }
  }
  if (ghostObjectAnim) {
    if (!ghostObject || !mp.objects.exists(ghostObject)) {
      return;
    }
    if (ghostObjectAnim == 1 && ghostObjectAnimZ == null) {
      ghostObjectAnimZ = ghostObject.position.z + 10;
    } else if (ghostObjectAnim == 2 && ghostObjectAnimZ == null) {
      ghostObjectAnimZ = ghostObject.position.z - 10;
    }
    ghostObject.slide(ghostObject.position.x, ghostObject.position.y, ghostObjectAnimZ, 0.01, 0.01, 0.01, false);
  }
});
mp.events.add("Client_BoostRunSpeedHalloween", _0x5f37a6 => {
  if (_0x5f37a6) {
    mp.game.player.setRunSprintMultiplierFor(0.8);
    ShowNotification(language["Вас прокляли и ваша скорость бега понижена"][curr_lang], 6);
  } else {
    mp.game.player.setRunSprintMultiplierFor(1.49);
    ShowNotification(language["Вас благословили и ваша скорость бега повышена"][curr_lang], 25);
  }
});
mp.events.add("Client_RotateHUD", () => {
  main_browser.execute("APPS.state.hud.bRotate = true;");
  setTimeout(() => {
    main_browser.execute("APPS.state.hud.bRotate = false;");
  }, 60000);
  ShowNotification(language["Вас прокляли"][curr_lang], 6);
});
let ragdollBind = false;
mp.events.add("Client_SetSpaceRagdoll", () => {
  if (!ragdollBind) {
    mp.keys.bind(32, true, setPlayerSpaceRagdoll);
    ragdollBind = true;
    setTimeout(() => {
      mp.keys.unbind(32, true, setPlayerSpaceRagdoll);
      ragdollBind = false;
    }, 60000);
    ShowNotification(language["Вас прокляли"][curr_lang], 6);
  }
});
let spritePosition;
let spriteTimeout = 0;
let bShowSprite = false;
mp.events.add("Client_DrawHalloweenCandy", _0x335136 => {
  spritePosition = _0x335136;
  spriteTimeout = 0;
  bShowSprite = true;
  StartCustomSound("halloween_candy", "/game/gui/sounds/halloween/halloween_candy.ogg", 0.1);
});
mp.events.add("render", () => {
  if (bShowSprite) {
    const _0x59cd4c = mp.game.graphics.world3dToScreen2d(spritePosition.x, spritePosition.y, spritePosition.z);
    if (!_0x59cd4c) {
      return false;
    }
    drawSprite("grandtextures", "halloween_candy", [0.2, 0.2], 0, [255, 255, 255, 255], _0x59cd4c.x, _0x59cd4c.y);
    spritePosition.z += 0.005;
    spriteTimeout++;
    if (spriteTimeout >= 300) {
      bShowSprite = false;
    }
  }
});
mp.events.add("Client_HouseCandyActionHalloween2025", (_0x226231, _0x3366c6) => {
  if (HomeEnterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseCandyActionHalloween2025", _0x226231, _0x3366c6);
    }
  }
});
let altarDamageCount = 0;
mp.events.add("playerWeaponShot", (_0x4d1872, _0x96ce67) => {
  if (bHalloween2025 && currentWeapon() != 101631238) {
    const _0x2c7e0b = mp.game.player.getEntityIsFreeAimingAt();
    if (_0x2c7e0b && _0x2c7e0b.model && _0x2c7e0b.model == 391894959) {
      altarDamageCount++;
      if (altarDamageCount % 10 == 0) {
        mp.events.callRemote("Server_HalloweenDamageAltar");
      }
    }
  }
});
const MAXIMUM_TIME = test_mode ? 300000 : 900000;
let altarEventInterval;
function cleanAltarEventInterval() {
  if (altarEventInterval != null) {
    clearInterval(altarEventInterval);
    altarEventInterval = undefined;
  }
}
mp.events.add("Client_StartAltarTimer", (_0x11a849, _0x4ce0c7) => {
  cleanAltarEventInterval();
  let _0x56219e = (MAXIMUM_TIME - _0x11a849) / 1000;
  altarEventInterval = setInterval(function () {
    if (_0x56219e > 0) {
      _0x56219e--;
    }
    if (_0x56219e == 10) {
      PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
    }
    let _0x5f2ebe = [0, 0];
    mp.players.forEachInRange(_0x4ce0c7, 200, _0x476502 => {
      if (_0x476502.getAlpha() != 0) {
        if (_0x476502.model == mp.game.joaat("u_m_y_zombie_01")) {
          _0x5f2ebe[0]++;
        } else {
          _0x5f2ebe[1]++;
        }
      }
    });
    ShowDrugLabsDesign(language.Зомби[curr_lang], _0x5f2ebe[0], language.Спецназ[curr_lang], _0x5f2ebe[1], "", 0, "", 0, "", 0, _0x56219e, 300, language.Событие[curr_lang]);
    if (_0x56219e <= 0) {
      cleanAltarEventInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearAltarEventTimer", () => {
  cleanAltarEventInterval();
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
const GHOSTS_DATA = [{
  position: new mp.Vector3(588.136, 114.618, 98.04),
  rotation: new mp.Vector3(0, 0, 27.411)
}, {
  position: new mp.Vector3(374.8, -38.441, 91.264),
  rotation: new mp.Vector3(0, 0, 17.831)
}, {
  position: new mp.Vector3(285.191, 79.019, 94.363),
  rotation: new mp.Vector3(0, 0, 158.263)
}, {
  position: new mp.Vector3(195.914, 2.027, 79.182),
  rotation: new mp.Vector3(0, 0, -63.77)
}, {
  position: new mp.Vector3(58.334, 42.404, 73.514),
  rotation: new mp.Vector3(0, 0, -44.914)
}, {
  position: new mp.Vector3(-16.334, 68.768, 71.879),
  rotation: new mp.Vector3(0, 0, -153.73)
}, {
  position: new mp.Vector3(-254.997, -455.006, 30.237),
  rotation: new mp.Vector3(0, 0, 105.27)
}, {
  position: new mp.Vector3(-368.667, -465.736, 30.699),
  rotation: new mp.Vector3(0, 0, 59.353)
}, {
  position: new mp.Vector3(-436.481, -595.13, 28.42),
  rotation: new mp.Vector3(0, 0, 66.125)
}, {
  position: new mp.Vector3(-273.34, -933.377, 31.22),
  rotation: new mp.Vector3(0, 0, -21.955)
}, {
  position: new mp.Vector3(-69.009, -840.425, 40.567),
  rotation: new mp.Vector3(0, 0, 175.973)
}, {
  position: new mp.Vector3(227.329, -715.906, 47.077),
  rotation: new mp.Vector3(0, 0, 133.053)
}, {
  position: new mp.Vector3(832.256, -839.952, 26.341),
  rotation: new mp.Vector3(0, 0, 87.359)
}, {
  position: new mp.Vector3(885.066, -1046.975, 33.007),
  rotation: new mp.Vector3(0, 0, 137.51)
}, {
  position: new mp.Vector3(922.203, -1162.786, 25.514),
  rotation: new mp.Vector3(0, 0, -177.874)
}, {
  position: new mp.Vector3(832.519, -1375.255, 26.124),
  rotation: new mp.Vector3(0, 0, -1.077)
}, {
  position: new mp.Vector3(1012.543, -1838.96, 31.739),
  rotation: new mp.Vector3(0, 0, -151.346)
}, {
  position: new mp.Vector3(1106.594, -2346.112, 30.377),
  rotation: new mp.Vector3(0, 0, -134.158)
}, {
  position: new mp.Vector3(714.969, -2264.101, 27.666),
  rotation: new mp.Vector3(0, 0, 124.602)
}, {
  position: new mp.Vector3(756.868, -1928.209, 29.193),
  rotation: new mp.Vector3(0, 0, 85.01)
}, {
  position: new mp.Vector3(751.727, -1834.714, 29.292),
  rotation: new mp.Vector3(0, 0, 80.925)
}, {
  position: new mp.Vector3(750.386, -1685.829, 29.408),
  rotation: new mp.Vector3(0, 0, -32.612)
}, {
  position: new mp.Vector3(598.164, -429.085, 24.817),
  rotation: new mp.Vector3(0, 0, -55.112)
}, {
  position: new mp.Vector3(389.458, -356.105, 48.024),
  rotation: new mp.Vector3(0, 0, -85.955)
}, {
  position: new mp.Vector3(-157.923, -154.839, 43.621),
  rotation: new mp.Vector3(0, 0, 156.744)
}, {
  position: new mp.Vector3(-1098.234, -346.264, 37.798),
  rotation: new mp.Vector3(0, 0, 174.965)
}, {
  position: new mp.Vector3(-1137.266, -463.155, 35.325),
  rotation: new mp.Vector3(0, 0, 76.794)
}, {
  position: new mp.Vector3(-1124.679, -550.878, 32.484),
  rotation: new mp.Vector3(0, 0, -59.352)
}, {
  position: new mp.Vector3(-1378.211, -639.498, 28.674),
  rotation: new mp.Vector3(0, 0, 177.13)
}, {
  position: new mp.Vector3(-1505.686, -513.794, 32.806),
  rotation: new mp.Vector3(0, 0, -108.1)
}, {
  position: new mp.Vector3(-1645.406, -483.488, 37.783),
  rotation: new mp.Vector3(0, 0, 52.162)
}, {
  position: new mp.Vector3(-1706.988, -482.428, 41.649),
  rotation: new mp.Vector3(0, 0, 2.138)
}, {
  position: new mp.Vector3(-1769.858, -411.58, 45.294),
  rotation: new mp.Vector3(0, 0, -167.595)
}, {
  position: new mp.Vector3(-1844.584, -327.512, 49.146),
  rotation: new mp.Vector3(0, 0, -26.585)
}, {
  position: new mp.Vector3(-1656.151, -375.461, 45.331),
  rotation: new mp.Vector3(0, 0, -132.37)
}, {
  position: new mp.Vector3(-1605.356, -344.411, 49.212),
  rotation: new mp.Vector3(0, 0, 47.401)
}, {
  position: new mp.Vector3(-1565.97, -231.714, 49.469),
  rotation: new mp.Vector3(0, 0, 146.878)
}, {
  position: new mp.Vector3(-1726.466, -192.54, 58.512),
  rotation: new mp.Vector3(0, 0, 96.435)
}, {
  position: new mp.Vector3(-1904.823, -334.299, 49.43),
  rotation: new mp.Vector3(0, 0, -84.471)
}, {
  position: new mp.Vector3(-1969.998, -470.414, 19.462),
  rotation: new mp.Vector3(0, 0, 46.267)
}, {
  position: new mp.Vector3(-1903.758, -709.973, 8.833),
  rotation: new mp.Vector3(0, 0, -149.301)
}, {
  position: new mp.Vector3(-1623.16, -1035.138, 5.902),
  rotation: new mp.Vector3(0, 0, 140.289)
}, {
  position: new mp.Vector3(-1361.931, -1078.239, 3.605),
  rotation: new mp.Vector3(0, 0, 115.119)
}, {
  position: new mp.Vector3(-1297.986, -1612.565, 4.096),
  rotation: new mp.Vector3(0, 0, -147.112)
}, {
  position: new mp.Vector3(-1287.156, -1605.727, 4.097),
  rotation: new mp.Vector3(0, 0, -147.278)
}, {
  position: new mp.Vector3(-1282.277, -1602.086, 4.097),
  rotation: new mp.Vector3(0, 0, -147.542)
}, {
  position: new mp.Vector3(-1204.439, -1790.496, 3.908),
  rotation: new mp.Vector3(0, 0, 164.353)
}, {
  position: new mp.Vector3(-1269.092, -1916.392, 5.862),
  rotation: new mp.Vector3(0, 0, -46.386)
}, {
  position: new mp.Vector3(-721.515, -1513.693, 5.001),
  rotation: new mp.Vector3(0, 0, -65.821)
}, {
  position: new mp.Vector3(-1008.538, -1758.847, 6.55),
  rotation: new mp.Vector3(0, 0, -49.916)
}, {
  position: new mp.Vector3(-982.085, -1961.018, 13.192),
  rotation: new mp.Vector3(0, 0, -91.255)
}, {
  position: new mp.Vector3(-1025.811, -2192.723, 9.071),
  rotation: new mp.Vector3(0, 0, -134.536)
}, {
  position: new mp.Vector3(-1059.918, -2383.237, 13.945),
  rotation: new mp.Vector3(0, 0, 149.147)
}, {
  position: new mp.Vector3(-1066.686, -2493.475, 13.98),
  rotation: new mp.Vector3(0, 0, -30.596)
}, {
  position: new mp.Vector3(-1930.074, -3010.936, 13.944),
  rotation: new mp.Vector3(0, 0, -30.429)
}, {
  position: new mp.Vector3(-1599.6, -3240.507, 13.945),
  rotation: new mp.Vector3(0, 0, -30.177)
}, {
  position: new mp.Vector3(-1417.897, -3311.353, 13.945),
  rotation: new mp.Vector3(0, 0, 151.685)
}, {
  position: new mp.Vector3(-1154.942, -3531.198, 13.94),
  rotation: new mp.Vector3(0, 0, 150.579)
}, {
  position: new mp.Vector3(-905.741, -3020.791, 13.944),
  rotation: new mp.Vector3(0, 0, -119.822)
}, {
  position: new mp.Vector3(249.52, -2691.603, 5.795),
  rotation: new mp.Vector3(0, 0, -2.211)
}, {
  position: new mp.Vector3(602.813, -3251.851, 6.07),
  rotation: new mp.Vector3(0, 0, -0.899)
}, {
  position: new mp.Vector3(707.48, -3219.511, 6.523),
  rotation: new mp.Vector3(0, 0, 43.161)
}, {
  position: new mp.Vector3(835.117, -3324.863, 5.901),
  rotation: new mp.Vector3(0, 0, 92.974)
}, {
  position: new mp.Vector3(1222.256, -2990.906, 5.865),
  rotation: new mp.Vector3(0, 0, 88.196)
}, {
  position: new mp.Vector3(1620.545, -2257.813, 106.716),
  rotation: new mp.Vector3(0, 0, 2.625)
}, {
  position: new mp.Vector3(1662.808, -25.703, 173.775),
  rotation: new mp.Vector3(0, 0, -165.544)
}, {
  position: new mp.Vector3(1666.481, 0.605, 166.118),
  rotation: new mp.Vector3(0, 0, 62.063)
}, {
  position: new mp.Vector3(1922.391, 594.211, 176.367),
  rotation: new mp.Vector3(0, 0, 157.564)
}, {
  position: new mp.Vector3(2780.708, 1678.156, 24.489),
  rotation: new mp.Vector3(0, 0, -44.553)
}, {
  position: new mp.Vector3(2710.222, 1444.091, 24.611),
  rotation: new mp.Vector3(0, 0, -44.553)
}, {
  position: new mp.Vector3(2659.404, 1347.882, 24.257),
  rotation: new mp.Vector3(0, 0, 58.78)
}, {
  position: new mp.Vector3(2516.975, 2576.797, 37.945),
  rotation: new mp.Vector3(0, 0, -55.141)
}, {
  position: new mp.Vector3(2569.411, 2727.632, 43.183),
  rotation: new mp.Vector3(0, 0, 122.608)
}, {
  position: new mp.Vector3(2192.577, 3493.79, 45.403),
  rotation: new mp.Vector3(0, 0, -119.759)
}, {
  position: new mp.Vector3(379.442, 3583.779, 33.292),
  rotation: new mp.Vector3(0, 0, 77.189)
}, {
  position: new mp.Vector3(54.412, 3767.112, 39.613),
  rotation: new mp.Vector3(0, 0, -178.9)
}, {
  position: new mp.Vector3(-222.858, 3642.525, 51.749),
  rotation: new mp.Vector3(0, 0, -46.26)
}, {
  position: new mp.Vector3(184.71, 4411.163, 74.441),
  rotation: new mp.Vector3(0, 0, 102.927)
}, {
  position: new mp.Vector3(776.041, 4184.012, 41.787),
  rotation: new mp.Vector3(0, 0, 89.164)
}, {
  position: new mp.Vector3(1309.328, 4361.968, 41.543),
  rotation: new mp.Vector3(0, 0, -108.283)
}, {
  position: new mp.Vector3(1383.222, 4306.003, 36.696),
  rotation: new mp.Vector3(0, 0, 31.341)
}, {
  position: new mp.Vector3(1668.806, 4969.233, 42.263),
  rotation: new mp.Vector3(0, 0, 35.701)
}, {
  position: new mp.Vector3(443.873, 6456.322, 28.747),
  rotation: new mp.Vector3(0, 0, -127.551)
}, {
  position: new mp.Vector3(125.17, 6288.312, 31.468),
  rotation: new mp.Vector3(0, 0, -15.458)
}, {
  position: new mp.Vector3(-276.284, 6019.39, 31.941),
  rotation: new mp.Vector3(0, 0, 1.467)
}, {
  position: new mp.Vector3(-466.829, 6288.072, 13.613),
  rotation: new mp.Vector3(0, 0, 103.792)
}, {
  position: new mp.Vector3(-2511.432, 2308.288, 34.662),
  rotation: new mp.Vector3(0, 0, 95.535)
}, {
  position: new mp.Vector3(-3205.018, 1310.658, 9.645),
  rotation: new mp.Vector3(0, 0, 67.071)
}, {
  position: new mp.Vector3(-3058.557, 481.947, 2.423),
  rotation: new mp.Vector3(0, 0, 104.101)
}, {
  position: new mp.Vector3(-2889.432, -0.391, 7.96),
  rotation: new mp.Vector3(0, 0, 154.716)
}, {
  position: new mp.Vector3(-824.559, -114.831, 27.957),
  rotation: new mp.Vector3(0, 0, 26.391)
}, {
  position: new mp.Vector3(-589.966, -285.887, 35.448),
  rotation: new mp.Vector3(0, 0, -61.575)
}];
let ghostObject;
let ghostObjectAnim;
mp.events.add("Client_CreateHalloweenGhost", (_0x4ffee6, _0x40941d) => {
  if (ghostObject && mp.objects.exists(ghostObject)) {
    return;
  }
  const _0x5cf7f2 = GHOSTS_DATA[_0x4ffee6 - 1].position;
  const _0x28bdeb = GHOSTS_DATA[_0x4ffee6 - 1].rotation;
  ghostObject = mp.objects.new(mp.game.joaat(_0x40941d < 0 ? "vel_ghost_scary" : "vel_ghost_cute"), new mp.Vector3(_0x5cf7f2.x, _0x5cf7f2.y, _0x5cf7f2.z + 0.5), {
    rotation: new mp.Vector3(_0x28bdeb.x, _0x28bdeb.y, _0x28bdeb.z - 180),
    alpha: 255,
    dimension: 0
  });
  SetGPSLocation(_0x5cf7f2.x, _0x5cf7f2.y, _0x5cf7f2.z);
});
const GHOST_PARTICLE_DATA = [{
  animDict: "core",
  anim: "ent_amb_butterflys_swarm",
  time: 4900,
  offsetVector: new mp.Vector3(0, 0, 0),
  additionalOffset: [0, 0, 0]
}, {
  animDict: "core",
  anim: "env_dust_devil_urban_lrg",
  time: 4900,
  offsetVector: new mp.Vector3(0, 0, 0),
  additionalOffset: [0, 0, 0]
}];
mp.events.add("Client_HandleHalloweenGhostAction", _0x29ef4d => {
  if ((ghostObject || mp.objects.exists(ghostObject)) && GHOST_PARTICLE_DATA[_0x29ef4d - 1]) {
    StartParticleEffectOnEntity(ghostObject, GHOST_PARTICLE_DATA[_0x29ef4d - 1].animDict, GHOST_PARTICLE_DATA[_0x29ef4d - 1].anim, GHOST_PARTICLE_DATA[_0x29ef4d - 1].offsetVector, GHOST_PARTICLE_DATA[_0x29ef4d - 1].time, GHOST_PARTICLE_DATA[_0x29ef4d - 1].additionalOffset[0], GHOST_PARTICLE_DATA[_0x29ef4d - 1].additionalOffset[1], GHOST_PARTICLE_DATA[_0x29ef4d - 1].additionalOffset[2]);
    ghostObjectAnim = _0x29ef4d;
    StartCustomSound(_0x29ef4d == 2 ? "curse" : "bless", _0x29ef4d == 2 ? "/game/gui/sounds/halloween/curse.ogg" : "/game/gui/sounds/halloween/bless.ogg", 0.2);
    setTimeout(() => {
      ghostObjectAnim = undefined;
      ghostObjectAnimZ = undefined;
      if (ghostObject && mp.objects.exists(ghostObject)) {
        ghostObject.destroy();
        ghostObject = undefined;
      }
    }, 5000);
  }
});
const ALTAR_MAX_HEALTH = 3000;
mp.events.add("Client_UpdateAltarHealth", _0x49c049 => {
  updateHealthBar(_0x49c049, 3000, "ALTAR");
});
mp.events.add("Client_DestroyHalloweenGhost", () => {
  ghostObjectAnim = undefined;
  ghostObjectAnimZ = undefined;
  if (ghostObject && mp.objects.exists(ghostObject)) {
    ghostObject.destroy();
    ghostObject = undefined;
  }
});