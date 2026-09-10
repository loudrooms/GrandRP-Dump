"use strict";
global.in_another_spectate = false;
class SpectatorManager {
  constructor() {
    this.spectating = false;
    this.last_fix_spectate = new Date().getTime();
    this.cameraPosition = new mp.Vector3(0, 0, 0);
    mp.events.add("client:anticheat:spectate", _0x36c5d2 => {
      if (_0x36c5d2 && mp.players.exists(_0x36c5d2)) {
        let _0x317fd3 = _0x36c5d2.position;
        this.createCamera(_0x317fd3);
        this.setCameraActive();
        this.target = _0x36c5d2;
        this.spectating = true;
        this.startPosition = mp.players.local.position;
        in_another_spectate = true;
      }
    });
    mp.events.add("client:anticheat:fromclient", () => {
      mp.events.callRemote("Server_CloseSpectate");
    });
    mp.events.add("client:anticheat:spectate_stop", () => {
      in_another_spectate = false;
      mp.game.ui.setPauseMenuActive(false);
      if (mp.cameras.exists(this.camera)) {
        this.spectating = false;
        this.camera.setActive(false);
        this.camera.destroy();
        mp.game.cam.renderScriptCams(false, false, 0, false, false);
        mp.players.local.freezePosition(false);
        mp.players.local.setCoords(this.startPosition.x, this.startPosition.y, this.startPosition.z, false, false, false, true);
      }
    });
    mp.events.add("render", () => {
      if (!this.spectating || !mp.cameras.exists(this.camera) || !mp.players.exists(this.target)) {
        return;
      }
      if (!this.target.handle) {
        if (new Date().getTime() - this.last_fix_spectate < 1000) {
          return;
        }
        this.last_fix_spectate = new Date().getTime();
        mp.events.callRemote("Server_ChangeSpectateCoordCorrect", this.target, 2);
        return;
      }
      let _0x401387 = this.target.position;
      let _0x3a0220 = this.target.getForwardVector();
      this.cameraPosition = new mp.Vector3(_0x401387.x - _0x3a0220.x * 3, _0x401387.y - _0x3a0220.y * 3, _0x401387.z + 1.5);
      this.setCameraPosition(this.cameraPosition);
      this.setCameraLookAt(new mp.Vector3(_0x401387.x + _0x3a0220.x * 3, _0x401387.y + _0x3a0220.y * 3, _0x401387.z + _0x3a0220.z * 3));
      mp.players.local.freezePosition(true);
      mp.players.local.setCoords(_0x401387.x, _0x401387.y, _0x401387.z - 100, false, false, false, true);
    });
  }
  createCamera(_0xa84cf4) {
    if (!mp.cameras.exists(this.camera)) {
      this.camera = mp.cameras.new("Spectator", _0xa84cf4, new mp.Vector3(0, 0, 0), 50);
    }
  }
  destroyCamera() {
    if (mp.cameras.exists(this.camera)) {
      this.camera.destroy();
    }
  }
  setCameraActive() {
    if (mp.cameras.exists(this.camera)) {
      this.camera.setActive(true);
      mp.game.cam.renderScriptCams(true, false, 0, false, false);
    }
  }
  setCameraLookAt(_0x37073a) {
    if (mp.cameras.exists(this.camera)) {
      this.camera.pointAtCoord(_0x37073a.x, _0x37073a.y, _0x37073a.z);
    }
  }
  setCameraPosition(_0x3ff86e) {
    if (mp.cameras.exists(this.camera)) {
      this.camera.setCoord(_0x3ff86e.x, _0x3ff86e.y, _0x3ff86e.z);
    }
  }
  calculateScreenRatio(_0x37deee, _0x1b800f) {
    var _0x147721 = mp.game.graphics.getScreenActiveResolution(1, 1);
    return {
      width: _0x37deee,
      height: _0x147721.x * (_0x37deee * 100) / _0x147721.y / 100
    };
  }
  esp(_0x52bc40, _0x35f655, _0x4aa118, _0x1b397a, _0x187484) {
    let _0x303f3d = new mp.Vector3(_0x52bc40.x, _0x52bc40.y, _0x52bc40.z + 1);
    let _0x88ac1f = new mp.Vector3(_0x52bc40.x, _0x52bc40.y, _0x52bc40.z - 1);
    let _0x160c6a = this.world2screen(_0x303f3d);
    let _0x45020f = this.world2screen(_0x88ac1f);
    if (_0x160c6a != null && _0x45020f != null) {
      let _0x5ab445 = _0x45020f.y - _0x160c6a.y;
      let _0x31df8b = _0x5ab445 / 2;
      this.outline(_0x160c6a.x - _0x31df8b / 2 - 1, _0x160c6a.y - 1, _0x31df8b + 2, _0x5ab445 + 2, 0, 0, 0, _0x187484);
      this.outline(_0x160c6a.x - _0x31df8b / 2 + 1, _0x160c6a.y + 1, _0x31df8b - 2, _0x5ab445 - 2, 0, 0, 0, _0x187484);
      this.outline(_0x160c6a.x - _0x31df8b / 2, _0x160c6a.y, _0x31df8b, _0x5ab445, _0x35f655, _0x4aa118, _0x1b397a, _0x187484);
    }
  }
  rect(_0x33a8bc, _0x3de07d, _0x41cccf, _0x5bdb25, _0x1c0b72, _0xa6768c, _0x1fe0fb, _0x14758b) {
    let _0x15ee30 = mp.game.graphics.getScreenActiveResolution(1, 1);
    let _0x5275d6 = 1 / _0x15ee30.x;
    let _0x128489 = 1 / _0x15ee30.y;
    mp.game.graphics.drawRect(_0x5275d6 * _0x33a8bc + _0x5275d6 * _0x41cccf / 2, _0x128489 * _0x3de07d + _0x128489 * _0x5bdb25 / 2, _0x5275d6 * _0x41cccf, _0x128489 * _0x5bdb25, _0x1c0b72, _0xa6768c, _0x1fe0fb, _0x14758b);
  }
  outline(_0x56b5fe, _0x685338, _0x488f22, _0x258ff6, _0x11a9a6, _0x44910a, _0xcdbfaf, _0xcbff52) {
    this.rect(_0x56b5fe, _0x685338, _0x488f22, 1, _0x11a9a6, _0x44910a, _0xcdbfaf, _0xcbff52);
    this.rect(_0x56b5fe + _0x488f22, _0x685338, 1, _0x258ff6, _0x11a9a6, _0x44910a, _0xcdbfaf, _0xcbff52);
    this.rect(_0x56b5fe, _0x685338 + _0x258ff6, _0x488f22, 1, _0x11a9a6, _0x44910a, _0xcdbfaf, _0xcbff52);
    this.rect(_0x56b5fe, _0x685338, 1, _0x258ff6, _0x11a9a6, _0x44910a, _0xcdbfaf, _0xcbff52);
  }
  world2screen(_0xe7990) {
    let _0x3f351c = mp.game.graphics.getScreenActiveResolution(1, 1);
    let _0x489459 = mp.game.graphics.world3dToScreen2d(_0xe7990.x, _0xe7990.y, _0xe7990.z);
    if (_0x489459) {
      return {
        x: _0x489459.x * _0x3f351c.x,
        y: _0x489459.y * _0x3f351c.y
      };
    } else {
      return undefined;
    }
  }
  isVisible(_0x421e4d, _0x3e0bde) {
    return !mp.raycasting.testPointToPoint(_0x421e4d, _0x3e0bde, undefined, 1);
  }
}
var Spectator = new SpectatorManager();