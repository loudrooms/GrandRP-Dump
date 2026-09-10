let second_cam;
let last_cam = null;
function SwitchCamVector(_0x14dfd8) {
  localplayer.freezePosition(true);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  if (last_cam != null && last_cam != _0x14dfd8) {
    second_cam = mp.cameras.new("default", new mp.Vector3(CamFocuses[campos][last_cam][0], CamFocuses[campos][last_cam][1], CamFocuses[campos][last_cam][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(CamFocuses[campos][last_cam][3], CamFocuses[campos][last_cam][4], CamFocuses[campos][last_cam][5]);
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(CamFocuses[campos][_0x14dfd8][0], CamFocuses[campos][_0x14dfd8][1], CamFocuses[campos][_0x14dfd8][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(CamFocuses[campos][_0x14dfd8][3], CamFocuses[campos][_0x14dfd8][4], CamFocuses[campos][_0x14dfd8][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x14dfd8) {
    localcamera.setActiveWithInterp(second_cam.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, false, false);
    if (campos == 0) {
      localplayer.setRotation(0, 0, 354.6534118652344, 2, true);
    } else if (campos == 1) {
      localplayer.setRotation(0, 0, 118.65088653564453, 2, true);
    }
  } else {
    mp.game.cam.renderScriptCams(true, true, 0, true, true);
  }
  last_cam = _0x14dfd8;
}
function SetClothesShopOutfit(_0x1fd6db, _0x365379, _0x125d7c, _0x8d1501 = false) {
  mp.events.callRemote("ServerChangeOutfit", _0x1fd6db, _0x365379, _0x125d7c, _0x8d1501);
}
global.InClothesShop = false;
global.CloseClothesShop = function () {
  if (InClothesShop && loggedin && !chatActive) {
    CloseClothesMenu();
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    InClothesShop = false;
    mp.events.callRemote("CloseClothesShopCorrectly");
    HintClose();
  }
};
const Jew_CamFocuses = [[-625.249267578125, -225.2531280517578, 38.77696990966797, -624.9817504882812, -224.25254821777344, 38.41535949707031], [-624.1485595703125, -224.44760131835938, 38.09893035888672, -624.5930786132812, -224.12164306640625, 38.06435775756836], [-625.024, -224.57, 38.702, -624.957, -224.247, 38.702]];
global.InJewellery = false;
let jew_mod = 0;
const male_top_offset = 0;
const male_legs_offset = 0;
const male_boots_offset = 0;
const female_top_offset = 0;
const female_legs_offset = 0;
const female_boots_offset = 0;
function SwitchJewCamVector(_0x5e4e58) {
  localplayer.freezePosition(true);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  if (last_cam != null && last_cam != _0x5e4e58) {
    second_cam = mp.cameras.new("default", new mp.Vector3(Jew_CamFocuses[last_cam][0], Jew_CamFocuses[last_cam][1], Jew_CamFocuses[last_cam][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(Jew_CamFocuses[last_cam][3], Jew_CamFocuses[last_cam][4], Jew_CamFocuses[last_cam][5]);
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(Jew_CamFocuses[_0x5e4e58][0], Jew_CamFocuses[_0x5e4e58][1], Jew_CamFocuses[_0x5e4e58][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(Jew_CamFocuses[_0x5e4e58][3], Jew_CamFocuses[_0x5e4e58][4], Jew_CamFocuses[_0x5e4e58][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x5e4e58) {
    localcamera.setActiveWithInterp(second_cam.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, false, false);
    localplayer.setRotation(0, 0, 166.254, 2, true);
  } else {
    mp.game.cam.renderScriptCams(true, true, 2000, true, true);
  }
  last_cam = _0x5e4e58;
}
function GetRendersForClothes(_0x37615a) {
  let _0x4d273b = "";
  if (InventoryItems[_0x37615a[0].item_id][8] > 0) {
    _0x4d273b = InventoryItems[_0x37615a[0].item_id][9] == 0 ? "male/11/" : "female/11/";
    _0x37615a[0].prewiew = _0x4d273b + InventoryItems[_0x37615a[0].item_id][8] + "_" + _0x37615a[0].render + ".png";
  }
  if (InventoryItems[_0x37615a[1].item_id][8] > 0) {
    _0x4d273b = InventoryItems[_0x37615a[1].item_id][9] == 0 ? "male/4/" : "female/4/";
    _0x37615a[1].prewiew = _0x4d273b + InventoryItems[_0x37615a[1].item_id][8] + "_" + _0x37615a[1].render + ".png";
  }
  if (InventoryItems[_0x37615a[2].item_id][8] > 0) {
    _0x4d273b = InventoryItems[_0x37615a[2].item_id][9] == 0 ? "male/6/" : "female/6/";
    _0x37615a[2].prewiew = _0x4d273b + InventoryItems[_0x37615a[2].item_id][8] + "_" + _0x37615a[2].render + ".png";
  }
  _0x37615a[0].item_id = 0;
  _0x37615a[1].item_id = 0;
  _0x37615a[2].item_id = 0;
  return _0x37615a;
}
mp.events.add("OpenJewelleryShop", (_0x20dbac, _0x330cb1) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.callRemote("OpenJewelleryCorrectly");
  InJewellery = true;
  let _0xa99de8 = 1;
  switch (_0x330cb1) {
    case 0:
      _0xa99de8 = 1;
      break;
    case 1:
      _0xa99de8 = 0.9;
      break;
    case 2:
      _0xa99de8 = 0.75;
      break;
    case 3:
      _0xa99de8 = 0.5;
  }
  ShowNewClothesMenu(2, _0xa99de8);
});
mp.events.add("Jew_Set_Cam", () => {
  SwitchJewCamVector(0);
});
global.CloseJewShop = function () {
  if (InJewellery && loggedin && !chatActive) {
    CloseNewClothesMenu();
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (second_cam != null) {
      second_cam.destroy();
      second_cam = null;
    }
    last_cam = null;
    InJewellery = false;
    mp.events.callRemote("CloseJewShopCorrectly");
  }
};
mp.events.add("Jew_ClearAnim", () => {
  localplayer.taskPlayAnim("amb@world_human_guard_patrol@male@base", "base", 8, 1, -1, 1, 0, false, false, false);
  localplayer.stopAnimTask("amb@world_human_guard_patrol@male@base", "base", 0);
});
mp.events.add("Jew_RotPlayer", _0x2fafae => {
  if (!InJewellery && !InNewClothesShop && !InBarberShop && !at_clothes_change && !InClothesShop) {
    return;
  }
  let _0x29ad75 = localplayer.getRotation(2);
  if (_0x2fafae == 1) {
    _0x29ad75.z += 5;
  } else {
    _0x29ad75.z -= 5;
  }
  localplayer.setRotation(0, 0, _0x29ad75.z, 2, true);
});
global.inexclusiveclothes = false;
mp.events.add("Client_OpenExclusiveItemShop", _0x31f4da => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.callRemote("Server_OpenExclusiveItemShopCorrectly");
  mp.events.call("Disablechat");
  inexclusiveclothes = true;
  const _0x416b21 = "{clothes_pool:" + JSON.stringify(_0x31f4da) + ",\"need_update\":1,\"show\":true}";
  main_browser.execute("APPS.state.exclusive_clothes = " + _0x416b21);
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_LoadExclusiveItemShop", _0x71cd47 => {
  if (inexclusiveclothes && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 300)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadExclusiveItemShop", _0x71cd47);
    }
  }
});
mp.events.add("Client_UpdateExclusiveItemShop", _0x7b8a80 => {
  if (inexclusiveclothes && loggedin && !chatActive) {
    main_browser.execute("APPS.state.exclusive_clothes.clothes_pool = " + JSON.stringify(_0x7b8a80) + ";");
  }
});
global.CloseExclusiveClothesShop = function (_0x51e9f9 = 0) {
  if (inexclusiveclothes && loggedin && !chatActive) {
    main_browser.execute("APPS.state.exclusive_clothes.show = false;");
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    inexclusiveclothes = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (_0x51e9f9) {
      mp.events.callRemote("Server_CloseExclusiveCorrectly");
    }
  }
};
mp.events.add("Client_BuyExclusiveClothes", (_0x21f287, _0x4d2531) => {
  if (inexclusiveclothes) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyExclusiveClothes", _0x21f287, _0x4d2531);
    }
  }
});
mp.events.add("Client_GetExclusiveClothes", (_0x26c5e8, _0x207c23) => {
  if (inexclusiveclothes) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetExclusiveClothes", _0x26c5e8, _0x207c23);
    }
  }
});
mp.events.add("Client_ExclusiveItemError", _0x34dc03 => {
  if (inexclusiveclothes != 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x34dc03 + "');");
  }
});
global.exclusiveclothesinteract = false;
mp.events.add("Client_ExclusiveClothesInteractCam", () => {
  if (inexclusiveclothes != 0) {
    main_browser.execute("APPS.state.exclusive_clothes.show = false;");
    exclusiveclothesinteract = true;
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
    mp.game.cam.renderScriptCams(true, false, 3000, true, false);
  }
});
global.CloseExclusiveClothesInteract = function () {
  if (exclusiveclothesinteract) {
    exclusiveclothesinteract = false;
    InteractiveCamera.stop();
    main_browser.execute("APPS.state.exclusive_clothes.show = true;");
  }
};
global.OpenedClothesSkill = false;
global.CloseClothesSkill = function () {
  if (OpenedClothesSkill) {
    OpenedClothesSkill = false;
    main_browser.execute("APPS.state.skill_clothes.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_UpdateClothesSKill", (_0x4f3aa7, _0xcc4668, _0x2b4214) => {
  if (OpenedClothesSkill) {
    _0x2b4214 = GetRendersForClothes(_0x2b4214);
    main_browser.execute("APPS.state.skill_clothes.clothes_skill = " + JSON.stringify(_0x2b4214));
    main_browser.execute("APPS.state.skill_clothes.stone = " + _0x4f3aa7);
    main_browser.execute("APPS.state.skill_clothes.shield = " + _0xcc4668);
  }
});
global.at_stone_bigbox = false;
let StoneBigBox = {
  blip: undefined
};
mp.events.add("Client_StoneBigBoxInterct", _0x5d0daa => {
  if (_0x5d0daa == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_stone_bigbox = _0x5d0daa;
});
mp.events.add("Client_StoneBigBoxRoute", (_0x400063, _0x5dc4f1, _0x5285b1, _0x431632) => {
  if (StoneBigBox.blip) {
    StoneBigBox.blip.destroy();
    StoneBigBox.blip = undefined;
  }
  StoneBigBox.blip = mp.blips.new(617, new mp.Vector3(_0x400063, _0x5dc4f1, _0x5285b1), {
    name: language["Место направления"][curr_lang],
    color: _0x431632 == 2 ? 2 : 27
  });
  StoneBigBox.blip.setRoute(true);
});
mp.events.add("Client_StoneBigBoxDestroy", () => {
  if (StoneBigBox.blip) {
    StoneBigBox.blip.destroy();
    StoneBigBox.blip = undefined;
  }
});
global.fakeArmy = false;
global.ShowClothesMenu = function (_0x501ae4, _0x2d5762 = 0, _0x4072ad = 0) {
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  localplayer.freezePosition(true);
  mp.gui.cursor.show(true, true);
  is_freezed = true;
  let _0x47448a = {
    maximumSlider: _0x4072ad,
    price: _0x2d5762,
    type: _0x501ae4,
    texture_id: 0,
    clothes_id: 0,
    show: true
  };
  if (_0x501ae4 == 4) {
    _0x47448a.gender = localplayer.model != 1885233650 ? 0 : 1;
  }
  main_browser.execute("APPS.state.clothes_menu = " + JSON.stringify(_0x47448a));
};
global.CloseClothesMenu = function () {
  main_browser.execute("APPS.state.clothes_menu.show = false;");
  localplayer.freezePosition(false);
  is_freezed = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  if (cameraControl) {
    fakeArmy = true;
    destroyLocalCameraAndAnimBack();
    ShowNotification(language["Используйте клавишу X, чтобы снять армейскую форму"][curr_lang], 2);
  }
};
mp.keys.bind(88, true, function () {
  if (fakeArmy) {
    mp.events.callRemote("Server_RequestRemoveFakeArmy");
  }
});
mp.events.add("Client_CleanFakeArmy", () => {
  fakeArmy = false;
  if (gpsblip) {
    gpsblip.destroy();
    gpsblip = undefined;
  }
  if (gpscolshape) {
    gpscolshape.destroy();
    gpscolshape = undefined;
  }
});
let clothes_menu = {};
mp.events.add("OpenClothesShopElite", (_0x5b57c5, _0x2778a2, _0x373107) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.callRemote("OpenClothesShopCorrectly");
  InNewClothesShop = true;
  lastClothType = 1;
  campos = _0x5b57c5;
  let _0x283b4b = 1;
  switch (_0x2778a2) {
    case 0:
      _0x283b4b = 1;
      break;
    case 1:
      _0x283b4b = 0.9;
      break;
    case 2:
      _0x283b4b = 0.75;
      break;
    case 3:
      _0x283b4b = 0.5;
  }
  ShowNewClothesMenu(6, _0x283b4b, _0x373107);
});
mp.events.add("Client_ChangeEliteClothesItem", (_0x25a77d, _0x42528f, _0x6818e1, _0x267cda = 0) => {
  if (InNewClothesShop && loggedin) {
    mp.events.callRemote("Server_ClothesShopChangeItem", _0x42528f, _0x6818e1, _0x267cda);
    if (lastClothType != _0x42528f && _0x42528f != 6) {
      lastClothType = _0x42528f;
      changeClothesCam(_0x42528f);
    } else if (_0x42528f == 6) {
      lastClothType = _0x42528f;
      const _0x40f588 = localplayer.model != 1885233650 ? 0 : 1;
      const _0x53d5c8 = eliteClothesCatalog[_0x40f588][_0x42528f][_0x6818e1];
      if (!_0x53d5c8 || !InventoryItems[_0x53d5c8.item_id][6]) {
        return;
      }
      correctType = 0;
      parseInt(InventoryItems[_0x53d5c8.item_id][6], 10);
      switch (_0x53d5c8[6]) {
        case 0:
          correctType = 0;
          break;
        case 11:
          correctType = 1;
          break;
        case 8:
          correctType = 2;
          break;
        case 4:
          correctType = 3;
          break;
        case 6:
          correctType = 4;
          break;
        case 12:
          correctType = 5;
      }
      changeClothesCam(correctType);
    }
  }
});
const eliteClothesCatalog = [{
  1: [{
    item_id: 5166,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 110000
  }, {
    item_id: 5168,
    extras: [0, 1, 2, 3, 4, 5],
    price: 150000
  }, {
    item_id: 5183,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    price: 120000
  }, {
    item_id: 5177,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24],
    price: 150000
  }, {
    item_id: 4329,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 100000
  }, {
    item_id: 4333,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 300000
  }, {
    item_id: 4330,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    price: 350000
  }, {
    item_id: 3991,
    extras: [0, 1, 2, 3, 4, 5],
    price: 70000
  }, {
    item_id: 3993,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 85000
  }, {
    item_id: 3994,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 135000
  }, {
    item_id: 3996,
    extras: [0, 1, 2, 3, 4, 5],
    price: 97000
  }, {
    item_id: 3997,
    extras: [0, 1, 2, 3, 4, 5],
    price: 62000
  }, {
    item_id: 4010,
    extras: [0, 1, 2, 3, 4, 5],
    price: 127000
  }],
  3: [{
    item_id: 5187,
    extras: [0, 1, 2, 3, 4],
    price: 150000
  }, {
    item_id: 5193,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 130000
  }, {
    item_id: 5197,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    price: 150000
  }, {
    item_id: 5200,
    extras: [0, 1, 2, 3, 4],
    price: 200000
  }, {
    item_id: 4021,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    price: 33333
  }, {
    item_id: 4022,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    price: 99000
  }, {
    item_id: 4023,
    extras: [0, 1, 2, 3, 4, 5],
    price: 58000
  }, {
    item_id: 4024,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 53000
  }, {
    item_id: 4025,
    extras: [0, 1, 2, 3, 4],
    price: 47000
  }, {
    item_id: 4026,
    extras: [0, 1, 2, 3, 4, 5],
    price: 49000
  }, {
    item_id: 4027,
    extras: [0, 1, 2, 3, 4, 5],
    price: 62000
  }],
  4: [{
    item_id: 4943,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    price: 75000
  }],
  6: [{
    item_id: 5008,
    extras: [0],
    price: 150000
  }, {
    item_id: 5009,
    extras: [0, 1, 2, 3],
    price: 150000
  }, {
    item_id: 4047,
    extras: [0, 1, 2, 3, 4, 5],
    price: 37000
  }, {
    item_id: 4048,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 168000
  }, {
    item_id: 4049,
    extras: [0, 1, 2, 3, 4, 5],
    price: 87000
  }, {
    item_id: 4050,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 171000
  }, {
    item_id: 4051,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    price: 35000
  }, {
    item_id: 4052,
    extras: [0, 1],
    price: 73000
  }, {
    item_id: 4053,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    price: 75000
  }, {
    item_id: 4055,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    price: 27000
  }, {
    item_id: 4070,
    extras: [0, 1],
    price: 83000
  }, {
    item_id: 4072,
    extras: [0, 1, 2, 3, 4, 5],
    price: 40000
  }, {
    item_id: 4073,
    extras: [0, 1, 2, 3, 4],
    price: 58000
  }, {
    item_id: 4075,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    price: 57000
  }]
}, {
  1: [{
    item_id: 5029,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 250000
  }, {
    item_id: 5031,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 175000
  }, {
    item_id: 5225,
    extras: [0, 1, 2],
    price: 350000
  }, {
    item_id: 5226,
    extras: [0, 1, 2, 3, 4, 5],
    price: 500000
  }, {
    item_id: 5239,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 250000
  }, {
    item_id: 5240,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    price: 200000
  }, {
    item_id: 5243,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    price: 150000
  }, {
    item_id: 4094,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    price: 87000
  }, {
    item_id: 4095,
    extras: [0, 1, 2, 3],
    price: 48000
  }, {
    item_id: 4096,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    price: 64000
  }, {
    item_id: 4097,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 67000
  }, {
    item_id: 4098,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    price: 34000
  }, {
    item_id: 4100,
    extras: [0, 1, 2, 3, 4, 5],
    price: 31000
  }, {
    item_id: 4101,
    extras: [0, 1, 2, 3, 4, 5],
    price: 107000
  }, {
    item_id: 4102,
    extras: [0, 1, 2, 3, 4, 5],
    price: 62000
  }, {
    item_id: 4103,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    price: 97000
  }, {
    item_id: 4111,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 53000
  }, {
    item_id: 4112,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 168000
  }, {
    item_id: 4117,
    extras: [0, 1, 2, 3, 4, 5],
    price: 71000
  }],
  3: [{
    item_id: 5249,
    extras: [0, 1, 2, 3],
    price: 150000
  }, {
    item_id: 5255,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 150000
  }, {
    item_id: 5259,
    extras: [0, 1, 2, 3, 4],
    price: 200000
  }, {
    item_id: 4984,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 250000
  }, {
    item_id: 4129,
    extras: [0, 1, 2, 3, 4, 5, 6, 7],
    price: 82000
  }, {
    item_id: 4130,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    price: 69000
  }, {
    item_id: 4131,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 58000
  }, {
    item_id: 4138,
    extras: [0, 1, 2, 3, 4, 5],
    price: 97000
  }],
  6: [{
    item_id: 5008,
    extras: [0],
    price: 150000
  }, {
    item_id: 5009,
    extras: [0, 1, 2, 3],
    price: 150000
  }, {
    item_id: 4151,
    extras: [0, 1, 2],
    price: 42000
  }, {
    item_id: 4152,
    extras: [0, 1, 2],
    price: 47000
  }, {
    item_id: 4156,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    price: 27000
  }, {
    item_id: 4158,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    price: 45000
  }, {
    item_id: 4160,
    extras: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    price: 27000
  }, {
    item_id: 4161,
    extras: [0, 1, 2, 3, 4, 5, 6],
    price: 128000
  }]
}];
function SetClothesCam(_0x15f143) {
  if (localcamera) {
    localcamera.destroy();
    localcamera = undefined;
  }
  InteractiveCamera.stop();
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  const _0x24f8b3 = [0.5, 0, 0, -0.5, -0.5, 0, 0];
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + _0x24f8b3[_0x15f143]), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + _0x24f8b3[_0x15f143]), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
}
global.at_clothes_change = false;
const warehouse_positions = [[{
  pos: [-1031.442, 3655.619, -60.803, 203.484],
  camera: [-1030.342, 3653.077, -60.15, -1031.674, 3656.542, -60.861]
}, {
  pos: [-1884.452, 3243.013, 36.508, 56.294],
  camera: [-1884.014, 3245.129, 37.108, -1885.332, 3243.001, 36.486]
}, {
  pos: [467.336, -1001.667, 30.711, -4.434],
  camera: [467.588, -998.623, 31.59, 467.336, -1001.667, 30.711]
}, {
  pos: [-449.665, 6008.077, 31.716, 38.806],
  camera: [-454.085, 6011.913, 33.888, -449.151, 6007.064, 31.014]
}, {
  pos: [2509.585, -407.073, 94.126, 133.276],
  camera: [2505.938, -410.924, 95.332, 2511.158, -405.537, 93.796]
}, {
  pos: [-572.092, -196.033, 38.169, -154.005],
  camera: [-568.519, -201.183, 40.63, -572.069, -195.379, 37.169]
}, {
  pos: [307.126, -597.758, 43.268, 162.159],
  camera: [306.136, -600.777, 44.419, 307.173, -598.003, 43.641]
}, {
  pos: [1776.606, 2547.895, 45.798, 266.747],
  camera: [1780.505, 2547.969, 47.818, 1776.211, 2548, 46.03]
}]];
warehouse_positions[1] = warehouse_positions[0];
warehouse_positions[1][2] = {
  pos: [464.308, -997.285, 30.69, 89.268],
  camera: [460.771, -997.07, 32.77, 466.718, -997.618, 29.69]
};
let clothes_org_menu = {};
function setOrgClothesCam(_0x1f1ac8) {
  if (localcamera) {
    localcamera.destroy();
    localcamera = undefined;
  }
  InteractiveCamera.stop();
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  const _0x33dbfd = [0.5, 0, 0, 0, -0.5, -0.5];
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + _0x33dbfd[_0x1f1ac8]), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + _0x33dbfd[_0x1f1ac8]), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [110, 250], [-0.3, 0.5], 5);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
}
function setOrgClothesCamFromWarehouse(_0x2cd824, _0x4d13a5, _0x167a12) {
  const _0x5afab3 = warehouse_positions[_0x2cd824] && warehouse_positions[_0x2cd824][_0x4d13a5];
  if (!_0x5afab3 || !_0x5afab3.camera) {
    setOrgClothesCam(_0x167a12);
    return;
  }
  if (localcamera) {
    localcamera.destroy();
    localcamera = undefined;
  }
  InteractiveCamera.stop();
  const _0x105e3f = _0x5afab3.camera;
  const _0x3d18bb = _0x105e3f[5] + [0.5, 0, 0, 0, -0.5, -0.5][_0x167a12];
  localcamera = mp.cameras.new("default", new mp.Vector3(_0x105e3f[0], _0x105e3f[1], _0x105e3f[2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(_0x105e3f[3], _0x105e3f[4], _0x3d18bb);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
}
function setOrgClothesCamForMenu(_0x4b303d) {
  if (clothes_org_menu.warehouseGender !== undefined && clothes_org_menu.warehousePlace !== undefined) {
    setOrgClothesCamFromWarehouse(clothes_org_menu.warehouseGender, clothes_org_menu.warehousePlace, _0x4b303d);
  } else {
    setOrgClothesCam(_0x4b303d);
  }
}
mp.events.add("Client_SetMemberClothes", (_0x55a6c5, _0x354475 = 0, _0x479856, _0x5d4b07 = false) => {
  if (_0x5d4b07) {
    delete clothes_org_menu.warehouseGender;
    delete clothes_org_menu.warehousePlace;
    setCameraForwardPositionAndFaceToPed();
  } else {
    if (!local_member || local_member < 1 || local_member > 4 && local_member < 12 || local_member == 13 || local_member > 14 || at_clothes_change) {
      return;
    }
    let _0x656d0 = 1;
    if (localplayer.model == 1885233650) {
      _0x656d0 = 0;
    }
    let _0x390e84 = _0x55a6c5;
    if (_0x354475 == 1) {
      _0x390e84 = 6;
    } else if (_0x354475 == 2) {
      _0x390e84 = 7;
    }
    localplayer.position = new mp.Vector3(warehouse_positions[_0x656d0][_0x390e84].pos[0], warehouse_positions[_0x656d0][_0x390e84].pos[1], warehouse_positions[_0x656d0][_0x390e84].pos[2]);
    localplayer.setHeading(parseFloat(warehouse_positions[_0x656d0][_0x390e84].pos[3]));
    clothes_org_menu.warehouseGender = _0x656d0;
    clothes_org_menu.warehousePlace = _0x390e84;
    setOrgClothesCamFromWarehouse(_0x656d0, _0x390e84, 0);
  }
  clothes_org_menu.member = _0x55a6c5;
  at_clothes_change = true;
  clothes_org_menu.slots = [{
    id: 0,
    texture: 0,
    max: _0x479856[0],
    max_texture: 0
  }, {
    id: 0,
    texture: 0,
    max: _0x479856[1],
    max_texture: 0
  }, {
    id: 0,
    texture: 0,
    max: _0x479856[2],
    max_texture: 0
  }, {
    id: 0,
    texture: 0,
    max: _0x479856[3],
    max_texture: 0
  }, {
    id: 0,
    texture: 0,
    max: _0x479856[4],
    max_texture: 0
  }, {
    id: 0,
    texture: 0,
    max: _0x479856[5],
    max_texture: 0
  }];
  clothes_org_menu.type = 0;
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 0, 0, 0);
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 1, 0, 0);
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 2, 0, 0);
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 3, 0, 0);
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 4, 0, 0);
  mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, 5, 0, 0);
  ShowClothesMenu(5);
});
mp.events.add("Client_ClothesOrgChangeType", _0x17f3be => {
  if (at_clothes_change && loggedin && !chatActive) {
    if (!(_0x17f3be < 0)) {
      clothes_org_menu.type = _0x17f3be;
      main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (clothes_org_menu.slots[clothes_org_menu.type].id + 1));
      main_browser.execute("APPS.state.clothes_menu.texture_id = " + (clothes_org_menu.slots[clothes_org_menu.type].texture + 1));
      setOrgClothesCamForMenu(_0x17f3be);
    }
  }
});
mp.events.add("Client_ClothesOrgChangeTexture", _0x546b3a => {
  if (at_clothes_change && loggedin && !chatActive) {
    if ((_0x546b3a == 0 || _0x546b3a == 1) && !(clothes_org_menu.type < 0) && !(clothes_org_menu.type > 5) && clothes_org_menu.slots[clothes_org_menu.type].max_texture != 0) {
      if (_0x546b3a == 0) {
        if (clothes_org_menu.slots[clothes_org_menu.type].texture - 1 < 0) {
          clothes_org_menu.slots[clothes_org_menu.type].texture = clothes_org_menu.slots[clothes_org_menu.type].max_texture;
        } else {
          clothes_org_menu.slots[clothes_org_menu.type].texture--;
        }
      } else if (clothes_org_menu.slots[clothes_org_menu.type].texture + 1 > clothes_org_menu.slots[clothes_org_menu.type].max_texture) {
        clothes_org_menu.slots[clothes_org_menu.type].texture = 0;
      } else {
        clothes_org_menu.slots[clothes_org_menu.type].texture++;
      }
      main_browser.execute("APPS.state.clothes_menu.texture_id = " + (clothes_org_menu.slots[clothes_org_menu.type].texture + 1));
      mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, clothes_org_menu.type, clothes_org_menu.slots[clothes_org_menu.type].id, clothes_org_menu.slots[clothes_org_menu.type].texture);
    }
  }
});
mp.events.add("Client_ClothesOrgChangeItem", _0x53578f => {
  if (at_clothes_change && loggedin && !chatActive) {
    if ((_0x53578f == 0 || _0x53578f == 1) && !(clothes_org_menu.type < 0) && !(clothes_org_menu.type > 5)) {
      if (_0x53578f == 0) {
        if (clothes_org_menu.slots[clothes_org_menu.type].id - 1 < 0) {
          clothes_org_menu.slots[clothes_org_menu.type].id = clothes_org_menu.slots[clothes_org_menu.type].max;
        } else {
          clothes_org_menu.slots[clothes_org_menu.type].id--;
        }
      } else if (clothes_org_menu.slots[clothes_org_menu.type].id + 1 > clothes_org_menu.slots[clothes_org_menu.type].max) {
        clothes_org_menu.slots[clothes_org_menu.type].id = 0;
      } else {
        clothes_org_menu.slots[clothes_org_menu.type].id++;
      }
      clothes_org_menu.slots[clothes_org_menu.type].texture = 0;
      main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (clothes_org_menu.slots[clothes_org_menu.type].id + 1));
      main_browser.execute("APPS.state.clothes_menu.texture_id = " + (clothes_org_menu.slots[clothes_org_menu.type].texture + 1));
      mp.events.callRemote("Server_ClothesOrgChange", clothes_org_menu.member, clothes_org_menu.type, clothes_org_menu.slots[clothes_org_menu.type].id, clothes_org_menu.slots[clothes_org_menu.type].texture);
    }
  }
});
mp.events.add("Client_ClothesOrgLoadMaxTexture", (_0xac2b12, _0x21fda5, _0x5cbff9 = undefined, _0x6b01f3 = undefined) => {
  if (!!local_member && !(local_member < 1) && (!(local_member > 4) || !(local_member < 12)) && local_member != 13 && !(local_member > 14)) {
    if (localcamera != null && at_clothes_change && clothes_org_menu.member != null) {
      clothes_org_menu.slots[_0xac2b12].max_texture = _0x21fda5;
      if (_0x5cbff9 != null && _0x6b01f3 != null) {
        clothes_org_menu.slots[_0xac2b12].id = _0x5cbff9;
        clothes_org_menu.slots[_0xac2b12].texture = _0x6b01f3;
        main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (clothes_org_menu.slots[clothes_org_menu.type].id + 1));
        main_browser.execute("APPS.state.clothes_menu.texture_id = " + (clothes_org_menu.slots[clothes_org_menu.type].texture + 1));
      }
    }
  }
});
mp.events.add("Client_SetClothesToFavorite", () => {
  if (at_clothes_change) {
    mp.events.callRemote("Server_SetClothesToFavorite", JSON.stringify(clothes_org_menu.slots));
  }
});
mp.events.add("Client_GetFavoriteClothes", () => {
  if (at_clothes_change) {
    mp.events.callRemote("Server_GetFavoriteClothes");
  }
});
mp.events.add("Client_FinishOrgChangeClothes", (_0x3a49fb = false) => {
  if (at_clothes_change) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_OrgChangeClothesServer", _0x3a49fb);
      at_clothes_change = false;
      delete clothes_org_menu.warehouseGender;
      delete clothes_org_menu.warehousePlace;
      CloseClothesMenu();
      if (localcamera != null) {
        localcamera.destroy();
        localcamera = null;
      }
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
    }
  }
});
const CamFocuses = [[[429.7379150390625, -811.5718383789062, 30.13765525817871, 429.7332763671875, -811.96484375, 30.165231704711914], [429.7449645996094, -811.0659790039062, 30.148725509643555, 429.7234191894531, -811.9419555664062, 29.765865325927734], [429.6913757324219, -810.6314086914062, 29.5378475189209, 429.66046142578125, -811.9501953125, 29.035816192626953], [429.7552490234375, -811.3826904296875, 29.117366790771484, 429.656982421875, -812.1177978515625, 28.59763526916504]], [[-820.2012329101562, -1067.354248046875, 11.974832534790039, -819.8124389648438, -1067.150146484375, 11.988203048706055], [-820.6150512695312, -1067.5740966796875, 11.985701560974121, -819.8109130859375, -1067.1915283203125, 11.630108833312988], [-821.466, -1068.315, 11.63, -819.772, -1067.241, 10.956], [-820.399658203125, -1067.6510009765625, 11.304454803466797, -819.6295166015625, -1067.158935546875, 10.395167350769043]], [[-1446.673, -245.802, 50.471, -1446.469, -245.988, 50.477], [-1447.09, -245.426, 50.563, -1446.476, -245.977, 50.189], [-1447.422, -245.173, 49.773, -1446.496, -245.999, 49.352], [-1447.146, -245.427, 49.543, -1446.507, -246.013, 49.08]], [[4.059, 6505.854, 32.529, 3.76, 6505.6, 32.547], [4.408, 6506.334, 32.605, 3.733, 6505.659, 32.177], [4.623, 6506.501, 32.041, 3.721, 6505.668, 31.543], [4.524, 6506.408, 31.968, 3.706, 6505.678, 31.188]], [[-3176.094, 1047.655, 21.51, -3176.342, 1047.743, 21.524], [-3175.303, 1047.344, 21.517, -3176.313, 1047.771, 21.174], [-3175.223, 1047.388, 20.94, -3176.308, 1047.792, 20.531], [-3175.466, 1047.471, 20.653, -3176.306, 1047.806, 20.145]], [[1698.752, 4818.597, 42.709, 1698.81, 4818.188, 42.709], [1698.679, 4818.96, 42.836, 1698.771, 4818.194, 42.352], [1698.64, 4819.278, 42.121, 1698.782, 4818.196, 41.685], [1698.64, 4819.25, 42.118, 1698.74, 4818.186, 41.343]]];
let clothestype = 0;
let clothesdrawable = 0;
let currentcomponent = 0;
let clothestexture = 0;
let campos = 0;
let clothes_mod = 0;
global.InNewClothesShop = false;
let lastClothType = 1;
function changeClothesCam(_0x202853) {
  if (_0x202853 == 0) {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.7), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.7), new mp.Vector3(0, 1.2, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  } else if (_0x202853 == 1 || _0x202853 == 2) {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.2), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.2), new mp.Vector3(0, 1.2, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  } else if (_0x202853 == 3) {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z - 0.5), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z - 0.5), new mp.Vector3(0, 1.2, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  } else if (_0x202853 == 4) {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z - 0.9), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z - 0.9), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  } else if (_0x202853 == 5) {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.7), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.7), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  } else if (_0x202853 == "full_body") {
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    localcamera = mp.cameras.new("default");
    localcamera.setActive(true);
    InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(0, 2.5, 0), localplayer.getHeading(), [0, 0], [-0.5, 0.5], 5);
    InteractiveCamera.zCameraUp = 0.5;
    InteractiveCamera.changePositionCamera();
  }
}
mp.events.add("OpenClothesShop", (_0x50baa9, _0x543170, _0x59b569) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.callRemote("OpenClothesShopCorrectly");
  InNewClothesShop = true;
  clothes_mod = _0x543170;
  campos = _0x50baa9;
  lastClothType = 1;
  let _0x515777 = 1;
  switch (_0x543170) {
    case 0:
      _0x515777 = 1;
      break;
    case 1:
      _0x515777 = 0.9;
      break;
    case 2:
      _0x515777 = 0.75;
      break;
    case 3:
      _0x515777 = 0.5;
  }
  ShowNewClothesMenu(1, _0x515777, _0x59b569);
});
global.ShowNewClothesMenu = function (_0x5f31f7, _0x169d08 = 1, _0x1c3381 = 0) {
  if (!loggedin) {
    return;
  }
  SwitchHUDToDesign(true);
  localplayer.freezePosition(true);
  is_freezed = true;
  let _0x43e721 = {
    balance: _0x1c3381,
    type: _0x5f31f7,
    discount_factor: _0x169d08,
    gender: localplayer.model != 1885233650 ? 1 : 0,
    show: true
  };
  main_browser.execute("APPS.state.new_cloth_shop = " + JSON.stringify(_0x43e721));
};
mp.events.add("Client_CloseNewClothesShop", _0x131a4f => {
  if (_0x131a4f == 1) {
    CloseNewClothesShop();
  } else if (_0x131a4f == 2) {
    CloseJewShop();
  } else if (_0x131a4f == 6) {
    CloseNewClothesShop();
  }
});
global.CloseNewClothesShop = function () {
  if (InNewClothesShop && loggedin && !chatActive) {
    CloseNewClothesMenu();
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    InNewClothesShop = false;
    mp.events.callRemote("CloseClothesShopCorrectly");
    HintClose();
  }
};
global.CloseNewClothesMenu = function () {
  main_browser.execute("APPS.state.new_cloth_shop.show = false;");
  localplayer.freezePosition(false);
  is_freezed = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  if (cameraControl) {
    fakeArmy = true;
    destroyLocalCameraAndAnimBack();
    ShowNotification(language["Используйте клавишу X, чтобы снять армейскую форму"][curr_lang], 2);
  }
};
mp.events.add("Client_ChangeClothesItem", (_0x53da4f, _0x3c34d7, _0x389aea, _0x1b4cc8 = 0) => {
  const _0x45aa5c = localplayer.model != 1885233650 ? 1 : 0;
  const _0x39f51f = _0x53da4f == 1 ? clothesCatalog[_0x45aa5c][_0x3c34d7][_0x389aea] : _0x53da4f == 2 ? jewCatalog[_0x45aa5c][_0x3c34d7][_0x389aea] : null;
  if (!_0x39f51f) {
    return;
  }
  const _0x1133b5 = InventoryItems[_0x39f51f.item_id][8];
  let _0x51d73b;
  if (_0x53da4f == 1) {
    switch (_0x3c34d7) {
      case 0:
        _0x51d73b = 0;
        break;
      case 1:
        _0x51d73b = 11;
        break;
      case 2:
        _0x51d73b = 8;
        break;
      case 3:
        _0x51d73b = 4;
        break;
      case 4:
        _0x51d73b = 6;
        break;
      case 5:
        _0x51d73b = 12;
    }
  } else if (_0x53da4f == 2) {
    switch (_0x3c34d7) {
      case 0:
        _0x51d73b = 7;
        break;
      case 1:
        _0x51d73b = 13;
        break;
      case 2:
        _0x51d73b = 14;
    }
  }
  mp.events.callRemote("Server_ChangeOutfitInShop", _0x53da4f, _0x39f51f.item_id, _0x51d73b, _0x1133b5, _0x1b4cc8, _0x3c34d7);
  if (lastClothType != _0x3c34d7) {
    lastClothType = _0x3c34d7;
    changeClothesCam(_0x3c34d7);
  }
});
mp.events.add("Shop_Set_Cam", () => {
  if (localcamera) {
    localcamera.destroy();
    localcamera = undefined;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
});
mp.events.add("Client_ChangeClothesCam", _0x1e64c3 => {
  lastClothType = null;
  changeClothesCam(_0x1e64c3);
});
mp.events.add("Client_BuyClothes", (_0x466e36, _0x296cd9) => {
  if ((InNewClothesShop || InJewellery) && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ClothesBuyItem", _0x466e36, _0x296cd9);
    }
  }
});
const clothesCatalog = [{
  0: [{
    item_id: 39,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 40,
    max_extra: 7,
    price: 1200
  }, {
    item_id: 43,
    max_extra: 7,
    price: 1200
  }, {
    item_id: 44,
    max_extra: 7,
    price: 4300
  }, {
    item_id: 46,
    max_extra: 7,
    price: 11000
  }, {
    item_id: 47,
    max_extra: 7,
    price: 1250
  }, {
    item_id: 48,
    max_extra: 7,
    price: 16700
  }, {
    item_id: 49,
    max_extra: 7,
    price: 2300
  }, {
    item_id: 50,
    max_extra: 7,
    price: 1750
  }, {
    item_id: 51,
    max_extra: 7,
    price: 3400
  }, {
    item_id: 52,
    max_extra: 5,
    price: 1200
  }, {
    item_id: 53,
    max_extra: 7,
    price: 1200
  }, {
    item_id: 54,
    max_extra: 2,
    price: 17000
  }, {
    item_id: 55,
    max_extra: 13,
    price: 13000
  }, {
    item_id: 56,
    max_extra: 13,
    price: 27000
  }, {
    item_id: 57,
    max_extra: 5,
    price: 3100
  }, {
    item_id: 58,
    max_extra: 7,
    price: 1400
  }, {
    item_id: 1892,
    max_extra: 1,
    price: 35000
  }, {
    item_id: 59,
    max_extra: 0,
    price: 9700
  }, {
    item_id: 60,
    max_extra: 0,
    price: 29700
  }, {
    item_id: 61,
    max_extra: 1,
    price: 35000
  }, {
    item_id: 62,
    max_extra: 0,
    price: 2450
  }, {
    item_id: 1893,
    max_extra: 0,
    price: 4300
  }, {
    item_id: 1894,
    max_extra: 0,
    price: 4500
  }, {
    item_id: 1895,
    max_extra: 5,
    price: 18500
  }, {
    item_id: 63,
    max_extra: 7,
    price: 2600
  }, {
    item_id: 64,
    max_extra: 7,
    price: 3200
  }, {
    item_id: 65,
    max_extra: 0,
    price: 6000
  }, {
    item_id: 66,
    max_extra: 0,
    price: 6300
  }, {
    item_id: 67,
    max_extra: 0,
    price: 7000
  }, {
    item_id: 68,
    max_extra: 1,
    price: 1600
  }, {
    item_id: 69,
    max_extra: 20,
    price: 4700
  }, {
    item_id: 70,
    max_extra: 9,
    price: 1700
  }, {
    item_id: 71,
    max_extra: 2,
    price: 1500
  }, {
    item_id: 72,
    max_extra: 9,
    price: 1700
  }, {
    item_id: 73,
    max_extra: 9,
    price: 11000
  }, {
    item_id: 74,
    max_extra: 9,
    price: 1000
  }, {
    item_id: 75,
    max_extra: 9,
    price: 2700
  }, {
    item_id: 76,
    max_extra: 10,
    price: 1900
  }, {
    item_id: 77,
    max_extra: 0,
    price: 2400
  }, {
    item_id: 78,
    max_extra: 0,
    price: 2300
  }, {
    item_id: 79,
    max_extra: 20,
    price: 2200
  }, {
    item_id: 80,
    max_extra: 0,
    price: 1600
  }, {
    item_id: 81,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 82,
    max_extra: 0,
    price: 4300
  }, {
    item_id: 83,
    max_extra: 0,
    price: 3700
  }, {
    item_id: 84,
    max_extra: 9,
    price: 3500
  }, {
    item_id: 85,
    max_extra: 20,
    price: 2800
  }, {
    item_id: 86,
    max_extra: 20,
    price: 2900
  }, {
    item_id: 87,
    max_extra: 6,
    price: 2600
  }, {
    item_id: 2269,
    max_extra: 9,
    price: 5000
  }, {
    item_id: 2270,
    max_extra: 0,
    price: 5125
  }, {
    item_id: 2271,
    max_extra: 0,
    price: 5200
  }, {
    item_id: 2272,
    max_extra: 9,
    price: 5300
  }, {
    item_id: 2273,
    max_extra: 0,
    price: 5350
  }, {
    item_id: 88,
    max_extra: 9,
    price: 4100
  }, {
    item_id: 89,
    max_extra: 9,
    price: 14500
  }, {
    item_id: 90,
    max_extra: 15,
    price: 3500
  }, {
    item_id: 91,
    max_extra: 9,
    price: 2500
  }, {
    item_id: 92,
    max_extra: 10,
    price: 2400
  }, {
    item_id: 93,
    max_extra: 10,
    price: 1900
  }, {
    item_id: 94,
    max_extra: 20,
    price: 9100
  }, {
    item_id: 1896,
    max_extra: 18,
    price: 29500
  }, {
    item_id: 1897,
    max_extra: 18,
    price: 29500
  }, {
    item_id: 1898,
    max_extra: 3,
    price: 27500
  }, {
    item_id: 1899,
    max_extra: 20,
    price: 31500
  }, {
    item_id: 1900,
    max_extra: 20,
    price: 31500
  }, {
    item_id: 1901,
    max_extra: 2,
    price: 31500
  }, {
    item_id: 1902,
    max_extra: 2,
    price: 31500
  }, {
    item_id: 1903,
    max_extra: 20,
    price: 36300
  }, {
    item_id: 1904,
    max_extra: 20,
    price: 36300
  }, {
    item_id: 1905,
    max_extra: 13,
    price: 44800
  }],
  1: [{
    item_id: 97,
    max_extra: 15,
    price: 2700
  }, {
    item_id: 1529,
    extras: [0, 1, 3, 4, 5, 6, 8, 9, 11],
    price: 24100
  }, {
    item_id: 98,
    max_extra: 15,
    price: 3200
  }, {
    item_id: 1530,
    extras: [0, 1, 7, 14],
    price: 15000
  }, {
    item_id: 1531,
    max_extra: 11,
    price: 9500
  }, {
    item_id: 99,
    max_extra: 15,
    price: 1500
  }, {
    item_id: 100,
    max_extra: 2,
    price: 1600
  }, {
    item_id: 101,
    max_extra: 5,
    price: 1200
  }, {
    item_id: 1532,
    max_extra: 3,
    price: 7800
  }, {
    item_id: 102,
    max_extra: 1,
    price: 65000
  }, {
    item_id: 103,
    max_extra: 2,
    price: 82000
  }, {
    item_id: 104,
    max_extra: 1,
    price: 55000
  }, {
    item_id: 105,
    max_extra: 2,
    price: 1100
  }, {
    item_id: 106,
    max_extra: 3,
    price: 27000
  }, {
    item_id: 107,
    max_extra: 12,
    price: 42000
  }, {
    item_id: 108,
    max_extra: 9,
    price: 50000
  }, {
    item_id: 109,
    max_extra: 9,
    price: 3200
  }, {
    item_id: 110,
    max_extra: 2,
    price: 70000
  }, {
    item_id: 111,
    max_extra: 2,
    price: 67000
  }, {
    item_id: 112,
    max_extra: 0,
    price: 2400
  }, {
    item_id: 113,
    max_extra: 1,
    price: 1900
  }, {
    item_id: 114,
    max_extra: 6,
    price: 67000
  }, {
    item_id: 115,
    max_extra: 5,
    price: 2100
  }, {
    item_id: 116,
    max_extra: 2,
    price: 1600
  }, {
    item_id: 117,
    max_extra: 4,
    price: 1900
  }, {
    item_id: 118,
    max_extra: 1,
    price: 2100
  }, {
    item_id: 119,
    max_extra: 1,
    price: 55000
  }, {
    item_id: 120,
    max_extra: 3,
    price: 3700
  }, {
    item_id: 121,
    max_extra: 0,
    price: 11000
  }, {
    item_id: 122,
    max_extra: 0,
    price: 11000
  }, {
    item_id: 123,
    max_extra: 3,
    price: 1000
  }, {
    item_id: 1537,
    max_extra: 2,
    price: 26400
  }, {
    item_id: 1538,
    max_extra: 2,
    price: 60700
  }, {
    item_id: 124,
    max_extra: 1,
    price: 1400
  }, {
    item_id: 1539,
    max_extra: 2,
    price: 24800
  }, {
    item_id: 126,
    max_extra: 3,
    price: 9700
  }, {
    item_id: 127,
    max_extra: 0,
    price: 3300
  }, {
    item_id: 128,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 129,
    max_extra: 0,
    price: 62000
  }, {
    item_id: 130,
    max_extra: 3,
    price: 62000
  }, {
    item_id: 131,
    max_extra: 3,
    price: 2400
  }, {
    item_id: 132,
    max_extra: 0,
    price: 2300
  }, {
    item_id: 133,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 134,
    max_extra: 0,
    price: 8400
  }, {
    item_id: 1272,
    max_extra: 5,
    price: 9500
  }, {
    item_id: 1273,
    max_extra: 5,
    price: 9500
  }, {
    item_id: 1274,
    max_extra: 11,
    price: 100000
  }, {
    item_id: 138,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 139,
    max_extra: 3,
    price: 75000
  }, {
    item_id: 140,
    max_extra: 18,
    price: 6700
  }, {
    item_id: 1275,
    max_extra: 10,
    price: 50000
  }, {
    item_id: 1276,
    max_extra: 10,
    price: 50000
  }, {
    item_id: 1277,
    max_extra: 4,
    price: 110000
  }, {
    item_id: 1278,
    max_extra: 3,
    price: 110000
  }, {
    item_id: 1279,
    max_extra: 15,
    price: 11000
  }, {
    item_id: 1280,
    max_extra: 0,
    price: 4300
  }, {
    item_id: 141,
    max_extra: 2,
    price: 3700
  }, {
    item_id: 142,
    max_extra: 2,
    price: 4100
  }, {
    item_id: 143,
    max_extra: 15,
    price: 1000
  }, {
    item_id: 144,
    max_extra: 4,
    price: 5500
  }, {
    item_id: 145,
    max_extra: 5,
    price: 9100
  }, {
    item_id: 146,
    max_extra: 0,
    price: 2300
  }, {
    item_id: 147,
    max_extra: 4,
    price: 2400
  }, {
    item_id: 148,
    max_extra: 11,
    price: 6000
  }, {
    item_id: 149,
    max_extra: 11,
    price: 6200
  }, {
    item_id: 150,
    max_extra: 3,
    price: 7000
  }, {
    item_id: 151,
    max_extra: 0,
    price: 5700
  }, {
    item_id: 152,
    max_extra: 6,
    price: 21000
  }, {
    item_id: 153,
    max_extra: 2,
    price: 3300
  }, {
    item_id: 154,
    max_extra: 2,
    price: 3300
  }, {
    item_id: 155,
    max_extra: 2,
    price: 5600
  }, {
    item_id: 156,
    max_extra: 0,
    price: 4000
  }, {
    item_id: 157,
    max_extra: 1,
    price: 4000
  }, {
    item_id: 158,
    max_extra: 4,
    price: 57000
  }, {
    item_id: 159,
    max_extra: 4,
    price: 60000
  }, {
    item_id: 160,
    max_extra: 0,
    price: 14000
  }, {
    item_id: 161,
    max_extra: 0,
    price: 6600
  }, {
    item_id: 162,
    max_extra: 4,
    price: 21000
  }, {
    item_id: 1285,
    max_extra: 10,
    price: 150000
  }, {
    item_id: 163,
    max_extra: 0,
    price: 3500
  }, {
    item_id: 1286,
    max_extra: 0,
    price: 44000
  }, {
    item_id: 164,
    max_extra: 5,
    price: 2800
  }, {
    item_id: 165,
    max_extra: 0,
    price: 53000
  }, {
    item_id: 166,
    max_extra: 3,
    price: 2800
  }, {
    item_id: 1287,
    max_extra: 0,
    price: 110000
  }, {
    item_id: 1288,
    max_extra: 2,
    price: 34000
  }, {
    item_id: 168,
    max_extra: 15,
    price: 23000
  }, {
    item_id: 169,
    max_extra: 9,
    price: 1300
  }, {
    item_id: 170,
    max_extra: 11,
    price: 65000
  }, {
    item_id: 171,
    max_extra: 11,
    price: 62000
  }, {
    item_id: 1289,
    max_extra: 11,
    price: 36000
  }, {
    item_id: 172,
    max_extra: 13,
    price: 2400
  }, {
    item_id: 173,
    max_extra: 2,
    price: 4300
  }, {
    item_id: 174,
    max_extra: 0,
    price: 3400
  }, {
    item_id: 175,
    max_extra: 0,
    price: 3500
  }, {
    item_id: 176,
    max_extra: 14,
    price: 1200
  }, {
    item_id: 177,
    max_extra: 14,
    price: 1500
  }, {
    item_id: 178,
    max_extra: 9,
    price: 2700
  }, {
    item_id: 179,
    max_extra: 0,
    price: 3400
  }, {
    item_id: 180,
    max_extra: 0,
    price: 5400
  }, {
    item_id: 181,
    max_extra: 0,
    price: 4000
  }, {
    item_id: 182,
    max_extra: 0,
    price: 4600
  }, {
    item_id: 183,
    max_extra: 0,
    price: 5000
  }, {
    item_id: 184,
    max_extra: 2,
    price: 1600
  }, {
    item_id: 1290,
    max_extra: 6,
    price: 14500
  }, {
    item_id: 185,
    max_extra: 6,
    price: 1900
  }, {
    item_id: 186,
    max_extra: 2,
    price: 3400
  }, {
    item_id: 187,
    max_extra: 2,
    price: 1300
  }, {
    item_id: 188,
    max_extra: 7,
    price: 1900
  }, {
    item_id: 189,
    max_extra: 14,
    price: 50000
  }, {
    item_id: 190,
    max_extra: 10,
    price: 2400
  }, {
    item_id: 1291,
    max_extra: 2,
    price: 105000
  }, {
    item_id: 1292,
    max_extra: 9,
    price: 9500
  }, {
    item_id: 191,
    max_extra: 13,
    price: 11500
  }, {
    item_id: 192,
    max_extra: 13,
    price: 56000
  }, {
    item_id: 1293,
    max_extra: 8,
    price: 3500
  }, {
    item_id: 1294,
    max_extra: 9,
    price: 7400
  }, {
    item_id: 1295,
    max_extra: 11,
    price: 7500
  }, {
    item_id: 193,
    max_extra: 9,
    price: 33000
  }, {
    item_id: 194,
    max_extra: 11,
    price: 27000
  }, {
    item_id: 195,
    max_extra: 5,
    price: 7200
  }, {
    item_id: 1296,
    max_extra: 15,
    price: 24500
  }, {
    item_id: 196,
    max_extra: 25,
    price: 4600
  }, {
    item_id: 197,
    max_extra: 7,
    price: 2300
  }, {
    item_id: 198,
    max_extra: 3,
    price: 27000
  }, {
    item_id: 199,
    max_extra: 5,
    price: 3400
  }, {
    item_id: 200,
    max_extra: 3,
    price: 1100
  }, {
    item_id: 201,
    max_extra: 2,
    price: 1200
  }, {
    item_id: 202,
    max_extra: 1,
    price: 4000
  }, {
    item_id: 1297,
    max_extra: 1,
    price: 7700
  }, {
    item_id: 203,
    max_extra: 3,
    price: 17000
  }, {
    item_id: 204,
    max_extra: 3,
    price: 14000
  }, {
    item_id: 205,
    max_extra: 0,
    price: 1600
  }, {
    item_id: 206,
    max_extra: 2,
    price: 1800
  }, {
    item_id: 1298,
    max_extra: 6,
    price: 20800
  }, {
    item_id: 207,
    max_extra: 5,
    price: 3400
  }, {
    item_id: 1299,
    max_extra: 15,
    price: 70800
  }, {
    item_id: 208,
    max_extra: 2,
    price: 4700
  }, {
    item_id: 209,
    max_extra: 3,
    price: 6600
  }, {
    item_id: 210,
    max_extra: 3,
    price: 1000
  }, {
    item_id: 211,
    max_extra: 1,
    price: 3000
  }, {
    item_id: 212,
    max_extra: 3,
    price: 11000
  }, {
    item_id: 213,
    max_extra: 3,
    price: 4300
  }, {
    item_id: 214,
    max_extra: 3,
    price: 27000
  }, {
    item_id: 215,
    max_extra: 3,
    price: 19000
  }, {
    item_id: 216,
    max_extra: 0,
    price: 7000
  }, {
    item_id: 217,
    max_extra: 6,
    price: 5000
  }, {
    item_id: 218,
    max_extra: 3,
    price: 5500
  }, {
    item_id: 219,
    max_extra: 2,
    price: 3800
  }, {
    item_id: 220,
    max_extra: 5,
    price: 33000
  }, {
    item_id: 221,
    max_extra: 1,
    price: 2700
  }, {
    item_id: 1300,
    max_extra: 5,
    price: 105000
  }, {
    item_id: 222,
    max_extra: 3,
    price: 11500
  }, {
    item_id: 223,
    max_extra: 3,
    price: 12000
  }, {
    item_id: 1301,
    max_extra: 12,
    price: 36000
  }, {
    item_id: 224,
    max_extra: 10,
    price: 14000
  }, {
    item_id: 225,
    max_extra: 10,
    price: 17000
  }, {
    item_id: 226,
    max_extra: 8,
    price: 16000
  }, {
    item_id: 1302,
    max_extra: 25,
    price: 70800
  }, {
    item_id: 227,
    max_extra: 11,
    price: 66000
  }, {
    item_id: 228,
    max_extra: 25,
    price: 9200
  }, {
    item_id: 229,
    max_extra: 15,
    price: 10000
  }, {
    item_id: 230,
    max_extra: 15,
    price: 10000
  }, {
    item_id: 1303,
    max_extra: 7,
    price: 45000
  }, {
    item_id: 1304,
    max_extra: 7,
    price: 45000
  }, {
    item_id: 1305,
    max_extra: 25,
    price: 60000
  }, {
    item_id: 1306,
    max_extra: 4,
    price: 4500
  }, {
    item_id: 1307,
    max_extra: 25,
    price: 60000
  }, {
    item_id: 231,
    max_extra: 12,
    price: 6000
  }, {
    item_id: 232,
    max_extra: 4,
    price: 7700
  }, {
    item_id: 233,
    max_extra: 9,
    price: 11000
  }, {
    item_id: 234,
    extras: [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    price: 12000
  }, {
    item_id: 235,
    max_extra: 15,
    price: 6700
  }, {
    item_id: 236,
    max_extra: 15,
    price: 9100
  }, {
    item_id: 237,
    max_extra: 1,
    price: 4500
  }, {
    item_id: 238,
    max_extra: 0,
    price: 4100
  }, {
    item_id: 239,
    max_extra: 13,
    price: 3000
  }, {
    item_id: 240,
    max_extra: 11,
    price: 27000
  }, {
    item_id: 241,
    max_extra: 11,
    price: 22000
  }, {
    item_id: 242,
    max_extra: 9,
    price: 30000
  }, {
    item_id: 243,
    max_extra: 9,
    price: 33000
  }, {
    item_id: 244,
    max_extra: 25,
    price: 6000
  }, {
    item_id: 245,
    max_extra: 11,
    price: 2700
  }, {
    item_id: 246,
    max_extra: 11,
    price: 4500
  }, {
    item_id: 247,
    max_extra: 25,
    price: 5000
  }, {
    item_id: 248,
    max_extra: 5,
    price: 1200
  }, {
    item_id: 1308,
    max_extra: 5,
    price: 150000
  }, {
    item_id: 249,
    max_extra: 5,
    price: 1400
  }, {
    item_id: 250,
    max_extra: 5,
    price: 2500
  }, {
    item_id: 251,
    max_extra: 25,
    price: 17000
  }, {
    item_id: 252,
    max_extra: 25,
    price: 7000
  }, {
    item_id: 1309,
    max_extra: 9,
    price: 53000
  }, {
    item_id: 1540,
    max_extra: 25,
    price: 18200
  }, {
    item_id: 1541,
    max_extra: 25,
    price: 42800
  }, {
    item_id: 253,
    max_extra: 1,
    price: 15000
  }, {
    item_id: 254,
    max_extra: 1,
    price: 8000
  }, {
    item_id: 1542,
    max_extra: 25,
    price: 62500
  }, {
    item_id: 1543,
    max_extra: 25,
    price: 62500
  }, {
    item_id: 1544,
    max_extra: 6,
    price: 48400
  }, {
    item_id: 1545,
    max_extra: 25,
    price: 37800
  }, {
    item_id: 1546,
    max_extra: 15,
    price: 66900
  }, {
    item_id: 1547,
    max_extra: 23,
    price: 48800
  }, {
    item_id: 1548,
    max_extra: 14,
    price: 40500
  }, {
    item_id: 1549,
    max_extra: 25,
    price: 39400
  }, {
    item_id: 1550,
    max_extra: 25,
    price: 32100
  }, {
    item_id: 1551,
    max_extra: 15,
    price: 66900
  }, {
    item_id: 1552,
    max_extra: 15,
    price: 53500
  }, {
    item_id: 1553,
    max_extra: 15,
    price: 53500
  }, {
    item_id: 1554,
    max_extra: 11,
    price: 75400
  }, {
    item_id: 1555,
    max_extra: 17,
    price: 41200
  }, {
    item_id: 1556,
    max_extra: 17,
    price: 41200
  }, {
    item_id: 1557,
    max_extra: 4,
    price: 75200
  }, {
    item_id: 1558,
    max_extra: 4,
    price: 75200
  }, {
    item_id: 1559,
    max_extra: 15,
    price: 100700
  }, {
    item_id: 1560,
    max_extra: 1,
    price: 30400
  }, {
    item_id: 1561,
    max_extra: 20,
    price: 15800
  }, {
    item_id: 1562,
    max_extra: 0,
    price: 19500
  }, {
    item_id: 1563,
    max_extra: 21,
    price: 17300
  }, {
    item_id: 1564,
    max_extra: 17,
    price: 36700
  }, {
    item_id: 1565,
    max_extra: 17,
    price: 36700
  }, {
    item_id: 1566,
    max_extra: 23,
    price: 35800
  }, {
    item_id: 1567,
    max_extra: 15,
    price: 18400
  }, {
    item_id: 1639,
    max_extra: 13,
    price: 25500
  }, {
    item_id: 1640,
    max_extra: 0,
    price: 5500
  }, {
    item_id: 1645,
    max_extra: 25,
    price: 36700
  }, {
    item_id: 1646,
    max_extra: 25,
    price: 36700
  }, {
    item_id: 1647,
    max_extra: 24,
    price: 42200
  }, {
    item_id: 1648,
    max_extra: 25,
    price: 17500
  }, {
    item_id: 1649,
    max_extra: 25,
    price: 37800
  }, {
    item_id: 1650,
    max_extra: 25,
    price: 37800
  }, {
    item_id: 1651,
    max_extra: 25,
    price: 37800
  }, {
    item_id: 1652,
    max_extra: 25,
    price: 37800
  }, {
    item_id: 1653,
    max_extra: 9,
    price: 98500
  }, {
    item_id: 1654,
    max_extra: 25,
    price: 15300
  }, {
    item_id: 1655,
    max_extra: 25,
    price: 15300
  }, {
    item_id: 1656,
    max_extra: 23,
    price: 31400
  }, {
    item_id: 1657,
    max_extra: 11,
    price: 31200
  }, {
    item_id: 1658,
    max_extra: 13,
    price: 55400
  }, {
    item_id: 1662,
    max_extra: 20,
    price: 15500
  }, {
    item_id: 1663,
    max_extra: 8,
    price: 17600
  }, {
    item_id: 1664,
    max_extra: 8,
    price: 17600
  }, {
    item_id: 1665,
    max_extra: 8,
    price: 17600
  }, {
    item_id: 1666,
    max_extra: 8,
    price: 17600
  }, {
    item_id: 1667,
    max_extra: 0,
    price: 18600
  }, {
    item_id: 1668,
    max_extra: 0,
    price: 18600
  }, {
    item_id: 1669,
    max_extra: 25,
    price: 17800
  }, {
    item_id: 1670,
    max_extra: 23,
    price: 11400
  }, {
    item_id: 1671,
    max_extra: 0,
    price: 21300
  }, {
    item_id: 1672,
    max_extra: 0,
    price: 16400
  }, {
    item_id: 1673,
    max_extra: 0,
    price: 22700
  }, {
    item_id: 1674,
    max_extra: 0,
    price: 22700
  }, {
    item_id: 1675,
    max_extra: 0,
    price: 22700
  }, {
    item_id: 1676,
    max_extra: 25,
    price: 26300
  }, {
    item_id: 1677,
    max_extra: 11,
    price: 15600
  }, {
    item_id: 1678,
    max_extra: 5,
    price: 16400
  }, {
    item_id: 1679,
    max_extra: 5,
    price: 36800
  }, {
    item_id: 1680,
    max_extra: 23,
    price: 13500
  }, {
    item_id: 1681,
    max_extra: 8,
    price: 15500
  }, {
    item_id: 1682,
    max_extra: 8,
    price: 15500
  }, {
    item_id: 1683,
    max_extra: 6,
    price: 88500
  }, {
    item_id: 1684,
    max_extra: 6,
    price: 88500
  }, {
    item_id: 1685,
    max_extra: 6,
    price: 88500
  }, {
    item_id: 1686,
    max_extra: 10,
    price: 7500
  }, {
    item_id: 1689,
    max_extra: 19,
    price: 23800
  }, {
    item_id: 1690,
    max_extra: 19,
    price: 23800
  }, {
    item_id: 1691,
    max_extra: 9,
    price: 19500
  }, {
    item_id: 1873,
    max_extra: 9,
    price: 39500
  }, {
    item_id: 1874,
    max_extra: 2,
    price: 14500
  }, {
    item_id: 1875,
    max_extra: 4,
    price: 14500
  }, {
    item_id: 1876,
    max_extra: 25,
    price: 42200
  }, {
    item_id: 1877,
    max_extra: 25,
    price: 42200
  }, {
    item_id: 1878,
    max_extra: 0,
    price: 15600
  }, {
    item_id: 1879,
    max_extra: 1,
    price: 26500
  }, {
    item_id: 1880,
    max_extra: 9,
    price: 51200
  }, {
    item_id: 1881,
    max_extra: 0,
    price: 46700
  }, {
    item_id: 1882,
    max_extra: 0,
    price: 46700
  }, {
    item_id: 1883,
    max_extra: 0,
    price: 55500
  }],
  2: [{
    item_id: 878,
    max_extra: 2,
    price: 2000
  }, {
    item_id: 879,
    max_extra: 2,
    price: 1500
  }, {
    item_id: 880,
    max_extra: 2,
    price: 2000
  }, {
    item_id: 881,
    max_extra: 2,
    price: 1500
  }, {
    item_id: 882,
    max_extra: 12,
    price: 14000
  }, {
    item_id: 883,
    max_extra: 12,
    price: 15000
  }, {
    item_id: 884,
    max_extra: 9,
    price: 9000
  }, {
    item_id: 885,
    max_extra: 0,
    price: 4400
  }, {
    item_id: 886,
    max_extra: 1,
    price: 4400
  }, {
    item_id: 887,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 888,
    max_extra: 4,
    price: 1500
  }, {
    item_id: 889,
    max_extra: 1,
    price: 1200
  }, {
    item_id: 890,
    max_extra: 1,
    price: 3200
  }, {
    item_id: 891,
    max_extra: 0,
    price: 9700
  }, {
    item_id: 892,
    max_extra: 0,
    price: 9800
  }, {
    item_id: 893,
    max_extra: 3,
    price: 4500
  }, {
    item_id: 894,
    max_extra: 3,
    price: 4900
  }, {
    item_id: 895,
    max_extra: 1,
    price: 7600
  }, {
    item_id: 896,
    max_extra: 1,
    price: 8600
  }, {
    item_id: 897,
    max_extra: 3,
    price: 10000
  }, {
    item_id: 898,
    max_extra: 3,
    price: 10000
  }, {
    item_id: 899,
    max_extra: 18,
    price: 6000
  }, {
    item_id: 900,
    max_extra: 18,
    price: 6000
  }, {
    item_id: 901,
    max_extra: 0,
    price: 3000
  }, {
    item_id: 902,
    max_extra: 0,
    price: 2500
  }, {
    item_id: 903,
    max_extra: 4,
    price: 19000
  }, {
    item_id: 904,
    max_extra: 8,
    price: 2000
  }, {
    item_id: 905,
    max_extra: 8,
    price: 2000
  }, {
    item_id: 906,
    max_extra: 15,
    price: 4000
  }, {
    item_id: 907,
    max_extra: 0,
    price: 6000
  }, {
    item_id: 908,
    max_extra: 0,
    price: 5000
  }, {
    item_id: 909,
    max_extra: 11,
    price: 2000
  }, {
    item_id: 910,
    max_extra: 11,
    price: 2200
  }, {
    item_id: 911,
    max_extra: 5,
    price: 4000
  }, {
    item_id: 912,
    max_extra: 5,
    price: 5000
  }, {
    item_id: 913,
    max_extra: 20,
    price: 4000
  }, {
    item_id: 914,
    max_extra: 20,
    price: 5000
  }, {
    item_id: 915,
    max_extra: 21,
    price: 4000
  }, {
    item_id: 916,
    max_extra: 21,
    price: 5000
  }],
  3: [{
    item_id: 315,
    max_extra: 15,
    price: 1200
  }, {
    item_id: 316,
    max_extra: 15,
    price: 2300
  }, {
    item_id: 317,
    max_extra: 15,
    price: 4400
  }, {
    item_id: 2124,
    max_extra: 2,
    price: 8500
  }, {
    item_id: 318,
    max_extra: 15,
    price: 6100
  }, {
    item_id: 2125,
    max_extra: 2,
    price: 3250
  }, {
    item_id: 319,
    max_extra: 15,
    price: 9000
  }, {
    item_id: 320,
    max_extra: 15,
    price: 11000
  }, {
    item_id: 2126,
    max_extra: 2,
    price: 13750
  }, {
    item_id: 321,
    max_extra: 15,
    price: 9000
  }, {
    item_id: 322,
    max_extra: 11,
    price: 9000
  }, {
    item_id: 323,
    max_extra: 10,
    price: 3000
  }, {
    item_id: 324,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 325,
    max_extra: 3,
    price: 45000
  }, {
    item_id: 326,
    max_extra: 0,
    price: 60000
  }, {
    item_id: 327,
    max_extra: 12,
    price: 76000
  }, {
    item_id: 328,
    max_extra: 12,
    price: 70000
  }, {
    item_id: 329,
    max_extra: 6,
    price: 115000
  }, {
    item_id: 330,
    max_extra: 6,
    price: 40000
  }, {
    item_id: 2122,
    max_extra: 11,
    price: 35000
  }, {
    item_id: 331,
    max_extra: 11,
    price: 36000
  }, {
    item_id: 332,
    max_extra: 15,
    price: 100000
  }, {
    item_id: 2123,
    max_extra: 2,
    price: 13000
  }, {
    item_id: 2224,
    max_extra: 4,
    price: 10000
  }, {
    item_id: 333,
    max_extra: 3,
    price: 5000
  }, {
    item_id: 334,
    max_extra: 0,
    price: 3600
  }, {
    item_id: 335,
    max_extra: 3,
    price: 14000
  }, {
    item_id: 336,
    max_extra: 3,
    price: 2000
  }, {
    item_id: 337,
    max_extra: 3,
    price: 2100
  }, {
    item_id: 339,
    max_extra: 7,
    price: 1600
  }, {
    item_id: 340,
    max_extra: 1,
    price: 1700
  }, {
    item_id: 341,
    max_extra: 6,
    price: 90000
  }, {
    item_id: 342,
    max_extra: 1,
    price: 2700
  }, {
    item_id: 343,
    max_extra: 4,
    price: 24000
  }, {
    item_id: 344,
    max_extra: 4,
    price: 84000
  }, {
    item_id: 345,
    max_extra: 3,
    price: 24000
  }, {
    item_id: 346,
    max_extra: 0,
    price: 84000
  }, {
    item_id: 347,
    max_extra: 3,
    price: 54000
  }, {
    item_id: 348,
    max_extra: 0,
    price: 87000
  }, {
    item_id: 1828,
    max_extra: 6,
    price: 49000
  }, {
    item_id: 349,
    max_extra: 3,
    price: 1400
  }, {
    item_id: 1829,
    max_extra: 7,
    price: 16000
  }, {
    item_id: 350,
    max_extra: 15,
    price: 44000
  }, {
    item_id: 351,
    max_extra: 11,
    price: 24000
  }, {
    item_id: 352,
    max_extra: 13,
    price: 16000
  }, {
    item_id: 353,
    max_extra: 3,
    price: 1400
  }, {
    item_id: 354,
    max_extra: 0,
    price: 2000
  }, {
    item_id: 355,
    max_extra: 10,
    price: 1900
  }, {
    item_id: 356,
    max_extra: 13,
    price: 4000
  }, {
    item_id: 357,
    max_extra: 17,
    price: 170000
  }, {
    item_id: 358,
    max_extra: 5,
    price: 3900
  }, {
    item_id: 359,
    max_extra: 5,
    price: 27000
  }, {
    item_id: 360,
    max_extra: 7,
    price: 3500
  }, {
    item_id: 361,
    max_extra: 7,
    price: 6600
  }, {
    item_id: 362,
    max_extra: 7,
    price: 7300
  }, {
    item_id: 363,
    max_extra: 2,
    price: 7600
  }, {
    item_id: 364,
    max_extra: 7,
    price: 5400
  }, {
    item_id: 365,
    max_extra: 2,
    price: 2000
  }, {
    item_id: 366,
    max_extra: 9,
    price: 11000
  }, {
    item_id: 367,
    max_extra: 3,
    price: 29000
  }, {
    item_id: 1830,
    max_extra: 25,
    price: 15500
  }, {
    item_id: 368,
    max_extra: 9,
    price: 1600
  }, {
    item_id: 1831,
    max_extra: 19,
    price: 25500
  }, {
    item_id: 1832,
    max_extra: 0,
    price: 26500
  }, {
    item_id: 369,
    max_extra: 25,
    price: 45000
  }, {
    item_id: 370,
    max_extra: 1,
    price: 11000
  }, {
    item_id: 1833,
    max_extra: 25,
    price: 22300
  }, {
    item_id: 371,
    max_extra: 25,
    price: 7200
  }, {
    item_id: 372,
    max_extra: 6,
    price: 11000
  }, {
    item_id: 1834,
    max_extra: 13,
    price: 36000
  }, {
    item_id: 1835,
    max_extra: 17,
    price: 27500
  }, {
    item_id: 1836,
    max_extra: 17,
    price: 27500
  }, {
    item_id: 373,
    max_extra: 0,
    price: 3300
  }, {
    item_id: 374,
    max_extra: 11,
    price: 3100
  }, {
    item_id: 1837,
    max_extra: 9,
    price: 76300
  }, {
    item_id: 1838,
    max_extra: 10,
    price: 45300
  }, {
    item_id: 1839,
    max_extra: 25,
    price: 24200
  }, {
    item_id: 1840,
    max_extra: 10,
    price: 27500
  }, {
    item_id: 1841,
    max_extra: 0,
    price: 23200
  }, {
    item_id: 1842,
    max_extra: 0,
    price: 21200
  }, {
    item_id: 1843,
    max_extra: 25,
    price: 37700
  }, {
    item_id: 1844,
    max_extra: 7,
    price: 21700
  }, {
    item_id: 2225,
    max_extra: 7,
    price: 15000
  }],
  4: [{
    item_id: 375,
    max_extra: 15,
    price: 1700
  }, {
    item_id: 376,
    max_extra: 15,
    price: 11000
  }, {
    item_id: 34,
    max_extra: 1,
    price: 1500
  }, {
    item_id: 377,
    max_extra: 15,
    price: 14000
  }, {
    item_id: 378,
    max_extra: 15,
    price: 4400
  }, {
    item_id: 379,
    max_extra: 15,
    price: 4000
  }, {
    item_id: 380,
    max_extra: 15,
    price: 25000
  }, {
    item_id: 381,
    max_extra: 15,
    price: 27000
  }, {
    item_id: 382,
    max_extra: 15,
    price: 44000
  }, {
    item_id: 383,
    max_extra: 11,
    price: 1200
  }, {
    item_id: 384,
    max_extra: 1,
    price: 4000
  }, {
    item_id: 385,
    max_extra: 11,
    price: 7200
  }, {
    item_id: 386,
    max_extra: 11,
    price: 16400
  }, {
    item_id: 387,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 388,
    max_extra: 15,
    price: 66000
  }, {
    item_id: 389,
    max_extra: 0,
    price: 3000
  }, {
    item_id: 390,
    max_extra: 0,
    price: 3000
  }, {
    item_id: 391,
    max_extra: 15,
    price: 9000
  }, {
    item_id: 392,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 393,
    max_extra: 0,
    price: 44000
  }, {
    item_id: 394,
    max_extra: 1,
    price: 14000
  }, {
    item_id: 395,
    max_extra: 4,
    price: 8200
  }, {
    item_id: 396,
    max_extra: 1,
    price: 4400
  }, {
    item_id: 397,
    max_extra: 3,
    price: 67000
  }, {
    item_id: 398,
    max_extra: 4,
    price: 50000
  }, {
    item_id: 399,
    max_extra: 4,
    price: 30000
  }, {
    item_id: 400,
    max_extra: 11,
    price: 6000
  }, {
    item_id: 401,
    max_extra: 0,
    price: 19000
  }, {
    item_id: 402,
    max_extra: 9,
    price: 12000
  }, {
    item_id: 403,
    max_extra: 7,
    price: 27000
  }, {
    item_id: 404,
    max_extra: 10,
    price: 7600
  }, {
    item_id: 405,
    max_extra: 10,
    price: 6600
  }, {
    item_id: 406,
    max_extra: 9,
    price: 3300
  }, {
    item_id: 407,
    max_extra: 1,
    price: 3700
  }, {
    item_id: 408,
    max_extra: 1,
    price: 4000
  }, {
    item_id: 409,
    max_extra: 5,
    price: 6000
  }, {
    item_id: 410,
    max_extra: 5,
    price: 9000
  }, {
    item_id: 411,
    max_extra: 1,
    price: 23000
  }, {
    item_id: 412,
    max_extra: 5,
    price: 14000
  }, {
    item_id: 413,
    max_extra: 5,
    price: 6600
  }, {
    item_id: 414,
    max_extra: 1,
    price: 25000
  }, {
    item_id: 415,
    max_extra: 11,
    price: 27000
  }, {
    item_id: 416,
    max_extra: 7,
    price: 13000
  }, {
    item_id: 417,
    max_extra: 7,
    price: 2400
  }, {
    item_id: 418,
    max_extra: 7,
    price: 4000
  }, {
    item_id: 419,
    max_extra: 7,
    price: 1700
  }, {
    item_id: 420,
    max_extra: 6,
    price: 3600
  }, {
    item_id: 421,
    max_extra: 6,
    price: 7800
  }, {
    item_id: 2678,
    max_extra: 25,
    price: 10000
  }, {
    item_id: 422,
    max_extra: 25,
    price: 11000
  }, {
    item_id: 423,
    max_extra: 25,
    price: 3100
  }, {
    item_id: 424,
    max_extra: 25,
    price: 2100
  }, {
    item_id: 425,
    max_extra: 25,
    price: 5200
  }, {
    item_id: 426,
    max_extra: 25,
    price: 3200
  }, {
    item_id: 427,
    max_extra: 1,
    price: 7800
  }, {
    item_id: 428,
    max_extra: 25,
    price: 140000
  }, {
    item_id: 429,
    max_extra: 25,
    price: 120000
  }, {
    item_id: 430,
    max_extra: 13,
    price: 2000
  }, {
    item_id: 431,
    max_extra: 1,
    price: 120000
  }, {
    item_id: 432,
    max_extra: 1,
    price: 100000
  }, {
    item_id: 433,
    max_extra: 2,
    price: 14000
  }, {
    item_id: 434,
    max_extra: 2,
    price: 10000
  }, {
    item_id: 435,
    max_extra: 15,
    price: 4100
  }, {
    item_id: 436,
    max_extra: 17,
    price: 7800
  }, {
    item_id: 437,
    max_extra: 0,
    price: 1600
  }],
  5: [{
    item_id: 798,
    max_extra: 10,
    price: 2000
  }, {
    item_id: 799,
    max_extra: 10,
    price: 23000
  }, {
    item_id: 800,
    max_extra: 10,
    price: 14000
  }, {
    item_id: 801,
    max_extra: 10,
    price: 7600
  }, {
    item_id: 802,
    max_extra: 10,
    price: 8800
  }, {
    item_id: 803,
    max_extra: 10,
    price: 14000
  }, {
    item_id: 804,
    max_extra: 10,
    price: 9000
  }, {
    item_id: 805,
    max_extra: 10,
    price: 11000
  }, {
    item_id: 806,
    max_extra: 10,
    price: 14000
  }, {
    item_id: 807,
    max_extra: 10,
    price: 17000
  }, {
    item_id: 808,
    max_extra: 10,
    price: 21000
  }, {
    item_id: 809,
    max_extra: 9,
    price: 19000
  }, {
    item_id: 810,
    max_extra: 10,
    price: 13600
  }, {
    item_id: 811,
    max_extra: 10,
    price: 9600
  }, {
    item_id: 812,
    max_extra: 10,
    price: 21000
  }, {
    item_id: 813,
    max_extra: 10,
    price: 19000
  }, {
    item_id: 814,
    max_extra: 9,
    price: 25000
  }]
}, {
  0: [{
    item_id: 438,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 439,
    max_extra: 1,
    price: 1400
  }, {
    item_id: 440,
    max_extra: 2,
    price: 9000
  }, {
    item_id: 441,
    max_extra: 7,
    price: 27000
  }, {
    item_id: 442,
    max_extra: 7,
    price: 5600
  }, {
    item_id: 444,
    max_extra: 7,
    price: 1200
  }, {
    item_id: 445,
    max_extra: 7,
    price: 1300
  }, {
    item_id: 446,
    max_extra: 6,
    price: 24000
  }, {
    item_id: 447,
    max_extra: 7,
    price: 11000
  }, {
    item_id: 448,
    max_extra: 6,
    price: 27000
  }, {
    item_id: 2940,
    max_extra: 13,
    price: 28000
  }, {
    item_id: 449,
    max_extra: 7,
    price: 32000
  }, {
    item_id: 450,
    max_extra: 7,
    price: 2300
  }, {
    item_id: 451,
    max_extra: 1,
    price: 3800
  }, {
    item_id: 452,
    max_extra: 7,
    price: 2600
  }, {
    item_id: 453,
    max_extra: 7,
    price: 5600
  }, {
    item_id: 454,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 455,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 456,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 457,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 458,
    max_extra: 1,
    price: 1300
  }, {
    item_id: 459,
    max_extra: 7,
    price: 40000
  }, {
    item_id: 460,
    max_extra: 25,
    price: 7200
  }, {
    item_id: 461,
    max_extra: 9,
    price: 7200
  }, {
    item_id: 462,
    max_extra: 2,
    price: 3200
  }, {
    item_id: 463,
    max_extra: 9,
    price: 40000
  }, {
    item_id: 464,
    max_extra: 9,
    price: 1200
  }, {
    item_id: 465,
    max_extra: 9,
    price: 3700
  }, {
    item_id: 466,
    max_extra: 11,
    price: 2700
  }, {
    item_id: 467,
    max_extra: 23,
    price: 1200
  }, {
    item_id: 468,
    max_extra: 23,
    price: 1200
  }, {
    item_id: 469,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 470,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 471,
    max_extra: 9,
    price: 1200
  }, {
    item_id: 472,
    max_extra: 20,
    price: 1200
  }, {
    item_id: 473,
    max_extra: 23,
    price: 1200
  }, {
    item_id: 2293,
    max_extra: 9,
    price: 1400
  }, {
    item_id: 2294,
    max_extra: 9,
    price: 1500
  }, {
    item_id: 2295,
    max_extra: 0,
    price: 1550
  }, {
    item_id: 2296,
    max_extra: 0,
    price: 1600
  }, {
    item_id: 2297,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 2298,
    max_extra: 9,
    price: 1400
  }, {
    item_id: 2299,
    max_extra: 9,
    price: 1500
  }, {
    item_id: 474,
    max_extra: 9,
    price: 1200
  }, {
    item_id: 475,
    max_extra: 15,
    price: 1200
  }, {
    item_id: 476,
    max_extra: 9,
    price: 1200
  }, {
    item_id: 477,
    max_extra: 25,
    price: 1200
  }, {
    item_id: 478,
    max_extra: 10,
    price: 1200
  }, {
    item_id: 480,
    max_extra: 1,
    price: 1200
  }, {
    item_id: 481,
    max_extra: 18,
    price: 7800
  }, {
    item_id: 482,
    max_extra: 18,
    price: 7800
  }],
  1: [{
    item_id: 483,
    max_extra: 15,
    price: 1200
  }, {
    item_id: 484,
    max_extra: 15,
    price: 7900
  }, {
    item_id: 1390,
    extras: [0, 1, 2, 3, 4, 10, 11, 12, 13, 14],
    price: 10000
  }, {
    item_id: 1391,
    max_extra: 2,
    price: 8000
  }, {
    item_id: 1392,
    max_extra: 2,
    price: 7900
  }, {
    item_id: 1393,
    max_extra: 2,
    price: 7500
  }, {
    item_id: 1394,
    max_extra: 14,
    price: 2500
  }, {
    item_id: 1395,
    max_extra: 2,
    price: 3700
  }, {
    item_id: 1396,
    max_extra: 2,
    price: 4400
  }, {
    item_id: 1397,
    max_extra: 15,
    price: 6400
  }, {
    item_id: 485,
    max_extra: 15,
    price: 9000
  }, {
    item_id: 486,
    max_extra: 6,
    price: 10000
  }, {
    item_id: 487,
    max_extra: 0,
    price: 29000
  }, {
    item_id: 1398,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 488,
    max_extra: 5,
    price: 27000
  }, {
    item_id: 489,
    max_extra: 4,
    price: 30000
  }, {
    item_id: 490,
    max_extra: 2,
    price: 1700
  }, {
    item_id: 491,
    max_extra: 11,
    price: 79000
  }, {
    item_id: 492,
    max_extra: 10,
    price: 75000
  }, {
    item_id: 493,
    max_extra: 12,
    price: 40000
  }, {
    item_id: 1399,
    max_extra: 15,
    price: 21000
  }, {
    item_id: 495,
    max_extra: 2,
    price: 3800
  }, {
    item_id: 496,
    max_extra: 6,
    price: 4200
  }, {
    item_id: 497,
    max_extra: 2,
    price: 2900
  }, {
    item_id: 498,
    max_extra: 8,
    price: 6700
  }, {
    item_id: 1400,
    max_extra: 0,
    price: 55000
  }, {
    item_id: 499,
    max_extra: 11,
    price: 24000
  }, {
    item_id: 500,
    max_extra: 4,
    price: 2800
  }, {
    item_id: 501,
    max_extra: 5,
    price: 67000
  }, {
    item_id: 502,
    max_extra: 3,
    price: 6700
  }, {
    item_id: 1401,
    max_extra: 0,
    price: 95000
  }, {
    item_id: 503,
    max_extra: 1,
    price: 6700
  }, {
    item_id: 1402,
    max_extra: 3,
    price: 42000
  }, {
    item_id: 504,
    max_extra: 1,
    price: 2300
  }, {
    item_id: 1403,
    max_extra: 0,
    price: 47000
  }, {
    item_id: 1404,
    max_extra: 3,
    price: 49000
  }, {
    item_id: 1405,
    max_extra: 3,
    price: 49000
  }, {
    item_id: 505,
    max_extra: 3,
    price: 7800
  }, {
    item_id: 1406,
    max_extra: 0,
    price: 7800
  }, {
    item_id: 506,
    max_extra: 0,
    price: 5000
  }, {
    item_id: 1407,
    max_extra: 8,
    price: 55000
  }, {
    item_id: 1408,
    max_extra: 8,
    price: 55000
  }, {
    item_id: 507,
    max_extra: 3,
    price: 40000
  }, {
    item_id: 508,
    max_extra: 5,
    price: 37000
  }, {
    item_id: 509,
    max_extra: 5,
    price: 37000
  }, {
    item_id: 1411,
    max_extra: 4,
    price: 99000
  }, {
    item_id: 1412,
    max_extra: 11,
    price: 120000
  }, {
    item_id: 510,
    max_extra: 3,
    price: 44000
  }, {
    item_id: 511,
    max_extra: 0,
    price: 8900
  }, {
    item_id: 512,
    max_extra: 19,
    price: 37000
  }, {
    item_id: 513,
    max_extra: 0,
    price: 62000
  }, {
    item_id: 514,
    max_extra: 4,
    price: 7700
  }, {
    item_id: 1413,
    max_extra: 15,
    price: 9700
  }, {
    item_id: 515,
    max_extra: 0,
    price: 7300
  }, {
    item_id: 516,
    max_extra: 2,
    price: 8700
  }, {
    item_id: 517,
    max_extra: 2,
    price: 6600
  }, {
    item_id: 518,
    max_extra: 3,
    price: 4500
  }, {
    item_id: 519,
    max_extra: 4,
    price: 2300
  }, {
    item_id: 520,
    max_extra: 0,
    price: 14000
  }, {
    item_id: 521,
    max_extra: 7,
    price: 8100
  }, {
    item_id: 522,
    max_extra: 3,
    price: 11000
  }, {
    item_id: 523,
    max_extra: 0,
    price: 14000
  }, {
    item_id: 524,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 525,
    max_extra: 6,
    price: 87000
  }, {
    item_id: 526,
    max_extra: 2,
    price: 9700
  }, {
    item_id: 1415,
    max_extra: 2,
    price: 13200
  }, {
    item_id: 527,
    max_extra: 0,
    price: 11700
  }, {
    item_id: 528,
    max_extra: 1,
    price: 3300
  }, {
    item_id: 1416,
    max_extra: 4,
    price: 94000
  }, {
    item_id: 529,
    max_extra: 4,
    price: 94000
  }, {
    item_id: 1417,
    max_extra: 3,
    price: 100000
  }, {
    item_id: 1418,
    max_extra: 3,
    price: 100000
  }, {
    item_id: 530,
    max_extra: 0,
    price: 144000
  }, {
    item_id: 532,
    max_extra: 0,
    price: 88000
  }, {
    item_id: 533,
    max_extra: 0,
    price: 45000
  }, {
    item_id: 534,
    max_extra: 4,
    price: 66000
  }, {
    item_id: 535,
    max_extra: 10,
    price: 50000
  }, {
    item_id: 536,
    max_extra: 0,
    price: 2000
  }, {
    item_id: 1419,
    max_extra: 5,
    price: 15000
  }, {
    item_id: 1420,
    max_extra: 0,
    price: 50000
  }, {
    item_id: 537,
    max_extra: 0,
    price: 71000
  }, {
    item_id: 538,
    max_extra: 7,
    price: 43000
  }, {
    item_id: 539,
    max_extra: 3,
    price: 37000
  }, {
    item_id: 540,
    max_extra: 0,
    price: 44000
  }, {
    item_id: 1422,
    max_extra: 15,
    price: 36000
  }, {
    item_id: 1423,
    max_extra: 9,
    price: 44000
  }, {
    item_id: 541,
    max_extra: 11,
    price: 90000
  }, {
    item_id: 542,
    max_extra: 2,
    price: 3400
  }, {
    item_id: 543,
    max_extra: 2,
    price: 1700
  }, {
    item_id: 544,
    max_extra: 2,
    price: 1800
  }, {
    item_id: 545,
    max_extra: 2,
    price: 2300
  }, {
    item_id: 546,
    max_extra: 2,
    price: 2300
  }, {
    item_id: 547,
    max_extra: 2,
    price: 4000
  }, {
    item_id: 1424,
    max_extra: 2,
    price: 5500
  }, {
    item_id: 548,
    max_extra: 2,
    price: 3000
  }, {
    item_id: 1425,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 549,
    max_extra: 16,
    price: 2700
  }, {
    item_id: 1426,
    max_extra: 0,
    price: 80000
  }, {
    item_id: 1427,
    max_extra: 11,
    price: 75000
  }, {
    item_id: 550,
    max_extra: 9,
    price: 3100
  }, {
    item_id: 551,
    max_extra: 2,
    price: 2300
  }, {
    item_id: 552,
    max_extra: 0,
    price: 2600
  }, {
    item_id: 553,
    max_extra: 0,
    price: 3300
  }, {
    item_id: 554,
    max_extra: 2,
    price: 3700
  }, {
    item_id: 555,
    max_extra: 6,
    price: 40000
  }, {
    item_id: 556,
    max_extra: 6,
    price: 34000
  }, {
    item_id: 1431,
    max_extra: 2,
    price: 22000
  }, {
    item_id: 557,
    max_extra: 2,
    price: 6500
  }, {
    item_id: 1432,
    max_extra: 7,
    price: 29500
  }, {
    item_id: 558,
    max_extra: 14,
    price: 3300
  }, {
    item_id: 559,
    max_extra: 10,
    price: 2400
  }, {
    item_id: 560,
    max_extra: 2,
    price: 35000
  }, {
    item_id: 561,
    max_extra: 9,
    price: 4000
  }, {
    item_id: 562,
    max_extra: 5,
    price: 2000
  }, {
    item_id: 563,
    extras: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    price: 42000
  }, {
    item_id: 1433,
    max_extra: 13,
    price: 120000
  }, {
    item_id: 1435,
    max_extra: 11,
    price: 63500
  }, {
    item_id: 1436,
    extras: [0, 1, 2, 3, 4, 6, 7, 8],
    price: 44000
  }, {
    item_id: 1437,
    max_extra: 11,
    price: 39000
  }, {
    item_id: 564,
    max_extra: 5,
    price: 12000
  }, {
    item_id: 1438,
    max_extra: 15,
    price: 49000
  }, {
    item_id: 1439,
    max_extra: 25,
    price: 56000
  }, {
    item_id: 1440,
    max_extra: 7,
    price: 59000
  }, {
    item_id: 1441,
    max_extra: 3,
    price: 43500
  }, {
    item_id: 565,
    max_extra: 5,
    price: 12000
  }, {
    item_id: 566,
    max_extra: 3,
    price: 17000
  }, {
    item_id: 1442,
    max_extra: 2,
    price: 19500
  }, {
    item_id: 1443,
    max_extra: 1,
    price: 20500
  }, {
    item_id: 1444,
    max_extra: 1,
    price: 21500
  }, {
    item_id: 567,
    max_extra: 3,
    price: 70000
  }, {
    item_id: 568,
    max_extra: 3,
    price: 50000
  }, {
    item_id: 569,
    max_extra: 0,
    price: 20000
  }, {
    item_id: 570,
    max_extra: 2,
    price: 19000
  }, {
    item_id: 1445,
    max_extra: 6,
    price: 36500
  }, {
    item_id: 571,
    max_extra: 5,
    price: 16000
  }, {
    item_id: 1446,
    max_extra: 15,
    price: 78000
  }, {
    item_id: 572,
    max_extra: 2,
    price: 17000
  }, {
    item_id: 573,
    max_extra: 3,
    price: 19000
  }, {
    item_id: 574,
    max_extra: 3,
    price: 25000
  }, {
    item_id: 575,
    max_extra: 5,
    price: 9000
  }, {
    item_id: 576,
    max_extra: 5,
    price: 9000
  }, {
    item_id: 577,
    max_extra: 5,
    price: 9000
  }, {
    item_id: 578,
    max_extra: 7,
    price: 9000
  }, {
    item_id: 579,
    max_extra: 1,
    price: 7200
  }, {
    item_id: 580,
    max_extra: 0,
    price: 14000
  }, {
    item_id: 581,
    max_extra: 3,
    price: 11000
  }, {
    item_id: 582,
    max_extra: 3,
    price: 14000
  }, {
    item_id: 583,
    max_extra: 3,
    price: 80000
  }, {
    item_id: 584,
    max_extra: 3,
    price: 70000
  }, {
    item_id: 585,
    max_extra: 0,
    price: 2300
  }, {
    item_id: 586,
    max_extra: 6,
    price: 8800
  }, {
    item_id: 587,
    max_extra: 3,
    price: 6700
  }, {
    item_id: 588,
    max_extra: 2,
    price: 4700
  }, {
    item_id: 589,
    max_extra: 5,
    price: 4500
  }, {
    item_id: 590,
    max_extra: 1,
    price: 14000
  }, {
    item_id: 591,
    max_extra: 5,
    price: 60000
  }, {
    item_id: 592,
    max_extra: 3,
    price: 9000
  }, {
    item_id: 593,
    max_extra: 3,
    price: 14000
  }, {
    item_id: 594,
    max_extra: 12,
    price: 9900
  }, {
    item_id: 595,
    max_extra: 10,
    price: 12000
  }, {
    item_id: 596,
    max_extra: 10,
    price: 11000
  }, {
    item_id: 597,
    max_extra: 25,
    price: 3000
  }, {
    item_id: 1447,
    max_extra: 25,
    price: 99000
  }, {
    item_id: 598,
    max_extra: 11,
    price: 77000
  }, {
    item_id: 599,
    max_extra: 25,
    price: 64000
  }, {
    item_id: 1448,
    max_extra: 2,
    price: 27500
  }, {
    item_id: 1449,
    max_extra: 15,
    price: 28500
  }, {
    item_id: 1450,
    max_extra: 7,
    price: 38500
  }, {
    item_id: 1451,
    max_extra: 25,
    price: 75500
  }, {
    item_id: 600,
    max_extra: 4,
    price: 4200
  }, {
    item_id: 601,
    max_extra: 25,
    price: 3800
  }, {
    item_id: 602,
    max_extra: 12,
    price: 2300
  }, {
    item_id: 603,
    max_extra: 4,
    price: 5600
  }, {
    item_id: 1452,
    max_extra: 16,
    price: 9500
  }, {
    item_id: 1453,
    max_extra: 16,
    price: 9500
  }, {
    item_id: 1454,
    max_extra: 23,
    price: 84500
  }, {
    item_id: 1455,
    max_extra: 23,
    price: 83500
  }, {
    item_id: 604,
    max_extra: 14,
    price: 11000
  }, {
    item_id: 605,
    max_extra: 14,
    price: 9000
  }, {
    item_id: 606,
    max_extra: 15,
    price: 10000
  }, {
    item_id: 607,
    max_extra: 15,
    price: 9600
  }, {
    item_id: 608,
    max_extra: 1,
    price: 9500
  }, {
    item_id: 609,
    max_extra: 0,
    price: 6500
  }, {
    item_id: 610,
    max_extra: 11,
    price: 13000
  }, {
    item_id: 611,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 612,
    max_extra: 9,
    price: 15000
  }, {
    item_id: 613,
    max_extra: 9,
    price: 13000
  }, {
    item_id: 614,
    max_extra: 25,
    price: 5600
  }, {
    item_id: 615,
    max_extra: 11,
    price: 6500
  }, {
    item_id: 616,
    max_extra: 25,
    price: 4300
  }, {
    item_id: 1457,
    max_extra: 5,
    price: 115000
  }, {
    item_id: 617,
    max_extra: 5,
    price: 4200
  }, {
    item_id: 1458,
    max_extra: 5,
    price: 16000
  }, {
    item_id: 618,
    max_extra: 25,
    price: 14000
  }, {
    item_id: 619,
    max_extra: 25,
    price: 11000
  }, {
    item_id: 1459,
    max_extra: 9,
    price: 28000
  }, {
    item_id: 1460,
    max_extra: 25,
    price: 33000
  }, {
    item_id: 620,
    max_extra: 1,
    price: 8500
  }, {
    item_id: 621,
    max_extra: 1,
    price: 6400
  }, {
    item_id: 1461,
    max_extra: 25,
    price: 89500
  }, {
    item_id: 1462,
    max_extra: 25,
    price: 89500
  }, {
    item_id: 1463,
    max_extra: 20,
    price: 25500
  }, {
    item_id: 1464,
    max_extra: 6,
    price: 105500
  }, {
    item_id: 1465,
    max_extra: 25,
    price: 56500
  }, {
    item_id: 1466,
    max_extra: 15,
    price: 48400
  }, {
    item_id: 1467,
    max_extra: 23,
    price: 59300
  }, {
    item_id: 1468,
    max_extra: 14,
    price: 34200
  }, {
    item_id: 1469,
    max_extra: 25,
    price: 59600
  }, {
    item_id: 1470,
    max_extra: 25,
    price: 54500
  }, {
    item_id: 622,
    max_extra: 15,
    price: 9900
  }, {
    item_id: 1471,
    max_extra: 15,
    price: 63800
  }, {
    item_id: 1472,
    max_extra: 15,
    price: 63800
  }, {
    item_id: 1473,
    max_extra: 15,
    price: 97400
  }, {
    item_id: 1474,
    max_extra: 17,
    price: 86200
  }, {
    item_id: 1475,
    max_extra: 17,
    price: 86200
  }, {
    item_id: 1476,
    max_extra: 4,
    price: 120200
  }, {
    item_id: 623,
    max_extra: 4,
    price: 120200
  }, {
    item_id: 1477,
    max_extra: 15,
    price: 107500
  }, {
    item_id: 1478,
    max_extra: 7,
    price: 30500
  }, {
    item_id: 1479,
    max_extra: 20,
    price: 27300
  }, {
    item_id: 1480,
    max_extra: 20,
    price: 27300
  }, {
    item_id: 624,
    max_extra: 1,
    price: 80000
  }, {
    item_id: 1481,
    max_extra: 11,
    price: 24500
  }, {
    item_id: 1482,
    max_extra: 11,
    price: 26500
  }, {
    item_id: 1483,
    max_extra: 21,
    price: 28300
  }, {
    item_id: 1484,
    max_extra: 17,
    price: 35300
  }, {
    item_id: 1485,
    max_extra: 17,
    price: 35300
  }, {
    item_id: 1486,
    max_extra: 23,
    price: 27800
  }, {
    item_id: 1487,
    max_extra: 15,
    price: 32600
  }, {
    item_id: 1488,
    max_extra: 13,
    price: 38400
  }, {
    item_id: 1926,
    max_extra: 0,
    price: 17400
  }, {
    item_id: 1928,
    max_extra: 9,
    price: 28700
  }, {
    item_id: 1929,
    max_extra: 9,
    price: 28700
  }, {
    item_id: 1930,
    max_extra: 25,
    price: 44600
  }, {
    item_id: 1931,
    max_extra: 25,
    price: 44600
  }, {
    item_id: 1932,
    max_extra: 24,
    price: 48400
  }, {
    item_id: 1933,
    max_extra: 25,
    price: 24200
  }, {
    item_id: 1934,
    max_extra: 25,
    price: 43500
  }, {
    item_id: 1935,
    max_extra: 25,
    price: 43500
  }, {
    item_id: 1936,
    max_extra: 25,
    price: 43500
  }, {
    item_id: 1937,
    max_extra: 25,
    price: 43500
  }, {
    item_id: 1938,
    max_extra: 9,
    price: 79700
  }, {
    item_id: 1939,
    max_extra: 25,
    price: 34300
  }, {
    item_id: 1940,
    max_extra: 25,
    price: 34300
  }, {
    item_id: 1941,
    max_extra: 23,
    price: 46800
  }, {
    item_id: 1942,
    max_extra: 11,
    price: 34300
  }, {
    item_id: 1943,
    max_extra: 13,
    price: 75500
  }, {
    item_id: 1944,
    max_extra: 10,
    price: 36600
  }, {
    item_id: 1945,
    max_extra: 25,
    price: 68500
  }, {
    item_id: 1946,
    max_extra: 25,
    price: 68500
  }, {
    item_id: 1947,
    max_extra: 20,
    price: 27900
  }, {
    item_id: 1955,
    max_extra: 0,
    price: 29500
  }, {
    item_id: 1956,
    max_extra: 0,
    price: 29500
  }, {
    item_id: 1957,
    max_extra: 24,
    price: 24800
  }, {
    item_id: 1958,
    max_extra: 25,
    price: 35400
  }, {
    item_id: 1960,
    max_extra: 17,
    price: 31200
  }, {
    item_id: 1961,
    max_extra: 15,
    price: 30200
  }, {
    item_id: 1962,
    max_extra: 7,
    price: 45700
  }, {
    item_id: 1963,
    max_extra: 7,
    price: 45700
  }, {
    item_id: 1964,
    max_extra: 0,
    price: 31400
  }, {
    item_id: 1965,
    max_extra: 0,
    price: 18900
  }, {
    item_id: 1966,
    max_extra: 0,
    price: 33500
  }, {
    item_id: 1967,
    max_extra: 0,
    price: 41200
  }, {
    item_id: 1968,
    max_extra: 0,
    price: 36100
  }, {
    item_id: 1969,
    max_extra: 0,
    price: 36100
  }, {
    item_id: 1970,
    max_extra: 25,
    price: 39100
  }, {
    item_id: 1972,
    max_extra: 14,
    price: 29400
  }, {
    item_id: 1973,
    max_extra: 5,
    price: 22100
  }, {
    item_id: 1974,
    max_extra: 8,
    price: 22100
  }, {
    item_id: 1976,
    max_extra: 5,
    price: 57300
  }, {
    item_id: 1977,
    max_extra: 24,
    price: 33200
  }, {
    item_id: 1978,
    max_extra: 7,
    price: 31200
  }, {
    item_id: 1979,
    max_extra: 7,
    price: 31200
  }, {
    item_id: 1980,
    max_extra: 6,
    price: 25500
  }, {
    item_id: 1981,
    max_extra: 6,
    price: 25500
  }, {
    item_id: 1982,
    max_extra: 6,
    price: 25500
  }, {
    item_id: 1983,
    max_extra: 6,
    price: 25500
  }, {
    item_id: 1984,
    max_extra: 6,
    price: 69500
  }, {
    item_id: 1985,
    max_extra: 6,
    price: 69500
  }, {
    item_id: 1986,
    max_extra: 6,
    price: 69500
  }, {
    item_id: 1987,
    max_extra: 25,
    price: 44200
  }, {
    item_id: 1988,
    max_extra: 25,
    price: 40100
  }, {
    item_id: 1989,
    max_extra: 19,
    price: 19500
  }, {
    item_id: 1990,
    max_extra: 19,
    price: 19500
  }, {
    item_id: 1991,
    max_extra: 9,
    price: 32800
  }, {
    item_id: 1992,
    max_extra: 4,
    price: 35400
  }, {
    item_id: 1914,
    max_extra: 2,
    price: 16500
  }, {
    item_id: 1915,
    max_extra: 4,
    price: 16500
  }, {
    item_id: 1916,
    max_extra: 25,
    price: 38700
  }, {
    item_id: 1917,
    max_extra: 25,
    price: 38700
  }, {
    item_id: 1918,
    max_extra: 0,
    price: 24200
  }, {
    item_id: 1919,
    max_extra: 2,
    price: 28500
  }, {
    item_id: 1920,
    max_extra: 9,
    price: 55800
  }, {
    item_id: 1921,
    max_extra: 5,
    price: 25800
  }, {
    item_id: 1922,
    max_extra: 0,
    price: 48400
  }, {
    item_id: 1923,
    max_extra: 0,
    price: 48400
  }, {
    item_id: 1924,
    max_extra: 0,
    price: 52800
  }],
  2: [{
    item_id: 917,
    max_extra: 15,
    price: 4500
  }, {
    item_id: 918,
    max_extra: 6,
    price: 4200
  }, {
    item_id: 919,
    max_extra: 2,
    price: 3000
  }, {
    item_id: 920,
    max_extra: 2,
    price: 1200
  }, {
    item_id: 921,
    max_extra: 4,
    price: 80000
  }, {
    item_id: 922,
    max_extra: 12,
    price: 80000
  }, {
    item_id: 923,
    max_extra: 15,
    price: 11000
  }, {
    item_id: 924,
    max_extra: 2,
    price: 2000
  }, {
    item_id: 925,
    max_extra: 2,
    price: 6000
  }, {
    item_id: 926,
    max_extra: 4,
    price: 4500
  }, {
    item_id: 927,
    max_extra: 3,
    price: 2200
  }, {
    item_id: 928,
    max_extra: 1,
    price: 3000
  }, {
    item_id: 929,
    max_extra: 0,
    price: 22000
  }, {
    item_id: 930,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 931,
    max_extra: 15,
    price: 19000
  }, {
    item_id: 932,
    max_extra: 3,
    price: 25000
  }, {
    item_id: 933,
    max_extra: 3,
    price: 23000
  }, {
    item_id: 934,
    max_extra: 1,
    price: 1200
  }, {
    item_id: 935,
    max_extra: 19,
    price: 15000
  }, {
    item_id: 936,
    max_extra: 19,
    price: 13000
  }, {
    item_id: 937,
    max_extra: 7,
    price: 2300
  }, {
    item_id: 938,
    max_extra: 0,
    price: 9000
  }, {
    item_id: 939,
    max_extra: 0,
    price: 11000
  }, {
    item_id: 940,
    max_extra: 19,
    price: 4400
  }, {
    item_id: 941,
    max_extra: 1,
    price: 18000
  }, {
    item_id: 942,
    max_extra: 1,
    price: 20000
  }, {
    item_id: 943,
    max_extra: 7,
    price: 80000
  }, {
    item_id: 944,
    max_extra: 0,
    price: 3400
  }, {
    item_id: 945,
    max_extra: 2,
    price: 2300
  }, {
    item_id: 946,
    max_extra: 2,
    price: 15000
  }, {
    item_id: 947,
    max_extra: 2,
    price: 21000
  }, {
    item_id: 948,
    max_extra: 2,
    price: 3200
  }, {
    item_id: 949,
    max_extra: 3,
    price: 2000
  }, {
    item_id: 950,
    max_extra: 4,
    price: 30000
  }, {
    item_id: 951,
    max_extra: 5,
    price: 18000
  }, {
    item_id: 952,
    max_extra: 5,
    price: 20000
  }, {
    item_id: 953,
    max_extra: 11,
    price: 50000
  }, {
    item_id: 954,
    max_extra: 2,
    price: 2000
  }, {
    item_id: 955,
    max_extra: 2,
    price: 10000
  }, {
    item_id: 956,
    max_extra: 2,
    price: 12000
  }, {
    item_id: 957,
    max_extra: 2,
    price: 12000
  }, {
    item_id: 958,
    max_extra: 2,
    price: 4000
  }, {
    item_id: 959,
    max_extra: 2,
    price: 12000
  }, {
    item_id: 960,
    max_extra: 7,
    price: 9000
  }, {
    item_id: 961,
    max_extra: 7,
    price: 11000
  }, {
    item_id: 962,
    max_extra: 5,
    price: 14000
  }, {
    item_id: 963,
    max_extra: 5,
    price: 10000
  }, {
    item_id: 964,
    max_extra: 5,
    price: 14000
  }, {
    item_id: 965,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 966,
    max_extra: 15,
    price: 2300
  }, {
    item_id: 967,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 968,
    max_extra: 2,
    price: 2700
  }, {
    item_id: 969,
    max_extra: 2,
    price: 2700
  }, {
    item_id: 970,
    max_extra: 1,
    price: 25000
  }, {
    item_id: 971,
    max_extra: 17,
    price: 20000
  }, {
    item_id: 972,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 973,
    max_extra: 16,
    price: 11000
  }, {
    item_id: 974,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 975,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 976,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 977,
    max_extra: 16,
    price: 11000
  }, {
    item_id: 978,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 979,
    max_extra: 16,
    price: 13000
  }, {
    item_id: 980,
    max_extra: 0,
    price: 2300
  }, {
    item_id: 981,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 982,
    max_extra: 0,
    price: 3400
  }, {
    item_id: 983,
    max_extra: 11,
    price: 3000
  }, {
    item_id: 984,
    max_extra: 11,
    price: 5000
  }, {
    item_id: 985,
    max_extra: 25,
    price: 1200
  }, {
    item_id: 986,
    max_extra: 20,
    price: 3000
  }, {
    item_id: 987,
    max_extra: 20,
    price: 2900
  }, {
    item_id: 988,
    max_extra: 20,
    price: 3700
  }, {
    item_id: 989,
    max_extra: 20,
    price: 3000
  }, {
    item_id: 990,
    max_extra: 20,
    price: 4200
  }, {
    item_id: 991,
    max_extra: 20,
    price: 4000
  }, {
    item_id: 992,
    max_extra: 11,
    price: 5000
  }, {
    item_id: 993,
    max_extra: 11,
    price: 2000
  }, {
    item_id: 994,
    max_extra: 7,
    price: 1800
  }, {
    item_id: 995,
    max_extra: 21,
    price: 2000
  }, {
    item_id: 996,
    max_extra: 21,
    price: 1900
  }, {
    item_id: 997,
    max_extra: 21,
    price: 2000
  }],
  3: [{
    item_id: 667,
    max_extra: 15,
    price: 2700
  }, {
    item_id: 668,
    max_extra: 15,
    price: 3200
  }, {
    item_id: 1489,
    max_extra: 2,
    price: 7500
  }, {
    item_id: 669,
    max_extra: 15,
    price: 2000
  }, {
    item_id: 670,
    max_extra: 15,
    price: 9000
  }, {
    item_id: 1490,
    max_extra: 2,
    price: 8500
  }, {
    item_id: 1491,
    max_extra: 2,
    price: 9500
  }, {
    item_id: 1492,
    max_extra: 12,
    price: 10500
  }, {
    item_id: 671,
    max_extra: 15,
    price: 22000
  }, {
    item_id: 1493,
    max_extra: 2,
    price: 7900
  }, {
    item_id: 672,
    max_extra: 15,
    price: 5000
  }, {
    item_id: 673,
    max_extra: 15,
    price: 24000
  }, {
    item_id: 1494,
    max_extra: 1,
    price: 10900
  }, {
    item_id: 674,
    max_extra: 9,
    price: 20000
  }, {
    item_id: 675,
    max_extra: 11,
    price: 25000
  }, {
    item_id: 676,
    max_extra: 1,
    price: 2400
  }, {
    item_id: 677,
    max_extra: 2,
    price: 76000
  }, {
    item_id: 1495,
    max_extra: 0,
    price: 11300
  }, {
    item_id: 1496,
    max_extra: 2,
    price: 16800
  }, {
    item_id: 678,
    max_extra: 12,
    price: 22000
  }, {
    item_id: 679,
    max_extra: 12,
    price: 3400
  }, {
    item_id: 680,
    max_extra: 12,
    price: 7000
  }, {
    item_id: 681,
    max_extra: 0,
    price: 11000
  }, {
    item_id: 682,
    max_extra: 15,
    price: 52000
  }, {
    item_id: 683,
    max_extra: 0,
    price: 20000
  }, {
    item_id: 684,
    max_extra: 4,
    price: 2200
  }, {
    item_id: 685,
    max_extra: 3,
    price: 25000
  }, {
    item_id: 1497,
    max_extra: 0,
    price: 38200
  }, {
    item_id: 686,
    max_extra: 0,
    price: 3000
  }, {
    item_id: 1498,
    max_extra: 0,
    price: 14800
  }, {
    item_id: 687,
    max_extra: 3,
    price: 16000
  }, {
    item_id: 688,
    max_extra: 6,
    price: 2300
  }, {
    item_id: 1499,
    max_extra: 3,
    price: 16500
  }, {
    item_id: 1500,
    max_extra: 3,
    price: 12300
  }, {
    item_id: 689,
    max_extra: 3,
    price: 3600
  }, {
    item_id: 1501,
    max_extra: 4,
    price: 50500
  }, {
    item_id: 690,
    max_extra: 4,
    price: 6500
  }, {
    item_id: 691,
    max_extra: 3,
    price: 4300
  }, {
    item_id: 692,
    max_extra: 6,
    price: 7600
  }, {
    item_id: 693,
    max_extra: 1,
    price: 5300
  }, {
    item_id: 694,
    max_extra: 4,
    price: 11000
  }, {
    item_id: 695,
    max_extra: 4,
    price: 6600
  }, {
    item_id: 696,
    max_extra: 3,
    price: 4500
  }, {
    item_id: 697,
    max_extra: 0,
    price: 18000
  }, {
    item_id: 698,
    max_extra: 3,
    price: 2300
  }, {
    item_id: 699,
    max_extra: 0,
    price: 5300
  }, {
    item_id: 700,
    max_extra: 5,
    price: 65000
  }, {
    item_id: 701,
    max_extra: 7,
    price: 42000
  }, {
    item_id: 702,
    max_extra: 3,
    price: 2000
  }, {
    item_id: 1502,
    max_extra: 2,
    price: 16200
  }, {
    item_id: 1503,
    max_extra: 15,
    price: 19400
  }, {
    item_id: 1504,
    max_extra: 9,
    price: 22300
  }, {
    item_id: 703,
    max_extra: 11,
    price: 55000
  }, {
    item_id: 704,
    max_extra: 11,
    price: 78000
  }, {
    item_id: 705,
    max_extra: 3,
    price: 2600
  }, {
    item_id: 1505,
    max_extra: 2,
    price: 17800
  }, {
    item_id: 706,
    max_extra: 10,
    price: 1200
  }, {
    item_id: 707,
    max_extra: 13,
    price: 2300
  }, {
    item_id: 1506,
    max_extra: 9,
    price: 13700
  }, {
    item_id: 1507,
    max_extra: 11,
    price: 34800
  }, {
    item_id: 1508,
    max_extra: 9,
    price: 19600
  }, {
    item_id: 1509,
    max_extra: 17,
    price: 46800
  }, {
    item_id: 1510,
    max_extra: 3,
    price: 20500
  }, {
    item_id: 708,
    max_extra: 5,
    price: 3300
  }, {
    item_id: 1511,
    max_extra: 5,
    price: 42700
  }, {
    item_id: 709,
    max_extra: 2,
    price: 4100
  }, {
    item_id: 710,
    max_extra: 2,
    price: 1200
  }, {
    item_id: 711,
    max_extra: 2,
    price: 5600
  }, {
    item_id: 712,
    max_extra: 3,
    price: 7800
  }, {
    item_id: 713,
    max_extra: 7,
    price: 8000
  }, {
    item_id: 714,
    max_extra: 2,
    price: 2300
  }, {
    item_id: 715,
    max_extra: 7,
    price: 4500
  }, {
    item_id: 716,
    max_extra: 2,
    price: 6500
  }, {
    item_id: 717,
    max_extra: 9,
    price: 4300
  }, {
    item_id: 718,
    max_extra: 3,
    price: 5400
  }, {
    item_id: 1512,
    max_extra: 15,
    price: 62100
  }, {
    item_id: 719,
    max_extra: 9,
    price: 6200
  }, {
    item_id: 1513,
    max_extra: 13,
    price: 19500
  }, {
    item_id: 720,
    max_extra: 25,
    price: 4200
  }, {
    item_id: 721,
    max_extra: 1,
    price: 6400
  }, {
    item_id: 1514,
    max_extra: 25,
    price: 13200
  }, {
    item_id: 722,
    max_extra: 25,
    price: 4600
  }, {
    item_id: 1515,
    max_extra: 20,
    price: 58400
  }, {
    item_id: 1516,
    max_extra: 6,
    price: 22300
  }, {
    item_id: 723,
    max_extra: 13,
    price: 24000
  }, {
    item_id: 1517,
    max_extra: 1,
    price: 22500
  }, {
    item_id: 1518,
    max_extra: 7,
    price: 82700
  }, {
    item_id: 724,
    max_extra: 11,
    price: 44000
  }, {
    item_id: 725,
    max_extra: 15,
    price: 34000
  }, {
    item_id: 726,
    max_extra: 0,
    price: 51000
  }, {
    item_id: 727,
    max_extra: 11,
    price: 55000
  }, {
    item_id: 1519,
    max_extra: 10,
    price: 20700
  }, {
    item_id: 1520,
    max_extra: 25,
    price: 25400
  }, {
    item_id: 1521,
    max_extra: 10,
    price: 53500
  }, {
    item_id: 1522,
    max_extra: 0,
    price: 26700
  }, {
    item_id: 1523,
    max_extra: 0,
    price: 26700
  }, {
    item_id: 1524,
    max_extra: 0,
    price: 32900
  }, {
    item_id: 1525,
    max_extra: 25,
    price: 49700
  }, {
    item_id: 1526,
    max_extra: 0,
    price: 27500
  }],
  4: [{
    item_id: 728,
    max_extra: 15,
    price: 4100
  }, {
    item_id: 729,
    max_extra: 15,
    price: 6000
  }, {
    item_id: 730,
    max_extra: 15,
    price: 2700
  }, {
    item_id: 731,
    max_extra: 15,
    price: 5600
  }, {
    item_id: 732,
    max_extra: 15,
    price: 11000
  }, {
    item_id: 733,
    max_extra: 15,
    price: 1400
  }, {
    item_id: 734,
    max_extra: 15,
    price: 25000
  }, {
    item_id: 735,
    max_extra: 15,
    price: 42000
  }, {
    item_id: 736,
    max_extra: 11,
    price: 4100
  }, {
    item_id: 737,
    max_extra: 2,
    price: 14000
  }, {
    item_id: 738,
    max_extra: 11,
    price: 24000
  }, {
    item_id: 739,
    max_extra: 11,
    price: 21000
  }, {
    item_id: 740,
    max_extra: 9,
    price: 3200
  }, {
    item_id: 741,
    max_extra: 15,
    price: 34000
  }, {
    item_id: 742,
    max_extra: 0,
    price: 2100
  }, {
    item_id: 743,
    max_extra: 0,
    price: 3100
  }, {
    item_id: 744,
    max_extra: 0,
    price: 4500
  }, {
    item_id: 745,
    max_extra: 0,
    price: 1200
  }, {
    item_id: 746,
    max_extra: 0,
    price: 3200
  }, {
    item_id: 747,
    max_extra: 2,
    price: 1300
  }, {
    item_id: 748,
    max_extra: 0,
    price: 1500
  }, {
    item_id: 749,
    max_extra: 0,
    price: 20000
  }, {
    item_id: 750,
    max_extra: 4,
    price: 4200
  }, {
    item_id: 751,
    max_extra: 1,
    price: 4300
  }, {
    item_id: 752,
    max_extra: 3,
    price: 1200
  }, {
    item_id: 753,
    max_extra: 4,
    price: 3100
  }, {
    item_id: 754,
    max_extra: 4,
    price: 2000
  }, {
    item_id: 755,
    max_extra: 11,
    price: 11000
  }, {
    item_id: 756,
    max_extra: 7,
    price: 45000
  }, {
    item_id: 757,
    max_extra: 7,
    price: 40000
  }, {
    item_id: 758,
    max_extra: 10,
    price: 4100
  }, {
    item_id: 759,
    max_extra: 10,
    price: 2300
  }, {
    item_id: 760,
    max_extra: 9,
    price: 4500
  }, {
    item_id: 761,
    max_extra: 1,
    price: 3200
  }, {
    item_id: 762,
    max_extra: 1,
    price: 5700
  }, {
    item_id: 763,
    max_extra: 5,
    price: 1200
  }, {
    item_id: 764,
    max_extra: 5,
    price: 5600
  }, {
    item_id: 765,
    max_extra: 1,
    price: 4500
  }, {
    item_id: 766,
    max_extra: 5,
    price: 6800
  }, {
    item_id: 767,
    max_extra: 5,
    price: 7800
  }, {
    item_id: 768,
    max_extra: 2,
    price: 5600
  }, {
    item_id: 769,
    max_extra: 2,
    price: 6700
  }, {
    item_id: 770,
    max_extra: 1,
    price: 4600
  }, {
    item_id: 771,
    max_extra: 11,
    price: 56000
  }, {
    item_id: 772,
    max_extra: 7,
    price: 2200
  }, {
    item_id: 773,
    max_extra: 7,
    price: 1200
  }, {
    item_id: 774,
    max_extra: 7,
    price: 2000
  }, {
    item_id: 775,
    max_extra: 7,
    price: 3100
  }, {
    item_id: 776,
    max_extra: 6,
    price: 4400
  }, {
    item_id: 777,
    max_extra: 6,
    price: 3200
  }, {
    item_id: 2679,
    max_extra: 25,
    price: 10000
  }, {
    item_id: 778,
    max_extra: 25,
    price: 3300
  }, {
    item_id: 779,
    max_extra: 25,
    price: 4400
  }, {
    item_id: 780,
    max_extra: 25,
    price: 5000
  }, {
    item_id: 781,
    max_extra: 25,
    price: 5100
  }, {
    item_id: 782,
    max_extra: 25,
    price: 5200
  }, {
    item_id: 783,
    max_extra: 8,
    price: 3400
  }, {
    item_id: 784,
    max_extra: 1,
    price: 1200
  }, {
    item_id: 785,
    max_extra: 25,
    price: 65000
  }, {
    item_id: 786,
    max_extra: 25,
    price: 50000
  }, {
    item_id: 787,
    max_extra: 13,
    price: 4100
  }, {
    item_id: 788,
    max_extra: 1,
    price: 56000
  }, {
    item_id: 789,
    max_extra: 1,
    price: 50000
  }, {
    item_id: 790,
    max_extra: 2,
    price: 4100
  }, {
    item_id: 791,
    max_extra: 2,
    price: 2800
  }, {
    item_id: 792,
    max_extra: 7,
    price: 56000
  }, {
    item_id: 793,
    max_extra: 15,
    price: 50000
  }, {
    item_id: 794,
    max_extra: 15,
    price: 13000
  }, {
    item_id: 795,
    max_extra: 17,
    price: 24000
  }, {
    item_id: 796,
    max_extra: 11,
    price: 70000
  }, {
    item_id: 797,
    max_extra: 0,
    price: 5400
  }],
  5: [{
    item_id: 815,
    max_extra: 0,
    price: 25000
  }, {
    item_id: 816,
    max_extra: 0,
    price: 26000
  }, {
    item_id: 817,
    max_extra: 0,
    price: 24000
  }, {
    item_id: 818,
    max_extra: 0,
    price: 35000
  }, {
    item_id: 829,
    max_extra: 7,
    price: 2000
  }, {
    item_id: 831,
    max_extra: 0,
    price: 19000
  }]
}];
const jewCatalog = [{
  0: [{
    item_id: 260,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 261,
    max_extra: 0,
    price: 15000
  }, {
    item_id: 262,
    max_extra: 0,
    price: 15000
  }, {
    item_id: 263,
    max_extra: 4,
    price: 10000
  }, {
    item_id: 264,
    max_extra: 12,
    price: 20000
  }, {
    item_id: 265,
    max_extra: 14,
    price: 40000
  }, {
    item_id: 266,
    max_extra: 12,
    price: 20000
  }, {
    item_id: 267,
    max_extra: 15,
    price: 15000
  }, {
    item_id: 268,
    max_extra: 15,
    price: 15000
  }, {
    item_id: 269,
    max_extra: 15,
    price: 15000
  }, {
    item_id: 270,
    max_extra: 15,
    price: 15000
  }, {
    item_id: 271,
    max_extra: 15,
    price: 25000
  }, {
    item_id: 272,
    max_extra: 15,
    price: 25000
  }, {
    item_id: 273,
    max_extra: 5,
    price: 50000
  }, {
    item_id: 274,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 275,
    max_extra: 3,
    price: 60000
  }, {
    item_id: 276,
    max_extra: 0,
    price: 10000
  }, {
    item_id: 277,
    max_extra: 15,
    price: 18000
  }, {
    item_id: 278,
    max_extra: 15,
    price: 25000
  }, {
    item_id: 279,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 280,
    max_extra: 1,
    price: 200000
  }, {
    item_id: 281,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 282,
    max_extra: 0,
    price: 400000
  }, {
    item_id: 283,
    max_extra: 1,
    price: 400000
  }, {
    item_id: 284,
    max_extra: 1,
    price: 520000
  }, {
    item_id: 285,
    max_extra: 1,
    price: 550000
  }, {
    item_id: 286,
    max_extra: 1,
    price: 600000
  }, {
    item_id: 287,
    max_extra: 1,
    price: 150000
  }, {
    item_id: 288,
    max_extra: 1,
    price: 220000
  }, {
    item_id: 289,
    max_extra: 1,
    price: 230000
  }, {
    item_id: 290,
    max_extra: 1,
    price: 100000
  }, {
    item_id: 291,
    max_extra: 1,
    price: 250000
  }, {
    item_id: 293,
    max_extra: 1,
    price: 220000
  }, {
    item_id: 294,
    max_extra: 1,
    price: 230000
  }, {
    item_id: 295,
    max_extra: 1,
    price: 200000
  }, {
    item_id: 296,
    max_extra: 1,
    price: 300000
  }, {
    item_id: 297,
    max_extra: 1,
    price: 350000
  }, {
    item_id: 302,
    max_extra: 1,
    price: 600000
  }, {
    item_id: 2127,
    max_extra: 2,
    price: 150000
  }, {
    item_id: 303,
    max_extra: 0,
    price: 1000000
  }, {
    item_id: 304,
    max_extra: 0,
    price: 300000
  }, {
    item_id: 305,
    max_extra: 1,
    price: 100000
  }, {
    item_id: 308,
    max_extra: 0,
    price: 140000
  }, {
    item_id: 309,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 310,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 311,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 312,
    max_extra: 1,
    price: 300000
  }, {
    item_id: 313,
    max_extra: 0,
    price: 1500000
  }, {
    item_id: 1708,
    max_extra: 0,
    price: 1500000
  }],
  1: [{
    item_id: 832,
    max_extra: 0,
    price: 1000000
  }, {
    item_id: 833,
    max_extra: 0,
    price: 100000
  }, {
    item_id: 834,
    max_extra: 4,
    price: 1000000
  }, {
    item_id: 835,
    max_extra: 3,
    price: 1500000
  }, {
    item_id: 836,
    max_extra: 3,
    price: 300000
  }, {
    item_id: 837,
    max_extra: 2,
    price: 2000000
  }, {
    item_id: 838,
    max_extra: 2,
    price: 300000
  }, {
    item_id: 839,
    max_extra: 2,
    price: 2500000
  }, {
    item_id: 840,
    max_extra: 2,
    price: 500000
  }, {
    item_id: 841,
    max_extra: 2,
    price: 700000
  }, {
    item_id: 842,
    max_extra: 2,
    price: 700000
  }, {
    item_id: 843,
    max_extra: 2,
    price: 500000
  }, {
    item_id: 844,
    max_extra: 2,
    price: 500000
  }, {
    item_id: 845,
    max_extra: 2,
    price: 600000
  }, {
    item_id: 846,
    max_extra: 2,
    price: 1200000
  }, {
    item_id: 847,
    max_extra: 2,
    price: 1700000
  }, {
    item_id: 848,
    max_extra: 2,
    price: 300000
  }, {
    item_id: 849,
    max_extra: 2,
    price: 1800000
  }, {
    item_id: 850,
    max_extra: 2,
    price: 1700000
  }, {
    item_id: 851,
    max_extra: 2,
    price: 1500000
  }, {
    item_id: 852,
    max_extra: 2,
    price: 3000000
  }, {
    item_id: 853,
    max_extra: 0,
    price: 400000
  }, {
    item_id: 854,
    max_extra: 0,
    price: 150000
  }, {
    item_id: 855,
    max_extra: 0,
    price: 300000
  }, {
    item_id: 856,
    max_extra: 0,
    price: 700000
  }, {
    item_id: 857,
    max_extra: 0,
    price: 500000
  }, {
    item_id: 858,
    max_extra: 0,
    price: 1500000
  }, {
    item_id: 859,
    max_extra: 0,
    price: 1500000
  }, {
    item_id: 860,
    max_extra: 3,
    price: 1000000
  }],
  2: [{
    item_id: 1744,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 1745,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 1746,
    max_extra: 2,
    price: 200000
  }, {
    item_id: 1747,
    max_extra: 1,
    price: 120000
  }, {
    item_id: 1748,
    max_extra: 1,
    price: 120000
  }, {
    item_id: 1749,
    max_extra: 1,
    price: 240000
  }, {
    item_id: 1750,
    max_extra: 2,
    price: 110000
  }, {
    item_id: 1751,
    max_extra: 2,
    price: 110000
  }, {
    item_id: 1752,
    max_extra: 2,
    price: 220000
  }, {
    item_id: 1753,
    max_extra: 2,
    price: 130000
  }, {
    item_id: 1754,
    max_extra: 2,
    price: 130000
  }, {
    item_id: 1755,
    max_extra: 2,
    price: 260000
  }, {
    item_id: 1756,
    max_extra: 2,
    price: 90000
  }, {
    item_id: 1757,
    max_extra: 2,
    price: 90000
  }, {
    item_id: 1758,
    max_extra: 2,
    price: 180000
  }, {
    item_id: 1759,
    max_extra: 4,
    price: 150000
  }, {
    item_id: 1760,
    max_extra: 4,
    price: 150000
  }, {
    item_id: 1761,
    max_extra: 4,
    price: 300000
  }, {
    item_id: 1762,
    max_extra: 1,
    price: 160000
  }, {
    item_id: 1763,
    max_extra: 1,
    price: 160000
  }, {
    item_id: 1764,
    max_extra: 1,
    price: 320000
  }, {
    item_id: 1765,
    max_extra: 3,
    price: 150000
  }, {
    item_id: 1766,
    max_extra: 3,
    price: 150000
  }, {
    item_id: 1767,
    max_extra: 3,
    price: 300000
  }, {
    item_id: 1768,
    max_extra: 1,
    price: 100000
  }, {
    item_id: 1769,
    max_extra: 1,
    price: 100000
  }, {
    item_id: 1770,
    max_extra: 1,
    price: 200000
  }, {
    item_id: 1771,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 1772,
    max_extra: 2,
    price: 100000
  }, {
    item_id: 1773,
    max_extra: 2,
    price: 200000
  }, {
    item_id: 1774,
    max_extra: 1,
    price: 150000
  }, {
    item_id: 1775,
    max_extra: 1,
    price: 150000
  }, {
    item_id: 1776,
    max_extra: 1,
    price: 300000
  }, {
    item_id: 1777,
    max_extra: 1,
    price: 400000
  }, {
    item_id: 1778,
    max_extra: 3,
    price: 350000
  }, {
    item_id: 1779,
    max_extra: 3,
    price: 350000
  }, {
    item_id: 1780,
    max_extra: 3,
    price: 350000
  }]
}, {
  0: [{
    item_id: 625,
    max_extra: 5,
    price: 120000
  }, {
    item_id: 626,
    max_extra: 5,
    price: 200000
  }, {
    item_id: 627,
    max_extra: 5,
    price: 20000
  }, {
    item_id: 629,
    max_extra: 5,
    price: 200000
  }, {
    item_id: 1730,
    max_extra: 5,
    price: 200000
  }, {
    item_id: 1731,
    max_extra: 0,
    price: 50000
  }, {
    item_id: 1732,
    max_extra: 3,
    price: 50000
  }, {
    item_id: 630,
    max_extra: 3,
    price: 170000
  }, {
    item_id: 631,
    max_extra: 2,
    price: 300000
  }, {
    item_id: 1733,
    max_extra: 5,
    price: 25000
  }, {
    item_id: 632,
    max_extra: 3,
    price: 80000
  }, {
    item_id: 633,
    max_extra: 4,
    price: 50000
  }, {
    item_id: 634,
    max_extra: 3,
    price: 50000
  }, {
    item_id: 635,
    max_extra: 3,
    price: 50000
  }, {
    item_id: 1734,
    max_extra: 0,
    price: 40000
  }, {
    item_id: 1735,
    max_extra: 15,
    price: 42000
  }, {
    item_id: 1736,
    max_extra: 2,
    price: 41000
  }, {
    item_id: 1737,
    max_extra: 15,
    price: 42000
  }, {
    item_id: 1738,
    max_extra: 2,
    price: 40000
  }, {
    item_id: 1739,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 1740,
    max_extra: 2,
    price: 20000
  }, {
    item_id: 1741,
    max_extra: 15,
    price: 20000
  }, {
    item_id: 637,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 638,
    max_extra: 1,
    price: 700000
  }, {
    item_id: 639,
    max_extra: 0,
    price: 450000
  }, {
    item_id: 640,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 641,
    max_extra: 1,
    price: 340000
  }, {
    item_id: 642,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 643,
    max_extra: 1,
    price: 600000
  }, {
    item_id: 644,
    max_extra: 1,
    price: 900000
  }, {
    item_id: 1742,
    max_extra: 1,
    price: 900000
  }, {
    item_id: 645,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 646,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 647,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 648,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 649,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 650,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 651,
    max_extra: 1,
    price: 500000
  }, {
    item_id: 652,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 653,
    max_extra: 1,
    price: 1500000
  }, {
    item_id: 655,
    max_extra: 2,
    price: 50000
  }, {
    item_id: 656,
    max_extra: 0,
    price: 1000000
  }, {
    item_id: 657,
    max_extra: 0,
    price: 300000
  }, {
    item_id: 658,
    max_extra: 1,
    price: 25000
  }, {
    item_id: 659,
    max_extra: 9,
    price: 20000
  }, {
    item_id: 661,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 662,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 663,
    max_extra: 1,
    price: 1000000
  }, {
    item_id: 664,
    max_extra: 1,
    price: 300000
  }, {
    item_id: 665,
    max_extra: 0,
    price: 2000000
  }, {
    item_id: 666,
    max_extra: 0,
    price: 2000000
  }, {
    item_id: 1743,
    max_extra: 0,
    price: 1500000
  }],
  1: [{
    item_id: 861,
    max_extra: 3,
    price: 3000000
  }, {
    item_id: 862,
    max_extra: 2,
    price: 2000000
  }, {
    item_id: 863,
    max_extra: 2,
    price: 300000
  }, {
    item_id: 864,
    max_extra: 2,
    price: 2000000
  }, {
    item_id: 865,
    max_extra: 2,
    price: 1000000
  }, {
    item_id: 866,
    max_extra: 2,
    price: 1500000
  }, {
    item_id: 867,
    max_extra: 2,
    price: 1100000
  }, {
    item_id: 868,
    max_extra: 2,
    price: 1000000
  }, {
    item_id: 869,
    max_extra: 2,
    price: 500000
  }, {
    item_id: 870,
    max_extra: 0,
    price: 300000
  }, {
    item_id: 871,
    max_extra: 0,
    price: 500000
  }, {
    item_id: 872,
    max_extra: 0,
    price: 500000
  }, {
    item_id: 873,
    max_extra: 0,
    price: 700000
  }, {
    item_id: 874,
    max_extra: 0,
    price: 500000
  }, {
    item_id: 875,
    max_extra: 0,
    price: 1500000
  }, {
    item_id: 876,
    max_extra: 0,
    price: 1500000
  }, {
    item_id: 877,
    max_extra: 3,
    price: 1000000
  }],
  2: [{
    item_id: 1781,
    max_extra: 0,
    price: 200000
  }, {
    item_id: 1782,
    max_extra: 0,
    price: 220000
  }, {
    item_id: 1783,
    max_extra: 0,
    price: 230000
  }, {
    item_id: 1784,
    max_extra: 2,
    price: 240000
  }, {
    item_id: 1785,
    max_extra: 2,
    price: 250000
  }, {
    item_id: 1786,
    max_extra: 2,
    price: 260000
  }, {
    item_id: 1787,
    max_extra: 2,
    price: 200000
  }, {
    item_id: 1788,
    max_extra: 2,
    price: 190000
  }, {
    item_id: 1789,
    max_extra: 2,
    price: 210000
  }, {
    item_id: 1790,
    max_extra: 2,
    price: 195000
  }, {
    item_id: 1791,
    max_extra: 0,
    price: 230000
  }, {
    item_id: 1792,
    max_extra: 0,
    price: 210000
  }, {
    item_id: 1793,
    max_extra: 0,
    price: 230000
  }, {
    item_id: 1794,
    max_extra: 0,
    price: 240000
  }, {
    item_id: 1795,
    max_extra: 0,
    price: 240000
  }, {
    item_id: 1796,
    max_extra: 1,
    price: 180000
  }, {
    item_id: 1797,
    max_extra: 3,
    price: 250000
  }, {
    item_id: 1798,
    max_extra: 3,
    price: 250000
  }, {
    item_id: 1799,
    max_extra: 3,
    price: 250000
  }]
}];
global.nightvisionAllowed = false;
global.nightvisionState = false;
global.toggleNightvision = function (_0x8d48cc) {
  mp.game.graphics.setNightvision(_0x8d48cc);
};
mp.events.add("Client_SetNightvisionActive", _0x5b81a9 => {
  nightvisionAllowed = _0x5b81a9;
  if (_0x5b81a9) {
    HintShow(language["Используйте клавишу N, чтобы активировать ночное зрение"][curr_lang]);
  } else {
    toggleNightvision(false);
  }
});
mp.keys.bind(78, false, function () {
  if (nightvisionAllowed && !chatActive && !dialog_window && loggedin && GlobalCheck() != 1) {
    nightvisionState = !nightvisionState;
    toggleNightvision(nightvisionState);
  }
});