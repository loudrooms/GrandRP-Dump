(function () {
  "use strict";

  const e = ["AddEntityToOverlayBatch", "AddTextComponentSubstringCash", "AddTextComponentSubstringLocalized", "ClearVehicleCrashTask", "ClearWeatherTypeOvertimePersist", "ConnectToServer", "ContinueTransition", "CopyAudioCategoryVariables", "CreateEntityOverlayBatch", "CreateGlowStyle", "CreateSynchronizedSceneAtMapObject", "CreateVehicleDriveForceCurve", "CustomMinimapClearBlips", "CustomMinimapCreateBlip", "CustomMinimapSetActive", "CustomMinimapSetBlipObject", "DeleteVehicleDriveForceCurve", "DestroyEntityOverlayBatch", "DisableCinematicVehicleIdleModeThisUpdate", "DisableGameplayCamAltitudeFovScalingThisUpdate", "DisableGlow", "EnableGlow", "ForceStreamingUpdate", "GetAllModelHashes", "GetAllWeaponNames", "GetAudioCategoryVariable", "GetBlipFadeDirection", "GetCamDofParam", "GetCloudsAlpha", "GetCurrentAreaNameHash", "GetCurrentAreaNameLabel", "GetCurrentAreaNameString", "GetCurrentStreetNameHash", "GetCurrentStreetNameString", "GetEntityCurrentAnimDict", "GetGravityLevel", "GetHydraulicSuspensionRaiseFactor", "GetLightsState", "GetMenuItem", "GetMinimapComponentValues", "GetObjectAllByHash", "GetObjectAllInRange", "GetPlayerPing", "GetVehicleBodyHealth2", "GetVehicleBombAmmo", "GetVehicleCountermeasureAmmo", "GetVehicleDriveForceCurveValue", "GetVehicleWheelGroundSurfaceMaterial", "HasHeadDisplayLoaded", "HasMpDataLoaded", "HasMpDataUnloaded", "HasParticleFxAssetLoaded", "HudGetWeaponWheelTopSlot", "IsAirDefenceSphereInArea", "IsEditorAvailable", "IsMobilePhoneToPedEar", "IsStreamedScriptRunning", "IsTargetPedInPerceptionArea", "IsWindowFocused", "Leaderboards2ReadByPlaform", "ModifyGlowStyle", "NetworkCanCommunicateWithGamer2", "NetworkSetBalanceAddMachines", "OverrideVehicleOverheatHealth", "PlayPoliceCrimeReport", "PlaySoundHash", "ReleaseGlowStyle", "ReleaseRuntimeAsset", "RemoteCheaterPlayerDetected", "RemoveEntityFromOverlayBatch", "RemoveExtraCalmingQuad", "RemoveParticleFxAsset", "RequestParticleFxAsset", "RequestRuntimeAssetFromUrl", "RequestVehicleAssetAsync", "ReserveEntityExplodesOnHighExplosionCombo", "ResetGameplayCamFullAttachParentTransformTimer", "ResetLightsState", "ResetMinimapComponentPosition", "RestoreAudioCategoryVariables", "SetAudioCategoryVariable", "SetBlipAsMinimalOnEdge", "SetBlipCategoryGrouped", "SetBlipCategoryPriority", "SetBoatSinks", "SetCalmedWaveHeightScaler", "SetCamDofParam", "SetConnectableServers", "SetEntityOverlayPassEnabled", "SetFirstPersonAimCamPitchRange", "SetGameplayCamAltitudeFovScalingState", "SetGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate", "SetGameplayCamIgnoreEntityCollisionThisUpdate", "SetGameplayCamMaxMotionBlurStrengthThisUpdate", "SetGameplayCamMotionBlurScalingThisUpdate", "SetHeadDisplayFlag", "SetHydraulicVehicleState", "SetLightsState", "SetMenuItemColor", "SetMenuItemEnabled", "SetMenuItemList", "SetMenuItemRange", "SetMenuItemText", "SetMenuItemTicksVisible", "SetMenuItemValue", "SetMinimapVisible", "SetNumberPlateTexture", "SetPauseMenuHeaderText", "SetPedCanPlayInCarIdles", "SetPedClothPinFrames", "SetPedDisableFallDamage", "SetPedFloodInvincibility", "SetPedResetFlagPreferRearSeats", "SetPlanePropellerHealth", "SetPlayerSwitchLocation", "SetScriptRocketBoostRechargeTime", "SetSpecialFlightModeWingRatio", "SetUnkCameraSettings", "SetVehicleBombAmmo", "SetVehicleCountermeasureAmmo", "SetVehicleExperimentalAttachmentSyncEnabled", "SetVehicleExperimentalHornSyncEnabled", "SetVehicleGearRatios", "SetVehicleModelDriveForceCurve", "SetVehicleModelGearRatios", "SetVehicleResetUnoccupiedSteerAngle", "SetVehicleXenonLightColorIndex", "StartShapeTestMouseCursorLosProbe", "StatGetSaveMigrationConsumeContentStatus", "TaskGoToCoordsWhilstAimingAtCoords", "TaskPedDieInVehicle", "TaskRappelDownWallUsingClipsetOverride", "ThefeedSetRgbaParameterForNextMessage", "TogglePlayerDamageOverlay", "UpdateEntityOverlayBatch"];
  const t = ["SetEntityOverlayPassEnabled", "CreateEntityOverlayBatch", "UpdateEntityOverlayBatch", "DestroyEntityOverlayBatch", "AddEntityToOverlayBatch", "RemoveEntityFromOverlayBatch", "SetLightsState", "ResetLightsState", "SetVehicleExperimentalAttachmentSyncEnabled", "SetVehicleExperimentalHornSyncEnabled"];
  const r = {
    CreateEntityOverlayBatch: 0
  };
  for (const ws of t) {
    if (typeof globalThis[ws] != "function") {
      const _s = r[ws];
      globalThis[ws] = _s !== undefined ? () => _s : () => {};
    }
  }
  for (const Os of e) {
    if (typeof globalThis[Os] != "function") {
      const Hs = r[Os];
      globalThis[Os] = Hs !== undefined ? () => Hs : () => {};
    }
  }
  function n(e) {
    const t = Number(e);
    if (Number.isFinite(t)) {
      return t >>> 0;
    } else {
      return 0;
    }
  }
  class i {
    constructor(e, t, r) {
      if (Array.isArray(e)) {
        this.x = e[0];
        this.y = e[1];
        this.z = e[2];
      } else if (typeof e == "object" && e !== null) {
        this.x = e.x;
        this.y = e.y;
        this.z = e.z;
      } else {
        this.x = e;
        this.y = t;
        this.z = r;
      }
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    add(e) {
      if (typeof e == "number") {
        return new i(this.x + e, this.y + e, this.z + e);
      } else {
        return new i(this.x + e.x, this.y + e.y, this.z + e.z);
      }
    }
    subtract(e) {
      if (typeof e == "number") {
        return new i(this.x - e, this.y - e, this.z - e);
      } else {
        return new i(this.x - e.x, this.y - e.y, this.z - e.z);
      }
    }
    multiply(e) {
      if (typeof e == "number") {
        return new i(this.x * e, this.y * e, this.z * e);
      } else {
        return new i(this.x * e.x, this.y * e.y, this.z * e.z);
      }
    }
    divide(e) {
      if (typeof e == "number") {
        return new i(this.x / e, this.y / e, this.z / e);
      } else {
        return new i(this.x / e.x, this.y / e.y, this.z / e.z);
      }
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    cross(e) {
      return new i(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x);
    }
    distance(e) {
      const t = this.x - e.x;
      const r = this.y - e.y;
      const n = this.z - e.z;
      return Math.sqrt(t * t + r * r + n * n);
    }
    distanceSqr(e) {
      const t = this.x - e.x;
      const r = this.y - e.y;
      const n = this.z - e.z;
      return t * t + r * r + n * n;
    }
    normalize() {
      const e = this.length();
      if (e === 0) {
        return new i(0, 0, 0);
      } else {
        return this.divide(e);
      }
    }
    negate() {
      return new i(-this.x, -this.y, -this.z);
    }
    equals(e) {
      return this.x === e.x && this.y === e.y && this.z === e.z;
    }
    toArray() {
      return [this.x, this.y, this.z];
    }
    angleTo(e) {
      return Math.acos(this.dot(e) / (this.length() * e.length()));
    }
    clone() {
      return new i(this.x, this.y, this.z);
    }
    max() {
      return Math.max(this.x, this.y, this.z);
    }
    min() {
      return Math.min(this.x, this.y, this.z);
    }
    toAngles() {
      return [Math.atan2(this.x, this.y), Math.asin(this.z / this.length())];
    }
    unit() {
      return this.normalize();
    }
    negative() {
      return this.negate();
    }
  }
  function a(e, t) {
    try {
      const r = e.position;
      if (!r || typeof r.x != "number" || typeof r.y != "number" || typeof r.z != "number") {
        return Infinity;
      }
      const n = r;
      if (typeof n.distance == "function") {
        return n.distance(t);
      } else {
        return function (e, t) {
          const r = e.x - t.x;
          const n = e.y - t.y;
          const i = e.z - t.z;
          return Math.sqrt(r * r + n * n + i * i);
        }(r, t);
      }
    } catch {
      return Infinity;
    }
  }
  function o(e = "Object") {
    const t = new WeakMap();
    return {
      init: (e, r) => {
        t.set(e, r);
        return r;
      },
      get(r) {
        const n = t.get(r);
        if (n === undefined) {
          throw new Error(`${e} internals accessed before initialization (owner: ${r === null || typeof r != "object" ? typeof r : "object"}). This object was never registered, which usually means it was not created through the bridge or a method was invoked with the wrong \`this\` (e.g. passing \`mp.<pool>.new\` as a callback instead of calling \`mp.<pool>.new(...)\`).`);
        }
        return n;
      },
      peek: e => t.get(e)
    };
  }
  const s = 65535;
  const l = o("Entity");
  function d(e, t) {
    e.id = t;
  }
  function c(e, t) {
    l.get(e).remoteId = t;
  }
  let u = null;
  const h = o("Pool");
  function p(e) {
    return h.get(e);
  }
  function m(e, t) {
    const r = h.get(e);
    r.entities.set(t.id, t);
    if (t.remoteId !== s) {
      r.remoteIndex.set(t.remoteId, t);
    }
    u?.("entityCreated", t);
  }
  function g(e, t) {
    const r = h.get(e);
    const n = r.entities.get(t);
    r.entities.delete(t);
    if (n) {
      if (r.remoteIndex.get(n.remoteId) === n) {
        r.remoteIndex.delete(n.remoteId);
      }
      u?.("entityDestroyed", n);
    }
  }
  class S {
    constructor() {
      var e;
      e = this;
      h.init(e, {
        entities: new Map(),
        remoteIndex: new Map(),
        maxStreamed: 64
      });
    }
    get length() {
      return p(this).entities.size;
    }
    get size() {
      return p(this).entities.size;
    }
    at(e) {
      return p(this).entities.get(e) ?? null;
    }
    atRemoteId(e) {
      return function (e, t) {
        return h.get(e).remoteIndex.get(t) ?? null;
      }(this, e);
    }
    exists(e) {
      const t = p(this).entities;
      if (typeof e == "number") {
        return t.has(e);
      } else {
        return !!e && typeof e == "object" && t.get(e.id) === e;
      }
    }
    forEach(e) {
      p(this).entities.forEach(t => e(t));
    }
    apply(e) {
      this.forEach(e);
    }
    toArray() {
      return Array.from(p(this).entities.values());
    }
    forEachFast(e) {
      this.forEach(e);
    }
    forEachInRange(e, t, r, n) {
      const i = typeof r == "number";
      const o = i ? n : r;
      const s = i ? r : null;
      const l = t * t;
      p(this).entities.forEach(t => {
        if (i && t.dimension !== s) {
          return;
        }
        const r = a(t, e);
        if (r * r <= l) {
          o(t);
        }
      });
    }
    forEachInDimension(e, t) {
      p(this).entities.forEach(r => {
        if (r.dimension === e) {
          t(r);
        }
      });
    }
    getClosest(e, t = 1) {
      if (t === 1) {
        let t = null;
        let r = Infinity;
        p(this).entities.forEach(n => {
          const i = n.position.distanceSqr(e);
          if (i < r) {
            r = i;
            t = n;
          }
        });
        if (t) {
          return [t];
        } else {
          return [];
        }
      }
      return this.toArray().map(t => ({
        entity: t,
        dist: t.position.distanceSqr(e)
      })).sort((e, t) => e.dist - t.dist).slice(0, t).map(e => e.entity);
    }
    toArrayFast() {
      return this.toArray();
    }
    get streamed() {
      return this.toArray();
    }
    get maxStreamed() {
      return p(this).maxStreamed;
    }
    set maxStreamed(e) {
      p(this).maxStreamed = e;
    }
    forEachInStreamRange(e) {
      this.forEach(e);
    }
    getClosestInDimension(e, t, r = 1) {
      if (r === 1) {
        let r = null;
        let n = Infinity;
        p(this).entities.forEach(i => {
          if (i.dimension !== t) {
            return;
          }
          const a = i.position.distanceSqr(e);
          if (a < n) {
            n = a;
            r = i;
          }
        });
        if (r) {
          return [r];
        } else {
          return [];
        }
      }
      return this.toArray().filter(e => e.dimension === t).map(t => ({
        entity: t,
        dist: t.position.distanceSqr(e)
      })).sort((e, t) => e.dist - t.dist).slice(0, r).map(e => e.entity);
    }
    [Symbol.iterator]() {
      return p(this).entities.values();
    }
  }
  const C = o();
  function y(e, t) {
    const r = C.peek(e);
    if (r) {
      const n = p(e).entities.get(t);
      if (n) {
        r.handleToEntity.delete(n.handle ?? n._handle ?? -1);
      }
    }
    g(e, t);
  }
  const P = o("EventEmitter");
  class A {
    constructor() {
      var e;
      e = this;
      P.init(e, {
        handlers: new Map()
      });
    }
    call(e, ...t) {
      const r = P.get(this).handlers.get(e);
      if (r) {
        for (const n of r) {
          try {
            n(...t);
          } catch (t) {
            console.error(`[bridge] "${e}" handler error:`, t);
          }
        }
      }
    }
    add(e, t) {
      if (typeof e == "object" && t === undefined) {
        for (const [t, r] of Object.entries(e)) {
          this.add(t, r);
        }
        return;
      }
      const r = e;
      const n = P.get(this).handlers;
      let i = n.get(r);
      if (!i) {
        i = new Set();
        n.set(r, i);
      }
      i.add(t);
    }
    remove(e, t) {
      const r = P.get(this).handlers.get(e);
      if (r) {
        if (t) {
          r.delete(t);
        } else {
          r.clear();
        }
      }
    }
    getAllOf(e) {
      return [...(P.get(this).handlers.get(e) ?? [])];
    }
  }
  const T = o("EventMp");
  function v() {
    const e = globalThis.mp;
    if (!e?.events) {
      throw new Error("mp.Event requires mp.events");
    }
    return e.events;
  }
  function I(e, t, r) {
    T.get(e).bindings.push({
      name: t,
      handler: r
    });
    v().add(t, r);
  }
  class E {
    constructor(e, t) {
      T.init(this, {
        bindings: [],
        destroyed: false
      });
      if (e && typeof e == "object") {
        for (const [t, r] of Object.entries(e)) {
          if (typeof r == "function") {
            I(this, t, r);
          }
        }
      } else if (typeof e == "string" && typeof t == "function") {
        I(this, e, t);
      }
    }
    destroy() {
      const e = T.get(this);
      if (e.destroyed) {
        return;
      }
      e.destroyed = true;
      const t = v();
      for (const {
        name: r,
        handler: n
      } of e.bindings) {
        t.remove(r, n);
      }
      e.bindings.length = 0;
    }
  }
  const k = Symbol("rmp.entity.construct");
  const f = "rmp:";
  function D(e) {
    if (!e.stateBagReady()) {
      return null;
    }
    try {
      return e.stateBag();
    } catch (e) {
      return null;
    }
  }
  class F {
    constructor(e, t, r, n = null) {
      if (e !== k) {
        throw new TypeError(`${r} entities cannot be constructed directly — use the corresponding mp.<pool>.new(...) factory`);
      }
      this.id = t;
      (function (e, t, r) {
        l.init(e, {
          handle: r,
          remoteId: s,
          kind: t,
          variables: new Map(),
          ownVariables: null,
          dataProxy: null,
          alpha: 255,
          dimension: 0,
          model: 0,
          position: null,
          stateBag: () => null,
          stateBagReady: () => true,
          onVariableDeferred: () => {}
        });
      })(this, r, n);
      l.get(this).remoteId = t;
    }
    get handle() {
      return l.get(this).handle ?? 0;
    }
    get type() {
      return l.get(this).kind;
    }
    get remoteId() {
      return l.get(this).remoteId;
    }
    get alpha() {
      return l.get(this).alpha;
    }
    set alpha(e) {
      l.get(this).alpha = e;
    }
    get dimension() {
      return l.get(this).dimension;
    }
    set dimension(e) {
      l.get(this).dimension = e;
    }
    get model() {
      return l.get(this).model;
    }
    set model(e) {
      l.get(this).model = e;
    }
    get position() {
      return l.get(this).position;
    }
    set position(e) {
      l.get(this).position = e;
    }
    getVariable(e) {
      const t = l.get(this);
      if (t.variables.has(e)) {
        return t.variables.get(e);
      }
      const r = D(t);
      if (r) {
        try {
          const n = r[f + e];
          if (n !== undefined) {
            t.variables.set(e, n);
            return n;
          }
        } catch (e) {}
      }
    }
    setVariable(e, t) {
      const r = l.get(this);
      r.variables.set(e, t);
      const n = D(r);
      if (n) {
        try {
          n.set(f + e, t, true);
          return;
        } catch (e) {}
      }
      r.onVariableDeferred();
    }
    hasVariable(e) {
      return this.getVariable(e) !== undefined;
    }
    setVariables(e) {
      for (const [t, r] of Object.entries(e)) {
        this.setVariable(t, r);
      }
    }
    get data() {
      const e = l.get(this);
      if (!e.dataProxy) {
        const t = this;
        e.dataProxy = new Proxy({}, {
          get: (e, r) => t.getVariable(r),
          set: (e, r, n) => {
            t.setVariable(r, n);
            return true;
          },
          has: (e, r) => t.hasVariable(r),
          deleteProperty: (e, r) => {
            t.setVariable(r, undefined);
            return true;
          }
        });
      }
      return e.dataProxy;
    }
    dist(e) {
      const t = this.position;
      if (t) {
        return t.distance(e);
      } else {
        return Infinity;
      }
    }
    distSquared(e) {
      const t = this.position;
      if (t) {
        return t.distanceSqr(e);
      } else {
        return Infinity;
      }
    }
    setOwnVariable(e, t) {
      const r = l.get(this);
      r.ownVariables ||= new Map();
      r.ownVariables.set(e, t);
    }
    setOwnVariables(e) {
      for (const [t, r] of Object.entries(e)) {
        this.setOwnVariable(t, r);
      }
    }
    getOwnVariable(e) {
      const t = l.get(this);
      if (t.ownVariables) {
        return t.ownVariables.get(e);
      }
    }
  }
  const N = "rmp_store_v2";
  const b = "rmp_storage:";
  function x(e) {
    if (typeof GetResourceKvpString != "function") {
      return null;
    }
    try {
      return GetResourceKvpString(e);
    } catch {
      return null;
    }
  }
  function B(e, t) {
    if (typeof SetResourceKvpNoSync == "function") {
      SetResourceKvpNoSync(e, t);
    } else if (typeof SetResourceKvp == "function") {
      SetResourceKvp(e, t);
    }
  }
  function R(e) {
    if (typeof DeleteResourceKvpNoSync == "function") {
      DeleteResourceKvpNoSync(e);
    } else if (typeof DeleteResourceKvp == "function") {
      DeleteResourceKvp(e);
    }
  }
  function G() {
    if (typeof FlushResourceKvp == "function") {
      FlushResourceKvp();
    }
  }
  function M(e) {
    try {
      const t = JSON.stringify(e === undefined ? {} : e);
      if (t === undefined) {
        return "{}";
      } else {
        return t;
      }
    } catch {
      return null;
    }
  }
  function V(e) {
    const t = M(e);
    if (t !== null) {
      B(N, t);
      G();
    }
  }
  class w {
    constructor() {
      this._sessionData = {};
      this._cache = null;
      this._hydrated = false;
      this._proxy = null;
      this._subProxies = null;
      this._flushScheduled = false;
    }
    _ensureHydrated() {
      if (this._hydrated) {
        return;
      }
      let e;
      this._hydrated = true;
      this._subProxies = new WeakMap();
      try {
        e = this._hydrate();
      } catch {
        e = {};
      }
      this._cache = e && typeof e == "object" ? e : {};
    }
    _hydrate() {
      const e = x(N);
      if (e != null) {
        try {
          const t = JSON.parse(e);
          if (t && typeof t == "object") {
            return t;
          }
        } catch {}
        return {};
      }
      try {
        return this._migrateLegacy();
      } catch {
        return {};
      }
    }
    _migrateLegacy() {
      const e = {};
      if (typeof StartFindKvp != "function" || typeof FindKvp != "function" || typeof EndFindKvp != "function") {
        return e;
      }
      let t;
      try {
        t = StartFindKvp(b);
      } catch {
        return e;
      }
      if (t == null || t === -1) {
        return e;
      }
      const r = [];
      try {
        while (true) {
          const n = FindKvp(t);
          if (n == null || n === "") {
            break;
          }
          r.push(n);
          const i = n.slice(12);
          const a = x(n);
          if (a != null) {
            try {
              e[i] = JSON.parse(a);
            } catch {
              e[i] = a;
            }
          }
        }
      } finally {
        EndFindKvp(t);
      }
      if (r.length) {
        const t = M(e);
        if (t !== null) {
          B(N, t);
          for (const e of r) {
            R(e);
          }
          G();
        }
      }
      return e;
    }
    _scheduleFlush() {
      if (this._flushScheduled) {
        return;
      }
      this._flushScheduled = true;
      const e = () => {
        this._flushScheduled = false;
        V(this._cache);
      };
      if (typeof queueMicrotask == "function") {
        queueMicrotask(e);
      } else if (typeof setTimeout == "function") {
        setTimeout(e, 0);
      } else {
        e();
      }
    }
    _wrap(e) {
      if (!e || typeof e != "object") {
        return e;
      }
      const t = this._subProxies.get(e);
      if (t) {
        return t;
      }
      const r = this;
      const n = new Proxy(e, {
        get(e, t, n) {
          const i = Reflect.get(e, t, n);
          if (i && typeof i == "object" && typeof t == "string") {
            return r._wrap(i);
          } else {
            return i;
          }
        },
        set: (e, t, n, i) => {
          Reflect.set(e, t, n, i);
          r._scheduleFlush();
          return true;
        },
        deleteProperty: (e, t) => {
          Reflect.deleteProperty(e, t);
          r._scheduleFlush();
          return true;
        }
      });
      this._subProxies.set(e, n);
      return n;
    }
    get data() {
      this._ensureHydrated();
      if (!this._cache || typeof this._cache != "object") {
        this._cache = {};
        this._proxy = null;
      }
      this._proxy ||= this._wrap(this._cache);
      return this._proxy;
    }
    set data(e) {
      this._ensureHydrated();
      this._cache = e && typeof e == "object" ? {
        ...e
      } : {};
      this._subProxies = new WeakMap();
      this._proxy = null;
      this._scheduleFlush();
    }
    get sessionData() {
      return this._sessionData;
    }
    set sessionData(e) {
      this._sessionData = e || {};
    }
    flush() {
      this._ensureHydrated();
      this._flushScheduled = false;
      V(this._cache);
    }
  }
  function _(e) {
    return Math.max(0, Math.round(e) - 100);
  }
  function O(e) {
    return Math.max(0, Math.round(e)) + 100;
  }
  const H = 4294967295;
  function L(e) {
    if (e == null) {
      return 0;
    }
    const t = Number(e);
    if (Number.isFinite(t)) {
      if (t < 0) {
        return 0;
      } else {
        return Math.floor(t);
      }
    } else {
      return 0;
    }
  }
  const W = "__mpRef";
  function U(e, t) {
    if (e === null || typeof e != "object") {
      return e;
    }
    if (e instanceof F) {
      return function (e) {
        let t = e.id;
        try {
          if (e.type === "player") {
            const r = e.source;
            if (typeof r == "number" && r > 0) {
              t = r;
            }
          } else {
            const r = e.remoteId;
            if (typeof r == "number" && r !== s) {
              t = r;
            }
          }
        } catch (e) {}
        const r = {
          [W]: e.type,
          id: t
        };
        try {
          const t = e.netId;
          if (t != null && t !== 0) {
            r.netId = t;
          }
        } catch (e) {}
        return r;
      }(e);
    }
    if (e instanceof i) {
      return {
        x: e.x,
        y: e.y,
        z: e.z
      };
    }
    t ||= new WeakSet();
    if (t.has(e)) {
      return null;
    }
    let r;
    t.add(e);
    if (Array.isArray(e)) {
      r = new Array(e.length);
      for (let n = 0; n < e.length; n++) {
        r[n] = U(e[n], t);
      }
    } else if (e instanceof Map) {
      r = {};
      for (const [n, i] of e) {
        r[String(n)] = U(i, t);
      }
    } else if (e instanceof Set) {
      r = [];
      for (const n of e) {
        r.push(U(n, t));
      }
    } else {
      r = {};
      for (const n of Object.keys(e)) {
        r[n] = U(e[n], t);
      }
    }
    t.delete(e);
    return r;
  }
  function z(e, t, r) {
    if (e === null || typeof e != "object") {
      return e;
    }
    if (function (e) {
      return e !== null && typeof e == "object" && typeof e[W] == "string" && "id" in e;
    }(e)) {
      const r = e;
      return t(r[W], r.id, r.netId) ?? null;
    }
    r ||= new WeakSet();
    if (r.has(e)) {
      return e;
    }
    r.add(e);
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) {
        e[n] = z(e[n], t, r);
      }
    } else {
      for (const n of Object.keys(e)) {
        e[n] = z(e[n], t, r);
      }
    }
    return e;
  }
  function j(e, t) {
    if (!Array.isArray(e)) {
      return e;
    }
    for (let r = 0; r < e.length; r++) {
      if (e[r] !== null && typeof e[r] == "object") {
        e[r] = z(e[r], t);
      }
    }
    return e;
  }
  const q = new Set([911657153, 2725352035, 2725351936, 2725352035, 1141786504, 1317494643, 1737195953, 419712736, 2343591895, 2508868239, 2508868239, 2343591895, 2578778090, 2578778112, 3452007600]);
  function K(e) {
    const t = e >>> 0;
    return q.has(t);
  }
  const Y = ["ped", "vehicle", "object"];
  const Z = 300;
  function J(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e) && "id" in e;
  }
  function X(e) {
    if (Array.isArray(e)) {
      return Number(e[0]);
    } else if (J(e)) {
      return Number(e.id);
    } else {
      return NaN;
    }
  }
  const Q = Object.create(null);
  const $ = Object.create(null);
  function ee(e) {
    let t = $[e];
    if (!t) {
      t = {
        create: [],
        netid: [],
        destroy: []
      };
      $[e] = t;
    }
    return t;
  }
  function te(e, t, r, n, i, a, o) {
    const s = Q[e];
    if (s?.create) {
      s.create(t, {
        model: r,
        x: n,
        y: i,
        z: a,
        dimension: o
      });
    } else {
      ee(e).create.push({
        remoteId: t,
        model: r,
        x: n,
        y: i,
        z: a,
        dimension: o
      });
    }
  }
  function re(e) {
    if (!Array.isArray(e)) {
      return;
    }
    const t = function (e) {
      if (!Array.isArray(e) || e.length < 7) {
        return null;
      }
      let t;
      if (typeof e[0] == "number") {
        t = Y[e[0]] ?? "object";
      } else {
        if (typeof e[0] != "string") {
          return null;
        }
        t = e[0];
      }
      const r = Number(e[1]);
      const n = Number(e[2]);
      const i = Number(e[3]);
      const a = Number(e[4]);
      const o = Number(e[5]);
      const s = Number(e[6]);
      const l = e.length > 7 ? Number(e[7]) : 0;
      if (Number.isFinite(r)) {
        return {
          type: t,
          remoteId: r,
          model: n,
          x: i,
          y: a,
          z: o,
          dimension: s,
          netId: l
        };
      } else {
        return null;
      }
    }(e);
    if (t) {
      te(t.type, t.remoteId, t.model, t.x, t.y, t.z, t.dimension);
      if (t.netId) {
        (function (e, t, r) {
          const n = Q[e];
          if (n?.netid) {
            n.netid(t, r);
          } else {
            ee(e).netid.push({
              remoteId: t,
              netId: r
            });
          }
        })(t.type, t.remoteId, t.netId);
      }
    }
  }
  function ne(e, t) {
    Q[e] = t;
    (function (e, t) {
      const r = $[e];
      if (r) {
        for (const e of r.create) {
          t.create(e.remoteId, {
            model: e.model,
            x: e.x,
            y: e.y,
            z: e.z,
            dimension: e.dimension
          });
        }
        for (const e of r.netid) {
          t.netid(e.remoteId, e.netId);
        }
        for (const e of r.destroy) {
          t.destroy(e.remoteId);
        }
        delete $[e];
      }
    })(e, t);
  }
  if (typeof onNet == "function") {
    onNet("ragemp:entity:create", (e, t, r, n, i, a, o) => {
      te(e, t, r, n, i, a, o);
    });
    onNet("ragemp:entity:destroy", (e, t) => {
      (function (e, t) {
        const r = Q[e];
        if (r?.destroy) {
          r.destroy(t);
        } else {
          ee(e).destroy.push({
            remoteId: t
          });
        }
      })(e, t);
    });
    onNet("ragemp:entity:snapshot", e => {
      if (Array.isArray(e)) {
        for (const t of e) {
          re(t);
        }
      }
    });
  }
  class ie {
    constructor() {
      this.next = 0;
      this.freed = [];
    }
    allocate() {
      if (this.freed.length) {
        return this.freed.shift();
      } else {
        return this.next++;
      }
    }
    free(e) {
      let t = 0;
      let r = this.freed.length;
      while (t < r) {
        const n = t + r >> 1;
        if (this.freed[n] < e) {
          t = n + 1;
        } else {
          r = n;
        }
      }
      if (this.freed[t] !== e) {
        this.freed.splice(t, 0, e);
      }
    }
    reset() {
      this.next = 0;
      this.freed = [];
    }
  }
  const ae = o();
  function oe(e) {
    return (ae.peek(e) ?? ae.init(e, {
      ids: new ie()
    })).ids;
  }
  function se(e, t) {
    c(t, t.id);
    d(t, oe(e).allocate());
    m(e, t);
    return t;
  }
  function le(e, t) {
    c(t, s);
    d(t, oe(e).allocate());
    m(e, t);
    return t;
  }
  function de(e, t) {
    ae.peek(e)?.ids.free(t);
  }
  let ce = null;
  const ue = o();
  function he(e) {
    const t = ue.get(e);
    if (t.mappedServerId > 0) {
      return t.mappedServerId;
    }
    if (t.playerIndex >= 0) {
      const e = GetPlayerServerId(t.playerIndex);
      if (e > 0) {
        t.mappedServerId = e;
        return e;
      }
    }
    const r = e.remoteId;
    if (typeof r == "number" && r > 0) {
      const e = function (e) {
        if (Number.isFinite(e) && !(e <= 0)) {
          return ce?.(e);
        }
      }(r);
      if (e && e > 0) {
        t.mappedServerId = e;
        return e;
      }
    }
    return 0;
  }
  let pe = false;
  let me = null;
  const ge = new Set();
  const Se = {
    players: [],
    vehicles: [],
    peds: [],
    pass: 0
  };
  function Ce() {
    Se.players = GetActivePlayers();
    Se.vehicles = GetGamePool("CVehicle");
    Se.peds = GetGamePool("CPed");
    Se.pass++;
    for (const e of ge) {
      try {
        e(Se);
      } catch (e) {}
    }
  }
  function ye(e) {
    if (!pe) {
      pe = true;
      Ce();
      me = setInterval(Ce, 100);
      if (typeof on == "function") {
        on("onResourceStop", e => {
          if (typeof GetCurrentResourceName != "function" || e === GetCurrentResourceName()) {
            if (me !== null) {
              clearInterval(me);
              me = null;
            }
            pe = false;
            ge.clear();
          }
        });
      }
    }
    ge.add(e);
    return () => ge.delete(e);
  }
  function Pe() {
    return Se.vehicles;
  }
  function Ae() {
    return Se.peds;
  }
  function Te(e) {
    if (!e) {
      return new i(0, 0, 0);
    }
    const t = e;
    return new i(t.x ?? t[0] ?? 0, t.y ?? t[1] ?? 0, t.z ?? t[2] ?? 0);
  }
  function ve(e) {
    if (e && DoesEntityExist(e) && NetworkGetEntityIsNetworked(e)) {
      return NetworkGetNetworkIdFromEntity(e);
    } else {
      return 0;
    }
  }
  function Ie(e) {
    if (!e || e <= 0) {
      return 0;
    }
    if (typeof NetworkGetEntityFromNetworkId != "function") {
      return 0;
    }
    if (typeof NetworkDoesNetworkIdExist == "function" && !NetworkDoesNetworkIdExist(e)) {
      return 0;
    }
    const t = NetworkGetEntityFromNetworkId(e);
    if (t && (typeof DoesEntityExist != "function" || DoesEntityExist(t))) {
      return t;
    } else {
      return 0;
    }
  }
  const Ee = o();
  const ke = o();
  function fe(e) {
    const t = ke.peek(e);
    return t || ke.init(e, {
      isServer: false,
      managedLocally: false,
      netId: 0,
      serverModel: 0,
      serverPos: {
        x: 0,
        y: 0,
        z: 0
      },
      serverDimension: 0
    });
  }
  class De extends F {
    constructor(e, t, r, n) {
      super(e, t, r, n);
      l.get(this).stateBag = () => globalThis.Entity(this.handle).state;
    }
    get netId() {
      try {
        return ve(this.handle);
      } catch (e) {
        return 0;
      }
    }
    get position() {
      return Te(GetEntityCoords(this.handle, true));
    }
    set position(e) {
      SetEntityCoordsNoOffset(this.handle, e.x, e.y, e.z, false, false, false);
    }
    get rotation() {
      return Te(GetEntityRotation(this.handle, 2));
    }
    set rotation(e) {
      SetEntityRotation(this.handle, e.x, e.y, e.z, 2, false);
    }
    get heading() {
      return GetEntityHeading(this.handle);
    }
    set heading(e) {
      SetEntityHeading(this.handle, e);
    }
    get model() {
      const e = l.get(this);
      const t = n(e.model);
      const r = fe(this);
      if (r.isServer && r.serverModel) {
        const i = n(r.serverModel);
        if (!t && i) {
          e.model = i;
        }
        return t || i;
      }
      if (!this.handle || !DoesEntityExist(this.handle)) {
        return t;
      }
      try {
        const t = n(GetEntityModel(this.handle));
        e.model = t;
        return t;
      } catch {
        return t;
      }
    }
    get velocity() {
      return Te(GetEntityVelocity(this.handle));
    }
    get alpha() {
      return GetEntityAlpha(this.handle);
    }
    set alpha(e) {
      SetEntityAlpha(this.handle, e, false);
    }
    get dead() {
      return IsEntityDead(this.handle);
    }
    getCoords(e) {
      return Te(GetEntityCoords(this.handle, e ?? true));
    }
    getRotation(e) {
      return Te(GetEntityRotation(this.handle, e ?? 2));
    }
    getForwardVector() {
      return Te(GetEntityForwardVector(this.handle));
    }
    getForwardX() {
      return GetEntityForwardX(this.handle);
    }
    getForwardY() {
      return GetEntityForwardY(this.handle);
    }
    getHeading() {
      return GetEntityHeading(this.handle);
    }
    getPitch() {
      return GetEntityPitch(this.handle);
    }
    getRoll() {
      return GetEntityRoll(this.handle);
    }
    getHealth() {
      return GetEntityHealth(this.handle);
    }
    getMaxHealth() {
      return GetEntityMaxHealth(this.handle);
    }
    getModel() {
      return this.model;
    }
    getType() {
      return GetEntityType(this.handle);
    }
    getSpeed() {
      return GetEntitySpeed(this.handle);
    }
    setMaxSpeed(e) {
      SetEntityMaxSpeed(this.handle, e);
    }
    getSpeedVector(e) {
      return Te(GetEntitySpeedVector(this.handle, !!e));
    }
    getVelocity() {
      return Te(GetEntityVelocity(this.handle));
    }
    getRotationVelocity() {
      return Te(GetEntityRotationVelocity(this.handle));
    }
    getSubmergedLevel() {
      return GetEntitySubmergedLevel(this.handle);
    }
    getHeightAboveGround() {
      return GetEntityHeightAboveGround(this.handle);
    }
    getLodDist() {
      return GetEntityLodDist(this.handle);
    }
    getAlpha() {
      return GetEntityAlpha(this.handle);
    }
    getPopulationType() {
      return GetEntityPopulationType(this.handle);
    }
    getOffsetFromInWorldCoords(e, t, r) {
      return Te(GetOffsetFromEntityInWorldCoords(this.handle, e, t, r));
    }
    getOffsetFromGivenWorldCoords(e, t, r) {
      return Te(GetOffsetFromEntityGivenWorldCoords(this.handle, e, t, r));
    }
    getWorldPositionOfBone(e) {
      return Te(GetWorldPositionOfEntityBone(this.handle, e));
    }
    getBoneIndexByName(e) {
      return GetEntityBoneIndexByName(this.handle, e);
    }
    getAttachedTo() {
      const e = GetEntityAttachedTo(this.handle);
      if (e && e !== 0) {
        return e;
      } else {
        return null;
      }
    }
    setCoords(e, t, r, n, i, a, o) {
      SetEntityCoords(this.handle, e, t, r, n ?? false, i ?? false, a ?? false, o ?? true);
    }
    setCoordsNoOffset(e, t, r, n, i, a) {
      SetEntityCoordsNoOffset(this.handle, e, t, r, n ?? true, i ?? true, a ?? true);
    }
    setRotation(e, t, r, n, i) {
      SetEntityRotation(this.handle, e, t, r, n ?? 2, i ?? true);
    }
    setHeading(e) {
      SetEntityHeading(this.handle, e);
    }
    setHealth(e) {
      SetEntityHealth(this.handle, e);
    }
    setMaxHealth(e) {
      SetEntityMaxHealth(this.handle, e);
    }
    setAlpha(e, t) {
      SetEntityAlpha(this.handle, e, !!t);
    }
    resetAlpha() {
      ResetEntityAlpha(this.handle);
    }
    setVelocity(e, t, r) {
      SetEntityVelocity(this.handle, e, t, r);
    }
    setVisible(e, t) {
      SetEntityVisible(this.handle, !!e, !!t);
    }
    setCollision(e, t) {
      SetEntityCollision(this.handle, !!e, t ?? true);
    }
    setNoCollision(e, t) {
      SetEntityNoCollisionEntity(this.handle, e?.handle ?? e, !!t);
    }
    setLodDist(e) {
      SetEntityLodDist(this.handle, e);
    }
    setInvincible(e) {
      SetEntityInvincible(this.handle, !!e);
    }
    setProofs(e, t, r, n, i, a, o, s) {
      SetEntityProofs(this.handle, !!e, !!t, !!r, !!n, !!i, !!a, !!o, !!s);
    }
    setRenderScorched(e) {
      SetEntityRenderScorched(this.handle, !!e);
    }
    setCanBeDamaged(e) {
      SetEntityCanBeDamaged(this.handle, !!e);
    }
    setOnlyDamagedByPlayer(e) {
      SetEntityOnlyDamagedByPlayer(this.handle, !!e);
    }
    freezePosition(e) {
      FreezeEntityPosition(this.handle, !!e);
    }
    attachTo(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      AttachEntityToEntity(this.handle, e?.handle ?? e, t, r, n, i, a, o, s, !!l, !!d, !!c, !!u, h ?? 2, !!p);
    }
    detach(e, t) {
      DetachEntity(this.handle, e ?? true, t ?? true);
    }
    isAttached() {
      return IsEntityAttached(this.handle);
    }
    isAttachedTo(e) {
      return IsEntityAttachedToEntity(this.handle, e?.handle ?? e);
    }
    isAttachedToAnyObject() {
      return IsEntityAttachedToAnyObject(this.handle);
    }
    isAttachedToAnyPed() {
      return IsEntityAttachedToAnyPed(this.handle);
    }
    isAttachedToAnyVehicle() {
      return IsEntityAttachedToAnyVehicle(this.handle);
    }
    isInAir() {
      return IsEntityInAir(this.handle);
    }
    isInWater() {
      return IsEntityInWater(this.handle);
    }
    isInZone(e) {
      return IsEntityInZone(this.handle, e);
    }
    isInArea(e, t, r, n, i, a, o, s, l) {
      return IsEntityInArea(this.handle, e, t, r, n, i, a, !!o, !!s, l);
    }
    isInAngledArea(e, t, r, n, i, a, o, s, l, d) {
      return IsEntityInAngledArea(this.handle, e, t, r, n, i, a, o, !!s, !!l, d);
    }
    isVisible() {
      return IsEntityVisible(this.handle);
    }
    isOnScreen() {
      return IsEntityOnScreen(this.handle);
    }
    isStatic() {
      return IsEntityStatic(this.handle);
    }
    isUpsidedown() {
      return IsEntityUpsidedown(this.handle);
    }
    isUpright(e) {
      return IsEntityUpright(this.handle, e ?? 30);
    }
    isDead() {
      return IsEntityDead(this.handle);
    }
    isOccluded() {
      const e = this.handle;
      return !e || typeof DoesEntityExist == "function" && !DoesEntityExist(e) || IsEntityOccluded(e);
    }
    isTouchingEntity(e) {
      return IsEntityTouchingEntity(this.handle, e?.handle ?? e);
    }
    isTouchingModel(e) {
      return IsEntityTouchingModel(this.handle, e);
    }
    isCollisionDisabled() {
      return GetEntityCollisionDisabled(this.handle);
    }
    hasClearLosTo(e, t) {
      return HasEntityClearLosToEntity(this.handle, e?.handle ?? e, t ?? 17);
    }
    hasClearLosToInFront(e) {
      return HasEntityClearLosToEntityInFront(this.handle, e?.handle ?? e);
    }
    hasBeenDamagedBy(e, t) {
      return HasEntityBeenDamagedByEntity(this.handle, e?.handle ?? e, t ?? true);
    }
    hasCollidedWithAnything() {
      return HasEntityCollidedWithAnything(this.handle);
    }
    hasAnimFinished(e, t, r) {
      return HasEntityAnimFinished(this.handle, e, t, r ?? 3);
    }
    isPlayingAnim(e, t, r) {
      return IsEntityPlayingAnim(this.handle, e, t, r ?? 3);
    }
    getAnimCurrentTime(e, t) {
      return GetEntityAnimCurrentTime(this.handle, e, t);
    }
    getAnimTotalTime(e, t) {
      return GetEntityAnimTotalTime(this.handle, e, t);
    }
    setAnimCurrentTime(e, t, r) {
      SetEntityAnimCurrentTime(this.handle, e, t, r);
    }
    setAnimSpeed(e, t, r) {
      SetEntityAnimSpeed(this.handle, e, t, r);
    }
    forceAiAndAnimationUpdate() {
      ForceEntityAiAndAnimationUpdate(this.handle);
    }
    playAnim(e, t, r, n, i, a, o, s) {
      return PlayEntityAnim(this.handle, e, t, r ?? 8, !!n, !!i, !!a, o ?? 0, s ?? 0);
    }
    applyForceTo(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      ApplyForceToEntity(this.handle, e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? 0, !!l, d ?? true, c ?? true, !!u, !!h);
    }
    applyForceToCenterOfMass(e, t, r, n, i, a, o, s) {
      ApplyForceToEntityCenterOfMass(this.handle, e, t, r, n, !!i, !!a, o ?? true, !!s);
    }
    setAsMission(e, t) {
      SetEntityAsMissionEntity(this.handle, e ?? true, t ?? true);
    }
    doesExist() {
      return !!this.handle && DoesEntityExist(this.handle);
    }
    destroy() {
      if (this.handle && DoesEntityExist(this.handle)) {
        SetEntityAsMissionEntity(this.handle, false, true);
        DeleteEntity(this.handle);
      }
    }
  }
  const Fe = [];
  let Ne = false;
  function be(e, t) {
    if (e == null || t == null || t === "") {
      return;
    }
    const r = Fe.find(t => t.handle === e);
    if (r) {
      r.text = String(t);
    } else {
      Fe.push({
        handle: e,
        text: String(t)
      });
    }
    (function () {
      if (Ne) {
        return;
      }
      Ne = true;
      const e = () => {
        const t = Fe.shift();
        if (t && t.handle != null && DoesBlipExist(t.handle)) {
          BeginTextCommandSetBlipName("STRING");
          AddTextComponentSubstringPlayerName(t.text);
          EndTextCommandSetBlipName(t.handle);
        }
        if (Fe.length) {
          setTimeout(e, 0);
        } else {
          Ne = false;
        }
      };
      setTimeout(e, 0);
    })();
  }
  const xe = o();
  function Be(e) {
    return xe.init(e, {
      dimension: 0,
      alpha: 255,
      scale: undefined,
      radius: undefined,
      name: undefined,
      shortRange: undefined
    });
  }
  let Re = 0;
  const Ge = new Set();
  function Me() {
    try {
      const e = PlayerPedId();
      if (e) {
        return GetEntityRoutingBucket(e);
      }
    } catch (e) {}
    return Re;
  }
  function Ve(e) {
    Ge.add(e);
    return () => Ge.delete(e);
  }
  function we(e) {
    return function (e, t) {
      if (e === -1) {
        return true;
      }
      const r = L(e);
      return r === H || r === L(t);
    }(e, Re);
  }
  function _e(e, t) {
    onNet(t.createEvent, r => {
      const n = X(r);
      if (Number.isFinite(n) && !e.atRemoteId(n)) {
        t.create(e, r);
      }
    });
    onNet(t.syncAllEvent, r => {
      for (const n of r) {
        const r = X(n);
        if (Number.isFinite(r) && !e.atRemoteId(r)) {
          t.create(e, n);
        }
      }
    });
    onNet(t.updateEvent, (r, n) => t.update(e, r, n));
    onNet(t.destroyEvent, r => t.destroy(e, r));
  }
  function Oe(e) {
    if (!e.handle || !DoesBlipExist(e.handle)) {
      return;
    }
    const t = xe.get(e);
    const r = we(t.dimension);
    SetBlipAlpha(e.handle, r ? t.alpha : 0);
  }
  function He(e, t, r, n) {
    if (n !== undefined) {
      return AddBlipForRadius(e, t, r, n);
    } else {
      return AddBlipForCoord(e, t, r);
    }
  }
  function Le(e) {
    Ve(() => e.forEach(e => Oe(e)));
    _e(e, {
      createEvent: "ragemp:blipCreate",
      syncAllEvent: "ragemp:blipSyncAll",
      updateEvent: "ragemp:blipUpdate",
      destroyEvent: "ragemp:blipDestroy",
      create: (e, t) => function (e, t) {
        if (e.atRemoteId(t.id)) {
          return e.atRemoteId(t.id);
        }
        const r = t.radius !== undefined ? Number(t.radius) : undefined;
        const n = He(t.x, t.y, t.z, r);
        SetBlipSprite(n, t.sprite);
        SetBlipColour(n, t.color);
        SetBlipScale(n, t.scale);
        SetBlipAsShortRange(n, t.shortRange);
        be(n, t.name);
        const i = new We(k, t.id, n);
        const a = xe.get(i);
        a.name = t.name;
        a.shortRange = t.shortRange;
        a.scale = t.scale;
        a.radius = r;
        a.alpha = t.alpha ?? 255;
        a.dimension = t.dimension ?? 0;
        Oe(i);
        se(e, i);
        if (t.name) {
          setTimeout(() => {
            if (i.handle && DoesBlipExist(i.handle)) {
              be(i.handle, xe.get(i).name);
            }
          }, 1500);
        }
        return i;
      }(e, t),
      update: (e, t, r) => {
        const n = e.atRemoteId(t);
        if (n) {
          n.position = new i(r.x, r.y, r.z);
          n.sprite = r.sprite;
          n.color = r.color;
          n.scale = r.scale;
          xe.get(n).alpha = r.alpha ?? 255;
          n.shortRange = r.shortRange;
          n.dimension = r.dimension ?? 0;
          if (r.name) {
            n.name = r.name;
          }
        }
      },
      destroy: (e, t) => {
        const r = e.atRemoteId(t);
        if (r) {
          r.destroy();
        }
      }
    });
    onNet("ragemp:blipRoute", (t, r, n, i) => {
      const a = e.atRemoteId(t);
      if (a) {
        SetBlipRoute(a.handle, r);
        if (r && n != null) {
          SetBlipRouteColour(a.handle, n);
        }
      }
    });
  }
  class We extends F {
    constructor(e, t, r) {
      super(e, t, "blip", r);
      Be(this);
    }
    get position() {
      return Te(GetBlipCoords(this.handle));
    }
    set position(e) {
      SetBlipCoords(this.handle, e.x, e.y, e.z);
    }
    get sprite() {
      return GetBlipSprite(this.handle);
    }
    set sprite(e) {
      SetBlipSprite(this.handle, e);
    }
    get color() {
      return GetBlipColour(this.handle);
    }
    set color(e) {
      SetBlipColour(this.handle, e);
    }
    get scale() {
      return xe.get(this).scale ?? 1;
    }
    set scale(e) {
      xe.get(this).scale = e;
      SetBlipScale(this.handle, e);
    }
    get name() {
      return xe.get(this).name ?? "";
    }
    set name(e) {
      xe.get(this).name = e;
      be(this.handle, e);
    }
    get shortRange() {
      return xe.get(this).shortRange ?? false;
    }
    set shortRange(e) {
      xe.get(this).shortRange = e;
      SetBlipAsShortRange(this.handle, e);
    }
    get alpha() {
      return xe.get(this).alpha;
    }
    set alpha(e) {
      xe.get(this).alpha = e;
      Oe(this);
    }
    get dimension() {
      return xe.get(this).dimension;
    }
    set dimension(e) {
      xe.get(this).dimension = e;
      Oe(this);
    }
    doesExist() {
      return DoesBlipExist(this.handle);
    }
    getAlpha() {
      return GetBlipAlpha(this.handle);
    }
    getColour() {
      return GetBlipColour(this.handle);
    }
    getCoords() {
      return Te(GetBlipCoords(this.handle));
    }
    getHudColour() {
      return GetBlipHudColour(this.handle);
    }
    getInfoIdDisplay() {
      return GetBlipInfoIdDisplay(this.handle);
    }
    getInfoIdEntityIndex() {
      return GetBlipInfoIdEntityIndex(this.handle);
    }
    getInfoIdPickupIndex() {
      return GetBlipInfoIdPickupIndex(this.handle);
    }
    getInfoIdType() {
      return GetBlipInfoIdType(this.handle);
    }
    getSprite() {
      return GetBlipSprite(this.handle);
    }
    getFirstInfoId() {
      return GetFirstBlipInfoId(this.handle);
    }
    getNextInfoId() {
      return GetNextBlipInfoId(this.handle);
    }
    isFlashing() {
      return IsBlipFlashing(this.handle);
    }
    isMissionCreator() {
      return IsMissionCreatorBlip(this.handle);
    }
    isOnMinimap() {
      return IsBlipOnMinimap(this.handle);
    }
    isShortRange() {
      return IsBlipShortRange(this.handle);
    }
    setAlpha(e) {
      SetBlipAlpha(this.handle, e);
    }
    setAsFriendly(e) {
      SetBlipAsFriendly(this.handle, !!e);
    }
    setAsMissionCreator(e) {
      SetBlipAsMissionCreatorBlip(this.handle, !!e);
    }
    setAsShortRange(e) {
      SetBlipAsShortRange(this.handle, !!e);
    }
    setBright(e) {
      SetBlipBright(this.handle, !!e);
    }
    setCategory(e) {
      SetBlipCategory(this.handle, e);
    }
    setColour(e) {
      SetBlipColour(this.handle, e);
    }
    setCoords(e) {
      SetBlipCoords(this.handle, e.x, e.y, e.z);
    }
    setDisplay(e) {
      SetBlipDisplay(this.handle, e);
    }
    setFade(e, t) {
      SetBlipFade(this.handle, e, t);
    }
    setFlashes(e) {
      SetBlipFlashes(this.handle, !!e);
    }
    setFlashesAlternate(e) {
      SetBlipFlashesAlternate(this.handle, !!e);
    }
    setFlashInterval(e) {
      SetBlipFlashInterval(this.handle, e);
    }
    setFlashTimer(e) {
      SetBlipFlashTimer(this.handle, e);
    }
    setHighDetail(e) {
      SetBlipHighDetail(this.handle, !!e);
    }
    setNameFromTextFile(e) {
      SetBlipNameFromTextFile(this.handle, e);
    }
    setNameToPlayerName(e) {
      SetBlipNameToPlayerName(this.handle, e?._playerIndex ?? e);
    }
    setPosition(e, t, r) {
      SetBlipCoords(this.handle, e, t, r ?? 0);
    }
    setPriority(e) {
      SetBlipPriority(this.handle, e);
    }
    setRotation(e) {
      SetBlipRotation(this.handle, e);
    }
    setRoute(e) {
      SetBlipRoute(this.handle, !!e);
    }
    setRouteColour(e) {
      SetBlipRouteColour(this.handle, e);
    }
    setScale(e) {
      SetBlipScale(this.handle, e);
    }
    setSecondaryColour(e, t, r) {
      SetBlipSecondaryColour(this.handle, e, t, r);
    }
    setShowCone(e) {
      SetBlipShowCone(this.handle, !!e, 6);
    }
    setShowHeadingIndicator(e) {
      ShowHeadingIndicatorOnBlip(this.handle, !!e);
    }
    setSprite(e) {
      SetBlipSprite(this.handle, e);
    }
    addTextComponentSubstringName(e) {
      AddTextComponentSubstringPlayerName(e);
    }
    endTextCommandSetName() {
      EndTextCommandSetBlipName(this.handle);
    }
    pulse() {
      PulseBlip(this.handle);
    }
    showNumberOn(e) {
      ShowNumberOnBlip(this.handle, e);
    }
    hideNumberOn() {
      HideNumberOnBlip(this.handle);
    }
    destroy() {
      RemoveBlip(this.handle);
      if (globalThis.mp.blips) {
        y(globalThis.mp.blips, this.id);
        de(globalThis.mp.blips, this.id);
      }
    }
  }
  const Ue = o();
  class ze extends De {
    constructor(e, t, r, n = null) {
      var i;
      super(e, t, r, n);
      this.weaponAmmo = 0;
      this.shapeFirst = 0;
      this.shapeSecond = 0;
      this.shapeThird = 0;
      this.skinFirst = 0;
      this.skinSecond = 0;
      this.skinThird = 0;
      this.shapeMix = 0;
      this.skinMix = 0;
      this.thirdMix = 0;
      this.voiceGameOutputSound = 0;
      i = this;
      Ue.init(i, {
        entityBlip: null
      });
    }
    get blip() {
      const e = Ue.peek(this)?.entityBlip;
      if (e?.handle && DoesBlipExist(e.handle)) {
        return e;
      } else {
        return 0;
      }
    }
    createBlip(e) {
      if (this.blip !== 0) {
        return;
      }
      const t = this.handle;
      if (!t || !DoesEntityExist(t)) {
        return;
      }
      const r = AddBlipForEntity(t);
      SetBlipSprite(r, e);
      SetBlipAsShortRange(r, true);
      const n = new We(k, 0, r);
      Be(n);
      le(globalThis.mp.blips, n);
      Ue.get(this).entityBlip = n;
    }
    setBlipColor(e) {
      const t = this.blip;
      if (t !== 0) {
        t.color = e;
      }
    }
    destroyBlip() {
      const e = Ue.get(this);
      const t = e.entityBlip;
      if (t) {
        if (t.handle && DoesBlipExist(t.handle)) {
          t.destroy();
        }
        e.entityBlip = null;
      }
    }
    get health() {
      return _(GetEntityHealth(this.handle));
    }
    set health(e) {
      SetEntityHealth(this.handle, O(e));
    }
    getHealth() {
      return _(GetEntityHealth(this.handle));
    }
    setHealth(e) {
      SetEntityHealth(this.handle, O(e));
    }
    get armour() {
      return GetPedArmour(this.handle);
    }
    set armour(e) {
      SetPedArmour(this.handle, e);
    }
    get weapon() {
      return GetSelectedPedWeapon(this.handle);
    }
    haveAllStreamingRequestsCompleted() {
      return HaveAllStreamingRequestsCompleted(this.handle);
    }
    canInCombatSeeTarget(e) {
      return CanPedInCombatSeeTarget(this.handle, e);
    }
    canKnockOffVehicle() {
      return CanKnockPedOffVehicle(this.handle);
    }
    canRagdoll() {
      return CanPedRagdoll(this.handle);
    }
    controlMountedWeapon() {
      return ControlMountedWeapon(this.handle);
    }
    forceMotionState(e, t, r, n) {
      return ForcePedMotionState(this.handle, e, !!t, r, !!n);
    }
    getAccuracy() {
      return GetPedAccuracy(this.handle);
    }
    getAlertness() {
      return GetPedAlertness(this.handle);
    }
    getAmmoInClip(e) {
      const [, t] = GetAmmoInClip(this.handle, e);
      return t;
    }
    getArmour() {
      return GetPedArmour(this.handle);
    }
    getBoneCoords(e, t, r, n) {
      return Te(GetPedBoneCoords(this.handle, e, t, r, n));
    }
    getBoneIndex(e) {
      return GetPedBoneIndex(this.handle, e);
    }
    getCauseOfDeath() {
      return GetPedCauseOfDeath(this.handle);
    }
    getCombatFloat(e) {
      return GetCombatFloat(this.handle, e);
    }
    getCombatMovement() {
      return GetPedCombatMovement(this.handle);
    }
    getCombatRange() {
      return GetPedCombatRange(this.handle);
    }
    getConfigFlag(e, t) {
      return GetPedConfigFlag(this.handle, e, t ?? true);
    }
    getDeadPickupCoords(e, t) {
      return Te(GetDeadPedPickupCoords(this.handle, e, t));
    }
    getDecorationsState() {
      return GetPedDecorationsState(this.handle);
    }
    getDefensiveAreaPosition(e) {
      return Te(GetPedDefensiveAreaPosition(this.handle, !!e));
    }
    getDesiredMoveBlendRatio() {
      return GetPedDesiredMoveBlendRatio(this.handle);
    }
    getDrawableVariation(e) {
      return GetPedDrawableVariation(this.handle, e);
    }
    getEnveffScale() {
      return GetPedEnveffScale(this.handle);
    }
    getExtractedDisplacement(e) {
      return Te(GetPedExtractedDisplacement(this.handle, !!e));
    }
    getGroupIndex() {
      return GetPedGroupIndex(this.handle);
    }
    getHeadOverlayValue(e) {
      return GetPedHeadOverlayValue(this.handle, e);
    }
    getIsTaskActive(e) {
      return GetIsTaskActive(this.handle, e);
    }
    getJackTarget() {
      return GetJackTarget(this.handle);
    }
    getLastDamageBone() {
      const [, e] = GetPedLastDamageBone(this.handle);
      return e;
    }
    getMeleeTargetFor() {
      return GetMeleeTargetForPed(this.handle);
    }
    getMoney() {
      return GetPedMoney(this.handle);
    }
    getMount() {
      return GetMount(this.handle);
    }
    getNavmeshRouteDistanceRemaining() {
      return GetNavmeshRouteDistanceRemaining(this.handle);
    }
    getNearbyPeds(e, t) {
      return GetPedNearbyPeds(this.handle, e, t ?? -1);
    }
    getNearbyVehicles(e) {
      return GetPedNearbyVehicles(this.handle, e);
    }
    getNumberOfDrawableVariations(e) {
      return GetNumberOfPedDrawableVariations(this.handle, e);
    }
    getNumberOfPropDrawableVariations(e) {
      return GetNumberOfPedPropDrawableVariations(this.handle, e);
    }
    getNumberOfPropTextureVariations(e, t) {
      return GetNumberOfPedPropTextureVariations(this.handle, e, t);
    }
    getNumberOfTextureVariations(e, t) {
      return GetNumberOfPedTextureVariations(this.handle, e, t);
    }
    getPaletteVariation(e) {
      return GetPedPaletteVariation(this.handle, e);
    }
    getParachuteLandingType() {
      return GetPedParachuteLandingType(this.handle);
    }
    getParachuteState() {
      return GetPedParachuteState(this.handle);
    }
    getParachuteTintIndex(e) {
      return GetPedParachuteTintIndex(this.handle);
    }
    getPhoneGestureAnimCurrentTime() {
      return GetPhoneGestureAnimCurrentTime(this.handle);
    }
    getPhoneGestureAnimTotalTime() {
      return GetPhoneGestureAnimTotalTime(this.handle);
    }
    getPlayerIsFollowing() {
      return GetPlayerPedIsFollowing(this.handle);
    }
    getPropIndex(e) {
      return GetPedPropIndex(this.handle, e);
    }
    getPropTextureIndex(e) {
      return GetPedPropTextureIndex(this.handle, e);
    }
    getRagdollBoneIndex(e) {
      return GetPedRagdollBoneIndex(this.handle, e);
    }
    getRelationshipBetweens(e) {
      GetRelationshipBetweenPeds(this.handle, e);
    }
    getRelationshipGroupDefaultHash() {
      return GetPedRelationshipGroupDefaultHash(this.handle);
    }
    getRelationshipGroupHash() {
      return GetPedRelationshipGroupHash(this.handle);
    }
    getResetFlag(e) {
      return GetPedResetFlag(this.handle, e);
    }
    getScriptTaskStatus(e) {
      return GetScriptTaskStatus(this.handle, e);
    }
    getSeatIsTryingToEnter() {
      return GetSeatPedIsTryingToEnter(this.handle);
    }
    getSequenceProgress() {
      return GetSequenceProgress(this.handle);
    }
    getsJacker() {
      return GetPedsJacker(this.handle);
    }
    getSourceOfDeath() {
      return GetPedSourceOfDeath(this.handle);
    }
    getTextureVariation(e) {
      return GetPedTextureVariation(this.handle, e);
    }
    getTimeOfDeath() {
      return GetPedTimeOfDeath(this.handle);
    }
    getVehicleIsIn(e) {
      return GetVehiclePedIsIn(this.handle, !!e);
    }
    getVehicleIsTryingToEnter() {
      return GetVehiclePedIsTryingToEnter(this.handle);
    }
    getVehicleIsUsing() {
      return GetVehiclePedIsUsing(this.handle);
    }
    hasHeadBlendFinished() {
      return HasPedHeadBlendFinished(this.handle);
    }
    isActiveInScenario() {
      return IsPedActiveInScenario(this.handle);
    }
    isAimingFromCover() {
      return IsPedAimingFromCover(this.handle);
    }
    isBeingArrested() {
      return IsPedBeingArrested(this.handle);
    }
    isBeingJacked() {
      return IsPedBeingJacked(this.handle);
    }
    isBeingStealthKilled() {
      return IsPedBeingStealthKilled(this.handle);
    }
    isBeingStunned(e) {
      return IsPedBeingStunned(this.handle, e ?? 0);
    }
    isComponentVariationValid(e, t, r) {
      return IsPedComponentVariationValid(this.handle, e, t, r);
    }
    isConversationDead() {
      return IsConversationPedDead(this.handle);
    }
    isCuffed() {
      return IsPedCuffed(this.handle);
    }
    isDead() {
      return IsEntityDead(this.handle);
    }
    isDeadOrDying(e) {
      return IsPedDeadOrDying(this.handle, e ?? true);
    }
    isDiving() {
      return IsPedDiving(this.handle);
    }
    isDoingDriveby() {
      return IsPedDoingDriveby(this.handle);
    }
    isDrivebyTaskUnderneathDrivingTask() {
      return IsDrivebyTaskUnderneathDrivingTask(this.handle);
    }
    isDucking() {
      return IsPedDucking(this.handle);
    }
    isEvasiveDiving(e) {
      const [t] = IsPedEvasiveDiving(this.handle);
      return t;
    }
    isFacingPed(e, t) {
      return IsPedFacingPed(this.handle, e, t);
    }
    isFalling() {
      return IsPedFalling(this.handle);
    }
    isFatallyInjured() {
      return IsPedFatallyInjured(this.handle);
    }
    isFleeing() {
      return IsPedFleeing(this.handle);
    }
    isGettingIntoAVehicle() {
      return IsPedGettingIntoAVehicle(this.handle);
    }
    isGettingUp() {
      return IsPedGettingUp(this.handle);
    }
    isGoingIntoCover() {
      return IsPedGoingIntoCover(this.handle);
    }
    isGroupMember(e) {
      return IsPedGroupMember(this.handle, e);
    }
    isHangingOnToVehicle() {
      return IsPedHangingOnToVehicle(this.handle);
    }
    isHeadtracking(e) {
      return IsPedHeadtrackingEntity(this.handle, e);
    }
    isHeadtrackingPed(e) {
      return IsPedHeadtrackingPed(this.handle, e);
    }
    isHuman() {
      return IsPedHuman(this.handle);
    }
    isHurt() {
      return IsPedHurt(this.handle);
    }
    isInAnyBoat() {
      return IsPedInAnyBoat(this.handle);
    }
    isInAnyHeli() {
      return IsPedInAnyHeli(this.handle);
    }
    isInAnyPlane() {
      return IsPedInAnyPlane(this.handle);
    }
    isInAnyPoliceVehicle() {
      return IsPedInAnyPoliceVehicle(this.handle);
    }
    isInAnySub() {
      return IsPedInAnySub(this.handle);
    }
    isInAnyTaxi() {
      return IsPedInAnyTaxi(this.handle);
    }
    isInAnyTrain() {
      return IsPedInAnyTrain(this.handle);
    }
    isInAnyVehicle(e) {
      return IsPedInAnyVehicle(this.handle, !!e);
    }
    isInCombat(e) {
      return IsPedInCombat(this.handle, e);
    }
    isInCoverFacingLeft() {
      return IsPedInCoverFacingLeft(this.handle);
    }
    isInFlyingVehicle() {
      return IsPedInFlyingVehicle(this.handle);
    }
    isInGroup() {
      return IsPedInGroup(this.handle);
    }
    isInjured() {
      return IsPedInjured(this.handle);
    }
    isInMeleeCombat() {
      return IsPedInMeleeCombat(this.handle);
    }
    isInModel(e) {
      return IsPedInModel(this.handle, e);
    }
    isInParachuteFreeFall() {
      return IsPedInParachuteFreeFall(this.handle);
    }
    isInVehicle(e, t) {
      return IsPedInVehicle(this.handle, e, !!t);
    }
    isInWrithe() {
      return IsPedInWrithe(this.handle);
    }
    isJacking() {
      return IsPedJacking(this.handle);
    }
    isJumpingOutOfVehicle() {
      return IsPedJumpingOutOfVehicle(this.handle);
    }
    isMale() {
      return IsPedMale(this.handle);
    }
    isModel(e) {
      return IsPedModel(this.handle, e);
    }
    isMountedWeaponTaskUnderneathDrivingTask() {
      return IsMountedWeaponTaskUnderneathDrivingTask(this.handle);
    }
    isMoveBlendRatioRunning() {
      return IsMoveBlendRatioRunning(this.handle);
    }
    isMoveBlendRatioSprinting() {
      return IsMoveBlendRatioSprinting(this.handle);
    }
    isMoveBlendRatioStill() {
      return IsMoveBlendRatioStill(this.handle);
    }
    isMoveBlendRatioWalking() {
      return IsMoveBlendRatioWalking(this.handle);
    }
    isOnAnyBike() {
      return IsPedOnAnyBike(this.handle);
    }
    isOnFoot() {
      return IsPedOnFoot(this.handle);
    }
    isOnMount() {
      return IsPedOnMount(this.handle);
    }
    isOnSpecificVehicle(e) {
      return IsPedOnSpecificVehicle(this.handle, e);
    }
    isOnVehicle() {
      return IsPedOnVehicle(this.handle);
    }
    isPerformingStealthKill() {
      return IsPedPerformingStealthKill(this.handle);
    }
    isPlantingBomb() {
      return IsPedPlantingBomb(this.handle);
    }
    isPlayingPhoneGestureAnim() {
      return IsPlayingPhoneGestureAnim(this.handle);
    }
    isProne() {
      return IsPedProne(this.handle);
    }
    isRagdoll() {
      return IsPedRagdoll(this.handle);
    }
    isReloading() {
      return IsPedReloading(this.handle);
    }
    isRunning() {
      return IsPedRunning(this.handle);
    }
    isRunningArrestTask() {
      return IsPedRunningArrestTask(this.handle);
    }
    isRunningMobilePhoneTask() {
      return IsPedRunningMobilePhoneTask(this.handle);
    }
    isRunningRagdollTask() {
      return IsPedRunningRagdollTask(this.handle);
    }
    isScriptedScenarioUsingConditionalAnim(e, t) {
      return IsScriptedScenarioPedUsingConditionalAnim(this.handle, e, t);
    }
    isShooting() {
      return IsPedShooting(this.handle);
    }
    isShootingInArea(e, t, r, n, i, a, o, s) {
      return IsPedShootingInArea(this.handle, e, t, r, n, i, a, !!o, !!s);
    }
    isSittingInAnyVehicle() {
      return IsPedSittingInAnyVehicle(this.handle);
    }
    isSittingInVehicle(e) {
      return IsPedSittingInVehicle(this.handle, e);
    }
    isSprinting() {
      return IsPedSprinting(this.handle);
    }
    isStill() {
      return IsPedStill(this.handle);
    }
    isStopped() {
      return IsPedStopped(this.handle);
    }
    isStrafing() {
      return IsPedStrafing(this.handle);
    }
    isSwimming() {
      return IsPedSwimming(this.handle);
    }
    isSwimmingUnderWater() {
      return IsPedSwimmingUnderWater(this.handle);
    }
    isTracked() {
      return IsPedTracked(this.handle);
    }
    isTrackedVisible() {
      return IsTrackedPedVisible(this.handle);
    }
    isTryingToEnterALockedVehicle() {
      return IsPedTryingToEnterALockedVehicle(this.handle);
    }
    isUsingActionMode() {
      return IsPedUsingActionMode(this.handle);
    }
    isUsingAnyScenario() {
      return IsPedUsingAnyScenario(this.handle);
    }
    isUsingScenario(e) {
      return IsPedUsingScenario(this.handle, e);
    }
    isVaulting() {
      return IsPedVaulting(this.handle);
    }
    isWalking() {
      return IsPedWalking(this.handle);
    }
    isWearingHelmet() {
      return IsPedWearingHelmet(this.handle);
    }
    wasKilledByStealth() {
      return WasPedKilledByStealth(this.handle);
    }
    wasKilledByTakedown() {
      return WasPedKilledByTakedown(this.handle);
    }
    wasSkeletonUpdated() {
      return WasPedSkeletonUpdated(this.handle);
    }
    applyBlood(e, t, r, n, i) {
      ApplyPedBlood(this.handle, e, t, r, n, i);
    }
    applyBloodByZone(e, t, r, n) {
      ApplyPedBloodByZone(this.handle, e, t, r, n);
    }
    applyBloodDamageByZone(e, t, r, n) {
      ApplyPedBloodDamageByZone(this.handle, e, t, r, n);
    }
    applyBloodSpecific(e, t, r, n, i, a, o, s) {
      ApplyPedBloodSpecific(this.handle, e, t, r, n, i, a, o, s);
    }
    applyDamageDecal(e, t, r, n, i, a, o, s, l) {
      ApplyPedDamageDecal(this.handle, e, t, r, n, i, a, o, !!s, l);
    }
    applyDamagePack(e, t, r) {
      ApplyPedDamagePack(this.handle, e, t, r);
    }
    applyDamageTo(e, t, r) {
      ApplyDamageToPed(this.handle, e, !!t, r ?? 0, 0);
    }
    clearBloodDamage() {
      ClearPedBloodDamage(this.handle);
    }
    clearBloodDamageByZone(e) {
      ClearPedBloodDamageByZone(this.handle, e);
    }
    clearDamageDecalByZone(e, t) {
      ClearPedDamageDecalByZone(this.handle, e, t);
    }
    clearDecorations() {
      ClearPedDecorations(this.handle);
    }
    clearFacialDecorations() {
      ClearPedFacialDecorations(this.handle);
    }
    resetVisibleDamage() {
      ResetPedVisibleDamage(this.handle);
    }
    setDecoration(e, t) {
      AddPedDecorationFromHashes(this.handle, e, t);
    }
    setFacialDecoration(e, t) {
      SetPedFacialDecoration(this.handle, e, t);
    }
    clearAllProps() {
      ClearAllPedProps(this.handle);
    }
    clearProp(e) {
      ClearPedProp(this.handle, e);
    }
    isPropValid(e, t, r) {
      return IsPedPropValid(this.handle, e, t, r);
    }
    knockOffProp(e, t, r, n) {
      KnockOffPedProp(this.handle, !!e, !!t, !!r, !!n);
    }
    setComponentVariation(e, t, r, n) {
      SetPedComponentVariation(this.handle, e, t, r, n ?? 0);
    }
    setDefaultComponentVariation() {
      SetPedDefaultComponentVariation(this.handle);
    }
    setEyeColor(e) {
      SetPedEyeColor(this.handle, e);
    }
    setFaceFeature(e, t) {
      SetPedFaceFeature(this.handle, e, t);
    }
    setHairColor(e, t) {
      SetPedHairTint(this.handle, e, t ?? 0);
    }
    setHeadOverlay(e, t, r, n, i) {
      SetPedHeadOverlay(this.handle, e, t, r ?? 1);
      if (n !== undefined) {
        SetPedHeadOverlayColor(this.handle, e, 1, n, i ?? 0);
      }
    }
    setHeadOverlayColor(e, t, r, n) {
      SetPedHeadOverlayColor(this.handle, e, t, r, n ?? 0);
    }
    setPropIndex(e, t, r, n) {
      SetPedPropIndex(this.handle, e, t, r, n ?? true);
    }
    setRandomComponentVariation(e) {
      SetPedRandomComponentVariation(this.handle, e ?? 0);
    }
    setRandomProps() {
      SetPedRandomProps(this.handle);
    }
    setHeadBlendData(e, t, r, n, i, a, o, s, l, d) {
      SetPedHeadBlendData(this.handle, e, t, r ?? 0, n, i, a ?? 0, o, s, l ?? 0, !!d);
    }
    updateHeadBlendData(e, t, r) {
      UpdatePedHeadBlendData(this.handle, e, t, r);
    }
    giveHelmet(e, t, r) {
      GivePedHelmet(this.handle, !!e, t, r);
    }
    removeHelmet(e) {
      RemovePedHelmet(this.handle, e ?? true);
    }
    setHelmet(e) {
      SetPedHelmet(this.handle, !!e);
    }
    setHelmetFlag(e) {
      SetPedHelmetFlag(this.handle, e);
    }
    setHelmetPropIndex(e) {
      SetPedHelmetPropIndex(this.handle, e, true);
    }
    setHelmetTextureIndex(e) {
      SetPedHelmetTextureIndex(this.handle, e);
    }
    giveWeapon(e, t, r) {
      GiveWeaponToPed(this.handle, e, t, false, r ?? true);
    }
    removeWeapon(e) {
      RemoveWeaponFromPed(this.handle, e);
    }
    removeAllWeapons() {
      RemoveAllPedWeapons(this.handle, true);
    }
    setAmmoInClip(e, t) {
      SetAmmoInClip(this.handle, e, t);
    }
    setFiringPattern(e) {
      SetPedFiringPattern(this.handle, e);
    }
    setShootRate(e) {
      SetPedShootRate(this.handle, e);
    }
    setShootsAtCoord(e, t, r, n) {
      SetPedShootsAtCoord(this.handle, e, t, r, n ?? true);
    }
    setCanSwitchWeapon(e) {
      SetPedCanSwitchWeapon(this.handle, !!e);
    }
    setEnableWeaponBlocking(e) {
      SetPedEnableWeaponBlocking(this.handle, !!e);
    }
    stopWeaponFiringWhenDropped() {
      StopPedWeaponFiringWhenDropped(this.handle);
    }
    clone(e, t, r) {
      return ClonePed(this.handle, t ?? false, r ?? false, true);
    }
    cloneToTarget(e) {
      ClonePedToTarget(this.handle, e);
    }
    resurrect() {
      ResurrectPed(this.handle);
    }
    reviveInjured() {
      ReviveInjuredPed(this.handle);
    }
    setToRagdoll(e, t, r, n, i, a) {
      return SetPedToRagdoll(this.handle, e, t, r, n ?? true, i ?? true, !!a);
    }
    setRagdollForceFall() {
      SetPedRagdollForceFall(this.handle);
    }
    setRagdollOnCollision(e) {
      SetPedRagdollOnCollision(this.handle, !!e);
    }
    setCanRagdoll(e) {
      SetPedCanRagdoll(this.handle, !!e);
    }
    setCanRagdollFromPlayerImpact(e) {
      SetPedCanRagdollFromPlayerImpact(this.handle, !!e);
    }
    resetRagdollTimer() {
      ResetPedRagdollTimer(this.handle);
    }
    setRagdollFlag(e) {
      SetRagdollBlockingFlags(this.handle, e);
    }
    setResetRagdollFlag(e) {
      ClearRagdollBlockingFlags(this.handle, e);
    }
    forceToOpenParachute() {
      ForcePedToOpenParachute(this.handle);
    }
    setParachuteTaskTarget(e, t, r) {
      SetParachuteTaskTarget(this.handle, e, t, r);
    }
    setParachuteTaskThrust(e) {
      SetParachuteTaskThrust(this.handle, e);
    }
    setParachuteTintIndex(e) {
      SetPedParachuteTintIndex(this.handle, e);
    }
    removeFromGroup() {
      RemovePedFromGroup(this.handle);
    }
    setAsGroupLeader(e) {
      SetPedAsGroupLeader(this.handle, e);
    }
    setAsGroupMember(e) {
      SetPedAsGroupMember(this.handle, e);
    }
    setGroupMemberPassengerIndex(e) {
      SetPedGroupMemberPassengerIndex(this.handle, e);
    }
    setNeverLeavesGroup(e) {
      SetPedNeverLeavesGroup(this.handle, !!e);
    }
    setCanTeleportToGroupLeader(e, t) {
      SetPedCanTeleportToGroupLeader(this.handle, e, !!t);
    }
    setRelationshipGroupDefaultHash(e) {
      SetPedRelationshipGroupDefaultHash(this.handle, e);
    }
    setRelationshipGroupHash(e) {
      SetPedRelationshipGroupHash(this.handle, e);
    }
    registerHatedTargetsAround(e) {
      RegisterHatedTargetsAroundPed(this.handle, e);
    }
    registerTarget(e) {
      RegisterTarget(this.handle, e);
    }
    removeDefensiveArea(e) {
      RemovePedDefensiveArea(this.handle, !!e);
    }
    removePreferredCoverSet() {
      RemovePedPreferredCoverSet(this.handle);
    }
    resetInVehicleContext() {
      ResetPedInVehicleContext(this.handle);
    }
    resetLastVehicle() {
      ResetPedLastVehicle(this.handle);
    }
    resetMovementClipset(e) {
      ResetPedMovementClipset(this.handle, e ?? 0);
    }
    resetStrafeClipset() {
      ResetPedStrafeClipset(this.handle);
    }
    resetWeaponMovementClipset() {
      ResetPedWeaponMovementClipset(this.handle);
    }
    setAccuracy(e) {
      SetPedAccuracy(this.handle, e);
    }
    setAlertness(e) {
      SetPedAlertness(this.handle, e);
    }
    setAllowedToDuck(e) {
      SetPedAllowedToDuck(this.handle, !!e);
    }
    setAllowVehiclesOverride(e) {
      SetPedAllowVehiclesOverride(this.handle, !!e);
    }
    setAlternateMovementAnim(e, t, r, n, i) {
      SetPedAlternateMovementAnim(this.handle, e, t, r, n, !!i);
    }
    clearAlternateMovementAnim(e, t) {
      ClearPedAlternateMovementAnim(this.handle, e, t);
    }
    setAngledDefensiveArea(e, t, r, n, i, a, o, s, l) {
      SetPedAngledDefensiveArea(this.handle, e, t, r, n, i, a, o, !!s, !!l);
    }
    setArmour(e) {
      SetPedArmour(this.handle, e);
    }
    setAsCop(e) {
      SetPedAsCop(this.handle, !!e);
    }
    setAsEnemy(e) {
      SetPedAsEnemy(this.handle, !!e);
    }
    setBlendFromParents(e, t, r, n) {
      SetPedBlendFromParents(this.handle, e, t, r, n);
    }
    setBlockingOfNonTemporaryEvents(e) {
      SetBlockingOfNonTemporaryEvents(this.handle, !!e);
    }
    setBoundsOrientation(e, t, r, n, i) {
      SetPedBoundsOrientation(this.handle, e, t, r, n, i);
    }
    setCanArmIk(e) {
      SetPedCanArmIk(this.handle, !!e);
    }
    setCanAttackFriendly(e, t) {
      SetCanAttackFriendly(this.handle, !!e, !!t);
    }
    setCanBeDraggedOut(e) {
      SetPedCanBeDraggedOut(this.handle, !!e);
    }
    setCanBeKnockedOffVehicle(e) {
      SetPedCanBeKnockedOffVehicle(this.handle, e);
    }
    setCanBeShotInVehicle(e) {
      SetPedCanBeShotInVehicle(this.handle, !!e);
    }
    setCanBeTargetedWhenInjured(e) {
      SetPedCanBeTargetedWhenInjured(this.handle, !!e);
    }
    setCanLosePropsOnDamage(e, t) {
      SetPedCanLosePropsOnDamage(this.handle, !!e, t ?? 0);
    }
    setCanBeTargetted(e) {
      SetPedCanBeTargetted(this.handle, !!e);
    }
    setCanBeTargettedByPlayer(e, t) {
      SetPedCanBeTargettedByPlayer(this.handle, e, !!t);
    }
    setCanBeTargettedByTeam(e, t) {
      SetPedCanBeTargettedByTeam(this.handle, e, !!t);
    }
    setCanCowerInCover(e) {
      SetPedCanCowerInCover(this.handle, !!e);
    }
    setCanEvasiveDive(e) {
      SetPedCanEvasiveDive(this.handle, !!e);
    }
    setCanHeadIk(e) {
      SetPedCanHeadIk(this.handle, !!e);
    }
    setCanLegIk(e) {
      SetPedCanLegIk(this.handle, !!e);
    }
    setCanPeekInCover(e) {
      SetPedCanPeekInCover(this.handle, !!e);
    }
    setCanPlayAmbientAnims(e) {
      SetPedCanPlayAmbientAnims(this.handle, !!e);
    }
    setCanPlayAmbientBaseAnims(e) {
      SetPedCanPlayAmbientBaseAnims(this.handle, !!e);
    }
    setCanPlayGestureAnims(e) {
      SetPedCanPlayGestureAnims(this.handle, !!e);
    }
    setCanPlayVisemeAnims(e, t) {
      SetPedCanPlayVisemeAnims(this.handle, !!e, !!t);
    }
    setCanSmashGlass(e, t) {
      SetPedCanSmashGlass(this.handle, !!e, !!t);
    }
    setCanTorsoIk(e) {
      SetPedCanTorsoIk(this.handle, !!e);
    }
    setCanUseAutoConversationLookat(e) {
      SetPedCanUseAutoConversationLookat(this.handle, !!e);
    }
    setCapsule(e) {
      SetPedCapsule(this.handle, e);
    }
    setCombatAbility(e) {
      SetPedCombatAbility(this.handle, e);
    }
    setCombatAttributes(e, t) {
      SetPedCombatAttributes(this.handle, e, !!t);
    }
    setCombatFloat(e, t) {
      SetCombatFloat(this.handle, e, t);
    }
    setCombatMovement(e) {
      SetPedCombatMovement(this.handle, e);
    }
    setCombatRange(e) {
      SetPedCombatRange(this.handle, e);
    }
    setConfigFlag(e, t) {
      SetPedConfigFlag(this.handle, e, !!t);
    }
    setCoordsKeepVehicle(e, t, r) {
      SetPedCoordsKeepVehicle(this.handle, e, t, r);
    }
    setCoordsNoGang(e, t, r) {
      SetPedCoordsNoGang(this.handle, e, t, r);
    }
    setCowerHash(e) {
      SetPedCowerHash(this.handle, e);
    }
    setDefensiveAreaDirection(e, t, r, n) {
      SetPedDefensiveAreaDirection(this.handle, e, t, r, !!n);
    }
    setDefensiveSphereAttachedToPed(e, t, r, n, i, a) {
      SetPedDefensiveSphereAttachedToPed(this.handle, e, t, r, n, i, !!a);
    }
    setDesiredHeading(e) {
      SetPedDesiredHeading(this.handle, e);
    }
    setDesiredMoveBlendRatio(e) {
      SetPedDesiredMoveBlendRatio(this.handle, e);
    }
    setDiesInSinkingVehicle(e) {
      SetPedDiesInSinkingVehicle(this.handle, !!e);
    }
    setDiesInstantlyInWater(e) {
      SetPedDiesInstantlyInWater(this.handle, !!e);
    }
    setDiesInVehicle(e) {
      SetPedDiesInVehicle(this.handle, !!e);
    }
    setDiesInWater(e) {
      SetPedDiesInWater(this.handle, !!e);
    }
    setDiesWhenInjured(e) {
      SetPedDiesWhenInjured(this.handle, !!e);
    }
    setDriveByClipsetOverride(e) {
      SetPedDriveByClipsetOverride(this.handle, e);
    }
    clearDriveByClipsetOverride() {
      ClearPedDriveByClipsetOverride(this.handle);
    }
    clearDrivebyTaskUnderneathDrivingTask() {
      ClearDrivebyTaskUnderneathDrivingTask(this.handle);
    }
    setDriverAbility(e) {
      SetDriverAbility(this.handle, e);
    }
    setDriverAggressiveness(e) {
      SetDriverAggressiveness(this.handle, e);
    }
    setDriveTaskCruiseSpeed(e) {
      SetDriveTaskCruiseSpeed(this.handle, e);
    }
    setDriveTaskDrivingStyle(e) {
      SetDriveTaskDrivingStyle(this.handle, e);
    }
    setDucking(e) {
      SetPedDucking(this.handle, !!e);
    }
    setEnableBoundAnkles(e) {
      SetEnableBoundAnkles(this.handle, !!e);
    }
    setEnableEnveffScale(e) {
      SetEnablePedEnveffScale(this.handle, !!e);
    }
    setEnableHandcuffs(e) {
      SetEnableHandcuffs(this.handle, !!e);
    }
    setEnableScuba(e) {
      SetEnableScuba(this.handle, !!e);
    }
    setEnveffScale(e) {
      SetPedEnveffScale(this.handle, e);
    }
    setExclusivePhoneRelationships() {
      return SetExclusivePhoneRelationships(this.handle);
    }
    setFacialIdleAnimOverride(e, t) {
      SetFacialIdleAnimOverride(this.handle, e, t);
    }
    clearFacialIdleAnimOverride() {
      ClearFacialIdleAnimOverride(this.handle);
    }
    setFleeAttributes(e, t) {
      SetPedFleeAttributes(this.handle, e, !!t);
    }
    getFloodInvincibility(e) {
      SetPedFloodInvincibility(this.handle, !!e);
    }
    setGeneratesDeadBodyEvents(e) {
      SetPedGeneratesDeadBodyEvents(this.handle, !!e);
    }
    setGestureGroup(e) {
      SetPedGestureGroup(this.handle, e);
    }
    setGetOutUpsideDownVehicle(e) {
      SetPedGetOutUpsideDownVehicle(this.handle, !!e);
    }
    setGravity(e) {
      SetPedGravity(this.handle, !!e);
    }
    setHearingRange(e) {
      SetPedHearingRange(this.handle, e);
    }
    setHighFallTask(e, t, r) {
      SetHighFallTask(this.handle, e, t, r);
    }
    setIdRange(e) {
      SetPedIdRange(this.handle, e);
    }
    setIntoVehicle(e, t) {
      SetPedIntoVehicle(this.handle, e, t);
    }
    setInVehicleContext(e) {
      SetPedInVehicleContext(this.handle, e);
    }
    setKeepTask(e) {
      SetPedKeepTask(this.handle, !!e);
    }
    setLegIkMode(e) {
      SetPedLegIkMode(this.handle, e);
    }
    setLodMultiplier(e) {
      SetPedLodMultiplier(this.handle, e);
    }
    setMaxMoveBlendRatio(e) {
      SetPedMaxMoveBlendRatio(this.handle, e);
    }
    setMaxTimeInWater(e) {
      SetPedMaxTimeInWater(this.handle, e);
    }
    setMaxTimeUnderwater(e) {
      SetPedMaxTimeUnderwater(this.handle, e);
    }
    setMinGroundTimeForStungun(e) {
      SetPedMinGroundTimeForStungun(this.handle, e);
    }
    setMinMoveBlendRatio(e) {
      SetPedMinMoveBlendRatio(this.handle, e);
    }
    setModelIsSuppressed(e) {
      SetPedModelIsSuppressed(this.model, !!e);
    }
    setMoney(e) {
      SetPedMoney(this.handle, e);
    }
    setMotionBlur(e) {
      SetEntityMotionBlur(this.handle, !!e);
    }
    setMountedWeaponTarget(e, t, r, n, i) {
      SetMountedWeaponTarget(this.handle, e, t, r, n, i, 0, false);
    }
    setMoveAnimsBlendOut() {
      SetPedMoveAnimsBlendOut(this.handle);
    }
    setMovementClipset(e, t) {
      SetPedMovementClipset(this.handle, e, t ?? 1);
    }
    setMoveRateOverride(e) {
      SetPedMoveRateOverride(this.handle, e);
    }
    setNameDebug(e) {
      SetPedNameDebug(this.handle, e);
    }
    setPathAvoidFire(e) {
      SetPedPathAvoidFire(this.handle, !!e);
    }
    setPathCanDropFromHeight(e) {
      SetPedPathCanDropFromHeight(this.handle, !!e);
    }
    setPathCanUseClimbovers(e) {
      SetPedPathCanUseClimbovers(this.handle, !!e);
    }
    setPathCanUseLadders(e) {
      SetPedPathCanUseLadders(this.handle, !!e);
    }
    setPathPreferToAvoidWater(e) {
      SetPedPathPreferToAvoidWater(this.handle, !!e);
    }
    setPathsWidthPlant(e) {
      SetPedPathsWidthPlant(this.handle, !!e);
    }
    setPinnedDown(e, t) {
      SetPedPinnedDown(this.handle, !!e, t);
    }
    setPlaysHeadOnHornAnimWhenDiesInVehicle(e) {
      SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(this.handle, !!e);
    }
    setPreferredCoverSet(e) {
      SetPedPreferredCoverSet(this.handle, e);
    }
    setPrimaryLookat(e) {
      SetPedPrimaryLookat(this.handle, e);
    }
    setResetFlag(e, t) {
      SetPedResetFlag(this.handle, e, !!t);
    }
    resetConfigFlag(e) {
      SetPedResetFlag(this.handle, e, true);
    }
    setResetFlagPreferRearSeats(e) {
      SetPedResetFlagPreferRearSeats(this.handle, e);
    }
    setScriptedAnimSeatOffset(e) {
      SetScriptedAnimSeatOffset(this.handle, e);
    }
    setSeeingRange(e) {
      SetPedSeeingRange(this.handle, e);
    }
    setSphereDefensiveArea(e, t, r, n, i, a) {
      SetPedSphereDefensiveArea(this.handle, e, t, r, n, !!i, !!a);
    }
    setStayInVehicleWhenJacked(e) {
      SetPedStayInVehicleWhenJacked(this.handle, !!e);
    }
    setStealthMovement(e, t) {
      SetPedStealthMovement(this.handle, !!e, t);
    }
    setSteersAroundObjects(e) {
      SetPedSteersAroundObjects(this.handle, !!e);
    }
    setSteersAroundPeds(e) {
      SetPedSteersAroundPeds(this.handle, !!e);
    }
    setSteersAroundVehicles(e) {
      SetPedSteersAroundVehicles(this.handle, !!e);
    }
    setStrafeClipset(e) {
      SetPedStrafeClipset(this.handle, e);
    }
    setSuffersCriticalHits(e) {
      SetPedSuffersCriticalHits(this.handle, !!e);
    }
    setSweat(e) {
      SetPedSweat(this.handle, e);
    }
    setTargetLossResponse(e) {
      SetPedTargetLossResponse(this.handle, e);
    }
    setTaskVehicleChaseBehaviorFlag(e, t) {
      SetTaskVehicleChaseBehaviorFlag(this.handle, e, !!t);
    }
    setTaskVehicleChaseIdealPursuitDistance(e) {
      SetTaskVehicleChaseIdealPursuitDistance(this.handle, e);
    }
    setToInformRespectedFriends(e, t) {
      SetPedToInformRespectedFriends(this.handle, e, t);
    }
    setToLoadCover(e) {
      SetPedToLoadCover(this.handle, !!e);
    }
    setUsingActionMode(e, t, r) {
      SetPedUsingActionMode(this.handle, !!e, t, r);
    }
    setVisualFieldCenterAngle(e) {
      SetPedVisualFieldCenterAngle(this.handle, e);
    }
    setVisualFieldMaxAngle(e) {
      SetPedVisualFieldMaxAngle(this.handle, e);
    }
    setVisualFieldMaxElevationAngle(e) {
      SetPedVisualFieldMaxElevationAngle(this.handle, e);
    }
    setVisualFieldMinAngle(e) {
      SetPedVisualFieldMinAngle(this.handle, e);
    }
    setVisualFieldMinElevationAngle(e) {
      SetPedVisualFieldMinElevationAngle(this.handle, e);
    }
    setVisualFieldPeripheralRange(e) {
      SetPedVisualFieldPeripheralRange(this.handle, e);
    }
    setWeaponMovementClipset(e) {
      SetPedWeaponMovementClipset(this.handle, e);
    }
    setWetnessEnabledThisFrame() {
      SetPedWetnessEnabledThisFrame(this.handle);
    }
    setWetnessHeight(e) {
      SetPedWetnessHeight(this.handle, e);
    }
    clearWetness() {
      ClearPedWetness(this.handle);
    }
    giveNmMessage() {
      GivePedNmMessage(this.handle);
    }
    knockOffVehicle() {
      KnockPedOffVehicle(this.handle);
    }
    playAnimOnRunningScenario(e, t) {
      PlayAnimOnRunningScenario(this.handle, e, t);
    }
    playFacialAnim(e, t) {
      PlayFacialAnim(this.handle, e, t);
    }
    uncuff() {
      UncuffPed(this.handle);
    }
    clearLastDamageBone() {
      ClearPedLastDamageBone(this.handle);
    }
    registerheadshot() {
      return RegisterPedheadshot(this.handle);
    }
    unregisterheadshot() {
      UnregisterPedheadshot(this.handle);
    }
    stopAnimPlayback(e, t) {
      StopAnimPlayback(this.handle, e, !!t);
    }
    stopAnimTask(e, t, r) {
      StopAnimTask(this.handle, e, t, r);
    }
    clearTasks() {
      ClearPedTasks(this.handle);
    }
    clearTasksImmediately() {
      ClearPedTasksImmediately(this.handle);
    }
    taskPlayAnim(e, t, r, n, i, a, o, s, l, d) {
      TaskPlayAnim(this.handle, e, t, r ?? 8, n ?? -1, i ?? -1, a ?? 0, o ?? 0, !!s, !!l, !!d);
    }
    taskAchieveHeading(e, t) {
      TaskAchieveHeading(this.handle, e, t ?? 0);
    }
    taskAimGunAt(e, t, r) {
      TaskAimGunAtEntity(this.handle, e, t, !!r);
    }
    taskAimGunAtCoord(e, t, r, n, i, a) {
      TaskAimGunAtCoord(this.handle, e, t, r, n, !!i, !!a);
    }
    taskAimGunScripted(e, t, r) {
      TaskAimGunScripted(this.handle, e, !!t, !!r);
    }
    taskArrest(e) {
      TaskArrestPed(this.handle, e);
    }
    taskBoatMission(e, t, r, n, i, a, o, s, l, d, c) {
      TaskBoatMission(this.handle, e, t, r, n, i, a, o, s, l, d, c);
    }
    taskChatTo(e, t, r, n, i, a, o) {
      TaskChatToPed(this.handle, e, t, r, n, i, a, o);
    }
    taskClearLookAt() {
      TaskClearLookAt(this.handle);
    }
    taskClimb(e) {
      TaskClimb(this.handle, e ?? true);
    }
    taskClimbLadder(e) {
      TaskClimbLadder(this.handle, e);
    }
    taskCombat(e, t, r) {
      TaskCombatPed(this.handle, e, t ?? 0, r ?? 16);
    }
    taskCombatHatedTargetsAround(e, t) {
      TaskCombatHatedTargetsAroundPed(this.handle, e, t ?? 0);
    }
    taskCombatHatedTargetsInArea(e, t, r, n, i) {
      TaskCombatHatedTargetsInArea(this.handle, e, t, r, n, i ?? 0);
    }
    taskCower(e) {
      TaskCower(this.handle, e);
    }
    taskEnterVehicle(e, t, r, n, i, a) {
      TaskEnterVehicle(this.handle, e, t ?? -1, r ?? -1, n ?? 1, i ?? 1, a);
    }
    taskFollowPointRoute(e, t) {
      TaskFollowPointRoute(this.handle, e, t);
    }
    taskFollowToOffsetOf(e, t, r, n, i, a, o, s) {
      TaskFollowToOffsetOfEntity(this.handle, e, t, r, n, i, a, o, !!s);
    }
    taskForceMotionState(e, t) {
      TaskForceMotionState(this.handle, e, !!t);
    }
    taskGetOffBoat(e) {
      TaskGetOffBoat(this.handle, e);
    }
    taskGotoAiming(e, t, r) {
      TaskGotoEntityAiming(this.handle, e, t, r);
    }
    taskGoStraightToCoord(e, t, r, n, i, a, o) {
      TaskGoStraightToCoord(this.handle, e, t, r, n, i, a, o);
    }
    taskGoToCoordAnyMeans(e, t, r, n, i, a, o, s) {
      TaskGoToCoordAnyMeans(this.handle, e, t, r, n, i ?? 0, !!a, o ?? 786603, s ?? 0);
    }
    taskGuardCurrentPosition(e, t, r) {
      TaskGuardCurrentPosition(this.handle, e, t, !!r);
    }
    taskHandsUp(e, t, r, n) {
      TaskHandsUp(this.handle, e, t ?? 0, r ?? -1, !!n);
    }
    taskHeliChase(e, t, r, n) {
      TaskHeliChase(this.handle, e, t, r, n);
    }
    taskJump(e, t, r) {
      TaskJump(this.handle, e ?? true, !!t, !!r);
    }
    taskLeaveAnyVehicle(e, t) {
      TaskLeaveAnyVehicle(this.handle, e ?? 0, t ?? 0);
    }
    taskLeaveVehicle(e, t) {
      TaskLeaveVehicle(this.handle, e, t ?? 0);
    }
    taskLookAt(e, t, r, n) {
      TaskLookAtEntity(this.handle, e, t, r ?? 0, n ?? 2);
    }
    taskMoveNetwork(e, t, r, n, i) {
      TaskMoveNetworkByName(this.handle, e, t ?? 0, r ?? true, n ?? "", i ?? 0);
    }
    taskOpenVehicleDoor(e, t, r, n) {
      TaskOpenVehicleDoor(this.handle, e, t, r, n ?? 1);
    }
    taskParachute(e) {
      TaskParachute(this.handle, e ?? true, false);
    }
    taskParachuteToTarget(e, t, r) {
      TaskParachuteToTarget(this.handle, e, t, r);
    }
    taskPatrol(e, t, r, n) {
      TaskPatrol(this.handle, e, t, !!r, !!n);
    }
    taskPause(e) {
      TaskPause(this.handle, e);
    }
    taskPerformSequence(e) {
      TaskPerformSequence(this.handle, e);
    }
    taskPlaneChase(e, t, r, n) {
      TaskPlaneChase(this.handle, e, t, r, n);
    }
    taskPlantBomb(e, t, r, n) {
      TaskPlantBomb(this.handle, e, t, r, n);
    }
    taskPlayPhoneGestureAnimation(e, t, r, n, i, a, o) {
      TaskPlayPhoneGestureAnimation(this.handle, e, t, r, n, i, !!a, !!o);
    }
    taskPutDirectlyIntoMelee(e, t, r, n, i) {
      TaskPutPedDirectlyIntoMelee(this.handle, e, t ?? 0, r ?? -1, n ?? 0, i ?? 0);
    }
    taskRappelFromHeli(e) {
      TaskRappelFromHeli(this.handle, e);
    }
    taskReactAndFlee(e) {
      TaskReactAndFleePed(this.handle, e);
    }
    taskReloadWeapon(e) {
      TaskReloadWeapon(this.handle, e ?? true);
    }
    taskScriptedAnimation(e, t, r, n, i) {
      TaskScriptedAnimation(this.handle, e, t, r, n, i);
    }
    taskSeekCoverFrom(e, t, r) {
      TaskSeekCoverFromPed(this.handle, e, t, !!r);
    }
    taskSeekCoverToCoords(e, t, r, n, i, a, o, s) {
      TaskSeekCoverToCoords(this.handle, e, t, r, n, i, a, o ?? -1, !!s);
    }
    taskSetBlockingOfNonTemporaryEvents(e) {
      TaskSetBlockingOfNonTemporaryEvents(this.handle, !!e);
    }
    taskSetDecisionMaker(e) {
      TaskSetDecisionMaker(this.handle, e);
    }
    taskShockingEventReact(e) {
      TaskShockingEventReact(this.handle, e);
    }
    taskShootAtCoord(e, t, r, n, i) {
      TaskShootAtCoord(this.handle, e, t, r, n, i);
    }
    taskShuffleToNextVehicleSeat(e) {
      TaskShuffleToNextVehicleSeat(this.handle, e, false);
    }
    taskSkyDive() {
      TaskSkyDive(this.handle, false);
    }
    taskSlideToCoord(e, t, r, n, i) {
      TaskPedSlideToCoord(this.handle, e, t, r, n, i);
    }
    taskSlideToCoordHdgRate(e, t, r, n, i, a) {
      TaskPedSlideToCoordHdgRate(this.handle, e, t, r, n, i, a);
    }
    taskSmartFlee(e, t, r, n, i) {
      TaskSmartFleePed(this.handle, e, t, r, !!n, !!i);
    }
    taskSmartFleeCoord(e, t, r, n, i, a, o) {
      TaskSmartFleeCoord(this.handle, e, t, r, n, i, !!a, !!o);
    }
    taskStandGuard(e, t, r, n, i) {
      TaskStandGuard(this.handle, e, t, r, n, i);
    }
    taskStandStill(e) {
      TaskStandStill(this.handle, e);
    }
    taskStartScenarioInPlace(e, t, r) {
      TaskStartScenarioInPlace(this.handle, e, t ?? 0, !!r);
    }
    taskStayInCover() {
      TaskStayInCover(this.handle);
    }
    taskStealthKill(e, t, r, n) {
      TaskStealthKill(this.handle, e, t, r ?? 1, n ?? 0);
    }
    taskStopPhoneGestureAnimation() {
      TaskStopPhoneGestureAnimation(this.handle, 0);
    }
    taskSwapWeapon(e) {
      TaskSwapWeapon(this.handle, !!e);
    }
    taskSweepAim(e, t, r, n, i, a, o, s) {
      TaskSweepAimEntity(this.handle, e, t, r, n, i, a, o, s);
    }
    taskTurnToFace(e, t) {
      TaskTurnPedToFaceEntity(this.handle, e, t);
    }
    taskTurnToFaceCoord(e, t, r, n) {
      TaskTurnPedToFaceCoord(this.handle, e, t, r, n);
    }
    taskUseMobilePhone(e) {
      TaskUseMobilePhone(this.handle, !!e, -1);
    }
    taskUseMobilePhoneTimed(e) {
      TaskUseMobilePhoneTimed(this.handle, e);
    }
    taskUseNearestScenarioToCoordWarp(e, t, r, n, i) {
      TaskUseNearestScenarioToCoordWarp(this.handle, e, t, r, n, i ?? -1);
    }
    taskVehicleAimAt(e) {
      TaskVehicleAimAtPed(this.handle, e);
    }
    taskVehicleChase(e) {
      TaskVehicleChase(this.handle, e);
    }
    taskVehicleDriveToCoord(e, t, r, n, i, a, o, s, l, d) {
      TaskVehicleDriveToCoord(this.handle, e, t, r, n, i, a, o, s, l, d);
    }
    taskVehicleDriveToCoordLongrange(e, t, r, n, i, a, o) {
      TaskVehicleDriveToCoordLongrange(this.handle, e, t, r, n, i, a, o);
    }
    taskVehicleDriveWander(e, t, r) {
      TaskVehicleDriveWander(this.handle, e, t, r);
    }
    taskVehicleFollow(e, t, r, n, i) {
      TaskVehicleFollow(this.handle, e, t, n, r, i);
    }
    taskVehicleGotoNavmesh(e, t, r, n, i, a, o) {
      TaskVehicleGotoNavmesh(this.handle, e, t, r, n, i, a, o);
    }
    taskVehiclePark(e, t, r, n, i, a, o, s) {
      TaskVehiclePark(this.handle, e, t, r, n, i, a, o, !!s);
    }
    taskVehicleTempAction(e, t, r) {
      TaskVehicleTempAction(this.handle, e, t, r);
    }
    taskWanderInArea(e, t, r, n, i, a) {
      TaskWanderInArea(this.handle, e, t, r, n, i, a);
    }
    taskWanderStandard(e, t) {
      TaskWanderStandard(this.handle, e ?? 10, t ?? 10);
    }
    taskWarpIntoVehicle(e, t) {
      TaskWarpPedIntoVehicle(this.handle, e, t);
    }
    taskWrithe(e, t, r) {
      TaskWrithe(this.handle, e, t, r ?? 0, false, 0);
    }
    updateTaskAimGunScriptedTarget(e, t, r, n, i) {
      UpdateTaskAimGunScriptedTarget(this.handle, e, t, r, n, !!i);
    }
    updateTaskHandsUpDuration(e) {
      UpdateTaskHandsUpDuration(this.handle, e);
    }
  }
  const je = new Map();
  const qe = new Map();
  function Ke(e, t, r) {
    if (typeof r == "string" && r.length !== 0) {
      if (Number.isFinite(e) && e > 0) {
        qe.set(e, r);
      }
      if (Number.isFinite(t) && t > 0) {
        je.set(t, r);
      }
    }
  }
  function Ye(e, t, r) {
    const n = globalThis.mp;
    if (!n) {
      return null;
    }
    switch (e) {
      case "player":
        {
          const e = n.players;
          if (e?.atServerId) {
            const r = e.atServerId(t);
            if (r) {
              return r;
            }
          }
          return e?.atRemoteId?.(t) ?? e?.at?.(t) ?? null;
        }
      case "colshape":
        return n.colshapes?.atRemoteId?.(t) ?? null;
      case "checkpoint":
        return n.checkpoints?.atRemoteId?.(t) ?? null;
      case "blip":
        return n.blips?.atRemoteId?.(t) ?? null;
      case "marker":
        return n.markers?.atRemoteId?.(t) ?? null;
      case "textlabel":
      case "label":
        return n.labels?.atRemoteId?.(t) ?? null;
      case "pickup":
        return n.pickups?.atRemoteId?.(t) ?? null;
      case "dummy":
        return n.dummies?.atRemoteId?.(t) ?? null;
      case "vehicle":
        if (r != null && n.vehicles?.atNetId) {
          const e = n.vehicles.atNetId(r);
          if (e) {
            return e;
          }
        }
        return n.vehicles?.atRemoteId?.(t) ?? null;
      case "object":
        if (r != null && n.objects?.atNetId) {
          const e = n.objects.atNetId(r);
          if (e) {
            return e;
          }
        }
        return n.objects?.atRemoteId?.(t) ?? null;
      case "ped":
        if (r != null && n.peds?.atNetId) {
          const e = n.peds.atNetId(r);
          if (e) {
            return e;
          }
        }
        return n.peds?.atRemoteId?.(t) ?? null;
      default:
        return null;
    }
  }
  const Ze = `${f}remoteId`;
  const Je = new Map();
  let Xe = false;
  function Qe(e, t) {
    return function (e, t) {
      return Ee.init(e, {
        handleToEntity: new Map(),
        byRemote: new Map(),
        byLocal: new Map(),
        netIdToRemote: new Map(),
        ids: new ie(),
        activeSet: new Set(),
        netType: t,
        makeEntity: null,
        filter: null,
        onStreamIn: null,
        onStreamOut: null
      });
    }(e, t);
  }
  function $e(e, t, r, n) {
    const i = Ee.get(e);
    i.makeEntity = r;
    i.filter = n ?? null;
    (function (e, t) {
      if (!t.netType) {
        return;
      }
      n = t.netType;
      const r = n === "vehicle" ? 2 : n === "ped" ? 1 : n === "object" ? 3 : 0;
      var n;
      if (r) {
        Je.set(r, e);
      }
      (function () {
        if (Xe || typeof AddStateBagChangeHandler != "function") {
          return;
        }
        Xe = true;
        AddStateBagChangeHandler(null, Ze, (e, t, r) => {
          if (typeof r != "number" || !Number.isFinite(r) || r === s) {
            return;
          }
          let n = 0;
          try {
            n = typeof GetEntityFromStateBagName == "function" ? GetEntityFromStateBagName(e) : 0;
          } catch (e) {}
          if (!n || typeof DoesEntityExist == "function" && !DoesEntityExist(n)) {
            return;
          }
          const i = ve(n);
          if (!i) {
            return;
          }
          const a = typeof GetEntityType == "function" ? GetEntityType(n) : 0;
          const o = Je.get(a);
          if (o) {
            it(o, r, n, i);
          }
        });
      })();
      ne(t.netType, {
        create: (t, r) => nt(e, t, r),
        netid: (t, r) => function (e, t, r) {
          if (!r) {
            return;
          }
          const n = Ee.get(e);
          let i = n.byRemote.get(t);
          if (!i) {
            nt(e, t, {});
            i = n.byRemote.get(t);
          }
          const a = fe(i);
          if (a.netId && a.netId !== r) {
            n.netIdToRemote.delete(a.netId);
          }
          a.netId = r;
          n.netIdToRemote.set(r, t);
          at(e, i);
        }(e, t, r),
        destroy: t => function (e, t) {
          const r = Ee.get(e);
          const n = r.byRemote.get(t);
          if (!n) {
            return;
          }
          const i = fe(n);
          r.byRemote.delete(t);
          if (i.netId) {
            r.netIdToRemote.delete(i.netId);
          }
          if (n.handle) {
            r.handleToEntity.delete(n.handle);
          }
          const a = p(e).entities;
          if (a.has(n.id)) {
            globalThis.mp?.events?.call("entityStreamOut", n);
            r.onStreamOut?.(n);
            g(e, n.id);
          }
          rt(r, n);
          l.get(n).handle = null;
        }(e, t)
      });
    })(e, i);
    ye(() => function (e, t) {
      const r = Ee.get(e);
      const n = t();
      const i = r.activeSet;
      i.clear();
      for (const t of n) {
        const r = lt(e, t);
        if (r) {
          i.add(r.id);
        }
      }
      p(e).entities;
      for (const [t, n] of r.handleToEntity) {
        if (!i.has(n.id) && !fe(n).managedLocally) {
          r.handleToEntity.delete(t);
          g(e, n.id);
          globalThis.mp?.events?.call("entityStreamOut", n);
          r.onStreamOut?.(n);
          if (fe(n).isServer) {
            l.get(n).handle = null;
          } else {
            rt(r, n);
          }
        }
      }
    }(e, t));
  }
  function et(e, t, r) {
    const n = e.ids.allocate();
    const i = e.makeEntity(n, r);
    c(i, t);
    e.byLocal.set(n, i);
    return i;
  }
  function tt(e, t) {
    const r = Ee.get(e);
    c(t, s);
    d(t, r.ids.allocate());
    r.byLocal.set(t.id, t);
    m(e, t);
    return t;
  }
  function rt(e, t) {
    e.byLocal.delete(t.id);
    e.ids.free(t.id);
  }
  function nt(e, t, r) {
    const i = Ee.get(e);
    if (i.byRemote.has(t)) {
      return;
    }
    const a = et(i, t, null);
    const o = fe(a);
    o.isServer = true;
    o.netId = 0;
    const s = n(r?.model ?? 0);
    o.serverModel = s;
    if (s) {
      l.get(a).model = s;
    }
    o.serverPos = {
      x: r?.x ?? 0,
      y: r?.y ?? 0,
      z: r?.z ?? 0
    };
    o.serverDimension = r?.dimension ?? 0;
    i.byRemote.set(t, a);
  }
  function it(e, t, r, n) {
    const i = Ee.get(e);
    let a = i.byRemote.get(t);
    if (!a) {
      a = et(i, t, r);
      fe(a).isServer = true;
      i.byRemote.set(t, a);
    }
    const o = fe(a);
    const s = p(e).entities;
    const d = i.handleToEntity.get(r);
    if (d && d !== a) {
      i.handleToEntity.delete(r);
      if (s.has(d.id)) {
        g(e, d.id);
      }
    }
    o.isServer = true;
    if (n) {
      if (o.netId && o.netId !== n) {
        i.netIdToRemote.delete(o.netId);
      }
      o.netId = n;
      i.netIdToRemote.set(n, t);
    }
    if (a.handle && a.handle !== r) {
      i.handleToEntity.delete(a.handle);
    }
    l.get(a).handle = r;
    i.handleToEntity.set(r, a);
    if (!s.has(a.id)) {
      m(e, a);
      globalThis.mp?.events?.call("entityStreamIn", a);
      i.onStreamIn?.(a, r, n);
    }
    return a;
  }
  function at(e, t) {
    if (!t) {
      return t;
    }
    const r = Ee.get(e);
    const n = fe(t);
    if (!n.isServer || !n.netId) {
      return t;
    }
    const i = Ie(n.netId);
    const a = p(e).entities;
    if (i) {
      if (t.handle !== i || !a.has(t.id)) {
        it(e, t.remoteId, i, n.netId);
      }
    } else if (t.handle) {
      r.handleToEntity.delete(t.handle);
      if (a.has(t.id)) {
        globalThis.mp?.events?.call("entityStreamOut", t);
        r.onStreamOut?.(t);
        g(e, t.id);
      }
      l.get(t).handle = null;
    }
    return t;
  }
  function ot(e, t, r) {
    const n = e.netIdToRemote.get(r);
    if (n !== undefined) {
      return n;
    }
    const i = function (e) {
      if (e) {
        try {
          const t = globalThis.Entity(e)?.state?.[Ze];
          if (typeof t == "number" && Number.isFinite(t) && t !== s) {
            return t;
          }
        } catch (e) {}
      }
    }(t);
    if (i !== undefined) {
      e.netIdToRemote.set(r, i);
      return i;
    } else {
      return undefined;
    }
  }
  function st(e, t) {
    const r = Ee.get(e);
    const n = ve(t);
    if (n) {
      const i = ot(r, t, n);
      if (i !== undefined) {
        return it(e, i, t, n);
      }
    }
    return r.handleToEntity.get(t) ?? null;
  }
  function lt(e, t) {
    const r = Ee.get(e);
    if (r.filter && !r.filter(t)) {
      return null;
    }
    if (!t || !DoesEntityExist(t)) {
      return null;
    }
    const n = st(e, t);
    if (n) {
      return n;
    }
    for (const e of r.byLocal.values()) {
      if (fe(e).managedLocally && e.handle === t) {
        r.handleToEntity.set(t, e);
        return e;
      }
    }
    const i = ve(t);
    const a = et(r, s, t);
    m(e, a);
    r.handleToEntity.set(t, a);
    globalThis.mp?.events?.call("entityStreamIn", a);
    r.onStreamIn?.(a, t, i);
    return a;
  }
  function dt(e, t) {
    if (!t) {
      return null;
    }
    if (typeof DoesEntityExist == "function" && !DoesEntityExist(t)) {
      return null;
    }
    const r = st(e, t);
    if (r) {
      return r;
    }
    for (const r of p(e).entities.values()) {
      if (r.handle === t) {
        Ee.get(e).handleToEntity.set(t, r);
        return r;
      }
    }
    return null;
  }
  function ct(e, t) {
    const r = Ee.get(e);
    const n = r.byLocal.get(t) ?? p(e).entities.get(t);
    if (n) {
      if (n.handle) {
        r.handleToEntity.delete(n.handle);
      }
      const t = fe(n);
      if (t.netId) {
        r.netIdToRemote.delete(t.netId);
      }
      if (n.remoteId !== s) {
        r.byRemote.delete(n.remoteId);
      }
      rt(r, n);
      g(e, n.id);
      return;
    }
    g(e, t);
  }
  function ut(e) {
    try {
      return typeof DoesEntityExist == "function" && DoesEntityExist(e);
    } catch {
      return false;
    }
  }
  function ht(e, t) {
    const r = e?.atHandle?.(t);
    if (r) {
      return r;
    }
    const n = ve(t);
    if (n) {
      const t = e?.atNetId?.(n);
      if (t) {
        return t;
      }
    }
    if (e?.newWeak && ut(t)) {
      return e.newWeak(t);
    } else {
      return null;
    }
  }
  function pt(e) {
    if (typeof e != "number" || !Number.isFinite(e) || e <= 0) {
      return e;
    }
    if (!ut(e) && !(e >= 1048576)) {
      return e;
    }
    const t = gt(e);
    if (t !== e) {
      return t;
    } else {
      return e;
    }
  }
  function mt(e) {
    if (typeof (t = e) != "number" || !Number.isFinite(t) || !!(t <= 0) || t % 1 != 0 || !(t < 1048576)) {
      return e;
    }
    var t;
    const r = e;
    if (ut(r)) {
      return gt(r);
    } else {
      return e;
    }
  }
  function gt(e) {
    const t = globalThis.mp;
    if (!t) {
      return e;
    }
    try {
      if (function (e) {
        try {
          return typeof IsEntityAPed == "function" && IsEntityAPed(e);
        } catch {
          return false;
        }
      }(e)) {
        if (function (e) {
          try {
            return typeof IsPedAPlayer == "function" && IsPedAPlayer(e);
          } catch {
            return false;
          }
        }(e)) {
          if (typeof NetworkGetPlayerIndexFromPed == "function") {
            try {
              const r = NetworkGetPlayerIndexFromPed(e);
              if (r >= 0 && typeof GetPlayerServerId == "function") {
                const n = GetPlayerServerId(r);
                const i = t.players;
                const a = i?.atServerId?.(n) ?? i?.atHandle?.(e);
                if (a) {
                  return a;
                }
              }
            } catch {}
          }
          const r = t.players?.atHandle?.(e);
          if (r) {
            return r;
          }
          const n = function (e, t) {
            if (!t || typeof e?.forEachInStreamRange != "function") {
              return null;
            }
            let r = null;
            e.forEachInStreamRange(n => {
              if (!r && n && n !== e.local && n.handle === t) {
                r = n;
              }
            });
            return r;
          }(t.players, e);
          if (n) {
            return n;
          }
        }
        return t.peds?.atHandle?.(e) ?? e;
      }
      if (function (e) {
        try {
          return typeof IsEntityAVehicle == "function" && IsEntityAVehicle(e);
        } catch {
          return false;
        }
      }(e)) {
        return t.vehicles?.atHandle?.(e) ?? e;
      }
      if (function (e) {
        try {
          return typeof IsEntityAnObject == "function" && IsEntityAnObject(e);
        } catch {
          return false;
        }
      }(e) || function (e) {
        try {
          if (typeof GetEntityType == "function") {
            return GetEntityType(e);
          } else {
            return -1;
          }
        } catch {
          return -1;
        }
      }(e) === 3) {
        return ht(t.objects, e) ?? e;
      }
    } catch {
      return e;
    }
    return ht(t.objects, e) ?? e;
  }
  const St = o();
  function Ct(e) {
    if (typeof e != "number" || !Number.isFinite(e)) {
      return 0;
    }
    if (e > 0 && e <= 10000) {
      return e;
    }
    const t = function (e) {
      const t = new ArrayBuffer(4);
      const r = new DataView(t);
      r.setUint32(0, e >>> 0, true);
      return r.getFloat32(0, true);
    }(e);
    if (Number.isFinite(t) && t > 0) {
      return t;
    } else {
      return 0;
    }
  }
  function yt(e) {
    const t = e >>> 0;
    return t === 2725352035 || t === 2725351936;
  }
  function Pt(e) {
    if (e) {
      SetPedCanRagdoll(e, false);
      SetPedCanRagdollFromPlayerImpact(e, false);
      if (IsPedRagdoll(e) || IsPedRunningRagdollTask(e) || IsPedGettingUp(e)) {
        ClearPedTasksImmediately(e);
        ResetPedRagdollTimer(e);
      }
      setTimeout(() => function (e) {
        if (e && DoesEntityExist(e)) {
          SetPedCanRagdoll(e, true);
          SetPedCanRagdollFromPlayerImpact(e, true);
          SetPedRagdollOnCollision(e, true);
        }
      }(e), 400);
    }
  }
  function At(e, t, ...r) {
    const n = P.get(e).handlers.get(t);
    if (!n) {
      return false;
    }
    for (const e of n) {
      if (e(...r) === true) {
        return true;
      }
    }
    return false;
  }
  function Tt(e) {
    return e != null && typeof e == "object" && e.type === "player";
  }
  function vt(e) {
    if (e) {
      if (!function (e) {
        return !!e && (!!IsPedInAnyVehicle(e, false) || !!IsPedFalling(e) || !!IsPedInParachuteFreeFall(e) || (!!IsPedRunningRagdollTask(e) || !!IsPedRagdoll(e)) && !!(GetEntitySpeed(e) > 2));
      }(e)) {
        if (IsPedRagdoll(e) || IsPedFatallyInjured(e) || IsPedInWrithe(e) || IsPedGettingUp(e) || IsPedRunningRagdollTask(e)) {
          ClearPedTasksImmediately(e);
          ResetPedRagdollTimer(e);
        }
      }
    }
  }
  function It(e, t) {
    if (St.get(e) && t) {
      (function (e, t) {
        const r = St.get(e);
        if (r && t) {
          SetEntityHealth(t, r.trackedHealth);
          SetPedArmour(t, r.trackedArmour);
          if (t === PlayerPedId() && IsPedDeadOrDying(t, true)) {
            const e = GetEntityCoords(t, false);
            NetworkResurrectLocalPlayer(e[0], e[1], e[2], GetEntityHeading(t), 0, false);
            SetEntityHealth(t, r.trackedHealth);
            SetPedArmour(t, r.trackedArmour);
          } else if (IsPedFatallyInjured(t)) {
            ResurrectPed(t);
            SetEntityHealth(t, r.trackedHealth);
            SetPedArmour(t, r.trackedArmour);
          }
        }
      })(e, t);
      vt(t);
    }
  }
  function Et(e, t) {
    var r;
    if (e && e !== PlayerPedId()) {
      if (DoesEntityExist(e)) {
        if ((r = e) && r !== PlayerPedId()) {
          if (!NetworkHasControlOfEntity(r)) {
            NetworkRequestControlOfEntity(r);
          }
        }
        (function (e) {
          if (e) {
            SetPedSuffersCriticalHits(e, false);
            SetPedCanRagdoll(e, false);
          }
        })(e);
        if (function (e) {
          return IsPedRagdoll(e) || IsPedRunningRagdollTask(e);
        }(e) || IsPedFatallyInjured(e) || IsPedInWrithe(e) || IsPedGettingUp(e)) {
          vt(e);
        }
      }
    }
  }
  function kt(e, t) {
    (function (e, t) {
      const r = () => {
        if (DoesEntityExist(t)) {
          It(e, t);
        }
      };
      r();
      if (PlayerPedId() === t) {
        for (const e of [50, 150]) {
          setTimeout(r, e);
        }
      }
    })(e, t);
  }
  function ft(e, t, r, n) {
    if (!r || K(r)) {
      return;
    }
    const i = function (e) {
      if (!e) {
        return null;
      }
      const t = globalThis.mp;
      const r = t?.players?.atHandle?.(e);
      if (Tt(r)) {
        return r;
      }
      if (IsPedAPlayer(e)) {
        const r = NetworkGetPlayerIndexFromPed(e);
        if (r >= 0) {
          const e = GetPlayerServerId(r);
          if (e > 0) {
            const r = t?.players?.atServerId?.(e);
            if (Tt(r)) {
              return r;
            }
          }
        }
      }
      const n = pt(e);
      if (Tt(n)) {
        return n;
      } else {
        return null;
      }
    }(t);
    if (Tt(i) && n) {
      e.callRemote("server_weapon_damage", i, r, n);
    }
  }
  function Dt(e) {
    const t = +e;
    if (Number.isFinite(t)) {
      return t;
    } else {
      return 0;
    }
  }
  function Ft(e) {
    if (e == null) {
      return 0;
    } else {
      return Dt(e.x ?? e[0]);
    }
  }
  function Nt(e) {
    if (e == null) {
      return 0;
    } else {
      return Dt(e.y ?? e[1]);
    }
  }
  function bt(e) {
    if (e == null) {
      return 0;
    } else {
      return Dt(e.z ?? e[2]);
    }
  }
  function xt(e) {
    if (e == null) {
      return 0;
    } else if (typeof e == "number") {
      return e;
    } else {
      return e.handle ?? e.id ?? 0;
    }
  }
  function Bt(e) {
    if (Array.isArray(e)) {
      return e.reduce((e, t) => e | (Number(t) || 0), 0);
    } else {
      return e ?? -1;
    }
  }
  function Rt(e, t, r, n) {
    if (e) {
      return {
        entity: n ? pt(n) : n,
        position: new i(t[0], t[1], t[2]),
        surfaceNormal: new i(r[0], r[1], r[2]),
        didHit: true
      };
    }
  }
  function Gt(e, t, r, n, i = 7) {
    const a = StartExpensiveSynchronousShapeTestLosProbe(Ft(e), Nt(e), bt(e), Ft(t), Nt(t), bt(t), Bt(n), xt(r), i);
    const [, o, s, l, d] = GetShapeTestResult(a);
    return Rt(!!o, s, l, d);
  }
  const Mt = new Map();
  const Vt = new Map();
  let wt = -1;
  const _t = 237;
  const Ot = 238;
  let Ht = false;
  let Lt = false;
  let Wt = -1;
  let Ut = -1;
  let zt = -1;
  let jt = -1;
  let qt = 0;
  let Kt = 0;
  function Yt() {
    if (typeof GetFrameCount == "function") {
      return GetFrameCount();
    } else {
      return 0;
    }
  }
  function Zt() {
    if (typeof GetNuiCursorPosition == "function" && typeof GetActiveScreenResolution == "function") {
      const e = GetNuiCursorPosition();
      const t = Array.isArray(e) && +e[0] || 0;
      const r = Array.isArray(e) && +e[1] || 0;
      const [n, i] = GetActiveScreenResolution();
      if (n > 0 && i > 0) {
        qt = t / n;
        Kt = r / i;
      }
    }
    return {
      x: qt,
      y: Kt
    };
  }
  function Jt(e) {
    if (e === _t) {
      return Ht;
    } else if (e === Ot) {
      return Lt;
    } else {
      return undefined;
    }
  }
  function Xt(e) {
    const t = Yt();
    if (e === _t) {
      return Wt === t;
    } else if (e === Ot) {
      return zt === t;
    } else {
      return undefined;
    }
  }
  function Qt(e) {
    const t = Yt();
    if (e === _t) {
      return Ut === t;
    } else if (e === Ot) {
      return jt === t;
    } else {
      return undefined;
    }
  }
  function $t(e) {
    if (e === 239) {
      return Zt().x;
    } else if (e === 240) {
      return Zt().y;
    } else {
      return undefined;
    }
  }
  const er = new Set();
  let tr = false;
  let rr = null;
  let nr = false;
  let ir = false;
  let ar = false;
  function or() {
    return {
      hasFocus: er.size > 0 || tr,
      hasCursor: tr,
      keepInput: er.size > 0 && !tr
    };
  }
  function sr(e, t, r) {
    if (e !== nr || t !== ir || r !== ar) {
      nr = e;
      ir = t;
      ar = r;
      if (typeof SetNuiFocus == "function") {
        SetNuiFocus(e, t);
      }
      if (typeof SetNuiFocusKeepInput == "function") {
        SetNuiFocusKeepInput(r);
      }
    }
  }
  function lr() {
    const {
      hasFocus: e,
      hasCursor: t,
      keepInput: r
    } = or();
    if (e) {
      if (typeof DisableControlAction == "function") {
        DisableControlAction(0, 199, true);
        DisableControlAction(0, 200, true);
        DisableControlAction(2, 199, true);
        DisableControlAction(2, 200, true);
      }
      if (typeof IsNuiFocused == "function" && !IsNuiFocused()) {
        sr(e, t, r);
      }
    } else if (rr !== null) {
      clearTick(rr);
      rr = null;
    }
  }
  function dr() {
    const {
      hasFocus: e,
      hasCursor: t,
      keepInput: r
    } = or();
    sr(e, t, r);
    if (e && rr === null && typeof setTick == "function") {
      rr = setTick(lr);
    } else if (!e && rr !== null) {
      clearTick(rr);
      rr = null;
    }
  }
  function cr(e, t) {
    if (t) {
      er.add(e);
    } else {
      er.delete(e);
    }
    dr();
  }
  function ur(e, t = false) {
    const r = !!e;
    if (tr && !r) {
      Ht = false;
      Lt = false;
      Wt = -1;
      Ut = -1;
      zt = -1;
      jt = -1;
    }
    tr = r;
    dr();
  }
  function hr() {
    return tr;
  }
  function pr() {
    return hr();
  }
  class mr {
    constructor() {
      this._enabled = true;
      this.useScreen2dCoords = true;
      this.orderByDistance = true;
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      this._enabled = e;
    }
    set(e) {
      this._style = e;
    }
  }
  function gr() {
    const e = globalThis.mp;
    const t = e?.players?.local;
    if (!t) {
      return [];
    }
    const r = e.game?.graphics;
    const n = e.nametags?.useScreen2dCoords !== false;
    const i = t.position;
    const a = [];
    e.players.forEachInStreamRange(e => {
      if (e === t) {
        return;
      }
      const o = e.handle;
      if (!o) {
        return;
      }
      if (typeof DoesEntityExist == "function" && !DoesEntityExist(o)) {
        return;
      }
      const s = e.position;
      const l = function (e, t, r, n, i, a) {
        const o = globalThis.mp;
        if (o?.game?.system?.vdist) {
          return o.game.system.vdist(e, t, r, n, i, a);
        }
        const s = e - n;
        const l = t - i;
        const d = r - a;
        return Math.sqrt(s * s + l * l + d * d);
      }(i.x, i.y, i.z, s.x, s.y, s.z);
      if (l > 25) {
        return;
      }
      const d = e.getBoneCoords(23553, 0.5, 0, 0);
      if (!d || d.x === 0 && d.y === 0 && d.z === 0) {
        return;
      }
      let c = 0;
      let u = 0;
      if (n && r?.world3dToScreen2d) {
        const e = r.world3dToScreen2d({
          x: d.x,
          y: d.y,
          z: d.z + 0.65
        });
        if (!e) {
          return;
        }
        c = e.x;
        u = e.y;
      } else {
        if (n) {
          return;
        }
        c = d.x;
        u = d.y;
      }
      a.push([e, c, u, l]);
    });
    if (e.nametags?.orderByDistance !== false) {
      a.sort((e, t) => t[3] - e[3]);
    }
    return a;
  }
  const Sr = "__ragempBridgeNetListeners";
  const Cr = "__ragempBridgeNetRegistered";
  let yr = null;
  function Pr(e, t) {
    const r = globalThis;
    let n = r[Sr];
    if (!n) {
      n = new Map();
      r[Sr] = n;
    }
    n.set(e, t);
    let i = r[Cr];
    if (!i) {
      i = new Set();
      r[Cr] = i;
    }
    if (!i.has(e)) {
      i.add(e);
      onNet(e, (...t) => {
        const n = r[Sr];
        const i = n?.get(e);
        if (i) {
          i.call(e, ...j(t, Ye));
        }
      });
    }
  }
  function Ar(e) {
    (function (e) {
      yr = e;
      (function (e) {
        on("__cfx_internal:commandFallback", (t, ...r) => {
          e.call("consoleCommand", t, ...r);
          const n = [t, ...r].join(" ");
          e.call("playerCommand", n);
        });
        on("chatMessage", (t, r, n) => {
          const i = globalThis.mp?.players?.local;
          if (i) {
            e.call("playerChat", i, n);
          }
        });
      })(e);
      (function (e) {
        on("gameEventTriggered", (t, r) => {
          const n = globalThis.mp?.players?.local;
          if (!n) {
            return;
          }
          let i = r;
          try {
            i = function (e) {
              if (Array.isArray(e)) {
                return e.map(e => mt(e));
              } else {
                return [];
              }
            }(r);
          } catch (e) {
            console.error("[bridge] gameEventTriggered rehydrate error:", e);
          }
          const a = P.get(e).handlers.get("gameEventTriggered");
          if (a && a.size > 0) {
            try {
              e.call("gameEventTriggered", t, i);
            } catch (e) {
              console.error("[bridge] gameEventTriggered handler error:", e);
            }
          }
          if (t === "CEventNetworkEntityDamage") {
            const t = r[0];
            const i = r[1];
            const a = PlayerPedId();
            const o = typeof i == "number" ? i : 0;
            const s = typeof t == "number" ? t : 0;
            const l = function (e, t) {
              const r = t >>> 0;
              if (r) {
                return r;
              }
              if (e && typeof GetCurrentPedWeapon == "function") {
                try {
                  const [, t] = GetCurrentPedWeapon(e, true);
                  const r = (t ?? 0) >>> 0;
                  if (r) {
                    return r;
                  }
                } catch {}
              }
              return r;
            }(o, function (e, t) {
              const r = e[6] ?? e[4];
              if (typeof r == "number" && r !== 0) {
                return r >>> 0;
              }
              if (t && typeof GetCurrentPedWeapon == "function") {
                try {
                  const [, e] = GetCurrentPedWeapon(t, true);
                  if (typeof e == "number" && e !== 0) {
                    return e >>> 0;
                  }
                } catch {}
              }
              return 0;
            }(r, o));
            const d = Ct(r[2] ?? r[3]);
            const c = s ? function (e) {
              if (!e || typeof GetPedLastDamageBone != "function") {
                return 0;
              }
              try {
                const [, t] = GetPedLastDamageBone(e);
                if (typeof t == "number") {
                  return t;
                } else {
                  return 0;
                }
              } catch {
                return 0;
              }
            }(s) : 0;
            const u = mt(t);
            const h = mt(i);
            const p = Tt(h) ? h : null;
            if (t === a) {
              const t = At(e, "incomingDamage", h ?? i, p, n, l, c, d);
              if (K(l)) {
                if (yt(l) && !t) {
                  Pt(a);
                }
                const r = () => function (e, t) {
                  const r = St.get(e);
                  if (!r || !t) {
                    return;
                  }
                  const n = GetEntityHealth(t);
                  r.trackedHealth = n;
                }(e, a);
                if (t) {
                  setTimeout(r, 0);
                } else {
                  r();
                  (function (e, t, r) {
                    if (!t || !yt(r)) {
                      return;
                    }
                    const n = _(GetEntityHealth(t));
                    e.callRemote("Server_SyncMeleeHealth", n);
                  })(e, a, l);
                }
                return;
              }
              if (t) {
                CancelEvent();
                kt(e, a);
                Ir();
              }
              return;
            }
            if (i === a) {
              if (s && IsEntityAVehicle(s) && function (e) {
                const t = e >>> 0;
                return !!K(t) && t !== 911657153;
              }(l)) {
                CancelEvent();
                return;
              }
              const t = At(e, "outgoingDamage", n, u, n, l, c, d);
              if (!t) {
                ft(e, s, l, c);
              }
              if (!!t || !K(l)) {
                CancelEvent();
                if (Tt(u)) {
                  Et(s);
                }
              }
            }
            return;
          }
          if (t === "CEventExplosion") {
            const t = r[2] ?? 0;
            const i = r[3] ?? 0;
            const a = r[4] ?? 0;
            const o = r[1] ?? -1;
            e.call("explosion", n, {
              x: t,
              y: i,
              z: a
            }, o);
            return;
          }
          if (t === "CEventMeleeDamage") {
            const t = r[0];
            const i = r[1];
            const a = r[2] ?? 0;
            const o = r[3] ?? 0;
            if (i === PlayerPedId()) {
              e.call("meleeActionDamage", n, mt(t), a, o);
            }
            return;
          }
          if (t === "CProjectileImpactEvent") {
            const t = r[0];
            const n = r[1] ?? 0;
            const i = r[2] ?? 0;
            const a = r[3] ?? 0;
            e.call("projectile", {
              x: n,
              y: i,
              z: a
            }, t);
            return;
          }
        });
      })(e);
      (function (e) {
        on("unhandledPromiseRejection", t => {
          e.call("unhandledRejection", t);
        });
        if (typeof process != "undefined" && process.on) {
          try {
            process.on("uncaughtException", t => {
              e.call("uncaughtException", t);
            });
          } catch (e) {}
        }
      })(e);
      (function (e) {
        if (typeof AddStateBagChangeHandler != "function") {
          return;
        }
        AddStateBagChangeHandler(null, null, (t, r, n) => {
          const i = globalThis.mp;
          if (!i || typeof t != "string" || typeof r != "string") {
            return;
          }
          if (r.indexOf(f) !== 0) {
            return;
          }
          const a = r.slice(4);
          let o = null;
          if (t.indexOf("player:") === 0) {
            const r = parseInt(t.slice(7), 10);
            if (!Number.isFinite(r) || r <= 0) {
              return;
            }
            o = Fr(r) ?? null;
            if (a === "name") {
              Ke(r, o?.remoteId ?? 0, n);
            }
            if (o) {
              vr(e, o, a, n);
            }
            return;
          }
          if (t.indexOf("entity:") === 0) {
            const e = Ie(parseInt(t.slice(7), 10));
            if (e) {
              o = i.vehicles?.atHandle?.(e) ?? i.peds?.atHandle?.(e) ?? i.objects?.atHandle?.(e) ?? null;
            }
          }
          if (o) {
            vr(e, o, a, n);
          }
        });
      })(e);
      (function (e) {
        const t = St.get(e);
        t.builtinTick = ye(r => {
          const n = PlayerPedId();
          if (n === 0) {
            return;
          }
          if (!t.builtinTickStarted) {
            (function (e, t, r) {
              const n = St.get(e);
              n.builtinTickStarted = true;
              n.wasAlive = !IsPedDeadOrDying(t, true);
              n.wasInVehicle = IsPedInAnyVehicle(t, false);
              if (n.wasInVehicle) {
                n.lastVehicleHandle = GetVehiclePedIsIn(t, false);
              }
              n.lastWeaponHash = GetSelectedPedWeapon(t);
              n.trackedHealth = GetEntityHealth(t);
              n.trackedArmour = GetPedArmour(t);
              n.lastHornState = false;
              n.lastSirenState = false;
              n.lastTrailerNetId = 0;
              n.lastAudioVehHandle = 0;
              n.lastPedModel = GetEntityModel(t);
              n.waypointActive = IsWaypointActive();
              if (n.waypointActive) {
                const e = GetFirstBlipInfoId(GetWaypointBlipEnumId());
                if (DoesBlipExist(e)) {
                  const t = GetBlipInfoIdCoord(e);
                  n.waypointX = t[0];
                  n.waypointY = t[1];
                  n.waypointZ = t[2];
                }
              }
              const i = PlayerId();
              for (const e of r.players) {
                if (e === i) {
                  continue;
                }
                const t = GetPlayerServerId(e);
                if (t && t !== -1) {
                  n.connectedPlayers.add(t);
                }
              }
            })(e, n, r);
            return;
          }
          const a = globalThis.mp?.players?.local;
          if (!a) {
            return;
          }
          const o = GetEntityCoords(n, true);
          (function (e, t, r, n) {
            const i = St.get(e);
            const a = globalThis.mp?.checkpoints;
            if (!a) {
              return;
            }
            const o = n[0];
            const s = n[1];
            const d = n[2];
            for (const t of a) {
              const r = l.get(t);
              const n = r.position;
              const a = t._radius;
              if (!n || a == null) {
                continue;
              }
              const c = o - n.x;
              const u = s - n.y;
              const h = d - n.z;
              const p = c * c + u * u + h * h;
              const m = we(r.dimension) && p <= a * a;
              if (m && !i.insideCheckpoints.has(t.id)) {
                i.insideCheckpoints.add(t.id);
                e.call("playerEnterCheckpoint", t);
                if (t._origin === "server") {
                  emitNet("ragemp:checkpoint:enter", t.remoteId);
                }
              } else if (!m && i.insideCheckpoints.has(t.id)) {
                i.insideCheckpoints.delete(t.id);
                e.call("playerExitCheckpoint", t);
                if (t._origin === "server") {
                  emitNet("ragemp:checkpoint:exit", t.remoteId);
                }
              }
            }
            for (const e of i.insideCheckpoints) {
              if (!a.exists(e)) {
                i.insideCheckpoints.delete(e);
              }
            }
          })(e, 0, 0, o);
          (function (e, t, r, n) {
            const a = St.get(e);
            const o = IsWaypointActive();
            if (o) {
              const t = GetFirstBlipInfoId(GetWaypointBlipEnumId());
              if (DoesBlipExist(t)) {
                const o = GetBlipInfoIdCoord(t);
                const s = o[0];
                const l = o[1];
                const d = o[2];
                if (!a.waypointActive || s !== a.waypointX || l !== a.waypointY || d !== a.waypointZ) {
                  a.waypointX = s;
                  a.waypointY = l;
                  a.waypointZ = d;
                  a.waypointReached = false;
                  e.call("playerCreateWaypoint", new i(s, l, d));
                }
                if (!a.waypointReached) {
                  const t = n[0] - s;
                  const i = n[1] - l;
                  if (Math.sqrt(t * t + i * i) <= 5) {
                    a.waypointReached = true;
                    e.call("playerReachWaypoint", r, s, l, d);
                    emitNet("ragemp:playerReachWaypoint", s, l, d);
                  }
                }
              }
            } else if (a.waypointActive) {
              a.waypointReached = false;
            }
            a.waypointActive = o;
          })(e, 0, a, o);
          (function (e) {
            const t = St.get(e);
            const r = t.wasInVehicle ? t.lastVehicleHandle : 0;
            if (r !== 0) {
              const e = IsHornActive(r);
              if (e !== t.lastHornState) {
                t.lastHornState = e;
                emitNet("ragemp:vehicleHorn", ve(r), e);
              }
              const n = IsVehicleSirenOn(r);
              if (n !== t.lastSirenState) {
                t.lastSirenState = n;
                emitNet("ragemp:vehicleSiren", ve(r), n);
              }
              const [i, a] = GetVehicleTrailerVehicle(r);
              const o = i ? ve(a) : 0;
              if (o !== (t.lastTrailerNetId ?? 0)) {
                t.lastTrailerNetId = o;
                if (o !== 0) {
                  emitNet("ragemp:trailerAttached", ve(r), o);
                }
              }
              t.lastAudioVehHandle = r;
            } else {
              const e = t.lastAudioVehHandle ?? 0;
              if (e !== 0 && (t.lastHornState || t.lastSirenState)) {
                const r = ve(e);
                if (t.lastHornState) {
                  emitNet("ragemp:vehicleHorn", r, false);
                }
                if (t.lastSirenState) {
                  emitNet("ragemp:vehicleSiren", r, false);
                }
              }
              t.lastHornState = false;
              t.lastSirenState = false;
              t.lastTrailerNetId = 0;
              t.lastAudioVehHandle = 0;
            }
          })(e);
          (function (e, t) {
            const r = St.get(e);
            const n = GetEntityModel(t);
            if (n !== (r.lastPedModel ?? 0)) {
              if (r.lastPedModel !== undefined) {
                emitNet("ragemp:entityModelChange", 0, r.lastPedModel, n);
              }
              r.lastPedModel = n;
            }
            const i = GetEntityHealth(t);
            const a = GetPedArmour(t);
            if (r.trackedHealth > 0) {
              const e = r.trackedHealth - i;
              const t = r.trackedArmour - a;
              if (e > 0 || t > 0) {
                emitNet("ragemp:playerDamage", e, t);
              }
            }
            r.trackedHealth = i;
            r.trackedArmour = a;
          })(e, n);
          (function (e, t) {
            const r = St.get(e);
            const n = t.players;
            const i = r.activeSet;
            i.clear();
            const a = PlayerId();
            for (const t of n) {
              const n = GetPlayerServerId(t);
              if (!n || n === -1) {
                continue;
              }
              i.add(n);
              const o = Fr(n) ?? t;
              if (t !== a) {
                const i = GetPlayerPed(t);
                const a = i !== 0 && DoesEntityExist(i);
                if (a && !r.streamedPlayers.has(n)) {
                  r.streamedPlayers.add(n);
                  e.call("playerStreamIn", o);
                  globalThis.mp?.events?.call("entityStreamIn", o);
                } else if (!a && r.streamedPlayers.has(n)) {
                  r.streamedPlayers.delete(n);
                  e.call("playerStreamOut", o);
                }
                if (!r.connectedPlayers.has(n)) {
                  r.connectedPlayers.add(n);
                  e.call("playerJoin", o);
                }
              }
              const s = NetworkIsPlayerTalking(t);
              if (s && !r.talkingPlayers.has(n)) {
                r.talkingPlayers.add(n);
                e.call("playerStartTalking", o);
              } else if (!s && r.talkingPlayers.has(n)) {
                r.talkingPlayers.delete(n);
                e.call("playerStopTalking", o);
              }
            }
            for (const e of r.streamedPlayers) {
              if (!i.has(e)) {
                r.streamedPlayers.delete(e);
              }
            }
            for (const t of r.connectedPlayers) {
              if (!i.has(t)) {
                const r = t;
                const n = Fr(r);
                if (n) {
                  Er(e, r, n);
                } else {
                  kr(e, r);
                }
              }
            }
            for (const e of r.talkingPlayers) {
              if (!i.has(e)) {
                r.talkingPlayers.delete(e);
              }
            }
            const o = t.vehicles;
            for (const t of o) {
              if (!NetworkGetEntityIsNetworked(t)) {
                continue;
              }
              const n = NetworkGetEntityOwner(t);
              const i = r.entityOwners.get(t);
              if (i !== undefined && i !== n) {
                const r = globalThis.mp?.vehicles?.atHandle?.(t);
                e.call("entityControllerChange", r ?? t, n);
              }
              r.entityOwners.set(t, n);
            }
            for (const [e] of r.entityOwners) {
              if (!DoesEntityExist(e)) {
                r.entityOwners.delete(e);
              }
            }
          })(e, r);
        });
        t.lifecycleTick = setTick(() => {
          if (!t.builtinTickStarted) {
            return;
          }
          const r = PlayerPedId();
          if (r === 0) {
            return;
          }
          const n = globalThis.mp?.players?.local;
          if (n) {
            (function (e, t, r) {
              const n = St.get(e);
              const i = IsPedDeadOrDying(t, true);
              if (i && n.wasAlive) {
                const n = GetPedCauseOfDeath(t);
                const i = GetPedSourceOfDeath(t);
                let a = null;
                if (i !== 0 && i !== t) {
                  try {
                    if (IsEntityAPed(i)) {
                      const e = NetworkGetPlayerIndexFromPed(i);
                      if (e >= 0) {
                        a = GetPlayerServerId(e);
                      }
                    }
                  } catch (e) {}
                }
                const o = a ? Fr(a) ?? null : null;
                e.call("playerDeath", r, n, o);
                emitNet("ragemp:playerDeath", n, a);
              } else if (!i && !n.wasAlive && !globalThis.mp?.spawnmanager?.isSpawning) {
                e.call("playerSpawn", r);
                e.call("playerResurrect", r);
              }
              n.wasAlive = !i;
            })(e, r, n);
            (function (e, t) {
              const r = St.get(e);
              const n = IsPedInAnyVehicle(t, false);
              if (n) {
                const n = GetVehiclePedIsIn(t, false);
                const i = function (e, t) {
                  const r = GetVehicleMaxNumberOfPassengers(t);
                  for (let n = -1; n < r; n++) {
                    if (GetPedInVehicleSeat(t, n) === e) {
                      return n;
                    }
                  }
                  return -1;
                }(t, n);
                const a = r.wasInVehicle && (n !== r.lastVehicleHandle || i !== r.lastVehicleSeat);
                if (!r.wasInVehicle || !!a) {
                  r.lastVehicleHandle = n;
                  r.lastVehicleSeat = i;
                  (function (e, t, r) {
                    const n = ve(t);
                    const i = lt(globalThis.mp.vehicles, t) ?? null;
                    e.call("playerEnterVehicle", i, r);
                    emitNet("ragemp:playerEnterVehicle", n, r);
                  })(e, n, i);
                }
              } else if (!n && r.wasInVehicle) {
                const t = r.lastVehicleHandle;
                const n = ve(t);
                const i = lt(globalThis.mp.vehicles, t) ?? null;
                e.call("playerLeaveVehicle", i, r.lastVehicleSeat ?? -1);
                emitNet("ragemp:playerExitVehicle", n);
                r.lastVehicleHandle = 0;
              }
              r.wasInVehicle = n;
              const i = GetVehiclePedIsTryingToEnter(t);
              if (i === 0 || r.isTryingToEnterVehicle) {
                if (i === 0 && r.isTryingToEnterVehicle) {
                  r.isTryingToEnterVehicle = false;
                  r.tryingToEnterVehicleHandle = 0;
                }
              } else {
                r.isTryingToEnterVehicle = true;
                r.tryingToEnterVehicleHandle = i;
                let t = -1;
                const n = GetVehicleMaxNumberOfPassengers(i);
                for (let e = -1; e < n; e++) {
                  if (GetPedInVehicleSeat(i, e) === 0) {
                    t = e;
                    break;
                  }
                }
                const a = ve(i);
                const o = lt(globalThis.mp.vehicles, i) ?? null;
                e.call("playerStartEnterVehicle", o, t);
                emitNet("ragemp:playerStartEnterVehicle", a, t);
              }
              const a = n && GetIsTaskActive(t, 2);
              if (a && !r.isTryingToExitVehicle) {
                r.isTryingToExitVehicle = true;
                const n = GetVehiclePedIsIn(t, false);
                const i = ve(n);
                const a = lt(globalThis.mp.vehicles, n) ?? null;
                e.call("playerStartExitVehicle", a);
                emitNet("ragemp:playerStartExitVehicle", i);
              } else if (!a && r.isTryingToExitVehicle) {
                r.isTryingToExitVehicle = false;
              }
            })(e, r);
            (function (e, t, r) {
              const n = St.get(e);
              const i = GetSelectedPedWeapon(t);
              if (i !== n.lastWeaponHash) {
                const t = n.lastWeaponHash;
                n.lastWeaponHash = i;
                e.call("playerWeaponChange", r, t, i);
                emitNet("ragemp:playerWeaponChange", t, i);
              }
            })(e, r, n);
            (function (e, t) {
              const r = St.get(e);
              const n = IsPedShooting(t);
              const a = GetSelectedPedWeapon(t);
              const o = GetAmmoInPedWeapon(t, a);
              if (a !== r.shotWeaponHash) {
                r.shotWeaponHash = a;
                r.lastWeaponAmmo = o;
                r.wasShooting = n;
                return;
              }
              let s = 0;
              const l = r.lastWeaponAmmo - o;
              if (l > 0) {
                s = l;
              } else if (l === 0 && !!n && !r.wasShooting && !IsPedReloading(t)) {
                s = 1;
              }
              if (s > 0) {
                const [r, n] = GetPedLastWeaponImpactCoord(t);
                const a = r ? new i(n[0], n[1], n[2]) : null;
                for (let t = 0; t < s; t++) {
                  e.call("playerWeaponShot", a, null);
                }
              }
              r.lastWeaponAmmo = o;
              r.wasShooting = n;
            })(e, r);
          }
        });
        on("onResourceStop", e => {
          if (e === GetCurrentResourceName()) {
            if (t.lifecycleTick != null) {
              clearTick(t.lifecycleTick);
              t.lifecycleTick = null;
            }
            if (t.renderTick != null) {
              clearTick(t.renderTick);
              t.renderTick = null;
            }
            if (typeof t.builtinTick == "function") {
              t.builtinTick();
              t.builtinTick = null;
            }
          }
        });
      })(e);
      (function (e) {
        const t = St.get(e);
        t.pendingProcs ||= new Map();
        t.procs ||= new Map();
        onNet("ragemp:procResult", (e, r, n) => {
          const i = t.pendingProcs.get(e);
          if (i) {
            if (i.timer) {
              clearTimeout(i.timer);
            }
            t.pendingProcs.delete(e);
            if (r) {
              i.reject(new Error(r));
            } else {
              i.resolve(n);
            }
          }
        });
        onNet("ragemp:callProc", async (e, r, ...n) => {
          const i = t.procs.get(e);
          if (i) {
            try {
              const e = await i(...j(n, Ye));
              emitNet("ragemp:callProcResult", r, null, e);
            } catch (e) {
              emitNet("ragemp:callProcResult", r, String(e), null);
            }
          } else {
            emitNet("ragemp:callProcResult", r, `Proc not found: ${e}`, null);
          }
        });
      })(e);
      (function (e) {
        if (typeof RegisterNuiCallbackType == "function") {
          RegisterNuiCallbackType("ragemp:__mouseEvent");
          on("__cfx_nui:ragemp:__mouseEvent", (t, r) => {
            r({});
            if (!t) {
              return;
            }
            const [n, i] = GetActiveScreenResolution();
            const a = n ? (+t.x || 0) / n : 0;
            const o = i ? (+t.y || 0) / i : 0;
            const s = +(t.button ?? 0) || 0;
            (function (e, t, r, n) {
              if (typeof r == "number") {
                qt = r;
              }
              if (typeof n == "number") {
                Kt = n;
              }
              const i = Yt();
              if (e === 0) {
                if (t && !Ht) {
                  Wt = i;
                }
                if (!t && Ht) {
                  Ut = i;
                }
                Ht = !!t;
              } else if (e === 2) {
                if (t && !Lt) {
                  zt = i;
                }
                if (!t && Lt) {
                  jt = i;
                }
                Lt = !!t;
              }
            })(s, !!t.down, a, o);
            Tr(e, a, o, t.down ? "down" : "up", s === 2 ? "right" : "left");
          });
        }
        setTick(() => {
          if (hr()) {
            return;
          }
          const t = IsDisabledControlJustPressed(2, 237);
          const r = IsDisabledControlJustReleased(2, 237);
          const n = IsDisabledControlJustPressed(2, 238);
          const i = IsDisabledControlJustReleased(2, 238);
          if (!t && !r && !n && !i) {
            return;
          }
          const a = GetDisabledControlNormal(2, 239);
          const o = GetDisabledControlNormal(2, 240);
          if (t) {
            Tr(e, a, o, "down", "left");
          }
          if (r) {
            Tr(e, a, o, "up", "left");
          }
          if (n) {
            Tr(e, a, o, "down", "right");
          }
          if (i) {
            Tr(e, a, o, "up", "right");
          }
        });
      })(e);
      onNet("ragemp:playerReady", t => {
        if (t && t !== GetCurrentResourceName()) {
          return;
        }
        const r = St.get(e);
        if (r.playerReadyFired || r.playerReadyWaiting) {
          return;
        }
        const n = () => {
          const t = globalThis.mp?.players?.local;
          return !!t && (r.playerReadyFired = true, e.call("playerReady", t), true);
        };
        if (n()) {
          return;
        }
        r.playerReadyWaiting = true;
        const i = setTick(() => {
          if (n()) {
            r.playerReadyWaiting = false;
            clearTick(i);
          }
        });
      });
    })(e);
  }
  function Tr(e, t, r, n, i) {
    const [a, o] = GetActiveScreenResolution();
    const s = t * (a || 0);
    const l = r * (o || 0);
    let d;
    let c;
    try {
      const e = function (e, t, r = -1, n = 0, i = 1000) {
        const [a, o] = GetWorldCoordFromScreenCoord(e, t);
        if (a && o) {
          return Gt({
            x: a[0],
            y: a[1],
            z: a[2]
          }, {
            x: a[0] + o[0] * i,
            y: a[1] + o[1] * i,
            z: a[2] + o[2] * i
          }, n, r);
        }
      }(t, r, -1, PlayerPedId());
      if (e) {
        d = e.position;
        c = e.entity;
      }
    } catch (e) {}
    e.call("click", s, l, n, i, t, r, d, c);
  }
  function vr(e, t, r, n) {
    const i = St.get(e);
    i.dataSnapshots ||= new WeakMap();
    let a = i.dataSnapshots.get(t);
    if (!a) {
      a = new Map();
      i.dataSnapshots.set(t, a);
    }
    const o = a.get(r);
    a.set(r, n);
    l.get(t).variables.set(r, n);
    const s = i.dataHandlers?.get(r);
    if (s) {
      for (const e of s) {
        try {
          e(t, n, o);
        } catch (e) {
          console.error(`[bridge] addDataHandler("${r}") handler error:`, e);
        }
      }
    }
  }
  function Ir() {
    const e = globalThis.mp?.events;
    if (e) {
      St.get(e).wasAlive = true;
    }
  }
  function Er(e, t, r) {
    if (!t || t === -1 || !r) {
      return false;
    }
    const n = St.get(e);
    return !!n.connectedPlayers.has(t) && (n.connectedPlayers.delete(t), n.streamedPlayers.delete(t), n.talkingPlayers.delete(t), e.call("playerQuit", r, "quit", ""), true);
  }
  function kr(e, t) {
    const r = St.get(e);
    r.connectedPlayers.delete(t);
    r.streamedPlayers.delete(t);
    r.talkingPlayers.delete(t);
  }
  class fr extends ze {
    constructor(e, t, r) {
      super(e, t, "player");
      (function (e, t) {
        ue.init(e, {
          playerIndex: t,
          dimension: undefined,
          voiceFX: undefined,
          mappedServerId: 0
        });
      })(this, r);
      l.get(this).stateBag = () => globalThis.Player(he(this)).state;
    }
    get ped() {
      const e = function (e) {
        const t = ue.get(e);
        const r = he(e);
        if (t.playerIndex >= 0) {
          if (!(r > 0) || GetPlayerServerId(t.playerIndex) === r) {
            return t.playerIndex;
          }
          t.playerIndex = -1;
        }
        if (r > 0) {
          const e = GetPlayerFromServerId(r);
          if (e >= 0 && GetPlayerServerId(e) === r) {
            t.playerIndex = e;
            return e;
          }
        }
        return -1;
      }(this);
      if (e >= 0) {
        return GetPlayerPed(e);
      } else {
        return 0;
      }
    }
    get handle() {
      return this.ped;
    }
    get name() {
      const e = this.getVariable("name");
      if (typeof e == "string") {
        return e;
      } else {
        return "";
      }
    }
    get source() {
      const e = ue.get(this);
      if (e.mappedServerId > 0) {
        return e.mappedServerId;
      } else if (e.playerIndex >= 0) {
        return GetPlayerServerId(e.playerIndex);
      } else {
        return 0;
      }
    }
    get real_id() {
      const e = this.getVariable("REMOTE_ID");
      return e ?? (Object.prototype.hasOwnProperty.call(this, "real_id") ? this.real_id : undefined);
    }
    get dimension() {
      if (globalThis.mp?.players?.local === this) {
        return Me();
      }
      const e = ue.get(this);
      if (e.playerIndex >= 0) {
        return Me();
      } else {
        return e.dimension ?? 0;
      }
    }
    set dimension(e) {
      ue.get(this).dimension = e;
    }
    get vehicle() {
      const e = GetVehiclePedIsIn(this.ped, false);
      if (e && e !== 0) {
        return globalThis.mp?.vehicles?.atHandle?.(e) ?? null;
      } else {
        return null;
      }
    }
    get aimTarget() {
      const [e, t] = GetPlayerTargetEntity(ue.get(this).playerIndex);
      if (e) {
        return t;
      } else {
        return null;
      }
    }
    get isTypingInTextChat() {
      return false;
    }
    get isVoiceActive() {
      return NetworkIsPlayerTalking(ue.get(this).playerIndex);
    }
    get ping() {
      return GetPlayerPing(ue.get(this).playerIndex);
    }
    get eyeColour() {
      return GetPedEyeColor(this.ped);
    }
    get hairColour() {
      return GetPedHairColor(this.ped);
    }
    get hairHighlightColour() {
      return GetPedHairHighlightColor(this.ped);
    }
    get action() {
      const e = this.ped;
      if (e) {
        if (IsEntityDead(e)) {
          return "dead";
        } else if (IsPedInAnyVehicle(e, false)) {
          return "in_vehicle";
        } else if (IsPedRagdoll(e)) {
          return "ragdoll";
        } else if (IsPedSwimming(e)) {
          return "swimming";
        } else if (IsPedFalling(e)) {
          return "falling";
        } else if (IsPedJumping(e)) {
          return "jumping";
        } else if (IsPedClimbing(e)) {
          return "climbing";
        } else if (IsPedInCover(e, false)) {
          return "in_cover";
        } else if (IsPedReloading(e)) {
          return "reloading";
        } else if (IsPedShooting(e)) {
          return "shooting";
        } else if (IsPedRunning(e)) {
          return "running";
        } else if (IsPedSprinting(e)) {
          return "sprinting";
        } else if (IsPedWalking(e)) {
          return "walking";
        } else {
          return "idle";
        }
      } else {
        return "unknown";
      }
    }
    get ip() {
      return "";
    }
    get rgscId() {
      return "";
    }
    get serial() {
      return "";
    }
    get socialClub() {
      return "";
    }
    get p2pEnabled() {
      return false;
    }
    set p2pEnabled(e) {}
    get p2pConnected() {
      return false;
    }
    getId() {
      return he(this);
    }
    getVariable(e) {
      const t = he(this);
      const r = this.remoteId;
      if (e === "name") {
        const n = function (e, t) {
          if (t > 0) {
            const e = je.get(t);
            if (e !== undefined) {
              return e;
            }
          }
          if (e > 0) {
            const t = qe.get(e);
            if (t !== undefined) {
              return t;
            }
          }
        }(t, r);
        if (n !== undefined) {
          l.get(this).variables.set(e, n);
          return n;
        }
      }
      const n = l.get(this);
      if (n.variables.has(e)) {
        return n.variables.get(e);
      }
      if (t > 0) {
        try {
          const i = GetStateBagValue(`player:${t}`, `${f}${e}`);
          if (i != null) {
            n.variables.set(e, i);
            if (e === "name") {
              Ke(t, r, i);
            }
            return i;
          }
        } catch (e) {}
      }
      const i = super.getVariable(e);
      if (i !== undefined) {
        n.variables.set(e, i);
        if (e === "name") {
          Ke(t, r, i);
        }
      }
      return i;
    }
    setVariable(e, t) {
      super.setVariable(e, t);
    }
    hasVariable(e) {
      return super.hasVariable(e);
    }
    setVariables(e) {
      super.setVariables(e);
    }
    getIndex() {
      return ue.get(this).playerIndex;
    }
    call(e, ...t) {
      globalThis.mp?.events?.call(e, this, ...t);
    }
    canPedHear(e) {
      return CanPedHearPlayer(ue.get(this).playerIndex, e);
    }
    changePed(e, t, r) {
      ChangePlayerPed(ue.get(this).playerIndex, e, !!t, !!r);
    }
    clearHasDamagedAtLeastOneNonAnimalPed() {
      ClearPlayerHasDamagedAtLeastOneNonAnimalPed(ue.get(this).playerIndex);
    }
    clearHasDamagedAtLeastOnePed() {
      ClearPlayerHasDamagedAtLeastOnePed(ue.get(this).playerIndex);
    }
    clearParachuteModelOverride() {
      ClearPlayerParachuteModelOverride(ue.get(this).playerIndex);
    }
    clearParachutePackModelOverride() {
      ClearPlayerParachutePackModelOverride(ue.get(this).playerIndex);
    }
    clearParachuteVariationOverride() {
      ClearPlayerParachuteVariationOverride(ue.get(this).playerIndex);
    }
    clearWantedLevel() {
      ClearPlayerWantedLevel(ue.get(this).playerIndex);
    }
    getCurrentStealthNoise() {
      return GetPlayerCurrentStealthNoise(ue.get(this).playerIndex);
    }
    getGroup() {
      return GetPlayerGroup(ue.get(this).playerIndex);
    }
    getHasReserveParachute() {
      return GetPlayerHasReserveParachute(ue.get(this).playerIndex);
    }
    getInvincible() {
      return GetPlayerInvincible(ue.get(this).playerIndex);
    }
    getMaxArmour() {
      return GetPlayerMaxArmour(ue.get(this).playerIndex);
    }
    getName() {
      return this.name;
    }
    getParachutePackTintIndex(e) {
      return GetPlayerParachutePackTintIndex(ue.get(this).playerIndex);
    }
    getPed() {
      return GetPlayerPed(ue.get(this).playerIndex);
    }
    getPedScriptIndex() {
      return GetPlayerPedScriptIndex(ue.get(this).playerIndex);
    }
    getReserveParachuteTintIndex(e) {
      return GetPlayerReserveParachuteTintIndex(ue.get(this).playerIndex);
    }
    getSprintStaminaRemaining() {
      return GetPlayerSprintStaminaRemaining(ue.get(this).playerIndex);
    }
    getSprintTimeRemaining() {
      return GetPlayerSprintTimeRemaining(ue.get(this).playerIndex);
    }
    getTeam() {
      return GetPlayerTeam(ue.get(this).playerIndex);
    }
    getUnderwaterTimeRemaining() {
      return GetPlayerUnderwaterTimeRemaining(ue.get(this).playerIndex);
    }
    getWantedCentrePosition() {
      return Te(GetPlayerWantedCentrePosition(ue.get(this).playerIndex));
    }
    getWantedLevel() {
      return GetPlayerWantedLevel(ue.get(this).playerIndex);
    }
    giveRagdollControl(e) {
      GivePlayerRagdollControl(ue.get(this).playerIndex, !!e);
    }
    hasBeenSpottedInStolenVehicle() {
      return HasPlayerBeenSpottedInStolenVehicle(ue.get(this).playerIndex);
    }
    hasDamagedAtLeastOneNonAnimalPed() {
      return HasPlayerDamagedAtLeastOneNonAnimalPed(ue.get(this).playerIndex);
    }
    hasDamagedAtLeastOnePed() {
      return HasPlayerDamagedAtLeastOnePed(ue.get(this).playerIndex);
    }
    hasLeftTheWorld() {
      return HasPlayerLeftTheWorld(ue.get(this).playerIndex);
    }
    isControlOn() {
      return IsPlayerControlOn(ue.get(this).playerIndex);
    }
    isFreeForAmbientTask() {
      return IsPlayerFreeForAmbientTask(ue.get(this).playerIndex);
    }
    isPlaying() {
      return IsPlayerPlaying(ue.get(this).playerIndex);
    }
    isPressingHorn() {
      return IsPlayerPressingHorn(ue.get(this).playerIndex);
    }
    isReadyForCutscene() {
      return IsPlayerReadyForCutscene(ue.get(this).playerIndex);
    }
    isRidingTrain() {
      return IsPlayerRidingTrain(ue.get(this).playerIndex);
    }
    isScriptControlOn() {
      return IsPlayerScriptControlOn(ue.get(this).playerIndex);
    }
    isTargettingAnything() {
      return IsPlayerTargettingAnything(ue.get(this).playerIndex);
    }
    isWantedLevelGreater(e) {
      return IsPlayerWantedLevelGreater(ue.get(this).playerIndex, e);
    }
    resetArrestState() {
      ResetPlayerArrestState(ue.get(this).playerIndex);
    }
    resetInputGait() {
      ResetPlayerInputGait(ue.get(this).playerIndex);
    }
    resetStamina() {
      ResetPlayerStamina(ue.get(this).playerIndex);
    }
    setAnimCurrentTime(e, t, r) {
      SetEntityAnimCurrentTime(this.ped, e, t, r);
    }
    setAnimSpeed(e, t, r) {
      SetEntityAnimSpeed(this.ped, e, t, r);
    }
    setCanBeHassledByGangs(e) {
      SetPlayerCanBeHassledByGangs(ue.get(this).playerIndex, !!e);
    }
    setCanDoDriveBy(e) {
      SetPlayerCanDoDriveBy(ue.get(this).playerIndex, !!e);
    }
    setCanLeaveParachuteSmokeTrail(e) {
      SetPlayerCanLeaveParachuteSmokeTrail(ue.get(this).playerIndex, !!e);
    }
    setCanUseCover(e) {
      SetPlayerCanUseCover(ue.get(this).playerIndex, !!e);
    }
    setControl(e, t) {
      SetPlayerControl(ue.get(this).playerIndex, !!e, t ?? 0);
    }
    setEveryoneIgnore(e) {
      SetEveryoneIgnorePlayer(ue.get(this).playerIndex, !!e);
    }
    setForcedAim(e) {
      SetPlayerForcedAim(ue.get(this).playerIndex, !!e);
    }
    setForcedZoom(e) {
      SetPlayerForcedZoom(ue.get(this).playerIndex, !!e);
    }
    setForceSkipAimIntro(e) {
      SetPlayerForceSkipAimIntro(ue.get(this).playerIndex, !!e);
    }
    setHasReserveParachute() {
      SetPlayerHasReserveParachute(ue.get(this).playerIndex);
    }
    setLockon(e) {
      SetPlayerLockon(ue.get(this).playerIndex, !!e);
    }
    setLockonRangeOverride(e) {
      SetPlayerLockonRangeOverride(ue.get(this).playerIndex, e);
    }
    setMaxArmour(e) {
      SetPlayerMaxArmour(ue.get(this).playerIndex, e);
    }
    setMayNotEnterAnyVehicle() {
      SetPlayerMayNotEnterAnyVehicle(ue.get(this).playerIndex);
    }
    setMayOnlyEnterThisVehicle(e) {
      SetPlayerMayOnlyEnterThisVehicle(ue.get(this).playerIndex, e?.handle ?? e);
    }
    setMeleeWeaponDamageModifier(e) {
      SetPlayerMeleeWeaponDamageModifier(ue.get(this).playerIndex, e, false);
    }
    get model() {
      const e = this.handle;
      if (e && DoesEntityExist(e)) {
        return n(GetEntityModel(e));
      } else {
        return n(l.get(this).model);
      }
    }
    set model(e) {
      const t = n(e);
      l.get(this).model = t;
      if (globalThis.mp?.players?.local !== this) {
        return;
      }
      if (!t) {
        return;
      }
      RequestModel(t);
      for (let e = 0; e < 100 && !HasModelLoaded(t); e++) {
        RequestModel(t);
        Wait(0);
      }
      if (!HasModelLoaded(t)) {
        return;
      }
      const r = PlayerPedId();
      const i = r ? GetEntityHealth(r) : 200;
      const a = r ? GetPedArmour(r) : 0;
      SetPlayerModel(PlayerId(), t);
      SetModelAsNoLongerNeeded(t);
      const o = PlayerPedId();
      if (o) {
        if (t === GetHashKey("mp_m_freemode_01") || t === GetHashKey("mp_f_freemode_01")) {
          SetPedDefaultComponentVariation(o);
        }
        if (i > 0) {
          SetEntityHealth(o, i);
        }
        if (a > 0) {
          SetPedArmour(o, a);
        }
      }
    }
    setModel(e) {
      if (globalThis.mp?.players?.local !== this) {
        return;
      }
      const t = typeof e == "string" ? GetHashKey(e) : e;
      if (t) {
        (async () => {
          const e = globalThis.mp;
          if (!(await e.game.streaming.requestModelAsync(t))) {
            return;
          }
          const r = PlayerPedId();
          const n = r ? GetEntityHealth(r) : 200;
          const i = r ? GetPedArmour(r) : 0;
          SetPlayerModel(PlayerId(), t);
          e.game.streaming.setModelAsNoLongerNeeded(t);
          const a = PlayerPedId();
          if (a) {
            if (t === GetHashKey("mp_m_freemode_01") || t === GetHashKey("mp_f_freemode_01")) {
              SetPedDefaultComponentVariation(a);
            }
            if (n > 0) {
              SetEntityHealth(a, n);
            }
            if (i > 0) {
              SetPedArmour(a, i);
            }
          }
        })();
      }
    }
    setNoiseMultiplier(e) {
      SetPlayerNoiseMultiplier(ue.get(this).playerIndex, e);
    }
    setParachuteModelOverride(e) {
      SetPlayerParachuteModelOverride(ue.get(this).playerIndex, e);
    }
    setParachutePackModelOverride(e) {
      SetPlayerParachutePackModelOverride(ue.get(this).playerIndex, e);
    }
    setParachutePackTintIndex(e) {
      SetPlayerParachutePackTintIndex(ue.get(this).playerIndex, e);
    }
    setParachuteSmokeTrailColor(e, t, r) {
      SetPlayerParachuteSmokeTrailColor(ue.get(this).playerIndex, e, t, r);
    }
    setParachuteVariationOverride(e, t, r, n) {
      SetPlayerParachuteVariationOverride(ue.get(this).playerIndex, e, t, r, !!n);
    }
    setPoliceIgnore(e) {
      SetPoliceIgnorePlayer(ue.get(this).playerIndex, !!e);
    }
    setReserveParachuteTintIndex(e) {
      SetPedReserveParachuteTintIndex(this.ped, e);
    }
    setSimulateAiming(e) {
      SetPlayerSimulateAiming(ue.get(this).playerIndex, !!e);
    }
    setSneakingNoiseMultiplier(e) {
      SetPlayerSneakingNoiseMultiplier(ue.get(this).playerIndex, e);
    }
    setSprint(e) {
      SetPlayerSprint(ue.get(this).playerIndex, !!e);
    }
    setStealthPerceptionModifier(e) {
      SetPlayerStealthPerceptionModifier(ue.get(this).playerIndex, e);
    }
    setTeam(e) {
      SetPlayerTeam(ue.get(this).playerIndex, e);
    }
    setVehicleDamageModifier(e) {
      SetPlayerVehicleDamageModifier(ue.get(this).playerIndex, e);
    }
    setVehicleDefenseModifier(e) {
      SetPlayerVehicleDefenseModifier(ue.get(this).playerIndex, e);
    }
    setWantedCentrePosition(e, t, r) {
      SetPlayerWantedCentrePosition(ue.get(this).playerIndex, e, t, r, false, false);
    }
    setWantedLevel(e, t) {
      SetPlayerWantedLevel(ue.get(this).playerIndex, e, t ?? false);
    }
    setWantedLevelNoDrop(e, t) {
      SetPlayerWantedLevelNoDrop(ue.get(this).playerIndex, e, !!t);
    }
    setWantedLevelNow(e) {
      SetPlayerWantedLevel(ue.get(this).playerIndex, arguments.length ? this.getWantedLevel() : 0, false);
      SetPlayerWantedLevelNow(ue.get(this).playerIndex, !!e);
    }
    setWeaponDamageModifier(e) {
      SetPlayerWeaponDamageModifier(ue.get(this).playerIndex, e);
    }
    setWeaponDefenseModifier(e) {
      SetPlayerWeaponDefenseModifier(ue.get(this).playerIndex, e);
    }
    addVehicleSubtaskAttack(e) {
      AddVehicleSubtaskAttackPed(this.ped, e);
    }
    addVehicleSubtaskAttackCoord(e, t, r) {
      AddVehicleSubtaskAttackCoord(this.ped, e, t, r);
    }
    clearSecondaryTask() {
      ClearPedSecondaryTask(this.ped);
    }
    explodeHead(e) {
      ExplodePedHead(this.ped, e);
    }
    hideBloodDamageByZone(e, t) {
      HidePedBloodDamageByZone(this.ped, e, !!t);
    }
    isClimbing() {
      return IsPedClimbing(this.ped);
    }
    isJumping() {
      return IsPedJumping(this.ped);
    }
    isInCover(e) {
      return IsPedInCover(this.ped, !!e);
    }
    setClothPinFrames(e) {
      SetPedClothPinFrames(this.ped, e);
    }
    taskVehicleShootAt(e, t) {
      TaskVehicleShootAtPed(this.ped, e, t ?? 1);
    }
    updateTaskSweepAim(e) {
      UpdateTaskSweepAimEntity(this.ped, e);
    }
    getAnimCurrentTime(e, t) {
      return GetEntityAnimCurrentTime(this.ped, e, t);
    }
    getCurrentScriptedAnim() {
      return GetEntityCurrentAnimDict(this.ped);
    }
    getCurrentScenarioId() {
      return GetScriptTaskStatus(this.ped, 1846254223);
    }
    taskBleedingDeath() {
      TaskPedDieInVehicle(this.ped, 0);
    }
    taskRevive() {
      if (globalThis.mp?.players?.local === this) {
        const e = PlayerPedId();
        if (!e || e === 0) {
          return;
        }
        if (!IsPedDeadOrDying(e, true)) {
          ClearPedTasksImmediately(e);
          return;
        }
        const t = GetEntityCoords(e, false);
        NetworkResurrectLocalPlayer(t[0], t[1], t[2], GetEntityHeading(e), 0, false);
        ClearPedTasksImmediately(e);
        Ir();
        return;
      }
    }
    prepareScriptedDeathPose() {
      if (globalThis.mp?.players?.local !== this) {
        return;
      }
      const e = PlayerPedId();
      if (!e || e === 0) {
        return;
      }
      const t = GetEntityCoords(e, false);
      const r = GetEntityHeading(e);
      const n = IsPedRagdoll(e) || IsPedRunningRagdollTask(e);
      const i = IsPedDeadOrDying(e, true) || IsPedFatallyInjured(e) || IsPedInWrithe(e);
      if (n || i) {
        if (n) {
          ClearPedTasksImmediately(e);
          ResetPedRagdollTimer(e);
        }
        NetworkResurrectLocalPlayer(t[0], t[1], t[2], r, 0, false);
        SetEntityCoordsNoOffset(e, t[0], t[1], t[2], false, false, false);
        SetEntityHeading(e, r);
        ClearPedTasksImmediately(e);
        Ir();
      }
    }
    taskCrawl(e) {
      TaskGoToCoordsWhilstAimingAtCoords(this.ped, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, false, false, 0);
    }
    taskCrawlToCoords(e, t, r) {
      TaskGoToCoordAnyMeans(this.ped, e.x, e.y, e.z, 1, 0, false, 786603, 0);
    }
    hasTeleportFinished() {
      return true;
    }
    hasUseScenarioTask() {
      return IsPedUsingAnyScenario(this.ped);
    }
    getVoiceAttribute(e) {}
    setVoiceAttribute(e, t) {}
    closeVoiceStream() {}
    get voiceAutoVolume() {
      return 1;
    }
    set voiceAutoVolume(e) {}
    get voiceVolume() {
      return 1;
    }
    set voiceVolume(e) {
      MumbleSetAudioInputDistance(e * 20);
    }
    get voice3d() {
      return false;
    }
    set voice3d(e) {}
    setVoiceFx(e, t) {}
    removeVoiceFx(e) {}
    resetVoiceFx(e) {}
    setVoiceFxChorus(e, t) {}
    setVoiceFxCompressor(e, t) {}
    setVoiceFxDistortion(e, t) {}
    setVoiceFxEcho(e, t) {}
    setVoiceFxFlanger(e, t) {}
    setVoiceFxGargle(e, t) {}
    setVoiceFxParamEq(e, t) {}
    setVoiceFxReverb(e, t) {}
    setVoiceFxVolume(e, t) {}
    setVoiceFxPeakEq(e, t) {}
    setVoiceFxBQF(e, t) {}
    get isPositionFrozen() {
      const e = globalThis;
      if (e.mp?.players?.local === this) {
        return !!globalThis.disablePlayerHandle;
      } else {
        return IsEntityPositionFrozen(this.ped);
      }
    }
    set isPositionFrozen(e) {
      this.freezePosition(!!e);
    }
    freezePosition(e) {
      const t = this.ped;
      if (t) {
        FreezeEntityPosition(t, !!e);
      }
    }
    freezeEntityPosition(e) {
      const t = globalThis;
      if (t.mp?.players?.local !== this) {
        return;
      }
      const r = !!e;
      const n = globalThis;
      n.disablePlayerHandle = r;
      n.disableVehicleHandle = r;
    }
    get voiceFX() {
      const e = ue.get(this);
      e.voiceFX ||= {
        setFX() {},
        removeFX() {},
        resetFX() {},
        getFXType: () => 0,
        setFXChorus() {},
        setFXCompressor() {},
        setFXDistortion() {},
        setFXEcho() {},
        setFXFlanger() {},
        setFXGargle() {},
        setFXI3DL2Reverb() {},
        setFXParamEQ() {},
        setFXReverb() {}
      };
      return e.voiceFX;
    }
  }
  const Dr = o();
  function Fr(e) {
    const t = globalThis.mp?.players;
    if (!t) {
      return null;
    }
    const r = function (e, t) {
      return Dr.get(e).serverIdToRemote.get(t);
    }(t, e);
    if (r === undefined) {
      return null;
    } else {
      return t.atRemoteId(r);
    }
  }
  function Nr(e) {
    Dr.init(e, {
      serverIdToRemote: new Map(),
      remoteToServerId: new Map(),
      activeByServerId: new Map()
    });
    ce = t => Dr.get(e).remoteToServerId.get(t);
    (function (e) {
      onNet("ragemp:player:map", (t, r) => Br(e, t, r));
      onNet("ragemp:player:unmap", t => function (e, t) {
        const r = Dr.get(e);
        const n = r.serverIdToRemote.get(t);
        (function (e, t) {
          if (Number.isFinite(e) && e > 0) {
            qe.delete(e);
          }
          if (Number.isFinite(t) && t > 0) {
            je.delete(t);
          }
        })(t, n);
        r.serverIdToRemote.delete(t);
        r.activeByServerId.delete(t);
        if (n === undefined) {
          return;
        }
        r.remoteToServerId.delete(n);
        if (e.local && e.local.remoteId === n) {
          return;
        }
        const i = e.atRemoteId(n);
        if (i) {
          const r = globalThis.mp?.events;
          if (r) {
            Er(r, t, i);
          }
          y(e, i.id);
          de(e, i.id);
        }
      }(e, t));
      onNet("ragemp:playerVarSync", (e, t, r) => {
        (function (e, t, r) {
          if (!Number.isFinite(e) || e <= 0) {
            return;
          }
          const n = Fr(e);
          if (t === "name") {
            Ke(e, n?.remoteId ?? 0, r);
          }
          if (n) {
            l.get(n).variables.set(t, r);
            if (yr) {
              vr(yr, n, t, r);
            }
          }
        })(e, t, r);
      });
      onNet("ragemp:playerOwnVarSync", (e, t) => {
        (function (e, t) {
          const r = globalThis.mp?.players?.local;
          if (!r) {
            return;
          }
          const n = l.get(r);
          n.ownVariables ||= new Map();
          if (t === undefined) {
            n.ownVariables.delete(e);
            n.variables.delete(e);
          } else {
            n.ownVariables.set(e, t);
            n.variables.set(e, t);
          }
          if (yr) {
            vr(yr, r, e, t);
          }
        })(e, t);
      });
      onNet("ragemp:player:snapshot", t => {
        if (Array.isArray(t)) {
          for (const r of t) {
            if (Array.isArray(r)) {
              Br(e, r[0], r[1]);
            }
          }
        }
      });
    })(e);
    (function (e) {
      const t = () => {
        try {
          const t = PlayerId();
          const r = GetPlayerServerId(t);
          if (!r) {
            return false;
          }
          e.local = new fr(k, 0, t);
          const i = GetPlayerPed(t);
          if (i && DoesEntityExist(i)) {
            l.get(e.local).model = n(GetEntityModel(i));
          }
          le(e, e.local);
          const a = Dr.get(e).serverIdToRemote.get(r);
          if (a !== undefined) {
            br(e, a);
          }
          return true;
        } catch (e) {
          return false;
        }
      };
      if (!t()) {
        const e = setTick(() => {
          if (t()) {
            clearTick(e);
          }
        });
      }
    })(e);
    (function (e) {
      ye(t => {
        const r = Dr.get(e);
        const n = PlayerId();
        r.activeByServerId.clear();
        for (const i of t.players) {
          if (i === n) {
            continue;
          }
          const t = GetPlayerServerId(i);
          if (!t || t === -1) {
            continue;
          }
          r.activeByServerId.set(t, i);
          const a = r.serverIdToRemote.get(t);
          if (a !== undefined) {
            xr(e, a, i, t);
          }
        }
        for (const [, t] of p(e).entities) {
          if (e.local && t === e.local) {
            continue;
          }
          const n = r.remoteToServerId.get(t.remoteId);
          if (n !== undefined && !r.activeByServerId.has(n)) {
            const e = ue.get(t);
            if (e.playerIndex >= 0) {
              e.playerIndex = -1;
            }
          }
        }
      });
    })(e);
    onNet("ragemp:setHealth", e => {
      const t = PlayerPedId();
      if (!t) {
        return;
      }
      const r = O(e);
      var n;
      n = r;
      if (yr) {
        St.get(yr).trackedHealth = n;
      }
      SetEntityHealth(t, r);
    });
    onNet("ragemp:setArmour", e => {
      const t = PlayerPedId();
      if (t) {
        SetPedArmour(t, e);
      }
    });
    onNet("ragemp:setAlpha", e => {
      SetEntityAlpha(PlayerPedId(), e, false);
    });
    onNet("ragemp:removeFromVehicleForce", () => {
      const e = PlayerPedId();
      if (!e || e === 0) {
        return;
      }
      ClearPedTasksImmediately(e);
      if (!IsPedInAnyVehicle(e, false)) {
        return;
      }
      const t = GetVehiclePedIsIn(e, false);
      if (!t || t === 0) {
        return;
      }
      const [r, n, i] = GetOffsetFromEntityInWorldCoords(t, 2.5, 0, 0.5);
      SetEntityCoordsNoOffset(e, r, n, i, false, false, false);
    });
    onNet("ragemp:enableVoiceTo", (e, t) => {
      const r = globalThis.mp?.voiceChat;
      if (r && t && GetPlayerServerId(PlayerId()) === e) {
        r.listenTo(t);
      }
    });
    onNet("ragemp:disableVoiceTo", (e, t) => {
      const r = globalThis.mp?.voiceChat;
      if (r && t && GetPlayerServerId(PlayerId()) === e) {
        r.stopListenTo(t);
      }
    });
  }
  function br(e, t) {
    const r = e.local;
    if (r && r.remoteId !== t) {
      (function (e, t, r) {
        c(t, r);
        if (r !== s) {
          p(e).remoteIndex.set(r, t);
        }
      })(e, r, t);
    }
  }
  function xr(e, t, r, n) {
    if (e.atRemoteId(t)) {
      const i = e.atRemoteId(t);
      const a = ue.get(i);
      if (n && n > 0) {
        a.mappedServerId = n;
      }
      if (r >= 0) {
        a.playerIndex = r;
      }
      return;
    }
    const i = se(e, new fr(k, t, r));
    if (n && n > 0) {
      ue.get(i).mappedServerId = n;
    }
  }
  function Br(e, t, r) {
    if (t == null || r == null) {
      return;
    }
    const n = Dr.get(e);
    const i = n.serverIdToRemote.get(t);
    if (i !== undefined && i !== r) {
      n.remoteToServerId.delete(i);
    }
    n.serverIdToRemote.set(t, r);
    n.remoteToServerId.set(r, t);
    try {
      if (e.local && GetPlayerServerId(PlayerId()) === t) {
        br(e, r);
        ue.get(e.local).mappedServerId = t;
        return;
      }
    } catch (e) {}
    const a = n.activeByServerId.get(t);
    if (a !== undefined) {
      xr(e, r, a, t);
    } else if (e.atRemoteId(r)) {
      const n = e.atRemoteId(r);
      if (n) {
        ue.get(n).mappedServerId = t;
      }
    } else {
      xr(e, r, -1, t);
    }
  }
  class Rr extends S {
    constructor() {
      super();
      Nr(this);
    }
    atHandle(e) {
      if (!e || typeof DoesEntityExist != "function" || !DoesEntityExist(e)) {
        return null;
      }
      if (typeof IsPedAPlayer != "function" || !IsPedAPlayer(e)) {
        return null;
      }
      if (typeof NetworkGetPlayerIndexFromPed != "function") {
        return null;
      }
      const t = NetworkGetPlayerIndexFromPed(e);
      if (t < 0) {
        return null;
      }
      const r = GetPlayerServerId(t);
      if (r && r !== -1) {
        return this.atServerId(r);
      } else {
        return null;
      }
    }
    get weapon() {
      return this.local?.weapon ?? 0;
    }
    get health() {
      return this.local?.health ?? 100;
    }
    get position() {
      return this.local?.position ?? null;
    }
    get heading() {
      return this.local?.heading ?? 0;
    }
    get streamed() {
      return this.toArray();
    }
    forEachInStreamRange(e) {
      this.streamed.forEach(e);
    }
    atServerId(e) {
      return Fr(e);
    }
  }
  const Gr = o();
  const Mr = new Map();
  const Vr = new Map();
  const wr = new Map();
  const _r = new Set();
  let Or = false;
  let Hr = Z;
  let Lr = false;
  function Wr(e, t, r, n, i, a) {
    const o = e - n;
    const s = t - i;
    const l = r - a;
    return o * o + s * s + l * l;
  }
  function Ur(e, t) {
    const r = Wr(e.px, e.py, e.pz, t.x, t.y, t.z);
    if (!e.hasCam) {
      return r;
    }
    const n = Wr(e.cx, e.cy, e.cz, t.x, t.y, t.z);
    if (r < n) {
      return r;
    } else {
      return n;
    }
  }
  function zr() {
    const e = PlayerPedId();
    if (!e || !DoesEntityExist(e)) {
      return null;
    }
    const [t, r, n] = GetEntityCoords(e, false);
    let i = 0;
    let a = 0;
    let o = 0;
    let s = false;
    try {
      const e = GetFinalRenderedCamCoord();
      if (e) {
        i = e[0];
        a = e[1];
        o = e[2];
        s = true;
      }
    } catch {
      s = false;
    }
    return {
      px: t,
      py: r,
      pz: n,
      cx: i,
      cy: a,
      cz: o,
      hasCam: s
    };
  }
  function jr(e, t) {
    return `${Math.floor(e / 64)}:${Math.floor(t / 64)}`;
  }
  function qr(e) {
    e.cellKey = jr(e.x, e.y);
    let t = wr.get(e.cellKey);
    if (!t) {
      t = new Set();
      wr.set(e.cellKey, t);
    }
    t.add(e.object.id);
  }
  function Kr(e) {
    const t = wr.get(e.cellKey);
    if (t) {
      t.delete(e.object.id);
      if (t.size === 0) {
        wr.delete(e.cellKey);
      }
    }
  }
  function Yr(e) {
    if (jr(e.x, e.y) !== e.cellKey) {
      Kr(e);
      qr(e);
    }
  }
  function Zr(e) {
    if (e > Hr) {
      Hr = e;
    }
  }
  function Jr(e, t) {
    if (!t) {
      return;
    }
    const r = l.get(e).variables;
    for (const [e, n] of Object.entries(t)) {
      if (n === undefined) {
        r.delete(e);
      } else {
        r.set(e, n);
      }
    }
  }
  function Xr(e) {
    const t = e.object;
    const r = l.get(t);
    r.model = e.model;
    r.alpha = e.alpha;
    r.dimension = e.dimension;
    r.position = new i(e.x, e.y, e.z);
    const n = Gr.get(t);
    n.rotation = new i(e.rx, e.ry, e.rz);
    n.streamingRange = e.streamingRange;
    const a = fe(t);
    a.serverModel = e.model;
    a.serverPos = {
      x: e.x,
      y: e.y,
      z: e.z
    };
    a.serverDimension = e.dimension;
  }
  function Qr(e, t) {
    SetEntityAsMissionEntity(t, true, true);
    FreezeEntityPosition(t, true);
    SetEntityCoordsNoOffset(t, e.x, e.y, e.z, false, false, false);
    SetEntityRotation(t, e.rx, e.ry, e.rz, 2, false);
    SetEntityCollision(t, true, true);
    SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(t, true);
    if (e.alpha !== 255) {
      SetEntityAlpha(t, e.alpha, false);
    } else {
      ResetEntityAlpha(t);
    }
    SetEntityVisible(t, !Gr.get(e.object).hidden, false);
    SetEntityLodDist(t, Math.max(e.streamingRange, 50) | 0);
  }
  function $r(e, t) {
    e.loading = false;
    if (!e.spawned) {
      return;
    }
    e.spawned = false;
    _r.delete(e.object.id);
    const r = e.object.handle;
    (function (e, t, r = true) {
      const n = Ee.get(e);
      if (t.handle) {
        n.handleToEntity.delete(t.handle);
      }
      if (p(e).entities.has(t.id)) {
        if (r) {
          globalThis.mp?.events?.call("entityStreamOut", t);
          n.onStreamOut?.(t);
        }
        g(e, t.id);
      }
      l.get(t).handle = null;
    })(e.pool, e.object, t);
    (function (e) {
      if (e && (typeof DoesEntityExist != "function" || DoesEntityExist(e))) {
        if (IsEntityAttached(e)) {
          DetachEntity(e, true, true);
        }
        SetEntityAsMissionEntity(e, true, true);
        DeleteEntity(e);
      }
    })(r);
  }
  function en(e, t) {
    e.loading = false;
    if (!Mr.has(e.object.id) || !rn(e)) {
      SetModelAsNoLongerNeeded(t);
      return;
    }
    const r = CreateObjectNoOffset(t, e.x, e.y, e.z, false, false, false);
    SetModelAsNoLongerNeeded(t);
    if (r && (typeof DoesEntityExist != "function" || DoesEntityExist(r))) {
      Qr(e, r);
      (function (e, t, r) {
        const n = Ee.get(e);
        const i = p(e).entities;
        const a = n.handleToEntity.get(r);
        if (a && a !== t) {
          n.handleToEntity.delete(r);
          if (i.has(a.id)) {
            g(e, a.id);
          }
        }
        if (t.handle && t.handle !== r) {
          n.handleToEntity.delete(t.handle);
        }
        l.get(t).handle = r;
        n.handleToEntity.set(r, t);
        if (!i.has(t.id)) {
          m(e, t);
          globalThis.mp?.events?.call("entityStreamIn", t);
          n.onStreamIn?.(t, r, 0);
        }
      })(e.pool, e.object, r);
      e.spawned = true;
      _r.add(e.object.id);
    }
  }
  function tn(e) {
    if (e.spawned || e.loading) {
      return;
    }
    const t = n(e.model);
    if (!t) {
      console.warn(`[ragemp-bridge] mp.objects: invalid model ${e.model}`);
      return;
    }
    if (HasModelLoaded(t)) {
      e.loading = true;
      en(e, t);
      return;
    }
    e.loading = true;
    RequestModel(t);
    const r = GetGameTimer();
    const i = setTick(() => {
      if (!e.loading || !Mr.has(e.object.id)) {
        clearTick(i);
        e.loading = false;
        return;
      }
      if (HasModelLoaded(t)) {
        clearTick(i);
        en(e, t);
      } else if (GetGameTimer() - r > 15000) {
        clearTick(i);
        e.loading = false;
        console.warn(`[ragemp-bridge] mp.objects: model ${t} failed to load after 15s.`);
      } else {
        RequestModel(t);
      }
    });
  }
  function rn(e) {
    if (!we(e.dimension)) {
      return false;
    }
    const t = zr();
    if (!t) {
      return false;
    }
    const r = e.streamingRange;
    return Ur(t, e) <= r * r;
  }
  function nn(e, t, r, n) {
    const i = Math.floor(t / 64);
    const a = Math.floor(r / 64);
    for (let t = -n; t <= n; t++) {
      for (let r = -n; r <= n; r++) {
        const n = wr.get(`${i + t}:${a + r}`);
        if (n) {
          for (const t of n) {
            e.add(t);
          }
        }
      }
    }
  }
  function an(e, t, r, n) {
    const i = we(e.dimension);
    const a = Ur(t, e);
    const o = e.streamingRange * e.streamingRange;
    const s = (e.streamingRange + 48) * (e.streamingRange + 48);
    if (i && !(e.spawned ? a >= s : a > o)) {
      r.push({
        rec: e,
        dist: a
      });
    } else if (e.spawned) {
      n.push(e);
    }
  }
  function sn(e) {
    if (Mr.size === 0) {
      return;
    }
    const t = zr();
    if (!t) {
      return;
    }
    const r = function (e) {
      const t = Math.ceil(Hr / 64) + 1;
      const r = new Set();
      nn(r, e.px, e.py, t);
      if (e.hasCam) {
        nn(r, e.cx, e.cy, t);
      }
      return r;
    }(t);
    const n = [];
    const i = [];
    const a = new Set();
    for (const e of r) {
      const r = Mr.get(e);
      if (r) {
        a.add(e);
        an(r, t, n, i);
      }
    }
    for (const e of _r) {
      if (a.has(e)) {
        continue;
      }
      const t = Mr.get(e);
      if (t) {
        i.push(t);
      }
    }
    let o = 24;
    for (const e of i) {
      if (o <= 0) {
        break;
      }
      $r(e, true);
      o--;
    }
    n.sort((e, t) => e.dist - t.dist);
    const s = function (e) {
      const t = e.maxStreamed;
      if (typeof t == "number" && t > 0) {
        return t;
      } else {
        return 400;
      }
    }(e);
    let l = 16;
    for (let e = 0; e < n.length; e++) {
      const t = n[e].rec;
      if (e < s) {
        if (!t.spawned && l > 0) {
          tn(t);
          l--;
        }
      } else if (t.spawned && o > 0) {
        $r(t, true);
        o--;
      }
    }
  }
  function ln(e) {
    const t = e.streamingRange > 0 ? e.streamingRange : Z;
    return {
      model: n(e.model),
      x: e.x,
      y: e.y,
      z: e.z,
      rx: e.rotX,
      ry: e.rotY,
      rz: e.rotZ,
      alpha: e.alpha,
      dimension: e.dimension,
      streamingRange: t
    };
  }
  function dn(e) {
    return function (e) {
      if (J(e)) {
        const t = Number(e.id);
        const r = Number(e.model);
        const n = Number(e.x);
        const i = Number(e.y);
        const a = Number(e.z);
        if (Number.isFinite(t)) {
          return {
            id: t,
            model: r,
            x: n,
            y: i,
            z: a,
            rotX: Number(e.rotX) || 0,
            rotY: Number(e.rotY) || 0,
            rotZ: Number(e.rotZ) || 0,
            alpha: e.alpha === undefined ? 255 : Number(e.alpha),
            dimension: e.dimension === undefined ? 0 : Number(e.dimension),
            streamingRange: e.streamingRange === undefined || Number(e.streamingRange) <= 0 ? Z : Number(e.streamingRange),
            vars: e.vars
          };
        } else {
          return null;
        }
      }
      if (!Array.isArray(e) || e.length < 5) {
        return null;
      }
      const t = Number(e[0]);
      const r = Number(e[1]);
      const n = Number(e[2]);
      const i = Number(e[3]);
      const a = Number(e[4]);
      if (!Number.isFinite(t)) {
        return null;
      }
      let o;
      let s = 0;
      let l = 0;
      let d = 0;
      let c = 255;
      let u = 0;
      let h = Z;
      if (e.length > 5) {
        let t = 5;
        const r = Number(e[t++]);
        if (r & 1) {
          s = Number(e[t++]);
          l = Number(e[t++]);
          d = Number(e[t++]);
        }
        if (r & 2) {
          c = Number(e[t++]);
        }
        if (r & 4) {
          u = Number(e[t++]);
        }
        if (r & 8) {
          h = Number(e[t++]);
        }
        if (r & 16) {
          o = e[t++];
        }
      }
      return {
        id: t,
        model: r,
        x: n,
        y: i,
        z: a,
        rotX: s,
        rotY: l,
        rotZ: d,
        alpha: c,
        dimension: u,
        streamingRange: h,
        vars: o
      };
    }(e);
  }
  function cn(e) {
    return Mr.has(e);
  }
  function un(e, t) {
    const r = dn(t);
    if (!r) {
      return null;
    }
    if (Vr.has(r.id)) {
      hn(e, r.id, t);
      return Vr.get(r.id).object;
    }
    const i = function (e, t, r) {
      const i = Ee.get(e);
      const a = i.byRemote.get(t);
      if (a) {
        return a;
      }
      if (!i.makeEntity) {
        return null;
      }
      const o = et(i, t, null);
      const s = fe(o);
      s.isServer = true;
      s.managedLocally = true;
      s.netId = 0;
      const d = n(r?.model ?? 0);
      s.serverModel = d;
      if (d) {
        l.get(o).model = d;
      }
      s.serverPos = {
        x: r?.x ?? 0,
        y: r?.y ?? 0,
        z: r?.z ?? 0
      };
      s.serverDimension = r?.dimension ?? 0;
      i.byRemote.set(t, o);
      return o;
    }(e, r.id, r);
    if (!i) {
      return null;
    }
    const a = ln(r);
    Jr(i, r.vars);
    const o = {
      pool: e,
      object: i,
      ...a,
      cellKey: "",
      spawned: false,
      loading: false
    };
    Xr(o);
    qr(o);
    Mr.set(i.id, o);
    Vr.set(r.id, o);
    Zr(o.streamingRange);
    (function (e) {
      if (!Or) {
        Or = true;
        ye(() => sn(e));
        Ve(() => sn(e));
        if (!Lr && typeof on == "function") {
          Lr = true;
          on("onResourceStop", e => {
            if (typeof GetCurrentResourceName != "function" || e === GetCurrentResourceName()) {
              for (const e of Mr.values()) {
                $r(e, false);
              }
            }
          });
        }
      }
    })(e);
    const s = zr();
    if (s) {
      const e = Ur(s, o);
      if (we(o.dimension) && e <= o.streamingRange * o.streamingRange) {
        tn(o);
      }
    }
    return i;
  }
  function hn(e, t, r) {
    const n = dn(r);
    if (!n) {
      return;
    }
    const i = Vr.get(t);
    if (!i) {
      un(e, r);
      return;
    }
    const a = i.model;
    const o = ln(n);
    i.model = o.model;
    i.x = o.x;
    i.y = o.y;
    i.z = o.z;
    i.rx = o.rx;
    i.ry = o.ry;
    i.rz = o.rz;
    i.alpha = o.alpha;
    i.dimension = o.dimension;
    i.streamingRange = o.streamingRange;
    Jr(i.object, n.vars);
    Xr(i);
    Yr(i);
    Zr(i.streamingRange);
    if (i.spawned) {
      if (a !== i.model || !we(i.dimension)) {
        $r(i, true);
        if (rn(i)) {
          tn(i);
        }
        return;
      }
      const e = i.object.handle;
      if (e && DoesEntityExist(e)) {
        Qr(i, e);
      }
    } else if (rn(i)) {
      tn(i);
    }
  }
  function pn(e, t) {
    const r = Vr.get(t);
    if (r) {
      r.loading = false;
      $r(r, true);
      Kr(r);
      Mr.delete(r.object.id);
      Vr.delete(t);
      ct(e, r.object.id);
      if (r.streamingRange >= Hr) {
        (function () {
          let e = Z;
          for (const t of Mr.values()) {
            if (t.streamingRange > e) {
              e = t.streamingRange;
            }
          }
          Hr = e;
        })();
      }
    }
  }
  function mn(e) {
    const t = Mr.get(e.id);
    if (!t) {
      return;
    }
    const r = l.get(e).position;
    if (r) {
      t.x = r.x;
      t.y = r.y;
      t.z = r.z;
    }
    const n = Gr.get(e).rotation;
    t.rx = n.x;
    t.ry = n.y;
    t.rz = n.z;
    t.alpha = l.get(e).alpha;
    t.dimension = l.get(e).dimension;
    t.model = l.get(e).model || t.model;
    t.streamingRange = Gr.get(e).streamingRange || t.streamingRange;
    Xr(t);
    Yr(t);
    if (t.spawned) {
      const r = e.handle;
      if (r && DoesEntityExist(r)) {
        Qr(t, r);
      }
    }
  }
  function gn(e) {
    _e(e, {
      createEvent: "ragemp:objectCreate",
      syncAllEvent: "ragemp:objectSyncAll",
      updateEvent: "ragemp:objectUpdate",
      destroyEvent: "ragemp:objectDestroy",
      create: (e, t) => {
        un(e, t);
      },
      update: (e, t, r) => {
        hn(e, t, r);
      },
      destroy: (e, t) => {
        pn(e, t);
      }
    });
    onNet("ragemp:objectVar", (e, t, r) => {
      (function (e, t, r) {
        const n = Vr.get(e);
        if (!n) {
          return;
        }
        const i = l.get(n.object).variables;
        if (r === undefined) {
          i.delete(t);
        } else {
          i.set(t, r);
        }
      })(e, t, r);
    });
    onNet("ragemp:objectVars", (e, t) => {
      (function (e, t) {
        const r = Vr.get(e);
        if (r) {
          Jr(r.object, t);
        }
      })(e, t);
    });
  }
  function Sn(e) {
    if (e instanceof i) {
      return e;
    } else {
      return new i(e.x, e.y, e.z);
    }
  }
  function Cn(e) {
    return !!e && (typeof DoesEntityExist != "function" || DoesEntityExist(e));
  }
  class yn extends De {
    constructor(e, t, r) {
      var n;
      super(e, t, "object", r);
      n = this;
      Gr.init(n, {
        isWeak: false,
        hidden: false,
        notifyStreaming: false,
        streamingRange: 0,
        rotation: new i(0, 0, 0)
      });
    }
    get position() {
      const e = this.handle;
      if (Cn(e)) {
        return Te(GetEntityCoords(e, true));
      } else {
        return l.get(this).position ?? new i(0, 0, 0);
      }
    }
    set position(e) {
      const t = Sn(e);
      l.get(this).position = t;
      const r = this.handle;
      if (Cn(r)) {
        SetEntityCoordsNoOffset(r, t.x, t.y, t.z, false, false, false);
      }
      if (cn(this.id)) {
        mn(this);
      }
    }
    get rotation() {
      const e = this.handle;
      if (Cn(e)) {
        return Te(GetEntityRotation(e, 2));
      } else {
        return Gr.get(this).rotation;
      }
    }
    set rotation(e) {
      const t = Sn(e);
      Gr.get(this).rotation = t;
      const r = this.handle;
      if (Cn(r)) {
        SetEntityRotation(r, t.x, t.y, t.z, 2, false);
      }
      if (cn(this.id)) {
        mn(this);
      }
    }
    get model() {
      const e = n(l.get(this).model);
      const t = this.handle;
      if (Cn(t)) {
        try {
          const e = n(GetEntityModel(t));
          if (e) {
            l.get(this).model = e;
            return e;
          }
        } catch {
          return e;
        }
      }
      const r = fe(this);
      if (r.serverModel) {
        return n(r.serverModel);
      } else {
        return e;
      }
    }
    set model(e) {
      l.get(this).model = n(typeof e == "string" ? GetHashKey(e) : e);
      if (cn(this.id)) {
        mn(this);
      }
    }
    get alpha() {
      const e = this.handle;
      if (Cn(e)) {
        return GetEntityAlpha(e);
      } else {
        return l.get(this).alpha;
      }
    }
    set alpha(e) {
      l.get(this).alpha = e;
      const t = this.handle;
      if (Cn(t)) {
        if (e === 255) {
          ResetEntityAlpha(t);
        } else {
          SetEntityAlpha(t, e, false);
        }
      }
      if (cn(this.id)) {
        mn(this);
      }
    }
    get dimension() {
      return l.get(this).dimension;
    }
    set dimension(e) {
      l.get(this).dimension = e;
      if (cn(this.id)) {
        mn(this);
      }
    }
    get hidden() {
      const e = this.handle;
      if (Cn(e)) {
        return !IsEntityVisible(e);
      } else {
        return Gr.get(this).hidden;
      }
    }
    set hidden(e) {
      Gr.get(this).hidden = e;
      const t = this.handle;
      if (Cn(t)) {
        SetEntityVisible(t, !e, false);
      }
    }
    get isWeak() {
      return Gr.get(this).isWeak;
    }
    get notifyStreaming() {
      return Gr.get(this).notifyStreaming;
    }
    set notifyStreaming(e) {
      Gr.get(this).notifyStreaming = e;
    }
    get streamingRange() {
      return Gr.get(this).streamingRange;
    }
    set streamingRange(e) {
      Gr.get(this).streamingRange = e;
      if (cn(this.id)) {
        mn(this);
      }
    }
    hasBeenBroken() {
      const e = this.handle;
      return !!Cn(e) && HasObjectBeenBroken(e);
    }
    placeOnGroundProperly() {
      const e = this.handle;
      return !!Cn(e) && PlaceObjectOnGroundProperly(e);
    }
    setTargettable(e) {
      const t = this.handle;
      if (Cn(t)) {
        SetObjectTargettable(t, !!e, 0);
      }
    }
    setActivatePhysicsAsSoonAsItIsUnfrozen(e) {
      const t = this.handle;
      if (Cn(t)) {
        SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(t, !!e);
      }
    }
    slide(e, t, r, n, i, a, o) {
      const s = this.handle;
      return !!Cn(s) && SlideObject(s, e, t, r, n, i, a, !!o);
    }
    getAllByHash(e) {}
    setPhysicsParams() {}
    markForDeletion() {
      const e = this.handle;
      if (Cn(e)) {
        SetEntityAsMissionEntity(e, false, true);
      }
    }
    destroy() {
      const e = globalThis.mp.objects;
      if (e && function (e, t) {
        const r = Mr.get(t);
        return !!r && (pn(e, r.object.remoteId), true);
      }(e, this.id)) {
        return;
      }
      const t = this.handle;
      if (Cn(t)) {
        if (IsEntityAttached(t)) {
          DetachEntity(t, true, true);
        }
        if (NetworkGetEntityIsNetworked(t)) {
          NetworkRequestControlOfEntity(t);
        }
        SetEntityAsMissionEntity(t, true, true);
        DeleteEntity(t);
      }
      if (e) {
        (function (e, t) {
          const r = p(e).entities.get(t);
          if (!!r && !fe(r).isServer && !Gr.get(r).isWeak) {
            globalThis.mp?.events?.call("entityStreamOut", r);
          }
          ct(e, t);
        })(e, this.id);
      }
    }
  }
  class Pn extends S {
    constructor(e = null) {
      super();
      Qe(this, e);
    }
    at(e) {
      return function (e, t) {
        const r = Ee.get(e).byLocal.get(t);
        if (r) {
          if (fe(r).isServer) {
            return at(e, r);
          } else {
            return r;
          }
        } else {
          return null;
        }
      }(this, e);
    }
    atRemoteId(e) {
      return function (e, t) {
        const r = Ee.get(e).byRemote.get(t);
        if (r) {
          return at(e, r);
        } else {
          return null;
        }
      }(this, e);
    }
    atRemoteIdAsync(e, t = {}) {
      const r = typeof t == "number" ? t : t.timeout ?? 5000;
      const n = typeof t == "object" && t.interval || 50;
      return new Promise(t => {
        const i = this.atRemoteId(e);
        if (i) {
          t(i);
          return;
        }
        const a = () => typeof GetGameTimer == "function" ? GetGameTimer() : 0;
        const o = a();
        const s = setInterval(() => {
          const n = this.atRemoteId(e);
          if (n) {
            clearInterval(s);
            t(n);
            return;
          }
          if (a() - o >= r) {
            clearInterval(s);
            t(null);
          }
        }, n);
      });
    }
    atHandle(e) {
      return dt(this, e);
    }
    atNetId(e) {
      return function (e, t) {
        if (!t) {
          return null;
        }
        const r = Ee.get(e);
        const n = r.netIdToRemote.get(t);
        if (n !== undefined) {
          const t = r.byRemote.get(n);
          if (t) {
            return at(e, t);
          }
        }
        const i = Ie(t);
        if (i) {
          return st(e, i);
        } else {
          return null;
        }
      }(this, e);
    }
    exists(e) {
      return function (e, t) {
        const r = Ee.get(e);
        const n = p(e).entities;
        if (typeof t == "number") {
          return r.byLocal.has(t) || n.has(t);
        }
        if (!t || typeof t != "object") {
          return false;
        }
        if (n.get(t.id) === t) {
          return true;
        }
        const i = r.byLocal.get(t.id);
        if (i === t) {
          return true;
        }
        if (i != null) {
          return false;
        }
        const a = t.handle;
        if (!a || !DoesEntityExist(a)) {
          return false;
        }
        const o = r.handleToEntity.get(a);
        return o != null && o.handle === a;
      }(this, e);
    }
  }
  class An extends Pn {
    constructor() {
      var e;
      var t;
      super("object");
      this.maxStreamed = 400;
      e = this;
      t = (e, t) => new yn(k, e, t);
      Ee.get(e).makeEntity = t;
      gn(this);
    }
    new(e, t, r = {}) {
      const n = typeof e == "string" ? GetHashKey(e) : e;
      const a = r.isNetwork !== undefined && !!r.isNetwork;
      const o = CreateObjectNoOffset(n, t.x, t.y, t.z, a, false, false);
      const s = new yn(k, 0, o);
      FreezeEntityPosition(o, true);
      SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(o, true);
      l.get(s).model = n;
      l.get(s).position = new i(t.x, t.y, t.z);
      if (r.rotation) {
        s.rotation = r.rotation;
      }
      if (r.alpha !== undefined) {
        s.alpha = r.alpha;
      }
      if (r.dimension !== undefined) {
        s.dimension = r.dimension;
      }
      tt(this, s);
      Ee.get(this).handleToEntity.set(o, s);
      globalThis.mp?.events?.call("entityStreamIn", s);
      return s;
    }
    newWeak(e) {
      const t = new yn(k, 0, e);
      Gr.get(t).isWeak = true;
      tt(this, t);
      Ee.get(this).handleToEntity.set(e, t);
      return t;
    }
    newWeaponObject(e, t, r = {}) {
      const n = typeof e == "string" ? GetHashKey(e) : e;
      const i = r.ammoCount ?? 0;
      const a = r.createDefaultComponents ?? true;
      const o = r.scale ?? 1;
      const s = r.customModelHash ?? 0;
      const l = CreateWeaponObject(n, i, t.x, t.y, t.z, a, o, s);
      const d = new yn(k, 0, l);
      if (r.rotation) {
        d.rotation = r.rotation;
      }
      if (r.alpha !== undefined) {
        d.alpha = r.alpha;
      }
      if (r.dimension !== undefined) {
        d.dimension = r.dimension;
      }
      tt(this, d);
      Ee.get(this).handleToEntity.set(l, d);
      globalThis.mp?.events?.call("entityStreamIn", d);
      return d;
    }
    getAllByHash(e) {
      const t = typeof e == "string" ? GetHashKey(e) : e;
      const r = [];
      p(this).entities.forEach(e => {
        const n = e;
        if (n.handle && GetEntityModel(n.handle) === t) {
          r.push(n);
        }
      });
      return r;
    }
  }
  class Tn extends S {
    constructor() {
      super();
      Le(this);
    }
    new(e, t, r = {}) {
      return function (e, t, r, n) {
        const i = Te(r);
        const a = n.radius !== undefined ? Number(n.radius) : undefined;
        const o = He(i.x, i.y, i.z, a);
        SetBlipSprite(o, t);
        if (n.color !== undefined) {
          SetBlipColour(o, n.color);
        }
        if (n.scale !== undefined) {
          SetBlipScale(o, n.scale);
        }
        const s = n.shortRange !== undefined && !!n.shortRange;
        SetBlipAsShortRange(o, s);
        be(o, n.name);
        const l = new We(k, 0, o);
        const d = xe.get(l);
        d.name = n.name ?? "";
        d.shortRange = s;
        d.scale = n.scale ?? 1;
        d.radius = a;
        d.alpha = n.alpha ?? 255;
        d.dimension = n.dimension ?? 0;
        Oe(l);
        le(e, l);
        return l;
      }(this, e, t, r);
    }
  }
  const vn = o();
  class In extends F {
    constructor(e, t, r, n, i, a = 0) {
      super(e, t, "colshape");
      (function (e, t, r, n, i) {
        vn.init(e, {
          shapeType: t,
          params: n ?? {},
          origin: "local",
          position: r,
          dimension: i
        });
      })(this, r, n, i, a);
    }
    get shapeType() {
      return vn.get(this).shapeType;
    }
    get position() {
      return vn.get(this).position;
    }
    set position(e) {
      vn.get(this).position = e;
    }
    get dimension() {
      return vn.get(this).dimension;
    }
    set dimension(e) {
      vn.get(this).dimension = e;
    }
    isPointWithin(e, t = 0) {
      const r = vn.get(this);
      return function (e, t, r, n, i = 0) {
        if (!t || !r || !n) {
          return false;
        }
        const a = i > 0 ? i : 0;
        switch (e) {
          case "sphere":
            {
              const e = n.x - t.x;
              const i = n.y - t.y;
              const o = n.z - t.z;
              const s = (r.radius ?? 0) + a;
              return e * e + i * i + o * o <= s * s;
            }
          case "circle":
            {
              const e = n.x - t.x;
              const i = n.y - t.y;
              const o = (r.radius ?? 0) + a;
              return e * e + i * i <= o * o;
            }
          case "tube":
            {
              const e = n.x - t.x;
              const i = n.y - t.y;
              const o = (r.radius ?? 0) + a;
              if (e * e + i * i > o * o) {
                return false;
              }
              const s = (r.height ?? 0) / 2;
              const l = n.z - t.z;
              return l >= -s - a && l <= s + a;
            }
          case "rectangle":
            {
              const e = (r.width ?? 0) / 2;
              const i = (r.height ?? 0) / 2;
              return n.x >= t.x - e - a && n.x <= t.x + e + a && n.y >= t.y - i - a && n.y <= t.y + i + a;
            }
          case "cuboid":
            {
              const e = r.width ?? 0;
              const i = r.depth ?? 0;
              const o = r.height ?? 0;
              return n.x >= t.x - a && n.x <= t.x + e + a && n.y >= t.y - a && n.y <= t.y + i + a && n.z >= t.z - a && n.z <= t.z + o + a;
            }
          default:
            return false;
        }
      }(r.shapeType, r.position, r.params, e, t);
    }
    destroy() {
      if (vn.get(this).origin === "server") {
        return;
      }
      const e = globalThis.mp?.colshapes;
      if (e) {
        Nn(e, this.id);
      }
    }
  }
  const En = o();
  function kn(e, t) {
    const r = new i(t.position.x, t.position.y, t.position.z);
    const n = new In(k, t.id, t.shapeType, r, t.params, t.dimension ?? 0);
    vn.get(n).origin = "server";
    se(e, n);
    return n;
  }
  function fn(e, t, r, n) {
    if (vn.get(t).origin !== "server") {
      try {
        globalThis.mp.events.call(n ? "playerEnterColshape" : "playerExitColshape", t);
      } catch (e) {
        console.error(`[bridge:colshape] handler error (${n ? "enter" : "exit"} #${t.id}):`, e);
      }
    } else {
      emitNet(n ? "ragemp:colshape:enter" : "ragemp:colshape:exit", t.remoteId);
    }
  }
  function Dn(e) {
    En.init(e, {
      inside: new Set(),
      warned: false
    });
    onNet("ragemp:colshapeCreate", t => {
      if (t && !e.atRemoteId(t.id)) {
        kn(e, t);
      }
    });
    onNet("ragemp:colshapeSyncAll", t => {
      if (Array.isArray(t)) {
        for (const r of t) {
          if (r && !e.atRemoteId(r.id)) {
            kn(e, r);
          }
        }
      }
    });
    onNet("ragemp:colshapeUpdate", (t, r) => {
      const n = e.atRemoteId(t);
      if (!n) {
        if (r) {
          kn(e, r);
        }
        return;
      }
      const a = vn.get(n);
      a.position = new i(r.position.x, r.position.y, r.position.z);
      a.params = r.params ?? {};
      a.dimension = r.dimension ?? 0;
    });
    onNet("ragemp:colshapeDestroy", t => {
      const r = e.atRemoteId(t);
      if (r) {
        Nn(e, r.id);
      }
    });
    ye(() => function (e) {
      const t = globalThis.mp;
      const r = t?.players?.local;
      if (!r) {
        return;
      }
      let n;
      try {
        n = r.position;
      } catch (e) {
        return;
      }
      if (!n) {
        return;
      }
      const i = En.get(e);
      for (const t of e.toArray()) {
        const e = t;
        const r = vn.get(e);
        let a;
        try {
          a = we(r.dimension) && e.isPointWithin(n);
        } catch (t) {
          if (!i.warned) {
            i.warned = true;
            console.error(`[bridge:colshape] check failed for #${e?.id} (${r?.shapeType}):`, t);
          }
          continue;
        }
        if (a !== i.inside.has(e.id)) {
          if (a) {
            i.inside.add(e.id);
            fn(0, e, 0, true);
          } else {
            i.inside.delete(e.id);
            fn(0, e, 0, false);
          }
        }
      }
    }(e));
  }
  function Fn(e, t, r, n, i = 0) {
    const a = new In(k, 0, t, r, n, i);
    vn.get(a).origin = "local";
    le(e, a);
    return a;
  }
  function Nn(e, t) {
    En.get(e).inside.delete(t);
    de(e, t);
    y(e, t);
  }
  class bn extends S {
    constructor() {
      super();
      Dn(this);
    }
    newSphere(e, t, r, n, a = 0) {
      if (e !== null && typeof e == "object") {
        return Fn(this, "sphere", new i(e.x, e.y, e.z), {
          radius: t
        }, r ?? 0);
      } else {
        return Fn(this, "sphere", new i(e, t, r), {
          radius: n
        }, a);
      }
    }
    newTube(e, t, r, n, a, o = 0) {
      if (e !== null && typeof e == "object") {
        return Fn(this, "tube", new i(e.x, e.y, e.z), {
          radius: t,
          height: r
        }, n ?? 0);
      } else {
        return Fn(this, "tube", new i(e, t, r), {
          radius: a,
          height: n
        }, o);
      }
    }
    newCircle(e, t, r, n = 0) {
      return Fn(this, "circle", new i(e, t, 0), {
        radius: r
      }, n);
    }
    newRectangle(e, t, r, n, a = 0) {
      return Fn(this, "rectangle", new i(e, t, 0), {
        width: r,
        height: n
      }, a);
    }
    newCuboid(e, t, r, n, a, o, s = 0) {
      if (e !== null && typeof e == "object") {
        return Fn(this, "cuboid", new i(e.x, e.y, e.z), {
          width: t,
          depth: r,
          height: n
        }, a ?? 0);
      } else {
        return Fn(this, "cuboid", new i(e, t, r), {
          width: n,
          depth: a,
          height: o
        }, s);
      }
    }
  }
  const xn = o();
  class Bn extends F {
    constructor(e, t, r) {
      var n;
      super(e, t, "checkpoint", r);
      n = this;
      xn.init(n, {
        radius: undefined,
        visible: undefined,
        r: undefined,
        g: undefined,
        b: undefined,
        a: undefined,
        origin: undefined
      });
    }
    get position() {
      return l.get(this).position ?? undefined;
    }
    set position(e) {
      l.get(this).position = e ?? null;
    }
    get radius() {
      return xn.get(this).radius;
    }
    set radius(e) {
      xn.get(this).radius = e;
    }
    get visible() {
      return xn.get(this).visible ?? true;
    }
    set visible(e) {
      xn.get(this).visible = e;
      Rn(this);
    }
    get color() {
      const e = xn.get(this);
      return {
        r: e.r ?? 255,
        g: e.g ?? 0,
        b: e.b ?? 0,
        a: e.a ?? 150
      };
    }
    set color(e) {
      const t = xn.get(this);
      t.r = e.r;
      t.g = e.g;
      t.b = e.b;
      t.a = e.a;
      Rn(this);
    }
    get dimension() {
      return l.get(this).dimension;
    }
    set dimension(e) {
      l.get(this).dimension = e;
    }
    get _radius() {
      return xn.get(this).radius;
    }
    get _origin() {
      return xn.get(this).origin;
    }
    destroy() {
      DeleteCheckpoint(this.handle);
      if (globalThis.mp.checkpoints) {
        y(globalThis.mp.checkpoints, this.id);
        de(globalThis.mp.checkpoints, this.id);
      }
    }
  }
  function Rn(e) {
    t = e;
    if (l.get(t).handle === null) {
      return;
    }
    var t;
    const r = xn.get(e);
    if (r.visible && we(l.get(e).dimension)) {
      SetCheckpointRgba(e.handle, r.r, r.g, r.b, r.a);
    } else {
      SetCheckpointRgba(e.handle, 0, 0, 0, 0);
    }
  }
  function Gn(e, t) {
    const r = CreateCheckpoint(t.type, t.x, t.y, t.z, t.nextX, t.nextY, t.nextZ, t.radius, t.r, t.g, t.b, t.a, 0);
    const n = new Bn(k, t.id, r);
    const a = xn.get(n);
    a.r = t.r;
    a.g = t.g;
    a.b = t.b;
    a.a = t.a;
    a.visible = t.visible;
    l.get(n).position = new i(t.x, t.y, t.z);
    a.radius = t.radius;
    l.get(n).dimension = t.dimension ?? 0;
    a.origin = "server";
    se(e, n);
    Rn(n);
    return n;
  }
  class Mn extends S {
    constructor() {
      var e;
      super();
      e = this;
      Ve(() => e.forEach(e => Rn(e)));
      _e(e, {
        createEvent: "ragemp:checkpointCreate",
        syncAllEvent: "ragemp:checkpointSyncAll",
        updateEvent: "ragemp:checkpointUpdate",
        destroyEvent: "ragemp:checkpointDestroy",
        create: (e, t) => Gn(e, t),
        update: (e, t, r) => {
          const n = e.atRemoteId(t);
          if (n) {
            DeleteCheckpoint(n.handle);
            y(e, n.id);
            de(e, n.id);
            Gn(e, r);
          }
        },
        destroy: (e, t) => {
          const r = e.atRemoteId(t);
          if (r) {
            r.destroy();
          }
        }
      });
    }
    new(e, t, r, n = {}) {
      return function (e, t, r, n, a) {
        const o = a.direction;
        const s = o?.x ?? 0;
        const d = o?.y ?? 0;
        const c = o?.z ?? 0;
        const u = a.color;
        const h = Array.isArray(u);
        const p = (h ? u[0] : u?.r) ?? 255;
        const m = (h ? u[1] : u?.g) ?? 0;
        const g = (h ? u[2] : u?.b) ?? 0;
        const S = (h ? u[3] : u?.a) ?? 150;
        const C = CreateCheckpoint(t, r.x, r.y, r.z, s, d, c, n, p, m, g, S, 0);
        const y = new Bn(k, 0, C);
        const P = xn.get(y);
        P.r = p;
        P.g = m;
        P.b = g;
        P.a = S;
        P.visible = a.visible ?? true;
        l.get(y).position = new i(r.x, r.y, r.z);
        P.radius = n;
        l.get(y).dimension = a.dimension ?? 0;
        P.origin = "local";
        le(e, y);
        Rn(y);
        return y;
      }(this, e, t, r, n);
    }
  }
  const Vn = o();
  function wn(e) {
    if (e.startsWith("vec")) {
      return "vector";
    } else if (e.startsWith("n")) {
      return "int";
    } else {
      return "float";
    }
  }
  class _n extends De {
    constructor(e, t, r) {
      var n;
      super(e, t, "vehicle", r);
      n = this;
      Vn.init(n, {
        paintType: 0,
        defaultGearRatios: null,
        cancelled: false
      });
    }
    get speed() {
      return GetEntitySpeed(this.handle);
    }
    get engineHealth() {
      return GetVehicleEngineHealth(this.handle);
    }
    set engineHealth(e) {
      SetVehicleEngineHealth(this.handle, e);
    }
    get bodyHealth() {
      return GetVehicleBodyHealth(this.handle);
    }
    set bodyHealth(e) {
      SetVehicleBodyHealth(this.handle, e);
    }
    get engine() {
      return GetIsVehicleEngineRunning(this.handle);
    }
    set engine(e) {
      SetVehicleEngineOn(this.handle, !!e, false, false);
    }
    get locked() {
      return GetVehicleDoorLockStatus(this.handle) === 2;
    }
    set locked(e) {
      SetVehicleDoorsLocked(this.handle, e ? 2 : 1);
    }
    get numberPlate() {
      return GetVehicleNumberPlateText(this.handle);
    }
    set numberPlate(e) {
      SetVehicleNumberPlateText(this.handle, e);
    }
    get gear() {
      return GetVehicleCurrentGear(this.handle);
    }
    get rpm() {
      return GetVehicleCurrentRpm(this.handle);
    }
    get steeringAngle() {
      return GetVehicleSteeringAngle(this.handle);
    }
    get throttle() {
      return GetVehicleThrottleOffset(this.handle);
    }
    get wheelCount() {
      return GetVehicleNumberOfWheels(this.handle);
    }
    get dead() {
      return IsEntityDead(this.handle);
    }
    get livery() {
      return GetVehicleLivery(this.handle);
    }
    set livery(e) {
      SetVehicleLivery(this.handle, e);
    }
    get windowTint() {
      return GetVehicleWindowTint(this.handle);
    }
    set windowTint(e) {
      SetVehicleWindowTint(this.handle, e);
    }
    getWindowTint() {
      return GetVehicleWindowTint(this.handle);
    }
    setWindowTint(e) {
      SetVehicleWindowTint(this.handle, e);
    }
    get wheelType() {
      return GetVehicleWheelType(this.handle);
    }
    set wheelType(e) {
      SetVehicleWheelType(this.handle, e);
    }
    get colorPrimary() {
      return GetVehicleColours(this.handle)[0];
    }
    set colorPrimary(e) {
      const t = GetVehicleColours(this.handle);
      SetVehicleColours(this.handle, e, t[1]);
    }
    get colorSecondary() {
      return GetVehicleColours(this.handle)[1];
    }
    set colorSecondary(e) {
      const t = GetVehicleColours(this.handle);
      SetVehicleColours(this.handle, t[0], e);
    }
    get pearlescentColor() {
      return GetVehicleExtraColours(this.handle)[0];
    }
    set pearlescentColor(e) {
      const t = GetVehicleExtraColours(this.handle);
      SetVehicleExtraColours(this.handle, e, t[1]);
    }
    get wheelColor() {
      return GetVehicleExtraColours(this.handle)[1];
    }
    set wheelColor(e) {
      const t = GetVehicleExtraColours(this.handle);
      SetVehicleExtraColours(this.handle, t[0], e);
    }
    get lightsOn() {
      return !!GetVehicleLightsState(this.handle)[1];
    }
    get highbeamsOn() {
      return !!GetVehicleLightsState(this.handle)[2];
    }
    getLightsState(e, t) {
      const r = GetVehicleLightsState(this.handle);
      return {
        lightsOn: !!r[1],
        highbeamsOn: !!r[2]
      };
    }
    get neonEnabled() {
      return IsVehicleNeonLightEnabled(this.handle, 0);
    }
    set neonEnabled(e) {
      for (let t = 0; t < 4; t++) {
        SetVehicleNeonLightEnabled(this.handle, t, !!e);
      }
    }
    set gravity(e) {
      SetVehicleGravity(this.handle, !!e);
    }
    get isPositionFrozen() {
      return IsEntityPositionFrozen(this.handle);
    }
    get nosActive() {
      return false;
    }
    set nosActive(e) {}
    get nosAmount() {
      return 0;
    }
    set nosAmount(e) {}
    get paintType() {
      return Vn.get(this).paintType;
    }
    set paintType(e) {
      Vn.get(this).paintType = e;
    }
    get controller() {
      const e = NetworkGetEntityOwner(this.handle);
      if (e) {
        return Fr(e) ?? null;
      } else {
        return null;
      }
    }
    getColours() {
      return GetVehicleColours(this.handle);
    }
    getColor() {
      const e = GetVehicleColours(this.handle);
      return {
        primary: e[0],
        secondary: e[1]
      };
    }
    setColor(e, t) {
      SetVehicleColours(this.handle, e, t);
    }
    setColours(e, t) {
      SetVehicleColours(this.handle, e, t);
    }
    getColourCombination() {
      return GetVehicleColourCombination(this.handle);
    }
    setColourCombination(e) {
      SetVehicleColourCombination(this.handle, e);
    }
    getCustomPrimaryColour() {
      return GetVehicleCustomPrimaryColour(this.handle);
    }
    getCustomSecondaryColour() {
      return GetVehicleCustomSecondaryColour(this.handle);
    }
    setCustomPrimaryColour(e, t, r) {
      SetVehicleCustomPrimaryColour(this.handle, e, t, r);
    }
    setCustomSecondaryColour(e, t, r) {
      SetVehicleCustomSecondaryColour(this.handle, e, t, r);
    }
    clearCustomPrimaryColour() {
      ClearVehicleCustomPrimaryColour(this.handle);
    }
    clearCustomSecondaryColour() {
      ClearVehicleCustomSecondaryColour(this.handle);
    }
    getColorRGB() {
      const e = GetVehicleCustomPrimaryColour(this.handle);
      const t = GetVehicleCustomSecondaryColour(this.handle);
      return [[e[0], e[1], e[2]], [t[0], t[1], t[2]]];
    }
    setColorRGB(e, t, r, n, i, a) {
      SetVehicleCustomPrimaryColour(this.handle, e, t, r);
      SetVehicleCustomSecondaryColour(this.handle, n, i, a);
    }
    getIsPrimaryColourCustom() {
      return GetIsVehiclePrimaryColourCustom(this.handle);
    }
    getIsSecondaryColourCustom() {
      return GetIsVehicleSecondaryColourCustom(this.handle);
    }
    setExtraColours(e, t) {
      SetVehicleExtraColours(this.handle, e, t);
    }
    getNumberOfColours() {
      return GetNumberOfVehicleColours(this.handle);
    }
    setTyreSmokeColor(e, t, r) {
      SetVehicleTyreSmokeColor(this.handle, e, t, r);
    }
    getNeonColor() {
      const e = GetVehicleNeonLightsColour(this.handle);
      return [e[0], e[1], e[2]];
    }
    setNeonColor(e, t, r) {
      SetVehicleNeonLightsColour(this.handle, e, t, r);
    }
    setNeonLightsColour(e, t, r) {
      SetVehicleNeonLightsColour(this.handle, e, t, r);
    }
    isNeonLightEnabled(e) {
      return IsVehicleNeonLightEnabled(this.handle, e ?? 0);
    }
    setNeonLightEnabled(e, t) {
      SetVehicleNeonLightEnabled(this.handle, e, !!t);
    }
    getMod(e) {
      return GetVehicleMod(this.handle, e);
    }
    setMod(e, t) {
      SetVehicleModKit(this.handle, 0);
      SetVehicleMod(this.handle, e, t, false);
    }
    removeMod(e) {
      RemoveVehicleMod(this.handle, e);
    }
    toggleMod(e, t) {
      ToggleVehicleMod(this.handle, e, !!t);
    }
    isToggleModOn(e) {
      return IsToggleModOn(this.handle, e);
    }
    getModKit() {
      return GetVehicleModKit(this.handle);
    }
    setModKit(e) {
      SetVehicleModKit(this.handle, e);
    }
    getModKitType() {
      return GetVehicleModKitType(this.handle);
    }
    getNumModKits() {
      return GetNumModKits(this.handle);
    }
    getNumMods(e) {
      return GetNumVehicleMods(this.handle, e);
    }
    getModModifierValue(e, t) {
      return GetVehicleModModifierValue(this.handle, e, t);
    }
    getModSlotName(e) {
      return GetModSlotName(this.handle, e);
    }
    getModTextLabel(e, t) {
      return GetModTextLabel(this.handle, e, t);
    }
    getModVariation(e) {
      return GetVehicleModVariation(this.handle, e);
    }
    getModColor1TextLabel() {
      return GetVehicleModColor_1Name(this.handle, false);
    }
    getModColor2TextLabel() {
      return GetVehicleModColor_2Name(this.handle);
    }
    setModColor1(e, t, r) {
      SetVehicleModColor_1(this.handle, e, t, r ?? 0);
    }
    setModColor2(e, t) {
      SetVehicleModColor_2(this.handle, e, t);
    }
    releasePreloadMods() {
      ReleasePreloadMods(this.handle);
    }
    requestHighDetailModel() {
      RequestVehicleHighDetailModel(this.handle);
    }
    removeHighDetailModel() {
      RemoveVehicleHighDetailModel(this.handle);
    }
    isHighDetail() {
      return IsVehicleHighDetail(this.handle);
    }
    getLivery() {
      return GetVehicleLivery(this.handle);
    }
    setLivery(e) {
      SetVehicleLivery(this.handle, e);
    }
    getLiveryCount() {
      return GetVehicleLiveryCount(this.handle);
    }
    getLiveryName(e) {
      return GetLiveryName(this.handle, e);
    }
    getBodyHealth() {
      return GetVehicleBodyHealth(this.handle);
    }
    getBodyHealth2() {
      return GetVehicleBodyHealth(this.handle);
    }
    setBodyHealth(e) {
      SetVehicleBodyHealth(this.handle, e);
    }
    getEngineHealth() {
      return GetVehicleEngineHealth(this.handle);
    }
    setEngineHealth(e) {
      SetVehicleEngineHealth(this.handle, e);
    }
    getHeliEngineHealth() {
      return GetVehicleEngineHealth(this.handle);
    }
    getPetrolTankHealth() {
      return GetVehiclePetrolTankHealth(this.handle);
    }
    setPetrolTankHealth(e) {
      SetVehiclePetrolTankHealth(this.handle, e);
    }
    getCauseOfDestruction() {
      return GetVehicleCauseOfDestruction(this.handle);
    }
    getMaxTraction() {
      return GetVehicleMaxTraction(this.handle);
    }
    getAcceleration() {
      return GetVehicleAcceleration(this.handle);
    }
    getDeformationAtPos(e, t, r) {
      return Te(GetVehicleDeformationAtPos(this.handle, e, t, r));
    }
    setDamage(e, t, r, n, i, a) {
      SetVehicleDamage(this.handle, e, t, r, n, i, !!a);
    }
    setDeformationFixed() {
      SetVehicleDeformationFixed(this.handle);
    }
    setEngineCanDegrade(e) {
      SetVehicleEngineCanDegrade(this.handle, !!e);
    }
    setCanBeVisiblyDamaged(e) {
      SetVehicleCanBeVisiblyDamaged(this.handle, !!e);
    }
    setExplodesOnHighExplosionDamage(e) {
      SetVehicleExplodesOnHighExplosionDamage(this.handle, !!e);
    }
    setDisablePetrolTankDamage(e) {
      SetDisableVehiclePetrolTankDamage(this.handle, !!e);
    }
    setDisablePetrolTankFires(e) {
      SetDisableVehiclePetrolTankFires(this.handle, !!e);
    }
    explode(e, t) {
      ExplodeVehicle(this.handle, e ?? true, !!t);
    }
    explodeInCutscene(e) {
      ExplodeVehicleInCutscene(this.handle, !!e);
    }
    repair() {
      SetVehicleFixed(this.handle);
      SetVehicleEngineHealth(this.handle, 1000);
      SetVehicleBodyHealth(this.handle, 1000);
    }
    setFixed() {
      SetVehicleFixed(this.handle);
    }
    getDoorAngleRatio(e) {
      return GetVehicleDoorAngleRatio(this.handle, e);
    }
    getDoorLockStatus() {
      return GetVehicleDoorLockStatus(this.handle);
    }
    getDoorsLockedForPlayer(e) {
      return GetVehicleDoorsLockedForPlayer(this.handle, (e && ue.peek(e)?.playerIndex) ?? e);
    }
    getNumberOfDoors() {
      return GetNumberOfVehicleDoors(this.handle);
    }
    getPedUsingDoor(e) {
      return GetPedUsingVehicleDoor(this.handle, e);
    }
    isDoorDamaged(e) {
      return IsVehicleDoorDamaged(this.handle, e);
    }
    setDoorBroken(e, t) {
      SetVehicleDoorBroken(this.handle, e, !!t);
    }
    setDoorControl(e, t, r) {
      SetVehicleDoorControl(this.handle, e, t, r);
    }
    setDoorLatched(e, t, r, n) {
      SetVehicleDoorLatched(this.handle, e, !!t, !!r, !!n);
    }
    setDoorOpen(e, t, r) {
      SetVehicleDoorOpen(this.handle, e, !!t, r ?? false);
    }
    setDoorShut(e, t) {
      SetVehicleDoorShut(this.handle, e, t ?? false);
    }
    setDoorsShut(e) {
      SetVehicleDoorsShut(this.handle, e ?? false);
    }
    setDoorsLocked(e) {
      SetVehicleDoorsLocked(this.handle, e);
    }
    setDoorsLockedForAllPlayers(e) {
      SetVehicleDoorsLockedForAllPlayers(this.handle, !!e);
    }
    setDoorsLockedForPlayer(e, t) {
      SetVehicleDoorsLockedForPlayer(this.handle, (e && ue.peek(e)?.playerIndex) ?? e, !!t);
    }
    setDoorsLockedForTeam(e, t) {
      SetVehicleDoorsLockedForTeam(this.handle, e, !!t);
    }
    areAllWindowsIntact() {
      return AreAllVehicleWindowsIntact(this.handle);
    }
    isWindowIntact(e) {
      return IsVehicleWindowIntact(this.handle, e);
    }
    fixWindow(e) {
      FixVehicleWindow(this.handle, e);
    }
    removeWindow(e) {
      RemoveVehicleWindow(this.handle, e);
    }
    rollDownWindow(e) {
      RollDownWindow(this.handle, e);
    }
    rollDownWindows() {
      RollDownWindows(this.handle);
    }
    rollUpWindow(e) {
      RollUpWindow(this.handle, e);
    }
    smashWindow(e) {
      SmashVehicleWindow(this.handle, e);
    }
    getMaxNumberOfPassengers() {
      return GetVehicleMaxNumberOfPassengers(this.handle);
    }
    getNumberOfPassengers() {
      return GetVehicleNumberOfPassengers(this.handle);
    }
    getPedInSeat(e) {
      return GetPedInVehicleSeat(this.handle, e);
    }
    getLastPedInSeat(e) {
      return GetLastPedInVehicleSeat(this.handle, e);
    }
    isSeatFree(e) {
      return IsVehicleSeatFree(this.handle, e);
    }
    isAnySeatEmpty() {
      return IsAnyVehicleSeatEmpty(this.handle);
    }
    canShuffleSeat(e) {
      return CanShuffleSeat(this.handle, e);
    }
    setExclusiveDriver(e) {
      SetVehicleExclusiveDriver(this.handle, e?.handle ?? e);
    }
    getIsEngineRunning() {
      return GetIsVehicleEngineRunning(this.handle);
    }
    setEngineOn(e, t, r) {
      SetVehicleEngineOn(this.handle, !!e, t ?? true, r ?? false);
    }
    setHandbrake(e) {
      SetVehicleHandbrake(this.handle, !!e);
    }
    setForwardSpeed(e) {
      SetVehicleForwardSpeed(this.handle, e);
    }
    setUndriveable(e) {
      SetVehicleUndriveable(this.handle, !!e);
    }
    isDriveable(e) {
      return IsVehicleDriveable(this.handle, e ?? false);
    }
    setOnGroundProperly() {
      return SetVehicleOnGroundProperly(this.handle);
    }
    setOutOfControl(e, t) {
      SetVehicleOutOfControl(this.handle, !!e, !!t);
    }
    setReduceGrip(e) {
      SetVehicleReduceGrip(this.handle, e);
    }
    setFrictionOverride(e) {
      SetVehicleFrictionOverride(this.handle, e);
    }
    setSteerBias(e) {
      SetVehicleSteerBias(this.handle, e);
    }
    steerUnlockBias(e) {
      SetVehicleSteerBias(this.handle, e);
    }
    setBurnout(e) {
      SetVehicleBurnout(this.handle, !!e);
    }
    isInBurnout() {
      return IsVehicleInBurnout(this.handle);
    }
    setEnginePowerMultiplier(e) {
      SetVehicleEnginePowerMultiplier(this.handle, e);
    }
    setEngineTorqueMultiplier(e) {
      SetVehicleCheatPowerIncrease(this.handle, e);
    }
    setHasStrongAxles(e) {
      SetVehicleHasStrongAxles(this.handle, !!e);
    }
    getHandling(e) {
      switch (wn(e)) {
        case "vector":
          return Te(GetVehicleHandlingVector(this.handle, "CHandlingData", e));
        case "int":
          return GetVehicleHandlingInt(this.handle, "CHandlingData", e);
        default:
          return GetVehicleHandlingFloat(this.handle, "CHandlingData", e);
      }
    }
    setHandling(e, t) {
      if (typeof t == "number" || typeof t == "string") {
        const r = typeof t == "number" ? t : parseFloat(t);
        if (wn(e) === "int") {
          SetVehicleHandlingInt(this.handle, "CHandlingData", e, r);
        } else {
          SetVehicleHandlingFloat(this.handle, "CHandlingData", e, r);
        }
        return;
      }
      const r = Array.isArray(t) ? t : [t.x, t.y, t.z];
      SetVehicleHandlingVector(this.handle, "CHandlingData", e, r);
    }
    getDefaultHandling(e) {
      return GetVehicleHandlingFloat(this.handle, "CHandlingData", e);
    }
    resetHandling() {
      SetVehicleUseAlternateHandling(this.handle, false);
    }
    setWheelSize(e) {
      return SetVehicleWheelSize(this.handle, e);
    }
    setWheelWidth(e) {
      return SetVehicleWheelWidth(this.handle, e);
    }
    setWheelType(e) {
      SetVehicleWheelType(this.handle, e);
    }
    getWheelType() {
      return GetVehicleWheelType(this.handle);
    }
    setWheelCamber(e) {
      SetCamberedWheelsDisabled(this.handle, !!e);
    }
    setWheelTrackWidth(e, t) {
      SetVehicleWheelTireColliderWidth(this.handle, e, t);
    }
    setWheelRadius(e, t) {
      SetVehicleWheelTireColliderSize(this.handle, e, t);
    }
    resetWheels(e) {
      ResetVehicleWheels(this.handle, !!e);
    }
    setWheelsCanBreak(e) {
      SetVehicleWheelsCanBreak(this.handle, !!e);
    }
    setWheelsCanBreakOffWhenBlowUp(e) {
      SetVehicleWheelsCanBreakOffWhenBlowUp(this.handle, !!e);
    }
    isOnAllWheels() {
      return IsVehicleOnAllWheels(this.handle);
    }
    setTyreFixed(e) {
      SetVehicleTyreFixed(this.handle, e);
    }
    setTyreBurst(e, t, r) {
      SetVehicleTyreBurst(this.handle, e, !!t, r ?? 1000);
    }
    isTyreBurst(e, t) {
      return IsVehicleTyreBurst(this.handle, e, !!t);
    }
    getTyresCanBurst() {
      return GetVehicleTyresCanBurst(this.handle);
    }
    setTyresCanBurst(e) {
      SetVehicleTyresCanBurst(this.handle, !!e);
    }
    getGearRatios() {
      if (!this.handle) {
        return [];
      }
      const e = this.forwardGearCount();
      const t = [];
      for (let r = 0; r <= e; r++) {
        t.push(GetVehicleGearRatio(this.handle, r));
      }
      return t;
    }
    setGearRatios(e) {
      if (!Array.isArray(e) || !this.handle || !DoesEntityExist(this.handle)) {
        return;
      }
      const t = Vn.get(this);
      if (!t.defaultGearRatios) {
        const e = [];
        let r = false;
        for (let t = 0; t <= 10; t++) {
          const n = GetVehicleGearRatio(this.handle, t);
          e.push(n);
          if (n !== 0) {
            r = true;
          }
        }
        if (!r) {
          return;
        }
        t.defaultGearRatios = e;
      }
      if (e.length === 0) {
        const e = t.defaultGearRatios;
        for (let t = 0; t < e.length; t++) {
          SetVehicleGearRatio(this.handle, t, e[t]);
        }
        return;
      }
      const r = Math.min(e.length, 11);
      for (let t = 0; t < r; t++) {
        const r = e[t];
        if (typeof r == "number" && Number.isFinite(r)) {
          SetVehicleGearRatio(this.handle, t, r);
        }
      }
    }
    forwardGearCount() {
      const e = GetVehicleHandlingInt(this.handle, "CHandlingData", "nInitialDriveGears");
      if (!Number.isInteger(e) || e <= 0) {
        return 0;
      } else {
        return Math.min(e, 10);
      }
    }
    setLights(e) {
      SetVehicleLights(this.handle, e === true ? 3 : e === false ? 4 : e);
    }
    setFullbeam(e) {
      SetVehicleFullbeam(this.handle, !!e);
    }
    setBrakeLights(e) {
      SetVehicleBrakeLights(this.handle, !!e);
    }
    setInteriorLight(e) {
      SetVehicleInteriorlight(this.handle, !!e);
    }
    setLightMultiplier(e) {
      SetVehicleLightMultiplier(this.handle, e);
    }
    getIsLeftHeadlightDamaged() {
      return GetIsLeftVehicleHeadlightDamaged(this.handle);
    }
    getIsRightHeadlightDamaged() {
      return GetIsRightVehicleHeadlightDamaged(this.handle);
    }
    setIndicatorLights(e, t) {
      SetVehicleIndicatorLights(this.handle, e, !!t);
    }
    setSearchlight(e, t) {
      SetVehicleSearchlight(this.handle, !!e, !!t);
    }
    isSearchlightOn() {
      return IsVehicleSearchlightOn(this.handle);
    }
    setTaxiLights(e) {
      SetTaxiLights(this.handle, !!e);
    }
    isTaxiLightOn() {
      return IsTaxiLightOn(this.handle);
    }
    setAlarm(e) {
      SetVehicleAlarm(this.handle, !!e);
    }
    startAlarm() {
      StartVehicleAlarm(this.handle);
    }
    isAlarmActivated() {
      return IsVehicleAlarmActivated(this.handle);
    }
    setSiren(e) {
      SetVehicleSiren(this.handle, !!e);
    }
    isSirenOn() {
      return IsVehicleSirenOn(this.handle);
    }
    isSirenSoundOn() {
      return IsVehicleSirenAudioOn(this.handle);
    }
    setSirenWithNoDriver(e) {
      SetSirenWithNoDriver(this.handle, !!e);
    }
    blipSiren() {
      BlipSiren(this.handle);
    }
    setHornPermanentlyOnTime(e) {
      Citizen.invokeNative("0x9D3AF56E94C9AE98", this.handle, e);
    }
    startHorn(e, t, r) {
      StartVehicleHorn(this.handle, e, t ?? GetHashKey("HELDDOWN"), !!r);
    }
    overrideVehHorn(e, t) {
      OverrideVehHorn(this.handle, !!e, t);
    }
    triggerSiren() {
      SetVehicleSiren(this.handle, true);
    }
    setSirenKeepOn(e) {}
    setSirenSound(e) {
      SetVehicleHasMutedSirens(this.handle, !!e);
    }
    setVehicleRadioLoud(e) {
      SetVehicleRadioLoud(this.handle, !!e);
    }
    setVehicleRadioEnabled(e) {
      SetVehicleRadioEnabled(this.handle, !!e);
    }
    playStreamFromVehicle() {
      PlayStreamFromVehicle(this.handle);
    }
    doesHaveRoof() {
      return DoesVehicleHaveRoof(this.handle);
    }
    isAConvertible(e) {
      return IsVehicleAConvertible(this.handle, !!e);
    }
    getConvertibleRoofState() {
      return GetConvertibleRoofState(this.handle);
    }
    setConvertibleRoof(e) {
      SetConvertibleRoof(this.handle, !!e);
    }
    lowerConvertibleRoof(e) {
      LowerConvertibleRoof(this.handle, !!e);
    }
    raiseConvertibleRoof(e) {
      RaiseConvertibleRoof(this.handle, !!e);
    }
    getExtra(e) {
      return IsVehicleExtraTurnedOn(this.handle, e);
    }
    setExtra(e, t) {
      SetVehicleExtra(this.handle, e, !t);
    }
    doesExtraExist(e) {
      return DoesExtraExist(this.handle, e);
    }
    isExtraTurnedOn(e) {
      return IsVehicleExtraTurnedOn(this.handle, e);
    }
    getNumberPlateText() {
      return GetVehicleNumberPlateText(this.handle);
    }
    setNumberPlateText(e) {
      SetVehicleNumberPlateText(this.handle, e);
    }
    getNumberPlateTextIndex() {
      return GetVehicleNumberPlateTextIndex(this.handle);
    }
    setNumberPlateTextIndex(e) {
      SetVehicleNumberPlateTextIndex(this.handle, e);
    }
    getPlateType() {
      return GetVehiclePlateType(this.handle);
    }
    getDirtLevel() {
      return GetVehicleDirtLevel(this.handle);
    }
    setDirtLevel(e) {
      SetVehicleDirtLevel(this.handle, e);
    }
    getClass() {
      return GetVehicleClass(this.handle);
    }
    getLayoutHash() {
      return GetVehicleLayoutHash(this.handle);
    }
    isModel(e) {
      return IsVehicleModel(this.handle, e);
    }
    isBig() {
      return IsBigVehicle(this.handle);
    }
    isVisible() {
      return IsEntityVisible(this.handle);
    }
    isStopped() {
      return IsVehicleStopped(this.handle);
    }
    isStoppedAtTrafficLights() {
      return IsVehicleStoppedAtTrafficLights(this.handle);
    }
    isDamaged() {
      return IsVehicleAudiblyDamaged(this.handle);
    }
    isStolen() {
      return IsVehicleStolen(this.handle);
    }
    isStuckOnRoof() {
      return IsVehicleStuckOnRoof(this.handle);
    }
    isStuckTimerUp(e, t) {
      return IsVehicleStuckTimerUp(this.handle, e, t);
    }
    resetStuckTimer(e) {
      ResetVehicleStuckTimer(this.handle, 0);
    }
    doesHaveStuckVehicleCheck() {
      return DoesVehicleHaveStuckVehicleCheck(this.handle);
    }
    addUpsidedownCheck() {
      AddVehicleUpsidedownCheck(this.handle);
    }
    removeUpsidedownCheck() {
      RemoveVehicleUpsidedownCheck(this.handle);
    }
    trackVisibility() {
      TrackVehicleVisibility(this.handle);
    }
    setCanBeTargetted(e) {
      SetVehicleCanBeTargetted(this.handle, !!e);
    }
    setCanBeUsedByFleeingPeds(e) {
      SetVehicleCanBeUsedByFleeingPeds(this.handle, !!e);
    }
    setCanBreak(e) {
      SetVehicleCanBreak(this.handle, !!e);
    }
    setCanRespray(e) {
      SetCanResprayVehicle(this.handle, !!e);
    }
    setAllowNoPassengersLockon(e) {
      SetVehicleAllowNoPassengersLockon(this.handle, !!e);
    }
    setCeilingHeight(e) {
      SetVehicleCeilingHeight(this.handle, e);
    }
    setGravity(e) {
      SetVehicleGravity(this.handle, !!e);
    }
    setHasBeenOwnedByPlayer(e) {
      SetVehicleHasBeenOwnedByPlayer(this.handle, !!e);
    }
    setIsConsideredByPlayer(e) {
      SetVehicleIsConsideredByPlayer(this.handle, !!e);
    }
    setIsStolen(e) {
      SetVehicleIsStolen(this.handle, !!e);
    }
    setIsWanted(e) {
      SetVehicleIsWanted(this.handle, !!e);
    }
    setLodMultiplier(e) {
      SetVehicleLodMultiplier(this.handle, e);
    }
    setNameDebug(e) {
      SetVehicleNameDebug(this.handle, e);
    }
    setNeedsToBeHotwired(e) {
      SetVehicleNeedsToBeHotwired(this.handle, !!e);
    }
    setPlaybackToUseAi(e) {
      SetPlaybackToUseAi(this.handle, e);
    }
    setPlayersLast() {
      SetPlayersLastVehicle(this.handle);
    }
    setProvidesCover(e) {
      SetVehicleProvidesCover(this.handle, !!e);
    }
    setStrong(e) {
      SetVehicleStrong(this.handle, !!e);
    }
    setTimedExplosion(e, t) {
      SetVehicleTimedExplosion(this.handle, e?.handle ?? e, !!t);
    }
    setRudderBroken(e) {
      SetVehicleRudderBroken(this.handle, !!e);
    }
    getLandingGearState() {
      return GetLandingGearState(this.handle);
    }
    setLandingGear(e) {
      ControlLandingGear(this.handle, e);
    }
    disablePlaneAileron(e, t) {
      DisablePlaneAileron(this.handle, !!e, !!t);
    }
    openBombBayDoors() {
      OpenBombBayDoors(this.handle);
    }
    closeBombBayDoors() {
      CloseBombBayDoors(this.handle);
    }
    getHeliMainRotorHealth() {
      return GetHeliMainRotorHealth(this.handle);
    }
    getHeliTailRotorHealth() {
      return GetHeliTailRotorHealth(this.handle);
    }
    isHeliPartBroken(e, t, r) {
      return IsHeliPartBroken(this.handle, !!e, !!t, !!r);
    }
    setHeliBladesFullSpeed() {
      SetHeliBladesFullSpeed(this.handle);
    }
    setHeliBladeSpeed(e) {
      SetHeliBladesSpeed(this.handle, e);
    }
    setBoatAnchor(e) {
      SetBoatAnchor(this.handle, !!e);
    }
    getTrainCarriage(e) {
      return GetTrainCarriage(this.handle, e);
    }
    setMissionTrainCoords(e, t, r) {
      SetMissionTrainCoords(this.handle, e, t, r);
    }
    setTrainCruiseSpeed(e) {
      SetTrainCruiseSpeed(this.handle, e);
    }
    setTrainSpeed(e) {
      SetTrainSpeed(this.handle, e);
    }
    setRenderTrainAsDerailed(e) {
      SetRenderTrainAsDerailed(this.handle, !!e);
    }
    getHasKers() {
      return GetVehicleHasKers(this.handle);
    }
    setKersAllowed(e) {
      SetVehicleKersAllowed(this.handle, !!e);
    }
    doesAllowRappel() {
      return DoesVehicleAllowRappel(this.handle);
    }
    setJetEngineOn(e) {}
    setHalt(e, t, r) {
      SetVehicleHalt(this.handle, e ?? 1, t ? 1 : 0, r ?? false);
    }
    attachToTowTruck(e, t, r, n, i) {
      AttachVehicleToTowTruck(this.handle, e?.handle ?? e, !!t, r, n, i);
    }
    detachFromTowTruck(e) {
      DetachVehicleFromTowTruck(this.handle, e?.handle ?? e);
    }
    detachFromAnyTowTruck() {
      return DetachVehicleFromAnyTowTruck(this.handle);
    }
    isAttachedToTowTruck(e) {
      return IsVehicleAttachedToTowTruck(this.handle, e?.handle ?? e);
    }
    getEntityAttachedToTowTruck() {
      return GetEntityAttachedToTowTruck(this.handle);
    }
    getAttachedToTowTruck() {
      return GetEntityAttachedToTowTruck(this.handle);
    }
    attachToTrailer(e, t) {
      AttachVehicleToTrailer(this.handle, e?.handle ?? e, t ?? 1);
    }
    detachFromTrailer() {
      DetachVehicleFromTrailer(this.handle);
    }
    isAttachedToTrailer() {
      return IsVehicleAttachedToTrailer(this.handle);
    }
    getTrailer() {
      const [, e] = GetVehicleTrailerVehicle(this.handle);
      return e;
    }
    getVehicleTrailer() {
      const [, e] = GetVehicleTrailerVehicle(this.handle);
      return e;
    }
    detachFromCargobob(e) {
      DetachEntityFromCargobob(e?.handle ?? e, this.handle);
    }
    detachFromAnyCargobob() {
      return DetachVehicleFromAnyCargobob(this.handle);
    }
    isAttachedToCargobob(e) {
      return IsVehicleAttachedToCargobob(this.handle, e?.handle ?? e);
    }
    setAutomaticallyAttaches(e, t) {
      SetVehicleAutomaticallyAttaches(this.handle, !!e, t ?? 0);
    }
    destroy() {
      Vn.get(this).cancelled = true;
      if (this.handle) {
        SetEntityAsMissionEntity(this.handle, false, true);
        DeleteEntity(this.handle);
      }
      if (globalThis.mp.vehicles) {
        ct(globalThis.mp.vehicles, this.id);
      }
      l.get(this).handle = null;
    }
  }
  const On = {
    engine: (e, t) => SetVehicleEngineOn(e, t, false, false),
    livery: (e, t) => SetVehicleLivery(e, t),
    numberPlateType: (e, t) => SetVehicleNumberPlateTextIndex(e, t),
    windowTint: (e, t) => SetVehicleWindowTint(e, t),
    wheelType: (e, t) => SetVehicleWheelType(e, t),
    alpha: (e, t) => SetEntityAlpha(e, t, false),
    engineHealth: (e, t) => SetVehicleEngineHealth(e, t),
    dashboardColor: (e, t) => SetVehicleDashboardColour(e, t),
    taxiLights: (e, t) => SetTaxiLights(e, t),
    trimColor: (e, t) => SetVehicleInteriorColour(e, t),
    neonEnabled: (e, t) => {
      for (let r = 0; r < 4; r++) {
        SetVehicleNeonLightEnabled(e, r, t);
      }
    },
    customTires: (e, t) => {
      SetVehicleModKit(e, 0);
      ToggleVehicleMod(e, 18, t);
    },
    pearlescentColor: (e, t) => {
      const [, r] = GetVehicleExtraColours(e);
      SetVehicleExtraColours(e, t, r);
    },
    wheelColor: (e, t) => {
      const [r] = GetVehicleExtraColours(e);
      SetVehicleExtraColours(e, r, t);
    },
    neonColor: (e, t) => {
      const [r, n, i] = t;
      SetVehicleNeonLightsColour(e, r, n, i);
    },
    colorRGB: (e, t) => {
      const [[r, n, i], [a, o, s]] = t;
      SetVehicleCustomPrimaryColour(e, r, n, i);
      SetVehicleCustomSecondaryColour(e, a, o, s);
    }
  };
  function Hn(e, t, r) {
    const n = On[t];
    if (n) {
      n(e, r);
    }
  }
  function Ln(e, t, r) {
    SetVehicleModKit(e, 0);
    SetVehicleMod(e, t, r, false);
  }
  function Wn(e, t, r) {
    t = parseInt(t) || 0;
    r = parseInt(r) || 0;
    if (!(t <= 0)) {
      if (t === 5) {
        SetVehicleModColor_1(e, 5, 0, 0);
        SetVehicleModColor_2(e, 5, 0);
        return;
      }
      SetVehicleModColor_1(e, t, r, 0);
      SetVehicleModColor_2(e, t, r);
    }
  }
  function Un(e, t, r) {
    SetVehicleExtra(e, t, !r);
  }
  const zn = o();
  const jn = {
    "ragemp:vehicleEngine": (e, t) => Hn(e, "engine", t),
    "ragemp:vehicleAlpha": (e, t) => Hn(e, "alpha", t),
    "ragemp:vehicleLivery": (e, t) => Hn(e, "livery", t),
    "ragemp:vehicleNumberPlateType": (e, t) => Hn(e, "numberPlateType", t),
    "ragemp:vehicleWindowTint": (e, t) => Hn(e, "windowTint", t),
    "ragemp:vehicleNeonEnabled": (e, t) => Hn(e, "neonEnabled", t),
    "ragemp:vehicleCustomTires": (e, t) => Hn(e, "customTires", t),
    "ragemp:vehicleWheelType": (e, t) => Hn(e, "wheelType", t),
    "ragemp:vehicleEngineHealth": (e, t) => Hn(e, "engineHealth", t),
    "ragemp:vehicleDashboardColor": (e, t) => Hn(e, "dashboardColor", t),
    "ragemp:vehiclePearlescentColor": (e, t) => Hn(e, "pearlescentColor", t),
    "ragemp:vehicleTaxiLights": (e, t) => Hn(e, "taxiLights", t),
    "ragemp:vehicleTrimColor": (e, t) => Hn(e, "trimColor", t),
    "ragemp:vehicleWheelColor": (e, t) => Hn(e, "wheelColor", t),
    "ragemp:vehicleNeonColor": (e, t, r, n) => Hn(e, "neonColor", [t, r, n]),
    "ragemp:vehicleColorRGB": (e, t) => Hn(e, "colorRGB", t),
    "ragemp:vehicleMod": (e, t, r) => Ln(e, t, r),
    "ragemp:vehicleModPaint": (e, t, r) => Wn(e, t, r),
    "ragemp:vehicleExtra": (e, t, r) => SetVehicleExtra(e, t, r),
    "ragemp:vehicleExplode": e => NetworkExplodeVehicle(e, true, false, false),
    "ragemp:vehicleRepair": e => function (e) {
      SetVehicleFixed(e);
      SetVehicleEngineHealth(e, 1000);
      SetVehicleBodyHealth(e, 1000);
    }(e)
  };
  const qn = new Map();
  function Kn(e) {
    qn.delete(e);
  }
  class Yn extends Pn {
    constructor() {
      var e;
      super("vehicle");
      e = this;
      zn.init(e, {
        streamInHandlers: new Set()
      });
      onNet("ragemp:vehicle:batch", (e, t) => {
        const r = Ie(e);
        if (r) {
          for (const [e, n] of t) {
            const t = jn[e];
            if (t) {
              t(r, ...(n || []));
            }
          }
        }
      });
      $e(this, Pe, (e, t) => new _n(k, e, t));
      (function (e, t) {
        const r = Ee.get(e);
        if (t.onStreamIn) {
          r.onStreamIn = t.onStreamIn;
        }
        if (t.onStreamOut) {
          r.onStreamOut = t.onStreamOut;
        }
      })(this, {
        onStreamIn: (e, t, r) => function (e, t, r, n) {
          for (const i of zn.get(e).streamInHandlers) {
            try {
              i(t, r, n);
            } catch (e) {}
          }
        }(this, e, t, r)
      });
    }
    new(e, t, r = {}) {
      const n = typeof e == "string" ? GetHashKey(e) : e;
      const i = new _n(k, 0, 0);
      tt(this, i);
      const a = () => {
        if (Vn.get(i).cancelled) {
          return;
        }
        const e = CreateVehicle(n, t.x, t.y, t.z, r.heading ?? 0, false, false);
        if (e) {
          if (!p(this).entities.has(i.id)) {
            SetEntityAsMissionEntity(e, true, true);
            DeleteEntity(e);
            return;
          }
          l.get(i).handle = e;
          Ee.get(this).handleToEntity.set(e, i);
          SetEntityAsMissionEntity(e, true, true);
          SetModelAsNoLongerNeeded(n);
          if (r.dimension !== undefined) {
            i.dimension = r.dimension;
          }
          if (r.alpha !== undefined) {
            i.alpha = r.alpha;
          }
          if (r.engine !== undefined) {
            i.engine = r.engine;
          }
          if (r.locked !== undefined) {
            i.locked = r.locked;
          }
          if (r.numberPlate !== undefined) {
            i.numberPlate = r.numberPlate;
          }
          if (r.color !== undefined) {
            (function (e, t) {
              if (!Array.isArray(t)) {
                return;
              }
              const [r, n] = t;
              if (Array.isArray(r) && Array.isArray(n)) {
                SetVehicleCustomPrimaryColour(e, r[0], r[1], r[2]);
                SetVehicleCustomSecondaryColour(e, n[0], n[1], n[2]);
              } else if (typeof r == "number" && typeof n == "number") {
                SetVehicleColours(e, r, n);
              }
            })(e, r.color);
          }
          globalThis.mp?.events?.call("entityStreamIn", i);
        } else {
          ct(this, i.id);
        }
      };
      if (HasModelLoaded(n)) {
        a();
      } else {
        RequestModel(n);
        const e = GetGameTimer();
        const t = setTick(() => {
          if (HasModelLoaded(n)) {
            clearTick(t);
            Kn(i.id);
            a();
          } else if (GetGameTimer() - e > 30000) {
            clearTick(t);
            Kn(i.id);
            ct(this, i.id);
            console.warn(`[ragemp-bridge] mp.vehicles.new: model ${n} failed to load after 30s — vehicle not created.`);
          } else {
            RequestModel(n);
          }
        });
        (function (e, t) {
          const r = qn.get(e);
          if (r != null) {
            clearTick(r);
          }
          qn.set(e, t);
        })(i.id, t);
      }
      return i;
    }
  }
  const Zn = o();
  const Jn = new Map();
  let Xn = false;
  function Qn(e, t, r, n) {
    const i = e - n.x;
    const a = t - n.y;
    const o = r - n.z;
    return i * i + a * a + o * o;
  }
  function $n(e, t) {
    const r = Qn(e.px, e.py, e.pz, t);
    if (!e.hasCam) {
      return r;
    }
    const n = Qn(e.cx, e.cy, e.cz, t);
    if (r < n) {
      return r;
    } else {
      return n;
    }
  }
  function ei() {
    const e = PlayerPedId();
    if (!e || !DoesEntityExist(e)) {
      return null;
    }
    const [t, r, n] = GetEntityCoords(e, false);
    let i = 0;
    let a = 0;
    let o = 0;
    let s = false;
    try {
      const e = GetFinalRenderedCamCoord();
      if (e) {
        i = e[0];
        a = e[1];
        o = e[2];
        s = true;
      }
    } catch (e) {
      s = false;
    }
    return {
      px: t,
      py: r,
      pz: n,
      cx: i,
      cy: a,
      cz: o,
      hasCam: s
    };
  }
  function ti(e) {
    const t = Zn.get(e.ped);
    if (!t.frozen && e.spawned) {
      const t = e.ped.handle;
      if (t && DoesEntityExist(t)) {
        const [e, r, n] = GetEntityCoords(t, false);
        return {
          x: e,
          y: r,
          z: n
        };
      }
    }
    return t.spawnPosition ?? e.cfg.position;
  }
  function ri(e, t) {
    e.loading = false;
    if (!Jn.has(e.ped.id) || !function (e) {
      if (!we(e.ped.dimension)) {
        return false;
      }
      const t = ei();
      if (!t) {
        return false;
      }
      const r = e.cfg.spawnDistance;
      return $n(t, ti(e)) <= r * r;
    }(e)) {
      SetModelAsNoLongerNeeded(t);
      return;
    }
    const r = ti(e);
    const n = CreatePed(e.cfg.type, t, r.x, r.y, r.z, e.cfg.heading, false, false);
    SetModelAsNoLongerNeeded(t);
    if (n && DoesEntityExist(n) && (SetEntityCoordsNoOffset(n, r.x, r.y, r.z, false, false, false), SetEntityHeading(n, e.cfg.heading), l.get(e.ped).handle = n, Ee.get(e.pool).handleToEntity.set(n, e.ped), e.spawned = true, function (e, t) {
      const r = Zn.get(e.ped);
      const n = r.invincible;
      SetEntityAsMissionEntity(t, true, true);
      if (r.frozen) {
        SetBlockingOfNonTemporaryEvents(t, true);
      } else {
        SetBlockingOfNonTemporaryEvents(t, false);
      }
      SetPedCanRagdoll(t, !n);
      SetPedDiesWhenInjured(t, !n);
      SetEntityInvincible(t, n);
      FreezeEntityPosition(t, true);
      if (e.cfg.scenario) {
        TaskStartScenarioInPlace(t, e.cfg.scenario, 0, true);
      }
      SetPedDefaultComponentVariation(t);
    }(e, n), globalThis.mp?.events?.call("entityStreamIn", e.ped), e.cfg.onStreamIn)) {
      try {
        e.cfg.onStreamIn(e.ped);
      } catch (e) {
        console.error(`[ragemp-bridge] mp.peds.new stream-in callback error: ${e}`);
      }
    }
  }
  function ni(e) {
    if (!e.spawned) {
      return;
    }
    const t = e.ped.handle;
    e.spawned = false;
    if (t) {
      Ee.get(e.pool).handleToEntity.delete(t);
      if (DoesEntityExist(t)) {
        ClearPedTasksImmediately(t);
        SetEntityAsMissionEntity(t, false, true);
        DeleteEntity(t);
      }
    }
    l.get(e.ped).handle = null;
    globalThis.mp?.events?.call("entityStreamOut", e.ped);
  }
  function ii(e, t) {
    const r = we(e.ped.dimension);
    const i = ti(e);
    if (e.spawned) {
      if (function (e) {
        return Zn.get(e.ped).frozen;
      }(e) && (!r || $n(t, i) >= e.cfg.despawnDistance * e.cfg.despawnDistance)) {
        ni(e);
      }
    } else if (r && $n(t, i) <= e.cfg.spawnDistance * e.cfg.spawnDistance) {
      (function (e) {
        if (e.spawned || e.loading) {
          return;
        }
        const t = n(e.cfg.model);
        if (HasModelLoaded(t)) {
          e.loading = true;
          ri(e, t);
          return;
        }
        if (!IsModelInCdimage(t) || !IsModelValid(t)) {
          console.warn(`[ragemp-bridge] mp.peds.new: invalid model ${t} — ped not created.`);
          return;
        }
        e.loading = true;
        RequestModel(t);
        const r = GetGameTimer();
        const i = setTick(() => {
          if (!e.loading || !Jn.has(e.ped.id)) {
            clearTick(i);
            e.loading = false;
            return;
          }
          if (HasModelLoaded(t)) {
            clearTick(i);
            ri(e, t);
          } else if (GetGameTimer() - r > 30000) {
            clearTick(i);
            e.loading = false;
            console.warn(`[ragemp-bridge] mp.peds.new: model ${t} failed to load after 30s.`);
          } else {
            RequestModel(t);
          }
        });
      })(e);
    }
  }
  function ai() {
    if (Jn.size === 0) {
      return;
    }
    const e = ei();
    if (e) {
      for (const t of Jn.values()) {
        ii(t, e);
      }
    }
  }
  function oi(e, t, r) {
    tt(e, t);
    fe(t).managedLocally = true;
    Zn.get(t).spawnPosition = new i(r.position.x, r.position.y, r.position.z);
    t.dimension = r.dimension;
    const n = {
      pool: e,
      ped: t,
      cfg: r,
      spawned: false,
      loading: false
    };
    Jn.set(t.id, n);
    if (!Xn) {
      Xn = true;
      ye(() => ai());
      Ve(() => ai());
    }
    const a = ei();
    if (a) {
      ii(n, a);
    }
  }
  class si extends ze {
    constructor(e, t, r) {
      var n;
      super(e, t, "ped", r);
      n = this;
      Zn.init(n, {
        invincible: false,
        dynamic: false,
        frozen: false,
        spawnPosition: null
      });
    }
    get spawnPosition() {
      return Zn.get(this).spawnPosition;
    }
    set spawnPosition(e) {
      Zn.get(this).spawnPosition = e;
    }
    get position() {
      const e = this.handle;
      if (e && DoesEntityExist(e)) {
        const [t, r, n] = GetEntityCoords(e, true);
        return new i(t, r, n);
      }
      const t = Zn.get(this).spawnPosition;
      if (t) {
        return new i(t.x, t.y, t.z);
      } else {
        return new i(0, 0, 0);
      }
    }
    set position(e) {
      Zn.get(this).spawnPosition = new i(e.x, e.y, e.z);
      const t = this.handle;
      if (t && DoesEntityExist(t)) {
        SetEntityCoordsNoOffset(t, e.x, e.y, e.z, false, false, false);
      }
    }
    get isDynamic() {
      return Zn.get(this).dynamic;
    }
    set isDynamic(e) {
      Zn.get(this).dynamic = !!e;
    }
    get dynamic() {
      return Zn.get(this).dynamic;
    }
    set dynamic(e) {
      Zn.get(this).dynamic = !!e;
    }
    get invincible() {
      return Zn.get(this).invincible;
    }
    set invincible(e) {
      Zn.get(this).invincible = !!e;
      if (this.handle) {
        SetEntityInvincible(this.handle, !!e);
      }
    }
    setInvincible(e) {
      Zn.get(this).invincible = !!e;
      if (this.handle) {
        SetEntityInvincible(this.handle, !!e);
      }
    }
    get frozen() {
      if (this.handle) {
        return IsEntityPositionFrozen(this.handle);
      } else {
        return Zn.get(this).frozen;
      }
    }
    set frozen(e) {
      Zn.get(this).frozen = !!e;
      if (this.handle) {
        FreezeEntityPosition(this.handle, !!e);
      }
    }
    freezePosition(e) {
      Zn.get(this).frozen = !!e;
      if (this.handle) {
        FreezeEntityPosition(this.handle, !!e);
      }
    }
    get isPositionFrozen() {
      if (this.handle) {
        return IsEntityPositionFrozen(this.handle);
      } else {
        return Zn.get(this).frozen;
      }
    }
    get controller() {
      const e = NetworkGetEntityOwner(this.handle);
      if (e) {
        return Fr(e) ?? null;
      } else {
        return null;
      }
    }
    destroy() {
      const e = globalThis.mp?.peds;
      if (!e || !function (e, t) {
        const r = Jn.get(t);
        return !!r && (r.loading = false, ni(r), Jn.delete(t), ct(e, t), true);
      }(e, this.id)) {
        if (this.handle && DoesEntityExist(this.handle)) {
          SetEntityAsMissionEntity(this.handle, false, true);
          DeleteEntity(this.handle);
        }
        if (e) {
          ct(e, this.id);
        }
      }
    }
  }
  class li extends Pn {
    constructor() {
      var e;
      super("ped");
      e = this;
      onNet("ragemp:pedInvincible", (t, r) => {
        const n = Ie(t);
        if (n) {
          SetEntityInvincible(n, r);
          const t = dt(e, n);
          if (t) {
            Zn.get(t).invincible = r;
          }
        }
      });
      $e(this, Ae, (e, t) => new si(k, e, t), e => !IsPedAPlayer(e));
    }
    new(e, t, r, i, a) {
      let o = 0;
      let s = 0;
      let l = null;
      let d = {};
      if (typeof r == "object" && r !== null) {
        d = r;
        o = d.heading ?? d.rotation ?? 0;
        s = d.dimension ?? 0;
        if (typeof i == "function") {
          l = i;
        }
      } else {
        if (typeof r == "number") {
          o = r;
        }
        if (typeof i == "function") {
          l = i;
          if (typeof a == "number") {
            s = a;
          }
        } else if (typeof i == "number") {
          s = i;
        }
      }
      if (s === -1) {
        s = H;
      }
      const c = n(typeof e == "string" ? GetHashKey(e) : e);
      const u = new si(k, 0, 0);
      const h = Zn.get(u);
      h.dynamic = !!d.dynamic;
      h.invincible = d.invincible === undefined || !!d.invincible;
      h.frozen = d.frozen === undefined || !!d.frozen;
      oi(this, u, {
        model: c,
        position: {
          x: t.x,
          y: t.y,
          z: t.z
        },
        heading: o,
        dimension: s,
        type: d.type ?? 4,
        scenario: d.scenario ?? null,
        spawnDistance: d.spawnDistance ?? 100,
        despawnDistance: d.despawnDistance ?? 120,
        onStreamIn: l
      });
      return u;
    }
  }
  const di = o();
  class ci extends F {
    constructor(e, t, r) {
      super(e, t, "camera");
      (function (e, t) {
        di.init(e, {
          handle: t
        });
      })(this, r);
    }
    get handle() {
      return di.get(this).handle;
    }
    get position() {
      return Te(GetCamCoord(di.get(this).handle));
    }
    set position(e) {
      SetCamCoord(di.get(this).handle, e.x, e.y, e.z);
    }
    get rotation() {
      return Te(GetCamRot(di.get(this).handle, 2));
    }
    set rotation(e) {
      SetCamRot(di.get(this).handle, e.x, e.y, e.z, 2);
    }
    getDirection() {
      const e = GetCamRot(di.get(this).handle, 2);
      const t = e[2] * Math.PI / 180;
      const r = e[0] * Math.PI / 180;
      const n = Math.abs(Math.cos(r));
      return new i(-Math.sin(t) * n, Math.cos(t) * n, Math.sin(r));
    }
    getCoord() {
      return Te(GetCamCoord(di.get(this).handle));
    }
    setCoord(e, t, r) {
      SetCamCoord(di.get(this).handle, e, t, r);
    }
    getRot(e) {
      return Te(GetCamRot(di.get(this).handle, e ?? 2));
    }
    setRot(e, t, r, n) {
      SetCamRot(di.get(this).handle, e, t, r, n ?? 2);
    }
    isActive() {
      return IsCamActive(di.get(this).handle);
    }
    setActive(e) {
      SetCamActive(di.get(this).handle, !!e);
    }
    setActiveWithInterp(e, t, r, n) {
      SetCamActiveWithInterp(di.get(this).handle, e?.handle ?? e, t, r, n);
    }
    isInterpolating() {
      return IsCamInterpolating(di.get(this).handle);
    }
    isRendering() {
      return IsCamRendering(di.get(this).handle);
    }
    doesExist() {
      return DoesCamExist(di.get(this).handle);
    }
    destroy(e) {
      DestroyCam(di.get(this).handle, e ?? false);
    }
    getFov() {
      return GetCamFov(di.get(this).handle);
    }
    setFov(e) {
      SetCamFov(di.get(this).handle, e);
    }
    getNearClip() {
      return GetCamNearClip(di.get(this).handle);
    }
    setNearClip(e) {
      SetCamNearClip(di.get(this).handle, e);
    }
    getFarClip() {
      return GetCamFarClip(di.get(this).handle);
    }
    setFarClip(e) {
      SetCamFarClip(di.get(this).handle, e);
    }
    getNearDof() {
      return GetCamNearDof?.(di.get(this).handle);
    }
    setNearDof(e) {
      SetCamNearDof(di.get(this).handle, e);
    }
    getFarDof() {
      return GetCamFarDof(di.get(this).handle);
    }
    setFarDof(e) {
      SetCamFarDof(di.get(this).handle, e);
    }
    setDofStrength(e) {
      SetCamDofStrength(di.get(this).handle, e);
    }
    setDofPlanes(e, t, r, n) {
      SetCamDofPlanes(di.get(this).handle, e, t, r, n);
    }
    setUseShallowDofMode(e) {
      SetCamUseShallowDofMode(di.get(this).handle, !!e);
    }
    setDofFnumberOfLens(e) {
      SetCamDofFnumberOfLens(di.get(this).handle, e);
    }
    setDofFocusDistanceBias(e) {
      SetCamDofFocusDistanceBias(di.get(this).handle, e);
    }
    setDofMaxNearInFocusDistance(e) {
      SetCamDofMaxNearInFocusDistance(di.get(this).handle, e);
    }
    setDofMaxNearInFocuxDistanceBlendLevel(e) {
      SetCamDofMaxNearInFocusDistanceBlendLevel(di.get(this).handle, e);
    }
    getDofParam(e) {}
    setDofParam(e, t) {}
    setMotionBlurStrength(e) {
      SetCamMotionBlurStrength(di.get(this).handle, e);
    }
    setAffectsAiming(e) {
      SetCamAffectsAiming(di.get(this).handle, !!e);
    }
    setInheritRollVehicle(e) {
      SetCamInheritRollVehicle(di.get(this).handle, !!e);
    }
    setDebugName(e) {
      SetCamDebugName(di.get(this).handle, e);
    }
    attachTo(e, t, r, n, i) {
      AttachCamToEntity(di.get(this).handle, e?.handle ?? e, t, r, n, i ?? true);
    }
    attachToPedBone(e, t, r, n, i, a) {
      AttachCamToPedBone(di.get(this).handle, e?.handle ?? e, t, r, n, i, !!a);
    }
    detach() {
      DetachCam(di.get(this).handle);
    }
    pointAt(e, t, r, n, i) {
      PointCamAtEntity(di.get(this).handle, e?.handle ?? e, t ?? 0, r ?? 0, n ?? 0, i ?? true);
    }
    pointAtCoord(e, t, r) {
      PointCamAtCoord(di.get(this).handle, e, t, r);
    }
    pointAtPedBone(e, t, r, n, i, a) {
      PointCamAtPedBone(di.get(this).handle, e?.handle ?? e, t, r, n, i, !!a);
    }
    stopPointing() {
      StopCamPointing(di.get(this).handle);
    }
    shake(e, t) {
      ShakeCam(di.get(this).handle, e, t);
    }
    isShaking() {
      return IsCamShaking(di.get(this).handle);
    }
    setShakeAmplitude(e) {
      SetCamShakeAmplitude(di.get(this).handle, e);
    }
    stopShaking(e) {
      StopCamShaking(di.get(this).handle, !!e);
    }
    animatedShake(e, t, r, n) {
      AnimatedShakeCam(di.get(this).handle, e, t, r, n);
    }
    playAnim(e, t, r, n, i, a, o, s) {
      return PlayCamAnim(di.get(this).handle, e, t, r, n ?? 0, i ?? 0, a ?? 0, 0, 0, !!o, s ?? 2);
    }
    isPlayingAnim(e, t) {
      return IsCamPlayingAnim(di.get(this).handle, e, t);
    }
    getAnimCurrentPhase() {
      return GetCamAnimCurrentPhase(di.get(this).handle);
    }
    setAnimCurrentPhase(e) {
      SetCamAnimCurrentPhase(di.get(this).handle, e);
    }
    getSplinePhase() {
      return GetCamSplinePhase(di.get(this).handle);
    }
  }
  const ui = o();
  function hi(e) {
    const t = ui.get(e);
    t.gameplay ||= function () {
      const e = {
        get handle() {
          return GetRenderingCam();
        },
        get position() {
          const e = GetGameplayCamCoord();
          return new i(e[0], e[1], e[2]);
        },
        get rotation() {
          const e = GetGameplayCamRot(2);
          return new i(e[0], e[1], e[2]);
        },
        getCoord() {
          const e = GetGameplayCamCoord();
          return new i(e[0], e[1], e[2]);
        },
        getRot(e) {
          const t = GetGameplayCamRot(e ?? 2);
          return new i(t[0], t[1], t[2]);
        },
        getFov: () => GetGameplayCamFov(),
        setFov(e) {},
        getDirection() {
          const e = GetGameplayCamRot(2);
          const t = e[2] * Math.PI / 180;
          const r = e[0] * Math.PI / 180;
          const n = Math.abs(Math.cos(r));
          return new i(-Math.sin(t) * n, Math.cos(t) * n, Math.sin(r));
        },
        getRelativeHeading: () => GetGameplayCamRelativeHeading(),
        setRelativeHeading(e) {
          SetGameplayCamRelativeHeading(e);
        },
        getRelativePitch: () => GetGameplayCamRelativePitch(),
        setRelativePitch(e, t) {
          SetGameplayCamRelativePitch(e, t ?? 1);
        },
        resetFullAttachParentTransformTimer() {
          ResetGameplayCamFullAttachParentTransformTimer();
        },
        shake(e, t) {
          ShakeGameplayCam(e, t);
        },
        isShaking: () => IsGameplayCamShaking(),
        setShakeAmplitude(e) {
          SetGameplayCamShakeAmplitude(e);
        },
        stopShaking(e) {
          StopGameplayCamShaking(!!e);
        },
        isRendering: () => IsGameplayCamRendering(),
        isLookingBehind: () => IsGameplayCamLookingBehind(),
        setFollowPedThisUpdate(e) {
          SetGameplayCamFollowPedThisUpdate(e);
        },
        setMotionBlurScalingThisUpdate(e) {
          SetGameplayCamMotionBlurScalingThisUpdate(e);
        },
        setMaxMotionBlurStrengthThisUpdate(e) {
          SetGameplayCamMaxMotionBlurStrengthThisUpdate(e);
        },
        setAltitudeFovScalingState(e) {
          SetGameplayCamAltitudeFovScalingState(e);
        },
        disableAltitudeFovScalingThisUpdate() {
          DisableGameplayCamAltitudeFovScalingThisUpdate();
        },
        setIgnoreEntityCollisionThisUpdate(e, t) {
          SetGameplayCamIgnoreEntityCollisionThisUpdate(e, t);
        },
        setAffectsAiming(e) {},
        destroy() {},
        setActive(e) {},
        isActive: () => IsGameplayCamRendering(),
        doesExist: () => true
      };
      return e;
    }();
    return t.gameplay;
  }
  class pi extends S {
    constructor() {
      var e;
      super();
      e = this;
      ui.init(e, {
        gameplay: null
      });
    }
    get gameplay() {
      return hi(this);
    }
    new(e, t, r, n) {
      if (typeof e == "string" && e.toLowerCase() === "gameplay") {
        return this.gameplay;
      }
      const i = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", t?.x ?? 0, t?.y ?? 0, t?.z ?? 0, r?.x ?? 0, r?.y ?? 0, r?.z ?? 0, n ?? 50, false, 2);
      const a = new ci(k, 0, i);
      le(this, a);
      return a;
    }
  }
  const mi = o("Browser");
  function gi(e) {
    const t = mi.get(e);
    if (!t.destroyed && typeof SendNuiMessage == "function") {
      SendNuiMessage(JSON.stringify({
        type: "__ragemp:browser:pointerEvents",
        browserId: e.id,
        enabled: t.inputEnabled && t.mouseInputEnabled
      }));
    }
  }
  const Si = o();
  function Ci(e) {
    return Si.get(e).chatBrowser;
  }
  function yi(e, t) {
    Si.get(e).chatBrowser = t;
  }
  const Pi = new Map();
  let Ai = 0;
  let Ti = 10000;
  let vi = false;
  function Ii(e, t) {
    if (typeof SendNuiMessage == "function") {
      SendNuiMessage(JSON.stringify({
        type: t ? "__ragemp:browser:focus" : "__ragemp:browser:blur",
        browserId: e
      }));
    }
  }
  class Ei extends F {
    constructor(e, t, r) {
      super(e, t, "browser");
      (function (e, t) {
        mi.init(e, {
          url: t,
          active: false,
          isChatBrowser: false,
          destroyed: false,
          inputEnabled: true,
          mouseInputEnabled: true,
          orderId: 0,
          domReady: false,
          cachedExec: []
        });
      })(this, r);
    }
    get url() {
      return mi.get(this).url;
    }
    get active() {
      return mi.get(this).active;
    }
    set active(e) {
      const t = mi.get(this);
      t.active = !!e;
      cr("browser:" + this.id, t.active);
      Ii(this.id, t.active);
    }
    execute(e) {
      if (!mi.get(this).destroyed) {
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:browser:exec",
          browserId: this.id,
          code: e
        }));
      }
    }
    executeCached(e) {
      const t = mi.get(this);
      if (!t.destroyed) {
        t.cachedExec.push(e);
        if (t.domReady) {
          this.execute(e);
        }
      }
    }
    get inputEnabled() {
      return mi.get(this).inputEnabled;
    }
    set inputEnabled(e) {
      mi.get(this).inputEnabled = !!e;
      gi(this);
    }
    get mouseInputEnabled() {
      return mi.get(this).mouseInputEnabled;
    }
    set mouseInputEnabled(e) {
      mi.get(this).mouseInputEnabled = !!e;
      gi(this);
    }
    get orderId() {
      return mi.get(this).orderId;
    }
    set orderId(e) {
      const t = mi.get(this);
      t.orderId = e | 0;
      if (!t.destroyed && typeof SendNuiMessage == "function") {
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:browser:orderId",
          browserId: this.id,
          orderId: t.orderId
        }));
      }
    }
    markAsChat(e) {
      const t = e === undefined || !!e;
      mi.get(this).isChatBrowser = t;
      const r = globalThis.mp?.browsers;
      if (r) {
        if (t) {
          yi(r, this);
        } else if (Ci(r) === this) {
          yi(r, null);
        }
      }
    }
    reload(e) {
      SendNuiMessage(JSON.stringify({
        type: "__ragemp:browser:reload",
        browserId: this.id,
        ignoreCache: !!e
      }));
    }
    call(e, ...t) {
      if (!mi.get(this).destroyed) {
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:browser:event",
          browserId: this.id,
          event: e,
          args: t
        }));
      }
    }
    callProc(e, ...t) {
      if (mi.get(this).destroyed) {
        return Promise.reject(new Error("Browser destroyed"));
      } else {
        return function (e, t, r) {
          const n = ++Ai;
          return new Promise((i, a) => {
            Pi.set(n, {
              resolve: i,
              reject: a
            });
            SendNuiMessage(JSON.stringify({
              type: "__ragemp:browser:proc",
              browserId: e,
              proc: t,
              requestId: n,
              args: r
            }));
            setTimeout(() => {
              if (Pi.has(n)) {
                Pi.delete(n);
                a(new Error(`Proc "${t}" timed out after ${Ti}ms`));
              }
            }, Ti);
          });
        }(this.id, e, t);
      }
    }
    destroy() {
      const e = mi.get(this);
      if (e.destroyed) {
        return;
      }
      e.destroyed = true;
      if (e.active) {
        e.active = false;
        cr("browser:" + this.id, false);
      }
      Ii(this.id, false);
      const t = globalThis.mp?.browsers;
      if (t && Ci(t) === this) {
        yi(t, null);
      }
      SendNuiMessage(JSON.stringify({
        type: "__ragemp:browser:destroy",
        browserId: this.id
      }));
      if (t) {
        y(t, this.id);
        de(t, this.id);
      }
    }
  }
  const ki = /!\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\}/;
  const fi = /^!\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\}([\s\S]*)$/;
  function Di(e) {
    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function Fi(e, t) {
    return `<span style="${t ? `display:block;color:#${t}` : "display:block"}">${e}</span>`;
  }
  function Ni(e) {
    const t = String(e ?? "");
    if (!ki.test(t)) {
      return t;
    }
    if (/^<span\s/i.test(t)) {
      return t;
    }
    const r = function (e) {
      const t = fi.exec(e);
      if (t) {
        if (ki.test(t[2])) {
          return null;
        } else {
          return Fi(Di(t[2]), t[1]);
        }
      } else {
        return null;
      }
    }(t);
    if (r) {
      return r;
    }
    let n = "";
    let i = 0;
    let a = 0;
    const o = Di(t);
    while (a < o.length) {
      const e = /^!\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\}/.exec(o.slice(a));
      if (e) {
        if (i) {
          n += "</span>";
          i--;
        }
        n += `<span style="color:#${e[1]}">`;
        i++;
        a += e[0].length;
      } else {
        n += o[a];
        a++;
      }
    }
    while (i-- > 0) {
      n += "</span>";
    }
    return Fi(n);
  }
  function bi(e, t) {
    if (t) {
      return Ni(e);
    } else {
      return function (e) {
        return String(e).replace(/!\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\}/g, "");
      }(e);
    }
  }
  function xi(e) {
    if (!e || typeof e.call != "function") {
      return false;
    }
    try {
      return !mi.get(e).destroyed;
    } catch {
      return false;
    }
  }
  function Bi(e) {
    return /hud-chat\.html/i.test(e);
  }
  function Ri(e) {
    const t = String(e ?? "").trim();
    const r = /^package:\/\/(.+)$/i.exec(t);
    if (r) {
      return r[1];
    } else {
      return t;
    }
  }
  let Gi = null;
  function Mi(e) {
    if (xi(e)) {
      e.markAsChat();
      Gi = e;
      globalThis.chat_browser = e;
      e.executeCached("(function(){if(!window.chatAPI||chatAPI.__bridgeColorFmt)return;const orig=chatAPI.push.bind(chatAPI);const HEX=/!\\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\}/;const LEAD=/^!\\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\}([\\s\\S]*)$/;function esc(s){return String(s).replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\");}function block(html,c){return'<span style=\"display:block'+(c?\";color:#\"+c:\"\")+'\">'+html+\"</span>\";}function fmt(t){t=String(t==null?\"\":t);if(t.indexOf(\"!{\")<0||/^<span\\s/i.test(t))return t;var m=LEAD.exec(t);if(m&&!HEX.test(m[2]))return block(esc(m[2]),m[1]);var out=\"\",open=0,i=0,s=esc(t);while(i<s.length){var r=/^!\\{#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\}/.exec(s.slice(i));if(r){if(open)out+=\"</span>\",open--;out+='<span style=\"color:#'+r[1]+'\">';open++;i+=r[0].length;continue;}out+=s[i++];}while(open--)out+=\"</span>\";return block(out);}chatAPI.push=function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return orig.apply(chatAPI,[fmt(String(t==null?\"\":t))].concat(n));};chatAPI.__bridgeColorFmt=1;})();");
    }
  }
  function Vi() {
    const e = [];
    const t = new Set();
    const r = globalThis.mp?.browsers;
    const n = globalThis;
    const i = r => {
      if (xi(r) && !t.has(r.id)) {
        t.add(r.id);
        e.push(r);
      }
    };
    i(r?._chatBrowser ?? null);
    i(n.chat_browser);
    r?.forEach?.(e => {
      if (Bi(e.url)) {
        i(e);
      }
    });
    return e;
  }
  function wi() {
    const e = globalThis.main_browser;
    if (xi(e)) {
      return e;
    } else {
      return null;
    }
  }
  function _i(e, ...t) {
    if (function (e, t) {
      const r = Vi();
      if (r.length === 0) {
        return false;
      }
      for (const n of r) {
        n.call(e, ...t);
      }
      return true;
    }(e, t)) {
      return;
    }
    if (e === "chat:push") {
      const e = wi();
      if (e) {
        (function (e, t) {
          const r = JSON.stringify(t);
          e.execute(`(function(t){try{if(typeof chatAPI!=="undefined"&&chatAPI.push)return chatAPI.push(t);if(this&&this.AppComponents&&this.AppComponents.chatAPI)return this.AppComponents.chatAPI.push(t);if(window.AppComponents&&window.AppComponents.chatAPI)return window.AppComponents.chatAPI.push(t);}catch(e){console.error("[bridge chat]",e)}})(${r})`);
        })(e, String(t[0] ?? ""));
        return;
      }
    }
    const r = wi();
    if (r) {
      r.call(e, ...t);
    }
  }
  function Oi(e) {
    _i("chat:push", Ni(e));
  }
  function Hi(e) {
    const t = /window\.location(?:\.href)?\s*=\s*['"]([^'"]+)['"]/.exec(e);
    if (t) {
      (function (e) {
        const t = Ri(e);
        const r = globalThis.mp?.browsers;
        if (!r || !t) {
          return null;
        }
        if (Gi && xi(Gi)) {
          Mi(Gi);
          return Gi;
        }
        const n = Vi().find(e => xi(e));
        if (n) {
          Mi(n);
          return n;
        }
        const i = r.new(t);
        Mi(i);
      })(t[1]);
      return true;
    }
    const r = Gi && xi(Gi) ? Gi : null;
    return !!r && (r.execute(e), true);
  }
  function Li(e) {
    const t = typeof e == "string" ? e.trim() : "";
    const r = t.charAt(0) === "/" ? t.slice(1) : t;
    if (r) {
      try {
        globalThis.mp?.events?.call("playerCommand", r);
      } catch (e) {}
      emitNet("ragemp:command", r);
    }
  }
  function Wi(e) {
    const t = typeof e == "string" ? e.trim() : "";
    if (t) {
      if (t.charAt(0) !== "/") {
        emitNet("ragemp:chat:message", t);
      } else {
        Li(t);
      }
    }
  }
  function Ui(e) {
    if (!vi) {
      if (typeof RegisterNuiCallbackType == "function") {
        vi = true;
        RegisterNuiCallbackType("ragemp:cefProcResult");
        on("__cfx_nui:ragemp:cefProcResult", (e, t) => {
          const r = Pi.get(e.requestId);
          if (r) {
            Pi.delete(e.requestId);
            if (e.error) {
              r.reject(new Error(e.error));
            } else {
              r.resolve(e.result);
            }
          }
          t({});
        });
        RegisterNuiCallbackType("ragemp:cefProc");
        on("__cfx_nui:ragemp:cefProc", (e, t) => {
          const {
            procName: r,
            requestId: n,
            args: i,
            browserId: a
          } = e;
          const o = globalThis.mp?.events;
          const s = o ? St.get(o).procs?.get(r) : undefined;
          if (!s) {
            SendNuiMessage(JSON.stringify({
              type: "__ragemp:browser:procResult",
              browserId: a,
              requestId: n,
              error: `Unknown proc: ${r}`
            }));
            t({});
            return;
          }
          Promise.resolve().then(() => s(...(i ?? []))).then(e => SendNuiMessage(JSON.stringify({
            type: "__ragemp:browser:procResult",
            browserId: a,
            requestId: n,
            result: e
          }))).catch(e => SendNuiMessage(JSON.stringify({
            type: "__ragemp:browser:procResult",
            browserId: a,
            requestId: n,
            error: String(e)
          })));
          t({});
        });
      }
    }
    if (typeof RegisterNuiCallbackType == "function") {
      RegisterNuiCallbackType("ragemp:browserError");
      on("__cfx_nui:ragemp:browserError", (t, r) => {
        const n = e.at(t && t.browserId);
        console.error(function (e) {
          const t = e && e.browserId;
          const r = e && e.kind || "error";
          const n = e && e.event ? ` [event: ${e.event}]` : "";
          const i = e && e.source ? ` (${e.source}:${e.lineno ?? "?"}:${e.colno ?? "?"})` : "";
          return `[browser ${t}] ${r}${n}: ${e && e.message || "Unknown error"}${i}`;
        }(t));
        if (t && t.stack) {
          console.error(t.stack);
        }
        globalThis.mp?.events?.call("browserError", n ?? null, t);
        r({});
      });
      RegisterNuiCallbackType("ragemp:browserLifecycle");
      on("__cfx_nui:ragemp:browserLifecycle", (t, r) => {
        const n = e.at(t && t.browserId);
        if (n) {
          if (t.event === "domReady") {
            (function (e) {
              const t = mi.get(e);
              t.domReady = true;
              if (t.cachedExec.length !== 0) {
                for (const r of t.cachedExec) {
                  e.execute(r);
                }
              }
            })(n);
            if (Bi(n.url)) {
              Mi(n);
            }
            globalThis.mp?.events?.call("browserDomReady", n);
          } else if (t.event === "loadError") {
            globalThis.mp?.events?.call("browserLoadError", n, t);
          }
          r({});
        } else {
          r({});
        }
      });
      RegisterNuiCallbackType("ragemp:browserEvent");
      on("__cfx_nui:ragemp:browserEvent", (e, t) => {
        const {
          event: r,
          args: n
        } = e;
        if (r === "command") {
          Li((n ?? [])[0]);
        } else if (r === "chatMessage" || r === "chat:message") {
          Wi((n ?? [])[0]);
        } else if (r === "focus") {
          cr("cefInvoke", !!(n ?? [])[0]);
        } else if (r && globalThis.mp?.events) {
          globalThis.mp.events.call(r, ...(n ?? []));
        }
        t({});
      });
      RegisterNuiCallbackType("ragemp:cef:command");
      on("__cfx_nui:ragemp:cef:command", (e, t) => {
        Li(e && e.command);
        t({});
      });
      RegisterNuiCallbackType("ragemp:cef:chatMessage");
      on("__cfx_nui:ragemp:cef:chatMessage", (e, t) => {
        Wi(e && e.message);
        t({});
      });
    }
  }
  class zi extends S {
    constructor() {
      var e;
      super();
      e = this;
      Si.init(e, {
        chatBrowser: null
      });
      Ui(this);
    }
    new(e) {
      const t = new Ei(k, 0, Ri(e));
      le(this, t);
      const r = t.id;
      if (typeof SendNuiMessage == "function") {
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:browser:create",
          browserId: r,
          url: t.url
        }));
      } else {
        console.error("SendNuiMessage missing — NUI host not available");
      }
      t.orderId = r;
      globalThis.mp?.events?.call("browserCreated", t);
      return t;
    }
    newHeadless(e) {
      return this.new(e);
    }
    setProcTimeout(e) {
      (function (e) {
        if (typeof e == "number" && e > 0) {
          Ti = e;
        }
      })(e);
    }
    get procTimeout() {
      return Ti;
    }
  }
  const ji = o();
  class qi extends F {
    constructor(e, t) {
      var r;
      super(e, t.id, "pickup");
      this.pickupHash = t.pickupHash;
      this.x = t.x;
      this.y = t.y;
      this.z = t.z;
      this.value = t.value ?? 0;
      this.alpha = t.alpha ?? 255;
      this.dimension = t.dimension ?? 0;
      r = this;
      ji.init(r, {
        handle: null,
        collected: false
      });
    }
    get position() {
      return new i(this.x, this.y, this.z);
    }
    destroy() {
      const e = globalThis.mp?.pickups;
      if (e) {
        Xi(e, this.id);
      }
    }
  }
  function Ki(e) {
    if (e.handle) {
      RemovePickup(e.handle);
      e.handle = null;
    }
  }
  const Yi = o();
  function Zi(e) {
    return Yi.get(e).pickups;
  }
  function Ji(e) {
    return Yi.get(e).byLocal;
  }
  function Xi(e, t) {
    const r = Yi.get(e);
    const n = r.pickups.get(t) ?? r.byLocal.get(t);
    if (n) {
      Ki(ji.get(n));
      r.pickups.delete(n.remoteId);
      r.byLocal.delete(n.id);
      r.ids.free(n.id);
    }
  }
  function Qi(e) {
    const t = ji.get(e);
    if (t.collected) {
      return;
    }
    const r = we(e.dimension);
    if (r && !t.handle) {
      (function (e, t) {
        if (!t.handle) {
          t.handle = CreatePickup(e.pickupHash, e.x, e.y, e.z, 8, e.value, false, e.pickupHash);
          if (t.handle && e.alpha !== 255) {
            SetEntityAlpha(t.handle, e.alpha, false);
          }
        }
      })(e, t);
    } else if (!r && t.handle) {
      Ki(t);
    }
  }
  function $i(e, t) {
    const r = Yi.get(e);
    if (r.pickups.has(t.id)) {
      return;
    }
    const n = new qi(k, t);
    c(n, t.id);
    d(n, r.ids.allocate());
    r.pickups.set(n.remoteId, n);
    r.byLocal.set(n.id, n);
    Qi(n);
  }
  class ea extends S {
    constructor() {
      var e;
      super();
      e = this;
      Yi.init(e, {
        pickups: new Map(),
        byLocal: new Map(),
        ids: new ie()
      });
      Ve(() => Yi.get(e).pickups.forEach(e => Qi(e)));
      onNet("ragemp:pickupCreate", t => {
        $i(e, t);
      });
      onNet("ragemp:pickupSyncAll", t => {
        for (const r of t) {
          $i(e, r);
        }
      });
      onNet("ragemp:pickupUpdate", (t, r) => {
        const n = Yi.get(e).pickups.get(t);
        if (!n) {
          return;
        }
        const i = ji.get(n);
        const a = n.id;
        Ki(i);
        Object.assign(n, r);
        d(n, a);
        i.handle = null;
        i.collected = false;
        Qi(n);
      });
      onNet("ragemp:pickupDestroy", t => {
        Xi(e, t);
      });
      ye(() => {
        for (const [t, r] of Yi.get(e).pickups) {
          const e = ji.get(r);
          if (!e.collected && e.handle && HasPickupBeenCollected(e.handle)) {
            e.collected = true;
            e.handle = null;
            emitNet("ragemp:playerPickup", t);
            globalThis.mp?.events?.call("playerPickup", globalThis.mp?.players?.local, r);
          }
        }
      });
    }
    at(e) {
      return Ji(this).get(e) ?? null;
    }
    atRemoteId(e) {
      return Zi(this).get(e) ?? null;
    }
    exists(e) {
      if (typeof e == "number") {
        return Ji(this).has(e);
      } else {
        return !!e && typeof e == "object" && Ji(this).get(e.id) === e;
      }
    }
    forEach(e) {
      Zi(this).forEach(t => e(t));
    }
    toArray() {
      return Array.from(Zi(this).values());
    }
    get length() {
      return Zi(this).size;
    }
    get size() {
      return Zi(this).size;
    }
  }
  const ta = o();
  class ra extends F {
    constructor(e, t, r, n) {
      super(e, t, "dummy");
      (function (e, t, r) {
        ta.init(e, {
          dummyType: t,
          data: r ?? {}
        });
      })(this, r, n);
    }
    get dummyType() {
      return ta.get(this).dummyType;
    }
    get data() {
      return ta.get(this).data;
    }
    destroy() {
      const e = globalThis.mp?.dummies;
      if (e) {
        y(e, this.id);
        de(e, this.id);
      }
    }
  }
  function na(e, t) {
    if (e.atRemoteId(t.id)) {
      return;
    }
    const r = new ra(k, t.id, t.dummyType, t.data);
    se(e, r);
    globalThis.mp?.events?.call("dummyEntityCreated", r);
  }
  class ia extends S {
    constructor() {
      var e;
      super();
      e = this;
      onNet("ragemp:dummyCreate", t => {
        na(e, t);
      });
      onNet("ragemp:dummySyncAll", t => {
        for (const r of t) {
          na(e, r);
        }
      });
      onNet("ragemp:dummyDestroy", t => {
        const r = e.atRemoteId(t);
        if (r) {
          y(e, r.id);
          de(e, r.id);
          globalThis.mp?.events?.call("dummyEntityDestroyed", r);
        }
      });
    }
    forEachByType(e, t) {
      this.forEach(r => {
        if (r.dummyType === e) {
          t(r);
        }
      });
    }
  }
  const aa = o();
  class oa extends F {
    constructor(e, t, r) {
      super(e, t, "marker");
      (function (e, t) {
        aa.init(e, {
          type: t,
          position: new i(0, 0, 0),
          direction: new i(0, 0, 0),
          rotation: new i(0, 0, 0),
          scale: 1,
          r: 255,
          g: 0,
          b: 0,
          a: 255,
          visible: true,
          dimension: undefined,
          drawDistance: undefined
        });
      })(this, r);
    }
    get position() {
      return aa.get(this).position;
    }
    set position(e) {
      aa.get(this).position = e instanceof i ? e : new i(e.x, e.y, e.z);
    }
    get direction() {
      return aa.get(this).direction;
    }
    set direction(e) {
      aa.get(this).direction = e instanceof i ? e : new i(e.x, e.y, e.z);
    }
    get rotation() {
      return aa.get(this).rotation;
    }
    set rotation(e) {
      aa.get(this).rotation = e instanceof i ? e : new i(e.x, e.y, e.z);
    }
    get scale() {
      return aa.get(this).scale;
    }
    set scale(e) {
      aa.get(this).scale = e;
    }
    get visible() {
      return aa.get(this).visible;
    }
    set visible(e) {
      aa.get(this).visible = e;
    }
    get color() {
      const e = aa.get(this);
      return {
        r: e.r,
        g: e.g,
        b: e.b,
        a: e.a
      };
    }
    set color(e) {
      const t = aa.get(this);
      t.r = e.r;
      t.g = e.g;
      t.b = e.b;
      t.a = e.a;
    }
    destroy() {
      if (globalThis.mp.markers) {
        y(globalThis.mp.markers, this.id);
        de(globalThis.mp.markers, this.id);
      }
    }
  }
  const sa = o();
  function la(e) {
    sa.init(e, {
      hiddenSet: new Set(),
      shownSet: new Set(),
      renderTick: null
    });
    _e(e, {
      createEvent: "ragemp:markerCreate",
      syncAllEvent: "ragemp:markerSyncAll",
      updateEvent: "ragemp:markerUpdate",
      destroyEvent: "ragemp:markerDestroy",
      create: (e, t) => function (e, t) {
        const r = new oa(k, t.id, t.type);
        const n = aa.get(r);
        n.position = new i(t.x, t.y, t.z);
        n.direction = new i(t.dirX, t.dirY, t.dirZ);
        n.rotation = new i(t.rotX, t.rotY, t.rotZ);
        n.scale = t.scale;
        n.r = t.r;
        n.g = t.g;
        n.b = t.b;
        n.a = t.a;
        n.visible = t.visible;
        n.dimension = t.dimension ?? 0;
        n.drawDistance = t.drawDistance;
        se(e, r);
        return r;
      }(e, t),
      update: (e, t, r) => {
        const n = e.atRemoteId(t);
        if (n) {
          const e = aa.get(n);
          e.position = new i(r.x, r.y, r.z);
          e.direction = new i(r.dirX, r.dirY, r.dirZ);
          e.rotation = new i(r.rotX, r.rotY, r.rotZ);
          e.scale = r.scale;
          e.r = r.r;
          e.g = r.g;
          e.b = r.b;
          e.a = r.a;
          e.visible = r.visible;
          e.dimension = r.dimension ?? 0;
          e.drawDistance = r.drawDistance;
        }
      },
      destroy: (e, t) => {
        const r = e.atRemoteId(t);
        if (r) {
          const n = sa.get(e);
          n.hiddenSet.delete(t);
          n.shownSet.delete(t);
          r.destroy();
        }
      }
    });
    onNet("ragemp:markerHide", t => {
      const r = sa.get(e);
      r.shownSet.delete(t);
      r.hiddenSet.add(t);
    });
    onNet("ragemp:markerShow", t => {
      const r = sa.get(e);
      r.hiddenSet.delete(t);
      r.shownSet.add(t);
    });
    (function (e) {
      const t = 150;
      const r = sa.get(e);
      r.renderTick = setTick(() => {
        if (p(e).entities.size === 0) {
          return;
        }
        const n = GetEntityCoords(PlayerPedId(), true);
        const i = n[0];
        const a = n[1];
        const o = n[2];
        const s = r.hiddenSet;
        const l = r.shownSet;
        e.forEach(e => {
          const r = aa.get(e);
          const n = e.remoteId;
          if (s.has(n)) {
            return;
          }
          if (!r.visible && !l.has(n)) {
            return;
          }
          if (!we(r.dimension)) {
            return;
          }
          const d = r.position;
          const c = i - d.x;
          const u = a - d.y;
          const h = o - d.z;
          const p = Math.max(r.drawDistance ?? t, r.scale);
          if (!(c * c + u * u + h * h > p * p)) {
            DrawMarker(r.type, d.x, d.y, d.z, r.direction.x, r.direction.y, r.direction.z, r.rotation.x, r.rotation.y, r.rotation.z, r.scale, r.scale, r.scale, r.r, r.g, r.b, r.a, false, true, 2, false, null, null, false);
          }
        });
      });
      if (typeof on == "function") {
        on("onResourceStop", e => {
          if (typeof GetCurrentResourceName != "function" || e === GetCurrentResourceName()) {
            if (r.renderTick != null) {
              clearTick(r.renderTick);
              r.renderTick = null;
            }
          }
        });
      }
    })(e);
  }
  class da extends S {
    constructor() {
      super();
      la(this);
    }
    new(e, t, r, n = {}) {
      const a = new oa(k, 0, e);
      const o = aa.get(a);
      o.position = t instanceof i ? t : new i(t.x, t.y, t.z);
      o.scale = r;
      if (n.color) {
        const e = n.color;
        const t = Array.isArray(e);
        o.r = (t ? e[0] : e.r) ?? o.r;
        o.g = (t ? e[1] : e.g) ?? o.g;
        o.b = (t ? e[2] : e.b) ?? o.b;
        o.a = (t ? e[3] : e.a) ?? o.a;
      }
      if (n.direction !== undefined) {
        o.direction = n.direction instanceof i ? n.direction : new i(n.direction.x, n.direction.y, n.direction.z);
      }
      if (n.rotation !== undefined) {
        o.rotation = n.rotation instanceof i ? n.rotation : new i(n.rotation.x, n.rotation.y, n.rotation.z);
      }
      if (n.visible !== undefined) {
        o.visible = n.visible;
      }
      if (n.dimension !== undefined) {
        o.dimension = n.dimension;
      }
      if (n.drawDistance !== undefined) {
        o.drawDistance = n.drawDistance;
      }
      le(this, a);
      return a;
    }
  }
  const ca = o();
  const ua = new Map();
  function ha(e) {
    const t = ua.get(e);
    if (t) {
      if (t.handle != null) {
        GetShapeTestResult(t.handle);
        t.handle = null;
      }
      ua.delete(e);
    }
  }
  class pa extends F {
    constructor(e, t) {
      var r;
      super(e, t, "textlabel");
      r = this;
      ca.init(r, {
        position: undefined,
        text: undefined,
        r: 255,
        g: 255,
        b: 255,
        a: 255,
        drawDistance: 50,
        los: false,
        font: 0,
        visible: true,
        dimension: 0
      });
    }
    get position() {
      return ca.get(this).position;
    }
    set position(e) {
      ca.get(this).position = e;
    }
    get text() {
      return ca.get(this).text;
    }
    set text(e) {
      ca.get(this).text = e;
    }
    get color() {
      const e = ca.get(this);
      return {
        r: e.r,
        g: e.g,
        b: e.b,
        a: e.a
      };
    }
    set color(e) {
      const t = ca.get(this);
      t.r = e.r ?? t.r;
      t.g = e.g ?? t.g;
      t.b = e.b ?? t.b;
      t.a = e.a ?? t.a;
    }
    get drawDistance() {
      return ca.get(this).drawDistance;
    }
    set drawDistance(e) {
      ca.get(this).drawDistance = e;
    }
    get los() {
      return ca.get(this).los;
    }
    set los(e) {
      ca.get(this).los = e;
    }
    get font() {
      return ca.get(this).font;
    }
    set font(e) {
      ca.get(this).font = e;
    }
    get visible() {
      return ca.get(this).visible;
    }
    set visible(e) {
      ca.get(this).visible = e;
    }
    get dimension() {
      return ca.get(this).dimension;
    }
    set dimension(e) {
      ca.get(this).dimension = e;
    }
    destroy() {
      ha(this.id);
      if (globalThis.mp.labels) {
        y(globalThis.mp.labels, this.id);
        de(globalThis.mp.labels, this.id);
      }
    }
  }
  const ma = o();
  function ga(e) {
    ma.init(e, {
      renderTick: null
    });
    _e(e, {
      createEvent: "ragemp:labelCreate",
      syncAllEvent: "ragemp:labelSyncAll",
      updateEvent: "ragemp:labelUpdate",
      destroyEvent: "ragemp:labelDestroy",
      create: (e, t) => function (e, t) {
        const r = new pa(k, t.id);
        const n = ca.get(r);
        n.text = t.text;
        n.position = new i(t.x, t.y, t.z);
        n.r = t.r;
        n.g = t.g;
        n.b = t.b;
        n.a = t.a;
        n.drawDistance = t.drawDistance;
        n.los = t.los;
        n.font = t.font;
        n.dimension = t.dimension ?? 0;
        n.visible = true;
        se(e, r);
        return r;
      }(e, t),
      update: (e, t, r) => {
        const n = e.atRemoteId(t);
        if (n) {
          const e = ca.get(n);
          e.text = r.text;
          e.position = new i(r.x, r.y, r.z);
          e.r = r.r;
          e.g = r.g;
          e.b = r.b;
          e.a = r.a;
          e.drawDistance = r.drawDistance;
          e.los = r.los;
          e.font = r.font;
          e.dimension = r.dimension ?? 0;
        }
      },
      destroy: (e, t) => {
        ha(t);
        const r = e.atRemoteId(t);
        if (r) {
          r.destroy();
        }
      }
    });
    (function (e) {
      const t = ma.get(e);
      t.renderTick = setTick(() => {
        if (p(e).entities.size === 0) {
          return;
        }
        const t = PlayerPedId();
        const r = GetEntityCoords(t, true);
        const n = r[0];
        const i = r[1];
        const a = r[2];
        const o = GetGameplayCamCoord();
        const s = o[0];
        const l = o[1];
        const d = o[2];
        e.forEach(e => {
          const r = ca.get(e);
          if (!r.visible) {
            if (r.los) {
              ha(e.id);
            }
            return;
          }
          if (!we(r.dimension)) {
            if (r.los) {
              ha(e.id);
            }
            return;
          }
          const o = r.position;
          if (!o) {
            return;
          }
          const c = n - o.x;
          const u = i - o.y;
          const h = a - o.z;
          const p = c * c + u * u + h * h;
          const m = r.drawDistance;
          if (p > m * m) {
            if (r.los) {
              ha(e.id);
            }
            return;
          }
          if (!IsSphereVisible(o.x, o.y, o.z, 0.25)) {
            if (r.los) {
              ha(e.id);
            }
            return;
          }
          if (r.los) {
            const r = function (e, t, r, n, i, a, o, s) {
              let l = ua.get(e);
              if (!l) {
                l = {
                  clear: true,
                  handle: null,
                  nextCheck: 0
                };
                ua.set(e, l);
              }
              if (l.handle != null) {
                const [e, t] = GetShapeTestResult(l.handle);
                if (e === 2) {
                  l.clear = !t;
                  l.handle = null;
                } else if (e === 0) {
                  l.handle = null;
                }
              }
              const d = GetGameTimer();
              if (l.handle == null && d >= l.nextCheck) {
                l.nextCheck = d + 75;
                l.handle = StartShapeTestLosProbe(t, r, n, i, a, o, 17, s, 7);
              }
              return l.clear;
            }(e.id, s, l, d, o.x, o.y, o.z, t);
            if (!r) {
              return;
            }
          }
          const g = GetScreenCoordFromWorldCoord(o.x, o.y, o.z);
          if (g?.[0]) {
            SetTextFont(r.font);
            SetTextScale(0, 0.35);
            SetTextColour(r.r, r.g, r.b, r.a);
            SetTextOutline();
            SetTextCentre(true);
            BeginTextCommandDisplayText("STRING");
            AddTextComponentSubstringPlayerName(r.text);
            EndTextCommandDisplayText(g[1], g[2]);
            SetTextCentre(false);
          }
        });
      });
      if (typeof on == "function") {
        on("onResourceStop", e => {
          if (typeof GetCurrentResourceName != "function" || e === GetCurrentResourceName()) {
            if (t.renderTick != null) {
              clearTick(t.renderTick);
              t.renderTick = null;
            }
            (function () {
              for (const e of [...ua.keys()]) {
                ha(e);
              }
            })();
          }
        });
      }
    })(e);
  }
  class Sa extends S {
    constructor() {
      super();
      ga(this);
    }
    new(e, t, r = {}) {
      const n = new pa(k, 0);
      const a = ca.get(n);
      a.text = e;
      a.position = t instanceof i ? t : new i(t.x, t.y, t.z);
      if (r.color !== undefined) {
        a.r = r.color.r ?? 255;
        a.g = r.color.g ?? 255;
        a.b = r.color.b ?? 255;
        a.a = r.color.a ?? 255;
      }
      if (r.drawDistance !== undefined) {
        a.drawDistance = r.drawDistance;
      }
      if (r.font !== undefined) {
        a.font = r.font;
      }
      if (r.los !== undefined) {
        a.los = r.los;
      }
      if (r.dimension !== undefined) {
        a.dimension = r.dimension;
      }
      le(this, n);
      return n;
    }
  }
  class Ca extends A {
    constructor() {
      var e;
      super();
      e = this;
      St.init(e, {
        renderTick: null,
        lifecycleTick: null,
        builtinTick: null,
        lastHornState: null,
        lastSirenState: null,
        lastTrailerNetId: null,
        lastAudioVehHandle: null,
        lastPedModel: null,
        lastVehicleSeat: null,
        procs: null,
        pendingProcs: null,
        procCounter: null,
        rules: null,
        dataHandlers: null,
        dataSnapshots: null,
        wasAlive: true,
        wasInVehicle: false,
        lastVehicleHandle: 0,
        lastWeaponHash: 0,
        builtinTickStarted: false,
        isTryingToEnterVehicle: false,
        tryingToEnterVehicleHandle: 0,
        isTryingToExitVehicle: false,
        trackedHealth: -1,
        trackedArmour: -1,
        wasShooting: false,
        lastWeaponAmmo: -1,
        shotWeaponHash: 0,
        playerReadyFired: false,
        playerReadyWaiting: false,
        streamedPlayers: new Set(),
        connectedPlayers: new Set(),
        talkingPlayers: new Set(),
        activeSet: new Set(),
        entityOwners: new Map(),
        insideCheckpoints: new Set(),
        waypointActive: false,
        waypointX: 0,
        waypointY: 0,
        waypointZ: 0,
        waypointReached: false
      });
      Ar(this);
    }
    add(e, t) {
      super.add(e, t);
      if (typeof e == "string") {
        (function (e, t) {
          const r = St.get(e);
          if (t === "render" && r.renderTick === null) {
            r.renderTick = setTick(() => {
              e.call("render", gr());
            });
            return;
          }
          const n = P.get(e).handlers;
          if (n.get(`__net_${t}`)) {
            Pr(t, e);
          } else {
            const r = () => {};
            n.set(`__net_${t}`, new Set([r]));
            Pr(t, e);
          }
        })(this, e);
      }
    }
    remove(e, t) {
      super.remove(e, t);
      (function (e, t) {
        const r = St.get(e);
        if (t === "render" && r.renderTick !== null) {
          const t = P.get(e).handlers.get("render");
          if (!t || t.size === 0) {
            clearTick(r.renderTick);
            r.renderTick = null;
          }
        }
      })(this, e);
    }
    callRemote(e, ...t) {
      emitNet(e, ...function (e) {
        if (!Array.isArray(e)) {
          return e;
        }
        let t = null;
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          if (n !== null && typeof n == "object") {
            t ||= e.slice();
            t[r] = U(n);
          }
        }
        return t ?? e;
      }(t));
    }
    addProc(e, t) {
      const r = St.get(this);
      r.procs ||= new Map();
      r.procs.set(e, t);
    }
    removeProc(e) {
      St.get(this).procs?.delete(e);
    }
    callRemoteProc(e, ...t) {
      const r = St.get(this);
      r.pendingProcs ||= new Map();
      r.procCounter ||= 0;
      const n = ++r.procCounter;
      return new Promise((i, a) => {
        const o = setTimeout(() => {
          if (r.pendingProcs.has(n)) {
            r.pendingProcs.delete(n);
            a(new Error(`callRemoteProc timeout (${e})`));
          }
        }, 30000);
        r.pendingProcs.set(n, {
          procName: e,
          resolve: i,
          reject: a,
          timer: o
        });
        emitNet("ragemp:proc", e, n, ...t);
      });
    }
    callRemoteUnreliable(e, ...t) {
      this.callRemote(e, ...t);
    }
    callBrowser(e, t, ...r) {
      if (e && typeof e.call == "function") {
        e.call(t, ...r);
      } else {
        SendNuiMessage(JSON.stringify({
          event: t,
          args: r
        }));
      }
    }
    addRule(e, t) {
      const r = St.get(this);
      r.rules ||= new Map();
      r.rules.set(e, t);
    }
    removeRule(e) {
      St.get(this).rules?.delete(e);
    }
    hasPendingProc(e) {
      const t = St.get(this);
      if (!t.pendingProcs) {
        return false;
      }
      if (e == null) {
        return t.pendingProcs.size > 0;
      }
      for (const r of t.pendingProcs.values()) {
        if (r.procName === e) {
          return true;
        }
      }
      return false;
    }
    cancelPendingProc(e) {
      const t = St.get(this);
      if (t.pendingProcs) {
        for (const [r, n] of t.pendingProcs) {
          if (e == null || n.procName === e) {
            if (n.timer) {
              clearTimeout(n.timer);
            }
            n.reject(new Error("Cancelled"));
            t.pendingProcs.delete(r);
          }
        }
      }
    }
    addDataHandler(e, t) {
      const r = St.get(this);
      r.dataHandlers ||= new Map();
      if (!r.dataHandlers.has(e)) {
        r.dataHandlers.set(e, []);
      }
      r.dataHandlers.get(e).push(t);
    }
  }
  function ya(e) {
    if (typeof e == "number" && Number.isFinite(e)) {
      const t = e | 0;
      if (t > 0) {
        return t;
      } else {
        return null;
      }
    }
    if (e && typeof e == "object" && "keyCode" in e) {
      return ya(e.keyCode);
    }
    const t = String(e ?? "").trim();
    if (!t) {
      return null;
    }
    if (/^0x[0-9a-f]+$/i.test(t)) {
      const e = parseInt(t, 16);
      if (Number.isFinite(e) && e > 0) {
        return e;
      } else {
        return null;
      }
    }
    const r = parseInt(t, 10);
    if (Number.isFinite(r) && r > 0) {
      return r;
    } else {
      return null;
    }
  }
  const Pa = new Set();
  function Aa(e, t) {
    if (!t[e]) {
      return;
    }
    const r = t[e];
    t[e] = false;
    (function (e, t) {
      if (!Pa.has(e)) {
        Pa.add(e);
        console.warn(`[bridge:uiFlags] cleared stuck "${e}" (was ${String(t)})`);
      }
    })(e, r);
  }
  function Ta() {
    const e = globalThis;
    if (!e.loggedin) {
      return;
    }
    Aa("in_google_auth", e);
    if (!globalThis.mp?.gui?.cursor?.visible) {
      if (!tr && er.size !== 0) {
        er.clear();
        dr();
      }
      Aa("InNpcDialog", e);
      Aa("menuOpen", e);
    }
  }
  const va = {
    17: [17, 162, 163],
    16: [16, 160, 161],
    18: [18, 164, 165]
  };
  const Ia = {
    162: 17,
    163: 17,
    160: 16,
    161: 16,
    164: 18,
    165: 18
  };
  function Ea(e) {
    return va[e] ?? [e];
  }
  function ka(e) {
    for (const t of Ea(e)) {
      if (IsRawKeyDown(t)) {
        return true;
      }
    }
    for (const t of Ea(e)) {
      if (IsDisabledRawKeyDown(t)) {
        return true;
      }
    }
    return false;
  }
  class fa {
    constructor() {
      this._bindings = new Map();
      this._keyCodeCache = new Map();
      this._pressedKeys = new Set();
      this._nuiPressed = new Set();
      this._firedUpOnDown = new Set();
      this._tick = null;
      if (typeof RegisterNuiCallbackType == "function") {
        RegisterNuiCallbackType("ragemp:__keyEvent");
        on("__cfx_nui:ragemp:__keyEvent", (e, t) => {
          var r;
          if (e && typeof e.code == "number") {
            this._handleKeyEvent((r = e.code, Ia[r] ?? r), !!e.down);
          }
          t({});
        });
      }
    }
    _getKey(e, t) {
      return `${e}_${t ? "down" : "up"}`;
    }
    _hasBinding(e, t) {
      const r = this._bindings.get(this._getKey(e, t));
      return !!r && r.size > 0;
    }
    isDown(e) {
      const t = typeof e == "number" ? e : parseInt(e, 10);
      return !!ka(t) || !!pr() && !!this._nuiPressed.has(t) || this._pressedKeys.has(t);
    }
    isUp(e) {
      return !this.isDown(e);
    }
    hasHandlers(e, t) {
      const r = ya(e);
      return r !== null && this._hasBinding(r, t);
    }
    _onKeyDown(e) {
      Ta();
      this._pressedKeys.add(e);
      this.call(e, true);
      if (!this._hasBinding(e, true) && this._hasBinding(e, false)) {
        this._firedUpOnDown.add(e);
        this.call(e, false);
      }
    }
    _onKeyUp(e) {
      this._pressedKeys.delete(e);
      if (this._firedUpOnDown.has(e)) {
        this._firedUpOnDown.delete(e);
      } else {
        this.call(e, false);
      }
    }
    _handleKeyEvent(e, t) {
      if (t) {
        if (pr()) {
          this._nuiPressed.add(e);
        }
      } else {
        this._nuiPressed.delete(e);
      }
      if (!pr()) {
        return;
      }
      const r = this._pressedKeys.has(e);
      if (t && !r) {
        this._onKeyDown(e);
      } else if (!t && r) {
        this._onKeyUp(e);
      }
    }
    call(e, t) {
      const r = this._bindings.get(this._getKey(e, t));
      if (r) {
        for (const e of r) {
          try {
            e();
          } catch (e) {}
        }
      }
    }
    bind(e, t, r) {
      const n = ya(e);
      if (n === null) {
        console.warn("[bridge] mp.keys.bind ignored invalid keyCode:", e);
        return;
      }
      const i = this._getKey(n, t);
      if (!this._bindings.has(i)) {
        this._bindings.set(i, new Set());
        this._keyCodeCache.set(i, n);
      }
      this._bindings.get(i).add(r);
      this._ensureTick();
    }
    unbind(e, t, r) {
      const n = ya(e);
      if (n === null) {
        return;
      }
      const i = this._getKey(n, t);
      const a = this._bindings.get(i);
      if (a) {
        if (r) {
          a.delete(r);
          if (a.size === 0) {
            this._bindings.delete(i);
            this._keyCodeCache.delete(i);
          }
        } else {
          this._bindings.delete(i);
          this._keyCodeCache.delete(i);
        }
        if (this._bindings.size === 0) {
          this._cleanupTick();
        }
      }
    }
    _readKeyDown(e) {
      return e === 27 && !!globalThis.chatActive && !!ka(27) || ka(e) || pr() && this._nuiPressed.has(e);
    }
    _ensureTick() {
      if (this._tick === null) {
        this._tick = setTick(() => {
          if (!pr() && this._nuiPressed.size) {
            this._nuiPressed.clear();
          }
          const e = new Set();
          for (const t of this._bindings.keys()) {
            const r = this._keyCodeCache.get(t);
            if (e.has(r)) {
              continue;
            }
            e.add(r);
            const n = this._readKeyDown(r);
            const i = this._pressedKeys.has(r);
            if (n && !i) {
              this._onKeyDown(r);
            } else if (!n && i) {
              this._onKeyUp(r);
            }
          }
        });
      }
    }
    _cleanupTick() {
      if (this._tick !== null) {
        clearTick(this._tick);
        this._tick = null;
      }
    }
  }
  const Da = new Map();
  let Fa = 0;
  const Na = new Map();
  let ba = false;
  class xa {
    constructor() {
      this.chat = new Ba();
      this.cursor = new Ra();
    }
    execute(e) {
      if (!Hi(e)) {
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:exec",
          code: e
        }));
      }
    }
    takeScreenshot(e, t, r, n) {
      if (typeof e != "function") {
        if (typeof e == "string") {
          this.captureScreenshot(t => {
            if (t) {
              (function (e, t) {
                Da.set(e, t);
              })(e, t);
            }
          }, t ?? 0, r ?? 85);
        }
      } else {
        this.captureScreenshot(e, t ?? 0, r ?? 85);
      }
    }
    captureScreenshot(e, t, r) {
      (function (e, t, r) {
        const n = ++Fa;
        Na.set(n, r);
        SendNuiMessage(JSON.stringify({
          type: "__ragemp:captureScreenshot",
          requestId: n,
          encoding: e,
          quality: Math.max(0, Math.min(1, t / 100))
        }));
        setTimeout(() => {
          if (Na.has(n)) {
            Na.delete(n);
            r(null);
          }
        }, 10000);
      })(["jpg", "png", "jpg"][t] ?? "jpg", r, e);
    }
  }
  class Ba {
    constructor() {
      this._active = true;
      this._visible = true;
      this._colors = true;
      this._safeMode = false;
    }
    activate(e) {
      this._active = e;
      emit("chat:toggleActive", e);
      _i("chat:activate", e);
    }
    get active() {
      return this._active;
    }
    get colors() {
      return this._colors;
    }
    set colors(e) {
      this._colors = e;
    }
    get safeMode() {
      return this._safeMode;
    }
    set safeMode(e) {
      this._safeMode = e;
    }
    push(e) {
      const t = String(e ?? "");
      const r = this._colors ? t : bi(t, false);
      emit("chat:addMessage", {
        args: [bi(t, this._colors)]
      });
      Oi(r);
    }
    show(e) {
      this._visible = e;
      emit("chat:toggleVisibility", e);
      _i("chat:show", e);
    }
    clear() {
      emit("chat:clear");
      _i("chat:clear");
    }
  }
  class Ra {
    constructor() {
      this._visible = false;
      this._freeze = false;
    }
    get visible() {
      return this._visible;
    }
    set visible(e) {
      this.show(true, !!e);
    }
    show(e, t) {
      this._visible = !!t;
      this._freeze = !!e;
      ur(this._visible, this._freeze);
    }
    get position() {
      if (typeof GetNuiCursorPosition == "function") {
        const [e, t] = GetNuiCursorPosition();
        return [e ?? 0, t ?? 0];
      }
      return [0, 0];
    }
  }
  class Ga {
    constructor() {
      this._verbosity = 0;
    }
    get verbosity() {
      return this._verbosity;
    }
    set verbosity(e) {
      this._verbosity = e;
    }
    logInfo(...e) {
      if (this._verbosity >= 0) {
        console.log("[INFO]", ...e);
      }
    }
    logWarning(...e) {
      if (this._verbosity >= 0) {
        console.warn("[WARNING]", ...e);
      }
    }
    logError(...e) {
      console.error("[ERROR]", ...e);
    }
    logFatal(...e) {
      console.error("[FATAL]", ...e);
    }
    clear() {}
  }
  class Ma {
    update(e, t) {
      const r = [e, t].filter(e => e != null && e !== "");
      SetRichPresence(r.join(" - "));
    }
    requestOAuth2(e) {
      return Promise.reject(new Error("Discord OAuth2 not available in FiveM"));
    }
  }
  class Va {
    testPointToPoint(e, t, r, n, i) {
      return Gt(e, t, r, n, i);
    }
    testCapsule(e, t, r, n, i, a) {
      return function (e, t, r, n, i, a = 7) {
        const o = Bt(i);
        const s = xt(n);
        const l = GetFrameCount();
        if (l !== wt) {
          wt = l;
          Vt.clear();
        }
        const d = `${r}|${o}|${s}`;
        const c = Vt.get(d) ?? 0;
        Vt.set(d, c + 1);
        const u = `${d}|${c}`;
        const h = StartShapeTestCapsule(Ft(e), Nt(e), bt(e), Ft(t), Nt(t), bt(t), r, o, s, a);
        const p = Mt.get(u);
        Mt.set(u, h);
        if (p !== undefined) {
          const [e, t, r, n, i] = GetShapeTestResult(p);
          if (e === 2) {
            return Rt(!!t, r, n, i);
          }
        }
        const [m, g, S, C, y] = GetShapeTestResult(h);
        if (m === 2) {
          return Rt(!!g, S, C, y);
        }
      }(e, t, r, n, i, a);
    }
  }
  function wa(e) {
    const t = MumbleGetVoiceChannelFromServerId(e);
    if (t !== -1) {
      return t;
    } else {
      return null;
    }
  }
  function _a(e) {
    if (typeof e == "number") {
      if (e > 0) {
        return e;
      } else {
        return null;
      }
    }
    if (e == null) {
      return null;
    }
    const t = he(e);
    if (t > 0) {
      return t;
    } else {
      return null;
    }
  }
  class Oa {
    constructor() {
      this._enabled = true;
      this._muted = false;
      this._listenChannels = new Set();
      this._talkTargetServerIds = new Set();
    }
    get connected() {
      return MumbleIsConnected();
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      this._enabled = !!e;
      NetworkSetVoiceActive(this._enabled);
    }
    get muted() {
      return this._muted;
    }
    set muted(e) {
      this._muted = !!e;
    }
    cleanupAndReload(e, t, r) {
      NetworkSetVoiceActive(true);
    }
    get proximity() {
      return MumbleGetTalkerProximity();
    }
    set proximity(e) {
      MumbleSetTalkerProximity(e);
    }
    listenTo(e) {
      const t = _a(e);
      if (t != null) {
        this._talkTargetServerIds.add(t);
      }
    }
    stopListenTo(e) {
      const t = _a(e);
      if (t != null) {
        this._talkTargetServerIds.delete(t);
      }
    }
    stopListenToAll() {
      this._talkTargetServerIds.clear();
    }
    isTalking(e) {
      const t = _a(e);
      if (t == null) {
        return NetworkIsPlayerTalking(PlayerId());
      } else {
        return MumbleIsPlayerTalking(GetPlayerFromServerId(t));
      }
    }
    setChannel(e) {
      MumbleSetVoiceChannel(e);
    }
    setAudioInputDistance(e) {
      MumbleSetAudioInputDistance(e);
    }
    setAudioOutputDistance(e) {
      MumbleSetAudioOutputDistance(e);
    }
    setAudioInputIntent(e) {
      MumbleSetAudioInputIntent(GetHashKey(e) >>> 0);
    }
    joinOwnChannel() {
      const e = GetPlayerServerId(PlayerId());
      MumbleSetVoiceChannel(e);
    }
    get inOwnChannel() {
      const e = GetPlayerServerId(PlayerId());
      return MumbleGetVoiceChannelFromServerId(e) === e;
    }
    addChannelListen(e) {
      const t = wa(e);
      return t != null && !this._listenChannels.has(t) && !!MumbleDoesChannelExist(t) && (MumbleAddVoiceChannelListen(t), this._listenChannels.add(t), true);
    }
    removeChannelListen(e) {
      const t = wa(e);
      if (t != null && this._listenChannels.has(t)) {
        try {
          MumbleRemoveVoiceChannelListen(t);
        } catch (e) {}
        this._listenChannels.delete(t);
      }
    }
    syncChannelListens(e) {
      const t = new Set();
      for (const r of e) {
        const e = wa(r);
        if (e != null) {
          t.add(e);
        }
      }
      for (const e of this._listenChannels) {
        if (!t.has(e)) {
          MumbleRemoveVoiceChannelListen(e);
          this._listenChannels.delete(e);
        }
      }
      for (const e of t) {
        if (!this._listenChannels.has(e) && MumbleDoesChannelExist(e)) {
          MumbleAddVoiceChannelListen(e);
          this._listenChannels.add(e);
        }
      }
    }
    applyTalkTarget(e) {
      MumbleClearVoiceTargetChannels(1);
      MumbleClearVoiceTargetPlayers(1);
      const t = GetPlayerServerId(PlayerId());
      const r = wa(t) ?? t;
      MumbleAddVoiceTargetChannel(1, r);
      const n = new Set(this._talkTargetServerIds);
      if (e) {
        for (const t of e) {
          if (t > 0) {
            n.add(t);
          }
        }
      }
      for (const e of n) {
        const t = wa(e);
        if (t != null) {
          MumbleAddVoiceTargetChannel(1, t);
        }
      }
      MumbleSetVoiceTarget(1);
    }
    useDefaultTarget() {
      this.applyTalkTarget();
    }
    useMuteTarget() {
      MumbleClearVoiceTargetChannels(2);
      MumbleClearVoiceTargetPlayers(2);
      MumbleSetVoiceTarget(2);
    }
    useRadioTarget() {
      this.applyTalkTarget();
    }
    setPlayerVolume(e, t) {
      const r = _a(e);
      if (r != null) {
        MumbleSetVolumeOverrideByServerId(r, t);
      }
    }
    clearPlayerVolume(e) {
      const t = _a(e);
      if (t != null) {
        MumbleSetVolumeOverrideByServerId(t, -1);
      }
    }
  }
  class Ha {
    get name() {
      return globalThis.mp?.players?.local?.name ?? "";
    }
    get socialClub() {
      return "";
    }
    get rgscId() {
      return "";
    }
    get serial() {
      return "";
    }
  }
  class La {
    get version() {
      return GetGameBuildNumber();
    }
    get resourceName() {
      return GetCurrentResourceName();
    }
    notify(e) {
      SetNotificationTextEntry("STRING");
      AddTextComponentString(String(e ?? ""));
      DrawNotification(false, false);
    }
    get isFocused() {
      return typeof IsWindowFocused != "function" || IsWindowFocused();
    }
  }
  function Wa(e) {
    if (e == null || typeof e != "object") {
      return e;
    }
    const t = e;
    if (typeof t.x == "number" && typeof t.y == "number" && typeof t.z == "number") {
      return e;
    } else if (typeof t.handle == "number") {
      return t.handle;
    } else if (typeof t.ped == "number") {
      return t.ped;
    } else {
      return e;
    }
  }
  function Ua(e) {
    return e.map(Wa);
  }
  function za(e) {
    return new i(e[0] ?? 0, e[1] ?? 0, e[2] ?? 0);
  }
  function ja() {
    const e = new Map();
    return new Proxy({}, {
      get(t, r) {
        if (typeof r == "string") {
          if (e.has(r)) {
            return e.get(r);
          }
          if (r.startsWith("_0x") || r.startsWith("_0X")) {
            const t = r.slice(1);
            const n = (...e) => Citizen.invokeNative(t, ...Ua(e));
            e.set(r, n);
            return n;
          }
        }
      }
    });
  }
  async function qa(e, t, r, n) {
    e(r);
    const i = GetGameTimer();
    while (!t(r)) {
      if (GetGameTimer() - i > n) {
        return false;
      }
      await new Promise(e => setTimeout(e, 0));
    }
    return true;
  }
  class Ka {
    constructor() {
      this._entries = new Map();
    }
    set(e, t) {
      const r = String(e);
      this._entries.set(r, t);
      AddTextEntry(r, t);
    }
    get(e) {
      return GetLabelText(String(e));
    }
    getDefault(e) {
      return GetLabelText(String(e));
    }
    reset() {
      for (const [e] of this._entries) {
        AddTextEntry(e, "");
      }
      this._entries.clear();
    }
  }
  class Ya {
    constructor() {
      this.unk = ja();
    }
    isAnEntity(e) {
      return IsAnEntity(e);
    }
    isAn(e) {
      return IsAnEntity(e);
    }
    doesExist(e) {
      return DoesEntityExist(e);
    }
    doesBelongToThisScript(e, t) {
      return DoesEntityBelongToThisScript(e, t);
    }
    doesHaveDrawable(e) {
      return DoesEntityHaveDrawable(e);
    }
    doesHavePhysics(e) {
      return DoesEntityHavePhysics(e);
    }
    getType(e) {
      return GetEntityType(e);
    }
    getModel(e) {
      return GetEntityModel(e);
    }
    getPopulationType(e) {
      return GetEntityPopulationType(e);
    }
    isAPed(e) {
      return IsEntityAPed(e);
    }
    isAMissionEntity(e) {
      return IsEntityAMissionEntity(e);
    }
    isAVehicle(e) {
      return IsEntityAVehicle(e);
    }
    isAnObject(e) {
      return IsEntityAnObject(e);
    }
    getObjectIndexFromIndex(e) {
      return GetObjectIndexFromEntityIndex(e);
    }
    getPedIndexFromIndex(e) {
      return GetPedIndexFromEntityIndex(e);
    }
    getVehicleIndexFromIndex(e) {
      return GetVehicleIndexFromEntityIndex(e);
    }
    getCoords(e, t) {
      return za(GetEntityCoords(e, t ?? true));
    }
    setCoords(e, t, r, n, i, a, o, s) {
      SetEntityCoords(e, t, r, n, i ?? false, a ?? false, o ?? false, s ?? true);
    }
    setCoordsNoOffset(e, t, r, n, i, a, o) {
      SetEntityCoordsNoOffset(e, t, r, n, i ?? true, a ?? true, o ?? true);
    }
    getHeading(e) {
      return GetEntityHeading(e);
    }
    setHeading(e, t) {
      SetEntityHeading(e, t);
    }
    getRotation(e, t) {
      return za(GetEntityRotation(e, t ?? 2));
    }
    setRotation(e, t, r, n, i, a) {
      SetEntityRotation(e, t, r, n, i ?? 2, a ?? true);
    }
    getRotationVelocity(e) {
      return za(GetEntityRotationVelocity(e));
    }
    getPitch(e) {
      return GetEntityPitch(e);
    }
    getRoll(e) {
      return GetEntityRoll(e);
    }
    getUprightValue(e) {
      return GetEntityUprightValue(e);
    }
    getQuaternion(e) {
      const t = GetEntityQuaternion(e);
      return {
        x: t[0],
        y: t[1],
        z: t[2],
        w: t[3]
      };
    }
    setQuaternion(e, t, r, n, i) {
      SetEntityQuaternion(e, t, r, n, i);
    }
    getMatrix(e) {
      const t = GetEntityMatrix(e);
      return {
        forwardVector: za(t[0]),
        rightVector: za(t[1]),
        upVector: za(t[2]),
        position: za(t[3])
      };
    }
    getForwardVector(e) {
      return za(GetEntityForwardVector(e));
    }
    getForwardX(e) {
      return GetEntityForwardX(e);
    }
    getForwardY(e) {
      return GetEntityForwardY(e);
    }
    getOffsetFromInWorldCoords(e, t, r, n) {
      return za(GetOffsetFromEntityInWorldCoords(e, t, r, n));
    }
    getOffsetFromGivenWorldCoords(e, t, r, n) {
      return za(GetOffsetFromEntityGivenWorldCoords(e, t, r, n));
    }
    getHeight(e, t, r, n, i, a) {
      return GetEntityHeight(e, t, r, n, !!i, !!a);
    }
    getHeightAboveGround(e) {
      return GetEntityHeightAboveGround(e);
    }
    getSubmergedLevel(e) {
      return GetEntitySubmergedLevel(e);
    }
    getVelocity(e) {
      return za(GetEntityVelocity(e));
    }
    setVelocity(e, t, r, n) {
      SetEntityVelocity(e, t, r, n);
    }
    setAngularVelocity(e, t, r, n) {
      SetEntityAngularVelocity(e, t, r, n);
    }
    getSpeed(e) {
      return GetEntitySpeed(e);
    }
    getSpeedVector(e, t) {
      return za(GetEntitySpeedVector(e, !!t));
    }
    setMaxSpeed(e, t) {
      SetEntityMaxSpeed(e, t);
    }
    getHealth(e) {
      const t = GetEntityHealth(e);
      if (IsEntityAPed(e)) {
        return _(t);
      } else {
        return t;
      }
    }
    setHealth(e, t) {
      SetEntityHealth(e, IsEntityAPed(e) ? O(t) : t);
    }
    getMaxHealth(e) {
      const t = GetEntityMaxHealth(e);
      if (IsEntityAPed(e)) {
        return _(t);
      } else {
        return t;
      }
    }
    setMaxHealth(e, t) {
      SetEntityMaxHealth(e, IsEntityAPed(e) ? O(t) : t);
    }
    setCanBeDamaged(e, t) {
      SetEntityCanBeDamaged(e, !!t);
    }
    getCanBeDamaged(e) {
      return GetEntityCanBeDamaged(e);
    }
    setCanBeDamagedByRelationshipGroup(e, t, r) {
      SetEntityCanBeDamagedByRelationshipGroup(e, !!t, r);
    }
    setCanBeTargetedWithoutLos(e, t) {
      SetEntityCanBeTargetedWithoutLos(e, !!t);
    }
    setOnlyDamagedByPlayer(e, t) {
      SetEntityOnlyDamagedByPlayer(e, !!t);
    }
    setOnlyDamagedByRelationshipGroup(e, t, r) {
      SetEntityOnlyDamagedByRelationshipGroup(e, !!t, r);
    }
    setProofs(e, t, r, n, i, a, o, s, l) {
      SetEntityProofs(e, !!t, !!r, !!n, !!i, !!a, o ?? false, s ?? false, l ?? false);
    }
    getProofs(e) {
      const t = GetEntityProofs(e);
      return {
        bulletProof: !!t[1],
        fireProof: !!t[2],
        explosionProof: !!t[3],
        collisionProof: !!t[4],
        meleeProof: !!t[5],
        steamProof: !!t[6],
        p7: !!t[7],
        drownProof: !!t[8],
        result: !!t[0]
      };
    }
    setInvincible(e, t) {
      SetEntityInvincible(e, !!t);
    }
    setIsTargetPriority(e, t, r) {
      SetEntityIsTargetPriority(e, !!t, r);
    }
    hasBeenDamagedByAnyObject(e) {
      return HasEntityBeenDamagedByAnyObject(e);
    }
    hasBeenDamagedByAnyPed(e) {
      return HasEntityBeenDamagedByAnyPed(e);
    }
    hasBeenDamagedByAnyVehicle(e) {
      return HasEntityBeenDamagedByAnyVehicle(e);
    }
    hasBeenDamagedByEntity(e, t, r) {
      return HasEntityBeenDamagedByEntity(e, t, r ?? true);
    }
    clearLastDamageEntity(e) {
      ClearEntityLastDamageEntity(e);
    }
    getLastMaterialHitBy(e) {
      return GetLastMaterialHitByEntity(e);
    }
    getCollisionNormalOfLastHitFor(e) {
      return za(GetCollisionNormalOfLastHitForEntity(e));
    }
    hasClearLosToEntity(e, t, r) {
      return HasEntityClearLosToEntity(e, t, r ?? 17);
    }
    hasClearLosToEntityInFront(e, t) {
      return HasEntityClearLosToEntityInFront(e, t);
    }
    hasCollidedWithAnything(e) {
      return HasEntityCollidedWithAnything(e);
    }
    hasCollisionLoadedAround(e) {
      return HasCollisionLoadedAroundEntity(e);
    }
    setCollision(e, t, r) {
      SetEntityCollision(e, !!t, r ?? true);
    }
    getCollisionDisabled(e) {
      return GetEntityCollisionDisabled(e);
    }
    setCompletelyDisableCollision(e, t, r) {
      SetEntityCompletelyDisableCollision(e, !!t, !!r);
    }
    setNoCollisionEntity(e, t, r) {
      SetEntityNoCollisionEntity(e, t, !!r);
    }
    setRecordsCollisions(e, t) {
      SetEntityRecordsCollisions(e, !!t);
    }
    isWaitingForWorldCollision(e) {
      return IsEntityWaitingForWorldCollision(e);
    }
    playAnim(e, t, r, n, i, a, o, s, l) {
      return PlayEntityAnim(e, t, r, n, !!i, !!a, !!o, s ?? 0, l ?? 0);
    }
    stopAnim(e, t, r, n) {
      return StopEntityAnim(e, t, r, n);
    }
    isPlayingAnim(e, t, r, n) {
      return IsEntityPlayingAnim(e, t, r, n ?? 3);
    }
    hasAnimFinished(e, t, r, n) {
      return HasEntityAnimFinished(e, t, r, n ?? 3);
    }
    hasAnimEventFired(e, t) {
      return HasAnimEventFired(e, t);
    }
    findAnimEventPhase(e, t, r) {
      return FindAnimEventPhase(e, t, r);
    }
    getAnimCurrentTime(e, t, r) {
      return GetEntityAnimCurrentTime(e, t, r);
    }
    getAnimTotalTime(e, t, r) {
      return GetEntityAnimTotalTime(e, t, r);
    }
    getAnimDuration(e, t) {
      return GetAnimDuration(e, t);
    }
    getEntityAnimDuration(e, t) {
      return GetAnimDuration(e, t);
    }
    setAnimCurrentTime(e, t, r, n) {
      SetEntityAnimCurrentTime(e, t, r, n);
    }
    setAnimSpeed(e, t, r, n) {
      SetEntityAnimSpeed(e, t, r, n);
    }
    attachToEntity(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      AttachEntityToEntity(e, t, r, n, i, a, o, s, l, !!d, !!c, !!u, !!h, p ?? 2, !!m);
    }
    attachBoneToEntityBone(e, t, r, n, i, a) {
      AttachEntityBoneToEntityBone(e, t, r, n, !!i, !!a);
    }
    processAttachments(e) {
      ProcessEntityAttachments(e);
    }
    isAttached(e) {
      return IsEntityAttached(e);
    }
    isAttachedToAnyObject(e) {
      return IsEntityAttachedToAnyObject(e);
    }
    isAttachedToAnyPed(e) {
      return IsEntityAttachedToAnyPed(e);
    }
    isAttachedToAnyVehicle(e) {
      return IsEntityAttachedToAnyVehicle(e);
    }
    isAttachedToEntity(e, t) {
      return IsEntityAttachedToEntity(e, t);
    }
    detach(e, t, r) {
      DetachEntity(e, t ?? true, r ?? true);
    }
    getAttachedTo(e) {
      return GetEntityAttachedTo(e);
    }
    getBoneIndexByName(e, t) {
      return GetEntityBoneIndexByName(e, t);
    }
    getBoneRotation(e, t) {
      return za(GetEntityBoneRotation(e, t));
    }
    getBoneCount(e) {
      return GetEntityBoneCount(e);
    }
    getWorldPositionOfBone(e, t) {
      return za(GetWorldPositionOfEntityBone(e, t));
    }
    getBonePosition2(e, t) {
      return za(GetWorldPositionOfEntityBone(e, t));
    }
    isDead(e) {
      return IsEntityDead(e);
    }
    isInAir(e) {
      return IsEntityInAir(e);
    }
    isInWater(e) {
      return IsEntityInWater(e);
    }
    isAtEntity(e, t, r, n, i, a, o, s) {
      return IsEntityAtEntity(e, t, r, n, i, !!a, !!o, s);
    }
    isInArea(e, t, r, n, i, a, o, s, l, d) {
      return IsEntityInArea(e, t, r, n, i, a, o, !!s, !!l, d);
    }
    isInZone(e, t) {
      return IsEntityInZone(e, t);
    }
    isOnScreen(e) {
      return IsEntityOnScreen(e);
    }
    isStatic(e) {
      return IsEntityStatic(e);
    }
    isTouchingEntity(e, t) {
      return IsEntityTouchingEntity(e, t);
    }
    isTouchingModel(e, t) {
      return IsEntityTouchingModel(e, t);
    }
    isUpright(e, t) {
      return IsEntityUpright(e, t ?? 30);
    }
    isUpsidedown(e) {
      return IsEntityUpsidedown(e);
    }
    isVisible(e) {
      return IsEntityVisible(e);
    }
    isVisibleToScript(e) {
      return IsEntityVisibleToScript(e);
    }
    isOccluded(e) {
      return IsEntityOccluded(e);
    }
    wouldBeOccluded(e, t, r, n, i) {
      return WouldEntityBeOccluded(e, t, r, n, !!i);
    }
    wouldEntityBeOccluded(e, t, r, n, i) {
      return WouldEntityBeOccluded(e, t, r, n, !!i);
    }
    getScript(e) {
      const t = GetEntityScript(e);
      if (Array.isArray(t)) {
        return t[0];
      } else {
        return t;
      }
    }
    getNearestPlayerTo(e) {
      return GetNearestPlayerToEntity(e);
    }
    getNearestPlayerToOnTeam(e, t) {
      return GetNearestPlayerToEntityOnTeam(e, t);
    }
    forceAiAndAnimationUpdate(e) {
      ForceEntityAiAndAnimationUpdate(e);
    }
    setAsMissionEntity(e, t, r) {
      SetEntityAsMissionEntity(e, t ?? true, r ?? true);
    }
    setAsNoLongerNeeded(e) {
      return SetEntityAsNoLongerNeeded(e);
    }
    setPedAsNoLongerNeeded(e) {
      return SetPedAsNoLongerNeeded(e);
    }
    setVehicleAsNoLongerNeeded(e) {
      return SetVehicleAsNoLongerNeeded(e);
    }
    setObjectAsNoLongerNeeded(e) {
      return SetObjectAsNoLongerNeeded(e);
    }
    delete(e) {
      return DeleteEntity(e);
    }
    setDynamic(e, t) {
      SetEntityDynamic(e, !!t);
    }
    setLights(e, t) {
      SetEntityLights(e, !!t);
    }
    setLoadCollisionFlag(e, t) {
      SetEntityLoadCollisionFlag(e, !!t);
    }
    setAlpha(e, t, r) {
      SetEntityAlpha(e, t, r ?? false);
    }
    getAlpha(e) {
      return GetEntityAlpha(e);
    }
    resetAlpha(e) {
      ResetEntityAlpha(e);
    }
    setAlwaysPrerender(e, t) {
      SetEntityAlwaysPrerender(e, !!t);
    }
    setRenderScorched(e, t) {
      SetEntityRenderScorched(e, !!t);
    }
    setTrafficlightOverride(e, t) {
      SetEntityTrafficlightOverride(e, t);
    }
    setMotionBlur(e, t) {
      SetEntityMotionBlur(e, !!t);
    }
    setCanAutoVaultOn(e, t) {
      SetCanAutoVaultOnEntity(e, !!t);
    }
    setCanClimbOn(e, t) {
      SetCanClimbOnEntity(e, !!t);
    }
    setLodDist(e, t) {
      SetEntityLodDist(e, t);
    }
    getLodDist(e) {
      return GetEntityLodDist(e);
    }
    setHasGravity(e, t) {
      SetEntityHasGravity(e, !!t);
    }
    freezePosition(e, t) {
      FreezeEntityPosition(e, !!t);
    }
    applyForceToCenterOfMass(e, t, r, n, i, a, o, s, l) {
      ApplyForceToEntity(e, t, r, n, i, 0, 0, 0, 0, !!o, !!s, l ?? false, false, false);
    }
    setVisible(e, t, r) {
      SetEntityVisible(e, !!t, r ?? false);
    }
    createModelSwap(e, t, r, n, i, a, o) {
      CreateModelSwap(e, t, r, n, i, a, !!o);
    }
    removeModelSwap(e, t, r, n, i, a, o) {
      RemoveModelSwap(e, t, r, n, i, a, !!o);
    }
    createModelHide(e, t, r, n, i, a) {
      CreateModelHide(e, t, r, n, i, a ?? false);
    }
    createModelHideExcludingScriptObjects(e, t, r, n, i, a) {
      CreateModelHideExcludingScriptObjects(e, t, r, n, i, a ?? false);
    }
    removeModelHide(e, t, r, n, i, a) {
      if (typeof RemoveModelHide == "function") {
        RemoveModelHide(e, t, r, n, i, a ?? false);
      }
    }
    createForcedObject(e, t, r, n, i, a) {
      CreateForcedObject(e, t, r, n, i, !!a);
    }
    removeForcedObject(e, t, r, n, i) {
      RemoveForcedObject(e, t, r, n, i);
    }
    stopSynchronizedMapEntityAnim(e, t, r, n, i, a) {
      return StopSynchronizedMapEntityAnim(e, t, r, n, i, a);
    }
    applyForceTo(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      ApplyForceToEntity(e, t, r, n, i, a ?? 0, o ?? 0, s ?? 0, l ?? 0, !!d, !!c, !!u, !!h, !!p);
    }
    attachBoneToEntityBonePhysically(e, t, r, n, i, a) {
      AttachEntityBoneToEntityBonePhysically(e, t, r, n, !!i, !!a);
    }
    attachToEntityPhysically(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y) {
      AttachEntityToEntityPhysically(e, t, r, n, i, a, o, s, l, d, c, u, h, p, !!m, !!g, !!S, !!C, y ?? 2);
    }
    enableUnk(e) {
      EnableEntityUnk(e);
    }
    getBoneRotationLocal(e, t) {
      return za(GetEntityBoneRotationLocal(e, t));
    }
    getPhysicsHeading(e) {
      return GetEntityPhysicsHeading(e);
    }
    getPickup(e, t) {
      return GetEntityPickup(e, t);
    }
    hasClearLosToEntity2(e, t, r) {
      return Number(HasEntityClearLosToEntity(e, t, r));
    }
    isAtCoord(e, t, r, n, i, a, o, s, l, d) {
      return IsEntityAtCoord(e, t, r, n, i, a, o, !!s, !!l, d);
    }
    isInAngledArea(e, t, r, n, i, a, o, s, l, d, c) {
      return IsEntityInAngledArea(e, t, r, n, i, a, o, s, !!l, !!d, c);
    }
    playSynchronizedAnim(e, t, r, n, i, a, o, s) {
      return PlaySynchronizedEntityAnim(e, t, r, n, i, a, o, s);
    }
    playSynchronizedMapAnim(e, t, r, n, i, a, o, s, l, d, c, u) {
      const h = PlaySynchronizedMapEntityAnim(e, t, r, n, i, a, o, s, l, d, c, u);
      return {
        p6: h[1],
        p7: h[2],
        result: !!h[0]
      };
    }
    setCleanupByEngine(e, t) {
      SetEntityCleanupByEngine(e, !!t);
    }
    setCoordsWithoutPlantsReset(e, t, r, n, i, a, o, s) {
      SetEntityCoordsWithoutPlantsReset(e, t, r, n, !!i, !!a, !!o, !!s);
    }
    setDecalsDisabled(e, t) {
      SetEntityDecalsDisabled(e, !!t);
    }
    stopSynchronizedAnim(e, t, r) {
      return StopSynchronizedEntityAnim(e, t, !!r);
    }
    stopSynchronizedMapAnim(e, t, r, n, i, a) {
      return StopSynchronizedMapEntityAnim(e, t, r, n, i, a);
    }
    _0x694E00132F2823ED(...e) {
      return Citizen.invokeNative("0x694E00132F2823ED", ...e);
    }
    _0x352E2B5CF420BF3B(...e) {
      return Citizen.invokeNative("0x352E2B5CF420BF3B", ...e);
    }
    _0xC34BC448DA29F5E9(...e) {
      return Citizen.invokeNative("0xC34BC448DA29F5E9", ...e);
    }
    _0xE66377CDDADA4810(...e) {
      return Citizen.invokeNative("0xE66377CDDADA4810", ...e);
    }
    _0x490861B88F4FD846(...e) {
      return Citizen.invokeNative("0x490861B88F4FD846", ...e);
    }
    _0xCEA7C8E1B48FF68C(...e) {
      return Citizen.invokeNative("0xCEA7C8E1B48FF68C", ...e);
    }
    _0x5C3B791D580E0BC2(...e) {
      return Citizen.invokeNative("0x5C3B791D580E0BC2", ...e);
    }
    _0x78E8E3A640178255(...e) {
      return Citizen.invokeNative("0x78E8E3A640178255", ...e);
    }
    _0xDC6F8601FAF2E893(...e) {
      return Citizen.invokeNative("0xDC6F8601FAF2E893", ...e);
    }
    _0x1A092BB0C3808B96(...e) {
      return Citizen.invokeNative("0x1A092BB0C3808B96", ...e);
    }
    _0xB17BC6453F6CF5AC(...e) {
      return Citizen.invokeNative("0xB17BC6453F6CF5AC", ...e);
    }
    _0x68B562E124CC0AEF(...e) {
      return Citizen.invokeNative("0x68B562E124CC0AEF", ...e);
    }
    _0x36F32DE87082343E(...e) {
      return Citizen.invokeNative("0x36F32DE87082343E", ...e);
    }
    _0xD7B80E7C3BEFC396(...e) {
      return Citizen.invokeNative("0xD7B80E7C3BEFC396", ...e);
    }
  }
  class Za {
    constructor() {
      this.unk = ja();
    }
    create(e, t, r, n, i) {
      return CreatePed(4, e, t, r, n, i, true, false);
    }
    delete(e) {
      DeletePed(e);
    }
    clone(e) {
      return ClonePed(e, false, true, true);
    }
    cloneToTarget(e, t) {
      ClonePedToTarget(e, t);
    }
    createInsideVehicle(e, t, r) {
      return CreatePedInsideVehicle(e, 4, r, t, true, false);
    }
    isInVehicle(e, t) {
      return IsPedInVehicle(e, t ?? 0, false);
    }
    isInAnyVehicle(e) {
      return IsPedInAnyVehicle(e, false);
    }
    isInModel(e, t) {
      if (!IsPedInAnyVehicle(e, false)) {
        return false;
      }
      const r = GetVehiclePedIsIn(e, false);
      return r !== 0 && GetEntityModel(r) === t;
    }
    isInjured(e) {
      return IsPedInjured(e);
    }
    isHurt(e) {
      return IsPedHurt(e);
    }
    isFatallyInjured(e) {
      return IsPedFatallyInjured(e);
    }
    isDeadOrDying(e, t) {
      return IsPedDeadOrDying(e, t);
    }
    isAimingFromCover(e) {
      return IsPedAimingFromCover(e);
    }
    isReloading(e) {
      return IsPedReloading(e);
    }
    isAPlayer(e) {
      return IsPedAPlayer(e);
    }
    isCopInArea3D(e, t, r, n, i, a) {
      return IsCopPedInArea_3d(e, t, r, n, i, a);
    }
    isCopPedInArea3d(e, t, r, n, i, a) {
      return IsCopPedInArea_3d(e, t, r, n, i, a);
    }
    isInMeleeCombat(e) {
      return IsPedInMeleeCombat(e);
    }
    isStopped(e) {
      return IsPedStopped(e);
    }
    isShootingInArea(e, t, r, n, i, a, o, s, l) {
      return IsPedShootingInArea(e, t, r, n, i, a, o, s, l);
    }
    isAnyShootingInArea(e, t, r, n, i, a, o, s) {
      return IsAnyPedShootingInArea(e, t, r, n, i, a, o, s);
    }
    isAnyPedShootingInArea(e, t, r, n, i, a, o, s) {
      return IsAnyPedShootingInArea(e, t, r, n, i, a, o, s);
    }
    isShooting(e) {
      return IsPedShooting(e);
    }
    isFacingPed(e, t, r) {
      return IsPedFacingPed(e, t, r);
    }
    isModel(e, t) {
      return IsPedModel(e, t);
    }
    isMale(e) {
      return IsPedMale(e);
    }
    isHuman(e) {
      return IsPedHuman(e);
    }
    isOnFoot(e) {
      return IsPedOnFoot(e);
    }
    isOnMount(e) {
      return IsPedOnMount(e);
    }
    isOnVehicle(e) {
      return IsPedOnVehicle(e);
    }
    isOnSpecificVehicle(e, t) {
      return IsPedOnSpecificVehicle(e, t);
    }
    isOnAnyBike(e) {
      return IsPedOnAnyBike(e);
    }
    isPlantingBomb(e) {
      return IsPedPlantingBomb(e);
    }
    isInAnyBoat(e) {
      return IsPedInAnyBoat(e);
    }
    isInAnySub(e) {
      return IsPedInAnySub(e);
    }
    isInAnyHeli(e) {
      return IsPedInAnyHeli(e);
    }
    isInAnyPlane(e) {
      return IsPedInAnyPlane(e);
    }
    isInFlyingVehicle(e) {
      return IsPedInFlyingVehicle(e);
    }
    isInAnyTaxi(e) {
      return IsPedInAnyTaxi(e);
    }
    isInAnyTrain(e) {
      return IsPedInAnyTrain(e);
    }
    isInAnyPoliceVehicle(e) {
      return IsPedInAnyPoliceVehicle(e);
    }
    isSittingInVehicle(e, t) {
      return IsPedSittingInVehicle(e, t);
    }
    isSittingInAnyVehicle(e) {
      return IsPedSittingInAnyVehicle(e);
    }
    isGettingIntoAVehicle(e) {
      return IsPedGettingIntoAVehicle(e);
    }
    isTryingToEnterALockedVehicle(e) {
      return IsPedTryingToEnterALockedVehicle(e);
    }
    isHangingOnToVehicle(e) {
      return IsPedHangingOnToVehicle(e);
    }
    isJumpingOutOfVehicle(e) {
      return IsPedJumpingOutOfVehicle(e);
    }
    isSwimming(e) {
      return IsPedSwimming(e);
    }
    isSwimmingUnderWater(e) {
      return IsPedSwimmingUnderWater(e);
    }
    isFalling(e) {
      return IsPedFalling(e);
    }
    isJumping(e) {
      return IsPedJumping(e);
    }
    isClimbing(e) {
      return IsPedClimbing(e);
    }
    isVaulting(e) {
      return IsPedVaulting(e);
    }
    isDiving(e) {
      return IsPedDiving(e);
    }
    isInParachuteFreeFall(e) {
      return IsPedInParachuteFreeFall(e);
    }
    isDucking(e) {
      return IsPedDucking(e);
    }
    isProne(e) {
      return IsPedProne(e);
    }
    isInCombat(e, t) {
      return IsPedInCombat(e, t);
    }
    canInCombatSeeTarget(e, t) {
      return CanPedInCombatSeeTarget(e, t);
    }
    isDoingDriveby(e) {
      return IsPedDoingDriveby(e);
    }
    isJacking(e) {
      return IsPedJacking(e);
    }
    isBeingJacked(e) {
      return IsPedBeingJacked(e);
    }
    isBeingStunned(e, t) {
      return IsPedBeingStunned(e, t);
    }
    isFleeing(e) {
      return IsPedFleeing(e);
    }
    isInCover(e, t) {
      return IsPedInCover(e, t);
    }
    isInCoverFacingLeft(e) {
      return IsPedInCoverFacingLeft(e);
    }
    isInHighCover(e) {
      return IsPedInHighCover(e);
    }
    isGoingIntoCover(e) {
      return IsPedGoingIntoCover(e);
    }
    isEvasiveDiving(e) {
      const t = IsPedEvasiveDiving(e);
      if (Array.isArray(t)) {
        return t[0];
      } else {
        return t;
      }
    }
    isHeadingTowardsPosition(e, t, r, n, i) {
      return IsPedHeadingTowardsPosition(e, t, r, n, i);
    }
    isTracked(e) {
      return IsPedTracked(e);
    }
    isUsingScenario(e, t) {
      return IsPedUsingScenario(e, t);
    }
    isUsingAnyScenario(e) {
      return IsPedUsingAnyScenario(e);
    }
    isPerformingMeleeAction(e) {
      return IsPedPerformingMeleeAction(e);
    }
    isPerformingStealthKill(e) {
      return IsPedPerformingStealthKill(e);
    }
    isBeingStealthKilled(e) {
      return IsPedBeingStealthKilled(e);
    }
    isRunningMeleeTask(e) {
      return IsPedRunningMeleeTask(e);
    }
    isRunningMobilePhoneTask(e) {
      return IsPedRunningMobilePhoneTask(e);
    }
    isRunningRagdollTask(e) {
      return IsPedRunningRagdollTask(e);
    }
    isHeadtrackingPed(e, t) {
      return IsPedHeadtrackingPed(e, t);
    }
    isHeadtrackingEntity(e, t) {
      return IsPedHeadtrackingEntity(e, t);
    }
    isUsingActionMode(e) {
      return IsPedUsingActionMode(e);
    }
    isAnyNearPoint(e, t, r, n) {
      return IsAnyPedNearPoint(e, t, r, n);
    }
    isAnyPedNearPoint(e, t, r, n) {
      return IsAnyPedNearPoint(e, t, r, n);
    }
    isRespondingToEvent(e, t) {
      return IsPedRespondingToEvent(e, t);
    }
    hasReceivedEvent(e, t) {
      return HasPedReceivedEvent(e, t);
    }
    canSeeHatedPed(e, t) {
      return CanPedSeeHatedPed(e, t);
    }
    setAccuracy(e, t) {
      SetPedAccuracy(e, t);
    }
    getAccuracy(e) {
      return GetPedAccuracy(e);
    }
    setFiringPattern(e, t) {
      SetPedFiringPattern(e, t);
    }
    setShootRate(e, t) {
      SetPedShootRate(e, t);
    }
    setShootsAtCoord(e, t, r, n, i) {
      SetPedShootsAtCoord(e, t, r, n, i);
    }
    setCombatFloat(e, t, r) {
      SetCombatFloat(e, t, r);
    }
    getCombatFloat(e, t) {
      return GetCombatFloat(e, t);
    }
    setCombatMovement(e, t) {
      SetPedCombatMovement(e, t);
    }
    getCombatMovement(e) {
      return GetPedCombatMovement(e);
    }
    getCombatRange(e) {
      return GetPedCombatRange(e);
    }
    explodeHead(e, t) {
      ExplodePedHead(e, t);
    }
    applyDamageTo(e, t) {
      ApplyDamageToPed(e, t, false);
    }
    addArmourTo(e, t) {
      AddArmourToPed(e, t);
    }
    setArmour(e, t) {
      SetPedArmour(e, t);
    }
    getArmour(e) {
      return GetPedArmour(e);
    }
    setSuffersCriticalHits(e, t) {
      SetPedSuffersCriticalHits(e, t);
    }
    getLastDamageBone(e) {
      const t = GetPedLastDamageBone(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    clearLastDamageBone(e) {
      ClearPedLastDamageBone(e);
    }
    setAiWeaponDamageModifier(e) {
      SetAiWeaponDamageModifier(e);
    }
    resetAiWeaponDamageModifier() {
      ResetAiWeaponDamageModifier();
    }
    setAiMeleeWeaponDamageModifier(e) {
      SetAiMeleeWeaponDamageModifier(e);
    }
    resetAiMeleeWeaponDamageModifier() {
      ResetAiMeleeWeaponDamageModifier();
    }
    getSourceOfDeath(e) {
      return GetPedSourceOfDeath(e);
    }
    getCauseOfDeath(e) {
      return GetPedCauseOfDeath(e);
    }
    getTimeOfDeath(e) {
      return GetPedTimeOfDeath(e);
    }
    registerTarget(e, t) {
      RegisterTarget(e, t);
    }
    registerHatedTargetsAround(e, t) {
      RegisterHatedTargetsAroundPed(e, t);
    }
    setCanBeTargetted(e, t) {
      SetPedCanBeTargetted(e, t);
    }
    setCanBeTargettedByTeam(e, t, r) {
      SetPedCanBeTargettedByTeam(e, t, r);
    }
    setCanBeTargettedByPlayer(e, t, r) {
      SetPedCanBeTargettedByPlayer(e, t, r);
    }
    setCanBeTargetedWithoutLos(e, t) {
      SetEntityCanBeTargetedWithoutLos(e, t);
    }
    setCanBeTargetedWhenInjured(e, t) {
      SetPedCanBeTargetedWhenInjured(e, t);
    }
    setCanBeDraggedOut(e, t) {
      SetPedCanBeDraggedOut(e, t);
    }
    setComponentVariation(e, t, r, n, i) {
      SetPedComponentVariation(e, t, r, n, i);
    }
    getDrawableVariation(e, t) {
      return GetPedDrawableVariation(e, t);
    }
    getTextureVariation(e, t) {
      return GetPedTextureVariation(e, t);
    }
    getPaletteVariation(e, t) {
      return GetPedPaletteVariation(e, t);
    }
    isComponentVariationValid(e, t, r, n) {
      return IsPedComponentVariationValid(e, t, r, n);
    }
    setRandomComponentVariation(e, t) {
      SetPedRandomComponentVariation(e, t);
    }
    setRandomProps(e) {
      SetPedRandomProps(e);
    }
    setDefaultComponentVariation(e) {
      SetPedDefaultComponentVariation(e);
    }
    setBlendFromParents(e, t, r, n, i) {
      SetPedBlendFromParents(e, t, r, n, i);
    }
    getNumberOfDrawableVariations(e, t) {
      return GetNumberOfPedDrawableVariations(e, t);
    }
    getNumberOfTextureVariations(e, t, r) {
      return GetNumberOfPedTextureVariations(e, t, r);
    }
    getNumberOfPropDrawableVariations(e, t) {
      return GetNumberOfPedPropDrawableVariations(e, t);
    }
    getNumberOfPropTextureVariations(e, t, r) {
      return GetNumberOfPedPropTextureVariations(e, t, r);
    }
    setHeadBlendData(e, t, r, n, i, a, o, s) {
      SetPedHeadBlendData(e, t, r, n ?? 0, t, r, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? false);
    }
    updateHeadBlendData(e, t, r, n) {
      UpdatePedHeadBlendData(e, t, r, n);
    }
    hasHeadBlendFinished(e) {
      return HasPedHeadBlendFinished(e);
    }
    finalizeHeadBlend(e) {
      FinalizeHeadBlend(e);
    }
    setHeadBlendPaletteColor(e, t, r, n, i) {
      SetHeadBlendPaletteColor(e, t, r, n, i);
    }
    disableHeadBlendPaletteColor(e) {
      DisableHeadBlendPaletteColor(e);
    }
    getHeadBlendFirstIndex(e) {
      return GetPedHeadBlendFirstIndex(e);
    }
    getHeadBlendNumHeads(e) {
      return GetPedHeadBlendNumHeads(e);
    }
    setHairColor(e, t, r) {
      SetPedHairColor(e, t, r);
    }
    setHeadOverlay(e, t, r, n) {
      SetPedHeadOverlay(e, t, r, n);
    }
    getHeadOverlayNum(e) {
      return GetPedHeadOverlayNum(e);
    }
    setHeadOverlayColor(e, t, r, n, i) {
      SetPedHeadOverlayColor(e, t, r, n, i);
    }
    setEyeColor(e, t) {
      SetPedEyeColor(e, t);
    }
    setFaceFeature(e, t, r) {
      SetPedFaceFeature(e, t, r);
    }
    setSweat(e, t) {
      SetPedSweat(e, t);
    }
    clearDecorations(e) {
      ClearPedDecorations(e);
    }
    clearDecorationsLeaveScars(e) {
      ClearPedDecorationsLeaveScars(e);
    }
    addDecorationFromHashes(e, t, r) {
      AddPedDecorationFromHashes(e, t, r);
    }
    addDecorationFromHashesInCorona(e, t, r) {
      AddPedDecorationFromHashesInCorona(e, t, r);
    }
    getDecorationZoneFromHashes(e, t) {
      return GetPedDecorationZoneFromHashes(e, t);
    }
    getDecorationsState(e) {
      return GetPedDecorationsState(e);
    }
    resetVisibleDamage(e) {
      ResetPedVisibleDamage(e);
    }
    applyBloodDamageByZone(e, t, r, n, i) {
      ApplyPedBloodDamageByZone(e, t, r, n, i);
    }
    applyBlood(e, t, r, n, i, a) {
      ApplyPedBlood(e, t, r, n, i, a);
    }
    applyBloodByZone(e, t, r, n, i) {
      ApplyPedBloodByZone(e, t, r, n, i);
    }
    applyBloodSpecific(e, t, r, n, i, a, o, s, l) {
      ApplyPedBloodSpecific(e, t, r, n, i, a, o, s, l);
    }
    applyDamagePack(e, t, r, n) {
      ApplyPedDamagePack(e, t, r, n);
    }
    clearBloodDamage(e) {
      ClearPedBloodDamage(e);
    }
    clearBloodDamageByZone(e, t) {
      ClearPedBloodDamageByZone(e, t);
    }
    hideBloodDamageByZone(e, t, r) {
      HidePedBloodDamageByZone(e, t, r);
    }
    clearDamageDecalByZone(e, t, r) {
      ClearPedDamageDecalByZone(e, t, r);
    }
    clearWetness(e) {
      ClearPedWetness(e);
    }
    setWetnessHeight(e, t) {
      SetPedWetnessHeight(e, t);
    }
    setWetnessEnabledThisFrame(e) {
      SetPedWetnessEnabledThisFrame(e);
    }
    clearEnvDirt(e) {
      ClearPedEnvDirt(e);
    }
    clearParachutePackVariation(e) {
      ClearPedParachutePackVariation(e);
    }
    setScubaGearVariation(e) {
      SetPedScubaGearVariation(e);
    }
    clearScubaGearVariation(e) {
      ClearPedScubaGearVariation(e);
    }
    setPreloadVariationData(e, t, r, n) {
      return SetPedPreloadVariationData(e, t, r, n);
    }
    hasPreloadVariationDataFinished(e) {
      return HasPedPreloadVariationDataFinished(e);
    }
    releasePreloadVariationData(e) {
      ReleasePedPreloadVariationData(e);
    }
    setPreloadPropData(e, t, r, n) {
      return SetPedPreloadPropData(e, t, r, n);
    }
    hasPreloadPropDataFinished(e) {
      return HasPedPreloadPropDataFinished(e);
    }
    releasePreloadPropData(e) {
      ReleasePedPreloadPropData(e);
    }
    getPropIndex(e, t) {
      return GetPedPropIndex(e, t);
    }
    setPropIndex(e, t, r, n, i) {
      SetPedPropIndex(e, t, r, n, i);
    }
    clearProp(e, t) {
      ClearPedProp(e, t);
    }
    dropAmbientProp(e) {
      DropAmbientProp(e);
    }
    getPropTextureIndex(e, t) {
      return GetPedPropTextureIndex(e, t);
    }
    setAlternateWalkAnim(e, t, r) {
      SetPedAlternateWalkAnim(e, t, r, 1, false);
    }
    clearAlternateWalkAnim(e, t) {
      ClearPedAlternateWalkAnim(e, t);
    }
    setAlternateMovementAnim(e, t, r, n, i, a) {
      SetPedAlternateMovementAnim(e, t, r, n, i, a);
    }
    clearAlternateMovementAnim(e, t, r) {
      ClearPedAlternateMovementAnim(e, t, r);
    }
    setGestureGroup(e, t) {
      SetPedGestureGroup(e, t);
    }
    setMovementClipset(e, t) {
      SetPedMovementClipset(e, t, 1);
    }
    resetMovementClipset(e) {
      ResetPedMovementClipset(e, false);
    }
    setStrafeClipset(e, t) {
      SetPedStrafeClipset(e, t);
    }
    resetStrafeClipset(e) {
      ResetPedStrafeClipset(e);
    }
    setWeaponMovementClipset(e, t) {
      SetPedWeaponMovementClipset(e, t);
    }
    resetWeaponMovementClipset(e) {
      ResetPedWeaponMovementClipset(e);
    }
    setDriveByClipsetOverride(e, t) {
      SetPedDriveByClipsetOverride(e, t);
    }
    clearDriveByClipsetOverride(e) {
      ClearPedDriveByClipsetOverride(e);
    }
    setInVehicleContext(e, t) {
      SetPedInVehicleContext(e, t);
    }
    resetInVehicleContext(e) {
      ResetPedInVehicleContext(e);
    }
    playFacialAnim(e, t, r) {
      PlayFacialAnim(e, t, r);
    }
    setFacialIdleAnimOverride(e, t, r) {
      SetFacialIdleAnimOverride(e, t, r);
    }
    clearFacialIdleAnimOverride(e) {
      ClearFacialIdleAnimOverride(e);
    }
    setCanPlayGestureAnims(e, t) {
      SetPedCanPlayGestureAnims(e, t);
    }
    setCanPlayVisemeAnims(e, t, r) {
      SetPedCanPlayVisemeAnims(e, t, r);
    }
    setCanPlayAmbientAnims(e, t) {
      SetPedCanPlayAmbientAnims(e, t);
    }
    setCanPlayAmbientBaseAnims(e, t) {
      SetPedCanPlayAmbientBaseAnims(e, t);
    }
    setCanArmIk(e, t) {
      SetPedCanArmIk(e, t);
    }
    setCanHeadIk(e, t) {
      SetPedCanHeadIk(e, t);
    }
    setCanLegIk(e, t) {
      SetPedCanLegIk(e, t);
    }
    setCanTorsoIk(e, t) {
      SetPedCanTorsoIk(e, t);
    }
    setCanTorsoReactIk(e, t) {
      SetPedCanTorsoReactIk(e, t);
    }
    setCanUseAutoConversationLookat(e, t) {
      SetPedCanUseAutoConversationLookat(e, t);
    }
    setPrimaryLookat(e, t) {
      SetPedPrimaryLookat(e, t);
    }
    setLegIkMode(e, t) {
      SetPedLegIkMode(e, t);
    }
    setIntoVehicle(e, t, r) {
      SetPedIntoVehicle(e, t, r);
    }
    getVehicleIsIn(e, t) {
      return GetVehiclePedIsIn(e, t ?? false);
    }
    resetLastVehicle(e) {
      ResetPedLastVehicle(e);
    }
    setAllowVehiclesOverride(e, t) {
      SetPedAllowVehiclesOverride(e, t);
    }
    setVehicleForcedSeatUsage(e, t, r, n) {
      SetPedVehicleForcedSeatUsage(e, t, r, n);
    }
    setCanBeKnockedOffVehicle(e, t) {
      SetPedCanBeKnockedOffVehicle(e, t);
    }
    knockOffVehicle(e) {
      KnockPedOffVehicle(e);
    }
    setStayInVehicleWhenJacked(e, t) {
      SetPedStayInVehicleWhenJacked(e, t);
    }
    setCanBeShotInVehicle(e, t) {
      SetPedCanBeShotInVehicle(e, t);
    }
    setGetOutUpsideDownVehicle(e, t) {
      SetPedGetOutUpsideDownVehicle(e, t);
    }
    setDiesInVehicle(e, t) {
      SetPedDiesInVehicle(e, t);
    }
    setDiesInSinkingVehicle(e, t) {
      SetPedDiesInSinkingVehicle(e, t);
    }
    getPedsJacker(e) {
      return GetPedsJacker(e);
    }
    getJackTarget(e) {
      return GetJackTarget(e);
    }
    getMount(e) {
      return GetMount(e);
    }
    canRagdoll(e) {
      return CanPedRagdoll(e);
    }
    setToRagdoll(e, t, r) {
      return SetPedToRagdoll(e, t, r ?? t, 0, false, false, false);
    }
    isRagdoll(e) {
      return IsPedRagdoll(e);
    }
    setCanRagdoll(e, t) {
      SetPedCanRagdoll(e, t);
    }
    setRagdollOnCollision(e, t) {
      SetPedRagdollOnCollision(e, t);
    }
    setRagdollForceFall(e) {
      SetPedRagdollForceFall(e);
    }
    resetRagdollTimer(e) {
      ResetPedRagdollTimer(e);
    }
    setRagdollBlockingFlags(e, t) {
      SetRagdollBlockingFlags(e, t);
    }
    clearRagdollBlockingFlags(e, t) {
      ClearRagdollBlockingFlags(e, t);
    }
    setCanRagdollFromPlayerImpact(e, t) {
      SetPedCanRagdollFromPlayerImpact(e, t);
    }
    setFleeAttributes(e, t, r) {
      SetPedFleeAttributes(e, t, r);
    }
    setCombatAttributes(e, t, r) {
      SetPedCombatAttributes(e, t, r);
    }
    setCombatAbility(e, t) {
      SetPedCombatAbility(e, t);
    }
    setCombatRange(e, t) {
      SetPedCombatRange(e, t);
    }
    setTargetLossResponse(e, t) {
      SetPedTargetLossResponse(e, t);
    }
    setCowerHash(e, t) {
      SetPedCowerHash(e, t);
    }
    setSteersAroundPeds(e, t) {
      SetPedSteersAroundPeds(e, t);
    }
    setSteersAroundObjects(e, t) {
      SetPedSteersAroundObjects(e, t);
    }
    setSteersAroundVehicles(e, t) {
      SetPedSteersAroundVehicles(e, t);
    }
    setIncreasedAvoidanceRadius(e) {
      SetPedIncreasedAvoidanceRadius(e);
    }
    setBlocksPathingWhenDead(e, t) {
      SetPedBlocksPathingWhenDead(e, t);
    }
    getMeleeTargetFor(e) {
      return GetMeleeTargetForPed(e);
    }
    wasKilledByStealth(e) {
      return WasPedKilledByStealth(e);
    }
    wasKilledByTakedown(e) {
      return WasPedKilledByTakedown(e);
    }
    wasKnockedOut(e) {
      return WasPedKnockedOut(e);
    }
    createGroup(e) {
      return CreateGroup(e);
    }
    setAsGroupLeader(e, t) {
      SetPedAsGroupLeader(e, t);
    }
    setAsGroupMember(e, t) {
      SetPedAsGroupMember(e, t);
    }
    setCanTeleportToGroupLeader(e, t, r) {
      SetPedCanTeleportToGroupLeader(e, t, r);
    }
    removeGroup(e) {
      RemoveGroup(e);
    }
    removeFromGroup(e) {
      RemovePedFromGroup(e);
    }
    isGroupMember(e, t) {
      return IsPedGroupMember(e, t);
    }
    getGroupSize(e) {
      const t = GetGroupSize(e);
      return {
        unknown: t[0],
        sizeInMembers: t[1]
      };
    }
    doesGroupExist(e) {
      return DoesGroupExist(e);
    }
    getGroupIndex(e) {
      return GetPedGroupIndex(e);
    }
    isInGroup(e) {
      return IsPedInGroup(e);
    }
    setGroupFormation(e, t) {
      SetGroupFormation(e, t);
    }
    setGroupFormationSpacing(e, t, r, n) {
      SetGroupFormationSpacing(e, t, r, n);
    }
    resetGroupFormationDefaultSpacing(e) {
      ResetGroupFormationDefaultSpacing(e);
    }
    setGroupSeparationRange(e, t) {
      SetGroupSeparationRange(e, t);
    }
    setGroupMemberPassengerIndex(e, t) {
      SetPedGroupMemberPassengerIndex(e, t);
    }
    getAsGroupMember(e, t) {
      return GetPedAsGroupMember(e, t);
    }
    getAsGroupLeader(e) {
      return GetPedAsGroupLeader(e);
    }
    setNeverLeavesGroup(e, t) {
      SetPedNeverLeavesGroup(e, t);
    }
    setRelationshipGroupDefaultHash(e, t) {
      SetPedRelationshipGroupDefaultHash(e, t);
    }
    setRelationshipGroupHash(e, t) {
      SetPedRelationshipGroupHash(e, t);
    }
    setRelationshipBetweenGroups(e, t, r) {
      SetRelationshipBetweenGroups(e, t, r);
    }
    clearRelationshipBetweenGroups(e, t, r) {
      ClearRelationshipBetweenGroups(e, t, r);
    }
    addRelationshipGroup(e) {
      const t = AddRelationshipGroup(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    removeRelationshipGroup(e) {
      RemoveRelationshipGroup(e);
    }
    doesRelationshipGroupExist(e) {
      return DoesRelationshipGroupExist(e);
    }
    getRelationshipGroupDefaultHash(e) {
      return GetPedRelationshipGroupDefaultHash(e);
    }
    getRelationshipGroupHash(e) {
      return GetPedRelationshipGroupHash(e);
    }
    getRelationshipBetweenGroups(e, t) {
      return GetRelationshipBetweenGroups(e, t);
    }
    setToInformRespectedFriends(e, t, r) {
      SetPedToInformRespectedFriends(e, t, r);
    }
    registerHeadshot(e) {
      return RegisterPedheadshot(e);
    }
    registerHeadshot3(e) {
      return RegisterPedheadshot_3(e);
    }
    unregisterHeadshot(e) {
      UnregisterPedheadshot(e);
    }
    isHeadshotValid(e) {
      return IsPedheadshotValid(e);
    }
    isHeadshotReady(e) {
      return IsPedheadshotReady(e);
    }
    getHeadshotTxdString(e) {
      return GetPedheadshotTxdString(e);
    }
    setDesiredHeading(e, t) {
      SetPedDesiredHeading(e, t);
    }
    setCoordsNoGang(e, t, r, n) {
      SetPedCoordsNoGang(e, t, r, n);
    }
    setCoordsKeepVehicle(e, t, r, n) {
      SetPedCoordsKeepVehicle(e, t, r, n);
    }
    setGravity(e, t) {
      SetPedGravity(e, t);
    }
    setMoveAnimsBlendOut(e) {
      SetPedMoveAnimsBlendOut(e);
    }
    setDiesInWater(e, t) {
      SetPedDiesInWater(e, t);
    }
    setDiesInstantlyInWater(e, t) {
      SetPedDiesInstantlyInWater(e, t);
    }
    setDiesWhenInjured(e, t) {
      SetPedDiesWhenInjured(e, t);
    }
    setMaxTimeInWater(e, t) {
      SetPedMaxTimeInWater(e, t);
    }
    setMaxTimeUnderwater(e, t) {
      SetPedMaxTimeUnderwater(e, t);
    }
    setMoney(e, t) {
      SetPedMoney(e, t);
    }
    getMoney(e) {
      return GetPedMoney(e);
    }
    setAsCop(e, t) {
      SetPedAsCop(e, t);
    }
    setAsEnemy(e, t) {
      SetPedAsEnemy(e, t);
    }
    setKeepTask(e, t) {
      SetPedKeepTask(e, t);
    }
    setAllowedToDuck(e, t) {
      SetPedAllowedToDuck(e, t);
    }
    setDucking(e, t) {
      SetPedDucking(e, t);
    }
    setBlockingOfNonTemporaryEvents(e, t) {
      SetBlockingOfNonTemporaryEvents(e, t);
    }
    setBoundsOrientation(e, t, r, n, i, a) {
      SetPedBoundsOrientation(e, t, r, n, i, a);
    }
    setIdRange(e, t) {
      SetPedIdRange(e, t);
    }
    setHighlyPerceptive(e, t) {
      SetPedHighlyPerceptive(e, t);
    }
    setSeeingRange(e, t) {
      SetPedSeeingRange(e, t);
    }
    setHearingRange(e, t) {
      SetPedHearingRange(e, t);
    }
    setVisualFieldMinAngle(e, t) {
      SetPedVisualFieldMinAngle(e, t);
    }
    setVisualFieldMaxAngle(e, t) {
      SetPedVisualFieldMaxAngle(e, t);
    }
    setVisualFieldMinElevationAngle(e, t) {
      SetPedVisualFieldMinElevationAngle(e, t);
    }
    setVisualFieldMaxElevationAngle(e, t) {
      SetPedVisualFieldMaxElevationAngle(e, t);
    }
    setVisualFieldPeripheralRange(e, t) {
      SetPedVisualFieldPeripheralRange(e, t);
    }
    setVisualFieldCenterAngle(e, t) {
      SetPedVisualFieldCenterAngle(e, t);
    }
    getVisualFieldCenterAngle(e) {
      return GetPedVisualFieldCenterAngle(e);
    }
    setStealthMovement(e, t, r) {
      SetPedStealthMovement(e, t, r);
    }
    getStealthMovement(e) {
      return GetPedStealthMovement(e);
    }
    setAlertness(e, t) {
      SetPedAlertness(e, t);
    }
    getAlertness(e) {
      return GetPedAlertness(e);
    }
    setMinGroundTimeForStungun(e, t) {
      SetPedMinGroundTimeForStungun(e, t);
    }
    setCanSmashGlass(e, t, r) {
      SetPedCanSmashGlass(e, t, r);
    }
    setEnableHandcuffs(e, t) {
      SetEnableHandcuffs(e, t);
    }
    setEnableBoundAnkles(e, t) {
      SetEnableBoundAnkles(e, t);
    }
    setEnableScuba(e, t) {
      SetEnableScuba(e, t);
    }
    setCanAttackFriendly(e, t, r) {
      SetCanAttackFriendly(e, t, r);
    }
    setMaxMoveBlendRatio(e, t) {
      SetPedMaxMoveBlendRatio(e, t);
    }
    setMinMoveBlendRatio(e, t) {
      SetPedMinMoveBlendRatio(e, t);
    }
    setMoveRateOverride(e, t) {
      SetPedMoveRateOverride(e, t);
    }
    setCapsule(e, t) {
      SetPedCapsule(e, t);
    }
    setCanSwitchWeapon(e, t) {
      SetPedCanSwitchWeapon(e, t);
    }
    stopWeaponFiringWhenDropped(e) {
      StopPedWeaponFiringWhenDropped(e);
    }
    setScriptedAnimSeatOffset(e, t) {
      SetScriptedAnimSeatOffset(e, t);
    }
    setEnableWeaponBlocking(e, t) {
      SetPedEnableWeaponBlocking(e, t);
    }
    setGeneratesDeadBodyEvents(e, t) {
      SetPedGeneratesDeadBodyEvents(e, t);
    }
    setCanEvasiveDive(e, t) {
      SetPedCanEvasiveDive(e, t);
    }
    setModelIsSuppressed(e, t) {
      SetPedModelIsSuppressed(e, t);
    }
    setNameDebug(e, t) {
      SetPedNameDebug(e, t);
    }
    setMotionBlur(e, t) {
      SetEntityMotionBlur(e, t);
    }
    setConfigFlag(e, t, r) {
      SetPedConfigFlag(e, t, r);
    }
    setResetFlag(e, t, r) {
      SetPedResetFlag(e, t, r);
    }
    getConfigFlag(e, t, r) {
      return GetPedConfigFlag(e, t, r);
    }
    getResetFlag(e, t) {
      return GetPedResetFlag(e, t);
    }
    giveHelmet(e, t, r, n) {
      GivePedHelmet(e, t, r, n);
    }
    removeHelmet(e, t) {
      RemovePedHelmet(e, t);
    }
    isTakingOffHelmet(e) {
      return IsPedTakingOffHelmet(e);
    }
    setHelmet(e, t) {
      SetPedHelmet(e, t);
    }
    setHelmetFlag(e, t) {
      SetPedHelmetFlag(e, t);
    }
    setHelmetPropIndex(e, t) {
      SetPedHelmetPropIndex(e, t);
    }
    setHelmetTextureIndex(e, t) {
      SetPedHelmetTextureIndex(e, t);
    }
    isWearingHelmet(e) {
      return IsPedWearingHelmet(e);
    }
    clearStoredHatProp(e) {
      ClearPedStoredHatProp(e);
    }
    getHelmetStoredHatPropIndex(e) {
      return GetPedHelmetStoredHatPropIndex(e);
    }
    getHelmetStoredHatTexIndex(e) {
      return GetPedHelmetStoredHatTexIndex(e);
    }
    setToLoadCover(e, t) {
      SetPedToLoadCover(e, t);
    }
    setCanCowerInCover(e, t) {
      SetPedCanCowerInCover(e, t);
    }
    setCanPeekInCover(e, t) {
      SetPedCanPeekInCover(e, t);
    }
    setPlaysHeadOnHornAnimWhenDiesInVehicle(e, t) {
      SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(e, t);
    }
    setPreferredCoverSet(e, t) {
      SetPedPreferredCoverSet(e, t);
    }
    removePreferredCoverSet(e) {
      RemovePedPreferredCoverSet(e);
    }
    setSphereDefensiveArea(e, t, r, n, i, a, o) {
      SetPedSphereDefensiveArea(e, t, r, n, i, a, o);
    }
    setDefensiveAreaDirection(e, t, r, n, i) {
      SetPedDefensiveAreaDirection(e, t, r, n, i);
    }
    removeDefensiveArea(e, t) {
      RemovePedDefensiveArea(e, t);
    }
    getDefensiveAreaPosition(e, t) {
      return za(GetPedDefensiveAreaPosition(e, t));
    }
    isDefensiveAreaActive(e, t) {
      return IsPedDefensiveAreaActive(e, t);
    }
    reviveInjured(e) {
      ReviveInjuredPed(e);
    }
    resurrect(e) {
      ResurrectPed(e);
    }
    getExtractedDisplacement(e, t) {
      return za(GetPedExtractedDisplacement(e, t));
    }
    getBoneCoords(e, t, r, n, i) {
      return za(GetPedBoneCoords(e, t, r, n, i));
    }
    getBoneIndex(e, t) {
      return GetPedBoneIndex(e, t);
    }
    getRagdollBoneIndex(e, t) {
      return GetPedRagdollBoneIndex(e, t);
    }
    wasSkeletonUpdated(e) {
      return WasPedSkeletonUpdated(e);
    }
    setEnveffScale(e, t) {
      SetPedEnveffScale(e, t);
    }
    getEnveffScale(e) {
      return GetPedEnveffScale(e);
    }
    setEnveffColorModulator(e, t, r, n) {
      SetPedEnveffColorModulator(e, t, r, n);
    }
    setAoBlobRendering(e, t) {
      SetPedAoBlobRendering(e, t);
    }
    createNmMessage(e, t) {
      CreateNmMessage(e, t);
    }
    giveNmMessage(e) {
      GivePedNmMessage(e);
    }
    haveAllStreamingRequestsCompleted(e) {
      return HaveAllStreamingRequestsCompleted(e);
    }
    setUsingActionMode(e, t, r, n) {
      SetPedUsingActionMode(e, t, r, n);
    }
    setMovementModeOverride(e, t) {
      SetMovementModeOverride(e, t);
    }
    setHeatscaleOverride(e, t) {
      SetPedHeatscaleOverride(e, t);
    }
    disableHeatscaleOverride(e) {
      DisablePedHeatscaleOverride(e);
    }
    setLodMultiplier(e, t) {
      SetPedLodMultiplier(e, t);
    }
    setForceFootstepUpdate(e, t) {
      SetForceFootstepUpdate(e, t);
    }
    setForceStepType(e, t, r, n) {
      SetForceStepType(e, t, r, n);
    }
    forceMotionState(e, t, r, n, i) {
      return ForcePedMotionState(e, t, r, n, i);
    }
    requestVisibilityTracking(e) {
      RequestPedVisibilityTracking(e);
    }
    requestVehicleVisibilityTracking(e, t) {
      RequestPedVehicleVisibilityTracking(e, t);
    }
    forceToOpenParachute(e) {
      ForcePedToOpenParachute(e);
    }
    getParachuteState(e) {
      return GetPedParachuteState(e);
    }
    getParachuteLandingType(e) {
      return GetPedParachuteLandingType(e);
    }
    setParachuteTintIndex(e, t) {
      SetPedParachuteTintIndex(e, t);
    }
    getParachuteTintIndex(e) {
      const t = GetPedParachuteTintIndex(e);
      if (Array.isArray(t)) {
        return t[0];
      } else {
        return t;
      }
    }
    setReserveParachuteTintIndex(e, t) {
      SetPedReserveParachuteTintIndex(e, t);
    }
    createParachuteBagObject(e, t, r) {
      return CreateParachuteBagObject(e, t, r);
    }
    createSynchronizedScene(e, t, r, n, i, a, o) {
      return CreateSynchronizedScene(e, t, r, n, i, a, o);
    }
    createSynchronizedSceneAtMapObject(e, t, r, n, i) {
      return CreateSynchronizedSceneAtMapObject(e, t, r, n, i);
    }
    isSynchronizedSceneRunning(e) {
      return IsSynchronizedSceneRunning(e);
    }
    setSynchronizedSceneOrigin(e, t, r, n, i, a, o, s) {
      SetSynchronizedSceneOrigin(e, t, r, n, i, a, o, s);
    }
    setSynchronizedScenePhase(e, t) {
      SetSynchronizedScenePhase(e, t);
    }
    getSynchronizedScenePhase(e) {
      return GetSynchronizedScenePhase(e);
    }
    setSynchronizedSceneRate(e, t) {
      SetSynchronizedSceneRate(e, t);
    }
    getSynchronizedSceneRate(e) {
      return GetSynchronizedSceneRate(e);
    }
    setSynchronizedSceneLooped(e, t) {
      SetSynchronizedSceneLooped(e, t);
    }
    isSynchronizedSceneLooped(e) {
      return IsSynchronizedSceneLooped(e);
    }
    setSynchronizedSceneHoldLastFrame(e, t) {
      SetSynchronizedSceneHoldLastFrame(e, t);
    }
    isSynchronizedSceneHoldLastFrame(e) {
      return IsSynchronizedSceneHoldLastFrame(e);
    }
    attachSynchronizedSceneToEntity(e, t, r) {
      AttachSynchronizedSceneToEntity(e, t, r);
    }
    detachSynchronizedScene(e) {
      DetachSynchronizedScene(e);
    }
    removeScenarioBlockingAreas() {
      RemoveScenarioBlockingAreas();
    }
    removeScenarioBlockingArea(e, t) {
      RemoveScenarioBlockingArea(e, t);
    }
    setScenarioPedsSpawnInSphereArea(e, t, r, n, i) {
      SetScenarioPedsSpawnInSphereArea(e, t, r, n, i);
    }
    setShouldPlayNormalScenarioExit(e) {
      SetPedShouldPlayNormalScenarioExit(e);
    }
    setShouldPlayImmediateScenarioExit(e) {
      SetPedShouldPlayImmediateScenarioExit(e);
    }
    setScenarioPedsToBeReturnedByNextCommand(e) {
      SetScenarioPedsToBeReturnedByNextCommand(e);
    }
    setDriverRacingModifier(e, t) {
      SetDriverRacingModifier(e, t);
    }
    setDriverAbility(e, t) {
      SetDriverAbility(e, t);
    }
    setDriverAggressiveness(e, t) {
      SetDriverAggressiveness(e, t);
    }
    getClosest(e, t, r, n, i, a, o, s, l) {
      const d = GetClosestPed(e, t, r, n, i, a, o, s, l);
      if (Array.isArray(d)) {
        return d[1];
      } else {
        return d;
      }
    }
    getRandomAtCoord(e, t, r, n, i, a, o) {
      return GetRandomPedAtCoord(e, t, r, n, i, a, o);
    }
    canCreateRandom(e) {
      return CanCreateRandomPed(e);
    }
    createRandom(e, t, r) {
      return CreateRandomPed(e, t, r);
    }
    canCreateRandomDriver() {
      return CanCreateRandomDriver();
    }
    canCreateRandomBikeRider() {
      return CanCreateRandomBikeRider();
    }
    setCreateRandomCops(e) {
      SetCreateRandomCops(e);
    }
    setCreateRandomCopsNotOnScenarios(e) {
      SetCreateRandomCopsNotOnScenarios(e);
    }
    setCreateRandomCopsOnScenarios(e) {
      SetCreateRandomCopsOnScenarios(e);
    }
    canCreateRandomCops() {
      return CanCreateRandomCops();
    }
    setDensityMultiplierThisFrame(e) {
      SetPedDensityMultiplierThisFrame(e);
    }
    setScenarioPedDensityMultiplierThisFrame(e, t) {
      SetScenarioPedDensityMultiplierThisFrame(e, t);
    }
    setNonCreationArea(e, t, r, n, i, a) {
      SetPedNonCreationArea(e, t, r, n, i, a);
    }
    clearNonCreationArea() {
      ClearPedNonCreationArea();
    }
    setScriptedConversionCoordThisFrame(e, t, r) {
      SetScriptedConversionCoordThisFrame(e, t, r);
    }
    setAmbientPedsDropMoney(e) {
      SetAmbientPedsDropMoney(e);
    }
    setPopControlSphereThisFrame(e, t, r, n, i) {
      SetPopControlSphereThisFrame(e, t, r, n, i);
    }
    requestActionModeAsset(e) {
      RequestActionModeAsset(e);
    }
    hasActionModeAssetLoaded(e) {
      return HasActionModeAssetLoaded(e);
    }
    removeActionModeAsset(e) {
      RemoveActionModeAsset(e);
    }
    requestStealthModeAsset(e) {
      RequestStealthModeAsset(e);
    }
    hasStealthModeAssetLoaded(e) {
      return HasStealthModeAssetLoaded(e);
    }
    removeStealthModeAsset(e) {
      RemoveStealthModeAsset(e);
    }
    spawnpointsStartSearch(e, t, r, n, i, a, o, s) {
      SpawnpointsStartSearch(e, t, r, n, i, a, o, s);
    }
    spawnpointsCancelSearch() {
      SpawnpointsCancelSearch();
    }
    spawnpointsIsSearchActive() {
      return SpawnpointsIsSearchActive();
    }
    spawnpointsIsSearchComplete() {
      return SpawnpointsIsSearchComplete();
    }
    spawnpointsIsSearchFailed() {
      return SpawnpointsIsSearchFailed();
    }
    spawnpointsGetNumSearchResults() {
      return SpawnpointsGetNumSearchResults();
    }
    spawnpointsGetSearchResult(e) {
      const t = SpawnpointsGetSearchResult(e);
      return {
        x: t[0],
        y: t[1],
        z: t[2]
      };
    }
    cloneEx(e, t, r, n, i) {
      return ClonePedEx(e, t, r, n, i);
    }
    cloneToTargetEx(e, t, r) {
      ClonePedToTargetEx(e, t, r);
    }
    removeElegantly(e) {
      return RemovePedElegantly(e);
    }
    freezeCameraRotation(e) {
      FreezePedCameraRotation(e);
    }
    isConversationDead(e) {
      return IsConversationPedDead(e);
    }
    isOpeningADoor(e) {
      return IsPedOpeningADoor(e);
    }
    createRandomAsDriver(e, t) {
      return CreateRandomPedAsDriver(e, t);
    }
    instantlyFillPopulation() {
      InstantlyFillPedPopulation();
    }
    setScenarioDensityMultiplierThisFrame(e, t) {
      SetScenarioPedDensityMultiplierThisFrame(e, t);
    }
    getDeadPickupCoords(e, t, r) {
      return za(GetDeadPedPickupCoords(e, t, r));
    }
    getMaxHealth(e) {
      return GetPedMaxHealth(e);
    }
    setMaxHealth(e, t) {
      SetPedMaxHealth(e, t);
    }
    getType(e) {
      return GetPedType(e);
    }
    applyDamageDecal(e, t, r, n, i, a, o, s, l, d) {
      ApplyPedDamageDecal(e, t, r, n, i, a, o, s, l, d);
    }
    getEventData(e, t) {
      return GetEventData(e, t);
    }
    getTimeOfLastWeaponDamage(e, t) {
      return GetTimeOfLastPedWeaponDamage(e, t);
    }
    setPinnedDown(e, t, r) {
      return SetPedPinnedDown(e, t, r);
    }
    getSeatIsTryingToEnter(e) {
      return GetSeatPedIsTryingToEnter(e);
    }
    getVehicleIsTryingToEnter(e) {
      return GetVehiclePedIsTryingToEnter(e);
    }
    getVehicleIsUsing(e) {
      return GetVehiclePedIsUsing(e);
    }
    getVehicleIsEntering(e) {
      return GetVehiclePedIsEntering(e);
    }
    getPlayerIsFollowing(e) {
      return GetPlayerPedIsFollowing(e);
    }
    canKnockOffVehicle(e) {
      return CanKnockPedOffVehicle(e);
    }
    clearAllVehicleForcedSeatUsage(e) {
      ClearAllPedVehicleForcedSeatUsage(e);
    }
    getRelationshipBetweenS(e, t) {
      return GetRelationshipBetweenPeds(e, t);
    }
    setRelationshipGroupDontAffectWantedLevel(e, t) {
      SetRelationshipGroupDontAffectWantedLevel(e, t);
    }
    clearAllProps(e) {
      ClearAllPedProps(e);
    }
    knockOffProp(e, t, r, n, i) {
      KnockOffPedProp(e, t, r, n, i);
    }
    getEyeColor(e) {
      return GetPedEyeColor(e);
    }
    getHeadBlendData(e) {
      const [, t] = GetPedHeadBlendData(e);
      return t;
    }
    getHeadOverlayValue(e, t) {
      return GetPedHeadOverlayValue(e, t);
    }
    getNumHairColors() {
      return GetNumHairColors();
    }
    getNumMakeupColors() {
      return GetNumMakeupColors();
    }
    getNumParentPedsOfType(e) {
      return GetNumParentPedsOfType(e);
    }
    getHairRgbColor(e) {
      const t = GetPedHairRgbColor(e);
      return {
        outR: t[0],
        outG: t[1],
        outB: t[2]
      };
    }
    getMakeupRgbColor(e) {
      const t = GetPedMakeupRgbColor(e);
      return {
        outR: t[0],
        outG: t[1],
        outB: t[2]
      };
    }
    isHairColorValid(e) {
      return IsPedHairColorValid(e);
    }
    isHairColorValid2(e) {
      return IsPedHairColorValid_2(e);
    }
    isLipstickColorValid(e) {
      return IsPedLipstickColorValid(e);
    }
    isLipstickColorValid2(e) {
      return IsPedLipstickColorValid_2(e);
    }
    isBlushColorValid(e) {
      return IsPedBlushColorValid(e);
    }
    isBlushColorValid2(e) {
      return IsPedBlushColorValid_2(e);
    }
    isBodyBlemishValid(e) {
      return IsPedBodyBlemishValid(e);
    }
    setEmissiveIntensity(e, t) {
      SetPedEmissiveIntensity(e, t);
    }
    getEmissiveIntensity(e) {
      return GetPedEmissiveIntensity(e);
    }
    isShaderEffectValid(e) {
      return IsPedShaderEffectValid(e);
    }
    setEnableEnveffScale(e, t) {
      SetEnablePedEnveffScale(e, t);
    }
    setAngledDefensiveArea(e, t, r, n, i, a, o, s, l, d) {
      SetPedAngledDefensiveArea(e, t, r, n, i, a, o, s, l, d);
    }
    setDefensiveSphereAttachedToPed(e, t, r, n, i, a, o) {
      SetPedDefensiveSphereAttachedToPed(e, t, r, n, i, a, o);
    }
    setDefensiveSphereAttachedToVehicle(e, t, r, n, i, a, o) {
      SetPedDefensiveSphereAttachedToVehicle(e, t, r, n, i, a, o);
    }
    setDefensiveAreaAttachedToPed(e, t, r, n, i, a, o, s, l, d, c) {
      SetPedDefensiveAreaAttachedToPed(e, t, r, n, i, a, o, s, l, d, c);
    }
    setCoverClipsetOverride(e, t) {
      SetPedCoverClipsetOverride(e, t);
    }
    clearCoverClipsetOverride(e) {
      ClearPedCoverClipsetOverride(e);
    }
    isScriptedScenarioUsingConditionalAnim(e, t, r) {
      return IsScriptedScenarioPedUsingConditionalAnim(e, t, r);
    }
    getAnimInitialOffsetPosition(e, t, r, n, i, a, o, s, l, d) {
      return za(GetAnimInitialOffsetPosition(e, t, r, n, i, a, o, s, l, d));
    }
    getAnimInitialOffsetRotation(e, t, r, n, i, a, o, s, l, d) {
      return za(GetAnimInitialOffsetRotation(e, t, r, n, i, a, o, s, l, d));
    }
    setFacialClipsetOverride(e, t) {
      SetFacialClipsetOverride(e, t);
    }
    clearFacialClipsetOverride(e) {
      ClearFacialClipsetOverride(e);
    }
    setCanPlayInjuredAnims(e, t) {
      SetPedCanPlayInjuredAnims(e, t);
    }
    setCanPlayInCarIdles(e, t) {
      SetPedCanPlayInCarIdles(e, t);
    }
    setClothPackageIndex(e, t) {
      SetPedClothPackageIndex(e, t);
    }
    setClothProne(e, t) {
      SetPedClothProne(e, t);
    }
    blockDeadBodyShockingEvents(e, t) {
      BlockPedDeadBodyShockingEvents(e, t);
    }
    isPerformingDependentComboLimit(e) {
      return IsPedPerformingDependentComboLimit(e);
    }
    setToRagdollWithFall(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      return SetPedToRagdollWithFall(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    isSwappingWeapon(e) {
      return IsPedSwappingWeapon(e);
    }
    setDisableFallDamage(e, t) {
      SetPedDisableFallDamage(e, t);
    }
    forceAiAndAnimationUpdate(e, t, r) {
      ForcePedAiAndAnimationUpdate(e, t, r);
    }
    isTrackedVisible(e) {
      return IsTrackedPedVisible(e);
    }
    isAnyHostileNearPoint(e, t, r, n, i) {
      return IsAnyHostilePedNearPoint(e, t, r, n, i);
    }
    isTargetInPerceptionArea(e, t, r, n, i, a) {
      return IsTargetPedInPerceptionArea(e, t, r, n, i, a);
    }
    setCanLosePropsOnDamage(e, t, r) {
      SetPedCanLosePropsOnDamage(e, t, r);
    }
    getTaskCombatTarget(e, t) {
      return GetPedTaskCombatTarget(e, t);
    }
    isMobilePhoneToEar(e) {
      return IsMobilePhoneToPedEar(e);
    }
    setTimeExclusiveDisplayTexture(e, t) {
      SetTimeExclusiveDisplayTexture(e, t);
    }
    setHelmetUnk(e, t, r, n) {
      SetPedHelmetUnk(e, t, r, n);
    }
    isHelmetUnk(e) {
      return IsPedHelmetUnk(e);
    }
    setEnableScubaGearLight(e, t) {
      SetEnableScubaGearLight(e, t);
    }
    isScubaGearLightEnabled(e) {
      return IsScubaGearLightEnabled(e);
    }
    createSynchronizedScene2(e, t, r, n, i) {
      return CreateSynchronizedScene_2(e, t, r, n, i);
    }
    disposeSynchronizedScene(e) {
      DisposeSynchronizedScene(e);
    }
    setSynchronizedSceneLoo(e, t) {
      SetSynchronizedSceneLooped(e, t);
    }
    isSynchronizedSceneLoo(e) {
      return IsSynchronizedSceneLooped(e);
    }
    setShouldPlayDirectedScenarioExit(e, t, r, n) {
      return SetPedShouldPlayDirectedScenarioExit(e, t, r, n);
    }
    setShouldPlayFleeScenarioExit(e, t, r, n) {
      return SetPedShouldPlayFleeScenarioExit(e, t, r, n);
    }
    setPanicExitScenario(e, t, r, n) {
      return SetPedPanicExitScenario(e, t, r, n);
    }
    addScenarioBlockingArea(e, t, r, n, i, a, o, s, l, d) {
      return AddScenarioBlockingArea(e, t, r, n, i, a, o, s, l, d);
    }
    doesScenarioBlockingAreaExist(e, t, r, n, i, a) {
      return DoesScenarioBlockingAreaExist(e, t, r, n, i, a);
    }
    getCurrentMovementSpeed(e) {
      const t = GetPedCurrentMovementSpeed(e);
      return {
        speedX: t[1],
        speedY: t[2],
        result: t[0]
      };
    }
    getNearbyVehicles(e) {
      return GetPedNearbyVehicles(e);
    }
    getNearbyPeds(e, t) {
      return GetPedNearbyPeds(e, t);
    }
    registerHeadshotTransparent(e) {
      return RegisterPedheadshotTransparent(e);
    }
    requestHeadshotImgUpload(e) {
      return RequestPedheadshotImgUpload(e);
    }
    releaseHeadshotImgUpload(e) {
      ReleasePedheadshotImgUpload(e);
    }
    isHeadshotImgUploadAvailable() {
      return IsPedheadshotImgUploadAvailable();
    }
    hasHeadshotImgUploadFailed() {
      return HasPedheadshotImgUploadFailed();
    }
    hasHeadshotImgUploadSucceeded() {
      return HasPedheadshotImgUploadSucceeded();
    }
    spawnpointsStartSearchInAngledArea(e, t, r, n, i, a, o, s, l, d) {
      SpawnpointsStartSearchInAngledArea(e, t, r, n, i, a, o, s, l, d);
    }
    spawnpointsGetSearchResultFlags(e) {
      return SpawnpointsGetSearchResultFlags(e);
    }
    setIkTarget(e, t, r, n, i, a, o, s, l, d) {
      SetIkTarget(e, t, r, n, i, a, o, s, l, d);
    }
    stopAnyModelBeingSuppressed() {
      StopAnyPedModelBeingSuppressed();
    }
    async requestActionModeAssetAsync(e, t) {
      return qa(RequestActionModeAsset, HasActionModeAssetLoaded, e, t ?? 5000);
    }
    async requestStealthModeAssetAsync(e, t) {
      return qa(RequestStealthModeAsset, HasStealthModeAssetLoaded, e, t ?? 5000);
    }
    createPed(e, t, r, n, i, a, o, s) {
      return CreatePed(e, t, r, n, i, a, o, s);
    }
    canCreateRandomPed(e) {
      return CanCreateRandomPed(e);
    }
    createRandomPed(e, t, r) {
      return CreateRandomPed(e, t, r);
    }
    setPedDensityMultiplierThisFrame(e) {
      SetPedDensityMultiplierThisFrame(e);
    }
    setPedNonCreationArea(e, t, r, n, i, a) {
      SetPedNonCreationArea(e, t, r, n, i, a);
    }
    setPedReserveParachuteTintIndex(e, t) {
      SetPedReserveParachuteTintIndex(e, t);
    }
    isPedRespondingToEvent(e, t) {
      return IsPedRespondingToEvent(e, t);
    }
    setExclusivePhoneRelationships(e) {
      return SetExclusivePhoneRelationships(e);
    }
    getPedAsGroupMember(e, t) {
      return GetPedAsGroupMember(e, t);
    }
    getPedAsGroupLeader(e) {
      return GetPedAsGroupLeader(e);
    }
    setPedAlternateWalkAnim(e, t, r, n, i) {
      SetPedAlternateWalkAnim(e, t, r, n, i);
    }
    clearPedAlternateWalkAnim(e, t) {
      ClearPedAlternateWalkAnim(e, t);
    }
    getNumHeadOverlayValues(e) {
      return GetNumHeadOverlayValues(e);
    }
    isAValidHairColor(e) {
      return IsPedHairColorValid(e);
    }
    isAValidLipstickColor(e) {
      return IsPedLipstickColorValid(e);
    }
    isAValidBlushColor(e) {
      return IsPedBlushColorValid(e);
    }
    getFirstParentIdForPedType(e) {
      return GetFirstParentIdForPedType(e);
    }
    getRandomPedAtCoord(e, t, r, n, i, a, o) {
      return GetRandomPedAtCoord(e, t, r, n, i, a, o);
    }
    getClosestPed(e, t, r, n, i, a, o, s, l) {
      return GetClosestPed(e, t, r, n, i, a, o, s, l);
    }
    getTattooZone(e, t) {
      return GetTattooZone(e, t);
    }
    hasPedReceivedEvent(e, t) {
      return HasPedReceivedEvent(e, t);
    }
    isPedheadshotValid(e) {
      return IsPedheadshotValid(e);
    }
    isPedheadshotReady(e) {
      return IsPedheadshotReady(e);
    }
    getPedheadshotTxdString(e) {
      return GetPedheadshotTxdString(e);
    }
    setPedToRagdoll(e, t, r, n, i, a, o) {
      return SetPedToRagdoll(e, t, r, n, i, a, o);
    }
    setPedToRagdollWithFall(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      return SetPedToRagdollWithFall(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    _0x03EA03AF85A85CB7(...e) {
      return Citizen.invokeNative("0x03EA03AF85A85CB7", ...e);
    }
    _0x06087579E7AA85A9(...e) {
      return Citizen.invokeNative("0x06087579E7AA85A9", ...e);
    }
    _0x061CB768363D6424(...e) {
      return Citizen.invokeNative("0x061CB768363D6424", ...e);
    }
    _0x0B3E35AC043707D9(...e) {
      return Citizen.invokeNative("0x0B3E35AC043707D9", ...e);
    }
    _0x0F62619393661D6E(...e) {
      return Citizen.invokeNative("0x0F62619393661D6E", ...e);
    }
    _0x110F526AB784111F(...e) {
      return Citizen.invokeNative("0x110F526AB784111F", ...e);
    }
    _0x1216E0BFA72CC703(...e) {
      return Citizen.invokeNative("0x1216E0BFA72CC703", ...e);
    }
    _0x1A330D297AAC6BC1(...e) {
      return Citizen.invokeNative("0x1A330D297AAC6BC1", ...e);
    }
    _0x1E77FA7A62EE6C4C(...e) {
      return Citizen.invokeNative("0x1E77FA7A62EE6C4C", ...e);
    }
    _0x2016C603D6B8987C(...e) {
      return Citizen.invokeNative("0x2016C603D6B8987C", ...e);
    }
    _0x25361A96E0F7E419(...e) {
      return Citizen.invokeNative("0x25361A96E0F7E419", ...e);
    }
    _0x2735233A786B1BEF(...e) {
      return Citizen.invokeNative("0x2735233A786B1BEF", ...e);
    }
    _0x288DF530C92DAD6F(...e) {
      return Citizen.invokeNative("0x288DF530C92DAD6F", ...e);
    }
    _0x2B694AFCF64E6994(...e) {
      return Citizen.invokeNative("0x2B694AFCF64E6994", ...e);
    }
    _0x2DFC81C9B9608549(...e) {
      return Citizen.invokeNative("0x2DFC81C9B9608549", ...e);
    }
    _0x2F074C904D85129E(...e) {
      return Citizen.invokeNative("0x2F074C904D85129E", ...e);
    }
    _0x2F3C3D9F50681DE4(...e) {
      return Citizen.invokeNative("0x2F3C3D9F50681DE4", ...e);
    }
    _0x336B3D200AB007CB(...e) {
      return Citizen.invokeNative("0x336B3D200AB007CB", ...e);
    }
    _0x3E9679C1DFCF422C(...e) {
      return Citizen.invokeNative("0x3E9679C1DFCF422C", ...e);
    }
    _0x412F1364FA066CFB(...e) {
      return Citizen.invokeNative("0x412F1364FA066CFB", ...e);
    }
    _0x425AECF167663F48(...e) {
      return Citizen.invokeNative("0x425AECF167663F48", ...e);
    }
    _0x451D05012CCEC234(...e) {
      return Citizen.invokeNative("0x451D05012CCEC234", ...e);
    }
    _0x46B05BCAE43856B0(...e) {
      return Citizen.invokeNative("0x46B05BCAE43856B0", ...e);
    }
    _0x49E50BDB8BA4DAB2(...e) {
      return Citizen.invokeNative("0x49E50BDB8BA4DAB2", ...e);
    }
    _0x511F1A683387C7E2(...e) {
      return Citizen.invokeNative("0x511F1A683387C7E2", ...e);
    }
    _0x5407B7288D0478B7(...e) {
      return Citizen.invokeNative("0x5407B7288D0478B7", ...e);
    }
    _0x5A7F62FDA59759BD(...e) {
      return Citizen.invokeNative("0x5A7F62FDA59759BD", ...e);
    }
    _0x5B6010B3CBC29095(...e) {
      return Citizen.invokeNative("0x5B6010B3CBC29095", ...e);
    }
    _0x6647C5F6F5792496(...e) {
      return Citizen.invokeNative("0x6647C5F6F5792496", ...e);
    }
    _0x711794453CFD692B(...e) {
      return Citizen.invokeNative("0x711794453CFD692B", ...e);
    }
    _0x733C87D4CE22BEA2(...e) {
      return Citizen.invokeNative("0x733C87D4CE22BEA2", ...e);
    }
    _0x75BA1CB3B7D40CAF(...e) {
      return Citizen.invokeNative("0x75BA1CB3B7D40CAF", ...e);
    }
    _0x80054D7FCC70EEC6(...e) {
      return Citizen.invokeNative("0x80054D7FCC70EEC6", ...e);
    }
    _0x820E9892A77E97CD(...e) {
      return Citizen.invokeNative("0x820E9892A77E97CD", ...e);
    }
    _0x83A169EABCDB10A2(...e) {
      return Citizen.invokeNative("0x83A169EABCDB10A2", ...e);
    }
    _0x87DDEB611B329A9C(...e) {
      return Citizen.invokeNative("0x87DDEB611B329A9C", ...e);
    }
    _0x9911F4A24485F653(...e) {
      return Citizen.invokeNative("0x9911F4A24485F653", ...e);
    }
    _0x9A77DFD295E29B09(...e) {
      return Citizen.invokeNative("0x9A77DFD295E29B09", ...e);
    }
    _0x9C6A6C19B6C0C496(...e) {
      return Citizen.invokeNative("0x9C6A6C19B6C0C496", ...e);
    }
    _0x9E30E91FB03A2CAF(...e) {
      return Citizen.invokeNative("0x9E30E91FB03A2CAF", ...e);
    }
    _0xA3F3564A5B3646C0(...e) {
      return Citizen.invokeNative("0xA3F3564A5B3646C0", ...e);
    }
    _0xA52D5247A4227E14(...e) {
      return Citizen.invokeNative("0xA52D5247A4227E14", ...e);
    }
    _0xA660FAF550EB37E5(...e) {
      return Citizen.invokeNative("0xA660FAF550EB37E5", ...e);
    }
    _0xA9B61A329BFDCBEA(...e) {
      return Citizen.invokeNative("0xA9B61A329BFDCBEA", ...e);
    }
    _0xAAA6A3698A69E048(...e) {
      return Citizen.invokeNative("0xAAA6A3698A69E048", ...e);
    }
    _0xAD27D957598E49E9(...e) {
      return Citizen.invokeNative("0xAD27D957598E49E9", ...e);
    }
    _0xAFC976FD0580C7B3(...e) {
      return Citizen.invokeNative("0xAFC976FD0580C7B3", ...e);
    }
    _0xB282749D5E028163(...e) {
      return Citizen.invokeNative("0xB282749D5E028163", ...e);
    }
    _0xB8B52E498014F5B0(...e) {
      return Citizen.invokeNative("0xB8B52E498014F5B0", ...e);
    }
    _0xC2EE020F5FB4DB53(...e) {
      return Citizen.invokeNative("0xC2EE020F5FB4DB53", ...e);
    }
    _0xC30BDAEE47256C13(...e) {
      return Citizen.invokeNative("0xC30BDAEE47256C13", ...e);
    }
    _0xC56FBF2F228E1DAC(...e) {
      return Citizen.invokeNative("0xC56FBF2F228E1DAC", ...e);
    }
    _0xCD018C591F94CB43(...e) {
      return Citizen.invokeNative("0xCD018C591F94CB43", ...e);
    }
    _0xCEDA60A74219D064(...e) {
      return Citizen.invokeNative("0xCEDA60A74219D064", ...e);
    }
    _0xD33DAA36272177C4(...e) {
      return Citizen.invokeNative("0xD33DAA36272177C4", ...e);
    }
    _0xDFE68C4B787E1BFB(...e) {
      return Citizen.invokeNative("0xDFE68C4B787E1BFB", ...e);
    }
    _0xE861D0B05C7662B8(...e) {
      return Citizen.invokeNative("0xE861D0B05C7662B8", ...e);
    }
    _0xE906EC930F5FE7C8(...e) {
      return Citizen.invokeNative("0xE906EC930F5FE7C8", ...e);
    }
    _0xEA9960D07DADCF10(...e) {
      return Citizen.invokeNative("0xEA9960D07DADCF10", ...e);
    }
    _0xEC4B4B3B9908052A(...e) {
      return Citizen.invokeNative("0xEC4B4B3B9908052A", ...e);
    }
    _0xEC6935EBE0847B90(...e) {
      return Citizen.invokeNative("0xEC6935EBE0847B90", ...e);
    }
    _0xED3C76ADFA6D07C4(...e) {
      return Citizen.invokeNative("0xED3C76ADFA6D07C4", ...e);
    }
    _0xF033419D1B81FAE8(...e) {
      return Citizen.invokeNative("0xF033419D1B81FAE8", ...e);
    }
    _0xF2385935BFFD4D92(...e) {
      return Citizen.invokeNative("0xF2385935BFFD4D92", ...e);
    }
    _0xF2BEBCDFAFDAA19E(...e) {
      return Citizen.invokeNative("0xF2BEBCDFAFDAA19E", ...e);
    }
    _0xF9ACF4A08098EA25(...e) {
      return Citizen.invokeNative("0xF9ACF4A08098EA25", ...e);
    }
    _0xFAB944D4D481ACCB(...e) {
      return Citizen.invokeNative("0xFAB944D4D481ACCB", ...e);
    }
    _0xFD325494792302D7(...e) {
      return Citizen.invokeNative("0xFD325494792302D7", ...e);
    }
    _0xFEC9A3B1820F3331(...e) {
      return Citizen.invokeNative("0xFEC9A3B1820F3331", ...e);
    }
    _0xFF4803BC019852D9(...e) {
      return Citizen.invokeNative("0xFF4803BC019852D9", ...e);
    }
  }
  class Ja {
    constructor() {
      this.unk = ja();
    }
    getPed() {
      return GetPlayerPed(PlayerId());
    }
    getPedScriptIndex() {
      return GetPlayerPed(PlayerId());
    }
    setModel(e) {
      SetPlayerModel(PlayerId(), e);
    }
    getIndex() {
      return PlayerId();
    }
    getName() {
      return GetPlayerName(PlayerId());
    }
    getEntityIsFreeAimingAt() {
      const [e, t] = GetEntityPlayerIsFreeAimingAt(PlayerId());
      if (e && t) {
        return pt(t);
      }
    }
    getTeam() {
      return GetPlayerTeam(PlayerId());
    }
    setTeam(e) {
      SetPlayerTeam(PlayerId(), e);
    }
    getNumberOfPlayersInTeam(e) {
      let t = 0;
      for (let r = 0; r < 32; r++) {
        if (NetworkIsPlayerActive(r) && GetPlayerTeam(r) === e) {
          t++;
        }
      }
      return t;
    }
    getWantedLevel() {
      return GetPlayerWantedLevel(PlayerId());
    }
    setWantedLevel(e, t) {
      SetPlayerWantedLevel(PlayerId(), e, t ?? false);
      SetPlayerWantedLevelNow(PlayerId(), false);
    }
    clearWantedLevel() {
      ClearPlayerWantedLevel(PlayerId());
    }
    isWantedLevelGreater(e) {
      return GetPlayerWantedLevel(PlayerId()) > e;
    }
    setWeaponDamageModifier(e) {
      SetPlayerWeaponDamageModifier(PlayerId(), e);
    }
    setMeleeWeaponDamageModifier(e, t) {
      SetPlayerMeleeWeaponDamageModifier(PlayerId(), e, t ?? false);
    }
    disableFiring(e) {
      DisablePlayerFiring(PlayerId(), e);
    }
    specialAbilityActivate() {
      SpecialAbilityActivate(PlayerId());
    }
    specialAbilityDeactivate() {
      SpecialAbilityDeactivate(PlayerId());
    }
    isSpecialAbilityActive() {
      return IsSpecialAbilityActive(PlayerId());
    }
    setParachuteTintIndex(e) {
      SetPlayerParachuteTintIndex(PlayerId(), e);
    }
    setParachuteSmokeTrailColor(e, t, r) {
      SetPlayerParachuteSmokeTrailColor(PlayerId(), e, t, r);
    }
    startTeleport(e, t, r, n, i, a, o) {
      StartPlayerTeleport(PlayerId(), e, t, r, n, i ?? false, a ?? false, o ?? true);
    }
    isTeleportActive() {
      return IsPlayerTeleportActive();
    }
    stopTeleport() {
      StopPlayerTeleport();
    }
    setHealthRechargeMultiplier(e) {
      SetPlayerHealthRechargeMultiplier(PlayerId(), e);
    }
    setMaxArmour(e) {
      SetPlayerMaxArmour(PlayerId(), e);
    }
    setFallDistance(e) {
      SetPlayerFallDistance(PlayerId(), e);
    }
    restoreStamina(e) {
      RestorePlayerStamina(PlayerId(), e ?? 1);
    }
    resetStamina() {
      ResetPlayerStamina(PlayerId());
    }
    changePed(e, t, r) {
      ChangePlayerPed(PlayerId(), e, t ?? false, r ?? true);
    }
    getRgbColour() {
      const e = GetPlayerRgbColour(PlayerId());
      return {
        r: e[1],
        g: e[2],
        b: e[3]
      };
    }
    getWantedLevelRadius() {
      return GetWantedLevelRadius(PlayerId());
    }
    getWantedCentrePosition() {
      return za(GetPlayerWantedCentrePosition(PlayerId()));
    }
    getWantedLevelThreshold(e) {
      return GetWantedLevelThreshold(e);
    }
    setWantedLevelNoDrop(e, t) {
      SetPlayerWantedLevelNoDrop(PlayerId(), e, t ?? false);
    }
    setWantedLevelNow(e) {
      SetPlayerWantedLevelNow(PlayerId(), e ?? false);
    }
    areFlashingStarsAboutToDrop() {
      return ArePlayerFlashingStarsAboutToDrop(PlayerId());
    }
    areStarsGreyedOut() {
      return ArePlayerStarsGreyedOut(PlayerId());
    }
    setDispatchCopsFor(e) {
      SetDispatchCopsForPlayer(PlayerId(), e);
    }
    isPressingHorn() {
      return IsPlayerPressingHorn(PlayerId());
    }
    setControl(e, t) {
      SetPlayerControl(PlayerId(), e, t);
    }
    setMaxWantedLevel(e) {
      SetMaxWantedLevel(e);
    }
    setPoliceRadarBlips(e) {
      SetPoliceRadarBlips(e);
    }
    setPoliceIgnore(e) {
      SetPoliceIgnorePlayer(PlayerId(), e);
    }
    isPlaying() {
      return IsPlayerPlaying(PlayerId());
    }
    setEveryoneIgnore(e) {
      SetEveryoneIgnorePlayer(PlayerId(), e);
    }
    setAllRandomPedsFlee(e) {
      SetAllRandomPedsFlee(PlayerId(), e);
    }
    setAllRandomPedsFleeThisFrame() {
      SetAllRandomPedsFleeThisFrame(PlayerId());
    }
    setIgnoreLowPriorityShockingEvents(e) {
      SetIgnoreLowPriorityShockingEvents(PlayerId(), e);
    }
    setWantedLevelMultiplier(e) {
      SetWantedLevelMultiplier(e);
    }
    setWantedLevelDifficulty(e) {
      SetWantedLevelDifficulty(PlayerId(), e);
    }
    resetWantedLevelDifficulty() {
      ResetWantedLevelDifficulty(PlayerId());
    }
    startFiringAmnesty(e) {
      StartFiringAmnesty(e);
    }
    reportCrime(e, t) {
      ReportCrime(PlayerId(), e, t);
    }
    reportPoliceSpotted() {
      ReportPoliceSpottedPlayer(PlayerId());
    }
    canStartMission() {
      return CanPlayerStartMission(PlayerId());
    }
    isReadyForCutscene() {
      return IsPlayerReadyForCutscene(PlayerId());
    }
    isTargettingEntity(e) {
      return IsPlayerTargettingEntity(PlayerId(), e);
    }
    getTargetEntity() {
      const e = GetPlayerTargetEntity(PlayerId());
      if (Array.isArray(e)) {
        if (e[0]) {
          return e[1];
        } else {
          return 0;
        }
      } else {
        return e;
      }
    }
    isFreeAiming() {
      return IsPlayerFreeAiming(PlayerId());
    }
    isFreeAimingAtEntity(e) {
      return IsPlayerFreeAimingAtEntity(PlayerId(), e);
    }
    setLockonRangeOverride(e) {
      SetPlayerLockonRangeOverride(PlayerId(), e);
    }
    setCanDoDriveBy(e) {
      SetPlayerCanDoDriveBy(PlayerId(), e);
    }
    setCanBeHassledByGangs(e) {
      SetPlayerCanBeHassledByGangs(PlayerId(), e);
    }
    setCanUseCover(e) {
      SetPlayerCanUseCover(PlayerId(), e);
    }
    getMaxWantedLevel() {
      return GetMaxWantedLevel();
    }
    isTargettingAnything() {
      return IsPlayerTargettingAnything(PlayerId());
    }
    setSprint(e) {
      SetPlayerSprint(PlayerId(), e);
    }
    getSprintStaminaRemaining() {
      return GetPlayerSprintStaminaRemaining(PlayerId());
    }
    getSprintTimeRemaining() {
      return GetPlayerSprintTimeRemaining(PlayerId());
    }
    getUnderwaterTimeRemaining() {
      return GetPlayerUnderwaterTimeRemaining(PlayerId());
    }
    getGroup() {
      return GetPlayerGroup(PlayerId());
    }
    getMaxArmour() {
      return GetPlayerMaxArmour(PlayerId());
    }
    isControlOn() {
      return IsPlayerControlOn(PlayerId());
    }
    isScriptControlOn() {
      return IsPlayerScriptControlOn(PlayerId());
    }
    isClimbing() {
      return IsPlayerClimbing(PlayerId());
    }
    isBeingArrested(e) {
      return IsPlayerBeingArrested(PlayerId(), e ?? false);
    }
    resetArrestState() {
      ResetPlayerArrestState(PlayerId());
    }
    getPlayersLastVehicle() {
      return GetPlayersLastVehicle();
    }
    intToParticipantindex(e) {
      return IntToParticipantindex(e);
    }
    isFreeForAmbientTask() {
      return IsPlayerFreeForAmbientTask(PlayerId());
    }
    networkIdToInt() {
      return NetworkPlayerIdToInt();
    }
    hasForceCleanupOccurred(e) {
      return HasForceCleanupOccurred(e);
    }
    forceCleanup(e) {
      ForceCleanup(e);
    }
    forceCleanupForAllThreadsWithThisName(e, t) {
      ForceCleanupForAllThreadsWithThisName(e, t);
    }
    forceCleanupForThreadWithThisId(e, t) {
      ForceCleanupForThreadWithThisId(e, t);
    }
    getCauseOfMostRecentForceCleanup() {
      return GetCauseOfMostRecentForceCleanup();
    }
    setMayOnlyEnterThisVehicle(e) {
      SetPlayerMayOnlyEnterThisVehicle(PlayerId(), e);
    }
    setMayNotEnterAnyVehicle() {
      SetPlayerMayNotEnterAnyVehicle(PlayerId());
    }
    giveAchievementTo(e) {
      return GiveAchievementToPlayer(e);
    }
    setAchievementProgress(e, t) {
      return SetAchievementProgress(e, t);
    }
    getAchievementProgress(e) {
      return GetAchievementProgress(e);
    }
    hasAchievementBeenPassed(e) {
      return HasAchievementBeenPassed(e);
    }
    isOnline() {
      return IsPlayerOnline();
    }
    isLoggingInNp() {
      return IsPlayerLoggingInNp();
    }
    displaySystemSigninUi(e) {
      DisplaySystemSigninUi(e);
    }
    isSystemUiBeingDisplayed() {
      return IsSystemUiBeingDisplayed();
    }
    setInvincible(e) {
      SetPlayerInvincible(PlayerId(), e);
    }
    getInvincible() {
      return GetPlayerInvincible(PlayerId());
    }
    removeHelmet(e) {
      RemovePlayerHelmet(PlayerId(), e);
    }
    giveRagdollControl(e) {
      GivePlayerRagdollControl(PlayerId(), e);
    }
    setLockon(e) {
      SetPlayerLockon(PlayerId(), e);
    }
    setTargetingMode(e) {
      SetPlayerTargetingMode(e);
    }
    setTargetLevel(e) {
      SetPlayerTargetLevel(e);
    }
    clearHasDamagedAtLeastOnePed() {
      ClearPlayerHasDamagedAtLeastOnePed(PlayerId());
    }
    hasDamagedAtLeastOnePed() {
      return HasPlayerDamagedAtLeastOnePed(PlayerId());
    }
    clearHasDamagedAtLeastOneNonAnimalPed() {
      ClearPlayerHasDamagedAtLeastOneNonAnimalPed(PlayerId());
    }
    hasDamagedAtLeastOneNonAnimalPed() {
      return HasPlayerDamagedAtLeastOneNonAnimalPed(PlayerId());
    }
    setAirDragMultiplierForPlayersVehicle(e) {
      SetAirDragMultiplierForPlayersVehicle(PlayerId(), e);
    }
    setSwimMultiplierFor(e) {
      SetSwimMultiplierForPlayer(PlayerId(), e);
    }
    setRunSprintMultiplierFor(e) {
      SetRunSprintMultiplierForPlayer(PlayerId(), e);
    }
    getTimeSinceLastArrest() {
      return GetTimeSinceLastArrest();
    }
    getTimeSinceLastDeath() {
      return GetTimeSinceLastDeath();
    }
    assistedMovementCloseRoute() {
      AssistedMovementCloseRoute();
    }
    assistedMovementFlushRoute() {
      AssistedMovementFlushRoute();
    }
    setForcedAim(e) {
      SetPlayerForcedAim(PlayerId(), e);
    }
    setForcedZoom(e) {
      SetPlayerForcedZoom(PlayerId(), e);
    }
    setForceSkipAimIntro(e) {
      SetPlayerForceSkipAimIntro(PlayerId(), e);
    }
    setDisableAmbientMeleeMove(e) {
      SetDisableAmbientMeleeMove(PlayerId(), e);
    }
    specialAbilityDeactivateFast() {
      SpecialAbilityDeactivateFast(PlayerId());
    }
    specialAbilityReset() {
      SpecialAbilityReset(PlayerId());
    }
    specialAbilityChargeOnMissionFailed() {
      SpecialAbilityChargeOnMissionFailed(PlayerId());
    }
    specialAbilityChargeSmall(e, t) {
      SpecialAbilityChargeSmall(PlayerId(), e, t);
    }
    specialAbilityChargeMedium(e, t) {
      SpecialAbilityChargeMedium(PlayerId(), e, t);
    }
    specialAbilityChargeLarge(e, t) {
      SpecialAbilityChargeLarge(PlayerId(), e, t);
    }
    specialAbilityChargeContinuous(e) {
      SpecialAbilityChargeContinuous(PlayerId(), e);
    }
    specialAbilityChargeAbsolute(e, t) {
      SpecialAbilityChargeAbsolute(PlayerId(), e, t);
    }
    specialAbilityChargeNormalized(e, t) {
      SpecialAbilityChargeNormalized(PlayerId(), e, t);
    }
    specialAbilityFillMeter(e) {
      SpecialAbilityFillMeter(PlayerId(), e);
    }
    specialAbilityDepleteMeter(e) {
      SpecialAbilityDepleteMeter(PlayerId(), e);
    }
    specialAbilityLock(e) {
      SpecialAbilityLock(e);
    }
    specialAbilityUnlock(e) {
      SpecialAbilityUnlock(e);
    }
    isSpecialAbilityUnlocked(e) {
      return IsSpecialAbilityUnlocked(e);
    }
    isSpecialAbilityMeterFull() {
      return IsSpecialAbilityMeterFull(PlayerId());
    }
    enableSpecialAbility(e) {
      EnableSpecialAbility(PlayerId(), e);
    }
    isSpecialAbilityEnabled() {
      return IsSpecialAbilityEnabled(PlayerId());
    }
    setSpecialAbilityMultiplier(e) {
      SetSpecialAbilityMultiplier(e);
    }
    updateTeleport() {
      return UpdatePlayerTeleport(PlayerId());
    }
    getCurrentStealthNoise() {
      return GetPlayerCurrentStealthNoise(PlayerId());
    }
    setWeaponDefenseModifier(e) {
      SetPlayerWeaponDefenseModifier(PlayerId(), e);
    }
    setMeleeWeaponDefenseModifier(e) {
      SetPlayerMeleeWeaponDefenseModifier(PlayerId(), e);
    }
    setVehicleDamageModifier(e) {
      SetPlayerVehicleDamageModifier(PlayerId(), e);
    }
    setVehicleDefenseModifier(e) {
      SetPlayerVehicleDefenseModifier(PlayerId(), e);
    }
    setReserveParachuteTintIndex(e) {
      SetPlayerReserveParachuteTintIndex(PlayerId(), e);
    }
    getReserveParachuteTintIndex() {
      const e = GetPlayerReserveParachuteTintIndex(PlayerId());
      if (Array.isArray(e)) {
        return e[1];
      } else {
        return e;
      }
    }
    setParachutePackTintIndex(e) {
      SetPlayerParachutePackTintIndex(PlayerId(), e);
    }
    getParachutePackTintIndex() {
      const e = GetPlayerParachutePackTintIndex(PlayerId());
      if (Array.isArray(e)) {
        return e[1];
      } else {
        return e;
      }
    }
    setHasReserveParachute() {
      SetPlayerHasReserveParachute(PlayerId());
    }
    getHasReserveParachute() {
      return GetPlayerHasReserveParachute(PlayerId());
    }
    setCanLeaveParachuteSmokeTrail(e) {
      SetPlayerCanLeaveParachuteSmokeTrail(PlayerId(), e);
    }
    getParachuteSmokeTrailColor() {
      const e = GetPlayerParachuteSmokeTrailColor(PlayerId());
      return {
        r: e[1],
        g: e[2],
        b: e[3]
      };
    }
    setNoiseMultiplier(e) {
      SetPlayerNoiseMultiplier(PlayerId(), e);
    }
    setSneakingNoiseMultiplier(e) {
      SetPlayerSneakingNoiseMultiplier(PlayerId(), e);
    }
    canPedHear(e) {
      return CanPedHearPlayer(PlayerId(), e);
    }
    simulateInputGait(e, t, r, n, i) {
      SimulatePlayerInputGait(PlayerId(), e, t, r, n, i);
    }
    resetInputGait() {
      ResetPlayerInputGait(PlayerId());
    }
    setAutoGiveParachuteWhenEnterPlane(e) {
      SetAutoGiveParachuteWhenEnterPlane(PlayerId(), e);
    }
    setAutoGiveScubaGearWhenExitVehicle(e) {
      SetAutoGiveScubaGearWhenExitVehicle(PlayerId(), e);
    }
    setStealthPerceptionModifier(e) {
      SetPlayerStealthPerceptionModifier(PlayerId(), e);
    }
    setSimulateAiming(e) {
      SetPlayerSimulateAiming(PlayerId(), e);
    }
    setClothPinFrames(e) {
      SetPlayerClothPinFrames(PlayerId(), e);
    }
    setClothPackageIndex(e) {
      SetPlayerClothPackageIndex(e);
    }
    setClothLockCounter(e) {
      SetPlayerClothLockCounter(e);
    }
    hasBeenSpottedInStolenVehicle() {
      return HasPlayerBeenSpottedInStolenVehicle(PlayerId());
    }
    isBattleAware() {
      return IsPlayerBattleAware(PlayerId());
    }
    extendWorldBoundaryFor(e, t, r) {
      ExtendWorldBoundaryForPlayer(e, t, r);
    }
    resetWorldBoundaryFor() {
      ResetWorldBoundaryForPlayer();
    }
    isRidingTrain() {
      return IsPlayerRidingTrain(PlayerId());
    }
    hasLeftTheWorld() {
      return HasPlayerLeftTheWorld(PlayerId());
    }
    setLeavePedBehind(e) {
      SetPlayerLeavePedBehind(PlayerId(), e);
    }
    setParachuteVariationOverride(e, t, r, n) {
      SetPlayerParachuteVariationOverride(PlayerId(), e, t, r, n);
    }
    clearParachuteVariationOverride() {
      ClearPlayerParachuteVariationOverride(PlayerId());
    }
    setParachuteModelOverride(e) {
      SetPlayerParachuteModelOverride(PlayerId(), e);
    }
    clearParachuteModelOverride() {
      ClearPlayerParachuteModelOverride(PlayerId());
    }
    setParachutePackModelOverride(e) {
      SetPlayerParachutePackModelOverride(PlayerId(), e);
    }
    clearParachutePackModelOverride() {
      ClearPlayerParachutePackModelOverride(PlayerId());
    }
    disableVehicleRewards() {
      DisablePlayerVehicleRewards(PlayerId());
    }
    setBluetoothState(e) {
      SetPlayerBluetoothState(PlayerId(), e);
    }
    isBluetoothEnable() {
      return IsPlayerBluetoothEnable(PlayerId());
    }
    getFakeWantedLevel() {
      return GetFakeWantedLevel();
    }
    setReserveParachuteModelOverride(e) {
      SetPlayerReserveParachuteModelOverride(PlayerId(), e);
    }
    getParachuteModelOverride() {
      return GetPlayerParachuteModelOverride(PlayerId());
    }
    getReserveParachuteModelOverride() {
      return GetPlayerReserveParachuteModelOverride(PlayerId());
    }
    clearReserveParachuteModelOverride() {
      ClearPlayerReserveParachuteModelOverride(PlayerId());
    }
    playerAttachVirtualBound(e, t, r, n, i, a, o, s) {
      PlayerAttachVirtualBound(e, t, r, n, i, a, o, s);
    }
    reserveEntityExplodesOnHighExplosionCombo(e) {
      ReserveEntityExplodesOnHighExplosionCombo(PlayerId(), e);
    }
    getNumberOfS() {
      return GetNumberOfPlayers();
    }
    setWantedCentrePosition(e, t) {
      return za(SetPlayerWantedCentrePosition(PlayerId(), e, t));
    }
    switchCrimeType(e) {
      SwitchCrimeType(PlayerId(), e);
    }
    isDead() {
      return IsPlayerDead(PlayerId());
    }
    intToIndex(e) {
      return IntToPlayerindex(e);
    }
    getTimeSinceHitVehicle() {
      return GetTimeSincePlayerHitVehicle(PlayerId());
    }
    getTimeSinceHitPed() {
      return GetTimeSincePlayerHitPed(PlayerId());
    }
    getTimeSinceDroveOnPavement() {
      return GetTimeSincePlayerDroveOnPavement(PlayerId());
    }
    getTimeSinceDroveAgainstTraffic() {
      return GetTimeSincePlayerDroveAgainstTraffic(PlayerId());
    }
    id() {
      return PlayerId();
    }
    pedId() {
      return PlayerPedId();
    }
    isCamControlDisabled() {
      return IsPlayerCamControlDisabled();
    }
    setUnderwaterTimeRemaining(e) {
      SetPlayerUnderwaterTimeRemaining(PlayerId(), e);
    }
    setInvincibleKeepRagdollEnabled(e) {
      SetPlayerInvincibleKeepRagdollEnabled(PlayerId(), e);
    }
    setSpecialAbility(e) {
      SetSpecialAbility(PlayerId(), e);
    }
    specialAbilityDeplete() {
      SpecialAbilityDeplete(PlayerId());
    }
    getHealthRechargeLimit() {
      return GetPlayerHealthRechargeLimit(PlayerId());
    }
    setHealthRechargeLimit(e) {
      SetPlayerHealthRechargeLimit(PlayerId(), e);
    }
    setWeaponDefenseModifier2(e) {
      SetPlayerWeaponDefenseModifier_2(PlayerId(), e);
    }
    getParachuteTintIndex() {
      const e = GetPlayerParachuteTintIndex(PlayerId());
      if (Array.isArray(e)) {
        return e[1];
      } else {
        return e;
      }
    }
    setResetFlagPreferRearSeats(e) {
      SetPlayerResetFlagPreferRearSeats(PlayerId(), e);
    }
    attachVirtualBound(e, t, r, n, i, a, o, s) {
      PlayerAttachVirtualBound(e, t, r, n, i, a, o, s);
    }
    detachVirtualBound() {
      PlayerDetachVirtualBound();
    }
    setHomingRocketDisabled(e) {
      SetPlayerHomingRocketDisabled(PlayerId(), e);
    }
    intToindex(e) {
      return IntToPlayerindex(e);
    }
    setAirDragMultiplierForsVehicle(e) {
      SetAirDragMultiplierForPlayersVehicle(PlayerId(), e);
    }
    setHudAnimStopLevel(e) {
      SetHudAnimStopLevel(PlayerId(), e);
    }
    setAreasGeneratorOrientation() {
      SetAreasGeneratorOrientation(PlayerId());
    }
    getWantedLevelParoleDuration() {
      return GetWantedLevelParoleDuration();
    }
    setWantedLevelHiddenEvasionTime(e, t) {
      SetWantedLevelHiddenEvasionTime(PlayerId(), e, t);
    }
    hasTeleportFinished() {
      return HasPlayerTeleportFinished(PlayerId());
    }
    getEntityIsFreeAimingAtRaw() {
      const [e, t] = GetEntityPlayerIsFreeAimingAt(PlayerId());
      if (e) {
        return t;
      } else {
        return undefined;
      }
    }
  }
  class Xa {
    constructor() {
      this.unk = ja();
    }
    create(e, t, r, n, i, a, o) {
      return CreateVehicle(e, t, r, n, i, a ?? true, o ?? false);
    }
    delete(e) {
      DeleteVehicle(e);
    }
    setDoorsLocked(e, t) {
      SetVehicleDoorsLocked(e, t);
    }
    setDoorOpen(e, t, r, n) {
      SetVehicleDoorOpen(e, t, r, n);
    }
    setDoorShut(e, t, r) {
      SetVehicleDoorShut(e, t, r);
    }
    removeWindow(e, t) {
      RemoveVehicleWindow(e, t);
    }
    rollDownWindow(e, t) {
      RollDownWindow(e, t);
    }
    rollUpWindow(e, t) {
      RollUpWindow(e, t);
    }
    smashWindow(e, t) {
      SmashVehicleWindow(e, t);
    }
    fixWindow(e, t) {
      FixVehicleWindow(e, t);
    }
    setColours(e, t, r) {
      SetVehicleColours(e, t, r);
    }
    getColours(e) {
      const [t, r] = GetVehicleColours(e);
      return {
        primary: t,
        secondary: r
      };
    }
    setCustomPrimaryColour(e, t, r, n) {
      SetVehicleCustomPrimaryColour(e, t, r, n);
    }
    getCustomPrimaryColour(e) {
      const [t, r, n] = GetVehicleCustomPrimaryColour(e);
      return {
        r: t,
        g: r,
        b: n
      };
    }
    setCustomSecondaryColour(e, t, r, n) {
      SetVehicleCustomSecondaryColour(e, t, r, n);
    }
    getCustomSecondaryColour(e) {
      const [t, r, n] = GetVehicleCustomSecondaryColour(e);
      return {
        r: t,
        g: r,
        b: n
      };
    }
    setNeonLightsColour(e, t, r, n) {
      SetVehicleNeonLightsColour(e, t, r, n);
    }
    getNeonLightsColour(e) {
      const [t, r, n] = GetVehicleNeonLightsColour(e);
      return {
        r: t,
        g: r,
        b: n
      };
    }
    setExtraColours(e, t, r) {
      SetVehicleExtraColours(e, t, r);
    }
    getExtraColours(e) {
      const [t, r] = GetVehicleExtraColours(e);
      return {
        pearlescent: t,
        wheel: r
      };
    }
    setTyreSmokeColor(e, t, r, n) {
      SetVehicleTyreSmokeColor(e, t, r, n);
    }
    getTyreSmokeColor(e) {
      const [t, r, n] = GetVehicleTyreSmokeColor(e);
      return {
        r: t,
        g: r,
        b: n
      };
    }
    getColor(e) {
      const [t, r, n] = GetVehicleColor(e);
      return {
        r: t,
        g: r,
        b: n
      };
    }
    setColourCombination(e, t) {
      SetVehicleColourCombination(e, t);
    }
    getColourCombination(e) {
      return GetVehicleColourCombination(e);
    }
    clearCustomPrimaryColour(e) {
      ClearVehicleCustomPrimaryColour(e);
    }
    clearCustomSecondaryColour(e) {
      ClearVehicleCustomSecondaryColour(e);
    }
    setEngineOn(e, t, r, n) {
      SetVehicleEngineOn(e, t, r ?? false, n ?? false);
    }
    setEngineHealth(e, t) {
      SetVehicleEngineHealth(e, t);
    }
    getEngineHealth(e) {
      return GetVehicleEngineHealth(e);
    }
    setPlaneEngineHealth(e, t) {
      SetPlaneEngineHealth(e, t);
    }
    setMaxSpeed(e, t) {
      SetEntityMaxSpeed(e, t);
    }
    modifyTopSpeed(e, t) {
      ModifyVehicleTopSpeed(e, t);
    }
    setForwardSpeed(e, t) {
      SetVehicleForwardSpeed(e, t);
    }
    getEstimatedMaxSpeed(e) {
      return GetVehicleEstimatedMaxSpeed(e);
    }
    getMaxBraking(e) {
      return GetVehicleMaxBraking(e);
    }
    getMaxTraction(e) {
      return GetVehicleMaxTraction(e);
    }
    getAcceleration(e) {
      return GetVehicleAcceleration(e);
    }
    getModelEstimatedMaxSpeed(e) {
      return GetVehicleModelEstimatedMaxSpeed(e);
    }
    getModelMaxBraking(e) {
      return GetVehicleModelMaxBraking(e);
    }
    getModelMaxBrakingMaxMods(e) {
      return GetVehicleModelMaxBrakingMaxMods(e);
    }
    getModelMaxTraction(e) {
      return GetVehicleModelMaxTraction(e);
    }
    getModelAcceleration(e) {
      return GetVehicleModelAcceleration(e);
    }
    getClassEstimatedMaxSpeed(e) {
      return GetVehicleClassEstimatedMaxSpeed(e);
    }
    getClassMaxTraction(e) {
      return GetVehicleClassMaxTraction(e);
    }
    getClassMaxAgility(e) {
      return GetVehicleClassMaxAgility(e);
    }
    getClassMaxAcceleration(e) {
      return GetVehicleClassMaxAcceleration(e);
    }
    getClassMaxBraking(e) {
      return GetVehicleClassMaxBraking(e);
    }
    getVehicleModelMaxBraking(e) {
      return GetVehicleModelMaxBraking(e);
    }
    getVehicleModelMaxTraction(e) {
      return GetVehicleModelMaxTraction(e);
    }
    getVehicleModelAcceleration(e) {
      return GetVehicleModelAcceleration(e);
    }
    getVehicleClassMaxTraction(e) {
      return GetVehicleClassMaxTraction(e);
    }
    getVehicleClassMaxAgility(e) {
      return GetVehicleClassMaxAgility(e);
    }
    getVehicleClassMaxAcceleration(e) {
      return GetVehicleClassMaxAcceleration(e);
    }
    getVehicleClassMaxBraking(e) {
      return GetVehicleClassMaxBraking(e);
    }
    setFixed(e) {
      SetVehicleFixed(e);
    }
    setDeformationFixed(e) {
      SetVehicleDeformationFixed(e);
    }
    setDamage(e, t, r, n, i, a, o) {
      SetVehicleDamage(e, t, r, n, i, a, o ?? true);
    }
    getPetrolTankHealth(e) {
      return GetVehiclePetrolTankHealth(e);
    }
    setPetrolTankHealth(e, t) {
      SetVehiclePetrolTankHealth(e, t);
    }
    getBodyHealth(e) {
      return GetVehicleBodyHealth(e);
    }
    setBodyHealth(e, t) {
      SetVehicleBodyHealth(e, t);
    }
    getDeformationAtPos(e, t, r, n) {
      return za(GetVehicleDeformationAtPos(e, t, r, n));
    }
    copyDamages(e, t) {
      CopyVehicleDamages(e, t);
    }
    getDirtLevel(e) {
      return GetVehicleDirtLevel(e);
    }
    setDirtLevel(e, t) {
      SetVehicleDirtLevel(e, t);
    }
    setLights(e, t) {
      SetEntityLights(e, t);
    }
    setUsePlayerLightSettings(e, t) {
      SetVehicleUsePlayerLightSettings(e, t);
    }
    setFullbeam(e, t) {
      SetVehicleFullbeam(e, t);
    }
    setIndicatorLights(e, t, r) {
      SetVehicleIndicatorLights(e, t, r);
    }
    setBrakeLights(e, t) {
      SetVehicleBrakeLights(e, t);
    }
    setInteriorlight(e, t) {
      SetVehicleInteriorlight(e, t);
    }
    setLightMultiplier(e, t) {
      SetVehicleLightMultiplier(e, t);
    }
    setSiren(e, t) {
      SetVehicleSiren(e, t);
    }
    isSirenOn(e) {
      return IsVehicleSirenOn(e);
    }
    isSirenAudioOn(e) {
      return IsVehicleSirenAudioOn(e);
    }
    setHasMutedSirens(e, t) {
      SetVehicleHasMutedSirens(e, t);
    }
    setNeonLightEnabled(e, t, r) {
      SetVehicleNeonLightEnabled(e, t, r);
    }
    isNeonLightEnabled(e, t) {
      return IsVehicleNeonLightEnabled(e, t);
    }
    getLightsState(e) {
      const [t, r, n] = GetVehicleLightsState(e);
      return {
        lightsOn: !!r,
        highbeamsOn: !!n,
        result: !!t
      };
    }
    setHasUnbreakableLights(e, t) {
      SetVehicleHasUnbreakableLights(e, t);
    }
    setTaxiLights(e, t) {
      SetTaxiLights(e, t);
    }
    isTaxiLightOn(e) {
      return IsTaxiLightOn(e);
    }
    setMod(e, t, r, n) {
      SetVehicleMod(e, t, r, n ?? false);
    }
    getMod(e, t) {
      return GetVehicleMod(e, t);
    }
    getModVariation(e, t) {
      return GetVehicleModVariation(e, t);
    }
    removeMod(e, t) {
      RemoveVehicleMod(e, t);
    }
    preloadMod(e, t, r) {
      PreloadVehicleMod(e, t, r);
    }
    hasPreloadModsFinished(e) {
      return HasPreloadModsFinished(e);
    }
    releasePreloadMods(e) {
      ReleasePreloadMods(e);
    }
    getModTextLabel(e, t, r) {
      return GetModTextLabel(e, t, r);
    }
    getModSlotName(e, t) {
      return GetModSlotName(e, t);
    }
    getModModifierValue(e, t, r) {
      return GetVehicleModModifierValue(e, t, r);
    }
    getModIdentifierHash(e, t, r) {
      return GetVehicleModIdentifierHash(e, t, r);
    }
    haveModsStreamedIn(e) {
      return HaveVehicleModsStreamedIn(e);
    }
    getNumModKits(e) {
      return GetNumModKits(e);
    }
    setModKit(e, t) {
      SetVehicleModKit(e, t);
    }
    getModKit(e) {
      return GetVehicleModKit(e);
    }
    getModKitType(e) {
      return GetVehicleModKitType(e);
    }
    getNumModColors(e, t) {
      return GetNumModColors(e, t);
    }
    isToggleModOn(e, t) {
      return IsToggleModOn(e, t);
    }
    setModColor1(e, t, r, n) {
      SetVehicleModColor_1(e, t, r, n);
    }
    setModColor2(e, t, r) {
      SetVehicleModColor_2(e, t, r);
    }
    setLivery(e, t) {
      SetVehicleLivery(e, t);
    }
    getLivery(e) {
      return GetVehicleLivery(e);
    }
    getLiveryCount(e) {
      return GetVehicleLiveryCount(e);
    }
    getLiveryName(e, t) {
      return GetLiveryName(e, t);
    }
    toggleMod(e, t, r) {
      ToggleVehicleMod(e, t, r);
    }
    setTyreBurst(e, t, r, n) {
      SetVehicleTyreBurst(e, t, r ?? false, n ?? 1000);
    }
    setTyreFixed(e, t) {
      SetVehicleTyreFixed(e, t);
    }
    isTyreBurst(e, t, r) {
      return IsVehicleTyreBurst(e, t, r);
    }
    setTyresCanBurst(e, t) {
      SetVehicleTyresCanBurst(e, t);
    }
    getTyresCanBurst(e) {
      return GetVehicleTyresCanBurst(e);
    }
    setWheelsCanBreak(e, t) {
      SetVehicleWheelsCanBreak(e, t);
    }
    setWheelsCanBreakOffWhenBlowUp(e, t) {
      SetVehicleWheelsCanBreakOffWhenBlowUp(e, t);
    }
    setCanDeformWheels(e, t) {
      SetVehicleCanDeformWheels(e, t);
    }
    resetWheels(e, t) {
      ResetVehicleWheels(e, t);
    }
    attachToTrailer(e, t, r) {
      AttachVehicleToTrailer(e, t, r);
    }
    detachFromTrailer(e) {
      DetachVehicleFromTrailer(e);
    }
    isAttachedToTrailer(e) {
      return IsVehicleAttachedToTrailer(e);
    }
    getTrailerVehicle(e) {
      const [t, r] = GetVehicleTrailerVehicle(e);
      if (t) {
        return r;
      } else {
        return 0;
      }
    }
    setTrailerInverseMassScale(e, t) {
      SetTrailerInverseMassScale(e, t);
    }
    setTrailerLegsRaised(e) {
      SetTrailerLegsRaised(e);
    }
    setTrailerLegsLowered(e) {
      SetTrailerLegsLowered(e);
    }
    attachToTowTruck(e, t, r, n, i, a) {
      AttachVehicleToTowTruck(e, t, r, n, i, a);
    }
    detachFromTowTruck(e, t) {
      DetachVehicleFromTowTruck(e, t);
    }
    detachFromAnyTowTruck(e) {
      return DetachVehicleFromAnyTowTruck(e);
    }
    isAttachedToTowTruck(e, t) {
      return IsVehicleAttachedToTowTruck(e, t);
    }
    getEntityAttachedToTowTruck(e) {
      return GetEntityAttachedToTowTruck(e);
    }
    setTowTruckArmPosition(e, t) {
      SetVehicleTowTruckArmPosition(e, t);
    }
    setDisableTowing(e, t) {
      SetVehicleDisableTowing(e, t);
    }
    getNumberOfPassengers(e) {
      return GetVehicleNumberOfPassengers(e);
    }
    getMaxNumberOfPassengers(e) {
      return GetVehicleMaxNumberOfPassengers(e);
    }
    getModelNumberOfSeats(e) {
      return GetVehicleModelNumberOfSeats(e);
    }
    getPedInSeat(e, t, r) {
      return GetPedInVehicleSeat(e, t);
    }
    isSeatFree(e, t, r) {
      return IsVehicleSeatFree(e, t, r ?? false);
    }
    isSeatWarpOnly(e, t) {
      return IsSeatWarpOnly(e, t);
    }
    isTurretSeat(e, t) {
      return IsTurretSeat(e, t);
    }
    canShuffleSeat(e, t) {
      return CanShuffleSeat(e, t);
    }
    doesAllowRappel(e) {
      return DoesVehicleAllowRappel(e);
    }
    setNumberPlateText(e, t) {
      SetVehicleNumberPlateText(e, t);
    }
    getNumberPlateText(e) {
      return GetVehicleNumberPlateText(e);
    }
    setAlarm(e, t) {
      SetVehicleAlarm(e, !!t);
    }
    isAlarmActivated(e) {
      return IsVehicleAlarmActivated(e);
    }
    setHandbrake(e, t) {
      SetVehicleHandbrake(e, t);
    }
    setBrake(e, t) {
      SetVehicleBrake(e, t);
    }
    setBurnout(e, t) {
      SetVehicleBurnout(e, t);
    }
    isInBurnout(e) {
      return IsVehicleInBurnout(e);
    }
    setHydraulicRaised(e, t) {
      SetHydraulicRaised(e, t);
    }
    isOnAllWheels(e) {
      return IsVehicleOnAllWheels(e);
    }
    isStolen(e) {
      return IsVehicleStolen(e);
    }
    setIsStolen(e, t) {
      SetVehicleIsStolen(e, t);
    }
    getIsEngineRunning(e) {
      return GetIsVehicleEngineRunning(e);
    }
    isModel(e, t) {
      return IsVehicleModel(e, t);
    }
    isStopped(e) {
      return IsVehicleStopped(e);
    }
    isStuckOnRoof(e) {
      return IsVehicleStuckOnRoof(e);
    }
    isDriveable(e, t) {
      return IsVehicleDriveable(e, t);
    }
    isBig(e) {
      return IsBigVehicle(e);
    }
    isStoppedAtTrafficLights(e) {
      return IsVehicleStoppedAtTrafficLights(e);
    }
    isSearchlightOn(e) {
      return IsVehicleSearchlightOn(e);
    }
    setSearchlight(e, t, r) {
      SetVehicleSearchlight(e, t, r);
    }
    doesHaveSearchlight(e) {
      return DoesVehicleHaveSearchlight(e);
    }
    doesHaveRoof(e) {
      return DoesVehicleHaveRoof(e);
    }
    isVisible(e) {
      return IsEntityVisible(e);
    }
    trackVisibility(e) {
      TrackVehicleVisibility(e);
    }
    setUndriveable(e, t) {
      SetVehicleUndriveable(e, t);
    }
    setProvidesCover(e, t) {
      SetVehicleProvidesCover(e, t);
    }
    setStrong(e, t) {
      SetVehicleStrong(e, t);
    }
    setHasStrongAxles(e, t) {
      SetVehicleHasStrongAxles(e, t);
    }
    setCanBreak(e, t) {
      SetVehicleCanBreak(e, t);
    }
    setCanBeTargetted(e, t) {
      SetVehicleCanBeTargetted(e, t);
    }
    setCanBeVisiblyDamaged(e, t) {
      SetVehicleCanBeVisiblyDamaged(e, t);
    }
    setCanRespray(e, t) {
      SetCanResprayVehicle(e, t);
    }
    setCanLeakOil(e, t) {
      SetVehicleCanLeakOil(e, t);
    }
    setCanLeakPetrol(e, t) {
      SetVehicleCanLeakPetrol(e, t);
    }
    setNeedsToBeHotwired(e, t) {
      SetVehicleNeedsToBeHotwired(e, t);
    }
    setHasBeenOwnedByPlayer(e, t) {
      SetVehicleHasBeenOwnedByPlayer(e, t);
    }
    setIsWanted(e, t) {
      SetVehicleIsWanted(e, t);
    }
    setIsConsideredByPlayer(e, t) {
      SetVehicleIsConsideredByPlayer(e, t);
    }
    setExplodesOnHighExplosionDamage(e, t) {
      SetVehicleExplodesOnHighExplosionDamage(e, t);
    }
    setDropsMoneyWhenBlownUp(e, t) {
      SetVehicleDropsMoneyWhenBlownUp(e, t);
    }
    setEnveffScale(e, t) {
      SetVehicleEnveffScale(e, t);
    }
    getEnveffScale(e) {
      return GetVehicleEnveffScale(e);
    }
    setGravity(e, t) {
      SetVehicleGravity(e, t);
    }
    setLodMultiplier(e, t) {
      SetVehicleLodMultiplier(e, t);
    }
    setSteerBias(e, t) {
      SetVehicleSteerBias(e, t);
    }
    setReduceGrip(e, t) {
      SetVehicleReduceGrip(e, t);
    }
    setCheatPowerIncrease(e, t) {
      SetVehicleCheatPowerIncrease(e, t);
    }
    setFrictionOverride(e, t) {
      SetVehicleFrictionOverride(e, t);
    }
    setEngineCanDegrade(e, t) {
      SetVehicleEngineCanDegrade(e, t);
    }
    setForceHd(e, t) {
      SetForceHdVehicle(e, t);
    }
    setCanSaveInGarage(e, t) {
      SetVehicleCanSaveInGarage(e, t);
    }
    setExclusiveDriver(e, t, r) {
      SetVehicleExclusiveDriver(e, t, r);
    }
    setCeilingHeight(e, t) {
      SetVehicleCeilingHeight(e, t);
    }
    clearRouteHistory(e) {
      ClearVehicleRouteHistory(e);
    }
    setUseAlternateHandling(e, t) {
      SetVehicleUseAlternateHandling(e, t);
    }
    setPlayersLast(e) {
      SetPlayersLastVehicle(e);
    }
    setCanBeUsedByFleeingPeds(e, t) {
      SetVehicleCanBeUsedByFleeingPeds(e, t);
    }
    setActiveForPedNavigation(e, t) {
      SetVehicleActiveForPedNavigation(e, t);
    }
    setGeneratesEngineShockingEvents(e, t) {
      SetVehicleGeneratesEngineShockingEvents(e, t);
    }
    setExtendedRemovalRange(e, t) {
      SetVehicleExtendedRemovalRange(e, t);
    }
    setKersAllowed(e, t) {
      SetVehicleKersAllowed(e, t);
    }
    getHasKers(e) {
      return GetVehicleHasKers(e);
    }
    explode(e, t, r) {
      ExplodeVehicle(e, t, r);
    }
    explodeInCutscene(e, t) {
      ExplodeVehicleInCutscene(e, t);
    }
    setOutOfControl(e, t, r) {
      SetVehicleOutOfControl(e, t, r);
    }
    setTimedExplosion(e, t, r) {
      SetVehicleTimedExplosion(e, t, r);
    }
    addPhoneExplosiveDevice(e) {
      AddVehiclePhoneExplosiveDevice(e);
    }
    clearPhoneExplosiveDevice() {
      ClearVehiclePhoneExplosiveDevice();
    }
    hasPhoneExplosiveDevice() {
      return HasVehiclePhoneExplosiveDevice();
    }
    detonatePhoneExplosiveDevice() {
      DetonateVehiclePhoneExplosiveDevice();
    }
    setIndividualDoorsLocked(e, t, r) {
      SetVehicleIndividualDoorsLocked(e, t, r);
    }
    setDoorsLockedForPlayer(e, t, r) {
      SetVehicleDoorsLockedForPlayer(e, t, r);
    }
    getDoorsLockedForPlayer(e, t) {
      return GetVehicleDoorsLockedForPlayer(e, t);
    }
    setDoorsLockedForAllPlayers(e, t) {
      SetVehicleDoorsLockedForAllPlayers(e, t);
    }
    setDoorsLockedForNonScriptPlayers(e, t) {
      SetVehicleDoorsLockedForNonScriptPlayers(e, t);
    }
    setDoorsLockedForTeam(e, t, r) {
      SetVehicleDoorsLockedForTeam(e, t, r);
    }
    getDoorLockStatus(e) {
      return GetVehicleDoorLockStatus(e);
    }
    setDoorsShut(e, t) {
      SetVehicleDoorsShut(e, t);
    }
    setDoorControl(e, t, r, n) {
      SetVehicleDoorControl(e, t, r, n);
    }
    setDoorLatched(e, t, r, n, i) {
      SetVehicleDoorLatched(e, t, r, n, i);
    }
    getDoorAngleRatio(e, t) {
      return GetVehicleDoorAngleRatio(e, t);
    }
    setDoorBroken(e, t, r) {
      SetVehicleDoorBroken(e, t, r);
    }
    isDoorFullyOpen(e, t) {
      return IsVehicleDoorFullyOpen(e, t);
    }
    isDoorDamaged(e, t) {
      return IsVehicleDoorDamaged(e, t);
    }
    getIsDoorValid(e, t) {
      return GetIsDoorValid(e, t);
    }
    setCarBootOpen(e) {
      SetCarBootOpen(e);
    }
    isWindowIntact(e, t) {
      return IsVehicleWindowIntact(e, t);
    }
    isBumperBouncing(e, t) {
      return IsVehicleBumperBouncing(e, t);
    }
    isBumperBrokenOff(e, t) {
      return IsVehicleBumperBrokenOff(e, t);
    }
    getLayoutHash(e) {
      return GetVehicleLayoutHash(e);
    }
    getCauseOfDestruction(e) {
      return GetVehicleCauseOfDestruction(e);
    }
    getPlateType(e) {
      return GetVehiclePlateType(e);
    }
    setWheelType(e, t) {
      SetVehicleWheelType(e, t);
    }
    getWheelType(e) {
      return GetVehicleWheelType(e);
    }
    setWindowTint(e, t) {
      SetVehicleWindowTint(e, t);
    }
    getWindowTint(e) {
      return GetVehicleWindowTint(e);
    }
    setNumberPlateTextIndex(e, t) {
      SetVehicleNumberPlateTextIndex(e, t);
    }
    getNumberPlateTextIndex(e) {
      return GetVehicleNumberPlateTextIndex(e);
    }
    getClass(e) {
      return GetVehicleClass(e);
    }
    getClassFromName(e) {
      return GetVehicleClassFromName(e);
    }
    getDisplayNameFromModel(e) {
      return GetDisplayNameFromVehicleModel(e);
    }
    getDisplayNameFromVehicleModel(e) {
      return GetDisplayNameFromVehicleModel(e);
    }
    setExtra(e, t, r) {
      SetVehicleExtra(e, t, r);
    }
    isExtraTurnedOn(e, t) {
      return IsVehicleExtraTurnedOn(e, t);
    }
    doesExtraExist(e, t) {
      return DoesExtraExist(e, t);
    }
    setConvertibleRoof(e, t) {
      SetConvertibleRoof(e, t);
    }
    lowerConvertibleRoof(e, t) {
      LowerConvertibleRoof(e, t);
    }
    raiseConvertibleRoof(e, t) {
      RaiseConvertibleRoof(e, t);
    }
    getConvertibleRoofState(e) {
      return GetConvertibleRoofState(e);
    }
    isAConvertible(e, t) {
      return IsVehicleAConvertible(e, t);
    }
    setConvertibleRoofLatchState(e, t) {
      SetConvertibleRoofLatchState(e, t);
    }
    setHeliBladesFullSpeed(e) {
      SetHeliBladesFullSpeed(e);
    }
    setHeliBladesSpeed(e, t) {
      SetHeliBladesSpeed(e, t);
    }
    setHeliTurbulenceScalar(e, t) {
      SetHeliTurbulenceScalar(e, t);
    }
    isHeliLandingAreaBlocked(e) {
      return IsHeliLandingAreaBlocked(e);
    }
    isHeliPartBroken(e, t, r, n) {
      return IsHeliPartBroken(e, t, r, n);
    }
    getHeliMainRotorHealth(e) {
      return GetHeliMainRotorHealth(e);
    }
    getHeliTailRotorHealth(e) {
      return GetHeliTailRotorHealth(e);
    }
    getHeliTailBoomHealth(e) {
      return GetHeliTailBoomHealth(e);
    }
    setHeliTailRotorHealth(e, t) {
      SetHeliTailRotorHealth(e, t);
    }
    setHeliMainRotorHealth(e, t) {
      SetHeliMainRotorHealth(e, t);
    }
    isAnyPedRappellingFromHeli(e) {
      return IsAnyPedRappellingFromHeli(e);
    }
    setHelicopterRollPitchYawMult(e, t) {
      SetHelicopterRollPitchYawMult(e, t);
    }
    forceSubmarineSurfaceMode(e, t) {
      ForceSubmarineSurfaceMode(e, t);
    }
    setSubmarineCrushDepths(e, t, r, n, i) {
      SetSubmarineCrushDepths(e, t, r, n, i);
    }
    transformToSubmarine(e, t) {
      return TransformToSubmarine(e, t);
    }
    setBoatAnchor(e, t) {
      SetBoatAnchor(e, t);
    }
    canAnchorBoatHere(e) {
      return CanAnchorBoatHere(e);
    }
    setBoatSinksWhenWrecked(e, t) {
      SetBoatSinksWhenWrecked(e, t);
    }
    setBoatDisableAvoidance(e, t) {
      SetBoatDisableAvoidance(e, t);
    }
    getBoatBoomPositionRatio(e) {
      return GetBoatBoomPositionRatio(e);
    }
    setBikeOnStand(e, t, r) {
      SetBikeOnStand(e, t, r);
    }
    isPlaneLandingGearIntact(e) {
      return IsPlaneLandingGearIntact(e);
    }
    arePlanePropellersIntact(e) {
      return ArePlanePropellersIntact(e);
    }
    setPlaneTurbulenceMultiplier(e, t) {
      SetPlaneTurbulenceMultiplier(e, t);
    }
    disablePlaneAileron(e, t, r) {
      DisablePlaneAileron(e, t, r);
    }
    disableIndividualPlanePropeller(e, t) {
      DisableIndividualPlanePropeller(e, t);
    }
    controlLandingGear(e, t) {
      ControlLandingGear(e, t);
    }
    getLandingGearState(e) {
      return GetLandingGearState(e);
    }
    setFlightNozzlePosition(e, t) {
      SetVehicleFlightNozzlePosition(e, t);
    }
    setFlightNozzlePositionImmediate(e, t) {
      SetVehicleFlightNozzlePositionImmediate(e, t);
    }
    getFlightNozzlePosition(e) {
      return GetVehicleFlightNozzlePosition(e);
    }
    setForceAfterburner(e, t) {
      SetVehicleForceAfterburner(e, t);
    }
    openBombBayDoors(e) {
      OpenBombBayDoors(e);
    }
    closeBombBayDoors(e) {
      CloseBombBayDoors(e);
    }
    setBulldozerArmPosition(e, t, r) {
      SetVehicleBulldozerArmPosition(e, t, r);
    }
    setTankTurretPosition(e, t, r) {
      SetVehicleTankTurretPosition(e, t, r);
    }
    setTurretSpeedThisFrame(e, t) {
      SetVehicleTurretSpeedThisFrame(e, t);
    }
    disableTurretMovementThisFrame(e) {
      DisableVehicleTurretMovementThisFrame(e);
    }
    setForkliftForkHeight(e, t) {
      SetForkliftForkHeight(e, t);
    }
    isEntityAttachedToHandlerFrame(e, t) {
      return IsEntityAttachedToHandlerFrame(e, t);
    }
    isAnyEntityAttachedToHandlerFrame(e) {
      return IsAnyEntityAttachedToHandlerFrame(e);
    }
    detachContainerFromHandlerFrame(e) {
      DetachContainerFromHandlerFrame(e);
    }
    stabiliseEntityAttachedToHeli(e, t, r) {
      StabiliseEntityAttachedToHeli(e, t, r);
    }
    detachFromCargobob(e, t) {
      DetachEntityFromCargobob(t, e);
    }
    detachFromAnyCargobob(e) {
      return DetachVehicleFromAnyCargobob(e);
    }
    detachEntityFromCargobob(e, t) {
      return DetachEntityFromCargobob(e, t);
    }
    isAttachedToCargobob(e, t) {
      return IsVehicleAttachedToCargobob(e, t);
    }
    getAttachedToCargobob(e) {
      return GetEntityAttachedToCargobob(e);
    }
    getEntityAttachedToCargobob(e) {
      return GetEntityAttachedToCargobob(e);
    }
    attachToCargobob(e, t, r, n, i, a) {
      AttachEntityToCargobob(t, e, r, n, i, a);
    }
    attachEntityToCargobob(e, t, r, n, i, a) {
      AttachEntityToCargobob(e, t, r, n, i, a);
    }
    doesCargobobHavePickUpRope(e) {
      return DoesCargobobHavePickUpRope(e);
    }
    createPickUpRopeForCargobob(e, t) {
      CreatePickUpRopeForCargobob(e, t);
    }
    removePickUpRopeForCargobob(e) {
      RemovePickUpRopeForCargobob(e);
    }
    setPickupRopeLengthForCargobob(e, t, r, n) {
      SetPickupRopeLengthForCargobob(e, t, r, n);
    }
    setCargobobPickupRopeDampingMultiplier(e, t) {
      SetCargobobPickupRopeDampingMultiplier(e, t);
    }
    setCargobobPickupRopeType(e, t) {
      SetCargobobPickupRopeType(e, t);
    }
    doesCargobobHavePickupMagnet(e) {
      return DoesCargobobHavePickupMagnet(e);
    }
    setCargobobPickupMagnetActive(e, t) {
      SetCargobobPickupMagnetActive(e, t);
    }
    setCargobobPickupMagnetStrength(e, t) {
      SetCargobobPickupMagnetStrength(e, t);
    }
    setCargobobPickupMagnetReducedFalloff(e, t) {
      SetCargobobPickupMagnetReducedFalloff(e, t);
    }
    setCargobobPickupMagnetPullRopeLength(e, t) {
      SetCargobobPickupMagnetPullRopeLength(e, t);
    }
    setCargobobPickupMagnetPullStrength(e, t) {
      SetCargobobPickupMagnetPullStrength(e, t);
    }
    setCargobobPickupMagnetFalloff(e, t) {
      SetCargobobPickupMagnetFalloff(e, t);
    }
    setCargobobPickupMagnetReducedStrength(e, t) {
      SetCargobobPickupMagnetReducedStrength(e, t);
    }
    doesHaveWeapons(e) {
      return DoesVehicleHaveWeapons(e);
    }
    disableWeapon(e, t, r, n) {
      DisableVehicleWeapon(e, t, r, n);
    }
    disableVehicleWeapon(e, t, r, n) {
      DisableVehicleWeapon(e, t, r, n);
    }
    isWeaponDisabled(e, t, r) {
      return IsVehicleWeaponDisabled(e, t, r);
    }
    setShootAtTarget(e, t, r, n, i) {
      SetVehicleShootAtTarget(e, t, r, n, i);
    }
    setVehicleShootAtTarget(e, t, r, n, i) {
      SetVehicleShootAtTarget(e, t, r, n, i);
    }
    getLockOnTarget(e) {
      const [t, r] = GetVehicleLockOnTarget(e);
      if (t) {
        return r;
      } else {
        return 0;
      }
    }
    setHasBeenDrivenFlag(e, t) {
      SetVehicleHasBeenDrivenFlag(e, t);
    }
    setLastDriven(e) {
      SetLastDrivenVehicle(e);
    }
    getLastDriven() {
      return GetLastDrivenVehicle();
    }
    clearLastDriven() {
      ClearLastDrivenVehicle();
    }
    setUsesLargeRearRamp(e, t) {
      SetVehicleUsesLargeRearRamp(e, t);
    }
    setRudderBroken(e, t) {
      SetVehicleRudderBroken(e, t);
    }
    getHasRocketBoost(e) {
      return GetHasRocketBoost(e);
    }
    isRocketBoostActive(e) {
      return IsVehicleRocketBoostActive(e);
    }
    setRocketBoostActive(e, t) {
      SetVehicleRocketBoostActive(e, t);
    }
    getHasRetractableWheels(e) {
      return GetHasRetractableWheels(e);
    }
    getHasParachute(e) {
      return GetVehicleHasParachute(e);
    }
    hideTombstone(e, t) {
      HideVehicleTombstone(e, t);
    }
    addUpsidedownCheck(e) {
      AddVehicleUpsidedownCheck(e);
    }
    removeUpsidedownCheck(e) {
      RemoveVehicleUpsidedownCheck(e);
    }
    removeStuckCheck(e) {
      RemoveVehicleStuckCheck(e);
    }
    doesHaveStuckVehicleCheck(e) {
      return DoesVehicleHaveStuckVehicleCheck(e);
    }
    resetStuckTimer(e, t) {
      ResetVehicleStuckTimer(e, t);
    }
    setOnGroundProperly(e, t) {
      return SetVehicleOnGroundProperly(e, t ?? 5);
    }
    startHorn(e, t, r, n) {
      StartVehicleHorn(e, t, r, n);
    }
    setNameDebug(e, t) {
      SetVehicleNameDebug(e, t);
    }
    setRenderTrainAsDerailed(e, t) {
      SetRenderTrainAsDerailed(e, t);
    }
    setTrainSpeed(e, t) {
      SetTrainSpeed(e, t);
    }
    setTrainCruiseSpeed(e, t) {
      SetTrainCruiseSpeed(e, t);
    }
    setMissionTrainCoords(e, t, r, n) {
      SetMissionTrainCoords(e, t, r, n);
    }
    getTrainCarriage(e, t) {
      return GetTrainCarriage(e, t);
    }
    isMissionTrain(e) {
      return IsMissionTrain(e);
    }
    requestHighDetailModel(e) {
      RequestVehicleHighDetailModel(e);
    }
    removeHighDetailModel(e) {
      RemoveVehicleHighDetailModel(e);
    }
    isHighDetail(e) {
      return IsVehicleHighDetail(e);
    }
    requestAsset(e, t) {
      RequestVehicleAsset(e, t);
    }
    hasAssetLoaded(e) {
      return HasVehicleAssetLoaded(e);
    }
    removeAsset(e) {
      RemoveVehicleAsset(e);
    }
    requestVehicleAsset(e, t) {
      RequestVehicleAsset(e, t);
    }
    hasVehicleAssetLoaded(e) {
      return HasVehicleAssetLoaded(e);
    }
    removeVehicleAsset(e) {
      RemoveVehicleAsset(e);
    }
    getNumWindowTints() {
      return GetNumVehicleWindowTints();
    }
    getNumberOfNumberPlates() {
      return GetNumberOfVehicleNumberPlates();
    }
    setUseCutsceneWheelCompression(e, t, r, n) {
      return SetVehicleUseCutsceneWheelCompression(e, t, r, n);
    }
    isThisModelABoat(e) {
      return IsThisModelABoat(e);
    }
    isThisModelAJetski(e) {
      return IsThisModelAJetski(e);
    }
    isThisModelAPlane(e) {
      return IsThisModelAPlane(e);
    }
    isThisModelAHeli(e) {
      return IsThisModelAHeli(e);
    }
    isThisModelACar(e) {
      return IsThisModelACar(e);
    }
    isThisModelATrain(e) {
      return IsThisModelATrain(e);
    }
    isThisModelABike(e) {
      return IsThisModelABike(e);
    }
    isThisModelABicycle(e) {
      return IsThisModelABicycle(e);
    }
    isThisModelAQuadbike(e) {
      return IsThisModelAQuadbike(e);
    }
    isThisModelAnAmphibiousCar(e) {
      return IsThisModelAnAmphibiousCar(e);
    }
    isThisModelAnAmphibiousQuadbike(e) {
      return IsThisModelAnAmphibiousQuadbike(e);
    }
    getRandomInSphere(e, t, r, n, i, a) {
      return GetRandomVehicleInSphere(e, t, r, n, i, a);
    }
    getClosest(e, t, r, n, i, a) {
      return GetClosestVehicle(e, t, r, n, i, a);
    }
    isAnyNearPoint(e, t, r, n) {
      return IsAnyVehicleNearPoint(e, t, r, n);
    }
    doesExistWithDecorator(e) {
      return DoesVehicleExistWithDecorator(e);
    }
    getTyreHealth(e, t) {
      return GetTyreHealth(e, t);
    }
    setTyreHealth(e, t, r) {
      SetTyreHealth(e, t, r);
    }
    getTyreWearMultiplier(e, t) {
      return GetTyreWearMultiplier(e, t);
    }
    setTyreWearMultiplier(e, t, r) {
      SetTyreWearMultiplier(e, t, r);
    }
    setTyreSoftnessMultiplier(e, t, r) {
      SetTyreSoftnessMultiplier(e, t, r);
    }
    setTyreTractionLossMultiplier(e, t, r) {
      SetTyreTractionLossMultiplier(e, t, r);
    }
    createVehicle(e, t, r, n, i, a, o, s) {
      return CreateVehicle(e, t, r, n, i, a, o, s);
    }
    getVehicleClass(e) {
      return GetVehicleClass(e);
    }
    getVehicleClassFromName(e) {
      return GetVehicleClassFromName(e);
    }
    getVehicleMod(e, t) {
      return GetVehicleMod(e, t);
    }
    setVehicleMod(e, t, r, n) {
      SetVehicleMod(e, t, r, n);
    }
    setVehicleDamage(e, t, r, n, i, a, o) {
      SetVehicleDamage(e, t, r, n, i, a, o);
    }
    preloadVehicleMod(e, t, r) {
      PreloadVehicleMod(e, t, r);
    }
    doesVehicleExistWithDecorator(e) {
      return DoesVehicleExistWithDecorator(e);
    }
    getVehicleModelMaxNumberOfPassengers(e) {
      return GetVehicleModelMaxNumberOfPassengers(e);
    }
    getVehicleModelMaxSpeed(e) {
      return GetVehicleModelMaxSpeed(e);
    }
    setCanBeLockedOn(e, t, r) {
      SetVehicleCanBeLockedOn(e, t, r);
    }
    setAllowNoPassengersLockon(e, t) {
      SetVehicleAllowNoPassengersLockon(e, t);
    }
    getHomingLockonState(e) {
      return GetVehicleHomingLockonState(e);
    }
    doesScriptGeneratorExist(e) {
      return DoesScriptVehicleGeneratorExist(e);
    }
    doesScriptVehicleGeneratorExist(e) {
      return DoesScriptVehicleGeneratorExist(e);
    }
    createScriptGenerator(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S) {
      return CreateScriptVehicleGenerator(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S);
    }
    createScriptVehicleGenerator(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S) {
      return CreateScriptVehicleGenerator(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S);
    }
    deleteScriptGenerator(e) {
      DeleteScriptVehicleGenerator(e);
    }
    deleteScriptVehicleGenerator(e) {
      DeleteScriptVehicleGenerator(e);
    }
    setScriptGenerator(e, t) {
      SetScriptVehicleGenerator(e, t);
    }
    setScriptVehicleGenerator(e, t) {
      SetScriptVehicleGenerator(e, t);
    }
    setAllGeneratorsActiveInArea(e, t, r, n, i, a, o, s) {
      SetAllVehicleGeneratorsActiveInArea(e, t, r, n, i, a, o, s);
    }
    setAllVehicleGeneratorsActiveInArea(e, t, r, n, i, a, o, s) {
      SetAllVehicleGeneratorsActiveInArea(e, t, r, n, i, a, o, s);
    }
    setAllGeneratorsActive() {
      SetAllVehicleGeneratorsActive();
    }
    setAllVehicleGeneratorsActive() {
      SetAllVehicleGeneratorsActive();
    }
    setAllLowPriorityGeneratorsActive(e) {
      SetAllLowPriorityVehicleGeneratorsActive(e);
    }
    setAllLowPriorityVehicleGeneratorsActive(e) {
      SetAllLowPriorityVehicleGeneratorsActive(e);
    }
    removeVehiclesFromGeneratorsInArea(e, t, r, n, i, a, o) {
      RemoveVehiclesFromGeneratorsInArea(e, t, r, n, i, a, o);
    }
    setDensityMultiplierThisFrame(e) {
      SetVehicleDensityMultiplierThisFrame(e);
    }
    setVehicleDensityMultiplierThisFrame(e) {
      SetVehicleDensityMultiplierThisFrame(e);
    }
    setRandomDensityMultiplierThisFrame(e) {
      SetRandomVehicleDensityMultiplierThisFrame(e);
    }
    setRandomVehicleDensityMultiplierThisFrame(e) {
      SetRandomVehicleDensityMultiplierThisFrame(e);
    }
    setParkedDensityMultiplierThisFrame(e) {
      SetParkedVehicleDensityMultiplierThisFrame(e);
    }
    setParkedVehicleDensityMultiplierThisFrame(e) {
      SetParkedVehicleDensityMultiplierThisFrame(e);
    }
    setAmbientRangeMultiplierThisFrame(e) {
      SetAmbientVehicleRangeMultiplierThisFrame(e);
    }
    setDisableRandomTrainsThisFrame(e) {
      SetDisableRandomTrainsThisFrame(e);
    }
    setFarDrawS(e) {
      SetFarDrawVehicles(e);
    }
    setFarDrawVehicles(e) {
      SetFarDrawVehicles(e);
    }
    setNumberOfParkedS(e) {
      SetNumberOfParkedVehicles(e);
    }
    setNumberOfParkedVehicles(e) {
      SetNumberOfParkedVehicles(e);
    }
    instantlyFillPopulation() {
      InstantlyFillVehiclePopulation();
    }
    hasFilledPopulation() {
      return HasFilledVehiclePopulation();
    }
    setModelIsSuppressed(e, t) {
      SetVehicleModelIsSuppressed(e, t);
    }
    setVehicleModelIsSuppressed(e, t) {
      SetVehicleModelIsSuppressed(e, t);
    }
    setDistantCarsEnabled(e) {
      SetDistantCarsEnabled(e);
    }
    setCarHighSpeedBumpSeverityMultiplier(e) {
      SetCarHighSpeedBumpSeverityMultiplier(e);
    }
    displayDistantVehicles(e) {
      DisplayDistantVehicles(e);
    }
    setLightsCutoffDistanceTweak(e) {
      SetLightsCutoffDistanceTweak(e);
    }
    setDoorsLockedForUnk(e, t) {
      SetVehicleDoorsLockedForUnk(e, t);
    }
    getDoorDestroyType(e, t) {
      return GetVehicleDoorDestroyType(e, t);
    }
    setDoorCanBreak(e, t, r) {
      SetVehicleDoorCanBreak(e, t, r);
    }
    getPedUsingDoor(e, t) {
      return GetPedUsingVehicleDoor(e, t);
    }
    getNumberOfDoors(e) {
      return GetNumberOfVehicleDoors(e);
    }
    setIsRacing(e, t) {
      SetVehicleIsRacing(e, t);
    }
    getIsPrimaryColourCustom(e) {
      return GetIsVehiclePrimaryColourCustom(e);
    }
    getIsSecondaryColourCustom(e) {
      return GetIsVehicleSecondaryColourCustom(e);
    }
    getNumberOfColours(e) {
      return GetNumberOfVehicleColours(e);
    }
    setInteriorColor(e, t) {
      SetVehicleInteriorColour(e, t);
    }
    getInteriorColor(e) {
      return GetVehicleInteriorColour(e);
    }
    setDashboardColor(e, t) {
      SetVehicleDashboardColour(e, t);
    }
    getDashboardColor(e) {
      const t = GetVehicleDashboardColour(e);
      if (Array.isArray(t)) {
        return t[t.length - 1];
      } else {
        return t;
      }
    }
    setXenonLightsColor(e, t) {
      SetVehicleXenonLightColorIndex(e, t);
    }
    getXenonLightsColor(e) {
      return GetVehicleXenonLightsColor(e);
    }
    getSubmarineIsBelowFirstCrushDepth(e) {
      return GetSubmarineIsBelowFirstCrushDepth(e);
    }
    getSubmarineCrushDepthWarningState(e) {
      return GetSubmarineCrushDepthWarningState(e);
    }
    transformSubmarineTo(e, t) {
      return TransformToSubmarine(e, t);
    }
    getIsSubmarineTransformed(e) {
      return GetIsSubmarineVehicleTransformed(e);
    }
    canAnchorBoatHere2(e) {
      return CanAnchorBoatHereIgnorePlayers(e);
    }
    setBoatFrozenWhenAnchored(e, t) {
      SetBoatFrozenWhenAnchored(e, t);
    }
    setBoatMovementResistance(e, t) {
      SetBoatMovementResistance(e, t);
    }
    isBoatAnchoredAndFrozen(e) {
      return IsBoatAnchoredAndFrozen(e);
    }
    setBoatIsSinking(e) {
      SetBoatSinks(e);
    }
    setBoatBoomPositionRatio(e, t) {
      SetBoatBoomPositionRatio(e, t);
    }
    getBoatBoomPositionRatio2(e, t) {
      return GetBoatBoomPositionRatio_2(e, t);
    }
    getBoatBoomPositionRatio3(e, t) {
      return GetBoatBoomPositionRatio_3(e, t);
    }
    getVehicleRecordingId(e, t) {
      return GetVehicleRecordingId(e, t);
    }
    getRecordingId(e, t) {
      return GetVehicleRecordingId(e, t);
    }
    requestVehicleRecording(e, t) {
      RequestVehicleRecording(e, t);
    }
    requestRecording(e, t) {
      RequestVehicleRecording(e, t);
    }
    hasVehicleRecordingBeenLoaded(e, t) {
      return HasVehicleRecordingBeenLoaded(e, t);
    }
    hasRecordingBeenLoaded(e, t) {
      return HasVehicleRecordingBeenLoaded(e, t);
    }
    removeVehicleRecording(e, t) {
      RemoveVehicleRecording(e, t);
    }
    removeRecording(e, t) {
      RemoveVehicleRecording(e, t);
    }
    getPositionOfVehicleRecordingAtTime(e, t, r) {
      return za(GetPositionOfVehicleRecordingAtTime(e, t, r));
    }
    getPositionOfRecordingAtTime(e, t, r) {
      return za(GetPositionOfVehicleRecordingAtTime(e, t, r));
    }
    getPositionOfRecordingIdAtTime(e, t) {
      return za(GetPositionOfVehicleRecordingIdAtTime(e, t));
    }
    getRotationOfVehicleRecordingAtTime(e, t, r) {
      return za(GetRotationOfVehicleRecordingAtTime(e, t, r));
    }
    getRotationOfRecordingAtTime(e, t, r) {
      return za(GetRotationOfVehicleRecordingAtTime(e, t, r));
    }
    getRotationOfRecordingIdAtTime(e, t) {
      return za(GetRotationOfVehicleRecordingIdAtTime(e, t));
    }
    getTotalDurationOfVehicleRecordingId(e) {
      return GetTotalDurationOfVehicleRecordingId(e);
    }
    getTotalDurationOfRecordingId(e) {
      return GetTotalDurationOfVehicleRecordingId(e);
    }
    getTotalDurationOfVehicleRecording(e, t) {
      return GetTotalDurationOfVehicleRecording(e, t);
    }
    getTotalDurationOfRecording(e, t) {
      return GetTotalDurationOfVehicleRecording(e, t);
    }
    getPositionInRecording(e) {
      return GetPositionInRecording(e);
    }
    getTimePositionInRecording(e) {
      return GetTimePositionInRecording(e);
    }
    startPlaybackRecordedVehicle(e, t, r, n) {
      StartPlaybackRecordedVehicle(e, t, r, n);
    }
    startPlaybackRecorded(e, t, r, n) {
      StartPlaybackRecordedVehicle(e, t, r, n);
    }
    startPlaybackRecordedVehicleWithFlags(e, t, r, n, i, a) {
      StartPlaybackRecordedVehicleWithFlags(e, t, r, n, i, a);
    }
    startPlaybackRecordedWithFlags(e, t, r, n, i, a) {
      StartPlaybackRecordedVehicleWithFlags(e, t, r, n, i, a);
    }
    forcePlaybackRecordedUpdate(e, t) {
      ForcePlaybackRecordedVehicleUpdate(e, t);
    }
    stopPlaybackRecordedVehicle(e) {
      StopPlaybackRecordedVehicle(e);
    }
    stopPlaybackRecorded(e) {
      StopPlaybackRecordedVehicle(e);
    }
    pausePlaybackRecordedVehicle(e) {
      PausePlaybackRecordedVehicle(e);
    }
    pausePlaybackRecorded(e) {
      PausePlaybackRecordedVehicle(e);
    }
    unpausePlaybackRecordedVehicle(e) {
      UnpausePlaybackRecordedVehicle(e);
    }
    unpausePlaybackRecorded(e) {
      UnpausePlaybackRecordedVehicle(e);
    }
    isPlaybackGoingOnForVehicle(e) {
      return IsPlaybackGoingOnForVehicle(e);
    }
    isPlaybackGoingOnFor(e) {
      return IsPlaybackGoingOnForVehicle(e);
    }
    isPlaybackUsingAiGoingOnForVehicle(e) {
      return IsPlaybackUsingAiGoingOnForVehicle(e);
    }
    isPlaybackUsingAiGoingOnFor(e) {
      return IsPlaybackUsingAiGoingOnForVehicle(e);
    }
    getCurrentPlaybackForVehicle(e) {
      return GetCurrentPlaybackForVehicle(e);
    }
    getCurrentPlaybackFor(e) {
      return GetCurrentPlaybackForVehicle(e);
    }
    skipToEndAndStopPlaybackRecordedVehicle(e) {
      SkipToEndAndStopPlaybackRecordedVehicle(e);
    }
    skipToEndAndStopPlaybackRecorded(e) {
      SkipToEndAndStopPlaybackRecordedVehicle(e);
    }
    setPlaybackSpeed(e, t) {
      SetPlaybackSpeed(e, t);
    }
    startPlaybackRecordedVehicleUsingAi(e, t, r, n, i) {
      StartPlaybackRecordedVehicleUsingAi(e, t, r, n, i);
    }
    startPlaybackRecordedUsingAi(e, t, r, n, i) {
      StartPlaybackRecordedVehicleUsingAi(e, t, r, n, i);
    }
    skipTimeInPlaybackRecordedVehicle(e, t) {
      SkipTimeInPlaybackRecordedVehicle(e, t);
    }
    skipTimeInPlaybackRecorded(e, t) {
      SkipTimeInPlaybackRecordedVehicle(e, t);
    }
    setPlaybackToUseAi(e, t) {
      SetPlaybackToUseAi(e, t);
    }
    setPlaybackToUseAiTryToRevertBackLater(e, t, r, n) {
      SetPlaybackToUseAiTryToRevertBackLater(e, t, r, n);
    }
    setInactiveDuringPlayback(e, t) {
      SetVehicleInactiveDuringPlayback(e, t);
    }
    setActiveDuringPlayback(e, t) {
      SetVehicleActiveDuringPlayback(e, t);
    }
    addVehicleStuckCheckWithWarp(e, t, r, n, i, a, o) {
      AddVehicleStuckCheckWithWarp(e, t, r, n, i, a, o);
    }
    addStuckCheckWithWarp(e, t, r, n, i, a, o) {
      AddVehicleStuckCheckWithWarp(e, t, r, n, i, a, o);
    }
    removeVehicleStuckCheck(e) {
      RemoveVehicleStuckCheck(e);
    }
    isStuckTimerUp(e, t, r) {
      return IsVehicleStuckTimerUp(e, t, r);
    }
    getRandomVehicleInSphere(e, t, r, n, i, a) {
      return GetRandomVehicleInSphere(e, t, r, n, i, a);
    }
    getRandomFrontBumperInSphere(e, t, r, n, i, a, o) {
      return GetRandomVehicleFrontBumperInSphere(e, t, r, n, i, a, o);
    }
    getRandomVehicleFrontBumperInSphere(e, t, r, n, i, a, o) {
      return GetRandomVehicleFrontBumperInSphere(e, t, r, n, i, a, o);
    }
    getRandomBackBumperInSphere(e, t, r, n, i, a, o) {
      return GetRandomVehicleBackBumperInSphere(e, t, r, n, i, a, o);
    }
    getRandomVehicleBackBumperInSphere(e, t, r, n, i, a, o) {
      return GetRandomVehicleBackBumperInSphere(e, t, r, n, i, a, o);
    }
    getClosestVehicle(e, t, r, n, i, a) {
      return GetClosestVehicle(e, t, r, n, i, a);
    }
    isAnyVehicleNearPoint(e, t, r, n) {
      return IsAnyVehicleNearPoint(e, t, r, n);
    }
    getRandomVehicleModelInMemory(e) {
      const t = GetRandomVehicleModelInMemory(e);
      return {
        modelHash: t[1],
        successIndicator: t[2]
      };
    }
    getRandomModelInMemory(e) {
      const t = GetRandomVehicleModelInMemory(e);
      return {
        modelHash: t[1],
        successIndicator: t[2]
      };
    }
    getAllS() {
      const e = GetAllVehicles();
      if (Array.isArray(e)) {
        return {
          vehsStruct: e[1],
          result: e[0]
        };
      } else {
        return {
          vehsStruct: e,
          result: e
        };
      }
    }
    createMissionTrain(e, t, r, n, i) {
      return CreateMissionTrain(e, t, r, n, i, 0, 0);
    }
    switchTrainTrack(e, t) {
      SwitchTrainTrack(e, t);
    }
    setTrainTrackSpawnFrequency(e, t) {
      SetTrainTrackSpawnFrequency(e, t);
    }
    deleteAllTrains() {
      DeleteAllTrains();
    }
    deleteMissionTrain(e) {
      return DeleteMissionTrain(e);
    }
    setMissionTrainAsNoLongerNeeded(e, t) {
      return SetMissionTrainAsNoLongerNeeded(e, t);
    }
    setRandomTrains(e) {
      SetRandomTrains(e);
    }
    setRandomBoats(e) {
      SetRandomBoats(e);
    }
    setRandomBoatsInMp(e) {
      SetRandomBoatsInMp(e);
    }
    setGarbageTrucks(e) {
      SetGarbageTrucks(e);
    }
    stopAllGarageActivity() {
      StopAllGarageActivity();
    }
    rollDownWindows(e) {
      RollDownWindows(e);
    }
    popOutWindscreen(e) {
      PopOutVehicleWindscreen(e);
    }
    ejectJb700Roof(e, t, r, n) {
      EjectJb700Roof(e, t, r, n);
    }
    areAllWindowsIntact(e) {
      return AreAllVehicleWindowsIntact(e);
    }
    setDisableWindowCollisions(e, t) {
      SetDisableVehicleWindowCollisions(e, t);
    }
    setLightsMode(e, t) {
      SetVehicleLightsMode(e, t);
    }
    startAlarm(e) {
      StartVehicleAlarm(e);
    }
    disableNeonLights(e, t) {
      DisableVehicleNeonLights(e, t);
    }
    bringToHalt(e, t, r, n) {
      BringVehicleToHalt(e, t, r, n);
    }
    stopBringToHalt(e) {
      StopBringVehicleToHalt(e);
    }
    isBeingHalted(e) {
      return IsVehicleBeingHalted(e);
    }
    areAnySeatsFree(e) {
      return AreAnyVehicleSeatsFree(e);
    }
    getLastPedInSeat(e, t) {
      return GetLastPedInVehicleSeat(e, t);
    }
    isSeatAccessible(e, t, r, n, i) {
      return IsVehicleSeatAccessible(e, t, r, n, i);
    }
    getEntryPositionOfDoor(e, t) {
      return za(GetEntryPositionOfDoor(e, t));
    }
    findCarryingThisEntity(e) {
      return FindVehicleCarryingThisEntity(e);
    }
    isHandlerFrameAboveContainer(e, t) {
      return IsHandlerFrameAboveContainer(e, t);
    }
    getModelMonetaryValue(e) {
      return GetVehicleModelMonetaryValue(e);
    }
    getMakeNameFromModel(e) {
      return GetMakeNameFromVehicleModel(e);
    }
    getModelEstimatedAgility(e) {
      return GetVehicleModelEstimatedAgility(e);
    }
    getModelMaxKnots(e) {
      return GetVehicleModelMaxKnots(e);
    }
    getModelMoveResistance(e) {
      return GetVehicleModelMoveResistance(e);
    }
    getNumMods(e, t) {
      return GetNumVehicleMods(e, t);
    }
    getModColor1(e) {
      const t = GetVehicleModColor_1(e);
      return {
        paintType: t[0],
        color: t[1],
        pearlescentColor: t[2]
      };
    }
    getModColor2(e) {
      const t = GetVehicleModColor_2(e);
      return {
        paintType: t[0],
        color: t[1]
      };
    }
    getModColor1Name(e, t) {
      return GetVehicleModColor_1Name(e, t);
    }
    getModColor2Name(e) {
      return GetVehicleModColor_2Name(e);
    }
    setRoofLivery(e, t) {
      SetVehicleRoofLivery(e, t);
    }
    getRoofLivery(e) {
      return GetVehicleRoofLivery(e);
    }
    getRoofLiveryCount(e) {
      return GetVehicleRoofLiveryCount(e);
    }
    isDamaged(e) {
      return IsVehicleDamaged(e);
    }
    getNumberOfBrokenOffBones(e) {
      return GetVehicleNumberOfBrokenOffBones(e);
    }
    getNumberOfBrokenBones(e) {
      return GetVehicleNumberOfBrokenBones(e);
    }
    getBodyHealth2(e, t, r, n, i, a, o) {
      return GetVehicleBodyHealth2(e, t, r, n, i, a, o);
    }
    getIsLeftHeadlightDamaged(e) {
      return GetIsLeftVehicleHeadlightDamaged(e);
    }
    getIsRightHeadlightDamaged(e) {
      return GetIsRightVehicleHeadlightDamaged(e);
    }
    isEngineOnFire(e) {
      return IsVehicleEngineOnFire(e);
    }
    setCanEngineOperateOnFire(e, t) {
      SetVehicleCanEngineOperateOnFire(e, t);
    }
    setDisablePetrolTankFires(e, t) {
      SetDisableVehiclePetrolTankFires(e, t);
    }
    setDisablePetrolTankDamage(e, t) {
      SetDisableVehiclePetrolTankDamage(e, t);
    }
    setDisableEngineFires(e, t) {
      SetDisableVehicleEngineFires(e, t);
    }
    setDisablePretendOccupants(e, t) {
      SetDisablePretendOccupants(e, t);
    }
    setDamageModifier(e, t) {
      return SetVehicleDamageModifier(e, t);
    }
    setUnkDamageMultiplier(e, t) {
      SetVehicleUnkDamageMultiplier(e, t);
    }
    doesTyreExist(e, t) {
      return DoesVehicleTyreExist(e, t);
    }
    setCamberedWheelsDisabled(e, t) {
      SetCamberedWheelsDisabled(e, t);
    }
    setWheelsDealDamage(e, t) {
      SetVehicleWheelsDealDamage(e, t);
    }
    getWheelGroundSurfaceMaterial(e) {
      return GetVehicleWheelGroundSurfaceMaterial(e);
    }
    setReduceTraction(e, t) {
      SetVehicleReduceTraction(e, t);
    }
    setHydraulicWheelValue(e, t, r) {
      SetHydraulicWheelValue(e, t, r);
    }
    getHydraulicWheelValue(e, t) {
      return GetHydraulicSuspensionRaiseFactor(e, t);
    }
    setHydraulicWheelState(e, t) {
      SetHydraulicVehicleState(e, t);
    }
    setHydraulicWheelStateTransition(e, t, r, n, i) {
      SetHydraulicWheelStateTransition(e, t, r, n, i);
    }
    doesHaveLandingGear(e) {
      return DoesVehicleHaveLandingGear(e);
    }
    disablePlanePropeller(e, t) {
      DisableIndividualPlanePropeller(e, t);
    }
    setPlanePropellersHealth(e, t) {
      return SetPlanePropellerHealth(e, t);
    }
    arePlaneWingsIntact(e) {
      return ArePlaneWingsIntact(e);
    }
    setDisableFlightNozzlePosition(e, t) {
      SetDisableVehicleFlightNozzlePosition(e, t);
    }
    setTaskGotoPlaneMinHeightAboveTerrain(e, t) {
      SetTaskVehicleGotoPlaneMinHeightAboveTerrain(e, t);
    }
    areBombBayDoorsOpen(e) {
      return GetAreBombBayDoorsOpen(e);
    }
    setBombCount(e, t) {
      SetVehicleBombAmmo(e, t);
    }
    getBombCount(e) {
      return GetVehicleBombAmmo(e);
    }
    setCountermeasureCount(e, t) {
      SetVehicleCountermeasureAmmo(e, t);
    }
    getCountermeasureCount(e) {
      return GetVehicleCountermeasureAmmo(e);
    }
    setHeliTailExplodeThrowDashboard(e, t) {
      SetHeliTailExplodeThrowDashboard(e, t);
    }
    setDeployHeliStubWings(e, t, r) {
      SetDeployHeliStubWings(e, t, r);
    }
    areHeliStubWingsDeployed(e) {
      return AreHeliStubWingsDeployed(e);
    }
    setSpecialflightWingRatio(e, t) {
      SetSpecialFlightModeWingRatio(e, t);
    }
    setOppressorTransformState(e, t) {
      SetOppressorTransformState(e, t);
    }
    setHoverTransformRatio(e, t) {
      SetSpecialFlightModeRatio(e, t);
    }
    setHoverTransformPercentage(e, t) {
      SetSpecialFlightModeTargetRatio(e, t);
    }
    setHoverTransformEnabled(e, t) {
      SetDisableHoverModeFlight(e, !t);
    }
    setHoverTransformActive(e, t) {
      SetSpecialFlightModeAllowed(e, t);
    }
    setRocketBoostRefillTime(e, t) {
      SetScriptRocketBoostRechargeTime(e, t);
    }
    setRocketBoostPercentage(e, t) {
      SetVehicleRocketBoostPercentage(e, t);
    }
    setNitroEnabled(e, t, r, n, i, a) {
      SetOverrideNitrousLevel(e, t, r, n, i, a);
    }
    getIsShuntBoostActive(e) {
      return GetIsVehicleShuntBoostActive(e);
    }
    getLastRammed(e) {
      return GetLastRammedVehicle(e);
    }
    getIsEmpDisabled(e) {
      return GetIsVehicleEmpDisabled(e);
    }
    getIsWheelsLoweredStateActive(e) {
      return GetIsWheelsLoweredStateActive(e);
    }
    raiseRetractableWheels(e) {
      RaiseRetractableWheels(e);
    }
    lowerRetractableWheels(e) {
      LowerRetractableWheels(e);
    }
    getCanJump(e) {
      return GetCanVehicleJump(e);
    }
    setUseHigherJumpForce(e, t) {
      SetUseHigherVehicleJumpForce(e, t);
    }
    setWeaponCapacity(e, t, r) {
      SetVehicleWeaponCapacity(e, t, r);
    }
    getWeaponCapacity(e, t) {
      return GetVehicleWeaponCapacity(e, t);
    }
    setWeaponsDisabled(e, t) {
      SetVehicleWeaponsDisabled(e, t);
    }
    getCanActivateParachute(e) {
      return GetVehicleCanActivateParachute(e);
    }
    setParachuteActive(e, t) {
      SetVehicleParachuteActive(e, t);
    }
    setParachuteModel(e, t) {
      SetVehicleParachuteModel(e, t);
    }
    setParachuteTextureVariatiion(e, t) {
      SetVehicleParachuteTextureVariatiion(e, t);
    }
    setParachuteTextureVariation(e, t) {
      SetVehicleParachuteTextureVariation(e, t);
    }
    setReceivesRampDamage(e, t) {
      SetVehicleReceivesRampDamage(e, t);
    }
    setRampLaunchModifier(e, t) {
      SetVehicleRampLaunchModifier(e, t);
    }
    setRampSidewaysLaunchMotion(e, t) {
      SetVehicleRampSidewaysLaunchMotion(e, t);
    }
    setRampUpwardsLaunchMotion(e, t) {
      SetVehicleRampUpwardsLaunchMotion(e, t);
    }
    setCargobobHookPosition(e, t, r, n) {
      SetCargobobHookPosition(e, t, r, n);
    }
    getCargobobHookPosition(e) {
      return za(GetCargobobHookPosition(e));
    }
    setCargobobHookCanDetach(e, t) {
      SetCargobobHookCanDetach(e, t);
    }
    setCargobobHookCanAttach(e, t) {
      SetCargobobHookCanAttach(e, t);
    }
    setCargobobPickupMagnetEffectRadius(e, t) {
      SetCargobobPickupMagnetEffectRadius(e, t);
    }
    setShadowEffect(e, t, r) {
      SetVehicleShadowEffect(e, t, r);
    }
    removeShadowEffect(e) {
      RemoveVehicleShadowEffect(e);
    }
    requestDashboardScaleformMovie(e) {
      RequestVehicleDashboardScaleformMovie(e);
    }
    getSuspensionBounds(e) {
      const t = GetVehicleSuspensionBounds(e);
      return {
        out1: za(t[0]),
        out2: za(t[1])
      };
    }
    getSuspensionHeight(e) {
      return GetVehicleSuspensionHeight(e);
    }
    setEnableSlipstreaming(e) {
      SetEnableVehicleSlipstreaming(e);
    }
    getCurrentSlipstreamDraft(e) {
      return GetVehicleCurrentSlipstreamDraft(e);
    }
    isSlipstreamLeader(e) {
      return IsVehicleSlipstreamLeader(e);
    }
    isSprayable(e) {
      return IsVehicleSprayable(e);
    }
    setSilent(e, t) {
      SetVehicleSilent(e, t);
    }
    setJetEngineOn(e, t) {
      SetVehicleJetEngineOn(e, t);
    }
    setHandlingHashForAi(e, t) {
      SetVehicleHandlingHashForAi(e, t);
    }
    setSteeringBiasScalar(e, t) {
      SetVehicleSteeringBiasScalar(e, t);
    }
    setControlsInverted(e, t) {
      SetVehicleControlsInverted(e, t);
    }
    disableWorldCollision(e) {
      DisableVehicleWorldCollision(e);
    }
    setExperimentalAttachmentSyncEnabled(e) {
      SetVehicleExperimentalAttachmentSyncEnabled(e);
    }
    setExperimentalHornSyncEnabled(e) {
      SetVehicleExperimentalHornSyncEnabled(e);
    }
    setDisableSuperdummyMode(e, t) {
      SetDisableSuperdummyMode(e, t);
    }
    getDoesHaveTombstone(e) {
      return GetDoesVehicleHaveTombstone(e);
    }
    isPedExclusiveDriverOf(e, t) {
      return IsPedExclusiveDriverOfVehicle(e, t);
    }
    setResetUnoccupiedSteerAngle(e) {
      SetVehicleResetUnoccupiedSteerAngle(e);
    }
    setTurretUnk(e, t, r) {
      SetVehicleTurretUnk(e, t, r);
    }
    setDisableTurretMovementThisFrame(e, t) {
      DisableVehicleTurretMovementThisFrame(e);
    }
    setUnkFloat0X104ForSubmarineTask(e, t) {
      SetUnkFloatN_0x104ForSubmarineVehicleTask(e, t);
    }
    setUnkBool0X102ForSubmarineTask(e, t) {
      SetUnkBoolN_0x102ForSubmarineVehicleTask(e, t);
    }
    setDisableUnk(e) {
      SetDisableVehicleUnk(e);
    }
    setDisableUnk2(e) {
      SetDisableVehicleUnk_2(e);
    }
    overrideOverheatHealth(e, t) {
      OverrideVehicleOverheatHealth(e, t);
    }
    findRandomPointInSpace(e) {
      return za(FindRandomPointInSpace(e));
    }
    isCopInArea3D(e, t, r, n, i, a) {
      return IsCopVehicleInArea_3d(e, t, r, n, i, a);
    }
    isCopVehicleInArea3d(e, t, r, n, i, a) {
      return IsCopVehicleInArea_3d(e, t, r, n, i, a);
    }
    addCombatAngledAvoidanceArea(e, t, r, n, i, a, o) {
      return AddVehicleCombatAngledAvoidanceArea(e, t, r, n, i, a, o);
    }
    removeCombatAvoidanceArea(e) {
      RemoveVehicleCombatAvoidanceArea(e);
    }
    addRoadNodeSpeedZone(e, t, r, n, i, a) {
      return AddRoadNodeSpeedZone(e, t, r, n, i, a);
    }
    removeRoadNodeSpeedZone(e) {
      return RemoveRoadNodeSpeedZone(e);
    }
    attachOnToTrailer(e, t, r, n, i, a, o, s, l, d, c, u) {
      AttachVehicleOnToTrailer(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    setAutomaticallyAttaches(e, t, r) {
      return SetVehicleAutomaticallyAttaches(e, t, r);
    }
    createDriveForceCurve(e, t) {
      CreateVehicleDriveForceCurve(e, t);
    }
    getDriveForceCurveValue(e, t) {
      return GetVehicleDriveForceCurveValue(e, t);
    }
    deleteDriveForceCurve(e) {
      DeleteVehicleDriveForceCurve(e);
    }
    setModelDriveForceCurve(e, t) {
      SetVehicleModelDriveForceCurve(e, t);
    }
    setModelGearRatios(e, t) {
      SetVehicleModelGearRatios(e, t);
    }
    setGearRatios(e) {
      SetVehicleGearRatios(e);
    }
    setDriftTyresEnabled(e, t) {
      SetDriftTyresEnabled(e, t);
    }
    getDriftTyresEnabled(e) {
      return GetDriftTyresEnabled(e);
    }
    requestVehicleAssetAsync(e, t, r) {
      return RequestVehicleAssetAsync(e, t, r);
    }
    isVehicleInGarageArea(e, t) {
      return IsVehicleInGarageArea(e, t);
    }
    isInGarageArea(e, t) {
      return IsVehicleInGarageArea(e, t);
    }
    isThisModelAnEmergencyBoat(e) {
      return IsThisModelAnEmergencyBoat(e);
    }
    get passengerMassMultiplier() {
      return GetGlobalPassengerMassMultiplier();
    }
    set passengerMassMultiplier(e) {
      SetGlobalPassengerMassMultiplier(e);
    }
    _0x7D6F9A3EF26136A0(...e) {
      return Citizen.invokeNative("0x7D6F9A3EF26136A0", ...e);
    }
    _0x6EAAEFC76ACC311F(...e) {
      return Citizen.invokeNative("0x6EAAEFC76ACC311F", ...e);
    }
    _0x407DC5E97DB1A4D3(...e) {
      return Citizen.invokeNative("0x407DC5E97DB1A4D3", ...e);
    }
    _0x9A75585FB2E54FAD(...e) {
      return Citizen.invokeNative("0x9A75585FB2E54FAD", ...e);
    }
    _0x0A436B8643716D14(...e) {
      return Citizen.invokeNative("0x0A436B8643716D14", ...e);
    }
    _0x76D26A22750E849E(...e) {
      return Citizen.invokeNative("0x76D26A22750E849E", ...e);
    }
    _0xAB31EF4DE6800CE9(...e) {
      return Citizen.invokeNative("0xAB31EF4DE6800CE9", ...e);
    }
    _0x1B212B26DD3C04DF(...e) {
      return Citizen.invokeNative("0x1B212B26DD3C04DF", ...e);
    }
    _0xC67DB108A9ADE3BE(...e) {
      return Citizen.invokeNative("0xC67DB108A9ADE3BE", ...e);
    }
    _0xED5EDE9E676643C9(...e) {
      return Citizen.invokeNative("0xED5EDE9E676643C9", ...e);
    }
    _0xB28B1FE5BFADD7F5(...e) {
      return Citizen.invokeNative("0xB28B1FE5BFADD7F5", ...e);
    }
    _0x6501129C9E0FFA05(...e) {
      return Citizen.invokeNative("0x6501129C9E0FFA05", ...e);
    }
    _0xDCE97BDF8A0EABC8(...e) {
      return Citizen.invokeNative("0xDCE97BDF8A0EABC8", ...e);
    }
    _0x9849DE24FCF23CCC(...e) {
      return Citizen.invokeNative("0x9849DE24FCF23CCC", ...e);
    }
    _0x8664170EF165C4A6(...e) {
      return Citizen.invokeNative("0x8664170EF165C4A6", ...e);
    }
    _0x6A98C2ECF57FA5D4(...e) {
      return Citizen.invokeNative("0x6A98C2ECF57FA5D4", ...e);
    }
    _0x8AA9180DE2FEDD45(...e) {
      return Citizen.invokeNative("0x8AA9180DE2FEDD45", ...e);
    }
    _0x107A473D7A6647A9(...e) {
      return Citizen.invokeNative("0x107A473D7A6647A9", ...e);
    }
    _0x3B458DDB57038F08(...e) {
      return Citizen.invokeNative("0x3B458DDB57038F08", ...e);
    }
    _0xA247F9EF01D8082E(...e) {
      return Citizen.invokeNative("0xA247F9EF01D8082E", ...e);
    }
    _0x8821196D91FA2DE5(...e) {
      return Citizen.invokeNative("0x8821196D91FA2DE5", ...e);
    }
    _0x5845066D8A1EA7F7(...e) {
      return Citizen.invokeNative("0x5845066D8A1EA7F7", ...e);
    }
    _0x796A877E459B99EA(...e) {
      return Citizen.invokeNative("0x796A877E459B99EA", ...e);
    }
    _0xFAF2A78061FD9EF4(...e) {
      return Citizen.invokeNative("0xFAF2A78061FD9EF4", ...e);
    }
    _0x063AE2B2CC273588(...e) {
      return Citizen.invokeNative("0x063AE2B2CC273588", ...e);
    }
    _0x99CAD8E7AFDB60FA(...e) {
      return Citizen.invokeNative("0x99CAD8E7AFDB60FA", ...e);
    }
    _0xDBC631F109350B8C(...e) {
      return Citizen.invokeNative("0xDBC631F109350B8C", ...e);
    }
    _0x2311DD7159F00582(...e) {
      return Citizen.invokeNative("0x2311DD7159F00582", ...e);
    }
    _0x065D03A9D6B2C6B5(...e) {
      return Citizen.invokeNative("0x065D03A9D6B2C6B5", ...e);
    }
    _0xC4B3347BD68BD609(...e) {
      return Citizen.invokeNative("0xC4B3347BD68BD609", ...e);
    }
    _0xD3301660A57C9272(...e) {
      return Citizen.invokeNative("0xD3301660A57C9272", ...e);
    }
    _0xB9562064627FF9DB(...e) {
      return Citizen.invokeNative("0xB9562064627FF9DB", ...e);
    }
    _0xBE5C1255A1830FF5(...e) {
      return Citizen.invokeNative("0xBE5C1255A1830FF5", ...e);
    }
    _0x9BECD4B9FEF3F8A6(...e) {
      return Citizen.invokeNative("0x9BECD4B9FEF3F8A6", ...e);
    }
    _0x88BC673CA9E0AE99(...e) {
      return Citizen.invokeNative("0x88BC673CA9E0AE99", ...e);
    }
    _0xE851E480B814D4BA(...e) {
      return Citizen.invokeNative("0xE851E480B814D4BA", ...e);
    }
    _0xA01BC64DD4BFBBAC(...e) {
      return Citizen.invokeNative("0xA01BC64DD4BFBBAC", ...e);
    }
    _0xC50CE861B55EAB8B(...e) {
      return Citizen.invokeNative("0xC50CE861B55EAB8B", ...e);
    }
    _0x6EBFB22D646FFC18(...e) {
      return Citizen.invokeNative("0x6EBFB22D646FFC18", ...e);
    }
    _0x35BB21DE06784373(...e) {
      return Citizen.invokeNative("0x35BB21DE06784373", ...e);
    }
    _0x9F3F689B814F2599(...e) {
      return Citizen.invokeNative("0x9F3F689B814F2599", ...e);
    }
    _0x4E74E62E0A97E901(...e) {
      return Citizen.invokeNative("0x4E74E62E0A97E901", ...e);
    }
    _0x4056EA1105F5ABD7(...e) {
      return Citizen.invokeNative("0x4056EA1105F5ABD7", ...e);
    }
    _0xD565F438137F0E10(...e) {
      return Citizen.invokeNative("0xD565F438137F0E10", ...e);
    }
    _0x3441CAD2F2231923(...e) {
      return Citizen.invokeNative("0x3441CAD2F2231923", ...e);
    }
    _0x0581730AB9380412(...e) {
      return Citizen.invokeNative("0x0581730AB9380412", ...e);
    }
    _0x737E398138550FFF(...e) {
      return Citizen.invokeNative("0x737E398138550FFF", ...e);
    }
    _0xA4822F1CF23F4810(...e) {
      return Citizen.invokeNative("0xA4822F1CF23F4810", ...e);
    }
    _0x51DB102F4A3BA5E0(...e) {
      return Citizen.invokeNative("0x51DB102F4A3BA5E0", ...e);
    }
    _0xA4A9A4C40E615885(...e) {
      return Citizen.invokeNative("0xA4A9A4C40E615885", ...e);
    }
    _0xEEBFC7A7EFDC35B4(...e) {
      return Citizen.invokeNative("0xEEBFC7A7EFDC35B4", ...e);
    }
    _0x5EE5632F47AE9695(...e) {
      return Citizen.invokeNative("0x5EE5632F47AE9695", ...e);
    }
    _0x1CF38D529D7441D9(...e) {
      return Citizen.invokeNative("0x1CF38D529D7441D9", ...e);
    }
    _0x1F9FB66F3A3842D2(...e) {
      return Citizen.invokeNative("0x1F9FB66F3A3842D2", ...e);
    }
    _0x59C3757B3B7408E8(...e) {
      return Citizen.invokeNative("0x59C3757B3B7408E8", ...e);
    }
    _0x0AD9E8F87FF7C16F(...e) {
      return Citizen.invokeNative("0x0AD9E8F87FF7C16F", ...e);
    }
    _0xAB04325045427AAE(...e) {
      return Citizen.invokeNative("0xAB04325045427AAE", ...e);
    }
    _0xCFD778E7904C255E(...e) {
      return Citizen.invokeNative("0xCFD778E7904C255E", ...e);
    }
    _0x4D9D109F63FEE1D4(...e) {
      return Citizen.invokeNative("0x4D9D109F63FEE1D4", ...e);
    }
    _0x279D50DE5652D935(...e) {
      return Citizen.invokeNative("0x279D50DE5652D935", ...e);
    }
    _0xF25E02CB9C5818F8(...e) {
      return Citizen.invokeNative("0xF25E02CB9C5818F8", ...e);
    }
    _0x182F266C2D9E2BEB(...e) {
      return Citizen.invokeNative("0x182F266C2D9E2BEB", ...e);
    }
    _0xF051D9BFB6BA39C0(...e) {
      return Citizen.invokeNative("0xF051D9BFB6BA39C0", ...e);
    }
    _0x4C815EB175086F84(...e) {
      return Citizen.invokeNative("0x4C815EB175086F84", ...e);
    }
    _0xB264C4D2F2B0A78B(...e) {
      return Citizen.invokeNative("0xB264C4D2F2B0A78B", ...e);
    }
    _0x1F34B0626C594380(...e) {
      return Citizen.invokeNative("0x1F34B0626C594380", ...e);
    }
    _0x2C1D8B3B19E517CC(...e) {
      return Citizen.invokeNative("0x2C1D8B3B19E517CC", ...e);
    }
    _0xC0ED6438E6D39BA8(...e) {
      return Citizen.invokeNative("0xC0ED6438E6D39BA8", ...e);
    }
    _0x9BDDC73CC6A115D4(...e) {
      return Citizen.invokeNative("0x9BDDC73CC6A115D4", ...e);
    }
    _0x56EB5E94318D3FB6(...e) {
      return Citizen.invokeNative("0x56EB5E94318D3FB6", ...e);
    }
    _0x2C4A1590ABF43E8B(...e) {
      return Citizen.invokeNative("0x2C4A1590ABF43E8B", ...e);
    }
    _0xE05DD0E9707003A3(...e) {
      return Citizen.invokeNative("0xE05DD0E9707003A3", ...e);
    }
    _0xE5810AC70602F2F5(...e) {
      return Citizen.invokeNative("0xE5810AC70602F2F5", ...e);
    }
    _0x6A973569BA094650(...e) {
      return Citizen.invokeNative("0x6A973569BA094650", ...e);
    }
    _0xF78F94D60248C737(...e) {
      return Citizen.invokeNative("0xF78F94D60248C737", ...e);
    }
    _0x5E569EC46EC21CAE(...e) {
      return Citizen.invokeNative("0x5E569EC46EC21CAE", ...e);
    }
    _0x41062318F23ED854(...e) {
      return Citizen.invokeNative("0x41062318F23ED854", ...e);
    }
    _0x4AD280EB48B2D8E6(...e) {
      return Citizen.invokeNative("0x4AD280EB48B2D8E6", ...e);
    }
    _0xB68CFAF83A02768D(...e) {
      return Citizen.invokeNative("0xB68CFAF83A02768D", ...e);
    }
    _0x0205F5365292D2EB(...e) {
      return Citizen.invokeNative("0x0205F5365292D2EB", ...e);
    }
    _0xCF9159024555488C(...e) {
      return Citizen.invokeNative("0xCF9159024555488C", ...e);
    }
    _0xB93B2867F7B479D1(...e) {
      return Citizen.invokeNative("0xB93B2867F7B479D1", ...e);
    }
    _0x35E0654F4BAD7971(...e) {
      return Citizen.invokeNative("0x35E0654F4BAD7971", ...e);
    }
    _0xA7DCDF4DED40A8F4(...e) {
      return Citizen.invokeNative("0xA7DCDF4DED40A8F4", ...e);
    }
    _0xD4C4642CB7F50B5D(...e) {
      return Citizen.invokeNative("0xD4C4642CB7F50B5D", ...e);
    }
    _0xC361AA040D6637A8(...e) {
      return Citizen.invokeNative("0xC361AA040D6637A8", ...e);
    }
    _0xE16142B94664DEFD(...e) {
      return Citizen.invokeNative("0xE16142B94664DEFD", ...e);
    }
    _0x26D99D5A82FD18E8(...e) {
      return Citizen.invokeNative("0x26D99D5A82FD18E8", ...e);
    }
    _0x5BA68A0840D546AC(...e) {
      return Citizen.invokeNative("0x5BA68A0840D546AC", ...e);
    }
    _0x4419966C9936071A(...e) {
      return Citizen.invokeNative("0x4419966C9936071A", ...e);
    }
    _0x870B8B7A766615C8(...e) {
      return Citizen.invokeNative("0x870B8B7A766615C8", ...e);
    }
    _0x8533CAFDE1F0F336(...e) {
      return Citizen.invokeNative("0x8533CAFDE1F0F336", ...e);
    }
    _0xD4196117AF7BB974(...e) {
      return Citizen.invokeNative("0xD4196117AF7BB974", ...e);
    }
    _0xBB2333BB87DDD87F(...e) {
      return Citizen.invokeNative("0xBB2333BB87DDD87F", ...e);
    }
    _0x73561D4425A021A2(...e) {
      return Citizen.invokeNative("0x73561D4425A021A2", ...e);
    }
    _0x7BBE7FF626A591FE(...e) {
      return Citizen.invokeNative("0x7BBE7FF626A591FE", ...e);
    }
    _0x65B080555EA48149(...e) {
      return Citizen.invokeNative("0x65B080555EA48149", ...e);
    }
    _0x428AD3E26C8D9EB0(...e) {
      return Citizen.invokeNative("0x428AD3E26C8D9EB0", ...e);
    }
    _0xE2F53F172B45EDE1(...e) {
      return Citizen.invokeNative("0xE2F53F172B45EDE1", ...e);
    }
    _0xBA91D045575699AD(...e) {
      return Citizen.invokeNative("0xBA91D045575699AD", ...e);
    }
    _0x80E3357FDEF45C21(...e) {
      return Citizen.invokeNative("0x80E3357FDEF45C21", ...e);
    }
    _0xB2E0C0D6922D31F2(...e) {
      return Citizen.invokeNative("0xB2E0C0D6922D31F2", ...e);
    }
    _0x3DE51E9C80B116CF(...e) {
      return Citizen.invokeNative("0x3DE51E9C80B116CF", ...e);
    }
    _0x9D30687C57BAA0BB(...e) {
      return Citizen.invokeNative("0x9D30687C57BAA0BB", ...e);
    }
    _0x41290B40FA63E6DA(...e) {
      return Citizen.invokeNative("0x41290B40FA63E6DA", ...e);
    }
    _0x0419B167EE128F33(...e) {
      return Citizen.invokeNative("0x0419B167EE128F33", ...e);
    }
    _0xF3B0E0AED097A3F5(...e) {
      return Citizen.invokeNative("0xF3B0E0AED097A3F5", ...e);
    }
    _0xD3E51C0AB8C26EEE(...e) {
      return Citizen.invokeNative("0xD3E51C0AB8C26EEE", ...e);
    }
    _0x72BECCF4B829522E(...e) {
      return Citizen.invokeNative("0x72BECCF4B829522E", ...e);
    }
    _0x66E3AAFACE2D1EB8(...e) {
      return Citizen.invokeNative("0x66E3AAFACE2D1EB8", ...e);
    }
    _0x1312DDD8385AEE4E(...e) {
      return Citizen.invokeNative("0x1312DDD8385AEE4E", ...e);
    }
    _0xEDBC8405B3895CC9(...e) {
      return Citizen.invokeNative("0xEDBC8405B3895CC9", ...e);
    }
    _0x26E13D440E7F6064(...e) {
      return Citizen.invokeNative("0x26E13D440E7F6064", ...e);
    }
    _0x2FA2494B47FDD009(...e) {
      return Citizen.invokeNative("0x2FA2494B47FDD009", ...e);
    }
    _0x78CEEE41F49F421F(...e) {
      return Citizen.invokeNative("0x78CEEE41F49F421F", ...e);
    }
    _0xAF60E6A2936F982A(...e) {
      return Citizen.invokeNative("0xAF60E6A2936F982A", ...e);
    }
    _0x430A7631A84C9BE7(...e) {
      return Citizen.invokeNative("0x430A7631A84C9BE7", ...e);
    }
    _0x8235F1BEAD557629(...e) {
      return Citizen.invokeNative("0x8235F1BEAD557629", ...e);
    }
    _0x9640E30A7F395E4B(...e) {
      return Citizen.invokeNative("0x9640E30A7F395E4B", ...e);
    }
    _0x0BBB9A7A8FFE931B(...e) {
      return Citizen.invokeNative("0x0BBB9A7A8FFE931B", ...e);
    }
    _0x0A3F820A9A9A9AC5(...e) {
      return Citizen.invokeNative("0x0A3F820A9A9A9AC5", ...e);
    }
    _0x51F30DB60626A20E(...e) {
      return Citizen.invokeNative("0x51F30DB60626A20E", ...e);
    }
    _0x97841634EF7DF1D6(...e) {
      return Citizen.invokeNative("0x97841634EF7DF1D6", ...e);
    }
    _0x3A9128352EAC9E85(...e) {
      return Citizen.invokeNative("0x3A9128352EAC9E85", ...e);
    }
    _0xAA653AE61924B0A0(...e) {
      return Citizen.invokeNative("0xAA653AE61924B0A0", ...e);
    }
    _0x887FA38787DE8C72(...e) {
      return Citizen.invokeNative("0x887FA38787DE8C72", ...e);
    }
    _0x36DE109527A2C0C4(...e) {
      return Citizen.invokeNative("0x36DE109527A2C0C4", ...e);
    }
    _0x82E0AC411E41A5B4(...e) {
      return Citizen.invokeNative("0x82E0AC411E41A5B4", ...e);
    }
    _0x99A05839C46CE316(...e) {
      return Citizen.invokeNative("0x99A05839C46CE316", ...e);
    }
    _0xE8718FAF591FD224(...e) {
      return Citizen.invokeNative("0xE8718FAF591FD224", ...e);
    }
    _0x5BBCF35BF6E456F7(...e) {
      return Citizen.invokeNative("0x5BBCF35BF6E456F7", ...e);
    }
    _0x8F0D5BA1C2CC91D7(...e) {
      return Citizen.invokeNative("0x8F0D5BA1C2CC91D7", ...e);
    }
    _0xF8B49F5BA7F850E7(...e) {
      return Citizen.invokeNative("0xF8B49F5BA7F850E7", ...e);
    }
  }
  class Qa {
    constructor() {
      this.unk = ja();
    }
    goStraightToCoord(e, t, r, n, i, a) {
      TaskGoStraightToCoord(e, t, r, n, i ?? 1, a ?? -1, 0, 0);
    }
    goToCoordAnyMeans(e, t, r, n, i, a, o, s, l) {
      TaskGoToCoordAnyMeans(e, t, r, n, i, a, o, s, l);
    }
    followNavMeshToCoord(e, t, r, n, i, a, o, s, l) {
      TaskFollowNavMeshToCoord(e, t, r, n, i ?? 1, a ?? -1, o ?? 0.1, s ?? 0, l ?? 0);
    }
    vehicleDriveToCoord(e, t, r, n, i, a, o, s, l, d, c) {
      TaskVehicleDriveToCoord(e, t, r, n, i, a ?? 10, o ?? 0, s ?? 0, l ?? 786603, d ?? 4, c ?? -1);
    }
    vehicleDriveToCoordLongrange(e, t, r, n, i, a, o, s) {
      TaskVehicleDriveToCoordLongrange(e, t, r, n, i, a ?? 10, o ?? 786603, s ?? 4);
    }
    vehicleDriveWander(e, t, r, n) {
      TaskVehicleDriveWander(e, t, r ?? 10, n ?? 786603);
    }
    vehicleChase(e, t) {
      TaskVehicleChase(e, t);
    }
    vehicleFollow(e, t, r, n, i, a) {
      TaskVehicleFollow(e, t, r, n ?? 10, i ?? 786603, a ?? 10);
    }
    playAnim(e, t, r, n, i, a, o, s, l, d, c) {
      TaskPlayAnim(e, t, r, n ?? 8, i ?? -8, a ?? -1, o ?? 0, s ?? 0, l ?? false, d ?? false, c ?? false);
    }
    playAnimAdvanced(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g) {
      TaskPlayAnimAdvanced(e, t, r, n, i, a, o, s, l, d ?? 8, c ?? -8, u ?? -1, h ?? 0, p ?? 0, m ?? 0, g ?? 0);
    }
    stopAnim(e) {
      ClearPedTasks(e);
    }
    aimGunAtCoord(e, t, r, n, i, a, o) {
      TaskAimGunAtCoord(e, t, r, n, i ?? -1, a ?? false, o ?? false);
    }
    aimGunAtEntity(e, t, r, n) {
      TaskAimGunAtEntity(e, t, r ?? -1, n ?? false);
    }
    shootAtCoord(e, t, r, n, i, a) {
      TaskShootAtCoord(e, t, r, n, i ?? -1, a);
    }
    shootAtEntity(e, t, r, n) {
      TaskShootAtEntity(e, t, r ?? -1, n);
    }
    combatPed(e, t, r, n) {
      TaskCombatPed(e, t, r ?? 0, n ?? 16);
    }
    combatHatedTargetsInArea(e, t, r, n, i, a) {
      TaskCombatHatedTargetsInArea(e, t, r, n, i, a ?? 0);
    }
    combatHatedTargetsAroundPed(e, t, r) {
      TaskCombatHatedTargetsAroundPed(e, t, r ?? 0);
    }
    enterVehicle(e, t, r, n, i, a, o) {
      TaskEnterVehicle(e, t, r ?? -1, n ?? -1, i ?? 1, a ?? 1, o ?? 0);
    }
    leaveVehicle(e, t, r) {
      TaskLeaveVehicle(e, t, r ?? 0);
    }
    openVehicleDoor(e, t, r, n, i) {
      TaskOpenVehicleDoor(e, t, r ?? 1000, n, i ?? 1);
    }
    vehicleGotoNavmesh(e, t, r, n, i, a, o, s) {
      TaskVehicleGotoNavmesh(e, t, r, n, i, a ?? 10, o ?? 786603, s ?? 4);
    }
    driveBy(e, t, r, n, i, a, o, s, l) {
      TaskDriveBy(e, t ?? 0, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 10, l, 1);
    }
    startScenarioInPlace(e, t, r, n) {
      TaskStartScenarioInPlace(e, t, r ?? 0, n ?? true);
    }
    startScenarioAtPosition(e, t, r, n, i, a, o, s, l) {
      TaskStartScenarioAtPosition(e, t, r, n, i, a ?? 0, o ?? -1, s ?? true, l ?? true);
    }
    useNearestScenarioToCoord(e, t, r, n, i, a) {
      TaskUseNearestScenarioToCoord(e, t, r, n, i, a ?? -1);
    }
    wanderInArea(e, t, r, n, i, a, o) {
      TaskWanderInArea(e, t, r, n, i, a ?? 1, o ?? 10);
    }
    wanderStandard(e, t, r) {
      TaskWanderStandard(e, t ?? 0, r ?? 0);
    }
    patrol(e, t, r) {
      TaskPatrol(e, t ?? 0, r ?? 0, true, false);
    }
    seekCoverFromPos(e, t, r, n, i, a) {
      TaskSeekCoverFromPos(e, t, r, n, i ?? -1, a ?? true);
    }
    guardCurrentPosition(e, t, r, n, i) {
      TaskGuardCurrentPosition(e, t ?? 0, r ?? 0, i ?? true);
    }
    stayInCover(e) {
      TaskStayInCover(e);
    }
    followWaypointRecording(e, t, r, n, i) {
      TaskFollowWaypointRecording(e, t, i ?? 0, r ?? "", n ?? 1);
    }
    pause(e, t) {
      TaskPause(e, t ?? 0);
    }
    handsUp(e, t, r, n, i) {
      TaskHandsUp(e, t ?? -1, r ?? 0, n ?? -1, i ?? false);
    }
    lookAtEntity(e, t, r, n, i) {
      TaskLookAtEntity(e, t, r ?? -1, n ?? 0, i ?? 2);
    }
    clearLookAt(e) {
      TaskClearLookAt(e);
    }
    taskPause(e, t) {
      TaskPause(e, t);
    }
    taskStandStill(e, t) {
      TaskStandStill(e, t);
    }
    taskJump(e, t) {
      TaskJump(e, t);
    }
    taskCower(e, t) {
      TaskCower(e, t);
    }
    taskHandsUp(e, t, r, n, i) {
      TaskHandsUp(e, t, r, n, i);
    }
    updateTaskHandsUpDuration(e, t) {
      UpdateTaskHandsUpDuration(e, t);
    }
    taskOpenVehicleDoor(e, t, r, n, i) {
      TaskOpenVehicleDoor(e, t, r, n, i);
    }
    taskEnterVehicle(e, t, r, n, i, a, o) {
      TaskEnterVehicle(e, t, r, n, i, a, o);
    }
    taskLeaveVehicle(e, t, r) {
      TaskLeaveVehicle(e, t, r);
    }
    taskGetOffBoat(e, t) {
      TaskGetOffBoat(e, t);
    }
    taskSkyDive(e) {
      TaskSkyDive(e);
    }
    taskParachute(e, t) {
      TaskParachute(e, t);
    }
    taskParachuteToTarget(e, t, r, n) {
      TaskParachuteToTarget(e, t, r, n);
    }
    setParachuteTaskTarget(e, t, r, n) {
      SetParachuteTaskTarget(e, t, r, n);
    }
    setParachuteTaskThrust(e, t) {
      SetParachuteTaskThrust(e, t);
    }
    taskRappelFromHeli(e, t) {
      TaskRappelFromHeli(e, t);
    }
    taskVehicleDriveWander(e, t, r, n) {
      TaskVehicleDriveWander(e, t, r, n);
    }
    taskAchieveHeading(e, t, r) {
      TaskAchieveHeading(e, t, r);
    }
    taskFollowPointRoute(e, t, r) {
      TaskFollowPointRoute(e, t, r);
    }
    taskSmartFleeCoord(e, t, r, n, i, a, o, s) {
      TaskSmartFleeCoord(e, t, r, n, i, a, o, s);
    }
    taskShockingEventReact(e, t) {
      TaskShockingEventReact(e, t);
    }
    taskWanderInArea(e, t, r, n, i, a, o) {
      TaskWanderInArea(e, t, r, n, i, a, o);
    }
    taskWanderStandard(e, t, r) {
      TaskWanderStandard(e, t, r);
    }
    taskStealthKill(e, t, r, n, i) {
      TaskStealthKill(e, t, r, n, i);
    }
    taskPlantBomb(e, t, r, n, i) {
      TaskPlantBomb(e, t, r, n, i);
    }
    taskStopPhoneGestureAnimation(e) {
      TaskStopPhoneGestureAnimation(e);
    }
    taskClearLookAt(e) {
      TaskClearLookAt(e);
    }
    taskPerformSequence(e, t) {
      TaskPerformSequence(e, t);
    }
    getIsTaskActive(e, t) {
      return GetIsTaskActive(e, t);
    }
    getScriptTaskStatus(e, t) {
      return GetScriptTaskStatus(e, t);
    }
    taskLeaveAnyVehicle(e, t, r) {
      TaskLeaveAnyVehicle(e, t, r);
    }
    taskAimGunScripted(e, t, r, n) {
      TaskAimGunScripted(e, t, r, n);
    }
    updateTaskAimGunScriptedTarget(e, t, r, n, i, a) {
      UpdateTaskAimGunScriptedTarget(e, t, r, n, i, a);
    }
    taskAimGunAtCoord(e, t, r, n, i, a, o) {
      TaskAimGunAtCoord(e, t, r, n, i, a, o);
    }
    taskShootAtCoord(e, t, r, n, i, a) {
      TaskShootAtCoord(e, t, r, n, i, a);
    }
    taskShuffleToNextVehicleSeat(e, t) {
      TaskShuffleToNextVehicleSeat(e, t);
    }
    clearPedSecondaryTask(e) {
      ClearPedSecondaryTask(e);
    }
    taskGotoEntityOffset(e, t, r, n, i, a, o) {
      TaskGotoEntityOffset(e, t, r, n, i, a, o);
    }
    taskVehicleTempAction(e, t, r, n) {
      TaskVehicleTempAction(e, t, r, n);
    }
    taskVehicleFollow(e, t, r, n, i, a) {
      TaskVehicleFollow(e, t, r, n, i, a);
    }
    taskVehicleChase(e, t) {
      TaskVehicleChase(e, t);
    }
    setTaskVehicleChaseBehaviorFlag(e, t, r) {
      SetTaskVehicleChaseBehaviorFlag(e, t, r);
    }
    setTaskVehicleChaseIdealPursuitDistance(e, t) {
      SetTaskVehicleChaseIdealPursuitDistance(e, t);
    }
    taskHeliChase(e, t, r, n, i) {
      TaskHeliChase(e, t, r, n, i);
    }
    taskPlaneChase(e, t, r, n, i) {
      TaskPlaneChase(e, t, r, n, i);
    }
    clearDrivebyTaskUnderneathDrivingTask(e) {
      ClearDrivebyTaskUnderneathDrivingTask(e);
    }
    isDrivebyTaskUnderneathDrivingTask(e) {
      return IsDrivebyTaskUnderneathDrivingTask(e);
    }
    isMountedWeaponTaskUnderneathDrivingTask(e) {
      return IsMountedWeaponTaskUnderneathDrivingTask(e);
    }
    taskUseMobilePhone(e, t) {
      TaskUseMobilePhone(e, t);
    }
    taskUseMobilePhoneTimed(e, t) {
      TaskUseMobilePhoneTimed(e, t);
    }
    taskClimb(e, t) {
      TaskClimb(e, t);
    }
    taskClimbLadder(e, t) {
      TaskClimbLadder(e, t);
    }
    taskSetDecisionMaker(e, t) {
      TaskSetDecisionMaker(e, t);
    }
    taskSeekCoverToCoords(e, t, r, n, i, a, o, s, l) {
      TaskSeekCoverToCoords(e, t, r, n, i, a, o, s, l);
    }
    taskGuardCurrentPosition(e, t, r, n) {
      TaskGuardCurrentPosition(e, t, r, n);
    }
    taskStandGuard(e, t, r, n, i, a) {
      TaskStandGuard(e, t, r, n, i, a);
    }
    setDriveTaskCruiseSpeed(e, t) {
      SetDriveTaskCruiseSpeed(e, t);
    }
    setDriveTaskDrivingStyle(e, t) {
      SetDriveTaskDrivingStyle(e, t);
    }
    taskStartScenarioInPlace(e, t, r, n) {
      TaskStartScenarioInPlace(e, t, r, n);
    }
    taskUseNearestScenarioToCoord(e, t, r, n, i, a) {
      TaskUseNearestScenarioToCoord(e, t, r, n, i, a);
    }
    taskUseNearestScenarioToCoordWarp(e, t, r, n, i, a) {
      TaskUseNearestScenarioToCoordWarp(e, t, r, n, i, a);
    }
    pedHasUseScenarioTask(e) {
      return PedHasUseScenarioTask(e);
    }
    taskCombatHatedTargetsInArea(e, t, r, n, i, a) {
      TaskCombatHatedTargetsInArea(e, t, r, n, i, a);
    }
    taskSwapWeapon(e, t) {
      TaskSwapWeapon(e, t);
    }
    taskReloadWeapon(e, t) {
      TaskReloadWeapon(e, t);
    }
    taskWrithe(e, t, r, n) {
      TaskWrithe(e, t, r, n);
    }
    taskPatrol(e, t, r, n, i) {
      TaskPatrol(e, t, r, n, i);
    }
    taskStayInCover(e) {
      TaskStayInCover(e);
    }
    taskVehicleShootAtPed(e, t, r) {
      TaskVehicleShootAtPed(e, t, r);
    }
    setHighFallTask(e, t, r, n) {
      SetHighFallTask(e, t, r, n);
    }
    taskSetBlockingOfNonTemporaryEvents(e, t) {
      TaskSetBlockingOfNonTemporaryEvents(e, t);
    }
    taskForceMotionState(e, t, r) {
      TaskForceMotionState(e, t, r);
    }
    updateTaskSweepAimEntity(e, t) {
      UpdateTaskSweepAimEntity(e, t);
    }
    updateHandsUpDuration(e, t) {
      UpdateTaskHandsUpDuration(e, t);
    }
    setPedPathCanUseClimbovers(e, t) {
      SetPedPathCanUseClimbovers(e, t);
    }
    setPedPathCanUseLadders(e, t) {
      SetPedPathCanUseLadders(e, t);
    }
    setPedPathCanDropFromHeight(e, t) {
      SetPedPathCanDropFromHeight(e, t);
    }
    setPedPathClimbCostModifier(e, t) {
      SetPedPathClimbCostModifier(e, t);
    }
    setPedPathMayEnterWater(e, t) {
      SetPedPathMayEnterWater(e, t);
    }
    setPedPathPreferToAvoidWater(e, t) {
      SetPedPathPreferToAvoidWater(e, t);
    }
    setPedPathAvoidFire(e, t) {
      SetPedPathAvoidFire(e, t);
    }
    setGlobalMinBirdFlightHeight(e) {
      SetGlobalMinBirdFlightHeight(e);
    }
    getNavmeshRouteDistanceRemaining(e) {
      const t = GetNavmeshRouteDistanceRemaining(e);
      return {
        result: t[0],
        distanceRemaining: t[1],
        isPathReady: !!t[2]
      };
    }
    getNavmeshRouteResult(e) {
      return GetNavmeshRouteResult(e);
    }
    stopAnimPlayback(e, t, r) {
      StopAnimPlayback(e, t, r);
    }
    setAnimWeight(e, t, r, n, i) {
      SetAnimWeight(e, t, r, n, i);
    }
    setAnimRate(e, t, r, n) {
      SetAnimRate(e, t, r, n);
    }
    setAnimLooped(e, t, r, n) {
      SetAnimLooped(e, t, r, n);
    }
    isPlayingPhoneGestureAnim(e) {
      return IsPlayingPhoneGestureAnim(e);
    }
    getPhoneGestureAnimCurrentTime(e) {
      return GetPhoneGestureAnimCurrentTime(e);
    }
    getPhoneGestureAnimTotalTime(e) {
      return GetPhoneGestureAnimTotalTime(e);
    }
    openSequence() {
      OpenSequenceTask(0);
      return 0;
    }
    closeSequence(e) {
      CloseSequenceTask(e);
    }
    clearSequence(e) {
      ClearSequenceTask(e);
      return 0;
    }
    setSequenceToRepeat(e, t) {
      SetSequenceToRepeat(e, t);
    }
    getSequenceProgress(e) {
      return GetSequenceProgress(e);
    }
    getActiveVehicleMissionType(e) {
      return GetActiveVehicleMissionType(e);
    }
    updateAimGunScriptedTarget(e, t, r, n, i, a) {
      UpdateTaskAimGunScriptedTarget(e, t, r, n, i, a);
    }
    getClipSetForScriptedGun(e) {
      return GetClipSetForScriptedGunTask(e);
    }
    clearPedSecondary(e) {
      ClearPedSecondaryTask(e);
    }
    setVehicleChaseBehaviorFlag(e, t, r) {
      SetTaskVehicleChaseBehaviorFlag(e, t, r);
    }
    setVehicleChaseIdealPursuitDistance(e, t) {
      SetTaskVehicleChaseIdealPursuitDistance(e, t);
    }
    controlMountedWeapon(e) {
      return ControlMountedWeapon(e);
    }
    clearPedTasksImmediately(e) {
      ClearPedTasksImmediately(e);
    }
    setNextDesiredMoveState(e) {
      SetNextDesiredMoveState(e);
    }
    setPedDesiredMoveBlendRatio(e, t) {
      SetPedDesiredMoveBlendRatio(e, t);
    }
    getPedDesiredMoveBlendRatio(e) {
      return GetPedDesiredMoveBlendRatio(e);
    }
    setDecisionMaker(e, t) {
      SetDecisionMaker(e, t);
    }
    setSphereDefensiveArea(e, t, r, n, i, a, o) {
      SetPedSphereDefensiveArea(e, t, r, n, i, a, o);
    }
    addCoverPoint(e, t, r, n, i, a, o, s) {
      return AddCoverPoint(e, t, r, n, i, a, o, s);
    }
    removeCoverPoint(e) {
      RemoveCoverPoint(e);
    }
    doesScriptedCoverPointExistAtCoords(e, t, r) {
      return DoesScriptedCoverPointExistAtCoords(e, t, r);
    }
    getScriptedCoverPointCoords(e) {
      return za(GetScriptedCoverPointCoords(e));
    }
    removeAllCoverBlockingAreas() {
      RemoveAllCoverBlockingAreas();
    }
    doesScenarioExistInArea(e, t, r, n, i) {
      return DoesScenarioExistInArea(e, t, r, n, i);
    }
    doesScenarioOfTypeExistInArea(e, t, r, n, i, a) {
      return Number(DoesScenarioOfTypeExistInArea(e, t, r, n, i, a));
    }
    isScenarioOccupied(e, t, r, n, i) {
      return IsScenarioOccupied(e, t, r, n, i);
    }
    pedHasUseScenario(e) {
      return PedHasUseScenarioTask(e);
    }
    playAnimOnRunningScenario(e, t, r) {
      PlayAnimOnRunningScenario(e, t, r);
    }
    doesScenarioGroupExist(e) {
      return DoesScenarioGroupExist(e);
    }
    isScenarioGroupEnabled(e) {
      return IsScenarioGroupEnabled(e);
    }
    setScenarioGroupEnabled(e, t) {
      SetScenarioGroupEnabled(e, t);
    }
    resetScenarioGroupsEnabled() {
      ResetScenarioGroupsEnabled();
    }
    setExclusiveScenarioGroup(e) {
      SetExclusiveScenarioGroup(e);
    }
    resetExclusiveScenarioGroup() {
      ResetExclusiveScenarioGroup();
    }
    isScenarioTypeEnabled(e) {
      return IsScenarioTypeEnabled(e);
    }
    setScenarioTypeEnabled(e, t) {
      SetScenarioTypeEnabled(e, t);
    }
    resetScenarioTypesEnabled() {
      ResetScenarioTypesEnabled();
    }
    isPedActiveInScenario(e) {
      return IsPedActiveInScenario(e);
    }
    isPedPlayingBaseClipInScenario(e) {
      return IsPedPlayingBaseClipInScenario(e);
    }
    setPedCanPlayAmbientIdles(e, t, r) {
      SetPedCanPlayAmbientIdles(e, t, r);
    }
    isPedGettingUp(e) {
      return IsPedGettingUp(e);
    }
    isPedInWrithe(e) {
      return IsPedInWrithe(e);
    }
    openPatrolRoute(e) {
      OpenPatrolRoute(e);
    }
    closePatrolRoute() {
      ClosePatrolRoute();
    }
    addPatrolRouteNode(e, t, r, n, i, a, o, s, l) {
      AddPatrolRouteNode(e, t, r, n, i, a, o, s, l);
    }
    addPatrolRouteLink(e, t) {
      AddPatrolRouteLink(e, t);
    }
    createPatrolRoute() {
      CreatePatrolRoute();
    }
    deletePatrolRoute(e) {
      DeletePatrolRoute(e);
    }
    setHighFall(e, t, r, n) {
      SetHighFallTask(e, t, r, n);
    }
    requestWaypointRecording(e) {
      RequestWaypointRecording(e);
    }
    getIsWaypointRecordingLoaded(e) {
      return GetIsWaypointRecordingLoaded(e);
    }
    removeWaypointRecording(e) {
      RemoveWaypointRecording(e);
    }
    waypointRecordingGetNumPoints(e) {
      const t = WaypointRecordingGetNumPoints(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    waypointRecordingGetCoord(e, t) {
      const r = WaypointRecordingGetCoord(e, t);
      if (r) {
        return za(r[1]);
      } else {
        return null;
      }
    }
    waypointRecordingGetSpeedAtPoint(e, t) {
      return WaypointRecordingGetSpeedAtPoint(e, t);
    }
    waypointRecordingGetClosestWaypoint(e, t, r, n) {
      const i = WaypointRecordingGetClosestWaypoint(e, t, r, n);
      if (Array.isArray(i)) {
        return i[1];
      } else {
        return i;
      }
    }
    isWaypointPlaybackGoingOnForPed(e) {
      return IsWaypointPlaybackGoingOnForPed(e);
    }
    getPedWaypointProgress(e) {
      return GetPedWaypointProgress(e);
    }
    getPedWaypointDistance(e) {
      return GetPedWaypointDistance(e);
    }
    setPedWaypointRouteOffset(e, t, r, n) {
      return SetPedWaypointRouteOffset(e, t, r, n);
    }
    getWaypointDistanceAlongRoute(e, t) {
      return GetWaypointDistanceAlongRoute(e, t);
    }
    waypointPlaybackGetIsPaused(e) {
      return WaypointPlaybackGetIsPaused(e);
    }
    waypointPlaybackPause(e, t, r) {
      WaypointPlaybackPause(e, t, r);
    }
    waypointPlaybackResume(e, t, r, n) {
      WaypointPlaybackResume(e, t, r, n);
    }
    waypointPlaybackOverrideSpeed(e, t, r) {
      WaypointPlaybackOverrideSpeed(e, t, r);
    }
    waypointPlaybackUseDefaultSpeed(e) {
      WaypointPlaybackUseDefaultSpeed(e);
    }
    useWaypointRecordingAsAssistedMovementRoute(e, t, r, n) {
      UseWaypointRecordingAsAssistedMovementRoute(e, t, r, n);
    }
    waypointPlaybackStartAimingAtPed(e, t, r) {
      WaypointPlaybackStartAimingAtPed(e, t, r);
    }
    waypointPlaybackStartAimingAtCoord(e, t, r, n, i) {
      WaypointPlaybackStartAimingAtCoord(e, t, r, n, i);
    }
    waypointPlaybackStartShootingAtPed(e, t, r, n) {
      WaypointPlaybackStartShootingAtPed(e, t, r, n);
    }
    waypointPlaybackStartShootingAtCoord(e, t, r, n, i, a) {
      WaypointPlaybackStartShootingAtCoord(e, t, r, n, i, a);
    }
    waypointPlaybackStopAimingOrShooting(e) {
      WaypointPlaybackStopAimingOrShooting(e);
    }
    assistedMovementRequestRoute(e) {
      AssistedMovementRequestRoute(e);
    }
    assistedMovementRemoveRoute(e) {
      AssistedMovementRemoveRoute(e);
    }
    assistedMovementIsRouteLoaded(e) {
      return AssistedMovementIsRouteLoaded(e);
    }
    assistedMovementSetRouteProperties(e, t) {
      AssistedMovementSetRouteProperties(e, t);
    }
    assistedMovementOverrideLoadDistanceThisFrame(e) {
      AssistedMovementOverrideLoadDistanceThisFrame(e);
    }
    isWaypointPlaybackGoingOnForVehicle(e) {
      return IsWaypointPlaybackGoingOnForVehicle(e);
    }
    getVehicleWaypointProgress(e) {
      return GetVehicleWaypointProgress(e);
    }
    getVehicleWaypointTargetPoint(e) {
      return GetVehicleWaypointTargetPoint(e);
    }
    vehicleWaypointPlaybackPause(e) {
      VehicleWaypointPlaybackPause(e);
    }
    vehicleWaypointPlaybackResume(e) {
      VehicleWaypointPlaybackResume(e);
    }
    vehicleWaypointPlaybackUseDefaultSpeed(e) {
      VehicleWaypointPlaybackUseDefaultSpeed(e);
    }
    vehicleWaypointPlaybackOverrideSpeed(e, t) {
      VehicleWaypointPlaybackOverrideSpeed(e, t);
    }
    setBlockingOfNonTemporaryEvents(e, t) {
      SetBlockingOfNonTemporaryEvents(e, t);
    }
    forceMotionState(e, t, r) {
      return ForcePedMotionState(e, t, r, 0, false);
    }
    isMoveNetworkActive(e) {
      return IsTaskMoveNetworkActive(e);
    }
    isMoveNetworkReadyForTransition(e) {
      return IsTaskMoveNetworkReadyForTransition(e);
    }
    requestMoveNetworkStateTransition(e, t) {
      return RequestTaskMoveNetworkStateTransition(e, t);
    }
    getMoveNetworkState(e) {
      return GetTaskMoveNetworkState(e);
    }
    setMoveNetworkSignalFloat(e, t, r) {
      SetTaskMoveNetworkSignalFloat(e, t, r);
    }
    setMoveNetworkSignalBool(e, t, r) {
      SetTaskMoveNetworkSignalBool(e, t, r);
    }
    getMoveNetworkSignalFloat(e, t) {
      return GetTaskMoveNetworkSignalFloat(e, t);
    }
    getMoveNetworkSignalBool(e, t) {
      return GetTaskMoveNetworkSignalBool(e, t);
    }
    getMoveNetworkEvent(e, t) {
      return GetTaskMoveNetworkEvent(e, t);
    }
    isMoveBlendRatioStill(e) {
      return IsMoveBlendRatioStill(e);
    }
    isMoveBlendRatioWalking(e) {
      return IsMoveBlendRatioWalking(e);
    }
    isMoveBlendRatioRunning(e) {
      return IsMoveBlendRatioRunning(e);
    }
    isMoveBlendRatioSprinting(e) {
      return IsMoveBlendRatioSprinting(e);
    }
    isPedStill(e) {
      return IsPedStill(e);
    }
    isPedWalking(e) {
      return IsPedWalking(e);
    }
    isPedRunning(e) {
      return IsPedRunning(e);
    }
    isPedSprinting(e) {
      return IsPedSprinting(e);
    }
    isPedStrafing(e) {
      return IsPedStrafing(e);
    }
    updateSweepAimEntity(e, t) {
      UpdateTaskSweepAimEntity(e, t);
    }
    updateSweepAimPosition(e, t, r, n) {
      UpdateTaskSweepAimPosition(e, t, r, n);
    }
    isPedRunningArrest(e) {
      return IsPedRunningArrestTask(e);
    }
    isPedBeingArrested(e) {
      return IsPedBeingArrested(e);
    }
    uncuffPed(e) {
      UncuffPed(e);
    }
    isPedCuffed(e) {
      return IsPedCuffed(e);
    }
    taskVehicleDriveToCoord(e, t, r, n, i, a, o, s, l, d, c) {
      TaskVehicleDriveToCoord(e, t, r, n, i, a, o, s, l, d, c);
    }
    taskVehicleDriveToCoordLongrange(e, t, r, n, i, a, o, s) {
      TaskVehicleDriveToCoordLongrange(e, t, r, n, i, a, o, s);
    }
    taskGoStraightToCoord(e, t, r, n, i, a, o, s) {
      TaskGoStraightToCoord(e, t, r, n, i, a, o, s);
    }
    taskVehiclePark(e, t, r, n, i, a, o, s, l) {
      TaskVehiclePark(e, t, r, n, i, a, o, s, l);
    }
    taskFollowNavMeshToCoord(e, t, r, n, i, a, o, s, l) {
      TaskFollowNavMeshToCoord(e, t, r, n, i, a, o, s, l);
    }
    taskFollowNavMeshToCoordAdvanced(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskFollowNavMeshToCoordAdvanced(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    taskGoToCoordAnyMeans(e, t, r, n, i, a, o, s, l) {
      TaskGoToCoordAnyMeans(e, t, r, n, i, a, o, s, l);
    }
    taskGoToCoordAnyMeansExtraParams(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskGoToCoordAnyMeansExtraParams(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    taskPlayAnim(e, t, r, n, i, a, o, s, l, d, c) {
      TaskPlayAnim(e, t, r, n, i, a, o, s, l, d, c);
    }
    taskPlayAnimAdvanced(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g) {
      TaskPlayAnimAdvanced(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g);
    }
    stopAnimTask(e, t, r, n) {
      StopAnimTask(e, t, r, n);
    }
    taskPlayPhoneGestureAnimation(e, t, r, n, i, a, o, s) {
      TaskPlayPhoneGestureAnimation(e, t, r, n, i, a, o, s);
    }
    taskVehicleMission(e, t, r, n, i, a, o, s, l) {
      TaskVehicleMission(e, t, r, n, i, a, o, s, l);
    }
    taskVehicleMissionCoorsTarget(e, t, r, n, i, a, o, s, l, d, c) {
      TaskVehicleMissionCoorsTarget(e, t, r, n, i, a, o, s, l, d, c);
    }
    taskVehicleEscort(e, t, r, n, i, a, o, s, l) {
      TaskVehicleEscort(e, t, r, n, i, a, o, s, l);
    }
    taskVehicleHeliProtect(e, t, r, n, i, a, o, s) {
      TaskVehicleHeliProtect(e, t, r, n, i, a, o, s);
    }
    taskPlaneLand(e, t, r, n, i, a, o, s) {
      TaskPlaneLand(e, t, r, n, i, a, o, s);
    }
    taskHeliMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskHeliMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    taskPlaneMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      TaskPlaneMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    taskBoatMission(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskBoatMission(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    taskDriveBy(e, t, r, n, i, a, o, s, l, d) {
      TaskDriveBy(e, t, r, n, i, a, o, s, l, d);
    }
    taskGuardSphereDefensiveArea(e, t, r, n, i, a, o, s, l, d, c) {
      TaskGuardSphereDefensiveArea(e, t, r, n, i, a, o, s, l, d, c);
    }
    taskStartScenarioAtPosition(e, t, r, n, i, a, o, s, l) {
      TaskStartScenarioAtPosition(e, t, r, n, i, a, o, s, l);
    }
    taskVehicleGotoNavmesh(e, t, r, n, i, a, o, s) {
      TaskVehicleGotoNavmesh(e, t, r, n, i, a, o, s);
    }
    taskGoToCoordWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskGoToCoordWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    taskGoToCoordAndAimAtHatedEntitiesNearCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskGoToCoordAndAimAtHatedEntitiesNearCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    taskVehicleFollowWaypointRecording(e, t, r, n, i, a, o, s, l, d) {
      TaskVehicleFollowWaypointRecording(e, t, r, n, i, a, o, s, l, d);
    }
    taskMoveNetwork(e, t, r, n, i, a) {
      TaskMoveNetworkByName(e, t, r, n, i, a);
    }
    taskMoveNetworkAdvanced(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      TaskMoveNetworkAdvancedByName(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    taskSynchronizedScene(e, t, r, n, i, a, o, s, l, d) {
      TaskSynchronizedScene(e, t, r, n, i, a, o, s, l, d);
    }
    standStill(e, t) {
      TaskStandStill(e, t);
    }
    jump(e, t) {
      TaskJump(e, t);
    }
    cower(e, t) {
      TaskCower(e, t);
    }
    getOffBoat(e, t) {
      TaskGetOffBoat(e, t);
    }
    skyDive(e) {
      TaskSkyDive(e);
    }
    parachute(e, t) {
      TaskParachute(e, t);
    }
    parachuteToTarget(e, t, r, n) {
      TaskParachuteToTarget(e, t, r, n);
    }
    setParachuteTarget(e, t, r, n) {
      SetParachuteTaskTarget(e, t, r, n);
    }
    setParachuteThrust(e, t) {
      SetParachuteTaskThrust(e, t);
    }
    rappelFromHeli(e, t) {
      TaskRappelFromHeli(e, t);
    }
    followToOffsetOfEntity(e, t, r, n, i, a, o, s, l) {
      TaskFollowToOffsetOfEntity(e, t, r, n, i, a, o, s, l);
    }
    goStraightToCoordRelativeToEntity(e, t, r, n, i, a, o) {
      TaskGoStraightToCoordRelativeToEntity(e, t, r, n, i, a, o);
    }
    achieveHeading(e, t, r) {
      TaskAchieveHeading(e, t, r);
    }
    flushRoute() {
      TaskFlushRoute();
    }
    extendRoute(e, t, r) {
      TaskExtendRoute(e, t, r);
    }
    followPointRoute(e, t, r) {
      TaskFollowPointRoute(e, t, r);
    }
    goToEntity(e, t, r, n, i, a, o) {
      TaskGoToEntity(e, t, r, n, i, a, o);
    }
    smartFleeCoord(e, t, r, n, i, a, o, s) {
      TaskSmartFleeCoord(e, t, r, n, i, a, o, s);
    }
    smartFleePed(e, t, r, n, i, a) {
      TaskSmartFleePed(e, t, r, n, i, a);
    }
    reactAndFleePed(e, t) {
      TaskReactAndFleePed(e, t);
    }
    shockingEventReact(e, t) {
      TaskShockingEventReact(e, t);
    }
    wanderSpecific(e, t, r, n) {
      TaskWanderSpecific(e, t, r, n);
    }
    vehiclePark(e, t, r, n, i, a, o, s, l) {
      TaskVehiclePark(e, t, r, n, i, a, o, s, l);
    }
    stealthKill(e, t, r, n, i) {
      TaskStealthKill(e, t, r, n, i);
    }
    plantBomb(e, t, r, n, i) {
      TaskPlantBomb(e, t, r, n, i);
    }
    followNavMeshToCoordAdvanced(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskFollowNavMeshToCoordAdvanced(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    goToCoordAnyMeansExtraParams(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskGoToCoordAnyMeansExtraParams(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    goToCoordAnyMeansExtraParamsWithCruiseSpeed(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    playPhoneGestureAnimation(e, t, r, n, i, a, o, s) {
      TaskPlayPhoneGestureAnimation(e, t, r, n, i, a, o, s);
    }
    stopPhoneGestureAnimation(e) {
      TaskStopPhoneGestureAnimation(e);
    }
    vehiclePlayAnim(e, t, r) {
      TaskVehiclePlayAnim(e, t, r);
    }
    lookAtCoord(e, t, r, n, i, a, o) {
      TaskLookAtCoord(e, t, r, n, i, a, o);
    }
    performSequence(e, t) {
      TaskPerformSequence(e, t);
    }
    performSequenceLocally(e, t) {
      TaskPerformSequenceLocally(e, t);
    }
    leaveAnyVehicle(e, t, r) {
      TaskLeaveAnyVehicle(e, t, r);
    }
    aimGunScripted(e, t, r, n) {
      TaskAimGunScripted(e, t, r, n);
    }
    aimGunScriptedWithTarget(e, t, r, n, i, a, o, s) {
      TaskAimGunScriptedWithTarget(e, t, r, n, i, a, o, s);
    }
    turnPedToFaceEntity(e, t, r) {
      TaskTurnPedToFaceEntity(e, t, r);
    }
    shuffleToNextVehicleSeat(e, t) {
      TaskShuffleToNextVehicleSeat(e, t);
    }
    clearPedS(e) {
      ClearPedTasks(e);
    }
    everyoneLeaveVehicle(e) {
      TaskEveryoneLeaveVehicle(e);
    }
    gotoEntityOffset(e, t, r, n, i, a, o) {
      TaskGotoEntityOffset(e, t, r, n, i, a, o);
    }
    gotoEntityOffsetXy(e, t, r, n, i, a, o, s) {
      TaskGotoEntityOffsetXy(e, t, r, n, i, a, o, s);
    }
    turnPedToFaceCoord(e, t, r, n, i) {
      TaskTurnPedToFaceCoord(e, t, r, n, i);
    }
    vehicleTempAction(e, t, r, n) {
      TaskVehicleTempAction(e, t, r, n);
    }
    vehicleMission(e, t, r, n, i, a, o, s, l) {
      TaskVehicleMission(e, t, r, n, i, a, o, s, l);
    }
    vehicleMissionPedTarget(e, t, r, n, i, a, o, s, l) {
      TaskVehicleMissionPedTarget(e, t, r, n, i, a, o, s, l);
    }
    vehicleMissionCoorsTarget(e, t, r, n, i, a, o, s, l, d, c) {
      TaskVehicleMissionCoorsTarget(e, t, r, n, i, a, o, s, l, d, c);
    }
    vehicleEscort(e, t, r, n, i, a, o, s, l) {
      TaskVehicleEscort(e, t, r, n, i, a, o, s, l);
    }
    vehicleHeliProtect(e, t, r, n, i, a, o, s) {
      TaskVehicleHeliProtect(e, t, r, n, i, a, o, s);
    }
    heliChase(e, t, r, n, i) {
      TaskHeliChase(e, t, r, n, i);
    }
    planeChase(e, t, r, n, i) {
      TaskPlaneChase(e, t, r, n, i);
    }
    planeLand(e, t, r, n, i, a, o, s) {
      TaskPlaneLand(e, t, r, n, i, a, o, s);
    }
    planeGotoPreciseVtol(e, t, r, n, i, a, o, s, l, d) {
      TaskPlaneGotoPreciseVtol(e, t, r, n, i, a, o, s, l, d);
    }
    submarineGotoAndStop(e, t, r, n, i, a) {
      TaskSubmarineGotoAndStop(e, t, r, n, i, a);
    }
    heliMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskHeliMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    heliEscortHeli(e, t, r, n, i, a) {
      TaskHeliEscortHeli(e, t, r, n, i, a);
    }
    planeMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      TaskPlaneMission(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    planeTaxi(e, t, r, n, i, a, o) {
      TaskPlaneTaxi(e, t, r, n, i, a, o);
    }
    boatMission(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskBoatMission(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    setDrivebyTarget(e, t, r, n, i, a) {
      SetDrivebyTaskTarget(e, t, r, n, i, a);
    }
    clearDrivebyUnderneathDrivingTask(e) {
      ClearDrivebyTaskUnderneathDrivingTask(e);
    }
    setMountedWeaponTarget(e, t, r, n, i, a, o, s) {
      SetMountedWeaponTarget(e, t, r, n, i, a);
    }
    useMobilePhone(e, t) {
      TaskUseMobilePhone(e, t);
    }
    useMobilePhoneTimed(e, t) {
      TaskUseMobilePhoneTimed(e, t);
    }
    chatToPed(e, t, r, n, i, a, o, s) {
      TaskChatToPed(e, t, r, n, i, a, o, s);
    }
    warpPedIntoVehicle(e, t, r) {
      TaskWarpPedIntoVehicle(e, t, r);
    }
    climb(e, t) {
      TaskClimb(e, t);
    }
    climbLadder(e, t) {
      TaskClimbLadder(e, t);
    }
    performSequenceFromProgress(e, t, r, n) {
      TaskPerformSequenceFromProgress(e, t, r, n);
    }
    gotoEntityAiming(e, t, r, n) {
      TaskGotoEntityAiming(e, t, r, n);
    }
    clearDefensiveArea(e) {
      TaskClearDefensiveArea(e);
    }
    pedSlideToCoord(e, t, r, n, i, a) {
      TaskPedSlideToCoord(e, t, r, n, i, a);
    }
    pedSlideToCoordHdgRate(e, t, r, n, i, a, o) {
      TaskPedSlideToCoordHdgRate(e, t, r, n, i, a, o);
    }
    combatPedTimed(e, t, r, n) {
      TaskCombatPedTimed(e, t, r, n);
    }
    seekCoverFromPed(e, t, r, n) {
      TaskSeekCoverFromPed(e, t, r, n);
    }
    seekCoverToCoverPoint(e, t, r, n, i, a, o) {
      TaskSeekCoverToCoverPoint(e, t, r, n, i, a, o);
    }
    seekCoverToCoords(e, t, r, n, i, a, o, s, l) {
      TaskSeekCoverToCoords(e, t, r, n, i, a, o, s, l);
    }
    putPedDirectlyIntoCover(e, t, r, n, i, a, o, s, l, d, c) {
      TaskPutPedDirectlyIntoCover(e, t, r, n, i, a, o, s, l, d, c);
    }
    exitCover(e, t, r, n, i) {
      TaskExitCover(e, t, r, n, i);
    }
    putPedDirectlyIntoMelee(e, t, r, n, i, a) {
      TaskPutPedDirectlyIntoMelee(e, t, r, n, i, a);
    }
    toggleDuck(e, t) {
      TaskToggleDuck(e, t);
    }
    guardAssignedDefensiveArea(e, t, r, n, i, a, o) {
      TaskGuardAssignedDefensiveArea(e, t, r, n, i, a, o);
    }
    guardSphereDefensiveArea(e, t, r, n, i, a, o, s, l, d, c) {
      TaskGuardSphereDefensiveArea(e, t, r, n, i, a, o, s, l, d, c);
    }
    standGuard(e, t, r, n, i, a) {
      TaskStandGuard(e, t, r, n, i, a);
    }
    setDriveCruiseSpeed(e, t) {
      SetDriveTaskCruiseSpeed(e, t);
    }
    setDriveMaxCruiseSpeed(e, t) {
      SetDriveTaskMaxCruiseSpeed(e, t);
    }
    setDriveDrivingStyle(e, t) {
      SetDriveTaskDrivingStyle(e, t);
    }
    addCoverBlockingArea(e, t, r, n, i, a, o, s, l, d) {
      AddCoverBlockingArea(e, t, r, n, i, a, o, s, l, d);
    }
    useNearestScenarioToCoordWarp(e, t, r, n, i, a) {
      TaskUseNearestScenarioToCoordWarp(e, t, r, n, i, a);
    }
    useNearestScenarioChainToCoord(e, t, r, n, i, a) {
      TaskUseNearestScenarioChainToCoord(e, t, r, n, i, a);
    }
    useNearestScenarioChainToCoordWarp(e, t, r, n, i, a) {
      TaskUseNearestScenarioChainToCoordWarp(e, t, r, n, i, a);
    }
    combatHatedTargetsAroundPedTimed(e, t, r, n) {
      TaskCombatHatedTargetsAroundPedTimed(e, t, r, n);
    }
    throwProjectile(e, t, r, n) {
      TaskThrowProjectile(e, t, r, n);
    }
    swapWeapon(e, t) {
      TaskSwapWeapon(e, t);
    }
    reloadWeapon(e, t) {
      TaskReloadWeapon(e, t);
    }
    writhe(e, t, r, n) {
      TaskWrithe(e, t, r, n);
    }
    addVehicleSubAttackCoord(e, t, r, n) {
      AddVehicleSubtaskAttackCoord(e, t, r, n);
    }
    addVehicleSubAttackPed(e, t) {
      AddVehicleSubtaskAttackPed(e, t);
    }
    vehicleShootAtPed(e, t, r) {
      TaskVehicleShootAtPed(e, t, r);
    }
    vehicleAimAtPed(e, t) {
      TaskVehicleAimAtPed(e, t);
    }
    vehicleShootAtCoord(e, t, r, n, i) {
      TaskVehicleShootAtCoord(e, t, r, n, i);
    }
    vehicleAimAtCoord(e, t, r, n) {
      TaskVehicleAimAtCoord(e, t, r, n);
    }
    goToCoordWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskGoToCoordWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    goToCoordWhileAimingAtEntity(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      TaskGoToCoordWhileAimingAtEntity(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    goToCoordAndAimAtHatedEntitiesNearCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      TaskGoToCoordAndAimAtHatedEntitiesNearCoord(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    goToEntityWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u) {
      TaskGoToEntityWhileAimingAtCoord(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    goToEntityWhileAimingAtEntity(e, t, r, n, i, a, o, s, l, d) {
      TaskGoToEntityWhileAimingAtEntity(e, t, r, n, i, a, o, s, l, d);
    }
    vehicleFollowWaypointRecording(e, t, r, n, i, a, o, s, l, d) {
      TaskVehicleFollowWaypointRecording(e, t, r, n, i, a, o, s, l, d);
    }
    moveNetworkByName(e, t, r, n, i, a) {
      TaskMoveNetworkByName(e, t, r, n, i, a);
    }
    moveNetworkAdvancedByName(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      TaskMoveNetworkAdvancedByName(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    setMoveNetworkSignalFloat2(e, t, r) {
      SetTaskMoveNetworkSignalFloat_2(e, t, r);
    }
    synchronizedScene(e, t, r, n, i, a, o, s, l, d) {
      TaskSynchronizedScene(e, t, r, n, i, a, o, s, l, d);
    }
    arrestPed(e, t) {
      TaskArrestPed(e, t);
    }
    taskScriptedAnimation(e) {
      const t = TaskScriptedAnimation(e, 0, 0);
      if (Array.isArray(t)) {
        return {
          p1: t[0],
          p2: t[1],
          p3: t[2]
        };
      } else {
        return t;
      }
    }
    scriptedAnimation(e) {
      const t = TaskScriptedAnimation(e, 0, 0);
      if (Array.isArray(t)) {
        return {
          p1: t[0],
          p2: t[1],
          p3: t[2]
        };
      } else {
        return t;
      }
    }
    playEntityScriptedAnim(e) {
      const t = PlayEntityScriptedAnim(e, 0, 0);
      if (Array.isArray(t)) {
        return {
          p1: t[0],
          p2: t[1],
          p3: t[2]
        };
      } else {
        return t;
      }
    }
    sweepAimEntity(e, t, r, n, i, a, o, s, l) {
      TaskSweepAimEntity(e, t, r, n, i, a, o, s, l);
    }
    sweepAimPosition(e, t, r, n, i, a, o) {
      const s = TaskSweepAimPosition(e, t, r, n, i, a, o);
      if (Array.isArray(s)) {
        return {
          p1: s[0],
          p2: s[1],
          p3: s[2],
          p4: s[3]
        };
      } else {
        return s;
      }
    }
    getIsActive(e, t) {
      return GetIsTaskActive(e, t);
    }
    getScriptStatus(e, t) {
      return GetScriptTaskStatus(e, t);
    }
    isDrivebyUnderneathDrivingTask(e) {
      return IsDrivebyTaskUnderneathDrivingTask(e);
    }
    isMountedWeaponUnderneathDrivingTask(e) {
      return IsMountedWeaponTaskUnderneathDrivingTask(e);
    }
    moveNetworkByNameWithInitParams(e, t, r, n, i, a) {
      return TaskMoveNetworkByNameWithInitParams(e, t, r, n, i, a);
    }
    rappelDownWall(e, t, r, n, i, a, o, s, l, d, c) {
      TaskRappelDownWallUsingClipsetOverride(e, t, r, n, i, a, o, s, l, d, c);
    }
    clearVehicleS(e) {
      ClearVehicleCrashTask(e);
    }
    agitatedAction(e, t) {
      TaskAgitatedAction(e, t);
    }
  }
  class $a {
    constructor() {
      this.unk = ja();
    }
    requestModel(e) {
      RequestModel(e);
    }
    hasModelLoaded(e) {
      return HasModelLoaded(e);
    }
    setModelAsNoLongerNeeded(e) {
      SetModelAsNoLongerNeeded(e);
    }
    isModelValid(e) {
      return IsModelValid(e);
    }
    isModelAPed(e) {
      return IsModelAPed(e);
    }
    isModelAVehicle(e) {
      return IsModelAVehicle(e);
    }
    isModelInCdimage(e) {
      return IsModelInCdimage(e);
    }
    requestAnimDict(e) {
      RequestAnimDict(e);
    }
    hasAnimDictLoaded(e) {
      return HasAnimDictLoaded(e);
    }
    removeAnimDict(e) {
      RemoveAnimDict(e);
    }
    requestAnimSet(e) {
      RequestAnimSet(e);
    }
    hasAnimSetLoaded(e) {
      return HasAnimSetLoaded(e);
    }
    removeAnimSet(e) {
      RemoveAnimSet(e);
    }
    requestClipSet(e) {
      RequestClipSet(e);
    }
    hasClipSetLoaded(e) {
      return HasClipSetLoaded(e);
    }
    removeClipSet(e) {
      RemoveClipSet(e);
    }
    requestPtfxAsset(e) {
      RequestParticleFxAsset(e);
    }
    hasPtfxAssetLoaded(e) {
      return HasParticleFxAssetLoaded(e);
    }
    removePtfxAsset(e) {
      RemoveParticleFxAsset(e);
    }
    requestNamedPtfxAsset(e) {
      RequestNamedPtfxAsset(e);
    }
    hasNamedPtfxAssetLoaded(e) {
      return HasNamedPtfxAssetLoaded(e);
    }
    requestCollisionForModel(e) {
      RequestCollisionForModel(e);
    }
    hasCollisionForModelLoaded(e) {
      return HasCollisionForModelLoaded(e);
    }
    requestIpl(e) {
      RequestIpl(e);
    }
    removeIpl(e) {
      RemoveIpl(e);
    }
    isIplActive(e) {
      return IsIplActive(e);
    }
    loadScene(e, t, r) {
      LoadScene(e, t, r);
    }
    startPlayerSwitch(e, t, r, n) {
      StartPlayerSwitch(e, t, r ?? 0, n ?? 0);
    }
    stopPlayerSwitch() {
      StopPlayerSwitch();
    }
    isPlayerSwitchInProgress() {
      return IsPlayerSwitchInProgress();
    }
    requestModelAsync(e, t = 5000) {
      return qa(RequestModel, HasModelLoaded, e, t);
    }
    requestAnimDictAsync(e, t = 5000) {
      return qa(RequestAnimDict, HasAnimDictLoaded, e, t);
    }
    requestAnimSetAsync(e, t = 5000) {
      return qa(RequestAnimSet, HasAnimSetLoaded, e, t);
    }
    requestClipSetAsync(e, t = 5000) {
      return qa(RequestClipSet, HasClipSetLoaded, e, t);
    }
    requestNamedPtfxAssetAsync(e, t = 5000) {
      return qa(RequestNamedPtfxAsset, HasNamedPtfxAssetLoaded, e, t);
    }
    requestCollisionForModelAsync(e, t = 5000) {
      return qa(RequestCollisionForModel, HasCollisionForModelLoaded, e, t);
    }
    setStreaming(e) {
      SetStreaming(e);
    }
    setGamePausesForStreaming(e) {
      SetGamePausesForStreaming(e);
    }
    removeNamedPtfxAsset(e) {
      RemoveNamedPtfxAsset(e);
    }
    loadAllObjectsNow() {
      LoadAllObjectsNow();
    }
    networkUpdateLoadScene() {
      return NetworkUpdateLoadScene();
    }
    isNetworkLoadingScene() {
      return IsNetworkLoadingScene();
    }
    setInteriorActive(e, t) {
      SetInteriorActive(e, t);
    }
    requestMenuPedModel(e) {
      RequestMenuPedModel(e);
    }
    requestModelsInRoom(e, t) {
      RequestModelsInRoom(e, t);
    }
    requestCollisionAtCoord(e, t, r) {
      RequestCollisionAtCoord(e, t, r);
    }
    requestAdditionalCollisionAtCoord(e, t, r) {
      RequestAdditionalCollisionAtCoord(e, t, r);
    }
    doesAnimDictExist(e) {
      return DoesAnimDictExist(e);
    }
    setReducePedModelBudget(e) {
      SetReducePedModelBudget(e);
    }
    setReduceVehicleModelBudget(e) {
      SetReduceVehicleModelBudget(e);
    }
    setDitchPoliceModels(e) {
      SetDitchPoliceModels(e);
    }
    setVehiclePopulationBudget(e) {
      SetVehiclePopulationBudget(e);
    }
    setPedPopulationBudget(e) {
      SetPedPopulationBudget(e);
    }
    clearFocus() {
      ClearFocus();
    }
    setFocusPosAndVel(e, t, r, n, i, a) {
      SetFocusPosAndVel(e, t, r, n, i, a);
    }
    setFocusEntity(e) {
      SetFocusEntity(e);
    }
    isEntityFocus(e) {
      return IsEntityFocus(e);
    }
    setMapdatacullboxEnabled(e, t) {
      SetMapdatacullboxEnabled(e, t);
    }
    newLoadSceneStartSphere(e, t, r, n, i) {
      return NewLoadSceneStartSphere(e, t, r, n, i);
    }
    newLoadSceneStop() {
      NewLoadSceneStop();
    }
    isNewLoadSceneActive() {
      return IsNewLoadSceneActive();
    }
    isNewLoadSceneLoaded() {
      return IsNewLoadSceneLoaded();
    }
    getPlayerSwitchType() {
      return GetPlayerSwitchType();
    }
    getIdealPlayerSwitchType(e, t, r, n, i, a) {
      return GetIdealPlayerSwitchType(e, t, r, n, i, a);
    }
    getPlayerSwitchState() {
      return GetPlayerSwitchState();
    }
    getPlayerShortSwitchState() {
      return GetPlayerShortSwitchState();
    }
    getPlayerSwitchJumpCutIndex() {
      return GetPlayerSwitchJumpCutIndex();
    }
    setPlayerSwitchEstablishingShot(e) {
      SetPlayerSwitchEstablishingShot(e);
    }
    allowPlayerSwitchPan() {
      AllowPlayerSwitchPan();
    }
    allowPlayerSwitchOutro() {
      AllowPlayerSwitchOutro();
    }
    allowPlayerSwitchAscent() {
      AllowPlayerSwitchAscent();
    }
    allowPlayerSwitchDescent() {
      AllowPlayerSwitchDescent();
    }
    isSwitchReadyForDescent() {
      return IsSwitchReadyForDescent();
    }
    enableSwitchPauseBeforeDescent() {
      EnableSwitchPauseBeforeDescent();
    }
    disableSwitchOutroFx() {
      DisableSwitchOutroFx();
    }
    getPlayerSwitchInterpOutDuration() {
      return GetPlayerSwitchInterpOutDuration();
    }
    isSwitchSkippingDescent() {
      return IsSwitchSkippingDescent();
    }
    getLodscale() {
      return GetLodscale();
    }
    overrideLodscaleThisFrame(e) {
      OverrideLodscaleThisFrame(e);
    }
    prefetchSrl(e) {
      PrefetchSrl(e);
    }
    isSrlLoaded() {
      return IsSrlLoaded();
    }
    beginSrl() {
      BeginSrl();
    }
    endSrl() {
      EndSrl();
    }
    setSrlTime(e) {
      SetSrlTime(e);
    }
    setHdArea(e, t, r, n) {
      SetHdArea(e, t, r, n);
    }
    clearHdArea() {
      ClearHdArea();
    }
    initCreatorBudget() {
      InitCreatorBudget();
    }
    shutdownCreatorBudget() {
      ShutdownCreatorBudget();
    }
    addModelToCreatorBudget(e) {
      return AddModelToCreatorBudget(e);
    }
    removeModelFromCreatorBudget(e) {
      RemoveModelFromCreatorBudget(e);
    }
    streamvolCreateSphere(e, t, r, n, i, a) {
      return StreamvolCreateSphere(e, t, r, n, i, a);
    }
    streamvolCreateFrustum(e, t, r, n, i, a, o, s, l) {
      return StreamvolCreateFrustum(e, t, r, n, i, a, o, s, l);
    }
    streamvolCreateLine(e, t, r, n, i, a, o) {
      StreamvolCreateLine(e, t, r, n, i, a, o);
    }
    streamvolDelete(e) {
      StreamvolDelete(e);
    }
    streamvolHasLoaded(e) {
      return StreamvolHasLoaded(e);
    }
    streamvolIsValid(e) {
      return StreamvolIsValid(e);
    }
    isStreamvolActive() {
      return IsStreamvolActive();
    }
    getPlayerSwitchInterpOutCurrentTime() {
      return GetPlayerSwitchInterpOutCurrentTime();
    }
    setRenderHdOnly(e) {
      SetRenderHdOnly(e);
    }
    requestModel2(e) {
      RequestModel(e);
    }
    setFocusArea(e, t, r, n, i, a) {
      SetFocusArea(e, t, r, n ?? 0, i ?? 0, a ?? 0);
    }
    setUnkCameraSettings(e, t, r, n, i, a) {
      return SetUnkCameraSettings(e, t, r, n, i, a);
    }
    newLoadSceneStartSafe(e, t, r, n, i) {
      return NewLoadSceneStartSphere(e, t, r, n, i);
    }
    setPlayerSwitchLocation(e, t, r, n, i, a, o, s, l) {
      SetPlayerSwitchLocation(e, t, r, n, i, a, o, s, l);
    }
    forceStreamingUpdate() {
      ForceStreamingUpdate();
    }
    set(e) {
      SetStreaming(e);
    }
    loadGlobalWaterType(e) {
      LoadGlobalWaterType(e);
    }
    getGlobalWaterType() {
      return GetGlobalWaterType();
    }
    setGamePausesFor(e) {
      SetGamePausesForStreaming(e);
    }
    getNumberOfRequests() {
      return GetNumberOfStreamingRequests();
    }
    formatFocusHeading(e, t, r, n, i, a) {
      return FormatFocusHeading(e, t, r, n, i, a);
    }
    newLoadSceneStart(e, t, r, n, i, a, o, s) {
      return NewLoadSceneStart(e, t, r, n, i, a, o, s);
    }
    setPlayerSwitchOutro(e, t, r, n, i, a, o, s, l) {
      SetPlayerSwitchOutro(e, t, r, n, i, a, o, s, l);
    }
    switchOutPlayer(e, t, r) {
      SwitchOutPlayer(e, t, r);
    }
    switchInPlayer(e) {
      SwitchInPlayer(e);
    }
    getUsedCreatorModelMemoryPercentage() {
      return GetUsedCreatorModelMemoryPercentage();
    }
    setIslandHopperEnabled(e, t) {
      SetIslandHopperEnabled(e, t);
    }
    getAllModelHashes(e) {
      return GetAllModelHashes(e);
    }
    requestRuntimeAssetFromUrl(e, t) {
      return RequestRuntimeAssetFromUrl(e, t);
    }
    releaseRuntimeAsset(e) {
      ReleaseRuntimeAsset(e);
    }
    _0x0811381EF5062FEC(...e) {
      return Citizen.invokeNative("0x0811381EF5062FEC", ...e);
    }
    _0x4E52E752C76E7E7A(...e) {
      return Citizen.invokeNative("0x4E52E752C76E7E7A", ...e);
    }
    _0x1F3F018BC3AFA77C(...e) {
      return Citizen.invokeNative("0x1F3F018BC3AFA77C", ...e);
    }
    _0x0AD9710CEE2F590F(...e) {
      return Citizen.invokeNative("0x0AD9710CEE2F590F", ...e);
    }
    _0x1EE7D8DF4425F053(...e) {
      return Citizen.invokeNative("0x1EE7D8DF4425F053", ...e);
    }
    _0x7D41E9D2D17C5B2D(...e) {
      return Citizen.invokeNative("0x7D41E9D2D17C5B2D", ...e);
    }
    _0x07C313F94746702C(...e) {
      return Citizen.invokeNative("0x07C313F94746702C", ...e);
    }
    _0xBC9823AB80A3DCAC(...e) {
      return Citizen.invokeNative("0xBC9823AB80A3DCAC", ...e);
    }
    _0x71E7B2E657449AAD(...e) {
      return Citizen.invokeNative("0x71E7B2E657449AAD", ...e);
    }
    _0x5F2013F8BC24EE69(...e) {
      return Citizen.invokeNative("0x5F2013F8BC24EE69", ...e);
    }
    _0x933BBEEB8C61B5F4(...e) {
      return Citizen.invokeNative("0x933BBEEB8C61B5F4", ...e);
    }
    _0x5B48A06DD0E792A5(...e) {
      return Citizen.invokeNative("0x5B48A06DD0E792A5", ...e);
    }
    _0x1E9057A74FD73E23(...e) {
      return Citizen.invokeNative("0x1E9057A74FD73E23", ...e);
    }
    _0xBED8CA5FF5E04113(...e) {
      return Citizen.invokeNative("0xBED8CA5FF5E04113", ...e);
    }
    _0x472397322E92A856(...e) {
      return Citizen.invokeNative("0x472397322E92A856", ...e);
    }
    _0x40AEFD1A244741F2(...e) {
      return Citizen.invokeNative("0x40AEFD1A244741F2", ...e);
    }
    _0x03F1A106BDA7DD3E(...e) {
      return Citizen.invokeNative("0x03F1A106BDA7DD3E", ...e);
    }
    _0x95A7DABDDBB78AE7(...e) {
      return Citizen.invokeNative("0x95A7DABDDBB78AE7", ...e);
    }
    _0x63EB2B972A218CAC(...e) {
      return Citizen.invokeNative("0x63EB2B972A218CAC", ...e);
    }
    _0xFB199266061F820A(...e) {
      return Citizen.invokeNative("0xFB199266061F820A", ...e);
    }
    _0xF4A0DADB70F57FA6(...e) {
      return Citizen.invokeNative("0xF4A0DADB70F57FA6", ...e);
    }
    _0x5068F488DDB54DD8(...e) {
      return Citizen.invokeNative("0x5068F488DDB54DD8", ...e);
    }
    _0xEF39EE20C537E98C(...e) {
      return Citizen.invokeNative("0xEF39EE20C537E98C", ...e);
    }
    _0xBEB2D9A1D9A8F55A(...e) {
      return Citizen.invokeNative("0xBEB2D9A1D9A8F55A", ...e);
    }
    _0x20C6C7E4EB082A7F(...e) {
      return Citizen.invokeNative("0x20C6C7E4EB082A7F", ...e);
    }
    _0xF8155A7F03DDFC8E(...e) {
      return Citizen.invokeNative("0xF8155A7F03DDFC8E", ...e);
    }
  }
  class eo {
    constructor() {
      this.unk = ja();
      this.useDefaultVehicleEntering = true;
    }
    nuiCursorOverride(e) {
      return hr() && function (e) {
        return e === _t || e === Ot || e === 239 || e === 240;
      }(e);
    }
    isControlEnabled(e, t) {
      return IsControlEnabled(e, t);
    }
    isControlPressed(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Jt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsControlPressed(e, t);
    }
    isControlReleased(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Jt(t);
        if (e !== undefined) {
          return !e;
        }
      }
      return IsControlReleased(e, t);
    }
    isControlJustPressed(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Xt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsControlJustPressed(e, t);
    }
    isControlJustReleased(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Qt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsControlJustReleased(e, t);
    }
    getControlValue(e, t) {
      return GetControlValue(e, t);
    }
    getControlNormal(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = $t(t);
        if (e !== undefined) {
          return e;
        }
      }
      return GetControlNormal(e, t);
    }
    getControlUnboundNormal(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = $t(t);
        if (e !== undefined) {
          return e;
        }
      }
      return GetControlUnboundNormal(e, t);
    }
    setControlNormal(e, t, r) {
      return SetControlNormal(e, t, r);
    }
    isDisabledControlPressed(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Jt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsDisabledControlPressed(e, t);
    }
    isDisabledControlReleased(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Jt(t);
        if (e !== undefined) {
          return !e;
        }
      }
      return IsDisabledControlReleased(e, t);
    }
    isDisabledControlJustPressed(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Xt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsDisabledControlJustPressed(e, t);
    }
    isDisabledControlJustReleased(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = Qt(t);
        if (e !== undefined) {
          return e;
        }
      }
      return IsDisabledControlJustReleased(e, t);
    }
    getDisabledControlNormal(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = $t(t);
        if (e !== undefined) {
          return e;
        }
      }
      return GetDisabledControlNormal(e, t);
    }
    getDisabledControlUnboundNormal(e, t) {
      if (this.nuiCursorOverride(t)) {
        const e = $t(t);
        if (e !== undefined) {
          return e;
        }
      }
      return GetDisabledControlUnboundNormal(e, t);
    }
    disableControlAction(e, t, r) {
      DisableControlAction(e, t, r);
    }
    enableControlAction(e, t, r) {
      EnableControlAction(e, t, r);
    }
    disableAllControlActions(e) {
      DisableAllControlActions(e);
    }
    enableAllControlActions(e) {
      EnableAllControlActions(e);
    }
    setDisableControlActionBatch(e, t) {
      if (Array.isArray(t)) {
        this._batchedDisables = {
          isMoveOrLook: e,
          controlActions: t
        };
      }
    }
    isInputDisabled(e) {
      return IsInputDisabled(e);
    }
    isUsingKeyboard(e) {
      return IsUsingKeyboard(e);
    }
    isLookInverted() {
      return IsLookInverted();
    }
    setPlayerpadShakesWhenControllerDisabled(e) {
      SetPlayerpadShakesWhenControllerDisabled(!!e);
    }
    setControlLightEffectColor(e, t, r, n) {
      SetControlLightEffectColor(e, t, r, n);
    }
    setShake(e, t, r) {
      SetPadShake(e, t, r);
    }
    stopShake(e) {
      StopPadShake(e);
    }
    getLocalPlayerAimState() {
      return GetLocalPlayerAimState();
    }
    getIsUsingAlternateDriveby() {
      return GetIsUsingAlternateDriveby();
    }
    getAllowMovementWhileZoomed() {
      return GetAllowMovementWhileZoomed();
    }
    setInputExclusive(e, t) {
      SetInputExclusive(e, t);
    }
    getControlActionName(e, t, r) {
      return Citizen.invokeNative("0x8290252FFF36ACB5", Citizen.resultAsString(), e, t, r ?? true);
    }
    isInputJustDisabled(e) {
      return IsInputJustDisabled(e);
    }
    setPadShake(e, t, r) {
      SetPadShake(e, t, r);
    }
    stopPadShake(e) {
      StopPadShake(e);
    }
    isUsingKeyboard2(e) {
      return IsUsingKeyboard_2(e);
    }
    setCursorLocation(e, t) {
      return SetCursorLocation(e, t);
    }
    getControlInstructionalButton(e, t, r) {
      return GetControlInstructionalButton(e, t, r);
    }
    getControlGroupInstructionalButton(e, t, r) {
      return GetControlGroupInstructionalButton(e, t, r);
    }
    getLocalPlayerAimState2() {
      return GetLocalPlayerGamepadAimState();
    }
    setPlayerShakesWhenControllerDisabled(e) {
      SetPlayerpadShakesWhenControllerDisabled(!!e);
    }
    switchToInputMappingScheme(e) {
      return SwitchToInputMappingScheme(e);
    }
    switchToInputMappingScheme2(e) {
      return SwitchToInputMappingScheme_2(e);
    }
    resetInputMappingScheme() {
      ResetInputMappingScheme();
    }
    applyDisableControlActionBatch() {
      const e = this._batchedDisables;
      if (e && Array.isArray(e.controlActions)) {
        for (const t of e.controlActions) {
          DisableControlAction(0, t, true);
        }
      }
    }
    _0x5B73C77D9EB66E24(...e) {
      return Citizen.invokeNative("0x5B73C77D9EB66E24", ...e);
    }
    _0xD7D22F5592AED8BA(...e) {
      return Citizen.invokeNative("0xD7D22F5592AED8BA", ...e);
    }
    _0x23F09EADC01449D6(...e) {
      return Citizen.invokeNative("0x23F09EADC01449D6", ...e);
    }
    _0x6CD79468A1E595C6(...e) {
      return Citizen.invokeNative("0x6CD79468A1E595C6", ...e);
    }
    _0xCB0360EFEFB2580D(...e) {
      return Citizen.invokeNative("0xCB0360EFEFB2580D", ...e);
    }
    _0x14D29BB12D47F68C(...e) {
      return Citizen.invokeNative("0x14D29BB12D47F68C", ...e);
    }
    _0xF239400E16C23E08(...e) {
      return Citizen.invokeNative("0xF239400E16C23E08", ...e);
    }
    _0xA0CEFCEA390AAB9B(...e) {
      return Citizen.invokeNative("0xA0CEFCEA390AAB9B", ...e);
    }
    _0xE1615EC03B3BB4FD(...e) {
      return Citizen.invokeNative("0xE1615EC03B3BB4FD", ...e);
    }
    _0x25AAA32BDC98F2A3(...e) {
      return Citizen.invokeNative("0x25AAA32BDC98F2A3", ...e);
    }
    _0x7F4724035FDCA1DD(...e) {
      return Citizen.invokeNative("0x7F4724035FDCA1DD", ...e);
    }
  }
  class to {
    constructor() {
      this.unk = ja();
    }
    createCam(e, t) {
      return CreateCam(e, t ?? false);
    }
    createCamWithParams(e, t, r, n, i, a, o, s, l, d) {
      return CreateCamWithParams(e, t, r, n, i, a, o, s, l ?? false, d ?? 0);
    }
    createCamera(e, t) {
      return CreateCamera(e, t ?? false);
    }
    createCameraWithParams(e, t, r, n, i, a, o, s, l, d) {
      return CreateCameraWithParams(e, t, r, n, i, a, o, s, l ?? false, d ?? 0);
    }
    destroyAllCams(e) {
      DestroyAllCams(e ?? false);
    }
    getCoord(e) {
      return za(GetCamCoord(e));
    }
    setCoord(e, t, r, n) {
      SetCamCoord(e, t, r, n);
    }
    getRot(e, t) {
      return za(GetCamRot(e, t ?? 2));
    }
    setRot(e, t, r, n, i) {
      SetCamRot(e, t, r, n, i ?? 2);
    }
    getFov(e) {
      return GetCamFov(e);
    }
    setFov(e, t) {
      SetCamFov(e, t);
    }
    getNearClip(e) {
      return GetCamNearClip(e);
    }
    setNearClip(e, t) {
      SetCamNearClip(e, t);
    }
    getFarClip(e) {
      return GetCamFarClip(e);
    }
    setFarClip(e, t) {
      SetCamFarClip(e, t);
    }
    setNearDof(e, t) {
      SetCamNearDof(e, t);
    }
    getFarDof(e) {
      return GetCamFarDof(e);
    }
    setFarDof(e, t) {
      SetCamFarDof(e, t);
    }
    setDofStrength(e, t) {
      SetCamDofStrength(e, t);
    }
    setDofPlanes(e, t, r, n, i) {
      SetCamDofPlanes(e, t, r, n, i);
    }
    setMotionBlurStrength(e, t) {
      SetCamMotionBlurStrength(e, t);
    }
    isActive(e) {
      return IsCamActive(e);
    }
    setActive(e, t) {
      SetCamActive(e, t);
    }
    isInterpolating(e) {
      return IsCamInterpolating(e);
    }
    setActiveWithInterp(e, t, r, n, i) {
      SetCamActiveWithInterp(e, t, r, n ?? 1, i ?? 1);
    }
    renderScriptCams(e, t, r, n, i) {
      RenderScriptCams(e, t ?? false, r ?? 0, n ?? true, i ?? false);
    }
    attachToEntity(e, t, r, n, i, a) {
      AttachCamToEntity(e, t, r, n, i, a ?? true);
    }
    attachToPedBone(e, t, r, n, i, a, o) {
      AttachCamToPedBone(e, t, r, n, i, a, o ?? true);
    }
    attachToVehicleBone(e, t, r, n, i, a, o, s, l, d, c) {
      AttachCamToVehicleBone(e, t, r, n, i, a, o, s, l, d, c);
    }
    detach(e) {
      DetachCam(e);
    }
    pointAtCoord(e, t, r, n) {
      PointCamAtCoord(e, t, r, n);
    }
    pointAtEntity(e, t, r, n, i, a) {
      PointCamAtEntity(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? false);
    }
    pointAtPedBone(e, t, r, n, i, a, o) {
      PointCamAtPedBone(e, t, r, n ?? 0, i ?? 0, a ?? 0, o ?? false);
    }
    stopPointing(e) {
      StopCamPointing(e);
    }
    shake(e, t, r) {
      ShakeCam(e, t, r);
    }
    isShaking(e) {
      return IsCamShaking(e);
    }
    getGameplayCoord() {
      return za(GetGameplayCamCoord());
    }
    getGameplayRot(e) {
      return za(GetGameplayCamRot(e ?? 2));
    }
    getGameplayFov() {
      return GetGameplayCamFov();
    }
    setGameplayRelativeHeading(e) {
      SetGameplayCamRelativeHeading(e);
    }
    setGameplayRelativePitch(e, t) {
      SetGameplayCamRelativePitch(e, t ?? 1);
    }
    clampGameplayCamYaw(e, t) {
      ClampGameplayCamYaw(e, t);
    }
    clampGameplayCamPitch(e, t) {
      ClampGameplayCamPitch(e, t);
    }
    doScreenFadeIn(e) {
      DoScreenFadeIn(e);
    }
    doScreenFadeOut(e) {
      DoScreenFadeOut(e);
    }
    isScreenFadedIn() {
      return IsScreenFadedIn();
    }
    isScreenFadedOut() {
      return IsScreenFadedOut();
    }
    isScreenFadingIn() {
      return IsScreenFadingIn();
    }
    isScreenFadingOut() {
      return IsScreenFadingOut();
    }
    setCinematicModeActive(e) {
      SetCinematicModeActive(e);
    }
    setWidescreenBorders(e, t) {
      SetWidescreenBorders(e, t);
    }
    create(e, t) {
      return CreateCam(e, t ?? false);
    }
    destroy(e, t) {
      DestroyCam(e, t ?? false);
    }
    doesExist(e) {
      return DoesCamExist(e);
    }
    isRendering(e) {
      return IsCamRendering(e);
    }
    getRendering() {
      return GetRenderingCam();
    }
    setCamSplinePhase(e, t) {
      SetCamSplinePhase(e, t);
    }
    getCamSplineNodePhase(e) {
      return GetCamSplineNodePhase(e);
    }
    setCamSplineDuration(e, t) {
      SetCamSplineDuration(e, t);
    }
    getCamSplineNodeIndex(e) {
      return GetCamSplineNodeIndex(e);
    }
    overrideCamSplineVelocity(e, t, r, n) {
      OverrideCamSplineVelocity(e, t, r, n);
    }
    overrideCamSplineMotionBlur(e, t, r, n) {
      OverrideCamSplineMotionBlur(e, t, r, n);
    }
    isCamSplinePaused(e) {
      return IsCamSplinePaused(e);
    }
    setSplinePhase(e, t) {
      SetCamSplinePhase(e, t);
    }
    getSplinePhase(e) {
      return GetCamSplinePhase(e);
    }
    getSplineNodePhase(e) {
      return GetCamSplineNodePhase(e);
    }
    setSplineDuration(e, t) {
      SetCamSplineDuration(e, t);
    }
    setSplineSmoothingStyle(e, t) {
      SetCamSplineSmoothingStyle(e, t);
    }
    getSplineNodeIndex(e) {
      return GetCamSplineNodeIndex(e);
    }
    setSplineNodeEase(e, t, r, n) {
      SetCamSplineNodeEase(e, t, r, n);
    }
    setSplineNodeVelocityScale(e, t, r) {
      SetCamSplineNodeVelocityScale(e, t, r);
    }
    overrideSplineVelocity(e, t, r, n) {
      OverrideCamSplineVelocity(e, t, r, n);
    }
    overrideSplineMotionBlur(e, t, r, n) {
      OverrideCamSplineMotionBlur(e, t, r, n);
    }
    setSplineNodeExtraFlags(e, t, r) {
      SetCamSplineNodeExtraFlags(e, t, r);
    }
    isSplinePaused(e) {
      return IsCamSplinePaused(e);
    }
    addSplineNodeUsingCameraFrame(e, t, r, n) {
      AddCamSplineNodeUsingCameraFrame(e, t, r, n);
    }
    addSplineNodeUsingCamera(e, t, r, n) {
      AddCamSplineNodeUsingCamera(e, t, r, n);
    }
    addSplineNodeUsingGameplayFrame(e, t, r) {
      AddCamSplineNodeUsingGameplayFrame(e, t, r);
    }
    setInheritRollVehicle(e, t) {
      SetCamInheritRollVehicle(e, t);
    }
    setAffectsAiming(e, t) {
      SetCamAffectsAiming(e, t);
    }
    setDebugName(e, t) {
      SetCamDebugName(e, t);
    }
    setUseShallowDofMode(e, t) {
      SetCamUseShallowDofMode(e, t);
    }
    setUseHiDof() {
      SetUseHiDof();
    }
    setDofFnumberOfLens(e, t) {
      SetCamDofFnumberOfLens(e, t);
    }
    setDofFocalLengthMultiplier(e, t) {
      SetCamDofFocalLengthMultiplier(e, t);
    }
    setDofFocusDistanceBias(e, t) {
      SetCamDofFocusDistanceBias(e, t);
    }
    setDofMaxNearInFocusDistance(e, t) {
      SetCamDofMaxNearInFocusDistance(e, t);
    }
    setDofMaxNearInFocusDistanceBlendLevel(e, t) {
      SetCamDofMaxNearInFocusDistanceBlendLevel(e, t);
    }
    animatedShake(e, t, r, n, i) {
      AnimatedShakeCam(e, t, r, n, i);
    }
    setShakeAmplitude(e, t) {
      SetCamShakeAmplitude(e, t);
    }
    stopShaking(e, t) {
      StopCamShaking(e, t ?? false);
    }
    shakeScriptGlobal(e, t) {
      ShakeScriptGlobal(e, t);
    }
    animatedShakeScriptGlobal(e, t, r, n) {
      AnimatedShakeScriptGlobal(e, t, r, n);
    }
    isScriptGlobalShaking() {
      return IsScriptGlobalShaking();
    }
    stopScriptGlobalShaking(e) {
      StopScriptGlobalShaking(e);
    }
    isPlayingAnim(e, t, r) {
      return IsCamPlayingAnim(e, t, r);
    }
    setAnimCurrentPhase(e, t) {
      SetCamAnimCurrentPhase(e, t);
    }
    getAnimCurrentPhase(e) {
      return GetCamAnimCurrentPhase(e);
    }
    playSynchronizedCamAnim(e, t, r, n) {
      return PlaySynchronizedCamAnim(e, t, r, n);
    }
    getGameplayCamRot(e) {
      return za(GetGameplayCamRot(e ?? 2));
    }
    getGameplayRelativeHeading() {
      return GetGameplayCamRelativeHeading();
    }
    shakeGameplayCam(e, t) {
      ShakeGameplayCam(e, t);
    }
    shakeGameplay(e, t) {
      ShakeGameplayCam(e, t);
    }
    setGameplayCamShakeAmplitude(e) {
      SetGameplayCamShakeAmplitude(e);
    }
    setGameplayShakeAmplitude(e) {
      SetGameplayCamShakeAmplitude(e);
    }
    stopGameplayCamShaking(e) {
      StopGameplayCamShaking(e);
    }
    stopGameplayShaking(e) {
      StopGameplayCamShaking(e);
    }
    setFollowPedCamViewMode(e) {
      SetFollowPedCamViewMode(e);
    }
    setFollowVehicleCamZoomLevel(e) {
      SetFollowVehicleCamZoomLevel(e);
    }
    setFollowVehicleCamViewMode(e) {
      SetFollowVehicleCamViewMode(e);
    }
    clampGameplayYaw(e, t) {
      ClampGameplayCamYaw(e, t);
    }
    clampGameplayPitch(e, t) {
      ClampGameplayCamPitch(e, t);
    }
    animateGameplayZoom(e, t) {
      AnimateGameplayCamZoom(e, t);
    }
    animateGameplayCamZoom(e, t) {
      AnimateGameplayCamZoom(e, t);
    }
    setGameplayRawYaw(e) {
      SetGameplayCamRawYaw(e);
    }
    setGameplayRawPitch(e) {
      SetGameplayCamRawPitch(e);
    }
    setGameplayCamRawYaw(e) {
      SetGameplayCamRawYaw(e);
    }
    setGameplayCamRawPitch(e) {
      SetGameplayCamRawPitch(e);
    }
    isGameplayRendering() {
      return IsGameplayCamRendering();
    }
    enableCrosshairThisFrame() {
      EnableCrosshairThisFrame();
    }
    isGameplayLookingBehind() {
      return IsGameplayCamLookingBehind();
    }
    disableCollisionForEntity(e) {
      DisableCamCollisionForEntity(e);
    }
    disableCollisionForObject(e) {
      DisableCamCollisionForObject(e);
    }
    setGameplayFollowPedThisUpdate(e) {
      SetGameplayCamFollowPedThisUpdate(e);
    }
    isSphereVisible(e, t, r, n) {
      return IsSphereVisible(e, t, r, n);
    }
    isFollowPedActive() {
      return IsFollowPedCamActive();
    }
    isFollowVehicleActive() {
      return IsFollowVehicleCamActive();
    }
    getFollowPedZoomLevel() {
      return GetFollowPedCamZoomLevel();
    }
    getFollowPedViewMode() {
      return GetFollowPedCamViewMode();
    }
    setFollowPedViewMode(e) {
      SetFollowPedCamViewMode(e);
    }
    getFollowVehicleZoomLevel() {
      return GetFollowVehicleCamZoomLevel();
    }
    setFollowVehicleZoomLevel(e) {
      SetFollowVehicleCamZoomLevel(e);
    }
    getFollowVehicleViewMode() {
      return GetFollowVehicleCamViewMode();
    }
    setFollowVehicleViewMode(e) {
      SetFollowVehicleCamViewMode(e);
    }
    useStuntEraThisFrame() {
      UseStuntCameraThisFrame();
    }
    setGameplayHash(e) {
      SetGameplayCamHash(e);
    }
    setFollowTurretSeat(e) {
      SetFollowTurretSeatCam(e);
    }
    isAimActive() {
      return IsAimCamActive();
    }
    isAimThirdPersonActive() {
      return IsAimCamThirdPersonActive();
    }
    isFirstPersonAimActive() {
      return IsFirstPersonAimCamActive();
    }
    disableAimThisUpdate() {
      DisableAimCamThisUpdate();
    }
    getFirstPersonAimZoomFactor() {
      return GetFirstPersonAimCamZoomFactor();
    }
    setFirstPersonAimZoomFactor(e) {
      SetFirstPersonAimCamZoomFactor(e);
    }
    setFirstPersonPitchRange(e, t) {
      SetFirstPersonAimCamPitchRange(e, t);
    }
    setFirstPersonAimNearClipThisUpdate(e) {
      SetFirstPersonAimCamNearClipThisUpdate(e);
    }
    setThirdPersonAimNearClipThisUpdate(e) {
      SetThirdPersonAimCamNearClipThisUpdate(e);
    }
    getFinalRenderedCoord() {
      return za(GetFinalRenderedCamCoord());
    }
    getFinalRenderedRot(e) {
      return za(GetFinalRenderedCamRot(e ?? 2));
    }
    getFinalRenderedFov() {
      return GetFinalRenderedCamFov();
    }
    getFinalRenderedNearClip() {
      return GetFinalRenderedCamNearClip();
    }
    getFinalRenderedFarClip() {
      return GetFinalRenderedCamFarClip();
    }
    getFinalRenderedNearDof() {
      return GetFinalRenderedCamNearDof();
    }
    getFinalRenderedFarDof() {
      return GetFinalRenderedCamFarDof();
    }
    getFinalRenderedMotionBlurStrength() {
      return GetFinalRenderedCamMotionBlurStrength();
    }
    setGameplayCoordHint(e, t, r, n, i, a, o) {
      SetGameplayCoordHint(e, t, r, n, i, a, o);
    }
    setGameplayPedHint(e, t, r, n, i, a, o, s) {
      SetGameplayPedHint(e, t, r, n, i, a, o, s);
    }
    setGameplayObjectHint(e, t, r, n, i, a, o, s) {
      SetGameplayObjectHint(e, t, r, n, i, a, o, s);
    }
    isGameplayHintActive() {
      return IsGameplayHintActive();
    }
    stopGameplayHint(e) {
      StopGameplayHint(e);
    }
    setGameplayHintFov(e) {
      SetGameplayHintFov(e);
    }
    setGameplayHintFollowDistanceScalar(e) {
      SetGameplayHintFollowDistanceScalar(e);
    }
    setGameplayHintBaseOrbitPitchOffset(e) {
      SetGameplayHintBaseOrbitPitchOffset(e);
    }
    setCinematicButtonActive(e) {
      SetCinematicButtonActive(e);
    }
    isCinematicRendering() {
      return IsCinematicCamRendering();
    }
    shakeCinematic(e, t) {
      ShakeCinematicCam(e, t);
    }
    shakeCinematicCam(e, t) {
      ShakeCinematicCam(e, t);
    }
    setCinematicCamShakeAmplitude(e) {
      SetCinematicCamShakeAmplitude(e);
    }
    setCinematicShakeAmplitude(e) {
      SetCinematicCamShakeAmplitude(e);
    }
    stopCinematicCamShaking(e) {
      StopCinematicCamShaking(e);
    }
    stopCinematicShaking(e) {
      StopCinematicCamShaking(e);
    }
    invalidateIdle() {
      InvalidateIdleCam();
    }
    createCinematicShot(e, t, r, n) {
      CreateCinematicShot(e, t, r, n);
    }
    isCinematicShotActive(e) {
      return IsCinematicShotActive(e);
    }
    stopCinematicShot(e) {
      StopCinematicShot(e);
    }
    forceCinematicRenderingThisUpdate(e) {
      ForceCinematicRenderingThisUpdate(e);
    }
    isCinematicActive() {
      return IsCinematicCamActive();
    }
    getFocusPedOnScreen(e, t, r, n, i, a, o, s, l) {
      return GetFocusPedOnScreen(e, t, r, n, i, a, o, s, l);
    }
    stopRenderingScriptCamsUsingCatchUp(e, t, r) {
      StopRenderingScriptCamsUsingCatchUp(e, t, r);
    }
    addCamSplineNode(e, t, r, n, i, a, o, s, l, d) {
      AddCamSplineNode(e, t, r, n, i, a, o, s, l, d);
    }
    setParams(e, t, r, n, i, a, o, s, l, d, c, u) {
      SetCamParams(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    createWithParams(e, t, r, n, i, a, o, s, l, d) {
      return CreateCamWithParams(e, t, r, n, i, a, o, s, l ?? false, d ?? 0);
    }
    createEra(e, t) {
      return CreateCamera(e, t ?? false);
    }
    createEraWithParams(e, t, r, n, i, a, o, s, l, d) {
      return CreateCameraWithParams(e, t, r, n, i, a, o, s, l ?? false, d ?? 0);
    }
    destroyAllS(e) {
      DestroyAllCams(e ?? false);
    }
    attachToPedBone2(e, t, r, n, i, a, o, s, l, d) {
      AttachCamToPedBone(e, t, r, n, i, a, d);
    }
    addSplineNode(e, t, r, n, i, a, o, s, l, d) {
      AddCamSplineNode(e, t, r, n, i, a, o, s, l, d);
    }
    playAnim(e, t, r, n, i, a, o, s, l, d, c) {
      return PlayCamAnim(e, t, r, n, i, a, o, s, l, d ?? false, c ?? 0);
    }
    playSynchronizedAnim(e, t, r, n) {
      return PlaySynchronizedCamAnim(e, t, r, n);
    }
    setFlyHorizontalResponse(e, t, r, n) {
      SetFlyCamHorizontalResponse(e, t, r, n);
    }
    setFlyVerticalSpeedMultiplier(e, t, r, n) {
      SetFlyCamVerticalSpeedMultiplier(e, t, r, n);
    }
    setFlyMaxHeight(e, t) {
      SetFlyCamMaxHeight(e, t);
    }
    setFlyCoordAndConstrain(e, t, r, n) {
      SetFlyCamCoordAndConstrain(e, t, r, n);
    }
    getGameplayRelativePitch() {
      return GetGameplayCamRelativePitch();
    }
    setGameplayRelativeRotation(e, t, r) {
      SetGameplayCamRelativeRotation(e, t, r);
    }
    isGameplayShaking() {
      return IsGameplayCamShaking();
    }
    setFollowPedCamCutsceneChat(e, t) {
      return SetFollowPedCamCutsceneChat(e, t);
    }
    setInVehicleStateThisUpdate(e, t) {
      SetInVehicleCamStateThisUpdate(e, t);
    }
    disableFirstPersonThisFrame() {
      DisableFirstPersonCamThisFrame();
    }
    setFollowPedThisUpdate(e, t) {
      return SetFollowPedCamThisUpdate(e, t);
    }
    getIsMultiplayerBrief(e) {
      GetIsMultiplayerBrief(e);
    }
    setGameplayVehicleHint(e, t, r, n, i, a, o, s) {
      SetGameplayVehicleHint(e, t, r, n, i, a, o, s);
    }
    setGameplayEntityHint(e, t, r, n, i, a, o, s, l) {
      SetGameplayEntityHint(e, t, r, n, i, a, o, s, l);
    }
    setGameplayHintAnimOffsetx(e) {
      SetGameplayHintAnimOffsetx(e);
    }
    setGameplayHintAnimOffsety(e) {
      SetGameplayHintAnimOffsety(e);
    }
    setGameplayHintAnimCloseup(e) {
      SetGameplayHintAnimCloseup(e);
    }
    isCinematicShaking() {
      return IsCinematicCamShaking();
    }
    disableVehicleFirstPersonThisFrame() {
      DisableCinematicVehicleIdleModeThisUpdate();
    }
    invalidateVehicleIdle() {
      InvalidateVehicleIdleCam();
    }
    isCinematicIdleRendering() {
      return IsCinematicIdleCamRendering();
    }
    isInVehicleDisabled() {
      return IsInVehicleCamDisabled();
    }
    stopCutsceneShaking() {
      StopCutsceneCamShaking();
    }
    setEffect(e) {
      SetCamEffect(e);
    }
    setCamEffect(e) {
      SetCamEffect(e);
    }
    setGameplayVehicleCamera(e) {
      SetGameplayCamVehicleCamera(e);
    }
    setGameplayVehicleCameraName(e) {
      SetGameplayCamVehicleCameraName(e);
    }
    replayFreeGetMaxRange() {
      return ReplayFreeCamGetMaxRange();
    }
    getDofParam(e, t) {
      return GetCamDofParam(e, t);
    }
    setDofParam(e, t, r) {
      SetCamDofParam(e, t, r);
    }
    getFinalRenderedInWhenFriendlyRot(e, t) {
      return za(GetFinalRenderedInWhenFriendlyRot(e, t ?? 2));
    }
    getFinalRenderedInWhenFriendlyFov(e) {
      return GetFinalRenderedInWhenFriendlyFov(e);
    }
    renderScriptS(e, t, r, n, i) {
      RenderScriptCams(e, t ?? false, r ?? 0, n ?? true, i ?? false);
    }
    getGameplayCamRelativeHeading() {
      return GetGameplayCamRelativeHeading();
    }
    setGameplayCamRelativeHeading(e) {
      SetGameplayCamRelativeHeading(e);
    }
    setGameplayCamRelativePitch(e, t) {
      SetGameplayCamRelativePitch(e, t ?? 1);
    }
  }
  class ro {
    constructor() {
      this.unk = ja();
    }
    registerScriptWithAudio(e) {
      RegisterScriptWithAudio(!!e);
    }
    registerScriptWith(e) {
      RegisterScriptWithAudio(!!e);
    }
    unregisterScriptWith() {
      UnregisterScriptWithAudio();
    }
    requestMissionAudioBank(e, t) {
      return RequestMissionAudioBank(e, t);
    }
    requestAmbientAudioBank(e, t) {
      return RequestAmbientAudioBank(e, t);
    }
    requestScriptAudioBank(e, t) {
      return RequestScriptAudioBank(e, t);
    }
    hintAmbientAudioBank(e, t, r) {
      return HintAmbientAudioBank(e, t, r);
    }
    hintScriptAudioBank(e, t, r) {
      return HintScriptAudioBank(e, t, r);
    }
    releaseNamedScriptAudioBank(e) {
      ReleaseNamedScriptAudioBank(e);
    }
    getSoundId() {
      return GetSoundId();
    }
    releaseSoundId(e) {
      ReleaseSoundId(e);
    }
    playSound(e, t, r, n, i, a) {
      PlaySound(e, t, r, n ?? false, i ?? 0, a ?? true);
    }
    playSoundFrontend(e, t, r, n) {
      PlaySoundFrontend(e, t, r, n ?? true);
    }
    playDeferredSoundFrontend(e, t) {
      PlayDeferredSoundFrontend(e, t);
    }
    playSoundFromEntity(e, t, r, n, i, a) {
      PlaySoundFromEntity(e, t, r, n, i ?? false, a ?? 0);
    }
    playSoundFromCoord(e, t, r, n, i, a, o, s, l) {
      PlaySoundFromCoord(e, t, r, n, i, a, o ?? false, s ?? 0, l ?? false);
    }
    stopSound(e) {
      StopSound(e);
    }
    getNetworkIdFromSoundId(e) {
      return GetNetworkIdFromSoundId(e);
    }
    getSoundIdFromNetworkId(e) {
      return GetSoundIdFromNetworkId(e);
    }
    hasSoundFinished(e) {
      return HasSoundFinished(e);
    }
    playPedAmbientSpeechNative(e, t, r) {
      PlayPedAmbientSpeechNative(e, t, r);
    }
    playPedAmbientSpeechAndCloneNative(e, t, r) {
      PlayPedAmbientSpeechAndCloneNative(e, t, r);
    }
    playPedAmbientSpeechWithVoiceNative(e, t, r, n, i) {
      PlayPedAmbientSpeechWithVoiceNative(e, t, r, n, i ?? false);
    }
    playAmbientSpeechFromPositionNative(e, t, r, n, i, a) {
      PlayAmbientSpeechFromPositionNative(e, t, r, n, i, a);
    }
    overrideTrevorRage(e) {
      OverrideTrevorRage(e);
    }
    resetTrevorRage() {
      ResetTrevorRage();
    }
    setPlayerAngry(e, t) {
      SetPlayerAngry(e, t);
    }
    playPain(e, t, r) {
      PlayPain(e, t, r);
    }
    setAmbientVoiceName(e, t) {
      SetAmbientVoiceName(e, t);
    }
    setAmbientVoiceNameHash(e, t) {
      SetAmbientVoiceNameHash(e, t);
    }
    getAmbientVoiceNameHash(e) {
      return GetAmbientVoiceNameHash(e);
    }
    setPedVoiceGroup(e, t) {
      SetPedVoiceGroup(e, t);
    }
    setPedGender(e, t) {
      SetPedAudioGender(e, t);
    }
    stopCurrentPlayingSpeech(e) {
      StopCurrentPlayingSpeech(e);
    }
    stopCurrentPlayingAmbientSpeech(e) {
      StopCurrentPlayingAmbientSpeech(e);
    }
    isAmbientSpeechPlaying(e) {
      return IsAmbientSpeechPlaying(e);
    }
    isScriptedSpeechPlaying(e) {
      return IsScriptedSpeechPlaying(e);
    }
    isAnySpeechPlaying(e) {
      return IsAmbientSpeechPlaying(e);
    }
    isPedInCurrentConversation(e) {
      return IsPedInCurrentConversation(e);
    }
    setPedIsDrunk(e, t) {
      SetPedIsDrunk(e, t);
    }
    stopPedSpeaking(e, t) {
      StopPedSpeaking(e, t);
    }
    disablePedPain(e, t) {
      DisablePedPainAudio(e, t);
    }
    isAmbientSpeechDisabled(e) {
      return IsAmbientSpeechDisabled(e);
    }
    resetPedAudioFlags(e) {
      ResetPedAudioFlags(e);
    }
    playAnimalVocalization(e, t, r) {
      PlayAnimalVocalization(e, t, r);
    }
    isAnimalVocalizationPlaying(e) {
      return IsAnimalVocalizationPlaying(e);
    }
    setAnimalMood(e, t) {
      SetAnimalMood(e, t);
    }
    playPedRingtone(e, t, r) {
      PlayPedRingtone(e, t, r);
    }
    isPedRingtonePlaying(e) {
      return IsPedRingtonePlaying(e);
    }
    stopPedRingtone(e) {
      StopPedRingtone(e);
    }
    isMobilePhoneCallOngoing() {
      return IsMobilePhoneCallOngoing();
    }
    createNewScriptedConversation() {
      CreateNewScriptedConversation();
    }
    addPedToConversation(e, t, r) {
      AddPedToConversation(e, t, r);
    }
    startScriptPhoneConversation(e, t) {
      StartScriptPhoneConversation(e, t);
    }
    preloadScriptPhoneConversation(e, t) {
      PreloadScriptPhoneConversation(e, t);
    }
    startScriptConversation(e, t, r, n) {
      StartScriptConversation(e, t, r, n);
    }
    preloadScriptConversation(e, t, r, n) {
      PreloadScriptConversation(e, t, r, n);
    }
    startPreloadedConversation() {
      StartPreloadedConversation();
    }
    getIsPreloadedConversationReady() {
      return GetIsPreloadedConversationReady();
    }
    isScriptedConversationOngoing() {
      return IsScriptedConversationOngoing();
    }
    isScriptedConversationLoaded() {
      return IsScriptedConversationLoaded();
    }
    getCurrentScriptedConversationLine() {
      return GetCurrentScriptedConversationLine();
    }
    pauseScriptedConversation(e) {
      PauseScriptedConversation(e);
    }
    restartScriptedConversation() {
      RestartScriptedConversation();
    }
    stopScriptedConversation(e) {
      return StopScriptedConversation(e);
    }
    skipToNextScriptedConversationLine() {
      SkipToNextScriptedConversationLine();
    }
    interruptConversationAndPause(e, t, r) {
      InterruptConversationAndPause(e, t, r);
    }
    prepareSynchronizedAudioEvent(e, t) {
      return PrepareSynchronizedAudioEvent(e, t);
    }
    prepareSynchronizedAudioEventForScene(e, t) {
      return PrepareSynchronizedAudioEventForScene(e, t);
    }
    playSynchronizedAudioEvent(e) {
      return PlaySynchronizedAudioEvent(e);
    }
    stopSynchronizedAudioEvent(e) {
      return StopSynchronizedAudioEvent(e);
    }
    isMobilePhoneRadioActive() {
      return IsMobilePhoneRadioActive();
    }
    setMobilePhoneRadioState(e) {
      SetMobilePhoneRadioState(e);
    }
    getPlayerRadioStationIndex() {
      return GetPlayerRadioStationIndex();
    }
    getPlayerRadioStationName() {
      return GetPlayerRadioStationName();
    }
    getRadioStationName(e) {
      return GetRadioStationName(e);
    }
    getPlayerRadioStationGenre() {
      return GetPlayerRadioStationGenre();
    }
    isRadioRetuning() {
      return IsRadioRetuning();
    }
    isRadioFadedOut() {
      return IsRadioFadedOut();
    }
    setRadioToStationName(e) {
      SetRadioToStationName(e);
    }
    setVehRadioStation(e, t) {
      SetVehRadioStation(e, t);
    }
    setEmitterRadioStation(e, t) {
      SetEmitterRadioStation(e, t);
    }
    setStaticEmitterEnabled(e, t) {
      SetStaticEmitterEnabled(e, t);
    }
    linkStaticEmitterToEntity(e, t) {
      LinkStaticEmitterToEntity(e, t);
    }
    setRadioToStationIndex(e) {
      SetRadioToStationIndex(e);
    }
    setFrontendRadioActive(e) {
      SetFrontendRadioActive(e);
    }
    unlockMissionNewsStory(e) {
      UnlockMissionNewsStory(e);
    }
    isMissionNewsStoryUnlocked(e) {
      return IsMissionNewsStoryUnlocked(e);
    }
    getAudibleMusicTrackTextId() {
      return GetAudibleMusicTrackTextId();
    }
    playEndCreditsMusic(e) {
      PlayEndCreditsMusic(e);
    }
    skipRadioForward() {
      SkipRadioForward();
    }
    freezeRadioStation(e) {
      FreezeRadioStation(e);
    }
    unfreezeRadioStation(e) {
      UnfreezeRadioStation(e);
    }
    setRadioAutoUnfreeze(e) {
      SetRadioAutoUnfreeze(e);
    }
    setInitialPlayerStation(e) {
      SetInitialPlayerStation(e);
    }
    setUserRadioControlEnabled(e) {
      SetUserRadioControlEnabled(e);
    }
    setRadioTrack(e, t) {
      SetRadioTrack(e, t);
    }
    setVehicleRadioLoud(e, t) {
      SetVehicleRadioLoud(e, t);
    }
    setMobileRadioEnabledDuringGameplay(e) {
      SetMobileRadioEnabledDuringGameplay(e);
    }
    doesPlayerVehHaveRadio() {
      return DoesPlayerVehHaveRadio();
    }
    isPlayerVehRadioEnable() {
      return IsPlayerVehRadioEnable();
    }
    setVehicleRadioEnabled(e, t) {
      SetVehicleRadioEnabled(e, t);
    }
    setCustomRadioTrackList(e, t, r) {
      SetCustomRadioTrackList(e, t, r);
    }
    clearCustomRadioTrackList(e) {
      ClearCustomRadioTrackList(e);
    }
    getNumUnlockedRadioStations() {
      return GetNumUnlockedRadioStations();
    }
    findRadioStationIndex(e) {
      return FindRadioStationIndex(e);
    }
    setRadioStationMusicOnly(e, t) {
      SetRadioStationMusicOnly(e, t);
    }
    setRadioFrontendFadeTime(e) {
      SetRadioFrontendFadeTime(e);
    }
    unlockRadioStationTrackList(e, t) {
      UnlockRadioStationTrackList(e, t);
    }
    lockRadioStation(e, t) {
      LockRadioStation(e, t);
    }
    setAmbientZoneState(e, t, r) {
      SetAmbientZoneState(e, t, r);
    }
    clearAmbientZoneState(e, t) {
      ClearAmbientZoneState(e, t);
    }
    setAmbientZoneListState(e, t, r) {
      SetAmbientZoneListState(e, t, r);
      return 0;
    }
    clearAmbientZoneListState(e, t) {
      ClearAmbientZoneListState(e, t);
      return 0;
    }
    setAmbientZoneStatePersistent(e, t, r) {
      SetAmbientZoneStatePersistent(e, t, r);
    }
    setAmbientZoneListStatePersistent(e, t, r) {
      SetAmbientZoneListStatePersistent(e, t, r);
    }
    isAmbientZoneEnabled(e) {
      return IsAmbientZoneEnabled(e);
    }
    playPoliceReport(e, t) {
      return PlayPoliceReport(e, t);
    }
    blipSiren(e) {
      BlipSiren(e);
    }
    overrideVehHorn(e, t, r) {
      OverrideVehHorn(e, t, r);
    }
    isHornActive(e) {
      return IsHornActive(e);
    }
    setAggressiveHorns(e) {
      SetAggressiveHorns(e);
    }
    setSirenWithNoDriver(e, t) {
      SetSirenWithNoDriver(e, t);
    }
    triggerSiren(e) {
      TriggerSiren(e);
    }
    setHornEnabled(e, t) {
      SetHornEnabled(e, t);
    }
    setVehiclePriority(e, t) {
      SetAudioVehiclePriority(e, t);
    }
    useSirenAsHorn(e, t) {
      UseSirenAsHorn(e, t);
    }
    enableVehicleExhaustPops(e, t) {
      EnableVehicleExhaustPops(e, t);
    }
    setVehicleBoostActive(e, t) {
      SetVehicleBoostActive(e, t);
    }
    setScriptUpdateDoor(e, t) {
      SetScriptUpdateDoorAudio(e, t);
    }
    playVehicleDoorOpenSound(e, t) {
      PlayVehicleDoorOpenSound(e, t);
    }
    playVehicleDoorCloseSound(e, t) {
      PlayVehicleDoorCloseSound(e, t);
    }
    enableStallWarningSounds(e, t) {
      EnableStallWarningSounds(e, t);
    }
    getVehicleDefaultHorn(e) {
      return GetVehicleDefaultHorn(e);
    }
    getVehicleDefaultHornIgnoreMods(e) {
      return GetVehicleDefaultHornIgnoreMods(e);
    }
    isStreamPlaying() {
      return IsStreamPlaying();
    }
    getStreamPlayTime() {
      return GetStreamPlayTime();
    }
    loadStream(e, t) {
      return LoadStream(e, t);
    }
    loadStreamWithStartOffset(e, t, r) {
      return LoadStreamWithStartOffset(e, t, r);
    }
    playStreamFromPed(e) {
      PlayStreamFromPed(e);
    }
    playStreamFromVehicle(e) {
      PlayStreamFromVehicle(e);
    }
    playStreamFromObject(e) {
      PlayStreamFromObject(e);
    }
    playStreamFrontend() {
      PlayStreamFrontend();
    }
    playStreamFromPosition(e, t, r) {
      PlayStreamFromPosition(e, t, r);
    }
    stopStream() {
      StopStream();
    }
    setVariableOnStream(e, t) {
      SetVariableOnStream(e, t);
    }
    setVariableOnUnderWaterStream(e, t) {
      SetVariableOnUnderWaterStream(e, t);
    }
    startAudioScene(e) {
      return StartAudioScene(e);
    }
    stopAudioScene(e) {
      StopAudioScene(e);
    }
    isAudioSceneActive(e) {
      return IsAudioSceneActive(e);
    }
    setAudioSceneVariable(e, t, r) {
      SetAudioSceneVariable(e, t, r);
    }
    startScene(e) {
      return StartAudioScene(e);
    }
    stopScene(e) {
      StopAudioScene(e);
    }
    stopScenes() {
      StopAudioScenes();
    }
    isSceneActive(e) {
      return IsAudioSceneActive(e);
    }
    setSceneVariable(e, t, r) {
      SetAudioSceneVariable(e, t, r);
    }
    setScriptCleanupTime(e) {
      SetAudioScriptCleanupTime(e);
    }
    setCutsceneAudioOverride(e) {
      SetCutsceneAudioOverride(e);
    }
    isGameInControlOfMusic() {
      return IsGameInControlOfMusic();
    }
    setGpsActive(e) {
      SetGpsActive(e);
    }
    playMissionComplete(e) {
      PlayMissionCompleteAudio(e);
    }
    playMissionCompleteAudio(e) {
      PlayMissionCompleteAudio(e);
    }
    isMissionCompletePlaying() {
      return IsMissionCompletePlaying();
    }
    isMissionCompleteReadyForUi() {
      return IsMissionCompleteReadyForUi();
    }
    blockDeathJingle(e) {
      BlockDeathJingle(e);
    }
    prepareMusicEvent(e) {
      return PrepareMusicEvent(e);
    }
    cancelMusicEvent(e) {
      return CancelMusicEvent(e);
    }
    triggerMusicEvent(e) {
      return TriggerMusicEvent(e);
    }
    isMusicOneshotPlaying() {
      return IsMusicOneshotPlaying();
    }
    getMusicPlaytime() {
      return GetMusicPlaytime();
    }
    recordBrokenGlass(e, t, r, n) {
      RecordBrokenGlass(e, t, r, n);
    }
    clearAllBrokenGlass() {
      ClearAllBrokenGlass();
    }
    prepareAlarm(e) {
      return PrepareAlarm(e);
    }
    startAlarm(e, t) {
      StartAlarm(e, t);
    }
    stopAlarm(e, t) {
      StopAlarm(e, t);
    }
    stopAllAlarms(e) {
      StopAllAlarms(e);
    }
    isAlarmPlaying(e) {
      return IsAlarmPlaying(e);
    }
    setAudioFlag(e, t) {
      SetAudioFlag(e, t);
    }
    setFlag(e, t) {
      SetAudioFlag(e, t);
    }
    releaseWeapon() {
      ReleaseWeaponAudio();
    }
    activateSlowmoMode(e) {
      ActivateAudioSlowmoMode(e);
    }
    deactivateSlowmoMode(e) {
      DeactivateAudioSlowmoMode(e);
    }
    overridePlayerGroundMaterial(e, t) {
      OverridePlayerGroundMaterial(e, t);
    }
    overrideMicrophoneSettings(e, t) {
      OverrideMicrophoneSettings(e, t);
    }
    freezeMicrophone() {
      FreezeMicrophone();
    }
    distantCopCarSirens(e) {
      DistantCopCarSirens(e);
    }
    setSpecialEffectMode(e) {
      SetAudioSpecialEffectMode(e);
    }
    setPortalSettingsOverride(e, t) {
      SetPortalSettingsOverride(e, t);
    }
    removePortalSettingsOverride(e) {
      RemovePortalSettingsOverride(e);
    }
    requestMissionBank(e, t) {
      return RequestMissionAudioBank(e, t);
    }
    requestAmbientBank(e, t) {
      return RequestAmbientAudioBank(e, t);
    }
    requestScriptBank(e, t) {
      return RequestScriptAudioBank(e, t);
    }
    hintAmbientBank(e, t, r) {
      return HintAmbientAudioBank(e, t, r);
    }
    hintScriptBank(e, t, r) {
      return HintScriptAudioBank(e, t, r);
    }
    releaseMissionBank() {
      ReleaseMissionAudioBank();
    }
    releaseAmbientBank() {
      ReleaseAmbientAudioBank();
    }
    releaseScriptBank() {
      ReleaseScriptAudioBank();
    }
    releaseNamedScriptBank(e) {
      ReleaseNamedScriptAudioBank(e);
    }
    playSoundHash(e, t, r, n, i, a) {
      PlaySoundHash(e, t, r, n ?? false, i ?? 0, a ?? true);
    }
    setVariableOnSound(e, t) {
      return SetVariableOnSound(e, t);
    }
    overrideUnderwaterStream(e) {
      return OverrideUnderwaterStream(e);
    }
    playAmbientSpeechWithVoice(e, t, r, n, i) {
      PlayAmbientSpeechWithVoice(e, t, r, n, i);
    }
    playAmbientSpeechAtCoords(e, t, r, n, i, a) {
      PlayAmbientSpeechAtCoords(e, t, r, n, i, a);
    }
    getNumberOfPassengerVoiceVariations(e) {
      return GetNumberOfPassengerVoiceVariations(e);
    }
    setPedScream(e) {
      SetPedScream(e);
    }
    canPedSpeak(e, t, r) {
      return CanPedSpeak(e, t, r);
    }
    setPedTalk(e) {
      SetPedTalk(e);
    }
    getPlayerHeadsetSoundAlternate(e, t) {
      GetPlayerHeadsetSoundAlternate(e, t);
    }
    specialFrontendEqual(e, t, r) {
      SpecialFrontendEqual(e, t, r);
    }
    resetPedFlags(e) {
      ResetPedAudioFlags(e);
    }
    setPedFootstepLoud(e, t) {
      SetPedAudioFootstepLoud(e, t);
    }
    setPedFootstepQuiet(e, t) {
      SetPedAudioFootstepQuiet(e, t);
    }
    setSynchronizedAudioEventPositionThisFrame(e, t) {
      SetSynchronizedAudioEventPositionThisFrame(e, t);
    }
    prepareSynchronizedEvent(e, t) {
      return PrepareSynchronizedAudioEvent(e, t);
    }
    prepareSynchronizedEventForScene(e) {
      return PrepareSynchronizedAudioEventForScene(e);
    }
    playSynchronizedEvent(e) {
      return PlaySynchronizedAudioEvent(e);
    }
    stopSynchronizedEvent(e) {
      return StopSynchronizedAudioEvent(e);
    }
    setSynchronizedEventPositionThisFrame(e, t) {
      SetSynchronizedAudioEventPositionThisFrame(e, t);
    }
    addLineToConversation(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      AddLineToConversation(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    setMicrophonePosition(e, t, r, n, i, a, o, s, l, d) {
      SetMicrophonePosition(e, t, r, n, i, a, o, s, l, d);
    }
    interruptConversation(e) {
      const t = InterruptConversation(e);
      return {
        p1: t[0],
        p2: t[1]
      };
    }
    setCutsceneOverride(e) {
      SetCutsceneAudioOverride(e);
    }
    setVariableOnCutscene(e, t) {
      SetVariableOnCutsceneAudio(e, t);
    }
    stopCutscene(e) {
      StopCutscene(e);
    }
    setRadioTrackMix(e, t, r) {
      SetRadioTrackMix(e, t, r);
    }
    isVehicleRadioLoud(e) {
      return IsVehicleRadioLoud(e);
    }
    updateLsur(e) {
      UpdateLsur(e);
    }
    getCurrentRadioStationHash(e) {
      return GetCurrentRadioStationHash(e);
    }
    cancelCurrentPoliceReport() {
      CancelCurrentPoliceReport();
    }
    playPoliceCrimeReport(e, t, r, n) {
      PlayPoliceCrimeReport(e?.x ?? e?.[0] ?? 0, e?.y ?? e?.[1] ?? 0, e?.z ?? e?.[2] ?? 0, t, r, n);
    }
    soundVehicleHornThisFrame(e) {
      SoundVehicleHornThisFrame(e);
    }
    forceVehicleEngine(e, t) {
      ForceVehicleEngineAudio(e, t);
    }
    preloadVehicle(e) {
      PreloadVehicleAudio(e);
    }
    setVehicleEngineDamageFactor(e, t) {
      SetVehicleAudioEngineDamageFactor(e, t);
    }
    setVehicleBodyDamageFactor(e, t) {
      SetVehicleAudioBodyDamageFactor(e, t);
    }
    getVehicleDefaultHornVariation(e) {
      return GetVehicleDefaultHornVariation(e);
    }
    setVehicleHornVariation(e, t) {
      SetVehicleHornVariation(e, t);
    }
    addEntityToMixGroup(e, t, r) {
      AddEntityToAudioMixGroup(e, t, r);
    }
    removeEntityFromMixGroup(e, t) {
      RemoveEntityFromAudioMixGroup(e, t);
    }
    isScriptedMusicPlaying() {
      return AudioIsScriptedMusicPlaying();
    }
    hasMultiplayerDataLoaded() {
      return HasMpDataLoaded();
    }
    hasMultiplayerDataUnloaded() {
      return HasMpDataUnloaded();
    }
    getCategoryVariable(e, t) {
      return GetAudioCategoryVariable(e, t);
    }
    setCategoryVariable(e, t, r) {
      SetAudioCategoryVariable(e, t, r);
    }
    copyCategoryVariables(e, t) {
      CopyAudioCategoryVariables(e, t);
    }
    restoreCategoryVariables(e) {
      RestoreAudioCategoryVariables(e);
    }
    _0xC8B1B2425604CDD0() {
      return Citizen.invokeNative("0xC8B1B2425604CDD0");
    }
    _0x33E3C6C6F2F0B506(...e) {
      return Citizen.invokeNative("0x33E3C6C6F2F0B506", ...e);
    }
    _0x892B6AB8F33606F5(...e) {
      return Citizen.invokeNative("0x892B6AB8F33606F5", ...e);
    }
    _0x0B568201DD99F0EB(...e) {
      return Citizen.invokeNative("0x0B568201DD99F0EB", ...e);
    }
    _0x61631F5DF50D1C34(...e) {
      return Citizen.invokeNative("0x61631F5DF50D1C34", ...e);
    }
    _0xAA19F5572C38B564() {
      const e = Citizen.invokeNative("0xAA19F5572C38B564");
      return {
        p0: e?.[0],
        result: e?.[1]
      };
    }
    _0xB542DE8C3D1CB210(...e) {
      return Citizen.invokeNative("0xB542DE8C3D1CB210", ...e);
    }
    _0x40763EA7B9B783E7(...e) {
      return Citizen.invokeNative("0x40763EA7B9B783E7", ...e);
    }
    _0x19AF7ED9B9D23058() {
      return Citizen.invokeNative("0x19AF7ED9B9D23058");
    }
    _0x9AC92EED5E4793AB() {
      return Citizen.invokeNative("0x9AC92EED5E4793AB");
    }
    _0x11579D940949C49E(...e) {
      return Citizen.invokeNative("0x11579D940949C49E", ...e);
    }
    _0x5B9853296731E88D(...e) {
      return Citizen.invokeNative("0x5B9853296731E88D", ...e);
    }
    _0x7EC3C679D0E7E46B(...e) {
      return Citizen.invokeNative("0x7EC3C679D0E7E46B", ...e);
    }
    _0x1B7ABE26CBCBF8C7(...e) {
      return Citizen.invokeNative("0x1B7ABE26CBCBF8C7", ...e);
    }
    _0x30CA2EF91D15ADF8() {
      return Citizen.invokeNative("0x30CA2EF91D15ADF8");
    }
    _0xFF266D1D0EB1195D() {
      return Citizen.invokeNative("0xFF266D1D0EB1195D");
    }
    _0xDD6BCF9E94425DF9() {
      return Citizen.invokeNative("0xDD6BCF9E94425DF9");
    }
    _0x0BE4BE946463F917(...e) {
      return Citizen.invokeNative("0x0BE4BE946463F917", ...e);
    }
    _0xC1805D05E6D4FE10(...e) {
      return Citizen.invokeNative("0xC1805D05E6D4FE10", ...e);
    }
    _0x55ECF4D13D9903B0(...e) {
      return Citizen.invokeNative("0x55ECF4D13D9903B0", ...e);
    }
    _0xDA07819E452FFE8F(...e) {
      return Citizen.invokeNative("0xDA07819E452FFE8F", ...e);
    }
    _0xC64A06D939F826F5() {
      const e = Citizen.invokeNative("0xC64A06D939F826F5");
      return {
        p0: e?.[0],
        p1: e?.[1],
        p2: e?.[2],
        result: e?.[3]
      };
    }
    _0x34D66BC058019CE0(...e) {
      return Citizen.invokeNative("0x34D66BC058019CE0", ...e);
    }
    _0xF3365489E0DD50F9(...e) {
      return Citizen.invokeNative("0xF3365489E0DD50F9", ...e);
    }
    _0x5D2BFAAB8D956E0E() {
      return Citizen.invokeNative("0x5D2BFAAB8D956E0E");
    }
    _0x02E93C796ABD3A97(...e) {
      return Citizen.invokeNative("0x02E93C796ABD3A97", ...e);
    }
    _0x58BB377BEC7CD5F4(...e) {
      return Citizen.invokeNative("0x58BB377BEC7CD5F4", ...e);
    }
    _0x9BD7BD55E4533183(...e) {
      return Citizen.invokeNative("0x9BD7BD55E4533183", ...e);
    }
    _0xF8AD2EED7C47E8FE(...e) {
      return Citizen.invokeNative("0xF8AD2EED7C47E8FE", ...e);
    }
    _0xAB6781A5F3101470(...e) {
      return Citizen.invokeNative("0xAB6781A5F3101470", ...e);
    }
    _0xA8A7D434AFB4B97B(...e) {
      return Citizen.invokeNative("0xA8A7D434AFB4B97B", ...e);
    }
    _0x2ACABED337622DF2(...e) {
      return Citizen.invokeNative("0x2ACABED337622DF2", ...e);
    }
    _0x9D3AF56E94C9AE98(...e) {
      return Citizen.invokeNative("0x9D3AF56E94C9AE98", ...e);
    }
    _0xF1F8157B8C3F171C(...e) {
      return Citizen.invokeNative("0xF1F8157B8C3F171C", ...e);
    }
    _0xD2DCCD8E16E20997(...e) {
      return Citizen.invokeNative("0xD2DCCD8E16E20997", ...e);
    }
    _0x5DB8010EE71FDEF2(...e) {
      return Citizen.invokeNative("0x5DB8010EE71FDEF2", ...e);
    }
    _0x1C073274E065C6D2(...e) {
      return Citizen.invokeNative("0x1C073274E065C6D2", ...e);
    }
    _0x6FDDAD856E36988A(...e) {
      return Citizen.invokeNative("0x6FDDAD856E36988A", ...e);
    }
    _0x2DD39BF3E2F9C47F() {
      return Citizen.invokeNative("0x2DD39BF3E2F9C47F");
    }
    _0x159B7318403A1CD8(...e) {
      return Citizen.invokeNative("0x159B7318403A1CD8", ...e);
    }
    _0x70B8EC8FC108A634(...e) {
      return Citizen.invokeNative("0x70B8EC8FC108A634", ...e);
    }
    _0x149AEE66F0CB3A99(...e) {
      return Citizen.invokeNative("0x149AEE66F0CB3A99", ...e);
    }
    _0x8BF907833BE275DE(...e) {
      return Citizen.invokeNative("0x8BF907833BE275DE", ...e);
    }
    _0x062D5EAD4DA2FA6A() {
      return Citizen.invokeNative("0x062D5EAD4DA2FA6A");
    }
    _0xBF4DC1784BE94DFA(...e) {
      return Citizen.invokeNative("0xBF4DC1784BE94DFA", ...e);
    }
    _0x43FA0DFC5DF87815(...e) {
      return Citizen.invokeNative("0x43FA0DFC5DF87815", ...e);
    }
    _0xB81CF134AEB56FFB() {
      return Citizen.invokeNative("0xB81CF134AEB56FFB");
    }
    _0xC8EDE9BDBCCBA6D4(...e) {
      return Citizen.invokeNative("0xC8EDE9BDBCCBA6D4", ...e);
    }
    _0xE4E6DD5566D28C82() {
      return Citizen.invokeNative("0xE4E6DD5566D28C82");
    }
    _0x3A48AB4445D499BE() {
      return Citizen.invokeNative("0x3A48AB4445D499BE");
    }
    _0x0150B6FF25A9E2E5() {
      return Citizen.invokeNative("0x0150B6FF25A9E2E5");
    }
    _0xBEF34B1D9624D5DD(...e) {
      return Citizen.invokeNative("0xBEF34B1D9624D5DD", ...e);
    }
  }
  class no {
    constructor() {
      this.unk = ja();
    }
    beginTextCommandPrint(e) {
      BeginTextCommandPrint(e);
    }
    endTextCommandPrint(e, t) {
      EndTextCommandPrint(e, t ?? true);
    }
    addTextComponentSubstringPlayerName(e) {
      AddTextComponentSubstringPlayerName(e);
    }
    addTextComponentFloat(e, t) {
      AddTextComponentFloat(e, t ?? 2);
    }
    addTextComponentFormattedInteger(e, t) {
      AddTextComponentFormattedInteger(e, t ?? false);
    }
    setTextEntry(e) {
      SetTextEntry(e);
    }
    setTextFont(e) {
      SetTextFont(e);
    }
    setTextScale(e, t) {
      SetTextScale(e, t);
    }
    setTextColour(e, t, r, n) {
      SetTextColour(e, t, r, n);
    }
    setTextProportional(e) {
      SetTextProportional(e);
    }
    setTextCentre(e) {
      SetTextCentre(e);
    }
    setTextRightJustify(e) {
      SetTextRightJustify(e);
    }
    setTextWrap(e, t) {
      SetTextWrap(e, t);
    }
    setTextDropShadow() {
      SetTextDropShadow();
    }
    setTextOutline() {
      SetTextOutline();
    }
    setTextEdge(e, t, r, n, i) {
      SetTextEdge(e, t, r, n, i);
    }
    drawText(e, t) {
      DrawText(e, t);
    }
    setNotificationTextEntry(e) {
      SetNotificationTextEntry(e);
    }
    drawNotification(e, t) {
      return DrawNotification(e ?? false, t ?? true);
    }
    hideHudComponentThisFrame(e) {
      HideHudComponentThisFrame(e);
    }
    showHudComponentThisFrame(e) {
      ShowHudComponentThisFrame(e);
    }
    setRadarAsInteriorThisFrame(e, t, r, n, i) {
      SetRadarAsInteriorThisFrame(e, t, r, n, i);
    }
    setRadarAsExteriorThisFrame() {
      if (typeof SetRadarAsExteriorThisFrame == "function") {
        SetRadarAsExteriorThisFrame();
      }
    }
    isHudComponentActive(e) {
      return IsHudComponentActive(e);
    }
    isRadarHidden() {
      return IsRadarHidden();
    }
    addBlipForCoord(e, t, r) {
      return AddBlipForCoord(e, t, r);
    }
    addBlipForEntity(e) {
      return AddBlipForEntity(e);
    }
    addBlipForRadius(e, t, r, n) {
      return AddBlipForRadius(e, t, r, n);
    }
    removeBlip(e) {
      RemoveBlip(e);
    }
    setBlipSprite(e, t) {
      SetBlipSprite(e, t);
    }
    setBlipColour(e, t) {
      SetBlipColour(e, t);
    }
    setBlipRoute(e, t) {
      SetBlipRoute(e, t);
    }
    setBlipScale(e, t) {
      SetBlipScale(e, t);
    }
    setBlipFlashes(e, t) {
      SetBlipFlashes(e, t);
    }
    setBlipAlpha(e, t) {
      SetBlipAlpha(e, t);
    }
    setBlipDisplay(e, t) {
      SetBlipDisplay(e, t);
    }
    setBlipCategory(e, t) {
      SetBlipCategory(e, t);
    }
    setBlipAsFriendly(e, t) {
      SetBlipAsFriendly(e, t);
    }
    setBlipHighDetail(e, t) {
      SetBlipHighDetail(e, t);
    }
    setBlipRotation(e, t) {
      SetBlipRotation(e, t);
    }
    isBlipOnMinimap(e) {
      return IsBlipOnMinimap(e);
    }
    getBlipAlpha(e) {
      return GetBlipAlpha(e);
    }
    getBlipColour(e) {
      return GetBlipColour(e);
    }
    getBlipSprite(e) {
      return GetBlipSprite(e);
    }
    getFirstBlipInfoId(e) {
      return GetFirstBlipInfoId(e);
    }
    getNextBlipInfoId(e) {
      return GetNextBlipInfoId(e);
    }
    setRadarZoom(e) {
      SetRadarZoom(e);
    }
    setMinimapVisible(e) {
      SetMinimapVisible(e);
    }
    displayAreaName(e) {
      DisplayAreaName(e);
    }
    displayCash(e) {
      DisplayCash(e);
    }
    displayHud(e) {
      DisplayHud(e);
    }
    displayRadar(e) {
      DisplayRadar(e);
    }
    lockMinimapPosition(e, t) {
      LockMinimapPosition(e, t);
    }
    unlockMinimapPosition() {
      UnlockMinimapPosition();
    }
    isPauseMenuActive() {
      return IsPauseMenuActive();
    }
    getScreenPositionFromWorldPosition(e, t, r) {
      const [n, i, a] = GetScreenCoordFromWorldCoord(e, t, r);
      if (n) {
        return {
          x: i,
          y: a
        };
      } else {
        return null;
      }
    }
    getHudColour(e) {
      const [t, r, n, i] = GetHudColour(e);
      return {
        r: t,
        g: r,
        b: n,
        a: i
      };
    }
    setHudColour(e, t, r, n, i) {
      SetHudColour(e, t, r, n, i);
    }
    setMultiplayerHudCash(e, t) {
      SetMultiplayerHudCash(e, t);
    }
    isScriptedHudComponentActive(e) {
      return IsScriptedHudComponentActive(e);
    }
    hideScriptedHudComponentThisFrame(e) {
      HideScriptedHudComponentThisFrame(e);
    }
    resetHudComponentValues(e) {
      ResetHudComponentValues(e);
    }
    setHudComponentPosition(e, t, r) {
      SetHudComponentPosition(e, t, r);
    }
    getHudComponentPosition(e) {
      return za(GetHudComponentPosition(e));
    }
    beginTextCommandBusyspinnerOn(e) {
      BeginTextCommandBusyspinnerOn(e);
    }
    endTextCommandBusyspinnerOn(e) {
      EndTextCommandBusyspinnerOn(e);
    }
    busyspinnerOff() {
      BusyspinnerOff();
    }
    preloadBusyspinner() {
      PreloadBusyspinner();
    }
    busyspinnerIsOn() {
      return BusyspinnerIsOn();
    }
    busyspinnerIsDisplaying() {
      return BusyspinnerIsDisplaying();
    }
    thefeedOnlyShowTooltips(e) {
      ThefeedOnlyShowTooltips(e);
    }
    thefeedSetScriptedMenuHeight(e) {
      ThefeedSetScriptedMenuHeight(e);
    }
    thefeedHideThisFrame() {
      ThefeedHideThisFrame();
    }
    thefeedFlushQueue() {
      ThefeedFlushQueue();
    }
    thefeedRemoveItem(e) {
      ThefeedRemoveItem(e);
    }
    thefeedForceRenderOn() {
      ThefeedForceRenderOn();
    }
    thefeedForceRenderOff() {
      ThefeedForceRenderOff();
    }
    thefeedPause() {
      ThefeedPause();
    }
    thefeedResume() {
      ThefeedResume();
    }
    thefeedIsPaused() {
      return ThefeedIsPaused();
    }
    thefeedResetAllParameters() {
      ThefeedResetAllParameters();
    }
    thefeedFreezeNextPost() {
      ThefeedFreezeNextPost();
    }
    thefeedClearFrozenPost() {
      ThefeedClearFrozenPost();
    }
    beginTextCommandThefeedPost(e) {
      BeginTextCommandThefeedPost(e);
    }
    endTextCommandThefeedPostTicker(e, t) {
      return EndTextCommandThefeedPostTicker(e, t);
    }
    endTextCommandThefeedPostTickerForced(e, t) {
      return EndTextCommandThefeedPostTickerForced(e, t);
    }
    endTextCommandThefeedPostTickerWithTokens(e, t) {
      return EndTextCommandThefeedPostTickerWithTokens(e, t);
    }
    endTextCommandThefeedPostAward(e, t, r, n, i) {
      return EndTextCommandThefeedPostAward(e, t, r, n, i);
    }
    endTextCommandThefeedPostUnlock(e, t, r) {
      return EndTextCommandThefeedPostUnlock(e, t, r);
    }
    endTextCommandThefeedPostUnlockTu(e, t, r, n) {
      return EndTextCommandThefeedPostUnlockTu(e, t, r, n);
    }
    endTextCommandThefeedPostUnlockTuWithColor(e, t, r, n, i, a) {
      return EndTextCommandThefeedPostUnlockTuWithColor(e, t, r, n, i, a);
    }
    endTextCommandThefeedPostMpticker(e, t) {
      return EndTextCommandThefeedPostMpticker(e, t);
    }
    endTextCommandThefeedPostVersusTu(e, t, r, n, i, a) {
      return EndTextCommandThefeedPostVersusTu(e, t, r, n, i, a);
    }
    endTextCommandThefeedPostReplayInput(e, t, r) {
      return EndTextCommandThefeedPostReplayInput(e, t, r);
    }
    beginTextCommandIsMessageDisplayed(e) {
      BeginTextCommandIsMessageDisplayed(e);
    }
    endTextCommandIsMessageDisplayed() {
      return EndTextCommandIsMessageDisplayed();
    }
    beginTextCommandDisplayText(e) {
      BeginTextCommandDisplayText(e);
    }
    endTextCommandDisplayText(e, t) {
      EndTextCommandDisplayText(e, t);
    }
    beginTextCommandDisplayHelp(e) {
      BeginTextCommandDisplayHelp(e);
    }
    endTextCommandDisplayHelp(e, t, r, n) {
      EndTextCommandDisplayHelp(e, t, r, n);
    }
    beginTextCommandIsThisHelpMessageBeingDisplayed(e) {
      BeginTextCommandIsThisHelpMessageBeingDisplayed(e);
    }
    endTextCommandIsThisHelpMessageBeingDisplayed(e) {
      return EndTextCommandIsThisHelpMessageBeingDisplayed(e);
    }
    beginTextCommandSetBlipName(e) {
      BeginTextCommandSetBlipName(e);
    }
    endTextCommandSetBlipName(e) {
      EndTextCommandSetBlipName(e);
    }
    beginTextCommandClearPrint(e) {
      BeginTextCommandClearPrint(e);
    }
    endTextCommandClearPrint() {
      EndTextCommandClearPrint();
    }
    beginTextCommandOverrideButtonText(e) {
      BeginTextCommandOverrideButtonText(e);
    }
    endTextCommandOverrideButtonText(e) {
      EndTextCommandOverrideButtonText(e);
    }
    addTextComponentInteger(e) {
      AddTextComponentInteger(e);
    }
    addTextComponentSubstringTextLabel(e) {
      AddTextComponentSubstringTextLabel(e);
    }
    addTextComponentSubstringTextLabelHashKey(e) {
      AddTextComponentSubstringTextLabelHashKey(e);
    }
    addTextComponentSubstringBlipName(e) {
      AddTextComponentSubstringBlipName(e);
    }
    addTextComponentSubstringTime(e, t) {
      AddTextComponentSubstringTime(e, t);
    }
    addTextComponentSubstringPhoneNumber(e, t) {
      AddTextComponentSubstringPhoneNumber(e, t);
    }
    addTextComponentSubstringWebsite(e) {
      AddTextComponentSubstringWebsite(e);
    }
    addTextComponentSubstringKeyboardDisplay(e) {
      AddTextComponentSubstringKeyboardDisplay(e);
    }
    setColourOfNextTextComponent(e) {
      SetColourOfNextTextComponent(e);
    }
    clearPrints() {
      ClearPrints();
    }
    clearBrief() {
      ClearBrief();
    }
    clearAllHelpMessages() {
      ClearAllHelpMessages();
    }
    clearThisPrint(e) {
      ClearThisPrint(e);
    }
    clearSmallPrints() {
      ClearSmallPrints();
    }
    doesTextBlockExist(e) {
      return DoesTextBlockExist(e);
    }
    requestAdditionalText(e, t) {
      RequestAdditionalText(e, t);
    }
    requestAdditionalTextForDlc(e, t) {
      RequestAdditionalTextForDlc(e, t);
    }
    hasAdditionalTextLoaded(e) {
      return HasAdditionalTextLoaded(e);
    }
    clearAdditionalText(e, t) {
      ClearAdditionalText(e, t);
    }
    isStreamingAdditionalText(e) {
      return IsStreamingAdditionalText(e);
    }
    hasThisAdditionalTextLoaded(e, t) {
      return HasThisAdditionalTextLoaded(e, t);
    }
    isMessageBeingDisplayed() {
      return IsMessageBeingDisplayed();
    }
    doesTextLabelExist(e) {
      return DoesTextLabelExist(e);
    }
    getLengthOfStringWithThisTextLabel(e) {
      return GetLengthOfStringWithThisTextLabel(e);
    }
    getLengthOfLiteralString(e) {
      return GetLengthOfLiteralString(e);
    }
    getLengthOfLiteralStringInBytes(e) {
      return GetLengthOfLiteralStringInBytes(e);
    }
    getStreetNameFromHashKey(e) {
      return GetStreetNameFromHashKey(e);
    }
    isPreferenceSwitchedOn() {
      return IsHudPreferenceSwitchedOn();
    }
    isRadarPreferenceSwitchedOn() {
      return IsRadarPreferenceSwitchedOn();
    }
    isSubtitlePreferenceSwitchedOn() {
      return IsSubtitlePreferenceSwitchedOn();
    }
    display(e) {
      DisplayHud(e);
    }
    displayWhenPausedThisFrame() {
      DisplayHudWhenPausedThisFrame();
    }
    isHidden() {
      return IsHudHidden();
    }
    isMinimapRendering() {
      return IsMinimapRendering();
    }
    clearAllBlipRoutes() {
      ClearAllBlipRoutes();
    }
    setBlipRouteColour(e, t) {
      SetBlipRouteColour(e, t);
    }
    addNextMessageToPreviousBriefs(e) {
      AddNextMessageToPreviousBriefs(e);
    }
    setRadarZoomPrecise(e) {
      SetRadarZoomPrecise(e);
    }
    setRadarZoomToBlip(e, t) {
      SetRadarZoomToBlip(e, t);
    }
    setRadarZoomToDistance(e) {
      SetRadarZoomToDistance(e);
    }
    getColour(e) {
      const [t, r, n, i] = GetHudColour(e);
      return {
        r: t,
        g: r,
        b: n,
        a: i
      };
    }
    replaceColour(e, t) {
      ReplaceHudColour(e, t);
    }
    replaceColourWithRgba(e, t, r, n, i) {
      ReplaceHudColourWithRgba(e, t, r, n, i);
    }
    flashAbilityBar(e) {
      FlashAbilityBar(e);
    }
    setAbilityBarValue(e, t) {
      SetAbilityBarValue(e, t);
    }
    flashWantedDisplay(e) {
      FlashWantedDisplay(e);
    }
    getRenderedCharacterHeight(e, t) {
      return GetRenderedCharacterHeight(e, t);
    }
    setTextJustification(e) {
      SetTextJustification(e);
    }
    setTextLeading(e) {
      SetTextLeading(e);
    }
    setTextDropshadow(e, t, r, n, i) {
      SetTextDropshadow(e, t, r, n, i);
    }
    setTextRenderId(e) {
      SetTextRenderId(e);
    }
    getDefaultScriptRendertargetRenderId() {
      return GetDefaultScriptRendertargetRenderId();
    }
    registerNamedRendertarget(e, t) {
      return RegisterNamedRendertarget(e, t);
    }
    isNamedRendertargetRegistered(e) {
      return IsNamedRendertargetRegistered(e);
    }
    releaseNamedRendertarget(e) {
      return ReleaseNamedRendertarget(e);
    }
    linkNamedRendertarget(e) {
      LinkNamedRendertarget(e);
    }
    getNamedRendertargetRenderId(e) {
      return GetNamedRendertargetRenderId(e);
    }
    isNamedRendertargetLinked(e) {
      return IsNamedRendertargetLinked(e);
    }
    clearHelp(e) {
      ClearHelp(e);
    }
    isHelpMessageOnScreen() {
      return IsHelpMessageOnScreen();
    }
    isHelpMessageBeingDisplayed() {
      return IsHelpMessageBeingDisplayed();
    }
    isHelpMessageFadingOut() {
      return IsHelpMessageFadingOut();
    }
    getStandardBlipEnumId() {
      return GetStandardBlipEnumId();
    }
    getWaypointBlipEnumId() {
      return GetWaypointBlipEnumId();
    }
    getNumberOfActiveBlips() {
      return GetNumberOfActiveBlips();
    }
    getBlipInfoIdCoord(e) {
      return za(GetBlipInfoIdCoord(e));
    }
    getBlipInfoIdDisplay(e) {
      return GetBlipInfoIdDisplay(e);
    }
    getBlipInfoIdType(e) {
      return GetBlipInfoIdType(e);
    }
    getBlipInfoIdEntityIndex(e) {
      return GetBlipInfoIdEntityIndex(e);
    }
    getBlipInfoIdPickupIndex(e) {
      return GetBlipInfoIdPickupIndex(e);
    }
    getBlipFromEntity(e) {
      return GetBlipFromEntity(e);
    }
    addBlipForArea(e, t, r, n, i) {
      return AddBlipForArea(e, t, r, n, i);
    }
    addBlipForPickup(e) {
      return AddBlipForPickup(e);
    }
    triggerSonarBlip(e, t, r, n, i) {
      TriggerSonarBlip(e, t, r, n, i);
    }
    allowSonarBlips(e) {
      AllowSonarBlips(e);
    }
    setBlipCoords(e, t, r, n) {
      SetBlipCoords(e, t, r, n);
    }
    getBlipCoords(e) {
      return za(GetBlipCoords(e));
    }
    setBlipNameFromTextFile(e, t) {
      SetBlipNameFromTextFile(e, t);
    }
    setBlipNameToPlayerName(e, t) {
      SetBlipNameToPlayerName(e, t);
    }
    setBlipFade(e, t, r) {
      SetBlipFade(e, t, r);
    }
    setBlipFlashTimer(e, t) {
      SetBlipFlashTimer(e, t);
    }
    setBlipFlashInterval(e, t) {
      SetBlipFlashInterval(e, t);
    }
    setBlipSecondaryColour(e, t, r, n) {
      SetBlipSecondaryColour(e, t, r, n);
    }
    isBlipShortRange(e) {
      return IsBlipShortRange(e);
    }
    doesBlipHaveGpsRoute(e) {
      return DoesBlipHaveGpsRoute(e);
    }
    setBlipHiddenOnLegend(e, t) {
      SetBlipHiddenOnLegend(e, t);
    }
    setBlipAsMissionCreatorBlip(e, t) {
      SetBlipAsMissionCreatorBlip(e, t);
    }
    isMissionCreatorBlip(e) {
      return IsMissionCreatorBlip(e);
    }
    getNewSelectedMissionCreatorBlip() {
      return GetNewSelectedMissionCreatorBlip();
    }
    isHoveringOverMissionCreatorBlip() {
      return IsHoveringOverMissionCreatorBlip();
    }
    showStartMissionInstructionalButton(e) {
      ShowStartMissionInstructionalButton(e);
    }
    setBlipFlashesAlternate(e, t) {
      SetBlipFlashesAlternate(e, t);
    }
    isBlipFlashing(e) {
      return IsBlipFlashing(e);
    }
    setBlipAsShortRange(e, t) {
      SetBlipAsShortRange(e, t);
    }
    setBlipPriority(e, t) {
      SetBlipPriority(e, t);
    }
    pulseBlip(e) {
      PulseBlip(e);
    }
    showNumberOnBlip(e, t) {
      ShowNumberOnBlip(e, t);
    }
    hideNumberOnBlip(e) {
      HideNumberOnBlip(e);
    }
    showHeightOnBlip(e, t) {
      ShowHeightOnBlip(e, t);
    }
    showTickOnBlip(e, t) {
      ShowTickOnBlip(e, t);
    }
    showHeadingIndicatorOnBlip(e, t) {
      ShowHeadingIndicatorOnBlip(e, t);
    }
    showOutlineIndicatorOnBlip(e, t) {
      ShowOutlineIndicatorOnBlip(e, t);
    }
    showFriendIndicatorOnBlip(e, t) {
      ShowFriendIndicatorOnBlip(e, t);
    }
    showCrewIndicatorOnBlip(e, t) {
      ShowCrewIndicatorOnBlip(e, t);
    }
    setRadiusBlipEdge(e, t) {
      SetRadiusBlipEdge(e, t);
    }
    doesBlipExist(e) {
      return DoesBlipExist(e);
    }
    setWaypointOff() {
      SetWaypointOff();
    }
    refreshWaypoint() {
      RefreshWaypoint();
    }
    isWaypointActive() {
      return IsWaypointActive();
    }
    setNewWaypoint(e, t) {
      SetNewWaypoint(e, t);
    }
    setBlipBright(e, t) {
      SetBlipBright(e, t);
    }
    setBlipShowCone(e, t) {
      SetBlipShowCone(e, t);
    }
    setMinimapComponent(e, t, r) {
      return SetMinimapComponent(e, t, r);
    }
    getMainPlayerBlipId() {
      return GetMainPlayerBlipId();
    }
    getBlipRotation(e) {
      return GetBlipRotation(e);
    }
    setBlipAsMinimalOnEdge(e, t) {
      SetBlipAsMinimalOnEdge(e, t);
    }
    hideLoadingOnFadeThisFrame() {
      HideLoadingOnFadeThisFrame();
    }
    hideMinimapExteriorMapThisFrame() {
      HideMinimapExteriorMapThisFrame();
    }
    hideMinimapInteriorMapThisFrame() {
      HideMinimapInteriorMapThisFrame();
    }
    dontTiltMinimapThisFrame() {
      DontTiltMinimapThisFrame();
    }
    setWidescreenFormat(e) {
      SetWidescreenFormat(e);
    }
    displayAmmoThisFrame(e) {
      DisplayAmmoThisFrame(e);
    }
    displaySniperScopeThisFrame() {
      DisplaySniperScopeThisFrame();
    }
    hideAndRadarThisFrame() {
      HideHudAndRadarThisFrame();
    }
    setMultiplayerWalletCash() {
      SetMultiplayerWalletCash();
    }
    removeMultiplayerWalletCash() {
      RemoveMultiplayerWalletCash();
    }
    setMultiplayerBankCash() {
      SetMultiplayerBankCash();
    }
    removeMultiplayerBankCash() {
      RemoveMultiplayerBankCash();
    }
    hideHelpTextThisFrame() {
      HideHelpTextThisFrame();
    }
    displayHelpTextThisFrame(e, t) {
      DisplayHelpTextThisFrame(e, t);
    }
    setGpsFlags(e, t) {
      SetGpsFlags(e, t);
    }
    clearGpsFlags() {
      ClearGpsFlags();
    }
    setRaceTrackRender(e) {
      SetRaceTrackRender(e);
    }
    clearGpsRaceTrack() {
      ClearGpsRaceTrack();
    }
    startGpsCustomRoute(e, t, r) {
      StartGpsCustomRoute(e, t, r);
    }
    addPointToGpsCustomRoute(e, t, r) {
      AddPointToGpsCustomRoute(e, t, r);
    }
    setGpsCustomRouteRender(e, t, r) {
      SetGpsCustomRouteRender(e, t, r);
    }
    clearGpsCustomRoute() {
      ClearGpsCustomRoute();
    }
    startGpsMultiRoute(e, t, r) {
      StartGpsMultiRoute(e, t, r);
    }
    addPointToGpsMultiRoute(e, t, r) {
      AddPointToGpsMultiRoute(e, t, r);
    }
    setGpsMultiRouteRender(e) {
      SetGpsMultiRouteRender(e);
    }
    clearGpsMultiRoute() {
      ClearGpsMultiRoute();
    }
    clearGpsPlayerWaypoint() {
      ClearGpsPlayerWaypoint();
    }
    setGpsFlashes(e) {
      SetGpsFlashes(e);
    }
    flashMinimapDisplay() {
      FlashMinimapDisplay();
    }
    flashMinimapDisplayWithColor(e) {
      FlashMinimapDisplayWithColor(e);
    }
    toggleStealthRadar(e) {
      ToggleStealthRadar(e);
    }
    setMinimapInSpectatorMode(e, t) {
      SetMinimapInSpectatorMode(e, t);
    }
    setMissionName(e, t) {
      SetMissionName(e, t);
    }
    setMinimapBlockWaypoint(e) {
      SetMinimapBlockWaypoint(e);
    }
    setMinimapInPrologue(e) {
      SetMinimapInPrologue(e);
    }
    setMinimapHideFow(e) {
      SetMinimapHideFow(e);
    }
    getMinimapFowDiscoveryRatio() {
      return GetMinimapFowDiscoveryRatio();
    }
    getMinimapFowCoordinateIsRevealed(e, t, r) {
      return GetMinimapFowCoordinateIsRevealed(e, t, r);
    }
    setMinimapFowRevealCoordinate(e, t, r) {
      SetMinimapFowRevealCoordinate(e, t, r);
    }
    setMinimapGolfCourse(e) {
      SetMinimapGolfCourse(e);
    }
    setMinimapGolfCourseOff() {
      SetMinimapGolfCourseOff();
    }
    lockMinimapAngle(e) {
      LockMinimapAngle(e);
    }
    unlockMinimapAngle() {
      UnlockMinimapAngle();
    }
    setBigmapActive(e, t) {
      SetBigmapActive(e, t);
    }
    isComponentActive(e) {
      return IsHudComponentActive(e);
    }
    hideComponentThisFrame(e) {
      HideHudComponentThisFrame(e);
    }
    showComponentThisFrame(e) {
      ShowHudComponentThisFrame(e);
    }
    resetReticuleValues() {
      ResetReticuleValues();
    }
    resetComponentValues(e) {
      ResetHudComponentValues(e);
    }
    setComponentPosition(e, t, r) {
      SetHudComponentPosition(e, t, r);
    }
    getComponentPosition(e) {
      return za(GetHudComponentPosition(e));
    }
    clearReminderMessage() {
      ClearReminderMessage();
    }
    openReportugcMenu() {
      OpenReportugcMenu();
    }
    forceCloseReportugcMenu() {
      ForceCloseReportugcMenu();
    }
    isReportugcMenuOpen() {
      return IsReportugcMenuOpen();
    }
    isFloatingHelpTextOnScreen(e) {
      return IsFloatingHelpTextOnScreen(e);
    }
    setFloatingHelpTextScreenPosition(e, t, r) {
      SetFloatingHelpTextScreenPosition(e, t, r);
    }
    setFloatingHelpTextWorldPosition(e, t, r, n) {
      SetFloatingHelpTextWorldPosition(e, t, r, n);
    }
    setFloatingHelpTextToEntity(e, t, r, n) {
      SetFloatingHelpTextToEntity(e, t, r, n);
    }
    setFloatingHelpTextStyle(e, t, r, n, i, a) {
      SetFloatingHelpTextStyle(e, t, r, n, i, a);
    }
    clearFloatingHelp(e, t) {
      ClearFloatingHelp(e, t);
    }
    isMpGamerTagMovieActive() {
      return IsMpGamerTagMovieActive();
    }
    createFakeMpGamerTag(e, t, r, n, i, a) {
      return CreateFakeMpGamerTag(e, t, r, n, i, a);
    }
    removeMpGamerTag(e) {
      RemoveMpGamerTag(e);
    }
    isMpGamerTagActive(e) {
      return IsMpGamerTagActive(e);
    }
    isMpGamerTagFree(e) {
      return IsMpGamerTagFree(e);
    }
    setMpGamerTagVisibility(e, t, r) {
      SetMpGamerTagVisibility(e, t, r);
    }
    setMpGamerTagColour(e, t, r) {
      SetMpGamerTagColour(e, t, r);
    }
    setMpGamerTagHealthBarColour(e, t) {
      SetMpGamerTagHealthBarColour(e, t);
    }
    setMpGamerTagAlpha(e, t, r) {
      SetMpGamerTagAlpha(e, t, r);
    }
    setMpGamerTagWantedLevel(e, t) {
      SetMpGamerTagWantedLevel(e, t);
    }
    setMpGamerTagName(e, t) {
      SetMpGamerTagName(e, t);
    }
    setMpGamerTagBigText(e, t) {
      SetMpGamerTagBigText(e, t);
    }
    getCurrentWebpageId() {
      return GetCurrentWebpageId();
    }
    getCurrentWebsiteId() {
      return GetCurrentWebsiteId();
    }
    getGlobalActionscriptFlag(e) {
      return GetGlobalActionscriptFlag(e);
    }
    resetGlobalActionscriptFlag(e) {
      ResetGlobalActionscriptFlag(e);
    }
    isWarningMessageActive() {
      return IsWarningMessageActive();
    }
    clearDynamicPauseMenuErrorMessage() {
      ClearDynamicPauseMenuErrorMessage();
    }
    forceSonarBlipsThisFrame() {
      return ForceSonarBlipsThisFrame();
    }
    displayPlayerNameTagsOnBlips(e) {
      DisplayPlayerNameTagsOnBlips(e);
    }
    activateFrontendMenu(e, t, r) {
      ActivateFrontendMenu(e, t, r);
    }
    restartFrontendMenu(e, t) {
      RestartFrontendMenu(e, t);
    }
    getCurrentFrontendMenuVersion() {
      return GetCurrentFrontendMenuVersion();
    }
    setPauseMenuActive(e) {
      SetPauseMenuActive(e);
    }
    disableFrontendThisFrame() {
      DisableFrontendThisFrame();
    }
    suppressFrontendRenderingThisFrame() {
      SuppressFrontendRenderingThisFrame();
    }
    setFrontendActive(e) {
      SetFrontendActive(e);
    }
    getPauseMenuState() {
      return GetPauseMenuState();
    }
    isPauseMenuRestarting() {
      return IsPauseMenuRestarting();
    }
    pauseMenuActivateContext(e) {
      PauseMenuActivateContext(e);
    }
    pauseMenuDeactivateContext(e) {
      PauseMenuDeactivateContext(e);
    }
    pauseMenuIsContextActive(e) {
      return PauseMenuIsContextActive(e);
    }
    pauseMenuIsContextMenuActive() {
      return PauseMenuIsContextMenuActive();
    }
    pauseMenuSetBusySpinner(e, t, r) {
      PauseMenuSetBusySpinner(e, t, r);
    }
    isFrontendReadyForControl() {
      return IsFrontendReadyForControl();
    }
    takeControlOfFrontend() {
      TakeControlOfFrontend();
    }
    releaseControlOfFrontend() {
      ReleaseControlOfFrontend();
    }
    isNavigatingMenuContent() {
      return IsNavigatingMenuContent();
    }
    getMenuPedIntStat(e) {
      return GetMenuPedIntStat(e);
    }
    getMenuPedMaskedIntStat(e, t, r) {
      return GetMenuPedMaskedIntStat(e, t, r);
    }
    getMenuPedFloatStat(e) {
      return GetMenuPedFloatStat(e);
    }
    getMenuPedBoolStat(e) {
      return GetMenuPedBoolStat(e);
    }
    clearPedInPauseMenu() {
      ClearPedInPauseMenu();
    }
    givePedToPauseMenu(e, t) {
      GivePedToPauseMenu(e, t);
    }
    setPauseMenuPedLighting(e) {
      SetPauseMenuPedLighting(e);
    }
    setPauseMenuPedSleepState(e) {
      SetPauseMenuPedSleepState(e);
    }
    openOnlinePoliciesMenu() {
      OpenOnlinePoliciesMenu();
    }
    isOnlinePoliciesMenuActive() {
      return IsOnlinePoliciesMenuActive();
    }
    openSocialClubMenu() {
      OpenSocialClubMenu();
    }
    closeSocialClubMenu() {
      CloseSocialClubMenu();
    }
    setSocialClubTour(e) {
      SetSocialClubTour(e);
    }
    isSocialClubActive() {
      return IsSocialClubActive();
    }
    forceCloseTextInputBox() {
      ForceCloseTextInputBox();
    }
    flagPlayerContextInTournament(e) {
      FlagPlayerContextInTournament(e);
    }
    setPedHasAiBlip(e, t) {
      SetPedHasAiBlip(e, t);
    }
    doesPedHaveAiBlip(e) {
      return DoesPedHaveAiBlip(e);
    }
    setPedAiBlipGangId(e, t) {
      SetPedAiBlipGangId(e, t);
    }
    setPedAiBlipHasCone(e, t) {
      SetPedAiBlipHasCone(e, t);
    }
    setPedAiBlipForcedOn(e, t) {
      SetPedAiBlipForcedOn(e, t);
    }
    setPedAiBlipNoticeRange(e, t) {
      SetPedAiBlipNoticeRange(e, t);
    }
    setPedAiBlipSprite(e, t) {
      SetPedAiBlipSprite(e, t);
    }
    setPlayerIsInDirectorMode(e) {
      SetPlayerIsInDirectorMode(e);
    }
    customMinimapSetActive(e) {
      CustomMinimapSetActive(e);
    }
    customMinimapSetBlipObject(e) {
      CustomMinimapSetBlipObject(e);
    }
    customMinimapCreateBlip(e, t, r) {
      return CustomMinimapCreateBlip(e, t, r);
    }
    customMinimapClearBlips() {
      CustomMinimapClearBlips();
    }
    setLoadingPromptTextEntry(e) {
      BeginTextCommandBusyspinnerOn(e);
    }
    showLoadingPrompt(e) {
      EndTextCommandBusyspinnerOn(e);
    }
    setCursorSprite(e) {
      SetMouseCursorSprite(e);
    }
    removeNotification(e) {
      ThefeedRemoveItem(e);
    }
    setNotificationFlashColor(e, t, r, n) {
      ThefeedSetRgbaParameterForNextMessage(e, t, r, n);
    }
    setNotificationMessage(e, t, r, n, i, a) {
      return EndTextCommandThefeedPostMessagetext(e, t, r, n, i, a);
    }
    setNotificationMessageClanTag(e, t, r, n, i, a, o, s) {
      return EndTextCommandThefeedPostMessagetextWithCrewTag(e, t, r, n, i, a, o, s);
    }
    setNotificationMessageClanTag2(e, t, r, n, i, a, o, s, l, d) {
      return EndTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(e, t, r, n, i, a, o, s, l, d);
    }
    drawNotification2(e, t) {
      return EndTextCommandThefeedPostTickerForced(e, t);
    }
    drawNotification3(e, t) {
      return EndTextCommandThefeedPostTickerWithTokens(e, t);
    }
    drawNotification4(e, t) {
      return EndTextCommandThefeedPostTicker(e, t);
    }
    setTextEntry2(e) {
      SetTextEntry(e);
    }
    drawSubtitleTimed(e, t) {
      EndTextCommandPrint(e, t);
    }
    setTextEntryForWidth(e) {
      SetTextEntryForWidth(e);
    }
    getTextScreenWidth(e) {
      return EndTextCommandGetWidth(e);
    }
    setTextGxtEntry(e) {
      BeginTextCommandDisplayText(e);
    }
    setTextComponentFormat(e) {
      BeginTextCommandDisplayHelp(e);
    }
    displayHelpTextFromStringLabel(e, t, r, n) {
      EndTextCommandDisplayHelp(e, t, r, n);
    }
    addTextComponentItemString(e) {
      AddTextComponentItemString(e);
    }
    addTextComponentSubstringLocalized(e) {
      AddTextComponentSubstringLocalized(e);
    }
    addTextComponentSubstringCash(e, t) {
      AddTextComponentSubstringCash(e, t);
    }
    requestAdditionalText2(e, t) {
      RequestAdditionalText_2(e, t);
    }
    respondingAsTemp(e) {
      RespondingAsTemp(e);
    }
    setRadarZoomLevelThisFrame(e) {
      SetRadarZoomLevelThisFrame(e);
    }
    getTextScaleHeight(e, t) {
      return GetTextScaleHeight(e, t);
    }
    showWeaponWheel(e) {
      HudForceWeaponWheel(e);
    }
    keyHudColour(e, t) {
      KeyHudColour(e, t);
    }
    setMinimapRevealed(e) {
      SetMinimapRevealed(e);
    }
    isMinimapAreaRevealed(e, t, r) {
      return IsMinimapAreaRevealed(e, t, r);
    }
    setMinimapAttitudeIndicatorLevel(e, t) {
      SetMinimapAttitudeIndicatorLevel(e, t);
    }
    setRadarBigmapEnabled(e, t) {
      SetBigmapActive(e, t);
    }
    hasHeadDisplayLoaded(e) {
      return HasHeadDisplayLoaded(e);
    }
    addTrevorRandomModifier(e) {
      return AddTrevorRandomModifier(e);
    }
    setHeadDisplayFlag(e, t, r, n) {
      SetHeadDisplayFlag(e, t, r, n);
    }
    setHeadDisplayWanted(e, t) {
      SetMpGamerTagWantedLevel(e, t);
    }
    setHeadDisplayString(e, t) {
      SetMpGamerTagName(e, t);
    }
    objectDecalToggle(e) {
      ObjectDecalToggle(e);
    }
    setUseridsUihidden(e) {
      return SetUseridsUihidden(e);
    }
    hideSpecialAbilityLockonOperation(e, t) {
      HideSpecialAbilityLockonOperation(e, t);
    }
    setWarningMessage2(e, t, r, n, i, a, o, s) {
      const l = SetWarningMessageWithHeader(e, t, r, n, i, a, o, s);
      return {
        showBackground: l[1],
        p7: l[2]
      };
    }
    setWarningMessage3(e, t, r, n, i, a, o, s, l) {
      const d = SetWarningMessageWithHeaderAndSubstringFlags(e, t, r, n, i, a, o, s, l);
      return {
        p7: d[1],
        p8: d[2]
      };
    }
    setMouseCursorActiveThisFrame() {
      SetMouseCursorThisFrame();
    }
    setMouseCursorSprite(e) {
      SetMouseCursorSprite(e);
    }
    setMouseCursorVisibleInMenus(e) {
      SetMouseCursorVisibleInMenus(e);
    }
    thefeedDisableLoadingScreenTips() {
      ThefeedDisableLoadingScreenTips();
    }
    thefeedDisplayLoadingScreenTips() {
      ThefeedDisplayLoadingScreenTips();
    }
    thefeedSpsExtendWidescreenOn() {
      ThefeedSpsExtendWidescreenOn();
    }
    thefeedSpsExtendWidescreenOff() {
      ThefeedSpsExtendWidescreenOff();
    }
    thefeedGetFirstVisibleDeleteRemaining() {
      return ThefeedGetFirstVisibleDeleteRemaining();
    }
    thefeedCommentTeleportPoolOn() {
      ThefeedCommentTeleportPoolOn();
    }
    thefeedCommentTeleportPoolOff() {
      ThefeedCommentTeleportPoolOff();
    }
    thefeedSetNextPostBackgroundColor(e) {
      ThefeedSetNextPostBackgroundColor(e);
    }
    thefeedSetAnimpostfxColor(e, t, r, n) {
      ThefeedSetAnimpostfxColor(e, t, r, n);
    }
    thefeedSetAnimpostfxCount(e) {
      ThefeedSetAnimpostfxCount(e);
    }
    thefeedSetAnimpostfxSound(e) {
      ThefeedSetAnimpostfxSound(e);
    }
    thefeedSetFlushAnimpostfx(e) {
      ThefeedSetFlushAnimpostfx(e);
    }
    thefeedAddTxdRef(...e) {
      const t = ThefeedAddTxdRef(...e);
      if (Array.isArray(t)) {
        return {
          p0: t[0],
          p1: t[1],
          p2: t[2],
          p3: t[3]
        };
      } else {
        return t;
      }
    }
    endTextCommandThefeedPostStats(e, t, r, n, i, a, o) {
      return EndTextCommandThefeedPostStats(e, t, r, n, i, a, o);
    }
    endTextCommandThefeedPostMessagetext(e, t, r, n, i, a) {
      return EndTextCommandThefeedPostMessagetext(e, t, r, n, i, a);
    }
    endTextCommandThefeedPostMessagetextGxtEntry(e, t, r, n, i, a) {
      return EndTextCommandThefeedPostMessagetextGxtEntry(e, t, r, n, i, a);
    }
    endTextCommandThefeedPostMessagetextTu(e, t, r, n, i, a, o) {
      return EndTextCommandThefeedPostMessagetextTu(e, t, r, n, i, a, o);
    }
    endTextCommandThefeedPostMessagetextWithCrewTag(e, t, r, n, i, a, o, s) {
      return EndTextCommandThefeedPostMessagetextWithCrewTag(e, t, r, n, i, a, o, s);
    }
    endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(e, t, r, n, i, a, o, s, l, d) {
      return EndTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(e, t, r, n, i, a, o, s, l, d);
    }
    endTextCommandThefeedPostCrewtag(e, t, r, n, i, a, o, s, l) {
      const d = EndTextCommandThefeedPostCrewtag(e, t, r, n, i, a, o, s, l);
      if (Array.isArray(d)) {
        return {
          p2: d[1],
          result: d[0]
        };
      } else {
        return d;
      }
    }
    endTextCommandThefeedPostCrewtagWithGameName(e, t, r, n, i, a, o, s, l, d) {
      const c = EndTextCommandThefeedPostCrewtagWithGameName(e, t, r, n, i, a, o, s, l, d);
      if (Array.isArray(c)) {
        return {
          p2: c[1],
          result: c[0]
        };
      } else {
        return c;
      }
    }
    endTextCommandThefeedPostCrewRankup(e, t, r, n, i) {
      return EndTextCommandThefeedPostCrewRankup(e, t, r, n, i);
    }
    endTextCommandThefeedPostReplayIcon(e, t, r) {
      return EndTextCommandThefeedPostReplayIcon(e, t, r);
    }
    beginTextCommandGetWidth(e) {
      BeginTextCommandGetWidth(e);
    }
    endTextCommandGetWidth(e) {
      return EndTextCommandGetWidth(e);
    }
    beginTextCommandLineCount(e) {
      BeginTextCommandLineCount(e);
    }
    endTextCommandLineCount(e, t) {
      return EndTextCommandLineCount(e, t);
    }
    beginTextCommandObjective(e) {
      BeginTextCommandObjective(e);
    }
    endTextCommandObjective(e) {
      EndTextCommandObjective(e);
    }
    endTextComponent() {
      EndTextComponent();
    }
    getTextSubstring(e, t, r) {
      return GetTextSubstring(e, t, r);
    }
    getTextSubstringSafe(e, t, r, n) {
      return GetTextSubstringSafe(e, t, r, n);
    }
    getTextSubstringSlice(e, t, r) {
      return GetTextSubstringSlice(e, t, r);
    }
    getLabelText(e) {
      return GetLabelText(e);
    }
    displayWhenDeadThisFrame() {
      DisplayHudWhenDeadThisFrame();
    }
    displayLoadingScreenTips() {
      HudDisplayLoadingScreenTips();
    }
    setHelpMessageTextStyle(e, t, r, n, i) {
      SetHelpMessageTextStyle(e, t, r, n, i);
    }
    setScriptVariableColour(e, t, r, n) {
      SetScriptVariableHudColour(e, t, r, n);
    }
    setScriptVariable2Colour(e, t, r, n) {
      SetScriptVariable_2HudColour(e, t, r, n);
    }
    setAbilityBarVisibilityInMultiplayer(e) {
      SetAbilityBarVisibilityInMultiplayer(e);
    }
    setAllowAbilityBarInMultiplayer(e) {
      SetAllowAbilityBarInMultiplayer(e);
    }
    getClosestBlipOfType(e) {
      return GetClosestBlipOfType(e);
    }
    setBlipSquaredRotation(e, t) {
      SetBlipSquaredRotation(e, t);
    }
    setBlipScaleTransformation(e, t, r) {
      SetBlipScaleTransformation(e, t, r);
    }
    setBlipDisplayIndicatorOnBlip(e, t) {
      SetBlipDisplayIndicatorOnBlip(e, t);
    }
    setBlipShrink(e, t) {
      SetBlipShrink(e, t);
    }
    getBlipFadeStatus(e) {
      return GetBlipFadeDirection(e);
    }
    setBlipCategoryPriority(e, t) {
      SetBlipCategoryPriority(e, t);
    }
    setBlipCategoryGrouped(e, t) {
      SetBlipCategoryGrouped(e, t);
    }
    deleteWaypoint() {
      DeleteWaypoint();
    }
    setMinimapSonarEnabled(e) {
      SetMinimapSonarEnabled(e);
    }
    showSigninUi() {
      ShowSigninUi();
    }
    getNorthRadarBlip() {
      return GetNorthRadarBlip();
    }
    setPlayerBlipPositionThisFrame(e, t) {
      SetPlayerBlipPositionThisFrame(e, t);
    }
    isMinimapInInterior() {
      return IsMinimapInInterior();
    }
    setToggleMinimapHeistIsland(e) {
      SetToggleMinimapHeistIsland(e);
    }
    setPlayerCashChange(e, t) {
      SetPlayerCashChange(e, t);
    }
    setMultiplayerCash(e, t) {
      SetMultiplayerHudCash(e, t);
    }
    removeMultiplayerCash() {
      RemoveMultiplayerHudCash();
    }
    forceWeaponWheel(e) {
      HudForceWeaponWheel(e);
    }
    weaponWheelIgnoreSelection() {
      HudWeaponWheelIgnoreSelection();
    }
    weaponWheelGetSelectedHash() {
      return HudWeaponWheelGetSelectedHash();
    }
    setWeaponWheelTopSlot(e) {
      HudSetWeaponWheelTopSlot(e);
    }
    weaponWheelGetSlotHash(e) {
      return HudGetWeaponWheelTopSlot(e);
    }
    weaponWheelIgnoreControlInput(e) {
      HudWeaponWheelIgnoreControlInput(e);
    }
    setMinimapAltitudeIndicatorLevel(e, t) {
      SetMinimapAltitudeIndicatorLevel(e, t);
    }
    setHealthDisplayValues(e, t, r) {
      SetHealthHudDisplayValues(e, t, r);
    }
    setMaxHealthDisplay(e) {
      SetMaxHealthHudDisplay(e);
    }
    setMaxArmourDisplay(e) {
      SetMaxArmourHudDisplay(e);
    }
    isScriptedComponentActive(e) {
      return IsScriptedHudComponentActive(e);
    }
    hideScriptedComponentThisFrame(e) {
      HideScriptedHudComponentThisFrame(e);
    }
    showScriptedComponentThisFrame(e) {
      ShowScriptedHudComponentThisFrame(e);
    }
    isScriptedComponentHiddenThisFrame(e) {
      return IsScriptedHudComponentHiddenThisFrame(e);
    }
    hideAreaAndVehicleNameThisFrame() {
      HideAreaAndVehicleNameThisFrame();
    }
    createMpGamerTagWithCrewColor(e, t, r, n, i, a, o, s, l) {
      CreateMpGamerTagWithCrewColor(e, t, r, n, i, a, o, s, l);
    }
    setMpGamerTagEnabled(e, t) {
      SetMpGamerTagEnabled(e, t);
    }
    setMpGamerTagIcons(e, t) {
      SetMpGamerTagIcons(e, t);
    }
    setMpGamerHealthBarDisplay(e, t) {
      SetMpGamerHealthBarDisplay(e, t);
    }
    setMpGamerHealthBarMax(e, t, r) {
      SetMpGamerHealthBarMax(e, t, r);
    }
    setMpGamerTagUnk(e, t) {
      SetMpGamerTagUnk(e, t);
    }
    isValidMpGamerTagMovie(e) {
      return IsValidMpGamerTagMovie(e);
    }
    isWarningMessageActive2() {
      return IsWarningMessageActive_2();
    }
    setWarningMessage(e, t, r, n, i, a, o, s, l) {
      SetWarningMessage(e, t, r, n, i, a, o, s, l);
    }
    setWarningMessageWithHeader(e, t, r, n, i, a, o, s) {
      const l = SetWarningMessageWithHeader(e, t, r, n, i, a, o, s);
      if (Array.isArray(l)) {
        return {
          showBackground: l[1],
          p7: l[2]
        };
      } else {
        return l;
      }
    }
    setWarningMessageWithHeaderAndSubstringFlags(e, t, r, n, i, a, o, s, l) {
      const d = SetWarningMessageWithHeaderAndSubstringFlags(e, t, r, n, i, a, o, s, l);
      if (Array.isArray(d)) {
        return {
          p7: d[1],
          p8: d[2]
        };
      } else {
        return d;
      }
    }
    setWarningMessageWithHeaderUnk(e, t, r, n, i, a, o, s, l) {
      const d = SetWarningMessageWithHeaderUnk(e, t, r, n, i, a, o, s, l);
      if (Array.isArray(d)) {
        return {
          p6: d[1],
          p7: d[2]
        };
      } else {
        return d;
      }
    }
    setWarningMessageWithAlert(e, t, r, n, i, a, o, s, l, d, c, u) {
      SetWarningMessageWithAlert(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    getWarningMessageTitleHash() {
      return GetWarningMessageTitleHash();
    }
    setWarningMessageListRow(e, t, r, n, i, a) {
      return SetWarningMessageListRow(e, t, r, n, i, a);
    }
    removeWarningMessageListItems() {
      RemoveWarningMessageListItems();
    }
    raceGalleryFullscreen(e) {
      RaceGalleryFullscreen(e);
    }
    raceGalleryNextBlipSprite(e) {
      RaceGalleryNextBlipSprite(e);
    }
    raceGalleryAddBlip(e, t, r) {
      return RaceGalleryAddBlip(e, t, r);
    }
    clearRaceGalleryBlips() {
      ClearRaceGalleryBlips();
    }
    allowPauseMenuWhenDeadThisFrame() {
      AllowPauseMenuWhenDeadThisFrame();
    }
    logDebugInfo(e) {
      LogDebugInfo(e);
    }
    getPauseMenuSelection() {
      const e = GetPauseMenuSelection();
      if (Array.isArray(e)) {
        return {
          lastItemMenuId: e[0],
          selectedItemUniqueId: e[1]
        };
      } else {
        return e;
      }
    }
    getPauseMenuSelectionData() {
      const e = GetPauseMenuSelectionData();
      if (Array.isArray(e)) {
        return {
          lastItemMenuId: e[0],
          selectedItemMenuId: e[1],
          selectedItemUniqueId: e[2]
        };
      } else {
        return e;
      }
    }
    overrideMultiplayerChatPrefix(e) {
      OverrideMultiplayerChatPrefix(e);
    }
    isMultiplayerChatActive() {
      return IsMultiplayerChatActive();
    }
    closeMultiplayerChat() {
      CloseMultiplayerChat();
    }
    overrideMultiplayerChatColour(e, t) {
      OverrideMultiplayerChatColour(e, t);
    }
    setTextChatUnk(e) {
      SetTextChatUnk(e);
    }
    setPedHasAiBlipWithColor(e, t, r) {
      SetPedHasAiBlipWithColor(e, t, r);
    }
    getAiBlip2(e) {
      return GetAiBlip(e);
    }
    getAiBlip(e) {
      return GetAiBlip(e);
    }
    hasDirectorModeBeenTriggered() {
      return HasDirectorModeBeenTriggered();
    }
    setDirectorModeClearTriggeredFlag() {
      SetDirectorModeClearTriggeredFlag();
    }
    setMinimapComponentValues(e, t, r, n, i, a, o) {
      SetMinimapComponentPosition(e, t, r, n, i, a, o);
    }
    resetMinimapComponentValues(e) {
      ResetMinimapComponentPosition(e);
    }
    getMinimapComponentValues(e) {
      return GetMinimapComponentValues(e);
    }
    getCurrentAreaNameString() {
      return GetCurrentAreaNameString();
    }
    getCurrentAreaNameHash() {
      return GetCurrentAreaNameHash();
    }
    getCurrentAreaNameLabel() {
      return GetCurrentAreaNameLabel();
    }
    getCurrentStreetNameString() {
      return GetCurrentStreetNameString();
    }
    getCurrentStreetNameHash() {
      return GetCurrentStreetNameHash();
    }
    setShowHudComponentsThisFrameBatch(e, t) {
      for (const r of t) {
        if (e) {
          ShowHudComponentThisFrame(r);
        } else {
          HideHudComponentThisFrame(r);
        }
      }
    }
    applyShowHudComponentsThisFrameBatch() {}
    setInteriorZoomLevelIncreased(e) {
      SetInteriorZoomLevelIncreased(e);
    }
    setInteriorZoomLevelDecreased(e) {
      SetInteriorZoomLevelDecreased(e);
    }
    setMainPlayerBlipColour(e) {
      SetMainPlayerBlipColour(e);
    }
    enableDeathbloodSeethrough(e) {
      EnableDeathbloodSeethrough(e);
    }
    setMissionName2(e, t) {
      SetMissionName_2(e, t);
    }
    setScreenHeader(e, t) {
      SetPauseMenuHeaderText(e, t);
    }
    getItem(e) {
      return GetMenuItem(e);
    }
    tryGetItem(e) {
      try {
        return GetMenuItem(e);
      } catch {
        return;
      }
    }
    getItems(e) {
      return e.map(e => GetMenuItem(e));
    }
    tryGetItems(e) {
      return e.map(e => {
        try {
          return GetMenuItem(e);
        } catch {
          return;
        }
      });
    }
    setItemText(e, t) {
      SetMenuItemText(e, t);
    }
    setItemRange(e, t, r) {
      SetMenuItemRange(e, t, r);
    }
    setItemList(e, t) {
      SetMenuItemList(e, t);
    }
    setItemTicksVisible(e, t) {
      SetMenuItemTicksVisible(e, t);
    }
    setItemColor(e, t) {
      SetMenuItemColor(e, t);
    }
    setItemValue(e, t) {
      SetMenuItemValue(e, t);
    }
    setItemEnabled(e, t) {
      SetMenuItemEnabled(e, t);
    }
    _0x9245E81072704B8A(...e) {
      return Citizen.invokeNative("0x9245E81072704B8A", ...e);
    }
    _0x3D9ACB1EB139E702(...e) {
      return Citizen.invokeNative("0x3D9ACB1EB139E702", ...e);
    }
    _0x632B2940C67F4EA9(...e) {
      const t = Citizen.invokeNative("0x632B2940C67F4EA9", ...e);
      if (Array.isArray(t)) {
        return {
          p1: t[0],
          p2: t[1],
          p3: t[2],
          result: t[3]
        };
      } else {
        return t;
      }
    }
    _0x98C3CF913D895111(...e) {
      return Citizen.invokeNative("0x98C3CF913D895111", ...e);
    }
    _0xCD74233600C4EA6B(...e) {
      return Citizen.invokeNative("0xCD74233600C4EA6B", ...e);
    }
    _0xC2D2AD9EAAE265B8(...e) {
      return Citizen.invokeNative("0xC2D2AD9EAAE265B8", ...e);
    }
    _0x0C698D8F099174C7(...e) {
      return Citizen.invokeNative("0x0C698D8F099174C7", ...e);
    }
    _0xE4C3B169876D33D7(...e) {
      return Citizen.invokeNative("0xE4C3B169876D33D7", ...e);
    }
    _0xEB81A3DADD503187(...e) {
      return Citizen.invokeNative("0xEB81A3DADD503187", ...e);
    }
    _0x2790F4B17D098E26(...e) {
      return Citizen.invokeNative("0x2790F4B17D098E26", ...e);
    }
    _0x6CDD58146A436083(...e) {
      return Citizen.invokeNative("0x6CDD58146A436083", ...e);
    }
    _0xD1942374085C8469(...e) {
      return Citizen.invokeNative("0xD1942374085C8469", ...e);
    }
    _0x57D760D55F54E071(...e) {
      return Citizen.invokeNative("0x57D760D55F54E071", ...e);
    }
    _0xD2049635DEB9C375(...e) {
      return Citizen.invokeNative("0xD2049635DEB9C375", ...e);
    }
    _0xBA8D65C1C65702E5(...e) {
      return Citizen.invokeNative("0xBA8D65C1C65702E5", ...e);
    }
    _0x214CD562A939246A(...e) {
      return Citizen.invokeNative("0x214CD562A939246A", ...e);
    }
    _0x9FCB3CBFB3EAD69A(...e) {
      return Citizen.invokeNative("0x9FCB3CBFB3EAD69A", ...e);
    }
    _0xB7B873520C84C118(...e) {
      return Citizen.invokeNative("0xB7B873520C84C118", ...e);
    }
    _0x2C173AE2BDB9385E(...e) {
      return Citizen.invokeNative("0x2C173AE2BDB9385E", ...e);
    }
    _0x003E92BA477F9D7F(...e) {
      return Citizen.invokeNative("0x003E92BA477F9D7F", ...e);
    }
    _0x2916A928514C9827(...e) {
      return Citizen.invokeNative("0x2916A928514C9827", ...e);
    }
    _0xB552929B85FC27EC(...e) {
      return Citizen.invokeNative("0xB552929B85FC27EC", ...e);
    }
    _0x4B5B620C9B59ED34(...e) {
      return Citizen.invokeNative("0x4B5B620C9B59ED34", ...e);
    }
    _0x2C9F302398E13141(...e) {
      return Citizen.invokeNative("0x2C9F302398E13141", ...e);
    }
    _0xC594B315EDF2D4AF(...e) {
      return Citizen.invokeNative("0xC594B315EDF2D4AF", ...e);
    }
    _0xF83D0FEBE75E62C9(...e) {
      return Citizen.invokeNative("0xF83D0FEBE75E62C9", ...e);
    }
    _0x35A3CD97B2C0A6D2(...e) {
      return Citizen.invokeNative("0x35A3CD97B2C0A6D2", ...e);
    }
    _0x8410C5E0CD847B9D(...e) {
      return Citizen.invokeNative("0x8410C5E0CD847B9D", ...e);
    }
    _0x41350B4FC28E3941(...e) {
      return Citizen.invokeNative("0x41350B4FC28E3941", ...e);
    }
    _0x504DFE62A1692296(...e) {
      return Citizen.invokeNative("0x504DFE62A1692296", ...e);
    }
    _0xA17784FCA9548D15(...e) {
      return Citizen.invokeNative("0xA17784FCA9548D15", ...e);
    }
    _0x55F5A5F07134DE60(...e) {
      return Citizen.invokeNative("0x55F5A5F07134DE60", ...e);
    }
    _0x170F541E1CADD1DE(...e) {
      return Citizen.invokeNative("0x170F541E1CADD1DE", ...e);
    }
    _0xE67C6DFD386EA5E7(...e) {
      return Citizen.invokeNative("0xE67C6DFD386EA5E7", ...e);
    }
    _0x801879A9B4F4B2FB(...e) {
      return Citizen.invokeNative("0x801879A9B4F4B2FB", ...e);
    }
    _0x7B21E0BB01E8224A(...e) {
      return Citizen.invokeNative("0x7B21E0BB01E8224A", ...e);
    }
    _0x817B86108EB94E51(...e) {
      const t = Citizen.invokeNative("0x817B86108EB94E51", ...e);
      if (Array.isArray(t)) {
        return {
          p1: t[0],
          p2: t[1],
          p3: t[2],
          p4: t[3],
          p5: t[4],
          p6: t[5],
          p7: t[6],
          p8: t[7]
        };
      } else {
        return t;
      }
    }
    _0x62E849B7EB28E770(...e) {
      return Citizen.invokeNative("0x62E849B7EB28E770", ...e);
    }
    _0xDAF87174BE7454FF(...e) {
      return Citizen.invokeNative("0xDAF87174BE7454FF", ...e);
    }
    _0x211C4EF450086857(...e) {
      return Citizen.invokeNative("0x211C4EF450086857", ...e);
    }
    _0xBF4F34A85CA2970C(...e) {
      return Citizen.invokeNative("0xBF4F34A85CA2970C", ...e);
    }
    _0x2F057596F2BD0061(...e) {
      return Citizen.invokeNative("0x2F057596F2BD0061", ...e);
    }
    _0x5BFF36D6ED83E0AE(...e) {
      return za(Citizen.invokeNative("0x5BFF36D6ED83E0AE", ...e));
    }
    _0x77F16B447824DA6C(...e) {
      return Citizen.invokeNative("0x77F16B447824DA6C", ...e);
    }
    _0xCDCA26E80FAECB8F(...e) {
      return Citizen.invokeNative("0xCDCA26E80FAECB8F", ...e);
    }
    _0x2DE6C5E2E996F178(...e) {
      return Citizen.invokeNative("0x2DE6C5E2E996F178", ...e);
    }
    _0xDE03620F8703A9DF(...e) {
      return Citizen.invokeNative("0xDE03620F8703A9DF", ...e);
    }
    _0x359AF31A4B52F5ED(...e) {
      return Citizen.invokeNative("0x359AF31A4B52F5ED", ...e);
    }
    _0x13C4B962653A5280(...e) {
      return Citizen.invokeNative("0x13C4B962653A5280", ...e);
    }
    _0xC8E1071177A23BE5(...e) {
      const t = Citizen.invokeNative("0xC8E1071177A23BE5", ...e);
      if (Array.isArray(t)) {
        return {
          p0: t[0],
          p1: t[1],
          p2: t[2],
          result: t[3]
        };
      } else {
        return t;
      }
    }
    _0x4895BDEA16E7C080(...e) {
      return Citizen.invokeNative("0x4895BDEA16E7C080", ...e);
    }
    _0xF06EBB91A81E09E3(...e) {
      return Citizen.invokeNative("0xF06EBB91A81E09E3", ...e);
    }
    _0x66E7CB63C97B7D20(...e) {
      return Citizen.invokeNative("0x66E7CB63C97B7D20", ...e);
    }
    _0x593FEAE1F73392D4(...e) {
      return Citizen.invokeNative("0x593FEAE1F73392D4", ...e);
    }
    _0xF284AC67940C6812(...e) {
      return Citizen.invokeNative("0xF284AC67940C6812", ...e);
    }
    _0x2E22FEFA0100275E(...e) {
      return Citizen.invokeNative("0x2E22FEFA0100275E", ...e);
    }
    _0x0CF54F20DE43879C(...e) {
      return Citizen.invokeNative("0x0CF54F20DE43879C", ...e);
    }
    _0xA238192F33110615(...e) {
      const t = Citizen.invokeNative("0xA238192F33110615", ...e);
      if (Array.isArray(t)) {
        return {
          p0: t[0],
          p1: t[1],
          p2: t[2],
          result: t[3]
        };
      } else {
        return t;
      }
    }
    _0xCA6B2F7CE32AB653(...e) {
      return Citizen.invokeNative("0xCA6B2F7CE32AB653", ...e);
    }
    _0x24A49BEAF468DC90(...e) {
      return Citizen.invokeNative("0x24A49BEAF468DC90", ...e);
    }
    _0x8F08017F9D7C47BD(...e) {
      return Citizen.invokeNative("0x8F08017F9D7C47BD", ...e);
    }
    _0xF13FE2A80C05C561(...e) {
      return Citizen.invokeNative("0xF13FE2A80C05C561", ...e);
    }
    _0x1185A8087587322C(...e) {
      return Citizen.invokeNative("0x1185A8087587322C", ...e);
    }
    _0x577599CCED639CA2(...e) {
      return Citizen.invokeNative("0x577599CCED639CA2", ...e);
    }
    _0x7C226D5346D4D10A(...e) {
      return Citizen.invokeNative("0x7C226D5346D4D10A", ...e);
    }
    _0x04655F9D075D0AE5(...e) {
      return Citizen.invokeNative("0x04655F9D075D0AE5", ...e);
    }
    _0x243296A510B562B6(...e) {
      return Citizen.invokeNative("0x243296A510B562B6", ...e);
    }
  }
  class io {
    constructor() {
      this.unk = ja();
    }
    getAllocatedStackSize() {
      return GetAllocatedStackSize();
    }
    getNumberOfFreeStacksOfThisSize(e) {
      return GetNumberOfFreeStacksOfThisSize(e);
    }
    setRandomSeed(e) {
      SetRandomSeed(e);
    }
    setRandomEventFlag(e) {
      SetRandomEventFlag(e);
    }
    getRandomEventFlag() {
      return GetRandomEventFlag();
    }
    hasResumedFromSuspend() {
      return HasResumedFromSuspend();
    }
    getPrevWeatherTypeHashName() {
      return GetPrevWeatherTypeHashName();
    }
    getNextWeatherTypeHashName() {
      return GetNextWeatherTypeHashName();
    }
    isPrevWeatherType(e) {
      return IsPrevWeatherType(e);
    }
    isNextWeatherType(e) {
      return IsNextWeatherType(e);
    }
    setWeatherTypePersist(e) {
      SetWeatherTypePersist(e);
    }
    setWeatherTypeNow(e) {
      SetWeatherTypeNow(e);
    }
    setWeatherTypeNowPersist(e) {
      SetWeatherTypeNowPersist(e);
    }
    setWeatherTypeOvertimePersist(e, t) {
      SetWeatherTypeOvertimePersist(e, t);
    }
    setRandomWeatherType() {
      SetRandomWeatherType();
    }
    clearWeatherTypePersist() {
      ClearWeatherTypePersist();
    }
    setOverrideWeather(e) {
      SetOverrideWeather(e);
    }
    clearOverrideWeather() {
      ClearOverrideWeather();
    }
    getWeatherTypeTransition() {
      const [e, t, r] = GetWeatherTypeTransition();
      return {
        weatherType1: e,
        weatherType2: t,
        percent: r
      };
    }
    waterOverrideSetShorewaveamplitude(e) {
      WaterOverrideSetShorewaveamplitude(e);
    }
    waterOverrideSetShorewaveminamplitude(e) {
      WaterOverrideSetShorewaveminamplitude(e);
    }
    waterOverrideSetShorewavemaxamplitude(e) {
      WaterOverrideSetShorewavemaxamplitude(e);
    }
    waterOverrideSetOceannoiseminamplitude(e) {
      WaterOverrideSetOceannoiseminamplitude(e);
    }
    waterOverrideSetOceanwaveamplitude(e) {
      WaterOverrideSetOceanwaveamplitude(e);
    }
    waterOverrideSetOceanwaveminamplitude(e) {
      WaterOverrideSetOceanwaveminamplitude(e);
    }
    waterOverrideSetOceanwavemaxamplitude(e) {
      WaterOverrideSetOceanwavemaxamplitude(e);
    }
    waterOverrideSetRipplebumpiness(e) {
      WaterOverrideSetRipplebumpiness(e);
    }
    waterOverrideSetRippleminbumpiness(e) {
      WaterOverrideSetRippleminbumpiness(e);
    }
    waterOverrideSetRipplemaxbumpiness(e) {
      WaterOverrideSetRipplemaxbumpiness(e);
    }
    waterOverrideSetRippledisturb(e) {
      WaterOverrideSetRippledisturb(e);
    }
    waterOverrideSetStrength(e) {
      WaterOverrideSetStrength(e);
    }
    waterOverrideFadeIn(e) {
      WaterOverrideFadeIn(e);
    }
    waterOverrideFadeOut(e) {
      WaterOverrideFadeOut(e);
    }
    setWind(e) {
      SetWind(e);
    }
    setWindSpeed(e) {
      SetWindSpeed(e);
    }
    getWindSpeed() {
      return GetWindSpeed();
    }
    setWindDirection(e) {
      SetWindDirection(e);
    }
    getWindDirection() {
      return za(GetWindDirection());
    }
    setRainLevel(e) {
      SetRainLevel(e);
    }
    getRainLevel() {
      return GetRainLevel();
    }
    setSnowLevel(e) {
      SetSnowLevel(e);
    }
    getSnowLevel() {
      return GetSnowLevel();
    }
    forceLightningFlash() {
      ForceLightningFlash();
    }
    preloadCloudHat(e) {
      PreloadCloudHat(e);
    }
    loadCloudHat(e, t) {
      LoadCloudHat(e, t);
    }
    unloadCloudHat(e, t) {
      UnloadCloudHat(e, t);
    }
    getGameTimer() {
      return GetGameTimer();
    }
    getFrameTime() {
      return GetFrameTime();
    }
    getFrameCount() {
      return GetFrameCount();
    }
    get isGen9() {
      return false;
    }
    getRandomFloatInRange(e, t) {
      return GetRandomFloatInRange(e, t);
    }
    getRandomIntInRange(e, t) {
      return GetRandomIntInRange(e, t);
    }
    asin(e) {
      return Asin(e);
    }
    acos(e) {
      return Acos(e);
    }
    tan(e) {
      return Tan(e);
    }
    atan(e) {
      return Atan(e);
    }
    atan2(e, t) {
      return Atan2(e, t);
    }
    getDistanceBetweenCoords(e, t, r, n, i, a, o) {
      return GetDistanceBetweenCoords(e, t, r, n, i, a, o ?? true);
    }
    getAngleBetween2dVectors(e, t, r, n) {
      return GetAngleBetween_2dVectors(e, t, r, n);
    }
    getHeadingFromVector2D(e, t) {
      return GetHeadingFromVector_2d(e, t);
    }
    getGroundZFor3DCoord(e, t, r, n) {
      const [, i] = GetGroundZFor_3dCoord(e, t, r, n ?? false);
      return i;
    }
    getHashKey(e) {
      return n(GetHashKey(e));
    }
    areStringsEqual(e, t) {
      return e === t;
    }
    compareStrings(e, t, r, n) {
      return CompareStrings(e, t, r, n);
    }
    isStringNull(e) {
      return IsStringNull(e);
    }
    isStringNullOrEmpty(e) {
      return IsStringNullOrEmpty(e);
    }
    absi(e) {
      return Absi(e);
    }
    absf(e) {
      return Absf(e);
    }
    isPointObscuredByAMissionEntity(e, t, r, n, i, a, o) {
      return IsPointObscuredByAMissionEntity(e, t, r, n, i, a, o);
    }
    clearArea(e, t, r, n, i, a, o, s) {
      ClearAreaOfEverything(e, t, r, n, i ?? false, a ?? false, o ?? false, s ?? false);
    }
    clearAreaLeaveVehicleHealth(e, t, r, n, i, a, o, s) {
      ClearAreaLeaveVehicleHealth(e, t, r, n, i ?? false, a ?? false, o ?? false, s ?? false);
    }
    clearAreaOfVehicles(e, t, r, n, i, a, o, s, l) {
      ClearAreaOfVehicles(e, t, r, n, i ?? false, a ?? false, o ?? false, s ?? false, l ?? false);
    }
    clearAreaOfPeds(e, t, r, n, i) {
      ClearAreaOfPeds(e, t, r, n, !!i);
    }
    clearAreaOfObjects(e, t, r, n, i) {
      ClearAreaOfObjects(e, t, r, n, i);
    }
    clearAreaOfCops(e, t, r, n, i) {
      ClearAreaOfCops(e, t, r, n, !!i);
    }
    clearAreaOfProjectiles(e, t, r, n, i) {
      ClearAreaOfProjectiles(e, t, r, n, !!i);
    }
    setSaveMenuActive(e) {
      SetSaveMenuActive(e);
    }
    setCreditsActive(e) {
      SetCreditsActive(e);
    }
    haveCreditsReachedEnd() {
      return HaveCreditsReachedEnd();
    }
    terminateAllScriptsWithThisName(e) {
      TerminateAllScriptsWithThisName(e);
    }
    networkSetScriptIsSafeForNetworkGame() {
      NetworkSetScriptIsSafeForNetworkGame();
    }
    addHospitalRestart(e, t, r, n, i) {
      return AddHospitalRestart(e, t, r, n, i);
    }
    disableHospitalRestart(e, t) {
      DisableHospitalRestart(e, t);
    }
    addPoliceRestart(e, t, r, n, i) {
      return AddPoliceRestart(e, t, r, n, i);
    }
    disablePoliceRestart(e, t) {
      DisablePoliceRestart(e, t);
    }
    pauseDeathArrestRestart(e) {
      PauseDeathArrestRestart(e);
    }
    ignoreNextRestart(e) {
      IgnoreNextRestart(e);
    }
    setFadeOutAfterDeath(e) {
      SetFadeOutAfterDeath(e);
    }
    setFadeOutAfterArrest(e) {
      SetFadeOutAfterArrest(e);
    }
    setFadeInAfterDeathArrest(e) {
      SetFadeInAfterDeathArrest(e);
    }
    setFadeInAfterLoad(e) {
      SetFadeInAfterLoad(e);
    }
    disableAutomaticRespawn(e) {
      DisableAutomaticRespawn(e);
    }
    forceGameStatePlaying() {
      ForceGameStatePlaying();
    }
    setSaveHouse(e, t, r) {
      SetSaveHouse(e, t, r);
    }
    overrideSaveHouse(e, t, r, n, i, a, o, s) {
      const [l] = OverrideSaveHouse(e, t, r, n, i, a);
      return l;
    }
    doAutoSave() {
      DoAutoSave();
    }
    getIsAutoSaveOff() {
      return GetIsAutoSaveOff();
    }
    isAutoSaveInProgress() {
      return IsAutoSaveInProgress();
    }
    beginReplayStats(e, t) {
      BeginReplayStats(e, t);
    }
    addReplayStatValue(e) {
      AddReplayStatValue(e);
    }
    endReplayStats() {
      EndReplayStats();
    }
    getReplayStatMissionType() {
      return GetReplayStatMissionType();
    }
    getReplayStatCount() {
      return GetReplayStatCount();
    }
    getReplayStatAtIndex(e) {
      return GetReplayStatAtIndex(e);
    }
    clearReplayStats() {
      ClearReplayStats();
    }
    isMemoryCardInUse() {
      return IsMemoryCardInUse();
    }
    getModelDimensions(e) {
      const [t, r] = GetModelDimensions(e);
      const n = za(t);
      const i = za(r);
      return {
        minimum: n,
        maximum: i,
        min: n,
        max: i
      };
    }
    setFakeWantedLevel(e) {
      SetFakeWantedLevel(e);
    }
    getFakeWantedLevel() {
      return GetFakeWantedLevel();
    }
    usingMissionCreator(e) {
      UsingMissionCreator(e);
    }
    allowMissionCreatorWarp(e) {
      AllowMissionCreatorWarp(e);
    }
    setMinigameInProgress(e) {
      SetMinigameInProgress(e);
    }
    isMinigameInProgress() {
      return IsMinigameInProgress();
    }
    isThisAMinigameScript() {
      return IsThisAMinigameScript();
    }
    isSniperInverted() {
      return IsSniperInverted();
    }
    shouldUseMetricMeasurements() {
      return ShouldUseMetricMeasurements();
    }
    getProfileSetting(e) {
      return GetProfileSetting(e);
    }
    isSniperBulletInArea(e, t, r, n, i, a) {
      return IsSniperBulletInArea(e, t, r, n, i, a);
    }
    isProjectileInArea(e, t, r, n, i, a, o) {
      return IsProjectileInArea(e, t, r, n, i, a, o ?? false);
    }
    isProjectileTypeInArea(e, t, r, n, i, a, o, s) {
      return IsProjectileTypeInArea(e, t, r, n, i, a, o, s ?? false);
    }
    isProjectileTypeWithinDistance(e, t, r, n, i, a) {
      return IsProjectileTypeWithinDistance(e, t, r, n, i, a ?? false);
    }
    isBulletInAngledArea(e, t, r, n, i, a, o, s) {
      return IsBulletInAngledArea(e, t, r, n, i, a, o, s ?? false);
    }
    isBulletInArea(e, t, r, n, i) {
      return IsBulletInArea(e, t, r, n, i ?? false);
    }
    isBulletInBox(e, t, r, n, i, a, o) {
      return IsBulletInBox(e, t, r, n, i, a, o ?? false);
    }
    hasBulletImpactedInArea(e, t, r, n, i, a) {
      return HasBulletImpactedInArea(e, t, r, n, i ?? false, a ?? false);
    }
    hasBulletImpactedInBox(e, t, r, n, i, a, o, s) {
      return HasBulletImpactedInBox(e, t, r, n, i, a, o ?? false, s ?? false);
    }
    isOrbisVersion() {
      return IsOrbisVersion();
    }
    isDurangoVersion() {
      return IsDurangoVersion();
    }
    isXbox360Version() {
      return IsXbox360Version();
    }
    isPs3Version() {
      return IsPs3Version();
    }
    isPcVersion() {
      return IsPcVersion();
    }
    isAussieVersion() {
      return IsAussieVersion();
    }
    getBitsInRange(e, t, r) {
      return GetBitsInRange(e, t, r);
    }
    deleteStuntJump(e) {
      DeleteStuntJump(e);
    }
    enableStuntJumpSet(e) {
      EnableStuntJumpSet(e);
    }
    disableStuntJumpSet(e) {
      DisableStuntJumpSet(e);
    }
    setStuntJumpsCanTrigger(e) {
      SetStuntJumpsCanTrigger(e);
    }
    isStuntJumpInProgress() {
      return IsStuntJumpInProgress();
    }
    isStuntJumpMessageShowing() {
      return IsStuntJumpMessageShowing();
    }
    getNumSuccessfulStuntJumps() {
      return GetNumSuccessfulStuntJumps();
    }
    getTotalSuccessfulStuntJumps() {
      return GetTotalSuccessfulStuntJumps();
    }
    cancelStuntJump() {
      CancelStuntJump();
    }
    setTimeScale(e) {
      SetTimeScale(e);
    }
    setMissionFlag(e) {
      SetMissionFlag(e);
    }
    getMissionFlag() {
      return GetMissionFlag();
    }
    setGamePaused(e) {
      SetGamePaused(e);
    }
    setThisScriptCanBePaused(e) {
      SetThisScriptCanBePaused(e);
    }
    setThisScriptCanRemoveBlipsCreatedByAnyScript(e) {
      SetThisScriptCanRemoveBlipsCreatedByAnyScript(e);
    }
    setInstancePriorityMode(e) {
      SetInstancePriorityMode(e);
    }
    setInstancePriorityHint(e) {
      SetInstancePriorityHint(e);
    }
    isFrontendFading() {
      return IsFrontendFading();
    }
    populateNow() {
      PopulateNow();
    }
    getIndexOfCurrentLevel() {
      return GetIndexOfCurrentLevel();
    }
    setGravityLevel(e) {
      SetGravityLevel(e);
    }
    enableDispatchService(e, t) {
      EnableDispatchService(e, t);
    }
    blockDispatchServiceResourceCreation(e, t) {
      BlockDispatchServiceResourceCreation(e, t);
    }
    deleteIncident(e) {
      DeleteIncident(e);
    }
    isIncidentValid(e) {
      return IsIncidentValid(e);
    }
    setIncidentRequestedUnits(e, t, r) {
      SetIncidentRequestedUnits(e, t, r);
    }
    resetDispatchSpawnLocation() {
      ResetDispatchSpawnLocation();
    }
    setDispatchSpawnLocation(e, t, r) {
      SetDispatchSpawnLocation(e, t, r);
    }
    resetDispatchIdealSpawnDistance() {
      ResetDispatchIdealSpawnDistance();
    }
    setDispatchIdealSpawnDistance(e) {
      SetDispatchIdealSpawnDistance(e);
    }
    resetDispatchTimeBetweenSpawnAttempts(e) {
      ResetDispatchTimeBetweenSpawnAttempts(e);
    }
    setDispatchTimeBetweenSpawnAttempts(e, t) {
      SetDispatchTimeBetweenSpawnAttempts(e, t);
    }
    setDispatchTimeBetweenSpawnAttemptsMultiplier(e, t) {
      SetDispatchTimeBetweenSpawnAttemptsMultiplier(e, t);
    }
    removeDispatchSpawnBlockingArea(e) {
      RemoveDispatchSpawnBlockingArea(e);
    }
    resetDispatchSpawnBlockingAreas() {
      ResetDispatchSpawnBlockingAreas();
    }
    doesPopMultiplierAreaExist(e) {
      return DoesPopMultiplierAreaExist(e);
    }
    removePopMultiplierArea(e, t) {
      RemovePopMultiplierArea(e, t ?? false);
    }
    doesPopMultiplierSphereExist(e) {
      return DoesPopMultiplierSphereExist(e);
    }
    removePopMultiplierSphere(e, t) {
      RemovePopMultiplierSphere(e, t ?? false);
    }
    enableTennisMode(e, t, r) {
      EnableTennisMode(e, t, r ?? false);
    }
    isTennisMode(e) {
      return IsTennisMode(e);
    }
    playTennisSwingAnim(e, t, r, n, i, a) {
      PlayTennisSwingAnim(e, t, r, n, i, a ?? false);
    }
    getTennisSwingAnimComplete(e) {
      return GetTennisSwingAnimComplete(e);
    }
    playTennisDiveAnim(e, t, r, n, i, a) {
      PlayTennisDiveAnim(e, t, r, n, i, a ?? false);
    }
    setRiotModeEnabled(e) {
      SetRiotModeEnabled(e);
    }
    updateOnscreenKeyboard() {
      return UpdateOnscreenKeyboard();
    }
    getOnscreenKeyboardResult() {
      return GetOnscreenKeyboardResult();
    }
    cancelOnscreenKeyboard() {
      CancelOnscreenKeyboard();
    }
    nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(e) {
      NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(e);
    }
    setExplosiveAmmoThisFrame(e) {
      SetExplosiveAmmoThisFrame(e);
    }
    setFireAmmoThisFrame(e) {
      SetFireAmmoThisFrame(e);
    }
    setExplosiveMeleeThisFrame(e) {
      SetExplosiveMeleeThisFrame(e);
    }
    setSuperJumpThisFrame(e) {
      SetSuperJumpThisFrame(e);
    }
    areProfileSettingsValid() {
      return AreProfileSettingsValid();
    }
    scriptRaceInit(e, t, r, n) {
      ScriptRaceInit(e, t, r, n);
    }
    scriptRaceShutdown() {
      ScriptRaceShutdown();
    }
    restartGame() {
      RestartGame();
    }
    hasAsyncInstallFinished() {
      return HasAsyncInstallFinished();
    }
    cleanupAsyncInstall() {
      CleanupAsyncInstall();
    }
    setPlayerIsInAnimalForm(e) {
      SetPlayerIsInAnimalForm(e);
    }
    getIsPlayerInAnimalForm() {
      return GetIsPlayerInAnimalForm();
    }
    shootSingleBulletBetweenCoords(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      ShootSingleBulletBetweenCoords(e, t, r, n, i, a, o, s ?? true, l, d, c ?? true, u ?? false, h ?? 1);
    }
    shootSingleBulletBetweenCoordsIgnoreEntity(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      ShootSingleBulletBetweenCoordsIgnoreEntity(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    shootSingleBulletBetweenCoordsIgnoreEntityNew(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C) {
      ShootSingleBulletBetweenCoordsIgnoreEntityNew(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C);
    }
    getGlobalCharBuffer() {
      return GetGlobalCharBuffer();
    }
    getBaseElementMetadata(e, t) {
      const [r, n, i] = GetBaseElementMetadata(e, t);
      return {
        result: r,
        p0: n,
        p1: i
      };
    }
    clearWeatherTypeOvertimePersist(e) {
      ClearWeatherTypeOvertimePersist(e);
    }
    setWeatherTypeTransition(e, t, r) {
      SetWeatherTypeTransition(e, t, r);
    }
    clearCloudHat() {
      ClearCloudHat();
    }
    setCloudHatOpacity(e) {
      SetCloudsAlpha(e);
    }
    getCloudHatOpacity() {
      return GetCloudsAlpha();
    }
    getBenchmarkTime() {
      return GetBenchmarkTime();
    }
    getRandomIntInRange2(e, t) {
      return GetRandomIntInRange(e, t);
    }
    getAngleBetween2DVectors(e, t, r, n) {
      return GetAngleBetween_2dVectors(e, t, r, n);
    }
    getHeadingFromVector2d(e, t) {
      return GetHeadingFromVector_2d(e, t);
    }
    setBit(e) {
      return SetBit(e);
    }
    clearBit(e) {
      return ClearBit(e);
    }
    isBitSet(e, t) {
      return IsBitSet(e, t);
    }
    setBitsInRange(e, t, r) {
      return SetBitsInRange(e, t, r);
    }
    stringToInt(e) {
      const [, t] = StringToInt(e);
      return t;
    }
    getGroundZFor3dCoord(e, t, r, n, i) {
      const [, a] = GetGroundZFor_3dCoord(e, t, r, n ?? false);
      return a;
    }
    getGroundZAndNormalFor3DCoord(e, t, r) {
      const [n, i, a] = GetGroundZAndNormalFor_3dCoord(e, t, r);
      return {
        result: n,
        groundZ: i,
        normal: za(a)
      };
    }
    getGroundZFor3dCoord2(e, t, r, n) {
      const [, i] = GetGroundZExcludingObjectsFor_3dCoord(e, t, r, n);
      return i;
    }
    getGroundZFor3DCoord2(e, t, r, n) {
      const [, i] = GetGroundZExcludingObjectsFor_3dCoord(e, t, r, n);
      return i;
    }
    slerpNearQuaternion(e, t, r, n, i, a, o, s, l) {
      const d = SlerpNearQuaternion(e, t, r, n, i, a, o, s, l);
      return {
        outX: d?.[0],
        outY: d?.[1],
        outZ: d?.[2],
        outW: d?.[3]
      };
    }
    isAreaOccupied(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return IsAreaOccupied(e, t, r, n, i, a, o ?? false, s ?? false, l ?? false, d ?? false, c ?? false, u, h ?? false);
    }
    isPositionOccupied(e, t, r, n, i, a, o, s, l, d, c) {
      return IsPositionOccupied(e, t, r, n, i ?? false, a ?? true, o ?? true, s ?? false, l ?? false, d ?? 0, c ?? false);
    }
    clearAngledAreaOfVehicles(e, t, r, n, i, a, o, s, l, d, c, u) {
      ClearAngledAreaOfVehicles(e, t, r, n, i, a, o, s ?? false, l ?? false, d ?? false, c ?? false, u ?? false);
    }
    setRestartCustomPosition(e, t, r, n) {
      SetRestartCustomPosition(e, t, r, n);
    }
    clearRestartCustomPosition() {
      ClearRestartCustomPosition();
    }
    registerSaveHouse(e, t, r, n, i, a) {
      const o = RegisterSaveHouse(e, t, r, n, i, a);
      return {
        p4: o?.[1],
        result: o?.[0]
      };
    }
    hasButtonCombinationJustBeenEntered(e, t) {
      return HasButtonCombinationJustBeenEntered(e, t);
    }
    hasCheatStringJustBeenEntered(e) {
      return HasCheatStringJustBeenEntered(e);
    }
    addStuntJump(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C) {
      return AddStuntJump(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C);
    }
    addStuntJumpAngled(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P) {
      return AddStuntJumpAngled(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P);
    }
    getGravityLevel() {
      return GetGravityLevel();
    }
    startSaveData(e, t) {
      return StartSaveData(e, t);
    }
    stopSaveData() {
      StopSaveData();
    }
    getSizeOfSaveData(e) {
      return GetSizeOfSaveData(e);
    }
    registerIntToSave(e) {
      return RegisterIntToSave(e);
    }
    registerInt64ToSave(e) {
      return RegisterInt64ToSave(e);
    }
    registerEnumToSave(e) {
      return RegisterEnumToSave(e);
    }
    registerFloatToSave(e) {
      return RegisterFloatToSave(e);
    }
    registerBoolToSave(e) {
      return RegisterBoolToSave(e);
    }
    registerTextLabelToSave(e) {
      return RegisterTextLabelToSave(e);
    }
    registerTextLabelToSave2(e) {
      return RegisterTextLabelToSave_2(e);
    }
    startSaveStructWithSize(e, t) {
      return StartSaveStructWithSize(e, t);
    }
    stopSaveStruct() {
      StopSaveStruct();
    }
    startSaveArrayWithSize(e, t) {
      return StartSaveArrayWithSize(e, t);
    }
    stopSaveArray() {
      StopSaveArray();
    }
    copyMemory(e) {
      return {
        dst: CopyMemory(0, e),
        src: 0
      };
    }
    getNumDispatchedUnitsForPlayer(e) {
      return GetNumDispatchedUnitsForPlayer(e);
    }
    createIncident(e, t, r, n, i, a, o, s) {
      const [, l] = CreateIncident(e, t, r, n, i, a, o);
      return l;
    }
    createIncidentWithEntity(e, t, r, n, i, a) {
      const [, o] = CreateIncidentWithEntity(e, t, r, n, i);
      return o;
    }
    setIncidentUnk(e, t) {
      SetIncidentUnk(e, t);
    }
    findSpawnPointInDirection(e, t, r, n, i, a, o) {
      const [s, l] = FindSpawnPointInDirection(e, t, r, n, i, a, o);
      return za(l);
    }
    addDispatchSpawnBlockingAngledArea(e, t, r, n, i, a, o) {
      return AddDispatchSpawnBlockingAngledArea(e, t, r, n, i, a, o);
    }
    addDispatchSpawnBlockingArea(e, t, r, n) {
      return AddDispatchSpawnBlockingArea(e, t, r, n);
    }
    addTacticalAnalysisPoint(e, t, r) {
      AddTacticalAnalysisPoint(e, t, r);
    }
    clearTacticalAnalysisPoints() {
      ClearTacticalAnalysisPoints();
    }
    addPopMultiplierArea(e, t, r, n, i, a, o, s, l) {
      return AddPopMultiplierArea(e, t, r, n, i, a, o, s, l ?? false);
    }
    isPopMultiplierAreaUnk(e) {
      return IsPopMultiplierAreaUnk(e);
    }
    addPopMultiplierSphere(e, t, r, n, i, a, o, s) {
      return AddPopMultiplierSphere(e, t, r, n, i, a, o ?? false, s ?? false);
    }
    displayOnscreenKeyboardWithLongerInitialString(e, t, r, n, i, a, o, s, l, d, c) {
      return DisplayOnscreenKeyboardWithLongerInitialString(e, t, r, n, i, a, o, s, l, d, c);
    }
    displayOnscreenKeyboard(e, t, r, n, i, a, o, s) {
      DisplayOnscreenKeyboard(e, t, r, n, i, a, o, s);
    }
    removeStealthKill(e, t) {
      RemoveStealthKill(e, t);
    }
    setBeastModeActive(e) {
      SetBeastModeActive(e);
    }
    setForcePlayerToJump(e) {
      SetForcePlayerToJump(e);
    }
    isProjectileTypeInAngledArea(e, t, r, n, i, a, o, s, l, d) {
      return IsProjectileTypeInAngledArea(e, t, r, n, i, a, o, s, l, d ?? false);
    }
    getCoordsOfProjectileTypeInArea(e, t, r, n, i, a, o, s) {
      return za(GetCoordsOfProjectileTypeInArea(e, t, r, n, i, a, o, s ?? false));
    }
    getCoordsOfProjectileTypeWithinDistance(e, t, r, n) {
      const i = GetCoordsOfProjectileTypeWithinDistance(e, t, r, n ?? false);
      return {
        entity: i?.[0]
      };
    }
    getProjectileNearPed(e, t, r, n, i, a) {
      return GetProjectileNearPed(e, t, r, n, i, a ?? false);
    }
    scriptRaceGetPlayerSplitTime(e) {
      const t = ScriptRaceGetPlayerSplitTime(e);
      return {
        p1: t?.[1],
        p2: t?.[2],
        result: t?.[0]
      };
    }
    startBenchmarkRecording() {
      StartBenchmarkRecording();
    }
    stopBenchmarkRecording() {
      StopBenchmarkRecording();
    }
    resetBenchmarkRecording() {
      ResetBenchmarkRecording();
    }
    saveBenchmarkRecording() {
      SaveBenchmarkRecording();
    }
    uiIsSingleplayerPauseMenuActive() {
      return UiIsSingleplayerPauseMenuActive();
    }
    landingMenuIsActive() {
      return LandingMenuIsActive();
    }
    isCommandLineBenchmarkValueSet() {
      return IsCommandLineBenchmarkValueSet();
    }
    getBenchmarkIterationsFromCommandLine() {
      return GetBenchmarkIterationsFromCommandLine();
    }
    getBenchmarkPassFromCommandLine() {
      return GetBenchmarkPassFromCommandLine();
    }
    forceSocialClubUpdate() {
      ForceSocialClubUpdate();
    }
    isInPowerSavingMode() {
      return IsInPowerSavingMode();
    }
    getPowerSavingModeDuration() {
      return GetPowerSavingModeDuration();
    }
    setPlayerRockstarEditorDisabled(e) {
      SetPlayerRockstarEditorDisabled(e);
    }
    startPerformanceTimer() {
      let e = GetGameTimer();
      return {
        getElapsedMs: () => GetGameTimer() - e,
        getElapsedSec: () => (GetGameTimer() - e) / 1000,
        getElapsedUs: () => (GetGameTimer() - e) * 1000,
        reset: () => {
          e = GetGameTimer();
        }
      };
    }
    getFreeStackSlotsCount(e) {
      return GetNumberOfFreeStacksOfThisSize(e);
    }
    setWeatherTypeOverTime(e, t) {
      SetWeatherTypeOvertimePersist(e, t);
    }
    setRainFxIntensity(e) {
      SetRainLevel(e);
    }
    setCloudHatTransition(e, t) {
      LoadCloudHat(e, t);
    }
    clearAreaOfEverything(e, t, r, n, i, a, o, s) {
      ClearAreaOfEverything(e, t, r, n, i ?? false, a ?? false, o ?? false, s ?? false);
    }
    enableMpDlcMaps(e) {
      EnableMpDlcMaps(Number(e));
    }
    setUnkMapFlag(e) {
      SetUnkMapFlag(e);
    }
    startSaveStruct(e, t) {
      return StartSaveStructWithSize(e, t);
    }
    startSaveArray(e, t) {
      return StartSaveArrayWithSize(e, t);
    }
    _0x4DCDF92BF64236CD(...e) {
      return Citizen.invokeNative("0x4DCDF92BF64236CD", ...e);
    }
    _0x31125FD509D9043F(...e) {
      return Citizen.invokeNative("0x31125FD509D9043F", ...e);
    }
    _0xEBD3205A207939ED(...e) {
      return Citizen.invokeNative("0xEBD3205A207939ED", ...e);
    }
    _0x97E7E2C04245115B(...e) {
      return Citizen.invokeNative("0x97E7E2C04245115B", ...e);
    }
    _0x916CA67D26FD1E37(...e) {
      return Citizen.invokeNative("0x916CA67D26FD1E37", ...e);
    }
    _0xEB078CA2B5E82ADD(...e) {
      return Citizen.invokeNative("0xEB078CA2B5E82ADD", ...e);
    }
    _0x703CC7F60CBB2B57(...e) {
      return Citizen.invokeNative("0x703CC7F60CBB2B57", ...e);
    }
    _0x8951EB9C6906D3C8() {
      return Citizen.invokeNative("0x8951EB9C6906D3C8");
    }
    _0xBA4B8D83BDC75551(...e) {
      return Citizen.invokeNative("0xBA4B8D83BDC75551", ...e);
    }
    _0x65D2EBB47E1CEC21(...e) {
      return Citizen.invokeNative("0x65D2EBB47E1CEC21", ...e);
    }
    _0x6F2135B6129620C1(...e) {
      return Citizen.invokeNative("0x6F2135B6129620C1", ...e);
    }
    _0x8D74E26F54B4E5C3(...e) {
      return Citizen.invokeNative("0x8D74E26F54B4E5C3", ...e);
    }
    _0x0CF97F497FE7D048(...e) {
      return Citizen.invokeNative("0x0CF97F497FE7D048", ...e);
    }
    _0x1178E104409FE58C(...e) {
      return Citizen.invokeNative("0x1178E104409FE58C", ...e);
    }
    _0x02DEAAC8F8EA7FE7(...e) {
      return Citizen.invokeNative("0x02DEAAC8F8EA7FE7", ...e);
    }
    _0x7F8F6405F4777AF6(...e) {
      return Citizen.invokeNative("0x7F8F6405F4777AF6", ...e);
    }
    _0x21C235BC64831E5A(...e) {
      return za(Citizen.invokeNative("0x21C235BC64831E5A", ...e));
    }
    _0xF56DFB7B61BE7276(...e) {
      return Citizen.invokeNative("0xF56DFB7B61BE7276", ...e);
    }
    _0xA0AD167E4B39D9A2(...e) {
      return Citizen.invokeNative("0xA0AD167E4B39D9A2", ...e);
    }
    _0x39455BF4F4F55186(...e) {
      return Citizen.invokeNative("0x39455BF4F4F55186", ...e);
    }
    _0x7EC6F9A478A6A512() {
      return Citizen.invokeNative("0x7EC6F9A478A6A512");
    }
    _0x397BAA01068BAA96() {
      return Citizen.invokeNative("0x397BAA01068BAA96");
    }
    _0xB51B9AB9EF81868C(...e) {
      return Citizen.invokeNative("0xB51B9AB9EF81868C", ...e);
    }
    _0xA4A0065E39C9F25C() {
      const e = Citizen.invokeNative("0xA4A0065E39C9F25C");
      return {
        p0: za(e?.[0]) ?? e?.[0],
        p1: e?.[1],
        fadeInAfterLoad: e?.[2],
        p3: e?.[3],
        result: e?.[4]
      };
    }
    _0x2107A3773771186D() {
      return Citizen.invokeNative("0x2107A3773771186D");
    }
    _0x06462A961E94B67C() {
      return Citizen.invokeNative("0x06462A961E94B67C");
    }
    _0xD642319C54AADEB6() {
      return Citizen.invokeNative("0xD642319C54AADEB6");
    }
    _0x5B1F2E327B6B6FE1() {
      return Citizen.invokeNative("0x5B1F2E327B6B6FE1");
    }
    _0x72DE52178C291CB5() {
      return Citizen.invokeNative("0x72DE52178C291CB5");
    }
    _0x44A0BDC559B35F6E() {
      return Citizen.invokeNative("0x44A0BDC559B35F6E");
    }
    _0xEB2104E905C6F2E9() {
      return Citizen.invokeNative("0xEB2104E905C6F2E9");
    }
    _0x2B5E102E4A42F2BF() {
      return Citizen.invokeNative("0x2B5E102E4A42F2BF");
    }
    _0xFB80AB299D2EE1BD(...e) {
      return Citizen.invokeNative("0xFB80AB299D2EE1BD", ...e);
    }
    _0xFA3FFB0EEBC288A3(...e) {
      return Citizen.invokeNative("0xFA3FFB0EEBC288A3", ...e);
    }
    _0x48F069265A0E4BEC(...e) {
      return Citizen.invokeNative("0x48F069265A0E4BEC", ...e);
    }
    _0x8269816F6CFD40F8(...e) {
      return Citizen.invokeNative("0x8269816F6CFD40F8", ...e);
    }
    _0xFAA457EF263E8763(...e) {
      return Citizen.invokeNative("0xFAA457EF263E8763", ...e);
    }
    _0x19BFED045C647C49(...e) {
      return Citizen.invokeNative("0x19BFED045C647C49", ...e);
    }
    _0xE95B0C7D5BA3B96B(...e) {
      return Citizen.invokeNative("0xE95B0C7D5BA3B96B", ...e);
    }
    _0x54F157E0336A3822(...e) {
      return Citizen.invokeNative("0x54F157E0336A3822", ...e);
    }
    _0xD9F692D349249528() {
      return Citizen.invokeNative("0xD9F692D349249528");
    }
    _0xE532EC1A63231B4F(...e) {
      return Citizen.invokeNative("0xE532EC1A63231B4F", ...e);
    }
    _0x1EAE0A6E978894A2(...e) {
      return Citizen.invokeNative("0x1EAE0A6E978894A2", ...e);
    }
    _0x6FDDF453C0C756EC() {
      return Citizen.invokeNative("0x6FDDF453C0C756EC");
    }
    _0xFB00CA71DA386228() {
      return Citizen.invokeNative("0xFB00CA71DA386228");
    }
    _0xE3D969D2785FFB5E() {
      return Citizen.invokeNative("0xE3D969D2785FFB5E");
    }
    _0x1BB299305C3E8C13(...e) {
      return Citizen.invokeNative("0x1BB299305C3E8C13", ...e);
    }
    _0x23227DF0B2115469() {
      return Citizen.invokeNative("0x23227DF0B2115469");
    }
    _0xD10282B6E3751BA0() {
      return Citizen.invokeNative("0xD10282B6E3751BA0");
    }
    _0x693478ACBD7F18E7() {
      return Citizen.invokeNative("0x693478ACBD7F18E7");
    }
  }
  class ao {
    constructor() {
      this.unk = ja();
      this.unequipEmptyWeapons = true;
    }
    giveToPed(e, t, r, n, i) {
      GiveWeaponToPed(e, t, r, n ?? false, i ?? true);
    }
    removeFromPed(e, t) {
      RemoveWeaponFromPed(e, t);
    }
    getAmmoInClip(e, t) {
      const [, r] = GetAmmoInClip(e, t);
      return r;
    }
    setAmmoInClip(e, t, r) {
      return SetAmmoInClip(e, t, r);
    }
    createObject(e, t, r, n, i, a, o) {
      return CreateWeaponObject(e, t, r, n, i, a ?? true, o ?? 1, 0);
    }
    enableLaserSightRendering(e) {
      EnableLaserSightRendering(e);
    }
    getWeaponComponentTypeModel(e) {
      return GetWeaponComponentTypeModel(e);
    }
    getWeapontypeModel(e) {
      return GetWeapontypeModel(e);
    }
    getWeapontypeSlot(e) {
      return GetWeapontypeSlot(e);
    }
    getWeapontypeGroup(e) {
      return GetWeapontypeGroup(e);
    }
    isWeaponValid(e) {
      return IsWeaponValid(e);
    }
    requestWeaponAsset(e, t, r) {
      RequestWeaponAsset(e, t, r);
    }
    hasWeaponAssetLoaded(e) {
      return HasWeaponAssetLoaded(e);
    }
    removeWeaponAsset(e) {
      RemoveWeaponAsset(e);
    }
    giveWeaponComponentToWeaponObject(e, t) {
      GiveWeaponComponentToWeaponObject(e, t);
    }
    removeWeaponComponentFromWeaponObject(e, t) {
      RemoveWeaponComponentFromWeaponObject(e, t);
    }
    hasWeaponGotWeaponComponent(e, t) {
      return HasWeaponGotWeaponComponent(e, t);
    }
    giveWeaponObjectToPed(e, t) {
      GiveWeaponObjectToPed(e, t);
    }
    doesWeaponTakeWeaponComponent(e, t) {
      return DoesWeaponTakeWeaponComponent(e, t);
    }
    setWeaponObjectTintIndex(e, t) {
      SetWeaponObjectTintIndex(e, t);
    }
    getWeaponObjectTintIndex(e) {
      return GetWeaponObjectTintIndex(e);
    }
    getWeaponTintCount(e) {
      return GetWeaponTintCount(e);
    }
    getWeaponHudStats(e) {
      const t = GetWeaponHudStats(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    getWeaponComponentHudStats(e) {
      const t = GetWeaponComponentHudStats(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    getWeaponClipSize(e) {
      return GetWeaponClipSize(e);
    }
    requestWeaponHighDetailModel(e) {
      RequestWeaponHighDetailModel(e);
    }
    getWeaponDamageType(e) {
      return GetWeaponDamageType(e);
    }
    canUseWeaponOnParachute(e) {
      return CanUseWeaponOnParachute(e);
    }
    getComponentTypeModel(e) {
      return GetWeaponComponentTypeModel(e);
    }
    getTypeModel(e) {
      return GetWeapontypeModel(e);
    }
    getTypeSlot(e) {
      return GetWeapontypeSlot(e);
    }
    getTypeGroup(e) {
      return GetWeapontypeGroup(e);
    }
    setCurrentPed(e, t, r) {
      SetCurrentPedWeapon(e, t, r);
    }
    getCurrentPed(e, t) {
      const [, r] = GetCurrentPedWeapon(e, t);
      return r;
    }
    getBestPed(e, t) {
      return GetBestPedWeapon(e, t);
    }
    setCurrentPedVehicle(e, t) {
      return SetCurrentPedVehicleWeapon(e, t);
    }
    getCurrentPedVehicle(e) {
      const [, t] = GetCurrentPedVehicleWeapon(e);
      return t;
    }
    isPedArmed(e, t) {
      return IsPedArmed(e, t);
    }
    isValid(e) {
      return IsWeaponValid(e);
    }
    hasPedGot(e, t, r) {
      return HasPedGotWeapon(e, t, r);
    }
    getAmmoInPed(e, t) {
      return GetAmmoInPedWeapon(e, t);
    }
    addAmmoToPed(e, t, r) {
      AddAmmoToPed(e, t, r);
    }
    setPedAmmo(e, t, r, n) {
      SetPedAmmo(e, t, r, n);
    }
    setPedInfiniteAmmo(e, t, r) {
      SetPedInfiniteAmmo(e, t, r);
    }
    setPedInfiniteAmmoClip(e, t) {
      SetPedInfiniteAmmoClip(e, t);
    }
    setPedDropsWeaponsWhenDead(e, t) {
      SetPedDropsWeaponsWhenDead(e, t);
    }
    hasPedBeenDamagedBy(e, t, r) {
      return HasPedBeenDamagedByWeapon(e, t, r);
    }
    hasEntityBeenDamagedBy(e, t, r) {
      return HasEntityBeenDamagedByWeapon(e, t, r);
    }
    setPedDrops(e) {
      SetPedDropsWeapon(e);
    }
    setPedDropsInventory(e, t, r, n, i, a) {
      SetPedDropsInventoryWeapon(e, t, r, n, i, a);
    }
    getMaxAmmoInClip(e, t, r) {
      return GetMaxAmmoInClip(e, t, r);
    }
    getMaxAmmo(e, t) {
      const [, r] = GetMaxAmmo(e, t);
      return r;
    }
    getMaxAmmoByType(e, t) {
      const [, r] = GetMaxAmmoByType(e, t);
      return r;
    }
    setPedAmmoByType(e, t, r) {
      SetPedAmmoByType(e, t, r);
    }
    getPedAmmoByType(e, t) {
      return GetPedAmmoByType(e, t);
    }
    setPedAmmoToDrop(e, t) {
      SetPedAmmoToDrop(e, t);
    }
    setPickupAmmoAmountScaler(e) {
      SetPickupAmmoAmountScaler(e);
    }
    getPedAmmoTypeFrom(e, t) {
      return GetPedAmmoTypeFromWeapon(e, t);
    }
    setPedGadget(e, t, r) {
      SetPedGadget(e, t, r);
    }
    getIsPedGadgetEquipped(e, t) {
      return GetIsPedGadgetEquipped(e, t);
    }
    getSelectedPed(e) {
      return GetSelectedPedWeapon(e);
    }
    explodeProjectiles(e, t, r) {
      ExplodeProjectiles(e, t, r);
    }
    removeAllProjectilesOfType(e, t) {
      RemoveAllProjectilesOfType(e, t);
    }
    getLockonDistanceOfCurrentPed(e) {
      return GetLockonDistanceOfCurrentPedWeapon(e);
    }
    getMaxRangeOfCurrentPed(e) {
      return GetMaxRangeOfCurrentPedWeapon(e);
    }
    hasVehicleGotProjectileAttached(e, t, r, n) {
      return HasVehicleGotProjectileAttached(e, t, r, n);
    }
    giveComponentToPed(e, t, r) {
      GiveWeaponComponentToPed(e, t, r);
    }
    removeComponentFromPed(e, t, r) {
      RemoveWeaponComponentFromPed(e, t, r);
    }
    refillAmmoInstantly(e) {
      return RefillAmmoInstantly(e);
    }
    makePedReload(e) {
      return MakePedReload(e);
    }
    requestAsset(e, t, r) {
      RequestWeaponAsset(e, t, r);
    }
    hasAssetLoaded(e) {
      return HasWeaponAssetLoaded(e);
    }
    removeAsset(e) {
      RemoveWeaponAsset(e);
    }
    giveComponentToWeaponObject(e, t) {
      GiveWeaponComponentToWeaponObject(e, t);
    }
    removeComponentFromWeaponObject(e, t) {
      RemoveWeaponComponentFromWeaponObject(e, t);
    }
    giveObjectToPed(e, t) {
      GiveWeaponObjectToPed(e, t);
    }
    doesTakeWeaponComponent(e, t) {
      return DoesWeaponTakeWeaponComponent(e, t);
    }
    getObjectFromPed(e, t) {
      return GetWeaponObjectFromPed(e, t);
    }
    giveLoadoutToPed(e, t) {
      GiveLoadoutToPed(e, t);
    }
    setObjectTintIndex(e, t) {
      SetWeaponObjectTintIndex(e, t);
    }
    getObjectTintIndex(e) {
      return GetWeaponObjectTintIndex(e);
    }
    getTintCount(e) {
      return GetWeaponTintCount(e);
    }
    getHudStats(e) {
      const t = GetWeaponHudStats(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    getComponentHudStats(e) {
      const t = GetWeaponComponentHudStats(e);
      if (Array.isArray(t)) {
        return t[1];
      } else {
        return t;
      }
    }
    getDamage(e, t) {
      return GetWeaponDamage(e, t);
    }
    getClipSize(e) {
      return GetWeaponClipSize(e);
    }
    getTimeBetweenShots(e) {
      return GetWeaponTimeBetweenShots(e);
    }
    setPedChanceOfFiringBlanks(e, t, r) {
      SetPedChanceOfFiringBlanks(e, t, r);
    }
    setPedShootOrdnance(e, t) {
      return SetPedShootOrdnanceWeapon(e, t);
    }
    requestHighDetailModel(e) {
      RequestWeaponHighDetailModel(e);
    }
    isFlashLightOn(e) {
      return IsFlashLightOn(e);
    }
    setFlashLightFadeDistance(e) {
      return SetFlashLightFadeDistance(e);
    }
    setAnimationOverride(e, t) {
      SetWeaponAnimationOverride(e, t);
    }
    getDamageType(e) {
      return GetWeaponDamageType(e);
    }
    createWeaponObject(e, t, r, n, i, a, o, s, l, d) {
      return CreateWeaponObject(e, t, r, n, i, a ?? true, o ?? 1, s ?? 0, l ?? 0, d ?? 0);
    }
    getComponentVariantExtraComponentCount(e) {
      return GetWeaponComponentVariantExtraComponentCount(e);
    }
    getComponentVariantExtraComponentModel(e, t) {
      return GetWeaponComponentVariantExtraComponentModel(e, t);
    }
    getCurrentPedEntityIndex(e, t) {
      return GetCurrentPedWeaponEntityIndex(e, t);
    }
    isPedReadyToShoot(e) {
      return IsPedWeaponReadyToShoot(e);
    }
    getPedTypeInSlot(e, t) {
      return GetPedWeapontypeInSlot(e, t);
    }
    giveDelayedToPed(e, t, r, n) {
      GiveDelayedWeaponToPed(e, t, r, n);
    }
    removeAllPedS(e, t) {
      RemoveAllPedWeapons(e, t ?? true);
    }
    hidePedForScriptedCutscene(e, t) {
      HidePedWeaponForScriptedCutscene(e, t);
    }
    setPedCurrentVisible(e, t, r, n, i) {
      SetPedCurrentWeaponVisible(e, t, r, n, i);
    }
    clearPedLastDamage(e) {
      ClearPedLastWeaponDamage(e);
    }
    clearEntityLastDamage(e) {
      ClearEntityLastWeaponDamage(e);
    }
    addAmmoToPedByType(e, t, r) {
      AddAmmoToPedByType(e, t, r);
    }
    getPedAmmoTypeFrom2(e, t) {
      return GetPedAmmoTypeFromWeapon_2(e, t);
    }
    getPedLastImpactCoord(e) {
      const t = GetPedLastWeaponImpactCoord(e);
      return za(Array.isArray(t) && Array.isArray(t[1]) ? t[1] : t);
    }
    hasPedGotComponent(e, t, r) {
      return HasPedGotWeaponComponent(e, t, r);
    }
    isPedComponentActive(e, t, r) {
      return IsPedWeaponComponentActive(e, t, r);
    }
    hasGotWeaponComponent(e, t) {
      return HasWeaponGotWeaponComponent(e, t);
    }
    setPedTintIndex(e, t, r) {
      SetPedWeaponTintIndex(e, t, r);
    }
    getPedTintIndex(e, t) {
      return GetPedWeaponTintIndex(e, t);
    }
    setPedLiveryColor(e, t, r, n) {
      SetPedWeaponLiveryColor(e, t, r, n);
    }
    getPedLiveryColor(e, t, r) {
      return GetPedWeaponLiveryColor(e, t, r);
    }
    setObjectLiveryColor(e, t, r) {
      SetWeaponObjectLiveryColor(e, t, r);
    }
    getObjectLiveryColor(e, t) {
      return GetWeaponObjectLiveryColor(e, t);
    }
    setDamageModifierThisFrame(e, t) {
      SetWeaponDamageModifierThisFrame(e, t);
    }
    isPedCurrentSilenced(e) {
      return IsPedCurrentWeaponSilenced(e);
    }
    setFlashLightEnabled(e, t) {
      SetFlashLightEnabled(e, t);
    }
    canUseOnParachute(e) {
      return CanUseWeaponOnParachute(e);
    }
    createAirDefenseSphere(e, t, r, n, i, a, o, s) {
      return CreateAirDefenceSphere(e, t, r, n, i, a, o, s);
    }
    createAirDefenseArea(e, t, r, n, i, a, o, s, l, d, c) {
      return CreateAirDefenceAngledArea(e, t, r, n, i, a, o, s, l, d, c);
    }
    removeAirDefenseZone(e) {
      return RemoveAirDefenseZone(e);
    }
    removeAllAirDefenseZones() {
      RemoveAllAirDefenseZones();
    }
    setPlayerAirDefenseZoneFlag(e, t, r) {
      SetPlayerAirDefenseZoneFlag(e, t, r);
    }
    isAnyAirDefenseZoneInsideSphere(e, t, r, n) {
      return IsAirDefenceSphereInArea(e, t, r, n);
    }
    fireAirDefense(e, t, r, n) {
      FireAirDefenseWeapon(e, t, r, n);
    }
    doesAirDefenseZoneExist(e) {
      return DoesAirDefenseZoneExist(e);
    }
    setCanPedEquip(e, t, r) {
      SetCanPedEquipWeapon(e, t, r);
    }
    setCanPedEquipAllS(e, t) {
      SetCanPedEquipAllWeapons(e, t);
    }
    setExplosionRadiusMultiplier(e, t) {
      SetWeaponExplosionRadiusMultiplier(e, t);
    }
    getAllWeaponNames() {
      return GetAllWeaponNames();
    }
    _0x50276EF8172F5F12(...e) {
      return Citizen.invokeNative("0x50276EF8172F5F12", ...e);
    }
    _0x24C024BA8379A70A(...e) {
      return Citizen.invokeNative("0x24C024BA8379A70A", ...e);
    }
    _0xA2C9AC24B4061285(...e) {
      return Citizen.invokeNative("0xA2C9AC24B4061285", ...e);
    }
    _0x977CA98939E82E4B(...e) {
      return Citizen.invokeNative("0x977CA98939E82E4B", ...e);
    }
    _0xE4DCEC7FD5B739A5(...e) {
      return Citizen.invokeNative("0xE4DCEC7FD5B739A5", ...e);
    }
  }
  class oo {
    constructor() {
      this.unk = ja();
    }
    setClockTime(e, t, r) {
      NetworkOverrideClockTime(e, t, r);
    }
    pauseClock(e) {
      PauseClock(e);
    }
    advanceClockTimeTo(e, t, r) {
      AdvanceClockTimeTo(e, t, r);
    }
    addToClockTime(e, t, r) {
      AddToClockTime(e, t, r);
    }
    setClockDate(e, t, r) {
      SetClockDate(e, t, r);
    }
    getLocalTimeGmt() {
      const e = GetUtcTime();
      return {
        year: e[0],
        month: e[1],
        day: e[2],
        hour: e[3],
        minute: e[4],
        second: e[5]
      };
    }
    setTime(e, t, r) {
      SetClockTime(e, t, r);
    }
    pause(e) {
      PauseClock(e);
    }
    advanceTimeTo(e, t, r) {
      AdvanceClockTimeTo(e, t, r);
    }
    addToTime(e, t, r) {
      AddToClockTime(e, t, r);
    }
    getHours() {
      return GetClockHours();
    }
    getMinutes() {
      return GetClockMinutes();
    }
    getSeconds() {
      return GetClockSeconds();
    }
    setDate(e, t, r) {
      SetClockDate(e, t, r);
    }
    getDayOfWeek() {
      return GetClockDayOfWeek();
    }
    getDayOfMonth() {
      return GetClockDayOfMonth();
    }
    getMonth() {
      return GetClockMonth();
    }
    getYear() {
      return GetClockYear();
    }
    getMillisecondsPerGameMinute() {
      return GetMillisecondsPerGameMinute();
    }
    getPosixTime() {
      const e = GetPosixTime();
      return {
        year: e[0],
        month: e[1],
        day: e[2],
        hour: e[3],
        minute: e[4],
        second: e[5]
      };
    }
    getUtcTime() {
      const e = GetUtcTime();
      return {
        year: e[0],
        month: e[1],
        day: e[2],
        hour: e[3],
        minute: e[4],
        second: e[5]
      };
    }
    getLocalTime() {
      const e = GetLocalTime();
      return {
        year: e[0],
        month: e[1],
        day: e[2],
        hour: e[3],
        minute: e[4],
        second: e[5]
      };
    }
  }
  class so {
    constructor() {
      this.unk = ja();
    }
    startScriptFire(e, t, r, n, i) {
      return StartScriptFire(e, t, r, n, i);
    }
    removeScriptFire(e) {
      RemoveScriptFire(e);
    }
    stopFireInRange(e, t, r, n) {
      StopFireInRange(e, t, r, n);
    }
    getClosestFirePos(e, t, r) {
      return za(GetClosestFirePos(e, t, r));
    }
    addSpecfxExplosion(e, t, r, n, i, a, o, s, l) {
      AddExplosionWithUserVfx(e, t, r, n, i, a, !!o, !!s, l);
    }
    getPedInsideExplosionArea(e, t, r, n, i, a, o, s) {
      return GetPedInsideExplosionArea(e, t, r, n, i, a, o, s);
    }
    startScript(e, t, r, n, i) {
      return StartScriptFire(e, t, r, n, i);
    }
    removeScript(e) {
      RemoveScriptFire(e);
    }
    startEntity(e) {
      return StartEntityFire(e);
    }
    stopEntity(e) {
      StopEntityFire(e);
    }
    isEntityOn(e) {
      return IsEntityOnFire(e);
    }
    getNumberOfFiresInRange(e, t, r, n) {
      return GetNumberOfFiresInRange(e, t, r, n);
    }
    stopInRange(e, t, r, n) {
      StopFireInRange(e, t, r, n);
    }
    getClosestPos(e, t, r) {
      return za(GetClosestFirePos(e, t, r));
    }
    setSpreadRate(e) {
      SetFireSpreadRate(e);
    }
    addExplosion(e, t, r, n, i, a, o, s) {
      AddExplosion(e, t, r, n, i, !!a, !!o, s);
    }
    addOwnedExplosion(e, t, r, n, i, a, o, s, l) {
      AddOwnedExplosion(e, t, r, n, i, a, !!o, !!s, l);
    }
    addExplosionWithUserVfx(e, t, r, n, i, a, o, s, l) {
      AddExplosionWithUserVfx(e, t, r, n, i, a, !!o, !!s, l);
    }
    isExplosionInArea(e, t, r, n, i, a, o) {
      return IsExplosionInArea(e, t, r, n, i, a, o);
    }
    isExplosionActiveInArea(e, t, r, n, i, a, o) {
      return IsExplosionActiveInArea(e, t, r, n, i, a, o);
    }
    isExplosionInSphere(e, t, r, n, i) {
      return IsExplosionInSphere(e, t, r, n, i);
    }
    getEntityInsideExplosionSphere(e, t, r, n, i) {
      return GetEntityInsideExplosionSphere(e, t, r, n, i);
    }
    isExplosionInAngledArea(e, t, r, n, i, a, o, s) {
      return IsExplosionInAngledArea(e, t, r, n, i, a, o, s);
    }
    getEntityInsideExplosionArea(e, t, r, n, i, a, o, s) {
      return GetEntityInsideExplosionArea(e, t, r, n, i, a, o, s);
    }
  }
  class lo {
    constructor() {
      this.unk = ja();
    }
    create(e, t, r, n, i, a, o) {
      return CreateObject(e, t, r, n, a ?? true, i ?? true, o ?? false);
    }
    delete(e) {
      DeleteObject(e);
    }
    placeOnGroundProperly(e) {
      return PlaceObjectOnGroundProperly(e);
    }
    doorControl(e, t, r, n, i, a, o, s) {
      DoorControl(e, t, r, n, !!i, a ?? 0, o ?? 0, s ?? 0);
    }
    createNoOffset(e, t, r, n, i, a, o) {
      return CreateObjectNoOffset(e, t, r, n, i, false, false);
    }
    getClosestObjectOfType(e, t, r, n, i, a, o, s) {
      return GetClosestObjectOfType(e, t, r, n, i, a, o, s);
    }
    hasClosestObjectOfTypeBeenBroken(e, t, r, n, i, a) {
      return HasClosestObjectOfTypeBeenBroken(e, t, r, n, i, a);
    }
    doesObjectOfTypeExistAtCoords(e, t, r, n, i, a) {
      return DoesObjectOfTypeExistAtCoords(e, t, r, n, i, a);
    }
    getObjectFragmentDamageHealth(e, t) {
      return GetObjectFragmentDamageHealth(e, t);
    }
    isAnyObjectNearPoint(e, t, r, n, i) {
      return IsAnyObjectNearPoint(e, t, r, n, i);
    }
    isObjectNearPoint(e, t, r, n, i) {
      return IsObjectNearPoint(e, t, r, n, i);
    }
    trackObjectVisibility(e) {
      TrackObjectVisibility(e);
    }
    doesPickupObjectExist(e) {
      return DoesPickupObjectExist(e);
    }
    setTeamPickupObject(e, t, r) {
      SetTeamPickupObject(e, t, r);
    }
    setForceObjectThisFrame(e, t, r, n) {
      SetForceObjectThisFrame(e, t, r, n);
    }
    slide(e, t, r, n, i, a, o, s) {
      return SlideObject(e, t, r, n, i, a, o, s);
    }
    setTargettable(e, t) {
      SetObjectTargettable(e, t);
    }
    hasBeenBroken(e) {
      return HasObjectBeenBroken(e);
    }
    setStateOfClosestDoorOfType(e, t, r, n, i, a, o) {
      SetStateOfClosestDoorOfType(e, t, r, n, i, a, o);
    }
    getStateOfClosestDoorOfType(e, t, r, n) {
      const i = GetStateOfClosestDoorOfType(e, t, r, n);
      return {
        locked: !!i[0],
        heading: i[1]
      };
    }
    addDoorToSystem(e, t, r, n, i, a, o, s) {
      AddDoorToSystem(e, t, r, n, i, a, o, s);
    }
    removeDoorFromSystem(e) {
      RemoveDoorFromSystem(e);
    }
    doorSystemSetDoorState(e, t, r, n) {
      DoorSystemSetDoorState(e, t, r, n);
    }
    doorSystemGetDoorState(e) {
      return DoorSystemGetDoorState(e);
    }
    doorSystemGetDoorPendingState(e) {
      return DoorSystemGetDoorPendingState(e);
    }
    doorSystemSetAutomaticRate(e, t, r, n) {
      DoorSystemSetAutomaticRate(e, t, r, n);
    }
    doorSystemSetAutomaticDistance(e, t, r, n) {
      DoorSystemSetAutomaticDistance(e, t, r, n);
    }
    doorSystemSetOpenRatio(e, t, r, n) {
      DoorSystemSetOpenRatio(e, t, r, n);
    }
    doorSystemGetOpenRatio(e) {
      return DoorSystemGetOpenRatio(e);
    }
    doorSystemSetSpringRemoved(e, t, r, n) {
      DoorSystemSetSpringRemoved(e, t, r, n);
    }
    doorSystemSetHoldOpen(e, t) {
      DoorSystemSetHoldOpen(e, t);
    }
    isDoorRegisteredWithSystem(e) {
      return IsDoorRegisteredWithSystem(e);
    }
    isDoorClosed(e) {
      return IsDoorClosed(e);
    }
    doorSystemGetIsPhysicsLoaded(e) {
      return DoorSystemGetIsPhysicsLoaded(e);
    }
    doorSystemFindExistingDoor(e, t, r, n) {
      const [, i] = DoorSystemFindExistingDoor(e, t, r, n);
      return i;
    }
    doorSystemGetAutomaticDistance(e) {
      return DoorSystemGetAutomaticDistance(e);
    }
    isGarageEmpty(e, t, r) {
      return IsGarageEmpty(e, t, r);
    }
    isPlayerEntirelyInsideGarage(e, t, r, n) {
      return IsPlayerEntirelyInsideGarage(e, t, r, n);
    }
    isPlayerPartiallyInsideGarage(e, t, r) {
      return IsPlayerPartiallyInsideGarage(e, t, r);
    }
    areEntitiesEntirelyInsideGarage(e, t, r, n, i) {
      return AreEntitiesEntirelyInsideGarage(e, t, r, n, i);
    }
    isAnyEntityEntirelyInsideGarage(e, t, r, n, i) {
      return IsAnyEntityEntirelyInsideGarage(e, t, r, n, i);
    }
    isEntirelyInsideGarage(e, t, r, n) {
      return IsObjectEntirelyInsideGarage(e, t, r, n);
    }
    isPartiallyInsideGarage(e, t, r) {
      return IsObjectPartiallyInsideGarage(e, t, r);
    }
    enableSavingInGarage(e, t) {
      EnableSavingInGarage(e, t);
    }
    clearObjectsInsideGarage(e, t, r, n, i) {
      ClearObjectsInsideGarage(e, t, r, n, i ?? false);
    }
    doesOfTypeExistAtCoords(e, t, r, n, i, a) {
      return DoesObjectOfTypeExistAtCoords(e, t, r, n, i, a);
    }
    setAllowLowLodBuoyancy(e, t) {
      SetObjectAllowLowLodBuoyancy(e, t);
    }
    getFragmentDamageHealth(e, t) {
      return GetObjectFragmentDamageHealth(e, t);
    }
    isNearPoint(e, t, r, n, i) {
      return IsObjectNearPoint(e, t, r, n, i);
    }
    removeHighDetailModel(e) {
      RemoveObjectHighDetailModel(e);
    }
    breakFragmentChild(e, t, r) {
      BreakObjectFragmentChild(e, t, r);
    }
    trackVisibility(e) {
      TrackObjectVisibility(e);
    }
    isVisible(e) {
      return IsEntityVisible(e);
    }
    getRayfireMap(e, t, r, n, i) {
      return GetRayfireMapObject(e, t, r, n, i);
    }
    setStateOfRayfireMap(e, t) {
      SetStateOfRayfireMapObject(e, t);
    }
    getStateOfRayfireMap(e) {
      return GetStateOfRayfireMapObject(e);
    }
    setForceVehiclesToAvoid(e, t) {
      SetObjectForceVehiclesToAvoid(e, t);
    }
    createPickup(e, t, r, n, i, a, o, s) {
      return CreatePickup(e, t, r, n, i, a, o, s);
    }
    createPortablePickup(e, t, r, n, i, a) {
      return CreatePortablePickup(e, t, r, n, i, a);
    }
    createNonNetworkedAmbientPickup(e, t, r, n, i, a, o, s, l) {
      return CreateNonNetworkedAmbientPickup(e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? false, l ?? false);
    }
    createNonNetworkedPortablePickup(e, t, r, n, i, a) {
      return CreateNonNetworkedPortablePickup(e, t, r, n, i ?? false, a ?? 0);
    }
    attachPortablePickupToPed(e, t) {
      AttachPortablePickupToPed(e, t);
    }
    detachPortablePickupFromPed(e) {
      DetachPortablePickupFromPed(e);
    }
    setMaxNumPortablePickupsCarriedByPlayer(e, t) {
      SetMaxNumPortablePickupsCarriedByPlayer(e, t);
    }
    setLocalPlayerCanCollectPortablePickups(e) {
      SetLocalPlayerCanCollectPortablePickups(e);
    }
    getSafePickupCoords(e, t, r, n, i) {
      return za(GetSafePickupCoords(e, t, r, n, i));
    }
    getPickupCoords(e) {
      return za(GetPickupCoords(e));
    }
    removeAllPickupsOfType(e) {
      RemoveAllPickupsOfType(e);
    }
    hasPickupBeenCollected(e) {
      return HasPickupBeenCollected(e);
    }
    removePickup(e) {
      RemovePickup(e);
    }
    createMoneyPickups(e, t, r, n, i, a) {
      CreateMoneyPickups(e, t, r, n, i, a);
    }
    doesPickupExist(e) {
      return DoesPickupExist(e);
    }
    getPickup(e) {
      return GetPickupObject(e);
    }
    isAPortablePickup(e) {
      return IsObjectAPortablePickup(e);
    }
    isAPickup(e) {
      return IsObjectAPickup(e);
    }
    doesPickupOfTypeExistInArea(e, t, r, n, i) {
      return DoesPickupOfTypeExistInArea(e, t, r, n, i);
    }
    setPickupRegenerationTime(e, t) {
      SetPickupRegenerationTime(e, t);
    }
    forcePickupRegenerate(e) {
      ForcePickupRegenerate(e);
    }
    setTeamPickup(e, t, r) {
      SetTeamPickupObject(e, t, r);
    }
    preventCollectionOfPortablePickup(e, t, r) {
      PreventCollectionOfPortablePickup(e, t, r);
    }
    setPickupGenerationRangeMultiplier(e) {
      SetPickupGenerationRangeMultiplier(e);
    }
    getPickupGenerationRangeMultiplier() {
      return GetPickupGenerationRangeMultiplier();
    }
    setPickupUncollectable(e, t) {
      SetPickupUncollectable(e, t);
    }
    setPickupHiddenWhenUncollectable(e, t) {
      SetPickupHiddenWhenUncollectable(e, t);
    }
    renderFakePickupGlow(e, t, r, n) {
      RenderFakePickupGlow(e, t, r, n);
    }
    getWeaponTypeFromPickupType(e) {
      return GetWeaponTypeFromPickupType(e);
    }
    createObject(e, t, r, n, i, a, o) {
      return CreateObject(e, t, r, n, i, a, o);
    }
    createObjectNoOffset(e, t, r, n, i, a, o) {
      return CreateObjectNoOffset(e, t, r, n, i, a, o);
    }
    deleteObject(e) {
      DeleteObject(e);
    }
    getClosestOfType(e, t, r, n, i, a, o, s) {
      return GetClosestObjectOfType(e, t, r, n, i, a, o, s);
    }
    hasClosestOfTypeBeenBroken(e, t, r, n, i, a) {
      return HasClosestObjectOfTypeBeenBroken(e, t, r, n, i, a);
    }
    hasClosestOfTypeBeenCompletelyDestroyed(e, t, r, n, i, a) {
      return HasClosestObjectOfTypeBeenCompletelyDestroyed(e, t, r, n, i, a);
    }
    getObjectOffsetFromCoords(e, t, r, n, i, a, o) {
      return za(GetObjectOffsetFromCoords(e, t, r, n, i, a, o));
    }
    getOffsetFromCoords(e, t, r, n, i, a, o) {
      return za(GetObjectOffsetFromCoords(e, t, r, n, i, a, o));
    }
    getCoordsAndRotationOfClosestOfType(e, t, r, n, i, a) {
      const o = GetCoordsAndRotationOfClosestObjectOfType(e, t, r, n, i, a);
      return {
        result: o[0],
        outPosition: za(o[1]),
        outRotation: za(o[2])
      };
    }
    placeOnGroundProperly2(e) {
      return PlaceObjectOnGroundOrObjectProperly(e);
    }
    doesDoorExist(e) {
      return DoesDoorExist(e);
    }
    setDoorAccelerationLimit(e, t, r, n) {
      SetDoorAccelerationLimit(e, t, r, n);
    }
    setDoorAjarAngle(e, t, r, n) {
      SetDoorAjarAngle(e, t, r, n);
    }
    highlightPlacementCoords(e, t, r, n) {
      HighlightPlacementCoords(e, t, r, n);
    }
    clearGarageArea(e, t) {
      ClearGarageArea(e, t);
    }
    isPointInAngledArea(e, t, r, n, i, a, o, s, l, d, c, u) {
      return IsPointInAngledArea(e, t, r, n, i, a, o, s, l, d, !!c, !!u);
    }
    setPhysicsParams(e, t, r, n, i, a, o, s, l, d, c, u) {
      SetObjectPhysicsParams(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    setActivatePhysicsAsSoonAsItIsUnfrozen(e, t) {
      SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(e, t);
    }
    isAnyNearPoint(e, t, r, n, i) {
      return IsAnyObjectNearPoint(e, t, r, n, i);
    }
    setUnkGlobalBoolRelatedToDamage(e) {
      SetUnkGlobalBoolRelatedToDamage(e);
    }
    setCreateWeaponLightSource(e, t) {
      SetCreateWeaponObjectLightSource(e, t);
    }
    setSomething(e, t) {
      SetObjectSomething(e, t);
    }
    doesRayfireMapExist(e) {
      return DoesRayfireMapObjectExist(e);
    }
    getRayfireMapAnimPhase(e) {
      return GetRayfireMapObjectAnimPhase(e);
    }
    createPickupRotate(e, t, r, n, i, a, o, s, l, d, c, u) {
      return CreatePickupRotate(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    createAmbientPickup(e, t, r, n, i, a, o, s, l) {
      return CreateAmbientPickup(e, t, r, n, i, a, o, s, l);
    }
    createPortablePickup2(e, t, r, n, i, a) {
      return CreatePortablePickup_2(e, t, r, n, i, a);
    }
    hidePickup(e, t) {
      HidePickup(e, t);
    }
    getPickupHash(e) {
      return GetPickupHash(e);
    }
    getPickupHashFromWeapon(e) {
      return GetPickupHashFromWeapon(e);
    }
    isPickupWeaponValid(e) {
      return IsPickupWeaponObjectValid(e);
    }
    isPickupWithinRadius(e, t, r, n, i) {
      return IsPickupWithinRadius(e, t, r, n, i);
    }
    toggleUsePickupsForPlayer(e, t, r) {
      ToggleUsePickupsForPlayer(e, t, r);
    }
    setLocalPlayerCanUsePickupsWithThisModel(e, t) {
      SetLocalPlayerCanUsePickupsWithThisModel(e, t);
    }
    getTextureVariation(e) {
      return GetWeaponObjectTintIndex(e);
    }
    setTextureVariation(e, t) {
      SetWeaponObjectTintIndex(e, t);
    }
    setTextureVariationOfClosestOfType(e, t, r, n, i, a) {
      return SetTextureVariationOfClosestObjectOfType(e, t, r, n, i, a);
    }
    setLightColor(e, t, r, n, i) {
      return SetObjectLightColor(e, t, r, n, i);
    }
    setStuntPropSpeedup(e, t) {
      SetObjectStuntPropSpeedup(e, t);
    }
    setStuntPropDuration(e, t) {
      SetObjectStuntPropDuration(e, t);
    }
    setForceThisFrame(e, t, r, n) {
      SetForceObjectThisFrame(e, t, r, n);
    }
    markForDeletion(e) {
      MarkObjectForDeletion(e);
    }
    setEnableArenaPropPhysics(e, t, r) {
      SetEnableArenaPropPhysics(e, t, r);
    }
    setEnableArenaPropPhysicsOnPed(e, t, r, n) {
      SetEnableArenaPropPhysicsOnPed(e, t, r, n);
    }
    getIsArenaPropPhysicsDisabled(e, t) {
      return GetIsArenaPropPhysicsDisabled(e, t);
    }
    getAllInRange(e, t, r, n) {
      return GetObjectAllInRange(e, t, r, n);
    }
    getAllByHash(e) {
      return GetObjectAllByHash(e);
    }
    createGlowStyle(e, t, r) {
      return CreateGlowStyle(e, t, r);
    }
    releaseGlowStyle(e) {
      ReleaseGlowStyle(e);
    }
    modifyGlowStyle(e, t, r, n) {
      ModifyGlowStyle(e, t, r, n);
    }
    enableGlow(e, t) {
      EnableGlow(e, t);
    }
    disableGlow(e) {
      DisableGlow(e);
    }
    _0xAFE24E4D29249E4A(...e) {
      return Citizen.invokeNative("0xAFE24E4D29249E4A", ...e);
    }
    _0x2542269291C6AC84(...e) {
      return Citizen.invokeNative("0x2542269291C6AC84", ...e);
    }
    _0x006E4B040ED37EC3(...e) {
      return Citizen.invokeNative("0x006E4B040ED37EC3", ...e);
    }
    _0xE851471AEFC3374F(...e) {
      return Citizen.invokeNative("0xE851471AEFC3374F", ...e);
    }
    _0xA85A21582451E951(...e) {
      return Citizen.invokeNative("0xA85A21582451E951", ...e);
    }
    _0xC7F29CA00F46350E(...e) {
      return Citizen.invokeNative("0xC7F29CA00F46350E", ...e);
    }
    _0x701FDA1E82076BA4(...e) {
      return Citizen.invokeNative("0x701FDA1E82076BA4", ...e);
    }
    _0x190428512B240692(...e) {
      return Citizen.invokeNative("0x190428512B240692", ...e);
    }
    _0x659F9D71F52843F8(...e) {
      return Citizen.invokeNative("0x659F9D71F52843F8", ...e);
    }
    _0x66A49D021870FE88(...e) {
      return Citizen.invokeNative("0x66A49D021870FE88", ...e);
    }
    _0xE05F6AEEFEB0BB02(...e) {
      return Citizen.invokeNative("0xE05F6AEEFEB0BB02", ...e);
    }
    _0xF9C1681347C8BD15(...e) {
      return Citizen.invokeNative("0xF9C1681347C8BD15", ...e);
    }
    _0xC6033D32241F6FB5(...e) {
      return Citizen.invokeNative("0xC6033D32241F6FB5", ...e);
    }
    _0xEB6F1A9B5510A5D2(...e) {
      return Citizen.invokeNative("0xEB6F1A9B5510A5D2", ...e);
    }
    _0x394CD08E31313C28(...e) {
      return Citizen.invokeNative("0x394CD08E31313C28", ...e);
    }
    _0x826D1EE4D1CAFC78(...e) {
      return Citizen.invokeNative("0x826D1EE4D1CAFC78", ...e);
    }
    _0x1E3F1B1B891A2AAA(...e) {
      return Citizen.invokeNative("0x1E3F1B1B891A2AAA", ...e);
    }
    _0xD4A7A435B3710D05(...e) {
      return Citizen.invokeNative("0xD4A7A435B3710D05", ...e);
    }
    _0xB7C6D80FB371659A(...e) {
      return Citizen.invokeNative("0xB7C6D80FB371659A", ...e);
    }
    _0x8DCA505A5C196F05(...e) {
      return Citizen.invokeNative("0x8DCA505A5C196F05", ...e);
    }
    _0xFDC07C58E8AAB715(...e) {
      return Citizen.invokeNative("0xFDC07C58E8AAB715", ...e);
    }
    _0x0596843B34B95CE5(...e) {
      return Citizen.invokeNative("0x0596843B34B95CE5", ...e);
    }
    _0xA08FE5E49BDC39DD(...e) {
      return Citizen.invokeNative("0xA08FE5E49BDC39DD", ...e);
    }
    _0x62454A641B41F3C5(...e) {
      return Citizen.invokeNative("0x62454A641B41F3C5", ...e);
    }
    _0x39A5FB7EAF150840(...e) {
      return Citizen.invokeNative("0x39A5FB7EAF150840", ...e);
    }
    _0xDB41D07A45A6D4B7(...e) {
      return Citizen.invokeNative("0xDB41D07A45A6D4B7", ...e);
    }
    _0x31F924B53EADDF65(...e) {
      return Citizen.invokeNative("0x31F924B53EADDF65", ...e);
    }
    _0x858EC9FD25DE04AA(...e) {
      return Citizen.invokeNative("0x858EC9FD25DE04AA", ...e);
    }
    _0x8881C98A31117998(...e) {
      return Citizen.invokeNative("0x8881C98A31117998", ...e);
    }
    _0x8CFF648FBD7330F1(...e) {
      return Citizen.invokeNative("0x8CFF648FBD7330F1", ...e);
    }
    _0x46F3ADD1E2D5BAF2(...e) {
      return Citizen.invokeNative("0x46F3ADD1E2D5BAF2", ...e);
    }
    _0x641F272B52E2F0F8(...e) {
      return Citizen.invokeNative("0x641F272B52E2F0F8", ...e);
    }
    _0x4C134B4DF76025D0(...e) {
      return Citizen.invokeNative("0x4C134B4DF76025D0", ...e);
    }
    _0xAA059C615DE9DD03(...e) {
      return Citizen.invokeNative("0xAA059C615DE9DD03", ...e);
    }
    _0xF92099527DB8E2A7(...e) {
      return Citizen.invokeNative("0xF92099527DB8E2A7", ...e);
    }
    _0xA2C1F5E92AFE49ED(...e) {
      return Citizen.invokeNative("0xA2C1F5E92AFE49ED", ...e);
    }
    _0x762DB2D380B48D04(...e) {
      return Citizen.invokeNative("0x762DB2D380B48D04", ...e);
    }
    _0x7813E8B8C4AE4799(...e) {
      return Citizen.invokeNative("0x7813E8B8C4AE4799", ...e);
    }
    _0xBFFE53AE7E67FCDC(...e) {
      return Citizen.invokeNative("0xBFFE53AE7E67FCDC", ...e);
    }
    _0xD05A3241B9A86F19(...e) {
      return Citizen.invokeNative("0xD05A3241B9A86F19", ...e);
    }
    _0xB2D0BDE54F0E8E5A(...e) {
      return Citizen.invokeNative("0xB2D0BDE54F0E8E5A", ...e);
    }
    _0x31574B1B41268673(...e) {
      return Citizen.invokeNative("0x31574B1B41268673", ...e);
    }
    _0xADF084FB8F075D06(...e) {
      return Citizen.invokeNative("0xADF084FB8F075D06", ...e);
    }
    _0x3B2FD68DB5F8331C(...e) {
      return Citizen.invokeNative("0x3B2FD68DB5F8331C", ...e);
    }
    _0x8CAAB2BD3EA58BD4(...e) {
      return Citizen.invokeNative("0x8CAAB2BD3EA58BD4", ...e);
    }
    _0x63ECF581BC70E363(...e) {
      return Citizen.invokeNative("0x63ECF581BC70E363", ...e);
    }
    _0x734E1714D077DA9A(...e) {
      return Citizen.invokeNative("0x734E1714D077DA9A", ...e);
    }
    _0x1A6CBB06E2D0D79D(...e) {
      return Citizen.invokeNative("0x1A6CBB06E2D0D79D", ...e);
    }
    _0x3BD770D281982DB5(...e) {
      return Citizen.invokeNative("0x3BD770D281982DB5", ...e);
    }
    _0x1C57C94A6446492A(...e) {
      return Citizen.invokeNative("0x1C57C94A6446492A", ...e);
    }
    _0xB5B7742424BD4445(...e) {
      return Citizen.invokeNative("0xB5B7742424BD4445", ...e);
    }
  }
  class co {
    constructor() {
      this.unk = ja();
    }
    startShapeTestLosProbe(e, t, r, n, i, a, o, s, l) {
      return StartShapeTestLosProbe(e, t, r, n, i, a, o, s, l);
    }
    startExpensiveSynchronousShapeTestLosProbe(e, t, r, n, i, a, o, s, l) {
      return StartExpensiveSynchronousShapeTestLosProbe(e, t, r, n, i, a, o, s, l);
    }
    startShapeTestBoundingBox(e, t, r) {
      return StartShapeTestBoundingBox(e, t, r);
    }
    startShapeTestBox(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartShapeTestBox(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    startShapeTestBound(e, t, r) {
      return StartShapeTestBound(e, t, r);
    }
    startShapeTestCapsule(e, t, r, n, i, a, o, s, l, d) {
      return StartShapeTestCapsule(e, t, r, n, i, a, o, s, l, d);
    }
    startShapeTestSweptSphere(e, t, r, n, i, a, o, s, l, d) {
      return StartShapeTestSweptSphere(e, t, r, n, i, a, o, s, l, d);
    }
    startShapeTestSurroundingCoords(e, t, r) {
      const n = StartShapeTestMouseCursorLosProbe(e, t, r);
      return {
        pVec1: za(n[1]),
        pVec2: za(n[2]),
        result: n[0]
      };
    }
    getShapeTestResult(e) {
      const [, t, r, n, i] = GetShapeTestResult(e);
      return {
        hit: !!t,
        endCoords: r ? za(r) : null,
        surfaceNormal: n ? za(n) : null,
        entityHit: i
      };
    }
    getShapeTestResultIncludingMaterial(e) {
      const [, t, r, n, i, a] = GetShapeTestResultIncludingMaterial(e);
      return {
        hit: !!t,
        endCoords: r ? za(r) : null,
        surfaceNormal: n ? za(n) : null,
        materialHash: i,
        entityHit: a
      };
    }
    releaseScriptGuidFromEntity(e) {
      ReleaseScriptGuidFromEntity(e);
    }
    waitForCompletionAsync(e, t = 1000) {
      return new Promise(r => {
        const n = Date.now();
        const i = () => {
          const [a] = GetShapeTestResult(e);
          if (a !== 1 || Date.now() - n >= t) {
            r(a === 2);
          } else {
            setTimeout(i, 0);
          }
        };
        i();
      });
    }
  }
  class uo {
    constructor() {
      this.unk = ja();
    }
    getInteriorAtCoords(e, t, r) {
      return GetInteriorAtCoords(e, t, r);
    }
    getInteriorAtCoordsWithType(e, t, r, n) {
      return GetInteriorAtCoordsWithType(e, t, r, n);
    }
    enableInteriorProp(e, t) {
      EnableInteriorProp(e, t);
    }
    disableInteriorProp(e, t) {
      DisableInteriorProp(e, t);
    }
    isInteriorPropEnabled(e, t) {
      return IsInteriorPropEnabled(e, t);
    }
    refreshInterior(e) {
      RefreshInterior(e);
    }
    isValidInterior(e) {
      return IsValidInterior(e);
    }
    getInteriorGroupId(e) {
      return GetInteriorGroupId(e);
    }
    getOffsetFromInteriorInWorldCoords(e, t, r, n) {
      return za(GetOffsetFromInteriorInWorldCoords(e, t, r, n));
    }
    addPickupToInteriorRoomByName(e, t) {
      AddPickupToInteriorRoomByName(e, t);
    }
    unpinInterior(e) {
      UnpinInterior(e);
    }
    isInteriorReady(e) {
      return IsInteriorReady(e);
    }
    getInteriorFromCollision(e, t, r) {
      return GetInteriorFromCollision(e, t, r);
    }
    disableInterior(e, t) {
      DisableInterior(e, t);
    }
    isInteriorDisabled(e) {
      return IsInteriorDisabled(e);
    }
    capInterior(e, t) {
      CapInterior(e, t);
    }
    isInteriorCapped(e) {
      return IsInteriorCapped(e);
    }
    getHeading(e) {
      return GetInteriorHeading(e);
    }
    getGroupId(e) {
      return GetInteriorGroupId(e);
    }
    isScene() {
      return IsInteriorScene();
    }
    isValid(e) {
      return IsValidInterior(e);
    }
    clearRoomForEntity(e) {
      ClearRoomForEntity(e);
    }
    forceRoomForEntity(e, t, r) {
      ForceRoomForEntity(e, t, r);
    }
    getRoomKeyFromEntity(e) {
      return GetRoomKeyFromEntity(e);
    }
    getKeyForEntityInRoom(e) {
      return GetKeyForEntityInRoom(e);
    }
    getFromEntity(e) {
      return GetInteriorFromEntity(e);
    }
    forceRoomForGameViewport(e, t) {
      ForceRoomForGameViewport(e, t);
    }
    getRoomKeyForGameViewport() {
      return GetRoomKeyForGameViewport();
    }
    clearRoomForGameViewport() {
      ClearRoomForGameViewport();
    }
    getAtCoords(e, t, r) {
      return GetInteriorAtCoords(e, t, r);
    }
    pinInMemory(e) {
      PinInteriorInMemory(e);
    }
    unpin(e) {
      UnpinInterior(e);
    }
    isReady(e) {
      return IsInteriorReady(e);
    }
    getAtCoordsWithType(e, t, r, n) {
      return GetInteriorAtCoordsWithType(e, t, r, n);
    }
    getAtCoordsWithTypehash(e, t, r, n) {
      return GetInteriorAtCoordsWithTypehash(e, t, r, n);
    }
    isCollisionMarkedOutside(e, t, r) {
      return IsCollisionMarkedOutside(e, t, r);
    }
    getFromCollision(e, t, r) {
      return GetInteriorFromCollision(e, t, r);
    }
    activateEntitySet(e, t) {
      ActivateInteriorEntitySet(e, t);
    }
    deactivateEntitySet(e, t) {
      DeactivateInteriorEntitySet(e, t);
    }
    isEntitySetActive(e, t) {
      return IsInteriorEntitySetActive(e, t);
    }
    refresh(e) {
      RefreshInterior(e);
    }
    enableExteriorCullModelThisFrame(e) {
      EnableExteriorCullModelThisFrame(e);
    }
    disable(e, t) {
      DisableInterior(e, t);
    }
    isDisabled(e) {
      return IsInteriorDisabled(e);
    }
    cap(e, t) {
      CapInterior(e, t);
    }
    isCapped(e) {
      return IsInteriorCapped(e);
    }
    unkGetInteriorAtCoords(e, t, r, n) {
      return GetInteriorAtCoordsWithTypehash(e, t, r, n);
    }
    areCoordsCollidingWithExterior(e, t, r) {
      return IsCollisionMarkedOutside(e, t, r);
    }
    hideMapObjectThisFrame(e) {
      EnableExteriorCullModelThisFrame(e);
    }
    getInfo(e) {
      const [t, r] = GetInteriorLocationAndNamehash(e);
      return {
        position: za(t),
        nameHash: r
      };
    }
    getOffsetFromInWorldCoords(e, t, r, n) {
      return za(GetOffsetFromInteriorInWorldCoords(e, t, r, n));
    }
    clearForEntity(e) {
      ClearRoomForEntity(e);
    }
    getFromGameplayCam() {
      return GetInteriorFromPrimaryView();
    }
    addPickupToRoomByName(e, t) {
      AddPickupToInteriorRoomByName(e, t);
    }
    setEntitySetColor(e, t, r) {
      SetInteriorEntitySetColor(e, t, r);
    }
    enableScriptCullModelThisFrame(e) {
      EnableScriptCullModelThisFrame(e);
    }
    _0x82EBB79E258FA2B7(...e) {
      return Citizen.invokeNative("0x82EBB79E258FA2B7", ...e);
    }
    _0x38C1CB1CB119A016(...e) {
      return Citizen.invokeNative("0x38C1CB1CB119A016", ...e);
    }
    _0xAF348AFCB575A441(...e) {
      return Citizen.invokeNative("0xAF348AFCB575A441", ...e);
    }
    _0x405DC2AEF6AF95B9(...e) {
      return Citizen.invokeNative("0x405DC2AEF6AF95B9", ...e);
    }
    _0x4C2330E61D3DEB56(...e) {
      return Citizen.invokeNative("0x4C2330E61D3DEB56", ...e);
    }
    _0x483ACA1176CA93F1(...e) {
      return Citizen.invokeNative("0x483ACA1176CA93F1", ...e);
    }
    _0x7ECDF98587E92DEC(...e) {
      return Citizen.invokeNative("0x7ECDF98587E92DEC", ...e);
    }
    _0x9E6542F0CE8E70A3(...e) {
      return Citizen.invokeNative("0x9E6542F0CE8E70A3", ...e);
    }
    _0x7241CCB7D020DB69(...e) {
      return Citizen.invokeNative("0x7241CCB7D020DB69", ...e);
    }
  }
  class ho {
    constructor() {
      this.unk = ja();
    }
    getZoneAtCoords(e, t, r) {
      return GetZoneAtCoords(e, t, r);
    }
    getZoneFromNameId(e) {
      return GetZoneFromNameId(e);
    }
    getZonePopschedule(e) {
      return GetZonePopschedule(e);
    }
    getNameOfZone(e, t, r) {
      return GetNameOfZone(e, t, r);
    }
    setZoneEnabled(e, t) {
      SetZoneEnabled(e, t);
    }
    getZoneScumminess(e) {
      return GetZoneScumminess(e);
    }
    getAtCoords(e, t, r) {
      return GetZoneAtCoords(e, t, r);
    }
    getFromNameId(e) {
      return GetZoneFromNameId(e);
    }
    getPopschedule(e) {
      return GetZonePopschedule(e);
    }
    getNameOf(e, t, r) {
      return GetNameOfZone(e, t, r);
    }
    setEnabled(e, t) {
      SetZoneEnabled(e, t);
    }
    getScumminess(e) {
      return GetZoneScumminess(e);
    }
    overridePopscheduleVehicleModel(e, t) {
      OverridePopscheduleVehicleModel(e, t);
    }
    clearPopscheduleOverrideVehicleModel(e) {
      ClearPopscheduleOverrideVehicleModel(e);
    }
    getHashOfMapAreaAtCoords(e, t, r) {
      return GetHashOfMapAreaAtCoords(e, t, r);
    }
  }
  class po {
    constructor() {
      this.unk = ja();
    }
    getRandomVehicleNode(e, t, r) {
      const [n, i, a] = GetNthClosestVehicleNodeWithHeading(e, t, r, 0, 1, 3, 0);
      if (n && i) {
        return {
          x: i[0],
          y: i[1],
          z: i[2],
          heading: a
        };
      } else {
        return null;
      }
    }
    getClosestVehicleNode(e, t, r, n) {
      const [i, a, o] = GetClosestVehicleNodeWithHeading(e, t, r, n ?? 1, 3, 0);
      if (i && a) {
        return {
          x: a[0],
          y: a[1],
          z: a[2],
          heading: o
        };
      } else {
        return null;
      }
    }
    getClosestRoad(e, t, r, n, i, a) {
      const [o, s, l, d, c, u] = GetClosestRoad(e, t, r, n ?? 0, i ?? 1, a ?? false);
      if (o) {
        return {
          roads: [s ? {
            x: s[0],
            y: s[1],
            z: s[2]
          } : null, l ? {
            x: l[0],
            y: l[1],
            z: l[2]
          } : null],
          headings: [d, c],
          density: u
        };
      } else {
        return null;
      }
    }
    isPointOnRoad(e, t, r, n) {
      return IsPointOnRoad(e, t, r, n ?? 0);
    }
    generateDirectionsToCoord(e, t, r, n) {
      GenerateDirectionsToCoord(e, t, r, n);
    }
    getStreetNameAtCoord(e, t, r) {
      const [n, i] = GetStreetNameAtCoord(e, t, r);
      return {
        streetName: n,
        crossingRoad: i
      };
    }
    setRoadsInArea(e, t, r, n, i, a, o, s) {
      SetRoadsInArea(e, t, r, n, i, a, !!o, !!s);
    }
    setRoadsInAngledArea(e, t, r, n, i, a, o, s, l, d) {
      SetRoadsInAngledArea(e, t, r, n, i, a, o, !!s, !!l, !!d);
    }
    setPedPathsInArea(e, t, r, n, i, a, o, s) {
      SetPedPathsInArea(e, t, r, n, i, a, !!o);
    }
    getSafeCoordForPed(e, t, r, n, i) {
      return za(GetSafeCoordForPed(e, t, r, !!n, i));
    }
    getClosestMajorVehicleNode(e, t, r, n, i) {
      return za(GetClosestMajorVehicleNode(e, t, r, n, i));
    }
    getNthClosestVehicleNode(e, t, r, n, i, a, o) {
      return za(GetNthClosestVehicleNode(e, t, r, n, i, a, o));
    }
    getNthClosestVehicleNodeId(e, t, r, n, i, a, o) {
      return GetNthClosestVehicleNodeId(e, t, r, n, i, a, o);
    }
    getClosestVehicleNodeWithHeading(e, t, r, n, i, a) {
      const o = GetClosestVehicleNodeWithHeading(e, t, r, n, i, a);
      return {
        outPosition: za(o[1]),
        outHeading: o[2],
        result: !!o[0]
      };
    }
    getNthClosestVehicleNodeWithHeading(e, t, r, n, i, a, o) {
      const s = GetNthClosestVehicleNodeWithHeading(e, t, r, n, i, a, o);
      return {
        outPosition: za(s[1]),
        outHeading: s[2],
        unknown1: s[3],
        result: !!s[0]
      };
    }
    getNthClosestVehicleNodeIdWithHeading(e, t, r, n, i, a, o) {
      const s = GetNthClosestVehicleNodeIdWithHeading(e, t, r, n, i, a, o);
      return {
        outPosition: za(s[1]),
        outHeading: s[2],
        result: s[0]
      };
    }
    getNthClosestVehicleNodeFavourDirection(e, t, r, n, i, a, o, s, l, d) {
      const c = GetNthClosestVehicleNodeFavourDirection(e, t, r, n, i, a, o, s, l, d);
      return {
        outPosition: za(c[1]),
        outHeading: c[2],
        result: !!c[0]
      };
    }
    getVehicleNodeProperties(e, t, r) {
      const n = GetVehicleNodeProperties(e, t, r);
      return {
        density: n[1],
        flags: n[2],
        result: !!n[0]
      };
    }
    isVehicleNodeIdValid(e) {
      return IsVehicleNodeIdValid(e);
    }
    getVehicleNodePosition(e) {
      return za(GetVehicleNodePosition(e));
    }
    getVehicleNodeIsGpsAllowed(e) {
      return GetVehicleNodeIsGpsAllowed(e);
    }
    getVehicleNodeIsSwitchedOff(e) {
      return GetVehicleNodeIsSwitchedOff(e);
    }
    setAllPathsCacheBoundingstruct(e) {
      SetAllPathsCacheBoundingstruct(!!e);
    }
    setAiGlobalPathNodesType(e) {
      SetAiGlobalPathNodesType(e);
    }
    requestPathsPreferAccurateBoundingstruct(e, t, r, n) {
      return RequestPathsPreferAccurateBoundingstruct(e, t, r, n);
    }
    setIgnoreSecondaryRouteNodes(e) {
      SetIgnoreSecondaryRouteNodes(!!e);
    }
    getRoadSidePointWithHeading(e, t, r, n) {
      return za(GetRoadSidePointWithHeading(e, t, r, n));
    }
    getPointOnRoadSide(e, t, r, n) {
      return za(GetPointOnRoadSide(e, t, r, n));
    }
    isNavmeshRequiredRegionOwnedByAnyThread() {
      return IsNavmeshRequiredRegionOwnedByAnyThread();
    }
    getHeightmapTopZForPosition(e, t) {
      return GetHeightmapTopZForPosition(e, t);
    }
    getHeightmapTopZForArea(e, t, r, n) {
      return GetHeightmapTopZForArea(e, t, r, n);
    }
    getHeightmapBottomZForPosition(e, t) {
      return GetHeightmapBottomZForPosition(e, t);
    }
    getHeightmapBottomZForArea(e, t, r, n) {
      return GetHeightmapBottomZForArea(e, t, r, n);
    }
    getSupportsGpsRouteFlag(e) {
      return GetSupportsGpsRouteFlag(e);
    }
    getIsSlowRoadFlag(e) {
      return GetIsSlowRoadFlag(e);
    }
    areNodesLoadedForArea(e, t, r, n) {
      return AreNodesLoadedForArea(e, t, r, n);
    }
    setRoadsBackToOriginal(e, t, r, n, i, a) {
      SetRoadsBackToOriginal(e, t, r, n, i, a);
    }
    setRoadsBackToOriginalInAngledArea(e, t, r, n, i, a, o) {
      SetRoadsBackToOriginalInAngledArea(e, t, r, n, i, a, o);
    }
    setAmbientPedRangeMultiplierThisFrame(e) {
      SetAmbientPedRangeMultiplierThisFrame(e);
    }
    setPedPathsBackToOriginal(e, t, r, n, i, a) {
      SetPedPathsBackToOriginal(e, t, r, n, i, a);
    }
    setIgnoreNoGpsFlag(e) {
      SetIgnoreNoGpsFlag(!!e);
    }
    setGpsDisabledZone(e, t, r, n, i, a) {
      SetGpsDisabledZone(e, t, r, n, i, a);
    }
    getGpsBlipRouteLength() {
      return GetGpsBlipRouteLength();
    }
    getGpsBlipRouteFound() {
      return GetGpsBlipRouteFound();
    }
    getNextGpsDisabledZoneIndex(e) {
      return GetNextGpsDisabledZoneIndex(e);
    }
    setGpsDisabledZoneAtIndex(e, t, r, n, i, a, o) {
      SetGpsDisabledZoneAtIndex(e, t, r, n, i, a, o);
    }
    clearGpsDisabledZoneAtIndex(e) {
      ClearGpsDisabledZoneAtIndex(e);
    }
    addNavmeshRequiredRegion(e, t, r) {
      AddNavmeshRequiredRegion(e, t, r);
    }
    removeNavmeshRequiredRegions() {
      RemoveNavmeshRequiredRegions();
    }
    disableNavmeshInArea(e, t, r, n, i, a, o) {
      DisableNavmeshInArea(e, t, r, n, i, a, o);
    }
    areAllNavmeshRegionsLoaded() {
      return AreAllNavmeshRegionsLoaded();
    }
    isNavmeshLoadedInArea(e, t, r, n, i, a) {
      return IsNavmeshLoadedInArea(e, t, r, n, i, a);
    }
    addNavmeshBlockingObject(e, t, r, n, i, a, o, s, l) {
      return AddNavmeshBlockingObject(e, t, r, n, i, a, o, !!s, l);
    }
    updateNavmeshBlockingObject(e, t, r, n, i, a, o, s, l) {
      UpdateNavmeshBlockingObject(e, t, r, n, i, a, o, s, l);
    }
    removeNavmeshBlockingObject(e) {
      RemoveNavmeshBlockingObject(e);
    }
    doesNavmeshBlockingObjectExist(e) {
      return DoesNavmeshBlockingObjectExist(e);
    }
    calculateTravelDistanceBetweenPoints(e, t, r, n, i, a) {
      return CalculateTravelDistanceBetweenPoints(e, t, r, n, i, a);
    }
  }
  function mo(e) {
    if (e == null) {
      return 0;
    } else if (typeof e == "object") {
      return Number(e.result) || 0;
    } else {
      return Number(e) || 0;
    }
  }
  class go {
    constructor() {
      this.unk = ja();
    }
    getRopeLength(e) {
      return GetRopeLength(e);
    }
    addRope(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S) {
      return function (e) {
        if (Array.isArray(e)) {
          const [t, r] = e;
          return {
            unkPtr: Number(r) || 0,
            result: Number(t) || 0
          };
        }
        if (e && typeof e == "object") {
          const t = e;
          if ("result" in t) {
            return {
              unkPtr: Number(t.unkPtr) || 0,
              result: Number(t.result) || 0
            };
          }
        }
        return {
          result: Number(e) || 0,
          unkPtr: 0
        };
      }(AddRope(e, t, r, n, i, a, o, s, l, d, c, u ?? false, h ?? false, p ?? false, m ?? 1, g ?? false, S ?? 0));
    }
    deleteRope(e) {
      DeleteRope(mo(e));
    }
    deleteChildRope(e) {
      DeleteChildRope(e);
    }
    doesRopeExist(e) {
      return DoesRopeExist(e);
    }
    ropeDrawShadowEnabled(e) {
      return RopeDrawShadowEnabled(!!e);
    }
    loadRopeData(e, t) {
      LoadRopeData(e, t);
    }
    attachEntitiesToRope(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      AttachEntitiesToRope(e, t, r, n, i, a, o, s, l, d, c ?? false, u ?? false, h ?? 0, p ?? 0);
    }
    attachRopeToEntity(e, t, r, n, i, a) {
      AttachRopeToEntity(e, t, r, n, i, !!a);
    }
    detachRopeFromEntity(e, t) {
      DetachRopeFromEntity(e, t);
    }
    pinRopeVertex(e, t, r, n, i) {
      PinRopeVertex(e, t, r, n, i);
    }
    unpinRopeVertex(e, t) {
      UnpinRopeVertex(e, t);
    }
    getRopeVertexCount(e) {
      return GetRopeVertexCount(e);
    }
    ropeSetUpdatePinverts(e) {
      RopeSetUpdatePinverts(e);
    }
    ropeSetUpdateOrder(e, t) {
      RopeSetUpdateOrder(e, t);
    }
    getRopeLastVertexCoord(e) {
      return za(GetRopeLastVertexCoord(e));
    }
    getRopeVertexCoord(e, t) {
      return za(GetRopeVertexCoord(e, t));
    }
    startRopeWinding(e) {
      StartRopeWinding(mo(e));
    }
    stopRopeWinding(e) {
      StopRopeWinding(mo(e));
    }
    startRopeUnwindingFront(e) {
      StartRopeUnwindingFront(mo(e));
    }
    stopRopeUnwindingFront(e) {
      StopRopeUnwindingFront(mo(e));
    }
    ropeConvertToSimple(e) {
      RopeConvertToSimple(mo(e));
    }
    ropeLoadTextures() {
      RopeLoadTextures();
    }
    ropeAreTexturesLoaded() {
      return RopeAreTexturesLoaded();
    }
    ropeUnloadTextures() {
      RopeUnloadTextures();
    }
    doesRopeBelongToThisScript(e) {
      return DoesRopeBelongToThisScript(e);
    }
    ropeGetDistanceBetweenEnds(e) {
      return RopeGetDistanceBetweenEnds(e);
    }
    ropeForceLength(e, t) {
      RopeForceLength(e, t);
    }
    ropeResetLength(e, t) {
      RopeResetLength(e, t);
    }
    applyImpulseToCloth(e, t, r, n, i, a, o) {
      ApplyImpulseToCloth(e, t, r, n, i, a, o);
    }
    setDamping(e, t, r) {
      SetDamping(e, t, r);
    }
    activate(e) {
      ActivatePhysics(e);
    }
    setCgoffset(e, t, r, n) {
      SetCgoffset(e, t, r, n);
    }
    getCgoffset(e) {
      return za(GetCgoffset(e));
    }
    setCgAtBoundcenter(e) {
      SetCgAtBoundcenter(e);
    }
    breakEntityGlass(e, t, r, n, i, a, o, s, l, d, c) {
      BreakEntityGlass(e, t, r, n, i, a, o, s, l, d, !!c);
    }
    getHasObjectFragInst(e) {
      return GetHasObjectFragInst(e);
    }
    setDisableBreaking(e, t) {
      SetDisableBreaking(e, !!t);
    }
    setDisableFragDamage(e, t) {
      SetDisableFragDamage(e, !!t);
    }
    setEntityProofUnk(e, t) {
      SetEntityProofUnk(e, !!t);
    }
    setLaunchControlEnabled(e) {
      SetLaunchControlEnabled(!!e);
    }
  }
  class So {
    constructor() {
      this.unk = ja();
    }
    getWaterHeight(e, t, r) {
      return GetWaterHeight(e, t, r);
    }
    getWaterHeightNoWaves(e, t, r) {
      return GetWaterHeightNoWaves(e, t, r);
    }
    testProbeAgainstWater(e, t, r, n, a, o) {
      return function (e) {
        if (Array.isArray(e)) {
          const [t, r] = e;
          return {
            hit: !!t,
            position: za(r ?? [0, 0, 0])
          };
        }
        if (e && typeof e == "object" && "x" in e) {
          return {
            hit: true,
            position: za(e)
          };
        } else {
          return {
            hit: false,
            position: new i(0, 0, 0)
          };
        }
      }(TestProbeAgainstWater(e, t, r, n, a, o));
    }
    testProbeAgainstAllWater(e, t, r, n, i, a, o, s) {
      return TestProbeAgainstAllWater(e, t, r, n, i, a, o, s);
    }
    testVerticalProbeAgainstAllWater(e, t, r, n = 0, i) {
      const a = TestVerticalProbeAgainstAllWater(e, t, r, n);
      if (Array.isArray(a)) {
        const [e, t] = a;
        if (e) {
          return t;
        } else {
          return 0;
        }
      }
      if (typeof a == "number") {
        return a;
      } else {
        return 0;
      }
    }
    modifyWater(e, t, r, n) {
      ModifyWater(e, t, r, n);
    }
    setWavesIntensity(e) {
      SetCalmedWaveHeightScaler(e);
    }
    _0x547237AA71AB44DE(...e) {
      return Citizen.invokeNative("0x547237AA71AB44DE", ...e);
    }
    getHeight(e, t, r) {
      return GetWaterHeight(e, t, r);
    }
    getHeightNoWaves(e, t, r) {
      return GetWaterHeightNoWaves(e, t, r);
    }
    testProbeAgainst(e, t, r, n, i, a) {
      return this.testProbeAgainstWater(e, t, r, n, i, a);
    }
    testProbeAgainstAll(e, t, r, n, i, a, o, s) {
      return TestProbeAgainstAllWater(e, t, r, n, i, a, o, s);
    }
    testVerticalProbeAgainstAll(e, t, r, n = 0, i) {
      return this.testVerticalProbeAgainstAllWater(e, t, r, n, i);
    }
    modify(e, t, r, n) {
      ModifyWater(e, t, r, n);
    }
    addCurrentRise(e, t, r, n, i) {
      return AddExtraCalmingQuad(e, t, r, n, i);
    }
    removeCurrentRise(e) {
      RemoveExtraCalmingQuad(e);
    }
    setDeepOceanScaler(e) {
      SetDeepOceanScaler(e);
    }
    getDeepOceanScaler() {
      return GetDeepOceanScaler();
    }
    resetDeepOceanScaler() {
      ResetDeepOceanScaler();
    }
  }
  class Co {
    constructor() {
      this.unk = ja();
    }
    screen2dToWorld3d(e, t) {
      let r;
      let n;
      if (e != null && typeof e == "object") {
        r = +(e.x ?? e[0] ?? 0) || 0;
        n = +(e.y ?? e[1] ?? 0) || 0;
      } else {
        r = +e || 0;
        n = +t || 0;
      }
      if (r > 1 || n > 1) {
        const [e, t] = GetActiveScreenResolution();
        r /= e || 1;
        n /= t || 1;
      }
      const [i, a] = GetWorldCoordFromScreenCoord(r, n);
      if (!i || !a) {
        return;
      }
      const o = 1000;
      const s = i[0] + a[0] * o;
      const l = i[1] + a[1] * o;
      const d = i[2] + a[2] * o;
      const c = StartExpensiveSynchronousShapeTestLosProbe(i[0], i[1], i[2], s, l, d, -1, PlayerPedId(), 7);
      const [, u, h] = GetShapeTestResult(c);
      if (!u) {
        return;
      }
      const p = 0.05;
      return za([h[0] + a[0] * p, h[1] + a[1] * p, h[2] + a[2] * p]);
    }
    drawSpotLight(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      DrawSpotLight(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    drawSpotLightWithShadow(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      DrawSpotLightWithShadow(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    startParticleFxLoopedAtCoord(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartParticleFxLoopedAtCoord(e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? 1, l ?? false, d ?? false, c ?? false, u ?? false);
    }
    startParticleFxLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartParticleFxLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    stopParticleFxLooped(e, t) {
      StopParticleFxLooped(e, t ?? false);
    }
    startParticleFxNonLoopedAtCoord(e, t, r, n, i, a, o, s, l, d, c) {
      return StartParticleFxNonLoopedAtCoord(e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? 1, l ?? false, d ?? false, c ?? false);
    }
    startParticleFxNonLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartParticleFxNonLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    removeParticleFx(e, t) {
      RemoveParticleFx(e, t ?? false);
    }
    doesParticleFxLoopedExist(e) {
      return DoesParticleFxLoopedExist(e);
    }
    setParticleFxLoopedEvolution(e, t, r, n) {
      SetParticleFxLoopedEvolution(e, t, r, n ?? false);
    }
    setParticleFxNonLoopedColour(e, t, r) {
      SetParticleFxNonLoopedColour(e, t, r);
    }
    setParticleFxLoopedColour(e, t, r, n, i) {
      SetParticleFxLoopedColour(e, t, r, n, i ?? false);
    }
    setParticleFxLoopedAlpha(e, t) {
      SetParticleFxLoopedAlpha(e, t);
    }
    setParticleFxLoopedScale(e, t) {
      SetParticleFxLoopedScale(e, t);
    }
    setArtificialLightsState(e) {
      SetArtificialLightsState(e);
    }
    setArtificialLightsStateAffectsVehicles(e) {
      SetArtificialLightsStateAffectsVehicles(e);
    }
    requestStreamedTextureDict(e, t) {
      RequestStreamedTextureDict(e, t ?? false);
    }
    hasStreamedTextureDictLoaded(e) {
      return HasStreamedTextureDictLoaded(e);
    }
    drawSprite(e, t, r, n, i, a, o, s, l, d, c, u) {
      DrawSprite(e, t, r, n, i, a, o ?? 0, s, l, d, c ?? 255);
    }
    requestScaleformMovie(e) {
      return RequestScaleformMovie(e);
    }
    requestScaleformMovieInstance(e) {
      return RequestScaleformMovieInstance(e);
    }
    hasScaleformMovieLoaded(e) {
      return HasScaleformMovieLoaded(e);
    }
    pushScaleformMovieFunction(e, t) {
      return BeginScaleformMovieMethod(e, t);
    }
    pushScaleformMovieFunctionParameterInt(e) {
      ScaleformMovieMethodAddParamInt(e);
    }
    pushScaleformMovieFunctionParameterFloat(e) {
      ScaleformMovieMethodAddParamFloat(e);
    }
    pushScaleformMovieFunctionParameterBool(e) {
      ScaleformMovieMethodAddParamBool(e);
    }
    pushScaleformMovieFunctionParameterString(e) {
      BeginTextCommandScaleformString("STRING");
      AddTextComponentSubstringPlayerName(e);
      EndTextCommandScaleformString();
    }
    popScaleformMovieFunctionVoid() {
      EndScaleformMovieMethod();
    }
    popScaleformMovieFunction() {
      return EndScaleformMovieMethodReturnValue();
    }
    drawScaleformMovie(e, t, r, n, i, a, o, s, l, d) {
      DrawScaleformMovie(e, t, r, n, i, a ?? 255, o ?? 255, s ?? 255, l ?? 255, d ?? 0);
    }
    drawScaleformMovieFullscreen(e, t, r, n, i, a) {
      DrawScaleformMovieFullscreen(e, t ?? 255, r ?? 255, n ?? 255, i ?? 255, a ?? 0);
    }
    setScaleformMovieAsNoLongerNeeded(e) {
      SetScaleformMovieAsNoLongerNeeded([e]);
    }
    getScreenAspectRatio(e) {
      return GetScreenAspectRatio(e);
    }
    setDebugLinesAndSpheresDrawingActive(e) {
      SetDebugLinesAndSpheresDrawingActive(e);
    }
    drawDebugLine(e, t, r, n, i, a, o, s, l, d) {
      DrawDebugLine(e, t, r, n, i, a, o, s, l, d);
    }
    drawDebugSphere(e, t, r, n, i, a, o, s) {
      DrawDebugSphere(e, t, r, n, i, a, o, s);
    }
    drawDebugBox(e, t, r, n, i, a, o, s, l, d) {
      DrawDebugBox(e, t, r, n, i, a, o, s, l, d);
    }
    drawDebugCross(e, t, r, n, i, a, o, s) {
      DrawDebugCross(e, t, r, n, i, a, o, s);
    }
    drawDebugText(e, t, r, n, i, a, o, s) {
      DrawDebugText(e, t, r, n, i, a, o, s);
    }
    drawLine(e, t, r, n, i, a, o, s, l, d) {
      DrawLine(e, t, r, n, i, a, o, s, l, d);
    }
    drawBox(e, t, r, n, i, a, o, s, l, d) {
      DrawBox(e, t, r, n, i, a, o, s, l, d);
    }
    setBackfaceculling(e) {
      SetBackfaceculling(e);
    }
    beginTakeMissionCreatorPhoto() {
      return BeginTakeMissionCreatorPhoto();
    }
    getStatusOfTakeMissionCreatorPhoto() {
      return GetStatusOfTakeMissionCreatorPhoto();
    }
    freeMemoryForMissionCreatorPhoto() {
      FreeMemoryForMissionCreatorPhoto();
    }
    beginTakeHighQualityPhoto() {
      return BeginTakeHighQualityPhoto();
    }
    getStatusOfTakeHighQualityPhoto() {
      return GetStatusOfTakeHighQualityPhoto();
    }
    freeMemoryForHighQualityPhoto() {
      FreeMemoryForHighQualityPhoto();
    }
    saveHighQualityPhoto(e) {
      return SaveHighQualityPhoto(e);
    }
    getStatusOfSaveHighQualityPhoto() {
      return GetStatusOfSaveHighQualityPhoto();
    }
    freeMemoryForLowQualityPhoto() {
      FreeMemoryForLowQualityPhoto();
    }
    drawLowQualityPhotoToPhone(e, t) {
      DrawLowQualityPhotoToPhone(e, t);
    }
    getMaximumNumberOfPhotos() {
      return GetMaximumNumberOfPhotos();
    }
    getMaximumNumberOfCloudPhotos() {
      return GetMaximumNumberOfCloudPhotos();
    }
    getCurrentNumberOfCloudPhotos() {
      return GetCurrentNumberOfCloudPhotos();
    }
    getStatusOfSortedListOperation(e) {
      return GetStatusOfSortedListOperation(e);
    }
    fadeUpPedLight(e) {
      FadeUpPedLight(e);
    }
    updateLightsOnEntity(e) {
      UpdateLightsOnEntity(e);
    }
    setCheckpointCylinderHeight(e, t, r, n) {
      SetCheckpointCylinderHeight(e, t, r, n);
    }
    setCheckpointRgba(e, t, r, n, i) {
      SetCheckpointRgba(e, t, r, n, i);
    }
    setCheckpointRgba2(e, t, r, n, i) {
      SetCheckpointRgba2(e, t, r, n, i);
    }
    deleteCheckpoint(e) {
      DeleteCheckpoint(e);
    }
    dontRenderInGameUi(e) {
      DontRenderInGameUi(e);
    }
    forceRenderInGameUi(e) {
      ForceRenderInGameUi(e);
    }
    setStreamedTextureDictAsNoLongerNeeded(e) {
      SetStreamedTextureDictAsNoLongerNeeded(e);
    }
    drawRect(e, t, r, n, i, a, o, s) {
      DrawRect(e, t, r, n, i, a, o, s);
    }
    setScriptGfxDrawBehindPausemenu(e) {
      SetScriptGfxDrawBehindPausemenu(e);
    }
    setScriptGfxDrawOrder(e) {
      SetScriptGfxDrawOrder(e);
    }
    setScriptGfxAlign(e, t) {
      SetScriptGfxAlign(e, t);
    }
    resetScriptGfxAlign() {
      ResetScriptGfxAlign();
    }
    setScriptGfxAlignParams(e, t, r, n) {
      SetScriptGfxAlignParams(e, t, r, n);
    }
    getSafeZoneSize() {
      return GetSafeZoneSize();
    }
    addEntityIcon(e, t) {
      return AddEntityIcon(e, t);
    }
    setEntityIconVisibility(e, t) {
      SetEntityIconVisibility(e, t);
    }
    setEntityIconColor(e, t, r, n, i) {
      SetEntityIconColor(e, t, r, n, i);
    }
    setDrawOrigin(e, t, r, n) {
      SetDrawOrigin(e, t, r, n);
    }
    clearDrawOrigin() {
      ClearDrawOrigin();
    }
    setBinkMovie(e) {
      return SetBinkMovie(e);
    }
    playBinkMovie(e) {
      PlayBinkMovie(e);
    }
    stopBinkMovie(e) {
      StopBinkMovie(e);
    }
    releaseBinkMovie(e) {
      ReleaseBinkMovie(e);
    }
    drawBinkMovie(e, t, r, n, i, a, o, s, l, d) {
      DrawBinkMovie(e, t, r, n, i, a, o, s, l, d);
    }
    setBinkMovieTime(e, t) {
      SetBinkMovieTime(e, t);
    }
    getBinkMovieTime(e) {
      return GetBinkMovieTime(e);
    }
    setBinkMovieVolume(e, t) {
      SetBinkMovieVolume(e, t);
    }
    attachTvAudioToEntity(e) {
      AttachTvAudioToEntity(e);
    }
    setTvAudioFrontend(e) {
      SetTvAudioFrontend(e);
    }
    setBinkShouldSkip(e, t) {
      SetBinkShouldSkip(e, t);
    }
    loadMovieMeshSet(e) {
      return LoadMovieMeshSet(e);
    }
    releaseMovieMeshSet(e) {
      ReleaseMovieMeshSet(e);
    }
    queryMovieMeshSetState(e) {
      return QueryMovieMeshSetState(e);
    }
    getScreenResolution() {
      const e = GetScreenResolution();
      return {
        x: e[0],
        y: e[1]
      };
    }
    getAspectRatio(e) {
      return GetAspectRatio(e);
    }
    getIsWidescreen() {
      return GetIsWidescreen();
    }
    getIsHidef() {
      return GetIsHidef();
    }
    setNightvision(e) {
      SetNightvision(e);
    }
    getRequestingnightvision() {
      return GetRequestingnightvision();
    }
    getUsingnightvision() {
      return GetUsingnightvision();
    }
    setNoiseoveride(e) {
      SetNoiseoveride(e);
    }
    setNoisinessoveride(e) {
      SetNoisinessoveride(e);
    }
    getScreenCoordFromWorldCoord(e, t, r) {
      const n = GetScreenCoordFromWorldCoord(e, t, r);
      return {
        result: !!n[0],
        screenX: n[1],
        screenY: n[2]
      };
    }
    getTextureResolution(e, t) {
      return za(GetTextureResolution(e, t));
    }
    setFlash(e, t, r, n, i) {
      SetFlash(e, t, r, n, i);
    }
    disableOcclusionThisFrame() {
      DisableOcclusionThisFrame();
    }
    createTrackedPoint() {
      return CreateTrackedPoint();
    }
    setTrackedPointInfo(e, t, r, n, i) {
      SetTrackedPointInfo(e, t, r, n, i);
    }
    isTrackedPointVisible(e) {
      return IsTrackedPointVisible(e);
    }
    destroyTrackedPoint(e) {
      DestroyTrackedPoint(e);
    }
    cascadeShadowsInitSession() {
      CascadeShadowsInitSession();
    }
    cascadeShadowsSetCascadeBounds(e, t, r, n, i, a, o, s) {
      CascadeShadowsSetCascadeBounds(e, t, r, n, i, a, o, s);
    }
    cascadeShadowsSetCascadeBoundsScale(e) {
      CascadeShadowsSetCascadeBoundsScale(e);
    }
    cascadeShadowsSetEntityTrackerScale(e) {
      CascadeShadowsSetEntityTrackerScale(e);
    }
    cascadeShadowsEnableEntityTracker(e) {
      CascadeShadowsEnableEntityTracker(e);
    }
    cascadeShadowsSetShadowSampleType(e) {
      CascadeShadowsSetShadowSampleType(e);
    }
    cascadeShadowsClearShadowSampleType() {
      CascadeShadowsClearShadowSampleType();
    }
    cascadeShadowsSetAircraftMode(e) {
      CascadeShadowsSetAircraftMode(e);
    }
    cascadeShadowsSetDynamicDepthMode(e) {
      CascadeShadowsSetDynamicDepthMode(e);
    }
    cascadeShadowsSetDynamicDepthValue(e) {
      CascadeShadowsSetDynamicDepthValue(e);
    }
    golfTrailSetEnabled(e) {
      GolfTrailSetEnabled(e);
    }
    golfTrailSetPath(e, t, r, n, i, a, o, s, l) {
      GolfTrailSetPath(e, t, r, n, i, a, o, s, l);
    }
    golfTrailSetRadius(e, t, r) {
      GolfTrailSetRadius(e, t, r);
    }
    golfTrailSetTessellation(e, t) {
      GolfTrailSetTessellation(e, t);
    }
    golfTrailSetShaderParams(e, t, r, n, i) {
      GolfTrailSetShaderParams(e, t, r, n, i);
    }
    golfTrailSetFacing(e) {
      GolfTrailSetFacing(e);
    }
    golfTrailGetMaxHeight() {
      return GolfTrailGetMaxHeight();
    }
    golfTrailGetVisualControlPoint(e) {
      return za(GolfTrailGetVisualControlPoint(e));
    }
    setSeethrough(e) {
      SetSeethrough(e);
    }
    getUsingseethrough() {
      return GetUsingseethrough();
    }
    seethroughReset() {
      SeethroughReset();
    }
    seethroughGetMaxThickness() {
      return SeethroughGetMaxThickness();
    }
    seethroughSetMaxThickness(e) {
      SeethroughSetMaxThickness(e);
    }
    seethroughSetHeatscale(e, t) {
      SeethroughSetHeatscale(e, t);
    }
    seethroughSetColorNear(e, t, r) {
      SeethroughSetColorNear(e, t, r);
    }
    triggerScreenblurFadeIn(e) {
      return TriggerScreenblurFadeIn(e);
    }
    triggerScreenblurFadeOut(e) {
      return TriggerScreenblurFadeOut(e);
    }
    disableScreenblurFade() {
      DisableScreenblurFade();
    }
    getScreenblurFadeCurrentTime() {
      return GetScreenblurFadeCurrentTime();
    }
    isScreenblurFadeRunning() {
      return IsScreenblurFadeRunning();
    }
    togglePausedRenderphases(e) {
      TogglePausedRenderphases(e);
    }
    getTogglePausedRenderphasesStatus() {
      return GetTogglePausedRenderphasesStatus();
    }
    resetPausedRenderphases() {
      ResetPausedRenderphases();
    }
    setParticleFxNonLoopedAlpha(e) {
      SetParticleFxNonLoopedAlpha(e);
    }
    removeParticleFxFromEntity(e) {
      RemoveParticleFxFromEntity(e);
    }
    removeParticleFxInRange(e, t, r, n) {
      RemoveParticleFxInRange(e, t, r, n);
    }
    setParticleFxLoopedOffsets(e, t, r, n, i, a, o) {
      SetParticleFxLoopedOffsets(e, t, r, n, i, a, o);
    }
    setParticleFxLoopedFarClipDist(e, t) {
      SetParticleFxLoopedFarClipDist(e, t);
    }
    setParticleFxCamInsideVehicle(e) {
      SetParticleFxCamInsideVehicle(e);
    }
    setParticleFxCamInsideNonplayerVehicle(e, t) {
      SetParticleFxCamInsideNonplayerVehicle(e, t);
    }
    setParticleFxShootoutBoat(e) {
      SetParticleFxShootoutBoat(e);
    }
    enableClownBloodVfx(e) {
      EnableClownBloodVfx(e);
    }
    enableAlienBloodVfx(e) {
      EnableAlienBloodVfx(e);
    }
    setParticleFxBulletImpactScale(e) {
      SetParticleFxBulletImpactScale(e);
    }
    useParticleFxAsset(e) {
      UseParticleFxAsset(e);
    }
    setParticleFxOverride(e, t) {
      SetParticleFxOverride(e, t);
    }
    resetParticleFxOverride(e) {
      ResetParticleFxOverride(e);
    }
    washDecalsInRange(e, t, r, n, i) {
      WashDecalsInRange(e, t, r, n, i);
    }
    washDecalsFromVehicle(e, t) {
      WashDecalsFromVehicle(e, t);
    }
    fadeDecalsInRange(e, t, r, n, i) {
      FadeDecalsInRange(e, t, r, n, i);
    }
    removeDecalsInRange(e, t, r, n) {
      RemoveDecalsInRange(e, t, r, n);
    }
    removeDecalsFromObject(e) {
      RemoveDecalsFromObject(e);
    }
    removeDecalsFromObjectFacing(e, t, r, n) {
      RemoveDecalsFromObjectFacing(e, t, r, n);
    }
    removeDecalsFromVehicle(e) {
      RemoveDecalsFromVehicle(e);
    }
    addPetrolDecal(e, t, r, n, i, a) {
      return AddPetrolDecal(e, t, r, n, i, a);
    }
    startPetrolTrailDecals(e) {
      StartPetrolTrailDecals(e);
    }
    addPetrolTrailDecalInfo(e, t, r, n) {
      AddPetrolTrailDecalInfo(e, t, r, n);
    }
    endPetrolTrailDecals() {
      EndPetrolTrailDecals();
    }
    removeDecal(e) {
      RemoveDecal(e);
    }
    isDecalAlive(e) {
      return IsDecalAlive(e);
    }
    getDecalWashLevel(e) {
      return GetDecalWashLevel(e);
    }
    setDisableDecalRenderingThisFrame() {
      SetDisableDecalRenderingThisFrame();
    }
    getIsPetrolDecalInRange(e, t, r, n) {
      return GetIsPetrolDecalInRange(e, t, r, n);
    }
    patchDecalDiffuseMap(e, t, r) {
      PatchDecalDiffuseMap(e, t, r);
    }
    unpatchDecalDiffuseMap(e) {
      UnpatchDecalDiffuseMap(e);
    }
    moveVehicleDecals(e, t) {
      MoveVehicleDecals(e, t);
    }
    removeVehicleCrewEmblem(e, t) {
      RemoveVehicleCrewEmblem(e, t);
    }
    getVehicleCrewEmblemRequestState(e, t) {
      return GetVehicleCrewEmblemRequestState(e, t);
    }
    doesVehicleHaveCrewEmblem(e, t) {
      return DoesVehicleHaveCrewEmblem(e, t);
    }
    overrideInteriorSmokeName(e) {
      OverrideInteriorSmokeName(e);
    }
    overrideInteriorSmokeLevel(e) {
      OverrideInteriorSmokeLevel(e);
    }
    overrideInteriorSmokeEnd() {
      OverrideInteriorSmokeEnd();
    }
    disableVehicleDistantlights(e) {
      DisableVehicleDistantlights(e);
    }
    presetInteriorAmbientCache(e) {
      PresetInteriorAmbientCache(e);
    }
    setTimecycleModifier(e) {
      SetTimecycleModifier(e);
    }
    setTimecycleModifierStrength(e) {
      SetTimecycleModifierStrength(e);
    }
    setTransitionTimecycleModifier(e, t) {
      SetTransitionTimecycleModifier(e, t);
    }
    clearTimecycleModifier() {
      ClearTimecycleModifier();
    }
    getTimecycleModifierIndex() {
      return GetTimecycleModifierIndex();
    }
    getTimecycleTransitionModifierIndex() {
      return GetTimecycleTransitionModifierIndex();
    }
    pushTimecycleModifier() {
      PushTimecycleModifier();
    }
    popTimecycleModifier() {
      PopTimecycleModifier();
    }
    setCurrentPlayerTcmodifier(e) {
      SetCurrentPlayerTcmodifier(e);
    }
    setPlayerTcmodifierTransition(e) {
      SetPlayerTcmodifierTransition(e);
    }
    setNextPlayerTcmodifier(e) {
      SetNextPlayerTcmodifier(e);
    }
    addTcmodifierOverride(e, t) {
      AddTcmodifierOverride(e, t);
    }
    hasScaleformMovieFilenameLoaded(e) {
      return HasScaleformMovieFilenameLoaded(e);
    }
    hasScaleformContainerMovieLoadedIntoParent(e) {
      return HasScaleformContainerMovieLoadedIntoParent(e);
    }
    setScaleformMovieToUseSystemTime(e, t) {
      SetScaleformMovieToUseSystemTime(e, t);
    }
    drawScaleformMovieFullscreenMasked(e, t, r, n, i, a) {
      DrawScaleformMovieFullscreenMasked(e, t, r, n, i, a);
    }
    callScaleformMovieMethod(e, t) {
      CallScaleformMovieMethod(e, t);
    }
    beginScaleformScriptHudMovieMethod(e, t) {
      return BeginScaleformScriptHudMovieMethod(e, t);
    }
    beginScaleformMovieMethod(e, t) {
      return BeginScaleformMovieMethod(e, t);
    }
    beginScaleformMovieMethodOnFrontend(e) {
      return BeginScaleformMovieMethodOnFrontend(e);
    }
    beginScaleformMovieMethodOnFrontendHeader(e) {
      return BeginScaleformMovieMethodOnFrontendHeader(e);
    }
    endScaleformMovieMethod() {
      EndScaleformMovieMethod();
    }
    endScaleformMovieMethodReturnValue() {
      return EndScaleformMovieMethodReturnValue();
    }
    isScaleformMovieMethodReturnValueReady(e) {
      return IsScaleformMovieMethodReturnValueReady(e);
    }
    getScaleformMovieMethodReturnValueInt(e) {
      return GetScaleformMovieMethodReturnValueInt(e);
    }
    getScaleformMovieMethodReturnValueBool(e) {
      return GetScaleformMovieMethodReturnValueBool(e);
    }
    getScaleformMovieMethodReturnValueString(e) {
      return GetScaleformMovieMethodReturnValueString(e);
    }
    scaleformMovieMethodAddParamInt(e) {
      ScaleformMovieMethodAddParamInt(e);
    }
    scaleformMovieMethodAddParamFloat(e) {
      ScaleformMovieMethodAddParamFloat(e);
    }
    scaleformMovieMethodAddParamBool(e) {
      ScaleformMovieMethodAddParamBool(e);
    }
    beginTextCommandScaleformString(e) {
      BeginTextCommandScaleformString(e);
    }
    endTextCommandScaleformString() {
      EndTextCommandScaleformString();
    }
    scaleformMovieMethodAddParamTextureNameString(e) {
      ScaleformMovieMethodAddParamTextureNameString(e);
    }
    scaleformMovieMethodAddParamPlayerNameString(e) {
      ScaleformMovieMethodAddParamPlayerNameString(e);
    }
    scaleformMovieMethodAddParamLatestBriefString(e) {
      ScaleformMovieMethodAddParamLatestBriefString(e);
    }
    requestScaleformScriptHudMovie(e) {
      RequestScaleformScriptHudMovie(e);
    }
    hasScaleformScriptHudMovieLoaded(e) {
      return HasScaleformScriptHudMovieLoaded(e);
    }
    removeScaleformScriptHudMovie(e) {
      RemoveScaleformScriptHudMovie(e);
    }
    setTvChannel(e) {
      SetTvChannel(e);
    }
    getTvChannel() {
      return GetTvChannel();
    }
    setTvVolume(e) {
      SetTvVolume(e);
    }
    getTvVolume() {
      return GetTvVolume();
    }
    setTvChannelPlaylist(e, t, r) {
      SetTvChannelPlaylist(e, t, r);
    }
    setTvChannelPlaylistAtHour(e, t, r) {
      SetTvChannelPlaylistAtHour(e, t, r);
    }
    clearTvChannelPlaylist(e) {
      ClearTvChannelPlaylist(e);
    }
    enableMovieKeyframeWait(e) {
      EnableMovieKeyframeWait(e);
    }
    enableMovieSubtitles(e) {
      EnableMovieSubtitles(e);
    }
    terraingridActivate(e) {
      TerraingridActivate(e);
    }
    animpostfxPlay(e, t, r) {
      AnimpostfxPlay(e, t, r);
    }
    animpostfxStop(e) {
      AnimpostfxStop(e);
    }
    animpostfxIsRunning(e) {
      return AnimpostfxIsRunning(e);
    }
    animpostfxStopAll() {
      AnimpostfxStopAll();
    }
    togglePlayerDamageOverlay(e) {
      TogglePlayerDamageOverlay(e);
    }
    doesLatestBriefStringExist(e) {
      return DoesLatestBriefStringExist(e);
    }
    setParticleFxBloodScale(e) {
      SetParticleFxBloodScale(e);
    }
    setScreenDrawPosition(e, t) {
      SetScreenDrawPosition(e, t);
    }
    getScreenActiveResolution() {
      const e = GetActiveScreenResolution();
      return {
        x: e[0],
        y: e[1]
      };
    }
    getActiveScreenResolution() {
      const e = GetActiveScreenResolution();
      return {
        x: e[0],
        y: e[1]
      };
    }
    getScriptGfxPosition(e, t) {
      const r = GetScriptGfxPosition(e, t);
      return {
        calculatedX: r?.[0],
        calculatedY: r?.[1]
      };
    }
    setBlackout(e) {
      SetBlackout(e);
    }
    setFarShadowsSuppressed(e) {
      SetFarShadowsSuppressed(e);
    }
    transitionToBlurred(e) {
      return TransitionToBlurred(e);
    }
    transitionFromBlurred(e) {
      return TransitionFromBlurred(e);
    }
    setFrozenRenderingDisabled(e) {
      SetFrozenRenderingDisabled(e);
    }
    setHidofEnvBlurParams(e, t, r, n, i, a) {
      SetHidofEnvBlurParams(e, t, r, n, i, a);
    }
    drawLightWithRangeAndShadow(e, t, r, n, i, a, o, s, l) {
      DrawLightWithRangeAndShadow(e, t, r, n, i, a, o, s, l);
    }
    drawLightWithRange(e, t, r, n, i, a, o, s) {
      DrawLightWithRange(e, t, r, n, i, a, o, s);
    }
    setLightsState(e, t) {
      SetLightsState(e, t);
    }
    resetLightsState() {
      ResetLightsState();
    }
    getLightsState(e) {
      return GetLightsState(e);
    }
    drawDebugLineWithTwoColours(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      DrawDebugLineWithTwoColours(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    drawDebugText2D(e, t, r, n, i, a, o, s) {
      DrawDebugText_2d(e, t, r, n, i, a, o, s);
    }
    drawPoly(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      DrawPoly(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    drawSpritePoly(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I) {
      DrawSpritePoly(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I);
    }
    drawSpritePoly2(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I, E, k, f, D, F, N, b, x) {
      DrawSpritePoly_2(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I, E, k, f, D, F, N, b, x);
    }
    drawSphere(e, t, r, n, i, a, o, s) {
      DrawSphere(e, t, r, n, i, a, o, s);
    }
    drawMarker(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I) {
      DrawMarker(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C ?? false, y ?? false, P ?? 2, A ?? false, T ?? null, v ?? null, I ?? false);
    }
    drawMarker2(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I, E, k) {
      DrawMarker_2(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P, A, T, v, I, E);
    }
    createCheckpoint(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return CreateCheckpoint(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    setCheckpointScale(e, t) {
      SetCheckpointScale(e, t);
    }
    setCheckpointIconScale(e, t) {
      SetCheckpointIconScale(e, t);
    }
    drawInteractiveSprite(e, t, r, n, i, a, o, s, l, d, c) {
      DrawInteractiveSprite(e, t, r, n, i, a, o ?? 0, s, l, d, c ?? 255);
    }
    drawSpriteUv(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      DrawSpriteUv(e, t, r, n, i, a, o, s, l, d, c ?? 0, u, h, p, m ?? 255);
    }
    loadMissionCreatorPhoto(e, t, r) {
      return LoadMissionCreatorPhoto(e, t, r);
    }
    getStatusOfLoadMissionCreatorPhoto(e) {
      const t = GetStatusOfLoadMissionCreatorPhoto(e);
      return {
        p0: t?.[1] ?? t?.[0],
        result: t?.[0]
      };
    }
    returnTwo(e) {
      return ReturnTwo(e);
    }
    setBinkMovieUnk2(e, t) {
      SetBinkMovieUnk_2(e, t);
    }
    overridePedBadgeTexture(e, t, r) {
      return OverridePedBadgeTexture(e, t, r);
    }
    setNumberPlateTexture(e, t, r, n) {
      SetNumberPlateTexture(e, t, r, n);
    }
    set2dLayer(e) {
      Set_2dLayer(e);
    }
    registerTextFontId(e) {
      return RegisterFontId(e);
    }
    grassLodShrinkScriptAreas(e, t, r, n, i, a, o) {
      GrassLodShrinkScriptAreas(e, t, r, n, i, a, o);
    }
    grassLodResetScriptAreas() {
      GrassLodResetScriptAreas();
    }
    golfTrailSetColour(e, t, r, n, i, a, o, s, l, d, c, u) {
      GolfTrailSetColour(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    golfTrailSetFixedControlPoint(e, t, r, n, i, a, o, s, l) {
      GolfTrailSetFixedControlPoint(e, t, r, n, i, a, o, s, l);
    }
    seethroughSetFadeStartDistance(e) {
      SeethroughSetFadeStartDistance(e);
    }
    seethroughSetFadeEndDistance(e) {
      SeethroughSetFadeEndDistance(e);
    }
    seethroughSetNoiseAmountMin(e) {
      SeethroughSetNoiseAmountMin(e);
    }
    seethroughSetNoiseAmountMax(e) {
      SeethroughSetNoiseAmountMax(e);
    }
    seethroughSetHiLightIntensity(e) {
      SeethroughSetHiLightIntensity(e);
    }
    seethroughSetHiLightNoise(e) {
      SeethroughSetHiLightNoise(e);
    }
    setParticleFxLoopedRange(e, t) {
      SetParticleFxLoopedRange(e, t);
    }
    setPtfxAssetNextCall(e) {
      SetPtfxAssetNextCall(e);
    }
    setPtfxAssetOldToNew(e, t) {
      SetParticleFxAssetOldToNew(e, t);
    }
    startParticleFxNonLoopedAtCoord2(e, t, r, n, i, a, o, s, l, d, c) {
      return StartParticleFxNonLoopedAtCoord_2(e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? 1, l ?? false, d ?? false, c ?? false);
    }
    startParticleFxNonLoopedOnPedBone2(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartParticleFxNonLoopedOnPedBone_2(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startParticleFxNonLoopedOnEntity2(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartParticleFxNonLoopedOnEntity_2(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l ?? 1, d ?? false, c ?? false, u ?? false);
    }
    startParticleFxLoopedOnEntityBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartParticleFxLoopedOnEntityBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startParticleFxLoopedOnEntity2(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartParticleFxLoopedOnEntity_2(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l ?? 1, d ?? false, c ?? false, u ?? false);
    }
    startParticleFxLoopedOnEntityBone2(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartParticleFxLoopedOnEntityBone_2(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startNetworkedParticleFxNonLoopedAtCoord(e, t, r, n, i, a, o, s, l, d, c) {
      return StartNetworkedParticleFxNonLoopedAtCoord(e, t, r, n, i ?? 0, a ?? 0, o ?? 0, s ?? 1, l ?? false, d ?? false, c ?? false);
    }
    startParticleFxNonLoopedOnPedBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartParticleFxNonLoopedOnPedBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startNetworkedParticleFxNonLoopedOnPedBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartNetworkedParticleFxNonLoopedOnPedBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startNetworkedParticleFxNonLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartNetworkedParticleFxNonLoopedOnEntity(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l ?? 1, d ?? false, c ?? false, u ?? false);
    }
    startNetworkedParticleFxNonLoopedOnEntityBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartNetworkedParticleFxNonLoopedOnEntityBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startParticleFxLoopedOnPedBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartParticleFxLoopedOnPedBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    startNetworkedParticleFxLoopedOnEntity(e, t, r, n, i, a, o, s, l, d, c, u) {
      return StartNetworkedParticleFxLoopedOnEntity(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l ?? 1, d ?? false, c ?? false, u ?? false);
    }
    startNetworkedParticleFxLoopedOnEntityBone(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      return StartNetworkedParticleFxLoopedOnEntityBone(e, t, r ?? 0, n ?? 0, i ?? 0, a ?? 0, o ?? 0, s ?? 0, l, d ?? 1, c ?? false, u ?? false, h ?? false);
    }
    addDecal(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C, y, P) {
      return AddDecal(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m, g, S, C ?? false, y ?? false, P ?? false);
    }
    addVehicleCrewEmblem(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m) {
      return AddVehicleCrewEmblem(e, t, r, n, i, a, o, s, l, d, c, u, h, p, m);
    }
    registerNoirScreenEffectThisFrame() {
      RegisterNoirScreenEffectThisFrame();
    }
    setForcePedFootstepsTracks(e) {
      SetForcePedFootstepsTracks(e);
    }
    setForceVehicleTrails(e) {
      SetForceVehicleTrails(e);
    }
    disableScriptAmbientEffects(e) {
      DisableScriptAmbientEffects(e);
    }
    removeTcmodifierOverride(e) {
      RemoveTcmodifierOverride(e);
    }
    setExtraTimecycleModifier(e) {
      SetExtraTimecycleModifier(e);
    }
    clearExtraTimecycleModifier() {
      ClearExtraTimecycleModifier();
    }
    getExtraTimecycleModifierIndex() {
      return GetExtraTimecycleModifierIndex();
    }
    setExtraTimecycleModifierStrength(e) {
      SetExtraTimecycleModifierStrength(e);
    }
    resetExtraTimecycleModifierStrength() {
      ResetExtraTimecycleModifierStrength();
    }
    requestScaleformMovie2(e) {
      return RequestScaleformMovie_2(e);
    }
    requestScaleformMovie3(e) {
      return RequestScaleformMovie3(e);
    }
    requestScaleformMovieInteractive(e) {
      return RequestScaleformMovieInteractive(e);
    }
    hasNamedScaleformMovieLoaded(e) {
      return HasNamedScaleformMovieLoaded(e);
    }
    setScaleformFitRendertarget(e, t) {
      SetScaleformFitRendertarget(e, t);
    }
    drawScaleformMovie3D(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      DrawScaleformMovie_3d(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    drawScaleformMovie3DNonAdditive(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      DrawScaleformMovie_3dNonAdditive(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    drawScaleformMovie3DSolid(e, t, r, n, i, a, o, s, l, d, c, u, h, p) {
      DrawScaleformMovie_3dSolid(e, t, r, n, i, a, o, s, l, d, c, u, h, p);
    }
    callScaleformMovieMethodWithNumber(e, t, r, n, i, a, o) {
      CallScaleformMovieMethodWithNumber(e, t, r, n, i, a, o);
    }
    callScaleformMovieMethodWithString(e, t, r, n, i, a, o) {
      CallScaleformMovieMethodWithString(e, t, r, n, i, a, o);
    }
    callScaleformMovieMethodWithNumberAndString(e, t, r, n, i, a, o, s, l, d, c, u) {
      CallScaleformMovieMethodWithNumberAndString(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    callScaleformMovieFunctionFloatParams(e, t, r, n, i, a, o) {
      CallScaleformMovieFunctionFloatParams(e, t, r, n, i, a, o);
    }
    callScaleformMovieFunctionStringParams(e, t, r, n, i, a, o) {
      CallScaleformMovieFunctionStringParams(e, t, r, n, i, a, o);
    }
    callScaleformMovieFunctionMixedParams(e, t, r, n, i, a, o, s, l, d, c, u) {
      CallScaleformMovieFunctionMixedParams(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    beginScaleformHudMovieMethod(e, t) {
      return BeginScaleformMovieMethod(e, t);
    }
    pushScaleformMovieFunctionFromHudComponent(e, t) {
      return PushScaleformMovieFunctionFromHudComponent(e, t);
    }
    pushScaleformMovieFunctionN(e) {
      return BeginScaleformMovieMethodN(e);
    }
    beginTextComponent(e) {
      BeginTextCommandScaleformString(e);
    }
    endTextComponent() {
      EndTextCommandScaleformString();
    }
    endTextCommandScaleformString2() {
      EndTextCommandScaleformString_2();
    }
    scaleformMovieMethodAddParamTextureNameString2(e) {
      ScaleformMovieMethodAddParamTextureNameString_2(e);
    }
    sittingTv(e) {
      return SittingTv(e);
    }
    requestHudScaleform(e) {
      RequestHudScaleform(e);
    }
    hasHudScaleformLoaded(e) {
      return HasHudScaleformLoaded(e);
    }
    loadTvChannel(e) {
      return LoadTvChannel(e);
    }
    drawTvChannel(e, t, r, n, i, a, o, s, l) {
      DrawTvChannel(e, t, r, n, i, a, o, s, l);
    }
    isPlaylistUnk(e, t) {
      return IsPlaylistUnk(e, t);
    }
    isTvPlaylistItemPlaying(e) {
      return IsTvPlaylistItemPlaying(e);
    }
    ui3DsceneIsAvailable() {
      return Ui3dsceneIsAvailable();
    }
    ui3DscenePushPreset(e) {
      return Ui3dscenePushPreset(e);
    }
    terraingridSetParams(e, t, r, n, i, a, o, s, l, d, c, u, h) {
      TerraingridSetParams(e, t, r, n, i, a, o, s, l, d, c, u, h);
    }
    terraingridSetColours(e, t, r, n, i, a, o, s, l, d, c, u) {
      TerraingridSetColours(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    animpostfxGetUnk(e) {
      return AnimpostfxGetUnk(e);
    }
    animpostfxStopAndDoUnk(e) {
      AnimpostfxStopAndDoUnk(e);
    }
    startScreenEffect(e, t, r) {
      AnimpostfxPlay(e, t ?? 0, r ?? false);
    }
    stopScreenEffect(e) {
      AnimpostfxStop(e);
    }
    getScreenEffectIsActive(e) {
      return AnimpostfxIsRunning(e);
    }
    stopAllScreenEffects() {
      AnimpostfxStopAll();
    }
    createWorldTextureSwap(e, t, r, n) {
      AddReplaceTexture(e, t, r, n);
    }
    removeWorldTextureSwap(e, t) {
      RemoveReplaceTexture(e, t);
    }
    resetWorldTextureSwaps() {}
    setEntityOverlayPassEnabled(e) {
      SetEntityOverlayPassEnabled(e);
    }
    createEntityOverlayBatch(e) {
      const t = typeof CreateEntityOverlayBatch == "function" ? CreateEntityOverlayBatch(e) : 0;
      return {
        handle: t,
        update: e => {
          if (typeof UpdateEntityOverlayBatch == "function") {
            UpdateEntityOverlayBatch(t, e);
          }
        },
        destroy: () => {
          if (typeof DestroyEntityOverlayBatch == "function") {
            DestroyEntityOverlayBatch(t);
          }
        },
        addEntity: e => {
          if (typeof AddEntityToOverlayBatch == "function") {
            AddEntityToOverlayBatch(t, e);
          }
        },
        removeEntity: e => {
          if (typeof RemoveEntityFromOverlayBatch == "function") {
            RemoveEntityFromOverlayBatch(t, e);
          }
        },
        addThisFrame: e => {}
      };
    }
    world3dToScreen2d(e, t, r) {
      let n;
      let i;
      let a;
      if (e != null && typeof e == "object") {
        n = +(e.x ?? e[0] ?? 0) || 0;
        i = +(e.y ?? e[1] ?? 0) || 0;
        a = +(e.z ?? e[2] ?? 0) || 0;
      } else {
        n = +e || 0;
        i = +t || 0;
        a = +r || 0;
      }
      const o = GetScreenCoordFromWorldCoord(n, i, a);
      if (o?.[0]) {
        return {
          x: o[1],
          y: o[2]
        };
      }
    }
    drawText(e, t, r) {
      if (!e) {
        return;
      }
      const n = r ?? {};
      const i = t?.x ?? t?.[0] ?? 0;
      const a = t?.y ?? t?.[1] ?? 0;
      const o = t?.z ?? t?.[2];
      const s = o != null && Number.isFinite(Number(o));
      let l = i;
      let d = a;
      if (s) {
        const e = this.world3dToScreen2d(i, a, Number(o));
        if (!e) {
          return;
        }
        l = e.x;
        d = e.y;
      }
      const c = s ? n.centre !== false : !!n.centre;
      SetTextFont(n.font ?? 0);
      const u = n.scale ?? [0, 0.35];
      SetTextScale(u[0] ?? 0, u[1] ?? 0.35);
      if (n.color) {
        SetTextColour(n.color[0] ?? 255, n.color[1] ?? 255, n.color[2] ?? 255, n.color[3] ?? 255);
      }
      if (n.outline) {
        SetTextOutline();
      }
      if (c) {
        SetTextCentre(true);
      }
      BeginTextCommandDisplayText("STRING");
      AddTextComponentSubstringPlayerName(e);
      EndTextCommandDisplayText(l, d);
      if (c) {
        SetTextCentre(false);
      }
    }
    notify(e) {
      BeginTextCommandThefeedPost("STRING");
      AddTextComponentSubstringPlayerName(e);
      EndTextCommandThefeedPostTicker(false, true);
    }
    requestStreamedTextureDictAsync(e, t) {
      return qa(e => RequestStreamedTextureDict(e, false), e => HasStreamedTextureDictLoaded(e), e, t ?? 5000);
    }
    waitForScriptHudScaleformMovieLoadAsync(e, t) {
      return qa(e => RequestScaleformScriptHudMovie(e), e => HasScaleformScriptHudMovieLoaded(e), e, t ?? 5000);
    }
    waitForScaleformMovieLoadAsync(e, t) {
      return qa(() => {}, e => HasScaleformMovieLoaded(e), e, t ?? 5000);
    }
  }
  class yo {
    constructor() {
      this.unk = ja();
    }
    statSetInt(e, t, r) {
      StatSetInt(e, t, r ?? true);
    }
    statSetFloat(e, t, r) {
      StatSetFloat(e, t, r ?? true);
    }
    statSetBool(e, t, r) {
      StatSetBool(e, t, r ?? true);
    }
    statSetString(e, t, r) {
      StatSetString(e, t, r ?? true);
    }
    statGetInt(e) {
      const [, t] = StatGetInt(e, 0);
      return t;
    }
    statGetFloat(e) {
      const [, t] = StatGetFloat(e, 0);
      return t;
    }
    statGetBool(e) {
      const [, t] = StatGetBool(e, 0);
      return t;
    }
    statGetString(e) {
      return StatGetString(e, -1);
    }
    playstatsNpcInvite() {
      return PlaystatsNpcInvite();
    }
    playstatsAwardXp(e, t, r) {
      PlaystatsAwardXp(e, t, r);
    }
    playstatsRankUp(e) {
      PlaystatsRankUp(e);
    }
    playstatsMissionStarted(e, t, r) {
      return PlaystatsMissionStarted(e, t, r);
    }
    playstatsMissionOver(e, t, r, n, i, a) {
      return PlaystatsMissionOver(e, t, r, n, i);
    }
    playstatsMissionCheckpoint(e, t, r, n) {
      return PlaystatsMissionCheckpoint(e, t, r);
    }
    playstatsRaceCheckpoint(e, t, r, n, i) {
      PlaystatsRaceCheckpoint(e, t, r, n, i);
    }
    playstatsMatchStarted(e, t, r, n, i, a, o) {
      PlaystatsMatchStarted(e, t, r, n, i, a, o);
    }
    playstatsShopItem(e, t, r, n, i) {
      PlaystatsShopItem(e, t, r, n, i);
    }
    playstatsWebsiteVisited(e, t) {
      PlaystatsWebsiteVisited(e, t);
    }
    playstatsFriendActivity(e, t) {
      PlaystatsFriendActivity(e, t);
    }
    playstatsOddjobDone(e, t, r) {
      PlaystatsOddjobDone(e, t, r);
    }
    playstatsPropChange(e, t, r, n) {
      PlaystatsPropChange(e, t, r, n);
    }
    playstatsClothChange(e, t, r, n, i) {
      PlaystatsClothChange(e, t, r, n, i);
    }
    playstatsCheatApplied(e) {
      PlaystatsCheatApplied(e);
    }
    statClearSlotForReload(e) {
      return StatClearSlotForReload(e);
    }
    statLoad(e) {
      return StatLoad(e);
    }
    statSave(e, t, r) {
      return StatSave(e, t, r);
    }
    statLoadPending(e) {
      return StatLoadPending(e);
    }
    statSavePending() {
      return StatSavePending();
    }
    statSavePendingOrRequested() {
      return StatSavePendingOrRequested();
    }
    statDeleteSlot(e) {
      return StatDeleteSlot(e);
    }
    statSlotIsLoaded(e) {
      return StatSlotIsLoaded(e);
    }
    statSetBlockSaves(e) {
      StatSetBlockSaves(e);
    }
    statSetGxtLabel(e, t, r) {
      return StatSetGxtLabel(e, t, r);
    }
    statSetDate(e, t, r) {
      const [, n] = StatSetDate(e, t, r);
      return n;
    }
    statSetPos(e, t, r, n, i) {
      return StatSetPos(e, t, r, n, i);
    }
    statSetMaskedInt(e, t, r, n, i) {
      return StatSetMaskedInt(e, t, r, n, i);
    }
    statSetUserId(e, t, r) {
      return StatSetUserId(e, t, r);
    }
    statSetCurrentPosixTime(e, t) {
      return StatSetCurrentPosixTime(e, t);
    }
    statGetDate(e, t, r) {
      const [, n] = StatGetDate(e, t, r);
      return n;
    }
    statGetPos(e) {
      const t = StatGetPos(e, 0);
      return {
        p1: t[1],
        p2: t[2],
        p3: t[3],
        result: !!t[0]
      };
    }
    statGetMaskedInt(e, t, r) {
      const [, n] = StatGetMaskedInt(e, 0, t, r);
      return n;
    }
    statGetUserId(e) {
      return StatGetUserId(e);
    }
    statGetLicensePlate(e) {
      return StatGetLicensePlate(e);
    }
    statSetLicensePlate(e, t) {
      return StatSetLicensePlate(e, t);
    }
    statIncrement(e, t) {
      StatIncrement(e, t);
    }
    statGetNumberOfDays(e) {
      return StatGetNumberOfDays(e);
    }
    statGetNumberOfHours(e) {
      return StatGetNumberOfHours(e);
    }
    statGetNumberOfMinutes(e) {
      return StatGetNumberOfMinutes(e);
    }
    statGetNumberOfSeconds(e) {
      return StatGetNumberOfSeconds(e);
    }
    statSetProfileSettingValue(e, t) {
      StatSetProfileSettingValue(e, t);
    }
    getPackedIntStatKey(e, t, r, n) {
      return GetPackedIntStatKey(e, t, r, n);
    }
    getPackedTuIntStatKey(e, t, r, n) {
      return GetPackedTuIntStatKey(e, t, r, n);
    }
    leaderboardsGetNumberOfColumns(e, t) {
      return LeaderboardsGetNumberOfColumns(e, t);
    }
    leaderboardsGetColumnId(e, t, r) {
      return LeaderboardsGetColumnId(e, t, r);
    }
    leaderboardsGetColumnType(e, t, r) {
      return LeaderboardsGetColumnType(e, t, r);
    }
    leaderboardsReadClearAll() {
      return LeaderboardsReadClearAll();
    }
    leaderboardsReadClear(e, t, r) {
      return LeaderboardsReadClear(e, t, r);
    }
    leaderboardsReadPending(e, t, r) {
      return LeaderboardsReadPending(e, t, r);
    }
    leaderboardsReadAnyPending() {
      return LeaderboardsReadAnyPending();
    }
    leaderboardsReadSuccessful(e, t, r) {
      return LeaderboardsReadSuccessful(e, t, r);
    }
    leaderboards2ReadByRank(e, t) {
      const [, r] = Leaderboards2ReadByRank(e, t);
      return r;
    }
    leaderboards2ReadByScoreInt(e, t) {
      const [, r] = Leaderboards2ReadByScoreInt(e, t);
      return r;
    }
    leaderboards2ReadByScoreFloat(e, t) {
      const [, r] = Leaderboards2ReadByScoreFloat(e, t);
      return r;
    }
    leaderboards2WriteData(e) {
      const [, t] = Leaderboards2WriteData(e);
      return t;
    }
    leaderboardsWriteAddColumn(e, t, r) {
      LeaderboardsWriteAddColumn(e, t, r);
    }
    leaderboardsWriteAddColumnLong(e, t, r) {
      LeaderboardsWriteAddColumnLong(e, t, r);
    }
    leaderboardsCacheDataRow(e) {
      const [, t] = LeaderboardsCacheDataRow(e);
      return t;
    }
    leaderboardsClearCacheData() {
      LeaderboardsClearCacheData();
    }
    leaderboardsGetCacheExists(e) {
      return LeaderboardsGetCacheExists(e);
    }
    leaderboardsGetCacheTime(e) {
      return LeaderboardsGetCacheTime(e);
    }
    leaderboardsGetCacheNumberOfRows(e) {
      return LeaderboardsGetCacheNumberOfRows(e);
    }
    leaderboardsGetCacheDataRow(e, t) {
      const [, r] = LeaderboardsGetCacheDataRow(e, t, 0);
      return r;
    }
    setProfileSettingPrologueComplete() {
      SetProfileSettingPrologueComplete();
    }
    statSetCheatIsActive() {
      StatSetCheatIsActive();
    }
    statGetCancelSaveMigrationStatus() {
      return StatGetCancelSaveMigrationStatus();
    }
    hiredLimo(e, t) {
      HiredLimo(e, t);
    }
    statSetProfileSetting(e, t) {
      StatSetProfileSetting(e, t);
    }
    statGetPackedBoolMask(e) {
      return StatGetPackedBoolMask(e);
    }
    statGetPackedIntMask(e) {
      return StatGetPackedIntMask(e);
    }
    getPackedBoolStatKey(e, t, r, n) {
      return GetPackedBoolStatKey(e, t, r, n);
    }
    getPackedTuBoolStatKey(e, t, r, n) {
      return GetPackedTuBoolStatKey(e, t, r, n);
    }
    getNgstatBoolHash(e, t, r, n, i) {
      return GetNgstatBoolHash(e, t, r, n, i);
    }
    getNgstatIntHash(e, t, r, n, i) {
      return GetNgstatIntHash(e, t, r, n, i);
    }
    statGetBoolMasked(e, t, r) {
      return StatGetBoolMasked(e, t, r);
    }
    statSetBoolMasked(e, t, r, n) {
      return StatSetBoolMasked(e, t, r, n);
    }
    playBackgroundScriptAction(e, t) {
      PlaystatsBackgroundScriptAction(e, t);
    }
    playNpcInvite() {
      return PlaystatsNpcInvite();
    }
    playAwardXp(e, t, r) {
      PlaystatsAwardXp(e, t, r);
    }
    playRankUp(e) {
      PlaystatsRankUp(e);
    }
    playStartOfflineMode() {
      PlaystatsStartOfflineMode();
    }
    playActivityDone(e, t) {
      PlaystatsActivityDone(e, t);
    }
    playLeaveJobChain(e, t, r, n, i) {
      PlaystatsLeaveJobChain(e, t, r, n, i);
    }
    playMissionStarted(e, t, r) {
      return PlaystatsMissionStarted(e, t, r);
    }
    playMissionOver(e, t, r, n, i) {
      return PlaystatsMissionOver(e, t, r, n, i);
    }
    playMissionCheckpoint(e, t, r) {
      return PlaystatsMissionCheckpoint(e, t, r);
    }
    playRandomMissionDone(e, t, r, n) {
      PlaystatsRandomMissionDone(e, t, r, n);
    }
    playRosBet(e, t, r, n) {
      PlaystatsRosBet(e, t, r, n);
    }
    playRaceCheckpoint(e, t, r, n, i) {
      PlaystatsRaceCheckpoint(e, t, r, n, i);
    }
    playMatchStarted(e, t, r, n, i, a, o) {
      PlaystatsMatchStarted(e, t, r, n, i, a, o);
    }
    playShopItem(e, t, r, n, i) {
      PlaystatsShopItem(e, t, r, n, i);
    }
    playCrateDropMissionDone(e, t, r, n, i, a) {
      PlaystatsCrateDropMissionDone(e, t, r, n, i, a);
    }
    playCrateCreatedMissionDone(e, t, r) {
      PlaystatsCrateCreatedMissionDone(e, t, r);
    }
    playHoldUpMissionDone(e, t, r, n) {
      PlaystatsHoldUpMissionDone(e, t, r, n);
    }
    playImportExportMissionDone(e, t, r, n) {
      PlaystatsImportExportMissionDone(e, t, r, n);
    }
    playRaceToPointMissionDone(e, t, r, n, i, a, o, s, l, d) {
      PlaystatsRaceToPointMissionDone(e, t, r, n, i, a, o, s, l, d);
    }
    playAcquiredHiddenPackage(e) {
      PlaystatsAcquiredHiddenPackage(e);
    }
    playWebsiteVisited(e, t) {
      PlaystatsWebsiteVisited(e, t);
    }
    playFriendActivity(e, t) {
      PlaystatsFriendActivity(e, t);
    }
    playOddjobDone(e, t, r) {
      PlaystatsOddjobDone(e, t, r);
    }
    playPropChange(e, t, r, n) {
      PlaystatsPropChange(e, t, r, n);
    }
    playClothChange(e, t, r, n, i) {
      PlaystatsClothChange(e, t, r, n, i);
    }
    playWeaponModeChange(e, t, r) {
      PlaystatsWeaponModeChange(e, t, r);
    }
    playCheatApplied(e) {
      PlaystatsCheatApplied(e);
    }
    playQuickfixTool(e, t) {
      PlaystatsQuickfixTool(e, t);
    }
    playIdleKick(e) {
      PlaystatsIdleKick(e);
    }
    playHeistSaveCheat(e, t) {
      PlaystatsHeistSaveCheat(e, t);
    }
    playDirectorMode() {
      return PlaystatsDirectorMode();
    }
    playAwardBadsport(e) {
      PlaystatsAwardBadsport(e);
    }
    playPegasaircraft(e) {
      PlaystatsPegasaircraft(e);
    }
    playPiMenuHideSettings() {
      return PlaystatsPiMenuHideSettings();
    }
    updateStatInt(e, t, r) {
      UpdateStatInt(e, t, r);
    }
    updateStatFloat(e, t, r) {
      UpdateStatFloat(e, t, r);
    }
    leaderboards2WriteDataForEventType() {
      return Leaderboards2WriteDataForEventType();
    }
    statMigrateSave(e) {
      return StatMigrateSave(e);
    }
    statSaveMigrationStatusStart() {
      return StatSaveMigrationStatusStart();
    }
    statGetSaveMigrationStatus(e) {
      return StatGetSaveMigrationStatus(e);
    }
    statSaveMigrationCancel() {
      return StatSaveMigrationCancel();
    }
    statSaveMigrationConsumeContentUnlock(e, t, r) {
      return StatSaveMigrationConsumeContentUnlock(e, t, r);
    }
    statGetSaveMigrationConsumeContentUnlockStatus() {
      return StatGetSaveMigrationConsumeContentStatus();
    }
    setHasContentUnlocksFlags(e) {
      SetHasContentUnlocksFlags(e);
    }
    setSaveMigrationTransactionId(e) {
      SetSaveMigrationTransactionId(e);
    }
    playSpentPiCustomLoadout(e) {
      PlaystatsSpentPiCustomLoadout(e);
    }
    playBuyContraband() {
      return PlaystatsBuyContraband();
    }
    playSellContraband() {
      return PlaystatsSellContraband();
    }
    playDefendContraband() {
      return PlaystatsDefendContraband();
    }
    playRecoverContraband() {
      return PlaystatsRecoverContraband();
    }
    orderedBossVehicle(e, t, r) {
      OrderedBossVehicle(e, t, r);
    }
    playStuntPerformedEventAllowTrigger() {
      PlaystatsStuntPerformedEventAllowTrigger();
    }
    playStuntPerformedEventDisallowTrigger() {
      PlaystatsStuntPerformedEventDisallowTrigger();
    }
    playChangeMcEmblem(e, t, r, n, i) {
      PlaystatsChangeMcEmblem(e, t, r, n, i);
    }
    playEarnedMcPoints(e, t, r, n, i, a) {
      PlaystatsEarnedMcPoints(e, t, r, n, i, a);
    }
    playCopyRankIntoNewSlot(e, t, r, n, i, a, o) {
      PlaystatsCopyRankIntoNewSlot(e, t, r, n, i, a, o);
    }
    playDupeDetection() {
      return PlaystatsDupeDetection();
    }
    playBanAlert(e) {
      PlaystatsBanAlert(e);
    }
    playGunrunMissionEnded() {
      return PlaystatsGunrunMissionEnded();
    }
    playStoneHatchetEnd() {
      return PlaystatsStoneHatchetEnd();
    }
    playSmugMissionEnded() {
      return PlaystatsSmugMissionEnded();
    }
    playH2FmprepEnd() {
      return PlaystatsH2FmprepEnd();
    }
    playH2InstanceEnd(e, t, r) {
      return PlaystatsH2InstanceEnd(e, t, r);
    }
    playDarMissionEnd() {
      return PlaystatsDarMissionEnd();
    }
    playEnterSessionPack() {
      return PlaystatsEnterSessionPack();
    }
    playDroneUsage(e, t, r) {
      PlaystatsDroneUsage(e, t, r);
    }
    playSpectatorWheelSpin(e, t, r, n) {
      PlaystatsSpectatorWheelSpin(e, t, r, n);
    }
    playArenaWarSpectator(e, t, r, n, i) {
      PlaystatsArenaWarSpectator(e, t, r, n, i);
    }
    playArenaWarsEnded() {
      return PlaystatsArenaWarsEnded();
    }
    playPassiveMode(e, t, r, n) {
      PlaystatsPassiveMode(e, t, r, n);
    }
    playCollectible(e, t, r, n, i, a, o, s, l, d) {
      PlaystatsCollectible(e, t, r, n, i, a, o, s, l, d);
    }
    playCasinoStoryMissionEnded(e, t) {
      PlaystatsCasinoStoryMissionEnded(e, t);
    }
    playCasinoChip(e) {
      PlaystatsCasinoChip(e);
    }
    playCasinoRoulette(e) {
      PlaystatsCasinoRoulette(e);
    }
    playCasinoBlackjack(e) {
      PlaystatsCasinoBlackjack(e);
    }
    playCasinoThreecardpoker(e) {
      PlaystatsCasinoThreecardpoker(e);
    }
    playCasinoSlotmachine(e) {
      PlaystatsCasinoSlotmachine(e);
    }
    playCasinoInsidetrack(e) {
      PlaystatsCasinoInsidetrack(e);
    }
    playCasinoLuckyseven(e) {
      PlaystatsCasinoLuckyseven(e);
    }
    playCasinoRouletteLight(e) {
      PlaystatsCasinoRouletteLight(e);
    }
    playCasinoBlackjackLight(e) {
      PlaystatsCasinoBlackjackLight(e);
    }
    playCasinoThreecardpokerLight(e) {
      PlaystatsCasinoThreecardpokerLight(e);
    }
    playCasinoSlotmachineLight(e) {
      PlaystatsCasinoSlotmachineLight(e);
    }
    playCasinoInsidetrackLight(e) {
      PlaystatsCasinoInsidetrackLight(e);
    }
    playArcadegame(e, t, r, n, i, a) {
      PlaystatsArcadegame(e, t, r, n, i, a);
    }
    playCasinoMissionEnded() {
      return PlaystatsCasinoMissionEnded();
    }
    leaderboards2ReadFriendsByRow(e, t, r, n) {
      return Leaderboards2ReadFriendsByRow(e, t, r, n);
    }
    leaderboards2ReadByHandle() {
      return Leaderboards2ReadByHandle();
    }
    leaderboards2ReadByRow(e, t, r) {
      return Leaderboards2ReadByRow(e, t, r);
    }
    leaderboards2ReadByRadius(e) {
      return Leaderboards2ReadByRadius(e);
    }
    leaderboards2ReadRankPrediction() {
      return Leaderboards2ReadRankPrediction();
    }
    leaderboards2ReadByPlatform(e, t) {
      return Leaderboards2ReadByPlaform(e, t);
    }
  }
  class Po {
    constructor() {
      this.unk = ja();
    }
    isSessionActive() {
      return NetworkIsSessionActive();
    }
    getNumConnectedPlayers() {
      return NetworkGetNumConnectedPlayers();
    }
    isPlayerActive(e) {
      return NetworkIsPlayerActive(e);
    }
    isHost() {
      return NetworkIsHost();
    }
    getEntityFromNetworkId(e) {
      return Ie(e);
    }
    doesEntityExistWithNetworkId(e) {
      return NetworkDoesEntityExistWithNetworkId(e);
    }
    requestControlOfEntity(e) {
      return NetworkRequestControlOfEntity(e);
    }
    hasControlOfEntity(e) {
      return NetworkHasControlOfEntity(e);
    }
    registerEntityAsNetworked(e) {
      NetworkRegisterEntityAsNetworked(e);
    }
    unregisterNetworkedEntity(e) {
      NetworkUnregisterNetworkedEntity(e);
    }
    getOnlineVersion() {
      return GetOnlineVersion();
    }
    refreshPlayerListStats(e) {
      return RefreshPlayerListStats(e);
    }
    getPlayerIndex() {
      return GetPlayerIndex();
    }
    participantId() {
      return ParticipantId();
    }
    participantIdToInt() {
      return ParticipantIdToInt();
    }
    vehToNet(e) {
      return VehToNet(e);
    }
    pedToNet(e) {
      return PedToNet(e);
    }
    objToNet(e) {
      return ObjToNet(e);
    }
    netToVeh(e) {
      return NetToVeh(e);
    }
    netToPed(e) {
      return NetToPed(e);
    }
    netToObj(e) {
      return NetToObj(e);
    }
    netToEnt(e) {
      return NetToEnt(e);
    }
    shutdownAndLaunchSinglePlayerGame() {
      ShutdownAndLaunchSinglePlayerGame();
    }
    shutdownAndLoadMostRecentSave() {
      return ShutdownAndLoadMostRecentSave();
    }
    removeAllStickyBombsFromEntity(e) {
      RemoveAllStickyBombsFromEntity(e);
    }
    setIdCanMigrate(e, t) {
      SetNetworkIdCanMigrate(e, t);
    }
    setIdExistsOnAllMachines(e, t) {
      SetNetworkIdExistsOnAllMachines(e, t);
    }
    setIdAlwaysExistsForPlayer(e, t, r) {
      SetNetworkIdAlwaysExistsForPlayer(e, t, r);
    }
    setIdVisibleInCutscene(e, t, r) {
      SetNetworkIdVisibleInCutscene(e, t, r);
    }
    setCutsceneEntities(e) {
      SetNetworkCutsceneEntities(e);
    }
    isIdOwnedByParticipant(e) {
      return IsNetworkIdOwnedByParticipant(e);
    }
    setLocalPlayerVisibleInCutscene(e, t) {
      SetLocalPlayerVisibleInCutscene(e, t);
    }
    setLocalPlayerInvisibleLocally(e) {
      SetLocalPlayerInvisibleLocally(e);
    }
    setLocalPlayerVisibleLocally(e) {
      SetLocalPlayerVisibleLocally(e);
    }
    setPlayerInvisibleLocally(e, t) {
      SetPlayerInvisibleLocally(e, t);
    }
    setPlayerVisibleLocally(e, t) {
      SetPlayerVisibleLocally(e, t);
    }
    fadeOutLocalPlayer(e) {
      FadeOutLocalPlayer(e);
    }
    isPlayerInCutscene(e) {
      return IsPlayerInCutscene(e);
    }
    setEntityVisibleInCutscene(e, t, r) {
      SetEntityVisibleInCutscene(e, t, r);
    }
    setEntityLocallyInvisible(e) {
      SetEntityLocallyInvisible(e);
    }
    setEntityLocallyVisible(e) {
      SetEntityLocallyVisible(e);
    }
    isDamageTrackerActiveOnPlayer(e) {
      return IsDamageTrackerActiveOnPlayer(e);
    }
    activateDamageTrackerOnPlayer(e, t) {
      ActivateDamageTrackerOnPlayer(e, t);
    }
    isSphereVisibleToAnotherMachine(e, t, r, n) {
      return IsSphereVisibleToAnotherMachine(e, t, r, n);
    }
    isSphereVisibleToPlayer(e, t, r, n, i) {
      return IsSphereVisibleToPlayer(e, t, r, n, i);
    }
    reserveMissionObjects(e) {
      ReserveNetworkMissionObjects(e);
    }
    reserveMissionPeds(e) {
      ReserveNetworkMissionPeds(e);
    }
    reserveMissionVehicles(e) {
      ReserveNetworkMissionVehicles(e);
    }
    canRegisterMissionObjects(e) {
      return CanRegisterMissionObjects(e);
    }
    canRegisterMissionPeds(e) {
      return CanRegisterMissionPeds(e);
    }
    canRegisterMissionVehicles(e) {
      return CanRegisterMissionVehicles(e);
    }
    canRegisterMissionPickups(e) {
      return CanRegisterMissionPickups(e);
    }
    canRegisterMissionEntities(e, t, r, n) {
      return CanRegisterMissionEntities(e, t, r, n);
    }
    getNumReservedMissionObjects(e) {
      return GetNumReservedMissionObjects(e);
    }
    getNumReservedMissionPeds(e) {
      return GetNumReservedMissionPeds(e);
    }
    getNumReservedMissionVehicles(e) {
      return GetNumReservedMissionVehicles(e);
    }
    getNumCreatedMissionObjects(e) {
      return GetNumCreatedMissionObjects(e);
    }
    getNumCreatedMissionPeds(e) {
      return GetNumCreatedMissionPeds(e);
    }
    getNumCreatedMissionVehicles(e) {
      return GetNumCreatedMissionVehicles(e);
    }
    getTime() {
      return GetNetworkTime();
    }
    getTimeAccurate() {
      return GetNetworkTimeAccurate();
    }
    hasTimeStarted() {
      return HasNetworkTimeStarted();
    }
    getTimeOffset(e, t) {
      return GetTimeOffset(e, t);
    }
    isTimeLessThan(e, t) {
      return IsTimeLessThan(e, t);
    }
    isTimeMoreThan(e, t) {
      return IsTimeMoreThan(e, t);
    }
    isTimeEqualTo(e, t) {
      return IsTimeEqualTo(e, t);
    }
    getTimeDifference(e, t) {
      return GetTimeDifference(e, t);
    }
    getTimeAsString(e) {
      return GetTimeAsString(e);
    }
    getCloudTimeAsString() {
      return GetCloudTimeAsString();
    }
    getCloudTimeAsInt() {
      return GetCloudTimeAsInt();
    }
    convertPosixTime(e) {
      return ConvertPosixTime(e);
    }
    getPosixTime() {
      return GetPosixTime();
    }
    setVehicleRespotTimer(e, t) {
      SetNetworkVehicleRespotTimer(e, t);
    }
    setVehicleAsGhost(e, t) {
      SetNetworkVehicleAsGhost(e, t);
    }
    setLocalPlayerAsGhost(e) {
      SetLocalPlayerAsGhost(e);
    }
    usePlayerColourInsteadOfTeamColour(e) {
      UsePlayerColourInsteadOfTeamColour(e);
    }
    explodeVehicle(e, t, r) {
      ExplodeVehicle(e, t, r);
    }
    getNumCommerceItems() {
      return GetNumCommerceItems();
    }
    isCommerceDataValid() {
      return IsCommerceDataValid();
    }
    getCommerceItemId(e) {
      return GetCommerceItemId(e);
    }
    getCommerceItemName(e) {
      return GetCommerceItemName(e);
    }
    getCommerceProductPrice(e) {
      return GetCommerceProductPrice(e);
    }
    getCommerceItemNumCats(e) {
      return GetCommerceItemNumCats(e);
    }
    getCommerceItemCat(e, t) {
      return GetCommerceItemCat(e, t);
    }
    openCommerceStore(e, t) {
      OpenCommerceStore(e, t);
    }
    isCommerceStoreOpen() {
      return IsCommerceStoreOpen();
    }
    setStoreEnabled(e) {
      SetStoreEnabled(e);
    }
    requestCommerceItemImage(e) {
      return RequestCommerceItemImage(e);
    }
    releaseAllCommerceItemImages() {
      ReleaseAllCommerceItemImages();
    }
    getCommerceItemTexturename(e) {
      return GetCommerceItemTexturename(e);
    }
    isStoreAvailableToUser() {
      return IsStoreAvailableToUser();
    }
    cloudDeleteMemberFile(e) {
      return CloudDeleteMemberFile(e);
    }
    cloudHasRequestCompleted(e) {
      return CloudHasRequestCompleted(e);
    }
    cloudDidRequestSucceed(e) {
      return CloudDidRequestSucceed(e);
    }
    cloudCheckAvailability() {
      CloudCheckAvailability();
    }
    cloudIsCheckingAvailability() {
      return CloudIsCheckingAvailability();
    }
    cloudGetAvailabilityCheckResult() {
      return CloudGetAvailabilityCheckResult();
    }
    ugcHasCreateFinished() {
      return UgcHasCreateFinished();
    }
    ugcGetCreateResult() {
      return UgcGetCreateResult();
    }
    ugcGetCreateContentId() {
      return UgcGetCreateContentId();
    }
    ugcClearCreateResult() {
      UgcClearCreateResult();
    }
    ugcQueryByContentId(e, t, r) {
      return UgcQueryByContentId(e, t, r);
    }
    ugcCancelQuery() {
      UgcCancelQuery();
    }
    ugcIsGetting() {
      return UgcIsGetting();
    }
    ugcHasGetFinished() {
      return UgcHasGetFinished();
    }
    ugcDidGetSucceed() {
      return UgcDidGetSucceed();
    }
    ugcGetQueryResult() {
      return UgcGetQueryResult();
    }
    ugcGetContentNum() {
      return UgcGetContentNum();
    }
    ugcGetContentTotal() {
      return UgcGetContentTotal();
    }
    ugcGetContentHash() {
      return UgcGetContentHash();
    }
    ugcClearQueryResults() {
      UgcClearQueryResults();
    }
    ugcGetContentUserId(e) {
      return UgcGetContentUserId(e);
    }
    ugcGetContentUserName(e) {
      return UgcGetContentUserName(e);
    }
    ugcGetContentCategory(e) {
      return UgcGetContentCategory(e);
    }
    ugcGetContentId(e) {
      return UgcGetContentId(e);
    }
    ugcGetRootContentId(e) {
      return UgcGetRootContentId(e);
    }
    ugcGetContentName(e) {
      return UgcGetContentName(e);
    }
    ugcGetContentDescriptionHash(e) {
      return UgcGetContentDescriptionHash(e);
    }
    ugcGetContentPath(e, t) {
      return UgcGetContentPath(e, t);
    }
    ugcGetContentFileVersion(e, t) {
      return UgcGetContentFileVersion(e, t);
    }
    ugcGetContentLanguage(e) {
      return UgcGetContentLanguage(e);
    }
    ugcGetContentIsPublished(e) {
      return UgcGetContentIsPublished(e);
    }
    ugcGetContentIsVerified(e) {
      return UgcGetContentIsVerified(e);
    }
    ugcGetContentRating(e, t) {
      return UgcGetContentRating(e, t);
    }
    ugcGetContentRatingCount(e, t) {
      return UgcGetContentRatingCount(e, t);
    }
    ugcGetContentRatingPositiveCount(e, t) {
      return UgcGetContentRatingPositiveCount(e, t);
    }
    ugcGetContentRatingNegativeCount(e, t) {
      return UgcGetContentRatingNegativeCount(e, t);
    }
    ugcGetContentHasPlayerRecord(e) {
      return UgcGetContentHasPlayerRecord(e);
    }
    ugcGetContentHasPlayerBookmarked(e) {
      return UgcGetContentHasPlayerBookmarked(e);
    }
    ugcRequestContentDataFromIndex(e, t) {
      return UgcRequestContentDataFromIndex(e, t);
    }
    ugcRequestContentDataFromParams(e, t, r, n, i) {
      return UgcRequestContentDataFromParams(e, t, r, n, i);
    }
    ugcRequestCachedDescription(e) {
      return UgcRequestCachedDescription(e);
    }
    ugcGetCachedDescription(e, t) {
      return UgcGetCachedDescription(e, t);
    }
    ugcPublish(e, t, r) {
      return UgcPublish(e, t, r);
    }
    ugcSetBookmarked(e, t, r) {
      return UgcSetBookmarked(e, t, r);
    }
    ugcHasModifyFinished() {
      return UgcHasModifyFinished();
    }
    ugcGetModifyResult() {
      return UgcGetModifyResult();
    }
    ugcClearModifyResult() {
      UgcClearModifyResult();
    }
    ugcGetCreatorNum() {
      return UgcGetCreatorNum();
    }
    ugcClearOfflineQuery() {
      UgcClearOfflineQuery();
    }
    ugcSetQueryDataFromOffline(e) {
      UgcSetQueryDataFromOffline(e);
    }
    ugcIsLanguageSupported(e) {
      return UgcIsLanguageSupported(e);
    }
    titleTextureDownloadRequest(e, t, r) {
      return TitleTextureDownloadRequest(e, t, r);
    }
    textureDownloadRelease(e) {
      TextureDownloadRelease(e);
    }
    textureDownloadHasFailed(e) {
      return TextureDownloadHasFailed(e);
    }
    textureDownloadGetName(e) {
      return TextureDownloadGetName(e);
    }
    getStatusOfTextureDownload(e) {
      return GetStatusOfTextureDownload(e);
    }
    acceptInvite(e) {
      return NetworkAcceptPresenceInvite(e);
    }
    acceptPresenceInvite(e) {
      return NetworkAcceptPresenceInvite(e);
    }
    accessTunableBool(e, t) {
      return NetworkAccessTunableBool(e, t);
    }
    accessTunableBoolHash(e, t) {
      return NetworkAccessTunableBoolHash(e, t);
    }
    accessTunableFloat(e, t) {
      return NetworkAccessTunableFloat(e, t);
    }
    accessTunableFloatHash(e, t) {
      return NetworkAccessTunableFloatHash(e, t);
    }
    accessTunableInt(e, t) {
      return NetworkAccessTunableInt(e, t);
    }
    accessTunableIntHash(e, t) {
      return NetworkAccessTunableIntHash(e, t);
    }
    actionFollowInvite() {
      return NetworkActionFollowInvite();
    }
    activateDamageTrackerOnId(e, t) {
      ActivateDamageTrackerOnNetworkId(e, t);
    }
    addEntityAngledArea(e, t, r, n, i, a, o) {
      return NetworkAddEntityAngledArea(e, t, r, n, i, a, o);
    }
    addEntityArea(e, t, r, n, i, a) {
      return NetworkAddEntityArea(e, t, r, n, i, a);
    }
    addEntityDisplayedBoundaries(e, t, r, n, i, a) {
      return NetworkAddEntityArea(e, t, r, n, i, a);
    }
    addEntityToSynchronisedScene(e, t, r, n, i, a, o) {
      NetworkAddEntityToSynchronisedScene(e, t, r, n, i, a, o);
    }
    addFollowers(e) {
      return NetworkAddFollowers(e);
    }
    addFriend(e) {
      return NetworkAddFriend(e);
    }
    addPedToSynchronisedScene(e, t, r, n, i, a, o, s, l, d) {
      NetworkAddPedToSynchronisedScene(e, t, r, n, i, a, o, s, l, d);
    }
    allocateTunablesRegistrationDataMap() {
      return NetworkAllocateTunablesRegistrationDataMap();
    }
    allowLocalEntityAttachment(e, t) {
      NetworkAllowLocalEntityAttachment(e, t);
    }
    amIBlockedByGamer() {
      return NetworkAmIBlockedByGamer();
    }
    amIBlockedByPlayer(e) {
      return NetworkAmIBlockedByPlayer(e);
    }
    amIMutedByGamer() {
      return NetworkAmIMutedByGamer();
    }
    amIMutedByPlayer(e) {
      return NetworkAmIMutedByPlayer(e);
    }
    applyCachedPlayerHeadBlendData(e, t) {
      return NetworkApplyCachedPlayerHeadBlendData(e, t);
    }
    applyPedScarData(e, t) {
      NetworkApplyPedScarData(e, t);
    }
    applyTransitionParameter(e, t) {
      NetworkApplyTransitionParameter(e, t);
    }
    applyTransitionParameterString(e, t, r) {
      NetworkApplyTransitionParameterString(e, t, r);
    }
    applyVoiceProximityOverride(e, t, r) {
      NetworkApplyVoiceProximityOverride(e, t, r);
    }
    areHandlesTheSame() {
      return NetworkAreHandlesTheSame();
    }
    areSocialClubPoliciesCurrent() {
      return NetworkAreSocialClubPoliciesCurrent();
    }
    areTransitionDetailsValid(e) {
      return NetworkAreTransitionDetailsValid(e);
    }
    attachSynchronisedSceneToEntity(e, t, r) {
      NetworkAttachSynchronisedSceneToEntity(e, t, r);
    }
    badSportPlayerLeftDetected(e, t) {
      return BadSportPlayerLeftDetected(e, t);
    }
    bail() {
      NetworkBail();
    }
    bailTransition() {
      NetworkBailTransition();
    }
    blockInvites(e) {
      NetworkBlockInvites(e);
    }
    blockJoinQueueInvites(e) {
      NetworkBlockJoinQueueInvites(e);
    }
    blockKickedPlayers(e) {
      NetworkBlockKickedPlayers(e);
    }
    cacheLocalPlayerHeadBlendData() {
      NetworkCacheLocalPlayerHeadBlendData();
    }
    canAccessMultiplayer() {
      return NetworkCanAccessMultiplayer();
    }
    canBail() {
      return NetworkCanBail();
    }
    canCommunicateWithGamer() {
      return NetworkCanCommunicateWithGamer();
    }
    canCommunicateWithGamer2() {
      return NetworkCanCommunicateWithGamer2();
    }
    canEnterMultiplayer() {
      return NetworkCanEnterMultiplayer();
    }
    canGamerPlayMultiplayerWithMe() {
      return NetworkCanGamerPlayMultiplayerWithMe();
    }
    canPlayMultiplayerWithGamer() {
      return NetworkCanPlayMultiplayerWithGamer();
    }
    canSessionEnd() {
      return NetworkCanSessionEnd();
    }
    canSetWaypoint() {
      return NetworkCanSetWaypoint();
    }
    canViewGamerUserContent() {
      return NetworkCanViewGamerUserContent();
    }
    cancelRespawnSearch() {
      NetworkCancelRespawnSearch();
    }
    changeTransitionSlots(e, t) {
      NetworkChangeTransitionSlots(e, t);
    }
    checkCommunicationPrivileges(e, t, r) {
      return NetworkCheckCommunicationPrivileges(e, t, r);
    }
    checkDataManagerSucceededForHandle(e) {
      return NetworkCheckDataManagerSucceededForHandle(e);
    }
    checkUserContentPrivileges(e, t, r) {
      return NetworkCheckUserContentPrivileges(e, t, r);
    }
    clanAnimation(e, t) {
      return NetworkClanAnimation(e, t);
    }
    clanDownloadMembership() {
      return NetworkClanDownloadMembership();
    }
    clanDownloadMembershipPending() {
      return NetworkClanDownloadMembershipPending();
    }
    clanGetEmblemTxdName() {
      return NetworkClanGetEmblemTxdName();
    }
    clanGetLocalMembershipsCount() {
      return NetworkClanGetLocalMembershipsCount();
    }
    clanGetMembership(e) {
      return NetworkClanGetMembership(e);
    }
    clanGetMembershipCount() {
      return NetworkClanGetMembershipCount();
    }
    clanGetMembershipDesc(e) {
      return NetworkClanGetMembershipDesc(e);
    }
    clanGetMembershipValid(e) {
      return NetworkClanGetMembershipValid(e);
    }
    clanGetUiFormattedTag(e) {
      return NetworkClanGetUiFormattedTag(e);
    }
    clanIsEmblemReady(e) {
      return NetworkClanIsEmblemReady(e);
    }
    clanIsRockstarClan(e) {
      return NetworkClanIsRockstarClan(e);
    }
    clanJoin(e) {
      return NetworkClanJoin(e);
    }
    clanPlayerGetDesc(e) {
      return NetworkClanPlayerGetDesc(e);
    }
    clanPlayerIsActive() {
      return NetworkClanPlayerIsActive();
    }
    clanReleaseEmblem(e) {
      NetworkClanReleaseEmblem(e);
    }
    clanRemoteMembershipsAreInCache() {
      return NetworkClanRemoteMembershipsAreInCache();
    }
    clanRequestEmblem(e) {
      return NetworkClanRequestEmblem(e);
    }
    clanServiceIsValid() {
      return NetworkClanServiceIsValid();
    }
    clearClockTimeOverride() {
      NetworkClearClockTimeOverride();
    }
    clearFollowInvite() {
      return NetworkClearFollowInvite();
    }
    clearFollowers() {
      NetworkClearFollowers();
    }
    clearFoundGamers() {
      NetworkClearFoundGamers();
    }
    clearGetGamerStatus() {
      NetworkClearGetGamerStatus();
    }
    clearLaunchParams() {
      ClearLaunchParams();
    }
    clearPropertyId() {
      NetworkClearPropertyId();
    }
    clearTransitionCreatorHandle() {
      NetworkClearTransitionCreatorHandle();
    }
    clearVoiceChannel() {
      NetworkClearVoiceChannel();
    }
    clearVoiceProximityOverride() {
      NetworkClearVoiceProximityOverride();
    }
    closeTransitionMatchmaking() {
      NetworkCloseTransitionMatchmaking();
    }
    concealEntity(e, t) {
      NetworkConcealEntity(e, t);
    }
    concealPlayer(e, t, r) {
      NetworkConcealPlayer(e, t, r);
    }
    convertSynchronisedSceneToSynchronizedScene(e) {
      return NetworkConvertSynchronisedSceneToSynchronizedScene(e);
    }
    createSynchronisedScene(e, t, r, n, i, a, o, s, l, d, c, u) {
      return NetworkCreateSynchronisedScene(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    disableInvincibleFlashing(e, t) {
      NetworkDisableInvincibleFlashing(e, t);
    }
    disableLeaveRemotePedBehind(e) {
      NetworkDisableLeaveRemotePedBehind(e);
    }
    disableProximityMigration(e) {
      NetworkDisableProximityMigration(e);
    }
    doTransitionQuickmatch(e, t, r, n) {
      return NetworkDoTransitionQuickmatch(e, t, r, n);
    }
    doTransitionQuickmatchAsync(e, t, r, n) {
      return NetworkDoTransitionQuickmatchAsync(e, t, r, n);
    }
    doTransitionQuickmatchWithGroup(e, t, r, n, i, a, o) {
      return NetworkDoTransitionQuickmatchWithGroup(e, t, r, n, i, a, o);
    }
    doTransitionToFreemode(e, t, r, n) {
      return NetworkDoTransitionToFreemode(e, t, r, n);
    }
    doTransitionToGame(e, t) {
      return NetworkDoTransitionToGame(e, t);
    }
    doTransitionToNewFreemode(e, t, r, n) {
      return NetworkDoTransitionToNewFreemode(e, t, r, n);
    }
    doTransitionToNewGame(e, t, r) {
      return NetworkDoTransitionToNewGame(e, t, r);
    }
    doesNetworkIdExist(e) {
      return NetworkDoesNetworkIdExist(e);
    }
    doesTunableExist(e, t) {
      return NetworkDoesTunableExist(e, t);
    }
    doesTunableExistHash(e, t) {
      return NetworkDoesTunableExistHash(e, t);
    }
    endTutorialSession() {
      NetworkEndTutorialSession();
    }
    entityAreaDoesExist(e) {
      return NetworkEntityAreaDoesExist(e);
    }
    entityAreaIsOccupied(e) {
      return NetworkEntityAreaIsOccupied(e);
    }
    facebookDoUnkCheck() {
      return FacebookDoUnkCheck();
    }
    facebookIsAvailable() {
      return FacebookIsAvailable();
    }
    facebookIsSendingData() {
      return FacebookIsSendingData();
    }
    facebookSetCreateCharacterComplete() {
      return FacebookSetCreateCharacterComplete();
    }
    facebookSetHeistComplete(e, t, r) {
      return FacebookSetHeistComplete(e, t, r);
    }
    facebookSetMilestoneComplete(e) {
      return FacebookSetMilestoneComplete(e);
    }
    fadeInEntity(e, t) {
      NetworkFadeInEntity(e, t);
    }
    fadeOutEntity(e, t, r) {
      NetworkFadeOutEntity(e, t, r);
    }
    filloutPmPlayerList(e, t) {
      return FilloutPmPlayerList(e, t);
    }
    filloutPmPlayerListWithNames(e, t) {
      return FilloutPmPlayerListWithNames(e, t);
    }
    findGamersInCrew(e) {
      return NetworkFindGamersInCrew(e);
    }
    findMatchedGamers(e, t, r, n) {
      return NetworkFindMatchedGamers(e, t, r, n);
    }
    finishBroadcastingData() {
      NetworkFinishBroadcastingData();
    }
    forceLocalUseOfSyncedSceneCamera(e) {
      NetworkForceLocalUseOfSyncedSceneCamera(e);
    }
    gamerHasHeadset() {
      return NetworkGamerHasHeadset();
    }
    gamertagFromHandlePending() {
      return NetworkGamertagFromHandlePending();
    }
    gamertagFromHandleStart() {
      return NetworkGamertagFromHandleStart();
    }
    gamertagFromHandleSucceeded() {
      return NetworkGamertagFromHandleSucceeded();
    }
    getActivityPlayerNum(e) {
      return NetworkGetActivityPlayerNum(e);
    }
    getAgeGroup() {
      return NetworkGetAgeGroup();
    }
    getContentModifierListId(e) {
      return NetworkGetContentModifierListId(e);
    }
    getCurrentlySelectedGamerHandleFromInviteMenu(e) {
      return NetworkGetCurrentlySelectedGamerHandleFromInviteMenu(e);
    }
    getDestroyerOfEntity(e, t) {
      return NetworkGetDestroyerOfEntity(e, t);
    }
    getDestroyerOfNetworkId(e) {
      return NetworkGetDestroyerOfNetworkId(e);
    }
    getDisplaynamesFromHandles(e, t, r) {
      return NetworkGetDisplaynamesFromHandles(e, t, r);
    }
    getEntityIsLocal(e) {
      return NetworkGetEntityIsLocal(e);
    }
    getEntityIsNetworked(e) {
      return NetworkGetEntityIsNetworked(e);
    }
    getEntityKillerOfPlayer(e) {
      return NetworkGetEntityKillerOfPlayer(e);
    }
    getEntityNetScriptId(e) {
      return NetworkGetEntityNetScriptId(e);
    }
    getFoundGamer(e) {
      return NetworkGetFoundGamer(e);
    }
    getFriendCount() {
      return NetworkGetFriendCount();
    }
    getFriendName(e) {
      return NetworkGetFriendName(e);
    }
    getFriendNameFromIndex(e) {
      return NetworkGetFriendName(e);
    }
    getGamerStatus() {
      return NetworkGetGamerStatusFromQueue();
    }
    getGamerStatusResult(e) {
      return NetworkGetGamerStatusResult(e);
    }
    getGamertagFromHandle(e) {
      return NetworkGetGamertagFromHandle(e);
    }
    getGlobalMultiplayerClock() {
      return NetworkGetGlobalMultiplayerClock();
    }
    getHostOfScript(e, t, r) {
      return NetworkGetHostOfScript(e, t, r);
    }
    getHostOfThisScript() {
      return NetworkGetHostOfThisScript();
    }
    getLocalHandle(e) {
      return NetworkGetLocalHandle(e);
    }
    getMaxFriends() {
      return NetworkGetMaxFriends();
    }
    getMaxNumObjects() {
      return GetMaxNumNetworkObjects();
    }
    getMaxNumParticipants() {
      return NetworkGetMaxNumParticipants();
    }
    getMaxNumPeds() {
      return GetMaxNumNetworkPeds();
    }
    getMaxNumPickups() {
      return GetMaxNumNetworkPickups();
    }
    getMaxNumVehicles() {
      return GetMaxNumNetworkVehicles();
    }
    getNetworkIdFromEntity(e) {
      return NetworkGetNetworkIdFromEntity(e);
    }
    getNumBodyTrackers() {
      return NetworkGetNumBodyTrackers();
    }
    getNumFoundGamers() {
      return NetworkGetNumFoundGamers();
    }
    getNumParticipants() {
      return NetworkGetNumParticipants();
    }
    getNumPresenceInvites() {
      return NetworkGetNumPresenceInvites();
    }
    getNumScriptParticipants(e, t) {
      return NetworkGetNumScriptParticipants(e, t);
    }
    getNumUnackedForPlayer(e) {
      return NetworkGetNumUnackedForPlayer(e);
    }
    getOldestResendCountForPlayer(e) {
      return NetworkGetOldestResendCountForPlayer(e);
    }
    getParticipantIndex(e) {
      return NetworkGetParticipantIndex(e);
    }
    getPlatformPartyMembers(e) {
      return NetworkGetPlatformPartyMembers(e);
    }
    getPlatformPartyUnk() {
      return NetworkGetPlatformPartyUnk();
    }
    getPlayerCoords(e) {
      return za(NetworkGetPlayerCoords(e));
    }
    getPlayerFromGamerHandle() {
      return NetworkGetPlayerFromGamerHandle();
    }
    getPlayerIndexFromPed(e) {
      return NetworkGetPlayerIndexFromPed(e);
    }
    getPlayerLoudness(e) {
      return NetworkGetPlayerLoudness(e);
    }
    getPlayerOwnsWaypoint(e) {
      return NetworkGetPlayerOwnsWaypoint(e);
    }
    getPlayerTutorialSessionInstance(e) {
      return NetworkGetPlayerTutorialSessionInstance(e);
    }
    getPresenceInviteContentId(e) {
      return NetworkGetPresenceInviteContentId(e);
    }
    getPresenceInviteFromAdmin(e) {
      return NetworkGetPresenceInviteFromAdmin(e);
    }
    getPresenceInviteHandle(e) {
      return NetworkGetPresenceInviteHandle(e);
    }
    getPresenceInviteId(e) {
      return NetworkGetPresenceInviteId(e);
    }
    getPresenceInviteInviter(e) {
      return NetworkGetPresenceInviteInviter(e);
    }
    getPresenceInviteIsTournament(e) {
      return NetworkGetPresenceInviteIsTournament(e);
    }
    getPresenceInvitePlaylistCurrent(e) {
      return NetworkGetPresenceInvitePlaylistCurrent(e);
    }
    getPresenceInvitePlaylistLength(e) {
      return NetworkGetPresenceInvitePlaylistLength(e);
    }
    getPresenceInviteSessionId(e) {
      return NetworkGetPresenceInviteSessionId(e);
    }
    getPrimaryClanDataCancel() {
      NetworkGetPrimaryClanDataCancel();
    }
    getPrimaryClanDataClear() {
      return NetworkGetPrimaryClanDataClear();
    }
    getPrimaryClanDataNew() {
      return NetworkGetPrimaryClanDataNew();
    }
    getPrimaryClanDataPending() {
      return NetworkGetPrimaryClanDataPending();
    }
    getPrimaryClanDataStart(e) {
      return NetworkGetPrimaryClanDataStart(e);
    }
    getPrimaryClanDataSuccess() {
      return NetworkGetPrimaryClanDataSuccess();
    }
    getRandomInt() {
      return NetworkGetRandomInt();
    }
    getRandomIntRanged(e, t) {
      return NetworkGetRandomIntRanged(e, t);
    }
    getRespawnResult(e) {
      return NetworkGetRespawnResult(e);
    }
    getRespawnResultFlags(e) {
      return NetworkGetRespawnResultFlags(e);
    }
    getRosPrivilege24() {
      return NetworkGetRosPrivilege_24();
    }
    getRosPrivilege25() {
      return NetworkGetRosPrivilege_25();
    }
    getRosPrivilege9() {
      return NetworkGetRosPrivilege_9();
    }
    getScriptStatus() {
      return NetworkGetScriptStatus();
    }
    getTalkerProximity() {
      return NetworkGetTalkerProximity();
    }
    getTargetingMode() {
      return NetworkGetTargetingMode();
    }
    getThisScriptIsNetworkScript() {
      return NetworkGetThisScriptIsNetworkScript();
    }
    getTimeoutTime() {
      return NetworkGetTimeoutTime();
    }
    getTotalNumPlayers() {
      return NetworkGetTotalNumPlayers();
    }
    getTransitionHost() {
      return NetworkGetTransitionHost();
    }
    getTransitionMembers(e) {
      return NetworkGetTransitionMembers(e);
    }
    getTunableCloudCrc() {
      return NetworkGetTunableCloudCrc();
    }
    getUnreliableResendCountForPlayer(e) {
      return NetworkGetUnreliableResendCountForPlayer(e);
    }
    handleFromFriend(e, t) {
      return NetworkHandleFromFriend(e, t);
    }
    handleFromMemberId(e, t) {
      return NetworkHandleFromMemberId(e, t);
    }
    handleFromPlayer(e, t) {
      return NetworkHandleFromPlayer(e, t);
    }
    handleFromUserId(e, t) {
      return NetworkHandleFromUserId(e, t);
    }
    hasAgeRestrictedProfile() {
      return NetworkHasAgeRestrictedProfile();
    }
    hasCachedPlayerHeadBlendData(e) {
      return NetworkHasCachedPlayerHeadBlendData(e);
    }
    hasControlOfDoor(e) {
      return NetworkHasControlOfDoor(e);
    }
    hasControlOfNetworkId(e) {
      return NetworkHasControlOfNetworkId(e);
    }
    hasControlOfPickup(e) {
      return NetworkHasControlOfPickup(e);
    }
    hasEntityBeenRegisteredWithThisThread(e) {
      return NetworkHasEntityBeenRegisteredWithThisThread(e);
    }
    hasFollowInvite() {
      return NetworkHasFollowInvite();
    }
    hasGameBeenAltered() {
      return NetworkHasGameBeenAltered();
    }
    hasHeadset() {
      return NetworkHasHeadset();
    }
    hasInvitedGamer() {
      return NetworkHasInvitedGamer();
    }
    hasInvitedGamerToTransition() {
      return NetworkHasInvitedGamerToTransition();
    }
    hasPendingInvite() {
      return NetworkHasPendingInvite();
    }
    hasPlayerStartedTransition(e) {
      return NetworkHasPlayerStartedTransition(e);
    }
    hasReceivedHostBroadcastData() {
      return NetworkHasReceivedHostBroadcastData();
    }
    hasRosPrivilege(e) {
      return NetworkHasRosPrivilege(e);
    }
    hasRosPrivilegeEndDate(e) {
      return NetworkHasRosPrivilegeEndDate(e);
    }
    hasSocialClubAccount() {
      return NetworkHasSocialClubAccount();
    }
    hasSocialNetworkingSharingPriv() {
      return NetworkHasSocialNetworkingSharingPriv();
    }
    hasValidRosCredentials() {
      return NetworkHasValidRosCredentials();
    }
    hasViewGamerUserContentResult() {
      return NetworkHasViewGamerUserContentResult();
    }
    hashFromGamerHandle() {
      return NetworkHashFromGamerHandle();
    }
    hashFromPlayerHandle(e) {
      return NetworkHashFromPlayerHandle(e);
    }
    haveCommunicationPrivileges(e, t) {
      return NetworkHaveCommunicationPrivileges(e, t);
    }
    haveOnlinePrivilege2() {
      return NetworkHaveOnlinePrivilege_2();
    }
    haveOnlinePrivileges() {
      return NetworkHaveOnlinePrivileges();
    }
    haveRosBannedPriv() {
      return NetworkHaveRosBannedPriv();
    }
    haveRosCreateTicketPriv() {
      return NetworkHaveRosCreateTicketPriv();
    }
    haveRosLeaderboardWritePriv() {
      return NetworkHaveRosLeaderboardWritePriv();
    }
    haveRosMultiplayerPriv() {
      return NetworkHaveRosMultiplayerPriv();
    }
    haveRosSocialClubPriv() {
      return NetworkHaveRosSocialClubPriv();
    }
    haveUserContentPrivileges(e) {
      return NetworkHaveUserContentPrivileges(e);
    }
    hostTransition(e, t, r, n, i, a, o, s, l, d) {
      return NetworkHostTransition(e, t, r, n, i, a, o, s, l, d);
    }
    inviteGamers(e) {
      return NetworkInviteGamers(e);
    }
    inviteGamersToTransition(e) {
      return NetworkInviteGamersToTransition(e);
    }
    isActivitySession() {
      return NetworkIsActivitySession();
    }
    isActivitySpectator() {
      return NetworkIsActivitySpectator();
    }
    isActivitySpectatorFromHandle() {
      return NetworkIsActivitySpectatorFromHandle();
    }
    isAddingFriend() {
      return NetworkIsAddingFriend();
    }
    isCableConnected() {
      return NetworkIsCableConnected();
    }
    isChattingInPlatformParty() {
      return NetworkIsChattingInPlatformParty();
    }
    isClanMembershipFinishedDownloading() {
      return NetworkClanDownloadMembershipPending();
    }
    isClockTimeOverridden() {
      return NetworkIsClockTimeOverridden();
    }
    isCloudAvailable() {
      return NetworkIsCloudAvailable();
    }
    isCloudBackgroundScriptRequestPending() {
      return NetworkIsCloudBackgroundScriptRequestPending();
    }
    isDamageTrackerActiveOnId(e) {
      return IsDamageTrackerActiveOnNetworkId(e);
    }
    isDoorNetworked(e) {
      return NetworkIsDoorNetworked(e);
    }
    isEntityConcealed(e) {
      return NetworkIsEntityConcealed(e);
    }
    isEntityFading(e) {
      return NetworkIsEntityFading(e);
    }
    isEntityGhostedToLocalPlayer(e) {
      return IsEntityGhostedToLocalPlayer(e);
    }
    isFindingGamers() {
      return NetworkIsFindingGamers();
    }
    isFriend() {
      return NetworkIsFriend();
    }
    isFriendHandleOnline() {
      return NetworkIsFriendHandleOnline();
    }
    isFriendInMultiplayer(e) {
      return NetworkIsFriendInMultiplayer(e);
    }
    isFriendInSameTitle(e) {
      return NetworkIsFriendInSameTitle(e);
    }
    isFriendIndexOnline(e) {
      return NetworkIsFriendIndexOnline(e);
    }
    isFriendOnline(e) {
      return NetworkIsFriendOnline(e);
    }
    isGameInProgress() {
      return NetworkIsGameInProgress();
    }
    isGamerBlockedByMe() {
      return NetworkIsGamerBlockedByMe();
    }
    isGamerInMySession() {
      return NetworkIsGamerInMySession();
    }
    isGamerMutedByMe() {
      return NetworkIsGamerMutedByMe();
    }
    isGamerTalking() {
      return NetworkIsGamerTalking();
    }
    isHandleValid(e) {
      return NetworkIsHandleValid(e);
    }
    isHostOfThisScript() {
      return NetworkIsHostOfThisScript();
    }
    isInMpCutscene() {
      return NetworkIsInMpCutscene();
    }
    isInPlatformParty() {
      return NetworkIsInPlatformParty();
    }
    isInPlatformPartyChat() {
      return NetworkIsInPlatformPartyChat();
    }
    isInSession() {
      return NetworkIsInSession();
    }
    isInSpectatorMode() {
      return NetworkIsInSpectatorMode();
    }
    isInTransition() {
      return NetworkIsInTransition();
    }
    isInTutorialSession() {
      return NetworkIsInTutorialSession();
    }
    isInactiveProfile() {
      return NetworkIsInactiveProfile();
    }
    isLocalPlayerInvincible() {
      return NetworkIsLocalPlayerInvincible();
    }
    isLocalTalking() {
      return NetworkIsLocalTalking();
    }
    isMultiplayerDisabled() {
      return NetworkIsMultiplayerDisabled();
    }
    isOfflineInvitePending() {
      return NetworkIsOfflineInvitePending();
    }
    isParticipantActive(e) {
      return NetworkIsParticipantActive(e);
    }
    isPendingFriend(e) {
      return NetworkIsPendingFriend(e);
    }
    isPlayerAParticipant(e) {
      return NetworkIsPlayerAParticipant(e);
    }
    isPlayerAParticipantOnScript(e, t, r) {
      return NetworkIsPlayerAParticipantOnScript(e, t, r);
    }
    isPlayerBlockedByMe(e) {
      return NetworkIsPlayerBlockedByMe(e);
    }
    isPlayerConcealed(e) {
      return NetworkIsPlayerConcealed(e);
    }
    isPlayerConnected(e) {
      return NetworkIsPlayerConnected(e);
    }
    isPlayerEqualToIndex(e, t) {
      return NetworkIsPlayerEqualToIndex(e, t);
    }
    isPlayerFading(e) {
      return NetworkIsPlayerFading(e);
    }
    isPlayerInMpCutscene(e) {
      return NetworkIsPlayerInMpCutscene(e);
    }
    isPlayerMutedByMe(e) {
      return NetworkIsPlayerMutedByMe(e);
    }
    isPlayerTalking(e) {
      return NetworkIsPlayerTalking(e);
    }
    isScriptActive(e, t, r, n) {
      return NetworkIsScriptActive(e, t, r, n);
    }
    isScriptActiveByHash(e, t, r, n) {
      return NetworkIsScriptActiveByHash(e, t, r, n);
    }
    isSessionBusy() {
      return NetworkIsSessionBusy();
    }
    isSessionStarted() {
      return NetworkIsSessionStarted();
    }
    isSignedIn() {
      return NetworkIsSignedIn();
    }
    isSignedOnline() {
      return NetworkIsSignedOnline();
    }
    isTextChatActive() {
      return NetworkIsTextChatActive();
    }
    isThisScriptMarked(e, t, r) {
      return NetworkIsThisScriptMarked(e, t, r);
    }
    isTransitionBusy() {
      return NetworkIsTransitionBusy();
    }
    isTransitionClosedCrew() {
      return NetworkIsTransitionClosedCrew();
    }
    isTransitionClosedFriends() {
      return NetworkIsTransitionClosedFriends();
    }
    isTransitionHost() {
      return NetworkIsTransitionHost();
    }
    isTransitionHostFromHandle() {
      return NetworkIsTransitionHostFromHandle();
    }
    isTransitionMatchmaking() {
      return NetworkIsTransitionMatchmaking();
    }
    isTransitionOpenToMatchmaking() {
      return NetworkIsTransitionOpenToMatchmaking();
    }
    isTransitionPrivate() {
      return NetworkIsTransitionPrivate();
    }
    isTransitionSolo() {
      return NetworkIsTransitionSolo();
    }
    isTransitionStarted() {
      return NetworkIsTransitionStarted();
    }
    isTransitionToGame() {
      return NetworkIsTransitionToGame();
    }
    isTransitionVisibilityLocked() {
      return NetworkIsTransitionVisibilityLocked();
    }
    isTunableCloudRequestPending() {
      return NetworkIsTunableCloudRequestPending();
    }
    isTutorialSessionChangePending() {
      return NetworkIsTutorialSessionChangePending();
    }
    joinGroupActivity() {
      return NetworkJoinGroupActivity();
    }
    joinPreviouslyFailedSession() {
      return NetworkJoinPreviouslyFailedSession();
    }
    joinPreviouslyFailedTransition() {
      return NetworkJoinPreviouslyFailedTransition();
    }
    joinTransition(e) {
      return NetworkJoinTransition(e);
    }
    launchTransition() {
      return NetworkLaunchTransition();
    }
    leaveTransition() {
      return NetworkLeaveTransition();
    }
    markTransitionGamerAsFullyJoined() {
      return NetworkMarkTransitionGamerAsFullyJoined();
    }
    memberIdFromGamerHandle() {
      return NetworkMemberIdFromGamerHandle();
    }
    openTransitionMatchmaking() {
      NetworkOpenTransitionMatchmaking();
    }
    overrideChatRestrictions(e, t) {
      NetworkOverrideChatRestrictions(e, t);
    }
    overrideClockMillisecondsPerGameMinute(e) {
      NetworkOverrideClockMillisecondsPerGameMinute(e);
    }
    overrideClockTime(e, t, r) {
      NetworkOverrideClockTime(e, t, r);
    }
    overrideCoordsAndHeading(e, t, r, n, i) {
      NetworkOverrideCoordsAndHeading(e, t, r, n, i);
    }
    overrideReceiveRestrictions(e, t) {
      NetworkOverrideReceiveRestrictions(e, t);
    }
    overrideReceiveRestrictionsAll(e) {
      NetworkOverrideReceiveRestrictionsAll(e);
    }
    overrideSendRestrictions(e, t) {
      NetworkOverrideSendRestrictions(e, t);
    }
    overrideSendRestrictionsAll(e) {
      NetworkOverrideSendRestrictionsAll(e);
    }
    overrideTeamRestrictions(e, t) {
      NetworkOverrideTeamRestrictions(e, t);
    }
    overrideTransitionChat(e) {
      NetworkOverrideTransitionChat(e);
    }
    playerGetCheaterReason() {
      return NetworkPlayerGetCheaterReason();
    }
    playerGetName(e) {
      return NetworkPlayerGetName(e);
    }
    playerGetUserid(e) {
      return NetworkPlayerGetUserid(e);
    }
    playerHasHeadset(e) {
      return NetworkPlayerHasHeadset(e);
    }
    playerIndexIsCheater(e) {
      return NetworkPlayerIndexIsCheater(e);
    }
    playerIsBadsport() {
      return NetworkPlayerIsBadsport();
    }
    playerIsCheater() {
      return NetworkPlayerIsCheater();
    }
    playerIsRockstarDev(e) {
      return NetworkPlayerIsRockstarDev(e);
    }
    queryRespawnResults() {
      return NetworkQueryRespawnResults();
    }
    registerHostBroadcastVariables(e) {
      return NetworkRegisterHostBroadcastVariables(e);
    }
    registerPlayerBroadcastVariables(e) {
      return NetworkRegisterPlayerBroadcastVariables(e);
    }
    registerTunableBoolHash(e, t) {
      return NetworkRegisterTunableBoolHash(e, t);
    }
    registerTunableFloatHash(e, t) {
      return NetworkRegisterTunableFloatHash(e, t);
    }
    registerTunableIntHash(e, t) {
      return NetworkRegisterTunableIntHash(e, t);
    }
    remoteCheatDetected(e, t, r) {
      return RemoteCheaterPlayerDetected(e, t, r);
    }
    removeAllTransitionInvite() {
      NetworkRemoveAllTransitionInvite();
    }
    removeEntityArea(e) {
      return NetworkRemoveEntityArea(e);
    }
    removePresenceInvite(e) {
      return NetworkRemovePresenceInvite(e);
    }
    removeTransitionInvite() {
      return NetworkRemoveTransitionInvite();
    }
    reportMyself() {
      NetworkReportMyself();
    }
    requestCloudBackgroundScripts() {
      return NetworkRequestCloudBackgroundScripts();
    }
    requestCloudTunables() {
      NetworkRequestCloudTunables();
    }
    requestControlOfDoor(e) {
      return NetworkRequestControlOfDoor(e);
    }
    requestControlOfNetworkId(e) {
      return NetworkRequestControlOfNetworkId(e);
    }
    reserveLocalObjects(e) {
      ReserveNetworkLocalObjects(e);
    }
    reserveLocalPeds(e) {
      ReserveNetworkLocalPeds(e);
    }
    reserveLocalVehicles(e) {
      ReserveNetworkLocalVehicles(e);
    }
    resetBodyTracker() {
      NetworkResetBodyTracker();
    }
    resetGhostedEntityAlpha() {
      ResetGhostedEntityAlpha();
    }
    respawnCoords(e, t, r, n, i, a) {
      NetworkRespawnCoords(e, t, r, n, i, a);
    }
    resurrectLocalPlayer(e, t, r, n, i, a) {
      NetworkResurrectLocalPlayer(e, t, r, n, i, a);
    }
    seedRandomNumberGenerator(e) {
      NetworkSeedRandomNumberGenerator(e);
    }
    sendInviteViaPresence(e, t) {
      return NetworkSendInviteViaPresence(e, t);
    }
    sendPresenceTransitionInvite(e, t) {
      return NetworkSendPresenceTransitionInvite(e, t);
    }
    sendTextMessage(e) {
      return NetworkSendTextMessage(e);
    }
    sendTransitionGamerInstruction(e, t, r, n) {
      return NetworkSendTransitionGamerInstruction(e, t, r, n);
    }
    sessionActivityQuickmatch(e, t, r, n) {
      return NetworkSessionActivityQuickmatch(e, t, r, n);
    }
    sessionBlockJoinRequests(e) {
      NetworkSessionBlockJoinRequests(e);
    }
    sessionCancelInvite() {
      NetworkSessionCancelInvite();
    }
    sessionChangeSlots(e, t) {
      NetworkSessionChangeSlots(e, t);
    }
    sessionCrewMatchmaking(e, t, r, n, i) {
      return NetworkSessionCrewMatchmaking(e, t, r, n, i);
    }
    sessionEnd(e, t) {
      return NetworkSessionEnd(e, t);
    }
    sessionEnter(e, t, r, n, i, a) {
      return NetworkSessionEnter(e, t, r, n, i, a);
    }
    sessionForceCancelInvite() {
      NetworkSessionForceCancelInvite();
    }
    sessionFriendMatchmaking(e, t, r, n) {
      return NetworkSessionFriendMatchmaking(e, t, r, n);
    }
    sessionGetInviter() {
      return NetworkSessionGetInviter();
    }
    sessionGetKickVote(e) {
      return NetworkSessionGetKickVote(e);
    }
    sessionGetMatchmakingGroupFree(e) {
      return NetworkSessionGetMatchmakingGroupFree(e);
    }
    sessionGetPrivateSlots() {
      return NetworkSessionGetPrivateSlots();
    }
    sessionHost(e, t, r) {
      return NetworkSessionHost(e, t, r);
    }
    sessionHostClosed(e, t) {
      return NetworkSessionHostClosed(e, t);
    }
    sessionHostFriendsOnly(e, t) {
      return NetworkSessionHostFriendsOnly(e, t);
    }
    sessionHostSinglePlayer(e) {
      NetworkSessionHostSinglePlayer(e);
    }
    sessionIsClosedCrew() {
      return NetworkSessionIsClosedCrew();
    }
    sessionIsClosedFriends() {
      return NetworkSessionIsClosedFriends();
    }
    sessionIsInVoiceSession() {
      return NetworkSessionIsInVoiceSession();
    }
    sessionIsPrivate() {
      return NetworkSessionIsPrivate();
    }
    sessionIsSolo() {
      return NetworkSessionIsSolo();
    }
    sessionIsVisible() {
      return NetworkSessionIsVisible();
    }
    sessionIsVoiceSessionBusy() {
      return NetworkSessionIsVoiceSessionBusy();
    }
    sessionJoinInvite() {
      NetworkSessionJoinInvite();
    }
    sessionKickPlayer(e) {
      NetworkSessionKickPlayer(e);
    }
    sessionLeaveSinglePlayer() {
      NetworkSessionLeaveSinglePlayer();
    }
    sessionMarkVisible(e) {
      NetworkSessionMarkVisible(e);
    }
    sessionSetMatchmakingGroup(e) {
      NetworkSessionSetMatchmakingGroup(e);
    }
    sessionSetMatchmakingGroupMax(e, t) {
      NetworkSessionSetMatchmakingGroupMax(e, t);
    }
    sessionSetMatchmakingMentalState(e) {
      NetworkSessionSetMatchmakingMentalState(e);
    }
    sessionSetMatchmakingPropertyId(e) {
      NetworkSessionSetMatchmakingPropertyId(e);
    }
    sessionValidateJoin(e) {
      NetworkSessionValidateJoin(e);
    }
    sessionVoiceConnectToPlayer() {
      return NetworkSessionVoiceConnectToPlayer();
    }
    sessionVoiceHost() {
      NetworkSessionVoiceHost();
    }
    sessionVoiceLeave() {
      NetworkSessionVoiceLeave();
    }
    sessionVoiceRespondToRequest(e, t) {
      NetworkSessionVoiceRespondToRequest(e, t);
    }
    sessionVoiceSetTimeout(e) {
      NetworkSessionVoiceSetTimeout(e);
    }
    sessionWasInvited() {
      return NetworkSessionWasInvited();
    }
    setActivitySpectator(e) {
      NetworkSetActivitySpectator(e);
    }
    setActivitySpectatorMax(e) {
      NetworkSetActivitySpectatorMax(e);
    }
    setBalanceAddMachine(e, t) {
      return SetBalanceAddMachine(e, t);
    }
    setBalanceAddMachines(e, t) {
      return NetworkSetBalanceAddMachines(e, t);
    }
    setChoiceMigrateOptions(e, t) {
      NetworkSetChoiceMigrateOptions(e, t);
    }
    setCurrentDataManagerHandle() {
      return NetworkSetCurrentDataManagerHandle();
    }
    setCurrentlySelectedGamerHandleFromInviteMenu() {
      return NetworkSetCurrentlySelectedGamerHandleFromInviteMenu();
    }
    setEntityCanBlend(e, t) {
      NetworkSetEntityCanBlend(e, t);
    }
    setEntityGhostedWithOwner(e, t) {
      NetworkSetEntityGhostedWithOwner(e, t);
    }
    setEntityInvisibleToNetwork(e, t) {
      NetworkSetEntityInvisibleToNetwork(e, t);
    }
    setFriendlyFireOption(e) {
      NetworkSetFriendlyFireOption(e);
    }
    setGamerInvitedToTransition() {
      return NetworkSetGamerInvitedToTransition();
    }
    setGhostedEntityAlpha(e) {
      SetGhostedEntityAlpha(e);
    }
    setInFreeCamMode(e) {
      NetworkSetInFreeCamMode(e);
    }
    setInMpCutscene(e, t) {
      NetworkSetInMpCutscene(e, t);
    }
    setInSpectatorMode(e, t) {
      NetworkSetInSpectatorMode(e, t);
    }
    setInSpectatorModeExtended(e, t, r) {
      NetworkSetInSpectatorModeExtended(e, t, r);
    }
    setInviteOnCallForInviteMenu() {
      return NetworkSetInviteOnCallForInviteMenu();
    }
    setLocalPlayerInvincibleTime(e) {
      NetworkSetLocalPlayerInvincibleTime(e);
    }
    setLocalPlayerSyncLookAt(e) {
      NetworkSetLocalPlayerSyncLookAt(e);
    }
    setMissionFinished() {
      NetworkSetMissionFinished();
    }
    setNetworkIdDynamic(e, t) {
      NetworkSetNetworkIdDynamic(e, t);
    }
    setNoSpectatorChat(e) {
      NetworkSetNoSpectatorChat(e);
    }
    setOverrideSpectatorMode(e) {
      NetworkSetOverrideSpectatorMode(e);
    }
    setPlayerIsPassive(e) {
      NetworkSetPlayerIsPassive(e);
    }
    setPropertyId(e) {
      NetworkSetPropertyId(e);
    }
    setRelationshipToPlayer(e, t) {
      SetRelationshipToPlayer(e, t);
    }
    setRichPresence(e, t, r, n) {
      NetworkSetRichPresence(e, t, r, n);
    }
    setRichPresenceString(e, t) {
      NetworkSetRichPresenceString(e, t);
    }
    setScriptReadyForEvents(e) {
      NetworkSetScriptReadyForEvents(e);
    }
    setTalkerProximity(e) {
      NetworkSetTalkerProximity(e);
    }
    setTeamOnlyChat(e) {
      NetworkSetTeamOnlyChat(e);
    }
    setThisScriptIsNetworkScript(e, t, r) {
      NetworkSetThisScriptIsNetworkScript(e, t, r);
    }
    setTransitionActivityId(e) {
      NetworkSetTransitionActivityId(e);
    }
    setTransitionCreatorHandle() {
      return NetworkSetTransitionCreatorHandle();
    }
    setTransitionVisibilityLock(e, t) {
      NetworkSetTransitionVisibilityLock(e, t);
    }
    setVehicleWheelsDestructible(e, t) {
      NetworkSetVehicleWheelsDestructible(e, t);
    }
    setVoiceActive(e) {
      NetworkSetVoiceActive(e);
    }
    setVoiceChannel(e) {
      NetworkSetVoiceChannel(e);
    }
    shouldShowConnectivityTroubleshooting() {
      return NetworkShouldShowConnectivityTroubleshooting();
    }
    showProfileUi() {
      return NetworkShowProfileUi();
    }
    startRespawnSearchForPlayer(e, t, r, n, i, a, o, s, l) {
      return NetworkStartRespawnSearchForPlayer(e, t, r, n, i, a, o, s, l);
    }
    startRespawnSearchInAngledAreaForPlayer(e, t, r, n, i, a, o, s, l, d, c, u) {
      return NetworkStartRespawnSearchInAngledAreaForPlayer(e, t, r, n, i, a, o, s, l, d, c, u);
    }
    startSoloTutorialSession() {
      NetworkStartSoloTutorialSession();
    }
    startSynchronisedScene(e) {
      NetworkStartSynchronisedScene(e);
    }
    startUserContentPermissionsCheck() {
      return NetworkStartUserContentPermissionsCheck();
    }
    stopSynchronisedScene(e) {
      NetworkStopSynchronisedScene(e);
    }
    suppressInvite(e) {
      NetworkSuppressInvite(e);
    }
    textureDownloadRequest(e, t, r) {
      return UgcTextureDownloadRequest(e, t, r);
    }
    transitionTrack(e, t, r, n, i) {
      NetworkTransitionTrack(e, t, r, n, i);
    }
    triggerScriptCrcCheckOnPlayer(e, t, r) {
      return TriggerScriptCrcCheckOnPlayer(e, t, r);
    }
    tryAccessTunableBoolHash(e, t, r) {
      return NetworkTryAccessTunableBoolHash(e, t, r);
    }
    ugcCopyContent() {
      return UgcCopyContent();
    }
    ugcGetBookmarkedContent(e, t) {
      return UgcGetBookmarkedContent(e, t);
    }
    ugcGetContentUpdatedDate(e) {
      return UgcGetContentUpdatedDate(e);
    }
    ugcGetCrewContent(e, t, r) {
      return UgcGetCrewContent(e, t, r);
    }
    ugcGetFriendContent(e, t) {
      return UgcGetFriendContent(e, t);
    }
    ugcGetGetByCategory(e, t, r) {
      return UgcGetGetByCategory(e, t, r);
    }
    ugcGetMyContent(e, t) {
      return UgcGetMyContent(e, t);
    }
    ugcPoliciesMakePrivate(e) {
      return UgcPoliciesMakePrivate(e);
    }
    ugcQueryByContentIds(e, t, r) {
      return UgcQueryByContentIds(e, t, r);
    }
    ugcQueryMyContent(e, t, r, n, i) {
      return UgcQueryMyContent(e, t, r, n, i);
    }
    ugcQueryRecentlyCreatedContent(e, t, r, n) {
      return UgcQueryRecentlyCreatedContent(e, t, r, n);
    }
    ugcSetDeleted(e) {
      return UgcSetDeleted(e);
    }
    ugcTextureDownloadRequest(e, t, r, n) {
      return UgcTextureDownloadRequest(e, t, r, n);
    }
    updatePlayerScars() {
      NetworkUpdatePlayerScars();
    }
  }
  class Ao {
    constructor() {
      this.unk = ja();
    }
    isThreadActive(e) {
      return IsThreadActive(e);
    }
    terminateThread(e) {
      TerminateThread(e);
    }
    getIdOfThisThread() {
      return GetIdOfThisThread();
    }
    getNameOfThread(e) {
      return GetNameOfThread(e);
    }
    triggerScriptEvent(e, t, r) {
      return TriggerScriptEvent(e, t, r);
    }
    requestScript(e) {
      RequestScript(e);
    }
    setScriptAsNoLongerNeeded(e) {
      SetScriptAsNoLongerNeeded(e);
    }
    hasScriptLoaded(e) {
      return HasScriptLoaded(e);
    }
    doesScriptExist(e) {
      return DoesScriptExist(e);
    }
    request(e) {
      RequestScript(e);
    }
    setAsNoLongerNeeded(e) {
      SetScriptAsNoLongerNeeded(e);
    }
    hasLoaded(e) {
      return HasScriptLoaded(e);
    }
    doesExist(e) {
      return DoesScriptExist(e);
    }
    requestWithNameHash(e) {
      RequestScriptWithNameHash(e);
    }
    setWithNameHashAsNoLongerNeeded(e) {
      SetScriptWithNameHashAsNoLongerNeeded(e);
    }
    hasWithNameHashLoaded(e) {
      return HasScriptWithNameHashLoaded(e);
    }
    doesWithNameHashExist(e) {
      return DoesScriptWithNameHashExist(e);
    }
    terminateThisThread() {
      TerminateThisThread();
    }
    getNumberOfEvents(e) {
      return GetNumberOfEvents(e);
    }
    getEventExists(e, t) {
      return GetEventExists(e, t);
    }
    getEventAtIndex(e, t) {
      return GetEventAtIndex(e, t);
    }
    getEventData(e, t, r) {
      return GetEventData(e, t, r);
    }
    triggerEvent(e, t, r) {
      return TriggerScriptEvent(e, t, r);
    }
    shutdownLoadingScreen() {
      ShutdownLoadingScreen();
    }
    setNoLoadingScreen(e) {
      SetNoLoadingScreen(!!e);
    }
    getNoLoadingScreen() {
      return GetNoLoadingScreen();
    }
    bgStartContextHash(e) {
      BgStartContextHash(e);
    }
    bgEndContextHash(e) {
      BgEndContextHash(e);
    }
    bgStartContext(e) {
      BgStartContext(e);
    }
    bgEndContext(e) {
      BgEndContext(e);
    }
    requestStreamedScript(e) {
      RequestScriptWithNameHash(e);
    }
    setStreamedScriptAsNoLongerNeeded(e) {
      SetScriptWithNameHashAsNoLongerNeeded(e);
    }
    hasStreamedScriptLoaded(e) {
      return HasScriptWithNameHashLoaded(e);
    }
    isStreamedScriptRunning(e) {
      return IsStreamedScriptRunning(e);
    }
    getThreadName(e) {
      return GetNameOfThread(e);
    }
    getNumberOfInstancesOfStreamedScript(e) {
      return GetNumberOfInstancesOfStreamedScript(e);
    }
    threadIteratorReset() {
      ScriptThreadIteratorReset();
    }
    threadIteratorGetNextThreadId() {
      return ScriptThreadIteratorGetNextThreadId();
    }
    getNumberOfReferencesOfWithNameHash(e) {
      return GetNumberOfReferencesOfScriptWithNameHash(e);
    }
    getThisName() {
      return GetThisScriptName();
    }
    getHashOfThisName() {
      return GetHashOfThisScriptName();
    }
    triggerEvent2(e, t, r) {
      return TriggerScriptEvent(e, t, r);
    }
    _0xB1577667C3708F9B(...e) {
      return Citizen.invokeNative("0xB1577667C3708F9B", ...e);
    }
    _0x836B62713E0534CA(...e) {
      return Citizen.invokeNative("0x836B62713E0534CA", ...e);
    }
    _0x760910B49D2B98EA(...e) {
      return Citizen.invokeNative("0x760910B49D2B98EA", ...e);
    }
    _0x0F6F1EBBC4E1D5E6(...e) {
      return Citizen.invokeNative("0x0F6F1EBBC4E1D5E6", ...e);
    }
    _0x22E21FBCFC88C149(...e) {
      return Citizen.invokeNative("0x22E21FBCFC88C149", ...e);
    }
    _0x829CD22E043A2577(...e) {
      return Citizen.invokeNative("0x829CD22E043A2577", ...e);
    }
  }
  class To {
    constructor() {
      this.unk = ja();
    }
    createMobilePhone(e) {
      return CreateMobilePhone(e ?? 0);
    }
    setMobilePhoneScale(e) {
      SetMobilePhoneScale(e);
    }
    setMobilePhoneRotation(e, t, r, n) {
      SetMobilePhoneRotation(e, t, r, n ?? false);
    }
    setMobilePhonePosition(e, t, r) {
      SetMobilePhonePosition(e, t, r);
    }
    getMobilePhoneRotation(e) {
      return za(GetMobilePhoneRotation(e));
    }
    getMobilePhonePosition() {
      return za(GetMobilePhonePosition());
    }
    scriptIsMovingMobilePhoneOffscreen(e) {
      ScriptIsMovingMobilePhoneOffscreen(!!e);
    }
    getMobilePhoneRenderId() {
      return GetMobilePhoneRenderId();
    }
    createPhone(e) {
      CreateMobilePhone(e);
    }
    destroyPhone() {
      DestroyMobilePhone();
    }
    setPhoneScale(e) {
      SetMobilePhoneScale(e);
    }
    setPhoneRotation(e, t, r, n) {
      SetMobilePhoneRotation(e, t, r, n);
    }
    getPhoneRotation(e) {
      return za(GetMobilePhoneRotation(e));
    }
    setPhonePosition(e, t, r) {
      SetMobilePhonePosition(e, t, r);
    }
    getPhonePosition() {
      return za(GetMobilePhonePosition());
    }
    canPhoneBeSeenOnScreen() {
      return CanPhoneBeSeenOnScreen();
    }
    cellCamActivate(e, t) {
      CellCamActivate(!!e, !!t);
    }
    cellCamIsCharVisibleNoFaceCheck(e) {
      return CellCamIsCharVisibleNoFaceCheck(e);
    }
    getPhoneRenderId() {
      return GetMobilePhoneRenderId();
    }
    moveFinger(e) {
      MoveFinger(e);
    }
    setPhoneLean(e) {
      SetPhoneLean(!!e);
    }
    scriptIsMovingPhoneOffscreen(e) {
      ScriptIsMovingMobilePhoneOffscreen(!!e);
    }
    setPhoneUnk(e) {
      SetMobilePhoneUnk(!!e);
    }
    cellCamMoveFinger(e) {
      CellCamMoveFinger(e);
    }
    cellCamSetLean(e) {
      CellCamSetLean(!!e);
    }
    cellCamDisableThisFrame(e) {
      CellCamDisableThisFrame(!!e);
    }
    _0xA2CCBE62CD4C91A4(...e) {
      return Citizen.invokeNative("0xA2CCBE62CD4C91A4", ...e);
    }
    _0x1B0B4AEED5B9B41C(...e) {
      return Citizen.invokeNative("0x1B0B4AEED5B9B41C", ...e);
    }
    _0x53F4892D18EC90A4(...e) {
      return Citizen.invokeNative("0x53F4892D18EC90A4", ...e);
    }
    _0x3117D84EFA60F77B(...e) {
      return Citizen.invokeNative("0x3117D84EFA60F77B", ...e);
    }
    _0x15E69E2802C24B8D(...e) {
      return Citizen.invokeNative("0x15E69E2802C24B8D", ...e);
    }
    _0xAC2890471901861C(...e) {
      return Citizen.invokeNative("0xAC2890471901861C", ...e);
    }
    _0xD6ADE981781FCA09(...e) {
      return Citizen.invokeNative("0xD6ADE981781FCA09", ...e);
    }
    _0xF1E22DC13F5EEBAD(...e) {
      return Citizen.invokeNative("0xF1E22DC13F5EEBAD", ...e);
    }
    _0x466DA42C89865553(...e) {
      return Citizen.invokeNative("0x466DA42C89865553", ...e);
    }
  }
  class vo {
    constructor() {
      this.unk = ja();
    }
    appGetInt(e) {
      return AppGetInt(e);
    }
    appGetFloat(e) {
      return AppGetFloat(e);
    }
    appGetString(e) {
      return AppGetString(e);
    }
    appSetInt(e, t) {
      AppSetInt(e, t);
    }
    appSetFloat(e, t) {
      AppSetFloat(e, t);
    }
    appSetString(e, t) {
      AppSetString(e, t);
    }
    appSetApp(e) {
      AppSetApp(e);
    }
    appSetBlock(e) {
      AppSetBlock(e);
    }
    appHasSyncedData(e) {
      return AppHasSyncedData(e);
    }
    appDeleteAppData(e) {
      return AppDeleteAppData(e);
    }
    dataValid() {
      return AppDataValid();
    }
    getInt(e) {
      return AppGetInt(e);
    }
    getFloat(e) {
      return AppGetFloat(e);
    }
    getString(e) {
      return AppGetString(e);
    }
    setInt(e, t) {
      AppSetInt(e, t);
    }
    setFloat(e, t) {
      AppSetFloat(e, t);
    }
    setString(e, t) {
      AppSetString(e, t);
    }
    setApp(e) {
      AppSetApp(e);
    }
    setBlock(e) {
      AppSetBlock(e);
    }
    clearBlock() {
      AppClearBlock();
    }
    closeApp() {
      AppCloseApp();
    }
    closeBlock() {
      AppCloseBlock();
    }
    hasLinkedSocialClubAccount() {
      return AppHasLinkedSocialClubAccount();
    }
    hasSyncedData(e) {
      return AppHasSyncedData(e);
    }
    saveData() {
      AppSaveData();
    }
    getDeletedFileStatus() {
      return AppGetDeletedFileStatus();
    }
    deleteAppData(e) {
      return AppDeleteAppData(e);
    }
  }
  class Io {
    constructor() {
      this.unk = ja();
    }
    wait(e) {
      Wait(e);
    }
    startNewScript(e, t) {
      return StartNewScript(e, t ?? 1000);
    }
    startNewScriptWithArgs(e, t, r, n) {
      return StartNewScriptWithArgs(e, t, r, n ?? 1000);
    }
    startNewScriptWithNameHash(e, t) {
      return StartNewScriptWithNameHash(e, t ?? 1000);
    }
    startNewScriptWithNameHashAndArgs(e, t, r, n) {
      return StartNewScriptWithNameHashAndArgs(e, t, r, n ?? 1000);
    }
    timera() {
      return Timera();
    }
    timerb() {
      return Timerb();
    }
    settimera(e) {
      Settimera(e);
    }
    settimerb(e) {
      Settimerb(e);
    }
    timestep() {
      return Timestep();
    }
    sin(e) {
      return Sin(e);
    }
    cos(e) {
      return Cos(e);
    }
    sqrt(e) {
      return Sqrt(e);
    }
    pow(e, t) {
      return Pow(e, t);
    }
    log10(e) {
      return Log10(e);
    }
    vmag(e, t, r) {
      return Math.sqrt(e * e + t * t + r * r);
    }
    vmag2(e, t, r) {
      return Vmag2(e, t, r);
    }
    vdist(e, t, r, n, i, a) {
      const o = e - n;
      const s = t - i;
      const l = r - a;
      return Math.sqrt(o * o + s * s + l * l);
    }
    vdist2(e, t, r, n, i, a) {
      return Vdist2(e, t, r, n, i, a);
    }
    shiftLeft(e, t) {
      return ShiftLeft(e, t);
    }
    shiftRight(e, t) {
      return ShiftRight(e, t);
    }
    floor(e) {
      return Floor(e);
    }
    ceil(e) {
      return Ceil(e);
    }
    round(e) {
      return Round(e);
    }
    toFloat(e) {
      return ToFloat(e);
    }
    startNewStreamedScript(e, t) {
      return StartNewStreamedScript(e, t ?? 1000);
    }
    startNewStreamedScriptWithArgs(e, t, r) {
      const n = StartNewStreamedScriptWithArgs(e, t, r);
      if (Array.isArray(n)) {
        return {
          result: n[0],
          args: n[1]
        };
      } else {
        return {
          result: n,
          args: t
        };
      }
    }
    setThreadPriority(e) {
      SetThreadPriority(e);
    }
    setConnectableServers(e) {
      SetConnectableServers(e);
    }
    connectToServer(e, t, r) {
      ConnectToServer(e, t, r);
    }
  }
  class Eo {
    constructor() {
      this.unk = ja();
    }
    registerObjectScriptBrain(e, t, r, n, i, a) {
      RegisterObjectScriptBrain(e, t, r, n, i, a);
    }
    isObjectWithinBrainActivationRange(e) {
      return IsObjectWithinBrainActivationRange(e);
    }
    registerWorldPointScriptBrain(e, t, r) {
      RegisterWorldPointScriptBrain(e, t, r);
    }
    enableScriptBrainSet(e) {
      EnableScriptBrainSet(e);
    }
    disableScriptBrainSet(e) {
      DisableScriptBrainSet(e);
    }
    _0x0B40ED49D7D6FF84(...e) {
      return Citizen.invokeNative("0x0B40ED49D7D6FF84", ...e);
    }
    _0x4D953DF78EBF8158(...e) {
      return Citizen.invokeNative("0x4D953DF78EBF8158", ...e);
    }
    _0x6D6840CEE8845831(...e) {
      return Citizen.invokeNative("0x6D6840CEE8845831", ...e);
    }
    _0x6E91B04E08773030(...e) {
      return Citizen.invokeNative("0x6E91B04E08773030", ...e);
    }
    addScriptToRandomPed(e, t, r, n) {
      AddScriptToRandomPed(e, t, r, n);
    }
    registerObjectScript(e, t, r, n, i, a) {
      RegisterObjectScriptBrain(e, t, r, n, i, a);
    }
    isObjectWithinActivationRange(e) {
      return IsObjectWithinBrainActivationRange(e);
    }
    registerWorldPointScript(e, t, r) {
      RegisterWorldPointScriptBrain(e, t, r);
    }
    isWorldPointWithinActivationRange() {
      return IsWorldPointWithinBrainActivationRange();
    }
    enableScriptSet(e) {
      EnableScriptBrainSet(e);
    }
    disableScriptSet(e) {
      DisableScriptBrainSet(e);
    }
  }
  class ko {
    constructor() {
      this.unk = ja();
    }
    startCutscene(e) {
      StartCutscene(e);
    }
    stopCutscene(e) {
      StopCutscene(e ?? true);
    }
    requestCutscene(e, t) {
      RequestCutscene(e, t);
    }
    hasThisCutsceneLoaded(e) {
      return HasThisCutsceneLoaded(e);
    }
    startCutsceneAtCoords(e, t, r, n) {
      StartCutsceneAtCoords(e, t, r, n);
    }
    setCutsceneOrigin(e, t, r, n, i) {
      SetCutsceneOrigin(e, t, r, n, i);
    }
    getEntityIndexOfCutsceneEntity(e, t) {
      return GetEntityIndexOfCutsceneEntity(e, t);
    }
    registerEntityForCutscene(e, t, r, n, i) {
      RegisterEntityForCutscene(e, t, r, n, i);
    }
    setCutsceneTriggerArea(e, t, r, n, i, a) {
      SetCutsceneTriggerArea(e, t, r, n, i, a);
    }
    setCutsceneFadeValues(e, t, r, n) {
      SetCutsceneFadeValues(e, t, r, n);
    }
    setCutscenePedComponentVariation(e, t, r, n, i) {
      SetCutscenePedComponentVariation(e, t, r, n, i);
    }
    doesCutsceneEntityExist(e, t) {
      return DoesCutsceneEntityExist(e, t);
    }
    setCutscenePedPropVariation(e, t, r, n, i) {
      SetCutscenePedPropVariation(e, t, r, n, i);
    }
    request(e, t) {
      RequestCutscene(e, t);
    }
    requestWithPlaybackList(e, t, r) {
      RequestCutsceneWithPlaybackList(e, t, r);
    }
    remove() {
      RemoveCutscene();
    }
    hasLoaded() {
      return HasCutsceneLoaded();
    }
    isPlaybackFlagSet(e) {
      return IsCutscenePlaybackFlagSet(e);
    }
    setEntityStreamingFlags(e, t, r) {
      SetCutsceneEntityStreamingFlags(e, t, r);
    }
    requestCutFile(e) {
      RequestCutFile(e);
    }
    hasCutFileLoaded(e) {
      return HasCutFileLoaded(e);
    }
    removeCutFile(e) {
      RemoveCutFile(e);
    }
    start(e) {
      StartCutscene(e);
    }
    startAtCoords(e, t, r, n) {
      StartCutsceneAtCoords(e, t, r, n);
    }
    stop(e) {
      StopCutscene(e);
    }
    stopImmediately() {
      StopCutsceneImmediately();
    }
    setOrigin(e, t, r, n, i) {
      SetCutsceneOrigin(e, t, r, n, i);
    }
    getTime() {
      return GetCutsceneTime();
    }
    getTotalDuration() {
      return GetCutsceneTotalDuration();
    }
    wasSkipped() {
      return WasCutsceneSkipped();
    }
    hasFinished() {
      return HasCutsceneFinished();
    }
    isActive() {
      return IsCutsceneActive();
    }
    isPlaying() {
      return IsCutscenePlaying();
    }
    getSectionPlaying() {
      return GetCutsceneSectionPlaying();
    }
    registerEntityFor(e, t, r, n, i) {
      RegisterEntityForCutscene(e, t, r, n, i);
    }
    getEntityIndexOfRegisteredEntity(e, t) {
      return GetEntityIndexOfRegisteredEntity(e, t);
    }
    setTriggerArea(e, t, r, n, i, a) {
      SetCutsceneTriggerArea(e, t, r, n, i, a);
    }
    canSetEnterStateForRegisteredEntity(e, t) {
      return CanSetEnterStateForRegisteredEntity(e, t);
    }
    canSetExitStateForRegisteredEntity(e, t) {
      return CanSetExitStateForRegisteredEntity(e, t);
    }
    canSetExitStateForCamera(e) {
      return CanSetExitStateForCamera(e);
    }
    setFadeValues(e, t, r, n) {
      SetCutsceneFadeValues(e, t, r, n);
    }
    setCanBeSkipped(e) {
      SetCutsceneCanBeSkipped(e);
    }
    setPedComponentVariationFromPed(e, t, r) {
      SetCutscenePedComponentVariationFromPed(e, t, r);
    }
    setPedPropVariation(e, t, r, n, i) {
      SetCutscenePedPropVariation(e, t, r, n, i);
    }
    hasCutThisFrame() {
      return HasCutsceneCutThisFrame();
    }
    requestCutscene2(e, t, r) {
      RequestCutsceneWithPlaybackList(e, t, r);
    }
    hasThisLoaded(e) {
      return HasThisCutsceneLoaded(e);
    }
    canRequestAssetsForEntity() {
      return CanRequestAssetsForCutsceneEntity();
    }
    getCutFileNumSections(e) {
      return GetCutFileNumSections(e);
    }
    getEntityIndexOfEntity(e, t) {
      return GetEntityIndexOfCutsceneEntity(e, t);
    }
    registerSynchronisedScriptSpeech() {
      RegisterSynchronisedScriptSpeech();
    }
    setPedComponentVariation(e, t, r, n, i) {
      SetCutscenePedComponentVariation(e, t, r, n, i);
    }
    doesEntityExist(e, t) {
      return DoesCutsceneEntityExist(e, t);
    }
    async requestCutsceneAsync(e, t, r = 5000) {
      RequestCutscene(e, t);
      const n = GetGameTimer();
      while (!HasCutsceneLoaded()) {
        if (GetGameTimer() - n > r) {
          return false;
        }
        await new Promise(e => setTimeout(() => e(), 0));
      }
      return true;
    }
    async requestCutFileAsync(e, t = 5000) {
      RequestCutFile(e);
      const r = GetGameTimer();
      while (!HasCutFileLoaded(e)) {
        if (GetGameTimer() - r > t) {
          return false;
        }
        await new Promise(e => setTimeout(() => e(), 0));
      }
      return true;
    }
    _0x8D9DF6ECA8768583(...e) {
      return Citizen.invokeNative("0x8D9DF6ECA8768583", ...e);
    }
    _0x011883F41211432A(...e) {
      return Citizen.invokeNative("0x011883F41211432A", ...e);
    }
    _0x971D7B15BCDBEF99(...e) {
      return Citizen.invokeNative("0x971D7B15BCDBEF99", ...e);
    }
    _0x583DF8E3D4AFBD98(...e) {
      return Citizen.invokeNative("0x583DF8E3D4AFBD98", ...e);
    }
    _0x4CEBC1ED31E8925E(...e) {
      return Citizen.invokeNative("0x4CEBC1ED31E8925E", ...e);
    }
    _0x4FCD976DA686580C(...e) {
      return Citizen.invokeNative("0x4FCD976DA686580C", ...e);
    }
    _0x7F96F23FA9B73327(...e) {
      return Citizen.invokeNative("0x7F96F23FA9B73327", ...e);
    }
    _0xC61B86C9F61EB404(...e) {
      return Citizen.invokeNative("0xC61B86C9F61EB404", ...e);
    }
    _0x20746F7B1032A3C7(...e) {
      return Citizen.invokeNative("0x20746F7B1032A3C7", ...e);
    }
    _0x06EE9048FD080382(...e) {
      return Citizen.invokeNative("0x06EE9048FD080382", ...e);
    }
    _0xA0FE76168A189DDB(...e) {
      return Citizen.invokeNative("0xA0FE76168A189DDB", ...e);
    }
    _0x2F137B508DE238F2(...e) {
      return Citizen.invokeNative("0x2F137B508DE238F2", ...e);
    }
    _0xE36A98D8AB3D3C66(...e) {
      return Citizen.invokeNative("0xE36A98D8AB3D3C66", ...e);
    }
    _0x5EDEF0CF8C1DAB3C(...e) {
      return Citizen.invokeNative("0x5EDEF0CF8C1DAB3C", ...e);
    }
  }
  class fo {
    constructor() {
      this.unk = ja();
    }
    decorSetTime(e, t, r) {
      return DecorSetTime(e, t, r);
    }
    decorSetBool(e, t, r) {
      return DecorSetBool(e, t, r);
    }
    decorSetFloat(e, t, r) {
      return DecorSetFloat(e, t, r);
    }
    decorSetInt(e, t, r) {
      return DecorSetInt(e, t, r);
    }
    decorGetBool(e, t) {
      return DecorGetBool(e, t);
    }
    decorGetFloat(e, t) {
      return DecorGetFloat(e, t);
    }
    decorGetInt(e, t) {
      return DecorGetInt(e, t);
    }
    decorExistOn(e, t) {
      return DecorExistOn(e, t);
    }
    decorRemove(e, t) {
      return DecorRemove(e, t);
    }
    decorRegister(e, t) {
      DecorRegister(e, t);
    }
    decorIsRegisteredAsType(e, t) {
      return DecorIsRegisteredAsType(e, t);
    }
    decorRegisterLock() {
      DecorRegisterLock();
    }
  }
  class Do {
    constructor() {
      this.unk = ja();
    }
    isDlcPresent(e) {
      return IsDlcPresent(e);
    }
    nullify(e) {
      const [, t] = Nullify(e);
      return t;
    }
    _0x241FCA5B1AA14F75(...e) {
      return Citizen.invokeNative("0x241FCA5B1AA14F75", ...e);
    }
    _0xF2E07819EF1A5289(...e) {
      return Citizen.invokeNative("0xF2E07819EF1A5289", ...e);
    }
    _0x9489659372A81585(...e) {
      return Citizen.invokeNative("0x9489659372A81585", ...e);
    }
    _0xA213B11DFF526300(...e) {
      return Citizen.invokeNative("0xA213B11DFF526300", ...e);
    }
    _0xC4637A6D03C24CC3(...e) {
      return Citizen.invokeNative("0xC4637A6D03C24CC3", ...e);
    }
    isPresent(e) {
      return IsDlcPresent(e);
    }
    getExtraContentPackHasBeenInstalled() {
      return GetExtraContentPackHasBeenInstalled();
    }
    getIsLoadingScreenActive() {
      return GetIsLoadingScreenActive();
    }
    hasCloudRequestsFinished(e) {
      const [, t] = HasCloudRequestsFinished(e);
      return t;
    }
    onEnterSp() {
      OnEnterSp();
    }
    onEnterMp() {
      OnEnterMp();
    }
  }
  class Fo {
    constructor() {
      this.unk = ja();
    }
    getNumTattooShopDlcItems(e) {
      return GetNumTattooShopDlcItems(e);
    }
    getTattooShopDlcItemData(e, t) {
      return GetTattooShopDlcItemData(e, t);
    }
    initShopPedComponent() {
      return InitShopPedComponent();
    }
    initShopPedProp() {
      return InitShopPedProp();
    }
    setupShopPedApparelQuery(e, t, r, n) {
      return SetupShopPedApparelQuery(e, t, r, n);
    }
    setupShopPedApparelQueryTu(e, t, r, n, i, a) {
      return SetupShopPedApparelQueryTu(e, t, r, !!n, i, a);
    }
    getShopPedQueryComponent(e) {
      return GetShopPedQueryComponent(e);
    }
    getShopPedComponent(e) {
      return GetShopPedComponent(e);
    }
    getShopPedQueryProp(e) {
      return GetShopPedQueryProp(e);
    }
    getShopPedProp(e) {
      return GetShopPedProp(e);
    }
    getHashNameForComponent(e, t, r, n) {
      return GetHashNameForComponent(e, t, r, n);
    }
    getHashNameForProp(e, t, r, n) {
      return GetHashNameForProp(e, t, r, n);
    }
    getShopPedApparelVariantComponentCount(e) {
      return GetShopPedApparelVariantComponentCount(e);
    }
    getShopPedApparelVariantPropCount(e) {
      return GetShopPedApparelVariantPropCount(e);
    }
    getVariantComponent(e, t) {
      const r = GetVariantComponent(e, t);
      return {
        nameHash: r[0],
        enumValue: r[1],
        componentType: r[2]
      };
    }
    getVariantProp(e, t) {
      const r = GetVariantProp(e, t);
      return {
        nameHash: r[0],
        enumValue: r[1],
        anchorPoint: r[2]
      };
    }
    getShopPedApparelForcedComponentCount(e) {
      return GetShopPedApparelForcedComponentCount(e);
    }
    getShopPedApparelForcedPropCount(e) {
      return GetShopPedApparelForcedPropCount(e);
    }
    getForcedComponent(e, t) {
      const r = GetForcedComponent(e, t);
      return {
        nameHash: r[0],
        enumValue: r[1],
        componentType: r[2]
      };
    }
    getForcedProp(e, t) {
      const r = GetForcedProp(e, t);
      return {
        nameHash: r[0],
        enumValue: r[1],
        anchorPoint: r[2]
      };
    }
    doesShopPedApparelHaveRestrictionTag(e, t, r) {
      return DoesShopPedApparelHaveRestrictionTag(e, t, r);
    }
    setupShopPedOutfitQuery(e, t) {
      return SetupShopPedOutfitQuery(e, !!t);
    }
    getShopPedQueryOutfit(e) {
      return GetShopPedQueryOutfit(e);
    }
    getShopPedOutfit(e) {
      return GetShopPedOutfit(e);
    }
    getShopPedOutfitLocate(e) {
      return GetShopPedOutfitLocate(e);
    }
    getShopPedOutfitPropVariant(e, t) {
      return GetShopPedOutfitPropVariant(e, t);
    }
    getShopPedOutfitComponentVariant(e, t) {
      return GetShopPedOutfitComponentVariant(e, t);
    }
    getNumDlcVehicles() {
      return GetNumDlcVehicles();
    }
    getDlcVehicleModel(e) {
      return GetDlcVehicleModel(e);
    }
    getDlcVehicleData(e) {
      return GetDlcVehicleData(e);
    }
    getDlcVehicleFlags(e) {
      return GetDlcVehicleFlags(e);
    }
    getNumDlcWeapons() {
      return GetNumDlcWeapons();
    }
    getNumDlcWeaponsSp() {
      return GetNumDlcWeaponsSp();
    }
    getDlcWeaponData(e) {
      return GetDlcWeaponData(e);
    }
    getDlcWeaponDataSp(e) {
      return GetDlcWeaponDataSp(e);
    }
    getNumDlcWeaponComponents(e) {
      return GetNumDlcWeaponComponents(e);
    }
    getNumDlcWeaponComponentsSp(e) {
      return GetNumDlcWeaponComponentsSp(e);
    }
    getDlcWeaponComponentData(e, t) {
      return GetDlcWeaponComponentData(e, t);
    }
    getDlcWeaponComponentDataSp(e, t) {
      return GetDlcWeaponComponentDataSp(e, t);
    }
    isContentItemLocked(e) {
      return IsContentItemLocked(e);
    }
    isDlcVehicleMod(e) {
      return IsDlcVehicleMod(e);
    }
    getDlcVehicleModLockHash(e) {
      return GetDlcVehicleModLockHash(e);
    }
    getNumPropsFromOutfit(e, t, r, n, i, a) {
      return GetNumPropsFromOutfit(e, t, r, !!n, i, a);
    }
    getNumForcedComponents(e) {
      return GetNumForcedComponents(e);
    }
    getPropFromOutfit(e, t) {
      return GetPropFromOutfit(e, t);
    }
    isDlcDataEmpty(e) {
      return IsDlcDataEmpty(e);
    }
    loadContentChangeSetGroup(e) {
      LoadContentChangeSetGroup(e);
    }
    unloadContentChangeSetGroup(e) {
      UnloadContentChangeSetGroup(e);
    }
    _0x10144267DD22866C(...e) {
      return Citizen.invokeNative("0x10144267DD22866C", ...e);
    }
    _0x96E2929292A4DB77(...e) {
      return Citizen.invokeNative("0x96E2929292A4DB77", ...e);
    }
    _0x6CEBE002E58DEE97(...e) {
      return Citizen.invokeNative("0x6CEBE002E58DEE97", ...e);
    }
  }
  class No {
    constructor() {
      this.unk = ja();
    }
    _0xF2CA003F167E21D2(...e) {
      return Citizen.invokeNative("0xF2CA003F167E21D2", ...e);
    }
    _0xFA1E0E893D915215(...e) {
      return Citizen.invokeNative("0xFA1E0E893D915215", ...e);
    }
    getBroadcastFinshedLosSound(e) {
      GetBroadcastFinshedLosSound(!!e);
    }
    getLoadFreemode() {
      return LoadingscreenGetLoadFreemode();
    }
    setLoadFreemode(e) {
      LoadingscreenSetLoadFreemode(!!e);
    }
    getLoadFreemodeWithEventName() {
      return LoadingscreenGetLoadFreemodeWithEventName();
    }
    setLoadFreemodeWithEventName(e) {
      LoadingscreenSetLoadFreemodeWithEventName(!!e);
    }
    isLoadingFreemode() {
      return LoadingscreenIsLoadingFreemode();
    }
    setIsLoadingFreemode(e) {
      LoadingscreenSetIsLoadingFreemode(!!e);
    }
  }
  class bo {
    constructor() {
      this.unk = ja();
    }
    getSystemLanguage() {
      return LocalizationGetSystemLanguage();
    }
    getCurrentLanguage() {
      return GetCurrentLanguage();
    }
    getSystemDateFormat() {
      return LocalizationGetSystemDateFormat();
    }
  }
  class xo {
    constructor() {
      this.unk = ja();
    }
    createItemset(e) {
      return CreateItemset(e);
    }
    destroyItemset(e) {
      DestroyItemset(e);
    }
    isItemsetValid(e) {
      return IsItemsetValid(e);
    }
    addToItemset(e, t) {
      return AddToItemset(e, t);
    }
    removeFromItemset(e, t) {
      RemoveFromItemset(e, t);
    }
    getItemsetSize(e) {
      return GetItemsetSize(e);
    }
    getIndexedItemInItemset(e, t) {
      return GetIndexedItemInItemset(e, t);
    }
    isInItemset(e, t) {
      return IsInItemset(e, t);
    }
    cleanItemset(e) {
      CleanItemset(e);
    }
    create(e) {
      return CreateItemset(e);
    }
    destroy(e) {
      DestroyItemset(e);
    }
    isValid(e) {
      return IsItemsetValid(e);
    }
    addTo(e, t) {
      return AddToItemset(e, t);
    }
    removeFrom(e, t) {
      RemoveFromItemset(e, t);
    }
    getSize(e) {
      return GetItemsetSize(e);
    }
    getIndexedItemIn(e, t) {
      return GetIndexedItemInItemset(e, t);
    }
    isIn(e, t) {
      return IsInItemset(e, t);
    }
    clean(e) {
      CleanItemset(e);
    }
  }
  class Bo {
    constructor() {
      this.unk = ja();
    }
    isRecording() {
      return IsRecording();
    }
    is() {
      return IsRecording();
    }
    start(e) {
      StartRecording(e);
    }
    stopAndSaveClip() {
      StopRecording();
    }
    stopAndDiscardClip() {
      StopRecordingAndDiscardClip();
    }
    saveClip() {
      return SaveRecordingClip();
    }
    stopThisFrame() {
      StopRecordingThisFrame();
    }
    disableRockstarEditorCameraChanges() {
      DisableRockstarEditorCameraChanges();
    }
    _0x48621C9FCA3EBD28(...e) {
      return Citizen.invokeNative("0x48621C9FCA3EBD28", ...e);
    }
    _0x81CBAE94390F9F89(...e) {
      return Citizen.invokeNative("0x81CBAE94390F9F89", ...e);
    }
    _0x13B350B8AD0EEE10(...e) {
      return Citizen.invokeNative("0x13B350B8AD0EEE10", ...e);
    }
    _0x293220DA1B46CEBC(...e) {
      return Citizen.invokeNative("0x293220DA1B46CEBC", ...e);
    }
    _0x208784099002BC30(...e) {
      return Citizen.invokeNative("0x208784099002BC30", ...e);
    }
    _0xF854439EFBB3B583(...e) {
      return Citizen.invokeNative("0xF854439EFBB3B583", ...e);
    }
    _0x66972397E0757E7A(...e) {
      return Citizen.invokeNative("0x66972397E0757E7A", ...e);
    }
    _0xDF4B952F7D381B95(...e) {
      return Citizen.invokeNative("0xDF4B952F7D381B95", ...e);
    }
    _0x4282E08174868BE3(...e) {
      return Citizen.invokeNative("0x4282E08174868BE3", ...e);
    }
    _0x33D47E85B476ABCD(...e) {
      return Citizen.invokeNative("0x33D47E85B476ABCD", ...e);
    }
  }
  class Ro {
    constructor() {
      this.unk = ja();
    }
    _0x7E2BD3EF6C205F09(...e) {
      return Citizen.invokeNative("0x7E2BD3EF6C205F09", ...e);
    }
    _0x5AD3932DAEB1E5D3(...e) {
      return Citizen.invokeNative("0x5AD3932DAEB1E5D3", ...e);
    }
    _0xE058175F8EAFE79A(...e) {
      return Citizen.invokeNative("0xE058175F8EAFE79A", ...e);
    }
    activateRockstarEditor() {
      ActivateRockstarEditor();
    }
    isInteriorRenderingDisabled() {
      return IsInteriorRenderingDisabled();
    }
    resetEditorValues() {
      ResetEditorValues();
    }
    continueTransition() {
      ContinueTransition();
    }
    isEditorAvailable() {
      return IsEditorAvailable();
    }
  }
  class Go {
    constructor() {
      this.unk = ja();
    }
    loadUgcFile(e) {
      return DatafileLoadOfflineUgc(e);
    }
    objectValueAddBoolean(e, t) {
      return DatadictSetBool(e, t);
    }
    objectValueAddInteger(e, t) {
      return DatadictSetInt(e, t);
    }
    objectValueAddFloat(e, t) {
      return DatadictSetFloat(e, t);
    }
    objectValueAddString(e, t) {
      return DatadictSetString(e, t);
    }
    objectValueAddVector3(e, t, r, n) {
      return DatadictSetVector(e, t, r, n);
    }
    objectValueAddObject(e) {
      return DatadictCreateDict(e);
    }
    objectValueAddArray(e) {
      return DatadictCreateArray(e);
    }
    objectValueGetBoolean(e) {
      return DatadictGetBool(e);
    }
    objectValueGetInteger(e) {
      return DatadictGetInt(e);
    }
    objectValueGetFloat(e) {
      return DatadictGetFloat(e);
    }
    objectValueGetString(e) {
      return DatadictGetString(e);
    }
    objectValueGetVector3(e) {
      return DatadictGetVector(e);
    }
    objectValueGetObject(e) {
      return DatadictGetDict(e);
    }
    objectValueGetArray(e) {
      return DatadictGetArray(e);
    }
    objectValueGetType(e) {
      return DatadictGetType(e);
    }
    arrayValueAddBoolean(e) {
      return DataarrayAddBool(e);
    }
    arrayValueAddInteger(e) {
      return DataarrayAddInt(e);
    }
    arrayValueAddFloat(e) {
      return DataarrayAddFloat(e);
    }
    arrayValueAddString(e) {
      return DataarrayAddString(e);
    }
    arrayValueAddVector3(e, t, r) {
      return DataarrayAddVector(e, t, r);
    }
    arrayValueAddObject(e) {
      return DataarrayAddDict(e);
    }
    arrayValueGetBoolean(e) {
      return DataarrayGetBool(e);
    }
    arrayValueGetInteger(e) {
      return DataarrayGetInt(e);
    }
    arrayValueGetFloat(e) {
      return DataarrayGetFloat(e);
    }
    arrayValueGetString(e) {
      return DataarrayGetString(e);
    }
    arrayValueGetVector3(e) {
      return DataarrayGetVector(e);
    }
    arrayValueGetObject(e) {
      return DataarrayGetDict(e);
    }
    arrayValueGetSize(e) {
      return DataarrayGetCount(e);
    }
    arrayValueGetType(e) {
      return DataarrayGetType(e);
    }
    watchRequestId(e) {
      DatafileWatchRequestId(e);
    }
    clearWatchList() {
      DatafileClearWatchList();
    }
    isValidRequestId(e) {
      return DatafileIsValidRequestId(e);
    }
    hasLoadedFileData(e) {
      return DatafileHasLoadedFileData(e);
    }
    hasValidFileData(e) {
      return DatafileHasValidFileData(e);
    }
    selectActiveFile(e) {
      return DatafileSelectActiveFile(e);
    }
    deleteRequestedFile(e) {
      return DatafileDeleteRequestedFile(e);
    }
    ugcCreateContent(e, t, r, n, i, a) {
      return UgcCreateContent(e, t, r, n, i, a);
    }
    ugcCreateMission(e, t, r, n, i) {
      return UgcCreateMission(e, t, r, n, i);
    }
    ugcUpdateContent(e, t, r, n, i, a) {
      return UgcUpdateContent(e, t, r, n, i, a);
    }
    ugcUpdateMission(e, t, r, n, i) {
      return UgcUpdateMission(e, t, r, n, i);
    }
    ugcSetPlayerData(e, t, r) {
      return UgcSetPlayerData(e, t, r);
    }
    selectUgcData(e) {
      return DatafileSelectUgcData(e);
    }
    selectUgcStats(e, t) {
      return DatafileSelectUgcStats(e, t);
    }
    selectUgcPlayerData(e) {
      return DatafileSelectUgcPlayerData(e);
    }
    selectCreatorStats(e) {
      return DatafileSelectCreatorStats(e);
    }
    loadOfflineUgc(e) {
      return DatafileLoadOfflineUgc(e);
    }
    create() {
      DatafileCreate();
    }
    delete() {
      DatafileDelete();
    }
    storeMissionHeader() {
      DatafileStoreMissionHeader();
    }
    flushMissionHeader() {
      DatafileFlushMissionHeader();
    }
    getFileDict() {
      return DatafileGetFileDict();
    }
    startSaveToCloud(e) {
      return DatafileStartSaveToCloud(e);
    }
    updateSaveToCloud() {
      return DatafileUpdateSaveToCloud();
    }
    isSavePending() {
      return DatafileIsSavePending();
    }
    datadictSetBool(e, t) {
      return DatadictSetBool(e, t);
    }
    datadictSetInt(e, t) {
      return DatadictSetInt(e, t);
    }
    datadictSetFloat(e, t) {
      return DatadictSetFloat(e, t);
    }
    datadictSetString(e, t) {
      return DatadictSetString(e, t);
    }
    datadictSetVector(e, t, r, n) {
      return DatadictSetVector(e, t, r, n);
    }
    datadictCreateDict(e) {
      return DatadictCreateDict(e);
    }
    datadictCreateArray(e) {
      return DatadictCreateArray(e);
    }
    datadictGetBool(e) {
      return DatadictGetBool(e);
    }
    datadictGetInt(e) {
      return DatadictGetInt(e);
    }
    datadictGetFloat(e) {
      return DatadictGetFloat(e);
    }
    datadictGetString(e) {
      return DatadictGetString(e);
    }
    datadictGetVector(e) {
      return DatadictGetVector(e);
    }
    datadictGetDict(e) {
      return DatadictGetDict(e);
    }
    datadictGetArray(e) {
      return DatadictGetArray(e);
    }
    datadictGetType(e) {
      return DatadictGetType(e);
    }
    dataarrayAddBool(e) {
      return DataarrayAddBool(e);
    }
    dataarrayAddInt(e) {
      return DataarrayAddInt(e);
    }
    dataarrayAddFloat(e) {
      return DataarrayAddFloat(e);
    }
    dataarrayAddString(e) {
      return DataarrayAddString(e);
    }
    dataarrayAddVector(e, t, r) {
      return DataarrayAddVector(e, t, r);
    }
    dataarrayAddDict(e) {
      return DataarrayAddDict(e);
    }
    dataarrayGetBool(e) {
      return DataarrayGetBool(e);
    }
    dataarrayGetInt(e) {
      return DataarrayGetInt(e);
    }
    dataarrayGetFloat(e) {
      return DataarrayGetFloat(e);
    }
    dataarrayGetString(e) {
      return DataarrayGetString(e);
    }
    dataarrayGetVector(e) {
      return DataarrayGetVector(e);
    }
    dataarrayGetDict(e) {
      return DataarrayGetDict(e);
    }
    dataarrayGetCount(e) {
      return DataarrayGetCount(e);
    }
    dataarrayGetType(e) {
      return DataarrayGetType(e);
    }
    _0xA6EEF01087181EDD(...e) {
      return Citizen.invokeNative("0xA6EEF01087181EDD", ...e);
    }
    _0x6AD0BD5E087866CB(...e) {
      return Citizen.invokeNative("0x6AD0BD5E087866CB", ...e);
    }
    _0xDBF860CF1DB8E599(...e) {
      return Citizen.invokeNative("0xDBF860CF1DB8E599", ...e);
    }
  }
  class Mo {
    constructor() {
      this.unk = ja();
    }
    removeShockingEvent(e) {
      RemoveShockingEvent(e);
    }
    clearDecisionMakerEventResponse(e, t) {
      ClearDecisionMakerEventResponse(e, t);
    }
    blockDecisionMakerEvent(e, t) {
      BlockDecisionMakerEvent(e, t);
    }
    unblockDecisionMakerEvent(e, t) {
      UnblockDecisionMakerEvent(e, t);
    }
    addShockingEventAtPosition(e, t, r, n, i) {
      return AddShockingEventAtPosition(e, t, r, n, i);
    }
    addShockingEventForEntity(e, t, r) {
      return AddShockingEventForEntity(e, t, r);
    }
    isShockingEventInSphere(e, t, r, n, i) {
      return IsShockingEventInSphere(e, t, r, n, i);
    }
    removeAllShockingEvents(e) {
      RemoveAllShockingEvents(!!e);
    }
    suppressShockingEventTypeNextFrame(e) {
      SuppressShockingEventTypeNextFrame(e);
    }
    setDecisionMaker(e, t) {
      SetDecisionMaker(e, t);
    }
    blockDecisionMaker(e, t) {
      BlockDecisionMakerEvent(e, t);
    }
    unblockDecisionMaker(e, t) {
      UnblockDecisionMakerEvent(e, t);
    }
    removeShocking(e) {
      return RemoveShockingEvent(e);
    }
    suppressShockingEventsNextFrame() {
      SuppressShockingEventsNextFrame();
    }
    suppressAgitationEventsNextFrame() {
      SuppressAgitationEventsNextFrame();
    }
    clearDecisionMakerResponse(e, t) {
      ClearDecisionMakerEventResponse(e, t);
    }
    addShockingAtPosition(e, t, r, n, i) {
      return AddShockingEventAtPosition(e, t, r, n, i);
    }
    addShockingForEntity(e, t, r) {
      return AddShockingEventForEntity(e, t, r);
    }
    isShockingInSphere(e, t, r, n, i) {
      return IsShockingEventInSphere(e, t, r, n, i);
    }
    removeAllShockingS(e) {
      RemoveAllShockingEvents(!!e);
    }
    removeShockingSpawnBlockingAreas() {
      RemoveShockingEventSpawnBlockingAreas();
    }
    suppressShockingTypeNextFrame(e) {
      SuppressShockingEventTypeNextFrame(e);
    }
  }
  class Vo {
    constructor() {
      this.entity = new Ya();
      this.ped = new Za();
      this.player = new Ja();
      this.vehicle = new Xa();
      this.task = new Qa();
      this.streaming = new $a();
      this.pad = new eo();
      this.cam = new to();
      this.audio = new ro();
      this.hud = new no();
      this.misc = new io();
      this.weapon = new ao();
      this.clock = new oo();
      this.fire = new so();
      this.object = new lo();
      this.shapetest = new co();
      this.interior = new uo();
      this.zone = new ho();
      this.pathfind = new po();
      this.physics = new go();
      this.water = new So();
      this.graphics = new Co();
      this.stats = new yo();
      this.network = new Po();
      this.script = new Ao();
      this.mobile = new To();
      this.app = new vo();
      this.system = new Io();
      this.brain = new Eo();
      this.cutscene = new ko();
      this.decorator = new fo();
      this.dlc = new Do();
      this.files = new Fo();
      this.loadingscreen = new No();
      this.localization = new bo();
      this.itemset = new xo();
      this.recording = new Bo();
      this.replay = new Ro();
      this.datafile = new Go();
      this.event = new Mo();
      this.gxt = new Ka();
      this.gameplay = this.misc;
      this.ai = this.task;
      this.time = this.clock;
      this.rope = this.physics;
      this.controls = this.pad;
      this.ui = this.hud;
    }
    invoke(e, ...t) {
      const r = Ua(t);
      return Citizen.invokeNative(e, ...r);
    }
    invokeFloat(e, ...t) {
      const r = Ua(t);
      return Citizen.invokeNative(e, Citizen.resultAsFloat(), ...r);
    }
    invokeString(e, ...t) {
      const r = Ua(t);
      return Citizen.invokeNative(e, Citizen.resultAsString(), ...r);
    }
    invokeVector3(e, ...t) {
      const r = Ua(t);
      const n = Citizen.invokeNative(e, Citizen.resultAsVector(), ...r);
      if (n) {
        return za(n);
      } else {
        return new i(0, 0, 0);
      }
    }
    joaat(e) {
      if (Array.isArray(e)) {
        return e.map(e => n(GetHashKey(e)));
      } else {
        return n(GetHashKey(e));
      }
    }
    wait(e) {
      Wait(e);
    }
    waitAsync(e) {
      return new Promise(t => setTimeout(t, e));
    }
    waitForAsync(e, t) {
      return new Promise(r => {
        const n = GetGameTimer();
        const i = () => {
          if (e()) {
            r(true);
          } else if (GetGameTimer() - n >= t) {
            r(false);
          } else {
            setTimeout(i, 0);
          }
        };
        i();
      });
    }
  }
  let wo = class {
    constructor(e) {
      this._plugins = new Map();
      this._builtins = [];
      if (!e || !e.side) {
        throw new Error("PluginManager: { side, scriptKey, resourceStartEvent } required");
      }
      this._side = e.side;
      this._scriptKey = e.scriptKey;
      this._resourceStartEvent = e.resourceStartEvent;
      this._contextExtras = e.contextExtras ?? (() => ({}));
    }
    registerBuiltin(e) {
      this._builtins.push(e);
    }
    loadAll() {
      this._disabled = this._readDisabled();
      this._disabled.size;
      for (const e of this._builtins) {
        if (!this._disabled.has(e.name)) {
          this._invoke(e.name, GetCurrentResourceName(), e.default, {
            builtin: true
          });
        }
      }
      this._scanExternal();
      if (this._resourceStartEvent) {
        on(this._resourceStartEvent, e => this._tryLoadResource(e));
      }
    }
    _readDisabled() {
      const e = new Set();
      const t = t => {
        if (!t) {
          return;
        }
        const r = GetNumResourceMetadata(t, "disable_plugin");
        for (let n = 0; n < r; n++) {
          const r = GetResourceMetadata(t, "disable_plugin", n);
          if (r) {
            e.add(r.trim());
          }
        }
      };
      t(GetCurrentResourceName());
      const r = GetNumResources();
      for (let e = 0; e < r; e++) {
        const r = GetResourceByFindIndex(e);
        if (r && GetResourceMetadata(r, "ragemp_bridge", 0) === "library") {
          t(r);
        }
      }
      return e;
    }
    _scanExternal() {
      const e = GetNumResources();
      for (let t = 0; t < e; t++) {
        const e = GetResourceByFindIndex(t);
        if (e) {
          if (GetResourceState(e) === "started") {
            this._tryLoadResource(e);
          }
        }
      }
    }
    _tryLoadResource(e) {
      if (e === GetCurrentResourceName()) {
        return;
      }
      if (GetResourceMetadata(e, "bridge_plugin", 0) !== "yes") {
        return;
      }
      const t = GetResourceMetadata(e, this._scriptKey, 0);
      if (!t) {
        return;
      }
      const r = LoadResourceFile(e, t);
      if (!r) {
        console.warn(`[bridge:plugins] Cannot read ${t} from resource '${e}'`);
        return;
      }
      const n = GetResourceMetadata(e, "bridge_plugin_name", 0) || e;
      if (!this._disabled?.has(n) && !this._plugins.has(n)) {
        try {
          const t = new Function("mp", "plugin", r);
          this._invoke(n, e, e => t(e.mp, e.plugin), {
            builtin: false
          });
        } catch (t) {
          console.error(`[bridge:plugins] Failed to load '${n}' from '${e}':`, t);
        }
      }
    }
    _invoke(e, t, r, n) {
      const i = globalThis.mp;
      const a = this._makeContext(e, t, n.builtin);
      this._plugins.set(e, a);
      try {
        r({
          mp: i,
          plugin: a
        });
        a.log(`loaded (${n.builtin ? "built-in" : "external"})`);
      } catch (t) {
        console.error(`[bridge:plugins] Setup of '${e}' threw:`, t);
      }
    }
    _makeContext(e, t, r) {
      const n = {
        name: e,
        resource: t,
        builtin: r,
        namespace: t => `${e}:${t}`,
        log(...t) {
          console.log(`[plugin:${e}]`, ...t);
        }
      };
      return Object.assign(n, this._contextExtras(e, t) ?? {});
    }
    list() {
      return [...this._plugins.values()];
    }
    get(e) {
      return this._plugins.get(e) ?? null;
    }
    has(e) {
      return this._plugins.has(e);
    }
  };
  class _o extends wo {
    constructor() {
      super({
        side: "client",
        scriptKey: "bridge_client_script",
        resourceStartEvent: "onClientResourceStart",
        contextExtras: e => {
          const t = globalThis.mp;
          return {
            browsers: {
              create(r) {
                const n = t.browsers.new(r);
                const i = n.call.bind(n);
                n.call = (t, ...r) => i(`${e}:${t}`, ...r);
                return n;
              }
            }
          };
        }
      });
    }
  }
  const Oo = Object.freeze({
    INPUT_NEXT_CAMERA: 0,
    INPUT_LOOK_LR: 1,
    INPUT_LOOK_UD: 2,
    INPUT_LOOK_UP_ONLY: 3,
    INPUT_LOOK_DOWN_ONLY: 4,
    INPUT_LOOK_LEFT_ONLY: 5,
    INPUT_LOOK_RIGHT_ONLY: 6,
    INPUT_CINEMATIC_SLOWMO: 7,
    INPUT_SCRIPTED_FLY_UD: 8,
    INPUT_SCRIPTED_FLY_LR: 9,
    INPUT_SCRIPTED_FLY_ZUP: 10,
    INPUT_SCRIPTED_FLY_ZDOWN: 11,
    INPUT_WEAPON_WHEEL_UD: 12,
    INPUT_WEAPON_WHEEL_LR: 13,
    INPUT_WEAPON_WHEEL_NEXT: 14,
    INPUT_WEAPON_WHEEL_PREV: 15,
    INPUT_SELECT_NEXT_WEAPON: 16,
    INPUT_SELECT_PREV_WEAPON: 17,
    INPUT_SKIP_CUTSCENE: 18,
    INPUT_CHARACTER_WHEEL: 19,
    INPUT_MULTIPLAYER_INFO: 20,
    INPUT_SPRINT: 21,
    INPUT_JUMP: 22,
    INPUT_ENTER: 23,
    INPUT_ATTACK: 24,
    INPUT_AIM: 25,
    INPUT_LOOK_BEHIND: 26,
    INPUT_PHONE: 27,
    INPUT_SPECIAL_ABILITY: 28,
    INPUT_SPECIAL_ABILITY_SECONDARY: 29,
    INPUT_MOVE_LR: 30,
    INPUT_MOVE_UD: 31,
    INPUT_MOVE_UP_ONLY: 32,
    INPUT_MOVE_DOWN_ONLY: 33,
    INPUT_MOVE_LEFT_ONLY: 34,
    INPUT_MOVE_RIGHT_ONLY: 35,
    INPUT_DUCK: 36,
    INPUT_SELECT_WEAPON: 37,
    INPUT_PICKUP: 38,
    INPUT_SNIPER_ZOOM: 39,
    INPUT_SNIPER_ZOOM_IN_ONLY: 40,
    INPUT_SNIPER_ZOOM_OUT_ONLY: 41,
    INPUT_SNIPER_ZOOM_IN_SECONDARY: 42,
    INPUT_SNIPER_ZOOM_OUT_SECONDARY: 43,
    INPUT_COVER: 44,
    INPUT_RELOAD: 45,
    INPUT_TALK: 46,
    INPUT_DETONATE: 47,
    INPUT_HUD_SPECIAL: 48,
    INPUT_ARREST: 49,
    INPUT_ACCURATE_AIM: 50,
    INPUT_CONTEXT: 51,
    INPUT_CONTEXT_SECONDARY: 52,
    INPUT_WEAPON_SPECIAL: 53,
    INPUT_WEAPON_SPECIAL_TWO: 54,
    INPUT_DIVE: 55,
    INPUT_DROP_WEAPON: 56,
    INPUT_DROP_AMMO: 57,
    INPUT_THROW_GRENADE: 58,
    INPUT_VEH_MOVE_LR: 59,
    INPUT_VEH_MOVE_UD: 60,
    INPUT_VEH_MOVE_UP_ONLY: 61,
    INPUT_VEH_MOVE_DOWN_ONLY: 62,
    INPUT_VEH_MOVE_LEFT_ONLY: 63,
    INPUT_VEH_MOVE_RIGHT_ONLY: 64,
    INPUT_VEH_SPECIAL: 65,
    INPUT_VEH_GUN_LR: 66,
    INPUT_VEH_GUN_UD: 67,
    INPUT_VEH_AIM: 68,
    INPUT_VEH_ATTACK: 69,
    INPUT_VEH_ATTACK2: 70,
    INPUT_VEH_ACCELERATE: 71,
    INPUT_VEH_BRAKE: 72,
    INPUT_VEH_DUCK: 73,
    INPUT_VEH_HEADLIGHT: 74,
    INPUT_VEH_EXIT: 75,
    INPUT_VEH_HANDBRAKE: 76,
    INPUT_VEH_HOTWIRE_LEFT: 77,
    INPUT_VEH_HOTWIRE_RIGHT: 78,
    INPUT_VEH_LOOK_BEHIND: 79,
    INPUT_VEH_CIN_CAM: 80,
    INPUT_VEH_NEXT_RADIO: 81,
    INPUT_VEH_PREV_RADIO: 82,
    INPUT_VEH_NEXT_RADIO_TRACK: 83,
    INPUT_VEH_PREV_RADIO_TRACK: 84,
    INPUT_VEH_RADIO_WHEEL: 85,
    INPUT_VEH_HORN: 86,
    INPUT_VEH_FLY_THROTTLE_UP: 87,
    INPUT_VEH_FLY_THROTTLE_DOWN: 88,
    INPUT_VEH_FLY_YAW_LEFT: 89,
    INPUT_VEH_FLY_YAW_RIGHT: 90,
    INPUT_VEH_PASSENGER_AIM: 91,
    INPUT_VEH_PASSENGER_ATTACK: 92,
    INPUT_VEH_SPECIAL_ABILITY_FRANKLIN: 93,
    INPUT_VEH_STUNT_UD: 94,
    INPUT_VEH_CINEMATIC_UD: 95,
    INPUT_VEH_CINEMATIC_UP_ONLY: 96,
    INPUT_VEH_CINEMATIC_DOWN_ONLY: 97,
    INPUT_VEH_CINEMATIC_LR: 98,
    INPUT_VEH_SELECT_NEXT_WEAPON: 99,
    INPUT_VEH_SELECT_PREV_WEAPON: 100,
    INPUT_VEH_ROOF: 101,
    INPUT_VEH_JUMP: 102,
    INPUT_VEH_GRAPPLING_HOOK: 103,
    INPUT_VEH_SHUFFLE: 104,
    INPUT_VEH_DROP_PROJECTILE: 105,
    INPUT_VEH_MOUSE_CONTROL_OVERRIDE: 106,
    INPUT_VEH_FLY_ROLL_LR: 107,
    INPUT_VEH_FLY_ROLL_LEFT_ONLY: 108,
    INPUT_VEH_FLY_ROLL_RIGHT_ONLY: 109,
    INPUT_VEH_FLY_PITCH_UD: 110,
    INPUT_VEH_FLY_PITCH_UP_ONLY: 111,
    INPUT_VEH_FLY_PITCH_DOWN_ONLY: 112,
    INPUT_VEH_FLY_UNDERCARRIAGE: 113,
    INPUT_VEH_FLY_ATTACK: 114,
    INPUT_VEH_FLY_SELECT_NEXT_WEAPON: 115,
    INPUT_VEH_FLY_SELECT_PREV_WEAPON: 116,
    INPUT_VEH_FLY_SELECT_TARGET_LEFT: 117,
    INPUT_VEH_FLY_SELECT_TARGET_RIGHT: 118,
    INPUT_VEH_FLY_VERTICAL_FLIGHT_MODE: 119,
    INPUT_VEH_FLY_DUCK: 120,
    INPUT_VEH_FLY_ATTACK_CAMERA: 121,
    INPUT_VEH_FLY_MOUSE_CONTROL_OVERRIDE: 122,
    INPUT_VEH_SUB_TURN_LR: 123,
    INPUT_VEH_SUB_TURN_LEFT_ONLY: 124,
    INPUT_VEH_SUB_TURN_RIGHT_ONLY: 125,
    INPUT_VEH_SUB_PITCH_UD: 126,
    INPUT_VEH_SUB_PITCH_UP_ONLY: 127,
    INPUT_VEH_SUB_PITCH_DOWN_ONLY: 128,
    INPUT_VEH_SUB_THROTTLE_UP: 129,
    INPUT_VEH_SUB_THROTTLE_DOWN: 130,
    INPUT_VEH_SUB_ASCEND: 131,
    INPUT_VEH_SUB_DESCEND: 132,
    INPUT_VEH_SUB_TURN_HARD_LEFT: 133,
    INPUT_VEH_SUB_TURN_HARD_RIGHT: 134,
    INPUT_VEH_PUSHBIKE_PEDAL: 135,
    INPUT_VEH_PUSHBIKE_SPRINT: 136,
    INPUT_VEH_PUSHBIKE_FRONT_BRAKE: 137,
    INPUT_VEH_PUSHBIKE_REAR_BRAKE: 138,
    INPUT_MELEE_ATTACK_LIGHT: 140,
    INPUT_MELEE_ATTACK_HEAVY: 141,
    INPUT_MELEE_ATTACK_ALTERNATE: 142,
    INPUT_MELEE_BLOCK: 143,
    INPUT_PARACHUTE_DEPLOY: 144,
    INPUT_PARACHUTE_DETACH: 145,
    INPUT_PARACHUTE_TURN_LR: 146,
    INPUT_PARACHUTE_TURN_LEFT_ONLY: 147,
    INPUT_PARACHUTE_TURN_RIGHT_ONLY: 148,
    INPUT_PARACHUTE_PITCH_UD: 149,
    INPUT_PARACHUTE_PITCH_UP_ONLY: 150,
    INPUT_PARACHUTE_PITCH_DOWN_ONLY: 151,
    INPUT_PARACHUTE_BRAKE_LEFT: 152,
    INPUT_PARACHUTE_BRAKE_RIGHT: 153,
    INPUT_PARACHUTE_SMOKE: 154,
    INPUT_PARACHUTE_PRECISION_LANDING: 155,
    INPUT_MAP: 156,
    INPUT_SELECT_WEAPON_UNARMED: 157,
    INPUT_SELECT_WEAPON_MELEE: 158,
    INPUT_SELECT_WEAPON_HANDGUN: 159,
    INPUT_SELECT_WEAPON_SHOTGUN: 160,
    INPUT_SELECT_WEAPON_SMG: 161,
    INPUT_SELECT_WEAPON_AUTO_RIFLE: 162,
    INPUT_SELECT_WEAPON_SNIPER: 163,
    INPUT_SELECT_WEAPON_HEAVY: 164,
    INPUT_SELECT_WEAPON_SPECIAL: 165,
    INPUT_SELECT_CHARACTER_MICHAEL: 166,
    INPUT_SELECT_CHARACTER_FRANKLIN: 167,
    INPUT_SELECT_CHARACTER_TREVOR: 168,
    INPUT_SELECT_CHARACTER_MULTIPLAYER: 169,
    INPUT_SAVE_REPLAY_CLIP: 170,
    INPUT_SPECIAL_ABILITY_PC: 171,
    INPUT_CELLPHONE_UP: 172,
    INPUT_CELLPHONE_DOWN: 173,
    INPUT_CELLPHONE_LEFT: 174,
    INPUT_CELLPHONE_RIGHT: 175,
    INPUT_CELLPHONE_SELECT: 176,
    INPUT_CELLPHONE_CANCEL: 177,
    INPUT_CELLPHONE_OPTION: 178,
    INPUT_CELLPHONE_EXTRA_OPTION: 179,
    INPUT_CELLPHONE_SCROLL_FORWARD: 180,
    INPUT_CELLPHONE_SCROLL_BACKWARD: 181,
    INPUT_CELLPHONE_CAMERA_FOCUS_LOCK: 182,
    INPUT_CELLPHONE_CAMERA_GRID: 183,
    INPUT_CELLPHONE_CAMERA_SELFIE: 184,
    INPUT_CELLPHONE_CAMERA_DOF: 185,
    INPUT_CELLPHONE_CAMERA_EXPRESSION: 186,
    INPUT_FRONTEND_DOWN: 187,
    INPUT_FRONTEND_UP: 188,
    INPUT_FRONTEND_LEFT: 189,
    INPUT_FRONTEND_RIGHT: 190,
    INPUT_FRONTEND_RDOWN: 191,
    INPUT_FRONTEND_RUP: 192,
    INPUT_FRONTEND_RLEFT: 193,
    INPUT_FRONTEND_RRIGHT: 194,
    INPUT_FRONTEND_AXIS_X: 195,
    INPUT_FRONTEND_AXIS_Y: 196,
    INPUT_FRONTEND_RIGHT_AXIS_X: 197,
    INPUT_FRONTEND_RIGHT_AXIS_Y: 198,
    INPUT_FRONTEND_PAUSE: 199,
    INPUT_FRONTEND_PAUSE_ALTERNATE: 200,
    INPUT_FRONTEND_ACCEPT: 201,
    INPUT_FRONTEND_CANCEL: 202,
    INPUT_FRONTEND_X: 203,
    INPUT_FRONTEND_Y: 204,
    INPUT_FRONTEND_LB: 205,
    INPUT_FRONTEND_RB: 206,
    INPUT_FRONTEND_LT: 207,
    INPUT_FRONTEND_RT: 208,
    INPUT_FRONTEND_LS: 209,
    INPUT_FRONTEND_RS: 210,
    INPUT_FRONTEND_LEADERBOARD: 211,
    INPUT_FRONTEND_SOCIAL_CLUB: 212,
    INPUT_FRONTEND_SOCIAL_CLUB_SECONDARY: 213,
    INPUT_FRONTEND_DELETE: 214,
    INPUT_FRONTEND_ENDSCREEN_ACCEPT: 215,
    INPUT_FRONTEND_ENDSCREEN_EXPAND: 216,
    INPUT_FRONTEND_SELECT: 217,
    INPUT_SCRIPT_LEFT_AXIS_X: 218,
    INPUT_SCRIPT_LEFT_AXIS_Y: 219,
    INPUT_SCRIPT_RIGHT_AXIS_X: 220,
    INPUT_SCRIPT_RIGHT_AXIS_Y: 221,
    INPUT_SCRIPT_RUP: 222,
    INPUT_SCRIPT_RDOWN: 223,
    INPUT_SCRIPT_RLEFT: 224,
    INPUT_SCRIPT_RRIGHT: 225,
    INPUT_SCRIPT_LB: 226,
    INPUT_SCRIPT_RB: 227,
    INPUT_SCRIPT_LT: 228,
    INPUT_SCRIPT_RT: 229,
    INPUT_SCRIPT_LS: 230,
    INPUT_SCRIPT_RS: 231,
    INPUT_SCRIPT_PAD_UP: 232,
    INPUT_SCRIPT_PAD_DOWN: 233,
    INPUT_SCRIPT_PAD_LEFT: 234,
    INPUT_SCRIPT_PAD_RIGHT: 235,
    INPUT_SCRIPT_SELECT: 236,
    INPUT_CURSOR_ACCEPT: 237,
    INPUT_CURSOR_CANCEL: 238,
    INPUT_CURSOR_X: 239,
    INPUT_CURSOR_Y: 240,
    INPUT_CURSOR_SCROLL_UP: 241,
    INPUT_CURSOR_SCROLL_DOWN: 242,
    INPUT_ENTER_CHEAT_CODE: 243,
    INPUT_INTERACTION_MENU: 244,
    INPUT_MP_TEXT_CHAT_ALL: 245,
    INPUT_MP_TEXT_CHAT_TEAM: 246,
    INPUT_MP_TEXT_CHAT_FRIENDS: 247,
    INPUT_MP_TEXT_CHAT_CREW: 248,
    INPUT_PUSH_TO_TALK: 249,
    INPUT_CREATOR_LS: 250,
    INPUT_CREATOR_RS: 251,
    INPUT_CREATOR_LT: 252,
    INPUT_CREATOR_RT: 253,
    INPUT_CREATOR_MENU_TOGGLE: 254,
    INPUT_CREATOR_ACCEPT: 255,
    INPUT_CREATOR_DELETE: 256,
    INPUT_ATTACK2: 257,
    INPUT_RAPPEL_JUMP: 258,
    INPUT_RAPPEL_LONG_JUMP: 259,
    INPUT_RAPPEL_SMASH_WINDOW: 260,
    INPUT_PREV_WEAPON: 261,
    INPUT_NEXT_WEAPON: 262,
    INPUT_MELEE_ATTACK1: 263,
    INPUT_MELEE_ATTACK2: 264,
    INPUT_WHISTLE: 265,
    INPUT_MOVE_LEFT: 266,
    INPUT_MOVE_RIGHT: 267,
    INPUT_MOVE_UP: 268,
    INPUT_MOVE_DOWN: 269,
    INPUT_LOOK_LEFT: 270,
    INPUT_LOOK_RIGHT: 271,
    INPUT_LOOK_UP: 272,
    INPUT_LOOK_DOWN: 273,
    INPUT_SNIPER_ZOOM_IN: 274,
    INPUT_SNIPER_ZOOM_OUT: 275,
    INPUT_SNIPER_ZOOM_IN_ALTERNATE: 276,
    INPUT_SNIPER_ZOOM_OUT_ALTERNATE: 277,
    INPUT_VEH_MOVE_LEFT: 278,
    INPUT_VEH_MOVE_RIGHT: 279,
    INPUT_VEH_MOVE_UP: 280,
    INPUT_VEH_MOVE_DOWN: 281,
    INPUT_VEH_GUN_LEFT: 282,
    INPUT_VEH_GUN_RIGHT: 283,
    INPUT_VEH_GUN_UP: 284,
    INPUT_VEH_GUN_DOWN: 285,
    INPUT_VEH_LOOK_LEFT: 286,
    INPUT_VEH_LOOK_RIGHT: 287,
    INPUT_REPLAY_START_STOP_RECORDING: 288,
    INPUT_REPLAY_START_STOP_RECORDING_SECONDARY: 289,
    INPUT_SCALED_LOOK_LR: 290,
    INPUT_SCALED_LOOK_UD: 291,
    INPUT_SCALED_LOOK_UP_ONLY: 292,
    INPUT_SCALED_LOOK_DOWN_ONLY: 293,
    INPUT_SCALED_LOOK_LEFT_ONLY: 294,
    INPUT_SCALED_LOOK_RIGHT_ONLY: 295,
    INPUT_REPLAY_MARKER_DELETE: 296,
    INPUT_REPLAY_CLIP_DELETE: 297,
    INPUT_REPLAY_PAUSE: 298,
    INPUT_REPLAY_REWIND: 299,
    INPUT_REPLAY_FFWD: 300,
    INPUT_REPLAY_NEWMARKER: 301,
    INPUT_REPLAY_RECORD: 302,
    INPUT_REPLAY_SCREENSHOT: 303,
    INPUT_REPLAY_HIDEHUD: 304,
    INPUT_REPLAY_STARTPOINT: 305,
    INPUT_REPLAY_ENDPOINT: 306,
    INPUT_REPLAY_ADVANCE: 307,
    INPUT_REPLAY_BACK: 308,
    INPUT_REPLAY_TOOLS: 309,
    INPUT_REPLAY_RESTART: 310,
    INPUT_REPLAY_SHOWHOTKEY: 311,
    INPUT_REPLAY_CYCLEMARKERLEFT: 312,
    INPUT_REPLAY_CYCLEMARKERRIGHT: 313,
    INPUT_REPLAY_FOVINCREASE: 314,
    INPUT_REPLAY_FOVDECREASE: 315,
    INPUT_REPLAY_CAMERAUP: 316,
    INPUT_REPLAY_CAMERADOWN: 317,
    INPUT_REPLAY_SAVE: 318,
    INPUT_REPLAY_TOGGLETIME: 319,
    INPUT_REPLAY_TOGGLETIPS: 320,
    INPUT_REPLAY_PREVIEW: 321,
    INPUT_REPLAY_TOGGLE_TIMELINE: 322,
    INPUT_REPLAY_TIMELINE_PICKUP_CLIP: 323,
    INPUT_REPLAY_TIMELINE_DUPLICATE_CLIP: 324,
    INPUT_REPLAY_TIMELINE_PLACE_CLIP: 325,
    INPUT_REPLAY_CTRL: 326,
    INPUT_REPLAY_TIMELINE_SAVE: 327,
    INPUT_REPLAY_PREVIEW_AUDIO: 328,
    INPUT_VEH_DRIVE_LOOK: 329,
    INPUT_VEH_DRIVE_LOOK2: 330,
    INPUT_VEH_FLY_ATTACK2: 331,
    INPUT_RADIO_WHEEL_UD: 332,
    INPUT_RADIO_WHEEL_LR: 333,
    INPUT_VEH_SLOWMO_UD: 334,
    INPUT_VEH_SLOWMO_UP_ONLY: 335,
    INPUT_VEH_SLOWMO_DOWN_ONLY: 336,
    INPUT_VEH_HYDRAULICS_CONTROL_TOGGLE: 337,
    INPUT_VEH_HYDRAULICS_CONTROL_LEFT: 338,
    INPUT_VEH_HYDRAULICS_CONTROL_RIGHT: 339,
    INPUT_VEH_HYDRAULICS_CONTROL_UP: 340,
    INPUT_VEH_HYDRAULICS_CONTROL_DOWN: 341,
    INPUT_VEH_HYDRAULICS_CONTROL_UD: 342,
    INPUT_VEH_HYDRAULICS_CONTROL_LR: 343,
    INPUT_SWITCH_VISOR: 344,
    INPUT_VEH_MELEE_HOLD: 345,
    INPUT_VEH_MELEE_LEFT: 346,
    INPUT_VEH_MELEE_RIGHT: 347,
    INPUT_MAP_POI: 348,
    INPUT_REPLAY_SNAPMATIC_PHOTO: 349,
    INPUT_VEH_CAR_JUMP: 350,
    INPUT_VEH_ROCKET_BOOST: 351,
    INPUT_VEH_FLY_BOOST: 352,
    INPUT_VEH_PARACHUTE: 353,
    INPUT_VEH_BIKE_WINGS: 354,
    INPUT_VEH_FLY_BOMB_BAY: 355,
    INPUT_VEH_FLY_COUNTER: 356,
    INPUT_VEH_TRANSFORM: 357
  });
  const Ho = Object.freeze({
    GenericGamepad: 0,
    GenericKeyboard: 1,
    GamepadFallbackLeft: 2,
    GamepadFallbackRight: 3,
    Move: 4,
    Look: 5,
    Wheel: 6,
    Aim: 7,
    Script: 8,
    ScriptLeftStick: 9,
    ScriptRightStick: 10,
    ScriptButtons: 11,
    ScriptDPad: 12,
    ScriptShoulders: 13,
    ScriptTriggers: 14,
    ScriptBumpers: 15,
    Vehicle: 16,
    VehicleSubTask: 17,
    VehicleHeli: 18,
    VehicleArmed: 19,
    VehicleLook: 20,
    VehicleMoveAll: 21,
    VehicleFly: 22,
    VehicleFlySubTask: 23,
    VehicleSub: 24,
    VehicleSubSubTask: 25,
    VehicleSpecial: 26,
    Parachute: 27,
    Selectweapon: 28,
    SelectcharacterPC: 29,
    SelectcharacterConsole: 30,
    Frontend: 31,
    FrontendExtra: 32,
    CursorSimple: 33
  });
  const Lo = Object.freeze({
    Unarmed: 2460120199,
    Knife: 2578778090,
    Nightstick: 1737195953,
    Hammer: 1317494643,
    Bat: 2508868239,
    Crowbar: 2227010557,
    GolfClub: 1141786504,
    Bottle: 4192643659,
    Dagger: 2460120199,
    Hatchet: 4191993645,
    KnuckleDuster: 3638508604,
    Machete: 3713923289,
    Flashlight: 2343591895,
    SwitchBlade: 3756226112,
    BattleAxe: 628676019,
    PoolCue: 2484171525,
    StoneHatchet: 940833800,
    Pistol: 453432689,
    Pistol50: 2578377531,
    ApPistol: 584646201,
    StunGun: 911657153,
    FlareGun: 1198879012,
    MarksmanPistol: 3696079510,
    HeavyPistol: 3523564046,
    VintagePistol: 137902532,
    CeramicPistol: 727643307,
    NavyRevolver: 2441047180,
    MicroSmg: 324215364,
    Smg: 736523883,
    SmgMk2: 2024373456,
    AssaultSmg: 4024951519,
    MiniSmg: 3173288789,
    MachinePistol: 3675956304,
    CombatPdw: 171789620,
    PumpShotgun: 487013001,
    PumpShotgunMk2: 1432025498,
    SawnOffShotgun: 2017895192,
    BullpupShotgun: 2640438543,
    Musket: 2828843422,
    HeavyShotgun: 984333226,
    DoubleBarrelShotgun: 2937143193,
    AssaultRifle: 3220176749,
    AssaultRifleMk2: 961495388,
    CarbineRifle: 2210333304,
    CarbineRifleMk2: 4208062921,
    AdvancedRifle: 2937143193,
    SpecialCarbine: 3231910285,
    SpecialCarbineMk2: 2526821735,
    BullpupRifle: 2132975508,
    BullpupRifleMk2: 2228681469,
    CompactRifle: 1649403952,
    MG: 2634544996,
    CombatMG: 2144741730,
    CombatMGMk2: 3686625920,
    GusenbergSweeper: 1627465347,
    SniperRifle: 100416529,
    HeavySniperMk2: 177293209,
    MarksmanRifle: 3342088282,
    MarksmanRifleMk2: 1785463520,
    GrenadeLauncher: 2726580491,
    GrenadeLauncherSmoke: 1305664598,
    RPG: 2982836145,
    Minigun: 1119849093,
    Firework: 2138347493,
    Railgun: 1834241177,
    HomingLauncher: 1672152130,
    CompactGrenadeLauncher: 125959754,
    Widowmaker: 96792014,
    Grenade: 2481070269,
    StickyBomb: 741814745,
    ProximityMines: 2874559379,
    BZGas: 2694266206,
    Molotov: 615608432,
    FireExtinguisher: 101631238,
    Flare: 1233104067,
    Ball: 600439132,
    SmokeGrenade: 4256979749,
    Snowball: 883325847,
    PipeBomb: 3125143736,
    Parachute: 4222310262,
    NightVision: 1121918618,
    UpNAtomizer: 3220176749
  });
  const Wo = Object.freeze({
    Grenade: 0,
    GrenadeLauncher: 1,
    StickyBomb: 2,
    Molotov: 3,
    Rocket: 4,
    TankShell: 5,
    HiOctane: 6,
    Car: 7,
    Plane: 8,
    PetrolPump: 9,
    Bike: 10,
    DirSteam: 11,
    DirFlame: 12,
    DirWaterHydrant: 13,
    DirGasCanister: 14,
    Boat: 15,
    ShipDestroy: 16,
    Truck: 17,
    Bullet: 18,
    SmokeGGrenade: 19,
    Bzgas: 20,
    Flare: 21,
    GasCanister: 22,
    Extinguisher: 23,
    ProgrammableAr: 24,
    Train: 25,
    Barrel: 26,
    Propane: 27,
    Blimp: 28,
    DirFlameExplode: 29,
    Tanker: 30,
    PlaneRocket: 31,
    VehicleBullet: 32,
    GasTank: 33,
    Firework: 34,
    Snowball: 35,
    ProxMine: 36,
    ValkyrieCannon: 37,
    AirDefence: 38,
    PipeBomb: 39,
    VehicleMine: 40,
    ExplosiveAmmo: 41,
    ApcShell: 42,
    BombCluster: 43,
    BombGas: 44,
    BombIncendiary: 45,
    BombStandard: 46,
    Torpedo: 47,
    TorpedoUnderwater: 48,
    BombushkaCannon: 49,
    BombushkaBomb: 50,
    BombClusterSecondary: 51,
    HunterBarrage: 52,
    HunterCannon: 53,
    RogueCannon: 54,
    MineUnderwater: 55,
    OrbitalCannon: 56,
    BombStandardWide: 57,
    ExplosiveAmmoShotgun: 58,
    Oppressor2Cannon: 59,
    MortarKinetic: 60,
    VehicleMineKinetic: 61,
    VehicleMineEmp: 62,
    VehicleMineSpike: 63,
    VehicleMineSlick: 64,
    VehicleMineTar: 65,
    ScriptDrone: 66,
    Raygun: 67,
    BuriedMine: 68,
    ScriptMissile: 69,
    RcTankRocket: 70,
    BombWater: 71,
    BombWaterSecondary: 72
  });
  const Uo = Object.freeze({
    Unknown: 0,
    Unarmed: 2460120199,
    Knife: 2578778090,
    Bat: 2508868239,
    Pistol: 453432689,
    Shotgun: 487013001,
    Rifle: 3220176749,
    SMG: 736523883,
    Sniper: 100416529,
    Explosion: 2481070269,
    Burning: 615608432,
    Vehicle: 2766108401,
    Drowning: 1835574969,
    Fall: 1940947112,
    Suicide: 2830677410
  });
  const zo = Object.freeze({
    WEAPON_PISTOL: 4067108297,
    WEAPON_COMBATPISTOL: 2305275123,
    WEAPON_APPISTOL: 995243505,
    WEAPON_PISTOL50: 653289387,
    WEAPON_MICROSMG: 520014261,
    WEAPON_SMG: 1028243366,
    WEAPON_ASSAULTSMG: 3226124393,
    WEAPON_ASSAULTRIFLE: 849957719,
    WEAPON_CARBINERIFLE: 1322335919,
    WEAPON_ADVANCEDRIFLE: 4160570121,
    WEAPON_MG: 1319734449,
    WEAPON_COMBATMG: 1365140586,
    WEAPON_PUMPSHOTGUN: 2400181773,
    WEAPON_SAWNOFFSHOTGUN: 3542905355,
    WEAPON_ASSAULTSHOTGUN: 3414227423,
    WEAPON_BULLPUPSHOTGUN: 1811229214,
    WEAPON_SNIPERRIFLE: 3281318479,
    WEAPON_HEAVYSNIPER: 3804020689,
    WEAPON_GRENADELAUNCHER: 3305389532,
    WEAPON_RPG: 1295434569,
    WEAPON_MINIGUN: 3397440282,
    WEAPON_GRENADE: 1586395878,
    WEAPON_STICKYBOMB: 1146899818,
    WEAPON_SMOKEGRENADE: 2192794354,
    WEAPON_MOLOTOV: 465177571,
    WEAPON_PETROLCAN: 3332236287,
    HEALTH_STANDARD: 2406513688,
    ARMOUR_STANDARD: 1274757841,
    MONEY_CASE: 3463437627,
    MONEY_WALLET: 289298530,
    MONEY_PURSE: 513448440,
    MONEY_DEP_BAG: 2985318976,
    MONEY_PAPER_BAG: 922165672,
    MONEY_SECURITY_CASE: 920358658,
    MONEY_VARIABLE: 3680564576,
    MONEY_MED_BAG: 341217064,
    VEHICLE_HEALTH_STANDARD: 338401988
  });
  const jo = Object.freeze({
    Bones: Object.freeze({
      chassis: "chassis",
      chassis_dummy: "chassis_dummy",
      chassis_Control: "chassis_Control",
      seat_dside_f: "seat_dside_f",
      seat_pside_f: "seat_pside_f",
      seat_dside_r: "seat_dside_r",
      seat_pside_r: "seat_pside_r",
      seat_dside_r1: "seat_dside_r1",
      seat_pside_r1: "seat_pside_r1",
      seat_dside_r2: "seat_dside_r2",
      seat_pside_r2: "seat_pside_r2",
      door_dside_f: "door_dside_f",
      door_pside_f: "door_pside_f",
      door_dside_r: "door_dside_r",
      door_pside_r: "door_pside_r",
      handle_dside_f: "handle_dside_f",
      handle_pside_f: "handle_pside_f",
      handle_dside_r: "handle_dside_r",
      handle_pside_r: "handle_pside_r",
      windscreen: "windscreen",
      windscreen_r: "windscreen_r",
      window_lf: "window_lf",
      window_rf: "window_rf",
      window_lr: "window_lr",
      window_rr: "window_rr",
      bonnet: "bonnet",
      boot: "boot",
      exhaust: "exhaust",
      engine: "engine",
      wheel_lf: "wheel_lf",
      wheel_rf: "wheel_rf",
      wheel_lr: "wheel_lr",
      wheel_rr: "wheel_rr",
      wheel_lm1: "wheel_lm1",
      wheel_rm1: "wheel_rm1",
      bumper_f: "bumper_f",
      bumper_r: "bumper_r",
      wing_lf: "wing_lf",
      wing_rf: "wing_rf",
      headlight_l: "headlight_l",
      headlight_r: "headlight_r",
      taillight_l: "taillight_l",
      taillight_r: "taillight_r",
      indicator_lf: "indicator_lf",
      indicator_rf: "indicator_rf",
      indicator_lr: "indicator_lr",
      indicator_rr: "indicator_rr",
      brakelight_l: "brakelight_l",
      brakelight_r: "brakelight_r",
      brakelight_m: "brakelight_m",
      reversinglight_l: "reversinglight_l",
      reversinglight_r: "reversinglight_r",
      extralight_1: "extralight_1",
      extralight_2: "extralight_2",
      extralight_3: "extralight_3",
      extralight_4: "extralight_4",
      petrolcap: "petrolcap",
      petroltank: "petroltank",
      petroltank_l: "petroltank_l",
      petroltank_r: "petroltank_r",
      steeringwheel: "steeringwheel",
      hbgrip_l: "hbgrip_l",
      hbgrip_r: "hbgrip_r",
      siren1: "siren1",
      siren2: "siren2",
      spoiler: "spoiler",
      misc_a: "misc_a",
      misc_b: "misc_b",
      misc_c: "misc_c",
      misc_d: "misc_d",
      misc_e: "misc_e",
      misc_f: "misc_f",
      misc_g: "misc_g",
      misc_h: "misc_h"
    }),
    ModType: Object.freeze({
      Spoiler: 0,
      FrontBumper: 1,
      RearBumper: 2,
      SideSkirt: 3,
      Exhaust: 4,
      Chassis: 5,
      Grille: 6,
      Hood: 7,
      Fender: 8,
      RightFender: 9,
      Roof: 10,
      Engine: 11,
      Brakes: 12,
      Transmission: 13,
      Horns: 14,
      Suspension: 15,
      Armor: 16,
      FrontWheels: 23,
      BackWheels: 24,
      PlateHolder: 25,
      VanityPlate: 26,
      TrimDesign: 27,
      Ornament: 28,
      DashBoard: 29,
      DialDesign: 30,
      Speakers: 32,
      Seats: 33,
      SteeringWheel: 33,
      ShiftLever: 34,
      Plaques: 35,
      Hydraulics: 38,
      EngineBlock: 39,
      AirFilter: 40,
      Struts: 41,
      ArchCover: 42,
      Aerials: 43,
      Trim: 44,
      Tank: 45,
      Windows: 46,
      Livery: 48
    }),
    Class: Object.freeze({
      Compacts: 0,
      Sedans: 1,
      SUVs: 2,
      Coupes: 3,
      Muscle: 4,
      SportsClassics: 5,
      Sports: 6,
      Super: 7,
      Motorcycles: 8,
      OffRoad: 9,
      Industrial: 10,
      Utility: 11,
      Vans: 12,
      Cycles: 13,
      Boats: 14,
      Helicopters: 15,
      Planes: 16,
      Service: 17,
      Emergency: 18,
      Military: 19,
      Commercial: 20,
      Trains: 21
    })
  });
  const qo = Object.freeze({
    Driver: 0,
    Passenger1: 1,
    Passenger2: 2,
    Passenger3: 3,
    Passenger4: 4,
    Passenger5: 5,
    Passenger6: 6,
    Passenger7: 7,
    Passenger8: 8,
    Passenger9: 9,
    Passenger10: 10,
    Passenger11: 11,
    Passenger12: 12,
    Passenger13: 13,
    Passenger14: 14,
    Passenger15: 15,
    Passenger16: 16
  });
  const Ko = Object.freeze({
    BlueOnWhite1: 0,
    YellowOnBlack: 1,
    YellowOnBlue: 2,
    BlueOnWhite2: 3,
    BlueOnWhite3: 4,
    Yankton: 5
  });
  const Yo = Object.freeze({
    Head: 0,
    Beard: 1,
    Hair: 2,
    Torso: 3,
    Legs: 4,
    Hands: 5,
    Foot: 6,
    Eyes: 7,
    Accessories: 8,
    Tasks: 9,
    Decals: 10,
    Tops: 11
  });
  const Zo = Object.freeze({
    Blemishes: 0,
    FacialHair: 1,
    Eyebrows: 2,
    Ageing: 3,
    Makeup: 4,
    Blush: 5,
    Complexion: 6,
    SunDamage: 7,
    Lipstick: 8,
    MolesFreckles: 9,
    ChestHair: 10,
    BodyBlemishes: 11,
    AddBodyBlemishes: 12
  });
  const Jo = Object.freeze({
    Helmet: 0,
    Glasses: 1,
    EarPiece: 2
  });
  const Xo = Object.freeze({
    Helmet: 0,
    Glasses: 1,
    EarPiece: 2,
    Watch: 6,
    Bracelet: 7
  });
  const Qo = Object.freeze({
    ExtraSunny: 0,
    Clear: 1,
    Clouds: 2,
    Smog: 3,
    Foggy: 4,
    Overcast: 5,
    Rain: 6,
    Thunder: 7,
    Clearing: 8,
    Neutral: 9,
    Snow: 10,
    Blizzard: 11,
    Snowlight: 12,
    Xmas: 13,
    Halloween: 14
  });
  const $o = Object.freeze({
    UpsideDownCone: 0,
    VerticalCylinder: 1,
    ThickChevronUp: 2,
    ThinChevronUp: 3,
    CheckeredFlagRect: 4,
    CheckeredFlagCircle: 5,
    VerticleCircle: 6,
    PlaneModel: 7,
    LostMCDark: 8,
    LostMCLight: 9,
    Number0: 10,
    Number1: 11,
    Number2: 12,
    Number3: 13,
    Number4: 14,
    Number5: 15,
    Number6: 16,
    Number7: 17,
    Number8: 18,
    Number9: 19,
    ChevronUpx1: 20,
    ChevronUpx2: 21,
    ChevronUpx3: 22,
    HorizontalCircleFat: 23,
    ReplayIcon: 24,
    HorizontalCircleSkinny: 25,
    HorizontalCircleSkinnyArrow: 26,
    HorizontalSplitArrowCircle: 27,
    DebugSphere: 28,
    DollarSign: 29,
    HorizontalBars: 30,
    WolfHead: 31,
    QuestionMark: 32,
    PlaneSymbol: 33,
    HelicopterSymbol: 34,
    BoatSymbol: 35,
    CarSymbol: 36,
    MotorcycleSymbol: 37,
    BikeSymbol: 38,
    TruckSymbol: 39,
    ParachuteSymbol: 40,
    SawbladeSymbol: 41,
    RampSymbol: 42,
    Ring: 43
  });
  const es = Object.freeze({
    POLICE_STATION_ALARMS: "POLICE_STATION_ALARMS",
    PRISON_ALARMS: "PRISON_ALARMS",
    PORT_OF_LS_ALARMS: "PORT_OF_LS_ALARMS",
    JEWEL_STORE_HEIST_ALARMS: "JEWEL_STORE_HEIST_ALARMS",
    FIB_FLOOR_49_ALARMS: "FIB_FLOOR_49_ALARMS",
    FIB_FLOOR_53_ALARMS: "FIB_FLOOR_53_ALARMS",
    AGENCY_HEIST_FIB_TOWER_ALARMS: "AGENCY_HEIST_FIB_TOWER_ALARMS",
    PALETO_BAY_SHERIFF_BUILDING_ALARMS: "PALETO_BAY_SHERIFF_BUILDING_ALARMS",
    PORT_OF_LS_HEIST_SHIP_ALARMS: "PORT_OF_LS_HEIST_SHIP_ALARMS",
    PORT_OF_LS_HEIST_TRUCK_ALARMS: "PORT_OF_LS_HEIST_TRUCK_ALARMS"
  });
  const ts = Object.freeze({
    Sphere: "sphere",
    Tube: "tube",
    Circle: "circle",
    Rectangle: "rectangle",
    Cuboid: "cuboid",
    Polygon: "polygon"
  });
  const rs = Object.freeze({
    Player: "player",
    Vehicle: "vehicle",
    Object: "object",
    Pickup: "pickup",
    Blip: "blip",
    Checkpoint: "checkpoint",
    Marker: "marker",
    Colshape: "colshape",
    TextLabel: "textlabel",
    Ped: "ped",
    Dummy: "dummy"
  });
  const ns = Object.freeze({
    JPEG: 0,
    PNG: 1,
    BMP: 2
  });
  const is = Object.freeze({
    Verbosity: Object.freeze({
      None: 0,
      Error: 1,
      Warning: 2,
      Info: 3,
      Debug: 4
    })
  });
  const as = Object.freeze({
    BASSFXChan: Object.freeze({
      BASSFXCHAN_DEFAULT: 0,
      BASSFXCHAN_1: 1,
      BASSFXCHAN_2: 2,
      BASSFXCHAN_3: 3,
      BASSFXCHAN_4: 4,
      BASSFXCHAN_5: 5,
      BASSFXCHAN_6: 6,
      BASSFXCHAN_7: 7,
      BASSFXCHAN_8: 8,
      BASSFXCHAN_9: 9,
      BASSFXCHAN_10: 10,
      BASSFXCHAN_11: 11,
      BASSFXCHAN_12: 12,
      BASSFXCHAN_13: 13,
      BASSFXCHAN_14: 14,
      BASSFXCHAN_15: 15,
      BASSFXCHAN_16: 16,
      BASSFXCHAN_17: 17,
      BASSFXCHAN_18: 18,
      BASSFXCHAN_19: 19,
      BASSFXCHAN_20: 20,
      BASSFXCHAN_21: 21,
      BASSFXCHAN_22: 22,
      BASSFXCHAN_23: 23,
      BASSFXCHAN_24: 24,
      BASSFXCHAN_25: 25,
      BASSFXCHAN_26: 26,
      BASSFXCHAN_27: 27,
      BASSFXCHAN_28: 28,
      BASSFXCHAN_29: 29,
      BASSFXCHAN_30: 30,
      BASSFXCHAN_31: 31
    }),
    BASSFXType: Object.freeze({
      None: 0,
      Chorus: 1,
      Compressor: 2,
      Distortion: 3,
      Echo: 4,
      Flanger: 5,
      Gargle: 6,
      I3DL2Reverb: 7,
      ParamEQ: 8,
      Reverb: 9,
      Rotate: 10,
      Volume: 11
    }),
    BASSFXPhase: Object.freeze({
      Neg180: 0,
      Neg90: 1,
      Zero: 2,
      Pos90: 3,
      Pos180: 4
    })
  });
  const os = Object.freeze({
    ComponentType: Object.freeze({
      HUD: 0,
      WANTED_STARS: 1,
      WEAPON_ICON: 2,
      CASH: 3,
      MP_CASH: 4,
      MP_MESSAGE: 5,
      VEHICLE_NAME: 6,
      AREA_NAME: 7,
      VEHICLE_CLASS: 8,
      STREET_NAME: 9,
      HELP_TEXT: 10,
      FLOATING_HELP_TEXT_1: 11,
      FLOATING_HELP_TEXT_2: 12,
      CASH_CHANGE: 13,
      RETICLE: 14,
      SUBTITLE_TEXT: 15,
      RADIO_STATIONS: 16,
      SAVING_GAME: 17,
      GAME_STREAM: 18,
      WEAPON_WHEEL: 19,
      WEAPON_WHEEL_STATS: 20,
      HUD_COMPONENTS: 21,
      HUD_WEAPONS: 22
    }),
    Color: Object.freeze({
      PureWhite: 0,
      White: 1,
      Black: 2,
      Grey: 3,
      LightGrey: 4,
      DarkGrey: 5,
      Red: 6,
      RedLight: 7,
      RedDark: 8,
      Blue: 9,
      BlueLight: 10,
      BlueDark: 11,
      Yellow: 12,
      YellowLight: 13,
      YellowDark: 14,
      Orange: 15,
      OrangeLight: 16,
      OrangeDark: 17,
      Green: 18,
      GreenLight: 19,
      GreenDark: 20,
      Purple: 21,
      PurpleLight: 22,
      PurpleDark: 23,
      Pink: 24
    }),
    Style: Object.freeze({
      Default: 0,
      ShoutText: 1,
      ShoutTextNoFlash: 2,
      Streamed: 3,
      Whisper: 4
    }),
    CheckpointType: Object.freeze({
      CylinderSingleArrow: 0,
      CylinderDoubleArrow: 1,
      CylinderTripleArrow: 2,
      CylinderCycleArrow: 3,
      CylinderCheckerboard: 4,
      CylinderWrench: 5,
      CylinderSingleArrow2: 6,
      CylinderDoubleArrow2: 7,
      CylinderTripleArrow2: 8,
      CylinderCycleArrow2: 9,
      CylinderCheckerboard2: 10,
      CylinderWrench2: 11,
      Ring: 45,
      Empty: 46
    }),
    Notification: Object.freeze({
      Default: 0,
      Bubble: 1,
      Mention: 2,
      Reply: 3,
      Reputation: 4
    }),
    WeaponIcon: Object.freeze({
      Unarmed: 0,
      Pistol: 1,
      Knife: 2
    })
  });
  const ss = Object.freeze({
    GraphTypes: Object.freeze({
      Linear: 0,
      SinAccelDecel: 1,
      Accel: 2,
      Decel: 3,
      SlowIn: 4,
      SlowOut: 5,
      SlowInOut: 6,
      QuadraticIn: 7,
      QuadraticOut: 8,
      QuadraticInOut: 9,
      CubicIn: 10,
      CubicOut: 11,
      CubicInOut: 12,
      QuarticIn: 13,
      QuarticOut: 14,
      QuarticInOut: 15,
      QuinticIn: 16,
      QuinticOut: 17,
      QuinticInOut: 18,
      CircularIn: 19,
      CircularOut: 20,
      CircularInOut: 21
    })
  });
  const ls = Object.freeze({
    IconType: Object.freeze({
      Default: 0,
      ChatBox: 1,
      EMail: 2,
      AddFriendRequest: 3,
      RightJumpingArrow: 7,
      RPIcon: 8,
      DollarIcon: 9
    })
  });
  const ds = Object.freeze({
    None: 0,
    Minor: 1,
    Moderate: 2,
    Major: 3,
    Destroyed: 4
  });
  const cs = Object.freeze({
    main: "main",
    main_persistent: "main_persistent",
    freemode: "freemode",
    shop_controller: "shop_controller",
    selector: "selector",
    cellphone_controller: "cellphone_controller",
    pause_menu: "pause_menu",
    appcamera: "appcamera",
    appcontacts: "appcontacts",
    appmessages: "appmessages",
    apptextmessage: "apptextmessage"
  });
  const us = Object.freeze({
    FreemodeMale: 1885233650,
    FreemodeFemale: 2627665880,
    Michael: 225514697,
    Franklin: 2602752943,
    Trevor: 2608926626,
    Cop: 1581098148,
    Sheriff: 3019107892,
    Swat: 3179739003,
    Paramedic: 1753622122,
    Fireman: 150751927,
    Trucker: 2131941594,
    Mechanic: 2431542403,
    Hooker: 1166332296,
    Construction: 2523012636,
    PaparazziMale: 3225271731
  });
  var hs = Object.freeze({
    __proto__: null,
    Alarms: es,
    Camera: ss,
    CauseOfDeath: Uo,
    ClothesComponent: Yo,
    ColshapeType: ts,
    Console: is,
    Controls: Oo,
    EntityType: rs,
    Explosions: Wo,
    HeadOverlay: Zo,
    Hud: os,
    InputGroup: Ho,
    Marker: $o,
    Notification: ls,
    Peds: us,
    Pickups: zo,
    PlayerProp: Jo,
    PropDamage: ds,
    Props: Xo,
    ScreenshotType: ns,
    Scripts: cs,
    Vehicle: jo,
    VehicleNumberPlateType: Ko,
    VehicleSeat: qo,
    Voice: as,
    Weapons: Lo,
    Weather: Qo
  });
  class ps {
    constructor() {
      this.Vector3 = i;
      this.enums = hs;
      this.Entity = F;
      this.Player = fr;
      this.Vehicle = _n;
      this.Object = yn;
      this.Blip = We;
      this.Colshape = In;
      this.Checkpoint = Bn;
      this.Marker = oa;
      this.TextLabel = pa;
      this.Ped = si;
      this.Dummy = ra;
      this.Camera = ci;
      this.Browser = Ei;
      this.Event = E;
      this.players = new Rr();
      this.objects = new An();
      this.blips = new Tn();
      this.colshapes = new bn();
      this.checkpoints = new Mn();
      this.vehicles = new Yn();
      this.peds = new li();
      this.cameras = new pi();
      this.browsers = new zi();
      this.pickups = new ea();
      this.dummies = new ia();
      this.markers = new da();
      this.labels = new Sa();
      this.events = new Ca();
      this.keys = new fa();
      this.gui = new xa();
      this.console = new Ga();
      this.storage = new w();
      this.discord = new Ma();
      this.nametags = new mr();
      this.raycasting = new Va();
      this.voiceChat = new Oa();
      this.user = new Ha();
      this.system = new La();
      this.game = new Vo();
      this.plugins = new _o();
    }
  }
  function ms(e, t, r) {
    try {
      return t();
    } catch (t) {
      console.warn(`[bridge] native failed (${e}):`, t);
      return r;
    }
  }
  function gs() {
    return GetGamePool("CPed").length;
  }
  function Ss(e, t, r, n, i, a) {
    const o = e - n;
    const s = t - i;
    const l = r - a;
    return o * o + s * s + l * l;
  }
  function Cs(e) {
    if (!e || e === 0 || !DoesEntityExist(e)) {
      return false;
    }
    if (IsPedAPlayer(e) || e === PlayerPedId()) {
      return false;
    }
    try {
      if (typeof NetworkRequestControlOfEntity == "function") {
        NetworkRequestControlOfEntity(e);
      }
      SetEntityAsMissionEntity(e, true, true);
      if (typeof SetPedAsNoLongerNeeded == "function") {
        SetPedAsNoLongerNeeded(e);
      }
      if (typeof DeletePed == "function") {
        DeletePed(e);
      }
      if (DoesEntityExist(e) && typeof DeleteEntity == "function") {
        DeleteEntity(e);
      }
      return !DoesEntityExist(e);
    } catch {
      return false;
    }
  }
  function ys(e) {
    if (e <= 0) {
      return 0;
    }
    const t = PlayerPedId();
    const [r, n, i] = GetEntityCoords(t, false);
    let a = [];
    try {
      a = GetGamePool("CPed");
    } catch {
      return 0;
    }
    const o = a.filter(e => e && e !== t && DoesEntityExist(e) && !IsPedAPlayer(e) && function (e) {
      if (typeof GetEntityPopulationType != "function") {
        return false;
      }
      try {
        const t = GetEntityPopulationType(e);
        return t >= 1 && t <= 6;
      } catch {
        return false;
      }
    }(e)).map(e => {
      const [t, a, o] = GetEntityCoords(e, false);
      return {
        ped: e,
        distSq: Ss(r, n, i, t, a, o)
      };
    }).sort((e, t) => t.distSq - e.distSq);
    let s = 0;
    for (const {
      ped: t
    } of o) {
      if (s >= e) {
        break;
      }
      if (Cs(t)) {
        s++;
      }
    }
    return s;
  }
  var Ps = Object.freeze({
    __proto__: null,
    default: function ({
      mp: e,
      plugin: t
    }) {
      let r = false;
      let n = false;
      let i = {
        x: 0,
        y: 0,
        z: 72,
        heading: 0,
        model: "mp_m_freemode_01"
      };
      async function a(a) {
        if (r) {
          return;
        }
        r = true;
        const o = {
          ...i,
          ...(a && typeof a == "object" ? a : {})
        };
        try {
          await async function () {
            while (!NetworkIsSessionStarted()) {
              await e.game.waitAsync(100);
            }
          }();
          if (gs() >= 256) {
            return t.log("spawn failed: ped pool is full");
          }
          let r;
          DoScreenFadeOut(500);
          if (o.model != null && o.model != "") {
            r = o.model;
          } else if (o.gender == 1) {
            r = "mp_f_freemode_01";
          } else if (o.gender == 0) {
            r = "mp_m_freemode_01";
          }
          if (!r) {
            return;
          }
          for (RequestModel(r); !HasModelLoaded(r);) {
            RequestModel(r);
            await e.game.waitAsync(100);
          }
          SetPlayerModel(PlayerId(), r);
          SetModelAsNoLongerNeeded(r);
          let i = PlayerPedId();
          SetPedDefaultComponentVariation(i);
          ms("SetEntityCoordsNoOffset", () => SetEntityCoordsNoOffset(i, o.x, o.y, o.z, false, false, false));
          NetworkResurrectLocalPlayer(o.x, o.y, o.z, o.heading ?? 0, 0, false);
          i = PlayerPedId();
          SetEntityVisible(i, true, false);
          SetLocalPlayerInvisibleLocally(false);
          if (!o.respawn) {
            ms("SetEntityHealth", () => SetEntityHealth(i, 200));
          }
          ShutdownLoadingScreen();
          ShutdownLoadingScreenNui();
          ms("SetEntityHeading", () => SetEntityHeading(i, o.heading ?? 0));
          ms("FreezeEntityPosition", () => FreezeEntityPosition(i, false));
          DoScreenFadeIn(500);
          ms("SetPlayerControl", () => SetPlayerControl(PlayerId(), true, 0));
          i = PlayerPedId();
          ms("SetPedCanRagdoll", () => SetPedCanRagdoll(i, true));
          ms("SetPedCanRagdollFromPlayerImpact", () => SetPedCanRagdollFromPlayerImpact(i, true));
          ms("SetPedRagdollOnCollision", () => SetPedRagdollOnCollision(i, true));
          ms("SetPedCanBeKnockedOffVehicle", () => SetPedCanBeKnockedOffVehicle(i, 0));
          Ir();
          const a = !n;
          emitNet("ragemp:playerSpawn");
          e.events.call("playerSpawn", a);
          n = true;
        } finally {
          r = false;
        }
      }
      on("onClientResourceStart", e => {
        if (e === GetCurrentResourceName()) {
          ShutdownLoadingScreenNui();
        }
      });
      onNet("ragemp:spawnmanager:spawn", e => {
        a(e);
      });
      e.spawnmanager = {
        setSpawnPoint(e) {
          i = {
            ...i,
            ...(e ?? {})
          };
        },
        get spawnPoint() {
          return {
            ...i
          };
        },
        spawn: e => a(e),
        forceRespawn: () => a(),
        get isSpawning() {
          return r;
        },
        get hasSpawned() {
          return n;
        }
      };
    },
    name: "spawnmanager"
  });
  var As = Object.freeze({
    __proto__: null,
    default: function ({
      mp: e,
      plugin: t
    }) {
      const r = new Set();
      (function (e, t) {
        const r = zn.get(e).streamInHandlers;
        r.add(t);
      })(e.vehicles, (e, t, n) => {
        if (!r.has(n)) {
          r.add(n);
          emitNet("ragemp:vehicleSync:request", n);
          setTimeout(() => r.delete(n), 5000);
        }
      });
      onNet("ragemp:vehicleSync:apply", (t, n) => {
        const i = Ie(t);
        if (i) {
          (function (e, t) {
            if (e && t) {
              for (const r of Object.keys(On)) {
                if (t[r] !== undefined && t[r] !== null) {
                  On[r](e, t[r]);
                }
              }
              if (t.mods) {
                for (const [r, n] of Object.entries(t.mods)) {
                  Ln(e, Number(r), n);
                }
              }
              if (t.extras) {
                for (const [r, n] of Object.entries(t.extras)) {
                  Un(e, Number(r), n);
                }
              }
              if (t.modPaint) {
                Wn(e, t.modPaint.type, t.modPaint.color);
              }
              if (t.color) {
                SetVehicleColours(e, t.color.primary, t.color.secondary);
              }
              if (t.numberPlate !== undefined && t.numberPlate !== null) {
                SetVehicleNumberPlateText(e, t.numberPlate);
              }
              if (t.bodyHealth !== undefined && t.bodyHealth !== null) {
                SetVehicleBodyHealth(e, t.bodyHealth);
              }
              if (t.locked !== undefined && t.locked !== null) {
                SetVehicleDoorsLocked(e, t.locked ? 2 : 1);
              }
            }
          })(i, n);
          if (n && n.vars) {
            const t = e.vehicles?.atHandle?.(i);
            if (t) {
              const e = l.get(t).variables;
              for (const t in n.vars) {
                if (!e.has(t)) {
                  e.set(t, n.vars[t]);
                }
              }
            }
          }
          r.delete(t);
        } else {
          r.delete(t);
        }
      });
      t.log("requesting authoritative state on vehicle stream-in");
    },
    name: "vehicle-sync"
  });
  function Ts() {
    const e = gs();
    if (e < 200) {
      return;
    }
    const t = ys(Math.min(e - 180, 48));
    if (t > 0) {
      console.log(`[plugin:no-ambient-population] pruned ${t} ambient peds (pool ${e} -> ${gs()})`);
    }
  }
  var vs = Object.freeze({
    __proto__: null,
    default: function ({
      plugin: e
    }) {
      if (GetConvar("bridge_disable_ambient_population", "1") !== "0") {
        if (typeof SetCreateRandomCops == "function") {
          SetCreateRandomCops(false);
        }
        if (typeof SetGarbageTrucks == "function") {
          SetGarbageTrucks(false);
        }
        if (typeof SetRandomBoats == "function") {
          SetRandomBoats(false);
        }
        if (typeof SetPedPopulationBudget == "function") {
          SetPedPopulationBudget(0);
        }
        if (typeof SetVehiclePopulationBudget == "function") {
          SetVehiclePopulationBudget(0);
        }
        if (typeof SetMaxWantedLevel == "function") {
          SetMaxWantedLevel(0);
        }
        if (typeof SetDispatchCopsForPlayer == "function" && typeof PlayerId == "function") {
          SetDispatchCopsForPlayer(PlayerId(), false);
        }
        setTick(() => {
          if (typeof SetPedDensityMultiplierThisFrame == "function") {
            SetPedDensityMultiplierThisFrame(0);
          }
          if (typeof SetScenarioPedDensityMultiplierThisFrame == "function") {
            SetScenarioPedDensityMultiplierThisFrame(0, 0);
          }
          if (typeof SetVehicleDensityMultiplierThisFrame == "function") {
            SetVehicleDensityMultiplierThisFrame(0);
          }
          if (typeof SetRandomVehicleDensityMultiplierThisFrame == "function") {
            SetRandomVehicleDensityMultiplierThisFrame(0);
          }
          if (typeof SetParkedVehicleDensityMultiplierThisFrame == "function") {
            SetParkedVehicleDensityMultiplierThisFrame(0);
          }
        });
        setTimeout(Ts, 8000);
        setInterval(Ts, 15000);
        e.log("ambient peds/traffic disabled on client");
      } else {
        e.log("disabled (bridge_disable_ambient_population 0)");
      }
    },
    name: "no-ambient-population"
  });
  const Is = ["OpenInventory", "OpenSettings", "Client_OpenStats", "Client_OpenReferalMenu", "Client_OpenDonateNote", "Client_OpenGraphicSelect", "Client_OpenSkillsFromStat"];
  let Es = false;
  function ks() {
    if (Es) {
      return;
    }
    const e = globalThis.mp;
    if (e?.events?.add) {
      Es = true;
      e.events.add("MenuEvent", () => {
        Ta();
        globalThis.lastCheck = 0;
        return;
      });
      e.events.add("Client_UnfreezeAfterAuth", () => {
        Ta();
        bs();
      });
      for (const t of Is) {
        e.events.add(t, () => Ta());
      }
    }
  }
  const fs = new Set();
  const Ds = new Set();
  function Fs(e, t) {
    if (!(t instanceof ReferenceError)) {
      return false;
    }
    const r = /(\w+) is not defined/.exec(t.message);
    if (!r || r[1] in e) {
      return false;
    }
    const n = r[1];
    e[n] = false;
    fs.add(n);
    (function (e) {
      if (!Ds.has(e)) {
        Ds.add(e);
        console.warn(`[bridge:GlobalCheck] missing global "${e}" — defaulted to false (caught ReferenceError)`);
      }
    })(n);
    return true;
  }
  function Ns(e) {
    const t = e.GlobalCheck;
    if (typeof t != "function") {
      return false;
    }
    if (t.__bridgeSafe) {
      return true;
    }
    const r = function (r = false) {
      for (let n = 0; n < 12; n++) {
        try {
          return !!t.call(globalThis, r);
        } catch (t) {
          if (!Fs(e, t)) {
            throw t;
          }
        }
      }
      return false;
    };
    r.__bridgeSafe = true;
    e.GlobalCheck = r;
    if (fs.size) {
      console.warn(`[bridge:GlobalCheck] wrapped GlobalCheck; patched globals: ${[...fs].sort().join(", ")}`);
    } else {
      console.log("[bridge:GlobalCheck] wrapped GlobalCheck (no missing globals yet)");
    }
    return true;
  }
  function bs() {
    const e = globalThis;
    ks();
    if (Ns(e)) {
      return;
    }
    if (typeof setInterval != "function") {
      return;
    }
    let t = 0;
    const r = setInterval(() => {
      ks();
      if (Ns(e) || ++t > 60) {
        clearInterval(r);
      }
    }, 500);
  }
  function xs(e) {
    if (e == null) {
      return null;
    }
    if (Array.isArray(e) && e.length >= 3) {
      const t = Number(e[0]);
      const r = Number(e[1]);
      const n = Number(e[2]);
      if (Number.isFinite(t) && Number.isFinite(r) && Number.isFinite(n)) {
        return {
          x: t,
          y: r,
          z: n
        };
      } else {
        return null;
      }
    }
    if (typeof e == "object") {
      const t = e;
      const r = Number(t.x);
      const n = Number(t.y);
      const i = Number(t.z);
      if (Number.isFinite(r) && Number.isFinite(n) && Number.isFinite(i)) {
        return {
          x: r,
          y: n,
          z: i
        };
      }
    }
    return null;
  }
  function Bs(e, t) {
    if (typeof e.useParticleFxAsset != "function") {
      if (typeof e.setPtfxAssetNextCall != "function") {
        if (typeof UseParticleFxAsset == "function") {
          UseParticleFxAsset(t);
        }
      } else {
        e.setPtfxAssetNextCall(t);
      }
    } else {
      e.useParticleFxAsset(t);
    }
  }
  function Rs(e, t, r) {
    if (e.hasNamedPtfxAssetLoaded(t)) {
      r();
      return;
    }
    const n = e => {
      if (e) {
        r();
      }
    };
    if (typeof e.requestNamedPtfxAssetAsync == "function") {
      e.requestNamedPtfxAssetAsync(t, 10000).then(n);
      return;
    }
    e.requestNamedPtfxAsset(t);
    let i = 0;
    const a = setTick(() => {
      i++;
      if (!e.hasNamedPtfxAssetLoaded(t)) {
        if (i % 30 == 0) {
          e.requestNamedPtfxAsset(t);
        }
        if (i >= 600) {
          clearTick(a);
        }
        return;
      }
      clearTick(a);
      r();
    });
  }
  function Gs(e, t) {
    const r = globalThis;
    let n = t();
    Object.defineProperty(r, e, {
      configurable: true,
      enumerable: true,
      get: () => n,
      set: () => {
        n = t();
      }
    });
  }
  let Ms = false;
  let Vs = null;
  if (GetResourceMetadata(GetCurrentResourceName(), "ragemp_bridge", 0) !== "library") {
    let Ls = function (e, t) {
      return e < 0 || t < 0;
    };
    let Ws = function (e, t, r, n) {
      if (Ls(r, n)) {
        ClearPedProp(e, t);
      } else {
        SetPedPropIndex(e, t, r, n, true);
      }
    };
    let Us = function (e) {
      const t = rl.headBlend;
      if (t) {
        SetPedHeadBlendData(e, t.shapeFirst | 0, t.shapeSecond | 0, t.shapeThird | 0, t.skinFirst | 0, t.skinSecond | 0, t.skinThird | 0, t.shapeMix || 0, t.skinMix || 0, t.thirdMix || 0, false);
      }
    };
    let zs = function (e) {
      for (const [t, r] of rl.faceFeatures) {
        SetPedFaceFeature(e, t | 0, r);
      }
    };
    let js = function (e, t, r) {
      let n;
      if (Array.isArray(r)) {
        const e = r[1] ?? 1;
        n = {
          value: r[0],
          opacity: e > 1 ? e / 100 : e,
          color: r[2],
          secondColor: r[3]
        };
      } else {
        n = r;
      }
      SetPedHeadOverlay(e, t | 0, (n.value ?? 0) | 0, n.opacity ?? 1);
      if (n.color !== undefined && n.color !== null) {
        SetPedHeadOverlayColor(e, t | 0, n.colorType ?? 1, n.color | 0, (n.secondColor ?? n.color) | 0);
      }
    };
    let qs = function (e) {
      ClearPedDecorations(e);
      for (const t of rl.decorations) {
        const r = typeof t.collection == "string" ? GetHashKey(t.collection) : t.collection;
        const n = typeof t.overlay == "string" ? GetHashKey(t.overlay) : t.overlay;
        AddPedDecorationFromHashes(e, r, n);
      }
    };
    let Ks = function (e) {
      return e == GetHashKey("mp_m_freemode_01") || e == GetHashKey("mp_f_freemode_01");
    };
    let Ys = function (e) {
      if (!Ks(GetEntityModel(e))) {
        return;
      }
      const t = rl;
      if (t.headBlend) {
        Us(e);
      }
      if (t.eyeColor != null) {
        SetPedEyeColor(e, t.eyeColor | 0);
      }
      if (t.hairColor) {
        SetPedHairColor(e, t.hairColor.color | 0, (t.hairColor.highlight ?? t.hairColor.color) | 0);
      }
      zs(e);
      for (const [r, n] of t.headOverlays) {
        js(e, r, n);
      }
      if (t.decorations.length) {
        qs(e);
      }
    };
    let Zs = function (e, t, r) {
      let n = r[0] | 0;
      if (n < 0) {
        n = 0;
      }
      let i = r[1] | 0;
      if (i < 0) {
        i = 0;
      }
      const a = GetNumberOfPedDrawableVariations(e, t);
      if (!a || n >= a) {
        return false;
      }
      const o = GetNumberOfPedTextureVariations(e, t, n);
      if (o > 0 && i >= o) {
        i = 0;
      }
      const s = GetPedDrawableVariation(e, t);
      const l = GetPedTextureVariation(e, t);
      if (s !== n || l !== i) {
        SetPedComponentVariation(e, t, n, i, r[2] | 0);
      }
      return true;
    };
    let Js = function () {
      const e = PlayerPedId();
      if (!e || e === 0) {
        return {
          allDone: false,
          changed: false
        };
      }
      let t = true;
      let r = false;
      for (const [n, i] of el) {
        const a = GetPedDrawableVariation(e, n);
        const o = GetPedTextureVariation(e, n);
        if (Zs(e, n, i)) {
          if (GetPedDrawableVariation(e, n) !== a || GetPedTextureVariation(e, n) !== o) {
            r = true;
          }
        } else {
          t = false;
        }
      }
      return {
        allDone: t,
        changed: r
      };
    };
    let Xs = function () {
      const e = PlayerPedId();
      if (!e || e === 0) {
        return false;
      }
      for (const [t, r] of tl) {
        Ws(e, t, r[0], r[1]);
      }
      return true;
    };
    let Qs = function (e, t) {
      const r = PlayerPedId();
      if (r && r !== 0) {
        Zs(r, e, t);
      }
    };
    let $s = function () {
      const e = PlayerPedId();
      if (e && e !== 0) {
        Ys(e);
        Xs();
        Js();
      }
    };
    if (!(globalThis.mp instanceof ps)) {
      globalThis.mp = new ps();
      u = (e, t) => globalThis.mp?.events?.call(e, t);
      globalThis.mp.plugins.registerBuiltin(Ps);
      globalThis.mp.plugins.registerBuiltin(As);
      globalThis.mp.plugins.registerBuiltin(vs);
      globalThis.mp.plugins.loadAll();
      (function () {
        const e = globalThis.mp;
        if (!e?.storage?.data) {
          return;
        }
        const t = e.storage.data;
        let r = t.bind_controls;
        if (!r || typeof r != "object") {
          r = {};
          t.bind_controls = r;
        }
        let n = false;
        const i = r;
        for (const e of Object.keys(i)) {
          const t = ya(i[e]);
          if (t !== null && i[e] !== t) {
            i[e] = t;
            n = true;
          }
        }
        if (n) {
          e.storage.flush?.();
        }
      })();
      (function () {
        const e = globalThis;
        if (e.__bridgeParticleShim) {
          return;
        }
        e.__bridgeParticleShim = true;
        const t = function (e, t, r, n = 0, i = 180, a = 0, o = 0) {
          const s = globalThis.mp?.game;
          const l = s?.streaming;
          const d = s?.graphics;
          if (!l || !d || typeof e != "string" || typeof t != "string") {
            return;
          }
          const c = xs(r);
          if (c) {
            Rs(l, e, () => {
              Bs(d, e);
              const r = d.startParticleFxLoopedAtCoord(t, c.x, c.y, c.z, i, a, o, 1, true, true, true, false);
              if (r) {
                if (n > 0) {
                  setTimeout(() => d.stopParticleFxLooped(r, false), n);
                }
                if (n === 0) {
                  return r;
                } else {
                  return undefined;
                }
              }
            });
          }
        };
        const r = function (e, t, r, n, i, a = 0, o = 0, s = 0, l = true, d = true, c = true) {
          const u = globalThis.mp?.game;
          const h = u?.streaming;
          const p = u?.graphics;
          const m = e?.handle;
          if (!h || !p || !m || typeof t != "string" || typeof r != "string") {
            return;
          }
          const g = xs(n);
          if (g) {
            Rs(h, t, () => {
              Bs(p, t);
              const e = p.startParticleFxLoopedOnEntity(r, m, g.x, g.y, g.z, a, o, s, 1, l, d, c);
              if (e) {
                setTimeout(() => p.stopParticleFxLooped(e, false), i);
              }
            });
          }
        };
        Gs("StartParticleEffect", () => t);
        Gs("StartParticleEffectOnEntity", () => r);
        (function (e, t) {
          const r = globalThis.mp;
          if (r?.events?.add) {
            r.events.add("Client_ShowParticleEffect", (t, r, n, i) => {
              e(t, r, n, i);
            });
            r.events.add("Client_ShowParticleEffectLoopedOnEntity", (...e) => {
              t(...e);
            });
          }
        })(t, r);
      })();
      bs();
      if (!Ms) {
        Ms = true;
        setTick(() => {
          const e = !!IsPauseMenuActive();
          var t;
          if (e !== Vs) {
            Vs = e;
            t = e;
            SendNuiMessage(JSON.stringify({
              type: "__ragemp:setBrowsersHidden",
              hidden: t
            }));
          }
        });
      }
      if (!ba && typeof RegisterNuiCallbackType == "function") {
        ba = true;
        RegisterNuiCallbackType("ragemp:screenshot");
        on("__cfx_nui:ragemp:screenshot", (e, t) => {
          const r = typeof e?.name == "string" ? e.name : "";
          t({
            data: Da.get(r) ?? null
          });
        });
        RegisterNuiCallbackType("ragemp:screenshotCaptureResult");
        on("__cfx_nui:ragemp:screenshotCaptureResult", (e, t) => {
          const r = e?.requestId;
          if (typeof r == "number") {
            const t = Na.get(r);
            if (t) {
              Na.delete(r);
              t(e.image ?? null);
            }
          }
          t({});
        });
      }
      emitNet("ragemp:playerReady", GetCurrentResourceName());
    }
    const el = new Map();
    const tl = new Map();
    const rl = {
      headBlend: null,
      eyeColor: null,
      hairColor: null,
      faceFeatures: new Map(),
      headOverlays: new Map(),
      decorations: []
    };
    async function nl(e, t, r, n) {
      RequestAnimDict(e);
      const i = GetGameTimer() + 5000;
      while (!HasAnimDictLoaded(e)) {
        if (GetGameTimer() >= i) {
          return;
        }
        RequestAnimDict(e);
        await globalThis.mp.game.waitAsync(0);
      }
      const a = PlayerPedId();
      if (a && DoesEntityExist(a)) {
        TaskPlayAnim(a, e, t, r ?? 8, -8, -1, n ?? 0, 0, false, false, false);
      }
    }
    async function il(e) {
      if (!e) {
        return;
      }
      if (Ks(e) && globalThis.mp?.spawnmanager?.isSpawning) {
        return;
      }
      for (RequestModel(e); !HasModelLoaded(e);) {
        RequestModel(e);
        await mp.game.waitAsync(100);
      }
      const t = PlayerPedId();
      const r = t && t !== 0 ? GetEntityHealth(t) : 200;
      const i = t && t !== 0 ? GetPedArmour(t) : 0;
      SetPlayerModel(PlayerId(), e);
      SetModelAsNoLongerNeeded(e);
      const a = PlayerPedId();
      if (!a || a === 0) {
        return;
      }
      if (Ks(e)) {
        SetPedDefaultComponentVariation(a);
      }
      if (r > 0) {
        SetEntityHealth(a, r);
      }
      if (i > 0) {
        SetPedArmour(a, i);
      }
      const o = globalThis.mp?.players?.local;
      if (o) {
        l.get(o).model = n(e);
      }
      $s();
    }
    async function al(e, t) {
      const r = await async function (e, t = 5000, r) {
        if (!e || e <= 0) {
          return 0;
        }
        const n = r ?? (e => new Promise(t => setTimeout(t, e)));
        const i = GetGameTimer() + t;
        while (GetGameTimer() < i) {
          if (typeof NetworkRequestControlOfNetworkId == "function") {
            NetworkRequestControlOfNetworkId(e);
          }
          const t = Ie(e);
          if (t) {
            return t;
          }
          await n(0);
        }
        return Ie(e);
      }(e, 5000, globalThis.mp.game.waitAsync);
      if (!r) {
        return;
      }
      NetworkRequestControlOfEntity(r);
      const n = PlayerPedId();
      if (!n || !DoesEntityExist(n)) {
        return;
      }
      SetPedIntoVehicle(n, r, typeof t == "number" ? t - 1 : -1);
    }
    globalThis.mp.events.add("playerSpawn", () => {
      if (Ks(GetEntityModel(PlayerPedId()))) {
        $s();
      }
    });
    onNet("ragemp:setDimension", e => {
      (function (e) {
        const t = L(e);
        if (t === Re) {
          return;
        }
        const r = Re;
        Re = t;
        for (const e of Ge) {
          try {
            e(t, r);
          } catch (e) {}
        }
      })(e);
    });
    onNet("ragemp:setPosition", (e, t, r) => {
      const n = PlayerPedId();
      if (n && n !== 0) {
        SetEntityVelocity(n, 0, 0, 0);
        SetEntityCoordsNoOffset(n, e, t, r, false, false, false);
      }
    });
    onNet("ragemp:setHeading", e => {
      const t = PlayerPedId();
      if (t && t !== 0) {
        SetEntityHeading(t, e);
      }
    });
    onNet("ragemp:giveWeapon", (e, t) => {
      GiveWeaponToPed(PlayerPedId(), e, t, false, true);
    });
    onNet("ragemp:removeWeapon", e => {
      RemoveWeaponFromPed(PlayerPedId(), e);
    });
    onNet("ragemp:removeAllWeapons", () => {
      RemoveAllPedWeapons(PlayerPedId(), true);
    });
    onNet("ragemp:setClothes", (e, t, r, n) => {
      const i = [t, r, n];
      el.set(e, i);
      Qs(e, i);
    });
    onNet("ragemp:setModel", e => {
      il(e);
    });
    onNet("ragemp:setProp", (e, t, r) => {
      const n = Ls(t, r);
      tl.set(e, n ? [-1, 0] : [t, r]);
      const i = PlayerPedId();
      if (i && i !== 0) {
        Ws(i, e, n ? -1 : t, n ? 0 : r);
      }
    });
    onNet("ragemp:setEyeColor", e => {
      rl.eyeColor = e;
      const t = PlayerPedId();
      if (t && t !== 0) {
        SetPedEyeColor(t, e | 0);
      }
    });
    onNet("ragemp:setHairColor", (e, t) => {
      rl.hairColor = {
        color: e,
        highlight: t ?? e
      };
      const r = PlayerPedId();
      if (r && r !== 0) {
        SetPedHairColor(r, e | 0, (t ?? e) | 0);
      }
    });
    onNet("ragemp:setFaceFeature", (e, t) => {
      rl.faceFeatures.set(e, t);
      const r = PlayerPedId();
      if (r && r !== 0) {
        SetPedFaceFeature(r, e | 0, t);
      }
    });
    onNet("ragemp:setHeadBlend", (e, t, r, n, i, a, o, s, l) => {
      rl.headBlend = {
        shapeFirst: e,
        shapeSecond: t,
        shapeThird: r ?? 0,
        skinFirst: n,
        skinSecond: i,
        skinThird: a ?? 0,
        shapeMix: o ?? 0,
        skinMix: s ?? 0,
        thirdMix: l ?? 0
      };
      const d = PlayerPedId();
      if (d && d !== 0) {
        Us(d);
        zs(d);
      }
    });
    onNet("ragemp:updateHeadBlend", (e, t, r) => {
      rl.headBlend ||= {
        shapeFirst: 0,
        shapeSecond: 0,
        shapeThird: 0,
        skinFirst: 0,
        skinSecond: 0,
        skinThird: 0,
        shapeMix: 0,
        skinMix: 0,
        thirdMix: 0
      };
      rl.headBlend.shapeMix = e ?? 0;
      rl.headBlend.skinMix = t ?? 0;
      rl.headBlend.thirdMix = r ?? 0;
      const n = PlayerPedId();
      if (n && n !== 0) {
        if (typeof UpdatePedHeadBlendData == "function") {
          UpdatePedHeadBlendData(n, e ?? 0, t ?? 0, r ?? 0);
        } else {
          Us(n);
        }
      }
    });
    onNet("ragemp:setHeadOverlay", (e, t) => {
      const r = t || {};
      rl.headOverlays.set(e, r);
      const n = PlayerPedId();
      if (n && n !== 0) {
        js(n, e, r);
      }
    });
    onNet("ragemp:setDecoration", (e, t) => {
      rl.decorations.push({
        collection: e,
        overlay: t
      });
      const r = PlayerPedId();
      if (r && r !== 0) {
        const n = typeof e == "string" ? GetHashKey(e) : e;
        const i = typeof t == "string" ? GetHashKey(t) : t;
        AddPedDecorationFromHashes(r, n, i);
      }
    });
    onNet("ragemp:clearDecorations", () => {
      rl.decorations = [];
      const e = PlayerPedId();
      if (e && e !== 0) {
        ClearPedDecorations(e);
      }
    });
    onNet("ragemp:setCustomization", e => {
      if (!e || typeof e != "object") {
        return;
      }
      rl.headBlend = {
        shapeFirst: e.shapeFirst ?? 0,
        shapeSecond: e.shapeSecond ?? 0,
        shapeThird: e.shapeThird ?? 0,
        skinFirst: e.skinFirst ?? 0,
        skinSecond: e.skinSecond ?? 0,
        skinThird: e.skinThird ?? 0,
        shapeMix: e.shapeMix ?? 0,
        skinMix: e.skinMix ?? 0,
        thirdMix: e.thirdMix ?? 0
      };
      if (e.eyeColor !== undefined) {
        rl.eyeColor = e.eyeColor;
      }
      if (e.hairColor !== undefined) {
        rl.hairColor = {
          color: e.hairColor,
          highlight: e.highlightColor ?? e.hairColor
        };
      }
      if (Array.isArray(e.faceFeatures)) {
        for (let t = 0; t < e.faceFeatures.length && t < 20; t++) {
          rl.faceFeatures.set(t, e.faceFeatures[t] ?? 0);
        }
      }
      const t = PlayerPedId();
      if (t && t !== 0) {
        Ys(t);
      }
    });
    onNet("ragemp:setWeapon", e => {
      const t = PlayerPedId();
      if (e) {
        GiveWeaponToPed(t, e, 0, false, true);
        SetCurrentPedWeapon(t, e, true);
      } else {
        RemoveAllPedWeapons(t, true);
      }
    });
    onNet("ragemp:setWeaponAmmo", (e, t) => {
      SetPedAmmo(PlayerPedId(), e, t);
    });
    onNet("ragemp:playAnimation", (e, t, r, n) => {
      if (typeof e == "string" && typeof t == "string") {
        nl(e, t, r, n);
      }
    });
    onNet("ragemp:stopAnimation", () => {
      const e = PlayerPedId();
      if (e && e !== 0) {
        ClearPedTasksImmediately(e);
      }
    });
    onNet("ragemp:stopAnimationImmediately", () => {
      ClearPedTasksImmediately(PlayerPedId());
    });
    onNet("ragemp:playScenario", e => {
      if (typeof e == "string") {
        TaskStartScenarioInPlace(PlayerPedId(), e, 0, true);
      }
    });
    onNet("ragemp:eval", e => {
      try {
        (0, eval)(e);
      } catch (e) {
        console.error("[ragemp:eval]", e);
      }
    });
    onNet("ragemp:invoke", (e, ...t) => {
      if (typeof Citizen != "undefined" && Citizen.invokeNative) {
        Citizen.invokeNative(e, ...Ua(t));
      }
    });
    onNet("ragemp:notify", e => {
      SetNotificationTextEntry("STRING");
      AddTextComponentString(e);
      DrawNotification(false, false);
    });
    onNet("ragemp:chatMessage", e => {
      emit("chat:addMessage", {
        args: [e]
      });
      Oi(e);
    });
    onNet("ragemp:requestVehicleControl", (e, t) => {
      if (e === -1 || e === GetPlayerServerId(PlayerId())) {
        if (NetworkDoesNetworkIdExist(t)) {
          NetworkRequestControlOfNetworkId(t);
        }
      }
    });
    onNet("ragemp:setTime", (e, t, r) => {
      NetworkOverrideClockTime(e | 0, t | 0, r | 0 || 0);
    });
    onNet("ragemp:setWeather", e => {
      if (typeof e == "string") {
        SetWeatherTypeNowPersist(e);
        SetWeatherTypePersist(e);
      }
    });
    onNet("ragemp:setWeatherTransition", (e, t) => {
      if (typeof e != "string") {
        return;
      }
      const r = typeof t == "number" ? t : 0;
      if (r > 0 && typeof SetWeatherTypeOvertimePersist == "function") {
        SetWeatherTypeOvertimePersist(e, r / 1000);
      } else {
        SetWeatherTypeNowPersist(e);
        SetWeatherTypePersist(e);
      }
    });
    onNet("ragemp:requestIpl", e => {
      if (typeof RequestIpl == "function") {
        RequestIpl(e);
      }
    });
    onNet("ragemp:removeIpl", e => {
      if (typeof RemoveIpl == "function") {
        RemoveIpl(e);
      }
    });
    onNet("ragemp:putIntoVehicle", (e, t) => {
      al(e, t);
    });
  }
})();