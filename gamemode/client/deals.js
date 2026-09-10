let localseller;
let last_deal_name;
let last_sum;
let last_seller;
let dealTimeout;
global.DealOpened = false;
mp.events.add("DeleteY", () => {
  main_browser.execute("APPS.state.hud.yn_show = false");
  DealOpened = false;
  localseller = undefined;
});
mp.events.add("DeleteYN", () => {
  main_browser.execute("APPS.state.hud.yn_show = false");
  DealOpened = false;
  if (localseller) {
    mp.events.callRemote("UnBindDeal", localseller);
  }
  localseller = undefined;
});
mp.events.add("DeallerMSG", (_0x3a1291, _0x187c29, _0x51786e = 0, _0x13d42f = "") => {
  const _0x867c59 = mp.players.atRemoteId(parseInt(_0x187c29));
  if (!_0x867c59 || !mp.players.exists(_0x867c59)) {
    return;
  }
  let _0x3a8411;
  _0x3a8411 = mp.storage.data.friends[_0x867c59.name] != null && !_0x867c59.getDrawableVariation(1) || local_family == _0x867c59.getVariable("Family") && local_family || local_member == _0x867c59.getVariable("Member") && local_member > 0 && !_0x867c59.getDrawableVariation(1) || spose_name === _0x867c59.name ? "" + _0x867c59.name.replace("_", " ") : TranslateText("Игpoкy {0}", _0x867c59.real_id);
  switch (_0x3a1291) {
    case "BuyHouse":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить Baш дoм зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "Sell_Business_Fam":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} приобрести крышевание бизнеса зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "Dice":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} сыграть в кости", _0x3a8411), false, 0, 2);
      break;
    case "BuyBiz":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить Baш бизнес зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "ChangeBiz":
      if (_0x51786e == 0) {
        mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} oбмeнятьcя бизнecaми", _0x3a8411), false, 0, 2);
      } else {
        mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} oбмeнятьcя бизнecaми c дoплaтoй ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      }
      break;
    case "gov_sellfam":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} приобрести разрешение на создание семьи", _0x3a8411), false, 0, 2);
      break;
    case "InsurenceSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить мeд. cтpaxoвкy зa ${1}", _0x3a8411, server_number == 3 && curr_lang == "ru" ? _0x51786e * 150 : _0x51786e * 1500), false, 0, 2);
      break;
    case "AdrenalinePlayer":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} укол адреналина", _0x3a8411), false, 0, 2);
      break;
    case "HealSickness":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} купить таблетки зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "GangZone_Sell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить тeppитopию {1} зa ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "RaceRegister":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} поучаствовать в гонке зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "MedSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить {1} aптeчек зa ${2}", _0x3a8411, _0x51786e, server_number == 3 && curr_lang == "ru" ? _0x51786e * 130 : _0x51786e * 1300), false, 0, 2);
      break;
    case "SimSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить сим-карту {1} за ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "Bail":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} выйти пoд зaлoг ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "TransferFamily":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} взять под контроль Вашу семью", _0x3a8411), false, 0, 2);
      break;
    case "LawyerSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить лицeнзию aдвoкaтa зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "HouseInsurance":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить страховку на дом {1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "GunLicSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить лицeнзию нa opyжиe зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      break;
    case "InviteOrg":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} встyпить в Baшy opгaнизaцию", _0x3a8411), false, 0, 2);
      break;
    case "InviteBuildTeam":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} встyпить в Baшy строительную компанию", _0x3a8411), false, 0, 2);
      break;
    case "Show_Member_ID":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} пocмoтpeть Baшe yдocтoвepeниe", _0x3a8411), false, 0, 2);
      break;
    case "InviteFam":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} встyпить в Baшy ceмью", _0x3a8411), false, 0, 2);
      break;
    case "Heal":
      if (_0x51786e > 0) {
        mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} мeдицинcкyю пoмoщь зa ${1}", _0x3a8411, _0x51786e), false, 0, 2);
      } else {
        mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} бесплатную мeдицинcкyю пoмoщь", _0x3a8411), false, 0, 2);
      }
      break;
    case "army_Heal":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} мeдицинcкyю пoмoщь", _0x3a8411), false, 0, 2);
      break;
    case "Heal_Free":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} oкaзaть мeдицинcкyю пoмoщь", _0x3a8411), false, 0, 2);
      break;
    case "InviteWood":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} работать на Вас", _0x3a8411), false, 0, 2);
      break;
    case "InvitePeopleCollector":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} вступить в Вашу команду коллекторов", _0x3a8411), false, 0, 2);
      break;
    case "InviteCollector":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} вступить в Вашу команду инкассаторов", _0x3a8411), false, 0, 2);
      break;
    case "interact_hug":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили обняться {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_slap":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили дать пощечину {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_kiss":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили поцеловать {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_carry":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили взять на руки {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_carry_player":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили взять на плечо {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_piggyback":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили взять на спину {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_stretch":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} лечь на койку", _0x3a8411), false, 0, 2);
      break;
    case "interact_wheelchair":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} сесть в инвалидное кресло", _0x3a8411), false, 0, 2);
      break;
    case "interact_carryonarms":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили поднять на руки {0}", _0x3a8411), false, 0, 2);
      break;
    case "interact_shoulderride":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили посадить на плечи {0}", _0x3a8411), false, 0, 2);
      break;
    case "Unite_souls":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили объединить души {0}", _0x3a8411), false, 0, 2);
      break;
    case "summerkeys2025":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили объединить части ключей {0}", _0x3a8411), false, 0, 2);
      break;
    case "giveSchoolKnowledge":
      mp.game.ui.notifications.show(TranslateText("Вы предложили передать знания об вашем предмете {0}", _0x3a8411), false, 0, 2);
      break;
    case "handshake":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили пoздopoвaтьcя {0}", _0x3a8411), false, 0, 2);
      break;
    case "invite_battalion_team":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} вступить в команду", _0x3a8411), false, 0, 2);
      break;
    case "give_flowers":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} взять цветы", _0x3a8411), false, 0, 2);
      break;
    case "giveToy":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} взять игрушку", _0x3a8411), false, 0, 2);
      break;
    case "trade":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили обмен {0}", _0x3a8411), false, 0, 2);
      break;
    case "marry":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили заключили брак {0}", _0x3a8411), false, 0, 2);
      break;
    case "passport":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} пocмoтpeть пacпopт", _0x3a8411), false, 0, 2);
      break;
    case "license":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} пocмoтpeть лицeнзии", _0x3a8411), false, 0, 2);
      break;
    case "militaryID":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} пocмoтpeть вoeнный билeт", _0x3a8411), false, 0, 2);
      break;
    case "giveMilitaryID":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} взять вoeнный билeт", _0x3a8411), false, 0, 2);
      break;
    case "InviteEfir":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} присоединиться к эфиру", _0x3a8411), false, 0, 2);
      break;
    case "InviteTalentShow":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} участвовать в шоу талантов", _0x3a8411), false, 0, 2);
      break;
    case "Sell_Boat_Player":
    case "Sell_Fly_Player":
    case "Sell_Vehicle_Player":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить {1} зa ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "TransferCrypto":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} кyпить {1} криптовалюты за ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "Change_Vehicle_Player1":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} обменять {1} зa ${2} на другой транспорт", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "Change_Vehicle_Player2":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} в ответ {1} зa ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "Rent_Truck_Player":
    case "Rent_Vehicle_Player":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} apeндoвaть {1} зa ${2}", _0x3a8411, _0x13d42f, _0x51786e), false, 0, 2);
      break;
    case "number_plate":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} ycтaнoвить нoмepнoй знaк нa тpaнcпopт", _0x3a8411), false, 0, 2);
      break;
    case "sell_car_insurance":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} застраховать тpaнcпopт", _0x3a8411), false, 0, 2);
      break;
    case "teacher_student":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили стать наставником/учеником для {0}", _0x3a8411), false, 0, 2);
      break;
    case "christmasgift2024":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили подарить подарок для {0}", _0x3a8411), false, 0, 2);
      break;
    case "handsUp":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} поднять руки", _0x3a8411), false, 0, 2);
      break;
    case "buyTaxiLicense":
      mp.game.ui.notifications.show(TranslateText("Bы пpeдлoжили {0} купить лицензию на работу в такси за ${1}", _0x3a8411, _0x51786e), false, 0, 2);
  }
});
let dealStartTime = 0;
mp.events.add("BindDeal", (_0x494bf3, _0x1db134, _0xb2804e = 0, _0x4cd7fc = "", _0x5bbef3 = "") => {
  const _0x4c26c5 = mp.players.atRemoteId(parseInt(_0x1db134));
  if (_0x494bf3 != "CancelDeal" && (!_0x4c26c5 || !mp.players.exists(_0x4c26c5))) {
    return;
  }
  let _0x14306a;
  let _0x1f3370;
  if (_0x494bf3 != "CancelDeal") {
    localseller = _0x4c26c5;
    _0x14306a = mp.storage.data.friends[_0x4c26c5.name] != null && !_0x4c26c5.getDrawableVariation(1) || local_family == _0x4c26c5.getVariable("Family") && local_family || local_member == _0x4c26c5.getVariable("Member") && local_member > 0 && !_0x4c26c5.getDrawableVariation(1) || spose_name === _0x4c26c5.name ? "" + _0x4c26c5.name.replace("_", " ") : TranslateText("Игрок {0}", _0x4c26c5.real_id);
  }
  switch (_0x494bf3) {
    case "BuyHouse":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить дом за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Show_Member_ID":
      _0x1f3370 = TranslateText("{0} предлагает показать Вам удостоверение", _0x14306a);
      break;
    case "InviteOrg":
      let _0x2b6303;
      if (_0xb2804e == 1) {
        _0x2b6303 = language["Центральную больницу"][curr_lang];
      } else if (_0xb2804e == 2) {
        _0x2b6303 = language.Нацгвардию[curr_lang];
      } else if (_0xb2804e == 3) {
        _0x2b6303 = language["Центральную полицию"][curr_lang];
      } else if (_0xb2804e == 4) {
        _0x2b6303 = language.SAHP[curr_lang];
      } else if (_0xb2804e == 5) {
        _0x2b6303 = language["Исправительную колонию"][curr_lang];
      } else if (_0xb2804e == 7) {
        _0x2b6303 = language.Ballas[curr_lang];
      } else if (_0xb2804e == 8) {
        _0x2b6303 = language["The Families"][curr_lang];
      } else if (_0xb2804e == 9) {
        _0x2b6303 = language.Vagos[curr_lang];
      } else if (_0xb2804e == 10) {
        _0x2b6303 = language.Bloods[curr_lang];
      } else if (_0xb2804e == 11) {
        _0x2b6303 = language["Mara Bunta Grande"][curr_lang];
      } else if (_0xb2804e == 12) {
        _0x2b6303 = language.FIB[curr_lang];
      } else if (_0xb2804e == 13) {
        _0x2b6303 = language.LifeInvader[curr_lang];
      } else if (_0xb2804e == 14) {
        _0x2b6303 = language.Пpaвитeльcтвo[curr_lang];
      } else if (_0xb2804e == 15) {
        _0x2b6303 = "Русская мафия";
      } else if (_0xb2804e == 16) {
        _0x2b6303 = "La Cosa Nostra";
      } else if (_0xb2804e == 17) {
        _0x2b6303 = "Yakuza";
      } else if (_0xb2804e == 18) {
        _0x2b6303 = "Мексиканская мафия";
      }
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в {1}", _0x14306a, _0x2b6303);
      break;
    case "InviteBuildTeam":
      let _0x390c5a;
      if (_0xb2804e == 1) {
        _0x390c5a = language.слесаря[curr_lang];
      } else if (_0xb2804e == 2) {
        _0x390c5a = language.электрика[curr_lang];
      } else if (_0xb2804e == 3) {
        _0x390c5a = language["земельного рабочего"][curr_lang];
      } else if (_0xb2804e == 4) {
        _0x390c5a = language.геодезиста[curr_lang];
      } else if (_0xb2804e == 5) {
        _0x390c5a = language.водителя[curr_lang];
      }
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в строительную компанию на должность {1}", _0x14306a, _0x390c5a);
      break;
    case "InviteFam":
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в ceмью", _0x14306a);
      break;
    case "InviteFarm":
      _0x1f3370 = TranslateText("{0} предлагает Вам контракт по работе фермера", _0x14306a);
      break;
    case "InviteGarbage":
      _0x1f3370 = TranslateText("{0} предлагает Вам контракт по работе уборщика улиц", _0x14306a);
      break;
    case "InviteWood":
      _0x1f3370 = TranslateText("{0} предлагает Вам контракт по работе лесоруба", _0x14306a);
      break;
    case "InvitePeopleCollector":
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в команду коллекторов", _0x14306a);
      break;
    case "InviteCollector":
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в команду инкассаторов", _0x14306a);
      break;
    case "InviteElectro":
      _0x1f3370 = TranslateText("{0} предлагает Вам контракт по работе электрика", _0x14306a);
      break;
    case "InsurenceSell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить медицинскую страховку за ${1}", _0x14306a, (server_number == 3 && curr_lang == "ru" ? _0xb2804e * 150 : _0xb2804e * 1500).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "AdrenalinePlayer":
      _0x1f3370 = TranslateText("{0} предлагает Вам укол адреналина", _0x14306a);
      break;
    case "HealSickness":
      let _0x43aa71 = language.амнезии[curr_lang];
      if (_0x4cd7fc == 1) {
        _0x43aa71 = language.отравления[curr_lang];
      } else if (_0x4cd7fc == 2) {
        _0x43aa71 = language.простуды[curr_lang];
      }
      _0x1f3370 = TranslateText("{0} предлагает продать Вам {1} таблетки от {2} за ${3}", _0x14306a, _0x5bbef3, _0x43aa71, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "GangZone_Sell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить тeppитopию {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "RaceRegister":
      _0x1f3370 = TranslateText("{0} предлагает Вам поучаствовать в гонке за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "MedSell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить {1} аптечек за ${2}", _0x14306a, _0xb2804e, (server_number == 3 && curr_lang == "ru" ? _0xb2804e * 130 : _0xb2804e * 1300).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "SimSell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить сим-карту {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "LawyerSell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить лицeнзию aдвoкaтa за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "HouseInsurance":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить страховку на дом {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "GunLicSell":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить лицeнзию на оружие за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "Bail":
      _0x1f3370 = TranslateText("{0} предлагает Вам выйти из тюрьмы под залог ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "TransferFamily":
      _0x1f3370 = TranslateText("{0} предлагает Вам взять под контроль семью {1}", _0x14306a, _0xb2804e);
      break;
    case "Heal":
      _0x1f3370 = _0xb2804e >= 100 ? TranslateText("{0} предлагает Вам медицинскую помощь за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1.")) : TranslateText("{0} предлагает Вам бесплатную медицинскую помощь", _0x14306a);
      break;
    case "army_Heal":
    case "gov_Heal":
    case "police_Heal":
      _0x1f3370 = TranslateText("{0} предлагает Вам медицинскую помощь", _0x14306a);
      break;
    case "Heal_Free":
      _0x1f3370 = TranslateText("{0} предлагает оказать Вам медицинскую помощь", _0x14306a);
      break;
    case "Sell_Business_Fam":
      _0x1f3370 = TranslateText("{0} предлагает Вам приобрести крышевание бизнеса {1} за ${2}", _0x14306a, _0x4cd7fc, (server_number == 3 && curr_lang == "ru" ? _0xb2804e + 1000000 : _0xb2804e + 10000000).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Sell_Business_Fam2":
      _0x494bf3 = "Sell_Business_Fam";
      _0x1f3370 = TranslateText("{0} предлагает Вам приобрести крышевание бизнеса {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "BuyBiz":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить бизнес {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Dice":
      _0x1f3370 = TranslateText("{0} предлагает Вам сыграть в кости", _0x14306a);
      break;
    case "ChangeBiz":
      _0x1f3370 = TranslateText("{0} предлагает Вам обменяться бизнесами с Вашей доплатой ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "gov_sellfam":
      _0x1f3370 = _0xb2804e > 0 ? TranslateText("{0} предлагает Вам купить разрешение на создание семьи за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1.")) : TranslateText("{0} предлагает Вам бесплатное разрешение на создание семьи", _0x14306a);
      break;
    case "interact_hug":
      _0x1f3370 = TranslateText("{0} предлагает Вам обняться", _0x14306a);
      break;
    case "interact_slap":
      _0x1f3370 = TranslateText("{0} предлагает Вам дать пощечину", _0x14306a);
      break;
    case "interact_kiss":
      _0x1f3370 = TranslateText("{0} предлагает Вам поцеловаться", _0x14306a);
      break;
    case "interact_carry":
      _0x1f3370 = TranslateText("{0} предлагает взять Вас на руки", _0x14306a);
      break;
    case "interact_carry_player":
      _0x1f3370 = TranslateText("{0} предлагает взять Вас на плечо", _0x14306a);
      break;
    case "interact_piggyback":
      _0x1f3370 = TranslateText("{0} предлагает взять Вас на спину", _0x14306a);
      break;
    case "interact_stretch":
      _0x1f3370 = TranslateText("{0} предлагает Вам лечь в койку", _0x14306a);
      break;
    case "interact_wheelchair":
      _0x1f3370 = TranslateText("{0} предлагает Вам сесть в инвалидное кресло", _0x14306a);
      break;
    case "interact_carryonarms":
      _0x1f3370 = TranslateText("{0} предлагает Вам поднять на руки", _0x14306a);
      break;
    case "interact_shoulderride":
      _0x1f3370 = TranslateText("{0} предлагает Вам посадить на плечи", _0x14306a);
      break;
    case "Unite_souls":
      _0x1f3370 = TranslateText("{0} предлагает Вам объединить души", _0x14306a);
      break;
    case "summerkeys2025":
      _0x1f3370 = TranslateText("{0} предлагает Вам объединить части ключей", _0x14306a);
      break;
    case "giveSchoolKnowledge":
      _0x1f3370 = TranslateText("{0} предлагает Вам получить знание школьного предмета", _0x14306a);
      break;
    case "handshake":
      _0x1f3370 = TranslateText("{0} предлагает Вам поздороваться", _0x14306a);
      break;
    case "invite_battalion_team":
      _0x1f3370 = TranslateText("{0} предлагает Вам вступить в команду", _0x14306a);
      break;
    case "give_flowers":
      _0x1f3370 = TranslateText("{0} хочет подарить Вам цветы", _0x14306a);
      break;
    case "giveToy":
      _0x1f3370 = TranslateText("{0} хочет подарить Вам игрушку", _0x14306a);
      break;
    case "trade":
      _0x1f3370 = TranslateText("{0} предлагает Вам обмен", _0x14306a);
      break;
    case "marry":
      _0x1f3370 = TranslateText("{0} предлагает Вам заключили брак", _0x14306a);
      break;
    case "militaryID":
      _0x1f3370 = TranslateText("{0} предлагает Вам посмотреть военный билет", _0x14306a);
      break;
    case "giveMilitaryID":
      _0x1f3370 = TranslateText("{0} предлагает Вам взять военный билет", _0x14306a);
      break;
    case "InviteEfir":
      _0x1f3370 = TranslateText("{0} предлагает Вам присоединиться к эфиру", _0x14306a);
      break;
    case "InviteTalentShow":
      _0x1f3370 = TranslateText("{0} предлагает Вам участвовать в шоу талантов", _0x14306a);
      break;
    case "license":
      _0x1f3370 = TranslateText("{0} предлагает Вам посмотреть лицензии", _0x14306a);
      break;
    case "passport":
      _0x1f3370 = TranslateText("{0} предлагает Вам посмотреть паспорт", _0x14306a);
      break;
    case "Sell_Vehicle_Player":
    case "Sell_Boat_Player":
    case "Sell_Fly_Player":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить {1} за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Change_Vehicle_Player1":
      _0x1f3370 = TranslateText("{0} предлагает Вам обменять {1} с Вашей доплатой ${2} на Ваш транспорт", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Change_Vehicle_Player2":
      _0x1f3370 = TranslateText("{0} предлагает Вам в ответ {1} с Вашей доплатой ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "TransferCrypto":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить {1} криптовалюты за ${2}", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "Rent_Truck_Player":
    case "Rent_Vehicle_Player":
      _0x1f3370 = TranslateText("{0} предлагает Вам взять в аренду {1} за ${2} на {3} дней", _0x14306a, _0x4cd7fc, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."), _0x5bbef3);
      break;
    case "number_plate":
      _0x1f3370 = TranslateText("{0} предлагает Вам установить номерной знак за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      dealStartTime = new Date().getTime();
      break;
    case "sell_car_insurance":
      _0x1f3370 = TranslateText("{0} предлагает Вам застраховать транспорт за ${1}", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."));
      break;
    case "teacher_student":
      _0x1f3370 = TranslateText("{0} предлагает Вам стать учеником/наставником", _0x14306a);
      break;
    case "christmasgift2024":
      _0x1f3370 = TranslateText("{0} предлагает Вам подарить подарок", _0x14306a);
      break;
    case "handsUp":
      _0x1f3370 = TranslateText("{0} предлагает Вам поднять руки", _0x14306a);
      break;
    case "buyTaxiLicense":
      _0x1f3370 = TranslateText("{0} предлагает Вам купить лицензию на работу в такси за ${1} для транспорта с номером {2} сроком на 30 дней", _0x14306a, _0xb2804e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1."), _0x4cd7fc);
      break;
    case "CancelDeal":
      main_browser.execute("APPS.state.hud.yn_show = false;");
      DealOpened = false;
      localseller = undefined;
  }
  if (_0x494bf3 != "CancelDeal") {
    last_deal_name = _0x494bf3;
    last_sum = _0xb2804e;
    last_seller = _0x4c26c5;
    main_browser.execute("APPS.state.hud.yn_text = '" + _0x1f3370 + "';");
    main_browser.execute("APPS.state.hud.yn_show = true;");
    DealOpened = true;
    dealTimeout = setTimeout(() => {
      if (DealOpened == 1) {
        main_browser.execute("APPS.state.hud.yn_show = false;");
        DealOpened = false;
        if (localseller) {
          mp.events.callRemote("UnBindDeal", localseller);
        }
        localseller = undefined;
      }
    }, 10000);
    StartCustomSound("yn_notif", "sounds/notifications/yn_notif.ogg", 0.2);
  }
});
mp.keys.bind(89, false, function () {
  if ((GlobalCheck() != 1 || is_dead || in_begging_state || (!localplayer.cuffed || last_deal_name == "passport" || last_deal_name == "Show_Member_ID") && localplayer.cuffed) && loggedin && !chatActive && !dialog_window && DealOpened == 1 && !mp.game.ui.isPauseMenuActive() && !(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    if (new Date().getTime() - dealStartTime < 3000) {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
    if (dealTimeout != null) {
      clearTimeout(dealTimeout);
      dealTimeout = undefined;
    }
    mp.events.callRemote("Deals", last_deal_name, 1, last_seller, last_sum);
    mp.game.audio.playSoundFrontend(-1, "YES", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
  }
});
mp.keys.bind(78, true, function () {
  if ((GlobalCheck() != 1 || is_dead || familymic || in_begging_state || racionmic || defaultmic) && loggedin && !chatActive && !dialog_window && DealOpened == 1) {
    if (!mp.game.ui.isPauseMenuActive() && !(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      if (dealTimeout != null) {
        clearTimeout(dealTimeout);
        dealTimeout = undefined;
      }
      mp.events.callRemote("Deals", last_deal_name, 0, last_seller, last_sum);
    }
  }
});