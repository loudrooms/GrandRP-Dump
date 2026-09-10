global.DonateOpened = false;
global.DonateTargetVehicleModel = null;
mp.events.add("ShowDonate", (_0x8b1fb1, _0x22e3e9, _0x1333ba) => {
  if (GlobalCheck() && !inLobby) {
    return;
  }
  let _0x187d96 = 0;
  if (localplayer.model != 1885233650) {
    _0x187d96 = 1;
  }
  main_browser.execute("APPS.state.donateShop.playerid = " + _0x8b1fb1 + ";");
  main_browser.execute("APPS.state.donateShop.serverId = " + _0x22e3e9 + ";");
  main_browser.execute("APPS.state.donateShop.gender = " + _0x187d96 + ";");
  main_browser.execute("APPS.state.donateShop.show = true;");
  main_browser.execute("APPS.commit('donateShop/setBundlesProgress', " + JSON.stringify(_0x1333ba) + ");");
  DonateOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_UpdateCashbackData", _0x3f2441 => {
  main_browser.execute("APPS.state.donate.summer_cashback_progress_donate = " + _0x3f2441);
});
mp.events.add("Client_GoToRecycleDesignFromDonate", () => {
  CloseDonate();
  mp.events.callRemote("Server_OrderCraftItems");
});
mp.events.add("Client_GoToDonateFromRecycle", () => {
  CloseCraftItemMenu();
  mp.events.callRemote("Server_OpenShardCases");
});
global.CloseDonate = function () {
  if (inLobby && inLobbyModal) {
    return closeLobbyModal();
  }
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donateShop.show = false;");
    DonateOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (is_easter && need_to_back_easter_event) {
      ReturnEasterEventMenu();
    }
    if (is_new_update_showcase && need_to_back_newupdate_showcase) {
      ReturnNewUpdateMenu();
    }
    if (global.need_to_open_donate_menu == 1) {
      mp.events.callRemote("Server_OpenEveryDayPrize");
      global.need_to_open_donate_menu = false;
    }
    if (curr_lang == "ru") {
      if (inMinigamesRoulette) {
        inMinigamesRoulette = false;
        mp.events.callRemote("Server_CleanPlayerFromRoulette");
      }
      mp.events.callRemote("Server_StopCrashGame");
    }
  }
};
mp.events.add("Client_CloseDonateMenu", () => {
  CloseDonate();
});
global.CloseDonateByEsc = function () {
  if (DonateOpened) {
    main_browser.execute("this.AppComponents.donate.onClickEsc();");
  }
};
mp.events.add("Client_LogEnteringClothesShop", () => {
  if (DonateOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LogEnteringClothesShop");
  }
});
mp.events.add("RefreshDonate", () => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RefreshDonate");
  }
});
mp.events.add("Client_EnterCoupon", () => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EnterCoupon");
  }
});
mp.events.add("Client_BuyPack", (_0x4955c5, _0x4ddddc = 0, _0x103575 = 0) => {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyPack", _0x4955c5, _0x4ddddc, _0x103575);
  }
});
mp.events.add("BuyBossCoins", () => {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerBossCoins");
  }
});
mp.events.add("Client_SwitchToDonateRoulette", () => {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SwitchToDonateRoulette", 4);
  }
});
mp.events.add("Client_BuyDonateCar", _0x1705c6 => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyDonateCar", _0x1705c6);
  }
});
mp.events.add("Client_CanTestDriveDonateCar", _0xf8688d => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CanTestDriveDonateCar", _0xf8688d);
  }
});
mp.events.add("Client_OpenCostumeCase", _0x2f5413 => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenCostumeCase", _0x2f5413);
  }
});
mp.events.add("Client_LoadCostumeVariables", _0x4f011b => {
  if (DonateOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadCostumeVariables", _0x4f011b);
  }
});
mp.events.add("Client_SuccessfullyLoadDonateCostumeVariables", (_0x204249, _0x2862f1, _0x1312b9) => {
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.roulette_sets = [" + JSON.stringify(_0x204249) + "," + JSON.stringify(_0x2862f1) + "];");
    main_browser.execute("APPS.state.donate.tabContent = " + _0x1312b9 + ";");
    main_browser.execute("APPS.state.donate.tab = 8;");
  }
});
mp.events.add("Client_StartCostumeRoulette", (_0x571be3, _0x17167f, _0x2dfc72) => {
  if (DonateOpened && loggedin && !chatActive) {
    if (_0x2dfc72 != null) {
      main_browser.execute("APPS.state.donate.roulette_set_change_index = " + _0x2dfc72);
    }
    main_browser.execute("APPS.state.donate.donate = " + _0x17167f);
    main_browser.execute("APPS.state.donate.roulette_set_win_index = " + _0x571be3 + ";");
  }
});
mp.events.add("Client_DonateRouteToNewShop", _0x225884 => {
  if (DonateOpened && loggedin && !chatActive) {
    if (_0x225884 == 1) {
      SetGPSLocation(-717.597, -157.041, 36.988, true);
    } else {
      SetGPSLocation(-534.574, -597.947, 41.43, true);
    }
    CloseDonate();
  }
});
mp.events.add("Donate_Error", _0x4ef107 => {
  if (DonateOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x4ef107 + "');");
  }
});
mp.events.add("Client_UpdateDonate", _0x6a248d => {
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.donate = " + _0x6a248d);
  }
});
mp.events.add("Client_UpdateCaseGrandPoints", _0x2744da => {
  main_browser.execute("APPS.state.donate.grandpoints = " + _0x2744da);
});
mp.events.add("Client_UpdateCasesInfoNew", (_0x4ee9b5, _0x585be8, _0x3259ba, _0xad78d, _0x5a6c2f) => {
  main_browser.execute("APPS.state.donate.grandpoints = " + _0x4ee9b5);
  main_browser.execute("APPS.state.donate.donate = " + _0x585be8);
  main_browser.execute("APPS.state.donate.money = " + _0x3259ba);
  main_browser.execute("APPS.state.donate.new_cases_exp = [" + _0xad78d + "];");
  main_browser.execute("APPS.state.donate.total_score = " + _0x5a6c2f);
});
mp.events.add("Client_UpdateCasesInfo", (_0x2ada6f, _0x44a7c3, _0x3a1004, _0x5e2c1b, _0x53b1cc) => {
  main_browser.execute("APPS.state.donate.grandpoints = " + _0x2ada6f);
  main_browser.execute("APPS.state.donate.donate = " + _0x44a7c3);
  main_browser.execute("APPS.state.donate.money = " + _0x3a1004);
  main_browser.execute("APPS.state.donate.case_exp = [" + _0x5e2c1b + "];");
  main_browser.execute("APPS.state.donate.total_score = " + _0x53b1cc);
  if (inLobby) {
    main_browser.execute("APPS.state.introLobby.userInfo.balance.donate = " + _0x44a7c3);
    main_browser.execute("APPS.state.introLobby.userInfo.balance.money = " + _0x3a1004);
  }
});
mp.events.add("Client_PlayOpenedCase", (_0x44d89b, _0x58ea59, _0x148b1b) => {
  if (loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.case_opened = " + _0x44d89b);
    main_browser.execute("APPS.state.donate.prize_need_collect = " + _0x58ea59);
    main_browser.execute("APPS.state.donate.prizegc = " + _0x148b1b);
    StartCustomSound("case_open", "sounds/cases/container_open.ogg", 0.2);
  }
});
mp.events.add("Client_PlayOpenedCaseNew", (_0x18d5b3, _0x561e89, _0x1360d7) => {
  if (loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.case_opened = " + _0x18d5b3);
    main_browser.execute("APPS.state.donate.prize_need_collectNew = " + _0x561e89);
    main_browser.execute("APPS.state.donate.prizegc = " + _0x1360d7);
    StartCustomSound("case_open", "sounds/cases/container_open.ogg", 0.2);
  }
});
mp.events.add("Client_UpdateNewbieMoneyOffer", (_0x67486f, _0x390f0b) => {
  if (DonateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate.newbie_money_offer_bought = " + _0x67486f);
    main_browser.execute("APPS.state.donate.accumulated_donate_for_money_offer = " + _0x390f0b);
  }
});
mp.events.add("Client_RequestOpenCaseRoulette", (_0x380e42, _0x36a159, _0x52080a, _0x58f0cc, _0x92147f = 0, _0x48cc09 = 0) => {
  if ((!!loggedin || !!inLobby) && !chatActive) {
    main_browser.execute("this.AppComponents.donate.caseRoulette.startSpin(" + _0x380e42 + ");");
    main_browser.execute("this.AppComponents.donate.caseRoulette.$set(APPS.state.donate.case_exp, " + _0x52080a + ", " + _0x36a159 + ");");
    main_browser.execute("APPS.state.donate.donate = " + _0x58f0cc);
    main_browser.execute("APPS.state.donate.easterCoinsBalance = " + _0x92147f);
    main_browser.execute("APPS.state.donate.battlepass_coins = " + _0x48cc09);
    main_browser.execute("AppComponents.donate.caseRoulette.$forceUpdate()");
    if (inLobby) {
      main_browser.execute("APPS.state.introLobby.userInfo.balance.donate = " + _0x58f0cc);
    }
  }
});
global.PrimeInfoOpened = false;
mp.events.add("Client_GoToPrimePageThroughDonate", () => {
  CloseReferalMenu();
  CloseMenu();
  CloseDonate();
  CloseVehicleShow();
  if (GlobalCheck()) {
    return;
  }
  main_browser.execute("APPS.state.primeinfo = {\"show\":true}");
  PrimeInfoOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.ClosePrimeInfo = function () {
  if (PrimeInfoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.primeinfo.show = false;");
    PrimeInfoOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ClosePrimeInfo", () => {
  ClosePrimeInfo();
});
mp.events.add("Client_DonateVehicleAction", _0x3fd52a => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DonateVehicleAction", _0x3fd52a);
  }
});
mp.events.add("Client_BuyGPCases", _0xd5d0bf => {
  if (!!DonateOpened && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyGPCases", _0xd5d0bf);
  }
});
mp.events.add("Client_OpenChristmasLottery", () => {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenChristmasLottery");
  }
});
mp.events.add("Client_GotoPrimeInDonate", () => {
  CloseBrowsers();
  if (VehShowRoomDisplayed) {
    CloseVehicleShow();
  }
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GotoPrimeInDonate");
  }
});
mp.events.add("Client_GotoCarsInDonate", () => {
  CloseBrowsers();
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GotoCarsInDonate");
  }
});
mp.events.add("Client_OpenLotteryFromDonate", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseNewDonateRoulette();
    CloseBrowsers();
    mp.events.callRemote("Server_OpenLotteryFromDonate");
  }
});