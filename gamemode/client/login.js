mp.gui.cursor.show(true, true);
let authentification = false;
mp.events.add("loginDataToServer", (_0x58b4e4, _0xb9deb7, _0x4ab8b1) => {
  if (new Date().getTime() - lastCheck < 1000) {
    return main_browser.execute("APPS.state.login.opened = true;");
  }
  lastCheck = new Date().getTime();
  mp.events.callRemote("sendDataToServer", _0x58b4e4, _0xb9deb7, _0x4ab8b1);
});
mp.events.add("SendDataToRegister", (_0x177c76, _0x5c5220, _0x32e538, _0xce2f0, _0xee1f32, _0x3f38d2, _0x5bc707) => {
  if (new Date().getTime() - lastCheck < 250) {
    return main_browser.execute("APPS.state.login.opened = true;");
  }
  lastCheck = new Date().getTime();
  mp.events.callRemote("SendDataToRegisterServer", _0x177c76, _0x5c5220, _0x32e538, _0xce2f0, _0xee1f32, _0x3f38d2, _0x5bc707);
});
mp.events.add("CheckEmailRegister", _0x56cf8d => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("CheckEmailRegisterServer", _0x56cf8d);
  }
});
mp.events.add("CheckNameRegister", _0x2479d8 => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("CheckNameRegisterServer", _0x2479d8);
  }
});
mp.events.add("RegNextStep", _0x2c3a28 => {
  if (_0x2c3a28 == 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Данный E-Mail уже зарегистрирован"][curr_lang] + "');");
  } else {
    main_browser.execute("APPS.state.registration.step = 3");
  }
});
mp.events.add("RegNextStep2", _0x35672a => {
  if (_0x35672a == 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Данный логин уже зарегистрирован"][curr_lang] + "');");
  } else {
    main_browser.execute("APPS.state.registration.step = 2");
  }
});
global.last_email = "";
global.auto_login = false;
mp.events.add("Client_SetLastLogin", (_0x151dba, _0x279bdc = false) => {
  last_email = _0x151dba;
  auto_login = _0x279bdc;
});
mp.events.add("Client_DoneAutoLogin", () => {
  setTimeout(() => {
    main_browser.execute("APPS.state.auto_login.show = false;");
  }, 1500);
});
let CameraPoses = () => {
  let _0x4e367c = "";
  if (last_email) {
    _0x4e367c = last_email;
  }
  if (auto_login == 1 && _0x4e367c) {
    const _0x39ac9d = "{\"show\":true}";
    main_browser.execute("APPS.state.auto_login = " + _0x39ac9d);
    mp.events.callRemote("sendDataToServer", _0x4e367c, "", 0);
  } else {
    const _0x4988a8 = "{\"login\":'" + _0x4e367c + "',\"password\":'',\"opened\":true,\"in_quene\":0,\"show\":true}";
    main_browser.execute("APPS.state.login = " + _0x4988a8);
  }
  const _0x18ac04 = new Date();
  let _0x5a0484 = _0x18ac04.getUTCHours() + 3;
  if (baseLang == "en") {
    _0x5a0484 = _0x18ac04.getUTCHours() + 1;
    if (_0x5a0484 == -5) {
      _0x5a0484 = 19;
    } else if (_0x5a0484 == -4) {
      _0x5a0484 = 20;
    } else if (_0x5a0484 == -3) {
      _0x5a0484 = 21;
    } else if (_0x5a0484 == -2) {
      _0x5a0484 = 22;
    } else if (_0x5a0484 == -1) {
      _0x5a0484 = 23;
    }
  } else if (baseLang == "de") {
    _0x5a0484 = _0x18ac04.getUTCHours() + 2;
    if (_0x5a0484 == -5) {
      _0x5a0484 = 19;
    } else if (_0x5a0484 == -4) {
      _0x5a0484 = 20;
    } else if (_0x5a0484 == -3) {
      _0x5a0484 = 21;
    } else if (_0x5a0484 == -2) {
      _0x5a0484 = 22;
    } else if (_0x5a0484 == -1) {
      _0x5a0484 = 23;
    }
  } else if (baseLang == "jp") {
    _0x5a0484 = _0x18ac04.getUTCHours() + 9;
    if (_0x5a0484 == -5) {
      _0x5a0484 = 19;
    } else if (_0x5a0484 == -4) {
      _0x5a0484 = 20;
    } else if (_0x5a0484 == -3) {
      _0x5a0484 = 21;
    } else if (_0x5a0484 == -2) {
      _0x5a0484 = 22;
    } else if (_0x5a0484 == -1) {
      _0x5a0484 = 23;
    }
  }
  const _0x579329 = _0x18ac04.getUTCMinutes();
  let _0x45e653;
  if (_0x5a0484 == 24) {
    _0x5a0484 = 0;
  } else if (_0x5a0484 == 25) {
    _0x5a0484 = 1;
  } else if (_0x5a0484 == 26) {
    _0x5a0484 = 2;
  } else if (_0x5a0484 == 27) {
    _0x5a0484 = 3;
  } else if (_0x5a0484 == 28) {
    _0x5a0484 = 4;
  } else if (_0x5a0484 == 29) {
    _0x5a0484 = 5;
  } else if (_0x5a0484 == 30) {
    _0x5a0484 = 6;
  } else if (_0x5a0484 == 31) {
    _0x5a0484 = 7;
  } else if (_0x5a0484 == 32) {
    _0x5a0484 = 8;
  } else if (_0x5a0484 == 33) {
    _0x5a0484 = 9;
  } else if (_0x5a0484 == 34) {
    _0x5a0484 = 10;
  }
  mp.game.time.setClockTime(_0x5a0484, _0x579329, 0);
  if (bHalloween2025) {
    mp.game.time.setClockTime(3, 0, 0);
  }
  if (global.curr_lang == "ru") {
    mp.discord.update("Playing Grand Role Play", "grand-rp.su");
  } else if (global.curr_lang != "ru") {
    mp.discord.update("Playing Grand Role Play", "gta5grand.com");
  }
  mp.game.ui.displayRadar(false);
  mp.game.gameplay.disableAutomaticRespawn(true);
  mp.game.gameplay.ignoreNextRestart(true);
  mp.game.gameplay.setFadeInAfterDeathArrest(false);
  mp.game.gameplay.setFadeOutAfterDeath(false);
  mp.game.gameplay.setFadeInAfterLoad(false);
  switch (Math.floor(Math.random() * 13) + 0) {
    case 0:
      mp.players.local.position = new mp.Vector3(22.813, -582.146, 31.625);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(23.445695877075195, -580.3161010742188, 294.0935974121094), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(20.50064468383789, -583.344482421875, 292.6960144042969);
      break;
    case 1:
      mp.players.local.position = new mp.Vector3(2429.513, 3769.841, 40.528);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(2429.733154296875, 3769.856201171875, 56.71295166015625), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(2500.53173828125, 3782.931640625, 48.26481628417969);
      break;
    case 2:
      mp.players.local.position = new mp.Vector3(-1341.079, -1595.156, 3.553);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-1340.187255859375, -1595.8428955078125, 49.43791580200195), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(-1310.8848876953125, -1354.2581787109375, 6.989421844482422);
      break;
    case 3:
      mp.players.local.position = new mp.Vector3(892.947, 910.235, 194.098);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(885.670166015625, 911.8387451171875, 350.6573486328125), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(405.8322448730469, 1327.3505859375, 283.1975402832031);
      break;
    case 4:
      mp.players.local.position = new mp.Vector3(-2224.261, 2709.865, 2.903);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-2224.54638671875, 2710.178955078125, 21.46501922607422), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(-2359.283447265625, 2699.5244140625, 1.9513435363769531);
      break;
    case 5:
      mp.players.local.position = new mp.Vector3(-2092.109, 4547.122, 3.882);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-2092.257568359375, 4547.20361328125, 59.0174674987793), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(-1975.33349609375, 4554.35693359375, 42.48538589477539);
      break;
    case 6:
      mp.players.local.position = new mp.Vector3(-390.277, 3009.085, 14.926);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-386.7982482910156, 2997.361328125, 34.09531784057617), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(-303.9058837890625, 3024.150146484375, 16.156888961791992);
      break;
    case 7:
      mp.players.local.position = new mp.Vector3(2824.37, 874.502, 1.985);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(2860.5107421875, 897.8576049804688, 23.19618034362793), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(2920.83935546875, 805.736572265625, 11.026789665222168);
      break;
    case 8:
      mp.players.local.position = new mp.Vector3(315.158, -331.641, 48.548);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(315.12939453125, -330.9305114746094, 114.22130584716797), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(239.8555908203125, -412.3272705078125, 93.51347351074219);
      break;
    case 9:
      mp.players.local.position = new mp.Vector3(-2096.73, -1017.389, 8.98);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-2202.66845703125, -1072.651611328125, 14.606544494628906), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(-2073.4853515625, -1027.6488037109375, 5.77520227432251);
      break;
    case 10:
      mp.players.local.position = new mp.Vector3(-43.054, 1066.213, 221.465);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(-32.671573638916016, 1078.701171875, 274.2003479003906), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(128.6531982421875, 813.7239990234375, 200.72268676757812);
      break;
    case 11:
      mp.players.local.position = new mp.Vector3(1074.866, -516.734, 62.66);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(1074.822998046875, -516.50439453125, 69.22357177734375), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(1113.0736083984375, -638.3034057617188, 57.3095588684082);
      break;
    case 12:
      mp.players.local.position = new mp.Vector3(2063.218, 133.02, 171.084);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(1988.56201171875, 153.00619506835938, 172.7399139404297), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(1789.742431640625, 58.4521484375, 146.29302978515625);
      break;
    case 13:
      mp.players.local.position = new mp.Vector3(653.431, -904.348, 22.049);
      _0x45e653 = mp.cameras.new("default", new mp.Vector3(653.0076904296875, -904.460205078125, 33.22127914428711), new mp.Vector3(0, 0, 0), 40);
      _0x45e653.pointAtCoord(533.2747192382812, -864.9227294921875, 38.3217887878418);
  }
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 1000);
  mp.players.local.freezePosition(true);
  _0x45e653.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 2000, true, false);
};
mp.events.add("PlayerCamera", CameraPoses);
let fail_login_count = 0;
mp.events.add("loginHandler", (_0x246f52, _0x51ae39, _0x3bbc38) => {
  switch (_0x246f52) {
    case "success":
      if (authentification != 1) {
        main_browser.execute("APPS.state.login.opened = false;");
        main_browser.execute("APPS.state.login.show = false;");
      }
      authentification = true;
      mp.game.cam.doScreenFadeOut(100);
      break;
    case "ban":
      authentification = true;
      main_browser.execute("APPS.state.login.opened = false;");
      main_browser.execute("APPS.state.login.show = false;");
      break;
    case "registered":
      authentification = false;
      main_browser.execute("APPS.state.registration.show = false;");
      const _0x8dd37c = "{\"login\":'" + _0x51ae39 + "',\"password\":'',\"opened\":true,\"in_quene\":0,\"show\":true}";
      main_browser.execute("APPS.state.login = " + _0x8dd37c);
      break;
    case "incorrectinfo":
      fail_login_count++;
      if (fail_login_count >= 3) {
        main_browser.execute("APPS.state.login.show = false;");
        mp.events.callRemote("Server_KickWrongPassword");
        return;
      }
      main_browser.execute("APPS.state.login.opened = true;");
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + TranslateText("Вы ввели неверные данные. Осталось попыток: {0}", 3 - fail_login_count) + "');");
      break;
    case "takeninfo":
      authentification = false;
      main_browser.execute("APP.sendErrorMessage('" + language["Данный Email или имя уже используются"][curr_lang] + "');");
      main_browser.execute("APPS.state.registration.opened = true;");
      break;
    case "wrong_info":
      authentification = false;
      main_browser.execute("APP.sendErrorMessage('" + (typeof resolveTranslationValue != "undefined" ? resolveTranslationValue(_0x51ae39) : _0x51ae39) + "');");
      main_browser.execute("APPS.state.registration.opened = true;");
      main_browser.execute("APPS.state.login.opened = true;");
      break;
    case "tooshort":
      main_browser.execute("APPS.state.registration.opened = true;");
      break;
    case "logged":
      authentification = false;
      main_browser.execute("APPS.state.login.opened = true;");
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + (typeof resolveTranslationValue != "undefined" ? resolveTranslationValue(_0x3bbc38) : _0x3bbc38) + "');");
      break;
    case "a_interval":
    case "a_full":
      setTimeout(() => {
        main_browser.execute("APPS.state.login.opened = true;");
      }, 5000);
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + (typeof resolveTranslationValue != "undefined" ? resolveTranslationValue(_0x3bbc38) : _0x3bbc38) + "');");
  }
});
global.in_quene = false;
mp.events.add("Client_queue_Error", _0xfe368 => {
  main_browser.execute("APPS.state.login.opened = false;");
  main_browser.execute("APPS.state.login.in_quene = " + _0xfe368);
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APPS.state.login.show = false;");
  main_browser.execute("APPS.state.login_quene.number = " + _0xfe368 + ";");
  main_browser.execute("APPS.state.login_quene.show = true;");
  in_quene = true;
});
mp.events.add("Client_Clear_Quene", () => {
  main_browser.execute("APPS.state.login.opened = true;");
  main_browser.execute("APPS.state.login.in_quene = 0;");
  main_browser.execute("APPS.state.login_quene.number = 0;");
  main_browser.execute("APPS.state.login_quene.show = false;");
  in_quene = false;
  main_browser.execute("APPS.state.login.show = true;");
});
mp.events.add("Login_Error", _0x39b2e9 => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x39b2e9 + "');");
});
mp.events.add("Client_Registration", () => {
  main_browser.execute("APPS.state.login.show = false;");
  main_browser.execute("APPS.state.registration = {\"step\":1,\"login\":'',\"password\":'',\"password2\":'',\"email\":'',\"opened\":true,\"show\":true}");
});
mp.events.add("ToLoginFromLastPass", () => {
  main_browser.execute("APPS.state.lastpass.show = false;");
  let _0x3a4725 = "";
  if (last_email) {
    _0x3a4725 = last_email;
  }
  const _0x7efa1d = "{\"login\":'" + _0x3a4725 + "',\"password\":'',\"in_quene\":0,\"opened\":true,\"show\":true}";
  main_browser.execute("APPS.state.login = " + _0x7efa1d);
});
mp.events.add("Client_ToLoginFromReg", () => {
  main_browser.execute("APPS.state.registration.show = false;");
  let _0x325ad1 = "";
  if (last_email) {
    _0x325ad1 = last_email;
  }
  const _0x267a31 = "{\"login\":'" + _0x325ad1 + "',\"password\":'',\"in_quene\":0,\"opened\":true,\"show\":true}";
  main_browser.execute("APPS.state.login = " + _0x267a31);
});
let lastpass_step = 0;
mp.events.add("Client_GoLastPass", () => {
  main_browser.execute("APPS.state.login.show = false;");
  main_browser.execute("APPS.state.lastpass = {\"email\":'',\"step\":" + lastpass_step + ",\"show\":true}");
});
mp.events.add("Client_SendEmailToRecover", _0x59b6e8 => {
  if (!loggedin && !(new Date().getTime() - lastCheck < 1500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendEmailToRecover", _0x59b6e8);
  }
});
mp.events.add("Client_LastPassError", _0x5f5750 => {
  if (!loggedin) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x5f5750 + "');");
  }
});
mp.events.add("Client_LastPassNextStep", _0x3b8e35 => {
  if (!loggedin) {
    lastpass_step = _0x3b8e35;
    if (_0x3b8e35 == 1) {
      main_browser.execute("APPS.state.lastpass.email = \"\";");
      main_browser.execute("APPS.state.lastpass.step = 1;");
    } else if (_0x3b8e35 == 2) {
      main_browser.execute("APPS.state.lastpass.email = \"\";");
      main_browser.execute("APPS.state.lastpass.step = 2;");
    } else if (_0x3b8e35 == 3) {
      lastpass_step = 0;
      main_browser.execute("APPS.state.lastpass.show = false;");
      let _0x2cf5b4 = "";
      if (last_email) {
        _0x2cf5b4 = last_email;
      }
      const _0x4caab3 = "{\"login\":'" + _0x2cf5b4 + "',\"password\":'',\"in_quene\":0,\"opened\":true,\"show\":true}";
      main_browser.execute("APPS.state.login = " + _0x4caab3);
    }
  }
});
mp.events.add("Client_CheckCode", _0x242c22 => {
  if (!loggedin && !(new Date().getTime() - lastCheck < 1500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RecoverCheckCode", _0x242c22);
  }
});
mp.events.add("Client_RecoverNewPassword", _0x55c1a4 => {
  if (!loggedin && !(new Date().getTime() - lastCheck < 1500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RecoverNewPassword", _0x55c1a4);
  }
});
global.inLobby = false;
global.inLobbyModal = false;
const LOBBY_IPL = ["grand_lobby_ext", "grand_lobby_lodlights", "grand_lobby_distantlights"];
let popularCase = 0;
let isLobbyObjectsCreated = false;
const LOBBY_ANIM_LIST = [{
  animlib: "anim@mp_player_intcelebrationfemale@shadow_boxing",
  animname: "shadow_boxing",
  speed: 1,
  flag: 0
}];
const MAIN_LOBBY_ANIM = {
  animlib: "oddjobs@assassinate@guard",
  animname: "unarmed_fold_arms",
  speed: 1,
  flag: 2
};
let lobbyAnimInterval = null;
let lobbyAnimTimeout = null;
const LOBBY_PLAYER_POSITION = new mp.Vector3(1874.62, 3536.273, 38.322, 146.626);
const LOBBY_START_PLAYER_POSITION = new mp.Vector3(1875.748, 3537.967, 38.258, 144.798);
global.LOBBY_PLAYER_POSITION = LOBBY_PLAYER_POSITION;
const LOBBY_PLAYER_HEADING = 146.626;
let LOBBY_CAMERA_OFFSET = new mp.Vector3(-1.3, -2.2, -0.04);
let LOBBY_CAMERA_LOOKAT_OFFSET = new mp.Vector3(0, 0, -0.15);
const LOBBY_CAMERA_FOV = 60;
const TRAIN_SPAWN_POS = new mp.Vector3(1990.424, 3613.28, 37.581);
const FREIGHT_MODELS = ["freight", "freightcar", "freightgrain", "freightcont1", "freightcont2", "freighttrailer"];
let lobbyTrain = null;
let lobbyTrainLoadTimer = null;
let isLobbyHeadTrackingActive = false;
let lastMouseLookUpdate = 0;
let lastTargetScreenX = 0.5;
let pendingCameraAdjustment = null;
let lastCalculatedHeading = null;
let lobbyWalkInterval = null;
let isPropertyLoaded = false;
let serverTimeMs = 0;
function requestLobbyCollisionZones() {
  mp.game.streaming.requestCollisionAtCoord(LOBBY_PLAYER_POSITION.x, LOBBY_PLAYER_POSITION.y, LOBBY_PLAYER_POSITION.z);
  mp.game.streaming.requestCollisionAtCoord(TRAIN_SPAWN_POS.x, TRAIN_SPAWN_POS.y, TRAIN_SPAWN_POS.z);
}
async function waitForLobbyCollision(_0x1a4c58 = 4000) {
  const _0xc7c222 = LOBBY_PLAYER_POSITION.x;
  const _0x2c059c = LOBBY_PLAYER_POSITION.y;
  const _0x21836f = LOBBY_PLAYER_POSITION.z;
  const _0x84e4d5 = Date.now() + _0x1a4c58;
  while (Date.now() < _0x84e4d5) {
    if (!inLobby) {
      return false;
    }
    mp.game.streaming.requestCollisionAtCoord(_0xc7c222, _0x2c059c, _0x21836f);
    const _0x33498c = mp.game.gameplay.getGroundZFor3dCoord(_0xc7c222, _0x2c059c, _0x21836f + 50, 0, false);
    if (_0x33498c && _0x33498c > 0 && Math.abs(_0x33498c - _0x21836f) < 5) {
      return true;
    }
    await mp.game.waitAsync(50);
  }
  return true;
}
async function createLobbyCamAsync() {
  if (inLobby) {
    return createLobbyCam();
  } else {
    return 146.626;
  }
}
function createLobbyCam() {
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  mp.game.streaming.requestCollisionAtCoord(LOBBY_PLAYER_POSITION.x, LOBBY_PLAYER_POSITION.y, LOBBY_PLAYER_POSITION.z);
  const _0x6429a2 = new mp.Vector3(LOBBY_PLAYER_POSITION.x + LOBBY_CAMERA_OFFSET.x, LOBBY_PLAYER_POSITION.y + LOBBY_CAMERA_OFFSET.y, LOBBY_PLAYER_POSITION.z + LOBBY_CAMERA_OFFSET.z);
  LOBBY_PLAYER_POSITION.x;
  _0x6429a2.x;
  LOBBY_PLAYER_POSITION.y;
  _0x6429a2.y;
  mp.players.local.setHeading(146.626);
  mp.players.local.position = LOBBY_PLAYER_POSITION;
  mp.players.local.freezePosition(false);
  localcamera = mp.cameras.new("lobbyCamera", _0x6429a2, new mp.Vector3(0, 0, 0), 60);
  localcamera.pointAtCoord(LOBBY_PLAYER_POSITION.x + LOBBY_CAMERA_LOOKAT_OFFSET.x, LOBBY_PLAYER_POSITION.y + LOBBY_CAMERA_LOOKAT_OFFSET.y, LOBBY_PLAYER_POSITION.z + LOBBY_CAMERA_LOOKAT_OFFSET.z);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
  if (pendingCameraAdjustment !== null) {
    adjustCameraForUIElement(pendingCameraAdjustment);
  }
  return 146.626;
}
function startPlayerAnim() {
  if (inLobby) {
    mp.players.local.position = LOBBY_PLAYER_POSITION;
    mp.players.local.setHeading(146.626);
    main_browser.execute("APPS.state.introLobby.userInfo.isPlayerInMainPosition = true;");
    setTimeout(() => {
      if (inLobby) {
        mp.players.local.freezePosition(true);
        mp.players.local.position = LOBBY_PLAYER_POSITION;
        playRandomLobbyAnimation();
        isLobbyHeadTrackingActive = true;
      }
    }, 1000);
  }
}
mp.events.add("Client_ShowGameLobby", (_0x13738d, _0x5ab31f, _0x2b0588, _0x3fb51f, _0x1495ba, _0x276dc1, _0x263dd5, _0x176758, _0x44609f, _0x129005, _0x4ea713, _0x3097b7, _0xfd4ac0, _0x11356b, _0x8b5017, _0xab9234, _0x402f66, _0x112931, _0x4b27b2, _0x1300c7, _0x7bfcec, _0x7dd0b9, _0x524dd3 = -1, _0x187f74 = 0) => {
  if (inLobby) {
    return;
  }
  mp.game.cam.doScreenFadeIn(500);
  lastCheck = new Date().getTime() + 500;
  inLobby = true;
  setTimeout(async () => {
    if (inLobby) {
      lastCalculatedHeading = await createLobbyCamAsync();
      startPlayerAnim();
      setTimeout(() => {
        if (inLobby) {
          mp.game.cam.doScreenFadeIn(500);
        }
      }, 500);
    }
  }, 150);
  setTimeout(() => {
    requestLobbyCollisionZones();
    SpawnLobbyObjects();
    SpawnLobbyTrain();
  }, 0);
  serverTimeMs = parseInt(_0x13738d);
  const _0x31fa1c = parseInt(_0x5ab31f);
  const _0x3553ba = Math.floor((serverTimeMs - _0x31fa1c) / 86400000);
  const _0x422414 = new Date(serverTimeMs);
  const _0x565f7e = _0x422414.getHours();
  const _0x47f37e = _0x422414.getMinutes();
  mp.game.time.setClockTime(_0x565f7e, _0x47f37e, 0);
  let _0x4ad64b = true;
  if (mp.storage.data.lobbyMusicMuted) {
    _0x4ad64b = false;
  }
  const _0x44268f = {
    lvl: _0x3fb51f,
    name: _0x1495ba,
    lvlProgress: [_0x276dc1, _0x3fb51f * 4],
    carsAmount: 0,
    daysSinceRegistration: _0x3553ba,
    balance: {
      money: _0x263dd5,
      bank: _0x176758
    },
    battlePass: {
      lvl: _0x44609f || 1,
      lvlProgress: [_0x129005 || 0, 20000]
    },
    donateMultiplier: null,
    isPlayerInMainPosition: false
  };
  if (_0x4ea713) {
    _0x44268f.donateMultiplier = {
      value: _0x4ea713,
      until: _0x3097b7
    };
  }
  const _0x1e8e63 = {
    rentalAmount: _0xfd4ac0,
    carFine: null,
    messages: []
  };
  popularCase = _0x11356b;
  _0x402f66 &&= JSON.stringify(_0x402f66);
  _0x112931 &&= JSON.stringify(_0x112931);
  _0xab9234 &&= JSON.stringify(_0xab9234);
  main_browser.execute("APPS.state.introLobby.isMusicOn = " + _0x4ad64b + ";");
  main_browser.execute("APPS.state.introLobby.serverTime = " + serverTimeMs + ";");
  main_browser.execute("APPS.state.introLobby.gender = " + _0x2b0588 + ";");
  main_browser.execute("APPS.state.introLobby.actionsHistory = " + JSON.stringify(_0x1e8e63) + ";");
  main_browser.execute("APPS.state.introLobby.dailyPrize = " + _0xab9234 + ";");
  main_browser.execute("APPS.state.introLobby.playHoursForDonate = " + _0x402f66 + ";");
  main_browser.execute("APPS.state.introLobby.playHoursForDollars = " + _0x112931 + ";");
  main_browser.execute("APPS.state.introLobby.specialRewardHours = " + _0x4b27b2 + ";");
  main_browser.execute("APPS.state.introLobby.specialRewardDaysLeft = " + _0x1300c7 + ";");
  main_browser.execute("APPS.state.introLobby.specialRewardModel = '" + _0x7bfcec + "';");
  main_browser.execute("APPS.state.introLobby.userInfo = " + JSON.stringify(_0x44268f));
  if (bSummer2026) {
    main_browser.execute("APPS.state.introLobby.summer2026CaseProgress = " + _0x524dd3 + ";");
  }
  if (bEaster2026) {
    main_browser.execute("APPS.state.introLobby.easter2026FoundEggs = " + _0x187f74 + ";");
  }
  main_browser.execute("APPS.state.introLobby.show = true;");
  mp.events.call("Disablechat");
  mp.gui.cursor.show(true, true);
});
let lastAnim = "";
function playRandomLobbyAnimation() {
  if (!inLobby) {
    return;
  }
  const _0x3be3db = Math.floor(Math.random() * LOBBY_ANIM_LIST.length);
  if (LOBBY_ANIM_LIST[_0x3be3db].animname === lastAnim) {
    return playRandomLobbyAnimation();
  }
  const _0x28cf12 = LOBBY_ANIM_LIST[_0x3be3db];
  play_animation(mp.players.local, _0x28cf12.animlib, _0x28cf12.animname, _0x28cf12.speed, _0x28cf12.flag);
  lobbyAnimInterval = setInterval(() => {
    if (!inLobby) {
      return;
    }
    const _0x4c0cd9 = Math.floor(Math.random() * LOBBY_ANIM_LIST.length);
    const _0xd25a87 = LOBBY_ANIM_LIST[_0x4c0cd9];
    play_animation(mp.players.local, _0xd25a87.animlib, _0xd25a87.animname, _0xd25a87.speed, _0xd25a87.flag);
  }, 12000);
}
function clearLobbyAnimations() {
  if (lobbyAnimInterval) {
    clearInterval(lobbyAnimInterval);
    lobbyAnimInterval = null;
  }
  LOBBY_ANIM_LIST.forEach(_0xe545a => {
    stop_animation(mp.players.local, _0xe545a.animlib, _0xe545a.animname);
  });
  stop_animation(mp.players.local, MAIN_LOBBY_ANIM.animlib, MAIN_LOBBY_ANIM.animname);
}
function adjustCameraForUIElement(_0x469fff) {
  lastTargetScreenX = _0x469fff;
  if (localcamera == null) {
    pendingCameraAdjustment = _0x469fff;
    return;
  }
  const _0xca8e58 = mp.game.graphics.getScreenActiveResolution(0, 0);
  const _0x1eb667 = _0xca8e58.x / _0xca8e58.y;
  const _0xa56afb = Math.sqrt(LOBBY_CAMERA_OFFSET.x * LOBBY_CAMERA_OFFSET.x + LOBBY_CAMERA_OFFSET.y * LOBBY_CAMERA_OFFSET.y + LOBBY_CAMERA_OFFSET.z * LOBBY_CAMERA_OFFSET.z);
  const _0x4238c2 = Math.PI * 60 / 180;
  const _0x1a089c = Math.atan(Math.tan(_0x4238c2 / 2) * _0x1eb667) * 2;
  const _0x4468de = 0.3 / (_0xa56afb * 2 * Math.tan(_0x1a089c / 2));
  const _0x4a0d2f = (_0x469fff * (1 + _0x4468de * 2) - _0x4468de - 0.5) * _0x1a089c;
  const _0x40f9d7 = _0xa56afb * Math.tan(_0x4a0d2f);
  const _0x103ae7 = LOBBY_CAMERA_OFFSET.x;
  const _0x5ca81d = -LOBBY_CAMERA_OFFSET.y;
  const _0x1b85ee = _0x103ae7;
  const _0x2a943e = Math.sqrt(_0x5ca81d * _0x5ca81d + _0x1b85ee * _0x1b85ee);
  const _0x1656a6 = -_0x40f9d7 * (_0x5ca81d / _0x2a943e);
  const _0x23dff3 = -_0x40f9d7 * (_0x1b85ee / _0x2a943e);
  const _0x30bbd5 = new mp.Vector3(LOBBY_PLAYER_POSITION.x + LOBBY_CAMERA_OFFSET.x + _0x1656a6, LOBBY_PLAYER_POSITION.y + LOBBY_CAMERA_OFFSET.y + _0x23dff3, LOBBY_PLAYER_POSITION.z + LOBBY_CAMERA_OFFSET.z + 0);
  const _0x56629d = LOBBY_PLAYER_POSITION.x + _0x1656a6;
  const _0x457c0a = LOBBY_PLAYER_POSITION.y + _0x23dff3;
  const _0x42c033 = LOBBY_PLAYER_POSITION.z + 0;
  localcamera.setCoord(_0x30bbd5.x, _0x30bbd5.y, _0x30bbd5.z);
  localcamera.pointAtCoord(_0x56629d + LOBBY_CAMERA_LOOKAT_OFFSET.x, _0x457c0a + LOBBY_CAMERA_LOOKAT_OFFSET.y, _0x42c033 + LOBBY_CAMERA_LOOKAT_OFFSET.z);
  const _0x4a134a = LOBBY_PLAYER_POSITION.x - _0x30bbd5.x;
  const _0x32572a = LOBBY_PLAYER_POSITION.y - _0x30bbd5.y;
  lastCalculatedHeading = Math.atan2(-_0x4a134a, -_0x32572a) * (180 / Math.PI);
}
mp.events.add("Debug_SetLobbyCameraOffset", (_0x153cd6, _0x2e11fc, _0x47b1c4, _0x2d5362 = 0, _0x58040b = 0, _0x4f998a = -0.25) => {
  LOBBY_CAMERA_OFFSET = new mp.Vector3(_0x153cd6, _0x2e11fc, _0x47b1c4);
  LOBBY_CAMERA_LOOKAT_OFFSET = new mp.Vector3(_0x2d5362, _0x58040b, _0x4f998a);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  const _0x468105 = mp.game.graphics.getScreenActiveResolution(0, 0);
  const _0x55f96d = _0x468105.x / _0x468105.y;
  const _0x8a63c4 = Math.sqrt(LOBBY_CAMERA_OFFSET.x * LOBBY_CAMERA_OFFSET.x + LOBBY_CAMERA_OFFSET.y * LOBBY_CAMERA_OFFSET.y + LOBBY_CAMERA_OFFSET.z * LOBBY_CAMERA_OFFSET.z);
  const _0x2d29e5 = Math.PI * 60 / 180;
  const _0x3d0b47 = Math.atan(Math.tan(_0x2d29e5 / 2) * _0x55f96d) * 2;
  const _0x337fed = 0.25 / (_0x8a63c4 * 2 * Math.tan(_0x3d0b47 / 2));
  const _0x204a94 = (lastTargetScreenX * (1 + _0x337fed * 2) - _0x337fed - 0.5) * _0x3d0b47;
  const _0x22d730 = _0x8a63c4 * Math.tan(_0x204a94);
  const _0x7be71f = LOBBY_CAMERA_OFFSET.x;
  const _0x202c7c = -LOBBY_CAMERA_OFFSET.y;
  const _0x3d7696 = _0x7be71f;
  const _0xa6d97a = Math.sqrt(_0x202c7c * _0x202c7c + _0x3d7696 * _0x3d7696);
  const _0x4cd13c = -_0x22d730 * (_0x202c7c / _0xa6d97a);
  const _0x5a2611 = -_0x22d730 * (_0x3d7696 / _0xa6d97a);
  const _0x3dadf1 = new mp.Vector3(LOBBY_PLAYER_POSITION.x + LOBBY_CAMERA_OFFSET.x + _0x4cd13c, LOBBY_PLAYER_POSITION.y + LOBBY_CAMERA_OFFSET.y + _0x5a2611, LOBBY_PLAYER_POSITION.z + LOBBY_CAMERA_OFFSET.z + 0);
  localcamera = mp.cameras.new("lobbyCamera", _0x3dadf1, new mp.Vector3(0, 0, 0), 60);
  const _0x24c7e1 = LOBBY_PLAYER_POSITION.x + _0x4cd13c;
  const _0x56659b = LOBBY_PLAYER_POSITION.y + _0x5a2611;
  const _0x446d01 = LOBBY_PLAYER_POSITION.z + 0;
  localcamera.pointAtCoord(_0x24c7e1 + LOBBY_CAMERA_LOOKAT_OFFSET.x, _0x56659b + LOBBY_CAMERA_LOOKAT_OFFSET.y, _0x446d01 + LOBBY_CAMERA_LOOKAT_OFFSET.z);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 0, true, true);
});
mp.events.add("Client_LobbySetCam", adjustCameraForUIElement);
mp.events.add("Client_GameLobbyAddInfo", (_0x410615, _0x5cbf72) => {
  if (inLobby) {
    switch (_0x410615) {
      case "carFine":
        main_browser.execute("APPS.state.introLobby.actionsHistory.carFine = " + JSON.stringify(_0x5cbf72));
        break;
      case "notifications":
        if (Array.isArray(_0x5cbf72)) {
          const _0x4ec2f4 = _0x40c1be => typeof _0x40c1be == "number" || typeof _0x40c1be == "string" && /^\d+$/.test(_0x40c1be);
          const _0x239bf3 = _0x1f4548 => typeof resolveNotificationMessage == "function" ? resolveNotificationMessage(parseInt(_0x1f4548)) : _0x1f4548;
          _0x5cbf72 = _0x5cbf72.map(_0x113b4c => _0x113b4c && typeof _0x113b4c == "object" && "message" in _0x113b4c && _0x4ec2f4(_0x113b4c.message) ? {
            ..._0x113b4c,
            message: _0x239bf3(_0x113b4c.message)
          } : _0x113b4c);
        }
        main_browser.execute("APPS.state.introLobby.actionsHistory.messages = " + JSON.stringify(_0x5cbf72));
        break;
      case "vehicleCount":
        main_browser.execute("APPS.state.introLobby.userInfo.carsAmount = " + _0x5cbf72);
        break;
      case "property":
        main_browser.execute("APPS.state.propertyNotify = {...APPS.state.propertyNotify, type: 'property', ..." + JSON.stringify(_0x5cbf72) + ", show: true}");
        isPropertyLoaded = true;
    }
  }
});
mp.events.add("Client_LobbyToggleSound", () => {
  if (inLobby) {
    if (!(new Date().getTime() - lastCheck < 50)) {
      lastCheck = new Date().getTime();
      PlayBaseAudio("base_mouse_click");
      if (mp.storage.data.lobbyMusicMuted) {
        mp.storage.data.lobbyMusicMuted = false;
        mp.storage.flush();
        main_browser.execute("window.MusicManager.playCutsceneMusic(" + bChristmas2025 + ")");
      } else {
        mp.storage.data.lobbyMusicMuted = true;
        mp.storage.flush();
        main_browser.execute("window.MusicManager.stopCutsceneMusic(1500)");
      }
      main_browser.execute("APPS.state.introLobby.isMusicOn = " + !mp.storage.data.lobbyMusicMuted + ";");
      if (counterToSpawnYeti == 25) {
        spawnYetiEasterEgg();
      } else {
        counterToSpawnYeti++;
      }
    }
  }
});
mp.events.add("Client_NextStepGameLobby", () => {
  if (!inLobby) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  if (inLobbyModal) {
    closeLobbyModal();
  }
  PlayBaseAudio("base_mouse_click");
  inLobby = false;
  isLobbyHeadTrackingActive = false;
  clearLobbyTrainLoadTimer();
  clearLobbyAnimations();
  setTimeout(() => {
    ClearLobbyObjects();
  }, 2000);
  despawnYetiEasterEgg();
  despawnLobbyTrain();
  if (lobbyWalkInterval) {
    clearInterval(lobbyWalkInterval);
    lobbyWalkInterval = null;
  }
  mp.keys.unbind(27, false, function () {});
  mp.events.callRemote("Server_ShowSpawnChoose");
  const _0x27d853 = mp.cameras.new("default", new mp.Vector3(23.445695877075195, -580.3161010742188, 4500.093597412109), new mp.Vector3(0, 0, 0), 40);
  _0x27d853.pointAtCoord(20.50064468383789, -583.344482421875, 0.6960144042969);
  if (localcamera != null) {
    const _0x323eb2 = localcamera;
    _0x27d853.setActiveWithInterp(_0x323eb2.handle, 600, 0, 0);
    localcamera = _0x27d853;
    setTimeout(() => {
      if (_0x323eb2 && mp.cameras.exists(_0x323eb2)) {
        _0x323eb2.destroy();
      }
    }, 650);
  } else {
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    _0x27d853.setActive(true);
    localcamera = _0x27d853;
  }
});
mp.events.add("Client_LobbySelectModal", _0x28881f => {
  if (inLobby && !inLobbyModal && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    PlayBaseAudio("base_mouse_click");
    if (_0x28881f === "new_car") {
      main_browser.execute("APPS.state.new_car.show = true;");
    } else if (_0x28881f === "daily_prize") {
      mp.events.callRemote("Server_OpenEveryDayPrize", true);
    } else if (_0x28881f === "popular_case") {
      mp.events.callRemote("Server_GoToCertainCaseThroughMenu", popularCase);
    } else {
      if (_0x28881f === "donate") {
        return;
      }
      if (_0x28881f === "property") {
        if (isPropertyLoaded) {
          main_browser.execute("APPS.state.propertyNotify.show = true;");
        } else {
          mp.events.callRemote("Server_RequestPlayerPropertyInfo");
        }
      } else if (_0x28881f === "special_offer") {
        mp.events.callRemote("Server_RequestShowSpecialOffer");
      } else if (_0x28881f === "battle_pass") {
        mp.events.callRemote("Server_OpenBattlePass");
      }
    }
    inLobbyModal = _0x28881f;
  }
});
mp.events.add("Client_CloseLobbyModal", () => {
  PlayBaseAudio("base_mouse_click");
  closeLobbyModal();
});
global.closeLobbyModal = function () {
  if (inLobby || inLobbyModal) {
    if (inLobbyModal === "new_car") {
      main_browser.execute("APPS.state.new_car.show = false;");
    } else if (inLobbyModal === "daily_prize") {
      main_browser.execute("APPS.state.daily_login.show = false;");
      MainThemeOpened = false;
    } else if (inLobbyModal === "popular_case") {
      if (IN_DonateOpened) {
        if (in_donate_browser) {
          in_donate_browser.destroy();
          in_donate_browser = null;
        }
        IN_DonateOpened = false;
        return;
      }
      main_browser.execute("APPS.state.donateShop.show = false;");
      DonateOpened = false;
    } else if (inLobbyModal === "donate") {
      if (!IN_DonateOpened) {
        return;
      }
      if (in_donate_browser) {
        in_donate_browser.destroy();
        in_donate_browser = null;
      }
      IN_DonateOpened = false;
    } else if (inLobbyModal === "property") {
      main_browser.execute("APPS.state.propertyNotify.show = false;");
    } else if (inLobbyModal === "special_offer") {
      closeSpecialOffer();
    } else if (inLobbyModal === "battle_pass") {
      CloseBattlePass();
    }
    inLobbyModal = false;
  }
};
mp.keys.bind(27, false, function () {
  if (inLobby) {
    closeLobbyModal();
  }
});
mp.events.add("Client_LobbyMouseMove", (_0x5322c9, _0x3b397f) => {
  if (!inLobby || !isLobbyHeadTrackingActive) {
    return;
  }
  if (!localcamera) {
    return;
  }
  const _0x56f532 = Date.now();
  if (_0x56f532 - lastMouseLookUpdate < 50) {
    return;
  }
  lastMouseLookUpdate = _0x56f532;
  const _0x30d8b9 = localcamera.getCoord();
  const _0xdcdc4 = localcamera.getRot(2);
  const _0x1907c4 = mp.game.graphics.getScreenActiveResolution(0, 0);
  const _0x2be16d = _0x1907c4.x / _0x1907c4.y;
  const _0x3d72d3 = _0x5322c9 * 2 - 1;
  const _0x3b435f = _0x3b397f * 2 - 1;
  const _0x379692 = Math.PI * 60 / 180;
  const _0x3e9141 = Math.tan(_0x379692 / 2);
  const _0x54f5c1 = _0x3d72d3 * _0x3e9141 * _0x2be16d;
  const _0x1b5d49 = -_0x3b435f * _0x3e9141;
  _0xdcdc4.x;
  Math.PI;
  _0xdcdc4.y;
  Math.PI;
  const _0xcdefd8 = _0xdcdc4.z * (Math.PI / 180);
  let _0x427050 = _0x54f5c1 * Math.cos(_0xcdefd8) - Math.sin(_0xcdefd8) * -1;
  let _0x3452cd = _0x54f5c1 * Math.sin(_0xcdefd8) + Math.cos(_0xcdefd8) * -1;
  let _0x4f1523 = _0x1b5d49;
  const _0x1bb3c7 = Math.sqrt(_0x427050 * _0x427050 + _0x3452cd * _0x3452cd + _0x4f1523 * _0x4f1523);
  _0x427050 /= _0x1bb3c7;
  _0x3452cd /= _0x1bb3c7;
  _0x4f1523 /= _0x1bb3c7;
  const _0x21e612 = _0x30d8b9.x + _0x427050 * 4;
  const _0x325ec8 = _0x30d8b9.y + _0x3452cd * 4;
  const _0x4db3a1 = _0x30d8b9.z + _0x4f1523 * 4;
  mp.game.task.lookAtCoord(mp.players.local.handle, _0x21e612, _0x325ec8, _0x4db3a1, -1, 2048, 2);
});
let lobbyCreatedObjects = [];
function SpawnLobbyObjects() {
  try {
    if (LOBBY_IPL && LOBBY_IPL.length > 0) {
      for (const _0x5820ba of LOBBY_IPL) {
        mp.game.streaming.requestIpl(_0x5820ba);
      }
      return;
    }
    if (isLobbyObjectsCreated || LOBBY_OBJECTS_LIST.length === 0) {
      return;
    }
    for (let _0x1a2a1f = 0; _0x1a2a1f < LOBBY_OBJECTS_LIST.length; _0x1a2a1f++) {
      const _0x152c2f = LOBBY_OBJECTS_LIST[_0x1a2a1f];
      const _0x1b6cb4 = new mp.Vector3(_0x152c2f.pos[0], _0x152c2f.pos[1], _0x152c2f.pos[2]);
      const _0x25d46b = _0x152c2f.rot[0] || 0;
      const _0x4ce049 = _0x152c2f.rot[1] || 0;
      const _0x17f9a6 = _0x152c2f.rot[2] || 0;
      let _0x5e7737 = mp.objects.new(mp.game.joaat(_0x152c2f.propName), _0x1b6cb4, {
        dimension: mp.players.local.dimension,
        rotation: {
          x: _0x25d46b,
          y: _0x4ce049,
          z: _0x17f9a6
        }
      });
      if (_0x5e7737) {
        _0x5e7737.setRotation(_0x25d46b, _0x4ce049, _0x17f9a6, 2, true);
        lobbyCreatedObjects.push(_0x5e7737);
      } else {
        mp.gui.chat.push("[GrandRace Error] Failed to create lobby object: " + _0x152c2f.propName);
      }
    }
    isLobbyObjectsCreated = true;
  } catch (_0x5db407) {
    mp.gui.chat.push("[Lobby Spawn Obj Error] " + _0x5db407);
  }
}
function ClearLobbyObjects() {
  if (LOBBY_IPL && LOBBY_IPL.length > 0) {
    for (const _0x4ed25d of LOBBY_IPL) {
      mp.game.streaming.removeIpl(_0x4ed25d);
    }
  } else {
    for (let _0x4dd4e2 of lobbyCreatedObjects) {
      if (_0x4dd4e2 && mp.objects.exists(_0x4dd4e2)) {
        _0x4dd4e2.destroy();
      }
    }
    lobbyCreatedObjects = [];
    isLobbyObjectsCreated = false;
  }
}
const LOBBY_OBJECTS_LIST = [{
  propName: "prop_worklight_02a",
  pos: [95.1548, 7075.58, 0.973403],
  rot: [0, 0, -128]
}, {
  propName: "prop_worklight_02a",
  pos: [95.0112, 7079.07, 0.978927],
  rot: [0, 0, -56]
}, {
  propName: "prop_worklight_02a",
  pos: [95.3173, 7077.49, 0.975863],
  rot: [-27, 0, -88]
}, {
  propName: "grand_xmas_prop_igloo",
  pos: [76.6931, 7078.49, 0.967983],
  rot: [0, 0, -25]
}, {
  propName: "grand_xmas_prop_igloo",
  pos: [84.7086, 7083.27, 1.00322],
  rot: [0, 0, -69]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [87.6744, 7081.58, 0.899949],
  rot: [0, 0, 80]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [87.9761, 7072.55, 0.673301],
  rot: [0, 0, 56]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [79.8968, 7079.49, 0.943653],
  rot: [0, 0, 118]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [79.071, 7074.66, 0.94938],
  rot: [0, 0, 78]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [83.8988, 7079.93, 0.952765],
  rot: [0, 0, 56]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [69.2116, 7071.21, 2.35844],
  rot: [0, 0, 88]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [71.7179, 7069.31, 2.14521],
  rot: [0, 0, -43]
}, {
  propName: "grand_xmas_prop_gifts",
  pos: [78.0844, 7072.89, 1.16997],
  rot: [0, 0, 104]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [78.6426, 7069.15, 0.904088],
  rot: [0, 0, 99]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [79.6673, 7069.16, 0.605767],
  rot: [0, 0, 127]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [79.2259, 7070.08, 0.379079],
  rot: [0, 0, 131]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [77.8313, 7069.43, 0.715435],
  rot: [0, 0, 124]
}, {
  propName: "grand_xmas_prop_tree_04",
  pos: [78.5085, 7070.47, 0.702981],
  rot: [0, 0, 124]
}, {
  propName: "grand_xmas_prop_tree_04",
  pos: [80.4028, 7068.86, 0.547066],
  rot: [0, 0, 119]
}, {
  propName: "gr_prop_xmas_fallentree",
  pos: [80.1974, 7070.36, 1.05416],
  rot: [0, 0, 132]
}, {
  propName: "gr_prop_xmas_stonepillar_1",
  pos: [66.1695, 7070.55, 0.86028],
  rot: [0, 0, 64]
}, {
  propName: "gr_prop_xmas_stonepillar_1",
  pos: [69.5982, 7076.4, 0.971064],
  rot: [0, 0, 145]
}, {
  propName: "gr_prop_xmas_stonepillar_1",
  pos: [72.8113, 7081.23, 0.968257],
  rot: [0, 0, 140]
}, {
  propName: "gr_prop_xmas_stonewall_1",
  pos: [67.0206, 7071.88, 0.692848],
  rot: [0, 0, 149]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [68.1602, 7073.74, 0.947722],
  rot: [0, 0, 151]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [68.8676, 7075.17, 0.944027],
  rot: [0, 0, -31]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [70.3781, 7077.55, 0.903915],
  rot: [0, 0, -33]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [71.6947, 7079.57, 0.982425],
  rot: [0, 0, -34]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [73.0149, 7081.44, 0.967894],
  rot: [0, 0, -37]
}, {
  propName: "gr_prop_xmas_stonewall_2",
  pos: [74.9625, 7083.02, 1.01669],
  rot: [0, 0, 124]
}, {
  propName: "gr_prop_xmas_stonearch",
  pos: [73.2469, 7067.45, 0.762788],
  rot: [0, 0, 154]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [69.583, 7077.25, 0.982395],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [68.2637, 7075.64, 0.982343],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [68.3461, 7076.42, 0.979767],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [69.0248, 7076.54, 0.98276],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [67.8526, 7074.77, 0.983475],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [67.5335, 7073.98, 0.984989],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.8107, 7073.08, 0.985487],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.6435, 7072.2, 0.97178],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.0237, 7071.44, 0.975988],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [67.5049, 7075.49, 0.978807],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [67.1694, 7074.66, 0.985924],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.6795, 7073.91, 0.985907],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.19, 7072.93, 0.985787],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [65.9387, 7072.28, 0.985714],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [68.879, 7077.41, 0.978505],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [70.0982, 7077.8, 0.982481],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [69.4077, 7077.99, 0.978525],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [69.8209, 7078.67, 0.97764],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [70.5095, 7078.34, 0.982218],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [70.8182, 7079.19, 0.980213],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [70.1304, 7079.4, 0.976195],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [71.5191, 7079.68, 0.981319],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [70.825, 7079.92, 0.9773],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [71.8945, 7080.26, 0.980659],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [71.3276, 7080.54, 0.97705],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [72.244, 7081, 0.979244],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [72.1095, 7082.11, 0.974214],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [72.7495, 7081.85, 0.987485],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [71.7104, 7081.5, 0.974902],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [73.3087, 7082.4, 0.993951],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [73.9433, 7082.93, 1.05502],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [74.6075, 7083.4, 1.1169],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [74.0257, 7083.83, 1.08382],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [73.4561, 7083.6, 1.03527],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [72.682, 7083.19, 0.980203],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [65.5323, 7070.71, 0.974447],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [64.512, 7070.46, 0.985801],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [64.3408, 7069.15, 0.972636],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [64.4069, 7069.82, 0.974682],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.0276, 7069.84, 0.917935],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_tree_05",
  pos: [66.9529, 7069.82, 0.870521],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_biggift3",
  pos: [78.3566, 7075.43, 1.57667],
  rot: [0, 0, 102]
}, {
  propName: "grand_xmas_prop_biggift",
  pos: [77.8609, 7074.07, 1.31981],
  rot: [0, 0, 140]
}, {
  propName: "prop_xmas_tree_int",
  pos: [76.5111, 7073.7, 1.24609],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.5948, 7073.05, 1.19033],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [74.6439, 7074.04, 1.24744],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.6146, 7074.62, 1.24874],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [76.0715, 7074.24, 1.68289],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.6174, 7073.76, 1.21307],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [76.0794, 7073.38, 1.38975],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.887, 7073.78, 2.61612],
  rot: [0, 0, 102]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.7126, 7073.56, 2.36384],
  rot: [0, 0, 91]
}, {
  propName: "prop_xmas_tree_int",
  pos: [75.5062, 7074.09, 2.3158],
  rot: [0, 0, -45]
}, {
  propName: "prop_tree_stump_01",
  pos: [84.3234, 7069.38, 0.764184],
  rot: [0, 0, 104]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [44.9915, 7080.28, 0.631024],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [41.0527, 7085.42, 0.126546],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [45.4245, 7081.95, -2.56459],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [42.7427, 7083.74, -3.16207],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [49.9134, 7065.12, -3.88802],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [39.9561, 7083.85, -0.839052],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [51.3567, 7093.58, 0.356434],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [50.7333, 7091.59, -0.239345],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [48.3429, 7091.72, -1.57139],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [49.6963, 7088.78, -2.30188],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [51.5775, 7089.3, -1.25361],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [49.3704, 7059.75, -0.958612],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [44.8434, 7059.95, -3.10238],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [44.8722, 7061.7, -0.899565],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [46.8945, 7061.03, -1.88586],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [44.5577, 7051.12, -0.601552],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [43.9118, 7052.44, 2.6828],
  rot: [0, 0, 20]
}, {
  propName: "test_tree_cedar_trunk_001",
  pos: [44.462, 7053.79, 2.74693],
  rot: [0, 0, 20]
}, {
  propName: "xm3_prop_xm3_snowman_01b",
  pos: [84.6068, 7079.57, 0.920394],
  rot: [0, 0, 49]
}, {
  propName: "m23_2_prop_m32_candycane_01a",
  pos: [87.6349, 7081.39, 0.956519],
  rot: [0, 0, -76]
}, {
  propName: "m23_2_prop_m32_candycane_01a",
  pos: [80.0871, 7079.22, 0.970766],
  rot: [0, 0, -35]
}, {
  propName: "xm3_prop_xm3_snowman_01a",
  pos: [82.6548, 7070.92, 0.833689],
  rot: [0, 0, 127]
}, {
  propName: "m23_2_prop_m32_sleigh_01a",
  pos: [88.8444, 7071.34, 0.605781],
  rot: [0, 6, -74]
}, {
  propName: "prop_beach_fire",
  pos: [85.2982, 7074.45, 1.01388],
  rot: [0, 0, 88]
}, {
  propName: "grand_xmas_prop_prop_snow_tree_03_h",
  pos: [78.7408, 7083.22, 0.895573],
  rot: [0, 0, 63]
}, {
  propName: "prop_tree_log_01",
  pos: [83.8878, 7074.41, 0.591088],
  rot: [0, 0, 115]
}, {
  propName: "prop_tree_log_02",
  pos: [85.7789, 7076.16, 0.583759],
  rot: [0, 0, -20]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [66.6428, 7066.92, 5.38098],
  rot: [0, 4, 106]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [50.3577, 7076.77, 11.6813],
  rot: [0, 16, 87]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [50.0576, 7078.51, 8.82273],
  rot: [0, -10, 82]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [49.3806, 7077.87, 14.6418],
  rot: [0, 0, 84]
}, {
  propName: "grand_xmas_prop_gingerhouse",
  pos: [86.3378, 7070.67, 0.331048],
  rot: [0, 0, 158]
}, {
  propName: "grand_xmas_prop_neontree",
  pos: [89.1985, 7068.37, 2.75873],
  rot: [0, 0, 99]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [88.5345, 7077.08, 0.867619],
  rot: [0, 0, 89]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [89.4463, 7074.8, 0.649263],
  rot: [0, 0, 68]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [84.9161, 7077.78, 0.854858],
  rot: [0, 0, 88]
}, {
  propName: "grand_xmas_prop22_snowpile_06",
  pos: [85.9795, 7075.79, 0.650963],
  rot: [0, 0, 71]
}, {
  propName: "apa_mp_h_stn_sofa_daybed_01",
  pos: [76.0286, 7078.26, 0.791489],
  rot: [0, 0, 63]
}, {
  propName: "apa_mp_h_stn_sofa_daybed_01",
  pos: [76.7136, 7079.33, 0.814011],
  rot: [-1, 0, 67]
}, {
  propName: "m23_2_prop_m32_planninglight_01a",
  pos: [76.4192, 7078.55, 3.61045],
  rot: [0, 0, 62]
}, {
  propName: "m23_2_prop_m32_planninglight_01a",
  pos: [84.3854, 7083.42, 3.38655],
  rot: [0, 0, 38]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [86.834, 7080.71, 0.941985],
  rot: [0, 0, 87]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [84.6675, 7080, 1.01232],
  rot: [0, 0, 81]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [79.214, 7076.17, 1.00915],
  rot: [0, 0, 62]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [80.0656, 7078.17, 1.01139],
  rot: [0, 0, 91]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [87.5727, 7071.36, 0.720864],
  rot: [0, 0, 77]
}, {
  propName: "xs_prop_vipl_lights_floor",
  pos: [85.0981, 7070.58, 1.68346],
  rot: [28, 81, 178]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [79.6208, 7060.79, 4.58448],
  rot: [-52, 0, -5]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [70.7807, 7058.21, 6.46152],
  rot: [-48, 0, 7]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [68.1003, 7056.3, 7.92851],
  rot: [62, 0, -167]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [64.2235, 7057.76, 6.07776],
  rot: [62, 0, 176]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [61.5247, 7057.64, 7.81626],
  rot: [64, 0, -176]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [58.8861, 7057.41, 7.85609],
  rot: [72, -8, -177]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [74.003, 7058.35, 6.13417],
  rot: [61, 0, -169]
}, {
  propName: "xs_propintxmas_terror_2018",
  pos: [64.3441, 7054.21, 10.702],
  rot: [57, -4, 180]
}, {
  propName: "p_ferris_wheel_amo_l",
  pos: [18.5069, 7054.69, 19.008],
  rot: [0, 0, 18]
}, {
  propName: "prop_snow_bench_01",
  pos: [89.3728, 7081.26, 0.924024],
  rot: [0, 0, 35]
}, {
  propName: "v_ilev_mr_rasberryclean",
  pos: [84.0438, 7074.13, 1.17897],
  rot: [0, 0, 142]
}, {
  propName: "prop_snow_flower_01",
  pos: [89.8184, 7071.14, 1.03254],
  rot: [90, 0, 111]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [59.7602, 7058.54, 13.0308],
  rot: [0, -26, -84]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [60.3152, 7056.37, 13.9904],
  rot: [0, -16, -79]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [70.0567, 7061.91, 6.55794],
  rot: [0, -11, -52]
}, {
  propName: "grand_xmas_prop_neondeer",
  pos: [78.4929, 7061.07, 11.0417],
  rot: [0, -26, -64]
}, {
  propName: "xm3_prop_xm3_snowman_01b",
  pos: [83.1104, 7074.32, 0.954559],
  rot: [0, 0, 104]
}, {
  propName: "prop_xmas_tree_int",
  pos: [83.6306, 7072.1, 1.19124],
  rot: [0, 0, 104]
}, {
  propName: "m23_2_prop_m32_candycane_01a",
  pos: [90.6073, 7070.49, 0.566169],
  rot: [0, 0, 104]
}, {
  propName: "v_ilev_mr_rasberryclean",
  pos: [88.5401, 7080.48, 1.39223],
  rot: [0, 0, 104]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [55.3301, 7054.37, 13.7822],
  rot: [0, 0, 117]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [54.5599, 7054.08, 9.91621],
  rot: [0, 15, 104]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [46.3731, 7072.37, 17.9234],
  rot: [0, -12, 104]
}, {
  propName: "grand_xmas_prop_garlands_stars",
  pos: [52.05, 7053.52, 17.2467],
  rot: [0, -28, 104]
}];
const YETI_START_POS = LOBBY_START_PLAYER_POSITION;
const YETI_END_POS = new mp.Vector3(1855.391, 3524.337, 37.506);
const YETI_HEADING = 146.626;
const YETI_MODEL = "a_m_y_musclbeac_01";
let yetiTimeOut = null;
let yetiPed = null;
let counterToSpawnYeti = 0;
function spawnYetiEasterEgg() {
  if (inLobby && yetiPed == null && yetiTimeOut == null) {
    yetiPed = mp.peds.new(mp.game.joaat(YETI_MODEL), YETI_START_POS, YETI_HEADING, mp.players.local.dimension);
    yetiPed.freezePosition(false);
    yetiTimeOut = setTimeout(() => {
      if (!inLobby) {
        return;
      }
      if (yetiPed == null && !mp.peds.exists(yetiPed)) {
        return;
      }
      yetiPed.freezePosition(false);
      yetiPed.taskGoToCoordAnyMeans(LOBBY_PLAYER_POSITION.x, LOBBY_PLAYER_POSITION.y + 0.02, LOBBY_PLAYER_POSITION.z, 1, 0, false, 786603, 3212836864);
      main_browser.execute("APPS.state.introLobby.userInfo.isPlayerInMainPosition = false;");
      clearLobbyAnimations();
      mp.players.local.freezePosition(false);
      mp.players.local.taskGoToCoordAnyMeans(YETI_END_POS.x, YETI_END_POS.y, YETI_END_POS.z, 2, 0, false, 786603, 3212836864);
      const _0x332d94 = Math.floor((serverTimeMs - new Date("2016-03-01").getTime()) / 86400000);
      setTimeout(() => {
        if (inLobby) {
          main_browser.execute("APPS.state.introLobby.userInfo.name = 'Napal Fedorov'");
          main_browser.execute("APPS.state.introLobby.userInfo.lvl = 1");
          main_browser.execute("APPS.state.introLobby.userInfo.carsAmount = 29");
          main_browser.execute("APPS.state.introLobby.userInfo.lvlProgress = null");
          main_browser.execute("APPS.state.introLobby.userInfo.daysSinceRegistration = " + _0x332d94);
          main_browser.execute("APPS.state.introLobby.userInfo.isPlayerInMainPosition = true;");
        }
      }, 2500);
    }, 1000);
  }
}
function despawnYetiEasterEgg() {
  if (yetiPed && mp.peds.exists(yetiPed)) {
    yetiPed.destroy();
    yetiPed = null;
  }
}
function clearLobbyTrainLoadTimer() {
  if (lobbyTrainLoadTimer) {
    clearInterval(lobbyTrainLoadTimer);
    lobbyTrainLoadTimer = null;
  }
}
function SpawnLobbyTrain() {
  if (!inLobby) {
    return;
  }
  clearLobbyTrainLoadTimer();
  const _0x485245 = FREIGHT_MODELS.map(_0x28570b => mp.game.joaat(_0x28570b));
  for (const _0x29ec35 of _0x485245) {
    if (!mp.game.streaming.hasModelLoaded(_0x29ec35)) {
      mp.game.streaming.requestModel(_0x29ec35);
    }
  }
  const _0x2911f4 = Date.now() + 5000;
  lobbyTrainLoadTimer = setInterval(() => {
    if (!inLobby) {
      clearLobbyTrainLoadTimer();
      for (const _0x5a11b3 of _0x485245) {
        mp.game.streaming.setModelAsNoLongerNeeded(_0x5a11b3);
      }
      return;
    }
    const _0x3f4c09 = _0x485245.every(_0x374c13 => mp.game.streaming.hasModelLoaded(_0x374c13));
    const _0x585208 = Date.now() >= _0x2911f4;
    if (_0x3f4c09 || _0x585208) {
      clearLobbyTrainLoadTimer();
      if (inLobby) {
        if (_0x3f4c09) {
          lobbyTrain = mp.game.vehicle.createMissionTrain(15, TRAIN_SPAWN_POS.x, TRAIN_SPAWN_POS.y, TRAIN_SPAWN_POS.z, true, false, false);
        }
      } else {
        for (const _0x680aa8 of _0x485245) {
          mp.game.streaming.setModelAsNoLongerNeeded(_0x680aa8);
        }
      }
    }
  }, 50);
}
function despawnLobbyTrain() {
  clearLobbyTrainLoadTimer();
  if (lobbyTrain) {
    mp.game.vehicle.deleteMissionTrain(lobbyTrain);
    lobbyTrain = null;
    for (const _0x556d3c of FREIGHT_MODELS) {
      mp.game.streaming.setModelAsNoLongerNeeded(mp.game.joaat(_0x556d3c));
    }
  }
}
mp.events.add("debugglobbySpawnYetiEasterEgg", () => {
  mp.players.local.taskGoToCoordAnyMeans(LOBBY_PLAYER_POSITION.x, LOBBY_PLAYER_POSITION.y, LOBBY_PLAYER_POSITION.z, 2, 0, false, 786603, 3212836864);
});