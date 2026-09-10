global.onBirthdayShootingRange = false;
const SR = {
  MODELS: {
    CANVAS: "m25_2_prop_m52_wallart_l_10",
    TARGET_SHOOT: "prop_target_ora_purp_01",
    TARGET_NOSHOOT: "prop_target_oran_cross"
  },
  CANVAS: {
    HALF_WIDTH: 1.9,
    HALF_HEIGHT: 0.35,
    TARGET_Y_OFFSET: -0.14,
    TARGET_Y_STEP: -0.01
  },
  WEAPON: {
    HASH: 453432689,
    AMMO: 200
  },
  GAME: {
    MAX_ACTIVE_TARGETS: 4,
    HIT_RADIUS: 0.5,
    WAYPOINT_REACH_DIST: 0.08,
    MARKER_DISTANCE: 5.5,
    MARKER_INTERACT_RANGE: 2,
    COUNTDOWN_SECONDS: 5,
    UPDATE_INTERVAL: 16
  },
  SCORE: {
    HIT_SHOOT: 100,
    HIT_NOSHOOT: -150,
    TARGET_EXPIRED: -25
  },
  STATES: {
    IDLE: 0,
    COUNTDOWN: 1,
    PLAYING: 2,
    ENDING: 3
  }
};
const TARGET_PATTERNS = [{
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.5,
    speed: 0
  }, {
    x: 0,
    z: 0.5,
    speed: 0.5
  }, {
    x: 2.2,
    z: 0.5,
    speed: 0.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.3,
    speed: 0
  }, {
    x: 0,
    z: -0.3,
    speed: 0.6
  }, {
    x: -2.2,
    z: -0.3,
    speed: 0.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0,
    speed: 0
  }, {
    x: 2.2,
    z: 0,
    speed: 0.7
  }]
}, {
  type: 1,
  waypoints: [{
    x: 2.2,
    z: 0.6,
    speed: 0
  }, {
    x: -2.2,
    z: 0.6,
    speed: 0.4
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: -0.6,
    speed: 0
  }, {
    x: 2.2,
    z: -0.6,
    speed: 0.55
  }]
}, {
  type: 0,
  waypoints: [{
    x: 0.9,
    z: 0.7,
    speed: 0
  }, {
    x: 0.9,
    z: -0.7,
    speed: 0.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.3,
    z: -0.7,
    speed: 0
  }, {
    x: -1.3,
    z: 0.7,
    speed: 0.6
  }]
}, {
  type: 1,
  waypoints: [{
    x: 0,
    z: 0.7,
    speed: 0
  }, {
    x: 0,
    z: -0.7,
    speed: 0.45
  }]
}, {
  type: 0,
  waypoints: [{
    x: -0.55,
    z: -0.7,
    speed: 0
  }, {
    x: -0.55,
    z: 0.7,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: 1.8,
    z: 0.7,
    speed: 0
  }, {
    x: 1.8,
    z: -0.7,
    speed: 0.55
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: -0.7,
    speed: 0
  }, {
    x: 2.2,
    z: 0.7,
    speed: 0.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.7,
    speed: 0
  }, {
    x: -2.2,
    z: 0.7,
    speed: 0.65
  }]
}, {
  type: 1,
  waypoints: [{
    x: -2.2,
    z: 0.7,
    speed: 0
  }, {
    x: 2.2,
    z: -0.7,
    speed: 0.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.7,
    speed: 0
  }, {
    x: -2.2,
    z: -0.7,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.8,
    z: 0,
    speed: 0
  }, {
    x: 1.8,
    z: 0.5,
    speed: 0.55
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0,
    speed: 0
  }, {
    x: -0.75,
    z: 0.6,
    speed: 0.7
  }, {
    x: 0.75,
    z: -0.4,
    speed: 0.8
  }, {
    x: 2.2,
    z: 0.3,
    speed: 0.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.5,
    speed: 0
  }, {
    x: 0.55,
    z: -0.5,
    speed: 0.65
  }, {
    x: -0.9,
    z: 0.4,
    speed: 0.7
  }, {
    x: -2.2,
    z: -0.3,
    speed: 0.6
  }]
}, {
  type: 1,
  waypoints: [{
    x: -2.2,
    z: -0.5,
    speed: 0
  }, {
    x: -0.55,
    z: 0.5,
    speed: 0.6
  }, {
    x: 0.9,
    z: -0.3,
    speed: 0.7
  }, {
    x: 2.2,
    z: 0.6,
    speed: 0.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: 0,
    z: 0.7,
    speed: 0
  }, {
    x: -1.45,
    z: -0.2,
    speed: 0.7
  }, {
    x: 1.45,
    z: -0.4,
    speed: 0.8
  }, {
    x: 0,
    z: 0.6,
    speed: 0.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.6,
    speed: 0
  }, {
    x: 0,
    z: 0.3,
    speed: 0.65
  }, {
    x: -1.8,
    z: -0.4,
    speed: 0.7
  }, {
    x: -2.2,
    z: 0.5,
    speed: 0.55
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.7,
    speed: 0
  }, {
    x: -0.9,
    z: 0.1,
    speed: 0.8
  }, {
    x: 0,
    z: 0.6,
    speed: 0.9
  }, {
    x: 0.9,
    z: 0,
    speed: 0.85
  }, {
    x: 2.2,
    z: 0.4,
    speed: 0.7
  }]
}, {
  type: 1,
  waypoints: [{
    x: 2.2,
    z: 0,
    speed: 0
  }, {
    x: 0.9,
    z: 0.5,
    speed: 0.7
  }, {
    x: -0.55,
    z: -0.2,
    speed: 0.8
  }, {
    x: -1.8,
    z: 0.4,
    speed: 0.75
  }, {
    x: -2.2,
    z: -0.5,
    speed: 0.65
  }]
}, {
  type: 0,
  waypoints: [{
    x: 0,
    z: -0.7,
    speed: 0
  }, {
    x: 1.45,
    z: 0,
    speed: 0.9
  }, {
    x: 0,
    z: 0.7,
    speed: 0.85
  }, {
    x: -1.45,
    z: 0,
    speed: 0.9
  }, {
    x: 0,
    z: -0.4,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: -0.9,
    z: 0,
    speed: 0
  }, {
    x: -0.9,
    z: 0.6,
    speed: 0.6
  }, {
    x: 0.9,
    z: 0.6,
    speed: 0.7
  }, {
    x: 0.9,
    z: -0.6,
    speed: 0.6
  }, {
    x: -0.9,
    z: -0.6,
    speed: 0.65
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.7,
    speed: 0
  }, {
    x: 1.1,
    z: 0.2,
    speed: 0.8
  }, {
    x: -0.35,
    z: -0.4,
    speed: 0.9
  }, {
    x: -1.45,
    z: 0.3,
    speed: 0.85
  }, {
    x: -2.2,
    z: -0.2,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.3,
    speed: 0
  }, {
    x: 2.2,
    z: 0.3,
    speed: 1.2
  }]
}, {
  type: 1,
  waypoints: [{
    x: 2.2,
    z: -0.4,
    speed: 0
  }, {
    x: -2.2,
    z: 0.4,
    speed: 1
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: -0.6,
    speed: 0
  }, {
    x: 0,
    z: 0.6,
    speed: 1.1
  }, {
    x: 2.2,
    z: -0.2,
    speed: 1.3
  }]
}, {
  type: 0,
  waypoints: [{
    x: 0.9,
    z: 0.7,
    speed: 0
  }, {
    x: -0.9,
    z: -0.7,
    speed: 1.2
  }, {
    x: 0.9,
    z: 0,
    speed: 1
  }]
}, {
  type: 1,
  waypoints: [{
    x: -2.2,
    z: 0.7,
    speed: 0
  }, {
    x: 2.2,
    z: -0.7,
    speed: 1.4
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.1,
    z: 0.4,
    speed: 0
  }, {
    x: 0.35,
    z: 0.4,
    speed: 0.9
  }, {
    x: 0.35,
    z: -0.2,
    speed: 0.9
  }]
}, {
  type: 0,
  waypoints: [{
    x: 1.45,
    z: -0.5,
    speed: 0
  }, {
    x: 0,
    z: -0.5,
    speed: 0.85
  }, {
    x: 0,
    z: 0.3,
    speed: 0.85
  }]
}, {
  type: 1,
  waypoints: [{
    x: -0.35,
    z: -0.6,
    speed: 0
  }, {
    x: -0.35,
    z: 0.2,
    speed: 0.7
  }, {
    x: 1.1,
    z: 0.2,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: 1.8,
    z: 0.6,
    speed: 0
  }, {
    x: 0.55,
    z: 0.6,
    speed: 1
  }, {
    x: 0.55,
    z: -0.1,
    speed: 1
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.8,
    z: -0.2,
    speed: 0
  }, {
    x: -0.55,
    z: -0.2,
    speed: 0.95
  }, {
    x: -0.55,
    z: 0.5,
    speed: 0.95
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0,
    speed: 0
  }, {
    x: -1.1,
    z: 0.5,
    speed: 0.6
  }, {
    x: 0,
    z: -0.3,
    speed: 0.7
  }, {
    x: 1.1,
    z: 0.5,
    speed: 0.6
  }, {
    x: 2.2,
    z: 0,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.3,
    speed: 0
  }, {
    x: 1.1,
    z: -0.4,
    speed: 0.65
  }, {
    x: 0,
    z: 0.5,
    speed: 0.7
  }, {
    x: -1.1,
    z: -0.4,
    speed: 0.65
  }, {
    x: -2.2,
    z: 0.3,
    speed: 0.7
  }]
}, {
  type: 1,
  waypoints: [{
    x: -2.2,
    z: -0.4,
    speed: 0
  }, {
    x: -0.75,
    z: 0.3,
    speed: 0.55
  }, {
    x: 0.75,
    z: -0.5,
    speed: 0.6
  }, {
    x: 2.2,
    z: 0.2,
    speed: 0.55
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.6,
    speed: 0
  }, {
    x: 0.75,
    z: 0.4,
    speed: 0.75
  }, {
    x: -0.75,
    z: -0.2,
    speed: 0.8
  }, {
    x: -2.2,
    z: 0.6,
    speed: 0.75
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.6,
    speed: 0
  }, {
    x: -0.9,
    z: -0.5,
    speed: 0.7
  }, {
    x: 0.55,
    z: 0.4,
    speed: 0.75
  }, {
    x: 1.8,
    z: -0.3,
    speed: 0.7
  }, {
    x: 2.2,
    z: 0.5,
    speed: 0.65
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0,
    speed: 0
  }, {
    x: -0.55,
    z: 0.6,
    speed: 0.8
  }, {
    x: 0.9,
    z: 0.6,
    speed: 0.85
  }, {
    x: 0.9,
    z: -0.4,
    speed: 0.8
  }, {
    x: -0.55,
    z: -0.4,
    speed: 0.85
  }, {
    x: -2.2,
    z: 0.2,
    speed: 0.7
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.5,
    speed: 0
  }, {
    x: 0.75,
    z: 0.5,
    speed: 0.9
  }, {
    x: 0.75,
    z: -0.5,
    speed: 0.9
  }, {
    x: -0.75,
    z: -0.5,
    speed: 0.9
  }, {
    x: -0.75,
    z: 0.5,
    speed: 0.9
  }, {
    x: -2.2,
    z: 0.5,
    speed: 0.8
  }]
}, {
  type: 1,
  waypoints: [{
    x: 0,
    z: 0.7,
    speed: 0
  }, {
    x: 1.3,
    z: 0,
    speed: 0.7
  }, {
    x: 0,
    z: -0.7,
    speed: 0.7
  }, {
    x: -1.3,
    z: 0,
    speed: 0.7
  }, {
    x: 0,
    z: 0.5,
    speed: 0.65
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.45,
    z: -0.6,
    speed: 0
  }, {
    x: -1.45,
    z: 0.4,
    speed: 0.75
  }, {
    x: 0.35,
    z: 0.4,
    speed: 0.8
  }, {
    x: 0.35,
    z: -0.6,
    speed: 0.75
  }, {
    x: 1.8,
    z: -0.6,
    speed: 0.8
  }]
}, {
  type: 0,
  waypoints: [{
    x: 1.1,
    z: 0.7,
    speed: 0
  }, {
    x: -1.1,
    z: 0.7,
    speed: 0.85
  }, {
    x: -1.1,
    z: -0.3,
    speed: 0.85
  }, {
    x: 1.1,
    z: -0.3,
    speed: 0.85
  }, {
    x: 1.1,
    z: -0.7,
    speed: 0.8
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: -0.7,
    speed: 0
  }, {
    x: 0,
    z: 0,
    speed: 1.3
  }, {
    x: 2.2,
    z: 0.7,
    speed: 1.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.7,
    speed: 0
  }, {
    x: -0.75,
    z: -0.2,
    speed: 1.4
  }, {
    x: -2.2,
    z: 0.5,
    speed: 1.1
  }]
}, {
  type: 1,
  waypoints: [{
    x: 0,
    z: -0.7,
    speed: 0
  }, {
    x: 0,
    z: 0.7,
    speed: 1.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.7,
    speed: 0
  }, {
    x: 1.1,
    z: -0.3,
    speed: 1.3
  }, {
    x: -1.1,
    z: -0.7,
    speed: 1.4
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.5,
    speed: 0
  }, {
    x: -1.45,
    z: 0.4,
    speed: 1.5
  }, {
    x: 0.75,
    z: 0.7,
    speed: 1.2
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0.3,
    speed: 0
  }, {
    x: -1.45,
    z: -0.5,
    speed: 0.9
  }, {
    x: 0,
    z: 0.6,
    speed: 1
  }, {
    x: 1.3,
    z: -0.6,
    speed: 1.1
  }, {
    x: 0.35,
    z: 0.3,
    speed: 0.9
  }, {
    x: 2.2,
    z: -0.1,
    speed: 1
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: -0.7,
    speed: 0
  }, {
    x: 0.9,
    z: 0.5,
    speed: 1
  }, {
    x: -0.9,
    z: -0.3,
    speed: 1.1
  }, {
    x: 0.55,
    z: 0.7,
    speed: 1
  }, {
    x: -1.8,
    z: 0.1,
    speed: 1.1
  }, {
    x: -2.2,
    z: -0.6,
    speed: 0.9
  }]
}, {
  type: 1,
  waypoints: [{
    x: 0,
    z: 0,
    speed: 0
  }, {
    x: -1.3,
    z: 0.5,
    speed: 0.8
  }, {
    x: 1.3,
    z: 0.5,
    speed: 0.85
  }, {
    x: 1.3,
    z: -0.5,
    speed: 0.8
  }, {
    x: -1.3,
    z: -0.5,
    speed: 0.85
  }, {
    x: 0,
    z: 0,
    speed: 0.75
  }]
}, {
  type: 0,
  waypoints: [{
    x: -1.65,
    z: 0.7,
    speed: 0
  }, {
    x: 0.55,
    z: -0.3,
    speed: 1
  }, {
    x: -1.1,
    z: -0.7,
    speed: 1.1
  }, {
    x: 1.8,
    z: 0.4,
    speed: 1.05
  }, {
    x: 0,
    z: 0.7,
    speed: 1
  }]
}, {
  type: 0,
  waypoints: [{
    x: 1.65,
    z: -0.7,
    speed: 0
  }, {
    x: -0.55,
    z: 0.3,
    speed: 0.95
  }, {
    x: 1.1,
    z: 0.7,
    speed: 1
  }, {
    x: -1.8,
    z: -0.4,
    speed: 1.05
  }, {
    x: -0.9,
    z: 0.6,
    speed: 0.9
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: 0,
    speed: 0
  }, {
    x: 2.2,
    z: 0,
    speed: 1.8
  }]
}, {
  type: 1,
  waypoints: [{
    x: 0,
    z: 0.7,
    speed: 0
  }, {
    x: -1.45,
    z: -0.5,
    speed: 1.5
  }, {
    x: 1.45,
    z: 0.6,
    speed: 1.6
  }, {
    x: 0,
    z: -0.7,
    speed: 1.4
  }]
}, {
  type: 0,
  waypoints: [{
    x: 2.2,
    z: 0.7,
    speed: 0
  }, {
    x: -1.1,
    z: -0.5,
    speed: 1.6
  }, {
    x: 1.45,
    z: -0.7,
    speed: 1.7
  }, {
    x: -2.2,
    z: 0.3,
    speed: 1.5
  }]
}, {
  type: 0,
  waypoints: [{
    x: -2.2,
    z: -0.7,
    speed: 0
  }, {
    x: 0.75,
    z: 0.6,
    speed: 1.7
  }, {
    x: -0.75,
    z: -0.2,
    speed: 1.8
  }, {
    x: 2.2,
    z: 0.7,
    speed: 1.6
  }]
}, {
  type: 0,
  waypoints: [{
    x: 0,
    z: 0,
    speed: 0
  }, {
    x: 1.8,
    z: 0.6,
    speed: 1.9
  }, {
    x: -1.8,
    z: -0.6,
    speed: 2
  }, {
    x: 1.45,
    z: -0.5,
    speed: 1.8
  }, {
    x: -1.45,
    z: 0.5,
    speed: 1.9
  }]
}];
function srDist3D(_0x4db79e, _0x441582, _0x818652, _0x5ac5bd, _0x24a462, _0x1dc442) {
  const _0x17b59e = _0x5ac5bd - _0x4db79e;
  const _0x4ffe12 = _0x24a462 - _0x441582;
  const _0x388ed2 = _0x1dc442 - _0x818652;
  return Math.sqrt(_0x17b59e * _0x17b59e + _0x4ffe12 * _0x4ffe12 + _0x388ed2 * _0x388ed2);
}
class ShootingRange {
  constructor(_0x1ef06a, _0x62f4ba, _0x5dfa00) {
    this.canvasPos = _0x1ef06a;
    this.canvasHeading = _0x62f4ba;
    this.state = SR.STATES.IDLE;
    this.isActive = false;
    this.isObserver = false;
    this.activeTargets = [];
    this.targetQueue = [];
    this.totalTargets = 0;
    this.processedTargets = 0;
    this.gameSequence = null;
    this.nextSeqIndex = 0;
    this.score = 0;
    this.shootHits = 0;
    this.noshootHits = 0;
    this.missShot = 0;
    this.expired = 0;
    this.updateInterval = null;
    this.lastUpdateTime = 0;
    this.countdownValue = 0;
    this.countdownTimer = null;
    this.markerPos = _0x5dfa00;
    this.marker = null;
    this.isSpawning = false;
  }
  init() {
    try {
      this.marker = mp.markers.new(1, new mp.Vector3(this.markerPos.x, this.markerPos.y, this.markerPos.z - 1), 1.5, {
        color: [255, 255, 0, 75],
        dimension: 0
      });
      return true;
    } catch (_0x684835) {
      mp.gui.chat.push("Error init tir: " + String(_0x684835));
      return false;
    }
  }
  render() {
    if (this.isActive) {
      this.pushLocalPlayerFromFireZone();
    }
    if (!this.isObserver) {
      switch (this.state) {
        case SR.STATES.COUNTDOWN:
        case SR.STATES.PLAYING:
          this.disableMovementControls();
      }
    }
  }
  disableMovementControls() {
    mp.game.controls.disableControlAction(0, 21, true);
    mp.game.controls.disableControlAction(0, 30, true);
    mp.game.controls.disableControlAction(0, 31, true);
    mp.game.controls.disableControlAction(0, 36, true);
    mp.game.controls.disableControlAction(0, 44, true);
    mp.game.controls.disableControlAction(0, 37, true);
  }
  pushLocalPlayerFromFireZone() {
    if (this.player === mp.players.local) {
      return;
    }
    const _0x48583d = (mp.players.local.vehicle ? mp.players.local.vehicle : mp.players.local).position;
    const _0x4d8d70 = this.canvasPos.x - this.markerPos.x;
    const _0x2087c2 = this.canvasPos.y - this.markerPos.y;
    const _0x5996b9 = Math.sqrt(_0x4d8d70 * _0x4d8d70 + _0x2087c2 * _0x2087c2);
    if (_0x5996b9 < 0.01) {
      return;
    }
    const _0x126ea9 = _0x4d8d70 / _0x5996b9;
    const _0x126c51 = _0x2087c2 / _0x5996b9;
    const _0x4299dc = _0x48583d.x - this.markerPos.x;
    const _0x1a9a5d = _0x48583d.y - this.markerPos.y;
    const _0x4008d0 = _0x4299dc * _0x126ea9 + _0x1a9a5d * _0x126c51;
    if (_0x4008d0 < -1 || _0x4008d0 > _0x5996b9 + 1) {
      return;
    }
    const _0x4cb500 = _0x4299dc * -_0x126c51 + _0x1a9a5d * _0x126ea9;
    if (Math.abs(_0x4cb500) > 2.2) {
      return;
    }
    if (Math.abs(_0x48583d.z - this.markerPos.z) > 3) {
      return;
    }
    const _0x3cbc75 = 2.7 - Math.abs(_0x4cb500);
    const _0x200afc = _0x4cb500 >= 0 ? 1 : -1;
    const _0x504bab = _0x48583d.x + -_0x126c51 * _0x200afc * _0x3cbc75;
    const _0x4f31dd = _0x48583d.y + _0x126ea9 * _0x200afc * _0x3cbc75;
    (mp.players.local.vehicle ? mp.players.local.vehicle : mp.players.local).position = new mp.Vector3(_0x504bab, _0x4f31dd, _0x48583d.z);
    ShowNotification(language["Вы были сдвинуты за пределы зоны огня"][curr_lang], 2);
  }
  forceFirstPerson() {
    this.savedCamMode = mp.game.cam.getFollowPedViewMode();
    mp.game.cam.setFollowPedViewMode(4);
  }
  restoreCameraMode() {
    mp.game.cam.setFollowPedViewMode(this.savedCamMode);
  }
  async startGame(_0x291dc6, _0x12872f) {
    try {
      if (this.state !== SR.STATES.IDLE) {
        return;
      }
      global.onBirthdayShootingRange = true;
      this.forceFirstPerson();
      this.isObserver = false;
      this.player = _0x291dc6;
      this.gameSequence = _0x12872f;
      this.nextSeqIndex = 0;
      if (_0x12872f && Array.isArray(_0x12872f)) {
        this.targetQueue = _0x12872f.map(_0xa92ed4 => TARGET_PATTERNS[_0xa92ed4]).filter(Boolean);
      } else {
        this.targetQueue = [...TARGET_PATTERNS];
      }
      this.totalTargets = this.targetQueue.length;
      this.processedTargets = 0;
      this.score = 0;
      this.shootHits = 0;
      this.noshootHits = 0;
      this.missShot = 0;
      this.expired = 0;
      this.activeTargets = [];
      this.isSpawning = false;
      if (this.player === mp.players.local) {
        if (this.markerPos) {
          localplayer.position = new mp.Vector3(this.markerPos.x, this.markerPos.y, this.markerPos.z);
        }
        const _0x2a7716 = this.canvasHeading % 360;
        localplayer.heading = _0x2a7716;
        localplayer.freezePosition(true);
        localplayer.setInvincible(true);
        localplayer.setCanSwitchWeapon(false);
      }
      this.state = SR.STATES.COUNTDOWN;
      this.countdownValue = SR.GAME.COUNTDOWN_SECONDS;
      const _0x571352 = [{
        name: "timer",
        title: language["Время до начала"][curr_lang],
        value: SR.GAME.COUNTDOWN_SECONDS,
        isTimer: true
      }];
      main_browser.execute("\n                APPS.state.hud.show_luna_park_timer_info = " + JSON.stringify(_0x571352) + ";\n                APPS.state.hud.show_luna_park_timer = true;\n            ");
      this.countdownTimer = setInterval(() => {
        this.countdownValue--;
        if (this.countdownValue <= 0) {
          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
          this.beginPlaying();
        }
      }, 1000);
    } catch (_0xee6a45) {
      mp.gui.chat.push("[ShootingRange] startGame: " + String(_0xee6a45));
    }
  }
  startObserving(_0x166990) {
    if (this.player !== mp.players.local) {
      if (this.state !== SR.STATES.IDLE) {
        this.stopObserving();
      }
      this.isObserver = true;
      this.gameSequence = _0x166990;
      this.nextSeqIndex = 0;
      this.targetQueue = _0x166990.map(_0xf5abac => TARGET_PATTERNS[_0xf5abac]).filter(Boolean);
      this.totalTargets = this.targetQueue.length;
      this.processedTargets = 0;
      this.activeTargets = [];
      this.isSpawning = false;
      setTimeout(() => {
        if (this.isObserver) {
          this.beginPlaying();
        }
      }, SR.GAME.COUNTDOWN_SECONDS * 1000);
    }
  }
  startObservingFromSnapshot(_0x27bbeb) {
    if (this.player !== mp.players.local) {
      if (this.state !== SR.STATES.IDLE) {
        this.stopObserving();
      }
      this.isObserver = true;
      this.gameSequence = _0x27bbeb.sequence;
      this.nextSeqIndex = _0x27bbeb.nextSeqIndex;
      this.targetQueue = _0x27bbeb.remainingQueue.map(_0x2080f4 => TARGET_PATTERNS[_0x2080f4]).filter(Boolean);
      this.totalTargets = _0x27bbeb.totalTargets;
      this.processedTargets = _0x27bbeb.processedTargets;
      this.activeTargets = [];
      this.isSpawning = false;
      this.state = SR.STATES.PLAYING;
      this.isActive = true;
      this.lastUpdateTime = Date.now();
      for (const _0x473f85 of _0x27bbeb.activeTargets) {
        const _0xb944 = TARGET_PATTERNS[_0x473f85.patternIdx];
        if (!_0xb944) {
          continue;
        }
        const _0x2943dc = _0xb944.type === 0 ? SR.MODELS.TARGET_SHOOT : SR.MODELS.TARGET_NOSHOOT;
        const _0x514a0c = this._localToWorld(_0x473f85.localPos.x, _0x473f85.yOffset, _0x473f85.localPos.z);
        const _0x4a79c4 = mp.objects.new(_0x2943dc, new mp.Vector3(_0x514a0c.x, _0x514a0c.y, _0x514a0c.z), {
          rotation: new mp.Vector3(0, 0, this.canvasHeading),
          alpha: 255,
          dimension: 0
        });
        _0x4a79c4.freezePosition(true);
        _0x4a79c4.setCollision(true, true);
        this.activeTargets.push({
          entity: _0x4a79c4,
          pattern: _0xb944,
          type: _0xb944.type,
          seqIndex: _0x473f85.seqIndex,
          currentWaypoint: _0x473f85.currentWaypoint,
          localPos: {
            x: _0x473f85.localPos.x,
            z: _0x473f85.localPos.z
          },
          depthSlot: _0x473f85.depthSlot,
          yOffset: _0x473f85.yOffset,
          isActive: true
        });
      }
      this.startUpdateLoop();
    }
  }
  getStateSnapshot() {
    return {
      sequence: this.gameSequence,
      nextSeqIndex: this.nextSeqIndex,
      totalTargets: this.totalTargets,
      processedTargets: this.processedTargets,
      activeTargets: this.activeTargets.map(_0xe483ec => ({
        seqIndex: _0xe483ec.seqIndex,
        patternIdx: this.gameSequence ? this.gameSequence[_0xe483ec.seqIndex] : 0,
        localPos: {
          x: _0xe483ec.localPos.x,
          z: _0xe483ec.localPos.z
        },
        currentWaypoint: _0xe483ec.currentWaypoint,
        depthSlot: _0xe483ec.depthSlot,
        yOffset: _0xe483ec.yOffset
      })),
      remainingQueue: this.targetQueue.map(_0x2942ab => TARGET_PATTERNS.indexOf(_0x2942ab))
    };
  }
  observerRemoveTarget(_0x42d1d7) {
    if (this.player === mp.players.local) {
      return;
    }
    const _0x101e77 = this.activeTargets.findIndex(_0x3e24d1 => _0x3e24d1.seqIndex === _0x42d1d7);
    if (_0x101e77 === -1) {
      return;
    }
    const _0x45e453 = this.activeTargets[_0x101e77];
    _0x45e453.isActive = false;
    if (mp.objects.exists(_0x45e453.entity)) {
      _0x45e453.entity.destroy();
    }
    this.activeTargets.splice(_0x101e77, 1);
    this.processedTargets++;
    if (this.state === SR.STATES.PLAYING) {
      this.spawnNextTargets();
    }
  }
  stopObserving() {
    if (this.player !== mp.players.local) {
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
        this.updateInterval = null;
      }
      for (const _0x423e21 of this.activeTargets) {
        if (mp.objects.exists(_0x423e21.entity)) {
          _0x423e21.entity.destroy();
        }
      }
      this.activeTargets = [];
      this.targetQueue = [];
      this.isActive = false;
      this.isObserver = false;
      this.isSpawning = false;
      this.state = SR.STATES.IDLE;
    }
  }
  beginPlaying() {
    this.state = SR.STATES.PLAYING;
    this.isActive = true;
    this.lastUpdateTime = Date.now();
    if (!this.isObserver) {
      const _0x54240a = [{
        name: "score",
        title: language.Очки[curr_lang],
        value: this.score
      }, {
        name: "missShots",
        title: language.Промахи[curr_lang],
        value: this.missShot
      }, {
        name: "penalties",
        title: language.Штрафы[curr_lang],
        value: this.noshootHits
      }, {
        name: "expired",
        title: language.Пропущено[curr_lang],
        value: this.expired
      }, {
        name: "targets",
        title: language.Мишени[curr_lang],
        value: this.processedTargets + " / " + this.totalTargets
      }];
      main_browser.execute("this.AppComponents.hud.lunaParkTimer.setFields(" + JSON.stringify(_0x54240a) + ");");
      ShowNotification(language["Стреляйте по движущимся мишеням!"][curr_lang], 2);
    }
    this.spawnNextTargets();
    this.startUpdateLoop();
  }
  updateHUDFields() {
    main_browser.execute("\n            this.AppComponents.hud.lunaParkTimer.updateFieldValue('score', '" + this.score + "');\n            this.AppComponents.hud.lunaParkTimer.updateFieldValue('targets', '" + this.processedTargets + " / " + this.totalTargets + "');\n            this.AppComponents.hud.lunaParkTimer.updateFieldValue('missShots', '" + this.missShot + "');\n            this.AppComponents.hud.lunaParkTimer.updateFieldValue('penalties', '" + this.noshootHits + "');\n            this.AppComponents.hud.lunaParkTimer.updateFieldValue('expired', '" + this.expired + "');\n        ");
  }
  async spawnNextTargets() {
    try {
      if (this.isSpawning) {
        return;
      }
      for (this.isSpawning = true; this.activeTargets.length < SR.GAME.MAX_ACTIVE_TARGETS && this.targetQueue.length > 0;) {
        const _0x4efe53 = this.targetQueue.shift();
        await this.spawnTarget(_0x4efe53);
      }
      this.isSpawning = false;
    } catch (_0x522ecf) {
      mp.gui.chat.push("[ShootingRange] spawnNextTargets: " + String(_0x522ecf));
    }
  }
  _getFreeDepthSlot() {
    const _0x32d809 = new Set(this.activeTargets.map(_0x4e3342 => _0x4e3342.depthSlot));
    for (let _0x3691bf = 0; _0x3691bf < SR.GAME.MAX_ACTIVE_TARGETS + 4; _0x3691bf++) {
      if (!_0x32d809.has(_0x3691bf)) {
        return _0x3691bf;
      }
    }
    return this.activeTargets.length;
  }
  _localToWorld(_0x4effe9, _0x11c315, _0x33e84e) {
    const _0x4300b7 = this.canvasHeading * Math.PI / 180;
    const _0x37cb67 = Math.cos(_0x4300b7);
    const _0x70d864 = Math.sin(_0x4300b7);
    return {
      x: this.canvasPos.x + _0x4effe9 * _0x37cb67 - _0x11c315 * _0x70d864,
      y: this.canvasPos.y + _0x4effe9 * _0x70d864 + _0x11c315 * _0x37cb67,
      z: this.canvasPos.z + _0x33e84e
    };
  }
  async spawnTarget(_0x59d433) {
    try {
      const _0x2fd14d = _0x59d433.type === 0 ? SR.MODELS.TARGET_SHOOT : SR.MODELS.TARGET_NOSHOOT;
      const _0x1b8c7c = this._getFreeDepthSlot();
      const _0x4a65dc = SR.CANVAS.TARGET_Y_OFFSET + _0x1b8c7c * SR.CANVAS.TARGET_Y_STEP;
      const _0x3a3db5 = _0x59d433.waypoints[0];
      const _0x172782 = this._localToWorld(_0x3a3db5.x, _0x4a65dc, _0x3a3db5.z);
      const _0x1464bb = mp.objects.new(_0x2fd14d, new mp.Vector3(_0x172782.x, _0x172782.y, _0x172782.z), {
        rotation: new mp.Vector3(0, 0, this.canvasHeading),
        alpha: 255,
        dimension: 0
      });
      _0x1464bb.freezePosition(true);
      _0x1464bb.setCollision(true, true);
      const _0x5770e7 = this.nextSeqIndex++;
      this.activeTargets.push({
        entity: _0x1464bb,
        pattern: _0x59d433,
        type: _0x59d433.type,
        seqIndex: _0x5770e7,
        currentWaypoint: 1,
        localPos: {
          x: _0x3a3db5.x,
          z: _0x3a3db5.z
        },
        depthSlot: _0x1b8c7c,
        yOffset: _0x4a65dc,
        isActive: true
      });
    } catch (_0x358e1d) {
      mp.gui.chat.push("[ShootingRange] spawnTarget: " + String(_0x358e1d));
    }
  }
  startUpdateLoop() {
    this.updateInterval = setInterval(() => {
      if (!this.isActive) {
        clearInterval(this.updateInterval);
        this.updateInterval = null;
        return;
      }
      const _0x3b2644 = Date.now();
      const _0x2e2a8c = (_0x3b2644 - this.lastUpdateTime) / 1000;
      this.lastUpdateTime = _0x3b2644;
      this.update(_0x2e2a8c);
    }, SR.GAME.UPDATE_INTERVAL);
  }
  update(_0x186563) {
    const _0x25ad52 = Math.min(_0x186563, 0.1);
    for (let _0x6ae1a2 = this.activeTargets.length - 1; _0x6ae1a2 >= 0; _0x6ae1a2--) {
      const _0x125620 = this.activeTargets[_0x6ae1a2];
      if (_0x125620.isActive) {
        this.updateTarget(_0x125620, _0x6ae1a2, _0x25ad52);
      }
    }
    if (!this.isObserver && this.processedTargets >= this.totalTargets && this.activeTargets.length === 0) {
      this.endGame();
    }
  }
  updateTarget(_0x2bc540, _0x30dd4e, _0x15fd20) {
    if (!mp.objects.exists(_0x2bc540.entity)) {
      if (!this.isObserver) {
        this.removeTarget(_0x30dd4e, false);
      }
      return;
    }
    const _0x5f0ed6 = _0x2bc540.pattern.waypoints[_0x2bc540.currentWaypoint];
    if (!_0x5f0ed6) {
      if (this.isObserver) {
        _0x2bc540.isActive = false;
        return;
      } else {
        this.removeTarget(_0x30dd4e, false);
        return;
      }
    }
    const _0x2a7f1c = _0x5f0ed6.x - _0x2bc540.localPos.x;
    const _0x1ffbe7 = _0x5f0ed6.z - _0x2bc540.localPos.z;
    const _0x3c30c0 = Math.sqrt(_0x2a7f1c * _0x2a7f1c + _0x1ffbe7 * _0x1ffbe7);
    if (_0x3c30c0 < SR.GAME.WAYPOINT_REACH_DIST) {
      _0x2bc540.localPos.x = _0x5f0ed6.x;
      _0x2bc540.localPos.z = _0x5f0ed6.z;
      _0x2bc540.currentWaypoint++;
      if (_0x2bc540.currentWaypoint >= _0x2bc540.pattern.waypoints.length) {
        if (this.isObserver) {
          _0x2bc540.isActive = false;
          return;
        } else {
          this.removeTarget(_0x30dd4e, false);
          return;
        }
      }
    } else {
      const _0x219ec2 = Math.min(_0x5f0ed6.speed * _0x15fd20, _0x3c30c0);
      _0x2bc540.localPos.x += _0x2a7f1c / _0x3c30c0 * _0x219ec2;
      _0x2bc540.localPos.z += _0x1ffbe7 / _0x3c30c0 * _0x219ec2;
    }
    this.updateTargetWorldPos(_0x2bc540);
  }
  updateTargetWorldPos(_0x1aa1f1) {
    const _0x340a2d = this._localToWorld(_0x1aa1f1.localPos.x, _0x1aa1f1.yOffset, _0x1aa1f1.localPos.z);
    _0x1aa1f1.entity.position = new mp.Vector3(_0x340a2d.x, _0x340a2d.y, _0x340a2d.z);
  }
  onWeaponShot(_0x454d11, _0x1f8117) {
    if (this.isObserver) {
      return;
    }
    if (this.state !== SR.STATES.PLAYING) {
      return;
    }
    if (!_0x454d11) {
      return;
    }
    if (this.player === mp.players.local) {
      mp.players.local.setAmmoInClip(mp.game.joaat("weapon_pistol"), 12);
    }
    let _0x3280fb = null;
    let _0x200bc4 = -1;
    let _0x5c84fc = Infinity;
    for (let _0x5f2c0d = 0; _0x5f2c0d < this.activeTargets.length; _0x5f2c0d++) {
      const _0xde7c9b = this.activeTargets[_0x5f2c0d];
      if (!_0xde7c9b.isActive) {
        continue;
      }
      const _0x3cdaf7 = _0xde7c9b.entity.position;
      const _0x14bc39 = srDist3D(_0x454d11.x, _0x454d11.y, _0x454d11.z, _0x3cdaf7.x, _0x3cdaf7.y, _0x3cdaf7.z);
      if (_0x14bc39 < _0x5c84fc) {
        _0x5c84fc = _0x14bc39;
        _0x3280fb = _0xde7c9b;
        _0x200bc4 = _0x5f2c0d;
      }
    }
    if (_0x3280fb && _0x5c84fc < SR.GAME.HIT_RADIUS) {
      this.onTargetHit(_0x3280fb, _0x200bc4);
    } else {
      this.missShot++;
      this.updateHUDFields();
    }
  }
  onTargetHit(_0x47d094, _0x1bf475) {
    if (_0x47d094.type === 0) {
      this.score += SR.SCORE.HIT_SHOOT;
      this.shootHits++;
    } else {
      this.score += SR.SCORE.HIT_NOSHOOT;
      this.noshootHits++;
      ShowNotification(TranslateText("{0} Штраф! Не стреляйте в мишени с крестом!", SR.SCORE.HIT_NOSHOOT), 2);
    }
    mp.game.pad.setPadShake(0, 150, 50);
    this.removeTarget(_0x1bf475, true);
    this.updateHUDFields();
  }
  removeTarget(_0x4fcbf3, _0x566937) {
    const _0x363439 = this.activeTargets[_0x4fcbf3];
    if (_0x363439) {
      _0x363439.isActive = false;
      if (mp.objects.exists(_0x363439.entity)) {
        _0x363439.entity.destroy();
      }
      this.activeTargets.splice(_0x4fcbf3, 1);
      this.processedTargets++;
      if (!this.isObserver) {
        if (_0x566937) {
          mp.events.callRemote("Client_ShootingRangeTargetHit", _0x363439.seqIndex);
        } else {
          mp.events.callRemote("Client_ShootingRangeTargetExpired", _0x363439.seqIndex);
        }
        if (!_0x566937 && _0x363439.type === 0) {
          this.score += SR.SCORE.TARGET_EXPIRED;
          this.expired++;
        }
        this.updateHUDFields();
      }
      if (this.state === SR.STATES.PLAYING) {
        this.spawnNextTargets();
      }
    }
  }
  endGame() {
    if (this.state !== SR.STATES.ENDING) {
      this.state = SR.STATES.ENDING;
      this.isActive = false;
      this.restoreCameraMode();
      if (!this.isObserver) {
        mp.events.callRemote("Client_ShootingRangeEnd", this.score);
        main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
      }
      setTimeout(() => {
        if (this.isObserver) {
          this.stopObserving();
        } else {
          this.cleanup();
        }
        this.state = SR.STATES.IDLE;
      }, 3000);
      global.onBirthdayShootingRange = false;
    }
  }
  forceStop() {
    global.onBirthdayShootingRange = false;
    this.isActive = false;
    if (this.isObserver) {
      this.stopObserving();
    } else {
      this.cleanup();
      main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
    }
    this.state = SR.STATES.IDLE;
  }
  cleanup() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
    for (const _0x4fb984 of this.activeTargets) {
      if (mp.objects.exists(_0x4fb984.entity)) {
        _0x4fb984.entity.destroy();
      }
    }
    this.activeTargets = [];
    if (!this.isObserver) {
      const _0x1ad89d = mp.players.local.handle;
      mp.game.entity.freezePosition(_0x1ad89d, false);
      mp.game.entity.setInvincible(_0x1ad89d, false);
      mp.game.ped.setCanSwitchWeapon(_0x1ad89d, true);
    }
    this.isActive = false;
    this.targetQueue = [];
    this.isSpawning = false;
    this.player = null;
  }
  destroy() {
    this.cleanup();
    if (this.marker && mp.markers.exists(this.marker)) {
      this.marker.destroy();
      this.marker = null;
    }
    if (this.boothObjects) {
      for (const _0xf671c4 of this.boothObjects) {
        if (mp.objects.exists(_0xf671c4)) {
          _0xf671c4.destroy();
        }
      }
      this.boothObjects = [];
    }
  }
}
const SHOOTING_RANGES_CONFIG = [{
  canvasPos: new mp.Vector3(-1728.518, -1127.555, 13.8673258),
  canvasHeading: 143.291,
  markerPos: new mp.Vector3(-1725.666, -1123.972, 13)
}, {
  canvasPos: new mp.Vector3(-1743.226304616142, -1132.145949534258, 13.844460487366),
  canvasHeading: -130,
  markerPos: new mp.Vector3(-1747.011866, -1129.007631, 13),
  boothPos: new mp.Vector3(-1743.85, -1130.84, 12.0035),
  boothHeading: -130
}, {
  canvasPos: new mp.Vector3(-1756.800808429971, -1120.653364382849, 13.815160487366),
  canvasHeading: 49,
  markerPos: new mp.Vector3(-1753.070595, -1123.857272, 13),
  boothPos: new mp.Vector3(-1756.2, -1121.97, 11.9742),
  boothHeading: 49
}, {
  canvasPos: new mp.Vector3(-1752.061107573054, -1142.563387330095, 13.824760487366),
  canvasHeading: -128,
  markerPos: new mp.Vector3(-1755.953889, -1139.559095, 13),
  boothPos: new mp.Vector3(-1752.73, -1141.28, 11.9838),
  boothHeading: -128
}, {
  canvasPos: new mp.Vector3(-1770.593695383857, -1136.994050465742, 13.817560487366),
  canvasHeading: 50,
  markerPos: new mp.Vector3(-1766.808134, -1140.132369, 13),
  boothPos: new mp.Vector3(-1769.97, -1138.3, 11.9766),
  boothHeading: 50
}];
const BOOTH_MODELS = ["grand_birthday_counter", "grand_birthday_firing_stuff", "grand_birthday_fluffy_toys", "grand_birthday_merch_toys", "grand_birthday_shelf_wall", "grand_birthday_shoothut"];
const SHOOT_BOARD_MODEL = "grand_birthday_shoothut_shoot";
function spawnBoothObjects(_0x12ea34, _0x45272f) {
  if (!_0x45272f.boothPos) {
    return;
  }
  _0x12ea34.boothObjects = [];
  for (const _0x242fa7 of BOOTH_MODELS) {
    const _0xbebcf5 = mp.objects.new(_0x242fa7, _0x45272f.boothPos, {
      rotation: new mp.Vector3(0, 0, _0x45272f.boothHeading),
      dimension: 0
    });
    _0x12ea34.boothObjects.push(_0xbebcf5);
  }
  const _0x1ff7bd = mp.objects.new(SHOOT_BOARD_MODEL, _0x45272f.canvasPos, {
    rotation: new mp.Vector3(0, 0, _0x45272f.boothHeading),
    dimension: 0
  });
  _0x12ea34.boothObjects.push(_0x1ff7bd);
}
const shootingRanges = SHOOTING_RANGES_CONFIG.map(_0x10e786 => {
  const _0x361174 = new ShootingRange(_0x10e786.canvasPos, _0x10e786.canvasHeading, _0x10e786.markerPos);
  _0x361174.init();
  return _0x361174;
});
mp.events.add("Client_ShootingRangeStart", (_0x508042, _0x321001, _0x30b202) => {
  const _0x1eba18 = shootingRanges[_0x508042];
  if (!_0x1eba18) {
    return;
  }
  let _0x2e8c8e = null;
  if (_0x30b202) {
    try {
      _0x2e8c8e = JSON.parse(_0x30b202);
    } catch (_0x428017) {
      mp.gui.chat.push("[ShootingRange] Ошибка парсинга последовательности.");
    }
  }
  _0x1eba18.startGame(_0x321001, _0x2e8c8e);
});
mp.events.add("playerWeaponShot", (_0x476685, _0x1a8abf) => {
  for (const _0x1d1bfe of shootingRanges) {
    if (_0x1d1bfe.isActive && !_0x1d1bfe.isObserver) {
      _0x1d1bfe.onWeaponShot(_0x476685, _0x1a8abf);
    }
  }
});
mp.events.add("render", () => {
  for (const _0x52040b of shootingRanges) {
    _0x52040b.render();
  }
});
mp.events.add("playerDeath", () => {
  for (const _0x13ea3d of shootingRanges) {
    if (_0x13ea3d.isActive) {
      _0x13ea3d.forceStop();
    }
  }
});
mp.events.add("Client_ShootingRangeForceStop", _0x2bacf => {
  const _0x4d34fb = shootingRanges[_0x2bacf];
  if (_0x4d34fb) {
    _0x4d34fb.forceStop();
  }
});
mp.events.add("Client_ShootingRangeObserverStart", (_0x482408, _0x497808) => {
  const _0xd9d5d8 = shootingRanges[_0x482408];
  if (_0xd9d5d8) {
    try {
      const _0x20218 = JSON.parse(_0x497808);
      _0xd9d5d8.startObserving(_0x20218);
    } catch (_0xde712) {}
  }
});
mp.events.add("Client_ShootingRangeObserverSync", (_0x4b06ea, _0x34184a) => {
  const _0x1d3bae = shootingRanges[_0x4b06ea];
  if (_0x1d3bae) {
    try {
      const _0x2c6dfe = JSON.parse(_0x34184a);
      _0x1d3bae.startObservingFromSnapshot(_0x2c6dfe);
    } catch (_0x9796ff) {}
  }
});
mp.events.add("Client_ShootingRangeObserverTargetRemoved", (_0x1b4690, _0x217cef, _0x2fc7a1, _0x5cfb92) => {
  const _0x2918b8 = shootingRanges[_0x1b4690];
  if (!_0x2918b8 || !_0x2918b8.isObserver) {
    return;
  }
  _0x2918b8.observerRemoveTarget(_0x2fc7a1);
  const _0x3f8327 = mp.players.atRemoteId(_0x217cef);
  if (_0x3f8327 && mp.players.exists(_0x3f8327)) {
    _0x3f8327.setAmmoInClip(mp.game.joaat("weapon_pistol"), 12);
  }
});
mp.events.add("Client_ShootingRangeObserverStop", _0x47b24b => {
  if (_0x47b24b === -1) {
    for (const _0x5f3872 of shootingRanges) {
      if (_0x5f3872.isObserver) {
        _0x5f3872.stopObserving();
      }
    }
  } else {
    const _0x2d5343 = shootingRanges[_0x47b24b];
    if (_0x2d5343 && _0x2d5343.isObserver) {
      _0x2d5343.stopObserving();
    }
  }
});
mp.events.add("Client_ShootingRangeRequestSnapshot", _0x569b3 => {
  const _0x3dd0a3 = shootingRanges[_0x569b3];
  if (!_0x3dd0a3 || _0x3dd0a3.isObserver || !_0x3dd0a3.isActive) {
    return;
  }
  const _0x2d3fdf = _0x3dd0a3.getStateSnapshot();
  mp.events.callRemote("Client_ShootingRangeSnapshotResponse", JSON.stringify(_0x2d3fdf));
});
global.atBirthdayShootingRange = false;
let _nearShootingRangeIndex = null;
mp.events.add("Client_BirthdayShootingRangeInteract", (_0x3b69f8, _0x338522) => {
  if (_0x338522 == 1) {
    _nearShootingRangeIndex = _0x3b69f8;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else if (_nearShootingRangeIndex === _0x3b69f8) {
    _nearShootingRangeIndex = null;
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atBirthdayShootingRange = _nearShootingRangeIndex !== null;
});