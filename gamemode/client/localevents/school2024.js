function closeSelectDance() {
  if (loggedin && selectDanceOpened) {
    main_browser.execute("APPS.state.select_dance.show = false;");
    selectDanceOpened = false;
    SwitchHUDToDesign(false);
    StopCustomSound("sport_lesson");
  }
}
global.school2024DesignOpened = false;
mp.events.add("Client_OpenSchoolEvent2024", (_0x502766, _0x13ece8, _0x428948, _0x29d2c1 = undefined) => {
  if (chatActive || !loggedin || school2024DesignOpened || GlobalCheck()) {
    return;
  }
  let _0xea5490 = 0;
  if (mp.players.local.model != 1885233650) {
    _0xea5490 = 1;
  }
  main_browser.execute("APPS.state.schoolevent2024.finishedCrossword = " + _0x13ece8 + ";");
  main_browser.execute("APPS.state.schoolevent2024.goldStars = " + _0x502766 + ";");
  main_browser.execute("APPS.state.schoolevent2024.gender = " + _0xea5490 + ";");
  main_browser.execute("APPS.state.schoolevent2024.serverTime = " + _0x428948);
  main_browser.execute("APPS.state.schoolevent2024.show = true;");
  if (_0x29d2c1) {
    main_browser.execute("this.AppComponents.schoolevent2024.page = 2");
  }
  school2024DesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_CloseSchoolEvent2024", () => {
  closeSchool2024Design();
});
global.closeSchool2024Design = () => {
  if (school2024DesignOpened) {
    main_browser.execute("APPS.state.schoolevent2024.show = false;");
    school2024DesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_CrosswordWinSchool2024", () => {
  if (school2024DesignOpened && loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CrosswordWinSchool2024");
    }
  }
});
mp.events.add("Client_FinishMathQuestions", _0x4980ad => {
  if (school2024DesignOpened && loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_FinishMathQuestions", _0x4980ad);
    }
  }
});
mp.events.add("Client_UpdateSchoolDesignSubjects", (_0x9dfc58, _0x3259f2, _0x3916d2 = undefined, _0x57ee5e = undefined) => {
  if (_0x9dfc58 == 0) {
    main_browser.execute("APPS.state.schoolevent2024.failedMathAttempt = " + _0x3259f2);
    main_browser.execute("APPS.state.schoolevent2024.finishedMath = " + _0x3916d2);
    main_browser.execute("APPS.state.schoolevent2024.pMathQuestions = " + JSON.stringify(_0x57ee5e));
  } else if (_0x9dfc58 == 1) {
    main_browser.execute("APPS.state.schoolevent2024.geographyTask = " + _0x3259f2);
    main_browser.execute("APPS.state.schoolevent2024.geographyTaskCount = " + _0x3916d2);
    main_browser.execute("APPS.state.schoolevent2024.geographyTaskFinished = " + _0x57ee5e);
  } else if (_0x9dfc58 == 2) {
    main_browser.execute("APPS.state.schoolevent2024.sportTaskFinished = " + _0x3259f2);
    main_browser.execute("APPS.state.schoolevent2024.failedSportAttempt = " + _0x3916d2);
  } else if (_0x9dfc58 == 3) {
    main_browser.execute("APPS.state.schoolevent2024.chemistryTask = " + _0x3259f2);
    main_browser.execute("APPS.state.schoolevent2024.chemistryTaskFinished = " + _0x3916d2);
  }
  main_browser.execute("this.AppComponents.schoolevent2024.$forceUpdate();");
});
mp.events.add("Client_FinishGeographyTask", () => {
  if (school2024DesignOpened && loggedin) {
    mp.events.callRemote("Server_FinishGeographyTask");
  }
});
mp.events.add("Client_SetGPSToDanceLocation", () => {
  if (school2024DesignOpened && loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      SetGPSLocation(181.823, -970.605, 30.118, true);
      closeSchool2024Design();
    }
  }
});
mp.events.add("Client_LoadSchoolPage3", (_0x3ac25c, _0x500c16) => {
  main_browser.execute("APPS.state.schoolevent2024.dailyTop = " + JSON.stringify(_0x3ac25c));
  main_browser.execute("APPS.state.schoolevent2024.globalTop = " + JSON.stringify(_0x500c16));
  main_browser.execute("this.AppComponents.schoolevent2024.$forceUpdate();");
});
mp.events.add("Client_RequestLoadSchoolPage", (_0x4db7f6, _0x31e76f = undefined) => {
  if (school2024DesignOpened && loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0x31e76f == null) {
        mp.events.callRemote("Server_SchoolDesignPageHandler", _0x4db7f6);
      } else {
        mp.events.callRemote("Server_SchoolDesignPageHandler", _0x4db7f6, _0x31e76f);
      }
    }
  }
});
mp.events.add("Client_SchoolBuyItem", _0x4b9940 => {
  if (school2024DesignOpened && loggedin) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SchoolBuyItem", _0x4b9940);
    }
  }
});
mp.events.add("Client_LoadSchoolPage4", (_0x5a18b6, _0x33c1f2, _0x284eb2) => {
  if (_0x5a18b6 == 1) {
    main_browser.execute("APPS.state.schoolevent2024.mentorName = '" + _0x33c1f2 + "';");
    main_browser.execute("APPS.state.schoolevent2024.mentorNumber = " + _0x284eb2 + ";");
  } else if (_0x5a18b6 == 2) {
    main_browser.execute("APPS.state.schoolevent2024.studentName = '" + _0x33c1f2 + "';");
    main_browser.execute("APPS.state.schoolevent2024.studentNumber = " + _0x284eb2 + ";");
  }
  main_browser.execute("this.AppComponents.schoolevent2024.$forceUpdate();");
});
mp.events.add("Client_SendMessageSchool2024", _0x1645e5 => {
  if (loggedin && school2024DesignOpened && _0x1645e5) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      closeSchool2024Design();
      _0x1645e5 = parseInt(_0x1645e5);
      SendSMSFromDesign(_0x1645e5);
    }
  }
});
mp.events.add("Client_TryClothesFromShopSchool2024", _0x42e698 => {
  if (loggedin && school2024DesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_TryClothesFromShopSchool2024", _0x42e698);
    }
  }
});
mp.events.add("Client_RequestBuyStars", () => {
  if (loggedin && school2024DesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RequestBuyStars");
    }
  }
});
mp.events.add("Client_ChemistryTaskFinished", () => {
  if (loggedin && school2024DesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChemistryTaskFinished");
    }
  }
});
mp.events.add("Client_FinishSchoolDance", _0x4e0187 => {
  if (loggedin && selectDanceOpened) {
    closeSelectDance();
    mp.events.callRemote("Server_FinishSchoolDance", _0x4e0187);
  }
});
mp.events.add("Client_PlayDanceAnimation", (_0x2cd220 = undefined, _0x327b36 = undefined) => {
  if (loggedin && selectDanceOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0x2cd220 && _0x327b36) {
        mp.events.callRemote("SetPlayerAnimation", _0x2cd220, _0x327b36);
      } else {
        mp.events.callRemote("SetPlayerAnimation", 2, 11);
      }
    }
  }
});
global.selectDanceOpened = false;
mp.events.add("Client_OpenSelectDance", () => {
  if (!chatActive && !!loggedin && !selectDanceOpened) {
    EndConversationFinally();
    main_browser.execute("APPS.state.select_dance.show = true;");
    selectDanceOpened = true;
    SwitchHUDToDesign(true);
    StartCustomSound("sport_lesson", "/game/gui/sounds/school2024/sportLesson.ogg", 0.1);
  }
});
mp.events.add("Client_UpdateSchool2024Balance", _0x32fd8d => {
  if (loggedin && school2024DesignOpened) {
    main_browser.execute("APPS.state.schoolevent2024.goldStars = " + _0x32fd8d + ";");
  }
});