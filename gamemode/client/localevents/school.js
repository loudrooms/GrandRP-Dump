function ExitSchoolDM() {
  localplayer.freezePosition(false);
  duel_cant_do_damage = false;
  global.at_school_dm = false;
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (arena_interval) {
    clearInterval(arena_interval);
    arena_interval = null;
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  main_browser.execute("APPS.state.hud.arena_show = false;");
}
global.at_school_dm = false;
global.at_school_flag = false;
mp.events.add("Client_CanInteractWithFlag", _0xe4aff3 => {
  if (_0xe4aff3 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_school_flag = _0xe4aff3;
});
mp.events.add("Client_PreStartSchoolMatch", () => {
  localplayer.freezePosition(true);
  duel_cant_do_damage = true;
  global.at_school_dm = true;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(4907.535, -4790.776, 180.781), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(5096.418, -4764.858, 3.79);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
});
mp.events.add("Client_SchoolMatchCancel", () => {
  ExitSchoolDM();
});
global.SchoolEventOpened = false;
mp.events.add("Client_ShowSchoolEvent", (_0x154e7d, _0x36c44e, _0x1ce7f6, _0x258e44) => {
  if (GlobalCheck() != 1) {
    if (_0x154e7d == 1) {
      main_browser.execute("APPS.state.school.logs = " + _0x1ce7f6 + ";");
      main_browser.execute("APPS.state.school.eventCoins = " + _0x36c44e + ";");
      main_browser.execute("APPS.state.school.gender = " + _0x258e44 + ";");
    } else if (_0x154e7d == 2) {
      main_browser.execute("APPS.state.school.russianLeason.wordList = " + JSON.stringify(_0x36c44e) + ";");
    } else if (_0x154e7d == 3) {
      main_browser.execute("APPS.state.school.englishLeason = " + _0x36c44e + ";");
    }
    main_browser.execute("APPS.state.school.currentScreen = " + _0x154e7d + ";");
    main_browser.execute("APPS.state.school.show = true;");
    SchoolEventOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.CloseSchoolEvent = function () {
  if (SchoolEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.school.show = false;");
    SchoolEventOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseSchool", () => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    CloseSchoolEvent();
  }
});
mp.events.add("Client_SchoolBuyItem", _0x84c00d => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolBuyItem", _0x84c00d);
    }
  }
});
mp.events.add("Client_SchoolFinishFilWords", _0x5039e5 => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolFinishFilWords", _0x5039e5);
    }
  }
});
mp.events.add("Client_SchoolCheckTranslate", _0x4b225c => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolCheckTranslate", _0x4b225c);
    }
  }
});
mp.events.add("Client_UpdateAnswersTranslate", _0x3991c9 => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.school.englishLeason = " + _0x3991c9 + ";");
  }
});