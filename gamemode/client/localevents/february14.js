let februaryBlip;
global.february14Opened = false;
mp.events.add("Client_OpenFebruary14Design", (_0x3ff5d1, _0x1974ca) => {
  if (february14Opened) {
    return;
  }
  const _0x5dbb54 = "{\"quests\":" + JSON.stringify(_0x3ff5d1) + ",\"quests_done\":" + JSON.stringify(_0x1974ca) + ",\"show\":true}";
  main_browser.execute("APPS.state.february14 = " + _0x5dbb54);
  february14Opened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseFebruary14Design", () => {
  CloseFebruary14Design();
});
global.CloseFebruary14Design = function () {
  if (february14Opened) {
    february14Opened = false;
    main_browser.execute("APPS.state.february14.show = false;");
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_Buy14FebruaryCase", _0x431f84 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_Buy14FebruaryCase", _0x431f84);
  }
});
const februaryBlipPosition = new mp.Vector3(-770.062, -18.152, 41.081);
mp.events.add("Client_SetRouteFebruaryQuest", () => {
  if (februaryBlip) {
    februaryBlip.setRoute(false);
    februaryBlip.destroy();
    februaryBlip = undefined;
  }
  februaryBlip = mp.blips.new(75, februaryBlipPosition, {
    name: language["Романтичное задание"][curr_lang],
    scale: 1,
    color: 1,
    drawDistance: 25,
    shortRange: false
  });
  februaryBlip.setRoute(true);
  CloseFebruary14Design();
  ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
});
mp.events.add("Client_CleanFebruaryRoute", () => {
  if (februaryBlip) {
    februaryBlip.setRoute(false);
    februaryBlip.destroy();
    februaryBlip = undefined;
  }
});