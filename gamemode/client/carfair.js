let carFairTestDriveVehicle = null;
global.carFairTestDriveActive = false;
let carFairTestDriveEnterInterval = null;
function destroyCarFairTestDriveVehicle() {
  if (carFairTestDriveEnterInterval) {
    clearInterval(carFairTestDriveEnterInterval);
    carFairTestDriveEnterInterval = null;
  }
  if (carFairTestDriveVehicle && mp.vehicles.exists(carFairTestDriveVehicle)) {
    carFairTestDriveVehicle.destroy();
  }
  carFairTestDriveVehicle = null;
  carFairTestDriveActive = false;
}
mp.events.add("Client_CarFair_StartTestDrive", (_0x3deb6d, _0x3179ac) => {
  try {
    destroyCarFairTestDriveVehicle();
    if (!_0x3179ac || !_0x3179ac.model || !_0x3179ac.position || !_0x3179ac.rotation) {
      return;
    }
    const _0x58b19f = new mp.Vector3(_0x3179ac.position.x, _0x3179ac.position.y, _0x3179ac.position.z);
    const _0x291c0d = new mp.Vector3(_0x3179ac.rotation.x, _0x3179ac.rotation.y, _0x3179ac.rotation.z);
    carFairTestDriveVehicle = mp.vehicles.new(_0x3179ac.model, _0x58b19f, {
      heading: _0x291c0d.z,
      dimension: _0x3deb6d
    });
    const _0x264718 = () => {
      if (carFairTestDriveVehicle && mp.vehicles.exists(carFairTestDriveVehicle)) {
        try {
          carFairTestDriveVehicle.setHeading(_0x291c0d.z);
        } catch (_0x23144c) {}
        try {
          carFairTestDriveVehicle.rotation = new mp.Vector3(0, 0, _0x291c0d.z);
        } catch (_0x3b5a9b) {}
      }
    };
    _0x264718();
    setTimeout(_0x264718, 50);
    setTimeout(_0x264718, 250);
    const _0x419c24 = () => {
      if (!carFairTestDriveVehicle || !mp.vehicles.exists(carFairTestDriveVehicle)) {
        return;
      }
      const _0x5c9699 = _0x3179ac.colors || [[255, 255, 255], [255, 255, 255]];
      if (Array.isArray(_0x5c9699) && _0x5c9699.length >= 2) {
        const _0x3a3a17 = _0x5c9699[0] || [255, 255, 255];
        const _0x2c8c3c = _0x5c9699[1] || [255, 255, 255];
        carFairTestDriveVehicle.setCustomPrimaryColour(_0x3a3a17[0] ?? 255, _0x3a3a17[1] ?? 255, _0x3a3a17[2] ?? 255);
        carFairTestDriveVehicle.setCustomSecondaryColour(_0x2c8c3c[0] ?? 255, _0x2c8c3c[1] ?? 255, _0x2c8c3c[2] ?? 255);
      }
      if (_0x3179ac.pearlescentColor !== undefined && _0x3179ac.pearlescentColor !== null) {
        carFairTestDriveVehicle.setExtraColours(parseInt(_0x3179ac.pearlescentColor) || 0, 0);
      }
      if (_0x3179ac.neonEnabled) {
        try {
          carFairTestDriveVehicle.setNeonEnabled(true, true, true, true);
          if (Array.isArray(_0x3179ac.neonColor) && _0x3179ac.neonColor.length >= 3) {
            carFairTestDriveVehicle.setNeonColour(parseInt(_0x3179ac.neonColor[0]) || 255, parseInt(_0x3179ac.neonColor[1]) || 255, parseInt(_0x3179ac.neonColor[2]) || 255);
          }
        } catch (_0x398433) {}
      }
    };
    if (_0x3179ac.numberPlate !== undefined && _0x3179ac.numberPlate !== null) {
      carFairTestDriveVehicle.numberPlate = String(_0x3179ac.numberPlate);
    }
    _0x419c24();
    setTimeout(_0x419c24, 100);
    setTimeout(_0x419c24, 500);
    if (_0x3179ac.tuning && typeof _0x3179ac.tuning == "object") {
      for (const [_0x2cc361, _0x3edf3e] of Object.entries(_0x3179ac.tuning)) {
        const _0x559e9f = parseInt(_0x2cc361);
        const _0x380d58 = parseInt(_0x3edf3e);
        if (Number.isFinite(_0x559e9f) && Number.isFinite(_0x380d58) && _0x380d58 !== -1) {
          try {
            carFairTestDriveVehicle.setMod(_0x559e9f, _0x380d58);
          } catch (_0x322857) {}
        }
      }
    }
    carFairTestDriveActive = true;
    let _0x1ef6df = 0;
    carFairTestDriveEnterInterval = setInterval(() => {
      _0x1ef6df++;
      if (!carFairTestDriveVehicle || !mp.vehicles.exists(carFairTestDriveVehicle)) {
        clearInterval(carFairTestDriveEnterInterval);
        carFairTestDriveEnterInterval = null;
        return;
      }
      try {
        carFairTestDriveVehicle.setEngineOn(true, true, false);
      } catch (_0x347c01) {}
      if (mp.players.local.dimension === _0x3deb6d) {
        if (mp.players.local.vehicle && mp.players.local.vehicle === carFairTestDriveVehicle) {
          clearInterval(carFairTestDriveEnterInterval);
          carFairTestDriveEnterInterval = null;
          return;
        }
        try {
          mp.players.local.setIntoVehicle(carFairTestDriveVehicle.handle, -1);
        } catch (_0x2ad550) {}
        if (_0x1ef6df >= 40) {
          clearInterval(carFairTestDriveEnterInterval);
          carFairTestDriveEnterInterval = null;
        }
      } else if (_0x1ef6df >= 40) {
        clearInterval(carFairTestDriveEnterInterval);
        carFairTestDriveEnterInterval = null;
      }
    }, 150);
    HintShow(language["Нажмите ESC, чтобы отменить тест-драйв"][curr_lang]);
  } catch (_0x245554) {
    destroyCarFairTestDriveVehicle();
  }
});
mp.events.add("Client_CarFair_EndTestDrive", () => {
  destroyCarFairTestDriveVehicle();
});
mp.events.add("playerLeaveVehicle", _0x18da17 => {
  if (carFairTestDriveActive && carFairTestDriveVehicle && mp.vehicles.exists(carFairTestDriveVehicle) && _0x18da17 === carFairTestDriveVehicle) {
    forceEndCarFairTestDrive();
  }
});
global.forceEndCarFairTestDrive = function () {
  destroyCarFairTestDriveVehicle();
  mp.events.callRemote("Server_CarFair_EndTestDrive");
  HintClose();
};
mp.events.add("render", () => {
  if (carFairTestDriveActive) {
    try {
      mp.game.controls.disableControlAction(0, 75, true);
      mp.game.controls.disableControlAction(0, 23, true);
      mp.game.controls.disableControlAction(0, 199, true);
      mp.game.controls.disableControlAction(0, 200, true);
      mp.game.controls.disableControlAction(0, 322, true);
    } catch (_0x262588) {}
  }
});