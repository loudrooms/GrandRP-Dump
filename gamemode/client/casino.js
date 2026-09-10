let renderTarget;
let handle_movie = null;
let joaat_screen = null;
let diamond_walls = false;
const SCREEN_DIAMONDS = "CASINO_DIA_PL";
const SCREEN_SKULLS = "CASINO_HLW_PL";
const SCREEN_SNOW = "CASINO_SNWFLK_PL";
const SCREEN_WIN = "CASINO_WIN_PL";
const targetName = "casinoscreen_01";
const targetModel = mp.game.joaat("vw_vwint01_video_overlay");
const textureDict = "Prop_Screen_Vinewood";
const textureName = "BG_Wall_Colour_4x4";
let casinoSlotData = {
  time: 1000,
  machinePositions: [{
    type: 1,
    x: 1135.1024169921875,
    y: 256.709716796875,
    z: -52.03075408935547,
    rz: 101.998046875
  }, {
    type: 1,
    x: 1120.8575439453125,
    y: 233.18858337402344,
    z: -50.84077453613281,
    rz: -104.99775695800781
  }, {
    type: 1,
    x: 1108.9188232421875,
    y: 239.50234985351562,
    z: -50.84078598022461,
    rz: -44.99958038330078
  }, {
    type: 1,
    x: 1105.031982421875,
    y: 230.81637573242188,
    z: -50.84077072143555,
    rz: -177.001220703125
  }, {
    type: 1,
    x: 1114.0848388671875,
    y: 235.03343200683594,
    z: -50.84077453613281,
    rz: -179.00137329101562
  }, {
    type: 2,
    x: 1134.7552490234375,
    y: 255.9905242919922,
    z: -52.03075408935547,
    rz: 30.999441146850586
  }, {
    type: 2,
    x: 1132.4876708984375,
    y: 247.59466552734375,
    z: -52.03075408935547,
    rz: 88.49937438964844
  }, {
    type: 2,
    x: 1109.5211181640625,
    y: 239.04225158691406,
    z: -50.84078598022461,
    rz: -29.499794006347656
  }, {
    type: 2,
    x: 1105.7384033203125,
    y: 230.33175659179688,
    z: -50.84077072143555,
    rz: 107.99896240234375
  }, {
    type: 2,
    x: 1120.756103515625,
    y: 232.42312622070312,
    z: -50.84077453613281,
    rz: -90.49939727783203
  }, {
    type: 2,
    x: 1114.8876953125,
    y: 234.52394104003906,
    z: -50.84077453613281,
    rz: 108.99903869628906
  }, {
    type: 3,
    x: 1133.948974609375,
    y: 256.10711669921875,
    z: -52.0307502746582,
    rz: -46.99979782104492
  }, {
    type: 3,
    x: 1132.41357421875,
    y: 248.33412170410156,
    z: -52.03075408935547,
    rz: 105.99855041503906
  }, {
    type: 3,
    x: 1105.5439453125,
    y: 229.40882873535156,
    z: -50.84077072143555,
    rz: 38.49977111816406
  }, {
    type: 3,
    x: 1110.232666015625,
    y: 238.7513427734375,
    z: -50.84078598022461,
    rz: -12.999954223632812
  }, {
    type: 3,
    x: 1114.5487060546875,
    y: 233.68020629882812,
    z: -50.84077453613281,
    rz: 33.99979019165039
  }, {
    type: 3,
    x: 1120.85302734375,
    y: 231.6873779296875,
    z: -50.84077072143555,
    rz: -73.99937438964844
  }, {
    type: 4,
    x: 1139.37109375,
    y: 252.4561767578125,
    z: -52.03075408935547,
    rz: 97.49907684326172
  }, {
    type: 4,
    x: 1132.109130859375,
    y: 249.05078125,
    z: -52.03075408935547,
    rz: 118.9986801147461
  }, {
    type: 4,
    x: 1133.8514404296875,
    y: 256.8948669433594,
    z: -52.0307502746582,
    rz: -115.99858856201172
  }, {
    type: 4,
    x: 1110.988037109375,
    y: 238.6630401611328,
    z: -50.84078598022461,
    rz: 0
  }, {
    type: 4,
    x: 1100.46630859375,
    y: 230.39248657226562,
    z: -50.84077072143555,
    rz: 44.49960708618164
  }, {
    type: 4,
    x: 1104.66650390625,
    y: 229.47808837890625,
    z: -50.84077453613281,
    rz: -30.99989128112793
  }, {
    type: 4,
    x: 1108.446533203125,
    y: 235.39356994628906,
    z: -50.84077453613281,
    rz: -179.0015106201172
  }, {
    type: 4,
    x: 1113.65576171875,
    y: 233.69044494628906,
    z: -50.84077453613281,
    rz: -34.49992752075195
  }, {
    type: 4,
    x: 1117.1199951171875,
    y: 230.25537109375,
    z: -50.84077453613281,
    rz: -176.5015106201172
  }, {
    type: 4,
    x: 1121.1380615234375,
    y: 230.99908447265625,
    z: -50.84077453613281,
    rz: -58.999629974365234
  }, {
    type: 5,
    x: 1134.55615234375,
    y: 257.2640075683594,
    z: -52.03075408935547,
    rz: 170.9969940185547
  }, {
    type: 5,
    x: 1138.998046875,
    y: 251.7522430419922,
    z: -52.03075408935547,
    rz: 29.49958610534668
  }, {
    type: 5,
    x: 1131.660400390625,
    y: 249.63453674316406,
    z: -52.03075408935547,
    rz: 135.99819946289062
  }, {
    type: 5,
    x: 1100.9368896484375,
    y: 230.99258422851562,
    z: -50.84077453613281,
    rz: 59.49959945678711
  }, {
    type: 5,
    x: 1111.7265625,
    y: 238.75173950195312,
    z: -50.84078598022461,
    rz: 12.99996566772461
  }, {
    type: 5,
    x: 1104.3472900390625,
    y: 230.33616638183594,
    z: -50.84077453613281,
    rz: -106.99888610839844
  }, {
    type: 5,
    x: 1109.1422119140625,
    y: 234.78053283691406,
    z: -50.84077453613281,
    rz: 106.9991455078125
  }, {
    type: 5,
    x: 1113.37841796875,
    y: 234.48037719726562,
    z: -50.84077072143555,
    rz: -104.99906158447266
  }, {
    type: 5,
    x: 1117.8211669921875,
    y: 229.77664184570312,
    z: -50.84077072143555,
    rz: 111.9986801147461
  }, {
    type: 6,
    x: 1138.1981201171875,
    y: 251.86956787109375,
    z: -52.03075408935547,
    rz: -45.4997444152832
  }, {
    type: 6,
    x: 1131.0672607421875,
    y: 250.08070373535156,
    z: -52.03075408935547,
    rz: 149.9978790283203
  }, {
    type: 6,
    x: 1112.40869140625,
    y: 239.02345275878906,
    z: -50.84078598022461,
    rz: 30.4997615814209
  }, {
    type: 6,
    x: 1121.614501953125,
    y: 230.38429260253906,
    z: -50.84077453613281,
    rz: -45.499813079833984
  }, {
    type: 6,
    x: 1117.5740966796875,
    y: 228.9528045654297,
    z: -50.84077072143555,
    rz: 34.49982452392578
  }, {
    type: 6,
    x: 1108.875244140625,
    y: 233.94735717773438,
    z: -50.84077453613281,
    rz: 33.99979019165039
  }, {
    type: 6,
    x: 1101.227783203125,
    y: 231.69332885742188,
    z: -50.84077453613281,
    rz: 75.49949645996094
  }, {
    type: 7,
    x: 1138.080810546875,
    y: 252.67027282714844,
    z: -52.03075408935547,
    rz: -118.99893951416016
  }, {
    type: 7,
    x: 1130.3834228515625,
    y: 250.3516082763672,
    z: -52.03075408935547,
    rz: 165.49742126464844
  }, {
    type: 7,
    x: 1101.32080078125,
    y: 232.4326629638672,
    z: -50.84077453613281,
    rz: 90.99922943115234
  }, {
    type: 7,
    x: 1108.02001953125,
    y: 233.9359130859375,
    z: -50.84077072143555,
    rz: -35.499839782714844
  }, {
    type: 7,
    x: 1116.7257080078125,
    y: 228.941162109375,
    z: -50.84077453613281,
    rz: -33.499881744384766
  }, {
    type: 8,
    x: 1138.8004150390625,
    y: 253.02676391601562,
    z: -52.03075408935547,
    rz: 170.9975128173828
  }, {
    type: 8,
    x: 1129.5975341796875,
    y: 250.44863891601562,
    z: -52.03075408935547,
    rz: 179.49769592285156
  }, {
    type: 8,
    x: 1113.0006103515625,
    y: 239.52088928222656,
    z: -50.840789794921875,
    rz: 46.499603271484375
  }, {
    type: 8,
    x: 1107.7371826171875,
    y: 234.7730712890625,
    z: -50.84077453613281,
    rz: -106.99908447265625
  }, {
    type: 8,
    x: 1116.4288330078125,
    y: 229.7194061279297,
    z: -50.84077453613281,
    rz: -102.49913024902344
  }, {
    type: 8,
    x: 1101.1824951171875,
    y: 233.19720458984375,
    z: -50.84077453613281,
    rz: -50.84077453613281
  }],
  reelsOffsets: [[-0.115, 0.047, 1.106], [0.005, 0.047, 1.106], [0.125, 0.047, 1.106]],
  machineData: [],
  playerSlotMachineToJoin: null,
  playerSlotMachineSeat: false,
  playerSlotMachineSeatID: 0,
  playerInteval: null,
  playerIntevalCount: 0,
  playerCamera: null
};
global.casinoSlotOpened = false;
global.CloseCasinoSlot = function () {
  if (casinoSlotOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.casino_slot.show = false;");
    casinoSlotOpened = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (casinoSlotData.playerCamera != null) {
      casinoSlotData.playerCamera.destroy();
      casinoSlotData.playerCamera = null;
    }
    mp.events.callRemote("casinoSlotUnSeat");
    casinoSlotData.playerSlotMachineSeatID = 0;
    casinoSlotData.playerIntevalCount = 0;
    casinoSlotData.playerSlotMachineSeat = false;
  }
};
mp.keys.bind(69, true, () => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (casinoSlotData.playerSlotMachineToJoin == null || casinoSlotData.playerSlotMachineSeat == 1) {
    return;
  }
  const _0x22df58 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].x, casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].y, casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].z, casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].rz, 0, -0.87, 1);
  const _0x2763e3 = casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].rz;
  mp.events.callRemote("Server_casinoSlotSeat", casinoSlotData.playerSlotMachineToJoin, casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineToJoin].type, _0x22df58.x, _0x22df58.y, _0x22df58.z - 0.25, _0x2763e3);
});
mp.events.add("Client_Casino_Change_Bet_Slot", () => {
  const _0x38d4e9 = getRandomInt(0, 3);
  if (_0x38d4e9 == 0) {
    play_animation(localplayer, "anim_casino_a@amb@casino@games@slots@male", "betidle_press_betone_a", 1, 2, true, true, true);
  } else if (_0x38d4e9 == 1) {
    play_animation(localplayer, "anim_casino_a@amb@casino@games@slots@male", "betidle_press_betone_b", 1, 2, true, true, true);
  } else if (_0x38d4e9 == 2) {
    play_animation(localplayer, "anim_casino_a@amb@casino@games@slots@male", "betidle_press_betone_c", 1, 2, true, true, true);
  }
});
mp.events.add("casinoSlotCollision", (_0x58f36d, _0x487308) => {
  casinoSlotData.machineData[_0x58f36d].machine.setCollision(_0x487308, _0x487308);
});
const mashineWinData = [[{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Звезды[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Звезды[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Клавитары[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Клавитары[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Молнии[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Молнии[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Злобы[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Злобы[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Бутылки[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Бутылки[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Рейнджеры[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Рейнджеры[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Микрофоны[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Микрофоны[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Суперзвёзды[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Суперзвёзды[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Анха[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Анха[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Фараона[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Фараона[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Ножа[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Ножа[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Бензопилы[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Бензопилы[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Вишни[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Алмазы[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Алмазы[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language["Россыпи алмазов"][curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language["Россыпи алмазов"][curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}], [{
  name: language.Сливы[curr_lang],
  type: 1,
  count: 2,
  coef: 2
}, {
  name: language.Сливы[curr_lang],
  type: 1,
  count: 3,
  coef: 5
}, {
  name: language.Гранаты[curr_lang],
  type: 2,
  count: 2,
  coef: 2
}, {
  name: language.Гранаты[curr_lang],
  type: 2,
  count: 3,
  coef: 5
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 2,
  coef: 3
}, {
  name: language.Арбуза[curr_lang],
  type: 3,
  count: 3,
  coef: 8
}, {
  name: language.Носка[curr_lang],
  type: 4,
  count: 2,
  coef: 4
}, {
  name: language.Носка[curr_lang],
  type: 4,
  count: 3,
  coef: 10
}, {
  name: language.Гранатомёта[curr_lang],
  type: 5,
  count: 2,
  coef: 5
}, {
  name: language.Гранатомёта[curr_lang],
  type: 5,
  count: 3,
  coef: 15
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 2,
  coef: 6
}, {
  name: language.Колокола[curr_lang],
  type: 7,
  count: 3,
  coef: 30
}]];
mp.events.add("Client_casinoSlotSeat", (_0x540552, _0x26fa2c, _0x2f986a, _0x27898b) => {
  casinoSlotData.playerSlotMachineSeatID = _0x540552;
  casinoSlotData.machineData[_0x540552].machine.setCollision(false, false);
  casinoSlotData.machineData[_0x540552].machine.setNoCollision(localplayer.handle, true);
  const _0x5b24ba = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x540552].x, casinoSlotData.machinePositions[_0x540552].y, casinoSlotData.machinePositions[_0x540552].z, casinoSlotData.machinePositions[_0x540552].rz, 0, -0.69, 1);
  const _0x14d816 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x540552].x, casinoSlotData.machinePositions[_0x540552].y, casinoSlotData.machinePositions[_0x540552].z, casinoSlotData.machinePositions[_0x540552].rz, 0, -0.15, 1);
  localplayer.freezePosition(true);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  casinoSlotData.playerCamera = mp.cameras.new("default", new mp.Vector3(_0x5b24ba.x, _0x5b24ba.y, _0x5b24ba.z + 0.1), new mp.Vector3(0, 0, casinoSlotData.machinePositions[_0x540552].rz), 40);
  casinoSlotData.playerCamera.pointAtCoord(_0x14d816.x, _0x14d816.y, _0x14d816.z);
  casinoSlotData.playerCamera.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 2000, true, false);
  main_browser.execute("APPS.state.hud.interact = false;");
  casinoSlotOpened = true;
  const _0xcf77f3 = {
    show: true,
    types_array: mashineWinData[_0x27898b],
    bet: 0,
    balance: _0x26fa2c,
    jackpot: _0x2f986a,
    bonus_money: 0
  };
  main_browser.execute("APPS.state.casino_slot = " + JSON.stringify(_0xcf77f3) + ";");
  casinoSlotData.playerSlotMachineSeat = true;
});
mp.events.add("Client_Casino_Spin_Slot", _0x553281 => {
  if (casinoSlotData.playerInteval == null) {
    if (parseInt(_0x553281) <= 0) {
      return main_browser.execute("APP.sendErrorMessage(\"" + language["Вы не указали размер ставки"][curr_lang] + "\")");
    } else {
      if (casinoSlotData.playerSlotMachineSeat != 0 && casinoSlotOpened && loggedin && !chatActive) {
        if (!(new Date().getTime() - lastCheck < 500)) {
          lastCheck = new Date().getTime();
          mp.events.callRemote("casinoSlotBetServer", _0x553281, casinoSlotData.machinePositions[casinoSlotData.playerSlotMachineSeatID].type);
        }
      }
      return;
    }
  }
});
mp.events.add("Client_Update_Slots_LocalMoney", _0x25aabf => {
  if (casinoSlotOpened && loggedin && !chatActive) {
    if (casino_localmoney_timeout) {
      main_browser.execute("APPS.state.casino_slot.bonus_money = 0;");
      clearTimeout(casino_localmoney_timeout);
      casino_localmoney_timeout = null;
    }
    main_browser.execute("APPS.state.casino_slot.bonus_money = " + _0x25aabf + ";");
    casino_localmoney_timeout = setTimeout(() => {
      casino_localmoney_timeout = null;
      main_browser.execute("APPS.state.casino_slot.bonus_money = 0;");
    }, 5000);
  }
});
mp.events.add("Client_ChangeBetMachineSlot", _0x260221 => {
  if (casinoSlotOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.casino_slot.bet = " + _0x260221 + ";");
  }
});
mp.events.add("updateBalance", _0x50870a => {
  if (casinoSlotOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.casino_slot.balance = " + _0x50870a + ";");
  }
});
mp.events.add("Client_Casino_Change_Bet_Custom", _0x493d9b => {
  if (casinoSlotOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeBetCasinoMachineSlot");
    }
  }
});
mp.events.add("casinoSlotSpin", (_0xf648f, _0x2406b6, _0x42d4aa, _0x190386, _0x401d73) => {
  const _0x302cde = _0xf648f;
  const _0x55703b = casinoSlotData.machinePositions[_0x302cde].type;
  const _0x69f9ed = mp.game.joaat("vw_prop_casino_slot_0" + _0x55703b + "b_reels");
  mp.game.streaming.requestModel(_0x69f9ed);
  let _0x50e8cc = 0;
  while (!mp.game.streaming.hasModelLoaded(_0x69f9ed) && _0x50e8cc < 50) {
    mp.game.wait(0);
    _0x50e8cc++;
  }
  let _0x122b42 = null;
  for (let _0xc22892 = 0; _0xc22892 < 3; _0xc22892++) {
    if (casinoSlotData.machineData[_0x302cde].reels[_0xc22892]) {
      casinoSlotData.machineData[_0x302cde].reels[_0xc22892].destroy();
    }
    _0x122b42 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x302cde].x, casinoSlotData.machinePositions[_0x302cde].y, casinoSlotData.machinePositions[_0x302cde].z, casinoSlotData.machinePositions[_0x302cde].rz, casinoSlotData.reelsOffsets[_0xc22892][0], casinoSlotData.reelsOffsets[_0xc22892][1], casinoSlotData.reelsOffsets[_0xc22892][2]);
    casinoSlotData.machineData[_0x302cde].reels[_0xc22892] = mp.objects.new(_0x69f9ed, new mp.Vector3(_0x122b42.x, _0x122b42.y, _0x122b42.z), {
      rotation: new mp.Vector3(0, 0, casinoSlotData.machinePositions[_0x302cde].rz)
    });
    casinoSlotData.machineData[_0x302cde].spinRot ||= [0, 0, 0];
    casinoSlotData.machineData[_0x302cde].spinRot[_0xc22892] = 0;
    casinoSlotData.machineData[_0x302cde].spinning[_0xc22892] = true;
  }
  if (casinoSlotData.playerInteval != null) {
    clearInterval(casinoSlotData.playerInteval);
    casinoSlotData.playerInteval = null;
  }
  casinoSlotData.playerInteval = setInterval(function () {
    casinoSlotData.machineData[_0x302cde].spinning[casinoSlotData.playerIntevalCount] = null;
    casinoSlotData.machineData[_0x302cde].reels[casinoSlotData.playerIntevalCount].destroy();
    const _0x2cb7b0 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x302cde].x, casinoSlotData.machinePositions[_0x302cde].y, casinoSlotData.machinePositions[_0x302cde].z, casinoSlotData.machinePositions[_0x302cde].rz, casinoSlotData.reelsOffsets[casinoSlotData.playerIntevalCount][0], casinoSlotData.reelsOffsets[casinoSlotData.playerIntevalCount][1], casinoSlotData.reelsOffsets[casinoSlotData.playerIntevalCount][2]);
    casinoSlotData.machineData[_0x302cde].reels[casinoSlotData.playerIntevalCount] = mp.objects.new(mp.game.joaat("vw_prop_casino_slot_0" + casinoSlotData.machinePositions[_0x302cde].type + "a_reels"), new mp.Vector3(_0x2cb7b0.x, _0x2cb7b0.y, _0x2cb7b0.z), {
      rotation: new mp.Vector3(_0x2406b6[casinoSlotData.playerIntevalCount] * 22.5, 0, casinoSlotData.machinePositions[_0x302cde].rz)
    });
    casinoSlotData.playerIntevalCount++;
    if (casinoSlotData.playerIntevalCount == 3) {
      casinoSlotData.playerIntevalCount = 0;
      if (casinoSlotData.playerInteval != null) {
        clearInterval(casinoSlotData.playerInteval);
      }
      casinoSlotData.playerInteval = null;
      if (_0x42d4aa > 0) {
        main_browser.execute("APPS.state.casino_slot.balance = " + _0x42d4aa + ";");
      }
      main_browser.execute("APPS.state.casino_slot.jackpot = " + _0x401d73 + ";");
      if (casinoSlotOpened == 1) {
        _0x190386 = parseInt(_0x190386);
        mp.events.callRemote("Server_casinoSlotFinish", _0x190386);
      }
    }
  }, casinoSlotData.time);
});
let p_wheelShape = mp.colshapes.newSphere(1111.099, 228.649, -49.636, 1.8);
p_wheelShape.wheelShape = true;
let casinoWheelData = {
  spinStart: false,
  luckyObject: null,
  rollCount360: 0,
  rollWin: 0,
  rollY: 0,
  toJoin: false
};
mp.keys.bind(69, true, () => {
  if (GlobalCheck() != 1 && casinoWheelData.toJoin != 0) {
    mp.events.callRemote("Server_OpenCasinoWheel");
  }
});
global.CasinoWheelOpened = false;
mp.events.add("Client_OpenWheelBrowser", (_0x178060, _0x27716c, _0x55197a) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x5cb2dc = "{\"is_free\":" + _0x178060 + ",\"hours\":" + _0x27716c + ",\"minute\":" + _0x55197a + ",\"show\":true}";
  main_browser.execute("APPS.state.casino_wheel = " + _0x5cb2dc);
  CasinoWheelOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCasinoWheel = function () {
  if (CasinoWheelOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.casino_wheel.show = false;");
    CasinoWheelOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_Casino_SpinWheel", () => {
  if (CasinoWheelOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("server_casinoWheelStart");
    }
  }
});
mp.events.add("CasinoWheel_Error", _0x18ab76 => {
  if (CasinoWheelOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x18ab76 + "');");
  }
});
mp.events.add("Client_CloseCasinoWheel", () => {
  if (CasinoWheelOpened && loggedin && !chatActive) {
    CloseCasinoWheel();
  }
});
casinoWheelData.luckyObject = mp.objects.new(mp.game.joaat("vw_prop_vw_luckywheel_02a"), new mp.Vector3(1111.052, 229.849, -49.141), {
  dimension: 0,
  rotation: new mp.Vector3(0, 0, 0)
});
mp.events.add("client_casinoWheelStart", _0x29f380 => {
  if (is_in_casino) {
    casinoWheelData.spinStart = true;
    casinoWheelData.rollWin = Number(_0x29f380) || 0;
    casinoWheelData.rollCount360 = 0;
    casinoWheelData.rollY = 0;
  }
});
let blackjackData = {
  tablePositions: [["vw_prop_casino_blckjack_01b", 1133.74, 266.6947, -52.04094], ["vw_prop_casino_blckjack_01b", 1148.74, 251.6947, -52.04094], ["vw_prop_casino_blckjack_01b", 1144.429, 247.3352, -52.041], ["vw_prop_casino_blckjack_01b", 1129.406, 262.3578, -52.041]],
  shapePositionOffset: [[1.388, 0.677, 1, 0], [1.157, -0.673, 1, 0], [-0.001, -1.178, 1, 0], [-1.16, -0.6623, 1, 0]],
  seatPositionOffsets: [[1.154, 0.0147, 1, 66.696], [0.462, -0.6703, 1, 17.796], [-0.493, -0.6523, 1, 336.539], [-1.165, 0.0317, 1, 282.648]],
  cameraPositionOffsets: [[1.083, 0.0373, 1, 66.483], [0.502, -0.7193, 1, 18.024], [-0.524, -0.6833, 1, 334.276], [-1.164, 0.0217, 1, 281.432]],
  ChipsModel: [["vw_prop_chip_10dollar_x1", 10], ["vw_prop_chip_50dollar_x1", 50], ["vw_prop_chip_100dollar_x1", 100], ["vw_prop_chip_500dollar_x1", 500], ["vw_prop_chip_1kdollar_x1", 1000], ["vw_prop_chip_1kdollar_x1", 1500]],
  betPositionOffsets: [[[[0.712625, 0.170625, 0.95, 72], [0.278125, -0.2571, 0.95, 12.96], [-0.30305, -0.2464, 0.95, -18.36], [-0.72855, 0.17345, 0.95, -79.2]], [[0.6658, 0.218375, 0.95, 64.8], [0.280375, -0.190375, 0.95, 29.16], [-0.257975, -0.19715, 0.95, -18.72], [-0.652825, 0.177525, 0.95, -68.76]]], [[[0.756775, 0.292775, 0.95, 74.52], [0.397775, -0.208525, 0.95, 32.04], [-0.186575, -0.2861, 0.95, -15.48], [-0.6783, 0.0744, 0.95, -57.6]], [[0.701875, 0.3439, 0.95, 72], [0.39715, -0.1354, 0.95, 32.04], [-0.141675, -0.237925, 0.95, -18], [-0.604425, 0.082575, 0.95, -64.8]]]],
  CardPositions: [[[[0.5737, 0.2376, 0.948025, 69.12], [0.562975, 0.2523, 0.94875, 67.8], [0.553875, 0.266325, 0.94955, 66.6], [0.5459, 0.282075, 0.9501, 70.44], [0.536125, 0.29645, 0.95085, 70.84], [0.524975, 0.30975, 0.9516, 67.88], [0.515775, 0.325325, 0.95235, 69.56]], [[0.2325, -0.1082, 0.94805, 22.11], [0.23645, -0.0918, 0.949, 22.32], [0.2401, -0.074475, 0.950225, 20.8], [0.244625, -0.057675, 0.951125, 19.8], [0.249675, -0.041475, 0.95205, 19.44], [0.257575, -0.0256, 0.9532, 26.28], [0.2601, -0.008175, 0.954375, 22.68]], [[-0.2359, -0.1091, 0.9483, -21.43], [-0.221025, -0.100675, 0.949, -20.16], [-0.20625, -0.092875, 0.949725, -16.92], [-0.193225, -0.07985, 0.950325, -23.4], [-0.1776, -0.072, 0.951025, -21.24], [-0.165, -0.060025, 0.951825, -23.76], [-0.14895, -0.05155, 0.95255, -19.44]], [[-0.5765, 0.2229, 0.9482, -67.03], [-0.558925, 0.2197, 0.949175, -69.12], [-0.5425, 0.213025, 0.9499, -64.44], [-0.525925, 0.21105, 0.95095, -67.68], [-0.509475, 0.20535, 0.9519, -63.72], [-0.491775, 0.204075, 0.952825, -68.4], [-0.4752, 0.197525, 0.9543, -64.44]], [[0.0293, 0.253, 0.950025, 0], [-0.093, 0.253, 0.950025, 0], [-0.193, 0.253, 0.950025, 0], [0.1293, 0.253, 0.950025, 0], [-0.293, 0.253, 0.950025, 0], [0.2293, 0.253, 0.950025, 0]]], [[[0.6083, 0.3523, 0.94795, 68.57], [0.598475, 0.366475, 0.948925, 67.52], [0.589525, 0.3807, 0.94975, 67.76], [0.58045, 0.39435, 0.950375, 67.04], [0.571975, 0.4092, 0.951075, 68.84], [0.5614, 0.4237, 0.951775, 65.96], [0.554325, 0.4402, 0.952525, 67.76]], [[0.3431, -0.0527, 0.94855, 22.11], [0.348575, -0.0348, 0.949425, 22], [0.35465, -0.018825, 0.9502, 24.44], [0.3581, -0.001625, 0.95115, 21.08], [0.36515, 0.015275, 0.952075, 25.96], [0.368525, 0.032475, 0.95335, 26.16], [0.373275, 0.0506, 0.9543, 28.76]], [[-0.116, -0.1501, 0.947875, -14.04], [-0.102725, -0.13795, 0.948525, -15.48], [-0.08975, -0.12665, 0.949175, -16.56], [-0.075025, -0.1159, 0.949875, -15.84], [-0.0614, -0.104775, 0.9507, -16.92], [-0.046275, -0.095025, 0.9516, -14.4], [-0.031425, -0.0846, 0.952675, -14.28]], [[-0.5205, 0.1122, 0.9478, -67.03], [-0.503175, 0.108525, 0.94865, -67.6], [-0.485125, 0.10475, 0.949175, -69.4], [-0.468275, 0.099175, 0.94995, -69.04], [-0.45155, 0.09435, 0.95085, -68.68], [-0.434475, 0.089725, 0.95145, -66.16], [-0.415875, 0.0846, 0.9523, -63.28]]]],
  CardObjects: [],
  BetObjects: [],
  pedModels: ["S_M_Y_Casino_01", "S_F_Y_Casino_01", "S_M_Y_Casino_01", "S_F_Y_Casino_01"],
  CardsModel: ["vw_prop_cas_card_club_ace", "vw_prop_cas_card_club_02", "vw_prop_cas_card_club_03", "vw_prop_cas_card_club_04", "vw_prop_cas_card_club_05", "vw_prop_cas_card_club_06", "vw_prop_cas_card_club_07", "vw_prop_cas_card_club_08", "vw_prop_cas_card_club_09", "vw_prop_cas_card_club_10", "vw_prop_cas_card_club_jack", "vw_prop_cas_card_club_queen", "vw_prop_cas_card_club_king", "vw_prop_cas_card_dia_ace", "vw_prop_cas_card_dia_02", "vw_prop_cas_card_dia_03", "vw_prop_cas_card_dia_04", "vw_prop_cas_card_dia_05", "vw_prop_cas_card_dia_06", "vw_prop_cas_card_dia_07", "vw_prop_cas_card_dia_08", "vw_prop_cas_card_dia_09", "vw_prop_cas_card_dia_10", "vw_prop_cas_card_dia_jack", "vw_prop_cas_card_dia_queen", "vw_prop_cas_card_dia_king", "vw_prop_cas_card_hrt_ace", "vw_prop_cas_card_hrt_02", "vw_prop_cas_card_hrt_03", "vw_prop_cas_card_hrt_04", "vw_prop_cas_card_hrt_05", "vw_prop_cas_card_hrt_06", "vw_prop_cas_card_hrt_07", "vw_prop_cas_card_hrt_08", "vw_prop_cas_card_hrt_09", "vw_prop_cas_card_hrt_10", "vw_prop_cas_card_hrt_jack", "vw_prop_cas_card_hrt_queen", "vw_prop_cas_card_hrt_king", "vw_prop_cas_card_spd_ace", "vw_prop_cas_card_spd_02", "vw_prop_cas_card_spd_03", "vw_prop_cas_card_spd_04", "vw_prop_cas_card_spd_05", "vw_prop_cas_card_spd_06", "vw_prop_cas_card_spd_07", "vw_prop_cas_card_spd_08", "vw_prop_cas_card_spd_09", "vw_prop_cas_card_spd_10", "vw_prop_cas_card_spd_jack", "vw_prop_cas_card_spd_queen", "vw_prop_cas_card_spd_king"],
  tableInfo: [],
  toJoin: null,
  toJoinSeatID: null,
  cameraBlackJack: null,
  cameraBlackJackCrupie: null
};
let casinoRouletteData = {
  tablePositions: [["vw_prop_casino_roulette_01b", 1148.9163818359375, 248.62892150878906, -52.03075408935547], ["vw_prop_casino_roulette_01b", 1143.677978515625, 251.36131286621094, -52.0307502746582], ["vw_prop_casino_roulette_01b", 1133.1802978515625, 262.3916320800781, -52.03075408935547], ["vw_prop_casino_roulette_01b", 1129.9976806640625, 266.93695068359375, -52.0307502746582]],
  pedModels: ["S_M_Y_Casino_01", "u_f_m_casinocash_01", "S_M_Y_Casino_01", "u_f_m_casinocash_01", "S_M_Y_Casino_01", "u_f_m_casinocash_01"],
  shapePositionOffset: [[-0.7, -1.28, 1, 0], [0.775, -1.68, 1, 0], [1.8, -0.63, 1, 90], [1.27, 1.05, 1, 180]],
  seatPositionOffsets: [[-0.2, -0.9, 1, 0], [0.775, -0.8, 1, 0], [1.4, -0.13, 1, 90], [0.8, 0.6, 1, 180]],
  tableInfo: [],
  toJoin: null,
  toJoinSeatID: null,
  join: null,
  cameraRoulette: null,
  chipOffsets: [{
    name: "ZERO",
    position_x: -0.13,
    position_y: -0.11,
    position_z: 0.9448,
    marker_list: [36]
  }, {
    name: "Double Zero",
    position_x: -0.13,
    position_y: 0.11,
    position_z: 0.9448,
    marker_list: [37]
  }, {
    name: "Red",
    position_x: 0.265,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [0, 2, 4, 6, 8, 11, 13, 15, 17, 18, 20, 22, 24, 26, 29, 31, 33, 35]
  }, {
    name: "Black",
    position_x: 0.405,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [1, 3, 5, 7, 9, 10, 12, 14, 16, 19, 21, 23, 25, 27, 28, 30, 32, 34]
  }, {
    name: "Even",
    position_x: 0.12,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]
  }, {
    name: "Odd",
    position_x: 0.55,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34]
  }, {
    name: "1 to 18",
    position_x: -0.02,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  }, {
    name: "19 to 36",
    position_x: 0.68,
    position_y: -0.31,
    position_z: 0.9448,
    marker_list: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
  }, {
    name: "1st 12",
    position_x: 0.05,
    position_y: -0.245,
    position_z: 0.9448,
    marker_list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }, {
    name: "2nd 12",
    position_x: 0.34,
    position_y: -0.245,
    position_z: 0.9448,
    marker_list: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  }, {
    name: "3rd 12",
    position_x: 0.65,
    position_y: -0.245,
    position_z: 0.9448,
    marker_list: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
  }, {
    name: "2to1",
    position_x: 0.795,
    position_y: -0.15,
    position_z: 0.9448,
    marker_list: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]
  }, {
    name: "2to1",
    position_x: 0.795,
    position_y: 0,
    position_z: 0.9448,
    marker_list: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
  }, {
    name: "2to1",
    position_x: 0.795,
    position_y: 0.15,
    position_z: 0.9448,
    marker_list: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]
  }, {
    name: "1",
    position_x: -0.05,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [0]
  }, {
    name: "2",
    position_x: -0.05,
    position_y: -0.0040000000000000036,
    position_z: 0.9448,
    marker_list: [1]
  }, {
    name: "3",
    position_x: -0.05,
    position_y: 0.14200000000000002,
    position_z: 0.9448,
    marker_list: [2]
  }, {
    name: "4",
    position_x: 0.02,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [3]
  }, {
    name: "5",
    position_x: 0.02,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [4]
  }, {
    name: "6",
    position_x: 0.02,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [5]
  }, {
    name: "7",
    position_x: 0.09,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [6]
  }, {
    name: "8",
    position_x: 0.09,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [7]
  }, {
    name: "9",
    position_x: 0.09,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [8]
  }, {
    name: "10",
    position_x: 0.16,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [9]
  }, {
    name: "11",
    position_x: 0.16,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [10]
  }, {
    name: "12",
    position_x: 0.16,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [11]
  }, {
    name: "13",
    position_x: 0.23,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [12]
  }, {
    name: "14",
    position_x: 0.23,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [13]
  }, {
    name: "15",
    position_x: 0.23,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [14]
  }, {
    name: "16",
    position_x: 0.3,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [15]
  }, {
    name: "17",
    position_x: 0.3,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [16]
  }, {
    name: "18",
    position_x: 0.3,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [17]
  }, {
    name: "19",
    position_x: 0.37,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [18]
  }, {
    name: "20",
    position_x: 0.37,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [19]
  }, {
    name: "21",
    position_x: 0.37,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [20]
  }, {
    name: "22",
    position_x: 0.44,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [21]
  }, {
    name: "23",
    position_x: 0.44,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [22]
  }, {
    name: "24",
    position_x: 0.44,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [23]
  }, {
    name: "25",
    position_x: 0.51,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [24]
  }, {
    name: "26",
    position_x: 0.51,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [25]
  }, {
    name: "27",
    position_x: 0.51,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [26]
  }, {
    name: "28",
    position_x: 0.58,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [27]
  }, {
    name: "29",
    position_x: 0.58,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [28]
  }, {
    name: "30",
    position_x: 0.58,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [29]
  }, {
    name: "31",
    position_x: 0.65,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [30]
  }, {
    name: "32",
    position_x: 0.65,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [31]
  }, {
    name: "33",
    position_x: 0.65,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [32]
  }, {
    name: "34",
    position_x: 0.72,
    position_y: -0.155,
    position_z: 0.9448,
    marker_list: [33]
  }, {
    name: "35",
    position_x: 0.72,
    position_y: -0.004,
    position_z: 0.9448,
    marker_list: [34]
  }, {
    name: "36",
    position_x: 0.72,
    position_y: 0.142,
    position_z: 0.9448,
    marker_list: [35]
  }],
  markerOffsets: [{
    position_x: -0.056,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: -0.056,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: -0.056,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.0239,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.024,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: 0.0239,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.103,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: 0.104,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.105,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.187,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.186,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.185,
    position_y: 0.143,
    position_z: 0.9448
  }, {
    position_x: 0.267,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.268,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.266,
    position_y: 0.143,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.43,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.431,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.431,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.512,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.512,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.511,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: 0.14,
    position_z: 0.9448
  }, {
    position_x: 0.675,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: 0.675,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.674,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.756,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.754,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.755,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.836,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.836,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: 0.835,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: -0.137,
    position_y: -0.146,
    position_z: 0.9448
  }, {
    position_x: -0.138,
    position_y: 0.105,
    position_z: 0.9448
  }],
  objectOffsets: [{
    position_x: -0.126,
    position_y: -0.14,
    position_z: 0.9448
  }, {
    position_x: -0.13,
    position_y: 0.11,
    position_z: 0.9448
  }, {
    position_x: 0.295,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: 0.45,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: 0.13,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: 0.65,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: -0.01,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: 0.77,
    position_y: -0.38,
    position_z: 0.9448
  }, {
    position_x: 0.1,
    position_y: -0.3,
    position_z: 0.9448
  }, {
    position_x: 0.4,
    position_y: -0.3,
    position_z: 0.9448
  }, {
    position_x: 0.7,
    position_y: -0.3,
    position_z: 0.9448
  }, {
    position_x: 0.92,
    position_y: -0.2,
    position_z: 0.9448
  }, {
    position_x: 0.93,
    position_y: -0.01,
    position_z: 0.9448
  }, {
    position_x: 0.94,
    position_y: 0.17,
    position_z: 0.9448
  }, {
    position_x: -0.056,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: -0.056,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: -0.056,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.0239,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.024,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: 0.0239,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.103,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: 0.104,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.105,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.187,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.186,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.185,
    position_y: 0.143,
    position_z: 0.9448
  }, {
    position_x: 0.267,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.268,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.266,
    position_y: 0.143,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.349,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.43,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.431,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.431,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.512,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.512,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.511,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.593,
    position_y: 0.14,
    position_z: 0.9448
  }, {
    position_x: 0.675,
    position_y: -0.189,
    position_z: 0.9448
  }, {
    position_x: 0.675,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.674,
    position_y: 0.141,
    position_z: 0.9448
  }, {
    position_x: 0.756,
    position_y: -0.187,
    position_z: 0.9448
  }, {
    position_x: 0.754,
    position_y: -0.023,
    position_z: 0.9448
  }, {
    position_x: 0.755,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: 0.836,
    position_y: -0.188,
    position_z: 0.9448
  }, {
    position_x: 0.836,
    position_y: -0.024,
    position_z: 0.9448
  }, {
    position_x: 0.835,
    position_y: 0.142,
    position_z: 0.9448
  }, {
    position_x: -0.137,
    position_y: -0.146,
    position_z: 0.9448
  }, {
    position_x: -0.138,
    position_y: 0.105,
    position_z: 0.9448
  }],
  lastHoverID: null,
  hoverObjects: [],
  ballObject: [],
  ballSoundID: [],
  betObject: [],
  spinTable: [],
  spinWinTable: []
};
global.casinoBlackJackOpened = false;
global.CloseCasinoBlackJack = function () {
  if (casinoBlackJackOpened && loggedin && !chatActive) {
    mp.events.callRemote("server_blackjackTableUnSeat");
  }
};
global.casinoRouletteOpened = false;
global.CloseCasinoRoulette = function () {
  if (!casinoRouletteOpened || !loggedin || chatActive) {
    return;
  }
  main_browser.execute("APPS.state.casino_roulette.show = false;");
  casinoRouletteOpened = false;
  localplayer.freezePosition(false);
  is_freezed = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (casinoRouletteData.cameraRoulette != null) {
    casinoRouletteData.cameraRoulette.destroy();
    casinoRouletteData.cameraRoulette = null;
  }
  if (casinoRouletteData.betObject[casinoRouletteData.join] != null) {
    casinoRouletteData.betObject[casinoRouletteData.join].destroy();
    casinoRouletteData.betObject[casinoRouletteData.join] = null;
  }
  if (casinoRouletteData.hoverObjects.length > 0) {
    destroyMarkersRoulette();
  }
  let _0x4f0e31 = casinoRouletteData.join;
  setTimeout(() => {
    casinoRouletteData.tableInfo[_0x4f0e31].table.setCollision(true, true);
  }, 3000);
  casinoRouletteData.toJoin = null;
  casinoRouletteData.toJoinSeatID = null;
  casinoRouletteData.join = null;
  casinoRouletteData.lastHoverID = null;
  mp.events.callRemote("server_roulleteTableUnSeat");
};
casinoRouletteData.ballObject = new Array(casinoRouletteData.tablePositions.length);
casinoRouletteData.betObject = new Array(casinoRouletteData.tablePositions.length);
casinoRouletteData.spinTable = new Array(casinoRouletteData.tablePositions.length);
casinoRouletteData.spinWinTable = new Array(casinoRouletteData.tablePositions.length);
casinoRouletteData.ballSoundID = new Array(casinoRouletteData.tablePositions.length);
let casino_localmoney_timeout;
let last_sound_id;
let current_roulette_bet = 100;
function TakeCardFromDesk(_0x12a72e, _0x3ae51b, _0x5803d3) {
  setTimeout(() => {
    if (blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0] && mp.objects.exists(blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0])) {
      const _0x23ad45 = blackjackData.tableInfo[_0x12a72e].ped.getBoneIndex(28422);
      blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0].attachTo(blackjackData.tableInfo[_0x12a72e].ped.handle, _0x23ad45, 0, 0, 0, 0, 0, 0, false, false, false, true, 2, true);
    }
    for (let _0x4b3fa5 = 1; _0x4b3fa5 < blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3].length; _0x4b3fa5++) {
      if (blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x4b3fa5] && mp.objects.exists(blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x4b3fa5])) {
        blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x4b3fa5].destroy();
      }
    }
    if (_0x3ae51b < 4) {
      for (let _0x5681fb = 0; _0x5681fb < blackjackData.BetObjects[_0x12a72e][_0x3ae51b][_0x5803d3].length; _0x5681fb++) {
        if (blackjackData.BetObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x5681fb] && mp.objects.exists(blackjackData.BetObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x5681fb])) {
          blackjackData.BetObjects[_0x12a72e][_0x3ae51b][_0x5803d3][_0x5681fb].destroy();
        }
      }
      blackjackData.BetObjects[_0x12a72e][_0x3ae51b][_0x5803d3] = [];
    }
    setTimeout(() => {
      if (blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0] && mp.objects.exists(blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0])) {
        blackjackData.CardObjects[_0x12a72e][_0x3ae51b][_0x5803d3][0].destroy();
      }
      if (_0x3ae51b == 4) {
        blackjackData.CardObjects[_0x12a72e] = [];
        blackjackData.BetObjects[_0x12a72e] = [];
        for (let _0x285435 = 0; _0x285435 < 5; _0x285435++) {
          blackjackData.CardObjects[_0x12a72e][_0x285435] = [];
          for (let _0x2bebfb = 0; _0x2bebfb < 2; _0x2bebfb++) {
            blackjackData.CardObjects[_0x12a72e][_0x285435][_0x2bebfb] = [];
          }
          if (_0x285435 < 4) {
            blackjackData.BetObjects[_0x12a72e][_0x285435] = [];
            for (let _0x4aaa7f = 0; _0x4aaa7f < 2; _0x4aaa7f++) {
              blackjackData.BetObjects[_0x12a72e][_0x285435][_0x4aaa7f] = [];
            }
          }
        }
      }
    }, 800);
  }, 800);
}
function SetDealerAnimation(_0x2eef1f, _0x3cafea, _0x31274e, _0x2019e5) {
  if (_0x3cafea) {
    switch (_0x31274e) {
      case 0:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_place_bet_request" : "place_bet_request", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 1:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_self" : "deal_card_self", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 2:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_self_second_card" : "deal_card_self_second_card", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 3:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_retrieve_own_cards_and_remove" : "retrieve_own_cards_and_remove", 8, 0, -1, 0, 0, true, true, true);
        TakeCardFromDesk(_0x2eef1f, 4, _0x2019e5);
        break;
      case 4:
        TakeCardFromDesk(_0x2eef1f, 0, _0x2019e5);
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_retrieve_cards_player_01" : "retrieve_cards_player_01", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 5:
        TakeCardFromDesk(_0x2eef1f, 1, _0x2019e5);
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_retrieve_cards_player_02" : "retrieve_cards_player_02", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 6:
        TakeCardFromDesk(_0x2eef1f, 2, _0x2019e5);
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_retrieve_cards_player_03" : "retrieve_cards_player_03", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 7:
        TakeCardFromDesk(_0x2eef1f, 3, _0x2019e5);
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_retrieve_cards_player_04" : "retrieve_cards_player_04", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 8:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_self_card_10" : "deal_card_self_card_10", 8, 0, -1, 0, 0, true, true, true);
    }
  } else {
    switch (_0x31274e) {
      case 0:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_player_01" : "deal_card_player_01", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 1:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_player_02" : "deal_card_player_02", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 2:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_player_03" : "deal_card_player_03", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 3:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_deal_card_player_04" : "deal_card_player_04", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 4:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_intro" : "dealer_focus_player_01_idle_intro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle" : "dealer_focus_player_01_idle", 8, 0, -1, 0, 0, true, true, true);
        }, 1000);
        break;
      case 5:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_intro" : "dealer_focus_player_02_idle_intro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle" : "dealer_focus_player_02_idle", 8, 0, -1, 0, 0, true, true, true);
        }, 1000);
        break;
      case 6:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_intro" : "dealer_focus_player_03_idle_intro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle" : "dealer_focus_player_03_idle", 8, 0, -1, 0, 0, true, true, true);
        }, 1000);
        break;
      case 7:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_intro" : "dealer_focus_player_04_idle_intro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle" : "dealer_focus_player_04_idle", 8, 0, -1, 0, 0, true, true, true);
        }, 1000);
        break;
      case 8:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_outro" : "dealer_focus_player_01_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 9:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_outro" : "dealer_focus_player_02_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 10:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_outro" : "dealer_focus_player_03_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 11:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_outro" : "dealer_focus_player_04_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 12:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_split_card_player_01" : "split_card_player_01", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 13:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_split_card_player_02" : "split_card_player_02", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 14:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_split_card_player_03" : "split_card_player_03", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 15:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_split_card_player_04" : "split_card_player_04", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 16:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_outro_split" : "dealer_focus_player_01_idle_outro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 17:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_outro_split" : "dealer_focus_player_02_idle_outro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 18:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_outro_split" : "dealer_focus_player_03_idle_outro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 19:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_outro_split" : "dealer_focus_player_04_idle_outro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 20:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_intro_split" : "dealer_focus_player_01_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 21:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_intro_split" : "dealer_focus_player_02_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 22:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_intro_split" : "dealer_focus_player_03_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 23:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_intro_split" : "dealer_focus_player_04_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        break;
      case 24:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_outro" : "dealer_focus_player_01_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_01_idle_intro_split" : "dealer_focus_player_01_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        }, 1500);
        break;
      case 25:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_outro" : "dealer_focus_player_02_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_02_idle_intro_split" : "dealer_focus_player_02_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        }, 1500);
        break;
      case 26:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_outro" : "dealer_focus_player_03_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_03_idle_intro_split" : "dealer_focus_player_03_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        }, 1500);
        break;
      case 27:
        blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_outro" : "dealer_focus_player_04_idle_outro", 8, 0, -1, 0, 0, true, true, true);
        setTimeout(() => {
          blackjackData.tableInfo[_0x2eef1f].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x2eef1f % 2 ? "female_dealer_focus_player_04_idle_intro_split" : "dealer_focus_player_04_idle_intro_split", 8, 0, -1, 0, 0, true, true, true);
        }, 1500);
    }
  }
}
function destroyMarkersRoulette() {
  casinoRouletteData.hoverObjects.forEach(_0x27d29d => {
    _0x27d29d.destroy();
  });
  casinoRouletteData.hoverObjects = [];
}
mp.events.add("playerEnterColshape", _0x25f60a => {
  if (_0x25f60a.RouletteShape !== undefined) {
    casinoRouletteData.toJoin = _0x25f60a.RouletteShape;
    casinoRouletteData.toJoinSeatID = _0x25f60a.RouletteShapeSeatID;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_0x25f60a.BlackJackShape !== undefined) {
    blackjackData.toJoin = _0x25f60a.BlackJackShape;
    blackjackData.toJoinSeatID = _0x25f60a.BlackJackShapeSeatID;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_0x25f60a.PokerJackShape !== undefined) {
    PokerData.toJoin = _0x25f60a.PokerJackShape;
    PokerData.toJoinSeatID = _0x25f60a.PokerJackShapeSeatID;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_0x25f60a.horse_slot !== undefined) {
    seat_horse_slot = _0x25f60a.horse_slot;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_0x25f60a.casinoSlotMachime !== undefined) {
    casinoSlotData.playerSlotMachineToJoin = _0x25f60a.casinoSlotMachime;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_0x25f60a.wheelShape !== undefined) {
    casinoWheelData.toJoin = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
});
mp.events.add("playerExitColshape", _0x44c074 => {
  if (_0x44c074.RouletteShape !== undefined) {
    casinoRouletteData.toJoin = null;
    casinoRouletteData.toJoinSeatID = null;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x44c074.BlackJackShape !== undefined) {
    blackjackData.toJoin = null;
    blackjackData.toJoinSeatID = null;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x44c074.PokerJackShape !== undefined) {
    PokerData.toJoin = null;
    PokerData.toJoinSeatID = null;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x44c074.horse_slot !== undefined) {
    seat_horse_slot = undefined;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x44c074.casinoSlotMachime !== undefined) {
    casinoSlotData.playerSlotMachineToJoin = null;
    main_browser.execute("APPS.state.hud.interact = false;");
  } else if (_0x44c074.wheelShape !== undefined) {
    casinoWheelData.toJoin = false;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
mp.events.add("Client_Casino_BlackJack_Rate", _0x5dd0e8 => {
  if (blackjackData.join != null && casinoBlackJackOpened && loggedin && !chatActive && dialog_window != 1) {
    if (parseInt(_0x5dd0e8) <= 0) {
      return main_browser.execute("APP.sendErrorMessage(\"" + language["Вы не указали размер ставки"][curr_lang] + "\")");
    } else {
      if (!(new Date().getTime() - lastCheck < 500)) {
        lastCheck = new Date().getTime();
        mp.events.callRemote("server_blackJackBet", blackjackData.join, _0x5dd0e8);
      }
      return;
    }
  }
});
mp.events.add("click", (_0x22b6d2, _0x2200ae, _0x1eba15) => {
  if (casinoRouletteData.lastHoverID != null && casinoRouletteData.join != null && _0x1eba15 == "down") {
    if (!(current_roulette_bet <= 0)) {
      if (casinoRouletteData.betObject[casinoRouletteData.join] == null && dialog_window != 1) {
        if (!(new Date().getTime() - lastCheck < 500)) {
          lastCheck = new Date().getTime();
          mp.events.callRemote("server_roulleteBet", casinoRouletteData.join, casinoRouletteData.lastHoverID, current_roulette_bet);
        }
      }
    }
  }
});
mp.events.add("Client_SendActionPedBlackJack", (_0x4f3901, _0x56f961, _0x416ca5, _0x41e502, _0x231a02, _0x3cda63, _0x2da3b5 = 0) => {
  if (!is_in_casino) {
    return;
  }
  if (!blackjackData.tableInfo[_0x4f3901]) {
    return;
  }
  if (!_0x41e502) {
    return SetDealerAnimation(_0x4f3901, _0x416ca5, _0x56f961, _0x2da3b5);
  }
  if (_0x3cda63 > 6) {
    return;
  }
  const _0x15757e = JSON.parse(_0x41e502);
  if (_0x4f3901 < 0 || _0x4f3901 > 3) {
    return;
  }
  let _0x3de791 = mp.game.object.getObjectOffsetFromCoords(blackjackData.tablePositions[_0x4f3901][1], blackjackData.tablePositions[_0x4f3901][2], blackjackData.tablePositions[_0x4f3901][3], blackjackData.tableInfo[_0x4f3901].table.getRotation(2).z, 0.526, 0.571, 0.963);
  const _0x142426 = blackjackData.tableInfo[_0x4f3901].ped.getBoneIndex(_0x15757e.Bone);
  const _0x3e2c52 = mp.objects.new(mp.game.joaat(blackjackData.CardsModel[_0x15757e.Model]), new mp.Vector3(_0x3de791.x, _0x3de791.y, _0x3de791.z), {
    rotation: new mp.Vector3(blackjackData.tableInfo[_0x4f3901].table.getRotation(2).z, 164.52, 11.5),
    alpha: 255,
    dimension: 0
  });
  _0x3e2c52.setCollision(false, false);
  SetDealerAnimation(_0x4f3901, _0x416ca5, _0x56f961, _0x2da3b5);
  setTimeout(function () {
    if (_0x3e2c52 && mp.objects.exists(_0x3e2c52)) {
      _0x3e2c52.attachTo(blackjackData.tableInfo[_0x4f3901].ped.handle, _0x142426, _0x15757e.PosOffset1, _0x15757e.PosOffset2, _0x15757e.PosOffset3, _0x15757e.RotOffset1, _0x15757e.RotOffset2, _0x15757e.RotOffset3, false, false, false, true, 2, true);
      setTimeout(() => {
        if (_0x3e2c52 && mp.objects.exists(_0x3e2c52) && _0x3e2c52 != null) {
          _0x3e2c52.destroy();
        }
        blackjackData.CardObjects[_0x4f3901][_0x231a02][_0x2da3b5][_0x3cda63] = mp.objects.new(mp.game.joaat(blackjackData.CardsModel[_0x15757e.Model]), blackjackData.tableInfo[_0x4f3901].table.getOffsetFromInWorldCoords(blackjackData.CardPositions[_0x2da3b5][_0x231a02][_0x3cda63][0], blackjackData.CardPositions[_0x2da3b5][_0x231a02][_0x3cda63][1], blackjackData.CardPositions[_0x2da3b5][_0x231a02][_0x3cda63][2]), {
          rotation: new mp.Vector3(_0x416ca5 && _0x56f961 == 1 ? 180 : 0, 0, blackjackData.CardPositions[_0x2da3b5][_0x231a02][_0x3cda63][3])
        });
      }, _0x416ca5 ? 700 : 820);
    }
  }, 650);
});
mp.events.add("Client_SendActionPedBlackJackSplit", (_0x1ebcd3, _0x55519c, _0x117b62, _0x261777) => {
  if (is_in_casino) {
    SetDealerAnimation(_0x1ebcd3, false, _0x55519c);
    setTimeout(function () {
      if (blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0][1] && mp.objects.exists(blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0][1])) {
        const _0x32644a = blackjackData.tableInfo[_0x1ebcd3].ped.getBoneIndex(28422);
        blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0][1].attachTo(blackjackData.tableInfo[_0x1ebcd3].ped.handle, _0x32644a, 0, 0, 0, 0, 0, 0, false, false, false, true, 2, true);
        setTimeout(() => {
          if (mp.objects.exists(blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0][1])) {
            blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0][1].destroy();
          }
          blackjackData.CardObjects[_0x1ebcd3][_0x117b62][0].splice(1, 1);
          blackjackData.CardObjects[_0x1ebcd3][_0x117b62][1][0] = mp.objects.new(mp.game.joaat(blackjackData.CardsModel[_0x261777]), blackjackData.tableInfo[_0x1ebcd3].table.getOffsetFromInWorldCoords(blackjackData.CardPositions[1][_0x117b62][0][0], blackjackData.CardPositions[1][_0x117b62][0][1], blackjackData.CardPositions[1][_0x117b62][0][2]), {
            rotation: new mp.Vector3(0, 0, blackjackData.CardPositions[1][_0x117b62][0][3])
          });
        }, 600);
      }
    }, 600);
  }
});
mp.events.add("Client_SendActionPedBlackJackTurnCard", (_0x9279e3, _0x4fa239) => {
  if (!is_in_casino) {
    return;
  }
  if (!_0x4fa239) {
    return;
  }
  const _0x18e7bc = JSON.parse(_0x4fa239);
  blackjackData.tableInfo[_0x9279e3].ped.taskPlayAnim("anim_casino_b@amb@casino@games@blackjack@dealer", _0x9279e3 % 2 ? "female_turn_card" : "turn_card", 8, 0, -1, 0, 0, true, true, true);
  setTimeout(function () {
    if (blackjackData.CardObjects[_0x9279e3][4][0][0] && mp.objects.exists(blackjackData.CardObjects[_0x9279e3][4][0][0])) {
      const _0x3ef7b1 = blackjackData.tableInfo[_0x9279e3].ped.getBoneIndex(_0x18e7bc.Bone);
      blackjackData.CardObjects[_0x9279e3][4][0][0].attachTo(blackjackData.tableInfo[_0x9279e3].ped.handle, _0x3ef7b1, _0x18e7bc.PosOffset1, _0x18e7bc.PosOffset2, _0x18e7bc.PosOffset3, _0x18e7bc.RotOffset1, _0x18e7bc.RotOffset2, _0x18e7bc.RotOffset3, false, false, false, true, 2, true);
      setTimeout(() => {
        if (mp.objects.exists(blackjackData.CardObjects[_0x9279e3][4][0][0])) {
          blackjackData.CardObjects[_0x9279e3][4][0][0].destroy();
        }
        blackjackData.CardObjects[_0x9279e3][4][0][0] = mp.objects.new(mp.game.joaat(blackjackData.CardsModel[_0x18e7bc.Model]), blackjackData.tableInfo[_0x9279e3].table.getOffsetFromInWorldCoords(blackjackData.CardPositions[0][4][0][0], blackjackData.CardPositions[0][4][0][1], blackjackData.CardPositions[0][4][0][2]), {
          rotation: new mp.Vector3(0, 0, blackjackData.CardPositions[0][4][0][3])
        });
      }, 800);
    }
  }, 800);
});
mp.events.add("client_rouletteSpin", (_0x164cd9, _0x27cbb8) => {
  if (!is_in_casino) {
    return;
  }
  if (!casinoRouletteData.ballObject[_0x27cbb8] || !mp.objects.exists(casinoRouletteData.ballObject[_0x27cbb8])) {
    return;
  }
  if (!casinoRouletteData.tableInfo[_0x27cbb8] || !casinoRouletteData.tableInfo[_0x27cbb8].table) {
    return;
  }
  const _0x1c0a5b = "anim_casino_b@amb@casino@games@roulette@table";
  mp.game.streaming.requestAnimDict(_0x1c0a5b);
  let _0x52fcfa = 0;
  while (!mp.game.streaming.hasAnimDictLoaded(_0x1c0a5b) && _0x52fcfa < 50) {
    mp.game.wait(0);
    _0x52fcfa++;
  }
  casinoRouletteData.tableInfo[_0x27cbb8].ped.taskPlayAnim("anim_casino_b@amb@casino@games@roulette@dealer_female", "spin_wheel", 8, 0, -1, 0, 0, true, true, true);
  casinoRouletteData.tableInfo[_0x27cbb8].table.playAnim("intro_wheel", _0x1c0a5b, 1000, false, true, false, 0, 136704);
  casinoRouletteData.tableInfo[_0x27cbb8].table.forceAiAndAnimationUpdate();
  let _0x380da4 = mp.game.object.getObjectOffsetFromCoords(casinoRouletteData.tablePositions[_0x27cbb8][1], casinoRouletteData.tablePositions[_0x27cbb8][2], casinoRouletteData.tablePositions[_0x27cbb8][3], casinoRouletteData.tableInfo[_0x27cbb8].table.getRotation(2).z, -0.734742, -0.16617, 1.0715);
  casinoRouletteData.ballSoundID[_0x27cbb8] = mp.game.invoke("0x430386FE9BF80B45");
  if (casinoRouletteData.ballSoundID[_0x27cbb8]) {
    mp.game.audio.stopSound(casinoRouletteData.ballSoundID[_0x27cbb8]);
  }
  mp.game.audio.releaseSoundId(casinoRouletteData.ballSoundID[_0x27cbb8]);
  setTimeout(() => {
    mp.game.audio.playSoundFromEntity(casinoRouletteData.ballSoundID[_0x27cbb8], "DLC_VW_ROULETTE_BALL_LOOP", casinoRouletteData.ballObject[_0x27cbb8].handle, "dlc_vw_table_games_sounds", true, 0);
  }, 3000);
  casinoRouletteData.ballObject[_0x27cbb8].position = new mp.Vector3(_0x380da4.x, _0x380da4.y, _0x380da4.z);
  casinoRouletteData.ballObject[_0x27cbb8].rotation = new mp.Vector3(0, 0, casinoRouletteData.tableInfo[_0x27cbb8].table.getRotation(2).z + 90);
  casinoRouletteData.ballObject[_0x27cbb8].playAnim("intro_ball", _0x1c0a5b, 1000, false, true, false, 0, 136704);
  casinoRouletteData.ballObject[_0x27cbb8].forceAiAndAnimationUpdate();
  casinoRouletteData.spinTable[_0x27cbb8] = true;
  casinoRouletteData.spinWinTable[_0x27cbb8] = _0x164cd9;
  setTimeout(() => {
    if (casinoRouletteData.tableInfo[_0x27cbb8].ped.handle != 0) {
      casinoRouletteData.tableInfo[_0x27cbb8].ped.taskPlayAnim("anim_casino_b@amb@casino@games@roulette@dealer_female", "clear_chips_zone2", 8, 0, -1, 0, 0, true, true, true);
      if (casinoRouletteData.betObject[_0x27cbb8] != null) {
        if (mp.objects.exists(casinoRouletteData.betObject[_0x27cbb8])) {
          casinoRouletteData.betObject[_0x27cbb8].destroy();
        }
        casinoRouletteData.betObject[_0x27cbb8] = null;
      }
      setTimeout(() => {
        if (casinoRouletteData.tableInfo[_0x27cbb8].ped.handle != 0) {
          casinoRouletteData.tableInfo[_0x27cbb8].ped.taskPlayAnim("anim_casino_b@amb@casino@games@roulette@dealer_female", "idle", 8, 0, -1, 0, 0, true, true, true);
        }
      }, 1800);
    }
  }, 16000);
});
mp.events.add("Client_Update_Rulette_LocalMoney", _0x5028b5 => {
  if (casinoRouletteOpened) {
    if (casino_localmoney_timeout) {
      main_browser.execute("APPS.state.casino_roulette.bonus_money = 0;");
      clearTimeout(casino_localmoney_timeout);
      casino_localmoney_timeout = null;
    }
    main_browser.execute("APPS.state.casino_roulette.bonus_money = " + _0x5028b5 + ";");
    casino_localmoney_timeout = setTimeout(() => {
      casino_localmoney_timeout = null;
      main_browser.execute("APPS.state.casino_roulette.bonus_money = 0;");
    }, 5000);
  }
});
mp.events.add("Client_Update_BlackJack_LocalMoney", _0x5ce130 => {
  if (casinoBlackJackOpened) {
    if (casino_localmoney_timeout) {
      main_browser.execute("APPS.state.casino_blackjack.bonus_money = 0;");
      clearTimeout(casino_localmoney_timeout);
      casino_localmoney_timeout = null;
    }
    main_browser.execute("APPS.state.casino_blackjack.bonus_money = " + _0x5ce130 + ";");
    casino_localmoney_timeout = setTimeout(() => {
      casino_localmoney_timeout = null;
      main_browser.execute("APPS.state.casino_blackjack.bonus_money = 0;");
    }, 5000);
  }
});
mp.events.add("Client_Casino_Change_Bet_Custom_BlackJack", () => {
  if (casinoBlackJackOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeBlackJackBetCustom");
    }
  }
});
mp.events.add("Client_Casino_Change_Bet_Custom_Roulette", () => {
  if (casinoRouletteOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChangeRouletteBetCustom");
    }
  }
});
mp.events.add("Client_Update_Roulette_Time", _0x38aaae => {
  if (casinoRouletteOpened) {
    main_browser.execute("APPS.state.casino_roulette.last_time = " + _0x38aaae + ";");
  }
});
mp.events.add("Client_Update_BlackJack_Time", (_0x274bd7, _0x3eb1c3) => {
  if (casinoBlackJackOpened) {
    switch (_0x3eb1c3) {
      case 0:
        main_browser.execute("APPS.state.casino_blackjack.last_time_text = 'Ставки закрываются';");
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        break;
      case 1:
      case 2:
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        break;
      case 3:
        main_browser.execute("APPS.state.casino_blackjack.last_time_text = 'До конца хода';");
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        main_browser.execute("APPS.state.casino_blackjack.show_actions = true;");
        break;
      case 4:
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        main_browser.execute("APPS.state.casino_blackjack.show_actions = false;");
        break;
      case 5:
        main_browser.execute("APPS.state.casino_blackjack.last_time_text = 'До конца хода';");
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        break;
      case 6:
        main_browser.execute("APPS.state.casino_blackjack.betted = 0;");
        if (casino_localmoney_timeout) {
          main_browser.execute("APPS.state.casino_blackjack.bonus_money = 0;");
          clearTimeout(casino_localmoney_timeout);
          casino_localmoney_timeout = null;
        }
        main_browser.execute("APPS.state.casino_blackjack.bonus_money = " + _0x274bd7 + ";");
        casino_localmoney_timeout = setTimeout(() => {
          casino_localmoney_timeout = null;
          main_browser.execute("APPS.state.casino_blackjack.bonus_money = 0;");
        }, 5000);
        break;
      case 7:
        main_browser.execute("APPS.state.casino_blackjack.last_time_text = 'Примите ваше решение';");
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        main_browser.execute("APPS.state.casino_blackjack.show_savebljack = true;");
        break;
      case 8:
        main_browser.execute("APPS.state.casino_blackjack.last_time = " + _0x274bd7 + ";");
        main_browser.execute("APPS.state.casino_blackjack.show_savebljack = false;");
        break;
      case 9:
        main_browser.execute("APPS.state.casino_blackjack.my_cards = '" + _0x274bd7 + "';");
        break;
      case 10:
        main_browser.execute("APPS.state.casino_blackjack.dealer_cards = " + _0x274bd7 + ";");
        break;
      case 11:
        main_browser.execute("APPS.state.casino_blackjack.my_cards2 = '" + _0x274bd7 + "';");
        break;
      case 12:
        main_browser.execute("APPS.state.casino_blackjack.my_cards = '" + _0x274bd7 + "';");
        main_browser.execute("APPS.state.casino_blackjack.dealer_cards = " + _0x274bd7 + ";");
        main_browser.execute("APPS.state.casino_blackjack.my_cards2 = '" + _0x274bd7 + "';");
    }
  }
});
mp.events.add("Client_Casino_BlackJack_Action", _0x469de2 => {
  if (blackjackData.join != null && casinoBlackJackOpened && loggedin && !chatActive && dialog_window != 1) {
    mp.events.callRemote("server_BlackJackAction", blackjackData.join, _0x469de2);
  }
});
mp.events.add("Client_UpdateRollsAndBalance", (_0x4ad5cd, _0x2945fd) => {
  if (casinoRouletteOpened) {
    main_browser.execute("APPS.state.casino_roulette.betted = 0;");
    main_browser.execute("APPS.state.casino_roulette.possible_win = 0;");
    main_browser.execute("APPS.state.casino_roulette.last_rolls = [" + _0x4ad5cd + "];");
    main_browser.execute("APPS.state.casino_roulette.balance = " + _0x2945fd + ";");
  }
});
mp.events.add("Client_ChangeBetBlackJackCorrect", _0x2ae42f => {
  if (casinoBlackJackOpened) {
    main_browser.execute("APPS.state.casino_blackjack.bet = " + _0x2ae42f + ";");
  }
});
mp.events.add("Client_ChangeBetRouletteCorrect", _0x92a85 => {
  if (casinoRouletteOpened) {
    current_roulette_bet = parseInt(_0x92a85);
    main_browser.execute("APPS.state.casino_roulette.bet = " + _0x92a85 + ";");
  }
});
mp.events.add("Client_Change_Roulette_Bet", _0x4917f4 => {
  if (casinoRouletteOpened) {
    current_roulette_bet = parseInt(_0x4917f4);
  }
});
mp.events.add("Client_Update_BlackJackBettedAndBalance", (_0x24b45c, _0x557931) => {
  if (casinoBlackJackOpened) {
    main_browser.execute("APPS.state.casino_blackjack.betted = " + _0x24b45c + ";");
    main_browser.execute("APPS.state.casino_blackjack.balance = " + _0x557931 + ";");
  }
});
mp.events.add("Client_Update_RouletteBettedAndBalance", (_0xa7b8b3, _0x1c39e6, _0x2a739c) => {
  if (casinoRouletteOpened) {
    main_browser.execute("APPS.state.casino_roulette.betted = " + _0xa7b8b3 + ";");
    main_browser.execute("APPS.state.casino_roulette.possible_win = " + _0x2a739c + ";");
    main_browser.execute("APPS.state.casino_roulette.balance = " + _0x1c39e6 + ";");
  }
});
mp.events.add("client_roulleteTableSeat", (_0x2300d8, _0x31e173, _0x1db3d1, _0x383213) => {
  if (casinoRouletteData.join != null) {
    return;
  }
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x329fd1 = "{\"last_rolls\":[" + _0x1db3d1 + "],\"possible_win\":0,\"last_time\":0,\"bonus_money\":0,\"balance\":" + _0x383213 + ",\"betted\":0,\"bet\":0,\"show\":true}";
  main_browser.execute("APPS.state.casino_roulette = " + _0x329fd1);
  current_roulette_bet = 0;
  casinoRouletteData.tableInfo[_0x2300d8].table.setCollision(false, false);
  casinoRouletteData.join = _0x2300d8;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  localplayer.freezePosition(true);
  casinoRouletteData.cameraRoulette = mp.cameras.new("default", new mp.Vector3(casinoRouletteData.tablePositions[_0x2300d8][1], casinoRouletteData.tablePositions[_0x2300d8][2], casinoRouletteData.tablePositions[_0x2300d8][3] + 2), new mp.Vector3(270, -90, casinoRouletteData.tableInfo[_0x2300d8].table.getRotation(2).z + 270), 80);
  casinoRouletteData.cameraRoulette.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 900, true, false);
  casinoRouletteOpened = true;
});
mp.events.add("Client_blackjackTableUnSeatStandart", () => {
  if (!is_in_casino) {
    return;
  }
  main_browser.execute("APPS.state.casino_blackjack.show = false;");
  casinoBlackJackOpened = false;
  localplayer.freezePosition(false);
  is_freezed = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (blackjackData.cameraBlackJack != null) {
    blackjackData.cameraBlackJack.destroy();
    blackjackData.cameraBlackJack = null;
  }
  if (blackjackData.cameraBlackJackCrupie != null) {
    blackjackData.cameraBlackJackCrupie.destroy();
    blackjackData.cameraBlackJackCrupie = null;
  }
  mp.game.cam.setFollowPedCamViewMode(2);
  let _0x10377e = blackjackData.join;
  setTimeout(() => {
    blackjackData.tableInfo[_0x10377e].table.setCollision(true, true);
  }, 3000);
  blackjackData.toJoin = null;
  blackjackData.toJoinSeatID = null;
  blackjackData.join = null;
});
mp.events.add("Client_blackjackTableUnSeat", (_0x238be7, _0x2f5d06) => {
  if (is_in_casino) {
    if (blackjackData.BetObjects[_0x238be7][_0x2f5d06][0].length) {
      for (let _0x3362f1 = 0; _0x3362f1 < blackjackData.BetObjects[_0x238be7][_0x2f5d06][0].length; _0x3362f1++) {
        if (blackjackData.BetObjects[_0x238be7][_0x2f5d06][0][_0x3362f1] && mp.objects.exists(blackjackData.BetObjects[_0x238be7][_0x2f5d06][0][_0x3362f1])) {
          blackjackData.BetObjects[_0x238be7][_0x2f5d06][0][_0x3362f1].destroy();
        }
      }
      blackjackData.BetObjects[_0x238be7][_0x2f5d06][0] = [];
    }
    if (blackjackData.BetObjects[_0x238be7][_0x2f5d06][1].length) {
      for (let _0x324c06 = 0; _0x324c06 < blackjackData.BetObjects[_0x238be7][_0x2f5d06][1].length; _0x324c06++) {
        if (blackjackData.BetObjects[_0x238be7][_0x2f5d06][1][_0x324c06] && mp.objects.exists(blackjackData.BetObjects[_0x238be7][_0x2f5d06][1][_0x324c06])) {
          blackjackData.BetObjects[_0x238be7][_0x2f5d06][1][_0x324c06].destroy();
        }
      }
      blackjackData.BetObjects[_0x238be7][_0x2f5d06][1] = [];
    }
  }
});
mp.events.add("client_blackjackTableSeat", (_0x153033, _0x5a17f9, _0x17b025) => {
  if (!is_in_casino) {
    return;
  }
  if (blackjackData.join != null) {
    return;
  }
  const _0xb0b3b2 = "{\"last_time\":0,\"bonus_money\":0,\"balance\":" + _0x17b025 + ",\"betted\":0,\"bet\":0,\"show\":true,\"show_actions\":false, \"show_savebljack\":false, \"my_cards\": 0, \"dealer_cards\": 0, \"my_cards2\": 0}";
  main_browser.execute("APPS.state.casino_blackjack = " + _0xb0b3b2);
  blackjackData.tableInfo[_0x153033].table.setCollision(false, false);
  blackjackData.join = _0x153033;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  localplayer.freezePosition(true);
  blackjackData.cameraBlackJackCrupie = mp.cameras.new("default", new mp.Vector3(blackjackData.tablePositions[blackjackData.join][1] + 0.004, blackjackData.tablePositions[blackjackData.join][2] - 0.1283, blackjackData.tablePositions[blackjackData.join][3] + 1.37394 + 0.3), new mp.Vector3(-55, 0, 0), 40);
  blackjackData.cameraBlackJack = mp.cameras.new("default", new mp.Vector3(blackjackData.tablePositions[_0x153033][1] + blackjackData.cameraPositionOffsets[_0x5a17f9][0], blackjackData.tablePositions[_0x153033][2] + blackjackData.cameraPositionOffsets[_0x5a17f9][1], blackjackData.tablePositions[_0x153033][3] + blackjackData.cameraPositionOffsets[_0x5a17f9][2] + 0.3), new mp.Vector3(-23, 0, blackjackData.cameraPositionOffsets[_0x5a17f9][3]), 40);
  blackjackData.cameraBlackJack.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 900, true, false);
  casinoBlackJackOpened = true;
});
mp.events.add("client_rouletteBet", (_0x2fe945, _0xf15cb4) => {
  mp.game.audio.playSoundFrontend(-1, "DLC_VW_BET_UP", "dlc_vw_table_games_frontend_sounds", true);
  casinoRouletteData.betObject[_0x2fe945] = mp.objects.new(mp.game.joaat("vw_prop_chip_100dollar_x1"), casinoRouletteData.tableInfo[_0x2fe945].table.getOffsetFromInWorldCoords(casinoRouletteData.objectOffsets[_0xf15cb4].position_x, casinoRouletteData.objectOffsets[_0xf15cb4].position_y, casinoRouletteData.objectOffsets[_0xf15cb4].position_z), {
    rotation: new mp.Vector3(0, 0, casinoRouletteData.tableInfo[_0x2fe945].table.getRotation(2).z)
  });
});
mp.events.add("client_blackjackBet", (_0x2dae67, _0x2b1aab, _0x1bd6ee, _0xfb2326 = 0) => {
  if (!is_in_casino) {
    return;
  }
  if (!casinoBlackJackOpened || _0x1bd6ee < 0 || _0x1bd6ee > 1000) {
    return;
  }
  mp.game.audio.playSoundFrontend(-1, "DLC_VW_BET_UP", "dlc_vw_table_games_frontend_sounds", true);
  let _0x16a85 = 0;
  let _0xb6fe1c = blackjackData.BetObjects[_0x2dae67][_0x2b1aab][_0xfb2326].length;
  if (_0xb6fe1c < 0 || _0xb6fe1c > 1) {
    return;
  }
  let _0x1cec8d = mp.game.object.getObjectOffsetFromCoords(blackjackData.tablePositions[_0x2dae67][1], blackjackData.tablePositions[_0x2dae67][2], blackjackData.tablePositions[_0x2dae67][3], blackjackData.tableInfo[_0x2dae67].table.getRotation(2).z, blackjackData.betPositionOffsets[_0xfb2326][_0xb6fe1c][_0x2b1aab][0], blackjackData.betPositionOffsets[_0xfb2326][_0xb6fe1c][_0x2b1aab][1], blackjackData.betPositionOffsets[_0xfb2326][_0xb6fe1c][_0x2b1aab][2]);
  for (let _0x27e539 = 0; _0x27e539 < 5; _0x27e539++) {
    if (_0x1bd6ee >= blackjackData.ChipsModel[_0x27e539][1] && _0x1bd6ee < blackjackData.ChipsModel[_0x27e539 + 1][1]) {
      _0x16a85 = _0x27e539;
      break;
    }
  }
  setTimeout(function () {
    if (casinoBlackJackOpened) {
      blackjackData.BetObjects[_0x2dae67][_0x2b1aab][_0xfb2326][_0xb6fe1c] = mp.objects.new(mp.game.joaat(blackjackData.ChipsModel[_0x16a85][0]), new mp.Vector3(_0x1cec8d.x, _0x1cec8d.y, _0x1cec8d.z), {
        rotation: new mp.Vector3(0, 0, blackjackData.betPositionOffsets[_0xfb2326][_0xb6fe1c][_0x2b1aab][3]),
        alpha: 255,
        dimension: 0
      });
    }
  }, 800);
});
mp.keys.bind(72, true, () => {
  if (casinoBlackJackOpened) {
    blackjackData.cameraBlackJackCrupie.setActiveWithInterp(blackjackData.cameraBlackJack.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, false, false);
  }
});
mp.keys.bind(72, false, () => {
  if (casinoBlackJackOpened) {
    blackjackData.cameraBlackJack.setActiveWithInterp(blackjackData.cameraBlackJackCrupie.handle, 1000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, false, false);
  }
});
mp.keys.bind(69, true, () => {
  if (GlobalCheck() != 1) {
    if (casinoRouletteData.toJoin != null && casinoRouletteData.join == null) {
      const _0x67fe64 = casinoRouletteData.toJoin;
      const _0x5ac380 = casinoRouletteData.toJoinSeatID;
      mp.events.callRemote("server_roulleteTableSeat", casinoRouletteData.toJoin, casinoRouletteData.toJoinSeatID, casinoRouletteData.tablePositions[_0x67fe64][1] + casinoRouletteData.seatPositionOffsets[_0x5ac380][0], casinoRouletteData.tablePositions[_0x67fe64][2] + casinoRouletteData.seatPositionOffsets[_0x5ac380][1], casinoRouletteData.tablePositions[_0x67fe64][3] + casinoRouletteData.seatPositionOffsets[_0x5ac380][2], casinoRouletteData.seatPositionOffsets[_0x5ac380][3]);
    } else if (blackjackData.toJoin != null && blackjackData.join == null) {
      const _0x2b090c = blackjackData.toJoin;
      const _0x4321df = blackjackData.toJoinSeatID;
      mp.events.callRemote("server_blackjackTableSeat", blackjackData.toJoin, blackjackData.toJoinSeatID, blackjackData.tablePositions[_0x2b090c][1] + blackjackData.seatPositionOffsets[_0x4321df][0], blackjackData.tablePositions[_0x2b090c][2] + blackjackData.seatPositionOffsets[_0x4321df][1], blackjackData.tablePositions[_0x2b090c][3] + blackjackData.seatPositionOffsets[_0x4321df][2], blackjackData.seatPositionOffsets[_0x4321df][3]);
    } else if (PokerData.toJoin != null && PokerData.join == null) {
      const _0x22b164 = PokerData.toJoin;
      const _0x4326fb = PokerData.toJoinSeatID;
      const [_0x1270bd, _0xd0e777, _0x429d97] = getXYZwithRotate(new mp.Vector3(PokerData.tablePositions[_0x22b164][0], PokerData.tablePositions[_0x22b164][1], PokerData.tablePositions[_0x22b164][2]), PokerData.tablePositions[_0x22b164][3], new mp.Vector3(PokerData.seatPositionOffsets[_0x4326fb][0], PokerData.seatPositionOffsets[_0x4326fb][1], PokerData.seatPositionOffsets[_0x4326fb][2]));
      const _0x48ef42 = headingTurnTo(new mp.Vector3(_0x1270bd, _0xd0e777, _0x429d97), new mp.Vector3(PokerData.tablePositions[_0x22b164][0], PokerData.tablePositions[_0x22b164][1], PokerData.tablePositions[_0x22b164][2]));
      mp.events.callRemote("server::poker::sitDown", _0x22b164, _0x4326fb, _0x1270bd, _0xd0e777, _0x429d97, _0x48ef42);
    }
  }
});
mp.events.add("Client_Update_ChipsCount", _0xda9c7b => {
  main_browser.execute("APPS.state.hud.chips = " + _0xda9c7b + ";");
});
mp.events.add("Client_ShowHorseResults", (_0x59d77a, _0x1fa0c3) => {
  if (is_in_casino && handle_movie != null && handle_movie != null) {
    last_sound_id = mp.game.invoke("0x430386FE9BF80B45");
    mp.game.audio.stopSound(last_sound_id);
    mp.game.audio.releaseSoundId(last_sound_id);
    mp.game.audio.playSoundFromCoord(last_sound_id, "race_winner", 1093.907, 263.1436, -49.49115, "dlc_vw_casino_inside_track_betting_main_event_sounds", false, 0, false);
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "CLEAR_ALL_PLAYERS");
    mp.game.graphics.popScaleformMovieFunctionVoid();
    for (let _0x218da5 = 0; _0x218da5 < _0x59d77a.length; _0x218da5++) {
      for (let _0x4bb6a4 = 0; _0x4bb6a4 < _0x59d77a[_0x218da5].length; _0x4bb6a4++) {
        mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_PLAYER_RESULT");
        mp.game.invoke("0x77FE3402004CD1B0", _0x59d77a[_0x218da5][_0x4bb6a4]);
        mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x1fa0c3[_0x218da5][_0x4bb6a4]));
        mp.game.graphics.popScaleformMovieFunctionVoid();
      }
    }
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(4);
    mp.game.graphics.popScaleformMovieFunctionVoid();
  }
});
mp.events.add("Client_ShowHorseScreen", (_0x36c6a5, _0x59e655, _0x29ecfa) => {
  if (is_in_casino) {
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "CLEAR_ALL_PLAYERS");
    mp.game.graphics.popScaleformMovieFunctionVoid();
    for (let _0x383fdb = 0; _0x383fdb < _0x59e655.length; _0x383fdb++) {
      mp.game.graphics.pushScaleformMovieFunction(handle_movie, "ADD_PLAYER");
      mp.game.invoke("0x77FE3402004CD1B0", _0x59e655[_0x383fdb]);
      mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x36c6a5));
      mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x29ecfa[_0x383fdb]));
      mp.game.graphics.popScaleformMovieFunctionVoid();
    }
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(0);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_DETAIL_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x36c6a5));
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(1);
    mp.game.graphics.popScaleformMovieFunctionVoid();
  }
});
mp.events.add("Client_Horse_Countdown", _0x2c64f5 => {
  if (is_in_casino) {
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_COUNTDOWN");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x2c64f5));
    mp.game.graphics.popScaleformMovieFunctionVoid();
  }
});
mp.events.add("Prepare_For_Race", _0x48919d => {
  if (is_in_casino && handle_movie != null && handle_movie != null) {
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(0);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(1);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[0] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Raul");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(129346);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(129346);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(-1);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(-1);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(2);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[1] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Paul");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(8395544);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(8395544);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(3);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[2] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Jack");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(8335344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(8335344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(25532552552553);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(25532552552553);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(4);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[3] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Kevin");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(1135344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(1135344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(5);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[4] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Mike");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(11245344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(11245344);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SET_HORSE");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6);
    mp.game.graphics.pushScaleformMovieFunctionParameterString(_0x48919d[5] + "/1");
    mp.game.invoke("0xE83A3E3557A56640", "Smith");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(2348543);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(2348543);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(6636321);
    mp.game.graphics.popScaleformMovieFunctionVoid();
  }
});
mp.events.add("Client_Start_Horse_Racing", (_0x409047, _0x41ac73, _0x2c2e39, _0x4d0acd, _0x4fc71f, _0x5eebde, _0x56dc38, _0x236696, _0x10fd5c = true) => {
  if (!is_in_casino) {
    return;
  }
  last_sound_id = mp.game.invoke("0x430386FE9BF80B45");
  mp.game.audio.stopSound(last_sound_id);
  mp.game.audio.releaseSoundId(last_sound_id);
  mp.game.audio.playSoundFromCoord(last_sound_id, "race_loop", 1093.907, 263.1436, -49.49115, "dlc_vw_casino_inside_track_betting_main_event_sounds", false, 0, false);
  if (!mp.game.audio.isAudioSceneActive("dlc_vw_casino_inside_track_live_race")) {
    mp.game.audio.startAudioScene("dlc_vw_casino_inside_track_live_race");
  }
  mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(0);
  mp.game.graphics.popScaleformMovieFunctionVoid();
  mp.game.graphics.pushScaleformMovieFunction(handle_movie, "START_RACE");
  mp.game.graphics.pushScaleformMovieFunctionParameterFloat(parseFloat(15000));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x409047));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x41ac73));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x2c2e39));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x4d0acd));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x4fc71f));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x5eebde));
  mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(_0x56dc38));
  mp.game.graphics.pushScaleformMovieFunctionParameterFloat(parseFloat(_0x236696));
  mp.game.graphics.pushScaleformMovieFunctionParameterBool(Boolean(_0x10fd5c));
  mp.game.graphics.popScaleformMovieFunctionVoid();
  setTimeout(function () {
    mp.game.audio.stopSound(last_sound_id);
    mp.game.audio.releaseSoundId(last_sound_id);
    mp.game.audio.playSoundFromCoord(last_sound_id, "race_finish", 1093.907, 263.1436, -49.49115, "dlc_vw_casino_inside_track_betting_main_event_sounds", false, 0, false);
    if (mp.game.audio.isAudioSceneActive("dlc_vw_casino_inside_track_live_race")) {
      mp.game.audio.stopAudioScene("dlc_vw_casino_inside_track_live_race");
    }
  }, 14000);
});
const chairs_horses = [{
  x: 1099.582,
  y: 265.6582,
  z: -52.2409,
  r: 45,
  side: 2
}, {
  x: 1098.928,
  y: 265.0042,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1096.506,
  y: 262.6327,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1095.852,
  y: 261.9783,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1095.127,
  y: 261.2535,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1094.473,
  y: 260.5995,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1092.098,
  y: 258.1739,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1091.443,
  y: 257.5198,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1101.915,
  y: 264.1026,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1101.261,
  y: 263.4485,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1098.451,
  y: 260.6878,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1097.797,
  y: 260.0338,
  z: -52.24094,
  r: 45,
  side: 1
}, {
  x: 1097.072,
  y: 259.309,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1096.417,
  y: 258.6552,
  z: -52.24114,
  r: 45,
  side: 1
}, {
  x: 1093.653,
  y: 255.8405,
  z: -52.24094,
  r: 45,
  side: 2
}, {
  x: 1092.999,
  y: 255.1864,
  z: -52.24094,
  r: 45,
  side: 1
}];
let seat_horse_slot;
mp.keys.bind(69, true, () => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (seat_horse_slot == null) {
    return;
  }
  const _0x35bc30 = seat_horse_slot;
  mp.events.callRemote("Server_HorseSeat", _0x35bc30, chairs_horses[_0x35bc30].x, chairs_horses[_0x35bc30].y, chairs_horses[_0x35bc30].z + 1.05, chairs_horses[_0x35bc30].r);
});
global.is_horse_seat = false;
mp.events.add("OpenHorseBets", (_0x556f04, _0x3221e3, _0x38c322, _0x1a8626) => {
  if (_0x556f04 == null || _0x556f04 > chairs_horses.length) {
    return;
  }
  main_browser.execute("APPS.state.hud.interact = false;");
  localplayer.freezePosition(true);
  const _0x625f63 = "{\"coefs\":[" + _0x3221e3 + "],\"balance\":" + _0x38c322 + ",\"bet\":0,\"show\":true}";
  main_browser.execute("APPS.state.casino_race = " + _0x625f63);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  is_horse_seat = true;
});
global.CloseHorseBetSeat = function () {
  if (is_horse_seat) {
    localplayer.freezePosition(false);
    is_freezed = false;
    is_horse_seat = false;
    main_browser.execute("APPS.state.casino_race.show = false;");
    mp.events.callRemote("Server_HorseUnSeat");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_PlaceHorseBet", (_0x4474b1, _0x47631e) => {
  if (is_horse_seat) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_PlaceHorseBet", _0x4474b1, _0x47631e);
    }
  }
});
mp.events.add("Client_CloseHorseBet", () => {
  CloseHorseBetSeat();
});
mp.events.add("HorseCasino_Error", _0x3db25b => {
  if (is_horse_seat) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x3db25b + "');");
  }
});
let casino_veh_rot = 0;
const veh_wheel = mp.objects.new(2733879850, new mp.Vector3(1100.0177001953125, 220.02122497558594, -49.989967346191406));
let rotatePodiumColshape = mp.colshapes.newSphere(1121.214, 239.456, -50.441, 100);
mp.events.add("Client_SetCasinoBalance", _0x1ecc02 => {
  main_browser.execute("APPS.state.hud.chips = " + _0x1ecc02 + ";");
  main_browser.execute("APPS.state.hud.is_casino = true;");
});
global.is_in_casino = false;
let diamondWallsSetupToken = 0;
function applyCasinoTableTintIndex(_0xc36a2b, _0x510118) {
  if (_0xc36a2b?.handle && mp.objects.exists(_0xc36a2b)) {
    mp.game.weapon.setObjectTintIndex(_0xc36a2b.handle, _0x510118);
  }
}
function applyCasinoTableTintIndices() {
  applyCasinoTableTintIndex(casinoRouletteData.tableInfo[1]?.table, 3);
  applyCasinoTableTintIndex(casinoRouletteData.tableInfo[2]?.table, 3);
  applyCasinoTableTintIndex(blackjackData.tableInfo[1]?.table, 3);
  applyCasinoTableTintIndex(blackjackData.tableInfo[2]?.table, 3);
}
async function setupCasinoDiamondWalls() {
  if (diamond_walls) {
    return;
  }
  const _0x4ba092 = ++diamondWallsSetupToken;
  if (!mp.game.ui.isNamedRendertargetRegistered(targetName)) {
    mp.game.ui.registerNamedRendertarget(targetName, false);
  }
  if (!mp.game.ui.isNamedRendertargetLinked(targetModel)) {
    mp.game.ui.linkNamedRendertarget(targetModel);
  }
  if (!mp.game.graphics.hasStreamedTextureDictLoaded(textureDict)) {
    if (!(await mp.game.graphics.requestStreamedTextureDictAsync(textureDict)) || !is_in_casino || _0x4ba092 !== diamondWallsSetupToken) {
      return;
    }
  }
  mp.game.graphics.setTvChannelPlaylist(0, "CASINO_DIA_PL", true);
  mp.game.graphics.setTvAudioFrontend(true);
  mp.game.graphics.setTvVolume(-100);
  mp.game.graphics.setTvChannel(0);
  renderTarget = mp.game.ui.getNamedRendertargetRenderId(targetName);
  diamond_walls = true;
}
mp.events.add("playerEnterColshape", _0x34bc83 => {
  if (_0x34bc83 == rotatePodiumColshape) {
    if (!mp.game.audio.isAudioSceneActive("DLC_VW_Casino_General")) {
      mp.game.audio.startAudioScene("DLC_VW_Casino_General");
    }
    mp.events.callRemote("Server_GetChipBalance");
    LoadCasinoVariables();
    applyCasinoTableTintIndices();
    is_in_casino = true;
    setupCasinoDiamondWalls();
  }
});
let casino_variables_loaded = false;
function LoadCasinoVariables() {
  if (casino_variables_loaded != 1) {
    casino_variables_loaded = true;
    mp.game.entity.createModelHideExcludingScriptObjects(1100.0177001953125, 220.02122497558594, -49.989967346191406, 10, 2733879850, true);
    mp.game.audio.requestScriptAudioBank("DLC_VINEWOOD/CASINO_GENERAL", false);
    mp.game.audio.requestScriptAudioBank("DLC_VINEWOOD/CASINO_SLOT_MACHINES_01", false);
    mp.game.audio.requestScriptAudioBank("DLC_VINEWOOD/CASINO_SLOT_MACHINES_02", false);
    mp.game.audio.requestScriptAudioBank("DLC_VINEWOOD/CASINO_SLOT_MACHINES_03", false);
    for (let _0x2e5658 = 0; _0x2e5658 < casinoRouletteData.tablePositions.length; _0x2e5658++) {
      casinoRouletteData.spinTable[_0x2e5658] = false;
      casinoRouletteData.spinWinTable[_0x2e5658] = 0;
      casinoRouletteData.ballSoundID[_0x2e5658] = 0;
    }
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@roulette@table");
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@roulette@dealer_female");
    mp.game.streaming.requestModel(87196104);
    for (let _0x5ea030 = 0; _0x5ea030 < casinoRouletteData.tablePositions.length; _0x5ea030++) {
      casinoRouletteData.tableInfo[_0x5ea030] = {};
      let _0x37a8ac = 0;
      while (!mp.game.streaming.hasModelLoaded(87196104) && _0x37a8ac < 50) {
        mp.game.wait(0);
        _0x37a8ac++;
      }
      const _0x21e2ef = mp.game.object.getObjectOffsetFromCoords(casinoRouletteData.tablePositions[_0x5ea030][1], casinoRouletteData.tablePositions[_0x5ea030][2], casinoRouletteData.tablePositions[_0x5ea030][3], 0, -0.734742, -0.16617, 1.0715);
      casinoRouletteData.ballObject[_0x5ea030] = mp.objects.new(87196104, new mp.Vector3(_0x21e2ef.x, _0x21e2ef.y, _0x21e2ef.z));
      casinoRouletteData.tableInfo[_0x5ea030].table = mp.objects.new(mp.game.joaat(casinoRouletteData.tablePositions[_0x5ea030][0]), new mp.Vector3(casinoRouletteData.tablePositions[_0x5ea030][1], casinoRouletteData.tablePositions[_0x5ea030][2], casinoRouletteData.tablePositions[_0x5ea030][3]));
      casinoRouletteData.tableInfo[_0x5ea030].ped = mp.peds.new(mp.game.joaat(casinoRouletteData.pedModels[_0x5ea030]), new mp.Vector3(casinoRouletteData.tablePositions[_0x5ea030][1], casinoRouletteData.tablePositions[_0x5ea030][2] + 0.7, casinoRouletteData.tablePositions[_0x5ea030][3] + 1), 180, 0);
      casinoRouletteData.tableInfo[_0x5ea030].ped.croupier = _0x5ea030;
      for (let _0x2f7b6b = 0; _0x2f7b6b < casinoRouletteData.shapePositionOffset.length; _0x2f7b6b++) {
        let _0x1c5b29 = mp.colshapes.newSphere(casinoRouletteData.tablePositions[_0x5ea030][1] + casinoRouletteData.shapePositionOffset[_0x2f7b6b][0], casinoRouletteData.tablePositions[_0x5ea030][2] + casinoRouletteData.shapePositionOffset[_0x2f7b6b][1], casinoRouletteData.tablePositions[_0x5ea030][3] + casinoRouletteData.shapePositionOffset[_0x2f7b6b][2], 0.5);
        _0x1c5b29.RouletteShape = _0x5ea030;
        _0x1c5b29.RouletteShapeSeatID = _0x2f7b6b;
      }
    }
    for (let _0x3aa930 = 1; _0x3aa930 <= 8; _0x3aa930++) {
      mp.game.entity.createModelHideExcludingScriptObjects(1127.1312255859375, 254.82090759277344, -50.4407958984375, 300, mp.game.joaat("vw_prop_casino_slot_0" + _0x3aa930 + "a"), true);
      mp.game.streaming.requestModel(mp.game.joaat("vw_prop_casino_slot_0" + _0x3aa930 + "b_reels"));
      mp.game.streaming.requestModel(mp.game.joaat("vw_prop_casino_slot_0" + _0x3aa930 + "a_reels"));
    }
    for (let _0x14dd57 = 0; _0x14dd57 < casinoSlotData.machinePositions.length; _0x14dd57++) {
      casinoSlotData.machineData[_0x14dd57] = {
        spinning: [],
        spinRot: [0, 0, 0]
      };
      casinoSlotData.machineData[_0x14dd57].machine = mp.objects.new(mp.game.joaat("vw_prop_casino_slot_0" + casinoSlotData.machinePositions[_0x14dd57].type + "a"), new mp.Vector3(casinoSlotData.machinePositions[_0x14dd57].x, casinoSlotData.machinePositions[_0x14dd57].y, casinoSlotData.machinePositions[_0x14dd57].z), {
        rotation: new mp.Vector3(0, 0, casinoSlotData.machinePositions[_0x14dd57].rz)
      });
      casinoSlotData.machineData[_0x14dd57].reels = [];
      let _0x139af5 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x14dd57].x, casinoSlotData.machinePositions[_0x14dd57].y, casinoSlotData.machinePositions[_0x14dd57].z, casinoSlotData.machinePositions[_0x14dd57].rz, 0, -0.8, 1);
      mp.colshapes.newSphere(_0x139af5.x, _0x139af5.y, _0x139af5.z, 0.8).casinoSlotMachime = _0x14dd57;
      for (let _0x97cc29 = 0; _0x97cc29 < 3; _0x97cc29++) {
        _0x139af5 = mp.game.object.getObjectOffsetFromCoords(casinoSlotData.machinePositions[_0x14dd57].x, casinoSlotData.machinePositions[_0x14dd57].y, casinoSlotData.machinePositions[_0x14dd57].z, casinoSlotData.machinePositions[_0x14dd57].rz, casinoSlotData.reelsOffsets[_0x97cc29][0], casinoSlotData.reelsOffsets[_0x97cc29][1], casinoSlotData.reelsOffsets[_0x97cc29][2]);
        casinoSlotData.machineData[_0x14dd57].reels[_0x97cc29] = mp.objects.new(mp.game.joaat("vw_prop_casino_slot_0" + casinoSlotData.machinePositions[_0x14dd57].type + "a_reels"), new mp.Vector3(_0x139af5.x, _0x139af5.y, _0x139af5.z), {
          rotation: new mp.Vector3(0, 0, casinoSlotData.machinePositions[_0x14dd57].rz)
        });
      }
    }
    for (let _0x5d8eb1 = 1; _0x5d8eb1 < 17; _0x5d8eb1++) {
      let _0x4e66dc = _0x5d8eb1 + 2;
      let _0x3c5126 = _0x5d8eb1;
      if (_0x5d8eb1 + 2 < 10) {
        _0x4e66dc = "0" + (_0x5d8eb1 + 2);
      }
      if (_0x5d8eb1 < 10) {
        _0x3c5126 = "0" + _0x5d8eb1;
      }
      if (!mp.game.ui.isNamedRendertargetRegistered("casinoscreen_" + _0x4e66dc)) {
        mp.game.ui.registerNamedRendertarget("casinoscreen_" + _0x4e66dc, false);
      }
      if (!mp.game.ui.isNamedRendertargetLinked(mp.game.joaat("vw_vwint01_betting_sreen_" + _0x3c5126))) {
        mp.game.ui.linkNamedRendertarget(mp.game.joaat("vw_vwint01_betting_sreen_" + _0x3c5126));
      }
    }
    if (!mp.game.graphics.hasStreamedTextureDictLoaded("Prop_Screen_VW_InsideTrack")) {
      mp.game.graphics.requestStreamedTextureDict("Prop_Screen_VW_InsideTrack", false);
    }
    requestScaleformMovie("HORSE_RACING_WALL").then(_0x1e1a25 => {
      handle_movie = _0x1e1a25;
      mp.game.invoke("0xE6A9F00D4240B519", handle_movie, true);
      mp.game.graphics.pushScaleformMovieFunction(handle_movie, "SHOW_SCREEN");
      mp.game.graphics.pushScaleformMovieFunctionParameterInt(parseInt(5));
      mp.game.graphics.popScaleformMovieFunctionVoid();
    });
    joaat_screen = mp.game.joaat("vw_vwint01_betting_screen");
    if (!mp.game.ui.isNamedRendertargetRegistered("casinoscreen_02")) {
      mp.game.ui.registerNamedRendertarget("casinoscreen_02", false);
    }
    if (!mp.game.ui.isNamedRendertargetLinked(joaat_screen)) {
      mp.game.ui.linkNamedRendertarget(joaat_screen);
    }
    for (let _0x2f0416 = 0; _0x2f0416 < chairs_horses.length; _0x2f0416++) {
      mp.colshapes.newSphere(chairs_horses[_0x2f0416].x, chairs_horses[_0x2f0416].y, chairs_horses[_0x2f0416].z, 1.2).horse_slot = _0x2f0416;
    }
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@blackjack@dealer");
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@shared@dealer@");
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@blackjack@player");
    mp.game.streaming.requestAnimDict("anim_casino_b@amb@casino@games@shared@player@");
    mp.game.entity.createModelHideExcludingScriptObjects(1148.837, 269.747, -52.84095, 10, 112404821, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1151.84, 266.747, -52.84095, 10, 112404821, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1144.429, 247.3352, -52.041, 10, 2168288314, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1129.406, 262.3578, -52.041, 10, 2168288314, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1143.338, 264.2453, -52.84094, 10, 2566890193, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1146.329, 261.2543, -52.84094, 10, 2566890193, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1133.74, 266.6947, -52.04094, 10, 618005505, true);
    mp.game.entity.createModelHideExcludingScriptObjects(1148.74, 251.6947, -52.04094, 10, 618005505, true);
    for (let _0x3b7c94 = 0; _0x3b7c94 < blackjackData.tablePositions.length; _0x3b7c94++) {
      blackjackData.tableInfo[_0x3b7c94] = {};
      blackjackData.tableInfo[_0x3b7c94].table = mp.objects.new(mp.game.joaat(blackjackData.tablePositions[_0x3b7c94][0]), new mp.Vector3(blackjackData.tablePositions[_0x3b7c94][1], blackjackData.tablePositions[_0x3b7c94][2], blackjackData.tablePositions[_0x3b7c94][3]));
      blackjackData.tableInfo[_0x3b7c94].ped = mp.peds.new(mp.game.joaat(blackjackData.pedModels[_0x3b7c94]), new mp.Vector3(blackjackData.tablePositions[_0x3b7c94][1], blackjackData.tablePositions[_0x3b7c94][2] + 0.75, blackjackData.tablePositions[_0x3b7c94][3] + 1.0001), 180, 0);
      blackjackData.tableInfo[_0x3b7c94].ped.croupier = _0x3b7c94;
      play_animation(blackjackData.tableInfo[_0x3b7c94].ped, "anim_casino_b@amb@casino@games@shared@dealer@", _0x3b7c94 % 2 ? "female_idle" : "idle", 1, 2, true, true, true);
      for (let _0x5e1411 = 0; _0x5e1411 < blackjackData.shapePositionOffset.length; _0x5e1411++) {
        let _0x40df92 = mp.colshapes.newSphere(blackjackData.tablePositions[_0x3b7c94][1] + blackjackData.shapePositionOffset[_0x5e1411][0], blackjackData.tablePositions[_0x3b7c94][2] + blackjackData.shapePositionOffset[_0x5e1411][1], blackjackData.tablePositions[_0x3b7c94][3] + blackjackData.shapePositionOffset[_0x5e1411][2], 0.5);
        _0x40df92.BlackJackShape = _0x3b7c94;
        _0x40df92.BlackJackShapeSeatID = _0x5e1411;
      }
      blackjackData.CardObjects[_0x3b7c94] = [];
      blackjackData.BetObjects[_0x3b7c94] = [];
      for (let _0x3ed46d = 0; _0x3ed46d < 5; _0x3ed46d++) {
        blackjackData.CardObjects[_0x3b7c94][_0x3ed46d] = [];
        for (let _0xe3e87f = 0; _0xe3e87f < 2; _0xe3e87f++) {
          blackjackData.CardObjects[_0x3b7c94][_0x3ed46d][_0xe3e87f] = [];
        }
        if (_0x3ed46d < 4) {
          blackjackData.BetObjects[_0x3b7c94][_0x3ed46d] = [];
          for (let _0x1aac2f = 0; _0x1aac2f < 2; _0x1aac2f++) {
            blackjackData.BetObjects[_0x3b7c94][_0x3ed46d][_0x1aac2f] = [];
          }
        }
      }
      let _0x2c6b37 = mp.game.object.getObjectOffsetFromCoords(blackjackData.tablePositions[_0x3b7c94][1], blackjackData.tablePositions[_0x3b7c94][2], blackjackData.tablePositions[_0x3b7c94][3], blackjackData.tableInfo[_0x3b7c94].table.getRotation(2).z, 0.526, 0.571, 0.963);
      mp.objects.new(mp.game.joaat(blackjackData.CardsModel[1]), new mp.Vector3(_0x2c6b37.x, _0x2c6b37.y, _0x2c6b37.z), {
        rotation: new mp.Vector3(blackjackData.tableInfo[_0x3b7c94].table.getRotation(2).z, 164.52, 11.5),
        alpha: 255,
        dimension: 0
      });
    }
    for (let _0x5b47b9 = 0; _0x5b47b9 < PokerData.tablePositions.length; _0x5b47b9++) {
      PokerData.tableInfo[_0x5b47b9] = {};
      PokerData.tableInfo[_0x5b47b9].table = mp.objects.new(mp.game.joaat(PokerData.tableProp), new mp.Vector3(PokerData.tablePositions[_0x5b47b9][0], PokerData.tablePositions[_0x5b47b9][1], PokerData.tablePositions[_0x5b47b9][2]), {
        rotation: new mp.Vector3(0, 0, PokerData.tablePositions[_0x5b47b9][3]),
        alpha: 255,
        dimension: 0
      });
      mp.labels.new(TranslateText("Min bet: {0}~n~Max bet: {1}", getPrice(PokerData.bets[_0x5b47b9][0] * 100), getPrice(PokerData.bets[_0x5b47b9][1] * 100)), new mp.Vector3(PokerData.tablePositions[_0x5b47b9][0], PokerData.tablePositions[_0x5b47b9][1], PokerData.tablePositions[_0x5b47b9][2] + 2.5), {
        los: false,
        font: 0,
        drawDistance: 10,
        color: [255, 255, 255, 255],
        dimension: 0
      });
      const [_0x32c066, _0x1c8a0a, _0x1dbb0c] = getXYZwithRotate(new mp.Vector3(PokerData.tablePositions[_0x5b47b9][0], PokerData.tablePositions[_0x5b47b9][1], PokerData.tablePositions[_0x5b47b9][2]), PokerData.tablePositions[_0x5b47b9][3], new mp.Vector3(PokerData.pedPositionsOffsets[0], PokerData.pedPositionsOffsets[1], PokerData.pedPositionsOffsets[2]));
      const _0x1a0e90 = headingTurnTo(new mp.Vector3(_0x32c066, _0x1c8a0a, _0x1dbb0c), new mp.Vector3(PokerData.tablePositions[_0x5b47b9][0], PokerData.tablePositions[_0x5b47b9][1], PokerData.tablePositions[_0x5b47b9][2]));
      PokerData.tableInfo[_0x5b47b9].ped = mp.peds.new(mp.game.joaat(PokerData.pedModels[_0x5b47b9]), new mp.Vector3(_0x32c066, _0x1c8a0a, _0x1dbb0c), _0x1a0e90, 0);
      play_animation(PokerData.tableInfo[_0x5b47b9].ped, "anim_casino_b@amb@casino@games@shared@dealer@", _0x5b47b9 % 2 ? "female_idle" : "idle", 1, 2, true, true, true);
      for (let _0x357205 = 0; _0x357205 < PokerData.shapePositionOffset.length; _0x357205++) {
        const [_0x8b0b2d, _0x214c24, _0x2460c1] = getXYZwithRotate(new mp.Vector3(PokerData.tablePositions[_0x5b47b9][0], PokerData.tablePositions[_0x5b47b9][1], PokerData.tablePositions[_0x5b47b9][2]), PokerData.tablePositions[_0x5b47b9][3], new mp.Vector3(PokerData.shapePositionOffset[_0x357205][0], PokerData.shapePositionOffset[_0x357205][1], PokerData.shapePositionOffset[_0x357205][2]));
        let _0x23cd52 = mp.colshapes.newSphere(_0x8b0b2d, _0x214c24, _0x2460c1, 0.5);
        _0x23cd52.PokerJackShape = _0x5b47b9;
        _0x23cd52.PokerJackShapeSeatID = _0x357205;
      }
    }
  }
}
function requestScaleformMovie(_0x4d4dd0) {
  return new Promise(async (_0x40b97a, _0x58932b) => {
    const _0x500124 = mp.game.graphics.requestScaleformMovie(_0x4d4dd0);
    if (mp.game.graphics.hasScaleformMovieLoaded(_0x500124)) {
      return _0x40b97a(_0x500124);
    }
    let _0x21ec12 = 0;
    const _0x12281e = async _0x30ed53 => {
      try {
        if (_0x21ec12 > 500) {
          return _0x40b97a("Ошибка requestScaleformMovie. Texture: " + _0x30ed53);
        }
        if (mp.game.graphics.hasScaleformMovieLoaded(_0x500124)) {
          return _0x40b97a(_0x500124);
        }
        setTimeout(() => {
          try {
            _0x21ec12++;
            _0x12281e(_0x30ed53);
          } catch (_0xdb30a2) {}
        }, 10);
      } catch (_0x357c37) {}
    };
    _0x12281e(_0x500124);
  });
}
mp.events.add("playerExitColshape", _0x40e198 => {
  if (_0x40e198 == rotatePodiumColshape) {
    is_in_casino = false;
    main_browser.execute("APPS.state.hud.is_casino = false;");
    if (mp.game.audio.isAudioSceneActive("DLC_VW_Casino_General")) {
      mp.game.audio.stopAudioScene("DLC_VW_Casino_General");
    }
    if (diamond_walls == 1) {
      mp.game.ui.releaseNamedRendertarget(String(renderTarget));
      mp.game.ui.isNamedRendertargetRegistered(targetName);
      mp.game.graphics.setStreamedTextureDictAsNoLongerNeeded(textureDict);
      mp.game.graphics.setTvChannel(-1);
      diamond_walls = false;
    }
  }
});
mp.events.add("render", () => {
  if (loggedin && is_in_casino && casinoWheelData.spinStart == 1) {
    if (!casinoWheelData.luckyObject || !mp.objects.exists(casinoWheelData.luckyObject)) {
      return;
    }
    if (casinoWheelData.rollY <= -360) {
      casinoWheelData.rollY = 0;
      casinoWheelData.rollCount360++;
    } else {
      casinoWheelData.rollY -= 8 - casinoWheelData.rollCount360;
    }
    const _0x1dbab9 = casinoWheelData.luckyObject.rotation;
    casinoWheelData.luckyObject.rotation = new mp.Vector3(_0x1dbab9.x, casinoWheelData.rollY, _0x1dbab9.z);
    if (casinoWheelData.rollCount360 == 7 && casinoWheelData.rollY <= casinoWheelData.rollWin * -18) {
      casinoWheelData.spinStart = false;
      casinoWheelData.rollCount360 = 0;
      casinoWheelData.rollWin = 0;
      casinoWheelData.rollY = 0;
    }
  }
});
mp.events.add("render", () => {
  if (loggedin && is_in_casino) {
    if (casinoRouletteData.cameraRoulette != null && casinoRouletteData.join != null) {
      let _0x44000c = mp.gui.cursor.position;
      let _0x30fbce = mp.game.graphics.getScreenActiveResolution(0, 0);
      let _0x219388 = 30;
      let _0x1ee401 = null;
      casinoRouletteData.chipOffsets.forEach((_0x5ac368, _0x20a9b7) => {
        let _0x4e4455 = casinoRouletteData.objectOffsets[_0x20a9b7] || _0x5ac368;
        let _0xefbfe6 = casinoRouletteData.tableInfo[casinoRouletteData.join].table.getOffsetFromInWorldCoords(_0x4e4455.position_x, _0x4e4455.position_y, _0x4e4455.position_z);
        let _0xe6e526 = mp.game.graphics.world3dToScreen2d(_0xefbfe6);
        if (_0xe6e526) {
          let _0x535055 = _0xe6e526.x * _0x30fbce.x;
          let _0x30302f = _0xe6e526.y * _0x30fbce.y;
          let _0x226027 = Math.sqrt(Math.pow(_0x535055 - _0x44000c[0], 2) + Math.pow(_0x30302f - _0x44000c[1], 2));
          if (_0x226027 < _0x219388) {
            _0x219388 = _0x226027;
            _0x1ee401 = _0x20a9b7;
          }
        }
      });
      if (_0x1ee401 != casinoRouletteData.lastHoverID) {
        destroyMarkersRoulette();
        casinoRouletteData.lastHoverID = _0x1ee401;
        if (_0x1ee401 != null) {
          mp.game.audio.playSoundFrontend(-1, "DLC_VW_BET_HIGHLIGHT", "dlc_vw_table_games_frontend_sounds", true);
          casinoRouletteData.chipOffsets[_0x1ee401].marker_list.forEach(_0x4a3b02 => {
            let _0x4f335c = casinoRouletteData.markerOffsets[_0x4a3b02];
            if (!_0x4f335c) {
              return;
            }
            let _0x5d6e43 = _0x4a3b02 == 36 || _0x4a3b02 == 37 ? mp.game.joaat("vw_prop_vw_marker_01a") : mp.game.joaat("vw_prop_vw_marker_02a");
            let _0x2431d3 = casinoRouletteData.tableInfo[casinoRouletteData.join].table.getOffsetFromInWorldCoords(_0x4f335c.position_x, _0x4f335c.position_y, _0x4f335c.position_z);
            let _0x5b7901 = mp.objects.new(_0x5d6e43, _0x2431d3, {
              rotation: new mp.Vector3(0, 0, 0)
            });
            if (_0x5b7901) {
              casinoRouletteData.hoverObjects.push(_0x5b7901);
            }
          });
        }
      }
    }
    for (let _0x3e67cf = 0; _0x3e67cf < casinoRouletteData.tablePositions.length; _0x3e67cf++) {
      if (casinoRouletteData.spinTable[_0x3e67cf] != 0) {
        if (casinoRouletteData.tableInfo[_0x3e67cf].table.isPlayingAnim("anim_casino_b@amb@casino@games@roulette@table", "intro_wheel", 3) && casinoRouletteData.tableInfo[_0x3e67cf].table.getAnimCurrentTime("anim_casino_b@amb@casino@games@roulette@table", "intro_wheel") > 0.9425) {
          casinoRouletteData.tableInfo[_0x3e67cf].table.playAnim("loop_wheel", "anim_casino_b@amb@casino@games@roulette@table", 1000, false, true, true, 0, 136704);
          casinoRouletteData.tableInfo[_0x3e67cf].table.forceAiAndAnimationUpdate();
        }
        if (casinoRouletteData.ballObject[_0x3e67cf].isPlayingAnim("anim_casino_b@amb@casino@games@roulette@table", "intro_ball", 3) && casinoRouletteData.ballObject[_0x3e67cf].getAnimCurrentTime("anim_casino_b@amb@casino@games@roulette@table", "intro_ball") >= 1) {
          let _0x178f09 = mp.game.object.getObjectOffsetFromCoords(casinoRouletteData.tablePositions[_0x3e67cf][1], casinoRouletteData.tablePositions[_0x3e67cf][2], casinoRouletteData.tablePositions[_0x3e67cf][3], casinoRouletteData.tableInfo[_0x3e67cf].table.getRotation(2).z, -0.734742, -0.16617, 1.0715);
          casinoRouletteData.ballObject[_0x3e67cf].position = new mp.Vector3(_0x178f09.x, _0x178f09.y, _0x178f09.z);
          casinoRouletteData.ballObject[_0x3e67cf].rotation = new mp.Vector3(0, 0, casinoRouletteData.tableInfo[_0x3e67cf].table.getRotation(2).z + 90);
          casinoRouletteData.ballObject[_0x3e67cf].playAnim("loop_ball", "anim_casino_b@amb@casino@games@roulette@table", 1000, true, true, false, 0, 136704);
          casinoRouletteData.ballObject[_0x3e67cf].forceAiAndAnimationUpdate();
        }
        if (casinoRouletteData.tableInfo[_0x3e67cf].table.isPlayingAnim("anim_casino_b@amb@casino@games@roulette@table", "loop_wheel", 3) && casinoRouletteData.tableInfo[_0x3e67cf].table.getAnimCurrentTime("anim_casino_b@amb@casino@games@roulette@table", "loop_wheel") >= 1) {
          casinoRouletteData.tableInfo[_0x3e67cf].table.playAnim("exit_" + casinoRouletteData.spinWinTable[_0x3e67cf] + "_wheel", "anim_casino_b@amb@casino@games@roulette@table", 1000, false, true, true, 0, 136704);
          casinoRouletteData.tableInfo[_0x3e67cf].table.forceAiAndAnimationUpdate();
          let _0x293685 = mp.game.object.getObjectOffsetFromCoords(casinoRouletteData.tablePositions[_0x3e67cf][1], casinoRouletteData.tablePositions[_0x3e67cf][2], casinoRouletteData.tablePositions[_0x3e67cf][3], casinoRouletteData.tableInfo[_0x3e67cf].table.getRotation(2).z, -0.734742, -0.16617, 1.0715);
          casinoRouletteData.ballObject[_0x3e67cf].position = new mp.Vector3(_0x293685.x, _0x293685.y, _0x293685.z);
          casinoRouletteData.ballObject[_0x3e67cf].rotation = new mp.Vector3(0, 0, casinoRouletteData.tableInfo[_0x3e67cf].table.getRotation(2).z - 90);
          if (casinoRouletteData.ballSoundID[_0x3e67cf]) {
            mp.game.audio.stopSound(casinoRouletteData.ballSoundID[_0x3e67cf]);
          }
          mp.game.audio.playSoundFromEntity(casinoRouletteData.ballSoundID[_0x3e67cf], "dlc_vw_roulette_exit_" + casinoRouletteData.spinWinTable[_0x3e67cf], casinoRouletteData.ballObject[_0x3e67cf].handle, "dlc_vw_table_games_roulette_exit_sounds", false, 0);
          casinoRouletteData.ballObject[_0x3e67cf].playAnim("exit_" + casinoRouletteData.spinWinTable[_0x3e67cf] + "_ball", "anim_casino_b@amb@casino@games@roulette@table", 1000, false, true, true, 0, 136704);
          casinoRouletteData.ballObject[_0x3e67cf].forceAiAndAnimationUpdate();
          casinoRouletteData.spinTable[_0x3e67cf] = false;
          casinoRouletteData.spinWinTable[_0x3e67cf] = 0;
        }
      }
    }
    if (diamond_walls == 1) {
      mp.game.ui.setTextRenderId(renderTarget);
      mp.game.invoke("0x61BB1D9B3A95D802", 4);
      mp.game.invoke("0xC6372ECD45D73BCD", true);
      if (mp.game.graphics.hasStreamedTextureDictLoaded(textureDict)) {
        mp.game.invoke("0x2BC54A8188768488", textureDict, textureName, 0.25, 0.5, 0.5, 1, 0, 255, 255, 255, 255);
        mp.game.graphics.drawTvChannel(0.5, 0.5, 1, 1, 0, 255, 255, 255, 255);
        mp.game.ui.setTextRenderId(1);
      }
    }
  }
});
mp.events.add("render", () => {
  if (loggedin && is_in_casino) {
    for (let _0x299135 = 1; _0x299135 < 17; _0x299135++) {
      let _0x2e8936 = _0x299135 + 2;
      let _0x2d973d = _0x299135;
      if (_0x299135 + 2 < 10) {
        _0x2e8936 = "0" + (_0x299135 + 2);
      }
      if (_0x299135 < 10) {
        _0x2d973d = "0" + _0x299135;
      }
      if (mp.game.ui.isNamedRendertargetRegistered("casinoscreen_" + _0x2e8936) && mp.game.ui.isNamedRendertargetLinked(mp.game.joaat("vw_vwint01_betting_sreen_" + _0x2d973d))) {
        mp.game.ui.setTextRenderId(mp.game.ui.getNamedRendertargetRenderId("casinoscreen_" + _0x2e8936));
        mp.game.invoke("0xB8A850F20A067EB6", 73, 73);
        mp.game.graphics.set2dLayer(4);
        mp.game.invoke("0xC6372ECD45D73BCD", true);
        if (mp.game.graphics.hasStreamedTextureDictLoaded("Prop_Screen_VW_InsideTrack")) {
          mp.game.graphics.drawSprite("Prop_Screen_VW_InsideTrack", "BETTING_GENERIC_PURPLE", 0.5, 0.5, 1, 1, 0, 255, 255, 255, 255);
          mp.game.invoke("0xE3A3DB414A373DAB");
        }
        mp.game.ui.setTextRenderId(mp.game.invoke("0x52F0982D7FD156B6"));
      }
    }
    if (handle_movie != null && joaat_screen != null && mp.game.ui.isNamedRendertargetRegistered("casinoscreen_02") && mp.game.ui.isNamedRendertargetLinked(joaat_screen)) {
      mp.game.ui.setTextRenderId(mp.game.ui.getNamedRendertargetRenderId("casinoscreen_02"));
      mp.game.graphics.set2dLayer(4);
      mp.game.invoke("0xC6372ECD45D73BCD", true);
      mp.game.graphics.drawScaleformMovie(handle_movie, 0.5, 0.5, 1.001, 1.001, 255, 255, 255, 255, 0);
      mp.game.ui.setTextRenderId(mp.game.invoke("0x52F0982D7FD156B6"));
    }
  }
});
mp.events.add("render", () => {
  if (loggedin && is_in_casino) {
    for (let _0x78c0b0 = 0; _0x78c0b0 < casinoSlotData.machineData.length; _0x78c0b0++) {
      const _0x1442ea = casinoSlotData.machineData[_0x78c0b0];
      if (_0x1442ea) {
        for (let _0x815269 = 0; _0x815269 < 3; _0x815269++) {
          if (!_0x1442ea.spinning[_0x815269]) {
            continue;
          }
          const _0x1e8a73 = _0x1442ea.reels[_0x815269];
          if (_0x1e8a73 && mp.objects.exists(_0x1e8a73)) {
            _0x1442ea.spinRot[_0x815269] = (_0x1442ea.spinRot[_0x815269] || 0) + 5;
            _0x1e8a73.rotation = new mp.Vector3(_0x1442ea.spinRot[_0x815269], 0, casinoSlotData.machinePositions[_0x78c0b0].rz);
          }
        }
      }
    }
  }
});
mp.events.add("render", () => {
  if (loggedin && is_in_casino) {
    mp.game.controls.disableControlAction(2, 22, true);
    casino_veh_rot += 0.05;
    if (casino_veh_rot >= 360) {
      casino_veh_rot = 0;
    }
    veh_wheel.rotation = new mp.Vector3(0, 0, casino_veh_rot);
  }
});
setTimeout(function () {
  const _0x6c4f8e = [{
    position: new mp.Vector3(942.556, 60.614, 113.731)
  }, {
    position: new mp.Vector3(936.55, 51.023, 113.731)
  }, {
    position: new mp.Vector3(930.274, 41.271, 113.731)
  }, {
    position: new mp.Vector3(924.038, 31.414, 113.731)
  }];
  const _0x39f0a9 = [{
    position: new mp.Vector3(917.065, 41.044, 111.701)
  }, {
    position: new mp.Vector3(915.924, 39.833, 111.701)
  }, {
    position: new mp.Vector3(915.052, 39.38, 111.701)
  }, {
    position: new mp.Vector3(913.866, 40.564, 111.701)
  }, {
    position: new mp.Vector3(913.025, 41.935, 111.701)
  }, {
    position: new mp.Vector3(912.262, 43.179, 111.701)
  }, {
    position: new mp.Vector3(918.701, 53.943, 111.698)
  }, {
    position: new mp.Vector3(919.18, 55.582, 111.701)
  }, {
    position: new mp.Vector3(919.807, 56.439, 111.701)
  }, {
    position: new mp.Vector3(921.435, 55.852, 111.701)
  }, {
    position: new mp.Vector3(922.588, 55.033, 111.701)
  }, {
    position: new mp.Vector3(923.963, 54.186, 111.701)
  }, {
    position: new mp.Vector3(922.799, 52.319, 111.701)
  }, {
    position: new mp.Vector3(921.361, 51.812, 111.701)
  }, {
    position: new mp.Vector3(920.008, 51.28, 111.701)
  }, {
    position: new mp.Vector3(910.729, 51.464, 111.701)
  }, {
    position: new mp.Vector3(909.515, 51.37, 111.701)
  }, {
    position: new mp.Vector3(908.658, 52.013, 111.689)
  }, {
    position: new mp.Vector3(909.292, 54.274, 111.701)
  }, {
    position: new mp.Vector3(910.362, 54.276, 111.701)
  }, {
    position: new mp.Vector3(911.277, 53.578, 111.701)
  }, {
    position: new mp.Vector3(954.487, 56.93, 112.552)
  }, {
    position: new mp.Vector3(955.581, 56.162, 112.552)
  }, {
    position: new mp.Vector3(956.722, 55.556, 112.552)
  }, {
    position: new mp.Vector3(960.76, 54.8, 112.551)
  }, {
    position: new mp.Vector3(960.192, 53.111, 112.553)
  }, {
    position: new mp.Vector3(959.083, 51.936, 112.553)
  }, {
    position: new mp.Vector3(957.779, 49.824, 112.558)
  }, {
    position: new mp.Vector3(957.141, 48.137, 112.553)
  }, {
    position: new mp.Vector3(955.925, 47.023, 112.553)
  }, {
    position: new mp.Vector3(954.666, 44.949, 112.541)
  }, {
    position: new mp.Vector3(953.974, 43.358, 112.553)
  }, {
    position: new mp.Vector3(952.919, 42.129, 112.553)
  }, {
    position: new mp.Vector3(951.693, 40.021, 112.553)
  }, {
    position: new mp.Vector3(951.043, 38.378, 112.553)
  }, {
    position: new mp.Vector3(949.846, 37.226, 112.553)
  }, {
    position: new mp.Vector3(948.509, 35.194, 112.553)
  }, {
    position: new mp.Vector3(947.94, 33.533, 112.553)
  }, {
    position: new mp.Vector3(946.809, 32.39, 112.553)
  }, {
    position: new mp.Vector3(945.488, 30.258, 112.549)
  }, {
    position: new mp.Vector3(944.886, 28.534, 112.553)
  }, {
    position: new mp.Vector3(943.69, 27.474, 112.553)
  }, {
    position: new mp.Vector3(942.398, 25.381, 112.553)
  }, {
    position: new mp.Vector3(941.834, 23.893, 112.553)
  }, {
    position: new mp.Vector3(940.582, 22.571, 112.55)
  }, {
    position: new mp.Vector3(939.33, 20.481, 112.553)
  }, {
    position: new mp.Vector3(938.791, 18.777, 112.553)
  }, {
    position: new mp.Vector3(937.631, 17.738, 112.553)
  }, {
    position: new mp.Vector3(935.133, 20.885, 112.553)
  }, {
    position: new mp.Vector3(933.829, 21.728, 112.553)
  }, {
    position: new mp.Vector3(932.737, 22.43, 112.553)
  }, {
    position: new mp.Vector3(942.299, 37.291, 112.553)
  }, {
    position: new mp.Vector3(943.261, 36.577, 112.553)
  }, {
    position: new mp.Vector3(944.442, 35.933, 112.553)
  }, {
    position: new mp.Vector3(947.252, 40.575, 112.553)
  }, {
    position: new mp.Vector3(946.092, 41.294, 112.553)
  }, {
    position: new mp.Vector3(944.924, 42.037, 112.553)
  }, {
    position: new mp.Vector3(953.933, 62.689, 112.549)
  }, {
    position: new mp.Vector3(954.636, 60.083, 112.553)
  }, {
    position: new mp.Vector3(951.581, 59.364, 112.553)
  }, {
    position: new mp.Vector3(951.141, 62.155, 112.551)
  }, {
    position: new mp.Vector3(947.805, 53.052, 112.553)
  }, {
    position: new mp.Vector3(948.485, 50.156, 112.553)
  }, {
    position: new mp.Vector3(945.509, 49.703, 112.553)
  }, {
    position: new mp.Vector3(944.985, 52.245, 112.553)
  }, {
    position: new mp.Vector3(941.833, 43.225, 112.553)
  }, {
    position: new mp.Vector3(942.492, 40.655, 112.553)
  }, {
    position: new mp.Vector3(939.58, 39.882, 112.553)
  }, {
    position: new mp.Vector3(938.9, 42.502, 112.553)
  }, {
    position: new mp.Vector3(935.795, 33.558, 112.553)
  }, {
    position: new mp.Vector3(936.397, 30.82, 112.553)
  }, {
    position: new mp.Vector3(933.729, 29.949, 112.553)
  }, {
    position: new mp.Vector3(932.914, 32.949, 112.553)
  }, {
    position: new mp.Vector3(929.542, 23.916, 112.557)
  }, {
    position: new mp.Vector3(930.163, 20.96, 112.552)
  }, {
    position: new mp.Vector3(927.519, 20.394, 112.553)
  }, {
    position: new mp.Vector3(926.894, 23.327, 112.552)
  }];
  for (let _0x494f8c = 0; _0x494f8c < _0x6c4f8e.length; _0x494f8c++) {
    mp.colshapes.newSphere(_0x6c4f8e[_0x494f8c].position.x, _0x6c4f8e[_0x494f8c].position.y, _0x6c4f8e[_0x494f8c].position.z, 1.5).is_casino_lounger = _0x494f8c + 1;
  }
  for (let _0x19d573 = 0; _0x19d573 < _0x39f0a9.length; _0x19d573++) {
    mp.colshapes.newSphere(_0x39f0a9[_0x19d573].position.x, _0x39f0a9[_0x19d573].position.y, _0x39f0a9[_0x19d573].position.z, 1).is_casino_sit = _0x19d573 + 1;
  }
}, 3000);
global.at_casino_restaurant_action = false;
global.at_casino_type = 0;
global.at_casino_index = 0;
mp.events.add("playerEnterColshape", _0x1669fc => mp.colshapes.exists(_0x1669fc) && _0x1669fc.is_casino_lounger ? (at_casino_index = _0x1669fc.is_casino_lounger, at_casino_type = 1, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : mp.colshapes.exists(_0x1669fc) && _0x1669fc.is_casino_sit ? (at_casino_index = _0x1669fc.is_casino_sit, at_casino_type = 2, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : undefined);
mp.events.add("playerExitColshape", _0x3477d1 => mp.colshapes.exists(_0x3477d1) && _0x3477d1.is_casino_lounger || mp.colshapes.exists(_0x3477d1) && _0x3477d1.is_casino_sit && _0x3477d1.is_casino_sit == at_casino_index ? (at_casino_index = 0, at_casino_type = 0, void main_browser.execute("APPS.state.hud.interact = false;")) : undefined);
mp.events.add("Client_EnterCasinoInteractCorrectly", () => {
  HintShow(language["Чтобы встать используйте ESC"][curr_lang]);
  localplayer.freezePosition(true);
  at_casino_index = 0;
  at_casino_type = 0;
  main_browser.execute("APPS.state.hud.interact = false;");
  at_casino_restaurant_action = true;
});
global.CloseCasinoInteractEntities = function () {
  if (at_casino_restaurant_action) {
    HintClose();
    at_casino_restaurant_action = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.events.callRemote("Server_ExitCasinoInteractEntities");
  }
};
global.DiceOpened = false;
mp.events.add("Client_OpenDice", (_0x2907d5, _0x527744, _0x1960f4 = 0, _0x5d10fc = "", _0xf0cda5 = 0, _0x40980d = 0) => {
  CloseBrowsers(true);
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x142ec1 = [];
  if (_0xf0cda5 == 0) {
    _0xf0cda5 = 2;
    mp.players.forEachInRange(localplayer.position, 5, _0x161f6c => {
      if (_0x161f6c != localplayer && _0x161f6c.dimension == localplayer.dimension && _0x161f6c.getAlpha() != 0) {
        if (mp.storage.data.friends[_0x161f6c.name] != null && !_0x161f6c.getDrawableVariation(1) || tempfriends[_0x161f6c.name] != null || localplayer.getVariable("Family") == _0x161f6c.getVariable("Family") && localplayer.getVariable("Family") != null || localplayer.getVariable("Member") == _0x161f6c.getVariable("Member") && localplayer.getVariable("Member") > 0 || spose_name === _0x161f6c.name) {
          _0x142ec1.push("{\"name\": \"" + _0x161f6c.name.replace("_", " ") + "\", \"pid\": " + _0x161f6c.getVariable("REMOTE_ID") + "}");
        } else {
          _0x142ec1.push("{\"name\": \"" + language.Игрок[curr_lang] + "\", \"pid\": " + _0x161f6c.getVariable("REMOTE_ID") + "}");
        }
      }
    });
    if (_0x142ec1 && _0x142ec1.length > 0) {
      _0xf0cda5 = 1;
    }
  }
  const _0x31aa95 = "{\"win_state\":" + _0x1960f4 + ",\"other_bet\":0,\"my_bet\":0,\"bet_status\":" + _0x40980d + ",\"other_name\":'" + _0x5d10fc + "',\"other_ready\":0,\"my_ready\":0,\"my_name\":'" + _0x2907d5 + "',\"balance\":" + _0x527744 + ",\"selectplayer\":" + _0xf0cda5 + ",\"people_around\":[" + _0x142ec1 + "],\"other_roll\":0,\"my_roll\":0,\"show\":true}";
  main_browser.execute("APPS.state.dice = " + _0x31aa95);
  DiceOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
global.CloseDice = function () {
  if (DiceOpened && loggedin && !chatActive) {
    if (dice_interval != null) {
      clearInterval(dice_interval);
      dice_interval = null;
    }
    main_browser.execute("APPS.state.dice.show = false;");
    DiceOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_ClosePlayDice");
  }
};
mp.events.add("Client_CloseDice", () => {
  CloseDice();
});
mp.events.add("Client_PlayDice", (_0x5e3ed4, _0x32199) => {
  if (DiceOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_PlayDice", _0x5e3ed4, _0x32199);
    }
  }
});
mp.events.add("Client_SetDiceBet", _0x4c02a1 => {
  if (DiceOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetDiceBet", _0x4c02a1);
    }
  }
});
mp.events.add("Client_AcceptDiceBet", () => {
  if (DiceOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Client_AcceptDiceBet");
    }
  }
});
mp.events.add("Client_CancelDiceBet", () => {
  if (DiceOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Client_CancelDiceBet");
    }
  }
});
mp.events.add("Client_DiceEnterGame", (_0x2a32c2, _0x2ec49a = -1) => {
  if (!DiceOpened || !loggedin || chatActive) {
    return;
  }
  if (dice_interval != null) {
    clearInterval(dice_interval);
    dice_interval = null;
  }
  const _0x4b67ec = typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x2a32c2) : _0x2a32c2;
  main_browser.execute("APPS.state.dice.my_bet = 0;");
  main_browser.execute("APPS.state.dice.other_bet = 0;");
  main_browser.execute("APPS.state.dice.win_state = 3;");
  main_browser.execute("APPS.state.dice.bet_status = 1;");
  main_browser.execute("APPS.state.dice.other_ready = 0;");
  main_browser.execute("APPS.state.dice.my_ready = 0;");
  main_browser.execute("APPS.state.dice.other_name = " + JSON.stringify(_0x4b67ec));
  main_browser.execute("APPS.state.dice.selectplayer = 0;");
  if (_0x2ec49a != -1) {
    main_browser.execute("APPS.state.dice.balance = " + _0x2ec49a);
  }
});
mp.events.add("Client_SetMyBetStatus", (_0x5f1681, _0x12c512 = 0) => {
  if (DiceOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.dice.bet_status = " + _0x5f1681 + ";");
    main_browser.execute("APPS.state.dice.my_bet = " + _0x12c512 + ";");
  }
});
mp.events.add("Client_SetOtherBetStatus", (_0xed1397, _0x417424 = 0) => {
  if (DiceOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.dice.bet_status = " + _0xed1397 + ";");
    main_browser.execute("APPS.state.dice.other_bet = " + _0x417424 + ";");
  }
});
mp.events.add("Client_StartOtherRoll", _0x145638 => {
  if (dice_interval != null) {
    clearInterval(dice_interval);
    dice_interval = null;
  }
  let _0x553657 = 0;
  dice_interval = setInterval(function () {
    _0x553657 += 8;
    if (_0x553657 > 100) {
      _0x553657 = 100;
    }
    main_browser.execute("APPS.state.dice.other_ready = " + _0x553657);
    if (_0x553657 >= 100) {
      clearInterval(dice_interval);
      dice_interval = null;
      main_browser.execute("APPS.state.dice.other_roll = " + _0x145638);
    }
  }, 50);
});
mp.events.add("Client_StartMyRoll", (_0x15b133, _0x506f1e) => {
  if (dice_interval != null) {
    clearInterval(dice_interval);
    dice_interval = null;
  }
  let _0x4f290d = 0;
  dice_interval = setInterval(function () {
    _0x4f290d += 8;
    if (_0x4f290d > 100) {
      _0x4f290d = 100;
    }
    main_browser.execute("APPS.state.dice.my_ready = " + _0x4f290d);
    if (_0x4f290d >= 100) {
      if (dice_interval != null) {
        clearInterval(dice_interval);
      }
      dice_interval = null;
      main_browser.execute("APPS.state.dice.win_state = " + _0x506f1e + ";");
      main_browser.execute("APPS.state.dice.my_roll = " + _0x15b133);
    }
  }, 50);
});
let dice_interval = null;
function getXYZwithRotate(_0x3fb051, _0x9612d1, _0x64f169) {
  const _0x41d2d3 = _0x9612d1 * (Math.PI / 180);
  return [_0x3fb051.x + (_0x64f169.x * Math.cos(_0x41d2d3) - _0x64f169.y * Math.sin(_0x41d2d3)), _0x3fb051.y + (_0x64f169.x * Math.sin(_0x41d2d3) + _0x64f169.y * Math.cos(_0x41d2d3)), _0x3fb051.z - _0x64f169.z];
}
function headingTurnTo(_0x1395d9, _0x1124e1, _0x518b34 = -90) {
  return Math.atan2(_0x1124e1.y - _0x1395d9.y, _0x1124e1.x - _0x1395d9.x) * 180 / Math.PI + _0x518b34;
}
function getPrice(_0x5b6e7e) {
  return String(_0x5b6e7e).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
mp.events.add("Client_SetDesignDices", (_0x1cbaf4, _0x4a050e, _0x5b16c4, _0x421f45) => {
  if (DiceOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.dice.win_state = " + _0x5b16c4 + ";");
    main_browser.execute("APPS.state.dice.my_roll = " + _0x1cbaf4);
    main_browser.execute("APPS.state.dice.other_roll = " + _0x4a050e);
    main_browser.execute("APPS.state.dice.balance = " + _0x421f45);
  }
});
mp.events.add("Client_ExitCasino", () => {
  for (let _0x464c0f = 0; _0x464c0f < 4; _0x464c0f++) {
    for (let _0x2886a5 = 0; _0x2886a5 < 5; _0x2886a5++) {
      if (blackjackData.CardObjects[_0x464c0f] && blackjackData.CardObjects[_0x464c0f][_0x2886a5]) {
        if (blackjackData.CardObjects[_0x464c0f][_0x2886a5][0].length) {
          for (let _0xfae1c4 = 0; _0xfae1c4 < blackjackData.CardObjects[_0x464c0f][_0x2886a5][0].length; _0xfae1c4++) {
            if (blackjackData.CardObjects[_0x464c0f][_0x2886a5][0][_0xfae1c4] && mp.objects.exists(blackjackData.CardObjects[_0x464c0f][_0x2886a5][0][_0xfae1c4])) {
              blackjackData.CardObjects[_0x464c0f][_0x2886a5][0][_0xfae1c4].destroy();
            }
          }
        }
        if (blackjackData.CardObjects[_0x464c0f][_0x2886a5][1].length) {
          for (let _0x5894d9 = 0; _0x5894d9 < blackjackData.CardObjects[_0x464c0f][_0x2886a5][1].length; _0x5894d9++) {
            if (blackjackData.CardObjects[_0x464c0f][_0x2886a5][1][_0x5894d9] && mp.objects.exists(blackjackData.CardObjects[_0x464c0f][_0x2886a5][1][_0x5894d9])) {
              blackjackData.CardObjects[_0x464c0f][_0x2886a5][1][_0x5894d9].destroy();
            }
          }
        }
      }
      if (_0x2886a5 < 4 && blackjackData.BetObjects[_0x464c0f] && blackjackData.BetObjects[_0x464c0f][_0x2886a5]) {
        if (blackjackData.BetObjects[_0x464c0f][_0x2886a5][0].length) {
          for (let _0x17c744 = 0; _0x17c744 < blackjackData.BetObjects[_0x464c0f][_0x2886a5][0].length; _0x17c744++) {
            if (blackjackData.BetObjects[_0x464c0f][_0x2886a5][0][_0x17c744] && mp.objects.exists(blackjackData.BetObjects[_0x464c0f][_0x2886a5][0][_0x17c744])) {
              blackjackData.BetObjects[_0x464c0f][_0x2886a5][0][_0x17c744].destroy();
            }
          }
        }
        if (blackjackData.BetObjects[_0x464c0f][_0x2886a5][1].length) {
          for (let _0x10bfdd = 0; _0x10bfdd < blackjackData.BetObjects[_0x464c0f][_0x2886a5][1].length; _0x10bfdd++) {
            if (blackjackData.BetObjects[_0x464c0f][_0x2886a5][1][_0x10bfdd] && mp.objects.exists(blackjackData.BetObjects[_0x464c0f][_0x2886a5][1][_0x10bfdd])) {
              blackjackData.BetObjects[_0x464c0f][_0x2886a5][1][_0x10bfdd].destroy();
            }
          }
        }
      }
    }
    blackjackData.CardObjects[_0x464c0f] = [];
    blackjackData.BetObjects[_0x464c0f] = [];
    for (let _0x27d25c = 0; _0x27d25c < 5; _0x27d25c++) {
      blackjackData.CardObjects[_0x464c0f][_0x27d25c] = [];
      for (let _0x1ef263 = 0; _0x1ef263 < 2; _0x1ef263++) {
        blackjackData.CardObjects[_0x464c0f][_0x27d25c][_0x1ef263] = [];
      }
      if (_0x27d25c < 4) {
        blackjackData.BetObjects[_0x464c0f][_0x27d25c] = [];
        for (let _0x73a89f = 0; _0x73a89f < 2; _0x73a89f++) {
          blackjackData.BetObjects[_0x464c0f][_0x27d25c][_0x73a89f] = [];
        }
      }
    }
  }
});
global.PokerCasinoOpened = false;
let PokerData = {
  tableProp: global.curr_lang == "ru" ? "gr_1x_prop_poker_5chair" : "gr_prop_poker_5chair",
  tablePositions: [[1147.329, 261.2543, -52.84094, 90], [1143.338, 265.2453, -52.84094, 180], [1147.837, 269.747, -52.84095, 270], [1151.84, 265.747, -52.84095, 0], [1130.92334, 241.132324, -51.0430336, 45], [1133.09888, 243.307877, -51.0430336, 225], [1125.598, 250.8087, -51.0430336, 225], [1123.39856, 248.657074, -51.0430336, 45]],
  shapePositionOffset: [[-1.1820000000000164, 1.031000000000006, -0.9999499999999983], [0.3160000000000309, 1.9850000000000136, -0.9999499999999983], [-1.2289999999998145, -0.5649999999999977, -0.9999499999999983], [1.196999999999889, -1.0329999999999586, -0.9999499999999983], [-0.36800000000016553, -1.9629999999999654, -0.9999499999999983]],
  seatPositionOffsets: [[-0.73700000000008, 1.4379999999999882, -0.9999499999999983], [0.6789999999998599, 1.4230000000000018, -0.9999499999999983], [-0.9220000000000255, -0.007000000000005002, -0.9999499999999983], [0.7139999999999418, -1.4370000000000118, -0.9999499999999983], [-0.6730000000000018, -1.4359999999999786, -0.9999499999999983]],
  cameraPositionOffsets: [[0, 0, 3.122, 0], [0, 0, 3.122, 90], [0, 0, 3.122, 180], [0, 0, 3.122, -90], [0, 0, 3.122, -45], [0, 0, 2.922, 135], [0, 0, 2.922, 135], [0, 0, 3.122, -45]],
  bets: [[10, 1000], [10, 1000], [100, 10000], [100, 10000], [1000, 10000], [1000, 10000], [10000, 100000], [10000, 100000]],
  pedPositionsOffsets: [1.0850000000000364, -0.002999999999985903, -0.9999499999999983],
  pedModels: ["S_M_Y_Casino_01", "S_F_Y_Casino_01", "S_M_Y_Casino_01", "S_F_Y_Casino_01", "S_M_Y_Casino_01", "S_M_Y_Casino_01", "S_F_Y_Casino_01", "S_F_Y_Casino_01"],
  toJoin: null,
  toJoinSeatID: null,
  join: null,
  tableInfo: [],
  cameraPoker: null
};
mp.events.add("client::poker::showMenu", ({
  roomIndex: _0x5aeab2,
  isStarted: _0x57e1db,
  roomState: _0x46442f,
  pot: _0x5e367b,
  gamers: _0x14f5c5,
  sharedCards: _0x10e03f,
  cards: _0x45dcc3
}) => {
  if (is_in_casino && GlobalCheck() != 1 && PokerData.join == null && PokerData.join == null) {
    if (mp.objects.exists(PokerData.tableInfo[_0x5aeab2].table)) {
      PokerData.tableInfo[_0x5aeab2].table.setCollision(false, false);
    }
    PokerData.join = _0x5aeab2;
    localplayer.freezePosition(true);
    is_freezed = true;
    PokerData.cameraPoker = mp.cameras.new("default", new mp.Vector3(PokerData.tablePositions[_0x5aeab2][0] + PokerData.cameraPositionOffsets[_0x5aeab2][0], PokerData.tablePositions[_0x5aeab2][1] + PokerData.cameraPositionOffsets[_0x5aeab2][1], PokerData.tablePositions[_0x5aeab2][2] + PokerData.cameraPositionOffsets[_0x5aeab2][2] + 0.3), new mp.Vector3(-90, 0, PokerData.cameraPositionOffsets[_0x5aeab2][3]), 40);
    PokerData.cameraPoker.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 900, true, false);
    PokerCasinoOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
    main_browser.execute("APPS.state.poker.sharedCards = " + JSON.stringify(_0x10e03f));
    main_browser.execute("APPS.state.poker.pot = " + _0x5e367b);
    main_browser.execute("APPS.state.poker.gamers = " + JSON.stringify(_0x14f5c5));
    main_browser.execute("APPS.state.poker.cards = " + JSON.stringify(_0x45dcc3));
    main_browser.execute("APPS.state.poker.roomState = " + _0x46442f);
    main_browser.execute("APPS.state.poker.isStarted = " + _0x57e1db);
    main_browser.execute("APPS.state.poker.show = true");
  }
});
mp.events.add("client::poker::updateGame", ({
  isStarted: _0x3a27fa,
  roomState: _0x410644,
  seatId: _0x5331d2,
  timerType: _0x162201,
  timerTime: _0x5d9179,
  pot: _0x3ba396,
  sharedCards: _0x3b342d,
  gamers: _0x41a414
}) => {
  main_browser.execute("\n        APPS.state.poker.isStarted = " + _0x3a27fa + ";\n        APPS.state.poker.roomState = " + _0x410644 + ";\n        APPS.state.poker.seatId = " + _0x5331d2 + ";\n        APPS.state.poker.timerType = " + _0x162201 + ";\n        APPS.state.poker.timerTime = " + _0x5d9179 + ";\n        APPS.state.poker.pot = " + _0x3ba396 + ";\n        APPS.state.poker.sharedCards = " + (_0x3b342d ? JSON.stringify(_0x3b342d) : _0x3b342d) + ";\n        APPS.state.poker.gamers = " + JSON.stringify(_0x41a414) + ";\n    ");
});
global.CloseCasinoPoker = function () {
  if (!PokerCasinoOpened || !loggedin || chatActive) {
    return;
  }
  main_browser.execute("APPS.state.poker.isStarted = false");
  main_browser.execute("APPS.state.poker.show = false;");
  PokerCasinoOpened = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  localplayer.freezePosition(false);
  is_freezed = false;
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (PokerData.cameraPoker != null) {
    PokerData.cameraPoker.destroy();
    PokerData.cameraPoker = null;
  }
  mp.game.cam.setFollowPedCamViewMode(2);
  let _0xa557ba = PokerData.join;
  setTimeout(() => {
    if (mp.objects.exists(PokerData.tableInfo[_0xa557ba].table)) {
      PokerData.tableInfo[_0xa557ba].table.setCollision(true, true);
    }
  }, 3000);
  PokerData.toJoin = null;
  PokerData.toJoinSeatID = null;
  PokerData.join = null;
};
mp.events.add("client::poker::unseat", () => {
  CloseCasinoPoker();
});
let lastCheck = 0;
mp.events.add("client::poker::onAction", (_0x493eb3, _0x5d9bd5) => {
  if (PokerCasinoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("server::poker::onAction", _0x493eb3, _0x5d9bd5);
    }
  }
});
mp.events.add("client::poker::leave", () => {
  if (PokerCasinoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("server::poker::unseat");
    }
  }
});