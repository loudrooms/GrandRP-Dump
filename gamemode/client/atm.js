global.ATMOpened = false;
global.OpenATM = function (_0x4557be) {
  EndConversationFinally();
  if (GlobalCheck() != 1) {
    mp.events.callRemote("OpenATMServer", _0x4557be);
  }
};
mp.events.add("OpenATMCorrectly", (_0x3a66ec, _0x36747c, _0x56b79a, _0x1f9bf0, _0x265064, _0x3a80fc) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x26b2f7 = "{\"name\":'" + localplayer.name.replace("_", " ") + "',\"banknumber\":" + _0x3a66ec + ",\"balance\":" + _0x36747c + ",\"money\":" + _0x56b79a + ",\"tax\":" + _0x1f9bf0 + ",\"owner\":'" + _0x265064 + "',\"is_bank\":" + _0x3a80fc + ",\"show\":true}";
  main_browser.execute("APPS.state.bank_menu = " + _0x26b2f7);
  ATMOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("ReloadATMBalance", (_0x3c90e9, _0x49d9e4, _0x1acc48 = 9999999999) => {
  if (ATMOpened) {
    main_browser.execute("APPS.state.bank_menu.banknumber = " + _0x3c90e9);
    main_browser.execute("APPS.state.bank_menu.balance = " + _0x49d9e4);
    if (_0x1acc48 != 9999999999) {
      main_browser.execute("APPS.state.bank_menu.money = " + _0x1acc48);
    }
  }
});
global.CloseATM = function () {
  if (ATMOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bank_menu.show = false;");
    ATMOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseATM", () => {
  CloseATM();
});
mp.events.add("ATM_Error", _0x3a822c => {
  if (ATMOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x3a822c + "');");
  }
});