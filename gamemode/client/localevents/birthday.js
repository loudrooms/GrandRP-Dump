global.BirthdayMenuOpened = false;
mp.events.add("Client_ShowBirthdayMenu", (_0x56658f, _0x5da7f9, _0x2e9ec6, _0x32fee6, _0x53fbce) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x3aa93c = 0;
  if (localplayer.model != 1885233650) {
    _0x3aa93c = 1;
  }
  const _0x42d1f3 = {
    gender: _0x3aa93c,
    candies: _0x56658f,
    loot: _0x5da7f9,
    progress: _0x53fbce,
    get_photo: _0x2e9ec6,
    tasks: _0x32fee6,
    show: true
  };
  main_browser.execute("APPS.state.birthday = " + JSON.stringify(_0x42d1f3));
  main_browser.execute("APPS.state.birthday.get_photo = [" + _0x2e9ec6 + "]");
  main_browser.execute("APPS.state.birthday.progress = [" + _0x53fbce + "]");
  main_browser.execute("APPS.state.birthday.tasks = " + _0x32fee6 + ";");
  BirthdayMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBirthdayMenu = function () {
  if (BirthdayMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.birthday.show = false;");
    BirthdayMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.at_birthday_loot = false;
mp.events.add("Client_BirthdayGiftInterct", _0x18b431 => {
  if (_0x18b431 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_birthday_loot = _0x18b431;
});
mp.events.add("Client_CloseBirthdayEventMenu", _0x2fa0cb => {
  if (BirthdayMenuOpened) {
    CloseBirthdayMenu();
  }
});
mp.events.add("Client_BuyBirthdayClothes", _0x45dd6f => {
  if (BirthdayMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyBirthdayClothes", _0x45dd6f);
    }
  }
});
mp.events.add("Client_AnswerBirthdayEvent", _0x34cc5 => {
  if (BirthdayMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AnswerBirthdayEvent", _0x34cc5);
    }
  }
});
mp.events.add("Client_BuyBirthdayCandies", () => {
  if (BirthdayMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyBirthdayCandies");
    }
  }
});
mp.events.add("Client_TakeBirthdayWordCandies", () => {
  if (BirthdayMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TakeBirthdayWordCandies");
    }
  }
});
mp.events.add("Client_UpdateBirthdayCandies", _0x3f188c => {
  if (BirthdayMenuOpened) {
    main_browser.execute("APPS.state.birthday.candies = " + _0x3f188c);
  }
});
mp.events.add("Client_UpdateBirthdayQuestion", (_0x19c2bf, _0x515983) => {
  if (BirthdayMenuOpened) {
    main_browser.execute("APPS.state.birthday.candies = " + _0x515983);
    main_browser.execute("APPS.state.birthday.tasks = " + _0x19c2bf);
  }
});