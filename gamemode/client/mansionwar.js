global.MansionWarOpened = false;
mp.events.add("Client_OpenHotelInfo", (_0x541d8a, _0x4d4232) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0xed86a4 = "{\"hotel_owner\":'" + _0x541d8a + "',\"quest_progress\":[" + _0x4d4232 + "],\"show\":true}";
  main_browser.execute("APPS.state.hotel = " + _0xed86a4);
  MansionWarOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMansionWar = function () {
  if (MansionWarOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.hotel.show = false;");
    MansionWarOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_GetHotelPrize", () => {
  if (MansionWarOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetHotelPrize");
    }
  }
});
mp.events.add("Client_StartCleaning", () => {
  EndConversationFinally();
  RandomFloorMarker();
});
const floor_coords = [[-844.353, -892.596, -54.547], [-843.982, -885.851, -54.547], [-835.96, -888.965, -54.547], [-830.401, -887.811, -54.547], [-832.83, -893.139, -54.547], [-824.677, -886.964, -50.184], [-827.875, -879.394, -50.184], [-834.604, -881.256, -50.184], [-838.614, -880.167, -50.184], [-845.644, -879.773, -50.184], [-847.018, -885.544, -50.184], [-839.474, -892.922, -54.547], [-839.784, -885.424, -54.547], [-846.529, -881.301, -54.547], [-830.848, -884.491, -54.547], [-827.172, -881.166, -54.547], [-825.238, -894.424, -54.547], [-838.429, -892.582, -54.547], [-844.144, -894.954, -54.547]];
let floor_marker = null;
let floor_shape = null;
let floor_blips = null;
function RandomFloorMarker() {
  if (floor_blips != null && mp.blips.exists(floor_blips)) {
    floor_blips.destroy();
    floor_blips = undefined;
  }
  if (floor_marker != null && mp.markers.exists(floor_marker)) {
    floor_marker.destroy();
    floor_marker = undefined;
  }
  if (floor_shape != null && mp.colshapes.exists(floor_shape)) {
    floor_shape.destroy();
    floor_shape = undefined;
  }
  const _0x5258ff = getRandomInt(0, floor_coords.length);
  let _0x3100f5 = 50;
  if (new_version != 1) {
    _0x3100f5 = 0;
  }
  floor_blips = mp.blips.new(1, new mp.Vector3(floor_coords[_0x5258ff][0], floor_coords[_0x5258ff][1], floor_coords[_0x5258ff][2]), {
    name: language["Место направления"][curr_lang],
    color: 83,
    dimension: _0x3100f5
  });
  floor_blips.setRoute(true);
  floor_marker = mp.markers.new(2, new mp.Vector3(floor_coords[_0x5258ff][0], floor_coords[_0x5258ff][1], floor_coords[_0x5258ff][2]), 1, {
    rotation: new mp.Vector3(180, 0, 0),
    color: [246, 225, 0, 255],
    visible: true,
    dimension: _0x3100f5
  });
  floor_shape = mp.colshapes.newSphere(floor_coords[_0x5258ff][0], floor_coords[_0x5258ff][1], floor_coords[_0x5258ff][2], 2, _0x3100f5);
  floor_shape.is_floor_shape = true;
}
mp.events.add("Client_RandomNextHotelFloor", () => {
  RandomFloorMarker();
});
mp.events.add("playerEnterColshape", _0x58b65d => {
  if (_0x58b65d.is_floor_shape == 1) {
    mp.events.callRemote("Server_StarCleanHotelFloor");
  }
});
mp.events.add("Client_GoToHotelPage", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      mp.events.callRemote("Server_GetInfoAboutHotel");
    }
  }
});
mp.events.add("Client_GoToWeaponPage", () => {
  if (EventMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      CloseEventMenu();
      mp.events.callRemote("Server_GoToWeaponPage");
    }
  }
});
mp.events.add("Client_FinishHotelCleaning", () => {
  if (floor_blips != null && mp.blips.exists(floor_blips)) {
    floor_blips.destroy();
    floor_blips = undefined;
  }
  if (floor_marker != null && mp.markers.exists(floor_marker)) {
    floor_marker.destroy();
    floor_marker = undefined;
  }
  if (floor_shape != null && mp.colshapes.exists(floor_shape)) {
    floor_shape.destroy();
    floor_shape = undefined;
  }
});