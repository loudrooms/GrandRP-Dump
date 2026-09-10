mp.game.controls.useDefaultVehicleEntering = false;
global.is_sitting_anim = false;
const VEHICLE_ENTER_STUCK_MS = 2000;
const VEHICLE_ENTER_TASK_IDS = [160, 165, 167];
let pendingVehicleEnter = null;
function clearPendingVehicleEnter() {
  pendingVehicleEnter = null;
  is_sitting_anim = false;
}
function beginVehicleEnter(_0x34e726, _0x58c630) {
  pendingVehicleEnter = {
    vehicle: _0x34e726,
    seat: _0x58c630,
    startedAt: Date.now()
  };
  is_sitting_anim = true;
}
function fixStuckVehicleEnterAnimation() {
  if (!loggedin) {
    return;
  }
  if (mp.players.local.vehicle) {
    clearPendingVehicleEnter();
    return;
  }
  if (!is_sitting_anim || !pendingVehicleEnter) {
    return;
  }
  const {
    vehicle: _0xedaf26,
    seat: _0x2989c3,
    startedAt: _0x3a1b5b
  } = pendingVehicleEnter;
  if (!mp.vehicles.exists(_0xedaf26) || !_0xedaf26.handle) {
    clearPendingVehicleEnter();
    mp.players.local.clearTasksImmediately();
    return;
  }
  if (!(Date.now() - _0x3a1b5b < 2000) || !VEHICLE_ENTER_TASK_IDS.some(_0x5c23e1 => mp.players.local.getIsTaskActive(_0x5c23e1))) {
    if (!isGtaSeatFree(_0xedaf26, _0x2989c3)) {
      clearPendingVehicleEnter();
      mp.players.local.clearTasksImmediately();
      return;
    }
    mp.players.local.clearTasksImmediately();
    mp.players.local.taskWarpIntoVehicle(_0xedaf26.handle, _0x2989c3);
    clearPendingVehicleEnter();
  }
}
mp.events.add("render", () => {
  if (loggedin) {
    if (mobileOpen) {
      mp.game.controls.disableControlAction(2, 75, true);
    }
    mp.game.controls.disableControlAction(0, 23, true);
  }
});
mp.events.add("playerEnterVehicle", (_0x36773d, _0x54c336) => {
  if (_0x36773d && mp.vehicles.exists(_0x36773d)) {
    clearPendingVehicleEnter();
    if (new_version == 1) {
      vehicle_health = _0x36773d.getEngineHealth();
      vehicleBodyHealth = _0x36773d.getBodyHealth();
    }
  }
});
mp.events.add("Client_VehicleEntered", () => {
  clearPendingVehicleEnter();
});
mp.events.add("playerLeaveVehicle", (_0x3ea8f7, _0x10b7c9) => {
  clearPendingVehicleEnter();
});
setInterval(fixStuckVehicleEnterAnimation, 1000);
const vehiclesBones = ["seat_dside_f", "seat_pside_f", "seat_dside_r", "seat_pside_r", "seat_dside_r1", "seat_pside_r1", "seat_pside_r2", "seat_dside_r2", "seat_pside_r3", "seat_pside_r3", "seat_dside_r4", "seat_pside_r4", "seat_dside_r5", "seat_pside_r5", "seat_dside_r6", "seat_pside_r6", "seat_dside_r7", "seat_pside_r7"];
function getClosestVehicle(_0x5936d7) {
  let _0x2aefa3 = null;
  let _0x2b66c4 = _0x5936d7;
  mp.vehicles.forEachInStreamRange(_0x42f9da => {
    if (!mp.vehicles.exists(_0x42f9da)) {
      return;
    }
    const _0x350ad1 = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, _0x42f9da.position.x, _0x42f9da.position.y, _0x42f9da.position.z);
    if (_0x350ad1 < _0x2b66c4) {
      _0x2aefa3 = _0x42f9da;
      _0x2b66c4 = _0x350ad1;
    }
  });
  return _0x2aefa3;
}
function isGtaSeatFree(_0x5cae86, _0x1ef42a) {
  return !(_0x1ef42a < -1) && !(_0x1ef42a > 6) && _0x5cae86.isSeatFree(_0x1ef42a);
}
function getGtaSeatDistance(_0x15c423, _0x368839, _0x392b45) {
  const _0x220f9c = _0x392b45 + 1;
  if (_0x220f9c < 0 || _0x220f9c >= vehiclesBones.length) {
    return Infinity;
  }
  const _0x1f0448 = vehiclesBones[_0x220f9c];
  const _0x1d29ed = _0x368839.getBoneIndexByName(_0x1f0448);
  if (_0x1d29ed === -1) {
    return Infinity;
  }
  const _0x1d7b47 = _0x368839.getWorldPositionOfBone(_0x1d29ed);
  return mp.game.system.vdist(_0x15c423.position.x, _0x15c423.position.y, _0x15c423.position.z, _0x1d7b47.x, _0x1d7b47.y, _0x1d7b47.z);
}
function findAnyFreeSeat(_0x205feb) {
  for (let _0x2ae5ed = -1; _0x2ae5ed <= 6; _0x2ae5ed++) {
    if (isGtaSeatFree(_0x205feb, _0x2ae5ed)) {
      return _0x2ae5ed;
    }
  }
  return null;
}
function findNearestFreeSeat(_0x2255f1, _0x27cfbf) {
  let _0x2251d6 = null;
  let _0x4e9b80 = Number.MAX_SAFE_INTEGER;
  for (let _0x32a149 = -1; _0x32a149 <= 6; _0x32a149++) {
    if (!isGtaSeatFree(_0x27cfbf, _0x32a149)) {
      continue;
    }
    const _0x5886ce = getGtaSeatDistance(_0x2255f1, _0x27cfbf, _0x32a149);
    if (_0x5886ce < _0x4e9b80) {
      _0x4e9b80 = _0x5886ce;
      _0x2251d6 = _0x32a149;
    }
  }
  if (_0x2251d6 !== null && _0x4e9b80 !== Infinity) {
    return _0x2251d6;
  } else {
    return findAnyFreeSeat(_0x27cfbf);
  }
}
function getDriverSeatID(_0x3c80a7, _0x3baeff) {
  let _0x510d18 = 100;
  let _0x17c6a5 = "";
  vehiclesBones.forEach(_0x3980cb => {
    let _0x28ff87 = _0x3baeff.getBoneIndexByName(_0x3980cb);
    if (_0x28ff87 != -1) {
      const _0x5a0de0 = _0x3baeff.getWorldPositionOfBone(_0x28ff87);
      const _0x245ef0 = mp.game.system.vdist(_0x3c80a7.position.x, _0x3c80a7.position.y, _0x3c80a7.position.z, _0x5a0de0.x, _0x5a0de0.y, _0x5a0de0.z);
      if (_0x245ef0 < _0x510d18) {
        _0x510d18 = _0x245ef0;
        _0x17c6a5 = _0x3980cb;
      }
    }
  });
  let _0x59ea35 = -1;
  if (_0x510d18 <= 10) {
    for (let _0x4d66aa = 0; _0x4d66aa < vehiclesBones.length; _0x4d66aa++) {
      if (vehiclesBones[_0x4d66aa] == _0x17c6a5) {
        _0x59ea35 = _0x4d66aa - 1;
        break;
      }
    }
  } else if (mp.game.vehicle.isThisModelABike(_0x3baeff.model)) {
    if (isGtaSeatFree(_0x3baeff, -1)) {
      _0x59ea35 = -1;
    } else if (isGtaSeatFree(_0x3baeff, 0)) {
      _0x59ea35 = 0;
    }
  }
  return _0x59ea35;
}
mp.keys.bind(70, true, function () {
  if (mp.players.local.vehicle && mp.players.local.getIsTaskActive(165)) {
    mp.players.local.clearTasksImmediately();
    clearPendingVehicleEnter();
    return;
  }
  if (mp.players.local.vehicle || chatActive || !loggedin) {
    return;
  }
  if (mp.players.local.getIsTaskActive(16) || mp.players.local.isRagdoll()) {
    return;
  }
  if (mp.players.local.isFalling()) {
    return;
  }
  if (global.isLocalPlayerHasActiveFollowTarget || global.isLocalPlayerKnockedDown) {
    return;
  }
  if (mobileOpen) {
    return;
  }
  const _0x4dd80d = getClosestVehicle(10);
  if (mp.vehicles.exists(_0x4dd80d) && !_0x4dd80d.being_attached) {
    if (is_sitting_anim == 1) {
      mp.players.local.clearTasksImmediately();
      clearPendingVehicleEnter();
      return;
    }
    if (!GlobalCheck() || GlobalCheck() == 1 && at_pubg || GlobalCheck() == 1 && at_duel_location) {
      let _0x339162 = getDriverSeatID(localplayer, _0x4dd80d);
      if (!isGtaSeatFree(_0x4dd80d, _0x339162)) {
        const _0xa02f7e = findNearestFreeSeat(localplayer, _0x4dd80d);
        if (_0xa02f7e === null) {
          return;
        }
        _0x339162 = _0xa02f7e;
      }
      if (!isGtaSeatFree(_0x4dd80d, _0x339162)) {
        return;
      }
      if (_0x339162 < 5) {
        if (!_0x4dd80d || _0x4dd80d.getVariable("Locked") || _0x4dd80d.getDoorLockStatus() == 2) {
          return;
        }
        const _0x5e2861 = mp.players.local.isRunning() ? 2 : 1;
        beginVehicleEnter(_0x4dd80d, _0x339162);
        mp.players.local.taskEnterVehicle(_0x4dd80d.handle, -1, _0x339162, _0x5e2861, 1, 0);
      } else {
        if (!_0x4dd80d || _0x4dd80d.getVariable("Locked") || _0x4dd80d.getDoorLockStatus() == 2) {
          return;
        }
        beginVehicleEnter(_0x4dd80d, _0x339162);
        mp.players.local.taskWarpIntoVehicle(_0x4dd80d.handle, _0x339162);
      }
    }
  }
});