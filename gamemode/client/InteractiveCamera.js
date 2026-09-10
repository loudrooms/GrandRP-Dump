global.InteractiveCamera = new class {
  constructor() {
    mp.events.add("render", () => {
      if (!mp.gui.cursor.visible || !this.isActiveMove) {
        return;
      }
      const _0x5b2d82 = mp.game.controls.getDisabledControlNormal(2, 239);
      const _0x45078c = mp.game.controls.getDisabledControlNormal(2, 240);
      if (this.isPointEmpty()) {
        this.setPoint(_0x5b2d82, _0x45078c);
      }
      const _0x5c6570 = this.getPoint();
      const _0x45cd33 = _0x5c6570.x - _0x5b2d82;
      const _0x204d68 = _0x5c6570.y - _0x45078c;
      this.setPoint(_0x5b2d82, _0x45078c);
      if (mp.game.controls.isDisabledControlPressed(2, 237)) {
        this.onMouseMove(_0x45cd33, _0x204d68);
      }
    });
  }
  create(_0x322d21, _0x1d2167, _0x303739, _0x259f32, _0xbafb3c, _0xe54920, _0x2b8150, _0x4b3cd6) {
    this.camera = _0x322d21;
    this.basePosition = _0x1d2167;
    this.lookAtPosition = _0x303739;
    this.offsetVector = _0x259f32;
    this.heading = _0xbafb3c;
    this.baseHeading = _0xbafb3c;
    this.currentPoint = {
      x: 0,
      y: 0
    };
    this.zCameraUp = 0;
    this.speed_z = _0x4b3cd6;
    this.min_max_x = _0xe54920;
    this.min_max_z = _0x2b8150;
    this.zoomLevel = 1;
    this.minZoom = 0.5;
    this.maxZoom = 1;
    this.baseOffsetVector = _0x259f32;
    this.changePositionCamera();
    _0x322d21.pointAtCoord(_0x303739.x, _0x303739.y, _0x303739.z);
    this.start();
  }
  start() {
    this.isActiveMove = true;
  }
  stop() {
    this.isActiveMove = false;
  }
  reset() {
    this.heading = this.baseHeading;
    this.zCameraUp = 0;
    this.changePositionCamera();
  }
  getRelativeHeading() {
    return this.normilizeHeading(this.baseHeading - this.heading);
  }
  onMouseMove(_0x2f90d6, _0x284540) {
    this.heading = this.normilizeHeading(this.heading + _0x2f90d6 * 100);
    let _0x54a3e5 = this.getRelativeHeading();
    if (_0x54a3e5 > this.min_max_x[0] && _0x54a3e5 < this.min_max_x[1]) {
      _0x54a3e5 = Math.abs(this.min_max_x[0] - _0x54a3e5) > Math.abs(this.min_max_x[1] - _0x54a3e5) ? this.min_max_x[1] : this.min_max_x[0];
    }
    this.heading = this.normilizeHeading(-_0x54a3e5 + this.baseHeading);
    this.zCameraUp += _0x284540 * this.speed_z * -1;
    if (this.zCameraUp > this.min_max_z[1]) {
      this.zCameraUp = this.min_max_z[1];
    } else if (this.zCameraUp < this.min_max_z[0]) {
      this.zCameraUp = this.min_max_z[0];
    }
    this.changePositionCamera();
  }
  setMaxMinZoom(_0x20d175, _0x2f9450) {
    this.minZoom = _0x2f9450;
    this.maxZoom = _0x20d175;
  }
  zoom(_0x160d29) {
    if (this.isActiveMove) {
      this.zoomLevel += _0x160d29;
      if (this.zoomLevel < this.minZoom) {
        this.zoomLevel = this.minZoom;
      }
      if (this.zoomLevel > this.maxZoom) {
        this.zoomLevel = this.maxZoom;
      }
      this.offsetVector = {
        x: this.baseOffsetVector.x * this.zoomLevel,
        y: this.baseOffsetVector.y * this.zoomLevel,
        z: this.baseOffsetVector.z * this.zoomLevel
      };
      this.changePositionCamera();
    }
  }
  changePositionCamera() {
    const _0x109b61 = mp.game.object.getObjectOffsetFromCoords(this.basePosition.x, this.basePosition.y, this.basePosition.z + this.zCameraUp, this.heading, this.offsetVector.x, this.offsetVector.y, this.offsetVector.z);
    if (this.camera && mp.cameras.exists(this.camera)) {
      this.camera.setCoord(_0x109b61.x, _0x109b61.y, _0x109b61.z);
    }
  }
  isPointEmpty() {
    return this.currentPoint.x === 0 && this.currentPoint.y === 0;
  }
  setPoint(_0xcf69e6, _0x11d98a) {
    this.currentPoint = {
      x: _0xcf69e6,
      y: _0x11d98a
    };
  }
  getPoint() {
    return this.currentPoint;
  }
  normilizeHeading(_0x14de8a) {
    if (_0x14de8a > 360) {
      _0x14de8a -= 360;
    } else if (_0x14de8a < 0) {
      _0x14de8a = 360 + _0x14de8a;
    }
    return _0x14de8a;
  }
  focusOnAngle(_0xb7c546, _0x311c1a = 0, _0x2161a5 = 500) {
    if (!this.camera || !mp.cameras.exists(this.camera)) {
      return;
    }
    let _0x2fd658;
    let _0x2d1c10 = _0x311c1a;
    _0x2fd658 = _0xb7c546 === null ? this.baseHeading : this.normilizeHeading(this.baseHeading + _0xb7c546 + 180);
    if (_0x2d1c10 > this.min_max_z[1]) {
      _0x2d1c10 = this.min_max_z[1];
    }
    if (_0x2d1c10 < this.min_max_z[0]) {
      _0x2d1c10 = this.min_max_z[0];
    }
    this.animateToPosition(_0x2fd658, _0x2d1c10, _0x2161a5);
  }
  animateToPosition(_0x110f50, _0x133cb4, _0x2a2b45) {
    const _0x288611 = global.generateUUID();
    this._animateToPositionHash = _0x288611;
    const _0x243ff4 = this.heading;
    const _0x2b9573 = this.zCameraUp;
    const _0x7369ee = Date.now();
    let _0x2251f1 = _0x110f50 - _0x243ff4;
    if (_0x2251f1 > 180) {
      _0x2251f1 -= 360;
    }
    if (_0x2251f1 < -180) {
      _0x2251f1 += 360;
    }
    const _0xd30dc4 = () => {
      if (!this.isActiveMove) {
        return;
      }
      if (this._animateToPositionHash !== _0x288611) {
        return;
      }
      const _0x3f6147 = Date.now() - _0x7369ee;
      const _0x29d2e5 = Math.min(_0x3f6147 / _0x2a2b45, 1);
      const _0x170fdb = 1 - (1 - _0x29d2e5) * (1 - _0x29d2e5);
      this.heading = this.normilizeHeading(_0x243ff4 + _0x2251f1 * _0x170fdb);
      this.zCameraUp = _0x2b9573 + (_0x133cb4 - _0x2b9573) * _0x170fdb;
      this.changePositionCamera();
      if (_0x29d2e5 < 1) {
        setTimeout(_0xd30dc4, 16);
      }
    };
    _0xd30dc4();
  }
}();
mp.events.add("Client_StartInteractiveCamera", () => {
  InteractiveCamera.start();
});
mp.events.add("Client_StopInteractiveCamera", () => {
  InteractiveCamera.stop();
});
mp.events.add("Client_ZoomCamera", _0x29f8ff => {
  if (!localcamera) {
    return;
  }
  const _0x18ac2e = _0x29f8ff * 0.3;
  InteractiveCamera.zoom(_0x18ac2e);
});