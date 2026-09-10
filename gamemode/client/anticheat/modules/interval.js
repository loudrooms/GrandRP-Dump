setInterval(() => {
  if (!loggedin) {
    return;
  }
  if (mp.players.local.getVariable("IsRealAdmin")) {
    return;
  }
  if (playerLevel != 1) {
    return;
  }
  if (spawnTime > 0 && new Date().getTime() - spawnTime < 5000) {
    return;
  }
  if (mp.players.local.dimension != 0) {
    return;
  }
  if (NetworkIsInSpectatorMode()) {
    mp.events.callRemote("Server_NotifyWarning", 1);
  }
  const _0x17c630 = PlayerPedId();
  const _0x151787 = GetEntityAlpha(_0x17c630);
  if (!IsEntityVisible(_0x17c630) || !IsEntityVisibleToScript(_0x17c630) || _0x151787 < 120) {
    mp.events.callRemote("Server_NotifyWarning", 3);
  }
  const _0xa25151 = GetEntityCoords(_0x17c630, false);
  const _0x10e762 = GetFinalRenderedCamCoord();
  if (Math.hypot((_0xa25151.x ?? _0xa25151[0]) - (_0x10e762.x ?? _0x10e762[0]), (_0xa25151.y ?? _0xa25151[1]) - (_0x10e762.y ?? _0x10e762[1]), (_0xa25151.z ?? _0xa25151[2]) - (_0x10e762.z ?? _0x10e762[2])) > 55 && !IsCinematicCamRendering() && !IsNuiFocused()) {
    mp.events.callRemote("Server_NotifyWarning", 4);
  }
  const _0x55aa3f = GetEntityVelocity(_0x17c630, false);
  if (_0x55aa3f) {
    const _0x49b245 = _0x55aa3f.x ?? _0x55aa3f[0] ?? 0;
    const _0x442f1d = _0x55aa3f.y ?? _0x55aa3f[1] ?? 0;
    _0x55aa3f.z ?? _0x55aa3f[2];
    const _0x4897a4 = GetVehiclePedIsIn(_0x17c630, false);
    if (_0x4897a4 && _0x4897a4 !== 0) {
      const _0x4a7e36 = GetEntityVelocity(_0x4897a4, false);
      if (_0x4a7e36) {
        const _0xb73865 = _0x4a7e36.x ?? _0x4a7e36[0] ?? 0;
        const _0x474e9d = _0x4a7e36.y ?? _0x4a7e36[1] ?? 0;
        const _0x29763c = _0x4a7e36.z ?? _0x4a7e36[2] ?? 0;
        if (Math.sqrt(_0xb73865 * _0xb73865 + _0x474e9d * _0x474e9d + _0x29763c * _0x29763c) * 3.6 > 600) {
          mp.events.callRemote("Server_NotifyWarning", 5);
        }
      }
    } else if (Math.sqrt(_0x49b245 * _0x49b245 + _0x442f1d * _0x442f1d) > 15) {
      mp.events.callRemote("Server_NotifyWarning", 6);
    }
  }
}, 1000);