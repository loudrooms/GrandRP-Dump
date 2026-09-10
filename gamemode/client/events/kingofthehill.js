let kingofthehill_interval;
mp.events.add("Client_KingoftheHillStartIntervalCounter", function (_0x32bb7f, _0x4a38bf, _0x21457d) {
  if (kingofthehill_interval != null) {
    clearInterval(kingofthehill_interval);
    kingofthehill_interval = undefined;
  }
  kingofthehill_interval = setInterval(function () {
    if (_0x32bb7f > 0) {
      if (--_0x32bb7f == 10) {
        PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
      }
      let _0x3d5b5a = 0;
      mp.players.forEachInStreamRange(function (_0x19561e) {
        if (mp.Vector3.Distance2D(_0x19561e.position, _0x4a38bf) <= _0x21457d && _0x19561e.dead_state != 1 && _0x19561e.getAlpha() != 0) {
          _0x3d5b5a++;
        }
      });
      if (_0x3d5b5a > 1) {
        _0x32bb7f = 60;
      }
      main_browser.execute("APPS.state.hud.kothPlayers = " + _0x3d5b5a);
      main_browser.execute("APPS.state.hud.kothTime = " + _0x32bb7f);
    } else if (kingofthehill_interval != null) {
      main_browser.execute("APPS.state.hud.showkingofthehill = false");
      clearInterval(kingofthehill_interval);
      kingofthehill_interval = undefined;
    }
  }, 1000);
});
mp.events.add("Client_ShowHUDkingofthehill", (_0x5e1b6d, _0x59b3e6) => {
  if (_0x5e1b6d == 1) {
    main_browser.execute("APPS.state.hud.showkingofthehill = true");
    main_browser.execute("APPS.state.hud.kothTime = " + _0x59b3e6);
  } else if (_0x5e1b6d == 2) {
    main_browser.execute("APPS.state.hud.showkingofthehill = false");
    if (kingofthehill_interval != null) {
      clearInterval(kingofthehill_interval);
      kingofthehill_interval = undefined;
    }
  }
});