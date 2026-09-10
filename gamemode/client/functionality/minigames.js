mp.events.add("Client_StartCrashGame", _0x20139b => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_StartCrashGame", _0x20139b);
  }
});
mp.events.add("Client_UpdateCrashChance", _0x35d90a => {
  if (loggedin) {
    main_browser.execute("APPS.state.donate.crash.chance = " + _0x35d90a + ";");
    if (_0x35d90a == 1.01) {
      main_browser.execute("APPS.state.donate.crash.player_status = 1;");
    }
  }
});
mp.events.add("Client_UpdateCrashDeath", () => {
  if (loggedin) {
    main_browser.execute("APPS.state.donate.crash.player_status = 3;");
  }
});
mp.events.add("Client_StopCrashGame", () => {
  if (loggedin) {
    mp.events.callRemote("Server_StopCrashGame");
  }
});
mp.events.add("Client_SetCrashWin", (_0x5ed3c2, _0x2fa06c) => {
  if (loggedin) {
    main_browser.execute("APPS.state.donate.crash.chance = " + _0x5ed3c2 + ";");
    main_browser.execute("APPS.state.donate.crash.win_amount = " + _0x2fa06c + ";");
    main_browser.execute("APPS.state.donate.crash.player_status = 2;");
  }
});
mp.events.add("Client_BetRouletteGame", (_0x3d3504, _0x1e986b) => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BetRouletteGame", _0x3d3504, _0x1e986b);
  }
});
mp.events.add("Client_UpdateTimeGameRoulette", (_0x2d143a, _0x198043) => {
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.roulette.bets = " + _0x2d143a + ";");
    main_browser.execute("APPS.state.donate.roulette.time = " + _0x198043 + ";");
  }
});
mp.events.add("Client_UpdateWinGameRoulette", (_0x221877, _0x582424, _0x969816) => {
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.roulette.result = " + _0x221877 + ";");
    main_browser.execute("APPS.state.donate.roulette.game = " + _0x582424 + ";");
    main_browser.execute("APPS.state.donate.roulette.history = [" + _0x969816 + "]");
  }
});
global.inMinigamesRoulette = false;
mp.events.add("Client_UpdateMinigamesRouletteData", (_0x2d022a, _0x502feb) => {
  main_browser.execute("APPS.state.donate.roulette.game = " + _0x2d022a + ";");
  main_browser.execute("APPS.state.donate.roulette.history = [" + _0x502feb + "]");
  inMinigamesRoulette = true;
});
mp.events.add("Client_RequestRouletteData", () => {
  mp.console.logInfo("Client_RequestRouletteData");
  if (DonateOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestRouletteData");
    }
  }
});
mp.events.add("Client_CleanPlayerFromRoulette", () => {
  mp.events.callRemote("Server_CleanPlayerFromRoulette");
});