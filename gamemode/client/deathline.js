global.at_death_line = false;
global.at_death_line_wait = false;
class deathline {
  constructor() {
    this.effectLoaded = false;
    this.textureLoaded = false;
    this.max_lines = 60;
    this.positions = new Array(16);
    this.rotationOffsets = new Array(16);
    this.frameLines = new Array(16);
    this.dont_count = new Date().getTime();
    this.leaved_already = false;
    this.can_count = false;
    this.test = 0;
    this.death_line_dimension = 5023;
    this.death_marker = null;
    this.death_shape = null;
    this.deathline_vehicles = [[255, 255, 127], [158, 154, 16], [245, 160, 3], [148, 151, 255], [255, 183, 239], [247, 81, 81], [194, 212, 254], [222, 222, 222]];
    for (let _0x12788f = 0; _0x12788f < this.positions.length; _0x12788f++) {
      this.positions[_0x12788f] = [];
      this.rotationOffsets[_0x12788f] = [];
      this.frameLines[_0x12788f] = new Date().getTime();
      for (let _0x2d5738 = 0; _0x2d5738 < this.max_lines; _0x2d5738++) {
        this.rotationOffsets[_0x12788f][_0x2d5738] = [0, 0];
        this.positions[_0x12788f][_0x2d5738] = [0, 0, 0];
      }
    }
    mp.events.add("Client_DeleteDeathLineVariables", () => {
      this.LeaveFromDeathLine(false);
    });
    mp.events.add("Client_PreStartDeathLine", () => {
      this.leaved_already = false;
      at_death_line_wait = true;
      for (let _0x5078e3 = 0; _0x5078e3 < this.positions.length; _0x5078e3++) {
        this.positions[_0x5078e3] = [];
        this.rotationOffsets[_0x5078e3] = [];
        this.frameLines[_0x5078e3] = new Date().getTime();
        for (let _0x3b57e4 = 0; _0x3b57e4 < this.max_lines; _0x3b57e4++) {
          this.rotationOffsets[_0x5078e3][_0x3b57e4] = [0, 0];
          this.positions[_0x5078e3][_0x3b57e4] = [0, 0, 0];
        }
      }
      if (localplayer.vehicle) {
        localplayer.vehicle.freezePosition(true);
        vehicle_engine = true;
        main_browser.execute("APPS.state.hud.engine = true;");
        TurnOnEngine(localplayer.vehicle);
        localplayer.vehicle.setUndriveable(false);
      }
      this.death_marker = mp.markers.new(1, new mp.Vector3(978.608, -3197.492, -64.106), 300, {
        color: [255, 255, 0, 75],
        visible: true,
        dimension: this.death_line_dimension
      });
      this.death_shape = mp.colshapes.newCircle(978.608, -3197.492, 150, this.death_line_dimension);
      this.death_shape.is_death_line_exit = true;
      if (localcamera != null) {
        localcamera.destroy();
        localcamera = null;
      }
      localcamera = mp.cameras.new("default", new mp.Vector3(1089.356, -3243.055, 65.392), new mp.Vector3(0, 0, 0), 40);
      localcamera.pointAtCoord(1014.053, -3160.348, 4.901);
      localcamera.setActive(true);
      mp.game.cam.renderScriptCams(true, true, 1500, true, true);
    });
    mp.events.add("playerExitColshape", _0x9820bc => {
      if (mp.colshapes.exists(_0x9820bc) && _0x9820bc.is_death_line_exit == 1) {
        this.LeaveFromDeathLine();
      }
    });
    this.prepare_interval = undefined;
    mp.events.add("Client_PreparetoDeathLine", _0x4ed0f6 => {
      if (bunker_pres_start_interval != null) {
        clearInterval(bunker_pres_start_interval);
        bunker_pres_start_interval = undefined;
      }
      for (let _0x418448 = 0; _0x418448 < _0x4ed0f6.length; _0x418448++) {
        const _0x265d5a = mp.players.atRemoteId(parseInt(_0x4ed0f6[_0x418448].id));
        if (_0x265d5a && mp.players.exists(_0x265d5a)) {
          _0x265d5a.death_index = parseInt(_0x4ed0f6[_0x418448].index);
        }
      }
      if (!this.prepare_interval) {
        this.dont_count = new Date().getTime();
        at_death_line = true;
        this.can_count = false;
        if (this.textureLoaded == 0 && !mp.game.graphics.hasStreamedTextureDictLoaded("Deadline")) {
          mp.game.graphics.requestStreamedTextureDict("Deadline", true);
          mp.game.audio.triggerMusicEvent("BKR_DEADLINE_START_MUSIC");
          this.textureLoaded = true;
        }
        if (this.effectLoaded == 0 && !mp.game.graphics.getScreenEffectIsActive("DeadlineNeon")) {
          mp.game.graphics.startScreenEffect("DeadlineNeon", 0, true);
          this.effectLoaded = true;
        }
        let _0x42695a = 6;
        this.prepare_interval = setInterval(() => {
          if (_0x42695a > 0) {
            _0x42695a--;
            main_browser.execute("APPS.state.hud.event_coutdown = " + parseInt(_0x42695a) + ";");
            if (_0x42695a == 0) {
              clearInterval(this.prepare_interval);
              this.prepare_interval = undefined;
              this.dont_count = new Date().getTime();
              this.can_count = true;
              main_browser.execute("APPS.state.hud.event_show = false;");
              main_browser.execute("APPS.state.hud.prepare_escort = false;");
              main_browser.execute("APPS.state.hud.event_coutdown = 0;");
              mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
              PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
              mp.game.cam.renderScriptCams(false, true, 0, true, false);
              if (localcamera != null) {
                localcamera.destroy();
                localcamera = null;
              }
              if (localplayer.vehicle) {
                localplayer.setCanBeKnockedOffVehicle(1);
                localplayer.vehicle.freezePosition(false);
                vehicle_engine = true;
                main_browser.execute("APPS.state.hud.engine = true;");
                TurnOnEngine(localplayer.vehicle);
                localplayer.vehicle.setUndriveable(false);
              } else {
                this.LeaveFromDeathLine();
              }
            }
          }
        }, 1000);
      }
    });
    mp.events.add("render", () => {
      if (death_race_preenter || at_death_line || at_death_line_wait) {
        mp.game.controls.disableControlAction(2, 75, true);
      }
      if (!at_death_line) {
        return;
      }
      if (localplayer.vehicle) {
        if (localplayer.vehicle.getSpeed() * 3.6 < 30) {
          const _0x404813 = localplayer.vehicle.getVelocity();
          _0x404813.x = _0x404813.x * 1.1;
          _0x404813.y = _0x404813.y * 1.1;
          localplayer.vehicle.setVelocity(_0x404813.x, _0x404813.y, _0x404813.z);
        }
      }
      let _0x7828ed = 0;
      mp.players.forEachInStreamRange(_0x335bae => {
        if (_0x335bae.vehicle) {
          _0x7828ed = _0x335bae.death_index ?? 0;
          const _0x21cf17 = _0x335bae.vehicle.getBoneIndexByName("wheel_lr");
          const _0x46dae8 = _0x335bae.vehicle.getWorldPositionOfBone(_0x21cf17);
          if (new Date().getTime() - this.frameLines[_0x7828ed] >= 50) {
            const _0x1b9d13 = this.rotationOffsets[_0x7828ed].slice();
            const _0x59eb70 = this.positions[_0x7828ed].slice();
            for (let _0x264959 = 0; _0x264959 < this.max_lines - 1; _0x264959++) {
              this.rotationOffsets[_0x7828ed][_0x264959 + 1] = _0x1b9d13[_0x264959];
              this.positions[_0x7828ed][_0x264959 + 1] = _0x59eb70[_0x264959];
            }
            this.frameLines[_0x7828ed] = new Date().getTime();
          }
          const _0x51a422 = _0x335bae.vehicle.getOffsetFromInWorldCoords(this.degreesToRadians(_0x335bae.vehicle.getRotation(2).y) * 0.4, 0, 0);
          const _0x5a9392 = _0x51a422.x - _0x335bae.vehicle.position.x;
          const _0x526ae5 = _0x51a422.y - _0x335bae.vehicle.position.y;
          if (this.positions[_0x7828ed][0][0] == 0) {
            for (let _0x1229b6 = 0; _0x1229b6 < this.max_lines - 1; _0x1229b6++) {
              this.positions[_0x7828ed][_0x1229b6] = _0x46dae8;
              this.rotationOffsets[_0x7828ed][_0x1229b6] = [0, 0];
            }
          }
          this.positions[_0x7828ed][0] = _0x46dae8;
          this.rotationOffsets[_0x7828ed][0] = [_0x5a9392, _0x526ae5];
          for (let _0x3004b1 = 0; _0x3004b1 < this.max_lines - 1; _0x3004b1++) {
            const _0x349db9 = this.positions[_0x7828ed][_0x3004b1];
            const _0x53aef4 = this.positions[_0x7828ed][_0x3004b1 + 1];
            const _0xeca81b = this.rotationOffsets[_0x7828ed][_0x3004b1];
            const _0x4b4f18 = this.rotationOffsets[_0x7828ed][_0x3004b1 + 1];
            const _0x48e7a7 = this.getObjectOffset(_0x349db9, 0, new mp.Vector3(_0xeca81b[0], _0xeca81b[1], 0.3));
            const _0x417ddc = this.getObjectOffset(_0x53aef4, 0, new mp.Vector3(_0x4b4f18[0], _0x4b4f18[1], 0.3));
            const _0x49272c = this.getObjectOffset(_0x349db9, 0, new mp.Vector3(_0xeca81b[0] * -1, _0xeca81b[1] * -1, -0.3));
            const _0x762f9b = this.getObjectOffset(_0x53aef4, 0, new mp.Vector3(_0x4b4f18[0] * -1, _0x4b4f18[1] * -1, -0.3));
            let _0x318d10 = 175;
            if (_0x3004b1 > parseInt(this.max_lines * 0.9)) {
              _0x318d10 -= this.map_range(_0x3004b1, parseInt(this.max_lines * 0.9), this.max_lines, 0, 175);
              _0x318d10 = parseInt(_0x318d10);
            }
            this.DrawPoly(_0x417ddc, _0x49272c, _0x762f9b, 0, 1, 0, 0, 0.9999999, 0, 1, 0.9999999, 1, this.deathline_vehicles[_0x7828ed][0], this.deathline_vehicles[_0x7828ed][1], this.deathline_vehicles[_0x7828ed][2], _0x318d10);
            this.DrawPoly(_0x762f9b, _0x49272c, _0x417ddc, 0.9999999, 0.9999999, 0.9999999, 0.9999999, 0.9999999, 0.9999999, 0.9999999, 1e-7, 1.9999999, this.deathline_vehicles[_0x7828ed][0], this.deathline_vehicles[_0x7828ed][1], this.deathline_vehicles[_0x7828ed][2], _0x318d10);
            this.DrawPoly(_0x417ddc, _0x48e7a7, _0x49272c, 0, 1, 0, 0, 1e-7, 0, 1, 0.9999999, 1, this.deathline_vehicles[_0x7828ed][0], this.deathline_vehicles[_0x7828ed][1], this.deathline_vehicles[_0x7828ed][2], _0x318d10);
            this.DrawPoly(_0x48e7a7, _0x417ddc, _0x49272c, 0, 0.9999999, 1, 1, 0.9999999, 1, 1, 1e-7, 0.9999999, this.deathline_vehicles[_0x7828ed][0], this.deathline_vehicles[_0x7828ed][1], this.deathline_vehicles[_0x7828ed][2], _0x318d10);
            if (_0x3004b1 >= 10 && this.can_count == 1 && new Date().getTime() - this.dont_count >= 5000 && localplayer.vehicle && mp.game.system.vdist(localplayer.vehicle.position.x, localplayer.vehicle.position.y, localplayer.vehicle.position.z, _0x349db9.x, _0x349db9.y, _0x349db9.z) <= 1) {
              this.LeaveFromDeathLine();
              return;
            }
          }
        }
      });
    });
  }
  LeaveFromDeathLine(_0x56d591 = true) {
    if (this.leaved_already != 1) {
      this.leaved_already = true;
      at_death_line_wait = false;
      if (this.effectLoaded && mp.game.graphics.getScreenEffectIsActive("DeadlineNeon")) {
        mp.game.graphics.stopScreenEffect("DeadlineNeon");
        mp.game.audio.triggerMusicEvent("FM_SUDDEN_DEATH_STOP_MUSIC");
        this.effectLoaded = false;
      }
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
      if (localcamera != null) {
        localcamera.destroy();
        localcamera = null;
      }
      at_death_line = false;
      if (mp.markers.exists(this.death_marker)) {
        this.death_marker.destroy();
        this.death_marker = null;
      }
      if (mp.colshapes.exists(this.death_shape)) {
        this.death_shape.destroy();
        this.death_shape = null;
      }
      main_browser.execute("APPS.state.hud.event_show = false;");
      main_browser.execute("APPS.state.hud.event_coutdown = 0;");
      if (bunker_pres_start_interval != null) {
        clearInterval(bunker_pres_start_interval);
        bunker_pres_start_interval = undefined;
      }
      if (this.prepare_interval != null) {
        clearInterval(this.prepare_interval);
        this.prepare_interval = undefined;
      }
      if (_0x56d591 == 1) {
        mp.events.callRemote("Server_LostAtDeathLine");
      }
      localplayer.setCanBeKnockedOffVehicle(0);
    }
  }
  degreesToRadians(_0x2b0e66) {
    return _0x2b0e66 * Math.PI / 180;
  }
  getObjectOffset(_0x5badc8, _0x16c801, _0x18f8b1) {
    return mp.game.object.getObjectOffsetFromCoords(_0x5badc8.x, _0x5badc8.y, _0x5badc8.z, _0x16c801, _0x18f8b1.x, _0x18f8b1.y, _0x18f8b1.z);
  }
  DrawPoly(_0x344bfd, _0x1d6f84, _0x431d66, _0x3851f7, _0x346acb, _0x451196, _0x1b4990, _0x595f6b, _0x44ee88, _0x3150b0, _0x5e819d, _0x692479, _0x24ab0f, _0x1e877a, _0x104fa0, _0x547713) {
    mp.game.invoke("0x29280002282F1928", _0x344bfd.x, _0x344bfd.y, _0x344bfd.z, _0x1d6f84.x, _0x1d6f84.y, _0x1d6f84.z, _0x431d66.x, _0x431d66.y, _0x431d66.z, _0x24ab0f, _0x1e877a, _0x104fa0, _0x547713, "Deadline", "Deadline_Trail_01", _0x3851f7, _0x346acb, _0x451196, _0x1b4990, _0x595f6b, _0x44ee88, _0x3150b0, _0x5e819d, _0x692479);
  }
  map_range(_0x40e02e, _0x48f5b0, _0x351d5e, _0x272a48, _0x42f105) {
    return (_0x40e02e - _0x48f5b0) * (_0x42f105 - _0x272a48) / (_0x351d5e - _0x48f5b0) + _0x272a48;
  }
}
new deathline();