const _SET_NOTIFICATION_COLOR_NEXT = "0x39BBF623FC803EAC";
const _SET_NOTIFICATION_BACKGROUND_COLOR = "0x92F0DA1E27DB96DC";
const maxStringLength = 99;
mp.events.add("BN_Show", (_0x24bea8, _0x1e13ad = false, _0x207248 = -1, _0x319f43 = -1, _0x96cda2 = [77, 77, 77, 200]) => {});
mp.events.add("BN_ShowWithPicture", (_0x1c5a0d, _0x4cafc1, _0x187fd2, _0x3ba390, _0x55bd0a = 0, _0x344c0f = false, _0x46faa3 = -1, _0x2fb6e7 = -1, _0x20e487 = [77, 77, 77, 200]) => {
  if (_0x46faa3 > -1) {
    mp.game.invoke("0x39BBF623FC803EAC", _0x46faa3);
  }
  if (_0x2fb6e7 > -1) {
    mp.game.invoke("0x92F0DA1E27DB96DC", _0x2fb6e7);
  }
  if (_0x344c0f) {
    mp.game.ui.setNotificationFlashColor(_0x20e487[0], _0x20e487[1], _0x20e487[2], _0x20e487[3]);
  }
  mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
  for (let _0x2947c6 = 0, _0x3e3536 = _0x187fd2.length; _0x2947c6 < _0x3e3536; _0x2947c6 += 99) {
    mp.game.ui.addTextComponentSubstringPlayerName(_0x187fd2.substr(_0x2947c6, Math.min(99, _0x187fd2.length - _0x2947c6)));
  }
  mp.game.ui.setNotificationMessage(_0x3ba390, _0x3ba390, _0x344c0f, _0x55bd0a, _0x1c5a0d, _0x4cafc1);
  mp.game.ui.drawNotification(false, true);
  PlayAudioSound("CLICK_BACK", "WEB_NAVIGATION_SOUNDS_PHONE");
});
mp.game.ui.notifications = {
  show: (_0x440ec9, _0x79dc44 = false, _0x1216d6 = -1, _0x3f30ae = -1, _0x3e93d3 = [77, 77, 77, 200]) => ShowNotification(_0x440ec9, _0x3f30ae),
  showWithPicture: (_0xeac9d5, _0x44e9a0, _0xae6367, _0x4a39f6, _0x1c2114 = 0, _0xe73296 = false, _0x1cee51 = -1, _0x51bdaf = -1, _0x45fe28 = [77, 77, 77, 200]) => mp.events.call("BN_ShowWithPicture", _0xeac9d5, _0x44e9a0, _0xae6367, _0x4a39f6, _0x1c2114, _0xe73296, _0x1cee51, _0x51bdaf, _0x45fe28)
};