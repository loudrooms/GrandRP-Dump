const questEntityPool = new Map();
global.christmasDesignOpened2025 = false;
global.atChristmasElectricBoxId = undefined;
const ELECTRIC_BOXES = [{
  id: 1,
  position: new mp.Vector3(741.362, -1984.04, 29.188),
  heading: -99.522
}, {
  id: 2,
  position: new mp.Vector3(743.646, -1979.021, 29.187),
  heading: -0.733
}, {
  id: 3,
  position: new mp.Vector3(749.734, -1979.31, 29.185),
  heading: -6.01
}, {
  id: 4,
  position: new mp.Vector3(749.496, -1983.287, 29.186),
  heading: 179.932
}, {
  id: 5,
  position: new mp.Vector3(747.954, -1999.769, 29.185),
  heading: 173.887
}, {
  id: 6,
  position: new mp.Vector3(741.848, -1999.051, 29.184),
  heading: 166.72
}, {
  id: 7,
  position: new mp.Vector3(742.604, -1974.794, 29.191),
  heading: 174.81
}];
const CHRISTMAS_ANIMATION_DATA = {
  weld: {
    animDict: "amb@world_human_welding@male@base",
    animName: "base",
    timeout: 5000
  },
  holdGift: {
    animDict: "anim@heists@box_carry@",
    animName: "idle"
  },
  unholdGift: {
    animDict: "anim@heists@load_box",
    animName: "lift_box"
  },
  petDeer: {
    animDict: "anim@scripted@player@fix_chop_petting@heeled@",
    animName: "petting"
  },
  deerGrazing: {
    animDict: "creatures@deer@amb@world_deer_grazing@base",
    animName: "base"
  },
  deerAttack: {
    animDict: "creatures@deer@melee@streamed_core@",
    animName: "attack"
  }
};
const MAX_CHRISTMAS_FIREWORKS = 15;
const ELECTRIC_BOX_REPAIRS_REQUIRED = 5;
let previousElectricBoxId;
let firework_count = 0;
let electricBoxRepairProgress = 0;
let bSnowballTask = false;
let handlingChristmasHouseAnimation = false;
function entityExists(_0x121e0b, _0x28a7ff) {
  return !!_0x28a7ff && (_0x121e0b == "markers" && mp.markers?.exists ? mp.markers.exists(_0x28a7ff) : _0x121e0b == "colshapes" && mp.colshapes?.exists ? mp.colshapes.exists(_0x28a7ff) : _0x121e0b == "blips" && mp.blips?.exists ? mp.blips.exists(_0x28a7ff) : _0x121e0b == "objects" && mp.objects?.exists ? mp.objects.exists(_0x28a7ff) : _0x121e0b == "peds" && mp.peds?.exists ? mp.peds.exists(_0x28a7ff) : _0x121e0b == "labels" && mp.labels?.exists ? mp.labels.exists(_0x28a7ff) : _0x121e0b == "particles" && mp.game.graphics?.doesParticleFxLoopedExist ? mp.game.graphics.doesParticleFxLoopedExist(_0x28a7ff) : _0x28a7ff.handle !== undefined || _0x28a7ff.exists === true);
}
function addEntity(_0x1d1652, _0x46a2ba) {
  if (!questEntityPool.has(_0x1d1652)) {
    questEntityPool.set(_0x1d1652, new Set());
  }
  questEntityPool.get(_0x1d1652).add(_0x46a2ba);
  return _0x46a2ba;
}
function getEntity(_0x150423) {
  const _0x6601de = questEntityPool.get(_0x150423);
  if (_0x6601de && _0x6601de.size !== 0) {
    return _0x6601de.values().next().value;
  }
}
function removeEntity(_0x5285c0, _0x57eb64) {
  const _0x26ee7d = questEntityPool.get(_0x5285c0);
  if (!_0x26ee7d) {
    return false;
  }
  if (entityExists(_0x5285c0, _0x57eb64)) {
    try {
      _0x57eb64.destroy();
    } catch (_0x2a2e2b) {}
  }
  return _0x26ee7d.delete(_0x57eb64);
}
function clearType(_0x2b371f) {
  const _0x115072 = questEntityPool.get(_0x2b371f);
  if (_0x115072) {
    for (const _0x54ab35 of _0x115072) {
      if (entityExists(_0x2b371f, _0x54ab35)) {
        if (_0x2b371f == "particles") {
          mp.game.graphics.stopParticleFxLooped(_0x54ab35, false);
        } else {
          _0x54ab35.destroy();
        }
      }
    }
    questEntityPool.delete(_0x2b371f);
  }
}
function clearAllEntities() {
  for (const _0xfe0e47 of questEntityPool.keys()) {
    clearType(_0xfe0e47);
  }
}
function generateElectricBox() {
  const _0x3c9177 = ELECTRIC_BOXES.filter(_0x40f412 => _0x40f412.id != previousElectricBoxId);
  const _0x3b64bf = global.getRandomInt(0, _0x3c9177.length);
  const _0x383c56 = _0x3c9177[_0x3b64bf].position;
  const _0x1a79d8 = mp.colshapes.newSphere(_0x383c56.x, _0x383c56.y, _0x383c56.z, 2);
  _0x1a79d8.bChristmasElectricBoxId = _0x3c9177[_0x3b64bf].id;
  previousElectricBoxId = _0x3c9177[_0x3b64bf].id;
  addEntity("colshapes", _0x1a79d8);
  createQuestEntities(_0x383c56);
  addEntity("particles", StartParticleEffect("core", "ent_amb_smoke_chicken", _0x383c56, 0, 0, 0, 0));
  if (electricBoxRepairProgress != 0) {
    SetGPSLocation(_0x383c56.x, _0x383c56.y, _0x383c56.z, true, 0, 2);
  }
}
function createQuestEntities(_0x39e44a, _0x8b4f6f = []) {
  if (!_0x8b4f6f.includes("labels")) {
    addEntity("labels", mp.labels.new(language["Рождественское задание"][curr_lang], new mp.Vector3(_0x39e44a.x, _0x39e44a.y, _0x39e44a.z), {
      los: true,
      font: 0,
      drawDistance: 10,
      color: [255, 255, 255, 255],
      dimension: 0
    }));
  }
  if (!_0x8b4f6f.includes("markers")) {
    addEntity("markers", mp.markers.new(1, new mp.Vector3(_0x39e44a.x, _0x39e44a.y, _0x39e44a.z - 1), 1, {
      color: [246, 225, 0, 255],
      visible: true,
      dimension: 0
    }));
  }
  if (!_0x8b4f6f.includes("blips")) {
    addEntity("blips", mp.blips.new(781, _0x39e44a, {
      name: language["Рождественское задание"][curr_lang],
      scale: 1,
      color: 1,
      drawDistance: 25,
      shortRange: false
    }));
  }
}
function createChristmasHouseEntities(_0x360bc4) {
  const _0x308f26 = mp.colshapes.newSphere(_0x360bc4.x, _0x360bc4.y, _0x360bc4.z, 4);
  _0x308f26.bChristmasHouse = true;
  addEntity("colshapes", _0x308f26);
  createQuestEntities(_0x360bc4, ["labels"]);
}
function launchFirework(_0x573785) {
  if (firework_count >= 15) {
    return;
  }
  let _0x5dc1fd = _0x573785.z + 20;
  let _0x1cc05d = _0x573785.x + Math.random() * 15;
  let _0x334503 = _0x573785.y + Math.random() * 15;
  const _0x1d25af = new mp.Vector3(_0x1cc05d, _0x334503, _0x5dc1fd);
  const _0x92c7e1 = Math.floor(Math.random() * 4);
  let _0x2c145e = "scr_firework_xmas_ring_burst_rgw";
  if (_0x92c7e1 === 1) {
    _0x2c145e = "scr_firework_xmas_burst_rgw";
  } else if (_0x92c7e1 === 2) {
    _0x2c145e = "scr_firework_xmas_repeat_burst_rgw";
  } else if (_0x92c7e1 === 3) {
    _0x2c145e = "scr_firework_xmas_spiral_burst_rgw";
  }
  StartParticleEffect("scr_indep_fireworks", "scr_indep_firework_starburst", _0x573785, 10000);
  StartParticleEffect("proj_xmas_firework", _0x2c145e, _0x1d25af, 10000);
  StartParticleEffect("scr_rcpaparazzo1", "scr_mich4_firework_burst_spawn", _0x1d25af, 10000);
  firework_count++;
  setTimeout(() => launchFirework(_0x573785), 2000);
}
mp.events.add("Client_SetChristmasQuest", (_0x4dd1d8, _0x209977 = undefined) => {
  if (_0x4dd1d8 == 1) {
    createQuestEntities(new mp.Vector3(-1032.149, -3013.898, 13.947), ["labels", "colshapes", "markers"]);
  } else if (_0x4dd1d8 == 2) {
    electricBoxRepairProgress = 0;
    generateElectricBox();
    mp.game.blackout.enabled = true;
  } else if (_0x4dd1d8 == 3) {
    bSnowballTask = true;
  } else if (_0x4dd1d8 == 4) {
    if (_0x209977) {
      const _0x2d2a3d = global.houses_info.find(_0x2332cd => _0x2332cd.Number == _0x209977).EnterPos;
      SetGPSLocation(_0x2d2a3d.x, _0x2d2a3d.y, _0x2d2a3d.z, true, 0, 2);
      createChristmasHouseEntities(_0x2d2a3d);
    }
  } else if (_0x4dd1d8 == 5) {
    createQuestEntities(PHOTOSET_START_POSITON, ["labels", "colshapes", "markers"]);
  } else if (_0x4dd1d8 == 6) {
    createQuestEntities(new mp.Vector3(-79.613, -2502.014, 6.025), ["labels", "colshapes", "markers"]);
  } else if (_0x4dd1d8 == 7) {
    createQuestEntities(new mp.Vector3(1115.065, -663.869, 56.813), ["labels", "colshapes", "markers"]);
  } else if (_0x4dd1d8 == 8) {
    createQuestEntities(new mp.Vector3(-1305.299, -1484.257, 5.166), ["labels", "colshapes", "markers"]);
  }
  if (_0x4dd1d8 == -1) {
    electricBoxRepairProgress = 0;
    clearAllEntities();
    mp.game.blackout.enabled = false;
  }
});
mp.events.add("Client_RequestChristmasGPSLocation", () => {
  const _0x25c53e = getEntity("colshapes");
  if (_0x25c53e) {
    SetGPSLocation(_0x25c53e.position.x, _0x25c53e.position.y, _0x25c53e.position.z, true, 0, 2);
  }
});
mp.events.add("playerEnterColshape", _0x35fffa => {
  if (_0x35fffa && mp.colshapes.exists(_0x35fffa)) {
    if (_0x35fffa.bChristmasElectricBoxId) {
      atChristmasElectricBoxId = _0x35fffa.bChristmasElectricBoxId;
      main_browser.execute("APPS.state.hud.interact = 2;");
    } else if (_0x35fffa.bChristmasHouse) {
      if (handlingChristmasHouseAnimation) {
        return;
      }
      disablePlayerHandle = true;
      handlingChristmasHouseAnimation = true;
      if (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.holdGift.animDict)) {
        mp.game.streaming.requestAnimDict(CHRISTMAS_ANIMATION_DATA.holdGift.animDict);
        let _0x4f7d92 = 0;
        while (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.holdGift.animDict) && _0x4f7d92++ < 50) {
          mp.game.wait(0);
        }
      }
      const _0x21054f = {
        progress: 0,
        delay: 100,
        duration: 4,
        isIncrease: true,
        title: "Дарение подарка",
        displayAt: "center"
      };
      main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x21054f) + ";");
      play_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.holdGift.animDict, CHRISTMAS_ANIMATION_DATA.holdGift.animName, 1, 49);
      mp.events.call("Client_attachObject2", mp.players.local.remoteId, "{\"Bone\": 6286, \"Model\": \"grand_birthday_box\", \"PosOffset1\": 0.0,\"PosOffset2\": 0.0,\"PosOffset3\": -0.25, \"RotOffset1\": -90.0, \"RotOffset2\": 30.0, \"RotOffset3\": 0}");
      setTimeout(() => {
        play_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.unholdGift.animDict, CHRISTMAS_ANIMATION_DATA.unholdGift.animName, 1, 49);
        setTimeout(() => {
          mp.events.call("Client_detachObject", [mp.players.local.remoteId]);
          if (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.unholdGift.animDict)) {
            mp.game.streaming.requestAnimDict(CHRISTMAS_ANIMATION_DATA.unholdGift.animDict);
            let _0x3aefd0 = 0;
            while (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.unholdGift.animDict) && _0x3aefd0++ < 50) {
              mp.game.wait(0);
            }
          }
          stop_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.unholdGift.animDict, CHRISTMAS_ANIMATION_DATA.unholdGift.animName);
          disablePlayerHandle = false;
          handlingChristmasHouseAnimation = false;
          clearAllEntities();
          mp.events.callRemote("Server_RequestFinishSantaTask");
        }, 2000);
      }, 2000);
    } else if (_0x35fffa.bDeerFeed) {
      main_browser.execute("APPS.state.hud.interact = true;");
      at_christmas_deer = _0x35fffa.bDeerFeed;
    } else if (_0x35fffa.bflyRaceShape != null) {
      PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
      if (_0x35fffa.bflyRaceShape + 1 >= SANTA_GIFT_DELIVERY_ROUTE_POSITIONS.length) {
        cleanFlyRaceEntities();
        main_browser.execute("APPS.state.hud.drug_lab_show = false;");
        mp.events.callRemote("Server_RequestFinishSantaTask");
        return;
      }
      if (!SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x35fffa.bflyRaceShape].noDrop && !SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x35fffa.bflyRaceShape].bFinish && _0x35fffa.bflyRaceShape + 1 > 1) {
        mp.events.callRemote("Server_RequestHandleSantaFlyRoute", _0x35fffa.bflyRaceShape);
      }
      setflyRaceCheckpoint(_0x35fffa.bflyRaceShape + 1);
    } else if (_0x35fffa.bChristmasPhoto) {
      main_browser.execute("APPS.state.hud.interact = true;");
      bAtChristmasPhotoStart = true;
    }
  }
});
mp.events.add("playerExitColshape", _0x42af60 => {
  if (_0x42af60 && mp.colshapes.exists(_0x42af60)) {
    if (_0x42af60.bChristmasElectricBoxId) {
      atChristmasElectricBoxId = undefined;
      main_browser.execute("APPS.state.hud.interact = false;");
    } else if (_0x42af60.bDeerFeed) {
      main_browser.execute("APPS.state.hud.interact = false;");
      at_christmas_deer = false;
    } else if (_0x42af60.bChristmasPhoto) {
      main_browser.execute("APPS.state.hud.interact = false;");
      bAtChristmasPhotoStart = false;
    }
  }
});
global.handleChristmasElectricBox = function () {
  if (!atChristmasElectricBoxId) {
    return;
  }
  const _0x4f37ff = ELECTRIC_BOXES.find(_0x2c46ca => _0x2c46ca.id === atChristmasElectricBoxId);
  if (!_0x4f37ff) {
    return;
  }
  disablePlayerHandle = true;
  const _0x5f0751 = mp.Vector3.Distance2D(mp.players.local.position, _0x4f37ff.position);
  const _0x372f15 = Math.max(500, Math.min(_0x5f0751 / 0.8 * 1000, 3000));
  mp.players.local.taskGoStraightToCoord(_0x4f37ff.position.x, _0x4f37ff.position.y, _0x4f37ff.position.z, 1, -1, _0x4f37ff.heading, 1);
  setTimeout(() => {
    if (mp.players.exists(mp.players.local)) {
      if (mp.Vector3.Distance2D(mp.players.local.position, _0x4f37ff.position) > 1) {
        mp.players.local.position = _0x4f37ff.position;
        mp.players.local.heading = _0x4f37ff.heading;
      }
      const _0x3d9cba = {
        progress: 0,
        delay: 100,
        duration: CHRISTMAS_ANIMATION_DATA.weld.timeout / 1000,
        isIncrease: true,
        title: "Починка электрического ящика",
        displayAt: "center"
      };
      main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x3d9cba) + ";");
      const _0x4d2eb6 = mp.objects.new(mp.game.joaat("prop_weld_torch"), new mp.Vector3(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      if (_0x4d2eb6 && mp.objects.exists(_0x4d2eb6)) {
        addEntity("objects", _0x4d2eb6);
        play_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.weld.animDict, CHRISTMAS_ANIMATION_DATA.weld.animName, 1, 1);
        _0x4d2eb6.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(57005), 0.14, 0.06, 0, 28, -250, -5, true, true, false, false, 0, true);
        setTimeout(() => {
          if (mp.players.exists(mp.players.local) && mp.objects.exists(_0x4d2eb6)) {
            _0x4d2eb6.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(57005), 0.14, 0.06, 0, 28, -250, -5, true, true, false, false, 0, true);
            StartParticleEffectOnEntity(_0x4d2eb6, "core", "ent_anim_welder", new mp.Vector3(-0.2, 0.15, 0), CHRISTMAS_ANIMATION_DATA.weld.timeout, 0, 0, 0);
          }
        }, 150);
        setTimeout(() => {
          if (mp.players.exists(mp.players.local) && mp.objects.exists(_0x4d2eb6)) {
            stop_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.weld.animDict, CHRISTMAS_ANIMATION_DATA.weld.animName);
            electricBoxRepairProgress++;
            disablePlayerHandle = false;
            clearAllEntities();
            if (electricBoxRepairProgress < 5) {
              generateElectricBox();
            } else {
              mp.events.callRemote("Server_RequestFinishSantaTask");
              electricBoxRepairProgress = 0;
            }
          }
        }, CHRISTMAS_ANIMATION_DATA.weld.timeout);
      }
    }
  }, _0x372f15);
};
const SANTA_DAILY_TASKS_REWARDS = [[{
  item_id: 4443,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 3672,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 4790,
  count: 1,
  prerender_id: 2,
  type: "item"
}, {
  item_id: 5932,
  count: 1,
  prerender_id: 2,
  type: "item"
}, {
  item_id: 2635,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 4313,
  count: 1,
  prerender_id: 1,
  type: "item"
}, {
  item_id: 5937,
  count: 1,
  prerender_id: 11,
  type: "item"
}, {
  item_id: 4475,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 4572,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: "silv",
  count: 1,
  prerender_id: 0,
  type: "veh",
  bIgnoreTry: true
}], [{
  item_id: 4462,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 6919,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 4790,
  count: 1,
  prerender_id: 2,
  type: "item"
}, {
  item_id: 4076,
  count: 1,
  prerender_id: 5,
  type: "item"
}, {
  item_id: 2767,
  count: 1,
  prerender_id: 1,
  type: "item"
}, {
  item_id: 3700,
  count: 1,
  prerender_id: 5,
  type: "item"
}, {
  item_id: 3238,
  count: 1,
  prerender_id: 13,
  type: "item"
}, {
  item_id: 4502,
  count: 1,
  prerender_id: 0,
  type: "item"
}, {
  item_id: 3242,
  count: 1,
  prerender_id: 6,
  type: "item"
}, {
  item_id: "silv",
  count: 1,
  prerender_id: 0,
  type: "veh",
  bIgnoreTry: true
}]];
const EVENT_START_DATA = {
  4: {
    min: 15
  },
  5: {
    min: 30
  },
  6: {
    min: 22,
    modHours: 2
  }
};
function getTaskTimers(_0x2a760f) {
  const _0x438c67 = {};
  const _0x520305 = Number(_0x2a760f);
  const _0x5319a2 = new Date(_0x520305);
  const _0x4c3692 = _0x5319a2.getMinutes();
  const _0x593187 = _0x5319a2.getHours();
  for (const [_0x423427, _0x3664e7] of Object.entries(EVENT_START_DATA)) {
    const _0x484ff2 = _0x3664e7.min;
    const _0x8bd44d = new Date(_0x5319a2);
    if (_0x423427 == "6" && _0x3664e7.modHours) {
      let _0x3cc8ea = _0x593187;
      if (_0x4c3692 >= _0x484ff2) {
        _0x3cc8ea += 1;
      }
      if (_0x3cc8ea % _0x3664e7.modHours !== 0) {
        _0x3cc8ea += _0x3664e7.modHours - _0x3cc8ea % _0x3664e7.modHours;
      }
      _0x8bd44d.setHours(_0x3cc8ea);
      _0x8bd44d.setMinutes(_0x484ff2);
      _0x8bd44d.setSeconds(0);
      _0x8bd44d.setMilliseconds(0);
      if (_0x8bd44d.getTime() <= _0x520305) {
        _0x8bd44d.setHours(_0x8bd44d.getHours() + _0x3664e7.modHours);
      }
    } else {
      if (!(_0x4c3692 < _0x484ff2)) {
        _0x8bd44d.setHours(_0x593187 + 1);
      }
      _0x8bd44d.setMinutes(_0x484ff2);
      _0x8bd44d.setSeconds(0);
      _0x8bd44d.setMilliseconds(0);
    }
    const _0x41a608 = _0x8bd44d.getTime();
    _0x438c67[_0x423427] = Math.floor((_0x41a608 - _0x520305) / 1000);
  }
  return _0x438c67;
}
function removeGift() {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestRemoveGift");
  }
}
mp.events.add("Client_OpenChristmasDesign2025", (_0x307417, _0x2dde88, _0x540b21, _0x2b2c24, _0x1e58f1, _0x5d2bdc) => {
  if (GlobalCheck() == 1 || christmasDesignOpened2025) {
    return;
  }
  let _0x1f32aa = 0;
  if (localplayer.model != 1885233650) {
    _0x1f32aa = 1;
  }
  const _0x2891e5 = getTaskTimers(_0x5d2bdc);
  const _0x3dbdfe = {
    id: _0x1e58f1,
    isCompleted: _0x540b21
  };
  const _0x5e68e3 = _0x540b21 == 1 ? _0x2b2c24 - 1 : _0x2b2c24;
  let _0x33a8ff;
  if (_0x5e68e3 >= 0 && _0x5e68e3 < SANTA_DAILY_TASKS_REWARDS[_0x1f32aa].length) {
    _0x33a8ff = SANTA_DAILY_TASKS_REWARDS[_0x1f32aa][_0x5e68e3];
  }
  const _0x314224 = [_0x33a8ff, {
    type: "gift",
    amount: 1
  }].filter(Boolean);
  main_browser.execute("APPS.state.christmasEvent2025.donate = " + _0x307417 + ";\n        APPS.state.christmasEvent2025.gender = " + _0x1f32aa + ";\n        APPS.state.christmasEvent2025.timeToGift = " + (3600 - _0x2dde88 % 3600) + ";\n        APPS.state.christmasEvent2025.dailyTask.currentTask = " + JSON.stringify(_0x3dbdfe) + ";\n        APPS.state.christmasEvent2025.dailyTask.progress = " + _0x2b2c24 + ";\n        APPS.state.christmasEvent2025.dailyTask.rewards = " + JSON.stringify(_0x314224) + ";\n        APPS.state.christmasEvent2025.taskTimers = " + JSON.stringify(_0x2891e5) + ";\n        APPS.state.christmasEvent2025.show = true;\n    ");
  christmasDesignOpened2025 = true;
  SwitchHUDToDesign(true);
});
mp.events.add("playerWeaponShot", (_0x1b0253, _0x20cd1f) => {
  if (bChristmas2025 && currentWeapon() != 101631238) {
    const _0x28d7e0 = mp.game.player.getEntityIsFreeAimingAt();
    if (_0x28d7e0 && currentWeapon() == 126349499 && _0x28d7e0.type && _0x28d7e0.type === "player" && _0x28d7e0.real_id) {
      if (global.getRandomInt(0, 5) == 0) {
        mp.events.callRemote("Server_SnowballPlayer", _0x28d7e0.real_id);
      }
      if (bSnowballTask) {
        bSnowballTask = false;
        mp.events.callRemote("Server_RequestFinishSantaTask");
      }
    }
  }
});
mp.events.add("Client_UpdateCandyAndGrandcoins", (_0x4e27d2, _0x37bffe) => {
  main_browser.execute("APPS.state.christmasEvent2025.donate = " + _0x4e27d2 + ";\n        APPS.state.christmasEvent2025.candy = " + _0x37bffe + ";\n        this.AppComponents.christmasEvent2025.closeModal();\n    ");
});
mp.events.add("Client_RequestBuyItemFromChristmasShop2025", (_0x1ca4a8, _0x5aa76b) => {
  if (loggedin && !chatActive && christmasDesignOpened2025) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyItemFromChristmasShop2025", _0x1ca4a8, _0x5aa76b);
    }
  }
});
global.closeChristmasDesign2025 = function () {
  if (christmasDesignOpened2025) {
    main_browser.execute("APPS.state.christmasEvent2025.show = false;");
    christmasDesignOpened2025 = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CloseChristmasDesign2025", () => {
  closeChristmasDesign2025();
});
mp.events.add("Client_BindGiftCancel", _0x52e378 => {
  if (_0x52e378) {
    closeChristmasDesign2025();
    mp.players.local.setConfigFlag(104, false);
    mp.keys.bind(88, false, removeGift);
  } else {
    mp.keys.unbind(88, false, removeGift);
    mp.players.local.setConfigFlag(104, true);
  }
});
const santa_models = [mp.game.joaat("vel_ny_badsanta")];
const gameplayCamera = mp.cameras.new("gameplay");
mp.events.add("playerWeaponShot", (_0x33f59e, _0x3ee95b) => {
  let _0x34533a = gameplayCamera.getCoord();
  let _0x2a8eff = gameplayCamera.getDirection();
  let _0x566767 = new mp.Vector3(_0x2a8eff.x * 50 + _0x34533a.x, _0x2a8eff.y * 50 + _0x34533a.y, _0x2a8eff.z * 50 + _0x34533a.z);
  const _0xa3f86c = mp.raycasting.testPointToPoint(gameplayCamera.getCoord(), _0x566767, localplayer, [1, 16]);
  if (_0xa3f86c) {
    const _0x5c0772 = mp.peds.atHandle(_0xa3f86c.entity.handle);
    if (mp.peds.exists(_0x5c0772) && _0x5c0772.is_santa == 1 && (_0x5c0772.getHealth() <= 0 || _0x5c0772.isDead())) {
      mp.events.callRemote("Server_KilledChristmasSanta", _0x5c0772);
    }
    if (typeof _0xa3f86c.entity == "number" && _0xa3f86c.entity !== 0 && mp.game.entity.doesExist(_0xa3f86c.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0xa3f86c.entity);
    }
  }
});
mp.events.add("Client_RequestBuyChristmasCandy2025", _0xce011f => {
  if (christmasDesignOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyChristmasCandy2025", _0xce011f);
    }
  }
});
mp.events.add("Client_RequestBuyGiftChristmas2025", _0x308e4a => {
  if (christmasDesignOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyGiftChristmas2025", _0x308e4a);
    }
  }
});
mp.events.add("Client_HandleActionButtonChristmas2025", _0xe3da09 => {
  if (christmasDesignOpened2025 && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      closeChristmasDesign2025();
      if ([2, 5, 6, 7].includes(_0xe3da09)) {
        mp.events.callRemote("Server_HandleActionButtonChristmas2025", _0xe3da09);
      } else if (_0xe3da09 == 3) {
        SetGPSLocation(1115.065, -663.869, 56.813);
      }
    }
  }
});
mp.events.add("Client_HandleActionButtonChristmasTask", _0x3406b3 => {
  if (christmasDesignOpened2025 && loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    closeChristmasDesign2025();
    if (_0x3406b3 == 6) {
      SetGPSLocation(-79.613, -2502.014, 6.025);
    } else if (_0x3406b3 == 5) {
      SetGPSLocation(202.177, -936.856, 30.687);
    } else if (_0x3406b3 == 7) {
      SetGPSLocation(1115.065, -663.869, 56.813);
    } else if (_0x3406b3 == 8) {
      SetGPSLocation(-1306.328, -1484.335, 5.254);
    } else if (_0x3406b3 == 2) {
      SetGPSLocation(738.121, -1984.154, 29.202);
    } else if (_0x3406b3 == 1) {
      SetGPSLocation(-1032.149, -3013.898, 13.947);
    } else if (_0x3406b3 == 4) {
      const _0x4e5698 = getEntity("blips");
      if (!_0x4e5698 || mp.blips.exists(_0x4e5698)) {
        return;
      }
      SetGPSLocation(_0x4e5698.position.x, _0x4e5698.position.y, _0x4e5698.position.z, true, 0, 5);
    }
  }
});
const DEER_DATA = [{
  id: 1,
  playerPos: new mp.Vector3(-1305.023, -1475.396, 4.55),
  playerRot: -179.943,
  position: new mp.Vector3(-1305.145, -1476.799, 4.591),
  rotation: -6.749
}, {
  id: 2,
  playerPos: new mp.Vector3(-1297.856, -1486.586, 4.772),
  playerRot: 67.707,
  position: new mp.Vector3(-1299.271, -1486.069, 4.856),
  rotation: -109.738
}, {
  id: 3,
  playerPos: new mp.Vector3(-1310.13, -1492.339, 4.538),
  playerRot: -23.107,
  position: new mp.Vector3(-1309.626, -1490.834, 4.609),
  rotation: 164.416
}];
function disableVehicleCollision() {
  if (mp.players.local.vehicle) {
    mp.vehicles.forEachInStreamRange(_0x53df0d => {
      if (mp.game.vehicle.isThisModelAPlane(_0x53df0d.model) || _0x53df0d.model == 1921065365) {
        mp.players.local.vehicle.setNoCollision(_0x53df0d.handle, false);
        _0x53df0d.setNoCollision(mp.players.local.vehicle.handle, false);
        _0x53df0d.setAlpha(230);
      }
    });
  }
}
let flyRaceBlip;
let flyRaceShape;
let flyRaceCheckpoint;
let secondflyRaceCheckpoint;
function cleanFlyRaceEntities() {
  if (flyRaceBlip) {
    flyRaceBlip.destroy();
    flyRaceBlip = undefined;
  }
  if (flyRaceShape) {
    flyRaceShape.destroy();
    flyRaceShape = undefined;
  }
  if (flyRaceCheckpoint) {
    flyRaceCheckpoint.destroy();
    flyRaceCheckpoint = undefined;
  }
  if (secondflyRaceCheckpoint) {
    secondflyRaceCheckpoint.destroy();
    secondflyRaceCheckpoint = undefined;
  }
  disableVehicleExit = false;
}
DEER_DATA.forEach(_0x24d32d => {
  try {
    const _0x1cdf90 = mp.peds.new(mp.game.joaat("a_c_deer"), _0x24d32d.position, _0x24d32d.rotation, 0);
    _0x1cdf90.bChristmasDeer = true;
    mp.colshapes.newSphere(_0x24d32d.position.x, _0x24d32d.position.y, _0x24d32d.position.z, 3).bDeerFeed = _0x24d32d.id;
    _0x24d32d.pedEntity = _0x1cdf90;
  } catch (_0x414710) {
    mp.console.loginfo("Error creating deer: " + _0x414710);
  }
});
global.at_christmas_deer = false;
global.handleDeerFeed = function () {
  main_browser.execute("APPS.state.hud.interact = false;");
  disablePlayerHandle = true;
  const _0x4f860f = DEER_DATA.find(_0x4172ad => _0x4172ad.id == at_christmas_deer);
  at_christmas_deer = false;
  if (!_0x4f860f) {
    return;
  }
  const _0xece9ee = mp.Vector3.Distance2D(mp.players.local.position, _0x4f860f.playerPos);
  const _0x24317f = Math.max(500, Math.min(_0xece9ee / 0.8 * 1000, 3000));
  mp.players.local.taskGoStraightToCoord(_0x4f860f.playerPos.x, _0x4f860f.playerPos.y, _0x4f860f.playerPos.z, 1, -1, _0x4f860f.playerRot, 1);
  setTimeout(() => {
    if (mp.players.exists(mp.players.local)) {
      if (mp.Vector3.Distance2D(mp.players.local.position, _0x4f860f.playerPos) > 1) {
        mp.players.local.position = _0x4f860f.playerPos;
        mp.players.local.heading = _0x4f860f.playerRot;
      }
      const _0x59f71d = {
        progress: 0,
        delay: 100,
        duration: 3,
        isIncrease: true,
        title: "Кормление оленя",
        displayAt: "center"
      };
      main_browser.execute("APPS.state.hud.progressBar = " + JSON.stringify(_0x59f71d) + ";");
      if (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.petDeer.animDict)) {
        mp.game.streaming.requestAnimDict(CHRISTMAS_ANIMATION_DATA.petDeer.animDict);
        let _0x3f07a1 = 0;
        while (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.petDeer.animDict) && _0x3f07a1++ < 50) {
          mp.game.wait(0);
        }
      }
      play_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.petDeer.animDict, CHRISTMAS_ANIMATION_DATA.petDeer.animName, 1, 49);
      setTimeout(() => {
        if (mp.players.exists(mp.players.local)) {
          disablePlayerHandle = false;
          if (_0x4f860f.pedEntity && mp.peds.exists(_0x4f860f.pedEntity)) {
            const _0xabc27 = mp.game.entity.getEntityAnimDuration(CHRISTMAS_ANIMATION_DATA.deerAttack.animDict, CHRISTMAS_ANIMATION_DATA.deerAttack.animName) * 1000;
            _0x4f860f.pedEntity.taskPlayAnim(CHRISTMAS_ANIMATION_DATA.deerAttack.animDict, CHRISTMAS_ANIMATION_DATA.deerAttack.animName, 8, 0, _0xabc27, 1, 0, false, false, false);
            mp.events.callRemote("Server_RequestDeerDamage");
            setTimeout(() => {
              _0x4f860f.pedEntity.taskPlayAnim(CHRISTMAS_ANIMATION_DATA.deerGrazing.animDict, CHRISTMAS_ANIMATION_DATA.deerGrazing.animName, 8, 0, -1, 1, 0, false, false, false);
            }, _0xabc27);
          }
          mp.events.callRemote("Server_RequestFinishSantaTask");
          stop_animation(mp.players.local, CHRISTMAS_ANIMATION_DATA.petDeer.animDict, CHRISTMAS_ANIMATION_DATA.petDeer.animName);
        }
      }, 3000);
    }
  }, _0x24317f);
};
mp.events.add("entityStreamIn", function (_0x5c5b28) {
  if (_0x5c5b28 && mp.peds.exists(_0x5c5b28) && _0x5c5b28.bChristmasDeer) {
    if (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.deerGrazing.animDict)) {
      mp.game.streaming.requestAnimDict(CHRISTMAS_ANIMATION_DATA.deerGrazing.animDict);
      let _0x4f1484 = 0;
      while (!mp.game.streaming.hasAnimDictLoaded(CHRISTMAS_ANIMATION_DATA.deerGrazing.animDict) && _0x4f1484++ < 50) {
        mp.game.wait(0);
      }
    }
    _0x5c5b28.taskPlayAnim(CHRISTMAS_ANIMATION_DATA.deerGrazing.animDict, CHRISTMAS_ANIMATION_DATA.deerGrazing.animName, 8, 0, -1, 1, 0, false, false, false);
  }
  if (_0x5c5b28.type === "ped" && loggedin && santa_models.indexOf(parseInt(_0x5c5b28.model)) != -1) {
    if (_0x5c5b28.badsanta_npc) {
      return;
    }
    if (_0x5c5b28.grinch != 1) {
      mp.game.invoke("0xBB9CE077274F6A1B", _0x5c5b28.handle, 10, 10);
      _0x5c5b28.setProofs(false, true, true, true, true, true, true, true);
      _0x5c5b28.taskCombat(localplayer.handle, 0, 16);
      _0x5c5b28.setSuffersCriticalHits(false);
      _0x5c5b28.is_santa = true;
    }
  }
  if (_0x5c5b28 && mp.vehicles.exists(_0x5c5b28) && _0x5c5b28.type === "vehicle" && _0x5c5b28.model == 1921065365) {
    mp.console.logInfo("Vehicle stream in: " + _0x5c5b28.model);
    mp.game.invoke("0xF4924635A19EB37D", _0x5c5b28.handle, true);
    _0x5c5b28.setSiren(true);
  }
});
mp.events.add("Client_SetSleighSirenOn", () => {
  if (mp.players.local.vehicle) {
    mp.game.invoke("0xF4924635A19EB37D", mp.players.local.vehicle.handle, true);
    mp.players.local.vehicle.setSiren(true);
  }
});
mp.events.add("Client_SetChristmasFirework", () => {
  firework_count = 0;
  launchFirework(mp.players.local.position);
});
const SANTA_GIFT_DELIVERY_ROUTE_POSITIONS = [{
  position: new mp.Vector3(-1497.3, -2856.596, 41.456),
  noDrop: true
}, {
  position: new mp.Vector3(-1403.529, -2323.759, 101.865),
  noDrop: true
}, {
  position: new mp.Vector3(-1350.925, -1006.19, 73.578),
  dropPosition: new mp.Vector3(-1350.888, -1006.181, 8.248)
}, {
  position: new mp.Vector3(-1766.987, -471.984, 95.306)
}, {
  position: new mp.Vector3(-1554.89, -179.421, 90.341)
}, {
  position: new mp.Vector3(-1018.388, -205.517, 84.802)
}, {
  position: new mp.Vector3(-508.853, -272.363, 83.294)
}, {
  position: new mp.Vector3(-226.99, 133.343, 110.695)
}, {
  position: new mp.Vector3(287.631, -85.397, 106.49)
}, {
  position: new mp.Vector3(308.014, -460.618, 86.31)
}, {
  position: new mp.Vector3(107.15, -999.349, 69.402)
}, {
  position: new mp.Vector3(755.356, -1212.161, 93.341)
}, {
  position: new mp.Vector3(1313.784, -2248.228, 78.096)
}, {
  position: new mp.Vector3(893.6, -2739.199, 71.949),
  noDrop: true
}, {
  position: new mp.Vector3(-81.8, -3050.88, 91.121),
  noDrop: true
}, {
  position: new mp.Vector3(-1140.35, -3253.392, 29.086),
  noDrop: true
}, {
  position: new mp.Vector3(-1328.017, -3148.62, 23.998),
  bFinish: true
}];
function setflyRaceCheckpoint(_0x18a958) {
  cleanFlyRaceEntities();
  flyRaceShape = mp.colshapes.newSphere(SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position.x, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position.y, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position.z, 8);
  flyRaceShape.bflyRaceShape = _0x18a958;
  flyRaceBlip = mp.blips.new(1, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 3,
    dimension: 0
  });
  flyRaceCheckpoint = mp.markers.new(6, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position, 15, {
    direction: new mp.Vector3(0, 0, 0),
    color: [255, 255, 0, 150],
    visible: true,
    dimension: 0
  });
  secondflyRaceCheckpoint = mp.markers.new(SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].bFinish ? 5 : 7, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].position, SANTA_GIFT_DELIVERY_ROUTE_POSITIONS[_0x18a958].bFinish ? 15 : 5, {
    direction: new mp.Vector3(0, 0, 0),
    color: [0, 175, 255, 255],
    visible: true,
    dimension: 0
  });
  flyRaceBlip.setRoute(true);
}
mp.events.add("Client_SetSantaFlyRoute", () => {
  disableVehicleCollision();
  EndConversationFinally();
  cleanFlyRaceEntities();
  setflyRaceCheckpoint(0);
  disableVehicleExit = true;
  setTimeout(() => {
    disableVehicleCollision();
  }, 2000);
});
mp.events.add("Client_CleanSantaFlyRoute", () => {
  cleanFlyRaceEntities();
  disableVehicleExit = false;
});
const PHOTOSET_START_POSITON = new mp.Vector3(202.177, -936.856, 30.687);
const CAMERA_DATA = {
  cameraPos: new mp.Vector3(196.87, -937.376, 31.187),
  cameraPointAt: new mp.Vector3(198.591, -928.457, 30.001)
};
global.bAtChristmasPhotoStart = false;
global.bAtChristmasPhoto = false;
global.bTakingChristmasPhoto = false;
mp.markers.new(1, new mp.Vector3(PHOTOSET_START_POSITON.x, PHOTOSET_START_POSITON.y, PHOTOSET_START_POSITON.z - 1), 1, {
  color: [246, 225, 0, 255],
  visible: true,
  dimension: 0
});
mp.labels.new(language["Рождественское фото"][curr_lang], PHOTOSET_START_POSITON, {
  los: true,
  font: 0,
  drawDistance: 10,
  color: [255, 255, 255, 255],
  dimension: 0
});
mp.colshapes.newSphere(PHOTOSET_START_POSITON.x, PHOTOSET_START_POSITON.y, PHOTOSET_START_POSITON.z, 2).bChristmasPhoto = true;
mp.events.add("Client_SetChristmasPhoto", _0x967a4f => {
  disablePlayerHandle = _0x967a4f;
  bAtChristmasPhotoStart = false;
  bAtChristmasPhoto = _0x967a4f;
  if (_0x967a4f == 0) {
    if (localcamera != null) {
      localcamera.destroy();
      localcamera = null;
    }
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    bTakingChristmasPhoto = false;
    main_browser.execute("APPS.state.photo.show = false;");
    SwitchHUDToDesign(false);
    MobileCameraOpened = false;
  }
});
let raceInterval;
let raceBlip;
let raceShape;
let raceCheckpoint;
let raceNextCheckpoint;
let startTakingScreenShot = false;
mp.events.add("Client_StartTakingChristmasPhoto", () => {
  if (!bTakingChristmasPhoto) {
    bTakingChristmasPhoto = true;
    localcamera = mp.cameras.new("default", CAMERA_DATA.cameraPos, new mp.Vector3(0, 0, 0), 30);
    localcamera.pointAtCoord(CAMERA_DATA.cameraPointAt.x, CAMERA_DATA.cameraPointAt.y, CAMERA_DATA.cameraPointAt.z);
    localcamera.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 0, true, true);
    setTimeout(() => {
      at_mugshot_photo = 0;
      MobileCameraOpened = true;
      SwitchHUDToDesign(true);
      main_browser.execute("APPS.state.photo.show = false;");
      mp.events.call("Disablechat");
      mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "FocusOut", 2000, true);
      PlayAudioSound("Camera_Shoot", "Phone_Soundset_Franklin");
      setTimeout(() => {
        if (!MobileCameraOpened) {
          return startTakingScreenShot = false;
        }
        mp.gui.takeScreenshot("temp.jpg", 0, 60, 0);
        startTakingScreenShot = true;
        setTimeout(() => {
          if (!MobileCameraOpened) {
            return startTakingScreenShot = false;
          }
          main_browser.execute("APPS.state.hud.mugshot_id = " + at_mugshot_photo + ";");
          main_browser.execute("APPS.state.hud.photo_to_load = 'http://screenshots/temp.jpg';");
          startTakingScreenShot = false;
          main_browser.execute("APPS.state.photo.show = true;");
        }, 1000);
      }, 200);
    }, 2000);
  }
});
global.atChristmasRace = false;
let currentCheckpointId = 1;
const RACE_POSITIONS = [{
  position: new mp.Vector3(499.677, 5593.851, 795.5),
  onMountain: true
}, {
  position: new mp.Vector3(486.082, 5571.047, 788.387),
  onMountain: true
}, {
  position: new mp.Vector3(501.204, 5559.414, 781.441),
  onMountain: true
}, {
  position: new mp.Vector3(527.584, 5627.3, 779.529),
  onMountain: true
}, {
  position: new mp.Vector3(566.176, 5659.125, 765.627),
  onMountain: true
}, {
  position: new mp.Vector3(622.835, 5683.721, 743.735),
  onMountain: true
}, {
  position: new mp.Vector3(801.07, 5688.495, 696.091),
  onMountain: true
}, {
  position: new mp.Vector3(920.849, 5641.29, 654.258),
  onMountain: true
}, {
  position: new mp.Vector3(1015.845, 5617.749, 609.484),
  onMountain: true
}, {
  position: new mp.Vector3(1116.164, 5584.542, 566.471),
  onMountain: true
}, {
  position: new mp.Vector3(1252.062, 5562.301, 499.423),
  onMountain: true
}, {
  position: new mp.Vector3(1423.327, 5539.468, 457.717),
  onMountain: true
}, {
  position: new mp.Vector3(1531.303, 5517.7, 402.823),
  onMountain: true
}, {
  position: new mp.Vector3(1716.377, 5455.96, 302.329),
  onMountain: true
}, {
  position: new mp.Vector3(1848.667, 5406.363, 232.332),
  onMountain: true
}, {
  position: new mp.Vector3(1957.706, 5379.13, 185.252),
  onMountain: true
}, {
  position: new mp.Vector3(2102.159, 5375.026, 164.169),
  onMountain: true
}, {
  position: new mp.Vector3(2240.745, 5383.049, 144.565),
  onMountain: true
}, {
  position: new mp.Vector3(2356.547, 5338.327, 116.376),
  onMountain: true
}, {
  position: new mp.Vector3(2509.131, 5172.91, 67.342)
}, {
  position: new mp.Vector3(2619.425, 5113.709, 44.287)
}];
function setRaceCheckpoint(_0x3c5cf6) {
  cleanRaceEntities();
  raceShape = mp.colshapes.newCircle(RACE_POSITIONS[_0x3c5cf6].position.x, RACE_POSITIONS[_0x3c5cf6].position.y, 8, mp.players.local.dimension);
  raceShape.bRaceShape = _0x3c5cf6;
  raceBlip = mp.blips.new(1, RACE_POSITIONS[_0x3c5cf6].position, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 5,
    dimension: mp.players.local.dimension
  });
  const _0x475070 = RACE_POSITIONS[_0x3c5cf6 + 1] ? new mp.Vector3(RACE_POSITIONS[_0x3c5cf6 + 1].position.x, RACE_POSITIONS[_0x3c5cf6 + 1].position.y, RACE_POSITIONS[_0x3c5cf6 + 1].position.z) : new mp.Vector3(0, 0, 0);
  raceCheckpoint = mp.checkpoints.new(RACE_POSITIONS[_0x3c5cf6 + 1] ? 2 : 10, new mp.Vector3(RACE_POSITIONS[_0x3c5cf6].position.x, RACE_POSITIONS[_0x3c5cf6].position.y, RACE_POSITIONS[_0x3c5cf6].position.z - 1.2), 4, {
    direction: _0x475070,
    color: [246, 225, 0, 255],
    visible: true,
    dimension: mp.players.local.dimension
  });
  if (RACE_POSITIONS[_0x3c5cf6 + 1] && RACE_POSITIONS[_0x3c5cf6 + 2]) {
    const _0x1423ab = new mp.Vector3(RACE_POSITIONS[_0x3c5cf6 + 2].position.x, RACE_POSITIONS[_0x3c5cf6 + 2].position.y, RACE_POSITIONS[_0x3c5cf6 + 2].position.z);
    raceNextCheckpoint = mp.checkpoints.new(2, new mp.Vector3(RACE_POSITIONS[_0x3c5cf6 + 1].position.x, RACE_POSITIONS[_0x3c5cf6 + 1].position.y, RACE_POSITIONS[_0x3c5cf6 + 1].position.z - 1.2), 4, {
      direction: _0x1423ab,
      color: [246, 225, 0, 70],
      visible: true,
      dimension: mp.players.local.dimension
    });
  } else if (RACE_POSITIONS[_0x3c5cf6 + 1] && !RACE_POSITIONS[_0x3c5cf6 + 2]) {
    raceNextCheckpoint = mp.checkpoints.new(10, new mp.Vector3(RACE_POSITIONS[_0x3c5cf6 + 1].position.x, RACE_POSITIONS[_0x3c5cf6 + 1].position.y, RACE_POSITIONS[_0x3c5cf6 + 1].position.z), 4, {
      direction: new mp.Vector3(0, 0, 0),
      color: [246, 225, 0, 100],
      visible: true,
      dimension: mp.players.local.dimension
    });
  }
  raceBlip.setRoute(true);
}
const TIME_FOR_RACE = 150;
function clearRaceInterval() {
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
}
function cleanRaceEntities() {
  if (raceBlip) {
    raceBlip.destroy();
    raceBlip = undefined;
  }
  if (raceShape) {
    raceShape.destroy();
    raceShape = undefined;
  }
  if (raceCheckpoint) {
    raceCheckpoint.destroy();
    raceCheckpoint = undefined;
  }
  if (raceNextCheckpoint) {
    raceNextCheckpoint.destroy();
    raceNextCheckpoint = undefined;
  }
}
mp.events.add("Client_StartChristmasRace2025", () => {
  if (mp.players.local.vehicle) {
    mp.players.local.vehicle.freezePosition(true);
  }
  disableVehicleHandle = true;
  atChristmasRace = true;
  localplayer.setCanBeKnockedOffVehicle(1);
  let _0x4c2ccf = 5;
  main_browser.execute("APPS.state.hud.event_coutdown = " + _0x4c2ccf + ";");
  let _0x1c9e4a = setInterval(function () {
    _0x4c2ccf--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + _0x4c2ccf + ";");
    if (_0x4c2ccf <= 0) {
      if (mp.players.local.vehicle) {
        mp.players.local.vehicle.freezePosition(false);
      }
      disableVehicleHandle = false;
      if (_0x1c9e4a != null) {
        clearInterval(_0x1c9e4a);
      }
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      clearRaceInterval();
      let _0x1890f9 = 0;
      currentCheckpointId = 1;
      raceInterval = setInterval(() => {
        _0x1890f9++;
        ShowDrugLabsDesign(language.Гонщик[curr_lang], 1, "", 0, "", 0, "", 0, "", 0, 150 - _0x1890f9, 150, language.Гонка[curr_lang]);
        if (RACE_POSITIONS[currentCheckpointId] && RACE_POSITIONS[currentCheckpointId].onMountain) {
          if (RACE_POSITIONS[currentCheckpointId].position.z - localplayer.position.z > 35) {
            clearRaceInterval();
            main_browser.execute("APPS.state.hud.drug_lab_show = false;");
            mp.events.callRemote("Server_FailedChristmasRace");
            atChristmasRace = false;
            return;
          }
        }
        if (_0x1890f9 == 150) {
          clearRaceInterval();
          main_browser.execute("APPS.state.hud.drug_lab_show = false;");
          mp.events.callRemote("Server_FailedChristmasRace");
          atChristmasRace = false;
        }
      }, 1000);
    }
  }, 1000);
  cleanRaceEntities();
  setRaceCheckpoint(1);
});
mp.events.add("playerEnterColshape", _0x2b4b78 => {
  if (_0x2b4b78.bRaceShape) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    if (_0x2b4b78.bRaceShape + 1 >= RACE_POSITIONS.length) {
      cleanRaceEntities();
      clearRaceInterval();
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      mp.events.callRemote("Server_FinishedChristmasRace");
      return;
    }
    currentCheckpointId = _0x2b4b78.bRaceShape + 1;
    setRaceCheckpoint(currentCheckpointId);
  }
});
mp.events.add("Client_CancelEventRace", () => {
  atChristmasRace = false;
  if (raceInterval != null) {
    clearInterval(raceInterval);
    raceInterval = undefined;
  }
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  cleanRaceEntities();
  localplayer.setCanBeKnockedOffVehicle(0);
});
global.atChristmasSnowBattle = false;
let snowBattlePreStartTimer = null;
let snowBattleInterval = null;
let snowBattleObject = null;
let snowBattleInitialZ = 164;
let snowBattleFallEventSent = false;
const SNOWBATTLE_IPL = "grand_xmas_loc_parkour";
function createGiftDropFireworks(_0x137d97, _0x1d8074) {
  const _0x8d5ba6 = "proj_xmas_firework";
  const _0x1ecb0d = "scr_firework_xmas_spiral_burst_rgw";
  mp.game.audio.requestScriptAudioBank("FIREWORK_SOUNDSET", false);
  loadPtfxAsset(_0x8d5ba6).then(_0x533ce6 => {
    if (!_0x533ce6) {
      return;
    }
    const _0x3bd6de = (_0x1d8074 || 0) * Math.PI / 180;
    const _0x1fccc8 = Math.cos(_0x3bd6de);
    const _0x3c7174 = -Math.sin(_0x3bd6de);
    const _0x540b39 = new mp.Vector3(_0x137d97.x + _0x1fccc8 * 4, _0x137d97.y + _0x3c7174 * 4, _0x137d97.z + -1);
    const _0x50999d = new mp.Vector3(_0x137d97.x - _0x1fccc8 * 4, _0x137d97.y - _0x3c7174 * 4, _0x137d97.z + -1);
    const _0x2b3081 = localplayer.position;
    if (!(mp.game.system.vdist(_0x2b3081.x, _0x2b3081.y, _0x2b3081.z, _0x137d97.x, _0x137d97.y, _0x137d97.z) > 500)) {
      mp.game.graphics.setPtfxAssetNextCall(_0x8d5ba6);
      mp.game.graphics.startParticleFxNonLoopedAtCoord(_0x1ecb0d, _0x540b39.x, _0x540b39.y, _0x540b39.z, 0, 0, 0, 1.5, false, false, false);
      setTimeout(() => {
        mp.game.graphics.setPtfxAssetNextCall(_0x8d5ba6);
        mp.game.graphics.startParticleFxNonLoopedAtCoord(_0x1ecb0d, _0x50999d.x, _0x50999d.y, _0x50999d.z, 0, 0, 0, 1.5, false, false, false);
      }, 100);
    }
  }).catch(_0x41f37b => {});
}
mp.events.add("Client_SnowBattleChristmas2025_PreStart", _0x485608 => {
  localplayer.freezePosition(true);
  snowBattleFallEventSent = false;
  atChristmasSnowBattle = true;
  if (SNOWBATTLE_IPL) {
    mp.game.streaming.requestIpl(SNOWBATTLE_IPL);
  } else {
    snowBattleObject = mp.objects.new(mp.game.joaat("stt_prop_stunt_target"), new mp.Vector3(1125.983, 3890.325, 101.894), {
      rotation: new mp.Vector3(0, 0, 2.106),
      alpha: 255,
      dimension: 5555
    });
  }
  localcamera = mp.cameras.new("default", new mp.Vector3(-2017.451, 5107.155, 182.604), new mp.Vector3(0, 0, 0), 60);
  localcamera.pointAtCoord(-1687.458, 4909.712, 38.201);
  localcamera.setActive(true);
  mp.game.cam.renderScriptCams(true, true, 0, true, true);
  let _0x182941 = _0x485608 + 6;
  snowBattlePreStartTimer = setInterval(() => {
    if (_0x182941 > 0) {
      _0x182941--;
      main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x182941) + ";");
      localplayer.freezePosition(true);
      if (_0x182941 == 0) {
        if (snowBattlePreStartTimer != null) {
          clearInterval(snowBattlePreStartTimer);
          snowBattlePreStartTimer = null;
        }
        main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      }
    }
  }, 1000);
});
mp.events.add("Client_SnowBattleChristmas2025_StartEvent", _0x1cfa33 => {
  if (snowBattlePreStartTimer != null) {
    clearInterval(snowBattlePreStartTimer);
    snowBattlePreStartTimer = null;
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  snowBattleFallEventSent = false;
  let _0x9ff6f6 = 6;
  let _0x586b71 = 0;
  snowBattleInterval = setInterval(() => {
    _0x9ff6f6--;
    main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x9ff6f6) + ";");
    if (_0x9ff6f6 > 0) {
      PlayAudioSound("5_Second_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
    } else if (_0x9ff6f6 == 0) {
      PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
      localplayer.freezePosition(false);
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
      mp.gui.cursor.show(false, false);
    } else if (atChristmasSnowBattle) {
      const _0xb0b7af = localplayer.position.z;
      if (snowBattleInitialZ - _0xb0b7af >= 10 && !snowBattleFallEventSent) {
        mp.events.callRemote("Server_SnowBattlePlayerFell");
        snowBattleFallEventSent = true;
      }
      if (currentWeapon() != 126349499) {
        mp.game.invoke(getNative("GIVE_WEAPON_TO_PED"), localplayer.handle, 126349499, 10, false, true);
      }
      let _0x5e7712 = 0;
      mp.players.forEachInStreamRange(function (_0x49c52c) {
        if (_0x49c52c.dimension == localplayer.dimension && _0x49c52c.getAlpha() != 0) {
          _0x5e7712++;
        }
      });
      _0x586b71++;
      _0x1cfa33 = parseInt(_0x1cfa33);
      ShowDrugLabsDesign(language["Игроков осталось"][curr_lang], _0x5e7712, "", 0, "", 0, "", 0, "", 0, _0x1cfa33 - _0x586b71, _0x1cfa33, language["Снежная битва"][curr_lang]);
      if (_0x586b71 == _0x1cfa33) {
        clearRaceInterval();
        main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      }
    }
  }, 1000);
});
mp.events.add("Client_CancelSnowBattleVariables", () => {
  atChristmasSnowBattle = false;
  snowBattleFallEventSent = false;
  if (snowBattlePreStartTimer != null) {
    clearInterval(snowBattlePreStartTimer);
    snowBattlePreStartTimer = null;
  }
  if (snowBattleInterval != null) {
    clearInterval(snowBattleInterval);
    snowBattleInterval = null;
  }
  if (SNOWBATTLE_IPL) {
    mp.game.streaming.removeIpl(SNOWBATTLE_IPL);
  } else if (snowBattleObject && snowBattleObject.doesExist()) {
    snowBattleObject.destroy();
  }
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  main_browser.execute("APPS.state.hud.event_coutdown = 0;");
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  localplayer.freezePosition(false);
});
mp.events.add("playerWeaponShot", () => {
  if (bChristmas2025 && atChristmasSnowBattle) {
    const _0x12e82d = currentWeapon();
    if (_0x12e82d != 101631238) {
      const _0x5573a5 = mp.game.player.getEntityIsFreeAimingAt();
      if (_0x5573a5 && _0x12e82d == 126349499 && _0x5573a5.type && _0x5573a5.type === "player" && _0x5573a5.real_id) {
        mp.events.callRemote("Server_SnowballPlayer", _0x5573a5.real_id);
      }
      if (mp.game.invoke(getNative("GET_AMMO_IN_PED_WEAPON"), localplayer.handle, _0x12e82d) <= 1) {
        mp.game.invoke(getNative("GIVE_WEAPON_TO_PED"), localplayer.handle, _0x12e82d, 10, false, true);
        localplayer.taskReloadWeapon(false);
        localplayer.taskSwapWeapon(false);
      }
    }
  }
});
mp.events.add("Client_SnowballOnScreen", _0x8dc45d => {
  if (bChristmas2025 && atChristmasSnowBattle) {
    main_browser.execute("APPS.state.hud.snowball = 1");
    const _0x45b6b2 = 20;
    const _0x5a29fa = 30;
    const _0x38f009 = 1.2;
    const _0x40832e = 2.5;
    const _0x43a40e = localplayer.position;
    const _0x177bb8 = new mp.Vector3(_0x8dc45d.x, _0x8dc45d.y, _0x8dc45d.z);
    const _0x4e371d = _0x43a40e.x - _0x177bb8.x;
    const _0x55524a = _0x43a40e.y - _0x177bb8.y;
    const _0x48a84d = Math.sqrt(_0x4e371d * _0x4e371d + _0x55524a * _0x55524a);
    const _0x42889b = _0x4e371d / _0x48a84d;
    const _0x23c5b5 = _0x55524a / _0x48a84d;
    const _0x1580d7 = _0x45b6b2 + Math.random() * (_0x5a29fa - _0x45b6b2);
    const _0x27cff9 = _0x42889b * _0x1580d7;
    const _0x332d76 = _0x23c5b5 * _0x1580d7;
    const _0x58670e = _0x38f009 + Math.random() * (_0x40832e - _0x38f009);
    mp.game.ped.setPedToRagdoll(localplayer.handle, 800, 800, 0, false, false, false);
    mp.game.entity.applyForceTo(localplayer.handle, 1, _0x27cff9, _0x332d76, _0x58670e, 0, 0, 0, 0, false, true, true, false, true);
  }
});
mp.events.add("Client_RequestGPSForFurnitureShopFromChristmasDesign", () => {
  SetGPSLocation(2748.72, 3467.03, 55.697);
  closeChristmasDesign2025();
});
mp.events.add("Client_RequestOpenCraftFromChristmasDesign", _0x4716b8 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      closeChristmasDesign2025();
      mp.events.callRemote("Server_OrderCraftItems");
    }
  }
});
const CARGO_BOX_HASH = mp.game.joaat("grand_xmas_prop_biggift4");
let fallingGiftInterval;
const GIFT_FALL_DURATION = 8000;
let cargoBoxObject;
let giftPyramidObject;
function loadPtfxAsset(_0x1379c9) {
  return new Promise(_0x6f0a5b => {
    if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x1379c9)) {
      return _0x6f0a5b(true);
    }
    mp.game.streaming.requestNamedPtfxAsset(_0x1379c9);
    let _0x36d46a = 0;
    const _0x232229 = setInterval(() => {
      if (mp.game.streaming.hasNamedPtfxAssetLoaded(_0x1379c9) || _0x36d46a > 50) {
        clearInterval(_0x232229);
        _0x6f0a5b(mp.game.streaming.hasNamedPtfxAssetLoaded(_0x1379c9));
      }
      _0x36d46a++;
    }, 100);
  });
}
function handleGiftLanding(_0x476a52) {
  try {
    if (_0x476a52.ptfxHandle) {
      mp.game.graphics.stopParticleFxLooped(_0x476a52.ptfxHandle, false);
    }
    const _0x43f447 = _0x476a52.landPos;
    const _0x2fe708 = _0x476a52;
    if (_0x2fe708 && mp.objects.exists(_0x2fe708)) {
      _0x2fe708.destroy();
    }
    giftPyramidObject = mp.objects.new(CARGO_BOX_HASH, new mp.Vector3(_0x43f447.x, _0x43f447.y, _0x43f447.z - 1), {
      rotation: new mp.Vector3(0, 0, Math.random() * 360),
      alpha: 255,
      dimension: 0
    });
    giftPyramidObject.streamingRange = 500;
    giftPyramidObject.setLodDist(500);
    if (mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x43f447.x, _0x43f447.y, _0x43f447.z) < 250) {
      loadPtfxAsset("core").then(_0x24e7b3 => {
        if (_0x24e7b3) {
          mp.game.graphics.setPtfxAssetNextCall("core");
          mp.game.graphics.startParticleFxNonLoopedAtCoord("exp_grd_grenade_smoke", _0x43f447.x, _0x43f447.y, _0x43f447.z, 0, 0, 0, 10, false, false, false);
        }
      });
      loadPtfxAsset("proj_indep_firework_v2").then(_0x3f3327 => {
        if (_0x3f3327) {
          mp.game.graphics.setPtfxAssetNextCall("proj_indep_firework_v2");
          mp.game.graphics.startParticleFxNonLoopedAtCoord("scr_firework_indep_repeat_burst_rwb", _0x43f447.x, _0x43f447.y, _0x43f447.z + 3, 0, 0, 0, 1, false, false, false);
        }
      });
      mp.game.cam.shakeGameplayCam("SMALL_EXPLOSION_SHAKE", 0.1);
      mp.game.audio.playSoundFrontend(-1, "CHECKPOINT_MISSED", "HUD_MINI_GAME_SOUNDSET", false);
      setTimeout(() => {
        mp.game.audio.playSoundFrontend(-1, "CHECKPOINT_PERFECT", "HUD_MINI_GAME_SOUNDSET", false);
      }, 300);
    }
  } catch (_0xb06a5a) {
    mp.console.logInfo(_0xb06a5a.toString());
  }
}
mp.events.add("Client_DestroyDroppedGift", () => {
  if (fallingGiftInterval) {
    clearInterval(fallingGiftInterval);
    fallingGiftInterval = undefined;
  }
  if (giftPyramidObject && mp.objects.exists(giftPyramidObject)) {
    giftPyramidObject.destroy();
    giftPyramidObject = undefined;
  }
});
mp.events.add("Client_SetGiftDropFromFlyRoute", (_0x47dd88, _0x2caead, _0x3558b8) => {
  try {
    const _0x3cef0e = new mp.Vector3(_0x47dd88.x, _0x47dd88.y, _0x47dd88.z);
    const _0x571068 = new mp.Vector3(_0x2caead.x, _0x2caead.y, _0x2caead.z + 1.5);
    if (cargoBoxObject && mp.objects.exists(cargoBoxObject)) {
      cargoBoxObject.destroy();
      cargoBoxObject = undefined;
    }
    if (giftPyramidObject && mp.objects.exists(giftPyramidObject)) {
      giftPyramidObject.destroy();
      giftPyramidObject = undefined;
    }
    createGiftDropFireworks(_0x3cef0e, _0x3558b8);
    cargoBoxObject = mp.objects.new(CARGO_BOX_HASH, _0x3cef0e, {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    cargoBoxObject.streamingRange = 2000;
    cargoBoxObject.setLodDist(2000);
    cargoBoxObject.landPos = _0x571068;
    cargoBoxObject.startPos = _0x3cef0e;
    const _0x280ffd = Date.now();
    fallingGiftInterval = setInterval(() => {
      if (!cargoBoxObject || !mp.objects.exists(cargoBoxObject)) {
        clearInterval(fallingGiftInterval);
        fallingGiftInterval = undefined;
        return;
      }
      const _0x5b49ae = Date.now() - _0x280ffd;
      const _0x5a1fa3 = Math.min(_0x5b49ae / 8000, 1);
      if (_0x5a1fa3 >= 1 && !cargoBoxObject.hasLanded) {
        cargoBoxObject.hasLanded = true;
        handleGiftLanding(cargoBoxObject);
        return;
      }
      cargoBoxObject.swingParams ||= {
        swingAmplitudeX: 0.5 + Math.random() * 1,
        swingAmplitudeY: 0.5 + Math.random() * 1,
        swingFrequencyX: 1.5 + Math.random() * 1,
        swingFrequencyY: 1.8 + Math.random() * 1,
        phaseOffsetX: Math.random() * Math.PI * 2,
        phaseOffsetY: Math.random() * Math.PI * 2,
        rotationSpeedX: 20 + Math.random() * 40,
        rotationSpeedY: 15 + Math.random() * 35,
        rotationSpeedZ: 30 + Math.random() * 50,
        initialRotation: new mp.Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360)
      };
      const _0x24a735 = cargoBoxObject.swingParams;
      const _0x1f94a6 = _0x5b49ae / 1000;
      const _0x3ee682 = Math.min(_0x5a1fa3 * 2, 1);
      const _0x20d5c0 = Math.sin(_0x1f94a6 * _0x24a735.swingFrequencyX + _0x24a735.phaseOffsetX) * _0x24a735.swingAmplitudeX * _0x3ee682;
      const _0x4d49b0 = Math.sin(_0x1f94a6 * _0x24a735.swingFrequencyY + _0x24a735.phaseOffsetY) * _0x24a735.swingAmplitudeY * _0x3ee682;
      const _0x213a11 = cargoBoxObject.landPos.x + _0x20d5c0;
      const _0x4e4da3 = cargoBoxObject.landPos.y + _0x4d49b0;
      const _0x42d5ac = cargoBoxObject.startPos.z + (cargoBoxObject.landPos.z - cargoBoxObject.startPos.z) * _0x5a1fa3;
      cargoBoxObject.position = new mp.Vector3(_0x213a11, _0x4e4da3, _0x42d5ac);
      const _0x4782fd = 1 - _0x5a1fa3 * 0.3;
      const _0x179a01 = _0x24a735.initialRotation.x + _0x24a735.rotationSpeedX * _0x1f94a6 * _0x4782fd;
      const _0x36017f = _0x24a735.initialRotation.y + _0x24a735.rotationSpeedY * _0x1f94a6 * _0x4782fd;
      const _0x4f833c = _0x24a735.initialRotation.z + _0x24a735.rotationSpeedZ * _0x1f94a6 * _0x4782fd;
      const _0x54cb0d = _0x20d5c0 * 15;
      const _0x715587 = _0x4d49b0 * 15;
      cargoBoxObject.rotation = new mp.Vector3(_0x179a01 + _0x54cb0d, _0x36017f + _0x715587, _0x4f833c);
    }, 16);
  } catch (_0x20d3bd) {
    mp.console.logInfo(_0x20d3bd.toString());
  }
});
const finishPosition = new mp.Vector3(-1338.041, 253.59, 61.568);
let truckerTrailer = null;
let truckerTrailerBlip = null;
let truckerTrailerMarkerRender = null;
let truckerAttachedTrailer = null;
let truckerTrailerAttachListenerInterval = null;
let truckerFinishBlip = null;
let truckerFinishShape = null;
let truckerFinishCheckpoint = null;
function truckerTrailerAttachListener() {
  const {
    vehicle: _0x46b5d2
  } = localplayer;
  if (!_0x46b5d2) {
    return;
  }
  const _0x2ae80c = _0x46b5d2.isAttachedToTrailer();
  if ((!_0x2ae80c || !truckerAttachedTrailer) && (!!_0x2ae80c || !!truckerAttachedTrailer)) {
    if (_0x2ae80c) {
      const _0x9fdbb7 = _0x46b5d2.getTrailer(0);
      const _0x4d51c8 = mp.vehicles.atHandle(_0x9fdbb7);
      if (_0x4d51c8 && _0x4d51c8 === truckerTrailer) {
        truckerAttachedTrailer = _0x4d51c8;
        if (truckerTrailerBlip) {
          truckerTrailerBlip.destroy();
          truckerTrailerBlip = null;
        }
        if (truckerTrailerMarkerRender) {
          truckerTrailerMarkerRender.destroy();
          truckerTrailerMarkerRender = null;
        }
        setTruckerFinish();
      } else if (_0x4d51c8 && _0x4d51c8 !== truckerTrailer) {
        ShowNotification(language["Это не Ваш трейлер!"][curr_lang], 6);
        _0x46b5d2.detachFromTrailer();
      }
    } else {
      truckerAttachedTrailer = null;
    }
  }
}
function setTruckerFinish() {
  truckerFinishShape = mp.colshapes.newCircle(finishPosition.x, finishPosition.y, 16, localplayer.dimension);
  truckerFinishShape.bTruckerFinish = true;
  truckerFinishBlip = mp.blips.new(1, finishPosition, {
    name: language["Тoчкa нaзнaчeния"][curr_lang],
    color: 5,
    dimension: localplayer.dimension
  });
  truckerFinishCheckpoint = mp.checkpoints.new(10, new mp.Vector3(finishPosition.x, finishPosition.y, finishPosition.z + 2), 16, {
    direction: new mp.Vector3(0, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: localplayer.dimension
  });
  truckerFinishBlip.setRoute(true);
}
function cleanTruckerEntities() {
  if (truckerTrailerBlip) {
    truckerTrailerBlip.destroy();
    truckerTrailerBlip = null;
  }
  if (truckerTrailerMarkerRender) {
    truckerTrailerMarkerRender.destroy();
    truckerTrailerMarkerRender = null;
  }
  if (truckerTrailerAttachListenerInterval) {
    clearInterval(truckerTrailerAttachListenerInterval);
    truckerTrailerAttachListenerInterval = null;
  }
  if (truckerFinishBlip) {
    truckerFinishBlip.destroy();
    truckerFinishBlip = null;
  }
  if (truckerFinishShape) {
    truckerFinishShape.destroy();
    truckerFinishShape = null;
  }
  if (truckerFinishCheckpoint) {
    truckerFinishCheckpoint.destroy();
    truckerFinishCheckpoint = null;
  }
  truckerTrailer = null;
  truckerAttachedTrailer = null;
}
mp.events.add("Client_StartChristmasTrucker2025", _0x4412ef => {
  truckerTrailer = _0x4412ef;
  truckerAttachedTrailer = null;
  if (truckerTrailer) {
    truckerTrailerBlip = mp.blips.new(1, truckerTrailer.position, {
      name: language["Тoчкa нaзнaчeния"][curr_lang],
      color: 5,
      dimension: localplayer.dimension
    });
    truckerTrailerBlip.setRoute(true);
  }
  truckerTrailerMarkerRender = new mp.Event("render", () => {
    if (!truckerTrailer || truckerAttachedTrailer) {
      return;
    }
    const {
      x: _0x52a22e,
      y: _0x14b861,
      z: _0x3f31cb
    } = truckerTrailer.position;
    mp.game.graphics.drawMarker(0, _0x52a22e, _0x14b861, _0x3f31cb + 4.5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 255, 255, 0, 155, true, false, 2, false, null, null, false);
  });
  setTimeout(() => {
    truckerTrailerAttachListenerInterval = setInterval(truckerTrailerAttachListener, 1000);
  }, 2000);
});
mp.events.add("playerEnterColshape", _0x33de6a => {
  if (_0x33de6a.bTruckerFinish && truckerAttachedTrailer) {
    PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET");
    cleanTruckerEntities();
    mp.events.callRemote("Server_FinishedChristmasTrucker");
  }
});
mp.events.add("Client_CancelChristmasTrucker2025", () => {
  cleanTruckerEntities();
});