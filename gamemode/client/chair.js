let is_chair_in_hands = false;
function getForwardPosition(_0x36eb12, _0x127e61, _0x3f54a5, _0x4d3cdf = true) {
  let _0x2891ec;
  _0x2891ec = _0x4d3cdf == 1 ? new mp.Vector3(_0x36eb12.x * _0x3f54a5 + _0x127e61.x, _0x36eb12.y * _0x3f54a5 + _0x127e61.y, _0x36eb12.z * _0x3f54a5 + _0x127e61.z) : new mp.Vector3(-_0x36eb12.x * _0x3f54a5 + _0x127e61.x, -_0x36eb12.y * _0x3f54a5 + _0x127e61.y, -_0x36eb12.z * _0x3f54a5 + _0x127e61.z);
  let _0x1880f1 = mp.game.gameplay.getGroundZFor3dCoord(_0x2891ec.x, _0x2891ec.y, _0x2891ec.z, 0, false);
  for (let _0x228f53 = 1; _0x228f53 < 11 && (_0x1880f1 != 0 || (_0x1880f1 = mp.game.gameplay.getGroundZFor3dCoord(_0x2891ec.x, _0x2891ec.y, _0x2891ec.z + _0x228f53, 0, false), _0x1880f1 == 0)); _0x228f53++);
  if (_0x1880f1 == 0) {
    _0x1880f1 = mp.game.gameplay.getGroundZFor3dCoord(_0x2891ec.x, _0x2891ec.y, _0x2891ec.z + 50, 0, false);
  }
  _0x2891ec.z = _0x1880f1;
  return _0x2891ec;
}
function SetChairOnFloor(_0x50f764) {
  if (_0x50f764 && is_chair_in_hands) {
    const _0x30d49d = 1;
    const _0x5ae835 = getForwardPosition(localplayer.getForwardVector(), localplayer.position, _0x30d49d, true);
    mp.events.callRemote("Server_StartSetChair", JSON.stringify(_0x5ae835));
    is_chair_in_hands = false;
    HintClose();
  }
}
mp.events.add("Client_ChairInHandState", function () {
  HintShow(language["ЛКМ - поставить стул"][curr_lang]);
  is_chair_in_hands = true;
});
mp.events.add("click", (_0x5f2444, _0x5e71cb, _0x3555e2, _0x5bc485, _0x277e6f, _0x15fda9, _0x2b10ba, _0x47c101) => {
  if (loggedin && is_chair_in_hands != 0 && _0x5bc485 == "left") {
    SetChairOnFloor(true);
  }
});
mp.events.add("render", () => {
  if (loggedin && is_chair_in_hands != 0) {
    mp.game.controls.disableControlAction(2, 22, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
  }
});
global.SitCustomChair = function (_0x38e0e1) {
  const _0x51bac5 = getForwardPosition(_0x38e0e1.getForwardVector(), _0x38e0e1.position, 0.5, false);
  mp.events.callRemote("Server_SitOnCustomChair", _0x38e0e1, JSON.stringify(_0x51bac5));
};
global.GetCustomChair = function (_0x1e4a41) {
  mp.events.callRemote("Server_GetCustomChair", _0x1e4a41);
};
global.sitting_at_custom_chair = false;
mp.events.add("Client_SittingOnCustomChair", function (_0x100b87) {
  sitting_at_custom_chair = _0x100b87;
});
global.StandUpFromCustomChair = function () {
  mp.events.callRemote("Server_StandFromCustomChair");
};