function removeGift() {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestRemoveValentineBox");
  }
}
global.februaryDesignOpened = false;
global.valentineOpened = false;
mp.events.add("Client_OpenFebruaryMainDesign", (_0x3156ea, _0x90e1c8, _0x1af2ba, _0x5fc79d, _0x242dbd, _0x20b748) => {
  if (!!loggedin && !chatActive && !februaryDesignOpened && !GlobalCheck()) {
    main_browser.execute("\n        APPS.state.valentines_heart.februaryTasks = " + JSON.stringify(_0x3156ea) + ";\n        APPS.state.valentines_heart.completedTasks = " + JSON.stringify(_0x90e1c8) + ";\n        APPS.state.valentines_heart.collectedReward = " + _0x1af2ba + ";\n        APPS.state.valentines_heart.dayOnline = " + _0x5fc79d + ";\n        APPS.state.valentines_heart.sentValentine = " + _0x242dbd + ";\n        APPS.state.valentines_heart.balance = " + _0x20b748 + ";\n        APPS.state.valentines_heart.show = true;\n    ");
    februaryDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.add("Client_CloseFebruaryDesign", () => {
  closeFebruaryDesign();
});
global.closeFebruaryDesign = function () {
  if (loggedin && !chatActive && februaryDesignOpened) {
    main_browser.execute("APPS.state.valentines_heart.show = false;");
    februaryDesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_OpenValentine", (_0x5ba284, _0x3ef67a = undefined, _0x434e35 = undefined) => {
  CloseBrowsers();
  if (_0x5ba284 == 1 || _0x5ba284 == 3) {
    main_browser.execute("APPS.state.valentine.type = 'outgoing';\n            APPS.state.valentine.message = '';\n            APPS.state.valentine.senderName = '';\n            APPS.state.valentine.show = true;    \n        ");
  } else if (_0x5ba284 == 2) {
    main_browser.execute("APPS.state.valentine.type = 'incoming';\n            APPS.state.valentine.message = '" + _0x434e35 + "';\n            APPS.state.valentine.senderName = '" + _0x3ef67a + "';\n            APPS.state.valentine.show = true;\n        ");
  }
  main_browser.execute("APPS.state.valentine.state = " + _0x5ba284);
  valentineOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseValentine", () => {
  closeValentineDesign();
});
global.closeValentineDesign = function () {
  if (loggedin && !chatActive && valentineOpened) {
    main_browser.execute("APPS.state.valentine.show = false;");
    valentineOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_RequestSendValentine", (_0x5eb834, _0xcdf0d4) => {
  if (loggedin && !chatActive && valentineOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestSendValentine", _0x5eb834, _0xcdf0d4);
    }
  }
});
mp.events.add("Client_CollectValentineReward", () => {
  if (loggedin && !chatActive && februaryDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CollectValentineReward");
    }
  }
});
mp.events.add("Client_RequestBuyValentine", () => {
  if (loggedin && !chatActive && februaryDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyValentine");
    }
  }
});
mp.events.add("Client_UpdateCollectedFebruaryReward", _0x428312 => {
  main_browser.execute("APPS.state.valentines_heart.collectedReward = " + _0x428312 + ";");
});
mp.events.add("Client_RequestSendDailyValentine", () => {
  if (loggedin && !chatActive && februaryDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestSendDailyValentine");
    }
  }
});
mp.events.add("Client_BindGiftCancel", _0x40bee2 => {
  if (_0x40bee2) {
    closeValentineDesign();
    mp.keys.bind(88, false, removeGift);
  } else {
    mp.keys.unbind(88, false, removeGift);
  }
});