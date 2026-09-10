let nowplaying;
let disabled_radio_default = false;
let RadioInterval = null;
function radio_sync(_0x44e8e6) {
  if (localplayer.vehicle) {
    if (_0x44e8e6 != localplayer.vehicle) {
      if (RadioInterval != null) {
        clearInterval(RadioInterval);
      }
      RadioInterval = null;
      disabled_radio_default = false;
      return;
    }
    let _0x5ae07d = _0x44e8e6.radio;
    if (localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) === localplayer.handle) {
      mp.game.audio.setUserRadioControlEnabled(true);
      nowplaying = mp.game.invoke("0xE8AF77C4C06ADC93");
      if (_0x5ae07d != nowplaying) {
        if (nowplaying != 255) {
          if (disabled_radio_default == 0) {
            disabled_radio_default = true;
            mp.game.audio.setRadioToStationName("OFF");
            mp.events.callRemote("radiochange", 255, _0x44e8e6);
          } else {
            mp.events.callRemote("radiochange", nowplaying, _0x44e8e6);
          }
        } else {
          mp.events.callRemote("radiochange", 255, _0x44e8e6);
        }
      } else if (_0x5ae07d == nowplaying && disabled_radio_default == 0 && _0x5ae07d != 255) {
        disabled_radio_default = true;
        mp.game.audio.setRadioToStationName("OFF");
        mp.events.callRemote("radiochange", 255, _0x44e8e6);
      }
    } else {
      mp.game.audio.setUserRadioControlEnabled(false);
      if (_0x5ae07d == 255) {
        mp.game.audio.setRadioToStationName("OFF");
      } else {
        mp.game.invoke("0xF7F26C6E9CC9EBB8", true);
        mp.game.invoke("0xA619B168B8A8570F", _0x5ae07d);
      }
    }
  }
}
mp.events.add("FixRadioSync", _0x48e153 => {
  disabled_radio_default = false;
  if (RadioInterval != null) {
    clearInterval(RadioInterval);
  }
  RadioInterval = setInterval(function () {
    radio_sync(_0x48e153);
  }, 1000);
});
mp.events.add("playerEnterVehicle", (_0x24ad52, _0x35cf79) => {
  if (RadioInterval != null) {
    clearInterval(RadioInterval);
  }
  disabled_radio_default = false;
  RadioInterval = setInterval(function () {
    radio_sync(_0x24ad52);
  }, 1000);
});
mp.events.add("Client_ChangeRadioState", (_0x40e938, _0x11c0d2) => {
  if (_0x40e938 && mp.vehicles.exists(_0x40e938)) {
    _0x40e938.radio = _0x11c0d2;
  }
});
mp.events.add("Client_ChangeRadioVehicleState", _0x481a19 => {
  if (localplayer.vehicle) {
    localplayer.vehicle.radio = _0x481a19;
  }
});
mp.events.add("playerLeaveVehicle", _0xb540d0 => {
  try {
    if (RadioInterval != null) {
      clearInterval(RadioInterval);
      RadioInterval = null;
      disabled_radio_default = false;
    }
  } catch (_0x46e91f) {}
});