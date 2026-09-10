global.HotDogOpened = false;
mp.events.add("HotDogJobBrowser", (_0x4cae15, _0x28ab1a) => {
  const _0xbbc871 = "{\"count\":" + _0x28ab1a + ",\"job\":" + _0x4cae15 + ",\"show\":true}";
  main_browser.execute("APPS.state.work_hotdog = " + _0xbbc871);
  HotDogOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("HotDogJobChangeButton", _0x5c4732 => {
  main_browser.execute("APPS.state.work_hotdog.job = " + _0x5c4732);
});
mp.events.add("Hot_Error", _0xcdc110 => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0xcdc110 + "');");
});
mp.events.add("HotDogJobEvent", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("HotDogJobEventServer");
  }
});
global.CloseHotDogJob = function () {
  if (HotDogOpened) {
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_hotdog.show = false;");
    HotDogOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
  }
};
global.can_call_hotdog_orders = false;
mp.events.add("Client_CanCallHotDogOrders", _0x165ea6 => {
  can_call_hotdog_orders = _0x165ea6;
});