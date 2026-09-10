global.StateObjOpened = false;
mp.events.add("Client_ShowStateObj", (_0x5487f3, _0x42efcb, _0x641334, _0x1f8211, _0x3f4643) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x54c6d5 = "{\"percents\":" + _0x5487f3 + ",\"owner\":'" + _0x42efcb + "',\"balance\":" + _0x641334 + ",\"is_owner\":" + _0x1f8211 + ",\"gang\":" + _0x3f4643 + ",\"show\":true}";
  main_browser.execute("APPS.state.stateobj = " + _0x54c6d5);
  StateObjOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseStateObj = function () {
  if (StateObjOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.stateobj.show = false;");
    StateObjOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseStateObj", () => {
  CloseStateObj();
});
mp.events.add("Client_CollectProfitStateObj", () => {
  if (StateObjOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CollectProfitStateObj");
    }
  }
});
mp.events.add("Client_DamageStateObj", () => {
  if (StateObjOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DamageStateObj");
    }
  }
});
mp.events.add("Client_RepairStateObj", () => {
  if (StateObjOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RepairStateObj");
    }
  }
});
mp.events.add("Client_UpdateStateObjBalance", _0x2acf83 => {
  if (StateObjOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.stateobj.balance = " + _0x2acf83);
  }
});
global.at_state_obj = false;
mp.events.add("Client_StateObjInteract", _0xed5f68 => {
  if (_0xed5f68 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_state_obj = _0xed5f68;
});
mp.events.add("Client_OpenAvailableStateObj", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenAvailableStateObj");
    }
  }
});