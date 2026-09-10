global.dialog_window = false;
let dialog_id = 0;
let dialog_type = 0;
function getMessageIndex(_0x156815) {
  if (typeof _0x156815 != "number" || isNaN(_0x156815)) {
    if (typeof _0x156815 == "string" && _0x156815.length > 0 && !isNaN(+_0x156815)) {
      return parseInt(_0x156815);
    } else {
      return null;
    }
  } else {
    return parseInt(_0x156815);
  }
}
function getLocalizedByIndex(_0x5afb1e) {
  if (typeof NotificationMessages == "undefined" || !Array.isArray(NotificationMessages)) {
    return null;
  }
  if (_0x5afb1e === null || _0x5afb1e < 0 || _0x5afb1e >= NotificationMessages.length) {
    return null;
  }
  const _0x1a0d6f = NotificationMessages[_0x5afb1e];
  if (_0x1a0d6f && language[_0x1a0d6f]) {
    if (language[_0x1a0d6f][curr_lang] !== undefined) {
      return language[_0x1a0d6f][curr_lang];
    } else if (language[_0x1a0d6f].ru !== undefined) {
      return language[_0x1a0d6f].ru;
    } else if (language[_0x1a0d6f].en !== undefined) {
      return language[_0x1a0d6f].en;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getLocalizedByKey(_0x12d424) {
  if (typeof _0x12d424 != "string" || !_0x12d424.length) {
    return null;
  }
  if (!language[_0x12d424]) {
    return null;
  }
  const _0x3edc27 = language[_0x12d424];
  if (typeof _0x3edc27 == "string") {
    return _0x3edc27;
  } else if (_0x3edc27[curr_lang] !== undefined) {
    return _0x3edc27[curr_lang];
  } else if (_0x3edc27.ru !== undefined) {
    return _0x3edc27.ru;
  } else if (_0x3edc27.en !== undefined) {
    return _0x3edc27.en;
  } else {
    return null;
  }
}
function formatWithArgs(_0x1fea82, _0x3bcf97) {
  return String(_0x1fea82).replace(/{(\d+)}/g, (_0x394f2c, _0x4dee21) => {
    const _0x1be955 = parseInt(_0x4dee21);
    if (_0x3bcf97[_0x1be955] === undefined) {
      return _0x394f2c;
    }
    let _0x4dbed7 = _0x3bcf97[_0x1be955];
    if (_0x4dbed7 !== null && typeof _0x4dbed7 == "object") {
      const _0x2ba206 = resolveNotificationMessage(_0x4dbed7);
      if (_0x2ba206 != null && typeof _0x2ba206 != "object") {
        _0x4dbed7 = _0x2ba206;
      }
    }
    return _0x4dbed7;
  });
}
const SICKNESS_KEYS = [["Амнезия отсутствует", "Амнезия 1 стадия", "Амнезия 2 стадия", "Амнезия 3 стадия"], ["Отравление отсутствует", "Отравление 1 стадия", "Отравление 2 стадия", "Отравление 3 стадия"], ["Простуда отсутствует", "Простуда 1 стадия", "Простуда 2 стадия", "Простуда 3 стадия"]];
function resolveSicknessDisplay(_0x53bee5) {
  if (!Array.isArray(_0x53bee5) || _0x53bee5.length !== 3) {
    return null;
  }
  const _0x4819f0 = _0x11783d => _0x11783d < 100 ? 0 : _0x11783d < 200 ? 1 : _0x11783d < 300 ? 2 : 3;
  return _0x53bee5.map((_0x3c3bd1, _0x560f2a) => getLocalizedByKey(SICKNESS_KEYS[_0x560f2a][_0x4819f0(_0x3c3bd1)]) || SICKNESS_KEYS[_0x560f2a][_0x4819f0(_0x3c3bd1)]).join("<br>");
}
const GANG_TAKE_ILLEGAL_HEADER_KEY = "Наличные: ${0}<br>Вы нашли элементы амуниции:<br>";
const GANG_TAKE_ILLEGAL_ITEM_KEY = "{0}{1} {2} шт.<br>";
function resolveGangTakeIllegalDisplay(_0x17337f) {
  if (!_0x17337f || !Array.isArray(_0x17337f.items)) {
    return null;
  }
  const _0x3bbd13 = _0x59f8e5 => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x59f8e5) : _0x59f8e5;
  let _0x470f8c = formatWithArgs(getLocalizedByKey(GANG_TAKE_ILLEGAL_HEADER_KEY) || GANG_TAKE_ILLEGAL_HEADER_KEY, [_0x17337f.header != null ? _0x17337f.header[1] : 0]);
  const _0x17b1c8 = getLocalizedByKey("{0}{1} {2} шт.<br>") || "{0}{1} {2} шт.<br>";
  for (const _0x1d4a66 of _0x17337f.items) {
    if (!Array.isArray(_0x1d4a66) || _0x1d4a66.length < 3) {
      continue;
    }
    _0x470f8c += formatWithArgs(_0x17b1c8, [_0x3bbd13(_0x1d4a66[0]), _0x3bbd13(_0x1d4a66[1]), _0x1d4a66[2]]);
  }
  return _0x470f8c;
}
const GOV_TAKE_ILLEGAL_HEADER_KEY = "Вы нашли элементы амуниции:<br>";
const GOV_TAKE_ILLEGAL_FAKE_FIB_KEY = "Поддельные документы<br>";
function resolveGovTakeIllegalDisplay(_0x4b44bc) {
  if (!_0x4b44bc) {
    return null;
  }
  const _0x444470 = Array.isArray(_0x4b44bc.items) ? _0x4b44bc.items : [];
  const _0x3871d7 = _0x288ae1 => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x288ae1) : _0x288ae1;
  let _0x5a3b65 = getLocalizedByKey(GOV_TAKE_ILLEGAL_HEADER_KEY) || GOV_TAKE_ILLEGAL_HEADER_KEY;
  if (_0x4b44bc.fakeFib) {
    _0x5a3b65 += getLocalizedByKey("Поддельные документы<br>") || "Поддельные документы<br>";
  }
  const _0x352634 = getLocalizedByKey("{0}{1} {2} шт.<br>") || "{0}{1} {2} шт.<br>";
  for (const _0x4218be of _0x444470) {
    if (!Array.isArray(_0x4218be) || _0x4218be.length < 3) {
      continue;
    }
    _0x5a3b65 += formatWithArgs(_0x352634, [_0x3871d7(_0x4218be[0]), _0x3871d7(_0x4218be[1]), _0x4218be[2]]);
  }
  if (_0x4b44bc.suffixKey) {
    _0x5a3b65 += getLocalizedByKey(_0x4b44bc.suffixKey) || _0x4b44bc.suffixKey;
  }
  return _0x5a3b65;
}
const AMMO_ORDER_COMPLECT_KEYS = ["{0} Штурмовых винтовок, {1} патронов для штурмовых винтовок, {2} бронежилетов", "{0} Штурмовых винтовок компактных, {1} патронов для штурмовых винтовок, {2} бронежилетов"];
const AMMO_ORDER_MAIN_KEY = "Вы действительно желаете заказать {0}?<br>Стоимость: {1} семейных баллов";
const EVENT_MODERATION_DESC_KEY = "Описание: {0}<br>Локация: {1}";
const EVENT_MODERATION_MAIN_KEY = "{0}<br>Вы одобряете данное мероприятие?";
function resolveEventModerationDisplay(_0x304fa2) {
  if (!_0x304fa2 || _0x304fa2.description == null || _0x304fa2.location == null) {
    return null;
  }
  const _0xc27331 = _0x347576 => typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x347576) : _0x347576;
  const _0x54334b = formatWithArgs(getLocalizedByKey(EVENT_MODERATION_DESC_KEY) || EVENT_MODERATION_DESC_KEY, [_0xc27331(_0x304fa2.description), _0xc27331(_0x304fa2.location)]);
  return formatWithArgs(getLocalizedByKey(EVENT_MODERATION_MAIN_KEY) || EVENT_MODERATION_MAIN_KEY, [_0x54334b]);
}
function resolveAmmoOrderDisplay(_0x1f0283) {
  if (!_0x1f0283 || _0x1f0283.complectType !== 1 && _0x1f0283.complectType !== 2 || _0x1f0283.count == null || _0x1f0283.cost == null) {
    return null;
  }
  const _0x159246 = parseInt(_0x1f0283.count, 10) || 0;
  const _0x495bf7 = _0x1f0283.cost;
  const _0x23d578 = AMMO_ORDER_COMPLECT_KEYS[_0x1f0283.complectType - 1];
  const _0x22037d = formatWithArgs(getLocalizedByKey(_0x23d578) || _0x23d578, [_0x159246 * 5, _0x159246 * 400, _0x159246 * 5]);
  return formatWithArgs(getLocalizedByKey(AMMO_ORDER_MAIN_KEY) || AMMO_ORDER_MAIN_KEY, [_0x22037d, _0x495bf7]);
}
function resolveTransferOrgMoneyDisplay(_0x402776) {
  if (!_0x402776 || _0x402776.header == null || _0x402776.orgName == null) {
    return null;
  }
  const _0x17ab42 = getLocalizedByIndex(_0x402776.header[0]) || _0x402776.header[0];
  const _0x3491fd = getLocalizedByIndex(_0x402776.orgName) || _0x402776.orgName;
  return formatWithArgs(_0x17ab42, [_0x402776.header[1], _0x3491fd]);
}
const NATIONALITY_KEYS = ["Русские", "Украинцы", "Белорусы", "Татары", "Башкиры", "Чеченцы", "Грузины", "Армяне", "Азербайджанцы", "Казахи", "Цыгане", "Ингуши", "Евреи", "Арабы", "Американцы", "Японцы", "Итальянцы", "Ирландцы", "Англичане", "Узбеки", "Индийцы", "Балканцы", "Греки", "Немцы", "Французы", "Швейцарцы", "Турки", "Пакистанцы"];
const CREATE_FAMILY_CONFIRM_KEY = "Номер дома: {0}<br>Название: {1}<br>Национальность: {2}<br>Вы действительно желаете создать семью?";
function resolveCreateFamilyConfirmDisplay(_0x428684) {
  if (!_0x428684 || _0x428684.houseNum == null || _0x428684.name == null || _0x428684.natIndex == null) {
    return null;
  }
  const _0x2e3411 = NATIONALITY_KEYS[_0x428684.natIndex];
  const _0x28efd9 = _0x2e3411 && getLocalizedByKey(_0x2e3411) || _0x2e3411 || String(_0x428684.natIndex);
  return formatWithArgs(getLocalizedByKey(CREATE_FAMILY_CONFIRM_KEY) || CREATE_FAMILY_CONFIRM_KEY, [_0x428684.houseNum, _0x428684.name, _0x28efd9]);
}
const COW_FEED_CONFIRM_KEY = "Вы действительно желаете накормить коров 15 семенами {0}?";
function resolveCowFeedConfirmDisplay(_0xf09bf9) {
  if (!_0xf09bf9 || _0xf09bf9.seedKey == null) {
    return null;
  }
  let _0x280dcd = null;
  if (typeof _0xf09bf9.seedKey == "number") {
    _0x280dcd = getLocalizedByIndex(_0xf09bf9.seedKey);
  } else if (typeof _0xf09bf9.seedKey == "string") {
    _0x280dcd = getLocalizedByKey(_0xf09bf9.seedKey);
  }
  if (_0x280dcd === null) {
    _0x280dcd = String(_0xf09bf9.seedKey);
  }
  return formatWithArgs(getLocalizedByKey(COW_FEED_CONFIRM_KEY) || COW_FEED_CONFIRM_KEY, [_0x280dcd]);
}
function resolveSellItemDisplay(_0xcfb6b5) {
  if (!_0xcfb6b5 || _0xcfb6b5.mainKey == null) {
    return null;
  }
  const _0x25ac8c = resolveNotificationMessage(_0xcfb6b5.mainKey);
  if (_0x25ac8c == null) {
    return null;
  }
  let _0x1ec157 = String(_0x25ac8c);
  if (_0xcfb6b5.formattedPrice && _0xcfb6b5.priceKey != null) {
    _0x1ec157 += "<br><br>" + (resolveNotificationMessage(_0xcfb6b5.priceKey) || String(_0xcfb6b5.priceKey)) + ": $" + _0xcfb6b5.formattedPrice;
  }
  return _0x1ec157;
}
function resolveNotificationMessage(_0x1e62ce) {
  if (_0x1e62ce == null) {
    return _0x1e62ce;
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_sickness")) {
    const _0x3d5a89 = resolveSicknessDisplay(_0x1e62ce._sickness);
    if (_0x3d5a89 !== null) {
      return _0x3d5a89;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_gangTakeIllegal")) {
    const _0x155975 = resolveGangTakeIllegalDisplay(_0x1e62ce._gangTakeIllegal);
    if (_0x155975 !== null) {
      return _0x155975;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_govTakeIllegal")) {
    const _0x5d6bab = resolveGovTakeIllegalDisplay(_0x1e62ce._govTakeIllegal);
    if (_0x5d6bab !== null) {
      return _0x5d6bab;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_ammoOrder")) {
    const _0x37331b = resolveAmmoOrderDisplay(_0x1e62ce._ammoOrder);
    if (_0x37331b !== null) {
      return _0x37331b;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_eventModeration")) {
    const _0x121fc2 = resolveEventModerationDisplay(_0x1e62ce._eventModeration);
    if (_0x121fc2 !== null) {
      return _0x121fc2;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_transferOrgMoney")) {
    const _0x17f427 = resolveTransferOrgMoneyDisplay(_0x1e62ce._transferOrgMoney);
    if (_0x17f427 !== null) {
      return _0x17f427;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_sellItem")) {
    const _0x5d3b49 = resolveSellItemDisplay(_0x1e62ce._sellItem);
    if (_0x5d3b49 !== null) {
      return _0x5d3b49;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_createFamilyConfirm")) {
    const _0x37a547 = resolveCreateFamilyConfirmDisplay(_0x1e62ce._createFamilyConfirm);
    if (_0x37a547 !== null) {
      return _0x37a547;
    }
  }
  if (_0x1e62ce && typeof _0x1e62ce == "object" && Object.prototype.hasOwnProperty.call(_0x1e62ce, "_cowFeedConfirm")) {
    const _0x2f4d1d = resolveCowFeedConfirmDisplay(_0x1e62ce._cowFeedConfirm);
    if (_0x2f4d1d !== null) {
      return _0x2f4d1d;
    }
  }
  if (Array.isArray(_0x1e62ce) && _0x1e62ce.length > 0) {
    const _0x1297c3 = getLocalizedByIndex(getMessageIndex(_0x1e62ce[0]));
    if (_0x1297c3 === null) {
      if (typeof _0x1e62ce[0] == "string" && _0x1e62ce.length > 1) {
        const _0x347523 = getLocalizedByKey(_0x1e62ce[0]);
        let _0x1a689c = _0x1e62ce.slice(1);
        if ((_0x1e62ce[0] === "В данной посылке написан текст: {0}" || _0x1e62ce[0] === "В данной посылке содержатся деньги и написан текст: {0}") && typeof resolveTranslationValue != "undefined") {
          _0x1a689c = _0x1a689c.map(_0x416aeb => resolveTranslationValue(_0x416aeb));
        }
        return formatWithArgs(_0x347523 !== null ? _0x347523 : _0x1e62ce[0], _0x1a689c);
      }
      return _0x1e62ce;
    }
    return formatWithArgs(_0x1297c3, _0x1e62ce.slice(1));
  }
  if (typeof _0x1e62ce == "object" && _0x1e62ce.id !== undefined) {
    const _0x2d1149 = getLocalizedByIndex(getMessageIndex(_0x1e62ce.id));
    const _0x545468 = Array.isArray(_0x1e62ce.args) ? _0x1e62ce.args : [];
    if (_0x2d1149 === null) {
      if (typeof _0x1e62ce.id == "string") {
        const _0x3f624e = getLocalizedByKey(_0x1e62ce.id);
        return formatWithArgs(_0x3f624e !== null ? _0x3f624e : _0x1e62ce.id, _0x545468);
      }
      return _0x1e62ce;
    }
    return formatWithArgs(_0x2d1149, _0x545468);
  }
  if (typeof _0x1e62ce == "string") {
    const _0x16b6b9 = getLocalizedByKey(_0x1e62ce);
    if (_0x16b6b9 !== null) {
      return _0x16b6b9;
    }
  }
  const _0x45b84f = getLocalizedByIndex(getMessageIndex(_0x1e62ce));
  if (_0x45b84f === null) {
    return _0x1e62ce;
  } else {
    return _0x45b84f;
  }
}
function resolveDialogSelectList(_0x578b1a) {
  if (Array.isArray(_0x578b1a)) {
    return _0x578b1a.map(_0x96e6a5 => resolveNotificationMessage(_0x96e6a5));
  } else {
    return _0x578b1a;
  }
}
function setDialogTextInputFocus(_0x19a4f2) {
  if (main_browser || mp.browsers.exists(main_browser)) {
    main_browser.active = _0x19a4f2;
  }
}
global.resolveNotificationMessage = resolveNotificationMessage;
mp.events.add("OnPlayerDialogShow", (_0x4a554e, _0x34715a, _0x4af112, _0x4d0e01, _0x37b3ec, _0x1c90e4 = 0, _0x2b0950 = 0, _0x29d88a = 0, _0x201f71 = 0, _0x4ad64f, _0x22ba54 = false, _0x1ae6e3 = 0) => {
  if (dialog_id == 231 || _0x4a554e == 231 && dialog_window == 1) {
    mp.events.callRemote("OnPlayerDialogResponse", 231, false, 0, "", 0);
  }
  if (dialog_window != 1) {
    mp.events.call("Disablechat");
    if (!globalThis.casinoSlotOpened && !globalThis.is_horse_seat && !globalThis.casinoRouletteOpened && !globalThis.SurgeonOpened && !globalThis.at_standart_anim && !globalThis.ADOpened && !globalThis.mobileOpen && !globalThis.OnexBetOpened && !globalThis.casinoBlackJackOpened && !globalThis.MafiaInterfaceOpened) {
      localplayer.clearTasks();
    }
    dialog_type = _0x2b0950;
    _0x34715a = resolveNotificationMessage(_0x34715a);
    _0x4af112 = resolveNotificationMessage(_0x4af112);
    _0x4d0e01 = resolveNotificationMessage(_0x4d0e01);
    _0x37b3ec = resolveNotificationMessage(_0x37b3ec);
    if (_0x2b0950 == 0) {
      dialog_id = _0x4a554e;
      const _0x4984e2 = "{\n\t\t\t\"id\":" + _0x4a554e + ",\n\t\t\t\"name_dialog\":\"" + _0x34715a + "\",\n\t\t\t\"text_dialog\":\"" + _0x4af112 + "\",\n\t\t\t\"button1_dialog\":\"" + _0x4d0e01 + "\",\n\t\t\t\"button2_dialog\":\"" + _0x37b3ec + "\",\n\t\t\t\"price_dialog\":\"" + _0x1c90e4 + "\",\n\t\t\t\"price_text\":" + _0x29d88a + ",\n\t\t\t\"confirmDelay\": " + _0x1ae6e3 + ",\n\t\t\t\"opened\":true,\n\t\t\t\"show\":true\n\t\t}";
      main_browser.execute("APPS.state.hud_yesno = " + _0x4984e2);
    } else if (_0x2b0950 == "crypto") {
      dialog_id = _0x4a554e;
      const _0x118f8b = {
        id: _0x4a554e,
        name_dialog: _0x34715a,
        text_dialog: _0x4af112,
        button1_dialog: _0x4d0e01,
        button2_dialog: _0x37b3ec,
        price_type: "crypto",
        price_dialog: _0x1c90e4,
        price_text: _0x29d88a,
        confirmDelay: _0x1ae6e3,
        opened: true,
        show: true
      };
      main_browser.execute("APPS.state.hud_yesno = " + JSON.stringify(_0x118f8b));
    } else if (_0x2b0950 == 1) {
      dialog_id = _0x4a554e;
      let _0x5f37ce = "$";
      if (_0x22ba54 == 1) {
        _0x5f37ce = "";
      }
      const _0x4d5739 = "{\"title\":\"" + _0x34715a + "\",\"text\":\"" + _0x4af112 + "\",\"button1\":\"" + _0x4d0e01 + "\",\"button2\":\"" + _0x37b3ec + "\",\"minimumSlider\":" + _0x29d88a + ",\"maximumSlider\":" + _0x201f71 + ",\"stepSlider\":" + _0x4ad64f + ",\"valueSlider\":0,\"values\":'" + _0x5f37ce + "',\"show\":true}";
      main_browser.execute("APPS.state.hud_yesno_regulator = " + _0x4d5739);
    } else if (_0x2b0950 == 2) {
      if (_0x29d88a == 0) {
        _0x29d88a = "";
      }
      dialog_id = _0x4a554e;
      const _0x524022 = {
        id: _0x4a554e,
        title: _0x34715a,
        text_dialog: _0x4af112,
        text: _0x29d88a,
        button1: _0x4d0e01,
        button2: _0x37b3ec,
        price: _0x1c90e4,
        countToDivide: _0x201f71,
        show: true
      };
      main_browser.execute("APPS.state.hud_yesnotext = " + JSON.stringify(_0x524022));
      setDialogTextInputFocus(true);
    } else if (_0x2b0950 == 25) {
      if (_0x29d88a == 0) {
        _0x29d88a = "";
      }
      dialog_id = _0x4a554e;
      const _0x29bf12 = {
        id: _0x4a554e,
        title: _0x34715a,
        text_dialog: _0x4af112,
        text: _0x29d88a,
        button1: _0x4d0e01,
        button2: _0x37b3ec,
        price: _0x1c90e4,
        show: true
      };
      main_browser.execute("APPS.state.hud_yesnotext_old = " + JSON.stringify(_0x29bf12));
      setDialogTextInputFocus(true);
    } else if (_0x2b0950 == 4) {
      let _0x445c5e;
      dialog_id = _0x4a554e;
      _0x445c5e = _0x4a554e === 240 && Array.isArray(_0x1c90e4) ? _0x1c90e4.map(_0x2b2182 => String(_0x2b2182)) : _0x4a554e !== 852 && _0x4a554e !== 514 || !Array.isArray(_0x1c90e4) ? resolveDialogSelectList(_0x1c90e4) : _0x1c90e4;
      const _0x451564 = _0x4a554e === 240 ? 0 : _0x29d88a;
      const _0x9a8b59 = _0x4a554e === 240 ? 1 : _0x29d88a;
      const _0x23b43a = "{\"name_dialog\":\"" + _0x34715a + "\",\"text_dialog\":\"" + _0x4af112 + "\",\"button1_dialog\":\"" + _0x4d0e01 + "\",\"button2_dialog\":\"" + _0x37b3ec + "\",\"selectlist\":" + JSON.stringify(_0x445c5e) + ",\"price_dialog\":" + _0x451564 + ",\"is_titile\":" + _0x9a8b59 + ",\"show\":true}";
      main_browser.execute("APPS.state.hud_select = " + _0x23b43a);
    } else if (_0x2b0950 == 5) {
      dialog_id = _0x4a554e;
      const _0x12f144 = {
        id: _0x4a554e,
        name_dialog: _0x34715a,
        text_dialog: _0x4af112,
        button1_dialog: _0x4d0e01,
        button2_dialog: _0x37b3ec,
        toggle_list: _0x1c90e4,
        show: true
      };
      main_browser.execute("APPS.state.hud_toggle = " + JSON.stringify(_0x12f144));
    }
    dialog_window = true;
    setTimeout(() => {
      if (!globalThis.casinoSlotOpened && !globalThis.is_horse_seat && !globalThis.casinoRouletteOpened && !globalThis.SurgeonOpened && !globalThis.at_standart_anim && !globalThis.ADOpened && !globalThis.mobileOpen && !globalThis.OnexBetOpened && !globalThis.casinoBlackJackOpened && !globalThis.MafiaInterfaceOpened) {
        localplayer.clearTasks();
      }
      mp.gui.cursor.show(true, true);
    }, 100);
  }
});
mp.events.add("SendDialogResponse", (_0x4e736e, _0xc00c59 = 0, _0x2f927d = "") => {
  DialogResponse(_0x4e736e, _0xc00c59, _0x2f927d);
});
mp.events.add("CancelDialog", () => {
  CloseDialog();
});
global.DialogResponse = function (_0x385f74, _0x26e2d4 = 0, _0x605918) {
  if (dialog_window != 0 && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (dialog_type == 2 || dialog_type == 25) {
      if (!_0x605918 && _0x385f74 == 1) {
        return;
      }
      for (let _0x125f42 = 0; _0x125f42 < _0x605918.length; _0x125f42++) {
        if (_0x605918[_0x125f42] == "'") {
          return;
        }
      }
    }
    mp.events.callRemote("OnPlayerDialogResponse", dialog_id, _0x385f74, _0x26e2d4, _0x605918, dialog_type);
    if (dialog_type == 0 || dialog_type == "crypto") {
      main_browser.execute("APPS.state.hud_yesno.opened = false;");
      main_browser.execute("APPS.state.hud_yesno.show = false;");
    } else if (dialog_type == 1) {
      main_browser.execute("APPS.state.hud_yesno_regulator.show = false;");
    } else if (dialog_type == 2) {
      main_browser.execute("APPS.state.hud_yesnotext.show = false;");
      setDialogTextInputFocus(false);
    } else if (dialog_type == 25) {
      main_browser.execute("APPS.state.hud_yesnotext_old.show = false;");
      setDialogTextInputFocus(false);
    } else if (dialog_type == 4) {
      main_browser.execute("APPS.state.hud_select.show = false;");
    } else if (dialog_type == 5) {
      main_browser.execute("APPS.state.hud_toggle.show = false;");
    }
    if (invOpen == 0 && InNpcDialog == 0 && kpkOpen == 0 && InClothesShop == 0 && !InBarberShop && !InSTO && !InTattooShop && !BizMenuOpened && !mobileOpen && !GhettoBrowserOpened && !BankOpened && !PokerCasinoOpened && !LeaderMenuOpened && !AmmoOpened && !RieltOpened && !InJewellery && !ChipTuneOpened && !car_pass_opened && !Postal_Opened && !VehShowRoomDisplayed && !AzsOpened && !FarmJobOpened && !TaxiOpened && !BizBuyOpened && !FamilyOpened && !HomeEnterOpened && !HarvestOpened && !CustomNumberPlateOpened && !casinoSlotOpened && !globalThis.casinoRouletteOpened && !globalThis.SurgeonOpened && !WarehouseOpened && !OilStationOpened && !globalThis.ADOpened && !DuelRoomsOpened && !RobberyPageOpened && !AdminCenterOpened && !inVinil && !inexclusiveclothes && !SettingsOpened && !StatsOpened && !BuildingTeamOpened && !BuildingConstructionOpened && !CustomizeAmmoOpened && !FamilyTasksOpened && !DonateOpened && !HouseMenuOpened && !BattlePassOpened && !TrainInfoOpened && !FamilyWarOpened && !AuctionOpened && !DriftBuyOpened && !ParkingOpened && !MainThemeOpened && !at_clothes_change && !casinoBlackJackOpened && !EventMenuOpened && !at_death && !HouseRobberyOpened && !PilotJobOpened && !ElectricAZSOpened && !CasesOpened && !BunkerOpened && !BunkerInfoOpened && !JuiceShopOpened && !SkillsOpened && !at_talent_show_camera && !StattuesBookOpened && !CarWashOpened && !InfluenceMapOpened && !SkinsOpened && !PenaltyStationOpened && !InvestmentsOpened && !DarknetOpened && !Shop24Opened && !OnexBetOpened && !MafiaInterfaceOpened && !AnimListOpened && !ForbesOpened && !OfficeOpened && !menuOpen && !CraftItemOpened && !MallSidePickOpened && !ClubOpened && !BattlePassPremiumOpened && !PeopleCollectorJobOpened && !playerPropertyDesignOpened && (!is_summer || !!is_summer && !summerTamagotchiOpened) && (!is_summer || !!is_summer && !mainSummerDesignOpened) && (!is_winter || !!is_winter && !ChristmasMenuOpened) && (!is_school || !!is_school && !SchoolEventOpened) && (!is_easter || !!EasterMenuOpened) && (!is_halloween || !!is_halloween && !HallowenMenuOpened) && (!is_birthday || !BirthdayMenuOpened) && (!is_hoursevent || !!is_hoursevent && !SantasGiftsOpened) && (curr_lang != "ru" || curr_lang == "ru" && !BattalionsOpened) && (curr_lang != "ru" || curr_lang == "ru" && !onOpenedNewAuth) && (curr_lang != "ru" || curr_lang == "ru" && !tabletOpened) && (curr_lang != "ru" || curr_lang == "ru" && !at_newbie_intoduction) && !WarehouseDesignOpened && !tabletOpened && !TaxiOpened && !PrimeInfoOpened && !OpenedClothesSkill && !DonateNewRouletteOpened && !petDesignOpened && !ResourceSellerOpened && (!is_school2024 || !!is_school2024 && !school2024DesignOpened) && (!is_halloween_2024 || !!is_halloween_2024 && !halloweenMenuOpened) && (!bChristmas2024 || !!bChristmas2024 && !christmasDesign2024Opened) && (!bChristmas2024 || !!bChristmas2024 && !christmasDailyDesign2024Opened) && !specialOfferOpened && !BoardOpened && (!bFebruary2026 || !!bFebruary2026 && !februaryDesignOpened && !valentineOpened) && (!bBirthday2025 || !!bBirthday2025 && !birthdayDesignOpened) && !LotteryOpened2025 && !ResourceGathererSetupConfirmOpened && !propertyNotifyOpened && !BunkerNPCOpened && !stateControlOpened && (!bSchool2025 || !!bSchool2025 && !schoolDesignOpened) && (!bHalloween2025 || !!bHalloween2025 && !halloweenDesignOpened2025) && !FurnitureShopOpened && !inBarricadeEditor && !inLobby && (!bChristmas2025 || !!bChristmas2025 && !christmasDesignOpened2025) && (!bBirthday2026 || !!bBirthday2026 && !pixelBattleOpened) && !jobDesignOpened && !MemberInfoOpened) {
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
    }
    if (inBarricadeEditor) {
      mp.events.call("Enablechat");
    }
    dialog_window = false;
    dialog_id = 0;
  }
};
global.CloseDialog = function () {
  if (dialog_window == 1) {
    mp.events.call("Enablechat");
    if (dialog_type == 0 || dialog_type == "crypto") {
      main_browser.execute("APPS.state.hud_yesno.opened = false;");
      main_browser.execute("APPS.state.hud_yesno.show = false;");
    } else if (dialog_type == 1) {
      main_browser.execute("APPS.state.hud_yesno_regulator.show = false;");
    } else if (dialog_type == 2) {
      main_browser.execute("APPS.state.hud_yesnotext.show = false;");
      setDialogTextInputFocus(false);
    } else if (dialog_type == 25) {
      main_browser.execute("APPS.state.hud_yesnotext_old.show = false;");
      setDialogTextInputFocus(false);
    } else if (dialog_type == 4) {
      main_browser.execute("APPS.state.hud_select.show = false;");
    } else if (dialog_type == 5) {
      main_browser.execute("APPS.state.hud_toggle.show = false;");
    }
    dialog_window = false;
    if (invOpen == 0 && !at_death) {
      mp.gui.cursor.show(false, false);
    }
    dialog_id = 0;
  }
};