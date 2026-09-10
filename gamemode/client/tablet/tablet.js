class Trucker {
  constructor() {
    this.subscribeToEvents();
  }
  updateDriver(_0x4e5f25) {
    if (_0x4e5f25) {
      main_browser.execute("\n            APPS.state.tablet.trucker.driver.id = " + _0x4e5f25.id + ";\n            APPS.state.tablet.trucker.driver.pid = " + _0x4e5f25.pid + ";\n\n            APPS.state.tablet.trucker.driver.exp = " + _0x4e5f25.exp + ";\n            APPS.state.tablet.trucker.driver.level = " + _0x4e5f25.level + ";\n            APPS.state.tablet.trucker.driver.needExpForNextLevel = " + _0x4e5f25.needExpForNextLevel + ";\n            APPS.state.tablet.trucker.driver.hasMaxLevel = " + _0x4e5f25.hasMaxLevel + ";\n            APPS.state.tablet.trucker.driver.salaryMultiplier = " + _0x4e5f25.salaryMultiplier + ";\n            APPS.state.tablet.trucker.driver.completedOrders = " + _0x4e5f25.completedOrders + ";\n            APPS.state.tablet.trucker.driver.odometer = " + _0x4e5f25.odometer + ";\n            APPS.state.tablet.trucker.driver.truck = " + _0x4e5f25.truck + ";\n            APPS.state.tablet.trucker.driver.truckBodyKit = " + _0x4e5f25.truckBodyKit + ";\n            APPS.state.tablet.trucker.driver.availableTrucks = " + JSON.stringify(_0x4e5f25.availableTrucks) + ";\n            APPS.state.tablet.trucker.driver.availableBodyKits = " + JSON.stringify(_0x4e5f25.availableBodyKits) + ";\n\n            APPS.state.tablet.trucker.driver.currentRouteCost = " + _0x4e5f25.currentRouteCost + ";\n            APPS.state.tablet.trucker.driver.completedOrdersPerShift = " + _0x4e5f25.completedOrdersPerShift + ";\n            APPS.state.tablet.trucker.driver.earningsPerShift = " + _0x4e5f25.earningsPerShift + ";\n            \n            APPS.state.tablet.trucker.driver.stage = '" + _0x4e5f25.stage + "';\n\n            APPS.state.tablet.trucker.isWorks = true;\n        ");
    } else {
      main_browser.execute("APPS.state.tablet.trucker.isWorks = false");
    }
  }
  updateOrders(_0x47a6de) {
    main_browser.execute("\n            APPS.state.tablet.trucker.orders = " + JSON.stringify(_0x47a6de) + ";\n        ");
  }
  async getInfo() {
    const _0x8f1815 = (await mp.events.callRemoteProc("tablet.trucker.getInfo")) || {};
    const _0x2142b2 = _0xac0a2e => Array.isArray(_0xac0a2e) && _0xac0a2e.length > 0 ? typeof _0xac0a2e[0] == "string" ? TranslateText(_0xac0a2e[0], ..._0xac0a2e.slice(1)) : _0xac0a2e : typeof _0xac0a2e == "string" ? TranslateText(_0xac0a2e) : _0xac0a2e;
    if (Array.isArray(_0x8f1815.loadingPoints)) {
      _0x8f1815.loadingPoints = _0x8f1815.loadingPoints.map(_0xc97b47 => ({
        ..._0xc97b47,
        title: _0x2142b2(_0xc97b47.title)
      }));
    }
    if (Array.isArray(_0x8f1815.unloadingPoints)) {
      _0x8f1815.unloadingPoints = _0x8f1815.unloadingPoints.map(_0x2a5e9d => ({
        ..._0x2a5e9d,
        title: _0x2142b2(_0x2a5e9d.title)
      }));
    }
    return JSON.stringify(_0x8f1815);
  }
  subscribeToEvents() {
    mp.events.add("tablet.trucker.updateDriver", this.updateDriver);
    mp.events.addProc("tablet.trucker.getInfo", this.getInfo);
    mp.events.add("tablet.trucker.updateOrders", this.updateOrders);
  }
}
new Trucker();
class Tablet {
  constructor() {
    global.tabletOpened = false;
    this.subscribeToEvents();
  }
  show() {
    if (!tabletOpened && !chatActive && !!loggedin && GlobalCheck() != 1) {
      main_browser.execute("\n            APPS.state.tablet.currentApp = null; // принудительно открываем trucker, если добавятся приложения, то вернуть сюда desktop\n            APPS.state.tablet.show = true;    \n        ");
      tabletOpened = true;
      ChangeHudState(false);
      mp.events.call("Disablechat");
      mp.gui.cursor.show(true, true);
      setTimeout(() => {
        mp.gui.cursor.show(true, true);
      }, 200);
    }
  }
  close() {
    if (tabletOpened) {
      main_browser.execute("\n            APPS.state.tablet.show = false;    \n        ");
      tabletOpened = false;
      ChangeHudState(true);
      mp.events.call("Enablechat");
      mp.gui.cursor.show(false, false);
    }
  }
  subscribeToEvents() {
    mp.events.add("client.tablet.show", this.show);
    mp.events.add("tablet.close", this.close);
  }
}
new Tablet();