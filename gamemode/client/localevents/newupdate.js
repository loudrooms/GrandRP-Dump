global.NewUpdateShowcaseOpened = false;
mp.events.add("Client_ShowNewUpdate", () => {
  if (GlobalCheck() != 1) {
    ReturnNewUpdateMenu();
  }
});
global.CloseNewUpdateShowcase = function (_0x2604b1 = false) {
  if (NewUpdateShowcaseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.newupdate.show = false;");
    NewUpdateShowcaseOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (!_0x2604b1) {
      mp.events.callRemote("Server_ShowNextEnterDesign", 11);
    }
  }
};
global.need_to_back_newupdate_showcase = false;
mp.events.add("Client_GotoContainers", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseNewUpdateShowcase(true);
    need_to_back_newupdate_showcase = true;
    mp.events.callRemote("Server_GoToCertainCaseThroughMenu", 70);
  }
});
global.ReturnNewUpdateMenu = function () {
  need_to_back_newupdate_showcase = false;
  main_browser.execute("APPS.state.newupdate = {\"show\":true}");
  NewUpdateShowcaseOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
};