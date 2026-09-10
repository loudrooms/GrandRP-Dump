global.mobileOpen = false;
let radio_status = 0;
let lastCheckRadioButton = 0;
mp.events.add("ClientOpenMobile", (_0x407507, _0x4aba4b, _0x272ce8, _0x59095a, _0x4ba8dd, _0x4b84c1, _0x157d1e, _0x50e78f, _0xedfd1f, _0x179f17, _0x248a66, _0x55bc75, _0x44eff9, _0x3e50c5, _0x55d98d, _0xb792ac, _0x204e48, _0x5f237a, _0x25fab8, _0x87e78b, _0x2c7a65, _0xd8780, _0x366b9f, _0x49d337 = 0) => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (duel_cant_do_damage == 1) {
    return;
  }
  mobileOpen = true;
  mp.gui.cursor.show(false, true);
  if (_0x272ce8 <= 9) {
    _0x272ce8 = "0" + _0x272ce8;
  }
  if (_0x4aba4b <= 9) {
    _0x4aba4b = "0" + _0x4aba4b;
  }
  const _0x3ac0ef = _0x4aba4b + ":" + _0x272ce8;
  let _0x5082d8 = [];
  let _0x5f18cb = "system/main";
  let _0x1b2d7c = 0;
  if (_0x55d98d && _0xb792ac == 1) {
    _0x1b2d7c = _0x55d98d;
    _0x5f18cb = "system/messages";
  } else if (_0x55d98d && _0xb792ac == 2) {
    _0x1b2d7c = _0x55d98d;
    _0x5f18cb = "system/main";
  }
  if (_0x248a66 == 1) {
    _0x5f18cb = "system/call";
    let _0x7eb9ae = null;
    mp.storage.data.contacts.forEach(function (_0x42ccd0, _0x22d8b5) {
      if (_0x42ccd0.phone == local_phone) {
        _0x7eb9ae = _0x42ccd0.name;
      }
    });
    _0x7eb9ae ||= local_phone;
    let _0x27ee07 = 3;
    if (in_talk == 1) {
      _0x27ee07 = 1;
    } else if (start_calling == 1) {
      _0x27ee07 = 4;
    }
    const _0x499fff = "{\"name\": \"" + _0x7eb9ae + "\",\"status\": " + _0x27ee07 + "}";
    _0x5082d8.push(_0x499fff);
  }
  const _0x1cce4e = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"pageMobile\": '" + _0x5f18cb + "',\"onlinebanking\":" + _0x4ba8dd + ",\"time\":'" + _0x3ac0ef + "',\"timeCall\":'',\"phonenumber\":" + _0x59095a + ",\"player_pid\":" + _0x50e78f + ",\"bankmoney\":" + _0x4b84c1 + ",\"level\":" + _0x157d1e + ",\"demorgantime\":" + _0x179f17 + ",\"jailtime\":" + _0xedfd1f + ",\"contacts\":" + JSON.stringify(mp.storage.data.contacts) + ",\"lastcalls\":" + JSON.stringify(mp.storage.data.lastcalls) + ",\"blacklist\":" + JSON.stringify(mp.storage.data.blacklist) + ",\"services\":[{\"name\":\"" + language["Вызов скорой помощи"][curr_lang] + "\"},{\"name\":\"" + language["Вызов полиции"][curr_lang] + "\"}],\"sms\":" + JSON.stringify(mp.storage.data.sms) + ",\"localsms\":[],\"localsmsMessages\":[],\"localcall\":[" + _0x5082d8 + "],\"localtimer\":null,\"in_call\":" + _0x248a66 + ",\"events\":" + _0x55bc75 + ",\"full_bank\":" + _0x44eff9 + ",\"enter_price\":" + _0x3e50c5 + ",\"need_to_open_number\":" + _0x1b2d7c + ",\"ingrand_need_to_show\":0,\"event_pool\":" + JSON.stringify(_0x204e48) + ",\"OnlinePeople\":[" + _0x407507 + "],\"taxiStatus\":" + _0x25fab8 + ",\"taxi_name\":'" + _0x87e78b + "',\"taxi_surname\":'" + _0x2c7a65 + "',\"promo_used\":" + _0x5f237a + ",\"taxinumber\":'" + _0xd8780 + "',\"sound\":" + mp.storage.data.mobile_sound + ",\"background\":" + mp.storage.data.mobile_background + ",\"bought_background\":[" + _0x366b9f + "],\"disturb_mode\":" + mp.storage.data.mobile_disturb + (",\"top_posts\":[],\"all_posts\":[],\"ingrand_need_to_line\":0,\"crypto_need_to_show\":0,\"crypto_balance\":0,\"crypto_fond\":0,\"crypto_rate\":0,treasure_hours:0,\"treasure_id\":0,\"treasure_percents\":0,\"treasure_need_to_show\":0,\"is_super_treasure\":0,\"simcards_need_to_show\":0,\"simcards_pool\":[],ingrand_prize_received:false,\"ingrand_prize_can_receive\":false,\"vip\":" + (player_vip > 0 ? 1 : 0) + ",\"viplevel\":" + (player_viplevel || 0) + ",\"show\":true}");
  main_browser.execute("APPS.state.hud_mobile = " + _0x1cce4e);
  mp.events.callRemote("ServerLoadMobileAnim");
});
mp.events.add("Client_SendMessageInfoBusiness", (_0x3bd437, _0x30025c, _0x3c54b8, _0x2d017f, _0x1ddf4, _0x58da4d, _0x1e2ab8) => {
  mp.gui.chat.push("");
  mp.gui.chat.push("");
  mp.gui.chat.push("");
  mp.gui.chat.push("");
  mp.gui.chat.push("Бизнес: " + _0x30025c + " (ID: " + (_0x3bd437 + 1) + ")");
  mp.gui.chat.push("Стоиомсть товара: " + _0x1ddf4 + ". Ушло на счет бизнеса: " + _0x3c54b8 + " ");
  mp.gui.chat.push("Списало продуктов: " + _0x2d017f + " ");
  mp.gui.chat.push("Ушло семьям: " + _0x58da4d + ". Ушло мафиям: " + _0x1e2ab8);
});
global.OpenMobile = function (_0x2e77c8 = 0, _0x98ac7f = 0) {
  if (GlobalCheck() != 1) {
    mp.events.callRemote("ServerOpenMobile", _0x2e77c8, _0x98ac7f);
  }
};
global.CloseMobile = function (_0x77cf97 = true) {
  if (mobileOpen && loggedin) {
    main_browser.execute("APPS.state.hud_mobile.show = false;");
    mobileOpen = false;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (hudswitch == 0) {
      ChangeHudState(true);
    }
    if (_0x77cf97) {
      mp.events.callRemote("ServerCloseMobile");
    }
    StopCustomSound("mobile_call");
  }
};
mp.events.add("Client_CloseMobile", () => {
  CloseMobile();
});
mp.events.add("Client_ReloadBanking", () => {
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.onlinebanking = 1;");
  }
});
mp.events.add("Client_GetToReferalPage", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseMobile();
    mp.events.callRemote("Server_OpenReferalMenu");
  }
});
mp.events.add("Client_SetMobileBackground", _0x2dba37 => {
  mp.storage.data.mobile_background = _0x2dba37;
  mp.storage.flush();
  main_browser.execute("APPS.state.hud_mobile.background = " + _0x2dba37 + ";");
});
mp.events.add("Client_MobileDisturbMode", _0x5a4af0 => {
  mp.storage.data.mobile_disturb = _0x5a4af0;
  mp.storage.flush();
});
mp.events.add("Client_UpdateMobileBackgrounds", _0x210455 => {
  main_browser.execute("APPS.state.hud_mobile.bought_background = [" + _0x210455 + "];");
});
mp.events.add("Client_BuyMobileBackground", _0x5441fd => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyMobileBackground", _0x5441fd);
  }
});
mp.events.add("UnlockOnlineBanking", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerUnlockBanking");
  }
});
mp.events.add("Mobile_Banking", (_0x272cd7, _0x5e0c0b = 0) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (mobileOpen) {
      return mp.events.callRemote("ServerMobileBanking", _0x272cd7, _0x5e0c0b);
    } else {
      return undefined;
    }
  }
});
mp.events.add("Client_TransferGrandCoins", () => {
  if (mobileOpen) {
    mp.events.callRemote("Server_TransferGrandCoins");
  }
});
mp.events.add("ReloadMobileBalance", _0x28746b => {
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.bankmoney = " + _0x28746b + ";");
  }
});
mp.events.add("Mobile_Error", _0x24aad3 => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x24aad3 + "');");
});
mp.events.add("Mobile_SendGPSLocation", _0x42ab8c => {
  if (mobileOpen && loggedin && !chatActive && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    if (mp.storage.data.mobile_disturb != 0) {
      return mp.game.ui.notifications.show(language["У Вас включен режим не беспокоить"][curr_lang], false, 0, 6);
    }
    mp.events.callRemote("ServerSendSMS", "", _0x42ab8c, true);
  }
});
mp.events.add("StartCalling", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_StartCalling");
  }
});
let start_calling = false;
mp.events.add("Mobile_Call", _0xf0a6e5 => {
  local_phone = _0xf0a6e5;
  start_calling = true;
  mp.events.callRemote("ServerMobileCall", _0xf0a6e5);
});
mp.events.add("Mobile_CallFail", _0x1d3016 => {
  main_browser.execute("APPS.state.hud_mobile.localcall[0].status = " + _0x1d3016 + ";");
  if (_0x1d3016 == 2) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Абонент вне зоны действия сети"][curr_lang] + "');");
  }
});
mp.events.add("Mobile_RepairCallAfterError", () => {
  start_calling = false;
  local_phone = null;
  main_browser.execute("APPS.state.hud_mobile.in_call = false;");
  main_browser.execute("APPS.state.hud_mobile.localcall = [];");
});
mp.events.add("Mobile_AnswerCall", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerAnswerCall");
  }
});
mp.events.add("Mobile_CancelCall", () => {
  StopCustomSound("mobile_call");
  main_browser.execute("APPS.state.hud_mobile.in_call = false;");
  main_browser.execute("APPS.state.hud_mobile.localcall = [];");
  if (talktimer != null) {
    clearInterval(talktimer);
    talktimer = null;
  }
  intalk = 0;
  in_talk = false;
  local_phone = null;
  start_calling = false;
  mp.events.callRemote("ServerCancelCall");
});
mp.events.add("Mobile_CallCancel", (_0x129217 = true) => {
  StopCustomSound("mobile_call");
  if (talktimer != null) {
    clearInterval(talktimer);
    talktimer = null;
  }
  intalk = 0;
  in_talk = false;
  local_phone = null;
  start_calling = false;
  main_browser.execute("APPS.state.hud_mobile.in_call = false;");
  main_browser.execute("APPS.state.hud_mobile.localcall = [];");
  main_browser.execute("APPS.state.hud_mobile.topLineDark = true;");
});
let local_phone;
let talktimer = null;
let intalk = 0;
mp.events.add("Mobile_StartTalk", () => {
  StopCustomSound("mobile_call");
  start_calling = false;
  in_talk = true;
  main_browser.execute("APPS.state.hud_mobile.localcall[0].status = 1;");
  main_browser.execute("APPS.state.hud_mobile.timeCall = '00:00';");
  if (talktimer == null) {
    intalk = 0;
    talktimer = setInterval(function () {
      intalk++;
      let _0x298dc2 = Math.floor(intalk / 60);
      let _0xfcd18d = intalk - _0x298dc2 * 60;
      if (_0x298dc2 <= 9) {
        _0x298dc2 = "0" + _0x298dc2;
      }
      if (_0xfcd18d <= 9) {
        _0xfcd18d = "0" + _0xfcd18d;
      }
      const _0x57b177 = _0x298dc2 + ":" + _0xfcd18d;
      main_browser.execute("APPS.state.hud_mobile.timeCall = '" + _0x57b177 + "';");
    }, 1000);
  }
});
global.in_talk = false;
mp.events.add("Mobile_CallCorrect", (_0xfa7772, _0x1abf7a) => {
  mp.storage.data.lastcalls ||= [];
  let _0x42d45b = "{\"phone\":" + _0xfa7772 + "}";
  mp.storage.data.lastcalls.push(JSON.parse(_0x42d45b));
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.lastcalls = " + JSON.stringify(mp.storage.data.lastcalls));
  }
  if (_0x1abf7a == 1) {
    let _0x4a8e7f = null;
    mp.storage.data.contacts.forEach(function (_0x5df8bb, _0x3d6af4) {
      if (_0x5df8bb.phone == _0xfa7772) {
        _0x4a8e7f = _0x5df8bb.name;
      }
    });
    _0x4a8e7f ||= _0xfa7772;
    const _0x34d775 = "{\"name\": \"" + _0x4a8e7f + "\",\"status\": 3}";
    local_phone = _0xfa7772;
    main_browser.execute("APPS.state.hud_mobile.localcall.push(" + _0x34d775 + ");");
    main_browser.execute("APPS.state.hud_mobile.in_call = true;");
    StartCustomSound("mobile_call", "sounds/mobile_call/" + mp.storage.data.mobile_sound + ".ogg", 0.5);
  } else {
    main_browser.execute("APPS.state.hud_mobile.localcall[0].status = 4;");
  }
});
mp.events.add("Client_ChangeRingSound", _0x29e003 => {
  if (!((_0x29e003 = parseInt(_0x29e003)) < 1) && !(_0x29e003 > 10)) {
    mp.storage.data.mobile_sound = _0x29e003;
    mp.storage.flush();
    main_browser.execute("APPS.state.hud_mobile.sound = " + _0x29e003 + ";");
    StopCustomSound("mobile_call");
    StartCustomSound("mobile_call", "sounds/mobile_call/" + mp.storage.data.mobile_sound + ".ogg", 0.5);
  }
});
mp.events.add("Client_CancelSoundCall", () => {
  StopCustomSound("mobile_call");
});
mp.events.add("Mobile_SendSMS", (_0x4a2f39, _0x55bd63) => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    if (mp.storage.data.mobile_disturb != 0) {
      return mp.game.ui.notifications.show(language["У Вас включен режим не беспокоить"][curr_lang], false, 0, 6);
    }
    mp.events.callRemote("ServerSendSMS", _0x4a2f39, _0x55bd63);
  }
});
mp.events.add("Mobile_NewMessage", (_0x46fee8, _0x4811d8, _0x171413, _0x5b4c99, _0x2e5038 = false) => {
  if (_0x2e5038 == 1) {
    _0x46fee8 = [_0x46fee8.x, _0x46fee8.y, _0x46fee8.z];
  }
  mp.storage.data.sms.push({
    phone: _0x4811d8,
    messages: _0x46fee8,
    date: _0x171413,
    type: _0x5b4c99,
    gps: _0x2e5038,
    unread: _0x5b4c99
  });
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.sms = " + JSON.stringify(mp.storage.data.sms));
  }
});
mp.events.add("Client_MarkMessagesAsRead", _0x2de94a => {
  for (let _0x19d6e7 = 0; _0x19d6e7 < mp.storage.data.sms.length; _0x19d6e7++) {
    if (mp.storage.data.sms[_0x19d6e7].phone == _0x2de94a) {
      mp.storage.data.sms[_0x19d6e7].unread = false;
    }
  }
  mp.storage.flush();
});
mp.events.add("Client_DeleteLastCalls", () => {
  mp.storage.data.lastcalls = [];
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.lastcalls = " + JSON.stringify(mp.storage.data.lastcalls));
  }
});
mp.events.add("Mobile_DeleteDialog", _0x588129 => {
  for (let _0x192974 = 0; _0x192974 < mp.storage.data.sms.length; _0x192974++) {
    if (mp.storage.data.sms[_0x192974].phone == _0x588129) {
      mp.storage.data.sms.splice(_0x192974, 1);
      for (let _0x55543d = mp.storage.data.sms.length - 1; _0x55543d >= 0; _0x55543d--) {
        if (mp.storage.data.sms[_0x55543d].phone == _0x588129) {
          mp.storage.data.sms.splice(_0x55543d, 1);
        }
      }
    }
  }
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.sms = " + JSON.stringify(mp.storage.data.sms));
  }
});
mp.events.add("Client_GiveMyNumber", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GiveMyNumber");
  }
});
mp.events.add("Mobile_DeleteAllDialogs", () => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_MobileDeleteAllDialogs");
  }
});
mp.events.add("Client_DeleteAllMyMessages", () => {
  mp.storage.data.sms = [];
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.sms = " + JSON.stringify(mp.storage.data.sms));
  }
});
mp.events.add("Mobile_DeleteBlackList", _0x33ceb2 => {
  let _0x4183df = -1;
  mp.storage.data.blacklist.forEach(function (_0x3edcd0, _0x51ad8c) {
    if (_0x3edcd0.phone == _0x33ceb2) {
      _0x4183df = _0x51ad8c;
    }
  });
  if (_0x4183df != -1) {
    mp.storage.data.blacklist.splice(_0x4183df, 1);
    mp.storage.flush();
  }
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.blacklist = " + JSON.stringify(mp.storage.data.blacklist));
  }
});
mp.events.add("Mobile_AddBlackList", _0x487b18 => {
  let _0x4afe92 = false;
  mp.storage.data.blacklist.forEach(_0x2d0e76 => {
    if (_0x2d0e76.phone == _0x487b18) {
      _0x4afe92 = true;
    }
  });
  if (_0x4afe92 == 1) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Данный номер уже есть в черном списке"][curr_lang] + "');");
    return;
  }
  let _0x228e3d = "{\"phone\":" + _0x487b18 + "}";
  mp.storage.data.blacklist.push(JSON.parse(_0x228e3d));
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.blacklist = " + JSON.stringify(mp.storage.data.blacklist));
  }
});
mp.events.add("Client_GetBlockedNumber", (_0x57d16a, _0x4e0e05, _0x3303c6, _0x566346) => {
  if (_0x57d16a && mp.players.exists(_0x57d16a)) {
    if (mp.storage.data.mobile_disturb != 0) {
      return mp.events.callRemote("Server_InfoDisturbMode", _0x57d16a);
    }
    if (mp.storage.data.blacklist && mp.storage.data.blacklist.length > 0) {
      for (let _0x5df956 = 0; _0x5df956 < mp.storage.data.blacklist.length; _0x5df956++) {
        if (mp.storage.data.blacklist[_0x5df956].phone == _0x3303c6) {
          return mp.events.callRemote("Server_BlockedNumberAnswer", 1, _0x57d16a, _0x4e0e05);
        }
      }
    }
    mp.events.callRemote("Server_BlockedNumberAnswer", 2, _0x57d16a, _0x4e0e05, _0x566346);
  }
});
mp.events.add("Client_GetBlockedNumberCalling", (_0xbc4a97, _0x577e1f) => {
  const _0x1a003b = typeof _0xbc4a97 == "number" ? _0xbc4a97 : _0x577e1f;
  if (_0x1a003b != null) {
    if (mp.storage.data.mobile_disturb != 0) {
      return mp.events.callRemote("Server_InfoDisturbMode");
    }
    if (mp.storage.data.blacklist && mp.storage.data.blacklist.length > 0) {
      for (let _0x232861 = 0; _0x232861 < mp.storage.data.blacklist.length; _0x232861++) {
        if (mp.storage.data.blacklist[_0x232861].phone == _0x1a003b) {
          return mp.events.callRemote("Server_BlockedNumberAnswerCalling", 1);
        }
      }
    }
    mp.events.callRemote("Server_BlockedNumberAnswerCalling", 2);
  }
});
mp.events.add("Client_DeleteContactSuccess", _0x86f832 => {
  let _0x27d8cc = -1;
  mp.storage.data.contacts.forEach(function (_0x49390a, _0x25d6c6) {
    if (_0x49390a.phone == _0x86f832) {
      _0x27d8cc = _0x25d6c6;
    }
  });
  if (_0x27d8cc != -1) {
    mp.storage.data.contacts.splice(_0x27d8cc, 1);
    mp.storage.flush();
  }
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.contacts = " + JSON.stringify(mp.storage.data.contacts));
  }
});
mp.events.add("Mobile_DeleteContact", _0x559745 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteContactNumber", _0x559745);
  }
});
mp.events.add("Mobile_AddContact", (_0x4f8081, _0x16bdab, _0x1d9260) => {
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  let _0x170449 = false;
  mp.storage.data.contacts.forEach(_0x1e87f9 => {
    if (_0x1e87f9.phone == _0x4f8081) {
      _0x170449 = true;
    }
  });
  if (_0x170449 == 1) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Данный номер уже есть в контактах"][curr_lang] + "');");
    return;
  }
  const _0x2a3a73 = {
    name: _0x16bdab,
    phone: _0x4f8081,
    fav: _0x1d9260
  };
  mp.storage.data.contacts.push(_0x2a3a73);
  mp.storage.flush();
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.contacts = " + JSON.stringify(mp.storage.data.contacts));
  }
});
mp.events.add("Mobile_ChangeFavState", (_0x5dbfeb, _0x3f6038) => {
  for (let _0x24318c = 0; _0x24318c < mp.storage.data.contacts.length; _0x24318c++) {
    if (mp.storage.data.contacts[_0x24318c].phone == _0x5dbfeb) {
      mp.storage.data.contacts[_0x24318c].fav = _0x3f6038;
      mp.storage.flush();
      if (mobileOpen) {
        main_browser.execute("APPS.state.hud_mobile.contacts = " + JSON.stringify(mp.storage.data.contacts));
      }
    }
  }
});
if (mp.storage.data.sms == null) {
  mp.storage.data.sms = [];
  mp.storage.flush();
}
if (mp.storage.data.lastcalls == null) {
  mp.storage.data.lastcalls = [];
  mp.storage.flush();
}
if (mp.storage.data.contacts == null) {
  mp.storage.data.contacts = [];
  mp.storage.flush();
}
if (mp.storage.data.blacklist == null) {
  mp.storage.data.blacklist = [];
  mp.storage.flush();
}
let GPS_coords = [[[-539.822, -212.915, 37.65], [-713.276, -1395.415, 4.995], [298.945, -584.443, 43.261], [903.053, 58.424, 79.056], [-1343.697, -1444.671, 4.332], [-915.554, -2038.505, 9.405], [-1380.7, -971.47, 8.898], [130.028, 88.831, 82.074], [-71.781, 6479.521, 31.456], [1852.198, 2609.191, 45.672], [449.226, -1146.214, 29.336], [1571.107, -1689.686, 88.219], [478.397, -3366.855, 6.07], [-2337.632, 3431.009, 29.757], [-109.617, -607.521, 36.28], [-240.051, -2039.904, 27.755]], [[-569.535, 5251.263, 70.487], [713.149, 146.281, 80.754], [2030.342, 4971.659, 41.166], [406.587, 6488.938, 28.481], [910.191, -178.504, 74.244], [-52.577, -1831.155, 26.579], [-1446.227, -680.639, 26.429], [425.52, -652.29, 28.496], [-1183.776, -872.44, 13.912], [-99.377, -2520.262, 6], [0, 0, 0], [0, 0, 0], [1199.938, -1461.412, 34.801], [576.788, 2735.097, 42.029], [120.239, 99.312, 81.097], [-203.152, -1381.419, 31.258], [1515.604, -2137.307, 76.728]], [[-541.76, -211.232, 37.649], [298.945, -584.443, 43.261], [-2333.059, 3409.499, 30.161], [2523.354, -412.416, 94.12], [413.345, -979.308, 29.439], [-436.168, 6022.631, 31.49], [-1079.953, -263.383, 37.792], [113.27713775634766, -1945.0750732421875, 20.710037231445312], [-176.544, -1668.403, 33.218], [-1084.665, -1649.989, 4.398], [430.368896484375, -1559.1546630859375, 32.79224395751953], [790.847, -2124.28, 29.348]], [[-70.79, 59.895, 71.924], [1756.44, 3289.712, 41.124], [3800.364, 4456.95, 4.765], [-363.636, -133.289, 38.681], [715.605, -1088.442, 22.365], [497.114, -1312.059, 29.248], [-1142.634, -1987.229, 13.163], [116.919, 6618.184, 31.784], [1178.055, 2651.865, 37.81]]];
const quest_locations = [[719.748, 150.087, 80.754], [130.381, 95.989, 83.506], [-701.713, -1403.421, 5.15], [-1226.371, -902.743, 11.422], [1093.499, -2252.929, 31.234], [439.925, -1308.266, 30.667], [-1294.494, 273.805, 64.391], [-1314.716, -1410.827, 4.313], [-1849.951, -1249.676, 7.621]];
mp.events.add("Client_SetQuestLocation", (_0x377dd0, _0x59cc98 = 10, _0x5025c2 = false) => {
  if (!!_0x377dd0 && !(_0x377dd0 < 1) && !(_0x377dd0 > quest_locations.length)) {
    if (NewbieMapOpened == 1) {
      CloseNewbieMap();
      mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
    } else if (_0x5025c2) {
      mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
    }
    SetGPSLocation(quest_locations[_0x377dd0 - 1][0], quest_locations[_0x377dd0 - 1][1], quest_locations[_0x377dd0 - 1][2], false, localplayer.dimension, _0x59cc98);
  }
});
global.gpsblip = undefined;
global.gpscolshape = undefined;
mp.events.add("Mobile_GPS", (_0x4f85d2, _0x102b73) => {
  if (_0x4f85d2 == 0 && _0x102b73 == 12) {
    if (!gpsblip && !houses_blips.length) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["У Вас выключен навигатор"][curr_lang] + "');");
      return;
    }
    if (gpsblip) {
      gpsblip.destroy();
      gpsblip = undefined;
    }
    if (gpscolshape) {
      gpscolshape.destroy();
      gpscolshape = undefined;
    }
    if (parked_marker) {
      parked_marker.destroy();
      parked_marker = undefined;
    }
    for (let _0x309584 = 0; _0x309584 < houses_blips.length; _0x309584++) {
      if (houses_blips[_0x309584]) {
        houses_blips[_0x309584].destroy();
        houses_blips[_0x309584] = undefined;
      }
      if (houses_colshapes[_0x309584]) {
        houses_colshapes[_0x309584].destroy();
        houses_colshapes[_0x309584] = undefined;
      }
    }
    houses_blips = [];
    houses_colshapes = [];
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    return;
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 5) {
    return mp.events.callRemote("GetPropertyLocate", 1);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 6) {
    return mp.events.callRemote("GetPropertyLocate", 2);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 7) {
    return mp.events.callRemote("GetPropertyLocate", 3);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 8) {
    return mp.events.callRemote("GetPropertyLocate", 4);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 9) {
    return mp.events.callRemote("GetPropertyLocate", 5);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 10) {
    return mp.events.callRemote("GetPropertyLocate", 6);
  }
  if (_0x4f85d2 == 0 && _0x102b73 == 11) {
    return mp.events.callRemote("GetPropertyLocate", 8);
  }
  if (_0x4f85d2 == 1 && _0x102b73 == 16) {
    return mp.events.callRemote("GetPropertyLocate", 7);
  }
  if (_0x4f85d2 == 5) {
    return mp.events.callRemote("GetClosestPlace", _0x102b73);
  }
  let _0x217e86;
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  if (_0x4f85d2 == 1 && _0x102b73 == 10) {
    ClosePenaltyStation();
  }
  if (_0x4f85d2 == 2 && _0x102b73 == 10) {
    let _0x30aafa = global.getRandomInt(0, mining_poses.length);
    _0x217e86 = mining_poses[_0x30aafa];
  } else {
    _0x217e86 = _0x4f85d2 == 6 ? oil_position[_0x102b73] : GPS_coords[_0x4f85d2 - 1][_0x102b73];
  }
  gpsblip = mp.blips.new(1, _0x217e86, {
    name: language["Место направления"][curr_lang],
    shortRange: false,
    color: 83
  });
  gpsblip.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newCircle(_0x217e86[0], _0x217e86[1], 10, 0);
});
mp.events.add("Client_SetGPSFromGiveMoney", _0x3b26f4 => {
  if (!loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x40483d = [[-1585.712, -551.719, 35.072], [918.457, 50.592, 80.899], [521.107, -606.663, 24.73], [2557.095, 4389.524, 39.261], [2428.474, 4762.529, 34.324], [-108.622, -608.021, 36.267]];
  SetGPSLocation(_0x40483d[_0x3b26f4 - 1][0], _0x40483d[_0x3b26f4 - 1][1], _0x40483d[_0x3b26f4 - 1][2]);
});
mp.events.add("Client_FoundryRoute", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      SetGPSLocation(1092.905, -1995.464, 29.541);
    }
  }
});
mp.events.add("Client_RouteToGrapePlant", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      SetGPSLocation(-1834.096, 2156.037, 115.488);
    }
  }
});
mp.events.add("Client_HalloweenHouseRoute", () => {
  if (is_halloween && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseHalloweenRole();
      CloseHalloweenMenu();
      SetGPSLocation(-1692.953, -216.729, 57.54);
    }
  }
});
global.SetGPSLocation = function (_0x5933a1, _0x25ff6a, _0x3ade06, _0x1ad4a8 = true, _0x2764a1 = 0, _0x4f7f48 = 10, _0x4b2123 = "circle") {
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  gpsblip = mp.blips.new(1, new mp.Vector3(_0x5933a1, _0x25ff6a, _0x3ade06), {
    name: language["Место направления"][curr_lang],
    color: 83,
    dimension: _0x2764a1
  });
  gpsblip.setRoute(true);
  if (_0x1ad4a8 == 1) {
    mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  }
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  if (_0x4b2123 === "circle") {
    gpscolshape = mp.colshapes.newCircle(_0x5933a1, _0x25ff6a, _0x4f7f48, _0x2764a1);
  } else if (_0x4b2123 === "sphere") {
    gpscolshape = mp.colshapes.newSphere(_0x5933a1, _0x25ff6a, _0x3ade06, _0x4f7f48, _0x2764a1);
  }
};
mp.events.add("Client_ResetGPS", () => {
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
});
let parked_marker;
let houses_blips = [];
let houses_colshapes = [];
mp.events.add("Locate_Houses", (_0x5e203f, _0x271e69 = false, _0x20ff2b = 0) => {
  for (let _0x3cde68 = 0; _0x3cde68 < houses_blips.length; _0x3cde68++) {
    if (houses_blips[_0x3cde68]) {
      houses_blips[_0x3cde68].destroy();
      houses_blips[_0x3cde68] = undefined;
    }
    if (houses_colshapes[_0x3cde68]) {
      houses_colshapes[_0x3cde68].destroy();
      houses_colshapes[_0x3cde68] = undefined;
    }
    if (parked_marker) {
      parked_marker.destroy();
      parked_marker = undefined;
    }
  }
  houses_blips = [];
  houses_colshapes = [];
  for (let _0x1849e8 = 0; _0x1849e8 < _0x5e203f.length; _0x1849e8++) {
    houses_blips[_0x1849e8] = mp.blips.new(1, _0x5e203f[_0x1849e8], {
      name: language["Место направления"][curr_lang],
      color: 83,
      dimension: _0x20ff2b
    });
    houses_blips[_0x1849e8].setRoute(true);
    mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
    if (gpscolshape) {
      gpscolshape.destroy();
      gpscolshape = undefined;
    }
    houses_colshapes[_0x1849e8] = _0x271e69 == 1 ? mp.colshapes.newSphere(_0x5e203f[_0x1849e8].x, _0x5e203f[_0x1849e8].y, _0x5e203f[_0x1849e8].z, 3, _0x20ff2b) : mp.colshapes.newCircle(_0x5e203f[_0x1849e8].x, _0x5e203f[_0x1849e8].y, 10, 0);
  }
  if (_0x271e69 == 1) {
    parked_marker = mp.markers.new(2, new mp.Vector3(_0x5e203f[0].x, _0x5e203f[0].y, _0x5e203f[0].z + 2.5), 2, {
      rotation: new mp.Vector3(180, 0, 0),
      color: [255, 0, 0, 188],
      visible: true,
      dimension: _0x20ff2b
    });
  }
});
mp.events.add("Mobile_SetClosestPlace", (_0x3f51a6, _0x302a61, _0x3de45f, _0x4ac2d1 = 10, _0x240bf3 = 0) => {
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  gpsblip = mp.blips.new(1, new mp.Vector3(_0x3f51a6, _0x302a61, _0x3de45f), {
    name: language["Место направления"][curr_lang],
    color: 83,
    dimension: _0x240bf3
  });
  gpsblip.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newCircle(_0x3f51a6, _0x302a61, _0x4ac2d1, _0x240bf3);
  CloseEventMenu();
});
mp.events.add("playerEnterColshape", _0x69d2ad => {
  if (_0x69d2ad == gpscolshape) {
    if (gpsblip) {
      gpsblip.destroy();
      gpsblip = undefined;
    }
    if (gpscolshape) {
      gpscolshape.destroy();
      gpscolshape = undefined;
    }
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.game.ui.notifications.show(language["Bы дocтигли тoчки нaзнaчeния"][curr_lang], false, 0, 2);
    return;
  }
  if (houses_colshapes.length && houses_colshapes && mp.colshapes.exists(_0x69d2ad) && _0x69d2ad.id >= houses_colshapes[0].id && _0x69d2ad.id <= houses_colshapes[houses_colshapes.length - 1].id) {
    for (let _0x1eca56 = 0; _0x1eca56 < houses_blips.length; _0x1eca56++) {
      if (houses_blips[_0x1eca56]) {
        houses_blips[_0x1eca56].destroy();
        houses_blips[_0x1eca56] = undefined;
      }
      if (houses_colshapes[_0x1eca56]) {
        houses_colshapes[_0x1eca56].destroy();
        houses_colshapes[_0x1eca56] = undefined;
      }
    }
    if (parked_marker) {
      parked_marker.destroy();
      parked_marker = undefined;
    }
    houses_blips = [];
    houses_colshapes = [];
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.game.ui.notifications.show(language["Bы дocтигли тoчки нaзнaчeния"][curr_lang], false, 0, 2);
  } else if (_0x69d2ad.is_treasure_shape == 1) {
    mp.events.callRemote("Server_PickedTreasure");
    DestroyTreasureVariables();
  }
});
const Jobs_coords = [[-574.09, 5260.461, 70.467], [720.766, 145.462, 80.754], [2018.416, 4976.13, 41.238], [406.856, 6491.727, 28.087], [903.948, -176.236, 74.061], [-61.858, -1831.986, 26.824], [-1449.124, -683.276, 26.399], [-112.653, -2514.917, 6], [432.396, -649.772, 28.728], [-1175.367, -889.29, 13.865]];
const mining_poses = [[1885.164, 3268.926, 48.431], [2123.871, 3300.006, 46.898], [2208.416, 3206.191, 49.921], [1914.982, 3476.422, 47.968], [1980.402, 3490.166, 44.362], [2002.171, 3558.076, 40.646], [2296.654, 3682.488, 44.578], [1294.523, 3001.994, 43.286]];
const mining_buy = [[286.969, 2843.46, 44.704], [1093.252, -2251.934, 31.234], [-272.121, -2496.399, 7.296]];
const oil_station = [[1500.471, -2536.634, 55.721, 20], [1695.168, -1436.409, 112.558, 20], [1487.422, -1601.153, 72.169, 20], [1799.495, -1349.67, 99.336, 20], [1841.111, -1196.913, 92.224, 20], [1878.807, -1038.626, 79.115, 20], [1529.976, -2178.969, 77.418, 20], [1699.288, -1924.831, 115.204, 20], [1421.979, -2305.969, 66.847, 20], [1366.167, -2200.036, 60.227, 20], [1440.641, -2089.631, 54.688, 20], [1526.594, -2059.579, 77.273, 20], [1564.373, -1851.123, 92.441, 20], [1583.439, -1769.299, 88.37, 20], [1569.636, -1594.023, 90.731, 20]];
const building_construction = [[-836.957, -813.723, 19.749], [-510.235, -1001.633, 23.55], [-97.392, -1014.355, 27.275], [1293.662, -732.467, 64.611]];
const map_quest_locations = [[-709.785, 5768.813, 17.511], [-45.75, 1918.937, 195.362], [2007.767, -5.585, 201.532], [-36.239, 2869.999, 59.626], [3395.589, 5499.162, 24.348], [-1127.637, 2671.467, 18.079], [2727.405, 4282.911, 48.476], [448.843, 5574.519, 781.189]];
const fishing_poses = [[-191.953, 790.357, 198.107], [1100.834, -547.899, 56.962], [-2627.999, 2545.483, 1.068], [713.591, 4092.594, 34.728], [-1612.614, 5262.241, 3.974], [-1846.429, -1253.755, 8.616]];
const oil_position = [[1500.471, -2536.634, 55.721, 20], [1695.168, -1436.409, 112.558, 20], [1487.422, -1601.153, 72.169, 20], [1799.495, -1349.67, 99.336, 20], [1841.111, -1196.913, 92.224, 20], [1878.807, -1038.626, 79.115, 20], [1529.976, -2178.969, 77.418, 20], [1699.288, -1924.831, 115.204, 20], [1421.979, -2305.969, 66.847, 20], [1366.167, -2200.036, 60.227, 20], [1440.641, -2089.631, 54.688, 20], [1526.594, -2059.579, 77.273, 20], [1564.373, -1851.123, 92.441, 20], [1583.439, -1769.299, 88.37, 20], [1569.636, -1594.023, 90.731, 20]];
mp.events.add("Client_RouteToGPSPoint", _0x1d6448 => {
  _0x1d6448 = JSON.parse(_0x1d6448);
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newCircle(parseFloat(_0x1d6448[0]), parseFloat(_0x1d6448[1]), 10, 0);
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = null;
  }
  gpsblip = mp.blips.new(1, new mp.Vector3(parseFloat(_0x1d6448[0]), parseFloat(_0x1d6448[1]), parseFloat(_0x1d6448[2])), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  gpsblip.setRoute(true);
  mp.game.ui.notifications.show(language["Местоположение отмечено на карте"][curr_lang], false, 0, 2);
});
let is_gps_from_passenger = false;
mp.events.add("Client_PassengerNavigator", _0x1868f4 => {
  is_gps_from_passenger = true;
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newCircle(_0x1868f4.x, _0x1868f4.y, 10, 0);
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = null;
  }
  gpsblip = mp.blips.new(1, _0x1868f4, {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  gpsblip.setRoute(true);
});
mp.events.add("Client_RouteToJob", _0x201ecd => {
  if (JobHelpMenuOpened) {
    JobHelpMenuClose();
  }
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  let _0x436625 = Jobs_coords[_0x201ecd];
  if (_0x201ecd == 10) {
    _0x436625 = [MINING_JOB_CENTER.x, MINING_JOB_CENTER.y, MINING_JOB_CENTER.z];
  } else if (_0x201ecd == 11) {
    const _0x5eefa6 = global.getRandomInt(0, mining_buy.length);
    _0x436625 = mining_buy[_0x5eefa6];
  } else if (_0x201ecd == 12) {
    _0x436625 = [1018.634, -2511.446, 28.477];
  } else if (_0x201ecd == 13) {
    const _0x424a7b = global.getRandomInt(0, oil_station.length);
    _0x436625 = oil_station[_0x424a7b];
  } else if (_0x201ecd == 14) {
    _0x436625 = [-1581.292, -558.406, 34.953];
  } else if (_0x201ecd == 15) {
    const _0x1d149d = global.getRandomInt(0, building_construction.length);
    _0x436625 = building_construction[_0x1d149d];
  } else if (_0x201ecd == 16) {
    CloseMenu();
    const _0x176cf0 = global.getRandomInt(0, map_quest_locations.length);
    _0x436625 = map_quest_locations[_0x176cf0];
  } else if (_0x201ecd == 17) {
    const _0x307f7f = global.getRandomInt(0, fishing_poses.length);
    _0x436625 = fishing_poses[_0x307f7f];
  } else if (_0x201ecd == 18) {
    CloseEventMenu();
    _0x436625 = [1589.462, -2751.328, 1.451];
  } else if (_0x201ecd == 19) {
    CloseEventMenu();
    _0x436625 = [-1032.657, -3014.094, 13.946];
  } else if (_0x201ecd == 20) {
    CloseEventMenu();
    _0x436625 = [1872.739, 2606.48, 45.656];
  } else if (_0x201ecd == 21) {
    CloseFamilyMenu();
    _0x436625 = [1199.938, -1461.412, 34.801];
  } else if (_0x201ecd == 22) {
    JobHelpMenuClose();
    _0x436625 = [576.788, 2735.097, 42.029];
  } else if (_0x201ecd == 23) {
    JobHelpMenuClose();
    _0x436625 = [-1033.782, -3012.806, 13.946];
  } else if (_0x201ecd == 24) {
    JobHelpMenuClose();
    _0x436625 = [1015.495, -2511.274, 28.258];
  } else if (_0x201ecd == 25) {
    JobHelpMenuClose();
    _0x436625 = [120.912, 97.153, 81.249];
  } else if (_0x201ecd == 26) {
    JobHelpMenuClose();
    _0x436625 = [GPS_coords[1][15][0], GPS_coords[1][15][1], GPS_coords[1][15][2]];
  } else if (_0x201ecd == 27) {
    JobHelpMenuClose();
    _0x436625 = [GPS_coords[1][16][0], GPS_coords[1][16][1], GPS_coords[1][16][2]];
  }
  gpsblip = mp.blips.new(1, _0x436625, {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  gpsblip.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newCircle(_0x436625[0], _0x436625[1], 10, 0);
});
mp.events.add("Client_SendAd", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerSendAd");
  }
});
mp.events.add("Client_CallService", _0x5820c1 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CallService", _0x5820c1);
  }
});
let sms_timeout = null;
mp.events.add("Client_SMS_Notify", (_0x2e803f, _0x204b30, _0x8141bb, _0x5f2d74) => {
  if (sms_timeout) {
    main_browser.execute("APPS.state.hud.sms_notif = false;");
    clearTimeout(sms_timeout);
    sms_timeout = null;
  }
  if (!_0x5f2d74) {
    _0x204b30 = resolveTranslationValue(_0x204b30);
  }
  PlayAudioSound("OOB_Start", "GTAO_FM_Events_Soundset");
  main_browser.execute("APPS.state.hud.sms_number = " + parseInt(_0x8141bb) + ";");
  main_browser.execute("APPS.state.hud.sms_text = '" + _0x204b30 + "';");
  let _0x194b9f = "";
  mp.storage.data.contacts.forEach(function (_0x362d30, _0x4f7cda) {
    if (_0x362d30.phone == _0x8141bb) {
      _0x194b9f = _0x362d30.name;
    }
  });
  if (_0x194b9f == "") {
    _0x194b9f = language.Неизвестный[curr_lang];
  }
  main_browser.execute("APPS.state.hud.sms_name = '" + _0x194b9f + "';");
  main_browser.execute("APPS.state.hud.sms_notif = true;");
  sms_timeout = setTimeout(() => {
    sms_timeout = null;
    main_browser.execute("APPS.state.hud.sms_notif = false;");
  }, 10000);
});
let carshare_blip;
let carshare_colshape;
let atm_robbery_shape;
let atm_robbery_blips;
let atm_progress_interval;
let atm_robbery_exit_interval;
let robbery_juice_shop_shape;
let robbery_juice_shop_blips;
let robbery_juice_shop_progress_interval;
let robbery_juice_shop_exit_interval;
let treasure_colshape;
let treasure_marker;
let call_timeout = null;
function HideATMRobberyProgress() {
  main_browser.execute("APPS.state.hud.progressBar.displayAt = null;");
  if (atm_progress_interval != null) {
    clearInterval(atm_progress_interval);
    atm_progress_interval = undefined;
  }
  if (atm_robbery_shape && mp.colshapes.exists(atm_robbery_shape)) {
    atm_robbery_shape.destroy();
    atm_robbery_shape = undefined;
  }
  if (atm_robbery_blips != null) {
    atm_robbery_blips.destroy();
    atm_robbery_blips = undefined;
  }
  if (atm_robbery_exit_interval != null) {
    if (atm_robbery_exit_interval != null) {
      clearInterval(atm_robbery_exit_interval);
    }
    atm_robbery_exit_interval = undefined;
  }
}
function ShowATMRobberyProgress(_0x23368b) {
  const _0x5d62fb = {
    progress: 0,
    delay: 1000,
    duration: _0x23368b,
    isIncrease: true,
    title: "Взлом банкомата",
    displayAt: "center"
  };
  main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x5d62fb) + ";");
}
function HideRobberyJuiceShopProgress() {
  main_browser.execute("APPS.state.hud.progressBar.displayAt = null;");
  if (robbery_juice_shop_progress_interval != null) {
    clearInterval(robbery_juice_shop_progress_interval);
    robbery_juice_shop_progress_interval = undefined;
  }
  if (robbery_juice_shop_shape && mp.colshapes.exists(robbery_juice_shop_shape)) {
    robbery_juice_shop_shape.destroy();
    robbery_juice_shop_shape = undefined;
  }
  if (robbery_juice_shop_blips != null) {
    robbery_juice_shop_blips.destroy();
    robbery_juice_shop_blips = undefined;
  }
  if (robbery_juice_shop_exit_interval != null) {
    if (robbery_juice_shop_exit_interval != null) {
      clearInterval(robbery_juice_shop_exit_interval);
    }
    robbery_juice_shop_exit_interval = undefined;
  }
}
function ShowRobberyJuiceShopProgress(_0x316bbf) {
  const _0x3733a5 = {
    progress: 0,
    delay: 1000,
    duration: _0x316bbf,
    isIncrease: true,
    title: "Ограбление магазина соков",
    displayAt: "center"
  };
  main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x3733a5) + ";");
}
function DestroyTreasureVariables() {
  if (treasure_colshape && mp.colshapes.exists(treasure_colshape)) {
    treasure_colshape.destroy();
    treasure_colshape = undefined;
  }
  if (treasure_marker && mp.markers.exists(treasure_marker)) {
    treasure_marker.destroy();
    treasure_marker = undefined;
  }
}
mp.events.add("Client_Call_Notify", (_0x4592fe, _0x44a520) => {
  if (call_timeout) {
    main_browser.execute("APPS.state.hud.call_notif = false;");
    clearTimeout(call_timeout);
    call_timeout = null;
  }
  PlayAudioSound("OOB_Start", "GTAO_FM_Events_Soundset");
  main_browser.execute("APPS.state.hud.phone_number = " + parseInt(_0x44a520) + ";");
  let _0x5b2ae6 = "";
  mp.storage.data.contacts.forEach(function (_0x113024, _0x1732d1) {
    if (_0x113024.phone == _0x44a520) {
      _0x5b2ae6 = _0x113024.name;
    }
  });
  if (_0x5b2ae6 == "") {
    _0x5b2ae6 = language.Неизвестный[curr_lang];
  }
  main_browser.execute("APPS.state.hud.phone_name = '" + _0x5b2ae6 + "';");
  main_browser.execute("APPS.state.hud.call_notif = true;");
  call_timeout = setTimeout(() => {
    call_timeout = null;
    main_browser.execute("APPS.state.hud.call_notif = false;");
  }, 5000);
});
mp.events.add("ClientPhoneOpen", () => {
  mp.events.call("Disablechat");
  chatActive = false;
  OpenMobile();
});
mp.events.add("Client_SendSMSFromChat", _0x5ddf30 => {
  if (_0x5ddf30) {
    _0x5ddf30 = parseInt(_0x5ddf30);
    SendSMSFromDesign(_0x5ddf30);
  }
});
global.SendSMSFromDesign = function (_0x11bcb6) {
  mp.events.call("Disablechat");
  chatActive = false;
  OpenMobile(_0x11bcb6, 1);
  mp.events.call("Enablechat");
};
mp.events.add("Client_SendCallFromChat", _0x333278 => {
  if (_0x333278) {
    _0x333278 = parseInt(_0x333278);
    SendCallFromDesign(_0x333278);
  }
});
global.SendCallFromDesign = function (_0xc1f8a5) {
  mp.events.call("Disablechat");
  chatActive = false;
  OpenMobile(_0xc1f8a5, 2);
  mp.events.call("Enablechat");
};
mp.events.add("Client_EnterPromo", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EnterPromo");
  }
});
mp.events.add("Client_BuyHouses", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyHouses");
  }
});
mp.events.add("Client_SearchCarSharing", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SearchCarSharing");
  }
});
mp.events.add("Client_OpenBunkerPage", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseMobile();
    mp.events.callRemote("Server_PropertyDesignRequestHandler", 4, true);
  }
});
global.InvestmentsOpened = false;
mp.events.add("Client_OpenInvestmentsPageCorrect", (_0x4aa02d, _0x78fe6c, _0x12bd1b) => {
  CloseMobile();
  if (GlobalCheck() == 1 && InvestmentsOpened == 0) {
    return;
  }
  const _0x38e3ff = "{\"investments_picked\":[" + _0x4aa02d + "],\"online\":[" + _0x78fe6c + "],\"daily_get\":" + _0x12bd1b + ",\"show\":true}";
  main_browser.execute("APPS.state.investments = " + _0x38e3ff);
  InvestmentsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseInvestments = function () {
  if (InvestmentsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.investments.show = false;");
    InvestmentsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_UpdateInvestmentPicks", _0x526d86 => {
  main_browser.execute("APPS.state.investments.investments_picked = [" + _0x526d86 + "];");
});
mp.events.add("Client_UpdateInvestmentPicks", _0x2aaa90 => {
  main_browser.execute("APPS.state.investments.daily_get = " + _0x2aaa90 + ";");
});
mp.events.add("Client_OpenInvestmentsPage", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenInvestmentsPage");
  }
});
mp.events.add("Client_OpenDarknetPage", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenDarknetPage");
  }
});
mp.events.add("Client_CollectProfitFromInvestments", (_0x257dc7, _0x3dff4b) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CollectProfitFromInvestments", _0x257dc7, _0x3dff4b);
  }
});
mp.events.add("Client_InvestProfitFromInvestments", (_0x22e2cb, _0x13f7fe) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_InvestProfitFromInvestments", _0x22e2cb, _0x13f7fe);
  }
});
mp.events.add("Client_Show_Car_Sharing_Pos", _0x2da00e => {
  if (carshare_blip) {
    carshare_blip.destroy();
    carshare_blip = undefined;
  }
  carshare_blip = mp.blips.new(530, _0x2da00e, {
    name: language["Свободный транспорт"][curr_lang],
    color: 83
  });
  carshare_blip.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  if (carshare_colshape) {
    carshare_colshape.destroy();
    carshare_colshape = undefined;
  }
  carshare_colshape = mp.colshapes.newCircle(_0x2da00e.x, _0x2da00e.y, 10, 0);
});
mp.events.add("playerEnterColshape", _0x12f856 => {
  if (_0x12f856 == carshare_colshape) {
    if (carshare_blip) {
      carshare_blip.destroy();
      carshare_blip = undefined;
    }
    if (carshare_colshape) {
      carshare_colshape.destroy();
      carshare_colshape = undefined;
    }
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    mp.game.ui.notifications.show(language["Bы дocтигли тoчки нaзнaчeния"][curr_lang], false, 0, 2);
    return;
  }
});
mp.events.add("Client_CreateMobileEvent", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CreateMobileEvent");
  }
});
mp.events.add("Client_RouteToMobileEvent", _0x130272 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RouteToMobileEvent", _0x130272);
  }
});
mp.events.add("Client_TeleportToSystemEvent", _0x5a2478 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TeleportToSystemEvent", _0x5a2478);
  }
});
mp.events.add("Client_RouteToRecruitment", _0x574295 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RouteToRecruitment", _0x574295);
  }
});
mp.events.add("Client_DeleteMobileEvent", _0x5ac0ba => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteMobileEvent", _0x5ac0ba);
  }
});
mp.events.add("Client_UpdateMobileEvents", _0x1aba05 => {
  if (mobileOpen) {
    main_browser.execute("APPS.state.hud_mobile.event_pool = " + JSON.stringify(_0x1aba05));
  }
});
mp.events.add("Client_ShowMobileEvent", (_0x5c8914, _0x15d652, _0x5a089e, _0x1c6f8f, _0x15d63d, _0x1f1f6c = 0, _0x31d9f9 = "", _0x490de5 = "", _0x149f98 = "", _0x244462 = "") => {
  const _0x5de84b = _0x397ab2 => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x397ab2) : _0x397ab2;
  ShowMobileEventNotif(_0x5c8914, _0x15d652, _0x5de84b(_0x5a089e), _0x5de84b(_0x1c6f8f), _0x5de84b(_0x15d63d), _0x1f1f6c, _0x31d9f9, _0x490de5, _0x149f98, _0x244462);
});
global.ShowMobileEventNotif = function (_0x57963c, _0x3851aa, _0x3a0d0a, _0x195b77, _0x49e0ae, _0x3c786d = 0, _0x1e5c9d = "", _0x25b468 = "", _0x2de11f = "", _0x177d95 = "") {
  if (curr_lang != "ru" || playerincapture != 1) {
    main_browser.execute("APPS.state.hud.mobile_event_is_admin = " + _0x57963c + ";");
    main_browser.execute("APPS.state.hud.mobile_event_org_name = " + JSON.stringify(_0x3851aa) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_name = " + JSON.stringify(_0x3a0d0a) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_date = " + JSON.stringify(_0x195b77) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_location = " + JSON.stringify(_0x49e0ae) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_type = " + _0x3c786d + ";");
    main_browser.execute("APPS.state.hud.mobile_event_data = " + JSON.stringify(_0x1e5c9d) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_data2 = " + JSON.stringify(_0x25b468) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_data3 = " + JSON.stringify(_0x2de11f) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_data4 = " + JSON.stringify(_0x177d95) + ";");
    main_browser.execute("APPS.state.hud.mobile_event_show = true;");
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
  }
};
mp.events.add("Client_SendHudEventNotif", (_0xfe2579 = 0, _0x39c7ff = "", _0xe6afb2 = "", _0x3bd73c = "", _0x14d617 = "", _0x40f158 = {}) => {
  if (!loggedin) {
    return;
  }
  const _0x3c5020 = _0x1d879f => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x1d879f) : _0x1d879f;
  const _0x3ea218 = _0xfe2579 === 174 ? _0x39c7ff : _0x3c5020(_0x39c7ff);
  SendHudEventNotif(_0xfe2579, _0x3ea218, _0x3c5020(_0xe6afb2), _0x3c5020(_0x3bd73c), _0x3c5020(_0x14d617), _0x40f158);
});
global.SendHudEventNotif = function (_0x39a587 = 0, _0x3e5b7f = "", _0x5c0f3e = "", _0x5c531a = "", _0x4c1658 = "", _0x3c1634 = {}) {
  main_browser.execute("AppComponents.notification.sendNotification(" + _0x39a587 + ", " + JSON.stringify(_0x3e5b7f) + ", " + JSON.stringify(_0x5c0f3e) + ", " + JSON.stringify(_0x5c531a) + ", " + JSON.stringify(_0x4c1658) + ", " + JSON.stringify(_0x3c1634) + ");");
  PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
};
mp.events.add("Client_OpenAuction", () => {
  if (mobileOpen) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenAuction");
    }
  }
});
mp.events.add("Client_OpenEventMenuID", _0x31b4a9 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseBrowsers();
    mp.events.callRemote("Server_OpenEventMenu", 0, "all", _0x31b4a9);
  }
});
mp.events.add("Client_OpenEventMenu", () => {
  if (mobileOpen) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseMobile();
      mp.events.callRemote("Server_OpenEventMenu");
    }
  }
});
mp.events.add("Client_OpenFamEventMenu", () => {
  if (FamilyOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseFamilyMenu();
      mp.events.callRemote("Server_OpenEventMenu", 3);
      global.EventMenuOpenedFromFamilyMenu = true;
    }
  }
});
mp.events.add("Client_OpenOrgEventMenu", _0x23ccc3 => {
  if (!MemberInfoOpened) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  CloseMemberInfo();
  let _0x50630f = _0x23ccc3 === 2 ? "army" : _0x23ccc3 === 3 ? "police" : _0x23ccc3 === 4 ? "sahp" : _0x23ccc3 === 5 || _0x23ccc3 === 6 || _0x23ccc3 === 7 || _0x23ccc3 === 8 || _0x23ccc3 === 9 ? "gang" : _0x23ccc3 === 10 ? "fib" : _0x23ccc3 === 12 ? "gov" : "all";
  mp.events.callRemote("Server_OpenEventMenu", 4, _0x50630f);
});
global.EventMenuOpened = false;
mp.events.add("Client_CloseEventsMenu", _0x57754a => {
  CloseEventMenu();
});
mp.events.add("Client_RouteToMoneyMachine", (_0x381728, _0x548c88, _0x10011f) => {
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  CloseEventMenu();
  const _0x526de8 = [_0x381728, _0x548c88, _0x10011f];
  gpsblip = mp.blips.new(1, _0x526de8, {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  gpsblip.setRoute(true);
  mp.game.ui.notifications.show(language["Mecтoпoлoжeниe oтмeчeнo нa кapтe"][curr_lang], false, 0, 2);
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
  gpscolshape = mp.colshapes.newSphere(_0x526de8[0], _0x526de8[1], _0x526de8[2], 2, 0);
});
global.CloseEventMenu = function (_0x129a59) {
  if (EventMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_events.show = false;");
    EventMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x129a59 && global.EventMenuOpenedFromFamilyMenu) {
      global.EventMenuOpenedFromFamilyMenu = false;
      mp.events.callRemote("Server_OpenFamilyMenu");
    }
  }
};
mp.events.add("Client_CloseEventMenu", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    CloseEventMenu();
  }
});
mp.events.add("Client_UpdateEventMenuEvents", _0x2499ad => {
  if (EventMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.new_events.event_pool = " + JSON.stringify(_0x2499ad) + ";");
  }
});
mp.events.add("Client_OpenAvailableLabs", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenAvailableLabs");
    }
  }
});
mp.events.add("Client_RadioVolumeSavePlayer", _0x597e1e => {
  if (mobileOpen && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RadioVolumeSavePlayer", _0x597e1e);
    }
  }
});
mp.events.add("Client_RadioStateChange", (_0x20caf9, _0x11fc2c) => {
  if (mobileOpen && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheckRadioButton < 1000)) {
      lastCheckRadioButton = new Date().getTime();
      if (_0x20caf9) {
        main_browser.execute("APPS.state.radio_player.volume = " + parseFloat(_0x11fc2c / 100) + ";");
        main_browser.execute("APPS.state.radio_player.play = true;");
      } else {
        main_browser.execute("APPS.state.radio_player.play = false;");
      }
      radio_status = _0x20caf9;
    }
  }
});
mp.events.add("Client_RadioSendRequest", (_0x488ecc, _0x47db1a) => {
  if (mobileOpen && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RadioSendRequest", _0x488ecc, _0x47db1a);
    }
  }
});
global.OnexBetOpened = false;
mp.events.add("Client_RobberyATMSkillCheck", () => {
  main_browser.execute("APPS.state.hud.interact = false;");
  at_jail_computer = false;
  StartCustomSound("skill_check", "sounds/skillcheck/skill_check.ogg", 0.2);
  main_browser.execute("APPS.state.skill_check = {\"show\":true}");
  mp.gui.cursor.show(true, true);
  is_skill_check = 5;
  localplayer.freezePosition(true);
  ShowNotification(language["Вы начали ограбление, пройдите мини-игру"][curr_lang], 2);
});
mp.events.add("playerExitColshape", _0x3f6dd1 => {
  if (mp.colshapes.exists(_0x3f6dd1) && _0x3f6dd1.is_robbery_atm_exit == 1 && atm_robbery_exit_interval == null) {
    let _0x134d97 = 5;
    atm_robbery_exit_interval = setInterval(() => {
      if (_0x134d97 > 0) {
        mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x134d97), false, 0, 6);
        _0x134d97--;
      } else if (_0x134d97 <= 0) {
        mp.events.callRemote("Server_ExitAtmRobberyShape");
        if (atm_robbery_exit_interval != null) {
          clearInterval(atm_robbery_exit_interval);
        }
        atm_robbery_exit_interval = undefined;
      }
    }, 1000);
  }
});
mp.events.add("playerEnterColshape", _0x21e2f9 => {
  if (!mp.colshapes.exists(_0x21e2f9) || _0x21e2f9.is_robbery_atm_exit != 1 || atm_robbery_exit_interval != null) {
    if (atm_robbery_exit_interval != null) {
      if (atm_robbery_exit_interval != null) {
        clearInterval(atm_robbery_exit_interval);
      }
      atm_robbery_exit_interval = undefined;
    }
  }
});
mp.events.add("Client_ResetATMRobberyProgress", () => {
  HideATMRobberyProgress();
});
mp.events.add("Client_ATMRobberyInProgress", (_0xf24d9e, _0x1890c2) => {
  if (atm_progress_interval == null) {
    atm_robbery_blips = mp.blips.new(zone_blips, new mp.Vector3(localplayer.position.x, localplayer.position.y, 0), {
      radius: parseFloat(30),
      alpha: parseFloat(100),
      color: parseFloat(zone_color),
      dimension: -1
    });
    atm_robbery_shape = mp.colshapes.newCircle(localplayer.position.x, localplayer.position.y, 30, localplayer.dimension);
    atm_robbery_shape.is_robbery_atm_exit = true;
    let _0x2a1c85 = _0xf24d9e;
    ShowATMRobberyProgress(_0x2a1c85, _0x1890c2);
    atm_progress_interval = setInterval(() => {
      if (_0x2a1c85 <= 0) {
        HideATMRobberyProgress();
      } else {
        _0x2a1c85--;
      }
    }, 1000);
  }
});
mp.events.add("Client_HideATMRobberyProgress", () => {
  HideATMRobberyProgress();
});
mp.events.add("Client_RobberyJuiceShopSkillCheck", () => {
  main_browser.execute("APPS.state.hud.interact = false;");
  at_jail_computer = false;
  StartCustomSound("skill_check", "sounds/skillcheck/skill_check.ogg", 0.2);
  main_browser.execute("APPS.state.skill_check = {\"show\":true}");
  mp.gui.cursor.show(true, true);
  is_skill_check = 6;
  localplayer.freezePosition(true);
  ShowNotification(language["Вы начали ограбление, пройдите мини-игру"][curr_lang], 2);
});
mp.events.add("playerExitColshape", _0x316bfd => {
  if (mp.colshapes.exists(_0x316bfd) && _0x316bfd.is_robbery_juice_shop_exit == 1 && robbery_juice_shop_exit_interval == null) {
    let _0x51ce0f = 5;
    robbery_juice_shop_exit_interval = setInterval(() => {
      if (_0x51ce0f > 0) {
        mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x51ce0f), false, 0, 6);
        _0x51ce0f--;
      } else if (_0x51ce0f <= 0) {
        mp.events.callRemote("Server_ExitRobberyJuiceShopShape");
        if (robbery_juice_shop_exit_interval != null) {
          clearInterval(robbery_juice_shop_exit_interval);
        }
        robbery_juice_shop_exit_interval = undefined;
      }
    }, 1000);
  }
});
mp.events.add("playerEnterColshape", _0x19b59c => {
  if (!mp.colshapes.exists(_0x19b59c) || _0x19b59c.is_robbery_juice_shop_exit != 1 || robbery_juice_shop_exit_interval != null) {
    if (robbery_juice_shop_exit_interval != null) {
      if (robbery_juice_shop_exit_interval != null) {
        clearInterval(robbery_juice_shop_exit_interval);
      }
      robbery_juice_shop_exit_interval = undefined;
    }
  }
});
mp.events.add("Client_ResetRobberyJuiceShopProgress", () => {
  HideRobberyJuiceShopProgress();
});
mp.events.add("Client_RobberyJuiceShopInProgress", (_0x10b9fe, _0x54ca59) => {
  if (robbery_juice_shop_progress_interval == null) {
    robbery_juice_shop_blips = mp.blips.new(zone_blips, new mp.Vector3(localplayer.position.x, localplayer.position.y, 0), {
      radius: parseFloat(30),
      alpha: parseFloat(100),
      color: parseFloat(zone_color),
      dimension: -1
    });
    robbery_juice_shop_shape = mp.colshapes.newCircle(localplayer.position.x, localplayer.position.y, 30, localplayer.dimension);
    robbery_juice_shop_shape.is_robbery_juice_shop_exit = true;
    let _0x44f94d = _0x10b9fe;
    ShowRobberyJuiceShopProgress(_0x44f94d, _0x54ca59);
    robbery_juice_shop_progress_interval = setInterval(() => {
      if (_0x44f94d <= 0) {
        HideRobberyJuiceShopProgress();
      } else {
        _0x44f94d--;
      }
    }, 1000);
  }
});
mp.events.add("Client_HideRobberyJuiceShopProgress", () => {
  HideRobberyJuiceShopProgress();
});
mp.events.add("Client_CreateRandomTreasure", _0x5ce4bb => {
  DestroyTreasureVariables();
  treasure_colshape = mp.colshapes.newSphere(_0x5ce4bb[0], _0x5ce4bb[1], _0x5ce4bb[2], 2);
  treasure_colshape.is_treasure_shape = true;
  treasure_marker = mp.markers.new(40, new mp.Vector3(_0x5ce4bb[0], _0x5ce4bb[1], _0x5ce4bb[2]), 2, {
    color: [255, 225, 0, 255],
    visible: true,
    dimension: 0
  });
});
mp.events.add("Client_OpenTreasureMobilePage", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenTreasureMobilePage");
    }
  }
});
mp.events.add("Client_OpenBoardFromMobile", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenADBoardCorrect");
    }
  }
});
mp.events.add("Client_OpenTreasureMobilePageCorrect", (_0x2ef5aa, _0x3135a4, _0x375145, _0x18be66, _0x3c802f) => {
  let _0x4db532 = 100;
  if (_0x3135a4 > 0 && _0x3135a4 < 5) {
    _0x4db532 = Math.floor(_0x3135a4 / 5 * 100);
  }
  main_browser.execute("APPS.state.hud_mobile.treasure_id = " + _0x2ef5aa);
  main_browser.execute("APPS.state.hud_mobile.treasure_hours = " + _0x3135a4);
  main_browser.execute("APPS.state.hud_mobile.treasure_percents = " + _0x4db532);
  main_browser.execute("APPS.state.hud_mobile.is_super_treasure = " + _0x375145);
  main_browser.execute("APPS.state.hud_mobile.time_for_global_treasure = '" + _0x18be66 + "'");
  main_browser.execute("APPS.state.hud_mobile.time_for_third_treasure = '" + _0x3c802f + "'");
  main_browser.execute("APPS.state.hud_mobile.treasure_need_to_show = 1;");
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_LoadSimsInPhone", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadSimsInPhone");
    }
  }
});
mp.events.add("Client_ChangeSimCard", _0x2d08bd => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeSimCard", _0x2d08bd);
    }
  }
});
mp.events.add("Client_TransferSimCard", _0x22af90 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TransferSimCard", _0x22af90);
    }
  }
});
mp.events.add("Client_DeleteSimCard", _0x52b938 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteSimCard", _0x52b938);
    }
  }
});
mp.events.add("Client_OpenSimCardsSuccess", _0x317cf1 => {
  main_browser.execute("APPS.state.hud_mobile.simcards_pool = [" + _0x317cf1 + "];");
  main_browser.execute("APPS.state.hud_mobile.simcards_need_to_show = 1;");
  mp.gui.cursor.show(true, true);
});
const warehouse_pos = [new mp.Vector3(903.321, -1722.67, 32.16), new mp.Vector3(574.438, 132.032, 99.475), new mp.Vector3(-759.669, -2586.77, 13.868), new mp.Vector3(189.084, 2786.51, 45.59), new mp.Vector3(42.762, 6454.19, 31.426)];
const org_pos = [new mp.Vector3(306.01, -587.566, 42.268), new mp.Vector3(-2305.613, 3385.458, 30.016), new mp.Vector3(434.289, -983.464, 29.885), new mp.Vector3(-442.891, 6016.874, 30.717), new mp.Vector3(112.207, -1946.876, 19.7), new mp.Vector3(-170.182, -1667.988, 32.165), new mp.Vector3(411.971, -1487.758, 29.154), new mp.Vector3(797.333, -2124.101, 28.458), new mp.Vector3(-1129.737, -1588.438, 3.386), new mp.Vector3(-1082.117, -260.174, 36.806), new mp.Vector3(-545.234, -203.868, 37.22), new mp.Vector3(2523.637, -351.642, 93.134)];
const barberpositions = [new mp.Vector3(1932.6370849609375, 3730.803466796875, 32.85443878173828), new mp.Vector3(-278.8948974609375, 6227.443359375, 31.70492172241211), new mp.Vector3(137.764, -1708.651, 29.302), new mp.Vector3(-1282.907, -1118.237, 7), new mp.Vector3(-815.321, -182.631, 37.569), new mp.Vector3(-33.949, -152.003, 57.086), new mp.Vector3(1212.166, -473.714, 66.213), new mp.Vector3(-555.996, -584.487, 41.43), new mp.Vector3(-549.44, -584.078, 41.43)];
const taxiPos = [[903.948, -176.236, 74.061], [-61.858, -1831.986, 26.824], [-1449.124, -683.276, 26.399]];
mp.events.add("Client_SetRouteToEvent", (_0x2cd2e0, _0x4bc623 = undefined) => {
  if (loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (localplayer.dimension != 0) {
      return ShowNotification(language["Вы должны находиться на улице"][curr_lang], 6);
    }
    if (EventMenuOpened) {
      CloseEventMenu();
    } else if (AuctionOpened) {
      CloseAuction();
    } else if (AchievmentsOpened) {
      CloseAchiv();
    }
    switch (_0x2cd2e0) {
      case "airdrop":
        mp.events.callRemote("Server_SetRouteToAirdrop");
        break;
      case "crazydriver":
        mp.events.callRemote("Server_SetRouteToCrazyDriver");
        break;
      case "buyShovel":
        const _0x36938f = npc_options.filter(_0xd1dd55 => _0xd1dd55.model == "mp_m_shopkeep_01").map(_0x2d8d63 => ({
          position: _0x2d8d63.position
        }));
        const _0x55a43c = getNearestPositionFromArray(_0x36938f);
        mp.events.call("Client_SetRouteToPosition", _0x55a43c);
        closeChristmasDesign();
        break;
      case "rpfactory":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(861.962, -2365.853, 30.346));
        break;
      case "kingofthehill":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(501.522, 5604.643, 797.909));
        break;
      case "submarine":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(487.581, -3374.173, 6.067));
        break;
      case "workShopWar":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-91.111, 6212.393, 31.02));
        break;
      case "foundry":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(1093.663, -1998.344, 29.553));
        break;
      case "vineyardWar":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-1812.31, 2192.193, 114.022));
        break;
      case "streetRace":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-396.714, 1227.069, 325.642));
        break;
      case "portBattle":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(33.871, -2711.018, 5.38));
        break;
      case "flagWarOwnFlag":
        mp.events.callRemote("Server_FlagWarRouteToOwnFlag");
        break;
      case "flagWarTakeFlag":
        mp.events.callRemote("Server_FlagWarTakeFlagFromMenu");
        break;
      case "flagWar":
      case "flagWarHouse":
        mp.events.callRemote("Server_FlagWarRouteToHouse");
        break;
      case "unOfficialCapture":
        mp.events.callRemote("Server_RouteToUnofPlace");
        break;
      case "containerAuction":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-137.228, -2407.476, 6));
        break;
      case "armyLoot":
        let _0x591f57 = [new mp.Vector3(-2343.476, 3238.753, 33.058), new mp.Vector3(-2262.613, 3307.491, 32.977), new mp.Vector3(-2247.706, 3285.953, 32.81), new mp.Vector3(-1795.426, 3102.254, 32.842), new mp.Vector3(-1858.133, 3105.847, 32.81), new mp.Vector3(-2084.524, 2820.195, 34.842)];
        let _0x5c9f4b = Math.floor(Math.random() * _0x591f57.length);
        mp.events.call("Client_SetRouteToPosition", _0x591f57[_0x5c9f4b]);
        break;
      case "gangGraffiti":
        mp.events.callRemote("Server_SetRouteToEnemyGraffiti");
        break;
      case "robberyATM":
        mp.events.callRemote("Server_SetRouteToClosestATM");
        break;
      case "robberyJuiceShop":
        mp.events.callRemote("Server_SetRouteToClosestJuiceShop");
        break;
      case "nearestShop24":
        const _0x2c6684 = npc_options.filter(_0x1cbbb3 => _0x1cbbb3.model == "mp_m_shopkeep_01").map(_0x3c4329 => ({
          position: _0x3c4329.position
        }));
        const _0x385570 = getNearestPositionFromArray(_0x2c6684);
        mp.events.call("Client_SetRouteToPosition", _0x385570);
        break;
      case "collapses":
        mp.events.callRemote("Server_SetRouteToCollapse");
        break;
      case "constructionCompany":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-1581.292, -558.406, 34.953));
        break;
      case "hotel":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(2445.769, 4977.157, 120));
        break;
      case "bizwar":
        mp.events.callRemote("Server_RouteToAvailableBizWar");
        break;
      case "cannabisPlantation":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-98.899, 1910.136, 196.991));
      case "mall":
        mp.events.call("Client_SetRouteToCoords", -556.141, -601.483, 40, true, 0, 80);
        break;
      case "meteoriteRain":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(1960.236, 3426.023, 42.425));
        break;
      case "santaGifts":
        mp.events.callRemote("Server_SantaGiftsSetRouteToGift");
        break;
      case "megamall":
        setGPSToMegamall();
        break;
      case "santaGiftDrop":
        mp.events.callRemote("Server_RequestGPStoSantaGift");
        break;
      case "fishingEvent":
        routeToFishingEvent();
        break;
      case "lumberjack":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(Jobs_coords[0][0], Jobs_coords[0][1], Jobs_coords[0][2]));
        break;
      case "quarry":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(MINING_JOB_CENTER.x, MINING_JOB_CENTER.y, MINING_JOB_CENTER.z));
        break;
      case "farm":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(Jobs_coords[2][0], Jobs_coords[2][1], Jobs_coords[2][2]));
        break;
      case "buyer":
        const _0xa31f9f = npc_options.filter(_0x1234a5 => _0x1234a5.model == "a_m_m_socenlat_01").map(_0x3bdff6 => ({
          position: _0x3bdff6.position
        }));
        const _0x2036ac = getNearestPositionFromArray(_0xa31f9f);
        mp.events.call("Client_SetRouteToPosition", _0x2036ac);
        break;
      case "stranger":
        const _0x3306ee = Quests.map(_0x4e7e21 => ({
          position: {
            x: _0x4e7e21.Position[0],
            y: _0x4e7e21.Position[1],
            z: _0x4e7e21.Position[2]
          }
        }));
        const _0x4760e1 = getNearestPositionFromArray(_0x3306ee);
        mp.events.call("Client_SetRouteToPosition", _0x4760e1);
        break;
      case "taxi":
        const _0x43a6f7 = taxiPos[Math.floor(Math.random() * taxiPos.length)];
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(_0x43a6f7[0], _0x43a6f7[1], _0x43a6f7[2]));
        break;
      case "bus":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(Jobs_coords[8][0], Jobs_coords[8][1], Jobs_coords[8][2]));
        break;
      case "clothing":
        const _0xcf08e6 = npc_options.filter(_0x8dbfb => _0x8dbfb.model === "a_f_y_bevhills_02" || _0x8dbfb.model === "a_f_m_bevhills_01" || _0x8dbfb.model === "a_f_y_bevhills_01" || _0x8dbfb.model === "csb_anita" || _0x8dbfb.model === "u_f_y_spyactress").map(_0x192d71 => ({
          position: _0x192d71.position
        }));
        const _0x199d5f = getNearestPositionFromArray(_0xcf08e6);
        mp.events.call("Client_SetRouteToPosition", _0x199d5f);
        break;
      case "tattoo":
        const _0x2e349f = npc_options.filter(_0x4019e9 => _0x4019e9.model == "u_m_y_tattoo_01").map(_0x22111e => ({
          position: _0x22111e.position
        }));
        const _0x257749 = getNearestPositionFromArray(_0x2e349f);
        mp.events.call("Client_SetRouteToPosition", _0x257749);
        break;
      case "barbershop":
        const _0x5e731a = getNearestPositionFromArray(barberpositions.map(_0x506d8d => ({
          position: _0x506d8d
        })));
        mp.events.call("Client_SetRouteToPosition", _0x5e731a);
        break;
      case "carDealership":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-67.288, 74.555, 71.9));
        break;
      case "carFair":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-920.423, -2075.595, 8.299));
        break;
      case "carWash":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-699.787, -933.94, 18.014));
        break;
      case "tuning":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-1144.661, -1989.587, 12.162));
        break;
      case "junkyard":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(1282.132, -2562.817, 44.662));
        break;
      case "photoStudio":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-442.358, -27.452, 46.054));
        break;
      case "casino":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(936.238, 46.902, 80.096));
        break;
      case "bunker":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(1571.674, 2226.393, 77.27));
        break;
      case "arena":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-264.851, -2017.375, 30.404));
        break;
      case "tradingMarket":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(-1343.448, -1444.648, 4.674));
        break;
      case "drift":
        mp.events.call("Client_SetRouteToPosition", new mp.Vector3(865.625, -3203.493, 4.98));
        break;
      case "warehouse":
        const _0xa4ca2b = getNearestPositionFromArray(warehouse_pos.map(_0x484f0b => ({
          position: _0x484f0b
        })));
        mp.events.call("Client_SetRouteToPosition", _0xa4ca2b);
        break;
      case "organization":
        const _0x15c73c = getNearestPositionFromArray(org_pos.map(_0x1c9655 => ({
          position: _0x1c9655
        })));
        mp.events.call("Client_SetRouteToPosition", _0x15c73c);
        break;
      case "recruit":
        mp.events.callRemote("Server_RouteToRecruitment", _0x4bc623);
    }
    mp.gui.cursor.show(false, false);
  }
});
mp.events.add("Client_TeleportToEvent", _0x58d7b6 => {
  if (loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500) && (lastCheck = new Date().getTime(), _0x58d7b6 === "snowBattle")) {
    mp.events.callRemote("Server_Christmas2025_JoinSnowBattle");
  }
});
mp.events.add("Client_GoToEventInfo", _0x3239d6 => {
  if (loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseAchiv();
    switch (_0x3239d6) {
      case "clubDrift":
        mp.events.callRemote("Server_OpenClubMenu");
        break;
      case "darknet":
        mp.events.callRemote("Server_OpenDarknetPage");
        break;
      case "dailyTasks":
        mp.events.callRemote("OpenDailyMissions");
        break;
      case "crafting":
        mp.events.callRemote("Server_OrderCraftItems");
        break;
      case "investment":
        mp.events.callRemote("Server_OpenInvestmentsPage");
        break;
      case "ingrand":
        mp.events.callRemote("ServerOpenMobile");
        setTimeout(() => {
          mp.events.callRemote("Server_OpenIngrand");
        }, 1000);
        break;
      case "phone":
        OpenMobile();
        break;
      case "events":
        mp.events.callRemote("Server_OpenEventMenu");
    }
  }
});
mp.events.add("Client_SetRouteToPosition", (_0x4b05e6, _0x2b0852 = true, _0x272b3f = 0, _0x15e42a = 10, _0x157894 = "circle") => {
  SetGPSLocation(_0x4b05e6.x, _0x4b05e6.y, _0x4b05e6.z, _0x2b0852, _0x272b3f, _0x15e42a, _0x157894);
});
mp.events.add("Client_SetRouteToCoords", (_0x4d5644, _0x32a0a7, _0x1f7c57, _0x11ca28 = true, _0x2f32b6 = 0, _0x322173 = 10, _0x1d8ce7 = "circle") => {
  SetGPSLocation(_0x4d5644, _0x32a0a7, _0x1f7c57, _0x11ca28, _0x2f32b6, _0x322173, _0x1d8ce7);
});
mp.events.add("Client_SetGPSGlobalTreasure", _0x890c71 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseMobile();
      mp.events.callRemote("Server_RequestRouteToGlobalTreasure", _0x890c71);
    }
  }
});
mp.events.add("Client_SetGPSPersonalTreasure", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseMobile();
      mp.events.callRemote("Server_RequestRouteToPersonalTreasure");
    }
  }
});
global.getNearestPositionFromArray = function (_0x59cde9) {
  let _0x2ae04a = -1;
  let _0x533313 = 1e+24;
  for (let _0x4c3fe7 = 0; _0x4c3fe7 < _0x59cde9.length; _0x4c3fe7++) {
    const _0x52ca1e = _0x59cde9[_0x4c3fe7].position;
    const _0x35cb53 = Math.sqrt(Math.pow(_0x52ca1e.x - mp.players.local.position.x, 2) + Math.pow(_0x52ca1e.y - mp.players.local.position.y, 2) + Math.pow(_0x52ca1e.z - mp.players.local.position.z, 2));
    if (_0x35cb53 < _0x533313) {
      _0x533313 = _0x35cb53;
      _0x2ae04a = _0x4c3fe7;
    }
  }
  return _0x59cde9[_0x2ae04a].position;
};
mp.events.add("Client_RequestJoinFamily", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      if (FamilyOpened) {
        CloseFamilyMenu();
      }
      mp.events.callRemote("GetCharStoryQuest", 2);
    }
  }
});
mp.events.add("Client_RequestJoinEvent", _0x48818d => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      mp.events.callRemote("Server_RequestJoinEvent", _0x48818d);
    }
  }
});
mp.events.add("Client_FindNearestShop247", () => {
  const _0x8577f4 = npc_options.filter(_0x4fbfe3 => _0x4fbfe3.model == "mp_m_shopkeep_01").map(_0x1cc3a9 => ({
    position: _0x1cc3a9.position
  }));
  const _0x234be5 = getNearestPositionFromArray(_0x8577f4);
  mp.events.call("Client_SetRouteToPosition", _0x234be5, false);
});
mp.events.add("Client_OpenCraftFromEventsMenu", _0x556808 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      mp.events.callRemote("Server_OrderCraftItems", _0x556808);
    }
  }
});
mp.events.add("Client_EventsLoadTopRacers", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EventsLoadTopRacers");
    }
  }
});
mp.events.add("Client_EventsReceiveTopRacers", _0x4579b1 => {
  if (!loggedin || chatActive) {
    return;
  }
  let _0x1a8351 = Array.isArray(_0x4579b1) ? _0x4579b1 : [];
  for (_0x1a8351 = _0x1a8351.map(_0x5771d9 => typeof _0x5771d9 == "object" ? _0x5771d9 : {
    name: _0x5771d9,
    points: "-"
  }); _0x1a8351.length < 10;) {
    _0x1a8351.push({
      name: "-"
    });
  }
  main_browser.execute("AppComponents.new_events.setRatingTopArray(" + JSON.stringify(_0x1a8351) + ");");
});
mp.events.add("Client_EventsLoadTopRating", (_0x104605, _0x3c62b8) => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EventsLoadTopRating", _0x104605, _0x3c62b8);
    }
  }
});
mp.events.add("Client_UpdateMobileEventTop", _0x5efbf2 => {
  if (!EventMenuOpened || !loggedin || chatActive) {
    return;
  }
  let _0x47162b = Array.isArray(_0x5efbf2) ? _0x5efbf2 : [];
  for (_0x47162b = _0x47162b.map(_0x41b970 => typeof _0x41b970 == "object" ? _0x41b970 : {
    name: _0x41b970,
    points: "-"
  }); _0x47162b.length < 10;) {
    _0x47162b.push({
      name: language.Пусто[curr_lang]
    });
  }
  main_browser.execute("AppComponents.new_events.setRatingTopArray(" + JSON.stringify(_0x47162b) + ");");
});
mp.events.add("Client_EventsLoadGraffitiStats", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EventsLoadGraffitiStats");
    }
  }
});
mp.events.add("Client_UpdateGraffitiStats", _0x47072b => {
  if (!EventMenuOpened || !loggedin || chatActive) {
    return;
  }
  const _0x222f29 = [];
  for (let _0x283904 = 0; _0x283904 < Object.keys(_0x47072b).length; _0x283904++) {
    _0x222f29.push({
      gangId: _0x283904 + 7,
      amount: _0x47072b[_0x283904]
    });
  }
  main_browser.execute("AppComponents.new_events.setGraffitiArray(" + JSON.stringify(_0x222f29) + ");");
});
global.messagesOpened = false;
mp.events.add("Client_MessagesOpened", _0x1be815 => {
  messagesOpened = _0x1be815;
});