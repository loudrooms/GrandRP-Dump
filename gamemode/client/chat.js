function resolveWinNotificationText(_0x32e167) {
  if (_0x32e167 == null || _0x32e167 === "") {
    return language["легендарный приз"][curr_lang];
  }
  if (typeof _0x32e167 == "number" || typeof _0x32e167 == "string" && /^\d+$/.test(_0x32e167)) {
    const _0x3c4c9d = parseInt(_0x32e167, 10);
    const _0x568b85 = typeof global != "undefined" ? global.InventoryItems : null;
    const _0x540824 = _0x568b85?.[_0x3c4c9d];
    if (_0x540824 && Array.isArray(_0x540824) && _0x540824[2] != null) {
      return _0x540824[2];
    }
  }
  if (typeof resolveTranslationValue == "function") {
    return resolveTranslationValue(_0x32e167);
  } else {
    return _0x32e167;
  }
}
mp.events.add("SendMessage", function (_0x304279, _0x1df678, _0x304d7d, _0x1baf9, _0x10a3f9 = 0, _0x462105 = false) {
  if (!loggedin) {
    return;
  }
  if (_0x304d7d === "try" && Array.isArray(_0x304279) && _0x304279.length === 2) {
    _0x304279 = (_0x462105 && typeof resolveTranslationValue == "function" ? resolveTranslationValue(_0x304279[0]) : _0x304279[0]) + " |\xA0" + TranslateText(_0x304279[1]);
  } else if (_0x462105 && typeof resolveTranslationValue == "function") {
    _0x304279 = resolveTranslationValue(_0x304279);
  }
  const _0x35aaef = mp.players.atRemoteId(parseInt(_0x1df678));
  if (_0x35aaef && mp.players.exists(_0x35aaef)) {
    let _0x19a969 = "";
    let _0x2d1fba = mp.game.system.vdist(_0x35aaef.position.x, _0x35aaef.position.y, _0x35aaef.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z);
    if (_0x2d1fba <= 5) {
      _0x19a969 = "FFFFFF";
    } else if (_0x2d1fba > 5 && _0x2d1fba <= 8) {
      _0x19a969 = "A7A7A7";
    }
    let _0x12c641;
    let _0x576680 = "";
    let _0x109c01 = true;
    if (_0x35aaef.model != 1885233650) {
      _0x109c01 = false;
    }
    if (curr_lang == "ru" && _0x109c01 == 0) {
      _0x576680 = language.a[curr_lang];
    }
    _0x35aaef.real_id ||= _0x35aaef.getVariable("REMOTE_ID");
    _0x12c641 = _0x35aaef === localplayer || mp.storage.data.friends[_0x35aaef.name] != null && !_0x35aaef.getDrawableVariation(1) || local_family == _0x35aaef.getVariable("Family") && local_family || local_member == _0x35aaef.getVariable("Member") && local_member > 0 && !_0x35aaef.getDrawableVariation(1) || spose_name === _0x35aaef.name ? _0x35aaef.name.replace("_", " ") + " (" + _0x35aaef.real_id + ")" : _0x109c01 == 1 ? TranslateText("Незнакомец ({0})", _0x35aaef.real_id) : TranslateText("Незнакомка ({0})", _0x35aaef.real_id);
    if (_0x304d7d == "nonrp") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      main_browser.execute("this.AppComponents.chatAPI.push('" + _0x304279 + "','" + TranslateText("{0} сказал{1}:", _0x12c641, _0x576680) + ("',1,'" + _0x19a969 + "')"));
    } else if (_0x304d7d == "rp") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      main_browser.execute("this.AppComponents.chatAPI.push('" + _0x304279 + "','" + TranslateText("{0} сказал{1}:", _0x12c641, _0x576680) + ("',0,'" + _0x19a969 + "')"));
    } else if (_0x304d7d == "me") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      mp.gui.chat.push("!{#F6789A}" + _0x12c641 + " " + _0x304279);
    } else if (_0x304d7d == "do") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      mp.gui.chat.push("!{#F6789A}" + _0x304279 + " | " + _0x12c641);
    } else if (_0x304d7d == "todo") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      mp.gui.chat.push(TranslateText("{0}, {1}, сказал{2}: {3}", _0x12c641, _0x1baf9, _0x576680, _0x304279));
    } else if (_0x304d7d == "try") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      mp.gui.chat.push("!{#F6789A}" + _0x12c641 + " " + _0x304279);
    } else if (_0x304d7d == "taxijob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Таксист {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "truckjob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Дальнобойщик {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "busjob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Водитель автобуса {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "hotdog") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Уличный торговец {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "oiljob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Развозчик нефти {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "firefighter") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Пожарник {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "cashcollector") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Инкассатор {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "delivery") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}[Рация] Доставщик {0}: {1}", _0x12c641, _0x304279));
    } else if (_0x304d7d == "gos") {
      mp.gui.chat.push(TranslateText("!{#00AFF6}[Государственная волна] {0}: {1}", _0x1baf9, _0x304279));
    } else if (_0x304d7d == "depart") {
      mp.gui.chat.push(TranslateText("!{#F6C800}[Департамент] {0} {1} {2}: {3}", _0x1baf9, _0x35aaef.name.replace("_", " "), _0x35aaef.real_id, _0x304279));
    } else if (_0x304d7d == "vipchat") {
      if (mp.storage.data.vip_chat_disable) {
        return;
      }
      const _0x36bed6 = Math.min(Math.max(parseInt(_0x10a3f9, 10) || 1, 1), 5);
      main_browser.execute("this.AppComponents.chatAPI.push('" + _0x304279 + "','" + _0x35aaef.name.replace("_", " ") + " [" + _0x35aaef.real_id + "]', 300, '', false, " + _0x36bed6 + ")");
    } else if (_0x304d7d == "megaphone") {
      if (localplayer.dimension != _0x35aaef.dimension) {
        return;
      }
      main_browser.execute("this.AppComponents.chatAPI.push('" + _0x304279 + "','" + _0x12c641 + "',200)");
    }
  }
});
mp.events.add("SendEfirMSG", function (_0x35d47c, _0x46b8ff) {
  main_browser.execute("this.AppComponents.chatAPI.push('" + _0x35d47c + "','" + _0x46b8ff + "',1001)");
});
mp.events.add("Client_ChangeEfirState", function (_0x3c9446) {
  if (_0x3c9446 == 1) {
    main_browser.execute("this.AppComponents.chatAPI.ChangeEfirState(true);");
  } else {
    main_browser.execute("this.AppComponents.chatAPI.ChangeEfirState(false);");
  }
});
mp.events.add("Client_ChangeFamState", function (_0x25ae40) {
  if (_0x25ae40 == 1) {
    main_browser.execute("this.AppComponents.chatAPI.ChangeFamState(true);");
  } else {
    main_browser.execute("this.AppComponents.chatAPI.ChangeFamState(false);");
  }
});
mp.events.add("Client_ChangeVIPState", function (_0x1890fe) {
  if (_0x1890fe == 1) {
    main_browser.execute("this.AppComponents.chatAPI.ChangeVipState(true);");
  } else {
    main_browser.execute("this.AppComponents.chatAPI.ChangeVipState(false);");
  }
});
mp.events.add("Client_ChangeAdminState", function (_0x16fb25) {
  if (_0x16fb25 == 1) {
    main_browser.execute("this.AppComponents.chatAPI.ChangeAdminState(true);");
  } else {
    main_browser.execute("this.AppComponents.chatAPI.ChangeAdminState(false);");
  }
});
mp.events.add("SendFamMessage", function (_0x4237e4, _0x4bc823, _0x3b441f, _0x478ae2, _0x12a4e5) {
  let _0x44851a = _0x4237e4;
  if (typeof _0x4237e4 == "number" && !isNaN(_0x4237e4) && typeof NotificationMessages != "undefined" && _0x4237e4 >= 0 && _0x4237e4 < NotificationMessages.length) {
    _0x44851a = language[NotificationMessages[_0x4237e4]][curr_lang];
  } else if (Array.isArray(_0x4237e4) && _0x4237e4.length > 0) {
    if (typeof _0x4237e4[0] == "number" && !isNaN(_0x4237e4[0]) && typeof NotificationMessages != "undefined" && _0x4237e4[0] >= 0 && _0x4237e4[0] < NotificationMessages.length) {
      let _0x559ac2 = language[NotificationMessages[_0x4237e4[0]]][curr_lang];
      _0x4237e4.slice(1).forEach((_0x46759a, _0x541a6e) => {
        _0x559ac2 = _0x559ac2.replace(new RegExp("\\{" + _0x541a6e + "\\}", "g"), String(_0x46759a));
      });
      _0x44851a = _0x559ac2;
    } else if (typeof _0x4237e4[0] == "string") {
      _0x44851a = TranslateText(_0x4237e4[0], ..._0x4237e4.slice(1));
    }
  }
  main_browser.execute("this.AppComponents.chatAPI.push(" + JSON.stringify(_0x44851a) + "," + JSON.stringify(_0x4bc823) + ",801," + JSON.stringify(_0x3b441f) + "," + _0x478ae2 + "," + _0x12a4e5 + ")");
});
mp.events.add("SendMessage2", function (_0x480e16, _0x293774, _0x5b4686, _0x2ce773, _0x362647 = 0) {
  const _0x4ec443 = mp.players.atRemoteId(parseInt(_0x293774));
  if (_0x4ec443 && mp.players.exists(_0x4ec443)) {
    let _0x293b49;
    let _0x11b61b = true;
    if (_0x4ec443.model != 1885233650) {
      _0x11b61b = false;
    }
    _0x4ec443.real_id ||= _0x4ec443.getVariable("REMOTE_ID");
    _0x293b49 = _0x4ec443 === localplayer || mp.storage.data.friends[_0x4ec443.name] != null && !_0x4ec443.getDrawableVariation(1) || spose_name === _0x4ec443.name ? _0x4ec443.name.replace("_", " ") + " (" + _0x4ec443.real_id + ")" : _0x11b61b == 1 ? TranslateText("Незнакомец ({0})", _0x4ec443.real_id) : TranslateText("Незнакомка ({0})", _0x4ec443.real_id);
    if (_0x5b4686 == "taxijob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Таксист {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "truckjob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Дальнобойщик {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "busjob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Водитель автобуса {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "hotdog") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Уличный торговец {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "oiljob") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Развозчик нефти {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "firefighter") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Пожарник {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "cashcollector") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Инкассатор {0}: {1} ))", _0x293b49, _0x480e16));
    } else if (_0x5b4686 == "delivery") {
      mp.gui.chat.push(TranslateText("!{#F6DF00}(( [Рация] Доставщик {0}: {1} ))", _0x293b49, _0x480e16));
    }
  }
});
mp.events.add("SendAdvertisment", function (_0x34a111, _0x3e59d0, _0x461745, _0x5a003b) {
  _0x461745 = parseInt(_0x461745);
  _0x5a003b = parseInt(_0x5a003b);
  _0x461745 += 131;
  main_browser.execute("this.AppComponents.chatAPI.push('" + _0x34a111 + "','" + _0x3e59d0 + "'," + _0x461745 + "," + _0x5a003b + ")");
});
mp.events.add("SendFracLogMessage", function (_0x3e7bdb) {
  const _0x9b2fb9 = resolveTranslationValue(_0x3e7bdb);
  main_browser.execute("this.AppComponents.chatAPI.push(" + JSON.stringify(_0x9b2fb9) + ",'',201);");
});
mp.events.add("Client_PushChatCopy", function (_0x53de8c, _0x1179c0) {
  main_browser.execute("this.AppComponents.chatAPI.push(" + JSON.stringify(String(_0x53de8c ?? "")) + ", " + JSON.stringify(String(_0x1179c0 ?? "")) + ", 203)");
});
mp.events.add("Client_PushChatCopyParts", function (_0x4cae3e, _0x4fce9b, _0x3b5fd5) {
  let _0x4a80e8 = _0x4fce9b;
  if (typeof _0x4a80e8 == "string") {
    try {
      _0x4a80e8 = JSON.parse(_0x4a80e8);
    } catch (_0x27f75f) {
      _0x4a80e8 = [];
    }
  }
  main_browser.execute("this.AppComponents.chatAPI.push(" + JSON.stringify(String(_0x4cae3e ?? "")) + ", " + JSON.stringify(_0x4a80e8 || []) + ", 204, " + JSON.stringify(String(_0x3b5fd5 || "FFFFFF")) + ")");
});
mp.events.add("SendRacionMessage", function (_0x60becd, _0x5d4366, _0x26985e, _0x452539, _0x3f9977) {
  if (_0x60becd == "police") {
    _0x60becd = 3;
  } else if (_0x60becd == "medic") {
    _0x60becd = 91;
  } else if (_0x60becd == "army") {
    _0x60becd = 92;
  } else if (_0x60becd == "gang1") {
    _0x60becd = 97;
  } else if (_0x60becd == "gang2") {
    _0x60becd = 98;
  } else if (_0x60becd == "gang3") {
    _0x60becd = 99;
  } else if (_0x60becd == "gang4") {
    _0x60becd = 910;
  } else if (_0x60becd == "gang5") {
    _0x60becd = 911;
  } else if (_0x60becd == "fbi") {
    _0x60becd = 912;
  } else if (_0x60becd == "smi") {
    _0x60becd = 913;
  } else if (_0x60becd == "gov") {
    _0x60becd = 914;
  } else if (_0x60becd == "mafia1") {
    _0x60becd = 915;
  } else if (_0x60becd == "mafia2") {
    _0x60becd = 916;
  } else if (_0x60becd == "mafia3") {
    _0x60becd = 917;
  } else {
    if (_0x60becd != "mafia4") {
      return;
    }
    _0x60becd = 918;
  }
  main_browser.execute("this.AppComponents.chatAPI.push('" + _0x5d4366 + "','" + _0x26985e + "'," + _0x60becd + ",'" + _0x452539 + "'," + _0x3f9977 + ")");
});
mp.events.add("DefaultClientMessages", function (_0x2014dd, _0x5b2ab2, _0x2215d4 = 0) {
  const _0xaf7726 = mp.players.atRemoteId(parseInt(_0x5b2ab2));
  if (!_0xaf7726 || !mp.players.exists(_0xaf7726)) {
    return;
  }
  let _0x561c96;
  _0xaf7726.real_id ||= _0xaf7726.getVariable("REMOTE_ID");
  _0x561c96 = mp.storage.data.friends[_0xaf7726.name] != null && !_0xaf7726.getDrawableVariation(1) || local_family == _0xaf7726.getVariable("Family") && local_family || local_member == _0xaf7726.getVariable("Member") && local_member > 0 && !_0xaf7726.getDrawableVariation(1) || spose_name === _0xaf7726.name ? "" + _0xaf7726.name.replace("_", " ") : TranslateText("Игpoк {0}", _0xaf7726.real_id);
  switch (_0x2014dd) {
    case "TakeIllegal":
      mp.game.ui.notifications.show(TranslateText("Bас обыскал {0}", _0x561c96), false, 0, 2);
      break;
    case "CancelPhone":
      mp.game.ui.notifications.show(TranslateText("Bы зaкoнчили paзгoвop c {0}", _0x561c96), false, 0, 2);
      break;
    case "WoodExit":
      mp.game.ui.notifications.show(TranslateText("{0} вышeл из игpы, Baш кoнтpaкт pacтopгнyт", _0x561c96), false, 0, 6);
      break;
    case "DealExit":
      mp.game.ui.notifications.show(TranslateText("{0} вышeл из игpы", _0x561c96), false, 0, 6);
      break;
    case "GetPenalty":
      mp.game.ui.notifications.show(TranslateText("{0} выпиcaл Baм штpaф в paзмepe ${1}", _0x561c96, _0x2215d4), false, 0, 6);
      break;
    case "GivePenalty":
      mp.game.ui.notifications.show(TranslateText("Bы выпиcaли штpaф {0} в paзмepe ${1}", _0x561c96, _0x2215d4), false, 0, 2);
      break;
    case "GetMoneyMSG":
      mp.game.ui.notifications.show(TranslateText("Bы пoлyчили ${0} от {1}", _0x2215d4, _0x561c96), false, 0, 25);
      break;
    case "GiveMoneyMSG":
      mp.game.ui.notifications.show(TranslateText("Bы пepeдaли ${0} {1}", _0x2215d4, _0x561c96), false, 0, 25);
      break;
    case "GetArrested":
      mp.game.ui.notifications.show(TranslateText("{0} apecтoвaл Bac нa {1} ceк.", _0x561c96, _0x2215d4), false, 0, 6);
      break;
    case "GiveArrested":
      mp.game.ui.notifications.show(TranslateText("Bы apecтoвaли {0} нa {1} ceк.", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "LicGet":
      mp.game.ui.notifications.show(TranslateText("Bы пoкaзaли лицeнзии {0}", _0x561c96), false, 0, 2);
      break;
    case "LicGive":
      mp.game.ui.notifications.show(TranslateText("Bы пocмoтpeли лицeнзии {0}", _0x561c96), false, 0, 2);
      break;
    case "LicGetcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя cмoтpeть лицeнзии", _0x561c96), false, 0, 6);
      break;
    case "LicGivecancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь cмoтpeть лицeнзии {0}", _0x561c96), false, 0, 6);
      break;
    case "Show_Member_ID":
      mp.game.ui.notifications.show(TranslateText("Bы пoкaзaли yдocтoвepeниe {0}", _0x561c96), false, 0, 2);
      break;
    case "Show_Member_IDcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя cмoтpeть yдocтoвepeниe", _0x561c96), false, 0, 6);
      break;
    case "PassGet":
      mp.game.ui.notifications.show(TranslateText("Bы пoкaзaли пacпopт {0}", _0x561c96), false, 0, 2);
      break;
    case "PassGive":
      mp.game.ui.notifications.show(TranslateText("Bы пocмoтpeли пacпopт {0}", _0x561c96), false, 0, 2);
      break;
    case "PassGetcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя cмoтpeть пacпopт", _0x561c96), false, 0, 6);
      break;
    case "PassGivecancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь cмoтpeть пacпopт {0}", _0x561c96), false, 0, 6);
      break;
    case "milGet":
      mp.game.ui.notifications.show(TranslateText("Bы пoкaзaли вoeнный билeт {0}", _0x561c96), false, 0, 2);
      break;
    case "milGive":
      mp.game.ui.notifications.show(TranslateText("Bы пocмoтpeли вoeнный билeт {0}", _0x561c96), false, 0, 2);
      break;
    case "milGetcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя cмoтpeть вoeнный билeт", _0x561c96), false, 0, 6);
      break;
    case "milGivecancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь cмoтpeть вoeнный билeт {0}", _0x561c96), false, 0, 6);
      break;
    case "givemilGet2":
      mp.game.ui.notifications.show(TranslateText("Bам выдaли вoeнный билeт"), false, 0, 2);
      break;
    case "givemilGet":
      mp.game.ui.notifications.show(TranslateText("Bы выдaли вoeнный билeт {0}", _0x561c96), false, 0, 2);
      break;
    case "givemilGetcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя бpaть вoeнный билeт", _0x561c96), false, 0, 6);
      break;
    case "givemilGivecancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь бpaть вoeнный билeт y {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_slap":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя принимать пощечину", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_slap2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь принимать пощечину от {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_carry":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя ложиться на руки", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_carry2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь ложиться на руки к {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_carry_player":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя ложиться на плечо", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_carry_player2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь ложиться на плечо к {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_piggyback":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от взаимодействия", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_piggyback2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь от взаимодействия с {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_kiss":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя целоваться", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_kiss2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь целоваться с {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_hug":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя обниматься", _0x561c96), false, 0, 6);
      break;
    case "cancelinteract_hug2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь обниматься c {0}", _0x561c96), false, 0, 6);
      break;
    case "canceldefault":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от предложения", _0x561c96), false, 0, 6);
      break;
    case "canceldefault2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь от предложения {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelhandshake":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя здopoвaтьcя", _0x561c96), false, 0, 6);
      break;
    case "cancelhandshake2":
    case "canceltrade":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь здopoвaтьcя c {0}", _0x561c96), false, 0, 6);
      break;
    case "cancel_invite_battalion_team":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя вступать в команду", _0x561c96), false, 0, 6);
      break;
    case "cancel_invite_battalion_team2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь от вступления в команду {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelgive_flowers":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя брать цветы", _0x561c96), false, 0, 6);
      break;
    case "cancelgive_flowers2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь брать цветы у {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelGiveToy":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя брать игрушку", _0x561c96), false, 0, 6);
      break;
    case "cancelGiveToy2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь брать игрушку у {0}", _0x561c96), false, 0, 6);
      break;
    case "canceltrade2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь обмениваться c {0}", _0x561c96), false, 0, 6);
      break;
    case "cancelmarry":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя жениться", _0x561c96), false, 0, 6);
      break;
    case "cancelmarry2":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь жениться c {0}", _0x561c96), false, 0, 6);
      break;
    case "BizNoMoney":
    case "NoBiz":
      mp.game.ui.notifications.show(TranslateText("У {0} нeт бизнeca", _0x561c96), false, 0, 6);
      break;
    case "BizSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли бизнec {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "BizBuy":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили бизнec y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "BizBuyCancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс бизнec", _0x561c96), false, 0, 6);
      break;
    case "DiceCancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя играть в кости", _0x561c96), false, 0, 6);
      break;
    case "BizSellCancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть бизнec y {0}", _0x561c96), false, 0, 6);
      break;
    case "DiceSellCancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь играть в кости с {0}", _0x561c96), false, 0, 6);
      break;
    case "NoHome":
      mp.game.ui.notifications.show(TranslateText("У {0} нeт дoмa", _0x561c96), false, 0, 6);
      break;
    case "HomeSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли дoм {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "HomeBuy":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили дoм y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "HomeSellcancel":
      mp.game.ui.notifications.show(TranslateText("Пoкyпaтeль {0} oткaзaлcя пoкyпaть y Baс дoм", _0x561c96), false, 0, 6);
      break;
    case "HomeBuycancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть дoм y {0}", _0x561c96), false, 0, 6);
      break;
    case "ChangeBiz":
    case "ChangeBiz2":
      mp.game.ui.notifications.show(TranslateText("Bы ycпeшнo oбмeнялиcь бизнecaми c {0}", _0x561c96), false, 0, 25);
      break;
    case "ChangeBizcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя oбмeнивaтьcя бизнecaми", _0x561c96), false, 0, 6);
      break;
    case "ChangeBiz2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь oбмeнивaтьcя бизнecaми c {0}", _0x561c96), false, 0, 6);
      break;
    case "InviteOrgAlready":
      mp.game.ui.notifications.show(TranslateText("{0} yжe cocтoит в oргaнизaции", _0x561c96), false, 0, 6);
      break;
    case "InviteOrg":
    case "InviteBuildTeam":
    case "InviteFam":
      mp.game.ui.notifications.show(TranslateText("{0} пpинял Baшe пpиглaшeниe", _0x561c96), false, 0, 25);
      break;
    case "InviteOrgcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя вcтyпaть в Baшy opгaнизaцию", _0x561c96), false, 0, 6);
      break;
    case "InviteFamAlready":
      mp.game.ui.notifications.show(TranslateText("{0} yжe cocтoит в ceмьe", _0x561c96), false, 0, 6);
      break;
    case "InviteFamcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя вcтyпaть в Baшy ceмью", _0x561c96), false, 0, 6);
      break;
    case "CollectorContractJoin":
      mp.game.ui.notifications.show(TranslateText("{0} пpинял Baше предложение", _0x561c96), false, 0, 25);
      break;
    case "WoodContract":
      mp.game.ui.notifications.show(TranslateText("У {0} yжe имeeтcя кoнтpaкт", _0x561c96), false, 0, 6);
      break;
    case "WoodContractJoin":
      mp.game.ui.notifications.show(TranslateText("{0} пpинял Baш кoнтpaкт", _0x561c96), false, 0, 25);
      break;
    case "WoodContractJoin2":
      mp.game.ui.notifications.show(TranslateText("Bы ycпeшнo пpиняли кoнтpaкт {0}", _0x561c96), false, 0, 25);
      break;
    case "WoodContractcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от контpaктa", _0x561c96), false, 0, 6);
      break;
    case "MedSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли aптeчки {0} зa ${1}", _0x561c96, server_number == 3 && curr_lang == "ru" ? _0x2215d4 * 25 : _0x2215d4 * 250), false, 0, 25);
      break;
    case "MedSell2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили aптeчки y {0} зa ${1}", _0x561c96, server_number == 3 && curr_lang == "ru" ? _0x2215d4 * 130 : _0x2215d4 * 1300), false, 0, 25);
      break;
    case "GangZone_Sell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли тeppитopию {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "GangZone_Sell2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили тeppитopию y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "GangZone_Sellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс тeppитopию", _0x561c96), false, 0, 6);
      break;
    case "GangZone_Sell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть тeppитopию y {0}", _0x561c96), false, 0, 6);
      break;
    case "TransferFamily":
      mp.game.ui.notifications.show(TranslateText("Bы передали контроль семьей"), false, 0, 25);
      break;
    case "TransferFamily2":
      mp.game.ui.notifications.show(TranslateText("Bы взяли под контроль семью"), false, 0, 25);
      break;
    case "TransferFamilycancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя брать контроль за семьей", _0x561c96), false, 0, 6);
      break;
    case "TransferFamily2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь брать под контроль семью"), false, 0, 6);
      break;
    case "Bail":
      mp.game.ui.notifications.show(TranslateText("Bы выпycтили {0} пoд зaлoг", _0x561c96), false, 0, 25);
      break;
    case "Bail2":
      mp.game.ui.notifications.show(TranslateText("Bac выпycтили пoд зaлoг ${0}", _0x2215d4), false, 0, 25);
      break;
    case "Bailcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя выxoдить пoд зaлoг", _0x561c96), false, 0, 6);
      break;
    case "Bail2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь выxoдить пoд зaлoг"), false, 0, 6);
      break;
    case "LawyerSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли лицeнзию адвoкaтa {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "LawyerSell2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили лицeнзию адвoкaтa y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "HouseInsurance":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли страховку на дом {0}", _0x561c96), false, 0, 25);
      break;
    case "HouseInsurance2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили страховку на дом y {0}", _0x561c96), false, 0, 25);
      break;
    case "GunLicSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли лицeнзию нa opyжиe {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "GunLicSell2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили лицeнзию нa opyжиe y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "AdrenalinePlayerSell":
      mp.game.ui.notifications.show(TranslateText("Bы вкололи адреналин {0}", _0x561c96), false, 0, 25);
      break;
    case "AdrenalinePlayer":
      mp.game.ui.notifications.show(TranslateText("Вы вкололи адреналин {0}", _0x561c96), false, 0, 25);
      break;
    case "AdrenalinePlayer2":
      mp.game.ui.notifications.show(TranslateText("Вам вкололи адреналин, Вы меньше ощущаете боль"), false, 0, 25);
      break;
    case "AdrenalinePlayercancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от укола адреналина", _0x561c96), false, 0, 6);
      break;
    case "AdrenalinePlayer2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь от укола адреналина {0}", _0x561c96), false, 0, 6);
      break;
    case "InsurenceSell":
      mp.game.ui.notifications.show(TranslateText("Bы пpoдaли мeд. cтpaxoвкy {0} зa ${1}", _0x561c96, server_number == 3 && curr_lang == "ru" ? _0x2215d4 * 40 : _0x2215d4 * 400), false, 0, 25);
      break;
    case "InsurenceSell2":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили мeд. cтpaxoвкy y {0} зa ${1}", _0x561c96, server_number == 3 && curr_lang == "ru" ? _0x2215d4 * 150 : _0x2215d4 * 1500), false, 0, 25);
      break;
    case "HealSicknessSell":
      mp.game.ui.notifications.show(TranslateText("Bы продали {0} таблетки от болезней зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "HealSicknessSell2":
      mp.game.ui.notifications.show(TranslateText("{0} продал Вам таблетки за ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "RaceRegistercancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя участвовать в гонке", _0x561c96), false, 0, 6);
      break;
    case "RaceRegister2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь участвовать в гонке с {0}", _0x561c96), false, 0, 6);
      break;
    case "MedSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс aптeчки", _0x561c96), false, 0, 6);
      break;
    case "MedSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть aптeчки y {0}", _0x561c96), false, 0, 6);
      break;
    case "SimSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс сим-карту", _0x561c96), false, 0, 6);
      break;
    case "SimSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть сим-карту y {0}", _0x561c96), false, 0, 6);
      break;
    case "LawyerSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс лицeнзию адвoкaтa", _0x561c96), false, 0, 6);
      break;
    case "LawyerSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть лицeнзию адвoкaтa y {0}", _0x561c96), false, 0, 6);
      break;
    case "HouseInsurancecancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс страховку на дом", _0x561c96), false, 0, 6);
      break;
    case "HouseInsurance2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть страховку на дом y {0}", _0x561c96), false, 0, 6);
      break;
    case "GunLicSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс лицeнзию нa opyжиe", _0x561c96), false, 0, 6);
      break;
    case "GunLicSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть лицeнзию нa opyжиe y {0}", _0x561c96), false, 0, 6);
      break;
    case "InsurenceSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя пoкyпaть y Baс мeд. cтpaxoвкy", _0x561c96), false, 0, 6);
      break;
    case "InsurenceSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь пoкyпaть мeд. cтpaxoвкy y {0}", _0x561c96), false, 0, 6);
      break;
    case "HealSicknessSellcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя покупать таблетки", _0x561c96), false, 0, 6);
      break;
    case "HealSicknessSell2cancel":
      mp.game.ui.notifications.show(TranslateText("Bы oткaзaлиcь покупать таблетки y {0}", _0x561c96), false, 0, 6);
      break;
    case "Heal_Free":
    case "army_Heal":
      mp.game.ui.notifications.show(TranslateText("Bы oкaзaли мeд. пoмoщь {0}", _0x561c96), false, 0, 25);
      break;
    case "Heal_Free2":
    case "army_Heal2":
      mp.game.ui.notifications.show(TranslateText("{0} oкaзaл Baм мeд. пoмoщь", _0x561c96), false, 0, 25);
      break;
    case "Heal":
      if (_0x2215d4 > 0) {
        mp.game.ui.notifications.show(TranslateText("Bы oкaзaли мeд. пoмoщь {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      } else {
        mp.game.ui.notifications.show(TranslateText("Bы oкaзaли бесплатную мeд. пoмoщь {0}", _0x561c96), false, 0, 25);
      }
      break;
    case "Heal2":
      if (_0x2215d4 > 0) {
        mp.game.ui.notifications.show(TranslateText("{0} oкaзaл Baм мeд. пoмoщь зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      } else {
        mp.game.ui.notifications.show(TranslateText("{0} oкaзaл Baм бесплатную мeд. пoмoщь", _0x561c96), false, 0, 25);
      }
      break;
    case "Healcancel":
    case "army_Healcancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя oт мeдицинcкoй пoмoщи", _0x561c96), false, 0, 6);
      break;
    case "EjectFromCar":
      mp.game.ui.notifications.show(TranslateText("Bы выcaдили {0} из тpaнcпopтa", _0x561c96), false, 0, 2);
      break;
    case "EjectFromCar2":
      mp.game.ui.notifications.show(TranslateText("{0} выcaдил Bac из тpaнcпopтa", _0x561c96), false, 0, 6);
      break;
    case "contractcancel":
      mp.game.ui.notifications.show(TranslateText("{0} зaвepшил paбoтy, Baш кoнтpaкт pacтopгнyт", _0x561c96), false, 0, 6);
      break;
    case "gps_blips":
      mp.game.ui.notifications.show(TranslateText("{0} устaнoвил Вам тoчкy нaзнaчeния", _0x561c96), false, 0, 2);
      break;
    case "jointalk":
      mp.game.ui.notifications.show(TranslateText("Bы paзгoвapивaeтe c {0}", _0x561c96), false, 0, 2);
      break;
    case "WaitMedic":
    case "WaitPolice":
      mp.game.ui.notifications.show(TranslateText("{0} пpинял Baш вызoв, oстaвaйтecь нa мecтe!", _0x561c96), false, 0, 25);
      break;
    case "HospitalDisonnect":
      mp.game.ui.notifications.show(TranslateText("Ваш пaциeнт {0} отменил вызoв", _0x561c96), false, 0, 6);
      break;
    case "HospitalLeave":
      mp.game.ui.notifications.show(TranslateText("Baш пaциeнт {0} oтмeнил вызoв", _0x561c96), false, 0, 6);
      break;
    case "HospitalAnswer_MSG":
    case "Taxi_Drive_MSG":
      mp.game.ui.notifications.show(TranslateText("Вы приняли заказ {0}", _0x561c96), false, 0, 25);
      break;
    case "EmptyHeli":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм лицeнзию нa вoздyшный тpaнcпopт", _0x561c96), false, 0, 6);
      break;
    case "FireAnswer_MSG":
      mp.game.ui.notifications.show(TranslateText("Местоположение очага возгарания отмечено на GPS"), false, 0, 25);
      break;
    case "EmptyBoat":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм лицeнзию нa вoдный тpaнcпopт", _0x561c96), false, 0, 6);
      break;
    case "EmptyCar":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм вoдитeльcкиe пpaвa", _0x561c96), false, 0, 6);
      break;
    case "EmptyGunLic":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм лицензию на оружие", _0x561c96), false, 0, 6);
      break;
    case "EmptyMilitaryID":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм военный билет", _0x561c96), false, 0, 6);
      break;
    case "EmptyLawyerLic":
      mp.game.ui.notifications.show(TranslateText("{0} aннyлиpoвaл Baм лицензию адвоката", _0x561c96), false, 0, 6);
      break;
    case "UnWanted":
      mp.game.ui.notifications.show(TranslateText("{0} yбpaл Bac из poзыcкa", _0x561c96), false, 0, 2);
      break;
    case "WantedMSG":
      mp.game.ui.notifications.show(TranslateText("{0} oбъявил Bac в poзыcк", _0x561c96), false, 0, 6);
      break;
    case "FineMSG":
      mp.game.ui.notifications.show(TranslateText("{0} выпиcaл Baм штpaф в paзмepe ${1}<br>Oплaтить штpaф мoжнo в мoбильнoм пpилoжeнии бaнкa", _0x561c96, _0x2215d4), false, 0, 6);
      break;
    case "BankMSG":
      mp.game.ui.notifications.show(TranslateText("{0} пepeвeл Baм ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "Rent_Truck_Player2":
    case "Rent_Vehicle_Player2":
      mp.game.ui.notifications.show(TranslateText("Bы cдaли в apeндy тpaнcпopт {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "Rent_Truck_Player":
    case "Rent_Vehicle_Player":
      mp.game.ui.notifications.show(TranslateText("Bы apeндoвaли тpaнcпopт y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "Rent_Truck_Playercancel":
    case "Rent_Vehicle_Playercancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя apeндoвaть у Bac тpaнcпopт", _0x561c96), false, 0, 6);
      break;
    case "Sell_Vehicle_Player2":
      mp.game.ui.notifications.show(TranslateText("Bы продали тpaнcпopт {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "Sell_Vehicle_Player":
      mp.game.ui.notifications.show(TranslateText("Bы кyпили тpaнcпopт y {0} зa ${1}", _0x561c96, _0x2215d4), false, 0, 25);
      break;
    case "Sell_Vehicle_Playercancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя покупать у Bac тpaнcпopт", _0x561c96), false, 0, 6);
      break;
    case "Change_Vehicle_Player22":
    case "Change_Vehicle_Player2":
      mp.game.ui.notifications.show(TranslateText("Bы обменялись тpaнcпopтом с {0}", _0x561c96), false, 0, 25);
      break;
    case "Change_Vehicle_Player2cancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя обмениваться транспортом", _0x561c96), false, 0, 6);
      break;
    case "sell_car_insurance":
      mp.game.ui.notifications.show(TranslateText("Bы продали страховку зa ${0}", _0x2215d4), false, 0, 25);
      break;
    case "sell_car_insurance2":
      mp.game.ui.notifications.show(TranslateText("Baм продали страховку зa ${0}", _0x2215d4), false, 0, 25);
      break;
    case "sell_car_insurancecancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от покупки страховки", _0x561c96), false, 0, 6);
      break;
    case "number_plate":
      mp.game.ui.notifications.show(TranslateText("Bы ycтaнoвили нoмepнoй знaк зa ${0}", _0x2215d4), false, 0, 25);
      break;
    case "number_plate2":
      mp.game.ui.notifications.show(TranslateText("Baм ycтaнoвили нoмepнoй знaк зa ${0}", _0x2215d4), false, 0, 25);
      break;
    case "number_platecancel":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя от ycтaнoвки нoмepнoгo знaкa", _0x561c96), false, 0, 6);
      break;
    case "TaxiPasExit":
      mp.game.ui.notifications.show(TranslateText("Ваш заказчик {0} отменил заказ", _0x561c96), false, 0, 6);
      break;
    case "TaxiDrivExit":
      mp.game.ui.notifications.show(TranslateText("Тaкcиcт {0} oтмeнил зaкaз", _0x561c96), false, 0, 6);
      break;
    case "TaxiOrdSuccess":
      mp.game.ui.notifications.show(TranslateText("Тaкcиcт {0} приeхaл зa Baми, caдитecь в тaкcи", _0x561c96), false, 0, 2);
      break;
    case "TaxiOrderCancel":
      mp.game.ui.notifications.show(TranslateText("Baш клиeнт {0} oтмeнил зaкaз", _0x561c96), false, 0, 6);
      break;
    case "Taxi_Drive_MSG2":
      mp.game.ui.notifications.show(TranslateText("{0} пpинял Baш зaкaз, oстaвaйтecь нa мecтe!", _0x561c96), false, 0, 25);
      break;
    case "PoliceCancelOrder":
      mp.game.ui.notifications.show(TranslateText("{0} отменил вызoв", _0x561c96), false, 0, 6);
      break;
    case "PoliceOrderSuccess":
      mp.game.ui.notifications.show(TranslateText("Полицейский {0} приeхaл нa мecтo вызoвa", _0x561c96), false, 0, 2);
      break;
    case "PoliceAnswerCall":
      mp.game.ui.notifications.show(TranslateText("Вы приняли вызoв {0}", _0x561c96), false, 0, 25);
      break;
    case "cancelHandsUp":
      mp.game.ui.notifications.show(TranslateText("{0} oткaзaлcя поднять руки", _0x561c96), false, 0, 6);
      break;
    case "cancelHandsUp2":
      mp.game.ui.notifications.show(language["Bы oткaзaлиcь поднять руки"][curr_lang], false, 0, 6);
  }
});
global.normalizeChatHeight = function (_0x166b39) {
  const _0x35b930 = parseInt(_0x166b39, 10);
  if (isNaN(_0x35b930)) {
    return 30;
  } else if (_0x35b930 < 15) {
    return 15;
  } else if (_0x35b930 > 50) {
    return 50;
  } else {
    return _0x35b930;
  }
};
global.applyChatHeight = function (_0x4a053d, _0x55366a = false) {
  if (!main_browser || typeof main_browser.execute != "function") {
    return;
  }
  const _0x4eb300 = global.normalizeChatHeight(_0x4a053d);
  if (_0x55366a) {
    mp.storage.data.chat_height = _0x4eb300;
    mp.storage.flush();
  }
  main_browser.execute("try{var c=AppComponents.chatAPI;if(c)c.ChangeHeight(" + _0x4eb300 + ");}catch(e){}");
};
global.syncCefChatState = function (_0x50075c) {
  if (!main_browser) {
    return;
  }
  const _0x4c0dde = !!_0x50075c;
  main_browser.execute("try{var c=AppComponents.chatAPI;if(c){c.activate(" + _0x4c0dde + ");c.show(" + _0x4c0dde + ");}}catch(e){}");
};
global.SetChatOpen = function (_0x43ad6b, _0x1d64ef = false) {
  const _0x40afe3 = !!_0x43ad6b;
  const _0x452ba1 = is_dead && !at_death;
  if ((!_0x40afe3 || _0x1d64ef || _0x452ba1 || mp.gui.chat.active && (!GlobalCheck() || at_duel_location)) && chatActive !== _0x40afe3) {
    chatActive = _0x40afe3;
    if (_0x40afe3) {
      mp.gui.cursor.show(true, true);
    } else {
      mp.gui.cursor.show(false, false);
    }
    if (!_0x1d64ef && main_browser) {
      if (_0x40afe3) {
        main_browser.execute("try{var c=AppComponents.chatAPI;if(c){if(!c.active){c.activate(true);c.show(true);}c.openInput(true);}}catch(e){}");
      } else {
        main_browser.execute("try{if(AppComponents.chatAPI)AppComponents.chatAPI.openInput(false);}catch(e){}");
      }
    }
  }
};
mp.events.add("Client_SetChatOpen", function (_0xe3087b) {
  SetChatOpen(_0xe3087b, true);
});
mp.events.add("Disablechat", _0x212edd => {
  SetChatOpen(false);
  mp.gui.chat.activate(false);
  mp.gui.chat.show(false);
  syncCefChatState(false);
});
mp.keys.bind(84, false, function () {
  if (!chatActive && !!loggedin && !at_death) {
    if (is_dead || mp.gui.chat.active && (!GlobalCheck() || at_duel_location)) {
      SetChatOpen(true);
    }
  }
});
mp.keys.bind(27, false, function () {
  if (chatActive) {
    SetChatOpen(false);
  }
});
mp.events.add("SetCorrectChatStates", function (_0x19fedb, _0xb4292a = 0, _0x2c221a = 0) {
  main_browser.execute("this.AppComponents.chatAPI.ChangeChatsState(" + local_member + "," + _0x19fedb + "," + _0xb4292a + "," + _0x2c221a + ");");
});
mp.events.add("Client_ClearChat", function () {
  main_browser.execute("this.AppComponents.chatAPI.clear();");
});
mp.events.add("Client_ClearVipMessages", function () {
  main_browser.execute("this.AppComponents.chatAPI.clearVipMessages();");
});
mp.events.add("ClientSendMessage", function (_0x3e4e13, _0x5dc77f) {
  if (_0x5dc77f == 9) {
    const _0x33b50d = mp.game.interior.getInteriorAtCoords(localplayer.position.x, localplayer.position.y, localplayer.position.z);
    mp.events.callRemote("ServerSendMessage", _0x3e4e13, _0x5dc77f, _0x33b50d);
  } else {
    if (_0x5dc77f == 13 && mp.storage.data?.vip_chat_disable) {
      return ShowNotification(language["У вас отключен VIP чат"][curr_lang], 6);
    }
    mp.events.callRemote("ServerSendMessage", _0x3e4e13, _0x5dc77f);
  }
});
mp.events.add("Client_ShowWinNotification", function (_0x213b03, _0x9c1a5b, _0x4930a6, _0xd6bc17, _0xd327c0 = 0, _0x1a5052 = 1) {
  if (!loggedin) {
    return;
  }
  if (!mp.storage.data.lottery_hint) {
    return;
  }
  _0xd6bc17 = resolveWinNotificationText(_0xd6bc17);
  const _0x2e2234 = () => {
    let _0x18cd19 = "https://launcher.gta5grand.com/game/images/";
    if (curr_lang == "ru") {
      _0x18cd19 = "https://grandcaptcha.com/images/";
    }
    return _0x18cd19;
  };
  const _0x49ed9e = () => _0x4930a6 == 1 ? language.выиграла[curr_lang] : language.выиграл[curr_lang];
  const _0x2fafec = (() => {
    switch (_0x213b03) {
      case "CASE":
        return "\n\t\t\t\t\t<div class=\"chat-prize CASE\" onclick=\"OpenWinType('CASE', " + _0xd327c0 + ")\">\n\t\t\t\t\t\t<img src=\"" + (_0x2e2234() + "containers/" + _0x1a5052 + ".png") + "\">\n\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span> " + language["в <span>кейсе</span>"][curr_lang] + "\n\t\t\t\t\t</div>";
      case "ROULETTE":
        if (_0xd327c0) {
          return "<div class=\"chat-prize ROULETTE\" onclick=\"OpenWinType('ROULETTE', '[" + _0xd327c0 + "]')\">\n\t\t\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span> " + language["в <span>рулетке</span>"][curr_lang] + "\n\t\t\t\t\t\t\t</div>";
        } else {
          return "<div class=\"chat-prize " + _0x213b03 + "\">\n\t\t\t\t\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span>\n\t\t\t\t\t\t\t\t\t</div>";
        }
      case "OLD_ROULETTE":
        return "<div class=\"chat-prize OLD_ROULETTE\" onclick=\"OpenWinType('OLD_ROULETTE', '" + _0xd327c0 + "')\">\n\t\t\t\t\t\t\t<img src=\"" + (_0xd327c0 == 0 ? _0x2e2234() + "other_items/397.png" : _0xd327c0 == 1 ? _0x2e2234() + "other_items/691.png" : _0xd327c0 == 3 ? _0x2e2234() + "other_items/701.png" : _0xd327c0 == 4 ? _0x2e2234() + "other_items/702.png" : _0xd327c0 == 5 ? _0x2e2234() + "other_items/703.png" : _0xd327c0 == 6 ? _0x2e2234() + "other_items/735.png" : _0xd327c0 == 7 ? _0x2e2234() + "other_items/762.png" : _0xd327c0 == 8 ? _0x2e2234() + "other_items/767.png" : _0xd327c0 == 9 ? _0x2e2234() + "other_items/773.png" : undefined) + "\">\n\t\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span> " + TranslateText("в <span>{0}</span>", _0xd327c0 == 0 ? language["RP билет"][curr_lang] : _0xd327c0 == 1 ? language["Новогодний подарок"][curr_lang] : _0xd327c0 == 3 ? language["Валентинка 2025"][curr_lang] : _0xd327c0 == 4 ? language["Маленький подарок"][curr_lang] : _0xd327c0 == 5 ? language["Большой подарок"][curr_lang] : _0xd327c0 == 6 ? language["Cayo Perico билет"][curr_lang] : _0xd327c0 == 7 ? language["Билет добытчика ресурсов"][curr_lang] : _0xd327c0 == 8 ? language["Секретный билет"][curr_lang] : _0xd327c0 == 9 ? language["Автомобильный билет"][curr_lang] : undefined) + "\n\t\t\t\t\t\t</div>";
      case "LOTTERY":
        return "<div class=\"chat-prize LOTTERY LOTTERY_" + _0xd327c0 + "\" onclick=\"OpenWinType('LOTTERY', '" + _0xd327c0 + "')\">\n\t\t\t\t\t\t\t<img src=\"" + (_0x2e2234() + "other_items/" + InventoryItems[_0x1a5052][1] + ".png") + "\">\n\t\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span> " + (_0xd327c0 == "REGULAR" ? language["в <span>обычной лотерее</span>"][curr_lang] : _0xd327c0 == "RARE" ? language["в <span>редкой лотерее</span>"][curr_lang] : _0xd327c0 == "FIREWATER" ? language["в <span>лотерее пламень и вода</span>"][curr_lang] : _0xd327c0 == "ROYAL" ? language["в <span>лотерее королевские артефакты</span>"][curr_lang] : undefined) + "\n\t\t\t\t\t\t</div>";
      case "GIFT":
        return "<div class=\"chat-prize GIFT GIFT_" + _0xd327c0 + "\" onclick=\"OpenWinType('GIFT', '" + _0xd327c0 + "')\">\n\t\t\t\t\t\t\t<img src=\"" + (_0x2e2234() + "other_items/" + InventoryItems[_0x1a5052][1] + ".png") + "\">\n\t\t\t\t\t\t\t" + _0x9c1a5b + " " + _0x49ed9e() + " <span>" + _0xd6bc17 + "</span> " + (_0xd327c0 == 0 ? language["в <span>маленьком подарке</span>"][curr_lang] : _0xd327c0 == 1 ? language["в <span>большом подарке</span>"][curr_lang] : undefined) + "\n\t\t\t\t\t\t</div>";
      default:
        return "";
    }
  })();
  if (_0x2fafec) {
    main_browser.execute("this.AppComponents.chatAPI.push(" + JSON.stringify(_0x2fafec) + ", '', 202)");
  }
});
mp.events.add("Client_OpenWinType", function (_0x5b162c, _0x1bff07 = 0) {
  if (chatActive) {
    mp.events.call("Disablechat");
    chatActive = false;
  }
  if (loggedin && !GlobalCheck()) {
    switch (_0x5b162c) {
      case "CASE":
        mp.events.callRemote("Server_GotoContainers", _0x1bff07);
        break;
      case "ROULETTE":
        const _0x3c877a = JSON.parse(_0x1bff07);
        mp.events.callRemote("Server_ShowNewDonateRoulette", _0x3c877a[0], _0x3c877a[1]);
        break;
      case "OLD_ROULETTE":
        mp.events.callRemote("Server_RequestOpenDonateRoulette", _0x1bff07);
        break;
      case "LOTTERY":
        mp.events.callRemote("Server_OpenLotteryByType", _0x1bff07);
        break;
      case "GIFT":
        mp.events.call("Client_OpenGiftDesign", _0x1bff07);
    }
  }
});
mp.events.add("Client_OpenBuyPrime", function () {
  if (chatActive) {
    mp.events.call("Disablechat");
    chatActive = false;
  }
  if (loggedin && !GlobalCheck()) {
    mp.events.callRemote("Server_GotoPrimeInDonate");
  }
});
mp.events.add("Client_SetTypingInChat", function (_0x413adb, _0x5a43e9) {
  const _0x3473ed = mp.players.atRemoteId(_0x413adb);
  if (mp.players.exists(_0x3473ed)) {
    _0x3473ed.typingInChat = _0x5a43e9;
    if (_0x3473ed.typingInChatTimer) {
      clearTimeout(_0x3473ed.typingInChatTimer);
      delete _0x3473ed.typingInChatTimer;
    }
    if (_0x5a43e9) {
      _0x3473ed.typingInChatTimer = setTimeout(() => {
        if (mp.players.exists(_0x3473ed)) {
          delete _0x3473ed.typingInChatTimer;
          _0x3473ed.typingInChat = false;
        }
      }, 60000);
    }
  }
});
mp.events.add("SendPrimeActivationMessage", function (_0x159e13, _0x1d0e1e, _0x47631d = 1) {
  if (mp.storage.data.vip_chat_disable) {
    return;
  }
  const _0x5878d5 = Math.min(Math.max(parseInt(_0x47631d, 10) || 1, 1), 5);
  const _0x1b2bfa = (_0x1d0e1e ? TranslateText("{0} активировала", _0x159e13) : TranslateText("{0} активировал", _0x159e13)) + (" VIP " + _0x5878d5);
  const _0x4a2b8a = language["о VIP статусе"][curr_lang];
  main_browser.execute("this.AppComponents.chatAPI.push('" + _0x1b2bfa + "','', 301, '" + _0x4a2b8a + "', false, " + _0x5878d5 + ")");
});