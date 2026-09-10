const ResourceListTemplate = [{
  item_id: 1252,
  lang_key: "Медь",
  category: "mine"
}, {
  item_id: 1253,
  lang_key: "Изумруд",
  category: "mine"
}, {
  item_id: 1254,
  lang_key: "Рубин",
  category: "mine"
}, {
  item_id: 1255,
  lang_key: "Алмаз",
  category: "mine"
}, {
  item_id: 1310,
  lang_key: "Бензин",
  category: "oil"
}, {
  item_id: 1311,
  lang_key: "Солярка",
  category: "oil"
}, {
  item_id: 1312,
  lang_key: "Керосин",
  category: "oil"
}, {
  item_id: 1636,
  lang_key: "Фальшивые деньги",
  category: "other"
}, {
  item_id: 1719,
  lang_key: "Окунь",
  category: "fish"
}, {
  item_id: 1720,
  lang_key: "Карп",
  category: "fish"
}, {
  item_id: 1721,
  lang_key: "Форель",
  category: "fish"
}, {
  item_id: 1722,
  lang_key: "Лосось",
  category: "fish"
}, {
  item_id: 2301,
  lang_key: "Жемчуг",
  category: "fish"
}, {
  item_id: 2417,
  lang_key: "Шкура животного",
  category: "fish"
}, {
  item_id: 7091,
  lang_key: "Скат",
  category: "fish"
}, {
  item_id: 7092,
  lang_key: "Косатка",
  category: "fish"
}, {
  item_id: 7093,
  lang_key: "Мегалодон",
  category: "fish"
}, {
  item_id: 7094,
  lang_key: "Горбатый кит",
  category: "fish"
}, {
  item_id: 7261,
  lang_key: "Обсидиан",
  category: "mine"
}, {
  item_id: 7262,
  lang_key: "Магмовый камень",
  category: "mine"
}];
function buildResourceList(_0x5bbf8a) {
  return ResourceListTemplate.map((_0x560004, _0xba29fc) => {
    const _0x39286f = _0x5bbf8a && _0x5bbf8a[_0xba29fc] ? {
      quantity: _0x5bbf8a[_0xba29fc].quantity,
      price: _0x5bbf8a[_0xba29fc].price,
      last_price: _0x5bbf8a[_0xba29fc].last_price,
      last_price2: _0x5bbf8a[_0xba29fc].last_price2,
      last_price3: _0x5bbf8a[_0xba29fc].last_price3
    } : {
      quantity: 0,
      price: 0,
      last_price: 0,
      last_price2: 0,
      last_price3: 0
    };
    return {
      item_id: _0x560004.item_id,
      category: _0x560004.category,
      name: language[_0x560004.lang_key] ? language[_0x560004.lang_key][curr_lang] : _0x560004.lang_key,
      ..._0x39286f
    };
  });
}
let ResourceList = buildResourceList(null);
mp.events.add("Client_LanguageChanged", () => {
  ResourceList = buildResourceList(ResourceList);
  if (ResourceSellerOpened && typeof main_browser != "undefined" && main_browser) {
    main_browser.execute("APPS.state.resellers.resource_list = " + JSON.stringify(ResourceList) + ";");
  }
});
global.ResourceSellerOpened = false;
let last_price_arr = [];
mp.events.add("Client_OpenResourceReseller", (_0x316e8b, _0x4b9641, _0x6727f6, _0x96eac2, _0x13fb15, _0xcbb7f7 = 0) => {
  if (ResourceSellerOpened) {
    return;
  }
  last_price_arr = _0x6727f6;
  _0xcbb7f7 = parseInt(_0xcbb7f7) || 0;
  for (let _0x4a867c = 0; _0x4a867c < ResourceList.length; _0x4a867c++) {
    ResourceList[_0x4a867c].quantity = _0x4b9641[_0x4a867c];
    ResourceList[_0x4a867c].price = _0x316e8b[_0x4a867c];
    if (_0x6727f6.length == 1) {
      ResourceList[_0x4a867c].last_price = _0x6727f6[0][_0x4a867c];
    } else if (_0x6727f6.length == 2) {
      ResourceList[_0x4a867c].last_price = _0x6727f6[0][_0x4a867c];
      ResourceList[_0x4a867c].last_price2 = _0x6727f6[1][_0x4a867c];
    } else if (_0x6727f6.length == 3) {
      ResourceList[_0x4a867c].last_price = _0x6727f6[0][_0x4a867c];
      ResourceList[_0x4a867c].last_price2 = _0x6727f6[1][_0x4a867c];
      ResourceList[_0x4a867c].last_price3 = _0x6727f6[2][_0x4a867c];
    }
  }
  ResourceSellerOpened = true;
  SwitchHUDToDesign(true);
  const _0x2613e3 = "{\n        \"resource_list\":" + JSON.stringify(ResourceList) + ",\n        \"day_online\":" + _0x96eac2 + ",\n        \"number\":" + _0x13fb15 + ",\n        \"vip_bonus\":" + _0xcbb7f7 + ",\n        \"show\":true\n    }";
  main_browser.execute("APPS.state.resellers = " + _0x2613e3);
});
mp.events.add("Client_CloseResourceSeller", () => {
  CloseResourceSeller();
});
global.CloseResourceSeller = function () {
  if (ResourceSellerOpened) {
    main_browser.execute("APPS.state.resellers.show = false");
    ResourceSellerOpened = false;
    SwitchHUDToDesign(false);
    if (story_quest_progress == 5) {
      mp.events.callRemote("Server_CloseResourceSeller");
    }
  }
};
mp.events.add("Client_CloseResourceSellerWithoutMouse", () => {
  if (ResourceSellerOpened) {
    main_browser.execute("APPS.state.resellers.show = false");
    ResourceSellerOpened = false;
  }
});
mp.events.add("Client_SellResourcesToReseller", (_0x2c3f51, _0x28080f) => {
  mp.events.callRemote("Server_SellResourcesToReseller", _0x2c3f51, _0x28080f);
});
mp.events.add("Client_UpdateResourceSeller", (_0x49f44e, _0x5b449a) => {
  if (ResourceSellerOpened) {
    main_browser.execute("this.AppComponents.resellers.updateResourceQuality(" + _0x49f44e + ", " + _0x5b449a + ");");
  }
});