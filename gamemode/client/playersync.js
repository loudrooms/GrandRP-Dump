let attachedObjects = [];
let attachedObjects2 = [];
let attachedObjects3 = [];
let attachedObjects4 = [];
function attachObject2(_0x320e82, _0x15b16f, _0x23e419 = "", _0x36c1f7 = "", _0x47c313 = "") {
  const _0x5e8920 = mp.players.atRemoteId(_0x320e82);
  if (_0x5e8920 && mp.players.exists(_0x5e8920)) {
    if (attachedObjects[_0x5e8920.remoteId] != null) {
      attachedObjects[_0x5e8920.remoteId].destroy();
      attachedObjects[_0x5e8920.remoteId] = undefined;
    }
    if (attachedObjects2[_0x5e8920.remoteId] != null) {
      attachedObjects2[_0x5e8920.remoteId].destroy();
      attachedObjects2[_0x5e8920.remoteId] = undefined;
    }
    if (attachedObjects3[_0x5e8920.remoteId] != null) {
      attachedObjects3[_0x5e8920.remoteId].destroy();
      attachedObjects3[_0x5e8920.remoteId] = undefined;
    }
    if (attachedObjects4[_0x5e8920.remoteId] != null) {
      attachedObjects4[_0x5e8920.remoteId].destroy();
      attachedObjects4[_0x5e8920.remoteId] = undefined;
    }
    if (!_0x15b16f) {
      return;
    }
    const _0x2c5998 = JSON.parse(_0x15b16f);
    const _0x1cf57d = _0x5e8920.getBoneIndex(_0x2c5998.Bone);
    const _0x55b734 = mp.objects.new(mp.game.joaat(_0x2c5998.Model), _0x5e8920.position, {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: _0x5e8920.dimension
    });
    if (!_0x55b734) {
      return;
    }
    attachedObjects[_0x5e8920.remoteId] = _0x55b734;
    waitEntity(_0x55b734).then(() => {
      if (_0x55b734 && mp.objects.exists(_0x55b734) && _0x5e8920 && mp.players.exists(_0x5e8920) && (_0x55b734.setCollision(false, false), _0x55b734.attachTo(_0x5e8920.handle, _0x1cf57d, _0x2c5998.PosOffset1, _0x2c5998.PosOffset2, _0x2c5998.PosOffset3, _0x2c5998.RotOffset1, _0x2c5998.RotOffset2, _0x2c5998.RotOffset3, true, false, false, false, 0, true), _0x23e419 != "")) {
        const _0x5e0577 = mp.objects.new(mp.game.joaat(_0x23e419), _0x5e8920.position, {
          rotation: new mp.Vector3(0, 0, 0),
          alpha: 255,
          dimension: _0x5e8920.dimension
        });
        setTimeout(function () {
          if (_0x55b734 && mp.objects.exists(_0x55b734) && _0x5e0577 && mp.objects.exists(_0x5e0577)) {
            _0x5e0577.attachTo(_0x55b734.handle, 0, 0, 0, 2, 0, 0, 0, true, false, false, false, 0, true);
          }
        }, 100);
        attachedObjects2[_0x5e8920.remoteId] = _0x5e0577;
      }
    });
    if (_0x36c1f7) {
      const _0x32eb93 = JSON.parse(_0x36c1f7);
      const _0x1f14fb = _0x5e8920.getBoneIndex(_0x32eb93.Bone);
      const _0x58cc93 = mp.objects.new(mp.game.joaat(_0x32eb93.Model), _0x5e8920.position, {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: _0x5e8920.dimension
      });
      waitEntity(_0x58cc93).then(() => {
        if (_0x58cc93 && mp.objects.exists(_0x58cc93) && _0x5e8920 && mp.players.exists(_0x5e8920)) {
          _0x58cc93.setCollision(false, false);
          _0x58cc93.attachTo(_0x5e8920.handle, _0x1f14fb, _0x32eb93.PosOffset1, _0x32eb93.PosOffset2, _0x32eb93.PosOffset3, _0x32eb93.RotOffset1, _0x32eb93.RotOffset2, _0x32eb93.RotOffset3, true, false, false, false, 0, true);
          attachedObjects3[_0x5e8920.remoteId] = _0x58cc93;
        }
      });
    }
    if (_0x47c313) {
      const _0x5e9407 = JSON.parse(_0x47c313);
      const _0x60b7e = _0x5e8920.getBoneIndex(_0x5e9407.Bone);
      const _0x558736 = mp.objects.new(mp.game.joaat(_0x5e9407.Model), _0x5e8920.position, {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: _0x5e8920.dimension
      });
      waitEntity(_0x558736).then(() => {
        if (_0x558736 && mp.objects.exists(_0x558736) && _0x5e8920 && mp.players.exists(_0x5e8920)) {
          _0x558736.setCollision(false, false);
          _0x558736.attachTo(_0x5e8920.handle, _0x60b7e, _0x5e9407.PosOffset1, _0x5e9407.PosOffset2, _0x5e9407.PosOffset3, _0x5e9407.RotOffset1, _0x5e9407.RotOffset2, _0x5e9407.RotOffset3, true, false, false, false, 0, true);
          attachedObjects4[_0x5e8920.remoteId] = _0x558736;
        }
      });
    }
  }
}
function waitEntity(_0x5e1472) {
  return new Promise(_0x57a783 => {
    let _0x221e40 = setInterval(() => {
      if (mp.game.entity.isAnEntity(_0x5e1472.handle)) {
        if (_0x221e40 != null) {
          clearInterval(_0x221e40);
        }
        _0x221e40 = undefined;
        _0x57a783();
      }
    }, 3);
  });
}
function ChangePlayerWeaponTint(_0x16dbed, _0x2cdbc1, _0x3602a0 = true) {
  if (_0x2cdbc1[0] == 3249783761 || _0x2cdbc1[0] == 3249783808) {
    _0x2cdbc1[0] = -1045183535;
  } else if (_0x2cdbc1[0] == 2210333304 || _0x2cdbc1[0] == 2210333184) {
    _0x2cdbc1[0] = -2084633992;
  } else if (_0x2cdbc1[0] == 2636060646 || _0x2cdbc1[0] == 2636060672) {
    _0x2cdbc1[0] = -1658906650;
  } else if (_0x2cdbc1[0] == 4024951519 || _0x2cdbc1[0] == 4024951552) {
    _0x2cdbc1[0] = -270015777;
  } else if (_0x2cdbc1[0] == 3231910285 || _0x2cdbc1[0] == 3231910400) {
    _0x2cdbc1[0] = -1063057011;
  } else if (_0x2cdbc1[0] == 2937143193 || _0x2cdbc1[0] == 2937143296) {
    _0x2cdbc1[0] = -1357824103;
  }
  if (new_version == 1 || _0x16dbed == localplayer) {
    if (new_version != 1) {
      _0x16dbed.giveWeapon(parseInt(_0x2cdbc1[0]), 0, true);
    }
    if (_0x3602a0 == 1) {
      setTimeout(function () {
        ChangePlayerWeaponTint(_0x16dbed, _0x2cdbc1, false);
      }, 100);
    }
  }
  mp.game.invoke("0x50969B9B89ED5738", _0x16dbed.handle, parseInt(_0x2cdbc1[0]), parseInt(_0x2cdbc1[1]));
  mp.game.invoke("0xADF692B254977C0C", _0x16dbed.handle, parseInt(_0x2cdbc1[0]), parseInt(_0x2cdbc1[1]));
}
global.syncAttachedObjects = attachedObjects;
mp.events.add("Client_detachObject", function (_0x18d9a5) {
  if (attachedObjects[_0x18d9a5] != null) {
    attachedObjects[_0x18d9a5].destroy();
  }
  attachedObjects[_0x18d9a5] = undefined;
  if (attachedObjects2[_0x18d9a5] != null) {
    attachedObjects2[_0x18d9a5].destroy();
    attachedObjects2[_0x18d9a5] = undefined;
  }
  if (attachedObjects3[_0x18d9a5] != null) {
    attachedObjects3[_0x18d9a5].destroy();
    attachedObjects3[_0x18d9a5] = undefined;
  }
  if (attachedObjects4[_0x18d9a5] != null) {
    attachedObjects4[_0x18d9a5].destroy();
    attachedObjects4[_0x18d9a5] = undefined;
  }
});
mp.events.add("Client_attachObject2", attachObject2);
mp.events.addDataHandler("REMOTE_ID", function (_0x35c599, _0x47f0c9, _0x49037d) {
  if (_0x35c599 && _0x35c599.type === "player" && _0x47f0c9 != null) {
    _0x35c599.real_id = _0x47f0c9;
  }
});
mp.events.addDataHandler("Dead", function (_0x29d29d, _0x38e423, _0x249b32) {
  if (_0x29d29d && _0x29d29d.type === "player") {
    _0x29d29d.dead_state = _0x38e423;
    if (_0x38e423 == 1) {
      global.applyDeathAnimation(_0x29d29d);
    } else {
      delete _0x29d29d.death_anim_applied;
    }
  }
});
mp.events.add("Client_SetCustomizedWeapon", (_0x31d79e, _0x345ac7, _0x949bac) => {
  if (_0x31d79e && mp.players.exists(_0x31d79e) && _0x31d79e.type === "player") {
    ChangePlayerWeaponTint(_0x31d79e, [_0x345ac7, _0x949bac]);
  }
});
mp.events.addDataHandler("Family", function (_0x490d46, _0x135e3b, _0x3863b7) {
  if (_0x490d46 && _0x490d46.type === "player") {
    _0x490d46.family = _0x135e3b;
  }
});
mp.events.addDataHandler("Member", function (_0xcfa4ce, _0x4b1ffc, _0x3b53cb) {
  if (_0xcfa4ce && _0xcfa4ce.type === "player") {
    _0xcfa4ce.member = _0x4b1ffc;
  }
});
mp.events.add("Client_ClearCustomizedWeapon", function (_0x23317b, _0x3f6cff) {
  if (_0x23317b && mp.players.exists(_0x23317b)) {
    if (_0x3f6cff == 3249783761 || _0x3f6cff == 3249783808) {
      _0x3f6cff = -1045183535;
    } else if (_0x3f6cff == 2210333304 || _0x3f6cff == 2210333184) {
      _0x3f6cff = -2084633992;
    } else if (_0x3f6cff == 2636060646 || _0x3f6cff == 2636060672) {
      _0x3f6cff = -1658906650;
    } else if (_0x3f6cff == 4024951519 || _0x3f6cff == 4024951552) {
      _0x3f6cff = -270015777;
    } else if (_0x3f6cff == 3231910285 || _0x3f6cff == 3231910400) {
      _0x3f6cff = -1063057011;
    } else if (_0x3f6cff == 2937143193 || _0x3f6cff == 2937143296) {
      _0x3f6cff = -1357824103;
    }
    if (_0x23317b == localplayer) {
      _0x23317b.giveWeapon(parseInt(_0x3f6cff), 0, true);
    }
    mp.game.invoke("0x50969B9B89ED5738", _0x23317b.handle, parseInt(_0x3f6cff), 0);
    mp.game.invoke("0xADF692B254977C0C", _0x23317b.handle, parseInt(_0x3f6cff), true);
  }
});
mp.events.addDataHandler("TrunkOpened", function (_0x37132b, _0x33d6dd, _0x5c5e65) {
  if (_0x37132b && _0x37132b.type === "vehicle") {
    if (_0x33d6dd == 1) {
      _0x37132b.setDoorOpen(5, false, false);
    } else {
      _0x37132b.setDoorShut(5, true);
    }
  }
});
global.SetPlayerInvisible = function (_0x5edbd2, _0x51d5be) {
  if (_0x5edbd2 && _0x5edbd2.type === "player") {
    if (_0x51d5be) {
      _0x5edbd2.setAlpha(0);
      _0x5edbd2.setInvincible(true);
      _0x5edbd2.setVisible(false, false);
      _0x5edbd2.is_in_fly = true;
      if (_0x5edbd2.customPet && mp.objects.exists(_0x5edbd2.customPet)) {
        _0x5edbd2.customPet.setAlpha(0);
        _0x5edbd2.customPet.setVisible(false, false);
      }
    } else {
      if (_0x5edbd2.getVariable("AT_ADMIN")) {
        _0x5edbd2.setAlpha(100);
      } else {
        _0x5edbd2.setAlpha(255);
      }
      _0x5edbd2.setInvincible(false);
      _0x5edbd2.setVisible(true, false);
      _0x5edbd2.is_in_fly = undefined;
      if (_0x5edbd2.customPet && mp.objects.exists(_0x5edbd2.customPet)) {
        _0x5edbd2.customPet.setAlpha(255);
        _0x5edbd2.customPet.setVisible(true, false);
      }
    }
  }
};
mp.events.addDataHandler("INVISIBLE", function (_0x4526fa, _0x492db0, _0x5e09b7) {
  SetPlayerInvisible(_0x4526fa, _0x492db0);
});
mp.events.addDataHandler("walkstyle", function (_0x13a556, _0x4cba5a, _0x1ca7a7) {
  if (_0x13a556 && _0x13a556.type === "player" && _0x4cba5a != null) {
    ChangeWalkStyle(_0x13a556, _0x4cba5a);
  }
});
mp.events.addDataHandler("mood", function (_0x33ebbc, _0x38aa5d, _0x7d6405) {
  if (_0x33ebbc && _0x33ebbc.type === "player" && _0x38aa5d != null) {
    ChangeMood(_0x33ebbc, _0x38aa5d);
  }
});
mp.events.addDataHandler("AT_ADMIN", function (_0x5080ef, _0x6d757e, _0x5d8e10) {
  if (_0x5080ef && _0x5080ef.type === "player") {
    if (_0x6d757e) {
      _0x5080ef.setAlpha(100);
    } else {
      _0x5080ef.setAlpha(255);
    }
  }
});
mp.events.add("playerQuit", function (_0x455122, _0x2072de, _0x486b50) {
  try {
    if (mp.players.exists(_0x455122) && (attachedObjects[_0x455122.remoteId] != null && (attachedObjects[_0x455122.remoteId].destroy(), attachedObjects[_0x455122.remoteId] = undefined), attachedObjects2[_0x455122.remoteId] != null && (attachedObjects2[_0x455122.remoteId].destroy(), attachedObjects2[_0x455122.remoteId] = undefined), attachedObjects3[_0x455122.remoteId] != null && (attachedObjects3[_0x455122.remoteId].destroy(), attachedObjects3[_0x455122.remoteId] = undefined), attachedObjects4[_0x455122.remoteId] != null && (attachedObjects4[_0x455122.remoteId].destroy(), attachedObjects4[_0x455122.remoteId] = undefined), _0x455122.real_id && _0x455122.getAlpha() != 0)) {
      let _0x37aa78 = mp.labels.new(TranslateText("Игрок {0} вышел из игры", _0x455122.real_id), _0x455122.position, {
        los: true,
        font: 0,
        drawDistance: 6,
        color: [255, 255, 255, 150],
        dimension: _0x455122.dimension
      });
      let _0x5eaaee = mp.markers.new(32, new mp.Vector3(_0x455122.position.x, _0x455122.position.y, _0x455122.position.z + 0.5), 1, {
        color: [255, 225, 0, 150],
        visible: true,
        dimension: _0x455122.dimension
      });
      setTimeout(() => {
        if (_0x37aa78) {
          _0x37aa78.destroy();
        }
        if (_0x5eaaee) {
          _0x5eaaee.destroy();
        }
      }, 60000);
    }
  } catch (_0x561a1b) {}
});
mp.events.add("entityStreamOut", function (_0x212e24) {
  try {
    if (!_0x212e24 || _0x212e24.type != "player" || _0x212e24 == localplayer) {
      return;
    }
    if (_0x212e24 && mp.players.exists(_0x212e24)) {
      if (attachedObjects[_0x212e24.remoteId] != null) {
        attachedObjects[_0x212e24.remoteId].destroy();
        attachedObjects[_0x212e24.remoteId] = undefined;
      }
      if (attachedObjects2[_0x212e24.remoteId] != null) {
        attachedObjects2[_0x212e24.remoteId].destroy();
        attachedObjects2[_0x212e24.remoteId] = undefined;
      }
      if (attachedObjects3[_0x212e24.remoteId] != null) {
        attachedObjects3[_0x212e24.remoteId].destroy();
        attachedObjects3[_0x212e24.remoteId] = undefined;
      }
      if (attachedObjects4[_0x212e24.remoteId] != null) {
        attachedObjects4[_0x212e24.remoteId].destroy();
        attachedObjects4[_0x212e24.remoteId] = undefined;
      }
      if (_0x212e24.blip !== 0) {
        _0x212e24.destroyBlip();
      }
      destroyCustomPet(_0x212e24, false);
    }
  } catch (_0x16369d) {}
});
global.is_admin = false;
const ADMIN_HUD_NEARBY_UPDATE_MS = 1000;
let adminHudNearbyInterval;
let adminHudNearbyLastPayload = "";
function startAdminHudNearybyPlayers() {
  if (adminHudNearbyInterval === undefined && !mp.storage.data.disableAdminHudNearbyPlayers) {
    pushAdminHudNearbyPlayers(true);
    adminHudNearbyInterval = setInterval(() => pushAdminHudNearbyPlayers(), 1000);
  }
}
function stopAdminHudNearbyPlayers() {
  if (adminHudNearbyInterval !== undefined) {
    clearInterval(adminHudNearbyInterval);
    adminHudNearbyInterval = undefined;
  }
  adminHudNearbyLastPayload = "";
  if (typeof main_browser != "undefined" && main_browser) {
    main_browser.execute("APPS.state.hud.nearbyPlayers = [];");
  }
}
function pushAdminHudNearbyPlayers(_0x538292 = false) {
  if (!is_admin) {
    return stopAdminHudNearbyPlayers();
  }
  const _0x470941 = collectAdminHudNearbyPlayers();
  const _0x2558e3 = JSON.stringify(_0x470941);
  if (_0x538292 || _0x2558e3 !== adminHudNearbyLastPayload) {
    adminHudNearbyLastPayload = _0x2558e3;
    main_browser.execute("APPS.state.hud.nearbyPlayers = " + _0x2558e3 + ";");
  }
}
function collectAdminHudNearbyPlayers() {
  if (!localplayer || localplayer.handle === 0) {
    return [];
  }
  const _0x49d436 = localplayer.dimension;
  const _0x27d444 = localplayer.position;
  const _0x3a478a = [];
  mp.players.forEachInStreamRange(_0x2bba63 => {
    if (!_0x2bba63 || _0x2bba63 === localplayer) {
      return;
    }
    if (!mp.players.exists(_0x2bba63)) {
      return;
    }
    if (_0x2bba63.handle === 0) {
      return;
    }
    if (_0x2bba63.dimension !== _0x49d436) {
      return;
    }
    if (_0x2bba63.getAlpha && _0x2bba63.getAlpha() === 0) {
      return;
    }
    const _0x543ca3 = mp.Vector3.Distance2D(_0x2bba63.position, new mp.Vector3(_0x27d444.x, _0x27d444.y, _0x27d444.z));
    _0x3a478a.push({
      pid: _0x2bba63.real_id || 0,
      name: _0x2bba63.name,
      distance: _0x543ca3
    });
  });
  _0x3a478a.sort((_0x440632, _0x41ffff) => _0x440632.distance !== _0x41ffff.distance ? _0x440632.distance - _0x41ffff.distance : _0x440632.pid !== _0x41ffff.pid ? _0x440632.pid - _0x41ffff.pid : _0x440632.remoteId - _0x41ffff.remoteId);
  return _0x3a478a.map(({
    pid: _0x53b987,
    name: _0x1829e5
  }) => ({
    pid: _0x53b987,
    name: _0x1829e5
  }));
}
function disablePlayerRagdoll(_0x23fee3) {
  if (_0x23fee3.ped ?? _0x23fee3.handle) {
    _0x23fee3.setCanRagdoll(false);
    _0x23fee3.setCanRagdollFromPlayerImpact(false);
    _0x23fee3.setRagdollOnCollision(false);
    _0x23fee3.setDiesWhenInjured(false);
    _0x23fee3.setSuffersCriticalHits(false);
    _0x23fee3.setRagdollFlag(1);
    _0x23fee3.setRagdollFlag(2);
    _0x23fee3.setRagdollFlag(4);
    if (_0x23fee3.isRagdoll()) {
      _0x23fee3.clearTasksImmediately();
      _0x23fee3.resetRagdollTimer();
    }
  }
}
mp.events.add("Client_SwitchAdminHudNearbyPlayers", function () {
  if (is_admin) {
    if (mp.storage.data.disableAdminHudNearbyPlayers) {
      mp.storage.data.disableAdminHudNearbyPlayers = false;
    } else {
      mp.storage.data.disableAdminHudNearbyPlayers = true;
    }
    mp.storage.flush();
    if (adminHudNearbyInterval !== undefined) {
      stopAdminHudNearbyPlayers();
    } else {
      startAdminHudNearybyPlayers();
    }
  }
});
mp.events.add("Client_SetAdminSecret", function (_0x3b46b3) {
  if (_0x3b46b3 == 1) {
    mp.events.callRemote("Server_CheckIfPlayerAdmin");
    startAdminHudNearybyPlayers();
  } else {
    stopAdminHudNearbyPlayers();
  }
  is_admin = _0x3b46b3;
});
global.is_admin_center = false;
mp.events.add("Client_AdminHelpShow", function (_0x127f58) {
  is_admin_center = true;
  if (_0x127f58) {
    main_browser.execute("APPS.state.hud.is_admin = true;");
  } else {
    main_browser.execute("APPS.state.hud.is_admin = false;");
  }
});
mp.events.add("Client_SetAtAdmin", function (_0x3efc23, _0x184a07) {
  if (_0x3efc23.type === "player" && _0x3efc23 && mp.players.exists(_0x3efc23)) {
    if (_0x184a07 == 1) {
      _0x3efc23.setAlpha(100);
    } else {
      _0x3efc23.setAlpha(255);
    }
  }
});
mp.events.addDataHandler("Over_Clothes", (_0xbbfeb0, _0x29558e) => {
  try {
    if (_0xbbfeb0.type === "player" && _0xbbfeb0.handle !== 0 && _0x29558e !== undefined && _0x29558e) {
      _0xbbfeb0.setPropIndex(0, _0x29558e[0], _0x29558e[1], true);
    }
  } catch (_0x5c7e9a) {
    mp.gui.chat.push("Over_Clothes.error: " + _0x5c7e9a);
  }
});
mp.events.add("entityStreamIn", function (_0x358209) {
  try {
    if (_0x358209 === null) {
      return;
    }
    if (_0x358209.type === "ped" && loggedin) {
      if (cry_bot_quest && _0x358209 == cry_bot_quest) {
        play_animation(cry_bot_quest, "misschinese2_crystalmaze", "2int_loop_a_taotranslator", 1, 1);
      } else if (skater_quest && _0x358209 == skater_quest) {
        play_animation(skater_quest, "amb@world_human_leaning@male@wall@back@foot_up@base", "base", 1, 1);
      } else if (skater_quest2 && _0x358209 == skater_quest2) {
        play_animation(skater_quest2, "missfbi3_party_b", "talk_inside_loop_male1", 1, 1);
      } else if (bunker_npc[0] && _0x358209 == bunker_npc[0]) {
        play_animation(bunker_npc[0], "anim@amb@machinery@lathe@", "unload_01_amy_skater_01", 1, 1);
      } else if (bunker_npc[1] && _0x358209 == bunker_npc[1]) {
        play_animation(bunker_npc[1], "anim@amb@machinery@lathe@", "adjust_handle_amy_skater_01", 1, 1);
      } else if (bunker_npc[2] && _0x358209 == bunker_npc[2]) {
        play_animation(bunker_npc[2], "anim@amb@machinery@lathe@", "clean_surface_01_amy_skater_01", 1, 1);
      } else if (bunker_npc[3] && _0x358209 == bunker_npc[3]) {
        play_animation(bunker_npc[3], "anim@amb@machinery@lathe@", "look_low_amy_skater_01", 1, 1);
      } else if (bunker_npc[4] && _0x358209 == bunker_npc[4]) {
        play_animation(bunker_npc[4], "anim@amb@machinery@lathe@", "clean_surface_02_amy_skater_01", 1, 1);
      } else if (bunker_npc[5] && _0x358209 == bunker_npc[5]) {
        play_animation(bunker_npc[5], "anim@amb@machinery@lathe@", "load_01_amy_skater_01", 1, 1);
      } else if (bunker_npc[6] && _0x358209 == bunker_npc[6]) {
        play_animation(bunker_npc[6], "anim@amb@machinery@lathe@", "unload_02_amy_skater_01", 1, 1);
      } else if (bunker_npc[7] && _0x358209 == bunker_npc[7]) {
        play_animation(bunker_npc[7], "anim@amb@machinery@lathe@", "clean_surface_03_amy_skater_01", 1, 1);
      } else if (bunker_npc[8] && _0x358209 == bunker_npc[8]) {
        play_animation(bunker_npc[8], "anim@amb@machinery@lathe@", "clean_surface_03_amy_skater_01", 1, 1);
      } else if (bunker_npc[9] && _0x358209 == bunker_npc[9]) {
        play_animation(bunker_npc[9], "anim@amb@machinery@lathe@", "clean_surface_01_amy_skater_01", 1, 1);
      } else if (bunker_npc[10] && _0x358209 == bunker_npc[10]) {
        play_animation(bunker_npc[10], "anim@amb@machinery@lathe@", "unload_01_amy_skater_01", 1, 1);
      } else if (bunker_npc[11] && _0x358209 == bunker_npc[11]) {
        play_animation(bunker_npc[11], "anim@amb@machinery@lathe@", "clean_surface_02_amy_skater_01", 1, 1);
      } else if (bunker_npc[12] && _0x358209 == bunker_npc[12]) {
        play_animation(bunker_npc[12], "anim@amb@machinery@lathe@", "look_low_amy_skater_01", 1, 1);
      } else if (bunker_npc[13] && _0x358209 == bunker_npc[13]) {
        play_animation(bunker_npc[13], "anim@amb@machinery@lathe@", "adjust_handle_amy_skater_01", 1, 1);
      }
      if (_0x358209.model == 1986368169) {
        _0x358209.setComponentVariation(10, 0, 0, 0);
        _0x358209.setComponentVariation(7, 0, 0, 0);
      }
    }
    if (_0x358209.type !== "player") {
      return;
    }
    if (_0x358209 && mp.players.exists(_0x358209)) {
      mp.game.invoke("0xE861D0B05C7662B8", _0x358209.ped ?? _0x358209.handle, false, 0);
      disablePlayerRagdoll(_0x358209);
      _0x358209.setLodDist(mp.storage.data.player_lod_distance);
      if (_0x358209.hasVariable("walkstyle")) {
        ChangeWalkStyle(_0x358209, _0x358209.getVariable("walkstyle"));
      }
      if (_0x358209.hasVariable("mood")) {
        ChangeMood(_0x358209, _0x358209.getVariable("mood"));
      }
      if (_0x358209.hasVariable("Over_Clothes")) {
        const _0x2c1570 = _0x358209.getVariable("Over_Clothes");
        if (_0x2c1570 !== undefined && _0x2c1570) {
          _0x358209.setPropIndex(0, _0x2c1570[0], _0x2c1570[1], true);
        }
      }
      if (mp.storage.data.other_backpack_show == 0 && _0x358209.getDrawableVariation(5) > 0) {
        _0x358209.last_backpack = _0x358209.getDrawableVariation(5);
        _0x358209.last_backpack_texture = _0x358209.getTextureVariation(5);
        _0x358209.setComponentVariation(5, 0, 0, 0);
      }
      if (_0x358209.hasVariable("In_Trunk")) {
        const _0xe4f38a = _0x358209.getVariable("In_Trunk");
        if (_0xe4f38a != null) {
          const _0x474a6a = mp.vehicles.atRemoteId(parseInt(_0xe4f38a));
          if (_0x474a6a && mp.vehicles.exists(_0x474a6a)) {
            setTimeout(() => {
              if (mp.players.exists(_0x358209) && mp.vehicles.exists(_0x474a6a)) {
                play_animation(_0x358209, "missprologueig_2", "idle_on_floor_gaurd", 1, 1);
                AttachPlayerToTrunk(_0x358209, _0x474a6a);
              }
            }, 500);
          }
        }
      }
      _0x358209.real_id = _0x358209.getVariable("REMOTE_ID");
      _0x358209.family = _0x358209.getVariable("Family");
      _0x358209.member = _0x358209.getVariable("Member");
      _0x358209.in_phone_talk &&= false;
      if (_0x358209.getVariable("INVISIBLE") == 1) {
        SetPlayerInvisible(_0x358209, true);
      } else if (_0x358209.getVariable("AT_ADMIN") == 1) {
        if (_0x358209.is_in_fly) {
          SetPlayerInvisible(_0x358209, false);
        } else {
          _0x358209.setAlpha(100);
        }
      } else if (_0x358209.is_in_fly) {
        SetPlayerInvisible(_0x358209, false);
      } else {
        _0x358209.setAlpha(255);
      }
      if (curr_lang != "ru") {
        if (baseLang != "rs" && !test_mode) {
          _0x358209.dead_state = _0x358209.getVariable("Dead");
        }
        if (_0x358209.dead_state == 1) {
          play_animation(_0x358209, "missfinale_a_ig_1", "trevor_idle_b_pt", 1, 2);
        }
      }
      LoadTattoos(_0x358209, true);
      if (!!_0x358209.customPetIndex && (!_0x358209.customPet || !mp.objects.exists(_0x358209.customPet))) {
        spawnCustomPet(_0x358209);
      }
    }
  } catch (_0xf4f06e) {
    mp.gui.chat.push("stream.error: " + _0xf4f06e);
  }
});
const hairDecalsList = [[{
  ID: 0,
  Collection: "mpbeach_overlays",
  Overlay: "FM_Hair_Fuzz"
}, {
  ID: 1,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_001"
}, {
  ID: 2,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_002"
}, {
  ID: 3,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_003"
}, {
  ID: 4,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_004"
}, {
  ID: 5,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_005"
}, {
  ID: 6,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_006"
}, {
  ID: 7,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_007"
}, {
  ID: 8,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_008"
}, {
  ID: 9,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_009"
}, {
  ID: 10,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_013"
}, {
  ID: 11,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_002"
}, {
  ID: 12,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_011"
}, {
  ID: 13,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_012"
}, {
  ID: 14,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_014"
}, {
  ID: 15,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_015"
}, {
  ID: 16,
  Collection: "multiplayer_overlays",
  Overlay: "NGBea_M_Hair_000"
}, {
  ID: 17,
  Collection: "multiplayer_overlays",
  Overlay: "NGBea_M_Hair_001"
}, {
  ID: 18,
  Collection: "multiplayer_overlays",
  Overlay: "NGBus_M_Hair_000"
}, {
  ID: 19,
  Collection: "multiplayer_overlays",
  Overlay: "NGBus_M_Hair_001"
}, {
  ID: 20,
  Collection: "multiplayer_overlays",
  Overlay: "NGHip_M_Hair_000"
}, {
  ID: 21,
  Collection: "multiplayer_overlays",
  Overlay: "NGHip_M_Hair_001"
}, {
  ID: 22,
  Collection: "multiplayer_overlays",
  Overlay: "NGInd_M_Hair_000"
}, {
  ID: 24,
  Collection: "mplowrider_overlays",
  Overlay: "LR_M_Hair_000"
}, {
  ID: 25,
  Collection: "mplowrider_overlays",
  Overlay: "LR_M_Hair_001"
}, {
  ID: 26,
  Collection: "mplowrider_overlays",
  Overlay: "LR_M_Hair_002"
}, {
  ID: 27,
  Collection: "mplowrider_overlays",
  Overlay: "LR_M_Hair_003"
}, {
  ID: 28,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_M_Hair_004"
}, {
  ID: 29,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_M_Hair_005"
}, {
  ID: 30,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_M_Hair_006"
}, {
  ID: 31,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_000_M"
}, {
  ID: 32,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_001_M"
}, {
  ID: 33,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_002_M"
}, {
  ID: 34,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_003_M"
}, {
  ID: 35,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_004_M"
}, {
  ID: 36,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_005_M"
}, {
  ID: 72,
  Collection: "mpgunrunning_overlays",
  Overlay: "MP_Gunrunning_Hair_M_000_M"
}, {
  ID: 73,
  Collection: "mpgunrunning_overlays",
  Overlay: "MP_Gunrunning_Hair_M_001_M"
}], [{
  ID: 0,
  Collection: "mpbeach_overlays",
  Overlay: "FM_Hair_Fuzz"
}, {
  ID: 1,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_001"
}, {
  ID: 2,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_002"
}, {
  ID: 3,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_003"
}, {
  ID: 4,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_004"
}, {
  ID: 5,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_005"
}, {
  ID: 6,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_006"
}, {
  ID: 7,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_007"
}, {
  ID: 8,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_008"
}, {
  ID: 9,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_009"
}, {
  ID: 10,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_010"
}, {
  ID: 11,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_011"
}, {
  ID: 12,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_012"
}, {
  ID: 13,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_013"
}, {
  ID: 14,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_014"
}, {
  ID: 15,
  Collection: "multiplayer_overlays",
  Overlay: "NG_M_Hair_015"
}, {
  ID: 16,
  Collection: "multiplayer_overlays",
  Overlay: "NGBea_F_Hair_000"
}, {
  ID: 17,
  Collection: "multiplayer_overlays",
  Overlay: "NGBea_F_Hair_001"
}, {
  ID: 18,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_007"
}, {
  ID: 19,
  Collection: "multiplayer_overlays",
  Overlay: "NGBus_F_Hair_000"
}, {
  ID: 20,
  Collection: "multiplayer_overlays",
  Overlay: "NGBus_F_Hair_001"
}, {
  ID: 21,
  Collection: "multiplayer_overlays",
  Overlay: "NGBea_F_Hair_001"
}, {
  ID: 22,
  Collection: "multiplayer_overlays",
  Overlay: "NGHip_F_Hair_000"
}, {
  ID: 23,
  Collection: "multiplayer_overlays",
  Overlay: "NGInd_F_Hair_000"
}, {
  ID: 25,
  Collection: "mplowrider_overlays",
  Overlay: "LR_F_Hair_000"
}, {
  ID: 26,
  Collection: "mplowrider_overlays",
  Overlay: "LR_F_Hair_001"
}, {
  ID: 27,
  Collection: "mplowrider_overlays",
  Overlay: "LR_F_Hair_002"
}, {
  ID: 28,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_F_Hair_003"
}, {
  ID: 29,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_F_Hair_003"
}, {
  ID: 30,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_F_Hair_004"
}, {
  ID: 31,
  Collection: "mplowrider2_overlays",
  Overlay: "LR_F_Hair_006"
}, {
  ID: 32,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_000_F"
}, {
  ID: 33,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_001_F"
}, {
  ID: 34,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_002_F"
}, {
  ID: 35,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_003_F"
}, {
  ID: 36,
  Collection: "multiplayer_overlays",
  Overlay: "NG_F_Hair_003"
}, {
  ID: 37,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_006_F"
}, {
  ID: 38,
  Collection: "mpbiker_overlays",
  Overlay: "MP_Biker_Hair_004_F"
}, {
  ID: 76,
  Collection: "mpgunrunning_overlays",
  Overlay: "MP_Gunrunning_Hair_F_000_F"
}, {
  ID: 77,
  Collection: "mpgunrunning_overlays",
  Overlay: "MP_Gunrunning_Hair_F_001_F"
}]];
global.LoadHairTattoo = function (_0x176b22, _0x335852) {
  if (_0x176b22 && mp.players.exists(_0x176b22) && _0x335852 != -1) {
    if (_0x176b22.type !== "player") {
      return;
    }
    let _0x4bcd0c = true;
    if (_0x176b22.model != 1885233650) {
      _0x4bcd0c = false;
    }
    if (_0x4bcd0c) {
      _0x176b22.setDecoration(mp.game.joaat(hairDecalsList[0][_0x335852].Collection), mp.game.joaat(hairDecalsList[0][_0x335852].Overlay));
    } else {
      _0x176b22.setDecoration(mp.game.joaat(hairDecalsList[1][_0x335852].Collection), mp.game.joaat(hairDecalsList[1][_0x335852].Overlay));
    }
  }
};
global.LoadTattoos = function (_0x477d1a, _0x4a440c = false) {
  if (_0x477d1a && mp.players.exists(_0x477d1a)) {
    if (_0x477d1a.type !== "player") {
      return;
    }
    const _0x321499 = _0x477d1a.getVariable("Tattoos");
    const _0x5962a8 = _0x477d1a.getVariable("Tattoos2");
    const _0x5deb30 = _0x477d1a.getVariable("Tattoos3");
    if (_0x4a440c == 1) {
      _0x477d1a.clearDecorations();
    }
    let _0x5a1bc0 = true;
    if (_0x477d1a.model != 1885233650) {
      _0x5a1bc0 = false;
    }
    if (_0x321499) {
      for (let _0x1f2052 = 0; _0x1f2052 < _0x321499.length; _0x1f2052++) {
        if (_0x321499[_0x1f2052] != -1) {
          let _0x790041 = _0x5a1bc0 ? tattoos_json[_0x1f2052][_0x321499[_0x1f2052]].HashNameMale : tattoos_json[_0x1f2052][_0x321499[_0x1f2052]].HashNameFemale;
          _0x477d1a.setDecoration(mp.game.joaat(tattoos_json[_0x1f2052][_0x321499[_0x1f2052]].collection), mp.game.joaat(_0x790041));
        }
      }
    }
    if (_0x5962a8) {
      for (let _0x5a8130 = 0; _0x5a8130 < _0x5962a8.length; _0x5a8130++) {
        if (_0x5962a8[_0x5a8130] != -1) {
          let _0x126e81 = _0x5a1bc0 ? tattoos_json[_0x5a8130][_0x5962a8[_0x5a8130]].HashNameMale : tattoos_json[_0x5a8130][_0x5962a8[_0x5a8130]].HashNameFemale;
          _0x477d1a.setDecoration(mp.game.joaat(tattoos_json[_0x5a8130][_0x5962a8[_0x5a8130]].collection), mp.game.joaat(_0x126e81));
        }
      }
    }
    if (_0x5deb30) {
      for (let _0x316337 = 0; _0x316337 < _0x5deb30.length; _0x316337++) {
        if (_0x5deb30[_0x316337] != -1) {
          let _0xabe018 = _0x5a1bc0 ? tattoos_json[_0x316337][_0x5deb30[_0x316337]].HashNameMale : tattoos_json[_0x316337][_0x5deb30[_0x316337]].HashNameFemale;
          _0x477d1a.setDecoration(mp.game.joaat(tattoos_json[_0x316337][_0x5deb30[_0x316337]].collection), mp.game.joaat(_0xabe018));
        }
      }
    }
    if (_0x4a440c == 1 && _0x477d1a.hasVariable("HairTattoo")) {
      const _0x4c338f = _0x477d1a.getVariable("HairTattoo");
      if (_0x4c338f != null) {
        LoadHairTattoo(_0x477d1a, _0x4c338f);
      }
    }
  }
};
mp.events.add("playerSpawn", () => {
  const _0xbc1c56 = mp.players.local;
  if (_0xbc1c56 && mp.players.exists(_0xbc1c56)) {
    LoadTattoos(_0xbc1c56, true);
  }
});
for (const e of ["Tattoos", "Tattoos2", "Tattoos3", "HairTattoo"]) {
  mp.events.addDataHandler(e, _0xad6b25 => {
    if (_0xad6b25 && mp.players.exists(_0xad6b25) && _0xad6b25.handle) {
      if (InTattooShop && _0xad6b25 === mp.players.local) {
        mp.events.call("Client_RefreshTattooAfterBuy");
      } else {
        LoadTattoos(_0xad6b25, true);
      }
    }
  });
}
mp.events.add("Client_LoadEntityTattos", _0x2ed55c => {
  const _0x12bce1 = mp.players.atRemoteId(parseInt(_0x2ed55c));
  if (_0x12bce1 && mp.players.exists(_0x12bce1)) {
    if (!InTattooShop || _0x12bce1 !== mp.players.local) {
      LoadTattoos(_0x12bce1, true);
    }
  }
});
global.play_animation = function (_0x25e1be, _0x40a0b3, _0x500651, _0x3c95d3, _0x51cef6, _0x58afe8 = false, _0x31588e = false, _0x420d8 = false, _0x123d9c = 0) {
  try {
    mp.game.streaming.requestAnimDict(_0x40a0b3);
    new Promise(() => {
      const _0x5bb783 = setInterval(() => {
        if (mp.game.streaming.hasAnimDictLoaded(_0x40a0b3)) {
          try {
            if (_0x25e1be) {
              _0x25e1be.taskPlayAnim(_0x40a0b3, _0x500651, _0x3c95d3, 0, -1, _0x51cef6, 0, _0x58afe8, _0x31588e, _0x420d8);
              if (_0x123d9c) {
                mp.game.entity.setAnimCurrentTime(_0x25e1be, _0x40a0b3, _0x500651, _0x123d9c);
              }
            }
            if (_0x5bb783) {
              clearInterval(_0x5bb783);
            }
          } catch (_0x5752a8) {
            if (_0x5bb783) {
              clearInterval(_0x5bb783);
            }
          }
        }
      }, 100);
    });
  } catch (_0x108be3) {
    mp.gui.chat.push("anim.error: " + _0x108be3);
  }
};
global.play_animation2 = function (_0x124423, _0xde63d9, _0x176c55, _0x2462e9, _0x54b1f1, _0x4c2b2d, _0x4b10f3, _0x3b88e7, _0x2929bc = false, _0x5b48bc = false, _0x36b7de = false, _0x928763 = 0) {
  try {
    mp.game.streaming.requestAnimDict(_0xde63d9);
    new Promise(() => {
      const _0x562566 = setInterval(() => {
        if (mp.game.streaming.hasAnimDictLoaded(_0xde63d9)) {
          try {
            if (_0x124423) {
              _0x124423.taskPlayAnim(_0xde63d9, _0x176c55, _0x2462e9, _0x54b1f1, _0x4c2b2d, _0x4b10f3, _0x3b88e7, _0x2929bc, _0x5b48bc, _0x36b7de);
              if (_0x928763) {
                mp.game.entity.setAnimCurrentTime(_0x124423, _0xde63d9, _0x176c55, _0x928763);
              }
            }
            if (_0x562566) {
              clearInterval(_0x562566);
            }
          } catch (_0x33a686) {
            if (_0x562566) {
              clearInterval(_0x562566);
            }
          }
        }
      }, 100);
    });
  } catch (_0x2cf5e7) {
    mp.gui.chat.push("anim2.error: " + _0x2cf5e7);
  }
};
mp.events.add("play_anim", (_0x29a065, _0x18bfdb, _0x2b9540, _0xb6c8f2, _0x824992, _0x27f8b2 = false, _0xa18cdc = false, _0x3da784 = false, _0x31c557 = 0, _0x3b74c4 = false) => {
  try {
    play_animation(_0x29a065, _0x18bfdb, _0x2b9540, _0xb6c8f2, _0x824992, _0x27f8b2, _0xa18cdc, _0x3da784, _0x31c557);
  } catch (_0x34ccef) {
    mp.gui.chat.push("play_anim.error: " + _0x34ccef);
  }
});
global.stop_animation = function (_0x167c01, _0x247a3b, _0x2473b2) {
  try {
    if (mp.players.exists(_0x167c01)) {
      _0x167c01.stopAnimTask(_0x247a3b, _0x2473b2, 3);
      if (_0x167c01.isPlayingAnim(_0x247a3b, _0x2473b2, 3) == 0) {
        _0x167c01.clearTasksImmediately();
        _0x167c01.clearTasks();
      }
    }
  } catch (_0x101d73) {
    mp.gui.chat.push("stop_anim.error", _0x101d73);
  }
};
mp.events.add("Client_StopPlayerAnimation", (_0x1ef0b2, _0x2d552d, _0x5c2f95) => {
  stop_animation(_0x1ef0b2, _0x2d552d, _0x5c2f95);
});
const CUSTOM_PET_DATA = [{
  item: 6444,
  object: "ws_fashion_anim_sl_water",
  attachmentData: {
    boneId: 10706,
    px: 0.15,
    py: -0.1,
    pz: 0.15,
    rx: 0,
    ry: 0,
    rz: 180
  }
}, {
  item: 6445,
  object: "ws_fashion_anim_sl_fire",
  attachmentData: {
    boneId: 64729,
    px: 0.15,
    py: 0,
    pz: -0.18,
    rx: 0,
    ry: 180,
    rz: 180
  }
}, {
  item: 6806,
  object: "vel_cartoon_ghost",
  attachmentData: {
    boneId: 64729,
    px: 0.15,
    py: 0,
    pz: -0.18,
    rx: 0,
    ry: 180,
    rz: 180
  }
}, {
  item: 7004,
  object: "AlmondSplash",
  attachmentData: {
    boneId: 64729,
    px: 0.1,
    py: 0,
    pz: -0.12,
    rx: 180,
    ry: 0,
    rz: 16
  }
}, {
  item: 7084,
  object: "veloxsy_eagle",
  attachmentData: {
    boneId: 64729,
    px: 0.17,
    py: -0.24,
    pz: -0.28,
    rx: 180,
    ry: 13,
    rz: 16
  }
}, {
  item: 7085,
  object: "veloxsy_bat_monster",
  attachmentData: {
    boneId: 24818,
    px: 0.02,
    py: -0.17,
    pz: 0.26,
    rx: 0,
    ry: -90,
    rz: 180
  }
}, {
  item: 7086,
  object: "veloxsy_slime_monster",
  attachmentData: {
    boneId: 31086,
    px: -0.63,
    py: 0.05,
    pz: 0.05,
    rx: 25,
    ry: -94,
    rz: 152
  }
}, {
  item: 7087,
  object: "veloxsy_negativekoala",
  attachmentData: {
    boneId: 64729,
    px: -0.02,
    py: -0.02,
    pz: 0.48,
    rx: -180,
    ry: 3,
    rz: 17
  }
}, {
  item: 7088,
  object: "veloxsy_catsudon",
  attachmentData: {
    boneId: 24818,
    px: 0.35,
    py: -0.28,
    pz: 0.19,
    rx: 23,
    ry: -90,
    rz: -180
  }
}, {
  item: 7321,
  object: "acc_facebook_crown_n2_hks_evo",
  attachmentData: {
    boneId: 31086,
    px: 0.3,
    py: 0,
    pz: 0,
    rx: 0,
    ry: -90,
    rz: -180
  }
}, {
  item: 7322,
  object: "aidenta_carebears_blue",
  attachmentData: {
    boneId: 31086,
    px: 0.31,
    py: 0.05,
    pz: 0,
    rx: 0,
    ry: -87,
    rz: 180
  }
}, {
  item: 7323,
  object: "aidenta_marshmallow_effect",
  attachmentData: {
    boneId: 24818,
    px: -0.12173913,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 0,
    rz: 0
  }
}, {
  item: 7324,
  object: "aidenta_unicorn_tails",
  attachmentData: {
    boneId: 24818,
    px: -0.27,
    py: -0.08695652,
    pz: 0,
    rx: 0,
    ry: -87,
    rz: -166
  }
}, {
  item: 7325,
  object: "aidenta_unicorn_wings",
  attachmentData: {
    boneId: 24818,
    px: 0.04,
    py: -0.08,
    pz: 0,
    rx: 90,
    ry: -2,
    rz: 90
  }
}, {
  item: 7326,
  object: "butterbear_dance",
  attachmentData: {
    boneId: 12844,
    px: 0.17,
    py: 0.03,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7327,
  object: "aidenta_unicorn_effect",
  attachmentData: {
    boneId: 31086,
    px: 0.26,
    py: -0.02,
    pz: 0.02,
    rx: 0,
    ry: 84,
    rz: 0
  }
}, {
  item: 7328,
  object: "bb_hlw01",
  attachmentData: {
    boneId: 24818,
    px: 0.19,
    py: -0.08,
    pz: 0.12,
    rx: 160,
    ry: -127,
    rz: 0
  }
}, {
  item: 7329,
  object: "crowng_blue",
  attachmentData: {
    boneId: 31086,
    px: 0.25,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7330,
  object: "cutebat_blackwhite",
  attachmentData: {
    boneId: 64729,
    px: -0.13913043,
    py: -0.33043478,
    pz: 0.05217391,
    rx: -180,
    ry: -26.60869565,
    rz: -162.7826087
  }
}, {
  item: 7331,
  object: "devil_bunny_7",
  attachmentData: {
    boneId: 57005,
    px: 0.25,
    py: -0.07,
    pz: 0.47,
    rx: -20,
    ry: 62,
    rz: 159
  }
}, {
  item: 7332,
  object: "dx_scarf",
  attachmentData: {
    boneId: 24818,
    px: -0.23,
    py: -0.23,
    pz: 0,
    rx: -8,
    ry: 90,
    rz: 0
  }
}, {
  item: 7333,
  object: "fishsongkran_chic1",
  attachmentData: {
    boneId: 31086,
    px: -0.4,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7334,
  object: "fishsongkran_chic3",
  attachmentData: {
    boneId: 57005,
    px: 0.1217,
    py: -0.0347,
    pz: -0.0347,
    rx: -161.2173,
    ry: 9.391,
    rz: -25.04347
  }
}, {
  item: 7335,
  object: "green_robe3",
  attachmentData: {
    boneId: 24818,
    px: -0.4,
    py: -0.17,
    pz: 0.03,
    rx: 180,
    ry: -90,
    rz: 0
  }
}, {
  item: 7336,
  object: "kaiwhan_bearset_hand_left",
  attachmentData: {
    boneId: 57005,
    px: 0.34,
    py: 0,
    pz: 0.11,
    rx: -180,
    ry: 146,
    rz: 0
  }
}, {
  item: 7337,
  object: "kw_husky_leg_anim",
  attachmentData: {
    boneId: 16335,
    px: 0.03,
    py: 0.04,
    pz: 0.1,
    rx: 0,
    ry: -62,
    rz: 0
  }
}, {
  item: 7338,
  object: "kw_monkeyt_petfour",
  attachmentData: {
    boneId: 16335,
    px: 0.13,
    py: 0.02,
    pz: 0.13,
    rx: -2,
    ry: -80,
    rz: 0
  }
}, {
  item: 7339,
  object: "kw_monkeyt_petthree_anim",
  attachmentData: {
    boneId: 24818,
    px: 0,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7340,
  object: "kw_pigchef_hand_anim",
  attachmentData: {
    boneId: 57005,
    px: 0.13,
    py: 0.22,
    pz: -0.02,
    rx: 6,
    ry: 20,
    rz: -4
  }
}, {
  item: 7341,
  object: "kw_pigchef_petthree_anim",
  attachmentData: {
    boneId: 31086,
    px: 0.17391304,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7342,
  object: "kw_unifennec_tail_anim",
  attachmentData: {
    boneId: 24818,
    px: -0.73043478,
    py: -0.33043478,
    pz: 0,
    rx: -180,
    ry: -90,
    rz: 0
  }
}, {
  item: 7343,
  object: "kw_unifennec_wing_anim",
  attachmentData: {
    boneId: 24818,
    px: 0.03478261,
    py: -0.19130435,
    pz: 0,
    rx: 180,
    ry: -89.2173913,
    rz: 0
  }
}, {
  item: 7344,
  object: "kw_waterpig_petone_anim",
  attachmentData: {
    boneId: 64729,
    px: 0.22608696,
    py: -0.15652174,
    pz: -0.12173913,
    rx: 180,
    ry: 6.26086957,
    rz: -165.91304348
  }
}, {
  item: 7345,
  object: "RINGGOLD",
  attachmentData: {
    boneId: 64112,
    px: 0.3,
    py: 0,
    pz: -0.5,
    rx: 33,
    ry: 66,
    rz: 15
  }
}, {
  item: 7346,
  object: "myhero_b",
  attachmentData: {
    boneId: 28252,
    px: 0.2,
    py: 0,
    pz: 0,
    rx: -92,
    ry: 3,
    rz: 94
  }
}, {
  item: 7347,
  object: "meow_valentine3_rose",
  attachmentData: {
    boneId: 23553,
    px: 0,
    py: 0.03,
    pz: 0,
    rx: 90,
    ry: 0,
    rz: 90
  }
}, {
  item: 7348,
  object: "meow_valentine3_rabbit1",
  attachmentData: {
    boneId: 31086,
    px: 0.19,
    py: 0.01,
    pz: 0,
    rx: -90,
    ry: 0,
    rz: -90
  }
}, {
  item: 7349,
  object: "meow_sk4_seal1",
  attachmentData: {
    boneId: 24817,
    px: 0.25,
    py: -0.24,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7350,
  object: "meow_sk4_gun02",
  attachmentData: {
    boneId: 57005,
    px: 0.15,
    py: 0.04,
    pz: -0.01,
    rx: -3,
    ry: 16,
    rz: 96
  }
}, {
  item: 7351,
  object: "meow_sk4_gun01",
  attachmentData: {
    boneId: 18905,
    px: 0.15,
    py: 0.04,
    pz: 0,
    rx: 13,
    ry: 136,
    rz: 90
  }
}, {
  item: 7352,
  object: "meow_littleduck_01",
  attachmentData: {
    boneId: 31086,
    px: 0,
    py: 0,
    pz: 0.05,
    rx: 180,
    ry: -90,
    rz: 0
  }
}, {
  item: 7376,
  object: "crybaby_colorful_orange",
  attachmentData: {
    boneId: 12844,
    px: 0.16,
    py: 0,
    pz: 0,
    rx: 0,
    ry: 90,
    rz: 0
  }
}, {
  item: 7377,
  object: "kw_eggduck_cheek_anim",
  attachmentData: {
    boneId: 12844,
    px: -0.03,
    py: 0.07,
    pz: -0.07,
    rx: -11,
    ry: 121,
    rz: 0
  }
}];
global.getCustomPetIndex = function (_0x3c102b) {
  return CUSTOM_PET_DATA.findIndex(_0x4a9e35 => _0x4a9e35.item == parseInt(_0x3c102b));
};
global.equipLocalCustomPet = function (_0x4c43a2) {
  _0x4c43a2 = parseInt(_0x4c43a2);
  const _0x1ccb31 = getCustomPetIndex(_0x4c43a2);
  if (_0x1ccb31 != -1) {
    destroyCustomPet(mp.players.local);
    mp.players.local.customPetIndex = _0x1ccb31 + 1;
    spawnCustomPet(mp.players.local);
  }
};
mp.events.add("Client_TryCustomPet", _0x5bec04 => {
  equipLocalCustomPet(_0x5bec04);
  setTimeout(() => {
    destroyCustomPet(mp.players.local);
    mp.events.callRemote("Server_RequestOpenLotteryAfterTry");
  }, 5000);
});
mp.events.add("Client_EquipLocalCustomPet", _0x3a69f3 => {
  equipLocalCustomPet(_0x3a69f3);
});
mp.events.add("Client_UnequipLocalCustomPet", () => {
  destroyCustomPet(mp.players.local);
});
global.spawnCustomPet = function (_0x5a3841) {
  const _0x507d42 = CUSTOM_PET_DATA[_0x5a3841.customPetIndex - 1];
  const _0x299ffb = _0x5a3841.is_in_fly ? 0 : 255;
  _0x5a3841.customPet = mp.objects.new(mp.game.joaat(_0x507d42.object), _0x5a3841.position, {
    rotation: new mp.Vector3(0, 0, 0),
    alpha: _0x299ffb,
    dimension: _0x5a3841.dimension
  });
  if (_0x5a3841.is_in_fly) {
    _0x5a3841.customPet.setVisible(false, false);
  }
  _0x5a3841.customPet.attachTo(_0x5a3841.handle, parseInt(_0x5a3841.getBoneIndex(_0x507d42.attachmentData.boneId)), _0x507d42.attachmentData.px, _0x507d42.attachmentData.py, _0x507d42.attachmentData.pz, _0x507d42.attachmentData.rx, _0x507d42.attachmentData.ry, _0x507d42.attachmentData.rz, true, false, false, false, 0, true);
  setTimeout(() => {
    if (_0x5a3841 && mp.players.exists(_0x5a3841) && _0x5a3841.handle != 0 && _0x5a3841.customPet && mp.objects.exists(_0x5a3841.customPet)) {
      _0x5a3841.customPet.setCollision(false, false);
      _0x5a3841.customPet.attachTo(_0x5a3841.handle, parseInt(_0x5a3841.getBoneIndex(_0x507d42.attachmentData.boneId)), _0x507d42.attachmentData.px, _0x507d42.attachmentData.py, _0x507d42.attachmentData.pz, _0x507d42.attachmentData.rx, _0x507d42.attachmentData.ry, _0x507d42.attachmentData.rz, true, false, false, false, 0, true);
    }
  }, 100);
};
global.destroyCustomPet = function (_0xc6c496, _0x4a1816 = true) {
  if (_0xc6c496 && _0xc6c496.customPet && mp.objects.exists(_0xc6c496.customPet)) {
    _0xc6c496.customPet.destroy();
    if (_0x4a1816) {
      delete _0xc6c496.customPetIndex;
    }
  }
};
mp.events.addDataHandler("customPet", function (_0x4fc273, _0x1f4dc9, _0x5ad5cb) {
  if (_0x4fc273 && _0x4fc273.type === "player" && mp.players.exists(_0x4fc273)) {
    destroyCustomPet(_0x4fc273);
    if ((_0x1f4dc9 = getCustomPetIndex(_0x1f4dc9)) == -1) {
      return;
    }
    _0x4fc273.customPetIndex = _0x1f4dc9 + 1;
    if (_0x4fc273.handle == 0) {
      return;
    }
    if (!CUSTOM_PET_DATA[_0x4fc273.customPetIndex - 1] || !CUSTOM_PET_DATA[_0x4fc273.customPetIndex - 1].item || !CUSTOM_PET_DATA[_0x4fc273.customPetIndex - 1].object || !CUSTOM_PET_DATA[_0x4fc273.customPetIndex - 1].attachmentData) {
      return;
    }
    spawnCustomPet(_0x4fc273);
  }
});