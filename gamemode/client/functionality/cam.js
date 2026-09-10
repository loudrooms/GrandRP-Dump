global.cameraControl = false;
let cameraHeight = 0.7;
let cameraDistance = 3;
global.setCameraForwardPositionAndFaceToPed = function (_0x5a2fbb = 1, _0x57429c = 0.7, _0x58b674 = 3) {
  const _0x309827 = mp.players.local.getForwardVector();
  const _0x46659e = new mp.Vector3(mp.players.local.position.x + _0x309827.x * _0x58b674, mp.players.local.position.y + _0x309827.y * _0x58b674, mp.players.local.position.z + _0x57429c);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default", _0x46659e, new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, _0x5a2fbb, true, false);
  cameraHeight = _0x57429c;
  cameraDistance = _0x58b674;
  cameraControl = true;
};
global.destroyLocalCameraAndAnimBack = function (_0x1fb2fb = 1) {
  mp.game.cam.renderScriptCams(false, true, _0x1fb2fb, true, false);
  cameraControl = false;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
};
mp.events.add("render", () => {
  if (cameraControl && localcamera != null) {
    const _0x423c40 = mp.players.local.getForwardVector();
    const _0xd28e79 = new mp.Vector3(mp.players.local.position.x + _0x423c40.x * cameraDistance, mp.players.local.position.y + _0x423c40.y * cameraDistance, mp.players.local.position.z + cameraHeight);
    localcamera.pointAtCoord(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z);
    localcamera.setCoord(_0xd28e79.x, _0xd28e79.y, _0xd28e79.z);
  }
});