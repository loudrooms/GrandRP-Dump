global.entity = null;
global.res = mp.game.graphics.getScreenActiveResolution(1, 1);
global.updateScreenRes = function () {
  const _0x4066fd = mp.game.graphics.getScreenActiveResolution(1, 1);
  if (_0x4066fd) {
    if (!res || res.x != _0x4066fd.x || res.y != _0x4066fd.y) {
      global.res = _0x4066fd;
    }
  }
};
mp.events.add("Client_ScreenResChanged", () => {
  updateScreenRes();
});
let lastCheckSpeed = 0;
let lastCheckSpeedometr = 0;
function getspeedofveh(_0x220ee4) {
  let _0x20990e = _0x220ee4.getSpeed();
  _0x20990e *= 3.6;
  return _0x20990e;
}
function releaseRaycastEntityHandle(_0x5b0007) {
  if (typeof _0x5b0007 == "number" && _0x5b0007 !== 0 && mp.game.entity.doesExist(_0x5b0007)) {
    mp.game.shapetest.releaseScriptGuidFromEntity(_0x5b0007);
  }
}
function resolveRaycastEntity(_0x3409b5, _0x2625c2) {
  if (_0x3409b5 == null) {
    return null;
  }
  if (typeof _0x3409b5 == "object" && _0x3409b5.type !== undefined) {
    return _0x3409b5;
  }
  let _0x3b36c0 = null;
  if (typeof _0x3409b5 == "number") {
    _0x3b36c0 = _0x3409b5;
  } else if (typeof _0x3409b5 == "object" && _0x3409b5.handle !== undefined) {
    _0x3b36c0 = _0x3409b5.handle;
  } else {
    if (typeof _0x3409b5 != "object" || _0x3409b5.entity === undefined || typeof _0x3409b5.entity != "number") {
      return null;
    }
    _0x3b36c0 = _0x3409b5.entity;
  }
  let _0x43de9d = null;
  try {
    if (mp.game.entity.isAPed(_0x3b36c0)) {
      _0x43de9d = mp.players.atHandle(_0x3b36c0) || mp.peds.atHandle(_0x3b36c0);
    } else if (mp.game.entity.isAVehicle(_0x3b36c0)) {
      _0x43de9d = mp.vehicles.atHandle(_0x3b36c0);
    } else if (mp.game.entity.isAnObject(_0x3b36c0) || mp.game.entity.getType(_0x3b36c0) === 3) {
      _0x43de9d = mp.objects.atHandle(_0x3b36c0);
      if (!_0x43de9d) {
        mp.objects.forEach(_0x50c11c => {
          if (!_0x43de9d && _0x50c11c.handle === _0x3b36c0) {
            _0x43de9d = _0x50c11c;
          }
        });
      }
      if (!_0x43de9d && _0x2625c2) {
        const _0x240757 = mp.game.entity.doesExist(_0x3b36c0) ? mp.game.entity.getModel(_0x3b36c0) >>> 0 : null;
        if (_0x240757 !== null) {
          let _0x4396a4 = 3;
          mp.objects.forEachInStreamRange(_0xd897ec => {
            if (!_0xd897ec || !_0xd897ec.handle || !mp.game.entity.doesExist(_0xd897ec.handle)) {
              return;
            }
            let _0x4845d7;
            try {
              _0x4845d7 = parseInt(_0xd897ec.model) >>> 0;
            } catch (_0x1450b8) {
              return;
            }
            if (_0x4845d7 !== _0x240757) {
              return;
            }
            const _0x267c93 = mp.game.system.vdist(_0x2625c2.x, _0x2625c2.y, _0x2625c2.z, _0xd897ec.position.x, _0xd897ec.position.y, _0xd897ec.position.z);
            if (_0x267c93 < _0x4396a4) {
              _0x4396a4 = _0x267c93;
              _0x43de9d = _0xd897ec;
            }
          });
        }
      }
    } else {
      _0x43de9d = mp.players.atHandle(_0x3b36c0) || mp.peds.atHandle(_0x3b36c0) || mp.vehicles.atHandle(_0x3b36c0) || mp.objects.atHandle(_0x3b36c0);
    }
  } catch (_0x3bd04a) {}
  if (!_0x43de9d && _0x2625c2) {
    _0x43de9d = findInteractableObjectNear(_0x2625c2);
  }
  return _0x43de9d;
}
function getLookingAtEntity(_0x1393d3 = 4) {
  let _0x293039 = localplayer.getBoneCoords(12844, 0.5, 0, 0);
  let _0x2cccac = mp.game.graphics.screen2dToWorld3d([res.x / 2, res.y / 2, 14]);
  if (_0x2cccac == null) {
    return null;
  }
  _0x293039.z -= 0.3;
  const _0x26e690 = mp.raycasting.testPointToPoint(_0x293039, _0x2cccac, localplayer, 30);
  if (_0x26e690 === undefined) {
    return null;
  }
  const _0x23d3a0 = typeof _0x26e690.entity == "number" ? _0x26e690.entity : null;
  const _0x117c59 = resolveRaycastEntity(_0x26e690.entity, _0x26e690.position);
  if (_0x117c59 == null) {
    releaseRaycastEntityHandle(_0x23d3a0);
    return null;
  }
  if (_0x117c59.type == "ped") {
    releaseRaycastEntityHandle(_0x23d3a0);
    return null;
  }
  if (_0x117c59.type == "object") {
    if (!_0x117c59.handle || !mp.game.entity.doesExist(_0x117c59.handle)) {
      releaseRaycastEntityHandle(_0x23d3a0);
      return null;
    }
    try {
      if (!isInteractableObjectModel(parseInt(_0x117c59.model) >>> 0) || _0x117c59.remoteId === INVALID_REMOTE_ID) {
        releaseRaycastEntityHandle(_0x23d3a0);
        return null;
      }
    } catch (_0x4ce430) {
      releaseRaycastEntityHandle(_0x23d3a0);
      return null;
    }
  }
  const _0x554876 = _0x117c59.position || _0x26e690.position;
  const _0x1f06be = localplayer.position;
  if (mp.game.system.vdist(_0x554876.x, _0x554876.y, _0x554876.z, _0x1f06be.x, _0x1f06be.y, _0x1f06be.z) > _0x1393d3) {
    releaseRaycastEntityHandle(_0x23d3a0);
    return null;
  } else {
    releaseRaycastEntityHandle(_0x23d3a0);
    return _0x117c59;
  }
}
global.getspeed = function () {
  let _0x452a40 = mp.players.local.vehicle.getSpeed();
  _0x452a40 *= 3.6;
  return _0x452a40;
};
global.GreenZone = false;
global.is_zombie = false;
const render_object_hashes = [3804568937, 286252949, 452618762, 1104521776, 3660027849, 2210428449, 2272050386, 3229200997, 3698023687, 322248450, 2414774912, 3209719027, 2461602757, 2752099942, 3456677054, 2388738561, 2808333064, 515366950, 1839078040, 2777942659, 2346047239, 3256927132, 525667351, 725259233, 3279592262, 291348133, 1071807406, 3186063286, 1885689943, 2564303168, 1803116220, 2766452339, 2535650773, 449297510, 3739149317, 143414865, 1039600050, 2618926416, 446622462, 1240350830, 969177817, 3011067451, 3977563887, 44671739, 3002519589, 677776329, 10763334, 1122812118, 1858869396, 2165292315, 2336870799, 2642736645, 2777384466, 3109596588, 2683168545, 1276148988, 1072616162, 1946925855, 1172303719, 3008087081, 1175931267, 3259306505, 2707666095, 3095293409, 3133058339, 3371714966, 1107349801, 3841850837, 3780943946, 3316410890, 4151651686, 3729477854, 742943823, 2080595106, 2139919312, 4089655941, 1560354582, 2327313027, 3865423080, 1837352297, 2671940813, 3611737498, 2588558238, 3843643711, 586645476, 3968692429, 523344868, 1935071027, 2444343888, 1836351583, ...["veloxsy_module_head", "veloxsy_module_storage", "veloxsy_module_repair", "veloxsy_module_ammo", "veloxsy_module_cannabis", "veloxsy_module_cocain", "veloxsy_module_wood", "veloxsy_module_candy"].map(_0x27d2b2 => mp.game.joaat(_0x27d2b2)), 2292568938, 630549221, 3954327388, 2700444810, 3360630910, 449505375, mp.game.joaat("veloxsy_dr_lavka"), mp.game.joaat("veloxsy_easter_lavka"), mp.game.joaat("veloxsy_kiosk_2"), mp.game.joaat("veloxsy_kiosk_4"), mp.game.joaat("inf_bed_1"), mp.game.joaat("inf_bed_2"), mp.game.joaat("inf_bed_3"), mp.game.joaat("inf_bed_4"), mp.game.joaat("inf_bed_5"), mp.game.joaat("inf_bed_6"), mp.game.joaat("inf_bed_7"), mp.game.joaat("inf_bed_8"), mp.game.joaat("big_inf_bed_1"), mp.game.joaat("big_inf_bed_2"), mp.game.joaat("big_inf_bed_3"), mp.game.joaat("big_inf_bed_4"), mp.game.joaat("big_inf_bed_5"), mp.game.joaat("big_inf_bed_6"), mp.game.joaat("big_inf_bed_7"), mp.game.joaat("big_inf_bed_8")];
function isInteractableObjectModel(_0x1c0043) {
  return render_object_hashes.indexOf(_0x1c0043) !== -1;
}
function findInteractableObjectNear(_0x474d60, _0x15b85c = 5) {
  if (!_0x474d60) {
    return null;
  }
  let _0x1da327 = null;
  let _0x5cae66 = _0x15b85c;
  mp.objects.forEachInStreamRange(_0x42a02f => {
    if (!mp.objects.exists(_0x42a02f) || !_0x42a02f.handle || !mp.game.entity.doesExist(_0x42a02f.handle)) {
      return;
    }
    let _0x3323de;
    try {
      _0x3323de = parseInt(_0x42a02f.model) >>> 0;
    } catch (_0x2cd8ca) {
      return;
    }
    if (!isInteractableObjectModel(_0x3323de)) {
      return;
    }
    if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x42a02f.position.x, _0x42a02f.position.y, _0x42a02f.position.z) > 4.5) {
      return;
    }
    const _0x58b180 = mp.game.system.vdist(_0x474d60.x, _0x474d60.y, _0x474d60.z, _0x42a02f.position.x, _0x42a02f.position.y, _0x42a02f.position.z);
    if (_0x58b180 < _0x5cae66) {
      _0x5cae66 = _0x58b180;
      _0x1da327 = _0x42a02f;
    }
  });
  return _0x1da327;
}
const control = [50, 140, 141, 142, 257, 263, 264, 24, 25, 22, 51, 52, 53, 54, 55, 56, 57, 58, 59, 52, 69, 92, 114, 53];
let player_marker;
let player_marker2;
global.melee_weapons = [-1569615261, 1141786504, 1317494643, 1737195953, 419712736, -1951375401, -1786099057, 2508868239, 2343591895, -1716189206];
const disable_bizwar_weapon = [100416529, 205991906, 177293209, 3342088282, 1785463520, 419712736, 1141786504, 4191993645, 940833800, 1317494643, 1432025498, 2017895192, 317205821, 984333226, -144582089, -1659689577, 2031082785, 1530821047, 2634544996, 2144741730, 3686625920, 1627465347, 911657153, 1198879012, 2634544996, -1660422300];
let at_biz_war = false;
mp.events.add("Client_CancelBizWarAction", _0x7eae2 => {
  at_biz_war = _0x7eae2;
});
let at_some_events = false;
mp.events.add("Client_AtSomeEventDisableGuns", _0x4a8816 => {
  at_some_events = _0x4a8816;
});
let at_seawar_event = false;
mp.events.add("Client_AtSeaWarEventDisableGuns", _0x500da7 => {
  at_seawar_event = _0x500da7;
});
let at_army_mission_war = false;
mp.events.add("Client_DisableArmyBaseAttackActions", _0x44c8f4 => {
  if (_0x44c8f4 == 1) {
    mp.game.audio.startAlarm("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", true);
  } else {
    mp.game.audio.stopAlarm("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", true);
  }
  at_army_mission_war = _0x44c8f4;
});
let families_colors = [];
mp.events.add("Client_Load_Fam_Colors", (_0x1192e7, _0x29e6c7, _0x88f68f) => {
  families_colors = _0x1192e7;
  if (_0x29e6c7 != null) {
    mp.events.call("Client_UpdateFamName", _0x29e6c7, _0x88f68f);
  }
});
let cant_shoot = false;
mp.events.add("Client_ChangeShootState", _0x154fe8 => {
  cant_shoot = _0x154fe8;
});
let client_not_dead = false;
const allow_gun_from_car = [-1045183535, 453432689, 137902532, 584646201, -1716589765, 736523883, 324215364, 2024373456, 171789620, -270015777, 713758669, -1889966421, 313667741, 1601192247, -129338303, -1074605776, -931231585, 413749043, 783018407, 79138191, 748196516];
global.lastCheckAC = 0;
let markerPosition = 0;
let markerDirection = 1;
let markerSpeed = 0.001;
let markerAmplitude = 0.05;
let rotationAngle = 0;
mp.events.add("render", () => {
  HideHudComponentThisFrame(3);
  HideHudComponentThisFrame(4);
  HideHudComponentThisFrame(5);
  HideHudComponentThisFrame(10);
  HideHudComponentThisFrame(13);
  mp.game.controls.disableControlAction(2, 243, true);
  mp.game.invoke(getNative("DISABLE_CONTROL_ACTION"), 2, 140, true);
  mp.game.invoke(getNative("DISABLE_CONTROL_ACTION"), 2, 141, true);
  mp.game.invoke(getNative("DISABLE_CONTROL_ACTION"), 2, 142, true);
  if (!loggedin) {
    return;
  }
  if (mp.keys.isDown(192) != 1 || client_not_dead) {
    if (mp.keys.isDown(192) != 1 && client_not_dead) {
      if (!in_quene && !chatActive && (GlobalCheck() != 1 || !mp.gui.cursor.visible || !!at_famwar || !!at_pubg || !!isInDrone || !!inObjectEditor)) {
        mp.gui.cursor.visible = !mp.gui.cursor.visible;
      }
      client_not_dead = false;
    }
  } else {
    client_not_dead = true;
  }
  const _0x473461 = currentWeapon();
  mp.game.controls.disableControlAction(0, 36, true);
  mp.game.controls.disableControlAction(1, 7, true);
  mp.game.controls.disableControlAction(0, 48, true);
  mp.game.controls.disableControlAction(2, 45, true);
  if (is_weed_regen != 1 || at_death2) {
    mp.game.player.setHealthRechargeMultiplier(0);
  } else {
    mp.game.player.setHealthRechargeMultiplier(1);
  }
  mp.game.ui.hideHudComponentThisFrame(22);
  mp.game.ui.hideHudComponentThisFrame(20);
  mp.game.ui.hideHudComponentThisFrame(2);
  mp.game.ui.hideHudComponentThisFrame(3);
  mp.game.ui.hideHudComponentThisFrame(6);
  mp.game.ui.hideHudComponentThisFrame(7);
  mp.game.ui.hideHudComponentThisFrame(8);
  mp.game.ui.hideHudComponentThisFrame(9);
  mp.players.local.setConfigFlag(429, true);
  if ((GreenZone && !global.onBirthdayShootingRange && is_admin !== true && local_member != 2 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 || new_version == 1 && localplayer.vehicle || new_version != 1 && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) == localplayer.handle) && _0x473461 != 101631238) {
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
  }
  if (at_influence_race) {
    mp.game.controls.disableControlAction(2, 75, true);
  }
  if (localplayer.cuffed || is_roped_hands == 1) {
    mp.game.controls.disableControlAction(2, 23, true);
    mp.game.controls.disableControlAction(2, 75, true);
    control.forEach(_0x49d293 => {
      mp.game.controls.disableControlAction(2, _0x49d293, true);
    });
    mp.game.controls.disableControlAction(0, 21, true);
  } else if (!GreenZone && (!localplayer.vehicle || localplayer.vehicle.getPedInSeat(-1) != localplayer.handle)) {
    control.forEach(_0x2544f2 => {
      if (_0x2544f2 == 24 || _0x2544f2 == 257) {
        const _0x51af0e = mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, _0x473461);
        if (melee_weapons.indexOf(_0x473461) == -1 && _0x51af0e <= 0) {
          mp.game.controls.disableControlAction(2, _0x2544f2, true);
        } else {
          mp.game.controls.enableControlAction(2, _0x2544f2, true);
        }
      } else {
        mp.game.controls.enableControlAction(2, _0x2544f2, true);
      }
    });
  }
  if (cant_sprint) {
    mp.game.controls.disableControlAction(2, 21, true);
  }
  if (new_version == 1 && localplayer.vehicle && (global.curr_lang != "ru" || global.curr_lang == "ru" && allow_gun_from_car.indexOf(_0x473461) == -1)) {
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 346, true);
    mp.game.controls.disableControlAction(2, 91, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 347, true);
  }
  if (_0x473461 != -1569615261) {
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 143, true);
    mp.game.controls.disableControlAction(2, 263, true);
  }
  if (is_bag_head == 1) {
    mp.game.controls.disableControlAction(2, 0, true);
  }
  if (at_army_mission_war == 1) {
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 91, true);
    mp.game.controls.disableControlAction(2, 92, true);
  }
  if (at_seawar_event == 1 && disable_bizwar_weapon.indexOf(_0x473461) != -1 && _0x473461 != 1432025498 && _0x473461 != 2017895192 && _0x473461 != 317205821 && _0x473461 != 984333226 || (at_some_events == 1 || at_biz_war == 1) && disable_bizwar_weapon.indexOf(_0x473461) != -1 || is_freezed == 1 || at_small_timer_event > 0 && at_small_timer_event < 3) {
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 25, true);
  }
  if (at_small_timer_event || at_duel_location || at_famwar || is_school == 1 && global.at_school_dm !== undefined && global.at_school_dm) {
    mp.game.player.resetStamina();
  }
  if (!at_duel_location && !at_famwar && at_small_timer_event != 4 && (!is_school || is_school == 1 && global.at_school_dm !== undefined && !global.at_school_dm)) {
    mp.game.ui.hideHudComponentThisFrame(19);
    mp.game.controls.disableControlAction(2, 12, true);
    mp.game.controls.disableControlAction(2, 13, true);
    mp.game.controls.disableControlAction(2, 14, true);
    mp.game.controls.disableControlAction(2, 15, true);
    mp.game.controls.disableControlAction(2, 16, true);
    mp.game.controls.disableControlAction(2, 17, true);
    mp.game.controls.disableControlAction(2, 37, true);
    mp.game.controls.disableControlAction(2, 99, true);
    mp.game.controls.disableControlAction(2, 100, true);
    mp.game.controls.disableControlAction(2, 157, true);
    mp.game.controls.disableControlAction(2, 158, true);
    mp.game.controls.disableControlAction(2, 159, true);
    mp.game.controls.disableControlAction(2, 160, true);
    mp.game.controls.disableControlAction(2, 161, true);
    mp.game.controls.disableControlAction(2, 162, true);
    mp.game.controls.disableControlAction(2, 163, true);
    mp.game.controls.disableControlAction(2, 164, true);
    mp.game.controls.disableControlAction(2, 165, true);
    mp.game.controls.disableControlAction(2, 261, true);
    mp.game.controls.disableControlAction(2, 262, true);
  }
  if (mobileOpen) {
    mp.game.controls.disableControlAction(32, 270, true);
    mp.game.controls.disableControlAction(32, 271, true);
    mp.game.controls.disableControlAction(32, 272, true);
    mp.game.controls.disableControlAction(32, 273, true);
    mp.game.controls.disableControlAction(32, 1, true);
    mp.game.controls.disableControlAction(32, 2, true);
    mp.game.controls.disableControlAction(32, 334, true);
    mp.game.controls.disableControlAction(32, 335, true);
    mp.game.controls.disableControlAction(32, 336, true);
    mp.game.controls.disableControlAction(32, 97, true);
    mp.game.controls.disableControlAction(32, 96, true);
    mp.game.controls.disableControlAction(32, 81, true);
    mp.game.controls.disableControlAction(32, 82, true);
    mp.game.controls.disableControlAction(32, 83, true);
    mp.game.controls.disableControlAction(32, 84, true);
    mp.game.controls.disableControlAction(32, 85, true);
    mp.game.controls.disableControlAction(32, 332, true);
    mp.game.controls.disableControlAction(32, 333, true);
  }
  if (messagesOpened || disableVehicleHandle) {
    mp.game.controls.disableControlAction(2, 0, true);
    mp.game.controls.disableControlAction(2, 26, true);
    mp.game.controls.disableControlAction(2, 74, true);
    mp.game.controls.disableControlAction(2, 79, true);
    mp.game.controls.disableControlAction(2, 86, true);
    mp.game.controls.disableControlAction(2, 80, true);
    mp.game.controls.disableControlAction(2, 30, true);
    mp.game.controls.disableControlAction(2, 31, true);
    mp.game.controls.disableControlAction(2, 32, true);
    mp.game.controls.disableControlAction(2, 33, true);
    mp.game.controls.disableControlAction(2, 34, true);
    mp.game.controls.disableControlAction(2, 35, true);
    mp.game.controls.disableControlAction(2, 232, true);
    mp.game.controls.disableControlAction(2, 233, true);
    mp.game.controls.disableControlAction(2, 234, true);
    mp.game.controls.disableControlAction(2, 235, true);
    mp.game.controls.disableControlAction(2, 266, true);
    mp.game.controls.disableControlAction(2, 267, true);
    mp.game.controls.disableControlAction(2, 268, true);
    mp.game.controls.disableControlAction(2, 269, true);
    mp.game.controls.disableControlAction(2, 63, true);
    mp.game.controls.disableControlAction(2, 64, true);
    mp.game.controls.disableControlAction(2, 278, true);
    mp.game.controls.disableControlAction(2, 279, true);
    mp.game.controls.disableControlAction(2, 280, true);
    mp.game.controls.disableControlAction(2, 281, true);
    mp.game.controls.disableControlAction(2, 59, true);
    mp.game.controls.disableControlAction(2, 60, true);
    mp.game.controls.disableControlAction(2, 61, true);
    mp.game.controls.disableControlAction(2, 62, true);
    mp.game.controls.disableControlAction(2, 71, true);
    mp.game.controls.disableControlAction(2, 72, true);
    mp.game.controls.disableControlAction(2, 136, true);
    mp.game.controls.disableControlAction(2, 138, true);
    mp.game.controls.disableControlAction(2, 139, true);
    mp.game.controls.disableControlAction(2, 137, true);
    mp.game.controls.disableControlAction(2, 354, true);
    mp.game.controls.disableControlAction(2, 75, true);
    mp.game.controls.disableControlAction(2, 44, true);
  }
  if (disableVehicleExit) {
    mp.game.controls.disableControlAction(2, 75, true);
  }
  if (mp.game.controls.isInputDisabled(0) == 0 && _0x473461 != -1569615261 && _0x473461 != 101631238) {
    givenWeapon = -1569615261;
    main_browser.execute("APPS.state.hud.ammo = 0;");
    mp.game.invoke(getNative("GIVE_WEAPON_TO_PED"), localplayer.handle, givenWeapon, 1, false, true);
    mp.game.invoke(getNative("SET_PED_AMMO"), localplayer.handle, givenWeapon, 0);
    localplayer.taskReloadWeapon(false);
    localplayer.taskSwapWeapon(false);
  }
  if (localplayer.getIsTaskActive(16) || localplayer.isRagdoll() || duel_cant_do_damage || cant_use_weapon_familywar || robbed_at_trunk || at_standart_anim || robbed_player_now || carry_player_now || mobileOpen || cant_shoot || cant_shoot_while_take || flowers_in_hands || at_change_garage || temp_cant_shoot || toyInHand || disableWeaponHandle) {
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
    if (curr_lang == "ru" && playerincapture == 1) {
      mp.game.controls.disableControlAction(1, 22, true);
      mp.game.controls.disableControlAction(1, 21, true);
    }
  }
  if (at_robbed_player == 1 || is_carriedby == 1) {
    mp.game.controls.disableControlAction(2, 0, true);
    mp.game.controls.disableControlAction(2, 32, true);
    mp.game.controls.disableControlAction(2, 33, true);
    mp.game.controls.disableControlAction(2, 34, true);
    mp.game.controls.disableControlAction(2, 35, true);
    mp.game.controls.disableControlAction(2, 23, true);
    mp.game.controls.disableControlAction(2, 75, true);
    mp.game.controls.disableControlAction(0, 23, true);
    mp.game.controls.disableControlAction(1, 23, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
  }
  if (at_death2 || disablePlayerHandle) {
    mp.game.controls.disableControlAction(2, 22, true);
    mp.game.controls.disableControlAction(2, 23, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 232, true);
    mp.game.controls.disableControlAction(2, 233, true);
    mp.game.controls.disableControlAction(2, 234, true);
    mp.game.controls.disableControlAction(2, 235, true);
    mp.game.controls.disableControlAction(2, 75, true);
    mp.game.controls.disableControlAction(2, 266, true);
    mp.game.controls.disableControlAction(2, 267, true);
    mp.game.controls.disableControlAction(2, 268, true);
    mp.game.controls.disableControlAction(2, 269, true);
    mp.game.controls.disableControlAction(2, 187, true);
    mp.game.controls.disableControlAction(2, 188, true);
    mp.game.controls.disableControlAction(2, 189, true);
    mp.game.controls.disableControlAction(2, 190, true);
    mp.game.controls.disableControlAction(2, 87, true);
    mp.game.controls.disableControlAction(2, 88, true);
    mp.game.controls.disableControlAction(2, 89, true);
    mp.game.controls.disableControlAction(2, 90, true);
    mp.game.controls.disableControlAction(2, 150, true);
    mp.game.controls.disableControlAction(2, 136, true);
    mp.game.controls.disableControlAction(2, 129, true);
    mp.game.controls.disableControlAction(2, 77, true);
    mp.game.controls.disableControlAction(2, 71, true);
    mp.game.controls.disableControlAction(2, 32, true);
    mp.game.controls.disableControlAction(2, 33, true);
    mp.game.controls.disableControlAction(2, 34, true);
    mp.game.controls.disableControlAction(2, 35, true);
    mp.game.controls.disableControlAction(0, 32, true);
    mp.game.controls.disableControlAction(0, 33, true);
    mp.game.controls.disableControlAction(0, 34, true);
    mp.game.controls.disableControlAction(0, 35, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
    mp.game.controls.disableControlAction(2, 26, true);
    mp.game.controls.disableControlAction(2, 27, true);
    mp.game.controls.disableControlAction(2, 28, true);
    mp.game.controls.disableControlAction(2, 29, true);
    mp.game.controls.disableControlAction(2, 30, true);
    mp.game.controls.disableControlAction(2, 31, true);
    mp.game.controls.disableControlAction(2, 36, true);
    mp.game.controls.disableControlAction(2, 37, true);
    mp.game.controls.disableControlAction(2, 38, true);
    mp.game.controls.disableControlAction(2, 39, true);
    mp.game.controls.disableControlAction(2, 40, true);
    mp.game.controls.disableControlAction(2, 41, true);
    mp.game.controls.disableControlAction(2, 42, true);
    mp.game.controls.disableControlAction(2, 43, true);
    mp.game.controls.disableControlAction(2, 44, true);
    mp.game.controls.disableControlAction(2, 45, true);
    mp.game.controls.disableControlAction(2, 46, true);
    mp.game.controls.disableControlAction(2, 47, true);
    mp.game.controls.disableControlAction(2, 48, true);
    mp.game.controls.disableControlAction(2, 49, true);
    mp.game.controls.disableControlAction(2, 50, true);
  }
  if (localplayer.isInAnyVehicle(false)) {
    entity = null;
  } else {
    entity = getLookingAtEntity();
    if (at_close_billiard_cam != 0 || entity != null && entity.getAlpha() == 0 || hudswitch == 1) {
      entity = null;
    }
  }
  if (entity != null) {
    rotationAngle -= 0.5;
    if (rotationAngle <= -360) {
      rotationAngle = 0;
    }
    markerPosition += markerSpeed * markerDirection;
    if (markerPosition > markerAmplitude) {
      markerPosition = markerAmplitude;
      markerDirection = -1;
    } else if (markerPosition < -markerAmplitude) {
      markerPosition = -markerAmplitude;
      markerDirection = 1;
    }
    let _0x5acfdf = [255, 255, 255];
    const _0x1a072a = entity.family;
    if (entity.type == "player" && _0x1a072a) {
      if (families_colors[_0x1a072a - 1] == 1) {
        _0x5acfdf = [255, 228, 0];
      } else if (families_colors[_0x1a072a - 1] == 2) {
        _0x5acfdf = [255, 0, 0];
      } else if (families_colors[_0x1a072a - 1] == 3) {
        _0x5acfdf = [0, 0, 0];
      }
    } else {
      _0x5acfdf = [255, 255, 255];
    }
    if (player_marker) {
      player_marker.destroy();
      player_marker = null;
    }
    player_marker = mp.markers.new(2, new mp.Vector3(entity.position.x, entity.position.y, entity.position.z + 1.3 + markerPosition), 0.3, {
      rotation: new mp.Vector3(180, 0, 0),
      color: [_0x5acfdf[0], _0x5acfdf[1], _0x5acfdf[2], 185],
      visible: true,
      dimension: localplayer.dimension
    });
    if (player_marker2) {
      player_marker2.destroy();
      player_marker2 = null;
    }
    player_marker2 = mp.markers.new(27, new mp.Vector3(entity.position.x, entity.position.y, entity.position.z - 0.96), 1, {
      rotation: new mp.Vector3(0, 0, rotationAngle),
      color: [_0x5acfdf[0], _0x5acfdf[1], _0x5acfdf[2], 185],
      visible: true,
      dimension: localplayer.dimension
    });
    mp.game.graphics.drawText(GetKeyCode(mp.storage.data.bind_controls.action), [entity.position.x, entity.position.y, entity.position.z], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.4, 0.4],
      outline: true
    });
    if (entity.type == "vehicle") {
      const _0x40b964 = entity.getVariable("Taxi_Number");
      if (_0x40b964 && !entity.isSeatFree(-1)) {
        if (_0x40b964 == 1) {
          const _0x2e3c5c = entity.getVariable("TaxiCost") == 0 ? language.бесплатно[curr_lang] : TranslateText("${0}", entity.getVariable("TaxiCost"));
          mp.game.graphics.drawText(TranslateText("Такси\nYellow Cab Co\nЦена за км: ${0}", _0x2e3c5c), [entity.position.x, entity.position.y, entity.position.z + 1.5], {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.4, 0.4],
            outline: true
          });
        } else if (_0x40b964 == 2) {
          const _0x14d96e = entity.getVariable("TaxiCost") == 0 ? language.бесплатно[curr_lang] : TranslateText("${0}", entity.getVariable("TaxiCost"));
          mp.game.graphics.drawText(TranslateText("Такси\nTaxity Cab Co\nЦена за км: ${0}", _0x14d96e), [entity.position.x, entity.position.y, entity.position.z + 1.5], {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.4, 0.4],
            outline: true
          });
        } else if (_0x40b964 == 3) {
          const _0x2acf10 = entity.getVariable("TaxiCost") == 0 ? language.бесплатно[curr_lang] : TranslateText("${0}", entity.getVariable("TaxiCost"));
          mp.game.graphics.drawText(TranslateText("Такси\nSuber Cab Co\nЦена за км: ${0}", _0x2acf10), [entity.position.x, entity.position.y, entity.position.z + 1.5], {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.4, 0.4],
            outline: true
          });
        } else if (_0x40b964 == 4) {
          const _0x490e20 = entity.getVariable("TaxiCost") == 0 ? language.бесплатно[curr_lang] : TranslateText("${0}", entity.getVariable("TaxiCost"));
          mp.game.graphics.drawText(TranslateText("Такси\nPrivate Cab Co\nЦена за км: ${0}", _0x490e20), [entity.position.x, entity.position.y, entity.position.z + 1.5], {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.4, 0.4],
            outline: true
          });
        }
      }
      const _0x390b3f = entity.getVariable("RouteNumber");
      if (_0x390b3f) {
        let _0x36fdd4;
        if (_0x390b3f == 1) {
          _0x36fdd4 = language["Маршрут по работам"][curr_lang];
        } else if (_0x390b3f == 2) {
          _0x36fdd4 = language["Маршрут внутригородской Лос-Сантос"][curr_lang];
        } else if (_0x390b3f == 3) {
          _0x36fdd4 = language["Маршрут по окраинам"][curr_lang];
        } else if (_0x390b3f == 4) {
          _0x36fdd4 = language["Маршрут Аэропорт-Мэрия"][curr_lang];
        }
        mp.game.graphics.drawText(_0x36fdd4, [entity.position.x, entity.position.y, entity.position.z + 1.5], {
          font: 0,
          color: [255, 255, 255, 185],
          scale: [0.4, 0.4],
          outline: true
        });
      }
    }
  } else {
    if (player_marker) {
      player_marker.destroy();
      player_marker = null;
    }
    if (player_marker2) {
      player_marker2.destroy();
      player_marker2 = null;
    }
  }
  if (melee_weapons.indexOf(_0x473461) == -1) {
    mp.game.controls.disableControlAction(2, 142, true);
  }
  if (is_zombie && _0x473461 != -1569615261 && is_halloween) {
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
  }
  if (at_police_cam) {
    mp.game.graphics.drawText(TranslateText("ПКМ - переключить режим"), [0.5, 0.75], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.5, 0.5],
      outline: false
    });
    mp.game.graphics.drawText(TranslateText("Пробел - сфокусироваться"), [0.5, 0.8], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.5, 0.5],
      outline: false
    });
    mp.game.graphics.drawText(TranslateText("ЛКМ - отправить уведомелние"), [0.5, 0.85], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.5, 0.5],
      outline: false
    });
  }
});
global.vehicle_fuel = 0;
mp.events.add("Client_UpdateVehicleFuel", _0x11658a => {
  if (localplayer.isInAnyVehicle(false) && mp.players.local.vehicle) {
    vehicle_fuel = _0x11658a;
    if (mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model)) {
      main_browser.execute("APPS.state.hud.tank = 0;");
    } else {
      main_browser.execute("APPS.state.hud.tank = " + _0x11658a + ";");
    }
    if (_0x11658a <= 0) {
      stopVehicleDueToNoFuel();
    }
  }
});
let attached_vehicle = null;
let attached_cargobob_vehicle = null;
setInterval(function () {
  if (localplayer.isInAnyVehicle(false) && mp.players.local.vehicle) {
    const _0x36ff2b = mp.players.local.vehicle.getIsEngineRunning();
    if (player_work_pilot && vehicle_engine != _0x36ff2b) {
      TurnOnEngine(localplayer.vehicle);
      mp.players.local.vehicle.setUndriveable(false);
    }
    if (new_version != 1 || attached_vehicle || mp.players.local.vehicle.model !== parseInt(3931533768) && mp.players.local.vehicle.model !== parseInt(2971866336) && mp.players.local.vehicle.model !== parseInt(3852654278)) {
      if (new_version != 1 || attached_cargobob_vehicle || mp.players.local.vehicle.model !== parseInt(4244420235)) {
        if (new_version == 1 && attached_vehicle) {
          if (!mp.vehicles.exists(attached_vehicle) || !mp.game.invoke("0x146DF9EC4C4B9FD4", mp.players.local.vehicle.handle, attached_vehicle.handle)) {
            attached_vehicle = null;
            mp.events.callRemote("Server_UnAttachedTowTruckVehicle");
          }
        } else if (new_version == 1 && attached_cargobob_vehicle) {
          if (!mp.vehicles.exists(attached_cargobob_vehicle) || !mp.game.invoke("0xD40148F22E81A1D9", mp.players.local.vehicle.handle, attached_cargobob_vehicle.handle)) {
            attached_cargobob_vehicle = null;
            mp.events.callRemote("Server_UnAttachCargobobVehicle");
          }
        }
      } else {
        let _0x564391 = 0;
        mp.vehicles.forEachInStreamRange(_0x252339 => {
          if (mp.game.invoke("0xD40148F22E81A1D9", mp.players.local.vehicle.handle, _0x252339.handle)) {
            _0x564391 = _0x252339;
          }
        });
        if (_0x564391) {
          attached_cargobob_vehicle = _0x564391;
          mp.events.callRemote("Server_AttachCargobobVehicle", attached_cargobob_vehicle);
        }
      }
    } else {
      let _0x54d1ae = 0;
      mp.vehicles.forEachInStreamRange(_0x1d79bb => {
        if (mp.game.invoke("0x146DF9EC4C4B9FD4", mp.players.local.vehicle.handle, _0x1d79bb.handle)) {
          _0x54d1ae = _0x1d79bb;
        }
      });
      if (_0x54d1ae) {
        attached_vehicle = _0x54d1ae;
        mp.events.callRemote("Server_AttachedTowTruckVehicle", attached_vehicle);
      }
    }
    const _0x30a3bd = mp.players.local.vehicle.getLightsState(1, 1);
    main_browser.execute("\n            APPS.state.hud.speed = " + Math.round(getspeed()) + ";\n            APPS.state.hud.gear = '" + mp.players.local.vehicle.gear + "';\n            APPS.state.hud.light = " + Boolean(_0x36ff2b && (_0x30a3bd.lightsOn || _0x30a3bd.highbeamsOn)) + ";\n        ");
  }
}, 100);
mp.events.add("Client_AttachSomeTowTruckVehicle", (_0x567c8d, _0x1e6c68) => {
  if (_0x567c8d && mp.vehicles.exists(_0x567c8d)) {
    _0x567c8d.being_attached = _0x1e6c68;
  }
});
let showNames = 1;
const maxDistance = 25;
const maxDistance_health = 60;
const width = 0.03;
const height = 0.004;
const border = 0.001;
const muted = [255, 255, 255, 255];
const speak = [255, 0, 0, 255];
mp.nametags.enabled = false;
mp.events.add("NameChange", _0xcd064f => {
  showNames = _0xcd064f;
});
mp.events.add("Client_ChangeFamIconState", _0x48ee8f => {
  fam_icon = parseInt(_0x48ee8f);
});
let fam_icon = 1;
mp.events.add("render", _0x3c3571 => {
  if (loggedin && (showNames && _0x3c3571 != null && _0x3c3571.forEach(_0x5c89c8 => {
    let [_0x5f1dca, _0x832d27, _0x1e228f, _0x34226c] = _0x5c89c8;
    if (_0x34226c <= 25 && _0x5f1dca.getAlpha() != 0) {
      if (!_0x5f1dca.handle) {
        return;
      }
      const _0x202489 = _0x5f1dca.getBoneCoords(23553, 0.5, 0, 0);
      if (!_0x202489) {
        return;
      }
      let _0x5d2b01;
      let _0x4b9ad3 = "";
      const _0x50b6db = _0x5f1dca.family;
      const _0x5305a5 = _0x5f1dca.getVariable("MUTE");
      const _0x323817 = _0x5f1dca.getVariable("AT_ADMIN");
      const _0x47b357 = _0x5f1dca.getVariable("DEAF_MUTE_PLAYER");
      const _0x41a4df = _0x5f1dca.member;
      if (_0x5f1dca.dead_state) {
        if (_0x5305a5 == 1) {
          _0x4b9ad3 = language["~w~<font color=\"#A0A0A0\">Heмoй</font> • "][curr_lang];
        }
        _0x4b9ad3 += language["~w~<font color=\"#F63E00\">Бeз coзнaния</font>"][curr_lang];
      } else if (_0x5f1dca.getVariable("PlayerAFK")) {
        if (_0x5305a5 == 1) {
          _0x4b9ad3 = language["~w~<font color=\"#A0A0A0\">Heмoй</font> • "][curr_lang];
        }
        _0x4b9ad3 += language["~w~<font color=\"#A0A0A0\">Bo cнe</font>"][curr_lang];
      } else if (_0x5305a5 == 1) {
        _0x4b9ad3 = language["~w~<font color=\"#A0A0A0\">Heмoй</font>"][curr_lang];
      }
      if (_0x323817 === true) {
        _0x5d2b01 = TranslateText("Aдминиcтpaтop~n~{0}~n~ID: {1}", _0x5f1dca.name.replace("_", " "), _0x5f1dca.real_id);
      } else if (is_admin === true || mp.storage.data.friends[_0x5f1dca.name] != null && !_0x5f1dca.getDrawableVariation(1) || tempfriends[_0x5f1dca.name] != null || local_family == _0x50b6db && local_family || local_member == _0x41a4df && local_member > 0 || spose_id && spose_id === _0x5f1dca.real_id) {
        _0x5d2b01 = TranslateText("{0}~n~ID: {1}", _0x5f1dca.name.replace("_", " "), _0x5f1dca.real_id);
      } else {
        let _0x4203ec = true;
        if (_0x5f1dca.model != 1885233650) {
          _0x4203ec = false;
        }
        _0x5d2b01 = TranslateText("{0} ~n~ID: {1}", _0x4203ec ? language.Heзнaкoмeц[curr_lang] : language.Heзнaкoмкa[curr_lang], _0x5f1dca.real_id);
      }
      const _0x5e8f25 = _0x323817 === true ? [255, 0, 0, 255] : [255, 255, 255, 255];
      const _0x5d421b = scalable(_0x34226c, 25);
      if (is_admin === true && _0x5f1dca.getVariable("MEDIA") == 1) {
        mp.game.graphics.drawText(language.MEDIA[curr_lang], [_0x832d27, _0x1e228f - _0x5d421b * 0.045], {
          font: 0,
          color: [255, 0, 0, 255],
          scale: [_0x5d421b * 0.3, _0x5d421b * 0.3],
          outline: true,
          centre: true
        });
      }
      if (curr_lang == "ru" && playerincapture) {
        let _0x52ddf1 = mp.raycasting.testPointToPoint(mp.players.local.getBoneCoords(12844, 0, 0, 0), _0x202489, undefined, 7);
        if (_0x52ddf1 === undefined || _0x52ddf1.entity.type !== "player") {
          if (_0x52ddf1 && typeof _0x52ddf1.entity == "number" && _0x52ddf1.entity !== 0 && mp.game.entity.doesExist(_0x52ddf1.entity)) {
            mp.game.shapetest.releaseScriptGuidFromEntity(_0x52ddf1.entity);
          }
          return;
        }
        if (_0x52ddf1 && typeof _0x52ddf1.entity == "number" && _0x52ddf1.entity !== 0 && mp.game.entity.doesExist(_0x52ddf1.entity)) {
          mp.game.shapetest.releaseScriptGuidFromEntity(_0x52ddf1.entity);
        }
      }
      if (_0x4b9ad3) {
        mp.game.graphics.drawText(_0x4b9ad3, [_0x832d27, _0x1e228f - _0x5d421b * 0.035], {
          font: 0,
          color: _0x5e8f25,
          scale: [_0x5d421b * 0.3, _0x5d421b * 0.3],
          outline: true,
          centre: true
        });
      }
      mp.game.graphics.drawText(_0x5d2b01, [_0x832d27, _0x1e228f], {
        font: 0,
        color: _0x5e8f25,
        scale: [_0x5d421b * 0.3, _0x5d421b * 0.3],
        outline: true,
        centre: true
      });
      if (mp.game.player.isFreeAimingAtEntity(_0x5f1dca.handle) && _0x34226c <= 60) {
        const _0x5ab15b = _0x5f1dca.getBoneCoords(12844, 0, 0, 0);
        if (!_0x5ab15b) {
          return;
        }
        const _0x413509 = mp.game.graphics.world3dToScreen2d(_0x5ab15b.x, _0x5ab15b.y, _0x5ab15b.z + 0.35);
        if (!_0x413509) {
          return;
        }
        const _0x4198e3 = _0x413509.x;
        let _0x1d3bc1 = _0x413509.y;
        let _0x25fcff = _0x5f1dca.getHealth();
        const _0xa65d81 = _0x5f1dca.getHealth();
        let _0xa74adb = Array(3);
        _0x25fcff = _0x25fcff <= 100 ? _0x25fcff / 100 : (_0x25fcff - 100) / 100;
        const _0x1b603d = _0x5f1dca.getArmour() / 100;
        if (_0x1b603d > 0) {
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.032, 0.006, 0, 0, 0, 200);
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.03, 0.004, 150, 150, 150, 255);
          if (_0xa65d81 >= 80) {
            _0xa74adb[0] = 0;
            _0xa74adb[1] = 220;
            _0xa74adb[2] = 0;
          } else if (_0xa65d81 >= 20 && _0xa65d81 < 80) {
            _0xa74adb[0] = 255;
            _0xa74adb[1] = 220;
            _0xa74adb[2] = 0;
          } else {
            _0xa74adb[0] = 255;
            _0xa74adb[1] = 0;
            _0xa74adb[2] = 0;
          }
          mp.game.graphics.drawRect(_0x4198e3 - (1 - _0x25fcff) * 0.015, _0x1d3bc1, _0x25fcff * 0.03, 0.004, _0xa74adb[0], _0xa74adb[1], _0xa74adb[2], 200);
          _0x1d3bc1 -= 0.007;
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.032, 0.006, 0, 0, 0, 200);
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.03, 0.004, 41, 66, 78, 255);
          mp.game.graphics.drawRect(_0x4198e3 - (1 - _0x1b603d) * 0.015, _0x1d3bc1, _0x1b603d * 0.03, 0.004, 48, 108, 135, 200);
        } else {
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.032, 0.006, 0, 0, 0, 200);
          mp.game.graphics.drawRect(_0x4198e3, _0x1d3bc1, 0.03, 0.004, 150, 150, 150, 255);
          if (_0xa65d81 >= 80) {
            _0xa74adb[0] = 0;
            _0xa74adb[1] = 220;
            _0xa74adb[2] = 0;
          } else if (_0xa65d81 >= 20 && _0xa65d81 < 80) {
            _0xa74adb[0] = 255;
            _0xa74adb[1] = 220;
            _0xa74adb[2] = 0;
          } else {
            _0xa74adb[0] = 255;
            _0xa74adb[1] = 0;
            _0xa74adb[2] = 0;
          }
          mp.game.graphics.drawRect(_0x4198e3 - (1 - _0x25fcff) * 0.015, _0x1d3bc1, _0x25fcff * 0.03, 0.004, _0xa74adb[0], _0xa74adb[1], _0xa74adb[2], 200);
        }
      }
      const _0x3dc8d4 = black_list_listeners.indexOf(parseInt(_0x5f1dca.real_id));
      if (_0x5f1dca.isVoiceActive || local_family != null && local_family == _0x50b6db && local_family || _0x3dc8d4 != -1 || spose_id && spose_id === _0x5f1dca.real_id || _0x47b357 == 1 || _0x50b6db != local_family && local_family || _0x5f1dca.real_id == bountyHunterTarget || _0x5f1dca.typingInChat) {
        const _0x574f58 = mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x5f1dca.position.x, _0x5f1dca.position.y, _0x5f1dca.position.z);
        if (_0x574f58 <= 25 && !_0x5f1dca.isOccluded() && !_0x5f1dca.isDead()) {
          const _0x2b5ca9 = _0x5f1dca.getBoneCoords(12844, 0, 0, 0);
          if (!_0x2b5ca9) {
            return;
          }
          const _0x4b759c = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1);
          if (!_0x4b759c) {
            return false;
          }
          const _0x50a1df = scalable(_0x574f58, 25);
          const _0x1f6d6d = _0x50a1df * 1.1;
          if (_0x3dc8d4 != -1) {
            const _0x8d37b = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1.1);
            if (_0x8d37b) {
              drawSprite("mpleaderboard", "leaderboard_audio_mute", [_0x1f6d6d, _0x1f6d6d], 0, [255, 0, 0, 255], _0x8d37b.x, _0x8d37b.y + _0x50a1df * 0.038);
              if (spose_id && spose_id === _0x5f1dca.real_id && spose_marker) {
                const _0x30e57e = _0x50a1df * 0.8;
                drawSprite("commonmenu", "shop_health_icon_a", [_0x30e57e, _0x30e57e], 0, [255, 102, 153, 150], _0x8d37b.x + 0.02, _0x8d37b.y + _0x50a1df * 0.038);
              } else if (_0x47b357 == 1) {
                const _0x493fd2 = _0x50a1df * 0.8;
                drawSprite("grandtextures", "deaf-mute", [_0x493fd2, _0x493fd2], 0, [255, 255, 255, 255], _0x8d37b.x + 0.02, _0x8d37b.y + _0x50a1df * 0.038);
              }
            }
          } else if (spose_id && spose_id === _0x5f1dca.real_id && spose_marker) {
            const _0x8a65fd = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1.1);
            if (_0x8a65fd) {
              const _0x5820b2 = _0x50a1df * 0.8;
              drawSprite("commonmenu", "shop_health_icon_a", [_0x5820b2, _0x5820b2], 0, [255, 102, 153, 150], _0x8a65fd.x, _0x8a65fd.y + _0x50a1df * 0.038);
            }
          } else if (_0x47b357 == 1) {
            const _0x259782 = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1.1);
            if (_0x259782) {
              const _0x20b9a5 = _0x50a1df * 0.8;
              drawSprite("grandtextures", "deaf-mute", [_0x20b9a5, _0x20b9a5], 0, [255, 255, 255, 255], _0x259782.x, _0x259782.y + _0x50a1df * 0.038);
            }
          } else if (_0x50b6db != local_family && local_family && diplomacyInfo) {
            const _0x26b723 = diplomacyInfo.findIndex(_0x15be4a => (_0x15be4a.fam1 == _0x50b6db - 1 && _0x15be4a.fam2 == local_family - 1 || _0x15be4a.fam1 == local_family - 1 && _0x15be4a.fam2 == _0x50b6db - 1) && _0x15be4a.diplomacyStatus == 2);
            const _0xc1b336 = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1.2);
            if (_0xc1b336) {
              let _0x4943f2 = "";
              let _0x508810 = "";
              let _0x2f1b03 = [255, 0, 0, 100];
              if (_0x26b723 != -1) {
                _0x4943f2 = "commonmenutu";
                _0x508810 = "deathmatch";
                drawSprite(_0x4943f2, _0x508810, [_0x1f6d6d, _0x1f6d6d], 0, _0x2f1b03, _0xc1b336.x, _0xc1b336.y + _0x50a1df * 0.038);
              }
              if (diplomacyInfo.findIndex(_0x27c8f1 => (_0x27c8f1.fam1 == _0x50b6db - 1 && _0x27c8f1.fam2 == local_family - 1 || _0x27c8f1.fam1 == local_family - 1 && _0x27c8f1.fam2 == _0x50b6db - 1) && _0x27c8f1.diplomacyStatus == 3) != -1) {
                _0x4943f2 = "commonmenutu";
                _0x508810 = "gang_attack";
                _0x2f1b03 = [51, 255, 51, 100];
                drawSprite(_0x4943f2, _0x508810, [_0x1f6d6d, _0x1f6d6d], 0, _0x2f1b03, _0xc1b336.x, _0xc1b336.y + _0x50a1df * 0.038);
              }
            }
          }
          if (local_family == _0x50b6db && local_family && mp.storage.data.fam_label == 1) {
            let _0x40dd51 = [255, 255, 255, 100];
            if (local_family) {
              if (families_colors[local_family - 1] == 1) {
                _0x40dd51 = [255, 228, 0, 100];
              } else if (families_colors[local_family - 1] == 2) {
                _0x40dd51 = [255, 0, 0, 100];
              } else if (families_colors[local_family - 1] == 3) {
                _0x40dd51 = [0, 0, 0, 100];
              }
            } else {
              _0x40dd51 = [255, 255, 255, 100];
            }
            const _0x275d1c = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 0.9);
            if (_0x275d1c) {
              let _0x1075a;
              let _0x4ab213;
              if (fam_icon == 1) {
                _0x1075a = "commonmenu";
                _0x4ab213 = "mp_hostcrown";
              } else if (fam_icon == 2) {
                _0x1075a = "commonmenu";
                _0x4ab213 = "mp_specitem_weed";
              } else if (fam_icon == 3) {
                _0x1075a = "commonmenutu";
                _0x4ab213 = "custom_mission";
              } else if (fam_icon == 4) {
                _0x1075a = "commonmenutu";
                _0x4ab213 = "deathmatch";
              } else if (fam_icon == 5) {
                _0x1075a = "commonmenutu";
                _0x4ab213 = "gang_attack";
              } else if (fam_icon == 6) {
                _0x1075a = "commonmenutu";
                _0x4ab213 = "team_deathmatch";
              } else if (fam_icon == 7) {
                _0x1075a = "mpleaderboard";
                _0x4ab213 = "leaderboard_deaths_icon";
              } else if (fam_icon == 8) {
                _0x1075a = "timerbars";
                _0x4ab213 = "boost";
              } else if (fam_icon == 9) {
                _0x1075a = "timerbars";
                _0x4ab213 = "rockets";
              }
              drawSprite(_0x1075a, _0x4ab213, [_0x1f6d6d, _0x1f6d6d], 0, _0x40dd51, _0x275d1c.x, _0x275d1c.y + _0x50a1df * 0.038);
            }
          }
          if (_0x5f1dca.isVoiceActive) {
            const _0x3f155c = false ? "leaderboard_audio_mute" : "leaderboard_audio_3";
            const _0x27a460 = [255, 255, 255, 255];
            const _0x34e682 = _0x5f1dca.in_phone_talk;
            if (_0x5f1dca.isVoiceActive && !_0x34e682) {
              drawSprite("mpleaderboard", _0x3f155c, [_0x1f6d6d, _0x1f6d6d], 0, _0x27a460, _0x4b759c.x, _0x4b759c.y + _0x50a1df * 0.038);
            } else if (_0x5f1dca.isVoiceActive && _0x34e682) {
              drawSprite("mpinventory", "mp_specitem_remote", [_0x1f6d6d, _0x1f6d6d], 0, _0x27a460, _0x4b759c.x, _0x4b759c.y + _0x50a1df * 0.038);
            }
          }
          if (_0x5f1dca.real_id == bountyHunterTarget) {
            const _0x4e0a79 = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 1.1);
            if (_0x4e0a79) {
              drawSprite("mpleaderboard", "leaderboard_kills_icon", [_0x1f6d6d, _0x1f6d6d], 0, [255, 0, 0, 100], _0x4e0a79.x, _0x4e0a79.y + _0x50a1df * 0.045);
            }
          }
          if (_0x5f1dca.typingInChat) {
            const _0xcf7c8c = mp.game.graphics.world3dToScreen2d(_0x2b5ca9.x, _0x2b5ca9.y, _0x2b5ca9.z + 0.44);
            if (_0xcf7c8c) {
              const _0x595a7e = [255, 255, 255, 120];
              const _0x4972b = Math.floor(Date.now() % 2000 / 500);
              const _0x2da4d = _0x50a1df * 0.5;
              drawSprite("grandtextures", "typing_" + _0x4972b, [_0x2da4d, _0x2da4d], 0, _0x595a7e, _0xcf7c8c.x, _0xcf7c8c.y + _0x50a1df * 0.038);
            }
          }
        }
      }
    }
  }), door_entered && door_entered.length > 0)) {
    for (let _0x5a4eb5 = 0; _0x5a4eb5 < door_entered.length; _0x5a4eb5++) {
      const _0x130404 = mp.game.system.vdist2(localplayer.position.x, localplayer.position.y, localplayer.position.z, doors[door_entered[_0x5a4eb5] - 1].position.x, doors[door_entered[_0x5a4eb5] - 1].position.y, doors[door_entered[_0x5a4eb5] - 1].position.z);
      if (_0x130404 <= squared_doors_radius) {
        const _0x592cc6 = mp.game.graphics.world3dToScreen2d(doors[door_entered[_0x5a4eb5] - 1].position.x, doors[door_entered[_0x5a4eb5] - 1].position.y, doors[door_entered[_0x5a4eb5] - 1].position.z);
        if (!_0x592cc6) {
          return false;
        }
        const _0x415286 = scalable(_0x130404, squared_doors_radius) * 0.7;
        const _0xf4bfde = doors[door_entered[_0x5a4eb5] - 1].locked ? "lock_closed" : "lock_open";
        drawSprite("Mpsafecracking", _0xf4bfde, [_0x415286, _0x415286], 0, [255, 255, 255, 255], _0x592cc6.x, _0x592cc6.y);
      }
    }
  }
});
const squared_doors_radius = 9;
let emotes_array = [];
mp.events.add("Client_PlayUniqueEmote", (_0xa08b36, _0x229eee) => {
  if (_0xa08b36 && mp.players.exists(_0xa08b36)) {
    emotes_array = [];
    const _0x101095 = getRandomInt(1000000, 9999999);
    emotes_array.push({
      target: _0xa08b36,
      emote: _0x229eee,
      duration: 500,
      id: _0x101095
    });
    setTimeout(() => {
      const _0x296066 = emotes_array.findIndex(_0x3ead56 => _0x3ead56.id == _0x101095);
      if (_0x296066 !== -1) {
        emotes_array.splice(_0x296066, 1);
      }
    }, 2500);
  }
});
const scalable = (_0x90f928, _0x1812bd) => Math.max(0.1, 1 - _0x90f928 / _0x1812bd);
let log_antiflood = new Date().getTime();
global.SendLog = function (_0x3a97f1, _0x27974f = true) {
  if (!_0x27974f || !(new Date().getTime() - log_antiflood < 500)) {
    mp.gui.chat.push(_0x3a97f1);
    if (_0x27974f) {
      log_antiflood = new Date().getTime();
    }
  }
};
global.drawSprite = (_0x54ce34, _0x840d02, _0x44f173, _0x297c48, _0x493244, _0x3d0592, _0x24deac, _0x497bca) => {
  const _0x589763 = mp.game.graphics;
  const _0x57cdc2 = _0x589763.getScreenActiveResolution(0, 0);
  const _0x7989a4 = _0x589763.getTextureResolution(_0x54ce34, _0x840d02);
  const _0x1db3b7 = [_0x44f173[0] * _0x7989a4.x / _0x57cdc2.x, _0x44f173[1] * _0x7989a4.y / _0x57cdc2.y];
  if (_0x589763.hasStreamedTextureDictLoaded(_0x54ce34)) {
    if (typeof _0x497bca == "number") {
      _0x589763.set2dLayer(_0x497bca);
    }
    _0x589763.drawSprite(_0x54ce34, _0x840d02, _0x3d0592, _0x24deac, _0x1db3b7[0], _0x1db3b7[1], _0x297c48, _0x493244[0], _0x493244[1], _0x493244[2], _0x493244[3]);
  } else {
    _0x589763.requestStreamedTextureDict(_0x54ce34, true);
  }
};
mp.events.add("Client_SetPhoneTalk", (_0x14a2fe, _0x8e87d1) => {
  if (_0x14a2fe && mp.players.exists(_0x14a2fe)) {
    _0x14a2fe.in_phone_talk = _0x8e87d1;
  }
});
let add_info = false;
mp.keys.bind(9, false, function () {
  if (loggedin && !chatActive && is_admin === true) {
    add_info = !add_info;
  }
});
let veh_add_info = false;
mp.events.add("Client_ADM_Vehicle_Info_Show", _0x17957e => {
  if (loggedin && is_admin === true) {
    veh_add_info = _0x17957e;
  }
});
let objects_add_info = false;
mp.events.add("Client_ADM_Objects_Info_Show", _0x4cae47 => {
  if (loggedin && is_admin === true) {
    objects_add_info = _0x4cae47;
  }
});
const member_names = [language.Бoльницa[curr_lang], language.Haцгвapдия[curr_lang], language.LSPD[curr_lang], language.SAHP[curr_lang], language["Иcп. кoлoния"][curr_lang], language.пpoпycк[curr_lang], language["The Ballas Gang"][curr_lang], language["The Families"][curr_lang], language["Los Santos Vagos"][curr_lang], language["Blood Street Gang"][curr_lang], language["Marabunta Grande"][curr_lang], language.FIB[curr_lang], language.LifeInvader[curr_lang], language.Пpaвитeльcтвo[curr_lang], "Русская мафия", "La Cosa Nostra", "Yakuza", "Мексиканская мафия"];
mp.events.add("Client_LanguageChanged", (_0x3349c6, _0x2451e4, _0x26b877) => {
  if (!_0x26b877 || !_0x3349c6 || !_0x2451e4) {
    return;
  }
  const _0x2a84e0 = global.buildLanguageReverseMap(_0x26b877, _0x3349c6);
  for (let _0x172752 = 0; _0x172752 < member_names.length; _0x172752++) {
    if (typeof member_names[_0x172752] == "string") {
      member_names[_0x172752] = global.retranslateTextByMap(member_names[_0x172752], _0x2a84e0, _0x2451e4);
    }
  }
});
const weapon_names = {
  2460120199: "dagger",
  2508868239: "bat",
  4192643659: "bottle",
  2227010557: "crowbar",
  2725352035: "",
  2343591895: "flashlight",
  1141786504: "golfclub",
  1317494643: "hammer",
  4191993645: "hatchet",
  3638508604: "knuckle",
  2578778090: "knife",
  3713923289: "machete",
  3756226112: "switchblade",
  1737195953: "nightstick",
  419712736: "wrench",
  3441901897: "battleaxe",
  2484171525: "poolcue",
  940833800: "stone_hatchet",
  453432689: "pistol",
  3219281620: "pistol_mk2",
  1593441988: "combatpistol",
  584646201: "appistol",
  911657153: "stungun",
  2578377531: "pistol50",
  3218215474: "snspistol",
  2285322324: "snspistol_mk2",
  3523564046: "heavypistol",
  137902532: "vintagepistol",
  1198879012: "flaregun",
  3696079510: "marksmanpistol",
  3249783761: "revolver",
  3415619887: "revolver_mk2",
  2548703416: "doubleaction",
  2939590305: "raypistol",
  727643628: "ceramicpistol",
  2441047180: "navyrevolver",
  324215364: "microsmg",
  736523883: "smg",
  2024373456: "smg_mk2",
  4024951519: "assaultsmg",
  171789620: "combatpdw",
  3675956304: "machinepistol",
  3173288789: "minismg",
  1198256469: "raycarbine",
  487013001: "pumpshotgun",
  1432025498: "pumpshotgun_mk2",
  2017895192: "sawnoffshotgun",
  3800352039: "assaultshotgun",
  2640438543: "bullpupshotgun",
  2828843422: "musket",
  984333226: "heavyshotgun",
  4019527611: "dbshotgun",
  317205821: "autoshotgun",
  3220176749: "assaultrifle",
  961495388: "assaultrifle_mk2",
  2210333304: "carbinerifle",
  4208062921: "carbinerifle_mk2",
  2937143193: "advancedrifle",
  3231910285: "specialcarbine",
  2526821735: "specialcarbine_mk2",
  2132975508: "bullpuprifle",
  2228681469: "bullpuprifle_mk2",
  1649403952: "compactrifle",
  2634544996: "mg",
  2144741730: "combatmg",
  3686625920: "combatmg_mk2",
  1627465347: "gusenberg",
  100416529: "sniperrifle",
  205991906: "heavysniper",
  177293209: "heavysniper_mk2",
  3342088282: "marksmanrifle",
  1785463520: "marksmanrifle_mk2",
  2982836145: "rpg",
  2726580491: "grenadelauncher",
  1305664598: "grenadelauncher_smoke",
  1119849093: "minigun",
  2138347493: "firework",
  1834241177: "railgun",
  1672152130: "hominglauncher",
  125959754: "compactlauncher",
  3056410471: "rayminigun",
  2481070269: "grenade",
  2694266206: "bzgas",
  4256991824: "smokegrenade",
  1233104067: "flare",
  615608432: "molotov",
  741814745: "stickybomb",
  2874559379: "proxmine",
  126349499: "snowball",
  3125143736: "pipebomb",
  600439132: "ball",
  883325847: "petrolcan",
  101631238: "fireextinguisher",
  4222310262: "parachute",
  3126027122: "hazardcan"
};
mp.events.add("Client_LoadUnofOrgs", _0x430a0e => {
  unoff_orgs = _0x430a0e;
});
let unoff_orgs = [];
mp.events.add("render", () => {
  if (!loggedin || !add_info || is_admin !== true) {
    return;
  }
  const _0x5ce608 = in_another_spectate ? 150 : 50;
  mp.players.forEachInStreamRange(_0x49eb58 => {
    if (!mp.players.exists(_0x49eb58) || !_0x49eb58.handle) {
      return;
    }
    const _0x396465 = _0x49eb58.getBoneCoords(23553, 0.5, 0, 0);
    if (!_0x396465 || _0x396465.x === 0 && _0x396465.y === 0 && _0x396465.z === 0) {
      return;
    }
    if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x396465.x, _0x396465.y, _0x396465.z) > _0x5ce608) {
      return;
    }
    let _0x289fc0 = "";
    let _0x53c066 = "";
    let _0x905e71 = "";
    if (_0x49eb58.family != null) {
      const _0x1f0b20 = unoff_orgs.indexOf(parseInt(_0x49eb58.family)) == -1 ? "" : "(Unoff org)";
      _0x905e71 = TranslateText("\nFam: {0}{1}", _0x49eb58.family, _0x1f0b20);
    }
    if (_0x49eb58.getVariable("Fib_Spy") != null) {
      _0x289fc0 = TranslateText("\n~r~Real ID: {0}", _0x49eb58.getVariable("Fib_Spy"));
    }
    if (_0x49eb58.getVariable("MEDIA") == 1) {
      _0x53c066 = language["\n~r~MEDIA"][curr_lang];
    }
    let _0x1cd526 = 0;
    if (_0x49eb58.dead_state) {
      _0x1cd526 = -1;
    }
    let _0x3505ad = "";
    if (_0x49eb58.member > 0) {
      _0x3505ad = TranslateText("\nOrg: {0}", member_names[_0x49eb58.member - 1]);
    }
    let _0x3d8b2a = TranslateText("\nWeapon: {0}", weapon_names[_0x49eb58.weapon]);
    if (!weapon_names[_0x49eb58.weapon]) {
      _0x3d8b2a = "";
    }
    const _0x16fbc4 = _0x49eb58.getArmour() > 0 ? _0x49eb58.getArmour() : 0;
    mp.game.graphics.drawText(TranslateText("[{0}] {1} [{2}/{3}]{4}{5}{6}{7}", _0x49eb58.real_id, _0x49eb58.name, _0x49eb58.getHealth(), _0x16fbc4, _0x905e71, _0x3505ad, _0x289fc0, _0x53c066), [_0x396465.x, _0x396465.y, _0x396465.z + _0x1cd526], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.4, 0.4],
      outline: true
    });
    mp.game.graphics.drawText("" + _0x3d8b2a, [_0x396465.x, _0x396465.y, _0x396465.z - 1 + _0x1cd526], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.4, 0.4],
      outline: true
    });
  });
});
mp.events.add("render", () => {
  if (!loggedin || !veh_add_info || is_admin !== true) {
    return;
  }
  const _0x328229 = in_another_spectate ? 22500 : 2500;
  mp.vehicles.forEachInStreamRange(_0x2f672b => {
    if (mp.vehicles.exists(_0x2f672b) && _0x2f672b.doesntappear != 1) {
      const _0x1b3e0d = mp.game.system.vdist2(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x2f672b.position.x, _0x2f672b.position.y, _0x2f672b.position.z);
      if (_0x1b3e0d <= _0x328229) {
        const _0x2493ca = scalable(_0x1b3e0d, _0x328229) * 0.4;
        mp.game.graphics.drawText(TranslateText("ID: {0}\nПрочность: {1}\nModel: {2}\nSpeed: {3}", _0x2f672b.remoteId, Math.round(_0x2f672b.getEngineHealth()), mp.game.vehicle.getDisplayNameFromVehicleModel(_0x2f672b.model), Math.round(getspeedofveh(_0x2f672b))), [_0x2f672b.position.x, _0x2f672b.position.y, _0x2f672b.position.z + 0.5], {
          font: 0,
          color: [255, 255, 255, 185],
          scale: [_0x2493ca, _0x2493ca],
          outline: true
        });
      }
    }
  });
});
let addControllerInfo = false;
mp.events.add("Client_AllowControllerInfo", _0x48bfba => {
  if (loggedin && is_admin === true) {
    addControllerInfo = _0x48bfba;
  }
});
mp.events.add("Client_GetControllers", _0x24b339 => {
  let _0xc44082 = null;
  if (mp.vehicles) {
    if (typeof mp.vehicles.atRemoteId == "function") {
      _0xc44082 = mp.vehicles.atRemoteId(_0x24b339);
    } else if (typeof mp.vehicles.at == "function") {
      _0xc44082 = mp.vehicles.at(_0x24b339);
    } else if (typeof mp.vehicles.toArray == "function") {
      _0xc44082 = mp.vehicles.toArray().find(_0x468203 => _0x468203.remoteId == _0x24b339);
    } else if (typeof mp.vehicles.forEach == "function") {
      mp.vehicles.forEach(_0x326e7e => {
        if (!_0xc44082 && _0x326e7e && _0x326e7e.remoteId == _0x24b339) {
          _0xc44082 = _0x326e7e;
        }
      });
    }
  }
  if (_0xc44082 && _0xc44082.lastControllers) {
    _0xc44082.lastControllers.forEach(_0x2a4b0b => {
      mp.gui.chat.push("VEH[" + _0x24b339 + "] controller: " + _0x2a4b0b);
    });
  }
});
mp.events.add("entityControllerChange", (_0x30fb19, _0x40a4b6) => {
  if (loggedin && addControllerInfo && is_admin && _0x30fb19.type == "vehicle") {
    mp.gui.chat.push(_0x30fb19.type + "(ClientID: " + _0x30fb19.remoteId + ") has switched to a new controller [" + (_0x40a4b6 ? _0x40a4b6.name : "Nobody") + "]");
  }
  if (_0x30fb19.type == "vehicle" && _0x40a4b6 && _0x40a4b6.name) {
    _0x30fb19.lastControllers ||= [];
    if (_0x30fb19.lastControllers.indexOf(_0x40a4b6.name) == -1) {
      _0x30fb19.lastControllers.push(_0x40a4b6.name);
      if (_0x30fb19.lastControllers.length > 20) {
        _0x30fb19.lastControllers.splice(0, 1);
      }
    }
  }
});
mp.events.add("render", () => {
  if (!loggedin || !objects_add_info || is_admin !== true) {
    return;
  }
  mp.objects.forEachInStreamRange(_0x2fd746 => {
    if (mp.objects.exists(_0x2fd746)) {
      const _0x1e9754 = mp.game.system.vdist2(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x2fd746.position.x, _0x2fd746.position.y, _0x2fd746.position.z);
      if (_0x1e9754 <= 2500) {
        const _0x1ec54f = scalable(_0x1e9754, 2500) * 0.4;
        mp.game.graphics.drawText("ID: " + _0x2fd746.remoteId, [_0x2fd746.position.x, _0x2fd746.position.y, _0x2fd746.position.z + 0.5], {
          font: 0,
          color: [255, 255, 255, 185],
          scale: [_0x1ec54f, _0x1ec54f],
          outline: true
        });
      }
    }
  });
});