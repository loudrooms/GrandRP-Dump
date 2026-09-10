const weights_training_poses = [{
  position: new mp.Vector3(-1199.124, -1574.427, 4.61),
  rotation: 36.274
}, {
  position: new mp.Vector3(-1196.954, -1572.774, 4.613),
  rotation: 34.752
}, {
  position: new mp.Vector3(-1202.831, -1565.434, 4.611),
  rotation: 213.771
}, {
  position: new mp.Vector3(-1210.267, -1561.506, 4.608),
  rotation: 250.723
}, {
  position: new mp.Vector3(1770.911, 2598.656, 45.798),
  rotation: 177.027
}, {
  position: new mp.Vector3(1767.669, 2598.826, 45.798),
  rotation: 184.104
}, {
  position: new mp.Vector3(1769.807, 2590.548, 45.798),
  rotation: 2.191
}, {
  position: new mp.Vector3(1772.676, 2598.529, 45.798),
  rotation: 188.265
}, {
  position: new mp.Vector3(-441.7, 5989.191, 31.716),
  rotation: 312.912
}, {
  position: new mp.Vector3(-440.036, 5986.317, 31.716),
  rotation: 41.4
}, {
  position: new mp.Vector3(461.003, -1012.878, 37.223),
  rotation: 262.707
}, {
  position: new mp.Vector3(463.751, -1013.526, 37.241),
  rotation: 172.191
}, {
  position: new mp.Vector3(-672.27, -657.38, -59.72),
  rotation: 89.256,
  dim: 50
}, {
  position: new mp.Vector3(-677.153, -654.093, -59.72),
  rotation: 176.603,
  dim: 50
}, {
  position: new mp.Vector3(-680.922, -653.944, -59.72),
  rotation: 176.941,
  dim: 50
}, {
  position: new mp.Vector3(-683.484, -653.989, -59.72),
  rotation: 179.56,
  dim: 50
}, {
  position: new mp.Vector3(-1989.06, 3299.108, 33.037),
  rotation: -119.553
}, {
  position: new mp.Vector3(-1987.746, 3301.266, 33.041),
  rotation: -121.713
}, {
  position: new mp.Vector3(2517.236, -428.62, 88.104),
  rotation: 44.536
}];
for (let e = 0; e < weights_training_poses.length; e++) {
  let t = 0;
  if (weights_training_poses[e].dim) {
    t = weights_training_poses[e].dim;
  }
  mp.colshapes.newSphere(weights_training_poses[e].position.x, weights_training_poses[e].position.y, weights_training_poses[e].position.z, 1, t).is_training_weight = e + 1;
}
const sit_ups_training_poses = [{
  position: new mp.Vector3(-1199.273, -1565.205, 5.02),
  rotation: 299.988
}, {
  position: new mp.Vector3(-1200.992, -1566.787, 5.016),
  rotation: 37.612
}, {
  position: new mp.Vector3(-1203.085, -1568.232, 5.009),
  rotation: 29.968
}, {
  position: new mp.Vector3(1639.982, 2522.724, 45.949),
  rotation: 236.532
}, {
  position: new mp.Vector3(1635.321, 2527.059, 45.954),
  rotation: 230.906
}, {
  position: new mp.Vector3(1637.471, 2530.294, 45.957),
  rotation: 229.202
}, {
  position: new mp.Vector3(1640.25, 2533.16, 45.949),
  rotation: 228.665
}, {
  position: new mp.Vector3(1642.52, 2535.769, 45.953),
  rotation: 227.761
}, {
  position: new mp.Vector3(-671.532, -659.055, -59.13),
  rotation: -92.206,
  dim: 50
}, {
  position: new mp.Vector3(-687.199, -658.668, -58.981),
  rotation: -2.601,
  dim: 50
}, {
  position: new mp.Vector3(-1996.35, 3303.581, 33.449),
  rotation: -120.435
}, {
  position: new mp.Vector3(-1995.274, 3305.834, 33.448),
  rotation: -122.063
}, {
  position: new mp.Vector3(2512.802, -424.334, 88.52),
  rotation: -132.41
}];
for (let e = 0; e < sit_ups_training_poses.length; e++) {
  let t = 0;
  if (sit_ups_training_poses[e].dim) {
    t = sit_ups_training_poses[e].dim;
  }
  mp.colshapes.newSphere(sit_ups_training_poses[e].position.x, sit_ups_training_poses[e].position.y, sit_ups_training_poses[e].position.z, 1, t).is_training_sit_ups = e + 1;
}
const pull_ups_training_poses = [{
  position: new mp.Vector3(-1205.248, -1563.441, 4.61),
  rotation: 182.807
}, {
  position: new mp.Vector3(-1199.633, -1571.645, 4.61),
  rotation: 178.749
}, {
  position: new mp.Vector3(1642.801, 2529.387, 45.565),
  rotation: 0.27
}, {
  position: new mp.Vector3(1648.593, 2531.167, 45.565),
  rotation: 3.26
}, {
  position: new mp.Vector3(-1244.689, -1613.667, 4.142),
  rotation: 5.864
}, {
  position: new mp.Vector3(-1251.118, -1604.458, 4.139),
  rotation: 3.52
}, {
  position: new mp.Vector3(-1252.316, -1602.804, 4.122),
  rotation: 0.597
}, {
  position: new mp.Vector3(-1253.37, -1601.332, 4.146),
  rotation: 5.098
}, {
  position: new mp.Vector3(-1242.714, -1599.895, 4.089),
  rotation: 359.056
}, {
  position: new mp.Vector3(-1226.444, -1598.375, 4.152),
  rotation: 0.628
}, {
  position: new mp.Vector3(1773.744, 2594.94, 45.798),
  rotation: 269.402
}, {
  position: new mp.Vector3(1773.745, 2596.701, 45.798),
  rotation: 268.849
}, {
  position: new mp.Vector3(-1991.968, 3302.098, 33.038),
  rotation: -121.237
}, {
  position: new mp.Vector3(-2000.518, 3307.104, 33.039),
  rotation: -121.358
}, {
  position: new mp.Vector3(2513.652, -429.369, 88.104),
  rotation: 132.709
}, {
  position: new mp.Vector3(2515.216, -430.879, 88.104),
  rotation: 137.814
}];
for (let e = 0; e < pull_ups_training_poses.length; e++) {
  mp.colshapes.newSphere(pull_ups_training_poses[e].position.x, pull_ups_training_poses[e].position.y, pull_ups_training_poses[e].position.z, 1).is_training_pull_ups = e + 1;
}
mp.game.entity.createModelHide(-1205.229, -1563.68, 4.604103, 1, 4179456364, true);
mp.game.entity.createModelHide(-1199.536, -1571.813, 4.603294, 1, 4179456364, true);
mp.game.entity.createModelHide(1644.177, 2528.925, 44.565, 1, 233175726, true);
mp.game.entity.createModelHide(1649.943, 2530.745, 44.565, 1, 233175726, true);
mp.game.entity.createModelHide(-1244.752, -1614.115, 3.101002, 1, 1920863736, true);
mp.game.entity.createModelHide(-1251.193, -1604.916, 3.136002, 1, 1920863736, true);
mp.game.entity.createModelHide(-1252.343, -1603.273, 3.122002, 1, 1920863736, true);
mp.game.entity.createModelHide(-1253.38, -1601.793, 3.146, 1, 1920863736, true);
mp.game.entity.createModelHide(-1241.416, -1600.352, 3.106998, 1, 3805441695, true);
mp.game.entity.createModelHide(-1225.069, -1598.875, 3.157001, 1, 3805441695, true);
let pull_up_obj = [];
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_muscle_bench_05"), new mp.Vector3(-1205.229, -1563.68, 4.604103), {
  rotation: new mp.Vector3(0, 0.9537169, 0.300706)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_muscle_bench_05"), new mp.Vector3(-1199.536, -1571.813, 4.603294), {
  rotation: new mp.Vector3(0, -0.3007059, 0.9537169)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_pris_bars_01"), new mp.Vector3(1644.177, 2528.925, 44.565), {
  rotation: new mp.Vector3(0, -0.4226179, 0.9063079)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_pris_bars_01"), new mp.Vector3(1649.943, 2530.745, 44.565), {
  rotation: new mp.Vector3(0, -0.4226179, 0.9063079)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_02"), new mp.Vector3(-1244.752, -1614.115, 3.101002), {
  rotation: new mp.Vector3(0, -0.3007059, 0.9537169)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_02"), new mp.Vector3(-1251.193, -1604.916, 3.136002), {
  rotation: new mp.Vector3(0, -0.3007059, 0.9537169)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_02"), new mp.Vector3(-1252.343, -1603.273, 3.122002), {
  rotation: new mp.Vector3(0, -0.3007059, 0.9537169)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_02"), new mp.Vector3(-1253.38, -1601.793, 3.146), {
  rotation: new mp.Vector3(0, -0.3007059, 0.9537169)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_01"), new mp.Vector3(-1241.416, -1600.352, 3.106998), {
  rotation: new mp.Vector3(0, 0.9537169, 0.300706)
}));
pull_up_obj.push(mp.objects.new(mp.game.joaat("prop_beach_bars_01"), new mp.Vector3(-1225.069, -1598.875, 3.157001), {
  rotation: new mp.Vector3(0, 0.7071068, -0.7071068)
}));
global.at_weight_training = 0;
global.at_training_type = 0;
mp.events.add("playerEnterColshape", _0x789111 => mp.colshapes.exists(_0x789111) && _0x789111.is_training_weight ? (at_weight_training = _0x789111.is_training_weight, at_training_type = 1, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : mp.colshapes.exists(_0x789111) && _0x789111.is_training_sit_ups ? (at_weight_training = _0x789111.is_training_sit_ups, at_training_type = 2, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : mp.colshapes.exists(_0x789111) && _0x789111.is_training_pull_ups ? (at_weight_training = _0x789111.is_training_pull_ups, at_training_type = 3, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : undefined);
mp.events.add("playerExitColshape", _0x257e91 => mp.colshapes.exists(_0x257e91) && _0x257e91.is_training_weight || mp.colshapes.exists(_0x257e91) && _0x257e91.is_training_sit_ups || mp.colshapes.exists(_0x257e91) && _0x257e91.is_training_pull_ups ? (at_weight_training = 0, at_training_type = 0, void main_browser.execute("APPS.state.hud.interact = false;")) : undefined);
global.in_training_already = false;
let training_type = 0;
function showTrainingProgressBar(_0x2f3d8e) {
  const _0x5cb88f = {
    progress: 0,
    delay: 100,
    duration: parseInt(_0x2f3d8e / 1000),
    isIncrease: true,
    title: language.Тренировка[curr_lang],
    displayAt: "center"
  };
  main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x5cb88f) + ";");
}
function clearTrainingProgressBar() {
  main_browser.execute("APPS.state.hud.progressBar && (APPS.state.hud.progressBar.displayAt = null);");
}
let can_do_exercise = false;
let training_timeout = null;
mp.events.add("Client_EnterTrainingCorrectly", (_0x315d52, _0x558b3a) => {
  if (_0x315d52 == 1) {
    training_type = 1;
    localplayer.freezePosition(true);
    localplayer.position = weights_training_poses[_0x558b3a - 1].position;
    localplayer.setHeading(weights_training_poses[_0x558b3a - 1].rotation);
    main_browser.execute("APPS.state.hud.interact = false;");
    at_weight_training = 0;
    in_training_already = true;
    can_do_exercise = false;
    HintShow(language["Нажмите E, чтобы начать следующий подход"][curr_lang]);
    showTrainingProgressBar(10000);
    training_timeout = setTimeout(() => {
      training_timeout = null;
      clearTrainingProgressBar();
      can_do_exercise = true;
      main_browser.execute("APPS.state.hud.interact = true;");
      mp.events.callRemote("Server_TrainStrenght");
    }, 10000);
  } else if (_0x315d52 == 2) {
    training_type = 2;
    localplayer.freezePosition(true);
    localplayer.position = sit_ups_training_poses[_0x558b3a - 1].position;
    localplayer.setHeading(sit_ups_training_poses[_0x558b3a - 1].rotation);
    main_browser.execute("APPS.state.hud.interact = false;");
    at_weight_training = 0;
    in_training_already = true;
    can_do_exercise = false;
    HintShow(language["Нажмите E, чтобы начать следующий подход"][curr_lang]);
    showTrainingProgressBar(15000);
    training_timeout = setTimeout(() => {
      training_timeout = null;
      clearTrainingProgressBar();
      can_do_exercise = true;
      main_browser.execute("APPS.state.hud.interact = true;");
      mp.events.callRemote("Server_TrainStrenght");
    }, 15000);
  } else if (_0x315d52 == 3) {
    if (_0x558b3a < pull_up_obj.length) {
      pull_up_obj[_0x558b3a - 1].setCollision(false, false);
    }
    training_type = 3;
    localplayer.freezePosition(true);
    localplayer.position = pull_ups_training_poses[_0x558b3a - 1].position;
    localplayer.setHeading(pull_ups_training_poses[_0x558b3a - 1].rotation);
    main_browser.execute("APPS.state.hud.interact = false;");
    at_weight_training = 0;
    in_training_already = true;
    can_do_exercise = false;
    HintShow(language["Нажмите E, чтобы начать следующий подход"][curr_lang]);
    showTrainingProgressBar(4700);
    training_timeout = setTimeout(() => {
      training_timeout = null;
      clearTrainingProgressBar();
      can_do_exercise = true;
      main_browser.execute("APPS.state.hud.interact = true;");
      mp.events.callRemote("Server_TrainStrenght");
    }, 4700);
  }
});
global.TrainingNextExercise = function () {
  if (!training_type || !can_do_exercise || !in_training_already) {
    return;
  }
  mp.events.callRemote("Server_DoTrainingSyncAnim");
  can_do_exercise = false;
  main_browser.execute("APPS.state.hud.interact = false;");
  let _0x1c1a97 = 10000;
  if (training_type == 2) {
    _0x1c1a97 = 15000;
  } else if (training_type == 3) {
    _0x1c1a97 = 4700;
  }
  showTrainingProgressBar(_0x1c1a97);
  training_timeout = setTimeout(() => {
    training_timeout = null;
    clearTrainingProgressBar();
    can_do_exercise = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    mp.events.callRemote("Server_TrainStrenght");
  }, _0x1c1a97);
};
global.CloseTrainingCenter = function () {
  if (in_training_already) {
    if (training_timeout != null) {
      clearTimeout(training_timeout);
      training_timeout = null;
    }
    clearTrainingProgressBar();
    if (training_type == 3) {
      pull_up_obj.forEach((_0x50734e, _0x3fd718) => {
        if (_0x50734e && mp.objects.exists(_0x50734e)) {
          _0x50734e.setCollision(true, true);
        }
      });
    }
    in_training_already = false;
    HintClose();
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.events.callRemote("Server_ExitTrainingCenter");
  }
};
mp.events.add("Client_CloseTraining", () => {
  CloseTrainingCenter();
});
const gym_machines = [{
  type: 4,
  number: 1,
  model: "vision_gymspeedbagwall",
  position: new mp.Vector3(-1894.290283203125, -705.184326171875, -99.4039535522461),
  heading: -89.933,
  interactionPosition: new mp.Vector3(-1894.282, -704.247, -99.799),
  interactionRadius: 1.2,
  pedPosition: new mp.Vector3(-1894.249, -704.081, -99.799),
  pedHeading: -179.691,
  objectAnimDict: "grand@vision_gymspeedbagwall",
  objectAnimName: "vision_gymspeedbagwall@skel_clip_0",
  pedAnimDict: "grand@gym_ped",
  pedAnimName: "punch",
  trainingDuration: 12800
}, {
  type: 5,
  number: 1,
  model: "vision_gymspeedbag",
  position: new mp.Vector3(-1899.5577392578125, -703.263916015625, -100.8),
  heading: 0,
  interactionPosition: new mp.Vector3(-1899.582, -702.517, -99.763),
  interactionRadius: 1.2,
  pedPosition: new mp.Vector3(-1899.375, -702.603, -99.763),
  pedHeading: 163.19,
  objectAnimDict: "grand@vision_gymspeedbag",
  objectAnimName: "vision_gymspeedbag@skel_clip_0",
  pedAnimDict: "grand@gym_ped",
  pedAnimName: "gymspeedbag_ped",
  trainingDuration: 12000
}, {
  type: 6,
  number: 1,
  model: "vision_gymrowpull",
  position: new mp.Vector3(-1900.1533203125, -695.6776733398438, -100.8),
  heading: -179.53408813476562,
  interactionRadius: 1.5,
  attach: {
    bone: -1,
    posX: 0,
    posY: 0.4,
    posZ: 0.95,
    rotX: 0,
    rotY: 0,
    rotZ: 180
  },
  objectAnimDict: "grand@vision_gymrowpull",
  objectAnimName: "vision_gymrowpull@skel_clip_0",
  pedAnimDict: "grand@gym_ped",
  pedAnimName: "gymrowpull_ped",
  exitPosition: new mp.Vector3(-1899.141, -696.014, -99.763),
  trainingDuration: 11500
}, {
  type: 7,
  number: 1,
  model: "vision_gymlatpull",
  position: new mp.Vector3(-1897.8271484375, -695.0966186523438, -100.8),
  heading: 89.9501953125,
  interactionRadius: 1.5,
  attach: {
    bone: -1,
    posX: -0.68,
    posY: 0,
    posZ: 0.97,
    rotX: 0,
    rotY: 0,
    rotZ: 90
  },
  objectAnimDict: "grand@vision_gymlatpull",
  objectAnimName: "vision_gymlatpull@skel_clip_0",
  objectAnimSpeed: 0.99,
  pedAnimDict: "grand@gym_ped",
  pedAnimName: "gym_latpull",
  exitPosition: new mp.Vector3(-1896.844, -695.834, -99.799),
  trainingDuration: 11800
}, {
  type: 8,
  number: 1,
  model: "vision_gymbike",
  position: new mp.Vector3(-1893.5380859375, -700.9244995117188, -100.8),
  heading: -87.77133178710938,
  interactionRadius: 1.5,
  attach: {
    bone: -1,
    posX: 0,
    posY: 0.15,
    posZ: 1,
    rotX: 0,
    rotY: 0,
    rotZ: 180
  },
  objectAnimDict: "grand@vision_gymbike",
  objectAnimName: "vision_gymbike@skel_clip_0",
  pedAnimDict: "grand@gym_ped",
  pedAnimName: "gym_bike",
  exitPosition: new mp.Vector3(-1893.338, -701.746, -99.799),
  trainingDuration: 9500
}];
let gymInArea = false;
let gymAreaDimension = null;
let gymNearestMachine = null;
let gymTrainingTimeout = null;
let gymCurrentNumber = 0;
let gymSpawnId = 0;
const gymObjects = new Map();
const gymObjectLoops = new Map();
const gymSessions = new Map();
const gymInteractShapes = [];
const gym_area_shape = mp.colshapes.newSphere(-1899.825, -698.89, -99.797, 20, -1);
function gymGetConfig(_0x597abf, _0x5b8571) {
  for (let _0xb640ee = 0; _0xb640ee < gym_machines.length; _0xb640ee++) {
    if (gym_machines[_0xb640ee].type == _0x597abf && gym_machines[_0xb640ee].number == _0x5b8571) {
      return gym_machines[_0xb640ee];
    }
  }
  return null;
}
function gymGetInteractPos(_0x31214d) {
  return _0x31214d.interactionPosition || _0x31214d.pedPosition || _0x31214d.position;
}
async function gymPlayObjectAnim(_0x186609, _0x3e1cab, _0x32bb56) {
  try {
    const _0x501e39 = _0x186609.type + ":" + _0x186609.number;
    if (gymObjectLoops.get(_0x501e39) !== _0x32bb56 || !gymInArea) {
      return;
    }
    const _0x464ae6 = gymObjects.get(_0x501e39);
    if (!_0x464ae6 || !mp.objects.exists(_0x464ae6)) {
      return;
    }
    if (!mp.game.streaming.hasAnimDictLoaded(_0x186609.objectAnimDict)) {
      for (mp.game.streaming.requestAnimDict(_0x186609.objectAnimDict); !mp.game.streaming.hasAnimDictLoaded(_0x186609.objectAnimDict);) {
        await mp.game.waitAsync(10);
      }
    }
    if (gymObjectLoops.get(_0x501e39) !== _0x32bb56 || !gymInArea) {
      return;
    }
    if (!mp.objects.exists(_0x464ae6)) {
      return;
    }
    mp.game.invoke("0x7FB218262B810701", _0x464ae6.handle, _0x186609.objectAnimName, _0x186609.objectAnimDict, 8.0001, 1, true, false, 0, 0);
    await mp.game.waitAsync(100);
    if (gymObjectLoops.get(_0x501e39) !== _0x32bb56 || !gymInArea) {
      return;
    }
    if (!mp.objects.exists(_0x464ae6)) {
      return;
    }
    const _0x19afbb = _0x186609.objectAnimSpeed || 0.98;
    mp.game.entity.setAnimSpeed(_0x464ae6.handle, _0x186609.objectAnimDict, _0x186609.objectAnimName, _0x19afbb);
  } catch (_0x284321) {
    mp.gui.chat.push("[gymPlayObjectAnim] " + _0x284321);
  }
}
function gymStartObjectLoop(_0x1e1f35, _0x5621a4) {
  const _0x92cd1e = _0x1e1f35.type + ":" + _0x1e1f35.number;
  const _0x25e43f = (gymObjectLoops.get(_0x92cd1e) || 0) + 1;
  gymObjectLoops.set(_0x92cd1e, _0x25e43f);
  gymPlayObjectAnim(_0x1e1f35, _0x5621a4, _0x25e43f);
}
function gymStopObjectLoop(_0x4f5870, _0x492043) {
  const _0x149068 = _0x4f5870 + ":" + _0x492043;
  gymObjectLoops.delete(_0x149068);
  const _0xc27272 = gymObjects.get(_0x149068);
  if (_0xc27272 && mp.objects.exists(_0xc27272)) {
    const _0x1b4dfd = gymGetConfig(_0x4f5870, _0x492043);
    if (_0x1b4dfd) {
      mp.game.entity.setAnimCurrentTime(_0xc27272.handle, _0x1b4dfd.objectAnimDict, _0x1b4dfd.objectAnimName, 0);
      mp.game.entity.setAnimSpeed(_0xc27272.handle, _0x1b4dfd.objectAnimDict, _0x1b4dfd.objectAnimName, 0);
    }
    mp.game.entity.freezePosition(_0xc27272.handle, true);
  }
}
function gymAttachPlayer(_0x28dbaa, _0x4c5632) {
  if (!_0x4c5632.attach) {
    return;
  }
  const _0x1c990c = _0x28dbaa == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x28dbaa);
  const _0x191a74 = gymObjects.get(_0x4c5632.type + ":" + _0x4c5632.number);
  if (_0x1c990c && _0x1c990c.handle !== 0 && _0x191a74 && mp.objects.exists(_0x191a74)) {
    _0x1c990c.attachTo(_0x191a74.handle, _0x4c5632.attach.bone, _0x4c5632.attach.posX, _0x4c5632.attach.posY, _0x4c5632.attach.posZ, _0x4c5632.attach.rotX, _0x4c5632.attach.rotY, _0x4c5632.attach.rotZ, false, false, false, false, 2, true);
    if (_0x28dbaa == localplayer.remoteId) {
      _0x1c990c.setCollision(false, false);
    }
  }
}
function gymDetachPlayer(_0xb9d8cb) {
  const _0x4696b9 = _0xb9d8cb == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0xb9d8cb);
  if (_0x4696b9 && _0x4696b9.handle !== 0) {
    _0x4696b9.detach(true, true);
    if (_0xb9d8cb == localplayer.remoteId) {
      _0x4696b9.setCollision(true, true);
    }
  }
}
async function gymApplySession(_0x56233e, _0xee795d, _0x20b605, _0x3e917f) {
  try {
    const _0x38cb34 = gymGetConfig(_0xee795d, _0x20b605);
    if (!_0x38cb34) {
      return;
    }
    gymSessions.set(_0x56233e, {
      type: _0xee795d,
      number: _0x20b605,
      startedAt: _0x3e917f
    });
    gymAttachPlayer(_0x56233e, _0x38cb34);
    await mp.game.waitAsync(200);
    if (!gymSessions.has(_0x56233e)) {
      return;
    }
    await gymPlayPedAnim(_0x56233e, _0x38cb34);
    if (!gymSessions.has(_0x56233e)) {
      return;
    }
    gymStartObjectLoop(_0x38cb34, _0x3e917f);
    await mp.game.waitAsync(100);
    if (!gymSessions.has(_0x56233e)) {
      return;
    }
    const _0x5cd60e = _0x56233e == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x56233e);
    if (_0x5cd60e && _0x5cd60e.handle !== 0 && mp.game.entity.isAnEntity(_0x5cd60e.handle)) {
      _0x5cd60e.setAnimCurrentTime(_0x38cb34.pedAnimDict, _0x38cb34.pedAnimName, 0);
    }
    const _0x3ae34b = gymObjects.get(_0x38cb34.type + ":" + _0x38cb34.number);
    if (_0x3ae34b && mp.objects.exists(_0x3ae34b) && mp.game.entity.isAnEntity(_0x3ae34b.handle)) {
      mp.game.entity.setAnimCurrentTime(_0x3ae34b.handle, _0x38cb34.objectAnimDict, _0x38cb34.objectAnimName, 0);
    }
  } catch (_0x352109) {
    mp.gui.chat.push("[gymApplySession] " + _0x352109);
  }
}
async function gymPlayPedAnim(_0x411283, _0xbc5c69) {
  try {
    let _0x233251 = _0x411283 == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x411283);
    if (!_0x233251 || _0x233251.handle === 0) {
      return;
    }
    if (!mp.game.streaming.hasAnimDictLoaded(_0xbc5c69.pedAnimDict)) {
      for (mp.game.streaming.requestAnimDict(_0xbc5c69.pedAnimDict); !mp.game.streaming.hasAnimDictLoaded(_0xbc5c69.pedAnimDict);) {
        await mp.game.waitAsync(10);
      }
    }
    if (!gymSessions.has(_0x411283)) {
      return;
    }
    _0x233251 = _0x411283 == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x411283);
    if (!_0x233251 || _0x233251.handle === 0) {
      return;
    }
    mp.game.task.playAnim(_0x233251.handle, _0xbc5c69.pedAnimDict, _0xbc5c69.pedAnimName, 8, -8, -1, 1, 0, false, false, false);
  } catch (_0x479b44) {
    mp.gui.chat.push("[gymPlayPedAnim] " + _0x479b44);
  }
}
function gymRemoveSession(_0x3358fa) {
  const _0xfa0ca0 = gymSessions.get(_0x3358fa);
  if (!_0xfa0ca0) {
    return;
  }
  const _0x3968c2 = gymGetConfig(_0xfa0ca0.type, _0xfa0ca0.number);
  gymStopObjectLoop(_0xfa0ca0.type, _0xfa0ca0.number);
  gymDetachPlayer(_0x3358fa);
  if (_0x3968c2) {
    const _0x4a1bca = _0x3358fa == localplayer.remoteId ? localplayer : mp.players.atRemoteId(_0x3358fa);
    if (_0x4a1bca && _0x4a1bca.handle !== 0) {
      _0x4a1bca.clearTasks();
      _0x4a1bca.position = _0x3968c2.exitPosition || _0x4a1bca.position;
    }
  }
  gymSessions.delete(_0x3358fa);
}
async function gymSpawnObjects() {
  try {
    const _0x3c8372 = ++gymSpawnId;
    await mp.game.waitAsync(1000);
    for (let _0x141b41 = 0; _0x141b41 < gym_machines.length; _0x141b41++) {
      const _0x2baa57 = gym_machines[_0x141b41];
      const _0x3627c1 = _0x2baa57.type + ":" + _0x2baa57.number;
      if (gymObjects.has(_0x3627c1)) {
        continue;
      }
      const _0x255ae8 = mp.game.joaat(_0x2baa57.model);
      if (!mp.game.streaming.hasModelLoaded(_0x255ae8)) {
        for (mp.game.streaming.requestModel(_0x255ae8); !mp.game.streaming.hasModelLoaded(_0x255ae8);) {
          await mp.game.waitAsync(10);
        }
      }
      if (_0x3c8372 != gymSpawnId || !gymInArea) {
        return;
      }
      let _0x1858de = null;
      let _0x174e74 = false;
      for (let _0x4db9e5 = 0; _0x4db9e5 < 3 && !_0x174e74; _0x4db9e5++) {
        if (_0x3c8372 != gymSpawnId || !gymInArea) {
          return;
        }
        if (_0x1858de && mp.objects.exists(_0x1858de)) {
          _0x1858de.destroy();
        }
        _0x1858de = mp.objects.new(_0x255ae8, _0x2baa57.position, {
          rotation: new mp.Vector3(0, 0, 0),
          alpha: 255,
          dimension: localplayer.dimension
        });
        _0x174e74 = await new Promise(_0x3a2c6b => {
          let _0x5883a7 = 0;
          const _0x40ce3e = setInterval(() => {
            if (_0x1858de && _0x1858de.handle && mp.game.entity.isAnEntity(_0x1858de.handle)) {
              clearInterval(_0x40ce3e);
              _0x3a2c6b(true);
              return;
            }
            if (++_0x5883a7 > 500) {
              clearInterval(_0x40ce3e);
              _0x3a2c6b(false);
            }
          }, 10);
        });
      }
      if (_0x3c8372 != gymSpawnId || !gymInArea) {
        if (_0x1858de && mp.objects.exists(_0x1858de)) {
          _0x1858de.destroy();
        }
        return;
      }
      if (_0x174e74 && _0x1858de && mp.game.entity.isAnEntity(_0x1858de.handle)) {
        gymObjects.set(_0x3627c1, _0x1858de);
        mp.game.entity.setHeading(_0x1858de.handle, _0x2baa57.heading);
        mp.game.entity.setDynamic(_0x1858de.handle, false);
        mp.game.entity.setInvincible(_0x1858de.handle, true);
        mp.game.entity.freezePosition(_0x1858de.handle, true);
      } else if (_0x1858de && mp.objects.exists(_0x1858de)) {
        _0x1858de.destroy();
      }
    }
    if (_0x3c8372 == gymSpawnId && gymInArea) {
      gymSessions.forEach((_0x23c881, _0x177473) => gymApplySession(_0x177473, _0x23c881.type, _0x23c881.number, _0x23c881.startedAt));
    }
  } catch (_0x316321) {
    mp.gui.chat.push("[gymSpawnObjects] " + _0x316321);
  }
}
function gymDestroyObjects() {
  gymSpawnId++;
  gymObjects.forEach(_0x1b63c9 => {
    if (_0x1b63c9 && mp.objects.exists(_0x1b63c9)) {
      _0x1b63c9.destroy();
    }
  });
  gymObjects.clear();
  gymObjectLoops.clear();
}
function gymClearInteract(_0x2e076d = false) {
  if (_0x2e076d || gymNearestMachine) {
    gymNearestMachine = null;
    if (at_training_type >= 4 && at_training_type <= 8) {
      at_weight_training = 0;
      at_training_type = 0;
    }
    if (!!_0x2e076d || !in_training_already || !(training_type >= 4) || !(training_type <= 8)) {
      main_browser.execute("APPS.state.hud.interact = false;");
    }
  }
}
function gymEnterArea() {
  if (!gymInArea || gymAreaDimension != localplayer.dimension) {
    if (gymInArea) {
      gymLeaveArea(false);
    }
    gymInArea = true;
    gymAreaDimension = localplayer.dimension;
    for (let _0x2218ba = 0; _0x2218ba < gym_machines.length; _0x2218ba++) {
      const _0x37b930 = gym_machines[_0x2218ba];
      const _0x2787d4 = gymGetInteractPos(_0x37b930);
      const _0x32c935 = mp.colshapes.newSphere(_0x2787d4.x, _0x2787d4.y, _0x2787d4.z, _0x37b930.interactionRadius, localplayer.dimension);
      _0x32c935.gym_machine_type = _0x37b930.type;
      _0x32c935.gym_machine_number = _0x37b930.number;
      gymInteractShapes.push(_0x32c935);
    }
    gymSpawnObjects();
    mp.events.callRemote("Server_RequestGymTrainingData");
  }
}
function gymLeaveArea(_0x124d6f = true) {
  if (gymInArea) {
    for (in_training_already && training_type >= 4 && training_type <= 8 && gymCloseTraining(_0x124d6f); gymInteractShapes.length > 0;) {
      const _0x599d10 = gymInteractShapes.pop();
      if (_0x599d10 && mp.colshapes.exists(_0x599d10)) {
        _0x599d10.destroy();
      }
    }
    gymClearInteract(true);
    gymSessions.forEach((_0x3f73d1, _0xaf8cf6) => gymDetachPlayer(_0xaf8cf6));
    gymSessions.clear();
    gymDestroyObjects();
    gymInArea = false;
    gymAreaDimension = null;
    if (_0x124d6f) {
      mp.events.callRemote("Server_LeaveGymTrainingArea");
    }
  }
}
function gymCloseTraining(_0x29e1c6 = true) {
  if (in_training_already && training_type >= 4 && training_type <= 8) {
    if (gymTrainingTimeout) {
      clearTimeout(gymTrainingTimeout);
      gymTrainingTimeout = null;
    }
    clearTrainingProgressBar();
    gymRemoveSession(localplayer.remoteId);
    in_training_already = false;
    training_type = 0;
    gymCurrentNumber = 0;
    can_do_exercise = false;
    HintClose();
    localplayer.freezePosition(false);
    localplayer.setCollision(true, true);
    is_freezed = false;
    gymClearInteract(true);
    if (_0x29e1c6) {
      mp.events.callRemote("Server_ExitTrainingCenter");
    }
  }
}
gym_area_shape.is_gym_area = true;
mp.events.add("Client_GymEnterConfirm", (_0x5c4a99, _0x4bdc28, _0x4bcb5f) => {
  if (gymTrainingTimeout != null) {
    mp.gui.chat.push("Error: Training timeout is not null on GymEnterConfirm, this should not happen");
    return gymTrainingTimeout = null;
  }
  const _0x53bd53 = gymGetConfig(_0x5c4a99, _0x4bdc28);
  if (_0x53bd53) {
    training_type = _0x5c4a99;
    gymCurrentNumber = _0x4bdc28;
    in_training_already = true;
    can_do_exercise = false;
    localplayer.freezePosition(true);
    if (_0x53bd53.attach) {
      localplayer.setCollision(false, false);
    } else {
      localplayer.setCollision(true, true);
      localplayer.position = _0x53bd53.pedPosition || gymGetInteractPos(_0x53bd53);
      localplayer.setHeading(_0x53bd53.pedHeading ?? _0x53bd53.heading);
    }
    gymApplySession(localplayer.remoteId, _0x5c4a99, _0x4bdc28, _0x4bcb5f);
    gymClearInteract(true);
    showTrainingProgressBar(_0x53bd53.trainingDuration);
    gymTrainingTimeout = setTimeout(() => {
      gymTrainingTimeout = null;
      if (gymInArea && in_training_already && training_type === _0x5c4a99 && gymCurrentNumber === _0x4bdc28) {
        clearTrainingProgressBar();
        can_do_exercise = true;
        gymStopObjectLoop(_0x5c4a99, _0x4bdc28);
        localplayer.setAnimCurrentTime(_0x53bd53.pedAnimDict, _0x53bd53.pedAnimName, 0);
        localplayer.setAnimSpeed(_0x53bd53.pedAnimDict, _0x53bd53.pedAnimName, 0);
        main_browser.execute("APPS.state.hud.interact = true;");
        mp.events.callRemote("Server_TrainStrenght");
        HintShow(language["Нажмите E, чтобы начать следующий подход"][curr_lang]);
      }
    }, _0x53bd53.trainingDuration);
  }
});
mp.events.add("Client_GymSession", (_0x1b0766, _0x25ea0a, _0x17737c, _0x398513) => {
  if (_0x1b0766 != localplayer.remoteId && gymInArea) {
    gymApplySession(_0x1b0766, _0x25ea0a, _0x17737c, _0x398513);
  }
});
mp.events.add("Client_GymSessionStop", _0x2abf8a => {
  if (_0x2abf8a != localplayer.remoteId) {
    gymRemoveSession(_0x2abf8a);
  }
});
mp.events.add("Client_GymTrainingInit", _0x319acd => {
  if (!gymInArea) {
    return;
  }
  let _0x4b5716 = [];
  try {
    _0x4b5716 = JSON.parse(_0x319acd);
  } catch (_0x4296a3) {
    _0x4b5716 = [];
  }
  gymSessions.clear();
  for (let _0x4de293 = 0; _0x4de293 < _0x4b5716.length; _0x4de293++) {
    const _0x27ff6a = _0x4b5716[_0x4de293];
    if (_0x27ff6a.playerId != localplayer.remoteId) {
      gymApplySession(_0x27ff6a.playerId, _0x27ff6a.type, _0x27ff6a.number, _0x27ff6a.startedAt);
    }
  }
});
mp.events.add("playerEnterColshape", _0x566a84 => {
  if (mp.colshapes.exists(_0x566a84) && _0x566a84.is_gym_area) {
    gymEnterArea();
  } else if (gymInArea && !in_training_already && mp.colshapes.exists(_0x566a84) && _0x566a84.gym_machine_type) {
    const _0x298513 = gymGetConfig(_0x566a84.gym_machine_type, _0x566a84.gym_machine_number);
    if (_0x298513) {
      gymNearestMachine = _0x298513;
      at_weight_training = _0x298513.number;
      at_training_type = _0x298513.type;
      main_browser.execute("APPS.state.hud.interact = true;");
      PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    }
  }
});
mp.events.add("playerExitColshape", _0x522911 => {
  if (mp.colshapes.exists(_0x522911) && _0x522911.is_gym_area) {
    gymLeaveArea(true);
  } else if (mp.colshapes.exists(_0x522911) && _0x522911.gym_machine_type) {
    gymClearInteract();
  }
});
mp.events.add("Client_ForceLeaveGymTrainingArea", () => {
  gymLeaveArea(true);
});
const _prevTrainingNextExercise = global.TrainingNextExercise;
global.TrainingNextExercise = function () {
  if (!(training_type >= 4) || !(training_type <= 8)) {
    _prevTrainingNextExercise();
    return;
  }
  if (!can_do_exercise || !in_training_already) {
    return;
  }
  const _0x1605a3 = gymGetConfig(training_type, gymCurrentNumber);
  if (!_0x1605a3) {
    return;
  }
  can_do_exercise = false;
  main_browser.execute("APPS.state.hud.interact = false;");
  const _0x193c9e = Date.now();
  const _0x80ca23 = training_type;
  const _0x3ea768 = gymCurrentNumber;
  mp.events.callRemote("Server_DoTrainingSyncAnim");
  gymApplySession(localplayer.remoteId, training_type, gymCurrentNumber, _0x193c9e);
  showTrainingProgressBar(_0x1605a3.trainingDuration);
  gymTrainingTimeout = setTimeout(() => {
    gymTrainingTimeout = null;
    if (gymInArea && in_training_already && training_type === _0x80ca23 && gymCurrentNumber === _0x3ea768) {
      clearTrainingProgressBar();
      can_do_exercise = true;
      gymStopObjectLoop(training_type, gymCurrentNumber);
      localplayer.setAnimCurrentTime(_0x1605a3.pedAnimDict, _0x1605a3.pedAnimName, 0);
      localplayer.setAnimSpeed(_0x1605a3.pedAnimDict, _0x1605a3.pedAnimName, 0);
      main_browser.execute("APPS.state.hud.interact = true;");
      mp.events.callRemote("Server_TrainStrenght");
    }
  }, _0x1605a3.trainingDuration);
};
const _prevCloseTrainingCenter = global.CloseTrainingCenter;
global.CloseTrainingCenter = function () {
  if (training_type >= 4 && training_type <= 8) {
    gymCloseTraining(true);
  } else {
    _prevCloseTrainingCenter();
  }
};