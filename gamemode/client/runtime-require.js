(function () {
  if (typeof globalThis.__non_webpack_require__ == "function") {
    return;
  }
  const _0x2f22b0 = GetCurrentResourceName();
  const _0x4730b3 = Object.create(null);
  let _0x3e93d7 = "client/index.js";
  function _0x1c4142(_0x5ed840, _0x493712) {
    if (typeof _0x5ed840 != "string") {
      throw new TypeError("require() expects a string");
    }
    const _0xdc7ed5 = function (_0x231533, _0xcd7249) {
      const _0x2c8e74 = _0xcd7249 || _0x3e93d7;
      const _0x44dfb2 = String(_0x231533).replace(/\\/g, "/");
      if (_0x44dfb2.startsWith("./") || _0x44dfb2.startsWith("../")) {
        return function (_0x551804) {
          const _0x28dbc4 = [];
          for (const _0x4ca1de of _0x551804) {
            if (_0x4ca1de && _0x4ca1de !== ".") {
              if (_0x4ca1de === "..") {
                _0x28dbc4.pop();
              } else {
                _0x28dbc4.push(_0x4ca1de);
              }
            }
          }
          return _0x28dbc4.join("/");
        }((_0x2c8e74.replace(/\/[^/]+$/, "") + "/" + _0x44dfb2).split("/"));
      } else if (_0x44dfb2.includes("/")) {
        return _0x44dfb2;
      } else {
        return "client/" + _0x44dfb2;
      }
    }(_0x5ed840, _0x493712);
    if (Object.prototype.hasOwnProperty.call(_0x4730b3, _0xdc7ed5)) {
      return _0x4730b3[_0xdc7ed5].exports;
    }
    const _0x4b7e1a = LoadResourceFile(_0x2f22b0, _0xdc7ed5);
    if (!_0x4b7e1a) {
      const _0x8deeed = new Error("Cannot find module '" + _0x5ed840 + "'");
      _0x8deeed.code = "MODULE_NOT_FOUND";
      throw _0x8deeed;
    }
    const _0x4f159d = {
      exports: {}
    };
    const _0x243a4d = _0x3e93d7;
    _0x3e93d7 = _0xdc7ed5;
    try {
      if (_0xdc7ed5.endsWith(".json")) {
        _0x4f159d.exports = JSON.parse(_0x4b7e1a);
      } else {
        const _0x251b8c = _0xdc7ed5.replace(/\/[^/]+$/, "");
        const _0x1c1454 = _0xdd2f5b => _0x1c4142(_0xdd2f5b, _0xdc7ed5);
        new Function("exports", "module", "require", "__filename", "__dirname", "globalThis", _0x4b7e1a + "\n//# sourceURL=" + _0x2f22b0 + "/" + _0xdc7ed5)(_0x4f159d.exports, _0x4f159d, _0x1c1454, _0xdc7ed5, _0x251b8c, globalThis);
      }
    } finally {
      _0x3e93d7 = _0x243a4d;
    }
    _0x4730b3[_0xdc7ed5] = _0x4f159d;
    return _0x4f159d.exports;
  }
  globalThis.__non_webpack_require__ = _0x1c4142;
  const _0x1a8186 = _0x46d2a0 => _0x1c4142(_0x46d2a0, "client/index.js");
  globalThis.require = _0x1a8186;
  if (typeof global != "undefined") {
    global.require = _0x1a8186;
  }
})();