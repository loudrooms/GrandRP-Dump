global.OfficeOpened = false;
mp.events.add("Client_OpenOfficeCorrect", (_0x41799e, _0x149ba5, _0x4c9b7f, _0x52d169, _0x378283, _0x257681, _0x313f07) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x27648a = "{\"offices_opened\":false,\"offices\":[],\"name\":'" + _0x41799e + "',\"office_level\":" + _0x149ba5 + ",\"other_office\":" + _0x4c9b7f + ",\"quests_completed\":[" + _0x52d169 + "],\"quests\":[" + _0x378283 + "],\"quest_price\":" + _0x257681 + ",\"days\":" + _0x313f07 + ",\"office_logs\":undefined,\"show\":true}";
  main_browser.execute("APPS.state.office = " + _0x27648a);
  OfficeOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_UpdateOfficeLevel", _0x438947 => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.office_level = " + _0x438947);
  }
});
mp.events.add("Client_LoadMoreOfficesCertain", _0xfd7f4c => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.offices = " + JSON.stringify(_0xfd7f4c));
  }
});
mp.events.add("Client_LoadMoreOfficesSuccess", _0x2f8aad => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.offices = APPS.state.office.offices.concat(" + JSON.stringify(_0x2f8aad) + ")");
    main_browser.execute("APPS.state.office.offices_opened = true;");
  }
});
mp.events.add("Client_UpdateOfficeDays", _0x54ffa3 => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.days = " + _0x54ffa3);
  }
});
mp.events.add("Client_UpdateOfficeContract", _0x3da98f => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.other_office = " + _0x3da98f);
    main_browser.execute("APPS.state.office.offices_opened = false;");
    main_browser.execute("APPS.state.office.offices = [];");
  }
});
global.CloseOffice = function () {
  if (OfficeOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.office.show = false;");
    OfficeOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (is_easter && need_to_back_easter_event) {
      ReturnEasterEventMenu();
    }
  }
};
mp.events.add("Client_BuyOfficeLevel", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyOffice");
  }
});
mp.events.add("Client_ChangeOfficeName", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChangeOfficeName");
  }
});
mp.events.add("Client_OpenOtherOffices", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenOtherOffices");
  }
});
mp.events.add("Client_LoadMoreOffices", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadMoreOffices");
  }
});
mp.events.add("Client_SearchCertainOffice", _0x172523 => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SearchCertainOffice", _0x172523);
  }
});
mp.events.add("Client_ChangeOfficeTax", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChangeOfficeTax");
  }
});
mp.events.add("Client_GetOfficeLogs", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetOfficeLogs");
  }
});
mp.events.add("Client_LoadOfficeLogs", _0x5f2c67 => {
  if (OfficeOpened) {
    main_browser.execute("APPS.state.office.office_logs = " + JSON.stringify(_0x5f2c67) + ";");
  }
});
mp.events.add("Client_PayForOffice", () => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PayForOffice");
  }
});
mp.events.add("Client_ContractOffice", _0x3a9e89 => {
  if (!!OfficeOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ContractOffice", _0x3a9e89);
  }
});