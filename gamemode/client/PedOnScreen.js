class PedOnScreen {
  screenPedHandle;
  constructor() {
    this.subscribeToEvents();
  }
  async createPed() {
    try {
      mp.game.ui.setPauseMenuActive(false);
      mp.game.ui.setFrontendActive(false);
      mp.game.ui.activateFrontendMenu(mp.game.gameplay.getHashKey("FE_MENU_VERSION_EMPTY_NO_BACKGROUND"), false, -1);
      let _0x19f233 = mp.peds.new(mp.players.local.model, new mp.Vector3(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z - 10), 0, mp.players.local.dimension);
      const _0x384caa = Date.now();
      while (_0x19f233.handle === 0) {
        await mp.game.waitAsync(15);
        if (Date.now() - _0x384caa > 2000) {
          return;
        }
      }
      _0x19f233.setInvincible(true);
      _0x19f233.setCollision(false, false);
      mp.players.local.cloneToTarget(_0x19f233.handle);
      mp.game.entity.setVisible(_0x19f233.handle, false, false);
      this.screenPedHandle = _0x19f233.handle;
      mp.game.ped.setCapsule(this.screenPedHandle, 0.001);
      mp.game.wait(100);
      mp.game.hud.givePedToPauseMenu(this.screenPedHandle, 1);
      mp.game.hud.setPauseMenuPedLighting(true);
      mp.game.hud.setPauseMenuPedSleepState(true);
      mp.game.hud.replaceColourWithRgba(117, 0, 0, 0, 0);
      mp.game.invoke("0x98215325A695E78A", false);
    } catch (_0x9f670e) {
      mp.gui.chat.push("createPed: ", _0x9f670e);
    }
  }
  deletePed() {
    mp.game.invoke("0xF314CF4F0211894E", 117, 0, 0, 0, 186);
    mp.game.hud.clearPedInPauseMenu();
    mp.game.ui.setPauseMenuActive(false);
    mp.game.ui.setFrontendActive(false);
    mp.game.invoke("0x98215325A695E78A", true);
    let _0x2fc1d8 = mp.peds.atHandle(this.screenPedHandle);
    if (_0x2fc1d8 && mp.peds.exists(_0x2fc1d8)) {
      _0x2fc1d8.destroy();
    }
    this.screenPedHandle = 0;
  }
  setPedProps(_0x2472b2, _0x2aafdf, _0x2e02e4) {
    try {
      if (!this.screenPedHandle) {
        return;
      }
      let _0x4d046e = mp.peds.atHandle(this.screenPedHandle);
      if (_0x4d046e && mp.peds.exists(_0x4d046e)) {
        mp.game.invoke("0x93376B65A266EB5F", this.screenPedHandle, parseInt(_0x2472b2), parseInt(_0x2aafdf), parseInt(_0x2e02e4), true);
      }
    } catch (_0x5c48ab) {}
  }
  setPedComponentVariation(_0x2f7c33, _0x308db0, _0x5af493, _0x2c1427, _0x3a1255 = undefined) {
    try {
      if (!this.screenPedHandle) {
        return;
      }
      let _0x325039 = mp.peds.atHandle(this.screenPedHandle);
      if (_0x325039 && mp.peds.exists(_0x325039)) {
        if (_0x3a1255 != null) {
          mp.game.invoke("0x262B14F48D29DE80", this.screenPedHandle, 3, parseInt(_0x3a1255), 0, 0);
        }
        mp.game.invoke("0x262B14F48D29DE80", this.screenPedHandle, parseInt(_0x2f7c33), parseInt(_0x308db0), parseInt(_0x5af493), parseInt(_0x2c1427));
      }
    } catch (_0x45a745) {}
  }
  updateClothes() {
    if (!this.screenPedHandle) {
      return;
    }
    let _0x305c0c = mp.peds.atHandle(this.screenPedHandle);
    if (_0x305c0c && mp.peds.exists(_0x305c0c)) {
      if (_0x305c0c.handle == 0) {
        return;
      }
      mp.players.local.cloneToTarget(this.screenPedHandle);
    }
  }
  subscribeToEvents() {
    mp.events.add("pedOnScreen.createPed", this.createPed.bind(this));
    mp.events.add("pedOnScreen.deletePed", this.deletePed.bind(this));
    mp.events.add("pedOnScreen.setPedProps", this.setPedProps.bind(this));
    mp.events.add("pedOnScreen.setPedComponentVariation", this.setPedComponentVariation.bind(this));
    mp.events.add("pedOnScreen.updateClothes", this.updateClothes.bind(this));
  }
}
const pedOnScreen = new PedOnScreen();
pedOnScreen.deletePed();
global.pedOnScreen = pedOnScreen;