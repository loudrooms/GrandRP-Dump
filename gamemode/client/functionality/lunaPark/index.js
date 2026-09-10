const LUNA_PARK_AREA = new mp.Vector3(-1665.442, -1078.818, 0);
const LUNA_PARK_RADIUS = 350;
global.isLocalInLunaParkArea = false;
let activeInteractionColshapesCount = 0;
const colshape = mp.colshapes.newCircle(LUNA_PARK_AREA.x, LUNA_PARK_AREA.y, 175, 0);
function requestLunaParkData() {
  if (!isLocalInLunaParkArea) {
    if (testAntiFlood("Server_RequestLunaParkData", 1000)) {
      mp.events.callRemote("Server_RequestLunaParkData");
    }
  }
}
function deactivateParkArea() {
  mp.events.remove("render", renderTick);
  isLocalInLunaParkArea = false;
  if (activeInteractionColshapesCount > 0) {
    activeInteractionColshapesCount = 0;
    showHudInteraction(false);
  }
  if (testAntiFlood("Server_LeaveLunaParkArea", 1000)) {
    mp.events.callRemote("Server_LeaveLunaParkArea");
  }
  mp.game.streaming.requestIpl("ferris_finale_anim");
  clearFerrisMarker();
  clearAllLunaParkBlips();
  destroyPopcorn();
  destroyCottonCandy();
  destroySellerNPC();
  mp.players.forEachInStreamRange(e => {
    if (e.needAttachToRollerCar) {
      delete e.needAttachToRollerCar;
    }
    if (e.needAttachToFerrisCab) {
      delete e.needAttachToFerrisCab;
    }
    if (e.needAttachToDropTower) {
      delete e.needAttachToDropTower;
    }
  });
  if (rollerState && rollerState.cars) {
    rollerState.cars.forEach(e => e.seats.fill(null));
  }
  if (ferrisCabs !== undefined) {
    ferrisCabs.forEach(e => e.seats.fill(null));
  }
  if (dropTowerState !== undefined && dropTowerState.seats) {
    dropTowerState.seats.fill(null);
  }
}
function syncRollerCoaster(e, t, r) {
  createRollerCoasterMarkersAndColshapes();
  rollerState.cars.forEach(e => e.seats.fill(null));
  isLocalSittingRollerCoaster = false;
  if (r && r.length > 0) {
    r.forEach(([e, t, r]) => {
      rollerState.cars[t].seats[r] = e;
      if (mp.players.atRemoteId(e) === localplayer) {
        isLocalSittingRollerCoaster = true;
      }
    });
    rollerState.cars.forEach((e, t) => {
      if (e.seats.some(e => e !== null)) {
        attachRidersToCarIndex(t);
      }
    });
  }
  rollerState.state = e;
  if (rollerState.trackDistances && rollerState.trackDistances.length !== 0 && rollerState.index) {
    if (e === "TRIP" && t > 0) {
      setRollerMarkersVisibility(false);
      const e = Math.max(0, t - ROLLER_START_DELAY_MS);
      const r = e / 1000;
      const o = rollerState.trackDistances[rollerState.index - 1];
      if (e === 0) {
        rollerState.speed = rollerState.trackDistances[1];
        segmentIndex = 1;
        rollerState.variableSpeed = 0;
        rollerState.active = false;
        lastRollerTick = Date.now();
      } else if (r > 38) {
        rollerState.speed = rollerState.trackDistances[1];
        segmentIndex = 1;
        rollerState.variableSpeed = 0;
        rollerState.active = false;
      } else {
        let e = rollerState.trackDistances[1];
        let t = 0;
        let a = 1;
        const n = 1 / 60;
        const l = Math.floor(r / n);
        for (let r = 0; r < l; r++) {
          const r = n / 550 * 1000;
          if (a < 20) {
            if (t < 3) {
              t += 0.3;
            } else {
              t -= 0.3;
            }
            if (Math.abs(t - 3) < 0.3) {
              t = 3;
            }
          } else if (rollerState.speedProfile[a]) {
            t += (rollerState.speedProfile[a] - t) * 0.1;
          }
          if (e < rollerState.trackDistances[1] && e + t * r >= rollerState.trackDistances[1]) {
            e = rollerState.trackDistances[1];
          } else {
            e += t * r;
          }
          if (e >= o) {
            e -= o;
            a = 0;
          }
          let l = false;
          const s = e => e + 1 >= rollerState.index ? 1 : e + 1;
          for (let r = s(a); !l;) {
            if (e < rollerState.trackDistances[r]) {
              l = true;
              if (a !== r - 1 && rollerState.speedProfile[r - 1] !== t) {
                t = rollerState.speedProfile[r - 1];
              }
              a = r - 1;
            }
            r = s(r);
          }
        }
        rollerState.speed = e;
        segmentIndex = a;
        rollerState.variableSpeed = t;
        lastRollerTick = Date.now();
        rollerState.active = true;
      }
    } else {
      rollerState.speed = rollerState.trackDistances[1];
      segmentIndex = 1;
      rollerState.variableSpeed = 0;
      rollerState.active = false;
      rollerState.state = e;
    }
    if (rollerState.cars && rollerState.cars[0] && rollerState.cars[0].entity) {
      setTimeout(() => updateCars(), 50);
    }
  }
}
function syncFerrisWheel(e, t, r) {
  ferrisState.serverTimeOffset = Date.now() - t;
  ferrisState.periodMs = r;
  getFerrisRotationDeg();
  createFerrisMarker();
  ferrisCabs.forEach(e => e.seats.fill(null));
  if (e && e.length > 0) {
    e.forEach(([e, t, r]) => {
      ferrisCabs[t].seats[r] = e;
      const o = mp.players.atRemoteId(e);
      if (mp.players.exists(o)) {
        if (o.handle !== 0) {
          attachPlayerToCab(o, ferrisCabs[t].cabObject.handle, r);
        } else {
          o.needAttachToFerrisCab = {
            cabIndex: t,
            seatIndex: r
          };
        }
      }
    });
  }
}
function syncDropTower(e, t, r, o) {
  dropTowerState.seats.fill(null);
  if (o && o.length > 0) {
    o.forEach(([e, t]) => {
      dropTowerState.seats[t] = e;
      const r = mp.players.atRemoteId(e);
      if (mp.players.exists(r)) {
        if (r.handle !== 0) {
          attachPlayerToDropTower(r, t);
          r.taskPlayAnim("anim@mp_rollarcoaster", "idle_a_player_one", 8, -8, -1, 1, 0, false, false, false);
        } else {
          r.needAttachToDropTower = t + 1;
        }
      }
    });
  }
  if (e === "TRIP" && t > 0) {
    const e = getServerTick();
    dropTowerState.rideStartTime = e - t;
    dropTowerState.scenarioType = r;
    const o = calculateDropTowerPosition(t, r);
    dropTowerState.currentHeight = o.height;
    dropTowerState.currentCycle = o.cycle;
    dropTowerState.currentPhase = o.phase;
    dropTowerState.previousPhase = o.phase;
    if (r === 1 && o.phase === "SUPER_RISE") {
      dropTowerState.explosionStartTime = e - t % 200;
      dropTowerState.explosionCurrentZ = DROP_TOWER_POS.z;
    } else {
      dropTowerState.explosionStartTime = 0;
      dropTowerState.explosionCurrentZ = 0;
    }
    const a = DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z;
    const n = DROP_TOWER_POS.z + a * o.height;
    dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, n, false, false, false);
    closeDropTowerHandrails();
  } else if (e === "BOARDING") {
    dropTowerState.rideStartTime = 0;
    dropTowerState.scenarioType = 0;
    dropTowerState.currentHeight = 0;
    dropTowerState.currentCycle = 0;
    dropTowerState.currentPhase = "WAITING";
    dropTowerState.previousPhase = "WAITING";
    dropTowerState.explosionStartTime = 0;
    dropTowerState.explosionCurrentZ = 0;
    dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, DROP_TOWER_POS.z, false, false, false);
  } else {
    dropTowerState.rideStartTime = 0;
    dropTowerState.scenarioType = 0;
    dropTowerState.currentHeight = 0;
    dropTowerState.currentCycle = 0;
    dropTowerState.currentPhase = "WAITING";
    dropTowerState.previousPhase = "WAITING";
    dropTowerState.explosionStartTime = 0;
    dropTowerState.explosionCurrentZ = 0;
    dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, DROP_TOWER_POS.z, false, false, false);
    openDropTowerHandrails();
  }
  attachDropTowerHandrails();
}
function initializeLunaParkArea() {
  mp.game.streaming.requestAnimDict(rollerAnimDict);
  mp.game.streaming.requestAnimDict(seatAnim);
  mp.game.streaming.requestAnimDict("anim@mp_ferris_wheel");
  playCarAnimation("safety_bar_exit_roller_car");
  mp.game.streaming.removeIpl("ferris_finale_anim");
  createAllLunaParkBlips();
  createPopcorn();
  createCottonCandy();
  loadSellerNPC();
  mp.events.add("render", renderTick);
}
function reciveLunaParkData(e, t = 0, r = [], o = [], a = Date.now(), n = 120000, l = "WAITING", s = 0, c = 0, i = [], p = []) {
  if (!isLocalInLunaParkArea) {
    isLocalInLunaParkArea = true;
    syncRollerCoaster(e, t, r);
    syncFerrisWheel(o, a, n);
    syncDropTower(l, s, c, i);
    updateKartingTop(p);
    initializeLunaParkArea();
  }
}
function attachRidersToCarIndex(e) {
  playCarAnimation("safety_bar_exit_roller_car");
  rollerState.cars[e].seats.forEach((t, r) => {
    if (t === null) {
      return;
    }
    const o = mp.players.atRemoteId(t);
    if (mp.players.exists(o)) {
      if (o.handle !== 0) {
        attachRiderToCar(o, rollerState.cars[e].entity, r);
      }
      o.needAttachToRollerCar = {
        carIndex: e,
        seatIndex: r
      };
    }
  });
}
function attachPlayersToFerrisCabIndex(e) {
  ferrisCabs[e].seats.forEach((t, r) => {
    if (t === null) {
      return;
    }
    const o = mp.players.atRemoteId(t);
    if (mp.players.exists(o)) {
      if (o.handle !== 0) {
        attachPlayerToCab(o, ferrisCabs[e].cabObject.handle, r);
      } else {
        o.needAttachToFerrisCab = {
          cabIndex: e,
          seatIndex: r
        };
      }
    }
  });
}
colshape.lunaParkArea = true;
mp.events.add("playerEnterColshape", e => {
  if (mp.colshapes.exists(e) && e.lunaParkArea) {
    requestLunaParkData();
  } else if (mp.colshapes.exists(e) && e.rollerGetIn) {
    activeInteractionColshapesCount++;
    if (activeInteractionColshapesCount === 1) {
      showHudInteraction(true);
    }
  } else if (mp.colshapes.exists(e) && e.ferrisGetIn && !isLocalSittingFerris) {
    showHudInteraction(true);
  } else if (mp.colshapes.exists(e) && e.is_popcorn) {
    showHudInteraction(true);
    inPopcornColshape = true;
  } else if (mp.colshapes.exists(e) && e.is_cotton_candy) {
    showHudInteraction(true);
    inCottonCandyColshape = true;
  }
});
mp.events.add("playerExitColshape", e => {
  if (mp.colshapes.exists(e) && e.lunaParkArea) {
    deactivateParkArea();
  } else if (mp.colshapes.exists(e) && e.rollerGetIn) {
    activeInteractionColshapesCount--;
    if (activeInteractionColshapesCount <= 0) {
      activeInteractionColshapesCount = 0;
      showHudInteraction(false);
    }
  } else if (mp.colshapes.exists(e) && e.ferrisGetIn) {
    showHudInteraction(false);
  } else if (mp.colshapes.exists(e) && e.is_popcorn) {
    showHudInteraction(false);
    inPopcornColshape = false;
  } else if (mp.colshapes.exists(e) && e.is_cotton_candy) {
    showHudInteraction(false);
    inCottonCandyColshape = false;
  }
});
mp.events.add("Client_ReceiveLunaParkData", reciveLunaParkData);
mp.events.add("entityStreamIn", e => {
  if (e) {
    if (e.type === "player" || e.type === "object") {
      if (e.type !== "object" || e.rollerCarIndex === undefined) {
        if (e.type === "object" && e.ferrisCabIndex !== undefined) {
          attachPlayersToFerrisCabIndex(e.ferrisCabIndex);
        } else if (e.type === "object" && e.isDropTower) {
          if (dropTowerState.currentPhase === "WAITING") {
            openDropTowerHandrails();
          }
          dropTowerState.seats.forEach((e, t) => {
            if (e === null) {
              return;
            }
            const r = mp.players.atRemoteId(e);
            if (mp.players.exists(r) && r.handle !== 0) {
              attachPlayerToDropTower(r, t);
              r.taskPlayAnim("anim@mp_rollarcoaster", "idle_a_player_one", 8, -8, -1, 1, 0, false, false, false);
            }
          });
        }
        if (e.type === "player") {
          if (e.needAttachToRollerCar) {
            setTimeout(() => {
              if (!mp.players.exists(e)) {
                return;
              }
              if (!e.needAttachToRollerCar) {
                return;
              }
              if (!mp.objects.exists(rollerState.cars[e.needAttachToRollerCar.carIndex].entity)) {
                return;
              }
              const {
                carIndex: t,
                seatIndex: r
              } = e.needAttachToRollerCar;
              const o = mp.players.atRemoteId(e.remoteId)?.remoteId;
              if (rollerState.cars[t] && rollerState.cars[t].seats[r] === o) {
                attachRiderToCar(e, rollerState.cars[t].entity, r);
                e.setHeading(-125);
              }
              delete e.needAttachToRollerCar;
            }, 500);
          } else if (e.needAttachToFerrisCab) {
            setTimeout(() => {
              if (!mp.players.exists(e)) {
                return;
              }
              if (!e.needAttachToFerrisCab) {
                return;
              }
              if (!mp.objects.exists(ferrisCabs[e.needAttachToFerrisCab.cabIndex].cabObject)) {
                return;
              }
              const {
                cabIndex: t,
                seatIndex: r
              } = e.needAttachToFerrisCab;
              const o = mp.players.atRemoteId(e.remoteId)?.remoteId;
              if (ferrisCabs[t] && ferrisCabs[t].seats[r] === o) {
                attachPlayerToCab(e, ferrisCabs[t].cabObject.handle, r);
              }
              delete e.needAttachToFerrisCab;
            }, 500);
          } else if (e.needAttachToDropTower) {
            setTimeout(() => {
              if (!mp.players.exists(e)) {
                return;
              }
              if (!e.needAttachToDropTower) {
                return;
              }
              const t = e.needAttachToDropTower - 1;
              const r = mp.players.atRemoteId(e.remoteId)?.remoteId;
              if (dropTowerState.seats[t] === r) {
                attachPlayerToDropTower(e, t);
              }
              delete e.needAttachToDropTower;
            }, 500);
          }
        }
      } else {
        attachRidersToCarIndex(e.rollerCarIndex);
      }
    }
  }
});
global.lunaParkOnPressE = function () {
  if (loggedin && !chatActive && isLocalInLunaParkArea && (!GlobalCheck() || isLocalSittingRollerCoaster || isLocalSittingFerris || isLocalSittingDropTower) && testAntiFlood("onPressE", 500)) {
    if (isLocalSittingRollerCoaster) {
      return tryExitRollerCoaster();
    } else if (isLocalSittingFerris) {
      return tryExitFerrisWheel();
    } else if (isLocalSittingDropTower) {
      return tryExitDropTower();
    } else if (inPopcornColshape) {
      return tryGrabPopcorn();
    } else if (inCottonCandyColshape) {
      return tryGrabCottonCandy();
    } else if (mp.Vector3.Distance2D(localplayer.position, ROLLER_ENTRY_POS) < 10) {
      return tryBoardRollerCoaster();
    } else if (mp.Vector3.Distance2D(localplayer.position, FERRIS_ENTRY_POS) < 2) {
      return tryBoardFerrisWheel();
    } else if (mp.Vector3.Distance2D(localplayer.position, DROP_TOWER_JOIN) < 2) {
      return tryToBoardDropTower();
    } else {
      return undefined;
    }
  }
};
const LUNA_PARK_BLIPS = [{
  name: language["Американские горки"][curr_lang],
  sprite: 951,
  color: 2,
  scale: 1,
  pos: new mp.Vector3(-1646.66, -1126.292, 17)
}, {
  name: language["Колесо обозрения"][curr_lang],
  sprite: 266,
  color: 45,
  scale: 1,
  pos: new mp.Vector3(-1666, -1126.89, 12.7)
}, {
  name: language["Башня падения"][curr_lang],
  sprite: 866,
  color: 60,
  scale: 1,
  pos: new mp.Vector3(-1647.3, -1112.045, 12.017)
}, {
  name: language.Картинг[curr_lang],
  sprite: 726,
  color: 84,
  scale: 1,
  pos: new mp.Vector3(-1574.391, -999.995, 12.017)
}, {
  name: language.Тир[curr_lang],
  sprite: 947,
  color: 4,
  scale: 1,
  pos: new mp.Vector3(-1725.666, -1123.972, 13.055)
}, {
  name: language["Пакман аркада"][curr_lang],
  sprite: 484,
  color: 46,
  scale: 1,
  pos: new mp.Vector3(-1613.16, -1043.24, 12.1775)
}];
const lunaParkBlips = [];
function createAllLunaParkBlips() {
  for (const e of LUNA_PARK_BLIPS) {
    const t = mp.blips.new(e.sprite, e.pos, {
      name: e.name,
      color: e.color,
      scale: e.scale,
      drawDistance: 25,
      shortRange: true,
      dimension: 0
    });
    lunaParkBlips.push(t);
  }
}
function clearAllLunaParkBlips() {
  for (const e of lunaParkBlips) {
    if (mp.blips.exists(e)) {
      e.destroy();
    }
  }
}
mp.events.add("playerDeath", (e, t, r) => {
  if (e === localplayer && isLocalInLunaParkArea) {
    e.detach(true, true);
    if (isLocalSittingFerris) {
      handleFerrisExit();
    }
    if (isLocalSittingDropTower) {
      clearDropTowerVariables();
    }
  }
});
const speedProfile = [0, 0.1, 0.1, 3.3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3.1794, 4.8025, 6.7585, 8.3448, 8.8436, 8.9045, 8.7073, 8.1965, 7.5921, 7.0097, 6.6959, 6.7221, 6.8771, 7.0232, 7.18, 7.3457, 7.5605, 7.6956, 7.8806, 8.0659, 8.2597, 8.4085, 8.6081, 8.7629, 8.9647, 9.1286, 9.2889, 9.4513, 9.6107, 9.8224, 9.9849, 10.1485, 10.3112, 10.4793, 10.648, 10.7657, 10.9378, 11.1113, 11.285, 11.4038, 11.5785, 11.7563, 11.8826, 12.0063, 12.1858, 12.311, 12.4905, 12.6186, 12.752, 12.9366, 13.069, 13.2002, 13.3271, 13.5131, 13.6428, 13.8557, 14.1467, 14.7078, 15.0933, 15.4812, 15.6897, 16.072, 16.4288, 16.6158, 16.615, 16.6148, 16.6148, 16.6147, 16.6151, 16.6151, 16.5645, 16.145, 15.4464, 14.6939, 14.0775, 13.7741, 13.9723, 14.39, 14.8988, 15.3516, 15.7118, 15.9945, 16.2069, 16.3518, 16.3944, 16.3977, 16.3236, 16.1241, 15.9292, 15.4375, 14.8409, 14.2057, 13.5752, 12.7336, 12.2095, 11.5221, 11.0986, 10.6031, 10.2269, 9.9111, 9.5337, 9.2694, 9.0583, 8.8516, 8.7288, 8.6021, 8.51, 8.4733, 8.4742, 8.5294, 8.6157, 8.7849, 8.9639, 9.2546, 9.514, 9.8293, 10.1114, 10.5312, 10.9067, 11.1773, 11.5836, 11.9962, 12.2748, 12.6632, 12.9328, 13.1711, 13.3959, 13.6873, 13.8612, 14.0083, 14.1297, 14.2155, 14.2732, 14.3011, 14.3008, 14.2746, 14.2251, 14.1577, 14.0733, 13.9385, 13.8385, 13.7996, 13.7301, 13.6586, 13.5902, 13.5308, 13.482, 13.4313, 13.4127, 13.4126, 13.433, 13.4949, 13.6046, 13.761, 13.8937, 14.1199, 14.2919, 14.4699, 14.6443, 14.7383, 14.889, 14.9538, 15.0334, 15.1141, 15.1923, 15.2712, 15.3499, 15.4286, 15.5073, 15.5512, 15.6299, 15.7082, 15.7859, 15.8647, 15.9434, 16.0226, 16.0645, 16.1422, 16.2213, 16.2996, 16.3783, 16.4226, 16.5003, 16.5796, 16.6622, 16.7055, 16.7837, 16.8729, 16.9907, 17.0661, 17.2127, 17.3761, 17.4689, 17.5883, 17.6648, 17.6783, 17.6822, 17.6806, 17.5908, 17.371, 17.1986, 16.8458];
const trackVectors = [new mp.Vector3(-1659.01, -1143.129, 17.4192), new mp.Vector3(-1643.524, -1124.681, 17.4326), new mp.Vector3(-1639.621, -1120.021, 17.6357), new mp.Vector3(-1638.199, -1118.316, 17.9966), new mp.Vector3(-1637.011, -1116.896, 18.5407), new mp.Vector3(-1635.772, -1115.417, 19.2558), new mp.Vector3(-1634.227, -1113.569, 20.1725), new mp.Vector3(-1632.692, -1111.734, 21.0835), new mp.Vector3(-1631.179, -1109.922, 21.9826), new mp.Vector3(-1629.692, -1108.145, 22.865), new mp.Vector3(-1628.243, -1106.411, 23.7252), new mp.Vector3(-1626.84, -1104.733, 24.558), new mp.Vector3(-1625.491, -1103.12, 25.3588), new mp.Vector3(-1624.206, -1101.582, 26.1218), new mp.Vector3(-1622.992, -1100.13, 26.8424), new mp.Vector3(-1620.721, -1097.416, 28.1892), new mp.Vector3(-1618.866, -1095.196, 29.2895), new mp.Vector3(-1617.533, -1093.603, 30.0795), new mp.Vector3(-1616.778, -1092.699, 30.5401), new mp.Vector3(-1615.677, -1091.388, 30.9156), new mp.Vector3(-1614.829, -1090.377, 31.0008), new mp.Vector3(-1614.011, -1089.406, 30.9417), new mp.Vector3(-1612.615, -1087.747, 30.3463), new mp.Vector3(-1610.992, -1085.82, 29.1724), new mp.Vector3(-1609.228, -1083.725, 27.949), new mp.Vector3(-1608.295, -1082.615, 27.4861), new mp.Vector3(-1606.937, -1081.002, 27.4328), new mp.Vector3(-1605.471, -1079.258, 27.5762), new mp.Vector3(-1604.159, -1077.701, 28.0216), new mp.Vector3(-1602.511, -1075.749, 28.5244), new mp.Vector3(-1600.932, -1073.873, 28.9813), new mp.Vector3(-1599.342, -1071.983, 29.1756), new mp.Vector3(-1597.851, -1070.067, 29.1552), new mp.Vector3(-1596.723, -1067.995, 29.0611), new mp.Vector3(-1596.123, -1065.708, 28.9503), new mp.Vector3(-1595.991, -1063.354, 28.8316), new mp.Vector3(-1596.365, -1061.041, 28.7074), new mp.Vector3(-1597.254, -1058.857, 28.577), new mp.Vector3(-1598.562, -1056.894, 28.4423), new mp.Vector3(-1600.27, -1055.292, 28.3045), new mp.Vector3(-1602.288, -1054.077, 28.163), new mp.Vector3(-1604.497, -1053.295, 28.019), new mp.Vector3(-1606.845, -1053.063, 27.8712), new mp.Vector3(-1609.193, -1053.3, 27.7214), new mp.Vector3(-1611.416, -1054.029, 27.5695), new mp.Vector3(-1613.432, -1055.248, 27.4148), new mp.Vector3(-1615.167, -1056.844, 27.2581), new mp.Vector3(-1616.486, -1058.782, 27.0998), new mp.Vector3(-1617.371, -1060.964, 26.9395), new mp.Vector3(-1617.803, -1063.281, 26.7771), new mp.Vector3(-1617.669, -1065.625, 26.6138), new mp.Vector3(-1617.071, -1067.903, 26.4484), new mp.Vector3(-1616.006, -1069.994, 26.2817), new mp.Vector3(-1614.489, -1071.798, 26.1132), new mp.Vector3(-1612.646, -1073.265, 25.9435), new mp.Vector3(-1610.523, -1074.272, 25.7722), new mp.Vector3(-1608.231, -1074.807, 25.5996), new mp.Vector3(-1605.875, -1074.877, 25.4258), new mp.Vector3(-1603.576, -1074.385, 25.251), new mp.Vector3(-1601.417, -1073.441, 25.0748), new mp.Vector3(-1599.508, -1072.067, 24.8974), new mp.Vector3(-1597.961, -1070.289, 24.7188), new mp.Vector3(-1596.798, -1068.241, 24.5393), new mp.Vector3(-1596.121, -1065.987, 24.3586), new mp.Vector3(-1595.946, -1063.637, 24.177), new mp.Vector3(-1596.242, -1061.301, 23.9942), new mp.Vector3(-1597.079, -1059.097, 23.8103), new mp.Vector3(-1598.345, -1057.109, 23.6258), new mp.Vector3(-1599.996, -1055.426, 23.44), new mp.Vector3(-1601.991, -1054.172, 23.2534), new mp.Vector3(-1604.195, -1053.339, 23.0661), new mp.Vector3(-1606.533, -1053.01, 22.8773), new mp.Vector3(-1608.881, -1053.199, 22.6882), new mp.Vector3(-1611.144, -1053.85, 22.4984), new mp.Vector3(-1613.199, -1055.015, 22.3068), new mp.Vector3(-1614.982, -1056.581, 22.1126), new mp.Vector3(-1616.545, -1058.398, 21.7888), new mp.Vector3(-1618.098, -1060.261, 21.3373), new mp.Vector3(-1619.583, -1062.043, 20.7536), new mp.Vector3(-1621.058, -1063.813, 20.1778), new mp.Vector3(-1622.535, -1065.582, 19.6021), new mp.Vector3(-1624.009, -1067.352, 19.0262), new mp.Vector3(-1625.482, -1069.119, 18.4527), new mp.Vector3(-1626.88, -1070.806, 17.9515), new mp.Vector3(-1628.218, -1072.426, 17.7058), new mp.Vector3(-1629.509, -1073.975, 17.7076), new mp.Vector3(-1631.046, -1075.816, 17.7079), new mp.Vector3(-1632.36, -1077.393, 17.7079), new mp.Vector3(-1633.897, -1079.234, 17.7081), new mp.Vector3(-1635.397, -1080.972, 17.7074), new mp.Vector3(-1636.924, -1082.801, 17.7074), new mp.Vector3(-1638.383, -1084.535, 17.8395), new mp.Vector3(-1639.644, -1086.005, 18.3624), new mp.Vector3(-1640.985, -1087.563, 19.3675), new mp.Vector3(-1642.482, -1089.276, 20.5799), new mp.Vector3(-1644.108, -1091.096, 21.5914), new mp.Vector3(-1645.844, -1092.97, 21.9359), new mp.Vector3(-1647.561, -1094.781, 21.6225), new mp.Vector3(-1649.239, -1096.506, 20.9627), new mp.Vector3(-1650.894, -1098.148, 20.1969), new mp.Vector3(-1652.535, -1099.704, 19.525), new mp.Vector3(-1654.248, -1101.247, 18.9923), new mp.Vector3(-1656.05, -1102.794, 18.5631), new mp.Vector3(-1657.911, -1104.315, 18.2393), new mp.Vector3(-1659.798, -1105.782, 18.0219), new mp.Vector3(-1661.681, -1107.168, 17.911), new mp.Vector3(-1663.525, -1108.445, 17.9064), new mp.Vector3(-1665.293, -1109.582, 18.0057), new mp.Vector3(-1667.317, -1110.773, 18.2989), new mp.Vector3(-1669.263, -1111.836, 18.8213), new mp.Vector3(-1671.144, -1112.787, 19.5262), new mp.Vector3(-1673.022, -1113.685, 20.3691), new mp.Vector3(-1674.958, -1114.582, 21.2989), new mp.Vector3(-1676.995, -1115.534, 22.249), new mp.Vector3(-1679.084, -1116.478, 23.1368), new mp.Vector3(-1681.219, -1117.389, 23.9532), new mp.Vector3(-1683.374, -1118.29, 24.6845), new mp.Vector3(-1685.517, -1119.208, 25.3158), new mp.Vector3(-1687.62, -1120.167, 25.8329), new mp.Vector3(-1689.705, -1121.188, 26.2178), new mp.Vector3(-1691.772, -1122.315, 26.5427), new mp.Vector3(-1693.635, -1123.75, 26.845), new mp.Vector3(-1695.254, -1125.474, 27.1175), new mp.Vector3(-1696.581, -1127.444, 27.3373), new mp.Vector3(-1697.574, -1129.602, 27.5003), new mp.Vector3(-1698.207, -1131.882, 27.623), new mp.Vector3(-1698.465, -1134.234, 27.7231), new mp.Vector3(-1698.344, -1136.602, 27.7949), new mp.Vector3(-1697.841, -1138.921, 27.8328), new mp.Vector3(-1696.972, -1141.131, 27.8321), new mp.Vector3(-1695.759, -1143.174, 27.7892), new mp.Vector3(-1694.234, -1144.995, 27.7019), new mp.Vector3(-1692.435, -1146.544, 27.5687), new mp.Vector3(-1690.415, -1147.784, 27.39), new mp.Vector3(-1688.226, -1148.682, 27.1671), new mp.Vector3(-1685.926, -1149.218, 26.9025), new mp.Vector3(-1683.576, -1149.376, 26.5994), new mp.Vector3(-1681.237, -1149.161, 26.2631), new mp.Vector3(-1678.968, -1148.578, 25.8985), new mp.Vector3(-1676.825, -1147.645, 25.5118), new mp.Vector3(-1674.862, -1146.388, 25.1091), new mp.Vector3(-1673.124, -1144.839, 24.6968), new mp.Vector3(-1671.654, -1143.039, 24.2822), new mp.Vector3(-1670.486, -1141.031, 23.8716), new mp.Vector3(-1669.649, -1138.865, 23.472), new mp.Vector3(-1669.163, -1136.595, 23.0898), new mp.Vector3(-1669.04, -1134.274, 22.7307), new mp.Vector3(-1669.284, -1131.962, 22.4006), new mp.Vector3(-1669.888, -1129.713, 22.1045), new mp.Vector3(-1670.841, -1127.585, 21.8463), new mp.Vector3(-1672.12, -1125.632, 21.6294), new mp.Vector3(-1673.694, -1123.904, 21.4559), new mp.Vector3(-1675.523, -1122.444, 21.327), new mp.Vector3(-1677.563, -1121.29, 21.2429), new mp.Vector3(-1679.762, -1120.476, 21.2021), new mp.Vector3(-1682.064, -1120.019, 21.2025), new mp.Vector3(-1684.41, -1119.933, 21.2408), new mp.Vector3(-1686.742, -1120.221, 21.3125), new mp.Vector3(-1689, -1120.877, 21.4123), new mp.Vector3(-1691.128, -1121.884, 21.5343), new mp.Vector3(-1693.069, -1123.218, 21.672), new mp.Vector3(-1694.779, -1124.849, 21.8191), new mp.Vector3(-1695.93, -1126.324, 21.9029), new mp.Vector3(-1696.878, -1127.99, 21.9873), new mp.Vector3(-1697.674, -1129.878, 22.0778), new mp.Vector3(-1698.292, -1131.96, 22.1685), new mp.Vector3(-1698.699, -1134.206, 22.2533), new mp.Vector3(-1698.866, -1136.587, 22.3261), new mp.Vector3(-1698.764, -1139.072, 22.3807), new mp.Vector3(-1698.363, -1141.633, 22.4112), new mp.Vector3(-1697.633, -1144.24, 22.4113), new mp.Vector3(-1696.546, -1146.863, 22.3751), new mp.Vector3(-1695.061, -1149.484, 22.295), new mp.Vector3(-1693.239, -1151.881, 22.1555), new mp.Vector3(-1691.225, -1153.872, 21.965), new mp.Vector3(-1689.074, -1155.483, 21.737), new mp.Vector3(-1686.842, -1156.74, 21.485), new mp.Vector3(-1684.583, -1157.674, 21.2224), new mp.Vector3(-1682.351, -1158.311, 20.9625), new mp.Vector3(-1680.161, -1158.67, 20.7161), new mp.Vector3(-1678.176, -1158.802, 20.5023), new mp.Vector3(-1676.344, -1158.712, 20.3287), new mp.Vector3(-1674.755, -1158.437, 20.2097), new mp.Vector3(-1672.606, -1157.658, 20.0965), new mp.Vector3(-1670.584, -1156.442, 19.9803), new mp.Vector3(-1668.831, -1154.866, 19.8642), new mp.Vector3(-1667.418, -1152.986, 19.7482), new mp.Vector3(-1666.452, -1150.833, 19.6319), new mp.Vector3(-1665.911, -1148.538, 19.5158), new mp.Vector3(-1665.817, -1146.181, 19.3996), new mp.Vector3(-1666.207, -1143.862, 19.2836), new mp.Vector3(-1667.073, -1141.668, 19.1674), new mp.Vector3(-1668.339, -1139.679, 19.0512), new mp.Vector3(-1669.962, -1137.965, 18.935), new mp.Vector3(-1671.913, -1136.65, 18.8189), new mp.Vector3(-1674.087, -1135.737, 18.7028), new mp.Vector3(-1676.397, -1135.256, 18.5866), new mp.Vector3(-1678.751, -1135.237, 18.4705), new mp.Vector3(-1681.058, -1135.73, 18.3543), new mp.Vector3(-1683.23, -1136.65, 18.2382), new mp.Vector3(-1685.187, -1137.968, 18.1219), new mp.Vector3(-1686.824, -1139.661, 18.0059), new mp.Vector3(-1688.081, -1141.657, 17.8896), new mp.Vector3(-1688.938, -1143.855, 17.7735), new mp.Vector3(-1689.359, -1146.177, 17.6571), new mp.Vector3(-1689.26, -1148.532, 17.5411), new mp.Vector3(-1688.71, -1150.826, 17.425), new mp.Vector3(-1687.733, -1152.976, 17.3087), new mp.Vector3(-1686.342, -1154.887, 17.1759), new mp.Vector3(-1684.573, -1156.462, 17.0021), new mp.Vector3(-1682.54, -1157.669, 16.7987), new mp.Vector3(-1680.313, -1158.466, 16.5838), new mp.Vector3(-1677.973, -1158.77, 16.3415), new mp.Vector3(-1675.626, -1158.601, 16.0948), new mp.Vector3(-1673.361, -1157.994, 15.9205), new mp.Vector3(-1671.255, -1156.966, 15.8075), new mp.Vector3(-1669.435, -1155.511, 15.7719), new mp.Vector3(-1667.848, -1153.66, 15.766), new mp.Vector3(-1666.33, -1151.852, 15.7703), new mp.Vector3(-1664.875, -1150.117, 15.8984), new mp.Vector3(-1663.46, -1148.431, 16.198), new mp.Vector3(-1662.033, -1146.731, 16.6412), new mp.Vector3(-1660.556, -1144.97, 17.1643), new mp.Vector3(-1659.01, -1143.129, 17.4192)];
const GET_IN_POSITIONS = [new mp.Vector3(-1644.316, -1123.53, 17.3447), new mp.Vector3(-1644.92, -1124.281, 17.3447), new mp.Vector3(-1645.845, -1125.413, 17.3447), new mp.Vector3(-1646.562, -1126.302, 17.3447), new mp.Vector3(-1647.498, -1127.438, 17.3447), new mp.Vector3(-1648.23, -1128.184, 17.3447), new mp.Vector3(-1649.233, -1129.399, 17.3447), new mp.Vector3(-1649.937, -1130.203, 17.3447)];
const GET_OFF_POSITIONS = [new mp.Vector3(-1641.914, -1125.268, 17.3424), new mp.Vector3(-1642.606, -1126.24, 17.3424), new mp.Vector3(-1643.573, -1127.39, 17.3424), new mp.Vector3(-1644.271, -1128.2, 17.3424), new mp.Vector3(-1645.343, -1129.313, 17.3424), new mp.Vector3(-1645.966, -1130.067, 17.3424), new mp.Vector3(-1647.022, -1131.291, 17.3424), new mp.Vector3(-1647.645, -1132.016, 17.3424)];
const ROLLER_START_DELAY_MS = 2000;
const rollerGetInMarkers = [];
const setRollerMarkersVisibility = e => {
  rollerGetInMarkers.forEach(t => {
    if (t.marker) {
      t.marker.visible = e;
    }
  });
};
const ROLLER_ENTRY_POS = new mp.Vector3(-1646.72, -1127.24, 17.783);
const rollerState = {
  speed: 0,
  variableSpeed: 0,
  index: 0,
  state: "WAITING",
  active: false,
  cars: [{
    entity: null,
    seats: [null, null, null, null]
  }, {
    entity: null,
    seats: [null, null, null, null]
  }, {
    entity: null,
    seats: [null, null, null, null]
  }, {
    entity: null,
    seats: [null, null, null, null]
  }],
  trackPoints: [],
  speedProfile: [],
  trackDistances: []
};
const PROPS_TO_DELETE = [mp.game.joaat("prop_roller_car_01"), mp.game.joaat("prop_roller_car_02")];
let segmentIndex = 0;
let deltaSeconds = 0;
let lastRollerTick = 0;
global.atRollerGetInPos = null;
const abs = Math.abs;
const cos = Math.cos;
const sin = Math.sin;
const PI = Math.PI;
const atan2 = Math.atan2;
const sqrt = Math.sqrt;
const toRad = e => e * (PI / 180);
const toDeg = e => e * (180 / PI);
const getServerTick = () => Date.now();
const rollerCoasterArea = mp.colshapes.newSphere(-1663.97, -1126.7, 30.7, 200);
rollerCoasterArea.rollerCoasterArea = true;
const rollerAnimDict = "anim@mp_rollarcoaster";
const rollerEntryPos = new mp.Vector3(-1646.92, -1125.96, 17.34);
const rollerExitPos = new mp.Vector3(-1632.95, -1110.87, 13.02);
function createRollerCoasterMarkersAndColshapes() {
  GET_IN_POSITIONS.forEach((e, t) => {
    const r = mp.markers.new(1, e, 0.6, {
      bobUpAndDown: false,
      color: [255, 255, 0, 75],
      dimension: 0,
      direction: new mp.Vector3(0, 0, 0),
      rotation: new mp.Vector3(0, 0, 0),
      visible: true
    });
    const o = mp.colshapes.newSphere(e.x, e.y, e.z, 2.5);
    o.rollerGetIn = true;
    o.index = t;
    rollerGetInMarkers.push({
      marker: r,
      position: e,
      index: t
    });
  });
}
const addTrackPoint = e => {
  if (!(rollerState.index >= 225)) {
    rollerState.trackPoints[rollerState.index] = e;
    rollerState.index += 1;
  }
};
const initTrack = () => {
  trackVectors.forEach(e => {
    addTrackPoint(e);
  });
  rollerState.trackPoints[rollerState.index - 1] = rollerState.trackPoints[0];
  let e = 0;
  for (let t = 0; t < rollerState.trackPoints.length; t++) {
    rollerState.trackDistances[t] = e;
    if (t < rollerState.trackPoints.length - 1) {
      e += mp.Vector3.Distance2D(rollerState.trackPoints[t], rollerState.trackPoints[t + 1]);
    }
  }
  speedProfile.forEach((e, t) => {
    rollerState.speedProfile[t] = e;
  });
  for (let e = 0; e < PROPS_TO_DELETE.length; e++) {
    mp.game.entity.createModelHide(-1647.598, -1128.486, 18.053, 100, PROPS_TO_DELETE[e], true);
  }
  spawnRollerCoasterCar();
};
const findSegmentIndex = (e, t) => {
  if (e <= 0) {
    e += rollerState.trackDistances[rollerState.index - 1];
    t = rollerState.index - 1;
  }
  for (let r = t; r >= 0; r--) {
    if (rollerState.trackDistances[r] < e) {
      return r;
    }
  }
  return 0;
};
const prevSegmentIndex = e => e - 1 < 0 ? rollerState.index - 2 : e - 1;
const nextSegmentIndex = e => e + 1 >= rollerState.index ? 1 : e + 1;
const computeSlopeAccel = () => {
  const e = nextSegmentIndex(segmentIndex);
  const t = rollerState.trackPoints[segmentIndex].z - rollerState.trackPoints[e].z;
  let r = rollerState.trackDistances[e] - rollerState.trackDistances[segmentIndex];
  if (r < 0) {
    r += rollerState.trackDistances[224];
  }
  const o = toDeg(Math.asin(toRad(t / r)));
  return toDeg(sin(toRad(o))) * 10;
};
const quatFromEulerDeg = e => {
  const t = e.y / 2;
  const r = e.z / 2;
  const o = e.x / 2;
  const a = toDeg(sin(toRad(t)));
  const n = toDeg(sin(toRad(r)));
  const l = toDeg(sin(toRad(o)));
  const s = toDeg(cos(toRad(t)));
  const c = toDeg(cos(toRad(r)));
  const i = toDeg(cos(toRad(o)));
  return [l * s * c - i * a * n, i * a * c + l * s * n, i * s * n - l * a * c, i * s * c + l * a * n];
};
const interpolatePosition = (e, t) => {
  let r;
  let o;
  if (e < 0) {
    e += rollerState.trackDistances[rollerState.index - 1];
  }
  if (rollerState.variableSpeed >= 0) {
    r = t;
    o = nextSegmentIndex(t);
  } else {
    r = nextSegmentIndex(t);
    o = t;
  }
  const a = abs(rollerState.trackDistances[o] - rollerState.trackDistances[r]);
  const n = (e - rollerState.trackDistances[r]) / a;
  const l = rollerState.trackPoints[r];
  const s = rollerState.trackPoints[o];
  const c = new mp.Vector3(s.x - l.x, s.y - l.y, s.z - l.z);
  if (rollerState.variableSpeed >= 0) {
    return new mp.Vector3(l.x + c.x * n, l.y + c.y * n, l.z + c.z * n);
  } else {
    return new mp.Vector3(l.x - c.x * n, l.y - c.y * n, l.z - c.z * n);
  }
};
global.testObj = null;
const spawnRollerCoasterCar = () => {
  rollerState.speed = rollerState.trackDistances[1];
  segmentIndex = 1;
  for (let e = 0; e < 4; e++) {
    const t = rollerState.speed - e * 2.55;
    const r = findSegmentIndex(t, segmentIndex);
    const o = interpolatePosition(t, r);
    rollerState.cars[e].entity = mp.objects.new(mp.game.joaat(e === 0 ? "ind_prop_dlc_roller_car" : "ind_prop_dlc_roller_car_02"), o, {
      dimension: 0,
      rotation: new mp.Vector3(0, 0, 140)
    });
    rollerState.cars[e].entity.rollerCarIndex = e;
    rollerState.cars[e].entity.notifyStreaming = true;
    rollerState.cars[e].streamingRange = 300;
  }
};
const normalizeVector = e => {
  const t = sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
  if (t === 0) {
    return new mp.Vector3(0, 0, 0);
  }
  const r = 1 / t;
  return new mp.Vector3(e.x * r, e.y * r, e.z * r);
};
const computeDirectionEuler = (e, t) => {
  const r = rollerState.trackPoints[e];
  const o = rollerState.trackPoints[t];
  const a = normalizeVector(new mp.Vector3(o.x - r.x, o.y - r.y, o.z - r.z));
  const n = toDeg(atan2(a.x, a.y));
  const l = toDeg(atan2(a.z, sqrt(a.x * a.x + a.y * a.y)));
  return new mp.Vector3(-l, 0, -n - 180);
};
const updateCarRotation = (e, t, r) => {
  const o = prevSegmentIndex(t);
  const a = t;
  const n = nextSegmentIndex(t);
  const l = nextSegmentIndex(n);
  if (r < 0) {
    r += rollerState.trackDistances[rollerState.index - 1];
  }
  const s = (r - rollerState.trackDistances[a]) / (rollerState.trackDistances[n] - rollerState.trackDistances[a]);
  let c;
  let i;
  let p;
  if (s < 0.5) {
    p = s + 0.5;
    c = quatFromEulerDeg(computeDirectionEuler(o, a));
    i = quatFromEulerDeg(computeDirectionEuler(a, n));
  } else {
    p = s - 0.5;
    c = quatFromEulerDeg(computeDirectionEuler(a, n));
    i = quatFromEulerDeg(computeDirectionEuler(n, l));
  }
  if (rollerState.cars[e].entity.handle === 0) {
    return;
  }
  const m = mp.game.misc.slerpNearQuaternion(p, c[0], c[1], c[2], c[3], i[0], i[1], i[2], i[3]);
  mp.game.invoke("0x77B21BE7AC540F07", rollerState.cars[e].entity.handle, m.outX, m.outY, m.outZ, m.outW);
};
const updateCars = () => {
  for (let e = 0; e < rollerState.cars.length; e++) {
    if (rollerState.cars[e].entity.handle === 0) {
      continue;
    }
    const t = rollerState.speed - e * 2.55;
    const r = findSegmentIndex(t, segmentIndex);
    const o = interpolatePosition(t, r);
    rollerState.cars[e].entity.setCoordsNoOffset(o.x, o.y, o.z, true, false, false);
    updateCarRotation(e, r, t);
  }
};
const updateRollerSpeed = e => {
  if (e) {
    const e = getServerTick();
    deltaSeconds = (e - lastRollerTick) / 550;
    lastRollerTick = e;
  }
  const t = computeSlopeAccel();
  if (segmentIndex < 20) {
    if (rollerState.variableSpeed < 3) {
      rollerState.variableSpeed += 0.3;
    } else {
      rollerState.variableSpeed -= 0.3;
    }
    if (abs(rollerState.variableSpeed - 3) < 0.3) {
      rollerState.variableSpeed = 3;
    }
  } else {
    rollerState.variableSpeed += t * deltaSeconds;
  }
  if (rollerState.speed < rollerState.trackDistances[1] && rollerState.speed + rollerState.variableSpeed * deltaSeconds >= rollerState.trackDistances[1]) {
    rollerState.speed = rollerState.trackDistances[1];
  } else {
    rollerState.speed += rollerState.variableSpeed * deltaSeconds;
  }
  let r = false;
  if (rollerState.variableSpeed >= 0) {
    if (rollerState.speed >= rollerState.trackDistances[rollerState.index - 1]) {
      if (rollerState.state === "ARRIVAL") {
        rollerState.speed = rollerState.trackDistances[1];
      } else {
        rollerState.speed -= rollerState.trackDistances[rollerState.index - 1];
      }
      segmentIndex = 0;
    }
    for (let e = nextSegmentIndex(segmentIndex); !r;) {
      if (rollerState.speed < rollerState.trackDistances[e]) {
        r = true;
        if (segmentIndex !== e - 1 && rollerState.speedProfile[e - 1] !== rollerState.variableSpeed) {
          rollerState.variableSpeed = rollerState.speedProfile[e - 1];
        }
        segmentIndex = e - 1;
      }
      e = nextSegmentIndex(e);
    }
  } else {
    if (rollerState.speed < 0) {
      rollerState.speed += rollerState.trackDistances[rollerState.index - 1];
      segmentIndex = rollerState.index - 2;
    }
    for (let e = segmentIndex; !r;) {
      if (rollerState.trackDistances[e] < rollerState.speed) {
        r = true;
        segmentIndex = e;
      }
      e = prevSegmentIndex(e);
    }
  }
  updateCars();
};
const attachRiderToCar = (e, t, r) => {
  const o = [{
    x: 0.37,
    y: 0,
    z: 0.9
  }, {
    x: -0.37,
    y: 0,
    z: 0.9
  }, {
    x: 0.37,
    y: 1,
    z: 0.9
  }, {
    x: -0.37,
    y: 1,
    z: 0.9
  }][r];
  if (o) {
    e.attachTo(t.handle, 0, o.x, o.y, o.z, 0, 0, 180, false, false, false, false, 2, true);
    setTimeout(() => {
      playRollerAnimation(e);
    }, 100);
    loadRollerSounds(true);
  }
};
const playRollerAnimation = (e, t = "idle_a_player_one") => {
  e.taskPlayAnim(rollerAnimDict, t, 8, -8, -1, 513, 0, false, false, false);
};
const playCarSound = e => {
  for (const t of rollerState.cars) {
    if (t.entity.handle !== 0) {
      mp.game.audio.playSoundFromEntity(-1, e, t.entity.handle, "DLC_IND_ROLLERCOASTER_SOUNDS", false, 0);
    }
  }
};
const playCarAnimation = e => {
  for (const t of rollerState.cars) {
    if (t.entity.handle !== 0) {
      t.entity.playAnim(e, rollerAnimDict, 8, false, true, false, 0, 0);
    }
  }
};
const tryBoardRollerCoaster = () => {
  if (!loggedin || chatActive || !isLocalInLunaParkArea || isLocalSittingRollerCoaster || rollerState.state !== "WAITING") {
    return;
  }
  if (mp.Vector3.Distance2D(localplayer.position, ROLLER_ENTRY_POS) > 10) {
    return;
  }
  let e = -1;
  let t = 999;
  for (let r = 0; r < GET_IN_POSITIONS.length; r++) {
    const o = GET_IN_POSITIONS[r];
    const a = mp.Vector3.Distance2D(localplayer.position, o);
    if (a < t && a < 2.5) {
      t = a;
      e = r;
    }
  }
  if (e === -1) {
    return;
  }
  const r = Math.floor(e / 2);
  if (!rollerState.cars[r] || rollerState.cars[r].seats[e % 2] === null) {
    if (testAntiFlood("RollerCoasterTryCooldown", 5000)) {
      mp.events.callRemote("Client_RollerCoaster_TryToBoard", e);
      return;
    } else {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
  }
  ShowNotification(language["Этот вагон уже заполнен! Попробуйте сесть в другой вагон"][curr_lang], 2);
};
const tryExitRollerCoaster = () => {
  if (loggedin && !chatActive && isLocalInLunaParkArea && isLocalSittingRollerCoaster) {
    if (testAntiFlood("RollerCoasterTryCooldown", 5000)) {
      mp.events.callRemote("Client_RollerCoaster_TryToLeave");
      return;
    } else {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
  }
};
function delay(e) {
  return new Promise(t => setTimeout(t, e));
}
let coord = null;
let place = null;
global.isLocalSittingRollerCoaster = false;
const getSeatWorldPosition = (e, t) => {
  const r = [{
    x: 0.37,
    y: 0,
    z: 0.9
  }, {
    x: -0.37,
    y: 0,
    z: 0.9
  }, {
    x: 0.37,
    y: 1,
    z: 0.9
  }, {
    x: -0.37,
    y: 1,
    z: 0.9
  }][t];
  if (!r) {
    return null;
  }
  const o = e.entity.getCoords(true);
  const a = e.entity.getHeading();
  const n = toRad(a);
  const l = r.x * cos(n) - r.y * sin(n);
  const s = r.x * sin(n) + r.y * cos(n);
  return new mp.Vector3(o.x + l, o.y + s, o.z + r.z);
};
const animatedAttachToSeat = (e, t, r, o, a, n) => new Promise(l => {
  const s = [{
    x: 0.37,
    y: 0,
    z: 0.9
  }, {
    x: -0.37,
    y: 0,
    z: 0.9
  }, {
    x: 0.37,
    y: 1,
    z: 0.9
  }, {
    x: -0.37,
    y: 1,
    z: 0.9
  }][r];
  if (!s) {
    l();
    return;
  }
  const c = t.entity.getCoords(true);
  const i = t.entity.getHeading();
  const p = toRad(i);
  const m = o.x - c.x;
  const d = o.y - c.y;
  const _ = o.z - c.z;
  const S = cos(p);
  const w = sin(p);
  const T = m * S + d * w;
  const u = -m * w + d * S;
  const h = _;
  const R = s.x;
  const y = s.y - 0.4;
  const f = s.z;
  const P = Date.now();
  const g = a + n;
  const O = setInterval(() => {
    if (!mp.players.exists(e) || e.handle === 0 || t.entity.handle === 0) {
      clearInterval(O);
      l();
      return;
    }
    const r = Date.now() - P;
    const o = Math.min(r / g, 1);
    let c;
    let i;
    let p;
    if (r < a) {
      const e = r / a;
      const t = 1 - (1 - e) * (1 - e);
      c = T + (R - T) * t;
      i = u + (y - u) * t;
      p = h + (f - h) * t;
    } else {
      const e = (r - a) / n;
      const t = 1 - (1 - e) * (1 - e);
      c = R + (s.x - R) * t;
      i = y + (s.y - y) * t;
      p = f + (s.z - f) * t;
    }
    e.attachTo(t.entity.handle, 0, c, i, p, 0, 0, 180, false, false, false, false, 2, true);
    if (o >= 1) {
      clearInterval(O);
      l();
    }
  }, 16);
});
async function playerGetOn(e, t, r, o = 30000) {
  try {
    if (!isLocalInLunaParkArea || isLocalSittingRollerCoaster) {
      return;
    }
    isLocalSittingRollerCoaster = true;
    const a = Math.ceil(o / 1000);
    const n = [{
      name: "timer",
      title: language["Время до начала"][curr_lang],
      value: a,
      isTimer: true
    }];
    main_browser.execute(`\n            APPS.state.hud.show_luna_park_timer_info = ${JSON.stringify(n)};\n            APPS.state.hud.show_luna_park_timer = true;\n        `);
    rollerState.cars[e].seats[t] = localplayer.remoteId;
    const l = rollerState.cars[e];
    if (!l || !l.entity || l.entity.handle === 0) {
      return;
    }
    if (r < 0 || r >= GET_IN_POSITIONS.length) {
      return;
    }
    const s = GET_IN_POSITIONS[r];
    const c = t % 2 == 0 ? "two" : "one";
    localplayer.setCoordsNoOffset(s.x, s.y, 18.338, false, false, false);
    localplayer.setHeading(-125);
    setTimeout(() => {
      localplayer.setCoordsNoOffset(s.x, s.y, 18.338, false, false, false);
      localplayer.setHeading(-125);
    }, 100);
    const i = t;
    await delay(100);
    if (!isLocalSittingRollerCoaster) {
      return;
    }
    localplayer.setCoordsNoOffset(s.x, s.y, 18.338, false, false, false);
    localplayer.setHeading(-125);
    localplayer.taskPlayAnim(rollerAnimDict, "enter_player_" + c, 8, -8, -1, 512, 0, false, false, false);
    await delay(4500);
    if (!isLocalSittingRollerCoaster) {
      return;
    }
    if (!mp.players.exists(localplayer) || localplayer.handle === 0 || !l.entity || l.entity.handle === 0) {
      if (mp.players.exists(localplayer)) {
        localplayer.freezePosition(false);
        localplayer.setCollision(true, true);
      }
      isLocalSittingRollerCoaster = false;
      return;
    }
    attachRiderToCar(localplayer, l.entity, i);
    localplayer.seatInRollerCoaster = {
      carIndex: e,
      seatIndex: i
    };
  } catch (e) {
    mp.console.logInfo(`[RollerCoaster Client] ERROR PlayerGetOn: ${e.message}`);
    isLocalSittingRollerCoaster = false;
    if (localplayer.seatInRollerCoaster) {
      delete localplayer.seatInRollerCoaster;
    }
  }
}
function onRollerTimerUpdate(e) {
  const t = Math.ceil(e / 1000);
  main_browser.execute(`this.AppComponents.hud.lunaParkTimer.updateFieldValue('timer', ${t});`);
}
function playerGetOff() {
  if (!isLocalSittingRollerCoaster) {
    return;
  }
  let e = localplayer.seatInRollerCoaster?.carIndex;
  let t = localplayer.seatInRollerCoaster?.seatIndex;
  if (e === undefined || t === undefined) {
    return;
  }
  localplayer.detach(true, true);
  localplayer.freezePosition(false);
  localplayer.setCollision(true, true);
  isLocalSittingRollerCoaster = false;
  rollerState.cars[e].seats[t] = null;
  delete localplayer.seatInRollerCoaster;
  const r = t % 2 == 0 ? "two" : "one";
  localplayer.taskPlayAnim(rollerAnimDict, "exit_player_" + r, 8, -8, -1, 512, 0, false, false, false);
  main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
}
function playerGetOffImmediate(e) {
  const t = mp.players.atRemoteId(e);
  if (t && t.handle !== 0) {
    for (let e = 0; e < rollerState.cars.length; e++) {
      const r = rollerState.cars[e].seats.indexOf(t.remoteId);
      if (r !== -1) {
        rollerState.cars[e].seats[r] = null;
        break;
      }
    }
    if (t.seatInRollerCoaster) {
      delete t.seatInRollerCoaster;
    }
    if (t === localplayer) {
      isLocalSittingRollerCoaster = false;
      if (localplayer.seatInRollerCoaster) {
        delete localplayer.seatInRollerCoaster;
      }
      main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
    }
    t.detach(true, true);
    t.freezePosition(false);
    t.setCollision(true, true);
  }
}
mp.events.add("Client_RollerCoasterPlayerGetOn", playerGetOn);
mp.events.add("Client_RollerCoaster_UpdateTimer", onRollerTimerUpdate);
mp.events.add("Client_RollerCoasterPlayerGetOff", playerGetOff);
mp.events.add("Client_RollerCoasterPlayerGetOffImmediate", playerGetOffImmediate);
mp.events.add("Client_StartRollerCoasterRide", e => {
  const t = JSON.parse(e);
  rollerState.cars.forEach(e => e.seats.fill(null));
  const r = [];
  for (const e of t) {
    const {
      playerId: t,
      carIndex: o,
      seatIndex: a
    } = e;
    rollerState.cars[o].seats[a] = t;
    const n = mp.players.atRemoteId(t);
    if (!n || n.handle === 0) {
      continue;
    }
    const l = rollerState.cars[o];
    if (l && l.entity && l.entity.handle !== 0) {
      attachRiderToCar(n, l.entity, a);
      r.push(n);
      rollerState.cars[o];
      if (n === localplayer) {
        isLocalSittingRollerCoaster = true;
        main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
      }
    }
  }
  playCarSound("Bar_Lower_And_Lock");
  playCarAnimation("safety_bar_enter_roller_car");
  setTimeout(() => {
    lastRollerTick = getServerTick();
    rollerState.active = true;
    rollerState.state = "TRIP";
    setRollerMarkersVisibility(false);
    segmentIndex = 1;
    if (isLocalSittingRollerCoaster) {
      HintShow(language["Использоуйте ЛКМ для поднятия рук во время поездки"][curr_lang], 5000);
    }
  }, 2000);
});
mp.events.add("Client_FinishRollerCoasterRide", () => {
  rollerState.active = false;
  rollerState.state = "WAITING";
  setRollerMarkersVisibility(true);
  rollerState.speed = rollerState.trackDistances[1];
  segmentIndex = 1;
  rollerState.variableSpeed = 0;
  lastRollerTick = Date.now();
  updateCars();
  playCarSound("Ride_Stop");
  testAntiFlood("RollerCoasterTryCooldown", 5000);
  rollerState.cars.forEach(e => {
    e.seats.forEach((e, t) => {
      if (e !== null) {
        const r = mp.players.atRemoteId(e);
        if (mp.players.exists(r)) {
          if (r.needAttachToRollerCar) {
            delete r.needAttachToRollerCar;
          }
          if (r.handle !== 0) {
            r.detach(true, true);
            r.freezePosition(false);
            r.setCollision(true, true);
            if (r === localplayer && isLocalInLunaParkArea) {
              place = t % 2 == 0 ? "two" : "one";
              localplayer.taskPlayAnim(rollerAnimDict, "exit_player_" + place, 8, -8, -1, 512, 0, false, false, false);
              isLocalSittingRollerCoaster = false;
              main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
            }
          }
        }
      }
    });
    e.seats.fill(null);
  });
});
const updateRollerState = () => {
  switch (rollerState.state) {
    case "TRIP":
      if (segmentIndex === 0) {
        rollerState.state = "ARRIVAL";
      } else {
        updateRollerSpeed(true);
        if (isLocalSittingRollerCoaster) {
          mp.game.controls.disableControlAction(0, 24, true);
          const e = mp.game.controls.isDisabledControlPressed(0, 24) ? "hands_up_idle_a_player_one" : "idle_a_player_one";
          playRollerAnimation(localplayer, e);
        }
      }
      break;
    case "ARRIVAL":
      playCarSound("Ride_Stop");
      rollerState.state = "STOP";
      break;
    case "STOP":
      if (rollerState.variableSpeed > 1) {
        updateRollerSpeed(true);
        if (isLocalSittingRollerCoaster) {
          playRollerAnimation(localplayer, "idle_a_player_one");
        }
      } else if (rollerState.active) {
        rollerState.active = false;
        playCarSound("Bar_Unlock_And_Raise");
        playCarAnimation("safety_bar_exit_roller_car");
        rollerState.state = "WAITING";
        setRollerMarkersVisibility(true);
      }
  }
};
const loadRollerSounds = e => {
  if (e) {
    mp.game.audio.loadStreamWithStartOffset("Player_Ride", 0, "DLC_IND_ROLLERCOASTER_SOUNDS");
  } else {
    mp.game.audio.loadStreamWithStartOffset("Ambient_Ride", 1, "DLC_IND_ROLLERCOASTER_SOUNDS");
  }
};
initTrack();
const FERRIS_ENTRY_POS = new mp.Vector3(-1666, -1126.89, 12.7);
const FERRIS_EXIT_POS = new mp.Vector3(-1662.03, -1126.65, 12.7);
const FERRIS_MODEL = mp.game.joaat("prop_ld_ferris_wheel");
const FERRIS_CABIN_MODEL = mp.game.joaat("prop_ferris_car_01");
const seatAnim = "amb@code_human_in_bus_passenger_idles@male@sit@base";
const ferrisWheel = mp.objects.new(FERRIS_MODEL, new mp.Vector3(-1663.97, -1126.7, 30.7), {
  dimension: 0,
  rotation: new mp.Vector3(0, 0, 0)
});
ferrisWheel.streamingRange = 350;
ferrisWheel.setCollision(false, false);
const ferrisCabs = Array.from({
  length: 16
}, (e, t) => {
  const r = mp.objects.new(FERRIS_CABIN_MODEL, new mp.Vector3(-1663.97, -1126.7, 30.7), {
    dimension: 0
  });
  r.ferrisCabIndex = t;
  r.notifyStreaming = true;
  return {
    seats: [null, null, null],
    cabObject: r
  };
});
global.isLocalSittingFerris = false;
let disablePlayerCamControls = false;
const ferrisState = {
  isRiding: false,
  currentCab: null,
  currentSeatIndex: 0,
  serverTimeOffset: 0,
  periodMs: 120000,
  canExit: false
};
let ferrisPrevRotationDegForLap = null;
const getFerrisRotationDeg = () => (Date.now() - ferrisState.serverTimeOffset) % ferrisState.periodMs / ferrisState.periodMs * 360;
const getCabWorldOffset = e => {
  const t = 6.28319 / 16 * e;
  return ferrisWheel.getOffsetFromInWorldCoords(0, toRad(15.3) * toDeg(sin(t)), toRad(-15.3) * toDeg(cos(t)));
};
const attachPlayerToCab = (e, t, r) => {
  const o = [{
    x: 0,
    y: -0.9,
    z: -2.6,
    rotZ: 0
  }, {
    x: 0,
    y: 0.9,
    z: -2.6,
    rotZ: 180
  }, {
    x: 0.9,
    y: 0,
    z: -2.6,
    rotZ: 90
  }][r];
  if (o && e && e.handle !== 0 && t !== 0) {
    e.attachTo(t, 0, o.x, o.y, o.z, 0, 0, o.rotZ, false, false, false, false, 2, true);
  }
};
const handleFerrisExit = () => {
  if (isLocalSittingFerris) {
    ferrisWheelSetCollision(true);
    localplayer.detach(true, true);
    localplayer.clearTasksImmediately();
    localplayer.setCollision(true, true);
    localplayer.setCoordsNoOffset(FERRIS_EXIT_POS.x, FERRIS_EXIT_POS.y, FERRIS_EXIT_POS.z + 1, false, false, false);
    isLocalSittingFerris = false;
    ferrisState.isRiding = false;
    ferrisState.currentCab = null;
    ferrisState.canExit = false;
    ferrisPrevRotationDegForLap = null;
    disablePlayerCamControls = false;
    mp.game.cam.setFollowPedCamViewMode(2);
    showHudInteraction(false);
  }
};
const tryExitFerrisWheel = () => {
  if (isLocalSittingFerris && ferrisState.canExit) {
    if (!testAntiFlood("tryBoardOrExitFerrisWheel", 10000)) {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
    handleFerrisExit();
    mp.events.callRemote("Server_FerrisWheel_Exit");
  }
};
let ferrisMarker = null;
let ferrisMarkerRed = null;
let ferrisColshape = null;
const createFerrisMarker = () => {
  if (ferrisMarker) {
    ferrisMarker.destroy();
    ferrisMarker = null;
  }
  if (ferrisMarkerRed) {
    ferrisMarkerRed.destroy();
    ferrisMarkerRed = null;
  }
  if (ferrisColshape) {
    ferrisColshape.destroy();
    ferrisColshape = null;
  }
  ferrisMarker = mp.markers.new(1, FERRIS_ENTRY_POS, 1, {
    bobUpAndDown: false,
    color: [255, 255, 0, 75],
    dimension: 0,
    direction: new mp.Vector3(0, 0, 0),
    rotation: new mp.Vector3(0, 0, 0),
    visible: true
  });
  ferrisColshape = mp.colshapes.newCircle(FERRIS_ENTRY_POS.x, FERRIS_ENTRY_POS.y, 1.5, 0);
  ferrisColshape.ferrisGetIn = true;
};
const clearFerrisMarker = () => {
  if (ferrisMarker) {
    ferrisMarker.destroy();
    ferrisMarker = null;
  }
  if (ferrisMarkerRed) {
    ferrisMarkerRed.destroy();
    ferrisMarkerRed = null;
  }
  if (ferrisColshape) {
    ferrisColshape.destroy();
    ferrisColshape = null;
  }
};
let lastFerrisMarkerCheck = 0;
function tryBoardFerrisWheel() {
  if (isLocalSittingFerris) {
    return;
  }
  if (mp.Vector3.Distance2D(localplayer.position, FERRIS_ENTRY_POS) > 2) {
    return;
  }
  let e = null;
  let t = 0;
  let r = 3.5;
  for (let o = 0; o < ferrisCabs.length; o++) {
    const a = ferrisCabs[o];
    const n = a.cabObject.getCoords(true);
    n.z -= 1.5;
    const l = mp.Vector3.Distance(localplayer.position, n);
    if (l < r) {
      e = a;
      t = o;
      r = l;
    }
  }
  if (t) {
    if (testAntiFlood("tryBoardOrExitFerrisWheel", 5000)) {
      mp.events.callRemote("Server_FerrisWheel_TryBoard", t);
      return;
    } else {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
  }
  ShowNotification(language["Дождитесь когда кабинка подъедет к вам"][curr_lang], 2);
}
const FERRIS_EXIT_CHECK_POS = new mp.Vector3(-1663.97, -1126.7, 13.5);
const FERRIS_EXIT_RADIUS = 12;
const updateFerrisWheel = () => {
  if (ferrisWheel.handle === 0) {
    return;
  }
  const e = getFerrisRotationDeg();
  ferrisWheel.setRotation(-e - 22.5, 0, 0, 2, true);
  if (isLocalSittingFerris && ferrisState.currentCab) {
    if (ferrisPrevRotationDegForLap === null) {
      ferrisPrevRotationDegForLap = e;
    } else if (e < ferrisPrevRotationDegForLap - 90) {
      mp.events.callRemote("Server_FerrisWheel_FullRotation");
      ferrisPrevRotationDegForLap = e;
    } else {
      ferrisPrevRotationDegForLap = e;
    }
  }
  for (let e = 0; e < ferrisCabs.length; e++) {
    const t = getCabWorldOffset(e);
    ferrisCabs[e].cabObject.setCoordsNoOffset(t.x, t.y, t.z, true, false, false);
  }
  if (isLocalSittingFerris && ferrisState.currentCab) {
    if (disablePlayerCamControls) {
      mp.game.controls.disableControlAction(0, 0, true);
      mp.game.controls.disableControlAction(0, 26, true);
      mp.game.cam.setFollowPedCamViewMode(4);
    }
    const e = ferrisState.currentCab.cabObject.getCoords(true);
    if (e.z < FERRIS_EXIT_CHECK_POS.z + 4) {
      if (mp.Vector3.Distance(e, FERRIS_EXIT_CHECK_POS) < 12) {
        showHudInteraction(true);
        ferrisState.canExit = true;
      } else {
        showHudInteraction(false);
        ferrisState.canExit = false;
      }
    } else {
      ferrisState.canExit = false;
      showHudInteraction(false);
    }
  }
};
function ferrisWheelSetCollision(e) {
  ferrisWheel.setCollision(e, e);
  ferrisCabs.forEach(t => t.cabObject.setCollision(e, e));
}
async function boardPlayerToFerrisWheel(e, t, r) {
  try {
    ferrisCabs[t].seats[r] = e;
    const o = mp.players.atRemoteId(e);
    if (!mp.players.exists(o)) {
      return;
    }
    if (o.handle === 0) {
      o.needAttachToFerrisCab = {
        cabIndex: t,
        seatIndex: r
      };
      return;
    }
    const a = ferrisCabs[t];
    if (!a || a.cabObject.handle === 0) {
      return;
    }
    if (o === localplayer) {
      isLocalSittingFerris = true;
      ferrisState.currentCab = a;
      ferrisState.currentSeatIndex = r;
      ferrisState.isRiding = true;
      showHudInteraction(false);
    }
    o.position = new mp.Vector3(-1666.037, -1126.812, 13.692);
    o.setHeading(-90);
    o.seatInFerrisCab = {
      cabIndex: t,
      seatIndex: r
    };
    o.taskPlayAnim("anim@mp_ferris_wheel", "enter_player_one", 8, -8, -1, 0, 0, false, false, false);
    await delay(3000);
    stop_animation(o, "anim@mp_ferris_wheel", "enter_player_one");
    o.taskPlayAnim(seatAnim, "base", 8, -8, -1, 1, 0, false, false, false);
    attachPlayerToCab(o, a.cabObject.handle, r);
    await delay(1000);
    o.taskPlayAnim(seatAnim, "base", 8, -8, -1, 1, 0, false, false, false);
    if (o === localplayer) {
      ferrisWheelSetCollision(false);
    }
  } catch (e) {
    mp.console.logInfo(`!{FF0000}ERROR FERRIS board: ${e.message}`);
  }
}
mp.events.add("Client_FerrisWheel_PlayerExit", (e, t, r) => {
  if (ferrisCabs[t]) {
    ferrisCabs[t].seats[r] = null;
  }
  const o = mp.players.atRemoteId(e);
  if (o && mp.players.exists(o)) {
    if (o.needAttachToFerrisCab) {
      delete o.needAttachToFerrisCab;
    }
    if (o.handle !== 0) {
      if (localplayer.handle === o.handle) {
        handleFerrisExit();
      } else {
        o.detach(true, true);
        o.clearTasksImmediately();
        o.setCoordsNoOffset(FERRIS_EXIT_POS.x, FERRIS_EXIT_POS.y, FERRIS_EXIT_POS.z + 1, false, false, false);
        if (o.seatInFerrisCab) {
          delete o.seatInFerrisCab;
        }
      }
    }
  }
});
mp.events.add("Client_FerrisWheel_BoardPlayer", boardPlayerToFerrisWheel);
mp.events.add("Client_FerrisWheel_UpdatePeriod", e => {
  ferrisState.periodMs = e;
});
const DROP_TOWER_JOIN = new mp.Vector3(-1647.3, -1112.045, 12.017);
const DROP_TOWER_EXIT = new mp.Vector3(-1648.739, -1105.266, 13.018);
const DROP_TOWER_SEAT_MODEL = mp.game.joaat("gr_funjump_seats");
const DROP_TOWER_HANDRAILS_OPEN_MODEL = mp.game.joaat("gr_funjump_rails_open");
const DROP_TOWER_HANDRAILS_CLOSE_MODEL = mp.game.joaat("gr_funjump_rails_close");
const DROP_TOWER_POS = new mp.Vector3(-1651.16113, -1108.69507, 13.96264);
const DROP_TOWER_TOP_POS = new mp.Vector3(-1651.16113, -1108.69507, 30.9081);
const DROP_TOWER_BROKEN_MAX_HEIGHT = 250;
const DROP_TOWER_RISE_DURATION = 10000;
const DROP_TOWER_FALL_DURATION = 1500;
const DROP_TOWER_TOP_PAUSE = 1000;
const DROP_TOWER_BOTTOM_PAUSE = 2000;
const DROP_TOWER_MAX_CYCLES = 3;
const DROP_TOWER_BROKEN_RISE_DURATION = 3000;
const DROP_TOWER_BROKEN_FALL_DURATION = 4000;
const dropTowerObject = mp.objects.new(DROP_TOWER_SEAT_MODEL, DROP_TOWER_POS, {
  dimension: 0,
  rotation: new mp.Vector3(0, 0, 0)
});
dropTowerObject.isDropTower = true;
dropTowerObject.notifyStreaming = true;
testObj = dropTowerObject;
let dropTowerHandrails = mp.objects.new(DROP_TOWER_HANDRAILS_OPEN_MODEL, DROP_TOWER_POS, {
  dimension: 0,
  rotation: new mp.Vector3(0, 0, 0)
});
mp.markers.new(1, DROP_TOWER_JOIN, 1, {
  bobUpAndDown: false,
  color: [255, 255, 0, 75],
  dimension: 0,
  direction: new mp.Vector3(0, 0, 0),
  rotation: new mp.Vector3(0, 0, 0),
  visible: true
});
global.isLocalSittingDropTower = false;
let localDropTowerSeatIndex = -1;
const dropTowerState = {
  isRiding: false,
  canExit: false,
  seats: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  rideStartTime: 0,
  scenarioType: 0,
  currentHeight: 0,
  currentCycle: 0,
  currentPhase: "WAITING",
  previousPhase: "WAITING",
  explosionStartTime: 0,
  explosionCurrentZ: 0
};
const seatOffsets = [{
  x: 2.05,
  y: 0.8,
  z: 0.4,
  rotZ: -40
}, {
  x: 1.55,
  y: 1.23,
  z: 0.4,
  rotZ: -40
}, {
  x: 1.05,
  y: 1.66,
  z: 0.4,
  rotZ: -40
}, {
  x: 0.55,
  y: 2.1,
  z: 0.4,
  rotZ: -40
}, {
  x: -0.8,
  y: 2.05,
  z: 0.4,
  rotZ: 50
}, {
  x: -1.23,
  y: 1.55,
  z: 0.4,
  rotZ: 50
}, {
  x: -1.66,
  y: 1.05,
  z: 0.4,
  rotZ: 50
}, {
  x: -2.1,
  y: 0.55,
  z: 0.4,
  rotZ: 50
}, {
  x: -2.05,
  y: -0.8,
  z: 0.4,
  rotZ: 140
}, {
  x: -1.55,
  y: -1.23,
  z: 0.4,
  rotZ: 140
}, {
  x: -1.05,
  y: -1.66,
  z: 0.4,
  rotZ: 140
}, {
  x: -0.55,
  y: -2.1,
  z: 0.4,
  rotZ: 140
}, {
  x: 0.8,
  y: -2.05,
  z: 0.4,
  rotZ: -130
}, {
  x: 1.23,
  y: -1.55,
  z: 0.4,
  rotZ: -130
}, {
  x: 1.66,
  y: -1.05,
  z: 0.4,
  rotZ: -130
}, {
  x: 2.1,
  y: -0.55,
  z: 0.4,
  rotZ: -130
}];
const exitPosition = [new mp.Vector3(-1647.2479747610298, -1107.1679850286946, 13.02), new mp.Vector3(-1648.0444740747344, -1106.2218527173698, 13.02), new mp.Vector3(-1649.0419949815528, -1105.3448184470262, 13.02), new mp.Vector3(-1650.1044112163247, -1104.6603255532395, 13.02), new mp.Vector3(-1652.6882149713053, -1104.7819147610298, 13.02), new mp.Vector3(-1653.6343472826302, -1105.5784140747344, 13.02), new mp.Vector3(-1654.5113815529737, -1106.5759349815528, 13.02), new mp.Vector3(-1655.1958744467604, -1107.6383512163247, 13.02), new mp.Vector3(-1655.07428523897, -1110.2221549713054, 13.02), new mp.Vector3(-1654.2777859252656, -1111.1682872826302, 13.02), new mp.Vector3(-1653.2802650184472, -1112.0453215529737, 13.02), new mp.Vector3(-1652.2178487836752, -1112.7298144467604, 13.02), new mp.Vector3(-1649.6340450286946, -1112.6082252389701, 13.02), new mp.Vector3(-1648.6879127173697, -1111.8117259252656, 13.02), new mp.Vector3(-1647.8108784470262, -1110.8142050184472, 13.02), new mp.Vector3(-1647.1263855532395, -1109.7517887836752, 13.02)];
const getDropTowerExitPosition = e => exitPosition[e] || DROP_TOWER_EXIT;
function attachDropTowerHandrails() {
  if (mp.objects.exists(dropTowerHandrails) && mp.objects.exists(dropTowerObject)) {
    dropTowerHandrails.attachTo(dropTowerObject.handle, 0, 0, 0, 0, 0, 0, 0, false, false, false, false, 2, true);
  }
}
function closeDropTowerHandrails() {
  if (dropTowerHandrails && mp.objects.exists(dropTowerHandrails)) {
    dropTowerHandrails.destroy();
  }
  dropTowerHandrails = mp.objects.new(DROP_TOWER_HANDRAILS_CLOSE_MODEL, dropTowerObject.getCoords(true), {
    dimension: 0,
    rotation: new mp.Vector3(0, 0, 0)
  });
  attachDropTowerHandrails();
  setTimeout(() => {
    if (dropTowerHandrails && mp.objects.exists(dropTowerHandrails) && mp.objects.exists(dropTowerObject)) {
      attachDropTowerHandrails();
    }
  }, 500);
}
function openDropTowerHandrails() {
  if (dropTowerHandrails && mp.objects.exists(dropTowerHandrails)) {
    dropTowerHandrails.destroy();
  }
  dropTowerHandrails = mp.objects.new(DROP_TOWER_HANDRAILS_OPEN_MODEL, dropTowerObject.getCoords(true), {
    dimension: 0,
    rotation: new mp.Vector3(0, 0, 0)
  });
  attachDropTowerHandrails();
  setTimeout(() => {
    if (dropTowerHandrails && mp.objects.exists(dropTowerHandrails) && mp.objects.exists(dropTowerObject)) {
      attachDropTowerHandrails();
    }
  }, 500);
}
function attachPlayerToDropTower(e, t) {
  const r = seatOffsets[t];
  if (r) {
    e.attachTo(dropTowerObject.handle, 0, r.x, r.y, r.z, 0, 0, r.rotZ, false, false, false, false, 2, true);
  }
}
function tryToBoardDropTower() {
  if (!isLocalSittingDropTower && !(mp.Vector3.Distance2D(localplayer.position, DROP_TOWER_JOIN) > 2)) {
    if (testAntiFlood("tryBoardDropTower", 5000)) {
      mp.events.callRemote("Server_DropTower_TryBoard");
      return;
    } else {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
  }
}
function boardPlayerToDropTower(e, t, r) {
  dropTowerState.seats[t] = e;
  const o = mp.players.atRemoteId(e);
  if (mp.players.exists(o)) {
    if (o.handle !== 0) {
      o.clearTasksImmediately();
      if (o === localplayer) {
        isLocalSittingDropTower = true;
        dropTowerState.isRiding = true;
        localDropTowerSeatIndex = t;
        const e = [{
          name: "timer",
          title: language["Время до начала"][curr_lang],
          value: r,
          isTimer: true
        }];
        main_browser.execute(`\n            APPS.state.hud.show_luna_park_timer_info = ${JSON.stringify(e)};\n            APPS.state.hud.show_luna_park_timer = true;\n        `);
      }
      setTimeout(() => {
        if (mp.players.exists(o)) {
          attachPlayerToDropTower(o, t);
        }
      }, 100);
      o.taskPlayAnim("anim@mp_rollarcoaster", "idle_a_player_one", 8, -8, -1, 1, 0, false, false, false);
    } else {
      o.needAttachToDropTower = {
        seatIndex: t
      };
    }
  }
}
function clearDropTowerVariables() {
  localplayer.detach(true, true);
  isLocalSittingDropTower = false;
  dropTowerState.isRiding = false;
  localDropTowerSeatIndex = -1;
  main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
}
function tryExitDropTower() {
  if (isLocalSittingDropTower && testAntiFlood("Server_DropTower_Exit", 5000)) {
    mp.events.callRemote("Server_DropTower_Exit");
  }
}
function playerExitDropTower(e, t) {
  dropTowerState.seats[t] = null;
  const r = mp.players.atRemoteId(e);
  if (!r || !mp.players.exists(r)) {
    return;
  }
  if (r.needAttachToDropTower) {
    delete r.needAttachToDropTower;
  }
  if (r.handle === 0) {
    return;
  }
  const o = getDropTowerExitPosition(t);
  r.detach(true, true);
  r.setCoordsNoOffset(o.x, o.y, o.z + 1, false, false, false);
  stop_animation(r, "anim@mp_rollarcoaster", "idle_a_player_one");
  if (localplayer.handle === r.handle) {
    mp.game.cam.setGameplayCamShakeAmplitude(0);
    mp.game.graphics.stopScreenEffect("SwitchShortNeutralIn");
    mp.game.graphics.stopScreenEffect("DrugsMichaelAliensFight");
    clearDropTowerVariables();
  }
}
function startDropTowerRide(e, t) {
  const r = JSON.parse(t);
  dropTowerState.seats.fill(null);
  for (const e of r) {
    const {
      playerId: t,
      seatIndex: r
    } = e;
    dropTowerState.seats[r] = t;
    const o = mp.players.atRemoteId(t);
    if (o && o.handle !== 0) {
      attachPlayerToDropTower(o, r);
      o.taskPlayAnim("anim@mp_rollarcoaster", "idle_a_player_one", 8, -8, -1, 1, 0, false, false, false);
      if (t === localplayer.remoteId) {
        isLocalSittingDropTower = true;
        dropTowerState.isRiding = true;
        localDropTowerSeatIndex = r;
        HintShow(language["Использоуйте ЛКМ для поднятия рук во время поездки"][curr_lang], 5000);
        main_browser.execute("APPS.state.hud.show_luna_park_timer = false;");
      }
    }
  }
  closeDropTowerHandrails();
  dropTowerState.rideStartTime = getServerTick();
  dropTowerState.scenarioType = e;
  dropTowerState.currentHeight = 0;
  dropTowerState.currentCycle = 0;
  dropTowerState.currentPhase = "BOTTOM_PAUSE";
  dropTowerState.previousPhase = "WAITING";
}
function finishDropTowerRide() {
  openDropTowerHandrails();
  dropTowerState.rideStartTime = 0;
  dropTowerState.currentHeight = 0;
  dropTowerState.currentCycle = 0;
  dropTowerState.currentPhase = "WAITING";
  dropTowerState.previousPhase = "WAITING";
  dropTowerState.explosionStartTime = 0;
  dropTowerState.explosionCurrentZ = 0;
  dropTowerState.canExit = true;
  if (isLocalSittingDropTower) {
    mp.game.cam.setGameplayCamShakeAmplitude(0);
    mp.game.graphics.stopScreenEffect("SwitchShortNeutralIn");
    mp.game.graphics.stopScreenEffect("DrugsMichaelAliensFight");
    clearDropTowerVariables();
  }
  dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, DROP_TOWER_POS.z, false, false, false);
  dropTowerState.seats.forEach((e, t) => {
    if (e === null) {
      return;
    }
    const r = mp.players.atRemoteId(e);
    if (!r || !mp.players.exists(r) || r.handle === 0) {
      return;
    }
    r.detach(true, true);
    const o = getDropTowerExitPosition(t);
    r.setCoordsNoOffset(o.x, o.y, o.z + 1, false, false, false);
    stop_animation(r, "anim@mp_rollarcoaster", "idle_a_player_one");
  });
  dropTowerState.seats.fill(null);
}
mp.events.add("Client_DropTower_BoardPlayer", boardPlayerToDropTower);
mp.events.add("Client_DropTower_UpdateTimer", e => {
  if (!isLocalSittingDropTower) {
    return;
  }
  const t = Math.ceil(e / 1000);
  main_browser.execute(`this.AppComponents.hud.lunaParkTimer.updateFieldValue('timer', ${t});`);
});
mp.events.add("Client_DropTower_PlayerExit", playerExitDropTower);
mp.events.add("Client_DropTower_StartRide", startDropTowerRide);
mp.events.add("Client_DropTower_FinishRide", finishDropTowerRide);
const calculateDropTowerPosition = (e, t) => {
  let r = 0;
  let o = 0;
  let a = "WAITING";
  if (e < 0) {
    return {
      height: 0,
      cycle: 0,
      phase: "WAITING"
    };
  }
  if (t === 1) {
    const t = 2000;
    const n = 4000;
    const l = 500;
    const s = 1000;
    const c = 800;
    const i = 600;
    const p = 1000;
    const m = 900;
    const d = 4500;
    const _ = 4000;
    let S = 0;
    if (e < S + t) {
      a = "BOTTOM_PAUSE";
      r = 0;
    }
    S += t;
    if (e >= S && e < S + n) {
      a = "RISING_70";
      const t = (e - S) / n;
      r = (t < 0.5 ? t * 2 * t : 1 - Math.pow(t * -2 + 2, 2) / 2) * 0.7;
    }
    S += n;
    if (e >= S && e < S + l) {
      a = "PAUSE_70";
      r = 0.7;
    }
    S += l;
    if (e >= S && e < S + s) {
      a = "GLITCH_FALL_1";
      const t = (e - S) / s;
      r = 0.7 - Math.pow(t, 2) * 0.7;
    }
    S += s;
    if (e >= S && e < S + c) {
      a = "GLITCH_RISE_1";
      const t = (e - S) / c;
      r = Math.pow(t, 1.5) * 0.5;
    }
    S += c;
    if (e >= S && e < S + i) {
      a = "GLITCH_FALL_2";
      r = 0.5 - (e - S) / i * 0.3;
    }
    S += i;
    if (e >= S && e < S + p) {
      a = "GLITCH_RISE_2";
      const t = (e - S) / p;
      r = 0.2 + (t < 0.5 ? t * 2 * t : 1 - Math.pow(t * -2 + 2, 2) / 2) * 0.8;
    }
    S += p;
    if (e >= S && e < S + m) {
      a = "FAST_FALL";
      const t = (e - S) / m;
      r = 1 - Math.pow(t, 2.5);
    }
    S += m;
    if (e >= S && e < S + d) {
      a = "SUPER_RISE";
      const t = (e - S) / d;
      r = Math.pow(t, 2) * ((250 - DROP_TOWER_POS.z) / (DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z));
    }
    S += d;
    if (e >= S && e < S + _) {
      a = "SLOW_FALL";
      const t = (e - S) / _;
      const o = Math.pow(t, 2);
      const n = (250 - DROP_TOWER_POS.z) / (DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z);
      r = n - o * n;
    } else if (e >= S + _) {
      a = "WAITING";
      r = 0;
    }
    o = 0;
  } else {
    const t = 14500;
    const n = Math.floor(e / t);
    if (n >= 3) {
      a = "BOTTOM_PAUSE";
      o = 3;
      r = 0;
    } else {
      o = n;
      const l = e % t;
      if (l < 2000) {
        a = "BOTTOM_PAUSE";
        r = 0;
      } else if (l < 12000) {
        a = "RISING";
        const e = (l - 2000) / 10000;
        r = e < 0.5 ? e * 2 * e : 1 - Math.pow(e * -2 + 2, 2) / 2;
      } else if (l < 13000) {
        a = "TOP_PAUSE";
        r = 1;
      } else {
        a = "FALLING";
        const e = (l - 2000 - 10000 - 1000) / 1500;
        let t;
        if (e < 0.8) {
          const r = e / 0.8;
          t = Math.pow(r, 2.5) * 0.8;
        } else {
          const r = (e - 0.8) / 0.2;
          t = 0.8 + (1 - Math.pow(1 - r, 2)) * 0.2;
        }
        r = 1 - t;
      }
    }
  }
  return {
    height: r,
    cycle: o,
    phase: a
  };
};
const handleDropTowerPhaseTransition = (e, t, r) => {
  const o = DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z;
  if (e === "PAUSE_70" && t === "GLITCH_FALL_1") {
    const e = DROP_TOWER_POS.z + o * 0.7 + 3;
    mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, e, 7, 1, true, false, 1);
  }
  if (e === "GLITCH_FALL_1" && t === "GLITCH_RISE_1") {
    const e = DROP_TOWER_POS.z - 2;
    mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, e, 7, 1, true, false, 1);
  }
  if (e === "GLITCH_RISE_1" && t === "GLITCH_FALL_2") {
    const e = DROP_TOWER_POS.z + o * 0.5 + 3;
    mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, e, 7, 1, true, false, 1);
  }
  if (e === "GLITCH_FALL_2" && t === "GLITCH_RISE_2") {
    const e = DROP_TOWER_POS.z + o * 0.2 - 2;
    mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, e, 7, 1, true, false, 1);
  }
  if (e === "GLITCH_RISE_2" && t === "FAST_FALL") {
    const e = DROP_TOWER_POS.z + o + 3;
    mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, e, 7, 1, true, false, 1);
  }
  if (e === "FAST_FALL" && t === "SUPER_RISE") {
    dropTowerState.explosionStartTime = getServerTick();
    dropTowerState.explosionCurrentZ = DROP_TOWER_POS.z - 1;
  }
};
const updateDropTowerPosition = () => {
  if (!dropTowerObject || dropTowerObject.handle === 0) {
    return;
  }
  if (dropTowerState.rideStartTime === 0) {
    if (dropTowerState.currentHeight !== 0) {
      dropTowerState.currentHeight = 0;
      dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, DROP_TOWER_POS.z, false, false, false);
    }
    return;
  }
  const e = getServerTick();
  const t = e - dropTowerState.rideStartTime;
  const r = calculateDropTowerPosition(t, dropTowerState.scenarioType);
  if (dropTowerState.previousPhase !== r.phase) {
    handleDropTowerPhaseTransition(dropTowerState.previousPhase, r.phase, dropTowerState.scenarioType);
    dropTowerState.previousPhase = r.phase;
  }
  dropTowerState.currentHeight = r.height;
  dropTowerState.currentCycle = r.cycle;
  dropTowerState.currentPhase = r.phase;
  if (dropTowerState.scenarioType === 1 && r.phase === "SUPER_RISE") {
    const t = 220;
    const r = 2.1;
    const o = 30;
    const a = e - dropTowerState.explosionStartTime;
    const n = Math.floor(a / t);
    const l = DROP_TOWER_POS.z + n * r;
    if (l > dropTowerState.explosionCurrentZ && l <= o) {
      mp.game.fire.addExplosion(DROP_TOWER_POS.x, DROP_TOWER_POS.y, l, 7, 1, true, false, 0.5);
      dropTowerState.explosionCurrentZ = l;
    }
  }
  if (isLocalSittingDropTower && r.phase !== "WAITING") {
    mp.game.controls.disableControlAction(0, 24, true);
    const e = mp.game.controls.isDisabledControlPressed(0, 24) ? "hands_up_idle_a_player_one" : "idle_a_player_one";
    playRollerAnimation(localplayer, e);
    if (dropTowerState.scenarioType === 0) {
      if (r.phase === "FALLING" && r.height < 0.8 && r.height > 0.2) {
        const e = (0.8 - r.height) / 0.6;
        mp.game.cam.setGameplayCamShakeAmplitude(e * 0.3);
      } else {
        mp.game.cam.setGameplayCamShakeAmplitude(0);
      }
    } else if (r.phase === "PAUSE_70") {
      mp.game.cam.setGameplayCamShakeAmplitude(0.1);
    } else if (r.phase === "GLITCH_FALL_1" || r.phase === "GLITCH_FALL_2") {
      mp.game.cam.setGameplayCamShakeAmplitude(0.5);
      mp.game.graphics.startScreenEffect("SwitchShortNeutralIn", 0, false);
    } else if (r.phase === "GLITCH_RISE_1" || r.phase === "GLITCH_RISE_2") {
      mp.game.cam.setGameplayCamShakeAmplitude(0.6);
      mp.game.graphics.startScreenEffect("SwitchShortNeutralIn", 0, false);
    } else if (r.phase === "FAST_FALL") {
      const e = 0.4;
      mp.game.cam.setGameplayCamShakeAmplitude(e);
      mp.game.graphics.stopScreenEffect("SwitchShortNeutralIn");
    } else if (r.phase === "SUPER_RISE") {
      mp.game.cam.setGameplayCamShakeAmplitude(0.9);
    } else if (r.phase === "SLOW_FALL") {
      const e = (250 - DROP_TOWER_POS.z) / (DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z);
      const t = r.height / e;
      mp.game.cam.setGameplayCamShakeAmplitude(t * 0.6);
    } else {
      mp.game.cam.setGameplayCamShakeAmplitude(0);
      mp.game.graphics.stopScreenEffect("SwitchShortNeutralIn");
    }
  }
  const o = DROP_TOWER_TOP_POS.z - DROP_TOWER_POS.z;
  const a = DROP_TOWER_POS.z + o * r.height;
  dropTowerObject.setCoordsNoOffset(DROP_TOWER_POS.x, DROP_TOWER_POS.y, a, false, false, false);
};
global.at_karting = false;
const KARITNG_CHECKPOINTS = [new mp.Vector3(-1553.966, -976.496, 12), new mp.Vector3(-1536.128, -992.892, 12), new mp.Vector3(-1556.851, -993.991, 12), new mp.Vector3(-1550.75, -1013.483, 12), new mp.Vector3(-1571.12, -1011.062, 12), new mp.Vector3(-1580.364, -1029.992, 12), new mp.Vector3(-1561.553, -1021.64, 12), new mp.Vector3(-1589.407, -1054.118, 12), new mp.Vector3(-1591.24, -1027.754, 12), new mp.Vector3(-1571.377, -996.322, 12)];
const kartingState = {
  status: "WAITING",
  carts: [],
  raceLapToComplete: 2
};
const KARTING_RATING_POS = new mp.Vector3(-1594.616, -1012.646, 14);
let race_check_shape;
let race_check_checkpoint;
let race_check_checkpoint_next;
let race_check_index = 0;
let race_prepare_interval = null;
let race_lap = 0;
function CreateGrandRaceCheck() {
  try {
    if (race_check_shape) {
      race_check_shape.destroy();
    }
    race_check_shape = null;
    if (race_check_checkpoint) {
      race_check_checkpoint.destroy();
    }
    race_check_checkpoint = null;
    if (race_check_checkpoint_next) {
      race_check_checkpoint_next.destroy();
    }
    race_check_checkpoint_next = null;
    const e = KARITNG_CHECKPOINTS[race_check_index];
    const t = KARITNG_CHECKPOINTS[race_check_index + 1] ? KARITNG_CHECKPOINTS[race_check_index + 1] : KARITNG_CHECKPOINTS[0];
    if (race_lap >= kartingState.raceLapToComplete && race_check_index >= KARITNG_CHECKPOINTS.length - 1) {
      race_check_checkpoint = mp.checkpoints.new(4, e, 5, {
        color: [255, 200, 0, 100],
        visible: true,
        dimension: 0
      });
    } else {
      race_check_checkpoint = mp.checkpoints.new(2, e, 4, {
        color: [255, 200, 0, 90],
        visible: true,
        direction: t,
        dimension: 0
      });
      if (t) {
        race_check_checkpoint_next = mp.checkpoints.new(47, t, 4, {
          color: [255, 200, 0, 50],
          visible: true,
          dimension: 0
        });
      }
    }
    race_check_shape = mp.colshapes.newCircle(e.x, e.y, 5, 0);
    race_check_shape.is_karting_race = true;
  } catch (e) {
    mp.console.logInfo(`!{FF0000}Error while creating karting checkpoint: ${e.message}`);
    return;
  }
}
function clearKartingVariables() {
  if (race_check_shape) {
    race_check_shape.destroy();
  }
  race_check_shape = null;
  if (race_check_checkpoint) {
    race_check_checkpoint.destroy();
  }
  race_check_checkpoint = null;
  if (race_check_checkpoint_next) {
    race_check_checkpoint_next.destroy();
  }
  race_check_checkpoint_next = null;
  if (race_prepare_interval != null) {
    clearInterval(race_prepare_interval);
    race_prepare_interval = null;
  }
  localplayer.setCanBeKnockedOffVehicle(0);
  race_lap = 0;
  race_check_index = 0;
  disableVehicleHandle = false;
  at_karting = false;
  main_browser.execute("\n        APPS.state.hud.event_coutdown = 0;\n        APPS.state.hud.show_luna_park_timer = false;\n    ");
}
function onPlayerEnterKart(e) {
  if (!localplayer.vehicle) {
    return;
  }
  at_karting = true;
  vehicle_engine = true;
  TurnOnEngine(localplayer.vehicle);
  localplayer.vehicle.setUndriveable(true);
  localplayer.vehicle.freezePosition(true);
  disableVehicleHandle = true;
  const t = parseInt(e / 1000) + 5;
  const r = [{
    name: "timer",
    title: language["Время до начала"][curr_lang],
    value: t,
    isTimer: true
  }];
  main_browser.execute(`\n        APPS.state.hud.engine = true;\n        APPS.state.hud.show_luna_park_timer_info = ${JSON.stringify(r)};\n        APPS.state.hud.show_luna_park_timer = true;\n    `);
}
function onKartingTimerUpdate(e) {
  if (!at_karting) {
    return;
  }
  const t = parseInt(e / 1000) + 5;
  main_browser.execute(`this.AppComponents.hud.lunaParkTimer.updateFieldValue('timer', ${t});`);
}
mp.events.add("Client_Karting_StartRace", e => {
  disableVehicleHandle = false;
  mp.gui.cursor.show(false, false);
  at_karting = true;
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  const t = [{
    name: "checkpoint",
    title: language.Чекпоинт[curr_lang],
    value: "0 / " + (KARITNG_CHECKPOINTS.length - 1)
  }, {
    name: "timer",
    title: language.Время[curr_lang],
    value: 6,
    isTimer: true
  }, {
    name: "laps",
    title: language.Круги[curr_lang],
    value: `0 / ${kartingState.raceLapToComplete}`
  }];
  main_browser.execute(`this.AppComponents.hud.lunaParkTimer.setFields(${JSON.stringify(t)});`);
  if (localplayer.vehicle) {
    localplayer.vehicle.freezePosition(true);
    const e = localplayer.vehicle.getRotation(2);
    mp.game.cam.setFollowVehicleCamViewMode(1);
    mp.game.cam.setGameplayCamRelativeHeading(0);
    mp.game.cam.setGameplayCamRelativePitch(0, 1);
    mp.game.cam.setGameplayCamRelativeHeading(e.z - localplayer.getHeading());
  }
  let r = 6;
  race_prepare_interval = setInterval(() => {
    if (r > 0) {
      r--;
      main_browser.execute(`APPS.state.hud.event_coutdown = ${parseInt(r)};`);
      if (r > 0) {
        PlayAudioSound("5_Second_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
      } else if (r == 0) {
        PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
        grand_race_check = 1;
        CreateGrandRaceCheck();
        if (race_prepare_interval != null) {
          clearInterval(race_prepare_interval);
          race_prepare_interval = null;
        }
        const e = {
          isTimer: false,
          isTimerUp: true,
          value: 0,
          title: language.Время[curr_lang]
        };
        main_browser.execute(`\n                    APPS.state.hud.event_coutdown = 0;\n                    this.AppComponents.hud.lunaParkTimer.updateField('timer', ${JSON.stringify(e)});\n                `);
        mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
        if (localplayer.vehicle) {
          mp.game.cam.setFollowVehicleCamViewMode(1);
          localplayer.setCanBeKnockedOffVehicle(1);
          localplayer.vehicle.freezePosition(false);
          vehicle_engine = true;
          main_browser.execute("APPS.state.hud.engine = true;");
          TurnOnEngine(localplayer.vehicle);
          localplayer.vehicle.setUndriveable(false);
        }
        mp.gui.cursor.show(false, false);
      }
    }
  }, 1000);
});
mp.events.add("Client_Karting_ClearVariables", clearKartingVariables);
mp.events.add("playerEnterColshape", e => {
  if (mp.colshapes.exists(e) && e.is_karting_race == 1) {
    PlayAudioSound("CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
    if (race_check_index >= KARITNG_CHECKPOINTS.length - 1) {
      race_check_index = 0;
      race_lap++;
      main_browser.execute(`\n                this.AppComponents.hud.lunaParkTimer.updateFieldValue('laps', '${race_lap} / ${kartingState.raceLapToComplete}');\n                this.AppComponents.hud.lunaParkTimer.updateFieldValue('checkpoint', '${race_check_index} / ${KARITNG_CHECKPOINTS.length - 1}');\n            `);
    } else {
      race_check_index++;
      main_browser.execute(`this.AppComponents.hud.lunaParkTimer.updateFieldValue('checkpoint', '${race_check_index} / ${KARITNG_CHECKPOINTS.length - 1}');`);
    }
    if (race_lap > kartingState.raceLapToComplete && race_check_index === 0) {
      clearKartingVariables();
      mp.events.callRemote("Server_Karting_FinishRace");
      return;
    }
    CreateGrandRaceCheck();
  }
});
mp.events.add("Client_Karting_PlayerEnterKart", onPlayerEnterKart);
mp.events.add("Client_Karting_UpdateTimer", onKartingTimerUpdate);
let kartingTop = [{
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}, {
  name: "Empty",
  time: 0
}];
function updateKartingTop(e) {
  e.forEach(([e, t], r) => {
    if (kartingTop[r]) {
      kartingTop[r].name = e;
      kartingTop[r].time = t;
    }
  });
}
function formatTime(e) {
  if (e === 0) {
    return "—:—.---";
  }
  const t = e % 1000;
  return `${Math.floor(e / 60000)}:${Math.floor(e % 60000 / 1000).toString().padStart(2, "0")}.${t.toString().padStart(3, "0")}`;
}
function draw3DText(e, t, r, o) {
  mp.game.graphics.drawText(e, [t, r, o], {
    font: 4,
    color: [255, 255, 255, 255],
    scale: [0.5, 0.5],
    outline: true,
    centre: true
  });
}
function showKartingRatingInRender() {
  if (!kartingTop.length) {
    return;
  }
  const e = mp.players.local;
  if (mp.Vector3.Distance(e.position, KARTING_RATING_POS) > 6) {
    return;
  }
  const t = KARTING_RATING_POS.z;
  const r = 0.18;
  draw3DText("~y~====== KARTING TOP 10 ======", KARTING_RATING_POS.x, KARTING_RATING_POS.y, t + r * (kartingTop.length + 2));
  kartingTop.slice(0, 10).forEach((e, o) => {
    const a = o + 1;
    draw3DText(`${a === 1 ? "~y~" : a === 2 ? "~c~" : a === 3 ? "~o~" : "~w~"}${a}. ${e.name} ~s~— ${formatTime(e.time)}`, KARTING_RATING_POS.x, KARTING_RATING_POS.y, t + r * (kartingTop.length - o));
  });
  draw3DText("~s~========================", KARTING_RATING_POS.x, KARTING_RATING_POS.y, t - r);
}
mp.events.add("Client_Karting_UpdateRating", updateKartingTop);
global.getLunaParkAttractionPos = e => {
  switch (e) {
    case "rollerCoaster":
      return ROLLER_ENTRY_POS;
    case "ferrisWheel":
      return FERRIS_ENTRY_POS;
    case "dropTower":
      return DROP_TOWER_JOIN;
    case "karting":
      return KARITNG_CHECKPOINTS[KARITNG_CHECKPOINTS.length - 1];
    case "shootingRange":
      return new mp.Vector3(-1725.726, -1124.002, 12.054);
    case "pacman":
      return new mp.Vector3(-1613.16, -1043.24, 12.1775);
    case "popcorn":
      return popcornInfo.aparatPos[0];
    case "sweets":
      return cottonCandyInfo.aparatPos[0];
    case "toys":
      return new mp.Vector3(-1676.99, -1134.539, 12.043);
    default:
      return null;
  }
};
global.lunaParkEating = false;
const popcornInfo = {
  aparatPos: [new mp.Vector3(-1682.28, -1133.65, 12.0815), new mp.Vector3(-1636.78, -1114.77, 12.0156), new mp.Vector3(-1648.81, -1087.85, 12.1295), new mp.Vector3(-1630.1, -1064.68, 12.1274)],
  aparatRot: [new mp.Vector3(0, 0, -115), new mp.Vector3(0, 0, 136), new mp.Vector3(0, 0, 141), new mp.Vector3(0, 0, 318)],
  aparatModel: ["bzzz_prop_popcorn_pack_c"],
  npcPos: [new mp.Vector3(-1683.166, -1133.292, 13.1), new mp.Vector3(-1636.11, -1114.052, 13.025), new mp.Vector3(-1648.243, -1087.115, 13.14), new mp.Vector3(-1630.835, -1065.294, 13.139)],
  npcRot: [new mp.Vector3(0, 0, 5.793), new mp.Vector3(0, 0, 27.479), new mp.Vector3(0, 0, -94.079), new mp.Vector3(0, 0, -161.127)],
  npcModels: ["a_m_m_beach_01", "a_m_y_stwhi_01", "a_m_y_beachvesp_02", "u_m_o_dean"],
  npcNames: ["Ryan Mitchell", "Noah Carter", "Jacob Anderson", "Lucas Bennett"]
};
let inPopcornColshape = false;
const popcornProp = "bzzz_prop_popcorn_pack_c";
let popcornObjects = [];
function createPopcorn() {
  for (let e = 0; e < popcornInfo.aparatPos.length; e++) {
    const t = popcornInfo.aparatPos[e];
    const r = mp.objects.new(mp.game.joaat(popcornProp), t, {
      rotation: popcornInfo.aparatRot[e],
      dimension: 0
    });
    popcornObjects.push(r);
    const o = mp.colshapes.newSphere(t.x, t.y, t.z, 2.5);
    o.is_popcorn = true;
    o.popcornObject = r;
  }
}
function destroyPopcorn() {
  popcornObjects.forEach(e => {
    if (mp.objects.exists(e)) {
      e.destroy();
    }
  });
  popcornObjects.length = 0;
}
function tryGrabPopcorn() {
  if (inPopcornColshape && !lunaParkEating && testAntiFlood("grab_popcorn", 500)) {
    mp.events.callRemote("Server_Popcorn_TryGrab");
  }
}
function getClosestPopcorn() {
  if (lunaParkEating) {
    return;
  }
  const e = localplayer.position;
  let t = null;
  let r = Infinity;
  for (let o = 0; o < popcornInfo.aparatPos.length; o++) {
    const a = popcornInfo.aparatPos[o];
    const n = mp.Vector3.Distance(e, a);
    if (n < r) {
      r = n;
      t = a;
    }
  }
  return t || null;
}
mp.events.add("Client_LunaParkStartAction", e => {
  lunaParkEating = e;
});
global.lunaParkStopEating = () => {
  if (lunaParkEating && testAntiFlood("stop_eating", 1000)) {
    lunaParkEating = false;
    HintClose();
    mp.events.callRemote("Server_LunaParkStopEating");
  }
};
const cottonCandyObjects = [];
const cottonCandyInfo = {
  aparatPos: [new mp.Vector3(-1620.92, -1076.2, 11.9908), new mp.Vector3(-1664.2, -1105.83, 12.136), new mp.Vector3(-1636.16, -1105.45, 12.014), new mp.Vector3(-1671.95, -1134.03, 12.0078)],
  aparatRot: [new mp.Vector3(0, 0, -36), new mp.Vector3(0, 0, 137), new mp.Vector3(0, 0, 8), new mp.Vector3(0, 0, -78)],
  aparatModels: ["bzzz_candy_cotton_machine_anim_blue", "bzzz_candy_cotton_machine_anim_pink", "bzzz_candy_cotton_machine_anim_red", "bzzz_candy_cotton_machine_anim_yellow"],
  npcPos: [new mp.Vector3(-1620.217, -1076.27, 13.019), new mp.Vector3(-1664.927, -1105.765, 13.139), new mp.Vector3(-1635.684, -1104.928, 13.047), new mp.Vector3(-1671.203, -1134.408, 13.017)],
  npcRot: [new mp.Vector3(0, 0, 48.192), new mp.Vector3(0, 0, -139.664), new mp.Vector3(0, 0, 93.576), new mp.Vector3(0, 0, 18.198)],
  npcModels: ["a_m_m_polynesian_01", "a_m_y_beach_01", "a_m_m_eastsa_01", "u_f_y_taylor"],
  npcNames: ["Ethan Walker", "Oliver Brooks", "Daniel Harris", "Luciana Thompson"]
};
function createCottonCandy() {
  for (let e = 0; e < cottonCandyInfo.aparatPos.length; e++) {
    const t = cottonCandyInfo.aparatPos[e];
    const r = mp.objects.new(mp.game.joaat(cottonCandyInfo.aparatModels[e]), t, {
      rotation: cottonCandyInfo.aparatRot[e],
      dimension: 0
    });
    cottonCandyObjects.push(r);
    const o = mp.colshapes.newSphere(t.x, t.y, t.z, 2.5);
    o.is_cotton_candy = true;
    o.cottonCandyObject = r;
  }
}
function destroyCottonCandy() {
  cottonCandyObjects.forEach(e => {
    if (mp.objects.exists(e)) {
      e.destroy();
    }
  });
  cottonCandyObjects.length = 0;
}
let inCottonCandyColshape = false;
function tryGrabCottonCandy() {
  if (inCottonCandyColshape && !lunaParkEating && testAntiFlood("grab_cotton_candy", 500)) {
    mp.events.callRemote("Server_CottonCandy_TryGrab");
  }
}
let npcSellers = [];
let npcLabels = [];
function loadSellerNPC() {
  for (let e = 0; e < cottonCandyInfo.npcPos.length; e++) {
    const t = mp.game.joaat(cottonCandyInfo.npcModels[e]);
    mp.game.streaming.requestModel(t);
    const r = mp.peds.new(t, cottonCandyInfo.npcPos[e], cottonCandyInfo.npcRot[e].z, 0);
    const o = mp.labels.new(cottonCandyInfo.npcNames[e], new mp.Vector3(cottonCandyInfo.npcPos[e].x, cottonCandyInfo.npcPos[e].y, cottonCandyInfo.npcPos[e].z + 1), {
      los: true,
      font: 0,
      drawDistance: 6,
      color: [255, 255, 255, 255],
      dimension: 0
    });
    npcSellers.push(r);
    npcLabels.push(o);
  }
  for (let e = 0; e < popcornInfo.npcPos.length; e++) {
    const t = mp.game.joaat(popcornInfo.npcModels[e]);
    mp.game.streaming.requestModel(t);
    const r = mp.peds.new(t, popcornInfo.npcPos[e], popcornInfo.npcRot[e].z, 0);
    const o = mp.labels.new(popcornInfo.npcNames[e], new mp.Vector3(popcornInfo.npcPos[e].x, popcornInfo.npcPos[e].y, popcornInfo.npcPos[e].z + 1), {
      los: true,
      font: 0,
      drawDistance: 6,
      color: [255, 255, 255, 255],
      dimension: 0
    });
    npcSellers.push(r);
    npcLabels.push(o);
  }
}
function destroySellerNPC() {
  npcSellers.forEach(e => {
    e.destroy();
  });
  npcLabels.forEach(e => {
    if (mp.labels.exists(e)) {
      e.destroy();
    }
  });
  npcSellers.length = 0;
  npcLabels.length = 0;
}
const renderTick = () => {
  updateFerrisWheel();
  updateRollerState();
  updateDropTowerPosition();
  showKartingRatingInRender();
};