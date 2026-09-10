const fov_max = 70;
const fov_min = 5;
const zoomspeed = 10;
const speed_lr = 8;
const speed_ud = 8;
let fov = 37.5;
let cam = null;
class Scalefrom {
  constructor(_0x544754) {
    this._handle = mp.game.graphics.requestScaleformMovie(_0x544754);
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
  initiliaze(_0x10eb14) {
    this._handle = mp.game.graphics.requestScaleformMovie(scaleformStr);
    this.queueCallFunction = new Map();
  }
  callFunction(_0x192b42, ..._0x1e01dc) {
    if (this.isLoaded && this.isValid) {
      const _0x59186e = mp.game.graphics;
      _0x59186e.pushScaleformMovieFunction(this._handle, _0x192b42);
      _0x1e01dc.forEach(_0x70ae80 => {
        switch (typeof _0x70ae80) {
          case "string":
            _0x59186e.pushScaleformMovieFunctionParameterString(_0x70ae80);
            break;
          case "boolean":
            _0x59186e.pushScaleformMovieFunctionParameterBool(_0x70ae80);
            break;
          case "number":
            if (Number(_0x70ae80) === _0x70ae80 && _0x70ae80 % 1 != 0) {
              _0x59186e.pushScaleformMovieFunctionParameterFloat(_0x70ae80);
            } else {
              _0x59186e.pushScaleformMovieFunctionParameterInt(_0x70ae80);
            }
        }
      });
      _0x59186e.popScaleformMovieFunctionVoid();
    } else {
      this.queueCallFunction.set(_0x192b42, _0x1e01dc);
    }
  }
  onUpdate() {
    if (this.isLoaded && this.isValid) {
      this.queueCallFunction.forEach((_0xb1c153, _0x5def8f) => {
        this.callFunction(_0x5def8f, ..._0xb1c153);
        this.queueCallFunction.delete(_0x5def8f);
      });
    }
  }
  render2D(_0x3b6b4d, _0x360d1d, _0x2b0fbe, _0x2fc762) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      const _0x197850 = mp.game.graphics;
      if (_0x3b6b4d !== undefined && _0x360d1d !== undefined && _0x2b0fbe !== undefined && _0x2fc762 !== undefined) {
        _0x197850.getScreenActiveResolution(0, 0);
        _0x197850.drawScaleformMovie(this._handle, parseFloat(_0x3b6b4d), parseFloat(_0x360d1d), parseFloat(_0x2b0fbe), parseFloat(_0x2fc762), 255, 255, 255, 255, 0);
      } else {
        _0x197850.drawScaleformMovieFullscreen(this._handle, 255, 255, 255, 255, false);
      }
    }
  }
  render3D(_0x12ebfe, _0x5278da, _0x619cfa) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      mp.game.graphics.drawScaleformMovie3dNonAdditive(this._handle, _0x12ebfe.x, _0x12ebfe.y, _0x12ebfe.z, _0x5278da.x, _0x5278da.y, _0x5278da.z, 2, 2, 1, _0x619cfa.x, _0x619cfa.y, _0x619cfa.z, 2);
    }
  }
  render3DAdditive(_0x3aa779, _0xc1a763, _0x18cd50) {
    this.onUpdate();
    if (this.isLoaded && this.isValid) {
      mp.game.graphics.drawScaleformMovie3d(this._handle, _0x3aa779.x, _0x3aa779.y, _0x3aa779.z, _0xc1a763.x, _0xc1a763.y, _0xc1a763.z, 2, 2, 1, _0x18cd50.x, _0x18cd50.y, _0x18cd50.z, 2);
    }
  }
}
const myScaleForm = new Scalefrom("BINOCULARS");
myScaleForm.callFunction("SET_CAM_LOGO", 0);
global.binoculars = false;
mp.events.add("Client_Openbinocular", () => {
  if (GlobalCheck() != 1) {
    binoculars = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
  }
});
global.CloseBinocular = function () {
  if (binoculars && loggedin && !chatActive) {
    binoculars = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.call("Enablechat");
    if (cam) {
      mp.game.cam.renderScriptCams(false, false, 0, true, false);
      cam.destroy();
      cam = null;
    }
    mp.events.callRemote("Server_CloseBinocular");
  }
};
mp.events.add("render", () => {
  if (binoculars && !localplayer.isSittingInAnyVehicle()) {
    if (!cam) {
      const _0x22a01e = localplayer.getHeading();
      cam = mp.cameras.new("DEFAULT_SCRIPTED_FLY_CAMERA", localplayer.position, new mp.Vector3(0, 0, _0x22a01e), fov);
      cam.setActive(true);
      cam.setRot(0, 0, _0x22a01e, 2);
      cam.setFov(fov);
      mp.game.cam.renderScriptCams(true, false, 0, true, false);
      cam.attachTo(localplayer.handle, 0, 0, 1, true);
    }
    mp.game.controls.disableAllControlActions(2);
    checkInputRotation(cam, 1 / 65 * (fov - 5));
    handleZoom(cam);
    hideHUDThisFrame();
    const _0x335e28 = 16 / 9;
    const _0xe173e = mp.game.graphics.getAspectRatio(true) / _0x335e28;
    const _0x12b524 = _0xe173e > 1 ? _0xe173e : 1;
    const _0x206ef2 = _0xe173e < 1 ? 1 / _0xe173e : 1;
    myScaleForm.render2D(0.5, 0.5, _0x12b524, _0x206ef2);
  }
});
const hideHUDThisFrame = function () {
  for (let _0x15711a = 1; _0x15711a <= 22; _0x15711a++) {
    mp.game.ui.hideHudComponentThisFrame(_0x15711a);
  }
};
const checkInputRotation = function (_0x20f0d8, _0xd7f2b5) {
  let _0x4e379e = mp.game.controls.getDisabledControlNormal(0, 220);
  let _0x57a9b5 = mp.game.controls.getDisabledControlNormal(0, 221);
  let _0x5c2844 = _0x20f0d8.getRot(2);
  if (_0x4e379e != 0 || _0x57a9b5 != 0) {
    let _0x568793 = _0x5c2844.z + _0x4e379e * -1 * 8 * (_0xd7f2b5 + 0.1);
    let _0x387d04 = Math.max(Math.min(20, _0x5c2844.x + _0x57a9b5 * -1 * 8 * (_0xd7f2b5 + 0.1)), -89.5);
    _0x20f0d8.setRot(_0x387d04, 0, _0x568793, 2);
  }
};
const handleZoom = function (_0x2bd087) {
  const _0xa3ddda = mp.game.controls;
  if (localplayer.isSittingInAnyVehicle()) {
    if (_0xa3ddda.isDisabledControlJustPressed(2, 17)) {
      fov = Math.max(fov - 10, 5);
    }
    if (_0xa3ddda.isDisabledControlJustPressed(2, 16)) {
      fov = Math.min(fov + 10, 70);
    }
    let _0x3a9e51 = _0x2bd087.getFov();
    if (Math.abs(fov - _0x3a9e51) < 0.1) {
      fov = _0x3a9e51;
    }
    _0x2bd087.setFov(_0x3a9e51 + (fov - _0x3a9e51) * 0.05);
  } else {
    if (_0xa3ddda.isDisabledControlJustPressed(2, 241)) {
      fov = Math.max(fov - 10, 5);
    }
    if (_0xa3ddda.isDisabledControlJustPressed(2, 242)) {
      fov = Math.min(fov + 10, 70);
    }
    let _0x11e7e7 = _0x2bd087.getFov();
    if (Math.abs(fov - _0x11e7e7) < 0.1) {
      fov = _0x11e7e7;
    }
    _0x2bd087.setFov(_0x11e7e7 + (fov - _0x11e7e7) * 0.05);
  }
};