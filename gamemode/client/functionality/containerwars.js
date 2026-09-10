function updateContainerData(_0x36b89e) {
  main_browser.execute("this.AppComponents.containerAuction.setContainerData(" + JSON.stringify(_0x36b89e) + ")");
}
global.openedContainerWarDesign = false;
global.atContainerWar = 0;
mp.events.add("Client_OpenContainerWarDesign", (_0xe6d5d5, _0x220eb4, _0x497f62, _0x170c21) => {
  if (loggedin && !chatActive && !openedContainerWarDesign && atContainerWar) {
    updateContainerData(_0xe6d5d5);
    main_browser.execute("APPS.state.containerAuction.timeleft = " + _0x220eb4 + ";");
    main_browser.execute("APPS.state.containerAuction.pid = " + _0x497f62 + ";");
    main_browser.execute("APPS.state.containerAuction.vehicle = '" + _0x170c21 + "';");
    main_browser.execute("APPS.state.containerAuction.show = true;");
    openedContainerWarDesign = true;
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
global.closeContainerWarsDesign = function () {
  if (openedContainerWarDesign) {
    main_browser.execute("APPS.state.containerAuction.show = false;");
    openedContainerWarDesign = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseContainerWarsDesign", () => {
  closeContainerWarsDesign();
});
mp.events.add("Client_UpdateContainerData", _0x4556e9 => {
  updateContainerData(_0x4556e9);
});
mp.events.add("Client_ContainerInteract", (_0x1fd073, _0x12ec24 = false) => {
  if (_0x1fd073) {
    mp.events.call("Client_playSound", "SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    main_browser.execute("APPS.state.hud.interact = true;");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atContainerWar = _0x1fd073;
  if (_0x12ec24) {
    closeContainerWarsDesign();
  }
});
mp.events.add("Client_BetContainer", (_0x74c2e7, _0x49e651) => {
  if (openedContainerWarDesign && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BetContainer", _0x74c2e7, _0x49e651);
    }
  }
});