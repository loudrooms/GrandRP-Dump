const allArrestAnimations = [{
  dict: "mp_arresting",
  name: "walk"
}, {
  dict: "mp_arresting",
  name: "idle"
}, {
  dict: "mp_arresting",
  name: "b_uncuff"
}, {
  dict: "anim@move_m@trash",
  name: "run"
}, {
  dict: "mp_arrest_paired",
  name: "crook_p2_back_left"
}, {
  dict: "random@burial",
  name: "untie_player"
}, {
  dict: "missmic2ig_11",
  name: "mic_2_ig_11_intro_p_one"
}, {
  dict: "random@burial",
  name: "untie_ped"
}, {
  dict: "mp_arresting",
  name: "arrest_on_floor_front_right_b"
}];
function stopAllArrestAnimations(_0x5c0b8b) {
  allArrestAnimations.forEach(_0x260aaf => {
    if (_0x5c0b8b.isPlayingAnim(_0x260aaf.dict, _0x260aaf.name, 3)) {
      _0x5c0b8b.stopAnimTask(_0x260aaf.dict, _0x260aaf.name, 3);
    }
  });
}
function immediatelyCuffAnimation(_0x45d4f) {
  const _0x271940 = "mp_arresting";
  const _0xf1dfcb = "idle";
  if (!mp.game.streaming.hasAnimDictLoaded(_0x271940)) {
    mp.game.streaming.requestAnimDict(_0x271940);
    let _0x1d1ae2 = 0;
    while (!mp.game.streaming.hasAnimDictLoaded(_0x271940) && _0x1d1ae2++ < 50) {
      mp.game.wait(0);
    }
  }
  _0x45d4f.taskPlayAnim(_0x271940, _0xf1dfcb, 8, 0, -1, parseInt(51), 0, false, false, false);
  _0x45d4f.setAnimCurrentTime(_0x271940, _0xf1dfcb, 0.98);
  _0x45d4f.setAnimSpeed(_0x271940, _0xf1dfcb, 0);
}
function cuffAnimation(_0x5f3237, _0x50bc05) {
  if (mp.players.exists(_0x5f3237) && mp.players.exists(_0x50bc05)) {
    _0x50bc05.attachTo(_0x5f3237.handle, 11816, 0, 0.65, 0, 0, 0, 0, false, false, false, false, 20, false);
    global.play_animation2(_0x50bc05, "mp_arresting", "b_uncuff", 8, -8, 2000, 33, 0, false, false, false);
    global.play_animation2(_0x5f3237, "mp_arresting", "a_uncuff", 8, -8, 2000, 33, 0, false, false, false);
    setTimeout(() => {
      if (mp.players.exists(_0x50bc05)) {
        _0x50bc05.detach(true, false);
      }
    }, 1800);
    setTimeout(() => {
      if (mp.players.exists(_0x50bc05) && _0x50bc05.cuffed) {
        immediatelyCuffAnimation(_0x50bc05);
      }
    }, 2000);
  }
}
function hardCuffAnimation(_0x538b16, _0x3f8d0e) {
  if (mp.players.exists(_0x538b16) && mp.players.exists(_0x3f8d0e)) {
    _0x538b16.freezePosition(true);
    _0x3f8d0e.attachTo(_0x538b16.handle, 11816, -0.1, 0.45, 0, 0, 0, 20, false, false, false, false, 20, false);
    global.play_animation2(_0x3f8d0e, "mp_arrest_paired", "crook_p2_back_left", 8, -8, 5500, 33, 0, false, false, false);
    global.play_animation2(_0x538b16, "mp_arrest_paired", "cop_p2_back_left", 8, -8, 3400, 33, 0, false, false, false);
    setTimeout(() => {
      if (mp.players.exists(_0x538b16)) {
        _0x538b16.freezePosition(false);
      }
    }, 3000);
    setTimeout(() => {
      if (mp.players.exists(_0x3f8d0e)) {
        _0x3f8d0e.detach(true, false);
        if (_0x3f8d0e.cuffed) {
          immediatelyCuffAnimation(_0x3f8d0e);
        }
      }
    }, 5000);
  }
}
function clearBreakingOutOfCuffs(_0x3b73fd) {
  if (_0x3b73fd == localplayer) {
    stopBreakDoorLockMiniGame();
  }
  if (_0x3b73fd.isPlayingAnim("anim@move_m@prisoner_cuffed_fp", "run", 3)) {
    _0x3b73fd.stopAnimTask("anim@move_m@prisoner_cuffed_fp", "run", 3);
  }
}
function uncuffAnimation(_0xbcdfdb, _0x553e90) {
  if (mp.players.exists(_0xbcdfdb) && mp.players.exists(_0x553e90)) {
    _0x553e90.attachTo(_0xbcdfdb.handle, 11816, 0, 0.65, 0, 0, 0, 0, false, false, false, false, 20, false);
    global.play_animation2(_0x553e90, "mp_arresting", "b_uncuff", 8, -8, 2000, 33, 0, false, false, false);
    global.play_animation2(_0xbcdfdb, "mp_arresting", "a_uncuff", 8, -8, 2000, 33, 0, false, false, false);
    setTimeout(() => {
      if (mp.players.exists(_0x553e90)) {
        _0x553e90.detach(true, false);
      }
    }, 2000);
  }
}
function uncuffFromGroundAnimation(_0xb0eb5c, _0x403c75) {
  if (mp.players.exists(_0xb0eb5c) && mp.players.exists(_0x403c75)) {
    _0xb0eb5c.attachTo(_0x403c75.handle, 11816, -0.5, -0.6, 0, 0, 0, 0, false, false, false, false, 0, false);
    global.play_animation2(_0xb0eb5c, "random@burial", "untie_player", 8, -8, 26000, 0, 0, false, false, false);
    global.play_animation2(_0x403c75, "random@burial", "untie_ped", 8, -8, 22000, 0, 0, false, false, false);
    setTimeout(() => {
      if (mp.players.exists(_0xb0eb5c)) {
        _0xb0eb5c.detach(true, false);
      }
    }, 1000);
  }
}
function uncuffFromFollowAnimation(_0x281a4f, _0x2c8ac2) {
  if (mp.players.exists(_0x281a4f) && mp.players.exists(_0x2c8ac2)) {
    stopFollow(_0x281a4f.remoteId, _0x2c8ac2.remoteId);
    setTimeout(() => {
      uncuffAnimation(_0x281a4f, _0x2c8ac2);
    }, 1000);
  }
}
mp.events.add("Client_Cuff", (_0x3bf60b, _0x2ec128, _0x16c711) => {
  const _0x2ad4a1 = mp.players.atRemoteId(_0x3bf60b);
  const _0x4cc9c7 = mp.players.atRemoteId(_0x2ec128);
  if (!mp.players.exists(_0x2ad4a1)) {
    return;
  }
  if (!mp.players.exists(_0x4cc9c7)) {
    return;
  }
  _0x4cc9c7.cuffed = true;
  let _0xdc7af = 1000;
  if (!_0x4cc9c7.getVariable("Dead")) {
    if (_0x16c711 === "regular") {
      cuffAnimation(_0x2ad4a1, _0x4cc9c7);
    } else if (_0x16c711 === "fromKnockedDown") {
      hardCuffAnimation(_0x2ad4a1, _0x4cc9c7);
      _0xdc7af = 2500;
    }
  }
  setTimeout(() => {
    if (!mp.players.exists(_0x4cc9c7) || !_0x4cc9c7.cuffed) {
      return;
    }
    mp.events.call("Client_attachObject2", _0x4cc9c7.remoteId, "{\"Bone\": 6286, \"Model\": \"p_cs_cuffs_02_s\", \"PosOffset1\": -0.027,\"PosOffset2\": 0.05,\"PosOffset3\": -0.005, \"RotOffset1\": -238, \"RotOffset2\": -0.2, \"RotOffset3\": 252}");
  }, _0xdc7af);
});
mp.events.add("Client_Uncuff", (_0x16866a, _0xff2653, _0x3bda45, _0x456db2) => {
  const _0x5a2f9d = mp.players.atRemoteId(_0xff2653);
  const _0x53def6 = mp.players.atRemoteId(_0x16866a);
  if (!mp.players.exists(_0x5a2f9d)) {
    return;
  }
  _0x5a2f9d.cuffed = false;
  let _0x5842fb = 1000;
  if (_0x3bda45 === "regular") {
    uncuffAnimation(_0x53def6, _0x5a2f9d);
  } else if (_0x3bda45 === "fromGround") {
    uncuffFromGroundAnimation(_0x53def6, _0x5a2f9d);
    _0x5842fb = 3000;
  } else if (_0x3bda45 === "fromFollow") {
    uncuffFromFollowAnimation(_0x53def6, _0x5a2f9d);
  } else if (_0x3bda45 === "force") {
    stopAllArrestAnimations(_0x5a2f9d);
    _0x5842fb = 0;
  }
  if (_0x456db2) {
    clearBreakingOutOfCuffs(_0x5a2f9d);
  }
  setTimeout(() => {
    mp.events.call("Client_detachObject", _0x5a2f9d.remoteId);
  }, _0x5842fb);
});
const ALLOWED_TO_KNOCK_DOWN_MEMBER = [3, 4, 12];
const ALLOWED_TO_KNOCK_WEAPONS = [2725352035, -1569615261];
const getLookingAtEntity = () => {
  const _0x66c4b1 = localplayer.getBoneCoords(0, 0, 0, 0);
  const _0xadac48 = mp.game.graphics.screen2dToWorld3d([res.x / 2, res.y / 2, 14]);
  if (!_0xadac48) {
    return;
  }
  const _0x241cd4 = mp.raycasting.testCapsule(_0x66c4b1, _0xadac48, 0.5, localplayer, 4);
  if (_0x241cd4?.entity?.type !== "player") {
    return;
  }
  if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x241cd4.entity.position.x, _0x241cd4.entity.position.y, _0x241cd4.entity.position.z) > 7) {
    return undefined;
  } else {
    return _0x241cd4.entity;
  }
};
let lockAttackButton = false;
function knockDownAnimation(_0x96f3ec, _0x1bebe0) {
  const _0x20127d = mp.players.atRemoteId(_0x96f3ec);
  const _0x201d6e = mp.players.atRemoteId(_0x1bebe0);
  if (mp.players.exists(_0x20127d) && mp.players.exists(_0x201d6e)) {
    if (_0x201d6e === mp.players.local) {
      global.isLocalPlayerKnockedDown = true;
      setTimeout(() => global.isLocalPlayerKnockedDown = false, 5900);
    }
    global.play_animation2(_0x20127d, "missmic2ig_11", "mic_2_ig_11_intro_goon", 8, -8, 3000, 0, 0);
    global.play_animation2(_0x201d6e, "missmic2ig_11", "mic_2_ig_11_intro_p_one", 8, -8, 3000, 0, 0);
    _0x201d6e.attachTo(_0x20127d.handle, 11816, 0.25, 0.5, 0, 0.5, 0.5, 180, false, false, false, false, 2, false);
    setTimeout(() => {
      if (mp.players.exists(_0x201d6e)) {
        _0x201d6e.detach(true, false);
      }
    }, 2000);
    setTimeout(() => {
      if (mp.players.exists(_0x201d6e)) {
        _0x201d6e.setToRagdoll(3000, 3000, 0, false, false, false);
      }
    }, 2900);
  }
}
function putOnGroundAnimation(_0x56bb82, _0x864255) {
  const _0x50847a = mp.players.atRemoteId(_0x56bb82);
  const _0x598b9b = mp.players.atRemoteId(_0x864255);
  if (mp.players.exists(_0x50847a) && mp.players.exists(_0x598b9b)) {
    _0x50847a.clearTasks();
    _0x598b9b.attachTo(_0x50847a.handle, 11816, 0, 0.65, 0, 0, 0, 0, false, false, false, false, 20, false);
    global.play_animation2(_0x50847a, "melee@unarmed@streamed_variations", "plyr_stealth_kill_unarmed_non_lethal_a", 8, -8, 2500, 0, 0, false, false, false);
    if (_0x598b9b.isPlayingAnim("mp_arresting", "walk", 3)) {
      _0x598b9b.stopAnimTask("mp_arresting", "walk", 3);
    }
    _0x598b9b.clearTasksImmediately();
    setTimeout(() => {
      if (mp.players.exists(_0x598b9b)) {
        global.play_animation2(_0x598b9b, "random@burial", "untie_ped", 8, -8, -1, 1, 0, false, false, false);
        setTimeout(() => {
          if (mp.players.exists(_0x598b9b)) {
            _0x598b9b.setAnimCurrentTime("random@burial", "untie_ped", 0.2);
            _0x598b9b.setAnimSpeed("random@burial", "untie_ped", 0);
          }
        }, 200);
      }
    }, 300);
    setTimeout(() => {
      if (mp.players.exists(_0x598b9b)) {
        _0x598b9b.detach(true, false);
      }
    }, 1000);
  }
}
function standUpFromGroundAnimation(_0x341596, _0x1cf6e4) {
  const _0x19b23a = mp.players.atRemoteId(_0x341596);
  const _0x5ad261 = mp.players.atRemoteId(_0x1cf6e4);
  if (mp.players.exists(_0x19b23a) && mp.players.exists(_0x5ad261)) {
    _0x19b23a.attachTo(_0x5ad261.handle, 11816, 0.5, -0.5, 0, 0, 0, 0, false, false, false, false, 0, false);
    global.play_animation2(_0x19b23a, "mp_arresting", "arrest_on_floor_front_right_a", 8, -8, 7000, 0, 0, false, false, false);
    global.play_animation2(_0x5ad261, "mp_arresting", "arrest_on_floor_front_right_b", 8, -8, 7000, 0, 0, false, false, false);
    setTimeout(() => {
      if (mp.players.exists(_0x19b23a)) {
        _0x19b23a.detach(true, false);
      }
    }, 6500);
    if (_0x5ad261.cuffed) {
      setTimeout(() => {
        if (mp.players.exists(_0x5ad261) && _0x5ad261.cuffed) {
          immediatelyCuffAnimation(_0x5ad261);
        }
      }, 7000);
    }
  }
}
mp.events.add("click", (_0x57a443, _0xfffdc6, _0x5602f6, _0xd20078, _0x38c0c8, _0x21637e, _0x545f00, _0x185673) => {
  if (!loggedin || _0xd20078 !== "left" || mp.players.local.vehicle || !mp.players.local.isRunning() || !ALLOWED_TO_KNOCK_WEAPONS.includes(currentWeapon())) {
    return;
  }
  if (!mp.game.controls.isControlPressed(0, 21)) {
    return;
  }
  if (!ALLOWED_TO_KNOCK_DOWN_MEMBER.includes(mp.players.local.getVariable("Member"))) {
    return;
  }
  if (mp.players.local.dimension != 0) {
    return;
  }
  const _0x22ab7d = getLookingAtEntity();
  if (_0x22ab7d?.type === "player" && !_0x22ab7d.cuffed) {
    mp.players.local.clearTasksImmediately();
    lockAttackButton = true;
    setTimeout(() => {
      lockAttackButton = false;
    }, 1000);
    mp.events.callRemote("Server_RequestKnockDown", _0x22ab7d.remoteId);
  }
});
global.isLocalPlayerKnockedDown = false;
mp.events.add("Client_KnockDown", knockDownAnimation);
mp.events.add("Client_PutOnGround", putOnGroundAnimation);
mp.events.add("Client_StandUpFromGround", standUpFromGroundAnimation);
const folllowMap = new Map();
function followTick(_0x542695, _0x3915e8, _0x194213, _0x379061) {
  if (!mp.players.exists(_0x542695) || !_0x542695?.handle || !mp.players.exists(_0x3915e8) || !_0x3915e8?.handle) {
    return stopFollow(_0x194213, _0x379061);
  }
  const _0x49a83e = _0x542695.getSpeed();
  if (_0x49a83e >= 2.5) {
    if (!_0x3915e8.isPlayingAnim("anim@move_m@trash", "run", 3)) {
      global.play_animation2(_0x3915e8, "anim@move_m@trash", "run", 8, -8, -1, 1, 0, false, false, false);
    }
  } else if (_0x49a83e > 0.5) {
    if (!_0x3915e8.isPlayingAnim("mp_arresting", "walk", 3)) {
      global.play_animation2(_0x3915e8, "mp_arresting", "walk", 8, -8, -1, 1, 0, false, false, false);
    }
  } else {
    if (_0x3915e8.isPlayingAnim("anim@move_m@trash", "run", 3)) {
      _0x3915e8.stopAnimTask("anim@move_m@trash", "run", 3);
    }
    if (_0x3915e8.isPlayingAnim("mp_arresting", "walk", 3)) {
      _0x3915e8.stopAnimTask("mp_arresting", "walk", 3);
    }
  }
}
function startFollow(_0x28501b, _0x143361, _0x276f7f) {
  const _0x26259b = mp.players.atRemoteId(_0x28501b);
  const _0x2bb8c9 = mp.players.atRemoteId(_0x143361);
  if (!mp.players.exists(_0x2bb8c9) || !_0x2bb8c9?.handle) {
    return;
  }
  if (!mp.players.exists(_0x26259b) || !_0x26259b?.handle) {
    return;
  }
  if (folllowMap.has(_0x143361)) {
    clearInterval(folllowMap.get(_0x143361).interval);
    folllowMap.delete(_0x143361);
  }
  const _0x32b348 = followTick.bind(null, _0x26259b, _0x2bb8c9, _0x26259b.remoteId, _0x143361);
  folllowMap.set(_0x143361, {
    policeman: _0x26259b,
    target: _0x2bb8c9,
    interval: setInterval(_0x32b348, 500)
  });
  if (_0x2bb8c9 === mp.players.local) {
    global.isLocalPlayerIsFollowed = true;
  }
  if (_0x26259b === mp.players.local) {
    global.isLocalPlayerHasActiveFollowTarget = true;
    _0x26259b.setConfigFlag(146, true);
  }
  if (_0x276f7f) {
    clearBreakingOutOfCuffs(_0x2bb8c9);
  }
  _0x2bb8c9.attachTo(_0x26259b.handle, 11816, 0.26, 0.48, 0, 0, 0, 0, false, false, false, false, 2, true);
  global.play_animation2(_0x26259b, "amb@code_human_wander_drinking_fat@beer@male@base", "static", 8, 1, -1, 49, 0, false, false, false);
  if (!_0x2bb8c9.isPlayingAnim("mp_arresting", "idle", 3)) {
    global.play_animation2(_0x2bb8c9, "mp_arresting", "idle", 8, -8, -1, 49, 0, false, false, false);
  }
  _0x32b348();
}
function stopFollow(_0x255800, _0x100eba) {
  const _0x576f21 = mp.players.atRemoteId(_0x255800);
  const _0x49817c = mp.players.atRemoteId(_0x100eba);
  const _0x4066a5 = folllowMap.get(_0x100eba)?.interval;
  if (_0x4066a5) {
    clearInterval(_0x4066a5);
    folllowMap.delete(_0x100eba);
  }
  if (mp.players.exists(_0x49817c)) {
    _0x49817c.detach(true, false);
    if (_0x49817c.isPlayingAnim("mp_arresting", "walk", 3)) {
      _0x49817c.stopAnimTask("mp_arresting", "walk", 3);
    }
    if (_0x49817c.isPlayingAnim("anim@move_m@trash", "run", 3)) {
      _0x49817c.stopAnimTask("anim@move_m@trash", "run", 3);
    }
    if (_0x49817c === mp.players.local) {
      global.isLocalPlayerIsFollowed = false;
    }
    if (_0x49817c.cuffed) {
      immediatelyCuffAnimation(_0x49817c);
    }
  }
  if (mp.players.exists(_0x576f21)) {
    if (_0x576f21.isPlayingAnim("amb@code_human_wander_drinking_fat@beer@male@base", "static", 3)) {
      _0x576f21.stopAnimTask("amb@code_human_wander_drinking_fat@beer@male@base", "static", 3);
    }
    if (_0x576f21 === mp.players.local) {
      global.isLocalPlayerHasActiveFollowTarget = false;
      _0x576f21.setConfigFlag(146, false);
    }
  }
}
function render() {
  if (lockAttackButton) {
    mp.game.controls.disableControlAction(2, 24, true);
  }
  if (global.isLocalPlayerIsFollowed || global.isLocalPlayerHasActiveFollowTarget) {
    mp.game.controls.disableControlAction(2, 22, true);
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 69, true);
    mp.game.controls.disableControlAction(2, 70, true);
    mp.game.controls.disableControlAction(2, 92, true);
    mp.game.controls.disableControlAction(2, 114, true);
    mp.game.controls.disableControlAction(2, 121, true);
    mp.game.controls.disableControlAction(2, 140, true);
    mp.game.controls.disableControlAction(2, 141, true);
    mp.game.controls.disableControlAction(2, 142, true);
    mp.game.controls.disableControlAction(2, 257, true);
    mp.game.controls.disableControlAction(2, 263, true);
    mp.game.controls.disableControlAction(2, 264, true);
    mp.game.controls.disableControlAction(2, 331, true);
    mp.game.controls.disableControlAction(2, 25, true);
    mp.game.controls.disableControlAction(2, 66, true);
    mp.game.controls.disableControlAction(2, 67, true);
    mp.game.controls.disableControlAction(2, 68, true);
    mp.game.controls.disableControlAction(2, 91, true);
  }
}
global.isLocalPlayerIsFollowed = false;
global.isLocalPlayerHasActiveFollowTarget = false;
mp.events.add("Client_StartFollow", startFollow);
mp.events.add("Client_StopFollow", stopFollow);
mp.events.add("render", render);