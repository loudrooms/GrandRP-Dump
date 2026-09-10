const EVENT_RADIUS = 100;
let eventMarker;
let eventZone;
let eventColshape;
mp.events.add("Client_CreateGovhackEntities", _0x470a71 => {
  if (eventZone && mp.blips.exists(eventMarker)) {
    eventZone.destroy();
    eventZone = undefined;
  }
  if (eventColshape && mp.colshapes.exists(eventColshape)) {
    eventColshape.destroy();
    eventColshape = undefined;
  }
  eventZone = mp.blips.new(zone_blips, new mp.Vector3(_0x470a71.x, _0x470a71.y, _0x470a71.z), {
    radius: parseFloat(100),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
  eventColshape = mp.colshapes.newSphere(_0x470a71.x, _0x470a71.y, _0x470a71.z, 100);
  eventColshape.bGovhack = true;
});
mp.events.add("Client_ClearGovhackEntites", () => {
  if (eventZone && mp.blips.exists(eventZone)) {
    eventZone.destroy();
    eventZone = undefined;
  }
  if (eventColshape && mp.colshapes.exists(eventColshape)) {
    eventColshape.destroy();
    eventColshape = undefined;
  }
});
mp.events.add("Client_DestroyGovhackSatellite", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseDrugLabsInformation();
      mp.events.callRemote("Server_DestroyGovhackSatellite");
    }
  }
});
mp.events.add("playerEnterColshape", _0x2e1c45 => {
  if (_0x2e1c45.bGovhack) {
    mp.events.call("Client_Theft_Notify", language["Взлом данных"][curr_lang], language["Будьте осторожны здесь происходит террористическая атака на данные штата"][curr_lang]);
  }
});