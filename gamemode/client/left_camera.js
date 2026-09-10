let camera_hand_player = null;
global.camera_hand_player_active = null;
let last_camer_change = new Date().getTime();
global.at_fire_pushed = false;
global.TogglePlayerCameraSide = function () {
  if (loggedin && !chatActive) {
    if (camera_hand_player_active) {
      if (camera_hand_player_active != 1) {
        return;
      }
      DisableWeaponCamera();
    } else {
      if (GlobalCheck() == 1 && !at_small_timer_event && !at_famwar && !at_duel_location) {
        return;
      }
      if (mp.game.invoke("0x8D4D46230B2C353A") == 4 || mp.game.invoke("0x2E397FD2ECD37C87", mp.players.local) == 0) {
        return;
      }
      if (new Date().getTime() - last_camer_change < 200) {
        return;
      }
      if (at_fire_pushed == 1 || playerincapture == 1 || localplayer.isAimingFromCover()) {
        return;
      }
      last_camer_change = new Date().getTime();
      if (camera_hand_player != null) {
        camera_hand_player.setActive(false);
        camera_hand_player.destroy();
        camera_hand_player = null;
      }
      camera_hand_player = mp.cameras.new("DEFAULT_SCRIPTED_CAMERA", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 0);
      camera_hand_player.setActive(true);
      mp.game.cam.renderScriptCams(true, true, 100, false, false);
      if (camera_hand_player == null) {
        return DisableWeaponCamera();
      }
      camera_hand_player_active = 1;
      SetCameraLook();
    }
  }
};
let gameplay_cam = null;
function SetCameraLook() {
  if (gameplay_cam) {
    gameplay_cam.destroy();
    gameplay_cam = undefined;
  }
  gameplay_cam = mp.cameras.new("gameplay");
  let _0x4b981f = gameplay_cam.getCoord();
  let _0x18f5d3 = gameplay_cam.getRot(2);
  let _0x9ef76c = mp.game.invoke("0x65019750A0324133");
  let _0x1c26e0 = mp.players.local.getOffsetFromGivenWorldCoords(_0x4b981f.x, _0x4b981f.y, _0x4b981f.z);
  let _0x329c76 = mp.players.local.getOffsetFromInWorldCoords(_0x1c26e0.x, _0x1c26e0.y, _0x1c26e0.z);
  camera_hand_player.setCoord(_0x329c76.x, _0x329c76.y, _0x329c76.z);
  camera_hand_player.setRot(_0x18f5d3.x, _0x18f5d3.y, _0x18f5d3.z, 0);
  camera_hand_player.attachTo(mp.players.local.handle, _0x1c26e0.x - 0.75, _0x1c26e0.y, _0x1c26e0.z, true);
  camera_hand_player.setFov(int32ToFloat(_0x9ef76c));
  mp.game.ui.showHudComponentThisFrame(14);
}
function DisableWeaponCamera() {
  mp.game.cam.renderScriptCams(false, true, 100, false, false);
  setTimeout(function () {
    if (camera_hand_player != null && camera_hand_player_active != 1) {
      camera_hand_player.setActive(false);
      camera_hand_player.destroy();
      camera_hand_player = null;
    }
  }, 200);
  camera_hand_player_active = 0;
  if (gameplay_cam) {
    gameplay_cam.destroy();
    gameplay_cam = undefined;
  }
}
mp.events.add("render", () => {
  if (camera_hand_player_active) {
    if (mp.game.invoke("0x8D4D46230B2C353A") != 4 && mp.game.invoke("0x2E397FD2ECD37C87", mp.players.local) != 0) {
      SetCameraLook();
    } else {
      TogglePlayerCameraSide();
    }
  }
});
global.int32ToFloat = _0x5a31e4 => {
  const _0x359a39 = new ArrayBuffer(16);
  const _0x519101 = new DataView(_0x359a39);
  _0x519101.setInt32(1, _0x5a31e4);
  return _0x519101.getFloat32(1);
};