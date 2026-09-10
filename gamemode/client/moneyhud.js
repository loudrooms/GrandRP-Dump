let donate_timer;
let car_interval;
let serverTimeRef = null;
let hudTimeTimeout = null;
let hudTimeInterval = null;
function applyTimeTick() {
  const {
    hour: _0x269108,
    minute: _0x4ec35d,
    second: _0xc9a7f6
  } = getServerHMS();
  main_browser.execute("APPS.state.hud.time = \"" + getServerTimeString() + "\";");
  if (is_time_enabled == 1) {
    if (!bHalloween2025 || mp.storage.data.halloween_mode != 1 && loggedin) {
      if (at_duel_location == 1 && duel_day_time != -1) {
        mp.game.time.setClockTime(duel_day_time, 0, 0);
      } else {
        mp.game.time.setClockTime(_0x269108, _0x4ec35d, _0xc9a7f6);
      }
    } else {
      mp.game.time.setClockTime(3, 0, 0);
    }
  }
}
function scheduleHudTimeTick() {
  if (hudTimeTimeout) {
    clearTimeout(hudTimeTimeout);
    hudTimeTimeout = null;
  }
  if (hudTimeInterval) {
    clearInterval(hudTimeInterval);
    hudTimeInterval = null;
  }
  applyTimeTick();
  const _0x1e3bec = (60 - serverTimeRef.second) * 1000;
  hudTimeTimeout = setTimeout(function () {
    hudTimeTimeout = null;
    applyTimeTick();
    hudTimeInterval = setInterval(function () {
      applyTimeTick();
    }, 60000);
  }, _0x1e3bec);
}
global.setServerTime = function (_0x393cec, _0x1188f1, _0x3f6953 = 0) {
  serverTimeRef = {
    hour: _0x393cec,
    minute: _0x1188f1,
    second: _0x3f6953,
    clientMs: Date.now()
  };
  scheduleHudTimeTick();
};
global.getServerHMS = function () {
  if (!serverTimeRef) {
    return {
      hour: 0,
      minute: 0,
      second: 0
    };
  }
  const _0x859a7b = Math.floor((Date.now() - serverTimeRef.clientMs) / 1000) + serverTimeRef.second;
  const _0x44342a = serverTimeRef.minute + Math.floor(_0x859a7b / 60);
  return {
    hour: (serverTimeRef.hour + Math.floor(_0x44342a / 60)) % 24,
    minute: _0x44342a % 60,
    second: _0x859a7b % 60
  };
};
global.getServerHourMinute = function () {
  const {
    hour: _0x171601,
    minute: _0x251ad5
  } = getServerHMS();
  return {
    hour: _0x171601,
    minute: _0x251ad5
  };
};
global.getServerTimeString = function () {
  const {
    hour: _0x5d0ce3,
    minute: _0x36f978
  } = getServerHMS();
  return _0x5d0ce3 + ":" + (_0x36f978 < 10 ? "0" + _0x36f978 : _0x36f978);
};
mp.events.add("CreateMoneyHud", (_0x3c5c59, _0x3976e7, _0x3d8849, _0x4a1da6, _0x4dd131, _0x539edc, _0x40e45d, _0x56ee45, _0x15f01a, _0x2b4630, _0x4b26f9 = 1, _0x13b71d = false, _0x398a31 = false, _0x5d477c = undefined, _0x411ccc = null, _0x4cccd8 = null, _0x30f720 = false) => {
  main_browser.execute("APPS.state.hud.server = " + _0x4b26f9 + ";");
  main_browser.execute("APPS.state.hud.pid = " + _0x3c5c59 + ";");
  main_browser.execute("APPS.state.hud.money = " + _0x3976e7 + ";");
  main_browser.execute("APPS.state.hud.bankmoney = " + _0x3d8849 + ";");
  if (_0x5d477c) {
    main_browser.execute("APPS.state.hud.doubleDonationOffer = " + _0x5d477c + ";");
  }
  main_browser.execute("APPS.state.hud.salaryX2EndDate = " + (_0x411ccc ? "'" + _0x411ccc + "'" : "null") + ";");
  main_browser.execute("APPS.state.hud.serverTimestamp = " + (_0x4cccd8 ? "'" + _0x4cccd8 + "'" : "null") + ";");
  main_browser.execute("APPS.state.hud.showBattlepassExpX2 = " + _0x30f720 + ";");
  if (_0x4dd131 < 10) {
    main_browser.execute("APPS.state.hud.time = \"" + _0x4a1da6 + ":0" + _0x4dd131 + "\";");
  } else {
    main_browser.execute("APPS.state.hud.time = \"" + _0x4a1da6 + ":" + _0x4dd131 + "\";");
  }
  if (_0x40e45d < 10) {
    if (_0x56ee45 < 10) {
      main_browser.execute("APPS.state.hud.date = \"0" + _0x56ee45 + ".0" + _0x40e45d + "." + _0x15f01a + "\";");
    } else {
      main_browser.execute("APPS.state.hud.date = \"" + _0x56ee45 + ".0" + _0x40e45d + "." + _0x15f01a + "\";");
    }
  } else if (_0x56ee45 < 10) {
    main_browser.execute("APPS.state.hud.date = \"0" + _0x56ee45 + "." + _0x40e45d + "." + _0x15f01a + "\";");
  } else {
    main_browser.execute("APPS.state.hud.date = \"" + _0x56ee45 + "." + _0x40e45d + "." + _0x15f01a + "\";");
  }
  main_browser.execute("APPS.state.hud.button_mic = '" + GetKeyCode(mp.storage.data.bind_controls.microphone) + "';");
  main_browser.execute("APPS.state.hud.button_globalmic = '" + GetKeyCode(mp.storage.data.bind_controls.globalmic) + "';");
  main_browser.execute("APPS.state.hud.button_cruize = '" + GetKeyCode(mp.storage.data.bind_controls.cruize) + "';");
  main_browser.execute("APPS.state.hud.button_engine = '" + GetKeyCode(mp.storage.data.bind_controls.engine) + "';");
  main_browser.execute("APPS.state.hud.button_inv = '" + GetKeyCode(mp.storage.data.bind_controls.inventory) + "';");
  main_browser.execute("APPS.state.hud.button_menu = '" + GetKeyCode(mp.storage.data.bind_controls.menu) + "';");
  main_browser.execute("APPS.state.hud.button_interact = '" + GetKeyCode(mp.storage.data.bind_controls.action) + "';");
  main_browser.execute("APPS.state.hud.button_mobile = '" + GetKeyCode(mp.storage.data.bind_controls.mobile) + "';");
  main_browser.execute("APPS.state.hud.button_hud = '" + GetKeyCode(mp.storage.data.bind_controls.hud) + "';");
  main_browser.execute("APPS.state.hud.quest_key = '" + GetKeyCode(mp.storage.data.bind_controls.quest) + "';");
  main_browser.execute("APPS.state.hud.button_lock = '" + GetKeyCode(mp.storage.data.bind_controls.lock) + "';");
  main_browser.execute("APPS.state.hud.button_autopilot = '" + GetKeyCode(mp.storage.data.bind_controls.autopilot) + "';");
  main_browser.execute("APPS.state.hud.button_familymic = '" + GetKeyCode(mp.storage.data.bind_controls.familymic) + "';");
  main_browser.execute("APPS.state.hud.hud_bodycam = 0;");
  main_browser.execute("APPS.state.hud.online = " + _0x2b4630 + ";");
  if (mp.storage.data.hints_flickering_blacklist) {
    const _0xdebe36 = JSON.parse(mp.storage.data.hints_flickering_blacklist);
    main_browser.execute("APPS.state.hud.hints_flickering_blacklist = " + JSON.stringify(_0xdebe36) + ";");
  } else {
    main_browser.execute("APPS.state.hud.hints_flickering_blacklist = [];");
  }
  if (mp.storage.data.left_hints == 1) {
    main_browser.execute("APPS.state.hud.left_hints_disabled = false;");
  } else {
    main_browser.execute("APPS.state.hud.left_hints_disabled = true;");
  }
  if (mp.storage.data.kill_list_show == 1) {
    main_browser.execute("APPS.state.hud.kill_list_show = true;");
  } else {
    main_browser.execute("APPS.state.hud.kill_list_show = false;");
  }
  if (mp.storage.data.kill_list == 1) {
    main_browser.execute("APPS.state.hud.big_kill_list = 1;");
  } else {
    main_browser.execute("APPS.state.hud.big_kill_list = 0;");
  }
  if (is_winter || is_snow) {
    if (mp.storage.data.snow_mode) {
      ChangeSnowState(true);
    } else {
      ChangeSnowState(false);
    }
  }
  if (is_new_update_showcase) {
    setTimeout(() => {
      ShowMobileEventNotif(0, "", "", "", "", 12);
    }, 70000);
  }
  const _0x794f47 = getRandomInt(5, 20);
  setTimeout(() => {
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
    main_browser.execute("APPS.state.hud.office_quest_notif = true;");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.office_quest_notif = false;");
    }, 5000);
  }, _0x794f47 * 60 * 1000);
  if (_0x398a31) {
    setTimeout(() => {
      ShowMobileEventNotif(0, "", "", "", "", 13);
    }, 120000);
    setInterval(() => {
      ShowMobileEventNotif(0, "", "", "", "", 13);
    }, 3600000);
  }
  main_browser.execute("APPS.state.hud.show = true;");
  InitilizeCrosshair();
  localplayer.setDriverAbility(1);
  localplayer.setAccuracy(100);
  localplayer.setConfigFlag(35, false);
  InitData();
  localplayer.setSuffersCriticalHits(false);
  ["SKT_a", "SKT_weapon", "SKT_b", "SKT_c", "SKT_d", "SKT_armed"].forEach(_0x38dcdb => {
    const _0x481d32 = mp.game.joaat(_0x38dcdb);
    mp.game.invoke("0xA6A12939F16D85BE", _0x481d32, false);
  });
  setServerTime(_0x4a1da6, _0x4dd131, _0x539edc);
  if (mp.storage.data.ambient_sounds == 0) {
    mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");
  }
  if (_0x13b71d && curr_lang != "ru") {
    main_browser.execute("APPS.state.hud.donate_discount = " + _0x13b71d + ";");
  } else if (_0x13b71d && curr_lang == "ru") {
    main_browser.execute("APPS.state.hud.donate_discount = " + JSON.stringify(_0x13b71d) + ";");
  }
  main_browser.execute("APPS.state.hud.new_design_show = " + mp.storage.data.new_design_show + ";");
});
mp.events.add("Client_StartDonateStock", (_0x3ddfd8, _0x4a5163, _0x122e37, _0x4f6cde, _0x2a8974) => {
  if (_0x3ddfd8 == 0) {
    if (donate_timer != null) {
      clearInterval(donate_timer);
      donate_timer = undefined;
    }
    let _0x19efe2 = _0x122e37 - _0x4a5163;
    donate_timer = setInterval(function () {
      if (_0x19efe2 > 0 && AFK_state != 1) {
        _0x19efe2--;
        let _0x2ebb70 = Math.floor(_0x19efe2 / 3600);
        let _0x286c32 = Math.floor((_0x19efe2 - _0x2ebb70 * 3600) / 60);
        if (_0x2ebb70 < 10) {
          _0x2ebb70 = "0" + _0x2ebb70;
        }
        if (_0x286c32 < 10) {
          _0x286c32 = "0" + _0x286c32;
        }
        let _0x7185d5 = _0x2ebb70 + ":" + _0x286c32;
        main_browser.execute("APPS.state.hud.donate_stock_text = '" + _0x7185d5 + "';");
      } else if (_0x19efe2 <= 0) {
        if (donate_timer != null) {
          clearInterval(donate_timer);
        }
        donate_timer = undefined;
        main_browser.execute("APPS.state.hud.donate_stock_show = false;");
      }
    }, 1000);
    if (mp.storage.data.donate_notif == 1) {
      main_browser.execute("APPS.state.hud.donate_stock_money = " + _0x4f6cde + ";");
      main_browser.execute("APPS.state.hud.donate_stock_donate = " + _0x2a8974 + ";");
      main_browser.execute("APPS.state.hud.donate_stock_show = true;");
    } else {
      mp.game.ui.notifications.show(language["Сейчас проходит акция, у Вас отключен счетчик, включить его можно в настройках"][curr_lang], false, 0, 2);
    }
  }
});
mp.events.add("Client_StartCarOnlineTimer", (_0x3f1453, _0x53e9dc) => {
  if (car_interval != null) {
    clearInterval(car_interval);
    car_interval = undefined;
  }
  let _0x5ba550 = Math.floor(_0x53e9dc / 3600);
  let _0x2f24dd = _0x53e9dc - _0x3f1453;
  let _0x4dcd04 = "car";
  if (_0x3f1453 >= 180000) {
    _0x4dcd04 = "roulette";
  }
  main_browser.execute("APPS.state.hud.car_promo_type = '" + _0x4dcd04 + "';");
  car_interval = setInterval(function () {
    if (_0x2f24dd > 0 && AFK_state != 1) {
      _0x2f24dd--;
      let _0xe3cc66 = Math.floor(_0x2f24dd / 3600);
      let _0x227d53 = Math.floor((_0x2f24dd - _0xe3cc66 * 3600) / 60);
      let _0x3bd458 = _0x5ba550 - _0xe3cc66 - 1;
      if (_0x3bd458 < 10) {
        _0x3bd458 = "0" + _0x3bd458;
      }
      if (_0x227d53 < 10) {
        _0x227d53 = "0" + _0x227d53;
      }
      main_browser.execute("APPS.state.hud.car_promo_hours = " + _0x3bd458 + ";");
      main_browser.execute("APPS.state.hud.car_promo_minutes = " + _0x227d53 + ";");
    } else if (_0x2f24dd <= 0) {
      if (car_interval != null) {
        clearInterval(car_interval);
      }
      car_interval = undefined;
      main_browser.execute("APPS.state.hud.car_promo_show = false;");
    }
  }, 1000);
  main_browser.execute("APPS.state.hud.car_promo_hours_total = " + _0x5ba550 + ";");
  main_browser.execute("APPS.state.hud.car_promo_show = true;");
});
mp.events.add("Client_CarIntervalStop", () => {
  if (car_interval != null) {
    clearInterval(car_interval);
    car_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.car_promo_show = false;");
});
let is_time_enabled = true;
function UpdateOnline() {
  main_browser.execute("APPS.state.hud.online = " + mp.players.length + ";");
}
mp.events.add("Client_ChangeTimeEnabled", _0x527dd3 => {
  is_time_enabled = _0x527dd3;
});
mp.events.add("UpdateOnline", () => {
  UpdateOnline();
});
mp.events.add("playerJoin", _0x31d210 => {
  UpdateOnline();
});
mp.events.add("playerQuit", _0x4175d6 => {
  UpdateOnline();
});
mp.events.add("UpdateSickStatus", _0x1d0587 => {
  main_browser.execute("APPS.state.hud.is_sick = " + _0x1d0587 + ";");
});
mp.events.add("UpdateMoney", (_0x3ccb41, _0x5e617a = 0) => {
  main_browser.execute("APPS.state.hud.money = " + _0x3ccb41 + ";");
  if (_0x5e617a != 0) {
    main_browser.execute("APPS.state.hud.changemoney = " + _0x5e617a + ";");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.changemoney = 0;");
    }, 5000);
  }
  if (inLobby) {
    main_browser.execute("APPS.state.introLobby.userInfo.balance.money = " + _0x3ccb41);
  }
});
mp.events.add("UpdateBankMoney", (_0xcb38cc, _0x3c2a9c = 0) => {
  main_browser.execute("APPS.state.hud.bankmoney = " + _0xcb38cc + ";");
  if (_0x3c2a9c != 0) {
    main_browser.execute("APPS.state.hud.changebank = " + _0x3c2a9c + ";");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.changebank = 0;");
    }, 5000);
  }
});
mp.events.add("UpdateTime", (_0x55126e, _0x3631fa) => {
  if (_0x3631fa < 10) {
    main_browser.execute("APPS.state.hud.time = \"" + _0x55126e + ":0" + _0x3631fa + "\";");
  } else {
    main_browser.execute("APPS.state.hud.time = \"" + _0x55126e + ":" + _0x3631fa + "\";");
  }
});
mp.events.add("SetCorrectDate", (_0x43fa6a, _0x2ab00e, _0x587c27, _0x61190b, _0x4cbcc7, _0x563f7b) => {
  if (loggedin) {
    setServerTime(_0x43fa6a, _0x2ab00e, _0x587c27);
    if (_0x61190b < 10) {
      if (_0x4cbcc7 < 10) {
        main_browser.execute("APPS.state.hud.date = \"0" + _0x4cbcc7 + ".0" + _0x61190b + "." + _0x563f7b + "\";");
      } else {
        main_browser.execute("APPS.state.hud.date = \"" + _0x4cbcc7 + ".0" + _0x61190b + "." + _0x563f7b + "\";");
      }
    } else if (_0x4cbcc7 < 10) {
      main_browser.execute("APPS.state.hud.date = \"0" + _0x4cbcc7 + "." + _0x61190b + "." + _0x563f7b + "\";");
    } else {
      main_browser.execute("APPS.state.hud.date = \"" + _0x4cbcc7 + "." + _0x61190b + "." + _0x563f7b + "\";");
    }
  }
});
mp.events.add("PayDayBrowserCall", (_0x40ccb3, _0x2b9e74) => {
  const _0x1200fd = "{\"level\":" + _0x40ccb3 + ",\"exp\":" + _0x2b9e74 + ",\"show\":true}";
  main_browser.execute("APPS.state.lvlup = " + _0x1200fd);
});
mp.events.add("Client_ShowNotification", (_0x2a7238, _0x799dce) => {
  if (Array.isArray(_0x2a7238) && _0x2a7238.length > 0 && typeof _0x2a7238[0] == "string") {
    const _0x43aaac = _0x2a7238.slice(1).map(_0x2b5eaf => typeof _0x2b5eaf != "string" || typeof resolveTranslationValue != "function" || /^\d+$/.test(_0x2b5eaf) ? _0x2b5eaf : resolveTranslationValue(_0x2b5eaf));
    _0x2a7238 = TranslateText(_0x2a7238[0], ..._0x43aaac);
  } else if (!isNaN(+_0x2a7238)) {
    if ((_0x2a7238 = parseInt(_0x2a7238)) + 1 > NotificationMessages.length) {
      return;
    }
    _0x2a7238 = language[NotificationMessages[_0x2a7238]][curr_lang];
  }
  ShowNotification(_0x2a7238, _0x799dce);
});
let notif_interval = null;
let notif_progress = 0;
global.ShowNotification = function (_0x27e64d, _0x1f44e3) {
  if (notif_interval != null) {
    clearInterval(notif_interval);
    notif_interval = null;
  }
  main_browser.execute("APPS.state.hud.notif_progress = 0;");
  main_browser.execute("APPS.state.hud.notif_text = '" + _0x27e64d + "';");
  if (_0x1f44e3 == 2) {
    main_browser.execute("APPS.state.hud.notif_status = 2;");
    PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  } else if (_0x1f44e3 == 6) {
    main_browser.execute("APPS.state.hud.notif_status = 3;");
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  } else if (_0x1f44e3 == 25) {
    main_browser.execute("APPS.state.hud.notif_status = 1;");
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
  } else if (_0x1f44e3 == 4) {
    main_browser.execute("APPS.state.hud.notif_status = 4;");
    PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  }
  notif_progress = 0;
  notif_interval = setInterval(function () {
    notif_progress += 1;
    main_browser.execute("APPS.state.hud.notif_progress = " + notif_progress + ";");
    if (notif_progress >= 100) {
      if (notif_interval != null) {
        clearInterval(notif_interval);
      }
      notif_interval = null;
      main_browser.execute("APPS.state.hud.notif_status = 0;");
    }
  }, 50);
};
let left_notif_interval = null;
let left_notif_progress = 0;
mp.events.add("Client_Left_Notification", (_0x1f7988, _0x1092e6, _0x177b0e) => {
  if (left_notif_interval != null) {
    clearInterval(left_notif_interval);
    left_notif_interval = null;
  }
  _0x1f7988 = resolveHudLocalizedMessage(_0x1f7988);
  _0x1092e6 = resolveHudLocalizedMessage(_0x1092e6);
  main_browser.execute("APPS.state.hud.left_notif_progress = 100;");
  main_browser.execute("APPS.state.hud.left_notif_text = " + JSON.stringify(_0x1f7988) + ";");
  main_browser.execute("APPS.state.hud.left_notif_additional_text = " + JSON.stringify(_0x1092e6) + ";");
  if (_0x177b0e == 0) {
    main_browser.execute("APPS.state.hud.left_notif_status = 0;");
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  } else if (_0x177b0e == 1) {
    main_browser.execute("APPS.state.hud.left_notif_status = 1;");
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
  }
  main_browser.execute("APPS.state.hud.left_notif_show = true;");
  left_notif_progress = 100;
  left_notif_interval = setInterval(function () {
    left_notif_progress -= 1;
    main_browser.execute("APPS.state.hud.left_notif_progress = " + left_notif_progress + ";");
    if (left_notif_progress <= 0) {
      if (left_notif_interval != null) {
        clearInterval(left_notif_interval);
      }
      left_notif_interval = null;
      main_browser.execute("APPS.state.hud.left_notif_show = false;");
      main_browser.execute("APPS.state.hud.left_notif_status = 0;");
    }
  }, 50);
});
let locator_timeout = null;
mp.events.add("Client_Locator_Notify", (_0x8091ea, _0x10649c) => {
  LocatorMsg(_0x8091ea, _0x10649c);
});
global.LocatorMsg = function (_0x36d9bf, _0xdccac7, _0x5550fc) {
  if (locator_timeout) {
    main_browser.execute("APPS.state.hud.locator_show = false;");
    clearTimeout(locator_timeout);
    locator_timeout = null;
  }
  _0x36d9bf = resolveTranslationValue(_0x36d9bf);
  main_browser.execute("APPS.state.hud.locator_text = '" + _0x36d9bf + "';");
  main_browser.execute("APPS.state.hud.locator_found = '" + _0x5550fc + "';");
  main_browser.execute("APPS.state.hud.locator_status = " + _0xdccac7 + ";");
  main_browser.execute("APPS.state.hud.locator_show = true;");
  locator_timeout = setTimeout(() => {
    locator_timeout = null;
    main_browser.execute("APPS.state.hud.locator_show = false;");
  }, 5000);
};
let theft_timeout = null;
mp.events.add("Client_Theft_Notify", (_0x597b2e, _0x569291) => {
  if (typeof resolveTranslationValue == "function") {
    _0x597b2e = resolveTranslationValue(_0x597b2e);
    _0x569291 = resolveTranslationValue(_0x569291);
  }
  if (theft_timeout) {
    main_browser.execute("APPS.state.hud.theft_notif_show = false;");
    clearTimeout(theft_timeout);
    theft_timeout = null;
  }
  PlayAudioSound("MP_AWARD", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  main_browser.execute("APPS.state.hud.theft_title = " + JSON.stringify(_0x597b2e) + ";");
  main_browser.execute("APPS.state.hud.theft_text = " + JSON.stringify(_0x569291) + ";");
  main_browser.execute("APPS.state.hud.theft_notif_show = true;");
  theft_timeout = setTimeout(() => {
    theft_timeout = null;
    main_browser.execute("APPS.state.hud.theft_notif_show = false;");
  }, 10000);
});
let mail_timeout = null;
mp.events.add("Client_Mail_Notify", (_0x29bf6a, _0x5073a0 = 0, _0x4fb026 = 1, _0x3ee203 = 0, _0x14d191 = 0, _0x39b19a = "item", _0x326e9d = null) => {
  _0x29bf6a = t(_0x29bf6a);
  let _0x526004 = [];
  if (_0x326e9d) {
    try {
      _0x526004 = typeof _0x326e9d == "string" ? JSON.parse(_0x326e9d) : _0x326e9d;
    } catch (_0x5ea95d) {
      _0x526004 = [];
    }
  } else if (_0x5073a0) {
    _0x526004 = [{
      item_id: _0x5073a0,
      count: _0x4fb026,
      extra: _0x3ee203,
      extra2: _0x14d191,
      type: _0x39b19a
    }];
  }
  ShowStaticNotification({
    type: "parcel",
    title: language["Получена посылка"][curr_lang],
    text: TranslateText("Отправитель: {0}", _0x29bf6a),
    hasClose: true,
    timeToEnd: 20,
    items: _0x526004,
    buttons: [{
      text: language["Проложить маршрут"][curr_lang],
      iconLeft: "gps",
      color: "white",
      callback: () => {
        SetGPSToNearestMailLocation();
      },
      closeAfterClick: true
    }]
  });
});
global.SetGPSToNearestMailLocation = function () {
  const _0x49d268 = new mp.Vector3(-87.759, 6494.625, 32.101);
  const _0x300f19 = new mp.Vector3(133.217, 96.614, 83.508);
  if (mp.Vector3.Distance2D(localplayer.position, _0x49d268) < mp.Vector3.Distance2D(localplayer.position, _0x300f19)) {
    SetGPSLocation(_0x49d268.x, _0x49d268.y, _0x49d268.z, true);
  } else {
    SetGPSLocation(_0x300f19.x, _0x300f19.y, _0x300f19.z, true);
  }
};
let skill_lvlup_timeout = null;
mp.events.add("Client_SkilllvlupNotif", (_0x5e7a6d, _0x2adfc9 = true) => {
  if (skill_lvlup_timeout) {
    main_browser.execute("APPS.state.hud.skill_lvlup_notif = 0;");
    clearTimeout(skill_lvlup_timeout);
    skill_lvlup_timeout = null;
  }
  if (_0x2adfc9 == 1) {
    PlayAudioSound("MP_AWARD", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
  main_browser.execute("APPS.state.hud.skill_lvlup_notif = " + _0x5e7a6d + ";");
  skill_lvlup_timeout = setTimeout(() => {
    skill_lvlup_timeout = null;
    main_browser.execute("APPS.state.hud.skill_lvlup_notif = 0;");
  }, 5000);
});
let fam_quest_timeout = null;
setInterval(function () {
  if (local_family) {
    if (fam_quest_timeout) {
      main_browser.execute("APPS.state.hud.fam_quest_notif = false;");
      clearTimeout(fam_quest_timeout);
      fam_quest_timeout = null;
    }
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
    main_browser.execute("APPS.state.hud.fam_quest_notif = true;");
    fam_quest_timeout = setTimeout(() => {
      fam_quest_timeout = null;
      main_browser.execute("APPS.state.hud.fam_quest_notif = false;");
    }, 10000);
  }
}, 1800000);
let achiv_timeout = null;
function getNotificationMessageIndex(_0x1956db) {
  if (typeof _0x1956db == "number" && Number.isFinite(_0x1956db)) {
    return _0x1956db;
  } else if (typeof _0x1956db == "string" && /^\d+$/.test(_0x1956db)) {
    return parseInt(_0x1956db, 10);
  } else {
    return null;
  }
}
function getLocalizedByNotificationIndex(_0x1fea7e) {
  if (typeof NotificationMessages == "undefined" || !Array.isArray(NotificationMessages)) {
    return null;
  }
  if (_0x1fea7e === null || _0x1fea7e < 0 || _0x1fea7e >= NotificationMessages.length) {
    return null;
  }
  const _0x5acf70 = NotificationMessages[_0x1fea7e];
  if (typeof _0x5acf70 != "string") {
    return null;
  }
  const _0xad8054 = language[_0x5acf70];
  if (_0xad8054) {
    if (_0xad8054[curr_lang] !== undefined) {
      return _0xad8054[curr_lang];
    } else if (_0xad8054.ru !== undefined) {
      return _0xad8054.ru;
    } else if (_0xad8054.en !== undefined) {
      return _0xad8054.en;
    } else {
      return _0x5acf70;
    }
  } else {
    return _0x5acf70;
  }
}
function getLocalizedByKey(_0x27383c) {
  if (typeof _0x27383c != "string") {
    return null;
  }
  const _0x1d6a67 = language[_0x27383c];
  if (_0x1d6a67) {
    if (_0x1d6a67[curr_lang] !== undefined) {
      return _0x1d6a67[curr_lang];
    } else if (_0x1d6a67.ru !== undefined) {
      return _0x1d6a67.ru;
    } else if (_0x1d6a67.en !== undefined) {
      return _0x1d6a67.en;
    } else {
      return _0x27383c;
    }
  } else {
    return null;
  }
}
function formatLocalizedText(_0x67cc82, _0x584d26) {
  return (_0x67cc82 == null ? "" : String(_0x67cc82)).replace(/{(\d+)}/g, (_0x3d5b2d, _0x3854fe) => {
    const _0x5a514d = _0x584d26[parseInt(_0x3854fe, 10)];
    if (_0x5a514d !== undefined) {
      return String(_0x5a514d);
    } else {
      return _0x3d5b2d;
    }
  });
}
function resolveHudLocalizedMessage(_0x134856) {
  if (Array.isArray(_0x134856)) {
    if (_0x134856.length === 0) {
      return "";
    }
    return formatLocalizedText(resolveHudLocalizedMessage(_0x134856[0]), _0x134856.slice(1));
  }
  if (_0x134856 && typeof _0x134856 == "object") {
    const _0xe1da8c = Object.prototype.hasOwnProperty.call(_0x134856, "id");
    const _0x5b72c4 = Array.isArray(_0x134856.args) ? _0x134856.args : [];
    if (_0xe1da8c) {
      return formatLocalizedText(resolveHudLocalizedMessage(_0x134856.id), _0x5b72c4);
    }
  }
  const _0x2d2c80 = getNotificationMessageIndex(_0x134856);
  if (_0x2d2c80 !== null) {
    const _0x3465bf = getLocalizedByNotificationIndex(_0x2d2c80);
    if (_0x3465bf !== null) {
      return _0x3465bf;
    }
  }
  if (typeof _0x134856 == "string") {
    const _0x36a90c = getLocalizedByKey(_0x134856);
    if (_0x36a90c !== null) {
      return _0x36a90c;
    } else {
      return _0x134856;
    }
  }
  if (_0x134856 == null) {
    return "";
  } else {
    return String(_0x134856);
  }
}
mp.events.add("Client_Achiv_Notify", (_0x5e10a8, _0x44bcd4 = "Достижения", _0xb655c3 = 0) => {
  if (loggedin) {
    _0x5e10a8 = resolveHudLocalizedMessage(_0x5e10a8);
    _0x44bcd4 = resolveHudLocalizedMessage(_0x44bcd4);
    if (achiv_timeout) {
      main_browser.execute("APPS.state.hud.achiv_show = false;");
      clearTimeout(achiv_timeout);
      achiv_timeout = null;
    }
    if (_0xb655c3 == 20) {
      if (mp.storage.data.wedding_notif != 1) {
        return;
      }
      PlayAudioSound("MP_AWARD", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    }
    main_browser.execute("APPS.state.hud.achiv_state = " + _0xb655c3 + ";");
    main_browser.execute("APPS.state.hud.achiv_title = '" + _0x44bcd4 + "';");
    main_browser.execute("APPS.state.hud.achiv_text = '" + _0x5e10a8 + "';");
    main_browser.execute("APPS.state.hud.achiv_show = true;");
    achiv_timeout = setTimeout(() => {
      achiv_timeout = null;
      main_browser.execute("APPS.state.hud.achiv_show = false;");
    }, 5000);
  }
});
let casino_tip_timeout = null;
mp.events.add("Client_ShowCasinoTip", () => {
  if (casino_tip_timeout) {
    main_browser.execute("APPS.state.hud.casino_tip = false;");
    clearTimeout(casino_tip_timeout);
    casino_tip_timeout = null;
  }
  main_browser.execute("APPS.state.hud.casino_tip = true;");
  casino_tip_timeout = setTimeout(() => {
    casino_tip_timeout = null;
    main_browser.execute("APPS.state.hud.casino_tip = false;");
  }, 5000);
});
let sick_timeout = null;
mp.events.add("Client_Sick_Notify", (_0x26ad53, _0x2309e1) => {
  if (Array.isArray(_0x26ad53) && _0x26ad53.length > 0 && typeof _0x26ad53[0] == "string") {
    _0x26ad53 = TranslateText(_0x26ad53[0], ..._0x26ad53.slice(1));
  } else if (isNaN(+_0x26ad53) || typeof NotificationMessages == "undefined") {
    if (typeof _0x26ad53 == "string") {
      _0x26ad53 = TranslateText(_0x26ad53);
    }
  } else if ((_0x26ad53 = parseInt(_0x26ad53)) >= 0 && _0x26ad53 < NotificationMessages.length) {
    _0x26ad53 = language[NotificationMessages[_0x26ad53]][curr_lang];
  }
  SickNotify(_0x26ad53, _0x2309e1);
});
global.SickNotify = function (_0x5ba9c1, _0x2df2d8) {
  if (sick_timeout) {
    main_browser.execute("APPS.state.hud.sick_show = false;");
    clearTimeout(sick_timeout);
    sick_timeout = null;
  }
  PlayAudioSound("Zone_Enemy_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  main_browser.execute("APPS.state.hud.sickness = " + parseInt(_0x2df2d8) + ";");
  main_browser.execute("APPS.state.hud.sick_text = " + JSON.stringify(_0x5ba9c1) + ";");
  main_browser.execute("APPS.state.hud.sick_show = true;");
  sick_timeout = setTimeout(() => {
    sick_timeout = null;
    main_browser.execute("APPS.state.hud.sick_show = false;");
  }, 10000);
};
let event_timeout = null;
mp.events.add("Client_Event_Notify", _0x3778e5 => {
  if (curr_lang != "ru" || mp.storage.data.new_design_show != 1 || playerincapture != 1) {
    if (event_timeout) {
      main_browser.execute("APPS.state.hud.event_show = false;");
      clearTimeout(event_timeout);
      event_timeout = null;
    }
    PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
    main_browser.execute("APPS.state.hud.event_name = '" + _0x3778e5 + "';");
    main_browser.execute("APPS.state.hud.fam_event = false;");
    main_browser.execute("APPS.state.hud.event_show = true;");
    event_timeout = setTimeout(() => {
      event_timeout = null;
      main_browser.execute("APPS.state.hud.event_show = false;");
    }, 5000);
  }
});
mp.events.add("Client_Event_countdown", _0x230a4e => {
  main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x230a4e) + ";");
});
let fam_event_timeout = null;
mp.events.add("Client_Fam_Event_Notify", () => {
  if (fam_event_timeout) {
    main_browser.execute("APPS.state.hud.event_show = false;");
    clearTimeout(fam_event_timeout);
    fam_event_timeout = null;
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  main_browser.execute("APPS.state.hud.fam_event = true;");
  main_browser.execute("APPS.state.hud.event_show = true;");
  fam_event_timeout = setTimeout(() => {
    fam_event_timeout = null;
    main_browser.execute("APPS.state.hud.event_show = false;");
  }, 5000);
});
let hint_timeout = null;
mp.events.add("Client_Hint_Notify", _0x237f34 => {
  HintShow(typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x237f34) : _0x237f34);
});
mp.events.add("Client_LockVehicleHint", () => {
  HintShow(TranslateText("Разместить транспорт можно либо в гараже дома, либо на парковке<br>Открыть транспорт можно клавишей {0}", GetKeyCode(mp.storage.data.bind_controls.lock)));
});
mp.events.add("Client_LockVehicleHintSmall", () => {
  HintShow(TranslateText("Открыть транспорт можно клавишей {0}", GetKeyCode(mp.storage.data.bind_controls.lock)));
});
global.HintShow = function (_0x53906e, _0x3c5a27 = 30000) {
  if (hint_timeout) {
    main_browser.execute("APPS.state.hud.hint_show = false;");
    clearTimeout(hint_timeout);
    hint_timeout = null;
  }
  if (!isNaN(+_0x53906e) && typeof NotificationMessages != "undefined") {
    if ((_0x53906e = parseInt(_0x53906e)) >= 0 && _0x53906e < NotificationMessages.length) {
      _0x53906e = language[NotificationMessages[_0x53906e]][curr_lang];
    }
  }
  main_browser.execute("APPS.state.hud.hint_text = " + JSON.stringify(_0x53906e) + ";");
  main_browser.execute("APPS.state.hud.hint_show = true;");
  hint_timeout = setTimeout(() => {
    hint_timeout = null;
    main_browser.execute("APPS.state.hud.hint_show = false;");
  }, mp.storage.data.new_hud ? 5000 : _0x3c5a27);
};
mp.events.add("Client_Hint_Close", () => {
  HintClose();
});
global.HintClose = function () {
  main_browser.execute("APPS.state.hud.hint_show = false;");
  if (hint_timeout) {
    clearTimeout(hint_timeout);
    hint_timeout = null;
  }
};
global.PickUpShow = function (_0x3b70e3, _0x5de18b, _0x209d09, _0x458ecb, _0xdfdb32 = 0, _0x30a057 = 0) {
  let _0x5b76b3 = _0x3b70e3;
  if (_0x30a057) {
    _0x5b76b3 = _0x30a057;
  }
  if (_0x458ecb == 1) {
    _0x3b70e3 = InventoryItems[_0x3b70e3][1];
  }
  main_browser.execute("AppComponents.hud.addPickupItem({\n\t\titem: " + _0x3b70e3 + ",\n\t\tcount: " + _0x5de18b + ",\n\t\tname: '" + _0x209d09 + "',\n\t\tcan_pick: " + _0x458ecb + ",\n\t\tcorrect_item_id: " + _0x5b76b3 + ",\n\t\tuseslot: '" + InventoryItems[_0x5b76b3][6] + "',\n\t\ttype: '" + InventoryItems[_0x5b76b3][7] + "',\n\t\tcorrect: '" + InventoryItems[_0x5b76b3][8] + "',\n\t\tgender: '" + InventoryItems[_0x5b76b3][9] + "',\n\t\textra: '" + _0xdfdb32 + "',\n\t\ttimestamp: Date.now()\n\t});");
  if (_0x458ecb == 1) {
    mp.events.call("Client_CanPickupItems", true);
  }
};
global.PickUpClose = function (_0x53770c) {
  main_browser.execute("AppComponents.hud.removePickupItemById(" + _0x53770c + ");");
};
mp.events.add("Client_Pickup_Notify", (_0x234682, _0x3c3ff5, _0x58b396, _0x3b6172, _0x1f6642 = 0, _0x1dacdb = 0) => {
  PickUpShow(_0x234682, _0x3c3ff5, _0x58b396, _0x3b6172, _0x1f6642, _0x1dacdb);
});
mp.events.add("Client_Pickup_Close", (_0x184ed4, _0x45d3c2 = true) => {
  PickUpClose(_0x184ed4);
  mp.events.call("Client_CanPickupItems", _0x45d3c2);
});
mp.events.add("Client_Quest_Notify", (_0x47c7ae, _0x5d3dee) => {
  QuestShow(_0x47c7ae, _0x5d3dee);
});
global.quest_showed = false;
global.QuestShow = function (_0x5813f7, _0x28e18a) {
  main_browser.execute("APPS.state.hud.quest_discription = '" + _0x28e18a + "';");
  main_browser.execute("APPS.state.hud.quest_name = '" + _0x5813f7 + "';");
  main_browser.execute("APPS.state.hud.quest_active = true;");
  quest_showed = true;
};
mp.events.add("Client_Quest_Close", () => {
  QuestClose();
});
global.QuestClose = function () {
  quest_showed = false;
  main_browser.execute("APPS.state.hud.quest_active = false;");
  main_browser.execute("APPS.state.hud.newbie_quest_active = false;");
};
let weekly_event_timeout = null;
mp.events.add("Client_Weekly_Show", (_0x10b6cb, _0x124ee0) => {
  if (curr_lang != "ru" || mp.storage.data.new_design_show != 1 || playerincapture != 1) {
    if (weekly_event_timeout) {
      main_browser.execute("APPS.state.hud.weekly_event_show = false;");
      clearTimeout(weekly_event_timeout);
      weekly_event_timeout = null;
    }
    main_browser.execute("APPS.state.hud.week_onli = " + _0x10b6cb + ";");
    main_browser.execute("APPS.state.hud.gender = " + _0x124ee0 + ";");
    main_browser.execute("APPS.state.hud.weekly_event_type = 1;");
    main_browser.execute("APPS.state.hud.weekly_event_show = true;");
    weekly_event_timeout = setTimeout(() => {
      weekly_event_timeout = null;
      main_browser.execute("APPS.state.hud.weekly_event_show = false;");
    }, 10000);
  }
});
let report_status = 0;
mp.events.add("Client_SwitchReportStatus", _0x567d99 => {
  if (_0x567d99 == 1) {
    report_status = 1;
    main_browser.execute("APPS.state.hud.hide_admin_reports = true;");
  } else {
    report_status = 0;
    main_browser.execute("APPS.state.hud.hide_admin_reports = false;");
  }
});
let kill_list_status = 0;
mp.events.add("Client_SwitchKillListStatus", _0x45a03a => {
  kill_list_status = _0x45a03a == 1 ? 1 : 0;
});
mp.events.add("Client_Weekly_Newbie_Show", () => {
  if (weekly_event_timeout) {
    main_browser.execute("APPS.state.hud.weekly_event_show = false;");
    clearTimeout(weekly_event_timeout);
    weekly_event_timeout = null;
  }
  main_browser.execute("APPS.state.hud.weekly_event_type = 2;");
  main_browser.execute("APPS.state.hud.weekly_event_show = true;");
  weekly_event_timeout = setTimeout(() => {
    weekly_event_timeout = null;
    main_browser.execute("APPS.state.hud.weekly_event_show = false;");
  }, 10000);
});
let payday_timeout = null;
mp.events.add("Client_PayDay_Show", (_0x84b448, _0x10adfa, _0x5367b6, _0x5cc959 = "", _0x1dc005 = 0, _0xffa76d = 0, _0x309d5e, _0x486f03, _0x39f0d3 = 0, _0x34b203 = "", _0x3015a3 = "", _0x466968 = "") => {
  if (payday_timeout) {
    main_browser.execute("APPS.state.hud.payday_show = false;");
    clearTimeout(payday_timeout);
    payday_timeout = null;
  }
  const _0x36ad00 = _0x444459 => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x444459) : _0x444459;
  const _0x5ce539 = {
    payday_salary: _0x84b448,
    payday_text: _0x36ad00(_0x10adfa),
    payday_value: _0x5367b6,
    payday_text2: _0x36ad00(_0x5cc959),
    payday_value2: _0x1dc005,
    payday_value3: _0xffa76d,
    payday_vip_text: _0x36ad00(_0x3015a3) || "",
    payday_vip_value: _0x466968 || "",
    payday_time: _0x309d5e,
    payday_date: _0x486f03,
    case_received: _0x34b203,
    payday_show: true
  };
  main_browser.execute("Object.assign(APPS.state.hud, " + JSON.stringify(_0x5ce539) + ");");
  payday_timeout = setTimeout(() => {
    payday_timeout = null;
    main_browser.execute("APPS.state.hud.payday_show = false;");
  }, 10000);
});
mp.events.add("Client_Kill_List_Add", _0x4ea215 => {
  if (kill_list_status != 1) {
    main_browser.execute("APPS.state.hud.kill_list_to_add = " + JSON.stringify(_0x4ea215) + ";");
  }
});
mp.events.add("Client_Report_List_Add", _0x493aa9 => {
  main_browser.execute("APPS.state.hud.report_list_to_add = " + JSON.parse(_0x493aa9) + ";");
});
mp.events.add("Client_Gov_State", _0x28d5e8 => {
  if (_0x28d5e8 == 1) {
    main_browser.execute("APPS.state.hud.is_gov = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_gov = false;");
  }
});
global.navigation_showed = false;
mp.events.add("Client_Police_State", _0x1799e9 => {
  if (_0x1799e9 == 1) {
    main_browser.execute("APPS.state.hud.is_police = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_police = false;");
  }
});
mp.events.add("Client_Medic_State", _0x92a265 => {
  if (_0x92a265 == 1) {
    main_browser.execute("APPS.state.hud.is_medic = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_medic = false;");
  }
});
mp.events.add("Client_Gang_State", _0x2f02af => {
  if (_0x2f02af == 1) {
    main_browser.execute("APPS.state.hud.is_gang = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_gang = false;");
  }
});
global.at_standart_anim = false;
mp.events.add("Client_Anim_State", _0x5e77c2 => {
  if (_0x5e77c2 == 1) {
    main_browser.execute("APPS.state.hud.is_animation = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_animation = false;");
  }
  at_standart_anim = _0x5e77c2;
});
mp.events.add("Client_ChangeDarkNightState", (_0x2d9185, _0x2786c6) => {
  if (_0x2d9185 == 1) {
    StartCustomSound("dark_night", "sounds/music/dark_night.mp3", 0.2);
    mp.game.invoke(getNative("_STOP_ALL_SCREEN_EFFECTS"));
    mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "CrossLine", 2000, true);
    setTimeout(() => {
      mp.game.invoke(getNative("_STOP_ALL_SCREEN_EFFECTS"));
      mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "CrossLineOut", 2000, true);
      StartCustomSound("dark_night", "sounds/notifications/dark_night_started.mp3", 0.2);
      main_browser.execute("APPS.state.hud.dark_night_show = true;");
      main_browser.execute("APPS.state.hud.dark_night_time = " + _0x2786c6 + ";");
    }, 20000);
  } else {
    main_browser.execute("APPS.state.hud.dark_night_show = false;");
  }
});
let arend_interval = null;
let arend_progress = 0;
mp.events.add("Client_ShowArendNotification", _0x5acb03 => {
  if (arend_interval != null) {
    clearInterval(arend_interval);
    arend_interval = null;
  }
  if (_0x5acb03 > 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    arend_progress = _0x5acb03;
    main_browser.execute("APPS.state.hud.arend_full_time = " + _0x5acb03 + ";");
    main_browser.execute("APPS.state.hud.arend_text = '" + TranslateText("Аренда транспорта<br><span>закончится через {0} секунд</span>", arend_progress) + "';");
    main_browser.execute("APPS.state.hud.arend_show = true;");
    arend_interval ||= setInterval(function () {
      arend_progress--;
      main_browser.execute("APPS.state.hud.arend_text = '" + TranslateText("Аренда транспорта<br><span>закончится через {0} секунд</span>", arend_progress) + "';");
      if (arend_progress <= 0) {
        if (arend_interval != null) {
          clearInterval(arend_interval);
        }
        arend_interval = null;
        main_browser.execute("APPS.state.hud.arend_show = false;");
      }
    }, 1000);
  } else {
    if (arend_interval != null) {
      clearInterval(arend_interval);
    }
    main_browser.execute("APPS.state.hud.arend_show = false;");
  }
});
let graffiti_timeout = null;
let lastGraffitiPos = null;
mp.events.add("Client_ShowGangGraffitiNotif", (_0x597bde, _0x5a4787, _0x2c1684) => {
  if (mp.storage.data.graffiti_notif == 0) {
    return;
  }
  if (graffiti_timeout) {
    main_browser.execute("APPS.state.hud.gang_graffiti_show = false;");
    clearTimeout(graffiti_timeout);
    graffiti_timeout = null;
  }
  main_browser.execute("APPS.state.hud.graffiti_gang_name = '" + _0x5a4787 + "';");
  const _0x37a1dc = mp.game.pathfind.getStreetNameAtCoord(_0x597bde.x, _0x597bde.y, _0x597bde.z, 0, 0);
  const _0x111b37 = mp.game.ui.getStreetNameFromHashKey(_0x37a1dc.streetName);
  main_browser.execute("APPS.state.hud.graffiti_location_name = '" + _0x111b37 + "';");
  main_browser.execute("APPS.state.hud.gang_graffiti_member = " + _0x2c1684 + ";");
  main_browser.execute("APPS.state.hud.gang_graffiti_show = true;");
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  graffiti_timeout = setTimeout(() => {
    graffiti_timeout = null;
    main_browser.execute("APPS.state.hud.gang_graffiti_show = false;");
  }, 7000);
  lastGraffitiPos = _0x597bde;
});
mp.events.add("Client_GPSToGraffiti", () => {
  if (lastGraffitiPos) {
    SetGPSLocation(lastGraffitiPos.x, lastGraffitiPos.y, lastGraffitiPos.z, true, 0, 4);
  }
});
let auction_timeout = null;
mp.events.add("Client_ShowAuctionNotify", () => {
  if (loggedin) {
    if (auction_timeout) {
      main_browser.execute("APPS.state.hud.auction_notify = false;");
      clearTimeout(auction_timeout);
      auction_timeout = null;
    }
    main_browser.execute("APPS.state.hud.auction_notify = true;");
    PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
    auction_timeout = setTimeout(() => {
      auction_timeout = null;
      main_browser.execute("APPS.state.hud.auction_notify = false;");
    }, 7000);
  }
});
let storage_timeout = null;
mp.events.add("Client_ShowStorageNotify", () => {
  if (loggedin) {
    if (storage_timeout) {
      main_browser.execute("APPS.state.hud.storehouse_auction_notif = false;");
      clearTimeout(storage_timeout);
      storage_timeout = null;
    }
    main_browser.execute("APPS.state.hud.storehouse_auction_notif = true;");
    PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
    storage_timeout = setTimeout(() => {
      storage_timeout = null;
      main_browser.execute("APPS.state.hud.storehouse_auction_notif = false;");
    }, 10000);
  }
});
let draw_timeout = null;
mp.events.add("Client_ShowDrawNotify", () => {
  if (loggedin) {
    if (draw_timeout) {
      main_browser.execute("APPS.state.hud.draw_notify = false;");
      clearTimeout(draw_timeout);
      draw_timeout = null;
    }
    main_browser.execute("APPS.state.hud.draw_notify = true;");
    PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
    draw_timeout = setTimeout(() => {
      draw_timeout = null;
      main_browser.execute("APPS.state.hud.draw_notify = false;");
    }, 20000);
  }
});
let famwar_timeout = null;
mp.events.add("Client_ShowFamWarNotif", _0x4f5c06 => {
  if (famwar_timeout) {
    main_browser.execute("APPS.state.hud.famwar_notif = false;");
    clearTimeout(famwar_timeout);
    famwar_timeout = null;
  }
  main_browser.execute("APPS.state.hud.famwar_name = '" + _0x4f5c06 + "';");
  main_browser.execute("APPS.state.hud.famwar_notif = true;");
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  famwar_timeout = setTimeout(() => {
    famwar_timeout = null;
    main_browser.execute("APPS.state.hud.famwar_notif = false;");
  }, 7000);
});
let fistfight_timeout = null;
mp.events.add("Client_ShowFistFightNotif", () => {
  if (fistfight_timeout) {
    main_browser.execute("APPS.state.hud.fistfight_notif = false;");
    clearTimeout(fistfight_timeout);
    fistfight_timeout = null;
  }
  main_browser.execute("APPS.state.hud.fistfight_notif = true;");
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  fistfight_timeout = setTimeout(() => {
    fistfight_timeout = null;
    main_browser.execute("APPS.state.hud.fistfight_notif = false;");
  }, 7000);
});
let carnotif_timeout = null;
mp.events.add("Client_ShowCarNotification", () => {
  if (carnotif_timeout) {
    main_browser.execute("APPS.state.hud.car_notif_show = false;");
    clearTimeout(carnotif_timeout);
    carnotif_timeout = null;
  }
  main_browser.execute("APPS.state.hud.car_notif_show = true;");
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  carnotif_timeout = setTimeout(() => {
    carnotif_timeout = null;
    main_browser.execute("APPS.state.hud.car_notif_show = false;");
  }, 10000);
});
let driftnotif_timeout = null;
mp.events.add("Client_ShowDriftNotification", () => {
  if (driftnotif_timeout) {
    main_browser.execute("APPS.state.hud.drift_notif_show = false;");
    clearTimeout(driftnotif_timeout);
    driftnotif_timeout = null;
  }
  main_browser.execute("APPS.state.hud.drift_notif_show = true;");
  main_browser.execute("APPS.state.hud.button_drift = '" + GetKeyCode(mp.storage.data.bind_controls.drift) + "';");
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
  driftnotif_timeout = setTimeout(() => {
    driftnotif_timeout = null;
    main_browser.execute("APPS.state.hud.drift_notif_show = false;");
  }, 10000);
});
let referal_timeout = null;
mp.events.add("Client_ReferalShow", (_0x277834, _0x3e86af) => {
  if (referal_timeout) {
    main_browser.execute("APPS.state.hud.ref_payment = false;");
    clearTimeout(referal_timeout);
    referal_timeout = null;
  }
  main_browser.execute("APPS.state.hud.ref_donate = " + _0x3e86af + ";");
  main_browser.execute("APPS.state.hud.ref_name = '" + _0x277834 + "';");
  main_browser.execute("APPS.state.hud.ref_payment = true;");
  PlayAudioSound("LOCAL_PLYR_CASH_COUNTER_COMPLETE", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
  referal_timeout = setTimeout(() => {
    referal_timeout = null;
    main_browser.execute("APPS.state.hud.ref_payment = false;");
  }, 10000);
});
let fire_timeout = null;
function escapeForExecute(_0x41ddbb) {
  return String(_0x41ddbb).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
mp.events.add("Client_FireShow", _0x92d6d8 => {
  if (!loggedin || curr_lang == "ru" && mp.storage.data.new_design_show == 1 && playerincapture == 1) {
    return;
  }
  if (fire_timeout) {
    main_browser.execute("APPS.state.hud.fire_show = false;");
    clearTimeout(fire_timeout);
    fire_timeout = null;
  }
  let _0x4b2e93 = "";
  switch (_0x92d6d8) {
    case 0:
      _0x4b2e93 = language.FBI[curr_lang];
      break;
    case 1:
      _0x4b2e93 = language["Ферма №1"][curr_lang];
      break;
    case 2:
      _0x4b2e93 = language["Ферма №2"][curr_lang];
      break;
    case 3:
      _0x4b2e93 = language["Телевышка на Winewood"][curr_lang];
      break;
    case 4:
      _0x4b2e93 = language.Мэрия[curr_lang];
      break;
    case 5:
      _0x4b2e93 = language.Рынок[curr_lang];
      break;
    case 6:
      _0x4b2e93 = language.Автоярмарка[curr_lang];
      break;
    case 7:
      _0x4b2e93 = language.Банк[curr_lang];
      break;
    case 8:
      _0x4b2e93 = language.Казино[curr_lang];
  }
  main_browser.execute("APPS.state.hud.fire_place = '" + _0x4b2e93 + "';");
  main_browser.execute("APPS.state.hud.fire_show = true;");
  PlayAudioSound("Short_Transition_In", "PLAYER_SWITCH_CUSTOM_SOUNDSET");
  fire_timeout = setTimeout(() => {
    fire_timeout = null;
    main_browser.execute("APPS.state.hud.fire_show = false;");
  }, 10000);
});
mp.events.add("Client_ShowRaceNotification", (_0x47e5cd, _0x5295e6 = "", _0x215fe2 = "") => {
  if (!loggedin) {
    return;
  }
  const _0x508350 = escapeForExecute(resolveNotificationMessage(_0x5295e6) ?? String(_0x5295e6 ?? ""));
  const _0x5eb96a = escapeForExecute(resolveNotificationMessage(_0x215fe2) ?? String(_0x215fe2 ?? ""));
  main_browser.execute("APPS.state.hud.race_show = " + _0x47e5cd + ";");
  main_browser.execute("APPS.state.hud.race_text = '" + _0x508350 + "';");
  main_browser.execute("APPS.state.hud.race_text2 = '" + _0x5eb96a + "';");
});
mp.events.add("Client_HideRaceNotification", () => {
  if (loggedin) {
    main_browser.execute("APPS.state.hud.race_show = 0;");
  }
});
global.EasterAnnounceMenuOpened = false;
let eater_announce_type = 0;
mp.events.add("Client_ShowEasterAnnounce", (_0x3eb857, _0xfd4c4b, _0x5d8b1f) => {
  if (GlobalCheck() != 1) {
    if (_0x3eb857 == 0) {
      const _0x565ca2 = "{\"show\":true,\"playedHours\":" + _0xfd4c4b + ",\"daysLeft\":" + _0x5d8b1f + "}";
      main_browser.execute("APPS.state.new_car = " + _0x565ca2);
    } else {
      const _0x25aa28 = "{\"page\":" + _0x3eb857 + ",\"show\":true}";
      main_browser.execute("APPS.state.easter_announce = " + _0x25aa28);
    }
    eater_announce_type = _0x3eb857;
    EasterAnnounceMenuOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.CloseEasterAnnounceMenu = function (_0x27948f = false) {
  if (EasterAnnounceMenuOpened && loggedin && !chatActive) {
    if (eater_announce_type == 0) {
      main_browser.execute("APPS.state.new_car.show = false;");
    } else {
      main_browser.execute("APPS.state.easter_announce.show = false;");
    }
    EasterAnnounceMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x27948f) {
      mp.events.callRemote("Server_CloseEasterAnnounceDesign", eater_announce_type);
    }
  }
};
const effectsIndicators = {};
let effectsIndicatorsInterval = null;
function GetTimeInText(_0x1d21e1) {
  let _0x1ca877 = Math.floor(_0x1d21e1 / 60);
  let _0x43c25a = _0x1d21e1 - _0x1ca877 * 60;
  if (_0x1ca877 > 60) {
    let _0x400c7a = Math.floor(_0x1ca877 / 60);
    _0x1ca877 -= _0x400c7a * 60;
    if (_0x400c7a < 10) {
      _0x400c7a = "0" + _0x400c7a;
    }
    if (_0x1ca877 < 10) {
      _0x1ca877 = "0" + _0x1ca877;
    }
    return _0x400c7a + ":" + _0x1ca877;
  }
  if (_0x1ca877 < 10) {
    _0x1ca877 = "0" + _0x1ca877;
  }
  if (_0x43c25a < 10) {
    _0x43c25a = "0" + _0x43c25a;
  }
  return _0x1ca877 + ":" + _0x43c25a;
}
global.startEffectIndicator = function (_0x226017, _0x4dcda5, _0x5949f1 = 0) {
  if (effectsIndicators[_0x226017]) {
    stopEffectIndicator(_0x226017);
  }
  effectsIndicators[_0x226017] = {
    fullTime: ["earplugs", "strength_booster"].includes(_0x226017) ? 86400 : _0x4dcda5,
    effectPercents: _0x5949f1,
    timeLeft: _0x4dcda5
  };
  if (effectsIndicatorsInterval === null) {
    effectsIndicatorsInterval = setInterval(() => {
      for (const _0x3dfc5b in effectsIndicators) {
        const _0x113106 = effectsIndicators[_0x3dfc5b];
        if (_0x113106.timeLeft <= 0) {
          return stopEffectIndicator(_0x3dfc5b);
        }
        _0x113106.timeLeft--;
        _0x113106.time = GetTimeInText(_0x113106.timeLeft);
        _0x113106.timePercents = parseInt(Math.floor(_0x113106.timeLeft / _0x113106.fullTime * 100));
      }
      main_browser.execute("APPS.state.hud.effects_indicators = " + JSON.stringify(effectsIndicators) + ";");
    }, 1000);
  }
};
global.stopEffectIndicator = function (_0x15c874) {
  if (effectsIndicators[_0x15c874]) {
    delete effectsIndicators[_0x15c874];
    if (effectsIndicatorsInterval !== null && Object.keys(effectsIndicators).length === 0) {
      clearInterval(effectsIndicatorsInterval);
      effectsIndicatorsInterval = null;
    }
    main_browser.execute("APPS.state.hud.effects_indicators = " + JSON.stringify(effectsIndicators) + ";");
  }
};
mp.events.add("Client_StartEffectIndicator", startEffectIndicator);
mp.events.add("Client_StopEffectIndicator", _0x5af76d => {
  if (Array.isArray(_0x5af76d)) {
    for (const _0x5ac488 of _0x5af76d) {
      stopEffectIndicator(_0x5ac488);
    }
  } else {
    stopEffectIndicator(_0x5af76d);
  }
});
mp.events.add("Client_SetActiveBodyCam", _0x552406 => {
  main_browser.execute("APPS.state.hud.hud_bodycam = " + _0x552406 + ";");
});
mp.events.add("Client_HudSetGoogleSecretCount", _0x4b6546 => {
  main_browser.execute("APPS.state.hud.google_secret_count = " + _0x4b6546 + ";");
});
mp.events.add("Client_SetEmailVerified", _0x1a6742 => {
  main_browser.execute("APPS.state.hud.email_verified = " + _0x1a6742 + ";");
});
const __staticNotificationCallbacks = new Map();
global.ShowStaticNotification = function ({
  type: _0xa97808,
  title: _0x1590c2,
  text: _0x788c4a,
  hasClose: _0x26d3e4 = true,
  timeToEnd: _0x8e404c = 0,
  items: _0x456470 = [],
  buttons: _0x5183e8 = []
}) {
  if (inLobby) {
    return;
  }
  _0x5183e8.forEach(_0x14e262 => {
    if (typeof _0x14e262.callback == "function") {
      const _0x1da20b = _0x14e262.callback;
      const _0x2cec96 = generateUUID();
      __staticNotificationCallbacks.set(_0x2cec96, _0x1da20b);
      _0x14e262.callbackId = _0x2cec96;
    }
  });
  const _0x1502ca = JSON.stringify({
    type: _0xa97808,
    title: _0x1590c2,
    text: _0x788c4a,
    hasClose: _0x26d3e4,
    timeToEnd: _0x8e404c,
    items: _0x456470,
    buttons: _0x5183e8
  });
  main_browser.execute("\n\t\tAPPS.state.staticNotifications.data.push(" + _0x1502ca + ");\n\t");
  PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
};
mp.events.add("__Client_StaticNotificationCallback", _0x56108c => {
  const _0x1222ac = __staticNotificationCallbacks.get(_0x56108c);
  if (_0x1222ac) {
    _0x1222ac();
    __staticNotificationCallbacks.delete(_0x56108c);
  }
});
mp.events.add("__Client_StaticNotificationDeleteCallbacks", _0x594f3b => {
  JSON.parse(_0x594f3b).forEach(_0x309e4b => {
    __staticNotificationCallbacks.delete(_0x309e4b);
  });
});
mp.events.add("changeCursorState", _0x247989 => {
  if (GlobalCheck() != 1 && !(story_quest_progress > 0)) {
    mp.gui.cursor.show(_0x247989, _0x247989);
  }
});
let hints_flickering_blacklist = [];
if (mp.storage.data.hints_flickering_blacklist) {
  hints_flickering_blacklist = JSON.parse(mp.storage.data.hints_flickering_blacklist);
}
mp.events.add("Client_AddHintToFlickeringBlacklist", _0x49fb54 => {
  if (!hints_flickering_blacklist.includes(_0x49fb54)) {
    hints_flickering_blacklist.push(_0x49fb54);
    mp.storage.data.hints_flickering_blacklist = JSON.stringify(hints_flickering_blacklist);
    mp.storage.flush();
    main_browser.execute("APPS.state.hud.hints_flickering_blacklist = " + JSON.stringify(hints_flickering_blacklist) + ";");
  }
});
mp.events.add("Client_InitHintsFlickeringBlacklist", () => {
  main_browser.execute("APPS.state.hud.hints_flickering_blacklist = " + JSON.stringify(hints_flickering_blacklist) + ";");
});
mp.events.add("playerCommand", _0x396968 => {
  if (is_admin !== true) {
    return;
  }
  if (_0x396968.split(/[ ]+/).splice(0, 1)[0] === "clearKeyhintsBlacklist") {
    hints_flickering_blacklist = [];
    main_browser.execute("APPS.state.hud.hints_flickering_blacklist = " + JSON.stringify(hints_flickering_blacklist) + ";");
    mp.storage.data.hints_flickering_blacklist = JSON.stringify(hints_flickering_blacklist);
    mp.storage.flush();
    mp.gui.chat.push("Hints flickering blacklist cleared");
  }
});
global.last_used_engine_blocker = 0;
global.hudShowRadarKeyHint = function () {
  main_browser.execute("APPS.state.hud.police_incar_radar_show = true;");
  if (global.last_used_engine_blocker && Date.now() / 1000 < global.last_used_engine_blocker) {
    hudStartRadarCooldown(parseInt(global.last_used_engine_blocker - Date.now() / 1000));
  }
};
global.hudHideRadarKeyHint = function () {
  main_browser.execute("APPS.state.hud.police_incar_radar_show = false;");
  main_browser.execute("APPS.state.hud.police_incar_radar_cooldown = 0;");
};
global.hudStartRadarCooldown = function (_0x422b9c) {
  main_browser.execute("APPS.state.hud.police_incar_radar_cooldown = " + _0x422b9c + ";");
};
mp.events.add("Client_StartRadarCooldown", hudStartRadarCooldown);
global.hudStopRadarCooldown = function () {
  main_browser.execute("APPS.state.hud.police_incar_radar_cooldown = 0;");
};
global.hudHideLeftHints = function (_0x212130 = 0) {
  main_browser.execute("APPS.state.hud.left_hints_hidden = true;");
  if (_0x212130 > 0) {
    setTimeout(() => {
      hudShowLeftHints();
    }, _0x212130);
  }
};
global.hudShowLeftHints = function () {
  main_browser.execute("APPS.state.hud.left_hints_hidden = false;");
};
mp.events.add("Client_HideLeftHints", hudHideLeftHints);
mp.events.add("Client_ShowLeftHints", hudShowLeftHints);
let isHudInteractionVisible = false;
global.showHudInteraction = (_0x20853d, _0x1a6e80 = "е") => {
  if (_0x20853d && !isHudInteractionVisible) {
    isHudInteractionVisible = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    main_browser.execute("APPS.state.hud.interactKey = \"" + _0x1a6e80 + "\";");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (!_0x20853d && isHudInteractionVisible) {
    isHudInteractionVisible = false;
    main_browser.execute("APPS.state.hud.interact = false;");
    main_browser.execute("APPS.state.hud.interactKey = \"\";");
  }
};