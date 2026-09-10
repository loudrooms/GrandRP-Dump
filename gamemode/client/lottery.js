global.LotteryOpened = false;
global.giftDesignOpened = false;
mp.events.add("Client_OpenTicket", _0x550197 => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x4ab4fe = "{\"lottery_prize_pool\":[-1,-1,-1,-1,-1,-1],\"lotteryType\":" + _0x550197 + ",\"win_state\":0,\"show\":true}";
  main_browser.execute("APPS.state.lottery = " + _0x4ab4fe);
  LotteryOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseLottery = function () {
  if (LotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery.show = false;");
    LotteryOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseLotteryTicket");
  }
};
mp.events.add("Client_LotteryStart", (_0x2bea97, _0x4af514) => {
  if (LotteryOpened && loggedin && !chatActive) {
    if (_0x2bea97 == 1) {
      mp.events.callRemote("Server_LoadTicketPrizes", _0x4af514);
    } else if (_0x2bea97 == 2) {
      mp.events.callRemote("Server_CheckSecondPrize", _0x4af514);
    }
  }
});
mp.events.add("Client_LotteryUpdateprizes", _0x2e7bf1 => {
  if (LotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery.lottery_prize_pool = [" + _0x2e7bf1 + "];");
  }
});
mp.events.add("Client_LotteryWinState", _0x2120b2 => {
  if (LotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery.win_state = " + _0x2120b2 + ";");
  }
});
mp.events.add("Client_OpenRouletteFromEventsMenu", (_0x44a6dd = false) => {
  if ((GlobalCheck() != 1 || EventMenuOpened != 0) && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseEventMenu();
    mp.events.callRemote("Server_RequestOpenDonateRoulette", 8, _0x44a6dd);
  }
});
mp.events.add("Client_CloseLotteryBill", () => {
  CloseLottery();
});
let lottery_timeout = null;
mp.events.add("Client_Lottery_Notify", (_0x55ee5a, _0x1738c3) => {
  if (loggedin) {
    if (lottery_timeout) {
      main_browser.execute("APPS.state.hud.lottery_show = false;");
      clearTimeout(lottery_timeout);
      lottery_timeout = null;
    }
    if (mp.storage.data.lottery_hint == 1) {
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      main_browser.execute("APPS.state.hud.lottery_name = '" + _0x55ee5a + "';");
      main_browser.execute("APPS.state.hud.lottery_prize_name = '" + _0x1738c3 + "';");
      main_browser.execute("APPS.state.hud.lottery_show = true;");
      lottery_timeout = setTimeout(() => {
        lottery_timeout = null;
        main_browser.execute("APPS.state.hud.lottery_show = false;");
      }, 5000);
    }
  }
});
let cases_timeout = null;
mp.events.add("Client_Cases_Notify", (_0x9d7499, _0x270b1a, _0x2cf804) => {
  if (loggedin) {
    if (cases_timeout) {
      main_browser.execute("APPS.state.hud.cases_show = false;");
      clearTimeout(cases_timeout);
      cases_timeout = null;
    }
    if (mp.storage.data.lottery_hint == 1) {
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      main_browser.execute("APPS.state.hud.cases_preview = " + _0x2cf804 + ";");
      main_browser.execute("APPS.state.hud.cases_name = '" + _0x9d7499 + "';");
      main_browser.execute("APPS.state.hud.cases_prize_name = '" + _0x270b1a + "';");
      main_browser.execute("APPS.state.hud.cases_show = true;");
      cases_timeout = setTimeout(() => {
        cases_timeout = null;
        main_browser.execute("APPS.state.hud.cases_show = false;");
      }, 5000);
    }
  }
});
let lottery_type;
let roulette_data;
let lottery_timeout_draw = null;
mp.events.add("Client_Lottery_NotifyDraw", (_0x280253, _0x188881) => {
  if (lottery_timeout_draw) {
    main_browser.execute("APPS.state.hud.lottery_show_draw = false;");
    clearTimeout(lottery_timeout_draw);
    lottery_timeout_draw = null;
  }
  if (lottery_timeout) {
    main_browser.execute("APPS.state.hud.lottery_show = false;");
    clearTimeout(lottery_timeout);
    lottery_timeout = null;
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  main_browser.execute("APPS.state.hud.lottery_name_draw = '" + _0x280253 + "';");
  main_browser.execute("APPS.state.hud.lottery_prize_name_draw = '" + _0x188881 + "';");
  main_browser.execute("APPS.state.hud.lottery_show_draw = true;");
  lottery_timeout_draw = setTimeout(() => {
    lottery_timeout_draw = null;
    main_browser.execute("APPS.state.hud.lottery_show_draw = false;");
  }, 5000);
});
global.NewLotteryOpened = false;
mp.events.add("Client_OpenLottery", (_0x5c3324, _0x13cb33, _0x35d9ab, _0x43b8ac, _0x47968e, _0x5ecae5, _0x5affdf, _0x195d21 = [], _0x504c1b = 0) => {
  const _0x5251c4 = "{\"gender\":" + _0x5affdf + ",\"modal\":1,\"finish_prize\":0,\"status\":0,\"page\":" + _0x5c3324 + ",\"donate\":" + _0x5ecae5 + ",\"lottery_prize_pool\":[-1,-1,-1,-1,-1],\"lottery_history\":" + JSON.stringify(_0x13cb33) + ",\"lottery_history2\":" + JSON.stringify(_0x35d9ab) + ",\"lottery_count\":" + _0x43b8ac + ",\"lottery_count2\":" + _0x47968e + ",\"lottery_count3\":" + _0x504c1b + ",\"lottery_history3\":" + JSON.stringify(_0x195d21) + ",\"show\":true}";
  main_browser.execute("APPS.state.new_lottery = " + _0x5251c4);
  lottery_type = _0x5c3324;
  NewLotteryOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
global.CloseNewLottery = function (_0x2b422 = true) {
  if (NewLotteryOpened && loggedin && !chatActive && _0x2b422 != 1) {
    main_browser.execute("APPS.state.new_lottery.show = false;");
    lottery_type = 0;
    NewLotteryOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x2b422 != 3) {
      mp.events.callRemote("Server_CloseLottery");
    }
  }
};
mp.events.add("Client_LotteryUpdatePrizePool", _0x4890db => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.lottery_prize_pool = [" + _0x4890db + "];");
  }
});
mp.events.add("Client_UpdateLotteryDonate", (_0x5c1976, _0x109726, _0x207a29, _0x3b3360 = 0) => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.donate = " + _0x5c1976 + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_count = " + _0x109726 + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_count2 = " + _0x207a29 + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_count3 = " + _0x3b3360 + ";");
  }
});
mp.events.add("Client_LotteryErrase", _0x58cfc1 => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LotteryEraseSlot", _0x58cfc1);
  }
});
mp.events.add("Client_NewLotteryWinState", _0x51a7ce => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.win_state = " + _0x51a7ce + ";");
  }
});
mp.events.add("Client_ShowFinishPrize", _0x3e0eeb => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.status = 1;");
    main_browser.execute("APPS.state.new_lottery.finish_prize = " + _0x3e0eeb + ";");
  }
});
mp.events.add("Client_ReloadLottery", (_0x4ef35e, _0x6bea41, _0x1d0932, _0x19a181, _0x1e7b4d) => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.status = 0;");
    main_browser.execute("APPS.state.new_lottery.finish_prize = 0;");
    main_browser.execute("APPS.state.new_lottery.lottery_prize_pool = [-1,-1,-1,-1,-1];");
    main_browser.execute("APPS.state.new_lottery.lottery_prize_pool2 = [-1,-1,-1,-1,-1];");
    main_browser.execute("APPS.state.new_lottery.lottery_count = " + _0x4ef35e + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_count2 = " + _0x6bea41 + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_history = " + JSON.stringify(_0x1d0932) + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_history2 = " + JSON.stringify(_0x19a181) + ";");
    main_browser.execute("APPS.state.new_lottery.lottery_history3 = " + JSON.stringify(_0x1e7b4d) + ";");
  }
});
mp.events.add("Client_SwitchLotteryState", _0x5b645d => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_SwitchLotteryState", _0x5b645d);
  }
});
mp.events.add("Client_ChangeLotteryState", _0x54ed34 => {
  if (NewLotteryOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_lottery.page = " + _0x54ed34 + ";");
  }
});
mp.events.add("Client_CloseNewLottery", () => {
  CloseNewLottery(3);
});
mp.events.add("Client_CloseOtherLottery", () => {
  CloseNewLottery(false);
});
global.LotteryBuyOpened = false;
global.CloseLotteryBuyDesign = function () {
  if (LotteryBuyOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery_buy.show = false;");
    LotteryBuyOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseLotteryTableDesign", () => {
  CloseLotteryBuyDesign();
});
global.CasesOpened = false;
mp.events.add("Client_OpenCases", (_0x783292, _0x542c83, _0x3c838d, _0x46f40d, _0x3d6934, _0x54b7c5, _0x137ebf, _0x6b3d39 = 0, _0x31ce02, _0x34513b) => {
  CloseDonate();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x42504d = "{\"opening\":0,\"gender\":" + _0x3d6934 + ",\"grandpoints\":" + _0x783292 + ",\"money\":" + _0x3c838d + ",\"grandcoins\":" + _0x542c83 + ",\"case_exp\":[" + _0x46f40d + "],\"total_score\":" + _0x54b7c5 + ",\"number\":" + _0x6b3d39 + ",\"day_night\":" + _0x137ebf + ",\"prize_need_collect\":0,\"case_opened\":0,\"discount_cases\":" + JSON.stringify(_0x31ce02) + ",\"weekly_cases\":[" + _0x34513b + "],\"show\":true}";
  main_browser.execute("APPS.state.cases = " + _0x42504d);
  CasesOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCases = function () {
  if (CasesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.cases.show = false;");
    CasesOpened = false;
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
  }
};
mp.events.add("Client_GetCasePrize", _0x48f8f6 => {
  if (loggedin && !chatActive) {
    mp.events.callRemote("Server_GetCasePrize", _0x48f8f6);
  }
});
mp.events.add("Client_GetCasePrizeNew", _0x3e804a => {
  if (loggedin && !chatActive) {
    mp.events.callRemote("Server_GetCasePrizeNew", _0x3e804a);
  }
});
mp.events.add("Client_GoToGrandPointsShop", () => {
  if (loggedin && !chatActive) {
    CloseCases();
    mp.events.callRemote("Server_OpenBirthdayDesign");
  }
});
mp.events.add("Client_OpenCase", (_0x174652, _0x29e09b) => {
  if ((!!loggedin || !!inLobby) && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenCase", _0x174652, parseInt(_0x29e09b) || 1);
  }
});
mp.events.add("Client_OpenCaseNew", _0x2aed86 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenCaseNew", _0x2aed86);
    }
  }
});
mp.events.add("Client_PlayCaseHoverSound", () => {
  StartCustomSound("case_hover", "sounds/cases/hover_new.ogg", 0.2);
});
mp.events.add("Client_PlayCostumeSlotHoverSound", () => {
  StartCustomSound("costume_slot", "sounds/cases/costume_slot.ogg", 0.1);
});
mp.events.add("Client_PlayCaseWinSound", () => {
  StartCustomSound("case_win", "sounds/cases/case_win.ogg", 0.2);
});
mp.events.add("Client_PlayCaseEnterSound", () => {
  StartCustomSound("case_enter", "sounds/cases/enter_case.ogg", 0.2);
});
global.DonateRouletteOpened = false;
mp.events.add("Client_OpenDonateRoulette", (_0x1218a9, _0x98de3d, _0x1e8c38, _0x59541b = 0, _0x12f647 = false) => {
  CloseDonate();
  if (GlobalCheck() == 1) {
    return;
  }
  roulette_data = undefined;
  if (_0x1e8c38 != null && _0x1e8c38 != null) {
    roulette_data = _0x1e8c38;
  }
  const _0x48c362 = "{\"donate\":" + _0x1218a9 + ",\"roulette_prize\": " + roulette_data + ", \"gender\": " + _0x98de3d + ",\"show\":true}";
  main_browser.execute("APPS.state.donate_roulette = " + _0x48c362);
  if (_0x59541b) {
    main_browser.execute("this.AppComponents.donate_roulette.select_roulette_number = " + _0x59541b);
  }
  if (_0x12f647) {
    main_browser.execute("this.AppComponents.donate_roulette.SwitchModalPage(1)");
  }
  DonateRouletteOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
mp.events.add("Client_CloseDonateRouletteDesign", () => {
  if (DonateRouletteOpened || can_close_rp_ticket) {
    CloseDonateRoulette();
  }
});
global.CloseDonateRoulette = function () {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.donate_roulette.show = false;");
    if (roulette_data != null && roulette_data != null) {
      mp.events.callRemote("Server_DonateRouletteTakeAllItem");
    }
    DonateRouletteOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_StartDonateRoulette", (_0x7785fa, _0x2e7ce3) => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenDonateRoulette", _0x7785fa, _0x2e7ce3);
    }
  }
});
global.can_close_rp_ticket = true;
mp.events.add("Client_CantCloseRPTicket", () => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    can_close_rp_ticket = false;
  }
});
mp.events.add("Client_RPTicketCanClose", () => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    can_close_rp_ticket = true;
  }
});
mp.events.add("Client_UpdateDonateRoulette", (_0x687c83, _0x2ed7bb, _0x4aedfe = false) => {
  roulette_data = undefined;
  if (_0x2ed7bb != null && _0x2ed7bb != null) {
    roulette_data = _0x2ed7bb;
  }
  main_browser.execute("APPS.state.donate_roulette.donate = " + _0x687c83);
  main_browser.execute("APPS.state.donate_roulette.roulette_prize = " + roulette_data + ";");
  if (_0x4aedfe == 1) {
    StartCustomSound("roulette_open", "sounds/roulette/roulette_start.wav", 0.2);
  }
});
mp.events.add("Client_PlayDonateRouletteSound", _0x58c6ac => {
  if (_0x58c6ac == 1) {
    StartCustomSound("roulette_tick", "sounds/roulette/roulette_spin.wav", 0.2);
  } else {
    StartCustomSound("roulette_finish", "sounds/roulette/roulette_stop.wav", 0.2);
  }
});
mp.events.add("Client_DonateRouletteSellItem", _0x4ac9d6 => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_DonateRouletteSellItem", _0x4ac9d6);
  }
});
mp.events.add("Client_DonateRouletteTakeItem", _0x12039 => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_DonateRouletteTakeItem", _0x12039);
  }
});
mp.events.add("Client_DonateRouletteTakeAllItem", _0x546d72 => {
  if (DonateRouletteOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DonateRouletteTakeAllItem", _0x546d72);
    }
  }
});
let donate_roulette_timeout = null;
mp.events.add("Client_DonateRoulette_Notify", (_0x5ea944, _0x2675ba) => {
  if (loggedin) {
    if (donate_roulette_timeout) {
      main_browser.execute("APPS.state.hud.cases_show = false;");
      clearTimeout(donate_roulette_timeout);
      donate_roulette_timeout = null;
    }
    if (mp.storage.data.lottery_hint == 1) {
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      main_browser.execute("APPS.state.hud.donate_roulette_name = '" + _0x5ea944 + "';");
      main_browser.execute("APPS.state.hud.donate_roulette_prize_name = '" + _0x2675ba + "';");
      main_browser.execute("APPS.state.hud.donate_roulette_notify = true;");
      donate_roulette_timeout = setTimeout(() => {
        donate_roulette_timeout = null;
        main_browser.execute("APPS.state.hud.donate_roulette_notify = false;");
      }, 5000);
    }
  }
});
global.RPTicketOpened = false;
mp.events.add("Client_OpenRPTicketNotif", () => {
  main_browser.execute("APPS.state.rpticket = {\"show\":true}");
  RPTicketOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseRPTicket = function () {
  if (RPTicketOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.rpticket.show = false;");
    RPTicketOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseRPTicketDesign", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseRPTicket();
  }
});
global.closeGiftDesign = function () {
  if (giftDesignOpened) {
    giftDesignOpened = false;
    main_browser.execute("APPS.state.giftOpening.show = false;");
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseGift", () => {
  closeGiftDesign();
});
mp.events.add("Client_OpenGiftDesign", _0x29b1fb => {
  CloseInv();
  if (GlobalCheck() == 1 || giftDesignOpened) {
    return;
  }
  _0x29b1fb = +_0x29b1fb;
  let _0x1f0829 = 0;
  if (localplayer.model != 1885233650) {
    _0x1f0829 = 1;
  }
  main_browser.execute("APPS.state.giftOpening.gender = " + _0x1f0829 + ";\n\t\tAPPS.state.giftOpening.giftIndex = " + _0x29b1fb + ";\n\t\tAPPS.state.giftOpening.show = true;\n\t");
  giftDesignOpened = true;
  SwitchHUDToDesign(true);
});
global.closeGiftLotteryDesign = function () {
  if (giftDesignOpened) {
    main_browser.execute("APPS.state.giftOpening.show = false;");
    giftDesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_RequestOpenGift", _0x13bffd => {
  if (giftDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestOpenGift", +_0x13bffd);
    }
  }
});
mp.events.add("Client_ConfirmGiftOpen", (_0x37018f, _0x249571, _0x50905e, _0x349936) => {
  const _0x3da237 = {
    item_id: _0x37018f,
    prerender_id: _0x249571,
    count: _0x50905e,
    type: _0x349936
  };
  if (_0x349936 === "ingrand_border") {
    _0x3da237.border_id = _0x37018f;
  }
  main_browser.execute("this.AppComponents.giftOpening.onServerConfirm();\n\t\tAPPS.state.giftOpening.openedGift = " + JSON.stringify(_0x3da237) + ";\n\t");
});
mp.events.add("Client_ClaimGift", () => {
  if (giftDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ClaimGift");
    }
  }
});