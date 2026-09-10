global.kpkOpen = false;
global.street_hash = "None";
let blipinfo;
let driverblip;
let alarm_blip;
let alarm_colshape;
let alarm_blip2;
let alarm_colshape2;
let kpk_preloader = 0;
mp.events.add("ClientOpenKPK", (_0x4ec9df, _0x1f2745) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  kpkOpen = true;
  mp.gui.cursor.show(true, true);
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  let _0x18ea22 = [];
  const _0xfc1234 = _0x1257c1 => {
    if (!_0x1257c1 && _0x1257c1 !== 0) {
      return "";
    }
    if (typeof resolveTranslationValue == "function") {
      if (typeof _0x1257c1 == "string" && _0x1257c1.startsWith("[")) {
        try {
          return resolveTranslationValue(JSON.parse(_0x1257c1));
        } catch (_0x1d29c4) {
          return resolveTranslationValue(_0x1257c1);
        }
      }
      if (_0x1257c1.includes(",") && /\{[0-9]+\}/.test(_0x1257c1.split(",")[0])) {
        const _0x3209e5 = _0x1257c1.indexOf(",");
        return resolveTranslationValue([_0x1257c1.slice(0, _0x3209e5).trim(), _0x1257c1.slice(_0x3209e5 + 1).trim()]);
      }
      return resolveTranslationValue(_0x1257c1);
    }
    return _0x1257c1;
  };
  for (let _0x7b5aa6 = 0; _0x7b5aa6 < _0x4ec9df.length; _0x7b5aa6++) {
    let _0x1a83bf = _0x4ec9df[_0x7b5aa6].split("|");
    const _0x36b53c = _0xfc1234(_0x1a83bf[5] || "");
    _0x18ea22.push("{\"name\": \"" + _0x1a83bf[0].replace("_", " ") + "\",\"distance\": " + mp.game.system.vdist(parseFloat(_0x1a83bf[1]), parseFloat(_0x1a83bf[2]), parseFloat(_0x1a83bf[3]), localplayer.position.x, localplayer.position.y, localplayer.position.z).toFixed(1) + ",\"discription\":" + JSON.stringify(_0x36b53c) + ",\"is_robbery\":" + _0x1a83bf[6] + ",\"phone\":" + _0x1a83bf[7] + "}");
  }
  main_browser.execute("APPS.state.kpk.infoplayerPage = 0;");
  main_browser.execute("APPS.state.kpk.preloader = " + kpk_preloader + ";");
  if (kpk_preloader == 0) {
    setTimeout(() => {
      kpk_preloader = 1;
      main_browser.execute("APPS.state.kpk.preloader = " + kpk_preloader + ";");
    }, 3000);
  }
  main_browser.execute("APPS.state.kpk.orderpeople = [" + _0x18ea22 + "]");
  main_browser.execute("APPS.state.kpk.member = " + local_member);
  main_browser.execute("APPS.state.kpk.rank = " + _0x1f2745);
  main_browser.execute("APPS.state.kpk.suspectedlicdata = '';");
  main_browser.execute("APPS.state.kpk.content = 3;");
  main_browser.execute("APPS.state.kpk.kpkinaction = false;");
  main_browser.execute("APPS.state.kpk.show = true;");
});
mp.events.add("Client_LoadPDABlacklist", _0x19c262 => {
  main_browser.execute("APPS.state.kpk.blacklist = " + _0x19c262 + ";");
});
mp.events.add("Client_RequestPDABlacklist", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestPDABlacklist");
  }
});
mp.events.add("Client_LoadHoveringInfo", _0x29107a => {
  let _0xf4bfcf = [];
  for (let _0x2eff4a = 0; _0x2eff4a < _0x29107a.length; _0x2eff4a++) {
    let _0x1560c6 = _0x29107a[_0x2eff4a].split(",");
    _0xf4bfcf.push("{\"name\": \"" + _0x1560c6[0].replace("_", " ") + "\",\"distance\": " + mp.game.system.vdist(parseFloat(_0x1560c6[1]), parseFloat(_0x1560c6[2]), parseFloat(_0x1560c6[3]), localplayer.position.x, localplayer.position.y, localplayer.position.z).toFixed(1) + ",\"wanted\":" + _0x1560c6[4] + ",\"super_wanted\":" + _0x1560c6[5] + "}");
  }
  main_browser.execute("APPS.state.kpk.hovering = [" + _0xf4bfcf + "]");
});
mp.events.add("Client_RequestHoveringInfo", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestHoveringInfo");
  }
});
mp.events.add("Client_RequestPDAInfo", _0x4f3196 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestPDAInfo", _0x4f3196);
  }
});
mp.events.add("Client_LoadPDAWantedPeopleInfo", _0x4d9e9a => {
  if (!kpkOpen) {
    return;
  }
  let _0x1b42d6 = [];
  for (let _0x1f29a8 = 0; _0x1f29a8 < _0x4d9e9a.length; _0x1f29a8++) {
    let _0x5a8873 = _0x4d9e9a[_0x1f29a8].split(",");
    _0x1b42d6.push("{\"name\": \"" + _0x5a8873[0].replace("_", " ") + "\",\"location\": \"" + _0x5a8873[1] + "\",\"wanted\":" + _0x5a8873[2] + ",\"super_wanted\":" + _0x5a8873[3] + "}");
  }
  main_browser.execute("APPS.state.kpk.orderwanted = [" + _0x1b42d6 + "]");
});
mp.events.add("Client_LoadPDAWantedVehicleInfo", _0x20ac71 => {
  if (!kpkOpen) {
    return;
  }
  let _0x535ecf = [];
  for (let _0x1d060f = 0; _0x1d060f < _0x20ac71.length; _0x1d060f++) {
    let _0x5f1459 = _0x20ac71[_0x1d060f].split(",");
    _0x535ecf.push("{\"name\": \"" + mp.game.vehicle.getDisplayNameFromVehicleModel(parseInt(_0x5f1459[0])) + "\",\"location\": \"" + _0x5f1459[1] + "\",\"owner\":\"" + _0x5f1459[2] + "\"}");
  }
  main_browser.execute("APPS.state.kpk.ordervehicle = [" + _0x535ecf + "]");
});
mp.events.add("ReloadBlackListKPK", _0x35d276 => {
  if (kpkOpen) {
    main_browser.execute("APPS.state.kpk.blacklist = " + _0x35d276 + ";");
  }
  if (LeaderMenuOpened) {
    mp.events.callRemote("Server_LoadMemberBlacklist");
  }
});
mp.events.add("ReloadPlayerOrders", _0x50e49e => {
  if (!kpkOpen) {
    return;
  }
  let _0x105418 = [];
  for (let _0x2fee92 = 0; _0x2fee92 < _0x50e49e.length; _0x2fee92++) {
    let _0x66f3f5 = _0x50e49e[_0x2fee92].split("|");
    let _0x5f088d = _0x66f3f5[5] || "";
    if (typeof resolveTranslationValue == "function") {
      if (typeof _0x5f088d == "string" && _0x5f088d.startsWith("[")) {
        try {
          _0x5f088d = resolveTranslationValue(JSON.parse(_0x5f088d));
        } catch (_0x563e7c) {
          _0x5f088d = resolveTranslationValue(_0x5f088d);
        }
      } else if (_0x5f088d.includes(",") && /\{[0-9]+\}/.test(_0x5f088d.split(",")[0])) {
        const _0x47e67d = _0x5f088d.indexOf(",");
        _0x5f088d = resolveTranslationValue([_0x5f088d.slice(0, _0x47e67d).trim(), _0x5f088d.slice(_0x47e67d + 1).trim()]);
      } else {
        _0x5f088d = resolveTranslationValue(_0x5f088d);
      }
    }
    _0x105418.push("{\"name\": \"" + _0x66f3f5[0].replace("_", " ") + "\",\"distance\": " + mp.game.system.vdist(parseFloat(_0x66f3f5[1]), parseFloat(_0x66f3f5[2]), parseFloat(_0x66f3f5[3]), localplayer.position.x, localplayer.position.y, localplayer.position.z).toFixed(1) + ",\"discription\":" + JSON.stringify(_0x5f088d) + ",\"is_robbery\":" + _0x66f3f5[6] + "}");
  }
  main_browser.execute("APPS.state.kpk.orderpeople = [" + _0x105418 + "]");
});
mp.events.add("ReloadVehicleOrders", _0x4e5554 => {
  if (!kpkOpen) {
    return;
  }
  let _0x4f60fe = [];
  for (let _0x56e082 = 0; _0x56e082 < _0x4e5554.length; _0x56e082++) {
    let _0x385f92 = _0x4e5554[_0x56e082].split(",");
    _0x4f60fe.push("{\"name\": \"" + mp.game.vehicle.getDisplayNameFromVehicleModel(parseInt(_0x385f92[0])) + "\",\"location\": \"" + _0x385f92[1] + "\",\"owner\":\"" + _0x385f92[2] + "\"}");
  }
  main_browser.execute("APPS.state.kpk.ordervehicle = [" + _0x4f60fe + "]");
});
mp.events.add("ReloadWantedOrders", _0x12432c => {
  if (!kpkOpen) {
    return;
  }
  let _0x3a457f = [];
  for (let _0x179350 = 0; _0x179350 < _0x12432c.length; _0x179350++) {
    let _0x250cdd = _0x12432c[_0x179350].split(",");
    _0x3a457f.push("{\"name\": \"" + _0x250cdd[0].replace("_", " ") + "\",\"location\": \"" + _0x250cdd[1] + "\",\"wanted\":" + _0x250cdd[2] + "}");
  }
  main_browser.execute("APPS.state.kpk.orderwanted = [" + _0x3a457f + "]");
});
mp.events.add("LoadKPKCrime", _0x434fca => {
  let _0xe8e732 = [];
  for (let _0x19b31a = 0; _0x19b31a < _0x434fca.length; _0x19b31a++) {
    let _0xf405ac = _0x434fca[_0x19b31a].split(",");
    _0xe8e732.push("{\"id\":" + _0xf405ac[0] + ",\"name\": \"" + _0xf405ac[1].replace("_", " ") + "\",\"wanted\":" + _0xf405ac[2] + ",\"discription\":\"" + _0xf405ac[3] + "\"}");
  }
  main_browser.execute("APPS.state.kpk.previouscrime = [" + _0xe8e732 + "]");
  main_browser.execute("APPS.state.kpk.infoplayerPage = 1;");
});
mp.events.add("Client_DeletePreviousCrimeData", _0x58f5e4 => {
  main_browser.execute("APPS.state.kpk.crime_delete_id = " + _0x58f5e4 + ";");
});
mp.events.add("Client_LoadPreviousPenlties", _0x4a117d => {
  main_browser.execute("APPS.state.kpk.previous_penalties = " + JSON.stringify(_0x4a117d));
  main_browser.execute("APPS.state.kpk.infoplayerPage = 2;");
});
mp.events.add("LoadKPKVehicle", _0x11411d => {
  let _0x3b304b = [];
  for (let _0x53cd88 = 0; _0x53cd88 < _0x11411d.length; _0x53cd88++) {
    let _0x1e7d90 = _0x11411d[_0x53cd88].split(",");
    _0x3b304b.push("{\"car\": \"" + _0x1e7d90[0] + "\",\"plate\":\"" + _0x1e7d90[1] + "\"}");
  }
  main_browser.execute("APPS.state.kpk.suspectedcardata = [" + _0x3b304b + "]");
  main_browser.execute("APPS.state.kpk.infoplayerPage = 3;");
});
mp.events.add("LoadKPKSuspectedLicense", _0x258c5d => {
  main_browser.execute("APPS.state.kpk.suspectedlicdata = " + _0x258c5d);
  main_browser.execute("APPS.state.kpk.infoplayerPage = 4;");
});
mp.events.add("LoadSuspectedData", (_0x1fb752, _0x21799e, _0x5d16a5) => {
  main_browser.execute("APPS.state.kpk.previouscrime = [];");
  main_browser.execute("APPS.state.kpk.suspectedcardata = [];");
  main_browser.execute("APPS.state.kpk.previous_penalties = [];");
  main_browser.execute("APPS.state.kpk.suspectedlicdata = '';");
  if (_0x1fb752 == 1) {
    main_browser.execute("APPS.state.kpk.suspected = " + _0x21799e);
    main_browser.execute("APPS.state.kpk.content = 1;");
  } else {
    let _0x38d274 = [];
    for (let _0x3ab55c = 0; _0x3ab55c < _0x5d16a5.length; _0x3ab55c++) {
      let _0x2fc509 = _0x5d16a5[_0x3ab55c].split(",");
      _0x38d274.push("{\"name\": \"" + _0x2fc509[0].replace("_", " ") + "\",\"date\":\"" + _0x2fc509[1] + "\"}");
    }
    main_browser.execute("APPS.state.kpk.carinfo = " + _0x21799e);
    main_browser.execute("APPS.state.kpk.carowners = [" + _0x38d274 + "]");
    main_browser.execute("APPS.state.kpk.infoplayerPage = 0;");
    main_browser.execute("APPS.state.kpk.content = 7;");
  }
});
mp.events.add("K_PoliceSearch", _0x43a3e6 => {
  mp.events.callRemote("ServerPoliceSearch", _0x43a3e6);
});
mp.events.add("K_PoliceSuspend", _0x210cbd => {
  mp.events.callRemote("ServerPoliceSuspend", _0x210cbd);
});
mp.events.add("K_PoliceFine", (_0xc1447d, _0x5d704d, _0x58b114) => {
  mp.events.callRemote("Server_IssuePoliceFine", _0xc1447d, _0x5d704d, _0x58b114);
});
mp.events.add("K_PoliceAction", _0x442527 => {
  mp.events.callRemote("ServerPoliceAction", _0x442527);
});
mp.events.add("Client_DeletePreviousCrime", _0x353a15 => {
  mp.events.callRemote("Server_DeletePreviousCrime", _0x353a15);
});
mp.events.add("KPKCancelAction", () => {
  main_browser.execute("APPS.state.kpk.kpkinaction = false;");
});
mp.events.add("KPKFail", _0xce37cb => {
  if (kpkOpen) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xce37cb + "');");
  } else {
    mp.game.ui.notifications.show(_0xce37cb, false, 0, 6);
  }
});
global.OpenKPK = function () {
  if (!GlobalCheck() || !!newCircleOpened) {
    mp.events.callRemote("ServerOpenKPK");
  }
};
global.CloseKPK = function () {
  if (kpkOpen && loggedin && !chatActive) {
    main_browser.execute("APPS.state.kpk.show = false;");
    kpkOpen = false;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("ServerKPKClose");
  }
};
mp.events.add("Client_CloseKPK", () => {
  CloseKPK();
});
mp.events.add("Client_DeleteFromBlackList", (_0x1ef1bc, _0x1904e0) => {
  if ((kpkOpen || LeaderMenuOpened) && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteFromBlackList", _0x1ef1bc, _0x1904e0);
    }
  }
});
mp.events.add("Client_NewPoliceOrderNotify", (_0x134d65, ..._0x480934) => {
  let _0x57a2ff = _0x480934.length > 0 ? [_0x134d65, ..._0x480934] : _0x134d65;
  if (typeof _0x57a2ff == "string" && _0x57a2ff.startsWith("[")) {
    try {
      _0x57a2ff = JSON.parse(_0x57a2ff);
    } catch (_0x5887a3) {}
  }
  if (typeof _0x57a2ff == "string" && _0x57a2ff.includes(",") && /\{[0-9]+\}/.test(_0x57a2ff.split(",")[0])) {
    const _0x13392b = _0x57a2ff.indexOf(",");
    _0x57a2ff = [_0x57a2ff.slice(0, _0x13392b).trim(), _0x57a2ff.slice(_0x13392b + 1).trim()];
  }
  const _0x336f92 = typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x57a2ff) : _0x57a2ff;
  global.ShowStaticNotification({
    type: "police",
    title: language["Новый вызов"][curr_lang],
    text: escapeHtml(_0x336f92),
    hasClose: true,
    timeToEnd: 10,
    buttons: [{
      text: language["Открыть КПК"][curr_lang],
      iconLeft: "mobile",
      color: "white",
      callback: () => {
        mp.events.callRemote("ServerOpenKPK");
      },
      closeAfterClick: true
    }]
  });
});
mp.events.add("ClientPoliceCheckButton", (_0x219f17, _0x2ea21c) => {
  if (_0x2ea21c == 1) {
    mp.events.callRemote("PoliceAnswer", _0x219f17);
  } else {
    if (_0x2ea21c == 2) {
      return mp.events.callRemote("PoliceVehicleAnswer", _0x219f17);
    }
    if (_0x2ea21c == 3) {
      return mp.events.callRemote("PoliceWantedAnswer", _0x219f17);
    }
  }
  CloseKPK();
});
mp.events.add("PoliceBlipCreate", _0x59f8e8 => {
  if (blipinfo) {
    blipinfo.destroy();
    blipinfo = undefined;
  }
  blipinfo = mp.blips.new(1, _0x59f8e8, {
    name: language["Ваш вызов"][curr_lang],
    color: 83
  });
  blipinfo.setRoute(true);
});
mp.events.add("PoliceDriverBlipCreate", _0x3c8e66 => {
  if (driverblip) {
    driverblip.destroy();
  }
  driverblip = mp.blips.new(225, _0x3c8e66, {
    name: language["Ваш полицейский"][curr_lang],
    color: 38
  });
});
mp.events.add("PoliceDriverBlipDestroy", () => {
  if (driverblip != null) {
    driverblip.destroy();
    driverblip = null;
  }
});
mp.events.add("Set_Police_Alarm_Blips", _0x1667fb => {
  if (alarm_blip) {
    alarm_blip.destroy();
  }
  alarm_blip = mp.blips.new(84, _0x1667fb, {
    name: language["Место вызова подкрепления"][curr_lang],
    color: 3
  });
  alarm_blip.setRoute(true);
  alarm_colshape = mp.colshapes.newSphere(_0x1667fb.x, _0x1667fb.y, _0x1667fb.z, 10, 0);
  alarm_colshape.is_alarm_colshape = true;
});
mp.events.add("Destroy_Police_Alarm_Blips", () => {
  if (alarm_blip) {
    alarm_blip.destroy();
    alarm_blip = null;
  }
  if (alarm_colshape) {
    alarm_colshape.destroy();
    alarm_colshape = null;
  }
});
mp.events.add("Set_Police_Global_Alarm_Blips", _0x495226 => {
  if (alarm_blip2) {
    alarm_blip2.destroy();
  }
  alarm_blip2 = mp.blips.new(84, _0x495226, {
    name: language["Место вызова подкрепления"][curr_lang],
    color: 1
  });
  alarm_blip2.setRoute(true);
  alarm_colshape2 = mp.colshapes.newSphere(_0x495226.x, _0x495226.y, _0x495226.z, 10, 0);
  alarm_colshape2.is_alarm_colshape2 = true;
});
mp.events.add("Destroy_Police_Global_Alarm_Blips", () => {
  if (alarm_blip2) {
    alarm_blip2.destroy();
    alarm_blip2 = null;
  }
  if (alarm_colshape2) {
    alarm_colshape2.destroy();
    alarm_colshape2 = null;
  }
});
let vehblip;
let policeTrackingBlips = [];
function destroyPoliceTrackingBlips() {
  policeTrackingBlips.forEach(_0xaf28d1 => {
    if (_0xaf28d1 && mp.blips.exists(_0xaf28d1)) {
      _0xaf28d1.destroy();
    }
  });
  policeTrackingBlips = [];
}
mp.events.add("Client_DestroyPoliceTrackingBlips", () => {
  destroyPoliceTrackingBlips();
});
mp.events.add("Client_DestroyPoliceTrackingBlip", _0x4f7527 => {
  const _0x4fe7b6 = policeTrackingBlips.find(_0x471dcb => _0x471dcb.pid = _0x4f7527);
  if (_0x4fe7b6 && mp.blips.exists(_0x4fe7b6)) {
    _0x4fe7b6.destroy();
  }
});
mp.events.add("Client_UpdatePoliceTrackingInfo", (_0x543cba, _0x73edf1) => {
  const _0x334ed6 = mp.blips.new(198, _0x543cba, {
    name: language["Ваш полицейский"][curr_lang],
    color: 29
  });
  _0x334ed6.pid = _0x73edf1;
  policeTrackingBlips.push(_0x334ed6);
});
mp.events.add("PoliceBlipDestroy", () => {
  if (blipinfo) {
    blipinfo.destroy();
    blipinfo = undefined;
  }
});
global.randomInteger = function (_0x8bb0b9, _0x20db77) {
  let _0x231458 = _0x8bb0b9 + Math.random() * (_0x20db77 + 1 - _0x8bb0b9);
  _0x231458 = Math.floor(_0x231458);
  return _0x231458;
};
let wantedplayerblip;
let last_fix_follow;
let theft_veh_blip = null;
mp.events.add("Client_LocateVehiclePosition", _0xa35129 => {
  if (theft_veh_blip != null) {
    mp.game.ui.removeBlip(theft_veh_blip);
    theft_veh_blip = null;
  }
  const _0x2883ae = randomInteger(-130, 130);
  const _0x33a0d7 = randomInteger(-130, 130);
  theft_veh_blip = mp.game.ui.addBlipForRadius(_0xa35129.x + _0x2883ae, _0xa35129.y + _0x33a0d7, _0xa35129.z, 150);
  mp.game.ui.setBlipSprite(theft_veh_blip, 5);
  mp.game.ui.setBlipAlpha(theft_veh_blip, 175);
  mp.game.ui.setBlipColour(theft_veh_blip, 37);
  mp.game.ui.setBlipAsShortRange(theft_veh_blip, true);
  setTimeout(() => {
    if (theft_veh_blip != null) {
      mp.game.ui.removeBlip(theft_veh_blip);
      theft_veh_blip = null;
    }
  }, 60000);
});
mp.events.add("ShowStolenVehicle", _0x4f7a74 => {
  if (vehblip != null) {
    mp.game.ui.removeBlip(vehblip);
    vehblip = null;
  }
  let _0x44a0ed = randomInteger(-130, 130);
  let _0x44c1e6 = randomInteger(-130, 130);
  vehblip = mp.game.ui.addBlipForRadius(_0x4f7a74.x + _0x44a0ed, _0x4f7a74.y + _0x44c1e6, _0x4f7a74.z, 150);
  mp.game.ui.setBlipSprite(vehblip, 5);
  mp.game.ui.setBlipAlpha(vehblip, 175);
  mp.game.ui.setBlipColour(vehblip, 37);
  mp.game.ui.setBlipAsShortRange(vehblip, true);
  CloseKPK();
  mp.game.ui.notifications.show(language["Мecтoпoлoжeниe тpaнcпopтa oтмeчeнo нa кapтe<br>Paдap бyдeт paбoтaть в тeчeниe 5 минyт"][curr_lang], false, 0, 2);
  setTimeout(() => {
    mp.game.ui.notifications.show(language["Paдap зaкoнчил cлeжeниe зa тpaнcпopтoм"][curr_lang], false, 0, 2);
    if (vehblip) {
      mp.game.ui.removeBlip(vehblip);
      vehblip = null;
    }
    mp.events.callRemote("CancelRadaring", 1);
  }, 300000);
});
mp.events.add("ShowWantedPlayer", _0x110e71 => {
  SetGPSLocation(_0x110e71.x, _0x110e71.y, _0x110e71.z, false, 0, 10);
  CloseKPK();
  mp.game.ui.notifications.show(language["Мecтoпoлoжeниe разыскиваемого oтмeчeнo нa кapтe<br>Paдap бyдeт paбoтaть в тeчeниe 1 минyт"][curr_lang], false, 0, 2);
  setTimeout(() => {
    mp.game.ui.notifications.show(language["Paдap зaкoнчил cлeжeниe зa игpoкoм"][curr_lang], false, 0, 2);
    mp.events.callRemote("CancelRadaring", 2);
  }, 60000);
});
mp.events.add("render", () => {
  if (localplayer.followed_by_police && mp.players.exists(localplayer.followed_by_police)) {
    if (!localplayer.followed_by_police.handle) {
      if (new Date().getTime() - last_fix_follow < 1000) {
        return;
      }
      last_fix_follow = new Date().getTime();
      UpdatePositionAC();
      mp.events.callRemote("Server_ChangeFollowCoordCorrect", localplayer.followed_by_police);
      return;
    }
    if (localplayer.followed_by_police.isInAnyVehicle(false)) {
      if (new Date().getTime() - last_fix_follow < 1000) {
        return;
      }
      last_fix_follow = new Date().getTime();
      mp.events.callRemote("Server_StopFollowPlayer", localplayer.followed_by_police);
    }
    mp.game.cam.setFollowPedCamViewMode(4);
    mp.game.controls.disableControlAction(2, 0, true);
    mp.game.controls.disableControlAction(2, 32, true);
    mp.game.controls.disableControlAction(2, 33, true);
    mp.game.controls.disableControlAction(2, 34, true);
    mp.game.controls.disableControlAction(2, 35, true);
    mp.game.controls.disableControlAction(2, 23, true);
    mp.game.controls.disableControlAction(2, 75, true);
    mp.game.controls.disableControlAction(0, 23, true);
    mp.game.controls.disableControlAction(1, 23, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
    if (mp.game.system.vdist(localplayer.followed_by_police.position.x, localplayer.followed_by_police.position.y, localplayer.followed_by_police.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 10) {
      UpdatePositionAC();
      localplayer.position = new mp.Vector3(localplayer.followed_by_police.position.x - 1, localplayer.followed_by_police.position.y - 1, localplayer.followed_by_police.position.z);
      localplayer.taskFollowToOffsetOf(localplayer.followed_by_police.handle, 0, 0, 0, 1, -1, 1, true);
    }
  }
});
const NAVIGATION_ZONE_CODES = ["AIRP", "ALAMO", "ALTA", "ARMYB", "BANHAMC", "BANNING", "BEACH", "BHAMCA", "BRADP", "BRADT", "BURTON", "CALAFB", "CANNY", "CCREAK", "CHAMH", "CHIL", "CHU", "CMSW", "CYPRE", "DAVIS", "DELBE", "DELPE", "DELSOL", "DESRT", "DOWNT", "DTVINE", "EAST_V", "EBURO", "ELGORL", "ELYSIAN", "GALFISH", "golf", "GRAPES", "GREATC", "HARMO", "HAWICK", "HORS", "HUMLAB", "JAIL", "KOREAT", "LACT", "LAGO", "LDAM", "LEGSQU", "LMESA", "LOSPUER", "MIRR", "MORN", "MOVIE", "MTCHIL", "MTGORDO", "MTJOSE", "MURRI", "NCHU", "NOOSE", "OCEANA", "PALCOV", "PALETO", "PALFOR", "PALHIGH", "PALMPOW", "PBLUFF", "PBOX", "PROCOB", "RANCHO", "RGLEN", "RICHM", "ROCKF", "RTRAK", "SanAnd", "SANCHIA", "SANDY", "SKID", "SLAB", "STAD", "STRAW", "TATAMO", "TERMINA", "TEXTI", "TONGVAH", "TONGVAV", "VCANA", "VESP", "VINE", "WINDF", "WVINE", "ZANCUDO", "ZP_ORT", "ZQ_UAR", "BAYTRE", "OBSERV"];
const NAVIGATION_DISTRICTS = ["Los Santos International Airport", "Alamo Sea", "Alta", "Fort Zancudo", "Banham Canyon Dr", "Banning", "Vespucci Beach", "Banham Canyon", "Braddock Pass", "Braddock Tunnel", "Burton", "Calafia Bridge", "Raton Canyon", "Cassidy Creek", "Chamberlain Hills", "Vinewood Hills", "Chumash", "Chiliad Mountain State Wilderness", "Cypress Flats", "Davis", "Del Perro Beach", "Del Perro", "La Puerta", "Grand Senora Desert", "Downtown", "Downtown Vinewood", "East Vinewood", "El Burro Heights", "El Gordo Lighthouse", "Elysian Island", "Galilee", "GWC and Golfing Society", "Grapeseed", "Great Chaparral", "Harmony", "Hawick", "Vinewood Racetrack", "Humane Labs and Research", "Bolingbroke Penitentiary", "Little Seoul", "Land Act Reservoir", "Lago Zancudo", "Land Act Dam", "Legion Square", "La Mesa", "La Puerta", "Mirror Park", "Morningwood", "Richards Majestic", "Mount Chiliad", "Mount Gordo", "Mount Josiah", "Murrieta Heights", "North Chumash", "N.O.O.S.E", "Pacific Ocean", "Paleto Cove", "Paleto Bay", "Paleto Forest", "Palomino Highlands", "Palmer-Taylor Power Station", "Pacific Bluffs", "Pillbox Hill", "Procopio Beach", "Rancho", "Richman Glen", "Richman", "Rockford Hills", "Redwood Lights Track", "San Andreas", "San Chianski Mountain Range", "Sandy Shores", "Mission Row", "Stab City", "Maze Bank Arena", "Strawberry", "Tataviam Mountains", "Terminal", "Textile City", "Tongva Hills", "Tongva Valley", "Vespucci Canals", "Vespucci", "Vinewood", "Ron Alternates Wind Farm", "West Vinewood", "Zancudo River", "Port of South Los Santos", "Davis Quartz", "Baytree Canyon", "Galileo Observatory"];
function degreesToIntercardinalDirection(_0x3dad6d) {
  if ((_0x3dad6d %= 360) >= 0 && _0x3dad6d < 22.5 || _0x3dad6d >= 337.5) {
    return "N";
  } else if (_0x3dad6d >= 22.5 && _0x3dad6d < 67.5) {
    return "NE";
  } else if (_0x3dad6d >= 67.5 && _0x3dad6d < 112.5) {
    return "E";
  } else if (_0x3dad6d >= 157.5 && _0x3dad6d < 202.5) {
    return "S";
  } else if (_0x3dad6d >= 112.5 && _0x3dad6d < 157.5) {
    return "SE";
  } else if (_0x3dad6d >= 202.5 && _0x3dad6d < 247.5 || _0x3dad6d > -112.5 && _0x3dad6d <= -65.7) {
    return "SW";
  } else if (_0x3dad6d >= 247.5 && _0x3dad6d <= 292.5 || _0x3dad6d > -65.7 && _0x3dad6d <= -22.5) {
    return "W";
  } else if (_0x3dad6d >= 292.5 && _0x3dad6d < 337.5 || _0x3dad6d > -22.5 && _0x3dad6d <= 0) {
    return "NW";
  } else {
    return undefined;
  }
}
global.getNavigationStreetData = function (_0x20ec12 = localplayer && localplayer.position) {
  if (!_0x20ec12) {
    return null;
  }
  const _0x4816de = mp.game.zone.getNameOfZone(_0x20ec12.x, _0x20ec12.y, _0x20ec12.z);
  const _0x542c01 = NAVIGATION_ZONE_CODES.indexOf(_0x4816de);
  const _0xeb6b8f = _0x542c01 !== -1 ? NAVIGATION_DISTRICTS[_0x542c01] : _0x4816de;
  const _0x4fdfab = mp.game.pathfind.getStreetNameAtCoord(_0x20ec12.x, _0x20ec12.y, _0x20ec12.z, 0, 0);
  const _0x4a4e51 = _0x4fdfab && _0x4fdfab.streetName ? mp.game.ui.getStreetNameFromHashKey(_0x4fdfab.streetName) : "Unknown";
  street_hash = _0x4a4e51;
  return {
    district: _0xeb6b8f,
    street: _0x4a4e51,
    zone: _0x4816de
  };
};
setInterval(function () {
  if (mp.storage.data.navigator == 1) {
    const _0x2641d6 = global.getNavigationStreetData();
    if (!_0x2641d6) {
      main_browser.execute("APPS.state.hud.navigation_show = false;");
      return;
    }
    const _0x2ce913 = 360 - mp.players.local.getHeading();
    main_browser.execute("APPS.state.hud.navigation_district = \"" + _0x2641d6.district + "\";");
    main_browser.execute("APPS.state.hud.navigation_street = \"" + _0x2641d6.street + "\";");
    main_browser.execute("APPS.state.hud.navigation_compass = \"" + degreesToIntercardinalDirection(_0x2ce913) + "\";");
    main_browser.execute("APPS.state.hud.navigation_show = true;");
  } else if (mp.storage.data.navigator == 0) {
    main_browser.execute("APPS.state.hud.navigation_show = false;");
  }
}, 1000);
mp.events.add("render", () => {
  if (mp.players.local.takenByPolice || mp.players.local.takingByPolice) {
    const _0x887ad5 = mp.players.local.takenByPolice ? mp.players.local.takenByPolice : mp.players.local.takingByPolice;
    if (!_0x887ad5 || !mp.players.exists(_0x887ad5)) {
      return;
    }
    const _0x458ef0 = mp.players.local;
    if (!mp.game.streaming.hasAnimDictLoaded("grand_animations_custom")) {
      requestAnimDict("grand_animations_custom", true);
    }
    if (!_0x887ad5.isPlayingAnim("grand_animations_custom", "arrest_owner", 3)) {
      _0x887ad5.taskPlayAnim("grand_animations_custom", "arrest_owner", 8, -8, -1, 49, 0, false, false, false);
    }
    if (!_0x458ef0.isPlayingAnim("grand_animations_custom", "arrest_follower", 3)) {
      _0x458ef0.taskPlayAnim("grand_animations_custom", "arrest_follower", 8, -8, -1, 49, 0, false, false, false);
    }
    const _0x3ffd91 = mp.game.entity.getBoneRotation(_0x887ad5.handle, 91);
    _0x458ef0.setHeading(_0x3ffd91.z - 90);
    _0x887ad5.setIkTarget(4, _0x458ef0.handle, 24818, 0, -0.12, -0.1, 0, -1, -1);
    _0x887ad5.setIkTarget(3, _0x458ef0.handle, 61007, -0.1, -0.06, -0.075, 0, 200, 300);
    const _0x1d4c38 = mp.game.object.getOffsetFromCoords(_0x887ad5.position.x, _0x887ad5.position.y, _0x887ad5.position.z, _0x887ad5.getPhysicsHeading(), 0, 3, 0);
    mp.game.invoke("0x8339643499D1222E", _0x458ef0.handle, 0, 0, 0);
    if (_0x887ad5.isWalking()) {
      _0x458ef0.taskGoStraightToCoord(_0x1d4c38.x, _0x1d4c38.y, _0x1d4c38.z, 1.2, -1, _0x887ad5.getHeading(), 0);
    } else {
      _0x458ef0.taskStandStill(1);
    }
    _0x458ef0.attachTo(_0x887ad5.handle, 0, 0, 0.7, 0, 0, 0, 0, true, false, false, true, 2, true);
    if (!mp.game.streaming.hasClipSetLoaded("move_m@quick")) {
      for (mp.game.streaming.requestClipSet("move_m@quick"); !mp.game.streaming.hasClipSetLoaded("move_m@quick");) {
        mp.game.wait(0);
      }
    }
    _0x887ad5.setMovementClipset("move_m@quick", 0);
    _0x458ef0.setMovementClipset("move_m@quick", 0);
    const _0x2dd124 = mp.game.controls;
    if (_0x887ad5 == mp.players.local || _0x458ef0 == mp.players.local) {
      _0x2dd124.disableControlAction(0, 21, true);
      _0x2dd124.disableControlAction(0, 24, true);
      _0x2dd124.disableControlAction(0, 25, true);
      _0x2dd124.disableControlAction(0, 69, true);
      _0x2dd124.disableControlAction(0, 75, true);
      _0x2dd124.disableControlAction(0, 92, true);
      _0x2dd124.disableControlAction(0, 114, true);
      _0x2dd124.disableControlAction(0, 140, true);
      _0x2dd124.disableControlAction(0, 141, true);
      _0x2dd124.disableControlAction(0, 142, true);
      _0x2dd124.disableControlAction(0, 257, true);
      _0x2dd124.disableControlAction(0, 263, true);
      _0x2dd124.disableControlAction(0, 264, true);
    }
  }
});
mp.events.add("Client_FollowPlayerNew", (_0x5e0bb1, _0x4b0259, _0x424861 = true) => {
  const _0x3b4ec6 = mp.players.atRemoteId(_0x5e0bb1);
  if (!_0x3b4ec6 || !mp.players.exists(_0x3b4ec6)) {
    return;
  }
  const _0x564394 = mp.players.atRemoteId(_0x4b0259);
  if (_0x564394 && mp.players.exists(_0x564394)) {
    if (_0x424861) {
      _0x564394.takingByPolice = _0x3b4ec6;
    } else {
      delete _0x564394.takingByPolice;
    }
    if (_0x424861) {
      _0x3b4ec6.takenByPolice = _0x564394;
    } else {
      delete _0x3b4ec6.takenByPolice;
    }
  }
});
mp.events.add("Client_FollowTestPlayer", function (_0x4afb31, _0x50c87e, _0x3c0155) {
  const _0x49f702 = mp.players.atRemoteId(parseInt(_0x50c87e));
  if (_0x49f702 && mp.players.exists(_0x49f702)) {
    if (_0x4afb31) {
      const _0x162f7d = mp.players.atRemoteId(parseInt(_0x3c0155));
      if (!_0x162f7d || !mp.players.exists(_0x162f7d)) {
        return;
      }
      _0x49f702.taskFollowToOffsetOf(_0x162f7d.handle, 0, 0, 0, 1, -1, 1, true);
      _0x49f702.followed_by_police = _0x162f7d;
    } else {
      _0x49f702.followed_by_police = undefined;
      _0x49f702.clearTasks();
      mp.game.cam.setFollowPedCamViewMode(2);
    }
  }
});
mp.events.add("FollowPlayer", function (_0x1eb2e8, _0x23e83d) {
  if (_0x1eb2e8) {
    const _0x21ea8c = mp.players.atRemoteId(parseInt(_0x23e83d));
    if (_0x21ea8c && mp.players.exists(_0x21ea8c)) {
      localplayer.taskFollowToOffsetOf(_0x21ea8c.handle, 0, 0, 0, 1, -1, 1, true);
      localplayer.followedbypoliec = _0x21ea8c;
    }
  } else {
    localplayer.followedbypoliec = undefined;
    localplayer.clearTasks();
    mp.game.cam.setFollowPedCamViewMode(2);
  }
});
mp.events.add("CuffPlayer", function (_0x3db9ff) {
  localplayer.cuffed = _0x3db9ff;
});
mp.events.add("RoadPoliceDeAttach", _0x322d5f => {
  _0x322d5f.detachFromAnyTowTruck();
});
mp.events.add("Client_AlarmPolice", _0x312a34 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_AlarmPolice", _0x312a34);
  }
});
let f_veh;
let f_veh_lastCheck;
let localvehjson = [];
let fine_park_state = 0;
function getForwardVehicle(_0x3e05cb = 4) {
  if (!localplayer.vehicle) {
    return null;
  }
  let _0x3bacab = localplayer.getBoneCoords(12844, 0.5, 0, 0);
  let _0x48b5d7 = localplayer.vehicle.getForwardVector();
  let _0x5719b3 = new mp.Vector3(_0x48b5d7.x * _0x3e05cb + localplayer.position.x, _0x48b5d7.y * _0x3e05cb + localplayer.position.y, _0x48b5d7.z * _0x3e05cb + localplayer.position.z);
  _0x3bacab.z -= 0.3;
  const _0x5bacd1 = mp.raycasting.testPointToPoint(_0x3bacab, _0x5719b3, localplayer, 30);
  if (_0x5bacd1 !== undefined) {
    if (_0x5bacd1.entity.type === undefined) {
      return null;
    }
    if (_0x5bacd1.entity.type != "vehicle") {
      return null;
    }
    if (_0x5bacd1.entity.isSeatFree(-1)) {
      return null;
    }
    let _0x2b5dff = _0x5bacd1.entity.position;
    let _0x5e2609 = localplayer.position;
    if (mp.game.system.vdist(_0x2b5dff.x, _0x2b5dff.y, _0x2b5dff.z, _0x5e2609.x, _0x5e2609.y, _0x5e2609.z) > _0x3e05cb) {
      return null;
    } else {
      if (_0x5bacd1 && typeof _0x5bacd1.entity == "number" && _0x5bacd1.entity !== 0 && mp.game.entity.doesExist(_0x5bacd1.entity)) {
        mp.game.shapetest.releaseScriptGuidFromEntity(_0x5bacd1.entity);
      }
      return _0x5bacd1.entity;
    }
  }
  return null;
}
mp.events.add("GetVehiclesFromParkingFine", (_0x4e0485, _0x37d4ad = 1) => {
  if (InNpcDialog == 0) {
    return;
  }
  localvehjson = _0x4e0485;
  fine_park_state = _0x37d4ad;
  dialogstate = 8;
  let _0x1f488c = [];
  for (let _0xe07ebb = 0; _0xe07ebb < _0x4e0485.length; _0xe07ebb++) {
    let _0x3acab4 = TranslateText("{0}({1})<br>Штраф:${2}", _0x4e0485[_0xe07ebb].Model, _0x4e0485[_0xe07ebb].Plate, _0x4e0485[_0xe07ebb].Fine);
    _0x1f488c.push(_0x3acab4);
  }
  _0x1f488c.push(language["Спасибо, я зайду позже"][curr_lang]);
  main_browser.execute("APPS.state.npc_dialog.buttonsAnswer = " + JSON.stringify(_0x1f488c));
});
global.SelectCorrectVehicleFromParking = function (_0x519f05) {
  if (_0x519f05 > localvehjson.length) {
    EndConversationFinally();
  } else if (fine_park_state == 1) {
    mp.events.callRemote("RoadPolicePayVehicle", localvehjson[_0x519f05 - 1].ID, localvehjson[_0x519f05 - 1].Fine);
  } else if (fine_park_state == 2) {
    mp.events.callRemote("RoadPolicePayFamilyVehicle", localvehjson[_0x519f05 - 1].ID, localvehjson[_0x519f05 - 1].Fine);
  }
  localvehjson = [];
};
global.PenaltyStationOpened = false;
mp.events.add("Client_OpenFineParkingVehciles", (_0x8208cb, _0x2b1896 = 1, _0x606347, _0x510791) => {
  EndConversationFinally();
  if (GlobalCheck() == 1 && PenaltyStationOpened == 0) {
    return;
  }
  fine_park_state = _0x2b1896;
  const _0x35960c = "{\"vehicles\":" + JSON.stringify(_0x8208cb) + ",\"owner_name\":'" + _0x606347 + "',\"is_npc\":" + _0x510791 + ",\"show\":true}";
  main_browser.execute("APPS.state.penaltystation = " + _0x35960c);
  PenaltyStationOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.ClosePenaltyStation = function () {
  if (PenaltyStationOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.penaltystation.show = false;");
    PenaltyStationOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ShowNextEnterDesign", 3);
  }
};
mp.events.add("Client_ClosePenaltyLot", () => {
  ClosePenaltyStation();
});
mp.events.add("Client_GetVehFromFineParking", (_0x463fea, _0x44c3e0) => {
  if (PenaltyStationOpened) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      if (fine_park_state == 1) {
        mp.events.callRemote("RoadPolicePayVehicle", _0x463fea, _0x44c3e0);
      } else if (fine_park_state == 2) {
        mp.events.callRemote("RoadPolicePayFamilyVehicle", _0x463fea, _0x44c3e0);
      }
    }
  }
});
global.is_vehicle_fine_photo = false;
mp.events.add("Client_DoVehicleFinePhoto", _0xae6403 => {
  if (local_member != 3 && local_member != 4 && local_member != 12) {
    return mp.game.ui.notifications.show(language["Вы не сотрудник полиции"][curr_lang], false, 0, 6);
  }
  at_mugshot_photo = _0xae6403;
  OpenMobileCamera(4);
  is_vehicle_fine_photo = true;
});
mp.events.add("Client_SavePictureToPoliceKPKVehicle", () => {
  if (last_photo_url && at_mugshot_photo && MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SavePictureToVehicle", at_mugshot_photo, last_photo_url);
  }
});
mp.events.add("Client_SetVehicleRadar", _0x2a91c2 => {
  if (localplayer.vehicle) {
    localplayer.vehicle.is_radar = true;
  }
  global.last_used_engine_blocker = _0x2a91c2;
});
global.SendStopSignal = function () {
  return !!last_f_veh && !!mp.vehicles.exists(last_f_veh) && !!localplayer.vehicle && !!is_radar_enabled && localplayer.vehicle.is_radar == 1 && (mp.events.callRemote("Server_SendStopSignalKPK", last_f_veh), true);
};
global.is_breaking_engine_enabled = false;
mp.events.add("Client_StartToBreakEngine", () => {
  is_breaking_engine_enabled = true;
  HintShow(language["Клавиша J, чтобы остановить транспорт, когда линия будет зацеплена"][curr_lang]);
});
global.last_f_veh = null;
global.is_radar_enabled = false;
const disable_button = 19;
let last_veh_disable_used = new Date().getTime();
function ShowPoliceInformationAboutVehicle(_0x5ca691) {
  const _0xe9c61b = Math.round(_0x5ca691.getSpeed() * 3.6);
  let _0x28bf06 = [];
  let _0x4cf1 = _0x5ca691.getVariable("Thefted");
  _0x28bf06 = _0xe9c61b > 100 || _0x4cf1 ? [255, 0, 0, 185] : [255, 255, 255, 185];
  if (_0x4cf1) {
    mp.game.graphics.drawText(TranslateText("Cкopocть: {0}~n~Разыскивается", _0xe9c61b), [_0x5ca691.position.x, _0x5ca691.position.y, _0x5ca691.position.z + 1.5], {
      font: 0,
      color: _0x28bf06,
      scale: [0.4, 0.4],
      outline: true
    });
  } else {
    mp.game.graphics.drawText(TranslateText("Cкopocть: {0}", _0xe9c61b), [_0x5ca691.position.x, _0x5ca691.position.y, _0x5ca691.position.z + 1.5], {
      font: 0,
      color: _0x28bf06,
      scale: [0.4, 0.4],
      outline: true
    });
  }
  if (mp.game.controls.isDisabledControlJustPressed(0, 19) && !GlobalCheck()) {
    if (new Date().getTime() - last_veh_disable_used < 5000) {
      return;
    }
    last_veh_disable_used = new Date().getTime();
    mp.events.callRemote("Server_BreakVehicleEngineFromItem", last_f_veh, true);
  }
  main_browser.execute("APPS.state.hud.radar_speed = " + _0xe9c61b + ";");
  main_browser.execute("APPS.state.hud.radar_model_name = '" + mp.game.vehicle.getDisplayNameFromVehicleModel(_0x5ca691.model) + "';");
  main_browser.execute("APPS.state.hud.radar_thefted = " + _0x4cf1 + ";");
  main_browser.execute("APPS.state.hud.radar_number_plate = '" + _0x5ca691.getNumberPlateText() + "';");
  main_browser.execute("APPS.state.hud.radar_show = true;");
}
mp.events.add("render", () => {
  if (loggedin && localplayer.vehicle && (is_radar_enabled || is_breaking_engine_enabled) && (local_member == 3 || local_member == 4 || local_member == 12 || is_breaking_engine_enabled) && (localplayer.vehicle.is_radar == 1 || is_breaking_engine_enabled)) {
    f_veh = getForwardVehicle(70);
    if (f_veh) {
      last_f_veh = f_veh;
      f_veh_lastCheck = new Date().getTime();
      if (is_breaking_engine_enabled) {
        const _0x2020ed = localplayer.getBoneCoords(12844, 0.5, 0, 0);
        mp.game.graphics.drawLine(_0x2020ed.x, _0x2020ed.y, _0x2020ed.z - 1, f_veh.position.x, f_veh.position.y, f_veh.position.z, 255, 0, 0, 255);
      } else {
        ShowPoliceInformationAboutVehicle(f_veh);
      }
    } else if (!f_veh) {
      if (last_f_veh && mp.vehicles.exists(last_f_veh) && last_f_veh.handle) {
        if (is_breaking_engine_enabled) {
          const _0x43dec9 = localplayer.getBoneCoords(12844, 0.5, 0, 0);
          mp.game.graphics.drawLine(_0x43dec9.x, _0x43dec9.y, _0x43dec9.z - 1, last_f_veh.position.x, last_f_veh.position.y, last_f_veh.position.z, 255, 0, 0, 255);
        } else {
          ShowPoliceInformationAboutVehicle(last_f_veh);
        }
      }
      if (new Date().getTime() - f_veh_lastCheck > 3000) {
        last_f_veh = null;
      }
      if (!last_f_veh) {
        main_browser.execute("APPS.state.hud.radar_show = false;");
      }
    }
  }
});
mp.events.add("playerLeaveVehicle", () => {
  is_radar_enabled = false;
  hudHideRadarKeyHint();
  setTimeout(function () {
    main_browser.execute("APPS.state.hud.radar_show = false;");
  }, 3000);
  if (is_breaking_engine_enabled) {
    is_breaking_engine_enabled = false;
    HintClose();
  }
});
mp.events.add("Police_Break_Tyres", _0xe85a3f => {
  if (_0xe85a3f) {
    _0xe85a3f.setTyreBurst(0, false, 1000);
    _0xe85a3f.setTyreBurst(1, false, 1000);
    _0xe85a3f.setTyreBurst(4, false, 1000);
    _0xe85a3f.setTyreBurst(5, false, 1000);
    _0xe85a3f.setBurnout(true);
    setTimeout(() => {
      if (mp.vehicles.exists(_0xe85a3f)) {
        _0xe85a3f.setBurnout(false);
      }
    }, 3000);
  }
});
let admin_obj_model = "";
let is_admin_editing_obj = false;
let additional_z = 0;
let isUsedItem = false;
function onBarricadeKeyRight() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_barricade_process) {
    if (is_admin_editing_obj == 1) {
      if (mp.game.controls.isControlPressed(0, 21)) {
        additional_z += 1;
      } else {
        additional_z += 0.1;
      }
    } else if (barricade_number == 28) {
      barricade_number = 0;
    } else {
      barricade_number++;
    }
    CreateBarricade();
  }
}
function onBarricadeKeyLeft() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_barricade_process) {
    lastCheck = new Date().getTime();
    if (is_admin_editing_obj == 1) {
      if (mp.game.controls.isControlPressed(0, 21)) {
        additional_z -= 1;
      } else {
        additional_z -= 0.1;
      }
    } else if (barricade_number == 0) {
      barricade_number = 28;
    } else {
      barricade_number--;
    }
    CreateBarricade();
  }
}
function onBarricadeKeyDown() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_barricade_process) {
    if (mp.game.controls.isControlPressed(0, 21)) {
      barricade_rotx -= 50;
      if (barricade_rotx < 0) {
        barricade_rotx = 360;
      }
    } else {
      barricade_rot -= 5;
      if (barricade_rot < 0) {
        barricade_rot = 360;
      }
    }
  }
}
function onBarricadeKeyUp() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_barricade_process) {
    if (mp.game.controls.isControlPressed(0, 21)) {
      barricade_rotx += 50;
      if (barricade_rotx > 360) {
        barricade_rotx = 0;
      }
    } else {
      barricade_rot += 5;
      if (barricade_rot > 360) {
        barricade_rot = 0;
      }
    }
  }
}
function CreateBarricade() {
  let _0x484013;
  if (barricade_obj) {
    barricade_obj.destroy();
    barricade_obj = undefined;
  }
  if (barricade_number == 0) {
    _0x484013 = "p_stinger_03";
  } else if (barricade_number == 1) {
    _0x484013 = "prop_barrier_work01a";
  } else if (barricade_number == 2) {
    _0x484013 = "prop_barrier_work01d";
  } else if (barricade_number == 3) {
    _0x484013 = "prop_barier_conc_05c";
  } else if (barricade_number == 4) {
    _0x484013 = "prop_barier_conc_02a";
  } else if (barricade_number == 5) {
    _0x484013 = "prop_air_barrier";
  } else if (barricade_number == 6) {
    _0x484013 = "prop_air_lights_02a";
  } else if (barricade_number == 7) {
    _0x484013 = "prop_air_conelight";
  } else if (barricade_number == 8) {
    _0x484013 = "prop_plas_barier_01a";
  } else if (barricade_number == 9) {
    _0x484013 = "xm_prop_base_fence_01";
  } else if (barricade_number == 10) {
    _0x484013 = "xm_prop_base_fence_02";
  } else if (barricade_number == 11) {
    _0x484013 = "prop_facgate_04_r";
  } else if (barricade_number == 12) {
    _0x484013 = "prop_fncres_03c";
  } else if (barricade_number == 13) {
    _0x484013 = "prop_barier_conc_02b";
  } else if (barricade_number == 14) {
    _0x484013 = "prop_barier_conc_01b";
  } else if (barricade_number == 15) {
    _0x484013 = "prop_barrier_work05";
  } else if (barricade_number == 16) {
    _0x484013 = "ba_prop_battle_barrier_02a";
  } else if (barricade_number == 17) {
    _0x484013 = "prop_barriercrash_01";
  } else if (barricade_number == 18) {
    _0x484013 = "prop_barrier_wat_03a";
  } else if (barricade_number == 19) {
    _0x484013 = "prop_mc_conc_barrier_01";
  } else if (barricade_number == 20) {
    _0x484013 = "prop_mp_barrier_02b";
  } else if (barricade_number == 21) {
    _0x484013 = "prop_trafficdiv_01";
  } else if (barricade_number == 22) {
    _0x484013 = "prop_trafficdiv_02";
  } else if (barricade_number == 23) {
    _0x484013 = "xs_prop_arena_spikes_02a";
  } else if (barricade_number == 24) {
    _0x484013 = "tr_prop_tr_wall_sign_01_b";
  } else if (barricade_number == 25) {
    _0x484013 = "prop_mb_sandblock_03_cr";
  } else if (barricade_number == 26) {
    _0x484013 = "prop_boxpile_05a";
  } else if (barricade_number == 27) {
    _0x484013 = "prop_rub_scrap_04";
  } else if (barricade_number == 28) {
    _0x484013 = "prop_pipes_01b";
  }
  if (is_admin_editing_obj == 1) {
    _0x484013 = admin_obj_model;
  }
  barricade_obj = mp.objects.new(mp.game.joaat(_0x484013), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), {
    rotation: new mp.Vector3(barricade_rotx, 0, barricade_rot),
    alpha: 255,
    dimension: localplayer.dimension
  });
  return !!mp.objects.exists(barricade_obj) || (FinishBarricadeSet(3), false);
}
mp.events.add("OpenBarrierCircle", (_0x29c21a = "", _0xf3508a) => {
  isUsedItem = !!_0xf3508a;
  if (in_barricade_process != 1) {
    additional_z = 0;
    if (_0x29c21a != "") {
      if (is_admin !== true) {
        return;
      }
      admin_obj_model = _0x29c21a;
      is_admin_editing_obj = true;
      HintShow(language["ЛКМ - установить объект<br>ПКМ - отменить<br>Стрелка влево, стрелка вправо - изменение высоты<br>Стрелка наверх, стрелка вниз - поворот объекта"][curr_lang]);
    } else {
      HintShow(language["ЛКМ - установить баррикады<br>ПКМ - отменить<br>Стрелка влево, стрелка вправо - выбор баррикады<br>Стрелка наверх, стрелка вниз - поворот баррикады"][curr_lang]);
    }
    mp.keys.bind(39, false, onBarricadeKeyRight);
    mp.keys.bind(37, false, onBarricadeKeyLeft);
    mp.keys.bind(40, false, onBarricadeKeyDown);
    mp.keys.bind(38, false, onBarricadeKeyUp);
    barricade_rotx = 0;
    barricade_number = 0;
    barricade_rot = 90;
    if (CreateBarricade() == 1) {
      in_barricade_process = true;
    }
  }
});
let barricade_obj;
let barricade_pos;
let in_barricade_process = false;
let barricade_number = 0;
let barricade_rot = 90;
let barricade_rotx = 0;
function FinishBarricadeSet(_0x23d11b) {
  if (in_barricade_process == 1 || _0x23d11b == 3) {
    mp.keys.unbind(37, false, onBarricadeKeyLeft);
    mp.keys.unbind(39, false, onBarricadeKeyRight);
    mp.keys.unbind(40, false, onBarricadeKeyDown);
    mp.keys.unbind(38, false, onBarricadeKeyUp);
    in_barricade_process = false;
    if (_0x23d11b == 3) {
      mp.game.ui.notifications.show(language["Данной модели объекта не существует"][curr_lang], false, 0, 6);
    }
    if (is_admin_editing_obj == 1) {
      if (_0x23d11b == 1 && is_admin === true) {
        mp.events.callRemote("Server_StartCreateAdminObject", admin_obj_model, JSON.stringify(barricade_pos), barricade_rotx, barricade_rot);
      }
      admin_obj_model = "";
      is_admin_editing_obj = false;
    } else {
      if (_0x23d11b == 1 && localplayer.isInWater()) {
        if (barricade_obj && mp.objects.exists(barricade_obj)) {
          barricade_obj.destroy();
          barricade_obj = undefined;
        }
        return mp.game.ui.notifications.show(language["Нельзя устанавливать баррикады здесь"][curr_lang], false, 0, 6);
      }
      if (_0x23d11b == 1 && mp.objects.exists(barricade_obj)) {
        mp.events.callRemote("Server_StartCreateBarricade", barricade_number, JSON.stringify(barricade_pos), barricade_rotx, barricade_rot, isUsedItem);
      }
    }
    if (barricade_obj && mp.objects.exists(barricade_obj)) {
      barricade_obj.destroy();
      barricade_obj = undefined;
    }
  }
  HintClose();
}
mp.events.add("click", (_0x59312e, _0x3e78ab, _0x4c87e3, _0x512f7a, _0x4d89c1, _0x409d57, _0x22910e, _0x4d23f7) => {
  if (loggedin && in_barricade_process != 0) {
    if (_0x512f7a == "left") {
      FinishBarricadeSet(1);
    } else if (_0x512f7a == "right") {
      FinishBarricadeSet(2);
    }
  }
});
mp.events.add("render", () => {
  if (!loggedin || in_barricade_process == 0) {
    return;
  }
  mp.game.controls.disableControlAction(2, 22, true);
  mp.game.controls.disableControlAction(2, 24, true);
  mp.game.controls.disableControlAction(2, 69, true);
  mp.game.controls.disableControlAction(2, 70, true);
  mp.game.controls.disableControlAction(2, 92, true);
  mp.game.controls.disableControlAction(2, 114, true);
  mp.game.controls.disableControlAction(2, 121, true);
  mp.game.controls.disableControlAction(2, 140, true);
  mp.game.controls.disableControlAction(2, 141, true);
  mp.game.controls.disableControlAction(2, 142, true);
  mp.game.controls.disableControlAction(2, 257, true);
  mp.game.controls.disableControlAction(2, 263, true);
  mp.game.controls.disableControlAction(2, 264, true);
  mp.game.controls.disableControlAction(2, 331, true);
  mp.game.controls.disableControlAction(2, 25, true);
  mp.game.controls.disableControlAction(2, 66, true);
  mp.game.controls.disableControlAction(2, 67, true);
  mp.game.controls.disableControlAction(2, 68, true);
  mp.game.controls.disableControlAction(2, 91, true);
  let _0xdff09e = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2, res.y / 2, 0));
  if (!_0xdff09e) {
    return;
  }
  let _0x5da76f = mp.game.gameplay.getGroundZFor3dCoord(_0xdff09e.x, _0xdff09e.y, _0xdff09e.z, 0, false);
  for (let _0x31ba9e = 1; _0x31ba9e < 11 && (_0x5da76f != 0 || (_0x5da76f = mp.game.gameplay.getGroundZFor3dCoord(_0xdff09e.x, _0xdff09e.y, _0xdff09e.z + _0x31ba9e, 0, false), _0x5da76f == 0)); _0x31ba9e++);
  if (_0x5da76f == 0) {
    _0x5da76f = mp.game.gameplay.getGroundZFor3dCoord(_0xdff09e.x, _0xdff09e.y, _0xdff09e.z + 50, 0, false);
  }
  if (barricade_number == 24) {
    _0x5da76f += 1.2;
  } else if (barricade_number == 27) {
    _0x5da76f += 1.5;
  }
  _0xdff09e.z = _0x5da76f + additional_z;
  barricade_pos = _0xdff09e;
  if (barricade_obj && mp.objects.exists(barricade_obj)) {
    barricade_obj.position = _0xdff09e;
    barricade_obj.rotation = new mp.Vector3(barricade_rotx, 0, barricade_rot);
    barricade_obj.setCollision(false, false);
  }
});
global.FastAction1 = function () {
  if (GlobalCheck() == 1 || !entity || entity.type !== "player") {
    return;
  }
  if (!entity || !mp.players.exists(entity)) {
    return;
  }
  if (localplayer.cuffed) {
    return;
  }
  const _0x30de9c = local_member;
  if (_0x30de9c == 1 || _0x30de9c == 3 || _0x30de9c == 4 || _0x30de9c == 12 || _0x30de9c == 2 || _0x30de9c == 14 || _0x30de9c == 7 || _0x30de9c == 8 || _0x30de9c == 9 || _0x30de9c == 10 || _0x30de9c == 11) {
    if (is_in_casino == 1) {
      return mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
    } else {
      if (_0x30de9c == 1) {
        mp.events.callRemote("PlayerInteract", "Heal", entity);
      } else if (_0x30de9c == 3 || _0x30de9c == 4 || _0x30de9c == 12) {
        mp.events.callRemote("PlayerInteract", "Cuff", entity);
      } else if (_0x30de9c == 2) {
        mp.events.callRemote("PlayerInteract", "army_cuff", entity);
      } else if (_0x30de9c == 14) {
        mp.events.callRemote("PlayerInteract", "gov_cuff", entity);
      } else if (_0x30de9c >= 7 && _0x30de9c <= 11) {
        mp.events.callRemote("ServerAction", "rope_hands", entity);
      }
      return;
    }
  } else {
    return undefined;
  }
};
global.FastAction2 = function () {
  if (global.isLocalPlayerHasActiveFollowTarget) {
    return mp.events.callRemote("Server_StopFollowByPoliceman");
  }
  if (GlobalCheck() == 1 || !entity || entity.type !== "player") {
    return;
  }
  if (!entity || !mp.players.exists(entity)) {
    return;
  }
  if (localplayer.cuffed) {
    return;
  }
  const _0x139e62 = local_member;
  if (_0x139e62 == 3 || _0x139e62 == 4 || _0x139e62 == 12 || _0x139e62 == 2 || _0x139e62 == 14 || _0x139e62 == 7 || _0x139e62 == 8 || _0x139e62 == 9 || _0x139e62 == 10 || _0x139e62 == 11 || _0x139e62 == 1) {
    if (is_in_casino == 1) {
      return mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
    } else if (entity.dead_state) {
      return mp.game.ui.notifications.show(language["Взаимодействие запрещено"][curr_lang], false, 0, 6);
    } else {
      if (_0x139e62 == 1 && global.curr_lang == "ru") {
        mp.events.callRemote("PlayerInteract", "ems_cuff", entity);
      } else if (_0x139e62 == 3 || _0x139e62 == 4 || _0x139e62 == 12) {
        mp.events.callRemote("PlayerInteract", "Follow", entity);
      } else if (_0x139e62 == 2) {
        mp.events.callRemote("PlayerInteract", "army_follow", entity);
      } else if (_0x139e62 == 14) {
        mp.events.callRemote("PlayerInteract", "gov_follow", entity);
      } else if (_0x139e62 >= 7 && _0x139e62 <= 11) {
        mp.events.callRemote("ServerAction", "follow_roped_player", entity);
      }
      return;
    }
  } else {
    return undefined;
  }
};
global.FastAction3 = function () {
  if (curr_lang == "ru" && typeof localplayer.getVariable("policeEscortId") == "number") {
    return mp.events.callRemote("Server_PoliceCancelEscort");
  }
  if (GlobalCheck() == 1 || !entity || entity.type !== "player") {
    return;
  }
  if (!entity || !mp.players.exists(entity)) {
    return;
  }
  if (localplayer.cuffed) {
    return;
  }
  const _0x3044f8 = local_member;
  if (_0x3044f8 == 3 || _0x3044f8 == 4 || _0x3044f8 == 12 || _0x3044f8 == 1 || _0x3044f8 == 2 || _0x3044f8 == 14) {
    if (is_in_casino == 1) {
      return mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
    } else if (entity.dead_state) {
      return mp.game.ui.notifications.show(language["Взаимодействие запрещено"][curr_lang], false, 0, 6);
    } else {
      if (_0x3044f8 == 1) {
        mp.events.callRemote("PlayerInteract", "ems_follow", entity);
      } else {
        mp.events.callRemote("PlayerInteract", "PutInCar", entity);
      }
      return;
    }
  } else {
    return undefined;
  }
};
let escort_event_timeout = null;
mp.events.add("Client_Escort_Event_Notify", (_0x535d49, _0x106675) => {
  if (curr_lang != "ru" || mp.storage.data.new_design_show != 1 || playerincapture != 1) {
    if (escort_event_timeout) {
      main_browser.execute("APPS.state.hud.event_show = false;");
      main_browser.execute("APPS.state.hud.prepare_escort = false;");
      clearTimeout(escort_event_timeout);
      escort_event_timeout = null;
    }
    PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
    main_browser.execute("APPS.state.hud.event_name = '" + _0x535d49 + "';");
    main_browser.execute("APPS.state.hud.event_discription = '" + _0x106675 + "';");
    main_browser.execute("APPS.state.hud.prepare_escort = true;");
    main_browser.execute("APPS.state.hud.event_show = true;");
    escort_event_timeout = setTimeout(() => {
      escort_event_timeout = null;
      main_browser.execute("APPS.state.hud.prepare_escort = false;");
      main_browser.execute("APPS.state.hud.event_show = false;");
    }, 10000);
  }
});
global.ShowEventNotification = function (_0x4960ac, _0x1c99e9) {
  if (escort_event_timeout) {
    main_browser.execute("APPS.state.hud.event_show = false;");
    main_browser.execute("APPS.state.hud.prepare_escort = false;");
    clearTimeout(escort_event_timeout);
    escort_event_timeout = null;
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  main_browser.execute("APPS.state.hud.event_name = '" + _0x4960ac + "';");
  main_browser.execute("APPS.state.hud.event_discription = '" + _0x1c99e9 + "';");
  main_browser.execute("APPS.state.hud.prepare_escort = true;");
  main_browser.execute("APPS.state.hud.event_show = true;");
  escort_event_timeout = setTimeout(() => {
    escort_event_timeout = null;
    main_browser.execute("APPS.state.hud.prepare_escort = false;");
    main_browser.execute("APPS.state.hud.event_show = false;");
  }, 10000);
};
mp.events.add("Client_Escort_Event_Notify_FadeOut", () => {
  if (escort_event_timeout) {
    main_browser.execute("APPS.state.hud.event_show = false;");
    main_browser.execute("APPS.state.hud.prepare_escort = false;");
    clearTimeout(escort_event_timeout);
    escort_event_timeout = null;
  }
});
const informant_options = [{
  name: "Anthony Lambert",
  model: "ig_casey",
  position: new mp.Vector3(141.935, -3324.961, 6.022),
  rotation: 198.225,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  cam_pos: new mp.Vector3(142.58, -3326.547, 6.671),
  cam_point: new mp.Vector3(141.319, -3323.619, 6.964)
}, {
  name: "George Matthews",
  model: "ig_casey",
  position: new mp.Vector3(1240.454, -3158.788, 5.528),
  rotation: 274.414,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  cam_pos: new mp.Vector3(1242.187, -3158.552, 6.679),
  cam_point: new mp.Vector3(1239.076, -3159.143, 6.498)
}, {
  name: "Peter Tate",
  model: "ig_casey",
  position: new mp.Vector3(-516.525, -2867.196, 6),
  rotation: 54.316,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  cam_pos: new mp.Vector3(-518.71, -2865.705, 7.102),
  cam_point: new mp.Vector3(-511.583, -2869.877, 6.965)
}, {
  name: "Robert Newman",
  model: "ig_casey",
  position: new mp.Vector3(1045.233, -2509.065, 28.46),
  rotation: 356.022,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  cam_pos: new mp.Vector3(1045.274, -2507.37, 29.074),
  cam_point: new mp.Vector3(1045.349, -2510.594, 29.066)
}, {
  name: "Hubert Brown",
  model: "ig_casey",
  position: new mp.Vector3(1127.281, -2034.914, 32.063),
  rotation: 86.667,
  speech: "GUNSH_GREET0",
  voice: "S_M_M_AMMUCOUNTRY_01_WHITE_01",
  cam_pos: new mp.Vector3(1125.211, -2035.282, 32.931),
  cam_point: new mp.Vector3(1128.217, -2034.923, 32.729)
}];
let escort_label;
let escort_ped;
let escort_colshape;
let escort_speech;
let escort_voice;
let informant_blips;
let escort_veh_blips;
let escort_finish_blips;
let collector_unload_blips;
let gang_collector_route_blips;
let prepare_escort_loaded = false;
function MakeKits(_0x45c6c2) {
  let _0x2fd859 = [];
  let _0xef099c = [];
  let _0x400a54 = 0;
  for (let _0x59142c = 0; _0x59142c < 5; _0x59142c++) {
    _0x400a54 = 0;
    _0xef099c = [];
    for (let _0x3b5d34 = 0; _0x3b5d34 < 6; _0x3b5d34++) {
      if (curr_lang == "ru") {
        _0xef099c.push({
          item_id: InventoryItems[_0x45c6c2[_0x59142c][_0x3b5d34]][2],
          item_count: _0x45c6c2[_0x59142c][_0x3b5d34 + 6],
          item_prewiew: "https://grandcaptcha.com/images/other_items/" + InventoryItems[_0x45c6c2[_0x59142c][_0x3b5d34]][1] + ".png"
        });
      } else {
        _0xef099c.push({
          item_id: InventoryItems[_0x45c6c2[_0x59142c][_0x3b5d34]][2],
          item_count: _0x45c6c2[_0x59142c][_0x3b5d34 + 6],
          item_prewiew: "https://launcher.gta5grand.com/game/images/other_items/" + InventoryItems[_0x45c6c2[_0x59142c][_0x3b5d34]][1] + ".png"
        });
      }
      _0x400a54 += InventoryItems[_0x45c6c2[_0x59142c][_0x3b5d34]][5] * _0x45c6c2[_0x59142c][_0x3b5d34 + 6];
    }
    _0x2fd859.push({
      weight: _0x400a54.toFixed(1),
      items: _0xef099c
    });
  }
  return _0x2fd859;
}
global.informant_cam_pos = undefined;
global.informant_cam_point = undefined;
global.at_informant_bot = false;
mp.events.add("Start_Prepare_EscortEvent", _0x47079c => {
  if (prepare_escort_loaded == 1) {
    return;
  }
  if ((_0x47079c = parseInt(_0x47079c)) < 0 || _0x47079c > informant_options.length) {
    return;
  }
  const _0x1e828f = _0x47079c;
  escort_label = mp.labels.new(informant_options[_0x1e828f].name, new mp.Vector3(informant_options[_0x1e828f].position.x, informant_options[_0x1e828f].position.y, informant_options[_0x1e828f].position.z + 1), {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  });
  escort_ped = mp.peds.new(mp.game.joaat(informant_options[_0x1e828f].model), informant_options[_0x1e828f].position, informant_options[_0x1e828f].rotation, _0x2eb70d => {}, 0);
  escort_colshape = mp.colshapes.newSphere(informant_options[_0x1e828f].position.x, informant_options[_0x1e828f].position.y, informant_options[_0x1e828f].position.z, 2.5);
  escort_colshape.prepare_to_escort = true;
  escort_speech = informant_options[_0x1e828f].speech;
  escort_voice = informant_options[_0x1e828f].voice;
  informant_cam_pos = informant_options[_0x1e828f].cam_pos;
  informant_cam_point = informant_options[_0x1e828f].cam_point;
  informant_blips = mp.blips.new(280, new mp.Vector3(informant_options[_0x1e828f].position.x, informant_options[_0x1e828f].position.y, informant_options[_0x1e828f].position.z + 1), {
    name: language["Место направления"][curr_lang],
    color: 1
  });
  informant_blips.setRoute(true);
  prepare_escort_loaded = true;
});
mp.events.add("playerEnterColshape", _0x20879d => {
  if (mp.colshapes.exists(_0x20879d) && _0x20879d.prepare_to_escort == 1 && prepare_escort_loaded == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    at_informant_bot = true;
    mp.game.audio.playAmbientSpeechWithVoice(escort_ped.handle, escort_speech, escort_voice, "SPEECH_PARAMS_FORCE_NORMAL", false);
    return;
  }
  if (mp.colshapes.exists(_0x20879d) && _0x20879d.is_mugshot_place >= 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_mugshot_place = _0x20879d.is_mugshot_place;
  }
});
mp.events.add("playerExitColshape", _0x57fcb7 => {
  if (mp.colshapes.exists(_0x57fcb7) && _0x57fcb7.prepare_to_escort == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_informant_bot = false;
    return;
  }
  if (mp.colshapes.exists(_0x57fcb7) && _0x57fcb7.is_mugshot_place >= 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_mugshot_place = 0;
  }
});
mp.events.add("End_Prepare_EscortEvent", () => {
  if (escort_label) {
    escort_label.destroy();
    escort_label = undefined;
  }
  if (escort_ped) {
    escort_ped.destroy();
    escort_ped = undefined;
  }
  if (escort_colshape) {
    escort_colshape.destroy();
    escort_colshape = undefined;
  }
  escort_speech = undefined;
  escort_voice = undefined;
  informant_cam_pos = undefined;
  informant_cam_point = undefined;
  if (informant_blips) {
    informant_blips.destroy();
    informant_blips = undefined;
  }
  prepare_escort_loaded = false;
  if (at_informant_bot) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_informant_bot = false;
  }
});
mp.events.add("Start_EscortEvent", (_0x4d6c0e, _0x44faa6, _0x45b10d) => {
  if (escort_veh_blips) {
    escort_veh_blips.destroy();
    escort_veh_blips = undefined;
  }
  if (!escort_veh_blips) {
    escort_veh_blips = mp.blips.new(530, new mp.Vector3(_0x4d6c0e, _0x44faa6, _0x45b10d), {
      name: language["Премиальный транспорт"][curr_lang],
      color: 1
    });
    escort_veh_blips.setRoute(true);
  }
});
mp.events.add("Destroy_Escort_Blips", () => {
  if (escort_veh_blips) {
    escort_veh_blips.destroy();
    escort_veh_blips = undefined;
  }
  if (escort_finish_blips) {
    escort_finish_blips.destroy();
    escort_finish_blips = undefined;
  }
});
mp.events.add("Client_Escort_Show_Finish", (_0x5960a6, _0x3ed73f, _0x317fb8) => {
  if (!escort_finish_blips) {
    escort_finish_blips = mp.blips.new(315, new mp.Vector3(_0x5960a6, _0x3ed73f, _0x317fb8), {
      name: language["Сдача транспорта"][curr_lang],
      color: 2
    });
    escort_finish_blips.setRoute(true);
  }
});
mp.events.add("Collector_Event_Counter", _0x1e0045 => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Загружено[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["денег:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = \"$" + _0x1e0045 * 100 + "\";");
  main_browser.execute("APPS.state.hud.job_hud = 141;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
global.collector_veh_id = undefined;
mp.events.add("Collector_Can_SetInVeh", _0x114533 => {
  collector_veh_id = _0x114533;
});
mp.events.add("Client_Collector_Route", (_0x391b64, _0x5212b8, _0x2823d7, _0x508528 = 1) => {
  if (collector_unload_blips) {
    collector_unload_blips.destroy();
    collector_unload_blips = undefined;
  }
  if (!collector_unload_blips) {
    if (_0x508528 == 1) {
      collector_unload_blips = mp.blips.new(1, new mp.Vector3(_0x391b64, _0x5212b8, _0x2823d7), {
        name: language["Сдача денег"][curr_lang],
        color: 2
      });
      collector_unload_blips.setRoute(true);
    } else if (_0x508528 == 2) {
      collector_unload_blips = mp.blips.new(84, new mp.Vector3(_0x391b64, _0x5212b8, _0x2823d7), {
        name: language["Банковское отделение"][curr_lang],
        color: 1
      });
      collector_unload_blips.setRoute(true);
    }
  }
});
mp.events.add("Client_Collector_GangRoute", (_0x199e2f, _0x3cbfea, _0x1a8f6d) => {
  if (collector_unload_blips) {
    collector_unload_blips.destroy();
    collector_unload_blips = undefined;
  }
  collector_unload_blips = mp.blips.new(1, new mp.Vector3(_0x199e2f, _0x3cbfea, _0x1a8f6d), {
    name: language["Место сдачи транспорта"][curr_lang],
    color: 1
  });
  collector_unload_blips.setRoute(true);
});
mp.events.add("DestroyCollectorEventItems", () => {
  if (collector_unload_blips) {
    collector_unload_blips.destroy();
    collector_unload_blips = undefined;
  }
  collector_veh_id = undefined;
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});
mp.events.add("Client_Collector_UpdateTime", _0x42b792 => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Осталось[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["минут:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = \"" + _0x42b792 + "\";");
  main_browser.execute("APPS.state.hud.job_hud = 141;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
global.CustomNumberPlateOpened = false;
mp.events.add("OpenNumberPlateClient", (_0x284bfb, _0xc96ec6) => {
  if (GlobalCheck() == 1 && CustomNumberPlateOpened == 0) {
    return;
  }
  const _0x3e460c = "{\"plates_array\":" + JSON.stringify(_0x284bfb) + ",\"pid\":" + _0xc96ec6 + ",\"show\":true}";
  main_browser.execute("APPS.state.car_number = " + _0x3e460c);
  CustomNumberPlateOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseNumberPlate = function () {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.car_number.show = false;");
    CustomNumberPlateOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ReloadNumbersPlate", _0x4443f2 => {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.car_number.plates_array = " + JSON.stringify(_0x4443f2) + ";");
  }
});
mp.events.add("Number_Plate_Error", _0x5d627c => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x5d627c + "');");
});
mp.events.add("Client_BuyCustomPlate", _0x332152 => {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyCustomPlate", _0x332152);
    }
  }
});
mp.events.add("Client_SellNumber", () => {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SellNumberPlate");
    }
  }
});
mp.events.add("Client_BuyPlateNumber", _0x54fbb3 => {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyPlateFromNumberPlate", _0x54fbb3);
    }
  }
});
mp.events.add("Client_CloseNumberPlate", () => {
  if (CustomNumberPlateOpened && loggedin && !chatActive) {
    CloseNumberPlate();
  }
});
global.WarehouseOpened = false;
mp.events.add("Client_OpenWarehouse", (_0x834057, _0x509e40, _0x499b11, _0x5556fa, _0x1ab552, _0x10b90, _0x116e1f = [], _0x5d034b, _0x174786 = 0, _0x57f356, _0x17264a) => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (_0x174786) {
    _0x57f356 = MakeKits(_0x57f356);
  }
  _0x834057 = _0x834057.map(_0x46fd91 => ({
    ..._0x46fd91,
    name: resolveTranslationValue(_0x46fd91.name)
  }));
  const _0x191058 = "{\"gun_info\":" + JSON.stringify(_0x834057) + ",\"armor_count\":[" + _0x509e40 + "],\"countdown\":" + _0x5556fa + ",\"is_member\":" + _0x499b11 + ",\"is_gang\":" + _0x10b90 + ",\"lock\":" + _0x1ab552 + ",\"log_info\":[" + _0x116e1f + "],\"can_history\":" + _0x5d034b + ",\"member\":" + _0x174786 + ",\"page_status\":0,\"page_count\":0, \"slotsfree\": " + _0x17264a + ",\"gun_kits\": " + JSON.stringify(_0x57f356) + ",\"show\":true}";
  main_browser.execute("APPS.state.warehouse = " + _0x191058);
  WarehouseOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_UpdateKitsWarehouse", _0x1f5aa1 => {
  _0x1f5aa1 = MakeKits(_0x1f5aa1);
  main_browser.execute("APPS.state.warehouse.gun_kits = " + JSON.stringify(_0x1f5aa1) + ";");
});
global.CloseWarehouse = function () {
  if (WarehouseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.warehouse.show = false;");
    mp.events.callRemote("Server_CloseWarehouseAmmo");
    WarehouseOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseWarehouse", () => {
  CloseWarehouse();
});
mp.events.add("Client_UpdateWarehouseOrgCD", _0x29751b => {
  if (WarehouseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.warehouse.countdown = " + _0x29751b + ";");
  }
});
mp.events.add("Client_UpdateAmmoGunWarehouse", _0x435345 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    _0x435345 = _0x435345.map(_0x1b9946 => ({
      ..._0x1b9946,
      name: resolveTranslationValue(_0x1b9946.name)
    }));
    main_browser.execute("APPS.state.warehouse.gun_info = " + JSON.stringify(_0x435345) + ";");
  }
});
mp.events.add("Client_UpdateAmmoGunWarehouseLockStatus", _0x1c88c5 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.warehouse.lock = " + _0x1c88c5 + ";");
  }
});
mp.events.add("Client_UpdateArmorGunWarehouse", _0x3d4c87 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.warehouse.armor_count = [" + _0x3d4c87 + "];");
  }
});
mp.events.add("Client_LoadFamilyWeaponLogs", _0x4c7765 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.warehouse.log_info = [" + _0x4c7765 + "];");
    main_browser.execute("APPS.state.warehouse.page_status = 1;");
    main_browser.execute("APPS.state.warehouse.page_count = 1;");
  }
});
mp.events.add("Client_WarehouseGetGun", _0x3b709a => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseGetGun", _0x3b709a);
    }
  }
});
mp.events.add("Client_FamWarehouseGetGun", _0x17f793 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseGetGun", _0x17f793);
    }
  }
});
mp.events.add("Client_GetFamWeaponLogs", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetFamWeaponLogs");
    }
  }
});
mp.events.add("Client_WarehousePutGun", _0x365b4f => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehousePutGun", _0x365b4f);
    }
  }
});
mp.events.add("Client_FamWarehousePutGun", _0x29b52f => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehousePutGun", _0x29b52f);
    }
  }
});
mp.events.add("Client_WarehouseSetCountDown", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseSetCountDown");
    }
  }
});
mp.events.add("Client_FamWarehouseSetCountDown", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseSetCountDown");
    }
  }
});
mp.events.add("Client_WarehouseSetMaxStock", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseSetMaxStock");
    }
  }
});
mp.events.add("Client_FamWarehouseSetMaxStock", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseSetMaxStock");
    }
  }
});
mp.events.add("Client_WarehouseSetWarehouse", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseSetWarehouse");
    }
  }
});
mp.events.add("Client_FamWarehouseSetWarehouse", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseSetWarehouse");
    }
  }
});
mp.events.add("Client_WarehouseGetArmor", _0x5c5a98 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseGetArmor", _0x5c5a98);
    }
  }
});
mp.events.add("Client_FamWarehouseGetArmor", _0x4e40f2 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseGetArmor", _0x4e40f2);
    }
  }
});
mp.events.add("Client_WarehouseSetArmor", _0x5661c0 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseSetArmor", _0x5661c0);
    }
  }
});
mp.events.add("Client_FamWarehouseGetOrder", () => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseGetOrder");
    }
  }
});
mp.events.add("Client_FamWarehouseSetArmor", _0x5809dc => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseSetArmor", _0x5809dc);
    }
  }
});
mp.events.add("Client_OrgWarehouse_Error", _0xa31caf => {
  if (WarehouseOpened != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xa31caf + "');");
  }
});
const jail_room_id = -1481274490;
const jail_int_id = 126722;
let jail_entities_update_interval;
let police_colshape_exit;
let police_minimap_blip;
function ToggleJailVisibleFix(_0x2eadce) {
  if (_0x2eadce) {
    if (jail_entities_update_interval != null) {
      return;
    }
    jail_entities_update_interval = setInterval(() => {
      const _0x4b226f = mp.game.invoke("0x47C2A06D4F5F424B", localplayer.handle);
      const _0x57bd3e = mp.game.invoke("0x2107BA504071A6BB", localplayer.handle);
      if (_0x57bd3e == 126722) {
        mp.players.forEachInStreamRange(_0x4d7cac => {
          let _0xebff32 = mp.game.invoke("0x47C2A06D4F5F424B", _0x4d7cac.handle);
          let _0x53d5c6 = mp.game.invoke("0x2107BA504071A6BB", _0x4d7cac.handle);
          if (_0xebff32 != _0x4b226f || _0x53d5c6 != _0x57bd3e) {
            mp.game.invoke("0x52923C4710DD9907", _0x4d7cac.handle, _0x57bd3e, _0x4b226f);
          }
        });
      }
    }, 250);
  } else if (jail_entities_update_interval != null) {
    clearInterval(jail_entities_update_interval);
    jail_entities_update_interval = undefined;
  }
}
function onCampingKeyDown() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_camping_process) {
    camping_rot -= 5;
    if (camping_rot < 0) {
      camping_rot = 360;
    }
  }
}
function onCampingKeyUp() {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_camping_process) {
    camping_rot += 5;
    if (camping_rot > 360) {
      camping_rot = 0;
    }
  }
}
mp.colshapes.newSphere(1779.496, 2583.871, 45.798, 75).jail_main_hall = true;
mp.events.add("playerEnterColshape", _0x2f4044 => {
  if (mp.colshapes.exists(_0x2f4044) && _0x2f4044.is_enter_police == 1) {
    if (police_colshape_exit) {
      police_colshape_exit.destroy();
      police_colshape_exit = undefined;
    }
    mp.events.callRemote("Server_EnterPoliceCall", _0x2f4044.is_robbery_correct);
  }
  if (mp.colshapes.exists(_0x2f4044) && _0x2f4044.is_alarm_colshape == 1) {
    if (alarm_blip) {
      alarm_blip.destroy();
      alarm_blip = null;
    }
    if (alarm_colshape) {
      alarm_colshape.destroy();
      alarm_colshape = null;
    }
  } else if (mp.colshapes.exists(_0x2f4044) && _0x2f4044.is_alarm_colshape2 == 1) {
    if (alarm_blip2) {
      alarm_blip2.destroy();
      alarm_blip2 = null;
    }
    if (alarm_colshape2) {
      alarm_colshape2.destroy();
      alarm_colshape2 = null;
    }
  } else if (mp.colshapes.exists(_0x2f4044) && _0x2f4044.jail_main_hall == 1) {
    ToggleJailVisibleFix(true);
  }
});
mp.events.add("playerExitColshape", _0x2fed3f => {
  if (mp.colshapes.exists(_0x2fed3f) && _0x2fed3f.is_exit_police == 1) {
    if (police_colshape_exit) {
      police_colshape_exit.destroy();
      police_colshape_exit = undefined;
      mp.events.callRemote("Server_ExitPoliceCall");
    }
    if (police_minimap_blip != null) {
      mp.game.ui.removeBlip(police_minimap_blip);
      police_minimap_blip = undefined;
    }
  } else if (mp.colshapes.exists(_0x2fed3f) && _0x2fed3f.jail_main_hall == 1) {
    ToggleJailVisibleFix(false);
  }
});
mp.events.add("Client_PoliceColshapeCreate", (_0x5f2ed3, _0x2c01f9 = 1, _0x5e6734 = 0, _0x53e792 = 0) => {
  if (police_colshape_exit) {
    police_colshape_exit.destroy();
    police_colshape_exit = undefined;
  }
  if (_0x2c01f9 == 1) {
    police_colshape_exit = mp.colshapes.newCircle(_0x5f2ed3.x, _0x5f2ed3.y, 20, localplayer.dimension);
    police_colshape_exit.is_exit_police = true;
    if (police_minimap_blip != null) {
      mp.game.ui.removeBlip(police_minimap_blip);
      police_minimap_blip = undefined;
    }
    police_minimap_blip = mp.game.ui.addBlipForRadius(_0x5f2ed3.x, _0x5f2ed3.y, _0x5f2ed3.z, 20);
    mp.game.ui.setBlipSprite(police_minimap_blip, zone_blips);
    mp.game.ui.setBlipAlpha(police_minimap_blip, 100);
    mp.game.ui.setBlipColour(police_minimap_blip, zone_color);
  } else if (_0x2c01f9 == 2) {
    let _0x5c7aea = 20;
    if (_0x53e792) {
      _0x5c7aea = 5;
    }
    police_colshape_exit = mp.colshapes.newCircle(_0x5f2ed3.x, _0x5f2ed3.y, _0x5c7aea, _0x5e6734);
    police_colshape_exit.is_enter_police = true;
    if (_0x53e792) {
      police_colshape_exit.is_robbery_correct = _0x53e792;
    }
  }
});
mp.events.add("Client_PoliceColshapeDelete", () => {
  if (police_colshape_exit) {
    const _0x3cf5df = police_colshape_exit;
    setTimeout(function () {
      if (_0x3cf5df && mp.colshapes.exists(_0x3cf5df)) {
        _0x3cf5df.destroy();
      }
    }, 100);
    police_colshape_exit = undefined;
  }
  if (police_minimap_blip != null) {
    mp.game.ui.removeBlip(police_minimap_blip);
    police_minimap_blip = undefined;
  }
});
mp.events.add("Client_Set_Camping_Item", _0x206c92 => {
  if (in_camping_process == 1) {
    return;
  }
  if (mp.game.system.vdist(-1115.07, 4923.946, 218.034, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 70 && in_greenzone) {
    return mp.game.ui.notifications.show(language["Нельзя ставить предметы в зеленой зоне"][curr_lang], false, 0, 6);
  }
  mp.keys.bind(40, false, onCampingKeyDown);
  mp.keys.bind(38, false, onCampingKeyUp);
  camping_number = _0x206c92;
  camping_rot = 90;
  in_camping_process = true;
  let _0x550f95 = "";
  if (camping_number == 1) {
    _0x550f95 = "prop_skid_tent_01";
  } else if (camping_number == 2) {
    _0x550f95 = "prop_beach_fire";
  } else if (camping_number == 3) {
    _0x550f95 = "prop_bbq_5";
  } else if (camping_number == 4) {
    _0x550f95 = "ind_prop_firework_01";
  } else if (camping_number == 5) {
    _0x550f95 = "ind_prop_firework_02";
  } else if (camping_number == 6) {
    _0x550f95 = "ind_prop_firework_04";
  } else if (camping_number == 7) {
    _0x550f95 = "ind_prop_firework_03";
  }
  camping_obj = mp.objects.new(mp.game.joaat(_0x550f95), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 20), {
    rotation: new mp.Vector3(0, 0, camping_rot),
    alpha: 200,
    dimension: mp.players.local.dimension
  });
  HintShow(language["ЛКМ - установить объект<br>ПКМ - отменить<br>Стрелка наверх, стрелка вниз - поворот объекта"][curr_lang]);
});
let camping_obj;
let camping_pos;
let in_camping_process = false;
let camping_number = 0;
let camping_rot = 90;
function FinishCampingSet(_0x2060e2) {
  if (in_camping_process == 1) {
    mp.keys.unbind(40, false, onCampingKeyDown);
    mp.keys.unbind(38, false, onCampingKeyUp);
    in_camping_process = false;
    if (_0x2060e2 == 1 && localplayer.isInWater()) {
      if (camping_obj && mp.objects.exists(camping_obj)) {
        camping_obj.destroy();
        camping_obj = undefined;
      }
      return mp.game.ui.notifications.show(language["Нельзя устанавливать объкты здесь"][curr_lang], false, 0, 6);
    }
    if (_0x2060e2 == 1 && mp.objects.exists(camping_obj) && (mp.game.system.vdist(-1115.07, 4923.946, 218.034, localplayer.position.x, localplayer.position.y, localplayer.position.z) < 70 || !in_greenzone)) {
      if (camping_number >= 4 && camping_number <= 7) {
        mp.events.callRemote("Server_StartCreateFirework", camping_number - 3, JSON.stringify(camping_pos), camping_rot);
      } else {
        mp.events.callRemote("Server_StartCreateCamping", camping_number, JSON.stringify(camping_pos), camping_rot);
      }
    }
    if (camping_obj && mp.objects.exists(camping_obj)) {
      camping_obj.destroy();
      camping_obj = undefined;
    }
    if (in_greenzone) {
      mp.game.ui.notifications.show(language["Нельзя ставить предметы в зеленой зоне"][curr_lang], false, 0, 6);
    }
  }
  HintClose();
}
mp.events.add("click", (_0x4d8fd9, _0x220bcc, _0x207dbb, _0x323357, _0x2ac5d3, _0xad5865, _0x1e9364, _0x56873e) => {
  if (loggedin && in_camping_process != 0) {
    if (_0x323357 == "left") {
      FinishCampingSet(1);
    } else if (_0x323357 == "right") {
      FinishCampingSet(2);
    }
  }
});
mp.events.add("render", () => {
  if (!loggedin || in_camping_process == 0 && inBarricadeEditor == 0) {
    return;
  }
  mp.game.controls.disableControlAction(2, 22, true);
  mp.game.controls.disableControlAction(2, 24, true);
  mp.game.controls.disableControlAction(2, 69, true);
  mp.game.controls.disableControlAction(2, 70, true);
  mp.game.controls.disableControlAction(2, 92, true);
  mp.game.controls.disableControlAction(2, 114, true);
  mp.game.controls.disableControlAction(2, 121, true);
  mp.game.controls.disableControlAction(2, 140, true);
  mp.game.controls.disableControlAction(2, 141, true);
  mp.game.controls.disableControlAction(2, 142, true);
  mp.game.controls.disableControlAction(2, 257, true);
  mp.game.controls.disableControlAction(2, 263, true);
  mp.game.controls.disableControlAction(2, 264, true);
  mp.game.controls.disableControlAction(2, 331, true);
  mp.game.controls.disableControlAction(2, 25, true);
  mp.game.controls.disableControlAction(2, 66, true);
  mp.game.controls.disableControlAction(2, 67, true);
  mp.game.controls.disableControlAction(2, 68, true);
  mp.game.controls.disableControlAction(2, 91, true);
  if (inBarricadeEditor == 1) {
    return;
  }
  let _0x3b0e01 = 0;
  if (camping_number == 1) {
    _0x3b0e01 = 0.6;
  } else if (camping_number == 2 || camping_number == 3) {
    _0x3b0e01 = 0.1;
  }
  let _0x2883a8 = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2, res.y / 2, 0));
  if (!_0x2883a8) {
    return;
  }
  let _0x3e5335 = mp.game.gameplay.getGroundZFor3dCoord(_0x2883a8.x, _0x2883a8.y, _0x2883a8.z, 0, false);
  for (let _0x1dfee6 = 1; _0x1dfee6 < 11 && (_0x3e5335 != 0 || (_0x3e5335 = mp.game.gameplay.getGroundZFor3dCoord(_0x2883a8.x, _0x2883a8.y, _0x2883a8.z + _0x1dfee6, 0, false), _0x3e5335 == 0)); _0x1dfee6++);
  if (_0x3e5335 == 0) {
    _0x3e5335 = mp.game.gameplay.getGroundZFor3dCoord(_0x2883a8.x, _0x2883a8.y, _0x2883a8.z + 50, 0, false);
  }
  _0x2883a8.z = _0x3e5335 + _0x3b0e01;
  camping_pos = _0x2883a8;
  if (camping_obj && mp.objects.exists(camping_obj)) {
    camping_obj.position = _0x2883a8;
    camping_obj.rotation = new mp.Vector3(0, 0, camping_rot);
    camping_obj.setCollision(false, false);
    if (camping_number === 2) {
      mp.game.fire.stopFireInRange(_0x2883a8.x, _0x2883a8.y, _0x2883a8.z, 4);
    }
  }
});
global.at_mugshot_place = 0;
global.at_mugshot_photo = 0;
mp.colshapes.newSphere(-432.67, 5994.31, 27.804, 1, 0).is_mugshot_place = 1;
mp.colshapes.newSphere(461.668, -980.71, 24.264, 1, 0).is_mugshot_place = 2;
mp.colshapes.newSphere(147.456, -765.126, 242.152, 1, 0).is_mugshot_place = 3;
mp.colshapes.newSphere(1830.062, 2581.805, 45.952, 1, 0).is_mugshot_place = 4;
const mugshot_cameras = [[-431.543, 5995.43, 28.523, -430.991, 5995.998, 28.486], [461.806, -982.311, 24.961, 461.767, -983.131, 24.882], [148.224, -763.134, 242.798, 148.557, -762.445, 242.793], [1828.725, 2581.767, 46.599, 1828.129, 2581.788, 46.578]];
mp.events.add("Client_DoPoliceMugshot", _0x1dff1b => {
  if (at_mugshot_place) {
    if (local_member != 3 && local_member != 4 && local_member != 12) {
      return mp.game.ui.notifications.show(language["Вы не сотрудник полиции"][curr_lang], false, 0, 6);
    }
    at_mugshot_photo = _0x1dff1b;
    localplayer.freezePosition(true);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    localcamera = mp.cameras.new("default", new mp.Vector3(mugshot_cameras[at_mugshot_place - 1][0], mugshot_cameras[at_mugshot_place - 1][1], mugshot_cameras[at_mugshot_place - 1][2]), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(mugshot_cameras[at_mugshot_place - 1][3], mugshot_cameras[at_mugshot_place - 1][4], mugshot_cameras[at_mugshot_place - 1][5]);
    localcamera.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 500, true, false);
    OpenMobileCamera(4);
    main_browser.execute("APPS.state.hud.interact = false;");
    at_mugshot_place = 0;
  }
});
global.CloseMugShotCamera = function () {
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  at_mugshot_photo = 0;
  at_mugshot_place = 0;
  localplayer.freezePosition(false);
};
mp.events.add("Client_WarehouseAddKitsArmor", _0x1737ab => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseAddKitsArmor", _0x1737ab);
    }
  }
});
mp.events.add("Client_FamWarehouseAddKitsArmor", _0x40bc94 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FamWarehouseAddKitsArmor", _0x40bc94);
    }
  }
});
mp.events.add("Client_WarehouseAddKits", _0x42cef5 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseAddKits", _0x42cef5);
    }
  }
});
mp.events.add("Client_WarehouseKitsRemove", _0x2db0e4 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseKitsRemove", _0x2db0e4);
    }
  }
});
mp.events.add("Client_WarehouseKitsGet", _0x4eda91 => {
  if (WarehouseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_WarehouseKitsGet", _0x4eda91);
    }
  }
});
global.inBarricadeEditor = false;
global.barricadeEditorModel = "";
global.barricadeEditorRotation = 0;
const barricadeEditorOptions = {
  previewOnly: true
};
const barricade_models = ["p_stinger_03", "prop_barrier_work01a", "prop_barrier_work01d", "prop_barier_conc_05c", "prop_barier_conc_02a", "prop_air_barrier", "prop_air_lights_02a", "prop_air_conelight", "prop_plas_barier_01a", "xm_prop_base_fence_01", "xm_prop_base_fence_02", "prop_facgate_04_r", "prop_fncres_03c", "prop_barier_conc_02b", "prop_barier_conc_01b", "prop_barrier_work05", "ba_prop_battle_barrier_02a", "prop_barriercrash_01", "prop_barrier_wat_03a", "prop_mc_conc_barrier_01", "prop_mp_barrier_02b", "prop_trafficdiv_01", "prop_trafficdiv_02", "xs_prop_arena_spikes_02a", "tr_prop_tr_wall_sign_01_b", "prop_mb_sandblock_03_cr", "prop_boxpile_05a", "prop_rub_scrap_04", "prop_pipes_01b"];
function selectBarricadeModel(_0x5177be, _0x5d8e40 = false) {
  if (inBarricadeEditor) {
    barricadeEditorModel = barricade_models[_0x5177be];
    if (barricadeEditorModel) {
      main_browser.execute("APPS.state.barricadesEditor.selectedBarricade = " + _0x5177be + ";");
      main_browser.execute("APPS.state.barricadesEditor.selectedTape = null;");
      closeTapePlacing();
      ObjectEditorStart(barricadeEditorModel, "barricade", barricadeEditorOptions);
      if (_0x5d8e40) {
        mp.gui.cursor.show(true, true);
      } else {
        toggleHideBarricadeEditor("barricade");
      }
    }
  }
}
function selectTapeType(_0x47f45d) {
  if (!!inBarricadeEditor && _0x47f45d != null && !(_0x47f45d < 0) && !(_0x47f45d >= 3)) {
    ObjectEditorCancel();
    barricadeEditorModel = "tape";
    main_browser.execute("APPS.state.barricadesEditor.selectedTape = " + _0x47f45d + ";");
    main_browser.execute("APPS.state.barricadesEditor.selectedBarricade = null;");
    startTapePlacing(_0x47f45d);
    toggleHideBarricadeEditor("tape");
  }
}
mp.events.add("Client_OpenBarricadeEditor", (_0x1f7fc5, _0x26ea2a) => {
  if (GlobalCheck() || inBarricadeEditor) {
    return;
  }
  inBarricadeEditor = 1;
  const _0x12c0aa = {
    barricadesList: barricade_models,
    selectedBarricade: null,
    selectedTape: null,
    installedBarricade: _0x26ea2a.police_barrier,
    installedTape: _0x26ea2a.police_tape,
    isHidden: false,
    haveBarricadePermission: _0x1f7fc5.haveBarricadePermission,
    haveTapePermission: _0x1f7fc5.haveTapePermission,
    show: true
  };
  main_browser.execute("APPS.state.barricadesEditor = " + JSON.stringify(_0x12c0aa) + ";");
  main_browser.execute("APPS.state.hud.in_barricade_editor = " + inBarricadeEditor + ";");
  mp.gui.cursor.show(true, true);
  if (!_0x26ea2a.police_barrier) {
    selectBarricadeModel(0, true);
  }
});
mp.events.add("Client_BarricadeEditor_Select", (_0x2bba3e, _0x3b8dca) => {
  if (inBarricadeEditor) {
    if (_0x2bba3e == "barricade") {
      selectBarricadeModel(_0x3b8dca);
    } else if (_0x2bba3e == "tape") {
      selectTapeType(_0x3b8dca);
    }
  }
});
mp.events.add("Client_BarricadeEditor_ReturnToEditing", () => {
  if (inBarricadeEditor) {
    PlayBaseAudio("g_menu_click");
    toggleHideBarricadeEditor();
  }
});
global.setBarricadeModel = function (_0x473ed9) {
  if (inBarricadeEditor) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CreatePoliceBarricade", JSON.stringify(_0x473ed9));
      closeBarricadeEditor();
    }
  }
};
global.toggleHideBarricadeEditor = function (_0x599a0a) {
  if (!inBarricadeEditor) {
    return;
  }
  let _0xa7b457 = false;
  if (inBarricadeEditor == 1) {
    inBarricadeEditor = 2;
    _0xa7b457 = true;
    mp.gui.cursor.show(false, false);
    main_browser.execute("APPS.state.hud.in_barricade_editor = " + JSON.stringify(_0x599a0a) + ";");
  } else {
    inBarricadeEditor = 1;
    _0xa7b457 = false;
    mp.gui.cursor.show(true, true);
    main_browser.execute("APPS.state.hud.in_barricade_editor = 1;");
  }
  main_browser.execute("APPS.state.barricadesEditor.isHidden = " + _0xa7b457 + ";");
};
mp.events.add("Client_BarricadeEditor_Uninstall", _0x3fe97f => {
  if (inBarricadeEditor) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BarricadeEditor_Uninstall", _0x3fe97f);
    }
  }
});
mp.events.add("Client_BarricadeEditor_RemoveInstalled", _0x5eabab => {
  barricadeEditorRemoveInstalled(_0x5eabab);
});
global.barricadeEditorRemoveInstalled = function (_0x1a3c04) {
  if (inBarricadeEditor) {
    if (_0x1a3c04 === "tape") {
      main_browser.execute("APPS.state.barricadesEditor.installedTape = null;");
    } else if (_0x1a3c04 === "barricade") {
      main_browser.execute("APPS.state.barricadesEditor.installedBarricade = null;");
    }
  }
};
global.closeBarricadeEditor = function () {
  if (inBarricadeEditor) {
    inBarricadeEditor = false;
    barricadeEditorModel = "";
    main_browser.execute("APPS.state.barricadesEditor.show = false;");
    main_browser.execute("APPS.state.hud.in_barricade_editor = 0;");
    main_browser.execute("APPS.state.barricadesEditor.selectedBarricade = null;");
    main_browser.execute("APPS.state.barricadesEditor.selectedTape = null;");
    ObjectEditorCancel();
    closeTapePlacing();
    mp.events.call("Enablechat");
    mp.gui.cursor.show(false, false);
  }
};
mp.events.add("click", (_0x5dd76f, _0x32c9e1, _0x3e781d, _0x489ad4) => {
  if (inBarricadeEditor && barricadeEditorModel && _0x3e781d === "up" && _0x489ad4 === "right") {
    toggleHideBarricadeEditor();
  }
});
const MACROS_STORAGE_KEY = "kpk_macros";
const NOTEPAD_STORAGE_KEY = "kpk_notepad";
const MACRO_COMMANDS = [{
  prefix: "/me ",
  sendcheck: 5
}, {
  prefix: "/try ",
  sendcheck: 6
}, {
  prefix: "/do ",
  sendcheck: 7
}, {
  prefix: "/todo ",
  sendcheck: 10
}, {
  prefix: "/f ",
  sendcheck: 2
}, {
  prefix: "/fn ",
  sendcheck: 8
}, {
  prefix: "/m ",
  sendcheck: 11
}, {
  prefix: "/fam ",
  sendcheck: 12
}];
function getMacrosFromStorage() {
  try {
    const _0x16fe1f = mp.storage.data.kpk_macros;
    if (_0x16fe1f) {
      return JSON.parse(_0x16fe1f);
    }
  } catch (_0x281f86) {}
  return [];
}
function saveMacrosToStorage(_0x1d5e4b) {
  mp.storage.data.kpk_macros = JSON.stringify(_0x1d5e4b);
}
function parseMacroCommand(_0xfe0b00) {
  const _0x205ebc = _0xfe0b00.trim();
  const _0x5f217c = _0x205ebc.toLowerCase();
  for (const _0x29aed5 of MACRO_COMMANDS) {
    if (_0x5f217c.startsWith(_0x29aed5.prefix.toLowerCase())) {
      return {
        text: _0x205ebc.slice(_0x29aed5.prefix.length).trim(),
        sendcheck: _0x29aed5.sendcheck
      };
    }
  }
  if (_0x205ebc.startsWith("/")) {
    return null;
  } else {
    return {
      text: _0x205ebc,
      sendcheck: 0
    };
  }
}
mp.events.add("Client_LoadMacros", () => {
  let _0x4e3852 = getMacrosFromStorage();
  let _0x22bab4 = "";
  try {
    _0x22bab4 = mp.storage.data.kpk_notepad || "";
  } catch (_0x27e272) {}
  let _0x1cd602 = _0x4e3852.reduce((_0x56f8f6, _0xdc304) => typeof _0xdc304.id == "number" && isFinite(_0xdc304.id) ? Math.max(_0x56f8f6, _0xdc304.id) : _0x56f8f6, 0);
  let _0x5491a0 = false;
  _0x4e3852 = _0x4e3852.map(_0x12e313 => typeof _0x12e313.id == "number" && isFinite(_0x12e313.id) ? _0x12e313 : (_0x5491a0 = true, {
    id: ++_0x1cd602,
    text: _0x12e313.text
  }));
  if (_0x5491a0) {
    saveMacrosToStorage(_0x4e3852);
  }
  const _0x10f01f = _0x4e3852.length === 0 ? [{
    id: 0,
    text: language["/me достаёт удостоверение из внутреннего кармана и предъявляет его"][curr_lang]
  }] : _0x4e3852;
  main_browser.execute("APPS.state.kpk.macros = " + JSON.stringify(_0x10f01f) + ";");
  main_browser.execute("APPS.state.kpk.notepad = " + JSON.stringify(String(_0x22bab4)) + ";");
});
mp.events.add("Client_SaveNewMacro", (_0x573360, _0x4ef769) => {
  if (!_0x4ef769 || typeof _0x4ef769 != "string") {
    return;
  }
  const _0x3dc4f3 = _0x4ef769.trim();
  if (!_0x3dc4f3 || _0x3dc4f3.length > 100) {
    return ShowNotification(language["Вы ввели слишком длинное сообщение"][curr_lang], 25);
  }
  const _0x393a37 = getMacrosFromStorage();
  _0x393a37.unshift({
    id: Number(_0x573360),
    text: _0x3dc4f3
  });
  saveMacrosToStorage(_0x393a37);
  ShowNotification(language["Вы успешно создали макрос"][curr_lang], 25);
});
mp.events.add("Client_RemoveMacro", _0x432315 => {
  const _0x338e71 = Number(_0x432315);
  saveMacrosToStorage(getMacrosFromStorage().filter(_0x36ccc8 => _0x36ccc8.id !== _0x338e71));
});
mp.events.add("Client_UpdateMacro", (_0x4af039, _0x26eb0c) => {
  if (!_0x26eb0c || typeof _0x26eb0c != "string") {
    return;
  }
  const _0x9efc89 = Number(_0x4af039);
  const _0x40bf44 = _0x26eb0c.trim();
  if (!_0x40bf44 || _0x40bf44.length > 500) {
    return;
  }
  const _0x48ae51 = getMacrosFromStorage();
  const _0x490a5a = _0x48ae51.findIndex(_0x5ddc61 => _0x5ddc61.id === _0x9efc89);
  if (_0x490a5a !== -1) {
    _0x48ae51[_0x490a5a].text = _0x40bf44;
    saveMacrosToStorage(_0x48ae51);
  } else if (_0x48ae51.length === 0 && _0x9efc89 === 0) {
    _0x48ae51.push({
      id: 0,
      text: _0x40bf44
    });
    saveMacrosToStorage(_0x48ae51);
  }
  ShowNotification(language["Вы успешно обновили макрос"][curr_lang], 25);
});
mp.events.add("Client_UpdateNotepad", _0x54a825 => {
  if (typeof _0x54a825 != "string") {
    return;
  }
  let _0x449161 = _0x54a825;
  try {
    _0x449161 = JSON.parse(_0x54a825);
  } catch (_0x28a5b8) {}
  mp.storage.data.kpk_notepad = _0x449161;
});
mp.events.add("Client_SendMacro", _0xd344db => {
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x5cd38c = Number(_0xd344db);
  const _0x448e00 = getMacrosFromStorage();
  let _0x400ab9 = _0x448e00.find(_0x196308 => _0x196308.id === _0x5cd38c);
  if (!_0x400ab9 && _0x448e00.length === 0 && _0x5cd38c === 0) {
    _0x400ab9 = {
      id: 0,
      text: language["/me достаёт удостоверение из внутреннего кармана и предъявляет его"][curr_lang]
    };
  }
  if (!_0x400ab9) {
    return;
  }
  const _0x3ee016 = parseMacroCommand(_0x400ab9.text);
  if (!_0x3ee016 || !_0x3ee016.text) {
    return;
  }
  let _0x53e826 = _0x3ee016.text;
  for (let _0x2d24ee = 0; _0x2d24ee < _0x53e826.length; _0x2d24ee++) {
    if (_0x53e826[_0x2d24ee] === "<") {
      _0x53e826 = _0x53e826.replace("<", " ");
    }
  }
  _0x53e826 = _0x53e826.trim();
  if (!_0x53e826 || _0x53e826.length > 100) {
    return ShowNotification(language["Вы ввели слишком длинное сообщение"][curr_lang], 25);
  }
  ShowNotification(language["Вы успешно отправили сообщение в чат"][curr_lang], 25);
  mp.events.call("ClientSendMessage", _0x53e826, _0x3ee016.sendcheck);
});