global.InBarberShop = false;
const BarberCamPoses = [[1931.746, 3734.407, 33.493, 1931.782, 3734.748, 33.513], [-276.997, 6224.286, 32.343, -276.998, 6224.069, 32.353], [141.215, -1707.052, 29.94, 139.221, -1705.042, 29.764], [-1279.339, -1119.473, 7.639, -1278.954, -1114.759, 7.304], [-815.982, -185.657, 38.357, -813.037, -185.126, 38.114], [-36.028, -154.634, 57.722, -33.644, -155.916, 57.619], [1215.131, -475.503, 66.854, 1215.853, -472.925, 66.796], [-553.071, -588.274, 43.412, -552.711, -579.234, 41.396]];
const BarberCamBack = [[1931.095458984375, 3730.643310546875, 33.49367904663086, 1929.9588623046875, 3732.535400390625, 33.642616271972656], [-277.761962890625, 6228.1142578125, 32.34251403808594, -276.51702880859375, 6226.8779296875, 32.395423889160156], [136.934, -1707.501, 29.941, 138.903, -1705.233, 29.671], [-1282.689, -1116.788, 7.638, -1279.624, -1116.716, 7.468], [-814.496, -182.036, 38.229, -813.014, -184.74, 38.134], [-32.692, -153.071, 57.723, -33.425, -155.584, 57.61], [1212.98, -472.258, 66.855, 1215.413, -472.754, 66.722], [-552.981, -583.381, 42.7, -553.077, -579.234, 42.594]];
const ALLOWED_HAIRCUTS = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 89, 90, 92, 93, 94, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 201, 208]];
let bGender;
let hairstyle;
let haircolor;
let second_haircolor;
let beard;
let beardcolor;
let hair_tatt;
let hairstyleIndex = 0;
let localitems = new Array(2);
global.OpenBarber = function (_0x14ec92) {
  mp.events.callRemote("OpenBarberServer", _0x14ec92);
};
mp.events.add("OpenBarberCorrectly", (_0x200a2f, _0x18a169, _0xe6ecc8, _0x227dda, _0x385d9f, _0x1e374e, _0x9325e8, _0x323313, _0x523e5a, _0x13df36, _0x22d380, _0x3be780, _0x490754, _0x541a0f, _0x5f2341, _0x2fc24a, _0x55afb0, _0x116bf9) => {
  if (GlobalCheck() == 1) {
    return mp.events.callRemote("CloseBarberShopCorrectly", 0);
  }
  localitems[0] = _0x9325e8;
  localitems[1] = _0x323313;
  InBarberShop = true;
  bGender = true;
  if (localplayer.model != 1885233650) {
    bGender = false;
  }
  hairstyle = _0x227dda;
  hairstyleIndex = ALLOWED_HAIRCUTS[bGender ? 0 : 1].findIndex(_0x581dd2 => _0x581dd2 === _0x227dda);
  if (hairstyleIndex == -1) {
    hairstyleIndex = 0;
  }
  haircolor = _0x385d9f;
  second_haircolor = _0x2fc24a;
  beard = _0x1e374e;
  beardcolor = _0x55afb0;
  hair_tatt = _0x116bf9;
  makeup = _0x523e5a;
  blush = _0x13df36;
  lipstick = _0x22d380;
  blushcolor = _0x3be780;
  lipstickcolor = _0x490754;
  moles = _0x541a0f;
  chest_hair = _0x5f2341;
  localplayer.setComponentVariation(2, hairstyle, 0, 0);
  localplayer.setHairColor(haircolor, second_haircolor);
  localplayer.setHeadOverlay(1, beard, 1, beardcolor, 1);
  ShowClothesMenu(4, _0x18a169);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
});
global.CloseBarberShop = function (_0x5d78bd = 0) {
  if (InBarberShop && loggedin && !chatActive) {
    CloseClothesMenu();
    InteractiveCamera.stop();
    InBarberShop = false;
    mp.events.callRemote("CloseBarberShopCorrectly", _0x5d78bd);
    mp.game.cam.renderScriptCams(false, true, 2500, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
  }
};
mp.events.add("ShowNewHairCut", _0x10aa58 => {
  if (!_0x10aa58) {
    return;
  }
  let _0x3a1677 = mp.cameras.new("default", new mp.Vector3(BarberCamPoses[_0x10aa58 - 1][0], BarberCamPoses[_0x10aa58 - 1][1], BarberCamPoses[_0x10aa58 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  _0x3a1677.pointAtCoord(BarberCamPoses[_0x10aa58 - 1][3], BarberCamPoses[_0x10aa58 - 1][4], BarberCamPoses[_0x10aa58 - 1][5]);
  localcamera = mp.cameras.new("default", new mp.Vector3(BarberCamBack[_0x10aa58 - 1][0], BarberCamBack[_0x10aa58 - 1][1], BarberCamBack[_0x10aa58 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(BarberCamBack[_0x10aa58 - 1][3], BarberCamBack[_0x10aa58 - 1][4], BarberCamBack[_0x10aa58 - 1][5]);
  localcamera.setActive(true);
  localcamera.setActiveWithInterp(_0x3a1677.handle, 2500, 0, 0);
  setTimeout(function () {
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 2500, true, false);
    if (_0x3a1677 != null) {
      _0x3a1677.destroy();
      _0x3a1677 = null;
    }
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
  }, 3500);
});
mp.events.add("Client_SetHairStyle", _0x22f914 => {
  const _0x2d5511 = bGender ? 0 : 1;
  if (_0x22f914 == 0) {
    hairstyleIndex--;
    if (hairstyleIndex < 0) {
      hairstyleIndex = ALLOWED_HAIRCUTS[_0x2d5511].length - 1;
    }
  } else {
    hairstyleIndex++;
    if (hairstyleIndex >= ALLOWED_HAIRCUTS[_0x2d5511].length) {
      hairstyleIndex = 0;
    }
  }
  hairstyle = ALLOWED_HAIRCUTS[_0x2d5511][hairstyleIndex];
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (hairstyleIndex + 1));
  localplayer.setComponentVariation(2, hairstyle, 0, 0);
});
mp.events.add("Client_SetHairColor", _0x59c968 => {
  if (_0x59c968 == 0) {
    if (haircolor - 1 < 0) {
      haircolor = 63;
    } else {
      haircolor -= 1;
    }
  } else if (haircolor + 1 >= 64) {
    haircolor = 0;
  } else {
    haircolor++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (haircolor + 1));
  localplayer.setHairColor(haircolor, second_haircolor);
});
mp.events.add("Client_SetHairColor2", _0x1b23df => {
  if (_0x1b23df == 0) {
    if (second_haircolor - 1 < 0) {
      second_haircolor = 63;
    } else {
      second_haircolor -= 1;
    }
  } else if (second_haircolor + 1 >= 64) {
    second_haircolor = 0;
  } else {
    second_haircolor++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (second_haircolor + 1));
  localplayer.setHairColor(haircolor, second_haircolor);
});
mp.events.add("Client_ChangeAdditionalHair", _0xa9a24b => {
  if (bGender == 0) {
    if (_0xa9a24b == 0) {
      if (hair_tatt - 1 < -1) {
        hair_tatt = 39;
      } else {
        hair_tatt -= 1;
      }
    } else if (hair_tatt + 1 >= 40) {
      hair_tatt = -1;
    } else {
      hair_tatt++;
    }
  } else if (_0xa9a24b == 0) {
    if (hair_tatt - 1 < -1) {
      hair_tatt = 37;
    } else {
      hair_tatt -= 1;
    }
  } else if (hair_tatt + 1 >= 38) {
    hair_tatt = -1;
  } else {
    hair_tatt++;
  }
  localplayer.clearDecorations();
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (hair_tatt + 1));
  LoadHairTattoo(localplayer, hair_tatt);
  LoadTattoos(localplayer, false);
});
mp.events.add("Client_SetBeard", _0x4fd236 => {
  if (bGender != 0) {
    if (_0x4fd236 == 0) {
      if (beard == 255) {
        beard = 28;
      } else if (beard - 1 < 0) {
        beard = 255;
      } else {
        beard--;
      }
    } else if (beard == 255) {
      beard = 0;
    } else if (beard + 1 >= 29) {
      beard = 255;
    } else {
      beard++;
    }
    main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (beard + 1));
    localplayer.setHeadOverlay(1, beard, 1, beardcolor, 1);
  }
});
mp.events.add("Client_SetBeardColor", _0x252772 => {
  if (bGender != 0) {
    if (_0x252772 == 0) {
      if (beardcolor == 0) {
        beardcolor = 63;
      } else {
        beardcolor--;
      }
    } else if (beardcolor + 1 > 63) {
      beardcolor = 0;
    } else {
      beardcolor++;
    }
    main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (beardcolor + 1));
    localplayer.setHeadOverlay(1, beard, 1, beardcolor, 1);
  }
});
let makeup = 255;
let blush = 255;
let lipstick = 255;
let blushcolor = 1;
let lipstickcolor = 1;
let moles = 255;
let chest_hair = 255;
mp.events.add("Client_SetMakeUp", _0x2a832e => {
  if (_0x2a832e == 0) {
    if (makeup == 255) {
      makeup = 71;
    } else if (makeup - 1 < 0) {
      makeup = 255;
    } else {
      makeup--;
    }
  } else if (makeup == 255) {
    makeup = 0;
  } else if (makeup + 1 > 71) {
    makeup = 255;
  } else {
    makeup++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (makeup + 1));
  localplayer.setHeadOverlay(4, makeup, 1, 1, 1);
});
mp.events.add("Client_SetBlush", _0x436729 => {
  if (_0x436729 == 0) {
    if (blush == 255) {
      blush = 32;
    } else if (blush - 1 < 0) {
      blush = 255;
    } else {
      blush--;
    }
  } else if (blush == 255) {
    blush = 0;
  } else if (blush + 1 > 32) {
    blush = 255;
  } else {
    blush++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (blush + 1));
  localplayer.setHeadOverlay(5, blush, 1, 1, 1);
});
mp.events.add("Client_SetLipstickStyle", _0x156c54 => {
  if (_0x156c54 == 0) {
    if (lipstick == 255) {
      lipstick = 9;
    } else if (lipstick - 1 < 0) {
      lipstick = 255;
    } else {
      lipstick--;
    }
  } else if (lipstick == 255) {
    lipstick = 0;
  } else if (lipstick + 1 > 9) {
    lipstick = 255;
  } else {
    lipstick++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (lipstick + 1));
  localplayer.setHeadOverlay(8, lipstick, 1, 1, 1);
});
mp.events.add("Client_SetBlushColor", _0x2eb8f1 => {
  if (_0x2eb8f1 == 0) {
    if (blushcolor == 0) {
      blushcolor = 63;
    } else {
      blushcolor--;
    }
  } else if (blushcolor + 1 > 63) {
    blushcolor = 0;
  } else {
    blushcolor++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (blushcolor + 1));
  if (blush != null) {
    localplayer.setHeadOverlay(5, blush, 1, blushcolor, 1);
  }
});
mp.events.add("Client_SetLipstickColor", _0x5ab456 => {
  if (_0x5ab456 == 0) {
    if (lipstickcolor == 0) {
      lipstickcolor = 63;
    } else {
      lipstickcolor--;
    }
  } else if (lipstickcolor + 1 > 63) {
    lipstickcolor = 0;
  } else {
    lipstickcolor++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (lipstickcolor + 1));
  if (lipstick != null) {
    localplayer.setHeadOverlay(8, lipstick, 1, lipstickcolor, 1);
  }
});
mp.events.add("Client_SetMoles", _0x358b86 => {
  if (_0x358b86 == 0) {
    if (moles == 255) {
      moles = 17;
    } else if (moles - 1 < 0) {
      moles = 255;
    } else {
      moles--;
    }
  } else if (moles == 255) {
    moles = 0;
  } else if (moles + 1 > 17) {
    moles = 255;
  } else {
    moles++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (moles + 1));
  localplayer.setHeadOverlay(9, moles, 1, 1, 1);
});
mp.events.add("Client_SetChestHair", _0x4d0114 => {
  if (_0x4d0114 == 0) {
    if (chest_hair == 255) {
      chest_hair = 15;
    } else if (chest_hair - 1 < 0) {
      chest_hair = 255;
    } else {
      chest_hair--;
    }
  } else if (chest_hair == 255) {
    chest_hair = 0;
  } else if (chest_hair + 1 > 15) {
    chest_hair = 255;
  } else {
    chest_hair++;
  }
  main_browser.execute("APPS.state.clothes_menu.clothes_id = " + (chest_hair + 1));
  localplayer.setHeadOverlay(10, chest_hair, 1, 1, 1);
});
mp.events.add("Client_SetRandomHairValue", () => {
  hairstyleIndex = Math.floor(Math.random() * ALLOWED_HAIRCUTS[bGender ? 0 : 1].length);
  hairstyle = ALLOWED_HAIRCUTS[bGender ? 0 : 1][hairstyleIndex];
  localplayer.setComponentVariation(2, hairstyle, 0, 0);
  haircolor = Math.floor(Math.random() * 60) + 0;
  second_haircolor = Math.floor(Math.random() * 60) + 0;
  localplayer.setHairColor(haircolor, second_haircolor);
  if (bGender == 1) {
    beard = Math.floor(Math.random() * 27) + 0;
    beardcolor = Math.floor(Math.random() * 62) + 0;
    localplayer.setHeadOverlay(1, beard, 1, beardcolor, 1);
  }
});
mp.events.add("Client_FinishHairChange", _0x16de54 => {
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  let _0x2183bc = {
    localeyebrows: localitems[0],
    localeyecolor: localitems[1],
    localhairstyle: hairstyle,
    localhaircolor: haircolor,
    localhaircolor2: second_haircolor,
    localbeard: beard,
    localbeardcolor: beardcolor,
    localmakeup: makeup,
    localblush: blush,
    locallipstick: lipstick,
    localblushcolor: blushcolor,
    locallipstickcolor: lipstickcolor,
    localmoles: moles,
    localchesthair: chest_hair
  };
  mp.events.callRemote("FinishHairChangeServer", JSON.stringify(_0x2183bc), hair_tatt, _0x16de54);
});
mp.events.add("Client_FinishBarber", _0x1136f7 => {
  CloseBarberShop(_0x1136f7);
});
mp.events.add("Barber_Error", _0x4fc48f => {
  if (InBarberShop) {
    main_browser.execute("APP.sendErrorMessage('" + _0x4fc48f + "');");
  }
});
mp.colshapes.newSphere(1932.6370849609375, 3730.803466796875, 32.85443878173828, 2.1).is_barber_number = 1;
mp.colshapes.newSphere(-278.8948974609375, 6227.443359375, 31.70492172241211, 2.1).is_barber_number = 2;
mp.colshapes.newSphere(137.764, -1708.651, 29.302, 2.1).is_barber_number = 3;
mp.colshapes.newSphere(-1282.907, -1118.237, 7, 2.1).is_barber_number = 4;
mp.colshapes.newSphere(-815.321, -182.631, 37.569, 2.1).is_barber_number = 5;
mp.colshapes.newSphere(-33.949, -152.003, 57.086, 2.1).is_barber_number = 6;
mp.colshapes.newSphere(1212.166, -473.714, 66.213, 2.1).is_barber_number = 7;
mp.colshapes.newSphere(-555.996, -584.487, 41.43, 2.1).is_barber_number = 8;
mp.colshapes.newSphere(-549.44, -584.078, 41.43, 2.1).is_barber_number = 8;
global.at_barber = 0;
mp.events.add("playerEnterColshape", _0x154e37 => {
  if (mp.colshapes.exists(_0x154e37) && _0x154e37.is_barber_number > 0) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
    at_barber = _0x154e37.is_barber_number;
    return;
  }
});
mp.events.add("playerExitColshape", _0x255018 => {
  if (mp.colshapes.exists(_0x255018) && _0x255018.is_barber_number > 0) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_barber = 0;
  }
});