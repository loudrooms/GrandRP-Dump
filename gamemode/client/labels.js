const createdLabels = [];
const DEFAULT_LABEL_OPTIONS = {
  los: true,
  font: 0,
  color: [255, 255, 255, 255]
};
function getLabelText(_0x199ff0) {
  if (_0x199ff0.nameKey) {
    const _0x1a4d29 = language[_0x199ff0.nameKey];
    if (_0x1a4d29) {
      if (_0x1a4d29[curr_lang] !== undefined) {
        return _0x1a4d29[curr_lang];
      } else if (_0x1a4d29.ru !== undefined) {
        return _0x1a4d29.ru;
      } else if (_0x1a4d29.en !== undefined) {
        return _0x1a4d29.en;
      } else {
        return _0x199ff0.nameKey;
      }
    } else {
      return _0x199ff0.nameKey;
    }
  }
  return _0x199ff0.name;
}
function createLabel(_0x4dd618) {
  const _0x1e2ed8 = mp.labels.new(getLabelText(_0x4dd618), new mp.Vector3(_0x4dd618.position[0], _0x4dd618.position[1], _0x4dd618.position[2]), {
    ...DEFAULT_LABEL_OPTIONS,
    ..._0x4dd618.options
  });
  createdLabels.push(_0x1e2ed8);
}
function clearLabels() {
  while (createdLabels.length) {
    const _0x2f242a = createdLabels.pop();
    try {
      if (_0x2f242a) {
        _0x2f242a.destroy();
      }
    } catch (_0xd19fb1) {}
  }
}
const gangNpcLabels = [["Luis Washington", [-1108.6722412109375, -1636.678466796875, 5.615959167480469]], ["Joshua Peterson", [-1043.8704833984375, -1592.55029296875, 5.930212497711182]], ["Thomas Perry", [-1103.4351806640625, -1493.380615234375, 5.879530429840088]], ["Landon Gonzalez", [-1165.1162109375, -1551.06982421875, 5.3993940353393555]], ["Aidan Rogers", [-1126.1629638671875, -1453.7943115234375, 5.939870357513428]], ["Xavier Anderson", [-131.85787963867188, -1618.043212890625, 33.7634162902832]], ["Joseph Clark", [-33.98107147216797, -1495.95703125, 31.767967224121094]], ["Antonio Hall", [66.91033172607422, -1623.060302734375, 31.672636032104492]], ["Michael Green", [142.75648498535156, -1520.0406494140625, 30.83696746826172]], ["Jake Murphy", [318.540771484375, -1476.3328857421875, 30.962385177612305]], ["Kyle Allen", [455.5941162109375, -1498.0113525390625, 29.188175201416016]], ["Hunter Howard", [308.81011962890625, -1641.8128662109375, 33.531211853027344]], ["William Walker", [187.3758544921875, -1679.7261962890625, 30.739999771118164]], ["Jose Martin", [250.4381561279297, -1769.7596435546875, 29.917165756225586]], ["Jacob Barnes", [113.81, -1764.824, 30.335]], ["Carlos Sanders", [82.48138427734375, -1953.7777099609375, 21.755666732788086]], ["Jordan Smith", [188.88558959960938, -1844.8231201171875, 28.20120620727539]], ["Eric Hall", [246.74111938476562, -1964.9779052734375, 22.961580276489258]], ["Seth Davis", [349.117431640625, -2068.77001953125, 21.938215255737305]], ["Matthew Murphy", [355.3297424316406, -1854.523193359375, 28.636150360107422]], ["Owen Barnes", [458.4259948730469, -1731.6048583984375, 30.05591583251953]], ["Caleb Carter", [542.6640625, -1648.8433837890625, 29.49718475341797]], ["Dominic Sanders", [1224.7757568359375, -1511.0101318359375, 35.838165283203125]], ["Jeremiah Wright", [1286.4425048828125, -1713.974609375, 56.041080474853516]], ["Alejandro Davis", [1271.5621337890625, -1904.3458251953125, 39.50891876220703]], ["Ashton Peterson", [1350.843505859375, -1551.6375732421875, 54.97150421142578]], ["Elijah Coleman", [-1223.6798095703125, -1310.6204833984375, 5.4863739013671875]], ["Julian Wright", [-1277.672119140625, -1334.9801025390625, 5.249084949493408]], ["Kevin Ramirez", [-1252.8426513671875, -1219.192626953125, 6.412266731262207]], ["Christian Hayes", [-1313.29150390625, -1242.8865966796875, 5.621341705322266]], ["Charles Cooper", [-957.8803100585938, -1105.600830078125, 3.15031099319458]], ["Artemeo Shmajkin", [-1010.8307495117188, -1012.8524780273438, 3.150193452835083]], ["Cole Moore", [-1111.4188232421875, -1045.8843994140625, 3.150357723236084]], ["Andrew Powell", [-1044.2698974609375, -1155.4039306640625, 3.158597230911255]], ["Hunter Rivera", [-354.9808349609375, -1513.6822509765625, 28.717214584350586]], ["Eric Jackson", [-313.538818359375, -1341.9691162109375, 32.330848693847656]], ["Devin Phillips", [-176.2452850341797, -1312.12451171875, 33.29771041870117]], ["William Bailey", [-19.242460250854492, -1309.8909912109375, 30.259878158569336]], ["Jake Hayes", [136.77371215820312, -1295.080810546875, 30.23272705078125]], ["Jose Edwards", [265.2451477050781, -1377.4698486328125, 31.555580139160156]], ["Gabriel Parker", [459.78765869140625, -1315.0107421875, 30.282398223876953]], ["Joseph Martin", [703.7060546875, -1539.5950927734375, 10.708629608154297]], ["Hayden Taylor", [1161.489501953125, -1312.933349609375, 35.74275588989258]], ["Jackson Price", [980.360595703125, -1812.9693603515625, 32.3209171295166]], ["Kyle Cox", [992.7223510742188, -1912.45751953125, 32.15273475646973]], ["Jacob Gray", [946.0223999023438, -2044.9317626953125, 31.170137405395508]], ["Evan Martinez", [888.493408203125, -2001.9373779296875, 31.58584976196289]], ["Patrick Walker", [1002.8483276367188, -2159.4501953125, 31.55156135559082]], ["John Jones", [847.7052612304688, -2190.67236328125, 31.30517578125]], ["Landon Sanders", [827.0266723632812, -2340.332275390625, 31.334304809570312]], ["Antonio Harris", [972.9524536132812, -2413.80908203125, 32.489017486572266]]];
const warehouseStorageLabels = [{
  id: 1,
  position: [907.942, -1722.843, 32.16]
}, {
  id: 2,
  position: [572.831, 128.742, 99.475]
}, {
  id: 3,
  position: [-762.786, -2587.594, 13.888]
}, {
  id: 4,
  position: [186.325, 2786.539, 45.986]
}, {
  id: 5,
  position: [38.461, 6453.604, 31.425]
}];
const bunkerEntryLabels = [[-3032.252, 3333.851, 10.245], [38.996, 2930.905, 55.848], [492.474, 3013.456, 40.949], [849.516, 3020.898, 41.322], [2110.155, 3326.222, 45.353], [2489.408, 3161.829, 48.995], [1802.084, 4705.61, 39.79], [-756.875, 5943.523, 19.963], [-3158.477, 1376.622, 16.722], [1571.899, 2226.982, 78.241], [-389.31, 4341.954, 56.106]];
const markersStaticLabels = [{
  nameKey: "Вход в больницу",
  position: [1838.801, 3673.694, 34.277],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [328.521, -559.002, 28.743],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [1828.432, 3691.614, 34.224],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [436.451, -995.922, 25.78],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [2496.864, -340.643, 92.993],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-354.065, 6066.296, 31.499],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-1737.375, 3072.872, 32.845],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-1100.593, -215.458, 32.048],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [452.571, -995.522, 25.785],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [2503.802, -340.432, 92.993],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-358.656, 6061.82, 31.5],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-1735.913, 3064.798, 32.844],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Вход в гараж",
  position: [-544.042, -122.568, 30.313],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Лифт",
  position: [334.006, -591.862, 43.268],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [325.282, -583.969, 28.847],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [338.511, -583.818, 74.166],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Выход из больницы",
  position: [-999.974, 3630.386, -60.803],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-982.432, 3628.015, -60.803],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-982.366, 3628.253, -57.441],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-982.474, 3628.204, -54.241],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-982.448, 3628.559, -51.001],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-1017.25, 3627.443, -79.975],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-1017.526, 3633.146, -60.803],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-1017.458, 3633.042, -57.441],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-1017.497, 3633.062, -54.241],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [-1017.505, 3633.167, -51.001],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Лифт",
  position: [1838.469, 3683.329, 39.955],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Гардероб",
  position: [466.095, -991.164, 30.69],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Гардероб",
  position: [466.152, -997.46, 30.69],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Подземная парковка",
  position: [-568.175, -198.369, 38.169],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Лифт",
  position: [-561.749, -164.737, 30.426],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Бизнес-центр",
  position: [-117.288, -604.491, 36.281],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Выход",
  position: [-141.484, -620.951, 168.821],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Гардероб",
  position: [1779.508, 2549.025, 45.798],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Выход",
  position: [4993.055, -5712.95, 19.88],
  options: {
    los: true,
    font: 0,
    drawDistance: 20,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Выход",
  position: [5082.833, -5737.415, 15.799],
  options: {
    los: true,
    font: 0,
    drawDistance: 20,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Выход",
  position: [4965.189, -5787.098, 21.03],
  options: {
    los: true,
    font: 0,
    drawDistance: 20,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Вход",
  position: [4982.311, -5710.855, 19.887],
  options: {
    los: true,
    font: 0,
    drawDistance: 20,
    color: [255, 255, 255, 255],
    dimension: -1
  }
}, {
  nameKey: "Гардероб",
  position: [306.673, -601.764, 43.268],
  options: {
    los: true,
    font: 0,
    drawDistance: 6,
    color: [255, 255, 255, 255],
    dimension: 0
  }
}, {
  nameKey: "Гардероб",
  position: [-1882.689, 3245.579, 36.508],
  options: {
    los: true,
    font: 0,
    drawDistance: 10,
    color: [255, 255, 255, 255]
  }
}];
function buildLabelData() {
  const _0x14f06c = [{
    nameKey: "Peзepвyap c вoдoй",
    position: [1959.302001953125, 5058.193359375, 45.92384719848633],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peзepвyap c вoдoй",
    position: [465.0834655761719, 6535.11083984375, 32.967918395996094],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peзepвyap c вoдoй",
    position: [471.0777893066406, 6534.39453125, 32.96791076660156],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peзepвyap c вoдoй",
    position: [1963.3114013671875, 5052.97509765625, 45.70125198364258],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peзepвyap c вoдoй",
    position: [1955.4962158203125, 5063.5673828125, 46.06597900390625],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peмoнт кyльтивaтopa",
    position: [2011.551, 4970.221, 41.684],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Peмoнт кyльтивaтopa",
    position: [434.8514404296875, 6508.30517578125, 28.373567581176758],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Гардероб",
    position: [-1028.087, 3652.404, -60.803],
    options: {
      drawDistance: 6,
      dimension: -1
    }
  }, {
    nameKey: "Гардероб",
    position: [-452.05, 6008.86, 31.716],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Гардероб",
    position: [2503.457, -406.773, 94.126],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Лифт",
    position: [-1077.991943359375, -254.69781494140625, 44.021141052246094],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Лифт",
    position: [-1078.23, -254.3, 37.763],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Лифт",
    position: [-1075.421, -253.204, 32.228],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Штрафстоянка",
    position: [437.005, -1167.024, 29.292],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Штрафстоянка",
    position: [0.075, 6313.103, 31.228],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Pиэлтopcкoe aгeнcтвo",
    position: [-1385.588, -976.431, 9.274],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    name: "Warehouse",
    position: [1009.749, -2199.434, -49],
    options: {
      drawDistance: 15,
      dimension: -1
    }
  }, {
    nameKey: "Выход",
    position: [990.855, -2186.717, -49],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Список заключенных",
    position: [1838.739, 2588.332, 45.952],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Пoчтa",
    position: [-87.759, 6494.625, 32.101],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Bxoд в кaзинo",
    position: [935.89, 46.883, 81.096],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Гардероб",
    position: [-568.319, -205.77, 38.169],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Нeзнaкoмeц",
    position: [-2560.03, 2315.579, 34.216],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Нeзнaкoмeц",
    position: [-2561.024, 2317.543, 34.216],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Нeзнaкoмeц",
    position: [-2561.937, 2314.968, 34.216],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Вход в клуб",
    position: [1218.012, -416.617, 67.781],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа лесоруба",
    position: [-567.8680419921875, 5253.11181640625, 70.48751068115234],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Место вызова грузовика ~n~(Работа: Дальнобойщик)",
    position: [-116.04666137695312, -2516.478515625, 6.0957136154174805],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа водителем автобуса",
    position: [435.1992492675781, -648.0519409179688, 28.737348556518555],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа электриком",
    position: [718.5892333984375, 152.5412139892578, 80.75448608398438],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа yличнoгo тopгoвцa",
    position: [-1178.0042724609375, -891.336181640625, 13.768108367919922],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа развозчика топлива",
    position: [1018.634, -2511.446, 28.477],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Раздевалка",
    position: [1207.202, -1465.281, 34.86],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Работа пожарным",
    position: [1195.069, -1479.041, 34.859],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Производство медикаментов",
    position: [3559.373, 3671.843, 28.122],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Сдача медикаментов",
    position: [3552.873, 3656.5, 28.122],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Гардероб",
    position: [3561.265, 3684.224, 28.122],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Строительная компания",
    position: [-1581.292, -558.406, 34.953],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Устройство на работу",
    position: [-203.152, -1381.419, 31.258],
    options: {
      drawDistance: 6,
      dimension: 0
    }
  }, {
    nameKey: "Вход в клуб",
    position: [2481.492, 4100.702, 38.132],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Вход в клуб",
    position: [808.261, -1631.518, 31.241],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Вход в клуб",
    position: [822.799, -3187.967, 5.995],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }, {
    nameKey: "Лифт",
    position: [-875.87, -874.197, -81.072],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Лифт",
    position: [-824.309, -876.222, -54.547],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Лифт",
    position: [-702.222, -684.336, -59.606],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Выход",
    position: [-778.954, -788.839, 1.938],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Выход",
    position: [-836.093, -901.095, -54.547],
    options: {
      drawDistance: 10,
      dimension: -1
    }
  }, {
    nameKey: "Центральный банк",
    position: [-67.282, -802.476, 44.227],
    options: {
      drawDistance: 10,
      dimension: 0
    }
  }];
  _0x14f06c.push(...markersStaticLabels);
  if (curr_lang !== "ru") {
    _0x14f06c.push({
      nameKey: "Вход в отель",
      position: [-1273.803, 315.967, 65.512],
      options: {
        drawDistance: 10,
        dimension: 0
      }
    });
  } else {
    _0x14f06c.push({
      nameKey: "Вход в отель",
      position: [-822.151, -1223.562, 7.365],
      options: {
        drawDistance: 10,
        dimension: 0
      }
    });
  }
  for (let _0xdc258f = 0; _0xdc258f < warehouseStorageLabels.length; _0xdc258f++) {
    _0x14f06c.push({
      name: "Warehouse #" + warehouseStorageLabels[_0xdc258f].id,
      position: warehouseStorageLabels[_0xdc258f].position,
      options: {
        drawDistance: 10,
        dimension: -1
      }
    });
  }
  for (let _0x27cf7e = 0; _0x27cf7e < bunkerEntryLabels.length; _0x27cf7e++) {
    _0x14f06c.push({
      nameKey: "Вход в бункер",
      position: bunkerEntryLabels[_0x27cf7e],
      options: {
        drawDistance: 20,
        dimension: 0
      }
    });
  }
  _0x14f06c.push({
    nameKey: "Выход из бункера",
    position: [903.105, -3182.348, -97.053],
    options: {
      drawDistance: 20,
      dimension: -1
    }
  });
  if (curr_lang !== "ru") {
    for (let _0x1e1548 = 0; _0x1e1548 < gangNpcLabels.length; _0x1e1548++) {
      _0x14f06c.push({
        name: gangNpcLabels[_0x1e1548][0],
        position: gangNpcLabels[_0x1e1548][1],
        options: {
          drawDistance: 6,
          dimension: 0
        }
      });
    }
  }
  return _0x14f06c;
}
function renderLabels() {
  const _0x3ca280 = buildLabelData();
  for (let _0x45a1a6 = 0; _0x45a1a6 < _0x3ca280.length; _0x45a1a6++) {
    createLabel(_0x3ca280[_0x45a1a6]);
  }
}
renderLabels();
mp.events.add("Client_LanguageChanged", () => {
  clearLabels();
  renderLabels();
  changeHouseLabelText();
  changeHouseEnterLabelText();
});