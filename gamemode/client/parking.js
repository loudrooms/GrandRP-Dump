global.ParkingOpened = false;
mp.events.add("Client_ShowParking", (_0x1475ee, _0x52cf5f, _0x192b84, _0x2df2ae, _0x1a62e1, _0x88cbbc) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x2e80a9 = "{\"park_name\":'" + _0x1475ee + "',\"free_space\":" + _0x52cf5f + ",\"park_cost\":" + _0x192b84 + ",\"balance\":" + _0x2df2ae + ",\"park_owners\":" + _0x1a62e1 + ",\"is_my_parking\":" + _0x88cbbc + ",\"show\":true}";
  main_browser.execute("APPS.state.parking = " + _0x2e80a9);
  ParkingOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseParking = function (_0x461e62 = true) {
  if (ParkingOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.parking.show = false;");
    ParkingOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x461e62) {
      mp.events.callRemote("Server_CloseParking");
    }
  }
};
mp.events.add("Client_CallParkingVehicle", () => {
  if (ParkingOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CallParkingVehicle");
    }
  }
});
mp.events.add("Client_ExtendParkingDays", () => {
  if (ParkingOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ExtendParkingDays");
    }
  }
});
mp.events.add("Client_CancelParkingSpace", () => {
  if (ParkingOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CancelParkingSpace");
    }
  }
});
mp.events.add("Client_BuyParkingSpace", _0x238005 => {
  if (ParkingOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyParkingSpace", _0x238005);
    }
  }
});
mp.events.add("Client_CloseParking", (_0x1a3eea = true) => {
  if (ParkingOpened && loggedin && !chatActive) {
    CloseParking(_0x1a3eea);
  }
});