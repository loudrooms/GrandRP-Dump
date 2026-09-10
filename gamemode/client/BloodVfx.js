const VFX_MODE_DEFAULT = 0;
const VFX_MODE_ALIEN = 1;
const VFX_MODE_CLOWN = 2;
async function requestNamedPtfxAssetAsync(_0x96ecc3) {
  for (mp.game.streaming.requestNamedPtfxAsset(_0x96ecc3); !mp.game.streaming.hasNamedPtfxAssetLoaded(_0x96ecc3);) {
    await mp.game.waitAsync();
  }
}
Object.defineProperty(mp.game.graphics, "bloodVfxMode", {
  get() {
    return this._vfxMode || 0;
  },
  async set(_0x28a8c4) {
    switch (_0x28a8c4) {
      case 1:
        requestNamedPtfxAssetAsync("scr_rcbarry1");
        await requestNamedPtfxAssetAsync("scr_rcbarry1");
        mp.game.graphics.enableClownBloodVfx(false);
        mp.game.graphics.enableAlienBloodVfx(true);
        break;
      case 2:
        await requestNamedPtfxAssetAsync("scr_rcbarry2");
        mp.game.graphics.enableAlienBloodVfx(false);
        mp.game.graphics.enableClownBloodVfx(true);
        break;
      default:
        _0x28a8c4 = 0;
        mp.game.graphics.enableAlienBloodVfx(false);
        mp.game.graphics.enableClownBloodVfx(false);
    }
    this._vfxMode = _0x28a8c4;
  }
});