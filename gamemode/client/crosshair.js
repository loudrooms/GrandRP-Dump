if (mp.storage.data.crosshair == null || mp.storage.data.crosshair.drawoutline == null) {
  mp.storage.data.crosshair = {};
  mp.storage.data.crosshair.thickness = 5;
  mp.storage.data.crosshair.size = 10;
  mp.storage.data.crosshair.gap = 5;
  mp.storage.data.crosshair.outlinethickness = 0;
  mp.storage.data.crosshair.dot = 0;
  mp.storage.data.crosshair.drawoutline = 0;
  mp.storage.data.crosshair.color = "#ffffff";
  mp.storage.data.crosshair.alpha = 100;
  mp.storage.flush();
}
const sniper_hashes = [100416529, 205991906, 177293209, -952879014, 1785463520, -1569615261];
let is_crosshair_shown = false;
mp.events.add("render", () => {
  if (loggedin) {
    if ((localplayer.getConfigFlag(78, true) || mp.game.player.isFreeAiming()) && sniper_hashes.indexOf(parseInt(currentWeapon())) == -1) {
      if (curr_lang == "ru" && playerincapture == 1 && !mp.storage.data.new_standartaim_show) {
        return;
      }
      mp.game.ui.hideHudComponentThisFrame(14);
      if (!is_crosshair_shown) {
        is_crosshair_shown = true;
        CreateCrossHair();
      }
    } else if (is_crosshair_shown) {
      is_crosshair_shown = false;
      HideCrossHair();
    }
  }
});
mp.events.add("Client_SaveCrosshair", _0x57fe8e => {
  CloseSettings();
  mp.storage.data.crosshair = JSON.parse(_0x57fe8e);
  mp.storage.flush();
  InitilizeCrosshair();
});
global.CreateCrossHair = function () {
  const _0x2e0f0a = "{\"crosshair\":" + JSON.stringify(mp.storage.data.crosshair) + ",\"show\":true}";
  main_browser.execute("APPS.state.crosshair = " + _0x2e0f0a);
};
global.InitilizeCrosshair = function () {
  CreateCrossHair();
  HideCrossHair();
};
global.HideCrossHair = function () {
  main_browser.execute("APPS.state.crosshair.show = false;");
};