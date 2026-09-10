let currentcheckpoint;
let lic_blip;
let aw_colshape = null;
let lastAutoSchoolCheckIndex = 0;
mp.events.add("SchoolCheckPointCreate", (_0x71c8e8, _0x7f5a98, _0x399bc0, _0x5a2a98, _0x943779, _0x1c4979, _0x413e90) => {
  lastAutoSchoolCheckIndex = _0x71c8e8;
  currentcheckpoint = _0x943779 == 0 && _0x1c4979 == 0 && _0x413e90 == 0 ? mp.checkpoints.new(4, new mp.Vector3(_0x7f5a98, _0x399bc0, _0x5a2a98 - 1), 5, {
    direction: new mp.Vector3(_0x943779, _0x1c4979, _0x413e90),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: localplayer.dimension
  }) : _0x943779 == 1 && _0x1c4979 == 0 && _0x413e90 == 0 ? mp.checkpoints.new(3, new mp.Vector3(_0x7f5a98, _0x399bc0, _0x5a2a98 - 1), 5, {
    direction: new mp.Vector3(_0x943779, _0x1c4979, _0x413e90),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: localplayer.dimension
  }) : mp.checkpoints.new(2, new mp.Vector3(_0x7f5a98, _0x399bc0, _0x5a2a98 - 1), 5, {
    direction: new mp.Vector3(_0x943779, _0x1c4979, _0x413e90),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: localplayer.dimension
  });
  if (aw_colshape) {
    aw_colshape.destroy();
    aw_colshape = null;
  }
  aw_colshape = mp.colshapes.newSphere(_0x7f5a98, _0x399bc0, _0x5a2a98, 3, localplayer.dimension);
  aw_colshape.is_aw = true;
  if (lic_blip) {
    lic_blip.destroy();
    lic_blip = null;
  }
  lic_blip = mp.blips.new(1, new mp.Vector3(_0x7f5a98, _0x399bc0, _0x5a2a98), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: localplayer.dimension
  });
  lic_blip.setRoute(true);
});
mp.events.add("SchoolCheckPointCreateHelicopter", (_0x28e38a, _0x4b9841, _0xdeb44a, _0x37aa28, _0x1ceefb, _0x5d4055) => {
  currentcheckpoint = _0x37aa28 == 0 && _0x1ceefb == 0 && _0x5d4055 == 0 ? mp.checkpoints.new(14, new mp.Vector3(_0x28e38a, _0x4b9841, _0xdeb44a), 15, {
    direction: new mp.Vector3(_0x37aa28, _0x1ceefb, _0x5d4055),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: 0
  }) : mp.checkpoints.new(12, new mp.Vector3(_0x28e38a, _0x4b9841, _0xdeb44a), 15, {
    direction: new mp.Vector3(_0x37aa28, _0x1ceefb, _0x5d4055),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: 0
  });
  if (aw_colshape) {
    aw_colshape.destroy();
    aw_colshape = null;
  }
  aw_colshape = mp.colshapes.newSphere(_0x28e38a, _0x4b9841, _0xdeb44a, 9);
  aw_colshape.is_aw = true;
  if (lic_blip) {
    lic_blip.destroy();
    lic_blip = null;
  }
  lic_blip = mp.blips.new(1, new mp.Vector3(_0x28e38a, _0x4b9841, _0xdeb44a), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: 0
  });
  lic_blip.setRoute(true);
});
mp.events.add("SchoolCheckPointCreateBoat", (_0x475455, _0x2e72d8, _0x2df99b, _0x5d4b4a, _0x2d0690, _0x12b13b) => {
  currentcheckpoint = _0x5d4b4a == 0 && _0x2d0690 == 0 && _0x12b13b == 0 ? mp.checkpoints.new(9, new mp.Vector3(_0x475455, _0x2e72d8, _0x2df99b + 3), 22, {
    direction: new mp.Vector3(_0x5d4b4a, _0x2d0690, _0x12b13b),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: 0
  }) : mp.checkpoints.new(7, new mp.Vector3(_0x475455, _0x2e72d8, _0x2df99b + 3), 22, {
    direction: new mp.Vector3(_0x5d4b4a, _0x2d0690, _0x12b13b),
    color: [0, 160, 255, 255],
    visible: true,
    dimension: 0
  });
  if (aw_colshape) {
    aw_colshape.destroy();
    aw_colshape = null;
  }
  aw_colshape = mp.colshapes.newSphere(_0x475455, _0x2e72d8, _0x2df99b, 4.5);
  aw_colshape.is_aw = true;
  if (lic_blip) {
    lic_blip.destroy();
    lic_blip = null;
  }
  lic_blip = mp.blips.new(1, new mp.Vector3(_0x475455, _0x2e72d8, _0x2df99b), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: 0
  });
  lic_blip.setRoute(true);
});
mp.events.add("playerEnterColshape", _0x16b12d => {
  if (localplayer.isInAnyVehicle(false) && _0x16b12d.is_aw == 1) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (aw_colshape) {
      aw_colshape.destroy();
      aw_colshape = null;
    }
    if (currentcheckpoint) {
      currentcheckpoint.destroy();
      currentcheckpoint = null;
    }
    mp.events.callRemote("ShowNextCheckpoint", lastAutoSchoolCheckIndex);
  }
});
mp.events.add("DestroyExamCheck", () => {
  if (aw_colshape) {
    aw_colshape.destroy();
    aw_colshape = null;
  }
  if (currentcheckpoint) {
    currentcheckpoint.destroy();
    currentcheckpoint = null;
  }
  if (lic_blip) {
    lic_blip.destroy();
    lic_blip = null;
  }
});