const firingModes = {
  Auto: 0,
  Burst: 1,
  Single: 2
};
const firingModeNames = ["AUTO", "BURST", "SINGLE"];
const ignoredWeaponGroups = [mp.game.joaat("GROUP_UNARMED"), mp.game.joaat("GROUP_MELEE"), mp.game.joaat("GROUP_FIREEXTINGUISHER"), mp.game.joaat("GROUP_PARACHUTE"), mp.game.joaat("GROUP_STUNGUN"), mp.game.joaat("GROUP_THROWN"), mp.game.joaat("GROUP_PETROLCAN"), mp.game.joaat("GROUP_DIGISCANNER"), mp.game.joaat("GROUP_HEAVY")];
const burstFireAllowedWeapons = [mp.game.joaat("WEAPON_APPISTOL")];
const burstFireAllowedGroups = [mp.game.joaat("GROUP_SMG"), mp.game.joaat("GROUP_MG"), mp.game.joaat("GROUP_RIFLE")];
const singleFireBlacklist = [mp.game.joaat("WEAPON_STUNGUN"), mp.game.joaat("WEAPON_FLAREGUN"), mp.game.joaat("WEAPON_MARKSMANPISTOL"), mp.game.joaat("WEAPON_REVOLVER"), mp.game.joaat("WEAPON_REVOLVER_MK2"), mp.game.joaat("WEAPON_DOUBLEACTION"), mp.game.joaat("WEAPON_PUMPSHOTGUN"), mp.game.joaat("WEAPON_PUMPSHOTGUN_MK2"), mp.game.joaat("WEAPON_SAWNOFFSHOTGUN"), mp.game.joaat("WEAPON_BULLPUPSHOTGUN"), mp.game.joaat("WEAPON_MUSKET"), mp.game.joaat("WEAPON_DBSHOTGUN"), mp.game.joaat("WEAPON_SNIPERRIFLE"), mp.game.joaat("WEAPON_HEAVYSNIPER"), mp.game.joaat("WEAPON_HEAVYSNIPER_MK2")];
const isWeaponIgnored = _0x22db84 => ignoredWeaponGroups.indexOf(mp.game.weapon.getWeapontypeGroup(_0x22db84)) > -1;
const canWeaponUseBurstFire = _0xf7d99b => burstFireAllowedGroups.indexOf(mp.game.weapon.getWeapontypeGroup(_0xf7d99b)) > -1 || burstFireAllowedWeapons.indexOf(_0xf7d99b) > -1;
const canWeaponUseSingleFire = _0x147aad => singleFireBlacklist.indexOf(_0x147aad) == -1;
let currentWeapon = localplayer.weapon;
let ignoreCurrentWeapon = isWeaponIgnored(currentWeapon);
let weaponConfig = {};
let curFiringMode = 0;
let curBurstShots = 0;
mp.events.add("render", () => {
  if (loggedin && curFiringMode != 0) {
    if (localplayer.weapon != currentWeapon) {
      currentWeapon = localplayer.weapon;
      ignoreCurrentWeapon = isWeaponIgnored(currentWeapon);
      curFiringMode = weaponConfig[currentWeapon] === undefined ? firingModes.Auto : weaponConfig[currentWeapon];
      curBurstShots = 0;
    }
    if (!ignoreCurrentWeapon) {
      if (curFiringMode != firingModes.Auto) {
        if (curFiringMode == firingModes.Burst) {
          if (localplayer.isShooting()) {
            curBurstShots++;
          }
          if (curBurstShots > 0 && curBurstShots < 3) {
            mp.game.controls.setControlNormal(0, 24, 1);
          }
          if (curBurstShots == 3) {
            mp.game.player.disableFiring(false);
            if (mp.game.controls.isDisabledControlJustReleased(0, 24)) {
              curBurstShots = 0;
            }
          }
          if (localplayer.isReloading()) {
            curBurstShots = 0;
          }
        } else if (curFiringMode == firingModes.Single && mp.game.controls.isDisabledControlPressed(0, 24)) {
          mp.game.player.disableFiring(false);
        }
      }
    }
  }
});
global.ChangeFireMode = function () {
  if (isWeaponIgnored(localplayer.weapon)) {
    return;
  }
  let _0x4a622a = curFiringMode + 1;
  if (_0x4a622a > firingModes.Single) {
    _0x4a622a = firingModes.Auto;
  }
  if (_0x4a622a == firingModes.Burst) {
    if (!canWeaponUseBurstFire(localplayer.weapon)) {
      _0x4a622a = canWeaponUseSingleFire(localplayer.weapon) ? firingModes.Single : firingModes.Auto;
    }
  } else if (_0x4a622a == firingModes.Single) {
    if (!canWeaponUseSingleFire(localplayer.weapon)) {
      _0x4a622a = firingModes.Auto;
    }
  }
  if (curFiringMode != _0x4a622a) {
    curFiringMode = _0x4a622a;
    if (curFiringMode == firingModes.Auto) {
      mp.game.ui.notifications.show(language["Вы переключили режим стрельбы на автоматический"][curr_lang], false, 0, 2);
    } else if (curFiringMode == firingModes.Burst) {
      mp.game.ui.notifications.show(language["Вы переключили режим стрельбы на очередью"][curr_lang], false, 0, 2);
    } else if (curFiringMode == firingModes.Single) {
      mp.game.ui.notifications.show(language["Вы переключили режим стрельбы на одиночный"][curr_lang], false, 0, 2);
    }
    curBurstShots = 0;
    weaponConfig[localplayer.weapon] = curFiringMode;
  }
};