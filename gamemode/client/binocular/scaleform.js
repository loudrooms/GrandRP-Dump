class Scalefrom {
  constructor(_0x1dd163) {
    this._handle = mp.game.graphics.requestScaleformMovie(_0x1dd163);
    this.queueCallFunction = new Map();
  }
  get isLoaded() {
    return !!mp.game.graphics.hasScaleformMovieLoaded(this._handle);
  }
  get isValid() {
    return this._handle !== 0;
  }
  get handle() {
    return this._handle;
  }
  initiliaze(_0x1f70d9) {
    this._handle = mp.game.graphics.requestScaleformMovie(scaleformStr);
    this.queueCallFunction = new Map();
  }
  callFunction(_0x22ae6a, ..._0x3a2f40) {
    if (this.isLoaded && this.isValid) {
      const _0xdc495c = mp.game.graphics;
      _0xdc495c.pushScaleformMovieFunction(this._handle, _0x22ae6a);
      _0x3a2f40.forEach(_0x54a065 => {
        switch (typeof _0x54a065) {
          case "string":
            _0xdc495c.pushScaleformMovieFunctionParameterString(_0x54a065);
            break;
          case "boolean":
            _0xdc495c.pushScaleformMovieFunctionParameterBool(_0x54a065);
            break;
          case "number":
            if (Number(_0x54a065) === _0x54a065 && _0x54a065 % 1 != 0) {
              _0xdc495c.pushScaleformMovieFunctionParameterFloat(_0x54a065);
            } else {
              _0xdc495c.pushScaleformMovieFunctionParameterInt(_0x54a065);
            }
        }
      });
      _0xdc495c.popScaleformMovieFunctionVoid();
    } else {
      this.queueCallFunction.set(_0x22ae6a, _0x3a2f40);
    }
  }
  onUpdate() {
    if (this.isLoaded && this.isValid) {
      this.queueCallFunction.forEach((_0x389abf, _0x4486dd) => {
        this.callFunction(_0x4486dd, ..._0x389abf);
        this.queueCallFunction.delete(_0x4486dd);
      });
    }
  }
  render2D(_0x358d68, _0x33827e, _0x2ed1d8, _0xc68be3) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      const _0xc5fd98 = mp.game.graphics;
      if (_0x358d68 !== undefined && _0x33827e !== undefined && _0x2ed1d8 !== undefined && _0xc68be3 !== undefined) {
        _0xc5fd98.getScreenActiveResolution(0, 0);
        _0xc5fd98.drawScaleformMovie(this._handle, parseFloat(_0x358d68), parseFloat(_0x33827e), parseFloat(_0x2ed1d8), parseFloat(_0xc68be3), 255, 255, 255, 255, 0);
      } else {
        _0xc5fd98.drawScaleformMovieFullscreen(this._handle, 255, 255, 255, 255, false);
      }
    }
  }
  render3D(_0xb8a3d1, _0x35b288, _0x562d57) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      mp.game.graphics.drawScaleformMovie3dNonAdditive(this._handle, _0xb8a3d1.x, _0xb8a3d1.y, _0xb8a3d1.z, _0x35b288.x, _0x35b288.y, _0x35b288.z, 2, 2, 1, _0x562d57.x, _0x562d57.y, _0x562d57.z, 2);
    }
  }
  render3DAdditive(_0x224550, _0x354174, _0x3e74b9) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      mp.game.graphics.drawScaleformMovie3d(this._handle, _0x224550.x, _0x224550.y, _0x224550.z, _0x354174.x, _0x354174.y, _0x354174.z, 2, 2, 1, _0x3e74b9.x, _0x3e74b9.y, _0x3e74b9.z, 2);
    }
  }
}
module.exports = Scalefrom;