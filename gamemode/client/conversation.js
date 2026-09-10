function resolveTranslation(_0x713dd, _0x1a5437 = []) {
  if (typeof _0x713dd == "number" && !isNaN(_0x713dd)) {
    if (typeof NotificationMessages != "undefined" && _0x713dd >= 0 && _0x713dd < NotificationMessages.length) {
      let _0x212634 = language[NotificationMessages[_0x713dd]][curr_lang];
      _0x1a5437.forEach((_0x576a90, _0xab07d0) => {
        _0x212634 = _0x212634.replace(new RegExp("\\{" + _0xab07d0 + "\\}", "g"), _0x576a90);
      });
      return _0x212634;
    }
    return String(_0x713dd);
  }
  if (Array.isArray(_0x713dd) && _0x713dd.length > 0) {
    const _0x248075 = _0x713dd[0];
    if (typeof _0x248075 == "number" && !isNaN(_0x248075) && typeof NotificationMessages != "undefined" && _0x248075 >= 0 && _0x248075 < NotificationMessages.length) {
      let _0xc09518 = language[NotificationMessages[_0x248075]][curr_lang];
      _0x713dd.slice(1).forEach((_0x12dc12, _0x2b59f4) => {
        _0xc09518 = _0xc09518.replace(new RegExp("\\{" + _0x2b59f4 + "\\}", "g"), _0x12dc12);
      });
      return _0xc09518;
    }
    if (typeof _0x248075 == "string") {
      return TranslateText(_0x248075, ..._0x713dd.slice(1));
    }
  }
  if (typeof _0x713dd == "string") {
    return TranslateText(_0x713dd);
  } else {
    return _0x713dd;
  }
}
function ChattingNPC() {
  let _0x43264e;
  let _0x1de832;
  let _0x32aea5;
  let _0x30e7b4 = [];
  switch (dialogstate) {
    case 1:
      _0x43264e = language["Stegmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt. Möchten Sie einen Liegeplatz am Steg mieten?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte mein Boot hier anlegen"][curr_lang]);
      _0x30e7b4.push(language["Nein, ich muss weiter"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 2:
      _0x43264e = language["Stegmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo! Was wolltest du?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein privates Wasserfahrzeug unterbringen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Familien-Wasserfahrzeug unterbringen"][curr_lang]);
      _0x30e7b4.push(language["Nein, nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 3:
      _0x43264e = language["Flugplatzmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt. Möchten Sie einen Platz auf dem Flugplatz mieten?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte mein Fluggerät hier unterbringen"][curr_lang]);
      _0x30e7b4.push(language["Nein, ich muss weiter"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 4:
      _0x43264e = language["Flugplatzmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo! Was wolltest du?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Miete verlängern"][curr_lang]);
      _0x30e7b4.push(language["Bereiten Sie bitte mein Fluggerät für den Abflug vor"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte den Stellplatz am Flugplatz kündigen"][curr_lang]);
      _0x30e7b4.push(language["Nein, nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 148:
    case 147:
    case 5:
      _0x43264e = dialogstate == 148 ? language["Polizist"][curr_lang] : language["Polizistin"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte mich freiwillig stellen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte illegale Gegenstände abgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 218:
      _0x43264e = language["Armee-Mitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 219:
      _0x43264e = language["Polizist"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 149:
      _0x43264e = language.Geldtransporteur[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte als Geldtransporteur arbeiten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 190:
      _0x43264e = language.Lieferant[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte als Lieferant arbeiten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 191:
      _0x43264e = language["Tierheim"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, freitags, samstags und sonntags werden seltene Haustiere versteigert"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte den Namen des Haustiers ändern"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 150:
    case 5000:
      _0x43264e = language.Assistentin[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Motorroller mieten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6:
      _0x43264e = language["Krankenhausmitarbeiterin"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, was ist Ihr Anliegen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte mein Geschlecht ändern"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 104:
    case 7:
      _0x43264e = language["Verwahrplatz-Wächter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, was willst du?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Fahrzeug vom Verwahrplatz abholen"][curr_lang]);
      _0x30e7b4.push(language["Familien-Fahrzeug vom Verwahrplatz abholen"][curr_lang]);
      _0x30e7b4.push(language.Nichts[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 9:
      _0x43264e = language["Fabrikbesitzer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wir haben alle Waren für Ihr Unternehmen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich brauche Ware für mein Geschäft"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Ernte verkaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Milch verkaufen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 10:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt"][curr_lang] + "'}";
      _0x30e7b4.push(language["Bestellen Sie mehr Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie das Waffenlager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Wie viele Medikamente sind im Lager?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Ich möchte einen Hund mitnehmen"][curr_lang]);
      }
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 105:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie das Waffenlager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 106:
      _0x43264e = language["Busfahrer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du einen Bus mieten willst, kann ich dir dabei helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Bus mieten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 107:
      _0x43264e = language.Elektriker[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du ein Fahrzeug für Elektriker mieten willst, kann ich dir dabei helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Fahrzeug mieten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 146:
      _0x43264e = language.Feuerwehrmann[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du ein Feuerwehrfahrzeug mieten willst, kann ich dir dabei helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Feuerwehrfahrzeug mieten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 108:
      _0x43264e = language.Schamane[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Waldpilze hast, braue ich dir die beste Tinktur"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte eine Tinktur zubereiten"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 109:
      _0x43264e = language["Möbelverkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Geld oder Holzstämme hast, fertige ich dir jedes Möbelstück an<br>Übrigens, Holzstämme werden hier abgebaut"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Möbel für mein Haus kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein temporäres Moped erhalten"][curr_lang]);
      _0x30e7b4.push(language["Wer leitet das Sägewerk?"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 110:
      _0x43264e = language["Flugplatzmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn Sie ein Luftfahrzeug haben, helfe ich Ihnen, es unterzubringen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein privates Luftfahrzeug unterbringen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Familien-Luftfahrzeug unterbringen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte zur Insel gelangen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte die Pilotenarbeit beginnen"][curr_lang]);
      if (bChristmas2025) {
        _0x30e7b4.push(language["Ich möchte dem Weihnachtsmann beim Geschenkeliefern helfen"][curr_lang]);
      }
      _0x30e7b4.push(language["Kein Interesse, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 115:
      _0x43264e = language["Inselbewohner"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du zum Festland musst, kann ich das machen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte zurück in den Staat"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Quad mieten"][curr_lang]);
      _0x30e7b4.push(language["Nein, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 111:
      _0x43264e = language.Priester[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann dir bei der Heirat helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte mich scheiden lassen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 11:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Bestellen Sie mehr Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie das Waffenlager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Wie viele Medikamente sind im Lager?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Ich möchte einen Hund mitnehmen"][curr_lang]);
      }
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 12:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Bestellen Sie mehr Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie das Waffenlager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Wie viele Medikamente sind im Lager?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Ich möchte einen Hund mitnehmen"][curr_lang]);
      }
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 13:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Es ist mir eine Ehre!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Bestellen Sie mehr Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie das Waffenlager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Wie viele Medikamente sind im Lager?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Ich möchte einen Hund mitnehmen"][curr_lang]);
      }
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 14:
      _0x43264e = language.Krankenpfleger[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie das medizinische Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Masken ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Schutzweste ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 152:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Was ist los?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Gang-Raid starten"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 15:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Wobei helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 169:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Wobei helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Gang-Raid starten"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 16:
    case 18:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Was ist los?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 172:
    case 19:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, Bruder! Was ist los?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Gang-Raid starten"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 17:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, Bruder! Wobei helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Gang-Raid starten"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 182:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Brauchst du Hilfe?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Gang-Raid starten"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 183:
      _0x43264e = language.Taucher[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, brauchst du Hilfe mit dem Taucheranzug?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte den Taucheranzug anziehen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte den Taucheranzug ausziehen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte auf dem Tauchboot arbeiten"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 184:
      _0x43264e = language.Organisator[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, möchtest du bei Faustkämpfen mitmachen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Teilnehmer registrieren"][curr_lang]);
      _0x30e7b4.push(language["Bevorstehenden Kampf ankündigen"][curr_lang]);
      _0x30e7b4.push(language["Auf Kämpfer wetten"][curr_lang]);
      _0x30e7b4.push(language["Gewinn abholen"][curr_lang]);
      _0x30e7b4.push(language["Sieger verkünden"][curr_lang]);
      _0x30e7b4.push(language["Gewinn aus den Faustkämpfen einnehmen"][curr_lang]);
      _0x30e7b4.push(language["Familie Erlaubnis geben, Kämpfe auszutragen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 185:
      _0x43264e = language.Außerirdischer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du mehr über Halloween erfahren?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Über Halloween erfahren"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Ressourcen gegen Süßigkeiten tauschen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 192:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, Bruder! Brauchst du Hilfe?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas Bargeld in die Gemeinschaftskasse legen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Hol alle deine Waffen raus"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Drogenverstecke machen"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 193:
    case 163:
    case 164:
    case 165:
    case 166:
    case 167:
    case 168:
    case 102:
    case 22:
    case 21:
    case 20:
      _0x43264e = language["Waffenhändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wir haben eine riesige Waffenauswahl"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie mir, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Her mit den Knarren"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 178:
    case 177:
    case 176:
    case 175:
    case 174:
    case 171:
    case 170:
      _0x43264e = language.Verwalter[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, womit kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Wer ist der Besitzer dieser Ressourcen?"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 179:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, möchtest du schießen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Schießübungen machen"][curr_lang]);
      _0x30e7b4.push(language["Was ist der Rekord auf diesem Schießstand?"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 198:
    case 23:
      _0x43264e = language.Chirurg[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, möchten Sie eine Schönheitsoperation durchführen lassen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte etwas ändern"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 24:
      _0x43264e = language.Chefarzt[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, haben Sie Beschwerden?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich fühle mich miserabel"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Tabletten gegen Krankheiten kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Erste-Hilfe-Kästen kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Nein, ich fühle mich bestens"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 25:
      _0x43264e = language["Ehemaliger Autodieb"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Sprich gar nicht erst mit mir, wenn du keine Zigaretten hast"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich habe zufällig ein paar, hier nimm"][curr_lang]);
      _0x30e7b4.push(language["Alles klar, zieh Leine"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 26:
      _0x43264e = language["Ehemaliger Autodieb"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Beweise deine Loyalität, indem du dir ein Totenkopf-Tattoo über das ganze Gesicht stechen lässt, dann reden wir"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich werde darüber nachdenken"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 27:
      _0x43264e = language["Ehemaliger Autodieb"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Du bist ja ein Guter, frag alles, was du willst!<br>Ich kenne viele nützliche Infos und habe ein paar interessante Werkzeuge"][curr_lang] + "'}";
      _0x30e7b4.push(language["Erzähl mir, wie du Fahrzeuge geklaut hast"][curr_lang]);
      _0x30e7b4.push(language["Zeig mal, was für Werkzeuge du hast"][curr_lang]);
      _0x30e7b4.push(language["Nein danke, brauche gerade nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 28:
      _0x43264e = language.Autodieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Thomas hat mir nichts von dir erzählt, verschwinde"][curr_lang] + "'}";
      _0x30e7b4.push(language["Verstanden, Verzeihung"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 29:
      _0x43264e = language.Autodieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Heute ist ein toller Tag, um die Räder zu wechseln"][curr_lang] + "'}";
      _0x30e7b4.push(language["Was hast du für mich?"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte den Wagen wechseln"][curr_lang]);
      _0x30e7b4.push(language.Machs_gut[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 30:
      _0x43264e = language.Autodieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, heute ist tolles Wetter"][curr_lang] + "'}";
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 31:
      _0x43264e = language.Taschendieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Taschendieb werden willst, lass dir eine Backsteinmauer auf die linke Handfläche tätowieren<br>Das symbolisiert deine baldige Rückkehr hierher, falls du dich doch dafür entscheidest"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich werde darüber nachdenken"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 32:
      _0x43264e = language.Taschendieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich sehe, du meinst es ernst<br>Merk dir ein paar einfache Regeln:<br>Wähle die ungefährlichsten Opfer<br>Kauf eine Maske von Gangmitgliedern<br>Wenn du die Tat beginnst und das Opfer sich auch nur ein Stück entfernt, kannst du es vergessen<br>Und das Wichtigste: Selbst wenn das Opfer sich nicht bewegt und nichts ahnt, ist das Fehlschlagrisiko hoch, aber mit Erfahrung wird das Rauben einfacher<br>Viel Erfolg bei dieser schweren Arbeit"][curr_lang] + "'}";
      _0x30e7b4.push(language["Danke, ich hoffe, wir sehen uns nicht wieder"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 33:
      _0x43264e = language["Lizenzstellen-Mitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Führerschein erhalten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Fluglizenz erhalten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Bootsführerschein erhalten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein temporäres Moped erhalten"][curr_lang]);
      _0x30e7b4.push(language["Guten Tag, nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 3) {
        setTimeout(() => {
          const _0x36cd4e = language["Wählen Sie die Führerscheinkategorie für Landfahrzeuge"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x36cd4e,
            infoPosition: ["left"]
          }]);
        }, 500);
      }
      break;
    case 113:
      _0x43264e = language["Schwarzmarktbesitzer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Sei gegrüßt!<br>Möchtest du ein paar Knarren verkaufen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Verkaufsstand mieten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte die Miete des Standes verlängern"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte die Miete des Standes beenden"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte meine Sachen aus dem Stand abholen"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie, was sich in Ihren Ständen befindet"][curr_lang]);
      _0x30e7b4.push(language["Erzählen Sie über Hauseinbrüche"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Knarren verkaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich brauche nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 34:
      _0x43264e = language["Marktplatzbesitzer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Sei gegrüßt!<br>Wie kann ich behilflich sein?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Verkaufsstand mieten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte die Miete des Standes verlängern"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte die Miete des Standes beenden"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte meine Sachen aus dem Stand abholen"][curr_lang]);
      _0x30e7b4.push(language["Ich brauche nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 35:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich sehe dich zum ersten Mal, zieh ab hier"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ich_gehe[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 36:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wie kann ich helfen, Boss?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig, was mit den Gebieten verdient wurde"][curr_lang]);
      _0x30e7b4.push(language["Gib den Gewinn für Graffiti her"][curr_lang]);
      _0x30e7b4.push(language["Nichts, arbeite weiter"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 37:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Boss, in der Gegend ist alles in Ordnung"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig den Gewinn aus den Gebieten"][curr_lang]);
      _0x30e7b4.push(language["Gib den Gewinn für Graffiti her"][curr_lang]);
      _0x30e7b4.push(language["Super, mach weiter so"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 38:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Alles unter Kontrolle, Sie brauchen sich keine Sorgen zu machen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Wie viel hast du aus den Gebieten eingenommen?"][curr_lang]);
      _0x30e7b4.push(language["Gib den Gewinn für Graffiti her"][curr_lang]);
      _0x30e7b4.push(language["Gut, achte auf die Qualität"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 39:
      _0x43264e = language["Waffenhändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Waffenteile hast, bauen meine Jungs alles in wenigen Minuten zusammen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig, was ich zusammenbauen kann"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte den Gewinn aus der Gießerei abholen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Waffe reparieren oder Seriennummer entfernen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 40:
      _0x43264e = language.Maklerin[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag!<br>Wir haben die besten Häuser zu den niedrigsten Preisen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 41:
      _0x43264e = language["Regierungsmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Bestellen Sie Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Zeigen Sie das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Munition ins Lager zurückgeben"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte gebrauchte Ausrüstung entsorgen"][curr_lang]);
      _0x30e7b4.push(language["Wie viele Medikamente sind im Lager?"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 196:
    case 186:
    case 187:
    case 188:
    case 180:
    case 42:
    case 43:
      _0x43264e = language.Tätowierer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Was machen wir?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Tattoo stechen lassen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Tattoo entfernen lassen"][curr_lang]);
      _0x30e7b4.push(language["Nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 189:
      _0x43264e = language.Waffenschmied[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, möchtest du schießen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Schießübungen machen"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 181:
      _0x43264e = language.Fotograf[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Foto ausdrucken"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Passfoto/Ausweisfoto machen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 44:
      _0x43264e = language.Verkäuferin[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, bei uns gibt es den exklusivsten Schmuck"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 45:
    case 90:
    case 91:
      _0x43264e = language["Fachverkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Kann ich behilflich sein? Wir haben heute frische Ware bekommen<br>Jeden Tag erhält unser Geschäft einzigartige Kleidungskollektionen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 195:
    case 158:
    case 159:
    case 160:
    case 161:
    case 162:
    case 145:
    case 139:
    case 203:
    case 204:
    case 92:
    case 46:
    case 77:
      _0x43264e = language["Fachverkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wie kann ich helfen? Jeden Tag werden in unserem Geschäft die Kleidungskollektionen aktualisiert"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 100:
      _0x43264e = language["Fachverkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["In unserem Geschäft finden Sie exklusive Waren in limitierter Stückzahl!<br>Das Sortiment wird jeden Sonntag um 21:10 Uhr aufgefüllt"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was Sie haben"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 101:
      _0x43264e = language.Bauträger[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn Sie Fragen zu Bauarbeiten haben, können Sie sich an mich wenden"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte mein Bauunternehmen registrieren"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Änderungen an meinem Bauunternehmen vornehmen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte das Bauunternehmen verlassen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ein Baugrundstück kaufen"][curr_lang]);
      _0x30e7b4.push(language["Nichts interessiert mich"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 80:
    case 79:
    case 78:
      _0x43264e = language["Juwelenaufkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Die Preise für Erz und Mineralien ändern sich stündlich, bei jedem Aufkäufer sind sie unterschiedlich!<br>Und wer am Tag mehr als 3 Stunden gespielt hat, erhält einen Zuschlag von 20%"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Blick auf die Preise werfen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte etwas von dir kaufen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 5) {
        setTimeout(() => {
          const _0x336a4f = language["Schauen Sie sich die Ressourcenpreise an"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x336a4f,
            infoPosition: ["left"]
          }]);
        }, 500);
      }
      break;
    case 47:
      _0x43264e = language["Ehemaliger Autodieb"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wer hat dich geschickt? Ich sehe doch, dass du nicht zu uns gehörst"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ich_gehe[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 87:
      _0x43264e = language["Ehemaliger Autodieb"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Autodiebstahl ist vorübergehend ausgesetzt"][curr_lang] + "'}";
      _0x30e7b4.push(language.Verstanden[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 48:
      _0x43264e = language.Taschendieb[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hey-hey, ist das eine Kontrolle? Ich habe nichts"][curr_lang] + "'}";
      _0x30e7b4.push(language.Viel_Erfolg[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 49:
      _0x43264e = language.Bankier[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, bei uns können Sie alle Transaktionen gebührenfrei durchführen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Bankgeschäfte tätigen"][curr_lang]);
      _0x30e7b4.push(language["Ich brauche nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 50:
      _0x43264e = language["Postmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wir liefern Pakete schneller als alle anderen im Staat"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Paket versenden oder abholen"][curr_lang]);
      _0x30e7b4.push(language["Brauche nichts"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 2) {
        setTimeout(() => {
          const _0x130d7c = language["Öffnen Sie das Postmenü und holen Sie Ihr Paket ab"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x130d7c,
            infoPosition: ["top"]
          }]);
        }, 500);
      }
      break;
    case 52:
      _0x43264e = language["Casino-Mitarbeiterin"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, der Einlass in das Elite-Penthouse und Restaurant ist von 20:00 bis 04:00 Uhr möglich"][curr_lang] + "'}";
      _0x30e7b4.push(language["Guten Tag, ich möchte ins Penthouse"][curr_lang]);
      _0x30e7b4.push(language["Guten Tag, ich möchte in die Apartments"][curr_lang]);
      _0x30e7b4.push(language["Guten Tag, ich möchte ins Terrassenrestaurant"][curr_lang]);
      _0x30e7b4.push(language["Guten Tag, wer ist der Casinobesitzer?"][curr_lang]);
      _0x30e7b4.push(language["Danke, auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 53:
      _0x43264e = language["Penthouse-Mitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Penthouse-Einrichtung ändern"][curr_lang]);
      _0x30e7b4.push(language.Mit_nichts[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 54:
      _0x43264e = language["Verlorener Junge"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Was willst du?<br>Siehst du nicht, dass du uns störst?"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ich_gehe[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 55:
      _0x43264e = language["Verlorener Junge"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Was willst du?<br>Siehst du nicht, dass du uns störst?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Deine Oma sucht nach dir"][curr_lang]);
      _0x30e7b4.push(language.Ich_gehe[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 197:
    case 116:
    case 103:
    case 57:
    case 56:
      _0x43264e = language.Barmann[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchten Sie etwas trinken?<br>Wir haben hervorragende Drinks!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie die Bar"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 153:
    case 133:
    case 132:
    case 131:
    case 130:
    case 129:
    case 128:
    case 127:
    case 126:
    case 125:
    case 124:
    case 123:
    case 122:
    case 121:
    case 120:
    case 119:
    case 118:
    case 117:
      _0x43264e = language.Parkplatzwächter[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt! Ich kann mit einem Parkplatz helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen Blick auf die Parkplätze werfen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 134:
      _0x43264e = language.Assistentin[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt! Ich kann dir mit einem Fahrzeug helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein temporäres Moped erhalten"][curr_lang]);
      _0x30e7b4.push(language["Danke, brauche ich nicht"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 63:
    case 62:
    case 59:
    case 58:
      _0x43264e = language["Fahrzeughändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wir haben Fahrzeuge für jeden Geschmack!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was heute zum Verkauf steht"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 60:
      _0x43264e = language["Motorrad- und Fahrradhändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, das Sortiment unseres Motorradsalons wird jeden Tag um 20:10 Uhr aktualisiert!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was heute zum Verkauf steht"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 61:
      _0x43264e = language["Bootsverkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, das Bootssortiment wird jeden Tag um 20:10 Uhr aktualisiert, schauen Sie öfter vorbei!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was heute zum Verkauf steht"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 64:
      _0x43264e = language["Fahrzeughändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, ich sehe, du bist nicht reich, da du zu mir gekommen bist<br>Na gut, schau dich um, aber denk daran: Jeden Tag um 20:10 Uhr erhalte ich neue Fahrzeuge"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig, was du hast"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 65:
      _0x43264e = language["Luftfahrzeughändler"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, bei uns sind die besten Fluggeräte versammelt und jeden Tag um 20:10 Uhr treffen neue ein!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeigen Sie, was heute zum Verkauf steht"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 74:
      _0x43264e = language.Grafikfälscher[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Geld hast, besorge ich dir eine neue Identität, darin bin ich Meister<br>Und niemand wird von deiner kriminellen Vergangenheit erfahren"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte meine Identität ändern"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 97:
      _0x43264e = language["Regierungsmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, womit kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte meinen Namen ändern"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Gelder auf das Organisationskonto überweisen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Gebäudeversicherung kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Lizenz zur Familiengründung kaufen"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 98:
      _0x43264e = language.Modedesigner[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo! Wir haben eine Aktion: Wenn du innerhalb einer Woche 80 Spielstunden hast, schenke ich dir einen einzigartigen Preis!<br>Außerdem kann ich individuelle Gegenstände auf Bestellung anfertigen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte den Preis abholen"][curr_lang]);
      _0x30e7b4.push(language["Danke, gut zu wissen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 99:
    case 112:
      _0x43264e = language["Event-Organisator"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo! Ich kann jedes Event organisieren, wähle einfach eines aus"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte zum Schießstand"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 75:
      _0x43264e = language["Passionierter Trader"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du Geld und Köpfchen hast, verhilft dir die Aktienbörse zum Millionär"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte an der Börse handeln"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte mehr über Büros erfahren"][curr_lang]);
      _0x30e7b4.push(language["Das interessiert mich nicht"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 76:
      _0x43264e = language["SAHP-Mitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann Nummernschilder montieren und eine Versicherung für Ihr Fahrzeug verkaufen, aber es wird etwas teurer als bei anderen Mitarbeitern"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Nummernschilder anbringen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Versicherung kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte eine Versicherung für ein Familien-Fahrzeug kaufen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 200:
      _0x43264e = language["Plantageleiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt. Ich kann dir bei der Verwaltung der Plantage helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ernte einholen"][curr_lang]);
      _0x30e7b4.push(language["Säfte abholen"][curr_lang]);
      _0x30e7b4.push(language["Wem gehört die Plantage?"][curr_lang]);
      _0x30e7b4.push(language["Ich gehe spazieren"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 201:
      _0x43264e = language["Automarkt-Manager"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Seid gegrüßt. Ich kann dir beim Kauf von Gebrauchtwagen helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Sortiment ansehen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 202:
      _0x43264e = language.Bruder[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, Bruder! Wobei helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Zeig das Lager"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte ins Eroberungsgebiet"][curr_lang]);
      _0x30e7b4.push(language["Alles in Ordnung, bis bald"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 199:
      _0x43264e = language.Hexe[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann dir Süßigkeiten geben oder dich verfluchen, wagst du es?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte mein Glück versuchen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte nichts riskieren"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 194:
    case 157:
    case 156:
    case 155:
    case 154:
    case 144:
    case 143:
    case 142:
    case 141:
    case 138:
    case 137:
    case 136:
    case 93:
    case 73:
    case 72:
    case 71:
    case 70:
    case 69:
    case 68:
    case 67:
    case 66:
      _0x43264e = language.Verkäufer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, bei uns finden Sie alles, was Sie brauchen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Waren zeigen"][curr_lang]);
      _0x30e7b4.push(language["Geld aus der Kasse hergeben"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 94:
      _0x43264e = language["Medienmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, was möchten Sie?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte das Medienkonto aufladen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Beamte hierher rufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte das Lager ansehen"][curr_lang]);
      _0x30e7b4.push(language["Bestellen Sie Munition ins Lager"][curr_lang]);
      _0x30e7b4.push(language["Nichts, alles Gute"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 95:
      _0x43264e = language.Zwischenhändler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann jedes Nummernschild für dich besorgen, natürlich nicht umsonst"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Nummernschild kaufen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 96:
      _0x43264e = language["Casino-Mitarbeiterin"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte Jetons gegen Bargeld kaufen"][curr_lang]);
      _0x30e7b4.push(language["Ja, ich möchte Jetons verkaufen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Bankgeschäfte tätigen"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 81:
      _0x43264e = language["Maskenbildner"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn nötig, schminke ich dich so, dass dich niemand wiedererkennt"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Make-up auftragen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte das vorherige Make-up auftragen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 82:
      _0x43264e = language["Maskenbildner"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich sehe Make-up an dir, möchtest du es entfernen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte das Make-up entfernen"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 83:
      _0x43264e = language.Informant[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, Banditen wollen Informationen über die morgige Route. Lassen Sie sie nicht an mich herankommen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Wir tun alles Mögliche!"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 84:
      _0x43264e = language.Informant[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Nicht schießen, ich gebe alle Informationen weiter, die ich habe. Nur nicht schießen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Her mit der Route"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 85:
      _0x43264e = language.Informant[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Bist du verrückt? Hier wimmelt es von Polizei, ich gebe dir die Route nicht."][curr_lang] + "'}";
      _0x30e7b4.push(language.Weggehen[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 86:
      _0x43264e = language.Informant[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich sehe, du bist kein Polizist. Verschwinde hier, solange du noch kannst"][curr_lang] + "'}";
      _0x30e7b4.push(language.Weggehen[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 89:
      _0x43264e = language["Flugplatzmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich vermiete Flugzeuge zur Felddüngung. Wenn deine Familie Plantagen hat, helfe ich beim Düngen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Flugzeug zur Plantagendüngung mieten"][curr_lang]);
      _0x30e7b4.push(language["Danke, kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 135:
      _0x43264e = language.Fernfahrer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du einen LKW mieten willst, kann ich dir dabei helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte einen LKW mieten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen einzigartigen LKW mieten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1515:
    case 1514:
    case 1513:
    case 1512:
    case 1511:
    case 1510:
    case 1509:
    case 1508:
    case 1507:
    case 1506:
    case 1505:
    case 1504:
    case 1503:
    case 1502:
    case 1501:
      _0x43264e = language.Bauer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, brauchst du Hilfe?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, wie läuft es auf der Plantage?"][curr_lang]);
      _0x30e7b4.push(language["Nein, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1523:
    case 1522:
    case 1521:
    case 1520:
    case 1519:
    case 1518:
    case 1517:
    case 1516:
      _0x43264e = language.Bauer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, womit kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte wissen, wie es im Kuhstall läuft"][curr_lang]);
      _0x30e7b4.push(language["Mit nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1000:
      const _0xd401c7 = at_quest_char - 1;
      _0x43264e = Quests[_0xd401c7].Pers_Name;
      _0x1de832 = "{\"type\": 0, \"text\": '" + Quests[_0xd401c7].Discription + "'}";
      _0x30e7b4.push(Quests[_0xd401c7].Button_1);
      _0x30e7b4.push(Quests[_0xd401c7].Button_2);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 2000:
      _0x43264e = language.Unbekannte[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo!<br>Ich wurde geschickt, um dich nach dem Flug abzuholen. Die Familie wartet schon sehnsüchtig."][curr_lang] + "'}";
      _0x30e7b4.push(language["Hallo, ich möchte mich mit der Familie wiedervereinigen"][curr_lang]);
      _0x30e7b4.push(language["Hallo, ich möchte die Story-Questreihe fortsetzen"][curr_lang]);
      _0x30e7b4.push(language["Hallo, wer ist der Hotelbesitzer?"][curr_lang]);
      _0x30e7b4.push(language["Hallo, ich möchte mit der Hotelreinigung beginnen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte das Geschenk abholen"][curr_lang]);
      _0x30e7b4.push(language["Nein, ich brauche keine Hilfe"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 555:
    case 556:
      _0x43264e = "1xBet-Mitarbeiter";
      _0x1de832 = "{\"type\": 0, \"text\": 'Guten Tag, wie kann ich Ihnen helfen?'}";
      _0x30e7b4.push("Wetten öffnen");
      _0x30e7b4.push(language["Nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 205:
      _0x43264e = language.Dozent[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich schlage vor, dass wir in die Kriegszeit reisen, möchtest du das?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Für das Match registrieren"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 206:
      _0x43264e = language.Direktor[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Das Schuljahr ist eine anstrengende Zeit. Wie kann ich Ihnen helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Shop öffnen"][curr_lang]);
      _0x30e7b4.push(language["Statistiken ansehen"][curr_lang]);
      _0x30e7b4.push(language["Wo ist der Geschichtslehrer?"][curr_lang]);
      _0x30e7b4.push(language["Wo ist der Geologielehrer?"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 207:
    case 208:
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
      _0x43264e = language.Dozent[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, bist du bereit für den Unterrichtsbeginn?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, Unterricht beginnen"][curr_lang]);
      _0x30e7b4.push(language["Nein, noch nicht bereit"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 216:
      _0x43264e = language["Lagerraum-Verkäufer"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte ein Lagerhaus kaufen"][curr_lang]);
      _0x30e7b4.push(language["Wie bezahle ich mein Lagerhaus?"][curr_lang]);
      _0x30e7b4.push(language["Ich brauche nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 217:
      _0x43264e = language["Verkäufer vergessener Lagerhäuser"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Auktion vergessener Lagerhäuser ansehen"][curr_lang]);
      _0x30e7b4.push(language["Ich brauche nichts, danke"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 209:
      _0x43264e = language.Dozent[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["An diesem Strand gibt es sehr viele Dublonen, die Punkte bringen. Du kannst dein Glück mit einer Schaufel versuchen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Schaufel kaufen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5001:
      _0x43264e = language.Außerirdischer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Unverständliche Geräusche"][curr_lang] + "'}";
      _0x30e7b4.push(language["Gib deine Süßigkeiten her"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5002:
      _0x43264e = language["RP-Ticket-Fabrik"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Guten Tag, wie kann ich helfen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["RP-Tickets abholen"][curr_lang]);
      _0x30e7b4.push(language.Angreifen[curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5003:
      _0x43264e = language["Weihnachtsmann"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ho ho ho! Der Weihnachtsmann grüßt dich"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Story-Questreihe annehmen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Weihnachtsberuf erlernen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5004:
      _0x43264e = language.Holzfäller[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann bei der Schlüsselherstellung helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Schlüsselherstellung starten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Schlüssel abholen"][curr_lang]);
      _0x30e7b4.push(language["Was muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5005:
      _0x43264e = language.Bergmann[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann bei der Schlüsselherstellung helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Schlüsselherstellung starten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Schlüssel abholen"][curr_lang]);
      _0x30e7b4.push(language["Was muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5006:
      _0x43264e = language.Angler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann bei der Schlüsselherstellung helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Schlüsselherstellung starten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Schlüssel abholen"][curr_lang]);
      _0x30e7b4.push(language["Was muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5007:
      _0x43264e = language.Bauer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann bei der Schlüsselherstellung helfen"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Schlüsselherstellung starten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Schlüssel abholen"][curr_lang]);
      _0x30e7b4.push(language["Was muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5008:
      _0x43264e = language["Böser Weihnachtsmann"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Du hast mich gefunden. Ich habe keine Schlüssel"][curr_lang] + "'}";
      _0x30e7b4.push(language["Gib die Weihnachtsschlüssel zurück"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5009:
      _0x43264e = language["Weihnachtsbaum"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich bringe den Geist der Weihnacht"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte eine Quest annehmen"][curr_lang]);
      _0x30e7b4.push(language["Ich kann dich reparieren"][curr_lang]);
      _0x30e7b4.push(language["Was muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5010:
      _0x43264e = language.Minion[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich werde Schlüssel verschenken, wenn man sich um mich kümmert"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte eine Quest annehmen"][curr_lang]);
      _0x30e7b4.push(language["Gib mir Schlüssel"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5011:
      _0x43264e = language["Weihnachtsrentier"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Füttere mich"][curr_lang] + "'}";
      _0x30e7b4.push(language.Füttern[curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5012:
    case 5013:
      _0x43264e = language["Tierhandlung"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Alles für dein Haustier!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Waren zeigen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5014:
      _0x43264e = language["Karawanenverwalter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wohin möchtest du die Karawane liefern?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Karawane auswählen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      mp.events.call("Client_ResetGPS");
      break;
    case 5015:
      _0x43264e = language.Pirat[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du meine Goldmünzen haben?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Gib die Goldmünzen her"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5016:
      _0x43264e = language.Tänzer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Tanzen wir?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte tanzen"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5017:
      _0x43264e = language["Schrottplatzmitarbeiter"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hallo. Interessiert an der Verwertung von Fahrzeugen zu Altmetall?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, ich möchte ein Fahrzeug verwerten"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5018:
      _0x43264e = language["Weihnachtsmann"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich brauche dringend Ressourcen, ich werde dich reich belohnen, wenn du sie mir bringst"][curr_lang] + "'}";
      _0x30e7b4.push(language["Welche Ressourcen muss ich mitbringen?"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte dir Ressourcen übergeben"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5019:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wie kann ich helfen, Boss?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Du arbeitest ab jetzt für uns"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5020:
      _0x43264e = language["Chefkoch"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Helfen Sie mir, eine Torte zuzubereiten?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ja, natürlich!"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5021:
      _0x43264e = language.Hehler[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": 'Ich kann Edelsteine von deinen Sachen entfernen. Aber ziehe sie zuerst an, damit ich sicherstellen kann, dass Steine eingesetzt sind'}";
      _0x30e7b4.push("Ich möchte Edelsteine von angelegten Sachen entfernen");
      _0x30e7b4.push("Ich möchte Edelsteine gegen einen anderen Preis tauschen");
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5022:
      _0x43264e = language["Statuetten-Reinigung"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du Statuetten reinigen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Statuetten reinigen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5023:
      _0x43264e = language["Hochzeitszubehör"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Miete für 1 Stunde"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte eine Limousine mieten"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte einen Smoking oder ein Brautkleid mieten"][curr_lang]);
      if (bFebruary2026) {
        _0x30e7b4.push(language["Ich möchte eine Valentinskarte abholen"][curr_lang]);
      }
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5024:
      _0x43264e = language["Emre Bozkurt Gedenk-T-Shirt"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du das Gedenken ehren?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte das Gedenken ehren"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6000:
      _0x43264e = language.Leiter[curr_lang];
      if (global.jail_time_in_jail > 0) {
        if (global.workAtPrisonJob) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du die Arbeit beenden?"][curr_lang] + "'}";
          _0x30e7b4.push(language["Ja, ich möchte die Arbeit beenden"][curr_lang]);
          _0x30e7b4.push(language["Nein, ich möchte weiterarbeiten"][curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du deine Haftstrafe verkürzen?<br/>Gehe zu einer der Arbeiten, für jede erledigte Aufgabe wird deine Strafe reduziert."][curr_lang] + "'}";
          _0x30e7b4.push(language["Duschen reinigen"][curr_lang]);
          _0x30e7b4.push(language["Kleidung bügeln"][curr_lang]);
          _0x30e7b4.push(language["Essen zubereiten"][curr_lang]);
          _0x30e7b4.push(language["Kisten tragen"][curr_lang]);
          _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
        }
      } else if ([3, 4, 12].includes(parseInt(localplayer.getVariable("Member")))) {
        if (global.isPrisonWarden) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du den Wärterdienst beenden?"][curr_lang] + "'}";
          _0x30e7b4.push(language.Ja[curr_lang]);
          _0x30e7b4.push(language.Nein[curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du als Wärter anfangen?<br/>Schicke Häftlinge zu mir, wir finden Arbeit für sie (Duschen reinigen, Kleidung bügeln, Essen zubereiten).<br/>Für jede erledigte Aufgabe wird Geld in die Gemeinschaftskasse eingezahlt, das stündlich gleichmäßig unter den Wärtern aufgeteilt wird."][curr_lang] + "'}";
          _0x30e7b4.push(language["Ja, ich möchte anfangen"][curr_lang]);
          _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
        }
      } else {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich bin der Gefängnisleiter. Wenn du Fragen hast – melde dich."][curr_lang] + "'}";
        _0x30e7b4.push(language.Verstanden[curr_lang]);
      }
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6001:
    case 6002:
    case 6003:
    case 6004:
    case 6005:
    case 6006:
    case 6007:
    case 6008:
    case 6009:
    case 6010:
    case 6011:
    case 6012:
    case 6013:
    case 6014:
    case 6015:
    case 6016:
    case 6017:
    case 6018:
    case 6019:
      {
        const _0xc8ccba = dialogstate - 6000;
        const _0x4a1ed8 = FACTIONS_GARAGES_NPC_IDS[_0xc8ccba];
        if (!_0x4a1ed8) {
          return;
        }
        _0x43264e = language["Fahrzeugruf"][curr_lang];
        if (Array.isArray(_0x4a1ed8) && _0x4a1ed8.includes(localplayer.getVariable("Member")) || localplayer.getVariable("Member") === _0x4a1ed8) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Sie können das für Ihren Rang verfügbare Fraktionsfahrzeug rufen. Um das Fahrzeug zu tunen, nutzen Sie das G-Menü"][curr_lang] + "'}";
          _0x30e7b4.push(language["Fahrzeug rufen"][curr_lang]);
          if (!global.FACTIONS_GANG_IDS.includes(localplayer.getVariable("Member"))) {
            _0x30e7b4.push(language["Zufälliges Kennzeichen"][curr_lang]);
          }
          _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ich kann dir bei nichts helfen"][curr_lang] + "'}";
          _0x30e7b4.push(language.Verstanden[curr_lang]);
        }
        _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
        main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
        break;
      }
    case 6020:
      _0x43264e = language["Schlittschuhverleih"][curr_lang];
      if (localplayer.getVariable("onRollers")) {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["Schon genug gefahren? Wenn du wieder möchtest, kannst du jederzeit Schlittschuhe bei mir holen"][curr_lang] + "'}";
        _0x30e7b4.push(language["Schlittschuhe abgeben"][curr_lang]);
        _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      } else {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["Bei mir kannst du Schlittschuhe für die Eisbahn ausleihen. Wenn du fertig gefahren bist, bring sie mir zurück."][curr_lang] + "'}";
        _0x30e7b4.push(language["Schlittschuhe ausleihen"][curr_lang]);
        _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      }
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      return;
    case 6021:
      _0x43264e = language.Fernfahrer[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Wenn du die Neujahrsaufgabe starten möchtest, kann ich dir dabei helfen!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte die Neujahrsaufgabe annehmen!"][curr_lang]);
      _0x30e7b4.push(language["Auf Wiedersehen"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6023:
      _0x43264e = language["Wechselstube"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Möchtest du Grand Coins oder Krypto in Geld umtauschen?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ich möchte Grand Coins in Geld umtauschen"][curr_lang]);
      _0x30e7b4.push(language["Ich möchte Krypto in Geld umtauschen"][curr_lang]);
      _0x30e7b4.push(language["Kein Interesse"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
  }
}
global.dialogstate = 0;
global.InNpcDialog = false;
mp.events.add("StartConversation", _0x56d6e4 => {
  Start_Conversation_Func(_0x56d6e4);
});
global.Start_Conversation_Func = function (_0x252458) {
  if (GlobalCheck() == 1) {
    return mp.game.cam.renderScriptCams(false, true, 2000, true, false);
  }
  localplayer.freezePosition(true);
  dialogstate = _0x252458;
  if (_0x252458 == 2000 && curr_lang == "ru") {
    StartCustomSound("newbie_intro_conv", "sounds/newbie_conv/grand_1.ogg", 0.2);
  }
  if (_0x252458 == 2) {
    mp.events.callRemote("Server_TalkToShipMen");
  }
  InNpcDialog = true;
  mp.events.call("Disablechat");
  mp.gui.cursor.show(true, true);
  ChattingNPC();
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
};
mp.events.add("ChangeConversation", _0x12b2f8 => {
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.show = false;");
    dialogstate = _0x12b2f8;
    ChattingNPC();
  }
});
global.EndConversationFinally = function (_0x3c36ce = false) {
  if (InNpcDialog != 0) {
    main_browser.execute("APPS.state.npc_dialog.show = false;");
    InNpcDialog = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    if (_0x3c36ce) {
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
    } else {
      mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    }
    if (dialogstate == 2000) {
      StopCustomSound("newbie_intro_conv");
    }
    dialogstate = 0;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
  }
};
mp.events.add("EndConversation", (_0x452110 = false) => {
  if (InNpcDialog != 0) {
    EndConversationFinally(_0x452110);
  }
});
mp.events.add("ConversationSendBasicAnswer", _0xdc285e => {
  _0xdc285e = resolveTranslation(_0xdc285e);
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: " + JSON.stringify(_0xdc285e) + "});");
  } else {
    mp.game.ui.notifications.show(_0xdc285e, false, 0, 6);
  }
});
mp.events.add("ConversationSendBasicTalk", (_0x1b0e58, _0x4cc69e = "", ..._0x2b2208) => {
  _0x1b0e58 = resolveTranslation(_0x1b0e58, _0x2b2208);
  _0x4cc69e = resolveTranslation(_0x4cc69e, _0x2b2208);
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 1, text: \"" + _0x1b0e58 + "\"});");
    if (_0x4cc69e.length > 0) {
      main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: \"" + _0x4cc69e + "\"});");
    }
  } else {
    mp.game.ui.notifications.show(_0x4cc69e, false, 0, 6);
  }
});
mp.events.add("Client_ConversationSendBasicTalkInt", (_0x4ed10f, _0x5e0a5e = "", ..._0x4b4d54) => {
  if (InNpcDialog) {
    _0x4ed10f = +_0x4ed10f;
    if (!isNaN(_0x4ed10f)) {
      if (_0x4ed10f + 1 > NotificationMessages.length) {
        return;
      }
      _0x4ed10f = language[NotificationMessages[_0x4ed10f]][curr_lang];
      if (_0x4b4d54.length > 0) {
        _0x4b4d54.forEach((_0x20e0ca, _0x4b37c0) => {
          const _0x6dca48 = new RegExp("\\{" + _0x4b37c0 + "\\}", "g");
          if (_0x4ed10f.includes("{" + _0x4b37c0 + "}")) {
            _0x4ed10f = _0x4ed10f.replace(_0x6dca48, _0x20e0ca);
          }
        });
      }
    }
    _0x5e0a5e = +_0x5e0a5e;
    if (!isNaN(_0x5e0a5e)) {
      if (_0x5e0a5e + 1 > NotificationMessages.length) {
        return;
      }
      _0x5e0a5e = language[NotificationMessages[_0x5e0a5e]][curr_lang];
      if (_0x4b4d54.length > 0) {
        _0x4b4d54.forEach((_0xb59b58, _0x3207b4) => {
          const _0x11e73d = new RegExp("\\{" + _0x3207b4 + "\\}", "g");
          if (_0x5e0a5e.includes("{" + _0x3207b4 + "}")) {
            _0x5e0a5e = _0x5e0a5e.replace(_0x11e73d, _0xb59b58);
          }
        });
      }
    }
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 1, text: \"" + _0x4ed10f + "\"});");
    if (_0x5e0a5e.length > 0) {
      main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: \"" + _0x5e0a5e + "\"});");
    }
  } else {
    mp.game.ui.notifications.show(_0x5e0a5e, false, 0, 6);
  }
});
mp.events.add("ConversationSendAnswer", _0x1eaca9 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    switch (dialogstate) {
      case 1:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("ServerShipBought");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 2:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShipSpawn", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("ServerShipSpawn", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 3:
        if (_0x1eaca9 == 1) {
          mp.events.call("EndConversation");
          mp.events.callRemote("ServerFlyBought");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 4:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerFlyArend");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("ServerFlySpawn");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("ServerFlyCancelArend");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 1);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 147:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 148:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 218:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CallPoliceHere", 6);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 219:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CallPoliceHere", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 149:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_GetCashCollectorJob");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 190:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_MailDeliveryJobGet");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 191:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_ChangeDogName");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 150:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("HospitalChangeSex");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 104:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("RoadPoliceGetVehicle", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("RoadPoliceGetFamilyVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 7:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("RoadPoliceGetVehicle", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("RoadPoliceGetFamilyVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 8:
        SelectCorrectVehicleFromParking(_0x1eaca9);
        break;
      case 9:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("BusinessBuyProducts");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_AgrarSell");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CowMilkSell");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 10:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 1);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 1);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 1);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 3);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 105:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouseFromJail");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("GetBackGunsWarehouse", 9);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GunUtilization", 9);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 106:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendBusWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 135:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendTruckerWork");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_ArendUniqueTruckerWork");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 107:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ElectroVehicleWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 108:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CreateMushroomsSoup");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 109:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_EnterBuyFurniture");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetNewbieScooter", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 178:
      case 177:
      case 176:
      case 175:
      case 174:
      case 171:
      case 170:
        if (_0x1eaca9 == 1) {
          if (dialogstate == 170 || dialogstate == 171 || dialogstate == 174 || dialogstate == 175 || dialogstate == 176 || dialogstate == 177 || dialogstate == 178) {
            mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
          }
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 189:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_PracticeShooting", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 179:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_PracticeShooting");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetShootingRecord");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 110:
        if (bChristmas2025) {
          if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_SpawnFlyVehicle", 1);
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_SpawnFlyVehicle", 2);
          } else if (_0x1eaca9 == 3) {
            mp.events.callRemote("Server_TeleportIsland");
          } else if (_0x1eaca9 == 4) {
            mp.events.callRemote("Server_StartPilotWork");
          } else if (_0x1eaca9 == 5) {
            mp.events.callRemote("Server_RequestSantaVehicle");
          } else if (_0x1eaca9 == 6) {
            EndConversationFinally();
          }
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SpawnFlyVehicle", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_SpawnFlyVehicle", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_TeleportIsland");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_StartPilotWork");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 111:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Divorce");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 11:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 2);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 2);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 2);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 4);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 12:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 3);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 3);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 3);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 12);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 13:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 4);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 4);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 4);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 2);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 14:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 5);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetBackHospitalMask", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetBackHospitalMask", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 152:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 7);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 7);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 15:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 7);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 169:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 8);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 8);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 16:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 8);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 172:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 9);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 9);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 17:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 9);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 182:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 10);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 10);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 183:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_DivingSuit", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_DivingSuit", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_DivingSuit", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 184:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RegisterFighters");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_AnnounceSoonFight");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BetOnFighters");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_FightersTakeWiningBet");
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_DecideAFighterWinner");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_CollectMoneyFromFistFights");
        } else if (_0x1eaca9 == 7) {
          mp.events.callRemote("Server_GiveAccessToFamilyFistfights");
        } else if (_0x1eaca9 == 8) {
          EndConversationFinally();
        }
        break;
      case 18:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 10);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 192:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 11);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 5);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 11);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 19:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 5);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 5);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 11);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 20:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 1);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 21:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 22:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 3);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 102:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 163:
      case 164:
      case 165:
      case 166:
      case 167:
      case 168:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", dialogstate - 158);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", dialogstate - 158);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 193:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 11);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 11);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 23:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalSurgery");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 198:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalSurgery", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 199:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_TryHalloweenLuck");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 200:
        if (_0x1eaca9 >= 1 && _0x1eaca9 <= 3) {
          mp.events.callRemote("Server_InteractWithGrape", _0x1eaca9);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 201:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenCarFairList");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 202:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenMafiaSklad");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetToCaptureMafia");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 203:
      case 204:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", dialogstate - 188, true);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 24:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalHeal");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_BuyPillsFromNPC");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyFirstAidKits");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_CallPoliceHere", 7);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 25:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 0);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 26:
      case 28:
      case 30:
      case 31:
      case 32:
      case 87:
      case 48:
      case 47:
      case 35:
      case 86:
      case 85:
      case 83:
      case 54:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
        }
        break;
      case 27:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Theft_Action", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 29:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Theft_Action", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 33:
        if (_0x1eaca9 < 4) {
          mp.events.callRemote("Get_license", _0x1eaca9);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GetNewbieScooter");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 34:
        if (_0x1eaca9 > 0 && _0x1eaca9 < 5) {
          mp.events.callRemote("Shop_center_Action", _0x1eaca9);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 113:
        if (_0x1eaca9 < 6) {
          mp.events.callRemote("Server_Black_Shop_center_Action", _0x1eaca9);
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_OpenHouseRobberyInfo");
        } else if (_0x1eaca9 == 7) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 2);
        } else if (_0x1eaca9 == 8) {
          EndConversationFinally();
        }
        break;
      case 115:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_TeleportFromIsland");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_ArendQuadroVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 89:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Get_HarvestFly");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 36:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 37:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 38:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 39:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("EnterGangCraft");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetFoundryMoney");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_OpenRepairInventory");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 40:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("OpenHouseRielt");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 41:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 6);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 6);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 6);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 6);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 6);
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 42:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 1, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 1, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 43:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 2, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 2, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 44:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Jewellery_Shop", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 45:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 46:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 77:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 90:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 91:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 5);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 92:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 6);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 139:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 7);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 145:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 8);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 195:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 14);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 158:
      case 159:
      case 160:
      case 161:
      case 162:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", dialogstate - 149);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 146:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendFireWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 80:
      case 79:
      case 78:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenResourceReseller", dialogstate - 77);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_MineBuyResources");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 81:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Fib_Spy", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_Fib_Spy", 3);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 82:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Fib_Spy", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 84:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Get_Escort_Route");
          EndConversationFinally();
        }
        break;
      case 49:
        if (_0x1eaca9 == 1) {
          OpenBank(2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 50:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPostal");
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 52:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Casino_Action", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_EnterCasinoApparts");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_EnterCasinoRestaurant");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 53:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Casino_Action", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 55:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetQuestProgress", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 56:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 57:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 103:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 116:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 197:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", localplayer.dimension == 999 ? 5 : -1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 153:
      case 133:
      case 132:
      case 131:
      case 130:
      case 129:
      case 128:
      case 127:
      case 126:
      case 125:
      case 124:
      case 123:
      case 122:
      case 121:
      case 120:
      case 119:
      case 118:
      case 117:
        if (_0x1eaca9 == 1) {
          if (dialogstate == 153) {
            mp.events.callRemote("Server_OpenParking", 18);
          } else {
            mp.events.callRemote("Server_OpenParking", dialogstate - 116);
          }
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 134:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 65:
      case 64:
      case 63:
      case 62:
      case 61:
      case 60:
      case 59:
      case 58:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenAutoSalon", dialogstate);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 73:
      case 72:
      case 71:
      case 70:
      case 69:
      case 68:
      case 67:
      case 66:
      case 194:
      case 157:
      case 156:
      case 155:
      case 154:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 93:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", 74);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", 74);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 138:
      case 137:
      case 136:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate - 61);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate - 61);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 144:
      case 143:
      case 142:
      case 141:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate - 129);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate - 129);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 94:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GiveSMIMoney");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_CallPoliceHere", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("PoliceShowWarehouse", 13);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("PoliceOrderWarehouse", 13);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 95:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenNumberPlate");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 96:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CasinoBuyChips");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_CasinoSellChips");
        } else if (_0x1eaca9 == 3) {
          OpenBank(2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 74:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChangeName", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 97:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChangeName", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_TransferMoneyToOrganization");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyHomeInsuranceNPC");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_CallPoliceHere", 5);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_RequestBuyFamilyLicense");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 98:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetExclusiveItem");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 99:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenDuelRoom", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 112:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenDuelRoom", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 100:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenExclusiveItemShop");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 101:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CreateBuildingTeam");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_EditBuildingTeam");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_LeaveBuildingTeam");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_ShowBuildingConstructions");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 75:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ExchangeOpen");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_OpenOffice");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 76:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetNumberPlate");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_BuyCarInsurance");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyCarInsuranceFamily");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 180:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 3, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 3, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 186:
      case 187:
      case 188:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", dialogstate - 182, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", dialogstate - 182, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 196:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 7, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 7, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 181:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPhonographyClone");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally(true);
          mp.events.callRemote("Server_RequestTakeCertificatePhoto");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 1523:
      case 1522:
      case 1521:
      case 1520:
      case 1519:
      case 1518:
      case 1517:
      case 1516:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetCowshedInfo", dialogstate - 1515);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 1515:
      case 1514:
      case 1513:
      case 1512:
      case 1511:
      case 1510:
      case 1509:
      case 1508:
      case 1507:
      case 1506:
      case 1505:
      case 1504:
      case 1503:
      case 1502:
      case 1501:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetAgrarInfo");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 1000:
        if (!at_quest_char || _0x1eaca9 == 2) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetCharQuest", at_quest_char);
        }
        break;
      case 2000:
        if (_0x1eaca9 == 6) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GetHotelGift");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_StartCleaningHotel");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Server_GetInfoAboutHotel");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("GetCharStoryQuest", 3);
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetCharStoryQuest", 2);
        }
        break;
      case 555:
      case 556:
        if (_0x1eaca9 == 1) {
          EndConversationFinally(true);
          if (GlobalCheck() == 1) {
            return;
          }
          mp.events.callRemote("Server_Open1xBetMenu");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 205:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_JoinToSchoolMatch");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 206:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenSchoolEvent", 1);
        }
        if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_OpenSchoolEvent", 1);
        }
        if (_0x1eaca9 == 3) {
          SetGPSLocation(4509.91, -4507.991, 4.052, true);
          EndConversationFinally();
        }
        if (_0x1eaca9 == 4) {
          SetGPSLocation(-3284.652, 991.848, 3.939, true);
          EndConversationFinally();
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 207:
      case 208:
      case 210:
      case 211:
      case 212:
      case 213:
      case 214:
      case 215:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenSchoolEvent", dialogstate - 205);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 216:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("storehouseSellPoint.startShowing");
        } else if (_0x1eaca9 == 2) {
          mp.events.call("ConversationSendBasicTalk", language["Wie bezahle ich mein Lagerhaus?"][curr_lang], language["Das Lagerhaus kann über das Telefon im Online-Banking bezahlt werden"][curr_lang]);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 217:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("storehouseAuction.showMenu");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 209:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetClosestPlace", 0);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5000:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 5);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5001:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetCandiesFromSecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5002:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetRPTicketsFromFactory");
        }
        if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_StartRPFactoryCapture");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5003:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetChristmasStoryline");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProfession");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5004:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5005:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 1);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5006:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 4);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5007:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5008:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetKeyFromSecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5009:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetRepairQuest");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RepairNewYearTree");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CheckChristmasTreeQuest");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5010:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChristmasStartTamagotchi", tamagotchi_id);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_FinishTamagotchiQuest", tamagotchi_id);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5011:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_FeedChristmasDeer");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5012:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPetShop", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5013:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPetShop", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5014:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ShowCaravanList");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
case 5015:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Summer2024SecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5016:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_StartSportLesson");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5017:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SelectCarForDump");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5018:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetInfoAboutSantaTask");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_FinishSantaTask");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5019:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RecruitDealer");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 5020:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_StartCakeBuilding");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5021:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestCleanMagicStonesFromClothes");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RequestChangeMagicStones");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5022:
        EndConversationFinally();
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenMainSummerDesign2025", true);
        }
        break;
      case 5023:
        if (bFebruary2026) {
          if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_RentWeddingLimousine");
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_RentWeddingDress");
          } else if (_0x1eaca9 == 3) {
            EndConversationFinally();
            mp.events.callRemote("Server_RequestShowValentine");
          } else if (_0x1eaca9 == 4) {
            EndConversationFinally();
          }
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RentWeddingLimousine");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RentWeddingDress");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5024:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestEmreBozkurtClothes");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6000:
        if (global.jail_time_in_jail > 0) {
          if (global.workAtPrisonJob) {
            if (_0x1eaca9 == 1) {
              mp.events.callRemote("Server_PrisonWardenFinishPrisonJob");
            }
          } else if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "bathroom");
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "ironing");
          } else if (_0x1eaca9 == 3) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "cooking");
          } else if (_0x1eaca9 == 4) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "moving_box");
          }
        } else if ([3, 4, 12].includes(parseInt(localplayer.getVariable("Member")))) {
          if (global.isPrisonWarden) {
            if (_0x1eaca9 == 1) {
              mp.events.callRemote("Server_PrisonWardenFinishWardenJob");
            }
          } else if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_PrisonWardenStartWardenJob");
          }
        }
        EndConversationFinally();
        break;
      case 6001:
      case 6002:
      case 6003:
      case 6004:
      case 6005:
      case 6006:
      case 6007:
      case 6008:
      case 6009:
      case 6010:
      case 6011:
      case 6012:
      case 6013:
      case 6014:
        {
          const _0x18b6a4 = dialogstate - 6000;
          const _0x2280d4 = FACTIONS_GARAGES_NPC_IDS[_0x18b6a4];
          if (!_0x2280d4) {
            return;
          }
          if ((Array.isArray(_0x2280d4) && _0x2280d4.includes(localplayer.getVariable("Member")) || localplayer.getVariable("Member") === _0x2280d4) && (_0x1eaca9 == 1 && mp.events.callRemote("Server_RequestSpawnFactionVehicle", dialogstate, _0x18b6a4), _0x1eaca9 == 2 && !global.FACTIONS_GANG_IDS.includes(localplayer.getVariable("Member")))) {
            return mp.events.callRemote("Server_RequestRandomNumberPlateFactionVehicle");
          }
          EndConversationFinally();
          break;
        }
      case 6020:
        if (!bChristmas2025) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 1) {
          if (localplayer.getVariable("onRollers")) {
            mp.events.callRemote("Server_DisableRollers");
          } else {
            if (GlobalCheck() == 1) {
              EndConversationFinally();
            }
            mp.events.callRemote("Server_EnableRollers");
          }
        }
        EndConversationFinally();
        break;
      case 6021:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestChristmasTrucker2025");
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6023:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestExchange", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RequestExchange", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
    }
  }
});