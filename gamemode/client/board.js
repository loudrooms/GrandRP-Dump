global.BoardOpened = false;
mp.events.add("Client_OpenADBoard", (_0x13066b, _0x266e4e) => {
  CloseMobile();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x458aa3 = "{\"filter_tab\":0,\"board_items\":" + JSON.stringify(_0x13066b) + ",\"can_edit\":" + _0x266e4e + ",\"searchedName\":'',\"show\":true}";
  main_browser.execute("APPS.state.board = " + _0x458aa3);
  BoardOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseBoard = function () {
  if (BoardOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.board.show = false;");
    BoardOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_CloseBoard", () => {
  CloseBoard();
});
mp.events.add("Client_FilterByName", _0x33825e => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_FilterByName", _0x33825e);
  }
});
mp.events.add("Client_CallFromBoard", _0x3647bc => {
  if (_0x3647bc) {
    CloseBoard();
    _0x3647bc = parseInt(_0x3647bc);
    SendCallFromDesign(_0x3647bc);
  }
});
mp.events.add("Client_SMSFromBoard", _0x37ec52 => {
  if (_0x37ec52) {
    CloseBoard();
    _0x37ec52 = parseInt(_0x37ec52);
    SendSMSFromDesign(_0x37ec52);
  }
});
mp.events.add("Client_PlaceAnADToBoard", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_PlaceAnADToBoard");
  }
});
mp.events.add("Client_BoardLoadMore", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_BoardLoadMore");
  }
});
mp.events.add("Client_SubscribeToBoardTab", _0x59f38b => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SubscribeToBoardTab", _0x59f38b);
  }
});
mp.events.add("Client_ChangeFilterTab", _0x485981 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_ChangeFilterTab", _0x485981);
  }
});
mp.events.add("Client_DeleteADFromBoard", _0x3307c0 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeleteADFromBoard", _0x3307c0);
  }
});
mp.events.add("Client_EditAdPostFromBoard", _0xd47564 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_EditAdPostFromBoard", _0xd47564);
  }
});
mp.events.add("Client_LoadMoreADsOnBoard", (_0x1ccb80, _0x57139b = false, _0x2771fa = 0, _0x4fff41) => {
  if (_0x57139b) {
    if (_0x4fff41 == null) {
      main_browser.execute("APPS.state.board.searchedName = '';");
    }
    main_browser.execute("APPS.state.board.board_items = [];");
    main_browser.execute("APPS.state.board.filter_tab = " + _0x2771fa + ";");
  }
  main_browser.execute("APPS.state.board.board_items = APPS.state.board.board_items.concat(" + JSON.stringify(_0x1ccb80) + ")");
});
global.is_board_item_photo = false;
mp.events.add("Client_DoBoardItemPhoto", _0x38e427 => {
  CloseBoard();
  at_mugshot_photo = _0x38e427;
  OpenMobileCamera(14);
  is_board_item_photo = true;
});
mp.events.add("Client_SendBoardItemDiscription", _0x29684b => {
  if (last_photo_url && at_mugshot_photo && MobileCameraOpened && title_name != "") {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_SendBoardItemOnSale", at_mugshot_photo, last_photo_url, title_name, _0x29684b);
  }
});
let title_name = "";
mp.events.add("Client_SendBoardItemTitle", _0x245c77 => {
  title_name = _0x245c77;
  main_browser.execute("APPS.state.photo.page = 17;");
});