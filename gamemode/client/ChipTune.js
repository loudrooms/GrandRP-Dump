global.ChipTuneOpened = false;
let discounts = 0;
mp.events.add("ChipTune", (_0x535212, _0x32f193, _0x38386a, _0x2079de, _0x53d51f, _0x4631ed, _0x494c30, _0x1bc39e) => {
  if (localplayer.vehicle) {
    localplayer.vehicle.setVelocity(0, 0, 0);
  }
  _0x494c30 = parseInt(_0x494c30);
  discounts = _0x494c30;
  if ((_0x32f193 = parseInt(_0x32f193)) == -1 || _0x32f193 == 255) {
    _0x32f193 = 0;
  } else {
    _0x32f193++;
  }
  if ((_0x38386a = parseInt(_0x38386a)) == -1 || _0x38386a == 255) {
    _0x38386a = 0;
  } else {
    _0x38386a++;
  }
  if ((_0x2079de = parseInt(_0x2079de)) == -1 || _0x2079de == 255) {
    _0x2079de = 0;
  } else {
    _0x2079de++;
  }
  if ((_0x53d51f = parseInt(_0x53d51f)) == -1 || _0x53d51f == 255) {
    _0x53d51f = 0;
  } else {
    _0x53d51f++;
  }
  let _0x512fde = new Array(4);
  _0x512fde[0] = _0x4631ed / 100 * ((_0x32f193 + 1) * 20) - _0x4631ed / 100 * ((_0x32f193 + 1) * 20) / 100 * _0x494c30;
  _0x512fde[0] = Math.floor(_0x512fde[0]);
  _0x512fde[0] = parseInt(_0x512fde[0]);
  _0x512fde[1] = _0x4631ed / 100 * ((_0x38386a + 1) * 5) - _0x4631ed / 100 * ((_0x38386a + 1) * 5) / 100 * _0x494c30;
  _0x512fde[1] = Math.floor(_0x512fde[1]);
  _0x512fde[1] = parseInt(_0x512fde[1]);
  _0x512fde[2] = _0x4631ed / 100 * ((_0x2079de + 1) * 3) - _0x4631ed / 100 * ((_0x2079de + 1) * 3) / 100 * _0x494c30;
  _0x512fde[2] = Math.floor(_0x512fde[2]);
  _0x512fde[2] = parseInt(_0x512fde[2]);
  _0x512fde[3] = _0x4631ed / 100 * ((_0x53d51f + 1) * 4) - _0x4631ed / 100 * ((_0x53d51f + 1) * 4) / 100 * _0x494c30;
  _0x512fde[3] = Math.floor(_0x512fde[3]);
  _0x512fde[3] = parseInt(_0x512fde[3]);
  const _0x128eab = _0x4631ed / 100 * (100 - _0x1bc39e);
  let _0x4fa63b = Math.floor(_0x128eab - _0x128eab / 100 * _0x494c30);
  _0x4fa63b = parseInt(_0x4fa63b);
  const _0x28e828 = "{\"v_engine_status\":" + _0x1bc39e + ",\"v_engine_price\":" + _0x4fa63b + ",\"engine_level\":" + _0x32f193 + ",\"engine_price\":" + _0x512fde[0] + ",\"brakes_level\":" + _0x38386a + ",\"brakes_price\":" + _0x512fde[1] + ",\"suspension_level\":" + _0x2079de + ",\"suspension_price\":" + _0x512fde[2] + ",\"transmission_level\":" + _0x53d51f + ",\"transmission_price\":" + _0x512fde[3] + ",\"show\":true}";
  main_browser.execute("APPS.state.chip_tune = " + _0x28e828);
  ChipTuneOpened = true;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (_0x535212 == 0) {
    localcamera = mp.cameras.new("default", new mp.Vector3(104.59962463378906, 6626.9873046875, 32.7510986328125), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(108.9333267211914, 6627.37841796875, 31.84012222290039);
    localcamera.setActive(true);
  } else if (_0x535212 == 1) {
    localcamera = mp.cameras.new("default", new mp.Vector3(-1155.3924560546875, -2012.5081787109375, 13.649157524108887), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(-1154.913818359375, -2007.2938232421875, 13.457590103149414);
    localcamera.setActive(true);
  } else if (_0x535212 == 2) {
    localcamera = mp.cameras.new("default", new mp.Vector3(1179.345, 2641.48, 39.457), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(1172.237, 2639.169, 36.792);
    localcamera.setActive(true);
  } else if (_0x535212 == 3) {
    localcamera = mp.cameras.new("default", new mp.Vector3(257.97, 2594.252, 47.49), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(259.543, 2585.563, 43.954);
    localcamera.setActive(true);
  }
  mp.game.cam.renderScriptCams(true, true, 2000, true, false);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseChipTune = function () {
  if (ChipTuneOpened) {
    ChipTuneOpened = false;
    main_browser.execute("APPS.state.chip_tune.show = false;");
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("ServerCloseChipTune");
  }
};
mp.events.add("UpdateChipTune", (_0x3ca902, _0x3012ae, _0x31bedf, _0x4999c5, _0xb03e9d, _0x170f3b, _0x5dc18d) => {
  if ((_0x3012ae = parseInt(_0x3012ae)) == -1 || _0x3012ae == 255) {
    _0x3012ae = 0;
  } else {
    _0x3012ae++;
  }
  if ((_0x31bedf = parseInt(_0x31bedf)) == -1 || _0x31bedf == 255) {
    _0x31bedf = 0;
  } else {
    _0x31bedf++;
  }
  if ((_0x4999c5 = parseInt(_0x4999c5)) == -1 || _0x4999c5 == 255) {
    _0x4999c5 = 0;
  } else {
    _0x4999c5++;
  }
  if ((_0xb03e9d = parseInt(_0xb03e9d)) == -1 || _0xb03e9d == 255) {
    _0xb03e9d = 0;
  } else {
    _0xb03e9d++;
  }
  let _0x30a59f = new Array(4);
  _0x30a59f[0] = _0x170f3b / 100 * ((_0x3012ae + 1) * 20) - _0x170f3b / 100 * ((_0x3012ae + 1) * 20) / 100 * discounts;
  _0x30a59f[0] = Math.floor(_0x30a59f[0]);
  _0x30a59f[0] = parseInt(_0x30a59f[0]);
  _0x30a59f[1] = _0x170f3b / 100 * ((_0x31bedf + 1) * 5) - _0x170f3b / 100 * ((_0x31bedf + 1) * 5) / 100 * discounts;
  _0x30a59f[1] = Math.floor(_0x30a59f[1]);
  _0x30a59f[1] = parseInt(_0x30a59f[1]);
  _0x30a59f[2] = _0x170f3b / 100 * ((_0x4999c5 + 1) * 3) - _0x170f3b / 100 * ((_0x4999c5 + 1) * 3) / 100 * discounts;
  _0x30a59f[2] = Math.floor(_0x30a59f[2]);
  _0x30a59f[2] = parseInt(_0x30a59f[2]);
  _0x30a59f[3] = _0x170f3b / 100 * ((_0xb03e9d + 1) * 4) - _0x170f3b / 100 * ((_0xb03e9d + 1) * 4) / 100 * discounts;
  _0x30a59f[3] = Math.floor(_0x30a59f[3]);
  _0x30a59f[3] = parseInt(_0x30a59f[3]);
  const _0x1847ea = _0x170f3b / 100 * (100 - _0x5dc18d);
  let _0x1c4ec8 = Math.floor(_0x1847ea - _0x1847ea / 100 * discounts);
  _0x1c4ec8 = parseInt(_0x1c4ec8);
  main_browser.execute("APPS.state.chip_tune.v_engine_status = " + _0x5dc18d);
  main_browser.execute("APPS.state.chip_tune.v_engine_price = " + _0x1c4ec8);
  main_browser.execute("APPS.state.chip_tune.engine_level = " + _0x3012ae);
  main_browser.execute("APPS.state.chip_tune.engine_price = " + _0x30a59f[0]);
  main_browser.execute("APPS.state.chip_tune.brakes_level = " + _0x31bedf);
  main_browser.execute("APPS.state.chip_tune.brakes_price = " + _0x30a59f[1]);
  main_browser.execute("APPS.state.chip_tune.suspension_level = " + _0x4999c5);
  main_browser.execute("APPS.state.chip_tune.suspension_price = " + _0x30a59f[2]);
  main_browser.execute("APPS.state.chip_tune.transmission_level = " + _0xb03e9d);
  main_browser.execute("APPS.state.chip_tune.transmission_price = " + _0x30a59f[3]);
});
mp.events.add("Client_RepairEngine", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerRepairEngine");
  }
});
mp.events.add("BuyChipDetails", _0x2d18ab => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerBuyChipDetail", _0x2d18ab);
  }
});
mp.events.add("Client_DownGradeChipDetail", _0x22d388 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DownGradeChipDetail", _0x22d388);
  }
});
mp.events.add("Chip_Error", _0x52fbdd => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x52fbdd + "');");
});
mp.events.add("Client_UpdateChipInfo", (_0x142e4f, _0x4a6715, _0x92e7c8 = 0, _0x5eb7f8 = []) => {
  main_browser.execute("APPS.state.car_passport.perfomance_upgrade = [" + _0x4a6715 + "]");
  main_browser.execute("APPS.state.car_passport.upgrade_cost = [" + _0x142e4f + "]");
  main_browser.execute("APPS.state.car_passport.upgrade_cost_old = [" + (_0x5eb7f8 || []) + "]");
  main_browser.execute("APPS.state.car_passport.vip_discount = " + (parseInt(_0x92e7c8) || 0));
});