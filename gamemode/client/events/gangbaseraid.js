const EVENT_RADIUS = 100;
const EVENT_DIMENSION = 1001;
const EVENT_POSITIONS = [{
  position: new mp.Vector3(100.531, -1936.232, 20.804)
}, {
  position: new mp.Vector3(-183.632, -1624.437, 33.531)
}, {
  position: new mp.Vector3(-1104.401, -1626.292, 4.394)
}, {
  position: new mp.Vector3(419.283, -1528.694, 29.274)
}, {
  position: new mp.Vector3(835.807, -2129.037, 29.45)
}];
let eventMarker;
let eventMarker1001;
let eventExitInterval;
let eventZone;
if (curr_lang == "ru") {
  EVENT_POSITIONS[2].position = new mp.Vector3(1395.411, -1525.793, 57.67);
}
mp.events.add("Client_CreateGangBaseRaidEntities", _0x54f651 => {
  const _0x3febaa = EVENT_POSITIONS[_0x54f651].position;
  eventMarker = mp.markers.new(1, new mp.Vector3(_0x3febaa.x, _0x3febaa.y, _0x3febaa.z - 60), 200, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  eventMarker1001 = mp.markers.new(1, new mp.Vector3(_0x3febaa.x, _0x3febaa.y, _0x3febaa.z - 60), 200, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 1001
  });
  eventZone = mp.blips.new(zone_blips, new mp.Vector3(_0x3febaa.x, _0x3febaa.y, _0x3febaa.z), {
    radius: parseFloat(100),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_ClearGangBaseRaidEntities", () => {
  if (eventMarker) {
    eventMarker.destroy();
    eventMarker = undefined;
  }
  if (eventMarker1001) {
    eventMarker1001.destroy();
    eventMarker1001 = undefined;
  }
  if (eventZone) {
    eventZone.destroy();
    eventZone = undefined;
  }
});
mp.events.add("Client_StartExitFromGangbaseRaid", () => {
  let _0x221d97 = 5;
  eventExitInterval = setInterval(() => {
    if (_0x221d97 > 0) {
      mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x221d97), false, 0, 6);
      _0x221d97--;
    } else if (_0x221d97 <= 0) {
      mp.events.callRemote("Server_EndExitFromGangbaseRaid");
      if (eventExitInterval != null) {
        clearInterval(eventExitInterval);
      }
      eventExitInterval = undefined;
    }
  }, 1000);
});
mp.events.add("Client_OpenGangbaseRaidStats", (_0x3228fc, _0x341e99, _0x458d4c) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x3b5e72 = "{\"fam_info\":" + JSON.stringify(_0x3228fc) + ",\"bizid\":0,\"biz_name\":'',\"fam_winner\":'" + _0x341e99 + "',\"war_type\":9,\"defender\":'" + _0x458d4c + "',\"show\":true}";
  main_browser.execute("APPS.state.business_war = " + _0x3b5e72);
  FamilyBizWarStatsOpened = true;
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_ClearExitFromGangbaseRaid", () => {
  if (eventExitInterval != null) {
    clearInterval(eventExitInterval);
    eventExitInterval = undefined;
  }
});