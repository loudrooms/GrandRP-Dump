"use strict";
class TracerObject {
  constructor(_0x37b075, _0x18c901, _0xf47f2b, _0x434cca) {
    this.target = -1;
    this.from = _0x37b075;
    this.to = _0x18c901;
    this.duration = _0xf47f2b;
    this.target = _0x434cca;
  }
}
class TracerManager {
  constructor() {
    this.tracers = [];
    this.tracert_toggle = false;
    mp.events.add("client:anticheat:tracer", _0x453be8 => {
      let _0x1d5dce = JSON.parse(_0x453be8);
      if (_0x1d5dce) {
        this.create(new mp.Vector3(_0x1d5dce.fromX, _0x1d5dce.fromY, _0x1d5dce.fromZ), new mp.Vector3(_0x1d5dce.toX, _0x1d5dce.toY, _0x1d5dce.toZ), _0x1d5dce.duration, _0x1d5dce.target);
      }
    });
    mp.events.add("Client_TracertMode", _0x4dc471 => {
      this.tracert_toggle = _0x4dc471;
    });
    mp.events.add("playerWeaponShot", (_0x291e36, _0x3c61d2) => {
      if (!this.tracert_toggle) {
        return;
      }
      let _0x4eb976 = -1;
      if (_0x3c61d2 && _0x3c61d2.type == "player") {
        _0x4eb976 = _0x3c61d2.remoteId;
      }
      let _0x2b119e = mp.players.local.getBoneCoords(4089, 0, 0, 0);
      mp.events.callRemote("server:anticheat:tracer", _0x2b119e.x, _0x2b119e.y, _0x2b119e.z, _0x291e36.x, _0x291e36.y, _0x291e36.z, _0x4eb976);
    });
    mp.events.add("render", () => {
      this.tracers.forEach(_0x336ac1 => {
        if (_0x336ac1.duration > 0) {
          let _0x25c88b = 0.05;
          let _0x1d76c5 = new mp.Vector3(0, 255, 0);
          if (_0x336ac1.target > -1) {
            _0x1d76c5 = new mp.Vector3(255, 0, 0);
          }
          mp.game.graphics.drawLine(_0x336ac1.from.x, _0x336ac1.from.y, _0x336ac1.from.z, _0x336ac1.to.x, _0x336ac1.to.y, _0x336ac1.to.z, _0x1d76c5.x, _0x1d76c5.y, _0x1d76c5.z, _0x336ac1.duration);
          mp.game.graphics.drawBox(_0x336ac1.to.x - _0x25c88b, _0x336ac1.to.y - _0x25c88b, _0x336ac1.to.z - _0x25c88b, _0x336ac1.to.x + _0x25c88b, _0x336ac1.to.y + _0x25c88b, _0x336ac1.to.z + _0x25c88b, 255, 0, 0, _0x336ac1.duration);
          _0x336ac1.duration--;
        } else {
          let _0x588d4e = this.tracers.findIndex(_0x3b0457 => _0x3b0457 == _0x336ac1);
          if (_0x588d4e != -1) {
            this.tracers.splice(_0x588d4e, 1);
          }
        }
      });
    });
  }
  create(_0x3fe44c, _0x5a3db1, _0x73015b, _0x596e8e) {
    if (mp.players.local.getVariable("spectating") == 1) {
      this.tracers.push(new TracerObject(_0x3fe44c, _0x5a3db1, _0x73015b, _0x596e8e));
    }
  }
}
let Tracer = new TracerManager();