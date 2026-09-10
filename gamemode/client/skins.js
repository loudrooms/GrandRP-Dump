global.SkinsOpened = false;
mp.events.add("Client_OpenSkinsMenu", (_0x352ec8, _0x2a5b73, _0x1d3058, _0xe92c5b, _0x91ac0, _0x2cd8e1, _0x5d4207, _0x2cbf74, _0x3ff300, _0x297133 = "") => {
  if (invOpen) {
    CloseInv();
  }
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x57bb6c = "{\n        \"active_skins\":[" + _0x352ec8 + "],\n        \"bought_skin\":" + JSON.stringify(_0x2a5b73) + ",\n        \"armorSkins\": [" + _0x91ac0 + "],\n        \"influence_score\":" + _0x1d3058 + ",\n        \"fam_reit\":" + _0xe92c5b + ",\n        \"backpack\": " + JSON.stringify(_0x5d4207) + ",\n        \"balance\": " + JSON.stringify(_0x2cd8e1) + ",\n        \"favorite_skins\": " + JSON.stringify(mp.storage.data.favoriteSkins) + ",\n        \"armour_skin\": " + _0x2cbf74 + ",\n        \"show\":true\n    }";
  main_browser.execute("APPS.state.skins = " + _0x57bb6c);
  SkinsOpened = true;
  if (_0x3ff300 && _0x3ff300 !== "") {
    main_browser.execute("AppComponents.skins.selectCategory(\"" + _0x3ff300 + "\");");
    if (_0x297133 !== "") {
      setTimeout(() => {
        main_browser.execute("AppComponents.skins.scrollToItem(\"" + _0x297133 + "\");");
        setTimeout(() => {
          if (!SkinsOpened) {
            return;
          }
          let _0x36e2f7 = language["Скин на рюкзак"][curr_lang];
          if (_0x3ff300 === "armor") {
            _0x36e2f7 = language["Скин на бронежилет"][curr_lang];
          }
          showFocusHints([{
            element: "needed-skin",
            text: _0x36e2f7,
            infoPosition: ["top"]
          }]);
        }, 400);
      }, 200);
    }
  }
  SwitchHUDToDesign(true);
});
global.CloseSkinsMenu = function () {
  if (SkinsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.skins.show = false;");
    SkinsOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_UpdateChosenSkins", _0x58c532 => {
  if (SkinsOpened) {
    main_browser.execute("APPS.state.skins.active_skins = [" + _0x58c532 + "];");
  }
});
mp.events.add("Client_UpdateChosenArmour", _0x152251 => {
  if (SkinsOpened) {
    main_browser.execute("APPS.state.skins.armour_skin = " + _0x152251 + ";");
  }
});
mp.events.add("Client_UpdateBoughtSkins", _0x2699f1 => {
  if (SkinsOpened) {
    main_browser.execute("APPS.state.skins.bought_skin = " + JSON.stringify(_0x2699f1) + ";");
  }
});
mp.events.add("Client_SetWeaponSkin", (_0x560f4d, _0xc29d35) => {
  if (SkinsOpened) {
    mp.events.callRemote("Server_SetWeaponSkin", _0x560f4d, _0xc29d35);
  }
});
mp.events.add("Client_SetArmourSkin", _0x1e17e4 => {
  if (SkinsOpened) {
    mp.events.callRemote("Server_SetArmourSkin", _0x1e17e4);
  }
});
mp.events.add("Client_BuyWeaponSkin", (_0x2a6c3b, _0x76f550) => {
  if (SkinsOpened) {
    mp.events.callRemote("Server_BuyWeaponSkin", _0x2a6c3b, _0x76f550);
  }
});
mp.events.add("Client_OpenDonateSets", () => {
  if (SkinsOpened) {
    mp.events.callRemote("Server_OpenDonateSets");
  }
});
mp.events.add("Client_CloseSkinMenu", () => {
  CloseSkinsMenu();
});
mp.events.add("Client_PaintWeaponSkin", (_0x490cd3, _0x61f1a4) => {
  if (SkinsOpened) {
    mp.events.callRemote("Server_PaintWeaponSkin", _0x490cd3, _0x61f1a4);
  }
});
mp.events.add("Client_OpenArmorRouletteFromSkins", () => {
  if (SkinsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseSkinsMenu();
      mp.events.callRemote("Server_SwitchToDonateRoulette", 2);
    }
  }
});
mp.events.add("Client_OpenRouletteFromSkins", _0x558af2 => {
  if (SkinsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseSkinsMenu();
      if (_0x558af2 == "gun") {
        mp.events.callRemote("Server_SwitchToDonateRoulette", 1);
      } else if (_0x558af2 == "armor") {
        mp.events.callRemote("Server_SwitchToDonateRoulette", 2);
      } else if (_0x558af2 == "backpack") {
        mp.events.callRemote("Server_SwitchToDonateRoulette", 3);
      }
    }
  }
});
mp.events.add("Client_GotoBackpacksInDonateFromSkins", () => {
  if (SkinsOpened && loggedin && !chatActive) {
    CloseSkinsMenu(false);
    mp.events.callRemote("Server_GotoBackpacksInDonate");
  }
});
mp.events.add("Client_UpdateSkinMenuBalance", (_0x1de479, _0xfae6ca) => {
  if (SkinsOpened) {
    switch (_0x1de479) {
      case "money":
        main_browser.execute("APPS.state.skins.balance.money = " + _0xfae6ca + ";");
        break;
      case "plans":
        main_browser.execute("APPS.state.skins.balance.plans = " + _0xfae6ca + ";");
        break;
      case "spray":
        main_browser.execute("APPS.state.skins.balance.sprays = " + _0xfae6ca + ";");
    }
  }
});
mp.events.add("Client_ToggleFavoriteSkin", (_0x566451, _0x2182f7, _0x22532d) => {
  if (!SkinsOpened) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  let _0x97efbf = mp.storage.data.favoriteSkins;
  switch (_0x566451) {
    case "weapons":
      const _0xfb9932 = _0x97efbf.weapons[_0x22532d].indexOf(_0x2182f7);
      if (_0xfb9932 === -1) {
        _0x97efbf.weapons[_0x22532d].push(_0x2182f7);
      } else {
        _0x97efbf.weapons[_0x22532d].splice(_0xfb9932, 1);
      }
      break;
    case "backpacks":
      const _0x5b3777 = _0x97efbf.backpacks.findIndex(_0x5cc7f5 => _0x5cc7f5[0] === _0x2182f7 && _0x5cc7f5[1] === _0x22532d);
      if (_0x5b3777 === -1) {
        _0x97efbf.backpacks.push([_0x2182f7, _0x22532d]);
      } else {
        _0x97efbf.backpacks.splice(_0x5b3777, 1);
      }
      break;
    case "armor":
      const _0x51ad48 = _0x97efbf.armor.indexOf(_0x2182f7);
      if (_0x51ad48 === -1) {
        _0x97efbf.armor.push(_0x2182f7);
      } else {
        _0x97efbf.armor.splice(_0x51ad48, 1);
      }
  }
  mp.storage.data.favoriteSkins = _0x97efbf;
  main_browser.execute("\n        APPS.state.skins.favorite_skins = " + JSON.stringify(_0x97efbf) + ";\n        AppComponents.skins.$forceUpdate();\n    ");
  mp.game.audio.playSoundFrontend(-1, "CANCEL", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
});
mp.events.add("Client_SetBackpackSkin", (_0x5eb269, _0x153632) => {
  if (SkinsOpened) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetBackpackSkin", _0x5eb269, _0x153632);
    }
  }
});
mp.events.add("Client_UpdateActiveSkin", _0x96d414 => {
  if (SkinsOpened) {
    mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    main_browser.execute("APPS.state.skins.backpack.active = " + _0x96d414 + ";");
    main_browser.execute("AppComponents.skins.$forceUpdate()");
  }
});
mp.events.add("Client_RestarFavoriteSkins", () => {
  mp.storage.data.favoriteSkins = {
    weapons: Array(12).fill().map(() => []),
    backpacks: [],
    armor: []
  };
  mp.storage.flush();
});