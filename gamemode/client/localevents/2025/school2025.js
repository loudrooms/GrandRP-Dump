let raceInterval;
let raceBlip;
let raceShape;
let raceCheckpoint;
function cleanRaceEntities() {
  if (raceBlip) {
    raceBlip.destroy();
    raceBlip = undefined;
  }
  if (raceShape) {
    raceShape.destroy();
    raceShape = undefined;
  }
  if (raceCheckpoint) {
    raceCheckpoint.destroy();
    raceCheckpoint = undefined;
  }
}
global.schoolDesignOpened = false;
global.closeSchoolDesign2025 = function () {
  main_browser.execute("APPS.state.schoolEvent2025.show = false");
  schoolDesignOpened = false;
  SwitchHUDToDesign(false);
};
mp.events.add("Client_CloseSchoolMainSubjectPage", () => {
  closeSchoolDesign2025();
  mp.events.callRemote("Server_CloseEasterAnnounceDesign", 6);
});
mp.events.add("Client_CloseSchoolDesign2025", () => {
  closeSchoolDesign2025();
});
mp.events.add("Client_OpenSchoolDesign2025", (_0x3f0d90, _0x9aa350, _0x2da5d5, _0x3b19cb, _0xcda73a, _0x3a672c, _0x16eae9) => {
  if (!GlobalCheck() && !!loggedin && !chatActive && !schoolDesignOpened) {
    if (_0x3f0d90) {
      main_browser.execute("APPS.state.schoolEvent2025.path = '" + _0x3f0d90 + "'");
    } else {
      main_browser.execute("APPS.state.schoolEvent2025.path = 'main-menu'");
    }
    main_browser.execute("\n        APPS.state.schoolEvent2025.mainSubject = " + _0x9aa350 + ";\n        APPS.state.schoolEvent2025.stars = " + _0x3b19cb + ";\n        APPS.state.schoolEvent2025.dayonline = " + _0x3a672c + ";\n        APPS.state.schoolEvent2025.donate = " + _0xcda73a + ";\n        APPS.state.schoolEvent2025.subjectStatus = " + JSON.stringify(_0x2da5d5) + ";\n        APPS.state.schoolEvent2025.gender = " + getGender() + ";\n        APPS.state.schoolEvent2025.show = true;    \n    ");
    if (_0x16eae9) {
      main_browser.execute("this.AppComponents.schoolEvent2025.menu.changePage('shop');");
    }
    schoolDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.add("Client_RequestSchoolSportTask", () => {
  mp.events.callRemote("Server_RequestSchoolSportTask");
});
mp.events.add("Client_RequestExchangeResourcesSchool2025", (_0x5e0dde, _0x1e123b) => {
  if (loggedin && !chatActive && schoolDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestExchangeResourcesSchool2025", _0x5e0dde, _0x1e123b);
    }
  }
});
mp.events.add("Client_RequestBuyItemFromSchoolShop2025", (_0xf8d42c, _0x23ac04) => {
  if (loggedin && !chatActive && schoolDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyItemFromSchoolShop2025", _0xf8d42c, _0x23ac04);
    }
  }
});
mp.events.add("Client_FinishSchoolTask2025", _0x38a4f4 => {
  if (loggedin && !chatActive && schoolDesignOpened) {
    mp.events.callRemote("Server_FinishSchoolTask2025", _0x38a4f4);
  }
});
mp.events.add("Client_UpdateSchoolSubjects2025", _0x5a0905 => {
  main_browser.execute("APPS.state.schoolEvent2025.subjectStatus = " + JSON.stringify(_0x5a0905) + ";");
});
mp.events.add("Client_UpdateStarsBalance2025", _0x5aae57 => {
  main_browser.execute("APPS.state.schoolEvent2025.stars = " + _0x5aae57 + ";");
});
mp.events.add("Client_RequestBuySchoolStars2025", _0x2d739e => {
  if (loggedin && !chatActive && schoolDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuySchoolStars2025", _0x2d739e);
    }
  }
});
mp.events.add("Client_UpdateDonateDataSchool2025", (_0x560ada, _0x29299c) => {
  main_browser.execute("APPS.state.schoolEvent2025.stars = " + _0x29299c + ";");
  main_browser.execute("APPS.state.schoolEvent2025.donate = " + _0x560ada + ";");
});
mp.events.add("Client_CancelSchoolRace", () => {
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  cleanRaceEntities();
});
const SCHOOL_RACE_POSITIONS = [{
  position: new mp.Vector3(519.505, 5588.506, 780.981)
}, {
  position: new mp.Vector3(528.318, 5626.589, 779.504)
}, {
  position: new mp.Vector3(566.352, 5658.624, 765.553)
}, {
  position: new mp.Vector3(621.332, 5683.175, 744.123)
}, {
  position: new mp.Vector3(695.827, 5700.209, 719.442)
}, {
  position: new mp.Vector3(771.992, 5694.416, 695.547)
}, {
  position: new mp.Vector3(834.291, 5675.862, 685.287)
}, {
  position: new mp.Vector3(896.996, 5647.948, 666.381)
}, {
  position: new mp.Vector3(961.275, 5640.007, 633.42)
}, {
  position: new mp.Vector3(1030.169, 5608.133, 602.225)
}, {
  position: new mp.Vector3(1109.465, 5585.179, 569.411)
}, {
  position: new mp.Vector3(1219.938, 5564.386, 512.085)
}, {
  position: new mp.Vector3(1315.21, 5556.597, 479.454)
}, {
  position: new mp.Vector3(1414.49, 5543.366, 459.316)
}, {
  position: new mp.Vector3(1466.97, 5534.819, 439.308)
}, {
  position: new mp.Vector3(1558.577, 5498.942, 384.889)
}, {
  position: new mp.Vector3(1636.077, 5484.989, 338.184)
}, {
  position: new mp.Vector3(1777.785, 5435.802, 260.851)
}, {
  position: new mp.Vector3(1855.608, 5404.281, 229.193)
}, {
  position: new mp.Vector3(1989.345, 5387.767, 171.96)
}, {
  position: new mp.Vector3(2108.303, 5375.134, 163.507)
}, {
  position: new mp.Vector3(2174.285, 5380.396, 162.777)
}, {
  position: new mp.Vector3(2240.313, 5383.06, 144.466)
}, {
  position: new mp.Vector3(2319.417, 5350.198, 118.69)
}, {
  position: new mp.Vector3(2401.998, 5312.513, 94.166)
}, {
  position: new mp.Vector3(2454.981, 5261.998, 78.863)
}, {
  position: new mp.Vector3(2500.212, 5185.83, 68.708)
}, {
  position: new mp.Vector3(2555.59, 5114.394, 47.627)
}];
function setRaceCheckpoint(_0x4b476d) {
  cleanRaceEntities();
  raceShape = mp.colshapes.newSphere(SCHOOL_RACE_POSITIONS[_0x4b476d].position.x, SCHOOL_RACE_POSITIONS[_0x4b476d].position.y, SCHOOL_RACE_POSITIONS[_0x4b476d].position.z, 3, mp.players.local.dimension);
  raceShape.bRaceShape = _0x4b476d;
  raceBlip = mp.blips.new(1, SCHOOL_RACE_POSITIONS[_0x4b476d].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: mp.players.local.dimension
  });
  const _0x28fcf1 = SCHOOL_RACE_POSITIONS[_0x4b476d + 1] ? new mp.Vector3(SCHOOL_RACE_POSITIONS[_0x4b476d + 1].position.x, SCHOOL_RACE_POSITIONS[_0x4b476d + 1].position.y, SCHOOL_RACE_POSITIONS[_0x4b476d + 1].position.z) : new mp.Vector3(0, 0, 0);
  raceCheckpoint = mp.checkpoints.new(SCHOOL_RACE_POSITIONS[_0x4b476d + 1] ? 2 : 10, new mp.Vector3(SCHOOL_RACE_POSITIONS[_0x4b476d].position.x, SCHOOL_RACE_POSITIONS[_0x4b476d].position.y, SCHOOL_RACE_POSITIONS[_0x4b476d].position.z - 1), 5, {
    direction: _0x28fcf1,
    color: [246, 225, 0, 255],
    visible: true,
    dimension: mp.players.local.dimension
  });
  raceBlip.setRoute(true);
}
const TIME_FOR_RACE = 180000;
function clearSchoolRaceInterval() {
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
}
mp.events.add("Client_ClearSchoolRace2025", () => {
  clearSchoolRaceInterval();
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
mp.events.add("Client_StartSchoolRace2025", () => {
  if (mp.players.local.vehicle) {
    mp.players.local.vehicle.freezePosition(true);
  }
  disableVehicleHandle = true;
  let _0x26b46b = 5;
  main_browser.execute("APPS.state.hud.event_coutdown = " + _0x26b46b + ";");
  let _0x3fdb2a = setInterval(function () {
    _0x26b46b--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + _0x26b46b + ";");
    if (_0x26b46b <= 0) {
      if (mp.players.local.vehicle) {
        mp.players.local.vehicle.freezePosition(false);
      }
      disableVehicleHandle = false;
      if (_0x3fdb2a != null) {
        clearInterval(_0x3fdb2a);
      }
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      clearSchoolRaceInterval();
      let _0x70d23c = 0;
      raceInterval = setInterval(() => {
        _0x70d23c++;
        ShowDrugLabsDesign(language.Гонщик[curr_lang], 1, "", 0, "", 0, "", 0, "", 0, 180 - _0x70d23c, 180000, language.Гонка[curr_lang]);
        if (_0x70d23c == 180) {
          clearSchoolRaceInterval();
          main_browser.execute("APPS.state.hud.drug_lab_show = false;");
          mp.events.callRemote("Server_FailedSchoolRace");
        }
      }, 1000);
    }
  }, 1000);
  cleanRaceEntities();
  setRaceCheckpoint(1);
});
mp.events.add("playerEnterColshape", _0x1b6cc5 => {
  if (_0x1b6cc5.bRaceShape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (_0x1b6cc5.bRaceShape + 1 >= SCHOOL_RACE_POSITIONS.length) {
      cleanRaceEntities();
      clearSchoolRaceInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_FinishedSchoolRace");
      return;
    }
    setRaceCheckpoint(_0x1b6cc5.bRaceShape + 1);
  }
});