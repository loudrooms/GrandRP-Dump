const GARAGES_DIMENSIONS = [5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012, 5013, 5014];
const GARAGE_CENTER_POSITION = new mp.Vector3(-451.574, -832.538, 9.348);
const FACTIONS_GARAGES_NPC_IDS = {
  1: FACTIONS_IDS.EMS,
  2: FACTIONS_IDS.EMS,
  3: FACTIONS_IDS.LSPD,
  4: FACTIONS_IDS.FIB,
  5: FACTIONS_IDS.SAHP,
  6: FACTIONS_IDS.SANG,
  7: FACTIONS_IDS.LIFEINVADER,
  8: FACTIONS_IDS.GOVERNMENT,
  9: [FACTIONS_IDS.EMS, FACTIONS_IDS.LSPD, FACTIONS_IDS.FIB, FACTIONS_IDS.SAHP, FACTIONS_IDS.SANG, FACTIONS_IDS.LIFEINVADER, FACTIONS_IDS.GOVERNMENT],
  10: FACTIONS_IDS.BALLAS,
  11: FACTIONS_IDS.FAMILIES,
  12: FACTIONS_IDS.VAGOS,
  13: FACTIONS_IDS.BLOODS,
  14: FACTIONS_IDS.MARABUNTA
};
global.FACTIONS_GARAGES_NPC_IDS = FACTIONS_GARAGES_NPC_IDS;
mp.events.add("entityStreamIn", _0x17d990 => {
  try {
    if (_0x17d990?.type !== "vehicle") {
      return;
    }
    if (!GARAGES_DIMENSIONS.includes(_0x17d990.dimension)) {
      return;
    }
    if (mp.game.system.vdist(_0x17d990.position.x, _0x17d990.position.y, _0x17d990.position.z, GARAGE_CENTER_POSITION.x, GARAGE_CENTER_POSITION.y, GARAGE_CENTER_POSITION.z) > 100) {
      return;
    }
    mp.vehicles.forEachInRange(GARAGE_CENTER_POSITION, 100, _0x1c19f5 => {
      if (_0x1c19f5.dimension === localplayer.dimension && _0x1c19f5.handle !== _0x17d990.handle && mp.vehicles.exists(_0x1c19f5)) {
        if (_0x1c19f5.disabledCollisionFor) {
          _0x1c19f5.disabledCollisionFor.push(_0x17d990);
        } else {
          _0x1c19f5.disabledCollisionFor = [_0x17d990];
        }
        if (_0x17d990.disabledCollisionFor) {
          _0x17d990.disabledCollisionFor.push(_0x1c19f5);
        } else {
          _0x17d990.disabledCollisionFor = [_0x1c19f5];
        }
        _0x1c19f5.setNoCollision(_0x17d990.handle, false);
        _0x17d990.setNoCollision(_0x1c19f5.handle, false);
      }
    });
  } catch (_0x305b71) {}
});
mp.events.add("entityStreamOut", _0x3e9f3e => {
  try {
    if (_0x3e9f3e?.type !== "vehicle") {
      return;
    }
    if (!GARAGES_DIMENSIONS.includes(_0x3e9f3e.dimension)) {
      return;
    }
    if (!_0x3e9f3e.disabledCollisionFor) {
      return;
    }
    _0x3e9f3e.disabledCollisionFor.forEach(_0x216279 => {
      if (mp.vehicles.exists(_0x216279)) {
        _0x216279.setNoCollision(_0x3e9f3e.handle, true);
        _0x3e9f3e.setNoCollision(_0x216279.handle, true);
      }
    });
    delete _0x3e9f3e.disabledCollisionFor;
  } catch (_0x271849) {}
});