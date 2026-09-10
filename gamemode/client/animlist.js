global.AnimListOpened = false;
let last_anim_used;
let availableSounds = [];
global.OpenBindAnimationDesign = function () {
  if (GlobalCheck() == 1 || playerincapture || typeof localplayer.getVariable("policeEscortId") == "number") {
    return;
  }
  const _0x5db00e = "{\n\t\t\"AnimatedGifs\":" + mp.storage.data.not_animated_gifs + ",\n\t\t\"anim_binds\":" + JSON.stringify(mp.storage.data.anim_binds) + ",\n\t\t\"sound_binds\":" + JSON.stringify(mp.storage.data.sound_binds || []) + ",\n\t\t\"favorite_anims\":" + JSON.stringify(mp.storage.data.favorite_anims) + ",\n\t\t\"favorite_sounds\":" + JSON.stringify(mp.storage.data.favorite_sounds) + ",\n\t\t\"available_sounds\":" + JSON.stringify(availableSounds) + ",\n\t\t\"vip\":" + (player_vip > 0 ? 1 : 0) + ",\n\t\t\"viplevel\":" + (player_viplevel || 0) + ",\n\t\t\"show\":true\n\t}";
  main_browser.execute("APPS.state.animlist = " + _0x5db00e);
  AnimListOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  mp.events.callRemote("Server_GetWalkStyleAndMood");
};
mp.events.add("Client_UpdateAvailableSpatialSounds", _0x59e711 => {
  availableSounds = _0x59e711;
  CloseInv();
});
global.CloseBindAnimationDesign = function () {
  if (AnimListOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.animlist.show = false;");
    AnimListOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseAnimationMenu", () => {
  CloseBindAnimationDesign();
});
mp.events.add("Client_SetPlayerAnimation", _0x15b79d => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (!localplayer.isFalling() && !localplayer.isReloading() && !localplayer.getConfigFlag(78, true) && !localplayer.isRagdoll() && !!localplayer.isOnFoot() && !localplayer.isInAir()) {
        mp.events.callRemote("SetPlayerAnimation", _0x15b79d);
      }
    }
  }
});
mp.events.add("Client_SetPlayerWalkStyle", _0x45bd6d => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("SetPlayerWalkStyle", _0x45bd6d);
    }
  }
});
mp.events.add("Client_SetPlayerMood", _0x45022e => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("SetPlayerMood", _0x45022e);
    }
  }
});
mp.events.add("Client_BindAnimation", (_0x577826, _0x5d68c7) => {
  if (AnimListOpened && loggedin && !chatActive) {
    for (let _0x4601b9 = 0; _0x4601b9 < mp.storage.data.anim_binds.length; _0x4601b9++) {
      if (mp.storage.data.anim_binds[_0x4601b9] === _0x5d68c7) {
        mp.storage.data.anim_binds[_0x4601b9] = "";
      }
    }
    mp.storage.data.anim_binds[_0x577826 - 1] = _0x5d68c7;
    if (mp.storage.data.sound_binds) {
      mp.storage.data.sound_binds[_0x577826 - 1] = "";
    }
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.anim_binds = " + JSON.stringify(mp.storage.data.anim_binds) + ";");
    main_browser.execute("APPS.state.animlist.sound_binds = " + JSON.stringify(mp.storage.data.sound_binds || []) + ";");
  }
});
mp.events.add("Client_BindSound", (_0x117ebb, _0x2de39a) => {
  if (AnimListOpened && loggedin && !chatActive) {
    mp.storage.data.sound_binds ||= [];
    for (let _0x48b826 = 0; _0x48b826 < mp.storage.data.sound_binds.length; _0x48b826++) {
      if (mp.storage.data.sound_binds[_0x48b826] === _0x2de39a) {
        mp.storage.data.sound_binds[_0x48b826] = "";
      }
    }
    mp.storage.data.sound_binds[_0x117ebb - 1] = _0x2de39a;
    mp.storage.data.anim_binds[_0x117ebb - 1] = "";
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.anim_binds = " + JSON.stringify(mp.storage.data.anim_binds) + ";");
    main_browser.execute("APPS.state.animlist.sound_binds = " + JSON.stringify(mp.storage.data.sound_binds) + ";");
  }
});
mp.events.add("Client_UnBindAnimation", _0x388a94 => {
  if (AnimListOpened && loggedin && !chatActive) {
    mp.storage.data.anim_binds[_0x388a94 - 1] = "";
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.anim_binds = " + JSON.stringify(mp.storage.data.anim_binds) + ";");
  }
});
mp.events.add("Client_UnBindSound", _0x147a7c => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (mp.storage.data.sound_binds) {
      mp.storage.data.sound_binds[_0x147a7c - 1] = "";
    }
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.sound_binds = " + JSON.stringify(mp.storage.data.sound_binds || []) + ";");
  }
});
mp.events.add("Client_ChangeGifInAnimations", () => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (mp.storage.data.not_animated_gifs) {
      mp.storage.data.not_animated_gifs = undefined;
    } else {
      mp.storage.data.not_animated_gifs = true;
    }
    mp.storage.flush();
  }
});
mp.events.add("Client_ChangeStateFavoriteAnimState", (_0x24230c, _0x563e67) => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (_0x563e67 == 1) {
      if (!mp.storage.data.favorite_anims.includes(_0x24230c)) {
        mp.storage.data.favorite_anims.push(_0x24230c);
      }
    } else {
      const _0x2a6bf7 = mp.storage.data.favorite_anims.indexOf(_0x24230c);
      if (_0x2a6bf7 !== -1) {
        mp.storage.data.favorite_anims.splice(_0x2a6bf7, 1);
      }
    }
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.favorite_anims = " + JSON.stringify(mp.storage.data.favorite_anims) + ";");
  }
});
mp.events.add("Client_ChangeStateFavoriteSoundState", (_0x38895f, _0x473dc3) => {
  if (AnimListOpened && loggedin && !chatActive) {
    if (_0x473dc3 == 1) {
      if (!mp.storage.data.favorite_sounds.includes(_0x38895f)) {
        mp.storage.data.favorite_sounds.push(_0x38895f);
      }
    } else {
      const _0x2ed636 = mp.storage.data.favorite_sounds.indexOf(_0x38895f);
      if (_0x2ed636 !== -1) {
        mp.storage.data.favorite_sounds.splice(_0x2ed636, 1);
      }
    }
    mp.storage.flush();
    main_browser.execute("APPS.state.animlist.favorite_sounds = " + JSON.stringify(mp.storage.data.favorite_sounds) + ";");
  }
});
const anim_keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
for (let e = 0; e < anim_keys.length; e++) {
  mp.keys.bind(anim_keys[e], false, function () {
    if (!!loggedin && !chatActive && !(new Date().getTime() - last_anim_used < 1000) && (GlobalCheck() != 1 || !!MobileCameraOpened) && !localplayer.isFalling() && !localplayer.isReloading() && !localplayer.getConfigFlag(78, true) && !localplayer.isRagdoll() && localplayer.isOnFoot() && typeof localplayer.getVariable("policeEscortId") != "number" && mp.keys.isDown(18) == 1) {
      if (mp.storage.data.anim_binds[e]) {
        last_anim_used = new Date().getTime();
        lastCheck = new Date().getTime();
        if (localplayer.isFalling() || localplayer.isReloading() || localplayer.getConfigFlag(78, true) || localplayer.isRagdoll() || !localplayer.isOnFoot() || localplayer.isInAir()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", mp.storage.data.anim_binds[e]);
      } else if (mp.storage.data.sound_binds && mp.storage.data.sound_binds[e]) {
        last_anim_used = new Date().getTime();
        lastCheck = new Date().getTime();
        const _0x153e27 = mp.storage.data.sound_binds[e];
        const _0x282c = player_vip > 0 && player_viplevel >= 4;
        if (availableSounds.includes(_0x153e27) || _0x282c) {
          mp.events.callRemote("Server_RequestPlaySpatialSound", _0x153e27);
        }
      }
    }
  });
}
mp.events.add("Client_SetWalkStyleAndMood", (_0x20d89c, _0x228433) => {
  if (AnimListOpened && loggedin && !chatActive) {
    main_browser.execute("this.AppComponents.animlist.walkingStyle = " + _0x20d89c + ";");
    main_browser.execute("this.AppComponents.animlist.emote = " + _0x228433 + ";");
  }
});