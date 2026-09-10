var FUNC_ERROR_TEXT = "Expected a function";
var NAN = NaN;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max;
var nativeMin = Math.min;
function now() {
  return root.Date.now();
}
function isObject(_0x3e814f) {
  var _0x71b1a2 = typeof _0x3e814f;
  return !!_0x3e814f && (_0x71b1a2 == "object" || _0x71b1a2 == "function");
}
function isObjectLike(_0x204bf3) {
  return !!_0x204bf3 && typeof _0x204bf3 == "object";
}
function isSymbol(_0x579fde) {
  return typeof _0x579fde == "symbol" || isObjectLike(_0x579fde) && objectToString.call(_0x579fde) == symbolTag;
}
function toNumber(_0x484834) {
  if (typeof _0x484834 == "number") {
    return _0x484834;
  }
  if (isSymbol(_0x484834)) {
    return NAN;
  }
  if (isObject(_0x484834)) {
    var _0x3d08e8 = typeof _0x484834.valueOf == "function" ? _0x484834.valueOf() : _0x484834;
    _0x484834 = isObject(_0x3d08e8) ? _0x3d08e8 + "" : _0x3d08e8;
  }
  if (typeof _0x484834 != "string") {
    if (_0x484834 === 0) {
      return _0x484834;
    } else {
      return +_0x484834;
    }
  }
  _0x484834 = _0x484834.replace(reTrim, "");
  var _0x4756aa = reIsBinary.test(_0x484834);
  if (_0x4756aa || reIsOctal.test(_0x484834)) {
    return freeParseInt(_0x484834.slice(2), _0x4756aa ? 2 : 8);
  } else if (reIsBadHex.test(_0x484834)) {
    return NAN;
  } else {
    return +_0x484834;
  }
}
global.debounce = function (_0x225b86, _0x33f51f, _0xe8cabe) {
  var _0x2486af;
  var _0x465f0f;
  var _0x3780b5;
  var _0x354865;
  var _0x4e2cdc;
  var _0x4a2a7f;
  var _0x5808a9 = 0;
  var _0x11b0af = false;
  var _0x456134 = false;
  var _0x4947d6 = true;
  if (typeof _0x225b86 != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  function _0x1d0087(_0x1fdf5a) {
    var _0x3b92ae = _0x2486af;
    var _0xccac6e = _0x465f0f;
    _0x2486af = _0x465f0f = undefined;
    _0x5808a9 = _0x1fdf5a;
    return _0x354865 = _0x225b86.apply(_0xccac6e, _0x3b92ae);
  }
  function _0x5408a4(_0x59bb0c) {
    var _0x10f16d = _0x59bb0c - _0x4a2a7f;
    return _0x4a2a7f === undefined || _0x10f16d >= _0x33f51f || _0x10f16d < 0 || _0x456134 && _0x59bb0c - _0x5808a9 >= _0x3780b5;
  }
  function _0x536437() {
    var _0x1c3872 = now();
    if (_0x5408a4(_0x1c3872)) {
      return _0x1d352f(_0x1c3872);
    }
    _0x4e2cdc = setTimeout(_0x536437, function (_0x13e762) {
      var _0x33e20c = _0x33f51f - (_0x13e762 - _0x4a2a7f);
      if (_0x456134) {
        return nativeMin(_0x33e20c, _0x3780b5 - (_0x13e762 - _0x5808a9));
      } else {
        return _0x33e20c;
      }
    }(_0x1c3872));
  }
  function _0x1d352f(_0x1d112d) {
    _0x4e2cdc = undefined;
    if (_0x4947d6 && _0x2486af) {
      return _0x1d0087(_0x1d112d);
    } else {
      _0x2486af = _0x465f0f = undefined;
      return _0x354865;
    }
  }
  function _0x3a1723() {
    var _0x3d810f = now();
    var _0x294236 = _0x5408a4(_0x3d810f);
    _0x2486af = arguments;
    _0x465f0f = this;
    _0x4a2a7f = _0x3d810f;
    if (_0x294236) {
      if (_0x4e2cdc === undefined) {
        return function (_0x39c4fb) {
          _0x5808a9 = _0x39c4fb;
          _0x4e2cdc = setTimeout(_0x536437, _0x33f51f);
          if (_0x11b0af) {
            return _0x1d0087(_0x39c4fb);
          } else {
            return _0x354865;
          }
        }(_0x4a2a7f);
      }
      if (_0x456134) {
        _0x4e2cdc = setTimeout(_0x536437, _0x33f51f);
        return _0x1d0087(_0x4a2a7f);
      }
    }
    if (_0x4e2cdc === undefined) {
      _0x4e2cdc = setTimeout(_0x536437, _0x33f51f);
    }
    return _0x354865;
  }
  _0x33f51f = toNumber(_0x33f51f) || 0;
  if (isObject(_0xe8cabe)) {
    _0x11b0af = !!_0xe8cabe.leading;
    _0x3780b5 = (_0x456134 = "maxWait" in _0xe8cabe) ? nativeMax(toNumber(_0xe8cabe.maxWait) || 0, _0x33f51f) : _0x3780b5;
    _0x4947d6 = "trailing" in _0xe8cabe ? !!_0xe8cabe.trailing : _0x4947d6;
  }
  _0x3a1723.cancel = function () {
    if (_0x4e2cdc !== undefined) {
      clearTimeout(_0x4e2cdc);
    }
    _0x5808a9 = 0;
    _0x2486af = _0x4a2a7f = _0x465f0f = _0x4e2cdc = undefined;
  };
  _0x3a1723.flush = function () {
    if (_0x4e2cdc === undefined) {
      return _0x354865;
    } else {
      return _0x1d352f(now());
    }
  };
  return _0x3a1723;
};
global.throttle = function (_0x3beeb3, _0x4bec6f, _0xc9e874) {
  var _0x5a7347 = true;
  var _0x1672ff = true;
  if (typeof _0x3beeb3 != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(_0xc9e874)) {
    _0x5a7347 = "leading" in _0xc9e874 ? !!_0xc9e874.leading : _0x5a7347;
    _0x1672ff = "trailing" in _0xc9e874 ? !!_0xc9e874.trailing : _0x1672ff;
  }
  return global.debounce(_0x3beeb3, _0x4bec6f, {
    leading: _0x5a7347,
    maxWait: _0x4bec6f,
    trailing: _0x1672ff
  });
};