global.BizMenuOpened = false;
mp.events.add("OpenBizMenu", (_0x11f232, _0x31b564, _0x383de6) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x8122c9 = "{\"business\":" + _0x11f232 + ",\"business_state\":" + _0x31b564 + ",\"biz_profits\":[" + _0x383de6 + "],\"show\":true}";
  main_browser.execute("APPS.state.business_info = " + _0x8122c9);
  BizMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseOpenBizMenu = function () {
  if (BizMenuOpened) {
    main_browser.execute("APPS.state.business_info.show = false;");
    BizMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("CloseBizMenu", () => {
  CloseOpenBizMenu();
});
mp.events.add("BizMenu_Error", _0x38c875 => {
  if (BizMenuOpened) {
    main_browser.execute("APP.sendErrorMessage('" + _0x38c875 + "');");
  }
});
mp.events.add("Client_BusinessInteract", _0xd598f8 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("BusinessInteractServer", _0xd598f8);
  }
});
global.BizBuyOpened = false;
let BizBuyBrowser = null;
let biz_type = 0;
mp.events.add("OpenBizBuy", (_0x161591, _0x1567c2, _0x4da3b5, _0x70e046, _0x22e944, _0x3afbc7, _0x26ee78 = 0, _0xac6001 = 0, _0x2bb41d = "", _0x105f90 = 0, _0x4f3fa0 = 0, _0x300832 = 0, _0x55f0a1 = 0, _0x3ab54e = 0) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x43e02d;
  _0x43e02d = curr_lang == "ru" ? "{\"BizName\":'" + _0x1567c2 + "',\"Name\":'" + _0x4da3b5 + "',\"cost\":" + _0x70e046 + ",\"price\":" + _0x22e944 + ",\"BizID\":" + _0x3afbc7 + ",\"fam\":" + _0x26ee78 + ",\"biz_fam\":" + _0xac6001 + ",\"fam_name\":'" + _0x2bb41d + "',\"biz_money\":" + _0x105f90 + ",\"tax_free\":" + _0x4f3fa0 + ",\"member\":" + _0x300832 + ",\"mafia_business\": " + (_0x55f0a1 += 14) + ", \"mafia_money\": " + _0x3ab54e + ",\"show\":true}" : "{\"BizName\":'" + _0x1567c2 + "',\"Name\":'" + _0x4da3b5 + "',\"cost\":" + _0x70e046 + ",\"price\":" + _0x22e944 + ",\"BizID\":" + _0x3afbc7 + ",\"fam\":" + _0x26ee78 + ",\"biz_fam\":" + _0xac6001 + ",\"fam_name\":'" + _0x2bb41d + "',\"biz_money\":" + _0x105f90 + ",\"tax_free\":" + _0x4f3fa0 + ",\"member\":" + _0x300832 + ",\"show\":true}";
  if (_0x161591 == 4) {
    main_browser.execute("APPS.state.biz_engine_maintenance = " + _0x43e02d);
  } else if (_0x161591 == 5) {
    main_browser.execute("APPS.state.biz_shop = " + _0x43e02d);
  } else if (_0x161591 == 6) {
    main_browser.execute("APPS.state.biz_shop_clothes = " + _0x43e02d);
  } else if (_0x161591 == 7) {
    main_browser.execute("APPS.state.biz_barber = " + _0x43e02d);
  } else if (_0x161591 == 8) {
    main_browser.execute("APPS.state.biz_service_station = " + _0x43e02d);
  } else if (_0x161591 == 9) {
    main_browser.execute("APPS.state.biz_tatoo = " + _0x43e02d);
  } else if (_0x161591 == 10) {
    main_browser.execute("APPS.state.biz_ammo = " + _0x43e02d);
  } else if (_0x161591 == 11) {
    main_browser.execute("APPS.state.biz_bar = " + _0x43e02d);
  } else if (_0x161591 == 12) {
    main_browser.execute("APPS.state.biz_jewerely = " + _0x43e02d);
  } else if (_0x161591 == 13) {
    main_browser.execute("APPS.state.biz_car_share = " + _0x43e02d);
  } else if (_0x161591 == 14) {
    main_browser.execute("APPS.state.biz_parking = " + _0x43e02d);
  } else if (_0x161591 == 22) {
    main_browser.execute("APPS.state.biz_casino = " + _0x43e02d);
  } else if (_0x161591 == 24) {
    main_browser.execute("APPS.state.biz_shop = " + _0x43e02d);
  }
  biz_type = _0x161591;
  BizBuyOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseOpenBizBuy = function () {
  if (BizBuyOpened) {
    main_browser.execute("APPS.state.biz_ammo.show = false");
    if (biz_type == 4) {
      main_browser.execute("APPS.state.biz_engine_maintenance.show = false;");
    } else if (biz_type == 5) {
      main_browser.execute("APPS.state.biz_shop.show = false;");
    } else if (biz_type == 6) {
      main_browser.execute("APPS.state.biz_shop_clothes.show = false;");
    } else if (biz_type == 7) {
      main_browser.execute("APPS.state.biz_barber.show = false;");
    } else if (biz_type == 8) {
      main_browser.execute("APPS.state.biz_service_station.show = false;");
    } else if (biz_type == 9) {
      main_browser.execute("APPS.state.biz_tatoo.show = false;");
    } else if (biz_type == 10) {
      main_browser.execute("APPS.state.biz_ammo.show = false;");
    } else if (biz_type == 11) {
      main_browser.execute("APPS.state.biz_bar.show = false;");
    } else if (biz_type == 12) {
      main_browser.execute("APPS.state.biz_jewerely.show = false;");
    } else if (biz_type == 13) {
      main_browser.execute("APPS.state.biz_car_share.show = false;");
    } else if (biz_type == 14) {
      main_browser.execute("APPS.state.biz_parking.show = false;");
    } else if (biz_type == 22) {
      main_browser.execute("APPS.state.biz_casino.show = false;");
    } else if (biz_type == 24) {
      main_browser.execute("APPS.state.biz_shop = false");
    }
    BizBuyOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("ServerCloseBizBuy");
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("CloseBizBuy", () => {
  CloseOpenBizMenu();
});
mp.events.add("UpdateBuyBiz", (_0x523927, _0x282bfb, _0x3f4b37, _0x482929, _0x4e7d75, _0x417c8f = 0, _0x27c58d = 0) => {
  if (!BizBuyOpened) {
    return;
  }
  const _0x3de327 = "{\"BizName\":'" + _0x523927 + "',\"Name\":'" + _0x282bfb + "',\"cost\":" + _0x3f4b37 + ",\"price\":" + _0x482929 + ",\"BizID\":" + _0x4e7d75 + ",\"tax_free\":" + _0x417c8f + ",\"member\":" + _0x27c58d + ",\"show\":true}";
  if (biz_type == 4) {
    main_browser.execute("APPS.state.biz_engine_maintenance  = " + _0x3de327);
  } else if (biz_type == 5) {
    main_browser.execute("APPS.state.biz_shop  = " + _0x3de327);
  } else if (biz_type == 6) {
    main_browser.execute("APPS.state.biz_shop_clothes  = " + _0x3de327);
  } else if (biz_type == 7) {
    main_browser.execute("APPS.state.biz_barber  = " + _0x3de327);
  } else if (biz_type == 8) {
    main_browser.execute("APPS.state.biz_service_station  = " + _0x3de327);
  } else if (biz_type == 9) {
    main_browser.execute("APPS.state.biz_tatoo  = " + _0x3de327);
  } else if (biz_type == 10) {
    main_browser.execute("APPS.state.biz_ammo  = " + _0x3de327);
  } else if (biz_type == 11) {
    main_browser.execute("APPS.state.biz_bar = " + _0x3de327);
  } else if (biz_type == 12) {
    main_browser.execute("APPS.state.biz_jewerely = " + _0x3de327);
  } else if (biz_type == 13) {
    main_browser.execute("APPS.state.biz_car_share = " + _0x3de327);
  } else if (biz_type == 14) {
    main_browser.execute("APPS.state.biz_parking = " + _0x3de327);
  } else if (biz_type == 22) {
    main_browser.execute("APPS.state.biz_casino = " + _0x3de327);
  } else if (biz_type == 24) {
    main_browser.execute("APPS.state.biz_shop = " + _0x3de327);
  }
});
mp.events.add("UpdateBusinessFamMoney", _0x10d881 => {
  if (BizBuyOpened) {
    if (biz_type == 4) {
      main_browser.execute("APPS.state.biz_engine_maintenance.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 5) {
      main_browser.execute("APPS.state.biz_shop.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 6) {
      main_browser.execute("APPS.state.biz_shop_clothes.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 7) {
      main_browser.execute("APPS.state.biz_barber.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 8) {
      main_browser.execute("APPS.state.biz_service_station.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 9) {
      main_browser.execute("APPS.state.biz_tatoo.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 10) {
      main_browser.execute("APPS.state.biz_ammo.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 11) {
      main_browser.execute("APPS.state.biz_bar.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 12) {
      main_browser.execute("APPS.state.biz_jewerely.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 13) {
      main_browser.execute("APPS.state.biz_car_share.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 14) {
      main_browser.execute("APPS.state.biz_parking.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 22) {
      main_browser.execute("APPS.state.biz_casino.biz_money = " + _0x10d881 + ";");
    } else if (biz_type == 24) {
      main_browser.execute("APPS.state.biz_shop.biz_money = " + _0x10d881);
    }
  }
});
mp.events.add("UpdateBusinessMafiaMoney", _0x5df74a => {
  if (BizBuyOpened) {
    if (biz_type == 4) {
      main_browser.execute("APPS.state.biz_engine_maintenance.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 5) {
      main_browser.execute("APPS.state.biz_shop.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 6) {
      main_browser.execute("APPS.state.biz_shop_clothes.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 7) {
      main_browser.execute("APPS.state.biz_barber.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 8) {
      main_browser.execute("APPS.state.biz_service_station.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 9) {
      main_browser.execute("APPS.state.biz_tatoo.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 10) {
      main_browser.execute("APPS.state.biz_ammo.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 11) {
      main_browser.execute("APPS.state.biz_bar.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 12) {
      main_browser.execute("APPS.state.biz_jewerely.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 13) {
      main_browser.execute("APPS.state.biz_car_share.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 14) {
      main_browser.execute("APPS.state.biz_parking.mafia_money = " + _0x5df74a + ";");
    } else if (biz_type == 22) {
      main_browser.execute("APPS.state.biz_casino.mafia_money = " + _0x5df74a + ";");
    }
  }
});
mp.events.add("Client_GetBusinessMafiaMoney", () => {
  if (BizBuyOpened || AzsOpened || ElectricAZSOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetBusinessMafiaMoney");
    }
  }
});
mp.events.add("BizBuy_Error", _0xcbbddb => {
  if (BizBuyOpened || AzsOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xcbbddb + "');");
  }
});
mp.events.add("Client_BuyBussiness", () => {
  if (BizBuyOpened) {
    if (!(new Date().getTime() - lastCheck < 1500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("BusinessBuyInteractServer");
    }
  }
});
mp.events.add("Client_GetBusinessFamMoney", () => {
  if (BizBuyOpened || AzsOpened || ElectricAZSOpened || BizinfoOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetBusinessFamMoney");
    }
  }
});
mp.events.add("Client_LockBusiness", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LockBusiness");
  }
});
global.at_biz = false;
mp.events.add("InfoBusiness", _0x1b980e => {
  at_biz = _0x1b980e;
});
global.at_azs = false;
mp.events.add("inAZS", _0x1b5c67 => {
  if (_0x1b5c67 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_azs = _0x1b5c67;
});
global.at_electro_azs = false;
mp.events.add("inElectroAZS", _0x2b5927 => {
  if (_0x2b5927 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_electro_azs = _0x2b5927;
});
global.BizinfoOpened = false;
mp.events.add("Client_OpenBizinfo", (_0x2e3970, _0x47a8f7, _0x8c392f = 0, _0x252186 = 0, _0x73ab35 = 0) => {
  if (BizinfoOpened) {
    return;
  }
  const _0x466538 = "{\"owner\":'" + _0x2e3970 + "',\"biz_id\":'" + _0x47a8f7 + "',\"playerFam\":'" + _0x8c392f + "',\"famOwner\":'" + _0x252186 + "', \"playerOrgId\":'" + _0x73ab35 + "',\"show\":true}";
  main_browser.execute("APPS.state.bizinfo = " + _0x466538);
  BizinfoOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseBizinfo", () => {
  CloseBizinfo();
});
global.CloseBizinfo = function () {
  if (BizinfoOpened) {
    main_browser.execute("APPS.state.bizinfo.show = false");
    BizinfoOpened = false;
    SwitchHUDToDesign(false);
  }
};