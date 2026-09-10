"use strict";
const AC = require("../core.js");
const CFG = AC.config.invisible || {};
const HITS_TO_ACT = CFG.hitsToAct || 2;
const REPORT_COOLDOWN_MS = CFG.reportCooldownMs || 15000;
const SELF_ALPHA_LIMIT = CFG.selfAlphaLimit || 200;
const ENFORCE_MS = CFG.enforceMs || 300000;
const pending = new Map();
const reported = new Map();
const offenders = new Map();
function pedExists(_0x13817e) {
  if (!_0x13817e) {
    return false;
  }
  try {
    return !!DoesEntityExist(_0x13817e);
  } catch (_0x21c2c2) {
    console.log(_0x21c2c2);
    return false;
  }
}
function isLegalRemoteInvis(_0x349495) {
  return _0x349495.is_in_fly === true || typeof _0x349495.getVariable != "function" || !!_0x349495.getVariable("INVISIBLE") || !!_0x349495.getVariable("AT_ADMIN") || !!_0x349495._duelLegalAlpha;
}
function pedOf(_0x49d036) {
  let _0x3187ac = 0;
  try {
    _0x3187ac = _0x49d036.handle;
  } catch (_0x5c378a) {
    console.log(_0x5c378a);
  }
  if (pedExists(_0x3187ac)) {
    return _0x3187ac;
  } else {
    return 0;
  }
}
function forceVisible(_0x16004c) {
  try {
    if (!_0x16004c.isVisible()) {
      _0x16004c.setVisible(true, false);
    }
  } catch (_0x5a5975) {
    console.log(_0x5a5975);
  }
}
function reportRemote(_0x524047) {
  const _0x905d36 = Date.now();
  const _0x29a0dc = reported.get(_0x524047);
  if (!_0x29a0dc || !(_0x905d36 - _0x29a0dc < REPORT_COOLDOWN_MS)) {
    reported.set(_0x524047, _0x905d36);
    mp.events.callRemote("Server_AC_InvisReport", _0x524047);
  }
}
function idOf(_0x2d85b0) {
  let _0x257ed2 = -1;
  try {
    _0x257ed2 = _0x2d85b0.remoteId | 0;
  } catch (_0x110662) {
    console.log(_0x110662);
  }
  if (_0x257ed2 < 0 || _0x257ed2 === INVALID_REMOTE_ID) {
    return -1;
  } else {
    return _0x257ed2;
  }
}
function checkLocal() {
  if (AC.isLegalInvis()) {
    return;
  }
  let _0x18f176 = true;
  let _0x3a6543 = 255;
  try {
    _0x18f176 = localplayer.isVisible();
  } catch (_0x418581) {
    console.log(_0x418581);
  }
  try {
    _0x3a6543 = localplayer.getAlpha();
  } catch (_0x542bba) {
    console.log(_0x542bba);
  }
}
function scanRemote() {
  const _0x648da0 = Date.now();
  const _0x2b5b9b = new Set();
  mp.players.forEachInStreamRange(_0x187297 => {
    if (!_0x187297 || _0x187297 === localplayer) {
      return;
    }
    const _0x421884 = idOf(_0x187297);
    if (_0x421884 < 0 || !pedOf(_0x187297)) {
      return;
    }
    _0x2b5b9b.add(_0x421884);
    if (isLegalRemoteInvis(_0x187297)) {
      pending.delete(_0x421884);
      return;
    }
    let _0x529fde = true;
    try {
      _0x529fde = _0x187297.isVisible();
    } catch (_0x4b160d) {
      console.log(_0x4b160d);
    }
    if (_0x529fde) {
      pending.delete(_0x421884);
      return;
    }
    const _0x183803 = (pending.get(_0x421884) || 0) + 1;
    if (_0x183803 < HITS_TO_ACT) {
      pending.set(_0x421884, _0x183803);
    } else {
      pending.delete(_0x421884);
      offenders.set(_0x421884, _0x648da0);
      forceVisible(_0x187297);
    }
  });
  pending.forEach((_0x9213d2, _0x5a0562) => {
    if (!_0x2b5b9b.has(_0x5a0562)) {
      pending.delete(_0x5a0562);
    }
  });
  offenders.forEach((_0x2d4913, _0x424e54) => {
    if (_0x648da0 - _0x2d4913 > ENFORCE_MS) {
      offenders.delete(_0x424e54);
    }
  });
  reported.forEach((_0x5c1f17, _0xdfdaca) => {
    if (_0x648da0 - _0x5c1f17 > REPORT_COOLDOWN_MS * 4) {
      reported.delete(_0xdfdaca);
    }
  });
}
function holdOffendersVisible() {
  if (offenders.size) {
    offenders.forEach((_0x1db2bf, _0x5ae053) => {
      const _0x116a4c = mp.players.atRemoteId(_0x5ae053);
      if (_0x116a4c && !isLegalRemoteInvis(_0x116a4c) && pedOf(_0x116a4c)) {
        forceVisible(_0x116a4c);
      }
    });
  }
}
AC.register("invisible", {
  onRender() {
    holdOffendersVisible();
  },
  onInterval() {
    checkLocal();
    scanRemote();
  }
});