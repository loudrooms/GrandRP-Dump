let lastTape1P;
let lastTape2P;
let placingTape = false;
let tapeState = 0;
const tapesMetrics = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 25];
const camera = mp.cameras.new("gameplay");
let tapes = [];
let tape_type = 0;
mp.events.add("Client_StartAttachPoliceTape", _0x37d804 => {
  if (!placingTape) {
    placingTape = true;
    tapeState = 0;
  }
  tape_type = _0x37d804;
});
global.startTapePlacing = function (_0x31b332) {
  if (!placingTape) {
    placingTape = true;
    tapeState = 0;
  }
  tape_type = _0x31b332;
};
global.closeTapePlacing = function () {
  if (placingTape) {
    placingTape = false;
    tapeState = 0;
  }
};
mp.events.add("Client_AdminCheckPoliceTape", () => {
  if (tapes && tapes.length > 0) {
    tapes.some(function (_0xa7638c, _0x3f0d84) {
      if (_0xa7638c && mp.objects.exists(_0xa7638c) && mp.game.system.vdist(_0xa7638c.position.x, _0xa7638c.position.y, _0xa7638c.position.z, localplayer.position.x, localplayer.position.y, localplayer.position.z) < 20) {
        mp.events.callRemote("Server_DestroyPoliceTapeByAdmin", _0xa7638c.owner);
        return true;
      }
    });
  }
});
mp.events.add("Client_DeletePoliceTapeByID", _0x348589 => {
  if (tapes && tapes.length > 0) {
    tapes.some(function (_0x19e411, _0x16cd1c) {
      if (_0x19e411 && mp.objects.exists(_0x19e411) && _0x19e411.owner == _0x348589) {
        _0x19e411.destroy();
        tapes.splice(_0x16cd1c, 1);
        barricadeEditorRemoveInstalled("tape");
        return true;
      }
    });
  }
});
mp.events.add("Client_InitilizePoliceTapes", _0x248dfb => {
  (_0x248dfb = JSON.parse(_0x248dfb)).forEach(_0x5730cc => {
    const _0x266ce8 = mp.objects.new(mp.game.joaat(_0x5730cc.model), _0x5730cc.pos, {
      rotation: _0x5730cc.rot,
      alpha: 255,
      dimension: _0x5730cc.dim
    });
    _0x266ce8.owner = _0x5730cc.owner;
    setTimeout(() => {
      if (mp.objects.exists(_0x266ce8)) {
        _0x266ce8.setInvincible(true);
        _0x266ce8.setCanBeDamaged(false);
      }
    }, 500);
    tapes.push(_0x266ce8);
  });
});
mp.events.add("Client_SetPoliceTape", _0x21b98 => {
  let _0x2dc1fc = JSON.parse(_0x21b98);
  const _0xb5c989 = mp.objects.new(mp.game.joaat(_0x2dc1fc.model), _0x2dc1fc.pos, {
    rotation: _0x2dc1fc.rot,
    alpha: 255,
    dimension: _0x2dc1fc.dim
  });
  _0xb5c989.owner = _0x2dc1fc.owner;
  setTimeout(() => {
    if (mp.objects.exists(_0xb5c989)) {
      _0xb5c989.setInvincible(true);
      _0xb5c989.setCanBeDamaged(false);
    }
  }, 500);
  tapes.push(_0xb5c989);
});
mp.events.add("destroyTapes", () => {
  tapes.forEach(_0xb680e => {
    _0xb680e.destroy();
  });
  tapes = [];
});
mp.events.add("click", (_0x2d87fb, _0x1a247c, _0x19fb75, _0x583029, _0x364aa5, _0x33a71c, _0xe77495, _0x3e0df3) => {
  if (_0x19fb75 === "up" && _0x583029 === "left") {
    if (inBarricadeEditor == 1) {
      return;
    }
    if (placingTape) {
      const _0x25c627 = true;
      if (tapeState === 0) {
        tapeState = 1;
      } else if (mp.game.system.vdist(lastTape1P.x, lastTape1P.y, lastTape1P.z, lastTape2P.x, lastTape2P.y, lastTape2P.z) > 25) {
        tapeState = 0;
        mp.game.ui.notifications.show(language["Лента слишком длинная"][curr_lang], false, 0, 6);
      } else {
        mp.events.callRemote("Server_PlacePoliceTape", lastTape1P, lastTape2P, _0x25c627, tape_type);
        placingTape = false;
        closeBarricadeEditor();
      }
    }
  }
});
mp.events.add("render", () => {
  if (placingTape) {
    mp.game.controls.disableControlAction(0, 24, true);
    let _0x336f0d = camera.getCoord();
    let _0x109e6c = camera.getDirection();
    let _0x2b49ba = new mp.Vector3(_0x109e6c.x * 10 + _0x336f0d.x, _0x109e6c.y * 10 + _0x336f0d.y, _0x109e6c.z * 10 + _0x336f0d.z);
    let _0x5477a3 = mp.raycasting.testPointToPoint(_0x336f0d, _0x2b49ba, localplayer, [1]);
    if (_0x5477a3) {
      if (tapeState === 0) {
        mp.game.graphics.drawBox(_0x5477a3.position.x - 0.05, _0x5477a3.position.y - 0.05, _0x5477a3.position.z - 0.05, _0x5477a3.position.x + 0.05, _0x5477a3.position.y + 0.05, _0x5477a3.position.z + 0.05, 255, 255, 255, 100);
        lastTape1P = _0x5477a3.position;
      } else {
        let _0x2849a7 = mp.game.system.vdist(lastTape1P.x, lastTape1P.y, lastTape1P.z, _0x5477a3.position.x, _0x5477a3.position.y, _0x5477a3.position.z);
        let _0x16591d = new mp.Vector3(lastTape1P.x, lastTape1P.y, lastTape1P.z);
        let _0x58eba4 = new mp.Vector3(_0x5477a3.position.x, _0x5477a3.position.y, _0x5477a3.position.z);
        let _0x7e5d20 = _0x16591d.clone().add(_0x58eba4).multiply(0.5);
        mp.game.graphics.drawBox(_0x5477a3.position.x - 0.05, _0x5477a3.position.y - 0.05, _0x5477a3.position.z - 0.05, _0x5477a3.position.x + 0.05, _0x5477a3.position.y + 0.05, _0x5477a3.position.z + 0.05, 255, 255, 255, 100);
        if (_0x2849a7 > 25) {
          mp.game.graphics.drawLine(lastTape1P.x, lastTape1P.y, lastTape1P.z, _0x5477a3.position.x, _0x5477a3.position.y, _0x5477a3.position.z, 255, 0, 0, 255);
          mp.game.graphics.drawText(Math.round(_0x2849a7).toString() + "m", [_0x7e5d20.x, _0x7e5d20.y, _0x7e5d20.z], {
            font: 0,
            color: [255, 0, 0, 185],
            scale: [0.5, 0.5],
            outline: true,
            centre: true
          });
          lastTape2P = _0x5477a3.position;
        } else {
          if (tapesMetrics.includes(Math.round(_0x2849a7))) {
            mp.game.graphics.drawLine(lastTape1P.x, lastTape1P.y, lastTape1P.z, _0x5477a3.position.x, _0x5477a3.position.y, _0x5477a3.position.z, 255, 255, 255, 255);
            mp.game.graphics.drawText(Math.round(_0x2849a7).toString() + "m", [_0x7e5d20.x, _0x7e5d20.y, _0x7e5d20.z], {
              font: 0,
              color: [255, 255, 255, 185],
              scale: [0.5, 0.5],
              outline: true,
              centre: true
            });
          } else {
            mp.game.graphics.drawLine(lastTape1P.x, lastTape1P.y, lastTape1P.z, _0x5477a3.position.x, _0x5477a3.position.y, _0x5477a3.position.z, 250, 160, 0, 255);
            mp.game.graphics.drawText(Math.round(_0x2849a7).toString() + "m", [_0x7e5d20.x, _0x7e5d20.y, _0x7e5d20.z], {
              font: 0,
              color: [250, 160, 0, 185],
              scale: [0.5, 0.5],
              outline: true,
              centre: true
            });
          }
          lastTape2P = _0x5477a3.position;
        }
      }
    }
    if (_0x5477a3 && typeof _0x5477a3.entity == "number" && _0x5477a3.entity !== 0 && mp.game.entity.doesExist(_0x5477a3.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(_0x5477a3.entity);
    }
  }
});