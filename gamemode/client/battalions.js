global.BattalionsOpened = false;
mp.events.add("Client_OpenBattalionsMenu", (_0x4332a3, _0x465c8c, _0x4af0e4) => {
  if (GlobalCheck() != 1) {
    main_browser.execute("APPS.state.battalions.team = " + _0x4332a3 + ";");
    main_browser.execute("APPS.state.battalions.admin = " + _0x465c8c + ";");
    main_browser.execute("APPS.state.battalions.tournoments = " + _0x4af0e4 + ";");
    main_browser.execute("APPS.state.battalions.show = true;");
    BattalionsOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.CloseBattalions = function () {
  if (BattalionsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.battalions.show = false;");
    BattalionsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_BattalionsCreateTeam", (_0x4146d7, _0xab5e2e) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsCreateTeam", _0x4146d7, _0xab5e2e);
    }
  }
});
mp.events.add("Client_UpdateBattalionsTeam", _0x31e731 => {
  if (BattalionsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.battalions.team = " + _0x31e731);
    if (!_0x31e731) {
      main_browser.execute("APPS.state.battalions.page = 0;");
    }
  }
});
mp.events.add("Client_BattalionsLeaveFromTeam", () => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsLeaveFromTeam");
    }
  }
});
mp.events.add("Client_BattalionsSaveNewChangeTeam", (_0x1fa9eb, _0x209973, _0x13bc79) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsSaveNewChangeTeam", _0x1fa9eb, _0x209973, _0x13bc79);
    }
  }
});
mp.events.add("Client_BattalionsSendVerificationTeam", () => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsSendVerificationTeam");
    }
  }
});
mp.events.add("Client_BattalionsLoadData", (_0x5b1283, _0x51772c = 0) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsLoadData", _0x5b1283, _0x51772c);
    }
  }
});
mp.events.add("Client_BattalionsLoadPagesData", (_0x41db74, _0xca6da3) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    _0xca6da3 = JSON.stringify(_0xca6da3);
    switch (_0x41db74) {
      case 1:
        main_browser.execute("APPS.state.battalions.team_members = " + _0xca6da3);
        break;
      case 2:
        main_browser.execute("APPS.state.battalions.team_transfers = " + _0xca6da3);
        break;
      case 3:
        main_browser.execute("APPS.state.battalions.team_schedule = " + _0xca6da3);
        break;
      case 4:
        main_browser.execute("APPS.state.battalions.news = " + _0xca6da3);
        break;
      case 5:
        main_browser.execute("APPS.state.battalions.results = " + _0xca6da3);
        break;
      case 6:
        main_browser.execute("APPS.state.battalions.transfers = " + _0xca6da3);
        break;
      case 7:
        main_browser.execute("APPS.state.battalions.tournoments_teams = " + _0xca6da3);
    }
  }
});
mp.events.add("Client_BattalionsSetPriviliages", (_0x275dd3, _0x5081b3) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsSetPriviliages", _0x275dd3, _0x5081b3);
    }
  }
});
mp.events.add("Client_BattalionsRemoveFromTeam", _0xdd3241 => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsRemoveFromTeam", _0xdd3241);
    }
  }
});
mp.events.add("Client_BattalionsTransferAction", (_0xedc65c, _0x5a7efd) => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsTransferAction", _0xedc65c, _0x5a7efd);
    }
  }
});
mp.events.add("Client_BattalionsScheduleTakeSlot", _0x475278 => {
  if (BattalionsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BattalionsScheduleTakeSlot", _0x475278);
    }
  }
});