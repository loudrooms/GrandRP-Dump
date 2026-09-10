mp.events.add("Client_OpenCryptoBalanceCorrect", (_0x246011, _0x43b702, _0x14f0e4) => {
  main_browser.execute("APPS.state.hud_mobile.crypto_balance = " + _0x246011);
  main_browser.execute("APPS.state.hud_mobile.crypto_fond = " + _0x43b702);
  main_browser.execute("APPS.state.hud_mobile.crypto_rate = " + _0x14f0e4);
  main_browser.execute("APPS.state.hud_mobile.crypto_need_to_show = 1;");
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_OpenCryptoBalance", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenCryptoBalance");
    }
  }
});
mp.events.add("Client_BuyCrypto", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyCrypto");
    }
  }
});
mp.events.add("Client_SellCrypto", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SellCrypto");
    }
  }
});
mp.events.add("Client_SendCrypto", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SendCrypto");
    }
  }
});
mp.events.add("Client_UpdateCryptoBalanceAndFond", (_0x11c83a, _0x1fa069) => {
  if (loggedin && !chatActive) {
    main_browser.execute("APPS.state.hud_mobile.crypto_balance = " + _0x11c83a);
    main_browser.execute("APPS.state.hud_mobile.crypto_fond = " + _0x1fa069);
  }
});