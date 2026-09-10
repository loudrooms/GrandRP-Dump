mp.game.invoke("0xD8295AF639FD9CB8", mp.players.local?.handle ?? 0);
let cutscene = {
  start: false,
  vehicles: [],
  peds: [],
  objects: [],
  browser: null,
  browser_rules: null
};
let user = {
  login: "",
  autologin: false,
  last_type: ""
};
let character = {
  cameras: {},
  peds: [],
  activeCameraName: "common"
};
let spawn = {
  firstCamera: null,
  secondCamera: null,
  data: [],
  activeCameraName: ""
};
global.in_quene = false;
global.onOpenedNewAuth = false;
const camsData = [{
  speed: 5000,
  start: {
    position: {
      x: -544.613525390625,
      y: 2953.940673828125,
      z: 17.980201721191406
    },
    rotation: {
      x: -9.1419038772583,
      y: 2.1618949119783792e-7,
      z: 108.39283752441406
    },
    fov: 50
  },
  end: {
    position: {
      x: -544.613525390625,
      y: 2953.940673828125,
      z: 17.980201721191406
    },
    rotation: {
      x: -9.141902923583984,
      y: 2.161894627761285e-7,
      z: 108.39282989501953
    },
    fov: 50
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -565.29736328125,
      y: 2945.729248046875,
      z: 13.925045013427734
    },
    rotation: {
      x: 6.576857566833496,
      y: 0,
      z: -21.537885665893555
    },
    fov: 30
  },
  end: {
    position: {
      x: -564.874267578125,
      y: 2945.6318359375,
      z: 14.015499114990234
    },
    rotation: {
      x: 3.5675604343414307,
      y: 5.346446130261029e-8,
      z: -13.914334297180176
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -565.1250610351562,
      y: 2952.84619140625,
      z: 14.553945541381836
    },
    rotation: {
      x: 5.710758209228516,
      y: -5.362700505884277e-8,
      z: 96.79747772216797
    },
    fov: 30
  },
  end: {
    position: {
      x: -565.3387451171875,
      y: 2952.951904296875,
      z: 14.70770263671875
    },
    rotation: {
      x: 2.9288442134857178,
      y: 0,
      z: 99.44033813476562
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -559.3831176757812,
      y: 2941.145263671875,
      z: 14.193744659423828
    },
    rotation: {
      x: 11.621648788452148,
      y: 0,
      z: -19.86189842224121
    },
    fov: 30
  },
  end: {
    position: {
      x: -559.0687255859375,
      y: 2941.892578125,
      z: 14.491800308227539
    },
    rotation: {
      x: 5.921928882598877,
      y: -1.0729429078537578e-7,
      z: -17.70244026184082
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -564.6058349609375,
      y: 2945.296630859375,
      z: 14.595568656921387
    },
    rotation: {
      x: 5.184112548828125,
      y: 0,
      z: -70.10503387451172
    },
    fov: 30
  },
  end: {
    position: {
      x: -564.5914306640625,
      y: 2945.756103515625,
      z: 14.73150634765625
    },
    rotation: {
      x: 1.672798991203308,
      y: 0,
      z: -77.6744384765625
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -558.7083129882812,
      y: 2950.152587890625,
      z: 15.512696266174316
    },
    rotation: {
      x: -1.1113262176513672,
      y: -2.668544674122586e-8,
      z: 23.028844833374023
    },
    fov: 30
  },
  end: {
    position: {
      x: -558.1210327148438,
      y: 2950.05615234375,
      z: 15.497577667236328
    },
    rotation: {
      x: -0.24488286674022675,
      y: 2.0010501700085115e-8,
      z: 32.095436096191406
    },
    fov: 30
  }
}, {
  speed: 5000,
  start: {
    position: {
      x: -564.6673583984375,
      y: 2955.77490234375,
      z: 15.191351890563965
    },
    rotation: {
      x: 2.5195605754852295,
      y: 0,
      z: 70.85690307617188
    },
    fov: 30
  },
  end: {
    position: {
      x: -564.8616943359375,
      y: 2956.008544921875,
      z: 15.308260917663574
    },
    rotation: {
      x: -1.3111445903778076,
      y: 0,
      z: 76.74695587158203
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -563.8623046875,
      y: 2953.858154296875,
      z: 14.550971984863281
    },
    rotation: {
      x: 0.7410274147987366,
      y: -5.3365315721976e-8,
      z: -138.863525390625
    },
    fov: 30
  },
  end: {
    position: {
      x: -564.1685791015625,
      y: 2953.25341796875,
      z: 14.5095853805542
    },
    rotation: {
      x: 2.291501045227051,
      y: 2.1361422852805845e-7,
      z: -123.5530776977539
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -586.4802856445312,
      y: 2933.650634765625,
      z: 14.414217948913574
    },
    rotation: {
      x: -1.6788016557693481,
      y: 5.338376851682369e-8,
      z: 110.48309326171875
    },
    fov: 30
  },
  end: {
    position: {
      x: -587.333984375,
      y: 2933.902099609375,
      z: 14.378495216369629
    },
    rotation: {
      x: -0.62993985414505,
      y: 0,
      z: 116.78486633300781
    },
    fov: 30
  }
}, {
  speed: 3000,
  start: {
    position: {
      x: -551.7243041992188,
      y: 2948.306396484375,
      z: 14.889193534851074
    },
    rotation: {
      x: -6.9964494705200195,
      y: 0,
      z: 47.15053939819336
    },
    fov: 30
  },
  end: {
    position: {
      x: -552.2510986328125,
      y: 2948.32373046875,
      z: 14.866545677185059
    },
    rotation: {
      x: -7.908554553985596,
      y: 0,
      z: 42.58771896362305
    },
    fov: 30
  }
}];
const vehiclesData = [{
  model: "m5g60",
  position: {
    x: -549.345947,
    y: 2946.87573,
    z: 14.3771048
  },
  rotation: 83.9748764,
  colors: {
    primary: 54,
    secondary: 2
  }
}, {
  model: "bmwx3m23",
  position: {
    x: -547.844482,
    y: 2949.64697,
    z: 15.1434336
  },
  rotation: 61.5213013,
  colors: {
    primary: 1,
    secondary: 2
  }
}];
const objectsData = [{
  model: "prop_tree_jacada_01",
  position: {
    x: -568.696106,
    y: 2958.20044,
    z: 14.0010967
  },
  rotation: {
    x: 0,
    y: 0,
    z: 23.9843044
  }
}, {
  model: "prop_tree_jacada_02",
  position: {
    x: -585.228333,
    y: 2917.13745,
    z: 14.0086203
  },
  rotation: {
    x: 0,
    y: 0,
    z: 127.920013
  }
}, {
  model: "prop_tree_jacada_01",
  position: {
    x: -600.412842,
    y: 2918.90576,
    z: 14.0692558
  },
  rotation: {
    x: 0,
    y: 0,
    z: 104.100449
  }
}, {
  model: "prop_tree_jacada_02",
  position: {
    x: -576.450928,
    y: 2968.3291,
    z: 14.446207
  },
  rotation: {
    x: 0,
    y: 0,
    z: -4.77359486
  }
}, {
  model: "prop_tree_jacada_02",
  position: {
    x: -544.660889,
    y: 2962.69092,
    z: 16.5539036
  },
  rotation: {
    x: 0,
    y: 0,
    z: -17.5064831
  }
}, {
  model: "prop_tree_jacada_01",
  position: {
    x: -520.651367,
    y: 2946.90869,
    z: 17.2765961
  },
  rotation: {
    x: 0,
    y: 0,
    z: -68.1754379
  }
}, {
  model: "prop_tree_lficus_02",
  position: {
    x: -517.651062,
    y: 2933.82861,
    z: 15.4455605
  },
  rotation: {
    x: 0,
    y: 0,
    z: -82.8453369
  }
}, {
  model: "prop_tree_log_01",
  position: {
    x: -565.504578,
    y: 2949.00366,
    z: 13.6138601
  },
  rotation: {
    x: -89.0002441,
    y: -135.611816,
    z: 179.999954
  }
}, {
  model: "prop_tree_birch_02",
  position: {
    x: -536.656677,
    y: 2912.37109,
    z: 13.4429111
  },
  rotation: {
    x: 0,
    y: 0,
    z: -145.379196
  }
}, {
  model: "prop_tree_birch_02",
  position: {
    x: -616.505615,
    y: 2935.06323,
    z: 13.3346977
  },
  rotation: {
    x: 0,
    y: 0,
    z: 161.785034
  }
}, {
  model: "ba_prop_battle_tent_02",
  position: {
    x: -561.25946,
    y: 2957.36548,
    z: 14.244813
  },
  rotation: {
    x: 9.99999905,
    y: 0,
    z: -14.0440111
  }
}, {
  model: "prop_beach_fire",
  position: {
    x: -562.515381,
    y: 2952.55811,
    z: 14.1484928
  },
  rotation: {
    x: 0,
    y: 0,
    z: 26.057539
  }
}, {
  model: "ch_prop_tunnel_hang_lamp2",
  position: {
    x: -567.444824,
    y: 2957.89868,
    z: 17.8189106
  },
  rotation: {
    x: 0,
    y: 0,
    z: -5.81682825
  }
}, {
  model: "xm_prop_base_wall_lampb",
  position: {
    x: -553.736572,
    y: 2953.07056,
    z: 14.438077
  },
  rotation: {
    x: 0,
    y: 0,
    z: -57.1207123
  }
}, {
  model: "xm_prop_base_wall_lampb",
  position: {
    x: -559.683167,
    y: 2944.87891,
    z: 13.4819384
  },
  rotation: {
    x: -1.9083327e-13,
    y: -4.48456206e-7,
    z: -155.254074
  }
}, {
  model: "xm_prop_base_wall_lampb",
  position: {
    x: -555.501892,
    y: 2943.81689,
    z: 13.43013
  },
  rotation: {
    x: -1.9083327e-13,
    y: -4.48455296e-7,
    z: 166.895493
  }
}, {
  model: "xm_prop_base_wall_lampb",
  position: {
    x: -581.656189,
    y: 2986.17725,
    z: 23.7018738
  },
  rotation: {
    x: -5.12069282e-13,
    y: -0.00000155074622,
    z: 1.43129325
  }
}, {
  model: "xm_prop_base_wall_lampb",
  position: {
    x: -577.338135,
    y: 2984.3938,
    z: 23.6700096
  },
  rotation: {
    x: -2.79888797e-13,
    y: 6.85245709e-7,
    z: -58.4188385
  }
}, {
  model: "prop_bbq_1",
  position: {
    x: -559.151001,
    y: 2952.30737,
    z: 14.1436014
  },
  rotation: {
    x: 0,
    y: 0,
    z: -71.525795
  }
}, {
  model: "prop_cs_steak",
  position: {
    x: -559.199219,
    y: 2952.44775,
    z: 15.1062555
  },
  rotation: {
    x: 0,
    y: 0,
    z: -102.101067
  }
}, {
  model: "prop_cs_steak",
  position: {
    x: -559.046448,
    y: 2952.15869,
    z: 15.1062555
  },
  rotation: {
    x: 0,
    y: 0,
    z: -113.187439
  }
}, {
  model: "p_cs_beachtowel_01_s",
  position: {
    x: -561.66272,
    y: 2952.07812,
    z: 14.0524139
  },
  rotation: {
    x: 6.79999065,
    y: 0.0000010747774,
    z: -30.8166885
  }
}, {
  model: "prop_picnictable_01",
  position: {
    x: -557.402832,
    y: 2951.06543,
    z: 14.0997686
  },
  rotation: {
    x: -1.99999964,
    y: 2.99999952,
    z: -158.91925
  }
}, {
  model: "ng_proc_food_chips01b",
  position: {
    x: -558.078674,
    y: 2950.86548,
    z: 14.8568935
  },
  rotation: {
    x: 0,
    y: 0,
    z: -7.95113564
  }
}, {
  model: "ng_proc_food_nana1a",
  position: {
    x: -557.796448,
    y: 2950.92798,
    z: 14.8700056
  },
  rotation: {
    x: 0,
    y: 0,
    z: -17.132185
  }
}, {
  model: "prop_food_bs_juice03",
  position: {
    x: -557.435608,
    y: 2951.18066,
    z: 14.8963404
  },
  rotation: {
    x: 0,
    y: 0,
    z: -24.6674328
  }
}, {
  model: "prop_food_bs_juice02",
  position: {
    x: -556.846619,
    y: 2951.30054,
    z: 14.9239397
  },
  rotation: {
    x: 0,
    y: 0,
    z: -36.0138893
  }
}, {
  model: "prop_food_cb_nugets",
  position: {
    x: -557.065918,
    y: 2951.04443,
    z: 14.9025078
  },
  rotation: {
    x: 0,
    y: 0,
    z: -62.864048
  }
}];
const pedsData = [{
  modelHash: 3630914197,
  position: {
    x: -590.836243,
    y: 2931.08521,
    z: 14.437623
  },
  rotation: {
    x: -1.81903386,
    y: 0.00018349367,
    z: -37.7035217
  },
  heading: -37.7035217,
  currentCustomWeapon: 4106648222,
  animation: {
    dict: "creatures@deer@amb@world_deer_grazing@idle_a",
    name: "idle_a"
  },
  components: [[0, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 3630914197,
  position: {
    x: -603.626282,
    y: 2927.10376,
    z: 14.6173325
  },
  rotation: {
    x: 1.18060505,
    y: -0.0992204621,
    z: -116.123894
  },
  heading: -116.123894,
  currentCustomWeapon: 4106648222,
  components: [[0, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 919005580,
  position: {
    x: -559.76709,
    y: 2951.92139,
    z: 15.1006145
  },
  rotation: {
    x: -5.27089651e-16,
    y: 2.08772763e-16,
    z: -61.0825768
  },
  heading: -61.0825768,
  currentCustomWeapon: 966099553,
  scenario: "PROP_HUMAN_BBQ",
  components: [[0, 1], [0, 0], [2, 2], [1, 2], [0, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 605602864,
  position: {
    x: -558.445007,
    y: 2943.97681,
    z: 14.3449602
  },
  rotation: {
    x: 0,
    y: 0,
    z: 162.795166
  },
  heading: 162.795166,
  currentCustomWeapon: 966099553,
  scenario: "WORLD_HUMAN_PARTYING",
  components: [[2, 0], [0, 0], [1, 1], [0, 4], [0, 2], [0, 0], [0, 0], [0, 0], [0, 1], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 2114544056,
  position: {
    x: -564.612732,
    y: 2948.51685,
    z: 13.9098673
  },
  rotation: {
    x: -0.0201988202,
    y: 8.33763392e-10,
    z: 141.314835
  },
  heading: 141.314835,
  currentCustomWeapon: 2725352035,
  animation: {
    dict: "amb@prop_human_seat_chair@male@left_elbow_on_knee@idle_b",
    name: "idle_e"
  },
  components: [[1, 0], [0, 0], [0, 0], [0, 1], [1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 3394697810,
  position: {
    x: -568.880737,
    y: 2953.46362,
    z: 14.4333353
  },
  rotation: {
    x: -0.00288626831,
    y: -0.000240256602,
    z: 126.825211
  },
  heading: 126.825211,
  currentCustomWeapon: 2725352035,
  scenario: "WORLD_HUMAN_STAND_FISHING",
  attachment: {
    model: "prop_fishing_rod_01",
    boneIndex: 42,
    x: 0,
    y: 0,
    z: 0,
    rx: 0,
    ry: 0,
    rz: 0
  },
  components: [[0, 1], [0, 0], [0, 0], [1, 0], [0, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 3287349092,
  position: {
    x: -568.104309,
    y: 2952.33691,
    z: 14.4331141
  },
  rotation: {
    x: 0.000143989804,
    y: 0,
    z: 105.221687
  },
  heading: 105.221687,
  currentCustomWeapon: 966099553,
  scenario: "WORLD_HUMAN_STAND_FISHING",
  attachment: {
    model: "prop_fishing_rod_01",
    boneIndex: 46,
    x: 0,
    y: 0,
    z: 0,
    rx: 0,
    ry: 0,
    rz: 0
  },
  components: [[0, 1], [0, 0], [0, 0], [1, 2], [1, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 933092024,
  position: {
    x: -563.142761,
    y: 2946.23999,
    z: 14.305418
  },
  rotation: {
    x: 0,
    y: 0,
    z: 118.856949
  },
  heading: 118.856949,
  currentCustomWeapon: 2725352035,
  scenario: "WORLD_HUMAN_STAND_IMPATIENT",
  components: [[0, 2], [0, 0], [0, 2], [1, 1], [1, 2], [0, 0], [0, 0], [0, 0], [0, 1], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 1984313950,
  position: {
    x: -561.542969,
    y: 2951.97021,
    z: 15.041091
  },
  rotation: {
    x: 0,
    y: 0,
    z: 65.1808853
  },
  heading: 65.1808853,
  currentCustomWeapon: 2725352035,
  scenario: "WORLD_HUMAN_PICNIC",
  components: [[0, 2], [0, 0], [0, 2], [0, 1], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 0], [2, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 1261149561,
  position: {
    x: -564.109741,
    y: 2948.23218,
    z: 13.9331989
  },
  rotation: {
    x: -0.0000172341297,
    y: 8.14221954e-13,
    z: 148.244781
  },
  heading: 148.244781,
  currentCustomWeapon: 2725352035,
  animation: {
    dict: "amb@prop_human_seat_chair@female@legs_crossed@idle_a",
    name: "idle_b"
  },
  components: [[5, 0], [0, 0], [5, 2], [0, 3], [2, 2], [0, 0], [2, 0], [0, 2], [0, 0], [5, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 331645324,
  position: {
    x: -566.822693,
    y: 2956.15479,
    z: 15.0158606
  },
  rotation: {
    x: 0,
    y: 0,
    z: 34.2926712
  },
  heading: 34.2926712,
  currentCustomWeapon: 966099553,
  scenario: "WORLD_HUMAN_MOBILE_FILM_SHOCKING",
  components: [[0, 0], [0, 0], [0, 2], [1, 1], [0, 1], [0, 0], [0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 793439294,
  position: {
    x: -568.226379,
    y: 2957.76611,
    z: 15.0293274
  },
  rotation: {
    x: 0.00000533620005,
    y: -0.0000184635264,
    z: -156.583847
  },
  heading: -156.583847,
  currentCustomWeapon: 2725352035,
  scenario: "WORLD_HUMAN_LEANING",
  components: [[0, 1], [0, 0], [2, 1], [1, 5], [1, 3], [0, 0], [0, 0], [0, 0], [1, 1], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 1318032802,
  position: {
    x: -553.287048,
    y: 2950.12842,
    z: 14.6567583
  },
  rotation: {
    x: -3.25947404,
    y: 0.0000322153683,
    z: 93.9372101
  },
  heading: 93.9372101,
  currentCustomWeapon: 3854032506,
  animation: {
    dict: "creatures@retriever@amb@world_dog_sitting@idle_a",
    name: "idle_c"
  },
  components: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 1832265812,
  position: {
    x: -555.135193,
    y: 2950.1416,
    z: 14.4524755
  },
  rotation: {
    x: 2.78977895,
    y: -0.00000777321566,
    z: -85.354126
  },
  heading: -85.354126,
  currentCustomWeapon: 3146768957,
  animation: {
    dict: "creatures@pug@amb@world_dog_sitting@idle_a",
    name: "idle_b"
  },
  components: [[0, 0], [0, 0], [0, 0], [0, 4], [0, 3], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}];
const characterPeds = [{
  modelHash: 1885233650,
  position: {
    x: -580.824768,
    y: 2981.18481,
    z: 24.3672428
  },
  rotation: {
    x: -1.5863106e-15,
    y: 4.3118983e-15,
    z: -20.0706635
  },
  heading: -20.0706635,
  currentWeapon: 2725352035,
  shapeAndSkinTone: [1, 40, 1, 0, 172, 48, 0, 616005684000000, 602532372000000, 1],
  scenario: "WORLD_HUMAN_STAND_IMPATIENT",
  components: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}, {
  modelHash: 2627665880,
  position: {
    x: -581.748962,
    y: 2982.19409,
    z: 24.3427887
  },
  rotation: {
    x: 0,
    y: 0,
    z: -44.5590439
  },
  heading: -44.5590439,
  currentWeapon: 966099553,
  shapeAndSkinTone: [1, 40, 1, 0, 172, 48, 0, 616005684000000, 602532372000000, 1],
  scenario: "WORLD_HUMAN_PARTYING",
  components: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  props: [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
}];
function createVehicles() {
  vehiclesData.forEach(({
    model: _0x45c16f,
    position: _0x13f3fe,
    rotation: _0x197fc1,
    colors: _0x5b85ad,
    openHood: _0x5a9a38,
    tuning: _0x1d8f4c
  }) => {
    const _0x1380d8 = mp.vehicles.new(mp.game.joaat(_0x45c16f), new mp.Vector3(_0x13f3fe.x, _0x13f3fe.y, _0x13f3fe.z), {
      numberPlate: "GRAND",
      color: [_0x5b85ad.primary, _0x5b85ad.secondary],
      heading: _0x197fc1,
      dimension: getAuthCutsceneDimension()
    });
    if (_0x5a9a38) {
      setTimeout(() => {
        if (_0x1380d8 && mp.vehicles.exists(_0x1380d8)) {
          _0x1380d8.setDoorOpen(4, true, true);
        }
      }, 3000);
    }
    if (_0x1d8f4c) {
      setTimeout(() => {
        Object.entries(_0x1d8f4c).forEach(([_0xd70b4f, _0x3f9737]) => {
          if (_0x1380d8 && mp.vehicles.exists(_0x1380d8)) {
            _0x1380d8.setMod(parseInt(_0xd70b4f), parseInt(_0x3f9737));
          }
        });
      }, 1000);
    }
    cutscene.vehicles.push(_0x1380d8);
  });
}
function createObjects() {
  objectsData.forEach(({
    model: _0x23d9f0,
    position: _0x482daa,
    rotation: _0x5aa9bb
  }) => {
    const _0x255a28 = mp.objects.new(mp.game.joaat(_0x23d9f0), new mp.Vector3(_0x482daa.x, _0x482daa.y, _0x482daa.z), {
      rotation: new mp.Vector3(_0x5aa9bb.x, _0x5aa9bb.y, _0x5aa9bb.z),
      alpha: 255,
      dimension: getAuthCutsceneDimension()
    });
    cutscene.objects.push(_0x255a28);
  });
}
const HALLOWEEN_HASHES = [695123698, 4206387590, 2890614022, 3193906903];
function getAuthCutsceneDimension() {
  return localplayer.remoteId + 1;
}
async function applyCutscenePedSetupFromEntry(_0x1354f0, _0x5c81ad) {
  if (!_0x1354f0 || !mp.peds.exists(_0x1354f0) || _0x1354f0.destroyed || !_0x1354f0.handle) {
    return;
  }
  if (_0x1354f0._cutsceneSetupDone) {
    return;
  }
  const {
    attachment: _0x4a09d6,
    animation: _0x4e20c6,
    scenario: _0x535588,
    currentCustomWeapon: _0x6a34ed,
    rotation: _0x4d14d6,
    components: _0xc5ec34,
    hair: _0x4b4155,
    facialFeatures: _0xd1f034,
    headOverlays: _0x1bdabd,
    shapeAndSkinTone: _0x44fa3d,
    props: _0x201e2d
  } = _0x5c81ad;
  _0x1354f0.freezePosition(false);
  SetBlockingOfNonTemporaryEvents(_0x1354f0.handle, false);
  if (_0x44fa3d) {
    const _0x2e8d4b = _0x44fa3d.slice();
    _0x2e8d4b[9] = Boolean(_0x2e8d4b[9]);
    _0x1354f0.setHeadBlendData(..._0x2e8d4b);
  }
  if (_0xd1f034) {
    for (let _0x319d9e = 0; _0x319d9e < 20; _0x319d9e++) {
      if (_0xd1f034[_0x319d9e] != null) {
        _0x1354f0.setFaceFeature(_0x319d9e, _0xd1f034[_0x319d9e]);
      }
    }
  }
  if (_0x4b4155) {
    _0x1354f0.setHairColor(_0x4b4155.color, _0x4b4155.streaks);
  }
  if (_0x1bdabd) {
    _0x1bdabd.forEach((_0x1d7039, _0x37d1e3) => {
      _0x1354f0.setHeadOverlay(_0x37d1e3, ..._0x1d7039);
      if (_0x37d1e3 === 1) {
        _0x1354f0.setHeadOverlayColor(1, 1, _0x1d7039[2], 1);
      }
      if (_0x37d1e3 === 2) {
        _0x1354f0.setHeadOverlayColor(2, 1, 1, 1);
      }
      if (_0x37d1e3 === 5 || _0x37d1e3 === 8) {
        _0x1354f0.setHeadOverlayColor(_0x37d1e3, 2, _0x1d7039[2], 1);
      }
    });
  }
  if (_0x6a34ed) {
    setTimeout(() => {
      if (mp.peds.exists(_0x1354f0)) {
        mp.game.invoke("0xBF0FD6E56C964FCB", _0x1354f0.handle, _0x6a34ed | 0, 1, true, true);
      }
    }, 3000);
  }
  if (_0x4a09d6 && _0x1354f0.customObject) {
    setTimeout(() => {
      if (mp.peds.exists(_0x1354f0) && _0x1354f0.customObject && mp.objects.exists(_0x1354f0.customObject)) {
        _0x1354f0.customObject.attachTo(_0x1354f0.handle, _0x4a09d6.boneIndex, _0x4a09d6.x, _0x4a09d6.y, _0x4a09d6.z, _0x4a09d6.rx, _0x4a09d6.ry, _0x4a09d6.rz, true, true, false, false, 0, true);
      }
    }, 1000);
  }
  if (_0x4e20c6) {
    mp.game.streaming.requestAnimDict(_0x4e20c6.dict);
    const _0x236dc1 = Date.now() + 5000;
    while (!mp.game.streaming.hasAnimDictLoaded(_0x4e20c6.dict) && Date.now() < _0x236dc1) {
      await mp.game.waitAsync(0);
    }
    _0x1354f0.taskPlayAnim(_0x4e20c6.dict, _0x4e20c6.name, 8, 0, -1, 1, 0, false, false, false);
  }
  if (_0x535588) {
    _0x1354f0.taskStartScenarioInPlace(_0x535588, -1, false);
  }
  setTimeout(() => {
    if (mp.peds.exists(_0x1354f0)) {
      if (_0x4d14d6) {
        _0x1354f0.setRotation(_0x4d14d6.x, _0x4d14d6.y, _0x4d14d6.z, 1, true);
      }
      if (_0xc5ec34 && !bHalloween2025) {
        _0xc5ec34.forEach(([_0x2c6dab, _0x2911a5], _0x60bcf4) => {
          _0x1354f0.setComponentVariation(_0x60bcf4, _0x2c6dab, _0x2911a5, 0);
        });
      }
      if (_0x201e2d && bHalloween2025) {
        _0x201e2d.forEach((_0x48b796, _0x5062a5) => {
          _0x1354f0.setPropIndex(_0x5062a5, ..._0x48b796, true);
        });
      }
    }
  }, 500);
  _0x1354f0._cutsceneSetupDone = true;
}
function createPeds() {
  for (const _0xb4e3aa of pedsData) {
    const {
      modelHash: _0x3de975,
      position: _0x13b846,
      heading: _0x112cc1,
      attachment: _0x3bb697,
      animation: _0x4c7cd5,
      scenario: _0x3e4d99,
      currentCustomWeapon: _0x1ad8aa,
      rotation: _0x5215d2,
      components: _0x51a4dd,
      hair: _0x38d0da,
      facialFeatures: _0x4ec882,
      headOverlays: _0xa9efef,
      shapeAndSkinTone: _0xb5e290,
      props: _0x532b4e
    } = _0xb4e3aa;
    let _0x3ad09f = _0x3de975;
    if (bHalloween2025 && _0x3de975 != 1832265812 && _0x3de975 != 1318032802 && _0x3de975 != 3630914197) {
      _0x3ad09f = HALLOWEEN_HASHES[Math.floor(Math.random() * HALLOWEEN_HASHES.length)];
    }
    let _0x401142 = null;
    if (_0x3bb697) {
      _0x401142 = mp.objects.new(mp.game.joaat(_0x3bb697.model), new mp.Vector3(_0x13b846.x, _0x13b846.y, _0x13b846.z), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: getAuthCutsceneDimension()
      });
      cutscene.objects.push(_0x401142);
    }
    const _0x559106 = mp.peds.new(_0x3ad09f, new mp.Vector3(_0x13b846.x, _0x13b846.y, _0x13b846.z), {
      heading: _0x112cc1,
      dimension: getAuthCutsceneDimension(),
      spawnDistance: 400,
      despawnDistance: 500,
      frozen: false
    }, _0x2b60a8 => {
      _0x2b60a8.customObject = _0x401142;
      applyCutscenePedSetupFromEntry(_0x2b60a8, _0xb4e3aa);
    });
    cutscene.peds.push(_0x559106);
    _0x559106.customObject = _0x401142;
  }
}
async function createCharacterPeds() {
  characterPeds.forEach(async ({
    modelHash: _0x2cb536,
    position: _0x31c7d2,
    heading: _0x5486ea,
    animation: _0xb79ef4,
    currentWeapon: _0x54bf24,
    rotation: _0x355016,
    scenario: _0x39ccda
  }) => {
    const _0x5a069e = mp.peds.new(_0x2cb536, new mp.Vector3(_0x31c7d2.x, _0x31c7d2.y, _0x31c7d2.z), _0x5486ea, getAuthCutsceneDimension());
    character.peds.push(_0x5a069e);
    await new Promise(_0xdf4ea4 => setTimeout(_0xdf4ea4, 8000));
    if (_0x355016) {
      setTimeout(() => {
        _0x5a069e.setRotation(_0x355016.x, _0x355016.y, _0x355016.z, 1, true);
      }, 500);
    }
    if (_0xb79ef4) {
      for (mp.game.streaming.requestAnimDict(_0xb79ef4.dict); !mp.game.streaming.hasAnimDictLoaded(_0xb79ef4.dict);) {
        await mp.game.waitAsync(0);
      }
      _0x5a069e.taskPlayAnim(_0xb79ef4.dict, _0xb79ef4.name, 8, 0, -1, 1, 0, false, false, false);
    }
    if (_0x39ccda) {
      _0x5a069e.taskStartScenarioInPlace(_0x39ccda, -1, false);
    }
    _0x5a069e.setComponentVariation(8, 15, 0, 0);
    _0x5a069e.setComponentVariation(3, 0, 0, 0);
    _0x5a069e.setComponentVariation(11, 9, 0, 0);
    _0x5a069e.setComponentVariation(4, 5, 0, 0);
    _0x5a069e.setComponentVariation(6, 1, 0, 0);
    _0x5a069e.setComponentVariation(2, 52, 0, 0);
    _0x5a069e.setHeadOverlay(2, 0, 1, 1, 1);
    _0x5a069e.setEyeColor(0);
    _0x5a069e.setHairColor(0, 0);
    _0x5a069e.setHeadOverlay(1, 255, 1, 1, 1);
    _0x5a069e.setHeadBlendData(21, 0, 0, 21, 0, 0, 0.5, 0.5, 0, false);
  });
}
function CreateCutScene() {
  createObjects();
  createPeds();
  createCharacterPeds();
}
function createCharacterCameras() {
  character.cameras = {
    common: mp.cameras.new("character_common", new mp.Vector3(-1668.28369140625, 207.2678680419922, 61.895530700683594), new mp.Vector3(0.3037959039211273, 1.3340401672223834e-8, 125.99114990234375), 35),
    first: mp.cameras.new("character_first", new mp.Vector3(-1671.183349609375, 206.39036560058594, 61.8969612121582), new mp.Vector3(-0.835930347442627, 0, 165.7953338623047), 35),
    second: mp.cameras.new("character_second", new mp.Vector3(-1674.24560546875, 202.71961975097656, 61.70075988769531), new mp.Vector3(-1.8390921354293823, 2.6694173982377833e-8, -11.623079299926758), 35)
  };
}
function onDressPeds(_0x19fed0) {
  for (let _0x403f2e = 0; _0x403f2e < 2; _0x403f2e++) {
    if (_0x19fed0 && _0x19fed0[_0x403f2e]) {
      const _0x8af4a3 = mp.game.joaat(_0x19fed0 && _0x19fed0[_0x403f2e] && _0x19fed0[_0x403f2e].gender ? "mp_f_freemode_01" : "mp_m_freemode_01");
      character.peds[_0x403f2e].model = _0x8af4a3;
      if (_0x19fed0[_0x403f2e].gender) {
        const _0x1ff9eb = [{
          dict: "amb@prop_human_seat_chair@male@generic@base",
          name: "base"
        }, {
          dict: "amb@world_human_seat_steps@male@elbows_on_knees@base",
          name: "base"
        }];
        character.peds[_0x403f2e].taskPlayAnim(_0x1ff9eb[_0x403f2e].dict, _0x1ff9eb[_0x403f2e].name, 8, 0, -1, 1, 0, false, false, false);
      }
      let _0x5ebd8f = _0x19fed0[_0x403f2e].parents;
      let _0x5b6958 = _0x19fed0[_0x403f2e].facedata;
      let _0x58b1f8 = _0x19fed0[_0x403f2e].otherfacedata;
      if (_0x19fed0[_0x403f2e].gender) {
        character.peds[_0x403f2e].setComponentVariation(8, 10, 0, 0);
      } else {
        character.peds[_0x403f2e].setComponentVariation(8, 15, 0, 0);
      }
      character.peds[_0x403f2e].setComponentVariation(3, 0, 0, 0);
      _0x58b1f8.localhaircolor2 ||= 0;
      character.peds[_0x403f2e].setHeadBlendData(_0x5ebd8f.mother, _0x5ebd8f.father, 0, _0x5ebd8f.mother, _0x5ebd8f.father, 0, _0x5ebd8f.similiarity * 0.01, _0x5ebd8f.similiarity * 0.01, 0, false);
      character.peds[_0x403f2e].setEyeColor(_0x58b1f8.localeyecolor);
      character.peds[_0x403f2e].setHairColor(_0x58b1f8.localhaircolor, _0x58b1f8.localhaircolor2);
      for (let _0x383dee = 0; _0x383dee < 20; _0x383dee++) {
        if (_0x5b6958[_0x383dee] != null) {
          character.peds[_0x403f2e].setFaceFeature(_0x383dee, _0x5b6958[_0x383dee]);
        }
      }
      character.peds[_0x403f2e].setHeadOverlay(2, _0x58b1f8.localeyebrows, 1, 1, 1);
      character.peds[_0x403f2e].setHeadOverlayColor(2, 1, 1, 1);
      character.peds[_0x403f2e].setComponentVariation(2, _0x58b1f8.localhairstyle, 0, 0);
      _0x58b1f8.localbeardcolor ||= 0;
      character.peds[_0x403f2e].setHeadOverlay(1, _0x58b1f8.localbeard, 1, _0x58b1f8.localbeardcolor, 1);
      character.peds[_0x403f2e].setHeadOverlayColor(1, 1, _0x58b1f8.localbeardcolor, 1);
      if (_0x58b1f8.localmakeup != null) {
        character.peds[_0x403f2e].setHeadOverlay(4, _0x58b1f8.localmakeup, 1, 1, 1);
      }
      if (_0x58b1f8.localblush != null && _0x58b1f8.localblushcolor != null) {
        character.peds[_0x403f2e].setHeadOverlay(5, _0x58b1f8.localblush, 1, _0x58b1f8.localblushcolor, 1);
        character.peds[_0x403f2e].setHeadOverlayColor(5, 2, _0x58b1f8.localblushcolor, 1);
      }
      if (_0x58b1f8.locallipstick != null && _0x58b1f8.locallipstickcolor != null) {
        character.peds[_0x403f2e].setHeadOverlay(8, _0x58b1f8.locallipstick, 1, _0x58b1f8.locallipstickcolor, 1);
        character.peds[_0x403f2e].setHeadOverlayColor(8, 2, _0x58b1f8.locallipstickcolor, 1);
      }
      if (_0x58b1f8.localmoles != null) {
        character.peds[_0x403f2e].setHeadOverlay(9, _0x58b1f8.localmoles, 1, 1, 1);
      }
      if (_0x58b1f8.localchesthair != null) {
        character.peds[_0x403f2e].setHeadOverlay(10, _0x58b1f8.localchesthair, 1, 1, 1);
      }
      for (let _0x3f9ebe = 0; _0x3f9ebe < _0x19fed0[_0x403f2e].clothes.length; _0x3f9ebe++) {
        const _0x1bfbb4 = _0x19fed0[_0x403f2e].clothes[_0x3f9ebe];
        if (_0x1bfbb4.is_prop == 1) {
          character.peds[_0x403f2e].setPropIndex(_0x1bfbb4.componentNumber, _0x1bfbb4.drawable, _0x1bfbb4.texture, true);
        } else {
          character.peds[_0x403f2e].setComponentVariation(_0x1bfbb4.componentNumber, _0x1bfbb4.drawable, _0x1bfbb4.texture, _0x1bfbb4.palette);
        }
      }
    }
  }
}
let startCamera = null;
let endCamera = null;
let cutsceneCamLoopRunning = false;
let cutsceneEnding = false;
let cutsceneStreamingActive = false;
function setCutSceneStreamingFocus(_0xf1612e, _0x18af8c, _0xff6c9f) {
  RequestCollisionAtCoord(_0xf1612e, _0x18af8c, _0xff6c9f);
  SetFocusPosAndVel(_0xf1612e, _0x18af8c, _0xff6c9f, 0, 0, 0);
  cutsceneStreamingActive = true;
}
function clearCutSceneStreamingFocus() {
  if (cutsceneStreamingActive) {
    cutsceneStreamingActive = false;
    ClearFocus();
  }
}
function destroyCutSceneCameras() {
  if (startCamera && mp.cameras.exists(startCamera)) {
    startCamera.destroy();
  }
  if (endCamera && mp.cameras.exists(endCamera)) {
    endCamera.destroy();
  }
  startCamera = null;
  endCamera = null;
}
function ensureCutSceneCameras() {
  destroyCutSceneCameras();
  startCamera = mp.cameras.new("default", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
  endCamera = mp.cameras.new("default", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
}
function activateCutSceneScriptCamera(_0x23be4b) {
  return !!_0x23be4b && !!startCamera && !!mp.cameras.exists(startCamera) && (global.IS_FIVEM && (mp.game.gameplay.setFadeInAfterLoad(true), ShutdownLoadingScreen(), ShutdownLoadingScreenNui(), ClearDrawOrigin()), setCutSceneStreamingFocus(_0x23be4b.start.position.x, _0x23be4b.start.position.y, _0x23be4b.start.position.z), startCamera.setCoord(_0x23be4b.start.position.x, _0x23be4b.start.position.y, _0x23be4b.start.position.z), startCamera.setRot(_0x23be4b.start.rotation.x, _0x23be4b.start.rotation.y, _0x23be4b.start.rotation.z, 2), startCamera.setFov(_0x23be4b.start.fov), startCamera.setActive(true), mp.game.cam.renderScriptCams(true, true, 0, true, true), true);
}
const OnLoadPlayerInformation = async () => {
  if (onOpenedNewAuth) {
    return;
  }
  const _0x3ac696 = new Date();
  let _0x5edad6 = _0x3ac696.getUTCHours() + 3;
  const _0x49dad8 = _0x3ac696.getUTCMinutes();
  if (_0x5edad6 == 24) {
    _0x5edad6 = 0;
  } else if (_0x5edad6 == 25) {
    _0x5edad6 = 1;
  } else if (_0x5edad6 == 26) {
    _0x5edad6 = 2;
  } else if (_0x5edad6 == 27) {
    _0x5edad6 = 3;
  } else if (_0x5edad6 == 28) {
    _0x5edad6 = 4;
  }
  if (bHalloween2025) {
    mp.game.time.setClockTime(3, 0, 0);
  } else {
    mp.game.time.setClockTime(_0x5edad6, _0x49dad8, 0);
  }
  mp.discord.update("Playing Grand Role Play", "gta5grand.com");
  mp.game.ui.displayRadar(false);
  mp.game.gameplay.disableAutomaticRespawn(true);
  mp.game.gameplay.ignoreNextRestart(true);
  mp.game.gameplay.setFadeInAfterDeathArrest(false);
  mp.game.gameplay.setFadeOutAfterDeath(false);
  if (!global.IS_FIVEM) {
    mp.game.gameplay.setFadeInAfterLoad(false);
  }
  localplayer.freezePosition(true);
  localplayer.setAlpha(0);
  CreateCutScene();
  InteractWithCef("auth.show");
  mp.game.audio.startAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
  onOpenedNewAuth = true;
  onStartCutScene();
};
async function onStartCutScene() {
  if (!cutsceneCamLoopRunning) {
    cutsceneCamLoopRunning = true;
    try {
      InteractWithCef("auth.cutscene.start");
      mp.game.audio.stopAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
      cutscene.start = true;
      DoScreenFadeIn(100);
      ensureCutSceneCameras();
      const _0x52e6fa = camsData[0];
      if (_0x52e6fa && activateCutSceneScriptCamera(_0x52e6fa)) {
        await mp.game.waitAsync(50);
      }
      let _0x5e3321 = true;
      for (const _0x697af2 of camsData) {
        if (!cutscene.start) {
          return;
        }
        if (!_0x697af2 || !startCamera || !endCamera || !mp.cameras.exists(startCamera) || !mp.cameras.exists(endCamera)) {
          return;
        }
        if (bHalloween2025) {
          mp.game.time.setClockTime(3, 0, 0);
        }
        setCutSceneStreamingFocus(_0x697af2.start.position.x, _0x697af2.start.position.y, _0x697af2.start.position.z);
        startCamera.setCoord(_0x697af2.start.position.x, _0x697af2.start.position.y, _0x697af2.start.position.z);
        startCamera.setRot(_0x697af2.start.rotation.x, _0x697af2.start.rotation.y, _0x697af2.start.rotation.z, 2);
        startCamera.setFov(_0x697af2.start.fov);
        startCamera.setActive(true);
        if (!_0x5e3321) {
          mp.game.cam.renderScriptCams(true, true, 0, true, true);
          _0x5e3321 = true;
          await mp.game.waitAsync(100);
        }
        endCamera.setCoord(_0x697af2.end.position.x, _0x697af2.end.position.y, _0x697af2.end.position.z);
        endCamera.setRot(_0x697af2.end.rotation.x, _0x697af2.end.rotation.y, _0x697af2.end.rotation.z, 2);
        endCamera.setFov(_0x697af2.end.fov);
        endCamera.setActiveWithInterp(startCamera.handle, _0x697af2.speed, 0, 0);
        await new Promise(_0x4b1230 => setTimeout(_0x4b1230, _0x697af2.speed));
      }
      onStopCutScene();
    } finally {
      cutsceneCamLoopRunning = false;
    }
  }
}
function destroyCutsceneEntities() {
  if (cutscene) {
    cutscene.vehicles?.forEach(_0x491cd0 => mp.vehicles.exists(_0x491cd0) && _0x491cd0.destroy());
    cutscene.objects?.forEach(_0x1dd2f5 => mp.objects.exists(_0x1dd2f5) && _0x1dd2f5.destroy());
    cutscene.peds?.forEach(_0x5a9e05 => mp.peds.exists(_0x5a9e05) && _0x5a9e05.destroy());
  }
}
function onStopCutScene() {
  if (cutsceneEnding) {
    return;
  }
  cutsceneEnding = true;
  if (cutscene && cutscene.browser && mp.browsers.exists(cutscene.browser)) {
    cutscene.browser.destroy();
  }
  if (cutscene) {
    cutscene.start = false;
  }
  const _0x2822e5 = localplayer.position;
  RequestCollisionAtCoord(_0x2822e5.x, _0x2822e5.y, _0x2822e5.z);
  RenderScriptCams(false, true, 0, true, true);
  clearCutSceneStreamingFocus();
  localplayer.setAlpha(255);
  showLoginAfterCutscene();
}
function checkKeyPressingRules() {
  closeRulesOfServer();
}
function closeRulesOfServer() {
  if (mp.browsers.exists(cutscene.browser_rules) && cutscene.browser_rules != null) {
    cutscene.browser_rules.destroy();
    cutscene.browser_rules = null;
  }
  mp.keys.unbind(27, false, checkKeyPressingRules);
}
function showLoginAfterCutscene() {
  mp.gui.cursor.show(true, true);
  InteractWithCef("auth.cutscene.stop");
}
function showCameraAfterCutscene() {
  startCamera.setCoord(-1562.83837890625, 136.07029724121094, 71.51065826416016);
  startCamera.setRot(-7.486736297607422, 4.3055726450802467e-7, 48.49203872680664, 2);
  startCamera.setFov(35);
  startCamera.setActiveWithInterp(endCamera.handle, 1000, 0, 0);
}
function ShowLoginPage() {
  let _0x195027 = "";
  if (last_email) {
    _0x195027 = last_email;
  }
  if (auto_login == 1 && _0x195027) {
    const _0x58ad29 = "{\"show\":true}";
    main_browser.execute("APPS.state.auto_login = " + _0x58ad29);
    mp.events.callRemote("sendDataToServer", _0x195027, "", 0);
  } else {
    const _0x47b22c = "{\"login\":'" + _0x195027 + "',\"password\":'',\"opened\":true,\"in_quene\":0,\"show\":true}";
    main_browser.execute("APPS.state.login = " + _0x47b22c);
    mp.events.call("Disablechat");
  }
  FinishSpawnMenu(1);
}
function InteractWithCef(_0x4e4ee3) {
  switch (_0x4e4ee3) {
    case "auth.show":
      let _0x1db811 = false;
      if (mp.storage.data.lobbyMusicMuted) {
        _0x1db811 = true;
      }
      main_browser.execute("APPS.state.auth.soundOff = " + _0x1db811);
      main_browser.execute("APPS.state.auth.show = true");
      break;
    case "auth.cutscene.start":
      main_browser.execute("APPS.state.auth.page = 0");
      break;
    case "auth.cutscene.stop":
      main_browser.execute("APPS.state.auth.show = false");
      ShowLoginPage();
  }
}
mp.events.add("OnJoinPlayerClient", OnLoadPlayerInformation);
mp.events.add("client.auth.cutscene.show", () => {
  onStartCutScene();
});
mp.events.add("client.auth.cutscene.hide", () => {
  onStopCutScene();
});
mp.events.add("client.auth.autologin.destroy", () => {
  showLoginAfterCutscene();
});
mp.events.add("client.auth.rules.show", () => {
  if (cutscene.browser_rules == null) {
    cutscene.browser_rules = mp.browsers.new("https://forum.grand-rp.su/threads/387672/");
    if (mp.browsers.exists(cutscene.browser_rules)) {
      cutscene.browser_rules.execute("\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            const styles = document.createElement(\"style\");\n            styles.innerText = `@import url('https://fonts.cdnfonts.com/css/akrobat');.global-b-close{ position: absolute; right: 20px; top: 20px; display: flex; align-items: center; font-family: Akrobat; font-weight: 700; font-size: 18px; text-align: center; text-transform: uppercase; color: #fff; opacity: 0.4; transition: all 0.23232323s easy-in-out; -webkit-transition: all 0.23232323s ease-in-out; -moz-transition: all 0.23232323s ease-in-out; z-index: 22; } .global-b-close:after{ content: \"\"; background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M28.3333 0H3.66667C1.644 0 0 1.644 0 3.66667V28.3333C0 30.356 1.644 32 3.66667 32H28.3333C30.356 32 32 30.356 32 28.3333V3.66667C32 1.644 30.356 0 28.3333 0ZM11 15C11.552 15 12 15.448 12 16C12 16.552 11.552 17 11 17H7.33333V17.6667C7.33333 18.5853 8.08133 19.3333 9 19.3333H11C11.552 19.3333 12 19.7813 12 20.3333C12 20.8853 11.552 21.3333 11 21.3333H9C6.97733 21.3333 5.33333 19.6893 5.33333 17.6667V14.3333C5.33333 12.3107 6.97733 10.6667 9 10.6667H11C11.552 10.6667 12 11.1147 12 11.6667C12 12.2187 11.552 12.6667 11 12.6667H9C8.08133 12.6667 7.33333 13.4147 7.33333 14.3333V15H11ZM16.4933 15H16.84C18.5827 15 20 16.4173 20 18.16C20 19.9147 18.5827 21.3333 16.84 21.3333H14.3333C13.7813 21.3333 13.3333 20.8853 13.3333 20.3333C13.3333 19.7813 13.7813 19.3333 14.3333 19.3333H16.84C17.4787 19.3333 18 18.812 18 18.1733C18 17.5213 17.4787 17 16.84 17H16.4933C14.7507 17 13.3333 15.5827 13.3333 13.84C13.3333 12.084 14.7507 10.6667 16.4933 10.6667H19C19.552 10.6667 20 11.1147 20 11.6667C20 12.2187 19.552 12.6667 19 12.6667H16.4933C15.8547 12.6667 15.3333 13.188 15.3333 13.8267C15.3333 14.4787 15.8547 15 16.4933 15ZM25 19.3333H27C27.552 19.3333 28 19.7813 28 20.3333C28 20.8853 27.552 21.3333 27 21.3333H25C22.9773 21.3333 21.3333 19.6893 21.3333 17.6667V14.3333C21.3333 12.3107 22.9773 10.6667 25 10.6667H27C27.552 10.6667 28 11.1147 28 11.6667C28 12.2187 27.552 12.6667 27 12.6667H25C24.0813 12.6667 23.3333 13.4147 23.3333 14.3333V17.6667C23.3333 18.5853 24.0813 19.3333 25 19.3333Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A\"); background-size: 100% 100%; width: 32px; height: 32px; margin-left: 12px; } .global-b-close:hover{ opacity: 1; }`;\n            document.body.appendChild(styles);\n            const btn = document.createElement('span');\n            btn.classList.add(\"global-b-close\");\n            btn.innerHTML = 'Закрыть';\n            btn.onclick = function() {\n                mp.trigger('client.auth.rules.hide')\n            }\n            document.body.appendChild(btn);\n        });\n    ");
      mp.keys.bind(27, false, checkKeyPressingRules);
    }
  }
});
mp.events.add("client.auth.rules.hide", () => {
  closeRulesOfServer();
});
mp.events.add("client.auth.auth.login", (_0x3ed8b0, _0x73ae83) => {
  user.login = _0x3ed8b0;
  user.autologin = _0x73ae83;
  main_browser.execute("APPS.state.auth.login = '" + _0x3ed8b0 + "'");
});
mp.events.add("client.auth.register.send", _0x564f42 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.register.send", _0x564f42);
  }
});
mp.events.add("client.auth.auth.send", _0x5fea84 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.auth.send", _0x5fea84);
  }
});
mp.events.add("client.auth.forgot.send", _0xfcb209 => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.forgot.send", _0xfcb209);
  }
});
mp.events.add("client.auth.forgot_id.send", _0x35f2e9 => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.forgot_id.send", _0x35f2e9);
  }
});
mp.events.add("client.auth.forgot.need_code", _0x5b59e9 => {
  main_browser.execute("APPS.state.auth.need_show_email_code = " + _0x5b59e9);
});
mp.events.add("client.auth.forgot.to_auth", () => {
  main_browser.execute("APPS.state.auth.page = 1");
});
mp.events.add("client.auth.authenticator.send", _0x45a456 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.authenticator.send", _0x45a456);
  }
});
mp.events.add("client.auth.authenticator.show", _0x389173 => {
  if (user.last_type != "auth") {
    showCameraAfterCutscene();
  }
  mp.gui.cursor.show(true, true);
  user.last_type = "authenticator";
  main_browser.execute("APPS.state.auth.google_link = '" + _0x389173 + "';");
  InteractWithCef("authenticator.show");
});
mp.events.add("client.auth.auth.need_auth", () => {
  main_browser.execute("APPS.state.auth.need_show_authenticator = true");
});
mp.events.add("client.character.create.send", _0x88face => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.create.send", _0x88face);
  }
});
mp.events.add("client.character.bind.send", _0x472cd2 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.bind.send", _0x472cd2);
  }
});
mp.events.add("client.character.load.send", _0x3bc5bd => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.load.send", _0x3bc5bd);
  }
});
mp.events.add("client.auth.peds.show", (_0x106144, _0x500d81) => {
  mp.gui.cursor.show(true, true);
  createCharacterCameras();
  if (user.last_type === "") {
    character.cameras.common.setActiveWithInterp(endCamera.handle, 1000, 0, 0);
  } else {
    character.cameras.common.setActiveWithInterp(startCamera.handle, 1000, 0, 0);
  }
  if (_0x106144 != null) {
    onDressPeds(_0x106144);
    main_browser.execute("APPS.state.auth.character = " + JSON.stringify(_0x500d81));
  }
  InteractWithCef("character.show");
});
mp.events.add("client.auth.peds.camera", _0x40dbed => {
  if (character.activeCameraName === _0x40dbed) {
    return;
  }
  const _0x498ed4 = character.cameras[character.activeCameraName];
  const _0x3796bf = character.cameras[_0x40dbed];
  character.activeCameraName = _0x40dbed;
  _0x3796bf.setActiveWithInterp(_0x498ed4.handle, 500, 0, 0);
});
mp.events.add("client.spawn.camera.load", _0xd11b9d => {
  spawn.data = _0xd11b9d;
  spawn.firstCamera = mp.cameras.new("spawn_first", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
  spawn.secondCamera = mp.cameras.new("spawn_second", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
  const {
    position: _0x37330a
  } = mp.players.local;
  spawn.firstCamera.setCoord(_0x37330a.x, _0x37330a.y, _0x37330a.z + 480);
  spawn.firstCamera.pointAtCoord(_0x37330a.x, _0x37330a.y, _0x37330a.z);
  spawn.firstCamera.setActiveWithInterp(character.cameras[character.activeCameraName].handle, 1000, 0, 3);
  InteractWithCef("spawn.show");
});
mp.events.add("client.spawn.camera.hover", _0x542889 => {
  const _0x188f1b = spawn.data.findIndex(_0x1ac284 => _0x1ac284.name == _0x542889);
  if (_0x188f1b == -1) {
    return;
  }
  if (spawn.activeCameraName == _0x542889) {
    return;
  }
  spawn.activeCameraName = _0x542889;
  let _0x3c3833 = spawn.data[_0x188f1b];
  localplayer.position = new mp.Vector3(_0x3c3833.x, _0x3c3833.y, _0x3c3833.z + 20);
  const _0x5db5ef = spawn.firstCamera.getCoord();
  spawn.secondCamera.setCoord(_0x5db5ef.x, _0x5db5ef.y, _0x5db5ef.z);
  spawn.secondCamera.pointAtCoord(_0x5db5ef.x, _0x5db5ef.y, _0x5db5ef.z - 480);
  spawn.firstCamera.setCoord(_0x3c3833.x, _0x3c3833.y, _0x3c3833.z + 480);
  spawn.firstCamera.pointAtCoord(_0x3c3833.x, _0x3c3833.y, _0x3c3833.z);
  spawn.firstCamera.setActiveWithInterp(spawn.secondCamera.handle, 1000, 0, 0);
});
global.FinishSpawnMenu = function (_0x563ac9) {
  destroyCutsceneEntities();
  character.peds.forEach(_0x70f64c => mp.peds.exists(_0x70f64c) && _0x70f64c.destroy());
  onOpenedNewAuth = false;
  if (_0x563ac9 == 0) {
    mp.game.invoke("0xAAB3200ED59016BC", mp.players.local.handle, 1, 2);
    setTimeout(() => {
      mp.game.cam.renderScriptCams(false, false, 0, true, false);
      mp.game.invoke("0xD8295AF639FD9CB8", mp.players.local.handle);
    }, 600);
  }
  localplayer.setAlpha(255);
  if (character && character.cameras) {
    if (character.cameras.common && mp.cameras.exists(character.cameras.common)) {
      character.cameras.common.destroy();
    }
    if (character.cameras.first && mp.cameras.exists(character.cameras.first)) {
      character.cameras.first.destroy();
    }
    if (character.cameras.second && mp.cameras.exists(character.cameras.second)) {
      character.cameras.second.destroy();
    }
  }
  if (spawn) {
    if (spawn.secondCamera && mp.cameras.exists(spawn.secondCamera)) {
      spawn.secondCamera.destroy();
    }
    if (spawn.firstCamera && mp.cameras.exists(spawn.firstCamera)) {
      spawn.firstCamera.destroy();
    }
  }
  destroyCutSceneCameras();
};
mp.events.add("Client_AuthenticationSoundOff", () => {
  main_browser.execute("APPS.state.auth.soundOff = true;");
  mp.events.call("Enablechat");
});
global.last_email = "";
global.auto_login = false;
global.in_quene = false;
global.onAuthBrowserDomReady = function () {
  if (cutsceneEnding) {
    showLoginAfterCutscene();
  } else if (onOpenedNewAuth) {
    InteractWithCef("auth.show");
    if (cutscene.start) {
      InteractWithCef("auth.cutscene.start");
    }
  }
};