global.tempfriends = {};
global.zone_blips = 9;
global.zone_color = 5;
if (mp.storage.data.new_hud) {
  mp.storage.data.new_hud = false;
  mp.storage.flush();
}
if (mp.storage.data.friends == null) {
  mp.storage.data.friends = {};
  mp.storage.flush();
}
if (mp.storage.data.favoriteSkins == null) {
  mp.storage.data.favoriteSkins = {
    weapons: Array(12).fill().map(() => []),
    backpacks: [],
    armor: []
  };
  mp.storage.flush();
}
const defaultBindControls = {
  inventory: {
    keyCode: 73,
    keyName: "I"
  },
  menu: {
    keyCode: 77,
    keyName: "M"
  },
  action: {
    keyCode: 71,
    keyName: "G"
  },
  mobile: {
    keyCode: 75,
    keyName: "K"
  },
  microphone: {
    keyCode: 78,
    keyName: "N"
  },
  globalmic: {
    keyCode: 85,
    keyName: "U"
  },
  hud: {
    keyCode: 120,
    keyName: "F9"
  },
  cruize: {
    keyCode: 88,
    keyName: "X"
  },
  fast1: {
    keyCode: 49,
    keyName: "1"
  },
  fast2: {
    keyCode: 50,
    keyName: "2"
  },
  fast3: {
    keyCode: 51,
    keyName: "3"
  },
  fast4: {
    keyCode: 52,
    keyName: "4"
  },
  fast5: {
    keyCode: 53,
    keyName: "5"
  },
  fast6: {
    keyCode: 54,
    keyName: "6"
  },
  engine: {
    keyCode: 17,
    keyName: "CTRL"
  },
  micreload: {
    keyCode: 119,
    keyName: "F8"
  },
  finger: {
    keyCode: 66,
    keyName: "B"
  },
  familymic: {
    keyCode: 79,
    keyName: "O"
  },
  familyvoice: {
    keyCode: 115,
    keyName: "F4"
  },
  additionalvoice: {
    keyCode: 116,
    keyName: "F5"
  },
  safetybelt: {
    keyCode: 117,
    keyName: "F6"
  },
  firemode: {
    keyCode: 118,
    keyName: "F7"
  },
  quest: {
    keyCode: 80,
    keyName: "P"
  },
  lock: {
    keyCode: 76,
    keyName: "L"
  },
  drift: {
    keyCode: 90,
    keyName: "Z"
  },
  leftcam: {
    keyCode: 72,
    keyName: "H"
  },
  autopilot: {
    keyCode: 118,
    keyName: "F7"
  },
  fastaction1: {
    keyCode: 90,
    keyName: "Z"
  },
  fastaction2: {
    keyCode: 88,
    keyName: "X"
  },
  fastaction3: {
    keyCode: 67,
    keyName: "C"
  },
  voicedist: {
    keyCode: 123,
    keyName: "F12"
  },
  ragdoll: {
    keyCode: 121,
    keyName: "F10"
  },
  shotmarker: {
    keyCode: 69,
    keyName: "E"
  },
  shotmarker_fam: {
    keyCode: 90,
    keyName: "Z"
  }
};
global.defaultBindControls = defaultBindControls;
if (mp.storage.data.bind_controls == null) {
  mp.storage.data.bind_controls = {};
}
Object.keys(defaultBindControls).forEach(_0x3629a9 => {
  if (!mp.storage.data.bind_controls.hasOwnProperty(_0x3629a9)) {
    mp.storage.data.bind_controls[_0x3629a9] = defaultBindControls[_0x3629a9].keyCode;
  }
});
mp.storage.flush();
if (mp.storage.data.navigator == null) {
  mp.storage.data.navigator = 1;
  mp.storage.flush();
}
if (mp.storage.data.left_hints == null) {
  mp.storage.data.left_hints = 1;
  mp.storage.flush();
}
if (mp.storage.data.kill_list_show == null) {
  mp.storage.data.kill_list_show = 1;
  mp.storage.flush();
}
if (mp.storage.data.lottery_hint == null) {
  mp.storage.data.lottery_hint = 1;
  mp.storage.flush();
}
if (mp.storage.data.kill_list == null) {
  mp.storage.data.kill_list = 1;
  mp.storage.flush();
}
if (mp.storage.data.vehicle_lod_distance == null) {
  mp.storage.data.vehicle_lod_distance = 200;
  mp.storage.flush();
}
if (mp.storage.data.player_lod_distance == null) {
  mp.storage.data.player_lod_distance = 200;
  mp.storage.flush();
}
if (mp.storage.data.graffiti_notif == null) {
  mp.storage.data.graffiti_notif = 1;
  mp.storage.flush();
}
if (mp.storage.data.atm_blips == null) {
  mp.storage.data.atm_blips = 1;
  mp.storage.flush();
}
if (mp.storage.data.fam_label == null) {
  mp.storage.data.fam_label = 1;
  mp.storage.flush();
}
if (mp.storage.data.donate_notif == null) {
  mp.storage.data.donate_notif = 1;
  mp.storage.flush();
}
if (mp.storage.data.car_promo_notif != 1) {
  mp.storage.data.car_promo_notif = 1;
  mp.storage.flush();
}
if (mp.storage.data.shot_display == null) {
  mp.storage.data.shot_display = 0;
  mp.storage.flush();
}
if (mp.storage.data.wedding_notif == null) {
  mp.storage.data.wedding_notif = 1;
  mp.storage.flush();
}
if (mp.storage.data.bigmap_state == null) {
  mp.storage.data.bigmap_state = 1;
  mp.storage.flush();
}
if (mp.storage.data.other_backpack_show == null) {
  mp.storage.data.other_backpack_show = 1;
  mp.storage.flush();
}
if (mp.storage.data.backpack_sound == null) {
  mp.storage.data.backpack_sound = 1;
  mp.storage.flush();
}
if (mp.storage.data.anim_binds == null) {
  mp.storage.data.anim_binds = [];
  mp.storage.flush();
}
if (mp.storage.data.fav_anims != null) {
  delete mp.storage.data.fav_anims;
  mp.storage.flush();
}
if (mp.storage.data.favorite_anims == null) {
  mp.storage.data.favorite_anims = [];
  mp.storage.flush();
}
if (mp.storage.data.favorite_sounds == null) {
  mp.storage.data.favorite_sounds = [];
  mp.storage.flush();
}
if (mp.storage.data.sound_binds == null) {
  mp.storage.data.sound_binds = [];
  mp.storage.flush();
}
if (mp.storage.data.new_design_show == null) {
  mp.storage.data.new_design_show = 0;
  mp.storage.flush();
}
if (curr_lang == "ru" && mp.storage.data.new_standartaim_show == null) {
  mp.storage.data.new_standartaim_show = 0;
  mp.storage.flush();
}
if (mp.storage.data.mobile_sound == null) {
  mp.storage.data.mobile_sound = 1;
  mp.storage.flush();
}
if (mp.storage.data.mobile_background == null) {
  mp.storage.data.mobile_background = 1;
  mp.storage.flush();
}
if (mp.storage.data.mobile_disturb == null) {
  mp.storage.data.mobile_disturb = 0;
  mp.storage.flush();
}
if (mp.storage.data.graphic_select == null) {
  mp.storage.data.graphic_select = 2;
  mp.storage.flush();
}
if (mp.storage.data.mic_toggle == null) {
  mp.storage.data.mic_toggle = 1;
  mp.storage.flush();
}
if (mp.storage.data.halloween_music == null && is_halloween_2024) {
  mp.storage.data.halloween_music = 1;
  mp.storage.flush();
}
if (mp.storage.data.fam_shooting_marker == null) {
  mp.storage.data.fam_shooting_marker = 0;
  mp.storage.flush();
}
if (mp.storage.data.ambient_sounds == null) {
  mp.storage.data.ambient_sounds = false;
  mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");
  mp.storage.flush();
}
if (mp.storage.data.activeBeginnerTaskId == null) {
  mp.storage.data.activeBeginnerTaskId = 0;
  mp.storage.flush();
}
if (mp.storage.data.new_speedometr == null) {
  mp.storage.data.new_speedometr = 0;
  mp.storage.flush();
}
if (mp.storage.data.new_speedometr == 1) {
  main_browser.execute("APPS.state.gamesettings.new_speedometr = " + mp.storage.data.new_speedometr + ";");
}
if (mp.storage.data.new_hud == 1) {
  main_browser.execute("APPS.state.gamesettings.new_hud = " + mp.storage.data.new_hud + ";");
}
if (mp.storage.data.inv_camera_animation == null) {
  mp.storage.data.inv_camera_animation = 0;
  mp.storage.flush();
}
if (bHalloween2025) {
  mp.game.gameplay.setWeatherTypeNow("HALLOWEEN");
  mp.game.time.setClockTime(3, 0, 0);
}
if (mp.storage.data.halloween_mode == null && bHalloween2025) {
  mp.storage.data.halloween_mode = 1;
  mp.game.gameplay.setWeatherTypeNow("HALLOWEEN");
  mp.storage.flush();
}
if (global.new_version == 1) {
  if (mp.storage.data.graphic_select == 1) {
    mp.storage.data.players_streamed = 50;
    mp.storage.data.vehicles_streamed = 30;
    mp.players.maxStreamed = mp.storage.data.players_streamed;
    mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
    mp.storage.data.vehicle_lod_distance = 30;
    mp.storage.data.player_lod_distance = 50;
  } else if (mp.storage.data.graphic_select == 2) {
    mp.storage.data.players_streamed = 70;
    mp.storage.data.vehicles_streamed = 40;
    mp.players.maxStreamed = mp.storage.data.players_streamed;
    mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
    mp.storage.data.vehicle_lod_distance = 100;
    mp.storage.data.player_lod_distance = 100;
  } else if (mp.storage.data.graphic_select == 3) {
    mp.storage.data.players_streamed = 100;
    mp.storage.data.vehicles_streamed = 50;
    mp.players.maxStreamed = mp.storage.data.players_streamed;
    mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
    mp.storage.data.vehicle_lod_distance = 200;
    mp.storage.data.player_lod_distance = 200;
  } else if (mp.storage.data.graphic_select == 4) {
    mp.players.maxStreamed = mp.storage.data.players_streamed;
    mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
  }
  mp.storage.flush();
}
if ((is_winter || is_snow) && mp.storage.data.snow_mode == null) {
  mp.storage.data.snow_mode = 0;
  mp.storage.flush();
}
if (mp.storage.data.snow_mode != null) {
  mp.storage.data.snow_mode = 0;
  mp.storage.flush();
}
if (mp.storage.data.chat_height == null || isNaN(mp.storage.data.chat_height) || mp.storage.data.chat_height < 15 || mp.storage.data.chat_height > 50) {
  mp.storage.data.chat_height = 30;
  mp.storage.flush();
}
if (mp.storage.data.enableDrugsEffect == null) {
  mp.storage.data.enableDrugsEffect = 1;
  mp.storage.flush();
}
if (mp.storage.data.graphic_select == null) {
  mp.storage.data.graphic_select = 3;
  mp.storage.data.players_streamed = 100;
  mp.storage.data.vehicles_streamed = 50;
  mp.players.maxStreamed = mp.storage.data.players_streamed;
  mp.vehicles.maxStreamed = mp.storage.data.vehicles_streamed;
  mp.storage.data.vehicle_lod_distance = 200;
  mp.storage.data.player_lod_distance = 200;
}
if (mp.storage.data.hideStateControlAvatars == null) {
  mp.storage.data.hideStateControlAvatars = 0;
}
if (mp.storage.data.muteSpatialSound == null) {
  mp.storage.data.muteSpatialSound = 0;
}