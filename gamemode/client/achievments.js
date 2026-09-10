global.AchievmentsOpened = false;
mp.events.add("OpenAchievmentsClient", (_0x153d80, _0x1cefe0, _0x1c60ea, _0x347007, _0x1f68cc, _0x260830) => {
  if (GlobalCheck() == 1 && AchievmentsOpened == 0) {
    return;
  }
  const _0x3abc05 = {
    achiv: _0x153d80.map(_0xccef3c => typeof _0xccef3c == "string" ? JSON.parse(_0xccef3c) : _0xccef3c),
    lastachiv: _0x1cefe0,
    story_quest_progress: _0x1c60ea,
    gender: _0x347007,
    isBeginnerTasksAvailable: _0x1f68cc,
    beginnerTasksProgress: {},
    show: true
  };
  const _0x4b4d67 = JSON.stringify(_0x3abc05);
  main_browser.execute("APPS.state.new_achievements = " + _0x4b4d67);
  if (_0x260830) {
    setTimeout(() => {
      if (AchievmentsOpened) {
        main_browser.execute("this.AppComponents.new_achievements.selectPage('" + _0x260830 + "');");
      }
    }, 600);
  }
  AchievmentsOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_UpdateSingleAchievment", (_0x3cce5c, _0x1f5818) => {
  if (AchievmentsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_achievements.achiv[" + _0x1f5818 + "] = " + JSON.stringify(_0x3cce5c) + ";");
    main_browser.execute("this.AppComponents.new_achievements.$forceUpdate();");
  }
});
mp.events.add("Client_CloseAchievments", () => {
  CloseAchiv();
});
global.CloseAchiv = function () {
  if (AchievmentsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_achievements.show = false;");
    AchievmentsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("ClientGetAchiv", _0xf702d2 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerGetAchiv", _0xf702d2);
  }
});
global.DailiesOpened = false;
mp.events.add("Client_OpenDailyMissions", (_0x54e994, _0x4f0e67, _0x20184b) => {
  if (GlobalCheck() == 1 && DailiesOpened == 0) {
    return;
  }
  const _0x4a9005 = "{\"tasks\":[" + _0x54e994 + "],\"getted\":" + _0x4f0e67 + ",\"daily_reward\":" + _0x20184b + ",\"show\":true}";
  main_browser.execute("APPS.state.dailytasks = " + _0x4a9005);
  DailiesOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseDaily = function () {
  if (DailiesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.everyday_tasks.show = false;");
    DailiesOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GetDailyReward", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerGetMission");
  }
});
mp.events.add("Daily_Error", _0x45ac34 => {
  if (DailiesOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x45ac34 + "');");
  }
});
global.MainThemeOpened = false;
mp.events.add("Client_OpenDailyInfo", (_0x2d691a, _0x7aa11d, _0x31b4d7, _0x4e610f, _0x1d0ac0) => {
  if (GlobalCheck() == 1 && !inLobby) {
    return;
  }
  const _0x2abd9e = "{\"current_day\":" + _0x7aa11d + ", \"gender\": " + +(localplayer.model != 1885233650) + ", \"donate\":" + _0x31b4d7 + ", \"prize\": " + _0x4e610f + ",\"is_get\": " + _0x1d0ac0 + ",\"show\":true}";
  main_browser.execute("APPS.state.daily_login = " + _0x2abd9e);
  MainThemeOpened = true;
  if (!_0x2d691a) {
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_CloseDailyInfo", () => {
  PlayBaseAudio("base_mouse_click");
  CloseDailyInfo();
});
global.CloseDailyInfo = function (_0x2404b0 = true) {
  if (inLobby && inLobbyModal) {
    return closeLobbyModal();
  }
  if (MainThemeOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.daily_login.show = false;");
    MainThemeOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x2404b0) {
      mp.events.callRemote("GetNotificationsAfterDailyInfo");
    }
  }
};
global.need_to_open_donate_menu = false;
mp.events.add("Client_UpdateDaylyDonate", _0x57de5b => {
  if (MainThemeOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.daily_login.donate = " + _0x57de5b + ";");
  }
});
mp.events.add("Client_MakePaymentItem", _0x3144b4 => {
  if (MainThemeOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_MakePaymentItem", _0x3144b4);
  }
});
mp.events.add("Client_DressItemFromPromo", _0x424ffa => {
  if (MainThemeOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_DressItemFromPromo", _0x424ffa);
  }
});
mp.events.add("Client_CloseEverydayPrizes", () => {
  if (MainThemeOpened && loggedin && !chatActive) {
    CloseDailyInfo();
  }
});
mp.events.add("Client_OpenDonateMenu", () => {
  if (MainThemeOpened && loggedin && !chatActive) {
    CloseDailyInfo(false);
    mp.events.callRemote("ServerMenu", "donate");
    global.need_to_open_donate_menu = true;
  }
});
mp.events.add("Client_GetWeeklyReward", () => {
  if (MainThemeOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetWeeklyReward");
    }
  }
});
mp.events.add("Client_DailyInfoUpdate", _0x2dc7fe => {
  if (MainThemeOpened) {
    main_browser.execute("APPS.state.daily_login.is_get = true");
    main_browser.execute("APPS.state.daily_login.current_day = " + _0x2dc7fe);
    main_browser.execute("APPS.state.introLobby.dailyPrize = null");
  }
});
mp.events.add("Client_OpenEveryDayPrize", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseDailyTasks();
    mp.events.callRemote("Server_OpenEveryDayPrize");
  }
});
mp.events.add("Client_RequestBeginnerTasks", () => {
  if (AchievmentsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBeginnerTasks");
    }
  }
});
mp.events.add("Client_BeginnerTasksData", _0x5723df => {
  if (loggedin) {
    try {
      const _0x1a0a63 = typeof _0x5723df == "string" ? JSON.parse(_0x5723df) : _0x5723df;
      const _0x3dfa30 = {};
      for (let _0x15ae4b = 0; _0x15ae4b < _0x1a0a63.length; _0x15ae4b++) {
        _0x3dfa30[_0x1a0a63[_0x15ae4b].id] = {
          progress: _0x1a0a63[_0x15ae4b].progress,
          completed: _0x1a0a63[_0x15ae4b].completed,
          got_prize: _0x1a0a63[_0x15ae4b].got_prize
        };
      }
      if (typeof beginnerTasksClientProgress != "undefined") {
        Object.assign(beginnerTasksClientProgress, _0x3dfa30);
      }
      if (AchievmentsOpened) {
        main_browser.execute("APPS.state.new_achievements.beginnerTasksProgress = " + JSON.stringify(_0x3dfa30) + ";");
        main_browser.execute("this.AppComponents.new_achievements.$forceUpdate();");
      }
    } catch (_0xf8dc1) {
      console.log("[Client_BeginnerTasksData] parse error:", _0xf8dc1);
    }
  }
});
mp.events.add("Client_HideBeginnerTaskFromHud", () => {
  if (loggedin) {
    global.activeBeginnerTaskId = null;
    mp.storage.data.activeBeginnerTaskId = 0;
    mp.storage.flush();
    main_browser.execute("APPS.state.hud.active_quest = false");
    main_browser.execute("APPS.state.hud.activeBeginnerTaskId = null");
    main_browser.execute("APPS.state.hud.activeBeginnerTaskCompleted = false");
    ShowNotification(language["Вы скрыли отображаемое задание"][curr_lang], 25);
  }
});