"use strict";
const AC = require("../core.js");
function authorizedSprint() {
  const _0x15515a = global.acSprintMultiplier;
  if (typeof _0x15515a != "number" || isNaN(_0x15515a) || _0x15515a < 1) {
    return 1;
  } else if (_0x15515a > 1.49) {
    return 1.49;
  } else {
    return _0x15515a;
  }
}
AC.register("speed", {
  onRender(_0x256cfc) {
    if (AC.isAdminMove()) {
      return;
    }
    const _0x1fe8de = authorizedSprint();
    const _0x232701 = AC.playerId();
    const _0x4634b1 = AC.config.speed.maxMoveRate;
    AC.ntv("SetRunSprintMultiplierForPlayer", _0x232701, _0x1fe8de);
    AC.ntv("SetPedMoveRateOverride", _0x256cfc, _0x4634b1);
  }
});