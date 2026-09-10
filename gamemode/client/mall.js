global.MallSidePickOpened = false;
mp.events.add("Client_OpenMallSidePick", (_0x1986eb, _0x5192de, _0x4c9d42) => {
  if (GlobalCheck() == 1 && MallSidePickOpened == 0) {
    return;
  }
  const _0x475cfa = "{\"attacker_count\":" + _0x1986eb + ",\"defender_count\":" + _0x5192de + ",\"max_count\":" + _0x4c9d42 + ",\"in_use\":false,\"show\":true}";
  main_browser.execute("APPS.state.mbwar = " + _0x475cfa);
  MallSidePickOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMallSidePick = function () {
  if (MallSidePickOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.mbwar.show = false;");
    MallSidePickOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ResetMallSideCaptcha", (_0x10f4ec = false) => {
  main_browser.execute("APPS.state.mbwar.in_use = " + _0x10f4ec + ";");
});
mp.events.add("Client_CloseMallSidePick", () => {
  CloseMallSidePick();
});
mp.events.add("Client_GoToMallPage", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      mp.events.callRemote("Server_GoToMallPage");
    }
  }
});
mp.events.add("Client_ChooseMallSide", _0x1d997d => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChooseMallSide", _0x1d997d);
  }
});
let mallwar_blips = null;
mp.events.add("Client_SetMallWarBlips", () => {
  mallwar_blips ||= mp.blips.new(zone_blips, new mp.Vector3(-556.141, -601.483, 0), {
    radius: parseFloat(70),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_HideMallArea", () => {
  if (mallwar_blips) {
    mallwar_blips.destroy();
    mallwar_blips = null;
  }
  main_browser.execute("APPS.state.hud.family_show = false;");
});
let can_plant_mall_bomb = false;
mp.events.add("Client_CanPlantMallBomb", () => {
  can_plant_mall_bomb = true;
  HintShow(language["Чтобы заложить бомбу нажмите H"][curr_lang]);
  mp.keys.bind(72, false, function () {
    if (loggedin && !chatActive && can_plant_mall_bomb == 1) {
      mp.events.callRemote("Server_PlantMallBomb");
    }
  });
});
global.at_mall_bomb = false;
mp.events.add("Client_MallBombInteract", _0x938b2b => {
  if (_0x938b2b == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_mall_bomb = _0x938b2b;
});