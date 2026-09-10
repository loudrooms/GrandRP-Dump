global.ClubOpened = false;
let top_annulated = false;
function ConvertSecondsToDate(_0x1ff0f0) {
  let _0x42bfe0 = Math.floor(_0x1ff0f0 / 60);
  if (_0x42bfe0 < 10) {
    _0x42bfe0 = "0" + _0x42bfe0;
  }
  let _0x40368d = _0x1ff0f0 - _0x42bfe0 * 60;
  if (_0x40368d < 10) {
    _0x40368d = "0" + _0x40368d;
  }
  return _0x42bfe0 + ":" + _0x40368d;
}
function buildQuestsInfos() {
  return [{
    Name: language["Краденные запчасти"][curr_lang],
    Discription: language["Украдите запчасти с СТО"][curr_lang]
  }, {
    Name: language["Краденное топливо"][curr_lang],
    Discription: language["Украдите топливо с АЗС"][curr_lang]
  }, {
    Name: language["Краденная нефть"][curr_lang],
    Discription: language["Украдите нефтепродукты с нефтяной станции"][curr_lang]
  }];
}
mp.events.add("Client_OpenPlayerClub", (_0x177a84, _0x2275e5, _0x2d181b, _0xff85f9) => {
  if (GlobalCheck() == 1) {
    return;
  }
  top_annulated = true;
  const _0x16658f = "{\"club\":" + _0x177a84 + ",\"exp\":" + _0x2275e5 + ",\"level\":" + _0x2d181b + ",\"records\":[" + _0xff85f9 + "],\"top\":undefined,\"tab\":0,\"show\":true}";
  main_browser.execute("APPS.state.club = " + _0x16658f);
  ClubOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseClub = function () {
  if (ClubOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.club.show = false;");
    ClubOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseClub", () => {
  CloseClub();
});
mp.events.add("Client_JoinClub", _0x523ee5 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_JoinInInterestClub", _0x523ee5);
  }
});
mp.events.add("Client_StartClubRace", _0x23e17c => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_JoinRegularRace", _0x23e17c);
  }
});
mp.events.add("Client_OpenClubVehicleMenu", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RentClubVehicles");
  }
});
mp.events.add("Client_GetClubQuest", _0x4db06b => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetClubQuest", _0x4db06b);
  }
});
mp.events.add("Client_LoadMoreClubTop", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadMoreClubTop");
  }
});
mp.events.add("Client_RouteToGlobalClubActivity", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RouteToGlobalClubActivity");
  }
});
mp.events.add("Client_GetMonthClubPrize", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetMonthClubPrize");
  }
});
mp.events.add("Client_LeaveClub", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LeaveClub");
  }
});
mp.events.add("Client_LoadMoreClubTopsSuccess", _0x221c37 => {
  if (top_annulated) {
    main_browser.execute("APPS.state.club.top = [];");
  }
  main_browser.execute("APPS.state.club.top = APPS.state.club.top.concat(" + JSON.stringify(_0x221c37) + ");");
  main_browser.execute("APPS.state.club.tab = 2;");
});
mp.events.add("Client_LoadClubRaceTimes", _0xa17a8 => {
  main_browser.execute("APPS.state.hud.race_minutes = '00';");
  main_browser.execute("APPS.state.hud.race_seconds = '00';");
  main_browser.execute("APPS.state.hud.race_best_time1 = '" + ConvertSecondsToDate(_0xa17a8[0]) + "';");
  main_browser.execute("APPS.state.hud.race_best_time2 = '" + ConvertSecondsToDate(_0xa17a8[1]) + "';");
  main_browser.execute("APPS.state.hud.race_best_time3 = '" + ConvertSecondsToDate(_0xa17a8[2]) + "';");
  main_browser.execute("APPS.state.hud.club_race_show = true;");
});
global.club_race_interval = undefined;
mp.events.add("Client_ClubRaceStartCounting", _0x347bd6 => {
  if (club_race_interval != null) {
    clearInterval(club_race_interval);
    club_race_interval = undefined;
  }
  let _0x2ce387 = 0;
  club_race_interval = setInterval(() => {
    _0x2ce387++;
    let _0x39db0d = Math.floor(_0x2ce387 / 60);
    let _0x559cfe = _0x2ce387 - _0x39db0d * 60;
    if (_0x39db0d < 10) {
      _0x39db0d = "0" + _0x39db0d;
    }
    if (_0x559cfe < 10) {
      _0x559cfe = "0" + _0x559cfe;
    }
    main_browser.execute("APPS.state.hud.race_minutes = '" + _0x39db0d + "';");
    main_browser.execute("APPS.state.hud.race_seconds = '" + _0x559cfe + "';");
  }, 1000);
});
global.drift_zone_drift_counter = 2000;
global.is_in_drift_zone = false;
mp.events.add("Client_DriftClubZone", _0x354c2a => {
  is_in_drift_zone = _0x354c2a;
});
let club_route_blips;
let club_route_shape;
let quests_infos = buildQuestsInfos();
mp.events.add("Client_LanguageChanged", () => {
  quests_infos = buildQuestsInfos();
});
mp.events.add("Client_ClubStartQuest", (_0x197399, _0x2309d2, _0x3a6ccf, _0x31e360 = 0) => {
  if (!quest_showed && _0x31e360) {
    QuestShow(quests_infos[_0x31e360 - 1].Name, quests_infos[_0x31e360 - 1].Discription);
  }
  if (club_route_blips) {
    club_route_blips.destroy();
    club_route_blips = undefined;
  }
  club_route_blips = mp.blips.new(1, new mp.Vector3(_0x197399, _0x2309d2, _0x3a6ccf), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  club_route_blips.setRoute(true);
  if (club_route_shape) {
    club_route_shape.destroy();
    club_route_shape = undefined;
  }
  club_route_shape = mp.colshapes.newCircle(_0x197399, _0x2309d2, 10, 0);
});
mp.events.add("playerEnterColshape", _0x4c8867 => {
  if (_0x4c8867 == club_route_shape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (club_route_blips) {
      club_route_blips.destroy();
      club_route_blips = undefined;
    }
    if (club_route_shape) {
      club_route_shape.destroy();
      club_route_shape = undefined;
    }
  }
});
const drift_vehicles = [2712905841];
const drift_vehicles_handlings = [{
  fMass: 1500,
  fInitialDragCoeff: 15.5,
  fPercentSubmerged: 85,
  fDriveBiasFront: 0,
  nInitialDriveGears: 3,
  fInitialDriveForce: 1.9,
  fDriveInertia: 1.1,
  fClutchChangeRateScaleUpShift: 5,
  fClutchChangeRateScaleDownShift: 5,
  fInitialDriveMaxFlatVel: 684,
  fBrakeForce: 4.85,
  fBrakeBiasFront: 0.67,
  fHandBrakeForce: 3.5,
  fSteeringLock: 1.185,
  fTractionCurveMax: 1,
  fTractionCurveMin: 1.45,
  fTractionCurveLateral: 0.61,
  fTractionSpringDeltaMax: 0.15,
  fLowSpeedTractionLossMult: 0.5,
  fCamberStiffnesss: 0,
  fTractionBiasFront: 0.45,
  fTractionLossMult: 1,
  fSuspensionForce: 2.8,
  fSuspensionCompDamp: 1.4,
  fSuspensionReboundDamp: 2.2,
  fSuspensionUpperLimit: 0.06,
  fSuspensionLowerLimit: -0.05,
  fSuspensionBiasFront: 0.5
}, {
  fMass: 3000,
  fInitialDragCoeff: 6.22,
  fPercentSubmerged: 85,
  fDriveBiasFront: 0,
  nInitialDriveGears: 3,
  fInitialDriveForce: 5.43,
  fDriveInertia: 1.3,
  fClutchChangeRateScaleUpShift: 1.6,
  fClutchChangeRateScaleDownShift: 1.6,
  fInitialDriveMaxFlatVel: 44.444,
  fBrakeForce: 1.5,
  fBrakeBiasFront: 1.1,
  fHandBrakeForce: 1.2,
  fSteeringLock: 1.221,
  fTractionCurveMax: 0.9,
  fTractionCurveMin: 1.4,
  fTractionCurveLateral: 0.392,
  fTractionSpringDeltaMax: 0.15,
  fLowSpeedTractionLossMult: 1,
  fCamberStiffnesss: 0,
  fTractionBiasFront: 1,
  fTractionLossMult: 1,
  fSuspensionForce: 3,
  fSuspensionCompDamp: 0.18,
  fSuspensionReboundDamp: 0.28,
  fSuspensionUpperLimit: 0.1,
  fSuspensionLowerLimit: -0.16,
  fSuspensionBiasFront: 1,
  fAntiRollBarForce: 1.5,
  fAntiRollBarBiasFront: 0.94
}];
mp.events.add("Client_EnableDriftHandling", () => {
  if (localplayer.vehicle) {
    let _0x3ed9bc = 0;
    if (localplayer.vehicle.model == 4067225593) {
      _0x3ed9bc = 1;
    }
    for (let _0x10e842 = 0; _0x10e842 < Object.keys(drift_vehicles_handlings[_0x3ed9bc]).length; _0x10e842++) {
      localplayer.vehicle.setHandling(Object.keys(drift_vehicles_handlings[_0x3ed9bc])[_0x10e842], parseFloat(drift_vehicles_handlings[_0x3ed9bc][Object.keys(drift_vehicles_handlings[_0x3ed9bc])[_0x10e842]]));
    }
  }
});