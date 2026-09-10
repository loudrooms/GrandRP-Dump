const PACMAN_URL = "cef/mini-games/pacman/index.html";
const PACMAN_ANIM = {
  DICT_MALE_RIGHT: "ANIM_HEIST@ARCADE@SHARED@MALE@RIGHT@",
  DICT_MALE_LEFT: "ANIM_HEIST@ARCADE@SHARED@MALE@LEFT@",
  DICT_FEMALE_RIGHT: "ANIM_HEIST@ARCADE@SHARED@FEMALE@RIGHT@",
  DICT_FEMALE_LEFT: "ANIM_HEIST@ARCADE@SHARED@FEMALE@LEFT@",
  ENTER: "enter",
  EXIT: "exit",
  IDLE: "idle",
  PLAY_IDLE: "PLAYIDLE",
  PLAY_IDLE2: "PLAYIDLE_V2",
  LOSE: "LOSE",
  LOSE_BIG: "LOSE_BIG",
  WIN: "WIN",
  WIN_BIG: "WIN_BIG"
};
const PACMAN_SCREEN = {
  WIDTH: 564,
  HEIGHT: 424
};
const PACMAN_DISABLED_CONTROLS = [1, 2, 22, 24, 25, 26, 36, 37, 44, 47, 53, 54, 68, 69, 70, 74, 81, 82, 83, 84, 85, 91, 92, 99, 100, 101, 102, 114, 140, 141, 142, 143, 157, 158, 159, 160, 161, 162, 163, 164, 165, 257, 263, 264, 282, 283, 284, 285, 337, 345, 346, 347];
const PACMAN_STATES = {
  IDLE: 0,
  ENTERING: 1,
  PLAYING: 2,
  EXITING: 3
};
const PACMAN_SEAT_OFFSET = {
  x: 0,
  y: -0.8,
  z: 1
};
const PACMAN_CABINET_MODEL = "ch_prop_arcade_penetrator_01a";
const PACMAN_MACHINES = [{
  x: -1611.47,
  y: -1044.66,
  z: 12.1228,
  heading: -40
}, {
  x: -1613.16,
  y: -1043.24,
  z: 12.1775,
  heading: -40
}, {
  x: -1614.77,
  y: -1041.89,
  z: 12.1543,
  heading: -40
}, {
  x: -1616.46,
  y: -1040.47,
  z: 12.1539,
  heading: -40
}, {
  x: -1690.51,
  y: -1113.51,
  z: 12.1523,
  heading: 49
}, {
  x: -1691.87,
  y: -1115.12,
  z: 12.1523,
  heading: 50
}, {
  x: -1693.3,
  y: -1116.8,
  z: 12.1523,
  heading: 50
}];
const PACMAN_SCREEN_POS = {
  x: 0.001,
  y: -0.081,
  z: 1.218
};
function pacmanGetScreenRotation(_0xda9a75) {
  return {
    x: 331.8,
    y: 0,
    z: _0xda9a75
  };
}
let pacmanState = PACMAN_STATES.IDLE;
let pacmanMachineIndex = -1;
let pacmanMachinePos = null;
let pacmanMachineHeading = 0;
let pacmanScreenPos = null;
let pacmanScreenRot = null;
let pacmanBrowser = null;
let pacmanSavedCamMode = 2;
let pacmanAnimDict = null;
let pacmanNearMachineIndex = -1;
let pacmanMachineObjects = [];
let needFleepScreen = false;
function pacmanLoadModel(_0x27419e) {
  return new Promise(_0x3bf086 => {
    const _0x57c7c7 = mp.game.joaat(_0x27419e);
    mp.game.streaming.requestModel(_0x57c7c7);
    const _0x27cb3c = setInterval(() => {
      if (mp.game.streaming.hasModelLoaded(_0x57c7c7)) {
        clearInterval(_0x27cb3c);
        _0x3bf086(_0x57c7c7);
      }
    }, 50);
  });
}
async function pacmanSpawnAllMachines() {
  try {
    pacmanDestroyAllMachines();
    const _0xa987b3 = await pacmanLoadModel(PACMAN_CABINET_MODEL);
    for (let _0x101286 = 0; _0x101286 < PACMAN_MACHINES.length; _0x101286++) {
      const _0x473208 = PACMAN_MACHINES[_0x101286];
      const _0x35dca3 = mp.objects.new(_0xa987b3, new mp.Vector3(_0x473208.x, _0x473208.y, _0x473208.z), {
        rotation: new mp.Vector3(0, 0, _0x473208.heading),
        alpha: 255,
        dimension: 0
      });
      if (_0x35dca3 && mp.objects.exists(_0x35dca3)) {
        _0x35dca3.freezePosition(true);
        pacmanMachineObjects.push(_0x35dca3);
      } else {
        pacmanMachineObjects.push(null);
      }
    }
    mp.game.streaming.setModelAsNoLongerNeeded(_0xa987b3);
  } catch (_0x5d4edb) {
    mp.gui.chat.push(String(_0x5d4edb));
  }
}
function pacmanDestroyAllMachines() {
  for (const _0x19a936 of pacmanMachineObjects) {
    if (_0x19a936 && mp.objects.exists(_0x19a936)) {
      _0x19a936.destroy();
    }
  }
  pacmanMachineObjects = [];
}
function pacmanGetMachineObject(_0xcda134) {
  const _0x54a2f7 = pacmanMachineObjects[_0xcda134];
  if (_0x54a2f7 && mp.objects.exists(_0x54a2f7)) {
    return _0x54a2f7;
  } else {
    return null;
  }
}
function pacmanIsPlayerMale() {
  return mp.players.local.model === mp.game.joaat("mp_m_freemode_01");
}
function pacmanGetAnimDict(_0x23a07f) {
  const _0x57530d = pacmanIsPlayerMale();
  if (_0x23a07f === "left") {
    if (_0x57530d) {
      return PACMAN_ANIM.DICT_MALE_LEFT;
    } else {
      return PACMAN_ANIM.DICT_FEMALE_LEFT;
    }
  } else if (_0x57530d) {
    return PACMAN_ANIM.DICT_MALE_RIGHT;
  } else {
    return PACMAN_ANIM.DICT_FEMALE_RIGHT;
  }
}
function pacmanRequestAnimDict(_0x593c74) {
  return new Promise(_0x5090dc => {
    mp.game.streaming.requestAnimDict(_0x593c74);
    const _0x894f6f = setInterval(() => {
      if (mp.game.streaming.hasAnimDictLoaded(_0x593c74)) {
        clearInterval(_0x894f6f);
        _0x5090dc();
      }
    }, 50);
  });
}
function pacmanWaitForAnimProgress(_0x2002ff, _0x33208e, _0x1bf2a7, _0x1ba0d3) {
  return new Promise(_0x545128 => {
    const _0x206715 = setInterval(() => {
      const _0x343993 = mp.game.entity.getAnimCurrentTime(_0x2002ff, _0x33208e, _0x1bf2a7);
      if (_0x343993 >= _0x1ba0d3 || _0x343993 === 0 && _0x1ba0d3 > 0) {
        clearInterval(_0x206715);
        _0x545128();
      }
    }, 50);
  });
}
function pacmanDisableControls() {
  for (const _0x3adb8e of PACMAN_DISABLED_CONTROLS) {
    mp.game.controls.disableControlAction(0, _0x3adb8e, true);
  }
  mp.game.controls.disableControlAction(0, 0, true);
}
function pacmanPlayReaction(_0x1dc2c3) {
  if (pacmanState !== PACMAN_STATES.PLAYING) {
    return;
  }
  if (!pacmanAnimDict) {
    return;
  }
  let _0x6ad545;
  switch (_0x1dc2c3) {
    case "lose":
      _0x6ad545 = PACMAN_ANIM.LOSE;
      break;
    case "big_lose":
      _0x6ad545 = PACMAN_ANIM.LOSE_BIG;
      break;
    case "win":
      _0x6ad545 = PACMAN_ANIM.WIN;
      break;
    case "big_win":
      _0x6ad545 = PACMAN_ANIM.WIN_BIG;
      break;
    default:
      return;
  }
  mp.players.local.taskPlayAnim(pacmanAnimDict, _0x6ad545, 4, -4, -1, 1, 0, false, false, false);
  setTimeout(() => {
    if (pacmanState === PACMAN_STATES.PLAYING) {
      mp.players.local.taskPlayAnim(pacmanAnimDict, PACMAN_ANIM.PLAY_IDLE, 2, -2, -1, 1, 0, false, false, false);
    }
  }, 2500);
}
mp.events.add("Client_PacmanArcadeNeedFleepScreen", () => {
  needFleepScreen = !needFleepScreen;
});
global.pacmanArcadeOpened = false;
const PACMAN_CAM_OFFSET = {
  x: 0,
  y: -0.299,
  z: 1.332
};
function pacmanCreateCamera(_0x45ff27) {
  const _0x1981b9 = _0x45ff27.getOffsetFromInWorldCoords(PACMAN_CAM_OFFSET.x, PACMAN_CAM_OFFSET.y, PACMAN_CAM_OFFSET.z);
  const _0x5cbfa1 = _0x45ff27.getOffsetFromInWorldCoords(0, 0.101, 1.119);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.game.cam.createCameraWithParams(26379945, _0x1981b9.x, _0x1981b9.y, _0x1981b9.z, 0, 0, 0, 90, true, 2);
  mp.game.cam.pointAtCoord(localcamera, _0x5cbfa1.x, _0x5cbfa1.y, _0x5cbfa1.z);
  mp.game.invoke("0x026FB97D0A425F84", localcamera, true);
  mp.game.cam.renderScriptCams(true, true, 1000, true, false, 0);
}
function pacmanDestroyCamera() {
  if (localcamera !== null) {
    mp.game.cam.renderScriptCams(false, true, 1000, true, false, 0);
    mp.game.cam.setActive(localcamera, false);
    mp.game.cam.destroy(localcamera, false);
    localcamera = null;
  }
}
async function pacmanCreateScreen() {
  try {
    const _0x38fe07 = await browsers3d.getBrowser(PACMAN_URL, PACMAN_SCREEN.WIDTH, PACMAN_SCREEN.HEIGHT);
    if (!_0x38fe07) {
      return;
    }
    pacmanBrowser = _0x38fe07;
    _0x38fe07.active = true;
  } catch (_0x1a1bb1) {
    mp.gui.chat.push(String(_0x1a1bb1));
  }
}
function pacmanDestroyScreen() {
  if (pacmanBrowser) {
    browsers3d.returnBrowser(pacmanBrowser);
    pacmanBrowser = null;
  }
}
function pacmanScreenRotPt(_0x170dc, _0x3a7ce2, _0x2e9dfc) {
  const _0x371b4d = pacmanScreenPos;
  const _0x246f16 = pacmanScreenRot || {
    x: 0,
    y: 0,
    z: 0
  };
  const _0x4fc369 = Math.PI / 180;
  const _0x32c2c0 = Math.cos(_0x246f16.x * _0x4fc369);
  const _0x11f2de = Math.sin(_0x246f16.x * _0x4fc369);
  const _0x2a76a6 = Math.cos(_0x246f16.y * _0x4fc369);
  const _0x4a2e0b = Math.sin(_0x246f16.y * _0x4fc369);
  const _0x69b838 = Math.cos(_0x246f16.z * _0x4fc369);
  const _0xfe5f75 = Math.sin(_0x246f16.z * _0x4fc369);
  const _0x1f21fc = _0x3a7ce2 * _0x32c2c0 - _0x2e9dfc * _0x11f2de;
  const _0x1a4982 = _0x3a7ce2 * _0x11f2de + _0x2e9dfc * _0x32c2c0;
  const _0x37bb95 = _0x170dc * _0x2a76a6 + _0x1a4982 * _0x4a2e0b;
  const _0x218f35 = _0x37bb95 * _0x69b838 - _0x1f21fc * _0xfe5f75;
  const _0x42c082 = _0x37bb95 * _0xfe5f75 + _0x1f21fc * _0x69b838;
  const _0x3bb106 = -_0x170dc * _0x4a2e0b + _0x1a4982 * _0x2a76a6;
  return {
    x: _0x371b4d.x + _0x218f35,
    y: _0x371b4d.y + _0x42c082,
    z: _0x371b4d.z + _0x3bb106
  };
}
function pacmanScreenCorners() {
  const _0x22d877 = PACMAN_SCREEN.WIDTH / 2 / 1000;
  const _0x5b244d = PACMAN_SCREEN.HEIGHT / 2 / 1000;
  return {
    tl: pacmanScreenRotPt(-_0x22d877, 0, +_0x5b244d),
    tr: pacmanScreenRotPt(+_0x22d877, 0, +_0x5b244d),
    bl: pacmanScreenRotPt(-_0x22d877, 0, -_0x5b244d),
    br: pacmanScreenRotPt(+_0x22d877, 0, -_0x5b244d)
  };
}
function pacmanRenderScreen() {
  if (!pacmanBrowser || !mp.browsers.exists(pacmanBrowser)) {
    return;
  }
  const _0x416ac0 = pacmanBrowser.headlessTextureDict;
  const _0x24a35e = pacmanBrowser.headlessTextureName;
  if (!_0x416ac0 || !_0x24a35e) {
    return;
  }
  if (!mp.game.graphics.hasStreamedTextureDictLoaded(_0x416ac0)) {
    mp.game.graphics.requestStreamedTextureDict(_0x416ac0, false);
    return;
  }
  const _0x24f4be = pacmanScreenCorners();
  const _0x48b0fd = needFleepScreen;
  mp.game.graphics.drawSpritePoly(_0x24f4be.tl.x, _0x24f4be.tl.y, _0x24f4be.tl.z, _0x24f4be.bl.x, _0x24f4be.bl.y, _0x24f4be.bl.z, _0x24f4be.br.x, _0x24f4be.br.y, _0x24f4be.br.z, 255, 255, 255, 255, _0x416ac0, _0x24a35e, 0, _0x48b0fd ? 1 : 0, 1, 0, _0x48b0fd ? 0 : 1, 1, 1, _0x48b0fd ? 0 : 1, 1);
  mp.game.graphics.drawSpritePoly(_0x24f4be.tl.x, _0x24f4be.tl.y, _0x24f4be.tl.z, _0x24f4be.br.x, _0x24f4be.br.y, _0x24f4be.br.z, _0x24f4be.tr.x, _0x24f4be.tr.y, _0x24f4be.tr.z, 255, 255, 255, 255, _0x416ac0, _0x24a35e, 0, _0x48b0fd ? 1 : 0, 1, 1, _0x48b0fd ? 0 : 1, 1, 1, _0x48b0fd ? 1 : 0, 1);
}
function pacmanForceFirstPerson() {
  pacmanSavedCamMode = mp.game.cam.getFollowPedViewMode();
  mp.game.cam.setFollowPedViewMode(4);
}
function pacmanRestoreCameraMode() {
  mp.game.cam.setFollowPedViewMode(pacmanSavedCamMode);
}
async function pacmanBeginSession(_0x5e0778) {
  try {
    if (pacmanState !== PACMAN_STATES.IDLE) {
      return;
    }
    const _0x5537d4 = PACMAN_MACHINES[_0x5e0778];
    const _0x25fa5c = pacmanGetMachineObject(_0x5e0778);
    if (!_0x5537d4 || !_0x25fa5c) {
      return;
    }
    pacmanState = PACMAN_STATES.ENTERING;
    pacmanMachineIndex = _0x5e0778;
    pacmanMachineHeading = _0x25fa5c.getHeading();
    const _0x256404 = _0x25fa5c.position;
    pacmanMachinePos = {
      x: _0x256404.x,
      y: _0x256404.y,
      z: _0x256404.z
    };
    const _0x514d6c = PACMAN_SCREEN_POS;
    const _0x4732f7 = _0x25fa5c.getOffsetFromInWorldCoords(_0x514d6c.x, _0x514d6c.y, _0x514d6c.z);
    pacmanScreenPos = {
      x: _0x4732f7.x,
      y: _0x4732f7.y,
      z: _0x4732f7.z
    };
    pacmanScreenRot = pacmanGetScreenRotation(pacmanMachineHeading);
    pacmanAnimDict = pacmanGetAnimDict("right");
    await pacmanRequestAnimDict(pacmanAnimDict);
    const _0x83badc = _0x25fa5c.getOffsetFromInWorldCoords(PACMAN_SEAT_OFFSET.x, PACMAN_SEAT_OFFSET.y, PACMAN_SEAT_OFFSET.z);
    mp.players.local.position = new mp.Vector3(_0x83badc.x, _0x83badc.y, _0x83badc.z);
    mp.players.local.setHeading(pacmanMachineHeading);
    mp.players.local.freezePosition(true);
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, false);
    mp.players.local.taskPlayAnim(pacmanAnimDict, PACMAN_ANIM.ENTER, 2, -2, -1, 10, 0, false, false, false);
    await pacmanWaitForAnimProgress(mp.players.local.handle, pacmanAnimDict, PACMAN_ANIM.ENTER, 0.85);
    mp.players.local.taskPlayAnim(pacmanAnimDict, PACMAN_ANIM.PLAY_IDLE, 2, -2, -1, 1, 0, false, false, false);
    pacmanCreateCamera(_0x25fa5c);
    await pacmanCreateScreen();
    if (mp.game.gameplay.isGen9) {
      if (pacmanBrowser && pacmanBrowser.headlessTextureHeightScale === -1) {
        needFleepScreen = true;
      }
      main_browser.execute("APPS.state.needFleepScreenPacman.show = true;");
      mp.gui.cursor.show(true, true);
    }
    pacmanState = PACMAN_STATES.PLAYING;
    global.pacmanArcadeOpened = true;
  } catch (_0x4c071a) {
    mp.gui.chat.push(String(_0x4c071a));
  }
}
async function pacmanEndSession() {
  try {
    if (pacmanState !== PACMAN_STATES.PLAYING && pacmanState !== PACMAN_STATES.ENTERING) {
      return;
    }
    pacmanState = PACMAN_STATES.EXITING;
    pacmanDestroyScreen();
    pacmanDestroyCamera();
    if (pacmanAnimDict) {
      mp.players.local.taskPlayAnim(pacmanAnimDict, PACMAN_ANIM.EXIT, 2, -2, -1, 10, 0, false, false, false);
      await pacmanWaitForAnimProgress(mp.players.local.handle, pacmanAnimDict, PACMAN_ANIM.EXIT, 0.9);
    }
    mp.players.local.clearTasks();
    mp.players.local.freezePosition(false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    pacmanRestoreCameraMode();
    pacmanState = PACMAN_STATES.IDLE;
    pacmanMachineIndex = -1;
    pacmanMachinePos = null;
    pacmanMachineHeading = 0;
    pacmanScreenPos = null;
    pacmanScreenRot = null;
    pacmanAnimDict = null;
    main_browser.execute("APPS.state.needFleepScreenPacman.show = false;");
    global.pacmanArcadeOpened = false;
  } catch (_0x37aa11) {
    mp.gui.chat.push(String(_0x37aa11));
  }
}
function pacmanForceStop(_0x2c33cb = false) {
  pacmanDestroyScreen();
  pacmanDestroyCamera();
  mp.players.local.clearTasks();
  localplayer.freezePosition(false);
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  if (!_0x2c33cb) {
    mp.gui.cursor.show(false, false);
  }
  mp.events.call("Enablechat");
  pacmanRestoreCameraMode();
  pacmanState = PACMAN_STATES.IDLE;
  pacmanMachineIndex = -1;
  pacmanMachinePos = null;
  pacmanMachineHeading = 0;
  pacmanScreenPos = null;
  pacmanScreenRot = null;
  pacmanAnimDict = null;
  main_browser.execute("APPS.state.needFleepScreenPacman.show = false;");
  global.pacmanArcadeOpened = false;
}
function pacmanEnd(_0x32351b) {
  pacmanPlayReaction(_0x32351b === "win" ? "big_win" : "big_lose");
  mp.events.callRemote("Server_PacmanArcadeEnd", _0x32351b === "win");
  setTimeout(() => {
    pacmanEndSession();
  }, 1500);
}
pacmanSpawnAllMachines();
global.atPacmanArcade = false;
global.atPacmanArcadeMachineIndex = -1;
mp.events.add("Client_PacmanArcadeInteract", (_0x2d5a27, _0x4bef92) => {
  if (_0x2d5a27) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atPacmanArcade = _0x2d5a27;
  atPacmanArcadeMachineIndex = _0x4bef92;
});
mp.events.add("Client_PacmanArcadeBegin", _0x57d13f => {
  pacmanBeginSession(_0x57d13f);
});
mp.events.add("Client_PacmanArcadeForceStop", _0x4c0ab3 => {
  if (pacmanState !== PACMAN_STATES.IDLE) {
    pacmanForceStop(_0x4c0ab3);
  }
});
mp.events.add("Client_PacmanReaction", _0xac4bde => {
  pacmanPlayReaction(_0xac4bde);
});
mp.events.add("render", () => {
  if (pacmanState === PACMAN_STATES.PLAYING || pacmanState === PACMAN_STATES.ENTERING) {
    pacmanDisableControls();
  }
  if (pacmanState === PACMAN_STATES.PLAYING && pacmanBrowser) {
    pacmanRenderScreen();
  }
});
global.closePacmanArcade = function () {
  pacmanEnd("lose");
};
mp.events.add("Client_PacmanEnd", pacmanEnd);