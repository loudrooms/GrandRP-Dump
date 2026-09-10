const MODULES_OBJECT_HASHES = ["veloxsy_module_head", "veloxsy_module_storage", "veloxsy_module_repair", "veloxsy_module_ammo", "veloxsy_module_cannabis", "veloxsy_module_cocain", "veloxsy_module_wood", "veloxsy_module_candy"].map(_0x1dd646 => mp.game.joaat(_0x1dd646));
const MAIN_MODULE_OBJECT_HASH = mp.game.joaat("veloxsy_module_head");
const MODULES_OBJECT_HASHES_MAX_HEALTH = {
  [MODULES_OBJECT_HASHES[0]]: 30,
  [MODULES_OBJECT_HASHES[1]]: 30,
  [MODULES_OBJECT_HASHES[2]]: 30,
  [MODULES_OBJECT_HASHES[3]]: 30,
  [MODULES_OBJECT_HASHES[4]]: 30,
  [MODULES_OBJECT_HASHES[5]]: 30,
  [MODULES_OBJECT_HASHES[6]]: 30,
  [MODULES_OBJECT_HASHES[7]]: 30
};
const MODULES_LANG_KEYS = ["Главный модуль", "Подмодуль Склад", "Подмодуль Починка", "Подмодуль Патроны ШВ", "Подмодуль Марихуана", "Подмодуль Кокаин", "Подмодуль Древесина", "Подмодуль Новогодних конфет"];
function buildModulesObjectNames() {
  const _0x1dfbd3 = {};
  for (let _0x489d0a = 0; _0x489d0a < MODULES_OBJECT_HASHES.length; _0x489d0a++) {
    _0x1dfbd3[MODULES_OBJECT_HASHES[_0x489d0a]] = language[MODULES_LANG_KEYS[_0x489d0a]] ? language[MODULES_LANG_KEYS[_0x489d0a]][curr_lang] : MODULES_LANG_KEYS[_0x489d0a];
  }
  return _0x1dfbd3;
}
let MODULES_OBJECT_NAMES = buildModulesObjectNames();
mp.events.add("Client_LanguageChanged", () => {
  MODULES_OBJECT_NAMES = buildModulesObjectNames();
});
const MAX_DISTANCE_FROM_MAIN_MODULE = 15;
global.contrabandMachineOpened = false;
let contrabandMachineSearchBlip;
let contrabandMachineSearchTimeout;
let contrabandMachineOpenedPage = null;
function finishRepairMinigame(_0x4946e8) {
  mp.events.callRemote("Server_ContrabandMachineRepairMinigameFinish", _0x4946e8);
}
function isMainModuleObject(_0x191863) {
  return _0x191863.model === MAIN_MODULE_OBJECT_HASH;
}
function hasSubModulesNearby(_0x442a51) {
  let _0x95f930 = false;
  try {
    mp.objects.forEachInRange(_0x442a51, 16, _0x24f2ea => {
      if (!isMainModuleObject(_0x24f2ea) && MODULES_OBJECT_HASHES.includes(_0x24f2ea.model)) {
        _0x95f930 = true;
        throw new Error("Sub modules found");
      }
    });
  } catch (_0x40037a) {}
  return _0x95f930;
}
mp.events.add("Client_OpenContrabandMachineMainMenu", (_0x5df2f9, _0x15f8a7) => {
  contrabandMachineOpenedPage = "main";
  main_browser.execute("\n        this.AppComponents.contrabandMachine.ownerId = " + _0x5df2f9 + ";\n        this.AppComponents.contrabandMachine.modules = " + JSON.stringify(_0x15f8a7) + ";\n        this.AppComponents.contrabandMachine.currentPage = '" + contrabandMachineOpenedPage + "';\n    ");
  contrabandMachineOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_OpenContrabandMachineSubMenu", (_0x326f99, _0x3ec3ae) => {
  contrabandMachineOpenedPage = "module";
  main_browser.execute("\n        this.AppComponents.contrabandMachine.ownerId = " + _0x326f99 + ";\n        this.AppComponents.contrabandMachine.module = " + JSON.stringify(_0x3ec3ae) + ";\n        this.AppComponents.contrabandMachine.currentPage = '" + contrabandMachineOpenedPage + "';\n    ");
  contrabandMachineOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_ContrabandMachineUpdateModule", _0xb6105f => {
  main_browser.execute("\n        this.AppComponents.contrabandMachine.updateModule(" + JSON.stringify(_0xb6105f) + ");\n    ");
});
mp.events.add("Client_OpenContrabandMachineMiniGameMenu", _0x326793 => {
  contrabandMachineOpenedPage = "mini-game";
  main_browser.execute("\n        this.AppComponents.contrabandMachine.currentPage = '" + contrabandMachineOpenedPage + "';\n    ");
  contrabandMachineOpened = true;
  SwitchHUDToDesign(true);
});
global.closeContrabandMachineDesign = function (_0x448586 = true) {
  if (contrabandMachineOpened) {
    main_browser.execute("this.AppComponents.contrabandMachine.currentPage = null;");
    contrabandMachineOpened = false;
    SwitchHUDToDesign(false);
    if (_0x448586 && contrabandMachineOpenedPage === "mini-game") {
      finishRepairMinigame(false);
    }
    contrabandMachineOpenedPage = null;
  }
};
mp.events.add("Client_ContrabandMachineRepairMinigameFinish", _0x4e6027 => {
  finishRepairMinigame(_0x4e6027);
  closeContrabandMachineDesign(false);
});
mp.events.add("Client_ContrabandMachineRepair", (_0x1f494b, _0x512b9b) => {
  mp.events.callRemote("Server_ContrabandMachineRepair", _0x1f494b, _0x512b9b);
});
mp.events.add("Client_ContrabandMachineCollectProduct", (_0x57b585, _0x2575ee) => {
  mp.events.callRemote("Server_ContrabandMachineCollectProduct", _0x57b585, _0x2575ee);
});
mp.events.add("Client_ContrabandMachineOpenStorage", (_0x415335, _0x598156) => {
  global.closeContrabandMachineDesign();
  mp.events.callRemote("Server_ContrabandMachineOpenStorage", _0x415335, _0x598156);
});
mp.events.add("Client_ContrabandMachineRequestUpdateModuleStatus", (_0x5454a3, _0x2def08) => {
  mp.events.callRemote("Server_ContrabandMachineRequestUpdateModuleStatus", _0x5454a3, _0x2def08);
});
mp.events.add("Client_ContrabandMachineOpenCraftModuleMenu", _0x48c62b => {
  global.closeContrabandMachineDesign();
  setTimeout(() => {
    mp.events.callRemote("Server_OrderCraftItems", _0x48c62b);
  }, 300);
});
mp.events.add("playerWeaponShot", (_0x3f2c89, _0x4c4482) => {
  if (currentWeapon() === 101631238) {
    return;
  }
  const _0x20b174 = mp.game.player.getEntityIsFreeAimingAt();
  if (_0x20b174 && _0x20b174.model && MODULES_OBJECT_HASHES.includes(_0x20b174.model)) {
    if (isMainModuleObject(_0x20b174) && hasSubModulesNearby(_0x20b174.position)) {
      return ShowNotification(language["Главный модуль нельзя уничтожить, пока существуют подмодули"][curr_lang], 6);
    }
    if (typeof _0x20b174.healthPoints != "number") {
      _0x20b174.healthPoints = MODULES_OBJECT_HASHES_MAX_HEALTH[_0x20b174.model];
    }
    if (!(_0x20b174.healthPoints <= 0)) {
      _0x20b174.healthPoints--;
      updateHealthBar(_0x20b174.healthPoints, MODULES_OBJECT_HASHES_MAX_HEALTH[_0x20b174.model], MODULES_OBJECT_NAMES[_0x20b174.model]);
      if (_0x20b174.healthPoints % 10 == 0) {
        mp.events.callRemote("Server_ContrabandMachineDamageModule", _0x20b174);
      }
    }
  }
});
mp.events.add("Client_ContrabandMachineUpdateModuleHealth", (_0xd2d9ac, _0x1f3cae) => {
  if (mp.objects.exists(_0xd2d9ac)) {
    _0xd2d9ac.healthPoints = _0x1f3cae;
  }
});
mp.events.add("Client_ShowContrabandMachinePosition", _0x207b1a => {
  if (contrabandMachineSearchBlip != null) {
    mp.game.ui.removeBlip(contrabandMachineSearchBlip);
    contrabandMachineSearchBlip = undefined;
  }
  if (contrabandMachineSearchTimeout != null) {
    clearTimeout(contrabandMachineSearchTimeout);
    contrabandMachineSearchTimeout = undefined;
  }
  let _0x5ed1db = randomInteger(-80, 80);
  let _0x5e55bb = randomInteger(-80, 80);
  const _0x3d8d8d = new mp.Vector3(_0x207b1a.x + _0x5ed1db, _0x207b1a.y + _0x5e55bb, 0);
  const _0x3dfce8 = parseFloat(100);
  SetGPSLocation(_0x3d8d8d.x, _0x3d8d8d.y, _0x3d8d8d.z, true, 0, _0x3dfce8);
  contrabandMachineSearchBlip = mp.game.ui.addBlipForArea(_0x3d8d8d.x, _0x3d8d8d.y, _0x3d8d8d.z, _0x3dfce8 * 2, _0x3dfce8 * 2);
  mp.game.ui.setBlipSprite(contrabandMachineSearchBlip, 5);
  mp.game.ui.setBlipAlpha(contrabandMachineSearchBlip, 175);
  mp.game.ui.setBlipColour(contrabandMachineSearchBlip, 37);
  mp.game.ui.setBlipSquaredRotation(contrabandMachineSearchBlip, 0);
  mp.game.ui.setBlipRotation(contrabandMachineSearchBlip, Math.ceil(0));
  mp.game.ui.setBlipAsShortRange(contrabandMachineSearchBlip, true);
  contrabandMachineSearchTimeout = setTimeout(() => {
    mp.game.ui.notifications.show(language["Paдap зaкoнчил cлeжeниe зa плантацией"][curr_lang], false, 0, 2);
    if (contrabandMachineSearchBlip != null) {
      mp.game.ui.removeBlip(contrabandMachineSearchBlip);
      contrabandMachineSearchBlip = undefined;
    }
    clearTimeout(contrabandMachineSearchTimeout);
    contrabandMachineSearchTimeout = undefined;
  }, 300000);
});