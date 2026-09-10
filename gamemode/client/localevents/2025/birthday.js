global.birthdayDesignOpened = false;
global.bAtBirthdayCake = false;
let birthdayColshape = null;
let birthday3dText = null;
let text = "";
let birthdayMarker = null;
let birthdayBlip = null;
let correct_step = 0;
const CAKE_BUILDING_POSITION = new mp.Vector3(183.28, -970.614, 30.092);
const BOX_POSITION = new mp.Vector3(181.146, -973.491, 30.092);
const OVEN_POSITION = new mp.Vector3(188.62, -974.837, 30.092);
const TABEL_POSITION = new mp.Vector3(193.021, -969.965, 30.092);
const BERRIES_POSITION = new mp.Vector3(187.001, -979.652, 30.092);
const CANDLES_POSITION = new mp.Vector3(187.371, -966.747, 30.092);
let cake_obj_plate;
let cake_obj_raw1;
let cake_obj_raw2;
let cake_obj_raw3;
let cake_obj_cream1;
let cake_obj_cream2;
let cake_obj_cream3;
let cake_obj_strawberry1;
let cake_obj_strawberry2;
let cake_obj_canldes1;
let cake_obj_canldes2;
let cake_obj_canldes3;
let temp_cake_obj;
let cake_timeout;
function destroyCakeObjects() {
  if (cake_obj_plate != null) {
    cake_obj_plate.destroy();
    cake_obj_plate = undefined;
  }
  if (cake_obj_raw1 != null) {
    cake_obj_raw1.destroy();
    cake_obj_raw1 = undefined;
  }
  if (cake_obj_raw2 != null) {
    cake_obj_raw2.destroy();
    cake_obj_raw2 = undefined;
  }
  if (cake_obj_raw3 != null) {
    cake_obj_raw3.destroy();
    cake_obj_raw3 = undefined;
  }
  if (cake_obj_cream1 != null) {
    cake_obj_cream1.destroy();
    cake_obj_cream1 = undefined;
  }
  if (cake_obj_cream2 != null) {
    cake_obj_cream2.destroy();
    cake_obj_cream2 = undefined;
  }
  if (cake_obj_cream3 != null) {
    cake_obj_cream3.destroy();
    cake_obj_cream3 = undefined;
  }
  if (cake_obj_strawberry1 != null) {
    cake_obj_strawberry1.destroy();
    cake_obj_strawberry1 = undefined;
  }
  if (cake_obj_strawberry2 != null) {
    cake_obj_strawberry2.destroy();
    cake_obj_strawberry2 = undefined;
  }
  if (cake_obj_canldes1 != null) {
    cake_obj_canldes1.destroy();
    cake_obj_canldes1 = undefined;
  }
  if (cake_obj_canldes2 != null) {
    cake_obj_canldes2.destroy();
    cake_obj_canldes2 = undefined;
  }
  if (cake_obj_canldes3 != null) {
    cake_obj_canldes3.destroy();
    cake_obj_canldes3 = undefined;
  }
  if (temp_cake_obj != null) {
    temp_cake_obj.destroy();
    temp_cake_obj = undefined;
  }
  if (cake_timeout != null) {
    clearTimeout(cake_timeout);
    cake_timeout = undefined;
  }
}
function cakeBuildingStep(_0x4343c2) {
  correct_step = _0x4343c2;
  switch (_0x4343c2) {
    case 1:
    case 6:
    case 11:
      text = language.Коробка[curr_lang];
      createColshapeAndMarker(BOX_POSITION, 1);
      QuestShow(language["Достать коржик из коробки"][curr_lang], language["Отправляйтесь к коробке"][curr_lang]);
      break;
    case 2:
    case 7:
    case 12:
      text = language.Печь[curr_lang];
      createColshapeAndMarker(OVEN_POSITION, 1);
      QuestShow(language["Запечь коржик"][curr_lang], language["Отправляйтесь к печке"][curr_lang]);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step);
      break;
    case 3:
    case 8:
    case 13:
      text = language.Печь[curr_lang];
      createColshapeAndMarker(OVEN_POSITION, 1);
      QuestShow(language["Вынуть коржик из печки"][curr_lang], language["Отправляйтесь к печке"][curr_lang]);
      break;
    case 4:
    case 9:
    case 14:
      text = language["Стол с кремом"][curr_lang];
      createColshapeAndMarker(TABEL_POSITION, 1);
      QuestShow(language["Отнести коржик к столу"][curr_lang], language["Украсьте коржик кремом"][curr_lang]);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step);
      break;
    case 5:
    case 10:
    case 15:
      text = language.Торт[curr_lang];
      createColshapeAndMarker(CAKE_BUILDING_POSITION, 1);
      QuestShow(language["Отнести коржик к праздничному столу"][curr_lang], language["Отправляйтесь к праздничному столу"][curr_lang]);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step);
      break;
    case 16:
      text = language.Ягоды[curr_lang];
      createColshapeAndMarker(BERRIES_POSITION, 1);
      QuestShow(language["Взять ягоды"][curr_lang], language["Отправляйтесь за ягодами"][curr_lang]);
      break;
    case 17:
      text = language.Торт[curr_lang];
      createColshapeAndMarker(CAKE_BUILDING_POSITION, 1);
      QuestShow(language["Отнести ягоды на торт"][curr_lang], language["Отправляйтесь к праздничному столу"][curr_lang]);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step);
      break;
    case 18:
      text = language["Праздничные свечи"][curr_lang];
      createColshapeAndMarker(CANDLES_POSITION, 1);
      QuestShow(language["Взять свечи"][curr_lang], language["Отправляйтесь за свечами"][curr_lang]);
      break;
    case 19:
      text = language.Торт[curr_lang];
      createColshapeAndMarker(CAKE_BUILDING_POSITION, 1);
      QuestShow(language["Поставить свечи на торт"][curr_lang], language["Отправляйтесь к праздничному столу"][curr_lang]);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step);
  }
}
function createColshapeAndMarker(_0x2f4461, _0x3b0c64) {
  birthdayColshape = mp.colshapes.newSphere(_0x2f4461.x, _0x2f4461.y, _0x2f4461.z, _0x3b0c64, localplayer.dimension);
  birthdayColshape.bBirthday = true;
  birthdayMarker = mp.markers.new(1, new mp.Vector3(_0x2f4461.x, _0x2f4461.y, _0x2f4461.z - 1), _0x3b0c64, {
    color: [246, 225, 0, 255],
    visible: true,
    dimension: localplayer.dimension
  });
  birthdayBlip = mp.blips.new(1, new mp.Vector3(_0x2f4461.x, _0x2f4461.y, _0x2f4461.z), {
    color: 83,
    shortRange: true,
    dimension: localplayer.dimension
  });
  if (text) {
    birthday3dText = mp.labels.new(text, new mp.Vector3(_0x2f4461.x, _0x2f4461.y, _0x2f4461.z), {
      los: true,
      font: 0,
      drawDistance: 10,
      color: [255, 255, 255, 255],
      dimension: 0
    });
  }
}
function completeCakeBuilding() {
  [new mp.Vector3(CAKE_BUILDING_POSITION.x - 5, CAKE_BUILDING_POSITION.y - 5, CAKE_BUILDING_POSITION.z), new mp.Vector3(CAKE_BUILDING_POSITION.x + 5, CAKE_BUILDING_POSITION.y + 5, CAKE_BUILDING_POSITION.z), new mp.Vector3(CAKE_BUILDING_POSITION.x + 5, CAKE_BUILDING_POSITION.y - 5, CAKE_BUILDING_POSITION.z), new mp.Vector3(CAKE_BUILDING_POSITION.x - 5, CAKE_BUILDING_POSITION.y + 5, CAKE_BUILDING_POSITION.z)].forEach((_0x1dd08a, _0x135a0b) => {
    let _0x5f5a54 = 0;
    let _0x206184 = null;
    setTimeout(() => {
      _0x206184 = setInterval(function () {
        let _0x2edb68 = _0x1dd08a.z + 20;
        let _0x3a2911 = _0x1dd08a.x + Math.random() * 15;
        let _0x183caa = _0x1dd08a.y + Math.random() * 15;
        const _0x12d20b = new mp.Vector3(_0x3a2911, _0x183caa, _0x2edb68);
        const _0x2e5f40 = Math.floor(Math.random() * 4);
        let _0x19c14d = "scr_firework_xmas_ring_burst_rgw";
        if (_0x2e5f40 === 1) {
          _0x19c14d = "scr_firework_xmas_burst_rgw";
        } else if (_0x2e5f40 === 2) {
          _0x19c14d = "scr_firework_xmas_repeat_burst_rgw";
        } else if (_0x2e5f40 === 3) {
          _0x19c14d = "scr_firework_xmas_spiral_burst_rgw";
        }
        StartParticleEffect("scr_indep_fireworks", "scr_indep_firework_starburst", _0x1dd08a, 10000);
        StartParticleEffect("proj_xmas_firework", _0x19c14d, _0x12d20b, 10000);
        StartParticleEffect("scr_rcpaparazzo1", "scr_mich4_firework_burst_spawn", _0x12d20b, 10000);
        _0x5f5a54++;
        if (_0x5f5a54 >= 10 && _0x206184) {
          clearInterval(_0x206184);
          _0x206184 = null;
        }
      }, 2000);
    }, _0x135a0b * 500);
  });
}
mp.events.add("Client_OpenBirthdayMainDesign", (_0x31bedd, _0x49be53, _0xaf6e8e) => {
  if (!!loggedin && !chatActive && !birthdayDesignOpened && !GlobalCheck()) {
    main_browser.execute("\n        APPS.state.birthday2025.balance = " + _0x31bedd + ";\n        APPS.state.birthday2025.timeLeft = " + _0x49be53 + ";\n        APPS.state.birthday2025.bigPrizeStatus = " + _0xaf6e8e + ";\n        APPS.state.birthday2025.show = true;\n    ");
    birthdayDesignOpened = true;
    SwitchHUDToDesign(true);
  }
});
mp.events.add("Client_UpdateBirthdayDesign", _0x35af17 => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    main_browser.execute("APPS.state.birthday2025.balance = " + _0x35af17 + ";");
  }
});
mp.events.add("Client_CloseBirthdayMainDesign", () => {
  closeBirthdayDesign();
});
global.closeBirthdayDesign = function () {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    main_browser.execute("APPS.state.birthday2025.show = false;");
    birthdayDesignOpened = false;
    SwitchHUDToDesign(false);
  }
};
mp.events.add("Client_BirthdayGPSToBigPrize", () => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    closeBirthdayDesign();
    SetGPSLocation(184.209, -982.502, 30.092, true);
  }
});
mp.events.add("Client_BuyBirthdayPrize", _0x5c0535 => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_BuyBirthdayPrize", _0x5c0535);
    }
  }
});
mp.events.add("Client_BirthdayPrizeInfo", _0x48636d => {
  if (loggedin && !chatActive && birthdayDesignOpened) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      closeBirthdayDesign();
      mp.events.callRemote("Server_OpenRouletteRewards", _0x48636d);
    }
  }
});
mp.events.add("Client_StartCakeBuildingStep", () => {
  cakeBuildingStep(1);
});
mp.events.add("Client_CancelCakeBuilding", () => {
  correct_step = 0;
  if (birthdayColshape != null) {
    birthdayColshape.destroy();
    birthdayColshape = null;
  }
  if (birthdayMarker != null) {
    birthdayMarker.destroy();
    birthdayMarker = null;
  }
  if (birthdayBlip != null) {
    birthdayBlip.destroy();
    birthdayBlip = null;
  }
  if (birthday3dText != null) {
    birthday3dText.destroy();
    birthday3dText = null;
  }
  destroyCakeObjects();
  QuestClose();
});
global.birthdayEndLongInteract = function () {
  if (birthdayColshape != null) {
    birthdayColshape.destroy();
    birthdayColshape = null;
  }
  if (birthdayMarker != null) {
    birthdayMarker.destroy();
    birthdayMarker = null;
  }
  if (birthday3dText != null) {
    birthday3dText.destroy();
    birthday3dText = null;
  }
  switch (correct_step) {
    case 1:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      cakeBuildingStep(2);
      break;
    case 2:
      ShowNotification(language["Ожидайте 10 секунд"][curr_lang], 2);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      temp_cake_obj = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw1"), new mp.Vector3(190.42, -975.88, 30.0919), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      setTimeout(() => {
        PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
        cakeBuildingStep(3);
      }, 10000);
      break;
    case 3:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      if (temp_cake_obj != null) {
        temp_cake_obj.destroy();
        temp_cake_obj = undefined;
      }
      cakeBuildingStep(4);
      break;
    case 4:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cakeBuildingStep(5);
      break;
    case 5:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cake_obj_plate = mp.objects.new(mp.game.joaat("grand_anniversary_cake_plate"), new mp.Vector3(182.387466, -970.0044, 29.9923077), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_raw1 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw1"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_cream1 = mp.objects.new(mp.game.joaat("grand_anniversary_cream1"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cakeBuildingStep(6);
      break;
    case 6:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      cakeBuildingStep(7);
      break;
    case 7:
      ShowNotification(language["Ожидайте 10 секунд"][curr_lang], 2);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      temp_cake_obj = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw1"), new mp.Vector3(190.42, -975.88, 30.0919), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_timeout = setTimeout(() => {
        PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
        cakeBuildingStep(8);
      }, 10000);
      break;
    case 8:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      if (temp_cake_obj != null) {
        temp_cake_obj.destroy();
        temp_cake_obj = undefined;
      }
      cakeBuildingStep(9);
      break;
    case 9:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cakeBuildingStep(10);
      break;
    case 10:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cake_obj_raw2 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw2"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_cream2 = mp.objects.new(mp.game.joaat("grand_anniversary_cream2"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cakeBuildingStep(11);
      break;
    case 11:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      cakeBuildingStep(12);
      break;
    case 12:
      ShowNotification(language["Ожидайте 10 секунд"][curr_lang], 2);
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      temp_cake_obj = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw1"), new mp.Vector3(190.42, -975.88, 30.0919), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_timeout = setTimeout(() => {
        PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
        cakeBuildingStep(13);
      }, 10000);
      break;
    case 13:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      if (temp_cake_obj != null) {
        temp_cake_obj.destroy();
        temp_cake_obj = undefined;
      }
      cakeBuildingStep(14);
      break;
    case 14:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cakeBuildingStep(15);
      break;
    case 15:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cake_obj_raw3 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_raw3"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_cream3 = mp.objects.new(mp.game.joaat("grand_anniversary_cream3"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cakeBuildingStep(16);
      break;
    case 16:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      cakeBuildingStep(17);
      break;
    case 17:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      cake_obj_strawberry1 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_strawberry1"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_strawberry2 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_strawberry2"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cakeBuildingStep(18);
      break;
    case 18:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      cakeBuildingStep(19);
      break;
    case 19:
      PlayAudioSound("Enter_1st", "GTAO_FM_Events_Soundset");
      mp.events.callRemote("Server_PlayCakeBuildingAnimation", correct_step, true);
      mp.events.callRemote("Server_CompleteCakeBuilding");
      cake_obj_canldes1 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_canldes1"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_canldes2 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_canldes2"), new mp.Vector3(182.387466, -970.0044, 30.0039673), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      cake_obj_canldes3 = mp.objects.new(mp.game.joaat("grand_anniversary_cake_logo2"), new mp.Vector3(182.387466, -970.0044, 30.88931), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.dimension
      });
      QuestClose();
  }
};
mp.events.add("Client_CompleteCakeBuilding", () => {
  if (loggedin) {
    completeCakeBuilding();
  }
});
mp.events.add("playerEnterColshape", _0x407e92 => {
  if (_0x407e92 && _0x407e92.bBirthday) {
    main_browser.execute("APPS.state.hud.interact = 2;");
    bAtBirthdayCake = true;
    if (birthdayBlip != null) {
      birthdayBlip.destroy();
      birthdayBlip = null;
    }
  }
});
mp.events.add("playerExitColshape", _0x1ff8c4 => {
  if (_0x1ff8c4 && _0x1ff8c4.bBirthday) {
    main_browser.execute("APPS.state.hud.interact = false;");
    bAtBirthdayCake = false;
  }
});
mp.events.add("Client_RequestOpenDonateRoulette", _0x5889d4 => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      closeBirthdayDesign();
      mp.events.callRemote("Server_RequestOpenDonateRoulette", _0x5889d4);
    }
  }
});
mp.blips.new(781, new mp.Vector3(184.209, -982.502, 30.092), {
  name: language["Большой подарок"][curr_lang],
  scale: 1,
  color: 1,
  drawDistance: 25,
  shortRange: true
});