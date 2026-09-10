__non_webpack_require__("./sellPoint.js");
__non_webpack_require__("./auction.js");
global.at_storage = false;
mp.events.add("storehouse.showInteract", e => {
  if (e) {
    at_storage = true;
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    at_storage = false;
    main_browser.execute("APPS.state.hud.interact = false;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  }
});
mp.events.add("storehouse.changeInventoryLevel", e => {
  main_browser.execute(`APPS.state.inventory.storageInventoryLevel = ${e};`);
});