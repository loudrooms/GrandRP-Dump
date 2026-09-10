global.atPumpkin = false;
global.atWitchBucket = false;
const HALLOWEEN_BASES_POSITIONS = [{
  position: new mp.Vector3(199.121, -934.203, 30.679)
}, {
  position: new mp.Vector3(-1658.556, -208.929, 55.149)
}];
mp.colshapes.newSphere(HALLOWEEN_BASES_POSITIONS[0].position.x, HALLOWEEN_BASES_POSITIONS[0].position.y, HALLOWEEN_BASES_POSITIONS[0].position.z, 100).isHalloweenMusicSwitch = true;
mp.colshapes.newSphere(HALLOWEEN_BASES_POSITIONS[1].position.x, HALLOWEEN_BASES_POSITIONS[1].position.y, HALLOWEEN_BASES_POSITIONS[1].position.z, 100).isHalloweenMusicSwitch = true;
const HUMAN_THRONE_POSITION = new mp.Vector3(199.121, -934.203, 29.679);
const VAMPIRE_THRONE_POSITION = new mp.Vector3(-1728.634, -192.197, 58.919);
const THRONE_MAX_HEALTH = 5000;
const ALTAR_MAX_HEALTH = 5000;
const UFO_MAX_HEALTH = 100;
const UFO_MODEL = "p_spinning_anus_s";
let HalloweenMusicInterval;
global.bHalloweenMusic = true;
let bHalloweenInZone = false;
let bPlayingHalloweenMusic = false;
function PlayHalloweenMusic() {
  if (!bPlayingHalloweenMusic) {
    StartCustomSound("halloween_music", "/game/gui/sounds/halloween/halloween_main_background.ogg", 0.05);
    bPlayingHalloweenMusic = true;
    HalloweenMusicInterval = setInterval(() => {
      StartCustomSound("halloween_music", "/game/gui/sounds/halloween/halloween_main_background.ogg", 0.05);
    }, 158000);
  }
}
function StopHalloweenMusic() {
  StopCustomSound("halloween_music");
  bPlayingHalloweenMusic = false;
  if (HalloweenMusicInterval != null) {
    clearInterval(HalloweenMusicInterval);
    HalloweenMusicInterval = undefined;
  }
}
mp.events.add("playerEnterColshape", _0x25a67c => {
  if (_0x25a67c.isHalloweenMusicSwitch && bHalloweenMusic && mp.storage.data.halloween_music) {
    PlayHalloweenMusic();
    bHalloweenInZone = true;
  }
});
mp.events.add("playerExitColshape", _0x13664c => {
  if (_0x13664c.isHalloweenMusicSwitch && mp.storage.data.halloween_music) {
    StopHalloweenMusic();
    bHalloweenInZone = false;
  }
});
mp.events.add("Client_SwitchHalloweenMusic", _0x59bbeb => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x59bbeb == 1) {
      mp.storage.data.halloween_music = 1;
      mp.storage.flush();
      bHalloweenMusic = true;
      if (bHalloweenInZone) {
        PlayHalloweenMusic();
      }
    } else {
      mp.storage.data.halloween_music = 0;
      mp.storage.flush();
      if (bHalloweenMusic) {
        StopHalloweenMusic();
        bHalloweenMusic = false;
      }
    }
  }
});
mp.events.add("Client_PumpkinInteract", _0x54c424 => {
  if (_0x54c424 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    atPumpkin = true;
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
    atPumpkin = false;
  }
});
mp.events.add("Client_WitchBucketInteract", _0x3120bd => {
  if (_0x3120bd == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    atWitchBucket = true;
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
    atWitchBucket = false;
  }
});
let UFOObject;
let throneDamageCount = 0;
let altarDamageCount = 0;
mp.events.add("playerWeaponShot", (_0x497e22, _0x38658c) => {
  if (is_halloween_2024 && currentWeapon() != 101631238) {
    const _0x20de41 = mp.game.player.getEntityIsFreeAimingAt();
    if (_0x20de41 && _0x20de41.model) {
      if (_0x20de41.model == 3026699584) {
        if (_0x20de41.healthPoints == null) {
          _0x20de41.healthPoints = 100;
        }
        _0x20de41.healthPoints--;
        updateHealthBar(_0x20de41.healthPoints, 100, "UFO");
        if (_0x20de41.healthPoints <= 0) {
          mp.events.callRemote("Server_HalloweenDestroyUFO");
          if (UFOObject && mp.objects.exists(UFOObject)) {
            mp.events.call("Client_ShowParticleEffect", "cut_finale1", "cs_finale1_car_explosion", UFOObject.position, 5000);
            UFOObject.destroy();
            UFOObject = undefined;
          }
        }
      } else if (_0x20de41.model == 2367684325 || _0x20de41.model == 1381654548) {
        let _0xd3d978 = 0;
        if (_0x20de41.model == 2367684325) {
          _0xd3d978 = 1;
        } else if (_0x20de41.model == 1381654548) {
          _0xd3d978 = 2;
        }
        if (_0xd3d978) {
          throneDamageCount++;
          if (throneDamageCount % 10 == 0) {
            mp.events.callRemote("Server_DamageHalloweenThrone", _0xd3d978);
          }
        }
      } else if (_0x20de41.model == 391894959) {
        altarDamageCount++;
        if (altarDamageCount % 10 == 0) {
          mp.events.callRemote("Server_HalloweenDamageAltar");
        }
      }
    }
  }
});
mp.events.add("Client_StartRampageEffect", () => {
  mp.game.graphics.startScreenEffect("Rampage", 1000, false);
  setTimeout(() => {
    mp.game.invoke(getNative("_STOP_ALL_SCREEN_EFFECTS"));
  }, 30000);
});
mp.events.add("Client_PumpkinOnScreen", () => {
  main_browser.execute("APPS.state.hud.halloweenPumpkin2024 = true;");
  setTimeout(() => {
    main_browser.execute("APPS.state.hud.halloweenPumpkin2024 = false;");
  }, 30000);
});
global.halloweenCardOpened = false;
mp.events.add("Client_ShowHalloweenRole", _0x385dc9 => {
  if (!!loggedin && !chatActive && !halloweenCardOpened) {
    main_browser.execute("APPS.state.halloweencard.show = true;");
    main_browser.execute("APPS.state.halloweencard.role = " + _0x385dc9 + ";");
    halloweenCardOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.add("Client_CloseHalloweenRoleDesign", () => {
  closeHallowenRoleDesign();
});
global.closeHallowenRoleDesign = function () {
  if (loggedin && !chatActive && halloweenCardOpened) {
    main_browser.execute("APPS.state.halloweencard.show = false;");
    SwitchHUDToDesign(false);
    halloweenCardOpened = false;
    mp.events.callRemote("Server_RequestShowDesignAfterLogin");
  }
};
global.halloweenMenuOpened = false;
mp.events.add("Client_OpenHalloweenMenu", (_0x136684, _0xfc36be, _0xdd7381, _0x22932a, _0x2de3cd = undefined) => {
  if (GlobalCheck() || !loggedin || chatActive || halloweenMenuOpened) {
    return;
  }
  let _0x991c59 = 0;
  if (localplayer.model != 1885233650) {
    _0x991c59 = 1;
  }
  const _0xc7337d = "{\"halloweenRole\":" + _0x136684 + ",\"halloweenCandies\":" + _0xfc36be + ", \"serverTime\":" + _0x22932a + ",\"gender\":" + _0x991c59 + ",\"dayonline\":" + _0xdd7381 + ", \"show\":true}";
  main_browser.execute("APPS.state.halloween_menu = " + _0xc7337d + ";");
  if (_0x2de3cd) {
    main_browser.execute("this.AppComponents.halloween_menu.selectedPage = " + _0x2de3cd + ";");
  }
  main_browser.execute("this.AppComponents.halloween_menu.$forceUpdate();");
  SwitchHUDToDesign(true);
  halloweenMenuOpened = true;
});
mp.events.add("Client_CloseHalloweenMenu", () => {
  closeHalloweenMenu();
});
global.closeHalloweenMenu = function () {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    main_browser.execute("APPS.state.halloween_menu.show = false;");
    SwitchHUDToDesign(false);
    halloweenMenuOpened = false;
  }
};
mp.events.add("Client_RequestBuyHalloweenCandies", _0x1e54e8 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyHalloweenCandies", _0x1e54e8);
    }
  }
});
mp.events.add("Client_HalloweenDesignPageHandler", _0x1c2941 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    mp.events.callRemote("Server_HalloweenDesignPageHandler", _0x1c2941);
  }
});
mp.events.add("Client_LoadHalloweenPage3", _0xaf1c06 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    main_browser.execute("APPS.state.halloween_menu.exchangeItems = " + JSON.stringify(_0xaf1c06) + ";");
    main_browser.execute("this.AppComponents.halloween_menu.$forceUpdate();");
  }
});
mp.events.add("Client_RequestRecycleHalloweenItems", _0x400741 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestRecycleHalloweenItems", _0x400741);
    }
  }
});
mp.events.add("Client_RequestBuyItemFromShop", _0x37683f => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyItemFromShop", _0x37683f);
    }
  }
});
mp.events.add("Client_RequestTryClothesHalloween", _0x4f9bc5 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestTryClothesHalloween", _0x4f9bc5);
    }
  }
});
mp.events.add("Client_AddVoteForCurse", _0x1748a => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddVoteForCurse", _0x1748a);
    }
  }
});
mp.events.add("Client_LoadHalloweenPage2", (_0x422f77, _0x56b93f) => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    main_browser.execute("APPS.state.halloween_menu.voteCounts = " + JSON.stringify(_0x56b93f));
    main_browser.execute("APPS.state.halloween_menu.activityPoints = " + _0x422f77);
    main_browser.execute("this.AppComponents.halloween_menu.$forceUpdate();");
  }
});
mp.events.add("Client_SetHalloweenRoute", (_0x417f59, _0xebdf6e) => {
  if (loggedin && !chatActive && halloweenMenuOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    closeHalloweenMenu();
    switch (_0x417f59) {
      case "halloweenBase":
        SetGPSLocation(HALLOWEEN_BASES_POSITIONS[_0xebdf6e - 1].position.x, HALLOWEEN_BASES_POSITIONS[_0xebdf6e - 1].position.y, HALLOWEEN_BASES_POSITIONS[_0xebdf6e - 1].position.z, true);
        break;
      case "witchCandies":
        SetGPSLocation(2447.874, 4984.521, 51.065, true);
        break;
      case "UFO":
        mp.events.callRemote("Server_RequestGPSToUFO");
        break;
      case "altar":
        mp.events.callRemote("Server_RequestGPSToAltar");
        break;
      case "citadel":
        mp.events.callRemote("Server_RequestGPSToCitadel");
    }
  }
});
mp.events.add("Client_HalloweenRotateHUD", () => {
  main_browser.execute("APPS.state.hud.bRotate = true;");
  setTimeout(() => {
    main_browser.execute("APPS.state.hud.bRotate = false;");
  }, 30000);
});
mp.events.add("Client_UpdateThroneHealth", _0x3d9eb2 => {
  updateHealthBar(_0x3d9eb2, 5000, "CITADEL");
});
mp.events.add("Client_UpdateAltarHealth", _0x53afe0 => {
  updateHealthBar(_0x53afe0, 5000, "ALTAR");
});
mp.events.add("Client_UpdateHalloweenCandiesBalance", _0x454cb8 => {
  if (loggedin && !chatActive && halloweenMenuOpened) {
    main_browser.execute("APPS.state.halloween_menu.halloweenCandies = " + _0x454cb8 + ";");
  }
});
mp.events.add("Client_StartPumpkinEffect", _0x1cc275 => {
  const _0x584e5c = mp.players.atRemoteId(_0x1cc275);
  if (_0x584e5c) {
    if (!mp.game.streaming.hasNamedPtfxAssetLoaded("scr_bike_adversary")) {
      for (mp.game.streaming.requestNamedPtfxAsset("scr_bike_adversary"); !mp.game.streaming.hasNamedPtfxAssetLoaded("scr_bike_adversary");) {
        mp.game.wait(0);
      }
    }
    mp.game.graphics.setPtfxAssetNextCall("scr_bike_adversary");
    _0x584e5c.pumpkinEffect = mp.game.graphics.startParticleFxLoopedOnEntity("scr_adversary_weap_smoke", _0x584e5c.handle, 0, 0, 0, 0, 0, 0, 1, true, true, true);
  }
});
mp.events.add("entityStreamOut", _0x2d5142 => {
  if (_0x2d5142 && _0x2d5142.pumpkinEffect) {
    mp.game.graphics.stopParticleFxLooped(_0x2d5142.pumpkinEffect, false);
    _0x2d5142.pumpkinEffect = undefined;
  }
});
mp.events.add("Client_CleanPumpkinEffect", _0x439b72 => {
  const _0x2cd1dd = mp.players.atRemoteId(_0x439b72);
  if (_0x2cd1dd && _0x2cd1dd.pumpkinEffect) {
    mp.game.graphics.stopParticleFxLooped(_0x2cd1dd.pumpkinEffect, false);
    _0x2cd1dd.pumpkinEffect = undefined;
  }
});
mp.events.add("Client_CreateHalloweenUFO", _0x44e227 => {
  if (UFOObject && mp.objects.exists(UFOObject)) {
    UFOObject.destroy();
    UFOObject = undefined;
  }
  UFOObject = mp.objects.new(mp.game.joaat(UFO_MODEL), _0x44e227, {
    alpha: 255,
    dimension: 0
  });
});