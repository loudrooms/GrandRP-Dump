let stateControlExitInterval;
function cleanStateControlExitInterval() {
  if (stateControlExitInterval != null) {
    clearInterval(stateControlExitInterval);
    stateControlExitInterval = undefined;
  }
}
global.stateControlOpened = false;
mp.events.add("Client_RequestOpenStateControl", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestOpenStateControl");
  }
});
global.closeStateControlDesign = function () {
  if (stateControlOpened) {
    main_browser.execute("APPS.state.stateControl.show = false;");
    stateControlOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_OpenStateControl", (_0x4782e9, _0x3db141, _0x504697, _0x3f71f8) => {
  if (!stateControlOpened && !!loggedin && !chatActive) {
    CloseFamilyMenu();
    main_browser.execute("this.AppComponents.stateControl.setControlledCells(" + JSON.stringify(_0x4782e9) + ")");
    main_browser.execute("APPS.state.stateControl.myFam = " + JSON.stringify(_0x3db141) + ";");
    main_browser.execute("APPS.state.stateControl.attackInfo = " + JSON.stringify(_0x504697) + ";");
    main_browser.execute("APPS.state.stateControl.serverTime = " + _0x3f71f8 + ";");
    main_browser.execute("APPS.state.stateControl.hideTerritoriesAvatars = " + mp.storage.data.hideStateControlAvatars + ";");
    main_browser.execute("APPS.state.stateControl.language = " + baseLang + ";");
    main_browser.execute("APPS.state.stateControl.show = true;");
    stateControlOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.addProc("Client_RequestFamName", async _0x58aff9 => {
  const _0x211268 = await mp.events.callRemoteProc("Server_RequestFamName", _0x58aff9);
  if (_0x211268.famName) {
    return _0x211268.famName;
  }
});
mp.events.addProc("Client_RequestFamNamesTop", async _0x35191c => {
  const _0x83bfd5 = await mp.events.callRemoteProc("Server_RequestFamNamesTop", _0x35191c);
  if (_0x83bfd5.famNames) {
    return JSON.stringify(_0x83bfd5.famNames);
  }
});
mp.events.add("Client_CleanExitTimerStateControl", () => {
  cleanStateControlExitInterval();
});
mp.events.add("Client_StartExitTimerStateControl", () => {
  cleanStateControlExitInterval();
  let _0xebdf21 = 5;
  stateControlExitInterval = setInterval(() => {
    if (_0xebdf21 > 0) {
      mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0xebdf21), false, 0, 6);
      _0xebdf21--;
    } else if (_0xebdf21 <= 0) {
      mp.events.callRemote("Server_ExitFromStateControl");
      cleanStateControlExitInterval();
    }
  }, 1000);
});
mp.events.add("Client_RequestStateControlHistory", () => {
  if (loggedin && !chatActive && stateControlOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestStateControlHistory");
    }
  }
});
mp.events.add("Client_UpdateStateControlHistory", _0x4b858b => {
  main_browser.execute("APPS.state.stateControl.history = " + JSON.stringify(_0x4b858b) + ";");
});
mp.events.add("Client_RequestTeleportToAttackedTerritory", _0x4510c9 => {
  if (loggedin && !chatActive && stateControlOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestTeleportToAttackedTerritory", _0x4510c9);
    }
  }
});
mp.events.add("Client_RequestAttackTerritory", _0x1529c2 => {
  if (loggedin && !chatActive && stateControlOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestAttackStateTerritory", _0x1529c2);
    }
  }
});
mp.events.add("Client_OpenFamilyMenu", () => {
  closeStateControlDesign();
  mp.events.callRemote("Server_OpenFamilyMenu");
});
mp.events.add("Client_CloseStateControl", () => {
  closeStateControlDesign();
});
global.bAtStateControl = false;
mp.events.add("Client_SetAtStateControlVariable", _0x1601cc => {
  bAtStateControl = _0x1601cc;
});
mp.events.add("Client_ShowStateControlTimer", (_0x45be4f, _0x1927f5, _0x25592e) => {
  main_browser.execute("APPS.state.hud.stateControlTimer = true;\n        APPS.state.hud.defenceFam = " + JSON.stringify(_0x1927f5) + ";\n        APPS.state.hud.attackFam = " + JSON.stringify(_0x45be4f) + ";\n        APPS.state.hud.stateControlTimeleft = " + _0x25592e + ";\n    ");
});
mp.events.add("Client_CleanStateControlTimer", () => {
  main_browser.execute("APPS.state.hud.stateControlTimer = false;");
});
global.bStateControlStats = false;
let stateControlWinner;
let stateControlKillListData = [];
mp.events.add("Client_UpdateStateControlStats", (_0x1867fd, _0x2885a9) => {
  bStateControlStats = true;
  stateControlKillListData = _0x1867fd;
  stateControlWinner = _0x2885a9;
  ShowNotification(TranslateText("Увидеть итоги события можно нажав клавишу J"), 2);
  setTimeout(() => {
    bStateControlStats = false;
    stateControlKillListData = [];
    stateControlWinner = undefined;
  }, 60000);
});
global.showStateControlStats = function () {
  openEventStatistics(stateControlKillListData, stateControlWinner, 10);
  bStateControlStats = false;
};
mp.events.add("Client_UpdateStateControlAvatarsStatus", _0x56b65c => {
  mp.storage.data.hideStateControlAvatars = _0x56b65c;
});