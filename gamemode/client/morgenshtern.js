function OpenMorgenshternEnter() {
  main_browser.execute("APPS.state.morgenshtern_enter = {\"show\":true}");
  OpenedMorgenshternEnter = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
}
function OpenMorgenshternLanding() {
  main_browser.execute("APPS.state.morgenshtern_landing = {\"show\":true}");
  OpenedMorgenshternLanding = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
}
let npc_secure;
let npc_kitchen1;
let npc_kitchen2;
let npc_kitchen3;
let npc_bar;
let npc_hostes;
global.OpenedMorgenshternLanding = false;
global.OpenedMorgenshternEnter = false;
mp.events.add("Client_ShowMorgenshternEnter", () => {
  if (GlobalCheck() != 1) {
    OpenMorgenshternEnter();
  }
});
global.CloseMorgenshternEnter = function (_0x3a8e25 = false) {
  if (OpenedMorgenshternEnter && loggedin && !chatActive) {
    main_browser.execute("APPS.state.morgenshtern_enter.show = false;");
    OpenedMorgenshternEnter = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_ShowMorgenshternLanding", () => {
  if (GlobalCheck() != 1) {
    OpenMorgenshternLanding();
  }
});
global.CloseMorgenshternLanding = function (_0x1de083 = false) {
  if (OpenedMorgenshternLanding && loggedin && !chatActive) {
    main_browser.execute("APPS.state.morgenshtern_landing.show = false;");
    OpenedMorgenshternLanding = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GoToMorgenshternLanding", _0x55d065 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    if (_0x55d065 == 0) {
      CloseMorgenshternEnter();
    } else {
      CloseMenu();
    }
    OpenMorgenshternLanding();
  }
});
if (curr_lang == "ru") {
  npc_secure = mp.peds.new(mp.game.joaat("mp_m_freemode_01"), new mp.Vector3(-444.838, -117.589, -68.207), -22.351, _0x30f380 => {}, 0);
  npc_kitchen1 = mp.peds.new(mp.game.joaat("mp_m_freemode_01"), new mp.Vector3(-418.679, -111.837, -68.154), -109.532, -110.661, _0x52bc3d => {}, 0);
  npc_kitchen2 = mp.peds.new(mp.game.joaat("mp_m_freemode_01"), new mp.Vector3(-420.362, -116.293, -68.154), -109.532, _0x461c88 => {}, 0);
  npc_kitchen3 = mp.peds.new(mp.game.joaat("mp_f_freemode_01"), new mp.Vector3(-419.496, -113.8, -68.154), -109.532, _0x3683b8 => {}, 0);
  npc_bar = mp.peds.new(mp.game.joaat("mp_m_freemode_01"), new mp.Vector3(-423.888, -133.584, -68.154), -112.145, _0x373199 => {}, 0);
  npc_hostes = mp.peds.new(mp.game.joaat("mp_f_freemode_01"), new mp.Vector3(-437.546, -121.446, -68.208), -18.712, _0x4b0626 => {}, 0);
}
mp.events.add("Client_SetMorgenKaifPedsForm", () => {
  setTimeout(() => {
    npc_secure.setComponentVariation(parseInt(0), parseInt(5), parseInt(0), parseInt(0));
    npc_secure.setComponentVariation(parseInt(11), parseInt(701), parseInt(0), parseInt(0));
    npc_secure.setComponentVariation(parseInt(4), parseInt(13), parseInt(0), parseInt(0));
    npc_secure.setComponentVariation(parseInt(6), parseInt(10), parseInt(0), parseInt(0));
    npc_secure.setComponentVariation(parseInt(3), parseInt(4), parseInt(0), parseInt(0));
    npc_secure.setComponentVariation(parseInt(8), parseInt(4), parseInt(0), parseInt(0));
    npc_secure.setPropIndex(parseInt(2), parseInt(1), parseInt(0), true);
    npc_hostes.setComponentVariation(parseInt(0), parseInt(33), parseInt(0), parseInt(0));
    npc_hostes.setComponentVariation(parseInt(11), parseInt(719), parseInt(0), parseInt(0));
    npc_hostes.setComponentVariation(parseInt(4), parseInt(133), parseInt(0), parseInt(0));
    npc_hostes.setComponentVariation(parseInt(6), parseInt(0), parseInt(0), parseInt(0));
    npc_hostes.setComponentVariation(parseInt(3), parseInt(3), parseInt(0), parseInt(0));
    npc_hostes.setPropIndex(parseInt(0), parseInt(141), parseInt(0), true);
    npc_hostes.setComponentVariation(parseInt(8), parseInt(8), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(0), parseInt(33), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(11), parseInt(719), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(4), parseInt(133), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(6), parseInt(13), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(3), parseInt(3), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(7), parseInt(194), parseInt(0), parseInt(0));
    npc_kitchen3.setComponentVariation(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    npc_kitchen3.setPropIndex(parseInt(0), parseInt(135), parseInt(0), true);
    npc_kitchen2.setComponentVariation(parseInt(0), parseInt(5), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(11), parseInt(703), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(4), parseInt(24), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(6), parseInt(8), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(3), parseInt(4), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(7), parseInt(240), parseInt(0), parseInt(0));
    npc_kitchen2.setComponentVariation(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    npc_kitchen2.setPropIndex(parseInt(0), parseInt(136), parseInt(0), true);
    npc_kitchen1.setComponentVariation(parseInt(0), parseInt(5), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(11), parseInt(703), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(4), parseInt(24), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(6), parseInt(8), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(3), parseInt(4), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(7), parseInt(240), parseInt(0), parseInt(0));
    npc_kitchen1.setComponentVariation(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    npc_kitchen1.setPropIndex(parseInt(0), parseInt(14), parseInt(0), true);
    npc_bar.setComponentVariation(parseInt(0), parseInt(5), parseInt(0), parseInt(0));
    npc_bar.setComponentVariation(parseInt(11), parseInt(700), parseInt(0), parseInt(0));
    npc_bar.setComponentVariation(parseInt(4), parseInt(13), parseInt(0), parseInt(0));
    npc_bar.setComponentVariation(parseInt(6), parseInt(10), parseInt(0), parseInt(0));
    npc_bar.setComponentVariation(parseInt(3), parseInt(0), parseInt(0), parseInt(0));
    npc_bar.setComponentVariation(parseInt(8), parseInt(15), parseInt(0), parseInt(0));
    npc_kitchen1.taskStartScenarioInPlace("PROP_HUMAN_BBQ", 0, false);
    npc_kitchen2.taskStartScenarioInPlace("PROP_HUMAN_BBQ", 0, false);
    npc_kitchen3.taskStartScenarioInPlace("PROP_HUMAN_BBQ", 0, false);
    npc_hostes.taskStartScenarioInPlace("WORLD_HUMAN_CLIPBOARD", 0, false);
    npc_secure.taskStartScenarioInPlace("WORLD_HUMAN_GUARD_STAND", 0, false);
  }, 1000);
});
mp.events.add("Client_StartMusicMorgen", _0x1dfa3c => {
  mp.gui.chat.push(_0x1dfa3c);
  if (_0x1dfa3c == -1) {
    return player.call("Client_StopCustomSound", ["music_morgen"]);
  }
  StartCustomSound("music_morgen", "sounds/morgershretn/" + _0x1dfa3c + "}.ogg", 0.2);
});