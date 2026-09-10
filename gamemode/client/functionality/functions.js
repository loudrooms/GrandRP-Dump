function drawThickLine(_0x53cde6, _0x193319, _0x379f8d, _0x5a9cae) {
  const _0x3ac1aa = new mp.Vector3(0, 0, 1);
  const _0x227676 = new mp.Vector3(_0x193319.x - _0x53cde6.x, _0x193319.y - _0x53cde6.y, _0x193319.z - _0x53cde6.z);
  const _0x4608a0 = Math.hypot(_0x227676.x, _0x227676.y, _0x227676.z);
  if (_0x4608a0 === 0) {
    return;
  }
  _0x227676.x /= _0x4608a0;
  _0x227676.y /= _0x4608a0;
  _0x227676.z /= _0x4608a0;
  let _0x4c27d6 = new mp.Vector3(_0x227676.y * _0x3ac1aa.z - _0x227676.z * _0x3ac1aa.y, _0x227676.z * _0x3ac1aa.x - _0x227676.x * _0x3ac1aa.z, _0x227676.x * _0x3ac1aa.y - _0x227676.y * _0x3ac1aa.x);
  const _0x5a8873 = Math.hypot(_0x4c27d6.x, _0x4c27d6.y, _0x4c27d6.z) || 1;
  _0x4c27d6 = new mp.Vector3(_0x4c27d6.x / _0x5a8873 * _0x379f8d / 2, _0x4c27d6.y / _0x5a8873 * _0x379f8d / 2, _0x4c27d6.z / _0x5a8873 * _0x379f8d / 2);
  const _0x2c509e = new mp.Vector3(_0x53cde6.x - _0x4c27d6.x, _0x53cde6.y - _0x4c27d6.y, _0x53cde6.z - _0x4c27d6.z);
  const _0x460cdb = new mp.Vector3(_0x53cde6.x + _0x4c27d6.x, _0x53cde6.y + _0x4c27d6.y, _0x53cde6.z + _0x4c27d6.z);
  const _0x5c48df = new mp.Vector3(_0x193319.x - _0x4c27d6.x, _0x193319.y - _0x4c27d6.y, _0x193319.z - _0x4c27d6.z);
  const _0x54f35f = new mp.Vector3(_0x193319.x + _0x4c27d6.x, _0x193319.y + _0x4c27d6.y, _0x193319.z + _0x4c27d6.z);
  const [_0x5813db, _0x4ffdcf, _0x439030, _0x12a070] = _0x5a9cae;
  mp.game.graphics.drawPoly(_0x2c509e.x, _0x2c509e.y, _0x2c509e.z, _0x460cdb.x, _0x460cdb.y, _0x460cdb.z, _0x54f35f.x, _0x54f35f.y, _0x54f35f.z, _0x5813db, _0x4ffdcf, _0x439030, _0x12a070);
  mp.game.graphics.drawPoly(_0x2c509e.x, _0x2c509e.y, _0x2c509e.z, _0x54f35f.x, _0x54f35f.y, _0x54f35f.z, _0x5c48df.x, _0x5c48df.y, _0x5c48df.z, _0x5813db, _0x4ffdcf, _0x439030, _0x12a070);
}
global.getGender = function () {
  if (localplayer.model != 1885233650) {
    return 1;
  } else {
    return 0;
  }
};
global.generateUUID = function () {
  return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
};
global.escapeHtml = function (_0x5803e4) {
  if (typeof _0x5803e4 != "string") {
    return _0x5803e4;
  } else {
    return _0x5803e4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
};
global.openEventStatistics = function (_0x210b42, _0x201e55, _0x119fac) {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x16b5b4 = "{\"fam_info\":" + JSON.stringify(_0x210b42) + ",\"bizid\":0,\"biz_name\":'',\"fam_winner\":'" + _0x201e55 + "',\"war_type\":" + _0x119fac + ",\"show\":true}";
  main_browser.execute("APPS.state.business_war = " + _0x16b5b4);
  FamilyBizWarStatsOpened = true;
  SwitchHUDToDesign(true);
};
mp.game.graphics.drawThickLine = drawThickLine;