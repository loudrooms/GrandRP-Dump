let cam;
let fov_max = 80;
let fov_min = 10;
let zoomspeed = 2;
let speed_lr = 3;
let speed_ud = 3;
let send_log = 24;
let toggle_vision = 25;
let toggle_lock_on = 22;
let scaleform = null;
let radar_object = null;
let fov = (fov_max + fov_min) * 0.5;
let vision_state = 0;
let locked_on_vehicle = null;
let police_cam_init_pending = false;
function initPoliceCam() {
  return !!radar_object && !!mp.objects.exists(radar_object) && !!radar_object.handle && !!scaleform && !!mp.game.graphics.hasScaleformMovieLoaded(scaleform) && (cam != null || (cam = mp.cameras.new("DEFAULT_SCRIPTED_FLY_CAMERA", localplayer.position, new mp.Vector3(0, 0, mp.players.local.getHeading()), 60), cam.setActive(true), cam.setRot(0, 0, radar_object.getHeading(), 2), cam.setFov(fov), mp.game.cam.renderScriptCams(true, false, 0, true, false), cam.attachTo(radar_object.handle, -0.7, 0, 2, true), mp.game.graphics.pushScaleformMovieFunction(scaleform, "SET_CAM_LOGO"), mp.game.graphics.pushScaleformMovieFunctionParameterInt(1), mp.game.graphics.popScaleformMovieFunctionVoid(), police_cam_init_pending = false), true);
}
scaleform = mp.game.graphics.requestScaleformMovie("HELI_CAM");
global.at_police_cam = false;
global.ClosePoliceCam = function () {
  if (at_police_cam) {
    HintClose();
    at_police_cam = false;
    mp.game.invoke("0x0F07E7745A236711");
    mp.game.invoke("0x31B73D1EA9F01DA2");
    mp.game.cam.renderScriptCams(false, false, 0, true, false);
    if (scaleform != null && scaleform != 0) {
      mp.game.graphics.setScaleformMovieAsNoLongerNeeded(scaleform);
      scaleform = null;
    }
    if (cam != null) {
      cam.destroy(true);
      cam = null;
    }
    mp.game.graphics.setSeethrough(false);
    mp.game.graphics.setNightvision(false);
    vision_state = 0;
    locked_on_vehicle = null;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    radar_object = null;
    police_cam_init_pending = false;
    stop_animation(mp.players.local, "anim@scripted@cayo@ig1_hack_radar@heeled@", "hack_loop");
  }
};
mp.events.add("Client_EnablePoliceCamera", _0x2ccbbc => {
  if (at_police_cam) {
    ClosePoliceCam();
  } else if (_0x2ccbbc && mp.objects.exists(_0x2ccbbc) && _0x2ccbbc.handle) {
    HintShow(language["ПКМ - переключить режим<br>Пробел - сфокусироваться<br>ЛКМ - отправить уведомелние"][curr_lang]);
    ChangeHudState(false);
    mp.events.call("Disablechat");
    mp.game.ui.displayRadar(false);
    mp.game.graphics.setTimecycleModifier("heliGunCam");
    mp.game.graphics.setTimecycleModifierStrength(0.3);
    scaleform ||= mp.game.graphics.requestScaleformMovie("HELI_CAM");
    radar_object = _0x2ccbbc;
    police_cam_init_pending = true;
    at_police_cam = true;
    if (!initPoliceCam()) {
      police_cam_init_pending = true;
    }
  }
});
let last_veh_warn = new Date().getTime();
function ChangeVision() {
  if (vision_state == 0) {
    mp.game.graphics.setNightvision(true);
    vision_state = 1;
  } else if (vision_state == 1) {
    mp.game.graphics.setNightvision(true);
    mp.game.graphics.setSeethrough(true);
    vision_state = 2;
  } else {
    mp.game.graphics.setSeethrough(false);
    mp.game.graphics.setNightvision(false);
    vision_state = 0;
  }
}
function RenderVehicleInfo(_0x3275d4) {
  const _0x458a64 = Math.round(_0x3275d4.getSpeed() * 3.6);
  const _0x4a37c7 = _0x3275d4.getVariable("Thefted");
  let _0x21d816 = [];
  _0x21d816 = _0x458a64 > 100 || _0x4a37c7 ? [255, 0, 0, 185] : [255, 255, 255, 185];
  let _0x241f17 = "";
  if (_0x3275d4.correct_name) {
    _0x241f17 = _0x3275d4.correct_name;
  } else {
    _0x241f17 = mp.game.ui.getLabelText(mp.game.vehicle.getDisplayNameFromVehicleModel(_0x3275d4.model));
    _0x3275d4.correct_name = _0x241f17;
    mp.events.callRemote("Server_GetCorrectModelName", _0x3275d4);
  }
  let _0x4bdf0d = _0x3275d4.getNumberPlateText();
  const _0x876cac = _0x4a37c7 ? TranslateText("\nРазыскивается") : "";
  mp.game.graphics.drawText(TranslateText("Модель: {0}({1}) Скорость:{2} км/ч{3}", _0x241f17, _0x4bdf0d, _0x458a64, _0x876cac), [0.5, 0.9], {
    font: 0,
    color: _0x21d816,
    scale: [0, 0.55],
    outline: true
  });
}
function pointingAt(_0x1cb7fb) {
  let _0x2728de = _0x1cb7fb.getCoord();
  let _0x384627 = _0x1cb7fb.getDirection();
  let _0x5ea830 = new mp.Vector3(_0x384627.x * 100 + _0x2728de.x, _0x384627.y * 100 + _0x2728de.y, _0x384627.z * 100 + _0x2728de.z);
  mp.game.graphics.drawLine(_0x2728de.x, _0x2728de.y, _0x2728de.z, _0x5ea830.x, _0x5ea830.y, _0x5ea830.z, 255, 0, 0, 255);
  let _0x3d363c = mp.raycasting.testPointToPoint(_0x2728de, _0x5ea830, [1, 16]);
  if (_0x3d363c) {
    if (_0x3d363c.entity.handle === localplayer.handle) {
      return null;
    } else if (_0x3d363c.entity.type === "vehicle") {
      return _0x3d363c.entity;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function RotAnglesToVec(_0x4ba58c) {
  let _0x1dce41 = Math.degrees(_0x4ba58c.z);
  let _0x28fe02 = Math.degrees(_0x4ba58c.x);
  let _0xc03e20 = Math.abs(Math.cos(_0x28fe02));
  return new mp.Vector3(-Math.sin(_0x1dce41) * _0xc03e20, Math.cos(_0x1dce41) * _0xc03e20, Math.sin(_0x28fe02));
}
mp.events.add("render", () => {
  if (at_police_cam) {
    if (!radar_object || !mp.objects.exists(radar_object) || !radar_object.handle) {
      ClosePoliceCam();
      return;
    }
    if (police_cam_init_pending && !initPoliceCam()) {
      return;
    }
    if (!scaleform || !mp.game.graphics.hasScaleformMovieLoaded(scaleform)) {
      return;
    }
    if (cam !== null && cam.isActive() && cam.isRendering()) {
      mp.game.controls.disableAllControlActions(2);
      var _0x58c8c9 = mp.game.controls.getDisabledControlNormal(7, 1) * speed_lr;
      var _0x1a8bf9 = mp.game.controls.getDisabledControlNormal(7, 2) * speed_ud;
      var _0x65578a = mp.game.controls.getDisabledControlNormal(2, 40) * zoomspeed;
      var _0x147114 = mp.game.controls.getDisabledControlNormal(2, 41) * zoomspeed;
      var _0x4081a4 = cam.getRot(2);
      _0x4081a4 = new mp.Vector3(_0x4081a4.x - _0x1a8bf9, 0, _0x4081a4.z - _0x58c8c9);
      cam.setRot(_0x4081a4.x, _0x4081a4.y, _0x4081a4.z, 2);
      if (_0x65578a > 0) {
        var _0x2981cb = cam.getFov();
        if ((_0x2981cb -= _0x65578a) < fov_min) {
          _0x2981cb = fov_min;
        }
        cam.setFov(_0x2981cb);
      } else if (_0x147114 > 0) {
        _0x2981cb = cam.getFov();
        if ((_0x2981cb += _0x147114) > fov_max) {
          _0x2981cb = fov_max;
        }
        cam.setFov(_0x2981cb);
      }
    }
    if (mp.game.controls.isDisabledControlJustPressed(0, toggle_vision) && !chatActive) {
      mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
      ChangeVision();
    }
    if (locked_on_vehicle) {
      if (locked_on_vehicle.handle != 0) {
        if (mp.game.controls.isDisabledControlJustPressed(0, send_log) && !chatActive) {
          if (new Date().getTime() - last_veh_warn < 5000) {
            return;
          }
          last_veh_warn = new Date().getTime();
          mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
          mp.events.callRemote("Server_WarnSuspiciousVehicle", locked_on_vehicle, Math.round(locked_on_vehicle.getSpeed() * 3.6));
        }
        cam.pointAt(locked_on_vehicle.handle, 0, 0, 0, true);
        RenderVehicleInfo(locked_on_vehicle);
        if (mp.game.controls.isDisabledControlJustPressed(0, toggle_lock_on) && !chatActive) {
          mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
          locked_on_vehicle = null;
          let _0x242ec5 = mp.players.local;
          _0x4081a4 = cam.getRot(2);
          _0x2981cb = cam.getFov();
          cam.destroy();
          cam = mp.cameras.new("DEFAULT_SCRIPTED_FLY_CAMERA", _0x242ec5.position, new mp.Vector3(0, 0, mp.players.local.getHeading()), 60);
          cam.setActive(true);
          cam.setRot(0, 0, radar_object.getHeading(), 2);
          cam.setFov(fov);
          mp.game.cam.renderScriptCams(true, false, 0, true, false);
          cam.attachTo(radar_object.handle, -0.7, 0, 2, true);
        }
      } else {
        locked_on_vehicle = null;
        let _0x3276d2 = mp.players.local;
        _0x4081a4 = cam.getRot(2);
        _0x2981cb = cam.getFov();
        cam.destroy();
        cam = mp.cameras.new("DEFAULT_SCRIPTED_FLY_CAMERA", _0x3276d2.position, new mp.Vector3(0, 0, mp.players.local.getHeading()), 60);
        cam.setActive(true);
        cam.setRot(0, 0, radar_object.getHeading(), 2);
        cam.setFov(fov);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
        cam.attachTo(radar_object.handle, -0.7, 0, 2, true);
      }
    } else {
      let _0x30d43c = pointingAt(cam);
      if (_0x30d43c != null && _0x30d43c.handle != 0 && mp.game.controls.isDisabledControlJustPressed(0, toggle_lock_on) && !chatActive) {
        mp.game.audio.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
        locked_on_vehicle = _0x30d43c;
      }
    }
    mp.game.graphics.pushScaleformMovieFunction(scaleform, "SET_ALT_FOV_HEADING");
    mp.game.graphics.pushScaleformMovieFunctionParameterFloat(parseFloat(radar_object.position.z));
    mp.game.graphics.pushScaleformMovieFunctionParameterFloat(parseFloat(cam.getFov()));
    mp.game.graphics.pushScaleformMovieFunctionParameterFloat(parseFloat(cam.getRot(2).z));
    mp.game.graphics.popScaleformMovieFunctionVoid();
    mp.game.graphics.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, true);
  }
});
Math.degrees = function (_0x46ece0) {
  return _0x46ece0 * 180 / Math.PI;
};
mp.events.add("Client_LoadVehicleCorrectName", (_0xba25e8, _0x1bc3a6) => {
  if (_0xba25e8 && mp.vehicles.exists(_0xba25e8)) {
    _0xba25e8.correct_name = _0x1bc3a6;
  }
});