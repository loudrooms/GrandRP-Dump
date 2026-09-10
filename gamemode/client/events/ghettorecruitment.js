const CONSTANTS = {
  EVENT_TOTAL_TIME: 900000,
  EVENT_INTERVAL_TICK: 5000
};
let eventInterval;
let eventDealerInfo = [];
let eventTime = 0;
function getTeamPoints() {
  return [eventDealerInfo.filter(_0x4aa2f4 => _0x4aa2f4 == 1).length, eventDealerInfo.filter(_0x4fec10 => _0x4fec10 == 2).length];
}
function cleanDealerEntities() {
  if (eventInterval != null) {
    clearInterval(eventInterval);
    eventInterval = undefined;
  }
  eventDealerInfo = [];
  main_browser.execute("APPS.state.hud.drug_lab_show = false;");
  eventTime = 0;
  bDealerEventStarted = false;
}
global.bDealerEventStarted = false;
mp.events.add("Client_CreateDealerEventEntities", (_0x46a957, _0x282ce3 = undefined) => {
  cleanDealerEntities();
  eventDealerInfo = new Array(_0x46a957).fill(0);
  bDealerEventStarted = true;
  if (_0x282ce3) {
    eventTime = _0x282ce3;
  }
  eventInterval = setInterval(() => {
    const [_0x543b6d, _0x33fb66] = getTeamPoints();
    if (!(Math.floor((CONSTANTS.EVENT_TOTAL_TIME - eventTime) / 1000) >= 0)) {
      clearInterval(eventInterval);
      eventInterval = undefined;
      main_browser.execute("APPS.state.hud.drug_lab_show = false;");
      return;
    }
    ShowDrugLabsDesign(language.Бандиты[curr_lang], _0x543b6d, language["Гос. сотрудники"][curr_lang], _0x33fb66, "", 0, "", 0, "", 0, CONSTANTS.EVENT_TOTAL_TIME / 1000 - eventTime / 1000, CONSTANTS.EVENT_TOTAL_TIME, language["Вербовка дилеров"][curr_lang]);
    eventTime += CONSTANTS.EVENT_INTERVAL_TICK;
  }, CONSTANTS.EVENT_INTERVAL_TICK);
});
mp.events.add("Client_CleanDealerEventEntities", () => {
  cleanDealerEntities();
});
mp.events.add("Client_UpdateDealerInfo", (_0x2be87b, _0x407f8c = undefined) => {
  eventDealerInfo = _0x2be87b;
  if (_0x407f8c != null) {
    eventTime = _0x407f8c;
  }
  bDealerEventStarted = true;
});