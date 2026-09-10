const electro_checks = [[-376.05780029296875, -2174.9443359375, 10.318052291870117], [-376.0802307128906, -2182.914794921875, 10.318047523498535], [-353.373046875, -2184.317626953125, 10.318214416503906], [-353.2919616699219, -2176.809326171875, 10.318221092224121], [1116.3087158203125, -2488.309814453125, 33.36079025268555], [1122.2958984375, -2486.77587890625, 33.361549377441406], [1123.9794921875, -2493.675048828125, 33.361019134521484], [1118.0322265625, -2495.114501953125, 33.36082077026367], [-288.9684143066406, 6020.03662109375, 31.53380584716797], [-292.7679443359375, 6023.74560546875, 31.52930450439453], [2595.48681640625, 5059.36083984375, 44.90926742553711], [2589.6357421875, 5057.2255859375, 44.91932678222656], [2043.807373046875, 3681.521484375, 34.58795166015625], [2046.5792236328125, 3675.96240234375, 34.58803176879883], [2059.35693359375, 3683.623291015625, 34.587852478027344], [2056.361328125, 3688.91015625, 34.587955474853516], [660.9540405273438, 1283.921630859375, 360.296142578125]];
const electro_checks_first = [[692.20458984375, 160.5480194091797, 80.9403076171875], [697.9287109375, 158.47146606445312, 80.9403076171875], [686.9017333984375, 145.05589294433594, 80.93781280517578], [692.6419677734375, 143.15919494628906, 80.93781280517578], [670.2244873046875, 128.01760864257812, 80.9502182006836], [664.3685302734375, 129.7693634033203, 80.95022583007812], [664.6326904296875, 112.31425476074219, 80.9229507446289], [658.8030395507812, 114.22270202636719, 80.9229507446289], [676.9105834960938, 119.62029266357422, 80.93781280517578], [682.558837890625, 117.5330810546875, 80.93780517578125], [703.1701049804688, 119.8760986328125, 80.95536804199219], [708.8974609375, 117.8291244506836, 80.95631408691406], [703.2794189453125, 102.37040710449219, 80.75454711914062], [697.6381225585938, 104.56416320800781, 80.75455474853516]];
let electro_marker;
let electro_colshape;
let elecstate;
let electro_colshape_exit;
let electro_contract_inverval;
let electroblip = null;
mp.events.add("ElectroBlipCreate", (_0x12a162, _0x341c2d) => {
  if (electroblip != null) {
    electroblip.destroy();
    electroblip = null;
  }
  let _0x2bb78d = new Array(3);
  if (_0x341c2d == 2) {
    _0x2bb78d[0] = electro_checks[_0x12a162][0];
    _0x2bb78d[1] = electro_checks[_0x12a162][1];
    _0x2bb78d[2] = electro_checks[_0x12a162][2];
  } else if (_0x341c2d == 1) {
    _0x2bb78d[0] = electro_checks_first[_0x12a162][0];
    _0x2bb78d[1] = electro_checks_first[_0x12a162][1];
    _0x2bb78d[2] = electro_checks_first[_0x12a162][2];
  }
  if (electroblip == null) {
    electroblip = mp.blips.new(1, new mp.Vector3(_0x2bb78d[0], _0x2bb78d[1], _0x2bb78d[2]), {
      color: 46,
      dimension: localplayer.dimension
    });
    electroblip.setRoute(true);
  }
  if (electro_marker) {
    electro_marker.destroy();
    electro_marker = undefined;
  }
  if (electro_colshape) {
    electro_colshape.destroy();
    electro_colshape = undefined;
  }
  electro_marker = mp.markers.new(2, new mp.Vector3(_0x2bb78d[0], _0x2bb78d[1], _0x2bb78d[2]), 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: localplayer.dimension
  });
  electro_colshape = mp.colshapes.newSphere(_0x2bb78d[0], _0x2bb78d[1], _0x2bb78d[2], 2, localplayer.dimension);
  electro_colshape.is_electro = true;
  electro_colshape.state = _0x341c2d;
});
global.at_electro_job = 0;
mp.events.add("playerEnterColshape", _0x1d82be => {
  if (mp.colshapes.exists(_0x1d82be) && _0x1d82be.is_electro == 1) {
    at_electro_job = _0x1d82be.state;
    action_timer = new Date().getTime();
    main_browser.execute("APPS.state.hud.interact = true;");
    return;
  }
});
mp.events.add("playerExitColshape", _0x5402ff => {
  if (mp.colshapes.exists(_0x5402ff) && _0x5402ff.is_exit_electro == 1) {
    mp.events.callRemote("Server_ExitElectroJob");
  }
  if (mp.colshapes.exists(_0x5402ff) && _0x5402ff.is_electro == 1 && _0x5402ff.state == 1) {
    at_electro_job = 0;
    action_timer = new Date().getTime();
    main_browser.execute("APPS.state.hud.interact = false;");
    main_browser.execute("APPS.state.hud.long_interact = false;");
    mp.events.callRemote("Server_ElectroStopAnim");
  }
});
mp.events.add("ElectroArendBlip", () => {
  if (electroblip != null) {
    electroblip.destroy();
    electroblip = null;
  }
  if (electroblip == null) {
    electroblip = mp.blips.new(1, new mp.Vector3(673.256, 194.266, 92.868), {
      color: 46
    });
    electroblip.setRoute(true);
  }
});
global.ElectroRepairBrowserOpened = false;
mp.events.add("ElectroRepairBrowser", _0x235c35 => {
  mp.events.call("Disablechat");
  elecstate = _0x235c35;
  if (_0x235c35 == 1) {
    main_browser.execute("APPS.state.electric_3 = {\"show\":true}");
  } else {
    main_browser.execute("APPS.state.electric_5 = {\"show\":true}");
  }
  ElectroRepairBrowserOpened = true;
  mp.gui.cursor.show(true, true);
});
mp.events.add("ElectroRepairBrowserDone", () => {
  setTimeout(() => {
    main_browser.execute("APPS.state.electric_3.show = false;");
    main_browser.execute("APPS.state.electric_5.show = false;");
    ElectroRepairBrowserOpened = false;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("ElectroRepairServer", elecstate);
  }, 1300);
});
mp.events.add("ElectroRepairBrowserFail", () => {
  mp.events.call("Enablechat");
  main_browser.execute("APPS.state.electric_3.show = false;");
  main_browser.execute("APPS.state.electric_5.show = false;");
  ElectroRepairBrowserOpened = false;
  mp.gui.cursor.show(false, false);
  mp.events.callRemote("ElectroRepairServer", 3);
});
global.ElectroJobOpen = false;
mp.events.add("ElectroJobBrowser", (_0x1ac1ae, _0x4e5615, _0x4bc281, _0x3a3763, _0xa2d98f) => {
  ElectroJobOpen = true;
  const _0x42fb7e = "{\"job\":" + _0x1ac1ae + ",\"master\":" + _0x4e5615 + ",\"ElectroCount\":" + _0x4bc281 + ",\"price1\":" + _0x3a3763 + ",\"price2\":" + _0xa2d98f + ",\"show\":true}";
  main_browser.execute("APPS.state.work_electric = " + _0x42fb7e);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseElectroJob = function () {
  if (ElectroJobOpen) {
    mp.events.call("Enablechat");
    ElectroJobOpen = false;
    main_browser.execute("APPS.state.work_electric.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
  }
};
mp.events.add("ElectroJobChangeButton", _0x2a7eca => {
  main_browser.execute("APPS.state.work_electric.job = " + parseInt(_0x2a7eca));
});
mp.events.add("ElectroJobEvent", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ElectroJobEventServer");
  }
});
mp.events.add("ElectroBlipDestroy", () => {
  if (electroblip != null) {
    electroblip.destroy();
    electroblip = null;
  }
  if (electro_marker) {
    electro_marker.destroy();
    electro_marker = undefined;
  }
  if (electro_colshape) {
    electro_colshape.destroy();
    electro_colshape = undefined;
  }
});
mp.events.add("ElectroCounterBrowser", () => {
  main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Починено электрощитов"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.job_hud_small_text = \"" + language["штук:"][curr_lang] + "\";");
  main_browser.execute("APPS.state.hud.hud_job_count = 0;");
  main_browser.execute("APPS.state.hud.job_hud = 2;");
  main_browser.execute("APPS.state.hud.job_hud_show = true;");
});
mp.events.add("ElectroCounterUpdate", _0x2f7b0a => {
  main_browser.execute("APPS.state.hud.hud_job_count = " + _0x2f7b0a + ";");
});
mp.events.add("ElectroCounterBrowserDestroy", () => {
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
  main_browser.execute("APPS.state.job.job = 0;");
});
mp.events.add("Client_LeaveElectroJob", (_0x397657 = false) => {
  main_browser.execute("APPS.state.job.job = 0;");
  if (_0x397657) {
    setTimeout(() => {
      const _0x12b632 = language["Арендуйте скутер и отправляйтесь на нём к почте"][curr_lang];
      showFocusHints([{
        element: "rent-scooter-button",
        text: _0x12b632,
        infoPosition: ["right"]
      }]);
    }, 1000);
  }
});
global.ElectroContractOpened = false;
mp.events.add("ElectroContractsShow", (_0x4187d7, _0xb4e190, _0x29d355) => {
  mp.events.call("Disablechat");
  let _0x20b492 = [];
  let _0x1fa03f = "";
  for (let _0x11118c = 0; _0x11118c < _0x4187d7.length; _0x11118c++) {
    _0x1fa03f = mp.storage.data.friends[_0x4187d7[_0x11118c]] != null || spose_name === _0x4187d7[_0x11118c] ? "{'Name':'" + _0x4187d7[_0x11118c].replace("_", " ") + "','Count':" + _0xb4e190[_0x11118c] + ",'Time':'" + Math.round(_0x29d355[_0x11118c] / 60) + "'}" : "{'Name':'" + language.Неизвестный[curr_lang] + "','Count':" + _0xb4e190[_0x11118c] + ",'Time':'" + Math.round(_0x29d355[_0x11118c] / 60) + "'}";
    _0x20b492.push(_0x1fa03f);
  }
  ElectroContractOpened = true;
  const _0x3add6e = "{\"items\":[" + _0x20b492 + "],\"show\":true}";
  main_browser.execute("APPS.state.work_electric_list = " + _0x3add6e);
  mp.gui.cursor.show(true, true);
});
global.CloseElectroContract = function () {
  mp.events.call("Enablechat");
  main_browser.execute("APPS.state.work_electric_list.show = false;");
  ElectroContractOpened = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
};
mp.events.add("Client_CreateElectroExit", () => {
  if (electro_colshape_exit) {
    electro_colshape_exit.destroy();
    electro_colshape_exit = undefined;
  }
  electro_colshape_exit = mp.colshapes.newSphere(705.1805419921875, 139.85684204101562, 80.75448608398438, 75);
  electro_colshape_exit.is_exit_electro = true;
});
mp.events.add("Client_DeleteElectroExit", () => {
  if (electro_colshape_exit) {
    electro_colshape_exit.destroy();
    electro_colshape_exit = undefined;
  }
});
global.can_call_electro_contracts = false;
mp.events.add("CanCallElectroContracts", _0x5ca85e => {
  can_call_electro_contracts = _0x5ca85e;
});
mp.events.add("Client_StartElectroContract", _0x5d5bbe => {
  electro_contract_inverval ||= setInterval(function () {
    if (_0x5d5bbe > 0) {
      _0x5d5bbe--;
    } else if (_0x5d5bbe <= 0) {
      if (electro_contract_inverval != null) {
        clearInterval(electro_contract_inverval);
      }
      electro_contract_inverval = undefined;
      mp.events.callRemote("Server_CancelElectroContract");
    }
  }, 1000);
});
mp.events.add("Client_CancelElectroContract", () => {
  if (electro_contract_inverval != null) {
    clearInterval(electro_contract_inverval);
    electro_contract_inverval = undefined;
  }
});