global.birthdayDesignOpened = false;
const CASE_INDEX = 443;
mp.events.add("Client_OpenBirthdayMainDesign", (_0x89c8b0, _0x544f54, _0x15857f) => {
  if (!loggedin || chatActive || birthdayDesignOpened || GlobalCheck()) {
    return;
  }
  const _0x14db28 = _0x15857f.split(",").map(Number);
  const _0x43c402 = _0x14db28.reduce((_0x421501, _0xde0c07) => _0x421501 + _0xde0c07, 0);
  main_browser.execute("\n        APPS.state.birthday2026.balance = " + _0x89c8b0 + ";\n        APPS.state.birthday2026.isCaseReceived = " + _0x544f54 + ";\n        APPS.state.birthday2026.completedPlaces = " + JSON.stringify(_0x14db28) + ";\n        APPS.state.birthday2026.caseProgress = " + _0x43c402 + ";\n\n        APPS.state.birthday2026.show = true;\n    ");
  birthdayDesignOpened = true;
  SwitchHUDToDesign(true);
});
mp.events.add("Client_UpdateBirthdayDesign", _0x28fae0 => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    main_browser.execute("APPS.state.birthday2026.balance = " + _0x28fae0 + ";");
  }
});
mp.events.add("Client_CloseBirthdayMainDesign", () => {
  closeBirthdayDesign();
});
global.closeBirthdayDesign = function () {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    main_browser.execute("APPS.state.birthday2026.show = false;");
    birthdayDesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_GotoBirthdayCase", () => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    closeBirthdayDesign();
    mp.events.callRemote("Server_GotoContainers", 443);
  }
});
mp.events.add("Client_BirthdayGPSToAttraction", _0x2ab5ab => {
  if (!loggedin || chatActive || !birthdayDesignOpened) {
    return;
  }
  closeBirthdayDesign();
  if (_0x2ab5ab === "pixelBattle") {
    mp.events.call("Client_OpenPixelBattle");
    return;
  }
  const _0x154fca = getLunaParkAttractionPos(_0x2ab5ab);
  if (_0x154fca) {
    SetGPSLocation(_0x154fca.x, _0x154fca.y, _0x154fca.z, true);
  }
});