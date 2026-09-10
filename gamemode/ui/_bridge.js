(function () {
  "use strict";

  let e = false;
  function t(t) {
    e = !!t;
  }
  function r(...t) {
    if (e) {
      console.log("[cef]", ...t);
    }
  }
  let n = null;
  function o() {
    if (n) {
      return n;
    }
    if (typeof GetParentResourceName == "function") {
      try {
        const e = GetParentResourceName();
        if (e) {
          return e;
        }
      } catch (e) {}
    }
    if (typeof window != "undefined" && window.location && typeof window.location.hostname == "string") {
      const e = window.location.hostname;
      if (e.indexOf("cfx-nui-") === 0) {
        return e.slice(8);
      }
      if (e && e !== "localhost") {
        return e;
      }
    }
    return "";
  }
  function a(e) {
    return (e.keyCode || e.which) === 27 || e.key === "Escape";
  }
  function i(e) {
    if (a(e)) {
      return true;
    }
    const t = e.target;
    if (!t) {
      return true;
    }
    if (t.tagName === "IFRAME") {
      return false;
    }
    if (t.tagName === "INPUT") {
      const e = t;
      return e.type === "hidden" || e.type === "checkbox" || e.type === "radio";
    }
    return t.tagName !== "TEXTAREA" && t.tagName !== "SELECT" && !t.isContentEditable;
  }
  function s(e) {
    return e.isTrusted !== false && !!function (e) {
      const t = e.keyCode || e.which;
      return t === 116 || !!e.ctrlKey && t === 82;
    }(e) && (typeof e.preventDefault == "function" && e.preventDefault(), true);
  }
  async function c(e, t) {
    const n = `https://${o()}/${e}`;
    return fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t || {})
    }).catch(t => r("toClient failed", e, String(t)));
  }
  let d = null;
  let u = () => "host";
  let l = false;
  function f(e) {
    if (e && e instanceof Error) {
      return {
        message: e.message,
        name: e.name,
        stack: e.stack
      };
    }
    if (e && typeof e == "object") {
      try {
        return {
          message: JSON.stringify(e)
        };
      } catch (t) {
        return {
          message: String(e)
        };
      }
    }
    return {
      message: String(e)
    };
  }
  function p(e) {
    if (d) {
      try {
        d({
          browserId: u(),
          ...e
        });
      } catch (e) {}
    }
  }
  class g {
    constructor(e) {
      this._handlers = new Map();
      this._procs = new Map();
      this._procCounter = 0;
      this._pendingProcs = new Map();
      this._getSelfId = e || (() => null);
    }
    _getHandlers(e) {
      if (!this._handlers.has(e)) {
        this._handlers.set(e, new Set());
      }
      return this._handlers.get(e);
    }
    _fire(e, ...t) {
      const n = this._handlers.get(e);
      if (n) {
        for (const o of n) {
          try {
            o(...t);
          } catch (t) {
            r("handler error", e, String(t));
            console.error(`[ragemp] error in handler for "${e}":`, t);
            p({
              kind: "handler",
              event: e,
              ...f(t)
            });
          }
        }
      }
    }
    add(e, t) {
      if (typeof e != "object" || t !== undefined) {
        this._getHandlers(e).add(t);
      } else {
        for (const [t, r] of Object.entries(e)) {
          this.add(t, r);
        }
      }
    }
    call(e, ...t) {
      this._fire(e, ...t);
    }
    remove(e, t) {
      const r = this._handlers.get(e);
      if (r) {
        if (t) {
          r.delete(t);
        } else {
          r.clear();
        }
      }
    }
    addProc(e, t) {
      this._procs.set(e, t);
    }
    callProc(e, ...t) {
      const r = ++this._procCounter;
      return new Promise((n, o) => {
        this._pendingProcs.set(r, {
          resolve: n,
          reject: o
        });
        c("ragemp:cefProc", {
          browserId: this._getSelfId(),
          procName: e,
          requestId: r,
          args: t
        }).catch(e => {
          this._pendingProcs.delete(r);
          o(e);
        });
        setTimeout(() => {
          if (this._pendingProcs.has(r)) {
            this._pendingProcs.delete(r);
            o(new Error("Proc timeout"));
          }
        }, 10000);
      });
    }
    resolveProc(e, t, r) {
      const n = this._pendingProcs.get(e);
      if (n) {
        this._pendingProcs.delete(e);
        if (r) {
          n.reject(new Error(r));
        } else {
          n.resolve(t);
        }
      }
    }
    async runProc(e, t) {
      const r = this._procs.get(e);
      if (r) {
        return Promise.resolve().then(() => r(...(t || [])));
      } else {
        return Promise.reject(new Error(`Unknown proc: ${e}`));
      }
    }
    binded(e) {
      const t = this._handlers.get(e);
      return t !== undefined && t.size > 0;
    }
    getAllOf(e) {
      const t = this._handlers.get(e);
      if (t) {
        return Array.from(t);
      } else {
        return [];
      }
    }
    reset() {
      this._handlers.clear();
      this._procs.clear();
      this._pendingProcs.clear();
    }
  }
  function w() {
    let o = "host";
    const a = () => o;
    const i = new g(a);
    const s = {
      trigger(e, ...t) {
        r("trigger ->client", e, "from", o);
        c("ragemp:browserEvent", {
          browserId: o,
          event: e,
          args: t
        });
      },
      invoke(e, ...t) {
        if (e !== "command") {
          if (e !== "chatMessage" && e !== "chat:message") {
            s.trigger(e, ...t);
          } else {
            c("ragemp:cef:chatMessage", {
              message: t[0]
            });
          }
        } else {
          c("ragemp:cef:command", {
            command: t[0]
          });
        }
      },
      events: i,
      cef: {
        setDebugMode: t,
        get debug() {
          return e;
        },
        get id() {
          return o;
        }
      }
    };
    var w;
    function m(e) {
      o = e;
    }
    globalThis.mp = s;
    d = e => c("ragemp:browserError", e);
    if (typeof (w = a) == "function") {
      u = w;
    }
    if (!l && typeof window != "undefined") {
      l = true;
      window.addEventListener("error", e => {
        const t = e.target;
        if (t && t !== window && t.tagName) {
          p({
            kind: "resource",
            message: "Failed to load " + String(t.tagName).toLowerCase() + ": " + (t.src || t.href || "(unknown)"),
            tag: t.tagName
          });
          return;
        }
        const r = f(e.error);
        p({
          kind: "error",
          message: e.message || r.message,
          source: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          name: r.name,
          stack: r.stack
        });
      }, true);
      window.addEventListener("unhandledrejection", e => {
        p({
          kind: "unhandledrejection",
          ...f(e && "reason" in e ? e.reason : e)
        });
      });
    }
    return {
      mp: s,
      events: i,
      handlePayload: function (e) {
        if (e && typeof e == "object") {
          if (e.type === "__ragemp:exec" && e.code) {
            try {
              (0, eval)(e.code);
            } catch (e) {
              r("exec error", String(e));
              console.error("[ragemp:exec]", e);
              p({
                kind: "exec",
                ...f(e)
              });
            }
          } else if (e.type !== "__ragemp:reload") {
            var t;
            if (e.type !== "__ragemp:key") {
              if (e.type === "__ragemp:assignId") {
                m(e.browserId);
                if (e.resource) {
                  if ((t = e.resource) && typeof t == "string") {
                    n = t;
                  }
                }
                r("assigned id", e.browserId);
                return;
              } else if (e.event) {
                r("recv event", e.event);
                i._fire(e.event, ...(Array.isArray(e.args) ? e.args : []));
                return;
              } else if (e.proc) {
                r("recv proc call", e.proc);
                i.runProc(e.proc, e.args ?? []).then(t => c("ragemp:cefProcResult", {
                  browserId: o,
                  requestId: e.requestId,
                  result: t
                })).catch(t => c("ragemp:cefProcResult", {
                  browserId: o,
                  requestId: e.requestId,
                  error: t instanceof Error ? t.message : String(t)
                }));
                return;
              } else {
                if (e.procResult) {
                  i.resolveProc(e.requestId, e.result, e.error);
                }
                return;
              }
            }
            (function (e, t) {
              if (typeof document == "undefined") {
                return;
              }
              const r = e ? "keydown" : "keyup";
              let n;
              try {
                n = new KeyboardEvent(r, {
                  key: t.key,
                  code: t.code,
                  location: t.location || 0,
                  altKey: !!t.altKey,
                  ctrlKey: !!t.ctrlKey,
                  shiftKey: !!t.shiftKey,
                  metaKey: !!t.metaKey,
                  repeat: !!t.repeat,
                  bubbles: true,
                  cancelable: true,
                  composed: true
                });
              } catch (e) {
                n = document.createEvent("Event");
                n.initEvent(r, true, true);
              }
              const o = t.keyCode || t.which || 0;
              try {
                Object.defineProperty(n, "keyCode", {
                  configurable: true,
                  get: () => o
                });
                Object.defineProperty(n, "which", {
                  configurable: true,
                  get: () => o
                });
                Object.defineProperty(n, "key", {
                  configurable: true,
                  get: () => t.key
                });
                Object.defineProperty(n, "code", {
                  configurable: true,
                  get: () => t.code
                });
              } catch (e) {}
              (document.activeElement || document.body || document.documentElement || document).dispatchEvent(n);
            })(e.down ?? false, e.init || {});
          } else {
            location.reload();
          }
        }
      },
      setSelfId: m,
      getSelfId: a
    };
  }
  function m(e, t, r) {
    const n = e.createShader(t);
    if (!n) {
      throw new Error("Failed to create shader");
    }
    e.shaderSource(n, r);
    e.compileShader(n);
    const o = e.getShaderInfoLog(n);
    if (o) {
      console.error(o);
    }
    return n;
  }
  function h(e) {
    const t = e.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
      alpha: false,
      desynchronized: true,
      failIfMajorPerformanceCaveat: false
    });
    if (!t) {
      throw new Error("WebGL not available for screenshot capture");
    }
    const r = {
      canvas: e,
      gl: t,
      disposed: false,
      resize(e, n) {
        if (!r.disposed) {
          t.viewport(0, 0, e, n);
          t.canvas.width = e;
          t.canvas.height = n;
        }
      },
      dispose() {
        if (r.disposed) {
          return;
        }
        r.disposed = true;
        const n = t.getExtension("WEBGL_lose_context");
        if (n) {
          n.loseContext();
        }
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
      },
      drawOnce() {
        if (!r.disposed) {
          t.drawArrays(t.TRIANGLE_STRIP, 0, 4);
          t.finish();
        }
      }
    };
    (function () {
      const e = function (e) {
        const t = e.createTexture();
        const r = new Uint8Array([0, 0, 255, 255]);
        e.bindTexture(e.TEXTURE_2D, t);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.MIRRORED_REPEAT);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT);
        e.texParameterf(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        return t;
      }(t);
      const {
        program: r,
        vloc: n,
        tloc: o
      } = function (e) {
        const t = m(e, e.VERTEX_SHADER, "\n attribute vec2 a_position;\n attribute vec2 a_texcoord;\n uniform mat3 u_matrix;\n varying vec2 textureCoordinate;\n void main() {\n gl_Position = vec4(a_position, 0.0, 1.0);\n textureCoordinate = a_texcoord;\n }\n");
        const r = m(e, e.FRAGMENT_SHADER, "\nvarying highp vec2 textureCoordinate;\nuniform sampler2D external_texture;\nvoid main()\n{\n gl_FragColor = texture2D(external_texture, textureCoordinate);\n}\n");
        const n = e.createProgram();
        if (!n) {
          throw new Error("Failed to create program");
        }
        e.attachShader(n, t);
        e.attachShader(n, r);
        e.linkProgram(n);
        e.useProgram(n);
        return {
          program: n,
          vloc: e.getAttribLocation(n, "a_position"),
          tloc: e.getAttribLocation(n, "a_texcoord")
        };
      }(t);
      const {
        vertexBuff: a,
        texBuff: i
      } = function (e) {
        const t = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, t);
        e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), e.STATIC_DRAW);
        const r = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, r);
        e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
        return {
          vertexBuff: t,
          texBuff: r
        };
      }(t);
      t.useProgram(r);
      t.bindTexture(t.TEXTURE_2D, e);
      t.uniform1i(t.getUniformLocation(r, "external_texture"), 0);
      t.bindBuffer(t.ARRAY_BUFFER, a);
      t.vertexAttribPointer(n, 2, t.FLOAT, false, 0, 0);
      t.enableVertexAttribArray(n);
      t.bindBuffer(t.ARRAY_BUFFER, i);
      t.vertexAttribPointer(o, 2, t.FLOAT, false, 0, 0);
      t.enableVertexAttribArray(o);
      t.viewport(0, 0, t.canvas.width, t.canvas.height);
    })();
    return r;
  }
  let y = null;
  let _ = null;
  async function v(e, t) {
    try {
      if (!y || !_) {
        y = document.createElement("canvas");
        y.width = window.innerWidth || 1920;
        y.height = window.innerHeight || 1080;
        y.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;";
        document.body.appendChild(y);
        _ = h(y);
      }
      const r = _;
      const n = window.innerWidth || 1920;
      const o = window.innerHeight || 1080;
      r.resize(n, o);
      await new Promise(e => requestAnimationFrame(() => e()));
      r.drawOnce();
      const a = e === "png" ? "image/png" : "image/jpeg";
      return y.toDataURL(a, t);
    } catch (e) {
      console.warn("[bridge] captureScreenshot failed:", e);
      return null;
    }
  }
  const b = typeof window != "undefined" && ((window.location && window.location.hash ? String(window.location.hash) : "").indexOf("__ragemp_view") !== -1 || typeof window.name == "string" && window.name.indexOf("__ragemp_view") !== -1);
  r("boot", b ? "view (iframe)" : "manager (host)");
  if (b) {
    (function () {
      const {
        handlePayload: e
      } = w();
      (function () {
        const e = XMLHttpRequest.prototype.open;
        const t = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.open = function (t, r, ...n) {
          this.__ragempScreenshotName = typeof r == "string" && r.indexOf("http://screenshots/") === 0 ? r.slice(19).split("?")[0].split("#")[0] : null;
          return e.call(this, t, r, ...n);
        };
        XMLHttpRequest.prototype.send = function (e) {
          const r = this.__ragempScreenshotName;
          if (!r) {
            return t.call(this, e);
          }
          const n = this;
          fetch(`https://${o()}/ragemp:screenshot`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: r
            })
          }).then(e => e.json()).then(e => {
            const t = e?.data;
            if (t) {
              return fetch(t).then(e => e.blob()).then(e => {
                Object.defineProperty(n, "status", {
                  value: 200,
                  configurable: true
                });
                Object.defineProperty(n, "response", {
                  value: e,
                  configurable: true
                });
                Object.defineProperty(n, "readyState", {
                  value: 4,
                  configurable: true
                });
                n.dispatchEvent(new Event("readystatechange"));
                n.dispatchEvent(new Event("load"));
              });
            } else {
              Object.defineProperty(n, "status", {
                value: 404,
                configurable: true
              });
              Object.defineProperty(n, "readyState", {
                value: 4,
                configurable: true
              });
              n.dispatchEvent(new Event("readystatechange"));
              n.dispatchEvent(new Event("load"));
              return;
            }
          }).catch(() => {
            Object.defineProperty(n, "status", {
              value: 500,
              configurable: true
            });
            Object.defineProperty(n, "readyState", {
              value: 4,
              configurable: true
            });
            n.dispatchEvent(new Event("readystatechange"));
            n.dispatchEvent(new Event("error"));
          });
        };
      })();
      r("view ready in", typeof window != "undefined" ? window.location.href : "?", "resource =", o());
      let t = false;
      function n(e) {
        if (!t && window.parent && window.parent !== window) {
          try {
            window.parent.postMessage({
              type: "__ragemp:viewReady"
            }, "*");
          } catch (e) {}
          if (e < 40) {
            setTimeout(() => n(e + 1), 100);
          }
        }
      }
      function c() {
        n(0);
      }
      function d(e, t) {
        if (!e.isTrusted) {
          return;
        }
        s(e);
        if (!i(e)) {
          return;
        }
        if (a(e) && typeof e.preventDefault == "function") {
          e.preventDefault();
        }
        const r = e.keyCode || e.which;
        if (r && window.parent && window.parent !== window) {
          try {
            window.parent.postMessage({
              type: "__ragemp:keyFromFrame",
              code: r,
              down: t
            }, "*");
          } catch (e) {}
        }
      }
      function u(e, t) {
        if (e.isTrusted && (e.button === 0 || e.button === 2) && window.parent && window.parent !== window) {
          try {
            window.parent.postMessage({
              type: "__ragemp:mouseFromFrame",
              x: e.clientX,
              y: e.clientY,
              down: t,
              button: e.button
            }, "*");
          } catch (e) {}
        }
      }
      if (typeof document == "undefined" || document.readyState !== "loading") {
        c();
      } else {
        document.addEventListener("DOMContentLoaded", c, {
          once: true
        });
      }
      window.addEventListener("keydown", e => d(e, true), true);
      window.addEventListener("keyup", e => d(e, false), true);
      window.addEventListener("mousedown", e => u(e, true), true);
      window.addEventListener("mouseup", e => u(e, false), true);
      window.addEventListener("message", n => {
        const o = n.data;
        if (o && typeof o == "object" && o.__ragempForward && o.inner) {
          const n = o.inner;
          if (n.type === "__ragemp:assignId") {
            t = true;
          }
          r("view recv", n.type || (n.event ? "event:" + n.event : n.proc ? "proc:" + n.proc : "msg"));
          e(n);
        }
      });
    })();
  } else {
    (function () {
      const {
        handlePayload: e
      } = w();
      const t = new Map();
      const n = new Map();
      const d = new Map();
      const u = o();
      let l = null;
      let f = false;
      function p() {
        const e = document.getElementById("__ragemp_browsers");
        if (e) {
          e.style.visibility = f ? "hidden" : "";
        }
      }
      function g(e) {
        const r = t.get(e);
        if (r && r.iframe) {
          r.iframe.style.pointerEvents = n.get(e) === false ? "none" : "auto";
        }
      }
      function m(e) {
        const r = t.get(e);
        if (!r || !r.iframe) {
          return;
        }
        const n = d.get(e);
        r.iframe.style.zIndex = n == null ? "" : String(n);
      }
      function h(e) {
        const r = t.get(e);
        if (r && r.iframe) {
          try {
            if (r.iframe.contentWindow) {
              r.iframe.contentWindow.focus();
            }
          } catch (e) {}
          try {
            r.iframe.focus();
          } catch (e) {}
        }
      }
      r("manager ready on", typeof window != "undefined" ? window.location.href : "?", "resource =", u);
      const y = `https://cfx-nui-${u}/ui/_bridge.js`;
      function _(e, t) {
        if (e.ready) {
          return;
        }
        e.ready = true;
        try {
          e.iframe.contentWindow.postMessage({
            __ragempForward: true,
            inner: {
              type: "__ragemp:assignId",
              browserId: t,
              resource: u
            }
          }, "*");
        } catch (e) {
          r("assignId post failed", String(e));
        }
        const n = e.queue.splice(0);
        for (const t of n) {
          try {
            e.iframe.contentWindow.postMessage({
              __ragempForward: true,
              inner: t
            }, "*");
          } catch (e) {
            r("flush post failed", String(e));
          }
        }
      }
      function b(e, n) {
        if (t.has(e)) {
          r("create ignored, exists", e);
          return;
        }
        const o = document.createElement("iframe");
        o.dataset.browserId = String(e);
        o.setAttribute("allowtransparency", "true");
        o.setAttribute("frameborder", "0");
        o.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border:0;margin:0;padding:0;background:transparent;pointer-events:auto;display:block;";
        const a = {
          iframe: o,
          ready: false,
          queue: []
        };
        o.addEventListener("load", () => {
          r("iframe loaded", e);
          (function (e, t, r) {
            try {
              const t = e.contentDocument;
              if (!t) {
                r();
                return;
              }
              if (t.querySelector("script[data-ragemp-bridge]")) {
                r();
                return;
              }
              if (t.querySelector("script[src*=\"_bridge\"]")) {
                r();
                return;
              }
              const n = t.createElement("script");
              n.setAttribute("data-ragemp-bridge", "1");
              n.src = y;
              n.onload = r;
              n.onerror = r;
              (t.head || t.documentElement).appendChild(n);
            } catch (e) {
              r();
            }
          })(o, 0, () => {
            if (!a.ready) {
              _(a, e);
              c("ragemp:browserLifecycle", {
                browserId: e,
                event: "domReady"
              });
            }
            if (l === e) {
              h(e);
            }
          });
        });
        const i = /^data:text\/html/i.test(n) ? function (e) {
          const t = /^data:text\/html([^,]*),([\s\S]*)$/i.exec(e);
          if (!t) {
            return null;
          }
          const r = t[1] || "";
          const n = t[2];
          try {
            if (/;base64/i.test(r)) {
              return atob(n);
            } else {
              return decodeURIComponent(n);
            }
          } catch (e) {
            try {
              return decodeURIComponent(n);
            } catch (e) {
              return n;
            }
          }
        }(n) : null;
        if (i !== null) {
          r("create browser", e, "(inline html via srcdoc)");
          o.setAttribute("name", "__ragemp_view");
          o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-pointer-lock allow-downloads allow-top-navigation-by-user-activation");
          o.addEventListener("error", () => {
            r("iframe error", e, "srcdoc");
            c("ragemp:browserLifecycle", {
              browserId: e,
              event: "loadError",
              url: "srcdoc"
            });
          });
          o.srcdoc = i;
        } else {
          const t = function (e) {
            let t = e;
            const r = /^package:\/\/(.+)$/i.exec(e);
            if (r) {
              t = r[1];
            }
            const n = /^@([^/]+)\/(.+)$/.exec(t);
            if (n) {
              t = `https://cfx-nui-${n[1]}/${n[2]}`;
            } else if (!/^(https?:|nui:|file:|blob:|data:)/i.test(e)) {
              try {
                t = new URL(e, location.href).href;
              } catch (r) {
                t = e;
              }
            }
            return t + (t.indexOf("#") === -1 ? "#__ragemp_view" : "&__ragemp_view");
          }(n);
          r("create browser", e, n, "->", t);
          o.addEventListener("error", () => {
            r("iframe error", e, t);
            c("ragemp:browserLifecycle", {
              browserId: e,
              event: "loadError",
              url: t
            });
          });
          o.src = t;
        }
        (function () {
          let e = document.getElementById("__ragemp_browsers");
          if (!e) {
            e = document.createElement("div");
            e.id = "__ragemp_browsers";
            e.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border:0;margin:0;padding:0;pointer-events:none;background:transparent;z-index:0;";
            (document.body || document.documentElement).appendChild(e);
          }
          p();
          return e;
        })().appendChild(o);
        t.set(e, a);
        g(e);
        m(e);
        setTimeout(() => {
          if (!a.ready) {
            r("iframe still not ready after 5s", e);
            c("ragemp:browserLifecycle", {
              browserId: e,
              event: "loadError",
              url: n,
              message: "Browser did not signal ready within 5s. If it is a cross-origin page (e.g. a dev server or another resource), include _bridge.js in that page so it can talk to the client."
            });
          }
        }, 5000);
      }
      function E(e, n) {
        const o = t.get(e);
        if (o) {
          if (o.ready) {
            if (o.iframe.contentWindow) {
              o.iframe.contentWindow.postMessage({
                __ragempForward: true,
                inner: n
              }, "*");
            }
          } else {
            o.queue.push(n);
          }
        } else {
          r("forward to unknown browser", e);
        }
      }
      function R(e, t) {
        if (t && e.repeat) {
          return;
        }
        if (!i(e)) {
          return;
        }
        if (a(e) && typeof e.preventDefault == "function") {
          e.preventDefault();
        }
        const r = e.keyCode || e.which;
        if (r) {
          c("ragemp:__keyEvent", {
            code: r,
            down: t
          });
        }
      }
      function T(e, n) {
        const o = {
          key: e.key,
          code: e.code,
          keyCode: e.keyCode || e.which || 0,
          which: e.which || e.keyCode || 0,
          location: e.location || 0,
          altKey: !!e.altKey,
          ctrlKey: !!e.ctrlKey,
          shiftKey: !!e.shiftKey,
          metaKey: !!e.metaKey,
          repeat: !!e.repeat
        };
        for (const e of t.values()) {
          if (e.ready && e.iframe.contentWindow) {
            try {
              e.iframe.contentWindow.postMessage({
                __ragempForward: true,
                inner: {
                  type: "__ragemp:key",
                  down: n,
                  init: o
                }
              }, "*");
            } catch (e) {
              r("key forward failed", String(e));
            }
          }
        }
      }
      function x() {
        for (const e of [16, 17, 18]) {
          c("ragemp:__keyEvent", {
            code: e,
            down: false
          });
        }
      }
      function I(e, t) {
        if (e.isTrusted) {
          if (e.button === 0 || e.button === 2) {
            c("ragemp:__mouseEvent", {
              x: e.clientX,
              y: e.clientY,
              down: t,
              button: e.button
            });
          }
        }
      }
      window.addEventListener("keydown", e => {
        s(e);
        R(e, true);
        T(e, true);
      }, true);
      window.addEventListener("keyup", e => {
        s(e);
        R(e, false);
        T(e, false);
      }, true);
      window.addEventListener("blur", () => x(), true);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          x();
        }
      }, true);
      window.addEventListener("mousedown", e => I(e, true), true);
      window.addEventListener("mouseup", e => I(e, false), true);
      window.addEventListener("message", o => {
        const a = o.data;
        if (!a || typeof a != "object") {
          return;
        }
        if (a.type === "__ragemp:keyFromFrame") {
          c("ragemp:__keyEvent", {
            code: a.code,
            down: !!a.down
          });
          return;
        }
        if (a.type === "__ragemp:mouseFromFrame") {
          c("ragemp:__mouseEvent", {
            x: +a.x || 0,
            y: +a.y || 0,
            down: !!a.down,
            button: +a.button || 0
          });
          return;
        }
        const i = o.source;
        if (a.type === "__ragemp:viewReady" && i) {
          for (const [e, r] of t) {
            if (r.iframe && r.iframe.contentWindow === i) {
              if (!r.ready) {
                _(r, e);
                c("ragemp:browserLifecycle", {
                  browserId: e,
                  event: "domReady"
                });
                if (l === e) {
                  h(e);
                }
              }
              return;
            }
          }
        } else {
          if (i) {
            for (const e of t.values()) {
              if (e.iframe && e.iframe.contentWindow === i) {
                return;
              }
            }
          }
          if (typeof a.type == "string" && a.type.indexOf("__ragemp:browser:") === 0) {
            r("manager recv", a.type, a.browserId ?? "");
          }
          switch (a.type) {
            case "__ragemp:browser:create":
              b(a.browserId, a.url);
              return;
            case "__ragemp:browser:focus":
              s = a.browserId;
              l = s;
              if (s != null) {
                h(s);
              }
              return;
            case "__ragemp:browser:blur":
              if (l === a.browserId) {
                l = null;
              }
              return;
            case "__ragemp:browser:destroy":
              n.delete(a.browserId);
              d.delete(a.browserId);
              (function (e) {
                const n = t.get(e);
                if (n) {
                  n.iframe.remove();
                  t.delete(e);
                  r("destroyed browser", e);
                }
                if (l === e) {
                  l = null;
                }
              })(a.browserId);
              return;
            case "__ragemp:browser:pointerEvents":
              n.set(a.browserId, a.enabled !== false);
              g(a.browserId);
              return;
            case "__ragemp:browser:orderId":
              d.set(a.browserId, a.orderId | 0);
              m(a.browserId);
              return;
            case "__ragemp:setBrowsersHidden":
              f = a.hidden !== false;
              p();
              return;
            case "__ragemp:captureScreenshot":
              v(typeof a.encoding == "string" ? a.encoding : "jpg", typeof a.quality == "number" ? a.quality : 0.85).then(e => {
                c("ragemp:screenshotCaptureResult", {
                  requestId: a.requestId,
                  image: e
                });
              });
              return;
            case "__ragemp:browser:exec":
              E(a.browserId, {
                type: "__ragemp:exec",
                code: a.code
              });
              return;
            case "__ragemp:browser:reload":
              {
                E(a.browserId, {
                  type: "__ragemp:reload"
                });
                const e = t.get(a.browserId);
                if (e) {
                  e.ready = false;
                }
                return;
              }
            case "__ragemp:browser:event":
              E(a.browserId, {
                event: a.event,
                args: a.args
              });
              return;
            case "__ragemp:browser:proc":
              E(a.browserId, {
                proc: a.proc,
                requestId: a.requestId,
                args: a.args
              });
              return;
            case "__ragemp:browser:procResult":
              E(a.browserId, {
                procResult: true,
                requestId: a.requestId,
                result: a.result,
                error: a.error
              });
              return;
          }
          var s;
          e(a);
        }
      });
    })();
  }
})();