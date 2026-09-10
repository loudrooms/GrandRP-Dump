let major_wanted_quest_interval;
function AnnulateMajorWantedQuestVariables(_0x3e4111 = false) {
  main_browser.execute("APPS.state.hud.major_wanted_time = '00:00';");
  main_browser.execute("APPS.state.hud.major_wanted_show = false;");
  if (major_wanted_quest_interval != null) {
    clearInterval(major_wanted_quest_interval);
    major_wanted_quest_interval = undefined;
  }
  if (!_0x3e4111) {
    mp.events.callRemote("Server_AnnulateMajorWantedQuest");
  }
}
global.DarknetOpened = false;
mp.events.add("Client_OpenDarknetPageCorrect", (_0x4387cc = 0, _0x5a21fc, _0x373646, _0x2cd66c, _0x4a4e4f, _0x3b8f92, _0x272173 = "", _0xb8e029 = 0, _0x5dff46 = 0, _0x1db535 = [], _0x46f1da = {}, _0x29107b = 0) => {
  CloseMobile();
  if (GlobalCheck() == 1 && DarknetOpened == 0) {
    return;
  }
  const _0x388b29 = "{\"page\":" + _0x4387cc + ",\"mugshots\":[],\"isInGang\":" + _0x373646 + ",\"haveRightToTakeTheftOrderTattoo\":" + _0x2cd66c + ",\"theft_skill\":" + _0x4a4e4f + ",\"robbed_cars\":" + _0x3b8f92 + ",\"theft_veh_name\":'" + _0x272173 + "',\"theft_veh_number_plate\":'" + _0xb8e029 + "',\"theft_veh_price\":" + _0x5dff46 + ",\"mugshots_loaded\":false,\"fake_id\":" + _0x5a21fc + ",\"show\":true}";
  main_browser.execute("APPS.state.darknet = " + _0x388b29);
  main_browser.execute("APPS.state.darknet.wantedList = " + JSON.stringify(_0x1db535));
  if (_0x46f1da) {
    main_browser.execute("APPS.state.darknet.currentOrder = " + JSON.stringify(_0x46f1da));
  }
  main_browser.execute("this.AppComponents.darknet.$forceUpdate();");
  if (_0x29107b == 1) {
    setTimeout(() => {
      const _0x1d35be = language["Чтобы ограбить банкомат, приобретите набор отмычек"][curr_lang];
      showFocusHints([{
        element: "lockpick-set",
        text: _0x1d35be,
        infoPosition: ["left"]
      }]);
    }, 500);
  }
  DarknetOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseDarknet = function () {
  if (DarknetOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.darknet.show = false;");
    DarknetOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseDarknet", () => {
  CloseDarknet();
});
mp.events.add("Client_DarknetMakeKillOrder", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetMakeKillOrder");
  }
});
mp.events.add("Client_DarknetTakeKillOrder", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetTakeKillOrder");
  }
});
mp.events.add("Client_DarknetBuyIllegalItem", _0x192be2 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetBuyIllegalItem", _0x192be2);
  }
});
mp.events.add("Client_LoadDarknetMugshots", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadDarknetMugshots");
  }
});
mp.events.add("Client_DarknetStartBasicQuest", _0x25c7eb => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetStartBasicQuest", _0x25c7eb);
  }
});
mp.events.add("Client_DarknetMakeOrder", _0x120df1 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetMakeOrder", _0x120df1);
  }
});
mp.events.add("Client_DarknetGetTheftVehicle", () => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetGetTheftVehicle");
  }
});
mp.events.add("Client_DarknetRerollTheftVehicle", () => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DarknetRerollTheftVehicle");
  }
});
mp.events.add("Client_CancelFakeDocuments", () => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CancelFakeDocuments");
  }
});
mp.events.add("Client_UpdateDarkNetFakeFibStatus", _0x33f653 => {
  main_browser.execute("APPS.state.darknet.fake_id = " + _0x33f653 + ";");
});
mp.events.add("Client_UpdateDarknetMugshots", _0x31497e => {
  main_browser.execute("APPS.state.darknet.mugshots = " + _0x31497e + ";");
  main_browser.execute("APPS.state.darknet.mugshots_loaded = true;");
  main_browser.execute("APPS.state.darknet.page = 2;");
});
mp.events.add("Client_DarknetUpdateModel", (_0x132d0d, _0x2e3cd0, _0x548913) => {
  main_browser.execute("APPS.state.darknet.theft_veh_name = '" + _0x132d0d + "';");
  main_browser.execute("APPS.state.darknet.theft_veh_number_plate = '" + _0x2e3cd0 + "';");
  main_browser.execute("APPS.state.darknet.theft_veh_price = " + _0x548913 + ";");
});
mp.events.add("Client_DarknetOpenScannerCraft", () => {
  CloseDarknet();
  mp.events.callRemote("Server_OrderCraftItems", 327);
});
mp.events.add("Client_ShowSerialKillerQuest", _0x30b955 => {
  QuestShow(TranslateText("Убийство {0}", _0x30b955), language["Сканнер людей поможет в поисках необходимого человека"][curr_lang]);
});
mp.events.add("Client_ShowEscapeFromJailQuest", _0x7e7456 => {
  QuestShow(TranslateText("Заключенный {0}", _0x7e7456), language["Возьмите заключенного за руку и выведите за пределы тюрьмы"][curr_lang]);
});
mp.events.add("Client_SearchForSerialPlayer", _0x5d8b59 => {
  let _0x52e19e = false;
  let _0x397d8a = 0;
  mp.players.forEachInStreamRange(_0x591da0 => {
    if (_0x591da0.real_id == _0x5d8b59) {
      _0x52e19e = true;
      _0x397d8a = mp.game.system.vdist(_0x591da0.position.x, _0x591da0.position.y, _0x591da0.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z).toFixed();
    }
  });
  if (_0x52e19e == 1) {
    LocatorMsg(TranslateText("Найден игрок в радиусе {0} метров", _0x397d8a), 3, true);
  } else {
    LocatorMsg(TranslateText("В радиусе {0} метров жертва не найдена", 300), 3, false);
  }
});
mp.events.add("Client_MajorWantedQuestState", (_0x1f07de, _0x205f47 = false, _0x109fab = 0) => {
  if (_0x1f07de) {
    if (!major_wanted_quest_interval) {
      _0x109fab = parseInt(_0x109fab);
      _0x109fab /= 1000;
      major_wanted_quest_interval = setInterval(() => {
        _0x109fab--;
        let _0x44f2e7 = Math.floor(_0x109fab / 60);
        let _0x529c85 = _0x109fab - _0x44f2e7 * 60;
        if (_0x44f2e7 < 10) {
          _0x44f2e7 = "0" + _0x44f2e7;
        }
        if (_0x529c85 < 10) {
          _0x529c85 = "0" + _0x529c85;
        }
        main_browser.execute("APPS.state.hud.major_wanted_time = '" + _0x44f2e7 + ":" + _0x529c85 + "';");
        main_browser.execute("APPS.state.hud.major_wanted_show = true;");
        if (localplayer.dimension != 0) {
          AnnulateMajorWantedQuestVariables();
        }
      }, 1000);
    }
  } else {
    AnnulateMajorWantedQuestVariables(_0x205f47);
  }
});
mp.events.add("Client_TakeOrderToKill", (_0x105ee9, _0x474106) => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 1000)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TakeOrderToKill", _0x105ee9, _0x474106);
    }
  }
});
global.bountyHunterTarget = undefined;
mp.events.add("Client_UpdateKillOrder", _0x124f62 => {
  if (_0x124f62.type == 1) {
    bountyHunterTarget = _0x124f62.pid;
  }
  main_browser.execute("APPS.state.darknet.currentOrder = " + JSON.stringify(_0x124f62));
  main_browser.execute("this.AppComponents.darknet.$forceUpdate();");
});
mp.events.add("Client_UpdateKillOrderList", (_0x2a74af = []) => {
  mp.console.logInfo(_0x2a74af);
  main_browser.execute("APPS.state.darknet.wantedList = " + JSON.stringify(_0x2a74af));
  main_browser.execute("this.AppComponents.darknet.$forceUpdate();");
});
mp.events.add("Client_CancelOrderToKill", () => {
  if (loggedin && !chatActive) {
    if (new Date().getTime() - lastCheck < 1000) {
      return ShowNotification(language["Подождите некоторое время"][curr_lang], 2);
    }
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_CancelOrderToKill");
  }
});
mp.events.add("Client_CancelOrderToKillUpdate", () => {
  main_browser.execute("this.AppComponents.darknet.MurderPanel.refuseOrderUpdate();");
});
mp.events.add("Client_CleanKillOrder", () => {
  bountyHunterTarget = undefined;
});