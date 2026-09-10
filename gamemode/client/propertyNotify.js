global.propertyNotifyOpened = false;
let lastPropertyType = null;
mp.events.add("Client_PropertyNotifyOpen", (_0x4e8291, _0x343f32) => {
  if (GlobalCheck() != 1) {
    lastPropertyType = _0x4e8291;
    main_browser.execute("APPS.state.propertyNotify = {...APPS.state.propertyNotify, type: '" + _0x4e8291 + "', ..." + JSON.stringify(_0x343f32) + ", show: true}");
    propertyNotifyOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.closePropertyNotify = function () {
  if (propertyNotifyOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.propertyNotify.show = false;");
    if (!inLobby) {
      propertyNotifyOpened = false;
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
      if (lastPropertyType === "property") {
        mp.events.callRemote("Server_ShowNextEnterDesign", 1, true);
      }
    }
  }
};
mp.events.add("Client_PropertyNotifyClose", closePropertyNotify);
mp.events.add("Client_GPSLocate", (_0x5c6bc0, _0x408a17) => {
  if (inLobby || propertyNotifyOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0x5c6bc0 == "parking") {
        mp.events.callRemote("GetClosestPlace", 9);
      } else if (_0x5c6bc0 == "atm") {
        mp.events.callRemote("GetClosestPlace", 6);
      } else if (_0x5c6bc0 == "house") {
        mp.events.callRemote("Server_LocateHouse", _0x408a17);
      } else if (_0x5c6bc0 == "office") {
        mp.events.call("Mobile_SetClosestPlace", -117.288, -604.491, 36.281);
      }
      closePropertyNotify();
    }
  }
});
mp.events.add("Client_PropertyNotifyPayHome", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerMobileBanking", 1, undefined);
  }
});