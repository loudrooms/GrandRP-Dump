'use strict';

const AC = require("../core.js");
const SUPPRESS_MS = 4000;
const RANGE = 56;
const FX_WEAPONS = ["WEAPON_RPG", "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_PROXMINE", "WEAPON_PIPEBOMB", "WEAPON_MOLOTOV", "WEAPON_BZGAS", "WEAPON_SMOKEGRENADE", "WEAPON_FLARE", "WEAPON_FLAREGUN", "WEAPON_FIREWORK", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_HOMINGLAUNCHER", "WEAPON_COMPACTLAUNCHER", "WEAPON_EMPLAUNCHER", "WEAPON_STINGER", "VEHICLE_WEAPON_TANK", "VEHICLE_WEAPON_SPACE_ROCKET", "VEHICLE_WEAPON_PLANE_ROCKET", "VEHICLE_WEAPON_PLAYER_HUNTER", "VEHICLE_WEAPON_PLAYER_LAZER", "VEHICLE_WEAPON_RUINER_ROCKET", "VEHICLE_WEAPON_HUNTER_MISSILE", "VEHICLE_WEAPON_APC_MISSILE", "VEHICLE_WEAPON_OPPRESSOR2_MISSILE", "VEHICLE_WEAPON_RCTANK_ROCKET", "VEHICLE_WEAPON_SCRAMJET_MISSILE", "VEHICLE_WEAPON_AKULA_MISSILE", "VEHICLE_WEAPON_STRIKEFORCE_MISSILE", "VEHICLE_WEAPON_DUNE_GRENADELAUNCHER"];
const AMMO_FOR_MODELS = ["AMMO_GRENADE", "AMMO_GRENADELAUNCHER", "AMMO_STICKYBOMB", "AMMO_MOLOTOV", "AMMO_PIPEBOMB", "AMMO_PROXMINE", "AMMO_BZGAS", "AMMO_SMOKEGRENADE", "AMMO_FLARE", "AMMO_RPG", "AMMO_HOMINGLAUNCHER", "AMMO_FIREWORK"];
const PROJECTILE_MODELS = ["w_lr_rpg_rocket", "w_lr_homing_rocket", "w_ex_grenadefrag", "w_ex_molotov", "w_ex_pe", "w_ex_pipebomb", "w_ex_apmine", "w_lr_firework_rocket", "w_ex_grenadesmoke", "w_lr_40mm", "w_pi_flaregun_shell", "prop_ld_grenade"];
const fxHashes = FX_WEAPONS.map(_0x4db7ff => mp.game.joaat(_0x4db7ff));
const projectileModels = new Set(PROJECTILE_MODELS.map(_0x14e14b => mp.game.joaat(_0x14e14b)));
function isValidWeapon(_0xd96cdb) {
  if (!_0xd96cdb) {
    return false;
  }
  try {
    if (typeof IsWeaponValid == "function") {
      return !!IsWeaponValid(_0xd96cdb);
    }
  } catch (_0x304a0a) {
    console.log(_0x304a0a);
    return false;
  }
  return true;
}
for (let e = 0; e < fxHashes.length; e++) {
  if (isValidWeapon(fxHashes[e])) {
    try {
      const t = (AC.ntv("GetWeapontypeModel", fxHashes[e]) || 0) >>> 0;
      if (t) {
        projectileModels.add(t);
      }
    } catch (_0x471a48) {
      console.log(_0x471a48);
    }
  }
}
const ammoHashes = AMMO_FOR_MODELS.map(_0x1163e6 => mp.game.joaat(_0x1163e6));
for (let e = 0; e < ammoHashes.length; e++) {
  try {
    const t = (AC.ntv("GetWeapontypeModel", ammoHashes[e]) || 0) >>> 0;
    if (t) {
      projectileModels.add(t);
    }
  } catch (_0x2ca393) {
    console.log(_0x2ca393);
  }
}
let until = 0;
let posX = 0;
let posY = 0;
let posZ = 0;
let lastFireId = 0;
let lastNetId = 0;
function enabled() {
  return AC.config.enabled !== false && AC.config.modules.weaponfx !== false;
}
function exists(_0x80334f) {
  if (!_0x80334f) {
    return false;
  }
  try {
    if (typeof DoesEntityExist == "function") {
      return !!DoesEntityExist(_0x80334f);
    }
  } catch (_0x3486e8) {
    console.log(_0x3486e8);
  }
  return true;
}
function coordsOf(_0x2cf63a) {
  if (!_0x2cf63a) {
    return null;
  }
  try {
    const _0x57b6fe = AC.ntv("GetEntityCoords", _0x2cf63a, false) || mp.game.entity.getCoords(_0x2cf63a, false);
    if (_0x57b6fe) {
      return {
        x: _0x57b6fe.x ?? _0x57b6fe[0],
        y: _0x57b6fe.y ?? _0x57b6fe[1],
        z: _0x57b6fe.z ?? _0x57b6fe[2]
      };
    } else {
      return null;
    }
  } catch (_0x2806df) {
    console.log(_0x2806df);
    return null;
  }
}
function resolveNet(_0x24ca35) {
  const _0x47b67d = Number(_0x24ca35) >>> 0;
  if (!_0x47b67d) {
    return 0;
  }
  try {
    if (typeof NetworkDoesNetworkIdExist == "function" && !NetworkDoesNetworkIdExist(_0x47b67d)) {
      return 0;
    }
  } catch (_0x1d588c) {
    console.log(_0x1d588c);
  }
  try {
    const _0x4f813c = AC.ntv("NetworkGetEntityFromNetworkId", _0x47b67d) || 0;
    if (_0x4f813c && exists(_0x4f813c)) {
      return _0x4f813c;
    }
  } catch (_0x468613) {
    console.log(_0x468613);
  }
  return 0;
}
function setProofs(_0x497a5c, _0x55f0dd, _0x25c9a8) {
  if (!_0x497a5c || !exists(_0x497a5c)) {
    return;
  }
  let _0x38e8c0 = false;
  let _0x577570 = false;
  let _0x1a66db = false;
  let _0x241e24 = false;
  let _0x1b6df6 = false;
  let _0x277bd3 = false;
  try {
    const _0x25abf9 = AC.ntv("GetEntityProofs", _0x497a5c);
    if (_0x25abf9) {
      _0x38e8c0 = !!(_0x25abf9[1] ?? _0x25abf9.bulletProof);
      _0x577570 = !!(_0x25abf9[4] ?? _0x25abf9.collisionProof);
      _0x1a66db = !!(_0x25abf9[5] ?? _0x25abf9.meleeProof);
      _0x241e24 = !!(_0x25abf9[6] ?? _0x25abf9.steamProof);
      _0x1b6df6 = !!(_0x25abf9[7] ?? _0x25abf9.p7);
      _0x277bd3 = !!(_0x25abf9[8] ?? _0x25abf9.drownProof);
    }
  } catch (_0x271553) {
    console.log(_0x271553);
  }
  AC.ntv("SetEntityProofs", _0x497a5c, _0x38e8c0, _0x55f0dd, _0x25c9a8, _0x577570, _0x1a66db, _0x241e24, _0x1b6df6, _0x277bd3);
  try {
    mp.game.entity.setProofs(_0x497a5c, _0x38e8c0, _0x55f0dd, _0x25c9a8, _0x577570, _0x1a66db, _0x241e24, _0x1b6df6, _0x277bd3);
  } catch (_0x4850c) {
    console.log(_0x4850c);
  }
}
function hardenVehicle(_0x29e9a3) {
  if (_0x29e9a3 && exists(_0x29e9a3)) {
    AC.ntv("SetVehicleExplodesOnHighExplosionDamage", _0x29e9a3, false);
    AC.ntv("SetDisableVehiclePetrolTankFires", _0x29e9a3, true);
    AC.ntv("SetDisableVehiclePetrolTankDamage", _0x29e9a3, true);
    try {
      mp.game.vehicle.setExplodesOnHighExplosionDamage(_0x29e9a3, false);
    } catch (_0x1504d5) {
      console.log(_0x1504d5);
    }
    try {
      mp.game.vehicle.setDisablePetrolTankFires(_0x29e9a3, true);
    } catch (_0x3c847e) {
      console.log(_0x3c847e);
    }
    try {
      mp.game.vehicle.setDisablePetrolTankDamage(_0x29e9a3, true);
    } catch (_0x4974ca) {
      console.log(_0x4974ca);
    }
    setProofs(_0x29e9a3, true, true);
  }
}
function preventWeapons() {
  for (let _0x15a25e = 0; _0x15a25e < fxHashes.length; _0x15a25e++) {
    const _0x40a5bf = fxHashes[_0x15a25e];
    if (isValidWeapon(_0x40a5bf)) {
      AC.ntv("RemoveAllProjectilesOfType", _0x40a5bf, false);
      AC.ntv("SetWeaponDamageModifierThisFrame", _0x40a5bf, 0);
      AC.ntv("SetWeaponDamageModifier", _0x40a5bf, 0);
      AC.ntv("SetWeaponExplosionRadiusMultiplier", _0x40a5bf, 0);
      try {
        mp.game.weapon.removeAllProjectilesOfType(_0x40a5bf, false);
      } catch (_0x2970e9) {
        console.log(_0x2970e9);
      }
      try {
        mp.game.weapon.setDamageModifierThisFrame(_0x40a5bf, 0);
      } catch (_0x132dd2) {
        console.log(_0x132dd2);
      }
      try {
        mp.game.weapon.setExplosionRadiusMultiplier(_0x40a5bf, 0);
      } catch (_0x3f83e9) {
        console.log(_0x3f83e9);
      }
    }
  }
}
function preventFire() {
  AC.ntv("SetFireSpreadRate", 0);
  AC.ntv("SetDisablePetrolDecalsIgnitingThisFrame");
  try {
    mp.game.fire.setSpreadRate(0);
  } catch (_0x3f7f05) {
    console.log(_0x3f7f05);
  }
}
function preventVehicles() {
  try {
    mp.vehicles.forEachInStreamRange(_0x38726d => {
      if (_0x38726d && _0x38726d.handle) {
        hardenVehicle(_0x38726d.handle);
      }
    });
  } catch (_0x12d91f) {
    console.log(_0x12d91f);
  }
}
function preventWorld(_0x2ca2b3) {
  preventWeapons();
  preventFire();
  setProofs(_0x2ca2b3, true, true);
  preventVehicles();
}
function deleteProjectileObjects() {
  let _0x24f2ad = null;
  try {
    if (typeof GetGamePool == "function") {
      _0x24f2ad = GetGamePool("CObject");
    }
  } catch (_0x5cda6e) {
    console.log(_0x5cda6e);
  }
  if (_0x24f2ad && _0x24f2ad.length) {
    for (let _0x5839c8 = 0; _0x5839c8 < _0x24f2ad.length; _0x5839c8++) {
      const _0x7981d5 = _0x24f2ad[_0x5839c8];
      if (!_0x7981d5) {
        continue;
      }
      let _0x298fad = 0;
      try {
        _0x298fad = (AC.ntv("GetEntityModel", _0x7981d5) || 0) >>> 0;
      } catch (_0x283699) {
        console.log(_0x283699);
      }
      if (projectileModels.has(_0x298fad)) {
        try {
          AC.ntv("SetEntityAsMissionEntity", _0x7981d5, true, true);
          AC.ntv("DeleteEntity", _0x7981d5);
        } catch (_0x188834) {
          console.log(_0x188834);
        }
        try {
          mp.game.entity.delete(_0x7981d5);
        } catch (_0xb9e7fd) {
          console.log(_0xb9e7fd);
        }
      }
    }
  }
}
function snuffAt(_0x50b5e3, _0x5e6633, _0x484746, _0x4ec065, _0xf3e2ee) {
  const _0x527266 = resolveNet(_0xf3e2ee);
  if (_0x527266) {
    AC.ntv("StopEntityFire", _0x527266);
    try {
      mp.game.fire.stopEntity(_0x527266);
    } catch (_0x311190) {
      console.log(_0x311190);
    }
    hardenVehicle(_0x527266);
    const _0x4f636f = coordsOf(_0x527266);
    if (_0x4f636f) {
      _0x50b5e3 = _0x4f636f.x;
      _0x5e6633 = _0x4f636f.y;
      _0x484746 = _0x4f636f.z;
    }
  }
  if (_0x4ec065) {
    AC.ntv("RemoveScriptFire", _0x4ec065);
    try {
      mp.game.fire.removeScriptFire(_0x4ec065);
    } catch (_0x20e9fc) {
      console.log(_0x20e9fc);
    }
  }
  if ((_0x50b5e3 || _0x5e6633 || _0x484746) && !_0x4ec065) {
    AC.ntv("StopFireInRange", _0x50b5e3, _0x5e6633, _0x484746, 56);
    AC.ntv("RemoveParticleFxInRange", _0x50b5e3, _0x5e6633, _0x484746, 56);
    try {
      mp.game.fire.stopFireInRange(_0x50b5e3, _0x5e6633, _0x484746, 56);
    } catch (_0x46dd39) {
      console.log(_0x46dd39);
    }
    try {
      mp.game.graphics.removeParticleFxInRange(_0x50b5e3, _0x5e6633, _0x484746, 56);
    } catch (_0x447e8c) {
      console.log(_0x447e8c);
    }
  }
  AC.ntv("StopGameplayCamShaking", true);
}
function suppressAt(_0x5a1c4f, _0x1f64e0, _0x3497f3, _0x20c958, _0x8e5344) {
  if (enabled()) {
    posX = Number(_0x5a1c4f) || 0;
    posY = Number(_0x1f64e0) || 0;
    posZ = Number(_0x3497f3) || 0;
    lastFireId = Number(_0x20c958) || 0;
    lastNetId = Number(_0x8e5344) || 0;
    until = Date.now() + 4000;
    snuffAt(posX, posY, posZ, lastFireId, lastNetId);
  }
}
function vec3(_0x5635b5) {
  if (!_0x5635b5 || typeof _0x5635b5 != "object") {
    return null;
  }
  const _0x1edb12 = Number(_0x5635b5.x ?? _0x5635b5[0]);
  const _0x471b14 = Number(_0x5635b5.y ?? _0x5635b5[1]);
  const _0x1eb2a9 = Number(_0x5635b5.z ?? _0x5635b5[2]);
  if (Number.isFinite(_0x1edb12) && Number.isFinite(_0x471b14) && Number.isFinite(_0x1eb2a9)) {
    return {
      x: _0x1edb12,
      y: _0x471b14,
      z: _0x1eb2a9
    };
  } else {
    return null;
  }
}
function looksWorld(_0x141be4, _0x14522a) {
  return Math.abs(_0x141be4) > 20 || Math.abs(_0x14522a) > 20;
}
mp.events.add("ac:weaponfx", (_0x303241, _0x5d6783, _0x3e560c, _0x43c69c, _0x51d070) => {
  suppressAt(_0x303241, _0x5d6783, _0x3e560c, _0x43c69c, _0x51d070);
});
mp.events.add("explosion", (..._0xfda766) => {
  if (!enabled()) {
    return true;
  }
  for (let _0x4f75d9 = 0; _0x4f75d9 < _0xfda766.length; _0x4f75d9++) {
    const _0xf6b791 = vec3(_0xfda766[_0x4f75d9]);
    if (_0xf6b791 && looksWorld(_0xf6b791.x, _0xf6b791.y)) {
      suppressAt(_0xf6b791.x, _0xf6b791.y, _0xf6b791.z, 0, 0);
      break;
    }
  }
  return true;
});
mp.events.add("projectile", (..._0x1d1e2a) => !enabled() || (preventWeapons(), deleteProjectileObjects(), true));
if (typeof on == "function") {
  on("gameEventTriggered", (_0x16a553, _0x423f49) => {
    if (!enabled()) {
      return;
    }
    if (_0x16a553 !== "CEventExplosion" && _0x16a553 !== "CEventNetworkTimedExplosion" && _0x16a553 !== "CProjectileImpactEvent") {
      return;
    }
    try {
      CancelEvent();
    } catch (_0x12f690) {
      console.log(_0x12f690);
    }
    const _0x2d219c = Array.isArray(_0x423f49) ? _0x423f49 : [];
    let _0x1e296e = 0;
    let _0x8b4d45 = 0;
    let _0x3c20ac = 0;
    if (_0x16a553 === "CProjectileImpactEvent") {
      _0x1e296e = Number(_0x2d219c[1]) || 0;
      _0x8b4d45 = Number(_0x2d219c[2]) || 0;
      _0x3c20ac = Number(_0x2d219c[3]) || 0;
    } else if (looksWorld(Number(_0x2d219c[2]) || 0, Number(_0x2d219c[3]) || 0)) {
      _0x1e296e = Number(_0x2d219c[2]) || 0;
      _0x8b4d45 = Number(_0x2d219c[3]) || 0;
      _0x3c20ac = Number(_0x2d219c[4]) || 0;
    }
    suppressAt(_0x1e296e, _0x8b4d45, _0x3c20ac, 0, 0);
  });
}
AC.register("weaponfx", {
  onRender(_0xa536e8) {
    if (enabled()) {
      preventWorld(_0xa536e8);
      if (Date.now() <= until) {
        snuffAt(posX, posY, posZ, lastFireId, lastNetId);
      }
    }
  },
  onInterval() {
    if (enabled()) {
      preventWeapons();
      deleteProjectileObjects();
      preventVehicles();
    }
  }
});