const EDITOR_DISABLED_CONTROLS = [22, 24, 25, 26, 36, 37, 44, 47, 53, 54, 68, 69, 70, 74, 81, 82, 83, 84, 85, 91, 92, 99, 100, 101, 102, 114, 140, 141, 142, 143, 157, 158, 159, 160, 161, 162, 163, 164, 165, 257, 263, 264, 282, 283, 284, 285, 337, 345, 346, 347];
class Browsers3dEditor {
  constructor() {
    this.active = false;
    this.mode = "position";
    this.pos = {
      x: 0,
      y: 0,
      z: 0
    };
    this.rot = {
      x: 0,
      y: 0,
      z: 0
    };
    this.size = {
      w: 1,
      h: 1
    };
    this.initialState = null;
    this.url = "";
    this.browser = null;
    this.browserW = 512;
    this.browserH = 512;
    this.keys = new Set();
    this.lastKeyTime = {};
    this.keyRepeatDelay = 40;
    this.speed = {
      position: 0.05,
      scale: 0.02,
      rotation: 1
    };
    this.playerFrozen = false;
    this._bind();
  }
  async start(_0x39a880, _0x512754 = {}) {
    if (this.active) {
      this.stop();
    }
    this.url = _0x39a880 || "";
    this.browserW = _0x512754.browserWidth || 512;
    this.browserH = _0x512754.browserHeight || 512;
    if (_0x512754.position) {
      this.pos = {
        x: _0x512754.position.x,
        y: _0x512754.position.y,
        z: _0x512754.position.z
      };
    } else {
      const _0x4ea7b1 = mp.players.local;
      const _0x2b6909 = _0x4ea7b1.getForwardVector();
      this.pos = {
        x: _0x4ea7b1.position.x + _0x2b6909.x * 3,
        y: _0x4ea7b1.position.y + _0x2b6909.y * 3,
        z: _0x4ea7b1.position.z + 1
      };
    }
    this.rot = _0x512754.rotation ? {
      x: _0x512754.rotation.x || 0,
      y: _0x512754.rotation.y || 0,
      z: _0x512754.rotation.z || 0
    } : {
      x: 0,
      y: 0,
      z: 0
    };
    this.size = _0x512754.scale ? {
      w: _0x512754.scale.width || 1,
      h: _0x512754.scale.height || 1
    } : {
      w: 1,
      h: 1
    };
    this.initialState = {
      pos: {
        ...this.pos
      },
      rot: {
        ...this.rot
      },
      size: {
        ...this.size
      }
    };
    if (this.url) {
      this.browser = mp.browsers.newHeadless(this.url, this.browserW, this.browserH, true);
      if (!this.browser) {
        mp.game.graphics.notify("~r~[3D Editor] Failed to create browser");
        return;
      }
      await new Promise(_0x129ea7 => setTimeout(_0x129ea7, 500));
    }
    this.active = true;
    this.mode = "position";
    this.playerFrozen = true;
    mp.players.local.freezePosition(true);
    mp.game.graphics.notify("~g~3D Polygon Editor active");
    mp.game.graphics.notify("~y~1~w~-Pos ~y~2~w~-Scale ~y~3~w~-Rot");
  }
  stop() {
    if (this.active) {
      this.active = false;
      if (this.browser && mp.browsers.exists(this.browser)) {
        this.browser.destroy();
        this.browser = null;
      }
      mp.players.local.freezePosition(false);
      this.keys.clear();
      this.lastKeyTime = {};
      mp.game.graphics.notify("~r~3D Polygon Editor closed");
    }
  }
  _bind() {
    mp.events.add("render", this._onRender.bind(this));
    mp.keys.bind(49, false, () => {
      if (this.active) {
        this._setMode("position");
      }
    });
    mp.keys.bind(50, false, () => {
      if (this.active) {
        this._setMode("scale");
      }
    });
    mp.keys.bind(51, false, () => {
      if (this.active) {
        this._setMode("rotation");
      }
    });
    mp.keys.bind(37, false, () => this._move("left"));
    mp.keys.bind(39, false, () => this._move("right"));
    mp.keys.bind(38, false, () => this._move("up"));
    mp.keys.bind(40, false, () => this._move("down"));
    mp.keys.bind(33, false, () => this._move("pgup"));
    mp.keys.bind(34, false, () => this._move("pgdn"));
    mp.keys.bind(13, false, () => {
      if (this.active) {
        this._output();
      }
    });
    mp.keys.bind(27, false, () => {
      if (this.active) {
        this.stop();
      }
    });
    mp.keys.bind(82, false, () => {
      if (this.active) {
        this._reset();
      }
    });
    mp.keys.bind(70, false, () => {
      if (this.active) {
        this._toggleFreezePlayer();
      }
    });
    mp.keys.bind(16, false, () => this.keys.add(16));
    mp.keys.bind(16, true, () => this.keys.delete(16));
    mp.keys.bind(17, false, () => this.keys.add(17));
    mp.keys.bind(17, true, () => this.keys.delete(17));
  }
  _setMode(_0x33c3e0) {
    this.mode = _0x33c3e0;
    mp.game.graphics.notify("Mode: " + {
      position: "~g~Position",
      scale: "~y~Scale",
      rotation: "~r~Rotation"
    }[_0x33c3e0]);
  }
  _speedMult() {
    if (this.keys.has(16)) {
      return 0.2;
    } else if (this.keys.has(17)) {
      return 5;
    } else {
      return 1;
    }
  }
  _move(_0x5ba08b) {
    if (!this.active) {
      return;
    }
    const _0x4ef9c3 = Date.now();
    if (this.lastKeyTime[_0x5ba08b] && _0x4ef9c3 - this.lastKeyTime[_0x5ba08b] < this.keyRepeatDelay) {
      return;
    }
    this.lastKeyTime[_0x5ba08b] = _0x4ef9c3;
    const _0x561281 = this._speedMult();
    if (this.mode === "position") {
      const _0x3359a7 = this.speed.position * _0x561281;
      if (_0x5ba08b === "left") {
        this.pos.x -= _0x3359a7;
      }
      if (_0x5ba08b === "right") {
        this.pos.x += _0x3359a7;
      }
      if (_0x5ba08b === "up") {
        this.pos.y += _0x3359a7;
      }
      if (_0x5ba08b === "down") {
        this.pos.y -= _0x3359a7;
      }
      if (_0x5ba08b === "pgup") {
        this.pos.z += _0x3359a7;
      }
      if (_0x5ba08b === "pgdn") {
        this.pos.z -= _0x3359a7;
      }
    }
    if (this.mode === "scale") {
      const _0x5c3e36 = this.speed.scale * _0x561281;
      if (_0x5ba08b === "left") {
        this.size.w = Math.max(0.01, this.size.w - _0x5c3e36);
      }
      if (_0x5ba08b === "right") {
        this.size.w = Math.max(0.01, this.size.w + _0x5c3e36);
      }
      if (_0x5ba08b === "pgup") {
        this.size.h = Math.max(0.01, this.size.h + _0x5c3e36);
      }
      if (_0x5ba08b === "pgdn") {
        this.size.h = Math.max(0.01, this.size.h - _0x5c3e36);
      }
      if (_0x5ba08b === "up") {
        this.size.w = Math.max(0.01, this.size.w + _0x5c3e36);
        this.size.h = Math.max(0.01, this.size.h + _0x5c3e36);
      }
      if (_0x5ba08b === "down") {
        this.size.w = Math.max(0.01, this.size.w - _0x5c3e36);
        this.size.h = Math.max(0.01, this.size.h - _0x5c3e36);
      }
    }
    if (this.mode === "rotation") {
      const _0x3f1c71 = this.speed.rotation * _0x561281;
      if (_0x5ba08b === "left") {
        this.rot.z -= _0x3f1c71;
      }
      if (_0x5ba08b === "right") {
        this.rot.z += _0x3f1c71;
      }
      if (_0x5ba08b === "up") {
        this.rot.x += _0x3f1c71;
      }
      if (_0x5ba08b === "down") {
        this.rot.x -= _0x3f1c71;
      }
      if (_0x5ba08b === "pgup") {
        this.rot.y += _0x3f1c71;
      }
      if (_0x5ba08b === "pgdn") {
        this.rot.y -= _0x3f1c71;
      }
      this.rot.x = (this.rot.x % 360 + 360) % 360;
      this.rot.y = (this.rot.y % 360 + 360) % 360;
      this.rot.z = (this.rot.z % 360 + 360) % 360;
    }
  }
  _reset() {
    if (this.initialState) {
      this.pos = {
        ...this.initialState.pos
      };
      this.rot = {
        ...this.initialState.rot
      };
      this.size = {
        ...this.initialState.size
      };
      mp.game.graphics.notify("~o~Reset to initial values");
    }
  }
  _toggleFreezePlayer() {
    if (this.active) {
      this.playerFrozen = !this.playerFrozen;
      mp.players.local.freezePosition(this.playerFrozen);
      mp.game.graphics.notify(this.playerFrozen ? "~g~Player frozen" : "~r~Player unfrozen");
    }
  }
  _rotPt(_0x3b8911, _0x29da50, _0x930bde) {
    const _0x5d0c1b = Math.PI / 180;
    const _0x32c5d6 = Math.cos(this.rot.x * _0x5d0c1b);
    const _0x458c4f = Math.sin(this.rot.x * _0x5d0c1b);
    const _0x3dc8c5 = Math.cos(this.rot.y * _0x5d0c1b);
    const _0x558586 = Math.sin(this.rot.y * _0x5d0c1b);
    const _0x58ceac = Math.cos(this.rot.z * _0x5d0c1b);
    const _0x2fbba3 = Math.sin(this.rot.z * _0x5d0c1b);
    let _0x585134 = _0x29da50 * _0x32c5d6 - _0x930bde * _0x458c4f;
    let _0x2dc3d6 = _0x29da50 * _0x458c4f + _0x930bde * _0x32c5d6;
    let _0x3322c1 = _0x3b8911 * _0x3dc8c5 + _0x2dc3d6 * _0x558586;
    let _0x26b846 = _0x3322c1 * _0x58ceac - _0x585134 * _0x2fbba3;
    let _0x330e6e = _0x3322c1 * _0x2fbba3 + _0x585134 * _0x58ceac;
    let _0x28f5d3 = -_0x3b8911 * _0x558586 + _0x2dc3d6 * _0x3dc8c5;
    return {
      x: this.pos.x + _0x26b846,
      y: this.pos.y + _0x330e6e,
      z: this.pos.z + _0x28f5d3
    };
  }
  _corners() {
    const _0x5f2e83 = this.size.w / 2;
    const _0x161045 = this.size.h / 2;
    return {
      tl: this._rotPt(-_0x5f2e83, 0, +_0x161045),
      tr: this._rotPt(+_0x5f2e83, 0, +_0x161045),
      bl: this._rotPt(-_0x5f2e83, 0, -_0x161045),
      br: this._rotPt(+_0x5f2e83, 0, -_0x161045)
    };
  }
  _onRender() {
    if (this.active) {
      for (const _0x53c16d of EDITOR_DISABLED_CONTROLS) {
        mp.game.controls.disableControlAction(0, _0x53c16d, true);
      }
      this._drawPolygon();
      this._drawMarkers();
      this._drawUI();
    }
  }
  _drawPolygon() {
    if (!this.browser || !mp.browsers.exists(this.browser)) {
      return;
    }
    const _0x3be8bd = this.browser.headlessTextureDict;
    const _0x1fd7f1 = this.browser.headlessTextureName;
    if (!_0x3be8bd || !_0x1fd7f1) {
      return;
    }
    if (!mp.game.graphics.hasStreamedTextureDictLoaded(_0x3be8bd)) {
      mp.game.graphics.requestStreamedTextureDict(_0x3be8bd, false);
      return;
    }
    const _0x456361 = this._corners();
    mp.game.graphics.drawSpritePoly(_0x456361.tl.x, _0x456361.tl.y, _0x456361.tl.z, _0x456361.bl.x, _0x456361.bl.y, _0x456361.bl.z, _0x456361.br.x, _0x456361.br.y, _0x456361.br.z, 255, 255, 255, 255, _0x3be8bd, _0x1fd7f1, 0, 0, 1, 0, 1, 1, 1, 1, 1);
    mp.game.graphics.drawSpritePoly(_0x456361.tl.x, _0x456361.tl.y, _0x456361.tl.z, _0x456361.br.x, _0x456361.br.y, _0x456361.br.z, _0x456361.tr.x, _0x456361.tr.y, _0x456361.tr.z, 255, 255, 255, 255, _0x3be8bd, _0x1fd7f1, 0, 0, 1, 1, 1, 1, 1, 0, 1);
  }
  _drawMarkers() {
    mp.game.graphics.drawMarker(28, this.pos.x, this.pos.y, this.pos.z, 0, 0, 0, 0, 0, 0, 0.08, 0.08, 0.08, 255, 50, 50, 220, false, true, 2, false, null, null, false);
    if (this.mode === "scale") {
      const _0x12c521 = this._corners();
      for (const _0x5bb354 of [_0x12c521.tl, _0x12c521.tr, _0x12c521.bl, _0x12c521.br]) {
        mp.game.graphics.drawMarker(28, _0x5bb354.x, _0x5bb354.y, _0x5bb354.z, 0, 0, 0, 0, 0, 0, 0.05, 0.05, 0.05, 50, 120, 255, 200, false, true, 2, false, null, null, false);
      }
    }
    if (this.mode === "rotation") {
      const _0x3f345c = this._rotPt(0, 0.5, 0);
      mp.game.graphics.drawMarker(2, _0x3f345c.x, _0x3f345c.y, _0x3f345c.z, 0, 0, 0, 0, 0, this.rot.z, 0.15, 0.15, 0.15, 0, 220, 80, 200, false, true, 2, false, null, null, false);
    }
  }
  _drawUI() {
    mp.game.graphics.drawText("~b~3D POLYGON EDITOR", [0.5, 0.015], {
      font: 1,
      color: [255, 255, 255, 255],
      scale: [0.5, 0.5],
      outline: true,
      centre: true
    });
    mp.game.graphics.drawText("Mode: " + {
      position: "~g~",
      scale: "~y~",
      rotation: "~r~"
    }[this.mode] + {
      position: "POSITION (XY + Z)",
      scale: "SCALE (WH)",
      rotation: "ROTATION (XYZ)"
    }[this.mode], [0.5, 0.055], {
      font: 0,
      color: [255, 255, 255, 255],
      scale: [0.35, 0.35],
      outline: true,
      centre: true
    });
    ["~y~1~w~-Pos ~y~2~w~-Scale ~y~3~w~-Rot  |  ~g~Arrows~w~-XY  ~g~PgUp/Dn~w~-Z", "~c~Shift~w~ - Fast (x5)  |  ~c~Ctrl~w~ - Precise (x0.2)", "~g~Enter~w~ - Output to chat  |  ~r~Esc~w~ - Stop  |  ~o~R~w~ - Reset | ~b~F~w~ - FreezePlayer"].forEach((_0x561fab, _0x589c60) => {
      mp.game.graphics.drawText(_0x561fab, [0.5, 0.09 + _0x589c60 * 0.023], {
        font: 0,
        color: [255, 255, 255, 255],
        scale: [0.25, 0.25],
        outline: true,
        centre: true
      });
    });
    ["~c~Pos:~w~  " + this.pos.x.toFixed(3) + ",  " + this.pos.y.toFixed(3) + ",  " + this.pos.z.toFixed(3), "~y~Size:~w~ " + this.size.w.toFixed(3) + " x " + this.size.h.toFixed(3), "~r~Rot:~w~  " + this.rot.x.toFixed(1) + ",  " + this.rot.y.toFixed(1) + ",  " + this.rot.z.toFixed(1)].forEach((_0x1bca6a, _0xee0ce4) => {
      mp.game.graphics.drawText(_0x1bca6a, [0.01, 0.25 + _0xee0ce4 * 0.025], {
        font: 0,
        color: [255, 255, 255, 255],
        scale: [0.28, 0.28],
        outline: true,
        centre: false
      });
    });
    const _0x3981be = [];
    if (this.keys.has(16)) {
      _0x3981be.push("~g~SHIFT");
    }
    if (this.keys.has(17)) {
      _0x3981be.push("~b~CTRL");
    }
    if (_0x3981be.length) {
      mp.game.graphics.drawText(_0x3981be.join(" + "), [0.5, 0.9], {
        font: 0,
        color: [255, 255, 255, 255],
        scale: [0.35, 0.35],
        outline: true,
        centre: true
      });
    }
  }
  _output() {
    const _0x2a39bd = +this.pos.x.toFixed(3);
    const _0x3f99ea = +this.pos.y.toFixed(3);
    const _0x263c07 = +this.pos.z.toFixed(3);
    const _0x138a5b = +this.rot.x.toFixed(1);
    const _0x797ac7 = +this.rot.y.toFixed(1);
    const _0x2fa9f7 = +this.rot.z.toFixed(1);
    const _0x37bd1d = +this.size.w.toFixed(3);
    const _0x443587 = +this.size.h.toFixed(3);
    const _0x2c49e9 = JSON.stringify({
      position: {
        x: _0x2a39bd,
        y: _0x3f99ea,
        z: _0x263c07
      },
      rotation: {
        x: _0x138a5b,
        y: _0x797ac7,
        z: _0x2fa9f7
      },
      scale: {
        width: _0x37bd1d,
        height: _0x443587
      }
    });
    main_browser.execute("window.copyToClipboard('" + _0x2c49e9 + "', true);");
    mp.gui.chat.push("!{#00ff00}[3D Editor] " + _0x2c49e9);
    mp.gui.chat.push("!{#aaaaaa}position: { x: " + _0x2a39bd + ", y: " + _0x3f99ea + ", z: " + _0x263c07 + " }");
    mp.gui.chat.push("!{#aaaaaa}rotation: { x: " + _0x138a5b + ", y: " + _0x797ac7 + ", z: " + _0x2fa9f7 + " }");
    mp.gui.chat.push("!{#aaaaaa}scale:    { width: " + _0x37bd1d + ", height: " + _0x443587 + " }");
    mp.console.logInfo("[3D Editor] " + _0x2c49e9, true, true);
    mp.game.graphics.notify("~g~Data output to chat");
  }
}
const browsers3dEditor = new Browsers3dEditor();
global.browsers3dEditor = browsers3dEditor;
mp.events.add("Client_Browsers3dEditorStart", (_0x2a9161, _0x5b42e3) => {
  browsers3dEditor.start("https://gta5grand.com/", {
    position: mp.players.local.position,
    rotation: {
      x: 0,
      y: 0,
      z: 45
    },
    scale: {
      width: 2,
      height: 1.5
    },
    browserWidth: 1024,
    browserHeight: 768
  });
});