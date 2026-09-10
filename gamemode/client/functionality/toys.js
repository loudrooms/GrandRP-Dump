global.bAtClawmachine = false;
global.clawmachineDesignOpened = false;
global.toyInHand = false;
const CLAWMACHINES_POSITIONS = [{
  position: new mp.Vector3(-1314.224, -1328.695, 3.796),
  rotation: new mp.Vector3(0, 0, 20)
}, {
  position: new mp.Vector3(294.671, -596.309, 42.284),
  rotation: new mp.Vector3(0, 0, 250)
}, {
  position: new mp.Vector3(116.423, -1306.288, 28.232),
  rotation: new mp.Vector3(0, 0, 30)
}, {
  position: new mp.Vector3(-1067.684, -255.401, 36.836),
  rotation: new mp.Vector3(0, 0, 25)
}, {
  position: new mp.Vector3(123.328, 87.237, 80.457),
  rotation: new mp.Vector3(0, 0, 160)
}, {
  position: new mp.Vector3(-1677.09, -1134.45, 12.0597),
  rotation: new mp.Vector3(0, 0, 156)
}, {
  position: new mp.Vector3(-1661.73, -1102.08, 12.154),
  rotation: new mp.Vector3(0, 0, 46)
}, {
  position: new mp.Vector3(-1637.59, -1118.41, 11.991),
  rotation: new mp.Vector3(0, 0, -129)
}, {
  position: new mp.Vector3(-1647.32, -1095.52, 12.0835),
  rotation: new mp.Vector3(0, 0, 72)
}];
const CLAWMACHINE_OBJECT = "noone_carebearmachine_anim_props";
CLAWMACHINES_POSITIONS.forEach((_0x451b62, _0x524acf) => {
  mp.objects.new(mp.game.joaat(CLAWMACHINE_OBJECT), _0x451b62.position, {
    rotation: _0x451b62.rotation,
    alpha: 255,
    dimension: 0
  });
  mp.colshapes.newSphere(_0x451b62.position.x, _0x451b62.position.y, _0x451b62.position.z, 2).bClawmachine = _0x524acf + 1;
});
mp.events.add("playerEnterColshape", _0x9de1b2 => {
  if (_0x9de1b2 && _0x9de1b2.bClawmachine) {
    mp.events.call("Client_playSound", "SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    bAtClawmachine = _0x9de1b2.bClawmachine;
    main_browser.execute("APPS.state.hud.interact = true;");
  }
});
mp.events.add("playerExitColshape", _0x43a8d4 => {
  if (_0x43a8d4 && _0x43a8d4.bClawmachine) {
    bAtClawmachine = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
mp.events.add("Client_PlayClawmachine", _0x199285 => {
  if (!clawmachineDesignOpened && !!loggedin && !chatActive) {
    clawmachineDesignOpened = true;
    main_browser.execute("APPS.state.toyMachineMiniGame.result = " + _0x199285 + ";");
    main_browser.execute("APPS.state.toyMachineMiniGame.show = true;");
    SwitchHUDToDesign(true);
  }
});
global.closeClawmachineDesign = function () {
  if (clawmachineDesignOpened) {
    clawmachineDesignOpened = false;
    SwitchHUDToDesign(false);
    main_browser.execute("APPS.state.toyMachineMiniGame.show = false;");
  }
};
mp.events.add("Client_FinishClawmachineGame", () => {
  closeClawmachineDesign();
  mp.events.callRemote("Server_FinishClawmachineGame");
  if (bAtClawmachine) {
    main_browser.execute("APPS.state.hud.interact = true;");
  }
});
mp.events.add("Client_ToyInHandState", _0x55a029 => {
  toyInHand = _0x55a029;
  if (_0x55a029) {
    HintShow(language["Используйте G меню, чтобы подарить другому игроку. ESC - чтобы убрать игрушку из рук"][curr_lang]);
  }
});