function InitAttachmentsOnJoin() {
  mp.players.forEach(_0x5a3c29 => {
    let _0x30e66e = _0x5a3c29.getVariable("attachmentsData");
    if (_0x30e66e && _0x30e66e.length > 0) {
      let _0x22de01 = _0x30e66e.split("|").map(_0x2c2b5f => parseInt(_0x2c2b5f, 36));
      _0x5a3c29.__attachments = _0x22de01;
      _0x5a3c29.__attachmentObjects = {};
    }
  });
}
mp.attachmentMngr = {
  attachments: {},
  addFor: function (_0x500680, _0x5d17cd) {
    if (this.attachments.hasOwnProperty(_0x5d17cd)) {
      if (!_0x500680) {
        return;
      }
      _0x500680.__attachmentObjects ||= {};
      if (!_0x500680.__attachmentObjects.hasOwnProperty(_0x5d17cd)) {
        let _0x16e1df = this.attachments[_0x5d17cd];
        let _0x39309a = mp.objects.new(_0x16e1df.model, _0x500680.position, {
          dimension: _0x500680.dimension
        });
        _0x39309a.__attMgrData = {
          id: _0x5d17cd,
          target: _0x500680,
          targetEntity: _0x500680.handle,
          bone: typeof _0x16e1df.boneName == "string" ? _0x500680.getBoneIndexByName(_0x16e1df.boneName) : _0x500680.getBoneIndex(_0x16e1df.boneName),
          offset: _0x16e1df.offset,
          rotation: _0x16e1df.rotation,
          collisiion: _0x16e1df.collisiion
        };
        _0x39309a.notifyStreaming = true;
        _0x500680.__attachmentObjects[_0x5d17cd] = _0x39309a;
      }
    } else {
      mp.game.graphics.notify("Static Attachments Error: ~r~Unknown Attachment Used: ~w~0x" + _0x5d17cd.toString(16));
    }
  },
  removeFor: function (_0x4402fc, _0x4c797f) {
    if (_0x4402fc.__attachmentObjects.hasOwnProperty(_0x4c797f)) {
      let _0x2bd2da = _0x4402fc.__attachmentObjects[_0x4c797f];
      delete _0x4402fc.__attachmentObjects[_0x4c797f];
      if (mp.objects.exists(_0x2bd2da)) {
        _0x2bd2da.destroy();
      }
    }
  },
  initFor: function (_0x329282) {
    for (let _0xca98a9 of _0x329282.__attachments) {
      mp.attachmentMngr.addFor(_0x329282, _0xca98a9);
    }
  },
  shutdownFor: function (_0x5f4e8d) {
    for (let _0x35dab9 in _0x5f4e8d.__attachmentObjects) {
      mp.attachmentMngr.removeFor(_0x5f4e8d, _0x35dab9);
    }
  },
  register: function (_0x54d068, _0x580dd6, _0x5a89e5, _0x426c98, _0x1bcf63, _0x592189 = true) {
    if (typeof _0x54d068 == "string") {
      _0x54d068 = mp.game.joaat(_0x54d068);
    }
    if (typeof _0x580dd6 == "string") {
      _0x580dd6 = mp.game.joaat(_0x580dd6);
    }
    if (this.attachments.hasOwnProperty(_0x54d068)) {
      mp.game.graphics.notify("Static Attachments Error: ~r~Duplicate Entry");
    } else if (mp.game.streaming.isModelInCdimage(_0x580dd6)) {
      this.attachments[_0x54d068] = {
        id: _0x54d068,
        model: _0x580dd6,
        offset: _0x426c98,
        rotation: _0x1bcf63,
        boneName: _0x5a89e5,
        collisiion: _0x592189
      };
    } else {
      mp.game.graphics.notify("Static Attachments Error: ~r~Invalid Model (0x" + _0x580dd6.toString(16) + ")");
    }
  },
  unregister: function (_0x2a2826) {
    if (typeof _0x2a2826 == "string") {
      _0x2a2826 = mp.game.joaat(_0x2a2826);
    }
    if (this.attachments.hasOwnProperty(_0x2a2826)) {
      this.attachments[_0x2a2826] = undefined;
    }
  },
  addLocal: function (_0x27936b) {
    if (typeof _0x27936b == "string") {
      _0x27936b = mp.game.joaat(_0x27936b);
    }
    let _0x1aab05 = mp.players.local;
    if (!_0x1aab05.__attachments || _0x1aab05.__attachments.indexOf(_0x27936b) === -1) {
      mp.events.callRemote("staticAttachments.Add", _0x27936b.toString(36));
    }
  },
  removeLocal: function (_0x65f0f1) {
    if (typeof _0x65f0f1 == "string") {
      _0x65f0f1 = mp.game.joaat(_0x65f0f1);
    }
    let _0x14bb74 = mp.players.local;
    if (_0x14bb74.__attachments && _0x14bb74.__attachments.indexOf(_0x65f0f1) !== -1) {
      mp.events.callRemote("staticAttachments.Remove", _0x65f0f1.toString(36));
    }
  },
  removeLocalAll: function () {
    let _0x109e42 = mp.players.local;
    _0x109e42.__attachmentObjects ||= {};
    if (_0x109e42.__attachments) {
      _0x109e42.__attachments.map(_0x2b6995 => {
        mp.events.callRemote("staticAttachments.Remove", _0x2b6995.toString(36));
      });
    }
  },
  getAttachments: function () {
    return Object.assign({}, this.attachments);
  }
};
mp.events.add("entityStreamIn", _0x24051b => {
  if (_0x24051b.__attMgrData) {
    const {
      targetEntity: _0x437128,
      bone: _0x5976d7,
      offset: _0x4960d8,
      rotation: _0x37eb79,
      collisiion: _0x2e3ef9
    } = _0x24051b.__attMgrData;
    if (!_0x2e3ef9) {
      _0x24051b.setCollision(false, false);
    }
    _0x24051b.attachTo(_0x437128, _0x5976d7, _0x4960d8.x, _0x4960d8.y, _0x4960d8.z, _0x37eb79.x, _0x37eb79.y, _0x37eb79.z, false, false, false, false, 2, true);
  }
  if (_0x24051b.__attachments) {
    mp.attachmentMngr.initFor(_0x24051b);
  }
});
mp.events.add("entityStreamOut", _0x386ac8 => {
  if (_0x386ac8) {
    if (_0x386ac8.__attMgrData && _0x386ac8.__attMgrData.target && _0x386ac8.__attMgrData.target === mp.players.local && _0x386ac8.dimension !== mp.players.local.dimension) {
      mp.attachmentMngr.removeFor(_0x386ac8.__attMgrData.target, _0x386ac8.__attMgrData.id);
      mp.attachmentMngr.addFor(_0x386ac8.__attMgrData.target, _0x386ac8.__attMgrData.id);
    }
    if (_0x386ac8.__attachmentObjects) {
      mp.attachmentMngr.shutdownFor(_0x386ac8);
    }
  }
});
mp.events.addDataHandler("attachmentsData", (_0x3671ed, _0x14f409) => {
  let _0x4ed86d = _0x14f409.length > 0 ? _0x14f409.split("|").map(_0x20daae => parseInt(_0x20daae, 36)) : [];
  if (_0x3671ed.handle !== 0) {
    let _0x3d8124 = _0x3671ed.__attachments;
    if (!_0x3d8124) {
      _0x3d8124 = [];
      _0x3671ed.__attachmentObjects = {};
    }
    for (let _0x382ef4 of _0x3d8124) {
      if (_0x4ed86d.indexOf(_0x382ef4) === -1) {
        mp.attachmentMngr.removeFor(_0x3671ed, _0x382ef4);
      }
    }
    for (let _0x3921ec of _0x4ed86d) {
      if (_0x3d8124.indexOf(_0x3921ec) === -1) {
        mp.attachmentMngr.addFor(_0x3671ed, _0x3921ec);
      }
    }
  }
  _0x3671ed.__attachments = _0x4ed86d;
});
InitAttachmentsOnJoin();
mp.events.add("playerReady", () => {
  InitAttachmentsOnJoin();
});