global.screen2d3d = new class {
  constructor() {
    this.camera = mp.cameras.new("gameplay");
  }
  screen2dToWorld3d(_0xc15c52, _0x76b810) {
    const _0x292ccc = this.camera.getCoord();
    const {
      x: _0x2b3460,
      y: _0x42cfed
    } = this.processCoordinates(_0xc15c52, _0x76b810);
    const _0x116c81 = this.s2w(_0x292ccc, _0x2b3460, _0x42cfed);
    const _0x2e5be7 = this.sub(_0x116c81, _0x292ccc);
    const _0x35a849 = this.add(_0x292ccc, this.mulNumber(_0x2e5be7, 0.5));
    const _0x32d344 = this.add(_0x292ccc, this.mulNumber(_0x2e5be7, 300));
    const _0x235018 = mp.raycasting.testPointToPoint(_0x35a849, _0x32d344, mp.players.local.handle, 287);
    if (_0x235018 && typeof _0x235018.entity == "number" && _0x235018.entity !== 0 && mp.game.entity.doesExist(_0x235018.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x235018.entity);
    }
    return _0x235018;
  }
  processCoordinates(_0x2edd98, _0x41203c) {
    const {
      x: _0x37731c,
      y: _0x158763
    } = mp.game.graphics.getScreenActiveResolution(0, 0);
    let _0x55cf51 = 1 - _0x2edd98 / _0x37731c * 1 * 2;
    let _0x72b40c = 1 - _0x41203c / _0x158763 * 1 * 2;
    _0x55cf51 = _0x55cf51 > 0 ? -_0x55cf51 : Math.abs(_0x55cf51);
    _0x72b40c = _0x72b40c > 0 ? -_0x72b40c : Math.abs(_0x72b40c);
    return {
      x: _0x55cf51,
      y: _0x72b40c
    };
  }
  add(_0x58c2a8, _0x33f7f7) {
    return new mp.Vector3(_0x58c2a8.x + _0x33f7f7.x, _0x58c2a8.y + _0x33f7f7.y, _0x58c2a8.z + _0x33f7f7.z);
  }
  sub(_0x20816d, _0x42df58) {
    return new mp.Vector3(_0x20816d.x - _0x42df58.x, _0x20816d.y - _0x42df58.y, _0x20816d.z - _0x42df58.z);
  }
  s2w(_0x299585, _0x879d77, _0x768f98) {
    const _0x3169d4 = this.camera.getRot(0);
    const _0x2a6a7c = this.rotationToDirection(_0x3169d4);
    const _0xf627df = this.add(_0x3169d4, new mp.Vector3(10, 0, 0));
    const _0x338947 = this.add(_0x3169d4, new mp.Vector3(-10, 0, 0));
    const _0x1f4c14 = this.add(_0x3169d4, new mp.Vector3(0, 0, -10));
    const _0x53d726 = this.add(_0x3169d4, new mp.Vector3(0, 0, 10));
    const _0x2c16b8 = this.sub(this.rotationToDirection(_0x53d726), this.rotationToDirection(_0x1f4c14));
    const _0x288807 = this.sub(this.rotationToDirection(_0xf627df), this.rotationToDirection(_0x338947));
    const _0x2d60f3 = -this.degToRad(_0x3169d4.y);
    const _0x22d80d = this.sub(this.mulNumber(_0x2c16b8, Math.cos(_0x2d60f3)), this.mulNumber(_0x288807, Math.sin(_0x2d60f3)));
    const _0xee066b = this.add(this.mulNumber(_0x2c16b8, Math.sin(_0x2d60f3)), this.mulNumber(_0x288807, Math.cos(_0x2d60f3)));
    const _0x19d043 = this.add(this.add(this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10)), _0x22d80d), _0xee066b);
    const _0x35e040 = this.w2s(_0x19d043);
    if (_0x35e040 === undefined) {
      return this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10));
    }
    const _0x210760 = this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10));
    const _0x5b9104 = this.w2s(_0x210760);
    if (_0x5b9104 === undefined) {
      return this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10));
    }
    if (Math.abs(_0x35e040.x - _0x5b9104.x) < 0.001 || Math.abs(_0x35e040.y - _0x5b9104.y) < 0.001) {
      return this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10));
    }
    const _0x3daa06 = (_0x879d77 - _0x5b9104.x) / (_0x35e040.x - _0x5b9104.x);
    const _0x4d1b4e = (_0x768f98 - _0x5b9104.y) / (_0x35e040.y - _0x5b9104.y);
    return this.add(this.add(this.add(_0x299585, this.mulNumber(_0x2a6a7c, 10)), this.mulNumber(_0x22d80d, _0x3daa06)), this.mulNumber(_0xee066b, _0x4d1b4e));
  }
  w2s(_0x577f06) {
    const _0x5a5791 = mp.game.graphics.world3dToScreen2d(_0x577f06.x, _0x577f06.y, _0x577f06.z);
    if (_0x5a5791 !== undefined) {
      return new mp.Vector3((_0x5a5791.x - 0.5) * 2, (_0x5a5791.y - 0.5) * 2, 0);
    }
  }
  mulNumber(_0x2c1d9a, _0x5a8635) {
    return new mp.Vector3(_0x2c1d9a.x * _0x5a8635, _0x2c1d9a.y * _0x5a8635, _0x2c1d9a.z * _0x5a8635);
  }
  degToRad(_0x497e54) {
    return _0x497e54 * Math.PI / 180;
  }
  rotationToDirection(_0x4d0f2f) {
    const _0x142197 = this.degToRad(_0x4d0f2f.z);
    const _0x58bdbf = this.degToRad(_0x4d0f2f.x);
    const _0x4dc86a = Math.abs(Math.cos(_0x58bdbf));
    return new mp.Vector3(-Math.sin(_0x142197) * _0x4dc86a, Math.cos(_0x142197) * _0x4dc86a, Math.sin(_0x58bdbf));
  }
}();