global.DriftBuyOpened = false;
global.drift = new class {
  constructor() {
    this.local_handling = null;
    this.is_owner = 0;
    this.is_drift_mode = 0;
    this.can_toggle_drift = 0;
    this.params_locked = 0;
    this.vip_drift_enabled = true;
    this.veh_id = null;
    this.defaultMinus = 0.05;
    this.defaultMinusSecond = 0;
    this.listHandling = {
      DriveBias: "fDriveBiasFront",
      BrakeBias: "fBrakeBiasFront",
      SteeringLock: "fSteeringLock",
      HandBrakeForce: "fHandBrakeForce",
      TractionCurveMax: "fTractionCurveMax",
      TractionCurveMin: "fTractionCurveMin",
      DriftMode: "idk"
    };
    this.reverse_listHandling = {
      fDriveBiasFront: "DriveBias",
      fBrakeBiasFront: "BrakeBias",
      fSteeringLock: "SteeringLock",
      fHandBrakeForce: "HandBrakeForce",
      fTractionCurveMax: "TractionCurveMax",
      fTractionCurveMin: "TractionCurveMin"
    };
    this.driftSettings = {
      DRIFT_ANGLE_MIN: 20,
      DRIFT_ANGLE_MAX: 100,
      DRIFT_MIN_SPEED: 10,
      DRIFT_SPEED_MULTIPLY: 0.9,
      DRIFT_ANGLE_MULTIPLY: 1.5,
      DRIFT_TIME_BONUS_START: 25000,
      DRIFT_TIME_MULTIPLY: 0.05
    };
    this.listHandlingName = ["DriveBias", "BrakeBias", "SteeringLock", "HandBrakeForce", "TractionCurveMax", "TractionCurveMin", "DriftMode"];
    this.driftCounterInterval = null;
    this.driftCounterStarted = false;
    this.driftCounterIsDrifting = false;
    this.driftCounterBadAngleSince = 0;
    this.driftCounterDriftScore = 0;
    this.driftCounterDriftStartTime = 0;
    this.drift_server_counted = [false, false, false];
    this.health = 1000;
    mp.events.add("Client_OpenDriftMenu", (_0x3fb079, _0x1365ec, _0x1564ac, _0xeb3bf8, _0x3000aa, _0x418885 = 0, _0x4f51de = 0) => {
      if (GlobalCheck() == 1) {
        return;
      }
      this.defaultMinusSecond = _0x3000aa || 0.0174533;
      this.is_owner = _0x1564ac;
      this.is_drift_mode = _0xeb3bf8;
      this.can_toggle_drift = _0x418885 ? 1 : 0;
      this.params_locked = _0x4f51de ? 1 : 0;
      this.local_handling = Object.assign({}, _0x1365ec);
      if (this.local_handling.SteeringLock > 2) {
        this.local_handling.SteeringLock *= 0.0174533;
      }
      this.veh_id = _0x3fb079;
      if (this.veh_id) {
        const _0x50c6bf = mp.vehicles.atRemoteId(parseInt(this.veh_id));
        if (_0x50c6bf && mp.vehicles.exists(_0x50c6bf)) {
          this.setDefaultHandling(_0x50c6bf, false);
        }
      }
      const _0x2e9d66 = localplayer.vehicle && this.driftCounterStarted ? 1 : 0;
      const _0x42a6b0 = "{\"handling\":" + JSON.stringify(this.local_handling) + ",\"drift_score\":" + _0x2e9d66 + ",\"can_toggle_drift\":" + this.can_toggle_drift + ",\"params_locked\":" + this.params_locked + ",\"show\":true}";
      main_browser.execute("APPS.state.driftmode = " + _0x42a6b0);
      DriftBuyOpened = true;
      ChangeHudState(false);
      mp.events.call("Disablechat");
      mp.game.ui.displayRadar(false);
      mp.gui.cursor.show(true, true);
    });
    mp.events.add("Client_CanSetDriftThisModel", () => {
      if (localplayer.vehicle) {
        localplayer.vehicle.setVelocity(0, 0, 0);
        if (mp.game.vehicle.isThisModelABicycle(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAPlane(localplayer.vehicle.model) || mp.game.vehicle.isThisModelABoat(localplayer.vehicle.model) || mp.game.vehicle.isThisModelAHeli(localplayer.vehicle.model)) {
          return mp.game.ui.notifications.show(language["Вы не можете установить помощник дрифта на данный транспорт"][curr_lang], false, 0, 6);
        }
        mp.events.callRemote("Server_DriftBuy");
      }
    });
    mp.events.add("Client_ResetHandlingAtributes", () => {
      if (DriftBuyOpened && loggedin && !chatActive && localplayer.vehicle && this.canControlDrift() && !(new Date().getTime() - lastCheck < 250)) {
        lastCheck = new Date().getTime();
        if (this.params_locked) {
          return this.notifyDriftTemporarilyDisabled();
        }
        mp.events.callRemote("Server_ResetHandlingAtributes");
      }
    });
    mp.events.add("Client_SetDefaultHandlingAtribute", () => {
      if (!DriftBuyOpened || !loggedin || chatActive || !localplayer.vehicle || !this.canControlDrift() || !this.veh_id) {
        return;
      }
      if (this.params_locked) {
        return this.notifyDriftTemporarilyDisabled();
      }
      const _0x126091 = mp.vehicles.atRemoteId(parseInt(this.veh_id));
      if (_0x126091 && mp.vehicles.exists(_0x126091)) {
        this.setDefaultHandling(_0x126091, true);
        main_browser.execute("APPS.state.driftmode.handling = " + JSON.stringify(this.local_handling));
      }
    });
    mp.events.add("Client_UpdateVehicleHandling", _0x171af0 => {
      if (localplayer.vehicle) {
        for (let _0x133586 = 0; _0x133586 < this.listHandlingName.length; _0x133586++) {
          if (_0x171af0[this.listHandlingName[_0x133586]] == 0 || this.listHandlingName[_0x133586] == "DriftMode") {
            continue;
          }
          let _0x403ad8 = _0x171af0[this.listHandlingName[_0x133586]];
          if (this.listHandlingName[_0x133586] == "SteeringLock" && _0x403ad8 <= 2) {
            _0x403ad8 /= 0.0174533;
          }
          localplayer.vehicle.setHandling(this.listHandling[this.listHandlingName[_0x133586]], _0x403ad8);
        }
        if (_0x171af0.DriftMode != 0) {
          localplayer.vehicle.drift_mode = true;
        } else {
          localplayer.vehicle.drift_mode = false;
        }
      }
    });
    mp.events.add("Client_SetVipDriftEnabled", _0x1f9ae3 => {
      if (global.TEMP_DISABLE_VEHICLE_DRIFT_MODE) {
        _0x1f9ae3 = false;
      }
      this.vip_drift_enabled = !!_0x1f9ae3;
      if (localplayer.vehicle) {
        if (_0x1f9ae3) {
          localplayer.vehicle.drift_mode = true;
        } else {
          localplayer.vehicle.drift_mode = false;
          this.resetVehicleHandlingToDefault(localplayer.vehicle);
        }
      }
    });
    mp.events.add("Client_ToggleVipDriftMode", _0xa69ba9 => {
      if (this.params_locked) {
        return this.notifyDriftTemporarilyDisabled();
      }
      if (DriftBuyOpened && loggedin && !chatActive && this.canControlDrift() && this.can_toggle_drift && typeof HasVipDriftMode == "function" && HasVipDriftMode() && this.local_handling) {
        this.local_handling.DriftMode = parseInt(_0xa69ba9) === 1 ? 1 : 0;
        this.vip_drift_enabled = this.local_handling.DriftMode === 1;
      }
    });
    mp.events.add("Client_DriftParamsLocked", () => {
      if (DriftBuyOpened) {
        if (!(new Date().getTime() - lastCheck < 250)) {
          lastCheck = new Date().getTime();
          this.notifyDriftTemporarilyDisabled();
        }
      }
    });
    mp.events.add("Client_ChangeHandlingAtribute", (_0x1a4903, _0x15dcab) => {
      if (DriftBuyOpened && loggedin && !chatActive && this.canControlDrift()) {
        if (!localplayer.vehicle) {
          return this.errorMessage(language["Bы должны находиться за рулем"][curr_lang]);
        }
        if (!(new Date().getTime() - lastCheck < 250)) {
          lastCheck = new Date().getTime();
          if (this.params_locked) {
            return this.notifyDriftTemporarilyDisabled();
          }
          if (_0x1a4903 == "fDriveBiasFront" || _0x1a4903 == "fBrakeBiasFront" || _0x1a4903 == "fSteeringLock" || _0x1a4903 == "fHandBrakeForce" || _0x1a4903 == "fTractionCurveMax" || _0x1a4903 == "fTractionCurveMin") {
            if (_0x15dcab == 0) {
              let _0x1e5844;
              let _0x1a6299 = this.defaultMinus;
              if (_0x1a4903 == "fDriveBiasFront" || _0x1a4903 == "fBrakeBiasFront" || _0x1a4903 == "fHandBrakeForce" || _0x1a4903 == "fTractionCurveMax" || _0x1a4903 == "fTractionCurveMin") {
                _0x1e5844 = this.local_handling[this.reverse_listHandling[_0x1a4903]] - this.defaultMinus < 0;
              } else if (_0x1a4903 == "fSteeringLock") {
                _0x1a6299 = this.defaultMinusSecond;
                _0x1e5844 = parseFloat((this.local_handling[this.reverse_listHandling[_0x1a4903]] / _0x1a6299).toFixed()) - 1 < 30;
              }
              if (_0x1e5844) {
                if (_0x1a4903 != "fSteeringLock") {
                  this.local_handling[this.reverse_listHandling[_0x1a4903]] = 0;
                }
                this.errorMessage(language["Вы не можете опустить ниже данное значение"][curr_lang]);
              } else {
                this.local_handling[this.reverse_listHandling[_0x1a4903]] -= _0x1a6299;
              }
            } else {
              let _0x115728;
              let _0x283047 = 0;
              if (_0x1a4903 == "fTractionCurveMax" || _0x1a4903 == "fTractionCurveMin") {
                _0x283047 = GetMaxAttributeValue("fTractionCurveMax");
              }
              let _0x166f49 = this.defaultMinus;
              if (_0x1a4903 == "fDriveBiasFront") {
                _0x115728 = this.local_handling[this.reverse_listHandling[_0x1a4903]] + _0x166f49 > 1;
              } else if (_0x1a4903 == "fBrakeBiasFront") {
                _0x115728 = this.local_handling[this.reverse_listHandling[_0x1a4903]] + _0x166f49 > 3;
              } else if (_0x1a4903 == "fSteeringLock") {
                _0x166f49 = this.defaultMinusSecond;
                _0x115728 = parseFloat((this.local_handling[this.reverse_listHandling[_0x1a4903]] / _0x166f49).toFixed()) + 1 > 90;
              } else if (_0x1a4903 == "fHandBrakeForce") {
                _0x115728 = this.local_handling[this.reverse_listHandling[_0x1a4903]] + _0x166f49 > 3;
              } else if (_0x1a4903 == "fTractionCurveMax" || _0x1a4903 == "fTractionCurveMin") {
                _0x115728 = this.local_handling[this.reverse_listHandling[_0x1a4903]] + _0x166f49 > _0x283047 * 1.1 || this.local_handling[this.reverse_listHandling[_0x1a4903]] + _0x166f49 > 5.5;
              }
              if (_0x115728) {
                if (_0x1a4903 == "fHandBrakeForce") {
                  this.local_handling[this.reverse_listHandling[_0x1a4903]] = 2;
                } else if (_0x1a4903 != "fSteeringLock" && _0x1a4903 != "fTractionCurveMax" && _0x1a4903 != "fTractionCurveMin") {
                  this.local_handling[this.reverse_listHandling[_0x1a4903]] = 1;
                }
                this.errorMessage(language["Вы не можете поднять выше данное значение"][curr_lang]);
              } else {
                this.local_handling[this.reverse_listHandling[_0x1a4903]] += _0x166f49;
              }
            }
            main_browser.execute("APPS.state.driftmode.handling = " + JSON.stringify(this.local_handling));
          }
        }
      }
    });
    mp.events.add("Client_ChangeDriftScoreState", _0xeeeb53 => {
      if (DriftBuyOpened && loggedin && !chatActive && localplayer.vehicle && this.canControlDrift()) {
        if (_0xeeeb53 == 1) {
          this.driftCounterStart();
        } else {
          this.driftCounterEnd();
        }
        main_browser.execute("APPS.state.driftmode.drift_score = " + _0xeeeb53);
      }
    });
    mp.events.add("Client_EnableDriftScoreForce", () => {
      if (loggedin && !chatActive && localplayer.vehicle) {
        this.driftCounterStart();
        main_browser.execute("APPS.state.driftmode.drift_score = 1;");
      }
    });
    mp.events.add("playerLeaveVehicle", () => {
      this.vip_drift_enabled = true;
    });
  }
  CloseDriftBuy() {
    if (DriftBuyOpened && loggedin && !chatActive) {
      main_browser.execute("APPS.state.driftmode.show = false;");
      DriftBuyOpened = false;
      if (hudswitch == 0) {
        ChangeHudState(true);
        mp.game.ui.displayRadar(true);
      }
      mp.gui.cursor.show(false, false);
      mp.events.call("Enablechat");
      if (this.veh_id && localplayer.vehicle && localplayer.vehicle.remoteId == this.veh_id && !this.params_locked) {
        mp.events.callRemote("Server_CloseDriftBuy", JSON.stringify(this.local_handling));
      }
      this.local_handling = undefined;
      this.is_owner = undefined;
      this.is_drift_mode = undefined;
      this.can_toggle_drift = 0;
      this.params_locked = 0;
      this.veh_id = undefined;
    }
  }
  notifyDriftTemporarilyDisabled() {
    this.errorMessage(language["Система временно отключена"][curr_lang]);
  }
  canControlDrift() {
    return !!this.is_owner && !!this.is_drift_mode || typeof HasVipDriftMode == "function" && !!HasVipDriftMode() && !!localplayer.vehicle && localplayer.vehicle.getPedInSeat(-1) === localplayer.handle;
  }
  errorMessage(_0x24c479) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x24c479 + "');");
  }
  resetVehicleHandlingToDefault(_0x2a9eb8) {
    if (_0x2a9eb8 && mp.vehicles.exists(_0x2a9eb8) && _0x2a9eb8.handle) {
      for (let _0xa4f02c = 0; _0xa4f02c < this.listHandlingName.length; _0xa4f02c++) {
        if (this.listHandlingName[_0xa4f02c] != "DriftMode") {
          try {
            let _0x1a5fbc = _0x2a9eb8.getHandling(this.listHandling[this.listHandlingName[_0xa4f02c]]);
            if (_0x1a5fbc == null || _0x1a5fbc == null || isNaN(_0x1a5fbc)) {
              continue;
            }
            if ((this.listHandlingName[_0xa4f02c] == "TractionCurveMax" || this.listHandlingName[_0xa4f02c] == "TractionCurveMin") && _0x1a5fbc == 0) {
              continue;
            }
            _0x2a9eb8.setHandling(this.listHandling[this.listHandlingName[_0xa4f02c]], _0x1a5fbc);
          } catch (_0x21dba5) {}
        }
      }
    }
  }
  setDefaultHandling(_0xf54a4b, _0x15bab6 = true) {
    if (!_0xf54a4b || !mp.vehicles.exists(_0xf54a4b) || !_0xf54a4b.handle) {
      return;
    }
    for (let _0x57e109 = 0; _0x57e109 < this.listHandlingName.length; _0x57e109++) {
      if (_0x15bab6 != 1 && this.local_handling[this.listHandlingName[_0x57e109]] != 0 || this.listHandlingName[_0x57e109] == "DriftMode") {
        continue;
      }
      let _0x361e22 = _0xf54a4b.getHandling(this.listHandling[this.listHandlingName[_0x57e109]]);
      if (_0x361e22 != null && _0x361e22 != null && !isNaN(_0x361e22)) {
        if (this.listHandlingName[_0x57e109] == "SteeringLock" && _0x361e22 > 2) {
          _0x361e22 *= 0.0174533;
        }
        if (this.listHandlingName[_0x57e109] != "TractionCurveMax" && this.listHandlingName[_0x57e109] != "TractionCurveMin" || _0x361e22 != 0) {
          this.local_handling[this.listHandlingName[_0x57e109]] = _0x361e22;
        }
      }
    }
    const _0x53c866 = _0xf54a4b.getHandling("fTractionCurveMax");
    if (_0x53c866 && this.local_handling.TractionCurveMax > _0x53c866 * 1.1) {
      this.local_handling.TractionCurveMax = _0x53c866;
    }
  }
  driftCounterStart() {
    if (this.driftCounterStarted) {
      this.driftCounterEnd();
    }
    this.driftCounterIsDrifting = true;
    this.driftCounterBadAngleSince = 0;
    this.driftCounterDriftScore = 0;
    this.driftCounterDriftStartTime = Date.now();
    this.drift_server_counted = [false, false, false];
    this.driftCounterStarted = true;
    main_browser.execute("APPS.state.drift_score.score = 0;");
    main_browser.execute("APPS.state.drift_score.show = true;");
    this.driftCounterInterval = setInterval(() => {
      if (!this.driftCounterStarted) {
        return;
      }
      const _0x142719 = mp.players.local.vehicle;
      if (!_0x142719) {
        return this.driftCounterEnd();
      }
      const _0x546f93 = _0x142719.getVelocity();
      const _0x1aec2c = _0x142719.getSpeed();
      const _0x145830 = _0x142719.getBodyHealth();
      const _0x20b3bc = _0x142719.getForwardVector();
      const _0x534442 = this.dimensions(_0x20b3bc.x, _0x20b3bc.y);
      const _0x8f9ba3 = this.dimensions(_0x546f93.x, _0x546f93.y);
      let _0x2eb2b5 = 0;
      if (mp.game.system.sqrt(_0x546f93.x * _0x546f93.x + _0x546f93.y * _0x546f93.y) > 0.01) {
        _0x2eb2b5 = mp.game.gameplay.getAngleBetween2dVectors(_0x534442[0], _0x534442[1], _0x8f9ba3[0], _0x8f9ba3[1]);
      }
      if (this.driftCounterIsDrifting) {
        if (this.checkSuccess(_0x2eb2b5, _0x1aec2c, _0x145830)) {
          this.driftCounterBadAngleSince = 0;
          this.driftCounterOnDriftProcessed(_0x2eb2b5, _0x1aec2c);
        } else {
          let _0x51b225 = true;
          if (this.checkSuccess(_0x2eb2b5, _0x1aec2c, _0x145830) || this.driftCounterBadAngleSince !== 0) {
            if (Date.now() - this.driftCounterBadAngleSince < 1500) {
              _0x51b225 = false;
            } else if (_0x51b225) {
              this.driftCounterIsDrifting = false;
              main_browser.execute("APPS.state.drift_score.score = 0;");
              if (bAtDriftEvent && this.driftCounterDriftScore > 0 && this.driftCounterDriftScore < Number.MAX_SAFE_INTEGER) {
                mp.events.callRemote("Server_HandleDriftRaceScore", Number(this.driftCounterDriftScore));
              }
            }
          } else if (this.driftCounterBadAngleSince === 0) {
            this.driftCounterBadAngleSince = Date.now();
            _0x51b225 = false;
          }
        }
      } else if (this.checkSuccess(_0x2eb2b5, _0x1aec2c, _0x145830)) {
        this.driftCounterIsDrifting = true;
        this.health = _0x145830;
        this.driftCounterDriftScore = 0;
        this.drift_server_counted = [false, false, false];
        this.driftCounterBadAngleSince = 0;
        main_browser.execute("APPS.state.drift_score.score = 0;");
        this.driftCounterDriftStartTime = Date.now();
      }
    }, 250);
  }
  driftCounterEnd() {
    if (this.driftCounterStarted) {
      main_browser.execute("APPS.state.drift_score.show = false;");
      clearInterval(this.driftCounterInterval);
      this.driftCounterIsDrifting = false;
      this.driftCounterBadAngleSince = 0;
      this.driftCounterDriftScore = 0;
      this.drift_server_counted = [false, false, false];
      this.driftCounterDriftStartTime = 0;
      this.driftCounterStarted = false;
    }
  }
  dimensions(_0x55e13a, _0x4baf22) {
    const _0x3a8b97 = mp.game.system.sqrt(_0x55e13a * _0x55e13a + _0x4baf22 * _0x4baf22);
    if (_0x3a8b97 > 24) {
      const _0x10b094 = 1 / _0x3a8b97;
      _0x55e13a *= _0x10b094;
      _0x4baf22 *= _0x10b094;
    }
    return [_0x55e13a, _0x4baf22];
  }
  driftCounterOnDriftProcessed(_0xfa2a5f, _0x25cdf5) {
    let _0x159a22 = (_0xfa2a5f - this.driftSettings.DRIFT_ANGLE_MIN) * this.driftSettings.DRIFT_ANGLE_MULTIPLY + (_0x25cdf5 - this.driftSettings.DRIFT_MIN_SPEED) * this.driftSettings.DRIFT_SPEED_MULTIPLY;
    const _0x1b1065 = Date.now() - this.driftCounterDriftStartTime;
    if (_0x1b1065 > this.driftSettings.DRIFT_TIME_BONUS_START) {
      _0x159a22 += (_0x1b1065 - this.driftSettings.DRIFT_TIME_BONUS_START) * (bAtDriftEvent ? 0.005 : this.driftSettings.DRIFT_TIME_MULTIPLY);
    }
    this.driftCounterDriftScore += Math.round(_0x159a22);
    main_browser.execute("APPS.state.drift_score.score = " + this.driftCounterDriftScore + ";");
    if (is_in_drift_zone && this.driftCounterDriftScore >= drift_zone_drift_counter && !this.drift_server_counted[0]) {
      this.drift_server_counted[0] = true;
      mp.events.callRemote("Server_DriftZoneCounted", 1);
    } else if (is_in_drift_zone && this.driftCounterDriftScore >= drift_zone_drift_counter * 5 && !this.drift_server_counted[1]) {
      this.drift_server_counted[1] = true;
      mp.events.callRemote("Server_DriftZoneCounted", 2);
    } else if (is_in_drift_zone && this.driftCounterDriftScore >= drift_zone_drift_counter * 10 && !this.drift_server_counted[2]) {
      this.drift_server_counted[2] = true;
      mp.events.callRemote("Server_DriftZoneCounted", 3);
    }
  }
  checkSuccess(_0x5b0592, _0x25b25d, _0xf20ac1) {
    return !cruize_state && _0x5b0592 >= this.driftSettings.DRIFT_ANGLE_MIN && _0x5b0592 <= this.driftSettings.DRIFT_ANGLE_MAX && _0x25b25d >= this.driftSettings.DRIFT_MIN_SPEED && (!this.driftCounterIsDrifting || _0xf20ac1 >= this.health);
  }
}();