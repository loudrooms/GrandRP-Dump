let DEFAULT_LANG = "en";
let FALLBACK_LANG = "ru";
let LANG_PACK = null;
let RAW_LANG_PACK = null;
function formatTranslation(_0x4964e0, _0xd8b3a6) {
  return String(_0x4964e0).replace(/{(\d+)}/g, function (_0x2cde69, _0x81cbf4) {
    if (_0xd8b3a6[_0x81cbf4] === undefined) {
      return _0x2cde69;
    }
    let _0x58089f = _0xd8b3a6[_0x81cbf4];
    if (_0x58089f !== null && typeof _0x58089f == "object" && typeof global.resolveTranslationValue == "function") {
      const _0x32f2fc = global.resolveTranslationValue(_0x58089f);
      if (_0x32f2fc != null && typeof _0x32f2fc != "object") {
        _0x58089f = _0x32f2fc;
      }
    }
    return _0x58089f;
  });
}
function getRawLanguagePack() {
  if (typeof global != "undefined" && global.language && global.language !== LANG_PACK) {
    RAW_LANG_PACK = global.language;
    return RAW_LANG_PACK;
  }
  if (RAW_LANG_PACK) {
    return RAW_LANG_PACK;
  }
  try {
    RAW_LANG_PACK = require("./language.json");
    return RAW_LANG_PACK;
  } catch (_0x6e08d0) {
    RAW_LANG_PACK = {};
    return RAW_LANG_PACK;
  }
}
function resolveTranslation(_0x5cef05, _0x5e4cfc) {
  let _0xb63371 = getRawLanguagePack()[_0x5cef05];
  if (!_0xb63371) {
    return _0x5cef05;
  }
  if (typeof _0xb63371 == "string") {
    return _0xb63371;
  }
  if (_0xb63371[_0x5e4cfc] !== undefined) {
    return _0xb63371[_0x5e4cfc];
  }
  if (_0xb63371[FALLBACK_LANG] !== undefined) {
    return _0xb63371[FALLBACK_LANG];
  }
  if (_0xb63371[DEFAULT_LANG] !== undefined) {
    return _0xb63371[DEFAULT_LANG];
  }
  for (let _0x4abd77 in _0xb63371) {
    if (Object.prototype.hasOwnProperty.call(_0xb63371, _0x4abd77) && _0xb63371[_0x4abd77] !== undefined) {
      return _0xb63371[_0x4abd77];
    }
  }
  return _0x5cef05;
}
function createLanguageProxy(_0x1c5848) {
  let _0xb5ce6f = Object.create(null);
  return new Proxy(_0x1c5848, {
    get: function (_0xbe8aeb, _0x1fb056) {
      if (_0x1fb056 in _0xbe8aeb) {
        return _0xbe8aeb[_0x1fb056];
      }
      let _0x3fd96b = String(_0x1fb056);
      _0xb5ce6f[_0x3fd96b] ||= new Proxy({}, {
        get: function (_0x28ed99, _0x1ec39a) {
          return resolveTranslation(_0x3fd96b, String(_0x1ec39a));
        }
      });
      return _0xb5ce6f[_0x3fd96b];
    }
  });
}
function normalizeLanguage(_0x5a267e) {
  if (typeof _0x5a267e == "string" && _0x5a267e.length > 0) {
    return _0x5a267e;
  } else if (typeof global != "undefined" && typeof global.curr_lang == "string" && global.curr_lang.length > 0) {
    return global.curr_lang;
  } else {
    return DEFAULT_LANG;
  }
}
(function () {
  let _0x583c48 = getRawLanguagePack();
  if (typeof Proxy != "undefined") {
    let _0x25c057 = createLanguageProxy(_0x583c48);
    LANG_PACK = _0x25c057;
    if (typeof global != "undefined") {
      global.language = _0x25c057;
    }
  } else {
    LANG_PACK = _0x583c48;
    if (typeof global != "undefined") {
      global.language = _0x583c48;
    }
  }
})();
global.t = function (_0x29911a) {
  let _0x2c715d = Array.prototype.slice.call(arguments, 1);
  if (typeof _0x29911a == "number" && !isNaN(_0x29911a) && global.NotificationMessages !== undefined && _0x29911a >= 0 && _0x29911a < global.NotificationMessages.length) {
    _0x29911a = global.NotificationMessages[_0x29911a];
  }
  return formatTranslation(resolveTranslation(_0x29911a, normalizeLanguage()), _0x2c715d);
};
global.TranslateText = function (_0x3a1958) {
  return global.t.apply(null, arguments);
};
global.resolveTranslationValue = function (_0x262292) {
  if (Array.isArray(_0x262292) && _0x262292.length > 0 && typeof _0x262292[0] == "string") {
    return global.t.apply(null, _0x262292);
  }
  if (typeof _0x262292 == "number" && !isNaN(_0x262292) && global.NotificationMessages !== undefined && _0x262292 >= 0 && _0x262292 < global.NotificationMessages.length) {
    return global.t(_0x262292);
  }
  if (typeof _0x262292 == "string") {
    const _0x4e6586 = parseInt(_0x262292, 10);
    if (!isNaN(_0x4e6586) && /^\d+$/.test(_0x262292) && _0x262292 === String(_0x4e6586) && global.NotificationMessages !== undefined && _0x4e6586 >= 0 && _0x4e6586 < global.NotificationMessages.length) {
      return global.t(_0x4e6586);
    } else {
      return global.t(_0x262292);
    }
  }
  return _0x262292;
};