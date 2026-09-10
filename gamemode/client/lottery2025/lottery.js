global.LotteryOpened2025 = false;
let lottery_type;
let IsOpeningTicket = false;
function checkIsOpeningTicket() {
  if (IsOpeningTicket) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    const _0x678fee = language["Вы не можете закрыть лотерею пока не сотрёте все круги!"][curr_lang];
    main_browser.execute("APP.sendErrorMessage('" + _0x678fee + "');");
    return true;
  }
  return false;
}
mp.events.add("Client_OpenLottery2025", (_0x2c34e2, _0x570596, _0x4dcf55, _0x1cd1d5, _0x129c70, _0x4471e6 = false) => {
  if (!loggedin || chatActive || LotteryOpened2025 || GlobalCheck()) {
    return;
  }
  const _0x353787 = "{\n        \"gender\":" + _0x4dcf55 + ",\n        \"lottery_type\":" + _0x2c34e2 + ",\n        \"lottery_prize_pool\":[-1,-1,-1,-1,-1],\n        \"lottery_opened_tickets\":" + _0x570596 + ",\n        \"donate\":" + _0x1cd1d5 + ",\n        \"balance\":" + JSON.stringify(_0x129c70) + ",\n\t\t\"lottery_win_prize\":\"-1\",\n        \"show\":true\n    }";
  main_browser.execute("APPS.state.lottery2025 = " + _0x353787);
  if (_0x4471e6) {
    main_browser.execute("this.AppComponents.lottery2025.modal = 3;");
  }
  lottery_type = _0x2c34e2;
  LotteryOpened2025 = true;
  SwitchHUDToDesign(true);
});
global.CloseLottery2025 = function (_0x1eb53d = false) {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!checkIsOpeningTicket()) {
      main_browser.execute("APPS.state.lottery2025.show = false;");
      lottery_type = 0;
      LotteryOpened2025 = false;
      SwitchHUDToDesign(false);
    }
  }
};
mp.events.add("Client_CloseLottery2025FromServer", () => {
  CloseLottery2025(true);
});
mp.events.add("Client_CloseLottery2025", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (lottery_timeout) {
        clearTimeout(lottery_timeout);
        lottery_timeout = null;
      }
      if (!checkIsOpeningTicket()) {
        mp.events.callRemote("Server_CloseLottery2025");
      }
    }
  }
});
mp.events.add("Client_ReloadLottery2025", () => {
  main_browser.execute("this.AppComponents.lottery2025.reloadLottery();");
});
mp.events.add("Client_UpdatePrizeLottery2025", (_0x25a64a, _0x412e16, _0x3d02dc) => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery2025.lottery_prize_pool = " + JSON.stringify(_0x25a64a) + ";");
    main_browser.execute("APPS.state.lottery2025.lottery_win_prize = '" + _0x412e16 + "';");
    main_browser.execute("APPS.state.lottery2025.lottery_opened_tickets = " + _0x3d02dc + ";");
  }
});
mp.events.add("Client_UpdateLottery", (_0x9c4756, _0x390ed4, _0x2c0a8f = -1, _0x1b83a2) => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    main_browser.execute("APPS.state.lottery2025.lottery_type = " + _0x9c4756 + ";");
    main_browser.execute("APPS.state.lottery2025.balance = " + JSON.stringify(_0x390ed4) + ";");
    main_browser.execute("APPS.state.lottery2025.lottery_opened_tickets = " + _0x1b83a2 + ";");
    if (_0x2c0a8f != -1) {
      main_browser.execute("APPS.state.lottery2025.donate = " + _0x2c0a8f + ";");
    }
    main_browser.execute("this.AppComponents.inventory.$forceUpdate();");
  }
});
mp.events.add("Client_UpdateLotteryBalance", (_0x272fa7, _0x14cc6a = -1) => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    main_browser.execute("this.AppComponents.lottery2025.setLastCheck(1000);");
    main_browser.execute("APPS.state.lottery2025.balance = " + JSON.stringify(_0x272fa7) + ";");
    if (_0x14cc6a != -1) {
      main_browser.execute("APPS.state.lottery2025.donate = " + _0x14cc6a + ";");
    }
  }
});
mp.events.add("Client_StartScratchCircle", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_StartScratchCircle");
    }
  }
});
let lottery_timeout = null;
mp.events.add("Client_FinishScratchingLottery2025", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      mp.events.callRemote("Server_FinishScratchingLottery2025");
      if (lottery_timeout) {
        clearTimeout(lottery_timeout);
        lottery_timeout = null;
      } else {
        lottery_timeout = setTimeout(() => {
          lottery_timeout = null;
          main_browser.execute("this.AppComponents.lottery2025.getPrize();");
        }, 5000);
      }
    }
  }
});
mp.events.add("Client_GetLottery2025Prize", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (lottery_timeout) {
      clearTimeout(lottery_timeout);
      lottery_timeout = null;
    }
    main_browser.execute("APPS.state.lottery2025.lottery_prize_pool = [-1, -1, -1, -1, -1];");
    main_browser.execute("APPS.state.lottery2025.lottery_win_prize = '-1';");
  }
});
mp.events.add("Client_SetIsOpeningTicket", _0x27299d => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    IsOpeningTicket = _0x27299d;
  }
});
mp.events.add("Client_GotoRareTicket", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!checkIsOpeningTicket()) {
        mp.events.callRemote("Server_OpenRareTicketInDonate");
      }
    }
  }
});
mp.events.add("Client_BuyMoreTickets", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyMoreTickets");
    }
  }
});
mp.events.add("Client_TryLotteryPrize", _0x25e5ee => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!checkIsOpeningTicket()) {
        mp.events.callRemote("Server_TryLotteryPrize", _0x25e5ee);
      }
    }
  }
});
mp.events.add("Client_ChangeLotteryType", _0x3ae301 => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!checkIsOpeningTicket()) {
        mp.events.callRemote("Server_ChangeLotteryType", _0x3ae301);
      }
    }
  }
});
mp.events.add("Client_GotoRouletteFromLottery", () => {
  if (LotteryOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!checkIsOpeningTicket()) {
        mp.events.callRemote("Server_GotoRouletteFromLottery");
      }
    }
  }
});