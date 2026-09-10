global.FamilyWarOpened = false;
mp.events.add("Client_OpenFamilyWarMenu", (_0x395776, _0x592fc0, _0x36623b) => {
  CloseFamilyMenu();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x9c2b59 = "{\"family_json\":" + JSON.stringify(_0x395776) + ",\"month\":" + _0x592fc0 + ",\"admin\":" + _0x36623b + ",\"show\":true}";
  main_browser.execute("APPS.state.family_fight = " + _0x9c2b59);
  FamilyWarOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseFamilyWarMenu = function () {
  if (FamilyWarOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.family_fight.show = false;");
    FamilyWarOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_OpenFamilyMenu");
  }
};
mp.events.add("Client_GoFamWar", () => {
  if (FamilyWarOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GoFamWar");
    }
  }
});
mp.events.add("Client_CloseFamWarMenu", () => {
  CloseFamilyWarMenu();
});
mp.events.add("Client_ChangeFamWarTeam", (_0x2da495, _0x1d6d77) => {
  if (FamilyWarOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeFamWarTeam", _0x2da495, _0x1d6d77);
    }
  }
});
let famwar_marker = null;
let famwar_shape = null;
let famwar_blips = null;
global.at_famwar = false;
global.cant_use_weapon_familywar = false;
const FAMWAR_DATA = {
  famWarPosition: new mp.Vector3(2739.457, 1551.923, 24.501),
  famWarRadius: 200,
  famWarTime: 900
};
mp.events.add("Client_LoadFamilyWarTerritory", _0x5a9245 => {
  if (famwar_marker == null) {
    famwar_marker = mp.markers.new(1, FAMWAR_DATA.famWarPosition, FAMWAR_DATA.famWarRadius * 2, {
      color: [255, 255, 0, 75],
      visible: true,
      dimension: _0x5a9245
    });
    famwar_shape = mp.colshapes.newSphere(FAMWAR_DATA.famWarPosition.x, FAMWAR_DATA.famWarPosition.y, FAMWAR_DATA.famWarPosition.z, FAMWAR_DATA.famWarRadius, _0x5a9245);
    famwar_shape.is_famwar_territory = true;
    famwar_blips = mp.blips.new(zone_blips, new mp.Vector3(FAMWAR_DATA.famWarPosition.x, FAMWAR_DATA.famWarPosition.y, 0), {
      radius: parseFloat(FAMWAR_DATA.famWarRadius),
      alpha: parseFloat(100),
      color: parseFloat(zone_color),
      dimension: -1
    });
    cant_use_weapon_familywar = true;
    at_famwar = true;
  }
});
mp.events.add("playerExitColshape", _0x3f1310 => {
  if (mp.colshapes.exists(_0x3f1310) && _0x3f1310.is_famwar_territory == 1) {
    mp.events.call("Client_StartExitFamWarTerritory", 9);
  }
});
mp.events.add("playerEnterColshape", _0x4db581 => {
  if (mp.colshapes.exists(_0x4db581) && _0x4db581.is_famwar_territory == 1) {
    mp.events.call("Client_ClearAreaExitInterval");
  }
});
mp.events.add("Client_ChangeFamilyWarDamageState", _0x3b6ed4 => {
  cant_use_weapon_familywar = _0x3b6ed4;
});
mp.events.add("Client_DeleteFamilyWarTerritory", () => {
  cant_use_weapon_familywar = false;
  at_famwar = false;
  if (famwar_marker) {
    famwar_marker.destroy();
    famwar_marker = null;
  }
  if (famwar_shape) {
    famwar_shape.destroy();
    famwar_shape = null;
  }
  if (famwar_blips) {
    famwar_blips.destroy();
    famwar_blips = null;
  }
});