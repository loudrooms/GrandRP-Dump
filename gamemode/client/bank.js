const checkFlood = (_0x1fff1d = 500) => {
  if (!(new Date().getTime() - lastCheck < _0x1fff1d)) {
    lastCheck = new Date().getTime();
    return true;
  }
};
global.BankOpened = false;
global.OpenBank = function (_0x45aee7) {
  EndConversationFinally();
  if (GlobalCheck() != 1) {
    mp.events.callRemote("Server_BankOpen", _0x45aee7);
  }
};
mp.events.add("Client_BankOpen", (_0x5beaa6, _0x347c58, _0x37e8aa, _0x52df79, _0x5c10b7, _0x22064d, _0x1cfbcb, _0x3ff809, _0x5f3504, _0x1bec71) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x37a96b = {
    pid: _0x5beaa6,
    gender: _0x347c58,
    nickname: localplayer.name.replace("_", " "),
    banknumber: _0x5beaa6,
    bankmoney: String(_0x37e8aa),
    money: String(_0x52df79),
    tax: _0x5c10b7,
    owner: _0x22064d,
    is_atm: _0x1cfbcb,
    biz: _0x3ff809,
    penalty: _0x5f3504,
    maxDaysForPay: _0x1bec71,
    payPageLoaded: false,
    finesPageLoaded: false,
    businessPageLoaded: false,
    payProcess: null,
    show: true
  };
  main_browser.execute("APPS.state.bank = {...APPS.state.bank, ..." + JSON.stringify(_0x37a96b) + "}");
  BankOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_BankLoadPayPageTry", () => {
  if (BankOpened) {
    mp.events.callRemote("Server_BankLoadPayPage");
  }
});
mp.events.add("Client_BankLoadPayPage", (_0x837bce, _0x30ea9a, _0x296448, _0x515416) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.phonemoney = " + _0x837bce + ";\n        APPS.state.bank.houses = " + JSON.stringify(_0x30ea9a) + ";\n        APPS.state.bank.org = " + (_0x296448 ? JSON.stringify(_0x296448) : null) + ";\n        APPS.state.bank.family = " + (_0x515416 ? JSON.stringify(_0x515416) : null) + ";\n\n        APPS.state.bank.payPageLoaded = true;\n    ");
  }
});
mp.events.add("Client_BankLoadFinesPageTry", () => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankLoadFinesPage");
  }
});
mp.events.add("Client_BankLoadFinesPage", _0x2458a1 => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.fines = " + JSON.stringify(_0x2458a1) + ";\n        APPS.state.bank.finesPageLoaded = true;\n    ");
  }
});
mp.events.add("Client_BankLoadBusinessPageTry", () => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankLoadBusinessPage");
  }
});
mp.events.add("Client_BankLoadBusinessPage", _0x65373c => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.businessStatistics = " + JSON.stringify(_0x65373c) + ";\n        APPS.state.bank.businessPageLoaded = true;\n    ");
  }
});
let lastMoneyTransferData = null;
mp.events.add("Client_BankMoneyTransferTry", (_0x631f87, _0x4437f7) => {
  if (checkFlood()) {
    lastMoneyTransferData = {
      pid: _0x631f87,
      amount: _0x4437f7
    };
    mp.events.callRemote("Server_BankMoneyTransferTry", _0x631f87, _0x4437f7);
  }
});
mp.events.add("Client_BankMoneyTransferProcess", (_0x1c6c86, _0x53fe03, _0x500d7a, _0x28bd11) => {
  if (!BankOpened) {
    return;
  }
  const _0x1f48ec = {
    type: "moneyTransfer",
    pid: lastMoneyTransferData.pid,
    nickname: _0x1c6c86,
    gender: _0x53fe03,
    firstFieldAmount: lastMoneyTransferData.amount,
    remainingDailyMoneyLimit: _0x500d7a,
    moneyTransferTax: _0x28bd11
  };
  main_browser.execute("\n        APPS.state.bank.payProcess = " + JSON.stringify(_0x1f48ec) + ";\n    ");
});
mp.events.add("Client_BankMoneyTransfer", (_0x1e28b4, _0x4e83a8) => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankMoneyTransfer", _0x1e28b4, _0x4e83a8);
  }
});
mp.events.add("Client_BankMoneyTransferSuccess", _0x429702 => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x429702 + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankDepositBalance", _0x484e32 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankDepositBalance", _0x484e32);
  }
});
mp.events.add("Client_BankDepositBalanceSuccess", (_0x188893, _0x344104) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x188893 + ";\n        APPS.state.bank.money = " + _0x344104 + ";\n    ");
  }
});
mp.events.add("Client_BankWithdrawBalance", _0x13f51a => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankWithdrawBalance", _0x13f51a);
  }
});
mp.events.add("Client_BankWithdrawBalanceSuccess", (_0x24b5fe, _0x26d6b0) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x24b5fe + ";\n        APPS.state.bank.money = " + _0x26d6b0 + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankPayPhone", _0x3a73d3 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankPayPhone", _0x3a73d3);
  }
});
mp.events.add("Client_BankPayPhoneSuccess", (_0x57080c, _0x49af7c) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x57080c + ";\n        APPS.state.bank.phonemoney = " + _0x49af7c + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankPayHouse", (_0x41d781, _0x2ec923) => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankPayHouse", _0x41d781, _0x2ec923);
  }
});
mp.events.add("Client_BankPayHouseSuccess", (_0x358c58, _0x5c17f5) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x358c58 + ";\n        APPS.state.bank.houses = " + JSON.stringify(_0x5c17f5) + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankWithdrawOrganization", _0x4ecba6 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankWithdrawOrganization", _0x4ecba6);
  }
});
mp.events.add("Client_BankWithdrawOrganizationSuccess", (_0x406a51, _0x4ed71d) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x406a51 + ";\n        APPS.state.bank.org.balance = " + _0x4ed71d + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankFamDeposit", _0x41cd20 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankFamDeposit", _0x41cd20);
  }
});
mp.events.add("Client_BankFamDepositSuccess", (_0x2633ab, _0x3e3941) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x2633ab + ";\n        APPS.state.bank.family.balance = " + _0x3e3941 + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankFamWithdraw", _0x39f5c3 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankFamWithdraw", _0x39f5c3);
  }
});
mp.events.add("Client_BankFamWithdrawSuccess", (_0x3358dc, _0x3747f6) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x3358dc + ";\n        APPS.state.bank.family.balance = " + _0x3747f6 + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankCharity", _0x444c20 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankCharity", _0x444c20);
  }
});
mp.events.add("Client_BankCharitySuccess", _0x5e8aca => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x5e8aca + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankPayFines", _0x468584 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankPayFines", _0x468584);
  }
});
mp.events.add("Client_BankPayFinesSuccess", (_0x233be6, _0x4896d3) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x233be6 + ";\n        APPS.state.bank.penalty = " + _0x4896d3 + ";\n        APPS.state.bank.payProcess = null;\n    ");
  }
});
mp.events.add("Client_BankPayBusiness", _0x221238 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankPayBusiness", _0x221238);
  }
});
mp.events.add("Client_BankPayBusinessSuccess", (_0x2e8763, _0x5ca03b) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x2e8763 + ";\n        APPS.state.bank.biz.days = " + _0x5ca03b + ";\n    ");
  }
});
mp.events.add("Client_BankWithdrawBusiness", _0x4515a4 => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankWithdrawBusiness", _0x4515a4);
  }
});
mp.events.add("Client_BankWithdrawBusinessSuccess", (_0x37499c, _0x18cc01) => {
  if (BankOpened) {
    main_browser.execute("\n        APPS.state.bank.bankmoney = " + _0x37499c + ";\n        APPS.state.bank.biz.balance = " + _0x18cc01 + ";\n    ");
  }
});
mp.events.add("Client_BankRobbery", () => {
  if (checkFlood()) {
    mp.events.callRemote("Server_BankRobbery");
  }
});
global.CloseBank = function () {
  if (BankOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bank.show = false;");
    BankOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_BankClose", () => {
  CloseBank();
});
mp.events.add("ATM_Error", _0x2f48bc => {
  if (BankOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x2f48bc + "');");
  }
});