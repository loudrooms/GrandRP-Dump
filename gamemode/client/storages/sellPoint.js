class StorehouseSellPoint {
  constructor() {
    this.points = null;
    this.camera = null;
    this.currentPoint = 0;
    this.isActive = false;
    this.subscribeToEvents();
  }
  startShowing(_0x218810) {
    this.points = _0x218810;
    const _0x12eb7b = new mp.Vector3(_0x218810[0].position.x + (_0x218810[0].id < 23 || _0x218810[0].id > 44 ? -2 : 2), _0x218810[0].position.y + (_0x218810[0].id < 23 || _0x218810[0].id > 44 ? 1.5 : -1.5), _0x218810[0].position.z + 2);
    this.camera = mp.cameras.new("default", _0x12eb7b, new mp.Vector3(0, 0, -135), 65);
    this.camera.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 1000, true, false);
    this.currentPoint = 0;
    this.isActive = true;
    HintShow(language["Выберите место, используя стрелки на клавиатуре(стрелка вверх - выбор)"][curr_lang]);
  }
  buy() {
    if (!this.isActive) {
      return;
    }
    const _0x4b2934 = this.points[this.currentPoint];
    mp.events.callRemote("storehouseSellPoint.startDialog", _0x4b2934.id);
  }
  moveCam(_0x443cca) {
    if (!this.isActive) {
      return;
    }
    if (_0x443cca === "prev") {
      if (this.currentPoint <= 0) {
        this.currentPoint = this.points.length - 1;
      } else {
        this.currentPoint--;
      }
    } else if (this.currentPoint >= this.points.length - 1) {
      this.currentPoint = 0;
    } else {
      this.currentPoint++;
    }
    const _0x5cd9b6 = this.points[this.currentPoint].position;
    const _0x41f6d9 = this.points[this.currentPoint].id;
    const _0x193281 = new mp.Vector3(_0x5cd9b6.x + (_0x41f6d9 < 23 || _0x41f6d9 > 44 ? -2 : 2), _0x5cd9b6.y + (_0x41f6d9 < 23 || _0x41f6d9 > 44 ? 1.5 : -1.5), _0x5cd9b6.z + 2);
    this.camera.setCoord(_0x193281.x, _0x193281.y, _0x193281.z);
    this.camera.setRot(0, 0, _0x41f6d9 < 23 || _0x41f6d9 > 44 ? -135 : -315, 2);
  }
  endShowing() {
    if (this.isActive) {
      this.isActive = false;
      this.camera.destroy();
      this.camera = null;
      mp.game.cam.renderScriptCams(false, true, 1000, true, false);
      this.points = null;
    }
  }
  subscribeToEvents() {
    mp.events.add("storehouseSellPoint.startShowing", this.startShowing.bind(this));
    mp.events.add("storehouseSellPoint.endShowing", this.endShowing.bind(this));
    mp.keys.bind(37, false, this.moveCam.bind(this, "prev"));
    mp.keys.bind(38, false, this.buy.bind(this));
    mp.keys.bind(39, false, this.moveCam.bind(this, "next"));
    mp.keys.bind(40, false, this.endShowing.bind(this, "next"));
  }
}
new StorehouseSellPoint();