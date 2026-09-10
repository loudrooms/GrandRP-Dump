global.circleOpen = false;
let cirlcechosen = null;
let isNewVersionCircleMenu = true;
function isSourcePlayerDeath() {
  return !!SelectedPlayer && !!SelectedPlayer.dead_state && (CloseInteractionCircle(), mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6), true);
}
function isGreenZone(_0x2a6e92 = "") {
  return !!in_greenzone && (CloseInteractionCircle(), _0x2a6e92 == "rob" ? mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6) : _0x2a6e92 == "theftVehicle" ? mp.game.ui.notifications.show(language["Вы не можете угонять транспорт в зеленой зоне"][curr_lang], false, 0, 6) : mp.game.ui.notifications.show(language["Bы нe мoжeтe выпoлнять этo дeйcтвиe в зeлeнoй зoнe"][curr_lang], false, 0, 6), true);
}
function changeVehicleSpeedLimit() {
  if (speedlimit == 0) {
    speedlimit = 1;
  } else if (speedlimit >= 1 && speedlimit < 7) {
    speedlimit++;
  } else if (speedlimit == 7) {
    speedlimit = 0;
  }
  switch (speedlimit) {
    case 0:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Установить скоростной лимит"][curr_lang] + "';");
      break;
    case 1:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 60 км/ч"][curr_lang] + "';");
      break;
    case 2:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 70 км/ч"][curr_lang] + "';");
      break;
    case 3:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 80 км/ч"][curr_lang] + "';");
      break;
    case 4:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 90 км/ч"][curr_lang] + "';");
      break;
    case 5:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 100 км/ч"][curr_lang] + "';");
      break;
    case 6:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 110 км/ч"][curr_lang] + "';");
      break;
    case 7:
      main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + language["Скоростной лимит 120 км/ч"][curr_lang] + "';");
  }
  if (cruize_state == 1) {
    cruize_state = 2;
    toggle_cruize();
  }
  SetVehicleMaxSpeed(speedlimit);
  mp.events.callRemote("SetSpeedLimit", speedlimit);
}
function fastenBelt() {
  if (localplayer.vehicle) {
    if (mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABike(localplayer.vehicle.model)) {
      CloseInteractionCircle();
      mp.game.ui.notifications.show(language["В данном транспорте нет ремня безопасности"][curr_lang], false, 0, 6);
      return;
    }
    localplayer.setConfigFlag(32, false);
    CloseInteractionCircle();
    main_browser.execute("APPS.state.hud.belt_notif = true;");
    main_browser.execute("APPS.state.hud.belt = true;");
    setTimeout(() => {
      main_browser.execute("APPS.state.hud.belt_notif = false;");
    }, 2500);
  }
}
global.OpenCircle = function (_0x22f88e, _0x3ed043, _0x3c26fd = "", _0x463ef4 = "", _0x5dfa70 = "", _0x28e35c = "") {
  if (localplayer.cuffed) {
    return mp.game.ui.notifications.show(language["Bы зaкoвaны в нapyчники"][curr_lang], false, 0, 6);
  } else if (is_roped_hands) {
    return mp.game.ui.notifications.show(language["У Вас связаны руки"][curr_lang], false, 0, 6);
  } else {
    if (GlobalCheck() != 1 && !playerincapture) {
      PlayBaseAudio("g_menu_open");
      mp.gui.chat.activate(false);
      main_browser.execute("APPS.state.hud.circle_arg1 = '" + _0x3c26fd + "';");
      main_browser.execute("APPS.state.hud.circle_arg2 = '" + _0x463ef4 + "';");
      main_browser.execute("APPS.state.hud.circle_arg3 = '" + _0x5dfa70 + "';");
      main_browser.execute("APPS.state.hud.circle_arg4 = '" + _0x28e35c + "';");
      main_browser.execute("APPS.state.hud.circle_open = '" + _0x3ed043 + "';");
      cirlcechosen = _0x3ed043;
      circleOpen = true;
      mp.gui.cursor.show(true, true);
    }
    return;
  }
};
global.CloseCircle = function (_0xc9e52 = 0) {
  if (circleOpen && loggedin && !chatActive) {
    main_browser.execute("APPS.state.hud.circle_arg1 = '';");
    main_browser.execute("APPS.state.hud.circle_arg2 = '';");
    main_browser.execute("APPS.state.hud.circle_arg3 = '';");
    main_browser.execute("APPS.state.hud.circle_arg4 = '';");
    main_browser.execute("APPS.state.hud.circle_open = '';");
    if (_0xc9e52 == 1) {
      SelectedPlayer = null;
      SelectedType = 0;
    }
    cirlcechosen = null;
    circleOpen = false;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseCircle", () => {
  CloseCircle(1);
});
mp.events.add("CircleBack", () => {
  if (circleOpen && loggedin && !chatActive) {
    switch (cirlcechosen) {
      case "smi_action":
      case "gov_action":
      case "army_action":
      case "police_action":
      case "work":
      case "incar_leader":
      case "incar":
        CloseCircle();
        HintClose();
        break;
      case "passangers":
      case "car_windows":
        CloseCircle();
        mp.events.call("CarCircle", "incar");
        break;
      case "globalplayer_famnoorg":
      case "passangers2":
      case "globalplayer_leader":
      case "globalplayer_newbieorgfam":
      case "globalplayer_newbieorg":
      case "globalplayer_newbie":
      case "globalplayer":
      case "spin_bottle":
      case "police_radar":
      case "custom_chairs":
      case "hookah":
      case "personal_barrier":
      case "christmas_tree":
      case "collector_menu":
      case "vehicle_menu":
      case "vehicle_menu_police":
      case "vehicle_menu_gang":
        CloseCircle(1);
        HintClose();
        break;
      case "playerleader":
      case 15:
      case 16:
      case 17:
      case 18:
      case 14:
      case 13:
      case 12:
      case 11:
      case 10:
      case 9:
      case 8:
      case 7:
      case 4:
      case 3:
      case 2:
      case 1:
      case "pre_property":
      case "BasicAction":
      case "FamilyCircle":
      case "license":
        CloseCircle();
        OpenCorrectPlayerCircle();
        break;
      case "BasicAction_deals":
      case "BasicAction_illegals":
      case "interactive_action":
        CloseCircle();
        OpenCircle(2, "BasicAction");
        break;
      case "property_house":
      case "property_biz":
      case "property_transport":
        OpenCircle(1, "pre_property");
        break;
      case "camping":
      case "seed":
      case "weed":
      case "wholewheel":
        CloseCircle(1);
        if (at_instrument_play == 0) {
          HintClose();
        }
        break;
      case "dance_anim2":
      case "other_anim2":
      case "speech_anim":
      case "special_anim":
      case "sit_anim":
      case "other_anim":
      case "dance_anim":
        CloseCircle();
        OpenCircle(1, "animation_global");
        break;
      case "moods":
      case "animation_global":
      case "walk_styles":
        CloseCircle();
        OpenCircle(1, "wholewheel");
    }
  }
});
global.OpenCorrectPlayerCircle = function () {
  if (isNewVersionCircleMenu) {
    OpenInteractionCircle("playerInteractions");
  } else if (local_family && local_member) {
    OpenCircle(2, "globalplayer");
  } else if (local_family && !local_member) {
    OpenCircle(2, "globalplayer_famnoorg");
  } else if (!local_family && local_member) {
    OpenCircle(2, "globalplayer_leader");
  } else {
    OpenCircle(2, "globalplayer_newbie");
  }
};
global.OpenInCarCircle = function () {
  if (isNewVersionCircleMenu) {
    let _0x432ac7 = language["Установить скоростной лимит"][curr_lang];
    switch (speedlimit) {
      case 1:
        _0x432ac7 = language["Скоростной лимит 60 км/ч"][curr_lang];
        break;
      case 2:
        _0x432ac7 = language["Скоростной лимит 70 км/ч"][curr_lang];
        break;
      case 3:
        _0x432ac7 = language["Скоростной лимит 80 км/ч"][curr_lang];
        break;
      case 4:
        _0x432ac7 = language["Скоростной лимит 90 км/ч"][curr_lang];
        break;
      case 5:
        _0x432ac7 = language["Скоростной лимит 100 км/ч"][curr_lang];
        break;
      case 6:
        _0x432ac7 = language["Скоростной лимит 110 км/ч"][curr_lang];
        break;
      case 7:
        _0x432ac7 = language["Скоростной лимит 120 км/ч"][curr_lang];
    }
    OpenInteractionCircle("playerInVehicle", {
      arg1: _0x432ac7
    });
  } else {
    mp.events.call("CarCircle", "incar");
  }
};
mp.events.add("CircleEvent", _0x58f877 => {
  if (circleOpen && loggedin && !chatActive && !(new Date().getTime() - lastCheck < 500)) {
    if (SelectedPlayer && (SelectedType == 1 && !mp.players.exists(SelectedPlayer) || SelectedType == 2 && !mp.vehicles.exists(SelectedPlayer) || SelectedType == 3 && !mp.objects.exists(SelectedPlayer))) {
      return CloseCircle(1);
    }
    switch (cirlcechosen) {
      case "seed":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_GetSeedInformation", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_GetFarm_Seed", SelectedPlayer, 1);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("Server_GetFarm_Seed", SelectedPlayer, 2);
          CloseCircle(1);
          HintClose();
        }
        break;
      case "weed":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_Destroy_Weed", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_Collect_Weed", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        }
        break;
      case "billiard":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_Create_Pool_Game");
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_Pool_Join_Team", 1);
          CloseCircle(1);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("Server_Pool_Join_Team", 2);
          CloseCircle(1);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("Server_Delete_Pool_Game");
          CloseCircle(1);
        }
        break;
      case "police_radar":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_UsePoliceRadar", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_TakePoliceRadar", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "hookah":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_SmokeHookah", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_TakeHookah", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "personal_barrier":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_DestroyPersonalBarrier", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "christmas_tree":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_TakeChristmasTree", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "spin_bottle":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_SpinTheBottle", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_TakeTheBottle", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "custom_chairs":
        if (_0x58f877 == 1) {
          SitCustomChair(SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          GetCustomChair(SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "lottery_shop":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_OpenLotteryShop");
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_TakeLotteryShop");
          CloseCircle(1);
        }
        break;
      case "camping":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_Destroy_Camping", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        }
        break;
      case "fire_camping":
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_Destroy_Camping", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_Fry_Fish");
          CloseCircle(1);
          HintClose();
        }
        break;
      case "army_action":
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenKPK();
          HintClose();
          return;
        }
        if (_0x58f877 == 2) {
          CloseCircle();
          HintClose();
          mp.events.callRemote("Server_GetArmyCounts");
          return;
        }
        if (_0x58f877 == 3) {
          CloseCircle();
          mp.events.callRemote("CheckPoliceBarrier");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          mp.events.callRemote("Server_AlarmPolice", 0);
        }
        break;
      case "gov_action":
        CloseCircle();
        HintClose();
        if (_0x58f877 == 1) {
          OpenKPK();
          return;
        }
        if (_0x58f877 == 2) {
          mp.events.callRemote("CheckPoliceBarrier");
        }
        break;
      case "smi_action":
        if (_0x58f877 == 1) {
          CloseCircle();
          mp.events.callRemote("Check_AD");
        } else if (_0x58f877 == 2) {
          CloseCircle();
          mp.events.callRemote("Server_LauchDrone");
        }
        break;
      case "police_action":
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenKPK();
          HintClose();
          return;
        }
        if (_0x58f877 == 2) {
          CloseCircle();
          mp.events.callRemote("CheckPoliceBarrier");
        } else if (_0x58f877 == 3) {
          CloseCircle();
          mp.events.callRemote("Server_GetWeedPlace");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          if (!localplayer.vehicle) {
            return mp.game.ui.notifications.show(language["Вы должны находиться в транспорте"][curr_lang], false, 0, 6);
          }
          if (localplayer.vehicle.is_radar != 1) {
            return mp.game.ui.notifications.show(language["Ваш транспорт не оснащен радаром"][curr_lang], false, 0, 6);
          }
          if (is_radar_enabled) {
            is_radar_enabled = false;
            mp.game.ui.notifications.show(language["Вы выключили радар"][curr_lang], false, 0, 2);
          } else {
            is_radar_enabled = true;
            mp.game.ui.notifications.show(language["Вы включили радар"][curr_lang], false, 0, 2);
          }
        } else if (_0x58f877 == 5) {
          CloseCircle();
          mp.events.callRemote("Server_LauchDrone");
        } else if (_0x58f877 == 6) {
          CloseCircle();
          mp.events.callRemote("Server_ChoosePoliceTape");
        } else if (_0x58f877 == 7) {
          CloseCircle();
          mp.events.callRemote("Server_SetPoliceRadar");
        } else if (_0x58f877 == 8) {
          CloseCircle();
          mp.events.callRemote("Server_RequestContrabandMachinePosition");
        }
        break;
      case "FamilyCircle":
        if (!SelectedPlayer) {
          CloseCircle(1);
          return HintClose();
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          CloseCircle(1);
          return HintClose();
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "InviteFam", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "UnInviteFam", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "FamRankUp", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "FamRankDown", SelectedPlayer);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "Sell_FamilyBusiness", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "TransferFamily", SelectedPlayer);
          CloseCircle(1);
          HintClose();
        } else if (_0x58f877 == 7) {
          if (in_greenzone) {
            mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("PlayerInteract", "Server_RobberyPlayer", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("PlayerInteract", "gang_TakeIllegal", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("PlayerInteract", "gang_TakeHostage", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "walk_styles":
        mp.events.callRemote("SetPlayerWalkStyle", _0x58f877);
        break;
      case "moods":
        mp.events.callRemote("SetPlayerMood", _0x58f877);
        break;
      case "dance_anim":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 1, _0x58f877);
        break;
      case "speech_anim":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 2, _0x58f877);
        break;
      case "special_anim":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 3, _0x58f877);
        break;
      case "sit_anim":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 4, _0x58f877);
        break;
      case "other_anim":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 5, _0x58f877);
        break;
      case "other_anim2":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 6, _0x58f877);
        break;
      case "dance_anim2":
        if (localplayer.isFalling()) {
          return;
        }
        mp.events.callRemote("SetPlayerAnimation", 7, _0x58f877);
        break;
      case "animation_global":
        if (_0x58f877 == 1) {
          CloseCircle();
          return OpenCircle(3, "dance_anim");
        }
        if (_0x58f877 == 2) {
          CloseCircle();
          return OpenCircle(3, "speech_anim");
        }
        if (_0x58f877 == 3) {
          CloseCircle();
          return OpenCircle(3, "special_anim");
        }
        if (_0x58f877 == 4) {
          CloseCircle();
          return OpenCircle(3, "sit_anim");
        }
        if (_0x58f877 == 5) {
          CloseCircle();
          return OpenCircle(3, "other_anim");
        }
        if (_0x58f877 == 6) {
          HintClose();
          CloseCircle(1);
          return OpenBindAnimationDesign();
        }
        if (_0x58f877 == 7) {
          CloseCircle();
          return OpenCircle(3, "dance_anim2");
        }
        if (_0x58f877 == 8) {
          CloseCircle();
          return OpenCircle(3, "other_anim2");
        }
        break;
      case "wholewheel":
        if (_0x58f877 == 1) {
          CloseCircle();
          return OpenCircle(1, "animation_global");
        }
        if (_0x58f877 == 2) {
          CloseCircle();
          return OpenCircle(3, "walk_styles");
        }
        if (_0x58f877 == 3) {
          CloseCircle();
          return OpenCircle(3, "moods");
        }
        break;
      case "collector_menu":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "leave_collector", SelectedPlayer, false);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "collector_team", SelectedPlayer, false);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "repair_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "fuel_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "wash_veh", SelectedPlayer, false);
        }
        CloseCircle(1);
        break;
      case "vehicle_menu":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "repair_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "fuel_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "wash_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "sell_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "Trunk_Interact", SelectedPlayer, false);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "put_myself_in_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "drift_mode", SelectedPlayer, false);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "passengers", SelectedPlayer, false);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "charge_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "get_from_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 11) {
          mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
        } else if (_0x58f877 == 12) {
          if (in_greenzone) {
            mp.game.ui.notifications.show(language["Вы не можете угонять транспорт в зеленой зоне"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("ServerAction", "theft_veh", SelectedPlayer, false);
        }
        if (_0x58f877 != 8) {
          CloseCircle(1);
        } else {
          CloseCircle();
        }
        break;
      case "portableMarket":
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        CloseCircle();
        if (_0x58f877 == 1) {
          mp.events.callRemote("Server_OpenPortableMarket", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("Server_RequestRemovePortableMarket", SelectedPlayer);
        }
        break;
      case "halloweenGhosts2025":
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        CloseCircle();
        mp.events.callRemote("Server_RequestHandleHalloweenGhost", _0x58f877);
        break;
      case "halloweenGraveyards2025":
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        CloseCircle();
        mp.events.callRemote("Server_RequestHandleHalloweenGraveyard", SelectedPlayer, _0x58f877);
        break;
      case "vehicle_menu_gang":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "repair_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "fuel_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "wash_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "sell_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 5) {
          if (in_greenzone) {
            mp.game.ui.notifications.show(language["Вы не можете угонять транспорт в зеленой зоне"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("ServerAction", "theft_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "break_matovoz", SelectedPlayer, false);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "Trunk_Interact", SelectedPlayer, false);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "put_myself_in_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "drift_mode", SelectedPlayer, false);
        } else if (_0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "passengers", SelectedPlayer, false);
        } else if (_0x58f877 == 11) {
          mp.events.callRemote("ServerAction", "charge_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 12) {
          mp.events.callRemote("ServerAction", "get_from_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 13) {
          mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
        }
        if (_0x58f877 != 10) {
          CloseCircle(1);
        } else {
          CloseCircle();
        }
        break;
      case "vehicle_menu_police":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "repair_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "fuel_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "wash_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "sell_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "stop_theft_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 6) {
          if (!SelectedPlayer || !mp.vehicles.exists(SelectedPlayer)) {
            return;
          }
          if (mp.game.vehicle.isThisModelABoat(SelectedPlayer.model) || mp.game.vehicle.isThisModelAPlane(SelectedPlayer.model) || mp.game.vehicle.isThisModelAHeli(SelectedPlayer.model)) {
            mp.game.ui.notifications.show(language["Нельзя продать номерной знак на данный транспорт"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("ServerAction", "number_plate_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "Trunk_Interact", SelectedPlayer, false);
        } else if (_0x58f877 == 8) {
          if (local_member == 2 || local_member == 14) {
            mp.events.callRemote("ServerAction", "Trunk_TakeIllegal_WithoutTake", SelectedPlayer, false);
          } else {
            mp.events.callRemote("ServerAction", "Trunk_TakeIllegal", SelectedPlayer, false);
          }
        } else if (_0x58f877 == 9) {
          if (!SelectedPlayer || !mp.vehicles.exists(SelectedPlayer)) {
            return;
          }
          if (mp.game.vehicle.isThisModelABoat(SelectedPlayer.model) || mp.game.vehicle.isThisModelAPlane(SelectedPlayer.model) || mp.game.vehicle.isThisModelAHeli(SelectedPlayer.model)) {
            mp.game.ui.notifications.show(language["Нельзя продать страхову на данный транспорт"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("ServerAction", "car_insurance_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "put_myself_in_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 11) {
          mp.events.callRemote("ServerAction", "drift_mode", SelectedPlayer, false);
        } else if (_0x58f877 == 12) {
          mp.events.callRemote("ServerAction", "passengers", SelectedPlayer, false);
        } else if (_0x58f877 == 13) {
          mp.events.callRemote("ServerAction", "charge_veh", SelectedPlayer, false);
        } else if (_0x58f877 == 14) {
          mp.events.callRemote("ServerAction", "get_from_trunk", SelectedPlayer, false);
        } else if (_0x58f877 == 15) {
          mp.events.callRemote("ServerAction", "evacuate_vehicle", SelectedPlayer, false);
        } else if (_0x58f877 == 16) {
          mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
        }
        if (_0x58f877 != 12) {
          CloseCircle(1);
        } else {
          CloseCircle();
        }
        break;
      case "license":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "passport", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "license", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("PlayerInteract", "Show_Member_ID", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "BasicAction":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && _0x58f877 != 3) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "givemoney", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "handshake", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "heal_player", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(1, "BasicAction_deals");
        } else if (_0x58f877 == 5) {
          CloseCircle();
          OpenCircle(1, "interactive_action");
        } else if (_0x58f877 == 6) {
          CloseCircle();
          OpenCircle(1, "BasicAction_illegals");
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "invite_battalion_team", SelectedPlayer);
        }
        if (_0x58f877 != 4 && _0x58f877 != 5 && _0x58f877 != 6) {
          CloseCircle(1);
        }
        break;
      case "BasicAction_deals":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "contract_player", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "trade", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "invite_building_company", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "marry_player", SelectedPlayer);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "give_flowers", SelectedPlayer);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "contract_collector", SelectedPlayer);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "contract_peoplecollector", SelectedPlayer);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "take_debt", SelectedPlayer);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "giveToy", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "BasicAction_illegals":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          if (in_greenzone) {
            mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          mp.events.callRemote("ServerAction", "pick_pocket", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "bag_head", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "rope_hands", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "follow_roped_player", SelectedPlayer);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "put_in_car_roped_player", SelectedPlayer);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "put_player_in_trunk", SelectedPlayer);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "uncuff_picklock", SelectedPlayer);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "shoes_off", SelectedPlayer);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "shave_head", SelectedPlayer);
        } else if (_0x58f877 == 10) {
          mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
        } else if (_0x58f877 == 11) {
          mp.events.callRemote("ServerAction", "stealPoliceUniform", SelectedPlayer);
        } else if (_0x58f877 == 12) {
          mp.events.callRemote("ServerAction", "poisonDart", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "interactive_action":
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerAction", "interact_hug", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerAction", "interact_slap", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerAction", "interact_kiss", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerAction", "interact_carry", SelectedPlayer);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerAction", "interact_carry_player", SelectedPlayer);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerAction", "interact_piggyback", SelectedPlayer);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "interact_stretch", SelectedPlayer);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "interact_wheelchair", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "pre_property":
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        CloseCircle();
        if (_0x58f877 == 1) {
          OpenCircle(1, "property_house");
        } else if (_0x58f877 == 2) {
          OpenCircle(1, "property_biz");
        } else if (_0x58f877 == 3) {
          OpenCircle(1, "property_transport");
        }
        break;
      case "property_house":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerProperty", "sellhouse", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "property_biz":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerProperty", "sellbiz", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerProperty", "changebiz", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "property_transport":
        HintClose();
        if (SelectedPlayer == null) {
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          mp.events.callRemote("ServerProperty", "sellcar", SelectedPlayer);
        } else if (_0x58f877 == 2) {
          mp.events.callRemote("ServerProperty", "share_veh", SelectedPlayer);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("ServerProperty", "give_veh_keys", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("ServerProperty", "give_fly_keys", SelectedPlayer);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("ServerProperty", "give_boat_keys", SelectedPlayer);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("ServerProperty", "sell_fly", SelectedPlayer);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("ServerProperty", "sell_boat", SelectedPlayer);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("ServerProperty", "changecar", SelectedPlayer);
        }
        CloseCircle(1);
        break;
      case "passangers2":
        HintClose();
        if (_0x58f877 <= 4) {
          CloseCircle();
          mp.events.callRemote("PassangersEject2", SelectedPlayer, _0x58f877);
        }
        break;
      case "passangers":
        HintClose();
        if (_0x58f877 <= 3) {
          CloseCircle();
          mp.events.callRemote("PassangersEject", _0x58f877);
        }
        break;
      case "car_windows":
        HintClose();
        if (_0x58f877 <= 4) {
          CloseCircle();
          mp.events.callRemote("CarWindowChangeState", _0x58f877);
        }
        break;
      case "work":
        if (is_at_taxi_job == 1) {
          if (_0x58f877 == 1) {
            HintClose();
            CloseCircle();
            mp.events.callRemote("TaxiServerCounter");
          } else if (_0x58f877 == 2) {
            HintClose();
            CloseCircle();
            mp.events.callRemote("TaxiOrdersCall");
          } else if (_0x58f877 == 3) {
            HintClose();
            CloseCircle(1);
            mp.events.callRemote("OpenJobHelpServer");
          }
        }
        break;
      case "megafone":
        mp.events.callRemote("Server_CarMenuMegafone", _0x58f877);
        HintClose();
        CloseCircle(1);
        break;
      case "incar_leader":
      case "incar":
        if (_0x58f877 != 3 && _0x58f877 != 6 && _0x58f877 != 7 && _0x58f877 != 8) {
          mp.events.callRemote("CarMenuSelected", _0x58f877);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_CreateFriendRace");
          HintClose();
          CloseCircle(1);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("Server_OpenDriftMenu");
          HintClose();
          CloseCircle(1);
        } else if (_0x58f877 == 6) {
          if (!localplayer.vehicle) {
            return;
          }
          if (mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABike(localplayer.vehicle.model)) {
            HintClose();
            CloseCircle(1);
            return mp.game.ui.notifications.show(language["В данном транспорте нет ремня безопасности"][curr_lang], false, 0, 6);
          }
          localplayer.setConfigFlag(32, false);
          HintClose();
          CloseCircle(1);
          main_browser.execute("APPS.state.hud.belt_notif = true;");
          main_browser.execute("APPS.state.hud.belt = true;");
          setTimeout(() => {
            main_browser.execute("APPS.state.hud.belt_notif = false;");
          }, 2500);
        } else {
          if (speedlimit == 0) {
            speedlimit = 1;
          } else if (speedlimit >= 1 && speedlimit < 7) {
            speedlimit++;
          } else if (speedlimit == 7) {
            speedlimit = 0;
          }
          switch (speedlimit) {
            case 0:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Установить скоростной лимит"][curr_lang] + "';");
              break;
            case 1:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 60 км/ч"][curr_lang] + "';");
              break;
            case 2:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 70 км/ч"][curr_lang] + "';");
              break;
            case 3:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 80 км/ч"][curr_lang] + "';");
              break;
            case 4:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 90 км/ч"][curr_lang] + "';");
              break;
            case 5:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 100 км/ч"][curr_lang] + "';");
              break;
            case 6:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 110 км/ч"][curr_lang] + "';");
              break;
            case 7:
              main_browser.execute("APPS.state.hud.circle_arg1 = '" + language["Скоростной лимит 120 км/ч"][curr_lang] + "';");
          }
          if (cruize_state == 1) {
            cruize_state = 2;
            toggle_cruize();
          }
          SetVehicleMaxSpeed(speedlimit);
          mp.events.callRemote("SetSpeedLimit", speedlimit);
        }
        break;
      case "globalplayer_famnoorg":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && _0x58f877 != 3) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 2) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(1, "FamilyCircle");
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 8) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "globalplayer_newbie":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && _0x58f877 != 3) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 2) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 7) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 8) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 8) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 7) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "globalplayer_newbieorg":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && local_member != 1 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 && local_member != 2 && _0x58f877 == 1 || SelectedPlayer.dead_state && _0x58f877 != 4 && _0x58f877 != 1) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          if (!local_member) {
            return mp.game.ui.notifications.show(language["Bы нe cocтoитe в opгaнизaции"][curr_lang], false, 0, 6);
          }
          if (local_member >= 5 && local_member < 7) {
            return;
          }
          CloseCircle();
          if (local_member == 3 || local_member == 4 || local_member == 12) {
            OpenCircle(3, local_member, language.Наручники[curr_lang]);
          } else if (local_member == 2 || local_member == 14 || local_member == 1) {
            OpenCircle(1, local_member, language.Наручники[curr_lang]);
          } else {
            OpenCircle(1, local_member);
          }
        } else if (_0x58f877 == 2) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 5) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 8) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 8) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "globalplayer_newbieorgfam":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && local_member != 1 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 && local_member != 2 && _0x58f877 == 1 || SelectedPlayer.dead_state && _0x58f877 != 4 && _0x58f877 != 1) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          if (!local_member) {
            return mp.game.ui.notifications.show(language["Bы нe cocтoитe в opгaнизaции"][curr_lang], false, 0, 6);
          }
          if (local_member >= 5 && local_member < 7) {
            return;
          }
          CloseCircle();
          if (local_member == 3 || local_member == 4 || local_member == 12) {
            OpenCircle(3, local_member, language.Наручники[curr_lang]);
          } else if (local_member == 2 || local_member == 14 || local_member == 1) {
            OpenCircle(1, local_member, language.Наручники[curr_lang]);
          } else {
            OpenCircle(1, local_member);
          }
        } else if (_0x58f877 == 2) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 5) {
          CloseCircle();
          OpenCircle(1, "FamilyCircle");
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 10) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 10) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "globalplayer_leader":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && local_member != 1 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 && local_member != 2 && _0x58f877 == 2 || SelectedPlayer.dead_state && _0x58f877 != 5 && _0x58f877 != 2) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenCircle(1, "playerleader");
        } else if (_0x58f877 == 2) {
          if (!local_member) {
            return mp.game.ui.notifications.show(language["Bы нe cocтoитe в opгaнизaции"][curr_lang], false, 0, 6);
          }
          if (local_member >= 5 && local_member < 7) {
            return;
          }
          CloseCircle();
          if (local_member == 3 || local_member == 4 || local_member == 12) {
            OpenCircle(3, local_member, language.Наручники[curr_lang]);
          } else if (local_member == 2 || local_member == 14 || local_member == 1) {
            OpenCircle(1, local_member, language.Наручники[curr_lang]);
          } else {
            OpenCircle(1, local_member);
          }
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 5) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 6) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 9) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 10) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 10) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 9) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "globalplayer":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && local_member != 1 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 && local_member != 2 && _0x58f877 == 2 || SelectedPlayer.dead_state && _0x58f877 != 5 && _0x58f877 != 2) {
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          CloseCircle();
          OpenCircle(1, "playerleader");
        } else if (_0x58f877 == 2) {
          if (!local_member) {
            return mp.game.ui.notifications.show(language["Bы нe cocтoитe в opгaнизaции"][curr_lang], false, 0, 6);
          }
          if (local_member >= 5 && local_member < 7) {
            return;
          }
          CloseCircle();
          if (local_member == 3 || local_member == 4 || local_member == 12) {
            OpenCircle(3, local_member, language.Наручники[curr_lang]);
          } else if (local_member == 2 || local_member == 14 || local_member == 1) {
            OpenCircle(1, local_member, language.Наручники[curr_lang]);
          } else {
            OpenCircle(1, local_member);
          }
        } else if (_0x58f877 == 3) {
          CloseCircle();
          OpenCircle(1, "license");
        } else if (_0x58f877 == 4) {
          CloseCircle();
          OpenCircle(3, "pre_property");
        } else if (_0x58f877 == 5) {
          CloseCircle();
          OpenCircle(2, "BasicAction");
        } else if (_0x58f877 == 6) {
          CloseCircle();
          OpenCircle(1, "FamilyCircle");
        } else if (_0x58f877 == 7) {
          mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 8) {
          mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (_0x58f877 == 9) {
          mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bSchool2025 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "giveSchoolKnowledge", SelectedPlayer);
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 10) {
          mp.events.callRemote("Server_RequestCurseOrBless", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bHalloween2025 && _0x58f877 == 11) {
          mp.events.callRemote("Server_RequestStealOrGiftCandies", SelectedPlayer.getVariable("REMOTE_ID"));
          CloseCircle(1);
        } else if (bFebruary2025 && _0x58f877 == 11) {
          mp.events.callRemote("Server_SendValentine", SelectedPlayer);
          CloseCircle(1);
        } else if (is_school2024 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "teacher_student", SelectedPlayer);
          CloseCircle(1);
        } else if (bChristmas2024 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween_2024 && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "Unite_souls", SelectedPlayer);
          CloseCircle(1);
        } else if (is_halloween && _0x58f877 == 10) {
          mp.events.callRemote("ServerAction", "DeathNoteSteal", SelectedPlayer);
          CloseCircle(1);
        } else if (bSummer2025 && _0x58f877 == 11) {
          mp.events.callRemote("ServerAction", "summerkeys2025", SelectedPlayer);
          CloseCircle(1);
        }
        break;
      case "playerleader":
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer && SelectedPlayer.dead_state) {
          HintClose();
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (_0x58f877 == 1) {
          HintClose();
          mp.events.callRemote("PlayerInteract", "InviteOrg", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 2) {
          HintClose();
          mp.events.callRemote("PlayerInteract", "UnInviteOrg", SelectedPlayer);
          CloseCircle(1);
        } else if (_0x58f877 == 3) {
          mp.events.callRemote("PlayerInteract", "RankUp", SelectedPlayer);
        } else if (_0x58f877 == 4) {
          mp.events.callRemote("PlayerInteract", "RankDown", SelectedPlayer);
        }
        break;
      case 15:
      case 16:
      case 17:
      case 18:
      case 14:
      case 13:
      case 12:
      case 11:
      case 10:
      case 9:
      case 8:
      case 7:
      case 4:
      case 3:
      case 2:
      case 1:
        if (SelectedPlayer == null) {
          HintClose();
          return CloseCircle(1);
        }
        if (SelectedPlayer.dead_state && local_member != 1 && local_member != 2 && local_member != 3 && local_member != 4 && local_member != 12 && local_member != 14 || SelectedPlayer.dead_state && local_member == 1 && _0x58f877 != 3 || SelectedPlayer.dead_state && local_member == 2 && _0x58f877 != 2 && _0x58f877 != 3 || SelectedPlayer.dead_state && local_member == 3 && _0x58f877 != 9 && _0x58f877 != 1 || SelectedPlayer.dead_state && local_member == 4 && _0x58f877 != 9 && _0x58f877 != 1 || SelectedPlayer.dead_state && local_member == 12 && _0x58f877 != 9 && _0x58f877 != 1 || SelectedPlayer.dead_state && local_member == 14 && _0x58f877 != 7 && _0x58f877 != 3) {
          HintClose();
          mp.game.ui.notifications.show(language["Bзaимoдeйcтвиe зaпpeщeннo"][curr_lang], false, 0, 6);
          return CloseCircle(1);
        }
        if (local_member == 1) {
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "MedSell", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            mp.events.callRemote("PlayerInteract", "InsurenceSell", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "Heal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "HealSickness", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 5) {
            mp.events.callRemote("PlayerInteract", "GetSickness", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 6) {
            mp.events.callRemote("PlayerInteract", "GetPlayerInsurance", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 7) {
            mp.events.callRemote("PlayerInteract", "AdrenalinePlayer", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 8 && curr_lang == "ru") {
            mp.events.callRemote("PlayerInteract", "ems_cuff", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 9 && curr_lang == "ru") {
            mp.events.callRemote("PlayerInteract", "ems_follow", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member == 2) {
          if (is_in_casino == 1) {
            mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "giveMilitaryID", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            mp.events.callRemote("PlayerInteract", "army_heal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "army_cuff", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "army_follow", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 5) {
            mp.events.callRemote("PlayerInteract", "army_TakeIllegal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 6) {
            mp.events.callRemote("PlayerInteract", "PutInCar", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 7) {
            mp.events.callRemote("PlayerInteract", "AccessToNGBunker", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member == 3 || local_member == 4 || local_member == 12) {
          if (is_in_casino == 1) {
            mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "Cuff", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            mp.events.callRemote("PlayerInteract", "Follow", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "PutOnGround", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "TakeIllegal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 5) {
            mp.events.callRemote("PlayerInteract", "PutInCar", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 6) {
            mp.events.callRemote("PlayerInteract", "SetPenalty", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 7) {
            mp.events.callRemote("PlayerInteract", "Arrest", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 8) {
            mp.events.callRemote("PlayerInteract", "TempPass", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 9) {
            mp.events.callRemote("PlayerInteract", "police_heal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 10) {
            mp.events.callRemote("PlayerInteract", "mask_off", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 11) {
            mp.events.callRemote("PlayerInteract", "Detention_room", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 12) {
            mp.events.callRemote("PlayerInteract", "ArrestCourt", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member >= 7 && local_member <= 11) {
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "GangZoneSell", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            if (in_greenzone) {
              mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6);
              return CloseCircle(1);
            }
            mp.events.callRemote("PlayerInteract", "Server_RobberyPlayer", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "gang_TakeIllegal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "gang_TakeHostage", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 5) {
            mp.events.callRemote("PlayerInteract", "mask_off", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member == 13) {
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "InviteEfir", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            mp.events.callRemote("PlayerInteract", "UnInviteEfir", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "InviteTalentShow", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member == 14) {
          if (is_in_casino == 1) {
            mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
            return CloseCircle(1);
          }
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "LawyerSell", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            mp.events.callRemote("PlayerInteract", "GunLicSell", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "gov_cuff", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "gov_follow", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 5) {
            mp.events.callRemote("PlayerInteract", "gov_sellfam", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 6) {
            mp.events.callRemote("PlayerInteract", "gov_TakeIllegal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 7) {
            mp.events.callRemote("PlayerInteract", "gov_heal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 8) {
            mp.events.callRemote("PlayerInteract", "PutInCar", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 9) {
            mp.events.callRemote("PlayerInteract", "Detention_room", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 10) {
            mp.events.callRemote("PlayerInteract", "HouseInsurance", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        } else if (local_member >= 15 && local_member <= 18) {
          if (_0x58f877 == 1) {
            mp.events.callRemote("PlayerInteract", "mask_off", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 2) {
            if (in_greenzone) {
              mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6);
              return CloseCircle(1);
            }
            mp.events.callRemote("PlayerInteract", "Server_RobberyPlayer", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 3) {
            mp.events.callRemote("PlayerInteract", "gang_TakeIllegal", SelectedPlayer);
            CloseCircle(1);
          } else if (_0x58f877 == 4) {
            mp.events.callRemote("PlayerInteract", "gang_TakeHostage", SelectedPlayer);
            CloseCircle(1);
          }
          HintClose();
        }
    }
    lastCheck = new Date().getTime();
  }
});
global.newCircleOpened = false;
global.OpenInteractionCircle = function (_0x593042, _0x3c64fa = {}) {
  if (GlobalCheck() == 1 || playerincapture) {
    return;
  }
  if (localplayer.cuffed) {
    return mp.game.ui.notifications.show(language["Bы зaкoвaны в нapyчники"][curr_lang], false, 0, 6);
  }
  if (is_roped_hands) {
    return mp.game.ui.notifications.show(language["У Вас связаны руки"][curr_lang], false, 0, 6);
  }
  const _0x3ba0bc = {
    permissions: {
      leader: local_leader,
      member: local_member,
      family: local_family,
      unoff_fam: local_unoff,
      greenZone: !in_greenzone,
      gangMember: local_member >= 7 && local_member <= 11,
      stateMember: local_member == 2 || local_member == 3 || local_member == 4 || local_member == 12 || local_member == 14,
      policeMember: local_member == 3 || local_member == 4 || local_member == 12,
      sahpMember: local_member == 4
    },
    circleType: _0x593042,
    arg1: _0x3c64fa?.arg1 || "no arg",
    arg2: _0x3c64fa?.arg2 || "no arg",
    arg3: _0x3c64fa?.arg3 || "no arg",
    arg4: _0x3c64fa?.arg4 || "no arg",
    arg5: _0x3c64fa?.arg5 || "no arg",
    vip: player_vip > 0,
    vipFreeRepairUsed: !!vipFreeRepairUsed,
    show: true
  };
  main_browser.execute("APPS.state.hud.newCircle = " + JSON.stringify(_0x3ba0bc) + ";");
  PlayBaseAudio("g_menu_open");
  newCircleOpened = _0x593042;
  mp.gui.chat.activate(false);
  mp.gui.cursor.show(true, true);
};
mp.events.add("Client_CloseInteractionCircle", () => {
  CloseInteractionCircle();
});
global.CloseInteractionCircle = function () {
  if (newCircleOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.hud.newCircle.show = false;");
    main_browser.execute("APPS.state.hud.newCircle.circleType = '';");
    newCircleOpened = false;
    SelectedPlayer = null;
    SelectedType = 0;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.addInteractionCircleArgs = function (_0x40a8d4 = "", _0x427638 = "", _0x5028f6 = "", _0x5c060b = "", _0x596444 = "") {
  if (!newCircleOpened || !loggedin || chatActive) {
    return;
  }
  const _0x191a51 = _0x3f93c0 => _0x3f93c0 != null && _0x3f93c0 !== undefined ? String(_0x3f93c0).replace(/'/g, "\\'") : "";
  if (_0x40a8d4) {
    main_browser.execute("APPS.state.hud.newCircle.arg1 = '" + _0x191a51(_0x40a8d4) + "';");
  }
  if (_0x427638) {
    main_browser.execute("APPS.state.hud.newCircle.arg2 = '" + _0x191a51(_0x427638) + "';");
  }
  if (_0x5028f6) {
    main_browser.execute("APPS.state.hud.newCircle.arg3 = '" + _0x191a51(_0x5028f6) + "';");
  }
  if (_0x5c060b) {
    main_browser.execute("APPS.state.hud.newCircle.arg4 = '" + _0x191a51(_0x5c060b) + "';");
  }
  if (_0x596444) {
    main_browser.execute("APPS.state.hud.newCircle.arg5 = '" + _0x191a51(_0x596444) + "';");
  }
};
mp.events.add("Client_InteractionCircleClick", _0x597706 => {
  if (!newCircleOpened || !loggedin || chatActive || new Date().getTime() - lastCheck < 100) {
    return;
  }
  if (SelectedPlayer && SelectedType == 1 && !mp.players.exists(SelectedPlayer)) {
    return CloseCircle();
  }
  if (SelectedPlayer && SelectedType == 2 && !mp.vehicles.exists(SelectedPlayer)) {
    return CloseCircle();
  }
  if (SelectedPlayer && SelectedType == 3 && !mp.objects.exists(SelectedPlayer)) {
    return CloseCircle();
  }
  switch (_0x597706) {
    case "christmasgift2024":
      if (!bChristmas2025) {
        return;
      }
      mp.events.callRemote("ServerAction", "christmasgift2024", SelectedPlayer);
      break;
    case "valentine2026":
      if (!bFebruary2026) {
        return;
      }
      mp.events.callRemote("Server_SendValentine", SelectedPlayer);
      break;
    case "showPassport":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerAction", "passport", SelectedPlayer);
      break;
    case "showLicenses":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerAction", "license", SelectedPlayer);
      break;
    case "showID":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("PlayerInteract", "Show_Member_ID", SelectedPlayer);
      break;
    case "sellHouse":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerProperty", "sellhouse", SelectedPlayer);
      break;
    case "sellBiz":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerProperty", "sellbiz", SelectedPlayer);
      break;
    case "exchangeBiz":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerProperty", "changebiz", SelectedPlayer);
      break;
    case "sellcar":
    case "share_veh":
    case "give_veh_keys":
    case "give_fly_keys":
    case "give_boat_keys":
    case "sell_fly":
    case "sell_boat":
    case "changecar":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerProperty", _0x597706, SelectedPlayer);
      break;
    case "givemoney":
    case "handshake":
    case "heal_player":
      if (_0x597706 != "heal_player" && isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerAction", _0x597706, SelectedPlayer);
      break;
    case "contract_player":
    case "trade":
    case "invite_building_company":
    case "marry_player":
    case "give_flowers":
    case "contract_collector":
    case "contract_peoplecollector":
    case "take_debt":
    case "giveToy":
    case "interact_hug":
    case "interact_slap":
    case "interact_kiss":
    case "interact_carry":
    case "interact_carry_player":
    case "interact_piggyback":
    case "interact_stretch":
    case "interact_wheelchair":
    case "interact_carryonarms":
    case "interact_shoulderride":
    case "bag_head":
    case "rope_hands":
    case "follow_roped_player":
    case "put_in_car_roped_player":
    case "put_player_in_trunk":
    case "uncuff_picklock":
    case "shoes_off":
    case "shave_head":
    case "stealPoliceUniform":
    case "poisonDart":
    case "InviteFam":
    case "UnInviteFam":
    case "FamRankUp":
    case "FamRankDown":
    case "Sell_FamilyBusiness":
    case "TransferFamily":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("ServerAction", _0x597706, SelectedPlayer);
      break;
    case "rob":
      if (isSourcePlayerDeath()) {
        return;
      }
      if (isGreenZone("rob")) {
        return mp.game.ui.notifications.show(language["Вы не можете грабить в зеленой зоне"][curr_lang], false, 0, 6);
      }
      mp.events.callRemote("ServerAction", "pick_pocket", SelectedPlayer);
      break;
    case "set_gps_tracker":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
      break;
    case "player_mute":
      mp.events.callRemote("Server_AddBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
      break;
    case "player_unmute":
      mp.events.callRemote("Server_DeleteBlackList", SelectedPlayer.getVariable("REMOTE_ID"));
      break;
    case "player_volume":
      mp.events.callRemote("Server_RequestChangePlayerVolume", SelectedPlayer.getVariable("REMOTE_ID"));
      break;
    case "Server_RobberyPlayer":
    case "gang_TakeIllegal":
    case "gang_TakeHostage":
      if (isSourcePlayerDeath()) {
        return;
      }
      if (_0x597706 === "Server_RobberyPlayer" && isGreenZone("rob")) {
        return;
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "InviteOrg":
    case "UnInviteOrg":
    case "RankUp":
    case "RankDown":
    case "InviteEfir":
    case "UnInviteEfir":
    case "InviteTalentShow":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "MedSell":
    case "InsurenceSell":
    case "Heal":
    case "HealSickness":
    case "GetSickness":
    case "GetPlayerInsurance":
    case "AdrenalinePlayer":
      if (_0x597706 !== "Heal" && isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "giveMilitaryID":
    case "army_heal":
    case "army_cuff":
    case "army_follow":
    case "army_TakeIllegal":
    case "PutInCar":
    case "AccessToNGBunker":
      if (_0x597706 !== "army_heal" && isSourcePlayerDeath()) {
        return;
      }
      if (is_in_casino == 1) {
        mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
        return CloseCircle(1);
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "Cuff":
    case "Follow":
    case "PutOnGround":
    case "TakeIllegal":
    case "PutInCar":
    case "SetPenalty":
    case "Arrest":
    case "TempPass":
    case "police_heal":
    case "mask_off":
    case "Detention_room":
    case "ArrestCourt":
      if (_0x597706 !== "police_heal" && isSourcePlayerDeath()) {
        return;
      }
      if (is_in_casino == 1) {
        mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
        return CloseCircle(1);
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "LawyerSell":
    case "GunLicSell":
    case "gov_cuff":
    case "gov_follow":
    case "gov_sellfam":
    case "gov_TakeIllegal":
    case "gov_heal":
    case "PutInCar":
    case "Detention_room":
    case "HouseInsurance":
      if (_0x597706 !== "gov_heal" && isSourcePlayerDeath()) {
        return;
      }
      if (is_in_casino == 1) {
        mp.game.ui.notifications.show(language["Вы не можете использовать здесь"][curr_lang], false, 0, 6);
        return CloseCircle(1);
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "TakePhoto":
      if (isSourcePlayerDeath()) {
        return;
      }
      mp.events.callRemote("Server_AdTakePhoto", SelectedPlayer);
      break;
    case "Server_RobberyPlayer":
    case "GangZoneSell":
    case "gang_TakeIllegal":
    case "gang_TakeHostage":
    case "mask_off":
    case "robInventory":
      if (isSourcePlayerDeath()) {
        return;
      }
      if (_0x597706 === "Server_RobberyPlayer" && isGreenZone("rob")) {
        return;
      }
      if (_0x597706 === "robInventory" && isGreenZone("rob")) {
        return;
      }
      mp.events.callRemote("PlayerInteract", _0x597706, SelectedPlayer);
      break;
    case "vehicle_trunk":
      mp.events.callRemote("CarMenuSelected", 1);
      break;
    case "vehicle_hood":
      mp.events.callRemote("CarMenuSelected", 2);
      break;
    case "vehicle_passengers":
      mp.events.callRemote("CarMenuSelected", 4);
      break;
    case "vehicle_windows":
      mp.events.callRemote("CarMenuSelected", 5);
      break;
    case "changeSpeedLimit":
      changeVehicleSpeedLimit();
      break;
    case "fastenBelt":
      fastenBelt();
      break;
    case "createFriendRace":
      mp.events.callRemote("Server_CreateFriendRace");
      break;
    case "openDriftMenu":
      mp.events.callRemote("Server_OpenDriftMenu");
      break;
    case "customizeVehicle":
      mp.events.callRemote("CarMenuSelected", 9);
      break;
    case "window_1":
      mp.events.callRemote("CarWindowChangeState", 1);
      break;
    case "window_2":
      mp.events.callRemote("CarWindowChangeState", 2);
      break;
    case "window_3":
      mp.events.callRemote("CarWindowChangeState", 3);
      break;
    case "window_4":
      mp.events.callRemote("CarWindowChangeState", 4);
      break;
    case "repair_veh":
    case "fuel_veh":
    case "sell_veh":
    case "break_matovoz":
    case "Trunk_Interact":
    case "put_myself_in_trunk":
    case "drift_mode":
    case "passengers":
    case "charge_veh":
    case "get_from_trunk":
    case "wash_veh":
    case "leave_collector":
    case "collector_team":
    case "repair_veh":
    case "fuel_veh":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("ServerAction", _0x597706, SelectedPlayer, false);
      break;
    case "setGPSTracker":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("Server_SetGPSTrackerToEntity", SelectedPlayer);
      break;
    case "theft_veh":
      if (isGreenZone("theftVehicle")) {
        return;
      }
      mp.events.callRemote("ServerAction", "theft_veh", SelectedPlayer, false);
      break;
    case "stop_theft_veh":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("ServerAction", "stop_theft_veh", SelectedPlayer, false);
      break;
    case "number_plate_veh":
      if (!SelectedPlayer || !mp.vehicles.exists(SelectedPlayer)) {
        return CloseInteractionCircle();
      }
      if (mp.game.vehicle.isThisModelABoat(SelectedPlayer.model) || mp.game.vehicle.isThisModelAPlane(SelectedPlayer.model) || mp.game.vehicle.isThisModelAHeli(SelectedPlayer.model)) {
        mp.game.ui.notifications.show(language["Нельзя продать номерной знак на данный транспорт"][curr_lang], false, 0, 6);
        CloseInteractionCircle();
        return;
      }
      mp.events.callRemote("ServerAction", "number_plate_veh", SelectedPlayer, false);
      break;
    case "taxi_license":
      if (!SelectedPlayer || !mp.vehicles.exists(SelectedPlayer)) {
        return CloseInteractionCircle();
      }
      if (mp.game.vehicle.isThisModelABoat(SelectedPlayer.model) || mp.game.vehicle.isThisModelAPlane(SelectedPlayer.model) || mp.game.vehicle.isThisModelAHeli(SelectedPlayer.model)) {
        mp.game.ui.notifications.show(language["Нельзя выдать лицензию на работу в такси на данный транспорт"][curr_lang], false, 0, 6);
        CloseInteractionCircle();
        return;
      }
      mp.events.callRemote("ServerAction", "taxi_license", SelectedPlayer, false);
      break;
    case "take_Illegal":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      if (local_member == 2 || local_member == 14) {
        mp.events.callRemote("ServerAction", "Trunk_TakeIllegal_WithoutTake", SelectedPlayer, false);
      } else {
        mp.events.callRemote("ServerAction", "Trunk_TakeIllegal", SelectedPlayer, false);
      }
      break;
    case "car_insurance_veh":
      if (!SelectedPlayer || !mp.vehicles.exists(SelectedPlayer)) {
        return CloseInteractionCircle();
      }
      if (mp.game.vehicle.isThisModelABoat(SelectedPlayer.model) || mp.game.vehicle.isThisModelAPlane(SelectedPlayer.model) || mp.game.vehicle.isThisModelAHeli(SelectedPlayer.model)) {
        mp.game.ui.notifications.show(language["Нельзя продать страхову на данный транспорт"][curr_lang], false, 0, 6);
        CloseInteractionCircle();
        return;
      }
      mp.events.callRemote("ServerAction", "car_insurance_veh", SelectedPlayer, false);
      break;
    case "evacuate_vehicle":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("ServerAction", "evacuate_vehicle", SelectedPlayer, false);
      break;
    case "destroyWeed":
      mp.events.callRemote("Server_Destroy_Weed", SelectedPlayer);
      break;
    case "collectWeed":
      mp.events.callRemote("Server_Collect_Weed", SelectedPlayer);
      break;
    case "seedInfo":
      mp.events.callRemote("Server_GetSeedInformation", SelectedPlayer);
      break;
    case "collectSeed":
      mp.events.callRemote("Server_GetFarm_Seed", SelectedPlayer, 1);
      break;
    case "removeSeed":
      mp.events.callRemote("Server_GetFarm_Seed", SelectedPlayer, 2);
      break;
    case "destroyCamping":
    case "destroyFireCamping":
      mp.events.callRemote("Server_Destroy_Camping", SelectedPlayer);
      break;
    case "fryFish":
      mp.events.callRemote("Server_Fry_Fish");
      break;
    case "billiardPoolGame":
      mp.events.callRemote("Server_Create_Pool_Game");
      break;
    case "billiardJoinTeam":
      mp.events.callRemote("Server_Pool_Join_Team", 1);
      break;
    case "billiardJoinTeam_2":
      mp.events.callRemote("Server_Pool_Join_Team", 2);
      break;
    case "billiardDeletePoolGame":
      mp.events.callRemote("Server_Delete_Pool_Game");
      break;
    case "smokeHookah":
      mp.events.callRemote("Server_SmokeHookah", SelectedPlayer);
      break;
    case "takeHookah":
      mp.events.callRemote("Server_TakeHookah", SelectedPlayer);
      break;
    case "destroyPersonalBarrier":
      mp.events.callRemote("Server_DestroyPersonalBarrier", SelectedPlayer);
      break;
    case "sitCustomChairs":
      SitCustomChair(SelectedPlayer);
      break;
    case "getCustomChairs":
      GetCustomChair(SelectedPlayer);
      break;
    case "usePoliceRadar":
      mp.events.callRemote("Server_UsePoliceRadar", SelectedPlayer);
      break;
    case "takePoliceRadar":
      mp.events.callRemote("Server_TakePoliceRadar", SelectedPlayer);
      break;
    case "spinTheBottle":
      mp.events.callRemote("Server_SpinTheBottle", SelectedPlayer);
      break;
    case "takeTheBottle":
      mp.events.callRemote("Server_TakeTheBottle", SelectedPlayer);
      break;
    case "openPortableMarket":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("Server_OpenPortableMarket", SelectedPlayer);
      break;
    case "removePortableMarket":
      if (SelectedPlayer == null) {
        return CloseInteractionCircle();
      }
      mp.events.callRemote("Server_RequestRemovePortableMarket", SelectedPlayer);
      break;
    case "openKPK":
      OpenKPK();
      break;
    case "setPoliceBarricades":
      mp.events.callRemote("CheckPoliceBarrier");
      break;
    case "getWeedPlace":
      mp.events.callRemote("Server_GetWeedPlace");
      break;
    case "togglePoliceRadar":
      if (!localplayer.vehicle) {
        return mp.game.ui.notifications.show(language["Вы должны находиться в транспорте"][curr_lang], false, 0, 6);
      }
      if (localplayer.vehicle.is_radar != 1) {
        return mp.game.ui.notifications.show(language["Ваш транспорт не оснащен радаром"][curr_lang], false, 0, 6);
      }
      if (is_radar_enabled) {
        is_radar_enabled = false;
        hudHideRadarKeyHint();
        mp.game.ui.notifications.show(language["Вы выключили радар"][curr_lang], false, 0, 2);
      } else {
        is_radar_enabled = true;
        hudShowRadarKeyHint();
        mp.game.ui.notifications.show(language["Вы включили радар"][curr_lang], false, 0, 2);
      }
      break;
    case "launchDrone":
      mp.events.callRemote("Server_LauchDrone");
      break;
    case "choosePoliceTape":
      mp.events.callRemote("Server_ChoosePoliceTape");
      break;
    case "setPoliceRadar":
      mp.events.callRemote("Server_SetPoliceRadar");
      break;
    case "requestContrabandMachinePosition":
      mp.events.callRemote("Server_RequestContrabandMachinePosition");
      break;
    case "getArmyOrders":
      mp.events.callRemote("Server_GetArmyCounts");
      break;
    case "alarmPolice":
      mp.events.callRemote("Server_AlarmPolice", 0);
      break;
    case "openMediaTablet":
      mp.events.callRemote("Check_AD");
      break;
    case "taxiChangePrice":
      if (!is_at_taxi_job) {
        return;
      }
      mp.events.callRemote("TaxiServerCounter");
      break;
    case "taxiOrderList":
      if (!is_at_taxi_job) {
        return;
      }
      mp.events.callRemote("TaxiOrdersCall");
      break;
    case "taxiJobInfo":
      if (!is_at_taxi_job) {
        return;
      }
      mp.events.callRemote("OpenJobHelpServer");
      break;
    case "passengers_1":
      mp.events.callRemote("PassangersEject", 1);
      break;
    case "passengers_2":
      mp.events.callRemote("PassangersEject", 2);
      break;
    case "passengers_3":
      mp.events.callRemote("PassangersEject", 3);
      break;
    case "passengers2_1":
      mp.events.callRemote("PassangersEject2", SelectedPlayer, 1);
      break;
    case "passengers2_2":
      mp.events.callRemote("PassangersEject2", SelectedPlayer, 2);
      break;
    case "passengers2_3":
      mp.events.callRemote("PassangersEject2", SelectedPlayer, 3);
      break;
    case "passengers2_4":
      mp.events.callRemote("PassangersEject2", SelectedPlayer, 4);
      break;
    case "christmasTree":
      mp.events.callRemote("Server_TakeChristmasTree", SelectedPlayer);
      break;
    case "summer2026_seatOnMattress":
      mp.events.callRemote("Server_Summer2026_SeatOnMattress", SelectedPlayer);
      break;
    case "summer2026_deleteMattress":
      mp.events.callRemote("Server_Summer2026_DeleteMattress", SelectedPlayer);
      break;
    default:
      mp.gui.chat.push("Unknown circle action: " + _0x597706);
  }
  lastCheck = new Date().getTime();
  if (!["FamRankUp", "FamRankDown", "RankUp", "RankDown", "passengers", "vehicle_passengers", "changeSpeedLimit"].includes(_0x597706)) {
    CloseInteractionCircle();
  }
});