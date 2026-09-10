global.DrugLabsOpened = false;
mp.events.add("Client_ShowDrugLabsInformation", (_0x3289b1, _0x4fbfce, _0x3f76ca, _0x27a1ec, _0x5011a1) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x2b7c20 = "{\"type\":" + _0x3289b1 + ",\"fulltime\":'" + _0x4fbfce + "',\"is_owner\":" + _0x3f76ca + ",\"time\":" + _0x27a1ec + ",\"status\":" + _0x5011a1 + ",\"show\":true}";
  main_browser.execute("APPS.state.drug_labs = " + _0x2b7c20);
  DrugLabsOpened = true;
  ChangeHudState(false);
  mp.gui.chat.activate(false);
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseDrugLabsInformation = function () {
  if (DrugLabsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.drug_labs.show = false;");
    DrugLabsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.at_drug_labs = false;
mp.events.add("Client_DrugLabsInteract", _0x81a734 => {
  at_drug_labs = _0x81a734;
  if (_0x81a734 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
global.at_buy_drug_labs = false;
mp.events.add("Client_DrugLabsBuyInteract", _0x199697 => {
  at_buy_drug_labs = _0x199697;
  if (_0x199697 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
});
mp.events.add("Client_DrugLabsHide", () => {
  CloseDrugLabsInformation();
});
mp.events.add("Client_UpdateDrugLabsDesign", (_0x35f2ed, _0x235f13, _0x2afe99) => {
  if (DrugLabsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.drug_labs.fulltime = '" + _0x35f2ed + "'");
    main_browser.execute("APPS.state.drug_labs.time = " + _0x235f13);
    main_browser.execute("APPS.state.drug_labs.status = " + _0x2afe99 + ";");
  }
});
mp.events.add("Client_SetMaterialDrugLabs", () => {
  if (DrugLabsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetMaterialDrugLabs");
    }
  }
});
mp.events.add("Client_GetProductDrugLabs", () => {
  if (DrugLabsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetProductDrugLabs");
    }
  }
});
mp.events.add("Client_AttackDrugLabsDrugLabs", () => {
  if (DrugLabsOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AttackDrugLabsDrugLabs");
    }
  }
});
let drug_timeout = null;
mp.events.add("Client_UpdateDrugStats", (_0x7affb5, _0x1260bf, _0x1916d8, _0x2a212f, _0x114037, _0x286182, _0x140713 = "Нарколаборатория", _0x30a491 = "", _0x2e531b = 0, _0x5b6be1 = "", _0x432bf1 = 0, _0x89f112 = "", _0x48aeab = 0, _0x57d3d5 = 2000, _0xdf7898 = "", _0x7c438f = 0, _0x59bad7 = "", _0x54b494 = 0, _0x1ecd63 = "", _0x26dc60 = 0, _0xa56cb0 = "", _0x58fb48 = 0) => {
  if (!loggedin) {
    return;
  }
  const _0x3f43eb = _0x332e46 => _0x332e46 != null && _0x332e46 !== "" && typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x332e46) : _0x332e46;
  ShowDrugLabsDesign(_0x3f43eb(_0x7affb5), _0x1260bf, _0x3f43eb(_0x1916d8), _0x2a212f, _0x3f43eb(_0x30a491), _0x2e531b, _0x3f43eb(_0x5b6be1), _0x432bf1, _0x3f43eb(_0x89f112), _0x48aeab, _0x114037, _0x286182, _0x3f43eb(_0x140713), _0x3f43eb(_0xdf7898), _0x7c438f, _0x3f43eb(_0x59bad7), _0x54b494, _0x3f43eb(_0x1ecd63), _0x26dc60, _0x3f43eb(_0xa56cb0), _0x58fb48);
  if (drug_timeout != null) {
    clearTimeout(drug_timeout);
    drug_timeout = null;
  }
  drug_timeout = setTimeout(function () {
    main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    drug_timeout = null;
  }, _0x57d3d5);
});
mp.events.add("Client_HideDrugStats", () => {
  if (drug_timeout != null) {
    clearTimeout(drug_timeout);
    drug_timeout = null;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});
let drugs_interval;
let drug_labs_blips = null;
mp.events.add("Client_SetDrugLabsMinimapBlips", (_0x2f596e, _0x4a038e, _0x42f7e5, _0x23fbaf) => {
  drug_labs_blips ||= mp.blips.new(zone_blips, new mp.Vector3(_0x2f596e, _0x4a038e, 0), {
    radius: parseFloat(_0x23fbaf),
    alpha: parseFloat(100),
    color: parseFloat(zone_color),
    dimension: -1
  });
});
mp.events.add("Client_HideDrugLabsBLips", () => {
  if (drug_labs_blips) {
    drug_labs_blips.destroy();
    drug_labs_blips = null;
  }
});
mp.events.add("Client_DrugLabsStartIntervalCounter", (_0x2d1c2a, _0x7c91f7, _0x168034, _0x30b26d, _0x509ad2, _0x42e0a4, _0x37c237, _0x4b7ae4) => {
  if (drugs_interval != null) {
    clearInterval(drugs_interval);
    drugs_interval = undefined;
  }
  drugs_interval = setInterval(function () {
    if (_0x168034 > 0) {
      _0x168034--;
    }
    if (_0x168034 == 10) {
      PlayAudioSound("Timer_10s", "DLC_HALLOWEEN_FVJ_Sounds");
    }
    let _0x30eef0 = [0, 0];
    mp.players.forEachInRange(_0x509ad2, _0x42e0a4, _0x342fcf => {
      if (_0x342fcf.family == _0x2d1c2a && _0x342fcf.dimension == localplayer.dimension) {
        if (_0x342fcf.getAlpha() != 0) {
          _0x30eef0[0]++;
        }
      } else if (_0x342fcf.family == _0x7c91f7 && _0x342fcf.dimension == localplayer.dimension && _0x342fcf.getAlpha() != 0) {
        _0x30eef0[1]++;
      }
    });
    ShowDrugLabsDesign(_0x37c237, _0x30eef0[0], _0x4b7ae4, _0x30eef0[1], "", 0, "", 0, "", 0, _0x168034, _0x30b26d, language.Нарколаборатория[curr_lang]);
    if (_0x168034 <= 0 && (_0x30eef0[0] == 0 || _0x30eef0[1] == 0)) {
      if (drugs_interval != null) {
        clearInterval(drugs_interval);
        drugs_interval = undefined;
      }
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("Client_ClearDrugLabsIntervalCounter", () => {
  if (drugs_interval != null) {
    clearInterval(drugs_interval);
    drugs_interval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
});