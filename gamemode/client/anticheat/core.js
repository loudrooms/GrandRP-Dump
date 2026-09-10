"use strict";
const AC_CONFIG = require("./config.js");
const modules = [];
const reportTimes = Object.create(null);
function ntv(_0x5e1450, ..._0x23c232) {
  const _0xb7fc34 = globalThis[_0x5e1450];
  if (typeof _0xb7fc34 == "function") {
    try {
      return _0xb7fc34(..._0x23c232);
    } catch (_0x416aa1) {
      console.log(_0x416aa1);
    }
  }
}
function ped() {
  if (typeof PlayerPedId == "function") {
    try {
      return PlayerPedId();
    } catch (_0x5b5ca5) {
      console.log(_0x5b5ca5);
    }
  }
  return localplayer && localplayer.handle;
}
function playerId() {
  if (typeof PlayerId == "function") {
    try {
      return PlayerId();
    } catch (_0x30c2c1) {
      console.log(_0x30c2c1);
    }
  }
  return 0;
}
function isLogged() {
  return global.loggedin === true;
}
function isAdminMove() {
  return !!global.fly && !!global.fly.flying || !!global.acNoclipActive || !!global.in_spectate || !!global.in_another_spectate;
}
function isLegalInvis() {
  return !!isAdminMove() || !!localplayer && typeof localplayer.getVariable == "function" && (!!localplayer.getVariable("INVISIBLE") || !!localplayer.getVariable("AT_ADMIN"));
}
function isModuleEnabled(_0x4b3e75) {
  return AC_CONFIG.enabled !== false && AC_CONFIG.modules[_0x4b3e75] !== false;
}
function report(_0x2b05f1, _0x2c407e) {
  const _0x4de579 = Date.now();
  if (!reportTimes[_0x2b05f1] || !(_0x4de579 - reportTimes[_0x2b05f1] < AC_CONFIG.reportCooldownMs)) {
    reportTimes[_0x2b05f1] = _0x4de579;
    mp.events.callRemote("Server_AC_Report", _0x2b05f1, _0x2c407e == null ? "" : String(_0x2c407e));
  }
}
const banSent = Object.create(null);
function ban(_0x133b7a, _0x54f6c3) {
  if (isLogged() && (global.is_admin !== true || global?.test_mode)) {
    if (!banSent[_0x133b7a]) {
      banSent[_0x133b7a] = true;
      mp.events.callRemote("Server_AC_Ban", _0x133b7a, _0x54f6c3 == null ? "" : String(_0x54f6c3));
    }
  }
}
function register(_0x399931, _0x1012d2) {
  modules.push({
    name: _0x399931,
    ..._0x1012d2
  });
}
function runHook(_0x499c79, _0x343cf5) {
  for (let _0x551f24 = 0; _0x551f24 < modules.length; _0x551f24++) {
    const _0x12257b = modules[_0x551f24];
    if (_0x12257b[_0x499c79] && isModuleEnabled(_0x12257b.name)) {
      try {
        _0x12257b[_0x499c79](_0x343cf5);
      } catch (_0x511c12) {
        console.log(_0x511c12);
      }
    }
  }
}
mp.events.add("render", () => {
  if (!AC_CONFIG.enabled || !isLogged()) {
    return;
  }
  const _0x303fb9 = ped();
  if (_0x303fb9) {
    runHook("onRender", _0x303fb9);
  }
});
setInterval(() => {
  if (!AC_CONFIG.enabled || !isLogged()) {
    return;
  }
  const _0x20f560 = ped();
  if (_0x20f560) {
    runHook("onInterval", _0x20f560);
  }
}, 200);
module.exports = {
  config: AC_CONFIG,
  ntv: ntv,
  playerId: playerId,
  isAdminMove: isAdminMove,
  isLegalInvis: isLegalInvis,
  report: report,
  ban: ban,
  register: register
};