const textures_and_libraries = [["grandtextures", "icon-5", [0.5, 0.5]], ["grandtextures", "icon-1", [0.5, 0.5]], ["grandtextures", "icon-2", [0.5, 0.5]], ["grandtextures", "icon-3", [0.5, 0.5]], ["grandtextures", "icon-4", [0.5, 0.5]], ["grandtextures", "icon-6", [0.5, 0.5]], ["grandtextures", "icon-7", [0.5, 0.5]], ["grandtextures", "icon-8", [0.5, 0.5]], ["grandtextures", "icon-9", [0.5, 0.5]], ["grandtextures", "icon-10", [0.5, 0.5]], ["grandtextures", "icon-11", [0.5, 0.5]]];
global.shot_marker = function (_0x58a29d, _0x28f3b6) {
  const _0x573654 = {
    library: textures_and_libraries[_0x58a29d - 1][0],
    texture: textures_and_libraries[_0x58a29d - 1][1],
    size: textures_and_libraries[_0x58a29d - 1][2],
    position: _0x28f3b6,
    count: 0
  };
  list.push(_0x573654);
};
let list = [];
mp.events.add("render", () => {
  if (list) {
    list.forEach(_0x25bef9 => {
      const _0xb7a7fb = mp.game.graphics.world3dToScreen2d(_0x25bef9.position.x, _0x25bef9.position.y, _0x25bef9.position.z);
      if (!_0xb7a7fb) {
        return false;
      }
      drawSprite(_0x25bef9.library, _0x25bef9.texture, _0x25bef9.size, 0, [255, 255, 255, 255 - _0x25bef9.count], _0xb7a7fb.x, _0xb7a7fb.y);
      _0x25bef9.count += 1;
      if (_0x25bef9.count > 255) {
        const _0x3bb7bb = list.findIndex(_0x37b5da => _0x37b5da == _0x25bef9);
        if (_0x3bb7bb !== -1) {
          list.splice(_0x3bb7bb, 1);
        }
      }
    });
  }
});
mp.events.add("Client_ShowShotMarker", (_0x12e992, _0x4547fb) => {
  if (!!mp.storage.data.fam_shooting_marker && !(mp.game.system.vdist(_0x4547fb.x, _0x4547fb.y, _0x4547fb.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 150)) {
    shot_marker(_0x12e992, _0x4547fb);
  }
});
const distance = 150;
let last_shot_marker = new Date().getTime();
global.SendShotMarker = function (_0x5da926) {
  if (localplayer.getConfigFlag(78, true) || mp.game.player.isFreeAiming()) {
    if (new Date().getTime() - lastCheck < 500) {
      return;
    }
    if (!mp.storage.data.fam_shooting_marker) {
      return mp.game.ui.notifications.show(language["У Вас отключены метки в настройках"][curr_lang], false, 0, 6);
    }
    let _0x4260b6 = screen2d3d.screen2dToWorld3d(res.x / 2, res.y / 2);
    if (_0x4260b6 && _0x4260b6.position) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SendShotMarker", _0x5da926, _0x4260b6.position);
    }
  }
};