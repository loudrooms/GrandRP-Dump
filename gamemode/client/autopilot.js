global.white_list_vehicles = [2445973230, 1392481335, 544021352, 2400073108, 662793086, 2765724541, 2672523198, 1031562256, 3164157193, 1682114128, 3162245632, 1718441594, 4030349061, 156252959, 3277054437, 1281801152, 3718223449, 1295777722, 785279058, 1125354406, 3834912103, 2509242531, 6638473, 1071614438, 2538088807, 3181405218, 2282120281, 2374568901, 3216434128, 2791424987, 3956095863, 870785476, 170327252, 2786594425, 2941498207, 2645753073, 634480115, 2015997365, 3598017069, 2701081517, 2919686171, 543655673, 224836818, 3168068315, 2533417840, 638903516, 3236759370, 868712127, 3952281719, 595330236, 2577216202, 1692683723, 438354195, 1998694245, 2697119981, 3287534666, 2036217548, 1304748901, 687627128, 3800636273, 3509065149, 4061894574, 3755650298, 3160542563, 2487033278, 704523944, 2241667508];
global.autopilotStart = false;
let autopilotPoint = null;
let autopilotInterval = null;
const autoPilotSpeed = 35;
function getWaypointCoord() {
  if (!mp.game.hud.isWaypointActive()) {
    return null;
  }
  const _0x3cf84c = mp.game.hud.getFirstBlipInfoId(mp.game.hud.getWaypointBlipEnumId());
  if (!mp.game.hud.doesBlipExist(_0x3cf84c)) {
    return null;
  }
  const _0x1f9a7d = mp.game.hud.getBlipInfoIdCoord(_0x3cf84c);
  if (typeof _0x1f9a7d?.x != "number") {
    return null;
  } else {
    return _0x1f9a7d;
  }
}
global.StartAutoPilot = function () {
  if (GlobalCheck() != 1 && localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) === localplayer.handle) {
    if (localplayer.vehicle.getEngineHealth() <= 400) {
      return mp.game.ui.notifications.show(language["Ваш транспорт сломан"][curr_lang], false, 0, 6);
    }
    if (cruize_state) {
      return mp.game.ui.notifications.show(language["У Вас включен круиз контроль"][curr_lang], false, 0, 6);
    }
    if (autopilotStart && localplayer.vehicle) {
      localplayer.clearTasks();
      localplayer.taskVehicleTempAction(localplayer.vehicle.handle, 27, 10000);
      autopilotPoint = null;
      autopilotStart = false;
      if (autopilotInterval != null) {
        clearInterval(autopilotInterval);
      }
      autopilotInterval = null;
      mp.game.ui.notifications.show(language["Вы отключили автопилот"][curr_lang], false, 0, 6);
      main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
      return;
    }
    if (white_list_vehicles.indexOf(localplayer.vehicle.model) == -1 || localplayer.vehicle.model == 2282120281) {
      return mp.game.ui.notifications.show(language["На Вашем транспорте нет автопилота"][curr_lang], false, 0, 6);
    }
    if (localplayer.vehicle.getIsEngineRunning() == 0) {
      return mp.game.ui.notifications.show(language["У Вас выключен двигатель"][curr_lang], false, 0, 6);
    }
    autopilotPoint = getWaypointCoord();
    if (autopilotPoint == null) {
      return mp.game.ui.notifications.show(language["У Вас не указана точка маршрута на карте"][curr_lang], false, 0, 6);
    }
    if (!autopilotStart) {
      main_browser.execute("APPS.state.hud.autopilot_enabled = true;");
      mp.game.ui.notifications.show(language["Автопилот начал движение"][curr_lang], false, 0, 2);
      localplayer.taskVehicleDriveToCoord(localplayer.vehicle.handle, autopilotPoint.x, autopilotPoint.y, autopilotPoint.z, 35, 1, 1, 2883621, 30, 1);
      autopilotStart = true;
      if (autopilotInterval != null) {
        clearInterval(autopilotInterval);
        autopilotInterval = null;
      }
      autopilotInterval = setInterval(() => {
        if (!autopilotStart && autopilotInterval != null) {
          if (localplayer.vehicle) {
            localplayer.clearTasks();
            localplayer.taskVehicleTempAction(localplayer.vehicle.handle, 27, 10000);
          }
          if (autopilotInterval != null) {
            clearInterval(autopilotInterval);
          }
          autopilotInterval = null;
          main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
          return;
        }
        if (localplayer.vehicle) {
          if (localplayer.vehicle.getEngineHealth() <= 400 || localplayer.vehicle.getIsEngineRunning() == 0 || vehicle_engine == 0) {
            localplayer.clearTasks();
            localplayer.taskVehicleTempAction(localplayer.vehicle.handle, 27, 10000);
            autopilotPoint = null;
            autopilotStart = false;
            if (localplayer.vehicle) {
              localplayer.vehicle.setEngineOn(false, false, true);
              localplayer.vehicle.setUndriveable(true);
              main_browser.execute("APPS.state.hud.engine = false;");
            }
            if (autopilotInterval != null) {
              clearInterval(autopilotInterval);
            }
            autopilotInterval = null;
            if (localplayer.vehicle.getIsEngineRunning() == 0 || vehicle_engine == 0) {
              mp.game.ui.notifications.show(language["У Вас выключен двигатель"][curr_lang], false, 0, 6);
            } else {
              mp.game.ui.notifications.show(language["Ваш транспорт сломан"][curr_lang], false, 0, 6);
            }
            main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
            return;
          }
          if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, autopilotPoint.x, autopilotPoint.y, autopilotPoint.z) < 20) {
            localplayer.clearTasks();
            localplayer.taskVehicleTempAction(localplayer.vehicle.handle, 27, 10000);
            autopilotPoint = null;
            autopilotStart = false;
            if (localplayer.vehicle) {
              localplayer.vehicle.setEngineOn(false, false, true);
              localplayer.vehicle.setUndriveable(true);
              main_browser.execute("APPS.state.hud.engine = false;");
            }
            if (autopilotInterval != null) {
              clearInterval(autopilotInterval);
            }
            autopilotInterval = null;
            mp.game.ui.notifications.show(language["Автопилот довез Вас до указанной точки"][curr_lang], false, 0, 2);
            main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
          }
        } else {
          localplayer.clearTasks();
          autopilotStart = false;
          if (localplayer.vehicle) {
            localplayer.vehicle.setEngineOn(false, false, true);
            localplayer.vehicle.setUndriveable(true);
            main_browser.execute("APPS.state.hud.engine = false;");
          }
          if (autopilotInterval != null) {
            clearInterval(autopilotInterval);
          }
          autopilotInterval = null;
          main_browser.execute("APPS.state.hud.autopilot_enabled = false;");
        }
      }, 300);
    }
  }
};