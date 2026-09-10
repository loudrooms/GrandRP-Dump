const grand_race_camera_positions = [[416.103, 3479.056, 40.498, 437.402, 3483.731, 33.616], [2220.577, 116.526, 237.983, 2186.043, 101.616, 228.494], [216.243, 3192.601, 51.385, 187.66, 3169.04, 41.323], [-428.828, 5904.494, 40.983, -424.66, 5934.422, 31.849], [2675.708, 1737.812, 36.303, 2668.685, 1715.465, 23.488], [2539.488, 1761.42, 28.072, 2539, 1800.314, 22.552]];
let grand_race_checkpoint;
let grand_race_next_checkpoint;
let grand_race_blips;
let grand_race_shape;
let race_prepare_interval;
let pres_start_interval;
let grand_race_check = 1;
let grand_race_map_index = 0;
let grand_race_objects = [];
let grand_race_objects_created = false;
const grand_race_dimension = 8080;
function CreateGrandRaceCheck() {
  if (grand_race_blips) {
    grand_race_blips.destroy();
    grand_race_blips = null;
  }
  if (grand_race_shape) {
    grand_race_shape.destroy();
    grand_race_shape = null;
  }
  if (grand_race_checkpoint) {
    grand_race_checkpoint.destroy();
    grand_race_checkpoint = null;
  }
  if (grand_race_next_checkpoint) {
    grand_race_next_checkpoint.destroy();
    grand_race_next_checkpoint = null;
  }
  if (grand_race_check + 1 > grand_race_poses[grand_race_map_index].length) {
    grand_race_checkpoint = mp.checkpoints.new(4, new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check - 1][0], grand_race_poses[grand_race_map_index][grand_race_check - 1][1], grand_race_poses[grand_race_map_index][grand_race_check - 1][2] - 3), 10, {
      direction: new mp.Vector3(0, 0, 0),
      color: [255, 200, 0, 100],
      visible: true,
      dimension: 8080
    });
  } else {
    grand_race_checkpoint = mp.checkpoints.new(2, new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check - 1][0], grand_race_poses[grand_race_map_index][grand_race_check - 1][1], grand_race_poses[grand_race_map_index][grand_race_check - 1][2] - 3), 10, {
      direction: new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check][0], grand_race_poses[grand_race_map_index][grand_race_check][1], grand_race_poses[grand_race_map_index][grand_race_check][2]),
      color: [255, 200, 0, 90],
      visible: true,
      dimension: 8080
    });
    if (grand_race_check == grand_race_poses[grand_race_map_index].length) {
      grand_race_next_checkpoint = mp.checkpoints.new(4, new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check][0], grand_race_poses[grand_race_map_index][grand_race_check][1], grand_race_poses[grand_race_map_index][grand_race_check][2] - 3), 10, {
        color: [255, 200, 0, 65],
        visible: true,
        dimension: 8080
      });
    } else if (grand_race_poses[grand_race_map_index][grand_race_check]) {
      grand_race_next_checkpoint = mp.checkpoints.new(47, new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check][0], grand_race_poses[grand_race_map_index][grand_race_check][1], grand_race_poses[grand_race_map_index][grand_race_check][2] - 3), 10, {
        color: [255, 200, 0, 50],
        visible: true,
        dimension: 8080
      });
    }
  }
  grand_race_shape = mp.colshapes.newCircle(grand_race_poses[grand_race_map_index][grand_race_check - 1][0], grand_race_poses[grand_race_map_index][grand_race_check - 1][1], 10, 8080);
  grand_race_shape.is_grand_race = true;
  grand_race_blips = mp.blips.new(1, new mp.Vector3(grand_race_poses[grand_race_map_index][grand_race_check - 1][0], grand_race_poses[grand_race_map_index][grand_race_check - 1][1], grand_race_poses[grand_race_map_index][grand_race_check - 1][2]), {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 66,
    dimension: 8080
  });
  grand_race_blips.setRoute(true);
}
global.at_grand_race = false;
global.at_grand_race_wait = false;
mp.events.add("playerEnterColshape", _0x422096 => {
  if (mp.colshapes.exists(_0x422096) && at_grand_race && _0x422096.is_grand_race == 1) {
    grand_race_check++;
    PlayAudioSound("CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
    if (grand_race_check > grand_race_poses[grand_race_map_index].length) {
      mp.events.callRemote("Server_EndGrandRace");
    } else {
      CreateGrandRaceCheck();
      mp.events.callRemote("Server_GetGrandRaceCheck", grand_race_check);
    }
  }
});
mp.events.add("Client_GrandRacePreStart", () => {
  at_grand_race_wait = true;
  if (localplayer.vehicle) {
    localplayer.vehicle.freezePosition(true);
    vehicle_engine = true;
    main_browser.execute("APPS.state.hud.engine = true;");
    TurnOnEngine(localplayer.vehicle);
    localplayer.vehicle.setUndriveable(false);
  }
});
mp.events.add("Client_GrandRaceTimerToStart", (_0x152513, _0x6e24e4) => {
  if (at_grand_race) {
    return;
  }
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  grand_race_map_index = _0x6e24e4;
  localcamera = mp.cameras.new("default", new mp.Vector3(grand_race_camera_positions[grand_race_map_index][0], grand_race_camera_positions[grand_race_map_index][1], grand_race_camera_positions[grand_race_map_index][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(grand_race_camera_positions[grand_race_map_index][3], grand_race_camera_positions[grand_race_map_index][4], grand_race_camera_positions[grand_race_map_index][5]);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
  let _0x4faef0 = _0x152513 + 6;
  pres_start_interval = setInterval(() => {
    if (_0x4faef0 > 0) {
      _0x4faef0--;
      main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x4faef0) + ";");
      if (_0x4faef0 == 0) {
        if (pres_start_interval != null) {
          clearInterval(pres_start_interval);
          pres_start_interval = undefined;
        }
        pres_start_interval = undefined;
        main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      }
    }
  }, 1000);
});
mp.events.add("Client_CancelGrandRaceVariables", () => {
  at_grand_race = false;
  at_grand_race_wait = false;
  grand_race_check = 1;
  grand_race_objects_created = false;
  if (grand_race_blips) {
    grand_race_blips.destroy();
    grand_race_blips = null;
  }
  if (grand_race_shape) {
    grand_race_shape.destroy();
    grand_race_shape = null;
  }
  if (grand_race_checkpoint) {
    grand_race_checkpoint.destroy();
    grand_race_checkpoint = null;
  }
  if (grand_race_next_checkpoint) {
    grand_race_next_checkpoint.destroy();
    grand_race_next_checkpoint = null;
  }
  if (pres_start_interval) {
    clearInterval(pres_start_interval);
    pres_start_interval = undefined;
  }
  if (race_prepare_interval) {
    clearInterval(race_prepare_interval);
    race_prepare_interval = undefined;
  }
  deleteGrandRaceObjects();
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  localplayer.setCanBeKnockedOffVehicle(0);
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  main_browser.execute("APPS.state.hud.race_show = 0;");
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
  main_browser.execute("APPS.state.hud.job_hud_show = false;");
});
mp.events.add("Client_PrepareToGrandRace", _0x1bed15 => {
  grand_race_map_index = _0x1bed15;
  if (!race_prepare_interval) {
    at_grand_race = true;
    createGrandRaceObjects();
    if (typeof pres_start_interval == "number") {
      clearInterval(pres_start_interval);
      pres_start_interval = undefined;
    }
    PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (localplayer.vehicle) {
      localplayer.vehicle.freezePosition(true);
      const _0x54cf50 = localplayer.vehicle.getRotation(2);
      mp.game.cam.setFollowVehicleCamViewMode(1);
      mp.game.cam.setGameplayCamRelativeHeading(0);
      mp.game.cam.setGameplayCamRelativePitch(0, 1);
      mp.game.cam.setGameplayCamRelativeHeading(_0x54cf50.z - localplayer.getHeading());
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    let _0x531b4a = 6;
    race_prepare_interval = setInterval(() => {
      if (_0x531b4a > 0) {
        _0x531b4a--;
        main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x531b4a) + ";");
        if (_0x531b4a > 0) {
          PlayAudioSound("5_Second_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
        } else if (_0x531b4a == 0) {
          PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
          grand_race_check = 1;
          CreateGrandRaceCheck();
          if (race_prepare_interval != null) {
            clearInterval(race_prepare_interval);
            race_prepare_interval = undefined;
          }
          main_browser.execute("APPS.state.hud.event_coutdown = 0;");
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
          main_browser.execute("APPS.state.hud.job_hud_text = \"" + language["Удерживайте G для возврата"][curr_lang] + "\";");
          main_browser.execute("APPS.state.hud.hud_job_count = 0;");
          main_browser.execute("APPS.state.hud.job_hud = 777;");
          main_browser.execute("APPS.state.hud.job_hud_show = true;");
        }
      }
    }, 1000);
  }
});
const grand_race_map_objects = [[], [], [], [], [], [{
  propName: "stt_prop_track_speedup_t2",
  pos: [-455.325, -2293.43, 62.035],
  rot: [0, 0, 90]
}, {
  propName: "stt_prop_race_start_line_01b",
  pos: [1426.1, 3176.17, 39.4141],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_track_speedup_t1",
  pos: [1329.95, 3150.28, 39.2141],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_stunt_track_uturn",
  pos: [1062.89, 3045.6, 40.5106],
  rot: [0, 0, 105]
}, {
  propName: "stt_prop_stunt_track_slope15",
  pos: [1364.17, 3082.39, 4.63416],
  rot: [0, 0, 285]
}, {
  propName: "stt_prop_stunt_track_funnel",
  pos: [1461.77, 3108.53, 16.4341],
  rot: [0, 0, 105]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1297.23, 3149.5, 39.3298],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1283.24, 3123.89, 39.3835],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1261.63, 3129.16, 39.3141],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1237.86, 3142.1, 39.4178],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1218.78, 3112.13, 39.3282],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1195.46, 3123.47, 39.3568],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1181.29, 3101.38, 39.3355],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1157.4, 3114.02, 39.3604],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_track_stop_sign",
  pos: [1162.62, 3094.9, 39.3517],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_stunt_track_turn",
  pos: [1546.69, 3099.57, 57.4279],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_stunt_track_hill2",
  pos: [1597.02, 3029.06, 18.9496],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_stunt_track_turn",
  pos: [1645.89, 2963.83, 57.1001],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_stunt_track_jump",
  pos: [1759.98, 2962.7, 27.6325],
  rot: [0, 0, 285]
}, {
  propName: "stt_prop_stunt_track_funlng",
  pos: [1922.98, 3006.34, 16.2101],
  rot: [0, 0, 285]
}, {
  propName: "stt_prop_stunt_track_slope30",
  pos: [2073.4, 3046.66, 13.8345],
  rot: [0, 0, 105]
}], [{
  propName: "stt_prop_race_gantry_01",
  pos: [1852.3, 2949.25, 44.7759],
  rot: [0, 0, 15]
}, {
  propName: "stt_prop_race_start_line_02b",
  pos: [-6737.37, 890.064, 14.1],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [-6703.36, 850.64, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_tyre_wall_0l17",
  pos: [-6720.25, 862.402, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "prop_wall_light_15a",
  pos: [-6666.11, 840.052, 21.8015],
  rot: [0, 0, 235]
}, {
  propName: "prop_wall_light_15a",
  pos: [-6669.42, 835.409, 21.8015],
  rot: [0, 0, 235]
}, {
  propName: "prop_wall_light_15a",
  pos: [-6662.65, 845.017, 21.8015],
  rot: [0, 0, 235]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-6710.23, 855.783, 14.2556],
  rot: [0, 0, 145]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-6713.23, 857.789, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-6726.99, 867.38, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [-6736.81, 874.037, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-6729.93, 869.455, 14.1556],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_track_straight_bar_l",
  pos: [-6595.18, 790.549, 14],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_track_fork",
  pos: [-6494.71, 720.163, 14],
  rot: [0, 0, 325]
}, {
  propName: "stt_prop_track_chicane_l_02",
  pos: [-6456.1, 666.142, 14],
  rot: [0, 0, 280]
}, {
  propName: "stt_prop_track_chicane_r_02",
  pos: [-6430.75, 702.343, 14],
  rot: [0, 0, 10]
}, {
  propName: "stt_prop_track_bend_5d",
  pos: [-6436.3, 617.083, 14],
  rot: [0, 0, 95]
}, {
  propName: "stt_prop_track_bend_5d",
  pos: [-6376.92, 700.712, 14],
  rot: [0, 0, 10]
}, {
  propName: "stt_prop_stunt_tube_crn",
  pos: [-6314.12, 696.179, 20.2],
  rot: [0, 0, 105]
}, {
  propName: "stt_prop_stunt_tube_crn",
  pos: [-6410.83, 559.142, 20.2],
  rot: [0, 0, 275]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [1827.91, 2950.36, 44.8367],
  rot: [0, 0, 20]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1818.78, 2947.26, 44.8019],
  rot: [0, 0, 200]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1824.47, 2932.03, 44.6383],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_tyre_wall_011",
  pos: [1809.65, 2943.4, 44.6809],
  rot: [0, 0, 20]
}, {
  propName: "stt_prop_tyre_wall_011",
  pos: [1815.38, 2928.77, 44.5444],
  rot: [0, 0, 200]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [1834.29, 2935.34, 44.5288],
  rot: [0, 0, 200]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1806.22, 2925.81, 44.7136],
  rot: [0, 0, 200]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1800.66, 2940.43, 44.7863],
  rot: [0, 0, 200]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1837.81, 2954.06, 44.8062],
  rot: [0, 0, 195]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [1843.68, 2938.72, 44.7056],
  rot: [0, 0, 195]
}, {
  propName: "prop_bush_lrg_04b",
  pos: [1914.3, 2937.03, 44.7069],
  rot: [0, 0, 90]
}, {
  propName: "prop_tree_eng_oak_cr2",
  pos: [2184.89, 2998.67, 44.7337],
  rot: [0, 0, 90]
}, {
  propName: "prop_bush_lrg_03",
  pos: [2072.36, 3020.41, 44.3659],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_3_i",
  pos: [2087.73, 3017.84, 44.2393],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_3_j",
  pos: [2085.63, 3016.59, 44.2218],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_3_j",
  pos: [2087.61, 3019.81, 44.2804],
  rot: [0, 0, 90]
}, {
  propName: "prop_bush_lrg_01c",
  pos: [1982.83, 3002.09, 45.4288],
  rot: [0, 0, 90]
}, {
  propName: "prop_bush_lrg_01c",
  pos: [1959.74, 3003.82, 45.0626],
  rot: [0, 0, 90]
}, {
  propName: "prop_bush_lrg_04c",
  pos: [2152.35, 2989.09, 45.3484],
  rot: [0, 0, 90]
}, {
  propName: "prop_rio_del_01",
  pos: [2528.09, 2693.51, 41.4196],
  rot: [0, 0, 90]
}, {
  propName: "prop_plant_group_05b",
  pos: [2182.11, 3000.17, 44.6235],
  rot: [0, 0, 90]
}, {
  propName: "prop_plant_group_05b",
  pos: [2185.02, 2995.53, 44.9995],
  rot: [0, 0, 90]
}, {
  propName: "prop_plant_group_05b",
  pos: [2187.76, 2999.81, 44.6226],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_3_a",
  pos: [2154.24, 2998.79, 44.3545],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_1_h",
  pos: [2157.36, 2999.07, 44.3702],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_1_h",
  pos: [2155.74, 3000.55, 44.2072],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_4_c_2",
  pos: [2184.72, 3000.31, 44.5444],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_4_c_2",
  pos: [2186.65, 2997.14, 44.8425],
  rot: [0, 0, 90]
}, {
  propName: "prop_rock_4_c_2",
  pos: [2189.09, 2998.39, 44.7246],
  rot: [0, 0, 90]
}, {
  propName: "prop_palm_sm_01e",
  pos: [2069.96, 3011.27, 44.1583],
  rot: [0, 0, 90]
}, {
  propName: "prop_palm_sm_01a",
  pos: [1971.92, 2996.44, 45.085],
  rot: [0, 0, 90]
}, {
  propName: "stt_prop_tyre_wall_03",
  pos: [2191.24, 3018.34, 44.399],
  rot: [0, 0, 5]
}, {
  propName: "stt_prop_tyre_wall_0l3",
  pos: [2205.57, 3020.03, 44.2691],
  rot: [0, 0, 5]
}, {
  propName: "stt_prop_tyre_wall_0l010",
  pos: [2200.96, 3004.06, 44.4007],
  rot: [0, 0, 180]
}, {
  propName: "stt_prop_tyre_wall_0l013",
  pos: [2213.33, 3003.85, 44.2688],
  rot: [0, 0, 180]
}, {
  propName: "stt_prop_tyre_wall_0r04",
  pos: [2451.86, 2867.53, 48.0093],
  rot: [0, 0, 310]
}, {
  propName: "stt_prop_tyre_wall_0r013",
  pos: [2377.84, 2959.75, 48.206],
  rot: [0, 0, 315]
}, {
  propName: "stt_prop_tyre_wall_0r014",
  pos: [2367.33, 2948.27, 48.1644],
  rot: [0, 0, 135]
}, {
  propName: "stt_prop_tyre_wall_0r018",
  pos: [2439.76, 2856.85, 47.99],
  rot: [0, 0, 125]
}, {
  propName: "stt_prop_tyre_wall_012",
  pos: [2287.82, 3008.57, 45.2682],
  rot: [0, 0, 345]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [2124.2, 2997.61, 44.2406],
  rot: [0, 0, 185]
}, {
  propName: "stt_prop_tyre_wall_09",
  pos: [2109.48, 2995.63, 44.1237],
  rot: [0, 0, 190]
}, {
  propName: "stt_prop_tyre_wall_0l014",
  pos: [2097.1, 2993.8, 44.0864],
  rot: [0, 0, 190]
}, {
  propName: "stt_prop_tyre_wall_0l05",
  pos: [2036.06, 2999.23, 44.1793],
  rot: [0, 0, 5]
}, {
  propName: "stt_prop_tyre_wall_0l06",
  pos: [2024.51, 2997.86, 44.2162],
  rot: [0, 0, 10]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [1388.13, 2685.99, 36.4874],
  rot: [0, 0, 195]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [1395.08, 2688.19, 36.4697],
  rot: [0, 0, 200]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [1402.37, 2690.71, 36.4629],
  rot: [0, 0, 200]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [1409.28, 2693.19, 36.449],
  rot: [0, 0, 200]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [1416.27, 2695.63, 36.4312],
  rot: [0, 0, 20]
}, {
  propName: "prop_streetlight_01b",
  pos: [2093.96, 3008.5, 43.9965],
  rot: [0, 0, 10]
}, {
  propName: "prop_streetlight_01b",
  pos: [2174.6, 3017.11, 44.4063],
  rot: [0, 0, 0]
}, {
  propName: "prop_streetlight_01b",
  pos: [2053.01, 3002.04, 43.9736],
  rot: [0, 0, 10]
}, {
  propName: "prop_streetlight_01b",
  pos: [2134.29, 3013.63, 44.1168],
  rot: [0, 0, 5]
}, {
  propName: "prop_tyre_wall_01b",
  pos: [1421.24, 2697.55, 36.4185],
  rot: [0, 0, 200]
}, {
  propName: "prop_tyre_wall_01b",
  pos: [1424.15, 2698.8, 36.4261],
  rot: [0, 0, 205]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [1381.33, 2684.11, 36.5114],
  rot: [0, 0, 195]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [1374.5, 2682.37, 36.5263],
  rot: [0, 0, 195]
}, {
  propName: "stt_prop_track_speedup",
  pos: [1853.21, 2949.23, 44.6746],
  rot: [0, 0, 105]
}, {
  propName: "stt_prop_tyre_wall_05",
  pos: [1145.95, 2694.09, 37.0943],
  rot: [0, 0, 355]
}, {
  propName: "stt_prop_tyre_wall_0l010",
  pos: [289.531, 2626.59, 43.6651],
  rot: [0, 0, 200]
}, {
  propName: "stt_prop_race_gantry_01",
  pos: [2538.67, 1814.22, 22.0593],
  rot: [0, 0, 90]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2606.5, 2376.83, 20.7118],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2607.58, 2383.89, 20.976],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2608.76, 2390.72, 21.2291],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2611.47, 2411.15, 22.1006],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2612.32, 2418.02, 22.4235],
  rot: [0, 0, 85]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2609.94, 2397.53, 21.4881],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [2610.81, 2404.25, 21.7745],
  rot: [0, 0, 85]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [-51.4067, 2823.43, 53.7788],
  rot: [0, 0, 330]
}, {
  propName: "stt_prop_tyre_wall_02",
  pos: [-60.6307, 2829.32, 53.1355],
  rot: [0, 0, 325]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-399.863, 2863.75, 38.633],
  rot: [0, 0, 75]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-398.378, 2867.26, 38.8554],
  rot: [0, 0, 70]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-397.246, 2870.71, 39.029],
  rot: [0, 0, 80]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-396.816, 2874.36, 39.1422],
  rot: [0, 0, 85]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-405.345, 2857.52, 38.0118],
  rot: [0, 0, 45]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-408.65, 2854.68, 37.7991],
  rot: [0, 0, 40]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-411.589, 2851.85, 37.6086],
  rot: [0, 0, 45]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-414.56, 2848.82, 37.6129],
  rot: [0, 0, 45]
}, {
  propName: "stt_prop_tyre_wall_0l08",
  pos: [-471.519, 2800.38, 38.1486],
  rot: [0, 0, 25]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [2605.75, 2365.37, 20.3749],
  rot: [0, 0, 335]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [2247.4, 3018.14, 44.1377],
  rot: [0, 0, 70]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [1484.15, 2746.25, 36.6519],
  rot: [0, 0, 115]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [181.917, 2626.35, 46.9143],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [185.744, 2624.47, 46.8845],
  rot: [0, 0, 155]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [190.01, 2622.95, 46.8742],
  rot: [0, 0, 155]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-402.169, 2860.51, 38.3515],
  rot: [0, 0, 50]
}, {
  propName: "stt_prop_tyre_wall_011",
  pos: [-308.468, 2900.97, 44.3753],
  rot: [0, 0, 5]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-318.932, 2899.38, 44.3616],
  rot: [0, 0, 15]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-297.543, 2901.5, 44.4724],
  rot: [0, 0, 0]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-573.619, 2721.01, 41.1208],
  rot: [0, 0, 55]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-575.706, 2717.84, 41.297],
  rot: [0, 0, 55]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-577.697, 2714.69, 41.4696],
  rot: [0, 0, 60]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-579.468, 2711.39, 41.6309],
  rot: [0, 0, 60]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-581.084, 2707.98, 41.7876],
  rot: [0, 0, 65]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-582.461, 2704.55, 41.9338],
  rot: [0, 0, 70]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-583.56, 2700.92, 42.0811],
  rot: [0, 0, 75]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-584.512, 2697.39, 42.2275],
  rot: [0, 0, 75]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-585.246, 2693.86, 42.3646],
  rot: [0, 0, 80]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-569.27, 2727, 40.7342],
  rot: [0, 0, 50]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-571.504, 2724.05, 40.9227],
  rot: [0, 0, 55]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-586.002, 2690.32, 42.5028],
  rot: [0, 0, 80]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-573.771, 2682.07, 42.72],
  rot: [0, 0, 85]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-573.429, 2685.76, 42.5467],
  rot: [0, 0, 85]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-573.021, 2689.45, 42.3763],
  rot: [0, 0, 85]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-572.4, 2692.99, 42.2197],
  rot: [0, 0, 80]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-571.498, 2696.47, 42.0472],
  rot: [0, 0, 75]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-570.345, 2699.85, 41.8642],
  rot: [0, 0, 70]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-569.017, 2703.19, 41.6932],
  rot: [0, 0, 70]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-568.69, 2730.33, 40.4643],
  rot: [0, 0, 135]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-547.879, 2591.43, 46.5369],
  rot: [0, 0, 200]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-543.979, 2570.04, 47.8374],
  rot: [0, 0, 100]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-543.166, 2562.89, 48.2571],
  rot: [0, 0, 275]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-543.021, 2555.8, 48.5712],
  rot: [0, 0, 270]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-543.584, 2548.73, 48.843],
  rot: [0, 0, 85]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-544.468, 2541.77, 49.0367],
  rot: [0, 0, 80]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-546.11, 2535.02, 49.2203],
  rot: [0, 0, 75]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-548.179, 2528.29, 49.3718],
  rot: [0, 0, 70]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-550.694, 2521.92, 49.5144],
  rot: [0, 0, 65]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-578.125, 2482.13, 50.9219],
  rot: [0, 0, 40]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-583.664, 2477.84, 51.344],
  rot: [0, 0, 35]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-589.378, 2474.18, 51.826],
  rot: [0, 0, 30]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-573.222, 2486.9, 50.5899],
  rot: [0, 0, 50]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-619.731, 2477.95, 53.7525],
  rot: [0, 0, 105]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-707.403, 2433.81, 60.7168],
  rot: [0, 0, 40]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-704.633, 2436.34, 60.422],
  rot: [0, 0, 40]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-701.718, 2438.7, 60.1132],
  rot: [0, 0, 35]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-709.936, 2431.24, 60.9848],
  rot: [0, 0, 45]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-712.267, 2428.44, 61.3809],
  rot: [0, 0, 55]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-714.206, 2425.24, 61.6454],
  rot: [0, 0, 60]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-698.742, 2440.88, 59.8177],
  rot: [0, 0, 35]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-715.822, 2421.95, 61.8036],
  rot: [0, 0, 65]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-695.721, 2442.88, 59.5416],
  rot: [0, 0, 30]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-723.94, 2391.31, 63.8473],
  rot: [0, 0, 155]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-775.541, 2315.96, 73.4338],
  rot: [0, 0, 120]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-805.397, 2272.98, 79.7772],
  rot: [0, 0, 75]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-805.966, 2268.97, 80.3707],
  rot: [0, 0, 80]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-806.413, 2265.01, 80.9705],
  rot: [0, 0, 85]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-748.94, 2158.44, 100.494],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-750.263, 2154.97, 101.135],
  rot: [0, 0, 250]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-748.046, 2162.02, 99.8603],
  rot: [0, 0, 260]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-812.313, 2108.59, 111.549],
  rot: [0, 0, 130]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-831.575, 2059.37, 117.158],
  rot: [0, 0, 85]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-830.117, 2073.08, 115.819],
  rot: [0, 0, 70]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-831.205, 2066.36, 116.49],
  rot: [0, 0, 85]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-831.332, 2052.3, 117.803],
  rot: [0, 0, 95]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-828.366, 2079.57, 115.137],
  rot: [0, 0, 70]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-826.171, 2085.89, 114.433],
  rot: [0, 0, 65]
}, {
  propName: "prop_tyre_wall_02c",
  pos: [-830.211, 2045.64, 118.41],
  rot: [0, 0, 100]
}, {
  propName: "prop_tyre_wall_02b",
  pos: [-828.234, 2039.07, 119.088],
  rot: [0, 0, 290]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-731.841, 1983.69, 132.374],
  rot: [0, 0, 245]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-680.841, 1922.79, 145.071],
  rot: [0, 0, 265]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-683.527, 1907.74, 147.179],
  rot: [0, 0, 245]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-684.124, 1938.98, 142.588],
  rot: [0, 0, 280]
}, {
  propName: "stt_prop_tyre_wall_015",
  pos: [-806.89, 1829.39, 165.12],
  rot: [0, 0, 40]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-876.806, 1768.7, 175.484],
  rot: [0, 0, 120]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-683.337, 1934.34, 143.47],
  rot: [0, 0, 290]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-682.526, 1930.68, 144.051],
  rot: [0, 0, 285]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-681.919, 1926.66, 144.57],
  rot: [0, 0, 280]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-681.962, 1918.12, 145.814],
  rot: [0, 0, 265]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-682.488, 1914.47, 146.334],
  rot: [0, 0, 260]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-683.48, 1910.94, 146.844],
  rot: [0, 0, 255]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-893.884, 1712.07, 183.375],
  rot: [0, 0, 90]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-893.576, 1708.25, 184.238],
  rot: [0, 0, 105]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-892.64, 1704.66, 185.113],
  rot: [0, 0, 115]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-890.704, 1701.54, 185.846],
  rot: [0, 0, 130]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-893.557, 1715.85, 182.593],
  rot: [0, 0, 85]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-906.07, 1702.26, 184.605],
  rot: [0, 0, 110]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-906.667, 1705.81, 184.264],
  rot: [0, 0, 95]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-907.143, 1709.62, 183.8],
  rot: [0, 0, 90]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-904.948, 1698.48, 185.132],
  rot: [0, 0, 290]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-907.225, 1713.38, 183.281],
  rot: [0, 0, 85]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-906.897, 1717.04, 182.813],
  rot: [0, 0, 80]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-903.119, 1695.12, 185.6],
  rot: [0, 0, 300]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-900.859, 1692, 186.026],
  rot: [0, 0, 305]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-898.309, 1689.2, 186.475],
  rot: [0, 0, 315]
}, {
  propName: "prop_offroad_tyres01_tu",
  pos: [-906.896, 1720.8, 182.267],
  rot: [0, 0, 260]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-795.778, 1673.61, 197.727],
  rot: [0, 0, 245]
}, {
  propName: "stt_prop_tyre_wall_0r06",
  pos: [-779.173, 1663.51, 200.331],
  rot: [0, 0, 320]
}, {
  propName: "stt_prop_tyre_wall_01",
  pos: [-772.367, 1568.65, 215.597],
  rot: [0, 0, 160]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-787.745, 1254.92, 259.573],
  rot: [0, 0, 175]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-714.572, 1142.64, 261.499],
  rot: [0, 0, 220]
}, {
  propName: "stt_prop_tyre_wall_012",
  pos: [-710.282, 989.399, 237.036],
  rot: [0, 0, 290]
}, {
  propName: "stt_prop_tyre_wall_0r010",
  pos: [-1043.52, 781.69, 166.481],
  rot: [0, 0, 180]
}, {
  propName: "stt_prop_tyre_wall_0r2",
  pos: [-746.887, 828.111, 212.902],
  rot: [0, 0, 190]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-699.13, 949.143, 234.933],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-700.073, 945.207, 234.829],
  rot: [0, 0, 250]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-701.12, 941.234, 234.528],
  rot: [0, 0, 250]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-701.901, 936.975, 234.049],
  rot: [0, 0, 260]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-1366.78, 633.013, 133.372],
  rot: [0, 0, 90]
}, {
  propName: "stt_prop_tyre_wall_02",
  pos: [-1356.08, 621.766, 133.478],
  rot: [0, 0, 175]
}, {
  propName: "stt_prop_tyre_wall_01",
  pos: [-1433.73, 578.761, 124.873],
  rot: [0, 0, 165]
}, {
  propName: "stt_prop_tyre_wall_0r012",
  pos: [-1425.79, 548.962, 121.359],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-1442.09, 527.013, 117.718],
  rot: [0, 0, 95]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-1242.3, 468.476, 91.7489],
  rot: [0, 0, 250]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-1244.15, 464.706, 91.9325],
  rot: [0, 0, 245]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-1241.45, 472.381, 91.5373],
  rot: [0, 0, 270]
}, {
  propName: "stt_prop_tyre_wall_0l07",
  pos: [-864.21, 435.018, 86.2073],
  rot: [0, 0, 90]
}, {
  propName: "stt_prop_tyre_wall_0r06",
  pos: [-847.586, 437.7, 86.1671],
  rot: [0, 0, 270]
}, {
  propName: "stt_prop_tyre_wall_0l3",
  pos: [-864.452, 404.128, 86.2275],
  rot: [0, 0, 85]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-853.609, 310.26, 85.1642],
  rot: [0, 0, 175]
}, {
  propName: "stt_prop_tyre_wall_0l2",
  pos: [-798.537, 277.676, 85.0463],
  rot: [0, 0, 185]
}, {
  propName: "stt_prop_tyre_wall_0l17",
  pos: [-650.04, 258.234, 80.4207],
  rot: [0, 0, 150]
}, {
  propName: "stt_prop_tyre_wall_0l019",
  pos: [-676.71, 273.502, 80.3986],
  rot: [0, 0, 160]
}, {
  propName: "stt_prop_tyre_wall_0l018",
  pos: [-663.357, 266.363, 80.4335],
  rot: [0, 0, 145]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-532.796, 263.068, 82.0254],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-536.103, 258.411, 82.0621],
  rot: [0, 0, 235]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-539.276, 254.461, 82.0593],
  rot: [0, 0, 230]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-544.292, 250.744, 82.0508],
  rot: [0, 0, 210]
}, {
  propName: "stt_prop_tyre_wall_0l1",
  pos: [-549.76, 248.401, 81.9589],
  rot: [0, 0, 200]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [-548.364, 435.158, 97.7622],
  rot: [0, 0, 115]
}, {
  propName: "stt_prop_tyre_wall_0r06",
  pos: [-566.221, 513.053, 104.638],
  rot: [0, 0, 70]
}, {
  propName: "stt_prop_tyre_wall_0r011",
  pos: [-501.505, 585.005, 120.934],
  rot: [0, 0, 335]
}, {
  propName: "stt_prop_tyre_wall_0r019",
  pos: [-133.517, 522.078, 140.923],
  rot: [0, 0, 355]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [263.969, 545.094, 140.405],
  rot: [0, 0, 320]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [266.908, 542.312, 140.257],
  rot: [0, 0, 305]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [269.59, 538.686, 139.922],
  rot: [0, 0, 295]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [269.818, 534.264, 139.538],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0l013",
  pos: [243.537, 431.034, 119.3],
  rot: [0, 0, 175]
}, {
  propName: "stt_prop_tyre_wall_011",
  pos: [232.679, 439.113, 119.456],
  rot: [0, 0, 120]
}, {
  propName: "stt_prop_tyre_wall_0r1",
  pos: [410.402, 372.316, 108.458],
  rot: [0, 0, 255]
}, {
  propName: "stt_prop_tyre_wall_0r04",
  pos: [431.665, 292.18, 102.065],
  rot: [0, 0, 250]
}, {
  propName: "stt_prop_tyre_wall_0l2",
  pos: [410.545, 300.685, 102.059],
  rot: [0, 0, 60]
}, {
  propName: "stt_prop_tyre_wall_01",
  pos: [357.29, 159.234, 101.99],
  rot: [0, 0, 155]
}, {
  propName: "stt_prop_tyre_wall_01",
  pos: [275.362, -65.0137, 69.0049],
  rot: [0, 0, 150]
}, {
  propName: "stt_prop_tyre_wall_0l04",
  pos: [223.994, -219.189, 53.0501],
  rot: [0, 0, 100]
}, {
  propName: "stt_prop_tyre_wall_0l06",
  pos: [222.726, -206.637, 52.979],
  rot: [0, 0, 95]
}, {
  propName: "stt_prop_tyre_wall_0l019",
  pos: [231.555, -232.499, 53.0277],
  rot: [0, 0, 140]
}, {
  propName: "stt_prop_tyre_wall_01",
  pos: [324.046, -273.377, 52.9063],
  rot: [0, 0, 240]
}, {
  propName: "stt_prop_tyre_wall_0l3",
  pos: [652.52, -403.187, 41.2383],
  rot: [0, 0, 185]
}, {
  propName: "stt_prop_tyre_wall_0l2",
  pos: [667.589, -401.296, 40.7539],
  rot: [0, 0, 200]
}, {
  propName: "stt_prop_tyre_wall_0r08",
  pos: [968.844, -279.024, 66.0103],
  rot: [0, 0, 330]
}, {
  propName: "stt_prop_tyre_wall_0r08",
  pos: [955.184, -279.853, 65.9892],
  rot: [0, 0, 35]
}, {
  propName: "prop_start_gate_01b",
  pos: [1027.96, -325.974, 66.1956],
  rot: [0, 0, 55]
}]];
function createGrandRaceObjects() {}
function deleteGrandRaceObjects() {
  for (let _0x45078b of grand_race_objects) {
    if (_0x45078b && _0x45078b.doesExist()) {
      _0x45078b.destroy();
    }
  }
  grand_race_objects = [];
  grand_race_objects_created = false;
}
const grand_race_poses = [[[402.583, 3475.644, 34.227, -0.233, -0.133, 103.208], [265.282, 3400.235, 37.529, 0.648, 0.444, 107.296], [139.545, 3415.792, 40.164, 0.621, -0.046, 61.504], [107.585, 3534.931, 39.354, -0.319, -0.459, 0.504], [-15.059, 3603.526, 41.947, 3.781, -0.345, 87.231], [-168.612, 3668.201, 44.723, -4.247, 0.235, 47.3], [-223.042, 3857.099, 38.764, -1.739, 0.34, 10.481], [-260.726, 3932.02, 41.319, 4.216, -0.57, 33.417], [-342.046, 4012.533, 46.945, 1.992, -10.521, 108.087], [-432.749, 3946.887, 67.25, 7.948, 6.545, 58.062], [-552.278, 3958.007, 100.534, 19.243, 1.573, 54.78], [-657.774, 4014.865, 127.652, 9.908, -2.09, 91.452], [-802.513, 4051.427, 159.8, 9.553, 0.436, 92.766], [-929.708, 4138.829, 146.572, -20.243, 2.267, 37.232], [-1042.608, 4253.012, 113.231, -12.095, -7.85, 33.553], [-1148.89, 4285.277, 84.092, -6.766, 13.885, 94.74], [-1288.468, 4268.301, 64.572, -8.532, -5.426, 154.804], [-1352.62, 4127.272, 62.303, 1.943, 5.203, 81.281], [-1475.251, 4227.158, 53.515, 10.785, 2.745, 88.181], [-1672.4, 4237.175, 79.689, -7.338, -1.368, 24.078], [-1853.386, 4410.104, 49.338, -3.586, -1.361, 65.033], [-1982.277, 4497.455, 31.286, -6.114, -3.128, 51.436], [-2178.342, 4514.39, 34.847, -2.003, 0.733, 127.735], [-2257.285, 4329.419, 44.153, 3.956, -0.321, -172.309], [-2307.119, 4184.938, 39.122, -2.964, -0.013, 151.588], [-2493.447, 3614.949, 13.757, 0.521, 0.05, 166.991], [-2572.225, 3360.478, 12.976, 0.199, -0.537, 164.795], [-2605.674, 3020.167, 16.124, 1.004, -0.03, 173.935], [-2638.221, 2788.111, 16.219, -0.265, 0.305, 172.549], [-2697.957, 2408.382, 16.237, -0.23, -0.356, 170.635], [-2669.882, 2282.924, 21.137, 3.967, 1.131, -86.961], [-2451.205, 2289.874, 30.803, 1.561, 0.276, -97.38], [-2256.361, 2275.427, 32.231, -0.501, -0.23, -63.317], [-2127.421, 2307.346, 36.808, 2.066, 0.171, -91.1], [-2060.396, 2279.539, 41.274, 6.04, -0.865, -90.856], [-1836.236, 2302.763, 67.374, 4.652, 0.569, -92.525], [-1708.352, 2245.154, 81.895, 6.169, -1.005, -127.77], [-1686.725, 2133.147, 106.017, 9.613, -0.518, 122.638], [-1835.775, 2033.081, 133.379, 8.812, -0.9, 97.299], [-1908.732, 2052.901, 140.313, -0.365, -0.009, 68.429]], [[2165.138, 63.175, 224.86, -6.84, 0.248, 123.533], [2050.752, -10.285, 210.795, -9.499, -0.576, 100.531], [1981.603, -83.878, 210.156, -8.903, 2.462, 98.178], [1906.093, -93.499, 190.761, 12.264, 0.532, 96.662], [1793.344, -79.156, 189.937, -1.042, -1.901, 90.917], [1676.615, -65.088, 173.379, -1.266, -0.118, 29.056], [1645.329, 26.635, 172.986, -5.084, 2.469, -4.278], [1738.15, 98.642, 170.567, 1.023, 0.35, -43.02], [1830.45, 173.851, 171.27, 2.497, -1.552, 2.637], [1809.966, 327.313, 170.95, 2.14, -0.686, -3.007], [1837.285, 476.516, 171.872, -0.474, -0.463, -95.665], [1927.128, 581.383, 175.125, 0.366, -0.355, -35.433], [1922.148, 726.674, 189.355, 1.241, 0.587, 13.318], [1956.348, 906.194, 214.424, 2.222, -1.387, -32.806], [2027.451, 1115.682, 196.682, -6.52, 0.006, -11.807], [1942.739, 1334.556, 159.873, -12.521, 0.206, 62.653], [1712.173, 1150.39, 126.39, -4.756, 1.301, 165.858], [1629.379, 1000.903, 104.346, -15.691, -1.303, 148.348], [1563.436, 889.247, 77.121, -4.727, 3.254, 142.387], [1442.477, 745.487, 76.963, -1.313, 3.205, 112.812], [1195.481, 520.775, 81.304, 2.311, -1.12, 125.381], [1113.286, 408.085, 91.071, -0.193, -0.09, -134.296], [1062.801, 311.994, 87.947, -6.144, 0.794, 126.09], [861.143, 126.903, 70.906, -2.911, -3.142, 132.392], [679.292, -188.109, 45.658, -4.207, 1.52, 172.615], [624.355, -332.426, 43.055, -0.369, 0.127, 155.764], [579.486, -529.996, 50.853, 5.237, 1.838, 157.848], [380.009, -554.91, 44.221, -0.606, -0.936, 86.393], [257.203, -592.993, 42.704, -1.36, -0.03, 154.908], [142.383, -882.004, 30.083, -0.908, 0.028, 160.307], [42.301, -1044.633, 29.167, -1.597, 0.121, 67.921], [-81.15, -1069.67, 26.742, -2.048, 0.306, 164.095], [-227.084, -1136.841, 22.626, -0.258, 0.005, 91.379], [-507.23, -1079.387, 22.615, -3.042, 0.342, 64.882], [-628.239, -958.287, 21.034, -0.193, -2.803, 91.234], [-813.899, -1033.571, 12.779, -0.766, -0.227, -162.013], [-836.977, -1146.593, 6.633, -3.896, 0.242, 118.015], [-1098.538, -1299.455, 5.019, -1.112, -0.508, 120.222], [-1192.079, -1248.949, 6.611, -1.091, 1.601, 22.637], [-1164.391, -1203.217, 3.448, -6.213, 0.539, -81.557], [-1044.645, -1143.602, 1.665, -0.618, 0.034, -57.425], [-873.329, -1040.542, 5.412, 11.428, -0.299, -58.63], [-856.126, -948.593, 15.459, 1.67, -0.556, 27.918], [-987.634, -780.29, 15.902, -0.949, -0.039, -3.962]], [[136.404, 3151.025, 40.967, -0.88, 0.415, 132.541], [-1.05, 3021.29, 40.256, -1.037, -0.591, 122.674], [-203.03, 2956.986, 29.396, -0.295, 0.602, 103.806], [-346.748, 2955.307, 25.601, -4.13, -1.642, 89.177], [-553.107, 3010.451, 25.875, -2.117, 0.003, 62.012], [-729.867, 2962.291, 24.902, 1.335, -1.603, 133.378], [-904.169, 2864.111, 23.011, -0.25, 0.452, 62.308], [-1087.381, 2874.637, 12.374, 2.077, -2.107, 121.012], [-1257.916, 2754.333, 11.785, -3.61, 0.888, 124.416], [-1471.882, 2684.432, 3.273, -0.456, 0.09, 98.336], [-1608.902, 2720.792, 5.232, -0.096, -0.403, 117.546], [-1732.43, 2749.145, 5.056, -0.825, 1.41, 110.193], [-1865.07, 2690.059, 3.639, -0.908, -2.563, 93.005], [-2019.452, 2707.532, 2.783, -0.093, -0.271, 95.839], [-2184.272, 2757.277, 4.951, -1.213, 0.426, 35.075], [-2320.909, 2840.291, 4.599, -1.827, -1.786, 89.204], [-2487.209, 2839.542, 3.229, -1.111, -0.457, 81.908], [-2636.677, 2918.157, 5.79, 5.565, -2.229, 32.759], [-2765.406, 3085.134, 8.411, -0.705, -0.597, 54.87], [-2973.039, 3270.626, 9.563, -0.377, 0.089, 46.199], [-3010.314, 3396.894, 10.02, -1.385, 0.626, -12.258], [-2834.872, 3518.707, 7.998, 0.489, -0.382, -108.432], [-2701.573, 3478.611, 12.488, 1.86, 0.915, -103.334], [-2550.919, 3568.406, 11.145, 0.018, -1.035, -19.325], [-2502.288, 3665.211, 12.834, 0.06, 0.869, -89.775], [-2417.332, 3626.47, 14.412, 2.684, 0.573, -136.661], [-2360.372, 3430.853, 27.642, 4.254, -0.618, -123.363], [-2288.769, 3446.628, 31.429, 0.486, -0.341, -86.412], [-2220.246, 3473.576, 29.793, -0.242, -0.591, -89.777], [-2134.844, 3455.449, 29.998, 2.577, 2.928, -171.512], [-2040.773, 3432.728, 30.656, -0.127, 1.48, -101.17], [-2038.119, 3382.538, 30.811, 0.259, 0.315, 96.8], [-2160.592, 3385.045, 32.763, -1.448, -1.132, 84.837], [-2264.361, 3418.018, 31.459, -0.511, -0.148, 5.524], [-2368.707, 3439.065, 26.695, -4.937, -0.735, 36.43], [-2439.538, 3651.332, 13.564, -0.318, 3.056, 50.927], [-2464.185, 3726.089, 15.625, 3.086, 0.336, -13.484], [-2363.875, 3987.49, 25.36, 2.679, -1.208, -19.951], [-2302.085, 4242.636, 42.005, -2.47, -4.062, 35.181], [-2292.186, 4286.086, 34.652, -3.116, -3.29, -40.644], [-2348.055, 4247.272, 25.294, -8.633, 2.419, 132.942], [-2436.367, 4271.43, 4.356, -4.759, -10.179, 6.342], [-2322.598, 4420.476, 1.858, -2.308, -2.988, -43.223], [-2175.775, 4581.738, 1.381, 0.121, -5.684, -100.506], [-1936.287, 4583.342, 1.824, -1.536, -6.43, -95.846]], [[-393.46, 5980.232, 31.191, -0.742, -0.236, -42.806], [-239.412, 6137.193, 30.773, -0.362, -0.008, -45.823], [-110.895, 6295.303, 30.989, 0.445, -0.946, 45.726], [-160.041, 6374.858, 31.078, -0.305, -0.496, -43.973], [-126.719, 6433.597, 31.091, -0.3, -1.329, 45.904], [-153.467, 6506.858, 29.151, -0.501, 0.731, -35.309], [43.8, 6639.425, 31.18, -0.471, -1.829, -126.823], [53.379, 6590.872, 30.997, -0.302, -0.048, 135.472], [-19.865, 6515.115, 30.984, -0.177, -0.254, 133.772], [-198.511, 6336.072, 31.06, -0.151, -0.328, 134.906], [-351.391, 6183.373, 30.945, -0.197, -0.289, 135.34], [-407.619, 6034.247, 30.909, -0.112, 1.867, -134.626], [-315.248, 6055.975, 30.723, -0.123, -1.229, -47.461], [-96.975, 6273.92, 30.95, 0.45, -0.286, -44.105], [101.394, 6472.779, 30.889, -0.222, -0.648, -44.753], [116.727, 6565.819, 31.204, -0.301, 0.495, 44.625], [-17.308, 6628.626, 30.463, -2.007, -0.021, 127.997], [-157.886, 6504.9, 29.168, 0.06, 1.778, 141.18], [-141.069, 6449.656, 31.094, -0.301, -0.399, -134.842], [-146.157, 6388.927, 31.066, -0.263, 1.432, 130.823], [-152.315, 6338.592, 31.16, -0.311, -1.644, -132.454], [-133.309, 6245.847, 30.734, -0.203, 0.27, 135.274], [-222.439, 6203.646, 31.067, -0.156, -0.087, 134.492], [-274.51, 6170.826, 31.061, 0.73, -0.081, 146.742], [-264.283, 6134.382, 30.968, -6.492, 0.001, -134.895], [-214.206, 6152.863, 30.802, -0.22, 0.248, -44.311], [-79.386, 6289.281, 30.913, -0.318, -0.471, -53.38], [-11.817, 6311.206, 30.797, -0.262, 0.018, -58.839], [96.72, 6407.763, 30.872, -0.046, -0.096, 23.243], [51.673, 6489.665, 31, -0.266, -0.009, 44.569], [18.352, 6487.708, 30.991, -0.3, 0.007, 135.759], [-47.999, 6446.482, 31.036, -0.009, 2.629, 40.616], [-82.027, 6451.193, 30.987, -0.298, -0.966, 130.409], [-127.912, 6439.829, 31.047, -0.117, 1.98, 49.381], [-189.349, 6456.856, 30.476, 1.22, 1.897, 146.42], [-368.103, 6307.277, 29.337, -0.995, 2.783, 129.169], [-394.058, 6178.96, 31.065, -1.279, -1.406, -136.518], [-450.228, 6073.775, 30.978, -0.194, -0.224, 112.936], [-563.514, 6061.535, 17.365, -12.805, -0.826, 37.812], [-583.393, 6106.872, 7.512, -6.061, 2.163, 62.289], [-632.174, 6062.409, 7.915, 0.107, 0.448, 144.444], [-677.335, 5907.616, 16.027, 0.457, 0.242, 171.833], [-760.708, 5688.02, 21.361, 2.692, -0.461, 160.687], [-783.367, 5550.203, 32.933, 5.791, -1.92, -75.445], [-773.903, 5587.256, 33.063, -0.211, 0.045, -13.952]], [[2666.971, 1677.482, 24.064, -0.042, -0.031, -178.935], [2685.452, 1674.934, 24.206, 0.501, -0.651, -56.148], [2720.556, 1700.486, 24.26, -0.235, 0.197, -89.296], [2819.702, 1680.654, 24.282, -0.168, 0.593, -178.02], [2779.738, 1471.01, 24.078, -0.213, 0.484, 166.412], [2714.478, 1403.314, 24.123, -0.341, 0.435, 87.389], [2689.241, 1460.959, 24.129, -0.185, 0.377, -1.195], [2689.914, 1616.912, 24.125, -0.335, 0.442, -0.446], [2624.586, 1643.06, 26.543, 4.403, 0.382, 90.322], [2541.668, 1713.586, 26.374, -2.388, 0.451, 1.426], [2537.723, 1923.49, 19.934, -0.826, 0.05, 0.725], [2479.086, 2106.598, 32.678, 4.331, 0.634, 2.731], [2432.257, 2289.966, 53.928, 7.763, 3.227, 17.315], [2369.847, 2411.776, 61.521, -1.411, -2.286, 51.473], [2300.81, 2427.53, 65.994, 1.09, -0.148, 165.618], [2327.344, 2327.398, 71.657, -1.833, 0.533, 159.647], [2293.784, 2188.18, 77.505, 0.277, -0.724, 158.643], [2256.132, 2204.561, 79.377, 3.102, 0.053, 13.702], [2216.542, 2405.621, 80.335, 8.841, 0.552, 21.245], [2165.211, 2447.321, 88.477, 0.91, 0.447, 96.572], [2080.978, 2444.224, 85.666, -3.48, 0.319, 135.566], [1992.36, 2346.695, 89.844, 3.185, 0.223, 167.972], [2022.105, 2341.147, 92.716, 4.702, -0.19, -58.083], [2107.723, 2409.795, 99.03, 4.649, -0.089, -84.593], [2162.706, 2377.833, 105.782, 4.893, 1.673, 168.882], [2147.208, 2321.202, 106.351, -10.831, 4.439, -146.623], [2175.375, 2180.726, 116.049, 2.536, 0.419, 147.495], [2175.005, 2120.894, 124.421, -1.553, -1.33, -111.155], [2250.947, 2051.2, 128.31, -4.788, 1.667, -117.948], [2291.678, 1982.937, 131.21, -1.861, 5.142, -148.638], [2256.517, 1863.435, 111.893, -15.615, -6.945, 167.088], [2187.7, 1807.028, 106.692, -0.099, -2.014, 134.786], [2073.646, 1709.301, 102.579, -0.814, -1.106, 152.284], [2109.662, 1652.899, 95.911, -0.411, -1.995, -43.248], [2222.167, 1723.207, 88.534, -1.559, -0.167, -176.263], [2183.988, 1666.823, 85.282, -2.857, -0.754, -176.883], [2183.73, 1475.311, 82.5, -0.558, -3.161, -174.069], [2223.424, 1433.311, 80.18, 0.536, -1.21, -13.643], [2221.927, 1626.864, 75.441, 0.458, -1.172, -0.967], [2242.41, 1669.069, 73.308, -7.73, 0.901, -86.247], [2263.449, 1627.623, 69.153, -3.842, 1.229, -177.803], [2263.614, 1401.324, 75.617, 0.883, 0.199, 176.649], [2280.362, 1335.258, 73.607, -7.396, 1.327, -135.137], [2301.247, 1351.28, 68.918, -3.786, 0.177, -5.256], [2301.767, 1615.115, 57.545, -2.555, 0.091, -3.741], [2306.541, 1665.352, 54.943, -10.347, 4.369, -56.891], [2344.694, 1643.918, 50.077, 1.757, 5.265, 178.296], [2343.137, 1396.982, 58.591, 3.678, -0.024, 179.709], [2360.083, 1281.251, 64.334, -6.165, 1.259, -83.396], [2382.771, 1329.88, 58.307, -5.43, -1.03, -1.304], [2389.655, 1492.956, 39.701, -1.764, -2.34, -51.127], [2479.468, 1514.037, 34.392, -0.654, -2.026, -40.629], [2485.783, 1571.913, 32.298, -0.177, 0.004, -0.776], [2464.807, 1597.988, 32.295, -0.357, 0.009, 24.985]], [[2538.014, 1819.161, 22.139, -2.065, 0.095, 0.892], [2537.832, 1937.463, 19.51, -0.347, -0.058, -3.062], [2540.739, 2068.51, 19.05, -0.37, 0.056, -1.744], [2564.423, 2230.62, 18.507, -0.34, 0.191, -16.318], [2603.923, 2405.671, 22.191, 2.498, -0.122, -7.89], [2582.695, 2600.395, 34.835, 3.588, 0.137, 20.175], [2511.79, 2767.427, 45.352, 2.271, 0.056, 31.809], [2393.012, 2930.362, 48.539, -0.23, 0.611, 36.515], [2232.566, 3011.31, 44.462, 0.015, 0.169, 87.207], [2073.572, 2997.781, 44.35, -0.145, -0.071, 99.412], [1859.993, 2951.43, 45.023, -0.112, -0.067, 107.194], [1688.965, 2873.197, 42.347, -2.956, 0.01, 122.223], [1490.984, 2741.011, 37.095, -0.357, -0.165, 121.785], [1363.592, 2687.212, 36.958, 0.044, 0.03, 98.797], [1142.486, 2684.462, 37.534, 0.485, 0.123, 88.046], [884.528, 2697.317, 40.133, -0.183, -0.109, 89.067], [689.383, 2700.677, 39.794, 0.436, 0.038, 89.7], [436.086, 2673.886, 43.145, 0.628, -0.217, 101.133], [259.72, 2628.287, 44.214, 2.073, 0.182, 95.472], [159.69, 2647.611, 48.071, 2.386, 0.114, 52.705], [29.48, 2766.73, 57.357, 0.802, -0.104, 55.37], [-205.061, 2873.74, 46.565, -1.508, -0.077, 66.706], [-378.414, 2870.478, 40.804, -4.595, 1.352, 127.03], [-535.152, 2754.126, 39.953, 1.313, 0.198, 134.614], [-573.678, 2640.967, 44.551, 1.981, -0.196, -156.674], [-563.59, 2511.33, 50.18, 1.202, 0.092, 149.684], [-655.672, 2455.86, 56.838, 3.941, -0.046, 109.984], [-722.89, 2350.275, 67.679, 6.315, 0.2, 139.922], [-793.511, 2238.198, 85.972, 8.886, -0.557, -147.559], [-774.736, 2133.286, 106.61, 7.873, 0.74, 128.282], [-823.512, 2046.87, 118.836, 5.908, -0.08, -166.364], [-701.195, 1952.106, 139.517, 9.659, -0.808, -132.462], [-781.919, 1839.501, 163.248, 8.077, -0.25, 122.276], [-900.986, 1714.15, 183.344, 8.905, 0.281, 176.693], [-773.296, 1646.195, 203.218, 9.343, -0.485, -141.481], [-804.846, 1427.978, 241.129, 9.155, 0.459, 173.056], [-778.786, 1250.512, 260.084, 1.82, 0.181, -172.941], [-707.105, 1083.275, 251.987, -11.274, -0.188, 167.596], [-703.912, 910.879, 230.898, -8.266, 0.476, -173.206], [-826.866, 818.25, 198.536, -10.617, -1.137, 105.511], [-1015.137, 793.682, 169.942, -5.569, -0.109, 103.848], [-1205.944, 693.9, 146.292, -5.799, 1.21, 144.118], [-1360.553, 627.224, 133.595, -3.438, 1.762, 92.403], [-1428.038, 497.701, 112.729, -10.706, -0.887, -160.133], [-1247.509, 488.019, 93.177, 2.424, 4.867, 4.566], [-1112.926, 569.378, 101.964, 1.055, -0.227, -59.218], [-891.301, 550.681, 93.792, -8.916, 0.491, -134.392], [-856.552, 369.845, 86.511, -1.591, 0.579, -176.018], [-694.226, 288.346, 82.257, -4.848, 0.071, -92.377], [-534.619, 312.996, 82.304, -0.118, -0.269, -6.261], [-529.969, 544.513, 111.24, 9.575, 1.184, -46.102], [-431.896, 547.884, 121.416, 2.93, 1.064, -95.912], [-360.638, 496.435, 115.382, -10.312, -0.804, -136.958], [-259.94, 503.455, 121.669, 11, 0.253, -99.497], [-99.355, 511.464, 143.052, 1.711, 0.339, -107.716], [75.281, 468.526, 146.466, 1.015, -0.232, -67.711], [227.318, 525.281, 139.997, -0.171, 1.254, -54.945], [239.821, 473.999, 124.811, -9.214, 0.493, -179.902], [339.011, 391.821, 115.348, -4.225, -1.23, -107.994], [394.398, 230.369, 102.339, -0.016, 0.037, 160.632], [308.544, 8.767, 81.023, -11.917, 2.324, 160.455], [237.506, -207.143, 53.269, -0.502, 0.969, 175.782], [419.714, -300.345, 49.892, -3.918, -0.044, -115.653], [683.586, -382.045, 40.442, -2.031, 0.606, -54.156], [890.28, -331.783, 63.132, 5.554, 0.793, -82.262], [995.163, -306.512, 66.487, -0.119, -0.422, -124.919], [1027.635, -325.761, 66.434, -0.121, 0.208, -120.805]]];
let placingObject = false;
let placedObject = null;
let placePos = null;
let placeRot = 0;
let placeRotX = 0;
let placeModel = null;
mp.events.add("Client_StartPlaceObject", _0x5718e3 => {
  if (placingObject) {
    return;
  }
  placingObject = true;
  placeModel = _0x5718e3;
  placeRot = 0;
  placeRotX = 0;
  let _0x35fbe8 = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2, res.y / 2, 0));
  let _0x6d0b0b = mp.game.gameplay.getGroundZFor3dCoord(_0x35fbe8.x, _0x35fbe8.y, _0x35fbe8.z, 0, false);
  _0x35fbe8.z = _0x6d0b0b;
  placePos = _0x35fbe8;
  placedObject = mp.objects.new(mp.game.joaat(placeModel), placePos, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: 200,
    dimension: localplayer.dimension
  });
  HintShow("ЛКМ — подтвердить<br>ПКМ/ESC — отмена<br>Стрелки — перемещение<br>Shift+Стрелки — по Z<br>Q/E — поворот");
});
mp.keys.bind(37, false, function () {
  if (placingObject) {
    placePos.x -= 0.1;
    updatePlacedObject();
  }
});
mp.keys.bind(39, false, function () {
  if (placingObject) {
    placePos.x += 0.1;
    updatePlacedObject();
  }
});
mp.keys.bind(38, false, function () {
  if (placingObject) {
    placePos.y += 0.1;
    updatePlacedObject();
  }
});
mp.keys.bind(40, false, function () {
  if (placingObject) {
    placePos.y -= 0.1;
    updatePlacedObject();
  }
});
mp.keys.bind(81, false, function () {
  if (placingObject) {
    placeRot -= 5;
    updatePlacedObject();
  }
});
mp.keys.bind(69, false, function () {
  if (placingObject) {
    placeRot += 5;
    updatePlacedObject();
  }
});
mp.keys.bind(16, false, function () {
  mp.keys.bind(38, false, function () {
    if (placingObject && mp.game.controls.isControlPressed(0, 21)) {
      placePos.z += 0.1;
      updatePlacedObject();
    }
  });
  mp.keys.bind(40, false, function () {
    if (placingObject && mp.game.controls.isControlPressed(0, 21)) {
      placePos.z -= 0.1;
      updatePlacedObject();
    }
  });
});
let grand_race_transparent = false;
let grand_race_transparent_timer = null;
let grand_race_transparent_blink = false;
let grand_race_g_returned = false;
mp.events.add("render", () => {
  if (global.at_grand_race) {
    global.grand_race_g_hold ||= false;
    global.grand_race_g_hold_start ||= 0;
    if (mp.game.controls.isControlJustPressed(0, 47)) {
      global.grand_race_g_hold = true;
      global.grand_race_g_hold_start = new Date().getTime();
    }
    if (global.grand_race_g_hold) {
      if (mp.game.controls.isControlPressed(0, 47)) {
        let _0xeef1c0 = new Date().getTime() - global.grand_race_g_hold_start;
        let _0x364513 = Math.min(100, Math.floor(_0xeef1c0 / 5000 * 100));
        main_browser.execute("APPS.state.hud.hud_job_count = " + _0x364513 + ";");
        if (!global.grand_race_g_returned && _0xeef1c0 >= 5000) {
          global.grand_race_g_returned = true;
          if (grand_race_check > 1 && grand_race_poses[grand_race_map_index]) {
            const _0x2c0fc8 = grand_race_poses[grand_race_map_index][grand_race_check - 2];
            if (_0x2c0fc8) {
              mp.events.callRemote("Server_GrandRaceTeleportVehicle", _0x2c0fc8[0], _0x2c0fc8[1], _0x2c0fc8[2] + 0.2);
              if (localplayer.vehicle) {
                TurnOnEngine(localplayer.vehicle);
              }
              grand_race_transparent = true;
              grand_race_transparent_blink = true;
              setTimeout(() => {
                if (localplayer.vehicle) {
                  TurnOnEngine(localplayer.vehicle);
                }
              }, 1500);
              grand_race_transparent_timer = setTimeout(() => {
                grand_race_transparent = false;
                grand_race_transparent_blink = false;
                global.grand_race_g_returned = false;
                if (localplayer.vehicle) {
                  localplayer.vehicle.setAlpha(255);
                  TurnOnEngine(localplayer.vehicle);
                }
                main_browser.execute("APPS.state.hud.job_hud_show = true;");
                main_browser.execute("APPS.state.hud.hud_job_count = 0;");
              }, 5000);
            }
          }
          main_browser.execute("APPS.state.hud.hud_job_count = 0;");
          global.grand_race_g_hold = false;
        }
      } else {
        main_browser.execute("APPS.state.hud.hud_job_count = 0;");
        global.grand_race_g_hold = false;
        global.grand_race_g_returned = false;
      }
    }
    if (grand_race_transparent_blink) {
      let _0x314a1e = new Date().getTime() % 1000 < 250 ? 80 : 150;
      if (localplayer.vehicle) {
        localplayer.vehicle.setAlpha(_0x314a1e);
      }
    }
  }
});
mp.events.add("render", () => {
  if (mp.players.local.vehicle && grand_race_transparent_blink) {
    mp.players.forEachInRange(mp.players.local.position, 200, _0x28e774 => {
      if (_0x28e774.vehicle) {
        mp.players.local.vehicle.setNoCollision(_0x28e774.vehicle.handle, true);
        _0x28e774.vehicle.setNoCollision(mp.players.local.vehicle.handle, true);
      }
    });
  }
});
mp.events.add("Client_GrandRaceSetGhost", (_0x2321d7, _0x4a215d, _0x15e52f) => {
  const _0x1e5c8f = mp.vehicles.at(_0x2321d7);
  if (_0x1e5c8f) {
    _0x1e5c8f.setAlpha(_0x4a215d);
    _0x1e5c8f.setCollision(false, false);
    setTimeout(() => {
      _0x1e5c8f.setAlpha(255);
      _0x1e5c8f.setCollision(true, true);
    }, _0x15e52f);
  }
});
mp.events.add("Client_GrandRace_SpawnMapObjects", _0x5ef16e => {
  try {
    if (!grand_race_map_objects[_0x5ef16e] || grand_race_map_objects[_0x5ef16e].length === 0) {
      return;
    }
    for (let _0x350650 = 0; _0x350650 < grand_race_map_objects[_0x5ef16e].length; _0x350650++) {
      const _0x960afa = grand_race_map_objects[_0x5ef16e][_0x350650];
      const _0x457079 = new mp.Vector3(_0x960afa.pos[0], _0x960afa.pos[1], _0x960afa.pos[2]);
      const _0x31b83e = _0x960afa.rot[0] || 0;
      const _0x40cc53 = _0x960afa.rot[1] || 0;
      const _0x2917c2 = _0x960afa.rot[2] || 0;
      let _0x4f13cd = mp.objects.new(mp.game.joaat(_0x960afa.propName), _0x457079, {
        dimension: _0x5ef16e,
        rotation: {
          x: _0x31b83e,
          y: _0x40cc53,
          z: _0x2917c2
        }
      });
      if (_0x4f13cd) {
        _0x4f13cd.setRotation(_0x31b83e, _0x40cc53, _0x2917c2, 2, true);
        grand_race_objects.push(_0x4f13cd);
      }
    }
  } catch (_0x4695ce) {
    mp.gui.chat.push("[GrandRace Error] " + _0x4695ce);
  }
});