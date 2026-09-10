global.CarsListOpened = false;
let carsListHasMore = false;
let carsListNextOffset = 0;
let carsListLimit = 100;
mp.events.add("Client_OpenCarsList", (_0x284d62, _0x565870 = 0, _0x565454 = {}) => {
  EndConversationFinally();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x575dee = JSON.stringify({
    vehicles: _0x284d62,
    ..._0x565454,
    is_family: !!_0x565454.fam,
    has_more: _0x565454.hasMore,
    change_fav: "",
    show: true
  });
  main_browser.execute("APPS.state.carslist = " + _0x575dee);
  if (_0x565870 != 0) {
    annulate_cars_variables = _0x565870;
  }
  CarsListOpened = true;
  SwitchHUDToDesign(true);
  carsListHasMore = _0x565454.hasMore;
  carsListNextOffset = _0x565454.nextOffset;
});
mp.events.add("Client_LoadMoreVehicles", () => {
  if (CarsListOpened && loggedin && !chatActive) {
    LoadMoreCars();
  }
});
global.LoadMoreCars = function () {
  if (CarsListOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (carsListHasMore) {
        mp.events.callRemote("Server_RequestMoreCars", carsListNextOffset);
      }
    }
  }
};
mp.events.add("Client_AppendCarsList", (_0x3f9896, _0x5afcef = false, _0xbc59f2 = 0) => {
  if (CarsListOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.carslist.vehicles = APPS.state.carslist.vehicles.concat(" + JSON.stringify(_0x3f9896) + ")");
    main_browser.execute("APPS.state.carslist.has_more = " + _0x5afcef);
    main_browser.execute("this.AppComponents.carslist.$forceUpdate();");
    carsListHasMore = _0x5afcef;
    carsListNextOffset = _0xbc59f2;
  }
});
let annulate_cars_variables = 0;
global.CloseCarsList = function (_0x235aac = false) {
  if (CarsListOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.carslist.show = false;");
    CarsListOpened = false;
    carsListHasMore = false;
    carsListNextOffset = 0;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (annulate_cars_variables == 1 && _0x235aac == 1) {
      mp.events.callRemote("Server_CloseParking");
    } else {
      mp.events.callRemote("Server_CloseCarsList");
    }
    annulate_cars_variables = 0;
  }
};
mp.events.add("Client_ChangeFavoriteVehicleListStatus", (_0x400143, _0x56142a) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChangeFavoriteVehicleListStatus", _0x400143, _0x56142a);
  }
});
mp.events.add("Client_SpawnVehicleList", (_0x5bae5a, _0x217022 = 0) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SpawnVehicleList", _0x5bae5a, _0x217022);
  }
});
mp.events.add("Client_SpawnFactionVehicle", _0x1dea5f => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SpawnFactionVehicle", _0x1dea5f);
    mp.events.call("Client_CloseCarsList");
  }
});
mp.events.add("Client_CloseCarsList", () => {
  CloseCarsList();
});
mp.events.add("Client_UpdateVehicleListFavStatus", _0x4a4366 => {
  main_browser.execute("APPS.state.carslist.change_fav = " + JSON.stringify(_0x4a4366));
});