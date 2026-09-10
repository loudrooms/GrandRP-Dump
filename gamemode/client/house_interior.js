global.FurnitureShopOpened = false;
global.HouseMenuOpened = false;
let furniture_preview_obj;
let last_interior_objects = [];
mp.events.add("Client_LoadHouseFurniture", _0x2eb8ef => {
  for (let _0x36eb55 = 0; _0x36eb55 < last_interior_objects.length; _0x36eb55++) {
    if (mp.objects.exists(last_interior_objects[_0x36eb55])) {
      last_interior_objects[_0x36eb55].destroy();
    }
  }
  last_interior_objects = [];
  for (let _0x1eef3c = 0; _0x1eef3c < _0x2eb8ef.length; _0x1eef3c++) {
    const _0x1c7f17 = _0x2eb8ef[_0x1eef3c].model;
    const _0x367f7d = _0x2eb8ef[_0x1eef3c].position;
    let _0x522bda = 0;
    let _0x3da40a = 0;
    let _0x507411 = 0;
    if (typeof _0x2eb8ef[_0x1eef3c].rotation == "number" || typeof _0x2eb8ef[_0x1eef3c].rotation == "string") {
      _0x507411 = _0x2eb8ef[_0x1eef3c].rotation;
    } else if (typeof _0x2eb8ef[_0x1eef3c].rotation == "object") {
      _0x522bda = _0x2eb8ef[_0x1eef3c].rotation.x;
      _0x3da40a = _0x2eb8ef[_0x1eef3c].rotation.y;
      _0x507411 = _0x2eb8ef[_0x1eef3c].rotation.z;
    }
    const _0xa5bbcb = mp.objects.new(mp.game.joaat(_0x1c7f17), _0x367f7d, {
      rotation: new mp.Vector3(_0x522bda, _0x3da40a, _0x507411),
      alpha: 255,
      dimension: mp.players.local.dimension
    });
    last_interior_objects.push(_0xa5bbcb);
  }
});
mp.events.add("Client_OpenFurnitureShop", (_0x54e72c, _0x38abb8, _0x499534 = 1) => {
  if (GlobalCheck() || chatActive || !loggedin) {
    return;
  }
  localplayer.freezePosition(true);
  const _0x2a661e = {
    balance: _0x54e72c.money,
    woodBalance: _0x54e72c.wood,
    bizHaveMaterials: _0x38abb8,
    type: 7,
    discount_factor: _0x499534,
    show: true
  };
  main_browser.execute("APPS.state.new_cloth_shop = " + JSON.stringify(_0x2a661e));
  FurnitureShopOpened = true;
  SwitchHUDToDesign(true);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(2768.059, 3493.188, 55.818), new mp.Vector3(2768.059, 3493.188, 55.318), new mp.Vector3(-3.5, 4.5, 1.5), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  InteractiveCamera.setMaxMinZoom(1, 0.2);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
});
mp.events.add("Client_CloseFurnitureShop", () => {
  CloseFurnitureShop(false);
});
global.CloseFurnitureShop = function (_0x5bcf37 = true) {
  if (FurnitureShopOpened) {
    localplayer.freezePosition(false);
    main_browser.execute("APPS.state.new_cloth_shop.show = false;");
    FurnitureShopOpened = false;
    SwitchHUDToDesign(false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (furniture_preview_obj) {
      furniture_preview_obj.destroy();
      furniture_preview_obj = undefined;
    }
    InteractiveCamera.stop();
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (_0x5bcf37) {
      mp.events.callRemote("Server_CloseFurnitureShop");
    }
  }
};
mp.events.add("Client_SelectFurniture", _0x414d30 => {
  global.createFurnitureObjectInShop(_0x414d30);
});
global.createFurnitureObjectInShop = function (_0x5a3b47) {
  if (furniture_preview_obj) {
    furniture_preview_obj.destroy();
    furniture_preview_obj = undefined;
  }
  furniture_preview_obj = mp.objects.new(mp.game.joaat(_0x5a3b47), new mp.Vector3(2768.059, 3493.188, 55.318), {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 255,
    dimension: localplayer.dimension
  });
};
mp.events.add("Jew_RotPlayer", _0x1753bd => {
  if (FurnitureShopOpened) {
    if (furniture_preview_obj && mp.objects.exists(furniture_preview_obj)) {
      const _0xf7dee6 = furniture_preview_obj.getRotation(2);
      if (_0x1753bd == 1) {
        _0xf7dee6.z += 5;
      } else {
        _0xf7dee6.z -= 5;
      }
      furniture_preview_obj.setRotation(_0xf7dee6.x, _0xf7dee6.y, _0xf7dee6.z, 2, true);
      return;
    }
    InteractiveCamera.heading = InteractiveCamera.normilizeHeading(InteractiveCamera.heading + (_0x1753bd == 1 ? -5 : 5));
    InteractiveCamera.changePositionCamera();
  }
});
mp.events.add("Client_BuyFurniture", _0x610fe7 => {
  if (FurnitureShopOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyFurnitureFromShop", _0x610fe7);
    }
  }
});
mp.events.add("Client_OpenBizFurnitureInfo", () => {
  if (!FurnitureShopOpened) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  CloseFurnitureShop();
  mp.events.callRemote("Open_Biz_Info", 287);
});
mp.events.add("Client_OpenHouseMenu", (_0x2dcd6a, _0x47ceca, _0x53b9d0, _0x1c92ad, _0x1bbd4d, _0x4bf297, _0x472a13, _0x1de9e6, _0x5873d6) => {
  if (Postal_Opened) {
    ClosePostal(true, true);
  }
  if (GlobalCheck() || chatActive || !loggedin) {
    return;
  }
  PlayBaseAudio("key_e_press");
  const _0x2eab29 = {
    house_info: _0x2dcd6a,
    house_owner: _0x47ceca,
    house_rielt: _0x53b9d0,
    fib: _0x1c92ad,
    other_fam: _0x1bbd4d,
    fam_house: _0x4bf297,
    interior: [],
    furnitures: [],
    houseUpgrades: _0x1de9e6,
    warehouses: Array.from({
      length: 5
    }, (_0x221d9, _0x1763ac) => ({
      id: _0x1763ac + 1,
      name: t("Отсутствует"),
      isOwner: false,
      slots: []
    })),
    isWarehouseLoaded: false,
    isPostalLoaded: false,
    isHouse: _0x5873d6,
    is_spouse_house: _0x472a13,
    show: true
  };
  main_browser.execute("APPS.state.house_menu = " + JSON.stringify(_0x2eab29));
  HouseMenuOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_OpenHouseMenuGarages", _0x5737ec => {
  if (GlobalCheck() || chatActive || !loggedin) {
    return;
  }
  PlayBaseAudio("key_e_press");
  const _0x4e27c7 = {
    house_info: _0x5737ec,
    house_owner: false,
    house_rielt: false,
    fib: false,
    other_fam: false,
    fam_house: false,
    is_spouse_house: false,
    interior: [],
    furnitures: [],
    houseUpgrades: [],
    warehouses: [],
    isWarehouseLoaded: false,
    isPostalLoaded: false,
    isHouse: true,
    garagesOnly: true,
    show: true
  };
  main_browser.execute("APPS.state.house_menu = " + JSON.stringify(_0x4e27c7));
  HouseMenuOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseHouseMenu", () => {
  closeHouseMenu(false);
});
global.closeHouseMenu = function (_0x3f6e86 = true, _0x3368c0 = false) {
  if (HouseMenuOpened) {
    main_browser.execute("APPS.state.house_menu.show = false;");
    HouseMenuOpened = false;
    if (Postal_Opened) {
      Postal_Opened = false;
      mp.events.callRemote("Server_ClosePostal");
    }
    if (_0x3368c0) {
      mp.events.callRemote("Server_CloseHouseMenu", true);
    } else if (_0x3f6e86) {
      mp.events.callRemote("Server_CloseHouseMenu");
    }
    furniture_array = [];
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_HouseInteriorAction", (_0x1bf58f, _0x2248af, _0x457cc2, _0x17fe8e) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseInteriorAction", _0x1bf58f, _0x2248af, _0x457cc2, _0x17fe8e);
    }
  }
});
mp.events.add("Client_UpdateHouseInterior", (_0x2479f7, _0x40c4c9, _0x3a1e3e, _0x20ddf7) => {
  if (HouseMenuOpened) {
    main_browser.execute("APPS.state.house_menu.house_info.purchasedInteriors = " + JSON.stringify(_0x2479f7));
    main_browser.execute("APPS.state.house_menu.house_info.currentInterior = " + JSON.stringify(_0x40c4c9));
    main_browser.execute("APPS.state.house_menu.house_info.apartCurrentInterior = " + JSON.stringify(_0x3a1e3e));
    main_browser.execute("APPS.state.house_menu.house_info.isInteriorWithoutFurniture = " + JSON.stringify(_0x20ddf7));
  }
});
mp.events.add("Client_RequestLoadHouseMenuFurniture", _0x46ee99 => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestLoadHouseMenuFurniture", _0x46ee99);
    }
  }
});
let furniture_array = [];
mp.events.add("Client_LoadHouseMenuFurniture", _0x49bc72 => {
  if (HouseMenuOpened) {
    _0x49bc72.isLoaded = true;
    furniture_array = _0x49bc72.list;
    main_browser.execute("APPS.state.house_menu.furnitures = " + JSON.stringify(_0x49bc72));
  }
});
mp.events.add("Client_RouteToFurnitureStore", () => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(2748.715, 3467.03, 55.697, true, 0);
      closeHouseMenu(true, true);
    }
  }
});
mp.events.add("Client_SetFurniture", _0x252e41 => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetFurniture", _0x252e41);
    }
  }
});
mp.events.add("Client_DeleteFurniture", _0x579a40 => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteFurniture", _0x579a40);
    }
  }
});
mp.events.add("Client_ClearFurniture", _0x4abbd7 => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ClearFurniture", _0x4abbd7);
    }
  }
});
mp.events.add("Client_UpdateHouseFurniture", (_0xa509db, _0x4465a0) => {
  if (HouseMenuOpened) {
    switch (_0xa509db) {
      case "delete":
        furniture_array.splice(_0x4465a0, 1);
        break;
      case "clear":
        furniture_array[_0x4465a0].isInstalled = 0;
    }
    main_browser.execute("APPS.state.house_menu.furnitures.list = " + JSON.stringify(furniture_array));
  }
});
mp.events.add("Client_BuyHouseImprovement", (_0x1860c1, _0x19574c) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyHouseImprovement", _0x1860c1, _0x19574c);
    }
  }
});
mp.events.add("Client_UpdateHouseUpgrades", _0x32fc4a => {
  if (HouseMenuOpened) {
    main_browser.execute("APPS.state.house_menu.houseUpgrades = [" + _0x32fc4a + "]");
  }
});
mp.events.add("Client_UpdateGarageInterior", _0x2d017c => {
  if (HouseMenuOpened) {
    main_browser.execute("APPS.state.house_menu.house_info.houseGarageInterior = " + _0x2d017c);
  }
});
mp.events.add("Client_RequestLoadPageInHouse", _0x4a700a => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestLoadPageInHouse", _0x4a700a);
    }
  }
});
mp.events.add("Client_LoadPageInHouse", (_0x5b7f4c, _0x114367) => {
  if (HouseMenuOpened) {
    switch (_0x5b7f4c) {
      case "warehouses":
        {
          const _0x3b5b54 = buildWarehousesData(_0x114367);
          main_browser.execute("APPS.state.house_menu.warehouses = " + JSON.stringify(_0x3b5b54));
          main_browser.execute("APPS.state.house_menu.isWarehouseLoaded = true;");
          break;
        }
      case "postal":
        {
          const _0x2dd1d8 = typeof _0x114367 == "string" ? JSON.parse(_0x114367) : _0x114367;
          const _0x40be8a = {
            mail_pool: (_0x2dd1d8.mail_pool || []).map(_0x381c96 => ({
              ..._0x381c96,
              name: resolveTranslationValue(_0x381c96.name),
              text: resolveTranslationValue(_0x381c96.text)
            })),
            mail_send: _0x2dd1d8.mail_send || 0,
            mail_get: _0x2dd1d8.mail_get || 0,
            last_item_box: 0,
            second_index: 0,
            delete_package: 0,
            can_load_more: _0x2dd1d8.can_load_more || false,
            postal_items: [],
            show: false
          };
          main_browser.execute("APPS.state.mailstamp = " + JSON.stringify(_0x40be8a));
          main_browser.execute("APPS.state.house_menu.isPostalLoaded = true;");
          Postal_Opened = true;
          break;
        }
    }
  }
});
const TOTAL_WAREHOUSES = 5;
const MAX_WAREHOUSE_SLOTS = 6;
function buildWarehousesData(_0x36bbe4) {
  if (!mp.storage.data.warehouses_names) {
    mp.storage.data.warehouses_names = [[], [], [], [], [], []];
    mp.storage.flush();
  }
  const _0x1ceb33 = [];
  for (let _0x52481 = 0; _0x52481 < TOTAL_WAREHOUSES; _0x52481++) {
    const _0x563f56 = _0x36bbe4.filter(_0x7201d1 => _0x7201d1.storageNumber == _0x52481);
    const _0x1a6332 = _0x563f56.length > 0;
    const _0x3423fe = [];
    if (_0x1a6332) {
      for (let _0x4f4b09 = 0; _0x4f4b09 < MAX_WAREHOUSE_SLOTS; _0x4f4b09++) {
        const _0x15107c = _0x563f56.find(_0x5e17dc => _0x5e17dc.personalNumber == _0x4f4b09);
        const _0x238b6f = mp.storage.data.warehouses_names[_0x52481] && mp.storage.data.warehouses_names[_0x52481][_0x4f4b09];
        _0x3423fe.push({
          name: _0x238b6f || t("Ячейка") + " " + (_0x4f4b09 + 1),
          used: 0,
          total: 30,
          owned: !!_0x15107c,
          paid: !!_0x15107c && _0x15107c.days > 0,
          days: _0x15107c ? _0x15107c.days : 0,
          personalNumber: _0x4f4b09
        });
      }
    }
    _0x1ceb33.push({
      id: _0x52481 + 1,
      name: _0x1a6332 ? t("Склад") + " #" + (_0x52481 + 1) : t("Отсутствует"),
      isOwner: _0x1a6332,
      slots: _0x3423fe
    });
  }
  return {
    list: _0x1ceb33
  };
}
mp.events.add("Client_OpenWarehouseSlot", (_0x21db6e, _0x598b85) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseOpenWarehouseSlot", _0x21db6e, _0x598b85);
    }
  }
});
mp.events.add("Client_RentWarehouseSlot", (_0x5ecce4, _0x3b2f9f) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseRentWarehouseSlot", _0x5ecce4, _0x3b2f9f);
    }
  }
});
mp.events.add("Client_ExtendWarehouseSlot", (_0x309970, _0x49b0a5) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseExtendWarehouseSlot", _0x309970, _0x49b0a5);
    }
  }
});
mp.events.add("Client_BuyWarehouse", _0x17bd3f => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseBuyWarehouse", _0x17bd3f);
    }
  }
});
mp.events.add("Client_RenameWarehouseSlot", (_0x5b24cf, _0x9d1952) => {
  if (HouseMenuOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_HouseRenameWarehouseSlot", _0x5b24cf, _0x9d1952);
    }
  }
});
mp.events.add("Client_WarehouseUpdateDesign", (_0x2aa285, _0x3e9484, _0x382329) => {
  if (HouseMenuOpened) {
    mp.events.callRemote("Server_RequestLoadPageInHouse", "warehouses");
  }
});
mp.events.add("Client_ChangeWarehouseNameFinally", (_0x1f4efd, _0x522c96, _0x3ad58a) => {
  if (HouseMenuOpened) {
    mp.storage.data.warehouses_names ||= [[], [], [], [], [], []];
    mp.storage.data.warehouses_names[_0x1f4efd - 1][_0x522c96] = _0x3ad58a;
    mp.storage.flush();
    main_browser.execute("APPS.state.house_menu.warehouses.list[" + (_0x1f4efd - 1) + "].slots[" + _0x522c96 + "].name = " + JSON.stringify(_0x3ad58a));
  }
});
const SMALL_GARAGE_TEXTURES = [["garage1_floor1", "garage1_floor2", "garage1_floor3", "garage1_floor4", "garage1_floor5"], ["garage1_wall1", "garage1_wall2", "garage1_wall3", "garage1_wall4", "garage1_wall5"], ["garage1_ceiling1", "garage1_ceiling2", "garage1_ceiling3", "garage1_ceiling4", "garage1_ceiling5"]];
const BIG_GARAGE_TEXTURES = [["grand_big_garage_floor1", "grand_big_garage_floor2", "grand_big_garage_floor3", "grand_big_garage_floor4"], ["grand_big_garage_wall1", "grand_big_garage_wall2", "grand_big_garage_wall3", "grand_big_garage_wall4"], ["grand_big_garage_ceiling_1", "grand_big_garage_ceiling_2", "grand_big_garage_ceiling_3"]];
const GARAGE_COORDS = {
  1: {
    x: -460.466,
    y: -839.886,
    z: 9.293
  },
  2: {
    x: 1578.578,
    y: -677.38,
    z: -92.5818
  }
};
const HOUSE_INTERIORS_DATA = [{
  position: new mp.Vector3(325.15, 1273.855, 49.33214),
  categories: [{
    key: "Вариации пола",
    list: ["gr_fst_floor1", "gr_fst_floor2", "gr_fst_floor3", "gr_fst_floor4"]
  }, {
    key: "Плитка на кухне",
    list: ["gr_fst_fl_tiles1", "gr_fst_fl_tiles2", "gr_fst_fl_tiles3", "gr_fst_fl_tiles4"]
  }, {
    key: "Ковры",
    list: ["gr_fst_carp1", "gr_fst_carp2", "gr_fst_carp3"]
  }, {
    key: "Плитка в ванной",
    list: ["gr_fst_tlt_walls1", "gr_fst_tlt_walls2", "gr_fst_tlt_walls3"]
  }, {
    key: "Стены 1",
    list: ["gr_fst_walls1", "gr_fst_walls2", "gr_fst_walls3"]
  }, {
    key: "Стены 2",
    list: ["gr_fst_walls2_1", "gr_fst_walls2_2", "gr_fst_walls2_3"]
  }, {
    key: "Стены 3",
    list: ["gr_fst_walls3_1", "gr_fst_walls3_2", "gr_fst_walls3_3", "gr_fst_walls3_4"]
  }, {
    key: "Основная мебель",
    list: ["gr_fst_add_props", ""]
  }, {
    key: "Второстепенная мебель",
    list: ["gr_fst_enot", ""]
  }]
}, {
  position: new mp.Vector3(325.15, 1214.138, 49.33214),
  categories: [{
    key: "Вариации пола",
    list: ["gr_sec_var1_floor", "gr_sec_var2_floor", "gr_sec_var3_floor"]
  }, {
    key: "Стены 1",
    list: ["gr_sec_var1_wood", "gr_sec_var2_wood", "gr_sec_var3_wood"]
  }, {
    key: "Стены 2",
    list: ["gr_sec_walls_var1", "gr_sec_walls_var2", "gr_sec_walls_var3", "gr_sec_walls_var4"]
  }, {
    key: "Ковры",
    list: ["gr_sec_car_var1", "gr_sec_car_var2", "gr_sec_car_var3"]
  }, {
    key: "Плитка на кухне",
    list: ["gr_sec_fl_kt_1", "gr_sec_fl_kt_2"]
  }, {
    key: "Деревянные вставки",
    list: ["gr_sec_ww_1", "gr_sec_ww_2", "gr_sec_ww_3"]
  }, {
    key: "Второстепенная мебель",
    list: ["gr_sec_aps_adding_obj", ""]
  }, {
    key: "Второстепенная мебель 2",
    list: ["gr_sec_bar_light", ""]
  }]
}, {
  position: new mp.Vector3(-1150, 1500, 30),
  categories: [{
    key: "Ковры",
    list: ["gr_mid_carp1", "gr_mid_carp2", "gr_mid_carp3"]
  }, {
    key: "Плитка на кухне",
    list: ["gr_mid_kitfl_tiles1", "gr_mid_kitfl_tiles2", "gr_mid_kitfl_tiles3"]
  }, {
    key: "Стены",
    list: ["gr_mid_plast1_1", "gr_mid_plast1_2", "gr_mid_plast1_3", "gr_mid_plast1_4", "gr_mid_plast1_5"]
  }, {
    key: "Стены 2",
    list: ["gr_mid_plast2_1", "gr_mid_plast2_2", "gr_mid_plast2_3", "gr_mid_plast2_4", "gr_mid_plast2_5"]
  }, {
    key: "Пол в прихожей",
    list: ["gr_mid_wood_1", "gr_mid_wood_2", "gr_mid_wood_3"]
  }, {
    key: "Основная мебель",
    list: ["gr_mid_ad_prps", ""]
  }, {
    key: "Занавески",
    list: ["gr_mid_blinds_var1", "gr_mid_blinds_var2"]
  }, {
    key: "Кровать",
    list: ["gr_mid_bed1", "gr_mid_bed2"]
  }, {
    key: "Кухня",
    list: ["gr_mid_kit_var1", "gr_mid_kit_var2"]
  }]
}, {
  position: new mp.Vector3(350.8185, -978.6475, -98.374),
  categories: [{
    key: "Пол в гостинной",
    list: ["midap1_gfloor1", "midap1_gfloor2", "midap1_gfloor3", "midap1_gfloor4", "midap1_gfloor5"]
  }, {
    key: "Стены в гостинной",
    list: ["midap1_gwall1", "midap1_gwall2", "midap1_gwall3", "midap1_gwall4", "midap1_gwall5"]
  }, {
    key: "Пол на кухне",
    list: ["midap1_kfloor1", "midap1_kfloor2", "midap1_kfloor3", "midap1_kfloor4", "midap1_kfloor5"]
  }, {
    key: "Пол в спальне",
    list: ["midap1_bdfloor1", "midap1_bdfloor2", "midap1_bdfloor3", "midap1_bdfloor4", "midap1_bdfloor5"]
  }, {
    key: "Стены в спальне",
    list: ["midap1_bdwall1", "midap1_bdwall2", "midap1_bdwall3", "midap1_bdwall4", "midap1_bdwall5"]
  }, {
    key: "Пол в туалете",
    list: ["midap1_bfloor1", "midap1_bfloor2", "midap1_bfloor3", "midap1_bfloor4", "midap1_bfloor5"]
  }, {
    key: "Стены в туалете",
    list: ["midap1_bwall1", "midap1_bwall2", "midap1_bwall3", "midap1_bwall4", "midap1_bwall5"]
  }, {
    key: "Мебель",
    list: ["midap1_props", ""]
  }]
}, {
  position: new mp.Vector3(346.4444, -944.1993, -98.23875),
  categories: [{
    key: "Пол в гостинной",
    list: ["midap2_gfloor1", "midap2_gfloor2", "midap2_gfloor3", "midap2_gfloor4", "midap2_gfloor5"]
  }, {
    key: "Стены в гостинной",
    list: ["midap2_gwall1", "midap2_gwall2", "midap2_gwall3", "midap2_gwall4", "midap2_gwall5"]
  }, {
    key: "Пол на кухне",
    list: ["midap2_kfloor1", "midap2_kfloor2", "midap2_kfloor3", "midap2_kfloor4", "midap2_kfloor5"]
  }, {
    key: "Пол в спальне",
    list: ["midap2_bdfloor1", "midap2_bdfloor2", "midap2_bdfloor3", "midap2_bdfloor4", "midap2_bdfloor5"]
  }, {
    key: "Стены в спальне",
    list: ["midap2_bdwall1", "midap2_bdwall2", "midap2_bdwall3", "midap2_bdwall4", "midap2_bdwall5"]
  }, {
    key: "Пол в туалете",
    list: ["midap2_bfloor1", "midap2_bfloor2", "midap2_bfloor3", "midap2_bfloor4", "midap2_bfloor5"]
  }, {
    key: "Стены в туалете",
    list: ["midap2_bwall1", "midap2_bwall2", "midap2_bwall3", "midap2_bwall4", "midap2_bwall5"]
  }, {
    key: "Мебель",
    list: ["midap2_props", ""]
  }]
}, {
  position: new mp.Vector3(344.9214, -927.7416, -98.6981),
  categories: [{
    key: "Пол в гостинной",
    list: ["lowap1_gfloor1", "lowap1_gfloor2", "lowap1_gfloor3"]
  }, {
    key: "Пол в спальне",
    list: ["lowap1_bdfloor1", "lowap1_bdfloor2"]
  }, {
    key: "Пол в кухне",
    list: ["lowap1_tiles1", "lowap1_tiles2", "lowap1_tiles3"]
  }, {
    key: "Стены в кухне",
    list: ["lowap1_ktiles1", "lowap1_ktiles2"]
  }, {
    key: "Стены в спальне 1",
    list: ["lowap1_bdwall1", "lowap1_bdwall2"]
  }, {
    key: "Стены в спальне 2",
    list: ["lowap1_bdwall3", "lowap1_bdwall4", "lowap1_bdwall5", "lowap1_bdwall6"]
  }, {
    key: "Стены в туалете",
    list: ["lowap1_bwall1", "lowap1_bwall2"]
  }, {
    key: "Стена в гостинной",
    list: ["lowap1_wwall1", "lowap1_wwall2", "lowap1_wwall3"]
  }, {
    key: "Мебель",
    list: ["lowap1_props", ""]
  }]
}, {
  position: new mp.Vector3(344.2979, -909.0964, -98.73566),
  categories: [{
    key: "Пол в гостинной",
    list: ["lowap2_gfloor1", "lowap2_gfloor2", "lowap2_gfloor3"]
  }, {
    key: "Стены в кухне",
    list: ["lowap2_kfloor1", "lowap2_kfloor2", "lowap2_kfloor3"]
  }, {
    key: "Стена в гостинной(низ)",
    list: ["lowap2_uwall1", "lowap2_uwall2", "lowap2_uwall3"]
  }, {
    key: "Стена в гостинной(верх)",
    list: ["lowap2_upwall1", "lowap2_upwall2", "lowap2_upwall3"]
  }, {
    key: "Пол в туалете",
    list: ["lowap2_bfloor1", "lowap2_bfloor2", "lowap2_bfloor3"]
  }, {
    key: "Стена в туалете",
    list: ["lowap2_bwall1", "lowap2_bwall2", "lowap2_bwall3"]
  }, {
    key: "Мебель",
    list: ["lowap2_props", ""]
  }]
}, {
  position: new mp.Vector3(470, 1555, -75),
  categories: [{
    key: "Мебель в основной комнате",
    list: ["gr_lux_1_mainroom", "gr_lux_2_mainroom", ""]
  }, {
    key: "Кухня",
    list: ["gr_lux_kitchen1", "gr_lux_kitchen2"]
  }, {
    key: "Вход",
    list: ["gr_lux_entrance_1", "gr_lux_entrance_2"],
    editorDisabled: true
  }, {
    key: "Основа интерьера",
    list: ["gr_lux_main_1", "gr_lux_main_2"]
  }, {
    key: "Гардероб и спальня",
    list: ["gr_lux_1_bedr", "gr_lux_2_bedr"]
  }, {
    key: "Ковер",
    list: ["gr_lux_carp_1_1", "gr_lux_carp_1_2"]
  }, {
    key: "Пол в зале",
    list: ["gr_lux_floor_1_1", "gr_lux_floor_1_2"]
  }, {
    key: "Плитка на кухне",
    list: ["gr_lux_kitchent_1_1", "gr_lux_kitchent_1_2", "gr_lux_kitchent_1_3"]
  }, {
    key: "Стены 1",
    list: ["gr_lux_wall_1_1", "gr_lux_wall_1_2", "gr_lux_wall_1_3"]
  }, {
    key: "Стены 2",
    list: ["gr_lux_wall_2_1", "gr_lux_wall_2_2", "gr_lux_wall_2_3"]
  }, {
    key: "Дерево 1",
    list: ["gr_lux_wood_1_1", "gr_lux_wood_1_2"]
  }, {
    key: "Дерево 2",
    list: ["gr_lux_wood_2_1", "gr_lux_wood_2_2"]
  }, {
    key: "Дополнительная мебель",
    list: ["gr_lux_1_addprops", "gr_lux_2_addprops", ""]
  }]
}, {}, {}, {}, {
  position: new mp.Vector3(-1114.327, 1757.61, -13.407),
  categories: [{
    key: "Ступени",
    list: ["grand_third_appartment_stairs_var1", "grand_third_appartment_stairs_var2", "grand_third_appartment_stairs_var3"]
  }, {
    key: TranslateText("Стены в спальне {0}", 1),
    list: ["grand_third_bedwall_1_var1", "grand_third_bedwall_1_var2", "grand_third_bedwall_1_var3"]
  }, {
    key: TranslateText("Стены в спальне {0}", 2),
    list: ["grand_third_bedwall_2_var1", "grand_third_bedwall_2_var2", "grand_third_bedwall_2_var3"]
  }, {
    key: "Кирпичи на входе",
    list: ["grand_third_brickwall_1_var1", "grand_third_brickwall_1_var2", "grand_third_brickwall_1_var3"]
  }, {
    key: "Кирпичи в комнате",
    list: ["grand_third_brickwall_2_var1", "grand_third_brickwall_2_var2", "grand_third_brickwall_2_var3"]
  }, {
    key: TranslateText("Ковры в спальне {0}", 1),
    list: ["grand_third_carpet_1_var1", "grand_third_carpet_1_var2"]
  }, {
    key: TranslateText("Ковры в спальне {0}", 2),
    list: ["grand_third_carpet_2_var1", "grand_third_carpet_2_var2"]
  }, {
    key: TranslateText("Стены в гостинной {0}", 1),
    list: ["grand_third_chillwall_1_var1", "grand_third_chillwall_1_var2", "grand_third_chillwall_1_var3"]
  }, {
    key: TranslateText("Стены в гостинной {0}", 2),
    list: ["grand_third_chillwall_2_var1", "grand_third_chillwall_2_var2", "grand_third_chillwall_2_var3"]
  }, {
    key: TranslateText("Плитка на полу в ванной {0}", 1),
    list: ["grand_third_floortiles_1_var1", "grand_third_floortiles_1_var2"]
  }, {
    key: TranslateText("Плитка на полу в ванной {0}", 2),
    list: ["grand_third_floortiles_2_var1", "grand_third_floortiles_2_var2"]
  }, {
    key: TranslateText("Пол в холле {0} этаж", 2),
    list: ["grand_third_hallfloor_1_var1", "grand_third_hallfloor_1_var2", "grand_third_hallfloor_1_var3"]
  }, {
    key: TranslateText("Пол в холле {0} этаж", 1),
    list: ["grand_third_hallfloor_2_var1", "grand_third_hallfloor_2_var2"]
  }, {
    key: TranslateText("Стены в холле {0}", 1),
    list: ["grand_third_hallwall_1_var1", "grand_third_hallwall_1_var2", "grand_third_hallwall_1_var3"]
  }, {
    key: TranslateText("Стены в холле {0}", 2),
    list: ["grand_third_hallwall_2_var1", "grand_third_hallwall_2_var2", "grand_third_hallwall_2_var3"]
  }, {
    key: TranslateText("Стены в холле {0}", 3),
    list: ["grand_third_hallwall_3_var1", "grand_third_hallwall_3_var2", "grand_third_hallwall_3_var3"]
  }, {
    key: "Пол на кухне",
    list: ["grand_third_kitchenfloor_var1", "grand_third_kitchenfloor_var2", "grand_third_kitchenfloor_var3"]
  }, {
    key: "Пол в офисе",
    list: ["grand_third_officefloor_var1", "grand_third_officefloor_var2", "grand_third_officefloor_var3"]
  }, {
    key: "Стены в офисе",
    list: ["grand_third_officewall_var1", "grand_third_officewall_var2", "grand_third_officewall_var3"]
  }, {
    key: TranslateText("Стены в туалете {0}", 1),
    list: ["grand_third_toilettiles_1_var1", "grand_third_toilettiles_1_var2"]
  }, {
    key: TranslateText("Стены в туалете {0}", 2),
    list: ["grand_third_toilettiles_2_var1", "grand_third_toilettiles_2_var2"]
  }, {
    key: TranslateText("Стены в туалете {0}", 3),
    list: ["grand_third_toilettiles_3_var1", "grand_third_toilettiles_3_var2"]
  }, {
    key: TranslateText("Пол в гардеробе {0}", 1),
    list: ["grand_third_wardrobefloor_var1", "grand_third_wardrobefloor_var2"]
  }, {
    key: "Деревянные стены в спальне",
    list: ["grand_third_woodwall_var1", "grand_third_woodwall_var2"]
  }, {
    key: "Кресла в гостинной",
    list: ["grand_third_appartment_chill_var1", "grand_third_appartment_chill_var2", "grand_third_appartment_chill_var3"]
  }, {
    key: "Стены на кухне",
    list: ["grand_third_kitchenwall_var1", "grand_third_kitchenwall_var2", "grand_third_kitchenwall_var3"]
  }, {
    key: "Картины",
    list: ["grand_third_prop_popart"]
  }]
}, {
  position: new mp.Vector3(-1850, 1400, -25),
  categories: [{
    key: "Стены кухни, зала, комнаты планирования",
    list: ["house_int_high_concrete_1_1", "house_int_high_concrete_1_2", "house_int_high_concrete_1_3"]
  }, {
    key: "Стены коридора, холла, офиса [2 этаж]",
    list: ["house_int_high_concrete_2_1", "house_int_high_concrete_2_2", "house_int_high_concrete_2_3"]
  }, {
    key: "Стены спальни",
    list: ["house_int_high_concrete_3_1", "house_int_high_concrete_3_2", "house_int_high_concrete_3_3"]
  }, {
    key: "Пол холла, окантовка по краям",
    list: ["house_int_high_floor_1_1", "house_int_high_floor_1_2", "house_int_high_floor_1_3"]
  }, {
    key: "Пол коридора [2 этаж], комнаты планирования",
    list: ["house_int_high_floor_2_1", "house_int_high_floor_2_2", "house_int_high_floor_2_3"]
  }, {
    key: "Пол спальни [2 этаж]",
    list: ["house_int_high_floor_3_1", "house_int_high_floor_3_2", "house_int_high_floor_3_3"]
  }, {
    key: "Мрамор в зале",
    list: ["house_int_high_marble_1_1", "house_int_high_marble_1_2"]
  }, {
    key: "Мрамор в туалете",
    list: ["house_int_high_marble_2_1", "house_int_high_marble_2_2"]
  }, {
    key: "Дерево в спальне",
    list: ["house_int_high_wood_1", "house_int_high_wood_2"]
  }, {
    key: "Коврик при входе",
    list: ["house_prop_high_carp_grey", "house_prop_high_carp_keep"]
  }]
}];
function applyGarageTextures(_0x4830d0, _0x385518 = 1) {
  mp.game.cam.doScreenFadeOut(50);
  const _0x324d39 = _0x385518 === 1 ? SMALL_GARAGE_TEXTURES : BIG_GARAGE_TEXTURES;
  const _0x3f73a2 = GARAGE_COORDS[_0x385518];
  const _0x577d24 = mp.game.interior.getInteriorAtCoords(_0x3f73a2.x, _0x3f73a2.y, _0x3f73a2.z);
  for (let _0x3a484e = 0; _0x3a484e < _0x324d39.length; _0x3a484e++) {
    const _0x22c241 = _0x324d39[_0x3a484e].length;
    let _0x568fcc = _0x4830d0[_0x3a484e];
    if (!Number.isFinite(_0x568fcc) || _0x568fcc < 1 || _0x568fcc > _0x22c241) {
      _0x568fcc = 1;
      _0x4830d0[_0x3a484e] = 1;
    }
    for (let _0x2a5eb7 = 0; _0x2a5eb7 < _0x22c241; _0x2a5eb7++) {
      if (_0x568fcc === _0x2a5eb7 + 1) {
        mp.game.interior.enableInteriorProp(parseInt(_0x577d24), _0x324d39[_0x3a484e][_0x2a5eb7]);
      } else {
        mp.game.interior.disableInteriorProp(parseInt(_0x577d24), _0x324d39[_0x3a484e][_0x2a5eb7]);
      }
    }
  }
  mp.game.interior.refreshInterior(parseInt(_0x577d24));
  setTimeout(() => {
    mp.game.cam.doScreenFadeIn(700);
  }, 250);
}
function applyHouseTextures(_0x40e2ef, _0x50cf9a) {
  const _0x2fb50f = HOUSE_INTERIORS_DATA[_0x40e2ef - 1];
  if (!_0x2fb50f || !_0x2fb50f.position || !_0x2fb50f.categories) {
    return;
  }
  const _0x1fc3c0 = mp.game.interior.getInteriorAtCoords(_0x2fb50f.position.x, _0x2fb50f.position.y, _0x2fb50f.position.z);
  for (let _0x302040 = 0; _0x302040 < _0x2fb50f.categories.length; _0x302040++) {
    const {
      list: _0x559a59
    } = _0x2fb50f.categories[_0x302040];
    for (let _0x502221 = 0; _0x502221 < _0x559a59.length; _0x502221++) {
      if (_0x559a59[_0x502221]) {
        mp.game.interior.disableInteriorProp(parseInt(_0x1fc3c0), _0x559a59[_0x502221]);
      }
    }
    const _0x450bc7 = _0x559a59[_0x50cf9a[_0x302040] - 1];
    if (_0x450bc7) {
      mp.game.interior.enableInteriorProp(parseInt(_0x1fc3c0), _0x450bc7);
    }
  }
  mp.game.interior.refreshInterior(parseInt(_0x1fc3c0));
}
function applyHouseTextureSingle(_0x575a9f, _0x5160bd, _0x235ac6) {
  const _0xa0eac7 = HOUSE_INTERIORS_DATA[_0x575a9f - 1];
  if (!_0xa0eac7 || !_0xa0eac7.position || !_0xa0eac7.categories) {
    return;
  }
  const _0x354066 = mp.game.interior.getInteriorAtCoords(_0xa0eac7.position.x, _0xa0eac7.position.y, _0xa0eac7.position.z);
  const {
    list: _0x303a9c
  } = _0xa0eac7.categories[_0x5160bd];
  for (let _0x1f97ce = 0; _0x1f97ce < _0x303a9c.length; _0x1f97ce++) {
    if (_0x303a9c[_0x1f97ce]) {
      mp.game.interior.disableInteriorProp(parseInt(_0x354066), _0x303a9c[_0x1f97ce]);
    }
  }
  const _0x38e500 = _0x303a9c[_0x235ac6 - 1];
  if (_0x38e500) {
    mp.game.interior.enableInteriorProp(parseInt(_0x354066), _0x38e500);
  }
  mp.game.interior.refreshInterior(parseInt(_0x354066));
}
const interiorEditor = {
  active: false,
  type: null,
  id: null,
  textures: [],
  selectedCategory: 0,
  categories: []
};
const editorKeys = {};
function getEditorCategoryDataIndex(_0x2734e7) {
  const _0x502024 = interiorEditor.categories[_0x2734e7];
  if (_0x502024) {
    return _0x502024.dataIndex ?? _0x2734e7;
  } else {
    return _0x2734e7;
  }
}
function buildCategories(_0x399221, _0x4f4b1d) {
  if (_0x399221 === "garage") {
    const _0x19377f = _0x4f4b1d === 1 ? SMALL_GARAGE_TEXTURES : BIG_GARAGE_TEXTURES;
    const _0x31772d = [t("Пол"), t("Стены"), t("Потолок")];
    const _0x23b9aa = _0x4f4b1d === 1 ? "garage" : "big_garage";
    return _0x19377f.map((_0x5004ae, _0x5074e0) => ({
      name: _0x31772d[_0x5074e0],
      count: _0x5004ae.length,
      list: _0x5004ae,
      imageFolder: _0x23b9aa,
      dataIndex: _0x5074e0
    }));
  }
  const _0x2d1dab = HOUSE_INTERIORS_DATA[_0x4f4b1d - 1];
  if (!_0x2d1dab || !_0x2d1dab.categories) {
    return [];
  }
  const _0x3ed3c8 = [];
  for (let _0x2d3b6a = 0; _0x2d3b6a < _0x2d1dab.categories.length; _0x2d3b6a++) {
    const _0x56a2e7 = _0x2d1dab.categories[_0x2d3b6a];
    if (!_0x56a2e7.editorDisabled) {
      _0x3ed3c8.push({
        name: t(_0x56a2e7.key),
        count: _0x56a2e7.list.length,
        list: _0x56a2e7.list,
        imageFolder: "house" + _0x4f4b1d,
        dataIndex: _0x2d3b6a
      });
    }
  }
  return _0x3ed3c8;
}
function editorStepTexture(_0x2b5005) {
  if (!interiorEditor.active) {
    return;
  }
  const _0xa813d = interiorEditor.selectedCategory;
  const _0x3821f5 = interiorEditor.categories[_0xa813d];
  if (!_0x3821f5) {
    return;
  }
  const _0x28f16d = _0x3821f5.dataIndex ?? _0xa813d;
  const _0x39a2a5 = interiorEditor.textures[_0x28f16d] || 1;
  const _0x42cde3 = Math.max(1, Math.min(_0x3821f5.count, _0x39a2a5 + _0x2b5005));
  if (_0x42cde3 !== _0x39a2a5) {
    interiorEditor.textures[_0x28f16d] = _0x42cde3;
    if (interiorEditor.type === "house") {
      applyHouseTextureSingle(interiorEditor.id, _0x28f16d, _0x42cde3);
    } else {
      applyGarageTextures(interiorEditor.textures, interiorEditor.id);
    }
    main_browser.execute("\n        this.AppComponents.InteriorEditor.updateTexture(" + _0x28f16d + ", " + _0x42cde3 + ");\n        this.AppComponents.EditorSlider.setTexture(" + _0x42cde3 + ");\n    ");
  }
}
function editorStepCategory(_0x2608c6) {
  if (!interiorEditor.active) {
    return;
  }
  const _0xaff68b = interiorEditor.categories.length;
  const _0x3b77c2 = Math.max(0, Math.min(_0xaff68b - 1, interiorEditor.selectedCategory + _0x2608c6));
  if (_0x3b77c2 !== interiorEditor.selectedCategory) {
    interiorEditor.selectedCategory = _0x3b77c2;
    main_browser.execute("this.AppComponents.InteriorEditor.setCategory(" + _0x3b77c2 + ");");
  }
}
function openInteriorEditor(_0x10f765, _0x4654e6, _0x1fcfd1) {
  closeHouseMenu(false);
  isChangeTexturesActive = true;
  const _0x4166d3 = buildCategories(_0x10f765, _0x4654e6);
  interiorEditor.active = true;
  interiorEditor.type = _0x10f765;
  interiorEditor.id = _0x4654e6;
  interiorEditor.textures = _0x1fcfd1.slice();
  interiorEditor.selectedCategory = 0;
  interiorEditor.categories = _0x4166d3;
  main_browser.execute("APPS.state.interiorEditor = " + JSON.stringify({
    type: _0x10f765,
    id: _0x4654e6,
    textures: interiorEditor.textures,
    categories: _0x4166d3,
    selectedCategory: 0,
    show: true
  }));
  editorKeys.prevTexture = () => editorStepTexture(-1);
  editorKeys.nextTexture = () => editorStepTexture(1);
  editorKeys.prevCategory = () => editorStepCategory(-1);
  editorKeys.nextCategory = () => editorStepCategory(1);
  editorKeys.save = () => global.closeInteriorEditor(true);
  editorKeys.cancel = () => global.closeInteriorEditor(false);
  mp.keys.bind(37, true, editorKeys.prevTexture);
  mp.keys.bind(39, true, editorKeys.nextTexture);
  mp.keys.bind(38, true, editorKeys.prevCategory);
  mp.keys.bind(40, true, editorKeys.nextCategory);
  mp.keys.bind(13, true, editorKeys.save);
}
global.closeInteriorEditor = function (_0x44e55a = true) {
  if (interiorEditor.active) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      interiorEditor.active = false;
      mp.keys.unbind(37, true, editorKeys.prevTexture);
      mp.keys.unbind(39, true, editorKeys.nextTexture);
      mp.keys.unbind(38, true, editorKeys.prevCategory);
      mp.keys.unbind(40, true, editorKeys.nextCategory);
      mp.keys.unbind(13, true, editorKeys.save);
      mp.keys.unbind(27, true, editorKeys.cancel);
      if (_0x44e55a) {
        if (interiorEditor.type === "house") {
          mp.events.callRemote("Server_SaveHouseTextures", JSON.stringify(interiorEditor.textures));
        } else {
          mp.events.callRemote("Server_ChangeGarageTextures", JSON.stringify(interiorEditor.textures), interiorEditor.id);
        }
        main_browser.execute("APPS.state.interiorEditor.show = false;");
        isChangeTexturesActive = false;
        mp.gui.cursor.show(false, false);
      } else {
        isChangeTexturesActive = false;
      }
    }
  }
};
global.isChangeTexturesActive = false;
mp.events.add("Client_CanChangeHouseTextures", (_0x28981c, _0x250c33) => {
  openInteriorEditor("house", parseInt(_0x28981c) - 99, String(_0x250c33).split(",").map(Number));
});
mp.events.add("Client_ChangeGarageStyle", (_0x285893, _0xd54dc2) => {
  const _0xdea3ae = Array.isArray(_0x285893) ? _0x285893 : JSON.parse(_0x285893);
  openInteriorEditor("garage", parseInt(_0xd54dc2), _0xdea3ae);
});
mp.events.add("Client_ChangeHomeCustomized", (_0x2c3ef9, _0x1839fe) => {
  applyHouseTextures(parseInt(_0x2c3ef9) - 99, String(_0x1839fe).split(",").map(Number));
});
mp.events.add("Client_UpdateGarageTextures", _0xb557f6 => {
  applyGarageTextures(_0xb557f6, 1);
});
mp.events.add("Client_UpdateGarageTexturesBig", _0x33c777 => {
  applyGarageTextures(_0x33c777, 2);
});
mp.events.add("Client_EnterFactionGarage", _0x12b163 => {
  applyGarageTextures(_0x12b163, 1);
  localplayer.setCanBeKnockedOffVehicle(1);
});
mp.events.add("Client_ExitFactionGarage", () => {
  setTimeout(() => localplayer.setCanBeKnockedOffVehicle(0), 1000);
});
mp.events.add("Client_InteriorEditorPreview", (_0x9e5e42, _0x41dd8e) => {
  if (!interiorEditor.active) {
    return;
  }
  const _0x4a85ae = getEditorCategoryDataIndex(parseInt(_0x9e5e42));
  interiorEditor.textures[_0x4a85ae] = _0x41dd8e;
  if (interiorEditor.type === "house") {
    applyHouseTextureSingle(interiorEditor.id, _0x4a85ae, _0x41dd8e);
  } else {
    applyGarageTextures(interiorEditor.textures, interiorEditor.id);
  }
});
mp.events.add("Client_InteriorEditorChangeCategory", _0x159164 => {
  interiorEditor.selectedCategory = parseInt(_0x159164);
});
mp.events.add("Client_InteriorEditorSave", () => {
  global.closeInteriorEditor(true);
});
mp.events.add("Client_InteriorEditorClose", () => {
  global.closeInteriorEditor(false);
});