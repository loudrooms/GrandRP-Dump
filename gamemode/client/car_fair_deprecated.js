global.CarMarketOpened = false;
global.CarMarketShow = false;
mp.events.add("Client_OpenCarFairList", (_0x4467cf, _0x3b2f50, _0x5bd681) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0xbf5f33 = "{\"board_items\":" + JSON.stringify(_0x4467cf) + ",\"can_edit\":" + _0x3b2f50 + ",\"fav_list\":[" + _0x5bd681 + "],\"searchedName\":'',\"show\":true}";
  main_browser.execute("APPS.state.carmarket = " + _0xbf5f33);
  CarMarketOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCarFairList = function () {
  if (CarMarketOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.carmarket.show = false;");
    CarMarketOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseCarFairList");
  }
};
mp.events.add("Client_CarFairLoadMore", () => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CarFairLoadMore");
    }
  }
});
mp.events.add("Client_FilterCarFairList", (_0x29dc59, _0x1ba241, _0x50591d, _0x2e408c, _0xac1b92) => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FilterCarFairList", _0x29dc59, _0x1ba241, _0x50591d, _0x2e408c, _0xac1b92);
    }
  }
});
mp.events.add("Client_LoadMoreADsOnFairList", (_0x440462, _0xe0a66d = false) => {
  if (_0xe0a66d) {
    main_browser.execute("APPS.state.carmarket.board_items = [];");
  }
  main_browser.execute("APPS.state.carmarket.board_items = APPS.state.carmarket.board_items.concat(" + JSON.stringify(_0x440462) + ")");
});
mp.events.add("Client_AddFavCarFairList", _0x5f313d => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddFavCarFairList", _0x5f313d);
    }
  }
});
mp.events.add("Client_UpdateFavCarFairList", _0x28f049 => {
  if (CarMarketOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.carmarket.fav_list = [" + _0x28f049 + "];");
  }
});
mp.events.add("Client_EditCarFairPostFromBoard", _0x5f0a22 => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EditCarFairPostFromBoard", _0x5f0a22);
    }
  }
});
mp.events.add("Client_CloseCarMarket", () => {
  if (CarMarketOpened && loggedin && !chatActive) {
    CloseCarFairList();
  }
});
mp.events.add("Client_ViewCarFair", (_0x193b9a, _0x3a2b28) => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ViewCarFair", _0x193b9a, _0x3a2b28);
    }
  }
});
const vehicle_poses = [-44.989, -1097.76, 25.816, 0.077, 0.002, 109.22];
function OpenViewCar() {
  if (GlobalCheck() != 1) {
    CarMarketShow = true;
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(vehicle_poses[0], vehicle_poses[1], vehicle_poses[2]), new mp.Vector3(vehicle_poses[0], vehicle_poses[1], vehicle_poses[2]), new mp.Vector3(-3.5, 4.5, 1.5), vehicle_poses[5], [0, 0], [-0.8, 1.8], 5);
    mp.game.cam.renderScriptCams(true, false, 3000, true, false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
}
global.CloseCarMarketShow = function () {
  if (CarMarketShow != 0) {
    CarMarketShow = false;
    if (hudswitch == 0) {
      mp.game.ui.displayRadar(true);
    }
    InteractiveCamera.stop();
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    mp.events.callRemote("Server_OpenCarFairList");
  }
};
mp.events.add("Client_ShowCarFair", () => {
  if (CarMarketOpened && loggedin && !chatActive) {
    CloseCarFairList();
    OpenViewCar();
  }
});
mp.events.add("Client_CallFromCarFairList", _0x315dde => {
  if (_0x315dde) {
    CloseCarFairList();
    _0x315dde = parseInt(_0x315dde);
    SendCallFromDesign(_0x315dde);
  }
});
mp.events.add("Client_SMSFromCarFairList", _0x1f61a8 => {
  if (_0x1f61a8) {
    CloseCarFairList();
    _0x1f61a8 = parseInt(_0x1f61a8);
    SendSMSFromDesign(_0x1f61a8);
  }
});
mp.events.add("Client_PlaceAutoToCarFair", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PlaceAutoToCarFair");
  }
});
global.is_carfair_item_photo = false;
mp.events.add("Client_DoCarFairItemPhoto", _0x403399 => {
  at_mugshot_photo = _0x403399;
  OpenMobileCamera(14);
  is_carfair_item_photo = true;
});
mp.events.add("Client_SendCarFairItemDiscription", _0x5bc5e5 => {
  if (last_photo_url && at_mugshot_photo && MobileCameraOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendCarFairItemOnSale", at_mugshot_photo, last_photo_url, _0x5bc5e5);
  }
});
mp.events.add("Client_BuyCarFair", _0xb2b8e4 => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyCarFair", _0xb2b8e4);
    }
  }
});
mp.events.add("Client_EditCarFair", _0x240535 => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EditCarFair", _0x240535);
    }
  }
});
mp.events.add("Client_DeleteCarFair", _0x1a2454 => {
  if (CarMarketOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteCarFair", _0x1a2454);
    }
  }
});