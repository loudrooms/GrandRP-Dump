class billiard {
  init() {
    this.tablesPositions = undefined;
    this.ballsOffsets = [{
      id: 0,
      name: "Cueball",
      model: "prop_poolball_cue",
      type: "CUE",
      x: 0.5,
      y: -0.08,
      z: 0.99
    }, {
      id: 1,
      name: "One",
      model: "prop_poolball_1",
      type: "SOLID",
      x: -0.3,
      y: -0.08,
      z: 0.92
    }, {
      id: 2,
      name: "Two",
      model: "prop_poolball_2",
      type: "SOLID",
      x: -0.525,
      y: -0.12,
      z: 0.92
    }, {
      id: 3,
      name: "Three",
      model: "prop_poolball_3",
      type: "SOLID",
      x: -0.375,
      y: -0.036000000000000004,
      z: 0.92
    }, {
      id: 4,
      name: "Four",
      model: "prop_poolball_4",
      type: "SOLID",
      x: -0.6,
      y: -0.0010000000000000009,
      z: 0.92
    }, {
      id: 5,
      name: "Five",
      model: "prop_poolball_5",
      type: "SOLID",
      x: -0.525,
      y: 0.03799999999999999,
      z: 0.92
    }, {
      id: 6,
      name: "Six",
      model: "prop_poolball_6",
      type: "SOLID",
      x: -0.6,
      y: -0.237,
      z: 0.92
    }, {
      id: 7,
      name: "Seven",
      model: "prop_poolball_7",
      type: "SOLID",
      x: -0.45,
      y: -0.159,
      z: 0.92
    }, {
      id: 8,
      name: "Eight",
      model: "prop_poolball_8",
      type: "8BAL",
      x: -0.45,
      y: -0.08,
      z: 0.92
    }, {
      id: 9,
      name: "Nine",
      model: "prop_poolball_9",
      type: "STRIPED",
      x: -0.375,
      y: -0.124,
      z: 0.92
    }, {
      id: 10,
      name: "Ten",
      model: "prop_poolball_10",
      type: "STRIPED",
      x: -0.45,
      y: -0.0010000000000000009,
      z: 0.92
    }, {
      id: 11,
      name: "Eleven",
      model: "prop_poolball_11",
      type: "STRIPED",
      x: -0.525,
      y: -0.198,
      z: 0.92
    }, {
      id: 12,
      name: "Twelve",
      model: "prop_poolball_12",
      type: "STRIPED",
      x: -0.6,
      y: -0.159,
      z: 0.92
    }, {
      id: 13,
      name: "Thirteen",
      model: "prop_poolball_13",
      type: "STRIPED",
      x: -0.6,
      y: -0.08,
      z: 0.92
    }, {
      id: 14,
      name: "Fourteen",
      model: "prop_poolball_14",
      type: "STRIPED",
      x: -0.6,
      y: 0.077,
      z: 0.92
    }, {
      id: 15,
      name: "Fiftteen",
      model: "prop_poolball_15",
      type: "STRIPED",
      x: -0.525,
      y: -0.04,
      z: 0.92
    }];
    this.potOffsets = [{
      x: 1.255,
      y: 0.73,
      z: 0.92
    }, {
      x: 1.255,
      y: -0.82,
      z: 0.92
    }, {
      x: -0.14,
      y: 0.75,
      z: 0.92
    }, {
      x: -0.1,
      y: -0.85,
      z: 0.92
    }, {
      x: -1.525,
      y: 0.753,
      z: 0.92
    }, {
      x: -1.525,
      y: -0.79,
      z: 0.92
    }];
    this.hitOffsets = [{
      x: 2,
      y: 0,
      z: 0
    }, {
      x: -2,
      y: 0,
      z: 0
    }, {
      x: 0,
      y: 1,
      z: 0
    }, {
      x: 0,
      y: -1,
      z: 0
    }];
    this.ballsInTable = [];
    this.tables = [];
    this.camera = null;
    this.cue = null;
    this.enterTable = undefined;
    this.oldposition = null;
    this.aim = false;
    this.power = 0;
    this.aimStartTime = 0;
    this.tablesInfo = [];
    this.at_billiard = false;
  }
  constructor() {
    this.init();
    mp.events.add("render", () => {
      if (this.enterTable != null && this.at_billiard) {
        if (this.tablesPositions != null && this.ballsInTable) {
          this.ballsInTable.forEach((_0x30945d, _0x362f63) => {
            if (mp.objects.exists(_0x30945d)) {
              _0x30945d.position = _0x30945d.getCoords(true);
              if ((_0x30945d.getVelocity().x > 0 || _0x30945d.getVelocity().y > 0) && !_0x30945d.pot) {
                this.potOffsets.forEach(_0x1b34b3 => {
                  const _0x1620ed = mp.game.object.getObjectOffsetFromCoords(this.tablesPositions.x, this.tablesPositions.y, this.tablesPositions.z, 0, _0x1b34b3.x, _0x1b34b3.y, _0x1b34b3.z);
                  if (mp.game.system.vdist(_0x30945d.position.x, _0x30945d.position.y, _0x30945d.position.z, _0x1620ed.x, _0x1620ed.y, _0x1620ed.z) < 0.25) {
                    _0x30945d.setVelocity(0, 0, 0);
                    if (_0x30945d.name == "Cueball") {
                      const _0x3c7b15 = mp.game.object.getObjectOffsetFromCoords(this.tablesPositions.x, this.tablesPositions.y, this.tablesPositions.z, 0, this.ballsOffsets[0].x, this.ballsOffsets[0].y, this.ballsOffsets[0].z);
                      _0x30945d.position = _0x3c7b15;
                      _0x30945d.freezePosition(true);
                      return;
                    }
                    _0x30945d.pot = true;
                    _0x30945d.setInvincible(true);
                    _0x30945d.setAlpha(0);
                    _0x30945d.alpha = 0;
                    _0x30945d.setCollision(false, false);
                    const _0x1e00e7 = mp.objects.new(_0x30945d.model, _0x30945d.getCoords(true), {
                      rotation: new mp.Vector3(0, 0, 90),
                      alpha: 0,
                      dimension: mp.players.local.dimension
                    });
                    _0x1e00e7.name = _0x30945d.name;
                    _0x1e00e7.spawnPosition = _0x30945d.position;
                    _0x1e00e7.freezePosition(false);
                    _0x1e00e7.setCollision(true, true);
                    _0x1e00e7.pot = true;
                    _0x30945d.destroy();
                    _0x30945d = _0x1e00e7;
                    this.ballsInTable[_0x362f63] = _0x1e00e7;
                    mp.events.callRemote("server_ballpot", _0x30945d.name, _0x362f63);
                  }
                });
              }
            }
          });
        }
        if (this.aim == 0 && mp.game.controls.isDisabledControlJustPressed(0, 25) && this.enterTable != null && this.ballsInTable[0]) {
          if (mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, this.ballsInTable[0].position.x, this.ballsInTable[0].position.y, this.ballsInTable[0].position.z) > 1.5) {
            return mp.game.ui.notifications.show(language["Вы находитесь далеко от белого шара"][curr_lang], false, 0, 6);
          }
          if (this.ballsInTable[0].getVelocity().x > 0 || this.ballsInTable[0].getVelocity().y > 0) {
            return mp.game.ui.notifications.show(language["Дождитесь, пока белый шар остановится"][curr_lang], false, 0, 6);
          }
          if (GlobalCheck() == 1 && !at_close_billiard_cam) {
            return;
          }
          mp.game.ui.displayRadar(false);
          if (this.camera != null) {
            this.camera.destroy();
            this.camera = null;
          }
          this.camera = mp.cameras.new("default", new mp.Vector3(this.tablesPositions.x - 0.13, this.tablesPositions.y - 0.08, this.tablesPositions.z + 3.2), new mp.Vector3(0, 0, 0), 60);
          this.camera.pointAtCoord(this.tablesPositions.x - 0.13, this.tablesPositions.y - 0.08, this.tablesPositions.z);
          this.camera.setActive(true);
          mp.game.cam.renderScriptCams(true, false, 500, true, false);
          this.cue = mp.objects.new(mp.game.joaat("prop_pool_cue"), new mp.Vector3(this.ballsInTable[0].position.x + 1, this.ballsInTable[0].position.y, this.ballsInTable[0].position.z), {
            rotation: new mp.Vector3(0, 90, 180),
            dimension: mp.players.local.dimension
          });
          if (this.cue != null) {
            this.cue.setCollision(false, false);
            this.cue.attachTo(this.ballsInTable[0].handle, 0, 0, -1, 0, -90, 90, 0, true, true, false, false, 0, true);
          }
          this.power = 0;
          this.aim = true;
          this.aimStartTime = Date.now();
          at_close_billiard_cam = true;
          setTimeout(() => {
            if (this.aim) {
              mp.gui.cursor.show(true, true);
            }
          }, 0);
          HintShow(language["Регулировать силу удара можно клавишами W и S"][curr_lang]);
          mp.events.callRemote("Server_SyncBilliardAnim", true);
        } else if (this.aim == 1 && mp.keys.isDown(27) && Date.now() - this.aimStartTime > 200) {
          if (this.cue != null) {
            this.cue.destroy();
            this.cue = null;
          }
          if (this.camera != null) {
            this.camera.destroy();
            this.camera = null;
          }
          mp.gui.cursor.show(false, false);
          mp.game.cam.renderScriptCams(false, true, 0, true, false);
          mp.game.ui.displayRadar(true);
          this.aim = false;
          at_close_billiard_cam = false;
          HintClose();
          mp.events.callRemote("Server_SyncBilliardAnim", false);
        } else if ((mp.keys.isDown(87) || mp.keys.isDown(38)) && this.aim == 1) {
          if (this.power < 0.4) {
            this.power += 0.001;
            if (this.cue != null && this.ballsInTable && this.ballsInTable[0]) {
              this.cue.attachTo(this.ballsInTable[0].handle, 0, 0, -1 - this.power, 0, -90, 90, 0, true, true, false, false, 0, true);
            }
          }
        } else if ((mp.keys.isDown(83) || mp.keys.isDown(40)) && this.aim == 1 && this.power > 0) {
          this.power -= 0.001;
          if (this.cue != null && this.ballsInTable && this.ballsInTable[0]) {
            this.cue.attachTo(this.ballsInTable[0].handle, 0, 0, -1 - this.power, 0, -90, 90, 0, true, true, false, false, 0, true);
          }
        }
        if (this.cue != null && this.ballsInTable[0]) {
          let _0x5a3de1 = mp.gui.cursor.position;
          let _0x56adf6 = mp.game.graphics.getScreenActiveResolution(0, 0);
          let _0x4fd1d3 = _0x5a3de1[0] - _0x56adf6.x / 2;
          let _0x361aa3 = _0x5a3de1[1] - _0x56adf6.y / 2;
          let _0x25ff7a = Math.atan2(_0x361aa3, _0x4fd1d3) * (180 / Math.PI);
          if (_0x25ff7a < 0) {
            _0x25ff7a = Math.abs(_0x25ff7a);
          } else if (_0x25ff7a > 0) {
            _0x25ff7a = _0x25ff7a - _0x25ff7a - _0x25ff7a;
          }
          this.ballsInTable[0].rotation = new mp.Vector3(this.ballsInTable[0].rotation.x, this.ballsInTable[0].rotation.y, _0x25ff7a - 100);
        }
      }
    });
    mp.events.add("click", (_0xe08962, _0x46b153, _0x23ec6b, _0x17b33b) => {
      if (this.aim && this.at_billiard && this.ballsInTable[0] && _0x17b33b === "left" && _0x23ec6b === "up") {
        if (!(Date.now() - this.aimStartTime <= 300)) {
          mp.events.callRemote("server_hitpool", JSON.stringify(this.ballsInTable[0].rotation), this.power);
        }
      }
    });
    mp.events.add("client_hitpool", (_0x790336, _0x2fdd6a) => {
      if (!this.at_billiard) {
        return;
      }
      _0x790336 = JSON.parse(_0x790336);
      if (this.cue != null) {
        this.cue.destroy();
        this.cue = null;
      }
      if (this.aim) {
        if (this.camera != null) {
          this.camera.destroy();
          this.camera = null;
        }
        mp.gui.cursor.show(false, false);
        mp.game.cam.renderScriptCams(false, true, 0, true, false);
        mp.game.ui.displayRadar(true);
        this.aim = false;
        at_close_billiard_cam = false;
        HintClose();
        mp.events.callRemote("Server_SyncBilliardAnim", false);
      }
      const _0x20dbd1 = 0.4 + _0x2fdd6a * 5 * 2;
      const _0x12f98c = _0x790336;
      let _0x15f46b = _0x12f98c.z * (Math.PI / 180);
      let _0x27fbaa = _0x12f98c.x * (Math.PI / 180);
      let _0x4fede0 = Math.abs(Math.cos(_0x27fbaa));
      const _0x52f17e = {
        x: -Math.sin(_0x15f46b) * (_0x4fede0 * _0x20dbd1),
        y: Math.cos(_0x15f46b) * (_0x4fede0 * _0x20dbd1)
      };
      this.ballsInTable.forEach(_0xd2041 => {
        _0xd2041.freezePosition(false);
      });
      if (this.ballsInTable[0] && mp.objects.exists(this.ballsInTable[0])) {
        this.ballsInTable[0].setVelocity(_0x52f17e.x, _0x52f17e.y, 0);
      }
      this.tables.status = true;
    });
    mp.events.add("client_endhitpool", () => {
      if (!this.at_billiard) {
        return;
      }
      if (!this.enterTable || !this.tables.status) {
        return;
      }
      let _0x1a5c2c = [];
      this.ballsInTable.forEach(_0x32e864 => {
        if (mp.objects.exists(_0x32e864)) {
          _0x32e864.setVelocity(0, 0, 0);
          const _0x2e3e83 = {
            position: _0x32e864.getCoords(true),
            pot: _0x32e864.pot
          };
          _0x1a5c2c.push(_0x2e3e83);
          _0x32e864.freezePosition(true);
          _0x32e864.setCollision(true, true);
        }
      });
      this.tables.status = false;
      mp.events.callRemote("Server_UpdatePoolBalls", JSON.stringify(_0x1a5c2c));
    });
    mp.events.add("Client_UpdateTableBallsInfo", (_0x20f0d3, _0x5e7e7b = false, _0x24426d) => {
      if (this.at_billiard) {
        if (_0x5e7e7b == 1) {
          this.tablesPositions = _0x24426d;
          this.enterTable = true;
          this.ballsOffsets.forEach((_0x21c59c, _0x2b0cac) => {
            let _0x4caf75 = new mp.Vector3(0, 0, 0);
            if (_0x20f0d3[_0x2b0cac].position && _0x20f0d3[_0x2b0cac].position.x != 0) {
              _0x4caf75 = _0x20f0d3[_0x2b0cac].position;
            } else if (this.tablesPositions) {
              _0x4caf75 = mp.game.object.getObjectOffsetFromCoords(this.tablesPositions.x, this.tablesPositions.y, this.tablesPositions.z, 0, _0x21c59c.x, _0x21c59c.y, _0x21c59c.z);
            }
            let _0x566384 = 255;
            if (_0x20f0d3[_0x2b0cac].pot == 1) {
              _0x566384 = 0;
            }
            const _0x535040 = mp.objects.new(mp.game.joaat(_0x21c59c.model), _0x4caf75, {
              rotation: new mp.Vector3(0, 0, 90),
              alpha: _0x566384,
              dimension: mp.players.local.dimension
            });
            _0x535040.name = _0x21c59c.name;
            _0x535040.spawnPosition = _0x4caf75;
            _0x535040.freezePosition(false);
            _0x535040.pot = _0x20f0d3[_0x2b0cac].pot;
            if (_0x535040.pot == 1 && _0x2b0cac != 0) {
              _0x535040.setCollision(false, false);
              setTimeout(function () {
                _0x535040.setCollision(false, false);
              }, 100);
            }
            this.ballsInTable.push(_0x535040);
          });
          this.ballsInTable.forEach((_0x4d4b17, _0x2e1948) => {
            if (mp.objects.exists(_0x4d4b17) && _0x4d4b17.pot == 1) {
              _0x4d4b17.setCollision(false, false);
              setTimeout(function () {
                _0x4d4b17.setCollision(false, false);
              }, 100);
            }
          });
        } else {
          this.ballsInTable.forEach((_0x3de826, _0x4ea442) => {
            if (mp.objects.exists(_0x3de826)) {
              _0x3de826.position = _0x20f0d3[_0x4ea442].position;
            }
          });
        }
      }
    });
    mp.events.add("client_startpool", _0x1ab557 => {
      if (!this.at_billiard) {
        return;
      }
      _0x1ab557 = JSON.parse(_0x1ab557);
      this.tablesPositions = _0x1ab557;
      this.enterTable = true;
      let _0x409c34 = [];
      this.ballsOffsets.forEach(_0x1d9aad => {
        mp.game.streaming.requestModel(mp.game.joaat(_0x1d9aad.model));
        let _0x358a07 = 0;
        while (!mp.game.streaming.hasModelLoaded(mp.game.joaat(_0x1d9aad.model)) && _0x358a07 < 10) {
          mp.game.wait(0);
          _0x358a07++;
        }
      });
      this.ballsOffsets.forEach(_0x1b922e => {
        const _0x1d2619 = mp.game.object.getObjectOffsetFromCoords(this.tablesPositions.x, this.tablesPositions.y, this.tablesPositions.z, 0, _0x1b922e.x, _0x1b922e.y, _0x1b922e.z);
        const _0x2b5ee7 = mp.objects.new(parseInt(mp.game.joaat(_0x1b922e.model)), new mp.Vector3(parseFloat(_0x1d2619.x), parseFloat(_0x1d2619.y), parseFloat(_0x1d2619.z)), {
          rotation: new mp.Vector3(0, 0, 90),
          alpha: 255,
          dimension: mp.players.local.dimension
        });
        _0x2b5ee7.name = _0x1b922e.name;
        _0x2b5ee7.spawnPosition = _0x1d2619;
        _0x2b5ee7.freezePosition(false);
        _0x2b5ee7.pot = false;
        const _0x1b96b2 = {
          position: _0x2b5ee7.getCoords(true),
          pot: _0x2b5ee7.pot
        };
        _0x409c34.push(_0x1b96b2);
        this.ballsInTable.push(_0x2b5ee7);
        mp.game.streaming.setModelAsNoLongerNeeded(mp.game.joaat(_0x1b922e.model));
      });
      mp.events.callRemote("Server_SaveFirstPoolBalls", JSON.stringify(_0x409c34));
    });
    mp.events.add("Client_AtBilliard", _0x33d09f => {
      this.at_billiard = _0x33d09f;
    });
    mp.events.add("Client_ClearOnlyBalls", () => {
      if (this.enterTable != null && this.ballsInTable && this.ballsInTable.length > 0) {
        this.ballsInTable.forEach(_0x33dc4c => {
          if (mp.objects.exists(_0x33dc4c)) {
            _0x33dc4c.destroy();
          }
        });
        this.ballsInTable = [];
      }
    });
    mp.events.add("Client_ClearBilliardVariables", () => {
      if (this.enterTable != null && this.ballsInTable && this.ballsInTable.length > 0) {
        this.ballsInTable.forEach(_0xe66b55 => {
          if (mp.objects.exists(_0xe66b55)) {
            _0xe66b55.destroy();
          }
        });
        this.ballsInTable = [];
      }
      if (this.cue != null) {
        this.cue.destroy();
        this.cue = null;
      }
      if (this.camera != null) {
        this.camera.destroy();
        this.camera = null;
      }
      at_close_billiard_cam = false;
      if (GlobalCheck() != 1) {
        mp.gui.cursor.show(false, false);
        mp.game.cam.renderScriptCams(false, true, 0, true, false);
        mp.game.ui.displayRadar(true);
      }
      this.aim = false;
      this.aimStartTime = 0;
      this.enterTable = undefined;
      this.tablesPositions = undefined;
    });
  }
}
new billiard();
let billiard_number = 0;
const OBJECTS_TO_SPAWN = ["grand_pirate_ship010", "grand_pirate_ship09", "grand_pirate_ship08", "grand_pirate_ship07", "grand_pirate_ship06", "grand_pirate_ship05", "grand_pirate_ship04", "grand_pirate_ship03", "grand_pirate_ship02", "grand_pirate_ship01", "grand_pirate_ship_donate"];
const PORTABLE_MARKET_ITEMS = [5964, 6376, 6377, 6800, 6804, 7053, 7255, 7315, 7512, 7513];
const FLAG_WAR_PROP_COUNT = 30;
const MIN_DISTANCE_BETWEEN_FLAGS = 1;
const FLAG_WAR_PROP_HASHES = new Set();
for (let i = 1; i <= 30; i++) {
  FLAG_WAR_PROP_HASHES.add(mp.game.joaat("grand_prop_v_flag_" + i));
}
function getFlagWarPlacePropName(_0x42769a) {
  const _0x386635 = parseInt(_0x42769a);
  if (isNaN(_0x386635) || _0x386635 < 0 || _0x386635 >= 30) {
    return "grand_prop_v_flag_1";
  } else {
    return "grand_prop_v_flag_" + (_0x386635 + 1);
  }
}
function isFlagWarPlaceTooCloseToOtherFlag(_0x37326b, _0x3b8c06) {
  if (!_0x37326b) {
    return false;
  }
  const _0xb293ff = _0x3b8c06 && mp.objects.exists(_0x3b8c06) ? _0x3b8c06.handle : 0;
  let _0x4f548a = false;
  mp.objects.forEachInStreamRange(_0x44f21c => {
    if (_0x4f548a || !_0x44f21c || !mp.objects.exists(_0x44f21c)) {
      return;
    }
    if (_0x44f21c.dimension !== localplayer.dimension) {
      return;
    }
    if (_0xb293ff && _0x44f21c.handle === _0xb293ff) {
      return;
    }
    if (!FLAG_WAR_PROP_HASHES.has(_0x44f21c.model)) {
      return;
    }
    try {
      if (_0x44f21c.handle && mp.game.entity.isEntityAttached(_0x44f21c.handle)) {
        return;
      }
    } catch (_0x5c31bd) {}
    const _0x23494a = _0x44f21c.position;
    if (mp.game.system.vdist(_0x37326b.x, _0x37326b.y, _0x37326b.z, _0x23494a.x, _0x23494a.y, _0x23494a.z) < 1) {
      _0x4f548a = true;
    }
  });
  return _0x4f548a;
}
mp.events.add("Client_Set_Billiard", (_0x2d13ea, _0x30888e) => {
  if (in_billiard_process == 1) {
    return;
  }
  if (in_greenzone && _0x2d13ea != 15 && _0x2d13ea != 16 && !PORTABLE_MARKET_ITEMS.includes(_0x2d13ea)) {
    return mp.game.ui.notifications.show(language["Нельзя ставить предметы в зеленой зоне"][curr_lang], false, 0, 6);
  }
  billiard_number = _0x2d13ea;
  billiard_rot = 90;
  in_billiard_process = true;
  if (_0x2d13ea == 29 || _0x2d13ea == 30 || _0x2d13ea == 5 || _0x2d13ea == 15 || PORTABLE_MARKET_ITEMS.includes(_0x2d13ea) || [6794, 6795, 6796, 6797, 6798, 6799, 6807, 7005].includes(_0x2d13ea)) {
    mp.keys.bind(40, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_billiard_process) {
        billiard_rot -= 5;
        if (billiard_rot < 0) {
          billiard_rot = 360;
        }
      }
    });
    mp.keys.bind(38, false, function () {
      if (!!loggedin && !chatActive && !(new Date().getTime() - lastCheck < 300) && !!in_billiard_process) {
        billiard_rot += 5;
        if (billiard_rot > 360) {
          billiard_rot = 0;
        }
      }
    });
    HintShow(language["ЛКМ - установить объект<br>ПКМ - отменить<br>Стрелка вверх/вниз - изменить поворот"][curr_lang]);
  } else {
    HintShow(language["ЛКМ - установить объект<br>ПКМ - отменить"][curr_lang]);
  }
  let _0x3d64ae = "prop_pooltable_02";
  if (billiard_number == 2) {
    _0x3d64ae = "hookah_1";
  } else if (billiard_number == 3) {
    _0x3d64ae = "hookah_3";
  } else if (billiard_number == 4) {
    _0x3d64ae = "hookah_2";
  } else if (billiard_number == 5) {
    _0x3d64ae = "lottery_table";
  } else if (billiard_number == 6) {
    _0x3d64ae = "solar_bat";
  } else if (billiard_number == 7) {
    _0x3d64ae = "grand_prop_xmas_igloo";
  } else if (billiard_number == 8) {
    _0x3d64ae = "grand_prop_xmas_snowman";
  } else if (billiard_number == 9) {
    _0x3d64ae = "grand_prop_xmas_snowman2";
  } else if (billiard_number == 10) {
    _0x3d64ae = "grand_prop_xmas_elka4";
  } else if (billiard_number == 11) {
    _0x3d64ae = "grand_prop_xmas_elka3";
  } else if (billiard_number == 12) {
    _0x3d64ae = "grand_prop_xmas_elka5";
  } else if (billiard_number == 13) {
    _0x3d64ae = "grand_prop_xmas_elka";
  } else if (billiard_number == 14) {
    _0x3d64ae = "grand_prop_xmas_elka2";
  } else if (billiard_number == 15) {
    _0x3d64ae = "traffic_cam";
  } else if (billiard_number == 16) {
    _0x3d64ae = "xs_prop_arena_champ_closed";
  } else if (billiard_number == 17) {
    _0x3d64ae = "grand_sandcastle_1";
  } else if (billiard_number == 18) {
    _0x3d64ae = "grand_sandcastle_2";
  } else if (billiard_number == 19) {
    _0x3d64ae = "grand_sandcastle_3";
  } else if (billiard_number == 20) {
    _0x3d64ae = "grand_prop_drill";
  } else if (billiard_number == 21) {
    _0x3d64ae = "grand_prop_tablesaw";
  } else if (billiard_number == 22) {
    _0x3d64ae = "grand_prop_fishnet";
  } else if (billiard_number == 23) {
    _0x3d64ae = "grand_prop_oilpump";
  } else if (billiard_number == 24) {
    _0x3d64ae = "grand_prop_sprinkler";
  } else if (billiard_number == 25) {
    _0x3d64ae = "grand_mushroom_low";
  } else if (billiard_number == 26) {
    _0x3d64ae = "prop_gr_satelite";
  } else if (billiard_number == 27 && _0x30888e > 0) {
    _0x3d64ae = OBJECTS_TO_SPAWN[_0x30888e - 1];
  } else if (billiard_number == 28) {
    _0x3d64ae = "gr_prop_printmachine";
  } else if (billiard_number == 29 || billiard_number == 30) {
    let _0x2a1c75 = 0;
    if (_0x30888e != null) {
      const _0x3ec305 = parseInt(_0x30888e);
      if (!isNaN(_0x3ec305) && _0x3ec305 >= 0 && _0x3ec305 < 30) {
        _0x2a1c75 = _0x3ec305;
      }
    } else if (global.flag_war_place_color >= 0 && global.flag_war_place_color < 30) {
      _0x2a1c75 = global.flag_war_place_color;
    }
    global.flag_war_place_color = _0x2a1c75;
    _0x3d64ae = getFlagWarPlacePropName(_0x2a1c75);
    const _0x39bc61 = mp.game.joaat(_0x3d64ae);
    if (!mp.game.streaming.hasModelLoaded(_0x39bc61)) {
      mp.game.streaming.requestModel(_0x39bc61);
    }
  } else if (billiard_number == 5964) {
    _0x3d64ae = "grand_trade_stand";
  } else if (billiard_number == 6376) {
    _0x3d64ae = "veloxsy_kiosk_5";
  } else if (billiard_number == 6377) {
    _0x3d64ae = "ramen_kiosk_1";
  } else if (billiard_number == 6800) {
    _0x3d64ae = "veloxsy_kiosk_3";
  } else if (billiard_number == 6794) {
    _0x3d64ae = "veloxsy_module_head";
  } else if (billiard_number == 6795) {
    _0x3d64ae = "veloxsy_module_cocain";
  } else if (billiard_number == 6796) {
    _0x3d64ae = "veloxsy_module_cannabis";
  } else if (billiard_number == 6797) {
    _0x3d64ae = "veloxsy_module_ammo";
  } else if (billiard_number == 6798) {
    _0x3d64ae = "veloxsy_module_repair";
  } else if (billiard_number == 6799) {
    _0x3d64ae = "veloxsy_module_storage";
  } else if (billiard_number == 6804) {
    _0x3d64ae = "veloxsy_halloween_kiosk";
  } else if (billiard_number == 6807) {
    _0x3d64ae = "veloxsy_module_wood";
  } else if (billiard_number == 7005) {
    _0x3d64ae = "veloxsy_module_candy";
  } else if (billiard_number == 7053) {
    _0x3d64ae = "veloxsy_ny_lavka25";
  } else if (billiard_number == 7255) {
    _0x3d64ae = "veloxsy_dr_lavka";
  } else if (billiard_number == 7315) {
    _0x3d64ae = "veloxsy_easter_lavka";
  } else if (billiard_number == 7512) {
    _0x3d64ae = "veloxsy_kiosk_2";
  } else if (billiard_number == 7513) {
    _0x3d64ae = "veloxsy_kiosk_4";
  }
  billiard_rot_y = 0;
  if (billiard_number == 16) {
    billiard_rot_y = 90;
    billiard_rot = 0;
  }
  billiard_obj = mp.objects.new(mp.game.joaat(_0x3d64ae), new mp.Vector3(localplayer.position.x, localplayer.position.y, localplayer.position.z + 20), {
    rotation: new mp.Vector3(0, billiard_rot_y, billiard_rot),
    alpha: 255,
    dimension: mp.players.local.dimension
  });
  if (billiard_obj && mp.objects.exists(billiard_obj)) {
    billiard_obj.objectName = _0x3d64ae;
  }
});
global.at_close_billiard_cam = false;
let billiard_obj;
let billiard_pos;
let in_billiard_process = false;
let blockShotControls = false;
let billiard_rot = 90;
let billiard_rot_y = 0;
const CONTRABAND_MACHINE_ITEMS = [6794, 6795, 6796, 6797, 6798, 6799, 6807, 7005];
const CONTRABAND_MACHINE_MAIN_TYPE = 0;
const MAX_DISTANCE_FROM_MAIN_MODULE = 15;
const MIN_DISTANCE_BETWEEN_MODULES = 2;
const RED_COLOR = [255, 0, 0, 255];
const GREEN_COLOR = [0, 255, 0, 255];
let contrabandMachineObjects = [];
let contrabandMachineMainPosition = null;
let contrabandMachineModulePositions = [];
function FinishBilliardSet(_0x1d4922) {
  if (in_billiard_process == 1) {
    const _0x3b3411 = billiard_number == 29 || billiard_number == 30;
    if (billiard_number == 5) {
      mp.keys.unbind(40, false);
      if (is_admin !== true) {
        mp.keys.unbind(38, false);
      }
    }
    blockShotControls = true;
    setTimeout(() => blockShotControls = false, 500);
    in_billiard_process = false;
    if (_0x3b3411) {
      global.flag_war_billiard_active = false;
      if (billiard_number == 29 && _0x1d4922 != 1 && global.flag_war_participation_placing) {
        mp.events.call("Client_FlagWarParticipationPlaceCanceled");
      } else {
        mp.events.call("Client_FlagWarRefreshCarrier");
      }
    }
    if (_0x1d4922 == 1 && (localplayer.isInWater() || mp.objects.exists(billiard_obj) && billiard_obj.isInWater())) {
      if (billiard_obj && mp.objects.exists(billiard_obj)) {
        billiard_obj.destroy();
        billiard_obj = undefined;
      }
      return mp.game.ui.notifications.show(language["Нельзя устанавливать объекты здесь"][curr_lang], false, 0, 6);
    }
    if (_0x1d4922 == 1 && mp.objects.exists(billiard_obj)) {
      if (!in_greenzone) {
        if (CONTRABAND_MACHINE_ITEMS.includes(billiard_number) || billiard_number == 29 || billiard_number == 30) {
          const _0x2a1363 = mp.raycasting.testPointToPoint(new mp.Vector3(billiard_obj.position.x - 1.5, billiard_obj.position.y, billiard_obj.position.z), new mp.Vector3(billiard_obj.position.x + 1.5, billiard_obj.position.y, billiard_obj.position.z), billiard_obj.handle, 2);
          const _0x22ae63 = mp.raycasting.testPointToPoint(new mp.Vector3(billiard_obj.position.x, billiard_obj.position.y - 1.5, billiard_obj.position.z), new mp.Vector3(billiard_obj.position.x, billiard_obj.position.y + 1.5, billiard_obj.position.z), billiard_obj.handle, 2);
          const _0x56d3c9 = mp.raycasting.testPointToPoint(billiard_obj.position, new mp.Vector3(billiard_obj.position.x, billiard_obj.position.y, billiard_obj.position.z + 2), billiard_obj.handle, 2);
          if (_0x2a1363 || _0x22ae63 || _0x56d3c9) {
            if (billiard_obj && mp.objects.exists(billiard_obj)) {
              billiard_obj.destroy();
              billiard_obj = undefined;
            }
            return mp.game.ui.notifications.show(language["Нельзя устанавливать объекты здесь"][curr_lang], false, 0, 6);
          }
        }
        if ((billiard_number == 29 || billiard_number == 30) && isFlagWarPlaceTooCloseToOtherFlag(billiard_pos, billiard_obj)) {
          if (billiard_obj && mp.objects.exists(billiard_obj)) {
            billiard_obj.destroy();
            billiard_obj = undefined;
          }
          return mp.game.ui.notifications.show(language["Нельзя установить флаг рядом с другим флагом"][curr_lang], false, 0, 6);
        }
        if (billiard_number == 1) {
          mp.events.callRemote("Client_Set_Billiard", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number >= 2 && billiard_number <= 4) {
          mp.events.callRemote("Server_SetHookahGround", billiard_number - 1, JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 5) {
          mp.events.callRemote("Client_SetLotteryTable", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 6) {
          mp.events.callRemote("Server_SetSolarPanel", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number >= 7 && billiard_number <= 9) {
          mp.events.callRemote("Server_SetSnowConstruction", JSON.stringify(billiard_pos), billiard_rot, billiard_number - 7);
        } else if (billiard_number >= 10 && billiard_number <= 14) {
          mp.events.callRemote("Server_SetChristmasTree", JSON.stringify(billiard_pos), billiard_rot, billiard_number - 10);
        } else if (billiard_number == 15) {
          mp.events.callRemote("Server_SetPoliceRadarCorrect", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 16) {
          mp.events.callRemote("Server_SetSpinBottleCorrect", JSON.stringify(billiard_pos));
        } else if (billiard_number >= 17 && billiard_number <= 19) {
          mp.events.callRemote("Server_SetSummerConstruction", JSON.stringify(billiard_pos), billiard_rot, billiard_number - 17);
        } else if (billiard_number >= 20 && billiard_number <= 24) {
          mp.events.callRemote("Server_SetResourceGatherer", JSON.stringify(billiard_pos), billiard_rot, billiard_number);
        } else if (billiard_number == 25) {
          mp.events.callRemote("Server_SetMushroomBed", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 26) {
          mp.events.callRemote("Server_CreateSatelliteHackObject", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 27) {
          mp.events.callRemote("Server_CreateTamagotchiObjectInWorld", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 28) {
          mp.events.callRemote("Server_SetMoneyMachine", JSON.stringify(billiard_pos), billiard_rot);
        } else if (billiard_number == 29) {
          mp.events.callRemote("Server_FlagWarPlaceFlag", JSON.stringify(billiard_pos), billiard_rot, flag_war_place_color);
        } else if (billiard_number == 30) {
          mp.events.callRemote("Server_FlagWarDeliverFlag", JSON.stringify(billiard_pos), billiard_rot);
        } else if ([6794, 6795, 6796, 6797, 6798, 6799, 6807, 7005].includes(billiard_number)) {
          mp.events.callRemote("Server_SetContrabandMachine", billiard_number, JSON.stringify(billiard_pos), billiard_rot);
        }
      }
      if (PORTABLE_MARKET_ITEMS.includes(billiard_number)) {
        mp.events.callRemote("Server_SetPortableMarket", JSON.stringify(billiard_pos), billiard_rot, billiard_obj.objectName);
      }
    }
    if (billiard_obj && mp.objects.exists(billiard_obj)) {
      billiard_obj.destroy();
      billiard_obj = undefined;
    }
    if (in_greenzone && !PORTABLE_MARKET_ITEMS.includes(billiard_number)) {
      mp.game.ui.notifications.show(language["Нельзя ставить предметы в зеленой зоне"][curr_lang], false, 0, 6);
    }
  }
  HintClose();
}
mp.events.add("Client_SetContrabandMachineModule", (_0xb81138, _0xa24471, _0x2be999, _0x3c7270) => {
  contrabandMachineObjects = [];
  contrabandMachineMainPosition = null;
  contrabandMachineModulePositions = [];
  if (Array.isArray(_0x2be999) && _0x2be999.length >= 3) {
    contrabandMachineMainPosition = new mp.Vector3(_0x2be999[0], _0x2be999[1], _0x2be999[2]);
  }
  if (Array.isArray(_0x3c7270)) {
    contrabandMachineModulePositions = _0x3c7270.map(_0x58e56b => ({
      moduleId: _0x58e56b[0],
      position: new mp.Vector3(_0x58e56b[1], _0x58e56b[2], _0x58e56b[3]),
      moduleType: _0x58e56b[4]
    }));
  }
  _0xa24471.forEach(_0x3530f1 => {
    const _0x1fc365 = _0x3530f1[0];
    const _0x21bacd = _0x3530f1[1];
    const _0x35632c = _0x3530f1[2];
    const _0x54b80a = mp.objects.atRemoteId(_0x1fc365);
    if (_0x54b80a) {
      contrabandMachineObjects.push({
        object: _0x54b80a,
        moduleType: _0x21bacd,
        moduleId: _0x35632c
      });
    }
  });
  mp.events.call("Client_Set_Billiard", _0xb81138);
});
mp.events.add("click", (_0x4c494c, _0x1a7bd9, _0x37552c, _0x573595, _0x22fbe8, _0x1bfe83, _0x114094, _0x104ea5) => {
  if (loggedin && in_billiard_process != 0) {
    if (_0x573595 == "left") {
      FinishBilliardSet(1);
    } else if (_0x573595 == "right") {
      FinishBilliardSet(2);
    }
  }
});
mp.events.add("render", () => {
  if (blockShotControls) {
    mp.game.controls.disableControlAction(2, 24, true);
    mp.game.controls.disableControlAction(2, 257, true);
  }
  if (!loggedin || in_billiard_process == 0) {
    return;
  }
  mp.game.controls.disableControlAction(2, 22, true);
  mp.game.controls.disableControlAction(2, 24, true);
  mp.game.controls.disableControlAction(2, 69, true);
  mp.game.controls.disableControlAction(2, 70, true);
  mp.game.controls.disableControlAction(2, 92, true);
  mp.game.controls.disableControlAction(2, 114, true);
  mp.game.controls.disableControlAction(2, 121, true);
  mp.game.controls.disableControlAction(2, 140, true);
  mp.game.controls.disableControlAction(2, 141, true);
  mp.game.controls.disableControlAction(2, 142, true);
  mp.game.controls.disableControlAction(2, 257, true);
  mp.game.controls.disableControlAction(2, 263, true);
  mp.game.controls.disableControlAction(2, 264, true);
  mp.game.controls.disableControlAction(2, 331, true);
  mp.game.controls.disableControlAction(2, 25, true);
  mp.game.controls.disableControlAction(2, 66, true);
  mp.game.controls.disableControlAction(2, 67, true);
  mp.game.controls.disableControlAction(2, 68, true);
  mp.game.controls.disableControlAction(2, 91, true);
  let _0x51761c = 0;
  let _0x4b2d20 = mp.game.graphics.screen2dToWorld3d(new mp.Vector3(res.x / 2.05 - 10, res.y / 1.6, 0));
  let _0x225d71 = mp.game.gameplay.getGroundZFor3dCoord(_0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z, 0, false);
  for (let _0x16818f = 1; _0x16818f < 11 && (_0x225d71 != 0 || (_0x225d71 = mp.game.gameplay.getGroundZFor3dCoord(_0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z + _0x16818f, 0, false), _0x225d71 == 0)); _0x16818f++);
  if (_0x225d71 == 0) {
    _0x225d71 = mp.game.gameplay.getGroundZFor3dCoord(_0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z + 50, 0, false);
  }
  if (billiard_number == 16) {
    _0x51761c = 0.05;
  } else if (billiard_number == 26) {
    _0x51761c = 0.7;
  } else if (billiard_number == 27) {
    _0x51761c = 1;
  } else if (billiard_number == 6804) {
    _0x51761c = 0.09;
  } else if (billiard_number == 7053) {
    _0x51761c = 0.5;
  } else if (billiard_number == 7255 || billiard_number == 7315) {
    _0x51761c = 1;
  } else if (billiard_number == 6794) {
    _0x51761c = 0.85;
  } else if ([6795, 6796, 6797, 6807, 7005].includes(billiard_number)) {
    _0x51761c = 0.9;
  } else if (billiard_number == 6798) {
    _0x51761c = 0.17;
  } else if (billiard_number == 6799) {
    _0x51761c = 0.35;
  }
  _0x4b2d20.z = _0x225d71 + _0x51761c;
  billiard_pos = _0x4b2d20;
  if (billiard_obj && mp.objects.exists(billiard_obj)) {
    billiard_obj.position = _0x4b2d20;
    billiard_obj.rotation = new mp.Vector3(0, billiard_rot_y, billiard_rot);
    billiard_obj.setCollision(false, false);
  }
  if (CONTRABAND_MACHINE_ITEMS.includes(billiard_number) && mp.objects.exists(billiard_obj)) {
    const _0x2e92da = contrabandMachineObjects.find(_0x235609 => _0x235609.moduleType === 0 && mp.objects.exists(_0x235609.object));
    const _0x924b27 = _0x2e92da ? _0x2e92da.object.position : contrabandMachineMainPosition;
    if (_0x924b27) {
      mp.game.graphics.drawMarker(28, _0x924b27.x, _0x924b27.y, _0x924b27.z, 0, 0, 0, 0, 0, 0, 15, 15, 15, 255, 255, 255, 100, false, false, 2, false, null, null, false);
      const _0x4c1685 = mp.game.system.vdist(_0x924b27.x, _0x924b27.y, _0x924b27.z, _0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z) > 15 ? RED_COLOR : GREEN_COLOR;
      mp.game.graphics.drawThickLine(_0x924b27, _0x4b2d20, 0.05, _0x4c1685);
    }
    contrabandMachineObjects.forEach(_0xf8442f => {
      if (!mp.objects.exists(_0xf8442f.object)) {
        return;
      }
      if (_0xf8442f.moduleType === 0) {
        return;
      }
      const _0x3d7717 = mp.game.system.vdist(_0xf8442f.object.position.x, _0xf8442f.object.position.y, _0xf8442f.object.position.z, _0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z) < 2 ? RED_COLOR : GREEN_COLOR;
      mp.game.graphics.drawThickLine(_0xf8442f.object.position, _0x4b2d20, 0.05, _0x3d7717);
    });
    contrabandMachineModulePositions.forEach(_0x4efd87 => {
      if (_0x4efd87.moduleType === 0) {
        return;
      }
      if (contrabandMachineObjects.some(_0x3ae22e => _0x3ae22e.moduleId === _0x4efd87.moduleId && mp.objects.exists(_0x3ae22e.object))) {
        return;
      }
      const _0x360487 = mp.game.system.vdist(_0x4efd87.position.x, _0x4efd87.position.y, _0x4efd87.position.z, _0x4b2d20.x, _0x4b2d20.y, _0x4b2d20.z) < 2 ? RED_COLOR : GREEN_COLOR;
      mp.game.graphics.drawThickLine(_0x4efd87.position, _0x4b2d20, 0.05, _0x360487);
    });
  }
});