function setFrozenZones(_0x47521a) {
  main_browser.execute("APP.$store.commit('pixelBattle/setFrozenZones', " + JSON.stringify(_0x47521a) + ")");
}
function byteLength(_0x4b5af9) {
  let _0xe3e174 = 0;
  for (let _0x494921 = 0; _0x494921 < _0x4b5af9.length; _0x494921++) {
    const _0x140e92 = _0x4b5af9.charCodeAt(_0x494921);
    _0xe3e174 += _0x140e92 <= 127 ? 1 : _0x140e92 <= 2047 ? 2 : _0x140e92 <= 65535 ? 3 : 4;
  }
  return _0xe3e174;
}
global.pixelBattleOpened = false;
mp.events.add("Client_OpenPixelBattle", () => {
  if (!pixelBattleOpened && !!loggedin && !chatActive && GlobalCheck() != 1) {
    pixelBattleOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
    main_browser.execute("APPS.state.pixelBattle.show = true;");
    mp.events.callRemote("Server_RequestPixelBattleData");
  }
});
mp.events.add("Client_PixelBattleInit", (_0x553ba2, _0x90c117, _0x1a4a69, ..._0x2653cf) => {
  if (global.test_mode) {
    mp.gui.chat.push("[pixelBattle] format=" + _0x1a4a69.format + ", expected " + _0x1a4a69.chunksCount + " chunks, received " + _0x2653cf.length);
  }
  if (global.test_mode) {
    mp.gui.chat.push("[pixelBattle] Expected total: " + _0x1a4a69.totalLen + " chars");
  }
  if (_0x2653cf.length !== _0x1a4a69.chunksCount) {
    if (global.test_mode) {
      mp.gui.chat.push("[pixelBattle] FAILED — chunk count mismatch");
    }
    return;
  }
  const _0x4e73a4 = _0x2653cf.join("");
  if (global.test_mode) {
    mp.gui.chat.push("[pixelBattle] Assembled: " + _0x4e73a4.length + "/" + _0x1a4a69.totalLen + " chars");
  }
  if (_0x4e73a4.length === _0x1a4a69.totalLen) {
    if (global.test_mode) {
      mp.gui.chat.push("[pixelBattle] SUCCESS — all " + _0x1a4a69.chunksCount + " chunks intact!");
    }
    if (_0x90c117) {
      setFrozenZones(_0x90c117);
    }
    if (_0x553ba2) {
      main_browser.execute("APP.$store.state.pixelBattle.donatePixels = " + _0x553ba2.donatePixels + ";");
      main_browser.execute("APP.$store.state.pixelBattle.freePixelsSecondsLeft = " + _0x553ba2.freePixelsSecondsLeft + ";");
      main_browser.execute("APP.$store.state.pixelBattle.onlinePaints = " + (_0x553ba2.onlinePaints || 0) + ";");
    }
    main_browser.execute("APP.$store.commit('pixelBattle/init', " + JSON.stringify({
      meta: _0x1a4a69,
      base64: _0x4e73a4
    }) + ")");
    if (global.test_mode) {
      mp.gui.chat.push("[pixelBattle] Sent assembled data to browser.");
    }
  } else if (global.test_mode) {
    mp.gui.chat.push("[pixelBattle] FAILED — data lost or truncated");
  }
});
mp.events.add("Client_PixelBattleCatchup", (_0x163895, _0x5c9ab2, _0x2eedce, ..._0x2c218a) => {
  if (_0x5c9ab2) {
    setFrozenZones(_0x5c9ab2);
  }
  if (_0x163895) {
    main_browser.execute("APP.$store.state.pixelBattle.donatePixels = " + _0x163895.donatePixels + ";");
    main_browser.execute("APP.$store.state.pixelBattle.freePixelsSecondsLeft = " + _0x163895.freePixelsSecondsLeft + ";");
    main_browser.execute("APP.$store.state.pixelBattle.onlinePaints = " + (_0x163895.onlinePaints || 0) + ";");
  }
  main_browser.execute("APP.$store.commit('pixelBattle/applyPatch', " + JSON.stringify({
    meta: _0x2eedce,
    base64: _0x2c218a.join("")
  }) + ")");
});
mp.events.add("Client_PixelBattleRealtimePatch", (_0x472f98, _0x81d537, _0x126dbf) => {
  main_browser.execute("APP.$store.commit('pixelBattle/applySmallPatch', " + JSON.stringify({
    meta: _0x472f98,
    base64: _0x81d537
  }) + ")");
  if (_0x126dbf !== undefined) {
    main_browser.execute("APP.$store.state.pixelBattle.onlinePaints = " + (parseInt(_0x126dbf) || 0) + ";");
  }
});
mp.events.add("Client_RequestSetPixel", (_0x5c1927, _0x5c0dc4, _0x1c99cc) => {
  if (pixelBattleOpened) {
    mp.events.callRemote("Server_RequestSetPixel", _0x5c1927, _0x5c0dc4, _0x1c99cc);
  }
});
mp.events.add("Client_PixelBattleRequestBuyDonatePixels", _0x66b424 => {
  if (pixelBattleOpened) {
    mp.events.callRemote("Server_PixelBattleRequestBuyDonatePixels", _0x66b424);
  }
});
global.closePixelBattle = function () {
  if (pixelBattleOpened) {
    pixelBattleOpened = false;
    main_browser.execute("APPS.state.pixelBattle.show = false;");
    ChangeHudState(true);
    mp.events.call("Enablechat");
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.show(false, false);
    mp.events.callRemote("Server_ClosePixelBattle");
  }
};
mp.events.add("Client_ClosePixelBattle", closePixelBattle);
mp.events.add("Client_PixelBattleBuyBonus", (_0x3f28df, _0x37eca8, _0x1fef0d) => {
  mp.console.logInfo("dasdd " + typeof _0x1fef0d + " " + _0x1fef0d);
  if (pixelBattleOpened) {
    mp.events.callRemote("Server_PixelBattleBuyBonus", _0x3f28df, _0x37eca8, _0x1fef0d);
  }
});
mp.events.add("Client_PixelBattleUpdatePixelsBalance", _0x210c51 => {
  main_browser.execute("APPS.state.pixelBattle.donatePixels = " + _0x210c51 + ";");
});
mp.events.add("Client_PixelBattleUpdatePlayerData", _0x4ebb51 => {
  main_browser.execute("APPS.state.pixelBattle.donatePixels = " + _0x4ebb51.donatePixels + ";");
  main_browser.execute("APPS.state.pixelBattle.freePixelsSecondsLeft = " + _0x4ebb51.freePixelsSecondsLeft + ";");
  if (_0x4ebb51.onlinePaints !== undefined) {
    main_browser.execute("APP.$store.state.pixelBattle.onlinePaints = " + (_0x4ebb51.onlinePaints || 0) + ";");
  }
});
mp.events.add("Client_PixelBattleFrozenZones", setFrozenZones);
mp.events.add("Client_PixelBattleResetSelectZone", () => {
  main_browser.execute("this.AppComponents?.pixelBattle?.resetSelectZone()");
});