global.LootMapOpened = false;
mp.events.add("Client_OpenLootMap", (_0x4c1e74, _0x55fe84, _0x214fd0, _0x5698ab, _0x393e1b, _0x593040, _0x5a3fa5, _0x31ba63, _0x5aceb3, _0x462b67, _0xf9da36, _0x53c7b5, _0x5cfc24, _0x3ac3bc, _0xea4b63, _0x5b8a59, _0x4ddc05) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0xdc9b35 = 0;
  if (localplayer.model != 1885233650) {
    _0xdc9b35 = 1;
  }
  let _0x19ed45 = [-1, -1, -1, -1, -1];
  if (_0x4ddc05 != null) {
    _0x19ed45 = _0x4ddc05;
  }
  const _0x5bf9a1 = "{\n\t\t\"gender\":" + _0xdc9b35 + ",\n\t\t\"level\":" + _0x4c1e74 + ",\n\t\t\"metal\":[" + _0x55fe84 + "],\n\t\t\"mushrooms\":[" + _0x214fd0 + "],\n\t\t\"marijuana\":[" + _0x5698ab + "],\n\t\t\"strawberry\":[" + _0x393e1b + "],\n\t\t\"strawberry_array\":" + _0x593040 + ",\n\t\t\"statues\":[" + _0x5a3fa5 + "],\n\t\t\"statues_array\":" + _0x31ba63 + ",\n\t\t\"pearls\":[" + _0x5aceb3 + "],\n\t\t\"boars\":[" + _0x462b67 + "],\n\t\t\"player_position\":[" + _0xf9da36.x + "," + _0xf9da36.y + "],\n\t\t\"player_rotation\":" + _0x53c7b5 + ",\n\t\t\"gather_count\": " + _0x5cfc24 + ",\n\t\t\"scanner_status\": " + _0x3ac3bc + ",\n\t\t\"loot_case_positions\":[" + _0xea4b63 + "],\n\t\t\"cocaine\":[" + _0x5b8a59 + "],\n\t\t\"eventStatuesIndexes\": " + JSON.stringify(_0x19ed45) + ",\n\t\t\"show\":true\n\t}";
  main_browser.execute("APPS.state.new_loot_map = " + _0x5bf9a1);
  LootMapOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
global.CloseLootMap = function () {
  if (LootMapOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_loot_map.show = false;");
    LootMapOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseLootMap");
  }
};
global.at_mushroom = false;
mp.events.add("Client_OpenScannerInCraft", _0xb49f19 => {
  if (LootMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseLootMap();
      mp.events.callRemote("Server_OpenScannerInCraft", _0xb49f19);
    }
  }
});
mp.events.add("Client_RouteToMushrooms", (_0x404793, _0x194271) => {
  if (LootMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseLootMap();
      mp.events.callRemote("Server_RouteToMushrooms", _0x404793, _0x194271);
    }
  }
});
mp.events.add("Client_MushroomInterct", _0x1ff003 => {
  if (_0x1ff003 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_mushroom = _0x1ff003;
});
global.at_scrap = false;
mp.events.add("Client_ScrapInterct", _0x597c92 => {
  if (_0x597c92 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_scrap = _0x597c92;
});
global.at_marijuana = false;
mp.events.add("Client_MarijuanaInterct", _0x413efc => {
  if (_0x413efc == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_marijuana = _0x413efc;
});
global.at_strawberry = false;
mp.events.add("Client_StrawberryInterct", _0x4657ed => {
  if (_0x4657ed == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_strawberry = _0x4657ed;
});
global.at_statue = false;
mp.events.add("Client_StatueInterct", _0x4cf2fe => {
  if (_0x4cf2fe == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_statue = _0x4cf2fe;
});
global.at_pearl = false;
mp.events.add("Client_PearlInterct", _0x56d51c => {
  if (_0x56d51c == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_pearl = _0x56d51c;
});
global.at_loot_box = false;
mp.events.add("Client_LootBoxInterct", _0xa4121e => {
  if (_0xa4121e == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_loot_box = _0xa4121e;
});
global.at_cocaine = false;
mp.events.add("Client_CocaineInterct", _0x235a7b => {
  if (_0x235a7b == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_cocaine = _0x235a7b;
});
global.StattuesBookOpened = false;
mp.events.add("Client_OpenStattuesBook", (_0x10bc4e, _0x2a01df) => {
  CloseStats();
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x57bb92 = 0;
  localplayer.model;
  const _0x528c42 = "{\"statues_array\":[" + _0x10bc4e + "],\"sattues_count\":" + _0x2a01df + ",\"other_book\":false,\"show\":true}";
  main_browser.execute("APPS.state.book = " + _0x528c42);
  StattuesBookOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseStattuesBook = function () {
  if (StattuesBookOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.book.show = false;");
    StattuesBookOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GetToMyBook", () => {
  if (StattuesBookOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GoToOtherStattuesBook", 0);
    }
  }
});
mp.events.add("Client_SearchPlayerStattues", _0x40c115 => {
  if (StattuesBookOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GoToOtherStattuesBook", _0x40c115);
    }
  }
});
mp.events.add("Client_OpenOtherStattuesBook", (_0x236ae6, _0x53f688, _0x3c89cf) => {
  if (StattuesBookOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.book.statues_array = [" + _0x236ae6 + "];");
    main_browser.execute("APPS.state.book.sattues_count = " + _0x53f688 + ";");
    main_browser.execute("APPS.state.book.other_book = " + _0x3c89cf + ";");
  }
});
mp.events.add("Client_BuyAllStattues", () => {
  if (StattuesBookOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyAllStattues");
    }
  }
});
mp.events.add("Client_UpdateMyStattuetesBook", (_0x1009f3, _0x2e36e0) => {
  if (StattuesBookOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.book.statues_array = [" + _0x1009f3 + "];");
    main_browser.execute("APPS.state.book.sattues_count = " + _0x2e36e0 + ";");
  }
});