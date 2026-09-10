let last_racion_on;
let last_mic_on;
let MaxRange = 12;
let inphonetalk = false;
global.Voice_Max_Volume = 100;
global.Racion_Max_Volume = 100;
global.defaultmic = false;
global.racionmic = false;
global.familymic = false;
let bfqHandle;
let peakEqHandle;
let is_radio_voice = false;
mp.voiceChat.networkOptimisations = true;
mp.voiceChat.advancedNoiseSuppression = false;
mp.voiceChat.bitrate = 48000;
global.ToggleVoiceChat = function (_0x45c03f, _0x54d9c2) {
  try {
    if (_0x45c03f == 1) {
      if (at_talent_show_camera || is_dead || chatActive || dialog_window || mobileOpen || LeaderMenuOpened || ReportOpened || SettingsOpened || ADOpened || ExchangeOpened || FamilyOpened || CustomNumberPlateOpened || racionmic || defaultmic || familymic || inphonetalk || at_high_voice || AFK_state || isInDrone || at_small_timer_event || google_captcha_opened) {
        return;
      }
      if (localplayer.getVariable("MUTE") == 1) {
        return mp.game.ui.notifications.show(language["Bы зaглyшeны"][curr_lang], false, 0, 6);
      }
      if (familymic || defaultmic || racionmic) {
        return;
      }
      if (_0x54d9c2 == 2 && mp.keys.isDown(mp.storage.data.bind_controls.familymic) != 1) {
        return;
      }
      if (_0x54d9c2 == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) != 1) {
        return;
      }
      if (_0x54d9c2 != 2 && _0x54d9c2 != 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) != 1) {
        return;
      }
      if (mp.keys.isDown(mp.storage.data.bind_controls.familymic) == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) == 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) == 1) {
        return;
      }
      if (_0x54d9c2 == 2) {
        if (familymic == 1 || !can_do_family_voice) {
          return;
        }
        if (familymic == 0) {
          if (new Date().getTime() - last_racion_on < 1000 || in_animation || lunaParkEating || localplayer.isRagdoll()) {
            return;
          }
          if (family_racion_muted == 1) {
            return mp.game.ui.notifications.show(language["У Вас отключена семейная рация"][curr_lang], false, 0, 6);
          }
          last_racion_on = new Date().getTime();
          familymic = true;
          main_browser.execute("APPS.state.hud.family_microphone = true;");
          mp.events.callRemote("Server_FamilyRacion_Start");
        }
      } else if (_0x54d9c2 == 1) {
        if (racionmic == 1 || can_use_racion == 0) {
          return;
        }
        if (racionmic == 0) {
          if (new Date().getTime() - last_racion_on < 1000 || in_animation || lunaParkEating || localplayer.isRagdoll()) {
            return;
          }
          if (job_racion_muted == 1) {
            return mp.game.ui.notifications.show(language["У Вас отключена рация на работах"][curr_lang], false, 0, 6);
          }
          last_racion_on = new Date().getTime();
          racionmic = true;
          main_browser.execute("APPS.state.hud.global_microphone = true;");
          mp.events.callRemote("Server_Racion_Start");
        }
      } else if (_0x54d9c2 == 0) {
        if (new Date().getTime() - last_mic_on < 500) {
          return;
        }
        last_mic_on = new Date().getTime();
        defaultmic = true;
        main_browser.execute("APPS.state.hud.microphone = true;");
        StartTalking(localplayer);
      }
      mp.voiceChat.muted = false;
    } else {
      mp.voiceChat.muted = true;
      if (familymic == 1) {
        familymic = false;
        main_browser.execute("APPS.state.hud.family_microphone = false;");
        mp.events.callRemote("Server_Racion_Stop");
      } else if (racionmic == 1) {
        racionmic = false;
        main_browser.execute("APPS.state.hud.global_microphone = false;");
        mp.events.callRemote("Server_Racion_Stop");
      } else {
        defaultmic = false;
        main_browser.execute("APPS.state.hud.microphone = false;");
        StopTalking(localplayer);
      }
    }
  } catch (_0x10f2de) {}
};
global.voiceChatService = {
  listeners: [],
  add: function (_0x39a456) {
    if (this.listeners.indexOf(_0x39a456) == -1) {
      this.listeners.push(_0x39a456);
      _0x39a456.isListening = true;
      if (!_0x39a456.isListeningRadio) {
        _0x39a456.voiceVolume = 0;
      }
      _0x39a456.voice3d = true;
      mp.events.callRemote("add_voice_listener", _0x39a456, MaxRange);
    }
  },
  remove: function (_0x3b9454, _0x28c4ce) {
    const _0x1a66c3 = this.listeners.indexOf(_0x3b9454);
    if (_0x1a66c3 != -1) {
      this.listeners.splice(_0x1a66c3, 1);
      _0x3b9454.isListening = false;
      if (_0x28c4ce) {
        mp.events.callRemote("remove_voice_listener", _0x3b9454);
      }
    }
  }
};
mp.events.add("playerQuit", function (_0x4aad34) {
  if (_0x4aad34 && _0x4aad34.isListening) {
    voiceChatService.remove(_0x4aad34, false);
  }
});
mp.events.add("Client_InHospitalVoice", _0x3a390d => {
  if (_0x3a390d == 1) {
    ChangeVoiceState(1, false);
    can_change_voice_dist = false;
  } else {
    ChangeVoiceState(current_voice_dist_level, false);
    can_change_voice_dist = true;
  }
});
mp.events.add("Client_ClearAllVoices", () => {
  main_browser.execute("APPS.state.hud.global_voice_info_to_add = 'deleteall';");
});
mp.events.add("VoiceMic", (_0x56a484, _0x38fe11, _0x5eaec9, _0x2612c6, _0x3be0b4 = -1) => {
  try {
    if (_0x5eaec9 == 1) {
      if (_0x3be0b4 != -1) {
        const _0x515a31 = mp.players.atRemoteId(_0x3be0b4);
        if (_0x515a31) {
          if (Racion_Max_Volume == 0) {
            _0x515a31.voiceVolume = 0;
          } else {
            _0x515a31.voiceVolume = parseFloat(Racion_Max_Volume / 100);
          }
          _0x515a31.voice3d = false;
          _0x515a31.isListening = true;
          _0x515a31.isListeningRadio = true;
        }
        setTimeout(() => {
          const _0x46a7b2 = mp.players.atRemoteId(_0x3be0b4);
          if (_0x46a7b2 && _0x46a7b2.isListening) {
            if (Racion_Max_Volume == 0) {
              _0x46a7b2.voiceVolume = 0;
            } else {
              _0x46a7b2.voiceVolume = parseFloat(Racion_Max_Volume / 100);
            }
            _0x46a7b2.voice3d = false;
          }
        }, 100);
      }
      main_browser.execute("APPS.state.hud.global_voice_info_to_add = {\"name\":\"" + _0x56a484 + "\",\"id\":" + _0x38fe11 + ",\"job\":" + _0x2612c6 + ",\"delete\":0};");
      PlayAudioSound("Start_Squelch", "CB_RADIO_SFX");
    } else {
      if (_0x3be0b4 != -1) {
        const _0x53a51e = mp.players.atRemoteId(_0x3be0b4);
        if (_0x53a51e) {
          _0x53a51e.isListening = false;
          _0x53a51e.isListeningRadio = false;
          voiceChatService.remove(_0x53a51e, false);
        }
      }
      main_browser.execute("APPS.state.hud.global_voice_info_to_add = {\"name\":\"\",\"id\":" + _0x38fe11 + ",\"job\":0,\"delete\":1};");
    }
  } catch (_0x414892) {
    mp.gui.chat.push("voice_mic.error: " + _0x414892);
  }
});
global.at_high_voice = false;
mp.events.add("Client_AtHighVoice", _0x5c6d7a => {
  try {
    at_high_voice = _0x5c6d7a;
    if (_0x5c6d7a == 1) {
      mp.voiceChat.muted = false;
      ChangeVoiceState(4);
      can_change_voice_dist = false;
      main_browser.execute("APPS.state.hud.microphone = true;");
      HintShow(language["Чтобы закончить громко говорить нажмите ESC"][curr_lang]);
      voiceChatService.listeners.forEach(function (_0x40aac4) {
        voiceChatService.remove(_0x40aac4, true);
      });
    } else {
      mp.voiceChat.muted = true;
      ChangeVoiceState(current_voice_dist_level);
      can_change_voice_dist = true;
      main_browser.execute("APPS.state.hud.microphone = false;");
      voiceChatService.listeners.forEach(function (_0x399052) {
        voiceChatService.remove(_0x399052, true);
      });
    }
  } catch (_0x58e022) {
    mp.gui.chat.push("Client_AtHighVoice.error", _0x58e022);
  }
});
global.CloseHighVoice = function () {
  if (at_high_voice) {
    at_high_voice = false;
    mp.events.callRemote("Server_CloseHighVoice");
    HintClose();
  }
};
mp.events.add("ListenTo", _0x1099a0 => {
  try {
    inphonetalk = true;
    mp.voiceChat.muted = false;
    const _0x48d8fd = mp.players.atRemoteId(parseInt(_0x1099a0));
    if (mp.players.exists(_0x48d8fd)) {
      voiceChatService.remove(_0x48d8fd, true);
      _0x48d8fd.isListening = true;
      mp.events.callRemote("add_voice_listener", _0x48d8fd);
    }
    main_browser.execute("APPS.state.hud.microphone = true;");
  } catch (_0x52434e) {
    mp.gui.chat.push("listen_to.error: " + _0x52434e);
  }
});
mp.events.add("CancelListenTo", _0xf2f3ff => {
  try {
    inphonetalk = false;
    mp.voiceChat.muted = true;
    const _0xbb5869 = mp.players.atRemoteId(parseInt(_0xf2f3ff));
    if (mp.players.exists(_0xbb5869)) {
      _0xbb5869.isListening = false;
      mp.events.callRemote("remove_voice_listener", _0xbb5869);
    }
    main_browser.execute("APPS.state.hud.microphone = false;");
  } catch (_0x3dc99a) {
    mp.gui.chat.push("cancellisten.error: " + _0x3dc99a);
  }
});
mp.events.add("Client_DeleteFromListeners", _0x5d82b0 => {
  try {
    const _0x1b8a34 = mp.players.atRemoteId(parseInt(_0x5d82b0));
    if (_0x1b8a34 && mp.players.exists(_0x1b8a34)) {
      voiceChatService.remove(_0x1b8a34, true);
    }
  } catch (_0xadc5b1) {
    mp.gui.chat.push("cancellisten.error: " + _0xadc5b1);
  }
});
mp.events.add("Client_ChangeVoiceMaxVolume", (_0xbe01ef, _0x3c94b5) => {
  try {
    const _0x176b8a = mp.players.atRemoteId(parseInt(_0xbe01ef));
    if (_0x176b8a && mp.players.exists(_0x176b8a) && _0x176b8a.isListening) {
      let _0x34dad4 = 0;
      if (_0x3c94b5 == 0) {
        _0x34dad4 = 3;
      } else if (_0x3c94b5 == 1) {
        _0x34dad4 = 6;
      } else if (_0x3c94b5 == 2) {
        _0x34dad4 = 9;
      } else if (_0x3c94b5 == 3) {
        _0x34dad4 = 12;
      } else if (_0x3c94b5 == 4) {
        _0x34dad4 = 30;
      }
      _0x176b8a.max_distance = _0x34dad4;
    }
  } catch (_0x464acd) {
    mp.gui.chat.push("cancellisten.error: " + _0x464acd);
  }
});
let mute_state = false;
mp.events.add("Client_MuteState", _0x53ed80 => {
  mute_state = _0x53ed80;
});
global.setPlayerVoiceVolume = function (_0x1bb41d, _0xbb748a) {
  const _0x55ff1b = mp.players.atRemoteId(parseInt(_0x1bb41d));
  if (_0x55ff1b && mp.players.exists(_0x55ff1b)) {
    _0x55ff1b.voiceCustomVolume = _0xbb748a;
  }
};
setInterval(function () {
  if (mute_state == 1) {
    mp.voiceChat.muted = true;
  }
  if (defaultmic == 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) != 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false);
  }
  if (racionmic == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) != 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false, 1);
  }
  mp.players.forEachInStreamRange(function (_0x51dc42) {
    if (_0x51dc42 != localplayer && !_0x51dc42.isListening) {
      if (mp.game.system.vdist(_0x51dc42.position.x, _0x51dc42.position.y, _0x51dc42.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) <= MaxRange) {
        voiceChatService.add(_0x51dc42);
      }
    }
  });
  voiceChatService.listeners.forEach(function (_0x3e1212) {
    if (_0x3e1212.handle !== 0) {
      const _0x224226 = mp.game.system.vdist(_0x3e1212.position.x, _0x3e1212.position.y, _0x3e1212.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
      if (_0x224226 > MaxRange && !_0x3e1212.isListeningRadio) {
        voiceChatService.remove(_0x3e1212, true);
      } else if (!_0x3e1212.isListeningRadio) {
        if (Voice_Max_Volume == 0) {
          _0x3e1212.voiceVolume = 0;
        } else {
          _0x3e1212.voiceVolume = (Voice_Max_Volume / 100 - _0x224226 / _0x3e1212.max_distance) * _0x3e1212.voiceCustomVolume ? _0x3e1212.voiceCustomVolume : 1;
        }
      }
    } else {
      voiceChatService.remove(_0x3e1212, true);
    }
  });
}, 350);
mp.events.add("playerStartTalking2", function (_0x1d1537, _0x3d53ad) {
  const _0x5dc686 = mp.players.atRemoteId(parseInt(_0x1d1537));
  if (_0x5dc686 && mp.players.exists(_0x5dc686)) {
    StartTalking(_0x5dc686);
    _0x5dc686.max_distance = _0x3d53ad;
  }
});
let temp_voice_marker;
let current_voice_dist_level = 3;
global.VoiceDistFunc = function () {
  if (!can_change_voice_dist) {
    return mp.game.ui.notifications.show(language["Вы не можете менять дистанцию микрофона сейчас"][curr_lang], false, 0, 6);
  }
  if (GlobalCheck() != 1) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      if (current_voice_dist_level == 3) {
        current_voice_dist_level = 0;
      } else {
        current_voice_dist_level++;
      }
      ChangeVoiceState(current_voice_dist_level);
      mp.events.callRemote("Server_SaveVoiceChatRangeLevel", current_voice_dist_level);
    }
  }
};
mp.events.add("Client_Load_VoiceChatRange", _0x5edf3e => {
  if (!(_0x5edf3e < 0) && !(_0x5edf3e > 3)) {
    current_voice_dist_level = _0x5edf3e;
    ChangeVoiceState(_0x5edf3e, false);
  }
});
let voice_change_timeout;
let need_to_show_voice_dist = false;
global.ChangeVoiceState = function (_0x20245a, _0x38f95c = true) {
  if (_0x20245a == 0) {
    MaxRange = 3;
  } else if (_0x20245a == 1) {
    MaxRange = 6;
  } else if (_0x20245a == 2) {
    MaxRange = 9;
  } else if (_0x20245a == 3) {
    MaxRange = 12;
  } else if (_0x20245a == 4) {
    MaxRange = 30;
  }
  if (_0x38f95c == 1) {
    need_to_show_voice_dist = true;
    if (voice_change_timeout != null) {
      clearTimeout(voice_change_timeout);
      voice_change_timeout = undefined;
    }
    voice_change_timeout = setTimeout(() => {
      need_to_show_voice_dist = false;
      if (temp_voice_marker && mp.markers.exists(temp_voice_marker)) {
        temp_voice_marker.destroy();
        temp_voice_marker = undefined;
      }
      voice_change_timeout = undefined;
    }, 5000);
  }
};
mp.events.add("render", () => {
  if (need_to_show_voice_dist) {
    if (temp_voice_marker && mp.markers.exists(temp_voice_marker)) {
      temp_voice_marker.destroy();
      temp_voice_marker = undefined;
    }
    temp_voice_marker = mp.markers.new(25, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), MaxRange * 2, {
      rotation: new mp.Vector3(0, 0, 0),
      color: [246, 225, 0, 90],
      visible: true,
      dimension: localplayer.dimension
    });
  }
});
global.voice_state = false;
mp.events.add("Change_Voice_State", _0x53a671 => {
  voice_state = _0x53a671;
});
let job_racion_muted = false;
mp.events.add("Client_JobRacionStateSwitch", _0x12ca09 => {
  job_racion_muted = _0x12ca09 == 1;
});
let family_racion_muted = false;
mp.events.add("Client_FamilyRacionStateSwitch", _0x43d210 => {
  family_racion_muted = _0x43d210 == 1;
});
mp.colshapes.newSphere(-551.142, -193.848, 68.208, 50).is_gov_voice = true;
mp.colshapes.newSphere(-442.43, 6003.918, 31.71, 25).is_sahp_voice = true;
let can_change_voice_dist = true;
mp.events.add("playerEnterColshape", _0x48ff2f => {
  if (mp.colshapes.exists(_0x48ff2f) && (_0x48ff2f.is_gov_voice == 1 || _0x48ff2f.is_sahp_voice == 1)) {
    ChangeVoiceState(1, false);
    can_change_voice_dist = false;
    return;
  }
});
mp.events.add("playerExitColshape", _0xeecb06 => {
  if (mp.colshapes.exists(_0xeecb06) && (_0xeecb06.is_gov_voice == 1 || _0xeecb06.is_sahp_voice == 1)) {
    ChangeVoiceState(current_voice_dist_level, false);
    can_change_voice_dist = true;
    return;
  }
});
let last_remove_players = new Date().getTime();
global.MicrophoneReloadFunc = function () {
  if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500) && (GlobalCheck() != 1 || !!mobileOpen || !!localplayer.cuffed || !!is_roped_hands)) {
    mp.voiceChat.cleanupAndReload(true, true, true);
    mp.game.ui.notifications.show(language["Bы пepeзaгpyзили микpoфoн"][curr_lang], false, 0, 2);
    if (new Date().getTime() - last_remove_players >= 60000 && !inphonetalk) {
      last_remove_players = new Date().getTime();
      voiceChatService.listeners.forEach(function (_0x525334) {
        voiceChatService.remove(_0x525334, true);
      });
    }
    mp.events.callRemote("SMicrophoneLog");
  }
};
mp.events.add("Client_ChangePlayerVolume", (_0x73c1b8, _0x3f9e01) => {
  if (!(_0x3f9e01 < 0) && !(_0x3f9e01 > 100)) {
    _0x3f9e01 /= 100;
    setPlayerVoiceVolume(_0x73c1b8, _0x3f9e01);
  }
});