global.SantasGiftsOpened = false;
mp.events.add("Client_OpenChristmasGiftsCorrect", (_0x50f3f0, _0x17da52, _0x192dc2) => {
  if (GlobalCheck() == 1 && SantasGiftsOpened == 0) {
    return;
  }
  let _0x19c594 = 0;
  if (localplayer.model != 1885233650) {
    _0x19c594 = 1;
  }
  const _0x45efbf = "{\"percent1\":" + _0x50f3f0 + ",\"percent2\":" + _0x17da52 + ",\"time\":" + _0x192dc2 + ",\"gender\":" + _0x19c594 + ",\"show\":true}";
  main_browser.execute("APPS.state.christmas_persents = " + _0x45efbf);
  SantasGiftsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseSantasGift = function () {
  if (SantasGiftsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.christmas_persents.show = false;");
    SantasGiftsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_OpenChristmasGiftBox", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenChristmasGiftBox");
  }
});
mp.events.add("Client_ClaimChristmasBoxInstant", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ClaimChristmasBoxInstant");
  }
});
mp.events.add("Client_ChristmasUpdatePercents", _0x296ed2 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChristmasUpdatePercents", _0x296ed2);
  }
});
mp.events.add("Client_UpdateChristmasGiftTime", _0x56669b => {
  main_browser.execute("APPS.state.christmas_persents.time = " + _0x56669b);
});
mp.events.add("Client_UpdateChristmasPercents", (_0x40937c, _0x9c60b1) => {
  main_browser.execute("APPS.state.christmas_persents.percent1 = " + _0x40937c);
  main_browser.execute("APPS.state.christmas_persents.percent2 = " + _0x9c60b1);
});