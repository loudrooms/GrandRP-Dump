global.bAtDriftEvent = false;
const EVENT_DIMENSION = 8001;
let preparationInterval;
let playerScoreData;
let eventZoneBlip;
let eventColshape;
let exitInterval;
const EVENT_DATA = [{
  position: new mp.Vector3(978.163, -3115.026, 5.901),
  radius: 200
}, {
  position: new mp.Vector3(-398.339, 1234.094, 325.636),
  radius: 400,
  minusZCoord: 150
}, {
  position: new mp.Vector3(-184.846, 6291.939, 31.488),
  radius: 250
}, {
  position: new mp.Vector3(-127.145, -2009.41, 18.605),
  radius: 200
}, {
  position: new mp.Vector3(-1053.27, 575.11, 102.847),
  radius: 300
}];
const EVENT_RADIUS = 200;
function cleanEventEntities() {
  if (eventZoneBlip && mp.blips.exists(eventZoneBlip)) {
    eventZoneBlip.destroy();
    eventZoneBlip = undefined;
  }
  if (eventColshape && mp.colshapes.exists(eventColshape)) {
    eventColshape.destroy();
    eventColshape = undefined;
  }
}
function cleanPreparationInterval() {
  clearInterval(preparationInterval);
  preparationInterval = undefined;
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
}
function cleanExitInterval() {
  if (exitInterval != null) {
    clearInterval(exitInterval);
    exitInterval = undefined;
  }
}
mp.events.add("Client_InitializeDriftEvent", (_0xc67457, _0x595575) => {
  if (!_0x595575) {
    return;
  }
  let _0x3420ad = Math.floor(_0xc67457 / 1000);
  disableVehicleHandle = true;
  disableVehicleExit = true;
  preparationInterval = setInterval(() => {
    _0x3420ad--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x3420ad) + ";");
    if (_0x3420ad <= 0) {
      cleanPreparationInterval();
    }
  }, 1000);
  bAtDriftEvent = true;
  eventColshape = mp.colshapes.newCircle(EVENT_DATA[_0x595575 - 1].position.x, EVENT_DATA[_0x595575 - 1].position.y, EVENT_DATA[_0x595575 - 1].radius, 8001);
  eventColshape.bDriftEvent = true;
  eventZoneBlip = mp.blips.new(zone_blips, new mp.Vector3(EVENT_DATA[_0x595575 - 1].position.x, EVENT_DATA[_0x595575 - 1].position.y, 0), {
    radius: parseFloat(EVENT_DATA[_0x595575 - 1].radius),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
  mp.gui.cursor.show(false, false);
  disableVehicleCollision();
  setTimeout(() => {
    if (bAtDriftEvent) {
      disableVehicleCollision();
    }
  }, 2000);
});
mp.events.add("Client_StartDriftEvent", () => {
  cleanPreparationInterval();
  disableVehicleHandle = false;
  mp.events.call("Client_EnableDriftScoreForce");
  if (bAtDriftEvent) {
    disableVehicleCollision();
  }
});
mp.events.add("Client_UpdateDriftData", (_0x5f1946, _0x45d0ff) => {
  ShowDrugLabsDesign(_0x5f1946[0]?.name ?? "", _0x5f1946[0]?.score ?? 0, _0x5f1946[1]?.name ?? "", _0x5f1946[1]?.score ?? 0, _0x5f1946[2]?.name ?? "", _0x5f1946[2]?.score ?? 0, _0x5f1946[3]?.name ?? "", _0x5f1946[3]?.score ?? 0, _0x5f1946[4]?.name ?? "", _0x5f1946[4]?.score ?? 0, _0x45d0ff / 1000, 600, language.Событие[curr_lang]);
});
mp.events.add("Client_FinishDriftEvent", () => {
  cleanPreparationInterval();
  cleanExitInterval();
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  bAtDriftEvent = false;
  cleanEventEntities();
  disableVehicleExit = false;
  disableVehicleHandle = false;
});
mp.events.add("playerEnterColshape", _0x23e4f1 => {
  if (_0x23e4f1.bDriftEvent && bAtDriftEvent) {
    cleanExitInterval();
  }
});
const TIME_TO_EXIT = 5;
function disableVehicleCollision() {
  if (mp.players.local.vehicle) {
    mp.vehicles.forEachInStreamRange(_0x9e6292 => {
      mp.players.local.vehicle.setNoCollision(_0x9e6292.handle, false);
      _0x9e6292.setNoCollision(mp.players.local.vehicle.handle, false);
      _0x9e6292.setAlpha(230);
    });
  }
}
mp.events.add("playerExitColshape", _0x5ee35c => {
  if (_0x5ee35c.bDriftEvent && bAtDriftEvent) {
    cleanExitInterval();
    let _0x5f2733 = 5;
    exitInterval = setInterval(() => {
      if (_0x5f2733 > 0) {
        mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x5f2733), false, 0, 6);
        _0x5f2733--;
      } else if (_0x5f2733 <= 0) {
        mp.events.callRemote("Server_RequestLeaveDriftEvent");
        cleanExitInterval();
      }
    }, 1000);
  }
});
mp.events.add("entityStreamIn", _0xe6d5ca => {
  if (_0xe6d5ca != null && _0xe6d5ca && mp.vehicles.exists(_0xe6d5ca) && _0xe6d5ca.type === "vehicle" && bAtDriftEvent && mp.players.local.vehicle) {
    mp.players.local.vehicle.setNoCollision(_0xe6d5ca.handle, false);
    _0xe6d5ca.setNoCollision(mp.players.local.vehicle.handle, false);
    _0xe6d5ca.setAlpha(230);
  }
});