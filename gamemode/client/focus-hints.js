global.HintsShowed = false;
mp.events.add("Client_ShowFocusHints", _0x15a5c1 => {
  showFocusHints(_0x15a5c1);
});
mp.events.add("Client_CloseFocusHints", () => {
  closeFocusHints();
});
global.showFocusHints = function (_0x451e20) {
  if (!HintsShowed && loggedin) {
    main_browser.execute("this.AppComponents.focus_hints.setHints(" + JSON.stringify(_0x451e20) + ");");
    HintsShowed = true;
    SwitchHUDToDesign(true);
  }
};
global.closeFocusHints = function () {
  if (HintsShowed && loggedin) {
    HintsShowed = false;
    main_browser.execute("this.AppComponents.focus_hints.clientClearHints();");
    if (GlobalCheck() == 0) {
      SwitchHUDToDesign(false);
    }
  }
};