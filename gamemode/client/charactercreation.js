let creatorCamera;
global.in_reg = false;
let motherindex = 0;
let fatherindex = 0;
let similarityindex = 50;
let nosedata = new Array(20);
let eyebrows = 0;
let eyecolor = 0;
let hairstyle = 0;
let haircolor = 0;
let beard = 0;
let shirts = 0;
let jeans = 0;
let boots = 0;
mp.events.add("CharCreator", () => {
  if (in_reg == 1) {
    return;
  }
  setTimeout(() => {
    if (in_reg) {
      mp.game.cam.doScreenFadeIn(500);
    }
  }, 200);
  mp.game.interior.enableInteriorProp(166657, "V_Michael_M_items");
  mp.game.interior.refreshInterior(166657);
  creatorCamera = mp.cameras.new("creatorCamera", new mp.Vector3(-812.8785034179688, 174.38375854492188, 77.2650375366211), new mp.Vector3(0, 0, -57), 45);
  creatorCamera.setActive(true);
  const _0x3e81e2 = "{mom_name:'" + language.Ханна[curr_lang] + "',dad_name:'" + language.Бэнджамин[curr_lang] + "',sliders_similarity:50,hair_name:'" + language.Лысый[curr_lang] + "',hair_color:'0',beard_name:'" + language.нет[curr_lang] + "',sliders:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],brow_name:'" + language.нет[curr_lang] + "',eye_name:'" + language.зеленый[curr_lang] + "',\"show\":true}";
  main_browser.execute("APPS.state.create_person = " + _0x3e81e2);
  mp.players.local.setAlpha(255);
  in_reg = true;
  localplayer.freezePosition(true);
  if (curr_lang == "ru") {
    FinishSpawnMenu(1);
  }
  mp.gui.cursor.show(true, true);
});
mp.events.add("CamClothes", () => {
  if (creatorCamera) {
    creatorCamera.destroy();
    creatorCamera = null;
  }
  creatorCamera = mp.cameras.new("CamClothes", new mp.Vector3(-814.0785034179688, 173.6837585449219, 76.5650375366211), new mp.Vector3(0, 0, -60), 45);
  creatorCamera.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 500, true, false);
});
mp.events.add("CamFace", () => {
  if (creatorCamera) {
    creatorCamera.destroy();
    creatorCamera = null;
  }
  creatorCamera = mp.cameras.new("CamFace", new mp.Vector3(-812.8785034179688, 174.38375854492188, 77.2650375366211), new mp.Vector3(0, 0, -57), 45);
  creatorCamera.setActive(true);
  mp.game.cam.renderScriptCams(true, false, 500, true, false);
});
let video_check = false;
mp.events.add("FinishReg", () => {
  if (in_reg == 1) {
    if (creatorCamera) {
      creatorCamera.destroy();
      creatorCamera = null;
    }
    mp.game.interior.disableInteriorProp(166657, "V_Michael_M_items");
    mp.game.interior.refreshInterior(166657);
    main_browser.execute("APPS.state.create_person.show = false;");
    in_reg = false;
    video_check = true;
    mp.events.call("FinishRegAfterVideoEvent");
    mp.game.streaming.loadScene(-776.721, -776.624, 1.899);
  }
});
global.just_registered = false;
mp.events.add("FinishRegAfterVideoEvent", () => {
  if (!video_check) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  video_check = false;
  main_browser.execute("APPS.state.video_grand = {\"show\":false}");
  let _0x3bca21 = [];
  let _0x10ac2c = {
    mother: mothers[motherindex],
    father: fathers[fatherindex],
    similiarity: similarityindex
  };
  for (let _0x54c381 = 0; _0x54c381 < nosedata.length; _0x54c381++) {
    _0x3bca21.push(nosedata[_0x54c381]);
  }
  let _0x16cc7e;
  let _0x12283f;
  let _0x48fba7;
  let _0x544973 = {
    localeyebrows: eyebrows,
    localeyecolor: eyecolor,
    localhairstyle: hairstyle,
    localhaircolor: haircolor,
    localbeard: beards[beard],
    localmakeup: 255,
    localblush: 255,
    locallipstick: 255,
    localblushcolor: 1,
    locallipstickcolor: 1,
    localmoles: 255,
    localchesthair: 255
  };
  let _0x4c9324 = 0;
  if (localplayer.model != 1885233650) {
    _0x4c9324 = 1;
  }
  _0x16cc7e = _0x4c9324 == 0 ? maleshirts[shirts] : femaleshirts[shirts];
  _0x12283f = _0x4c9324 == 0 ? malejeans[jeans] : femalejeans[jeans];
  _0x48fba7 = _0x4c9324 == 0 ? maleboots[boots] : femaleboots[boots];
  let _0x47a7f1 = {
    localshirts: _0x16cc7e,
    localjeans: _0x12283f,
    localboots: _0x48fba7
  };
  localplayer.freezePosition(false);
  is_freezed = false;
  mp.gui.cursor.show(false, false);
  loggedin = true;
  just_registered = true;
  mp.events.callRemote("LastRegStep", _0x4c9324, JSON.stringify(_0x10ac2c), JSON.stringify(_0x3bca21), JSON.stringify(_0x544973), JSON.stringify(_0x47a7f1));
});
mp.events.add("SetCharacterSex", _0x46f07c => {
  mp.game.cam.renderScriptCams(true, false, 0, true, false);
  mp.players.local.model = _0x46f07c ? mp.game.joaat("mp_m_freemode_01") : mp.game.joaat("mp_f_freemode_01");
  let _0x49c6f9 = true;
  if (localplayer.model != 1885233650) {
    _0x49c6f9 = false;
  }
  localplayer.setComponentVariation(8, 15, 0, 0);
  localplayer.setComponentVariation(3, 0, 0, 0);
  if (_0x49c6f9 == 1) {
    localplayer.setComponentVariation(11, maleshirts[shirts], 0, 0);
  } else {
    localplayer.setComponentVariation(11, femaleshirts[shirts], 0, 0);
  }
  if (_0x49c6f9 == 1) {
    localplayer.setComponentVariation(4, malejeans[jeans], 0, 0);
  } else {
    localplayer.setComponentVariation(4, femalejeans[jeans], 0, 0);
  }
  if (_0x49c6f9 == 1) {
    localplayer.setComponentVariation(6, maleboots[boots], 0, 0);
  } else {
    localplayer.setComponentVariation(6, femaleboots[boots], 0, 0);
  }
  localplayer.setHeadOverlay(2, eyebrows, 1, 1, 1);
  localplayer.setEyeColor(eyecolor);
  localplayer.setComponentVariation(2, hairstyle, 0, 0);
  localplayer.setHairColor(haircolor, 0);
  localplayer.setHeadOverlay(1, beards[beard], 1, 1, 1);
  UpdateParents(motherindex, fatherindex, similarityindex);
  main_browser.execute("APPS.state.create_person.mom_name = \"" + motherNames[motherindex] + "\"");
  main_browser.execute("APPS.state.create_person.dad_name = \"" + fatherNames[fatherindex] + "\"");
});
mp.events.add("SetShirtsValue", _0x28dc03 => {
  let _0x25eab8 = true;
  if (localplayer.model != 1885233650) {
    _0x25eab8 = false;
  }
  if (_0x28dc03 == 0) {
    if (shirts - 1 < 0) {
      shirts = maleshirts.length - 1;
    } else {
      shirts -= 1;
    }
  } else if (shirts + 1 >= maleshirts.length) {
    shirts = 0;
  } else {
    shirts += 1;
  }
  if (_0x25eab8 == 1) {
    localplayer.setComponentVariation(11, maleshirts[shirts], 0, 0);
  } else {
    localplayer.setComponentVariation(11, femaleshirts[shirts], 0, 0);
  }
});
mp.events.add("SetJeansValue", _0x14957b => {
  let _0x441a0c = true;
  if (localplayer.model != 1885233650) {
    _0x441a0c = false;
  }
  if (_0x14957b == 0) {
    if (jeans - 1 < 0) {
      jeans = malejeans.length - 1;
    } else {
      jeans -= 1;
    }
  } else if (jeans + 1 >= malejeans.length) {
    jeans = 0;
  } else {
    jeans += 1;
  }
  if (_0x441a0c == 1) {
    localplayer.setComponentVariation(4, malejeans[jeans], 0, 0);
  } else {
    localplayer.setComponentVariation(4, femalejeans[jeans], 0, 0);
  }
});
mp.events.add("SetBootsValue", _0x1c7879 => {
  let _0x515071 = true;
  if (localplayer.model != 1885233650) {
    _0x515071 = false;
  }
  if (_0x1c7879 == 0) {
    if (boots - 1 < 0) {
      boots = maleboots.length - 1;
    } else {
      boots -= 1;
    }
  } else if (boots + 1 >= maleboots.length) {
    boots = 0;
  } else {
    boots += 1;
  }
  if (_0x515071 == 1) {
    localplayer.setComponentVariation(6, maleboots[boots], 0, 0);
  } else {
    localplayer.setComponentVariation(6, femaleboots[boots], 0, 0);
  }
});
mp.events.add("SetEyeBrowValue", _0x3016a3 => {
  if (_0x3016a3 == 0) {
    if (eyebrows - 1 < 0) {
      eyebrows = 33;
    } else {
      eyebrows -= 1;
    }
  } else if (eyebrows + 1 >= 34) {
    eyebrows = 0;
  } else {
    eyebrows += 1;
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.brow_name = '" + appearanceItemNames[2][eyebrows] + "';");
  } else {
    main_browser.execute("APPS.state.change_face.brow_name = '" + appearanceItemNames[2][eyebrows] + "';");
  }
  localplayer.setHeadOverlay(2, eyebrows, 1, 1, 1);
});
mp.events.add("SetBeardValue", _0x25f4b9 => {
  let _0x34824d = 0;
  if (localplayer.model != 1885233650) {
    _0x34824d = 1;
  }
  if (_0x34824d == 0) {
    if (_0x25f4b9 == 0) {
      if (beard - 1 < 0) {
        beard = beards.length - 1;
      } else {
        beard -= 1;
      }
    } else if (beard + 1 >= beards.length) {
      beard = 0;
    } else {
      beard += 1;
    }
    if (in_reg == 1) {
      main_browser.execute("APPS.state.create_person.beard_name = '" + appearanceItemNames[1][beard] + "';");
    }
    localplayer.setHeadOverlay(1, beards[beard], 1, 1, 1);
  }
});
mp.events.add("SetEyeColorValue", _0x37ac17 => {
  if (_0x37ac17 == 0) {
    if (eyecolor - 1 < 0) {
      eyecolor = 31;
    } else {
      eyecolor -= 1;
    }
  } else if (eyecolor + 1 >= 32) {
    eyecolor = 0;
  } else {
    eyecolor += 1;
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.eye_name = '" + eyeColors[eyecolor] + "';");
  } else {
    main_browser.execute("APPS.state.change_face.eye_name = '" + eyeColors[eyecolor] + "';");
  }
  localplayer.setEyeColor(eyecolor);
});
mp.events.add("SetHairStyleValue", _0x9c585d => {
  if (_0x9c585d == 0) {
    if (hairstyle - 1 < 0) {
      hairstyle = 9;
    } else {
      hairstyle -= 1;
    }
  } else if (hairstyle + 1 >= 10) {
    hairstyle = 0;
  } else {
    hairstyle += 1;
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.hair_name = '" + HairNames[hairstyle] + "';");
  }
  localplayer.setComponentVariation(2, hairstyle, 0, 0);
});
mp.events.add("SetHairColorValue", _0x4c7e4e => {
  if (_0x4c7e4e == 0) {
    if (haircolor - 1 < 0) {
      haircolor = 20;
    } else {
      haircolor -= 1;
    }
  } else if (haircolor + 1 >= 21) {
    haircolor = 0;
  } else {
    haircolor += 1;
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.hair_color = '" + haircolor + "';");
  }
  localplayer.setHairColor(haircolor, 0);
});
mp.events.add("SetNose", (_0x183086, _0x19a003) => {
  if (_0x183086) {
    _0x183086 = parseInt(_0x183086);
    _0x183086--;
    nosedata[_0x183086] = _0x19a003;
    UpdateAppearence(_0x183086, _0x19a003);
  }
});
mp.events.add("SetSimilarity", _0x51e0cb => {
  similarityindex = _0x51e0cb;
  UpdateParents(motherindex, fatherindex, similarityindex);
});
mp.events.add("SetMotherValue", _0x1e51c5 => {
  if (_0x1e51c5 == 0) {
    if (motherindex - 1 < 0) {
      motherindex = mothers.length - 1;
    } else {
      motherindex -= 1;
    }
  } else if (_0x1e51c5 == 1) {
    if (motherindex + 1 >= mothers.length) {
      motherindex = 0;
    } else {
      motherindex += 1;
    }
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.mom_name = '" + motherNames[motherindex] + "';");
  } else {
    main_browser.execute("APPS.state.change_face.mom_name = '" + motherNames[motherindex] + "';");
  }
  UpdateParents(motherindex, fatherindex, similarityindex);
});
mp.events.add("SetFatherValue", _0x41a5b9 => {
  if (_0x41a5b9 == 0) {
    if (fatherindex - 1 < 0) {
      fatherindex = fathers.length - 1;
    } else {
      fatherindex -= 1;
    }
  } else if (_0x41a5b9 == 1) {
    if (fatherindex + 1 >= fathers.length) {
      fatherindex = 0;
    } else {
      fatherindex += 1;
    }
  }
  if (in_reg == 1) {
    main_browser.execute("APPS.state.create_person.dad_name = '" + fatherNames[fatherindex] + "';");
  } else {
    main_browser.execute("APPS.state.change_face.dad_name = '" + fatherNames[fatherindex] + "';");
  }
  UpdateParents(motherindex, fatherindex, similarityindex);
});
mp.events.add("SetRandomValue", _0x5925cd => {
  if (_0x5925cd == 0) {
    fatherindex = Math.floor(Math.random() * (fathers.length - 1 - 0)) + 0;
    motherindex = Math.floor(Math.random() * (mothers.length - 1 - 0)) + 0;
    similarityindex = Math.floor(Math.random() * 100) + 0;
    if (in_reg == 1) {
      main_browser.execute("APPS.state.create_person.sliders_similarity = " + similarityindex + ";");
      main_browser.execute("APPS.state.create_person.mom_name = '" + motherNames[motherindex] + "';");
      main_browser.execute("APPS.state.create_person.dad_name = '" + fatherNames[fatherindex] + "';");
    } else {
      main_browser.execute("APPS.state.change_face.sliders_similarity = " + similarityindex + ";");
      main_browser.execute("APPS.state.change_face.mom_name = '" + motherNames[motherindex] + "';");
      main_browser.execute("APPS.state.change_face.dad_name = '" + fatherNames[fatherindex] + "';");
    }
    UpdateParents(motherindex, fatherindex, similarityindex);
  } else if (_0x5925cd == 1) {
    fatherindex = Math.floor(Math.random() * (fathers.length - 1 - 0)) + 0;
    motherindex = Math.floor(Math.random() * (mothers.length - 1 - 0)) + 0;
    similarityindex = Math.floor(Math.random() * 100) + 0;
    if (in_reg == 1) {
      main_browser.execute("APPS.state.create_person.sliders_similarity = " + similarityindex + ";");
      main_browser.execute("APPS.state.create_person.mom_name = '" + motherNames[motherindex] + "';");
      main_browser.execute("APPS.state.create_person.dad_name = '" + fatherNames[fatherindex] + "';");
    } else {
      main_browser.execute("APPS.state.change_face.sliders_similarity = " + similarityindex + ";");
      main_browser.execute("APPS.state.change_face.mom_name = '" + motherNames[motherindex] + "';");
      main_browser.execute("APPS.state.change_face.dad_name = '" + fatherNames[fatherindex] + "';");
    }
    UpdateParents(motherindex, fatherindex, similarityindex);
    for (let _0x23aa11 = 0; _0x23aa11 < nosedata.length; _0x23aa11++) {
      nosedata[_0x23aa11] = _0x23aa11 == 13 ? Math.random() * -1 + 1 : Math.random() * -2 + 1;
      if (in_reg == 1) {
        main_browser.execute("APPS.state.create_person.sliders[" + _0x23aa11 + "] = " + nosedata[_0x23aa11] + ";");
      } else {
        main_browser.execute("APPS.state.change_face.sliders[" + _0x23aa11 + "] = " + nosedata[_0x23aa11] + ";");
      }
      UpdateAppearence(_0x23aa11, nosedata[_0x23aa11]);
    }
    eyebrows = Math.floor(Math.random() * 33) + 0;
    if (in_reg == 1) {
      main_browser.execute("APPS.state.create_person.brow_name = '" + appearanceItemNames[2][eyebrows] + "';");
    } else {
      main_browser.execute("APPS.state.change_face.brow_name = '" + appearanceItemNames[2][eyebrows] + "';");
    }
    localplayer.setHeadOverlay(2, eyebrows, 1, 1, 1);
    eyecolor = Math.floor(Math.random() * 31) + 0;
    if (in_reg == 1) {
      main_browser.execute("APPS.state.create_person.eye_name = '" + eyeColors[eyecolor] + "';");
    } else {
      main_browser.execute("APPS.state.change_face.eye_name = '" + eyeColors[eyecolor] + "';");
    }
    localplayer.setEyeColor(eyecolor);
  } else if (_0x5925cd == 2) {
    hairstyle = Math.floor(Math.random() * 10) + 0;
    main_browser.execute("APPS.state.create_person.hair_name = '" + HairNames[hairstyle] + "';");
    localplayer.setComponentVariation(2, hairstyle, 0, 0);
    haircolor = Math.floor(Math.random() * 20) + 0;
    main_browser.execute("APPS.state.create_person.hair_color = '" + haircolor + "';");
    localplayer.setHairColor(haircolor, 0);
    let _0x80dcb = true;
    if (localplayer.model != 1885233650) {
      _0x80dcb = false;
    }
    if (_0x80dcb == 1) {
      beard = Math.floor(Math.random() * (beards.length - 1 - 0)) + 0;
      main_browser.execute("APPS.state.create_person.beard_name = '" + appearanceItemNames[1][beard] + "';");
      localplayer.setHeadOverlay(1, beards[beard], 1, 1, 1);
    }
    boots = Math.floor(Math.random() * (maleboots.length - 1 - 0)) + 0;
    if (_0x80dcb == 1) {
      localplayer.setComponentVariation(6, maleboots[boots], 0, 0);
    } else {
      localplayer.setComponentVariation(6, femaleboots[boots], 0, 0);
    }
    jeans = Math.floor(Math.random() * (malejeans.length - 1 - 0)) + 0;
    if (_0x80dcb == 1) {
      localplayer.setComponentVariation(4, malejeans[jeans], 0, 0);
    } else {
      localplayer.setComponentVariation(4, femalejeans[jeans], 0, 0);
    }
    shirts = Math.floor(Math.random() * (maleshirts.length - 1 - 0)) + 0;
    if (_0x80dcb == 1) {
      localplayer.setComponentVariation(11, maleshirts[shirts], 0, 0);
    } else {
      localplayer.setComponentVariation(11, femaleshirts[shirts], 0, 0);
    }
  }
});
let localitems = Array(10);
function UpdateAppearence(_0x46193b, _0x2f2882) {
  localplayer.setFaceFeature(parseInt(_0x46193b), parseFloat(_0x2f2882));
}
function UpdateParents(_0x5d27b8, _0x53bb26, _0x596c6b) {
  localplayer.setHeadBlendData(mothers[_0x5d27b8], fathers[_0x53bb26], 0, mothers[_0x5d27b8], fathers[_0x53bb26], 0, _0x596c6b * 0.01, _0x596c6b * 0.01, 0, false);
}
mp.events.add("FinishFaceChange", () => {
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  mp.events.call("Enablechat");
  main_browser.execute("APPS.state.change_face.show = false;");
  mp.gui.cursor.show(false, false);
  let _0x13d48c = [];
  let _0x26c272 = {
    mother: mothers[motherindex],
    father: fathers[fatherindex],
    similiarity: similarityindex
  };
  for (let _0x323068 = 0; _0x323068 < nosedata.length; _0x323068++) {
    _0x13d48c.push(parseFloat(nosedata[_0x323068]));
  }
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  SurgeonOpened = false;
  let _0x2e4b65 = {
    localeyebrows: eyebrows,
    localeyecolor: eyecolor,
    localhairstyle: localitems[0],
    localhaircolor: localitems[1],
    localbeard: localitems[2],
    localmakeup: localitems[3],
    localblush: localitems[4],
    locallipstick: localitems[5],
    localblushcolor: localitems[6],
    locallipstickcolor: localitems[7],
    localmoles: localitems[8],
    localchesthair: localitems[9]
  };
  localplayer.freezePosition(false);
  is_freezed = false;
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  InteractiveCamera.stop();
  mp.events.callRemote("FinishFaceChangeServer", JSON.stringify(_0x26c272), JSON.stringify(_0x13d48c), JSON.stringify(_0x2e4b65));
});
global.SurgeonOpened = false;
global.CloseSurgeon = function () {
  if (SurgeonOpened) {
    mp.events.call("OnPlayerDialogShow", 281, language["Прервать операцию"][curr_lang], language["Вы действительно желаете прервать процесс хирургии? Изменения будут сброшены, а деньги возвращены."][curr_lang], language.Прервать[curr_lang], language.Отмена[curr_lang]);
  }
};
mp.events.add("Client_CancelSurgeon", () => {
  if (SurgeonOpened) {
    SurgeonOpened = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.change_face.show = false;");
    mp.gui.cursor.show(false, false);
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    InteractiveCamera.stop();
    mp.events.callRemote("FaceChangeCancel");
  }
});
mp.events.add("CamSurgeon", (_0x518f0a, _0x39903a, _0x47a902, _0x1807a7, _0x30b06f, _0x4baef2, _0x4afc5a, _0x428b55, _0x44cf5c, _0xa02bdc, _0x44789a, _0x329ec4, _0x4db800, _0x5618ec, _0x526d14, _0x4b94c0) => {
  localitems[0] = _0x1807a7;
  localitems[1] = _0x30b06f;
  localitems[2] = _0x4baef2;
  localitems[3] = _0x4afc5a;
  localitems[4] = _0x428b55;
  localitems[5] = _0x44cf5c;
  localitems[6] = _0xa02bdc;
  localitems[7] = _0x44789a;
  localitems[8] = _0x329ec4;
  localitems[9] = _0x4db800;
  eyebrows = _0x526d14;
  eyecolor = _0x4b94c0;
  similarityindex = _0x47a902;
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  mp.events.call("Disablechat");
  SurgeonOpened = true;
  localplayer.freezePosition(true);
  mp.gui.cursor.show(true, true);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 0.5), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
  let _0x34d6ee = mothers.indexOf(_0x518f0a);
  _0x518f0a = _0x34d6ee != -1 ? _0x34d6ee : 0;
  let _0x8c3ae3 = fathers.indexOf(_0x39903a);
  motherindex = _0x518f0a;
  fatherindex = _0x39903a = _0x8c3ae3 != -1 ? _0x8c3ae3 : 0;
  for (let _0x4efc6f = 0; _0x4efc6f < nosedata.length; _0x4efc6f++) {
    nosedata[_0x4efc6f] = parseFloat(_0x5618ec[_0x4efc6f]);
  }
  main_browser.execute("APPS.state.change_face.sliders = [" + _0x5618ec[0] + "," + _0x5618ec[1] + "," + _0x5618ec[2] + "," + _0x5618ec[3] + "," + _0x5618ec[4] + "," + _0x5618ec[5] + "," + _0x5618ec[6] + "," + _0x5618ec[7] + "," + _0x5618ec[8] + "," + _0x5618ec[9] + "," + _0x5618ec[10] + "," + _0x5618ec[11] + "," + _0x5618ec[12] + "," + _0x5618ec[13] + "," + _0x5618ec[14] + "," + _0x5618ec[15] + "," + _0x5618ec[16] + "," + _0x5618ec[17] + "," + _0x5618ec[18] + "," + _0x5618ec[19] + "];");
  main_browser.execute("APPS.state.change_face.brow_name = '" + appearanceItemNames[2][eyebrows] + "';");
  main_browser.execute("APPS.state.change_face.eye_name = '" + eyeColors[eyecolor] + "';");
  main_browser.execute("APPS.state.change_face.sliders_similarity = " + _0x47a902 + ";");
  main_browser.execute("APPS.state.change_face.mom_name = '" + motherNames[_0x518f0a] + "';");
  main_browser.execute("APPS.state.change_face.dad_name = '" + fatherNames[_0x39903a] + "';");
  main_browser.execute("APPS.state.change_face.show = true;");
});
mp.events.add("Create_ClearAnim", () => {
  localplayer.taskPlayAnim("amb@world_human_guard_patrol@male@base", "base", 8, 1, -1, 1, 0, false, false, false);
  localplayer.stopAnimTask("amb@world_human_guard_patrol@male@base", "base", 0);
});
mp.events.add("Create_RotPlayer", _0x4ccf4d => {
  let _0x1f9ca0 = localplayer.getRotation(2);
  if (_0x4ccf4d == 1) {
    _0x1f9ca0.z += 2;
  } else {
    _0x1f9ca0.z -= 2;
  }
  localplayer.setRotation(0, 0, _0x1f9ca0.z, 2, true);
});
const maleshirts = [9, 13, 33, 71];
const femaleshirts = [27, 14, 68, 73];
const malejeans = [5, 75, 7];
const femalejeans = [76, 7, 25];
const maleboots = [1, 42, 6];
const femaleboots = [0, 4, 10];
const beards = [255, 0, 1, 2, 3, 4, 5];
const HairNames = [language.Лысый[curr_lang], language["Стрижка «Buzz Cut»"][curr_lang], language["Стрижка «Ястреб»"][curr_lang], language.Хипстер[curr_lang], language["Стрижка «Side Part»"][curr_lang], language["Укороченная стрижка"][curr_lang], language["Стиль байкера"][curr_lang], language["Стрижка «Ponytail»"][curr_lang], language.Корнроу[curr_lang], language["Стрижка «Шегги»"][curr_lang]];
const fathers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45];
const mothers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44];
const fatherNames = [language.Бенжамин[curr_lang], language.Даниэль[curr_lang], language.Джош[curr_lang], language.Ноа[curr_lang], language.Андрью[curr_lang], language.Джуан[curr_lang], language.Алекс[curr_lang], language.Исак[curr_lang], language.Эван[curr_lang], language.Энтан[curr_lang], language.Винцент[curr_lang], language.Энжел[curr_lang], language.Диего[curr_lang], language.Адриан[curr_lang], language.Габриэль[curr_lang], language.Мишэль[curr_lang], language.Сантьяго[curr_lang], language.Кевин[curr_lang], language.Льюс[curr_lang], language.Самуэль[curr_lang], language.Энтони[curr_lang], language.Клауд[curr_lang], language.Нико[curr_lang], language.Джон[curr_lang], language.Ханна[curr_lang], language.Обри[curr_lang], language.Джасмин[curr_lang], language.Гизэлия[curr_lang], language.Амелия[curr_lang], language.Изабелла[curr_lang], language.Зоя[curr_lang], language.Ева[curr_lang], language.Камила[curr_lang], language.Виолетта[curr_lang], language.София[curr_lang], language.Эвелина[curr_lang], language.Николь[curr_lang], language.Эшли[curr_lang], language.Грейси[curr_lang], language.Бриана[curr_lang], language.Натали[curr_lang], language.Оливия[curr_lang], language.Элизабет[curr_lang], language.Шарлотта[curr_lang], language.Эмма[curr_lang], language.Мисти[curr_lang]];
const motherNames = [language.Ханна[curr_lang], language.Обри[curr_lang], language.Джасмин[curr_lang], language.Гизэлия[curr_lang], language.Амелия[curr_lang], language.Изабелла[curr_lang], language.Зоя[curr_lang], language.Ева[curr_lang], language.Камила[curr_lang], language.Виолетта[curr_lang], language.София[curr_lang], language.Эвелина[curr_lang], language.Николь[curr_lang], language.Эшли[curr_lang], language.Грейси[curr_lang], language.Бриана[curr_lang], language.Натали[curr_lang], language.Оливия[curr_lang], language.Элизабет[curr_lang], language.Шарлотта[curr_lang], language.Эмма[curr_lang], language.Мисти[curr_lang], language.Бенжамин[curr_lang], language.Даниэль[curr_lang], language.Джош[curr_lang], language.Ноа[curr_lang], language.Андрью[curr_lang], language.Джуан[curr_lang], language.Алекс[curr_lang], language.Исак[curr_lang], language.Эван[curr_lang], language.Энтан[curr_lang], language.Винцент[curr_lang], language.Энжел[curr_lang], language.Диего[curr_lang], language.Адриан[curr_lang], language.Габриэль[curr_lang], language.Мишэль[curr_lang], language.Сантьяго[curr_lang], language.Кевин[curr_lang], language.Льюс[curr_lang], language.Самуэль[curr_lang], language.Энтони[curr_lang], language.Клауд[curr_lang], language.Нико[curr_lang], language.Джон[curr_lang]];
const appearanceItemNames = [[language.Нет[curr_lang], language.Корь[curr_lang], language.Прыщи[curr_lang], language.Пятна[curr_lang], language.Вспыхивают[curr_lang], language.Угри[curr_lang], language["Break Out"][curr_lang], language.Пустулы[curr_lang], language.Прыщи[curr_lang], language["Полные Угри"][curr_lang], language.Угри[curr_lang], language["Сыпь На Щеках"][curr_lang], language["Сыпь На Лице"][curr_lang], language.Picker[curr_lang], language["Половое Созревание"][curr_lang], language["Бельмо На Глазу"][curr_lang], language["Сыпь На Подбородке"][curr_lang], language["Два Лица"][curr_lang], language["Т-Зона"][curr_lang], language.Ожирение[curr_lang], language.Marked[curr_lang], language["Рубцы От Угрей"][curr_lang], language["Полные Рубцы От Угрей"][curr_lang], language.Герпес[curr_lang], language.Импетиго[curr_lang]], [language.Нет[curr_lang], language["Легкая небритость"][curr_lang], language.Бальбо[curr_lang], language["Стиль «Канадка»"][curr_lang], language.Эспаньолка[curr_lang], language.Подбородок[curr_lang], language["Пышный Подбородок"][curr_lang], language["Стиль «Линкольн»"][curr_lang], language["Борода «Scruffy»"][curr_lang], language["Мушкетёрская борода"][curr_lang], language.Усы[curr_lang], language["Подстриженная борода"][curr_lang], language.Щетина[curr_lang], language["Тонкий круг"][curr_lang], language.Подкова[curr_lang], language["Борода «Pencil and Chops»"][curr_lang], language["Шкиперская борода"][curr_lang], language["Борода Бальбо"][curr_lang], language["Широкие бакенбарды"][curr_lang], language["Запущенная борода"][curr_lang], language["Курчавая борода"][curr_lang], language["Кудрявая борода"][curr_lang], language["Усы «Handlebar»"][curr_lang], language["Колкая борода"][curr_lang], language["Стиль «Отто & Патч»"][curr_lang], language["Стиль «Отто & Полный Чужой»"][curr_lang], language["Светлый Франц"][curr_lang], language.Хэмпстед[curr_lang], language["Стиль «The Ambrose»"][curr_lang], language["Борода Линкольна"][curr_lang]], [language.Нет[curr_lang], language.Сбалансированные[curr_lang], language.Модные[curr_lang], language.Клеопатра[curr_lang], language.Насмешливые[curr_lang], language.Женственные[curr_lang], language.Соблазнительные[curr_lang], language.Защемлённые[curr_lang], language.Чола[curr_lang], language.Арка[curr_lang], language.Беззаботные[curr_lang], language.Пышные[curr_lang], language.Грызун[curr_lang], language.Двойные[curr_lang], language.Тонкие[curr_lang], language.Подведённые[curr_lang], language["Матушка Великая"][curr_lang], language["Прямой и узкий"][curr_lang], language.Естественные[curr_lang], language.Нечеткие[curr_lang], language.Неопрятные[curr_lang], language.Гусеница[curr_lang], language.Обычные[curr_lang], language["Морской бриз"][curr_lang], language.Ухоженные[curr_lang], language["Брови «Bushels»"][curr_lang], language.Пернатые[curr_lang], language.Колючие[curr_lang], language.Монобровь[curr_lang], language.Крылатые[curr_lang], language.Тройные[curr_lang], language.Арочные[curr_lang], language.Вырезы[curr_lang], language.Исчезающие[curr_lang], language["Брови «Solo Tram»"][curr_lang]], [language.Нет[curr_lang], language["Гусины лапки"][curr_lang], language["Первые признаки"][curr_lang], language["Средний возраст"][curr_lang], language["Тревожные линии"][curr_lang], language.Депрессия[curr_lang], language.Выдающийся[curr_lang], language["В возрасте"][curr_lang], language.Выветренный[curr_lang], language.Морщинистый[curr_lang], language.Провисание[curr_lang], language["Жесткая жизнь"][curr_lang], language.Винтаж[curr_lang], language.Пенсионер[curr_lang], language.Наркоман[curr_lang], language.Старый[curr_lang]], [language.Нет[curr_lang], language["Дымчатый Черный"][curr_lang], language.Бронзовый[curr_lang], language["Мягкий Серый"][curr_lang], language["Ретро Гламур"][curr_lang], language["Естественный Взгляд"][curr_lang], language["Кошачий Глаз"][curr_lang], language.Чола[curr_lang], language.Соблазнительница[curr_lang], language["Гламур Вайнвуд"][curr_lang], language["Жевательная Резинка"][curr_lang], language["Аква-Дрим"][curr_lang], language.Заколка[curr_lang], language["Фиолетовая Страсть"][curr_lang], language["Кошачьи Глаза"][curr_lang], language["Тлеющий Рубиновый"][curr_lang], language["Поп-Принцесса"][curr_lang]], [language.Нет[curr_lang], language.Полный[curr_lang], language["Под Углом"][curr_lang], language.Круглый[curr_lang], language.Горизонтальный[curr_lang], language.Высокий[curr_lang], language.Милый[curr_lang], language.Восьмидесятые[curr_lang]], [language.Нет[curr_lang], language["Румяные Щеки"][curr_lang], language["Щетинистая Сыпь"][curr_lang], language["Горячий Румянец"][curr_lang], language.Загар[curr_lang], language.Ушиб[curr_lang], language.Алкогольный[curr_lang], language.Пятнистый[curr_lang], language.Тотем[curr_lang], language["Кровеносные Сосуды"][curr_lang], language.Поврежденный[curr_lang], language.Бледный[curr_lang], language.Призрачный[curr_lang]], [language.Нет[curr_lang], language.Неровный[curr_lang], language.Шлифованный[curr_lang], language.Пятнистый[curr_lang], language.Грубый[curr_lang], language.Кожистый[curr_lang], language.Текстурированный[curr_lang], language.Грубый[curr_lang], language.Прочный[curr_lang], language.Мятый[curr_lang], language.Треснувший[curr_lang], language.Песчаный[curr_lang]], [language.Нет[curr_lang], language["Матовый Цвет"][curr_lang], language["Цвет Глянец"][curr_lang], language["Линованный Матовый Цвет"][curr_lang], language["Линованный Глянц"][curr_lang], language["Плотный Линованный Матовый Цвет"][curr_lang], language["Плотный Линованный Глянец"][curr_lang], language["Жидкий Матовый Цвет"][curr_lang], language["Жидкий Глянец"][curr_lang], language.Размазанная[curr_lang], language.Гейша[curr_lang]], [language.Нет[curr_lang], language.Ангелочек[curr_lang], language.Повсюду[curr_lang], language.Непостоянный[curr_lang], language.Точечный[curr_lang], language["По мосту"][curr_lang], language.Кукольные[curr_lang], language.Фея[curr_lang], language["Поцелуй солнца"][curr_lang], language["Знаки красоты"][curr_lang], language.Линия[curr_lang], language.Стильно[curr_lang], language.Редко[curr_lang], language.Пятнами[curr_lang], language.Каплями[curr_lang], language["Двойное погружение"][curr_lang], language.Односторонние[curr_lang], language.Парами[curr_lang], language.Ростущие[curr_lang]], [language.Нет[curr_lang], language.Натуральные[curr_lang], language.Полосками[curr_lang], language["В форме дерева"][curr_lang], language.Волосатая[curr_lang], language.Страшная[curr_lang], language.Обезьянья[curr_lang], language["Ухоженная обезьяня"][curr_lang], language.Бикини[curr_lang], language.Молния[curr_lang], language["Обратная молния"][curr_lang], language["Любовь сердца"][curr_lang], language["Боль в груди"][curr_lang], language["Счастливое лицо"][curr_lang], language.Череп[curr_lang], language["След улитки"][curr_lang], language.Слизень[curr_lang], language["волосатые руки"][curr_lang]]];
const eyeColors = [language.Зеленый[curr_lang], language.Изумрудный[curr_lang], language.Голубой[curr_lang], language["Голубой океан"][curr_lang], language["Светло-коричневый"][curr_lang], language["Темно-коричневый"][curr_lang], language.Ореховый[curr_lang], language["Темно-серый"][curr_lang], language["Светло-серый"][curr_lang], language.Розовый[curr_lang], language.Желтый[curr_lang], language.Фиолетовый[curr_lang], language.Затемнение[curr_lang], language["Оттенки серого"][curr_lang], language["Текила Санрайз"][curr_lang], language.Атомный[curr_lang], language.Искожённый[curr_lang], language["Цвет Экола"][curr_lang], language["Космический рейнджер"][curr_lang], language["Инь и Янь"][curr_lang], language.Яблоко[curr_lang], language.Ящерица[curr_lang], language.Дракон[curr_lang], language.Внеземной[curr_lang], language.Козлиный[curr_lang], language.Смайлик[curr_lang], language.Одержимый[curr_lang], language.Демон[curr_lang], language.Зараженный[curr_lang], language.Инопланетянин[curr_lang], language.Нежить[curr_lang], language.Зомби[curr_lang]];
mp.events.add("Client_LanguageChanged", (_0x52c4f3, _0x5b0a79, _0x240344) => {
  if (!_0x240344 || !_0x52c4f3 || !_0x5b0a79) {
    return;
  }
  const _0x51d3c5 = global.buildLanguageReverseMap(_0x240344, _0x52c4f3);
  const _0x38044d = _0x4320e4 => {
    for (let _0x124d53 = 0; _0x124d53 < _0x4320e4.length; _0x124d53++) {
      if (Array.isArray(_0x4320e4[_0x124d53])) {
        _0x38044d(_0x4320e4[_0x124d53]);
      } else if (typeof _0x4320e4[_0x124d53] == "string") {
        _0x4320e4[_0x124d53] = global.retranslateTextByMap(_0x4320e4[_0x124d53], _0x51d3c5, _0x5b0a79);
      }
    }
  };
  _0x38044d(HairNames);
  _0x38044d(fatherNames);
  _0x38044d(motherNames);
  _0x38044d(appearanceItemNames);
  _0x38044d(eyeColors);
});