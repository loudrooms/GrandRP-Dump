global.GuideBookOpened = false;
mp.events.add("Client_OpenGuideBook", (_0x198375, _0x790261, _0x5dbe80, _0x16be0b) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x314c37 = "{\"guidebook\":[" + _0x198375 + "],\"finished_story_quest\":" + _0x790261 + ",\"story_quest_progress\":" + _0x5dbe80 + ",\"points\":" + _0x16be0b + ",\"show\":true}";
  main_browser.execute("APPS.state.tasks = " + _0x314c37);
  is_guidebook_notification_showed &&= false;
  GuideBookOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseGuideBook = function () {
  if (GuideBookOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.tasks.show = false;");
    GuideBookOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.OpenGuideBook = function () {
  mp.events.callRemote("Server_OpenGuideBook");
};
mp.events.add("Client_UpdateGuideBookPoints", _0x9d4ffc => {
  main_browser.execute("APPS.state.tasks.points = " + _0x9d4ffc);
});
mp.events.add("Client_UpdateGuideBook", _0x1f9338 => {
  main_browser.execute("APPS.state.tasks.guidebook = [" + _0x1f9338 + "];");
});
mp.events.add("Client_GetGuideBookPrize", () => {
  if (GuideBookOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetGuideBookPrize");
    }
  }
});
mp.events.add("Client_CheckQuestProgressInTasks", _0x3b2c04 => {
  if (GuideBookOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 250)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CheckQuestProgressInTasks", _0x3b2c04);
    }
  }
});
const quest_locations = [[719.748, 150.087, 80.754], [130.381, 95.989, 83.506], [-701.713, -1403.421, 5.15], [2019.339, 4977.39, 41.25], [1093.499, -2252.929, 31.234]];
mp.events.add("Client_ShowRandomParkingLot", _0x315826 => {
  SetGPSLocation(_0x315826[0], _0x315826[1], _0x315826[2]);
});
mp.events.add("Client_GPSToPointBookGuide", _0x1e86c0 => {
  CloseGuideBook();
  if (_0x1e86c0 == 6) {
    mp.events.callRemote("Server_GenerateRandomParkingSlot");
  } else {
    SetGPSLocation(quest_locations[_0x1e86c0 - 1][0], quest_locations[_0x1e86c0 - 1][1], quest_locations[_0x1e86c0 - 1][2]);
  }
});
global.is_guidebook_notification_showed = false;
mp.events.add("Client_ShowGuideBookNotification", _0x66ec8a => {
  main_browser.execute("APPS.state.hud.activites_number = " + _0x66ec8a + ";");
  is_guidebook_notification_showed = true;
  PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
  setTimeout(() => {
    is_guidebook_notification_showed = false;
    main_browser.execute("APPS.state.hud.activites_number = 0;");
  }, 5000);
});