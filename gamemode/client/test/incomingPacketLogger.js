(() => {
  if (!mp || !mp.events) {
    return;
  }
  const _0x5091ff = [];
  let _0x1045a3 = true;
  const _0xe39c55 = ["render", "click"];
  function _0x758373(_0x2c0487) {
    try {
      return JSON.stringify(_0x2c0487);
    } catch (_0x261977) {
      return String(_0x2c0487);
    }
  }
  function _0x5b0779(_0x1f383d) {
    _0x5091ff.push(_0x1f383d);
    if (_0x5091ff.length > 500) {
      _0x5091ff.splice(0, _0x5091ff.length - 500);
    }
  }
  const _0x46037d = mp.events.add.bind(mp.events);
  mp.events.add = function (_0x4818e2, _0x26b9e8) {
    if (typeof _0x4818e2 == "object") {
      const _0x1cd3a4 = {};
      for (const _0x5617cf in _0x4818e2) {
        if (typeof _0x4818e2[_0x5617cf] == "function") {
          _0x1cd3a4[_0x5617cf] = (..._0x14d8c0) => {
            if (!_0xe39c55.includes(_0x5617cf)) {
              const _0x587443 = {
                ts: Date.now(),
                event: _0x5617cf,
                args: _0x758373(_0x14d8c0)
              };
              _0x5b0779(_0x587443);
              if (_0x1045a3) {
                mp.gui.chat.push("-> " + _0x5617cf + " : " + _0x587443.args);
              }
            }
            return _0x4818e2[_0x5617cf](..._0x14d8c0);
          };
        }
      }
      return _0x46037d(_0x1cd3a4);
    }
    if (typeof _0x26b9e8 == "function") {
      return _0x46037d(_0x4818e2, (..._0x337174) => {
        if (!_0xe39c55.includes(_0x4818e2)) {
          const _0x4e85b4 = {
            ts: Date.now(),
            event: _0x4818e2,
            args: _0x758373(_0x337174)
          };
          _0x5b0779(_0x4e85b4);
          if (_0x1045a3) {
            mp.gui.chat.push("-> " + _0x4818e2 + " : " + _0x4e85b4.args);
          }
        }
        return _0x26b9e8(..._0x337174);
      });
    }
    return _0x46037d(_0x4818e2, _0x26b9e8);
  };
  mp.events.add("Client_DumpIncomingLogs", () => {
    mp.gui.chat.push("=== Incoming packets dump ===");
    _0x5091ff.forEach((_0x1a00b0, _0x33dc18) => {
      const _0x1b57ef = new Date(_0x1a00b0.ts).toLocaleTimeString();
      mp.gui.chat.push("#" + (_0x33dc18 + 1) + " [" + _0x1b57ef + "] " + _0x1a00b0.event + " : " + _0x1a00b0.args);
    });
  });
  mp.events.add("Client_ClearIncomingLogs", () => {
    _0x5091ff.length = 0;
    mp.gui.chat.push("Incoming logs cleared");
  });
  mp.events.add("Client_SetLogInChatIncoming", () => {
    _0x1045a3 = !_0x1045a3;
    mp.gui.chat.push("logInChat logging = " + _0x1045a3);
  });
  mp.events.add("Client_SendIncomingLogsToServer", () => {
    mp.events.callRemote("receiveClientLogs", JSON.stringify(_0x5091ff));
    mp.gui.chat.push("Logs sent to server");
  });
  mp.gui.chat.push("Incoming logger initialized.");
})();