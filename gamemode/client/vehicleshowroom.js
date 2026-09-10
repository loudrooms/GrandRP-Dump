global.VehShowRoomDisplayed = false;
global.CarDumpDisplayed = false;
let veh_model;
let veh_type = 0;
let vehicle_color = 1;
let page = 1;
function getShowroomCameraOffset() {
  if (veh_type === 3) {
    return new mp.Vector3(-9.4, 12.1, 4);
  } else {
    return new mp.Vector3(-3.5, 4.5, 1.5);
  }
}
mp.events.add("ShowVehicleShowRoom", (_0x2d8565, _0x31d9a9, _0x526cfa) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  VehShowRoomDisplayed = true;
  vehicle_color = 1;
  veh_type = _0x31d9a9;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(vehicle_poses[veh_type][0], vehicle_poses[veh_type][1], vehicle_poses[veh_type][2] + 1), new mp.Vector3(vehicle_poses[veh_type][0], vehicle_poses[veh_type][1], vehicle_poses[veh_type][2]), getShowroomCameraOffset(), vehicle_poses[veh_type][5], [0, 0], [-0.8, 1.8], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
  const _0x16aa7b = "{type:" + _0x2d8565 + ",\"vehicles\":[],\"currentlist\":0,\"color\":1,\"in_autosalon_buy\":false,\"vip\":" + _0x526cfa + ",\"show\":true}";
  main_browser.execute("APPS.state.autosaloon = " + _0x16aa7b);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_SetPage", _0xce16be => {
  page = _0xce16be;
});
global.CloseVehicleShow = function (_0x4104a0 = "") {
  if (VehShowRoomDisplayed != 0) {
    if (_0x4104a0 != "esc" || page == 1) {
      main_browser.execute("APPS.state.autosaloon.show = false;");
      VehShowRoomDisplayed = false;
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      InteractiveCamera.stop();
      if (localcamera != null) {
        localcamera.destroy();
        localcamera = null;
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
      if (temp_vehicle && mp.vehicles.exists(temp_vehicle)) {
        temp_vehicle.destroy();
        temp_vehicle = null;
      }
      mp.game.cam.renderScriptCams(false, true, 2000, true, false);
      mp.events.callRemote("Server_CloseVehicleShow");
    } else {
      main_browser.execute("this.AppComponents.autosaloon.backToList();");
    }
  }
};
let temp_vehicle = null;
let veh_list = 0;
let rotation_speed = -0.08;
let vehicle_rotation = 105;
let is_rotation = true;
mp.events.add("render", () => {
  if (temp_vehicle && mp.vehicles.exists(temp_vehicle) && is_rotation) {
    vehicle_rotation += rotation_speed;
    if (vehicle_rotation <= -360) {
      vehicle_rotation = 0;
    }
    temp_vehicle.setHeading(vehicle_rotation);
  }
});
mp.events.add("Client_CreateAutosaloonVehicle", (_0xb8d2ae, _0xb1636d, _0x23938d, _0x143231 = true) => {
  if (VehShowRoomDisplayed == 0) {
    return;
  }
  if (temp_vehicle && mp.vehicles.exists(temp_vehicle)) {
    temp_vehicle.destroy();
    temp_vehicle = null;
  }
  vehicle_rotation = 105;
  is_rotation = _0x143231;
  if (!vehicle_poses[veh_type]) {
    return;
  }
  temp_vehicle = mp.vehicles.new(mp.game.joaat(_0xb8d2ae), new mp.Vector3(vehicle_poses[veh_type][0], vehicle_poses[veh_type][1], vehicle_poses[veh_type][2]), {
    heading: vehicle_poses[veh_type][5],
    dimension: localplayer.dimension
  });
  temp_vehicle.rotation = new mp.Vector3(vehicle_poses[veh_type][3], vehicle_poses[veh_type][4], vehicle_poses[veh_type][5]);
  temp_vehicle.setCustomPrimaryColour(vehicle_colors[_0xb1636d - 1][0], vehicle_colors[_0xb1636d - 1][1], vehicle_colors[_0xb1636d - 1][2]);
  temp_vehicle.freezePosition(true);
  setTimeout(() => {
    if (mp.vehicles.exists(temp_vehicle)) {
      temp_vehicle.setCustomPrimaryColour(vehicle_colors[_0xb1636d - 1][0], vehicle_colors[_0xb1636d - 1][1], vehicle_colors[_0xb1636d - 1][2]);
    }
  }, 100);
  let _0x3e8963 = 0;
  const _0x21cc01 = setInterval(() => {
    if (mp.vehicles.exists(temp_vehicle)) {
      temp_vehicle.freezePosition(true);
      temp_vehicle.setEngineOn(true, true, false);
      temp_vehicle.setLights(3);
      _0x3e8963++;
      if (_0x3e8963 >= 10) {
        clearInterval(_0x21cc01);
      }
    } else {
      clearInterval(_0x21cc01);
    }
  }, 100);
  temp_vehicle.setCustomSecondaryColour(255, 255, 255);
  veh_list = _0x23938d;
});
mp.events.add("Client_SoundSelect", () => {
  mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FREEMODE_SOUNDSET", true);
});
mp.events.add("CloseAutoSalon", _0x5c7faf => {
  CloseVehicleShow(_0x5c7faf);
});
mp.events.add("Client_GetBackToSalonDesign", _0x59dcb7 => {
  veh_type = _0x59dcb7;
  main_browser.execute("APPS.state.autosaloon.show = true;");
  main_browser.execute("APPS.state.autosaloon.in_autosalon_buy = false;");
  VehShowRoomDisplayed = true;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(vehicle_poses[veh_type][0], vehicle_poses[veh_type][1], vehicle_poses[veh_type][2]), new mp.Vector3(vehicle_poses[veh_type][0], vehicle_poses[veh_type][1], vehicle_poses[veh_type][2]), getShowroomCameraOffset(), vehicle_poses[veh_type][5], [0, 0], [-0.8, 1.8], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.at_drive_mode = false;
let loaded_drive_keys = false;
let gov_price = 0;
mp.events.add("CloseAutoSalon_Drive", _0x4a464a => {
  if (VehShowRoomDisplayed != 0) {
    if (temp_vehicle && mp.vehicles.exists(temp_vehicle)) {
      temp_vehicle.destroy();
      temp_vehicle = null;
    }
    main_browser.execute("APPS.state.autosaloon.show = false;");
    VehShowRoomDisplayed = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    InteractiveCamera.stop();
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    HintShow(language["F2 - просмотр винилов, F3 - просмотр тюнинга"][curr_lang]);
    gov_price = _0x4a464a;
    at_drive_mode = true;
    if (!loaded_drive_keys) {
      loaded_drive_keys = true;
      mp.keys.bind(113, false, function () {
        if (!!at_drive_mode && !!localplayer.vehicle && !inVinil && !InSTO && !!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 1000)) {
          VinilFunc(gov_price, 2);
        }
      });
      mp.keys.bind(114, false, function () {
        if (!at_drive_mode || !localplayer.vehicle || InSTO || inVinil || !loggedin || chatActive || new Date().getTime() - lastCheck < 1000) {
          return;
        }
        const _0x37cf39 = [localplayer.vehicle.getColor(0).r, localplayer.vehicle.getColor(0).g, localplayer.vehicle.getColor(0).b];
        const _0x79dfd8 = [localplayer.vehicle.getColor(1).r, localplayer.vehicle.getColor(1).g, localplayer.vehicle.getColor(1).b];
        STOFunc(500, {
          "0": -1,
          "1": -1,
          "2": -1,
          "3": -1,
          "4": -1,
          "5": -1,
          "6": -1,
          "7": -1,
          "8": -1,
          "9": -1,
          "10": -1,
          "23": -1,
          "14": -1,
          "22": -1,
          "24": 0,
          "18": -1,
          "46": -1,
          "62": -1,
          "90": 0,
          "91": -1,
          "92": 0
        }, _0x37cf39, _0x79dfd8, gov_price, 0, [false, 0, 0, 0]);
      });
    }
    setTimeout(() => {
      if (!mp.players.local.vehicle) {
        mp.events.callRemote("Server_Autosalon_TestDriveEnterFailed");
      }
    }, 1500);
  }
});
mp.events.add("Client_CloseTestDriveMode", () => {
  HintClose();
  at_drive_mode = false;
  main_browser.execute("APPS.state.hud.in_veh = false;");
  main_browser.execute("APPS.state.hud.engine = false;");
});
mp.events.add("Salon_Error", _0x19ef32 => {
  if (VehShowRoomDisplayed) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x19ef32 + "');");
  }
});
mp.events.add("Client_ChangeVehicleColor", _0x4ddd79 => {
  if (!(new Date().getTime() - lastCheck < 500) && (lastCheck = new Date().getTime(), vehicle_color = _0x4ddd79, temp_vehicle && mp.vehicles.exists(temp_vehicle))) {
    const [_0xf9d9b2, _0xf4e523, _0x3ed911] = vehicle_colors[_0x4ddd79 - 1];
    setTimeout(() => {
      temp_vehicle.setCustomPrimaryColour(_0xf9d9b2, _0xf4e523, _0x3ed911);
    }, 100);
  }
});
mp.events.add("Client_AutosalonRestoreBuy", () => {
  if (VehShowRoomDisplayed) {
    main_browser.execute("APPS.state.autosaloon.in_autosalon_buy = false;");
  }
});
mp.events.add("Client_BuyVehicle", (_0x4f7015, _0x357248, _0x57da4d) => {
  if (!VehShowRoomDisplayed) {
    return;
  }
  if (new Date().getTime() - lastCheck < 500) {
    return;
  }
  lastCheck = new Date().getTime();
  main_browser.execute("APPS.state.autosaloon.in_autosalon_buy = true;");
  let _0x3649d7 = 0;
  if (mp.game.vehicle.isThisModelABoat(mp.game.joaat(_0x357248))) {
    _0x3649d7 = 1;
  } else if (mp.game.vehicle.isThisModelAHeli(mp.game.joaat(_0x357248)) || mp.game.vehicle.isThisModelAPlane(mp.game.joaat(_0x357248))) {
    _0x3649d7 = 2;
  }
  mp.events.callRemote("ServerBuyCar", _0x4f7015, _0x357248, _0x3649d7, veh_type, _0x57da4d);
});
mp.events.add("Client_TestDriveVehicle", () => {
  if (VehShowRoomDisplayed) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      main_browser.execute("APPS.state.autosaloon.in_autosalon_buy = true;");
      mp.events.callRemote("Server_TestDriveVehicle", veh_list, vehicle_color);
    }
  }
});
mp.events.add("Client_UpdateAutosaloon", _0x466d7a => {
  if (VehShowRoomDisplayed) {
    main_browser.execute("APPS.state.autosaloon.vehicles = " + JSON.stringify(_0x466d7a));
  }
});
const vehicle_poses = [[-43.743, -1097.913, 26.069, 0.046, 0.016, 102.949], [-58.667, 72.03, 71.133, 0.04, 0.006, 94.819], [-777.421, 5589.355, 32.875, -1.307, 2.699, 211.698], [3960.662, 4508.327, 0.691, 0.249, 0.472, 210.335], [1141.155, 71.097, 80.402, -0.004, 0.022, 103.058], [1027.732, -781.803, 57.59, -1.305, 1.551, 257.231], [1258.149, -2566.533, 42.364, 0.1, -0.057, 336.904], [1735.734, 3258.63, 41.89, 0.713, 0.897, 105.589]];
const vehicle_colors = [[255, 255, 255], [0, 0, 0], [128, 128, 128], [251, 207, 48], [114, 181, 17], [230, 56, 56], [71, 118, 200], [228, 54, 248], [51, 207, 175], [23, 225, 255], [254, 138, 1], [46, 63, 250]];
mp.events.add("Client_GotoContainersFromShowroom", _0x32c724 => {
  if (VehShowRoomDisplayed) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseVehicleShow();
      mp.events.callRemote("Server_GotoContainersFromShowroom", _0x32c724);
    }
  }
});
const car_dump_camera_pos = [1260.766, -2564.893, 42.076, -0.5, -0.015, -39.27];
mp.events.add("Client_OpenCarDump", (_0x33464d, _0x3f0a1b, _0x9dbd1, _0x4b559d) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  CarDumpDisplayed = true;
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(car_dump_camera_pos[0], car_dump_camera_pos[1], car_dump_camera_pos[2]), new mp.Vector3(car_dump_camera_pos[0], car_dump_camera_pos[1], car_dump_camera_pos[2]), new mp.Vector3(-3.5, 4.5, 1.5), car_dump_camera_pos[5], [0, 0], [-0.8, 1.8], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
  const _0x4f978e = "{\n\t\t\"vehModel\": \"" + _0x33464d + "\", \n\t\t\"scrap\": " + _0x3f0a1b + ", \n\t\t\"vehMinScrap\": " + _0x4b559d + ", \n\t\t\"vehMaxScrap\": " + _0x9dbd1 + ", \n\t\t\"show\": true\n\t}";
  main_browser.execute("APPS.state.car_dump = " + _0x4f978e);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("CloseCarDump", () => {
  CloseCarDump();
});
global.CloseCarDump = function () {
  if (CarDumpDisplayed != 0) {
    CarDumpDisplayed = false;
    main_browser.execute("APPS.state.car_dump.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    InteractiveCamera.stop();
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    mp.events.callRemote("Server_CloseCarDump");
  }
};
mp.events.add("Client_RecycleCarToScrap", () => {
  if (CarDumpDisplayed != 0) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RecycleCarToScrap");
    }
  }
});
mp.events.add("Client_ZoomVehicleCamera", _0x18e0fc => {
  if (!VehShowRoomDisplayed || !localcamera) {
    return;
  }
  const _0x129439 = _0x18e0fc * 0.3;
  InteractiveCamera.zoom(_0x129439);
});
mp.events.add("Client_RouteToCasino", () => {
  if (VehShowRoomDisplayed) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseVehicleShow();
      SetGPSLocation(926.5615844726562, 44.98503494262695, 80.8998794555664, true);
    }
  }
});
mp.events.add("Client_OpenLotteryFromAutosalon", _0x3b191d => {
  if (VehShowRoomDisplayed) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseVehicleShow();
      mp.events.callRemote("Server_OpenLotteryFromAutosalon", _0x3b191d);
    }
  }
});
mp.events.add("Client_OpenDonateMenuFromAutosalon", _0x2d622c => {
  if (VehShowRoomDisplayed) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseVehicleShow();
      global.DonateTargetVehicleModel = _0x2d622c;
      mp.events.callRemote("Server_OpenDonateMenuFromAutosalon");
    }
  }
});