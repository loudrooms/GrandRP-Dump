"use strict";
const AC = require("../core.js");
let legalUntil = 0;
let hits = 0;
function velZ(_0x18e12d) {
  const _0x232198 = AC.ntv("GetEntityVelocity", _0x18e12d, false);
  if (_0x232198) {
    if (typeof _0x232198.z == "number") {
      return _0x232198.z;
    }
    if (typeof _0x232198[2] == "number") {
      return _0x232198[2];
    }
  }
  try {
    const _0x4f3ff6 = localplayer.getVelocity();
    if (_0x4f3ff6 && typeof _0x4f3ff6.z == "number") {
      return _0x4f3ff6.z;
    }
  } catch (_0x299c2a) {
    console.log(_0x299c2a);
  }
  return 0;
}
function jumping(_0x499fa1) {
  if (AC.ntv("IsPedJumping", _0x499fa1)) {
    return true;
  }
  try {
    return !!localplayer.isJumping();
  } catch (_0x21cb3a) {
    console.log(_0x21cb3a);
  }
  return false;
}
function skip(_0x47cc57) {
  if (AC.isAdminMove()) {
    return true;
  }
  if (Date.now() < legalUntil) {
    return true;
  }
  if (AC.ntv("IsPedInAnyVehicle", _0x47cc57, false)) {
    return true;
  }
  if (AC.ntv("IsPedRagdoll", _0x47cc57)) {
    return true;
  }
  if (AC.ntv("IsPedSwimming", _0x47cc57) || AC.ntv("IsPedSwimmingUnderWater", _0x47cc57)) {
    return true;
  }
  if (AC.ntv("IsPedClimbing", _0x47cc57) || AC.ntv("IsPedVaulting", _0x47cc57)) {
    return true;
  }
  if (AC.ntv("IsPedInParachuteFreeFall", _0x47cc57)) {
    return true;
  }
  const _0x25967b = AC.ntv("GetPedParachuteState", _0x47cc57);
  return _0x25967b === 1 || _0x25967b === 2 || !!AC.ntv("IsEntityAttached", _0x47cc57);
}
mp.events.add("Client_SetSuperJump", () => {
  legalUntil = Date.now() + (AC.config.superjump.legalMs || 120000);
});
AC.register("superjump", {
  onRender(_0x1bdc50) {
    if (skip(_0x1bdc50)) {
      hits = 0;
      return;
    }
    if (!jumping(_0x1bdc50)) {
      hits = 0;
      return;
    }
    const _0x1faa7b = velZ(_0x1bdc50);
    if (_0x1faa7b <= AC.config.superjump.maxJumpVz) {
      hits = 0;
    } else {
      hits++;
      if (!(hits < AC.config.superjump.hitsToBan)) {
        hits = 0;
        AC.report("superjump", "vz=" + _0x1faa7b.toFixed(1));
      }
    }
  }
});