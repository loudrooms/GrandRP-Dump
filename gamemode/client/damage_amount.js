global.Hits = function (_0x3983ae, _0x64d2f1, _0x47fd0a = false, _0x2f5433 = false, _0x6c14b5 = false) {
  if (_0x2f5433 == 1) {
    const _0x198be7 = {
      amount: _0x3983ae,
      position: new mp.Vector3(_0x64d2f1.x, _0x64d2f1.y, _0x64d2f1.z - 0.2),
      count: 0,
      head: _0x47fd0a,
      is_dead: _0x2f5433
    };
    list.push(_0x198be7);
  }
  const _0x3f5af6 = {
    amount: _0x3983ae,
    position: _0x64d2f1,
    count: 0,
    head: _0x47fd0a,
    is_wall_shot: _0x6c14b5
  };
  list.push(_0x3f5af6);
};
let list = [];
mp.events.add("render", () => {
  if (list) {
    list.forEach(_0x19966e => {
      if (_0x19966e.is_wall_shot == 1) {
        const _0x39cc87 = mp.game.graphics.world3dToScreen2d(_0x19966e.position.x, _0x19966e.position.y, _0x19966e.position.z + 1.4);
        if (!_0x39cc87) {
          return false;
        }
        drawSprite("grandtextures", "stop_bullet", [0.2, 0.2], 0, [255, 255, 255, 255], _0x39cc87.x, _0x39cc87.y);
      } else {
        let _0x4c0bb3 = [255, 255, 255];
        let _0x4b4354 = _0x19966e.amount.toString();
        if (_0x19966e.is_dead == 1) {
          _0x4b4354 = "DEAD";
          _0x4c0bb3 = [255, 180, 0];
        } else if (_0x19966e.head == 1) {
          _0x4c0bb3 = [255, 0, 0];
        }
        mp.game.graphics.drawText(_0x4b4354, [_0x19966e.position.x, _0x19966e.position.y, _0x19966e.position.z + 1.4], {
          font: 2,
          centre: true,
          color: [_0x4c0bb3[0], _0x4c0bb3[1], _0x4c0bb3[2], 255 - _0x19966e.count],
          scale: [0.3, 0.3],
          outline: true
        });
      }
      _0x19966e.count += 2;
      _0x19966e.position.z += 0.02;
      if (_0x19966e.count > 155) {
        const _0x306688 = list.findIndex(_0x5789e5 => _0x5789e5 == _0x19966e);
        if (_0x306688 !== -1) {
          list.splice(_0x306688, 1);
        }
      }
    });
  }
});
mp.events.add("Client_DealDamage", (_0x3df8a0, _0x2bb4aa, _0x5d9442, _0x413037) => {
  if (!(mp.game.system.vdist(_0x2bb4aa.x, _0x2bb4aa.y, _0x2bb4aa.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) > 150)) {
    Hits(_0x3df8a0.toFixed(0), _0x2bb4aa, _0x5d9442, _0x413037);
  }
});