class Browsers3d {
  constructor() {
    this.browserPool = [];
    this.maxPoolSize = 20;
    this.poolCleanupInterval = 60000;
    this.browserTTL = 300000;
    this.startCleanup();
  }
  startCleanup() {
    setInterval(() => {
      this.cleanupBrowserPool();
    }, this.poolCleanupInterval);
  }
  async getBrowser(_0x17603a, _0x57262c, _0x3634b5) {
    try {
      if (global.test_mode) {
        mp.console.logInfo("[Browsers3d] Requesting browser for URL: " + _0x17603a + " with custom dimensions: " + _0x57262c + "x" + _0x3634b5);
      }
      const _0x1b2a98 = this.browserPool.find(_0x509874 => _0x509874.url === _0x17603a && !_0x509874.inUse);
      if (_0x1b2a98) {
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Found existing browser for URL: " + _0x17603a);
        }
        _0x1b2a98.browser.url = _0x17603a;
        _0x1b2a98.inUse = true;
        _0x1b2a98.lastUsed = Date.now();
        return _0x1b2a98.browser;
      }
      const _0x54aae5 = this.browserPool.find(_0x498837 => !_0x498837.inUse && !_0x498837.isLoading);
      if (_0x54aae5) {
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Reusing free browser for URL: " + _0x17603a);
        }
        return this.loadTextureToBrowser(_0x54aae5, _0x17603a);
      } else {
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Creating new browser for URL: " + _0x17603a);
        }
        return await this.createNewBrowser(_0x17603a, _0x57262c, _0x3634b5);
      }
    } catch (_0x26cee4) {
      mp.gui.chat.push("[Browsers3d] Error getting browser: " + _0x26cee4);
      return null;
    }
  }
  returnBrowser(_0x3b8e2f) {
    if (!_0x3b8e2f) {
      return;
    }
    const _0x2b26b9 = this.browserPool.find(_0x555a18 => _0x555a18.browser === _0x3b8e2f);
    if (_0x2b26b9) {
      _0x2b26b9.inUse = false;
      _0x2b26b9.lastUsed = Date.now();
      _0x3b8e2f.url = "about:blank";
    }
  }
  loadTextureToBrowser(_0x502cbb, _0x2f6bb0) {
    try {
      _0x502cbb.isLoading = true;
      _0x502cbb.inUse = true;
      _0x502cbb.lastUsed = Date.now();
      if (_0x502cbb.browser && mp.browsers.exists(_0x502cbb.browser)) {
        _0x502cbb.browser.url = _0x2f6bb0;
        const _0x413f0f = _0x502cbb.browser.headlessTextureDict;
        const _0x739b23 = _0x502cbb.browser.headlessTextureName;
        if (_0x413f0f && _0x739b23) {
          _0x502cbb.url = _0x2f6bb0;
          _0x502cbb.isLoading = false;
          return _0x502cbb.browser;
        }
      }
    } catch (_0x4109ac) {
      mp.gui.chat.push("[Browsers3d] Error loading texture to browser: " + _0x4109ac);
    }
    _0x502cbb.isLoading = false;
    return null;
  }
  async createNewBrowser(_0x2340c2, _0x33264c, _0x10fa37) {
    try {
      if (global.test_mode) {
        mp.console.logInfo("[Browsers3d] Creating headless browser for URL: " + _0x2340c2);
      }
      if (!mp.browsers) {
        mp.console.logInfo("[Browsers3d] mp.browsers is not available");
        return null;
      }
      const {
        width: _0x178da7,
        height: _0x419c93
      } = this.getBrowserDimensions(_0x2340c2, _0x33264c, _0x10fa37);
      const _0x489906 = mp.browsers.newHeadless(_0x2340c2, _0x178da7, _0x419c93, true);
      if (global.test_mode) {
        mp.console.logInfo("[Browsers3d] Browser creation result: " + !!_0x489906 + " with dimensions " + _0x178da7 + "x" + _0x419c93);
      }
      if (_0x489906) {
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Browser created successfully");
        }
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Browser properties:");
        }
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] - exists: " + mp.browsers.exists(_0x489906));
        }
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] - url: " + _0x489906.url);
        }
        const _0x516432 = {
          browser: _0x489906,
          url: _0x2340c2,
          lastUsed: Date.now(),
          inUse: true,
          isLoading: true
        };
        this.browserPool.push(_0x516432);
        await new Promise(_0x245f85 => setTimeout(_0x245f85, 300));
        const _0x16fc9f = _0x489906.headlessTextureDict;
        const _0x4c0287 = _0x489906.headlessTextureName;
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Texture info: dict=" + _0x16fc9f + ", name=" + _0x4c0287);
        }
        if (_0x16fc9f && _0x4c0287) {
          _0x516432.isLoading = false;
          if (global.test_mode) {
            mp.console.logInfo("[Browsers3d] Browser ready for use");
          }
          return _0x489906;
        }
        if (global.test_mode) {
          mp.console.logInfo("[Browsers3d] Browser created but no texture info available");
        }
      } else if (global.test_mode) {
        mp.console.logInfo("[Browsers3d] Failed to create browser");
      }
    } catch (_0x3077f4) {
      mp.gui.chat.push("[Browsers3d] Error creating new browser: " + _0x3077f4);
    }
    return null;
  }
  cleanupBrowserPool() {
    if (this.browserPool.length === 0) {
      return;
    }
    const _0x1bd96a = Date.now();
    this.browserPool = this.browserPool.filter(_0x2eabb4 => {
      if (!_0x2eabb4.inUse && !_0x2eabb4.isLoading && _0x1bd96a - _0x2eabb4.lastUsed > this.browserTTL) {
        if (_0x2eabb4.browser && mp.browsers.exists(_0x2eabb4.browser)) {
          try {
            _0x2eabb4.browser.destroy();
          } catch (_0x2a5a83) {
            mp.console.logInfo("[Browsers3d] Error destroying browser: " + _0x2a5a83);
          }
        }
        return false;
      }
      return true;
    });
  }
  getTextureInfo(_0x17a9e0) {
    const _0x594be3 = this.browserPool.find(_0x98c8f1 => _0x98c8f1.url === _0x17a9e0 && !_0x98c8f1.isLoading);
    if (_0x594be3 && _0x594be3.browser) {
      const _0x557881 = _0x594be3.browser.headlessTextureDict;
      const _0x36ded7 = _0x594be3.browser.headlessTextureName;
      if (_0x557881 && _0x36ded7) {
        return {
          dict: _0x557881,
          name: _0x36ded7
        };
      }
    }
    return null;
  }
  getPoolStats() {
    const _0x3de85c = new Set(this.browserPool.map(_0x16dd15 => _0x16dd15.url)).size;
    return {
      totalBrowsers: this.browserPool.length,
      inUse: this.browserPool.filter(_0x2f4bd1 => _0x2f4bd1.inUse).length,
      isLoading: this.browserPool.filter(_0x19528d => _0x19528d.isLoading).length,
      uniqueUrls: _0x3de85c
    };
  }
  scaleBrowserDimensions(_0x516597, _0x277913) {
    const _0x5cb4b5 = 2048;
    const _0x28c2d7 = 4194304;
    let _0x128b3e = _0x516597;
    let _0x14616e = _0x277913;
    if (_0x128b3e > _0x5cb4b5 || _0x14616e > _0x5cb4b5) {
      const _0x471487 = Math.min(_0x5cb4b5 / _0x128b3e, _0x5cb4b5 / _0x14616e);
      _0x128b3e = Math.floor(_0x128b3e * _0x471487);
      _0x14616e = Math.floor(_0x14616e * _0x471487);
    }
    const _0xd63d38 = _0x128b3e * _0x14616e;
    if (_0xd63d38 > _0x28c2d7) {
      const _0x14ee7e = Math.sqrt(_0x28c2d7 / _0xd63d38);
      _0x128b3e = Math.floor(_0x128b3e * _0x14ee7e);
      _0x14616e = Math.floor(_0x14616e * _0x14ee7e);
    }
    _0x128b3e = Math.max(64, _0x128b3e);
    _0x14616e = Math.max(64, _0x14616e);
    if (global.test_mode) {
      mp.console.logInfo("[Browsers3d] Scaled dimensions from " + _0x516597 + "x" + _0x277913 + " to " + _0x128b3e + "x" + _0x14616e);
    }
    return {
      width: _0x128b3e,
      height: _0x14616e
    };
  }
  getBrowserDimensions(_0x36c266, _0x2cbf16, _0x43098a) {
    if (_0x2cbf16 && _0x43098a) {
      return this.scaleBrowserDimensions(_0x2cbf16, _0x43098a);
    }
    if (_0x36c266.includes("youtube.com") || _0x36c266.includes("youtu.be")) {
      return this.scaleBrowserDimensions(1920, 1080);
    }
    const _0x34ddb5 = _0x36c266.match(/(\d+)x(\d+)/);
    if (_0x34ddb5) {
      return this.scaleBrowserDimensions(parseInt(_0x34ddb5[1]), parseInt(_0x34ddb5[2]));
    } else if (_0x36c266.includes("1920") && _0x36c266.includes("1080")) {
      return this.scaleBrowserDimensions(1920, 1080);
    } else if (_0x36c266.includes("1280") && _0x36c266.includes("720")) {
      return this.scaleBrowserDimensions(1280, 720);
    } else if (_0x36c266.includes("1280")) {
      if (_0x36c266.includes("800")) {
        return this.scaleBrowserDimensions(1280, 800);
      } else if (_0x36c266.includes("960")) {
        return this.scaleBrowserDimensions(1280, 960);
      } else {
        return this.scaleBrowserDimensions(960, 1280);
      }
    } else {
      return {
        width: 1024,
        height: 1024
      };
    }
  }
  destroy() {
    this.browserPool.forEach(_0x21ae08 => {
      if (_0x21ae08.browser && mp.browsers.exists(_0x21ae08.browser)) {
        try {
          _0x21ae08.browser.destroy();
        } catch (_0x1ea77e) {
          mp.console.logInfo("[Browsers3d] Error destroying browser: " + _0x1ea77e);
        }
      }
    });
    this.browserPool = [];
  }
}
const browsers3d = new Browsers3d();
global.browsers3d = browsers3d;