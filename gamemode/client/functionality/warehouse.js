global.WarehouseDesignOpened = false;
global.atPersonalWarehouse = undefined;
if (!mp.storage.data.warehouses_names) {
  mp.storage.data.warehouses_names = [[], [], [], [], [], []];
  mp.storage.flush();
}
mp.events.add("Client_OpenWarehouseDesign", (_0x264077, _0x5468eb, _0x80362d, _0x136e45, _0x1cdff9) => {
  if (WarehouseDesignOpened) {
    return;
  }
  atPersonalWarehouse = _0x264077;
  const _0x12ea5a = "{\"warehouses_names\":" + JSON.stringify(mp.storage.data.warehouses_names[_0x264077]) + ",\"warehousesDays\":[" + _0x136e45 + "],\"storageNumber\":" + _0x264077 + ",\"boughtStorages\":" + JSON.stringify(_0x5468eb) + ",\"show_upgrade_hint\":" + _0x1cdff9 + ",\"show\":true}";
  main_browser.execute("APPS.state.warehouselist = " + _0x12ea5a);
  WarehouseDesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_BuyWarehouse", _0x449049 => {
  if (WarehouseDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyPersonalWarehouse", atPersonalWarehouse, _0x449049 - 1);
    }
  }
});
mp.events.add("Client_CloseWarehouseDesign", () => {
  CloseWarehouseDesign();
});
global.CloseWarehouseDesign = function () {
  if (WarehouseDesignOpened) {
    main_browser.execute("APPS.state.warehouselist.show = false");
    WarehouseDesignOpened = false;
    SwitchHUDToDesign(false);
    atPersonalWarehouse = undefined;
  }
};
mp.events.add("Client_ExtendWarehouse", _0x4b1160 => {
  if (WarehouseDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ExtendWarehouse", _0x4b1160 - 1);
    }
  }
});
mp.markers.new(30, new mp.Vector3(990.855, -2186.717, -49), 1, {
  color: [246, 225, 0, 255],
  visible: true,
  dimension: -1
});
mp.markers.new(1, new mp.Vector3(1009.749, -2199.434, -50), 1, {
  color: [246, 225, 0, 255],
  visible: true,
  dimension: -1
});
mp.events.add("Client_OpenPersonalStorage", _0x1c95d1 => {
  if (WarehouseDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OpenPersonalStorage", _0x1c95d1 - 1);
    }
  }
});
mp.events.add("Client_ChangeWarehouseName", _0x102a94 => {
  if (WarehouseDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestChangeWarehouse", _0x102a94 - 1);
    }
  }
});
mp.events.add("Client_ChangeWarehouseNameFinally", (_0xeba0df, _0x321f13, _0x52dba5) => {
  if (WarehouseDesignOpened) {
    mp.storage.data.warehouses_names[_0xeba0df - 1][_0x321f13] = _0x52dba5;
    mp.storage.flush();
    main_browser.execute("APPS.state.warehouselist.warehouses_names = " + JSON.stringify(mp.storage.data.warehouses_names[_0xeba0df - 1]));
    main_browser.execute("this.AppComponents.warehouselist.$forceUpdate();");
  }
});
const blipData = [{
  id: 1,
  position: new mp.Vector3(907.942, -1722.843, 31.66),
  type: 856,
  color: 7
}, {
  id: 2,
  position: new mp.Vector3(572.831, 128.742, 99.475),
  type: 856,
  color: 7
}, {
  id: 3,
  position: new mp.Vector3(-762.786, -2587.594, 13.888),
  type: 856,
  color: 7
}, {
  id: 4,
  position: new mp.Vector3(186.325, 2786.539, 45.986),
  type: 856,
  color: 7
}, {
  id: 5,
  position: new mp.Vector3(38.461, 6453.604, 31.425),
  type: 856,
  color: 7
}];
blipData.forEach(_0x239484 => {
  mp.blips.new(_0x239484.type, _0x239484.position, {
    name: "Warehouse #" + _0x239484.id,
    color: _0x239484.color,
    shortRange: true
  });
});
mp.events.add("Client_SetGPSToMyStorage", _0xb48c04 => {
  if (!playerPropertyDesignOpened || !loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x53ab68 = blipData[_0xb48c04].position;
  SetGPSLocation(_0x53ab68.x, _0x53ab68.y, _0x53ab68.z, true);
  closePlayerPropertyDesign();
});
mp.events.add("Client_SetGPSToNearestStorage", () => {});
global.at_personal_warehouse = false;
mp.events.add("Client_WarehouseInteract", _0x2f7696 => {
  if (_0x2f7696 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_personal_warehouse = _0x2f7696;
});
mp.events.add("Client_WarehouseUpdateDesign", (_0x181318, _0xd74023, _0x314270) => {
  if (WarehouseDesignOpened) {
    if (_0x181318 === "buy") {
      main_browser.execute("APPS.state.warehouselist.boughtStorages[" + _0xd74023 + "] = 1");
      main_browser.execute("APPS.state.warehouselist.warehousesDays[" + _0xd74023 + "] = " + _0x314270);
      main_browser.execute("this.AppComponents.warehouselist.$forceUpdate();");
    } else if (_0x181318 === "days") {
      main_browser.execute("APPS.state.warehouselist.warehousesDays[" + _0xd74023 + "] = " + _0x314270);
      main_browser.execute("this.AppComponents.warehouselist.$forceUpdate();");
    }
  }
});