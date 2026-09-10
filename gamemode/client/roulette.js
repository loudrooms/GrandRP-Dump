global.DonateNewRouletteOpened = false;
mp.events.add("Client_OpenNewDonateRoulette", (_0x162775, _0x2e22df, _0x59a044, _0x2f6057 = false, _0x8927d, _0x25d2ff, _0x50be73 = 0, _0x5a9191 = 0) => {
  CloseDonate();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x26771a = "{\"donate\":" + _0x162775 + ",\"roulette_prize\": " + _0x59a044 + ", \"gender\": " + _0x2e22df + ", \"newbie\": " + _0x2f6057 + ", \"rouletteCount\": " + _0x8927d + ", \"japaneseRouletteCollectedPrizes\": " + _0x25d2ff + ", \"show\":true}";
  main_browser.execute("APPS.state.new_roulette = " + _0x26771a);
  main_browser.execute("this.AppComponents.new_roulette.select_roulette_number = " + _0x50be73 + ";");
  main_browser.execute("this.AppComponents.new_roulette.selected_subcategory = " + _0x5a9191 + ";");
  main_browser.execute("this.AppComponents.new_roulette.$forceUpdate();");
  if (_0x50be73 || _0x5a9191) {
    setTimeout(() => {
      if (_0x50be73) {
        main_browser.execute("this.AppComponents.new_roulette.SwitchRoulettePage(" + _0x50be73 + ");");
      }
      if (_0x5a9191) {
        main_browser.execute("this.AppComponents.new_roulette.SwitchSubcategory(" + _0x5a9191 + ");");
      }
    }, 500);
  }
  DonateNewRouletteOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_UpdateInvNewDonateRoulette", (_0x2b323d, _0x5b2981) => {
  main_browser.execute("APPS.state.new_roulette.donate = " + _0x2b323d);
  main_browser.execute("APPS.state.new_roulette.inventory = " + _0x5b2981 + ";");
});
global.CloseNewDonateRoulette = function () {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_roulette.show = false;");
    DonateNewRouletteOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_OpenDonateFromRoulette", () => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    CloseNewDonateRoulette();
    mp.events.callRemote("ServerMenu", "donate");
  }
});
global.can_close_donate_roulette = true;
mp.events.add("Client_CanNewDonateRouletteClose", _0x39ef75 => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    can_close_donate_roulette = _0x39ef75;
  }
});
mp.events.add("Client_UpdateNewDonateRoulette", (_0x3abe74, _0x319a17, _0x1af484, _0x5ed081, _0x35bd3f = undefined) => {
  main_browser.execute("APPS.state.new_roulette.donate = " + _0x3abe74);
  main_browser.execute("APPS.state.new_roulette.roulette_prize = " + _0x319a17 + ";");
  main_browser.execute("APPS.state.new_roulette.rouletteCount = " + _0x5ed081 + ";");
  if (_0x35bd3f != null) {
    main_browser.execute("APPS.state.new_roulette.japaneseRouletteCollectedPrizes = " + _0x35bd3f);
  }
  main_browser.execute("this.AppComponents.new_roulette.$forceUpdate();");
  if (_0x1af484 == 1) {
    StartCustomSound("roulette_open", "sounds/roulette/roulette_start.wav", 0.2);
  }
});
mp.events.add("Client_StartNewDonateRoulette", (_0xa9c717, _0x7d75fc, _0x1f6caa) => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenNewDonateRoulette", _0xa9c717, _0x7d75fc, _0x1f6caa);
    }
  }
});
mp.events.add("Client_PlayNewDonateRouletteSound", (_0x2d5239, _0x220d9a = 0.2) => {
  if (_0x2d5239 == 1) {
    StartCustomSound("roulette_tick", "sounds/roulette/roulette_spin.wav", _0x220d9a);
  } else {
    StartCustomSound("roulette_finish", "sounds/roulette/roulette_stop.wav", _0x220d9a);
  }
});
mp.events.add("Client_NewDonateRouletteSellItem", _0x48503d => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_NewDonateRouletteSellItem", _0x48503d);
  }
});
mp.events.add("Client_NewDonateRouletteTakeItem", _0x337d42 => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_NewDonateRouletteTakeItem", _0x337d42);
  }
});
mp.events.add("Client_ActionWithDonateInv", _0x3a52c3 => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ActionWithDonateInv", _0x3a52c3);
  }
});
mp.events.add("Client_UpdateRouletteKeyCount", _0x3abc7e => {
  main_browser.execute("APPS.state.new_roulette.keycount = " + _0x3abc7e);
});
mp.events.add("Client_NewDonateRouletteTryItem", (_0x3f4b90, _0x12f72c, _0x34f163) => {
  if (DonateNewRouletteOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseNewDonateRoulette();
      mp.events.callRemote("Server_NewDonateRouletteTryItem", _0x3f4b90, _0x12f72c, _0x34f163);
    }
  }
});