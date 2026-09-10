mp.game.blackout = {
  _enabled: false,
  get enabled() {
    return this._enabled;
  },
  set enabled(_0x4ccb50) {
    this._enabled = _0x4ccb50;
    for (let _0x3ddf4a = 0; _0x3ddf4a <= 16; _0x3ddf4a++) {
      mp.game.graphics.setLightsState(_0x3ddf4a, _0x4ccb50);
    }
  }
};
mp.events.add("SetBlackoutState", _0x129f53 => {
  mp.game.blackout.enabled = _0x129f53;
});