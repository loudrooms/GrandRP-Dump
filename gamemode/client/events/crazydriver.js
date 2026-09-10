let crazyDriverParticle;
const FINAL_POSITIONS = [{
  position: new mp.Vector3(748.13, 2523.452, 73.148)
}, {
  position: new mp.Vector3(387.806, 2963.286, 41.009)
}, {
  position: new mp.Vector3(1217.524, 1821.8, 79.078)
}];
function removeCrazyDriverParticle() {
  if (crazyDriverParticle) {
    mp.game.graphics.stopParticleFxLooped(crazyDriverParticle, false);
    crazyDriverParticle = undefined;
  }
}
mp.events.add("entityStreamIn", function (_0x17c696) {
  if (_0x17c696 !== null && _0x17c696.getVariable("crazyDriver")) {
    removeCrazyDriverParticle();
    if (!mp.game.streaming.hasNamedPtfxAssetLoaded("core")) {
      for (mp.game.streaming.requestNamedPtfxAsset("core"); !mp.game.streaming.hasNamedPtfxAssetLoaded("core");) {
        mp.game.wait(0);
      }
    }
    mp.game.graphics.setPtfxAssetNextCall("core");
    crazyDriverParticle = mp.game.graphics.startParticleFxLoopedOnEntity("ent_amb_torch_fire", _0x17c696.handle, 0, 0, 0, 0, 0, 0, 1, true, true, true);
  }
});
mp.events.add("entityStreamOut", _0x4b2771 => {
  if (_0x4b2771 && _0x4b2771.getVariable("crazyDriver")) {
    removeCrazyDriverParticle();
  }
});
mp.events.addDataHandler("crazyDriver", function (_0x20b9d9, _0xfec13a, _0x12c9d7) {
  if (_0x20b9d9 && _0x20b9d9.type === "player") {
    if (_0x20b9d9.handle == 0) {
      return;
    }
    removeCrazyDriverParticle();
    if (_0xfec13a == 1) {
      if (!mp.game.streaming.hasNamedPtfxAssetLoaded("core")) {
        for (mp.game.streaming.requestNamedPtfxAsset("core"); !mp.game.streaming.hasNamedPtfxAssetLoaded("core");) {
          mp.game.wait(0);
        }
      }
      mp.game.graphics.setPtfxAssetNextCall("core");
      crazyDriverParticle = mp.game.graphics.startParticleFxLoopedOnEntity("ent_amb_torch_fire", _0x20b9d9.handle, 0, 0, 0, 0, 0, 0, 1, true, true, true);
    }
  }
});
mp.events.add("Client_SetGPSToFinalDestination", _0x2bf8b1 => {
  if (!!_0x2bf8b1 && !(_0x2bf8b1 > FINAL_POSITIONS.length)) {
    SetGPSLocation(FINAL_POSITIONS[_0x2bf8b1 - 1].position.x, FINAL_POSITIONS[_0x2bf8b1 - 1].position.y, FINAL_POSITIONS[_0x2bf8b1 - 1].position.z);
  }
});
mp.events.add("Client_SetRouteToCrazyDriver", (_0x3ffadb, _0x1ba072, _0x3097eb) => {
  SetGPSLocation(_0x3ffadb, _0x1ba072, _0x3097eb, true);
});