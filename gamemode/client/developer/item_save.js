let npc = mp.peds.new(mp.game.joaat("mp_m_freemode_01"), new mp.Vector3(1726.561, -1616.843, 112.74), 203.182, 0);
mp.events.add("playerCommand", _0x59610d => {
  const _0x397000 = _0x59610d.split(/[ ]+/);
  const _0x1c6618 = _0x397000[0];
  _0x397000.shift();
  switch (_0x1c6618) {
    case "bb":
      for (let _0x35fe9b = 0; _0x35fe9b < 12; _0x35fe9b++) {
        npc.setComponentVariation(_0x35fe9b, -1, 0, -1);
      }
      break;
    case "test":
      setTimeout(() => {
        let _0x1361a2 = 0;
        let _0x48ee54 = 0;
        let _0x4dd3ad = setInterval(() => {
          npc.setPropIndex(2, _0x1361a2, _0x48ee54, true);
          setTimeout(() => {
            mp.gui.takeScreenshot(_0x1361a2 + "_" + _0x48ee54 + ".png", 1, 100, 0);
            if (_0x48ee54 >= npc.getNumberOfPropTextureVariations(2, _0x1361a2) - 1) {
              _0x1361a2++;
              _0x48ee54 = 0;
            } else {
              _0x48ee54++;
            }
          }, 200);
          if (_0x1361a2 >= 40) {
            clearInterval(_0x4dd3ad);
          }
        }, 1200);
      }, 1000);
  }
});