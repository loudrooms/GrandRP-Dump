const COUNTDOWN_COLORS = [237, 134, 38];
let scaleformHandle;
const DEFAULT_TIME_TO_START = 3;
let armWrestlingInterval;
let timeleft = 3;
let bShowGUI = false;
let intension = 0.5;
let bShowCountdown = false;
global.atWrestlingTable = false;
let bClickRender = false;
let lastArmWrestlingClick = 0;
const TABLE_DATA = [{
  playerIds: []
}, {
  playerIds: []
}, {
  playerIds: []
}, {
  playerIds: []
}, {
  playerIds: []
}, {
  playerIds: []
}];
global.atArmWrestlingTable = undefined;
let bAllowedToLeaveTable = false;
function releaseCountdownScaleform() {
  if (scaleformHandle) {
    mp.game.graphics.setScaleformMovieAsNoLongerNeeded(scaleformHandle);
    scaleformHandle = undefined;
  }
}
function isCountdownScaleformReady() {
  scaleformHandle ||= mp.game.graphics.requestScaleformMovie("COUNTDOWN");
  return !!scaleformHandle && !!mp.game.graphics.hasScaleformMovieLoaded(scaleformHandle);
}
function stopArmWrestlingInterval() {
  if (armWrestlingInterval != null) {
    clearInterval(armWrestlingInterval);
    armWrestlingInterval = undefined;
  }
}
mp.events.add("Client_StartArmWrestlingCountdown", (_0x36fe36, _0x412dae, _0x377d71) => {
  if (!!_0x377d71 && !(_0x377d71 > TABLE_DATA.length)) {
    releaseCountdownScaleform();
    isCountdownScaleformReady();
    timeleft = 3;
    TABLE_DATA[_0x377d71 - 1].playerIds = [_0x36fe36, _0x412dae];
    TABLE_DATA[_0x377d71 - 1].status = "PREPARING";
    bShowCountdown = true;
    bAllowedToLeaveTable = false;
    stopArmWrestlingInterval();
    armWrestlingInterval = setInterval(() => {
      timeleft--;
      if (timeleft <= -2) {
        stopArmWrestlingInterval();
        bShowCountdown = false;
        TABLE_DATA[_0x377d71 - 1].status = undefined;
        releaseCountdownScaleform();
        PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
        bClickRender = true;
      }
    }, 1000);
  }
});
mp.events.add("Client_UpdateArmWrestlingIntension", (_0x107fed, _0x20a7d3) => {
  if (!_0x20a7d3 || _0x20a7d3 > TABLE_DATA.length) {
    return;
  }
  if (!TABLE_DATA[_0x20a7d3 - 1]) {
    return;
  }
  if (!TABLE_DATA[_0x20a7d3 - 1].playerIds.length) {
    return;
  }
  const _0x4061c8 = TABLE_DATA[_0x20a7d3 - 1].playerIds[0] != null ? mp.players.atRemoteId(TABLE_DATA[_0x20a7d3 - 1].playerIds[0]) : undefined;
  const _0x3da3d1 = TABLE_DATA[_0x20a7d3 - 1].playerIds[1] != null ? mp.players.atRemoteId(TABLE_DATA[_0x20a7d3 - 1].playerIds[1]) : undefined;
  if (_0x4061c8 && mp.players.exists(_0x4061c8) && _0x4061c8.isPlayingAnim("mini@arm_wrestling", "sweep_a", 3)) {
    _0x4061c8.setAnimSpeed("mini@arm_wrestling", "sweep_a", 0.2);
    _0x4061c8.setAnimCurrentTime("mini@arm_wrestling", "sweep_a", parseFloat(_0x107fed));
  }
  if (_0x3da3d1 && mp.players.exists(_0x3da3d1) && _0x3da3d1.isPlayingAnim("mini@arm_wrestling", "sweep_b", 3)) {
    _0x3da3d1.setAnimSpeed("mini@arm_wrestling", "sweep_b", 0.2);
    _0x3da3d1.setAnimCurrentTime("mini@arm_wrestling", "sweep_b", parseFloat(_0x107fed));
  }
});
mp.events.add("render", () => {
  if (bShowCountdown) {
    if (isCountdownScaleformReady()) {
      if (timeleft > 0) {
        mp.game.graphics.beginScaleformMovieMethod(scaleformHandle, "FADE_MP");
        mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(timeleft.toString());
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[0]);
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[1]);
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[2]);
        mp.game.graphics.endScaleformMovieMethod();
      } else if (timeleft <= 0) {
        mp.game.graphics.beginScaleformMovieMethod(scaleformHandle, "SET_MESSAGE");
        mp.game.graphics.scaleformMovieMethodAddParamTextureNameString("CLICK");
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[0]);
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[1]);
        mp.game.graphics.scaleformMovieMethodAddParamInt(COUNTDOWN_COLORS[2]);
        mp.game.graphics.endScaleformMovieMethod();
      }
      mp.game.graphics.drawScaleformMovieFullscreen(scaleformHandle, COUNTDOWN_COLORS[0], COUNTDOWN_COLORS[1], COUNTDOWN_COLORS[2], 255, 0);
    }
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(0, 200, true);
    TABLE_DATA.forEach(_0x3625b0 => {
      if (_0x3625b0.status === "PREPARING" && _0x3625b0.playerIds && _0x3625b0.playerIds.length) {
        _0x3625b0.playerIds.forEach(_0x1c980e => {
          const _0xfa8d44 = mp.players.atRemoteId(_0x1c980e);
          if (_0xfa8d44 && mp.players.exists(_0xfa8d44)) {
            if (_0xfa8d44.isPlayingAnim("mini@arm_wrestling", "sweep_a", 3)) {
              _0xfa8d44.setAnimSpeed("mini@arm_wrestling", "sweep_a", 1);
              _0xfa8d44.setAnimCurrentTime("mini@arm_wrestling", "sweep_a", 0.5);
            } else if (_0xfa8d44.isPlayingAnim("mini@arm_wrestling", "sweep_b", 3)) {
              _0xfa8d44.setAnimSpeed("mini@arm_wrestling", "sweep_b", 1);
              _0xfa8d44.setAnimCurrentTime("mini@arm_wrestling", "sweep_b", 0.5);
            }
          }
        });
      }
    });
  }
  if (bClickRender) {
    mp.game.controls.disableControlAction(0, 24, true);
    mp.game.controls.disableControlAction(0, 200, true);
    if (mp.game.controls.isDisabledControlJustReleased(0, 24)) {
      mp.events.callRemote("Server_ArmWrestlingClickHandler");
    }
  }
  if (bAllowedToLeaveTable) {
    mp.game.controls.disableControlAction(0, 200, true);
  }
});
mp.events.add("Client_SetArmWrestlingVariables", (_0x21d333, _0x5260f1) => {
  atWrestlingTable = true;
  localplayer.freezePosition(true);
});
mp.events.add("Client_CleanPersonalArmWrestlingVars", () => {
  bClickRender = false;
  bShowCountdown = false;
  atWrestlingTable = false;
  bAllowedToLeaveTable = false;
  localplayer.freezePosition(false);
  stopArmWrestlingInterval();
  releaseCountdownScaleform();
});
const ARM_WRESTLING_COLSHAPES_POSITIONS = [{
  id: 1,
  position: new mp.Vector3(1217.002, -438.393, 67.222)
}, {
  id: 2,
  position: new mp.Vector3(1220.948, -439.333, 67.318)
}, {
  id: 3,
  position: new mp.Vector3(1224.336, -440.033, 67.471)
}, {
  id: 4,
  position: new mp.Vector3(1227.606, -427.323, 67.705)
}, {
  id: 5,
  position: new mp.Vector3(1224.374, -426.451, 67.689)
}, {
  id: 6,
  position: new mp.Vector3(1220.875, -425.64, 67.616)
}];
ARM_WRESTLING_COLSHAPES_POSITIONS.forEach(_0x14d945 => {
  mp.colshapes.newSphere(_0x14d945.position.x, _0x14d945.position.y, _0x14d945.position.z, 2).armWrestlingTable = _0x14d945.id;
});
mp.events.add("playerEnterColshape", _0x4554ba => {
  if (_0x4554ba.armWrestlingTable) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    atArmWrestlingTable = _0x4554ba.armWrestlingTable;
  }
});
mp.events.add("playerExitColshape", _0x3afc79 => {
  if (_0x3afc79.armWrestlingTable) {
    main_browser.execute("APPS.state.hud.interact = false;");
    atArmWrestlingTable = undefined;
  }
});
mp.events.add("Client_ArmWrestlingInteraction", () => {
  if (atArmWrestlingTable) {
    atArmWrestlingTable = undefined;
    main_browser.execute("APPS.state.hud.interact = false;");
    bAllowedToLeaveTable = true;
  }
});
mp.keys.bind(27, false, function () {
  if (bAllowedToLeaveTable) {
    if (new Date().getTime() - lastCheck < 500) {
      return;
    }
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LeaveArmWrestling");
  }
});