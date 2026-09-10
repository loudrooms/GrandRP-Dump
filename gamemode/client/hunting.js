const animal_models = [mp.game.joaat("a_c_boar"), mp.game.joaat("a_c_coyote"), mp.game.joaat("a_c_deer")];
mp.events.add("entityStreamIn", function (_0x377726) {
  if (_0x377726 !== null && _0x377726.type === "ped" && loggedin && animal_models.indexOf(parseInt(_0x377726.model)) != -1) {
    if (_0x377726.bChristmasDeer) {
      return;
    }
    mp.game.invoke("0xBB9CE077274F6A1B", _0x377726.handle, 10, 10);
    _0x377726.setProofs(false, true, true, true, true, true, true, true);
    _0x377726.is_deer = true;
  }
});
const gameplayCamera = mp.cameras.new("gameplay");
mp.events.add("playerWeaponShot", (_0x1e8da5, _0x1d3928) => {
  let _0x4c227a = gameplayCamera.getCoord();
  let _0x341cc5 = gameplayCamera.getDirection();
  let _0x4ba625 = new mp.Vector3(_0x341cc5.x * 50 + _0x4c227a.x, _0x341cc5.y * 50 + _0x4c227a.y, _0x341cc5.z * 50 + _0x4c227a.z);
  const _0xa6cf69 = mp.raycasting.testPointToPoint(gameplayCamera.getCoord(), _0x4ba625, localplayer, [1, 16]);
  if (_0xa6cf69) {
    if (mp.game.invoke("0x5F9532F3B5CC2551", _0xa6cf69.entity)) {
      const _0x3faaca = mp.peds.atHandle(_0xa6cf69.entity.handle);
      if (mp.peds.exists(_0x3faaca) && _0x3faaca.is_deer && !_0x3faaca.bEntityDead) {
        mp.game.invoke("0x6B76DC1F3AE6E6A3", _0x3faaca.handle, 0);
        _0x3faaca.bEntityDead = true;
        mp.events.callRemote("Server_KilledAnimalHunting", _0x3faaca, JSON.stringify(_0x1e8da5));
      }
    }
    if (typeof _0xa6cf69.entity == "number" && _0xa6cf69.entity !== 0 && mp.game.entity.doesExist(_0xa6cf69.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0xa6cf69.entity);
    }
  }
});
global.at_animal_corpse = false;
mp.events.add("Client_AnimalCorpseInterct", _0x47e0bf => {
  if (_0x47e0bf == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_animal_corpse = _0x47e0bf;
});
global.at_hunting_trap = false;
mp.events.add("Client_HuntingTrapInteract", _0x143129 => {
  main_browser.execute("APPS.state.hud.interact = " + _0x143129 + ";");
  if (_0x143129) {
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
  at_hunting_trap = _0x143129;
});
mp.events.add("Client_HuntingTrapSnapNotification", _0x27d36b => {
  global.ShowStaticNotification({
    title: language["Ваш капкан <b>сработал</b>, заберите добычу"][curr_lang],
    hasClose: true,
    timeToEnd: 0,
    items: [{
      item_id: 2417,
      count: 1,
      rarity: 0
    }],
    buttons: [{
      text: language["Проложить маршрут"][curr_lang],
      iconLeft: "gps",
      color: "yellow",
      callback: () => {
        SetGPSLocation(_0x27d36b.x, _0x27d36b.y, _0x27d36b.z, true);
      },
      closeAfterClick: true
    }]
  });
});