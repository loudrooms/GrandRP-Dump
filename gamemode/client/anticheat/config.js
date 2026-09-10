"use strict";
const AC_CONFIG = {
  enabled: true,
  report: true,
  reportCooldownMs: 12000,
  modules: {
    speed: true,
    invisible: true,
    weaponfx: true,
    superjump: true,
    hulk: true
  },
  speed: {
    maxMoveRate: 1
  },
  invisible: {
    hitsToAct: 2,
    reportCooldownMs: 15000,
    selfAlphaLimit: 200,
    enforceMs: 300000
  },
  superjump: {
    maxJumpVz: 12,
    hitsToBan: 6,
    legalMs: 120000
  }
};
module.exports = AC_CONFIG;