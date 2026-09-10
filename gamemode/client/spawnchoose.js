mp.events.add("SpawnChoose", (_0x4024bb, _0x22a2a3, _0x42dc61, _0x3cdb1f, _0x5ce727, _0x15dac4, _0x46b6a1, _0x2c675c, _0x20b29e, _0x5ee7c7, _0x32a164, _0x3efd30, _0x5ed948, _0x2c054b, _0x2b1a79, _0x33d578) => {
  in_quene = false;
  let _0x1cb730 = language.неизвестно[curr_lang];
  const _0x1a363d = mp.game.pathfind.getStreetNameAtCoord(_0x20b29e, _0x5ee7c7, _0x32a164, 0, 0);
  const _0x4d4dfe = ["AIRP", "ALAMO", "ALTA", "ARMYB", "BANHAMC", "BANNING", "BEACH", "BHAMCA", "BRADP", "BRADT", "BURTON", "CALAFB", "CANNY", "CCREAK", "CHAMH", "CHIL", "CHU", "CMSW", "CYPRE", "DAVIS", "DELBE", "DELPE", "DELSOL", "DESRT", "DOWNT", "DTVINE", "EAST_V", "EBURO", "ELGORL", "ELYSIAN", "GALFISH", "golf", "GRAPES", "GREATC", "HARMO", "HAWICK", "HORS", "HUMLAB", "JAIL", "KOREAT", "LACT", "LAGO", "LDAM", "LEGSQU", "LMESA", "LOSPUER", "MIRR", "MORN", "MOVIE", "MTCHIL", "MTGORDO", "MTJOSE", "MURRI", "NCHU", "NOOSE", "OCEANA", "PALCOV", "PALETO", "PALFOR", "PALHIGH", "PALMPOW", "PBLUFF", "PBOX", "PROCOB", "RANCHO", "RGLEN", "RICHM", "ROCKF", "RTRAK", "SanAnd", "SANCHIA", "SANDY", "SKID", "SLAB", "STAD", "STRAW", "TATAMO", "TERMINA", "TEXTI", "TONGVAH", "TONGVAV", "VCANA", "VESP", "VINE", "WINDF", "WVINE", "ZANCUDO", "ZP_ORT", "ZQ_UAR", "BAYTRE", "OBSERV"];
  const _0x150948 = mp.game.zone.getNameOfZone(_0x20b29e, _0x5ee7c7, _0x32a164);
  const _0x31ea75 = _0x4d4dfe.includes(_0x150948) ? ["Los Santos International Airport", "Alamo Sea", "Alta", "Fort Zancudo", "Banham Canyon Dr", "Banning", "Vespucci Beach", "Banham Canyon", "Braddock Pass", "Braddock Tunnel", "Burton", "Calafia Bridge", "Raton Canyon", "Cassidy Creek", "Chamberlain Hills", "Vinewood Hills", "Chumash", "Chiliad Mountain State Wilderness", "Cypress Flats", "Davis", "Del Perro Beach", "Del Perro", "La Puerta", "Grand Senora Desert", "Downtown", "Downtown Vinewood", "East Vinewood", "El Burro Heights", "El Gordo Lighthouse", "Elysian Island", "Galilee", "GWC and Golfing Society", "Grapeseed", "Great Chaparral", "Harmony", "Hawick", "Vinewood Racetrack", "Humane Labs and Research", "Bolingbroke Penitentiary", "Little Seoul", "Land Act Reservoir", "Lago Zancudo", "Land Act Dam", "Legion Square", "La Mesa", "La Puerta", "Mirror Park", "Morningwood", "Richards Majestic", "Mount Chiliad", "Mount Gordo", "Mount Josiah", "Murrieta Heights", "North Chumash", "N.O.O.S.E", "Pacific Ocean", "Paleto Cove", "Paleto Bay", "Paleto Forest", "Palomino Highlands", "Palmer-Taylor Power Station", "Pacific Bluffs", "Pillbox Hill", "Procopio Beach", "Rancho", "Richman Glen", "Richman", "Rockford Hills", "Redwood Lights Track", "San Andreas", "San Chianski Mountain Range", "Sandy Shores", "Mission Row", "Stab City", "Maze Bank Arena", "Strawberry", "Tataviam Mountains", "Terminal", "Textile City", "Tongva Hills", "Tongva Valley", "Vespucci Canals", "Vespucci", "Vinewood", "Ron Alternates Wind Farm", "West Vinewood", "Zancudo River", "Port of South Los Santos", "Davis Quartz", "Baytree Canyon", "Galileo Observatory"][_0x4d4dfe.indexOf(_0x150948)] : _0x150948;
  _0x1cb730 = mp.game.ui.getStreetNameFromHashKey(_0x1a363d.streetName);
  _0x1cb730 = _0x1cb730.replace("'", "\\'");
  const _0x4493a6 = {
    vip: _0x4024bb,
    family_level: _0x22a2a3,
    family_house: _0x42dc61,
    family_online: _0x3cdb1f,
    houses: _0x5ce727,
    member: _0x15dac4,
    leader_announce: _0x46b6a1,
    member_online: _0x2c675c,
    district_name: _0x31ea75,
    street_name: _0x1cb730,
    bunker: _0x3efd30,
    bunker_days: _0x5ed948,
    spouse_house: _0x2c054b,
    club: _0x2b1a79,
    houses_days: _0x33d578,
    show: true
  };
  main_browser.execute("\n        APPS.state.introLobby.show = false;\n        APPS.state.login_quene.show = false;\n        APPS.state.spawn_enter = " + JSON.stringify(_0x4493a6));
  mp.gui.cursor.show(true, true);
});
mp.events.add("Client_CheckSpawnButton", (_0xbaa36, _0x24b583) => {
  if (loggedin != 1) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      PlayBaseAudio("base_mouse_click");
      main_browser.execute("APPS.state.spawn_enter.show = false;");
      mp.gui.cursor.show(false, false);
      if (curr_lang == "ru") {
        FinishSpawnMenu(0);
      }
      mp.events.callRemote("SpawnPlayer", _0xbaa36, _0x24b583, true);
    }
  }
});
mp.events.add("Client_SpawnSpouseHouse", _0x537d25 => {
  if (loggedin != 1) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      main_browser.execute("APPS.state.spawn_enter.show = false;");
      if (curr_lang == "ru") {
        FinishSpawnMenu(0);
      }
      mp.gui.cursor.show(false, false);
      mp.events.callRemote("SpawnPlayer", 7, _0x537d25, true);
    }
  }
});
global.spawnTime = 0;
global.playerLevel = 0;
mp.events.add("Client_UnfreezeAfterAuth", _0x1019ca => {
  mp.gui.cursor.show(false, false);
  localplayer.freezePosition(false);
  is_freezed = false;
  loggedin = true;
  spawnTime = new Date().getTime();
  playerLevel = _0x1019ca;
  if (bHalloween2025) {
    WeatherChangeFunc();
  }
});
mp.events.add("SpawnPlayer_Error", _0x7e401d => {
  PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
  main_browser.execute("APP.sendErrorMessage('" + _0x7e401d + "');");
  main_browser.execute("APPS.state.spawn_enter.show = true;");
});
mp.events.add("Client_PlaySpawnSound", () => {
  StartCustomSound("spawn_check", "sounds/notifications/spawn_check.ogg", 0.2);
});