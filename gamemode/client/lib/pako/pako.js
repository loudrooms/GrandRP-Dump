/*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
(function (t, e) {
  if (typeof exports == "object" && typeof module != "undefined") {
    e(exports);
  } else if (typeof define == "function" && define.amd) {
    define(["exports"], e);
  } else {
    e((t = typeof globalThis != "undefined" ? globalThis : t || self).pako = {});
  }
})(this, function (t) {
  "use strict";

  function e(t) {
    let e = t.length;
    while (--e >= 0) {
      t[e] = 0;
    }
  }
  const a = 256;
  const i = 286;
  const n = 30;
  const s = 15;
  const r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
  const l = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  const o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
  const h = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  const d = new Array(576);
  e(d);
  const _ = new Array(60);
  e(_);
  const f = new Array(512);
  e(f);
  const c = new Array(256);
  e(c);
  const u = new Array(29);
  e(u);
  const w = new Array(n);
  function b(t, e, a, i, n) {
    this.static_tree = t;
    this.extra_bits = e;
    this.extra_base = a;
    this.elems = i;
    this.max_length = n;
    this.has_stree = t && t.length;
  }
  let g;
  let p;
  let m;
  function k(t, e) {
    this.dyn_tree = t;
    this.max_code = 0;
    this.stat_desc = e;
  }
  e(w);
  const v = t => t < 256 ? f[t] : f[256 + (t >>> 7)];
  const y = (t, e) => {
    t.pending_buf[t.pending++] = e & 255;
    t.pending_buf[t.pending++] = e >>> 8 & 255;
  };
  const x = (t, e, a) => {
    if (t.bi_valid > 16 - a) {
      t.bi_buf |= e << t.bi_valid & 65535;
      y(t, t.bi_buf);
      t.bi_buf = e >> 16 - t.bi_valid;
      t.bi_valid += a - 16;
    } else {
      t.bi_buf |= e << t.bi_valid & 65535;
      t.bi_valid += a;
    }
  };
  const z = (t, e, a) => {
    x(t, a[e * 2], a[e * 2 + 1]);
  };
  const A = (t, e) => {
    let a = 0;
    do {
      a |= t & 1;
      t >>>= 1;
      a <<= 1;
    } while (--e > 0);
    return a >>> 1;
  };
  const E = (t, e, a) => {
    const i = new Array(16);
    let n;
    let r;
    let l = 0;
    for (n = 1; n <= s; n++) {
      i[n] = l = l + a[n - 1] << 1;
    }
    for (r = 0; r <= e; r++) {
      let e = t[r * 2 + 1];
      if (e !== 0) {
        t[r * 2] = A(i[e]++, e);
      }
    }
  };
  const R = t => {
    let e;
    for (e = 0; e < i; e++) {
      t.dyn_ltree[e * 2] = 0;
    }
    for (e = 0; e < n; e++) {
      t.dyn_dtree[e * 2] = 0;
    }
    for (e = 0; e < 19; e++) {
      t.bl_tree[e * 2] = 0;
    }
    t.dyn_ltree[512] = 1;
    t.opt_len = t.static_len = 0;
    t.last_lit = t.matches = 0;
  };
  const Z = t => {
    if (t.bi_valid > 8) {
      y(t, t.bi_buf);
    } else if (t.bi_valid > 0) {
      t.pending_buf[t.pending++] = t.bi_buf;
    }
    t.bi_buf = 0;
    t.bi_valid = 0;
  };
  const U = (t, e, a, i) => {
    const n = e * 2;
    const s = a * 2;
    return t[n] < t[s] || t[n] === t[s] && i[e] <= i[a];
  };
  const S = (t, e, a) => {
    const i = t.heap[a];
    let n = a << 1;
    while (n <= t.heap_len && (n < t.heap_len && U(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !U(e, i, t.heap[n], t.depth))) {
      t.heap[a] = t.heap[n];
      a = n;
      n <<= 1;
    }
    t.heap[a] = i;
  };
  const D = (t, e, i) => {
    let n;
    let s;
    let o;
    let h;
    let d = 0;
    if (t.last_lit !== 0) {
      do {
        n = t.pending_buf[t.d_buf + d * 2] << 8 | t.pending_buf[t.d_buf + d * 2 + 1];
        s = t.pending_buf[t.l_buf + d];
        d++;
        if (n === 0) {
          z(t, s, e);
        } else {
          o = c[s];
          z(t, o + a + 1, e);
          h = r[o];
          if (h !== 0) {
            s -= u[o];
            x(t, s, h);
          }
          n--;
          o = v(n);
          z(t, o, i);
          h = l[o];
          if (h !== 0) {
            n -= w[o];
            x(t, n, h);
          }
        }
      } while (d < t.last_lit);
    }
    z(t, 256, e);
  };
  const O = (t, e) => {
    const a = e.dyn_tree;
    const i = e.stat_desc.static_tree;
    const n = e.stat_desc.has_stree;
    const r = e.stat_desc.elems;
    let l;
    let o;
    let h;
    let d = -1;
    t.heap_len = 0;
    t.heap_max = 573;
    l = 0;
    for (; l < r; l++) {
      if (a[l * 2] !== 0) {
        t.heap[++t.heap_len] = d = l;
        t.depth[l] = 0;
      } else {
        a[l * 2 + 1] = 0;
      }
    }
    while (t.heap_len < 2) {
      h = t.heap[++t.heap_len] = d < 2 ? ++d : 0;
      a[h * 2] = 1;
      t.depth[h] = 0;
      t.opt_len--;
      if (n) {
        t.static_len -= i[h * 2 + 1];
      }
    }
    e.max_code = d;
    l = t.heap_len >> 1;
    for (; l >= 1; l--) {
      S(t, a, l);
    }
    h = r;
    do {
      l = t.heap[1];
      t.heap[1] = t.heap[t.heap_len--];
      S(t, a, 1);
      o = t.heap[1];
      t.heap[--t.heap_max] = l;
      t.heap[--t.heap_max] = o;
      a[h * 2] = a[l * 2] + a[o * 2];
      t.depth[h] = (t.depth[l] >= t.depth[o] ? t.depth[l] : t.depth[o]) + 1;
      a[l * 2 + 1] = a[o * 2 + 1] = h;
      t.heap[1] = h++;
      S(t, a, 1);
    } while (t.heap_len >= 2);
    t.heap[--t.heap_max] = t.heap[1];
    ((t, e) => {
      const a = e.dyn_tree;
      const i = e.max_code;
      const n = e.stat_desc.static_tree;
      const r = e.stat_desc.has_stree;
      const l = e.stat_desc.extra_bits;
      const o = e.stat_desc.extra_base;
      const h = e.stat_desc.max_length;
      let d;
      let _;
      let f;
      let c;
      let u;
      let w;
      let b = 0;
      for (c = 0; c <= s; c++) {
        t.bl_count[c] = 0;
      }
      a[t.heap[t.heap_max] * 2 + 1] = 0;
      d = t.heap_max + 1;
      for (; d < 573; d++) {
        _ = t.heap[d];
        c = a[a[_ * 2 + 1] * 2 + 1] + 1;
        if (c > h) {
          c = h;
          b++;
        }
        a[_ * 2 + 1] = c;
        if (!(_ > i)) {
          t.bl_count[c]++;
          u = 0;
          if (_ >= o) {
            u = l[_ - o];
          }
          w = a[_ * 2];
          t.opt_len += w * (c + u);
          if (r) {
            t.static_len += w * (n[_ * 2 + 1] + u);
          }
        }
      }
      if (b !== 0) {
        do {
          for (c = h - 1; t.bl_count[c] === 0;) {
            c--;
          }
          t.bl_count[c]--;
          t.bl_count[c + 1] += 2;
          t.bl_count[h]--;
          b -= 2;
        } while (b > 0);
        for (c = h; c !== 0; c--) {
          for (_ = t.bl_count[c]; _ !== 0;) {
            f = t.heap[--d];
            if (!(f > i)) {
              if (a[f * 2 + 1] !== c) {
                t.opt_len += (c - a[f * 2 + 1]) * a[f * 2];
                a[f * 2 + 1] = c;
              }
              _--;
            }
          }
        }
      }
    })(t, e);
    E(a, d, t.bl_count);
  };
  const T = (t, e, a) => {
    let i;
    let n;
    let s = -1;
    let r = e[1];
    let l = 0;
    let o = 7;
    let h = 4;
    if (r === 0) {
      o = 138;
      h = 3;
    }
    e[(a + 1) * 2 + 1] = 65535;
    i = 0;
    for (; i <= a; i++) {
      n = r;
      r = e[(i + 1) * 2 + 1];
      if (!(++l < o) || n !== r) {
        if (l < h) {
          t.bl_tree[n * 2] += l;
        } else if (n !== 0) {
          if (n !== s) {
            t.bl_tree[n * 2]++;
          }
          t.bl_tree[32]++;
        } else if (l <= 10) {
          t.bl_tree[34]++;
        } else {
          t.bl_tree[36]++;
        }
        l = 0;
        s = n;
        if (r === 0) {
          o = 138;
          h = 3;
        } else if (n === r) {
          o = 6;
          h = 3;
        } else {
          o = 7;
          h = 4;
        }
      }
    }
  };
  const I = (t, e, a) => {
    let i;
    let n;
    let s = -1;
    let r = e[1];
    let l = 0;
    let o = 7;
    let h = 4;
    if (r === 0) {
      o = 138;
      h = 3;
    }
    i = 0;
    for (; i <= a; i++) {
      n = r;
      r = e[(i + 1) * 2 + 1];
      if (!(++l < o) || n !== r) {
        if (l < h) {
          do {
            z(t, n, t.bl_tree);
          } while (--l !== 0);
        } else if (n !== 0) {
          if (n !== s) {
            z(t, n, t.bl_tree);
            l--;
          }
          z(t, 16, t.bl_tree);
          x(t, l - 3, 2);
        } else if (l <= 10) {
          z(t, 17, t.bl_tree);
          x(t, l - 3, 3);
        } else {
          z(t, 18, t.bl_tree);
          x(t, l - 11, 7);
        }
        l = 0;
        s = n;
        if (r === 0) {
          o = 138;
          h = 3;
        } else if (n === r) {
          o = 6;
          h = 3;
        } else {
          o = 7;
          h = 4;
        }
      }
    }
  };
  let F = false;
  const L = (t, e, a, i) => {
    x(t, 0 + (i ? 1 : 0), 3);
    ((t, e, a, i) => {
      Z(t);
      if (i) {
        y(t, a);
        y(t, ~a);
      }
      t.pending_buf.set(t.window.subarray(e, e + a), t.pending);
      t.pending += a;
    })(t, e, a, true);
  };
  var N = (t, e, i, n) => {
    let s;
    let r;
    let l = 0;
    if (t.level > 0) {
      if (t.strm.data_type === 2) {
        t.strm.data_type = (t => {
          let e;
          let i = 4093624447;
          for (e = 0; e <= 31; e++, i >>>= 1) {
            if (i & 1 && t.dyn_ltree[e * 2] !== 0) {
              return 0;
            }
          }
          if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
            return 1;
          }
          for (e = 32; e < a; e++) {
            if (t.dyn_ltree[e * 2] !== 0) {
              return 1;
            }
          }
          return 0;
        })(t);
      }
      O(t, t.l_desc);
      O(t, t.d_desc);
      l = (t => {
        let e;
        T(t, t.dyn_ltree, t.l_desc.max_code);
        T(t, t.dyn_dtree, t.d_desc.max_code);
        O(t, t.bl_desc);
        e = 18;
        for (; e >= 3 && t.bl_tree[h[e] * 2 + 1] === 0; e--);
        t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
        return e;
      })(t);
      s = t.opt_len + 3 + 7 >>> 3;
      r = t.static_len + 3 + 7 >>> 3;
      if (r <= s) {
        s = r;
      }
    } else {
      s = r = i + 5;
    }
    if (i + 4 <= s && e !== -1) {
      L(t, e, i, n);
    } else if (t.strategy === 4 || r === s) {
      x(t, 2 + (n ? 1 : 0), 3);
      D(t, d, _);
    } else {
      x(t, 4 + (n ? 1 : 0), 3);
      ((t, e, a, i) => {
        let n;
        x(t, e - 257, 5);
        x(t, a - 1, 5);
        x(t, i - 4, 4);
        n = 0;
        for (; n < i; n++) {
          x(t, t.bl_tree[h[n] * 2 + 1], 3);
        }
        I(t, t.dyn_ltree, e - 1);
        I(t, t.dyn_dtree, a - 1);
      })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, l + 1);
      D(t, t.dyn_ltree, t.dyn_dtree);
    }
    R(t);
    if (n) {
      Z(t);
    }
  };
  var B = {
    _tr_init: t => {
      if (!F) {
        (() => {
          let t;
          let e;
          let a;
          let h;
          let k;
          const v = new Array(16);
          a = 0;
          h = 0;
          for (; h < 28; h++) {
            u[h] = a;
            t = 0;
            for (; t < 1 << r[h]; t++) {
              c[a++] = h;
            }
          }
          c[a - 1] = h;
          k = 0;
          h = 0;
          for (; h < 16; h++) {
            w[h] = k;
            t = 0;
            for (; t < 1 << l[h]; t++) {
              f[k++] = h;
            }
          }
          for (k >>= 7; h < n; h++) {
            w[h] = k << 7;
            t = 0;
            for (; t < 1 << l[h] - 7; t++) {
              f[256 + k++] = h;
            }
          }
          for (e = 0; e <= s; e++) {
            v[e] = 0;
          }
          for (t = 0; t <= 143;) {
            d[t * 2 + 1] = 8;
            t++;
            v[8]++;
          }
          while (t <= 255) {
            d[t * 2 + 1] = 9;
            t++;
            v[9]++;
          }
          while (t <= 279) {
            d[t * 2 + 1] = 7;
            t++;
            v[7]++;
          }
          while (t <= 287) {
            d[t * 2 + 1] = 8;
            t++;
            v[8]++;
          }
          E(d, 287, v);
          t = 0;
          for (; t < n; t++) {
            _[t * 2 + 1] = 5;
            _[t * 2] = A(t, 5);
          }
          g = new b(d, r, 257, i, s);
          p = new b(_, l, 0, n, s);
          m = new b(new Array(0), o, 0, 19, 7);
        })();
        F = true;
      }
      t.l_desc = new k(t.dyn_ltree, g);
      t.d_desc = new k(t.dyn_dtree, p);
      t.bl_desc = new k(t.bl_tree, m);
      t.bi_buf = 0;
      t.bi_valid = 0;
      R(t);
    },
    _tr_stored_block: L,
    _tr_flush_block: N,
    _tr_tally: (t, e, i) => {
      t.pending_buf[t.d_buf + t.last_lit * 2] = e >>> 8 & 255;
      t.pending_buf[t.d_buf + t.last_lit * 2 + 1] = e & 255;
      t.pending_buf[t.l_buf + t.last_lit] = i & 255;
      t.last_lit++;
      if (e === 0) {
        t.dyn_ltree[i * 2]++;
      } else {
        t.matches++;
        e--;
        t.dyn_ltree[(c[i] + a + 1) * 2]++;
        t.dyn_dtree[v(e) * 2]++;
      }
      return t.last_lit === t.lit_bufsize - 1;
    },
    _tr_align: t => {
      x(t, 2, 3);
      z(t, 256, d);
      (t => {
        if (t.bi_valid === 16) {
          y(t, t.bi_buf);
          t.bi_buf = 0;
          t.bi_valid = 0;
        } else if (t.bi_valid >= 8) {
          t.pending_buf[t.pending++] = t.bi_buf & 255;
          t.bi_buf >>= 8;
          t.bi_valid -= 8;
        }
      })(t);
    }
  };
  var C = (t, e, a, i) => {
    let n = t & 65535;
    let s = t >>> 16 & 65535;
    let r = 0;
    while (a !== 0) {
      r = a > 2000 ? 2000 : a;
      a -= r;
      do {
        n = n + e[i++] | 0;
        s = s + n | 0;
      } while (--r);
      n %= 65521;
      s %= 65521;
    }
    return n | s << 16;
  };
  const M = new Uint32Array((() => {
    let t;
    let e = [];
    for (var a = 0; a < 256; a++) {
      t = a;
      for (var i = 0; i < 8; i++) {
        t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
      }
      e[a] = t;
    }
    return e;
  })());
  var H = (t, e, a, i) => {
    const n = M;
    const s = i + a;
    t ^= -1;
    for (let a = i; a < s; a++) {
      t = t >>> 8 ^ n[(t ^ e[a]) & 255];
    }
    return t ^ -1;
  };
  var j = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  };
  var K = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
  const {
    _tr_init: P,
    _tr_stored_block: Y,
    _tr_flush_block: G,
    _tr_tally: X,
    _tr_align: W
  } = B;
  const {
    Z_NO_FLUSH: q,
    Z_PARTIAL_FLUSH: J,
    Z_FULL_FLUSH: Q,
    Z_FINISH: V,
    Z_BLOCK: $,
    Z_OK: tt,
    Z_STREAM_END: et,
    Z_STREAM_ERROR: at,
    Z_DATA_ERROR: it,
    Z_BUF_ERROR: nt,
    Z_DEFAULT_COMPRESSION: st,
    Z_FILTERED: rt,
    Z_HUFFMAN_ONLY: lt,
    Z_RLE: ot,
    Z_FIXED: ht,
    Z_DEFAULT_STRATEGY: dt,
    Z_UNKNOWN: _t,
    Z_DEFLATED: ft
  } = K;
  const ct = 258;
  const ut = 262;
  const wt = 103;
  const bt = 113;
  const gt = 666;
  const pt = (t, e) => {
    t.msg = j[e];
    return e;
  };
  const mt = t => (t << 1) - (t > 4 ? 9 : 0);
  const kt = t => {
    let e = t.length;
    while (--e >= 0) {
      t[e] = 0;
    }
  };
  let vt = (t, e, a) => (e << t.hash_shift ^ a) & t.hash_mask;
  const yt = t => {
    const e = t.state;
    let a = e.pending;
    if (a > t.avail_out) {
      a = t.avail_out;
    }
    if (a !== 0) {
      t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + a), t.next_out);
      t.next_out += a;
      e.pending_out += a;
      t.total_out += a;
      t.avail_out -= a;
      e.pending -= a;
      if (e.pending === 0) {
        e.pending_out = 0;
      }
    }
  };
  const xt = (t, e) => {
    G(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
    t.block_start = t.strstart;
    yt(t.strm);
  };
  const zt = (t, e) => {
    t.pending_buf[t.pending++] = e;
  };
  const At = (t, e) => {
    t.pending_buf[t.pending++] = e >>> 8 & 255;
    t.pending_buf[t.pending++] = e & 255;
  };
  const Et = (t, e, a, i) => {
    let n = t.avail_in;
    if (n > i) {
      n = i;
    }
    if (n === 0) {
      return 0;
    } else {
      t.avail_in -= n;
      e.set(t.input.subarray(t.next_in, t.next_in + n), a);
      if (t.state.wrap === 1) {
        t.adler = C(t.adler, e, n, a);
      } else if (t.state.wrap === 2) {
        t.adler = H(t.adler, e, n, a);
      }
      t.next_in += n;
      t.total_in += n;
      return n;
    }
  };
  const Rt = (t, e) => {
    let a;
    let i;
    let n = t.max_chain_length;
    let s = t.strstart;
    let r = t.prev_length;
    let l = t.nice_match;
    const o = t.strstart > t.w_size - ut ? t.strstart - (t.w_size - ut) : 0;
    const h = t.window;
    const d = t.w_mask;
    const _ = t.prev;
    const f = t.strstart + ct;
    let c = h[s + r - 1];
    let u = h[s + r];
    if (t.prev_length >= t.good_match) {
      n >>= 2;
    }
    if (l > t.lookahead) {
      l = t.lookahead;
    }
    do {
      a = e;
      if (h[a + r] === u && h[a + r - 1] === c && h[a] === h[s] && h[++a] === h[s + 1]) {
        s += 2;
        a++;
        do {} while (h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && s < f);
        i = ct - (f - s);
        s = f - ct;
        if (i > r) {
          t.match_start = e;
          r = i;
          if (i >= l) {
            break;
          }
          c = h[s + r - 1];
          u = h[s + r];
        }
      }
    } while ((e = _[e & d]) > o && --n !== 0);
    if (r <= t.lookahead) {
      return r;
    } else {
      return t.lookahead;
    }
  };
  const Zt = t => {
    const e = t.w_size;
    let a;
    let i;
    let n;
    let s;
    let r;
    do {
      s = t.window_size - t.lookahead - t.strstart;
      if (t.strstart >= e + (e - ut)) {
        t.window.set(t.window.subarray(e, e + e), 0);
        t.match_start -= e;
        t.strstart -= e;
        t.block_start -= e;
        i = t.hash_size;
        a = i;
        do {
          n = t.head[--a];
          t.head[a] = n >= e ? n - e : 0;
        } while (--i);
        i = e;
        a = i;
        do {
          n = t.prev[--a];
          t.prev[a] = n >= e ? n - e : 0;
        } while (--i);
        s += e;
      }
      if (t.strm.avail_in === 0) {
        break;
      }
      i = Et(t.strm, t.window, t.strstart + t.lookahead, s);
      t.lookahead += i;
      if (t.lookahead + t.insert >= 3) {
        r = t.strstart - t.insert;
        t.ins_h = t.window[r];
        t.ins_h = vt(t, t.ins_h, t.window[r + 1]);
        while (t.insert && (t.ins_h = vt(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3)));
      }
    } while (t.lookahead < ut && t.strm.avail_in !== 0);
  };
  const Ut = (t, e) => {
    let a;
    let i;
    while (true) {
      if (t.lookahead < ut) {
        Zt(t);
        if (t.lookahead < ut && e === q) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      a = 0;
      if (t.lookahead >= 3) {
        t.ins_h = vt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
        a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      if (a !== 0 && t.strstart - a <= t.w_size - ut) {
        t.match_length = Rt(t, a);
      }
      if (t.match_length >= 3) {
        i = X(t, t.strstart - t.match_start, t.match_length - 3);
        t.lookahead -= t.match_length;
        if (t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
          t.match_length--;
          do {
            t.strstart++;
            t.ins_h = vt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
            a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          } while (--t.match_length !== 0);
          t.strstart++;
        } else {
          t.strstart += t.match_length;
          t.match_length = 0;
          t.ins_h = t.window[t.strstart];
          t.ins_h = vt(t, t.ins_h, t.window[t.strstart + 1]);
        }
      } else {
        i = X(t, 0, t.window[t.strstart]);
        t.lookahead--;
        t.strstart++;
      }
      if (i && (xt(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
    }
    t.insert = t.strstart < 2 ? t.strstart : 2;
    if (e === V) {
      xt(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.last_lit && (xt(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  const St = (t, e) => {
    let a;
    let i;
    let n;
    while (true) {
      if (t.lookahead < ut) {
        Zt(t);
        if (t.lookahead < ut && e === q) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      a = 0;
      if (t.lookahead >= 3) {
        t.ins_h = vt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
        a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      t.prev_length = t.match_length;
      t.prev_match = t.match_start;
      t.match_length = 2;
      if (a !== 0 && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - ut) {
        t.match_length = Rt(t, a);
        if (t.match_length <= 5 && (t.strategy === rt || t.match_length === 3 && t.strstart - t.match_start > 4096)) {
          t.match_length = 2;
        }
      }
      if (t.prev_length >= 3 && t.match_length <= t.prev_length) {
        n = t.strstart + t.lookahead - 3;
        i = X(t, t.strstart - 1 - t.prev_match, t.prev_length - 3);
        t.lookahead -= t.prev_length - 1;
        t.prev_length -= 2;
        do {
          if (++t.strstart <= n) {
            t.ins_h = vt(t, t.ins_h, t.window[t.strstart + 3 - 1]);
            a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          }
        } while (--t.prev_length !== 0);
        t.match_available = 0;
        t.match_length = 2;
        t.strstart++;
        if (i && (xt(t, false), t.strm.avail_out === 0)) {
          return 1;
        }
      } else if (t.match_available) {
        i = X(t, 0, t.window[t.strstart - 1]);
        if (i) {
          xt(t, false);
        }
        t.strstart++;
        t.lookahead--;
        if (t.strm.avail_out === 0) {
          return 1;
        }
      } else {
        t.match_available = 1;
        t.strstart++;
        t.lookahead--;
      }
    }
    if (t.match_available) {
      i = X(t, 0, t.window[t.strstart - 1]);
      t.match_available = 0;
    }
    t.insert = t.strstart < 2 ? t.strstart : 2;
    if (e === V) {
      xt(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (t.last_lit && (xt(t, false), t.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  function Dt(t, e, a, i, n) {
    this.good_length = t;
    this.max_lazy = e;
    this.nice_length = a;
    this.max_chain = i;
    this.func = n;
  }
  const Ot = [new Dt(0, 0, 0, 0, (t, e) => {
    let a = 65535;
    for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
      if (t.lookahead <= 1) {
        Zt(t);
        if (t.lookahead === 0 && e === q) {
          return 1;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      t.strstart += t.lookahead;
      t.lookahead = 0;
      const i = t.block_start + a;
      if ((t.strstart === 0 || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, xt(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
      if (t.strstart - t.block_start >= t.w_size - ut && (xt(t, false), t.strm.avail_out === 0)) {
        return 1;
      }
    }
    t.insert = 0;
    if (e === V) {
      xt(t, true);
      if (t.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else {
      if (t.strstart > t.block_start) {
        xt(t, false);
        t.strm.avail_out;
      }
      return 1;
    }
  }), new Dt(4, 4, 8, 4, Ut), new Dt(4, 5, 16, 8, Ut), new Dt(4, 6, 32, 32, Ut), new Dt(4, 4, 16, 16, St), new Dt(8, 16, 32, 32, St), new Dt(8, 16, 128, 128, St), new Dt(8, 32, 128, 256, St), new Dt(32, 128, 258, 1024, St), new Dt(32, 258, 258, 4096, St)];
  function Tt() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = ft;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new Uint16Array(1146);
    this.dyn_dtree = new Uint16Array(122);
    this.bl_tree = new Uint16Array(78);
    kt(this.dyn_ltree);
    kt(this.dyn_dtree);
    kt(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(16);
    this.heap = new Uint16Array(573);
    kt(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(573);
    kt(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  const It = t => {
    if (!t || !t.state) {
      return pt(t, at);
    }
    t.total_in = t.total_out = 0;
    t.data_type = _t;
    const e = t.state;
    e.pending = 0;
    e.pending_out = 0;
    if (e.wrap < 0) {
      e.wrap = -e.wrap;
    }
    e.status = e.wrap ? 42 : bt;
    t.adler = e.wrap === 2 ? 0 : 1;
    e.last_flush = q;
    P(e);
    return tt;
  };
  const Ft = t => {
    const e = It(t);
    var a;
    if (e === tt) {
      (a = t.state).window_size = a.w_size * 2;
      kt(a.head);
      a.max_lazy_match = Ot[a.level].max_lazy;
      a.good_match = Ot[a.level].good_length;
      a.nice_match = Ot[a.level].nice_length;
      a.max_chain_length = Ot[a.level].max_chain;
      a.strstart = 0;
      a.block_start = 0;
      a.lookahead = 0;
      a.insert = 0;
      a.match_length = a.prev_length = 2;
      a.match_available = 0;
      a.ins_h = 0;
    }
    return e;
  };
  const Lt = (t, e, a, i, n, s) => {
    if (!t) {
      return at;
    }
    let r = 1;
    if (e === st) {
      e = 6;
    }
    if (i < 0) {
      r = 0;
      i = -i;
    } else if (i > 15) {
      r = 2;
      i -= 16;
    }
    if (n < 1 || n > 9 || a !== ft || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > ht) {
      return pt(t, at);
    }
    if (i === 8) {
      i = 9;
    }
    const l = new Tt();
    t.state = l;
    l.strm = t;
    l.wrap = r;
    l.gzhead = null;
    l.w_bits = i;
    l.w_size = 1 << l.w_bits;
    l.w_mask = l.w_size - 1;
    l.hash_bits = n + 7;
    l.hash_size = 1 << l.hash_bits;
    l.hash_mask = l.hash_size - 1;
    l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3);
    l.window = new Uint8Array(l.w_size * 2);
    l.head = new Uint16Array(l.hash_size);
    l.prev = new Uint16Array(l.w_size);
    l.lit_bufsize = 1 << n + 6;
    l.pending_buf_size = l.lit_bufsize * 4;
    l.pending_buf = new Uint8Array(l.pending_buf_size);
    l.d_buf = l.lit_bufsize * 1;
    l.l_buf = l.lit_bufsize * 3;
    l.level = e;
    l.strategy = s;
    l.method = a;
    return Ft(t);
  };
  var Nt = {
    deflateInit: (t, e) => Lt(t, e, ft, 15, 8, dt),
    deflateInit2: Lt,
    deflateReset: Ft,
    deflateResetKeep: It,
    deflateSetHeader: (t, e) => t && t.state ? t.state.wrap !== 2 ? at : (t.state.gzhead = e, tt) : at,
    deflate: (t, e) => {
      let a;
      let i;
      if (!t || !t.state || e > $ || e < 0) {
        if (t) {
          return pt(t, at);
        } else {
          return at;
        }
      }
      const n = t.state;
      if (!t.output || !t.input && t.avail_in !== 0 || n.status === gt && e !== V) {
        return pt(t, t.avail_out === 0 ? nt : at);
      }
      n.strm = t;
      const s = n.last_flush;
      n.last_flush = e;
      if (n.status === 42) {
        if (n.wrap === 2) {
          t.adler = 0;
          zt(n, 31);
          zt(n, 139);
          zt(n, 8);
          if (n.gzhead) {
            zt(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0));
            zt(n, n.gzhead.time & 255);
            zt(n, n.gzhead.time >> 8 & 255);
            zt(n, n.gzhead.time >> 16 & 255);
            zt(n, n.gzhead.time >> 24 & 255);
            zt(n, n.level === 9 ? 2 : n.strategy >= lt || n.level < 2 ? 4 : 0);
            zt(n, n.gzhead.os & 255);
            if (n.gzhead.extra && n.gzhead.extra.length) {
              zt(n, n.gzhead.extra.length & 255);
              zt(n, n.gzhead.extra.length >> 8 & 255);
            }
            if (n.gzhead.hcrc) {
              t.adler = H(t.adler, n.pending_buf, n.pending, 0);
            }
            n.gzindex = 0;
            n.status = 69;
          } else {
            zt(n, 0);
            zt(n, 0);
            zt(n, 0);
            zt(n, 0);
            zt(n, 0);
            zt(n, n.level === 9 ? 2 : n.strategy >= lt || n.level < 2 ? 4 : 0);
            zt(n, 3);
            n.status = bt;
          }
        } else {
          let e = ft + (n.w_bits - 8 << 4) << 8;
          let a = -1;
          a = n.strategy >= lt || n.level < 2 ? 0 : n.level < 6 ? 1 : n.level === 6 ? 2 : 3;
          e |= a << 6;
          if (n.strstart !== 0) {
            e |= 32;
          }
          e += 31 - e % 31;
          n.status = bt;
          At(n, e);
          if (n.strstart !== 0) {
            At(n, t.adler >>> 16);
            At(n, t.adler & 65535);
          }
          t.adler = 1;
        }
      }
      if (n.status === 69) {
        if (n.gzhead.extra) {
          for (a = n.pending; n.gzindex < (n.gzhead.extra.length & 65535) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > a && (t.adler = H(t.adler, n.pending_buf, n.pending - a, a)), yt(t), a = n.pending, n.pending !== n.pending_buf_size));) {
            zt(n, n.gzhead.extra[n.gzindex] & 255);
            n.gzindex++;
          }
          if (n.gzhead.hcrc && n.pending > a) {
            t.adler = H(t.adler, n.pending_buf, n.pending - a, a);
          }
          if (n.gzindex === n.gzhead.extra.length) {
            n.gzindex = 0;
            n.status = 73;
          }
        } else {
          n.status = 73;
        }
      }
      if (n.status === 73) {
        if (n.gzhead.name) {
          a = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (t.adler = H(t.adler, n.pending_buf, n.pending - a, a)), yt(t), a = n.pending, n.pending === n.pending_buf_size)) {
              i = 1;
              break;
            }
            i = n.gzindex < n.gzhead.name.length ? n.gzhead.name.charCodeAt(n.gzindex++) & 255 : 0;
            zt(n, i);
          } while (i !== 0);
          if (n.gzhead.hcrc && n.pending > a) {
            t.adler = H(t.adler, n.pending_buf, n.pending - a, a);
          }
          if (i === 0) {
            n.gzindex = 0;
            n.status = 91;
          }
        } else {
          n.status = 91;
        }
      }
      if (n.status === 91) {
        if (n.gzhead.comment) {
          a = n.pending;
          do {
            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (t.adler = H(t.adler, n.pending_buf, n.pending - a, a)), yt(t), a = n.pending, n.pending === n.pending_buf_size)) {
              i = 1;
              break;
            }
            i = n.gzindex < n.gzhead.comment.length ? n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : 0;
            zt(n, i);
          } while (i !== 0);
          if (n.gzhead.hcrc && n.pending > a) {
            t.adler = H(t.adler, n.pending_buf, n.pending - a, a);
          }
          if (i === 0) {
            n.status = wt;
          }
        } else {
          n.status = wt;
        }
      }
      if (n.status === wt) {
        if (n.gzhead.hcrc) {
          if (n.pending + 2 > n.pending_buf_size) {
            yt(t);
          }
          if (n.pending + 2 <= n.pending_buf_size) {
            zt(n, t.adler & 255);
            zt(n, t.adler >> 8 & 255);
            t.adler = 0;
            n.status = bt;
          }
        } else {
          n.status = bt;
        }
      }
      if (n.pending !== 0) {
        yt(t);
        if (t.avail_out === 0) {
          n.last_flush = -1;
          return tt;
        }
      } else if (t.avail_in === 0 && mt(e) <= mt(s) && e !== V) {
        return pt(t, nt);
      }
      if (n.status === gt && t.avail_in !== 0) {
        return pt(t, nt);
      }
      if (t.avail_in !== 0 || n.lookahead !== 0 || e !== q && n.status !== gt) {
        let a = n.strategy === lt ? ((t, e) => {
          let a;
          while (true) {
            if (t.lookahead === 0 && (Zt(t), t.lookahead === 0)) {
              if (e === q) {
                return 1;
              }
              break;
            }
            t.match_length = 0;
            a = X(t, 0, t.window[t.strstart]);
            t.lookahead--;
            t.strstart++;
            if (a && (xt(t, false), t.strm.avail_out === 0)) {
              return 1;
            }
          }
          t.insert = 0;
          if (e === V) {
            xt(t, true);
            if (t.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (t.last_lit && (xt(t, false), t.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(n, e) : n.strategy === ot ? ((t, e) => {
          let a;
          let i;
          let n;
          let s;
          const r = t.window;
          while (true) {
            if (t.lookahead <= ct) {
              Zt(t);
              if (t.lookahead <= ct && e === q) {
                return 1;
              }
              if (t.lookahead === 0) {
                break;
              }
            }
            t.match_length = 0;
            if (t.lookahead >= 3 && t.strstart > 0 && (n = t.strstart - 1, i = r[n], i === r[++n] && i === r[++n] && i === r[++n])) {
              s = t.strstart + ct;
              do {} while (i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && n < s);
              t.match_length = ct - (s - n);
              if (t.match_length > t.lookahead) {
                t.match_length = t.lookahead;
              }
            }
            if (t.match_length >= 3) {
              a = X(t, 1, t.match_length - 3);
              t.lookahead -= t.match_length;
              t.strstart += t.match_length;
              t.match_length = 0;
            } else {
              a = X(t, 0, t.window[t.strstart]);
              t.lookahead--;
              t.strstart++;
            }
            if (a && (xt(t, false), t.strm.avail_out === 0)) {
              return 1;
            }
          }
          t.insert = 0;
          if (e === V) {
            xt(t, true);
            if (t.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (t.last_lit && (xt(t, false), t.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(n, e) : Ot[n.level].func(n, e);
        if (a === 3 || a === 4) {
          n.status = gt;
        }
        if (a === 1 || a === 3) {
          if (t.avail_out === 0) {
            n.last_flush = -1;
          }
          return tt;
        }
        if (a === 2 && (e === J ? W(n) : e !== $ && (Y(n, 0, 0, false), e === Q && (kt(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), yt(t), t.avail_out === 0)) {
          n.last_flush = -1;
          return tt;
        }
      }
      if (e !== V) {
        return tt;
      } else if (n.wrap <= 0) {
        return et;
      } else {
        if (n.wrap === 2) {
          zt(n, t.adler & 255);
          zt(n, t.adler >> 8 & 255);
          zt(n, t.adler >> 16 & 255);
          zt(n, t.adler >> 24 & 255);
          zt(n, t.total_in & 255);
          zt(n, t.total_in >> 8 & 255);
          zt(n, t.total_in >> 16 & 255);
          zt(n, t.total_in >> 24 & 255);
        } else {
          At(n, t.adler >>> 16);
          At(n, t.adler & 65535);
        }
        yt(t);
        if (n.wrap > 0) {
          n.wrap = -n.wrap;
        }
        if (n.pending !== 0) {
          return tt;
        } else {
          return et;
        }
      }
    },
    deflateEnd: t => {
      if (!t || !t.state) {
        return at;
      }
      const e = t.state.status;
      if (e !== 42 && e !== 69 && e !== 73 && e !== 91 && e !== wt && e !== bt && e !== gt) {
        return pt(t, at);
      } else {
        t.state = null;
        if (e === bt) {
          return pt(t, it);
        } else {
          return tt;
        }
      }
    },
    deflateSetDictionary: (t, e) => {
      let a = e.length;
      if (!t || !t.state) {
        return at;
      }
      const i = t.state;
      const n = i.wrap;
      if (n === 2 || n === 1 && i.status !== 42 || i.lookahead) {
        return at;
      }
      if (n === 1) {
        t.adler = C(t.adler, e, a, 0);
      }
      i.wrap = 0;
      if (a >= i.w_size) {
        if (n === 0) {
          kt(i.head);
          i.strstart = 0;
          i.block_start = 0;
          i.insert = 0;
        }
        let t = new Uint8Array(i.w_size);
        t.set(e.subarray(a - i.w_size, a), 0);
        e = t;
        a = i.w_size;
      }
      const s = t.avail_in;
      const r = t.next_in;
      const l = t.input;
      t.avail_in = a;
      t.next_in = 0;
      t.input = e;
      Zt(i);
      while (i.lookahead >= 3) {
        let t = i.strstart;
        let e = i.lookahead - 2;
        do {
          i.ins_h = vt(i, i.ins_h, i.window[t + 3 - 1]);
          i.prev[t & i.w_mask] = i.head[i.ins_h];
          i.head[i.ins_h] = t;
          t++;
        } while (--e);
        i.strstart = t;
        i.lookahead = 2;
        Zt(i);
      }
      i.strstart += i.lookahead;
      i.block_start = i.strstart;
      i.insert = i.lookahead;
      i.lookahead = 0;
      i.match_length = i.prev_length = 2;
      i.match_available = 0;
      t.next_in = r;
      t.input = l;
      t.avail_in = s;
      i.wrap = n;
      return tt;
    },
    deflateInfo: "pako deflate (from Nodeca project)"
  };
  const Bt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  function Ct(t) {
    const e = Array.prototype.slice.call(arguments, 1);
    while (e.length) {
      const a = e.shift();
      if (a) {
        if (typeof a != "object") {
          throw new TypeError(a + "must be non-object");
        }
        for (const e in a) {
          if (Bt(a, e)) {
            t[e] = a[e];
          }
        }
      }
    }
    return t;
  }
  var Mt = t => {
    let e = 0;
    for (let a = 0, i = t.length; a < i; a++) {
      e += t[a].length;
    }
    const a = new Uint8Array(e);
    for (let e = 0, i = 0, n = t.length; e < n; e++) {
      let n = t[e];
      a.set(n, i);
      i += n.length;
    }
    return a;
  };
  let Ht = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    Ht = false;
  }
  const jt = new Uint8Array(256);
  for (let t = 0; t < 256; t++) {
    jt[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
  }
  jt[254] = jt[254] = 1;
  var Kt = t => {
    let e;
    let a;
    let i;
    let n;
    let s;
    let r = t.length;
    let l = 0;
    for (n = 0; n < r; n++) {
      a = t.charCodeAt(n);
      if ((a & 64512) == 55296 && n + 1 < r) {
        i = t.charCodeAt(n + 1);
        if ((i & 64512) == 56320) {
          a = 65536 + (a - 55296 << 10) + (i - 56320);
          n++;
        }
      }
      l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
    }
    e = new Uint8Array(l);
    s = 0;
    n = 0;
    for (; s < l; n++) {
      a = t.charCodeAt(n);
      if ((a & 64512) == 55296 && n + 1 < r) {
        i = t.charCodeAt(n + 1);
        if ((i & 64512) == 56320) {
          a = 65536 + (a - 55296 << 10) + (i - 56320);
          n++;
        }
      }
      if (a < 128) {
        e[s++] = a;
      } else if (a < 2048) {
        e[s++] = a >>> 6 | 192;
        e[s++] = a & 63 | 128;
      } else if (a < 65536) {
        e[s++] = a >>> 12 | 224;
        e[s++] = a >>> 6 & 63 | 128;
        e[s++] = a & 63 | 128;
      } else {
        e[s++] = a >>> 18 | 240;
        e[s++] = a >>> 12 & 63 | 128;
        e[s++] = a >>> 6 & 63 | 128;
        e[s++] = a & 63 | 128;
      }
    }
    return e;
  };
  var Pt = (t, e) => {
    let a;
    let i;
    const n = e || t.length;
    const s = new Array(n * 2);
    i = 0;
    a = 0;
    while (a < n) {
      let e = t[a++];
      if (e < 128) {
        s[i++] = e;
        continue;
      }
      let r = jt[e];
      if (r > 4) {
        s[i++] = 65533;
        a += r - 1;
      } else {
        for (e &= r === 2 ? 31 : r === 3 ? 15 : 7; r > 1 && a < n;) {
          e = e << 6 | t[a++] & 63;
          r--;
        }
        if (r > 1) {
          s[i++] = 65533;
        } else if (e < 65536) {
          s[i++] = e;
        } else {
          e -= 65536;
          s[i++] = e >> 10 & 1023 | 55296;
          s[i++] = e & 1023 | 56320;
        }
      }
    }
    return ((t, e) => {
      if (e < 65534 && t.subarray && Ht) {
        return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
      }
      let a = "";
      for (let i = 0; i < e; i++) {
        a += String.fromCharCode(t[i]);
      }
      return a;
    })(s, i);
  };
  var Yt = (t, e) => {
    if ((e = e || t.length) > t.length) {
      e = t.length;
    }
    let a = e - 1;
    while (a >= 0 && (t[a] & 192) == 128) {
      a--;
    }
    if (a < 0 || a === 0) {
      return e;
    } else if (a + jt[t[a]] > e) {
      return a;
    } else {
      return e;
    }
  };
  function Gt() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  const Xt = Object.prototype.toString;
  const {
    Z_NO_FLUSH: Wt,
    Z_SYNC_FLUSH: qt,
    Z_FULL_FLUSH: Jt,
    Z_FINISH: Qt,
    Z_OK: Vt,
    Z_STREAM_END: $t,
    Z_DEFAULT_COMPRESSION: te,
    Z_DEFAULT_STRATEGY: ee,
    Z_DEFLATED: ae
  } = K;
  function ie(t) {
    this.options = Ct({
      level: te,
      method: ae,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: ee
    }, t || {});
    let e = this.options;
    if (e.raw && e.windowBits > 0) {
      e.windowBits = -e.windowBits;
    } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
      e.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new Gt();
    this.strm.avail_out = 0;
    let a = Nt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (a !== Vt) {
      throw new Error(j[a]);
    }
    if (e.header) {
      Nt.deflateSetHeader(this.strm, e.header);
    }
    if (e.dictionary) {
      let t;
      t = typeof e.dictionary == "string" ? Kt(e.dictionary) : Xt.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
      a = Nt.deflateSetDictionary(this.strm, t);
      if (a !== Vt) {
        throw new Error(j[a]);
      }
      this._dict_set = true;
    }
  }
  function ne(t, e) {
    const a = new ie(e);
    a.push(t, true);
    if (a.err) {
      throw a.msg || j[a.err];
    }
    return a.result;
  }
  ie.prototype.push = function (t, e) {
    const a = this.strm;
    const i = this.options.chunkSize;
    let n;
    let s;
    if (this.ended) {
      return false;
    }
    s = e === ~~e ? e : e === true ? Qt : Wt;
    if (typeof t == "string") {
      a.input = Kt(t);
    } else if (Xt.call(t) === "[object ArrayBuffer]") {
      a.input = new Uint8Array(t);
    } else {
      a.input = t;
    }
    a.next_in = 0;
    a.avail_in = a.input.length;
    while (true) {
      if (a.avail_out === 0) {
        a.output = new Uint8Array(i);
        a.next_out = 0;
        a.avail_out = i;
      }
      if ((s === qt || s === Jt) && a.avail_out <= 6) {
        this.onData(a.output.subarray(0, a.next_out));
        a.avail_out = 0;
      } else {
        n = Nt.deflate(a, s);
        if (n === $t) {
          if (a.next_out > 0) {
            this.onData(a.output.subarray(0, a.next_out));
          }
          n = Nt.deflateEnd(this.strm);
          this.onEnd(n);
          this.ended = true;
          return n === Vt;
        }
        if (a.avail_out !== 0) {
          if (s > 0 && a.next_out > 0) {
            this.onData(a.output.subarray(0, a.next_out));
            a.avail_out = 0;
          } else if (a.avail_in === 0) {
            break;
          }
        } else {
          this.onData(a.output);
        }
      }
    }
    return true;
  };
  ie.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  ie.prototype.onEnd = function (t) {
    if (t === Vt) {
      this.result = Mt(this.chunks);
    }
    this.chunks = [];
    this.err = t;
    this.msg = this.strm.msg;
  };
  var se = {
    Deflate: ie,
    deflate: ne,
    deflateRaw: function (t, e) {
      (e = e || {}).raw = true;
      return ne(t, e);
    },
    gzip: function (t, e) {
      (e = e || {}).gzip = true;
      return ne(t, e);
    },
    constants: K
  };
  function re(t, e) {
    let a;
    let i;
    let n;
    let s;
    let r;
    let l;
    let o;
    let h;
    let d;
    let _;
    let f;
    let c;
    let u;
    let w;
    let b;
    let g;
    let p;
    let m;
    let k;
    let v;
    let y;
    let x;
    let z;
    let A;
    const E = t.state;
    a = t.next_in;
    z = t.input;
    i = a + (t.avail_in - 5);
    n = t.next_out;
    A = t.output;
    s = n - (e - t.avail_out);
    r = n + (t.avail_out - 257);
    l = E.dmax;
    o = E.wsize;
    h = E.whave;
    d = E.wnext;
    _ = E.window;
    f = E.hold;
    c = E.bits;
    u = E.lencode;
    w = E.distcode;
    b = (1 << E.lenbits) - 1;
    g = (1 << E.distbits) - 1;
    t: do {
      if (c < 15) {
        f += z[a++] << c;
        c += 8;
        f += z[a++] << c;
        c += 8;
      }
      p = u[f & b];
      e: while (true) {
        m = p >>> 24;
        f >>>= m;
        c -= m;
        m = p >>> 16 & 255;
        if (m === 0) {
          A[n++] = p & 65535;
        } else {
          if (!(m & 16)) {
            if (m & 64) {
              if (m & 32) {
                E.mode = 12;
                break t;
              }
              t.msg = "invalid literal/length code";
              E.mode = 30;
              break t;
            }
            p = u[(p & 65535) + (f & (1 << m) - 1)];
            continue e;
          }
          k = p & 65535;
          m &= 15;
          if (m) {
            if (c < m) {
              f += z[a++] << c;
              c += 8;
            }
            k += f & (1 << m) - 1;
            f >>>= m;
            c -= m;
          }
          if (c < 15) {
            f += z[a++] << c;
            c += 8;
            f += z[a++] << c;
            c += 8;
          }
          p = w[f & g];
          while (true) {
            m = p >>> 24;
            f >>>= m;
            c -= m;
            m = p >>> 16 & 255;
            if (m & 16) {
              v = p & 65535;
              m &= 15;
              if (c < m) {
                f += z[a++] << c;
                c += 8;
                if (c < m) {
                  f += z[a++] << c;
                  c += 8;
                }
              }
              v += f & (1 << m) - 1;
              if (v > l) {
                t.msg = "invalid distance too far back";
                E.mode = 30;
                break t;
              }
              f >>>= m;
              c -= m;
              m = n - s;
              if (v > m) {
                m = v - m;
                if (m > h && E.sane) {
                  t.msg = "invalid distance too far back";
                  E.mode = 30;
                  break t;
                }
                y = 0;
                x = _;
                if (d === 0) {
                  y += o - m;
                  if (m < k) {
                    k -= m;
                    do {
                      A[n++] = _[y++];
                    } while (--m);
                    y = n - v;
                    x = A;
                  }
                } else if (d < m) {
                  y += o + d - m;
                  m -= d;
                  if (m < k) {
                    k -= m;
                    do {
                      A[n++] = _[y++];
                    } while (--m);
                    y = 0;
                    if (d < k) {
                      m = d;
                      k -= m;
                      do {
                        A[n++] = _[y++];
                      } while (--m);
                      y = n - v;
                      x = A;
                    }
                  }
                } else {
                  y += d - m;
                  if (m < k) {
                    k -= m;
                    do {
                      A[n++] = _[y++];
                    } while (--m);
                    y = n - v;
                    x = A;
                  }
                }
                while (k > 2) {
                  A[n++] = x[y++];
                  A[n++] = x[y++];
                  A[n++] = x[y++];
                  k -= 3;
                }
                if (k) {
                  A[n++] = x[y++];
                  if (k > 1) {
                    A[n++] = x[y++];
                  }
                }
              } else {
                y = n - v;
                do {
                  A[n++] = A[y++];
                  A[n++] = A[y++];
                  A[n++] = A[y++];
                  k -= 3;
                } while (k > 2);
                if (k) {
                  A[n++] = A[y++];
                  if (k > 1) {
                    A[n++] = A[y++];
                  }
                }
              }
              break;
            }
            if (m & 64) {
              t.msg = "invalid distance code";
              E.mode = 30;
              break t;
            }
            p = w[(p & 65535) + (f & (1 << m) - 1)];
          }
        }
        break;
      }
    } while (a < i && n < r);
    k = c >> 3;
    a -= k;
    c -= k << 3;
    f &= (1 << c) - 1;
    t.next_in = a;
    t.next_out = n;
    t.avail_in = a < i ? i - a + 5 : 5 - (a - i);
    t.avail_out = n < r ? r - n + 257 : 257 - (n - r);
    E.hold = f;
    E.bits = c;
  }
  const le = 15;
  const oe = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  const he = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
  const de = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  const _e = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
  var fe = (t, e, a, i, n, s, r, l) => {
    const o = l.bits;
    let h;
    let d;
    let _;
    let f;
    let c;
    let u;
    let w = 0;
    let b = 0;
    let g = 0;
    let p = 0;
    let m = 0;
    let k = 0;
    let v = 0;
    let y = 0;
    let x = 0;
    let z = 0;
    let A = null;
    let E = 0;
    const R = new Uint16Array(16);
    const Z = new Uint16Array(16);
    let U;
    let S;
    let D;
    let O = null;
    let T = 0;
    for (w = 0; w <= le; w++) {
      R[w] = 0;
    }
    for (b = 0; b < i; b++) {
      R[e[a + b]]++;
    }
    m = o;
    p = le;
    for (; p >= 1 && R[p] === 0; p--);
    if (m > p) {
      m = p;
    }
    if (p === 0) {
      n[s++] = 20971520;
      n[s++] = 20971520;
      l.bits = 1;
      return 0;
    }
    for (g = 1; g < p && R[g] === 0; g++);
    if (m < g) {
      m = g;
    }
    y = 1;
    w = 1;
    for (; w <= le; w++) {
      y <<= 1;
      y -= R[w];
      if (y < 0) {
        return -1;
      }
    }
    if (y > 0 && (t === 0 || p !== 1)) {
      return -1;
    }
    Z[1] = 0;
    w = 1;
    for (; w < le; w++) {
      Z[w + 1] = Z[w] + R[w];
    }
    for (b = 0; b < i; b++) {
      if (e[a + b] !== 0) {
        r[Z[e[a + b]]++] = b;
      }
    }
    if (t === 0) {
      A = O = r;
      u = 19;
    } else if (t === 1) {
      A = oe;
      E -= 257;
      O = he;
      T -= 257;
      u = 256;
    } else {
      A = de;
      O = _e;
      u = -1;
    }
    z = 0;
    b = 0;
    w = g;
    c = s;
    k = m;
    v = 0;
    _ = -1;
    x = 1 << m;
    f = x - 1;
    if (t === 1 && x > 852 || t === 2 && x > 592) {
      return 1;
    }
    while (true) {
      U = w - v;
      if (r[b] < u) {
        S = 0;
        D = r[b];
      } else if (r[b] > u) {
        S = O[T + r[b]];
        D = A[E + r[b]];
      } else {
        S = 96;
        D = 0;
      }
      h = 1 << w - v;
      d = 1 << k;
      g = d;
      do {
        d -= h;
        n[c + (z >> v) + d] = U << 24 | S << 16 | D;
      } while (d !== 0);
      for (h = 1 << w - 1; z & h;) {
        h >>= 1;
      }
      if (h !== 0) {
        z &= h - 1;
        z += h;
      } else {
        z = 0;
      }
      b++;
      if (--R[w] === 0) {
        if (w === p) {
          break;
        }
        w = e[a + r[b]];
      }
      if (w > m && (z & f) !== _) {
        if (v === 0) {
          v = m;
        }
        c += g;
        k = w - v;
        y = 1 << k;
        while (k + v < p && (y -= R[k + v], !(y <= 0))) {
          k++;
          y <<= 1;
        }
        x += 1 << k;
        if (t === 1 && x > 852 || t === 2 && x > 592) {
          return 1;
        }
        _ = z & f;
        n[_] = m << 24 | k << 16 | c - s;
      }
    }
    if (z !== 0) {
      n[c + z] = w - v << 24 | 4194304;
    }
    l.bits = m;
    return 0;
  };
  const {
    Z_FINISH: ce,
    Z_BLOCK: ue,
    Z_TREES: we,
    Z_OK: be,
    Z_STREAM_END: ge,
    Z_NEED_DICT: pe,
    Z_STREAM_ERROR: me,
    Z_DATA_ERROR: ke,
    Z_MEM_ERROR: ve,
    Z_BUF_ERROR: ye,
    Z_DEFLATED: xe
  } = K;
  const ze = 12;
  const Ae = 30;
  const Ee = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
  function Re() {
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new Uint16Array(320);
    this.work = new Uint16Array(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  const Ze = t => {
    if (!t || !t.state) {
      return me;
    }
    const e = t.state;
    t.total_in = t.total_out = e.total = 0;
    t.msg = "";
    if (e.wrap) {
      t.adler = e.wrap & 1;
    }
    e.mode = 1;
    e.last = 0;
    e.havedict = 0;
    e.dmax = 32768;
    e.head = null;
    e.hold = 0;
    e.bits = 0;
    e.lencode = e.lendyn = new Int32Array(852);
    e.distcode = e.distdyn = new Int32Array(592);
    e.sane = 1;
    e.back = -1;
    return be;
  };
  const Ue = t => {
    if (!t || !t.state) {
      return me;
    }
    const e = t.state;
    e.wsize = 0;
    e.whave = 0;
    e.wnext = 0;
    return Ze(t);
  };
  const Se = (t, e) => {
    let a;
    if (!t || !t.state) {
      return me;
    }
    const i = t.state;
    if (e < 0) {
      a = 0;
      e = -e;
    } else {
      a = 1 + (e >> 4);
      if (e < 48) {
        e &= 15;
      }
    }
    if (e && (e < 8 || e > 15)) {
      return me;
    } else {
      if (i.window !== null && i.wbits !== e) {
        i.window = null;
      }
      i.wrap = a;
      i.wbits = e;
      return Ue(t);
    }
  };
  const De = (t, e) => {
    if (!t) {
      return me;
    }
    const a = new Re();
    t.state = a;
    a.window = null;
    const i = Se(t, e);
    if (i !== be) {
      t.state = null;
    }
    return i;
  };
  let Oe;
  let Te;
  let Ie = true;
  const Fe = t => {
    if (Ie) {
      Oe = new Int32Array(512);
      Te = new Int32Array(32);
      let e = 0;
      while (e < 144) {
        t.lens[e++] = 8;
      }
      while (e < 256) {
        t.lens[e++] = 9;
      }
      while (e < 280) {
        t.lens[e++] = 7;
      }
      while (e < 288) {
        t.lens[e++] = 8;
      }
      fe(1, t.lens, 0, 288, Oe, 0, t.work, {
        bits: 9
      });
      e = 0;
      while (e < 32) {
        t.lens[e++] = 5;
      }
      fe(2, t.lens, 0, 32, Te, 0, t.work, {
        bits: 5
      });
      Ie = false;
    }
    t.lencode = Oe;
    t.lenbits = 9;
    t.distcode = Te;
    t.distbits = 5;
  };
  const Le = (t, e, a, i) => {
    let n;
    const s = t.state;
    if (s.window === null) {
      s.wsize = 1 << s.wbits;
      s.wnext = 0;
      s.whave = 0;
      s.window = new Uint8Array(s.wsize);
    }
    if (i >= s.wsize) {
      s.window.set(e.subarray(a - s.wsize, a), 0);
      s.wnext = 0;
      s.whave = s.wsize;
    } else {
      n = s.wsize - s.wnext;
      if (n > i) {
        n = i;
      }
      s.window.set(e.subarray(a - i, a - i + n), s.wnext);
      if (i -= n) {
        s.window.set(e.subarray(a - i, a), 0);
        s.wnext = i;
        s.whave = s.wsize;
      } else {
        s.wnext += n;
        if (s.wnext === s.wsize) {
          s.wnext = 0;
        }
        if (s.whave < s.wsize) {
          s.whave += n;
        }
      }
    }
    return 0;
  };
  var Ne = {
    inflateReset: Ue,
    inflateReset2: Se,
    inflateResetKeep: Ze,
    inflateInit: t => De(t, 15),
    inflateInit2: De,
    inflate: (t, e) => {
      let a;
      let i;
      let n;
      let s;
      let r;
      let l;
      let o;
      let h;
      let d;
      let _;
      let f;
      let c;
      let u;
      let w;
      let b;
      let g;
      let p;
      let m;
      let k;
      let v;
      let y;
      let x;
      let z = 0;
      const A = new Uint8Array(4);
      let E;
      let R;
      const Z = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (!t || !t.state || !t.output || !t.input && t.avail_in !== 0) {
        return me;
      }
      a = t.state;
      if (a.mode === ze) {
        a.mode = 13;
      }
      r = t.next_out;
      n = t.output;
      o = t.avail_out;
      s = t.next_in;
      i = t.input;
      l = t.avail_in;
      h = a.hold;
      d = a.bits;
      _ = l;
      f = o;
      x = be;
      t: while (true) {
        switch (a.mode) {
          case 1:
            if (a.wrap === 0) {
              a.mode = 13;
              break;
            }
            while (d < 16) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if (a.wrap & 2 && h === 35615) {
              a.check = 0;
              A[0] = h & 255;
              A[1] = h >>> 8 & 255;
              a.check = H(a.check, A, 2, 0);
              h = 0;
              d = 0;
              a.mode = 2;
              break;
            }
            a.flags = 0;
            if (a.head) {
              a.head.done = false;
            }
            if (!(a.wrap & 1) || (((h & 255) << 8) + (h >> 8)) % 31) {
              t.msg = "incorrect header check";
              a.mode = Ae;
              break;
            }
            if ((h & 15) !== xe) {
              t.msg = "unknown compression method";
              a.mode = Ae;
              break;
            }
            h >>>= 4;
            d -= 4;
            y = 8 + (h & 15);
            if (a.wbits === 0) {
              a.wbits = y;
            } else if (y > a.wbits) {
              t.msg = "invalid window size";
              a.mode = Ae;
              break;
            }
            a.dmax = 1 << a.wbits;
            t.adler = a.check = 1;
            a.mode = h & 512 ? 10 : ze;
            h = 0;
            d = 0;
            break;
          case 2:
            while (d < 16) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            a.flags = h;
            if ((a.flags & 255) !== xe) {
              t.msg = "unknown compression method";
              a.mode = Ae;
              break;
            }
            if (a.flags & 57344) {
              t.msg = "unknown header flags set";
              a.mode = Ae;
              break;
            }
            if (a.head) {
              a.head.text = h >> 8 & 1;
            }
            if (a.flags & 512) {
              A[0] = h & 255;
              A[1] = h >>> 8 & 255;
              a.check = H(a.check, A, 2, 0);
            }
            h = 0;
            d = 0;
            a.mode = 3;
          case 3:
            while (d < 32) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if (a.head) {
              a.head.time = h;
            }
            if (a.flags & 512) {
              A[0] = h & 255;
              A[1] = h >>> 8 & 255;
              A[2] = h >>> 16 & 255;
              A[3] = h >>> 24 & 255;
              a.check = H(a.check, A, 4, 0);
            }
            h = 0;
            d = 0;
            a.mode = 4;
          case 4:
            while (d < 16) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if (a.head) {
              a.head.xflags = h & 255;
              a.head.os = h >> 8;
            }
            if (a.flags & 512) {
              A[0] = h & 255;
              A[1] = h >>> 8 & 255;
              a.check = H(a.check, A, 2, 0);
            }
            h = 0;
            d = 0;
            a.mode = 5;
          case 5:
            if (a.flags & 1024) {
              while (d < 16) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              a.length = h;
              if (a.head) {
                a.head.extra_len = h;
              }
              if (a.flags & 512) {
                A[0] = h & 255;
                A[1] = h >>> 8 & 255;
                a.check = H(a.check, A, 2, 0);
              }
              h = 0;
              d = 0;
            } else if (a.head) {
              a.head.extra = null;
            }
            a.mode = 6;
          case 6:
            if (a.flags & 1024 && (c = a.length, c > l && (c = l), c && (a.head && (y = a.head.extra_len - a.length, a.head.extra ||= new Uint8Array(a.head.extra_len), a.head.extra.set(i.subarray(s, s + c), y)), a.flags & 512 && (a.check = H(a.check, i, c, s)), l -= c, s += c, a.length -= c), a.length)) {
              break t;
            }
            a.length = 0;
            a.mode = 7;
          case 7:
            if (a.flags & 2048) {
              if (l === 0) {
                break t;
              }
              c = 0;
              do {
                y = i[s + c++];
                if (a.head && y && a.length < 65536) {
                  a.head.name += String.fromCharCode(y);
                }
              } while (y && c < l);
              if (a.flags & 512) {
                a.check = H(a.check, i, c, s);
              }
              l -= c;
              s += c;
              if (y) {
                break t;
              }
            } else if (a.head) {
              a.head.name = null;
            }
            a.length = 0;
            a.mode = 8;
          case 8:
            if (a.flags & 4096) {
              if (l === 0) {
                break t;
              }
              c = 0;
              do {
                y = i[s + c++];
                if (a.head && y && a.length < 65536) {
                  a.head.comment += String.fromCharCode(y);
                }
              } while (y && c < l);
              if (a.flags & 512) {
                a.check = H(a.check, i, c, s);
              }
              l -= c;
              s += c;
              if (y) {
                break t;
              }
            } else if (a.head) {
              a.head.comment = null;
            }
            a.mode = 9;
          case 9:
            if (a.flags & 512) {
              while (d < 16) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              if (h !== (a.check & 65535)) {
                t.msg = "header crc mismatch";
                a.mode = Ae;
                break;
              }
              h = 0;
              d = 0;
            }
            if (a.head) {
              a.head.hcrc = a.flags >> 9 & 1;
              a.head.done = true;
            }
            t.adler = a.check = 0;
            a.mode = ze;
            break;
          case 10:
            while (d < 32) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            t.adler = a.check = Ee(h);
            h = 0;
            d = 0;
            a.mode = 11;
          case 11:
            if (a.havedict === 0) {
              t.next_out = r;
              t.avail_out = o;
              t.next_in = s;
              t.avail_in = l;
              a.hold = h;
              a.bits = d;
              return pe;
            }
            t.adler = a.check = 1;
            a.mode = ze;
          case ze:
            if (e === ue || e === we) {
              break t;
            }
          case 13:
            if (a.last) {
              h >>>= d & 7;
              d -= d & 7;
              a.mode = 27;
              break;
            }
            while (d < 3) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            a.last = h & 1;
            h >>>= 1;
            d -= 1;
            switch (h & 3) {
              case 0:
                a.mode = 14;
                break;
              case 1:
                Fe(a);
                a.mode = 20;
                if (e === we) {
                  h >>>= 2;
                  d -= 2;
                  break t;
                }
                break;
              case 2:
                a.mode = 17;
                break;
              case 3:
                t.msg = "invalid block type";
                a.mode = Ae;
            }
            h >>>= 2;
            d -= 2;
            break;
          case 14:
            h >>>= d & 7;
            d -= d & 7;
            while (d < 32) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if ((h & 65535) != (h >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths";
              a.mode = Ae;
              break;
            }
            a.length = h & 65535;
            h = 0;
            d = 0;
            a.mode = 15;
            if (e === we) {
              break t;
            }
          case 15:
            a.mode = 16;
          case 16:
            c = a.length;
            if (c) {
              if (c > l) {
                c = l;
              }
              if (c > o) {
                c = o;
              }
              if (c === 0) {
                break t;
              }
              n.set(i.subarray(s, s + c), r);
              l -= c;
              s += c;
              o -= c;
              r += c;
              a.length -= c;
              break;
            }
            a.mode = ze;
            break;
          case 17:
            while (d < 14) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            a.nlen = 257 + (h & 31);
            h >>>= 5;
            d -= 5;
            a.ndist = 1 + (h & 31);
            h >>>= 5;
            d -= 5;
            a.ncode = 4 + (h & 15);
            h >>>= 4;
            d -= 4;
            if (a.nlen > 286 || a.ndist > 30) {
              t.msg = "too many length or distance symbols";
              a.mode = Ae;
              break;
            }
            a.have = 0;
            a.mode = 18;
          case 18:
            while (a.have < a.ncode) {
              while (d < 3) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              a.lens[Z[a.have++]] = h & 7;
              h >>>= 3;
              d -= 3;
            }
            while (a.have < 19) {
              a.lens[Z[a.have++]] = 0;
            }
            a.lencode = a.lendyn;
            a.lenbits = 7;
            E = {
              bits: a.lenbits
            };
            x = fe(0, a.lens, 0, 19, a.lencode, 0, a.work, E);
            a.lenbits = E.bits;
            if (x) {
              t.msg = "invalid code lengths set";
              a.mode = Ae;
              break;
            }
            a.have = 0;
            a.mode = 19;
          case 19:
            while (a.have < a.nlen + a.ndist) {
              while (z = a.lencode[h & (1 << a.lenbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = z & 65535, !(b <= d)) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              if (p < 16) {
                h >>>= b;
                d -= b;
                a.lens[a.have++] = p;
              } else {
                if (p === 16) {
                  for (R = b + 2; d < R;) {
                    if (l === 0) {
                      break t;
                    }
                    l--;
                    h += i[s++] << d;
                    d += 8;
                  }
                  h >>>= b;
                  d -= b;
                  if (a.have === 0) {
                    t.msg = "invalid bit length repeat";
                    a.mode = Ae;
                    break;
                  }
                  y = a.lens[a.have - 1];
                  c = 3 + (h & 3);
                  h >>>= 2;
                  d -= 2;
                } else if (p === 17) {
                  for (R = b + 3; d < R;) {
                    if (l === 0) {
                      break t;
                    }
                    l--;
                    h += i[s++] << d;
                    d += 8;
                  }
                  h >>>= b;
                  d -= b;
                  y = 0;
                  c = 3 + (h & 7);
                  h >>>= 3;
                  d -= 3;
                } else {
                  for (R = b + 7; d < R;) {
                    if (l === 0) {
                      break t;
                    }
                    l--;
                    h += i[s++] << d;
                    d += 8;
                  }
                  h >>>= b;
                  d -= b;
                  y = 0;
                  c = 11 + (h & 127);
                  h >>>= 7;
                  d -= 7;
                }
                if (a.have + c > a.nlen + a.ndist) {
                  t.msg = "invalid bit length repeat";
                  a.mode = Ae;
                  break;
                }
                while (c--) {
                  a.lens[a.have++] = y;
                }
              }
            }
            if (a.mode === Ae) {
              break;
            }
            if (a.lens[256] === 0) {
              t.msg = "invalid code -- missing end-of-block";
              a.mode = Ae;
              break;
            }
            a.lenbits = 9;
            E = {
              bits: a.lenbits
            };
            x = fe(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, E);
            a.lenbits = E.bits;
            if (x) {
              t.msg = "invalid literal/lengths set";
              a.mode = Ae;
              break;
            }
            a.distbits = 6;
            a.distcode = a.distdyn;
            E = {
              bits: a.distbits
            };
            x = fe(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, E);
            a.distbits = E.bits;
            if (x) {
              t.msg = "invalid distances set";
              a.mode = Ae;
              break;
            }
            a.mode = 20;
            if (e === we) {
              break t;
            }
          case 20:
            a.mode = 21;
          case 21:
            if (l >= 6 && o >= 258) {
              t.next_out = r;
              t.avail_out = o;
              t.next_in = s;
              t.avail_in = l;
              a.hold = h;
              a.bits = d;
              re(t, f);
              r = t.next_out;
              n = t.output;
              o = t.avail_out;
              s = t.next_in;
              i = t.input;
              l = t.avail_in;
              h = a.hold;
              d = a.bits;
              if (a.mode === ze) {
                a.back = -1;
              }
              break;
            }
            for (a.back = 0; z = a.lencode[h & (1 << a.lenbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = z & 65535, !(b <= d);) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if (g && !(g & 240)) {
              m = b;
              k = g;
              v = p;
              while (z = a.lencode[v + ((h & (1 << m + k) - 1) >> m)], b = z >>> 24, g = z >>> 16 & 255, p = z & 65535, !(m + b <= d)) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              h >>>= m;
              d -= m;
              a.back += m;
            }
            h >>>= b;
            d -= b;
            a.back += b;
            a.length = p;
            if (g === 0) {
              a.mode = 26;
              break;
            }
            if (g & 32) {
              a.back = -1;
              a.mode = ze;
              break;
            }
            if (g & 64) {
              t.msg = "invalid literal/length code";
              a.mode = Ae;
              break;
            }
            a.extra = g & 15;
            a.mode = 22;
          case 22:
            if (a.extra) {
              for (R = a.extra; d < R;) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              a.length += h & (1 << a.extra) - 1;
              h >>>= a.extra;
              d -= a.extra;
              a.back += a.extra;
            }
            a.was = a.length;
            a.mode = 23;
          case 23:
            while (z = a.distcode[h & (1 << a.distbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = z & 65535, !(b <= d)) {
              if (l === 0) {
                break t;
              }
              l--;
              h += i[s++] << d;
              d += 8;
            }
            if (!(g & 240)) {
              m = b;
              k = g;
              v = p;
              while (z = a.distcode[v + ((h & (1 << m + k) - 1) >> m)], b = z >>> 24, g = z >>> 16 & 255, p = z & 65535, !(m + b <= d)) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              h >>>= m;
              d -= m;
              a.back += m;
            }
            h >>>= b;
            d -= b;
            a.back += b;
            if (g & 64) {
              t.msg = "invalid distance code";
              a.mode = Ae;
              break;
            }
            a.offset = p;
            a.extra = g & 15;
            a.mode = 24;
          case 24:
            if (a.extra) {
              for (R = a.extra; d < R;) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              a.offset += h & (1 << a.extra) - 1;
              h >>>= a.extra;
              d -= a.extra;
              a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              t.msg = "invalid distance too far back";
              a.mode = Ae;
              break;
            }
            a.mode = 25;
          case 25:
            if (o === 0) {
              break t;
            }
            c = f - o;
            if (a.offset > c) {
              c = a.offset - c;
              if (c > a.whave && a.sane) {
                t.msg = "invalid distance too far back";
                a.mode = Ae;
                break;
              }
              if (c > a.wnext) {
                c -= a.wnext;
                u = a.wsize - c;
              } else {
                u = a.wnext - c;
              }
              if (c > a.length) {
                c = a.length;
              }
              w = a.window;
            } else {
              w = n;
              u = r - a.offset;
              c = a.length;
            }
            if (c > o) {
              c = o;
            }
            o -= c;
            a.length -= c;
            do {
              n[r++] = w[u++];
            } while (--c);
            if (a.length === 0) {
              a.mode = 21;
            }
            break;
          case 26:
            if (o === 0) {
              break t;
            }
            n[r++] = a.length;
            o--;
            a.mode = 21;
            break;
          case 27:
            if (a.wrap) {
              while (d < 32) {
                if (l === 0) {
                  break t;
                }
                l--;
                h |= i[s++] << d;
                d += 8;
              }
              f -= o;
              t.total_out += f;
              a.total += f;
              if (f) {
                t.adler = a.check = a.flags ? H(a.check, n, f, r - f) : C(a.check, n, f, r - f);
              }
              f = o;
              if ((a.flags ? h : Ee(h)) !== a.check) {
                t.msg = "incorrect data check";
                a.mode = Ae;
                break;
              }
              h = 0;
              d = 0;
            }
            a.mode = 28;
          case 28:
            if (a.wrap && a.flags) {
              while (d < 32) {
                if (l === 0) {
                  break t;
                }
                l--;
                h += i[s++] << d;
                d += 8;
              }
              if (h !== (a.total & -1)) {
                t.msg = "incorrect length check";
                a.mode = Ae;
                break;
              }
              h = 0;
              d = 0;
            }
            a.mode = 29;
          case 29:
            x = ge;
            break t;
          case Ae:
            x = ke;
            break t;
          case 31:
            return ve;
          default:
            return me;
        }
      }
      t.next_out = r;
      t.avail_out = o;
      t.next_in = s;
      t.avail_in = l;
      a.hold = h;
      a.bits = d;
      if (a.wsize || f !== t.avail_out && a.mode < Ae && (a.mode < 27 || e !== ce)) {
        Le(t, t.output, t.next_out, f - t.avail_out);
      }
      _ -= t.avail_in;
      f -= t.avail_out;
      t.total_in += _;
      t.total_out += f;
      a.total += f;
      if (a.wrap && f) {
        t.adler = a.check = a.flags ? H(a.check, n, f, t.next_out - f) : C(a.check, n, f, t.next_out - f);
      }
      t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === ze ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0);
      if ((_ === 0 && f === 0 || e === ce) && x === be) {
        x = ye;
      }
      return x;
    },
    inflateEnd: t => {
      if (!t || !t.state) {
        return me;
      }
      let e = t.state;
      e.window &&= null;
      t.state = null;
      return be;
    },
    inflateGetHeader: (t, e) => {
      if (!t || !t.state) {
        return me;
      }
      const a = t.state;
      if (a.wrap & 2) {
        a.head = e;
        e.done = false;
        return be;
      } else {
        return me;
      }
    },
    inflateSetDictionary: (t, e) => {
      const a = e.length;
      let i;
      let n;
      let s;
      if (t && t.state) {
        i = t.state;
        if (i.wrap !== 0 && i.mode !== 11) {
          return me;
        } else if (i.mode === 11 && (n = 1, n = C(n, e, a, 0), n !== i.check)) {
          return ke;
        } else {
          s = Le(t, e, a, a);
          if (s) {
            i.mode = 31;
            return ve;
          } else {
            i.havedict = 1;
            return be;
          }
        }
      } else {
        return me;
      }
    },
    inflateInfo: "pako inflate (from Nodeca project)"
  };
  function Be() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  const Ce = Object.prototype.toString;
  const {
    Z_NO_FLUSH: Me,
    Z_FINISH: He,
    Z_OK: je,
    Z_STREAM_END: Ke,
    Z_NEED_DICT: Pe,
    Z_STREAM_ERROR: Ye,
    Z_DATA_ERROR: Ge,
    Z_MEM_ERROR: Xe
  } = K;
  function We(t) {
    this.options = Ct({
      chunkSize: 65536,
      windowBits: 15,
      to: ""
    }, t || {});
    const e = this.options;
    if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
      e.windowBits = -e.windowBits;
      if (e.windowBits === 0) {
        e.windowBits = -15;
      }
    }
    if (!!(e.windowBits >= 0) && !!(e.windowBits < 16) && (!t || !t.windowBits)) {
      e.windowBits += 32;
    }
    if (e.windowBits > 15 && e.windowBits < 48) {
      if (!(e.windowBits & 15)) {
        e.windowBits |= 15;
      }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new Gt();
    this.strm.avail_out = 0;
    let a = Ne.inflateInit2(this.strm, e.windowBits);
    if (a !== je) {
      throw new Error(j[a]);
    }
    this.header = new Be();
    Ne.inflateGetHeader(this.strm, this.header);
    if (e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Kt(e.dictionary) : Ce.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (a = Ne.inflateSetDictionary(this.strm, e.dictionary), a !== je))) {
      throw new Error(j[a]);
    }
  }
  function qe(t, e) {
    const a = new We(e);
    a.push(t);
    if (a.err) {
      throw a.msg || j[a.err];
    }
    return a.result;
  }
  We.prototype.push = function (t, e) {
    const a = this.strm;
    const i = this.options.chunkSize;
    const n = this.options.dictionary;
    let s;
    let r;
    let l;
    if (this.ended) {
      return false;
    }
    r = e === ~~e ? e : e === true ? He : Me;
    if (Ce.call(t) === "[object ArrayBuffer]") {
      a.input = new Uint8Array(t);
    } else {
      a.input = t;
    }
    a.next_in = 0;
    a.avail_in = a.input.length;
    while (true) {
      if (a.avail_out === 0) {
        a.output = new Uint8Array(i);
        a.next_out = 0;
        a.avail_out = i;
      }
      s = Ne.inflate(a, r);
      if (s === Pe && n) {
        s = Ne.inflateSetDictionary(a, n);
        if (s === je) {
          s = Ne.inflate(a, r);
        } else if (s === Ge) {
          s = Pe;
        }
      }
      while (a.avail_in > 0 && s === Ke && a.state.wrap > 0 && t[a.next_in] !== 0) {
        Ne.inflateReset(a);
        s = Ne.inflate(a, r);
      }
      switch (s) {
        case Ye:
        case Ge:
        case Pe:
        case Xe:
          this.onEnd(s);
          this.ended = true;
          return false;
      }
      l = a.avail_out;
      if (a.next_out && (a.avail_out === 0 || s === Ke)) {
        if (this.options.to === "string") {
          let t = Yt(a.output, a.next_out);
          let e = a.next_out - t;
          let n = Pt(a.output, t);
          a.next_out = e;
          a.avail_out = i - e;
          if (e) {
            a.output.set(a.output.subarray(t, t + e), 0);
          }
          this.onData(n);
        } else {
          this.onData(a.output.length === a.next_out ? a.output : a.output.subarray(0, a.next_out));
        }
      }
      if (s !== je || l !== 0) {
        if (s === Ke) {
          s = Ne.inflateEnd(this.strm);
          this.onEnd(s);
          this.ended = true;
          return true;
        }
        if (a.avail_in === 0) {
          break;
        }
      }
    }
    return true;
  };
  We.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  We.prototype.onEnd = function (t) {
    if (t === je) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = Mt(this.chunks);
      }
    }
    this.chunks = [];
    this.err = t;
    this.msg = this.strm.msg;
  };
  var Je = {
    Inflate: We,
    inflate: qe,
    inflateRaw: function (t, e) {
      (e = e || {}).raw = true;
      return qe(t, e);
    },
    ungzip: qe,
    constants: K
  };
  const {
    Deflate: Qe,
    deflate: Ve,
    deflateRaw: $e,
    gzip: ta
  } = se;
  const {
    Inflate: ea,
    inflate: aa,
    inflateRaw: ia,
    ungzip: na
  } = Je;
  var sa = Qe;
  var ra = Ve;
  var la = $e;
  var oa = ta;
  var ha = ea;
  var da = aa;
  var _a = ia;
  var fa = na;
  var ca = K;
  var ua = {
    Deflate: sa,
    deflate: ra,
    deflateRaw: la,
    gzip: oa,
    Inflate: ha,
    inflate: da,
    inflateRaw: _a,
    ungzip: fa,
    constants: ca
  };
  t.Deflate = sa;
  t.Inflate = ha;
  t.constants = ca;
  t.default = ua;
  t.deflate = ra;
  t.deflateRaw = la;
  t.gzip = oa;
  t.inflate = da;
  t.inflateRaw = _a;
  t.ungzip = fa;
  Object.defineProperty(t, "__esModule", {
    value: true
  });
});