const trailerModelsForIgnoreDamage = [mp.game.joaat("trailers"), mp.game.joaat("tanker2"), mp.game.joaat("trailerlogs"), mp.game.joaat("docktrailer"), mp.game.joaat("tr4")];
class Trucker {
  constructor() {
    this.isWorking = false;
    this.trailer = null;
    this.trailerMarkerRender = null;
    this.attachedTrailer = null;
    this.trailerAttachListenerInterval = null;
    this.exitTruckNotifyTime = 60;
    this.exitTruckNotifyInterval = null;
    this.startTimeout = null;
    this.subscribeToEvents();
  }
  setIsWorking(_0x12fcfb) {
    this.isWorking = _0x12fcfb;
    if (_0x12fcfb) {
      this.trailerAttachListenerInterval = setInterval(this.trailerAttachListener.bind(this), 1000);
      ShowNotification(language["Открыть меню работы можно в любом месте клавишей J"][curr_lang], 2);
      mp.events.call("Client_Hint_Notify", language["Открыть меню работы можно в любом месте клавишей J"][curr_lang]);
    } else {
      if (this.trailerAttachListenerInterval !== null) {
        clearInterval(this.trailerAttachListenerInterval);
        this.trailerAttachListenerInterval = null;
      }
      mp.events.call("Client_ResetGPS");
      this.toggleExitTruckNotify(false);
    }
  }
  startWork() {
    if (!(this.startTimeout > new Date().getTime())) {
      this.startTimeout = new Date().getTime() + 5000;
      mp.events.callRemote("trucker.startWork");
    }
  }
  finishWork() {
    mp.events.callRemote("trucker.finishWork");
  }
  selectTruck(_0x2319d4) {
    mp.events.callRemote("trucker.selectTruck", _0x2319d4);
  }
  selectTruckBodyKit(_0x5ba1fd) {
    mp.events.callRemote("trucker.selectTruckBodyKit", _0x5ba1fd);
  }
  async getAvailableTenders() {
    return JSON.stringify((await mp.events.callRemoteProc("trucker.getAvailableTenders")) || []);
  }
  async getDriverOrders() {
    return JSON.stringify((await mp.events.callRemoteProc("trucker.getDriverOrders")) || []);
  }
  async getDriverOrdersHistory() {
    return JSON.stringify((await mp.events.callRemoteProc("trucker.getDriverOrdersHistory")) || []);
  }
  async takeTender(_0x4c28ad) {
    return await mp.events.callRemoteProc("trucker.takeTender", _0x4c28ad);
  }
  async setOrderPriority(_0x154638, _0x906c5d) {
    return await mp.events.callRemoteProc("trucker.setOrderPriority", _0x154638, _0x906c5d);
  }
  async approveRoute() {
    return await mp.events.callRemoteProc("trucker.approveRoute");
  }
  async businessGetDrivers() {
    return JSON.stringify((await mp.events.callRemoteProc("trucker.business.getDrivers")) || []);
  }
  async businessGetOrdersHistory() {
    return JSON.stringify((await mp.events.callRemoteProc("trucker.business.getOrdersHistory")) || []);
  }
  async orderingProductsGetInfo() {
    const _0x48eb34 = await mp.events.callRemoteProc("trucker.orderingProducts.getInfo");
    if (typeof _0x48eb34 == "object") {
      return JSON.stringify(_0x48eb34);
    }
  }
  async addBusinessTender(_0x855165) {
    return await mp.events.callRemoteProc("trucker.business.addTender", _0x855165);
  }
  async businessSelectDriver(_0x2ee0c4, _0x3682b2) {
    return await mp.events.callRemoteProc("trucker.business.selectDriver", _0x2ee0c4, _0x3682b2);
  }
  toggleExitTruckNotify(_0x15661e) {
    if (_0x15661e) {
      this.exitTruckNotifyTime = 180;
      this.exitTruckNotifyInterval = setInterval(() => {
        this.exitTruckNotifyTime--;
        main_browser.execute("APPS.state.hud.trucker_exit_vehicle_time = " + this.exitTruckNotifyTime + ";");
      }, 1000);
    } else if (this.exitTruckNotifyInterval) {
      clearInterval(this.exitTruckNotifyInterval);
      this.exitTruckNotifyInterval = null;
    }
    main_browser.execute("APPS.state.hud.trucker_exit_vehicle_time = " + this.exitTruckNotifyTime + ";");
    main_browser.execute("APPS.state.hud.trucker_exit_vehicle_show = " + !!_0x15661e + ";");
  }
  async howGetTruck() {
    mp.events.call("tablet.close");
    await new Promise(_0x5911f2 => setTimeout(_0x5911f2, 500));
    mp.events.callRemote("Server_GoToCertainCaseThroughMenu", 117);
  }
  openTablet() {
    if (this.isWorking) {
      mp.events.callRemote("server.tablet.show");
    }
  }
  trailerAttachListener() {
    const {
      vehicle: _0x4f33ec
    } = mp.players.local;
    if (!_0x4f33ec) {
      return;
    }
    const _0x4843ca = _0x4f33ec.isAttachedToTrailer();
    if ((!_0x4843ca || !this.attachedTrailer) && (!!_0x4843ca || !!this.attachedTrailer)) {
      if (_0x4843ca) {
        this.attachedTrailer = mp.vehicles.atHandle(_0x4f33ec.getTrailer(0));
        mp.events.callRemote("trucker.trailerAttached", this.attachedTrailer);
      } else {
        this.attachedTrailer = null;
      }
    }
  }
  setTrailer(_0x32ca0f) {
    this.trailer = _0x32ca0f;
    if (_0x32ca0f) {
      this.trailerMarkerRender = new mp.Event("render", () => {
        if (!this.trailer || this.trailer === this.attachedTrailer) {
          return;
        }
        const {
          x: _0x1054cd,
          y: _0x1104ce,
          z: _0xa2d95c
        } = this.trailer.position.add(new mp.Vector3(0, 0, 4.5));
        mp.game.graphics.drawMarker(0, _0x1054cd, _0x1104ce, _0xa2d95c, 0, 0, 0, 0, 0, 0, 1, 1, 1, 255, 255, 0, 155, true, false, 2, false, null, null, false);
      });
    } else if (this.trailerMarkerRender) {
      this.trailerMarkerRender.destroy();
      this.trailerMarkerRender = null;
    }
  }
  detachTrailer() {
    const {
      vehicle: _0x889fc8
    } = mp.players.local;
    if (mp.vehicles.exists(_0x889fc8)) {
      mp.game.ui.notifications.show(language["Это не Ваш трейлер!"][curr_lang], false, 0, 6);
      _0x889fc8.detachFromTrailer();
    }
  }
  entityStreamIn(_0x5735ad) {
    if (_0x5735ad && mp.vehicles.exists(_0x5735ad) && trailerModelsForIgnoreDamage.includes(_0x5735ad.model)) {
      _0x5735ad.setInvincible(true);
    }
  }
  subscribeToEvents() {
    mp.events.add("playerReady", () => mp.game.vehicle.setExperimentalAttachmentSyncEnabled(true));
    mp.events.add("entityStreamIn", this.entityStreamIn);
    mp.events.add("trucker.startWork", () => this.startWork());
    mp.events.add("trucker.finishWork", this.finishWork);
    mp.events.add("trucker.selectTruck", _0x83786f => this.selectTruck(_0x83786f));
    mp.events.add("trucker.selectTruckBodyKit", _0x200adc => this.selectTruckBodyKit(_0x200adc));
    mp.events.add("trucker.howGetTruck", this.howGetTruck);
    mp.events.add("trucker.setIsWorking", _0x4ac3c6 => this.setIsWorking(_0x4ac3c6));
    mp.events.add("trucker.setTrailer", _0x39a87a => this.setTrailer(_0x39a87a));
    mp.events.add("trucker.detachTrailer", this.detachTrailer);
    mp.events.addProc("trucker.getAvailableTenders", this.getAvailableTenders);
    mp.events.addProc("trucker.getDriverOrders", this.getDriverOrders);
    mp.events.addProc("trucker.getDriverOrdersHistory", this.getDriverOrdersHistory);
    mp.events.addProc("trucker.takeTender", this.takeTender);
    mp.events.addProc("trucker.setOrderPriority", this.setOrderPriority);
    mp.events.addProc("trucker.approveRoute", this.approveRoute);
    mp.events.addProc("trucker.business.getDrivers", this.businessGetDrivers);
    mp.events.addProc("trucker.business.getOrdersHistory", this.businessGetOrdersHistory);
    mp.events.addProc("trucker.business.addTender", this.addBusinessTender);
    mp.events.addProc("trucker.business.selectDriver", this.businessSelectDriver);
    mp.events.addProc("trucker.orderingProducts.getInfo", this.orderingProductsGetInfo);
    mp.events.add("trucker.toggleExitTruckNotify", _0x41ea60 => this.toggleExitTruckNotify(_0x41ea60));
    mp.keys.bind(74, false, () => this.openTablet());
  }
}
new Trucker();