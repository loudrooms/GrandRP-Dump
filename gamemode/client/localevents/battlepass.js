global.BattlePassOpened = false;
mp.events.add("Client_OpenBattlePass", (_0x38cf97, _0x21e6e2, _0x353bb4, _0x283679, _0x4e4f32, _0x145051, _0x570980, _0x2fb92e, _0x22cd2b, _0x1fd20e = undefined, _0x32c134, _0x397586, _0x4be01d, _0x43e772, _0x25c9dd, _0x132c34, _0x281f66 = false) => {
  if (GlobalCheck() != 1 || inLobby) {
    main_browser.execute("\n\t\tAPPS.state.battlepass_new.battle_points = " + _0x38cf97 + ";\n\t\tAPPS.state.battlepass_new.battle_level = " + _0x21e6e2 + ";\n\t\tAPPS.state.battlepass_new.battle_coins = " + _0x43e772 + ";\n\t\tAPPS.state.battlepass_new.premium_task_bought = " + _0x25c9dd + ";\n\t\tAPPS.state.battlepass_new.grand_prize_taken = " + (Number(_0x132c34) || 0) + ";\n\t\n\t\tAPPS.state.battlepass_new.battle_open = " + JSON.stringify(_0x353bb4) + ";\n\t\tAPPS.state.battlepass_new.battle_progress = " + JSON.stringify(_0x283679) + ";\n\t\tAPPS.state.battlepass_new.battle_quests = " + JSON.stringify(_0x145051) + ";\n\t\n\t\tAPPS.state.battlepass_new.gender = " + _0x4e4f32 + ";\n\t\tAPPS.state.battlepass_new.premium = " + _0x2fb92e + ";\n\t\n\t\tAPPS.state.battlepass_new.battle_resources = " + _0x570980 + ";\n        APPS.state.battlepass_new.donate = " + _0x22cd2b + ";\n\t\n\t\tAPPS.state.battlepass_new.chest_items = [0,0,0,0,0,0];\n\t\tAPPS.state.battlepass_new.chest_type = 999;\n\n\t\tAPPS.state.battlepass_new.exp_left_time = " + _0x32c134 + ";\n\t\tAPPS.state.battlepass_new.player_name = '" + _0x397586 + "';\n\t\tAPPS.state.battlepass_new.freeTaskFinished = " + _0x4be01d + ";\n\t\tAPPS.state.battlepass_new.x2_bp_exp = " + _0x281f66 + ";\n\t\n\t\tAPPS.state.battlepass_new.show = true;\n\t");
    if (_0x1fd20e == 1) {
      main_browser.execute("this.AppComponents.battlepass.modal = 'shop'");
    }
    main_browser.active = true;
    BattlePassOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_BattlepassUpdateExtendedData", _0xec4d09 => {
  main_browser.execute("APPS.state.battlepass_new.premium_task_bought = " + _0xec4d09 + ";");
});
mp.events.add("Client_UpdateGrandPrizeTaken", (_0x2a9f37, _0xc9a299) => {
  main_browser.execute("APPS.state.battlepass_new.grand_prize_taken = " + (Number(_0x2a9f37) || 0) + ";");
  main_browser.execute("APPS.state.battlepass_new.battle_coins = " + _0xc9a299 + ";");
  main_browser.execute("this.AppComponents.battlepass && this.AppComponents.battlepass.$forceUpdate();");
});
mp.events.add("Client_RequestExtendBattlepass", () => {
  if (BattlePassOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestExtendBattlepass");
    }
  }
});
mp.events.add("Client_BattlePassUpdateCoins", _0x19d2c1 => {
  main_browser.execute("APPS.state.battlepass_new.battle_coins = " + _0x19d2c1 + ";");
});
mp.events.add("Client_CloseBattlePass", () => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    CloseBattlePass();
  }
});
global.CloseBattlePass = function () {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.show = false;");
    BattlePassOpened = false;
    main_browser.active &&= false;
    if (!inLobby) {
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
    }
  }
};
mp.events.add("Client_BuyBattlePassPage", (_0x5d3c9d = 1) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      CloseBattlePass();
      mp.events.callRemote("Server_BuyBattlePassPage", _0x5d3c9d);
    }
  }
});
mp.events.add("Client_BattlePassOpenLevel", (_0x3de073, _0x56068e, _0x20e555, _0x433c15) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassOpenLevel", _0x3de073, _0x56068e, _0x20e555, _0x433c15);
    }
  }
});
mp.events.add("Client_BattlePassBuyLevel", _0x247e7f => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassBuyLevel", _0x247e7f);
    }
  }
});
mp.events.add("Client_BattlePassBuyResources", () => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassBuyResources");
    }
  }
});
mp.events.add("Client_BattlePassSellPrize", (_0x3764ae, _0x15ac0c, _0x34c09b) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassSellPrize", _0x3764ae, _0x15ac0c, _0x34c09b);
    }
  }
});
mp.events.add("Client_BattlePassTryOnClothes", (_0xe12801, _0x25573d, _0x4cfb62, _0x1b2258) => {
  if (BattlePassOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassTryOnClothes", _0xe12801, _0x25573d, _0x4cfb62, _0x1b2258);
    }
  }
});
mp.events.add("Client_BuyBattlePassShopItem", _0x5b210a => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyBattlePassShopItem", _0x5b210a);
    }
  }
});
mp.events.add("Client_TryBattlePassShopItem", _0x40eee6 => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TryBattlePassShopItem", _0x40eee6);
    }
  }
});
mp.events.add("Client_BattlePassChangeQuest", (_0x456399, _0xe6822c) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassChangeQuest", _0x456399, _0xe6822c);
    }
  }
});
mp.events.add("Client_BattlePassBuyPremium", (_0x248630, _0x1827ef) => {
  if ((!!loggedin || !!inLobby) && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BattlePassBuyPremium", _0x248630, _0x1827ef);
  }
});
mp.events.add("Client_BattlePassGetPrize", (_0x3ac236, _0x145ccd) => {
  if (!BattlePassOpened || !loggedin && !inLobby || chatActive) {
    return;
  }
  const _0x4ca9b1 = typeof _0x3ac236 == "string" ? _0x3ac236 : JSON.stringify(_0x3ac236);
  main_browser.execute("APPS.state.battlepass_new.battle_open = " + _0x4ca9b1 + ";");
  main_browser.execute("APPS.state.battlepass_new.battle_resources = " + _0x145ccd + ";");
});
mp.events.add("Client_BattlePassUpdatePoints", (_0x1a44c6, _0x357d04, _0x233698) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.battle_level = " + _0x1a44c6 + ";");
    main_browser.execute("APPS.state.battlepass_new.battle_points = " + _0x357d04 + ";");
    main_browser.execute("APPS.state.battlepass_new.battle_coins = " + _0x233698 + ";");
  }
});
mp.events.add("Client_BattlePassUpdateResources", _0x1780d4 => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.battle_resources = " + _0x1780d4 + ";");
  }
});
mp.events.add("Client_BattlePassUpdateItemPoints", _0x2b914d => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.item_points = " + _0x2b914d + ";");
  }
});
mp.events.add("Client_BattlePassUpdateQuestsProgress", (_0x1f6ea1, _0xf532f0, _0x3daf9e) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    if (_0x1f6ea1 !== undefined) {
      main_browser.execute("APPS.state.battlepass_new.battle_progress = " + JSON.stringify(_0x1f6ea1) + ";");
    }
    if (_0xf532f0 !== undefined) {
      main_browser.execute("APPS.state.battlepass_new.battle_quests = " + JSON.stringify(_0xf532f0) + ";");
    }
    if (_0x3daf9e !== undefined) {
      main_browser.execute("APPS.state.battlepass_new.freeTaskFinished = " + _0x3daf9e + ";");
    }
  }
});
mp.events.add("Client_UpdateQuestProgressData", () => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.battle_progress = " + JSON.stringify(win_number) + ";");
  }
});
mp.events.add("Client_BattlePassUpdateQuests", _0x4f686b => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.battle_quests = " + JSON.stringify(_0x4f686b) + ";");
  }
});
mp.events.add("Client_BattlePassShowChests", (_0x56bf80, _0x6f9661) => {
  if (BattlePassOpened && (loggedin || inLobby) && !chatActive) {
    main_browser.execute("APPS.state.battlepass_new.chest_items = " + JSON.stringify(_0x56bf80) + ";");
    if (_0x6f9661 !== undefined) {
      main_browser.execute("APPS.state.battlepass_new.chest_type = " + _0x6f9661 + ";");
    }
    main_browser.execute("this.AppComponents.battlepass.$forceUpdate();");
  }
});
global.BattlePassPremiumOpened = false;
mp.events.add("Client_OpenBattlePassPremium", _0x6ef951 => {
  const _0x10ec88 = "{\"gender\":" + _0x6ef951 + ",\"show\":true}";
  main_browser.execute("APPS.state.battlepass_premium = " + _0x10ec88);
  BattlePassPremiumOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBattlePassPremium = function (_0x584d45 = false) {
  if (BattlePassPremiumOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.battlepass_premium.show = false;");
    BattlePassPremiumOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (!_0x584d45) {
      mp.events.callRemote("Server_CloseEasterAnnounceDesign", 3);
    }
  }
};
mp.events.add("Client_OpenBattlepassFromPremium", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      CloseBattlePassPremium(true);
      mp.events.callRemote("Server_OpenBattlePass");
    }
  }
});
mp.events.add("Client_UpdateBattlepassDonate", _0x581c24 => {
  main_browser.execute("APPS.state.battlepass_new.donate = " + _0x581c24 + ";");
});
mp.events.add("Client_RequestBattlepassRanking", () => {
  if ((!!loggedin || !!inLobby) && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestBattlepassRanking");
  }
});
mp.events.add("Client_LoadBattlepassTop", (_0x5dd3e7, _0x4041f3) => {
  main_browser.execute("APPS.state.battlepass_new.battle_top_list = " + _0x5dd3e7 + ";");
  main_browser.execute("APPS.state.battlepass_new.done_tasks = " + _0x4041f3 + ";");
  main_browser.execute("this.AppComponents.battlepass.$forceUpdate();");
});
mp.events.add("Client_BattlePassTakeGrandPrize", _0x2713df => {
  if (BattlePassOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattlePassTakeGrandPrize", _0x2713df);
    }
  }
});