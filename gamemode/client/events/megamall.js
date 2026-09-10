const MAIN_DROP_POSITION = new mp.Vector3(28.003, -1740.308, 29.303);
const SHAPE_RADIUS = 2;
mp.markers.new(1, new mp.Vector3(MAIN_DROP_POSITION.x, MAIN_DROP_POSITION.y, MAIN_DROP_POSITION.z - 2), 4, {
  color: [246, 225, 0, 255],
  visible: true,
  dimension: 0
});
mp.colshapes.newSphere(MAIN_DROP_POSITION.x, MAIN_DROP_POSITION.y, MAIN_DROP_POSITION.z, 2, 0).bMegamallDrop = true;
mp.blips.new(896, MAIN_DROP_POSITION, {
  name: language.Мегамолл[curr_lang],
  alpha: 255,
  color: 1,
  dimension: 0,
  shortRange: true
});
global.bAtMegamallDrop = false;
mp.events.add("playerEnterColshape", _0x3a30d4 => {
  if (_0x3a30d4.bMegamallDrop) {
    main_browser.execute("APPS.state.hud.interact = true;");
    bAtMegamallDrop = true;
  }
});
mp.events.add("playerExitColshape", _0x5e9e94 => {
  if (_0x5e9e94.bMegamallDrop) {
    bAtMegamallDrop = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
global.setGPSToMegamall = function () {
  mp.events.call("Client_SetRouteToPosition", MAIN_DROP_POSITION);
};
const TIME_LABEL = mp.labels.new(language.Амуниция[curr_lang] + "~n~00:00:00", new mp.Vector3(MAIN_DROP_POSITION.x, MAIN_DROP_POSITION.y, MAIN_DROP_POSITION.z - 0.25), {
  los: true,
  font: 0,
  drawDistance: 10,
  color: [255, 255, 255, 255],
  dimension: 0
});
const MEGAMALL_INTERVAL_MINUTES = 5;
function padTimePart(_0x2b5a59) {
  return _0x2b5a59.toString().padStart(2, "0");
}
function getNextMegamallStartTime(_0x2e2493) {
  const _0x680090 = new Date(_0x2e2493);
  const _0x7c5182 = _0x680090.getMinutes();
  const _0x21222c = _0x680090.getSeconds();
  const _0x5b0183 = _0x680090.getMilliseconds();
  const _0xd5fa75 = new Date(_0x680090);
  if (_0x7c5182 % 5 == 0 && _0x21222c == 0 && _0x5b0183 == 0) {
    _0xd5fa75.setSeconds(0, 0);
    return _0xd5fa75.getTime();
  }
  let _0x2a3f39 = _0x7c5182 - _0x7c5182 % 5 + 5;
  if (_0x2a3f39 >= 60) {
    _0xd5fa75.setHours(_0xd5fa75.getHours() + 1);
    _0x2a3f39 -= 60;
  }
  _0xd5fa75.setMinutes(_0x2a3f39, 0, 0);
  return _0xd5fa75.getTime();
}
function updateMegamallTimeLabel() {
  const _0x497c66 = Date.now();
  const _0x5787c3 = getNextMegamallStartTime(_0x497c66);
  const _0x1cb4bf = Math.max(0, _0x5787c3 - _0x497c66);
  const _0x4c9000 = Math.floor(_0x1cb4bf / 1000);
  const _0x45049a = Math.floor(_0x4c9000 / 3600);
  const _0x293425 = Math.floor(_0x4c9000 % 3600 / 60);
  const _0x4b7c86 = _0x4c9000 % 60;
  TIME_LABEL.text = language.Амуниция[curr_lang] + "~n~" + (padTimePart(_0x45049a) + ":" + padTimePart(_0x293425) + ":" + padTimePart(_0x4b7c86));
}
updateMegamallTimeLabel();
setInterval(updateMegamallTimeLabel, 1000);