global.radio_rdj = 0;
mp.events.add("Client_SetRadioStatus", _0x1ab975 => {
  if (loggedin && radio_rdj != _0x1ab975) {
    radio_rdj = _0x1ab975;
  }
});
mp.events.add("Client_LoadRadioData", () => {
  if (mobileOpen && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!(radio_rdj < 1)) {
        CloseMobile();
        if (GlobalCheck() != 1) {
          mp.events.callRemote("Server_OpenRadioCenter");
        }
      }
    }
  }
});
mp.events.add("Client_OpenRadioCenter", (_0x1d6e7c, _0x59dd13, _0x57747b, _0x1b5d58, _0x3d0265) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x30fb0c = "{\"radio_update\": 0, \"radio_punishment\": 0, \"radio_players\": " + JSON.stringify(_0x57747b) + ", \"radio_settings\": " + JSON.stringify(_0x59dd13) + ", \"radio_data\": " + JSON.stringify(_0x1d6e7c) + ", \"radio_level\": " + _0x1b5d58 + ", \"radio_blacklist\": " + JSON.stringify(_0x3d0265) + ", \"show\":true}";
  main_browser.execute("APPS.state.radio_panel = " + _0x30fb0c);
  RadioCenterOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseRadioCenter = function () {
  if (RadioCenterOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.radio_panel.show = false;");
    RadioCenterOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_SendRadioRequest", (_0x1e0ac0, _0x401bfe, _0x3cdfe2, _0x2216a0) => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 3000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SendRadioRequest", _0x1e0ac0, _0x401bfe, _0x3cdfe2, _0x2216a0);
    }
  }
});
mp.events.add("Client_SwitchStatusSettings", _0x5e4835 => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SwitchStatusSettings", _0x5e4835);
    }
  }
});
mp.events.add("Client_UpdateRadioInterface", (_0x493d4a, _0x57e407 = undefined) => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.radio_panel.radio_update = " + _0x493d4a + ";");
    if (_0x57e407 !== undefined) {
      main_browser.execute("APPS.state.radio_panel.radio_data = " + JSON.stringify(_0x57e407) + ";");
    }
  }
});
mp.events.add("Client_UpdateRadioPunishment", () => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.radio_panel.radio_punishment = true;");
    setTimeout(() => {
      main_browser.execute("APPS.state.radio_panel.radio_punishment = false;");
    }, 3000);
  }
});
mp.events.add("Client_MakeActionWithStadium", _0x5813eb => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_MakeActionWithStadium", _0x5813eb);
    }
  }
});
mp.events.add("Client_KickOutFromStadium", _0xe94f7d => {
  if (RadioCenterOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_KickOutFromStadium", _0xe94f7d);
    }
  }
});