let azsshowedid;
let incarcfuel;
let incarccanister;
let incarcremcomp;
let bowner;
global.AzsOpened = false;
let bprodprices = new Array(3);
let fuelscounts = new Array(3);
let GlobalPrice = 0;
let max_tank_size = 80;
let vip_discount = 0;
function getAzsUnitPrice(_0x2b3fc4) {
  const _0x2145e4 = bprodprices[_0x2b3fc4] || 0;
  if (vip_discount) {
    return Math.floor(_0x2145e4 - _0x2145e4 / 100 * vip_discount);
  } else {
    return _0x2145e4;
  }
}
mp.events.add("AzsShow", (_0x3fae0b, _0x50cad2, _0x18d993, _0x14a1b5, _0x33df5a, _0x864708, _0x5204b8, _0x4fd22a, _0x2168c4, _0x36b896, _0x483de8, _0x275e49, _0x5997c6 = 0, _0x31f9b7 = 0, _0x1070fd = 0, _0x3cb7ec = 0, _0x169f60 = "", _0x1a92ca = 0, _0x105699 = 0) => {
  if (_0x3fae0b) {
    _0x3fae0b.setVelocity(0, 0, 0);
  }
  azsshowedid = _0x50cad2;
  incarcfuel = _0x18d993;
  incarccanister = _0x14a1b5;
  incarcremcomp = _0x33df5a;
  bowner = _0x5204b8;
  fuelscounts[0] = _0x18d993;
  fuelscounts[1] = _0x14a1b5;
  fuelscounts[2] = _0x33df5a;
  bprodprices[0] = _0x2168c4;
  bprodprices[1] = _0x36b896;
  bprodprices[2] = _0x483de8;
  vip_discount = parseInt(_0x105699) || 0;
  GlobalPrice = 0;
  max_tank_size = _0x275e49;
  AzsOpened = true;
  let _0x3948d0 = [_0x2168c4, _0x36b896, _0x483de8];
  _0x4fd22a = _0x4fd22a + "(" + (parseInt(_0x50cad2) + 1) + ")";
  let _0x1de5a5 = false;
  if (_0x50cad2 == -1) {
    _0x1de5a5 = true;
  }
  const _0x32568b = {
    bizname: _0x4fd22a = resolveTranslationValue(_0x4fd22a),
    bizowner: _0x5204b8 = resolveTranslationValue(_0x5204b8),
    prices: _0x3948d0,
    vip_discount: vip_discount,
    fuel_cost: 0,
    fuel: _0x18d993,
    current_fuel: _0x18d993,
    max_fuel: _0x275e49,
    rep_cost: 0,
    repair: _0x33df5a,
    current_repair: _0x33df5a,
    canistr_cost: 0,
    canistr: _0x14a1b5,
    current_canistr: _0x14a1b5,
    full_price: 0,
    free_azs: _0x1de5a5,
    tax_free: _0x5997c6,
    member: _0x31f9b7,
    fam: _0x1070fd,
    biz_fam: _0x3cb7ec,
    fam_name: _0x169f60,
    biz_money: _0x1a92ca,
    show: true
  };
  main_browser.execute("APPS.state.gas_station = " + JSON.stringify(_0x32568b));
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_UpdateAZSFamMoney", _0x37fd71 => {
  if (AzsOpened) {
    main_browser.execute("APPS.state.gas_station.biz_money = " + _0x37fd71 + ";");
  }
});
mp.events.add("AzsBuy", () => {
  if (AzsOpened) {
    if (new Date().getTime() - lastCheck < 500) {
      return;
    }
    lastCheck = new Date().getTime();
    mp.events.callRemote("AzsBought", azsshowedid);
  }
});
mp.events.add("Azs_Error", _0xb5f374 => {
  if (AzsOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xb5f374 + "');");
  }
});
mp.events.add("AzsBuyHide", _0x3330c4 => {
  main_browser.execute("APPS.state.gas_station.bizowner = '" + _0x3330c4 + "'");
});
mp.events.add("AzsBuyShow", _0x59e597 => {
  main_browser.execute("APPS.state.gas_station.bizowner = 'None'");
});
global.AzsClose = function () {
  if (AzsOpened) {
    mp.events.callRemote("AzsDeleteVariable");
    main_browser.execute("APPS.state.gas_station.show = false;");
    AzsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("AzsHide", () => {
  AzsClose();
});
mp.events.add("Client_OpenAuctionFromGasStation", () => {
  if (!AzsOpened || !loggedin || chatActive) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  const _0x38ccbc = typeof azsshowedid == "number" && azsshowedid >= 0 ? azsshowedid + 1 : 0;
  AzsClose();
  mp.events.callRemote("Server_OpenAuction", 0, _0x38ccbc);
});
mp.events.add("Client_SetMaxFuel", () => {
  if (!localplayer.vehicle || !localplayer.isInAnyVehicle(false)) {
    return;
  }
  let _0x46ecb9 = max_tank_size - fuelscounts[0];
  if (_0x46ecb9 <= 0) {
    return;
  }
  const _0x223396 = getAzsUnitPrice(0);
  fuelscounts[0] = max_tank_size;
  GlobalPrice += _0x223396 * _0x46ecb9;
  main_browser.execute("APPS.state.gas_station.fuel = " + max_tank_size);
  let _0x4dbbfb = (fuelscounts[0] - incarcfuel) * _0x223396;
  main_browser.execute("APPS.state.gas_station.fuel_cost = " + _0x4dbbfb);
  main_browser.execute("APPS.state.gas_station.full_price = " + GlobalPrice);
});
mp.events.add("Client_SetFuel", _0x3b116c => {
  if (!localplayer.vehicle || !localplayer.isInAnyVehicle(false)) {
    return;
  }
  if ((_0x3b116c = Math.round(Number(_0x3b116c) || 0)) < incarcfuel) {
    _0x3b116c = incarcfuel;
  }
  if (_0x3b116c > max_tank_size) {
    _0x3b116c = max_tank_size;
  }
  const _0x2d84b6 = getAzsUnitPrice(0);
  const _0x241bc5 = fuelscounts[0] - incarcfuel;
  const _0x52288e = _0x3b116c - incarcfuel;
  GlobalPrice -= _0x2d84b6 * _0x241bc5;
  GlobalPrice += _0x2d84b6 * _0x52288e;
  fuelscounts[0] = _0x3b116c;
  const _0xe8f4d8 = _0x52288e * _0x2d84b6;
  main_browser.execute("APPS.state.gas_station.fuel = " + fuelscounts[0]);
  main_browser.execute("APPS.state.gas_station.fuel_cost = " + _0xe8f4d8);
  main_browser.execute("APPS.state.gas_station.full_price = " + GlobalPrice);
});
mp.events.add("ChangePrices", (_0x4acf0f, _0x423077) => {
  let _0x41ca77;
  const _0x415953 = getAzsUnitPrice(_0x4acf0f);
  switch (_0x4acf0f) {
    case 0:
      if (!localplayer.vehicle || !localplayer.isInAnyVehicle(false)) {
        return;
      }
      if (_0x423077 == 0 && fuelscounts[0] <= incarcfuel) {
        return true;
      }
      if (_0x423077 == 0) {
        fuelscounts[0]--;
      }
      if (_0x423077 == 1 && fuelscounts[0] >= max_tank_size) {
        return true;
      }
      if (_0x423077 == 1) {
        fuelscounts[0]++;
      }
      _0x41ca77 = (fuelscounts[0] - incarcfuel) * _0x415953;
      if (_0x423077 == 0) {
        GlobalPrice -= _0x415953;
      } else if (_0x423077 == 1) {
        GlobalPrice += _0x415953;
      }
      main_browser.execute("APPS.state.gas_station.fuel = " + fuelscounts[0]);
      main_browser.execute("APPS.state.gas_station.fuel_cost = " + _0x41ca77);
      break;
    case 1:
      if (_0x423077 == 0 && fuelscounts[1] <= incarccanister) {
        return true;
      }
      if (_0x423077 == 0) {
        fuelscounts[1]--;
      }
      if (_0x423077 == 1) {
        fuelscounts[1]++;
      }
      _0x41ca77 = (fuelscounts[1] - incarccanister) * _0x415953;
      if (_0x423077 == 0) {
        GlobalPrice -= _0x415953;
      } else if (_0x423077 == 1) {
        GlobalPrice += _0x415953;
      }
      main_browser.execute("APPS.state.gas_station.canistr = " + fuelscounts[1]);
      main_browser.execute("APPS.state.gas_station.canistr_cost = " + _0x41ca77);
      break;
    case 2:
      if (_0x423077 == 0 && fuelscounts[2] <= incarcremcomp) {
        return true;
      }
      if (_0x423077 == 0) {
        fuelscounts[2]--;
      }
      if (_0x423077 == 1) {
        fuelscounts[2]++;
      }
      _0x41ca77 = (fuelscounts[2] - incarcremcomp) * _0x415953;
      if (_0x423077 == 0) {
        GlobalPrice -= _0x415953;
      } else if (_0x423077 == 1) {
        GlobalPrice += _0x415953;
      }
      main_browser.execute("APPS.state.gas_station.repair = " + fuelscounts[2]);
      main_browser.execute("APPS.state.gas_station.rep_cost = " + _0x41ca77);
  }
  main_browser.execute("APPS.state.gas_station.full_price = " + GlobalPrice);
});
mp.events.add("AzsCheckButton", () => {
  if (AzsOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("AzsBuyProducts", azsshowedid, fuelscounts[0], fuelscounts[1], fuelscounts[2], GlobalPrice);
    }
  }
});
mp.events.add("Client_SellPremiumOil", () => {
  if (AzsOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SellPremiumOil");
    }
  }
});
mp.events.add("Client_BuyPremiumOil", () => {
  if (AzsOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyPremiumOil");
    }
  }
});
global.ElectricAZSOpened = false;
mp.events.add("Client_OpenElectricAZS", (_0xa86fc7, _0x3a0834, _0x254090, _0x23be1f, _0x5513c8, _0x439e17, _0x5f09e2, _0x54d509, _0x284ea3, _0x3c23b4, _0x26cd0c = 0) => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (localplayer.vehicle) {
    localplayer.vehicle.setVelocity(0, 0, 0);
  }
  const _0x5d3797 = "{\"owner\":'" + _0xa86fc7 + "',\"cost\":" + _0x3a0834 + ",\"price\":" + _0x254090 + ",\"price2\":" + _0x23be1f + ",\"biz_fam\":" + _0x5513c8 + ",\"fam_name\":'" + _0x439e17 + "',\"fam\":" + _0x5f09e2 + ",\"biz_money\":" + _0x54d509 + ",\"fuel\":" + _0x284ea3 + ",\"full_price\":" + _0x3c23b4 + ",\"vip_discount\":" + (parseInt(_0x26cd0c) || 0) + ",\"show\":true}";
  main_browser.execute("APPS.state.electric_fuel = " + _0x5d3797);
  ElectricAZSOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseElectricAzs = function () {
  if (ElectricAZSOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.electric_fuel.show = false;");
    ElectricAZSOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseElectricAzs");
  }
};
mp.events.add("Client_FuelElectroVehicle", () => {
  if (ElectricAZSOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FuelElectroVehicle");
    }
  }
});
mp.events.add("Client_BuyElectroCharger", () => {
  if (ElectricAZSOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyElectroCharger");
    }
  }
});
mp.events.add("Client_CloseElectroAzs", () => {
  CloseElectricAzs();
});