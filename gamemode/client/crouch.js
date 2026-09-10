mp.events.add("Client_SetCrouchedState", (_0x441d7f, _0x3e787d) => {
  if (_0x441d7f && _0x441d7f.type === "player") {
    if (_0x3e787d) {
      _0x441d7f.setMovementClipset("move_ped_crouched", 0.25);
      _0x441d7f.setStrafeClipset("move_ped_crouched_strafing");
      if (_0x441d7f == localplayer) {
        crouch_state = true;
        if (is_easter && easter_timeout == null && IsCostumeEquiped()) {
          easter_timeout = setTimeout(() => {
            if (is_easter && IsCostumeEquiped()) {
              mp.events.callRemote("Server_SetEasterConstruction");
            }
            easter_timeout = undefined;
          }, 3000);
        }
      }
    } else {
      _0x441d7f.resetMovementClipset(0);
      if (_0x441d7f == localplayer) {
        crouch_state = false;
        if (is_easter && easter_timeout != null) {
          clearTimeout(easter_timeout);
          easter_timeout = undefined;
        }
      }
      _0x441d7f.resetStrafeClipset();
      if (_0x441d7f.hasVariable("walkstyle")) {
        ChangeWalkStyle(_0x441d7f, _0x441d7f.getVariable("walkstyle"));
      }
    }
  }
});
mp.events.add("playerDeath", (_0x135d9f, _0x5e777a, _0x376e61) => {
  if (crouch_state) {
    mp.players.local.resetMovementClipset(0);
    mp.players.local.resetStrafeClipset();
    if (mp.players.local.hasVariable("walkstyle")) {
      ChangeWalkStyle(mp.players.local, mp.players.local.getVariable("walkstyle"));
    }
    crouch_state = false;
  }
});
global.crouch_state = false;
let easter_timeout;
let crouchCheck = new Date().getTime();
function IsCostumeEquiped() {
  let _0x3052bb = 0;
  if (localplayer.model != 1885233650) {
    _0x3052bb = 1;
  }
  return _0x3052bb == 0 && (localplayer.getDrawableVariation(11) == 559 || localplayer.getDrawableVariation(11) == 587) || _0x3052bb == 1 && (localplayer.getDrawableVariation(11) == 582 || localplayer.getDrawableVariation(11) == 583);
}
global.CrouchFunc = function () {
  if (!!loggedin && !chatActive && !(new Date().getTime() - crouchCheck < 500) && (GlobalCheck() != 1 || !!at_pubg) && !localplayer.isInAnyVehicle(false)) {
    if (!crouch_state && localplayer.isUsingActionMode()) {
      return mp.game.ui.notifications.show(language["Нельзя использовать в боевом режиме"][curr_lang], false, 0, 6);
    }
    if (mp.players.local.getVehicleIsTryingToEnter()) {
      return;
    }
    if (curr_lang == "ru" && playerincapture == 1) {
      return;
    }
    crouchCheck = new Date().getTime();
    mp.events.callRemote("Server_CrouchStateChange", !crouch_state);
  }
};