const attractionsConfig = {
  [mp.game.joaat("toro2")]: {
    label: "Banana",
    model: "banana",
    seatOffsets: [{
      position: new mp.Vector3(0, 1.788, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }, {
      position: new mp.Vector3(0, 0.971, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }, {
      position: new mp.Vector3(0, 0.145, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }, {
      position: new mp.Vector3(0, -0.674, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }, {
      position: new mp.Vector3(0, -1.504, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }, {
      position: new mp.Vector3(0, -2.327, 0.869),
      rotation: new mp.Vector3(0, 0, 0)
    }],
    animDict: "sit_bananaanimation",
    animName: "sit_banana_clip",
    zLift: 0.5,
    boatAttachOffset: new mp.Vector3(0, -2.9, 0),
    trailerAttachOffset: new mp.Vector3(0, 1.15, 0),
    ropeType: 7,
    rope: {
      initLength: 20,
      maxLength: 20,
      minLength: 5
    },
    physics: {
      mass: 400,
      gravityFactor: -1,
      linearC: -1,
      linearV: -1,
      linearV2: -1,
      angularC: -1,
      angularV: -1,
      angularV2: -1,
      p9: -1,
      maxAngSpeed: 100,
      buoyancyFactor: 10
    }
  },
  [mp.game.joaat("toro")]: {
    label: "Infla",
    model: "vatrushka",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 0.6),
      rotation: new mp.Vector3(0, 0, 0)
    }],
    animDict: "infla_group_circleanimation",
    animName: "infla_group_circle_clip",
    zLift: 0.5,
    boatAttachOffset: new mp.Vector3(0, -2.3, 0),
    trailerAttachOffset: new mp.Vector3(0, 1, 0),
    ropeType: 7,
    rope: {
      initLength: 20,
      maxLength: 20,
      minLength: 5
    },
    physics: {
      mass: 400,
      gravityFactor: -1,
      linearC: -1,
      linearV: -1,
      linearV2: -1,
      angularC: -1,
      angularV: -1,
      angularV2: -1,
      p9: -1,
      maxAngSpeed: 100,
      buoyancyFactor: 10
    }
  }
};
let driverTimerShowed = false;
const TIMER_HUD_INFO = [{
  name: "timer",
  title: language["Время до конца"][curr_lang],
  value: 240,
  isTimer: true
}];
const ANIMS_IN = {
  [mp.game.joaat("banana")]: {
    animDict: "sit_bananaanimation",
    animName: "sit_banana_clip",
    flag: 1
  },
  [mp.game.joaat("vatrushka")]: {
    animDict: "infla_group_circleanimation",
    animName: "infla_group_circle_clip",
    flag: -1
  }
};
const VEHICLES_TO_LOCK_CONTROLS = [mp.game.joaat("banana"), mp.game.joaat("vatrushka")];
const reattachQueue = new Map();
const mattressesModels = ["inf_bed_1", "inf_bed_2", "inf_bed_3", "inf_bed_4", "inf_bed_5", "inf_bed_6", "inf_bed_7", "inf_bed_8", "big_inf_bed_1", "big_inf_bed_2", "big_inf_bed_3", "big_inf_bed_4", "big_inf_bed_5", "big_inf_bed_6", "big_inf_bed_7", "big_inf_bed_8"].map(_0x3a383e => mp.game.joaat(_0x3a383e));
const mattressesData = {
  [mp.game.joaat("inf_bed_1")]: {
    model: "inf_bed_1",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_2")]: {
    model: "inf_bed_2",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_3")]: {
    model: "inf_bed_3",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_4")]: {
    model: "inf_bed_4",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_5")]: {
    model: "inf_bed_5",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_6")]: {
    model: "inf_bed_6",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_7")]: {
    model: "inf_bed_7",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("inf_bed_8")]: {
    model: "inf_bed_8",
    seatOffsets: [{
      position: new mp.Vector3(0, 0, 1),
      rotation: new mp.Vector3(0, 0, 0)
    }]
  },
  [mp.game.joaat("big_inf_bed_1")]: {
    model: "big_inf_bed_1",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_2")]: {
    model: "big_inf_bed_2",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_3")]: {
    model: "big_inf_bed_3",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_4")]: {
    model: "big_inf_bed_4",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_5")]: {
    model: "big_inf_bed_5",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_6")]: {
    model: "big_inf_bed_6",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_7")]: {
    model: "big_inf_bed_7",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  },
  [mp.game.joaat("big_inf_bed_8")]: {
    model: "big_inf_bed_8",
    seatOffsets: [{
      position: new mp.Vector3(0, -1.629, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.855, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, -0.064, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 0.686, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }, {
      position: new mp.Vector3(0, 1.475, 1.109),
      rotation: new mp.Vector3(0, 0, -89.050003)
    }]
  }
};
const mattressesReattachQueue = new Map();
function attachPlayersToTrailer(_0xea3aa1, _0x112de9, _0x1caf33) {
  if (!mp.objects.exists(_0xea3aa1)) {
    return;
  }
  const _0xb770e8 = attractionsConfig[_0x112de9];
  _0x1caf33.forEach((_0x2c3316, _0x31b070) => {
    const _0x47337e = mp.players.atRemoteId(_0x2c3316);
    if (!mp.players.exists(_0x47337e) || _0x47337e.handle === 0) {
      reattachQueue.set(_0x2c3316, {
        trailer: _0xea3aa1,
        type: _0x112de9,
        index: _0x31b070
      });
      return;
    }
    const _0x4b8923 = _0xb770e8.seatOffsets[_0x31b070];
    _0x47337e.attachTo(_0xea3aa1.handle, 0, _0x4b8923.position.x, _0x4b8923.position.y, _0x4b8923.position.z, _0x4b8923.rotation.x, _0x4b8923.rotation.y, _0x4b8923.rotation.z, false, false, false, false, 2, true);
    global.play_animation2(_0x47337e, _0xb770e8.animDict, _0xb770e8.animName, 8, -8, -1, 1, 0, false, false, false);
  });
}
const customTrailerAttachQueue = new Map();
function attachTrailerToBoat(_0x25f8ff) {
  if (!mp.vehicles.exists(_0x25f8ff)) {
    return;
  }
  if (typeof _0x25f8ff.getVariable("customTrailer") != "number") {
    return;
  }
  const _0x17339e = _0x25f8ff.model;
  const _0x38e40b = attractionsConfig[_0x17339e];
  const _0x4b271f = parseInt(_0x25f8ff.getVariable("customTrailer"));
  const _0x52bb4d = mp.vehicles.atRemoteId(_0x4b271f);
  if (_0x52bb4d && mp.vehicles.exists(_0x52bb4d) && _0x52bb4d.handle !== 0) {
    _0x25f8ff.customTrailer = _0x52bb4d;
    customTrailerAttachQueue.delete(_0x4b271f);
  } else {
    customTrailerAttachQueue.set(_0x4b271f, _0x25f8ff.remoteId);
  }
  if (_0x25f8ff.customTrailer && mp.vehicles.exists(_0x25f8ff.customTrailer) && _0x25f8ff.handle !== 0 && _0x25f8ff.customTrailer.handle !== 0) {
    try {
      mp.game.invoke("0x9B9039DBF2D258C1");
    } catch (_0x3c1575) {}
    let _0x4bbddd = null;
    try {
      const _0x2fdbbd = _0x25f8ff.position;
      _0x4bbddd = mp.game.rope.addRope(_0x2fdbbd.x, _0x2fdbbd.y, _0x2fdbbd.z, 0, 0, 0, _0x38e40b.rope.maxLength, _0x38e40b.ropeType || 4, _0x38e40b.rope.initLength, _0x38e40b.rope.minLength, 0.5, false, false, false, 1, false, 0);
    } catch (_0x15c9eb) {
      mp.console.logInfo(String(_0x15c9eb && _0x15c9eb.message ? _0x15c9eb.message : _0x15c9eb));
    }
    const _0x3c06ca = _0x4bbddd && _0x4bbddd.result !== undefined ? _0x4bbddd.result : _0x4bbddd;
    if (_0x3c06ca != null && _0x3c06ca !== 0) {
      _0x25f8ff.ropeId = _0x3c06ca;
      _0x25f8ff.customTrailer.ropeId = _0x3c06ca;
      setTimeout(() => {
        if (mp.vehicles.exists(_0x25f8ff.customTrailer) && mp.vehicles.exists(_0x25f8ff)) {
          try {
            const _0x3bec16 = _0x25f8ff.getOffsetFromInWorldCoords(_0x38e40b.boatAttachOffset.x, _0x38e40b.boatAttachOffset.y, _0x38e40b.boatAttachOffset.z);
            const _0x6ae8b2 = _0x25f8ff.customTrailer.getOffsetFromInWorldCoords(_0x38e40b.trailerAttachOffset.x, _0x38e40b.trailerAttachOffset.y, _0x38e40b.trailerAttachOffset.z);
            mp.game.rope.attachEntitiesToRope(_0x3c06ca, _0x25f8ff.handle, _0x25f8ff.customTrailer.handle, _0x3bec16.x, _0x3bec16.y, _0x3bec16.z, _0x6ae8b2.x, _0x6ae8b2.y, _0x6ae8b2.z, _0x38e40b.rope.initLength, false, false, 0, 0);
          } catch (_0x52abfc) {
            mp.console.logInfo(String(_0x52abfc && _0x52abfc.message ? _0x52abfc.message : _0x52abfc));
          }
        }
      }, 300);
    }
  }
}
function detachTrailerFromBoat(_0x31635c) {
  if (mp.vehicles.exists(_0x31635c)) {
    if (typeof _0x31635c.ropeId == "number") {
      mp.game.rope.deleteRope(_0x31635c.ropeId);
      delete _0x31635c.ropeId;
    }
    if (_0x31635c.customTrailer !== undefined) {
      delete _0x31635c.customTrailer;
    }
  }
}
mp.events.add("entityStreamIn", _0x6eed70 => {
  try {
    if (!_0x6eed70) {
      return;
    }
    if (_0x6eed70.type === "vehicle") {
      if (attractionsConfig.hasOwnProperty(_0x6eed70.model)) {
        attachTrailerToBoat(_0x6eed70);
      } else if (customTrailerAttachQueue.has(_0x6eed70.remoteId)) {
        const _0x102817 = mp.vehicles.atRemoteId(customTrailerAttachQueue.get(_0x6eed70.remoteId));
        if (_0x102817 && mp.vehicles.exists(_0x102817) && _0x102817.handle !== 0) {
          attachTrailerToBoat(_0x102817);
        }
      }
    }
    if (_0x6eed70.type === "object" && isFloatingMattress(_0x6eed70)) {
      setupMattressFloating(_0x6eed70);
      mattressesAttachPlayers(_0x6eed70);
    } else if (_0x6eed70.type === "player" && mattressesReattachQueue.has(_0x6eed70.remoteId)) {
      const _0x19e5a6 = mattressesReattachQueue.get(_0x6eed70.remoteId);
      if (_0x19e5a6 && mp.objects.exists(_0x19e5a6.object)) {
        mattressesReattachQueue.delete(_0x6eed70.remoteId);
        _0x6eed70.attachTo(_0x19e5a6.object.handle, 0, _0x19e5a6.offset.position.x, _0x19e5a6.offset.position.y, _0x19e5a6.offset.position.z, _0x19e5a6.offset.rotation.x, _0x19e5a6.offset.rotation.y, _0x19e5a6.offset.rotation.z, false, false, false, false, 1, true);
      }
    }
    if (_0x6eed70.type === "vehicle" && typeof _0x6eed70.getVariable(PARACHUTE_VARIABLE) == "number") {
      createParachuteForBoat(_0x6eed70);
    } else if (_0x6eed70.type === "player" && parachuteReattachQueue.has(_0x6eed70.remoteId)) {
      const _0x2a5131 = parachuteReattachQueue.get(_0x6eed70.remoteId);
      parachuteReattachQueue.delete(_0x6eed70.remoteId);
      if (_0x2a5131 && mp.vehicles.exists(_0x2a5131.boat)) {
        const _0x37085d = parachuteAttractions.get(_0x2a5131.boat.remoteId);
        if (_0x37085d) {
          tryAttachPlayerToParachute(_0x37085d);
        }
      }
    }
    if (_0x6eed70.type === "object" && _0x6eed70.isParachute) {
      setupParachuteObjectPhysics(_0x6eed70);
      const _0xafce5d = _0x6eed70.parachuteBoat;
      if (_0xafce5d && mp.vehicles.exists(_0xafce5d)) {
        const _0x33a884 = parachuteAttractions.get(_0xafce5d.remoteId);
        if (_0x33a884 && _0x33a884.object === _0x6eed70) {
          syncParachuteObjectToBoat(_0x6eed70, _0xafce5d, _0x33a884.height || 0);
          tryAttachPlayerToParachute(_0x33a884);
        }
      }
    }
  } catch (_0x216b7b) {
    mp.console.logInfo(String(_0x216b7b && _0x216b7b.message ? _0x216b7b.message : _0x216b7b));
  }
});
mp.events.add("entityStreamOut", _0xe84965 => {
  try {
    if (!_0xe84965) {
      return;
    }
    if (_0xe84965.type === "vehicle") {
      if (attractionsConfig.hasOwnProperty(_0xe84965.model)) {
        detachTrailerFromBoat(_0xe84965);
      } else if (_0xe84965.attachedToBoat) {
        detachTrailerFromBoat(_0xe84965.attachedToBoat);
      }
      if (attractionTrackedVehicle && _0xe84965 === attractionTrackedVehicle) {
        destroyAttractionCheckpoints();
      }
    }
    if (_0xe84965.type === "object" && _0xe84965.mattressFloat) {
      teardownMattressFloating(_0xe84965);
      mattressesDetachPlayers(_0xe84965);
    }
    if (_0xe84965.type === "vehicle" && _0xe84965.getVariable(PARACHUTE_VARIABLE)) {
      destroyParachuteForBoat(_0xe84965);
    }
  } catch (_0x20df8c) {
    mp.console.logInfo(String(_0x20df8c && _0x20df8c.message ? _0x20df8c.message : _0x20df8c));
  }
});
mp.events.addDataHandler("banana", (_0x3d75c1, _0x36ed6e) => {
  if (_0x3d75c1 && _0x3d75c1.type === "vehicle" && Array.isArray(_0x36ed6e)) {
    attachPlayersToTrailer(_0x3d75c1.customTrailer, "banana", _0x36ed6e);
  }
});
mp.events.addDataHandler("infla", (_0x42007a, _0x47b09a) => {
  if (_0x42007a && _0x42007a.type === "vehicle" && Array.isArray(_0x47b09a)) {
    attachPlayersToTrailer(_0x42007a.customTrailer, "infla", _0x47b09a);
  }
});
mp.events.addDataHandler("infla2", (_0x4ca58c, _0x18c854) => {
  if (_0x4ca58c && _0x4ca58c.type === "vehicle" && Array.isArray(_0x18c854)) {
    attachPlayersToTrailer(_0x4ca58c.customTrailer, "infla2", _0x18c854);
  }
});
mp.events.addDataHandler("customTrailer", (_0x5144de, _0x12bb25, _0x5a5510) => {
  if (typeof _0x12bb25 == "number") {
    attachTrailerToBoat(_0x5144de);
    maybeStartAttractionCheckpointsForBoat(_0x5144de);
  }
  if (!driverTimerShowed && localplayer.vehicle === _0x5144de && isEventDrivingBoat(_0x5144de)) {
    driverTimerShowed = true;
    main_browser.execute("\n            APPS.state.hud.show_luna_park_timer_info = " + JSON.stringify(TIMER_HUD_INFO) + ";\n            APPS.state.hud.show_luna_park_timer = true;\n        ");
  }
});
const PARACHUTE_VARIABLE = "parachutePlayerId";
const PARACHUTE_PROP_MODEL = "p_parachute1_mp_s";
const PARACHUTE_PROP_HASH = mp.game.joaat(PARACHUTE_PROP_MODEL);
const PARACHUTE_ANIM_DICT = "skydive@parachute@";
const PARACHUTE_ANIM_NAME = "chute_landing";
const PARACHUTE_TICK_MS = 25;
const PARACHUTE_HEIGHT_STEP = 0.1;
const PARACHUTE_MAX_HEIGHT = 30;
const PARACHUTE_SPEED_FACTOR = 0.25;
const PARACHUTE_BOAT_BACK_OFFSET = -10;
const PARACHUTE_BASE_Z = 4;
const PARACHUTE_ATTACH_PITCH = -5;
const PARACHUTE_VISUAL_YAW_OFFSET = 180;
const PARACHUTE_SEAT_OFFSET = {
  x: 0,
  y: 0.055,
  z: -3.9
};
const PARACHUTE_BOAT_ROPE_OFFSET = new mp.Vector3(0, -4, 0.25);
const PARACHUTE_PROP_ROPE_OFFSET = new mp.Vector3(0, 0, -2.35);
const PARACHUTE_ROPE_TYPE = 5;
const PARACHUTE_ROPE_LENGTH = {
  min: 15,
  max: 80,
  init: 80
};
const parachuteAttractions = new Map();
const parachuteReattachQueue = new Map();
let parachutePhysicsInterval = null;
function setLocalParachuteSeatState(_0xde2a9f) {
  global.seatOnSummer2026Parachute = !!_0xde2a9f;
}
function isLocalPlayerParachuteRider(_0x525ab0) {
  return _0x525ab0 === localplayer.remoteId;
}
function loadParachuteModel(_0x280050) {
  if (mp.game.streaming.hasModelLoaded(PARACHUTE_PROP_HASH)) {
    _0x280050();
    return;
  }
  mp.game.streaming.requestModel(PARACHUTE_PROP_HASH);
  let _0x229afa = 0;
  const _0x16a5cf = setInterval(() => {
    _0x229afa++;
    if (mp.game.streaming.hasModelLoaded(PARACHUTE_PROP_HASH)) {
      clearInterval(_0x16a5cf);
      _0x280050();
    } else if (_0x229afa > 200) {
      clearInterval(_0x16a5cf);
    }
  }, 25);
}
function loadParachuteAnimDict(_0x4af2f2) {
  if (mp.game.streaming.hasAnimDictLoaded(PARACHUTE_ANIM_DICT)) {
    _0x4af2f2(true);
    return;
  }
  mp.game.streaming.requestAnimDict(PARACHUTE_ANIM_DICT);
  let _0x3cd762 = 0;
  const _0x377cb2 = setInterval(() => {
    _0x3cd762++;
    if (mp.game.streaming.hasAnimDictLoaded(PARACHUTE_ANIM_DICT)) {
      clearInterval(_0x377cb2);
      _0x4af2f2(true);
    } else if (_0x3cd762 > 200) {
      clearInterval(_0x377cb2);
      _0x4af2f2(false);
    }
  }, 25);
}
function attachPlayerUnderParachute(_0x504058, _0x3d165a) {
  if (_0x504058 && mp.players.exists(_0x504058) && _0x504058.handle !== 0 && _0x3d165a && mp.objects.exists(_0x3d165a)) {
    _0x504058.attachTo(_0x3d165a.handle, 0, PARACHUTE_SEAT_OFFSET.x, PARACHUTE_SEAT_OFFSET.y, PARACHUTE_SEAT_OFFSET.z, 0, 0, 0, false, false, false, false, 2, true);
    if (_0x504058 === localplayer) {
      setLocalParachuteSeatState(true);
    }
    loadParachuteAnimDict(_0x59167f => {
      if (_0x59167f && mp.players.exists(_0x504058) && _0x504058.handle !== 0) {
        try {
          _0x504058.taskPlayAnim(PARACHUTE_ANIM_DICT, "chute_landing", 8, 8, -1, 1, 0, false, false, false);
        } catch (_0x2e65e8) {}
      }
    });
  }
}
function isParachuteObjectReady(_0x49567e, _0x10572c) {
  if (!_0x49567e || !mp.objects.exists(_0x49567e) || _0x49567e.handle === 0) {
    return false;
  }
  if (!_0x10572c || !mp.vehicles.exists(_0x10572c) || _0x10572c.handle === 0) {
    return false;
  }
  const _0xf9c81b = _0x49567e.position;
  const _0x37cb24 = _0x10572c.position;
  const _0x936f5d = _0xf9c81b.x - _0x37cb24.x;
  const _0x27dbc6 = _0xf9c81b.y - _0x37cb24.y;
  const _0x3ee487 = _0xf9c81b.z - _0x37cb24.z;
  return (!(Math.abs(_0xf9c81b.x) < 1) || !(Math.abs(_0xf9c81b.y) < 1) || !(Math.abs(_0xf9c81b.z) < 1)) && _0x936f5d * _0x936f5d + _0x27dbc6 * _0x27dbc6 + _0x3ee487 * _0x3ee487 < 2500;
}
function getParachuteSpawnData(_0x881327) {
  if (!_0x881327 || !mp.vehicles.exists(_0x881327) || _0x881327.handle === 0) {
    return null;
  }
  const _0x14b668 = _0x881327.getOffsetFromInWorldCoords(0, -10, 4);
  let _0x441e93 = getHeadingTowardPosition(_0x14b668, _0x881327.position);
  if (_0x441e93 === null) {
    try {
      _0x441e93 = _0x881327.getRotation(2).z;
    } catch (_0x1b76f2) {
      _0x441e93 = 0;
    }
  }
  return {
    spawnPos: _0x14b668,
    spawnHeading: _0x441e93
  };
}
function syncParachuteObjectToBoat(_0x3868da, _0x317df2, _0x30c863 = 0) {
  const _0x32075a = getParachuteSpawnData(_0x317df2);
  if (!_0x32075a || !_0x3868da || !mp.objects.exists(_0x3868da)) {
    return false;
  }
  const _0x26f73b = _0x32075a.spawnPos.z + _0x30c863;
  try {
    _0x3868da.setCoords(_0x32075a.spawnPos.x, _0x32075a.spawnPos.y, _0x26f73b, false, false, false, false);
  } catch (_0x2e440a) {
    return false;
  }
  if (typeof _0x32075a.spawnHeading == "number") {
    applyParachuteYaw(_0x3868da, _0x32075a.spawnHeading);
  }
  return true;
}
function tryAttachPlayerToParachute(_0x2efa9e) {
  if (!isParachuteObjectReady(_0x2efa9e.object, _0x2efa9e.boat)) {
    setTimeout(() => {
      if (parachuteAttractions.get(_0x2efa9e.boat.remoteId) === _0x2efa9e) {
        tryAttachPlayerToParachute(_0x2efa9e);
      }
    }, 100);
    return;
  }
  const _0x8be347 = mp.players.atRemoteId(_0x2efa9e.playerId);
  if (_0x8be347 && mp.players.exists(_0x8be347) && _0x8be347.handle !== 0) {
    attachPlayerUnderParachute(_0x8be347, _0x2efa9e.object);
  } else {
    parachuteReattachQueue.set(_0x2efa9e.playerId, {
      boat: _0x2efa9e.boat
    });
  }
}
function createParachuteRope(_0x348bd0) {
  if (!_0x348bd0.object || !mp.objects.exists(_0x348bd0.object)) {
    return;
  }
  if (!mp.vehicles.exists(_0x348bd0.boat)) {
    return;
  }
  if (typeof _0x348bd0.ropeId == "number") {
    return;
  }
  try {
    mp.game.invoke("0x9B9039DBF2D258C1");
  } catch (_0x5de025) {}
  let _0x5f37b4 = null;
  try {
    const _0x221d9b = _0x348bd0.boat.position;
    _0x5f37b4 = mp.game.rope.addRope(_0x221d9b.x, _0x221d9b.y, _0x221d9b.z, 0, 0, 0, PARACHUTE_ROPE_LENGTH.max, 5, PARACHUTE_ROPE_LENGTH.init, PARACHUTE_ROPE_LENGTH.min, 1, false, false, false, 1, false, 0);
  } catch (_0x4959ae) {
    mp.console.logInfo(String(_0x4959ae && _0x4959ae.message ? _0x4959ae.message : _0x4959ae));
  }
  const _0x4d1b42 = _0x5f37b4 && _0x5f37b4.result !== undefined ? _0x5f37b4.result : _0x5f37b4;
  if (_0x4d1b42 == null || _0x4d1b42 === 0) {
    return;
  }
  _0x348bd0.ropeId = _0x4d1b42;
  const _0x4f0d59 = (_0x390ef5 = 0) => {
    if (parachuteAttractions.get(_0x348bd0.boat.remoteId) === _0x348bd0 && mp.objects.exists(_0x348bd0.object) && mp.vehicles.exists(_0x348bd0.boat)) {
      if (isParachuteObjectReady(_0x348bd0.object, _0x348bd0.boat)) {
        try {
          const _0x29f563 = _0x348bd0.boat.getOffsetFromInWorldCoords(PARACHUTE_BOAT_ROPE_OFFSET.x, PARACHUTE_BOAT_ROPE_OFFSET.y, PARACHUTE_BOAT_ROPE_OFFSET.z);
          const _0x538c16 = _0x348bd0.object.getOffsetFromInWorldCoords(PARACHUTE_PROP_ROPE_OFFSET.x, PARACHUTE_PROP_ROPE_OFFSET.y, PARACHUTE_PROP_ROPE_OFFSET.z);
          mp.game.rope.attachEntitiesToRope(_0x4d1b42, _0x348bd0.boat.handle, _0x348bd0.object.handle, _0x29f563.x, _0x29f563.y, _0x29f563.z, _0x538c16.x, _0x538c16.y, _0x538c16.z, PARACHUTE_ROPE_LENGTH.max, false, false, 0, 0);
          try {
            mp.game.rope.loadRopeData(_0x4d1b42, "default");
          } catch (_0x44f44f) {}
        } catch (_0x78d2d0) {
          mp.console.logInfo(String(_0x78d2d0 && _0x78d2d0.message ? _0x78d2d0.message : _0x78d2d0));
        }
      } else if (_0x390ef5 < 40) {
        setTimeout(() => _0x4f0d59(_0x390ef5 + 1), 100);
      }
    }
  };
  setTimeout(() => _0x4f0d59(0), 300);
}
function ensureParachutePhysicsInterval() {
  parachutePhysicsInterval ||= setInterval(parachutePhysicsTick, 25);
}
function stopParachutePhysicsInterval() {
  if (parachutePhysicsInterval) {
    clearInterval(parachutePhysicsInterval);
    parachutePhysicsInterval = null;
  }
}
function updateParachuteHeight(_0x5da8b0) {
  if (!_0x5da8b0.object || !mp.objects.exists(_0x5da8b0.object)) {
    return;
  }
  if (!mp.vehicles.exists(_0x5da8b0.boat)) {
    return;
  }
  let _0x24a4a4 = 0;
  try {
    if (typeof _0x5da8b0.boat.getEstimatedMaxSpeed == "function") {
      _0x24a4a4 = _0x5da8b0.boat.getEstimatedMaxSpeed();
    }
  } catch (_0x4b27b9) {}
  if (!_0x24a4a4 || _0x24a4a4 <= 0) {
    _0x24a4a4 = 30;
  }
  const _0x22c220 = _0x24a4a4 * 0.25;
  let _0xa3a267 = false;
  if (_0x5da8b0.boat.getSpeed() > _0x22c220) {
    if (_0x5da8b0.height < 30) {
      _0x5da8b0.height = Math.min(30, _0x5da8b0.height + 0.1);
      _0xa3a267 = true;
    }
  } else if (_0x5da8b0.height > 0.1) {
    _0x5da8b0.height = Math.max(0, _0x5da8b0.height - 0.1);
    _0xa3a267 = true;
  }
}
function parachutePhysicsTick() {
  if (parachuteAttractions.size !== 0) {
    for (const _0x3ea76d of parachuteAttractions.values()) {
      try {
        if (!mp.vehicles.exists(_0x3ea76d.boat)) {
          destroyParachuteState(_0x3ea76d);
          continue;
        }
        updateParachuteHeight(_0x3ea76d);
      } catch (_0x134f38) {
        mp.console.logInfo("parachutePhysicsTick: " + (_0x134f38 && _0x134f38.message ? _0x134f38.message : _0x134f38));
      }
    }
  } else {
    stopParachutePhysicsInterval();
  }
}
function destroyParachuteState(_0x51822c) {
  if (!_0x51822c) {
    return;
  }
  const _0x162904 = isLocalPlayerParachuteRider(_0x51822c.playerId);
  if (_0x51822c.ropeId !== null && _0x51822c.ropeId !== undefined) {
    try {
      mp.game.rope.deleteRope(_0x51822c.ropeId);
    } catch (_0x30fc8c) {}
    _0x51822c.ropeId = null;
  }
  const _0x2271e0 = mp.players.atRemoteId(_0x51822c.playerId);
  if (_0x2271e0 && mp.players.exists(_0x2271e0) && _0x2271e0.handle !== 0) {
    try {
      _0x2271e0.detach(false, false);
    } catch (_0xccd87) {}
    try {
      _0x2271e0.freezePosition(false);
    } catch (_0x3b25dd) {}
    try {
      _0x2271e0.clearTasks();
    } catch (_0x35de58) {}
  }
  parachuteReattachQueue.delete(_0x51822c.playerId);
  delete _0x51822c.parachuteYaw;
  if (_0x51822c.object && mp.objects.exists(_0x51822c.object)) {
    try {
      _0x51822c.object.detach(false, false);
    } catch (_0x3c1777) {}
    try {
      _0x51822c.object.destroy();
    } catch (_0x15f89d) {}
  }
  _0x51822c.object = null;
  if (_0x51822c.boat && _0x51822c.boat.remoteId !== undefined) {
    if (parachuteAttractions.get(_0x51822c.boat.remoteId) === _0x51822c) {
      parachuteAttractions.delete(_0x51822c.boat.remoteId);
    }
  }
  if (parachuteAttractions.size === 0) {
    stopParachutePhysicsInterval();
  }
  if (_0x162904) {
    setLocalParachuteSeatState(false);
  }
}
function createParachuteForBoat(_0x2ff5bc) {
  if (!_0x2ff5bc || !mp.vehicles.exists(_0x2ff5bc)) {
    return;
  }
  const _0xd79764 = _0x2ff5bc.getVariable(PARACHUTE_VARIABLE);
  if (typeof _0xd79764 != "number") {
    return;
  }
  const _0x530dd0 = parachuteAttractions.get(_0x2ff5bc.remoteId);
  if (_0x530dd0) {
    if (_0x530dd0.playerId === _0xd79764 && _0x530dd0.object && mp.objects.exists(_0x530dd0.object)) {
      return;
    }
    destroyParachuteState(_0x530dd0);
  }
  const _0x8ce0d8 = {
    boat: _0x2ff5bc,
    playerId: _0xd79764,
    object: null,
    ropeId: null,
    height: 0
  };
  parachuteAttractions.set(_0x2ff5bc.remoteId, _0x8ce0d8);
  const _0x54d573 = () => {
    if (parachuteAttractions.get(_0x2ff5bc.remoteId) !== _0x8ce0d8) {
      return;
    }
    if (!mp.vehicles.exists(_0x2ff5bc)) {
      destroyParachuteState(_0x8ce0d8);
      return;
    }
    if (_0x2ff5bc.handle === 0) {
      setTimeout(_0x54d573, 50);
      return;
    }
    const _0x5f55aa = getParachuteSpawnData(_0x2ff5bc);
    if (!_0x5f55aa) {
      setTimeout(_0x54d573, 50);
      return;
    }
    const {
      spawnPos: _0x23d834,
      spawnHeading: _0xb8c405
    } = _0x5f55aa;
    const _0x2ce464 = mp.objects.new(PARACHUTE_PROP_MODEL, _0x23d834, {
      rotation: new mp.Vector3(PARACHUTE_ATTACH_PITCH, 0, normalizeParachuteHeading(_0xb8c405 + PARACHUTE_VISUAL_YAW_OFFSET)),
      dimension: _0x2ff5bc.dimension || 0
    });
    _0x2ce464.notifyStreaming = true;
    _0x2ce464.isParachute = true;
    if (_0x2ce464) {
      _0x8ce0d8.object = _0x2ce464;
      _0x2ce464.parachuteBoat = _0x2ff5bc;
      try {
        _0x2ce464.setVisible(true, false);
      } catch (_0x23772e) {}
      setupParachuteObjectPhysics(_0x2ce464);
      _0x8ce0d8.parachuteYaw = _0xb8c405;
      syncParachuteObjectToBoat(_0x2ce464, _0x2ff5bc, 0);
      tryAttachPlayerToParachute(_0x8ce0d8);
      createParachuteRope(_0x8ce0d8);
      ensureParachutePhysicsInterval();
    } else {
      destroyParachuteState(_0x8ce0d8);
    }
  };
  loadParachuteModel(_0x54d573);
}
function destroyParachuteForBoat(_0x3499a1) {
  if (!_0x3499a1) {
    return;
  }
  const _0x482db1 = parachuteAttractions.get(_0x3499a1.remoteId);
  if (_0x482db1) {
    destroyParachuteState(_0x482db1);
  }
}
function mattressesSetParams(_0x116263) {
  _0x116263.setPhysicsParams(100, 0.2, 0.2, 0.4, 1, 1, 1, 0, 0, 0, 2);
  _0x116263.setDynamic(true);
  _0x116263.setHasGravity(true);
  _0x116263.setActivatePhysicsAsSoonAsItIsUnfrozen(true);
  _0x116263.freezePosition(false);
  _0x116263.setCollision(true, true);
}
global.seatOnSummer2026Parachute = false;
mp.events.addDataHandler(PARACHUTE_VARIABLE, (_0x484acd, _0x1288e9) => {
  if (_0x484acd && _0x484acd.type === "vehicle") {
    _0x484acd.notifyStreaming = true;
    if (typeof _0x1288e9 == "number") {
      createParachuteForBoat(_0x484acd);
      maybeStartAttractionCheckpointsForBoat(_0x484acd);
    } else {
      destroyParachuteForBoat(_0x484acd);
    }
    if (!driverTimerShowed && localplayer.vehicle === _0x484acd && isEventDrivingBoat(_0x484acd)) {
      driverTimerShowed = true;
      main_browser.execute("\n            APPS.state.hud.show_luna_park_timer_info = " + JSON.stringify(TIMER_HUD_INFO) + ";\n            APPS.state.hud.show_luna_park_timer = true;\n        ");
    }
  }
});
global.usedWaterActivitiesMattressId = null;
global.seatOnSummer2026Mattress = false;
mp.events.add("Client_Summer2026_TryUseMattress", () => localplayer.isInWater() ? localplayer.isSwimmingUnderWater() ? ShowNotification(language["Вы не можете использовать матрас под водой"][curr_lang], 6) : (mp.events.call("Client_CloseInventory"), void mp.events.callRemote("Server_Summer2026_UseMattress")) : ShowNotification(language["Вы не можете использовать матрас на суше"][curr_lang], 6));
mp.events.add("Client_WaterActivities_SetMattressId", _0x41d6bf => {
  global.usedWaterActivitiesMattressId = _0x41d6bf;
});
mp.events.add("Client_WaterActivities_SeatOnMattress", () => {
  global.seatOnSummer2026Mattress = true;
  HintShow(language["Нажмите ESC, чтобы встать с матраса"][curr_lang], 15000);
});
mp.events.add("Client_WaterActivities_UnseatFromMattress", () => {
  global.seatOnSummer2026Mattress = false;
  HintClose();
  localplayer.clearTasks();
});
const MATTRESS_EMPTY_PLACE = -1;
function lerp(_0x18f00a, _0x696c47, _0x3c2a1b) {
  return _0x18f00a + (_0x696c47 - _0x18f00a) * _0x3c2a1b;
}
function clampLength2D(_0x2e71c8, _0x5c2f76, _0x329578) {
  const _0x499099 = Math.sqrt(_0x2e71c8 * _0x2e71c8 + _0x5c2f76 * _0x5c2f76);
  if (_0x499099 <= _0x329578 || _0x499099 <= 0.0001) {
    return {
      x: _0x2e71c8,
      y: _0x5c2f76
    };
  }
  const _0x19e640 = _0x329578 / _0x499099;
  return {
    x: _0x2e71c8 * _0x19e640,
    y: _0x5c2f76 * _0x19e640
  };
}
function normalizeWaterHeightResult(_0x5adc5e) {
  if (typeof _0x5adc5e == "number") {
    return _0x5adc5e;
  }
  if (Array.isArray(_0x5adc5e)) {
    for (const _0x4b21fb of _0x5adc5e) {
      if (typeof _0x4b21fb == "number" && Number.isFinite(_0x4b21fb) && _0x4b21fb > -9999) {
        return _0x4b21fb;
      }
    }
  }
  return null;
}
function getWaterZ(_0x137bf4, _0x4b3043, _0x135ada) {
  let _0x5b5984 = mp.game.water.getWaterHeight(_0x137bf4, _0x4b3043, _0x135ada, 0);
  let _0x3b399d = normalizeWaterHeightResult(_0x5b5984);
  if (_0x3b399d !== null && _0x3b399d > -9999) {
    return _0x3b399d;
  } else {
    _0x5b5984 = mp.game.water.getWaterHeightNoWaves(_0x137bf4, _0x4b3043, _0x135ada, 0);
    _0x3b399d = normalizeWaterHeightResult(_0x5b5984);
    if (_0x3b399d !== null && _0x3b399d > -9999) {
      return _0x3b399d;
    } else {
      return null;
    }
  }
}
mattressesAttachPlayers = function (_0x1e43b8) {
  _0x1e43b8.getVariable("playersOnPlaces").forEach((_0x3df163, _0xf85b2e) => {
    if (_0x3df163 === -1) {
      return;
    }
    const _0x17eb32 = mp.players.atRemoteId(_0x3df163);
    const _0x15a5ce = mattressesData[_0x1e43b8.model]?.seatOffsets[_0xf85b2e];
    if (_0x15a5ce) {
      if (mp.players.exists(_0x17eb32) && _0x17eb32.handle !== 0) {
        _0x17eb32.attachTo(_0x1e43b8.handle, 0, _0x15a5ce.position.x, _0x15a5ce.position.y, _0x15a5ce.position.z, _0x15a5ce.rotation.x, _0x15a5ce.rotation.y, _0x15a5ce.rotation.z, false, false, false, false, 1, true);
        global.play_animation2(_0x17eb32, "amb@world_human_sunbathe@male@back@base", "base", 8, -8, -1, 1, 0, false, false, false);
      } else {
        mattressesReattachQueue.set(_0x3df163, {
          object: _0x1e43b8,
          offset: _0x15a5ce
        });
      }
    }
  });
};
mattressesDetachPlayers = function (_0x1ac057) {
  _0x1ac057.getVariable("playersOnPlaces").forEach(_0x297c7b => {
    if (_0x297c7b === -1) {
      return;
    }
    const _0x502fe5 = mp.players.atRemoteId(_0x297c7b);
    if (_0x502fe5 && mp.players.exists(_0x502fe5) && _0x502fe5.handle !== 0) {
      _0x502fe5.detach(false, false);
      _0x502fe5.clearTasks();
    }
  });
};
mp.events.addDataHandler("playersOnPlaces", (_0x1f9e98, _0x56ad30, _0x1a97f5) => {
  _0x1f9e98.notifyStreaming = true;
  if (_0x1f9e98.handle) {
    mattressesAttachPlayers(_0x1f9e98);
  }
  if (Array.isArray(_0x1a97f5)) {
    _0x1a97f5.filter(_0x4c77b0 => _0x4c77b0 !== -1 && !_0x56ad30.includes(_0x4c77b0)).forEach(_0x3c0fdb => {
      const _0x32a3b1 = mp.players.atRemoteId(_0x3c0fdb);
      if (_0x32a3b1 && mp.players.exists(_0x32a3b1) && _0x32a3b1.handle !== 0) {
        _0x32a3b1.detach(false, false);
      }
    });
  }
});
const MATTRESS_WATER_OFFSET = 0.05;
const MATTRESS_BOB_AMPLITUDE = 0.05;
const MATTRESS_BOB_FREQ = 0.55;
const MATTRESS_PITCH_AMPLITUDE = 1.6;
const MATTRESS_PITCH_FREQ = 0.4;
const MATTRESS_ROLL_AMPLITUDE = 2;
const MATTRESS_ROLL_FREQ = 0.33;
const MATTRESS_YAW_AMPLITUDE = 1.4;
const MATTRESS_YAW_FREQ = 0.12;
const MATTRESS_LERP_Z = 0.06;
const MATTRESS_LERP_ROT = 0.06;
const MATTRESS_WATER_REFRESH_MS = 200;
const MATTRESS_WATER_INVALID_THRESHOLD = 5;
const TWO_PI = Math.PI * 2;
const floatingMattresses = new Set();
let mattressWaterRefreshInterval = null;
function getGroundZAt(_0x13b38a, _0x3382ef, _0x3f16a4) {
  try {
    const _0x32d6ad = mp.game.gameplay.getGroundZFor3dCoord(_0x13b38a, _0x3382ef, _0x3f16a4 + 1000, 0, false);
    if (Array.isArray(_0x32d6ad)) {
      for (const _0xec4629 of _0x32d6ad) {
        if (typeof _0xec4629 == "number" && Number.isFinite(_0xec4629) && Math.abs(_0xec4629) > 0.001) {
          return _0xec4629;
        }
      }
    } else if (typeof _0x32d6ad == "number" && Number.isFinite(_0x32d6ad)) {
      return _0x32d6ad;
    }
  } catch (_0x52ba5d) {}
  return null;
}
function isFloatingMattress(_0x26d11e) {
  if (!_0x26d11e || _0x26d11e.type !== "object") {
    return false;
  }
  if (mattressesModels.includes(_0x26d11e.model)) {
    return true;
  }
  try {
    const _0x5e7fc7 = _0x26d11e.getVariable("playersOnPlaces");
    if (Array.isArray(_0x5e7fc7)) {
      return true;
    }
  } catch (_0x42d7c8) {}
  return false;
}
function setupMattressFloating(_0x73a0a5) {
  if (!_0x73a0a5 || !mp.objects.exists(_0x73a0a5)) {
    return;
  }
  if (_0x73a0a5.mattressFloat) {
    return;
  }
  const _0x49e1e1 = _0x73a0a5.position;
  let _0x5a4e87 = null;
  let _0x5511b9 = false;
  const _0xa2fb97 = getWaterZ(_0x49e1e1.x, _0x49e1e1.y, _0x49e1e1.z);
  if (_0xa2fb97 !== null && _0xa2fb97 !== 0) {
    _0x5a4e87 = _0xa2fb97 + MATTRESS_WATER_OFFSET;
    _0x5511b9 = true;
  } else {
    const _0xd578fa = getGroundZAt(_0x49e1e1.x, _0x49e1e1.y, _0x49e1e1.z);
    if (_0xd578fa !== null) {
      _0x5a4e87 = _0xd578fa;
    }
  }
  if (_0x5a4e87 === null) {
    _0x5a4e87 = _0x49e1e1.z;
  }
  let _0xae1262 = 0;
  try {
    const _0x583e79 = _0x73a0a5.getRotation(2);
    if (_0x583e79 && typeof _0x583e79.z == "number") {
      _0xae1262 = _0x583e79.z;
    }
  } catch (_0x410803) {}
  _0x73a0a5.mattressFloat = {
    anchorX: _0x49e1e1.x,
    anchorY: _0x49e1e1.y,
    anchorZ: _0x49e1e1.z,
    baseZ: _0x5a4e87,
    baseHeading: _0xae1262,
    onWater: _0x5511b9,
    invalidWaterCount: 0,
    seed: (_0x73a0a5.remoteId || 1) * 0.61803398875 % 1 * TWO_PI,
    currentZ: _0x5a4e87,
    currentPitch: 0,
    currentRoll: 0,
    currentYaw: _0xae1262
  };
  try {
    _0x73a0a5.setCoords(_0x49e1e1.x, _0x49e1e1.y, _0x5a4e87, false, false, false, false);
  } catch (_0x1efd4d) {}
  try {
    _0x73a0a5.setRotation(0, 0, _0xae1262, 2, true);
  } catch (_0x481368) {}
  try {
    _0x73a0a5.freezePosition(true);
  } catch (_0x9f667a) {}
  try {
    _0x73a0a5.setCollision(true, true);
  } catch (_0x467940) {}
  floatingMattresses.add(_0x73a0a5);
  ensureMattressWaterRefresh();
}
function teardownMattressFloating(_0x13fe57) {
  if (_0x13fe57) {
    floatingMattresses.delete(_0x13fe57);
    if (_0x13fe57.mattressFloat) {
      delete _0x13fe57.mattressFloat;
    }
    if (floatingMattresses.size === 0) {
      stopMattressWaterRefresh();
    }
  }
}
function refreshMattressWaterLevels() {
  if (floatingMattresses.size !== 0) {
    for (const _0x4b3486 of floatingMattresses) {
      if (!mp.objects.exists(_0x4b3486) || !_0x4b3486.handle) {
        floatingMattresses.delete(_0x4b3486);
        continue;
      }
      const _0x11d1b5 = _0x4b3486.mattressFloat;
      if (!_0x11d1b5) {
        continue;
      }
      let _0x2e1769 = null;
      let _0x2d1c20 = 0;
      while (_0x2d1c20 < 10) {
        const _0x115342 = _0x11d1b5.baseZ - _0x2d1c20 * 0.3;
        _0x2e1769 = getWaterZ(_0x11d1b5.anchorX, _0x11d1b5.anchorY, _0x115342);
        if (_0x2e1769 !== null && _0x2e1769 !== 0) {
          break;
        }
        _0x2d1c20++;
      }
      if (_0x2e1769 === null || _0x2e1769 === 0) {
        _0x11d1b5.invalidWaterCount++;
        if (_0x11d1b5.invalidWaterCount >= 5) {
          const _0x4f0cb7 = getGroundZAt(_0x11d1b5.anchorX, _0x11d1b5.anchorY, _0x11d1b5.baseZ);
          if (_0x4f0cb7 !== null) {
            _0x11d1b5.baseZ = _0x4f0cb7;
          }
          _0x11d1b5.onWater = false;
        }
      } else {
        _0x11d1b5.invalidWaterCount = 0;
        const _0x21237d = _0x2e1769 + MATTRESS_WATER_OFFSET;
        if (!_0x11d1b5.onWater || Math.abs(_0x21237d - _0x11d1b5.baseZ) <= 1) {
          _0x11d1b5.baseZ = _0x21237d;
        }
        _0x11d1b5.onWater = true;
      }
    }
  } else {
    stopMattressWaterRefresh();
  }
}
function ensureMattressWaterRefresh() {
  mattressWaterRefreshInterval ||= setInterval(refreshMattressWaterLevels, 200);
}
function stopMattressWaterRefresh() {
  if (mattressWaterRefreshInterval) {
    clearInterval(mattressWaterRefreshInterval);
    mattressWaterRefreshInterval = null;
  }
}
mp.events.add("render", () => {
  try {
    if (floatingMattresses.size === 0) {
      return;
    }
    const _0x240aed = Date.now() / 1000;
    for (const _0x11c0b4 of floatingMattresses) {
      if (!mp.objects.exists(_0x11c0b4) || !_0x11c0b4.handle) {
        floatingMattresses.delete(_0x11c0b4);
        continue;
      }
      const _0x5edfb7 = _0x11c0b4.mattressFloat;
      if (!_0x5edfb7) {
        continue;
      }
      const _0x27905f = _0x5edfb7.seed;
      const _0x39d41e = (Math.sin(_0x240aed * TWO_PI * 0.55 + _0x27905f) * 0.65 + Math.sin(_0x240aed * TWO_PI * 0.55 * 0.43 + _0x27905f * 1.7) * 0.35) * 0.05;
      const _0x4ef084 = _0x5edfb7.baseZ + (_0x5edfb7.onWater ? _0x39d41e : 0);
      const _0x34630f = _0x5edfb7.onWater ? Math.sin(_0x240aed * TWO_PI * 0.4 + _0x27905f * 0.7) * 1.6 : 0;
      const _0x2548ad = _0x5edfb7.onWater ? Math.cos(_0x240aed * TWO_PI * 0.33 + _0x27905f * 1.3) * 2 : 0;
      const _0x2aedc8 = _0x5edfb7.onWater ? _0x5edfb7.baseHeading + Math.sin(_0x240aed * TWO_PI * 0.12 + _0x27905f) * 1.4 : _0x5edfb7.baseHeading;
      _0x5edfb7.currentZ = lerp(_0x5edfb7.currentZ, _0x4ef084, 0.06);
      _0x5edfb7.currentPitch = lerp(_0x5edfb7.currentPitch, _0x34630f, 0.06);
      _0x5edfb7.currentRoll = lerp(_0x5edfb7.currentRoll, _0x2548ad, 0.06);
      _0x5edfb7.currentYaw = lerp(_0x5edfb7.currentYaw, _0x2aedc8, 0.06);
      try {
        _0x11c0b4.setCoords(_0x5edfb7.anchorX, _0x5edfb7.anchorY, _0x5edfb7.currentZ, false, false, false, false);
        _0x11c0b4.setRotation(_0x5edfb7.currentPitch, _0x5edfb7.currentRoll, _0x5edfb7.currentYaw, 2, true);
      } catch (_0x5ebc71) {}
    }
  } catch (_0x1ffa43) {
    mp.console.logInfo(String(_0x1ffa43 && _0x1ffa43.message ? _0x1ffa43.message : _0x1ffa43));
  }
});
const parachuteTowConfig = {
  ropeLength: 18,
  liftStartSpeed: 5,
  liftFullSpeed: 16,
  maxLiftHeight: 30,
  liftVelocity: 2.5,
  downVelocity: 1.2,
  sinkVelocity: 0.4,
  horizontalFollow: 0.92,
  boatWaterOffset: 0.3,
  lookTurnSpeed: 0.12
};
function normalizeParachuteHeading(_0x4577b5) {
  return (_0x4577b5 % 360 + 360) % 360;
}
function getParachuteBoatLookTarget(_0x16f0e2) {
  return _0x16f0e2.getOffsetFromInWorldCoords(PARACHUTE_BOAT_ROPE_OFFSET.x, PARACHUTE_BOAT_ROPE_OFFSET.y, PARACHUTE_BOAT_ROPE_OFFSET.z);
}
function getHeadingTowardPosition(_0x111b88, _0x55a92f) {
  return Math.atan2(_0x55a92f.y - _0x111b88.y, _0x55a92f.x - _0x111b88.x) * 180 / Math.PI - 90 - 180;
}
function lerpHeadingToward(_0x32bd4f, _0x30ddf8, _0x10fd58) {
  let _0x544023 = _0x30ddf8 - _0x32bd4f;
  while (_0x544023 > 180) {
    _0x544023 -= 360;
  }
  while (_0x544023 < -180) {
    _0x544023 += 360;
  }
  return normalizeParachuteHeading(_0x32bd4f + _0x544023 * _0x10fd58);
}
function setupParachuteObjectPhysics(_0x4cf73e) {
  if (_0x4cf73e && mp.objects.exists(_0x4cf73e)) {
    _0x4cf73e.setPhysicsParams(5, 0.2, 0.5, 0.5, 0.5, -1, -1, 1, -1, 0, 2);
    _0x4cf73e.setDynamic(true);
    _0x4cf73e.setHasGravity(true);
    _0x4cf73e.setActivatePhysicsAsSoonAsItIsUnfrozen(true);
    _0x4cf73e.freezePosition(false);
    _0x4cf73e.setCollision(true, true);
  }
}
function zeroParachuteAngularVelocity(_0x3dc355) {
  if (_0x3dc355 && mp.objects.exists(_0x3dc355) && _0x3dc355.handle) {
    try {
      mp.game.invoke("0x8339643499D1222E", _0x3dc355.handle, 0, 0, 0);
    } catch (_0x5a7dd9) {}
  }
}
function applyParachuteYaw(_0xc28528, _0x51ad37) {
  if (!_0xc28528 || !mp.objects.exists(_0xc28528)) {
    return;
  }
  const _0x22d90b = normalizeParachuteHeading(_0x51ad37 + PARACHUTE_VISUAL_YAW_OFFSET);
  try {
    _0xc28528.setRotation(PARACHUTE_ATTACH_PITCH, 0, _0x22d90b, 2, true);
    mp.game.entity.setHeading(_0xc28528.handle, _0x22d90b);
  } catch (_0x50dd9f) {}
  zeroParachuteAngularVelocity(_0xc28528);
}
function updateParachuteLookAtBoat(_0x201bdf) {
  const _0x18253e = _0x201bdf.boat;
  const _0x575a82 = _0x201bdf.object;
  if (!_0x18253e || !mp.vehicles.exists(_0x18253e) || !_0x18253e.handle) {
    return;
  }
  if (!_0x575a82 || !mp.objects.exists(_0x575a82) || !_0x575a82.handle) {
    return;
  }
  _0x575a82.position;
  getParachuteBoatLookTarget(_0x18253e);
  let _0x1db865 = _0x18253e.getRotation(2).z + 180;
  if (_0x1db865 === null) {
    try {
      _0x1db865 = _0x18253e.getRotation(2).z;
    } catch (_0x1d108a) {
      return;
    }
  }
  const _0x932477 = parachuteTowConfig.lookTurnSpeed;
  _0x201bdf.parachuteYaw = typeof _0x201bdf.parachuteYaw == "number" ? lerpHeadingToward(_0x201bdf.parachuteYaw, _0x1db865, _0x932477) : _0x1db865;
  applyParachuteYaw(_0x575a82, _0x201bdf.parachuteYaw);
}
function clampParachuteTow(_0x25cac4, _0x1eeb12, _0x13b739) {
  return Math.max(_0x1eeb12, Math.min(_0x13b739, _0x25cac4));
}
function getParachuteTowDistance(_0x4a9757, _0x16dc0d) {
  const _0x1bbfef = _0x4a9757.x - _0x16dc0d.x;
  const _0x289f74 = _0x4a9757.y - _0x16dc0d.y;
  const _0x43e164 = _0x4a9757.z - _0x16dc0d.z;
  return Math.sqrt(_0x1bbfef * _0x1bbfef + _0x289f74 * _0x289f74 + _0x43e164 * _0x43e164);
}
function updateParachuteTowPhysics(_0x763116) {
  const _0x5adce6 = _0x763116.boat;
  const _0x2a5644 = _0x763116.object;
  if (!_0x5adce6 || !mp.vehicles.exists(_0x5adce6) || !_0x5adce6.handle) {
    return;
  }
  if (!_0x2a5644 || !mp.objects.exists(_0x2a5644) || !_0x2a5644.handle) {
    return;
  }
  const _0x22edf2 = _0x5adce6.position;
  const _0xbaa761 = _0x2a5644.position;
  const _0x1b257f = parachuteTowConfig;
  const _0xffba10 = _0x5adce6.getSpeed();
  const _0x2fff0f = clampParachuteTow((getParachuteTowDistance(_0x22edf2, _0xbaa761) - _0x1b257f.ropeLength * 0.75) / (_0x1b257f.ropeLength * 0.25), 0, 1);
  const _0x4372ef = clampParachuteTow((_0xffba10 - _0x1b257f.liftStartSpeed) / (_0x1b257f.liftFullSpeed - _0x1b257f.liftStartSpeed), 0, 1);
  const _0x13183d = getWaterZ(_0xbaa761.x, _0xbaa761.y, _0xbaa761.z);
  const _0x34494b = _0x13183d !== null ? _0x13183d : _0x22edf2.z - _0x1b257f.boatWaterOffset;
  const _0x4b19fb = _0xbaa761.z - _0x34494b;
  const _0x1b96b5 = clampParachuteTow(1 - _0x4b19fb / _0x1b257f.maxLiftHeight, 0, 1);
  let _0xcd9660;
  let _0x1db513;
  try {
    _0xcd9660 = _0x2a5644.getVelocity();
  } catch (_0x50d39e) {
    _0xcd9660 = {
      x: 0,
      y: 0,
      z: 0
    };
  }
  try {
    _0x1db513 = _0x5adce6.getVelocity();
  } catch (_0x3ea600) {
    _0x1db513 = {
      x: 0,
      y: 0,
      z: 0
    };
  }
  const _0x3496fe = _0x1b257f.horizontalFollow * _0x2fff0f;
  const _0x4af392 = _0xcd9660.x + (_0x1db513.x - _0xcd9660.x) * _0x3496fe;
  const _0x2e5af1 = _0xcd9660.y + (_0x1db513.y - _0xcd9660.y) * _0x3496fe;
  let _0x3cb14a;
  _0x3cb14a = _0x4b19fb > _0x1b257f.maxLiftHeight ? -_0x1b257f.downVelocity : _0x4372ef > 0 && _0x2fff0f > 0.05 && _0x1b96b5 > 0.05 ? _0x1b257f.liftVelocity * _0x4372ef * _0x2fff0f * _0x1b96b5 : _0xcd9660.z + (-_0x1b257f.sinkVelocity - _0xcd9660.z) * 0.12;
  try {
    _0x2a5644.setVelocity(_0x4af392, _0x2e5af1, _0x3cb14a);
  } catch (_0x64b64b) {}
  zeroParachuteAngularVelocity(_0x2a5644);
}
mp.events.add("render", () => {
  if (localplayer.vehicle && localplayer.vehicle.model && (VEHICLES_TO_LOCK_CONTROLS.includes(localplayer.vehicle.model) || typeof localplayer.vehicle.getVariable(PARACHUTE_VARIABLE) == "number" || typeof localplayer.vehicle.getVariable("customTrailer") == "number")) {
    mp.game.controls.disableControlAction(0, 75, true);
    mp.game.controls.disableControlAction(0, 23, true);
    mp.game.controls.disableControlAction(0, 63, true);
    mp.game.controls.disableControlAction(0, 64, true);
    mp.game.controls.disableControlAction(0, 68, true);
    mp.game.controls.disableControlAction(0, 69, true);
    mp.game.controls.disableControlAction(0, 70, true);
    mp.game.controls.disableControlAction(0, 85, true);
    mp.game.controls.disableControlAction(0, 80, true);
  }
  if (global.seatOnSummer2026Mattress) {
    mp.game.controls.disableControlAction(0, 199, true);
    mp.game.controls.disableControlAction(0, 200, true);
    mp.game.controls.disableControlAction(0, 322, true);
  }
  for (const _0x36c5f6 of parachuteAttractions.values()) {
    try {
      updateParachuteTowPhysics(_0x36c5f6);
      updateParachuteLookAtBoat(_0x36c5f6);
    } catch (_0x11bc85) {
      mp.console.logInfo("parachuteTow: " + (_0x11bc85 && _0x11bc85.message ? _0x11bc85.message : _0x11bc85));
    }
  }
});
const ATTRACTION_CHECKPOINTS = [new mp.Vector3(-1724.822, -1436.79, 1.392), new mp.Vector3(-1781.764, -1558.786, 0.239), new mp.Vector3(-1954.094, -1598.849, 1.112), new mp.Vector3(-2064.112, -1518.649, -0.337), new mp.Vector3(-2135.07, -1367.245, 0.951), new mp.Vector3(-2168.388, -1174.263, 0.164), new mp.Vector3(-2175.967, -1005.137, 0.456), new mp.Vector3(-2106.161, -893.227, 0.882), new mp.Vector3(-1961.049, -886.533, 1.064), new mp.Vector3(-1871.861, -1033.296, 1.27), new mp.Vector3(-1895.106, -1149.06, 1.209), new mp.Vector3(-1882.449, -1258.226, 0.894), new mp.Vector3(-1740.332, -1295.121, 0.185)];
const ATTRACTION_BOAT_SPAWN_POINTS = [new mp.Vector3(-1615.307, -1267.859, 0.558), new mp.Vector3(-1606.912, -1274.257, -0.015), new mp.Vector3(-1597.145, -1281.427, 0.529), new mp.Vector3(-1590.04, -1286.747, 0.887), new mp.Vector3(-1582.342, -1294.185, 0.487), new mp.Vector3(-1574.65, -1300.186, 0.177)];
const ATTRACTION_SPAWN_NEAR_RADIUS = 10;
const ATTRACTION_CP_MARKER_TYPE = 42;
const ATTRACTION_CP_FINISH_MARKER_TYPE = 5;
const ATTRACTION_CP_MARKER_SCALE = 20;
const ATTRACTION_CP_NEXT_MARKER_SCALE = 12;
const ATTRACTION_CP_COLSHAPE_RADIUS = 20;
const ATTRACTION_CP_COLOR = [255, 255, 0, 155];
const ATTRACTION_CP_NEXT_COLOR = [255, 255, 0, 60];
const ATTRACTION_CP_BLIP_COLOR = 5;
const ATTRACTION_CP_BLIP_ALPHA = 255;
const ATTRACTION_CP_NEXT_BLIP_ALPHA = 90;
let attractionCpMarker = null;
let attractionNextCpMarker = null;
let attractionCpShape = null;
let attractionCheckpointBlip = null;
let attractionNextCheckpointBlip = null;
let attractionCheckpointIndex = -1;
let attractionInitialCheckpointIndex = -1;
function getAttractionMarkerPos(_0x3e8b4d) {
  return new mp.Vector3(_0x3e8b4d.x, _0x3e8b4d.y, _0x3e8b4d.z + 10);
}
function isAttractionDrivingBoat(_0x4a2566) {
  if (!_0x4a2566 || !mp.vehicles.exists(_0x4a2566)) {
    return false;
  }
  if (attractionsConfig.hasOwnProperty(_0x4a2566.model)) {
    try {
      if (typeof _0x4a2566.getVariable("customTrailer") == "number") {
        return true;
      }
    } catch (_0x1ac7fd) {}
  }
  try {
    if (typeof _0x4a2566.getVariable(PARACHUTE_VARIABLE) == "number") {
      return true;
    }
  } catch (_0x144aac) {}
  return false;
}
function destroyAttractionCheckpointEntities() {
  if (attractionCpMarker) {
    try {
      attractionCpMarker.destroy();
    } catch (_0x92542e) {}
    attractionCpMarker = null;
  }
  if (attractionNextCpMarker) {
    try {
      attractionNextCpMarker.destroy();
    } catch (_0x152f6c) {}
    attractionNextCpMarker = null;
  }
  if (attractionCpShape) {
    try {
      attractionCpShape.destroy();
    } catch (_0x5ad7f5) {}
    attractionCpShape = null;
  }
  if (attractionCheckpointBlip) {
    try {
      attractionCheckpointBlip.destroy();
    } catch (_0x2dc7a1) {}
    attractionCheckpointBlip = null;
  }
  if (attractionNextCheckpointBlip) {
    try {
      attractionNextCheckpointBlip.destroy();
    } catch (_0x1490f4) {}
    attractionNextCheckpointBlip = null;
  }
}
function destroyAttractionCheckpoints() {
  destroyAttractionCheckpointEntities();
  attractionCheckpointIndex = -1;
  attractionInitialCheckpointIndex = -1;
  attractionTrackedVehicle = null;
}
function buildAttractionCheckpoint(_0x894797) {
  if (_0x894797 < 0 || _0x894797 >= ATTRACTION_CHECKPOINTS.length) {
    return;
  }
  const _0x4c38e7 = ATTRACTION_CHECKPOINTS[_0x894797];
  const _0x47abaa = ATTRACTION_CHECKPOINTS[_0x894797 + 1] || null;
  const _0x527869 = !_0x47abaa;
  const _0x43cd8e = typeof language != "undefined" && language.Чекпоинт ? language.Чекпоинт[curr_lang] : "Checkpoint";
  try {
    attractionCpShape = mp.colshapes.newSphere(_0x4c38e7.x, _0x4c38e7.y, _0x4c38e7.z, 20, 0);
    attractionCpShape.isSummer2026AttractionCp = true;
  } catch (_0x10f3c0) {
    mp.console.logInfo("attraction colshape create error: " + (_0x10f3c0 && _0x10f3c0.message ? _0x10f3c0.message : _0x10f3c0));
  }
  try {
    attractionCpMarker = mp.markers.new(_0x527869 ? 5 : 42, getAttractionMarkerPos(_0x4c38e7), 20, {
      direction: new mp.Vector3(0, 0, 0),
      color: ATTRACTION_CP_COLOR,
      visible: true,
      dimension: 0
    });
  } catch (_0x28f806) {
    mp.console.logInfo("attraction marker create error: " + (_0x28f806 && _0x28f806.message ? _0x28f806.message : _0x28f806));
  }
  try {
    attractionCheckpointBlip = mp.blips.new(1, _0x4c38e7, {
      name: _0x43cd8e,
      color: 5,
      alpha: 255,
      dimension: 0
    });
    try {
      attractionCheckpointBlip.setRoute(true);
    } catch (_0x448126) {}
    try {
      attractionCheckpointBlip.setRouteColour(5);
    } catch (_0xe47832) {}
  } catch (_0xa56f22) {}
  if (!_0x527869) {
    const _0x107828 = !ATTRACTION_CHECKPOINTS[_0x894797 + 2] && !null;
    try {
      attractionNextCpMarker = mp.markers.new(_0x107828 ? 5 : 42, getAttractionMarkerPos(_0x47abaa), 12, {
        direction: new mp.Vector3(0, 0, 0),
        color: ATTRACTION_CP_NEXT_COLOR,
        visible: true,
        dimension: 0
      });
    } catch (_0x9facba) {}
    try {
      attractionNextCheckpointBlip = mp.blips.new(1, _0x47abaa, {
        name: _0x43cd8e,
        color: 5,
        alpha: 90,
        dimension: 0
      });
    } catch (_0x526fa1) {}
  }
  attractionCheckpointIndex = _0x894797;
}
function pickInitialAttractionCheckpointIndex(_0x132464) {
  if (!_0x132464 || !mp.vehicles.exists(_0x132464)) {
    return 0;
  }
  let _0x23941d;
  try {
    _0x23941d = _0x132464.position;
  } catch (_0x3689d7) {
    return 0;
  }
  for (let _0x3e4264 = 0; _0x3e4264 < ATTRACTION_BOAT_SPAWN_POINTS.length; _0x3e4264++) {
    const _0x79f365 = ATTRACTION_BOAT_SPAWN_POINTS[_0x3e4264];
    const _0x356eb0 = _0x79f365.x - _0x23941d.x;
    const _0x50b5f7 = _0x79f365.y - _0x23941d.y;
    const _0xbd862 = _0x79f365.z - _0x23941d.z;
    if (_0x356eb0 * _0x356eb0 + _0x50b5f7 * _0x50b5f7 + _0xbd862 * _0xbd862 <= 100) {
      return 0;
    }
  }
  let _0x5371c4 = null;
  try {
    _0x5371c4 = _0x132464.getForwardVector();
  } catch (_0x4a8e6f) {}
  let _0x1d6a56 = -1;
  let _0x1f84a7 = Infinity;
  let _0x47d9ee = -1;
  let _0x5e9167 = Infinity;
  for (let _0x474ad6 = 0; _0x474ad6 < ATTRACTION_CHECKPOINTS.length; _0x474ad6++) {
    const _0xeb91af = ATTRACTION_CHECKPOINTS[_0x474ad6];
    const _0x845113 = _0xeb91af.x - _0x23941d.x;
    const _0x388bfd = _0xeb91af.y - _0x23941d.y;
    const _0x3fda36 = _0xeb91af.z - _0x23941d.z;
    const _0x30e2c1 = Math.sqrt(_0x845113 * _0x845113 + _0x388bfd * _0x388bfd + _0x3fda36 * _0x3fda36);
    if (_0x30e2c1 < _0x5e9167) {
      _0x5e9167 = _0x30e2c1;
      _0x47d9ee = _0x474ad6;
    }
    if (_0x5371c4) {
      if (_0x845113 * _0x5371c4.x + _0x388bfd * _0x5371c4.y + _0x3fda36 * _0x5371c4.z > 0 && _0x30e2c1 < _0x1f84a7) {
        _0x1f84a7 = _0x30e2c1;
        _0x1d6a56 = _0x474ad6;
      }
    }
  }
  if (_0x1d6a56 !== -1) {
    return _0x1d6a56;
  } else if (_0x47d9ee !== -1) {
    return _0x47d9ee;
  } else {
    return 0;
  }
}
function startAttractionCheckpoints(_0x2d6391) {
  if (_0x2d6391 && mp.vehicles.exists(_0x2d6391)) {
    if (attractionTrackedVehicle !== _0x2d6391 || !(attractionCheckpointIndex >= 0)) {
      destroyAttractionCheckpoints();
      attractionTrackedVehicle = _0x2d6391;
      attractionInitialCheckpointIndex = pickInitialAttractionCheckpointIndex(_0x2d6391);
      buildAttractionCheckpoint(attractionInitialCheckpointIndex);
    }
  }
}
function advanceAttractionCheckpoint() {
  const _0x466ab8 = attractionCheckpointIndex;
  if (_0x466ab8 < 0) {
    return;
  }
  if (_0x466ab8 === attractionInitialCheckpointIndex) {
    mp.events.callRemote("Server_Summer2026_AttractionFirstCheckpoint");
  }
  try {
    PlayAudioSound("CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
  } catch (_0x5dad08) {}
  if (_0x466ab8 >= ATTRACTION_CHECKPOINTS.length - 1) {
    destroyAttractionCheckpoints();
    try {
      mp.events.callRemote("Server_Summer2026_FinishAttraction");
    } catch (_0x2a9d3f) {}
  } else {
    destroyAttractionCheckpointEntities();
    buildAttractionCheckpoint(_0x466ab8 + 1);
  }
}
function maybeStartAttractionCheckpointsForBoat(_0x432150) {
  if (_0x432150 && mp.vehicles.exists(_0x432150) && _0x432150 === localplayer.vehicle) {
    try {
      if (_0x432150.getPedInSeat(-1) !== localplayer.handle) {
        return;
      }
    } catch (_0x6c5824) {
      return;
    }
    if (isAttractionDrivingBoat(_0x432150)) {
      startAttractionCheckpoints(_0x432150);
    }
  }
}
function isEventDrivingBoat(_0x498387) {
  return [mp.game.joaat("toro2"), mp.game.joaat("toro"), mp.game.joaat("jetmax")].includes(_0x498387.model) && (typeof _0x498387.getVariable("customTrailer") == "number" || typeof _0x498387.getVariable(PARACHUTE_VARIABLE) == "number");
}
global.attractionTrackedVehicle = null;
mp.events.add("playerEnterVehicle", (_0x2d9314, _0x500d7b) => {
  if (!mp.vehicles.exists(_0x2d9314)) {
    return;
  }
  if (_0x500d7b === -1 && isAttractionDrivingBoat(_0x2d9314)) {
    startAttractionCheckpoints(_0x2d9314);
  }
  const _0x500661 = ANIMS_IN[_0x2d9314.model];
  if (_0x500661) {
    if (mp.game.joaat("banana") == _0x2d9314.model) {
      setTimeout(() => {
        global.play_animation2(localplayer, _0x500661.animDict, _0x500661.animName, 8, -8, _0x500661.flag, 1, 0, false, false, false);
      }, 1000);
    } else {
      global.play_animation2(localplayer, _0x500661.animDict, _0x500661.animName, 8, -8, _0x500661.flag, 1, 0, false, false, false);
    }
  }
  if (isEventDrivingBoat(_0x2d9314)) {
    driverTimerShowed = true;
    main_browser.execute("\n            APPS.state.hud.show_luna_park_timer_info = " + JSON.stringify(TIMER_HUD_INFO) + ";\n            APPS.state.hud.show_luna_park_timer = true;\n        ");
  }
});
mp.events.add("playerLeaveVehicle", _0x34e0d1 => {
  main_browser.execute("\n        APPS.state.hud.show_luna_park_timer = false;\n    ");
  driverTimerShowed = false;
  if (attractionTrackedVehicle) {
    if (!_0x34e0d1 || _0x34e0d1 === attractionTrackedVehicle) {
      destroyAttractionCheckpoints();
    }
  }
});
mp.events.add("playerEnterColshape", _0x3f0b61 => {
  if (!_0x3f0b61 || !_0x3f0b61.isSummer2026AttractionCp) {
    return;
  }
  if (attractionCheckpointIndex < 0) {
    return;
  }
  const _0xf3540c = localplayer.vehicle;
  if (_0xf3540c && _0xf3540c === attractionTrackedVehicle && isAttractionDrivingBoat(_0xf3540c)) {
    try {
      if (_0xf3540c.getPedInSeat(-1) !== localplayer.handle) {
        return;
      }
    } catch (_0x172dfb) {
      return;
    }
    advanceAttractionCheckpoint();
  }
});
global.summer2026AttractionsMainMenuOpened = false;
global.summer2026AttractionsMenuOpened = false;
mp.events.add("Client_Summer2026_OpenMainMenu", (_0x180df7, _0x349364) => {
  if (summer2026AttractionsMainMenuOpened) {
    return;
  }
  summer2026AttractionsMainMenuOpened = true;
  const _0x5ccfdf = _0x349364.split(",").map(Number);
  const _0x87d3ec = _0x5ccfdf.reduce((_0x400399, _0x5f1381) => _0x400399 + _0x5f1381, 0);
  main_browser.execute("\n        APPS.state.summer2026.isCaseReceived = " + _0x180df7 + ";\n        APPS.state.summer2026.completedPlaces = " + JSON.stringify(_0x5ccfdf) + ";\n        APPS.state.summer2026.caseProgress = " + _0x87d3ec + ";\n\n        APPS.state.summer2026.show = true;\n    ");
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_Summer2026_CloseMainMenu", () => {
  if (summer2026AttractionsMainMenuOpened) {
    main_browser.execute("APPS.state.summer2026.show = false;");
    ChangeHudState(true);
    mp.events.call("Enablechat");
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.show(false, false);
    summer2026AttractionsMainMenuOpened = false;
  }
});
mp.events.add("Client_Summer2026_OpenAttractionsMenu", (_0x59cca3, _0x5014dc = 0) => {
  if (!summer2026AttractionsMenuOpened) {
    summer2026AttractionsMenuOpened = true;
    main_browser.execute("APPS.state.summer2026.modal.queue = " + (_0x59cca3 + 1) + ";");
    main_browser.execute("APPS.state.summer2026.modal.queuePosition = " + _0x5014dc + ";");
    main_browser.execute("APPS.state.summer2026.modal.show = true;");
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_Summer2026_CloseAttractionsMenu", () => {
  if (summer2026AttractionsMenuOpened) {
    main_browser.execute("APPS.state.summer2026.modal.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    summer2026AttractionsMenuOpened = false;
    mp.events.callRemote("Server_Summer2026_CloseAttractionsMenu");
  }
});
mp.events.add("Client_Summer2026_AttractionParticipate", _0x1eed9c => {
  mp.events.callRemote("Server_Summer2026_AttractionParticipate", _0x1eed9c);
});
mp.events.add("Client_Summer2026_LeaveAttractionQueue", () => {
  mp.events.callRemote("Server_Summer2026_LeaveAttractionQueue");
});
mp.events.add("Client_Summer2026_SetAttractionQueue", (_0x38ed23, _0x4c5771 = 0) => {
  main_browser.execute("APPS.state.summer2026.modal.queue = " + (_0x38ed23 + 1) + ";");
  main_browser.execute("APPS.state.summer2026.modal.queuePosition = " + _0x4c5771 + ";");
});
mp.events.add("Client_Summer2026_UpdateAttractionsMenuQueue", (_0xb8ab09, _0x2012b9 = 0) => {
  if (summer2026AttractionsMenuOpened) {
    main_browser.execute("APPS.state.summer2026.modal.queue = " + (_0xb8ab09 + 1) + ";");
    main_browser.execute("APPS.state.summer2026.modal.queuePosition = " + _0x2012b9 + ";");
  }
});
mp.events.add("Client_Summer2026_GPSToAttraction", _0x47fdbd => {
  switch (_0x47fdbd) {
    case "bananaBoat":
    case "tubing":
    case "parasailing":
      SetGPSLocation(-1607.783, -1129.901, 2.146, true, 0, 5, "circle");
      break;
    case "waterSlides":
      SetGPSLocation(-1695.334, -1159.714, 13.399, true, 0, 6, "circle");
  }
});
mp.events.add("Client_Summer2026_OpenCraft", _0x48a16d => {
  mp.events.call("Client_Summer2026_CloseMainMenu");
  switch (_0x48a16d) {
    case "inflatable":
      mp.events.callRemote("Server_OrderCraftItems", 377);
      break;
    case "sandCastle":
      mp.events.callRemote("Server_OrderCraftItems", 300);
  }
});
const SAND_CASTLE_OBJECT_HASHES = ["grand_sandcastle_1", "grand_sandcastle_2", "grand_sandcastle_3"].map(_0x5bae4f => mp.game.joaat(_0x5bae4f));
const SAND_CASTLE_OBJECT_MAX_HEALTH = 10;
function loadPtfxAsset(_0x56298b) {
  return new Promise(_0x2384fa => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x56298b)) {
      return _0x2384fa(true);
    }
    mp.game.streaming.requestNamedPtfxAsset(_0x56298b);
    let _0x130458 = 0;
    const _0x498c9c = setInterval(() => {
      if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x56298b) || _0x130458 > 50) {
        clearInterval(_0x498c9c);
        if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x56298b)) {
          _0x2384fa(true);
        } else {
          _0x2384fa(false);
        }
      }
      _0x130458++;
    }, 100);
  });
}
mp.events.add("playerWeaponShot", (_0x4ea0c3, _0x5d657c) => {
  if (currentWeapon() === 101631238) {
    return;
  }
  const _0x3fe201 = mp.game.player.getEntityIsFreeAimingAt();
  if (_0x3fe201 && _0x3fe201.model && SAND_CASTLE_OBJECT_HASHES.includes(_0x3fe201.model)) {
    if (typeof _0x3fe201.healthPoints != "number") {
      _0x3fe201.healthPoints = 10;
    }
    if (_0x3fe201.healthPoints > 0) {
      _0x3fe201.healthPoints--;
    }
    updateHealthBar(_0x3fe201.healthPoints, 10, language["Песчаный замок"][curr_lang]);
    if (_0x3fe201.healthPoints % 10 == 0) {
      mp.events.callRemote("Server_Summer2026_SandCastleDamage", _0x3fe201);
    }
  }
});
mp.events.add("Server_Summer2026_SandCastleCrashEffect", _0x4e6e61 => {
  loadPtfxAsset("core").then(_0x6bf7fe => {
    if (_0x6bf7fe) {
      mp.game.graphics.setPtfxAssetNextCall("core");
      mp.game.graphics.startParticleFxNonLoopedAtCoord("exp_grd_grenade_smoke", _0x4e6e61.x, _0x4e6e61.y, _0x4e6e61.z, 0, 0, 0, 10, false, false, false);
    }
  });
});