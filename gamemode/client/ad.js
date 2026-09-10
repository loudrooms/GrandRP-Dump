global.ADOpened = false;
mp.events.add("Show_AD", (_0x30a12e, _0x5b5997, _0x46394b, _0x16edce, _0x10bd83, _0x2d7f7e, _0x43c601, _0x4007ee, _0x277fd8, _0x27370b, _0x3875f9) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x32ac49 = "{\"advertisments\":" + JSON.stringify(_0x30a12e) + ",\"ready_advertisments\":" + JSON.stringify(_0x5b5997) + ",\"top_ten\":" + JSON.stringify(_0x46394b) + ",\"ad_price\":" + _0x16edce + ",\"checked_ad\":" + _0x10bd83 + ",\"checked_weekly\":" + _0x2d7f7e + ",\"members_online\":" + _0x43c601 + ",\"members_in_ad\":" + _0x4007ee + ",\"Advertisement\":" + _0x277fd8 + ",\"in_ad\":false,\"p_id\":" + _0x27370b + ",\"created_events\":" + _0x3875f9 + ",\"show\":true}";
  main_browser.execute("APPS.state.smi_edit = " + _0x32ac49);
  ADOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_ShowADSForLifeinvader", (_0x144fab, _0x23e58d, _0x2a64a0, _0x18c448, _0x199c22, _0x23335e, _0xc16f12, _0x5dc485, _0x54109f, _0x51e105) => {
  const _0x192658 = "{\"ads\":" + JSON.stringify(_0x144fab) + ",\"top_ten\":" + JSON.stringify(_0x23e58d) + ",\"ad_price\":" + _0x2a64a0 + ",\"checked_ad\":" + _0x18c448 + ",\"checked_weekly\":" + _0x199c22 + ",\"members_online\":" + _0x23335e + ",\"members_in_ad\":" + _0xc16f12 + ",\"Advertisement\":" + _0x5dc485 + ",\"in_ad\":false,\"p_id\":" + _0x54109f + ",\"created_events\":" + _0x51e105 + ",\"show\":true}";
  main_browser.execute("APPS.state.smi_edit = " + _0x192658);
  ADOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseAD = function () {
  if (ADOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.smi_edit.show = false;");
    ADOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("CloseADServer");
  }
};
mp.events.add("Client_LaunceTalentShow", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LaunceTalentShow");
    }
  }
});
mp.events.add("Client_UpdateADEventsCount", _0x54455e => {
  if (ADOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.smi_edit.created_events = " + _0x54455e);
  }
});
mp.events.add("Client_NotifAd", _0x3c4ce1 => {
  if (ADOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_NotifAd", _0x3c4ce1);
  }
});
mp.events.add("Client_Accept_AD", (_0x50f025, _0x96019, _0x9c09e1, _0xd6241d) => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_Accept_AD", _0x50f025, _0x96019, _0x9c09e1, _0xd6241d);
    }
  }
});
mp.events.add("Client_CheckEventsMenu", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CheckEventsMenu");
    }
  }
});
mp.events.add("Client_CheckBroadcastSMI", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CheckBroadcastSMI");
    }
  }
});
mp.events.add("Client_StatusBroadcastSMI", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_StatusBroadcastSMI");
    }
  }
});
mp.events.add("Client_StatusAdv", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_StatusAdv", 1);
    }
  }
});
mp.events.add("Client_StatusAdv2", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_StatusAdv", 2);
    }
  }
});
mp.events.add("Client_CreateEvent", () => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CreateEvent");
    }
  }
});
mp.events.add("Client_ForbesSMiAction", _0x43eb08 => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ForbesSMiAction", _0x43eb08);
    }
  }
});
mp.events.add("Edit_AD", (_0x58eb7e, _0x25c7fd, _0x62d36a) => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_Edit_AD", _0x58eb7e, _0x25c7fd, _0x62d36a);
    }
  }
});
mp.events.add("Client_GetBackADToList", _0x586658 => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetBackADToList", _0x586658);
    }
  }
});
mp.events.add("Client_Delete_AD", (_0x8c70e9, _0x32e706) => {
  if (ADOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_Delete_AD", _0x8c70e9, _0x32e706);
    }
  }
});
mp.events.add("Reload_AD", (_0x41d7aa, _0x430742, _0x3b73cc, _0xc7a5f0, _0x47927f, _0x2e4c49) => {
  if (ADOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.smi_edit.advertisments = " + JSON.stringify(_0x41d7aa));
    main_browser.execute("APPS.state.smi_edit.ready_advertisments = " + JSON.stringify(_0x430742));
    main_browser.execute("APPS.state.smi_edit.ad_price = " + _0x3b73cc);
    main_browser.execute("APPS.state.smi_edit.checked_ad = " + _0xc7a5f0);
    main_browser.execute("APPS.state.smi_edit.checked_weekly = " + _0x47927f);
    main_browser.execute("APPS.state.smi_edit.members_in_ad = " + _0x2e4c49);
  }
});
mp.events.add("Client_Reload_AD_New", (_0x58e857, _0x1ceda9, _0x214421, _0x15d4af, _0x2bcf73) => {
  if (ADOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.smi_edit.ads = " + JSON.stringify(_0x58e857));
    main_browser.execute("APPS.state.smi_edit.ad_price = " + _0x1ceda9);
    main_browser.execute("APPS.state.smi_edit.checked_ad = " + _0x214421);
    main_browser.execute("APPS.state.smi_edit.checked_weekly = " + _0x15d4af);
    main_browser.execute("APPS.state.smi_edit.members_in_ad = " + _0x2bcf73);
    main_browser.execute("this.AppComponents.smiEdit.$forceUpdate();");
  }
});
mp.events.add("Change_AD_State", _0xb0c30a => {
  if (ADOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.smi_edit.in_ad = " + _0xb0c30a);
  }
});
mp.events.add("AD_Fail", _0xb6381d => {
  if (ADOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xb6381d + "');");
  }
});
const talent_show_objects = [["gr_vote_yes_right", "gr_vote_no_right", "gr_vote_hz_right"], ["gr_vote_yes_middle", "gr_vote_no_middle", "gr_vote_hz_middle"], ["gr_vote_yes_left", "gr_vote_no_left", "gr_vote_hz_left"]];
function ChangeTalentShowRoom(_0x56e152, _0x422b05) {
  const _0x5d414e = mp.game.interior.getInteriorAtCoords(-234.767, -2001.184, 24.685);
  for (let _0x17cc4e = 0; _0x17cc4e < talent_show_objects[_0x56e152 - 1].length; _0x17cc4e++) {
    mp.game.interior.disableInteriorProp(parseInt(_0x5d414e), talent_show_objects[_0x56e152 - 1][_0x17cc4e]);
  }
  mp.game.interior.enableInteriorProp(parseInt(_0x5d414e), talent_show_objects[_0x56e152 - 1][_0x422b05 - 1]);
  mp.game.interior.refreshInterior(parseInt(_0x5d414e));
}
mp.events.add("Client_ChangeTalentShowRoom", ChangeTalentShowRoom);
mp.colshapes.newSphere(-235.479, -1997.018, 24.765, 1.5).is_talent_seat = 1;
mp.colshapes.newSphere(-234.316, -1997.428, 24.655, 1.5).is_talent_seat = 2;
mp.colshapes.newSphere(-232.906, -1997.435, 24.649, 1.5).is_talent_seat = 3;
global.talent_seat_index = 0;
global.is_near_house_tv = false;
mp.events.add("playerEnterColshape", _0x1aef7a => mp.colshapes.exists(_0x1aef7a) && _0x1aef7a.is_talent_seat ? (talent_seat_index = _0x1aef7a.is_talent_seat, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : mp.colshapes.exists(_0x1aef7a) && _0x1aef7a.is_house_tv ? (is_near_house_tv = true, main_browser.execute("APPS.state.hud.interact = true;"), void PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET")) : undefined);
mp.events.add("playerExitColshape", _0x42eb1b => mp.colshapes.exists(_0x42eb1b) && _0x42eb1b.is_talent_seat ? (talent_seat_index = 0, void main_browser.execute("APPS.state.hud.interact = false;")) : mp.colshapes.exists(_0x42eb1b) && _0x42eb1b.is_house_tv ? (is_near_house_tv = false, void main_browser.execute("APPS.state.hud.interact = false;")) : undefined);
global.can_interact_talent_room = false;
let loaded_talent_keys = false;
mp.events.add("Client_InteractWithTalentRoom", () => {
  HintShow(language["1 - положительная оценка, 2 - отрицательная оценка, 3 - нейтральная оценка"][curr_lang]);
  if (!loaded_talent_keys) {
    loaded_talent_keys = true;
    let _0x5597f9 = new Date().getTime();
    mp.keys.bind(49, false, function () {
      if (!chatActive && !!loggedin && !(new Date().getTime() - _0x5597f9 < 200) && !!can_interact_talent_room) {
        _0x5597f9 = new Date().getTime();
        mp.events.callRemote("Server_ChangeTalentPlaceResult", 1);
      }
    });
    mp.keys.bind(50, false, function () {
      if (!chatActive && !!loggedin && !(new Date().getTime() - _0x5597f9 < 200) && !!can_interact_talent_room) {
        _0x5597f9 = new Date().getTime();
        mp.events.callRemote("Server_ChangeTalentPlaceResult", 2);
      }
    });
    mp.keys.bind(51, false, function () {
      if (!chatActive && !!loggedin && !(new Date().getTime() - _0x5597f9 < 200) && !!can_interact_talent_room) {
        _0x5597f9 = new Date().getTime();
        mp.events.callRemote("Server_ChangeTalentPlaceResult", 3);
      }
    });
  }
  can_interact_talent_room = true;
});
global.CloseInteractWithTalentRoom = function () {
  if (can_interact_talent_room) {
    mp.events.callRemote("Server_CloseInteractWithTalentSeat");
    HintClose();
    can_interact_talent_room = false;
  }
};
const tv_poses = [[348.716, -904.577, -99.115], [278.831, 1708.761, -99.009], [349.822, -924.414, -98.98], [257.07, -995.778, -99.009], [338.211, -996.683, -99.196], [1630.644, -937.506, -173.744], [-1148.055, 1500.304, 27.694], [340.663, -974.394, -98.969], [342.586, -953.286, -98.959], [-664.866, 585.259, 144.971], [-2267.687, 1556.959, 43.834], [330.799, 1275.527, 50.332], [332.172, 1208.901, 47.039], [473.336, 1554.048, -74.147], [451.594, 523.244, 7.207], [-754.554, 315.081, 221.855], [-781.767, 340.877, 211.197], [-577.641, 40.196, 92.223], [-606.306, 41.748, 97.4], [-1478.804, -532.522, 68.154], [-1468.21, -547.887, 73.244], [-936.515, -375.318, 108.038], [-907.571, -381.799, 113.475], [-40.35, -571.719, 88.713], [-22.563, -580.049, 79.231], [126.273, 543.36, 183.898], [-779.694, 319.287, 195.886], [-1512.415, 1021.455, 95.268], [-1325.483, 1134.908, 187.513], [-991.745, 1343.05, 199.246]];
for (let e = 0; e < tv_poses.length; e++) {
  mp.colshapes.newSphere(tv_poses[e][0], tv_poses[e][1], tv_poses[e][2], 1, -1).is_house_tv = true;
}
const talent_show_camera_poses = [[-229.989, -1998.426, 26.058, -237.026, -2003.431, 23.685], [-238.718, -1996.3, 26.582, -234.771, -2005.842, 23.685], [-235.235, -2002.99, 27.086, -233.871, -1996.205, 24.646], [-234.842, -1999.436, 25.335, -237.012, -2009.48, 24.393], [-225.502, -2007.917, 26.05, -227.227, -2001.171, 24.432]];
global.at_talent_show_camera = false;
let second_cam;
let cam_type = 1;
mp.events.add("Client_ShowTalentShow", (_0x213f7c, _0x29394c) => {
  const _0x10eb05 = "{\"participants\":" + JSON.stringify(_0x213f7c) + ",\"voted\":" + _0x29394c + ",\"show\":true}";
  main_browser.execute("APPS.state.tv = " + _0x10eb05);
  at_talent_show_camera = true;
  is_freezed = true;
  localplayer.freezePosition(true);
  mp.game.cam.doScreenFadeOut(0);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  setTimeout(() => {
    mp.game.cam.doScreenFadeIn(1000);
  }, 1000);
  last_cam = 1;
  cam_type = 1;
  mp.gui.cursor.show(true, true);
  localcamera = mp.cameras.new("default", new mp.Vector3(talent_show_camera_poses[0][0], talent_show_camera_poses[0][1], talent_show_camera_poses[0][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(talent_show_camera_poses[0][3], talent_show_camera_poses[0][4], talent_show_camera_poses[0][5]);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
});
let last_cam = 1;
function SwitchTalentShowCamera(_0x3d295e) {
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  if (last_cam != null && last_cam != _0x3d295e) {
    second_cam = mp.cameras.new("default", new mp.Vector3(talent_show_camera_poses[last_cam - 1][0], talent_show_camera_poses[last_cam - 1][1], talent_show_camera_poses[last_cam - 1][2]), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(talent_show_camera_poses[last_cam - 1][3], talent_show_camera_poses[last_cam - 1][4], talent_show_camera_poses[last_cam - 1][5]);
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(talent_show_camera_poses[_0x3d295e - 1][0], talent_show_camera_poses[_0x3d295e - 1][1], talent_show_camera_poses[_0x3d295e - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(talent_show_camera_poses[_0x3d295e - 1][3], talent_show_camera_poses[_0x3d295e - 1][4], talent_show_camera_poses[_0x3d295e - 1][5]);
  localcamera.setActive(true);
  if (last_cam != null && last_cam != _0x3d295e && second_cam) {
    localcamera.setActiveWithInterp(second_cam.handle, 2000, 0, 0);
  } else {
    mp.game.cam.renderScriptCams(true, true, 2000, true, true);
  }
  last_cam = _0x3d295e;
}
global.CloseTalentShowCamera = function () {
  if (at_talent_show_camera) {
    main_browser.execute("APPS.state.tv.show = false;");
    is_freezed = false;
    localplayer.freezePosition(false);
    at_talent_show_camera = false;
    mp.game.cam.doScreenFadeOut(0);
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    setTimeout(() => {
      mp.game.cam.doScreenFadeIn(1000);
    }, 1000);
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    if (second_cam != null) {
      second_cam.destroy();
      second_cam = null;
    }
    mp.events.callRemote("Server_ExitFromTalentShowCamera");
  }
};
mp.events.add("Client_VoteTalentShow", _0x24d0fd => {
  if (at_talent_show_camera && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_VoteTalentShow", _0x24d0fd);
    }
  }
});
mp.events.add("Client_VotedTalentShow", () => {
  main_browser.execute("APPS.state.tv.voted = true;");
});
mp.events.add("Talent_Error", _0x1ff142 => {
  if (at_talent_show_camera) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x1ff142 + "');");
  } else {
    mp.game.ui.notifications.show(_0x1ff142, false, 0, 6);
  }
});
mp.events.add("Client_SwitchTalentShowCam", _0x3dfde2 => {
  if (at_talent_show_camera && loggedin && !chatActive) {
    if (_0x3dfde2 == 0) {
      if (cam_type - 1 < 1) {
        cam_type = talent_show_camera_poses.length;
      } else {
        cam_type--;
      }
    } else if (_0x3dfde2 == 1) {
      if (cam_type + 1 > talent_show_camera_poses.length) {
        cam_type = 1;
      } else {
        cam_type++;
      }
    }
    SwitchTalentShowCamera(cam_type);
  }
});
let hasTakePhotoEvent = false;
let takePhotoEventInterval = null;
function stopTakePhotoEvent() {
  hasTakePhotoEvent = false;
  if (takePhotoEventInterval) {
    clearInterval(takePhotoEventInterval);
    takePhotoEventInterval = null;
  }
}
mp.events.add("Client_StartTakePhotoEvent", (_0x5b8584, _0x5f1fa6) => {
  hasTakePhotoEvent = true;
  _0x5f1fa6 = resolveTranslationValue(_0x5f1fa6);
  mp.events.call("Client_SendHudEventNotif", 2000, _0x5f1fa6);
  if (takePhotoEventInterval != null) {
    clearInterval(takePhotoEventInterval);
  }
  takePhotoEventInterval = setInterval(() => {
    if (!hasTakePhotoEvent) {
      return clearInterval(takePhotoEventInterval);
    }
    mp.events.call("Client_SendHudEventNotif", 2000, _0x5f1fa6);
  }, 300000);
});
mp.events.add("Client_StopTakePhotoEvent", stopTakePhotoEvent);
mp.events.add("Client_AdTakePhotoAnim", (_0x1f5551, _0x2c6f92) => {
  const _0x4c7945 = mp.players.atRemoteId(_0x1f5551);
  if (mp.players.exists(_0x4c7945)) {
    if (_0x2c6f92) {
      if (_0x4c7945 === localplayer) {
        _0x4c7945.taskStartScenarioInPlace("WORLD_HUMAN_PAPARAZZI", 0, false);
      }
    } else {
      const _0x461d1e = "{\"Bone\": 28422, \"Model\": \"prop_pap_camera_01\", \"PosOffset1\": 0.0,\"PosOffset2\": 0.0,\"PosOffset3\": 0.0, \"RotOffset1\": 0.0, \"RotOffset2\": 10.0, \"RotOffset3\": 0.0}";
      mp.events.call("Client_attachObject2", _0x4c7945.remoteId, _0x461d1e);
      global.play_animation2(_0x4c7945, "amb@world_human_paparazzi@male@enter", "enter", 8, -8, 1000, 49, 0);
      setTimeout(() => {
        if (mp.players.exists(_0x4c7945) && !_0x4c7945.InDeath) {
          global.play_animation2(_0x4c7945, "amb@world_human_paparazzi@male@base", "base", 8, -8, 2000, 1, 0);
          setTimeout(() => {
            if (mp.players.exists(_0x4c7945) && !_0x4c7945.InDeath) {
              global.play_animation2(_0x4c7945, "amb@world_human_paparazzi@male@idle_a", "idle_a", 8, -8, 8000, 1, 0);
              setTimeout(() => {
                if (mp.players.exists(_0x4c7945) && !_0x4c7945.InDeath) {
                  global.play_animation2(_0x4c7945, "amb@world_human_paparazzi@male@exit", "exit", 8, -8, 1000, 1, 0);
                  setTimeout(() => {
                    if (mp.players.exists(_0x4c7945)) {
                      mp.events.call("Client_detachObject", _0x4c7945.remoteId);
                    }
                  }, 800);
                }
              }, 8000);
            }
          }, 1800);
        }
      }, 800);
    }
    if (_0x4c7945 === localplayer) {
      stopTakePhotoEvent();
    }
    setTimeout(() => {
      if (mp.players.exists(_0x4c7945)) {
        if (!_0x4c7945.InDeath) {
          if (_0x2c6f92) {
            _0x4c7945.clearTasks();
          }
        }
        if (_0x4c7945 === localplayer) {
          ShowNotification(language["Отличный кадр, за него ты получишь вознаграждение!"][curr_lang], 25);
        }
      }
    }, 10000);
  }
});