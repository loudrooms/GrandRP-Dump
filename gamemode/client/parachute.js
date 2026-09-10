function createEntity(_0x269fc6, _0x41a844) {
  let _0x20e522 = isNaN(_0x269fc6) ? mp.game.joaat(_0x269fc6) : parseInt(_0x269fc6);
  let _0x3c7b33 = mp.objects.new(_0x20e522, _0x41a844, {
    rotation: new mp.Vector3(0, 0, 0),
    dimension: 0
  });
  _0x3c7b33.name = _0x269fc6;
  return _0x3c7b33;
}
let last_parchute_sync;
let giveParachuteObject = _0x344684 => {
  if (attachedParachuts[_0x344684.id] != null) {
    return;
  }
  attachedParachuts[_0x344684.id] = createEntity("p_parachute1_mp_s", mp.players.local.position);
  attachedParachuts[_0x344684.id].attachTo(_0x344684.handle, 57717, 0, 0, 3, 0, 0, 0, true, true, true, false, 0, true);
  let _0xacf97c = setInterval(() => {
    let _0x5b8ae2 = mp.game.gameplay.getGroundZFor3dCoord(_0x344684.position.x, _0x344684.position.y, _0x344684.position.z, 0, false);
    if (_0x344684.position.z - _0x5b8ae2 <= 30) {
      attachedParachuts[_0x344684.id].destroy();
      attachedParachuts[_0x344684.id] = undefined;
      if (_0xacf97c != null) {
        clearInterval(_0xacf97c);
      }
      _0xacf97c = undefined;
    }
  }, 3000);
};
mp.events.add("render", () => {
  if (new_version == 1) {
    return;
  }
  const _0x3aa82d = mp.players.local.getParachuteState();
  if (_0x3aa82d >= 0 && _0x3aa82d <= 2) {
    if (new Date().getTime() - last_parchute_sync < 1000) {
      return;
    }
    last_parchute_sync = new Date().getTime();
    mp.events.callRemote("onPlayerParachute", _0x3aa82d);
  }
});
let attachedParachuts = [];
mp.events.add("fixFallingFor", _0x3cfd2a => {
  if (_0x3cfd2a && mp.players.exists(_0x3cfd2a) && _0x3cfd2a !== mp.players.local) {
    _0x3cfd2a.taskParachute(true);
  }
});
mp.events.add("fixParachuteFor", _0x40f693 => {
  if (_0x40f693 && mp.players.exists(_0x40f693) && _0x40f693 !== mp.players.local) {
    giveParachuteObject(_0x40f693);
  }
});