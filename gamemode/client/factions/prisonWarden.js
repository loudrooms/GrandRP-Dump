global.prisonWardenMinigameOpened = false;
global.atPrisonWardenPoint = false;
global.atPrisonWardenPointLong = false;
global.isPrisonWarden = false;
global.workAtPrisonJob = false;
mp.events.add("Client_OpenPrisonWardenMiniGame", _0xbc2a4a => {
  if (!prisonWardenMinigameOpened && !!loggedin && !chatActive) {
    main_browser.execute("APPS.state.prisonWardenMiniGame.type = '" + _0xbc2a4a + "';");
    main_browser.execute("APPS.state.prisonWardenMiniGame.show = true;");
    prisonWardenMinigameOpened = true;
    SwitchHUDToDesign(true);
  }
});
global.closePrisonWardenMiniGame = function (_0x11c855 = false, _0x17dd51 = false) {
  if (prisonWardenMinigameOpened) {
    main_browser.execute("APPS.state.prisonWardenMiniGame.show = false;");
    prisonWardenMinigameOpened = false;
    SwitchHUDToDesign(false);
    if (!_0x11c855) {
      mp.events.callRemote("Server_PrisonWardenMiniGameFinish", _0x17dd51);
    }
  }
};
mp.events.add("Client_ClosePrisonWardenMiniGame", closePrisonWardenMiniGame);
mp.events.add("Client_PrisonWardenInteract", _0x45bf72 => {
  if (_0x45bf72) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atPrisonWardenPoint = _0x45bf72;
});
mp.events.add("Client_PrisonWardenLongInteract", _0x5d326e => {
  if (_0x5d326e) {
    main_browser.execute("APPS.state.hud.interact = 2;");
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atPrisonWardenPointLong = _0x5d326e;
});
let checkDistanceInterval = null;
mp.events.add("Client_ChangePrisonWardenState", _0x5a7218 => {
  global.isPrisonWarden = _0x5a7218;
  main_browser.execute("APPS.state.hud.showWardenStatistics = " + _0x5a7218 + ";");
  if (checkDistanceInterval) {
    clearInterval(checkDistanceInterval);
    checkDistanceInterval = null;
  }
  if (_0x5a7218) {
    checkDistanceInterval = setInterval(() => {
      if (mp.game.system.vdist(1692.573, 2519.978, 45.565, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 220) {
        mp.events.callRemote("Server_PrisonWardenFinishWardenJob");
      }
    }, 5000);
  }
});
mp.events.add("Client_UpdatePrisonWardenHudStatistics", (_0x4ae2b7, _0x34b78a, _0x3e1462, _0xda0d9e) => {
  main_browser.execute("APPS.state.hud.prisonWardenStatistics = " + JSON.stringify({
    wardensCount: _0x4ae2b7,
    prisonersCount: _0x34b78a,
    salaryPerWarden: _0x3e1462,
    moneyAccumulated: _0xda0d9e
  }) + ";");
});
mp.events.add("Client_ChangePrisonJobState", _0x346431 => {
  global.workAtPrisonJob = _0x346431;
  if (_0x346431) {
    mp.events.call("Client_ResetGPS");
  }
});
mp.events.add("Client_PrisonWardenRemoveJailTime", (_0x553f18, _0x56e395) => {
  main_browser.execute("this.AppComponents.hud.removeJailTime(" + _0x56e395 + ");");
  mp.events.call("Client_UpdateJailTime", _0x553f18);
});
let holdingIronedClothesBox = false;
mp.events.add("Client_PrisonWardenHoldingIronedClothesBox", _0x1b4ac7 => {
  holdingIronedClothesBox = _0x1b4ac7;
  mp.players.local.setConfigFlag(104, !_0x1b4ac7);
});
let holdingMovingBox = false;
mp.events.add("Client_PrisonWardenHoldingMovingBox", _0x26584d => {
  holdingMovingBox = _0x26584d;
  mp.players.local.setConfigFlag(104, !_0x26584d);
});
mp.events.add("render", () => {
  if (holdingIronedClothesBox || holdingMovingBox) {
    if (holdingIronedClothesBox) {
      mp.game.controls.disableControlAction(0, 21, true);
    }
    mp.game.controls.disableControlAction(0, 22, true);
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(0, 25, true);
  }
});