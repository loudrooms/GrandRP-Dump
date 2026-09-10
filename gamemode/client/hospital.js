let blipinfo;
let driverblip;
let hospital_colshape_exit;
let hospital_minimap_blip;
let hospital_unlaod_colshape;
let hospital_unlaod_marker;
let hospital_unlaod_blips;
global.HospOpened = false;
mp.events.add("HospitalShow", _0x1e9953 => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x1e6bfc = (_0x394eed, _0x655de8) => _0x655de8 && typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x394eed) : _0x394eed;
  let _0x26e2ce = [];
  let _0x2335ca = "";
  for (let _0x9714f3 = 0; _0x9714f3 < _0x1e9953.length; _0x9714f3++) {
    let _0x39d21c = mp.game.pathfind.calculateTravelDistanceBetweenPoints(_0x1e9953[_0x9714f3].position.x, _0x1e9953[_0x9714f3].position.y, _0x1e9953[_0x9714f3].position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
    if (_0x39d21c >= 10000) {
      _0x39d21c = mp.game.system.vdist(_0x1e9953[_0x9714f3].x, _0x1e9953[_0x9714f3].y, _0x1e9953[_0x9714f3].z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
    }
    const _0x3c2431 = _0x1e6bfc(_0x1e9953[_0x9714f3].discription, _0x1e9953[_0x9714f3].resolve_on_client);
    _0x2335ca = "{'pid':" + _0x1e9953[_0x9714f3].pid + ",'Name':'" + _0x1e9953[_0x9714f3].name + "','Status':'" + _0x3c2431.replace(/'/g, "\\'") + "','Distance':" + Math.round(_0x39d21c) + ",'is_ghetto':" + _0x1e9953[_0x9714f3].is_ghetto + "}";
    _0x26e2ce.push(_0x2335ca);
  }
  HospOpened = true;
  const _0x4f6894 = "{\"items\":[" + _0x26e2ce + "],\"show\":true}";
  main_browser.execute("APPS.state.work_medic_list = " + _0x4f6894);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  mp.events.callRemote("Hospital_Orders", 1);
});
mp.events.add("HospitalUpdate", _0x19ef8c => {
  const _0x50a69 = [];
  const _0x2b7468 = (_0x36503c, _0x534544) => _0x534544 && typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x36503c) : _0x36503c;
  for (let _0x5002ea = 0; _0x5002ea < _0x19ef8c.length; _0x5002ea++) {
    let _0x29a7e8 = mp.game.pathfind.calculateTravelDistanceBetweenPoints(_0x19ef8c[_0x5002ea].position.x, _0x19ef8c[_0x5002ea].position.y, _0x19ef8c[_0x5002ea].position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
    if (_0x29a7e8 >= 10000) {
      _0x29a7e8 = mp.game.system.vdist(_0x19ef8c[_0x5002ea].x, _0x19ef8c[_0x5002ea].y, _0x19ef8c[_0x5002ea].z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
    }
    _0x50a69.push({
      pid: _0x19ef8c[_0x5002ea].pid,
      Name: _0x19ef8c[_0x5002ea].name,
      Status: _0x2b7468(_0x19ef8c[_0x5002ea].discription, _0x19ef8c[_0x5002ea].resolve_on_client),
      Distance: Math.round(_0x29a7e8),
      is_ghetto: _0x19ef8c[_0x5002ea].is_ghetto
    });
  }
  main_browser.execute("APPS.state.work_medic_list.items = " + JSON.stringify(_0x50a69));
});
mp.events.add("Client_NewHospitalOrderNotify", (_0x5d2faa, _0x1c84f7 = false) => {
  const _0x2a0632 = _0x1c84f7 && typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x5d2faa) : _0x5d2faa;
  global.ShowStaticNotification({
    type: "ems",
    title: language["Новый вызов"][curr_lang],
    text: escapeHtml(_0x2a0632),
    hasClose: true,
    timeToEnd: 10,
    buttons: [{
      text: language["Открыть КПК"][curr_lang],
      iconLeft: "mobile",
      color: "white",
      callback: () => {
        mp.events.callRemote("HospitalOrdersCall");
      },
      closeAfterClick: true
    }]
  });
});
global.CloseHospitalList = function () {
  if (HospOpened) {
    mp.events.call("Enablechat");
    main_browser.execute("APPS.state.work_medic_list.show = false;");
    HospOpened = false;
    mp.gui.cursor.show(false, false);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.events.callRemote("Hospital_Orders", 0);
  }
};
mp.events.add("HospitalCheckButton", _0x367a3f => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("HospitalAnswer", _0x367a3f);
    CloseHospitalList();
  }
});
mp.events.add("Client_HospitalCheckButtonCancel", _0x1825e1 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_HospitalDeclineAnswer", _0x1825e1);
    CloseHospitalList();
  }
});
mp.events.add("HospitalBlipCreate", _0x562782 => {
  if (blipinfo) {
    blipinfo.destroy();
    blipinfo = null;
  }
  blipinfo = mp.blips.new(1, _0x562782, {
    name: language["Ваш пациент"][curr_lang],
    color: 83
  });
  blipinfo.setRoute(true);
});
mp.events.add("HospitalDriverBlipCreate", _0xcd193e => {
  if (driverblip) {
    driverblip.destroy();
    driverblip = null;
  }
  driverblip = mp.blips.new(637, _0xcd193e, {
    name: language["Ваша скорая"][curr_lang],
    color: 1
  });
});
mp.events.add("HospitalDriverBlipDestroy", () => {
  if (driverblip != null) {
    driverblip.destroy();
    driverblip = null;
  }
});
mp.events.add("HospitalBlipDestroy", () => {
  if (blipinfo) {
    blipinfo.destroy();
    blipinfo = null;
  }
});
mp.events.add("playerEnterColshape", _0x19370a => {
  if (mp.colshapes.exists(_0x19370a) && _0x19370a.is_enter_hospital == 1) {
    if (hospital_colshape_exit && mp.colshapes.exists(hospital_colshape_exit)) {
      hospital_colshape_exit.destroy();
      hospital_colshape_exit = undefined;
    }
    mp.events.callRemote("Server_EnterHospitalCall");
  } else if (mp.colshapes.exists(_0x19370a) && _0x19370a.is_hospital_unload == 1) {
    mp.events.callRemote("Server_EnterHospitalUnloadZone");
  }
});
mp.events.add("playerExitColshape", _0x45821f => {
  if (mp.colshapes.exists(_0x45821f) && _0x45821f.is_exit_hospital == 1) {
    if (hospital_colshape_exit && mp.colshapes.exists(hospital_colshape_exit)) {
      hospital_colshape_exit.destroy();
      hospital_colshape_exit = undefined;
      mp.events.callRemote("Server_ExitHospitalCall");
    }
    if (hospital_minimap_blip != null) {
      mp.game.ui.removeBlip(hospital_minimap_blip);
      hospital_minimap_blip = undefined;
    }
  }
});
mp.events.add("Client_HospitalColshapeCreate", (_0xbf75ae, _0x3c25e1 = 1, _0x37cff5 = 0) => {
  if (hospital_colshape_exit && mp.colshapes.exists(hospital_colshape_exit)) {
    hospital_colshape_exit.destroy();
    hospital_colshape_exit = undefined;
  }
  if (_0x3c25e1 == 1) {
    hospital_colshape_exit = mp.colshapes.newCircle(_0xbf75ae.x, _0xbf75ae.y, 20, localplayer.dimension);
    hospital_colshape_exit.is_exit_hospital = true;
    hospital_minimap_blip = mp.game.ui.addBlipForRadius(_0xbf75ae.x, _0xbf75ae.y, _0xbf75ae.z, 20);
    mp.game.ui.setBlipSprite(hospital_minimap_blip, zone_blips);
    mp.game.ui.setBlipAlpha(hospital_minimap_blip, 100);
    mp.game.ui.setBlipColour(hospital_minimap_blip, zone_color);
  } else if (_0x3c25e1 == 2) {
    hospital_colshape_exit = mp.colshapes.newCircle(_0xbf75ae.x, _0xbf75ae.y, 20, _0x37cff5);
    hospital_colshape_exit.is_enter_hospital = true;
  }
});
mp.events.add("Client_HospitalColshapeDelete", () => {
  if (hospital_colshape_exit && mp.colshapes.exists(hospital_colshape_exit)) {
    const _0x307ba8 = hospital_colshape_exit;
    setTimeout(function () {
      if (_0x307ba8 && mp.colshapes.exists(_0x307ba8)) {
        _0x307ba8.destroy();
      }
    }, 100);
    hospital_colshape_exit = undefined;
    if (hospital_minimap_blip != null) {
      mp.game.ui.removeBlip(hospital_minimap_blip);
      hospital_minimap_blip = undefined;
    }
  }
});
global.human_labs_box_in_hand = false;
mp.events.add("Client_Human_Labs_In_Hands", _0x13d7de => {
  human_labs_box_in_hand = _0x13d7de;
});
mp.events.add("Client_LoadHospitalUnloadZone", _0x4c4821 => {
  if (hospital_unlaod_colshape) {
    hospital_unlaod_colshape.destroy();
    hospital_unlaod_colshape = undefined;
  }
  if (hospital_unlaod_marker) {
    hospital_unlaod_marker.destroy();
    hospital_unlaod_marker = undefined;
  }
  if (hospital_unlaod_blips) {
    hospital_unlaod_blips.destroy();
    hospital_unlaod_blips = undefined;
  }
  hospital_unlaod_marker = mp.markers.new(1, new mp.Vector3(_0x4c4821.x, _0x4c4821.y, _0x4c4821.z - 1), 5, {
    rotation: new mp.Vector3(0, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: 0
  });
  hospital_unlaod_colshape = mp.colshapes.newCircle(_0x4c4821.x, _0x4c4821.y, 5);
  hospital_unlaod_colshape.is_hospital_unload = true;
  hospital_unlaod_blips = mp.blips.new(1, new mp.Vector3(_0x4c4821.x, _0x4c4821.y, _0x4c4821.z), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 1,
    dimension: 0
  });
  hospital_unlaod_blips.setRoute(true);
});
mp.events.add("Client_DeleteHospitalUnloadZone", () => {
  if (hospital_unlaod_colshape) {
    hospital_unlaod_colshape.destroy();
    hospital_unlaod_colshape = undefined;
  }
  if (hospital_unlaod_marker) {
    hospital_unlaod_marker.destroy();
    hospital_unlaod_marker = undefined;
  }
  if (hospital_unlaod_blips) {
    hospital_unlaod_blips.destroy();
    hospital_unlaod_blips = undefined;
  }
});
mp.events.add("Client_Hospital_Event_Counter", _0x5b36dd => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language.Загружено[curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["медикаментов:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = \"" + _0x5b36dd + "\";");
  main_browser.execute("APPS.state.hud.job_hud = 111;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("Client_Hospital_Event_Counter_Destroy", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});