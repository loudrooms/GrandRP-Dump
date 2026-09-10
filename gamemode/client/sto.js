global.InSTO = false;
const STO_TUNING_SPOTS = {
  0: {
    pos: [-338.55145263671875, -136.3170623779297, 38.65593719482422],
    heading: 274.78564453125
  },
  1: {
    pos: [731.6430053710938, -1089.0625, 21.815570831298828],
    heading: 269.3955993652344
  },
  2: {
    pos: [480.605, -1317.174, 28.851],
    heading: 65.213
  },
  3: {
    pos: [985.147, -138.079, 72.693],
    heading: -126.219
  },
  10: {
    pos: [-1549.05, -3180.41, 14.548],
    heading: 149.72
  },
  11: {
    pos: [-762.276, -1409.71, 0.12],
    heading: 141.272
  }
};
function getStoCameraBase(_0x22f440, _0xe05880) {
  const _0x2316a6 = STO_TUNING_SPOTS[_0x22f440];
  if (_0x2316a6) {
    return {
      pos: _0x2316a6.pos,
      heading: _0x2316a6.heading
    };
  } else if (_0xe05880) {
    return {
      pos: [_0xe05880.position.x, _0xe05880.position.y, _0xe05880.position.z],
      heading: _0xe05880.getHeading()
    };
  } else {
    return {
      pos: [0, 0, 0],
      heading: 0
    };
  }
}
function startInteractiveTuningCamera(_0x3749a7, _0x4a4fb6) {
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(_0x3749a7[0], _0x3749a7[1], _0x3749a7[2]), new mp.Vector3(_0x3749a7[0], _0x3749a7[1], _0x3749a7[2]), new mp.Vector3(-2.5, 3.5, 1.5), _0x4a4fb6, [0, 0], [-0.8, 1.8], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
}
let sto_state;
let currtune;
let rgb1;
let rgb2;
let currgb;
let component;
let gov_price;
let discount;
let currmod = -1;
let biz_discount = 0;
let vip_discount = 0;
let neon_data = [];
const TuningCameraAngles = {
  0: {
    angle: 324,
    zOffset: 0.3
  },
  1: {
    angle: 169,
    zOffset: -0.8
  },
  2: {
    angle: 308,
    zOffset: -0.8
  },
  3: {
    angle: 270,
    zOffset: -0.2
  },
  4: {
    angle: 324,
    zOffset: -0.8
  },
  5: {
    angle: 270,
    zOffset: 0
  },
  6: {
    angle: 0,
    zOffset: -0.1
  },
  7: {
    angle: 144,
    zOffset: 1.6
  },
  8: {
    angle: 280,
    zOffset: -0.8
  },
  9: {
    angle: 15,
    zOffset: 1
  },
  10: {
    angle: 144,
    zOffset: 1.8
  },
  14: {
    angle: null,
    zOffset: 0
  },
  18: {
    angle: null,
    zOffset: 0
  },
  22: {
    angle: 144,
    zOffset: -0.8
  },
  23: {
    angle: 234,
    zOffset: -0.8
  },
  24: {
    angle: 234,
    zOffset: -0.8
  },
  46: {
    angle: 270,
    zOffset: 0.1
  },
  66: {
    angle: null,
    zOffset: 0
  },
  67: {
    angle: null,
    zOffset: 0
  },
  90: {
    angle: null,
    zOffset: 0
  },
  91: {
    angle: 270,
    zOffset: -0.5
  },
  92: {
    angle: null,
    zOffset: 0
  },
  93: {
    angle: 144,
    zOffset: -0.8
  }
};
function focusCameraOnTuningCategory(_0x5b815f) {
  if (!localplayer.vehicle || !InSTO) {
    return;
  }
  const _0x543464 = TuningCameraAngles[_0x5b815f];
  if (_0x543464) {
    if (_0x543464.angle !== null) {
      InteractiveCamera.focusOnAngle(_0x543464.angle, _0x543464.zOffset, 400);
    } else {
      InteractiveCamera.focusOnAngle(null, _0x543464.zOffset, 400);
    }
  }
}
function getClientVipShopDiscountPercent() {
  if (!player_vip || player_vip <= 0) {
    return 0;
  }
  const _0x5bc49f = player_viplevel | 0;
  if (_0x5bc49f >= 5) {
    return 20;
  } else if (_0x5bc49f >= 4) {
    return 15;
  } else if (_0x5bc49f >= 3) {
    return 10;
  } else if (_0x5bc49f >= 2) {
    return 5;
  } else {
    return 0;
  }
}
function resolveStoVipDiscount(_0xa99d1c) {
  if (_0xa99d1c == null || typeof _0xa99d1c == "object") {
    return getClientVipShopDiscountPercent();
  }
  const _0x4b21e5 = parseInt(_0xa99d1c, 10);
  const _0x3c0a3e = getClientVipShopDiscountPercent();
  if (!isNaN(_0x4b21e5) && _0x4b21e5 >= 0) {
    return Math.max(_0x4b21e5, _0x3c0a3e);
  } else {
    return _0x3c0a3e;
  }
}
function setStoPrice(_0xe818b2) {
  const _0x3ed43b = Math.max(Number(vip_discount) || 0, getClientVipShopDiscountPercent());
  const _0x2382fa = Math.max(0, Number(biz_discount) || 0);
  const _0x963dd1 = _0x2382fa + _0x3ed43b;
  vip_discount = _0x3ed43b;
  let _0x9aff74 = Math.floor((Number(gov_price) || 0) / 100 * _0xe818b2);
  let _0x154d91 = Math.floor(_0x9aff74 - _0x9aff74 / 100 * _0x963dd1);
  let _0x5d0558 = null;
  if (_0x3ed43b > 0) {
    _0x5d0558 = Math.floor(_0x9aff74 - _0x9aff74 / 100 * _0x2382fa);
  }
  if (curr_lang == "ru" && server_number == 3) {
    _0x154d91 = Math.floor(_0x154d91 / 10);
    if (_0x5d0558 != null) {
      _0x5d0558 = Math.floor(_0x5d0558 / 10);
    }
  }
  if (_0x5d0558 != null && _0x5d0558 <= _0x154d91) {
    _0x5d0558 = null;
  }
  main_browser.execute("APP.$set(APPS.state.sto,'price'," + _0x154d91 + ");APP.$set(APPS.state.sto,'price_old'," + (_0x5d0558 ?? "null") + ");");
}
function clearStoPrice() {
  main_browser.execute("APP.$set(APPS.state.sto,'price',-1);APP.$set(APPS.state.sto,'price_old',null);");
}
function normalizeStoDiscountArgs(_0x150a36, _0x131d4c, _0x978b61) {
  if (_0x978b61 === undefined && (typeof _0x131d4c == "object" || !!Array.isArray(_0x131d4c))) {
    _0x978b61 = _0x131d4c;
    _0x131d4c = 0;
  }
  return {
    bizOrTotal: _0x150a36,
    vipDiscount: _0x131d4c,
    neon: _0x978b61
  };
}
mp.events.add("STOTune", (_0x11fc66, _0x5e34f6, _0xe48ff0, _0x15812c, _0x49b2c4, _0x25a054, _0x2be098 = 0, _0x5a0032) => {
  const _0x56d00 = normalizeStoDiscountArgs(_0x25a054, _0x2be098, _0x5a0032);
  STOFunc(_0x11fc66, _0x5e34f6, _0xe48ff0, _0x15812c, _0x49b2c4, _0x56d00.bizOrTotal, _0x56d00.neon, false, _0x56d00.vipDiscount);
});
mp.events.add("Client_OrgSTOTune", (_0x31b232, _0x440892, _0x2b4e28, _0x22d5f9, _0x341a24, _0x204127, _0x17a83d = 0, _0x52b4c0) => {
  const _0x2c2380 = normalizeStoDiscountArgs(_0x204127, _0x17a83d, _0x52b4c0);
  STOFunc(_0x31b232, _0x440892, _0x2b4e28, _0x22d5f9, _0x341a24, _0x2c2380.bizOrTotal, _0x2c2380.neon, true, _0x2c2380.vipDiscount);
});
let is_org_tuning = false;
global.STOFunc = function (_0x56af9f, _0x26ca3e, _0x5d43f6, _0x47c30e, _0x5794c5, _0x29b03a, _0x59a639, _0x44db92, _0x5b254d = 0) {
  if (_0x44db92 && localplayer.vehicle.getSpeed() * 3.6 > 5) {
    return mp.game.ui.notifications.show(language["Автомобиль должен стоять на месте"][curr_lang], false, 0, 6);
  }
  if (localplayer.vehicle) {
    localplayer.vehicle.setVelocity(0, 0, 0);
  }
  is_org_tuning = _0x44db92;
  let _0x4f39b6 = [];
  let _0x33ec22 = -1;
  gov_price = Number(_0x5794c5) || 0;
  vip_discount = resolveStoVipDiscount(_0x5b254d);
  biz_discount = Math.max(0, Number(_0x29b03a) || 0);
  discount = biz_discount + vip_discount;
  if (localplayer.vehicle) {
    if (localplayer.vehicle.model == 2864281543 || localplayer.vehicle.model == 1865586736 || localplayer.vehicle.model == 4151271568) {
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
      _0x4f39b6.push(-1);
    } else {
      _0x33ec22 = localplayer.vehicle.getNumMods(2) - 1;
      if (localplayer.vehicle.model != 1966489524) {
        _0x4f39b6.push(_0x33ec22);
      } else {
        _0x4f39b6.push(-1);
      }
      _0x33ec22 = localplayer.vehicle.getNumMods(1) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(0) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(3) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(4) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(5) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(6) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(7) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(8) - 1;
      if (localplayer.vehicle.model != 2996634967) {
        _0x4f39b6.push(_0x33ec22);
      } else {
        _0x4f39b6.push(-1);
      }
      _0x33ec22 = localplayer.vehicle.getNumMods(9) - 1;
      _0x4f39b6.push(_0x33ec22);
      _0x33ec22 = localplayer.vehicle.getNumMods(10) - 1;
      _0x4f39b6.push(_0x33ec22);
    }
  }
  const _0x274a78 = "{\"items_to_change\":[" + _0x4f39b6 + "],\"price\":null,\"name\":'',\"list\":0,\"max_list\":0,\"mod\":-1,\"colors\":false,\"camera\":3,\"sto_state\":" + _0x56af9f + ",\"free_buy\":" + _0x44db92 + ",\"list2\":0,\"max_list2\":0,\"show\":true}";
  main_browser.execute("APPS.state.sto = " + _0x274a78);
  currtune = _0x26ca3e;
  rgb1 = _0x5d43f6;
  rgb2 = _0x47c30e;
  component = -1;
  currmod = -1;
  currgb = rgb1;
  InSTO = true;
  neon_data = _0x59a639;
  sto_state = _0x56af9f;
  const {
    pos: _0x37818c,
    heading: _0x3cf2ad
  } = getStoCameraBase(_0x56af9f, localplayer.vehicle);
  startInteractiveTuningCamera(_0x37818c, _0x3cf2ad);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
};
global.CloseSTOTune = function () {
  if (InSTO) {
    if (sto_state != 500) {
      VehModGetBack(currmod);
    }
    if (localplayer.vehicle) {
      localplayer.vehicle.setLights(0);
    }
    InSTO = false;
    main_browser.execute("APPS.state.sto.show = false;");
    InteractiveCamera.stop();
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    currtune = "";
    if (sto_state != 500 && !is_org_tuning) {
      mp.events.callRemote("ServerCloseSTOTune");
    }
    if (localcamera) {
      localcamera.destroy();
      localcamera = null;
    }
  }
};
mp.events.add("Client_CloseSTO", CloseSTOTune);
mp.events.add("Client_ChangeTuneType", (_0x3e4db6, _0x4ee8e3) => {
  if (!localplayer.vehicle) {
    return;
  }
  let _0xcc1c0;
  _0x3e4db6 = parseInt(_0x3e4db6);
  _0x4ee8e3 = parseInt(_0x4ee8e3);
  component = -1;
  localplayer.vehicle.setLights(0);
  let _0xd6d7c1 = -1;
  main_browser.execute("APPS.state.sto.name = '';");
  if (sto_state == 11 && _0x3e4db6 != 17 && _0x3e4db6 != 18 && _0x3e4db6 != 21 && _0x3e4db6 != 19) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["В данном СТО Вы можете только сменить цвета, дополнительный цвет, пленку"][curr_lang] + "');");
    return;
  }
  if (sto_state == 10 && _0x3e4db6 != 17 && _0x3e4db6 != 18 && _0x3e4db6 != 15 && _0x3e4db6 != 21 && _0x3e4db6 != 19) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["В данном СТО Вы можете только сменить цвета, дополнительный цвет, тонировку, пленку"][curr_lang] + "');");
    return;
  }
  if (_0x3e4db6 < 13) {
    _0xcc1c0 = localplayer.vehicle.getNumMods(_0x4ee8e3) - 1;
    if (_0xcc1c0 == -1) {
      return currmod = -1;
    }
    if (_0x3e4db6 == 12) {
      main_browser.execute("APPS.state.sto.name = '" + language["Гудок 0"][curr_lang] + "';");
    }
  } else {
    if ((_0x4ee8e3 == 66 || _0x4ee8e3 == 67) && currtune[90] > 0) {
      PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
      main_browser.execute("APP.sendErrorMessage('" + language["Чтобы сменить цвет транспорта поставьте стоковое покрытие"][curr_lang] + "');");
      return;
    }
    if (_0x3e4db6 == 13) {
      localplayer.vehicle.setLights(2);
      _0xcc1c0 = 0;
      main_browser.execute("APPS.state.sto.name = '" + language.ксенон[curr_lang] + "';");
    } else if (_0x3e4db6 == 14) {
      _0xcc1c0 = 0;
      main_browser.execute("APPS.state.sto.name = '" + language.турбо[curr_lang] + "';");
    } else if (_0x3e4db6 == 15) {
      _0xcc1c0 = 3;
      main_browser.execute("APPS.state.sto.name = '" + language["тонировка 0"][curr_lang] + "';");
    } else if (_0x3e4db6 == 16) {
      _0xcc1c0 = 4;
      main_browser.execute("APPS.state.sto.name = '" + language["номерной знак 0"][curr_lang] + "';");
    } else if (_0x3e4db6 == 17 || _0x3e4db6 == 18) {
      _0xcc1c0 = -1;
      main_browser.execute("APPS.state.sto.name = '';");
      main_browser.execute("APPS.state.sto.colors = true;");
    } else if (_0x3e4db6 == 21) {
      _0xcc1c0 = 160;
      main_browser.execute("APPS.state.sto.name = '" + language["дополнительный цвет 0"][curr_lang] + "';");
    } else if (_0x3e4db6 == 26) {
      _0xcc1c0 = 160;
      main_browser.execute("APPS.state.sto.name = '" + language["цвет колес 0"][curr_lang] + "';");
    } else if (_0x3e4db6 == 19) {
      _0xcc1c0 = 4;
      main_browser.execute("APPS.state.sto.name = '" + language.отсутствует[curr_lang] + "';");
    } else if (_0x3e4db6 == 20) {
      _0xcc1c0 = 0;
      main_browser.execute("APPS.state.sto.name = '';");
      main_browser.execute("APPS.state.sto.colors = true;");
    } else if (_0x3e4db6 == 22) {
      main_browser.execute("APPS.state.sto.name = '" + language["цвет фар"][curr_lang] + "';");
      localplayer.vehicle.setLights(2);
      _0xcc1c0 = 12;
    }
  }
  if (_0x3e4db6 != 17 && _0x3e4db6 != 18 && _0x3e4db6 != 20) {
    main_browser.execute("APPS.state.sto.colors = false;");
  }
  if (sto_state != 500) {
    VehModGetBack(currmod);
  }
  currmod = _0x4ee8e3;
  _0xd6d7c1 = component = currtune[currmod] ?? -1;
  if (currmod == 91 && _0xd6d7c1 == 1) {
    _0xd6d7c1 = component = 0;
  }
  if (currmod == 66 || currmod == 67 || currmod == 91) {
    let _0x394576 = currmod == 66 ? rgb1 : currmod == 67 ? rgb2 : neon_data;
    if (Array.isArray(_0x394576) && _0x394576.length > 0) {
      _0x394576 = [..._0x394576];
      if (_0x394576.length === 4) {
        _0x394576.splice(0, 1);
      }
      main_browser.execute("APPS.state.sto.colorsData = " + JSON.stringify(_0x394576));
    }
  }
  if (currmod == 22) {
    localplayer.vehicle.toggleMod(22, false);
    SetVehicleLightColor(localplayer.vehicle, 255);
  }
  if (currmod == 90) {
    _0xd6d7c1--;
    mp.events.call("Client_ChangeTuneItem", _0xd6d7c1);
  } else if (currmod == 91) {
    if (currtune[currmod] != -1 && neon_data.length > 0) {
      TurnOnEngine(localplayer.vehicle);
      localplayer.vehicle.setNeonLightEnabled(0, true);
      localplayer.vehicle.setNeonLightEnabled(1, true);
      localplayer.vehicle.setNeonLightEnabled(2, true);
      localplayer.vehicle.setNeonLightEnabled(3, true);
      localplayer.vehicle.setNeonLightsColour(parseInt(neon_data[1]), parseInt(neon_data[2]), parseInt(neon_data[3]));
    }
    if (component == -1) {
      clearStoPrice();
    } else {
      setStoPrice(13);
    }
  } else if (component == -1 && _0x3e4db6 != 17 && _0x3e4db6 != 18 && _0x3e4db6 != 20) {
    clearStoPrice();
  } else {
    let _0x32806c = 100;
    if (_0x4ee8e3 == 0) {
      _0x32806c = 3;
    } else if (_0x4ee8e3 == 1 || _0x4ee8e3 == 2) {
      _0x32806c = 4;
    } else if (_0x4ee8e3 == 3 || _0x4ee8e3 == 4) {
      _0x32806c = 2;
    } else if (_0x4ee8e3 == 5 || _0x4ee8e3 == 6) {
      _0x32806c = 1;
    } else if (_0x4ee8e3 == 7) {
      _0x32806c = 3;
    } else if (_0x4ee8e3 == 8 || _0x4ee8e3 == 9) {
      _0x32806c = 2;
    } else if (_0x4ee8e3 == 10) {
      _0x32806c = 4;
    } else if (_0x4ee8e3 == 23) {
      _0x32806c = 15;
    } else if (_0x4ee8e3 == 14) {
      _0x32806c = 1;
    } else if (_0x4ee8e3 == 22) {
      _0x32806c = 2;
    } else if (_0x4ee8e3 == 93) {
      _0x32806c = 15;
    } else if (_0x4ee8e3 == 18) {
      _0x32806c = 3;
    } else if (_0x4ee8e3 == 46) {
      _0x32806c = 6;
    } else if (_0x4ee8e3 == 62) {
      _0x32806c = 10;
    } else if (_0x4ee8e3 == 24 || _0x4ee8e3 == 92) {
      _0x32806c = 1;
    } else if (_0x4ee8e3 == 66 || _0x4ee8e3 == 67) {
      _0x32806c = 1;
    }
    setStoPrice(_0x32806c);
  }
  main_browser.execute("APPS.state.sto.list = " + _0xd6d7c1 + ";");
  main_browser.execute("APPS.state.sto.max_list = " + _0xcc1c0 + ";");
  main_browser.execute("APPS.state.sto.mod = " + currmod + ";");
  focusCameraOnTuningCategory(_0x4ee8e3);
});
mp.events.add("Client_ChangeVehColor", (_0x155e55, _0xdbd7e3, _0x237e8f) => {
  if (!localplayer.vehicle) {
    return;
  }
  if (new Date().getTime() - lastCheck < 100) {
    return;
  }
  let _0x4d73df;
  lastCheck = new Date().getTime();
  _0x155e55 = parseInt(_0x155e55);
  _0xdbd7e3 = parseInt(_0xdbd7e3);
  _0x237e8f = parseInt(_0x237e8f);
  currgb = [];
  currgb.push(_0x155e55);
  currgb.push(_0xdbd7e3);
  currgb.push(_0x237e8f);
  if (currmod == 66) {
    _0x4d73df = 1;
  } else if (currmod == 67) {
    _0x4d73df = 2;
  } else if (currmod == 91) {
    TurnOnEngine(localplayer.vehicle);
    localplayer.vehicle.setNeonLightEnabled(0, true);
    localplayer.vehicle.setNeonLightEnabled(1, true);
    localplayer.vehicle.setNeonLightEnabled(2, true);
    localplayer.vehicle.setNeonLightEnabled(3, true);
    localplayer.vehicle.setNeonLightsColour(_0x155e55, _0xdbd7e3, _0x237e8f);
    return;
  }
  if ((_0x4d73df == 1 || _0x4d73df == 2) && currtune[90] > 0) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + language["Чтобы сменить цвет транспорта поставьте стоковое покрытие"][curr_lang] + "');");
    return;
  }
  if (_0x4d73df == 1) {
    localplayer.vehicle.setCustomPrimaryColour(_0x155e55, _0xdbd7e3, _0x237e8f);
  } else if (_0x4d73df == 2) {
    localplayer.vehicle.setCustomSecondaryColour(_0x155e55, _0xdbd7e3, _0x237e8f);
  }
});
mp.events.add("Client_ChangePaintItem", _0x38af24 => {
  _0x38af24 = parseInt(_0x38af24);
  last_paint_index = _0x38af24;
  if (currmod != -1 && localplayer.vehicle && currmod == 90) {
    mp.events.callRemote("Server_ChangeVehicleModColor", last_paint_mod, _0x38af24);
  }
});
let last_paint_index = 0;
let last_paint_mod = 0;
function VehModGetBack(_0x37790c) {
  if (_0x37790c != -1 && localplayer.vehicle) {
    if (_0x37790c == 46) {
      localplayer.vehicle.setWindowTint(parseInt(currtune[_0x37790c]));
    } else if (_0x37790c == 62) {
      localplayer.vehicle.setNumberPlateTextIndex(parseInt(currtune[_0x37790c]));
    } else if (_0x37790c == 66 || _0x37790c == 67) {
      mp.events.callRemote("Server_ChangeVehicleModColor", -1, -1);
    } else if (_0x37790c == 90 && currtune != null) {
      mp.events.callRemote("Server_ChangeVehicleModColor", parseInt(currtune[_0x37790c]), -1);
    } else if (_0x37790c == 24) {
      mp.events.callRemote("Server_ChangeWheelColor", parseInt(currtune[_0x37790c]));
    } else if (_0x37790c == 92) {
      mp.events.callRemote("Server_ChangeExtraColor", parseInt(currtune[_0x37790c]));
    } else if (_0x37790c == 91 && currtune != null) {
      localplayer.vehicle.setEngineOn(false, false, true);
      if (currtune[_0x37790c] == -1) {
        localplayer.vehicle.setNeonLightEnabled(0, false);
        localplayer.vehicle.setNeonLightEnabled(1, false);
        localplayer.vehicle.setNeonLightEnabled(2, false);
        localplayer.vehicle.setNeonLightEnabled(3, false);
        localplayer.vehicle.setNeonLightsColour(0, 0, 0);
      } else {
        localplayer.vehicle.setNeonLightEnabled(0, true);
        localplayer.vehicle.setNeonLightEnabled(1, true);
        localplayer.vehicle.setNeonLightEnabled(2, true);
        localplayer.vehicle.setNeonLightEnabled(3, true);
        localplayer.vehicle.setNeonLightsColour(parseInt(neon_data[1]), parseInt(neon_data[2]), parseInt(neon_data[3]));
      }
    } else if (currmod == 93) {
      if (currtune[_0x37790c] == -1) {
        localplayer.vehicle.toggleMod(22, false);
        SetVehicleLightColor(localplayer.vehicle, 255);
      } else {
        localplayer.vehicle.toggleMod(22, true);
        SetVehicleLightColor(localplayer.vehicle, parseInt(currtune[_0x37790c]));
      }
    } else if (currtune != null) {
      localplayer.vehicle.setMod(parseInt(_0x37790c), parseInt(currtune[_0x37790c]));
    }
  }
}
function STO_Error(_0x26f6f1) {
  if (InSTO) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x26f6f1 + "');");
  }
}
mp.events.add("Client_ChangeTuneItem", _0x4525e8 => {
  _0x4525e8 = parseInt(_0x4525e8);
  component = _0x4525e8;
  if (currmod != -1 && localplayer.vehicle) {
    if (currmod != 46 && currmod != 62 && currmod != 14 && currmod != 90 && currmod != 92 && currmod != 93 && currmod != 24) {
      if (currmod == 22) {
        localplayer.vehicle.toggleMod(22, false);
        SetVehicleLightColor(localplayer.vehicle, 255);
      }
      localplayer.vehicle.setMod(currmod, _0x4525e8);
    } else if (currmod == 46) {
      main_browser.execute("APPS.state.sto.name = '" + TranslateText("Тонировка {0}", _0x4525e8 + 1) + "';");
      localplayer.vehicle.setWindowTint(_0x4525e8);
    } else if (currmod == 62) {
      main_browser.execute("APPS.state.sto.name = '" + TranslateText("Номерной знак {0}", _0x4525e8 + 1) + "';");
      localplayer.vehicle.setNumberPlateTextIndex(_0x4525e8);
    } else if (currmod == 14) {
      main_browser.execute("APPS.state.sto.name = '" + TranslateText("Гудок {0}", _0x4525e8 + 1) + "';");
      localplayer.vehicle.setMod(currmod, _0x4525e8);
      localplayer.vehicle.startHorn(1500, mp.game.joaat("HELDDOWN"), true);
    } else if (currmod == 90) {
      const _0x3c1a78 = _0x4525e8 + 1;
      if (_0x3c1a78 == 0) {
        main_browser.execute("APPS.state.sto.name = '" + language.Обычная[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 0;");
        clearStoPrice();
      } else if (_0x3c1a78 == 1) {
        main_browser.execute("APPS.state.sto.name = '" + language.Металлическое[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 74;");
      } else if (_0x3c1a78 == 5) {
        main_browser.execute("APPS.state.sto.name = '" + language.Хром[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 0;");
      } else if (_0x3c1a78 == 2) {
        main_browser.execute("APPS.state.sto.name = '" + language.Перламутр[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 73;");
      } else if (_0x3c1a78 == 3) {
        main_browser.execute("APPS.state.sto.name = '" + language.Матовое[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 19;");
      } else if (_0x3c1a78 == 4) {
        main_browser.execute("APPS.state.sto.name = '" + language.Металл[curr_lang] + "';");
        main_browser.execute("APPS.state.sto.max_list2 = 4;");
      }
      if (currtune[90] == _0x3c1a78 && typeof currtune[94] == "number") {
        main_browser.execute("APPS.state.sto.list2 = " + currtune[94] + ";");
        last_paint_index = currtune[94];
      } else {
        main_browser.execute("APPS.state.sto.list2 = 0;");
        last_paint_index = 0;
      }
      last_paint_mod = _0x3c1a78;
      component = _0x3c1a78;
      mp.events.callRemote("Server_ChangeVehicleModColor", _0x3c1a78, last_paint_index);
    } else if (currmod == 92) {
      main_browser.execute("APPS.state.sto.name = '" + TranslateText("Дополнительный цвет {0}", _0x4525e8 + 1) + "';");
      mp.events.callRemote("Server_ChangeExtraColor", _0x4525e8);
    } else if (currmod == 24) {
      main_browser.execute("APPS.state.sto.name = '" + TranslateText("цвет колес {0}", _0x4525e8 + 1) + "';");
      mp.events.callRemote("Server_ChangeWheelColor", _0x4525e8);
    } else if (currmod == 93) {
      localplayer.vehicle.toggleMod(22, true);
      SetVehicleLightColor(localplayer.vehicle, _0x4525e8);
    }
    if (_0x4525e8 == -1) {
      clearStoPrice();
    } else {
      let _0x434c26 = 100;
      if (currmod == 0) {
        _0x434c26 = 3;
      } else if (currmod == 1 || currmod == 2) {
        _0x434c26 = 4;
      } else if (currmod == 3 || currmod == 4) {
        _0x434c26 = 2;
      } else if (currmod == 5 || currmod == 6) {
        _0x434c26 = 1;
      } else if (currmod == 7) {
        _0x434c26 = 3;
      } else if (currmod == 8 || currmod == 9) {
        _0x434c26 = 2;
      } else if (currmod == 10) {
        _0x434c26 = 4;
      } else if (currmod == 23) {
        _0x434c26 = 15;
      } else if (currmod == 14) {
        _0x434c26 = 1;
      } else if (currmod == 22) {
        _0x434c26 = 2;
      } else if (currmod == 93) {
        _0x434c26 = 15;
      } else if (currmod == 18) {
        _0x434c26 = 3;
      } else if (currmod == 46) {
        _0x434c26 = 6;
      } else if (currmod == 62) {
        _0x434c26 = 10;
      } else if (currmod == 90 || currmod == 92 || currmod == 24 || currmod == 66 || currmod == 67) {
        _0x434c26 = 1;
      } else if (currmod == 91) {
        _0x434c26 = 13;
      }
      if (currmod != 90 || _0x4525e8 != -1) {
        setStoPrice(_0x434c26);
      }
    }
  }
});
mp.events.add("Client_BuyTune", () => {
  if (!(new Date().getTime() - lastCheck < 250) && (lastCheck = new Date().getTime(), localplayer.vehicle)) {
    if (currmod == 66 || currmod == 67 || currmod == 91) {
      if (currmod == 91 && component == -1) {
        mp.events.callRemote(is_org_tuning ? "Server_DisableNeonTuningOrg" : "Server_DisableNeonTuning");
        return;
      }
      let _0x55f94a;
      if (currmod == 66) {
        _0x55f94a = 1;
      } else if (currmod == 67) {
        _0x55f94a = 2;
      } else if (currmod == 91) {
        _0x55f94a = 3;
      }
      if (is_org_tuning) {
        mp.events.callRemote("Server_STO_BuyVehicleOrgColor", _0x55f94a, currgb[0], currgb[1], currgb[2]);
      } else {
        mp.events.callRemote("STO_BuyVehicleColor", _0x55f94a, currgb[0], currgb[1], currgb[2]);
      }
    } else {
      if (currmod == -1) {
        return;
      }
      if (currtune[currmod] == component && currmod != 90) {
        return STO_Error(language["У Вас установлена такая же деталь"][curr_lang]);
      }
      if (sto_state != 500) {
        if ((currmod <= 10 || currmod == 14 || currmod == 23) && component > localplayer.vehicle.getNumMods(currmod)) {
          return;
        }
        if (is_org_tuning) {
          mp.events.callRemote("Server_SetVehicleOrgTuning", currmod, component, last_paint_index);
        } else {
          mp.events.callRemote("SetVehicleTuning", currmod, component, last_paint_index);
        }
      }
    }
  }
});
mp.events.add("STOBuySuccess", (_0x32dc8d, _0x3cdf9c, _0x2866ab) => {
  if (currtune) {
    currtune[_0x32dc8d] = _0x3cdf9c;
  }
  if (typeof _0x2866ab == "number") {
    last_paint_index = _0x2866ab;
    currtune[94] = _0x2866ab;
  }
});
mp.events.add("STOBuySuccessColor", (_0x2ca485, _0x10264a) => {
  if (_0x10264a == 1) {
    rgb1 = _0x2ca485;
  } else if (_0x10264a == 2) {
    rgb2 = _0x2ca485;
  } else if (_0x10264a == 3) {
    neon_data = _0x2ca485;
    if (currtune) {
      currtune[91] = 1;
    }
  }
});
mp.events.add("Client_DisableNeonTuning", () => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setNeonLightEnabled(0, false);
    localplayer.vehicle.setNeonLightEnabled(1, false);
    localplayer.vehicle.setNeonLightEnabled(2, false);
    localplayer.vehicle.setNeonLightEnabled(3, false);
    localplayer.vehicle.setNeonLightsColour(0, 0, 0);
    if (currtune) {
      currtune[91] = -1;
    }
  }
});
mp.events.add("SetVehicleWindowTint", (_0x693eb4, _0x465195) => {
  if (_0x693eb4) {
    _0x693eb4.setWindowTint(_0x465195);
  }
});
mp.events.add("CheckVehMod", _0x327ab3 => {
  _0x327ab3 = parseInt(_0x327ab3);
});
mp.events.add("TestWindowTint", _0x4ac74a => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setWindowTint(parseInt(_0x4ac74a));
  }
});
mp.events.add("TestPlateType", _0x42c51b => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setNumberPlateTextIndex(parseInt(_0x42c51b));
  }
});
mp.events.add("Client_TestExtraColors", (_0x535e9d, _0x4e95a5) => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setExtraColours(parseInt(_0x535e9d), parseInt(_0x4e95a5));
  }
});
mp.events.add("TestWheelType", _0x38a582 => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setWheelType(parseInt(_0x38a582));
  }
});
mp.events.add("ChangeVehModColor", (_0x504ff2, _0x5c9559) => {
  if (localplayer.vehicle) {
    _0x504ff2 = parseInt(_0x504ff2);
    _0x5c9559 = parseInt(_0x5c9559) || 0;
    if (_0x504ff2 === 5) {
      localplayer.vehicle.setModColor1(5, 0, 0);
      localplayer.vehicle.setModColor2(5, 0);
      return;
    }
    if (_0x504ff2) {
      localplayer.vehicle.setModColor1(_0x504ff2, _0x5c9559, 0);
      localplayer.vehicle.setModColor2(_0x504ff2, _0x5c9559);
    }
  }
});
mp.events.add("STO_Error", _0x1994b4 => {
  STO_Error(_0x1994b4);
});
global.inVinil = false;
let current_vinil = 0;
mp.events.add("Client_OpenVinil", _0x4a3542 => {
  VinilFunc(_0x4a3542);
});
global.VinilFunc = function (_0x45d388, _0x37e257 = 1) {
  let _0x45fe5b = -1;
  if (localplayer.vehicle) {
    _0x45fe5b = localplayer.vehicle.getNumMods(48) - 1;
  }
  if (_0x45fe5b == -1) {
    mp.game.ui.notifications.show(language["Для данной модели нет доступного винила"][curr_lang], false, 0, 6);
    if (at_drive_mode == 0) {
      mp.events.callRemote("Server_CloseVinil");
    }
    return;
  }
  if (localplayer.vehicle) {
    localplayer.vehicle.setVelocity(0, 0, 0);
  }
  gov_price = _0x45d388;
  current_vinil = -1;
  const _0x1952fd = "{\"price\":'$0',\"name\":'" + language.Винил[curr_lang] + "',\"list\":0,\"max_list\":" + _0x45fe5b + ",\"state\":" + _0x37e257 + ",\"show\":true}";
  main_browser.execute("APPS.state.vinil = " + _0x1952fd);
  const {
    pos: _0x1e6483,
    heading: _0x432bea
  } = getStoCameraBase(undefined, localplayer.vehicle);
  startInteractiveTuningCamera(_0x1e6483, _0x432bea);
  inVinil = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
};
global.CloseVinilTune = function () {
  if (inVinil) {
    inVinil = false;
    main_browser.execute("APPS.state.vinil.show = false;");
    InteractiveCamera.stop();
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseVinil");
    if (localcamera) {
      localcamera.destroy();
      localcamera = null;
    }
  }
};
mp.events.add("Client_BuyVinil", () => {
  if (inVinil) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyVinil", current_vinil);
    }
  }
});
mp.events.add("Client_ChangeVinilItem", _0x5c8b8d => {
  if (inVinil && localplayer.vehicle) {
    if (_0x5c8b8d == 0) {
      if (current_vinil == -1) {
        return;
      }
      current_vinil--;
    } else if (_0x5c8b8d == 1) {
      const _0x19a2a2 = localplayer.vehicle.getNumMods(48) - 1;
      if (current_vinil >= _0x19a2a2) {
        return;
      }
      current_vinil++;
    }
    localplayer.vehicle.setMod(48, current_vinil);
    if (current_vinil == -1) {
      main_browser.execute("APPS.state.vinil.price = '$0';");
    } else {
      const _0x1bd175 = Math.floor(gov_price / 100 * 15);
      main_browser.execute("APPS.state.vinil.price = '$" + _0x1bd175 + "';");
    }
  }
});
mp.events.add("Vinil_Error", _0x567fe1 => {
  if (inVinil) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x567fe1 + "');");
  }
});