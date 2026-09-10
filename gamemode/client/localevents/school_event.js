let christmas_bigbox_blips;
let christmas_bigbox_shape;
global.SchoolEventOpened = false;
mp.events.add("Client_OpenSchoolEvent", (_0x4d5c67, _0x7c0e41, _0x565f83, _0x2b5aac, _0x366234, _0x337189, _0x405cb0, _0x5710bf) => {
  if (GlobalCheck() != 1) {
    main_browser.execute("APPS.state.september_event.get_diary = " + _0x4d5c67 + ";");
    main_browser.execute("APPS.state.september_event.currency = " + _0x7c0e41 + ";");
    main_browser.execute("APPS.state.september_event.day = " + _0x565f83 + ";");
    main_browser.execute("APPS.state.september_event.training_score = " + _0x366234 + ";");
    main_browser.execute("APPS.state.september_event.gender = " + _0x337189 + ";");
    main_browser.execute("APPS.state.september_event.in_school = " + _0x2b5aac + ";");
    main_browser.execute("APPS.state.september_event.photo_progress = " + _0x405cb0 + ";");
    main_browser.execute("APPS.state.september_event.photo_number = " + _0x5710bf + ";");
    if (_0x2b5aac == 1) {
      main_browser.execute("APPS.state.september_event.page = 1;");
    } else if (_0x2b5aac == 2) {
      main_browser.execute("APPS.state.september_event.page = 8;");
    }
    main_browser.execute("APPS.state.september_event.show = true;");
    SchoolEventOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_OpenSchoolDocs", (_0x229251, _0x22c548) => {
  if (GlobalCheck() != 1) {
    main_browser.execute("APPS.state.september_event.page = " + _0x229251 + ";");
    main_browser.execute("APPS.state.september_event.excellent = " + _0x22c548 + ";");
    main_browser.execute("APPS.state.september_event.show = true;");
    SchoolEventOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_OpenSchoolAnnounce", () => {
  if (GlobalCheck() != 1) {
    main_browser.execute("APPS.state.september_event.page = 13;");
    main_browser.execute("APPS.state.september_event.show = true;");
    SchoolEventOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_CloseSchoolInterface", () => {
  CloseSchoolEvent();
});
global.CloseSchoolEvent = function () {
  if (SchoolEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.september_event.show = false;");
    SchoolEventOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseEasterAnnounceDesign", 4);
  }
};
mp.events.add("Client_SchoolSetOpenDiary", () => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolSetOpenDiary");
      main_browser.execute("APPS.state.september_event.get_diary = true;");
    }
  }
});
mp.events.add("Client_SchoolStartLesson", _0x5eacdf => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolStartLesson", _0x5eacdf);
    }
  }
});
mp.events.add("Client_SchoolUpdateProgress", (_0x46b34f, _0x2c8f90) => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.september_event.training_score = " + _0x46b34f + ";");
    main_browser.execute("APPS.state.september_event.currency = " + _0x2c8f90 + ";");
  }
});
mp.events.add("Client_SchoolUpdateCurrency", _0x5c8e51 => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.september_event.currency = " + _0x5c8e51 + ";");
  }
});
global.at_school_bigbox = false;
mp.events.add("Client_SchoolBigBoxInterct", _0x40e3da => {
  if (_0x40e3da == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_school_bigbox = _0x40e3da;
});
mp.events.add("Client_SchoolBoxRoute", (_0x4933bf, _0x1df15b, _0x156987) => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  christmas_bigbox_blips = mp.blips.new(764, new mp.Vector3(_0x4933bf, _0x1df15b, _0x156987), {
    name: language["Место направления"][curr_lang],
    color: 2
  });
  christmas_bigbox_blips.setRoute(true);
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
  christmas_bigbox_shape = mp.colshapes.newCircle(_0x4933bf, _0x1df15b, 10, 0);
});
mp.events.add("Client_SchoolBoxDestroy", () => {
  if (christmas_bigbox_blips) {
    christmas_bigbox_blips.destroy();
    christmas_bigbox_blips = undefined;
  }
  if (christmas_bigbox_shape) {
    christmas_bigbox_shape.destroy();
    christmas_bigbox_shape = undefined;
  }
});
global.at_school_icons = false;
mp.events.add("Client_SchoolIconsInterct", _0x251d78 => {
  if (_0x251d78 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_school_icons = _0x251d78;
});
mp.events.add("Client_SchoolBuyItem", _0x54dc29 => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolBuyItem", _0x54dc29);
    }
  }
});
mp.events.add("Client_SchoolInteractItem", _0x2094e2 => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolInteractItem", _0x2094e2);
    }
  }
});
mp.events.add("Client_SchoolBuyCurency", () => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolBuyCurency");
    }
  }
});
mp.events.add("Client_SchoolStartEducation", () => {
  if (SchoolEventOpened && loggedin && !chatActive) {
    CloseSchoolEvent();
    mp.events.callRemote("Server_OpenSchoolEvent");
  }
});