"use strict";
const AC = require("../core.js");
AC.register("hulk", {
  onRender(_0x4260e7) {
    mp.vehicles.forEachInStreamRange(_0x5f3a67 => {
      if (!_0x5f3a67 || !mp.vehicles.exists(_0x5f3a67)) {
        return;
      }
      const _0x1add2b = _0x5f3a67.handle;
      if (!_0x1add2b) {
        return;
      }
      if (!AC.ntv("IsEntityAttached", _0x1add2b)) {
        return;
      }
      if (AC.ntv("GetEntityAttachedTo", _0x1add2b) !== _0x4260e7) {
        return;
      }
      AC.ntv("DetachEntity", _0x1add2b, false, false);
      const _0x15b608 = (AC.ntv("GetEntityModel", _0x1add2b) || 0) >>> 0;
      const _0x183aec = AC.ntv("GetEntityArchetypeName", _0x1add2b) || AC.ntv("GetDisplayNameFromVehicleModel", _0x15b608) || "0x" + _0x15b608.toString(16).toUpperCase();
      AC.ban("hulk", "model=" + _0x183aec);
    });
  }
});