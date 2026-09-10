global.BossesOpened = false;
mp.events.add("ClientOpenBosses", (_0x3243ec, _0x15170c, _0xf351de, _0x3df1fa, _0x13ecec, _0x3175d9) => {
  if (GlobalCheck() == 1 && BossesOpened == 0) {
    return;
  }
  const _0x515d06 = "{\"bossWeapon\":" + _0x3243ec + ",\"bossType\":0,\"boss\":0,\"bossTime\":0,\"winIndex\":0,\"bossDamage\":0,\"damages\":[],\"show\":true,\"bossexp\":" + _0x15170c + "}";
  main_browser.execute("APPS.state.bosses = " + _0x515d06);
  main_browser.execute("APPS.state.bosses.TopKillers = " + JSON.stringify(_0xf351de));
  main_browser.execute("APPS.state.bosses.BossTop = " + JSON.stringify(_0x3df1fa));
  main_browser.execute("APPS.state.bosses.FamTopKillers = " + JSON.stringify(_0x13ecec));
  main_browser.execute("APPS.state.bosses.FamBossTop = " + JSON.stringify(_0x3175d9));
  BossesOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBosses = function () {
  if (BossesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.bosses.show = false;");
    BossesOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("ClientCloseBoss", () => {
  CloseBosses();
});
mp.events.add("ClientSelectBoss", _0x5ccd27 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("SelectBoss", _0x5ccd27);
  }
});
mp.events.add("ClientSelectBossType", _0x781cf => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("SelectBossType", _0x781cf);
  }
});
mp.events.add("ClientAttackType", _0x32e413 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerAttackType", _0x32e413);
  }
});
mp.events.add("ClientOpenSelectedBoss", (_0x1057f8, _0x5c48e6, _0x3a3d19, _0xb75a2a, _0x53b55a = []) => {
  main_browser.execute("APPS.state.bosses.bossType = " + _0x1057f8);
  main_browser.execute("APPS.state.bosses.boss = " + _0x5c48e6);
  main_browser.execute("APPS.state.bosses.bossTime = " + _0x3a3d19);
  main_browser.execute("APPS.state.bosses.bossDamage = " + _0xb75a2a);
  main_browser.execute("APPS.state.bosses.damages = " + JSON.stringify(_0x53b55a));
});
mp.events.add("UpdateBossDamage", _0x17c941 => {
  main_browser.execute("APPS.state.bosses.bossDamage = " + _0x17c941);
});
mp.events.add("updateBossWeapon", _0x3e236f => {
  main_browser.execute("APPS.state.bosses.bossWeapon = " + _0x3e236f);
});
mp.events.add("BossShowPrize", _0x5c3a21 => {
  main_browser.execute("APPS.state.bosses.winIndex = " + _0x5c3a21);
});
mp.events.add("PlayBossSound", () => {
  StartCustomSound("skill_check", "sounds/boss/shoot.ogg", 0.2);
});
let donate_roulette_timeout = null;
mp.events.add("Client_BossNotify", (_0x3cc125, _0x4db1f0, _0x56c79a, _0x20f70e, _0x5e83f9) => {
  if (loggedin) {
    if (donate_roulette_timeout) {
      main_browser.execute("APPS.state.hud.bossWin = false;");
      clearTimeout(donate_roulette_timeout);
      donate_roulette_timeout = null;
    }
    if (mp.storage.data.lottery_hint == 1) {
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      main_browser.execute("APPS.state.hud.bossType = " + _0x20f70e + ";");
      main_browser.execute("APPS.state.hud.bossPrizePreview = '" + _0x5e83f9 + "';");
      main_browser.execute("APPS.state.hud.bossWinnerName = '" + _0x56c79a + "';");
      main_browser.execute("APPS.state.hud.bossName = '" + _0x4db1f0 + "';");
      main_browser.execute("APPS.state.hud.bossPreview = '" + _0x3cc125 + "';");
      main_browser.execute("APPS.state.hud.bossWin = true;");
      donate_roulette_timeout = setTimeout(() => {
        donate_roulette_timeout = null;
        main_browser.execute("APPS.state.hud.bossWin = false;");
      }, 5000);
    }
  }
});