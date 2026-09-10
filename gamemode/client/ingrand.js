mp.events.add("Client_OpenMobileCamera", (_0x1f5bc5 = 0, _0x4eb8c3 = "") => {
  if (_0x1f5bc5 == 0) {
    if (localplayer.vehicle) {
      return ShowNotification(language["Вы не можете использовать камеру в транспортном средстве"][curr_lang], 6);
    } else {
      mp.events.callRemote("Server_RequestOpenMobileCamera");
      return;
    }
  }
  last_photo_url = "";
  OpenMobileCamera(_0x1f5bc5, _0x4eb8c3);
});
mp.events.add("Client_AllowOpenMobileCamera", () => {
  CloseMobile(false);
  last_photo_url = "";
  OpenMobileCamera(0, "");
});
global.MobileCameraOpened = false;
let cameraMode = -1;
let cam_view = 0;
let camera_photo_page = -1;
mp.events.add("render", () => {
  if (loggedin && MobileCameraOpened) {
    let _0x18579e = false;
    if (cam_view != 0) {
      _0x18579e = true;
      if (cam_view == 1) {
        mp.game.cam.setFollowPedCamViewMode(4);
      } else {
        mp.game.cam.setFollowPedCamViewMode(2);
      }
      mp.game.controls.disableControlAction(2, 140, true);
      mp.game.controls.disableControlAction(2, 0, true);
      mp.game.controls.disableControlAction(2, 22, true);
    } else if (cameraMode === 0) {
      _0x18579e = true;
      mp.game.cam.setFollowPedCamViewMode(2);
      mp.game.controls.disableControlAction(2, 140, true);
      mp.game.controls.disableControlAction(2, 0, true);
      mp.game.controls.disableControlAction(2, 22, true);
    } else if (camera_photo_page === 14) {
      _0x18579e = true;
      mp.game.controls.disableControlAction(2, 22, true);
    }
    if (_0x18579e) {
      if (camera_photo_page === 0 && mp.game.controls.isDisabledControlJustPressed(0, 140)) {
        mp.events.call("Client_ChangeCameraMode");
      }
      if (mp.game.controls.isDisabledControlJustPressed(0, 22)) {
        mp.events.call("Client_TakeAPhoto");
      }
    }
  }
});
global.OpenMobileCamera = function (_0x5d9feb = 0, _0x57f546 = "") {
  const _0xf6efc2 = "{\"page\":" + _0x5d9feb + ",\"photo_url\":'" + _0x57f546 + "',\"show\":true}";
  main_browser.execute("APPS.state.photo = " + _0xf6efc2);
  MobileCameraOpened = true;
  main_browser.active = true;
  camera_photo_page = _0x5d9feb;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  cam_view = 0;
  if (_0x5d9feb != 4) {
    if (_0x5d9feb != 0 && _0x5d9feb != 10 && _0x5d9feb != 14) {
      mp.gui.cursor.show(true, true);
    } else {
      mp.gui.cursor.show(false, false);
    }
    if (_0x5d9feb == 10) {
      cam_view = 2;
    }
  } else if (_0x5d9feb == 4) {
    cam_view = 1;
  }
  if (_0x5d9feb == 0) {
    cam_view = 0;
    cameraMode = 0;
    mp.game.cam.setFollowPedCamViewMode(2);
    mp.events.callRemote("Server_SetSelfieMode");
  } else {
    cameraMode = -1;
  }
};
global.CloseMobileCamera = function () {
  if (MobileCameraOpened && loggedin && !chatActive) {
    if (cameraMode === 0) {
      mp.events.callRemote("Server_EndSelfieMode");
    }
    cameraMode = -1;
    cam_view = 0;
    camera_photo_page = -1;
    mp.game.cam.setFollowPedCamViewMode(2);
    main_browser.execute("APPS.state.photo.show = false;");
    MobileCameraOpened = false;
    main_browser.active &&= false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    if (!mobileOpen) {
      mp.gui.cursor.show(false, false);
    }
    if (at_mugshot_photo) {
      CloseMugShotCamera();
    }
    is_vehicle_fine_photo &&= false;
    is_board_item_photo &&= false;
    TakeFamilyTopPhoto &&= false;
    TakeForbesPlayerTopPhoto &&= false;
    TakeVehicleTopPhoto &&= false;
    mp.events.call("Enablechat");
    last_photo_url = "";
  }
};
let startTakingScreenShot = false;
const IMAGE_UPLOAD_CHUNK_SIZE = 16000;
let cefImageUploadBuffer = null;
function setImageUploadInProgress(_0x25308c) {
  global.isImageUploadInProgress = !!_0x25308c;
  if (loggedin && main_browser) {
    const _0x51393a = _0x25308c ? "true" : "false";
    main_browser.execute("APPS.state.hud.image_upload_in_progress = " + _0x51393a + "; APPS.state.photo.image_upload_in_progress = " + _0x51393a + ";");
  }
}
global.isImageUploadInProgress = false;
mp.events.add("Client_SetImageUploadInProgress", _0x8d7a1a => {
  setImageUploadInProgress(!!_0x8d7a1a);
});
const IMAGE_UPLOAD_CHUNK_SEND_MS = 20;
function getImageUploadFinishDelay(_0x12bcf7) {
  return Math.max(250, _0x12bcf7 * 30);
}
function sendImageUploadToServer(_0x3e0634, _0x390cad, _0x26fb53) {
  const _0x23ccb1 = _0x3e0634.length;
  const _0x547358 = Math.ceil(_0x23ccb1 / 16000);
  _0x26fb53 = parseInt(_0x26fb53) || 0;
  mp.events.callRemote("Server_UploadImageBegin", _0x26fb53, _0x390cad, _0x23ccb1, _0x547358);
  let _0x5deb81 = 0;
  const _0x41a868 = () => {
    if (_0x5deb81 >= _0x547358) {
      const _0x26e609 = getImageUploadFinishDelay(_0x547358);
      setTimeout(() => {
        mp.events.callRemote("Server_UploadImageFinish");
      }, _0x26e609);
      return;
    }
    const _0x55045c = _0x3e0634.slice(_0x5deb81 * 16000, (_0x5deb81 + 1) * 16000);
    mp.events.callRemote("Server_UploadImageChunk", _0x5deb81, _0x55045c);
    _0x5deb81++;
    setTimeout(_0x41a868, 20);
  };
  setTimeout(_0x41a868, 20);
}
let pedHeadShot;
mp.events.add("Client_CEFImageUploadBegin", (_0x512656, _0x10dd48, _0x2883b1, _0x179403) => {
  if (loggedin && MobileCameraOpened) {
    _0x2883b1 = parseInt(_0x2883b1);
    _0x179403 = parseInt(_0x179403);
    if (_0x2883b1 && _0x179403) {
      cefImageUploadBuffer = {
        type: _0x512656,
        murder_accid: parseInt(_0x10dd48) || 0,
        totalLength: _0x2883b1,
        totalChunks: _0x179403,
        chunks: new Array(_0x179403),
        receivedChunks: 0
      };
    }
  }
});
mp.events.add("Client_CEFImageUploadChunk", (_0x1bd459, _0x496101) => {
  if (cefImageUploadBuffer) {
    _0x1bd459 = parseInt(_0x1bd459);
    if (!isNaN(_0x1bd459) && !(_0x1bd459 < 0) && !(_0x1bd459 >= cefImageUploadBuffer.totalChunks)) {
      if (_0x496101 && cefImageUploadBuffer.chunks[_0x1bd459] === undefined) {
        cefImageUploadBuffer.chunks[_0x1bd459] = _0x496101;
        cefImageUploadBuffer.receivedChunks++;
      }
    }
  }
});
mp.events.add("Client_CEFImageUploadFinish", () => {
  if (!cefImageUploadBuffer) {
    setImageUploadInProgress(false);
    return;
  }
  if (cefImageUploadBuffer.receivedChunks != cefImageUploadBuffer.totalChunks) {
    cefImageUploadBuffer = null;
    setImageUploadInProgress(false);
    return;
  }
  const _0x4ea58c = cefImageUploadBuffer.chunks.join("");
  const {
    type: _0x238d14,
    murder_accid: _0x4421ea,
    totalLength: _0x4ae898
  } = cefImageUploadBuffer;
  cefImageUploadBuffer = null;
  if (_0x4ea58c.length == _0x4ae898) {
    sendImageUploadToServer(_0x4ea58c, _0x238d14, _0x4421ea);
  } else {
    setImageUploadInProgress(false);
  }
});
mp.events.add("Client_ImageUploadResult", _0x33c3a3 => {
  setImageUploadInProgress(false);
  mp.events.call("client_getScreenShot", _0x33c3a3);
});
mp.events.add("Client_ImageUploadDenied", () => {
  setImageUploadInProgress(false);
  main_browser.execute("APPS.state.hud.photo_to_load = '';");
});
mp.events.add("Client_TakeAPhoto", () => {
  if (!!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500) && !global.isImageUploadInProgress && startTakingScreenShot != 1) {
    lastCheck = new Date().getTime();
    atHeadshotForCertificate = false;
    main_browser.execute("APPS.state.photo.show = false;");
    mp.events.call("Disablechat");
    mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "FocusOut", 2000, true);
    PlayAudioSound("Camera_Shoot", "Phone_Soundset_Franklin");
    setTimeout(() => {
      if (!MobileCameraOpened) {
        return startTakingScreenShot = false;
      }
      mp.gui.takeScreenshot("temp.jpg", 0, 60, 0);
      startTakingScreenShot = true;
      setTimeout(() => {
        if (!MobileCameraOpened) {
          return startTakingScreenShot = false;
        }
        mp.events.callRemote("Server_PrepareImageUpload", at_mugshot_photo || 0);
        main_browser.execute("APPS.state.hud.mugshot_id = " + at_mugshot_photo + ";");
        main_browser.execute("APPS.state.hud.photo_to_load = 'http://screenshots/temp.jpg?ts=" + Date.now() + "';");
        startTakingScreenShot = false;
        main_browser.execute("APPS.state.photo.show = true;");
      }, 2000);
    }, 200);
  }
});
global.last_photo_url = "";
mp.events.add("client_getScreenShot", _0x4c648d => {
  if (MobileCameraOpened) {
    _0x4c648d = JSON.parse(_0x4c648d);
    last_photo_url = "" + _0x4c648d.name;
    if (TakeForbesPlayerTopPhoto) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 9;");
    } else if (TakeVehicleTopPhoto) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 12;");
    } else if (TakeFamilyTopPhoto) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 7;");
    } else if (is_vehicle_fine_photo) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 6;");
    } else if (is_board_item_photo) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 15;");
    } else if (at_mugshot_photo) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + at_mugshot_photo + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 5;");
    } else if (atHeadshotForCertificate) {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + localplayer.real_id + "';");
      main_browser.execute("APPS.state.photo.page = 30;");
    } else {
      main_browser.execute("APPS.state.photo.photo_url = '" + server_number + "_" + localplayer.real_id + "_" + last_photo_url + "';");
      main_browser.execute("APPS.state.photo.page = 1;");
    }
    mp.gui.cursor.show(true, true);
  }
});
mp.events.add("Client_SavePictureInInventory", () => {
  if (!!last_photo_url && !!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (bChristmas2025) {
      mp.events.callRemote("Server_SavePictureInInventory", last_photo_url, bAtChristmasPhoto);
    } else {
      mp.events.callRemote("Server_SavePictureInInventory", last_photo_url);
    }
  }
});
mp.events.add("Client_SavePictureToPoliceKPK", () => {
  if (last_photo_url && at_mugshot_photo && MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SavePictureInPoliceKPK", at_mugshot_photo, last_photo_url);
  }
});
mp.events.add("Client_CloseMobileCamera", () => {
  if (MobileCameraOpened) {
    CloseMobileCamera();
  }
});
mp.events.add("Client_OpenMobilePhotoFullScreen", (_0x540ead, _0x3aef7a) => {
  CloseInv();
  _0x3aef7a = server_number + "_" + _0x540ead + "_" + _0x3aef7a;
  OpenMobileCamera(3, _0x3aef7a);
});
mp.events.add("Client_ChangeCameraMode", () => {
  if (!!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500) && (cameraMode !== 0 || !(new Date().getTime() - lastCheck < 2000))) {
    lastCheck = new Date().getTime();
    if (cameraMode === 0) {
      mp.events.callRemote("Server_EndSelfieMode");
    }
    cameraMode++;
    if (cameraMode > 2) {
      cameraMode = 0;
    }
    if (cameraMode === 0) {
      cam_view = 0;
      mp.game.cam.setFollowPedCamViewMode(2);
      mp.events.callRemote("Server_SetSelfieMode");
    } else if (cameraMode === 1) {
      cam_view = 1;
    } else if (cameraMode === 2) {
      cam_view = 2;
    }
    main_browser.execute("this.AppComponents.photo.cameraMode = " + cameraMode + ";");
  }
});
mp.events.add("Client_PublishPhoto", (_0xfcf3f3, _0x262119) => {
  if (!!last_photo_url && !!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    if (is_winter) {
      mp.events.callRemote("Server_TookPhotoOfChristmasTree");
    }
    if (bChristmas2025) {
      mp.events.callRemote("Server_PublishPhoto", _0xfcf3f3, last_photo_url, _0x262119, bAtChristmasPhoto);
    } else {
      mp.events.callRemote("Server_PublishPhoto", _0xfcf3f3, last_photo_url, _0x262119);
    }
  }
});
mp.events.add("Client_PublishFamilyPhoto", _0x59f834 => {
  if (!!last_photo_url && !!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PublishFamilyPhotoForbes", _0x59f834, last_photo_url);
  }
});
mp.events.add("Client_PublishForbesPlayerPhoto", _0x1ac644 => {
  if (!!last_photo_url && !!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PublishForbesPlayerPhoto", _0x1ac644, last_photo_url);
  }
});
mp.events.add("Client_PublishForbesVehiclePhoto", _0x34741d => {
  if (!!last_photo_url && !!MobileCameraOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PublishForbesVehiclePhoto", _0x34741d, last_photo_url);
  }
});
let screenResolution = false;
let takingScreenshot = false;
let headshotTexture = false;
let screenshotBrowser = false;
let frameCount = 0;
var atHeadshotForCertificate = false;
let uniqueName;
function HeadshotTaken() {
  if (startTakingScreenShot != 1) {
    main_browser.execute("APPS.state.photo.show = false;");
    mp.events.call("Disablechat");
    atHeadshotForCertificate = true;
    main_browser.execute("APPS.state.hud.mugshot_id = " + localplayer.real_id + ";");
    main_browser.execute("APPS.state.hud.screenResolution = " + JSON.stringify(screenResolution) + ";");
    main_browser.execute("APPS.state.hud.photo_to_load = 'http://screenshots/player_headshot" + uniqueName + ".jpg?ts=" + Date.now() + "';");
    startTakingScreenShot = false;
    main_browser.execute("APPS.state.photo.show = true;");
  }
}
mp.events.add("Client_TakeCertificatePhoto", () => {
  if (!global.isImageUploadInProgress && !startTakingScreenShot && !takingScreenshot) {
    atHeadshotForCertificate = false;
    at_mugshot_photo = 0;
    EndConversationFinally(true);
    main_browser.execute("APPS.state.npc_dialog.show = false;");
    main_browser.execute("APPS.state.hud_yesno.show = false; APPS.state.hud_yesno.opened = false;");
    mp.game.cam.renderScriptCams(false, false, 0, true, false);
    MobileCameraOpened = true;
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.show(false, false);
    setTimeout(() => {
      if (MobileCameraOpened && !takingScreenshot && !startTakingScreenShot) {
        frameCount = 0;
        if (pedHeadShot) {
          try {
            mp.game.invoke("0x96B1361D9B24C2FF", pedHeadShot);
          } catch (_0x2e3ef9) {}
          pedHeadShot = null;
        }
        pedHeadShot = mp.players.local.registerheadshot();
        screenResolution = mp.game.graphics.getScreenActiveResolution(100, 100);
        takingScreenshot = true;
      }
    }, 800);
  }
});
mp.events.add("render", () => {
  var _0x30fcb5;
  if (takingScreenshot) {
    if (mp.game.ped.isPedheadshotValid(pedHeadShot) && mp.game.invoke("0xA0A9668F158129A2", pedHeadShot) && mp.game.ped.isPedheadshotReady(pedHeadShot) && mp.game.invoke("0x7085228842B13A67", pedHeadShot)) {
      headshotTexture = mp.game.ped.getPedheadshotTxdString(pedHeadShot);
      mp.game.graphics.drawSprite(headshotTexture, headshotTexture, 0.0225, 0.0425, 0.05, 0.09, 0, 255, 255, 255, 1000);
      if (frameCount == 1) {
        PlayAudioSound("Camera_Shoot", "Phone_Soundset_Franklin");
        uniqueName = Date.now();
        mp.gui.takeScreenshot("player_headshot" + uniqueName + ".jpg", 0, 100, 0);
        takingScreenshot = false;
        main_browser.execute("APPS.state.photo.photo_url = null;");
        main_browser.execute("APPS.state.photo.page = 30;");
        main_browser.execute("APPS.state.photo.show = true;");
        setTimeout(() => HeadshotTaken(), 1000);
      }
      frameCount++;
    }
  } else if (frameCount == 2) {
    frameCount = 0;
    _0x30fcb5 = pedHeadShot;
    setTimeout(() => {
      mp.game.invoke("0x96B1361D9B24C2FF", _0x30fcb5);
    }, 1000);
  }
});
global.InGrandOpened = false;
mp.events.add("Client_IG_OpenApp", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_OpenApp");
  }
});
mp.events.add("Client_IG_SwitchFeedTab", _0x3e6861 => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_SwitchFeedTab", _0x3e6861);
  }
});
mp.events.add("Client_IG_SetFeedTabOnly", _0xc98bf3 => {
  if (InGrandOpened) {
    mp.events.callRemote("Server_IG_SetFeedTab", _0xc98bf3);
  }
});
mp.events.add("Client_IG_SearchByPid", _0x4c89ce => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    _0x4c89ce = parseInt(_0x4c89ce);
    if (!isNaN(_0x4c89ce) && !(_0x4c89ce <= 0)) {
      mp.events.callRemote("Server_IG_SearchByPid", _0x4c89ce);
    }
  }
});
mp.events.add("Client_IG_LoadMoreFeed", () => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_LoadMoreFeed");
  }
});
mp.events.add("Client_IG_ToggleLike", _0x525282 => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_ToggleLike", _0x525282);
  }
});
mp.events.add("Client_IG_DeletePost", _0x544055 => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_DeletePost", _0x544055);
  }
});
mp.events.add("Client_IG_LoadComments", _0x37911b => {
  if (InGrandOpened) {
    mp.events.callRemote("Server_IG_LoadComments", _0x37911b);
  }
});
mp.events.add("Client_IG_AddComment", (_0x6a7681, _0x59454b) => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_AddComment", _0x6a7681, _0x59454b);
  }
});
mp.events.add("Client_IG_LoadMoreComments", _0x223c9b => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_LoadMoreComments", _0x223c9b);
  }
});
mp.events.add("Client_IG_LoadProfile", _0x75f58 => {
  if (InGrandOpened) {
    mp.events.callRemote("Server_IG_LoadProfile", _0x75f58);
  }
});
mp.events.add("Client_IG_LoadSelfProfile", () => {
  if (InGrandOpened) {
    mp.events.callRemote("Server_IG_LoadProfile", localplayer.real_id);
  }
});
mp.events.add("Client_IG_LoadMoreProfilePosts", _0x27c8a4 => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_LoadMoreProfilePosts", _0x27c8a4);
  }
});
mp.events.add("Client_IG_ToggleSubscription", _0x2ad562 => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_ToggleSubscription", _0x2ad562);
  }
});
mp.events.add("Client_IG_DeleteComment", _0x5d8d7e => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_DeleteComment", _0x5d8d7e);
  }
});
mp.events.add("Client_IG_GetPrize", () => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_IG_GetPrize");
  }
});
mp.events.add("Client_IG_ShowIngrandCase", () => {
  CloseMobile();
  mp.events.callRemote("Server_GotoContainers", 446);
});
mp.events.add("Client_OpenIngrandCase", () => {
  CloseMobileCamera();
  mp.events.callRemote("Server_GotoContainers", 446);
});
mp.events.add("Client_IG_FullSizePhoto", _0x4a299a => {
  if (!!InGrandOpened && !(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    OpenMobileCamera(3, _0x4a299a);
  }
});
let donate_roulette_timeout = null;
mp.events.add("Client_IG_LikesNotification", _0x366e88 => {
  if (loggedin) {
    if (donate_roulette_timeout) {
      main_browser.execute("APPS.state.hud.likes_notif = false;");
      clearTimeout(donate_roulette_timeout);
      donate_roulette_timeout = null;
    }
    PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
    main_browser.execute("APPS.state.hud.likes_notif = true;");
    main_browser.execute("APPS.state.hud.likesphotourl = '" + _0x366e88 + "';");
    donate_roulette_timeout = setTimeout(() => {
      donate_roulette_timeout = null;
      main_browser.execute("APPS.state.hud.likes_notif = false;");
    }, 5000);
  }
});
mp.events.add("Client_IG_SetFeed", (_0x5552dd, _0x3845b2, _0x2bb3aa, _0x20da4b) => {
  main_browser.execute("APPS.state.hud_mobile.all_posts = " + JSON.stringify(_0x5552dd));
  main_browser.execute("APPS.state.hud_mobile.top_posts = " + JSON.stringify(_0x3845b2 || []));
  main_browser.execute("APPS.state.hud_mobile.ingrand_prize_received = " + _0x2bb3aa + ";");
  main_browser.execute("APPS.state.hud_mobile.ingrand_prize_can_receive = " + _0x20da4b + ";");
  main_browser.execute("APPS.state.hud_mobile.ingrand_need_to_show = 1;");
  InGrandOpened = true;
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_IG_SetFeedTab", (_0x56351d, _0x27a45e) => {
  if (InGrandOpened) {
    main_browser.execute("APPS.state.hud_mobile.all_posts = " + JSON.stringify(_0x56351d));
  }
});
mp.events.add("Client_IG_AppendFeed", _0x5795e6 => {
  if (InGrandOpened && _0x5795e6 && _0x5795e6.length) {
    main_browser.execute("APPS.state.hud_mobile.all_posts = APPS.state.hud_mobile.all_posts.concat(" + JSON.stringify(_0x5795e6) + ")");
  }
});
mp.events.add("Client_IG_SetSelfProfile", _0x2e552f => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.updateSelfProfile(" + JSON.stringify(_0x2e552f) + ");");
  }
});
mp.events.add("Client_IG_SetProfile", _0x12a839 => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.updateOverlayProfile(" + JSON.stringify(_0x12a839) + ");");
  }
});
mp.events.add("Client_IG_AppendProfilePosts", (_0x32ff93, _0x7939c9) => {
  if (InGrandOpened) {
    if (_0x7939c9) {
      main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.appendSelfProfilePosts(" + JSON.stringify(_0x32ff93) + ");");
    } else {
      main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.appendOverlayProfilePosts(" + JSON.stringify(_0x32ff93) + ");");
    }
  }
});
mp.events.add("Client_IG_SetComments", _0x2ecc30 => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandComments) AppComponents.ingrandComments.pushComments(" + JSON.stringify(_0x2ecc30) + ");");
  }
});
mp.events.add("Client_IG_AppendComments", _0x37e601 => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandComments) AppComponents.ingrandComments.pushComments(" + JSON.stringify(_0x37e601) + ");");
  }
});
mp.events.add("Client_IG_CommentAdded", (_0x30f1a5, _0x3ad9de) => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandComments) AppComponents.ingrandComments.onCommentAdded(" + JSON.stringify(_0x3ad9de) + ", " + _0x30f1a5 + ");");
  }
});
mp.events.add("Client_IG_CommentDeleted", (_0x43602a, _0x4ed250) => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandComments) AppComponents.ingrandComments.onCommentDeleted(" + _0x4ed250 + ", " + _0x43602a + ");");
  }
});
mp.events.add("Client_IG_LikeUpdated", (_0x2356c0, _0x5c825c) => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.onLikeUpdated(" + _0x2356c0 + ", " + _0x5c825c + ");");
  }
});
mp.events.add("Client_IG_SubscriptionUpdated", (_0x92c8e5, _0x4877b8) => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.updateSubscription(" + _0x92c8e5 + ", " + _0x4877b8 + ");");
  }
});
mp.events.add("Client_IG_PostDeleted", _0x120c0e => {
  if (InGrandOpened) {
    main_browser.execute("if(AppComponents.ingrandApp) AppComponents.ingrandApp.onPostDeleted(" + _0x120c0e + ");");
    main_browser.execute("var tp = APPS.state.hud_mobile.top_posts; if(tp) { var i = tp.findIndex(function(p){return p.id===" + _0x120c0e + "}); if(i!==-1) tp.splice(i,1); }");
  }
});
mp.events.add("Client_IG_PrizeReceived", () => {
  if (InGrandOpened) {
    main_browser.execute("APPS.state.hud_mobile.ingrand_prize_received = true;");
    main_browser.execute("APPS.state.hud_mobile.ingrand_prize_can_receive = false;");
  }
});