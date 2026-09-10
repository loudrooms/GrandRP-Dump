global.atAirdropShape = false;
mp.events.add("Client_AirdropShapeInteract", _0x496c4c => {
  if (_0x496c4c == 1) {
    main_browser.execute("APPS.state.hud.interact = true;");
    PlayAudioSound("SKIP", "HUD_FRONTEND_DEFAULT_SOUNDSET");
  } else {
    main_browser.execute("APPS.state.hud.interact = false;");
  }
  atAirdropShape = _0x496c4c;
});