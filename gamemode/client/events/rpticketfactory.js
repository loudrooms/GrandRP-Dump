let RPFactoryInterval;
let RPFactoryBlip;
const EventPosition = new mp.Vector3(842.213, -2338.646, 30.317);
let RPFactoryBlipZone;
const RPTICKET_FACTORY_RADIUS = 150;
let RPFactoryNPCBlip;
mp.events.add("Client_StartRPFactoryCapture", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_StartRPFactoryCapture");
  }
});
mp.events.add("Client_StartExitFromRPFactory", () => {
  let _0x18842b = 5;
  RPFactoryInterval = setInterval(() => {
    if (_0x18842b > 0) {
      mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x18842b), false, 0, 6);
      _0x18842b--;
    } else if (_0x18842b <= 0) {
      mp.events.callRemote("Server_EndExitFromRPFactory");
      if (RPFactoryInterval != null) {
        clearInterval(RPFactoryInterval);
      }
      RPFactoryInterval = undefined;
    }
  }, 1000);
});
mp.events.add("Client_ClearExitFromRPFactory", () => {
  if (RPFactoryInterval != null) {
    clearInterval(RPFactoryInterval);
    RPFactoryInterval = undefined;
  }
});
mp.events.add("Client_CreateRPFactoryBlip", () => {
  if (RPFactoryBlipZone) {
    RPFactoryBlipZone.destroy();
    RPFactoryBlipZone = undefined;
  }
  RPFactoryBlipZone = mp.blips.new(zone_blips, new mp.Vector3(881.417, -2433.135, 28.09), {
    radius: parseFloat(150),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_DestroyRPFactoryBlip", () => {
  if (RPFactoryBlip) {
    RPFactoryBlip.destroy();
    RPFactoryBlip = undefined;
  }
  if (RPFactoryBlipZone) {
    RPFactoryBlipZone.destroy();
    RPFactoryBlipZone = undefined;
  }
});
mp.events.add("Client_OpenRPFactroyStats", (_0x40bdc6, _0x568b88) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x38f8ed = "{\"fam_info\":" + JSON.stringify(_0x40bdc6) + ",\"bizid\":0,\"biz_name\":'',\"fam_winner\":'" + _0x568b88 + "',\"war_type\":2,\"show\":true}";
  main_browser.execute("APPS.state.business_war = " + _0x38f8ed);
  FamilyBizWarStatsOpened = true;
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_SetRouteToRPfactory", () => {
  if (RPFactoryNPCBlip) {
    RPFactoryNPCBlip.destroy();
    RPFactoryNPCBlip = undefined;
  }
  RPFactoryNPCBlip = mp.blips.new(110, EventPosition, {
    name: "RP Factory",
    scale: 1,
    color: 27,
    drawDistance: 25,
    shortRange: false
  });
  if (RPFactoryNPCBlip) {
    RPFactoryNPCBlip.setRoute(true);
  }
  CloseEventMenu();
  ShowNotification(language["Отправляйтесь к указанной точке на карте"][curr_lang], 2);
});