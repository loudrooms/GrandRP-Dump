global.easterMenuOpened = false;
const eggsPositions = [new mp.Vector3(-1562.999, -1156.815, 2.292), new mp.Vector3(-1779.023, -964.12, 4.109), new mp.Vector3(-1860.136, -594.833, 11.658), new mp.Vector3(-1819.921, -556.795, 17.191), new mp.Vector3(-2217.748, -443.196, 1.191), new mp.Vector3(-2038.413, -252.129, 23.529), new mp.Vector3(-1951.403, -286.603, 42.337), new mp.Vector3(-2021.244, -362.362, 48.103), new mp.Vector3(-1841.993, -375.735, 49.341), new mp.Vector3(-1547.97, -527.176, 35.83), new mp.Vector3(-1463.381, -639.061, 33.381), new mp.Vector3(-1373.77, -913.909, 10.283), new mp.Vector3(-1337.313, -759.307, 20.334), new mp.Vector3(-1501.823, -509.757, 32.807), new mp.Vector3(-1547.171, -267.297, 46.697), new mp.Vector3(-1755.763, 186.108, 64.44), new mp.Vector3(-1286.345, -185.371, 42.63), new mp.Vector3(-1159.782, -479.344, 37.566), new mp.Vector3(-1148.37, -1078.836, 3.504), new mp.Vector3(-1010.333, -1371.236, 5.198), new mp.Vector3(-1184.778, -1808.294, 3.899), new mp.Vector3(-1195.344, -2086.581, 14.23), new mp.Vector3(-1095.042, -2401.049, 13.918), new mp.Vector3(-928.841, -3070.636, 13.939), new mp.Vector3(-1020.816, -3574.658, 13.952), new mp.Vector3(-508.182, -2938.316, 5.988), new mp.Vector3(-305.92, -2609.918, 6), new mp.Vector3(120.336, -2959.621, 7.042), new mp.Vector3(291.557, -3338.202, 5.811), new mp.Vector3(1072.417, -2895.509, 11.26), new mp.Vector3(1200.586, -3119.126, 5.539), new mp.Vector3(1068.889, -2492.882, 29.403), new mp.Vector3(1612.133, -2375.908, 92.93), new mp.Vector3(1453.178, -1899.146, 71.859), new mp.Vector3(1777.904, -1614.895, 112.373), new mp.Vector3(1651.434, -1311.122, 84.468), new mp.Vector3(1124.06, -1302.235, 34.713), new mp.Vector3(1118.991, -1226.678, 21.103), new mp.Vector3(1235.943, -1095.627, 31.157), new mp.Vector3(1453.298, -966.813, 51.329), new mp.Vector3(1243.711, -762.9, 43.838), new mp.Vector3(999.928, -53.993, 74.959), new mp.Vector3(1246.301, 350.719, 81.991), new mp.Vector3(758.579, 549.002, 127.481), new mp.Vector3(178.972, 296.826, 105.363), new mp.Vector3(-288.813, 305.31, 90.712), new mp.Vector3(-598.242, 88.638, 68.14), new mp.Vector3(-891.432, -215.295, 39.103), new mp.Vector3(-975.078, 231.586, 66.751), new mp.Vector3(-1379.384, 317.957, 64.072), new mp.Vector3(-2288.256, 183.165, 167.594), new mp.Vector3(-2942.328, 12.642, 11.605), new mp.Vector3(-2954.76, 410.044, 15.124), new mp.Vector3(-3254.813, 973.556, 8.118), new mp.Vector3(-2657.284, 1295.758, 146.315), new mp.Vector3(-2606.094, 1875.146, 159.346), new mp.Vector3(-2677.175, 2307.448, 20.3), new mp.Vector3(-2376.276, 2634.677, 1.419), new mp.Vector3(-2081.486, 2619.62, 0.886), new mp.Vector3(-1810.79, 2301.466, 58.681), new mp.Vector3(-1505.798, 2810.156, 30.833), new mp.Vector3(-1128.918, 2695.36, 18.788), new mp.Vector3(-855.011, 2742.499, 17.932), new mp.Vector3(-612.526, 3023.229, 19.15), new mp.Vector3(-386.861, 2959.935, 20.531), new mp.Vector3(-294.354, 2781.417, 61.036), new mp.Vector3(-127.808, 2790.885, 53.107), new mp.Vector3(157.96, 3130.723, 43.584), new mp.Vector3(455.392, 3526.53, 33.449), new mp.Vector3(906.587, 3656.146, 32.559), new mp.Vector3(2073.564, 3827.596, 32.397), new mp.Vector3(2514.163, 3788.921, 53.059), new mp.Vector3(2516.673, 4216.544, 39.931), new mp.Vector3(2416.501, 4610.543, 32.335), new mp.Vector3(2249.057, 4758.592, 39.278), new mp.Vector3(1902.941, 4528.852, 32.537), new mp.Vector3(1844.7, 4576.508, 31.287), new mp.Vector3(1656.28, 4666.642, 43.449), new mp.Vector3(1666.701, 4971.463, 42.248), new mp.Vector3(1950.263, 5189.004, 48.036), new mp.Vector3(2204.768, 5195.241, 61.007), new mp.Vector3(2375.216, 5133.248, 44.54), new mp.Vector3(2680.546, 5398.487, 52.628), new mp.Vector3(2882.99, 4875.3, 63.018), new mp.Vector3(2945.269, 4631.682, 48.719), new mp.Vector3(2908.742, 4337.755, 50.273), new mp.Vector3(3076.673, 4039.496, 66.656), new mp.Vector3(3425.43, 3745.531, 31.482), new mp.Vector3(3741.274, 3858.148, 8.067), new mp.Vector3(3936.276, 3730.156, 1.277), new mp.Vector3(3857.584, 4224.896, 3.903), new mp.Vector3(3926.599, 4389.176, 16.649), new mp.Vector3(3682.054, 4573.025, 25.082), new mp.Vector3(3304.539, 5195.743, 18.415), new mp.Vector3(3130.096, 5292.108, 30.749), new mp.Vector3(3372.716, 5444.641, 15.882), new mp.Vector3(3372.754, 5551.076, 13.675), new mp.Vector3(3427.688, 5918.272, 2.058), new mp.Vector3(2817.858, 5970.119, 350.43), new mp.Vector3(2432.515, 5842.482, 59.098), new mp.Vector3(2240.809, 5974.613, 49.671), new mp.Vector3(1821.09, 6408.793, 40.673), new mp.Vector3(1579.245, 6597.086, 13.749), new mp.Vector3(1501.396, 6563.989, 5.204), new mp.Vector3(739.403, 6415.534, 29.903), new mp.Vector3(178.932, 7036.418, 1.955), new mp.Vector3(61.17, 7187.37, 2.728), new mp.Vector3(-664.835, 6029.082, 3.482), new mp.Vector3(-916.033, 5995.236, 2.388), new mp.Vector3(-1456.222, 5415.718, 23.024), new mp.Vector3(-2166.472, 5183.073, 15.51), new mp.Vector3(-2448.011, 3841.91, 22.824), new mp.Vector3(-3079.386, 3399.823, 5.58), new mp.Vector3(-3020.553, 1882.018, 10.446), new mp.Vector3(-365.587, 1143.633, 324.251), new mp.Vector3(-2577.87, 1055.419, 172.114), new mp.Vector3(-2173.888, 500.16, 147.323), new mp.Vector3(-1824.563, 78.313, 73.982), new mp.Vector3(-1706.359, -183.091, 57.36), new mp.Vector3(-1810.793, -250.486, 43.515), new mp.Vector3(-460.227, -613.502, 31.174), new mp.Vector3(-511.873, -578.852, 34.676), new mp.Vector3(536.526, -615.299, 24.73), new mp.Vector3(636.774, -405.474, 24.642), new mp.Vector3(1346.833, -620.701, 74.427), new mp.Vector3(1149.794, -1626.109, 34.796), new mp.Vector3(731.424, -2565.948, 10.78), new mp.Vector3(352.575, -2758.556, 15.581), new mp.Vector3(123.207, -2959.841, 7.086), new mp.Vector3(-372.002, -2182.679, 10.317), new mp.Vector3(-3053.711, 778.631, 21.461), new mp.Vector3(-3418.653, 953.447, 8.319), new mp.Vector3(-2545.875, 2360.006, 23.104), new mp.Vector3(-1756.945, 2158.089, 122.416), new mp.Vector3(-1853.393, 2052.152, 140.984), new mp.Vector3(-1002.445, 2888.734, 12.228), new mp.Vector3(-117.748, 3378.498, 65.682), new mp.Vector3(-680.722, 3630.246, 291.914), new mp.Vector3(-1213.91, 3852.643, 489.973), new mp.Vector3(-2036.934, 3785.883, 196.167), new mp.Vector3(-2413.804, 3646.814, 9.941), new mp.Vector3(-3129.397, 3414.127, 1.876), new mp.Vector3(-2626.996, 2844.696, 3.267), new mp.Vector3(-2674.099, 2529.156, 1.599), new mp.Vector3(-2877.346, 2253.015, 1.834), new mp.Vector3(-3162.998, 1244.46, 6.998), new mp.Vector3(-3240.015, 898.371, 3.177), new mp.Vector3(-3042.223, 577.915, 4.744), new mp.Vector3(-3103.385, 222.647, 6.624), new mp.Vector3(-2810.162, 6.648, 11.708), new mp.Vector3(-1976.608, -499.778, 11.89), new mp.Vector3(-1792.308, -143.392, 73.024), new mp.Vector3(-1611.769, 47.36, 61.718), new mp.Vector3(-656.204, 363.665, 86.852), new mp.Vector3(-368.377, 487.932, 117.532), new mp.Vector3(181.673, 674.717, 205.142), new mp.Vector3(1129.547, 526.034, 94.967), new mp.Vector3(1290.475, 89.226, 73.379), new mp.Vector3(1327.865, -179.799, 108.766), new mp.Vector3(1451.107, -1498.867, 64.045), new mp.Vector3(1332.937, -1951.374, 46.115), new mp.Vector3(1345.59, -2129.779, 54.929), new mp.Vector3(1217.107, -2368.507, 49.918), new mp.Vector3(788.084, -2553.574, 17.322), new mp.Vector3(531.556, -2616.292, 6.057), new mp.Vector3(446.875, -2669.043, 6.227), new mp.Vector3(-319.242, -2720.99, 6.151), new mp.Vector3(-1010.61, -2547.108, 36.605), new mp.Vector3(-1075.855, -2250.96, 15.969), new mp.Vector3(-1087.964, -1898.283, 10.965), new mp.Vector3(-700.179, -1705.436, 26.511), new mp.Vector3(-438.389, -1804.006, 23.487), new mp.Vector3(-270.263, -1560.775, 31.849), new mp.Vector3(-4.968, -1082.676, 26.677), new mp.Vector3(46.301, -1011.222, 29.52), new mp.Vector3(-133.156, -116.557, 56.458), new mp.Vector3(-452.065, 339.581, 104.329), new mp.Vector3(-674.931, 400.004, 101.202), new mp.Vector3(-1223.845, 478.063, 92.867), new mp.Vector3(-1526.134, 375.998, 103.153), new mp.Vector3(-2639.338, 1105.503, 146.101), new mp.Vector3(-3105.624, 1225.408, 10.717), new mp.Vector3(-3300.243, 968.839, 2.264), new mp.Vector3(-3101.384, 222.342, 6.768), new mp.Vector3(-2966.116, 24.147, 11.604), new mp.Vector3(-1106.319, 161.657, 63.019), new mp.Vector3(-1354.031, 120.644, 56.239), new mp.Vector3(-820.841, 703.262, 147.473), new mp.Vector3(-289.892, 1405.685, 347.481), new mp.Vector3(-191.255, 1557.793, 322.117), new mp.Vector3(-1520.608, 1492.686, 111.584), new mp.Vector3(-1752.254, 826.983, 142.286), new mp.Vector3(-1790.057, 821.122, 140.152), new mp.Vector3(-1873.172, 632.715, 129.99), new mp.Vector3(-1707.936, 194.621, 63.841), new mp.Vector3(-595.205, 207.733, 74.177), new mp.Vector3(-283.653, 332.518, 94.814), new mp.Vector3(1168.969, 309.532, 80.99), new mp.Vector3(599.994, -1902.498, 25.298), new mp.Vector3(484.883, -2258.064, 5.916)];
function getEggObjectName() {
  return "grandegg_" + getRandomInt(1, 4);
}
mp.events.add("Client_ShowEaster2026Menu", (_0xeac444, _0x2539ef, _0x438ba8, _0xf54f51, _0x173953, _0xfa721c) => {
  if (GlobalCheck() == 1) {
    return;
  }
  let _0x3852aa = 0;
  localplayer.model;
  const _0x5778de = JSON.stringify({
    easterCoin: _0xeac444,
    grandCoin: _0x2539ef,
    foundEggs: _0x438ba8,
    findEggsHintTimer: _0xf54f51,
    participants: _0x173953,
    labyrinthTimer: _0xfa721c,
    show: true
  });
  main_browser.execute("APPS.state.easterEvent2026 = " + _0x5778de);
  easterMenuOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.closeEasterMenu = function () {
  if (easterMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.easterEvent2026.show = false;");
    easterMenuOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
const eggsMap = new Map();
function spawnEggs(_0x3949cf) {
  Object.keys(eggsMap).forEach(_0x2001c9 => {
    destroyEgg(parseInt(_0x2001c9));
  });
  _0x3949cf.forEach(_0x3b83c9 => {
    const _0x114e90 = eggsPositions[_0x3b83c9 - 1];
    const _0x7fb380 = mp.objects.new(mp.game.joaat(getEggObjectName()), new mp.Vector3(_0x114e90.x, _0x114e90.y, _0x114e90.z - 0.8), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255
    });
    const _0x14bc68 = mp.colshapes.newSphere(_0x7fb380.position.x, _0x7fb380.position.y, _0x7fb380.position.z, 1);
    _0x14bc68.eggId = _0x3b83c9;
    _0x14bc68.isEasterEgg = true;
    eggsMap.set(_0x3b83c9, {
      object: _0x7fb380,
      colshape: _0x14bc68
    });
  });
}
function destroyEgg(_0x5a71ee) {
  const _0x1da50a = eggsMap.get(_0x5a71ee);
  if (_0x1da50a) {
    if (mp.objects.exists(_0x1da50a.object)) {
      _0x1da50a.object.destroy();
    }
    if (mp.colshapes.exists(_0x1da50a.colshape)) {
      _0x1da50a.colshape.destroy();
    }
    eggsMap.delete(_0x5a71ee);
  }
}
mp.events.add("Client_EasterEggSpawn", _0x4723ea => {
  spawnEggs(_0x4723ea);
});
mp.events.add("playerEnterColshape", _0xd74e92 => {
  if (_0xd74e92.isEasterEgg) {
    mp.events.callRemote("Server_EasterEggInteract", _0xd74e92.eggId);
  }
});
mp.events.add("Client_EasterEggDestroy", destroyEgg);
mp.events.add("Client_EasterFindEggsHint", () => {
  mp.events.callRemote("Server_EasterFindEggsHint");
});
mp.events.add("Client_EasterFindEggsHintShow", (_0x4a66ed, _0x45f305) => {
  main_browser.execute("APPS.state.easterEvent2026.findEggsHintTimer = " + _0x45f305 + ";");
  const _0xfe5d48 = eggsPositions[_0x4a66ed - 1];
  SetGPSLocation(_0xfe5d48.x, _0xfe5d48.y, _0xfe5d48.z, true, 0, 3);
});
mp.events.add("Client_Easter2026OpenCase", () => {
  closeEasterMenu();
  mp.events.callRemote("Server_GotoContainers", 445);
});