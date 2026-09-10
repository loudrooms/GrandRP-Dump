const MAX_DISTANCE = 6;
const COOLDOWN = 10000;
const TIMEOUT_BEFORE_SEND_REQUEST = 3000;
const DISALLOWED_ATTACKER_WEAPONS = [-1951375401, 2343591895, 126349499];
const ALLOWED_VICTIM_WEAPONS = [2725352035, -1569615261];
let aimingData = {
  status: false,
  target: undefined,
  cooldownTo: 0,
  requestTimeout: null
};
function setAimingData(_0x1d1228, _0x5b4415) {
  if (aimingData.status !== _0x1d1228 || aimingData.target !== _0x5b4415) {
    if (_0x1d1228 && _0x5b4415) {
      if (!isInCooldown() && !aimingData.requestTimeout) {
        aimingData.requestTimeout = setTimeout(() => {
          aimingData.requestTimeout = null;
          mp.events.callRemote("Server_RequestHandsUp", _0x5b4415);
          aimingData.cooldownTo = Date.now() + 10000;
        }, 3000);
      }
    }
    if (!_0x1d1228 && aimingData.requestTimeout) {
      clearTimeout(aimingData.requestTimeout);
      aimingData.requestTimeout = null;
    }
    aimingData.status = _0x1d1228;
    aimingData.target = _0x5b4415;
  }
}
function isInCooldown() {
  return aimingData.cooldownTo > Date.now();
}
function isCanAiming() {
  return !localplayer.vehicle && !in_greenzone && (localplayer.getVariable("Family") || localplayer.getVariable("Member")) && !GlobalCheck();
}
setInterval(() => {
  if (!mp.game.player.isFreeAiming()) {
    return aimingData.status && setAimingData(false);
  }
  if (DISALLOWED_ATTACKER_WEAPONS.includes(currentWeapon())) {
    return aimingData.status && setAimingData(false);
  }
  if (isInCooldown() || !isCanAiming()) {
    return aimingData.status && setAimingData(false);
  }
  const _0x4d6ec8 = mp.game.player.getEntityIsFreeAimingAt();
  if (!_0x4d6ec8 || typeof _0x4d6ec8 != "object" || _0x4d6ec8.type !== "player" || _0x4d6ec8.getVariable("Dead") || !_0x4d6ec8.getAlpha() || _0x4d6ec8.vehicle || _0x4d6ec8.isPlayingAnim("random@arrests@busted", "idle_c", 3) || !ALLOWED_VICTIM_WEAPONS.includes(mp.game.invoke("0x0A6DB4965674D243", _0x4d6ec8.handle)) || mp.game.system.vdist(localplayer.position.x, localplayer.position.y, localplayer.position.z, _0x4d6ec8.position.x, _0x4d6ec8.position.y, _0x4d6ec8.position.z) > 6) {
    return aimingData.status && setAimingData(false);
  }
  setAimingData(true, _0x4d6ec8);
}, 500);