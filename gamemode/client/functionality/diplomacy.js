mp.events.add("Client_OpenDiplomacyDesign", () => {
  if (!DiplomacyDesignOpened) {
    if (FamilyOpened) {
      CloseFamilyMenu();
    }
    main_browser.execute("APPS.state.diplomacy.show = true;");
    DiplomacyDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.add("Client_CloseDiplomacyDesign", () => {
  CloseDiplomacyDesign();
});
global.DiplomacyDesignOpened = false;
global.CloseDiplomacyDesign = function () {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.show = false");
    DiplomacyDesignOpened = false;
    SwitchHUDToDesign(false);
    mp.events.callRemote("Server_OpenFamilyMenu");
  }
};
mp.events.add("Client_DiplomacyRequestLoadPage", _0x2a4377 => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DiplomacyRequestLoadPage", _0x2a4377);
    }
  }
});
mp.events.add("Client_DiplomacyLoadPage2", _0xc2a6f7 => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.famNames = " + JSON.stringify(_0xc2a6f7));
  }
});
mp.events.add("Client_RequestDiplomacyInfo", _0x172090 => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestDiplomacyInfo", _0x172090);
    }
  }
});
mp.events.add("Client_LoadFamilyDiplomacyInfo", _0xfb5100 => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.famInfo = " + JSON.stringify(_0xfb5100));
  }
});
mp.events.add("Client_DiplomacyLoadPage1", _0x362a82 => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.myFamInfo = " + JSON.stringify(_0x362a82));
  }
});
mp.events.add("Client_RequestGangDiplomacyInfo", _0x38d97d => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestGangDiplomacyInfo", _0x38d97d);
    }
  }
});
mp.events.add("Client_SetDiplomacyStatus", (_0x2d0a75, _0x177adf) => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetDiplomacyStatus", _0x2d0a75, _0x177adf);
    }
  }
});
mp.events.add("Client_DiplomacyLoadPage3", (_0x2e794c, _0x450e21) => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.alliesRequestList = " + JSON.stringify(_0x2e794c));
    main_browser.execute("APPS.state.diplomacy.statusList = " + JSON.stringify(_0x450e21));
  }
});
mp.events.add("Client_DiplomacyRequestHandler", (_0x2c88f9, _0x3755eb) => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DiplomacyRequestHandler", _0x2c88f9, _0x3755eb);
    }
  }
});
mp.events.add("Client_LoadGangDiplomacyInfo", _0x433b5d => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.gangDiplomacy = " + JSON.stringify(_0x433b5d));
  }
});
mp.events.add("Client_SetGangDiplomacyStatus", (_0x18ae02, _0x5824e1) => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetGangDiplomacyStatus", _0x18ae02, _0x5824e1);
    }
  }
});
const caravanFinishPoint = new mp.Vector3(236.502, -3315.266, 5.79);
const caravanNPCPosition = new mp.Vector3(1368.471, 6550.302, 14.91);
mp.markers.new(1, new mp.Vector3(236.502, -3315.266, 4.79), 5, {
  color: [246, 225, 0, 255],
  visible: true,
  dimension: 0
});
mp.labels.new(language["Разгрузка каравана"][curr_lang], new mp.Vector3(caravanFinishPoint.x, caravanFinishPoint.y, caravanFinishPoint.z + 0.5), {
  los: true,
  font: 0,
  drawDistance: 10,
  color: [255, 255, 255, 255],
  dimension: 0
});
const caravanNPCBlip = mp.blips.new(636, caravanNPCPosition, {
  name: language["Погрузка каравана"][curr_lang],
  alpha: 255,
  color: 1,
  dimension: 0,
  drawDistance: 25,
  shortRange: true
});
mp.events.add("Client_SetCaravanRoute", () => {
  if (caravanFinishPoint) {
    SetGPSLocation(caravanFinishPoint.x, caravanFinishPoint.y, caravanFinishPoint.z, true);
  }
});
mp.events.add("Client_DiplomacyLoadPage4", (_0x29d6f7, _0x21d987) => {
  if (DiplomacyDesignOpened) {
    main_browser.execute("APPS.state.diplomacy.caravanDeliveredTop = " + JSON.stringify(_0x29d6f7));
    main_browser.execute("APPS.state.diplomacy.caravanStolenTop = " + JSON.stringify(_0x21d987));
  }
});
mp.events.add("Client_GetPrizeFromCaravanTopDelivered", _0x3b0af9 => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetPrizeFromCaravanTopDelivered", _0x3b0af9);
    }
  }
});
mp.events.add("Client_GetPrizeFromCaravanTopStolen", () => {
  if (DiplomacyDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetPrizeFromCaravanTopStolen");
    }
  }
});
global.diplomacyInfo = undefined;
mp.events.add("Client_GetDiplomacyInfo", (_0x46780b, _0x3b7806, _0x1da110) => {
  diplomacyInfo = [];
  _0x3b7806.forEach(_0x275eda => {
    const _0x4ac02d = {
      fam1: _0x46780b - 1,
      fam2: _0x275eda,
      diplomacyStatus: 2
    };
    diplomacyInfo.push(_0x4ac02d);
  });
  _0x1da110.forEach(_0x2e32ca => {
    const _0x1d906d = {
      fam1: _0x46780b - 1,
      fam2: _0x2e32ca,
      diplomacyStatus: 3
    };
    diplomacyInfo.push(_0x1d906d);
  });
});
mp.events.add("Client_SetCaravanRouteToStart", () => {
  SetGPSLocation(caravanNPCPosition.x, caravanNPCPosition.y, caravanNPCPosition.x);
});