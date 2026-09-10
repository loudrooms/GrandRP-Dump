global.StorageOpened = false;
mp.events.add("storeAuction.showMenu", (_0x1d62c3, _0x7b621c) => {
  if (GlobalCheck() != 1) {
    main_browser.execute("\n        APPS.state.storehouseAuction.items = " + JSON.stringify(_0x1d62c3) + ";\n        APPS.state.storehouseAuction.subscribe = " + _0x7b621c + ";\n        APPS.state.storehouseAuction.show = true;\n    ");
    StorageOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.CloseStorage = function () {
  if (StorageOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.storehouseAuction.show = false;");
    StorageOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("storehouseAuction.closeMenu");
  }
};
mp.events.add("storehouseAuction.updateItems", _0x2813bd => {
  if (StorageOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.storehouseAuction.items = " + JSON.stringify(_0x2813bd) + ";");
  }
});
mp.events.add("storehouseAuction.subscribe", () => {
  if (StorageOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("storehouseAuction.subscribe");
    }
  }
});
mp.events.add("storehouseAuction.changeSubscribe", _0x2d8ce0 => {
  if (StorageOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.storehouseAuction.subscribe = " + _0x2d8ce0);
  }
});
mp.events.add("storehouseAuction.makeBet", (_0xd3b337, _0x2988ba) => {
  if (StorageOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("storehouseAuction.makeBet", _0xd3b337, _0x2988ba);
    }
  }
});