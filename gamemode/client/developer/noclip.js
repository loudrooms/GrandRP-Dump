let is_able_to_noclip = false;
mp.events.add("Client_CanActivateNoClip", _0x56e10 => {
  if (is_admin === true) {
    is_able_to_noclip = _0x56e10;
  }
});
var noClipCamera;
function getNormalizedVector(_0x4ac311) {
  var _0x21b8e = Math.sqrt(_0x4ac311.x * _0x4ac311.x + _0x4ac311.y * _0x4ac311.y + _0x4ac311.z * _0x4ac311.z);
  _0x4ac311.x = _0x4ac311.x / _0x21b8e;
  _0x4ac311.y = _0x4ac311.y / _0x21b8e;
  _0x4ac311.z = _0x4ac311.z / _0x21b8e;
  return _0x4ac311;
}
function getCrossProduct(_0x28650d, _0x240304) {
  var _0x47a940 = new mp.Vector3(0, 0, 0);
  _0x47a940.x = _0x28650d.y * _0x240304.z - _0x28650d.z * _0x240304.y;
  _0x47a940.y = _0x28650d.z * _0x240304.x - _0x28650d.x * _0x240304.z;
  _0x47a940.z = _0x28650d.x * _0x240304.y - _0x28650d.y * _0x240304.x;
  return _0x47a940;
}
var bindASCIIKeys = {
  LCtrl: 17,
  Shift: 16,
  Q: 69,
  E: 81
};
var isNoClip = false;
global.acNoclipActive = false;
var shiftModifier = false;
var controlModifier = false;
const localPlayer = mp.players.local;
function startNoClip() {
  var _0x5c3722 = new mp.Vector3(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z);
  var _0x57ca39 = mp.game.cam.getGameplayCamRot(2);
  (noClipCamera = mp.cameras.new("default", _0x5c3722, _0x57ca39, 45)).setActive(true);
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  localPlayer.freezePosition(true);
  localPlayer.setInvincible(true);
  localPlayer.setVisible(false, false);
  localPlayer.setCollision(false, false);
  global.acNoclipActive = true;
}
function stopNoClip() {
  if (noClipCamera) {
    localPlayer.position = noClipCamera.getCoord();
    localPlayer.setHeading(noClipCamera.getRot(2).z);
    noClipCamera.destroy(true);
    noClipCamera = null;
  }
  mp.game.cam.renderScriptCams(false, false, 0, true, false);
  localPlayer.freezePosition(false);
  localPlayer.setInvincible(false);
  localPlayer.setVisible(true, false);
  localPlayer.setCollision(true, false);
  global.acNoclipActive = false;
}
mp.keys.bind(88, true, function () {
  if (is_able_to_noclip && is_admin === true && GlobalCheck() != 1) {
    isNoClip = !isNoClip;
    mp.game.ui.displayRadar(!isNoClip);
    if (isNoClip) {
      startNoClip();
    } else {
      stopNoClip();
    }
    mp.game.audio.playSoundFrontend(-1, "Put_Away", "Phone_SoundSet_Michael", true);
  }
});
mp.events.add("render", function () {
  if (noClipCamera && !mp.gui.cursor.visible) {
    controlModifier = mp.keys.isDown(bindASCIIKeys.LCtrl);
    shiftModifier = mp.keys.isDown(bindASCIIKeys.Shift);
    var _0x4559ec = noClipCamera.getRot(2);
    var _0x13cc65 = 0.15;
    var _0x4b406d = 0.15;
    if (shiftModifier) {
      _0x13cc65 = 3;
    } else if (controlModifier) {
      _0x4b406d = 0.2;
    }
    var _0x46ab9a = mp.game.controls.getDisabledControlNormal(0, 220);
    var _0x207816 = mp.game.controls.getDisabledControlNormal(0, 221);
    var _0x1e794c = mp.game.controls.getDisabledControlNormal(0, 218);
    var _0x562cc0 = mp.game.controls.getDisabledControlNormal(0, 219);
    var _0x57a41f = noClipCamera.getCoord();
    var _0x377cf1 = noClipCamera.getDirection();
    var _0x50e07b = new mp.Vector3(0, 0, 0);
    _0x50e07b.x = _0x377cf1.x * _0x562cc0 * _0x13cc65 * _0x4b406d;
    _0x50e07b.y = _0x377cf1.y * _0x562cc0 * _0x13cc65 * _0x4b406d;
    _0x50e07b.z = _0x377cf1.z * _0x562cc0 * _0x13cc65 * _0x4b406d;
    var _0x155f6c = new mp.Vector3(0, 0, 1);
    var _0x13c47d = getCrossProduct(getNormalizedVector(_0x377cf1), getNormalizedVector(_0x155f6c));
    _0x13c47d.x *= _0x1e794c * 0.018;
    _0x13c47d.y *= _0x1e794c * 0.018;
    _0x13c47d.z *= _0x1e794c * 0.018;
    var _0x2c5c90 = 0;
    if (mp.keys.isDown(bindASCIIKeys.Q)) {
      _0x2c5c90 = 0.05;
    }
    var _0x11244c = 0;
    if (mp.keys.isDown(bindASCIIKeys.E)) {
      _0x11244c = 0.05;
    }
    mp.players.local.position = new mp.Vector3(_0x57a41f.x + _0x50e07b.x + 1, _0x57a41f.y + _0x50e07b.y + 1, _0x57a41f.z + _0x50e07b.z + 1);
    mp.players.local.heading = _0x377cf1.z;
    noClipCamera.setCoord(_0x57a41f.x - _0x50e07b.x + _0x13c47d.x, _0x57a41f.y - _0x50e07b.y + _0x13c47d.y, _0x57a41f.z - _0x50e07b.z + _0x13c47d.z + _0x2c5c90 - _0x11244c);
    noClipCamera.setRot(_0x4559ec.x + _0x207816 * -0.16, 0, _0x4559ec.z + _0x46ab9a * -0.16, 2);
  }
});