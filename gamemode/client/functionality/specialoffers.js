let doubleDonationInterval;
mp.events.add("Client_RequestBuySpecialOffer", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuySpecialOffer");
    }
  }
});
let hintCounter = 0;
global.doubleDonationOfferActive = false;
mp.events.add("Client_StartDoubleDonationForNewbie", (_0x546fa9, _0x445b58) => {
  main_browser.execute("APPS.state.hud.doubleDonationOffer = " + _0x445b58 + ";");
  doubleDonationOfferActive = true;
  if (doubleDonationInterval != null) {
    clearInterval(doubleDonationInterval);
    doubleDonationInterval = undefined;
    hintCounter = 0;
  }
  doubleDonationInterval = setInterval(() => {
    main_browser.execute("APPS.state.hud.timeleftUntilRestart = " + _0x546fa9);
    _0x546fa9 -= 1000;
    hintCounter++;
    if (hintCounter % 1800 == 0) {
      HintShow(language["Приобретите гранд коины до 4 утра и получите двойное пополнение"][curr_lang]);
    }
  }, 1000);
});
mp.events.add("Client_RemoveDoubleDonationOffer", () => {
  if (doubleDonationInterval != null) {
    clearInterval(doubleDonationInterval);
    doubleDonationInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.doubleDonationOffer = undefined;");
});
global.hudx2Announcement = false;
mp.events.add("Client_Showx2Announcement", _0x2af4e1 => {
  if (!hudx2Announcement) {
    if (doubleDonationInterval != null) {
      clearInterval(doubleDonationInterval);
      doubleDonationInterval = undefined;
    }
    doubleDonationInterval = setInterval(() => {
      main_browser.execute("APPS.state.hud.timeleftUntilRestart = " + _0x2af4e1);
      _0x2af4e1 -= 1000;
    }, 1000);
    main_browser.execute("APPS.state.hudx2announcement.show = true;");
    hudx2Announcement = true;
    mp.gui.cursor.show(true, true);
  }
});
global.closehudx2Announcement = function () {
  if (hudx2Announcement) {
    main_browser.execute("APPS.state.hudx2announcement.show = false;");
    hudx2Announcement = false;
    mp.gui.cursor.show(false, false);
    mp.events.callRemote("Server_RequestShowSpecialOffer");
  }
};
mp.events.add("Client_Closex2Announcement", (_0x5349be = true) => {
  if (!_0x5349be) {
    HintShow(language["Приобретите гранд коины до 4 утра и получите двойное пополнение"][curr_lang]);
  }
  closehudx2Announcement();
});
global.specialOfferOpened = false;
let showNextDesign = false;
mp.events.add("Client_ShowSpecialOffer", (_0x3c13e8, _0x41c2bc = false) => {
  if (specialOfferOpened) {
    return;
  }
  let _0x5aabcb = 0;
  if (localplayer.model != 1885233650) {
    _0x5aabcb = 1;
  }
  main_browser.execute("APPS.state.limited_offer.gender = " + _0x5aabcb + ";");
  main_browser.execute("APPS.state.limited_offer.timeleft = " + _0x3c13e8 + ";");
  main_browser.execute("APPS.state.limited_offer.show = true;");
  specialOfferOpened = true;
  SwitchHUDToDesign(true);
  if (_0x41c2bc) {
    showNextDesign = true;
  }
});
global.closeSpecialOffer = function () {
  if (specialOfferOpened) {
    main_browser.execute("APPS.state.limited_offer.show = false;");
    specialOfferOpened = false;
    if (!inLobby) {
      SwitchHUDToDesign(false);
      if (showNextDesign) {
        showNextDesign = false;
        mp.events.callRemote("Server_RequestShowDesignAfterLogin");
      }
    }
  }
};
mp.events.add("Client_CloseSpecialOffer", (_0x317149 = true) => {
  if (!_0x317149) {
    HintShow(language["Откройте меню на клавишу M, чтобы приобрести специальное предложение"][curr_lang]);
  }
  closeSpecialOffer();
});