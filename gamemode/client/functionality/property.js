global.playerPropertyDesignOpened = false;
mp.events.add("Client_OpenPlayerPropertyDesign", (_0x4ba879, _0x233502, _0x5baa1e, _0x433a55, _0x48358a, _0x25df79, _0xb3a640) => {
  if (playerPropertyDesignOpened || chatActive || !loggedin) {
    return;
  }
  const _0x2b9cd6 = "{\"houses\":" + JSON.stringify(_0x4ba879) + ",\"housesDays\":" + JSON.stringify(_0x233502) + ",\"rentDays\":" + JSON.stringify(_0x5baa1e) + ", \"housePrices\":" + JSON.stringify(_0xb3a640) + ",\"famhouse\":" + _0x433a55 + ",\"famhouseDays\":" + _0x48358a + ",\"sealedHouses\":" + JSON.stringify(_0x25df79) + ",\"show\":true}";
  main_browser.execute("APPS.state.property = " + _0x2b9cd6);
  playerPropertyDesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_ClosePropertyDesign", () => {
  closePlayerPropertyDesign();
});
global.closePlayerPropertyDesign = function () {
  if (playerPropertyDesignOpened) {
    playerPropertyDesignOpened = false;
    main_browser.execute("APPS.state.property.show = false");
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_PayForHouse", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!playerPropertyDesignOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerMobileBanking", 1, undefined);
    closePlayerPropertyDesign();
  }
});
mp.events.add("Client_OpenAuctionFromPropertyDesign", () => {
  if (!(new Date().getTime() - lastCheck < 500) && !!playerPropertyDesignOpened && !!loggedin && !chatActive) {
    lastCheck = new Date().getTime();
    closePlayerPropertyDesign();
    mp.events.callRemote("Server_OpenAuction");
  }
});
mp.events.add("Client_PropertyDesignRequestHandler", _0x9ed8c8 => {
  _0x9ed8c8 = parseInt(_0x9ed8c8);
  mp.events.callRemote("Server_PropertyDesignRequestHandler", _0x9ed8c8);
});
mp.events.add("Client_LoadPropertyDesignPage2", (_0x16b90c, _0x533063) => {
  main_browser.execute("APPS.state.property.parkingNumber = " + _0x16b90c);
  main_browser.execute("APPS.state.property.parkingDays = " + _0x533063);
  main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
});
mp.events.add("Client_LoadPropertyDesignPage3", (_0x4f2d2e = "Default", _0x3780a0 = -1, _0x2749e2 = 0, _0x83cc99 = 0, _0x4ea5de = 0, _0x169fa8 = 0, _0x52f55f = 0, _0x754b31 = 0, _0x18298c = 0, _0x1dc2ef = 0, _0x493fe0 = 0, _0x5e977c = 0) => {
  main_browser.execute("APPS.state.property.bizName = '" + _0x4f2d2e + "'");
  main_browser.execute("APPS.state.property.bizBalance = " + _0x3780a0);
  main_browser.execute("APPS.state.property.bizProducts = " + _0x2749e2);
  main_browser.execute("APPS.state.property.bizDays = " + _0x83cc99);
  main_browser.execute("APPS.state.property.bizStatePrice = " + _0x4ea5de);
  main_browser.execute("APPS.state.property.dayProfit = " + _0x169fa8);
  main_browser.execute("APPS.state.property.yesterdayProfit = " + _0x52f55f);
  main_browser.execute("APPS.state.property.weekProfit = " + _0x754b31);
  main_browser.execute("APPS.state.property.monthProfit = " + _0x18298c);
  main_browser.execute("APPS.state.property.bizState = " + _0x1dc2ef);
  main_browser.execute("APPS.state.property.materialsLimit = " + _0x493fe0);
  main_browser.execute("APPS.state.property.materialsCooldown = " + _0x5e977c);
  main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
});
mp.events.add("Client_SetGPSToProductsOrder", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(797.22, -2988.744, 6.02, true);
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_SetGPSToOffice", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(-113.141, -606.075, 36.281, true);
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_SetGPSToAerodrome", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(-1032.149, -3013.898, 13.947, true);
      closePlayerPropertyDesign();
    }
  }
});
const bunker_poses = [[-3032.252, 3333.851, 10.245, 97.249], [38.996, 2930.905, 55.848, 22.844], [492.474, 3013.456, 40.949, 154.963], [849.516, 3020.898, 41.322, 179.835], [2110.155, 3326.222, 45.353, -62.893], [2489.408, 3161.829, 48.995, -168.529], [1802.084, 4705.61, 39.79, 125.856], [-756.875, 5943.523, 19.963, 111.636], [-3158.477, 1376.622, 16.722, -87.381], [1571.899, 2226.982, 78.241, -174.437], [-389.31, 4341.954, 56.106, -163.86]];
function getNearestBunker() {
  let _0x119c50 = -1;
  let _0x766bc5 = 1e+24;
  for (let _0x1376ae = 0; _0x1376ae < bunker_poses.length; _0x1376ae++) {
    const _0x1d32c9 = bunker_poses[_0x1376ae];
    const _0xd36c94 = Math.sqrt(Math.pow(_0x1d32c9[0] - mp.players.local.position.x, 2) + Math.pow(_0x1d32c9[1] - mp.players.local.position.y, 2) + Math.pow(_0x1d32c9[2] - mp.players.local.position.z, 2));
    if (_0xd36c94 < _0x766bc5) {
      _0x766bc5 = _0xd36c94;
      _0x119c50 = _0x1376ae;
    }
  }
  return _0x119c50;
}
mp.events.add("Client_SetGPSToMyBunker", _0x59e715 => {
  if (!playerPropertyDesignOpened || !loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x488791 = bunker_poses[_0x59e715 - 1];
  SetGPSLocation(_0x488791[0], _0x488791[1], _0x488791[2], true);
  closePlayerPropertyDesign();
});
mp.events.add("Client_SetGPSToNearestBunker", () => {
  if (!loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  if (mp.players.local.dimension != 0) {
    return ShowNotification(language["Вы должны находиться на улице"][curr_lang], 6);
  }
  const _0x53082c = getNearestBunker();
  if (_0x53082c != -1) {
    const _0x3e78d6 = bunker_poses[_0x53082c];
    SetGPSLocation(_0x3e78d6[0], _0x3e78d6[1], _0x3e78d6[2], true);
    CloseBrowsers();
  }
});
mp.events.add("Client_LoadPropertyDesignPage5", (_0x39fceb, _0x26e593) => {
  main_browser.execute("APPS.state.property.storageNumbers = " + JSON.stringify(_0x39fceb));
  main_browser.execute("APPS.state.property.personalNumbers = " + JSON.stringify(_0x26e593));
  main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
});
mp.events.add("Client_LoadPropertyDesignPage7", _0x4c6314 => {
  mp.console.logInfo(_0x4c6314);
  main_browser.execute("APPS.state.property.haveBuilding = " + _0x4c6314);
  main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
});
const storageEnterData = [{
  id: 1,
  position: new mp.Vector3(907.942, -1722.843, 31.66),
  type: 30,
  color: [246, 225, 0, 255],
  scale: 1,
  exit: new mp.Vector3(908.126, -1726.061, 32.16)
}, {
  id: 2,
  position: new mp.Vector3(572.831, 128.742, 98.975),
  type: 30,
  color: [246, 225, 0, 255],
  scale: 1,
  exit: new mp.Vector3(574.438, 132.032, 99.475)
}, {
  id: 3,
  position: new mp.Vector3(-762.786, -2587.594, 13.388),
  type: 30,
  color: [246, 225, 0, 255],
  scale: 1,
  exit: new mp.Vector3(-759.669, -2586.771, 13.868)
}, {
  id: 4,
  position: new mp.Vector3(186.325, 2786.539, 45.486),
  type: 30,
  color: [246, 225, 0, 255],
  scale: 1,
  exit: new mp.Vector3(189.084, 2786.513, 45.59)
}, {
  id: 5,
  position: new mp.Vector3(38.461, 6453.604, 30.925),
  type: 30,
  color: [246, 225, 0, 255],
  scale: 1,
  exit: new mp.Vector3(42.762, 6454.188, 31.426)
}];
function getNearestStorage() {
  let _0x354d6a = -1;
  let _0x54c936 = 1e+24;
  for (let _0x48476f = 0; _0x48476f < storageEnterData.length; _0x48476f++) {
    const _0x20fb5b = storageEnterData[_0x48476f].position;
    const _0x546eac = Math.sqrt(Math.pow(_0x20fb5b.x - mp.players.local.position.x, 2) + Math.pow(_0x20fb5b.y - mp.players.local.position.y, 2) + Math.pow(_0x20fb5b.z - mp.players.local.position.z, 2));
    if (_0x546eac < _0x54c936) {
      _0x54c936 = _0x546eac;
      _0x354d6a = _0x48476f;
    }
  }
  return _0x354d6a;
}
mp.events.add("Client_SetGPSToNearestWarehouse", () => {
  if (!playerPropertyDesignOpened || !loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  if (mp.players.local.dimension != 0) {
    return ShowNotification(language["Вы должны находиться на улице"][curr_lang], 6);
  }
  const _0x213102 = getNearestStorage();
  if (_0x213102 != -1) {
    const _0x14f266 = storageEnterData[_0x213102].position;
    SetGPSLocation(_0x14f266.x, _0x14f266.y, _0x14f266.z, true);
    closePlayerPropertyDesign();
  }
});
mp.events.add("Client_SetGPSToShipCall", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(-846.4028930664062, -1316.76708984375, 5.000180721282959, true);
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_SetGPSToProductsOrder", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(797.2205200195312, -2988.744384765625, 6.020936489105225, true);
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_SetGPSToMyWarehouse", _0x5808c1 => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(storageEnterData[_0x5808c1].position.x, storageEnterData[_0x5808c1].position.y, storageEnterData[_0x5808c1].position.z, true);
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_BusinessUpMaterials", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BusinessUpMaterials");
    }
  }
});
mp.events.add("Client_BusinessSuccessUpMaterials", (_0x170f97, _0x2509e5) => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.property.materialsLimit = " + _0x170f97 + ";");
    main_browser.execute("APPS.state.property.materialsCooldown = " + _0x2509e5 + ";");
    main_browser.execute("this.AppComponents.propertydesign.$forceUpdate();");
  }
});
const BUILDING_BUY_POSITION = new mp.Vector3(-1581.292, -558.406, 34.953);
mp.events.add("Client_SetGPSToBuyBuilding", () => {
  SetGPSLocation(BUILDING_BUY_POSITION.x, BUILDING_BUY_POSITION.y, BUILDING_BUY_POSITION.z);
  closePlayerPropertyDesign();
});
mp.events.add("Client_SetRouteToMyBuilding", () => {
  if (playerPropertyDesignOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetRouteToMyBuilding");
      closePlayerPropertyDesign();
    }
  }
});
mp.events.add("Client_RequestHouseMenu", (_0x5dee7a, _0x201463 = null) => {
  if (loggedin && !chatActive && (playerPropertyDesignOpened || Postal_Opened || WarehouseDesignOpened)) {
    if (!(new Date().getTime() - lastCheck < 500) && !!loggedin && !chatActive) {
      lastCheck = new Date().getTime();
      CloseBrowsers();
      mp.events.callRemote("Server_RequestHouseMenu", _0x5dee7a, _0x201463);
    }
  }
});