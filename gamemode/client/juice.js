global.JuiceShopOpened = false;
mp.events.add("Client_ShowJuiceShop", (_0x27323c, _0x14fa7f, _0x34828e, _0x2dfe6a, _0x48bb97) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x338521 = "{\"owner\":'" + _0x27323c + "',\"fam_owner\":'" + _0x14fa7f + "',\"is_fam_owner\":" + _0x34828e + ",\"discount\":" + _0x2dfe6a + ",\"fam_money\":" + _0x48bb97 + ",\"show\":true}";
  main_browser.execute("APPS.state.juice = " + _0x338521);
  JuiceShopOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseJuice = function () {
  if (JuiceShopOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.juice.show = false;");
    JuiceShopOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseJuiceShop", CloseJuice);
mp.events.add("Client_GetFamilyJuiceProfit", () => {
  if (JuiceShopOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetFamilyJuiceProfit");
    }
  }
});
mp.events.add("Client_LoadJuiceProducts", () => {
  if (JuiceShopOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadJuiceProducts");
    }
  }
});
mp.events.add("Client_RobberyJuiceShop", () => {
  if (JuiceShopOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RobberyJuiceShop");
    }
  }
});
mp.events.add("Client_BuyJuiceFromShow", _0x43cd29 => {
  if (JuiceShopOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyJuiceFromShop", _0x43cd29);
    }
  }
});
mp.events.add("Client_UpdateJuicesFamilyBalance", _0x57f0d5 => {
  if (JuiceShopOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.juice.fam_money = " + _0x57f0d5 + ";");
  }
});
global.at_juice_shop = false;
mp.events.add("Client_JuiceInteract", _0x3e4d80 => {
  if (_0x3e4d80 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_juice_shop = _0x3e4d80;
});