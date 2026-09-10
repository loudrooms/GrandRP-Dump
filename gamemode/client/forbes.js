global.ForbesOpened = false;
mp.events.add("Client_OpenForbesCorrect", (_0x16c74a, _0x489236, _0x19d274) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x1859dd = "{\"title\":'" + _0x16c74a + "',\"title_page1\":'" + _0x489236 + "',\"title_page2\":'" + _0x19d274 + "',\"charity_top\":[],\"crypto_top\":[],\"top_oldest\":[],\"top_bussines\":[],\"richest_people\":[],\"killer_people\":[],\"best_ingrand\":'',\"best_stattue\":'',\"dangerous_family\":'',\"page\":1,\"top_month_players1\":'',\"top_month_players2\":'',\"top_players\":[],\"BossTop\":[],\"player_voted\":[],\"is_searched_player\":false,\"need_to_delete_player_post\":0,\"top_families\":[],\"fam_voted\":0,\"need_to_delete_family_post\":0,\"top_family\":'',\"is_searched_family\":false,\"top_vehicles\":[],\"veh_voted\":0,\"is_searched_vehicle\":false,\"top_month_vehicle\":'',need_to_delete_vehicle_post:0,\"show\":true}";
  main_browser.execute("APPS.state.forbes = " + _0x1859dd);
  ForbesOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseForbes = function () {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.show = false;");
    ForbesOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.TakeFamilyTopPhoto = false;
mp.events.add("Client_TakePhotoOfFamily", _0x3eb4fb => {
  CloseForbes();
  at_mugshot_photo = _0x3eb4fb;
  OpenMobileCamera(10);
  TakeFamilyTopPhoto = true;
});
global.TakeVehicleTopPhoto = false;
mp.events.add("Client_TakePhotoOfVehicle", _0x4a26d3 => {
  CloseForbes();
  at_mugshot_photo = _0x4a26d3;
  OpenMobileCamera(4);
  TakeVehicleTopPhoto = true;
});
global.TakeForbesPlayerTopPhoto = false;
mp.events.add("Client_TakePhotoOfPlayer", _0x6cacd6 => {
  CloseForbes();
  at_mugshot_photo = _0x6cacd6;
  OpenMobileCamera(10);
  TakeForbesPlayerTopPhoto = true;
});
mp.events.add("Client_OpenForbes", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    CloseMobile();
    mp.events.callRemote("Server_OpenForbes");
  }
});
mp.events.add("Client_LoadForbesCryptoTop", (_0xdff224, _0xab6e02) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.crypto_top = " + JSON.stringify(_0xdff224) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0xab6e02 + ";");
  }
});
mp.events.add("Client_LoadForbesCharityTop", (_0xa6ad3, _0x20039c) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.charity_top = " + JSON.stringify(_0xa6ad3) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x20039c + ";");
  }
});
mp.events.add("Client_LoadForbesOldestPeople", (_0x3a2220, _0x14d0e9) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_oldest = " + JSON.stringify(_0x3a2220) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x14d0e9 + ";");
  }
});
mp.events.add("Client_LoadForbesBussiness", (_0x4a8c5f, _0x46b265) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_bussines = " + JSON.stringify(_0x4a8c5f) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x46b265 + ";");
  }
});
mp.events.add("Client_LoadForbesRichestPeople", (_0x51a6f4, _0x182709) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.richest_people = " + JSON.stringify(_0x51a6f4) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x182709 + ";");
  }
});
mp.events.add("Client_LoadBestForbesKilles", (_0x5785f3, _0x1444e0) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.killer_people = " + JSON.stringify(_0x5785f3) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x1444e0 + ";");
  }
});
mp.events.add("Client_LoadBestWeeklyIngrand", (_0xdfa645, _0x4a6865) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.best_ingrand = " + JSON.stringify(_0xdfa645) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x4a6865 + ";");
  }
});
mp.events.add("Client_LoadForbesStattues", (_0x23a0ab, _0x4c7659) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.best_stattue = " + JSON.stringify(_0x23a0ab) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x4c7659 + ";");
  }
});
mp.events.add("Client_LoadMostDangerousFamily", (_0x252a35, _0x5e9a10) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.dangerous_family = " + JSON.stringify(_0x252a35) + ";");
    main_browser.execute("APPS.state.forbes.page = " + _0x5e9a10 + ";");
  }
});
mp.events.add("Client_LoadTopLastMonthPlayersTop", (_0x555d2e, _0x375756, _0x1afb19) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_month_players1 = " + JSON.stringify(_0x555d2e) + ";");
    main_browser.execute("APPS.state.forbes.top_month_players2 = " + JSON.stringify(_0x375756) + ";");
    main_browser.execute("APPS.state.forbes.player_voted = [" + _0x1afb19 + "];");
  }
});
mp.events.add("Client_LoadTopForbesPlayers", (_0x4e7cbc, _0x48f2bd) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_players = APPS.state.forbes.top_players.concat(" + JSON.stringify(_0x4e7cbc) + ")");
    main_browser.execute("APPS.state.forbes.page = " + _0x48f2bd + ";");
    main_browser.execute("APPS.state.forbes.is_searched_player = false;");
  }
});
mp.events.add("Client_OpenForbesPlayerByFind", _0x50c7a5 => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_players = " + JSON.stringify(_0x50c7a5) + ";");
    main_browser.execute("APPS.state.forbes.is_searched_player = true;");
  }
});
mp.events.add("Client_OpenForbesVehicleByFind", _0x40fa8c => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_vehicles = " + JSON.stringify(_0x40fa8c) + ";");
    main_browser.execute("APPS.state.forbes.is_searched_vehicle = true;");
  }
});
mp.events.add("Client_UpdateForbesPlayerLikePost", _0x4ad44a => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.player_voted = [" + _0x4ad44a + "];");
  }
});
mp.events.add("Client_DeletePlayerForbesPost", _0xfd05ff => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.need_to_delete_player_post = " + _0xfd05ff + ";");
  }
});
mp.events.add("Client_LoadTopPlayersMore", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadTopPlayersMore");
  }
});
mp.events.add("Client_RegisterPlayerToTop", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RegisterPlayerToTop");
  }
});
mp.events.add("Client_RegisterVehicleToTop", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RegisterVehicleToTop");
  }
});
mp.events.add("Client_LikedForbesPlayer", (_0x219439, _0xca87c1) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LikedForbesPlayer", _0x219439, _0xca87c1);
  }
});
mp.events.add("Client_SearchedForbesPlayer", _0x379c75 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SearchedForbesPlayer", _0x379c75);
  }
});
mp.events.add("Client_LoadMoreForbesTop", _0x268c48 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadMoreForbesTop", _0x268c48);
  }
});
mp.events.add("Client_DeleteForbesPlayer", _0x86a159 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteForbesPlayer", _0x86a159);
  }
});
mp.events.add("Client_DeleteForbesFamily", _0x36a1f0 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteForbesFamily", _0x36a1f0);
  }
});
mp.events.add("Client_DeleteForbesVehicle", _0x475e78 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteForbesVehicle", _0x475e78);
  }
});
mp.events.add("Client_SearchedForbesFamily", _0x2f39f3 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SearchedForbesFamily", _0x2f39f3);
  }
});
mp.events.add("Client_SearchedForbesVehicle", _0x4f641c => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SearchedForbesVehicle", _0x4f641c);
  }
});
mp.events.add("Client_LikedForbesFamily", _0x155586 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LikedForbesFamily", _0x155586);
  }
});
mp.events.add("Client_LikedForbesVehicle", _0x26753a => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LikedForbesVehicle", _0x26753a);
  }
});
mp.events.add("Client_RegisterFamilyToTop", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RegisterFamilyToTop");
  }
});
mp.events.add("Client_LoadTopFamiliesMore", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadTopFamiliesMore");
  }
});
mp.events.add("Client_LoadTopVehiclesMore", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_LoadTopVehiclesMore");
  }
});
mp.events.add("Client_OpenForbesPage", _0x34b0fc => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_OpenForbesPage", _0x34b0fc);
  }
});
mp.events.add("Client_LoadTopLastMonthFamilyTop", (_0x9b24e7, _0x3da434) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_family = " + JSON.stringify(_0x9b24e7) + ";");
    main_browser.execute("APPS.state.forbes.fam_voted = " + _0x3da434 + ";");
  }
});
mp.events.add("Client_LoadTopLastMonthVehicleTop", (_0x2f9ea5, _0x490099) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_month_vehicle = " + JSON.stringify(_0x2f9ea5) + ";");
    main_browser.execute("APPS.state.forbes.veh_voted = " + _0x490099 + ";");
  }
});
mp.events.add("Client_LoadTopFamilies", (_0x39e55b, _0x1f843a) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_families = APPS.state.forbes.top_families.concat(" + JSON.stringify(_0x39e55b) + ")");
    main_browser.execute("APPS.state.forbes.page = " + _0x1f843a + ";");
    main_browser.execute("APPS.state.forbes.is_searched_family = false;");
  }
});
mp.events.add("Client_LoadTopVehicles", (_0x57e3ae, _0x535271) => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_vehicles = APPS.state.forbes.top_vehicles.concat(" + JSON.stringify(_0x57e3ae) + ")");
    main_browser.execute("APPS.state.forbes.page = " + _0x535271 + ";");
    main_browser.execute("APPS.state.forbes.is_searched_vehicle = false;");
  }
});
mp.events.add("Client_OpenForbesFamilyByFind", _0x2866f1 => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.top_families = " + JSON.stringify(_0x2866f1) + ";");
    main_browser.execute("APPS.state.forbes.is_searched_family = true;");
  }
});
mp.events.add("Client_UpdateFamilyLikePost", () => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.fam_voted = 1;");
  }
});
mp.events.add("Client_UpdateVehicleLikePost", () => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.veh_voted = 1;");
  }
});
mp.events.add("Client_DeleteFamilyForbesPost", _0x5a6932 => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.need_to_delete_family_post = " + _0x5a6932 + ";");
  }
});
mp.events.add("Client_DeleteVehicleForbesPost", _0x38c7f6 => {
  if (ForbesOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.forbes.need_to_delete_vehicle_post = " + _0x38c7f6 + ";");
  }
});
mp.events.add("Client_LoadMoreForbesTopsSuccess", (_0x54f526, _0x29823e) => {
  if (ForbesOpened && loggedin && !chatActive) {
    if (_0x29823e == 0) {
      main_browser.execute("APPS.state.forbes.killer_people = APPS.state.forbes.killer_people.concat(" + JSON.stringify(_0x54f526) + ")");
    } else if (_0x29823e == 1) {
      main_browser.execute("APPS.state.forbes.richest_people = APPS.state.forbes.richest_people.concat(" + JSON.stringify(_0x54f526) + ")");
    } else if (_0x29823e == 2) {
      main_browser.execute("APPS.state.forbes.top_bussines = APPS.state.forbes.top_bussines.concat(" + JSON.stringify(_0x54f526) + ")");
    } else if (_0x29823e == 3) {
      main_browser.execute("APPS.state.forbes.top_oldest = APPS.state.forbes.top_oldest.concat(" + JSON.stringify(_0x54f526) + ")");
    } else if (_0x29823e == 4) {
      main_browser.execute("APPS.state.forbes.charity_top = APPS.state.forbes.charity_top.concat(" + JSON.stringify(_0x54f526) + ")");
    } else if (_0x29823e == 5) {
      main_browser.execute("APPS.state.forbes.crypto_top = APPS.state.forbes.crypto_top.concat(" + JSON.stringify(_0x54f526) + ")");
    }
  }
});