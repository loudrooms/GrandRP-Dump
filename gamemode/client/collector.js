global.PeopleCollectorJobOpened = false;
mp.events.add("Client_PeopleCollectorJobBrowser", (_0x18f70f, _0x54a6db, _0x32cdba, _0x560d87, _0x1e8e26) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  PeopleCollectorJobOpened = true;
  const _0x2e03ee = "{\"debt_count\":" + _0x54a6db + ",\"job\":" + _0x18f70f + ",\"collector_team\":" + _0x32cdba + ",\"pid\":" + _0x560d87 + ",\"level\":" + _0x1e8e26 + ",\"show\":true}";
  main_browser.execute("APPS.state.collector = " + _0x2e03ee);
  mp.gui.cursor.show(true, true);
});
global.ClosePeopleCollectorBrowser = function () {
  if (PeopleCollectorJobOpened) {
    PeopleCollectorJobOpened = false;
    main_browser.execute("APPS.state.collector.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_RentCollectorVehicle", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!PeopleCollectorJobOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RentCollectorVehicle");
  }
});
mp.events.add("Client_KickFromCollectorsTeam", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!PeopleCollectorJobOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_KickFromCollectorsTeam");
  }
});
mp.events.add("Client_LeftFromCollectorsTeam", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!PeopleCollectorJobOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LeftFromCollectorsTeam");
  }
});
mp.events.add("Client_TakeTaskForCollector", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!PeopleCollectorJobOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TakeTaskForCollector");
  }
});
mp.events.add("Client_CloseCollectorDesign", () => {
  ClosePeopleCollectorBrowser();
});
mp.events.add("Client_PeopleCollectorEmployment", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 500) && !!PeopleCollectorJobOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PeopleCollectorJobEvent");
  }
});
mp.events.add("Client_PeopleCollectorJobChangeButton", _0x23782f => {
  main_browser.execute("APPS.state.collector.job = " + _0x23782f);
});
mp.events.add("Client_UpdateCollectorsTeam", _0x315261 => {
  main_browser.execute("APPS.state.collector.collector_team = " + _0x315261);
});
mp.events.add("Client_ShowCollectorsVictimName", _0x2f5af8 => {
  main_browser.execute("APPS.state.hud.collector_victim_name = " + _0x2f5af8);
});