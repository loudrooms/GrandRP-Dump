let deathtimer = null;
let tipchange_interval = null;
global.at_death = false;
global.at_death2 = false;
global.is_dead = false;
const GET_UP_DICT = "get_up@directional@movement@from_knees@standard";
const GET_UP_ANIM = "getup_l_0";
global.reviveLocalPed = function () {
  mp.players.local.taskRevive();
};
global.lastDeathCauseWeapon = 0;
const DEATH_ANIM_DICT = "missfinale_c2steve_cameraman_death";
const DEATH_ANIM_NAME = "death_camman";
function setDeathAnimationFinally(_0x22919b) {
  if (_0x22919b === mp.players.local) {
    _0x22919b.prepareScriptedDeathPose();
    play_animation2(_0x22919b, DEATH_ANIM_DICT, "death_camman", 8, -8, -1, 2, 0, false, false, false);
  } else {
    play_animation(_0x22919b, DEATH_ANIM_DICT, "death_camman", 1, 2);
  }
}
global.applyDeathAnimation = function (_0x5d0014, _0x40d4dd) {
  if (!_0x5d0014 || !mp.players.exists(_0x5d0014)) {
    return;
  }
  if (_0x5d0014 === mp.players.local && mp.players.local.vehicle) {
    return;
  }
  if (_0x5d0014.death_anim_applied) {
    return;
  }
  if (!!_0x40d4dd && _0x40d4dd.requireDeadState === false || !!_0x5d0014.dead_state) {
    _0x5d0014.death_anim_applied = true;
    setDeathAnimationFinally(_0x5d0014);
    if (_0x5d0014 === mp.players.local) {
      setTimeout(() => {
        if (mp.players.exists(_0x5d0014) && _0x5d0014 === mp.players.local) {
          if (!_0x5d0014.isPlayingAnim(DEATH_ANIM_DICT, "death_camman", 3)) {
            if (_0x5d0014.isRagdoll()) {
              setDeathAnimationFinally(_0x5d0014);
            }
          }
        }
      }, 100);
    }
  }
};
let deathseconds = 180;
let pl_VipLevel = 0;
let selfReviveLeft = 0;
mp.events.add("DeathShow", (_0x4548ab = "", _0x23514d = "", _0x16b09f = "", _0x474dd9 = 0, _0x1c13de = 0, _0x3f4e69 = 0) => {
  CloseBrowsers();
  mp.events.call("Disablechat");
  if (curr_lang != "ru") {
    localplayer.freezeEntityPosition(true);
  }
  deathseconds = 180;
  at_death = true;
  at_death2 = true;
  is_dead = true;
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 250);
  mp.game.ui.displayRadar(false);
  let _0x48f79c = "";
  if (_0x4548ab != "") {
    _0x48f79c = _0x4548ab && mp.players.exists(_0x4548ab) && (mp.storage.data.friends[_0x4548ab.name] != null && !_0x4548ab.getDrawableVariation(1) || tempfriends[_0x4548ab.name] != null || local_family == _0x4548ab.family && local_family || local_member == _0x4548ab.member && local_member > 0 || spose_id && spose_id === _0x4548ab.real_id) ? _0x4548ab.name.replace("_", " ") + "[" + _0x4548ab.real_id + "]" : TranslateText("Незнакомец ({0})", _0x4548ab.real_id);
  }
  const _0x3df7ec = getDeathHints();
  selfReviveLeft = parseInt(_0x1c13de) || 0;
  const _0x22ad89 = parseInt(_0x3f4e69) || 0;
  const _0x4c81d2 = "{\"hint\":" + JSON.stringify(_0x3df7ec[getRandomInt(0, _0x3df7ec.length)]) + ",\"hint_progress\":100,\"time_left\":'3:00',\"button_showed\":true,\"serial_killer_description\":" + JSON.stringify(_0x23514d) + ",\"serial_killer_name\":" + JSON.stringify(_0x16b09f) + ",\"killer_name\":" + JSON.stringify(_0x48f79c) + (",\"show\":true,\"viplevel\":" + _0x22ad89 + ",\"self_revive_left\":" + selfReviveLeft + "}");
  main_browser.execute("APPS.state.death = " + _0x4c81d2);
  if (global.curr_lang == "ru") {
    pl_VipLevel = _0x474dd9;
  }
  if (deathtimer == null) {
    deathtimer = setInterval(function () {
      deathseconds -= 1;
      let _0x344001 = deathseconds % 60;
      let _0x21481f = deathseconds / 60;
      let _0x90a3df = "";
      if (deathseconds > 0) {
        _0x90a3df = _0x344001 >= 10 ? Math.floor(_0x21481f) + ":" + Math.round(_0x344001) : Math.floor(_0x21481f) + ":0" + Math.round(_0x344001);
      } else {
        if (deathtimer != null) {
          clearInterval(deathtimer);
          deathtimer = null;
        }
        if (tipchange_interval != null) {
          clearInterval(tipchange_interval);
          tipchange_interval = null;
        }
        main_browser.execute("APPS.state.death.show = false");
        mp.gui.cursor.show(false, false);
        if (curr_lang != "ru") {
          localplayer.freezeEntityPosition(false);
        }
        if (curr_lang != "ru") {
          is_freezed = false;
        }
        mp.events.call("Enablechat");
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
        mp.events.callRemote("DeathInWait");
      }
      main_browser.execute("APPS.state.death.time_left = '" + _0x90a3df + "'");
      if (selfReviveLeft > 0) {
        selfReviveLeft--;
        main_browser.execute("APPS.state.death.self_revive_left = " + selfReviveLeft);
      }
    }, 1000);
  }
  if (!tipchange_interval) {
    let _0x2b4498 = 100;
    tipchange_interval = setInterval(() => {
      _0x2b4498--;
      main_browser.execute("APPS.state.death.hint_progress = " + _0x2b4498);
      if (_0x2b4498 <= 0) {
        main_browser.execute("APPS.state.death.hint = " + JSON.stringify(getDeathHints()[getRandomInt(0, DEATH_HINT_KEYS.length)]));
        _0x2b4498 = 100;
        main_browser.execute("APPS.state.death.hint_progress = " + _0x2b4498);
      }
    }, 100);
  }
});
mp.events.add("Client_UpdateDeathVariables", _0x16cf18 => {
  at_death = _0x16cf18;
  at_death2 = _0x16cf18;
  is_dead = _0x16cf18;
});
mp.events.add("Client_DeathGoToHospital", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    deathseconds = global.curr_lang == "ru" ? pl_VipLevel == 3 ? 120 : 180 : deathseconds - 60 < 0 ? 0 : deathseconds - 60;
    main_browser.execute("APPS.state.death.button_showed = false;");
    at_death = false;
    at_death2 = true;
    mp.events.call("Enablechat");
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.show(false, false);
  }
});
mp.events.add("Client_VipSelfRevive", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_VipSelfRevive");
  }
});
mp.events.add("DeathHide", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    deathseconds += 120;
    main_browser.execute("APPS.state.death.button_showed = false;");
    at_death = false;
    at_death2 = true;
    mp.events.call("Enablechat");
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.show(false, false);
    mp.events.callRemote("AmbulanceCall");
  }
});
mp.events.add("CancelAllDeath", (_0x34cc88 = false) => {
  if (deathtimer != null) {
    clearInterval(deathtimer);
    deathtimer = null;
  }
  if (tipchange_interval != null) {
    clearInterval(tipchange_interval);
    tipchange_interval = null;
  }
  main_browser.execute("APPS.state.death.show = false");
  at_death = false;
  at_death2 = false;
  is_dead = false;
  if (!_0x34cc88) {
    global.reviveLocalPed();
  }
  delete localplayer.death_anim_applied;
  mp.gui.cursor.show(false, false);
  localplayer.freezeEntityPosition(false);
  is_freezed = false;
  mp.events.call("Enablechat");
  ChangeHudState(true);
  mp.game.ui.displayRadar(true);
});
const DEATH_HINT_KEYS = ["3-й уровень мастерства на ферме позволит Вам заключать рабочие контракты", "3-й уровень мастерства на лесопилке позволит Вам заключать рабочие контракты", "3-й уровень мастерства на работе электриков позволит Вам заключать рабочие контракты", "В чип-тюнинге можно прокачать скорость и управляемость автомобиля", "Хотите выделиться? Посетите тату-студию. Имейте ввиду, сведение татуировки занимает много времени", "Стали автовладельцем? Не забудьте приобрести номера в SAHP", "Задумались о покупке недвижимости? Посетите риэлторское агенство", "Владельцы недвижимости могут сдавать ее другим игрокам", "Автомобиль съедает много топлива? Отремонтируйте двигатель в чип-тюнинге", "Используйте рюкзак 3-го уровня, чтобы при смерти не терять предметы из инвентаря", "Хотите заняться автоугоном? Посетите Thomas Theft в исправительной колонии", "В исправительной колонии есть человек, который обучит Вас карманному мастерству", "Бандитам доступна миссия по краже патронов и компонентов оружия, с военной базы", "На территории стадиона навык выносливости прокачивается в два раза быстрее", "Хотите каждое утро просыпаться с безумным видом на город? Приобретите апартаменты в жилом комплексе", "Устали после изнурительной работы? Посетите один из баров после 18:00", "Иногда в штате заканчивается запас электричества, в это время работники электростанции получают удвоенную зарплату", "Хотите что-либо продать или приобрести? Воспользуйтесь услугами LifeInvader", "Не знаете как заработать денег? Спекулируйте товаром на торговом рынке", "Правительство занимается продажей лицензии на адвокатскую деятельность", "Не определились с подарком для второй половинки? Загляните в ювелирный магазин", "В здании СТО можно модифицировать свой автомобиль до неузнаваемости", "Будьте аккуратны, при знакомстве с неизвестными людьми. Они могут передать Вам болезни", "Владельцам таксопарка доступна возможность изменения цен за поездку", "В здании центральной больницы можно сменить пол или сделать пластическую операцию", "Приобретите мед.страховку, чтобы проходить курс лечения в ускоренном режиме", "Чувствуете слабость? Приобретите еду у уличного торговца", "Цена за маршрут у водителей автобуса формируется в зависимости от пассажиропотока", "Купите яхту! Покажите всем, как нужно жить! Свое судно можно держать в причале для частных катеров", "Регулярное посещение магазина одежды позволит Вам быть в курсе всех ежедневно поступающих коллекций", "Не паркуйте свой автомобиль там, где это запрещено. Сотрудники SAHP могут его эвакуировать", "Есть все компоненты оружия? Соберите ствол у Robert Arms", "Вы - владелец бизнеса? Не забывайте своевременно оплачивать налоги и следить за состоянием склада", "Выполняйте ежедневные задания и получайте за них хороший приз", "Говорят, если выполнить все достижения, то можно стать сверхчеловеком!", "Повышайте свой навык вождения. Это позволит Вам ездить быстрее остальных", "Следите за состоянием двигателя вашего т/c. Убитые двигатели потребляют больше бензина", "Питайтесь свежей едой, чтобы не получить отравление", "Люди, болеющие амнезией, забывают часть ранее знакомых им людей", "Не оставляйте свой автомобиль без присмотра, его могут угнать", "Наличие страховки на автомобиль не дает возможности автоугонщикам угнать Ваш транспорт", "Будьте внимательны на дороге, у сотрудников SAHP есть многофункциональный радар", "Лицензии имеют свойство истекать. Не забывайте своевременно обновлять их", "Опытные дальнобойщики занимаются перевозкой засекреченных заказов, получая за это большую награду", "Не знаете как заработать? Спекулируйте на бирже акций!", "Покупайте акции на бирже, чтобы приумножить свой капитал", "Бандитам доступна миссия по добыче наркотиков на субмарине"];
function getDeathHints() {
  return DEATH_HINT_KEYS.map(_0x41f599 => language[_0x41f599][curr_lang]);
}
mp.events.add("SetPlayerOnGround", () => {
  let _0x5dd131 = mp.game.gameplay.getGroundZFor3dCoord(localplayer.position.x, localplayer.position.y, localplayer.position.z, 0, false);
  if (_0x5dd131 == 0) {
    for (let _0x5d2091 = 1; _0x5d2091 < 11 && (_0x5dd131 != 0 || (_0x5dd131 = mp.game.gameplay.getGroundZFor3dCoord(localplayer.position.x, localplayer.position.y, localplayer.position.z + _0x5d2091, 0, false), _0x5dd131 == 0)); _0x5d2091++);
    if (_0x5dd131 == 0) {
      _0x5dd131 = mp.game.gameplay.getGroundZFor3dCoord(localplayer.position.x, localplayer.position.y, localplayer.position.z + 50, 0, false);
    }
  }
  mp.events.callRemote("SetOnGroundProperly", _0x5dd131);
});
mp.events.add("Client_TaskRevive", () => {
  global.reviveLocalPed();
});
global.playGetUpFromGroundAnimation = function () {
  if (mp.players.local && mp.players.exists(mp.players.local) && !mp.players.local.vehicle) {
    if (mp.players.local.getHealth() <= 0) {
      global.reviveLocalPed();
    }
    if (!mp.game.streaming.hasAnimDictLoaded(GET_UP_DICT)) {
      mp.game.streaming.requestAnimDict(GET_UP_DICT);
      let _0x50c403 = 0;
      while (!mp.game.streaming.hasAnimDictLoaded(GET_UP_DICT) && _0x50c403++ < 300) {
        mp.game.wait(0);
      }
    }
    if (mp.game.streaming.hasAnimDictLoaded(GET_UP_DICT)) {
      mp.players.local.taskPlayAnim(GET_UP_DICT, "getup_l_0", 1, -1, -1, 0, 0, false, false, false);
    }
  }
};
mp.events.add("Client_GetUpFromGround", () => {
  mp.events.call("ClearScreenEffects");
  mp.events.call("DefaultEffect");
  global.playGetUpFromGroundAnimation();
});
mp.events.add("playerDeath", (_0x1be349, _0x28fe7c) => {
  if (_0x1be349 === mp.players.local && !mp.players.local.vehicle && !global.at_duel_location && !global.at_famwar && !global.at_pubg && !global.at_bunker_dm && !global.at_small_timer_event && !global.is_in_shooting && (!global.is_summer || !global.at_summer_arena) && (!global.is_winter || !global.at_christmas_arena) && (!global.is_easter || !global.at_easter_arena) && (!global.is_halloween || !global.at_zombie_arena) && (!global.is_school || !global.at_school_dm)) {
    if (typeof _0x28fe7c == "number") {
      global.lastDeathCauseWeapon = _0x28fe7c >>> 0;
    }
  }
});