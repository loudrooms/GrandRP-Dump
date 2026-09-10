let delivery_marker;
let delivery_blips;
let delivery_shape;
global.MailDeliveryJobOpened = false;
mp.events.add("Client_MailDeliveryJobBrowser", (_0x295aa6, _0x52b373) => {
  if (GlobalCheck() == 1) {
    return;
  }
  mp.events.call("Disablechat");
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
  MailDeliveryJobOpened = true;
  const _0x2d71f5 = "{\"count\":" + _0x52b373 + ",\"job\":" + _0x295aa6 + ",\"show\":true}";
  main_browser.execute("APPS.state.work_mail = " + _0x2d71f5);
  mp.gui.cursor.show(true, true);
});
global.CloseMailDeliveryBrowser = function () {
  if (MailDeliveryJobOpened) {
    MailDeliveryJobOpened = false;
    main_browser.execute("APPS.state.work_mail.show = false;");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("Client_DeliveryJob", () => {
  if (!chatActive && !!loggedin && !(new Date().getTime() - lastCheck < 1000) && !!jobDesignOpened) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_DeliveryJob");
  }
});
mp.events.add("Client_DeliveryJobChangeButton", _0x2eeb0a => {
  main_browser.execute("APPS.state.work_mail.job = " + _0x2eeb0a);
});
mp.events.add("Client_ShowDHLPosition", (_0x48f95a, _0x3ddbaa, _0x1bdb54) => {
  if (delivery_shape) {
    delivery_shape.destroy();
    delivery_shape = undefined;
  }
  if (delivery_blips) {
    delivery_blips.destroy();
    delivery_blips = undefined;
  }
  if (delivery_marker) {
    delivery_marker.destroy();
    delivery_marker = undefined;
  }
  delivery_blips = mp.blips.new(1, new mp.Vector3(parseFloat(_0x48f95a), parseFloat(_0x3ddbaa), parseFloat(_0x1bdb54)), {
    name: language["Место направления"][curr_lang],
    color: 83
  });
  delivery_blips.setRoute(true);
  delivery_marker = mp.markers.new(1, new mp.Vector3(parseFloat(_0x48f95a), parseFloat(_0x3ddbaa), parseFloat(_0x1bdb54) - 5), parseFloat(120), {
    color: [255, 255, 0, 75],
    visible: true,
    dimension: 0
  });
  delivery_shape = mp.colshapes.newCircle(parseFloat(_0x48f95a), parseFloat(_0x3ddbaa), 60, 0);
  delivery_shape.is_dhl_gps_shape = true;
});
global.can_unload_collector = false;
global.can_load_collector = false;
mp.events.add("playerEnterColshape", _0x581015 => {
  if (_0x581015.is_dhl_gps_shape == 1) {
    if (delivery_shape) {
      delivery_shape.destroy();
      delivery_shape = undefined;
    }
    if (delivery_blips) {
      delivery_blips.destroy();
      delivery_blips = undefined;
    }
    mp.events.callRemote("Server_DHLReachPoint");
    return;
  }
});
mp.events.add("Client_DeleteMailJobVariables", () => {
  if (delivery_shape) {
    delivery_shape.destroy();
    delivery_shape = undefined;
  }
  if (delivery_blips) {
    delivery_blips.destroy();
    delivery_blips = undefined;
  }
  if (delivery_marker) {
    delivery_marker.destroy();
    delivery_marker = undefined;
  }
});