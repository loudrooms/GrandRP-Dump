global.ExchangeOpened = false;
const shareNames = [{
  Name: language["Акции таксопарка"]
}, {
  Name: language["Акции АЗС"]
}, {
  Name: language["Акции фермы"]
}, {
  Name: language["Акции чип-тюнинга"]
}, {
  Name: language["Акции магазина 24/7"]
}, {
  Name: language["Акции магазина одежды"]
}, {
  Name: language["Акции барбершопа"]
}, {
  Name: language["Акции автомастерской"]
}, {
  Name: language["Акции тату студии"]
}, {
  Name: language["Акции магазина оружия"]
}, {
  Name: language["Акции бара"]
}, {
  Name: language["Акции ювелирного магазина"]
}, {
  Name: language["Акции каршеринга"]
}];
mp.events.add("Client_OpenExchange", (_0x562617, _0x37b971, _0x3ac533) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  _0x3ac533 = _0x3ac533.map((_0x125f97, _0x34263c) => ({
    Name: shareNames[_0x34263c].Name[curr_lang],
    Count: _0x125f97[0],
    Cost: _0x125f97[1],
    LastCost: _0x125f97[2]
  }));
  const _0x4942ba = "{\"dh\":" + _0x562617 + ",\"dm\":" + _0x37b971 + ",\"shares\":" + JSON.stringify(_0x3ac533) + ",\"show\":true}";
  main_browser.execute("APPS.state.exchange = " + _0x4942ba);
  ExchangeOpened = true;
  mp.events.callRemote("Server_ExchangeOpened", 1);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseExchange = function () {
  if (ExchangeOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.exchange.show = false;");
    ExchangeOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ExchangeOpened", 2);
  }
};
mp.events.add("Client_UpdateExchange", _0x63a975 => {
  if (ExchangeOpened && loggedin && !chatActive) {
    _0x63a975.forEach((_0x2232ad, _0x181b74) => {
      _0x2232ad.Name = shareNames[_0x181b74].Name[curr_lang];
    });
    main_browser.execute("APPS.state.exchange.shares = " + JSON.stringify(_0x63a975));
  }
});
mp.events.add("Client_BuyShares", (_0x27e21d, _0x3bd0e0) => {
  if (ExchangeOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyShares", _0x27e21d, _0x3bd0e0);
    }
  }
});
mp.events.add("Client_SellShares", (_0x136532, _0x5a03b8) => {
  if (ExchangeOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SellShares", _0x136532, _0x5a03b8);
    }
  }
});
mp.events.add("Exchange_Fail", _0x2753b8 => {
  if (ExchangeOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x2753b8 + "');");
  }
});