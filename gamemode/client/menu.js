function OpenMenu() {
  if (GlobalCheck() != 1 || localplayer.cuffed || is_dead || in_begging_state || is_roped_hands || at_famwar || robbed_player_now || at_robbed_player || carry_player_now || is_carriedby || at_death_line || at_death_race || is_school && (!is_school || global.at_school_dm) || at_bunker_dm || at_duel_location) {
    if (!ReportOpened) {
      mp.events.callRemote("OpenMenuServer");
    }
  }
}
function isNumber(_0x163269) {
  return !isNaN(parseFloat(_0x163269));
}
function unbind(_0x5b77b6, _0x285698) {
  if (_0x285698 == "finger" || _0x285698 == "microphone" || _0x285698 == "globalmic" || _0x285698 == "familymic" || _0x285698 == "drift") {
    mp.keys.unbind(_0x5b77b6, true);
    mp.keys.unbind(_0x5b77b6, false);
  } else {
    mp.keys.unbind(_0x5b77b6, false);
    if (_0x5b77b6 == 17 && mp.storage.data.bind_controls.engine == 17) {
      mp.keys.bind(mp.storage.data.bind_controls.engine, false, EngineFunc);
    }
    if (_0x5b77b6 == 90 && mp.storage.data.bind_controls.drift == 90) {
      mp.keys.bind(_0x5b77b6, true, DriftFunc);
      mp.keys.bind(_0x5b77b6, false, UnDriftFunc);
    }
    if (_0x5b77b6 == 88 && mp.storage.data.bind_controls.cruize == 88) {
      mp.keys.bind(mp.storage.data.bind_controls.cruize, false, CruizFunc);
    }
    if (_0x5b77b6 == 90 && mp.storage.data.bind_controls.fastaction1 == 90) {
      mp.keys.bind(mp.storage.data.bind_controls.fastaction1, false, FastAction1);
    }
    if (_0x5b77b6 == 69) {
      mp.keys.bind(69, false, ActionEUnPressed);
    }
  }
}
function bind(_0x25fc72, _0x2e02d0) {
  if (_0x2e02d0 == "inventory") {
    mp.keys.bind(_0x25fc72, false, InventoryFunc);
    main_browser.execute("APPS.state.hud.button_inv = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "menu") {
    mp.keys.bind(_0x25fc72, false, MenuFunc);
    main_browser.execute("APPS.state.hud.button_menu = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "action") {
    mp.keys.bind(_0x25fc72, false, ActionFunc);
    main_browser.execute("APPS.state.hud.button_interact = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "mobile") {
    mp.keys.bind(_0x25fc72, false, MobileFunc);
    main_browser.execute("APPS.state.hud.button_mobile = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "microphone") {
    mp.keys.bind(_0x25fc72, true, MicFunc);
    mp.keys.bind(_0x25fc72, false, UnMicFunc);
    main_browser.execute("APPS.state.hud.button_mic = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "globalmic") {
    mp.keys.bind(_0x25fc72, true, GlobalMicFunc);
    mp.keys.bind(_0x25fc72, false, UnGlobalMicFunc);
    main_browser.execute("APPS.state.hud.button_globalmic = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "familymic") {
    mp.keys.bind(_0x25fc72, true, FamilyMicFunc);
    mp.keys.bind(_0x25fc72, false, UnFamilyMicFunc);
    main_browser.execute("APPS.state.hud.button_familymic = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "hud") {
    mp.keys.bind(_0x25fc72, false, HUDFunc);
    main_browser.execute("APPS.state.hud.button_hud = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "cruize") {
    mp.keys.bind(_0x25fc72, false, CruizFunc);
    main_browser.execute("APPS.state.hud.button_cruize = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "fast1") {
    mp.keys.bind(_0x25fc72, false, FastFunc1);
  } else if (_0x2e02d0 == "fast2") {
    mp.keys.bind(_0x25fc72, false, FastFunc2);
  } else if (_0x2e02d0 == "fast3") {
    mp.keys.bind(_0x25fc72, false, FastFunc3);
  } else if (_0x2e02d0 == "fast4") {
    mp.keys.bind(_0x25fc72, false, FastFunc4);
  } else if (_0x2e02d0 == "fast5") {
    mp.keys.bind(_0x25fc72, false, FastFunc5);
  } else if (_0x2e02d0 == "fast6") {
    mp.keys.bind(_0x25fc72, false, FastFunc6);
  } else if (_0x2e02d0 == "engine") {
    mp.keys.bind(_0x25fc72, false, EngineFunc);
    main_browser.execute("APPS.state.hud.button_engine = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "micreload") {
    mp.keys.bind(_0x25fc72, false, MicrophoneReloadFunc);
  } else if (_0x2e02d0 == "finger") {
    mp.keys.bind(_0x25fc72, true, FingerFunc);
    mp.keys.bind(_0x25fc72, false, UnFingerFunc);
  } else if (_0x2e02d0 == "drift") {
    mp.keys.bind(_0x25fc72, true, DriftFunc);
    mp.keys.bind(_0x25fc72, false, UnDriftFunc);
  } else if (_0x2e02d0 == "additionalvoice") {
    mp.keys.bind(_0x25fc72, false, CancelAdditionalVoice);
  } else if (_0x2e02d0 == "familyvoice") {
    mp.keys.bind(_0x25fc72, false, CancelFamilyVoice);
  } else if (_0x2e02d0 == "safetybelt") {
    mp.keys.bind(_0x25fc72, false, SafetyBeltFunc);
    main_browser.execute("APPS.state.hud.button_belt = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "firemode") {
    mp.keys.bind(_0x25fc72, false, ChangeFireModeFunc);
  } else if (_0x2e02d0 == "quest") {
    mp.keys.bind(_0x25fc72, false, CancelQuestFunc);
    main_browser.execute("APPS.state.hud.quest_key = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "lock") {
    mp.keys.bind(_0x25fc72, false, CarLockFunc);
    main_browser.execute("APPS.state.hud.button_lock = '" + GetKeyCode(_0x25fc72) + "';");
  } else if (_0x2e02d0 == "leftcam") {
    mp.keys.bind(_0x25fc72, false, TogglePlayerCameraSide);
  } else if (_0x2e02d0 == "autopilot") {
    mp.keys.bind(_0x25fc72, false, StartAutoPilot);
    main_browser.execute("APPS.state.hud.button_autopilot = '" + GetKeyCode(mp.storage.data.bind_controls.autopilot) + "';");
  } else if (_0x2e02d0 == "voicedist") {
    mp.keys.bind(_0x25fc72, false, VoiceDistFunc);
  } else if (_0x2e02d0 == "fastaction1") {
    mp.keys.bind(_0x25fc72, true, FastAction1);
    main_browser.execute("APPS.state.hud.fast_action1 = '" + GetKeyCode(mp.storage.data.bind_controls.fastaction1) + "';");
  } else if (_0x2e02d0 == "fastaction2") {
    mp.keys.bind(_0x25fc72, true, FastAction2);
    main_browser.execute("APPS.state.hud.fast_action2 = '" + GetKeyCode(mp.storage.data.bind_controls.fastaction2) + "';");
  } else if (_0x2e02d0 == "fastaction3") {
    mp.keys.bind(_0x25fc72, true, FastAction3);
    main_browser.execute("APPS.state.hud.fast_action3 = '" + GetKeyCode(mp.storage.data.bind_controls.fastaction3) + "';");
  } else if (_0x2e02d0 == "ragdoll") {
    mp.keys.bind(_0x25fc72, false, RagdollFunc);
  } else if (_0x2e02d0 == "shotmarker") {
    mp.keys.bind(_0x25fc72, false, function () {
      SendShotMarker(1);
    });
  } else if (_0x2e02d0 == "shotmarker_fam") {
    mp.keys.bind(_0x25fc72, false, function () {
      SendShotMarker(2);
    });
  }
}
function resetBinds() {
  const _0x102343 = new Set();
  Object.entries(mp.storage.data.bind_controls).forEach(([_0x302edb, _0x5ba706]) => {
    if (defaultBindControls[_0x302edb] && defaultBindControls[_0x302edb].keyCode != _0x5ba706) {
      if (!_0x102343.has(_0x5ba706)) {
        _0x102343.add(_0x5ba706);
        unbind(_0x5ba706, _0x302edb);
      }
      mp.storage.data.bind_controls[_0x302edb] = defaultBindControls[_0x302edb].keyCode;
      bind(defaultBindControls[_0x302edb].keyCode, _0x302edb);
    }
  });
  mp.storage.flush();
}
function RagdollFunc() {
  if (GlobalCheck() != 1) {
    if (!in_animation && !lunaParkEating && !sitting_at_custom_chair && !localplayer.isGoingIntoCover() && !localplayer.vehicle && !(jail_time_in_jail > 0) && !(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TryToRagdoll");
    }
  }
}
function MenuFunc() {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && (!GlobalCheck() || !!menuOpen || !!localplayer.cuffed || !!is_dead || !!is_roped_hands || !!at_famwar || !!robbed_player_now || !!at_robbed_player || !!carry_player_now || !!is_carriedby || !!in_begging_state || !!at_death_line || !!at_death_race || !!at_bunker_dm || !!is_school && (!is_school || !!global.at_school_dm) || !!at_duel_location)) {
    lastCheck = new Date().getTime();
    if (menuOpen == 0) {
      OpenMenu();
    } else {
      CloseMenu();
    }
  }
}
function CancelQuestFunc() {
  if (GlobalCheck() != 1 && !(new Date().getTime() - lastCheck < 1000)) {
    mp.events.callRemote("GetQuestMoreInfo");
  }
}
function CarLockFunc() {
  if (!(new Date().getTime() - lastCheck < 1000) && GlobalCheck() != 1) {
    lastCheck = new Date().getTime();
    if (localplayer.vehicle) {
      mp.events.callRemote("CarLock");
    } else {
      let _0x180d50 = null;
      let _0x49f8c4 = 11;
      if (new_version != 1) {
        mp.vehicles.forEachInStreamRange(_0x2d5bad => {
          const _0x1b5fc1 = mp.game.system.vdist(_0x2d5bad.position.x, _0x2d5bad.position.y, _0x2d5bad.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
          if (_0x1b5fc1 < _0x49f8c4 && _0x2d5bad.dimension == localplayer.dimension) {
            _0x49f8c4 = _0x1b5fc1;
            _0x180d50 = _0x2d5bad;
          }
        });
      }
      mp.events.callRemote("CarLock", _0x180d50);
    }
  }
}
function InventoryFunc() {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && (!GlobalCheck() || !!at_famwar || !!localplayer.cuffed && !is_dead && !ReportOpened && !menuOpen)) {
    lastCheck = new Date().getTime();
    if (invOpen == 0) {
      OpenInv();
    } else {
      CloseInv();
    }
  }
}
function ChangeFireModeFunc() {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && !GlobalCheck()) {
    lastCheck = new Date().getTime();
    ChangeFireMode();
  }
}
global.menuOpen = false;
mp.events.add("MenuOpened", (_0x28f86c = undefined, _0x306fb2 = undefined, _0x4b6476 = undefined) => {
  let _0x501bd1 = 0;
  if (localplayer.model != 1885233650) {
    _0x501bd1 = 1;
  }
  const _0xeb164f = "{\"jobBonus\": " + (_0x4b6476 ? JSON.stringify(_0x4b6476) : undefined) + ", \"newbieBonus\": " + _0x306fb2 + ", \"gender\": " + _0x501bd1 + ", \"serverTime\":" + _0x28f86c + ",\"show\":true}";
  main_browser.execute("APPS.state.main_menu = " + _0xeb164f);
  menuOpen = true;
  mp.events.call("Disablechat");
  mp.gui.cursor.show(true, true);
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
});
mp.events.add("MenuClose", () => {
  CloseMenu();
});
mp.events.add("Menu_Error", _0x178dfb => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x178dfb + "');");
});
global.CloseMenu = function () {
  if (menuOpen && loggedin && !chatActive) {
    main_browser.execute("APPS.state.main_menu.show = false;");
    menuOpen = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    if (is_dead) {
      mp.gui.cursor.show(true, true);
    } else {
      mp.gui.cursor.show(false, false);
    }
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GotoBizMenu", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseStats();
    mp.events.callRemote("Server_LoadPlayerPropertyDesign");
  }
});
mp.events.add("Client_OpenBizFromMobile", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseMobile();
    mp.events.callRemote("Server_LoadPlayerPropertyDesign");
  }
});
mp.events.add("Client_GotoMemberMenu", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseStats();
    mp.events.callRemote("OpenMemberInfo_Server");
  }
});
mp.events.add("Client_GoToCertainCaseThroughMenu", _0x5969cc => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    if (BattlePassOpened) {
      CloseBattlePass();
    }
    if (bSummer2026 && summer2026AttractionsMainMenuOpened) {
      mp.events.call("Client_Summer2026_CloseMainMenu");
    }
    CloseMenu();
    mp.events.callRemote("Server_GoToCertainCaseThroughMenu", _0x5969cc);
  }
});
mp.events.add("Client_GotoBackpacksInDonate", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    CloseBrowsers();
    mp.events.callRemote("Server_GotoBackpacksInDonate");
  }
});
mp.events.add("Client_GotoGoToMercedes63InDonate", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    CloseMenu();
    mp.events.callRemote("Server_GotoGoToMercedes63InDonate");
  }
});
mp.events.add("Client_GotoElectricSCTInDonate", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    CloseMenu();
    mp.events.callRemote("Server_GotoElectricSCTInDonate");
  }
});
global.in_rpgrand_browser = null;
mp.events.add("MenuEvent", _0x5238fc => {
  if (menuOpen && loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseMenu();
    switch (_0x5238fc) {
      case "referal":
        mp.events.callRemote("Server_OpenReferalMenu");
        break;
      case "ChristmasGifts":
        mp.events.callRemote("Server_OpenChristmasGifts");
        break;
      case "easter":
        mp.events.callRemote("Server_OpenEasterMenu");
        break;
      case "boss":
        mp.events.callRemote("OpenBosses");
        break;
      case "summerevent":
        mp.events.callRemote("Server_OpenSummerMenu");
        break;
      case "halloween":
        mp.events.callRemote("Server_GetInfoAboutHalloween");
        break;
      case "guidebook":
        mp.events.callRemote("Server_OpenGuideBook");
        break;
      case "christmas":
        mp.events.callRemote("Server_OpenChristmasMenu");
        break;
      case "battlepass":
        mp.events.callRemote("Server_OpenBattlePass");
        break;
      case "birthday":
        mp.events.callRemote("Server_OpenBirthdayDesign");
        break;
      case "stats":
        mp.events.callRemote("Server_OpenStats");
        break;
      case "inventory":
        OpenInv();
        break;
      case "MyClub":
        mp.events.callRemote("Server_OpenClubMenu");
        break;
      case "report":
        mp.events.callRemote("ServerMenu", "report");
        break;
      case "donate":
        mp.events.callRemote("ServerMenu", "donate");
        break;
      case "MyJob":
        mp.events.callRemote("OpenJobHelpServer");
        break;
      case "MyBattalions":
        mp.events.callRemote("Server_OpenBattalionsMenu");
        break;
      case "MyOrg":
        mp.events.callRemote("OpenMemberInfo_Server");
        break;
      case "MyBusiness":
        if (localplayer.getVariable("Dead")) {
          return;
        }
        mp.events.callRemote("Server_LoadPlayerPropertyDesign");
        break;
      case "Achievments":
        mp.events.callRemote("OpenAchievments");
        break;
      case "Daily":
        if (localplayer.getVariable("Dead")) {
          return;
        }
        mp.events.callRemote("OpenDailyMissions");
        break;
      case "settings":
        mp.events.callRemote("Server_OpenSettings");
        break;
      case "family":
        mp.events.callRemote("Server_OpenFamilyMenu");
        break;
      case "christmaslottery":
        mp.events.callRemote("Server_OpenChristmasLottery");
        break;
      case "petsystem":
        if (localplayer.getVariable("Dead")) {
          return;
        }
        mp.events.callRemote("Server_OpenPetDesign");
        break;
      case "february14":
      case "february2025":
        mp.events.callRemote("Server_OpenFebruaryMainDesign");
        break;
      case "diplomacy":
        mp.events.callRemote("Server_OpenDiplomacyDesign");
        break;
      case "pirates":
        mp.events.callRemote("Server_OpenMainEventDesign");
        break;
      case "school2024":
        mp.events.callRemote("Server_OpenSchool2024Design");
        break;
      case "halloween2024":
        mp.events.callRemote("Server_OpenHalloweenDesign2024");
        break;
      case "winter2024":
        mp.events.callRemote("Server_OpenChristmasDesign2024");
        break;
      case "winterlogin2024":
        mp.events.callRemote("Server_OpenChristmasDaily");
        break;
      case "rpgrand":
        in_rpgrand_browser = mp.browsers.new("https://rpgrand.com/");
        SwitchHUDToDesign(true);
        break;
      case "new_roulette":
        mp.events.callRemote("Server_ShowNewDonateRoulette", 4, 0);
        break;
      case "events":
        mp.events.callRemote("Server_OpenEventMenu");
        break;
      case "summer_event_2025":
        mp.events.callRemote("Server_OpenMainSummerDesign2025");
        break;
      case "summer_cashback":
        mp.events.callRemote("Server_RequestOpenCashback");
        break;
      case "school2025":
        mp.events.callRemote("Server_OpenSchoolDesign2025");
        break;
      case "halloween2025":
        mp.events.callRemote("Server_OpenHalloweenDesign2025");
        break;
      case "christmas2025":
        mp.events.callRemote("Server_RequestOpenChristmasDesign2025");
        break;
      case "easter2026":
        mp.events.callRemote("Server_OpenEaster2026Menu");
        break;
      case "royal_lottery":
        mp.events.callRemote("Server_OpenLotteryByType", "ROYAL");
        break;
      case "summer2026":
        mp.events.callRemote("Server_Summer2026_OpenMainMenu");
    }
  }
});
global.CloseRPGrandBrowser = function () {
  if (in_rpgrand_browser) {
    in_rpgrand_browser.destroy();
    in_rpgrand_browser = null;
  }
  SwitchHUDToDesign(false);
};
global.ReportOpened = false;
mp.events.add("ShowReport", (_0x5835df, _0x46f378, _0x3d6eeb) => {
  if (GlobalCheck() && !localplayer.cuffed && !is_dead && !in_begging_state && !is_roped_hands && !at_famwar && !robbed_player_now && !at_robbed_player && !carry_player_now && !is_carriedby && !at_death_line && !at_death_race && !at_bunker_dm && (!is_school || is_school && !global.at_school_dm) && !at_duel_location) {
    return;
  }
  let _0x533685 = [];
  let _0xfb4c24 = 0;
  mp.players.forEachInRange(localplayer.position, 50, _0x54fb46 => {
    if (!(_0xfb4c24 >= 20)) {
      if (_0x54fb46 != localplayer && _0x54fb46.dimension == localplayer.dimension && _0x54fb46.getAlpha() != 0) {
        if (mp.storage.data.friends[_0x54fb46.name] != null && !_0x54fb46.getDrawableVariation(1) || tempfriends[_0x54fb46.name] != null || local_family == _0x54fb46.family && local_family || local_member == _0x54fb46.member && local_member > 0 || spose_name === _0x54fb46.name) {
          _0x533685.push({
            name: _0x54fb46.name.replace("_", " "),
            pid: _0x54fb46.real_id
          });
        } else {
          _0x533685.push({
            name: language.Игрок[curr_lang],
            pid: _0x54fb46.real_id
          });
        }
        _0xfb4c24++;
      }
    }
  });
  const _0x2822a0 = "{\n\t\t\"in_call\":" + _0x3d6eeb + ",\n\t\t\"history_questions\":" + JSON.stringify(_0x5835df) + ",\n\t\t\"report_info\":" + JSON.stringify(_0x46f378) + ",\n\t\t\"nearby_players\":" + JSON.stringify(_0x533685) + ",\n\t\t\"show\":true\n\t}";
  main_browser.execute("APPS.state.report = " + _0x2822a0);
  ReportOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseReport = function () {
  if (ReportOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.report.show = false;");
    ReportOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    if (is_dead) {
      mp.gui.cursor.show(true, true);
    } else {
      mp.gui.cursor.show(false, false);
    }
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_SendReport", _0x2236a5 => {
  if (ReportOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("SendReportServer", _0x2236a5);
    }
  }
});
mp.events.add("Report_Fail", _0x182347 => {
  if (ReportOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x182347 + "');");
  }
});
mp.events.add("Client_BackToMenu", () => {
  if (ReportOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseReport();
      mp.events.callRemote("OpenMenuServer");
    }
  }
});
mp.events.add("CloseReport", () => {
  CloseReport();
});
global.spose_marker = 0;
mp.events.add("Client_LoadSposeMarker", _0x132ec0 => {
  spose_marker = _0x132ec0;
});
global.SettingsOpened = false;
mp.events.add("Client_OpenMailVerification", () => {
  mp.events.callRemote("Server_OpenSettings", 6);
});
mp.events.add("OpenSettings", (_0x15546c, _0x161819, _0x25778d, _0x4c53e2, _0x1f89ff, _0x5d7cf5, _0x510efa, _0x549323, _0x154279, _0x361f42, _0x4abe49, _0x1304db, _0x4695b8, _0x5a6645, _0x23946f, _0x106bcb) => {
  if (GlobalCheck() == 1 && !is_dead && !in_begging_state) {
    return;
  }
  _0x1f89ff ||= [];
  _0x5d7cf5 ||= [];
  let _0x16358c = false;
  _0x16358c = _0x549323 != 1;
  let _0x1cedf5 = false;
  if (_0x154279 == 1) {
    _0x1cedf5 = true;
  }
  let _0x27cb1d = false;
  if (_0x154279 == 2) {
    _0x27cb1d = true;
  }
  let _0xe2341e;
  let _0x23f437 = false;
  _0x23f437 = _0x361f42 == 1;
  _0x5a6645 = _0x5a6645 == 1;
  _0xe2341e = curr_lang != "ru" ? "{\"forcePage\":" + _0x15546c + ",\"need_mail_verification\":" + _0x106bcb + ",\"snow_mode\":" + mp.storage.data.snow_mode + ",\"ambient_sounds\":" + mp.storage.data.ambient_sounds + ",\"spose_marker\":" + spose_marker + ",\"hold_mic\":" + mp.storage.data.mic_toggle + ",\"graphic_settings\":" + mp.storage.data.graphic_select + ",\"autologin\":" + _0x5a6645 + ",\"hear_newbie_level\":" + _0x4695b8 + ",\"bigmap_show\":" + mp.storage.data.bigmap_state + ",\"other_backpack_show\":" + mp.storage.data.other_backpack_show + ",\"dmg_show\":" + _0x1304db + ",\"backpack_show\":" + _0x4abe49 + ",\"wedding_notif\":" + mp.storage.data.wedding_notif + ",\"kill_list_show\":" + mp.storage.data.kill_list_show + ",\"shot_display\":" + mp.storage.data.shot_display + ",\"donate_notif\":" + mp.storage.data.donate_notif + ",\"fam_label\":" + mp.storage.data.fam_label + ",\"atm_blips\":" + mp.storage.data.atm_blips + ",\"house_blips\":" + _0x23f437 + ",\"graffiti_notif\":" + mp.storage.data.graffiti_notif + ",\"players_distance\":" + mp.storage.data.player_lod_distance + ",\"vehicles_distance\":" + mp.storage.data.vehicle_lod_distance + ",\"email\":'" + _0x161819 + "',\"correct_password\":'" + _0x25778d + "',\"christmas_theme\":" + _0x27cb1d + ",\"halloween_theme\":" + _0x1cedf5 + ",\"kill_list\":" + mp.storage.data.kill_list + ",\"Navigator\":" + mp.storage.data.navigator + ",\"left_hints\":" + mp.storage.data.left_hints + ",\"lottery_hint\":" + mp.storage.data.lottery_hint + ",\"VisibleNames\":" + _0x4c53e2[0] + ",\"AdminAction\":" + _0x4c53e2[1] + ",\"Advertisement\":" + _0x4c53e2[2] + ",\"RacionJob\":" + _0x4c53e2[3] + ",\"FamilyJob\":" + _0x16358c + ",\"hotkeys\":" + JSON.stringify(mp.storage.data.bind_controls) + ",\"white_list_pool\":[" + _0x1f89ff + "],\"black_list_pool\":[" + _0x5d7cf5 + "],\"voice_volume\":" + Voice_Max_Volume + ",\"racion_volume\":" + Racion_Max_Volume + ",\"chat_height\":" + mp.storage.data.chat_height + ",\"last_password\":'',\"new_password\":'',\"new_password2\":'',\"new_email\":'',\"new_email2\":'',\"google_auth\":'" + _0x510efa + "',\"new_design_show\":" + mp.storage.data.new_design_show + ",\"car_promo_notif\":" + mp.storage.data.car_promo_notif + ",\"fam_shooting_markers\":" + mp.storage.data.fam_shooting_marker + ",\"crosshair\":" + JSON.stringify(mp.storage.data.crosshair) + ",\"deaf_mute\": " + _0x23946f + ", \"bHalloweenMusic\":" + mp.storage.data.halloween_music + ",\"halloween_weather\":" + mp.storage.data.halloween_mode + ", \"new_hud\": " + mp.storage.data.new_hud + ",\"new_speedometr\": " + mp.storage.data.new_speedometr + ",\"betterSuppression\": " + mp.storage.data.betterSuppression + ",\"networkOptimisations\": " + mp.storage.data.networkOptimisations + ",\"enableDrugsEffect\":" + mp.storage.data.enableDrugsEffect + ",\"muteSpatialSound\":" + mp.storage.data.muteSpatialSound + ",\"vip_chat_disable\":" + mp.storage.data.vip_chat_disable + ", \"show\":true}" : "{\"snow_mode\":" + mp.storage.data.snow_mode + ",\"ambient_sounds\":" + mp.storage.data.ambient_sounds + ",\"spose_marker\":" + spose_marker + ",\"hold_mic\":" + mp.storage.data.mic_toggle + ",\"graphic_settings\":" + mp.storage.data.graphic_select + ",\"autologin\":" + _0x5a6645 + ",\"hear_newbie_level\":" + _0x4695b8 + ",\"bigmap_show\":" + mp.storage.data.bigmap_state + ",\"other_backpack_show\":" + mp.storage.data.other_backpack_show + ",\"backpack_sound\":" + mp.storage.data.backpack_sound + ",\"dmg_show\":" + _0x1304db + ",\"backpack_show\":" + _0x4abe49 + ",\"wedding_notif\":" + mp.storage.data.wedding_notif + ",\"kill_list_show\":" + mp.storage.data.kill_list_show + ",\"shot_display\":" + mp.storage.data.shot_display + ",\"donate_notif\":" + mp.storage.data.donate_notif + ",\"fam_label\":" + mp.storage.data.fam_label + ",\"atm_blips\":" + mp.storage.data.atm_blips + ",\"house_blips\":" + _0x23f437 + ",\"graffiti_notif\":" + mp.storage.data.graffiti_notif + ",\"players_distance\":" + mp.storage.data.player_lod_distance + ",\"vehicles_distance\":" + mp.storage.data.vehicle_lod_distance + ",\"email\":'" + _0x161819 + "',\"correct_password\":'" + _0x25778d + "',\"christmas_theme\":" + _0x27cb1d + ",\"halloween_theme\":" + _0x1cedf5 + ",\"kill_list\":" + mp.storage.data.kill_list + ",\"Navigator\":" + mp.storage.data.navigator + ",\"left_hints\":" + mp.storage.data.left_hints + ",\"lottery_hint\":" + mp.storage.data.lottery_hint + ",\"VisibleNames\":" + _0x4c53e2[0] + ",\"AdminAction\":" + _0x4c53e2[1] + ",\"Advertisement\":" + _0x4c53e2[2] + ",\"RacionJob\":" + _0x4c53e2[3] + ",\"FamilyJob\":" + _0x16358c + ",\"hotkeys\":" + JSON.stringify(mp.storage.data.bind_controls) + ",\"white_list_pool\":[" + _0x1f89ff + "],\"black_list_pool\":[" + _0x5d7cf5 + "],\"voice_volume\":" + Voice_Max_Volume + ",\"racion_volume\":" + Racion_Max_Volume + ",\"chat_height\":" + mp.storage.data.chat_height + ",\"last_password\":'',\"new_password\":'',\"new_password2\":'',\"new_email\":'',\"new_email2\":'',\"google_auth\":'" + _0x510efa + "',\"new_design_show\":" + mp.storage.data.new_design_show + ", \"new_standartaim_show\":" + mp.storage.data.new_standartaim_show + ",\"car_promo_notif\":" + mp.storage.data.car_promo_notif + ",\"fam_shooting_markers\":" + mp.storage.data.fam_shooting_marker + ",\"crosshair\":" + JSON.stringify(mp.storage.data.crosshair) + ",\"deaf_mute\": " + _0x23946f + ",\"bHalloweenMusic\":" + mp.storage.data.halloween_music + ",\"halloween_weather\":" + mp.storage.data.halloween_mode + ",\"new_hud\": " + mp.storage.data.new_hud + ",\"new_speedometr\": " + mp.storage.data.new_speedometr + ",\"enableDrugsEffect\":" + mp.storage.data.enableDrugsEffect + ",\"muteSpatialSound\":" + mp.storage.data.muteSpatialSound + ",\"show\":true}";
  main_browser.execute("APPS.state.gamesettings = " + _0xe2341e);
  SettingsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_ChangeNewDesignCapture", _0x2b92cc => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x2b92cc == 1) {
      mp.storage.data.new_design_show = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.new_design_show = 0;
      mp.storage.flush();
    }
    main_browser.execute("APPS.state.hud.new_design_show = " + mp.storage.data.new_design_show + ";");
  }
});
mp.events.add("Client_ChangeNewStandartAimCapture", _0x19f17c => {
  if (SettingsOpened && loggedin && !chatActive && curr_lang == "ru") {
    if (_0x19f17c == 1) {
      mp.storage.data.new_standartaim_show = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.new_standartaim_show = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeGoogleStatus", _0xf50d18 => {
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.google_auth = \"" + _0xf50d18 + "\";");
  }
});
mp.events.add("Client_ReloadWhiteList", _0x44606f => {
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.white_list_pool = [" + _0x44606f + "];");
  }
});
global.black_list_listeners = [];
mp.events.add("Client_ReloadBlackList", _0x5112ef => {
  black_list_listeners = _0x5112ef;
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.black_list_pool = [" + _0x5112ef + "];");
  }
});
global.CloseSettings = function () {
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.show = false;");
    SettingsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    if (is_dead) {
      mp.gui.cursor.show(true, true);
    } else {
      mp.gui.cursor.show(false, false);
    }
    mp.events.call("Enablechat");
  }
};
mp.events.add("Settings_Fail", _0x52902e => {
  if (SettingsOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x52902e + "');");
  }
});
mp.events.add("Client_ChangeEmail", _0x381c18 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeMail", _0x381c18);
    }
  }
});
mp.events.add("LoadNewMail", _0x3a05ac => {
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.email = '" + _0x3a05ac + "';");
    main_browser.execute("APPS.state.gamesettings.new_email = '';");
    main_browser.execute("APPS.state.gamesettings.new_email2 = '';");
  }
});
mp.events.add("Client_ChangePassword", (_0xd00b1, _0x50b995) => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangePassword", _0xd00b1, _0x50b995);
    }
  }
});
mp.events.add("LoadNewPass", _0x2e7da4 => {
  if (SettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gamesettings.correct_password = '" + _0x2e7da4 + "';");
    main_browser.execute("APPS.state.gamesettings.last_password = '';");
    main_browser.execute("APPS.state.gamesettings.new_password = '';");
    main_browser.execute("APPS.state.gamesettings.new_password2 = '';");
  }
});
mp.events.add("Client_ChangeNames", _0x49b82 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeNames", _0x49b82);
  }
});
mp.events.add("Client_ChangeAdmin", _0x6ec9a5 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeAdmin", _0x6ec9a5);
  }
});
mp.events.add("Client_ChangeADstatus", _0x4d2d72 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeADstatus", _0x4d2d72);
  }
});
mp.events.add("Client_ChangeLeftHints", _0x3429d3 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x3429d3 == 1) {
      mp.storage.data.left_hints = 1;
      mp.storage.flush();
      main_browser.execute("APPS.state.hud.left_hints_disabled = false;");
    } else {
      main_browser.execute("APPS.state.hud.left_hints_disabled = true;");
      mp.storage.data.left_hints = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeKillListShowen", _0x4fa35f => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x4fa35f == 1) {
      mp.storage.data.kill_list_show = 1;
      mp.storage.flush();
      main_browser.execute("APPS.state.hud.kill_list_show = true;");
    } else {
      main_browser.execute("APPS.state.hud.kill_list_show = false;");
      mp.storage.data.kill_list_show = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeLotteryHint", _0x446c43 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x446c43 == 1) {
      mp.storage.data.lottery_hint = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.lottery_hint = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeKillList", _0x46dcce => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x46dcce == 1) {
      mp.storage.data.kill_list = 1;
      mp.storage.flush();
      main_browser.execute("APPS.state.hud.big_kill_list = 1;");
    } else {
      main_browser.execute("APPS.state.hud.big_kill_list = 0;");
      mp.storage.data.kill_list = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeGraffitiNotify", _0x4bc062 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x4bc062 == 1) {
      mp.storage.data.graffiti_notif = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.graffiti_notif = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeATMBlips", _0x752c62 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x752c62 == 1) {
      mp.storage.data.atm_blips = 1;
      mp.storage.flush();
      ChangeAtmBlipsState(true);
    } else {
      mp.storage.data.atm_blips = 0;
      mp.storage.flush();
      ChangeAtmBlipsState(false);
    }
  }
});
mp.events.add("Client_ChangeDonateNotif", _0x213659 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x213659 == 1) {
      mp.events.callRemote("Server_CanChangeDonateStock");
    } else {
      mp.storage.data.donate_notif = 0;
      mp.storage.flush();
      main_browser.execute("APPS.state.hud.donate_stock_show = false;");
    }
  }
});
mp.events.add("Client_ChangeCarNotif", _0x3342c7 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x3342c7 == 1) {
      mp.events.callRemote("Server_CanChangeCarPromo");
    } else {
      mp.storage.data.car_promo_notif = 0;
      mp.storage.flush();
      main_browser.execute("APPS.state.hud.car_promo_show = false;");
    }
  }
});
mp.events.add("Client_SetCarPromoNotif", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.storage.data.car_promo_notif = 1;
    mp.storage.flush();
    main_browser.execute("APPS.state.hud.car_promo_show = true;");
  }
});
mp.events.add("Client_SetDonateStockNotif", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.storage.data.donate_notif = 1;
    mp.storage.flush();
    main_browser.execute("APPS.state.hud.donate_stock_show = true;");
  }
});
mp.events.add("Client_ChangeShotDisplay", _0x2eda52 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x2eda52 == 1) {
      mp.storage.data.shot_display = 1;
      mp.storage.flush();
      mp.game.graphics.bloodVfxMode = 1;
    } else {
      mp.storage.data.shot_display = 0;
      mp.storage.flush();
      mp.game.graphics.bloodVfxMode = 0;
    }
  }
});
mp.events.add("Client_ChangeWeddingNotif", _0x2b39f0 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x2b39f0 == 1) {
      mp.storage.data.wedding_notif = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.wedding_notif = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeBigMapState", _0x5a0b99 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x5a0b99 == 1) {
      mp.storage.data.bigmap_state = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.bigmap_state = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeHoldMicState", _0x53bdae => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x53bdae == 1) {
      mp.storage.data.mic_toggle = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.mic_toggle = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeFamShootingMarkers", _0x26a297 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x26a297 == 1) {
      mp.storage.data.fam_shooting_marker = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.fam_shooting_marker = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeAmbientSound", _0x4d27ce => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x4d27ce == 1) {
      mp.storage.data.ambient_sounds = true;
      mp.game.audio.stopAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");
      mp.storage.flush();
    } else {
      mp.storage.data.ambient_sounds = false;
      mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeClubChat", _0x39165a => {});
mp.events.add("Client_ChangeAutoLoginState", _0x3dc4ce => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeAutoLoginState", _0x3dc4ce);
  }
});
mp.events.add("Client_ChangeFamLabel", _0x417087 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x417087 == 1) {
      mp.storage.data.fam_label = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.fam_label = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeSpouseMarker", _0x449cfb => {
  if (SettingsOpened && loggedin && !chatActive) {
    spose_marker = _0x449cfb;
    mp.events.callRemote("Server_ChangeSpouseMarkerStatus", _0x449cfb);
  }
});
mp.events.add("Client_ChangeOtherBackPack", _0x3b6be5 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x3b6be5 == 1) {
      mp.storage.data.other_backpack_show = 1;
      mp.storage.flush();
      mp.players.forEachInStreamRange(function (_0x54b201) {
        if (_0x54b201.last_backpack) {
          _0x54b201.setComponentVariation(5, _0x54b201.last_backpack, _0x54b201.last_backpack_texture, 0);
        }
      });
    } else {
      mp.storage.data.other_backpack_show = 0;
      mp.storage.flush();
      mp.players.forEachInStreamRange(function (_0x5c0a39) {
        if (_0x5c0a39.getDrawableVariation(5) > 0) {
          _0x5c0a39.last_backpack = _0x5c0a39.getDrawableVariation(5);
          _0x5c0a39.last_backpack_texture = _0x5c0a39.getTextureVariation(5);
          _0x5c0a39.setComponentVariation(5, 0, 0, 0);
        }
      });
    }
  }
});
mp.events.add("Client_ChangeBackpackSound", _0x2f6463 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x2f6463 == 1) {
      mp.storage.data.backpack_sound = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.backpack_sound = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeDrugsEffect", _0x240819 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0x240819 == 1) {
        mp.storage.data.enableDrugsEffect = 1;
        mp.storage.flush();
      } else {
        mp.storage.data.enableDrugsEffect = 0;
        mp.storage.flush();
        mp.events.call("Client_CancelDrugsEffect");
      }
    }
  }
});
mp.events.add("Client_ChangeBackPack", _0x3cf135 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeBackPack", _0x3cf135);
    }
  }
});
mp.events.add("Client_ChangeDMGState", _0x202151 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeDMGState", _0x202151);
    }
  }
});
mp.events.add("Client_ChangeDeafMuteState", _0x1d7e22 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeDeafMuteState", _0x1d7e22);
    }
  }
});
mp.events.add("Client_ChangeHouseBlips", _0x3d4eb1 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeHouseBlips", _0x3d4eb1);
    }
  }
});
mp.events.add("Client_ChangeHalloweenTheme", _0x2b72b6 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeHalloweenTheme", _0x2b72b6);
    }
  }
});
mp.events.add("Client_ChangeChristmasTheme", _0x2afe3a => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeChristmasTheme", _0x2afe3a);
    }
  }
});
mp.events.add("Client_SuccesSetTheme", _0x1e7213 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x1e7213 == 1) {
      main_browser.execute("APPS.state.gamesettings.christmas_theme = false;");
    } else if (_0x1e7213 == 2) {
      main_browser.execute("APPS.state.gamesettings.halloween_theme = false;");
    }
  }
});
mp.events.add("Client_HalloweenError", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    setTimeout(() => {
      main_browser.execute("APPS.state.gamesettings.halloween_theme = false;");
    }, 200);
  }
});
mp.events.add("Client_ChristmasError", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    setTimeout(() => {
      main_browser.execute("APPS.state.gamesettings.christmas_theme = false;");
    }, 200);
  }
});
mp.events.add("Client_ChangeHud", _0x3018ce => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.storage.data.new_hud = _0x3018ce == 1;
    mp.storage.flush();
  }
});
mp.events.add("Client_ChangeSpeedometr", _0x5b5311 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.storage.data.new_speedometr = _0x5b5311 == 1;
    mp.storage.flush();
    main_browser.execute("APPS.state.gamesettings.new_speedometr = " + mp.storage.data.new_speedometr + ";");
  }
});
mp.events.add("Client_ChangeHalloweenWeather", _0x1f56ed => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x1f56ed == 1) {
      mp.game.gameplay.setWeatherTypeNow("HALLOWEEN");
      mp.storage.data.halloween_mode = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.halloween_mode = 0;
      mp.storage.flush();
      if (current_weather != null) {
        mp.game.gameplay.setWeatherTypeNow(current_weather);
      }
    }
  }
});
mp.events.add("Client_ChangeSnowMode", _0x368984 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x368984 == 1) {
      ChangeSnowState(true);
      mp.storage.data.snow_mode = 1;
      mp.storage.flush();
    } else {
      ChangeSnowState(false);
      WeatherChangeFunc();
      mp.storage.data.snow_mode = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeNavigator", _0x48675b => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (_0x48675b == 1) {
      mp.storage.data.navigator = 1;
      mp.storage.flush();
    } else {
      mp.storage.data.navigator = 0;
      mp.storage.flush();
    }
  }
});
mp.events.add("Client_ChangeHearNewbie", _0x19d128 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeHearNewbie", _0x19d128);
    }
  }
});
mp.events.add("Client_ChangeVoiceVolume", _0xd37822 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0xd37822 = parseInt(_0xd37822)) < 0 || _0xd37822 > 100 || !isNumber(_0xd37822)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Громкость должна быть от 0 до 100"][curr_lang] + "');");
      return;
    }
    Voice_Max_Volume = _0xd37822;
  }
});
mp.events.add("Client_ChangeRacionVolume", _0x3b4ce0 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0x3b4ce0 = parseInt(_0x3b4ce0)) < 0 || _0x3b4ce0 > 100 || !isNumber(_0x3b4ce0)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Громкость должна быть от 0 до 100"][curr_lang] + "');");
      return;
    }
    Racion_Max_Volume = _0x3b4ce0;
  }
});
mp.events.add("Client_ChangeHearLevel", _0x2d806a => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0x2d806a = parseInt(_0x2d806a)) < 0 || _0x2d806a > 100 || !isNumber(_0x2d806a)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Громкость должна быть от 0 до 100"][curr_lang] + "');");
      return;
    }
    mp.events.callRemote("Server_ChangeHearLevel", _0x2d806a);
  }
});
mp.events.add("Client_ChangeVehiclesLodDistance", _0x3112db => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0x3112db = parseInt(_0x3112db)) < 1 || _0x3112db > 500 || !isNumber(_0x3112db)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Дистанция должна быть от 1 до 500"][curr_lang] + "');");
      return;
    }
    mp.vehicles.forEachInStreamRange(_0x1a161b => {
      if (mp.vehicles.exists(_0x1a161b)) {
        _0x1a161b.setLodDist(_0x3112db);
      }
    });
    mp.storage.data.vehicle_lod_distance = _0x3112db;
    mp.storage.flush();
  }
});
mp.events.add("Client_ChangePlayerLodDistance", _0xe2bd7a => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0xe2bd7a = parseInt(_0xe2bd7a)) < 1 || _0xe2bd7a > 200 || !isNumber(_0xe2bd7a)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Дистанция должна быть от 1 до 200"][curr_lang] + "');");
      return;
    }
    mp.players.forEachInStreamRange(_0x2d91c2 => {
      if (mp.players.exists(_0x2d91c2)) {
        _0x2d91c2.setLodDist(_0xe2bd7a);
      }
    });
    mp.storage.data.player_lod_distance = _0xe2bd7a;
    mp.storage.flush();
  }
});
mp.events.add("Client_ChangeChatHeight", _0xb9911b => {
  if (SettingsOpened && loggedin && !chatActive) {
    if ((_0xb9911b = parseInt(_0xb9911b)) < 15 || _0xb9911b > 50 || !isNumber(_0xb9911b)) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Высота чата должна быть от 15 до 50"][curr_lang] + "');");
      return;
    }
    applyChatHeight(_0xb9911b, true);
  }
});
mp.events.add("Client_AddWhiteList", _0x7dc2c => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddWhiteList", _0x7dc2c);
    }
  }
});
mp.events.add("Client_DeleteWhiteList", _0x56931e => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteWhiteList", _0x56931e);
    }
  }
});
mp.events.add("Client_DeleteBlackList", _0x1de214 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteBlackList", _0x1de214);
    }
  }
});
mp.events.add("Client_AddBlackList", _0x4fff40 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddBlackList", _0x4fff40);
    }
  }
});
mp.events.add("Client_ChangeRacion", _0x1add21 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeRacion", _0x1add21);
  }
});
mp.events.add("Client_ChangeFamilyRacion", _0x3d1228 => {
  if (SettingsOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_ChangeFamilyRacion", _0x3d1228);
  }
});
mp.events.add("Client_ReloadMic", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.voiceChat.cleanupAndReload(true, true, true);
      mp.game.ui.notifications.show(language["Bы пepeзaгpyзили микpoфoн"][curr_lang], false, 0, 2);
    }
  }
});
mp.events.add("ChangeChatHeight", _0x2d44f7 => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!(_0x2d44f7 < 1) && !(_0x2d44f7 > 5)) {
        applyChatHeight(_0x2d44f7, true);
      }
    }
  }
});
mp.events.add("Client_ChangeButton", (_0x20c379, _0x193e2b, _0x232318, _0x666711) => {
  if (!SettingsOpened || !loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  let _0x242378 = true;
  Object.keys(mp.storage.data.bind_controls).forEach(_0x4232f6 => {
    if (mp.storage.data.bind_controls[_0x4232f6] == _0x193e2b && _0x20c379 != "shotmarker" && (_0x20c379 != "crouch" || _0x4232f6 != "engine") && (_0x20c379 != "engine" || _0x4232f6 != "crouch") && (_0x20c379 != "drift" || _0x4232f6 != "fastaction1" && _0x4232f6 != "shotmarker_fam") && (_0x20c379 != "fastaction1" || _0x4232f6 != "drift" && _0x4232f6 != "shotmarker_fam") && (_0x20c379 != "shotmarker_fam" || _0x4232f6 != "drift" && _0x4232f6 != "fastaction1") && (_0x20c379 != "cruize" || _0x4232f6 != "fastaction2") && (_0x20c379 != "fastaction2" || _0x4232f6 != "cruize")) {
      _0x242378 = false;
    }
  });
  if (_0x193e2b == 74 || _0x193e2b == 69 && _0x20c379 != "shotmarker" || _0x193e2b == 84 || _0x193e2b == 122) {
    _0x242378 = false;
  }
  if (_0x242378 == 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Данная клавиша уже зарезервирована"][curr_lang] + "');");
    main_browser.execute("APPS.state.gamesettings.hotkeys = " + JSON.stringify(mp.storage.data.bind_controls) + ";");
    return;
  }
  unbind(mp.storage.data.bind_controls[_0x20c379], _0x20c379);
  mp.storage.data.bind_controls[_0x20c379] = _0x193e2b;
  bind(_0x193e2b, _0x20c379);
  mp.storage.flush();
  main_browser.execute("APPS.state.gamesettings.hotkeys = " + JSON.stringify(mp.storage.data.bind_controls) + ";");
});
mp.events.add("Client_RequestResetBinds", () => {
  mp.events.call("OnPlayerDialogShow", 1009, language["Сброс настроек клавиш"][curr_lang], language["Вы действительно хотите сбросить настройки клавиш? Это действие нельзя будет отменить"][curr_lang], language.Подтвердить[curr_lang], language.Отмена[curr_lang]);
});
mp.events.add("Client_ResetBinds", () => {
  resetBinds();
  main_browser.execute("APPS.state.gamesettings.hotkeys = " + JSON.stringify(mp.storage.data.bind_controls) + ";");
  ShowNotification(language["Настройки клавиш сброшены"][curr_lang], 25);
});
mp.keys.bind(mp.storage.data.bind_controls.inventory, false, InventoryFunc);
mp.keys.bind(mp.storage.data.bind_controls.menu, false, MenuFunc);
mp.keys.bind(mp.storage.data.bind_controls.action, false, ActionFunc);
mp.keys.bind(mp.storage.data.bind_controls.mobile, false, MobileFunc);
mp.keys.bind(mp.storage.data.bind_controls.microphone, true, MicFunc);
mp.keys.bind(mp.storage.data.bind_controls.microphone, false, UnMicFunc);
mp.keys.bind(mp.storage.data.bind_controls.globalmic, true, GlobalMicFunc);
mp.keys.bind(mp.storage.data.bind_controls.globalmic, false, UnGlobalMicFunc);
mp.keys.bind(mp.storage.data.bind_controls.familymic, true, FamilyMicFunc);
mp.keys.bind(mp.storage.data.bind_controls.familymic, false, UnFamilyMicFunc);
mp.keys.bind(mp.storage.data.bind_controls.hud, false, HUDFunc);
mp.keys.bind(mp.storage.data.bind_controls.cruize, false, CruizFunc);
mp.keys.bind(mp.storage.data.bind_controls.fast1, false, FastFunc1);
mp.keys.bind(mp.storage.data.bind_controls.fast2, false, FastFunc2);
mp.keys.bind(mp.storage.data.bind_controls.fast3, false, FastFunc3);
mp.keys.bind(mp.storage.data.bind_controls.fast4, false, FastFunc4);
mp.keys.bind(mp.storage.data.bind_controls.fast5, false, FastFunc5);
mp.keys.bind(mp.storage.data.bind_controls.fast6, false, FastFunc6);
mp.keys.bind(mp.storage.data.bind_controls.engine, false, EngineFunc);
mp.keys.bind(mp.storage.data.bind_controls.voicedist, false, VoiceDistFunc);
mp.keys.bind(mp.storage.data.bind_controls.fastaction1, true, FastAction1);
mp.keys.bind(mp.storage.data.bind_controls.fastaction2, true, FastAction2);
mp.keys.bind(mp.storage.data.bind_controls.fastaction3, true, FastAction3);
mp.keys.bind(mp.storage.data.bind_controls.micreload, false, MicrophoneReloadFunc);
mp.keys.bind(mp.storage.data.bind_controls.finger, true, FingerFunc);
mp.keys.bind(mp.storage.data.bind_controls.finger, false, UnFingerFunc);
mp.keys.bind(mp.storage.data.bind_controls.additionalvoice, false, CancelAdditionalVoice);
mp.keys.bind(mp.storage.data.bind_controls.familyvoice, false, CancelFamilyVoice);
mp.keys.bind(mp.storage.data.bind_controls.safetybelt, false, SafetyBeltFunc);
mp.keys.bind(mp.storage.data.bind_controls.firemode, false, ChangeFireModeFunc);
mp.keys.bind(mp.storage.data.bind_controls.quest, false, CancelQuestFunc);
mp.keys.bind(mp.storage.data.bind_controls.lock, false, CarLockFunc);
mp.keys.bind(mp.storage.data.bind_controls.drift, true, DriftFunc);
mp.keys.bind(mp.storage.data.bind_controls.drift, false, UnDriftFunc);
mp.keys.bind(mp.storage.data.bind_controls.leftcam, false, TogglePlayerCameraSide);
mp.keys.bind(mp.storage.data.bind_controls.autopilot, false, StartAutoPilot);
mp.keys.bind(mp.storage.data.bind_controls.ragdoll, false, RagdollFunc);
mp.keys.bind(mp.storage.data.bind_controls.shotmarker, false, function () {
  SendShotMarker(1);
});
mp.keys.bind(mp.storage.data.bind_controls.shotmarker_fam, false, function () {
  SendShotMarker(2);
});
mp.events.add("Client_RagdollSuccess", () => {
  localplayer.setToRagdoll(1500, 1500, 0, true, true, true);
});
const contraband_machines_objects_hashes = ["veloxsy_module_head", "veloxsy_module_storage", "veloxsy_module_repair", "veloxsy_module_ammo", "veloxsy_module_cannabis", "veloxsy_module_cocain", "veloxsy_module_wood", "veloxsy_module_candy"].map(_0x503aef => mp.game.joaat(_0x503aef));
const summer2026_mattresses_objects_hashes = ["inf_bed_1", "inf_bed_2", "inf_bed_3", "inf_bed_4", "inf_bed_5", "inf_bed_6", "inf_bed_7", "inf_bed_8", "big_inf_bed_1", "big_inf_bed_2", "big_inf_bed_3", "big_inf_bed_4", "big_inf_bed_5", "big_inf_bed_6", "big_inf_bed_7", "big_inf_bed_8"].map(_0x193b71 => mp.game.joaat(_0x193b71));
function ActionFunc() {
  if ((!GlobalCheck() || at_small_timer_event != 0 || !!at_rims_install || !!at_antiradar_install) && (player_work_pilot != 1 || !localplayer.isInAnyVehicle(false))) {
    if (entity == null && !localplayer.isInAnyVehicle(false)) {
      if (localplayer.cuffed || is_roped_hands == 1) {
        return;
      }
      OpenBindAnimationDesign();
    }
    if (localplayer.isInAnyVehicle(false) && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle) {
      OpenInCarCircle();
    } else if (!!loggedin && !chatActive && entity != null && !(new Date().getTime() - lastCheck < 1000)) {
      switch (entity.type) {
        case "player":
          if (at_small_timer_event == 2) {
            return mp.events.callRemote("Server_ChangePotatoState", entity);
          }
          SelectedPlayer = entity;
          SelectedType = 1;
          OpenCorrectPlayerCircle();
          break;
        case "vehicle":
          if (at_rims_install == 1) {
            mp.events.callRemote("Server_InstallCustomRims", entity);
            CloseRimsInstall(false);
            return;
          }
          if (at_antiradar_install == 1) {
            mp.events.callRemote("Server_InstallAntiradar", entity);
            return CloseAntiradarInstall(false);
          }
          SelectedPlayer = entity;
          SelectedType = 2;
          if (entity.model == 1747439474) {
            OpenInteractionCircle("collectorMenu");
          } else {
            OpenInteractionCircle("vehicleActions");
          }
          break;
        case "object":
          SelectedPlayer = entity;
          SelectedType = 3;
          if (entity.model == 452618762) {
            OpenInteractionCircle("weedActions");
          } else if (entity.model == 1104521776 || entity.model == 3660027849 || entity.model == 2210428449 || entity.model == 2272050386) {
            OpenInteractionCircle("seedActions");
          } else if (entity.model == 3698023687) {
            OpenInteractionCircle("campingActions");
          } else if (entity.model == 3229200997 || entity.model == 286252949) {
            OpenInteractionCircle("fireCampingActions");
          } else if (entity.model == 322248450) {
            OpenInteractionCircle("billiardActions");
          } else if (entity.model == 3804568937) {
            OpenPUBGCreate();
          } else if (entity.model == 2414774912) {
            mp.events.callRemote("Server_OpenSolarBattery", entity);
          } else if (entity.model == 3456677054 || entity.model == 2388738561 || entity.model == 2808333064) {
            mp.events.callRemote("Server_OpenChristmasConstruction", entity);
          } else if (entity.model == 3209719027 || entity.model == 2461602757 || entity.model == 2752099942) {
            OpenInteractionCircle("hookahActions");
          } else if (entity.model == 1276148988 || entity.model == 1072616162 || entity.model == 1946925855 || entity.model == 1172303719 || entity.model == 3008087081 || entity.model == 1175931267 || entity.model == 3259306505 || entity.model == 2707666095 || entity.model == 3095293409 || entity.model == 3133058339 || entity.model == 3371714966 || entity.model == 1107349801 || entity.model == 3841850837 || entity.model == 3780943946 || entity.model == 3316410890 || entity.model == 4151651686 || entity.model == 3729477854 || entity.model == 742943823 || entity.model == 2080595106 || entity.model == 2139919312 || entity.model == 4089655941 || entity.model == 1560354582 || entity.model == 2327313027 || entity.model == 586645476 || entity.model == 3968692429 || entity.model == 523344868 || entity.model == 1935071027 || entity.model == 2444343888 || entity.model == 1836351583) {
            OpenInteractionCircle("personalBarrier");
          } else if (entity.model == 515366950 || entity.model == 1839078040 || entity.model == 2777942659 || entity.model == 2346047239 || entity.model == 3256927132) {
            OpenInteractionCircle("christmasTree");
          } else if (entity.model == 525667351 || entity.model == 725259233 || entity.model == 3279592262 || entity.model == 291348133 || entity.model == 1071807406 || entity.model == 3186063286) {
            OpenInteractionCircle("customChairs");
          } else if (entity.model == 119702995 || entity.model == 1885689943 || entity.model == 2564303168 || entity.model == 1803116220) {
            mp.events.callRemote("Server_OpenEasterConstruction", entity);
          } else if (entity.model == 2766452339) {
            OpenInteractionCircle("policeRadar");
          } else if (entity.model == 2535650773) {
            OpenInteractionCircle("spinBottle");
          } else if (entity.model == 3739149317 || entity.model == 143414865 || entity.model == 1039600050 || entity.model == 2618926416 || entity.model == 446622462) {
            mp.events.callRemote("Server_OpenResourceGathererConstruction", entity);
          } else if (entity.model == 3977563887 || entity.model == 3011067451 || entity.model == 969177817) {
            mp.events.callRemote("Server_OpenMushroomBed", entity);
          } else if (entity.model == 44671739) {
            mp.events.callRemote("Server_OpenSatelliteObjectMenu", entity);
          } else if (entity.model == 3002519589 || entity.model == 677776329 || entity.model == 10763334 || entity.model == 1122812118 || entity.model == 1858869396 || entity.model == 2165292315 || entity.model == 2336870799 || entity.model == 2642736645 || entity.model == 2777384466 || entity.model == 3109596588 || entity.model == 2683168545) {
            mp.events.callRemote("Server_OpenSummer2024Trophy", entity);
          } else if (entity.model == 3865423080) {
            mp.events.callRemote("Server_TakeMoneyMachine");
          } else if (entity.model == 1837352297 || entity.model == 2588558238 || entity.model == 2671940813 || entity.model == 3843643711 || entity.model == 2292568938 || entity.model == 449505375 || entity.model == mp.game.joaat("veloxsy_dr_lavka") || entity.model == mp.game.joaat("veloxsy_easter_lavka") || entity.model == mp.game.joaat("veloxsy_kiosk_2") || entity.model == mp.game.joaat("veloxsy_kiosk_4")) {
            if (global.myPortableMarketObjectId == entity.remoteId || is_admin) {
              OpenInteractionCircle("portableMarket");
            } else {
              mp.events.callRemote("Server_OpenPortableMarket", entity);
            }
          } else if (entity.model == 630549221 || entity.model == 3954327388) {
            OpenCircle(1, "halloweenGhosts2025");
          } else if (entity.model == 2700444810 || entity.model == 3360630910) {
            OpenCircle(1, "halloweenGraveyards2025");
          } else if (contraband_machines_objects_hashes.includes(entity.model)) {
            mp.events.callRemote("Server_ContrabandMachineInteract", entity);
          } else if (summer2026_mattresses_objects_hashes.includes(entity.model)) {
            if (typeof global.usedWaterActivitiesMattressId == "number" && global.usedWaterActivitiesMattressId === entity.remoteId) {
              OpenInteractionCircle("summer2026Mattresses");
            } else {
              mp.events.callRemote("Server_Summer2026_SeatOnMattress", entity);
            }
          }
      }
      lastCheck = new Date().getTime();
    }
  }
}
function MobileFunc() {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && !GlobalCheck()) {
    lastCheck = new Date().getTime();
    if (mobileOpen == 0) {
      OpenMobile();
    }
  }
}
function MicFunc() {
  if (!chatActive && !dialog_window && !mobileOpen && !LeaderMenuOpened && !ReportOpened && !SettingsOpened && !ADOpened && !ExchangeOpened && !FamilyOpened && !CustomNumberPlateOpened && !racionmic && !familymic) {
    if (voice_state != 0 && racionmic != 1 && in_talk != 1) {
      if (mp.storage.data.mic_toggle != 1 || defaultmic) {
        if (mp.storage.data.mic_toggle == 0) {
          if (defaultmic) {
            ToggleVoiceChat(false, 0);
          } else {
            ToggleVoiceChat(true, 0);
          }
        }
      } else {
        ToggleVoiceChat(true, 0);
      }
    }
  }
}
function UnMicFunc() {
  if ((!GlobalCheck() || localplayer.cuffed || familymic || racionmic || defaultmic || in_trade || is_roped_hands) && voice_state != 0 && racionmic != 1 && in_talk != 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false, 0);
  }
}
function GlobalMicFunc() {
  if ((!GlobalCheck() || familymic || racionmic || defaultmic) && voice_state != 0) {
    if (racionmic == 0) {
      ToggleVoiceChat(true, 1);
    } else if (mp.storage.data.mic_toggle == 0 && racionmic) {
      ToggleVoiceChat(false, 1);
    }
  }
}
function UnGlobalMicFunc() {
  if ((!GlobalCheck() || familymic || racionmic || defaultmic) && voice_state != 0 && racionmic == 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false, 1);
  }
}
function FamilyMicFunc() {
  if ((!GlobalCheck() || familymic || racionmic || defaultmic) && voice_state != 0) {
    if (familymic == 0) {
      ToggleVoiceChat(true, 2);
    } else if (mp.storage.data.mic_toggle == 0 && familymic) {
      ToggleVoiceChat(false, 2);
    }
  }
}
function UnFamilyMicFunc() {
  if ((!GlobalCheck() || familymic || racionmic || defaultmic) && voice_state != 0 && familymic == 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false, 2);
  }
}
let startEngineAfterFailureTimeout;
let chat_hidden = false;
function HUDFunc() {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 200) && (!GlobalCheck() || !!localplayer.cuffed || !!is_roped_hands || !!at_famwar || !!is_dead || !!in_begging_state || !!isInDrone || !!inObjectEditor)) {
    lastCheck = new Date().getTime();
    if (is_bag_head != 1) {
      if (hudswitch == 0) {
        if (chat_hidden == 0) {
          mp.events.call("Disablechat");
          chat_hidden = true;
        } else {
          hudswitch = true;
          ChangeHudState(false);
          mp.game.ui.displayRadar(false);
          mp.events.call("Disablechat");
        }
      } else {
        chat_hidden = false;
        hudswitch = false;
        ChangeHudState(true);
        mp.events.call("Enablechat");
      }
    }
  }
}
function CruizFunc() {
  if (localplayer.isInAnyVehicle(true) && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle) {
    if (autopilotStart == 1) {
      return mp.game.ui.notifications.show(language["У Bac включен автопилот"][curr_lang], false, 0, 6);
    }
    if (!(new Date().getTime() - lastCheck < 1000) && !(lastCheck = new Date().getTime(), mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABike(localplayer.vehicle.model) || localplayer.vehicle.model == 771711535 || localplayer.vehicle.model == 3228633070)) {
      if (!localplayer.isInAnyVehicle(false) || GlobalCheck()) {
        return false;
      }
      if (cruize_state == 0 || cruize_state == 2) {
        let _0x5e9221 = localplayer.vehicle.getSpeed();
        if (localplayer.vehicle.getIsEngineRunning() == 0) {
          return mp.game.ui.notifications.show(language["У Вас выключен двигатель"][curr_lang], false, 0, 6);
        }
        if (_0x5e9221 * 3.6 < 20) {
          return mp.game.ui.notifications.show(language["У Bac cлишкoм низкaя cкopocть"][curr_lang], false, 0, 6);
        }
        if (at_drift_state) {
          return mp.game.ui.notifications.show(language["Вы находитесь в дрифте"][curr_lang], false, 0, 6);
        }
        if (localplayer.vehicle.isInWater()) {
          return mp.game.ui.notifications.show(language["Транспорт находится в воде"][curr_lang], false, 0, 6);
        }
        applyCruizeLimit(_0x5e9221);
        cruize_state = 1;
        mp.game.ui.notifications.show(TranslateText("Bы включили кpyиз кoнтpoль нa cкopocти {0} км/ч", Math.round(_0x5e9221 * 3.6)), false, 0, 2);
      } else if (cruize_state == 1) {
        if (at_drift_state) {
          return mp.game.ui.notifications.show(language["Вы находитесь в дрифте"][curr_lang], false, 0, 6);
        }
        cruize_state = 2;
        restoreCruizeLimit();
        mp.game.ui.notifications.show(language["Kpyиз кoнтpoль выключeн"][curr_lang], false, 0, 2);
        cruize_state = 0;
      }
      if (cruize_state == 1) {
        main_browser.execute("APPS.state.hud.cruize = true;");
      } else {
        main_browser.execute("APPS.state.hud.cruize = false;");
      }
    }
  }
}
function CancelAdditionalVoice() {
  if (!GlobalCheck() && !(new Date().getTime() - lastCheck < 1000)) {
    mp.events.callRemote("Server_ChangeRacionStateFast");
    lastCheck = new Date().getTime();
  }
}
function CancelFamilyVoice() {
  if (!GlobalCheck() && !(new Date().getTime() - lastCheck < 1000)) {
    mp.events.callRemote("Server_ChangeFamilyRacionStateFast");
    lastCheck = new Date().getTime();
  }
}
function SafetyBeltFunc() {
  if (!GlobalCheck() && !(new Date().getTime() - lastCheck < 1000) && localplayer.vehicle) {
    if (mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABike(localplayer.vehicle.model)) {
      return mp.game.ui.notifications.show(language["В данном транспорте нет ремня безопасности"][curr_lang], false, 0, 6);
    }
    localplayer.setConfigFlag(32, false);
    main_browser.execute("APPS.state.hud.belt_notif = true;");
    main_browser.execute("APPS.state.hud.belt = true;");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.belt_notif = false;");
    }, 2500);
    lastCheck = new Date().getTime();
  }
}
function FastFunc1() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating) {
    if (mp.keys.isDown(18) != 1) {
      mp.events.callRemote("Server_UseItemFromHotkey", 1);
      lastCheck = new Date().getTime();
    }
  }
}
function FastFunc2() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating) {
    if (mp.keys.isDown(18) != 1) {
      mp.events.callRemote("Server_UseItemFromHotkey", 2);
      lastCheck = new Date().getTime();
    }
  }
}
function FastFunc3() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating) {
    if (mp.keys.isDown(18) != 1) {
      mp.events.callRemote("Server_UseItemFromHotkey", 3);
      lastCheck = new Date().getTime();
    }
  }
}
function FastFunc4() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating) {
    if (mp.keys.isDown(18) != 1) {
      mp.events.callRemote("Server_UseItemFromHotkey", 4);
      lastCheck = new Date().getTime();
    }
  }
}
function FastFunc5() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating) {
    if (mp.keys.isDown(18) != 1) {
      mp.events.callRemote("Server_UseItemFromHotkey", 5);
      lastCheck = new Date().getTime();
    }
  }
}
function FastFunc6() {
  if (!!loggedin && (GlobalCheck() != 1 || invOpen != 0 || !!at_famwar) && dialog_window != 1 && !(new Date().getTime() - lastCheck < 1000) && !AFK_state && !in_animation && !sitting_at_custom_chair && !lunaParkEating && mp.keys.isDown(18) != 1) {
    if (!HasVipExtraFastSlot()) {
      mp.game.ui.notifications.show(language["Доступно с VIP 3, 4, 5 уровня"][curr_lang], false, 0, 6);
      lastCheck = new Date().getTime();
      return;
    }
    mp.events.callRemote("Server_UseItemFromHotkey", 6);
    lastCheck = new Date().getTime();
  }
}
function EngineFunc() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500) && (GlobalCheck() != 1 || bAtDriftEvent || at_pubg || at_duel_location) && mp.players.local.isInAnyVehicle(false) && localplayer.vehicle && (player_work_pilot != 0 || mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || !(localplayer.vehicle.getSpeed() > 5))) {
    if (cruize_state) {
      return mp.game.ui.notifications.show(language["У Вас включен круиз контроль"][curr_lang], false, 0, 6);
    }
    if (!mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model)) {
      if (new Date().getTime() - cant_enable_engine < 15000) {
        return mp.game.ui.notifications.show(language["Ваш двигатель заглушен на 15 секунд"][curr_lang], false, 0, 6);
      }
      if (startEngineAfterFailureTimeout == null) {
        if (fail_turn_engine_count > 0) {
          const _0xa729f5 = {
            progress: 0,
            delay: 100,
            duration: 5,
            isIncrease: true,
            title: "Запуск двигателя",
            displayAt: "center"
          };
          main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0xa729f5) + ";");
          startEngineAfterFailureTimeout = setTimeout(() => {
            startEngineAfterFailureTimeout = undefined;
            fail_turn_engine_count = 0;
            mp.events.callRemote("engineCarPressed");
            lastCheck = new Date().getTime();
          }, 5000);
          return;
        }
        mp.events.callRemote("engineCarPressed");
        lastCheck = new Date().getTime();
      }
    }
  }
}
function FingerFunc() {
  if ((GlobalCheck() != 1 || !!defaultmic) && !in_animation && !lunaParkEating && !sitting_at_custom_chair && !mp.gui.cursor.visible && !mp.chatActive && !mp.consoleActive && is_roped_hands != 1) {
    finger.start();
  }
}
function UnFingerFunc() {
  finger.stop();
}
function DriftFunc() {
  if (GlobalCheck() == 1 && !defaultmic || in_animation || lunaParkEating || sitting_at_custom_chair || mp.gui.cursor.visible || mp.chatActive || mp.consoleActive || is_roped_hands == 1 || !localplayer.vehicle) {
    return;
  }
  if (mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model)) {
    return;
  }
  if (new Date().getTime() - lastCheck < 1000) {
    return;
  }
  lastCheck = new Date().getTime();
  if (cruize_state == 1) {
    return;
  }
  const _0x10ab57 = localplayer.vehicle.getPedInSeat(-1) === localplayer.handle;
  if (!localplayer.vehicle.drift_mode && (!HasVipDriftMode() || !_0x10ab57 || !drift.vip_drift_enabled)) {
    return mp.game.ui.notifications.show(language["В Вашем транспорте не установлен помощник дрифта"][curr_lang], false, 0, 6);
  }
  if (localplayer.vehicle.isAttachedToAnyVehicle()) {
    return mp.game.ui.notifications.show(language["Вы на эвакуаторе"][curr_lang], false, 0, 6);
  }
  if (localplayer.vehicle.getSpeed() < 5) {
    return mp.game.ui.notifications.show(language["У Вас слишком низкая скорость"][curr_lang], false, 0, 6);
  }
  if (drift_timeout != null) {
    clearTimeout(drift_timeout);
    drift_timeout = null;
  }
  const _0x1d1420 = localplayer.vehicle.getSpeed();
  at_drift_state = true;
  localplayer.vehicle.setMaxSpeed(_0x1d1420);
  localplayer.vehicle.setReduceGrip(true);
}
mp.events.add("Stop_Cruize", () => {
  if (cruize_state == 1) {
    restoreCruizeLimit();
    mp.game.ui.notifications.show(language["Kpyиз кoнтpoль выключeн"][curr_lang], false, 0, 2);
    cruize_state = 0;
  }
});
mp.events.add("Client_SafetyBeltInformation", () => {
  if (player_vip == 0) {
    if (GlobalCheck() || new Date().getTime() - lastCheck < 1000) {
      return;
    }
    if (!localplayer.vehicle) {
      return;
    }
    if (mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABike(localplayer.vehicle.model)) {
      return;
    }
    main_browser.execute("APPS.state.hud.belt_notif = 2;");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.belt_notif = false;");
    }, 4000);
    lastCheck = new Date().getTime();
  }
});
global.at_drift_state = false;
let drift_timeout = null;
function UnDriftFunc() {
  if (localplayer.vehicle && at_drift_state == 1) {
    lastCheck = new Date().getTime();
    localplayer.vehicle.setReduceGrip(false);
    drift_timeout = setTimeout(() => {
      drift_timeout = null;
      at_drift_state = false;
      if (localplayer.vehicle) {
        localplayer.vehicle.setMaxSpeed(99999);
      }
    }, 1000);
  }
}
global.GetKeyCode = function (_0x588085) {
  let _0x31b441 = "";
  _0x31b441 = (_0x588085 = parseInt(_0x588085)) == 17 ? "ctrl" : _0x588085 == 16 ? "shift" : _0x588085 == 20 ? "caps" : _0x588085 == 9 ? "tab" : _0x588085 == 112 ? "f1" : _0x588085 == 113 ? "f2" : _0x588085 == 114 ? "f3" : _0x588085 == 115 ? "f4" : _0x588085 == 116 ? "f5" : _0x588085 == 117 ? "f6" : _0x588085 == 118 ? "f7" : _0x588085 == 119 ? "f8" : _0x588085 == 120 ? "f9" : _0x588085 == 121 ? "f10" : _0x588085 == 122 ? "f11" : _0x588085 == 123 ? "f12" : _0x588085 == 97 ? "NUM1" : _0x588085 == 98 ? "NUM2" : _0x588085 == 99 ? "NUM3" : _0x588085 == 100 ? "NUM4" : _0x588085 == 101 ? "NUM5" : _0x588085 == 102 ? "NUM6" : _0x588085 == 103 ? "NUM7" : _0x588085 == 104 ? "NUM8" : _0x588085 == 105 ? "NUM9" : String.fromCharCode(_0x588085);
  return _0x31b441;
};
global.StatsOpened = false;
mp.events.add("Client_OpenStats", (_0x55d810, _0x78ae, _0x18c088, _0x4b9f87, _0x59f3fb, _0x383c7c, _0x595e37, _0x983ede, _0x53cb45, _0x3daa1d, _0x4520ef, _0x5d7de8, _0x34122b, _0x3b8bb3, _0x1e1f44, _0x375fd3, _0x4a7656, _0x4b9fcc, _0x4f06ed, _0x4884fe, _0x4e5c54, _0x4dc10a, _0x3000a0, _0x1418f5, _0x57da2f, _0x46b21b, _0x540a29, _0x853bf5, _0x4591bb, _0x11d5e4, _0x42ec5e, _0x65fa29, _0x6f61b8) => {
  if (!GlobalCheck()) {
    main_browser.execute("APPS.state.stats.gender = " + _0x55d810);
    main_browser.execute("APPS.state.stats.exp = " + _0x78ae);
    main_browser.execute("APPS.state.stats.level = " + _0x18c088);
    main_browser.execute("APPS.state.stats.was_criminal = " + _0x4b9f87);
    main_browser.execute("APPS.state.stats.sickness = [" + _0x59f3fb + "]");
    main_browser.execute("APPS.state.stats.vip = " + _0x383c7c);
    main_browser.execute("APPS.state.stats.viplevel = " + _0x65fa29);
    main_browser.execute("APPS.state.stats.fine = " + _0x595e37);
    main_browser.execute("APPS.state.stats.pid = " + _0x983ede);
    main_browser.execute("APPS.state.stats.houses = [" + _0x53cb45 + "]");
    main_browser.execute("APPS.state.stats.houses_days = [" + _0x3daa1d + "]");
    main_browser.execute("APPS.state.stats.houses_rent_days = [" + _0x4884fe + "]");
    main_browser.execute("APPS.state.stats.member = " + _0x4520ef);
    main_browser.execute("APPS.state.stats.rank_name = '" + _0x5d7de8 + "'");
    main_browser.execute("APPS.state.stats.member_name = '" + _0x34122b + "'");
    main_browser.execute("APPS.state.stats.biz_name = '" + _0x3b8bb3 + "'");
    main_browser.execute("APPS.state.stats.number = " + _0x1e1f44);
    main_browser.execute("APPS.state.stats.donate = " + _0x375fd3);
    main_browser.execute("APPS.state.stats.weekly_online = " + _0x4a7656);
    main_browser.execute("APPS.state.stats.vehicles = [" + _0x4b9fcc + "]");
    main_browser.execute("APPS.state.stats.ref_count = " + _0x4f06ed + ";");
    main_browser.execute("APPS.state.stats.weekly_online_minute = " + _0x4e5c54);
    main_browser.execute("APPS.state.stats.warns = " + _0x4dc10a);
    main_browser.execute("APPS.state.stats.warn_days = " + _0x3000a0);
    main_browser.execute("APPS.state.stats.fam_name = '" + _0x1418f5 + "'");
    main_browser.execute("APPS.state.stats.fam_rank = '" + _0x57da2f + "'");
    main_browser.execute("APPS.state.stats.biz_id = " + _0x46b21b);
    main_browser.execute("APPS.state.stats.immune = " + _0x540a29);
    main_browser.execute("APPS.state.stats.spouse = '" + _0x853bf5 + "'");
    main_browser.execute("APPS.state.stats.fam_house = " + _0x4591bb);
    main_browser.execute("APPS.state.stats.fam_days = " + _0x11d5e4);
    main_browser.execute("APPS.state.stats.stattues_total = " + _0x42ec5e);
    main_browser.execute("APPS.state.stats.licensesData = " + JSON.stringify(_0x6f61b8));
    main_browser.execute("APPS.state.stats.show = true;");
    StatsOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_UpdateSkillsAfterBuy", (_0x4630de, _0x4293f5, _0x132851, _0x1c55a2, _0x1f4c44, _0x289ddf, _0x4217aa) => {
  if (StatsOpened != 0) {
    main_browser.execute("APPS.state.stats.drive_skill = " + _0x289ddf);
    main_browser.execute("APPS.state.stats.theft_skill = " + _0x1f4c44);
    main_browser.execute("APPS.state.stats.pocket_skill = " + _0x1c55a2);
    main_browser.execute("APPS.state.stats.stamina_skill = " + _0x132851);
    main_browser.execute("APPS.state.stats.strength_skill = " + _0x4293f5);
    main_browser.execute("APPS.state.stats.gun_skill = [" + _0x4630de + "]");
    main_browser.execute("APPS.state.stats.house_robbery_skill = " + _0x4217aa);
  }
});
mp.events.add("Client_ShowMySkills", () => {
  if (StatsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ShowMySkills");
    }
  }
});
mp.events.add("Client_GoToStattuesPage", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GoToStattuesPage");
    }
  }
});
mp.events.add("Client_BuyAllSkillsFromStatistic", () => {
  if (StatsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyAllSkillsFromStatistic");
    }
  }
});
mp.events.add("Client_LocateHouseFromStats", _0x242e9d => {
  if (StatsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LocateHouseFromStats", _0x242e9d);
    }
  }
});
mp.events.add("Statistic_Error", _0x2fc747 => {
  if (StatsOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x2fc747 + "');");
  }
});
global.CloseStats = function () {
  if (StatsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.stats.show = false;");
    StatsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.SkillsOpened = false;
mp.events.add("Client_OpenSkillsFromStat", (_0x1d7bd5, _0x473ee2, _0x361c7d, _0x3e5cba, _0x3c4e8c, _0x589eba, _0x5cef1c, _0x519707, _0x5dae73, _0xf8ddb7, _0x1c1739, _0x5d574b, _0x2c636e, _0x36587a, _0x4a03d4, _0x1f2226, _0x27cfda, _0x25e486, _0x4bf411, _0x125e34, _0x38c08a) => {
  CloseStats();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x113226 = "{\"gathering_skill\":" + _0x4bf411 + ",\"house_robbery_skill\":" + _0x25e486 + ",\"pilotmaster\":" + _0x27cfda + ",\"collectormaster\":" + _0x1f2226 + ",\"firemaster\":" + _0x4a03d4 + ",\"fishmaster\":" + _0x36587a + ",\"gun_skill\":[" + _0x2c636e + "],\"strength_skill\":" + _0x5d574b + ",\"stamina_skill\":" + _0x1c1739 + ",\"truck_count\":" + _0x1d7bd5 + ",\"bus_count\":" + _0x473ee2 + ",\"woodmaster\":" + _0x361c7d + ",\"farmmaster\":" + _0x3e5cba + ",\"elecmaster\":" + _0x3c4e8c + ",\"minemaster\":" + _0x589eba + ",\"oilmaster\":" + _0x5cef1c + ",\"drive_skill\":" + _0x519707 + ",\"pocket_skill\":" + _0x5dae73 + ",\"theft_skill\":" + _0xf8ddb7 + ",\"delivery_skill\":" + _0x125e34 + ",\"collector_skill\":" + _0x38c08a + ",\"show\":true}";
  main_browser.execute("APPS.state.skills = " + _0x113226);
  SkillsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseSkills = function () {
  if (SkillsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.skills.show = false;");
    SkillsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ReloadSkillsInStats", (_0x5c16f5, _0x1a3a8a, _0x526635, _0x1853a9, _0x3bff29, _0x496ac6, _0x3b7d1d, _0x5bed33, _0x19a54f, _0x3dfe30, _0x5945cc, _0x2b2aed, _0x193991, _0x1dddf2, _0x17f7b1, _0x18185a, _0x2964fd, _0x2c32ed, _0x50b6c8, _0x39d34e, _0x29f3c7) => {
  if (SkillsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.skills.truck_count = " + _0x5c16f5);
    main_browser.execute("APPS.state.skills.bus_count = " + _0x1a3a8a);
    main_browser.execute("APPS.state.skills.woodmaster = " + _0x526635);
    main_browser.execute("APPS.state.skills.farmmaster = " + _0x1853a9);
    main_browser.execute("APPS.state.skills.elecmaster = " + _0x3bff29);
    main_browser.execute("APPS.state.skills.minemaster = " + _0x496ac6);
    main_browser.execute("APPS.state.skills.oilmaster = " + _0x3b7d1d);
    main_browser.execute("APPS.state.skills.drive_skill = " + _0x5bed33);
    main_browser.execute("APPS.state.skills.pocket_skill = " + _0x19a54f);
    main_browser.execute("APPS.state.skills.theft_skill = " + _0x3dfe30);
    main_browser.execute("APPS.state.skills.stamina_skill = " + _0x5945cc);
    main_browser.execute("APPS.state.skills.strength_skill = " + _0x2b2aed);
    main_browser.execute("APPS.state.skills.gun_skill = [" + _0x193991 + "]");
    main_browser.execute("APPS.state.skills.fishmaster = " + _0x1dddf2);
    main_browser.execute("APPS.state.skills.firemaster = " + _0x17f7b1);
    main_browser.execute("APPS.state.skills.collectormaster = " + _0x18185a);
    main_browser.execute("APPS.state.skills.pilotmaster = " + _0x2964fd);
    main_browser.execute("APPS.state.skills.house_robbery_skill = " + _0x2c32ed);
    main_browser.execute("APPS.state.skills.gathering_skill = " + _0x50b6c8);
    main_browser.execute("APPS.state.skills.delivery_skill = " + _0x39d34e);
    main_browser.execute("APPS.state.skills.collector_skill = " + _0x29f3c7);
  }
});
mp.events.add("Client_BuyFullSkill", _0xb6b4ef => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyFullSkill", _0xb6b4ef);
  }
});
global.IN_DonateOpened = false;
global.in_donate_browser = null;
mp.events.add("ShowSiteDonate", (_0x257642, _0x540a9d) => {});
global.CloseIN_Donate = function () {
  if (IN_DonateOpened && (loggedin || inLobby) && !chatActive) {
    if (in_donate_browser) {
      in_donate_browser.destroy();
      in_donate_browser = null;
    }
    IN_DonateOpened = false;
    if (global.curr_lang != "ru" && !DonateOpened) {
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
    }
  }
};
mp.events.add("closeDonateWindow", () => {
  CloseIN_Donate();
});
global.HelpMenuOpened = false;
mp.events.add("Client_GetHelpMenu", _0x4f7a29 => {
  CloseMobile();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x1d4fe2 = "{\"voice_help_active\":" + _0x4f7a29 + ",\"show\":true}";
  main_browser.execute("APPS.state.help = " + _0x1d4fe2);
  HelpMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_UpdateHelpVoiceStatus", _0x553d82 => {
  if (loggedin && !chatActive) {
    if (HelpMenuOpened) {
      main_browser.execute("APPS.state.help.voice_help_active = " + _0x553d82 + ";");
    } else if (ReportOpened) {
      main_browser.execute("APPS.state.report.in_call = " + _0x553d82 + ";");
    }
  }
});
global.CloseHelpMenu = function () {
  if (HelpMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.help.show = false;");
    HelpMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ShowNextEnterDesign", 5);
  }
};
mp.events.add("Client_RequestGetHelpMenu", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      CloseHelpMenu();
      mp.events.callRemote("Server_OpenHelpMenuFromMobile");
    }
  }
});
mp.events.add("Client_CallHelperVoice", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CallVoiceHelper");
    }
  }
});
global.ReferalMenuOpened = false;
mp.events.add("Client_OpenReferalMenu", (_0x34cead, _0x196b7d, _0x5857d1, _0x4dbff4, _0xc61e58) => {
  CloseMobile();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x5d0e98 = "{\"ref_count\":" + _0x34cead + ",\"pid\":" + _0x196b7d + ",\"ref_gets\":" + _0x4dbff4 + ",\"week_onli\":" + _0x5857d1 + ",\"vip\":" + _0xc61e58 + ",\"show\":true}";
  main_browser.execute("APPS.state.referal = " + _0x5d0e98);
  ReferalMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseReferalMenu = function () {
  if (ReferalMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.referal.show = false;");
    ReferalMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_UpdateReferalCounts", _0x21e5a4 => {
  main_browser.execute("APPS.state.referal.ref_gets = " + _0x21e5a4);
});
mp.events.add("Client_GetWeeklyPrize", () => {
  if (ReferalMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetExclusiveItem");
    }
  }
});
mp.events.add("Client_GetReferalPrize", () => {
  if (ReferalMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetReferalPrize");
    }
  }
});
global.DonateNoteOpened = false;
mp.events.add("Client_OpenDonateNote", (_0x4e4054, _0x148a9b, _0x546a30, _0x458f7f) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x412475 = "{\"need_hours\":" + _0x4e4054 + ",\"donate\":" + _0x148a9b + ",\"money\":" + _0x546a30 + ",\"last_hours\":" + _0x458f7f + ",\"show\":true}";
  main_browser.execute("APPS.state.start5 = " + _0x412475);
  DonateNoteOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseDonateNote = function () {
  if (DonateNoteOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.start5.show = false;");
    DonateNoteOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ShowNextEnterDesign", 4);
  }
};
mp.events.add("Client_CloseDonateNote", () => {
  if (DonateNoteOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      CloseDonateNote();
    }
  }
});
global.GraphicSettingsOpened = false;
mp.events.add("Client_OpenGraphicSelect", () => {
  if (GlobalCheck() == 1) {
    return;
  }
  main_browser.execute("APPS.state.graphics = {\"show\":true}");
  GraphicSettingsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseGraphicSettings = function () {
  if (GraphicSettingsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.graphics.show = false;");
    GraphicSettingsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ShowNextEnterDesign", 1);
  }
};
mp.events.add("Client_GraphicChosen", _0x5b876a => {
  if (!!loggedin && !chatActive && !(_0x5b876a < 1) && !(_0x5b876a > 3) && !(new Date().getTime() - lastCheck < 100)) {
    lastCheck = new Date().getTime();
    mp.storage.data.graphic_select = _0x5b876a;
    if (mp.storage.data.graphic_select == 1) {
      mp.storage.data.players_streamed = 50;
      mp.storage.data.vehicles_streamed = 30;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 30;
      mp.storage.data.player_lod_distance = 50;
    } else if (mp.storage.data.graphic_select == 2) {
      mp.storage.data.players_streamed = 70;
      mp.storage.data.vehicles_streamed = 40;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 100;
      mp.storage.data.player_lod_distance = 100;
    } else if (mp.storage.data.graphic_select == 3) {
      mp.storage.data.players_streamed = 100;
      mp.storage.data.vehicles_streamed = 50;
      mp.players.maxStreamed = mp.storage.data.players_streamed;
      mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
      mp.storage.data.vehicle_lod_distance = 200;
      mp.storage.data.player_lod_distance = 200;
    }
    mp.storage.flush();
    main_browser.execute("APPS.state.gamesettings.players_distance = " + mp.storage.data.player_lod_distance + ";");
    main_browser.execute("APPS.state.gamesettings.vehicles_distance = " + mp.storage.data.vehicle_lod_distance + ";");
    mp.vehicles.forEachInStreamRange(_0xac468f => {
      if (mp.vehicles.exists(_0xac468f)) {
        _0xac468f.setLodDist(mp.storage.data.vehicle_lod_distance);
      }
    });
    mp.players.forEachInStreamRange(_0x11a4f5 => {
      if (mp.players.exists(_0x11a4f5)) {
        _0x11a4f5.setLodDist(mp.storage.data.player_lod_distance);
      }
    });
    CloseGraphicSettings();
  }
});
global.IconChooseOpened = false;
mp.events.add("Client_ChangeFamMarker", () => {
  CloseSettings();
  if (GlobalCheck() == 1) {
    return;
  }
  main_browser.execute("APPS.state.select_icon = {\"show\":true}");
  IconChooseOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_CloseIconChoose", () => {
  CloseIconChoose();
});
global.CloseIconChoose = function () {
  if (IconChooseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.select_icon.show = false;");
    IconChooseOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ChooseFamMarkerIcon", _0x4dc871 => {
  if (IconChooseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChooseFamMarkerIcon", _0x4dc871);
    }
  }
});
mp.events.add("Client_ChangeSuppression", _0x4eb32f => {
  mp.voiceChat.advancedNoiseSuppression = mp.storage.data.betterSuppression = _0x4eb32f;
});
mp.events.add("Client_ChangeNetworkOptimisations", _0x5d81d3 => {
  mp.voiceChat.networkOptimisations = mp.storage.data.networkOptimisations = _0x5d81d3;
});
mp.events.add("Client_ChangePrimeChat", _0x5efebd => {
  if (SettingsOpened && loggedin && !chatActive) {
    _0x5efebd = !!_0x5efebd;
    mp.storage.data.vip_chat_disable = _0x5efebd;
    mp.storage.flush();
  }
});
mp.events.add("Client_RequestSendEmailVerification", () => {
  if (SettingsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestSendEmailVerification");
    }
  }
});