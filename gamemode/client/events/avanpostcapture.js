global.atCayoPericoLootbox = false;
const AVANPOST_POSITIONS = [new mp.Vector3(5152.69, -4935.777, 14.335), new mp.Vector3(5269.316, -5423.501, 65.598), new mp.Vector3(4888.953, -5460.506, 30.743)];
const EVENT_DIMENSION = 666;
const INTERVAL_TICK = 1000;
const TOTAL_EVENT_TIME = 1200000;
const TIME_FOR_EXIT = 60000;
const AVANPOST_RADIUS = 20;
let eventInterval;
let avanpostColshapes = [];
let blips = [];
let markerArr = [];
function setInteractVariable(_0x463e24) {
  if (_0x463e24 == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atCayoPericoLootbox = _0x463e24;
}
function cleanEntities() {
  blips.forEach((_0x295155, _0x33c0d2) => {
    if (_0x295155 && mp.blips.exists(_0x295155)) {
      _0x295155.destroy();
    }
  });
  blips = [];
  markerArr.forEach((_0x56132e, _0x1b3f15) => {
    if (_0x56132e && mp.markers.exists(_0x56132e)) {
      _0x56132e.destroy();
    }
  });
  markerArr = [];
  avanpostColshapes.forEach((_0x5cd7a8, _0x1ea296) => {
    if (_0x5cd7a8 && mp.colshapes.exists(_0x5cd7a8)) {
      _0x5cd7a8.destroy();
    }
  });
  avanpostColshapes = [];
}
function clearEventInterval() {
  if (eventInterval != null) {
    clearInterval(eventInterval);
    eventInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
}
mp.events.add("Client_CayoPericoLootboxInteract", _0x44ca40 => {
  setInteractVariable(_0x44ca40);
});
mp.events.add("Client_FinishCayoPericoEvent", () => {
  setInteractVariable(false);
  cleanEntities();
  clearEventInterval();
});
mp.events.add("Client_CreateCayoPericoEntites", _0x2f1423 => {
  cleanEntities();
  clearEventInterval();
  AVANPOST_POSITIONS.forEach((_0x275323, _0x56443d) => {
    if (_0x275323) {
      const _0x26d22c = mp.blips.new(866, _0x275323, {
        name: language.Аванпост[curr_lang],
        scale: 1,
        color: 1,
        drawDistance: 25,
        shortRange: false,
        dimension: 666
      });
      blips.push(_0x26d22c);
      const _0x416f09 = mp.markers.new(1, new mp.Vector3(_0x275323.x, _0x275323.y, _0x275323.z - 30), 40, {
        color: [246, 225, 0, 255],
        visible: true,
        dimension: 666
      });
      markerArr.push(_0x416f09);
      const _0x5a409a = mp.colshapes.newSphere(_0x275323.x, _0x275323.y, _0x275323.z, 20, 666);
      _0x5a409a.avanpostZoneIndex = _0x56443d + 1;
      avanpostColshapes.push(_0x5a409a);
    }
  });
  let _0x5e3fd9 = _0x2f1423;
  eventInterval = setInterval(() => {
    _0x5e3fd9 -= 1000;
    ShowDrugLabsDesign("", 0, "", 0, "", 0, "", 0, "", 0, _0x5e3fd9 / 1000, 1200, language.Аванпост[curr_lang]);
    if (_0x5e3fd9 <= 0) {
      clearEventInterval();
    }
  }, 1000);
});
mp.events.add("Client_ShowExitTimer", () => {
  let _0x1e349b = 60000;
  let _0x314e9a = setInterval(() => {
    _0x1e349b -= 1000;
    ShowDrugLabsDesign("", 0, "", 0, "", 0, "", 0, "", 0, _0x1e349b / 1000, 60, language["Выход из мероприятия"][curr_lang]);
    if (_0x1e349b <= 0) {
      clearInterval(_0x314e9a);
      _0x314e9a = undefined;
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
    }
  }, 1000);
});
mp.events.add("playerEnterColshape", _0x3ddf19 => {
  if (_0x3ddf19 && _0x3ddf19.avanpostZoneIndex) {
    if (mp.players.local.vehicle) {
      mp.events.callRemote("Server_RequestAvanpostVehicleAction");
    }
    let _0x5ef665 = 0;
    mp.players.forEachInStreamRange(_0x284d46 => {
      if (!_0x3ddf19 || !mp.colshapes.exists(_0x3ddf19)) {
        return;
      }
      if (!_0x3ddf19.avanpostZoneIndex) {
        return;
      }
      if (_0x284d46 == mp.players.local) {
        return;
      }
      if (_0x284d46.getVariable("Family") == mp.players.local.getVariable("Family")) {
        return;
      }
      const _0x33c1e8 = AVANPOST_POSITIONS[_0x3ddf19.avanpostZoneIndex - 1];
      if (!(mp.game.system.vdist(_0x33c1e8.x, _0x33c1e8.y, _0x33c1e8.z, _0x284d46.position.x, _0x284d46.position.y, _0x284d46.position.z) > 20)) {
        _0x5ef665++;
      }
    });
    ShowNotification(TranslateText("Вы находитесь в зоне аванпоста, оставайтесь в зоне до конца таймера. Количество врагов в зоне: {0}", _0x5ef665), 2);
  }
});
mp.events.add("playerExitColshape", _0x7f06bb => {
  if (_0x7f06bb && _0x7f06bb.avanpostZoneIndex) {
    ShowNotification(language["Вы вышли из зоны аванпоста"][curr_lang], 2);
  }
});