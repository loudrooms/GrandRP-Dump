let dog_interval = null;
let is_dog_in_anim = false;
let dog_action = 0;
let attacked_entity = null;
let dog_stamina = 0;
let dog_model = "";
let is_pet_org = false;
let dog = null;
let last_dog_step = 0;
let dogAbilitesInterval = null;
mp.events.add("Client_StartDogActions", (_0x5079b5, _0x8df853, _0x4325e9, _0x49eb73 = "", _0xda9c41 = false, _0x348b49 = "", _0x7b0d61 = 0) => {
  if (dog_interval != null) {
    clearInterval(dog_interval);
    dog_interval = null;
  }
  CloseDogChoose();
  const _0x5e1d3a = localplayer;
  if (_0x5e1d3a && mp.players.exists(_0x5e1d3a) && _0x5079b5 && mp.peds.exists(_0x5079b5)) {
    _0x5079b5.setProofs(false, true, true, true, true, true, true, true);
    last_dog_step = 0;
    dog = _0x5079b5;
    _0x5079b5.is_my_dog = true;
    is_dog_in_anim = false;
    dog_action = 0;
    attacked_entity = null;
    dog_stamina = _0x8df853;
    dog_model = _0x49eb73;
    is_pet_org = _0xda9c41;
    main_browser.execute("APPS.state.hud.pet_show = true;");
    main_browser.execute("APPS.state.hud.pet_action_show = false;");
    main_browser.execute("APPS.state.hud.pet_org_pet = " + _0xda9c41 + ";");
    main_browser.execute("APPS.state.hud.dog_type = " + _0x4325e9 + ";");
    main_browser.execute("APPS.state.hud.dog_name = '" + _0x348b49 + "';");
    main_browser.execute("APPS.state.hud.pet_mood = " + _0x8df853 + ";");
    if (_0x7b0d61 >= 2 && _0x7b0d61 <= 3 && dogAbilitesInterval == null) {
      dogAbilitesInterval = setInterval(() => {
        const _0x5bc62f = Math.floor(Math.random() * 100) + 0;
        if (_0x5bc62f < 5 && _0x5bc62f >= 0) {
          mp.events.callRemote("Server_ApplyDogAbility");
        }
      }, 60000);
    }
    dog_interval = setInterval(() => {
      if (_0x5e1d3a && mp.players.exists(_0x5e1d3a) && _0x5079b5 && mp.peds.exists(_0x5079b5)) {
        if (dog_stamina > 0) {
          dog_stamina--;
        }
        const _0x5bf6fa = new mp.Vector3(_0x5079b5.getCoords(false).x, _0x5079b5.getCoords(false).y, _0x5079b5.getCoords(false).z);
        const _0x4184e9 = _0x5079b5.getHealth();
        let _0x3489c8;
        const _0x4b47bb = getDistance(_0x5e1d3a.position, _0x5bf6fa);
        _0x3489c8 = _0x4b47bb > 6 ? 5 : _0x4b47bb > 4 ? 3 : 1;
        if (is_pet_org && dog.isInMeleeCombat() && dog_action != 3) {
          dog.clearTasksImmediately();
          if (dog_action == 2 && get_ball_coords != null) {
            DogGoStraightToCoords(get_ball_coords);
          }
        }
        if (dog.dimension != localplayer.dimension) {
          mp.events.callRemote("Server_ChangeDogDimension");
          return;
        }
        if (!dog.handle && (!dog.teleported_back || dog.teleported_back < 5)) {
          if (dog.teleported_back) {
            dog.teleported_back++;
          } else {
            dog.teleported_back = 1;
          }
          mp.events.callRemote("Server_TryToGetDogBack");
          return;
        }
        if (dog.teleported_back && dog.handle) {
          dog.teleported_back = undefined;
        }
        if (localplayer.vehicle) {
          _0x5079b5.setCoords(localplayer.position.x + 3, localplayer.position.y, localplayer.position.z + 30, true, false, false, true);
          _0x5079b5.freezePosition(true);
          _0x5079b5.invisible = true;
        } else if (_0x5079b5.invisible && !localplayer.vehicle) {
          _0x5079b5.setCoords(localplayer.position.x + 2, localplayer.position.y, localplayer.position.z + 1, true, false, false, true);
          _0x5079b5.freezePosition(false);
          _0x5079b5.invisible = false;
        }
        if (dog_action == 0) {
          if (_0x4b47bb <= 1.3 && is_dog_in_anim != 1) {
            last_dog_step = 0;
            if (is_pet_org) {
              is_dog_in_anim = true;
              last_dog_anim_dict = "creatures@rottweiler@amb@sleep_in_kennel@";
              last_dog_anim = "sleep_in_kennel";
              play_animation(_0x5079b5, "creatures@rottweiler@amb@sleep_in_kennel@", "sleep_in_kennel", 1, 1);
            } else {
              _0x5079b5.clearTasks();
            }
          } else if (_0x4b47bb > 1.3) {
            if (is_dog_in_anim == 1 && is_pet_org) {
              is_dog_in_anim = false;
              StopDogAnim(_0x5079b5, last_dog_anim_dict, last_dog_anim);
            } else if (_0x4b47bb > 20) {
              if (_0x5079b5.invisible && _0x4b47bb > 40) {
                _0x5079b5.setCoords(localplayer.position.x + 3, localplayer.position.y, localplayer.position.z + 30, true, false, false, true);
                _0x5079b5.freezePosition(true);
              } else if (!_0x5079b5.invisible) {
                _0x5079b5.setCoords(localplayer.position.x + 2, localplayer.position.y, localplayer.position.z + 1, true, false, false, true);
              }
            } else {
              if (last_dog_step == _0x3489c8) {
                return;
              }
              last_dog_step = _0x3489c8;
              _0x5079b5.clearTasks();
              _0x5079b5.taskFollowToOffsetOf(localplayer.handle, getRandomInt(1, 2), getRandomInt(0, 2), 0, _0x3489c8, -1, 0.5, true);
            }
          }
        } else if (is_pet_org && dog_action == 2) {
          if (get_ball_coords != null && getDistance(dog.position, get_ball_coords) <= 1) {
            dog_action = 0;
            get_ball_coords = null;
          }
        } else if (is_pet_org && dog_action == 4) {
          if (get_ball_coords != null && getDistance(dog.position, get_ball_coords) <= 1) {
            dog_action = 0;
            get_ball_coords = null;
            if (founded_illegal == 1) {
              mp.game.ui.notifications.show(language["Собака учуяла нелегальные предметы"][curr_lang], false, 0, 25);
            } else {
              mp.game.ui.notifications.show(language["Собака не учуяла нелегальных предметов"][curr_lang], false, 0, 6);
            }
          }
        } else if (is_pet_org && attacked_entity != null) {
          if (mp.players.exists(attacked_entity)) {
            if (attacked_entity.isDead() || attacked_entity.vehicle && attacked_entity.isInAnyVehicle(false)) {
              dog.setCombatAbility(0);
              CancelAllDogActions();
            }
          } else {
            CancelAllDogActions();
          }
        }
        if (_0x4184e9 <= 0) {
          CancelFollowDog(1);
        }
      }
    }, 500);
  }
  return true;
});
let last_dog_anim_dict;
let last_dog_anim;
let need_to_wait_next_tick = false;
function CancelFollowDog(_0x784052) {
  if (dog_interval != null) {
    clearInterval(dog_interval);
    dog_interval = null;
  }
  mp.events.callRemote("Server_CancelDogDisappear", _0x784052);
}
function StopDogAnim(_0x5cce05, _0x517ea6, _0xa0d193) {
  try {
    if (mp.peds.exists(_0x5cce05)) {
      _0x5cce05.stopAnimTask(_0x517ea6, _0xa0d193, 3);
      if (_0x5cce05.isPlayingAnim(_0x517ea6, _0xa0d193, 3) == 0) {
        _0x5cce05.clearTasksImmediately();
        _0x5cce05.clearTasks();
      }
    }
  } catch (_0x4b6840) {
    mp.gui.chat.push("stop_dog.error", _0x4b6840);
  }
}
function getDistance(_0x28157b, _0x2d5f45) {
  return Math.sqrt(Math.pow(_0x28157b.x - _0x2d5f45.x, 2) + Math.pow(_0x28157b.y - _0x2d5f45.y, 2) + Math.pow(_0x28157b.z - _0x2d5f45.z, 2));
}
function isInRangeOfPoint(_0x44eceb, _0x2bc086, _0x4c8804) {
  return Math.sqrt(Math.pow(_0x44eceb.x - _0x2bc086.x, 2) + Math.pow(_0x44eceb.y - _0x2bc086.y, 2) + Math.pow(_0x44eceb.z - _0x2bc086.z, 2)) <= _0x4c8804;
}
function CancelAllDogActions() {
  dog.clearTasksImmediately();
  last_dog_step = 0;
  dog_action = 0;
  dog.taskFollowToOffsetOf(localplayer.handle, 0, 0, 0, 1, -1, 0.5, true);
}
let can_throw_ball = false;
mp.events.add("Client_CanThrowDogBall", () => {
  if (is_pet_org) {
    can_throw_ball = true;
  }
});
let get_ball_coords = null;
function GiveDogStamina(_0x56e267) {
  if (is_pet_org) {
    if (_0x56e267 < 0 && dog_stamina - _0x56e267 < 0) {
      dog_stamina = 0;
    } else {
      dog_stamina += _0x56e267;
    }
    if (dog_stamina > 10000) {
      dog_stamina = 10000;
    }
    main_browser.execute("APPS.state.hud.pet_mood = " + dog_stamina + ";");
    mp.events.callRemote("Server_ChangeDogStamina", dog_stamina);
  }
}
mp.events.add("playerWeaponShot", (_0x4074e8, _0x2a2e9b) => {
  if (is_pet_org && can_throw_ball && _0x4074e8 && _0x4074e8.x != 0 && dog && mp.peds.exists(dog)) {
    if (dog_action == 4) {
      return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
    }
    if (dog_stamina < 200) {
      return mp.game.ui.notifications.show(language["У собаки нет энергии, чтобы выполнить данное действие"][curr_lang], false, 0, 6);
    }
    dog.clearTasksImmediately();
    dog_action = 2;
    DogGoStraightToCoords(_0x4074e8);
    get_ball_coords = _0x4074e8;
    GiveDogStamina(-200);
  }
});
mp.events.add("Client_DogEating", () => {
  if (is_pet_org && dog && mp.peds.exists(dog)) {
    dog_action = 4;
    GiveDogStamina(2000);
    play_animation(dog, "creatures@rottweiler@tricks@", "petting_chop", 1, 1);
    setTimeout(() => {
      if (dog && mp.peds.exists(dog)) {
        StopDogAnim(dog, "creatures@rottweiler@tricks@", "petting_chop");
        if (dog_action == 4) {
          dog_action = 0;
        }
      }
    }, 3000);
  }
});
global.is_mouse_select_position = false;
let dog_action_select = 0;
let dog_select_click_ready = false;
let dog_select_click_ready_timer = null;
function StartDogActions(_0x375caa) {
  dog_action_select = _0x375caa;
  is_mouse_select_position = true;
  dog_select_click_ready = false;
  if (dog_select_click_ready_timer) {
    clearTimeout(dog_select_click_ready_timer);
  }
  dog_select_click_ready_timer = setTimeout(() => {
    dog_select_click_ready = true;
    dog_select_click_ready_timer = null;
  }, 150);
  mp.gui.cursor.show(false, true);
}
function StopDogActions() {
  dog_action_select = 0;
  is_mouse_select_position = false;
  dog_select_click_ready = false;
  if (dog_select_click_ready_timer) {
    clearTimeout(dog_select_click_ready_timer);
    dog_select_click_ready_timer = null;
  }
  mp.gui.cursor.show(false, false);
}
function DogGoStraightToCoords(_0x419e59) {
  if (is_dog_in_anim == 1) {
    is_dog_in_anim = false;
    StopDogAnim(entity, last_dog_anim_dict, last_dog_anim);
  }
  last_dog_step = 0;
  let _0xd982d1 = 1;
  if (getDistance(dog.position, new mp.Vector3(_0x419e59.x, _0x419e59.y, _0x419e59.z)) > 5) {
    _0xd982d1 = 5;
  }
  dog.taskGoStraightToCoord(_0x419e59.x, _0x419e59.y, _0x419e59.z, _0xd982d1, -1, getEntityHeadingToPoint(dog.position, _0x419e59), 1);
}
global.getEntityHeadingToPoint = function (_0x3c05d3, _0x18c6de) {
  const _0xc7b2d9 = _0x18c6de.x - _0x3c05d3.x;
  const _0x211244 = _0x18c6de.y - _0x3c05d3.y;
  return Math.atan2(_0x211244, _0xc7b2d9) * (180 / Math.PI);
};
mp.events.add("click", (_0x5db3ac, _0x49c2d6, _0x58f734, _0x3efbd4, _0x2857e8, _0x2d074a, _0x270f1d, _0x3d6a1b) => {
  if (is_mouse_select_position == 0) {
    return;
  }
  if (!dog_select_click_ready || _0x3efbd4 != "left" || _0x58f734 != "up") {
    return;
  }
  const _0x55b198 = screen2d3d.screen2dToWorld3d(_0x5db3ac, _0x49c2d6);
  if (_0x55b198 && _0x55b198.position && dog && mp.peds.exists(dog)) {
    if (dog_action_select == 1) {
      if (dog_action == 4) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      if (dog_stamina < 200) {
        return mp.game.ui.notifications.show(language["У собаки нет энергии, чтобы выполнить данное действие"][curr_lang], false, 0, 6);
      }
      dog_action = 1;
      dog.clearTasksImmediately();
      DogGoStraightToCoords(_0x55b198.position);
      mp.events.callRemote("Server_DoDogAnimation");
      GiveDogStamina(-200);
    } else if (is_pet_org && dog_action_select == 2 && _0x55b198.entity && _0x55b198.entity.type == "player" && _0x55b198.entity.getAlpha() != 0) {
      if (dog_action == 4) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      if (dog_stamina < 200) {
        return mp.game.ui.notifications.show(language["У собаки нет энергии, чтобы выполнить данное действие"][curr_lang], false, 0, 6);
      }
      dog_action = 3;
      if (is_dog_in_anim == 1) {
        is_dog_in_anim = false;
        StopDogAnim(dog, last_dog_anim_dict, last_dog_anim);
      }
      dog.clearTasksImmediately();
      dog.taskCombat(_0x55b198.entity.handle, 0, 16);
      attacked_entity = _0x55b198.entity;
      mp.events.callRemote("Server_DoDogAnimation");
      GiveDogStamina(-200);
    } else if (is_pet_org && dog_action_select == 3 && _0x55b198.entity && _0x55b198.entity.type == "player" && _0x55b198.entity.getAlpha() != 0) {
      if (dog_action == 4) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      if (dog_stamina < 200) {
        return mp.game.ui.notifications.show(language["У собаки нет энергии, чтобы выполнить данное действие"][curr_lang], false, 0, 6);
      }
      dog_action = 4;
      if (is_dog_in_anim == 1) {
        is_dog_in_anim = false;
        StopDogAnim(dog, last_dog_anim_dict, last_dog_anim);
      }
      founded_illegal = false;
      DogGoStraightToCoords(_0x55b198.position);
      get_ball_coords = _0x55b198.position;
      mp.events.callRemote("Server_SearchIllegalPlayer", _0x55b198.entity);
      mp.events.callRemote("Server_DoDogAnimation");
      GiveDogStamina(-200);
    }
  }
  StopDogActions();
});
mp.events.add("Client_FoundedIllegal", () => {
  founded_illegal = true;
});
let founded_illegal = false;
mp.events.add("Client_DogShowCancel", () => {
  if (dog_interval != null) {
    clearInterval(dog_interval);
    dog_interval = null;
  }
  if (dogAbilitesInterval != null) {
    clearInterval(dogAbilitesInterval);
    dogAbilitesInterval = null;
  }
  dog = null;
  main_browser.execute("APPS.state.hud.pet_show = false;");
});
mp.events.add("render", () => {
  if (in_dog_choose == 0 && is_mouse_select_position == 0 || dog == null) {
    return;
  }
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
  if (is_mouse_select_position == 0) {
    return;
  }
  const _0x3c7970 = mp.gui.cursor.position;
  let _0x43585f = screen2d3d.screen2dToWorld3d(_0x3c7970[0], _0x3c7970[1]);
  if (_0x43585f && _0x43585f.position) {
    let _0x1406c3 = "";
    if (_0x43585f.entity && _0x43585f.entity.type == "player" && _0x43585f.entity.getAlpha() != 0) {
      _0x1406c3 = language["~r~Игрок"][curr_lang];
    }
    mp.game.graphics.drawText(_0x1406c3, [_0x43585f.position.x, _0x43585f.position.y, _0x43585f.position.z], {
      font: 0,
      color: [255, 255, 255, 185],
      scale: [0.4, 0.4]
    });
    mp.game.graphics.drawMarker(28, _0x43585f.position.x, _0x43585f.position.y, _0x43585f.position.z, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 255, 255, 255, 100, false, false, 2, false, null, null, false);
  }
});
global.PetsChooseOpened = false;
mp.events.add("Client_OpenPetsChoosen", _0x436765 => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x511a12 = "{\"in_route\":[" + _0x436765 + "],\"show\":true}";
  main_browser.execute("APPS.state.pets = " + _0x511a12);
  PetsChooseOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseDogChoose = function () {
  if (PetsChooseOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.pets.show = false;");
    PetsChooseOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ChooseDog", _0x321eaa => {
  if (PetsChooseOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChooseDog", _0x321eaa);
    }
  }
});
mp.events.add("Client_DogAction", _0x485ab6 => {
  if (dog && mp.peds.exists(dog)) {
    CloseDogActionChoose();
    if (is_pet_org && _0x485ab6 == 1) {
      StartDogActions(3);
    } else if (is_pet_org && _0x485ab6 == 2) {
      StartDogActions(2);
    } else if (_0x485ab6 == 3) {
      StartDogActions(1);
    } else if (is_pet_org && _0x485ab6 == 4) {
      if (dog_action != 0) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      mp.events.callRemote("Server_GiveBallToPlayDog");
    } else if (is_pet_org && _0x485ab6 == 5) {
      if (dog_action != 0) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      if (dog_stamina >= 10000) {
        return mp.game.ui.notifications.show(language["Собака не нуждается в еде"][curr_lang], false, 0, 6);
      }
      mp.events.callRemote("Server_GiveDogEat");
    } else if (is_pet_org && _0x485ab6 == 6) {
      if (dog_action != 0) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      dog_action = 4;
      GiveDogStamina(500);
      mp.events.callRemote("Server_DoDogAnimation");
      play_animation(dog, "creatures@rottweiler@tricks@", "beg_loop", 1, 1);
      setTimeout(() => {
        if (dog && mp.peds.exists(dog)) {
          StopDogAnim(dog, "creatures@rottweiler@tricks@", "beg_loop");
          if (dog_action == 4) {
            dog_action = 0;
          }
        }
      }, 3000);
    } else if (is_pet_org && _0x485ab6 == 7) {
      if (dog_action != 0) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      dog_action = 4;
      GiveDogStamina(500);
      mp.events.callRemote("Server_DoDogAnimation");
      play_animation(dog, "creatures@rottweiler@tricks@", "paw_right_loop", 1, 1);
      setTimeout(() => {
        if (dog && mp.peds.exists(dog)) {
          StopDogAnim(dog, "creatures@rottweiler@tricks@", "paw_right_loop");
          if (dog_action == 4) {
            dog_action = 0;
          }
        }
      }, 3000);
    } else if (_0x485ab6 == 8) {
      if (dog_action == 4) {
        return mp.game.ui.notifications.show(language["Собака занята выполнением другого действия"][curr_lang], false, 0, 6);
      }
      CancelAllDogActions();
      mp.events.callRemote("Server_DoDogAnimation");
    } else if (_0x485ab6 == 9) {
      CancelFollowDog(2);
    }
  }
});
global.in_dog_choose = false;
mp.keys.bind(76, false, function () {
  if (GlobalCheck() != 1 || in_dog_choose != 0) {
    if (dog != null) {
      if (in_dog_choose) {
        CloseDogActionChoose();
      } else {
        main_browser.execute("APPS.state.hud.pet_org_pet = " + is_pet_org + ";");
        main_browser.execute("APPS.state.hud.pet_action_show = true;");
        in_dog_choose = true;
        mp.gui.cursor.show(false, true);
      }
    }
  }
});
global.CloseDogActionChoose = function () {
  if (in_dog_choose) {
    mp.gui.cursor.show(false, false);
    main_browser.execute("APPS.state.hud.pet_action_show = false;");
    in_dog_choose = false;
  }
};
global.at_pets_graveyard = false;
mp.events.add("Client_PetsGraveyardInteract", _0x418d3c => {
  if (_0x418d3c == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  at_pets_graveyard = _0x418d3c;
});
let spritePosition;
let spriteTimeout = 0;
let bShowSprite = false;
mp.events.add("Client_FeedDogSprite", _0x143f9e => {
  spritePosition = _0x143f9e;
  spriteTimeout = 0;
  bShowSprite = true;
  if (curr_lang != "ru") {
    StartCustomSound("petheal", "/game/gui/sounds/petheal.ogg", 0.1);
  } else {
    StartCustomSound("petheal", "sounds/petheal.ogg", 0.1);
  }
});
mp.events.add("render", () => {
  if (bShowSprite) {
    const _0x602ec = mp.game.graphics.world3dToScreen2d(spritePosition.x, spritePosition.y, spritePosition.z);
    if (!_0x602ec) {
      return false;
    }
    drawSprite("grandtextures", "petheart", [0.2, 0.2], 0, [255, 255, 255, 255], _0x602ec.x, _0x602ec.y);
    spritePosition.z += 0.005;
    spriteTimeout++;
    if (spriteTimeout >= 300) {
      bShowSprite = false;
    }
  }
});
mp.events.add("Client_RequestBuyPetshopItem", _0x59eb20 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestBuyPetshopItem", _0x59eb20);
  }
});
mp.events.add("Client_RequestSpawnPet", _0x158e12 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestSpawnPet", _0x158e12);
  }
});
global.petDesignOpened = false;
mp.events.add("Client_OpenPetDesign", _0x1f8f6a => {
  if (petDesignOpened) {
    return;
  }
  petDesignOpened = true;
  SwitchHUDToDesign(true);
  const _0x32bb95 = "{\"mypets\":" + JSON.stringify(_0x1f8f6a) + ",\"show\":true}";
  main_browser.execute("APPS.state.mypet = " + _0x32bb95);
});
global.ClosePetDesign = function () {
  if (petDesignOpened) {
    petDesignOpened = false;
    SwitchHUDToDesign(false);
    main_browser.execute("APPS.state.mypet.show = false");
  }
};
mp.events.add("Client_ClosePetDesign", () => {
  ClosePetDesign();
});
mp.events.add("Client_RequestSendPetSleep", _0x1b734b => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestSendPetSleep", _0x1b734b);
  }
});
mp.events.add("Client_RequestPetGatherResources", _0x40469e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendPetToGatherResources", _0x40469e);
  }
});
mp.events.add("Client_RequestGuardBunker", _0x196a4c => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendPetToGuardBunker", _0x196a4c);
  }
});
mp.events.add("Client_RequestChangePetName", _0x18e8c4 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestChangePetsName", _0x18e8c4);
  }
});
mp.events.add("Client_RequestSendPetTraining", _0x331e2d => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendPetToTraining", _0x331e2d);
  }
});
mp.events.add("Client_RequestBuryPet", _0x31ae67 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestBuryPet", _0x31ae67);
  }
});
mp.events.add("Client_RequestExtendLife", _0x22eb9b => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ExtendPetLife", _0x22eb9b);
  }
});
mp.events.add("Client_RequestMergePets", _0x816e69 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestMergePets", _0x816e69);
  }
});
mp.events.add("Client_CollectPetResources", _0x55ae83 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetResourcesFromPet", _0x55ae83);
  }
});
mp.events.add("Client_GetPetItemInInv", _0x169496 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetPetItemInInv", _0x169496);
  }
});
mp.events.add("Client_RequestRefillPetStamina", _0x55dd70 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestRefillPetStamina", _0x55dd70);
  }
});
mp.events.add("Client_RequestResurrectPet", _0x192230 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestResurrectPet", _0x192230);
  }
});