mp.events.add("Client_MafiaBusinessWar", () => {
  if (MemberEventsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_MafiaBusinessWar");
    }
  }
});
mp.events.add("Client_CloseMafiaBusinessList", () => {
  if (MafiaInterfaceOpened) {
    CloseMafiaInterface();
  }
});
mp.events.add("Client_OpenMafiaWarInterface", (_0x2e383b, _0x6e4381, _0x4b78ea, _0x804312, _0xabeedd) => {
  CloseMemberEvents();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x1e2cbb = "{\"member\":'" + _0x2e383b + "',\"business_owned\":" + JSON.stringify(_0x6e4381) + ",\"business_free\":" + JSON.stringify(_0x4b78ea) + ", \"owned\": [" + _0x804312 + "], \"online\": [" + _0xabeedd + "],\"show\":true}";
  main_browser.execute("APPS.state.mafia_capture = " + _0x1e2cbb);
  MafiaInterfaceOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMafiaInterface = function () {
  if (MafiaInterfaceOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.mafia_capture.show = false;");
    MafiaInterfaceOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
let lastTick;
let maf_marker = null;
let maf_colshape = null;
let maf_blips = null;
let maf_checkpoint = null;
mp.events.add("Client_MafiaDestroyBlipVz", () => {
  if (maf_colshape && mp.colshapes.exists(maf_colshape)) {
    maf_colshape.destroy();
    maf_colshape = null;
  }
  if (maf_blips && mp.blips.exists(maf_blips)) {
    maf_blips.destroy();
    maf_blips = null;
  }
  if (maf_checkpoint && mp.markers.exists(maf_checkpoint)) {
    maf_checkpoint.destroy();
    maf_checkpoint = null;
  }
});
mp.events.add("Client_MafiaSetBlipVz", _0x30152c => {
  if (maf_colshape && mp.colshapes.exists(maf_colshape)) {
    maf_colshape.destroy();
    maf_colshape = null;
  }
  if (maf_blips && mp.blips.exists(maf_blips)) {
    maf_blips.destroy();
    maf_blips = null;
  }
  if (maf_checkpoint && mp.markers.exists(maf_checkpoint)) {
    maf_checkpoint.destroy();
    maf_checkpoint = null;
  }
  let _0x184c76 = [];
  switch (_0x30152c) {
    case 7:
      _0x184c76 = [101.776, -1936.95, 20.804];
      break;
    case 8:
      _0x184c76 = [-180.625, -1678.876, 33.337];
      break;
    case 9:
      _0x184c76 = [-1126.055, -1594.395, 4.316];
      break;
    case 10:
      _0x184c76 = [402.021, -1499.691, 29.292];
      break;
    case 11:
      _0x184c76 = [805.686, -2124.217, 29.346];
      break;
    case 15:
      _0x184c76 = [466.278, 255.059, 103.206];
      break;
    case 16:
      _0x184c76 = [-1886.98, -355.359, 49.268];
      break;
    case 17:
      _0x184c76 = [-1242.433, -223.906, 40.334];
      break;
    case 18:
      _0x184c76 = [-93.529, 148.872, 81.522];
  }
  maf_checkpoint = mp.markers.new(1, new mp.Vector3(_0x184c76[0], _0x184c76[1], _0x184c76[2] - 1), 3, {
    direction: new mp.Vector3(0, 0, 0),
    color: [255, 255, 0, 255],
    visible: true,
    dimension: 0
  });
  maf_colshape = mp.colshapes.newCircle(_0x184c76[0], _0x184c76[1], 5);
  maf_colshape.is_delivert_vzh = true;
  maf_blips = mp.blips.new(1, new mp.Vector3(_0x184c76[0], _0x184c76[1], _0x184c76[2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  maf_blips.setRoute(true);
});
mp.events.add("Client_MafiaCanStartBizwar", _0x4e6160 => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_StartMafiaWar", _0x4e6160);
  }
});
mp.events.add("Client_MafiaRouteToBizID", _0x2aa67a => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_MafiaRouteToBizID", _0x2aa67a);
  }
});
mp.events.add("playerEnterColshape", _0x54f344 => {
  if (_0x54f344.is_delivert_vzh == 1 && localplayer.isInAnyVehicle(false)) {
    if (new Date().getTime() - lastCheck < 2000) {
      return;
    }
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_MafiaVzhDone");
  } else if (_0x54f344.is_mafia_fund == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_mafia_fund = true;
  }
});
mp.events.add("playerExitColshape", _0x176071 => {
  if (_0x176071.is_mafia_fund == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_mafia_fund = false;
  }
});
mp.colshapes.newSphere(-1507.189, 1019.517, 95.268, 2, 3).is_mafia_fund = true;
mp.colshapes.newSphere(-1338.023, 1133.193, 191.161, 2, 1).is_mafia_fund = true;
mp.colshapes.newSphere(-981.097, 1317.717, 199.246, 2, 2).is_mafia_fund = true;
mp.colshapes.newSphere(-837.154, 1181.924, 199.246, 2, 4).is_mafia_fund = true;