const localPlayer = mp.players.local;
class PoliceEscort {
  constructor() {
    this.subscribeToEvents();
  }
  render() {
    mp.players.forEachInStreamRange(async _0x21ee03 => {
      if (typeof _0x21ee03.getVariable("policeEscortId") != "number") {
        return;
      }
      const _0x23e690 = mp.players.atRemoteId(_0x21ee03.getVariable("policeEscortId"));
      if (!_0x23e690 || !_0x23e690.handle || !_0x21ee03 || !_0x21ee03.handle) {
        return;
      }
      if (!mp.game.streaming.hasAnimDictLoaded("grand_animations_custom")) {
        await requestAnimDict("grand_animations_custom", true);
      }
      if (!_0x21ee03.isPlayingAnim("grand_animations_custom", "arrest_owner", 3)) {
        _0x21ee03.taskPlayAnim("grand_animations_custom", "arrest_owner", 8, -8, -1, 49, 0, false, false, false);
      }
      if (!_0x23e690.isPlayingAnim("grand_animations_custom", "arrest_follower", 3)) {
        _0x23e690.taskPlayAnim("grand_animations_custom", "arrest_follower", 8, -8, -1, 49, 0, false, false, false);
      }
      const _0x43f6b6 = mp.game.entity.getBoneRotation(_0x21ee03.handle, 91);
      _0x23e690.setHeading(_0x43f6b6.z - 90);
      _0x21ee03.setIkTarget(4, _0x23e690.handle, 24818, 0, -0.12, -0.1, 0, -1, -1);
      _0x21ee03.setIkTarget(3, _0x23e690.handle, 61007, -0.1, -0.06, -0.075, 0, 200, 300);
      const _0x496347 = mp.game.object.getOffsetFromCoords(_0x21ee03.position.x, _0x21ee03.position.y, _0x21ee03.position.z, _0x21ee03.getPhysicsHeading(), 0, 3, 0);
      mp.game.invoke("0x8339643499D1222E", _0x23e690.handle, 0, 0, 0);
      if (_0x21ee03.isWalking()) {
        _0x23e690.taskGoStraightToCoord(_0x496347.x, _0x496347.y, _0x496347.z, 1.2, -1, _0x21ee03.getHeading(), 0);
      } else {
        _0x23e690.taskStandStill(1);
      }
      _0x23e690.attachTo(_0x21ee03.handle, 0, 0, 0.7, 0, 0, 0, 0, true, false, false, true, 2, true);
      if (!mp.game.streaming.hasClipSetLoaded("move_m@quick")) {
        for (mp.game.streaming.requestClipSet("move_m@quick"); !mp.game.streaming.hasClipSetLoaded("move_m@quick");) {
          mp.game.wait(0);
        }
      }
      _0x21ee03.setMovementClipset("move_m@quick", 0);
      _0x23e690.setMovementClipset("move_m@quick", 0);
      const _0x4ab32f = mp.game.controls;
      if (_0x21ee03 == localPlayer || _0x23e690 == localPlayer) {
        _0x4ab32f.disableControlAction(0, 21, true);
        _0x4ab32f.disableControlAction(0, 24, true);
        _0x4ab32f.disableControlAction(0, 25, true);
        _0x4ab32f.disableControlAction(0, 69, true);
        _0x4ab32f.disableControlAction(0, 75, true);
        _0x4ab32f.disableControlAction(0, 92, true);
        _0x4ab32f.disableControlAction(0, 114, true);
        _0x4ab32f.disableControlAction(0, 140, true);
        _0x4ab32f.disableControlAction(0, 141, true);
        _0x4ab32f.disableControlAction(0, 142, true);
        _0x4ab32f.disableControlAction(0, 257, true);
        _0x4ab32f.disableControlAction(0, 263, true);
        _0x4ab32f.disableControlAction(0, 264, true);
      }
    });
  }
  changeSharedData(_0x3d9519, _0x24d410, _0x42d920) {
    if (_0x24d410 === null && typeof _0x42d920 == "number") {
      const _0x56ea82 = _0x3d9519;
      const _0x15f27e = mp.players.atRemoteId(_0x42d920);
      if (_0x56ea82 && _0x56ea82.handle !== 0) {
        _0x56ea82.clearTasks();
        _0x56ea82.resetMovementClipset(0);
      }
      if (_0x15f27e && _0x15f27e.handle !== 0) {
        _0x15f27e.clearTasks();
        _0x15f27e.detach(false, false);
        _0x15f27e.resetMovementClipset(0);
      }
    }
  }
  subscribeToEvents() {
    mp.events.add("render", this.render.bind(this));
    mp.events.addDataHandler("policeEscortId", this.changeSharedData.bind(this));
  }
}
new PoliceEscort();