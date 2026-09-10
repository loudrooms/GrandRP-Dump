let last_racion_on;
let last_mic_on;
let MaxRange = 12;
let inphonetalk = false;
global.Voice_Max_Volume = 100;
global.Racion_Max_Volume = 100;
global.defaultmic = false;
global.racionmic = false;
global.familymic = false;
mp.voiceChat.networkOptimisations = true;
mp.voiceChat.advancedNoiseSuppression = false;
mp.voiceChat.proximity = MaxRange;
mp.voiceChat.useMuteTarget();
mp.voiceChat.muted = false;
let lastConnState;
let voiceCheckInterval = null;
function notifyVoiceChatDisabled() {
  if (voiceCheckInterval != null) {
    clearInterval(voiceCheckInterval);
  }
  main_browser.execute("APPS.state.hud.microphone_hint_show = true;");
  voiceCheckInterval = setInterval(() => {
    if (GetProfileSetting(720) == 1) {
      main_browser.execute("APPS.state.hud.microphone_hint_show = false;");
      clearInterval(voiceCheckInterval);
      voiceCheckInterval = null;
    }
  }, 5000);
}
function onMumbleConnected() {
  mp.voiceChat.proximity = MaxRange;
  mp.voiceChat.joinOwnChannel();
  mp.voiceChat.useMuteTarget();
  mp.voiceChat.setAudioInputIntent(global.VOICE_INTENT || "speech");
  if (GetProfileSetting(720) != 1) {
    notifyVoiceChatDisabled();
  }
}
function applyVoiceIntent(_0x56f09d) {
  global.VOICE_INTENT = _0x56f09d === "music" ? "music" : "speech";
  mp.voiceChat.setAudioInputIntent(global.VOICE_INTENT);
}
function setRadioTransmit(_0x27f5be) {
  if (_0x27f5be) {
    mp.voiceChat.applyTalkTarget();
    startRadioMicTick();
  } else {
    stopRadioMicTick();
    mp.voiceChat.useMuteTarget();
  }
}
function getPlayerByServerId(_0x53ad65) {
  if (!_0x53ad65) {
    return null;
  }
  const _0x42f760 = GetPlayerFromServerId(_0x53ad65);
  if (_0x42f760 === -1) {
    return null;
  }
  const _0x4ed6db = GetPlayerPed(_0x42f760);
  if (!_0x4ed6db || !DoesEntityExist(_0x4ed6db)) {
    return null;
  }
  const _0x4b97e0 = mp.players.atHandle(_0x4ed6db);
  if (_0x4b97e0 && _0x4b97e0.getId() === _0x53ad65) {
    return _0x4b97e0;
  } else {
    return null;
  }
}
function getPlayerForVoice(_0x428fcc) {
  if (_0x428fcc) {
    return getPlayerByServerId(_0x428fcc);
  } else {
    return null;
  }
}
mp.events.add("Client_UnfreezeAfterAuth", () => {
  if (GetProfileSetting(720) != 1) {
    notifyVoiceChatDisabled();
  }
});
setInterval(function () {
  const _0x559387 = mp.voiceChat.connected;
  if (_0x559387 != lastConnState) {
    lastConnState = _0x559387;
    if (_0x559387) {
      onMumbleConnected();
    }
  }
  if (_0x559387 && !mp.voiceChat.inOwnChannel) {
    mp.voiceChat.joinOwnChannel();
  }
}, 1500);
const voiceRadioListenIds = new Set();
let lastProximityServerIds = [];
function collectListenServerIds(_0x30867e) {
  const _0x3479c3 = _0x30867e.slice();
  for (let _0xbf69da = 0; _0xbf69da < voiceChatService.listeners.length; _0xbf69da++) {
    const _0x3a9bd3 = voiceChatService.listeners[_0xbf69da];
    if (_0x3a9bd3 && _0x3a9bd3.isListeningRadio) {
      const _0x328e84 = _0x3a9bd3.getId();
      if (_0x328e84 > 0) {
        _0x3479c3.push(_0x328e84);
      }
    }
  }
  for (const _0x1ea85b of voiceRadioListenIds) {
    _0x3479c3.push(_0x1ea85b);
  }
  return _0x3479c3;
}
function syncVoiceChannelListens(_0x39b4f2) {
  mp.voiceChat.syncChannelListens(collectListenServerIds(_0x39b4f2));
}
function pushNativeMicControl() {
  mp.game.controls.enableControlAction(0, 249, true);
  mp.game.controls.enableControlAction(1, 249, true);
  mp.game.controls.enableControlAction(2, 249, true);
  mp.game.controls.setControlNormal(0, 249, 1);
  mp.game.controls.setControlNormal(1, 249, 1);
  mp.game.controls.setControlNormal(2, 249, 1);
  SetControlNormal(0, 249, 1);
  SetControlNormal(1, 249, 1);
  SetControlNormal(2, 249, 1);
}
let radioMicTick = null;
function isRadioMicActive() {
  return racionmic || familymic || inphonetalk;
}
function startRadioMicTick() {
  if (radioMicTick == null) {
    radioMicTick = setTick(function () {
      if (isRadioMicActive()) {
        mp.voiceChat.applyTalkTarget();
        pushNativeMicControl();
      } else {
        stopRadioMicTick();
      }
    });
  }
}
function stopRadioMicTick() {
  if (radioMicTick != null && typeof clearTick == "function") {
    clearTick(radioMicTick);
  }
  radioMicTick = null;
}
function hasRadioListeners() {
  if (voiceRadioListenIds.size > 0) {
    return true;
  }
  for (let _0x1db16c = 0; _0x1db16c < voiceChatService.listeners.length; _0x1db16c++) {
    if (voiceChatService.listeners[_0x1db16c] && voiceChatService.listeners[_0x1db16c].isListeningRadio) {
      return true;
    }
  }
  return false;
}
function resolveVoicePlayerByNetId(_0x2efbc5) {
  const _0x233c31 = parseInt(_0x2efbc5);
  if (!_0x233c31 || isNaN(_0x233c31)) {
    return {
      sid: 0,
      player: null
    };
  }
  let _0x31db60 = getPlayerForVoice(_0x233c31);
  if (!_0x31db60 && mp.players.atServerId) {
    _0x31db60 = mp.players.atServerId(_0x233c31);
  }
  _0x31db60 ||= mp.players.atRemoteId(_0x233c31);
  return {
    sid: _0x233c31,
    player: _0x31db60 && mp.players.exists(_0x31db60) ? _0x31db60 : null
  };
}
function bindPhoneVoiceListen(_0x209bdd, _0x53d907) {
  if (!(_0x209bdd <= 0)) {
    voiceRadioListenIds.add(_0x209bdd);
    mp.voiceChat.listenTo(_0x209bdd);
    mp.voiceChat.addChannelListen(_0x209bdd);
    if (_0x53d907) {
      _0x53d907.isListening = true;
      _0x53d907.isListeningRadio = true;
      voiceChatService.add(_0x53d907);
    }
    syncVoiceChannelListens(lastProximityServerIds);
  }
}
function unbindPhoneVoiceListen(_0x45691c, _0x4099dc) {
  if (_0x45691c > 0) {
    voiceRadioListenIds.delete(_0x45691c);
    mp.voiceChat.stopListenTo(_0x45691c);
    mp.voiceChat.removeChannelListen(_0x45691c);
  }
  if (_0x4099dc) {
    _0x4099dc.isListening = false;
    _0x4099dc.isListeningRadio = false;
    voiceChatService.remove(_0x4099dc);
  }
  syncVoiceChannelListens(lastProximityServerIds);
}
global.ToggleVoiceChat = function (_0x17855a, _0x7184e6) {
  try {
    if (_0x17855a == 1) {
      const _0x1f8739 = [["at_talent_show_camera", at_talent_show_camera], ["is_dead", is_dead], ["chatActive", chatActive], ["dialog_window", dialog_window], ["mobileOpen", mobileOpen], ["LeaderMenuOpened", LeaderMenuOpened], ["ReportOpened", ReportOpened], ["SettingsOpened", SettingsOpened], ["ADOpened", ADOpened], ["ExchangeOpened", ExchangeOpened], ["FamilyOpened", FamilyOpened], ["CustomNumberPlateOpened", CustomNumberPlateOpened], ["racionmic", racionmic], ["defaultmic", defaultmic], ["familymic", familymic], ["inphonetalk", inphonetalk], ["at_high_voice", at_high_voice], ["AFK_state", AFK_state], ["isInDrone", isInDrone], ["at_small_timer_event", at_small_timer_event], ["google_captcha_opened", google_captcha_opened]];
      let _0x304efa = false;
      for (let _0x55a567 = 0; _0x55a567 < _0x1f8739.length; _0x55a567++) {
        const [_0x249df5, _0x5dac27] = _0x1f8739[_0x55a567];
        if (_0x5dac27) {
          _0x304efa = true;
        }
      }
      if (_0x304efa) {
        return;
      }
      if (localplayer.getVariable("MUTE") == 1) {
        return mp.game.ui.notifications.show(language["Bы зaглyшeны"][curr_lang], false, 0, 6);
      }
      if (familymic || defaultmic || racionmic) {
        return;
      }
      if (_0x7184e6 == 2 && mp.keys.isDown(mp.storage.data.bind_controls.familymic) != 1) {
        return;
      }
      if (_0x7184e6 == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) != 1) {
        return;
      }
      if (_0x7184e6 != 2 && _0x7184e6 != 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) != 1) {
        return;
      }
      if (mp.keys.isDown(mp.storage.data.bind_controls.familymic) == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) == 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) == 1) {
        return;
      }
      if (_0x7184e6 == 2) {
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
          setRadioTransmit(true);
          mp.events.callRemote("Server_FamilyRacion_Start");
        }
      } else if (_0x7184e6 == 1) {
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
          setRadioTransmit(true);
          mp.events.callRemote("Server_Racion_Start");
        }
      } else if (_0x7184e6 == 0) {
        if (new Date().getTime() - last_mic_on < 500) {
          return;
        }
        last_mic_on = new Date().getTime();
        defaultmic = true;
        main_browser.execute("APPS.state.hud.microphone = true;");
        setRadioTransmit(false);
        StartTalking(localplayer);
      }
      mp.voiceChat.muted = false;
    } else {
      mp.voiceChat.muted = true;
      if (familymic == 1) {
        familymic = false;
        main_browser.execute("APPS.state.hud.family_microphone = false;");
        setRadioTransmit(false);
        mp.events.callRemote("Server_Racion_Stop");
      } else if (racionmic == 1) {
        racionmic = false;
        main_browser.execute("APPS.state.hud.global_microphone = false;");
        setRadioTransmit(false);
        mp.events.callRemote("Server_Racion_Stop");
      } else {
        defaultmic = false;
        main_browser.execute("APPS.state.hud.microphone = false;");
        StopTalking(localplayer);
      }
    }
  } catch (_0x41af37) {}
};
global.voiceChatService = {
  listeners: [],
  add: function (_0x259d6a) {
    if (this.listeners.indexOf(_0x259d6a) == -1) {
      this.listeners.push(_0x259d6a);
      _0x259d6a.isListening = true;
      if (_0x259d6a.max_distance == null) {
        _0x259d6a.max_distance = MaxRange;
      }
      if (_0x259d6a.voiceCustomVolume == null) {
        _0x259d6a.voiceCustomVolume = 1;
      }
    }
  },
  remove: function (_0x1ed62f) {
    const _0x4da1b7 = this.listeners.indexOf(_0x1ed62f);
    if (_0x4da1b7 != -1) {
      this.listeners.splice(_0x4da1b7, 1);
      _0x1ed62f.isListening = false;
      _0x1ed62f.isListeningRadio = false;
      mp.voiceChat.clearPlayerVolume(_0x1ed62f);
    }
  }
};
mp.events.add("playerQuit", function (_0x3c5f11) {
  if (_0x3c5f11 && _0x3c5f11.isListening) {
    voiceChatService.remove(_0x3c5f11);
  }
});
mp.events.add("Client_InHospitalVoice", _0x3628c2 => {
  if (_0x3628c2 == 1) {
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
mp.events.add("VoiceMic", (_0x2b9315, _0x4b47d4, _0x435c8d, _0x445a09, _0x155385 = -1) => {
  try {
    const _0x20fd17 = _0x155385;
    if (!_0x20fd17) {
      return;
    }
    if (_0x435c8d == 1) {
      if (_0x20fd17 > 0) {
        voiceRadioListenIds.add(_0x20fd17);
        const _0x40a890 = getPlayerForVoice(_0x155385);
        if (_0x40a890) {
          voiceChatService.add(_0x40a890);
          _0x40a890.isListeningRadio = true;
        }
        const _0xb6e97c = Racion_Max_Volume == 0 ? 0 : parseFloat(Racion_Max_Volume / 100);
        mp.voiceChat.setPlayerVolume(_0x20fd17, _0xb6e97c);
        syncVoiceChannelListens(lastProximityServerIds);
      }
      main_browser.execute("APPS.state.hud.global_voice_info_to_add = {\"name\":\"" + _0x2b9315 + "\",\"id\":" + _0x4b47d4 + ",\"job\":" + _0x445a09 + ",\"delete\":0};");
      PlayAudioSound("Start_Squelch", "CB_RADIO_SFX");
    } else {
      if (_0x20fd17 > 0) {
        voiceRadioListenIds.delete(_0x20fd17);
        mp.voiceChat.clearPlayerVolume(_0x20fd17);
        const _0x2da76e = getPlayerForVoice(_0x155385);
        if (_0x2da76e) {
          _0x2da76e.isListeningRadio = false;
          voiceChatService.remove(_0x2da76e);
        }
        syncVoiceChannelListens(lastProximityServerIds);
      }
      main_browser.execute("APPS.state.hud.global_voice_info_to_add = {\"name\":\"\",\"id\":" + _0x4b47d4 + ",\"job\":0,\"delete\":1};");
    }
  } catch (_0x5614cf) {
    mp.gui.chat.push("voice_mic.error: " + _0x5614cf);
  }
});
global.at_high_voice = false;
mp.events.add("Client_AtHighVoice", _0x485ff2 => {
  try {
    at_high_voice = _0x485ff2;
    if (_0x485ff2 == 1) {
      mp.voiceChat.muted = false;
      ChangeVoiceState(4);
      can_change_voice_dist = false;
      main_browser.execute("APPS.state.hud.microphone = true;");
      HintShow(language["Чтобы закончить громко говорить нажмите ESC"][curr_lang]);
    } else {
      mp.voiceChat.muted = true;
      ChangeVoiceState(current_voice_dist_level);
      can_change_voice_dist = true;
      main_browser.execute("APPS.state.hud.microphone = false;");
    }
  } catch (_0x410e0b) {
    mp.gui.chat.push("Client_AtHighVoice.error", _0x410e0b);
  }
});
global.CloseHighVoice = function () {
  if (at_high_voice) {
    at_high_voice = false;
    mp.events.callRemote("Server_CloseHighVoice");
    HintClose();
  }
};
mp.events.add("ListenTo", _0x509a43 => {
  const {
    sid: _0x359ae8,
    player: _0x21dd58
  } = resolveVoicePlayerByNetId(_0x509a43);
  inphonetalk = true;
  mp.voiceChat.muted = false;
  setRadioTransmit(true);
  bindPhoneVoiceListen(_0x359ae8, _0x21dd58);
  if (_0x21dd58) {
    mp.events.callRemote("add_voice_listener", _0x21dd58);
  } else if (_0x359ae8 > 0) {
    try {
      mp.gui.chat.push("[CALL] ListenTo mumble sid=" + _0x359ae8 + " (no player entity)");
    } catch (_0x22423f) {}
  }
  main_browser.execute("APPS.state.hud.microphone = true;");
});
mp.events.add("CancelListenTo", _0x17cafd => {
  const {
    sid: _0x54b6b5,
    player: _0x5d3896
  } = resolveVoicePlayerByNetId(_0x17cafd);
  inphonetalk = false;
  mp.voiceChat.muted = true;
  setRadioTransmit(false);
  unbindPhoneVoiceListen(_0x54b6b5, _0x5d3896);
  if (_0x5d3896) {
    mp.events.callRemote("remove_voice_listener", _0x5d3896);
  }
  main_browser.execute("APPS.state.hud.microphone = false;");
});
mp.events.add("Client_DeleteFromListeners", _0x599ff7 => {
  const _0xe8b72b = mp.players.atRemoteId(parseInt(_0x599ff7));
  if (_0xe8b72b && mp.players.exists(_0xe8b72b)) {
    voiceChatService.remove(_0xe8b72b);
  }
});
mp.events.add("Client_ChangeVoiceMaxVolume", (_0x3bb1b4, _0x2c39e5) => {
  const _0x318b4a = mp.players.atRemoteId(parseInt(_0x3bb1b4));
  if (_0x318b4a && mp.players.exists(_0x318b4a) && _0x318b4a.isListening) {
    let _0x27ea51 = 0;
    if (_0x2c39e5 == 0) {
      _0x27ea51 = 3;
    } else if (_0x2c39e5 == 1) {
      _0x27ea51 = 6;
    } else if (_0x2c39e5 == 2) {
      _0x27ea51 = 9;
    } else if (_0x2c39e5 == 3) {
      _0x27ea51 = 12;
    } else if (_0x2c39e5 == 4) {
      _0x27ea51 = 30;
    }
    _0x318b4a.max_distance = _0x27ea51;
  }
});
let mute_state = false;
mp.events.add("Client_MuteState", _0x1a1790 => {
  mute_state = _0x1a1790;
});
global.setPlayerVoiceVolume = function (_0x5038e4, _0x32bd63) {
  const _0x2f1941 = mp.players.atRemoteId(parseInt(_0x5038e4));
  if (_0x2f1941 && mp.players.exists(_0x2f1941)) {
    _0x2f1941.voiceCustomVolume = _0x32bd63;
  }
};
setInterval(function () {
  if (defaultmic == 1 && mp.keys.isDown(mp.storage.data.bind_controls.microphone) != 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false);
  }
  if (racionmic == 1 && mp.keys.isDown(mp.storage.data.bind_controls.globalmic) != 1 && mp.storage.data.mic_toggle == 1) {
    ToggleVoiceChat(false, 1);
  }
  const _0x310bef = (defaultmic || at_high_voice) && mute_state != 1;
  const _0x3e4113 = [];
  mp.players.forEachInStreamRange(function (_0x4e367b) {
    if (_0x4e367b != localplayer) {
      if (mp.game.system.vdist(_0x4e367b.position.x, _0x4e367b.position.y, _0x4e367b.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) <= MaxRange) {
        _0x3e4113.push(_0x4e367b);
        if (!_0x4e367b.isListening) {
          voiceChatService.add(_0x4e367b);
        }
        if (_0x4e367b.isListeningRadio) {
          const _0xd39749 = Racion_Max_Volume == 0 ? 0 : parseFloat(Racion_Max_Volume / 100);
          mp.voiceChat.setPlayerVolume(_0x4e367b, _0xd39749);
        } else {
          const _0x1bbad7 = Voice_Max_Volume == 0 ? 0 : Voice_Max_Volume / 100;
          const _0x4c4882 = _0x4e367b.voiceCustomVolume ? _0x4e367b.voiceCustomVolume : 1;
          mp.voiceChat.setPlayerVolume(_0x4e367b, _0x1bbad7 * _0x4c4882);
        }
      }
    }
  });
  for (let _0x4fdc4d = voiceChatService.listeners.length - 1; _0x4fdc4d >= 0; _0x4fdc4d--) {
    const _0x4e842b = voiceChatService.listeners[_0x4fdc4d];
    if (!_0x4e842b || _0x4e842b.handle === 0) {
      voiceChatService.remove(_0x4e842b);
      continue;
    }
    if (_0x4e842b.isListeningRadio) {
      continue;
    }
    if (mp.game.system.vdist(_0x4e842b.position.x, _0x4e842b.position.y, _0x4e842b.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) > MaxRange) {
      voiceChatService.remove(_0x4e842b);
    }
  }
  const _0x55d28e = _0x3e4113.map(function (_0x1f3c45) {
    return _0x1f3c45.getId();
  }).filter(function (_0x1e8fb4) {
    return _0x1e8fb4 > 0;
  });
  lastProximityServerIds = _0x55d28e;
  syncVoiceChannelListens(_0x55d28e);
  for (const _0x5f5d42 of voiceRadioListenIds) {
    const _0x253eb6 = Racion_Max_Volume == 0 ? 0 : parseFloat(Racion_Max_Volume / 100);
    mp.voiceChat.setPlayerVolume(_0x5f5d42, _0x253eb6);
  }
  const _0x1baad5 = racionmic || familymic || inphonetalk || _0x310bef;
  if (_0x1baad5 && !isRadioMicActive()) {
    mp.voiceChat.applyTalkTarget(_0x55d28e);
  } else if (!_0x1baad5) {
    mp.voiceChat.useMuteTarget();
  }
}, 350);
mp.events.add("playerStartTalking2", function (_0x3cff58, _0x2a536d) {
  const _0x3823b0 = getPlayerForVoice(parseInt(_0x3cff58));
  if (_0x3823b0 && mp.players.exists(_0x3823b0)) {
    StartTalking(_0x3823b0);
    _0x3823b0.max_distance = _0x2a536d;
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
mp.events.add("Client_Load_VoiceChatRange", _0x2469ad => {
  if (!(_0x2469ad < 0) && !(_0x2469ad > 3)) {
    current_voice_dist_level = _0x2469ad;
    ChangeVoiceState(_0x2469ad, false);
  }
});
let voice_change_timeout;
let need_to_show_voice_dist = false;
global.ChangeVoiceState = function (_0x934ef8, _0x249b8d = true) {
  if (_0x934ef8 == 0) {
    MaxRange = 3;
  } else if (_0x934ef8 == 1) {
    MaxRange = 6;
  } else if (_0x934ef8 == 2) {
    MaxRange = 9;
  } else if (_0x934ef8 == 3) {
    MaxRange = 12;
  } else if (_0x934ef8 == 4) {
    MaxRange = 30;
  }
  mp.voiceChat.proximity = MaxRange;
  if (_0x249b8d == 1) {
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
mp.events.add("Change_Voice_State", _0x168612 => {
  voice_state = _0x168612;
});
let job_racion_muted = false;
mp.events.add("Client_JobRacionStateSwitch", _0x25c111 => {
  job_racion_muted = _0x25c111 == 1;
});
let family_racion_muted = false;
mp.events.add("Client_FamilyRacionStateSwitch", _0xf2bb21 => {
  family_racion_muted = _0xf2bb21 == 1;
});
mp.colshapes.newSphere(-551.142, -193.848, 68.208, 50).is_gov_voice = true;
mp.colshapes.newSphere(-442.43, 6003.918, 31.71, 25).is_sahp_voice = true;
let can_change_voice_dist = true;
mp.events.add("playerEnterColshape", _0x1f336c => {
  if (mp.colshapes.exists(_0x1f336c) && (_0x1f336c.is_gov_voice == 1 || _0x1f336c.is_sahp_voice == 1)) {
    ChangeVoiceState(1, false);
    can_change_voice_dist = false;
    return;
  }
});
mp.events.add("playerExitColshape", _0x5812cb => {
  if (mp.colshapes.exists(_0x5812cb) && (_0x5812cb.is_gov_voice == 1 || _0x5812cb.is_sahp_voice == 1)) {
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
      voiceChatService.listeners.slice().forEach(function (_0x33ab6a) {
        voiceChatService.remove(_0x33ab6a);
      });
    }
    mp.events.callRemote("SMicrophoneLog");
  }
};
mp.events.add("Client_ChangePlayerVolume", (_0x377f86, _0x567896) => {
  if (!(_0x567896 < 0) && !(_0x567896 > 100)) {
    _0x567896 /= 100;
    setPlayerVoiceVolume(_0x377f86, _0x567896);
  }
});