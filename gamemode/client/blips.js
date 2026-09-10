const DEFAULT_BLIP_OPTIONS = {
  drawDistance: 25,
  shortRange: true
};
const createdBlips = [];
const createdStoryBlips = [];
let storyBlipsSpawned = false;
function translateBlipName(_0x192c9b) {
  const _0x47a8af = typeof global != "undefined" && global.curr_lang || "en";
  const _0x40aeea = (typeof global != "undefined" && global.language || {})[_0x192c9b];
  if (_0x40aeea) {
    if (typeof _0x40aeea == "string") {
      return _0x40aeea;
    } else if (_0x40aeea[_0x47a8af] !== undefined) {
      return _0x40aeea[_0x47a8af];
    } else if (_0x40aeea.ru !== undefined) {
      return _0x40aeea.ru;
    } else if (_0x40aeea.en !== undefined) {
      return _0x40aeea.en;
    } else {
      return _0x192c9b;
    }
  } else {
    return _0x192c9b;
  }
}
function resolveBlipName(_0x44428e) {
  if (_0x44428e.nameKey) {
    return translateBlipName(_0x44428e.nameKey);
  } else {
    return _0x44428e.name || "";
  }
}
function createBlipFromData(_0x424061, _0x3b6620) {
  return mp.blips.new(_0x424061.sprite, new mp.Vector3(_0x424061.position[0], _0x424061.position[1], _0x424061.position[2]), {
    ...DEFAULT_BLIP_OPTIONS,
    ..._0x424061.options,
    name: resolveBlipName(_0x424061),
    ...(_0x3b6620 || {})
  });
}
function renderAllBlips() {
  for (let _0x3f48a6 = 0; _0x3f48a6 < blipData.length; _0x3f48a6++) {
    if (!blipData[_0x3f48a6].onlyNewbie) {
      createdBlips.push({
        blip: createBlipFromData(blipData[_0x3f48a6]),
        item: blipData[_0x3f48a6]
      });
    }
  }
}
function SpawnStoryDimensionBlips() {
  if (storyBlipsSpawned) {
    return;
  }
  const _0x5a3948 = localplayer.getVariable("REMOTE_ID");
  if (_0x5a3948 == null) {
    return;
  }
  const _0x22060a = _0x5a3948 + 1;
  for (let _0x48d790 = 0; _0x48d790 < blipData.length; _0x48d790++) {
    if (blipData[_0x48d790].showNewbie) {
      createdStoryBlips.push(createBlipFromData(blipData[_0x48d790], {
        dimension: _0x22060a
      }));
    }
  }
  storyBlipsSpawned = true;
}
function clearAllBlips() {
  for (DestroyStoryDimensionBlips(); createdBlips.length;) {
    const _0x57c8b3 = createdBlips.pop();
    if (_0x57c8b3 && _0x57c8b3.blip && mp.blips.exists(_0x57c8b3.blip)) {
      _0x57c8b3.blip.destroy();
    }
  }
}
function updateBlipNames() {
  const _0x236d57 = storyBlipsSpawned;
  clearAllBlips();
  renderAllBlips();
  if (_0x236d57) {
    SpawnStoryDimensionBlips();
  }
}
global.DestroyStoryDimensionBlips = function () {
  while (createdStoryBlips.length) {
    const _0x17a3ce = createdStoryBlips.pop();
    if (_0x17a3ce && mp.blips.exists(_0x17a3ce)) {
      _0x17a3ce.destroy();
    }
  }
  storyBlipsSpawned = false;
};
global.UpdateStoryDimensionBlips = function () {
  if (loggedin && story_quest_progress > 0 && localplayer.dimension == localplayer.getVariable("REMOTE_ID") + 1) {
    SpawnStoryDimensionBlips();
  }
};
const bankPositions = [[-2966.288, 482.774, 15.693], [-1214.893, -326.812, 37.671], [-350.003, -46.444, 49.037], [315.224, -275.279, 53.925], [150.93, -1037.213, 29.339], [1175.247, 2703.099, 38.173], [-110.872, 6462.55, 31.641], [-561.473, -583.07, 41.43]];
const parkingPositions = [[-879.063, -2252.578, 6.413], [-3006.31, 115.276, 14.551], [-32.871, 6517.514, 31.465], [1560.381, 3776.969, 34.46], [389.458, 260.197, 103.026], [-542.995, 325.907, 83.029], [-1195.888, -357.949, 36.639], [-453.969, -820.841, 30.646], [436.714, -1311.95, 30.964], [-1160.402, -741.787, 19.619], [683.506, 221.049, 93.024], [198.615, 374.578, 107.46], [-336.162, 266.013, 85.866], [-2020.965, -455.048, 11.493], [-1069.401, -1394.401, 5.095], [-272.532, -884.289, 31.217], [-355.022, -824.963, 31.499], [-1253.037, -228.31, 40.592]];
const managerPositions = [[2035.097, 3460.389, 43.759], [1494.76, -1884.985, 71.863], [2336.101, 4859.396, 41.808], [1530.678, 818.091, 77.43], [2125.011, 1935.309, 93.784]];
const bunkerPositions = [[-3032.252, 3333.851, 10.245], [38.996, 2930.905, 55.848], [492.474, 3013.456, 40.949], [849.516, 3020.898, 41.322], [2110.155, 3326.222, 45.353], [2489.408, 3161.829, 48.995], [1802.084, 4705.61, 39.79], [-756.875, 5943.523, 19.963], [-3158.477, 1376.622, 16.722], [1571.899, 2226.982, 78.241], [-389.31, 4341.954, 56.106]];
const drugLabPositions = [[-1079.82, -1264.264, 5.73], [-22.334, 217.94, 106.596], [67.015, -1419.095, 29.312], [-54.356, -212.325, 45.805], [-1537.363, -425.888, 35.592], [-23.942, -85.738, 57.254], [-1294.042, -280.816, 38.75], [-580.32, -1005.108, 22.33]];
const blipData = [{
  sprite: 56,
  position: [901.049072265625, -171.8558349609375, 74.07556915283203],
  nameKey: "Тaкcoпapк",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 56,
  position: [-50.667633056640625, -1843.8450927734375, 26.325763702392578],
  nameKey: "Тaкcoпapк",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 56,
  position: [-1446.239501953125, -680.6077270507812, 26.433349609375],
  nameKey: "Тaкcoпapк",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 590,
  position: [-1082.73681640625, -256.83416748046875, 37.763309478759766],
  name: "LifeInvader",
  options: {
    scale: 1,
    color: 75
  }
}, {
  sprite: 489,
  position: [298.945, -584.443, 43.261],
  nameKey: "Больница",
  options: {
    scale: 1.5,
    color: 1
  }
}, {
  sprite: 489,
  position: [1838.801, 3673.694, 34.277],
  nameKey: "Больница",
  options: {
    scale: 1.5,
    color: 1
  }
}, {
  sprite: 491,
  position: [1235.337, -438.267, 68.187],
  nameKey: "Кулачные бои",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 184,
  position: [-428.3901, -24.25796, 45.9791],
  nameKey: "Фотостудия",
  options: {
    scale: 1
  }
}, {
  sprite: 419,
  position: [-544.4389038085938, -205.23843383789062, 38.22159194946289],
  nameKey: "Правительство",
  options: {
    scale: 1.5
  }
}, {
  sprite: 304,
  position: [926.5615844726562, 44.98503494262695, 80.8998794555664],
  nameKey: "Казино",
  options: {
    scale: 1.3,
    color: 83
  }
}, {
  sprite: 285,
  position: [-569.5352783203125, 5251.26318359375, 70.4875259399414],
  nameKey: "Лесопилка",
  options: {
    scale: 1.2,
    color: 21
  }
}, {
  sprite: 498,
  position: [-713.2803344726562, -1395.41455078125, 5.000520706176758],
  nameKey: "Центр лицензирования",
  options: {
    scale: 1.1,
    color: 77
  },
  showNewbie: true
}, {
  sprite: 88,
  position: [2523.354, -412.416, 94.12],
  name: "FIB",
  options: {
    scale: 1,
    color: 39
  }
}, {
  sprite: 477,
  position: [-99.52906036376953, -2510.529541015625, 5.808130741119385],
  nameKey: "База дальнобойщиков",
  options: {
    scale: 1,
    color: 21
  }
}, {
  sprite: 188,
  position: [1846.669677734375, 2604.68505859375, 45.57913589477539],
  nameKey: "Исправительная колония",
  options: {
    scale: 1.5,
    color: 37
  }
}, {
  sprite: 526,
  position: [433.7220153808594, -982.16748046875, 30.709575653076172],
  nameKey: "Цeнтpaльный дeпapтaмeнт пoлиции",
  options: {
    scale: 1.2,
    color: 29
  }
}, {
  sprite: 526,
  position: [-440.9735412597656, 6018.82958984375, 31.51088523864746],
  name: "SAHP",
  options: {
    scale: 1.2,
    color: 29
  }
}, {
  sprite: 543,
  position: [113.27713775634766, -1945.0750732421875, 20.710037231445312],
  name: "The Ballas Gang",
  options: {
    scale: 1,
    color: 27
  }
}, {
  sprite: 543,
  position: [-176.544, -1668.403, 33.218],
  name: "The Families",
  options: {
    scale: 1,
    color: 25
  }
}, {
  sprite: 543,
  position: [-1059.8704833984375, -1658.633056640625, 4.673157215118408],
  name: "Los Santos Vagos",
  options: {
    scale: 1,
    color: 46
  }
}, {
  sprite: 543,
  position: [414.1764831542969, -1486.9781494140625, 30.149070739746094],
  name: "Blood Street Gang",
  options: {
    scale: 1,
    color: 1
  }
}, {
  sprite: 543,
  position: [795.977, -2124.028, 29.48],
  name: "Marabunta Grande",
  options: {
    scale: 1,
    color: 26
  }
}, {
  sprite: 513,
  position: [435.1992492675781, -648.0519409179688, 28.737348556518555],
  nameKey: "Автобусный парк",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 632,
  position: [1018.634, -2511.446, 28.477],
  nameKey: "Развозчик топлива",
  options: {
    scale: 1,
    color: 22
  }
}, {
  sprite: 354,
  position: [713.1492309570312, 146.27125549316406, 80.7545166015625],
  nameKey: "Электростанция",
  options: {
    scale: 1.8,
    color: 46
  },
  showNewbie: true
}, {
  sprite: 616,
  position: [-1178.0042724609375, -891.336181640625, 13.768108367919922],
  nameKey: "Paбoтa уличного продавца",
  options: {
    scale: 1.3,
    color: 5
  }
}, {
  sprite: 410,
  position: [-846.4028930664062, -1316.76708984375, 5.000180721282959],
  nameKey: "Причал частных катеров",
  options: {
    scale: 1.2,
    color: 12
  }
}, {
  sprite: 643,
  position: [109.79397583007812, 6626.91357421875, 31.78723907470703],
  nameKey: "Чип-тюнинг",
  options: {
    scale: 1,
    color: 81
  }
}, {
  sprite: 643,
  position: [-1154.8580322265625, -2005.8448486328125, 12.80241584777832],
  nameKey: "Чип-тюнинг",
  options: {
    scale: 1,
    color: 81
  }
}, {
  sprite: 643,
  position: [1174.867, 2639.662, 37.405],
  nameKey: "Чип-тюнинг",
  options: {
    scale: 1,
    color: 81
  }
}, {
  sprite: 643,
  position: [257.239, 2597.4, 44.783],
  nameKey: "Чип-тюнинг",
  options: {
    scale: 1,
    color: 81
  }
}, {
  sprite: 163,
  position: [437.005, -1167.024, 29.292],
  nameKey: "Штрафстоянка",
  options: {
    scale: 1.5,
    color: 1
  }
}, {
  sprite: 163,
  position: [0.075, 6313.103, 31.228],
  nameKey: "Штрафстоянка",
  options: {
    scale: 1.5,
    color: 1
  }
}, {
  sprite: 569,
  position: [797.2205200195312, -2988.744384765625, 6.020936489105225],
  nameKey: "Пoкyпкa пpoдyктoв",
  options: {
    scale: 1.2,
    color: 21
  }
}, {
  sprite: 40,
  position: [-773.8287963867188, 300.6834411621094, 85.72547912597656],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-618.0340576171875, 22.77735710144043, 41.35807418823242],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-1439.3824462890625, -550.2941284179688, 34.741825103759766],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-935.948, -378.852, 37.961],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-47.625, -585.884, 37.953],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-260.752, -973.379, 31.22],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-886.085, -1233.254, 5.656],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 40,
  position: [-1039.044, -759.447, 19.839],
  nameKey: "Жилой комплекс",
  options: {
    scale: 0.7,
    color: 60
  }
}, {
  sprite: 685,
  position: [-1343.697, -1444.671, 4.332],
  nameKey: "Торговый рынок",
  options: {
    scale: 1,
    color: 5
  },
  showNewbie: true
}, {
  sprite: 685,
  position: [-54.087, -1219.718, 28.702],
  nameKey: "Черный рынок",
  options: {
    scale: 1,
    color: 50
  }
}, {
  sprite: 433,
  position: [1077.463, -1980.421, 31.471],
  nameKey: "Сборка оружия",
  options: {
    scale: 1.3,
    color: 6
  }
}, {
  sprite: 374,
  position: [-1385.588, -976.431, 9.274],
  nameKey: "Риэлторское агентство",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 409,
  position: [-1738.25, 156.63, 64.36],
  nameKey: "Стадион",
  options: {
    scale: 1,
    color: 44
  }
}, {
  sprite: 269,
  position: [-117.288, -604.491, 36.281],
  nameKey: "Бизнес-центр",
  options: {
    scale: 1,
    color: 3
  }
}, {
  sprite: 523,
  position: [-915.523, -2038.053, 9.405],
  nameKey: "Автоярмарка",
  options: {
    scale: 1,
    color: 32
  }
}, {
  sprite: 523,
  position: [-1685.56, -923.13, 7.724],
  nameKey: "Автоярмарка",
  options: {
    scale: 1,
    color: 32
  }
}, {
  sprite: 473,
  position: [865.438, -3197.936, 5.995],
  nameKey: "Характеристики транспорта",
  options: {
    scale: 1,
    color: 47
  }
}, {
  sprite: 663,
  position: [2481.492, 4100.702, 38.132],
  nameKey: "Клуб интересов",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 663,
  position: [822.799, -3187.967, 5.995],
  nameKey: "Клуб интересов",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 663,
  position: [808.261, -1631.518, 31.241],
  nameKey: "Клуб интересов",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 478,
  position: [133.217, 96.614, 83.508],
  nameKey: "Почта",
  options: {
    scale: 1,
    color: 44
  },
  showNewbie: true
}, {
  sprite: 478,
  position: [-87.759, 6494.625, 32.101],
  nameKey: "Почта",
  options: {
    scale: 1,
    color: 44
  }
}, {
  sprite: 480,
  position: [-1273.803, 315.967, 65.512],
  nameKey: "Отель",
  options: {
    scale: 1,
    color: 11
  }
}, {
  sprite: 664,
  position: [-67.288, 74.555, 71.9],
  nameKey: "Автосалон",
  options: {
    scale: 1.2,
    color: 47
  }
}, {
  sprite: 455,
  position: [3819.298, 4455.246, 3.514],
  nameKey: "Водный транспорт",
  options: {
    scale: 1.2,
    color: 47
  }
}, {
  sprite: 43,
  position: [1758.252, 3297.072, 41.146],
  nameKey: "Воздушный транспорт",
  options: {
    scale: 1.2,
    color: 47
  }
}, {
  sprite: 557,
  position: [194.433, 6407.368, 31.293],
  nameKey: "Главный склад",
  options: {
    scale: 0.8,
    color: 31
  }
}, {
  sprite: 440,
  position: [3628.371, 3757.586, 28.516],
  nameKey: "Секретная лаборатория",
  options: {
    scale: 1.1,
    color: 49
  }
}, {
  sprite: 546,
  position: [-265.099, -2017.407, 30.146],
  nameKey: "Арена",
  options: {
    scale: 1,
    color: 46
  }
}, {
  sprite: 434,
  position: [-67.282, -802.476, 44.227],
  nameKey: "Центральный банк",
  options: {
    scale: 1.3,
    color: 46
  }
}, {
  sprite: 446,
  position: [-205.333, -1309.342, 31.293],
  nameKey: "Виниловый центр",
  options: {
    scale: 1,
    color: 81
  }
}, {
  sprite: 153,
  position: [-784.166, 7.054, 41.681],
  nameKey: "Церковь",
  options: {
    scale: 1,
    color: 35
  }
}, {
  sprite: 361,
  position: [-1483.137, -3220.058, 13.945],
  nameKey: "АЗС",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 361,
  position: [-742.071, -1383.781, 0.12],
  nameKey: "АЗС",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 641,
  position: [-1549.05, -3180.41, 14.548],
  nameKey: "СТО",
  options: {
    scale: 1,
    color: 17
  }
}, {
  sprite: 641,
  position: [-762.276, -1409.71, 0.12],
  nameKey: "СТО",
  options: {
    scale: 1,
    color: 17
  }
}, {
  sprite: 359,
  position: [1047.069, 3071.548, 41.753],
  nameKey: "Аренда самолетов для плантаций",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 565,
  position: [683.954, 571.026, 130.461],
  nameKey: "Амфитеатр",
  options: {
    scale: 1,
    color: 73
  }
}, {
  sprite: 565,
  position: [198.78, 1165.733, 227.008],
  nameKey: "Амфитеатр",
  options: {
    scale: 1,
    color: 73
  }
}, {
  sprite: 136,
  position: [-39.016, -1388.017, 30.492],
  nameKey: "Студия звукозаписи",
  options: {
    scale: 1,
    color: 4
  }
}, {
  sprite: 436,
  position: [1202.687, -1464.377, 34.888],
  nameKey: "Пожарная станция",
  options: {
    scale: 1.2,
    color: 1
  }
}, {
  sprite: 729,
  position: [-3427.261, 967.76, 8.347],
  nameKey: "Водолаз",
  options: {
    scale: 1,
    color: 3
  }
}, {
  sprite: 527,
  position: [1282.091, -2563.021, 43.954],
  nameKey: "Автосвалка",
  options: {
    scale: 1,
    color: 17
  }
}, {
  sprite: 310,
  position: [861.962, -2365.853, 30.346],
  nameKey: "Завод РП билетов",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 525,
  position: [539.371, -196.527, 54.489],
  nameKey: "Покупка номерных знаков",
  options: {
    scale: 0.8,
    color: 71
  }
}, {
  sprite: 908,
  position: [-136.974, -2412.339, 5.5],
  nameKey: "Аукцион контейнеров",
  options: {
    scale: 0.7,
    color: 75
  }
}, {
  sprite: 365,
  position: [286.969, 2843.46, 44.704],
  nameKey: "Скупщик сырья",
  options: {
    scale: 1.5,
    color: 21
  }
}, {
  sprite: 365,
  position: [1093.252, -2251.934, 31.234],
  nameKey: "Скупщик сырья",
  options: {
    scale: 1.5,
    color: 21
  }
}, {
  sprite: 365,
  position: [-272.121, -2496.399, 7.296],
  nameKey: "Скупщик сырья",
  options: {
    scale: 1.5,
    color: 21
  }
}, {
  sprite: 409,
  position: [-1201.41, -1567.463, 4.611],
  nameKey: "Пляжный спортзал",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 408,
  position: [-1581.292, -558.406, 34.953],
  nameKey: "Строительная компания",
  options: {
    scale: 1,
    color: 47
  }
}, {
  sprite: 632,
  position: [-203.152, -1381.419, 31.258],
  nameKey: "Коллекторы",
  options: {
    scale: 1,
    color: 5
  }
}, {
  sprite: 532,
  position: [576.67, 2739.217, 42.139],
  nameKey: "Инкассатор",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 527,
  position: [MINING_JOB_CENTER.x, MINING_JOB_CENTER.y, MINING_JOB_CENTER.z],
  nameKey: "Каменоломня",
  options: {
    scale: 1,
    color: 2
  }
}, {
  sprite: 108,
  position: [-1226.475, -902.561, 11.28],
  nameKey: "Магазин 24/7",
  options: {
    scale: 1,
    color: 1
  },
  showNewbie: true,
  onlyNewbie: true
}, {
  sprite: 811,
  position: [-1294.494, 273.805, 64.391],
  nameKey: "Аренда скутера",
  options: {
    scale: 1,
    color: 2
  },
  showNewbie: true,
  onlyNewbie: true
}, {
  sprite: 811,
  position: [291.656, -564.903, 43.263],
  nameKey: "Аренда скутера",
  options: {
    scale: 1,
    color: 2
  },
  showNewbie: true,
  onlyNewbie: true
}, {
  sprite: 811,
  position: [130.635, 85.199, 81.961],
  nameKey: "Аренда скутера",
  options: {
    scale: 1,
    color: 2
  },
  showNewbie: true,
  onlyNewbie: true
}, {
  sprite: 811,
  position: [1845.905, 3667.701, 33.742],
  nameKey: "Аренда скутера",
  options: {
    scale: 1,
    color: 2
  },
  showNewbie: true,
  onlyNewbie: true
}];
for (let o = 0; o < bankPositions.length; o++) {
  blipData.push({
    sprite: 605,
    position: bankPositions[o],
    nameKey: "Банк",
    options: {
      scale: 1
    }
  });
}
for (let o = 0; o < parkingPositions.length; o++) {
  blipData.push({
    sprite: 267,
    position: parkingPositions[o],
    nameKey: "Парковка",
    options: {
      scale: 0.8,
      color: 26
    }
  });
}
for (let o = 0; o < managerPositions.length; o++) {
  blipData.push({
    sprite: 357,
    position: managerPositions[o],
    nameKey: "Управляющий",
    options: {
      scale: 1,
      color: 55
    }
  });
}
for (let o = 0; o < bunkerPositions.length; o++) {
  blipData.push({
    sprite: 557,
    position: bunkerPositions[o],
    nameKey: "Бункер",
    options: {
      scale: 0.8,
      color: 31
    }
  });
}
for (let o = 0; o < drugLabPositions.length; o++) {
  blipData.push({
    sprite: 381,
    position: drugLabPositions[o],
    nameKey: "Бургерная",
    options: {
      scale: 0.8,
      color: 5
    }
  });
}
renderAllBlips();
mp.events.add("Client_LanguageChanged", () => {
  updateBlipNames();
});