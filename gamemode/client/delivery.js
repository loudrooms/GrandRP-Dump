const train_poses = [[524.254, -609.34, 24.8, 10], [537.457, -493.99, 24.8, 10], [519.406, -524.933, 24.761, 10], [530.684, -625.363, 24.774, 10], [550.227, -595.172, 24.758, 10], [899.741, -3251.728, 5.893, 10], [956.924, -3270.486, 5.897, 10], [869.382, -3267.36, 5.9, 10], [970.789, -3291.349, 5.9, 10], [985.954, -3281.76, 5.896, 10], [-170.773, 6069.982, 30.79, 10], [-132.702, 6113.638, 30.917, 10], [-60.239, 6201.335, 31.028, 10], [-33.788, 6208.249, 31.052, 10], [16.054, 6241.36, 31.788, 10]];
const trainBlips = [];
function getTrainBlipName() {
  const _0x40f236 = language["Товарный поезд"];
  if (_0x40f236) {
    if (_0x40f236[curr_lang] !== undefined) {
      return _0x40f236[curr_lang];
    } else if (_0x40f236.ru !== undefined) {
      return _0x40f236.ru;
    } else if (_0x40f236.en !== undefined) {
      return _0x40f236.en;
    } else {
      return "Товарный поезд";
    }
  } else {
    return "Товарный поезд";
  }
}
function clearTrainBlips() {
  while (trainBlips.length) {
    const _0x1658b6 = trainBlips.pop();
    try {
      if (_0x1658b6) {
        _0x1658b6.destroy();
      }
    } catch (_0x40fc79) {}
  }
}
function renderTrainBlips() {
  const _0xd8a6e9 = getTrainBlipName();
  for (let _0x3934ee = 0; _0x3934ee < train_poses.length; _0x3934ee++) {
    const _0x1fc084 = mp.blips.new(479, new mp.Vector3(train_poses[_0x3934ee][0], train_poses[_0x3934ee][1], train_poses[_0x3934ee][2]), {
      name: _0xd8a6e9,
      scale: 0.6,
      color: 9,
      drawDistance: 25,
      shortRange: true
    });
    trainBlips.push(_0x1fc084);
  }
}
renderTrainBlips();
for (let e = 0; e < train_poses.length; e++) {
  let t = mp.colshapes.newSphere(train_poses[e][0], train_poses[e][1], train_poses[e][2], train_poses[e][3]);
  t.index = e + 1;
  t.train_shape = true;
}
function getNearestTrainIndex() {
  let _0x17e2fa = -1;
  let _0x2dd2ee = Infinity;
  const _0x233b6b = mp.players.local.position;
  for (let _0x19757b = 0; _0x19757b < train_poses.length; _0x19757b++) {
    const _0x156582 = train_poses[_0x19757b];
    const _0x50761b = Math.sqrt(Math.pow(_0x156582[0] - _0x233b6b.x, 2) + Math.pow(_0x156582[1] - _0x233b6b.y, 2) + Math.pow(_0x156582[2] - _0x233b6b.z, 2));
    if (_0x50761b < _0x2dd2ee) {
      _0x2dd2ee = _0x50761b;
      _0x17e2fa = _0x19757b;
    }
  }
  return _0x17e2fa;
}
global.at_train_shape = 0;
mp.events.add("playerEnterColshape", _0x10e1ac => {
  if (mp.colshapes.exists(_0x10e1ac) && _0x10e1ac.train_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_train_shape = _0x10e1ac.index;
    return;
  }
});
mp.events.add("Client_LanguageChanged", () => {
  clearTrainBlips();
  renderTrainBlips();
});
mp.events.add("playerExitColshape", _0x2e3d03 => {
  if (mp.colshapes.exists(_0x2e3d03) && _0x2e3d03.train_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_train_shape = 0;
    return;
  }
});
mp.events.add("Client_RouteToNearestTrain", () => {
  if (!loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x544115 = getNearestTrainIndex();
  if (_0x544115 === -1) {
    return;
  }
  const _0x237dfc = train_poses[_0x544115];
  SetGPSLocation(_0x237dfc[0], _0x237dfc[1], _0x237dfc[2]);
});
global.TrainInfoOpened = false;