let army_blip;
let army_privatecolshape;
let army_bizcolshape;
global.ArmyBrowserOpened = false;
mp.events.add("ArmyTruckShow", (_0x51d6fe, _0x13f8c5) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x36236a = [];
  for (let _0x278ca8 = 0; _0x278ca8 < _0x13f8c5.length; _0x278ca8++) {
    if (_0x13f8c5[_0x278ca8] != -1) {
      let _0x2a1bfa = _0x51d6fe[_0x278ca8];
      _0x36236a.push("{\"Name\":'" + _0x13f8c5[_0x278ca8] + "',\"Count\":'" + _0x2a1bfa + "',\"Index\":" + _0x278ca8 + "}");
    }
  }
  ArmyBrowserOpened = true;
  const _0x3419e5 = "{\"secret_orders\":[" + _0x36236a + "],\"show\":true}";
  main_browser.execute("APPS.state.work_army_list = " + _0x3419e5);
  mp.gui.cursor.show(true, true);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
});
global.CloseArmyBrowser = function () {
  if (ArmyBrowserOpened) {
    ArmyBrowserOpened = false;
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_army_list.show = false;");
    mp.gui.cursor.show(false, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("CancelArmyOrders");
  }
};
mp.events.add("ArmyBrowserUpdate", (_0x239cfd, _0x427a6e) => {
  if (!ArmyBrowserOpened) {
    return;
  }
  let _0x526434 = [];
  for (let _0x1433cf = 0; _0x1433cf < _0x427a6e.length; _0x1433cf++) {
    if (_0x427a6e[_0x1433cf] != -1) {
      let _0x3c7e3b = _0x239cfd[_0x1433cf];
      _0x526434.push("{\"Name\":'" + _0x427a6e[_0x1433cf] + "',\"Count\":'" + _0x3c7e3b + "',\"Index\":" + _0x1433cf + "}");
    }
  }
  main_browser.execute("APPS.state.work_army_list.secret_orders = [" + _0x526434 + "]");
});
mp.events.add("ArmyCheckButton", _0x51b0fd => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ArmyCheckTruckMoney", _0x51b0fd);
  }
});
mp.events.add("ArmyTruckPrivateGetTrailer", () => {
  CloseArmyBrowser();
  if (army_privatecolshape) {
    army_privatecolshape.destroy();
    army_privatecolshape = undefined;
  }
  army_privatecolshape = mp.colshapes.newCircle(199.842, 6418.163, 20, 0);
  if (army_blip == null) {
    army_blip = mp.blips.new(1, new mp.Vector3(199.842, 6418.163, 31.136), {
      color: 83
    });
    army_blip.setRoute(true);
  }
});
mp.events.add("ArmyCancelCount", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
  if (army_blip) {
    army_blip.destroy();
    army_blip = undefined;
  }
  if (army_privatecolshape) {
    army_privatecolshape.destroy();
    army_privatecolshape = undefined;
  }
  if (army_bizcolshape) {
    army_bizcolshape.destroy();
    army_bizcolshape = undefined;
  }
});
mp.events.add("playerEnterColshape", _0x34ed45 => {
  if (_0x34ed45 == army_privatecolshape && localplayer.isInAnyVehicle(true)) {
    if (army_blip) {
      army_blip.destroy();
      army_blip = undefined;
    }
    if (army_privatecolshape) {
      army_privatecolshape.destroy();
      army_privatecolshape = undefined;
    }
  } else if (_0x34ed45 == army_bizcolshape && localplayer.isInAnyVehicle(true)) {
    if (army_blip) {
      army_blip.destroy();
      army_blip = undefined;
    }
    if (army_bizcolshape) {
      army_bizcolshape.destroy();
      army_bizcolshape = undefined;
    }
    mp.events.callRemote("ArmyTruckCheckPos");
  }
});
mp.events.add("ArmyTruckStartPrivateOrder", (_0xc01af6, _0x176ba3) => {
  let _0x3a5ff3;
  let _0x3475d9;
  if (army_blip != null) {
    army_blip.destroy();
    army_blip = undefined;
  }
  army_blip = mp.blips.new(1, _0xc01af6, {
    color: 83
  });
  army_blip.setRoute(true);
  if (army_bizcolshape) {
    army_bizcolshape.destroy();
    army_bizcolshape = undefined;
  }
  army_bizcolshape = mp.colshapes.newCircle(_0xc01af6.x, _0xc01af6.y, 20, 0);
  _0x3a5ff3 = language["Секретный заказ"][curr_lang];
  _0x3475d9 = 1000;
  main_browser.execute("APPS.state.hud.job_hud_text = '" + _0x3a5ff3 + "';");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["Стоимоcть:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = 1000;");
  main_browser.execute("APPS.state.hud.job_hud = 12;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});