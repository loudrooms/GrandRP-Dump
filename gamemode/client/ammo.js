let customize_hash;
let current_tint;
function ChangeWeaponTint(_0x33fe3d) {
  if (CustomizeAmmoOpened) {
    if (_0x33fe3d == 0) {
      if (current_tint == 0) {
        return;
      }
      current_tint--;
    } else {
      if (current_tint + 1 == mp.game.weapon.getWeaponTintCount(parseInt(customize_hash))) {
        return;
      }
      current_tint++;
    }
    mp.game.invoke("0x50969B9B89ED5738", localplayer.handle, parseInt(customize_hash), parseInt(current_tint));
    mp.game.invoke("0xADF692B254977C0C", localplayer.handle, parseInt(customize_hash), parseInt(current_tint));
  }
}
global.AmmoOpened = false;
mp.events.add("Client_ShowAmmo", (_0x1b8146, _0x515a1f) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x4901a1 = "{\"currentgun\":0,\"ammo_count\":0,\"select_element\":-1,\"price\":" + _0x1b8146 + ",\"multiplayer\":" + _0x515a1f + ",\"show\":true}";
  main_browser.execute("APPS.state.gun_info = " + _0x4901a1);
  AmmoOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseAmmo = function () {
  if (AmmoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.gun_info.show = false;");
    AmmoOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("ServerCloseAmmo");
  }
};
mp.events.add("ClientBuyAmmo", _0x1dc558 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerBuyAmmo", _0x1dc558);
  }
});
mp.events.add("ClientBuyPatr", (_0x548ea5, _0x43492a) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("ServerBuyPatr", _0x548ea5, _0x43492a);
  }
});
mp.events.add("Ammo_Error", _0x4e90b2 => {
  if (AmmoOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x4e90b2 + "');");
  }
});
global.CustomizeAmmoOpened = false;
mp.events.add("Client_OpenCustomizeWeapon", (_0x2b9698, _0x5b9322) => {
  if (givenWeapon == -1569615261) {
    mp.events.call("ConversationSendBasicTalk", language["Хочу перекрасить оружие"][curr_lang], language["Возьмите оружие в руки"][curr_lang]);
    return;
  }
  if (mp.game.weapon.getWeaponTintCount(parseInt(_0x2b9698)) <= 0) {
    mp.events.call("ConversationSendBasicTalk", language["Хочу перекрасить оружие"][curr_lang], language["У данного оружия нет расцветки"][curr_lang]);
    return;
  }
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  CustomizeAmmoOpened = true;
  customize_hash = _0x2b9698;
  main_browser.execute("APPS.state.weapon_tint = {\"list\":0,\"show\":true}");
  current_tint = 0;
  localplayer.freezePosition(true);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.events.callRemote("Server_SetCustomizeWeaponCorrect", _0x5b9322);
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_ShowCustomizeWeaponCamera", () => {
  localcamera = mp.cameras.new("default");
  localcamera.setActive(true);
  InteractiveCamera.create(localcamera, new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z), new mp.Vector3(0, 1, 0), localplayer.getHeading(), [0, 0], [-0.3, 0.5], 5);
  mp.game.cam.renderScriptCams(true, false, 3000, true, false);
});
global.CloseCustomizeAmmo = function () {
  if (CustomizeAmmoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.weapon_tint.show = false;");
    CustomizeAmmoOpened = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    mp.game.cam.renderScriptCams(false, true, 0, true, false);
    mp.game.invoke("0x50969B9B89ED5738", localplayer.handle, parseInt(customize_hash), 0);
    mp.game.invoke("0xADF692B254977C0C", localplayer.handle, parseInt(customize_hash), 0);
    if (localcamera) {
      localcamera.destroy();
      localcamera = undefined;
    }
    InteractiveCamera.stop();
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_SetCustomizeWeaponGetBack");
  }
};
mp.events.add("Client_CloseWeaponCustomization", () => {
  CloseCustomizeAmmo();
});
mp.events.add("Client_CustomizeError", _0x4a8b3a => {
  if (CustomizeAmmoOpened) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x4a8b3a + "');");
  }
});
mp.events.add("Client_BuyWeaponTint", () => {
  if (!!CustomizeAmmoOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BuyWeaponTint", current_tint);
  }
});
mp.events.add("Client_ChangeWeaponTint", _0x567f4d => {
  if (CustomizeAmmoOpened) {
    ChangeWeaponTint(_0x567f4d);
  }
});