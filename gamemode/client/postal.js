global.Postal_Opened = false;
mp.events.add("Client_OpenPostal", (_0xbf7e68, _0x52e9c1, _0x260f48, _0x43abb4, _0xa4616a, _0x5185bd) => {
  if (loggedin && GlobalCheck() != 1 && !Postal_Opened) {
    try {
      const _0x3e6e93 = {
        mail_pool: _0xbf7e68 = _0xbf7e68.map(_0x231b27 => ({
          ..._0x231b27,
          name: resolveTranslationValue(_0x231b27.name),
          text: resolveTranslationValue(_0x231b27.text)
        })),
        mail_send: _0x260f48,
        mail_get: _0x43abb4,
        last_item_box: 0,
        second_index: 0,
        delete_package: 0,
        can_load_more: _0x52e9c1,
        postal_items: [],
        show_upgrade_hint: _0x5185bd,
        show: true
      };
      main_browser.execute("APPS.state.mailstamp = " + JSON.stringify(_0x3e6e93) + ";");
      Postal_Opened = true;
      if (_0xa4616a) {
        setTimeout(() => {
          const _0xd08007 = language["Заберите посылку"][curr_lang];
          showFocusHints([{
            element: "get-mail-box-0",
            text: _0xd08007,
            infoPosition: ["left"]
          }]);
        }, 1000);
      }
      SwitchHUDToDesign(true);
    } catch (_0x11b8e5) {
      mp.gui.chat.push("Error in Client_OpenPostal: " + _0x11b8e5.message);
    }
  }
});
global.ClosePostal = function (_0x1e918d = true, _0x2beafc = false) {
  if (Postal_Opened && loggedin) {
    if (!_0x1e918d || !!_0x2beafc || !(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      main_browser.execute("APPS.state.mailstamp.show = false;");
      Postal_Opened = false;
      SwitchHUDToDesign(false);
      if (_0x1e918d) {
        mp.events.callRemote("Server_ClosePostal");
      }
    }
  }
};
mp.events.add("Close_Postal", () => ClosePostal(false));
mp.events.add("Client_AppendPostals", _0x4eeed8 => {
  if (!loggedin || !Postal_Opened) {
    return;
  }
  const _0x273f26 = JSON.parse(_0x4eeed8);
  main_browser.execute("APPS.state.mailstamp.mail_pool = APPS.state.mailstamp.mail_pool.concat(" + JSON.stringify(_0x273f26.items) + ");");
  main_browser.execute("APPS.state.mailstamp.can_load_more = " + _0x273f26.can_load_more + ";");
});
mp.events.add("Client_LoadMorePostals", () => {
  if (loggedin && Postal_Opened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadMorePostals");
    }
  }
});
mp.events.add("Client_ClosePostal", () => {
  if (loggedin && Postal_Opened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Client_PostalOpenInventory");
    }
  }
});
mp.events.add("Client_GetMailBox", _0x41d632 => {
  if (Postal_Opened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 700)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetMailBox", _0x41d632);
    }
  }
});
mp.events.add("Client_RequestDeleteMailBox", _0x3e6d5d => {
  if (Postal_Opened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 700)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestDeleteMailBox", _0x3e6d5d);
    }
  }
});
mp.events.add("Client_DeleteMailPackage", _0x4e20b5 => {
  if (Postal_Opened && loggedin) {
    PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
    main_browser.execute("APPS.state.mailstamp.mail_pool = APPS.state.mailstamp.mail_pool.filter(m => m.id !== " + _0x4e20b5 + ");");
    main_browser.execute("APPS.state.mailstamp.mail_get++;");
  }
});
mp.events.add("Client_UpdatePostalMailBox", (_0x5b8b4b, _0x3e3ee0, _0x18bb88) => {
  if (!Postal_Opened || !loggedin) {
    return;
  }
  const _0x964f86 = JSON.stringify({
    items: _0x3e3ee0,
    money: _0x18bb88
  });
  main_browser.execute("{\n        const d = " + _0x964f86 + ";\n        const mail = APPS.state.mailstamp.mail_pool.find(m => m.id === " + _0x5b8b4b + ");\n        if (mail) { mail.items = d.items; mail.money = d.money; }\n    }");
});
mp.events.add("Client_OpenMailItemSelect", () => {
  if (loggedin && Postal_Opened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenMailItemSelect");
    }
  }
});
mp.events.add("Client_PostalItemsSelected", _0x40e8a2 => {
  if (loggedin && Postal_Opened) {
    main_browser.execute("APPS.state.mailstamp.postal_items = " + JSON.stringify(_0x40e8a2) + ";");
  }
});
mp.events.add("Client_SendMailBox", (_0x251b52, _0x3ddc1d) => {
  if (loggedin && Postal_Opened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SendMailBox", _0x251b52, _0x3ddc1d);
    }
  }
});
mp.events.add("Client_MailSentSuccess", () => {
  if (loggedin && Postal_Opened) {
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    main_browser.execute("\n        APPS.state.mailstamp.mail_send++;\n        APPS.state.mailstamp.postal_items = [];\n        this.AppComponents.Mailstamp.page = 'list';\n    ");
  }
});