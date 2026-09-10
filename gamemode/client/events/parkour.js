let checkpoint;
let shape;
let returnShape;
let blip;
let currentParkour;
let currentReturnShapeIndex;
let preparationInterval;
let eventInterval;
global.bAtParkour = false;
const EVENT_ENTITIES_RADIUS = 4;
const EVENT_DIMENSION = 8888;
const EVENT_TOTAL_TIME = 600000;
const EVENT_DATA = [{
  startPosition: new mp.Vector3(-79.342, -1026.349, 28.357),
  maximumDifference: 2,
  checkpoints: [{
    position: new mp.Vector3(-74.04, -1011.309, 32.233)
  }, {
    position: new mp.Vector3(-106.841, -1004.144, 39.255)
  }, {
    position: new mp.Vector3(-61.197, -1008.904, 46.687)
  }, {
    position: new mp.Vector3(-134.161, -961.713, 54.263)
  }, {
    position: new mp.Vector3(-82.01, -968.777, 64.018)
  }, {
    position: new mp.Vector3(-78.677, -994.887, 74.054)
  }, {
    position: new mp.Vector3(-90.995, -993.787, 104.262)
  }, {
    position: new mp.Vector3(-180.712, -1007.568, 114.136)
  }, {
    position: new mp.Vector3(-184.853, -1022.765, 140.823)
  }, {
    position: new mp.Vector3(-150.217, -1027.808, 158.879)
  }, {
    position: new mp.Vector3(-126.131, -969.421, 173.204)
  }, {
    position: new mp.Vector3(-139.178, -934.988, 190.588)
  }, {
    position: new mp.Vector3(-96.463, -978.492, 206.998)
  }, {
    position: new mp.Vector3(-172.709, -1042.405, 218.981)
  }, {
    position: new mp.Vector3(-193.693, -996.54, 249.95)
  }, {
    position: new mp.Vector3(-169.6, -969.961, 254.134)
  }]
}, {
  startPosition: new mp.Vector3(-597.801, -717.014, 131.04),
  maximumDifference: 20,
  checkpoints: [{
    position: new mp.Vector3(-625.175, -706.673, 122.816)
  }, {
    position: new mp.Vector3(-613.478, -682.132, 131.259)
  }, {
    position: new mp.Vector3(-622.044, -608.355, 126.616)
  }, {
    position: new mp.Vector3(-640.601, -561.49, 128.14)
  }, {
    position: new mp.Vector3(-607.754, -550.387, 144.911)
  }, {
    position: new mp.Vector3(-569.142, -547.3, 146.42)
  }, {
    position: new mp.Vector3(-592.433, -499.207, 140.137)
  }, {
    position: new mp.Vector3(-591.555, -477.451, 129.07)
  }, {
    position: new mp.Vector3(-591.899, -447.131, 117.375)
  }, {
    position: new mp.Vector3(-594.329, -422.676, 105.018)
  }]
}, {
  startPosition: new mp.Vector3(-283.331, -732.167, 123.998),
  maximumDifference: 17,
  checkpoints: [{
    position: new mp.Vector3(-255.554, -742.284, 126.823)
  }, {
    position: new mp.Vector3(-223.09, -746.102, 137.363)
  }, {
    position: new mp.Vector3(-176.426, -748.694, 160.39)
  }, {
    position: new mp.Vector3(-188.604, -712.274, 175.567)
  }, {
    position: new mp.Vector3(-197.584, -722.449, 180.406)
  }, {
    position: new mp.Vector3(-211.784, -725.251, 185.439)
  }, {
    position: new mp.Vector3(-217.144, -731.819, 202.013)
  }, {
    position: new mp.Vector3(-273.598, -707.184, 203.299)
  }, {
    position: new mp.Vector3(-268.478, -702.025, 219.743)
  }, {
    position: new mp.Vector3(-202.393, -725.088, 232.144)
  }]
}];
const PARKOUR_IPLS = ["grand_parkour_2", "grand_parkour_3", "grand_parkour_4"];
function cleanEventVariables() {
  bAtParkour = false;
  currentParkour = undefined;
  currentReturnShapeIndex = undefined;
  cleanParkourEntities();
}
function cleanParkourEntities() {
  if (blip) {
    blip.destroy();
    blip = undefined;
  }
  if (shape) {
    shape.destroy();
    shape = undefined;
  }
  if (checkpoint) {
    checkpoint.destroy();
    checkpoint = undefined;
  }
}
function setEventCheckpoint(_0xeaa8d) {
  if (!currentParkour) {
    return;
  }
  cleanParkourEntities();
  const _0x3b8c30 = EVENT_DATA[currentParkour - 1].checkpoints;
  mp.console.logInfo("checkpointData: " + JSON.stringify(_0x3b8c30));
  currentReturnShapeIndex = _0xeaa8d;
  shape = mp.colshapes.newSphere(_0x3b8c30[_0xeaa8d].position.x, _0x3b8c30[_0xeaa8d].position.y, _0x3b8c30[_0xeaa8d].position.z, 4, mp.players.local.dimension);
  shape.bParkourShape = _0xeaa8d;
  blip = mp.blips.new(1, _0x3b8c30[_0xeaa8d].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 5,
    dimension: 8888
  });
  const _0x798fae = _0x3b8c30[_0xeaa8d + 1] ? new mp.Vector3(_0x3b8c30[_0xeaa8d + 1].position.x, _0x3b8c30[_0xeaa8d + 1].position.y, _0x3b8c30[_0xeaa8d + 1].position.z) : new mp.Vector3(0, 0, 0);
  checkpoint = mp.checkpoints.new(_0x3b8c30[_0xeaa8d + 1] ? 2 : 10, new mp.Vector3(_0x3b8c30[_0xeaa8d].position.x, _0x3b8c30[_0xeaa8d].position.y, _0x3b8c30[_0xeaa8d].position.z - 1), 5, {
    direction: _0x798fae,
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 8888
  });
  blip.setRoute(true);
}
function cleanPreparationInterval() {
  clearInterval(preparationInterval);
  preparationInterval = undefined;
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
}
function clearEventInterval() {
  if (eventInterval != null) {
    clearInterval(eventInterval);
    eventInterval = undefined;
  }
}
function resetEvent() {
  if (Array.isArray(PARKOUR_IPLS[currentParkour - 1])) {
    for (const _0x363481 of PARKOUR_IPLS[currentParkour - 1]) {
      mp.game.streaming.removeIpl(_0x363481);
    }
  } else {
    mp.game.streaming.removeIpl(PARKOUR_IPLS[currentParkour - 1]);
  }
  cleanEventVariables();
  clearEventInterval();
  cleanParkourEntities();
  cleanPreparationInterval();
  mp.players.local.setInvincible(false);
  disablePlayerHandle = false;
  disableWeaponHandle = false;
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
}
mp.events.add("render", () => {
  if (bAtParkour && currentReturnShapeIndex != null) {
    if (currentReturnShapeIndex == 0 && EVENT_DATA[currentParkour - 1].startPosition.z - mp.players.local.position.z > EVENT_DATA[currentParkour - 1].maximumDifference) {
      mp.players.local.position = EVENT_DATA[currentParkour - 1].startPosition;
      UpdatePositionAC();
    } else if (currentReturnShapeIndex > 0 && EVENT_DATA[currentParkour - 1].checkpoints[currentReturnShapeIndex - 1].position.z - mp.players.local.position.z > EVENT_DATA[currentParkour - 1].maximumDifference) {
      mp.players.local.position = EVENT_DATA[currentParkour - 1].checkpoints[currentReturnShapeIndex - 1].position;
      UpdatePositionAC();
    }
  }
});
mp.events.add("playerEnterColshape", _0x50843d => {
  if (_0x50843d.bParkourShape != null) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (_0x50843d.bParkourShape + 1 >= EVENT_DATA[currentParkour - 1].checkpoints.length) {
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_FinishedParkour");
      return;
    }
    setEventCheckpoint(_0x50843d.bParkourShape + 1);
  }
});
mp.events.add("Client_InitializeParkour", (_0x5e20a2, _0x1ab6ab) => {
  if (!_0x1ab6ab) {
    return;
  }
  cleanEventVariables();
  mp.events.call("RemoveWeapon");
  let _0x2af132 = Math.floor(_0x5e20a2 / 1000);
  disablePlayerHandle = true;
  bAtParkour = true;
  disableWeaponHandle = true;
  currentParkour = _0x1ab6ab;
  if (Array.isArray(PARKOUR_IPLS[currentParkour - 1])) {
    for (const _0x18ab8b of PARKOUR_IPLS[currentParkour - 1]) {
      mp.game.streaming.requestIpl(_0x18ab8b);
    }
  } else {
    mp.game.streaming.requestIpl(PARKOUR_IPLS[currentParkour - 1]);
  }
  setEventCheckpoint(0);
  mp.players.local.setInvincible(true);
  preparationInterval = setInterval(() => {
    _0x2af132--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x2af132) + ";");
    if (_0x2af132 <= 0) {
      cleanPreparationInterval();
    }
  }, 1000);
  mp.gui.cursor.show(false, false);
});
mp.events.add("Client_LeaveParkourEvent", () => {
  resetEvent();
});
mp.events.add("Client_StartParkourEvent", () => {
  cleanPreparationInterval();
  clearEventInterval();
  disablePlayerHandle = false;
  let _0xa295b5 = 0;
  eventInterval = setInterval(() => {
    _0xa295b5++;
    ShowDrugLabsDesign("", 0, "", 0, "", 0, "", 0, "", 0, 600 - _0xa295b5, 600000, language.Событие[curr_lang]);
    if (_0xa295b5 == 600) {
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_RequestLeaveParkourEvent");
    }
  }, 1000);
});