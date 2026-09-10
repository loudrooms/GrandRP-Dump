class damage {
  constructor() {
    this.death_damage_take = new Date().getTime();
    this.bones = [0, 10706, 11816, 14201, 18905, 23553, 24816, 24817, 24818, 28252, 31086, 36864, 39317, 40269, 45509, 51826, 52301, 57005, 57597, 58271, 61163, 63931, 64729, 22711, 2992, 6442, 23639];
    this.bones_offset = [20, 20, 20, 2, 5, 10, 20, 20, 20, 20, 5, 20, 20, 5, 5, 10, 2, 5, 20, 10, 20, 20, 20, 20, 20, 20, 20];
    this.bones_vehicles = [31086];
    setInterval(() => {
      mp.game.player.setWeaponDefenseModifier(-9999999);
      mp.game.ped.setAiWeaponDamageModifier(0);
      if (new_version == 1) {
        mp.game.player.setMeleeWeaponDamageModifier(0.2);
        mp.game.player.setWeaponDamageModifier(0.2);
      }
      mp.game.player.setMeleeWeaponDefenseModifier(0.2);
    }, 1000);
    mp.events.add("playerWeaponShot", (_0x2ab187, _0x29a9ec) => {
      if (curr_lang != "ru") {
        return;
      }
      const _0xc7f80d = mp.game.invoke("0x0A6DB4965674D243", mp.players.local.handle);
      if (!_0xc7f80d) {
        return;
      }
      if (_0x29a9ec?.vehicle) {
        return;
      }
      let _0x1b3ef9 = mp.game.player.getEntityIsFreeAimingAt();
      let _0x451b2b = -1;
      if (_0x1b3ef9 !== undefined && _0x1b3ef9.type === "player") {
        let _0x2e9e1d = 9999;
        this.bones.forEach((_0x587e28, _0x1ca361) => {
          let _0x2ec246 = _0x1b3ef9.getBoneCoords(_0x587e28, 0, 0, 0);
          let _0x2d0135 = this.getPointToBoneOffset(_0x2ab187.x, _0x2ab187.y, _0x2ab187.z, _0x2ec246.x, _0x2ec246.y, _0x2ec246.z);
          if (_0x2d0135 < _0x2e9e1d) {
            _0x451b2b = _0x1ca361;
            _0x2e9e1d = _0x2d0135;
          }
        });
        if (_0x451b2b != -1) {
          let _0x45c7df = mp.players.local.getBoneCoords(12844, 0, 0, 0);
          const _0x408f83 = parseInt(this.bones[_0x451b2b]);
          const _0x49e375 = _0x1b3ef9.getBoneCoords(_0x408f83, 0, 0, 0);
          let _0x47a5f1 = mp.raycasting.testPointToPoint(_0x45c7df, _0x49e375, undefined, 7);
          _0x45c7df = mp.players.local.getBoneCoords(26610, 0, 0, 0);
          let _0x575289 = mp.raycasting.testPointToPoint(_0x45c7df, _0x49e375, undefined, 7);
          if (_0x47a5f1 && typeof _0x47a5f1.entity == "number" && _0x47a5f1.entity !== 0 && mp.game.entity.doesExist(_0x47a5f1.entity)) {
            mp.game.shapetest.releaseScriptGuidFromEntity(_0x47a5f1.entity);
          }
          if (_0x575289 && typeof _0x575289.entity == "number" && _0x575289.entity !== 0 && mp.game.entity.doesExist(_0x575289.entity)) {
            mp.game.shapetest.releaseScriptGuidFromEntity(_0x575289.entity);
          }
        }
        mp.events.callRemote("server_weapon_damage", _0x1b3ef9, _0xc7f80d, _0x451b2b, true);
      }
    });
    this.boneIndexes = {
      0: "0",
      111: "1356",
      5: "2108",
      96: "2992",
      28: "3515",
      44: "4089",
      45: "4090",
      10: "4115",
      56: "4137",
      57: "4138",
      59: "4153",
      60: "4154",
      49: "4169",
      50: "4170",
      53: "4185",
      54: "4186",
      66: "5232",
      101: "5749",
      91: "6286",
      27: "6442",
      68: "10706",
      112: "11174",
      80: "11347",
      75: "11363",
      1: "11816",
      99: "12844",
      4: "14201",
      23: "16335",
      29: "16562",
      119: "17188",
      117: "17719",
      42: "18905",
      110: "19336",
      114: "20178",
      116: "20279",
      120: "20623",
      17: "20781",
      25: "20899",
      106: "21550",
      67: "22711",
      35: "23553",
      26: "23639",
      47: "24504",
      13: "24589",
      19: "24806",
      36: "24816",
      37: "24817",
      38: "24818",
      105: "25260",
      43: "26610",
      48: "26611",
      52: "26612",
      55: "26613",
      58: "26614",
      93: "26875",
      76: "27064",
      109: "27474",
      70: "28252",
      90: "28422",
      107: "29868",
      24: "30482",
      98: "31086",
      20: "34414",
      33: "34545",
      126: "34911",
      18: "35502",
      124: "35731",
      51: "35923",
      46: "35939",
      62: "36029",
      15: "36864",
      95: "37119",
      113: "37193",
      97: "39317",
      32: "39785",
      69: "40269",
      63: "41540",
      108: "43536",
      94: "43810",
      22: "45075",
      40: "45509",
      104: "45750",
      30: "49473",
      122: "49979",
      12: "50201",
      100: "50788",
      64: "51082",
      14: "51826",
      16: "52301",
      31: "52667",
      127: "56604",
      71: "57005",
      34: "57597",
      7: "57717",
      2: "58271",
      103: "58331",
      72: "58866",
      11: "46078",
      118: "46240",
      121: "47419",
      123: "47495",
      81: "58868",
      84: "58869",
      87: "58870",
      61: "60309",
      9: "60734",
      65: "61007",
      41: "61163",
      92: "61259",
      115: "61839",
      21: "62948",
      3: "63931",
      73: "64016",
      74: "64017",
      85: "64064",
      86: "64065",
      88: "64080",
      89: "64081",
      78: "64096",
      79: "64097",
      82: "64112",
      83: "64113",
      8: "64157",
      125: "64654",
      39: "64729",
      102: "65068",
      6: "65245"
    };
    mp._events.add("outgoingDamage", (_0x36f3c5, _0x203d9c, _0x803a89, _0x4ec72f, _0x54ea57, _0x496ad7) => {
      if (new_version != 1) {
        return true;
      }
      if (global.onBirthdayShootingRange) {
        return false;
      }
      outgoingDamage = new Date().getTime();
      const _0x381fb1 = mp.game.invoke("0x0A6DB4965674D243", mp.players.local.handle);
      if (_0x381fb1 && _0x381fb1 != 101631238 && _0x381fb1 != 911657153 && melee_weapons.indexOf(_0x381fb1) == -1 && _0x203d9c && _0x203d9c.type == "player") {
        if (!bHalloween2025 || mp.players.local.dimension != 533 || _0x203d9c.dimension != 533 || mp.players.local.model != _0x203d9c.model) {
          mp.events.callRemote("server_weapon_damage", _0x203d9c, _0x381fb1, _0x54ea57);
        }
        return true;
      } else {
        return undefined;
      }
    });
    mp.events.add("meleeActionDamage", (_0x34eb60, _0x197d64, _0x5693fb, _0x21f5ee, _0x16b993) => {
      mp.events.callRemote("Server_MeleeActionDamage", _0x34eb60, _0x21f5ee, _0x5693fb, _0x16b993);
    });
    mp.events.add("Client_SyncPlayerHealth", _0x469d4f => {
      _0x469d4f = parseFloat(_0x469d4f);
      if (!isNaN(_0x469d4f)) {
        mp.players.local.setHealth(100 + _0x469d4f);
      }
    });
    mp.events.add("Client_DamageInCar", (_0x43751e, _0x1224c7 = false) => {
      _0x43751e = parseInt(_0x43751e);
      if (!(new Date().getTime() - this.death_damage_take < 1500)) {
        if (_0x43751e > 0) {
          if (!_0x1224c7 && mp.players.local.getHealth() >= 0) {
            if (100 + mp.players.local.getHealth() - _0x43751e <= 100) {
              this.death_damage_take = new Date().getTime();
              mp.events.callRemote("Server_DeathDamageHasBeenTaken", 100 + mp.players.local.getHealth() - _0x43751e);
            }
            mp.players.local.setHealth(100 + mp.players.local.getHealth() - _0x43751e);
          } else if (_0x1224c7 && mp.players.local.getArmour() >= 0) {
            if (mp.players.local.getArmour() == 0) {
              if (100 + mp.players.local.getHealth() - _0x43751e <= 100) {
                this.death_damage_take = new Date().getTime();
                mp.events.callRemote("Server_DeathDamageHasBeenTaken", 100 + mp.players.local.getHealth() - _0x43751e);
              }
              mp.players.local.setHealth(100 + mp.players.local.getHealth() - _0x43751e);
            }
            mp.players.local.setArmour(mp.players.local.getArmour() - _0x43751e);
          }
        }
      }
    });
  }
  getPointToBoneOffset(_0x18465a, _0x4784d3, _0x325342, _0x57ec80, _0x2c5c15, _0x23b864) {
    return (_0x18465a - _0x57ec80 < 0 ? -(_0x18465a - _0x57ec80) : _0x18465a - _0x57ec80) + (_0x4784d3 - _0x2c5c15 < 0 ? -(_0x4784d3 - _0x2c5c15) : _0x4784d3 - _0x2c5c15) + (_0x325342 - _0x23b864 < 0 ? -(_0x325342 - _0x23b864) : _0x325342 - _0x23b864);
  }
}
new damage();