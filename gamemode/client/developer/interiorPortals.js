const localPlayer = mp.players.local;
const DRAW_DISTANCE = 8;
let isEnabled = false;
let showPoly = true;
let showLines = true;
let showCorners = true;
let showInfos = true;
function round(_0x50c510, _0x4563df) {
  const _0x3cac9e = 10 ** _0x4563df;
  return Math.round(_0x50c510 * _0x3cac9e) / _0x3cac9e;
}
function lerp(_0xbae6cb, _0x25ab6a, _0x37f222) {
  return new mp.Vector3(_0xbae6cb.x + (_0x25ab6a.x - _0xbae6cb.x) * _0x37f222, _0xbae6cb.y + (_0x25ab6a.y - _0xbae6cb.y) * _0x37f222, _0xbae6cb.z + (_0x25ab6a.z - _0xbae6cb.z) * _0x37f222);
}
function distance(_0x568aa2, _0x15b5c9) {
  const _0x3024a9 = _0x568aa2.x - _0x15b5c9.x;
  const _0x413c1f = _0x568aa2.y - _0x15b5c9.y;
  const _0x5de0f9 = _0x568aa2.z - _0x15b5c9.z;
  return Math.sqrt(_0x3024a9 * _0x3024a9 + _0x413c1f * _0x413c1f + _0x5de0f9 * _0x5de0f9);
}
function getPortalCornerLocal(_0x4792c2, _0x23e826, _0x967a71) {
  const _0x222fd6 = GetInteriorPortalCornerPosition(_0x4792c2, _0x23e826, _0x967a71);
  if (Array.isArray(_0x222fd6)) {
    return {
      x: _0x222fd6[0],
      y: _0x222fd6[1],
      z: _0x222fd6[2]
    };
  } else if (_0x222fd6 && typeof _0x222fd6 == "object") {
    return {
      x: _0x222fd6.x,
      y: _0x222fd6.y,
      z: _0x222fd6.z
    };
  } else {
    return {
      x: 0,
      y: 0,
      z: 0
    };
  }
}
function toWorldCorner(_0x14c521, _0x4f9e3d) {
  return mp.game.interior.getOffsetFromInteriorInWorldCoords(_0x14c521, _0x4f9e3d.x, _0x4f9e3d.y, _0x4f9e3d.z);
}
function drawPortalText(_0x5cd77e, _0x1d0263) {
  mp.game.graphics.drawText(_0x1d0263, [_0x5cd77e.x, _0x5cd77e.y, _0x5cd77e.z], {
    font: 0,
    centre: true,
    outline: true,
    scale: [0.25, 0.25],
    color: [255, 255, 255, 230]
  });
}
function drawPortal(_0x4c1221, _0x4a521b, _0xe2836b) {
  const _0x54be7c = [];
  const _0x3222f9 = [];
  for (let _0x2efc0e = 0; _0x2efc0e < 4; _0x2efc0e++) {
    const _0x147719 = getPortalCornerLocal(_0x4a521b, _0x4c1221, _0x2efc0e);
    _0x3222f9[_0x2efc0e] = _0x147719;
    _0x54be7c[_0x2efc0e] = toWorldCorner(_0x4a521b, _0x147719);
  }
  const _0x159615 = lerp(_0x54be7c[0], _0x54be7c[2], 0.5);
  if (!(distance(_0xe2836b, _0x159615) > 8) && (showPoly && (mp.game.graphics.drawPoly(_0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, _0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, _0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, 0, 0, 180, 150), mp.game.graphics.drawPoly(_0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, _0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, _0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, 0, 0, 180, 150), mp.game.graphics.drawPoly(_0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, _0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, _0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, 0, 0, 180, 150), mp.game.graphics.drawPoly(_0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, _0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, _0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, 0, 0, 180, 150)), showLines && (mp.game.graphics.drawLine(_0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, _0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, 0, 255, 0, 255), mp.game.graphics.drawLine(_0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, _0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, 0, 255, 0, 255), mp.game.graphics.drawLine(_0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, _0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, 0, 255, 0, 255), mp.game.graphics.drawLine(_0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, _0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, 0, 255, 0, 255), mp.game.graphics.drawLine(_0x54be7c[0].x, _0x54be7c[0].y, _0x54be7c[0].z, _0x54be7c[2].x, _0x54be7c[2].y, _0x54be7c[2].z, 0, 255, 0, 255), mp.game.graphics.drawLine(_0x54be7c[1].x, _0x54be7c[1].y, _0x54be7c[1].z, _0x54be7c[3].x, _0x54be7c[3].y, _0x54be7c[3].z, 0, 255, 0, 255)), showCorners && (drawPortalText(_0x54be7c[0], "C0: " + round(_0x3222f9[0].x, 2) + " " + round(_0x3222f9[0].y, 2) + " " + round(_0x3222f9[0].z, 2)), drawPortalText(_0x54be7c[1], "C1: " + round(_0x3222f9[1].x, 2) + " " + round(_0x3222f9[1].y, 2) + " " + round(_0x3222f9[1].z, 2)), drawPortalText(_0x54be7c[2], "C2: " + round(_0x3222f9[2].x, 2) + " " + round(_0x3222f9[2].y, 2) + " " + round(_0x3222f9[2].z, 2)), drawPortalText(_0x54be7c[3], "C3: " + round(_0x3222f9[3].x, 2) + " " + round(_0x3222f9[3].y, 2) + " " + round(_0x3222f9[3].z, 2))), showInfos)) {
    const _0x2b8575 = GetInteriorPortalFlag(_0x4a521b, _0x4c1221);
    const _0x1347f0 = GetInteriorPortalRoomFrom(_0x4a521b, _0x4c1221);
    const _0x5c861e = GetInteriorPortalRoomTo(_0x4a521b, _0x4c1221);
    drawPortalText(new mp.Vector3(_0x159615.x, _0x159615.y, _0x159615.z + 0.2), "Portal " + _0x4c1221);
    drawPortalText(new mp.Vector3(_0x159615.x, _0x159615.y, _0x159615.z + 0.05), "From " + _0x1347f0 + " To " + _0x5c861e);
    drawPortalText(new mp.Vector3(_0x159615.x, _0x159615.y, _0x159615.z - 0.1), "Flags " + _0x2b8575);
  }
}
function setLayerVisibility(_0x9349f3, _0x1c2d29) {
  switch (_0x9349f3) {
    case "poly":
      showPoly = _0x1c2d29 !== false;
      break;
    case "lines":
      showLines = _0x1c2d29 !== false;
      break;
    case "corners":
      showCorners = _0x1c2d29 !== false;
      break;
    case "infos":
      showInfos = _0x1c2d29 !== false;
  }
}
mp.events.add("Client_ToggleInteriorPortals", _0x4fe096 => {
  if (is_admin === true) {
    isEnabled = _0x4fe096 !== false;
  }
});
mp.events.add("Client_SetInteriorPortalLayers", (_0x11dfdb, _0x59c28b, _0x417572, _0x557684) => {
  if (is_admin === true) {
    showPoly = _0x11dfdb !== false;
    showLines = _0x59c28b !== false;
    showCorners = _0x417572 !== false;
    showInfos = _0x557684 !== false;
  }
});
mp.keys.bind(120, true, () => {
  if (is_admin === true) {
    isEnabled = !isEnabled;
  }
});
mp.events.add("render", () => {
  if (!isEnabled || typeof GetInteriorPortalCount != "function") {
    return;
  }
  const _0x4ea569 = mp.game.interior.getFromEntity(localPlayer.handle);
  if (!_0x4ea569) {
    return;
  }
  const _0x4a2026 = localPlayer.position;
  const _0x4b3a62 = GetInteriorPortalCount(_0x4ea569);
  for (let _0x458f3e = 0; _0x458f3e < _0x4b3a62; _0x458f3e++) {
    drawPortal(_0x458f3e, _0x4ea569, _0x4a2026);
  }
});
isEnabled = true;
global.SetInteriorPortalLayerVisibility = setLayerVisibility;