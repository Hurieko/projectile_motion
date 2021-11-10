/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */

// Derived from http://www.quirksmode.org/js/detect.html by Peter-Paul Koch.
// License terms at http://www.quirksmode.org/about/copyright.html

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */

/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

var requirejs, require, define;
(function (e) {
    function h(e, t) {
        return f.call(e, t);
    }
    function p(e, t) {
        var n,
            r,
            i,
            s,
            o,
            a,
            f,
            l,
            h,
            p,
            d,
            v = t && t.split("/"),
            m = u.map,
            g = (m && m["*"]) || {};
        if (e && e.charAt(0) === ".")
            if (t) {
                (v = v.slice(0, v.length - 1)), (e = e.split("/")), (o = e.length - 1), u.nodeIdCompat && c.test(e[o]) && (e[o] = e[o].replace(c, "")), (e = v.concat(e));
                for (h = 0; h < e.length; h += 1) {
                    d = e[h];
                    if (d === ".") e.splice(h, 1), (h -= 1);
                    else if (d === "..") {
                        if (h === 1 && (e[2] === ".." || e[0] === "..")) break;
                        h > 0 && (e.splice(h - 1, 2), (h -= 2));
                    }
                }
                e = e.join("/");
            } else e.indexOf("./") === 0 && (e = e.substring(2));
        if ((v || g) && m) {
            n = e.split("/");
            for (h = n.length; h > 0; h -= 1) {
                r = n.slice(0, h).join("/");
                if (v)
                    for (p = v.length; p > 0; p -= 1) {
                        i = m[v.slice(0, p).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                (s = i), (a = h);
                                break;
                            }
                        }
                    }
                if (s) break;
                !f && g && g[r] && ((f = g[r]), (l = h));
            }
            !s && f && ((s = f), (a = l)), s && (n.splice(0, a, s), (e = n.join("/")));
        }
        return e;
    }
    function d(t, r) {
        return function () {
            return n.apply(e, l.call(arguments, 0).concat([t, r]));
        };
    }
    function v(e) {
        return function (t) {
            return p(t, e);
        };
    }
    function m(e) {
        return function (t) {
            s[e] = t;
        };
    }
    function g(n) {
        if (h(o, n)) {
            var r = o[n];
            delete o[n], (a[n] = !0), t.apply(e, r);
        }
        if (!h(s, n) && !h(a, n)) throw new Error("No " + n);
        return s[n];
    }
    function y(e) {
        var t,
            n = e ? e.indexOf("!") : -1;
        return n > -1 && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
    }
    function b(e) {
        return function () {
            return (u && u.config && u.config[e]) || {};
        };
    }
    var t,
        n,
        r,
        i,
        s = {},
        o = {},
        u = {},
        a = {},
        f = Object.prototype.hasOwnProperty,
        l = [].slice,
        c = /\.js$/;
    (r = function (e, t) {
        var n,
            r = y(e),
            i = r[0];
        return (
            (e = r[1]),
            i && ((i = p(i, t)), (n = g(i))),
            i ? (n && n.normalize ? (e = n.normalize(e, v(t))) : (e = p(e, t))) : ((e = p(e, t)), (r = y(e)), (i = r[0]), (e = r[1]), i && (n = g(i))),
            { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
        );
    }),
        (i = {
            require: function (e) {
                return d(e);
            },
            exports: function (e) {
                var t = s[e];
                return typeof t != "undefined" ? t : (s[e] = {});
            },
            module: function (e) {
                return { id: e, uri: "", exports: s[e], config: b(e) };
            },
        }),
        (t = function (t, n, u, f) {
            var l,
                c,
                p,
                v,
                y,
                b = [],
                w = typeof u,
                E;
            f = f || t;
            if (w === "undefined" || w === "function") {
                n = !n.length && u.length ? ["require", "exports", "module"] : n;
                for (y = 0; y < n.length; y += 1) {
                    (v = r(n[y], f)), (c = v.f);
                    if (c === "require") b[y] = i.require(t);
                    else if (c === "exports") (b[y] = i.exports(t)), (E = !0);
                    else if (c === "module") l = b[y] = i.module(t);
                    else if (h(s, c) || h(o, c) || h(a, c)) b[y] = g(c);
                    else {
                        if (!v.p) throw new Error(t + " missing " + c);
                        v.p.load(v.n, d(f, !0), m(c), {}), (b[y] = s[c]);
                    }
                }
                p = u ? u.apply(s[t], b) : undefined;
                if (t)
                    if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                    else if (p !== e || !E) s[t] = p;
            } else t && (s[t] = u);
        }),
        (requirejs = require = n = function (s, o, a, f, l) {
            if (typeof s == "string") return i[s] ? i[s](o) : g(r(s, o).f);
            if (!s.splice) {
                (u = s), u.deps && n(u.deps, u.callback);
                if (!o) return;
                o.splice ? ((s = o), (o = a), (a = null)) : (s = e);
            }
            return (
                (o = o || function () {}),
                typeof a == "function" && ((a = f), (f = l)),
                f
                    ? t(e, s, o, a)
                    : setTimeout(function () {
                          t(e, s, o, a);
                      }, 4),
                n
            );
        }),
        (n.config = function (e) {
            return n(e);
        }),
        (requirejs._defined = s),
        (define = function (e, t, n) {
            t.splice || ((n = t), (t = [])), !h(s, e) && !h(o, e) && (o[e] = [e, t, n]);
        }),
        (define.amd = { jQuery: !0 });
})(),
    define("../../../bower_components/almond/almond", function () {}),
    (function (e, t) {
        typeof module == "object" && typeof module.exports == "object"
            ? (module.exports = e.document
                  ? t(e, !0)
                  : function (e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return t(e);
                    })
            : t(e);
    })(typeof window != "undefined" ? window : this, function (window, noGlobal) {
        function isArraylike(e) {
            var t = e.length,
                n = jQuery.type(e);
            return n === "function" || jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || (typeof t == "number" && t > 0 && t - 1 in e);
        }
        function winnow(e, t, n) {
            if (jQuery.isFunction(t))
                return jQuery.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n;
                });
            if (t.nodeType)
                return jQuery.grep(e, function (e) {
                    return (e === t) !== n;
                });
            if (typeof t == "string") {
                if (risSimple.test(t)) return jQuery.filter(t, e, n);
                t = jQuery.filter(t, e);
            }
            return jQuery.grep(e, function (e) {
                return indexOf.call(t, e) >= 0 !== n;
            });
        }
        function sibling(e, t) {
            while ((e = e[t]) && e.nodeType !== 1);
            return e;
        }
        function createOptions(e) {
            var t = (optionsCache[e] = {});
            return (
                jQuery.each(e.match(rnotwhite) || [], function (e, n) {
                    t[n] = !0;
                }),
                t
            );
        }
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready();
        }
        function Data() {
            Object.defineProperty((this.cache = {}), 0, {
                get: function () {
                    return {};
                },
            }),
                (this.expando = jQuery.expando + Math.random());
        }
        function dataAttr(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                (r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase()), (n = e.getAttribute(r));
                if (typeof n == "string") {
                    try {
                        n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? jQuery.parseJSON(n) : n;
                    } catch (i) {}
                    data_user.set(e, t, n);
                } else n = undefined;
            }
            return n;
        }
        function returnTrue() {
            return !0;
        }
        function returnFalse() {
            return !1;
        }
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (e) {}
        }
        function manipulationTarget(e, t) {
            return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
        }
        function disableScript(e) {
            return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
        }
        function restoreScript(e) {
            var t = rscriptTypeMasked.exec(e.type);
            return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
        }
        function setGlobalEval(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"));
        }
        function cloneCopyEvent(e, t) {
            var n, r, i, s, o, u, a, f;
            if (t.nodeType !== 1) return;
            if (data_priv.hasData(e)) {
                (s = data_priv.access(e)), (o = data_priv.set(t, s)), (f = s.events);
                if (f) {
                    delete o.handle, (o.events = {});
                    for (i in f) for (n = 0, r = f[i].length; n < r; n++) jQuery.event.add(t, i, f[i][n]);
                }
            }
            data_user.hasData(e) && ((u = data_user.access(e)), (a = jQuery.extend({}, u)), data_user.set(t, a));
        }
        function getAll(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return t === undefined || (t && jQuery.nodeName(e, t)) ? jQuery.merge([e], n) : n;
        }
        function fixInput(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && rcheckableType.test(e.type)) t.checked = e.checked;
            else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue;
        }
        function actualDisplay(e, t) {
            var n = jQuery(t.createElement(e)).appendTo(t.body),
                r = window.getDefaultComputedStyle ? window.getDefaultComputedStyle(n[0]).display : jQuery.css(n[0], "display");
            return n.detach(), r;
        }
        function defaultDisplay(e) {
            var t = document,
                n = elemdisplay[e];
            if (!n) {
                n = actualDisplay(e, t);
                if (n === "none" || !n)
                    (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)), (t = iframe[0].contentDocument), t.write(), t.close(), (n = actualDisplay(e, t)), iframe.detach();
                elemdisplay[e] = n;
            }
            return n;
        }
        function curCSS(e, t, n) {
            var r,
                i,
                s,
                o,
                u = e.style;
            return (
                (n = n || getStyles(e)),
                n && (o = n.getPropertyValue(t) || n[t]),
                n &&
                    (o === "" && !jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)),
                    rnumnonpx.test(o) && rmargin.test(t) && ((r = u.width), (i = u.minWidth), (s = u.maxWidth), (u.minWidth = u.maxWidth = u.width = o), (o = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = s))),
                o !== undefined ? o + "" : o
            );
        }
        function addGetHookIf(e, t) {
            return {
                get: function () {
                    if (e()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = t).apply(this, arguments);
                },
            };
        }
        function vendorPropName(e, t) {
            if (t in e) return t;
            var n = t[0].toUpperCase() + t.slice(1),
                r = t,
                i = cssPrefixes.length;
            while (i--) {
                t = cssPrefixes[i] + n;
                if (t in e) return t;
            }
            return r;
        }
        function setPositiveNumber(e, t, n) {
            var r = rnumsplit.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
        }
        function augmentWidthOrHeight(e, t, n, r, i) {
            var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                o = 0;
            for (; s < 4; s += 2)
                n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)),
                    r
                        ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)))
                        : ((o += jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
            return o;
        }
        function getWidthOrHeight(e, t, n) {
            var r = !0,
                i = t === "width" ? e.offsetWidth : e.offsetHeight,
                s = getStyles(e),
                o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
            if (i <= 0 || i == null) {
                i = curCSS(e, t, s);
                if (i < 0 || i == null) i = e.style[t];
                if (rnumnonpx.test(i)) return i;
                (r = o && (support.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
            }
            return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px";
        }
        function showHide(e, t) {
            var n,
                r,
                i,
                s = [],
                o = 0,
                u = e.length;
            for (; o < u; o++) {
                r = e[o];
                if (!r.style) continue;
                (s[o] = data_priv.get(r, "olddisplay")),
                    (n = r.style.display),
                    t
                        ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName))))
                        : s[o] || ((i = isHidden(r)), ((n && n !== "none") || !i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display")));
            }
            for (o = 0; o < u; o++) {
                r = e[o];
                if (!r.style) continue;
                if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none";
            }
            return e;
        }
        function Tween(e, t, n, r, i) {
            return new Tween.prototype.init(e, t, n, r, i);
        }
        function createFxNow() {
            return (
                setTimeout(function () {
                    fxNow = undefined;
                }),
                (fxNow = jQuery.now())
            );
        }
        function genFx(e, t) {
            var n,
                r = 0,
                i = { height: e };
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) (n = cssExpand[r]), (i["margin" + n] = i["padding" + n] = e);
            return t && (i.opacity = i.width = e), i;
        }
        function createTween(e, t, n) {
            var r,
                i = (tweeners[t] || []).concat(tweeners["*"]),
                s = 0,
                o = i.length;
            for (; s < o; s++) if ((r = i[s].call(n, t, e))) return r;
        }
        function defaultPrefilter(e, t, n) {
            var r,
                i,
                s,
                o,
                u,
                a,
                f,
                l = this,
                c = {},
                h = e.style,
                p = e.nodeType && isHidden(e),
                d = data_priv.get(e, "fxshow");
            n.queue ||
                ((u = jQuery._queueHooks(e, "fx")),
                u.unqueued == null &&
                    ((u.unqueued = 0),
                    (a = u.empty.fire),
                    (u.empty.fire = function () {
                        u.unqueued || a();
                    })),
                u.unqueued++,
                l.always(function () {
                    l.always(function () {
                        u.unqueued--, jQuery.queue(e, "fx").length || u.empty.fire();
                    });
                })),
                e.nodeType === 1 &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    (f = jQuery.css(e, "display")),
                    f === "none" && (f = defaultDisplay(e.nodeName)),
                    f === "inline" && jQuery.css(e, "float") === "none" && (h.display = "inline-block")),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    l.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    }));
            for (r in t) {
                i = t[r];
                if (rfxtypes.exec(i)) {
                    delete t[r], (s = s || i === "toggle");
                    if (i === (p ? "hide" : "show")) {
                        if (i !== "show" || !d || d[r] === undefined) continue;
                        p = !0;
                    }
                    c[r] = (d && d[r]) || jQuery.style(e, r);
                }
            }
            if (!jQuery.isEmptyObject(c)) {
                d ? "hidden" in d && (p = d.hidden) : (d = data_priv.access(e, "fxshow", {})),
                    s && (d.hidden = !p),
                    p
                        ? jQuery(e).show()
                        : l.done(function () {
                              jQuery(e).hide();
                          }),
                    l.done(function () {
                        var t;
                        data_priv.remove(e, "fxshow");
                        for (t in c) jQuery.style(e, t, c[t]);
                    });
                for (r in c) (o = createTween(p ? d[r] : 0, r, l)), r in d || ((d[r] = o.start), p && ((o.end = o.start), (o.start = r === "width" || r === "height" ? 1 : 0)));
            }
        }
        function propFilter(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                (r = jQuery.camelCase(n)), (i = t[r]), (s = e[n]), jQuery.isArray(s) && ((i = s[1]), (s = e[n] = s[0])), n !== r && ((e[r] = s), delete e[n]), (o = jQuery.cssHooks[r]);
                if (o && "expand" in o) {
                    (s = o.expand(s)), delete e[r];
                    for (n in s) n in e || ((e[n] = s[n]), (t[n] = i));
                } else t[r] = i;
            }
        }
        function Animation(e, t, n) {
            var r,
                i,
                s = 0,
                o = animationPrefilters.length,
                u = jQuery.Deferred().always(function () {
                    delete a.elem;
                }),
                a = function () {
                    if (i) return !1;
                    var t = fxNow || createFxNow(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = n / f.duration || 0,
                        s = 1 - r,
                        o = 0,
                        a = f.tweens.length;
                    for (; o < a; o++) f.tweens[o].run(s);
                    return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1);
                },
                f = u.promise({
                    elem: e,
                    props: jQuery.extend({}, t),
                    opts: jQuery.extend(!0, { specialEasing: {} }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: fxNow || createFxNow(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(r), r;
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        if (i) return this;
                        i = !0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
                    },
                }),
                l = f.props;
            propFilter(l, f.opts.specialEasing);
            for (; s < o; s++) {
                r = animationPrefilters[s].call(f, e, l, f.opts);
                if (r) return r;
            }
            return (
                jQuery.map(l, createTween, f),
                jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f),
                jQuery.fx.timer(jQuery.extend(a, { elem: e, anim: f, queue: f.opts.queue })),
                f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
            );
        }
        function addToPrefiltersOrTransports(e) {
            return function (t, n) {
                typeof t != "string" && ((n = t), (t = "*"));
                var r,
                    i = 0,
                    s = t.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(n)) while ((r = s[i++])) r[0] === "+" ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
        }
        function inspectPrefiltersOrTransports(e, t, n, r) {
            function o(u) {
                var a;
                return (
                    (i[u] = !0),
                    jQuery.each(e[u] || [], function (e, u) {
                        var f = u(t, n, r);
                        if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                        if (s) return !(a = f);
                    }),
                    a
                );
            }
            var i = {},
                s = e === transports;
            return o(t.dataTypes[0]) || (!i["*"] && o("*"));
        }
        function ajaxExtend(e, t) {
            var n,
                r,
                i = jQuery.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && jQuery.extend(!0, e, r), e;
        }
        function ajaxHandleResponses(e, t, n) {
            var r,
                i,
                s,
                o,
                u = e.contents,
                a = e.dataTypes;
            while (a[0] === "*") a.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in u)
                    if (u[i] && u[i].test(r)) {
                        a.unshift(i);
                        break;
                    }
            if (a[0] in n) s = a[0];
            else {
                for (i in n) {
                    if (!a[0] || e.converters[i + " " + a[0]]) {
                        s = i;
                        break;
                    }
                    o || (o = i);
                }
                s = s || o;
            }
            if (s) return s !== a[0] && a.unshift(s), n[s];
        }
        function ajaxConvert(e, t, n, r) {
            var i,
                s,
                o,
                u,
                a,
                f = {},
                l = e.dataTypes.slice();
            if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
            s = l.shift();
            while (s) {
                e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (a = s), (s = l.shift());
                if (s)
                    if (s === "*") s = a;
                    else if (a !== "*" && a !== s) {
                        o = f[a + " " + s] || f["* " + s];
                        if (!o)
                            for (i in f) {
                                u = i.split(" ");
                                if (u[1] === s) {
                                    o = f[a + " " + u[0]] || f["* " + u[0]];
                                    if (o) {
                                        o === !0 ? (o = f[i]) : f[i] !== !0 && ((s = u[0]), l.unshift(u[1]));
                                        break;
                                    }
                                }
                            }
                        if (o !== !0)
                            if (o && e["throws"]) t = o(t);
                            else
                                try {
                                    t = o(t);
                                } catch (c) {
                                    return { state: "parsererror", error: o ? c : "No conversion from " + a + " to " + s };
                                }
                    }
            }
            return { state: "success", data: t };
        }
        function buildParams(e, t, n, r) {
            var i;
            if (jQuery.isArray(t))
                jQuery.each(t, function (t, i) {
                    n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
                });
            else if (!n && jQuery.type(t) === "object") for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
            else r(e, t);
        }
        function getWindow(e) {
            return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView;
        }
        var arr = [],
            slice = arr.slice,
            concat = arr.concat,
            push = arr.push,
            indexOf = arr.indexOf,
            class2type = {},
            toString = class2type.toString,
            hasOwn = class2type.hasOwnProperty,
            trim = "".trim,
            support = {},
            document = window.document,
            version = "2.1.0",
            jQuery = function (e, t) {
                return new jQuery.fn.init(e, t);
            },
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function (e, t) {
                return t.toUpperCase();
            };
        (jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function () {
                return slice.call(this);
            },
            get: function (e) {
                return e != null ? (e < 0 ? this[e + this.length] : this[e]) : slice.call(this);
            },
            pushStack: function (e) {
                var t = jQuery.merge(this.constructor(), e);
                return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (e, t) {
                return jQuery.each(this, e, t);
            },
            map: function (e) {
                return this.pushStack(
                    jQuery.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(slice.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice,
        }),
            (jQuery.extend = jQuery.fn.extend = function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    o = arguments[0] || {},
                    u = 1,
                    a = arguments.length,
                    f = !1;
                typeof o == "boolean" && ((f = o), (o = arguments[u] || {}), u++), typeof o != "object" && !jQuery.isFunction(o) && (o = {}), u === a && ((o = this), u--);
                for (; u < a; u++)
                    if ((e = arguments[u]) != null)
                        for (t in e) {
                            (n = o[t]), (r = e[t]);
                            if (o === r) continue;
                            f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r)))
                                ? (i ? ((i = !1), (s = n && jQuery.isArray(n) ? n : [])) : (s = n && jQuery.isPlainObject(n) ? n : {}), (o[t] = jQuery.extend(f, s, r)))
                                : r !== undefined && (o[t] = r);
                        }
                return o;
            }),
            jQuery.extend({
                expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e);
                },
                noop: function () {},
                isFunction: function (e) {
                    return jQuery.type(e) === "function";
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return e != null && e === e.window;
                },
                isNumeric: function (e) {
                    return e - parseFloat(e) >= 0;
                },
                isPlainObject: function (e) {
                    if (jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (t) {
                        return !1;
                    }
                    return !0;
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                type: function (e) {
                    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object" : typeof e;
                },
                globalEval: function (code) {
                    var script,
                        indirect = eval;
                    (code = jQuery.trim(code)),
                        code && (code.indexOf("use strict") === 1 ? ((script = document.createElement("script")), (script.text = code), document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code));
                },
                camelCase: function (e) {
                    return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                },
                each: function (e, t, n) {
                    var r,
                        i = 0,
                        s = e.length,
                        o = isArraylike(e);
                    if (n)
                        if (o)
                            for (; i < s; i++) {
                                r = t.apply(e[i], n);
                                if (r === !1) break;
                            }
                        else
                            for (i in e) {
                                r = t.apply(e[i], n);
                                if (r === !1) break;
                            }
                    else if (o)
                        for (; i < s; i++) {
                            r = t.call(e[i], i, e[i]);
                            if (r === !1) break;
                        }
                    else
                        for (i in e) {
                            r = t.call(e[i], i, e[i]);
                            if (r === !1) break;
                        }
                    return e;
                },
                trim: function (e) {
                    return e == null ? "" : trim.call(e);
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)), n;
                },
                inArray: function (e, t, n) {
                    return t == null ? -1 : indexOf.call(t, e, n);
                },
                merge: function (e, t) {
                    var n = +t.length,
                        r = 0,
                        i = e.length;
                    for (; r < n; r++) e[i++] = t[r];
                    return (e.length = i), e;
                },
                grep: function (e, t, n) {
                    var r,
                        i = [],
                        s = 0,
                        o = e.length,
                        u = !n;
                    for (; s < o; s++) (r = !t(e[s], s)), r !== u && i.push(e[s]);
                    return i;
                },
                map: function (e, t, n) {
                    var r,
                        i = 0,
                        s = e.length,
                        o = isArraylike(e),
                        u = [];
                    if (o) for (; i < s; i++) (r = t(e[i], i, n)), r != null && u.push(r);
                    else for (i in e) (r = t(e[i], i, n)), r != null && u.push(r);
                    return concat.apply([], u);
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, i;
                    return (
                        typeof t == "string" && ((n = e[t]), (t = e), (e = n)),
                        jQuery.isFunction(e)
                            ? ((r = slice.call(arguments, 2)),
                              (i = function () {
                                  return e.apply(t || this, r.concat(slice.call(arguments)));
                              }),
                              (i.guid = e.guid = e.guid || jQuery.guid++),
                              i)
                            : undefined
                    );
                },
                now: Date.now,
                support: support,
            }),
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                class2type["[object " + t + "]"] = t.toLowerCase();
            });
        var Sizzle = (function (e) {
            function rt(e, t, r, i) {
                var s, o, u, a, f, h, v, m, w, E;
                (t ? t.ownerDocument || t : b) !== c && l(t), (t = t || c), (r = r || []);
                if (!e || typeof e != "string") return r;
                if ((a = t.nodeType) !== 1 && a !== 9) return [];
                if (p && !i) {
                    if ((s = G.exec(e)))
                        if ((u = s[1])) {
                            if (a === 9) {
                                o = t.getElementById(u);
                                if (!o || !o.parentNode) return r;
                                if (o.id === u) return r.push(o), r;
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r;
                        } else {
                            if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                            if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r;
                        }
                    if (n.qsa && (!d || !d.test(e))) {
                        (m = v = y), (w = t), (E = a === 9 && e);
                        if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                            (h = dt(e)), (v = t.getAttribute("id")) ? (m = v.replace(Z, "\\$&")) : t.setAttribute("id", m), (m = "[id='" + m + "'] "), (f = h.length);
                            while (f--) h[f] = m + vt(h[f]);
                            (w = (Y.test(e) && ht(t.parentNode)) || t), (E = h.join(","));
                        }
                        if (E)
                            try {
                                return _.apply(r, w.querySelectorAll(E)), r;
                            } catch (S) {
                            } finally {
                                v || t.removeAttribute("id");
                            }
                    }
                }
                return xt(e.replace(R, "$1"), t, r, i);
            }
            function it() {
                function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                }
                var e = [];
                return t;
            }
            function st(e) {
                return (e[y] = !0), e;
            }
            function ot(e) {
                var t = c.createElement("div");
                try {
                    return !!e(t);
                } catch (n) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
            }
            function ut(e, t) {
                var n = e.split("|"),
                    i = e.length;
                while (i--) r.attrHandle[n[i]] = t;
            }
            function at(e, t) {
                var n = t && e,
                    r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
                if (r) return r;
                if (n) while ((n = n.nextSibling)) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ft(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e;
                };
            }
            function lt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e;
                };
            }
            function ct(e) {
                return st(function (t) {
                    return (
                        (t = +t),
                        st(function (n, r) {
                            var i,
                                s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[(i = s[o])] && (n[i] = !(r[i] = n[i]));
                        })
                    );
                });
            }
            function ht(e) {
                return e && typeof e.getElementsByTagName !== C && e;
            }
            function pt() {}
            function dt(e, t) {
                var n,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l = x[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (u = e), (a = []), (f = r.preFilter);
                while (u) {
                    if (!n || (i = U.exec(u))) i && (u = u.slice(i[0].length) || u), a.push((s = []));
                    n = !1;
                    if ((i = z.exec(u))) (n = i.shift()), s.push({ value: n, type: i[0].replace(R, " ") }), (u = u.slice(n.length));
                    for (o in r.filter) (i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && ((n = i.shift()), s.push({ value: n, type: o, matches: i }), (u = u.slice(n.length)));
                    if (!n) break;
                }
                return t ? u.length : u ? rt.error(e) : x(e, a).slice(0);
            }
            function vt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) r += e[t].value;
                return r;
            }
            function mt(e, t, n) {
                var r = t.dir,
                    i = n && r === "parentNode",
                    s = E++;
                return t.first
                    ? function (t, n, s) {
                          while ((t = t[r])) if (t.nodeType === 1 || i) return e(t, n, s);
                      }
                    : function (t, n, o) {
                          var u,
                              a,
                              f = [w, s];
                          if (o) {
                              while ((t = t[r])) if (t.nodeType === 1 || i) if (e(t, n, o)) return !0;
                          } else
                              while ((t = t[r]))
                                  if (t.nodeType === 1 || i) {
                                      a = t[y] || (t[y] = {});
                                      if ((u = a[r]) && u[0] === w && u[1] === s) return (f[2] = u[2]);
                                      a[r] = f;
                                      if ((f[2] = e(t, n, o))) return !0;
                                  }
                      };
            }
            function gt(e) {
                return e.length > 1
                    ? function (t, n, r) {
                          var i = e.length;
                          while (i--) if (!e[i](t, n, r)) return !1;
                          return !0;
                      }
                    : e[0];
            }
            function yt(e, t, n, r, i) {
                var s,
                    o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++) if ((s = e[u])) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o;
            }
            function bt(e, t, n, r, i, s) {
                return (
                    r && !r[y] && (r = bt(r)),
                    i && !i[y] && (i = bt(i, s)),
                    st(function (s, o, u, a) {
                        var f,
                            l,
                            c,
                            h = [],
                            p = [],
                            d = o.length,
                            v = s || St(t || "*", u.nodeType ? [u] : u, []),
                            m = e && (s || !t) ? yt(v, h, e, u, a) : v,
                            g = n ? (i || (s ? e : d || r) ? [] : o) : m;
                        n && n(m, g, u, a);
                        if (r) {
                            (f = yt(g, p)), r(f, [], u, a), (l = f.length);
                            while (l--) if ((c = f[l])) g[p[l]] = !(m[p[l]] = c);
                        }
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    (f = []), (l = g.length);
                                    while (l--) (c = g[l]) && f.push((m[l] = c));
                                    i(null, (g = []), f, a);
                                }
                                l = g.length;
                                while (l--) (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
                            }
                        } else (g = yt(g === o ? g.splice(d, g.length) : g)), i ? i(null, o, g, a) : _.apply(o, g);
                    })
                );
            }
            function wt(e) {
                var t,
                    n,
                    i,
                    s = e.length,
                    o = r.relative[e[0].type],
                    a = o || r.relative[" "],
                    f = o ? 1 : 0,
                    l = mt(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    c = mt(
                        function (e) {
                            return P.call(t, e) > -1;
                        },
                        a,
                        !0
                    ),
                    h = [
                        function (e, n, r) {
                            return (!o && (r || n !== u)) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                        },
                    ];
                for (; f < s; f++)
                    if ((n = r.relative[e[f].type])) h = [mt(gt(h), n)];
                    else {
                        n = r.filter[e[f].type].apply(null, e[f].matches);
                        if (n[y]) {
                            i = ++f;
                            for (; i < s; i++) if (r.relative[e[i].type]) break;
                            return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({ value: e[f - 2].type === " " ? "*" : "" })).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt((e = e.slice(i))), i < s && vt(e));
                        }
                        h.push(n);
                    }
                return gt(h);
            }
            function Et(e, t) {
                var n = t.length > 0,
                    i = e.length > 0,
                    s = function (s, o, a, f, l) {
                        var h,
                            p,
                            d,
                            v = 0,
                            m = "0",
                            g = s && [],
                            y = [],
                            b = u,
                            E = s || (i && r.find.TAG("*", l)),
                            S = (w += b == null ? 1 : Math.random() || 0.1),
                            x = E.length;
                        l && (u = o !== c && o);
                        for (; m !== x && (h = E[m]) != null; m++) {
                            if (i && h) {
                                p = 0;
                                while ((d = e[p++]))
                                    if (d(h, o, a)) {
                                        f.push(h);
                                        break;
                                    }
                                l && (w = S);
                            }
                            n && ((h = !d && h) && v--, s && g.push(h));
                        }
                        v += m;
                        if (n && m !== v) {
                            p = 0;
                            while ((d = t[p++])) d(g, y, o, a);
                            if (s) {
                                if (v > 0) while (m--) !g[m] && !y[m] && (y[m] = O.call(f));
                                y = yt(y);
                            }
                            _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f);
                        }
                        return l && ((w = S), (u = b)), g;
                    };
                return n ? st(s) : s;
            }
            function St(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) rt(e, t[r], n);
                return n;
            }
            function xt(e, t, i, s) {
                var u,
                    a,
                    f,
                    l,
                    c,
                    h = dt(e);
                if (!s && h.length === 1) {
                    a = h[0] = h[0].slice(0);
                    if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
                        t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
                        if (!t) return i;
                        e = e.slice(a.shift().value.length);
                    }
                    u = $.needsContext.test(e) ? 0 : a.length;
                    while (u--) {
                        f = a[u];
                        if (r.relative[(l = f.type)]) break;
                        if ((c = r.find[l]))
                            if ((s = c(f.matches[0].replace(et, tt), (Y.test(a[0].type) && ht(t.parentNode)) || t))) {
                                a.splice(u, 1), (e = s.length && vt(a));
                                if (!e) return _.apply(i, s), i;
                                break;
                            }
                    }
                }
                return o(e, h)(s, t, !p, i, (Y.test(e) && ht(t.parentNode)) || t), i;
            }
            var t,
                n,
                r,
                i,
                s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g,
                y = "sizzle" + -new Date(),
                b = e.document,
                w = 0,
                E = 0,
                S = it(),
                x = it(),
                T = it(),
                N = function (e, t) {
                    return e === t && (f = !0), 0;
                },
                C = typeof undefined,
                k = 1 << 31,
                L = {}.hasOwnProperty,
                A = [],
                O = A.pop,
                M = A.push,
                _ = A.push,
                D = A.slice,
                P =
                    A.indexOf ||
                    function (e) {
                        var t = 0,
                            n = this.length;
                        for (; t < n; t++) if (this[t] === e) return t;
                        return -1;
                    },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                B = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                F = j.replace("w", "w#"),
                I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
                q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                U = new RegExp("^" + B + "*," + B + "*"),
                z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
                X = new RegExp(q),
                V = new RegExp("^" + F + "$"),
                $ = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i"),
                },
                J = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Y = /[+~]/,
                Z = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
                tt = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (r & 1023) | 56320);
                };
            try {
                _.apply((A = D.call(b.childNodes)), b.childNodes), A[b.childNodes.length].nodeType;
            } catch (nt) {
                _ = {
                    apply: A.length
                        ? function (e, t) {
                              M.apply(e, D.call(t));
                          }
                        : function (e, t) {
                              var n = e.length,
                                  r = 0;
                              while ((e[n++] = t[r++]));
                              e.length = n - 1;
                          },
                };
            }
            (n = rt.support = {}),
                (s = rt.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1;
                }),
                (l = rt.setDocument = function (e) {
                    var t,
                        i = e ? e.ownerDocument || e : b,
                        o = i.defaultView;
                    if (i === c || i.nodeType !== 9 || !i.documentElement) return c;
                    (c = i),
                        (h = i.documentElement),
                        (p = !s(i)),
                        o &&
                            o !== o.top &&
                            (o.addEventListener
                                ? o.addEventListener(
                                      "unload",
                                      function () {
                                          l();
                                      },
                                      !1
                                  )
                                : o.attachEvent &&
                                  o.attachEvent("onunload", function () {
                                      l();
                                  })),
                        (n.attributes = ot(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (n.getElementsByTagName = ot(function (e) {
                            return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length;
                        })),
                        (n.getElementsByClassName =
                            Q.test(i.getElementsByClassName) &&
                            ot(function (e) {
                                return (e.innerHTML = "<div class='a'></div><div class='a i'></div>"), (e.firstChild.className = "i"), e.getElementsByClassName("i").length === 2;
                            })),
                        (n.getById = ot(function (e) {
                            return (h.appendChild(e).id = y), !i.getElementsByName || !i.getElementsByName(y).length;
                        })),
                        n.getById
                            ? ((r.find.ID = function (e, t) {
                                  if (typeof t.getElementById !== C && p) {
                                      var n = t.getElementById(e);
                                      return n && n.parentNode ? [n] : [];
                                  }
                              }),
                              (r.filter.ID = function (e) {
                                  var t = e.replace(et, tt);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }))
                            : (delete r.find.ID,
                              (r.filter.ID = function (e) {
                                  var t = e.replace(et, tt);
                                  return function (e) {
                                      var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                                      return n && n.value === t;
                                  };
                              })),
                        (r.find.TAG = n.getElementsByTagName
                            ? function (e, t) {
                                  if (typeof t.getElementsByTagName !== C) return t.getElementsByTagName(e);
                              }
                            : function (e, t) {
                                  var n,
                                      r = [],
                                      i = 0,
                                      s = t.getElementsByTagName(e);
                                  if (e === "*") {
                                      while ((n = s[i++])) n.nodeType === 1 && r.push(n);
                                      return r;
                                  }
                                  return s;
                              }),
                        (r.find.CLASS =
                            n.getElementsByClassName &&
                            function (e, t) {
                                if (typeof t.getElementsByClassName !== C && p) return t.getElementsByClassName(e);
                            }),
                        (v = []),
                        (d = []);
                    if ((n.qsa = Q.test(i.querySelectorAll)))
                        ot(function (e) {
                            (e.innerHTML = "<select t=''><option selected=''></option></select>"),
                                e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"),
                                e.querySelectorAll(":checked").length || d.push(":checked");
                        }),
                            ot(function (e) {
                                var t = i.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="),
                                    e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    d.push(",.*:");
                            });
                    return (
                        (n.matchesSelector = Q.test((m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                            ot(function (e) {
                                (n.disconnectedMatch = m.call(e, "div")), m.call(e, "[s!='']:x"), v.push("!=", q);
                            }),
                        (d = d.length && new RegExp(d.join("|"))),
                        (v = v.length && new RegExp(v.join("|"))),
                        (t = Q.test(h.compareDocumentPosition)),
                        (g =
                            t || Q.test(h.contains)
                                ? function (e, t) {
                                      var n = e.nodeType === 9 ? e.documentElement : e,
                                          r = t && t.parentNode;
                                      return e === r || (!!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
                                  }
                                : function (e, t) {
                                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                      return !1;
                                  }),
                        (N = t
                            ? function (e, t) {
                                  if (e === t) return (f = !0), 0;
                                  var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                  return r
                                      ? r
                                      : ((r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                        r & 1 || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                            ? e === i || (e.ownerDocument === b && g(b, e))
                                                ? -1
                                                : t === i || (t.ownerDocument === b && g(b, t))
                                                ? 1
                                                : a
                                                ? P.call(a, e) - P.call(a, t)
                                                : 0
                                            : r & 4
                                            ? -1
                                            : 1);
                              }
                            : function (e, t) {
                                  if (e === t) return (f = !0), 0;
                                  var n,
                                      r = 0,
                                      s = e.parentNode,
                                      o = t.parentNode,
                                      u = [e],
                                      l = [t];
                                  if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                                  if (s === o) return at(e, t);
                                  n = e;
                                  while ((n = n.parentNode)) u.unshift(n);
                                  n = t;
                                  while ((n = n.parentNode)) l.unshift(n);
                                  while (u[r] === l[r]) r++;
                                  return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0;
                              }),
                        i
                    );
                }),
                (rt.matches = function (e, t) {
                    return rt(e, null, null, t);
                }),
                (rt.matchesSelector = function (e, t) {
                    (e.ownerDocument || e) !== c && l(e), (t = t.replace(W, "='$1']"));
                    if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t)))
                        try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || (e.document && e.document.nodeType !== 11)) return r;
                        } catch (i) {}
                    return rt(t, c, null, [e]).length > 0;
                }),
                (rt.contains = function (e, t) {
                    return (e.ownerDocument || e) !== c && l(e), g(e, t);
                }),
                (rt.attr = function (e, t) {
                    (e.ownerDocument || e) !== c && l(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
                    return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
                }),
                (rt.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (rt.uniqueSort = function (e) {
                    var t,
                        r = [],
                        i = 0,
                        s = 0;
                    (f = !n.detectDuplicates), (a = !n.sortStable && e.slice(0)), e.sort(N);
                    if (f) {
                        while ((t = e[s++])) t === e[s] && (i = r.push(s));
                        while (i--) e.splice(r[i], 1);
                    }
                    return (a = null), e;
                }),
                (i = rt.getText = function (e) {
                    var t,
                        n = "",
                        r = 0,
                        s = e.nodeType;
                    if (!s) while ((t = e[r++])) n += i(t);
                    else if (s === 1 || s === 9 || s === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (s === 3 || s === 4) return e.nodeValue;
                    return n;
                }),
                (r = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: $,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(et, tt)), (e[3] = (e[4] || e[5] || "").replace(et, tt)), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                e[1].slice(0, 3) === "nth" ? (e[3] || rt.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"))), (e[5] = +(e[7] + e[8] || e[3] === "odd"))) : e[3] && rt.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[5] && e[2];
                            return $.CHILD.test(e[0])
                                ? null
                                : (e[3] && e[4] !== undefined ? (e[2] = e[4]) : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(et, tt).toLowerCase();
                            return e === "*"
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === t;
                                  };
                        },
                        CLASS: function (e) {
                            var t = S[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) &&
                                    S(e, function (e) {
                                        return t.test((typeof e.className == "string" && e.className) || (typeof e.getAttribute !== C && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var i = rt.attr(r, e);
                                return i == null
                                    ? t === "!="
                                    : t
                                    ? ((i += ""),
                                      t === "="
                                          ? i === n
                                          : t === "!="
                                          ? i !== n
                                          : t === "^="
                                          ? n && i.indexOf(n) === 0
                                          : t === "*="
                                          ? n && i.indexOf(n) > -1
                                          : t === "$="
                                          ? n && i.slice(-n.length) === n
                                          : t === "~="
                                          ? (" " + i + " ").indexOf(n) > -1
                                          : t === "|="
                                          ? i === n || i.slice(0, n.length + 1) === n + "-"
                                          : !1)
                                    : !0;
                            };
                        },
                        CHILD: function (e, t, n, r, i) {
                            var s = e.slice(0, 3) !== "nth",
                                o = e.slice(-4) !== "last",
                                u = t === "of-type";
                            return r === 1 && i === 0
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, a) {
                                      var f,
                                          l,
                                          c,
                                          h,
                                          p,
                                          d,
                                          v = s !== o ? "nextSibling" : "previousSibling",
                                          m = t.parentNode,
                                          g = u && t.nodeName.toLowerCase(),
                                          b = !a && !u;
                                      if (m) {
                                          if (s) {
                                              while (v) {
                                                  c = t;
                                                  while ((c = c[v])) if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                                  d = v = e === "only" && !d && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          d = [o ? m.firstChild : m.lastChild];
                                          if (o && b) {
                                              (l = m[y] || (m[y] = {})), (f = l[e] || []), (p = f[0] === w && f[1]), (h = f[0] === w && f[2]), (c = p && m.childNodes[p]);
                                              while ((c = (++p && c && c[v]) || (h = p = 0) || d.pop()))
                                                  if (c.nodeType === 1 && ++h && c === t) {
                                                      l[e] = [w, p, h];
                                                      break;
                                                  }
                                          } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                                          else
                                              while ((c = (++p && c && c[v]) || (h = p = 0) || d.pop()))
                                                  if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                                      b && ((c[y] || (c[y] = {}))[e] = [w, h]);
                                                      if (c === t) break;
                                                  }
                                          return (h -= i), h === r || (h % r === 0 && h / r >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                            return i[y]
                                ? i(t)
                                : i.length > 1
                                ? ((n = [e, e, "", t]),
                                  r.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? st(function (e, n) {
                                            var r,
                                                s = i(e, t),
                                                o = s.length;
                                            while (o--) (r = P.call(e, s[o])), (e[r] = !(n[r] = s[o]));
                                        })
                                      : function (e) {
                                            return i(e, 0, n);
                                        })
                                : i;
                        },
                    },
                    pseudos: {
                        not: st(function (e) {
                            var t = [],
                                n = [],
                                r = o(e.replace(R, "$1"));
                            return r[y]
                                ? st(function (e, t, n, i) {
                                      var s,
                                          o = r(e, null, i, []),
                                          u = e.length;
                                      while (u--) if ((s = o[u])) e[u] = !(t[u] = s);
                                  })
                                : function (e, i, s) {
                                      return (t[0] = e), r(t, null, s, n), !n.pop();
                                  };
                        }),
                        has: st(function (e) {
                            return function (t) {
                                return rt(e, t).length > 0;
                            };
                        }),
                        contains: st(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            };
                        }),
                        lang: st(function (e) {
                            return (
                                V.test(e || "") || rt.error("unsupported lang: " + e),
                                (e = e.replace(et, tt).toLowerCase()),
                                function (t) {
                                    var n;
                                    do if ((n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()), n === e || n.indexOf(e + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === h;
                        },
                        focus: function (e) {
                            return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: function (e) {
                            return e.disabled === !1;
                        },
                        disabled: function (e) {
                            return e.disabled === !0;
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (t === "input" && !!e.checked) || (t === "option" && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function (e) {
                            return K.test(e.nodeName);
                        },
                        input: function (e) {
                            return J.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (t === "input" && e.type === "button") || t === "button";
                        },
                        text: function (e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
                        },
                        first: ct(function () {
                            return [0];
                        }),
                        last: ct(function (e, t) {
                            return [t - 1];
                        }),
                        eq: ct(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ct(function (e, t) {
                            var n = 0;
                            for (; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ct(function (e, t) {
                            var n = 1;
                            for (; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ct(function (e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0; ) e.push(r);
                            return e;
                        }),
                        gt: ct(function (e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t; ) e.push(r);
                            return e;
                        }),
                    },
                }),
                (r.pseudos.nth = r.pseudos.eq);
            for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = ft(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = lt(t);
            return (
                (pt.prototype = r.filters = r.pseudos),
                (r.setFilters = new pt()),
                (o = rt.compile = function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        s = T[e + " "];
                    if (!s) {
                        t || (t = dt(e)), (n = t.length);
                        while (n--) (s = wt(t[n])), s[y] ? r.push(s) : i.push(s);
                        s = T(e, Et(i, r));
                    }
                    return s;
                }),
                (n.sortStable = y.split("").sort(N).join("") === y),
                (n.detectDuplicates = !!f),
                l(),
                (n.sortDetached = ot(function (e) {
                    return e.compareDocumentPosition(c.createElement("div")) & 1;
                })),
                ot(function (e) {
                    return (e.innerHTML = "<a href='#'></a>"), e.firstChild.getAttribute("href") === "#";
                }) ||
                    ut("type|href|height|width", function (e, t, n) {
                        if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
                    }),
                (!n.attributes ||
                    !ot(function (e) {
                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === "";
                    })) &&
                    ut("value", function (e, t, n) {
                        if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue;
                    }),
                ot(function (e) {
                    return e.getAttribute("disabled") == null;
                }) ||
                    ut(H, function (e, t, n) {
                        var r;
                        if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                    }),
                rt
            );
        })(window);
        (jQuery.find = Sizzle),
            (jQuery.expr = Sizzle.selectors),
            (jQuery.expr[":"] = jQuery.expr.pseudos),
            (jQuery.unique = Sizzle.uniqueSort),
            (jQuery.text = Sizzle.getText),
            (jQuery.isXMLDoc = Sizzle.isXML),
            (jQuery.contains = Sizzle.contains);
        var rneedsContext = jQuery.expr.match.needsContext,
            rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            risSimple = /^.[^:#\[\.,]*$/;
        (jQuery.filter = function (e, t, n) {
            var r = t[0];
            return (
                n && (e = ":not(" + e + ")"),
                t.length === 1 && r.nodeType === 1
                    ? jQuery.find.matchesSelector(r, e)
                        ? [r]
                        : []
                    : jQuery.find.matches(
                          e,
                          jQuery.grep(t, function (e) {
                              return e.nodeType === 1;
                          })
                      )
            );
        }),
            jQuery.fn.extend({
                find: function (e) {
                    var t,
                        n = this.length,
                        r = [],
                        i = this;
                    if (typeof e != "string")
                        return this.pushStack(
                            jQuery(e).filter(function () {
                                for (t = 0; t < n; t++) if (jQuery.contains(i[t], this)) return !0;
                            })
                        );
                    for (t = 0; t < n; t++) jQuery.find(e, i[t], r);
                    return (r = this.pushStack(n > 1 ? jQuery.unique(r) : r)), (r.selector = this.selector ? this.selector + " " + e : e), r;
                },
                filter: function (e) {
                    return this.pushStack(winnow(this, e || [], !1));
                },
                not: function (e) {
                    return this.pushStack(winnow(this, e || [], !0));
                },
                is: function (e) {
                    return !!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length;
                },
            });
        var rootjQuery,
            rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = (jQuery.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if (typeof e == "string") {
                    e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? (n = [null, e, null]) : (n = rquickExpr.exec(e));
                    if (n && (n[1] || !t)) {
                        if (n[1]) {
                            (t = t instanceof jQuery ? t[0] : t), jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
                            if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t)) for (n in t) jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this;
                        }
                        return (r = document.getElementById(n[2])), r && r.parentNode && ((this.length = 1), (this[0] = r)), (this.context = document), (this.selector = e), this;
                    }
                    return !t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e);
                }
                return e.nodeType
                    ? ((this.context = this[0] = e), (this.length = 1), this)
                    : jQuery.isFunction(e)
                    ? typeof rootjQuery.ready != "undefined"
                        ? rootjQuery.ready(e)
                        : e(jQuery)
                    : (e.selector !== undefined && ((this.selector = e.selector), (this.context = e.context)), jQuery.makeArray(e, this));
            });
        (init.prototype = jQuery.fn), (rootjQuery = jQuery(document));
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
        jQuery.extend({
            dir: function (e, t, n) {
                var r = [],
                    i = n !== undefined;
                while ((e = e[t]) && e.nodeType !== 9)
                    if (e.nodeType === 1) {
                        if (i && jQuery(e).is(n)) break;
                        r.push(e);
                    }
                return r;
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n;
            },
        }),
            jQuery.fn.extend({
                has: function (e) {
                    var t = jQuery(e, this),
                        n = t.length;
                    return this.filter(function () {
                        var e = 0;
                        for (; e < n; e++) if (jQuery.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        r = 0,
                        i = this.length,
                        s = [],
                        o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
                                s.push(n);
                                break;
                            }
                    return this.pushStack(s.length > 1 ? jQuery.unique(s) : s);
                },
                index: function (e) {
                    return e ? (typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))));
                },
                addBack: function (e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
                },
            }),
            jQuery.each(
                {
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && t.nodeType !== 11 ? t : null;
                    },
                    parents: function (e) {
                        return jQuery.dir(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                        return jQuery.dir(e, "parentNode", n);
                    },
                    next: function (e) {
                        return sibling(e, "nextSibling");
                    },
                    prev: function (e) {
                        return sibling(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return jQuery.dir(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return jQuery.dir(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                        return jQuery.dir(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                        return jQuery.dir(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                        return jQuery.sibling((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return jQuery.sibling(e.firstChild);
                    },
                    contents: function (e) {
                        return e.contentDocument || jQuery.merge([], e.childNodes);
                    },
                },
                function (e, t) {
                    jQuery.fn[e] = function (n, r) {
                        var i = jQuery.map(this, t, n);
                        return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = jQuery.filter(r, i)), this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i), rparentsprev.test(e) && i.reverse()), this.pushStack(i);
                    };
                }
            );
        var rnotwhite = /\S+/g,
            optionsCache = {};
        (jQuery.Callbacks = function (e) {
            e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
            var t,
                n,
                r,
                i,
                s,
                o,
                u = [],
                a = !e.once && [],
                f = function (c) {
                    (t = e.memory && c), (n = !0), (o = i || 0), (i = 0), (s = u.length), (r = !0);
                    for (; u && o < s; o++)
                        if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break;
                        }
                    (r = !1), u && (a ? a.length && f(a.shift()) : t ? (u = []) : l.disable());
                },
                l = {
                    add: function () {
                        if (u) {
                            var n = u.length;
                            (function o(t) {
                                jQuery.each(t, function (t, n) {
                                    var r = jQuery.type(n);
                                    r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n);
                                });
                            })(arguments),
                                r ? (s = u.length) : t && ((i = n), f(t));
                        }
                        return this;
                    },
                    remove: function () {
                        return (
                            u &&
                                jQuery.each(arguments, function (e, t) {
                                    var n;
                                    while ((n = jQuery.inArray(t, u, n)) > -1) u.splice(n, 1), r && (n <= s && s--, n <= o && o--);
                                }),
                            this
                        );
                    },
                    has: function (e) {
                        return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length;
                    },
                    empty: function () {
                        return (u = []), (s = 0), this;
                    },
                    disable: function () {
                        return (u = a = t = undefined), this;
                    },
                    disabled: function () {
                        return !u;
                    },
                    lock: function () {
                        return (a = undefined), t || l.disable(), this;
                    },
                    locked: function () {
                        return !a;
                    },
                    fireWith: function (e, t) {
                        return u && (!n || a) && ((t = t || []), (t = [e, t.slice ? t.slice() : t]), r ? a.push(t) : f(t)), this;
                    },
                    fire: function () {
                        return l.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!n;
                    },
                };
            return l;
        }),
            jQuery.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", jQuery.Callbacks("memory")],
                        ],
                        n = "pending",
                        r = {
                            state: function () {
                                return n;
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this;
                            },
                            then: function () {
                                var e = arguments;
                                return jQuery
                                    .Deferred(function (n) {
                                        jQuery.each(t, function (t, s) {
                                            var o = jQuery.isFunction(e[t]) && e[t];
                                            i[s[1]](function () {
                                                var e = o && o.apply(this, arguments);
                                                e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    })
                                    .promise();
                            },
                            promise: function (e) {
                                return e != null ? jQuery.extend(e, r) : r;
                            },
                        },
                        i = {};
                    return (
                        (r.pipe = r.then),
                        jQuery.each(t, function (e, s) {
                            var o = s[2],
                                u = s[3];
                            (r[s[1]] = o.add),
                                u &&
                                    o.add(
                                        function () {
                                            n = u;
                                        },
                                        t[e ^ 1][2].disable,
                                        t[2][2].lock
                                    ),
                                (i[s[0]] = function () {
                                    return i[s[0] + "With"](this === i ? r : this, arguments), this;
                                }),
                                (i[s[0] + "With"] = o.fireWith);
                        }),
                        r.promise(i),
                        e && e.call(i, i),
                        i
                    );
                },
                when: function (e) {
                    var t = 0,
                        n = slice.call(arguments),
                        r = n.length,
                        i = r !== 1 || (e && jQuery.isFunction(e.promise)) ? r : 0,
                        s = i === 1 ? e : jQuery.Deferred(),
                        o = function (e, t, n) {
                            return function (r) {
                                (t[e] = this), (n[e] = arguments.length > 1 ? slice.call(arguments) : r), n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
                            };
                        },
                        u,
                        a,
                        f;
                    if (r > 1) {
                        (u = new Array(r)), (a = new Array(r)), (f = new Array(r));
                        for (; t < r; t++) n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
                    }
                    return i || s.resolveWith(f, n), s.promise();
                },
            });
        var readyList;
        (jQuery.fn.ready = function (e) {
            return jQuery.ready.promise().done(e), this;
        }),
            jQuery.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? jQuery.readyWait++ : jQuery.ready(!0);
                },
                ready: function (e) {
                    if (e === !0 ? --jQuery.readyWait : jQuery.isReady) return;
                    jQuery.isReady = !0;
                    if (e !== !0 && --jQuery.readyWait > 0) return;
                    readyList.resolveWith(document, [jQuery]), jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready");
                },
            }),
            (jQuery.ready.promise = function (e) {
                return (
                    readyList ||
                        ((readyList = jQuery.Deferred()), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))),
                    readyList.promise(e)
                );
            }),
            jQuery.ready.promise();
        var access = (jQuery.access = function (e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = n == null;
            if (jQuery.type(n) === "object") {
                i = !0;
                for (u in n) jQuery.access(e, t, u, n[u], !0, s, o);
            } else if (r !== undefined) {
                (i = !0),
                    jQuery.isFunction(r) || (o = !0),
                    f &&
                        (o
                            ? (t.call(e, r), (t = null))
                            : ((f = t),
                              (t = function (e, t, n) {
                                  return f.call(jQuery(e), n);
                              })));
                if (t) for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            }
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s;
        });
        (jQuery.acceptData = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
        }),
            (Data.uid = 1),
            (Data.accepts = jQuery.acceptData),
            (Data.prototype = {
                key: function (e) {
                    if (!Data.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = Data.uid++;
                        try {
                            (t[this.expando] = { value: n }), Object.defineProperties(e, t);
                        } catch (r) {
                            (t[this.expando] = n), jQuery.extend(e, t);
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n;
                },
                set: function (e, t, n) {
                    var r,
                        i = this.key(e),
                        s = this.cache[i];
                    if (typeof t == "string") s[t] = n;
                    else if (jQuery.isEmptyObject(s)) jQuery.extend(this.cache[i], t);
                    else for (r in t) s[r] = t[r];
                    return s;
                },
                get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return t === undefined ? n : n[t];
                },
                access: function (e, t, n) {
                    var r;
                    return t === undefined || (t && typeof t == "string" && n === undefined) ? ((r = this.get(e, t)), r !== undefined ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
                },
                remove: function (e, t) {
                    var n,
                        r,
                        i,
                        s = this.key(e),
                        o = this.cache[s];
                    if (t === undefined) this.cache[s] = {};
                    else {
                        jQuery.isArray(t) ? (r = t.concat(t.map(jQuery.camelCase))) : ((i = jQuery.camelCase(t)), t in o ? (r = [t, i]) : ((r = i), (r = r in o ? [r] : r.match(rnotwhite) || []))), (n = r.length);
                        while (n--) delete o[r[n]];
                    }
                },
                hasData: function (e) {
                    return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {});
                },
                discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]];
                },
            });
        var data_priv = new Data(),
            data_user = new Data(),
            rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;
        jQuery.extend({
            hasData: function (e) {
                return data_user.hasData(e) || data_priv.hasData(e);
            },
            data: function (e, t, n) {
                return data_user.access(e, t, n);
            },
            removeData: function (e, t) {
                data_user.remove(e, t);
            },
            _data: function (e, t, n) {
                return data_priv.access(e, t, n);
            },
            _removeData: function (e, t) {
                data_priv.remove(e, t);
            },
        }),
            jQuery.fn.extend({
                data: function (e, t) {
                    var n,
                        r,
                        i,
                        s = this[0],
                        o = s && s.attributes;
                    if (e === undefined) {
                        if (this.length) {
                            i = data_user.get(s);
                            if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
                                n = o.length;
                                while (n--) (r = o[n].name), r.indexOf("data-") === 0 && ((r = jQuery.camelCase(r.slice(5))), dataAttr(s, r, i[r]));
                                data_priv.set(s, "hasDataAttrs", !0);
                            }
                        }
                        return i;
                    }
                    return typeof e == "object"
                        ? this.each(function () {
                              data_user.set(this, e);
                          })
                        : access(
                              this,
                              function (t) {
                                  var n,
                                      r = jQuery.camelCase(e);
                                  if (s && t === undefined) {
                                      n = data_user.get(s, e);
                                      if (n !== undefined) return n;
                                      n = data_user.get(s, r);
                                      if (n !== undefined) return n;
                                      n = dataAttr(s, r, undefined);
                                      if (n !== undefined) return n;
                                      return;
                                  }
                                  this.each(function () {
                                      var n = data_user.get(this, r);
                                      data_user.set(this, r, t), e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t);
                                  });
                              },
                              null,
                              t,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (e) {
                    return this.each(function () {
                        data_user.remove(this, e);
                    });
                },
            }),
            jQuery.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return (t = (t || "fx") + "queue"), (r = data_priv.get(e, t)), n && (!r || jQuery.isArray(n) ? (r = data_priv.access(e, t, jQuery.makeArray(n))) : r.push(n)), r || [];
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = jQuery.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        s = jQuery._queueHooks(e, t),
                        o = function () {
                            jQuery.dequeue(e, t);
                        };
                    i === "inprogress" && ((i = n.shift()), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                        data_priv.get(e, n) ||
                        data_priv.access(e, n, {
                            empty: jQuery.Callbacks("once memory").add(function () {
                                data_priv.remove(e, [t + "queue", n]);
                            }),
                        })
                    );
                },
            }),
            jQuery.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return (
                        typeof e != "string" && ((t = e), (e = "fx"), n--),
                        arguments.length < n
                            ? jQuery.queue(this[0], e)
                            : t === undefined
                            ? this
                            : this.each(function () {
                                  var n = jQuery.queue(this, e, t);
                                  jQuery._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e);
                              })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        jQuery.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                    var n,
                        r = 1,
                        i = jQuery.Deferred(),
                        s = this,
                        o = this.length,
                        u = function () {
                            --r || i.resolveWith(s, [s]);
                        };
                    typeof e != "string" && ((t = e), (e = undefined)), (e = e || "fx");
                    while (o--) (n = data_priv.get(s[o], e + "queueHooks")), n && n.empty && (r++, n.empty.add(u));
                    return u(), i.promise(t);
                },
            });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            cssExpand = ["Top", "Right", "Bottom", "Left"],
            isHidden = function (e, t) {
                return (e = t || e), jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e);
            },
            rcheckableType = /^(?:checkbox|radio)$/i;
        (function () {
            var e = document.createDocumentFragment(),
                t = e.appendChild(document.createElement("div"));
            (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
                (support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (t.innerHTML = "<textarea>x</textarea>"),
                (support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
        })();
        var strundefined = typeof undefined;
        support.focusinBubbles = "onfocusin" in window;
        var rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
        (jQuery.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    v,
                    m = data_priv.get(e);
                if (!m) return;
                n.handler && ((s = n), (n = s.handler), (i = s.selector)),
                    n.guid || (n.guid = jQuery.guid++),
                    (a = m.events) || (a = m.events = {}),
                    (o = m.handle) ||
                        (o = m.handle = function (t) {
                            return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined;
                        }),
                    (t = (t || "").match(rnotwhite) || [""]),
                    (f = t.length);
                while (f--) {
                    (u = rtypenamespace.exec(t[f]) || []), (p = v = u[1]), (d = (u[2] || "").split(".").sort());
                    if (!p) continue;
                    (c = jQuery.event.special[p] || {}),
                        (p = (i ? c.delegateType : c.bindType) || p),
                        (c = jQuery.event.special[p] || {}),
                        (l = jQuery.extend({ type: p, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && jQuery.expr.match.needsContext.test(i), namespace: d.join(".") }, s)),
                        (h = a[p]) || ((h = a[p] = []), (h.delegateCount = 0), (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)),
                        c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
                        i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                        (jQuery.event.global[p] = !0);
                }
            },
            remove: function (e, t, n, r, i) {
                var s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    v,
                    m = data_priv.hasData(e) && data_priv.get(e);
                if (!m || !(a = m.events)) return;
                (t = (t || "").match(rnotwhite) || [""]), (f = t.length);
                while (f--) {
                    (u = rtypenamespace.exec(t[f]) || []), (p = v = u[1]), (d = (u[2] || "").split(".").sort());
                    if (!p) {
                        for (p in a) jQuery.event.remove(e, p + t[f], n, r, !0);
                        continue;
                    }
                    (c = jQuery.event.special[p] || {}), (p = (r ? c.delegateType : c.bindType) || p), (h = a[p] || []), (u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")), (o = s = h.length);
                    while (s--)
                        (l = h[s]),
                            (i || v === l.origType) &&
                                (!n || n.guid === l.guid) &&
                                (!u || u.test(l.namespace)) &&
                                (!r || r === l.selector || (r === "**" && l.selector)) &&
                                (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                    o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle), delete a[p]);
                }
                jQuery.isEmptyObject(a) && (delete m.handle, data_priv.remove(e, "events"));
            },
            trigger: function (e, t, n, r) {
                var i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c = [n || document],
                    h = hasOwn.call(e, "type") ? e.type : e,
                    p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
                s = o = n = n || document;
                if (n.nodeType === 3 || n.nodeType === 8) return;
                if (rfocusMorph.test(h + jQuery.event.triggered)) return;
                h.indexOf(".") >= 0 && ((p = h.split(".")), (h = p.shift()), p.sort()),
                    (a = h.indexOf(":") < 0 && "on" + h),
                    (e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e == "object" && e)),
                    (e.isTrigger = r ? 2 : 3),
                    (e.namespace = p.join(".")),
                    (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = undefined),
                    e.target || (e.target = n),
                    (t = t == null ? [e] : jQuery.makeArray(t, [e])),
                    (l = jQuery.event.special[h] || {});
                if (!r && l.trigger && l.trigger.apply(n, t) === !1) return;
                if (!r && !l.noBubble && !jQuery.isWindow(n)) {
                    (u = l.delegateType || h), rfocusMorph.test(u + h) || (s = s.parentNode);
                    for (; s; s = s.parentNode) c.push(s), (o = s);
                    o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window);
                }
                i = 0;
                while ((s = c[i++]) && !e.isPropagationStopped())
                    (e.type = i > 1 ? u : l.bindType || h),
                        (f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle")),
                        f && f.apply(s, t),
                        (f = a && s[a]),
                        f && f.apply && jQuery.acceptData(s) && ((e.result = f.apply(s, t)), e.result === !1 && e.preventDefault());
                return (
                    (e.type = h),
                    !r &&
                        !e.isDefaultPrevented() &&
                        (!l._default || l._default.apply(c.pop(), t) === !1) &&
                        jQuery.acceptData(n) &&
                        a &&
                        jQuery.isFunction(n[h]) &&
                        !jQuery.isWindow(n) &&
                        ((o = n[a]), o && (n[a] = null), (jQuery.event.triggered = h), n[h](), (jQuery.event.triggered = undefined), o && (n[a] = o)),
                    e.result
                );
            },
            dispatch: function (e) {
                e = jQuery.event.fix(e);
                var t,
                    n,
                    r,
                    i,
                    s,
                    o = [],
                    u = slice.call(arguments),
                    a = (data_priv.get(this, "events") || {})[e.type] || [],
                    f = jQuery.event.special[e.type] || {};
                (u[0] = e), (e.delegateTarget = this);
                if (f.preDispatch && f.preDispatch.call(this, e) === !1) return;
                (o = jQuery.event.handlers.call(this, e, a)), (t = 0);
                while ((i = o[t++]) && !e.isPropagationStopped()) {
                    (e.currentTarget = i.elem), (n = 0);
                    while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped())
                        if (!e.namespace_re || e.namespace_re.test(s.namespace))
                            (e.handleObj = s), (e.data = s.data), (r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u)), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation());
                }
                return f.postDispatch && f.postDispatch.call(this, e), e.result;
            },
            handlers: function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    o = [],
                    u = t.delegateCount,
                    a = e.target;
                if (u && a.nodeType && (!e.button || e.type !== "click"))
                    for (; a !== this; a = a.parentNode || this)
                        if (a.disabled !== !0 || e.type !== "click") {
                            r = [];
                            for (n = 0; n < u; n++) (s = t[n]), (i = s.selector + " "), r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length), r[i] && r.push(s);
                            r.length && o.push({ elem: a, handlers: r });
                        }
                return u < t.length && o.push({ elem: this, handlers: t.slice(u) }), o;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n,
                        r,
                        i,
                        s = t.button;
                    return (
                        e.pageX == null &&
                            t.clientX != null &&
                            ((n = e.target.ownerDocument || document),
                            (r = n.documentElement),
                            (i = n.body),
                            (e.pageX = t.clientX + ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                            (e.pageY = t.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))),
                        !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0),
                        e
                    );
                },
            },
            fix: function (e) {
                if (e[jQuery.expando]) return e;
                var t,
                    n,
                    r,
                    i = e.type,
                    s = e,
                    o = this.fixHooks[i];
                o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}), (r = o.props ? this.props.concat(o.props) : this.props), (e = new jQuery.Event(s)), (t = r.length);
                while (t--) (n = r[t]), (e[n] = s[n]);
                return e.target || (e.target = document), e.target.nodeType === 3 && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e;
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) return this.click(), !1;
                    },
                    _default: function (e) {
                        return jQuery.nodeName(e.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== undefined && (e.originalEvent.returnValue = e.result);
                    },
                },
            },
            simulate: function (e, t, n, r) {
                var i = jQuery.extend(new jQuery.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
            },
        }),
            (jQuery.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
            }),
            (jQuery.Event = function (e, t) {
                if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
                e && e.type
                    ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (e.defaultPrevented === undefined && e.getPreventDefault && e.getPreventDefault()) ? returnTrue : returnFalse))
                    : (this.type = e),
                    t && jQuery.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || jQuery.now()),
                    (this[jQuery.expando] = !0);
            }),
            (jQuery.Event.prototype = {
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = returnTrue), e && e.preventDefault && e.preventDefault();
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = returnTrue), e && e.stopPropagation && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    (this.isImmediatePropagationStopped = returnTrue), this.stopPropagation();
                },
            }),
            jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
                jQuery.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        if (!i || (i !== r && !jQuery.contains(r, i))) (e.type = s.origType), (n = s.handler.apply(this, arguments)), (e.type = t);
                        return n;
                    },
                };
            }),
            support.focusinBubbles ||
                jQuery.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    var n = function (e) {
                        jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0);
                    };
                    jQuery.event.special[t] = {
                        setup: function () {
                            var r = this.ownerDocument || this,
                                i = data_priv.access(r, t);
                            i || r.addEventListener(e, n, !0), data_priv.access(r, t, (i || 0) + 1);
                        },
                        teardown: function () {
                            var r = this.ownerDocument || this,
                                i = data_priv.access(r, t) - 1;
                            i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0), data_priv.remove(r, t));
                        },
                    };
                }),
            jQuery.fn.extend({
                on: function (e, t, n, r, i) {
                    var s, o;
                    if (typeof e == "object") {
                        typeof t != "string" && ((n = n || t), (t = undefined));
                        for (o in e) this.on(o, t, n, e[o], i);
                        return this;
                    }
                    n == null && r == null ? ((r = t), (n = t = undefined)) : r == null && (typeof t == "string" ? ((r = n), (n = undefined)) : ((r = n), (n = t), (t = undefined)));
                    if (r === !1) r = returnFalse;
                    else if (!r) return this;
                    return (
                        i === 1 &&
                            ((s = r),
                            (r = function (e) {
                                return jQuery().off(e), s.apply(this, arguments);
                            }),
                            (r.guid = s.guid || (s.guid = jQuery.guid++))),
                        this.each(function () {
                            jQuery.event.add(this, e, r, n, t);
                        })
                    );
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1);
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if (typeof e == "object") {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    if (t === !1 || typeof t == "function") (n = t), (t = undefined);
                    return (
                        n === !1 && (n = returnFalse),
                        this.each(function () {
                            jQuery.event.remove(this, e, n, t);
                        })
                    );
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        jQuery.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return jQuery.event.trigger(e, t, n, !0);
                },
            });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/,
            rhtml = /<|&#?\w+;/,
            rnoInnerhtml = /<(?:script|style|link)/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        (wrapMap.optgroup = wrapMap.option),
            (wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead),
            (wrapMap.th = wrapMap.td),
            jQuery.extend({
                clone: function (e, t, n) {
                    var r,
                        i,
                        s,
                        o,
                        u = e.cloneNode(!0),
                        a = jQuery.contains(e.ownerDocument, e);
                    if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
                        (o = getAll(u)), (s = getAll(e));
                        for (r = 0, i = s.length; r < i; r++) fixInput(s[r], o[r]);
                    }
                    if (t)
                        if (n) {
                            (s = s || getAll(e)), (o = o || getAll(u));
                            for (r = 0, i = s.length; r < i; r++) cloneCopyEvent(s[r], o[r]);
                        } else cloneCopyEvent(e, u);
                    return (o = getAll(u, "script")), o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")), u;
                },
                buildFragment: function (e, t, n, r) {
                    var i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        l = t.createDocumentFragment(),
                        c = [],
                        h = 0,
                        p = e.length;
                    for (; h < p; h++) {
                        i = e[h];
                        if (i || i === 0)
                            if (jQuery.type(i) === "object") jQuery.merge(c, i.nodeType ? [i] : i);
                            else if (!rhtml.test(i)) c.push(t.createTextNode(i));
                            else {
                                (s = s || l.appendChild(t.createElement("div"))),
                                    (o = (rtagName.exec(i) || ["", ""])[1].toLowerCase()),
                                    (u = wrapMap[o] || wrapMap._default),
                                    (s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2]),
                                    (f = u[0]);
                                while (f--) s = s.lastChild;
                                jQuery.merge(c, s.childNodes), (s = l.firstChild), (s.textContent = "");
                            }
                    }
                    (l.textContent = ""), (h = 0);
                    while ((i = c[h++])) {
                        if (r && jQuery.inArray(i, r) !== -1) continue;
                        (a = jQuery.contains(i.ownerDocument, i)), (s = getAll(l.appendChild(i), "script")), a && setGlobalEval(s);
                        if (n) {
                            f = 0;
                            while ((i = s[f++])) rscriptType.test(i.type || "") && n.push(i);
                        }
                    }
                    return l;
                },
                cleanData: function (e) {
                    var t,
                        n,
                        r,
                        i,
                        s,
                        o,
                        u = jQuery.event.special,
                        a = 0;
                    for (; (n = e[a]) !== undefined; a++) {
                        if (jQuery.acceptData(n)) {
                            s = n[data_priv.expando];
                            if (s && (t = data_priv.cache[s])) {
                                r = Object.keys(t.events || {});
                                if (r.length) for (o = 0; (i = r[o]) !== undefined; o++) u[i] ? jQuery.event.remove(n, i) : jQuery.removeEvent(n, i, t.handle);
                                data_priv.cache[s] && delete data_priv.cache[s];
                            }
                        }
                        delete data_user.cache[n[data_user.expando]];
                    }
                },
            }),
            jQuery.fn.extend({
                text: function (e) {
                    return access(
                        this,
                        function (e) {
                            return e === undefined
                                ? jQuery.text(this)
                                : this.empty().each(function () {
                                      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = e;
                                  });
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = manipulationTarget(this, e);
                            t.appendChild(e);
                        }
                    });
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = manipulationTarget(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    });
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                remove: function (e, t) {
                    var n,
                        r = e ? jQuery.filter(e, this) : this,
                        i = 0;
                    for (; (n = r[i]) != null; i++) !t && n.nodeType === 1 && jQuery.cleanData(getAll(n)), n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
                    return this;
                },
                empty: function () {
                    var e,
                        t = 0;
                    for (; (e = this[t]) != null; t++) e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)), (e.textContent = ""));
                    return this;
                },
                clone: function (e, t) {
                    return (
                        (e = e == null ? !1 : e),
                        (t = t == null ? e : t),
                        this.map(function () {
                            return jQuery.clone(this, e, t);
                        })
                    );
                },
                html: function (e) {
                    return access(
                        this,
                        function (e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (e === undefined && t.nodeType === 1) return t.innerHTML;
                            if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = e.replace(rxhtmlTag, "<$1></$2>");
                                try {
                                    for (; n < r; n++) (t = this[n] || {}), t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)), (t.innerHTML = e));
                                    t = 0;
                                } catch (i) {}
                            }
                            t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var e = arguments[0];
                    return (
                        this.domManip(arguments, function (t) {
                            (e = this.parentNode), jQuery.cleanData(getAll(this)), e && e.replaceChild(t, this);
                        }),
                        e && (e.length || e.nodeType) ? this : this.remove()
                    );
                },
                detach: function (e) {
                    return this.remove(e, !0);
                },
                domManip: function (e, t) {
                    e = concat.apply([], e);
                    var n,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a = 0,
                        f = this.length,
                        l = this,
                        c = f - 1,
                        h = e[0],
                        p = jQuery.isFunction(h);
                    if (p || (f > 1 && typeof h == "string" && !support.checkClone && rchecked.test(h)))
                        return this.each(function (n) {
                            var r = l.eq(n);
                            p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t);
                        });
                    if (f) {
                        (n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this)), (r = n.firstChild), n.childNodes.length === 1 && (n = r);
                        if (r) {
                            (i = jQuery.map(getAll(n, "script"), disableScript)), (s = i.length);
                            for (; a < f; a++) (o = n), a !== c && ((o = jQuery.clone(o, !0, !0)), s && jQuery.merge(i, getAll(o, "script"))), t.call(this[a], o, a);
                            if (s) {
                                (u = i[i.length - 1].ownerDocument), jQuery.map(i, restoreScript);
                                for (a = 0; a < s; a++)
                                    (o = i[a]),
                                        rscriptType.test(o.type || "") &&
                                            !data_priv.access(o, "globalEval") &&
                                            jQuery.contains(u, o) &&
                                            (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")));
                            }
                        }
                    }
                    return this;
                },
            }),
            jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                jQuery.fn[e] = function (e) {
                    var n,
                        r = [],
                        i = jQuery(e),
                        s = i.length - 1,
                        o = 0;
                    for (; o <= s; o++) (n = o === s ? this : this.clone(!0)), jQuery(i[o])[t](n), push.apply(r, n.get());
                    return this.pushStack(r);
                };
            });
        var iframe,
            elemdisplay = {},
            rmargin = /^margin/,
            rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
            getStyles = function (e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null);
            };
        (function () {
            function o() {
                (s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"), r.appendChild(i);
                var n = window.getComputedStyle(s, null);
                (e = n.top !== "1%"), (t = n.width === "4px"), r.removeChild(i);
            }
            var e,
                t,
                n = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                r = document.documentElement,
                i = document.createElement("div"),
                s = document.createElement("div");
            (s.style.backgroundClip = "content-box"),
                (s.cloneNode(!0).style.backgroundClip = ""),
                (support.clearCloneStyle = s.style.backgroundClip === "content-box"),
                (i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                i.appendChild(s),
                window.getComputedStyle &&
                    jQuery.extend(support, {
                        pixelPosition: function () {
                            return o(), e;
                        },
                        boxSizingReliable: function () {
                            return t == null && o(), t;
                        },
                        reliableMarginRight: function () {
                            var e,
                                t = s.appendChild(document.createElement("div"));
                            return (
                                (t.style.cssText = s.style.cssText = n),
                                (t.style.marginRight = t.style.width = "0"),
                                (s.style.width = "1px"),
                                r.appendChild(i),
                                (e = !parseFloat(window.getComputedStyle(t, null).marginRight)),
                                r.removeChild(i),
                                (s.innerHTML = ""),
                                e
                            );
                        },
                    });
        })(),
            (jQuery.swap = function (e, t, n, r) {
                var i,
                    s,
                    o = {};
                for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
                i = n.apply(e, r || []);
                for (s in t) e.style[s] = o[s];
                return i;
            });
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
            rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
            cssShow = { position: "absolute", visibility: "hidden", display: "block" },
            cssNormalTransform = { letterSpacing: 0, fontWeight: 400 },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = curCSS(e, "opacity");
                            return n === "" ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: "cssFloat" },
            style: function (e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var i,
                    s,
                    o,
                    u = jQuery.camelCase(t),
                    a = e.style;
                (t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u))), (o = jQuery.cssHooks[t] || jQuery.cssHooks[u]);
                if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
                (s = typeof n), s === "string" && (i = rrelNum.exec(n)) && ((n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t))), (s = "number"));
                if (n == null || n !== n) return;
                s === "number" && !jQuery.cssNumber[u] && (n += "px"), !support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
                if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) (a[t] = ""), (a[t] = n);
            },
            css: function (e, t, n, r) {
                var i,
                    s,
                    o,
                    u = jQuery.camelCase(t);
                return (
                    (t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u))),
                    (o = jQuery.cssHooks[t] || jQuery.cssHooks[u]),
                    o && "get" in o && (i = o.get(e, !0, n)),
                    i === undefined && (i = curCSS(e, t, r)),
                    i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]),
                    n === "" || n ? ((s = parseFloat(i)), n === !0 || jQuery.isNumeric(s) ? s || 0 : i) : i
                );
            },
        }),
            jQuery.each(["height", "width"], function (e, t) {
                jQuery.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n)
                            return e.offsetWidth === 0 && rdisplayswap.test(jQuery.css(e, "display"))
                                ? jQuery.swap(e, cssShow, function () {
                                      return getWidthOrHeight(e, t, r);
                                  })
                                : getWidthOrHeight(e, t, r);
                    },
                    set: function (e, n, r) {
                        var i = r && getStyles(e);
                        return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0);
                    },
                };
            }),
            (jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (e, t) {
                if (t) return jQuery.swap(e, { display: "inline-block" }, curCSS, [e, "marginRight"]);
            })),
            jQuery.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                (jQuery.cssHooks[e + t] = {
                    expand: function (n) {
                        var r = 0,
                            i = {},
                            s = typeof n == "string" ? n.split(" ") : [n];
                        for (; r < 4; r++) i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
                        return i;
                    },
                }),
                    rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber);
            }),
            jQuery.fn.extend({
                css: function (e, t) {
                    return access(
                        this,
                        function (e, t, n) {
                            var r,
                                i,
                                s = {},
                                o = 0;
                            if (jQuery.isArray(t)) {
                                (r = getStyles(e)), (i = t.length);
                                for (; o < i; o++) s[t[o]] = jQuery.css(e, t[o], !1, r);
                                return s;
                            }
                            return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t);
                        },
                        e,
                        t,
                        arguments.length > 1
                    );
                },
                show: function () {
                    return showHide(this, !0);
                },
                hide: function () {
                    return showHide(this);
                },
                toggle: function (e) {
                    return typeof e == "boolean"
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
                          });
                },
            }),
            (jQuery.Tween = Tween),
            (Tween.prototype = {
                constructor: Tween,
                init: function (e, t, n, r, i, s) {
                    (this.elem = e), (this.prop = n), (this.easing = i || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = s || (jQuery.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                    var e = Tween.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Tween.propHooks._default.get(this);
                },
                run: function (e) {
                    var t,
                        n = Tween.propHooks[this.prop];
                    return (
                        this.options.duration ? (this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (Tween.prototype.init.prototype = Tween.prototype),
            (Tween.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return e.elem[e.prop] == null || (!!e.elem.style && e.elem.style[e.prop] != null) ? ((t = jQuery.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
                    },
                    set: function (e) {
                        jQuery.fx.step[e.prop]
                            ? jQuery.fx.step[e.prop](e)
                            : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop])
                            ? jQuery.style(e.elem, e.prop, e.now + e.unit)
                            : (e.elem[e.prop] = e.now);
                    },
                },
            }),
            (Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
            (jQuery.easing = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
            }),
            (jQuery.fx = Tween.prototype.init),
            (jQuery.fx.step = {});
        var fxNow,
            timerId,
            rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
            rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter],
            tweeners = {
                "*": [
                    function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = rfxnum.exec(t),
                            s = (i && i[3]) || (jQuery.cssNumber[e] ? "" : "px"),
                            o = (jQuery.cssNumber[e] || (s !== "px" && +r)) && rfxnum.exec(jQuery.css(n.elem, e)),
                            u = 1,
                            a = 20;
                        if (o && o[3] !== s) {
                            (s = s || o[3]), (i = i || []), (o = +r || 1);
                            do (u = u || ".5"), (o /= u), jQuery.style(n.elem, e, o + s);
                            while (u !== (u = n.cur() / r) && u !== 1 && --a);
                        }
                        return i && ((o = n.start = +o || +r || 0), (n.unit = s), (n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2])), n;
                    },
                ],
            };
        (jQuery.Animation = jQuery.extend(Animation, {
            tweener: function (e, t) {
                jQuery.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
                var n,
                    r = 0,
                    i = e.length;
                for (; r < i; r++) (n = e[r]), (tweeners[n] = tweeners[n] || []), tweeners[n].unshift(t);
            },
            prefilter: function (e, t) {
                t ? animationPrefilters.unshift(e) : animationPrefilters.push(e);
            },
        })),
            (jQuery.speed = function (e, t, n) {
                var r = e && typeof e == "object" ? jQuery.extend({}, e) : { complete: n || (!n && t) || (jQuery.isFunction(e) && e), duration: e, easing: (n && t) || (t && !jQuery.isFunction(t) && t) };
                r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
                if (r.queue == null || r.queue === !0) r.queue = "fx";
                return (
                    (r.old = r.complete),
                    (r.complete = function () {
                        jQuery.isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue);
                    }),
                    r
                );
            }),
            jQuery.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                    var i = jQuery.isEmptyObject(e),
                        s = jQuery.speed(t, n, r),
                        o = function () {
                            var t = Animation(this, jQuery.extend({}, e), s);
                            (i || data_priv.get(this, "finish")) && t.stop(!0);
                        };
                    return (o.finish = o), i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return (
                        typeof e != "string" && ((n = t), (t = e), (e = undefined)),
                        t && e !== !1 && this.queue(e || "fx", []),
                        this.each(function () {
                            var t = !0,
                                i = e != null && e + "queueHooks",
                                s = jQuery.timers,
                                o = data_priv.get(this);
                            if (i) o[i] && o[i].stop && r(o[i]);
                            else for (i in o) o[i] && o[i].stop && rrun.test(i) && r(o[i]);
                            for (i = s.length; i--; ) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
                            (t || !n) && jQuery.dequeue(this, e);
                        })
                    );
                },
                finish: function (e) {
                    return (
                        e !== !1 && (e = e || "fx"),
                        this.each(function () {
                            var t,
                                n = data_priv.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                s = jQuery.timers,
                                o = r ? r.length : 0;
                            (n.finish = !0), jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                            for (t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        })
                    );
                },
            }),
            jQuery.each(["toggle", "show", "hide"], function (e, t) {
                var n = jQuery.fn[t];
                jQuery.fn[t] = function (e, r, i) {
                    return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i);
                };
            }),
            jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                jQuery.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }),
            (jQuery.timers = []),
            (jQuery.fx.tick = function () {
                var e,
                    t = 0,
                    n = jQuery.timers;
                fxNow = jQuery.now();
                for (; t < n.length; t++) (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
                n.length || jQuery.fx.stop(), (fxNow = undefined);
            }),
            (jQuery.fx.timer = function (e) {
                jQuery.timers.push(e), e() ? jQuery.fx.start() : jQuery.timers.pop();
            }),
            (jQuery.fx.interval = 13),
            (jQuery.fx.start = function () {
                timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval));
            }),
            (jQuery.fx.stop = function () {
                clearInterval(timerId), (timerId = null);
            }),
            (jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (jQuery.fn.delay = function (e, t) {
                return (
                    (e = jQuery.fx ? jQuery.fx.speeds[e] || e : e),
                    (t = t || "fx"),
                    this.queue(t, function (t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(r);
                        };
                    })
                );
            }),
            (function () {
                var e = document.createElement("input"),
                    t = document.createElement("select"),
                    n = t.appendChild(document.createElement("option"));
                (e.type = "checkbox"),
                    (support.checkOn = e.value !== ""),
                    (support.optSelected = n.selected),
                    (t.disabled = !0),
                    (support.optDisabled = !n.disabled),
                    (e = document.createElement("input")),
                    (e.value = "t"),
                    (e.type = "radio"),
                    (support.radioValue = e.value === "t");
            })();
        var nodeHook,
            boolHook,
            attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function (e, t) {
                return access(this, jQuery.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
                return this.each(function () {
                    jQuery.removeAttr(this, e);
                });
            },
        }),
            jQuery.extend({
                attr: function (e, t, n) {
                    var r,
                        i,
                        s = e.nodeType;
                    if (!e || s === 3 || s === 8 || s === 2) return;
                    if (typeof e.getAttribute === strundefined) return jQuery.prop(e, t, n);
                    if (s !== 1 || !jQuery.isXMLDoc(e)) (t = t.toLowerCase()), (r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook));
                    if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : ((i = jQuery.find.attr(e, t)), i == null ? undefined : i);
                    if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
                    jQuery.removeAttr(e, t);
                },
                removeAttr: function (e, t) {
                    var n,
                        r,
                        i = 0,
                        s = t && t.match(rnotwhite);
                    if (s && e.nodeType === 1) while ((n = s[i++])) (r = jQuery.propFix[n] || n), jQuery.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        },
                    },
                },
            }),
            (boolHook = {
                set: function (e, t, n) {
                    return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
            }),
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = attrHandle[t] || jQuery.find.attr;
                attrHandle[t] = function (e, t, r) {
                    var i, s;
                    return r || ((s = attrHandle[t]), (attrHandle[t] = i), (i = n(e, t, r) != null ? t.toLowerCase() : null), (attrHandle[t] = s)), i;
                };
            });
        var rfocusable = /^(?:input|select|textarea|button)$/i;
        jQuery.fn.extend({
            prop: function (e, t) {
                return access(this, jQuery.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[jQuery.propFix[e] || e];
                });
            },
        }),
            jQuery.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (e, t, n) {
                    var r,
                        i,
                        s,
                        o = e.nodeType;
                    if (!e || o === 3 || o === 8 || o === 2) return;
                    return (
                        (s = o !== 1 || !jQuery.isXMLDoc(e)),
                        s && ((t = jQuery.propFix[t] || t), (i = jQuery.propHooks[t])),
                        n !== undefined ? (i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e[t] = n)) : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
                    );
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1;
                        },
                    },
                },
            }),
            support.optSelected ||
                (jQuery.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                }),
            jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                jQuery.propFix[this.toLowerCase()] = this;
            });
        var rclass = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    u = typeof e == "string" && e,
                    a = 0,
                    f = this.length;
                if (jQuery.isFunction(e))
                    return this.each(function (t) {
                        jQuery(this).addClass(e.call(this, t, this.className));
                    });
                if (u) {
                    t = (e || "").match(rnotwhite) || [];
                    for (; a < f; a++) {
                        (n = this[a]), (r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " "));
                        if (r) {
                            s = 0;
                            while ((i = t[s++])) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            (o = jQuery.trim(r)), n.className !== o && (n.className = o);
                        }
                    }
                }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    u = arguments.length === 0 || (typeof e == "string" && e),
                    a = 0,
                    f = this.length;
                if (jQuery.isFunction(e))
                    return this.each(function (t) {
                        jQuery(this).removeClass(e.call(this, t, this.className));
                    });
                if (u) {
                    t = (e || "").match(rnotwhite) || [];
                    for (; a < f; a++) {
                        (n = this[a]), (r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : ""));
                        if (r) {
                            s = 0;
                            while ((i = t[s++])) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                            (o = e ? jQuery.trim(r) : ""), n.className !== o && (n.className = o);
                        }
                    }
                }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return typeof t == "boolean" && n === "string"
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : jQuery.isFunction(e)
                    ? this.each(function (n) {
                          jQuery(this).toggleClass(e.call(this, n, this.className, t), t);
                      })
                    : this.each(function () {
                          if (n === "string") {
                              var t,
                                  r = 0,
                                  i = jQuery(this),
                                  s = e.match(rnotwhite) || [];
                              while ((t = s[r++])) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                          } else if (n === strundefined || n === "boolean") this.className && data_priv.set(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : data_priv.get(this, "__className__") || "");
                      });
            },
            hasClass: function (e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0) return !0;
                return !1;
            },
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function (e) {
                var t,
                    n,
                    r,
                    i = this[0];
                if (!arguments.length) {
                    if (i)
                        return (
                            (t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()]),
                            t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : ((n = i.value), typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n)
                        );
                    return;
                }
                return (
                    (r = jQuery.isFunction(e)),
                    this.each(function (n) {
                        var i;
                        if (this.nodeType !== 1) return;
                        r ? (i = e.call(this, n, jQuery(this).val())) : (i = e),
                            i == null
                                ? (i = "")
                                : typeof i == "number"
                                ? (i += "")
                                : jQuery.isArray(i) &&
                                  (i = jQuery.map(i, function (e) {
                                      return e == null ? "" : e + "";
                                  })),
                            (t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]);
                        if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i;
                    })
                );
            },
        }),
            jQuery.extend({
                valHooks: {
                    select: {
                        get: function (e) {
                            var t,
                                n,
                                r = e.options,
                                i = e.selectedIndex,
                                s = e.type === "select-one" || i < 0,
                                o = s ? null : [],
                                u = s ? i + 1 : r.length,
                                a = i < 0 ? u : s ? i : 0;
                            for (; a < u; a++) {
                                n = r[a];
                                if ((n.selected || a === i) && (support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
                                    t = jQuery(n).val();
                                    if (s) return t;
                                    o.push(t);
                                }
                            }
                            return o;
                        },
                        set: function (e, t) {
                            var n,
                                r,
                                i = e.options,
                                s = jQuery.makeArray(t),
                                o = i.length;
                            while (o--) {
                                r = i[o];
                                if ((r.selected = jQuery.inArray(jQuery(r).val(), s) >= 0)) n = !0;
                            }
                            return n || (e.selectedIndex = -1), s;
                        },
                    },
                },
            }),
            jQuery.each(["radio", "checkbox"], function () {
                (jQuery.valHooks[this] = {
                    set: function (e, t) {
                        if (jQuery.isArray(t)) return (e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0);
                    },
                }),
                    support.checkOn ||
                        (jQuery.valHooks[this].get = function (e) {
                            return e.getAttribute("value") === null ? "on" : e.value;
                        });
            }),
            jQuery.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function (e, t) {
                    jQuery.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }
            ),
            jQuery.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
                },
            });
        var nonce = jQuery.now(),
            rquery = /\?/;
        (jQuery.parseJSON = function (e) {
            return JSON.parse(e + "");
        }),
            (jQuery.parseXML = function (e) {
                var t, n;
                if (!e || typeof e != "string") return null;
                try {
                    (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
                } catch (r) {
                    t = undefined;
                }
                return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e), t;
            });
        var ajaxLocParts,
            ajaxLocation,
            rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*");
        try {
            ajaxLocation = location.href;
        } catch (e) {
            (ajaxLocation = document.createElement("a")), (ajaxLocation.href = ""), (ajaxLocation = ajaxLocation.href);
        }
        (ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []),
            jQuery.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ajaxLocation,
                    type: "GET",
                    isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /xml/, html: /html/, json: /json/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                    return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e);
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function (e, t) {
                    function S(e, t, s, u) {
                        var f,
                            m,
                            g,
                            b,
                            E,
                            S = t;
                        if (y === 2) return;
                        (y = 2), o && clearTimeout(o), (n = undefined), (i = u || ""), (w.readyState = e > 0 ? 4 : 0), (f = (e >= 200 && e < 300) || e === 304), s && (b = ajaxHandleResponses(l, w, s)), (b = ajaxConvert(l, b, w, f));
                        if (f)
                            l.ifModified && ((E = w.getResponseHeader("Last-Modified")), E && (jQuery.lastModified[r] = E), (E = w.getResponseHeader("etag")), E && (jQuery.etag[r] = E)),
                                e === 204 || l.type === "HEAD" ? (S = "nocontent") : e === 304 ? (S = "notmodified") : ((S = b.state), (m = b.data), (g = b.error), (f = !g));
                        else {
                            g = S;
                            if (e || !S) (S = "error"), e < 0 && (e = 0);
                        }
                        (w.status = e),
                            (w.statusText = (t || S) + ""),
                            f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]),
                            w.statusCode(v),
                            (v = undefined),
                            a && h.trigger(f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m : g]),
                            d.fireWith(c, [w, S]),
                            a && (h.trigger("ajaxComplete", [w, l]), --jQuery.active || jQuery.event.trigger("ajaxStop"));
                    }
                    typeof e == "object" && ((t = e), (e = undefined)), (t = t || {});
                    var n,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        l = jQuery.ajaxSetup({}, t),
                        c = l.context || l,
                        h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event,
                        p = jQuery.Deferred(),
                        d = jQuery.Callbacks("once memory"),
                        v = l.statusCode || {},
                        m = {},
                        g = {},
                        y = 0,
                        b = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (y === 2) {
                                    if (!s) {
                                        s = {};
                                        while ((t = rheaders.exec(i))) s[t[1].toLowerCase()] = t[2];
                                    }
                                    t = s[e.toLowerCase()];
                                }
                                return t == null ? null : t;
                            },
                            getAllResponseHeaders: function () {
                                return y === 2 ? i : null;
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return y || ((e = g[n] = g[n] || e), (m[e] = t)), this;
                            },
                            overrideMimeType: function (e) {
                                return y || (l.mimeType = e), this;
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (y < 2) for (t in e) v[t] = [v[t], e[t]];
                                    else w.always(e[w.status]);
                                return this;
                            },
                            abort: function (e) {
                                var t = e || b;
                                return n && n.abort(t), S(0, t), this;
                            },
                        };
                    (p.promise(w).complete = d.add),
                        (w.success = w.done),
                        (w.error = w.fail),
                        (l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//")),
                        (l.type = t.method || t.type || l.method || l.type),
                        (l.dataTypes = jQuery
                            .trim(l.dataType || "*")
                            .toLowerCase()
                            .match(rnotwhite) || [""]),
                        l.crossDomain == null &&
                            ((u = rurl.exec(l.url.toLowerCase())),
                            (l.crossDomain = !(!u || (u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))))),
                        l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)),
                        inspectPrefiltersOrTransports(prefilters, l, t, w);
                    if (y === 2) return w;
                    (a = l.global),
                        a && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"),
                        (l.type = l.type.toUpperCase()),
                        (l.hasContent = !rnoContent.test(l.type)),
                        (r = l.url),
                        l.hasContent ||
                            (l.data && ((r = l.url += (rquery.test(r) ? "&" : "?") + l.data), delete l.data), l.cache === !1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++)),
                        l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])),
                        ((l.data && l.hasContent && l.contentType !== !1) || t.contentType) && w.setRequestHeader("Content-Type", l.contentType),
                        w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
                    for (f in l.headers) w.setRequestHeader(f, l.headers[f]);
                    if (!l.beforeSend || (l.beforeSend.call(c, w, l) !== !1 && y !== 2)) {
                        b = "abort";
                        for (f in { success: 1, error: 1, complete: 1 }) w[f](l[f]);
                        n = inspectPrefiltersOrTransports(transports, l, t, w);
                        if (!n) S(-1, "No Transport");
                        else {
                            (w.readyState = 1),
                                a && h.trigger("ajaxSend", [w, l]),
                                l.async &&
                                    l.timeout > 0 &&
                                    (o = setTimeout(function () {
                                        w.abort("timeout");
                                    }, l.timeout));
                            try {
                                (y = 1), n.send(m, S);
                            } catch (E) {
                                if (!(y < 2)) throw E;
                                S(-1, E);
                            }
                        }
                        return w;
                    }
                    return w.abort();
                },
                getJSON: function (e, t, n) {
                    return jQuery.get(e, t, n, "json");
                },
                getScript: function (e, t) {
                    return jQuery.get(e, undefined, t, "script");
                },
            }),
            jQuery.each(["get", "post"], function (e, t) {
                jQuery[t] = function (e, n, r, i) {
                    return jQuery.isFunction(n) && ((i = i || r), (r = n), (n = undefined)), jQuery.ajax({ url: e, type: t, dataType: i, data: n, success: r });
                };
            }),
            jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                jQuery.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            (jQuery._evalUrl = function (e) {
                return jQuery.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
            }),
            jQuery.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return jQuery.isFunction(e)
                        ? this.each(function (t) {
                              jQuery(this).wrapAll(e.call(this, t));
                          })
                        : (this[0] &&
                              ((t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0)),
                              this[0].parentNode && t.insertBefore(this[0]),
                              t
                                  .map(function () {
                                      var e = this;
                                      while (e.firstElementChild) e = e.firstElementChild;
                                      return e;
                                  })
                                  .append(this)),
                          this);
                },
                wrapInner: function (e) {
                    return jQuery.isFunction(e)
                        ? this.each(function (t) {
                              jQuery(this).wrapInner(e.call(this, t));
                          })
                        : this.each(function () {
                              var t = jQuery(this),
                                  n = t.contents();
                              n.length ? n.wrapAll(e) : t.append(e);
                          });
                },
                wrap: function (e) {
                    var t = jQuery.isFunction(e);
                    return this.each(function (n) {
                        jQuery(this).wrapAll(t ? e.call(this, n) : e);
                    });
                },
                unwrap: function () {
                    return this.parent()
                        .each(function () {
                            jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (jQuery.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0;
            }),
            (jQuery.expr.filters.visible = function (e) {
                return !jQuery.expr.filters.hidden(e);
            });
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        (jQuery.param = function (e, t) {
            var n,
                r = [],
                i = function (e, t) {
                    (t = jQuery.isFunction(t) ? t() : t == null ? "" : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
                };
            t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
            if (jQuery.isArray(e) || (e.jquery && !jQuery.isPlainObject(e)))
                jQuery.each(e, function () {
                    i(this.name, this.value);
                });
            else for (n in e) buildParams(n, e[n], t, i);
            return r.join("&").replace(r20, "+");
        }),
            jQuery.fn.extend({
                serialize: function () {
                    return jQuery.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = jQuery.prop(this, "elements");
                        return e ? jQuery.makeArray(e) : this;
                    })
                        .filter(function () {
                            var e = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e));
                        })
                        .map(function (e, t) {
                            var n = jQuery(this).val();
                            return n == null
                                ? null
                                : jQuery.isArray(n)
                                ? jQuery.map(n, function (e) {
                                      return { name: t.name, value: e.replace(rCRLF, "\r\n") };
                                  })
                                : { name: t.name, value: n.replace(rCRLF, "\r\n") };
                        })
                        .get();
                },
            }),
            (jQuery.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest();
                } catch (e) {}
            });
        var xhrId = 0,
            xhrCallbacks = {},
            xhrSuccessStatus = { 0: 200, 1223: 204 },
            xhrSupported = jQuery.ajaxSettings.xhr();
        window.ActiveXObject &&
            jQuery(window).on("unload", function () {
                for (var e in xhrCallbacks) xhrCallbacks[e]();
            }),
            (support.cors = !!xhrSupported && "withCredentials" in xhrSupported),
            (support.ajax = xhrSupported = !!xhrSupported),
            jQuery.ajaxTransport(function (e) {
                var t;
                if (support.cors || (xhrSupported && !e.crossDomain))
                    return {
                        send: function (n, r) {
                            var i,
                                s = e.xhr(),
                                o = ++xhrId;
                            s.open(e.type, e.url, e.async, e.username, e.password);
                            if (e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n) s.setRequestHeader(i, n[i]);
                            (t = function (e) {
                                return function () {
                                    t &&
                                        (delete xhrCallbacks[o],
                                        (t = s.onload = s.onerror = null),
                                        e === "abort"
                                            ? s.abort()
                                            : e === "error"
                                            ? r(s.status, s.statusText)
                                            : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
                                };
                            }),
                                (s.onload = t()),
                                (s.onerror = t("error")),
                                (t = xhrCallbacks[o] = t("abort")),
                                s.send((e.hasContent && e.data) || null);
                        },
                        abort: function () {
                            t && t();
                        },
                    };
            }),
            jQuery.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                    "text script": function (e) {
                        return jQuery.globalEval(e), e;
                    },
                },
            }),
            jQuery.ajaxPrefilter("script", function (e) {
                e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            jQuery.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            (t = jQuery("<script>")
                                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                                .on(
                                    "load error",
                                    (n = function (e) {
                                        t.remove(), (n = null), e && i(e.type === "error" ? 404 : 200, e.type);
                                    })
                                )),
                                document.head.appendChild(t[0]);
                        },
                        abort: function () {
                            n && n();
                        },
                    };
                }
            });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                return (this[e] = !0), e;
            },
        }),
            jQuery.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r,
                    i,
                    s,
                    o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
                if (o || e.dataTypes[0] === "jsonp")
                    return (
                        (r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        o ? (e[o] = e[o].replace(rjsonp, "$1" + r)) : e.jsonp !== !1 && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        (e.converters["script json"] = function () {
                            return s || jQuery.error(r + " was not called"), s[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (i = window[r]),
                        (window[r] = function () {
                            s = arguments;
                        }),
                        n.always(function () {
                            (window[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), oldCallbacks.push(r)), s && jQuery.isFunction(i) && i(s[0]), (s = i = undefined);
                        }),
                        "script"
                    );
            }),
            (jQuery.parseHTML = function (e, t, n) {
                if (!e || typeof e != "string") return null;
                typeof t == "boolean" && ((n = t), (t = !1)), (t = t || document);
                var r = rsingleTag.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : ((r = jQuery.buildFragment([e], t, i)), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes));
            });
        var _load = jQuery.fn.load;
        (jQuery.fn.load = function (e, t, n) {
            if (typeof e != "string" && _load) return _load.apply(this, arguments);
            var r,
                i,
                s,
                o = this,
                u = e.indexOf(" ");
            return (
                u >= 0 && ((r = e.slice(u)), (e = e.slice(0, u))),
                jQuery.isFunction(t) ? ((n = t), (t = undefined)) : t && typeof t == "object" && (i = "POST"),
                o.length > 0 &&
                    jQuery
                        .ajax({ url: e, type: i, dataType: "html", data: t })
                        .done(function (e) {
                            (s = arguments), o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e);
                        })
                        .complete(
                            n &&
                                function (e, t) {
                                    o.each(n, s || [e.responseText, t, e]);
                                }
                        ),
                this
            );
        }),
            (jQuery.expr.filters.animated = function (e) {
                return jQuery.grep(jQuery.timers, function (t) {
                    return e === t.elem;
                }).length;
            });
        var docElem = window.document.documentElement;
        (jQuery.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l = jQuery.css(e, "position"),
                    c = jQuery(e),
                    h = {};
                l === "static" && (e.style.position = "relative"),
                    (u = c.offset()),
                    (s = jQuery.css(e, "top")),
                    (a = jQuery.css(e, "left")),
                    (f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1),
                    f ? ((r = c.position()), (o = r.top), (i = r.left)) : ((o = parseFloat(s) || 0), (i = parseFloat(a) || 0)),
                    jQuery.isFunction(t) && (t = t.call(e, n, u)),
                    t.top != null && (h.top = t.top - u.top + o),
                    t.left != null && (h.left = t.left - u.left + i),
                    "using" in t ? t.using.call(e, h) : c.css(h);
            },
        }),
            jQuery.fn.extend({
                offset: function (e) {
                    if (arguments.length)
                        return e === undefined
                            ? this
                            : this.each(function (t) {
                                  jQuery.offset.setOffset(this, e, t);
                              });
                    var t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 },
                        s = r && r.ownerDocument;
                    if (!s) return;
                    return (
                        (t = s.documentElement),
                        jQuery.contains(t, r)
                            ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()), (n = getWindow(s)), { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft })
                            : i
                    );
                },
                position: function () {
                    if (!this[0]) return;
                    var e,
                        t,
                        n = this[0],
                        r = { top: 0, left: 0 };
                    return (
                        jQuery.css(n, "position") === "fixed"
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()), (t = this.offset()), jQuery.nodeName(e[0], "html") || (r = e.offset()), (r.top += jQuery.css(e[0], "borderTopWidth", !0)), (r.left += jQuery.css(e[0], "borderLeftWidth", !0))),
                        { top: t.top - r.top - jQuery.css(n, "marginTop", !0), left: t.left - r.left - jQuery.css(n, "marginLeft", !0) }
                    );
                },
                offsetParent: function () {
                    return this.map(function () {
                        var e = this.offsetParent || docElem;
                        while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static") e = e.offsetParent;
                        return e || docElem;
                    });
                },
            }),
            jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                var n = "pageYOffset" === t;
                jQuery.fn[e] = function (r) {
                    return access(
                        this,
                        function (e, r, i) {
                            var s = getWindow(e);
                            if (i === undefined) return s ? s[t] : e[r];
                            s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : (e[r] = i);
                        },
                        e,
                        r,
                        arguments.length,
                        null
                    );
                };
            }),
            jQuery.each(["top", "left"], function (e, t) {
                jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function (e, n) {
                    if (n) return (n = curCSS(e, t)), rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n;
                });
            }),
            jQuery.each({ Height: "height", Width: "width" }, function (e, t) {
                jQuery.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                    jQuery.fn[r] = function (r, i) {
                        var s = arguments.length && (n || typeof r != "boolean"),
                            o = n || (r === !0 || i === !0 ? "margin" : "border");
                        return access(
                            this,
                            function (t, n, r) {
                                var i;
                                return jQuery.isWindow(t)
                                    ? t.document.documentElement["client" + e]
                                    : t.nodeType === 9
                                    ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                    : r === undefined
                                    ? jQuery.css(t, n, o)
                                    : jQuery.style(t, n, r, o);
                            },
                            t,
                            s ? r : undefined,
                            s,
                            null
                        );
                    };
                });
            }),
            (jQuery.fn.size = function () {
                return this.length;
            }),
            (jQuery.fn.andSelf = jQuery.fn.addBack),
            typeof define == "function" &&
                define.amd &&
                define("jquery", [], function () {
                    return jQuery;
                });
        var _jQuery = window.jQuery,
            _$ = window.$;
        return (
            (jQuery.noConflict = function (e) {
                return window.$ === jQuery && (window.$ = _$), e && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
            }),
            typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery),
            jQuery
        );
    });
var BrowserDetect;
(function () {
    "use strict";
    (BrowserDetect = {
        init: function () {
            (this.browser = this.searchString(this.dataBrowser) || "An unknown browser"),
                (this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"),
                (this.OS = this.searchString(this.dataOS) || "an unknown OS");
        },
        searchString: function (e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].string,
                    r = e[t].prop;
                this.versionSearchString = e[t].versionSearch || e[t].identity;
                if (n) {
                    if (n.indexOf(e[t].subString) !== -1) return e[t].identity;
                } else if (r) return e[t].identity;
            }
            return void 0;
        },
        searchVersion: function (e) {
            var t = e.indexOf(this.versionSearchString);
            if (t === -1) return void 0;
            var n = e.substring(t + this.versionSearchString.length + 1),
                r = /^([0-9\.]*)/.exec(n);
            return r && r[1];
        },
        dataBrowser: [
            { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
            { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" },
            { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" },
            { prop: window.opera, identity: "Opera", versionSearch: "Version" },
            { string: navigator.vendor, subString: "iCab", identity: "iCab" },
            { string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
            { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
            { string: navigator.vendor, subString: "Camino", identity: "Camino" },
            { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" },
            { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" },
            { string: navigator.userAgent, subString: ".NET", identity: "Explorer", versionSearch: "rv" },
            { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" },
            { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" },
        ],
        dataOS: [
            { string: navigator.platform, subString: "Win", identity: "Windows" },
            { string: navigator.platform, subString: "Mac", identity: "Mac" },
            { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" },
            { string: navigator.platform, subString: "Linux", identity: "Linux" },
        ],
    }),
        BrowserDetect.init();
})(),
    typeof window != "undefined" && (window.BrowserDetect = BrowserDetect),
    define("sim-common/Detect", function () {});
var browserCheck = !0,
    checkBrowser = function (e) {
        var t = [
            { browser: "Explorer", beforeVersion: 9 },
            { browser: "Firefox", beforeVersion: 17 },
        ];
        t.push.apply(t, e);
        for (var n in t) {
            var r = t[n].browser,
                i = t[n].beforeVersion;
            if (r === window.BrowserDetect.browser && parseInt(window.BrowserDetect.version, 10) < i) {
                browserCheck = !1;
                break;
            }
        }
        return browserCheck;
    };
define("sim-common/VersionCheck", function () {}),
    define("text", ["module"], function (e) {
        "use strict";
        function v(e, t) {
            return e === undefined || e === "" ? t : e;
        }
        function m(e, t, n, r) {
            if (t === r) return !0;
            if (e === n) {
                if (e === "http") return v(t, "80") === v(r, "80");
                if (e === "https") return v(t, "443") === v(r, "443");
            }
            return !1;
        }
        var t,
            n,
            r,
            i,
            s,
            o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            f = typeof location != "undefined" && location.href,
            l = f && location.protocol && location.protocol.replace(/\:/, ""),
            c = f && location.hostname,
            h = f && (location.port || undefined),
            p = {},
            d = (e.config && e.config()) || {};
        t = {
            version: "2.0.15",
            strip: function (e) {
                if (e) {
                    e = e.replace(u, "");
                    var t = e.match(a);
                    t && (e = t[1]);
                } else e = "";
                return e;
            },
            jsEscape: function (e) {
                return e
                    .replace(/(['\\])/g, "\\$1")
                    .replace(/[\f]/g, "\\f")
                    .replace(/[\b]/g, "\\b")
                    .replace(/[\n]/g, "\\n")
                    .replace(/[\t]/g, "\\t")
                    .replace(/[\r]/g, "\\r")
                    .replace(/[\u2028]/g, "\\u2028")
                    .replace(/[\u2029]/g, "\\u2029");
            },
            createXhr:
                d.createXhr ||
                function () {
                    var e, t, n;
                    if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
                    if (typeof ActiveXObject != "undefined")
                        for (t = 0; t < 3; t += 1) {
                            n = o[t];
                            try {
                                e = new ActiveXObject(n);
                            } catch (r) {}
                            if (e) {
                                o = [n];
                                break;
                            }
                        }
                    return e;
                },
            parseName: function (e) {
                var t,
                    n,
                    r,
                    i = !1,
                    s = e.lastIndexOf("."),
                    o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
                return (
                    s !== -1 && (!o || s > 1) ? ((t = e.substring(0, s)), (n = e.substring(s + 1))) : (t = e),
                    (r = n || t),
                    (s = r.indexOf("!")),
                    s !== -1 && ((i = r.substring(s + 1) === "strip"), (r = r.substring(0, s)), n ? (n = r) : (t = r)),
                    { moduleName: t, ext: n, strip: i }
                );
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function (e, n, r, i) {
                var s,
                    o,
                    u,
                    a = t.xdRegExp.exec(e);
                return a ? ((s = a[2]), (o = a[3]), (o = o.split(":")), (u = o[1]), (o = o[0]), (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && ((!u && !o) || m(s, u, n, i))) : !0;
            },
            finishLoad: function (e, n, r, i) {
                (r = n ? t.strip(r) : r), d.isBuild && (p[e] = r), i(r);
            },
            load: function (e, n, r, i) {
                if (i && i.isBuild && !i.inlineText) {
                    r();
                    return;
                }
                d.isBuild = i && i.isBuild;
                var s = t.parseName(e),
                    o = s.moduleName + (s.ext ? "." + s.ext : ""),
                    u = n.toUrl(o),
                    a = d.useXhr || t.useXhr;
                if (u.indexOf("empty:") === 0) {
                    r();
                    return;
                }
                !f || a(u, l, c, h)
                    ? t.get(
                          u,
                          function (n) {
                              t.finishLoad(e, s.strip, n, r);
                          },
                          function (e) {
                              r.error && r.error(e);
                          }
                      )
                    : n([o], function (e) {
                          t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r);
                      });
            },
            write: function (e, n, r, i) {
                if (p.hasOwnProperty(n)) {
                    var s = t.jsEscape(p[n]);
                    r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n");
                }
            },
            writeFile: function (e, n, r, i, s) {
                var o = t.parseName(n),
                    u = o.ext ? "." + o.ext : "",
                    a = o.moduleName + u,
                    f = r.toUrl(o.moduleName + u) + ".js";
                t.load(
                    a,
                    r,
                    function (n) {
                        var r = function (e) {
                            return i(f, e);
                        };
                        (r.asModule = function (e, t) {
                            return i.asModule(e, f, t);
                        }),
                            t.write(e, a, r, s);
                    },
                    s
                );
            },
        };
        if (d.env === "node" || (!d.env && typeof process != "undefined" && process.versions && !!process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"]))
            (n = require.nodeRequire("fs")),
                (t.get = function (e, t, r) {
                    try {
                        var i = n.readFileSync(e, "utf8");
                        i[0] === "﻿" && (i = i.substring(1)), t(i);
                    } catch (s) {
                        r && r(s);
                    }
                });
        else if (d.env === "xhr" || (!d.env && t.createXhr()))
            t.get = function (e, n, r, i) {
                var s = t.createXhr(),
                    o;
                s.open("GET", e, !0);
                if (i) for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
                d.onXhr && d.onXhr(s, e),
                    (s.onreadystatechange = function (t) {
                        var i, o;
                        s.readyState === 4 && ((i = s.status || 0), i > 399 && i < 600 ? ((o = new Error(e + " HTTP status: " + i)), (o.xhr = s), r && r(o)) : n(s.responseText), d.onXhrComplete && d.onXhrComplete(s, e));
                    }),
                    s.send(null);
            };
        else if (d.env === "rhino" || (!d.env && typeof Packages != "undefined" && typeof java != "undefined"))
            t.get = function (e, t) {
                var n,
                    r,
                    i = "utf-8",
                    s = new java.io.File(e),
                    o = java.lang.System.getProperty("line.separator"),
                    u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
                    a = "";
                try {
                    (n = new java.lang.StringBuffer()), (r = u.readLine()), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), r !== null && n.append(r);
                    while ((r = u.readLine()) !== null) n.append(o), n.append(r);
                    a = String(n.toString());
                } finally {
                    u.close();
                }
                t(a);
            };
        else if (d.env === "xpconnect" || (!d.env && typeof Components != "undefined" && Components.classes && Components.interfaces))
            (r = Components.classes),
                (i = Components.interfaces),
                Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
                (s = "@mozilla.org/windows-registry-key;1" in r),
                (t.get = function (e, t) {
                    var n,
                        o,
                        u,
                        a = {};
                    s && (e = e.replace(/\//g, "\\")), (u = new FileUtils.File(e));
                    try {
                        (n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream)),
                            n.init(u, 1, 0, !1),
                            (o = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream)),
                            o.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
                            o.readString(n.available(), a),
                            o.close(),
                            n.close(),
                            t(a.value);
                    } catch (f) {
                        throw new Error(((u && u.path) || "") + ": " + f);
                    }
                });
        return t;
    }),
    define("text!sim-common/templates/notSupported.html", [], function () {
        return '<div class="browser-unsupported">\n  <div class="message">\n    The browser does not support this simulation.\n    <br />\n    Please upgrade your browser with one of the following:\n  </div>\n  <div class="browsers">\n    <a href="http://www.google.com/chrome" target="_blank">\n      <div class="browser chrome">\n        <div class="bg"></div>\n        <div class="logo"></div>\n      </div>\n    </a>\n    <a href="http://www.firefox.com/" target="_blank">\n      <div class="browser firefox">\n        <div class="bg"></div>\n        <div class="logo"></div>\n      </div>\n    </a>\n    <a href="http://www.apple.com/safari/" target="_blank">\n      <div class="browser safari">\n        <div class="bg"></div>\n        <div class="logo"></div>\n      </div>\n    </a>\n    <a href="http://windows.microsoft.com/ie" target="_blank">\n      <div class="browser ie">\n        <div class="bg"></div>\n        <div class="logo"></div>\n      </div>\n    </a>\n  </div>\n</div>';
    }),
    function () {
        function x(e) {
            function t(t, n, r, i, s, o) {
                for (; s >= 0 && s < o; s += e) {
                    var u = i ? i[s] : s;
                    r = n(r, t[u], u, t);
                }
                return r;
            }
            return function (n, r, i, s) {
                r = v(r, s, 4);
                var o = !S(n) && d.keys(n),
                    u = (o || n).length,
                    a = e > 0 ? 0 : u - 1;
                return arguments.length < 3 && ((i = n[o ? o[a] : a]), (a += e)), t(n, r, i, o, a, u);
            };
        }
        function C(e) {
            return function (t, n, r) {
                n = m(n, r);
                var i = E(t),
                    s = e > 0 ? 0 : i - 1;
                for (; s >= 0 && s < i; s += e) if (n(t[s], s, t)) return s;
                return -1;
            };
        }
        function k(e, t, n) {
            return function (r, i, s) {
                var u = 0,
                    a = E(r);
                if (typeof s == "number") e > 0 ? (u = s >= 0 ? s : Math.max(s + a, u)) : (a = s >= 0 ? Math.min(s + 1, a) : s + a + 1);
                else if (n && s && a) return (s = n(r, i)), r[s] === i ? s : -1;
                if (i !== i) return (s = t(o.call(r, u, a), d.isNaN)), s >= 0 ? s + u : -1;
                for (s = e > 0 ? u : a - 1; s >= 0 && s < a; s += e) if (r[s] === i) return s;
                return -1;
            };
        }
        function M(e, t) {
            var n = O.length,
                i = e.constructor,
                s = (d.isFunction(i) && i.prototype) || r,
                o = "constructor";
            d.has(e, o) && !d.contains(t, o) && t.push(o);
            while (n--) (o = O[n]), o in e && e[o] !== s[o] && !d.contains(t, o) && t.push(o);
        }
        var e = this,
            t = e._,
            n = Array.prototype,
            r = Object.prototype,
            i = Function.prototype,
            s = n.push,
            o = n.slice,
            u = r.toString,
            a = r.hasOwnProperty,
            f = Array.isArray,
            l = Object.keys,
            c = i.bind,
            h = Object.create,
            p = function () {},
            d = function (e) {
                if (e instanceof d) return e;
                if (!(this instanceof d)) return new d(e);
                this._wrapped = e;
            };
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = d), (exports._ = d)) : (e._ = d), (d.VERSION = "1.8.3");
        var v = function (e, t, n) {
                if (t === void 0) return e;
                switch (n == null ? 3 : n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r);
                        };
                    case 3:
                        return function (n, r, i) {
                            return e.call(t, n, r, i);
                        };
                    case 4:
                        return function (n, r, i, s) {
                            return e.call(t, n, r, i, s);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            },
            m = function (e, t, n) {
                return e == null ? d.identity : d.isFunction(e) ? v(e, t, n) : d.isObject(e) ? d.matcher(e) : d.property(e);
            };
        d.iteratee = function (e, t) {
            return m(e, t, Infinity);
        };
        var g = function (e, t) {
                return function (n) {
                    var r = arguments.length;
                    if (r < 2 || n == null) return n;
                    for (var i = 1; i < r; i++) {
                        var s = arguments[i],
                            o = e(s),
                            u = o.length;
                        for (var a = 0; a < u; a++) {
                            var f = o[a];
                            if (!t || n[f] === void 0) n[f] = s[f];
                        }
                    }
                    return n;
                };
            },
            y = function (e) {
                if (!d.isObject(e)) return {};
                if (h) return h(e);
                p.prototype = e;
                var t = new p();
                return (p.prototype = null), t;
            },
            b = function (e) {
                return function (t) {
                    return t == null ? void 0 : t[e];
                };
            },
            w = Math.pow(2, 53) - 1,
            E = b("length"),
            S = function (e) {
                var t = E(e);
                return typeof t == "number" && t >= 0 && t <= w;
            };
        (d.each = d.forEach = function (e, t, n) {
            t = v(t, n);
            var r, i;
            if (S(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
            else {
                var s = d.keys(e);
                for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e);
            }
            return e;
        }),
            (d.map = d.collect = function (e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length,
                    s = Array(i);
                for (var o = 0; o < i; o++) {
                    var u = r ? r[o] : o;
                    s[o] = t(e[u], u, e);
                }
                return s;
            }),
            (d.reduce = d.foldl = d.inject = x(1)),
            (d.reduceRight = d.foldr = x(-1)),
            (d.find = d.detect = function (e, t, n) {
                var r;
                S(e) ? (r = d.findIndex(e, t, n)) : (r = d.findKey(e, t, n));
                if (r !== void 0 && r !== -1) return e[r];
            }),
            (d.filter = d.select = function (e, t, n) {
                var r = [];
                return (
                    (t = m(t, n)),
                    d.each(e, function (e, n, i) {
                        t(e, n, i) && r.push(e);
                    }),
                    r
                );
            }),
            (d.reject = function (e, t, n) {
                return d.filter(e, d.negate(m(t)), n);
            }),
            (d.every = d.all = function (e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (!t(e[o], o, e)) return !1;
                }
                return !0;
            }),
            (d.some = d.any = function (e, t, n) {
                t = m(t, n);
                var r = !S(e) && d.keys(e),
                    i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (t(e[o], o, e)) return !0;
                }
                return !1;
            }),
            (d.contains = d.includes = d.include = function (e, t, n, r) {
                S(e) || (e = d.values(e));
                if (typeof n != "number" || r) n = 0;
                return d.indexOf(e, t, n) >= 0;
            }),
            (d.invoke = function (e, t) {
                var n = o.call(arguments, 2),
                    r = d.isFunction(t);
                return d.map(e, function (e) {
                    var i = r ? t : e[t];
                    return i == null ? i : i.apply(e, n);
                });
            }),
            (d.pluck = function (e, t) {
                return d.map(e, d.property(t));
            }),
            (d.where = function (e, t) {
                return d.filter(e, d.matcher(t));
            }),
            (d.findWhere = function (e, t) {
                return d.find(e, d.matcher(t));
            }),
            (d.max = function (e, t, n) {
                var r = -Infinity,
                    i = -Infinity,
                    s,
                    o;
                if (t == null && e != null) {
                    e = S(e) ? e : d.values(e);
                    for (var u = 0, a = e.length; u < a; u++) (s = e[u]), s > r && (r = s);
                } else
                    (t = m(t, n)),
                        d.each(e, function (e, n, s) {
                            o = t(e, n, s);
                            if (o > i || (o === -Infinity && r === -Infinity)) (r = e), (i = o);
                        });
                return r;
            }),
            (d.min = function (e, t, n) {
                var r = Infinity,
                    i = Infinity,
                    s,
                    o;
                if (t == null && e != null) {
                    e = S(e) ? e : d.values(e);
                    for (var u = 0, a = e.length; u < a; u++) (s = e[u]), s < r && (r = s);
                } else
                    (t = m(t, n)),
                        d.each(e, function (e, n, s) {
                            o = t(e, n, s);
                            if (o < i || (o === Infinity && r === Infinity)) (r = e), (i = o);
                        });
                return r;
            }),
            (d.shuffle = function (e) {
                var t = S(e) ? e : d.values(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0, s; i < n; i++) (s = d.random(0, i)), s !== i && (r[i] = r[s]), (r[s] = t[i]);
                return r;
            }),
            (d.sample = function (e, t, n) {
                return t == null || n ? (S(e) || (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t));
            }),
            (d.sortBy = function (e, t, n) {
                return (
                    (t = m(t, n)),
                    d.pluck(
                        d
                            .map(e, function (e, n, r) {
                                return { value: e, index: n, criteria: t(e, n, r) };
                            })
                            .sort(function (e, t) {
                                var n = e.criteria,
                                    r = t.criteria;
                                if (n !== r) {
                                    if (n > r || n === void 0) return 1;
                                    if (n < r || r === void 0) return -1;
                                }
                                return e.index - t.index;
                            }),
                        "value"
                    )
                );
            });
        var T = function (e) {
            return function (t, n, r) {
                var i = {};
                return (
                    (n = m(n, r)),
                    d.each(t, function (r, s) {
                        var o = n(r, s, t);
                        e(i, r, o);
                    }),
                    i
                );
            };
        };
        (d.groupBy = T(function (e, t, n) {
            d.has(e, n) ? e[n].push(t) : (e[n] = [t]);
        })),
            (d.indexBy = T(function (e, t, n) {
                e[n] = t;
            })),
            (d.countBy = T(function (e, t, n) {
                d.has(e, n) ? e[n]++ : (e[n] = 1);
            })),
            (d.toArray = function (e) {
                return e ? (d.isArray(e) ? o.call(e) : S(e) ? d.map(e, d.identity) : d.values(e)) : [];
            }),
            (d.size = function (e) {
                return e == null ? 0 : S(e) ? e.length : d.keys(e).length;
            }),
            (d.partition = function (e, t, n) {
                t = m(t, n);
                var r = [],
                    i = [];
                return (
                    d.each(e, function (e, n, s) {
                        (t(e, n, s) ? r : i).push(e);
                    }),
                    [r, i]
                );
            }),
            (d.first = d.head = d.take = function (e, t, n) {
                return e == null ? void 0 : t == null || n ? e[0] : d.initial(e, e.length - t);
            }),
            (d.initial = function (e, t, n) {
                return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)));
            }),
            (d.last = function (e, t, n) {
                return e == null ? void 0 : t == null || n ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t));
            }),
            (d.rest = d.tail = d.drop = function (e, t, n) {
                return o.call(e, t == null || n ? 1 : t);
            }),
            (d.compact = function (e) {
                return d.filter(e, d.identity);
            });
        var N = function (e, t, n, r) {
            var i = [],
                s = 0;
            for (var o = r || 0, u = E(e); o < u; o++) {
                var a = e[o];
                if (S(a) && (d.isArray(a) || d.isArguments(a))) {
                    t || (a = N(a, t, n));
                    var f = 0,
                        l = a.length;
                    i.length += l;
                    while (f < l) i[s++] = a[f++];
                } else n || (i[s++] = a);
            }
            return i;
        };
        (d.flatten = function (e, t) {
            return N(e, t, !1);
        }),
            (d.without = function (e) {
                return d.difference(e, o.call(arguments, 1));
            }),
            (d.uniq = d.unique = function (e, t, n, r) {
                d.isBoolean(t) || ((r = n), (n = t), (t = !1)), n != null && (n = m(n, r));
                var i = [],
                    s = [];
                for (var o = 0, u = E(e); o < u; o++) {
                    var a = e[o],
                        f = n ? n(a, o, e) : a;
                    t ? ((!o || s !== f) && i.push(a), (s = f)) : n ? d.contains(s, f) || (s.push(f), i.push(a)) : d.contains(i, a) || i.push(a);
                }
                return i;
            }),
            (d.union = function () {
                return d.uniq(N(arguments, !0, !0));
            }),
            (d.intersection = function (e) {
                var t = [],
                    n = arguments.length;
                for (var r = 0, i = E(e); r < i; r++) {
                    var s = e[r];
                    if (d.contains(t, s)) continue;
                    for (var o = 1; o < n; o++) if (!d.contains(arguments[o], s)) break;
                    o === n && t.push(s);
                }
                return t;
            }),
            (d.difference = function (e) {
                var t = N(arguments, !0, !0, 1);
                return d.filter(e, function (e) {
                    return !d.contains(t, e);
                });
            }),
            (d.zip = function () {
                return d.unzip(arguments);
            }),
            (d.unzip = function (e) {
                var t = (e && d.max(e, E).length) || 0,
                    n = Array(t);
                for (var r = 0; r < t; r++) n[r] = d.pluck(e, r);
                return n;
            }),
            (d.object = function (e, t) {
                var n = {};
                for (var r = 0, i = E(e); r < i; r++) t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                return n;
            }),
            (d.findIndex = C(1)),
            (d.findLastIndex = C(-1)),
            (d.sortedIndex = function (e, t, n, r) {
                n = m(n, r, 1);
                var i = n(t),
                    s = 0,
                    o = E(e);
                while (s < o) {
                    var u = Math.floor((s + o) / 2);
                    n(e[u]) < i ? (s = u + 1) : (o = u);
                }
                return s;
            }),
            (d.indexOf = k(1, d.findIndex, d.sortedIndex)),
            (d.lastIndexOf = k(-1, d.findLastIndex)),
            (d.range = function (e, t, n) {
                t == null && ((t = e || 0), (e = 0)), (n = n || 1);
                var r = Math.max(Math.ceil((t - e) / n), 0),
                    i = Array(r);
                for (var s = 0; s < r; s++, e += n) i[s] = e;
                return i;
            });
        var L = function (e, t, n, r, i) {
            if (r instanceof t) {
                var s = y(e.prototype),
                    o = e.apply(s, i);
                return d.isObject(o) ? o : s;
            }
            return e.apply(n, i);
        };
        (d.bind = function (e, t) {
            if (c && e.bind === c) return c.apply(e, o.call(arguments, 1));
            if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = o.call(arguments, 2),
                r = function () {
                    return L(e, r, t, this, n.concat(o.call(arguments)));
                };
            return r;
        }),
            (d.partial = function (e) {
                var t = o.call(arguments, 1),
                    n = function () {
                        var r = 0,
                            i = t.length,
                            s = Array(i);
                        for (var o = 0; o < i; o++) s[o] = t[o] === d ? arguments[r++] : t[o];
                        while (r < arguments.length) s.push(arguments[r++]);
                        return L(e, n, this, this, s);
                    };
                return n;
            }),
            (d.bindAll = function (e) {
                var t,
                    n = arguments.length,
                    r;
                if (n <= 1) throw new Error("bindAll must be passed function names");
                for (t = 1; t < n; t++) (r = arguments[t]), (e[r] = d.bind(e[r], e));
                return e;
            }),
            (d.memoize = function (e, t) {
                var n = function (r) {
                    var i = n.cache,
                        s = "" + (t ? t.apply(this, arguments) : r);
                    return d.has(i, s) || (i[s] = e.apply(this, arguments)), i[s];
                };
                return (n.cache = {}), n;
            }),
            (d.delay = function (e, t) {
                var n = o.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, n);
                }, t);
            }),
            (d.defer = d.partial(d.delay, d, 1)),
            (d.throttle = function (e, t, n) {
                var r,
                    i,
                    s,
                    o = null,
                    u = 0;
                n || (n = {});
                var a = function () {
                    (u = n.leading === !1 ? 0 : d.now()), (o = null), (s = e.apply(r, i)), o || (r = i = null);
                };
                return function () {
                    var f = d.now();
                    !u && n.leading === !1 && (u = f);
                    var l = t - (f - u);
                    return (r = this), (i = arguments), l <= 0 || l > t ? (o && (clearTimeout(o), (o = null)), (u = f), (s = e.apply(r, i)), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s;
                };
            }),
            (d.debounce = function (e, t, n) {
                var r,
                    i,
                    s,
                    o,
                    u,
                    a = function () {
                        var f = d.now() - o;
                        f < t && f >= 0 ? (r = setTimeout(a, t - f)) : ((r = null), n || ((u = e.apply(s, i)), r || (s = i = null)));
                    };
                return function () {
                    (s = this), (i = arguments), (o = d.now());
                    var f = n && !r;
                    return r || (r = setTimeout(a, t)), f && ((u = e.apply(s, i)), (s = i = null)), u;
                };
            }),
            (d.wrap = function (e, t) {
                return d.partial(t, e);
            }),
            (d.negate = function (e) {
                return function () {
                    return !e.apply(this, arguments);
                };
            }),
            (d.compose = function () {
                var e = arguments,
                    t = e.length - 1;
                return function () {
                    var n = t,
                        r = e[t].apply(this, arguments);
                    while (n--) r = e[n].call(this, r);
                    return r;
                };
            }),
            (d.after = function (e, t) {
                return function () {
                    if (--e < 1) return t.apply(this, arguments);
                };
            }),
            (d.before = function (e, t) {
                var n;
                return function () {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
            }),
            (d.once = d.partial(d.before, 2));
        var A = !{ toString: null }.propertyIsEnumerable("toString"),
            O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        (d.keys = function (e) {
            if (!d.isObject(e)) return [];
            if (l) return l(e);
            var t = [];
            for (var n in e) d.has(e, n) && t.push(n);
            return A && M(e, t), t;
        }),
            (d.allKeys = function (e) {
                if (!d.isObject(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return A && M(e, t), t;
            }),
            (d.values = function (e) {
                var t = d.keys(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0; i < n; i++) r[i] = e[t[i]];
                return r;
            }),
            (d.mapObject = function (e, t, n) {
                t = m(t, n);
                var r = d.keys(e),
                    i = r.length,
                    s = {},
                    o;
                for (var u = 0; u < i; u++) (o = r[u]), (s[o] = t(e[o], o, e));
                return s;
            }),
            (d.pairs = function (e) {
                var t = d.keys(e),
                    n = t.length,
                    r = Array(n);
                for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                return r;
            }),
            (d.invert = function (e) {
                var t = {},
                    n = d.keys(e);
                for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t;
            }),
            (d.functions = d.methods = function (e) {
                var t = [];
                for (var n in e) d.isFunction(e[n]) && t.push(n);
                return t.sort();
            }),
            (d.extend = g(d.allKeys)),
            (d.extendOwn = d.assign = g(d.keys)),
            (d.findKey = function (e, t, n) {
                t = m(t, n);
                var r = d.keys(e),
                    i;
                for (var s = 0, o = r.length; s < o; s++) {
                    i = r[s];
                    if (t(e[i], i, e)) return i;
                }
            }),
            (d.pick = function (e, t, n) {
                var r = {},
                    i = e,
                    s,
                    o;
                if (i == null) return r;
                d.isFunction(t)
                    ? ((o = d.allKeys(i)), (s = v(t, n)))
                    : ((o = N(arguments, !1, !1, 1)),
                      (s = function (e, t, n) {
                          return t in n;
                      }),
                      (i = Object(i)));
                for (var u = 0, a = o.length; u < a; u++) {
                    var f = o[u],
                        l = i[f];
                    s(l, f, i) && (r[f] = l);
                }
                return r;
            }),
            (d.omit = function (e, t, n) {
                if (d.isFunction(t)) t = d.negate(t);
                else {
                    var r = d.map(N(arguments, !1, !1, 1), String);
                    t = function (e, t) {
                        return !d.contains(r, t);
                    };
                }
                return d.pick(e, t, n);
            }),
            (d.defaults = g(d.allKeys, !0)),
            (d.create = function (e, t) {
                var n = y(e);
                return t && d.extendOwn(n, t), n;
            }),
            (d.clone = function (e) {
                return d.isObject(e) ? (d.isArray(e) ? e.slice() : d.extend({}, e)) : e;
            }),
            (d.tap = function (e, t) {
                return t(e), e;
            }),
            (d.isMatch = function (e, t) {
                var n = d.keys(t),
                    r = n.length;
                if (e == null) return !r;
                var i = Object(e);
                for (var s = 0; s < r; s++) {
                    var o = n[s];
                    if (t[o] !== i[o] || !(o in i)) return !1;
                }
                return !0;
            });
        var _ = function (e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e === 1 / t;
            if (e == null || t == null) return e === t;
            e instanceof d && (e = e._wrapped), t instanceof d && (t = t._wrapped);
            var i = u.call(e);
            if (i !== u.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    if (+e !== +e) return +t !== +t;
                    return +e === 0 ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t;
            }
            var s = i === "[object Array]";
            if (!s) {
                if (typeof e != "object" || typeof t != "object") return !1;
                var o = e.constructor,
                    a = t.constructor;
                if (o !== a && !(d.isFunction(o) && o instanceof o && d.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
            }
            (n = n || []), (r = r || []);
            var f = n.length;
            while (f--) if (n[f] === e) return r[f] === t;
            n.push(e), r.push(t);
            if (s) {
                f = e.length;
                if (f !== t.length) return !1;
                while (f--) if (!_(e[f], t[f], n, r)) return !1;
            } else {
                var l = d.keys(e),
                    c;
                f = l.length;
                if (d.keys(t).length !== f) return !1;
                while (f--) {
                    c = l[f];
                    if (!d.has(t, c) || !_(e[c], t[c], n, r)) return !1;
                }
            }
            return n.pop(), r.pop(), !0;
        };
        (d.isEqual = function (e, t) {
            return _(e, t);
        }),
            (d.isEmpty = function (e) {
                return e == null ? !0 : S(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? e.length === 0 : d.keys(e).length === 0;
            }),
            (d.isElement = function (e) {
                return !!e && e.nodeType === 1;
            }),
            (d.isArray =
                f ||
                function (e) {
                    return u.call(e) === "[object Array]";
                }),
            (d.isObject = function (e) {
                var t = typeof e;
                return t === "function" || (t === "object" && !!e);
            }),
            d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
                d["is" + e] = function (t) {
                    return u.call(t) === "[object " + e + "]";
                };
            }),
            d.isArguments(arguments) ||
                (d.isArguments = function (e) {
                    return d.has(e, "callee");
                }),
            typeof /./ != "function" &&
                typeof Int8Array != "object" &&
                (d.isFunction = function (e) {
                    return typeof e == "function" || !1;
                }),
            (d.isFinite = function (e) {
                return isFinite(e) && !isNaN(parseFloat(e));
            }),
            (d.isNaN = function (e) {
                return d.isNumber(e) && e !== +e;
            }),
            (d.isBoolean = function (e) {
                return e === !0 || e === !1 || u.call(e) === "[object Boolean]";
            }),
            (d.isNull = function (e) {
                return e === null;
            }),
            (d.isUndefined = function (e) {
                return e === void 0;
            }),
            (d.has = function (e, t) {
                return e != null && a.call(e, t);
            }),
            (d.noConflict = function () {
                return (e._ = t), this;
            }),
            (d.identity = function (e) {
                return e;
            }),
            (d.constant = function (e) {
                return function () {
                    return e;
                };
            }),
            (d.noop = function () {}),
            (d.property = b),
            (d.propertyOf = function (e) {
                return e == null
                    ? function () {}
                    : function (t) {
                          return e[t];
                      };
            }),
            (d.matcher = d.matches = function (e) {
                return (
                    (e = d.extendOwn({}, e)),
                    function (t) {
                        return d.isMatch(t, e);
                    }
                );
            }),
            (d.times = function (e, t, n) {
                var r = Array(Math.max(0, e));
                t = v(t, n, 1);
                for (var i = 0; i < e; i++) r[i] = t(i);
                return r;
            }),
            (d.random = function (e, t) {
                return t == null && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
            }),
            (d.now =
                Date.now ||
                function () {
                    return new Date().getTime();
                });
        var D = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            P = d.invert(D),
            H = function (e) {
                var t = function (t) {
                        return e[t];
                    },
                    n = "(?:" + d.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function (e) {
                    return (e = e == null ? "" : "" + e), r.test(e) ? e.replace(i, t) : e;
                };
            };
        (d.escape = H(D)),
            (d.unescape = H(P)),
            (d.result = function (e, t, n) {
                var r = e == null ? void 0 : e[t];
                return r === void 0 && (r = n), d.isFunction(r) ? r.call(e) : r;
            });
        var B = 0;
        (d.uniqueId = function (e) {
            var t = ++B + "";
            return e ? e + t : t;
        }),
            (d.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
        var j = /(.)^/,
            F = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            I = /\\|'|\r|\n|\u2028|\u2029/g,
            q = function (e) {
                return "\\" + F[e];
            };
        (d.template = function (e, t, n) {
            !t && n && (t = n), (t = d.defaults({}, t, d.templateSettings));
            var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                i = 0,
                s = "__p+='";
            e.replace(r, function (t, n, r, o, u) {
                return (s += e.slice(i, u).replace(I, q)), (i = u + t.length), n ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : r ? (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : o && (s += "';\n" + o + "\n__p+='"), t;
            }),
                (s += "';\n"),
                t.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                (s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n");
            try {
                var o = new Function(t.variable || "obj", "_", s);
            } catch (u) {
                throw ((u.source = s), u);
            }
            var a = function (e) {
                    return o.call(this, e, d);
                },
                f = t.variable || "obj";
            return (a.source = "function(" + f + "){\n" + s + "}"), a;
        }),
            (d.chain = function (e) {
                var t = d(e);
                return (t._chain = !0), t;
            });
        var R = function (e, t) {
            return e._chain ? d(t).chain() : t;
        };
        (d.mixin = function (e) {
            d.each(d.functions(e), function (t) {
                var n = (d[t] = e[t]);
                d.prototype[t] = function () {
                    var e = [this._wrapped];
                    return s.apply(e, arguments), R(this, n.apply(d, e));
                };
            });
        }),
            d.mixin(d),
            d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = n[e];
                d.prototype[e] = function () {
                    var n = this._wrapped;
                    return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], R(this, n);
                };
            }),
            d.each(["concat", "join", "slice"], function (e) {
                var t = n[e];
                d.prototype[e] = function () {
                    return R(this, t.apply(this._wrapped, arguments));
                };
            }),
            (d.prototype.value = function () {
                return this._wrapped;
            }),
            (d.prototype.valueOf = d.prototype.toJSON = d.prototype.value),
            (d.prototype.toString = function () {
                return "" + this._wrapped;
            }),
            typeof define == "function" &&
                define.amd &&
                define("underscore", [], function () {
                    return d;
                });
    }.call(this),
    define("api/snapshot/util/uuid", ["require"], function (e) {
        var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            n = function () {
                var e = "",
                    n;
                for (var r = 0; r < 46; r++) (n = 0 | (Math.random() * 36)), (e += t[n]);
                return e;
            };
        return n;
    }),
    define("api/snapshot/SimCapiMessage", ["require"], function (e) {
        var t = function (e) {
            (e = e || {}), (this.type = e.type || null), (this.handshake = e.handshake || { requestToken: null, authToken: null }), (this.values = e.values || {});
        };
        return (
            (t.TYPES = {
                HANDSHAKE_REQUEST: 1,
                HANDSHAKE_RESPONSE: 2,
                ON_READY: 3,
                VALUE_CHANGE: 4,
                CONFIG_CHANGE: 5,
                VALUE_CHANGE_REQUEST: 6,
                CHECK_REQUEST: 7,
                CHECK_COMPLETE_RESPONSE: 8,
                GET_DATA_REQUEST: 9,
                GET_DATA_RESPONSE: 10,
                SET_DATA_REQUEST: 11,
                SET_DATA_RESPONSE: 12,
                INITIAL_SETUP_COMPLETE: 14,
                CHECK_START_RESPONSE: 15,
                API_CALL_REQUEST: 16,
                API_CALL_RESPONSE: 17,
                RESIZE_PARENT_CONTAINER_REQUEST: 18,
                RESIZE_PARENT_CONTAINER_RESPONSE: 19,
                ALLOW_INTERNAL_ACCESS: 20,
            }),
            t
        );
    }),
    (function (e, t, n) {
        var r = function (e, t) {
                return void 0 !== e && null !== e && t && (e.constructor === t || e instanceof t);
            },
            i = function (e, t, n) {
                if (e) throw Error(e);
                var r = "" + n.constructor;
                throw ((r = (typeof n).length < r.length ? typeof n : r), Error("Expected: " + n.name + ". Actual : " + (t ? t.constructor.name : t)));
            },
            s = function (e, t, n) {
                var s = !1;
                if (n.each) {
                    var o =
                        n.filterFn ||
                        function () {
                            return !0;
                        };
                    if ((s = r(e, Object) || r(e, Array))) for (var u in e) o(e[u], u) && ((s = s && r(e[u], t)), !s && n.strict && i(n.msg, e, t));
                    else n.strict && i(n.msg, arg, t);
                } else (s = r(e, t)), !s && n.strict && i(n.msg, e, t);
                return s;
            },
            o = function (e, t, n) {
                return e === n || null === e ? (t.strict && i(t.msg, e, n), !1) : !0;
            },
            u = function (e) {
                var t = { strict: !0 };
                if (!u.globals.on) {
                    var n = function () {
                            return this;
                        },
                        r = function () {
                            return !0;
                        };
                    return { isString: r, isNumber: r, isBoolean: r, isArray: r, isObject: r, isFunction: r, isOfType: r, strict: n, passive: n, each: n, msg: n, isDefined: r };
                }
                return {
                    isString: function () {
                        return s(e, String, t);
                    },
                    isNumber: function () {
                        return s(e, Number, t);
                    },
                    isBoolean: function () {
                        return s(e, Boolean, t);
                    },
                    isArray: function () {
                        return s(e, Array, t);
                    },
                    isObject: function () {
                        return s(e, Object, t);
                    },
                    isFunction: function () {
                        return s(e, Function, t);
                    },
                    isOfType: function (n) {
                        return s(e, n, t);
                    },
                    isDefined: function () {
                        return o(e, t);
                    },
                    strict: function () {
                        return (t.strict = !0), this;
                    },
                    passive: function () {
                        return (t.strict = !1), this;
                    },
                    each: function (e) {
                        return (t.each = !0), (t.filterFn = e), this;
                    },
                    msg: function (e) {
                        return (t.msg = e), this;
                    },
                };
            };
        (u.globals = { on: !0 }),
            t === void 0 && ((t = { exports: {} }), (n = t.exports)),
            "function" == typeof define &&
                define.amd &&
                define("check", [], function () {
                    return u;
                }),
            (n = t.exports = u),
            "undefined" != typeof window && (window.check = t.exports);
    })(this, "undefined" != typeof module ? module : {}, "undefined" != typeof exports ? exports : {}),
    define("api/snapshot/SimCapiTypes", ["require"], function (e) {
        var t = function (e, t) {
            (this.enumValue = e), (this.stringValue = t);
        };
        (t.prototype.valueOf = function () {
            return this.enumValue;
        }),
            (t.prototype.toString = function () {
                return this.stringValue;
            });
        var n = { NUMBER: new t(1, "Number"), STRING: new t(2, "String"), ARRAY: new t(3, "Array"), BOOLEAN: new t(4, "Boolean"), ENUM: new t(5, "Enum"), MATH_EXPR: new t(6, "MathExpression"), ARRAY_POINT: new t(7, "Point Array") },
            r = Object.keys(n).reduce(function (e, t) {
                var r = n[t];
                return (e[t] = r.valueOf()), e;
            }, {}),
            i = Object.keys(n).reduce(function (e, t) {
                var r = n[t];
                return (e[r.valueOf()] = r.toString()), e;
            }, {}),
            s = function (e) {
                return i[e];
            };
        return { TYPES: r, toString: s };
    }),
    define("api/snapshot/SimCapiValue", ["check", "./SimCapiTypes"], function (e, t) {
        function n(t) {
            return e(t).passive().isBoolean() ? t : e(t).passive().isString() ? (t === "true" ? !0 : !1) : t;
        }
        function r(t) {
            if (e(t).passive().isArray()) return t;
            if (i(t)) {
                var n = [],
                    r = t.substring(1, t.length - 1).split(",");
                for (var s = 0; s < r.length; ++s) n.push(r[s].trim());
                return n;
            }
            return t;
        }
        function i(e) {
            return e.charAt(0) === "[" && e.charAt(e.length - 1) === "]";
        }
        var s = function (s) {
            var o = function (n, r) {
                    var s = e(n).passive(),
                        o;
                    if (r) e(r).each().isString(), (o = t.TYPES.ENUM);
                    else if (s.isBoolean()) o = t.TYPES.BOOLEAN;
                    else if (s.isNumber()) o = t.TYPES.NUMBER;
                    else if (s.isArray() || i(n)) o = t.TYPES.ARRAY;
                    else {
                        if (!s.isString()) throw new Error("can not determined type");
                        o = t.TYPES.STRING;
                    }
                    return o;
                },
                u = function (i, s, o) {
                    switch (s) {
                        case t.TYPES.NUMBER:
                            e(parseFloat(i)).isNumber(), (i = parseFloat(i));
                            break;
                        case t.TYPES.STRING:
                            i = String(i);
                            break;
                        case t.TYPES.BOOLEAN:
                            (i = n(i)), e(i).isBoolean();
                            break;
                        case t.TYPES.ARRAY:
                            (i = r(i)), e(i).isArray();
                            break;
                        case t.TYPES.ENUM:
                            e(i).isString(), e(o).each().isString();
                            if (o.indexOf(i) === -1) throw new Error("value is not allowed.");
                            break;
                        case t.TYPES.MATH_EXPR:
                            e(i).isString();
                            break;
                        case t.TYPES.ARRAY_POINT:
                            (i = r(i)), e(i).isArray();
                    }
                    return i;
                };
            (s = s || {}),
                (this.key = s.key || null),
                e(this.key).isString(),
                (this.type = s.type || null),
                (this.value = s.value !== undefined || s.value !== null ? s.value : null),
                (this.readonly = s.readonly || !1),
                (this.writeonly = s.writeonly || !1),
                (this.allowedValues = s.allowedValues || null),
                (this.bindTo = s.bindTo || null),
                this.bindTo && e(this.bindTo).isString();
            if (this.type) this.value = u(this.value, this.type, this.allowedValues);
            else {
                if (this.value === undefined || this.value === null) throw new Error("Value nor type was given");
                (this.type = o(this.value, this.allowedValues)), this.type === t.TYPES.ARRAY && e(this.value).passive().isString() && (this.value = r(this.value));
            }
            (this.setValue = function (e) {
                this.value = u(e, this.type, this.allowedValues);
            }),
                (this.toString = function () {
                    return this.value === null || this.value === undefined ? "null" : e(this.value).passive().isArray() ? "[" + this.value.toString() + "]" : this.value.toString();
                });
        };
        return s;
    }),
    define("api/snapshot/config/apiList", [], function () {
        return { ChemicalAPI: ["getStructure"], DeviceAPI: ["listDevicesInGroup"], DataSyncAPI: ["createSession", "joinSession", "endSession", "setSessionData", "getSessionData"], InchRepoService: ["search"] };
    }),
    define("api/snapshot/ApiInterface", ["require", "./config/apiList", "./SimCapiMessage", "api/snapshot/Transporter"], function (e) {
        function r() {
            (this.apiCallUid = 0), (this.responseQueue = {});
        }
        var t = e("./config/apiList"),
            n = e("./SimCapiMessage");
        return (
            (r.create = function (t) {
                var n = e("api/snapshot/Transporter").Transporter;
                if (t instanceof n) {
                    var i = new r();
                    return (i.transporter = t), i;
                }
                throw new Error("Transporter not received");
            }),
            (r.prototype.apiCall = function (e, r, i, s) {
                if (!t[e]) throw new Error("Invalid api name provided");
                if (t[e].indexOf(r) === -1) throw new Error("Method does not exist on the api");
                var o = ++this.apiCallUid,
                    u = this.transporter.getHandshake(),
                    a = new n({ type: n.TYPES.API_CALL_REQUEST, handshake: u, values: { api: e, method: r, uid: o, params: i } });
                typeof s == "function" && (this.responseQueue[o] = s), this.transporter.sendMessage(a);
            }),
            (r.prototype.processResponse = function (e) {
                var t = this.responseQueue[e.values.uid];
                if (!t) return;
                t(e.values.type, e.values.args), delete this.responseQueue[e.values.uid];
            }),
            r
        );
    }),
    define("api/snapshot/LocalData", [], function () {
        function t(e, t) {
            setTimeout(n.bind(this, e, t), 0);
        }
        function n(e, t) {
            t(e);
        }
        var e = {
            getData: function (e, n, r) {
                var i = { key: n, value: null, exists: !1 };
                try {
                    var s = JSON.parse(window.sessionStorage.getItem(e));
                    s && s.hasOwnProperty(n) && ((i.value = s[n]), (i.exists = !0));
                } catch (o) {
                    console.warn("An error occurred while reading the date from sessionStorage.");
                }
                t(i, r);
            },
            setData: function (e, n, r, i) {
                try {
                    var s = JSON.parse(window.sessionStorage.getItem(e)) || {};
                    (s[n] = r), window.sessionStorage.setItem(e, JSON.stringify(s));
                } catch (o) {
                    console.warn("An error occurred while trying to save the data to sessionStorage.");
                }
                t(null, i);
            },
        };
        return e;
    }),
    define("api/snapshot/util/domain", [], function () {
        return {
            getDomain: function () {
                return document.domain;
            },
            setDomain: function (e) {
                document.domain = e;
            },
        };
    }),
    define("api/snapshot/Transporter", ["jquery", "underscore", "api/snapshot/util/uuid", "api/snapshot/SimCapiMessage", "check", "api/snapshot/SimCapiValue", "./ApiInterface", "./LocalData", "./util/domain"], function (
        e,
        t,
        n,
        r,
        i,
        s,
        o,
        u,
        a
    ) {
        e.noConflict(), t.noConflict();
        var f = function (f) {
                var l = 1.01;
                f = f || {};
                var c = this,
                    h = f.outgoingMap || {},
                    p = f.toBeApplied || {},
                    d = [],
                    v = [],
                    m = [],
                    g = { requestToken: f.requestToken || n(), authToken: f.authToken || null, version: l },
                    y = f.pendingOnReady || !1,
                    b = { forHandshake: [], forValueChange: [] },
                    w = !1,
                    E = { check: { complete: [], start: [] }, getData: null };
                (this.lastMessageId = 0), (this.messageCallbacks = {});
                var S = {},
                    x = {},
                    T = !1,
                    N = null,
                    C = 25;
                (this.apiInterface = o.create(this)),
                    (this.getHandshake = function () {
                        return g;
                    }),
                    (this.capiMessageHandler = function (e) {
                        switch (e.type) {
                            case r.TYPES.HANDSHAKE_RESPONSE:
                                I(e);
                                break;
                            case r.TYPES.VALUE_CHANGE:
                                F(e);
                                break;
                            case r.TYPES.CONFIG_CHANGE:
                                B(e);
                                break;
                            case r.TYPES.VALUE_CHANGE_REQUEST:
                                j(e);
                                break;
                            case r.TYPES.CHECK_COMPLETE_RESPONSE:
                                D(e);
                                break;
                            case r.TYPES.CHECK_START_RESPONSE:
                                P(e);
                                break;
                            case r.TYPES.GET_DATA_RESPONSE:
                                O(e);
                                break;
                            case r.TYPES.SET_DATA_RESPONSE:
                                M(e);
                                break;
                            case r.TYPES.API_CALL_RESPONSE:
                                this.apiInterface.processResponse(e);
                                break;
                            case r.TYPES.INITIAL_SETUP_COMPLETE:
                                L(e);
                                break;
                            case r.TYPES.RESIZE_PARENT_CONTAINER_RESPONSE:
                                R(e);
                                break;
                            case r.TYPES.ALLOW_INTERNAL_ACCESS:
                                U();
                        }
                    }),
                    (this.addChangeListener = function (e) {
                        d.push(e);
                    }),
                    (this.removeAllChangeListeners = function () {
                        d = [];
                    });
                var k = !1;
                (this.addInitialSetupCompleteListener = function (e) {
                    if (k) throw new Error("Initial setup already complete. This listener will never be called");
                    v.push(e);
                }),
                    (this.removeAllInitialSetupCompleteListeners = function () {
                        v = [];
                    });
                var L = function (e) {
                    if (k || e.handshake.authToken !== g.authToken) return;
                    for (var t = 0; t < v.length; ++t) v[t](e);
                    k = !0;
                };
                (this.addCheckCompleteListener = function (e, t) {
                    E.check.complete.push({ handler: e, once: t });
                }),
                    (this.addCheckStartListener = function (e, t) {
                        E.check.start.push({ handler: e, once: t });
                    });
                var A = !1;
                this.addHandshakeCompleteListener = function (e) {
                    if (A) {
                        e(g);
                        return;
                    }
                    m.push(e);
                };
                var O = function (e) {
                        e.handshake.authToken === g.authToken &&
                            (e.values.responseType === "success"
                                ? S[e.values.simId][e.values.key].onSuccess({ key: e.values.key, value: e.values.value, exists: e.values.exists })
                                : e.values.responseType === "error" && S[e.values.simId][e.values.key].onError(e.values.error),
                            delete S[e.values.simId][e.values.key]);
                    },
                    M = function (e) {
                        if (e.handshake.authToken === g.authToken) {
                            var t = x[e.values.simId][e.values.key];
                            delete x[e.values.simId][e.values.key], e.values.responseType === "success" ? t.onSuccess({ key: e.values.key, value: e.values.value }) : e.values.responseType === "error" && t.onError(e.values.error);
                        }
                    };
                (this.getDataRequest = function (e, t, n, s) {
                    i(e).isString(), i(t).isString(), (n = n || function () {}), (s = s || function () {});
                    if (!W() || X()) return u.getData(e, t, n), !0;
                    var o = new r({ type: r.TYPES.GET_DATA_REQUEST, handshake: g, values: { key: t, simId: e } });
                    return S[e] || (S[e] = {}), S[e][t] ? new Error("Get data request of " + t + " already in progress.") : ((S[e][t] = { onSuccess: n, onError: s }), g.authToken ? c.sendMessage(o) : b.forHandshake.push(o), !0);
                }),
                    (this.setDataRequest = function (e, t, n, s, o) {
                        i(e).isString(), i(t).isString(), i(n).isString(), (s = s || function () {}), (o = o || function () {});
                        if (!W() || X()) return u.setData(e, t, n, s), !0;
                        var a = new r({ type: r.TYPES.SET_DATA_REQUEST, handshake: g, values: { key: t, value: n, simId: e } });
                        return x[e] || (x[e] = {}), x[e][t] ? new Error("Set data request of " + t + " already in progress.") : ((x[e][t] = { onSuccess: s, onError: o }), g.authToken ? c.sendMessage(a) : b.forHandshake.push(a), !0);
                    });
                var D = function (e) {
                        H("complete", e), (w = !1);
                    },
                    P = function (e) {
                        H("start", e);
                    },
                    H = function (e, t) {
                        var n = [];
                        for (var r in E.check[e]) E.check[e][r].handler(t), E.check[e][r].once && n.push(E.check[e][r]);
                        for (var i in n) E.check[e].splice(E.check[e].indexOf(n[i]), 1);
                    },
                    B = function (e) {
                        e.handshake.authToken === g.authToken && (g.config = e.handshake.config);
                    },
                    j = function (e) {
                        e.handshake.authToken === g.authToken && c.notifyValueChange();
                    },
                    F = function (e) {
                        if (e.handshake.authToken === g.authToken) {
                            var n = [];
                            t.each(e.values, function (e, t) {
                                e && !e.readonly && (h[t] && h[t].value !== e.value ? (h[t].setValue(e.value), n.push(h[t])) : h[t] || ((p[t] = e.value), n.push(new s({ value: e.value, key: t }))));
                            }),
                                n.length !== 0 && V(n);
                        }
                    },
                    I = function (e) {
                        if (e.handshake.requestToken === g.requestToken) {
                            (g.authToken = e.handshake.authToken), (g.config = e.handshake.config);
                            if (y) {
                                c.notifyOnReady();
                                for (var t = 0; t < b.forHandshake.length; ++t) c.sendMessage(b.forHandshake[t]);
                                b.forHandshake = [];
                            }
                        }
                    },
                    q = function () {
                        var e = new r({ type: r.TYPES.HANDSHAKE_REQUEST, handshake: g });
                        c.sendMessage(e);
                    };
                (this.notifyOnReady = function () {
                    if (!g.authToken) (y = !0), q();
                    else {
                        var e = new r({ type: r.TYPES.ON_READY, handshake: g });
                        c.sendMessage(e),
                            (y = !1),
                            m.forEach(function (e) {
                                e(g);
                            }),
                            (A = !0),
                            (m = []),
                            c.notifyValueChange();
                    }
                    W() || L({ handshake: g });
                }),
                    (this.triggerCheck = function (e) {
                        if (w) throw new Error("You have already triggered a check event");
                        (w = !0), (e = e || {}), e.complete && c.addCheckCompleteListener(e.complete, !0);
                        var t = new r({ type: r.TYPES.CHECK_REQUEST, handshake: g });
                        b.forValueChange.push(t), c.notifyValueChange();
                    }),
                    (this.requestParentContainerResize = function (e, t) {
                        t = t || function () {};
                        var n = ++c.lastMessageId,
                            i = new r({ type: r.TYPES.RESIZE_PARENT_CONTAINER_REQUEST, handshake: g, values: { messageId: n, width: e.width, height: e.height } });
                        (this.messageCallbacks[n] = { onSuccess: t }), g.authToken ? c.sendMessage(i) : b.forHandshake.push(i);
                    });
                var R = function (e) {
                        var t = e.values.messageId,
                            n = c.messageCallbacks[t];
                        delete c.messageCallbacks[t], e.values.responseType === "success" && n.onSuccess();
                    },
                    U = function () {
                        if (a.getDomain().indexOf("smartsparrow.com") === -1) return;
                        a.setDomain("smartsparrow.com");
                    };
                (this.requestInternalViewerAccess = function () {
                    var e = new r({ type: r.TYPES.ALLOW_INTERNAL_ACCESS, handshake: this.getHandshake() });
                    c.sendMessage(e);
                }),
                    (this.notifyValueChange = function () {
                        return (
                            g.authToken &&
                                N === null &&
                                (N = setTimeout(function () {
                                    var e = c.createValueChangeMsg();
                                    c.sendMessage(e), (N = null);
                                    for (var t = 0; t < b.forValueChange.length; ++t) c.sendMessage(b.forValueChange[t]);
                                    b.forValueChange = [];
                                }, C)),
                            null
                        );
                    }),
                    (this.createValueChangeMsg = function () {
                        var e = new r({ type: r.TYPES.VALUE_CHANGE, handshake: c.getHandshake() });
                        return (e.values = h), e;
                    }),
                    (this.setValue = function (e) {
                        i(e).isOfType(s), (h[e.key] = e), this.notifyValueChange();
                    }),
                    (this.expose = function (e) {
                        i(e).isOfType(s);
                        var t = e.key,
                            n = z(t);
                        n !== undefined && (e.setValue(n), V([e])), (h[t] = e), this.notifyValueChange();
                    });
                var z = function (e) {
                    var t = p[e],
                        n = h[e],
                        r;
                    return t ? ((r = t), delete p[e]) : n && (r = n.value), r;
                };
                (this.removeValue = function (e) {
                    (h[e] = null), this.notifyValueChange();
                }),
                    (this.sendMessage = function (e) {
                        W() && window.parent.postMessage(JSON.stringify(e), "*");
                    });
                var W = function () {
                        return false;
                    },
                    X = function () {
                        return document.referrer.indexOf("/bronte/author") !== -1;
                    },
                    V = function (e) {
                        t.each(d, function (t) {
                            t(e);
                        });
                    };
                this.getConfig = function () {
                    return g.config;
                };
                var J = function (e) {
                    try {
                        var t = JSON.parse(e.data);
                        c.capiMessageHandler(t);
                    } catch (n) {}
                };
                e(document).ready(function () {
                    window.addEventListener("message", J);
                });
            },
            l = null,
            c = function () {
                return l || (l = new f()), l;
            };
        return { getInstance: c, Transporter: f };
    }),
    define("api/snapshot/adapters/BackboneAdapter", ["underscore", "api/snapshot/Transporter", "api/snapshot/SimCapiMessage", "api/snapshot/SimCapiValue", "api/snapshot/SimCapiTypes", "check"], function (e, t, n, r, i, s) {
        var o = function (n) {
                n = n || {};
                var s = n.transporter || t.getInstance(),
                    o = n.modelsMapping || {};
                (this.expose = function (t, n, u) {
                    u = u || {};
                    if (n.has(t)) {
                        var a = u,
                            f = t,
                            l = u.alias || t,
                            c = new r({ key: l, value: n.get(t), type: u.type, readonly: u.readonly, writeonly: u.writeonly, allowedValues: u.allowedValues, bindTo: u.bindTo });
                        if (c.type === i.TYPES.ARRAY || c.type === i.TYPES.ARRAY_POINT) c.value = "[" + n.get(f).toString() + "]";
                        var h = e.bind(function () {
                            var e = n.get(t),
                                o = new r({ key: l, value: e, type: a.type, readonly: a.readonly, writeonly: a.writeonly, allowedValues: u.allowedValues });
                            if (o.type === i.TYPES.ARRAY || o.type === i.TYPES.ARRAY_POINT) o.value = "[" + n.get(f).toString() + "]";
                            s.setValue(o);
                        }, this);
                        n.on("change:" + t, h), (o[l] = { alias: l, model: n, originalName: f, exposeFunc: h }), s.expose(c);
                    }
                }),
                    (this.unexpose = function (t, n) {
                        var r;
                        o[t] ? (r = o[t]) : (r = e.findWhere(o, { originalName: t, model: n }));
                        if (!r) throw new Error(t + " doesn't exist on the model.");
                        n.off("change:" + r.originalName, r.exposeFunc), s.removeValue(r.alias), delete o[r.alias];
                    }),
                    (this.exposeModel = function (t) {
                        e.each(
                            t.capiProperties,
                            e.bind(function (e, n) {
                                (e.model = t), this.expose(n, e);
                            }, this)
                        );
                    }),
                    (this.handleValueChange = function (t) {
                        e.each(
                            t,
                            function (e) {
                                if (o[e.key]) {
                                    var t = o[e.key].model,
                                        n = o[e.key].originalName;
                                    t.set(n, e.value);
                                }
                            },
                            this
                        );
                    }),
                    s.addChangeListener(e.bind(this.handleValueChange, this));
            },
            u = null,
            a = function () {
                return u || (u = new o()), u;
            };
        return { getInstance: a, BackboneAdapter: o };
    }),
    define("api/snapshot/Controller", ["api/snapshot/Transporter"], function (e) {
        return { notifyOnReady: e.getInstance().notifyOnReady, triggerCheck: e.getInstance().triggerCheck, getData: e.getInstance().getDataRequest, setData: e.getInstance().setDataRequest };
    }),
    define("ComponentLibrary", [], function () {
        "use strict";
        var e = {};
        return {
            init: function (t) {
                e = t;
            },
            getComponent: function (t) {
                if (!e[t]) throw new Error("Required component does not exist or it was not loaded (" + t + ")");
                return e[t];
            },
            getAllComponents: function () {
                return e;
            },
        };
    }),
    (function (e, t) {
        typeof define == "function" && define.amd ? define("ComponentSystem", [], t) : (e.componentSystem = t());
    })(this, function () {
        var e, t, n;
        return (
            (function (r) {
                function v(e, t) {
                    return h.call(e, t);
                }
                function m(e, t) {
                    var n,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        c,
                        h,
                        p,
                        v = t && t.split("/"),
                        m = l.map,
                        g = (m && m["*"]) || {};
                    if (e && e.charAt(0) === ".")
                        if (t) {
                            (v = v.slice(0, v.length - 1)), (e = e.split("/")), (o = e.length - 1), l.nodeIdCompat && d.test(e[o]) && (e[o] = e[o].replace(d, "")), (e = v.concat(e));
                            for (c = 0; c < e.length; c += 1) {
                                p = e[c];
                                if (p === ".") e.splice(c, 1), (c -= 1);
                                else if (p === "..") {
                                    if (c === 1 && (e[2] === ".." || e[0] === "..")) break;
                                    c > 0 && (e.splice(c - 1, 2), (c -= 2));
                                }
                            }
                            e = e.join("/");
                        } else e.indexOf("./") === 0 && (e = e.substring(2));
                    if ((v || g) && m) {
                        n = e.split("/");
                        for (c = n.length; c > 0; c -= 1) {
                            r = n.slice(0, c).join("/");
                            if (v)
                                for (h = v.length; h > 0; h -= 1) {
                                    i = m[v.slice(0, h).join("/")];
                                    if (i) {
                                        i = i[r];
                                        if (i) {
                                            (s = i), (u = c);
                                            break;
                                        }
                                    }
                                }
                            if (s) break;
                            !a && g && g[r] && ((a = g[r]), (f = c));
                        }
                        !s && a && ((s = a), (u = f)), s && (n.splice(0, u, s), (e = n.join("/")));
                    }
                    return e;
                }
                function g(e, t) {
                    return function () {
                        return s.apply(r, p.call(arguments, 0).concat([e, t]));
                    };
                }
                function y(e) {
                    return function (t) {
                        return m(t, e);
                    };
                }
                function b(e) {
                    return function (t) {
                        a[e] = t;
                    };
                }
                function w(e) {
                    if (v(f, e)) {
                        var t = f[e];
                        delete f[e], (c[e] = !0), i.apply(r, t);
                    }
                    if (!v(a, e) && !v(c, e)) throw new Error("No " + e);
                    return a[e];
                }
                function E(e) {
                    var t,
                        n = e ? e.indexOf("!") : -1;
                    return n > -1 && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
                }
                function S(e) {
                    return function () {
                        return (l && l.config && l.config[e]) || {};
                    };
                }
                var i,
                    s,
                    o,
                    u,
                    a = {},
                    f = {},
                    l = {},
                    c = {},
                    h = Object.prototype.hasOwnProperty,
                    p = [].slice,
                    d = /\.js$/;
                (o = function (e, t) {
                    var n,
                        r = E(e),
                        i = r[0];
                    return (
                        (e = r[1]),
                        i && ((i = m(i, t)), (n = w(i))),
                        i ? (n && n.normalize ? (e = n.normalize(e, y(t))) : (e = m(e, t))) : ((e = m(e, t)), (r = E(e)), (i = r[0]), (e = r[1]), i && (n = w(i))),
                        { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
                    );
                }),
                    (u = {
                        require: function (e) {
                            return g(e);
                        },
                        exports: function (e) {
                            var t = a[e];
                            return typeof t != "undefined" ? t : (a[e] = {});
                        },
                        module: function (e) {
                            return { id: e, uri: "", exports: a[e], config: S(e) };
                        },
                    }),
                    (i = function (e, t, n, i) {
                        var s,
                            l,
                            h,
                            p,
                            d,
                            m = [],
                            y = typeof n,
                            E;
                        i = i || e;
                        if (y === "undefined" || y === "function") {
                            t = !t.length && n.length ? ["require", "exports", "module"] : t;
                            for (d = 0; d < t.length; d += 1) {
                                (p = o(t[d], i)), (l = p.f);
                                if (l === "require") m[d] = u.require(e);
                                else if (l === "exports") (m[d] = u.exports(e)), (E = !0);
                                else if (l === "module") s = m[d] = u.module(e);
                                else if (v(a, l) || v(f, l) || v(c, l)) m[d] = w(l);
                                else {
                                    if (!p.p) throw new Error(e + " missing " + l);
                                    p.p.load(p.n, g(i, !0), b(l), {}), (m[d] = a[l]);
                                }
                            }
                            h = n ? n.apply(a[e], m) : undefined;
                            if (e)
                                if (s && s.exports !== r && s.exports !== a[e]) a[e] = s.exports;
                                else if (h !== r || !E) a[e] = h;
                        } else e && (a[e] = n);
                    }),
                    (e = t = s = function (e, t, n, a, f) {
                        if (typeof e == "string") return u[e] ? u[e](t) : w(o(e, t).f);
                        if (!e.splice) {
                            (l = e), l.deps && s(l.deps, l.callback);
                            if (!t) return;
                            t.splice ? ((e = t), (t = n), (n = null)) : (e = r);
                        }
                        return (
                            (t = t || function () {}),
                            typeof n == "function" && ((n = a), (a = f)),
                            a
                                ? i(r, e, t, n)
                                : setTimeout(function () {
                                      i(r, e, t, n);
                                  }, 4),
                            s
                        );
                    }),
                    (s.config = function (e) {
                        return s(e);
                    }),
                    (e._defined = a),
                    (n = function (e, t, n) {
                        t.splice || ((n = t), (t = [])), !v(a, e) && !v(f, e) && (f[e] = [e, t, n]);
                    }),
                    (n.amd = { jQuery: !0 });
            })(),
            n("../../bower_components/almond/almond", function () {}),
            n("componentize", [], function () {
                function e(e, t) {
                    for (var n in t) e[n] = t[n];
                }
                function t(t, n, r) {
                    var i = new t();
                    return (
                        (i.entity = this),
                        (this.components[r] = i),
                        i.start ? (this.notStartedComponents[r] = i) : i.update && (this.updatableComponents[r] = i),
                        Object.defineProperty(i, "UID", {
                            get: function () {
                                return i.entity.UID + "." + r;
                            },
                        }),
                        n && e(i, n),
                        i.initialize && i.initialize(),
                        i
                    );
                }
                function n(e) {
                    return e === "" || this[e] === null || this[e] === undefined;
                }
                function r(e) {
                    var t;
                    for (t in this.components) if (this.components[t] instanceof e) return this.components[t];
                    return null;
                }
                function i(e) {
                    var t = [],
                        n;
                    for (n in this.components) {
                        if (!(this.components[n] instanceof e)) continue;
                        t.push(this.components[n]);
                    }
                    return t;
                }
                function s(e) {
                    e.destroy && e.destroy();
                    var t;
                    for (t in this.components)
                        if (this.components[t] === e) {
                            delete this.components[t];
                            break;
                        }
                    delete this.notStartedComponents[t], delete this.updatableComponents[t], e.componentName && delete e.entity[e.componentName], (e.entity = null);
                }
                function o() {
                    var e;
                    for (e in this.components) this.removeComponent(this.components[e]);
                }
                function u(e, t, n) {
                    delete this.children[t], (e.parent = null), n || e.destroy();
                }
                function a(e, t) {
                    if (e.parent !== this) return;
                    for (var n in this.children) this.children[n] === e && u.call(this, e, n, t);
                }
                function f() {
                    for (var e in this.children) u.call(this, this.children[e], e);
                }
                function l(e) {
                    return this.getComponent(e) !== null;
                }
                function c() {
                    return Object.keys(this.children).length !== 0;
                }
                function h(e) {
                    this.runComponentsStart(e), this.runComponentsUpdate(e);
                }
                function p(e) {
                    var t, n;
                    for (t in this.notStartedComponents) {
                        (n = this.notStartedComponents[t]), n.start(e);
                        if (n.destroyed) continue;
                        n.update && (this.updatableComponents[t] = n), delete this.notStartedComponents[t];
                    }
                }
                function d(e) {
                    for (var t in this.updatableComponents) this.updatableComponents[t].update(e);
                }
                return function (e, u, v) {
                    (e.notStartedComponents = {}), (e.updatableComponents = {}), (e.components = {}), (e.children = {}), (v = v || {});
                    var m = 0,
                        g = !1;
                    Object.defineProperty(e, "destroyed", {
                        get: function () {
                            return g;
                        },
                    }),
                        Object.defineProperty(e, "UID", {
                            get: function () {
                                return u;
                            },
                        }),
                        (e.addComponent = function () {
                            var e, r, i;
                            arguments.length === 1 && ((e = ""), (r = arguments[0]), (i = {})),
                                arguments.length === 2 ? ((e = ""), (r = arguments[0]), (i = arguments[1])) : arguments.length === 3 && ((e = arguments[0]), (r = arguments[1]), (i = arguments[2]));
                            if (!n.call(this)) throw new Error(e + " already exists on entity.");
                            var s = t.call(this, r, i, m++);
                            return Object.defineProperty(s, "componentName", { configurable: !1, enumerable: !1, writable: !1, value: e }), e !== "" && (this[e] = s), s;
                        }),
                        (e.destroy = function () {
                            if (g) return;
                            this.removeAllComponents(), this.removeAllChildren(), (g = !0);
                        }),
                        (e.addChild = function (e, t) {
                            t || ((t = e), (e = t.UID));
                            if (t.parent === this) return;
                            t.parent && t.parent.removeChild(t, !0);
                            if (this === t) throw new Error("Entity can not add itself as a child");
                            var n = this.parent;
                            while (n) {
                                if (n === t) throw new Error("Child can not be added because it already exists in the parenting chain");
                                n = n.parent;
                            }
                            (this.children[e] = t), (t.parent = this), v.updateChildName && v.updateChildName(t, e);
                        }),
                        (e.getComponent = r),
                        (e.getComponents = i),
                        (e.removeComponent = s),
                        (e.removeAllComponents = o),
                        (e.removeChild = a),
                        (e.removeAllChildren = f),
                        (e.hasComponent = l),
                        (e.hasChildren = c),
                        (e.runComponents = h),
                        (e.runComponentsStart = p),
                        (e.runComponentsUpdate = d);
                };
            }),
            n("system", ["require", "componentize"], function (e) {
                function o(e) {
                    if (n[e].destroyed) {
                        var t = r[e];
                        return n[e].removeAllComponents(), delete n[e], i[t] && i[t].destroyed && delete i[t], delete r[e], !0;
                    }
                    return !1;
                }
                function u(e, t, n) {
                    for (var s in e.children) {
                        if (!e.children.hasOwnProperty(s)) continue;
                        var o = e.children[s],
                            a = r[o.UID],
                            f = r[o.UID].replace(t, n);
                        (r[o.UID] = f), delete i[a], (i[f] = o), u(o, t, n);
                    }
                }
                function a(e, t) {
                    var n = r[e.UID],
                        s = r[e.parent.UID] + "." + t;
                    n && (delete i[n], u(e, n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), s)), (r[e.UID] = s), (i[s] = e);
                }
                var t = e("componentize"),
                    n = {},
                    r = {},
                    i = {},
                    s = 0;
                return {
                    createEntity: function (e) {
                        var o = {},
                            u = s++;
                        return (e = e || u.toString()), t(o, u, { updateChildName: a }), (n[u] = o), (r[u] = e), (i[e] = o), o;
                    },
                    update: function (e) {
                        var t;
                        for (t in n) o(t) || n[t].runComponentsStart(e);
                        for (t in n) o(t) || n[t].runComponentsUpdate(e);
                    },
                    allInstancesOfComponent: function (e) {
                        var t = [];
                        for (var r in n) {
                            if (n[r].destroyed) continue;
                            var i = n[r].getComponents(e);
                            if (!i) continue;
                            t = t.concat(i);
                        }
                        return t;
                    },
                    firstInstanceOfComponent: function (e) {
                        for (var t in n) {
                            if (n[t].destroyed) continue;
                            var r = n[t].getComponent(e);
                            if (!r) continue;
                            return r;
                        }
                        return null;
                    },
                    start: function () {
                        for (var e in n) n[e].removeAllComponents(), n[e].destroy();
                        (n = {}), (r = {}), (i = {}), (this.Entities = i);
                    },
                    Entities: i,
                };
            }),
            n("main", ["require", "system"], function (e) {
                return e("system");
            }),
            t("main")
        );
    }),
    (function (e, t) {
        typeof define == "function" && define.amd ? define("SceneManager", ["jquery", "ComponentSystem", "ComponentLibrary"], t) : (e.SceneManager = t());
    })(this, function (e, t, n) {
        var r, i, s;
        return (
            (function (e) {
                function v(e, t) {
                    return h.call(e, t);
                }
                function m(e, t) {
                    var n,
                        r,
                        i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        c,
                        h,
                        p,
                        v = t && t.split("/"),
                        m = l.map,
                        g = (m && m["*"]) || {};
                    if (e && e.charAt(0) === ".")
                        if (t) {
                            (v = v.slice(0, v.length - 1)), (e = e.split("/")), (o = e.length - 1), l.nodeIdCompat && d.test(e[o]) && (e[o] = e[o].replace(d, "")), (e = v.concat(e));
                            for (c = 0; c < e.length; c += 1) {
                                p = e[c];
                                if (p === ".") e.splice(c, 1), (c -= 1);
                                else if (p === "..") {
                                    if (c === 1 && (e[2] === ".." || e[0] === "..")) break;
                                    c > 0 && (e.splice(c - 1, 2), (c -= 2));
                                }
                            }
                            e = e.join("/");
                        } else e.indexOf("./") === 0 && (e = e.substring(2));
                    if ((v || g) && m) {
                        n = e.split("/");
                        for (c = n.length; c > 0; c -= 1) {
                            r = n.slice(0, c).join("/");
                            if (v)
                                for (h = v.length; h > 0; h -= 1) {
                                    i = m[v.slice(0, h).join("/")];
                                    if (i) {
                                        i = i[r];
                                        if (i) {
                                            (s = i), (u = c);
                                            break;
                                        }
                                    }
                                }
                            if (s) break;
                            !a && g && g[r] && ((a = g[r]), (f = c));
                        }
                        !s && a && ((s = a), (u = f)), s && (n.splice(0, u, s), (e = n.join("/")));
                    }
                    return e;
                }
                function g(t, r) {
                    return function () {
                        return n.apply(e, p.call(arguments, 0).concat([t, r]));
                    };
                }
                function y(e) {
                    return function (t) {
                        return m(t, e);
                    };
                }
                function b(e) {
                    return function (t) {
                        a[e] = t;
                    };
                }
                function w(n) {
                    if (v(f, n)) {
                        var r = f[n];
                        delete f[n], (c[n] = !0), t.apply(e, r);
                    }
                    if (!v(a, n) && !v(c, n)) throw new Error("No " + n);
                    return a[n];
                }
                function E(e) {
                    var t,
                        n = e ? e.indexOf("!") : -1;
                    return n > -1 && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
                }
                function S(e) {
                    return function () {
                        return (l && l.config && l.config[e]) || {};
                    };
                }
                var t,
                    n,
                    o,
                    u,
                    a = {},
                    f = {},
                    l = {},
                    c = {},
                    h = Object.prototype.hasOwnProperty,
                    p = [].slice,
                    d = /\.js$/;
                (o = function (e, t) {
                    var n,
                        r = E(e),
                        i = r[0];
                    return (
                        (e = r[1]),
                        i && ((i = m(i, t)), (n = w(i))),
                        i ? (n && n.normalize ? (e = n.normalize(e, y(t))) : (e = m(e, t))) : ((e = m(e, t)), (r = E(e)), (i = r[0]), (e = r[1]), i && (n = w(i))),
                        { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
                    );
                }),
                    (u = {
                        require: function (e) {
                            return g(e);
                        },
                        exports: function (e) {
                            var t = a[e];
                            return typeof t != "undefined" ? t : (a[e] = {});
                        },
                        module: function (e) {
                            return { id: e, uri: "", exports: a[e], config: S(e) };
                        },
                    }),
                    (t = function (t, n, r, i) {
                        var s,
                            l,
                            h,
                            p,
                            d,
                            m = [],
                            y = typeof r,
                            E;
                        i = i || t;
                        if (y === "undefined" || y === "function") {
                            n = !n.length && r.length ? ["require", "exports", "module"] : n;
                            for (d = 0; d < n.length; d += 1) {
                                (p = o(n[d], i)), (l = p.f);
                                if (l === "require") m[d] = u.require(t);
                                else if (l === "exports") (m[d] = u.exports(t)), (E = !0);
                                else if (l === "module") s = m[d] = u.module(t);
                                else if (v(a, l) || v(f, l) || v(c, l)) m[d] = w(l);
                                else {
                                    if (!p.p) throw new Error(t + " missing " + l);
                                    p.p.load(p.n, g(i, !0), b(l), {}), (m[d] = a[l]);
                                }
                            }
                            h = r ? r.apply(a[t], m) : undefined;
                            if (t)
                                if (s && s.exports !== e && s.exports !== a[t]) a[t] = s.exports;
                                else if (h !== e || !E) a[t] = h;
                        } else t && (a[t] = r);
                    }),
                    (r = i = n = function (r, i, s, a, f) {
                        if (typeof r == "string") return u[r] ? u[r](i) : w(o(r, i).f);
                        if (!r.splice) {
                            (l = r), l.deps && n(l.deps, l.callback);
                            if (!i) return;
                            i.splice ? ((r = i), (i = s), (s = null)) : (r = e);
                        }
                        return (
                            (i = i || function () {}),
                            typeof s == "function" && ((s = a), (a = f)),
                            a
                                ? t(e, r, i, s)
                                : setTimeout(function () {
                                      t(e, r, i, s);
                                  }, 4),
                            n
                        );
                    }),
                    (n.config = function (e) {
                        return n(e);
                    }),
                    (r._defined = a),
                    (s = function (e, t, n) {
                        t.splice || ((n = t), (t = [])), !v(a, e) && !v(f, e) && (f[e] = [e, t, n]);
                    }),
                    (s.amd = { jQuery: !0 });
            })(),
            s("../../bower_components/almond/almond", function () {}),
            s("constants", [], function () {
                var e = {};
                return (
                    Object.defineProperty(e, "FACTORY", { value: "+", enumerable: !0 }),
                    Object.defineProperty(e, "REFERENCE", { value: "&", enumerable: !0 }),
                    Object.defineProperty(e, "INJECTION", { value: "~", enumerable: !0 }),
                    Object.defineProperty(e, "MEMBER", { value: ".", enumerable: !0 }),
                    Object.defineProperty(e, "PATTERN_ALL", { value: "*", enumerable: !0 }),
                    Object.defineProperty(e, "PATTERN_SELF", { value: "", enumerable: !0 }),
                    Object.defineProperty(e, "PATTERN_PARENT", { value: "^", enumerable: !0 }),
                    e
                );
            }),
            s("ResolutionProperty", ["require", "constants"], function (e) {
                var t = e("constants"),
                    n = function (e, t, n) {
                        (this.component = t), (this.propName = n), (this.entity = e);
                    };
                n.prototype.resolve = function (e, n, i) {
                    var o = typeof this.component == "string" ? this.component : this.component[this.propName],
                        u = o.substr(1).split(t.MEMBER),
                        a = o[0],
                        f = u.pop();
                    if (a === t.FACTORY) return n[f] || null;
                    if (a === t.INJECTION) {
                        var l = i[f];
                        return l !== undefined || l !== null ? l : null;
                    }
                    if (u.length === 0 || (u[0] === t.PATTERN_SELF && u.length === 1)) return s(this.entity, f);
                    var c = r(this.entity, e, u);
                    return s(c, f);
                };
                var r = function (e, n, r) {
                        var s = r.shift(),
                            o = n[s] || null;
                        return s === t.PATTERN_PARENT ? (o = e.parent || null) : s === t.PATTERN_SELF && (o = e || null), i(o, r);
                    },
                    i = function (e, n) {
                        if (e === null || !n.length) return e;
                        var r = n.shift();
                        return r === t.PATTERN_PARENT ? i(e.parent, n) : i(e.children[r] || null, n);
                    },
                    s = function (e, n) {
                        return e ? (n === t.PATTERN_ALL ? e : e[n] || null) : null;
                    };
                return n;
            }),
            s("ComponentQuery", ["require", "constants", "ResolutionProperty"], function (e) {
                var t = e("constants"),
                    n = e("ResolutionProperty"),
                    r = [t.REFERENCE, t.FACTORY, t.INJECTION],
                    i = {
                        addResolutionProperties: function (e, t) {
                            for (var r in t)
                                if (t.hasOwnProperty(r) && s(t[r])) e.push(new n(t.entity, t, r));
                                else if (t.hasOwnProperty(r) && Array.isArray(t[r])) {
                                    var i = t[r];
                                    for (var o in i) s(i[o]) && e.push(new n(t.entity, i, o));
                                }
                            return e;
                        },
                        resolveComponentReferences: function (e, t, n, r) {
                            var i;
                            try {
                                while (r.length) (i = r[0]), (i.component[i.propName] = i.resolve(e, t, n)), r.shift();
                            } catch (s) {
                                throw new Error("Error in input: " + s.message);
                            }
                        },
                    },
                    s = function (e) {
                        return (
                            typeof e == "string" &&
                            e.length > 0 &&
                            r.reduce(function (t, n) {
                                return n === e[0] || t;
                            }, !1)
                        );
                    };
                return i;
            }),
            s("EntityFactory", ["require", "constants", "jquery"], function (e) {
                var t = e("constants"),
                    n = e("jquery"),
                    r = function (e, t) {
                        (this.scene = e), (this.config = t);
                    };
                r.prototype.create = function (e) {
                    e = e || {};
                    var t = this.scene.addEntity(e.name, n.extend(!0, {}, this.config, e.config)),
                        r = i(e.references);
                    return this.scene.resolveReferences(r), t;
                };
                var i = function (e) {
                    var n = {};
                    for (var r in e)
                        if (r) {
                            var i = r[0] === t.INJECTION ? r.substr(1) : r;
                            n[i] = e[r];
                        }
                    return n;
                };
                return r;
            }),
            s("Scene", ["require", "ComponentSystem", "ComponentLibrary", "ComponentQuery", "EntityFactory", "jquery"], function (e) {
                var t = e("ComponentSystem"),
                    n = e("ComponentLibrary"),
                    r = e("ComponentQuery"),
                    i = e("EntityFactory"),
                    s = e("jquery"),
                    o = 1,
                    u = function (e) {
                        (this.config = a(e)),
                            (this.id = this.config.id),
                            Object.defineProperty(this, "Entities", {
                                get: function () {
                                    return t.Entities;
                                },
                            }),
                            (this.Factories = {}),
                            (this.references = []),
                            (this.$el = c(this.id));
                    };
                (u.prototype.addEntity = function (e, n, r) {
                    var i, s;
                    (s = t.createEntity(e)), (s.Scene = this);
                    for (i in n.components) {
                        if (!n.components.hasOwnProperty(i)) continue;
                        try {
                            this.addComponent(s, i, n.components[i]);
                        } catch (o) {
                            throw (console.warn("Component " + i + " was not attached.\n" + o.message), o);
                        }
                    }
                    r && r.addChild(e, s);
                    for (i in n.children) {
                        if (!n.children.hasOwnProperty(i)) continue;
                        this.addEntity(i, n.children[i], s);
                    }
                    return s;
                }),
                    (u.prototype.addComponent = function (e, t, i) {
                        var o, u, a;
                        return (i = s.extend({}, i)), (u = i.componentName || t), delete i.componentName, (o = n.getComponent(u)), (a = e.addComponent(t, o, i)), r.addResolutionProperties(this.references, a), a;
                    }),
                    (u.prototype.start = function () {
                        f.call(this), l.call(this);
                    }),
                    (u.prototype.unload = function () {
                        var e;
                        this.$el.remove();
                        for (e in this.Entities) {
                            if (!this.Entities.hasOwnProperty(e)) continue;
                            this.Entities[e].destroy(), delete this.Entities[e];
                        }
                        for (e in this.Factories) delete this.Factories[e];
                    }),
                    (u.prototype.resolveReferences = function (e) {
                        r.resolveComponentReferences(this.Entities, this.Factories, e, this.references);
                    }),
                    (u.create = function (e) {
                        return new u(e);
                    });
                var a = function (e) {
                        var t = {};
                        return (t.id = (e && e.id) || o++), (t.entities = e ? s.extend(!0, {}, e.entities) : {}), (t.factories = e ? s.extend(!0, {}, e.factories) : {}), t;
                    },
                    f = function () {
                        var e, t;
                        t = this.config.entities;
                        for (e in t) {
                            if (!t.hasOwnProperty(e)) continue;
                            this.addEntity(e, t[e]);
                        }
                    },
                    l = function () {
                        var e, t, n;
                        n = this.config.factories;
                        for (e in n) {
                            if (!n.hasOwnProperty(e)) continue;
                            this.Factories[e] = new i(this, n[e]);
                        }
                    },
                    c = function (e) {
                        return s('<div id="scene_' + e + '" class="scene" />');
                    };
                return u;
            }),
            s("Time", ["require", "ComponentSystem", "jquery"], function (e) {
                var t = e("ComponentSystem"),
                    n = e("jquery"),
                    r = function (e) {
                        (this.playing = !0),
                            (this.ts = 0),
                            (this.lastTs = 0),
                            (this.elapsed = 0),
                            (this.sinceAppStart = 0),
                            (this.sinceSceneStart = 0),
                            (this.pauseStartTs = null),
                            (this.playStateOverwrite = !0),
                            e && (n(window).on("focus", n.proxy(o, this, !0)), n(window).on("blur", n.proxy(o, this, !1)));
                    };
                (r.prototype.resetSceneTimer = function () {
                    this.sinceSceneStart = 0;
                }),
                    (r.prototype.pause = function () {
                        (this.playing = !1), (this.playStateOverwrite = !1);
                    }),
                    (r.prototype.play = function () {
                        (this.playing = !0), (this.playStateOverwrite = !0);
                    }),
                    (r.prototype.update = function (e) {
                        (this.ts = e), this.playing ? (s.call(this), t.update(this)) : i.call(this);
                    }),
                    (r.create = function (e) {
                        return new r(e);
                    });
                var i = function () {
                        this.pauseStartTs === null && (this.pauseStartTs = this.ts);
                    },
                    s = function () {
                        this.lastTs || (this.lastTs = this.ts),
                            this.pauseStartTs && ((this.lastTs = this.ts), (this.pauseStartTs = null)),
                            (this.elapsed = this.ts - this.lastTs),
                            (this.sinceAppStart += this.elapsed),
                            (this.sinceSceneStart += this.elapsed),
                            (this.lastTs = this.ts);
                    },
                    o = function (e) {
                        this.playStateOverwrite && (this.playing = e);
                    };
                return r;
            }),
            s("PerformancePolyfill", [], function () {
                (function () {
                    if (!("performance" in window)) {
                        (window.performance = {}),
                            (Date.now =
                                Date.now ||
                                function () {
                                    return new Date().getTime();
                                });
                        if (!("now" in window.performance)) {
                            var e = Date.now();
                            performance.timing !== undefined && performance.timing.navigationStart !== undefined && (e = performance.timing.navigationStart),
                                (window.performance.now = function () {
                                    return Date.now() - e;
                                });
                        }
                    }
                })();
            }),
            s("Manager", ["require", "ComponentSystem", "Scene", "Time", "jquery", "./PerformancePolyfill"], function (e) {
                "use strict";
                var t = e("ComponentSystem"),
                    n = e("Scene"),
                    r = e("Time"),
                    i = e("jquery");
                e("./PerformancePolyfill");
                var s = {
                        Scenes: {},
                        ActiveScene: null,
                        parent: null,
                        $el: null,
                        startTime: 0,
                        sceneStartTime: 0,
                        lastUpdate: 0,
                        create: function (e) {
                            (this.parent = e.parent || document.body), (this.$el = i(this.parent)), (this.Time = r.create(e.pauseOnBlur === !1 ? !1 : e.pauseOnBlur || !0)), o(e), t.start(), requestAnimationFrame(i.proxy(this.update, this));
                        },
                        startScene: function (e) {
                            var t = this.Scenes[e] || this.Scenes[Object.keys(this.Scenes)[0]];
                            return this.ActiveScene && this.ActiveScene.unload(), this.$el.append(t.$el), (this.ActiveScene = t), this.Time.resetSceneTimer(), t.start(), this.update(), this.ActiveScene;
                        },
                        update: function (e) {
                            (e = e || performance.now()), this.ActiveScene && this.ActiveScene.resolveReferences(), this.Time.update(e), requestAnimationFrame(i.proxy(this.update, this));
                        },
                    },
                    o = function (e) {
                        if (!(e instanceof Object && e.scenes instanceof Object && Object.keys(e.scenes).length !== 0)) throw new Error("No scenes detected on the config file.");
                        var t, r, i;
                        for (t in e.scenes) {
                            if (!e.scenes.hasOwnProperty(t)) continue;
                            (r = e.scenes[t]), (i = n.create(r));
                            if (s.Scenes[i.id]) throw new Error("A scene with the same ID already exists");
                            s.Scenes[i.id] = i;
                        }
                    };
                return (
                    (window.requestAnimationFrame =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        function (e) {
                            window.setTimeout(e, 1e3 / 60);
                        }),
                    s
                );
            }),
            s("jquery", function () {
                return e;
            }),
            s("ComponentSystem", function () {
                return t;
            }),
            s("ComponentLibrary", function () {
                return n;
            }),
            i("Manager")
        );
    }),
    define("componentLibrary-Renderers/HtmlRenderer", ["require", "jquery", "SceneManager"], function (e) {
        function b(e, t, n, o, u, a, f, l) {
            var c = "",
                h = "";
            if (t !== null || n !== null || o !== null || u !== null || a !== null || f !== null || l !== null)
                (c =
                    "translate3d(" +
                    (t || 0) +
                    r +
                    ", " +
                    (n || 0) +
                    r +
                    ", 0px) " +
                    "rotate3d(0, 0, 1, " +
                    (o || 0) +
                    i +
                    ") " +
                    "scale3d(" +
                    (u || 1) +
                    ", " +
                    (a || 1) +
                    ", 1) " +
                    "skewX(" +
                    (f || 0) +
                    s +
                    ") " +
                    "skewY(" +
                    (l || 0) +
                    s +
                    ")"),
                    (h = "translate(" + (t || 0) + r + ", " + (n || 0) + r + ") " + "rotate(" + (o || 0) + i + ") " + "scale(" + (u || 1) + ", " + (a || 1) + ") " + "skewX(" + (f || 0) + s + ") " + "skewY(" + (l || 0) + s + ")");
            e.css({ transform: c }), e.css({ "-webkit-transform": c }), e.css({ "-ms-transform": h });
        }
        function w(e, t) {
            var n = e.css("transform") || e.css("-webkit-transform") || e.css("-ms-transform");
            return new RegExp(t).exec(n);
        }
        function E(e) {
            var t = w(e, o);
            return t ? { x: t[1], y: t[2] } : ((t = w(e, c)), t ? { x: t[1], y: t[2] } : { x: null, y: null });
        }
        function S(e) {
            var t = w(e, u);
            return t ? { rotation: t[1] } : ((t = w(e, h)), t ? { rotation: t[1] } : { rotation: null });
        }
        function x(e) {
            var t = w(e, a);
            return t ? { x: t[1], y: t[2] } : ((t = w(e, p)), t ? { x: t[1], y: t[2] } : { x: null, y: null });
        }
        function T(e) {
            var t = w(e, f),
                n = w(e, l),
                r = null,
                i = null;
            return t && (r = t[1]), n && (i = n[1]), { x: r, y: i };
        }
        function N(e) {
            return e === null || e === undefined || isNaN(parseFloat(e)) ? null : parseFloat(e);
        }
        function C(e) {
            return e === null || e === undefined || isNaN(parseInt(e, 10)) ? null : parseInt(e, 10);
        }
        var t = e("jquery"),
            n = e("SceneManager"),
            r = "px",
            i = "deg",
            s = "deg",
            o = /translate3d\s*\(\s*([0-9]+)px,\s*?([0-9]+)px.*\)/,
            u = /rotate3d\s*\(\s*0\s*,\s*0\s*,\s*1\s*,\s*([0-9]+)deg\s*\)/,
            a = /scale3d\s*\(\s*([0-9]+),\s*([0-9]+).*\)/,
            f = /skewX\s*\(\s*([0-9]+)deg\s*\)/,
            l = /skewY\s*\(\s*([0-9]+)deg\s*\)/,
            c = /translate\s*\(\s*([0-9]+)px,\s*?([0-9]+)px\s*\)/,
            h = /rotate\s*\(\s*([0-9]+)deg\s*\)/,
            p = /scale\s*\(\s*([0-9]+),\s*([0-9]+).*\)/,
            d = function () {
                (this.parent = null),
                    (this.type = "div"),
                    (this.attributes = {}),
                    (this.x = null),
                    (this.y = null),
                    (this.z = null),
                    (this.rotation = null),
                    (this.scaleX = null),
                    (this.scaleY = null),
                    (this.skewX = null),
                    (this.skewY = null),
                    (this.width = null),
                    (this.height = null),
                    (this.alpha = null);
            };
        (d.prototype.initialize = function () {
            m.call(this);
        }),
            (d.prototype.start = function () {
                this.class && this.$el.addClass(this.class), y.call(this), g.call(this);
            }),
            (d.prototype.syncFromCss = function () {
                var e = E(this.$el),
                    t = S(this.$el).rotation,
                    n = x(this.$el),
                    r = T(this.$el);
                (this.x = e.x),
                    (this.y = e.y),
                    (this.z = C(this.$el.get(0).style["z-index"])),
                    (this.rotation = N(t)),
                    (this.scaleX = N(n.x)),
                    (this.scaleY = N(n.y)),
                    (this.skewX = N(r.x)),
                    (this.skewY = N(r.y)),
                    (this.width = N(this.$el.get(0).style.width)),
                    (this.height = N(this.$el.get(0).style.height)),
                    (this.alpha = N(this.$el.get(0).style.opacity));
            }),
            (d.prototype.destroy = function () {
                if (!this.$el) return;
                this.$el.remove();
            });
        var v = function (e) {
                if (e && e.$el) return e;
                if (this.entity && this.entity.parent) {
                    var t = this.entity.parent.getComponent(d);
                    if (t) return t;
                }
                return n.ActiveScene;
            },
            m = function () {
                this.$el = t("<" + this.type + "/>");
                for (var e in this.attributes) this.$el.attr(e, this.attributes[e]);
                this.$el.data("entity", this.entity);
            },
            g = function () {
                var e = this.parent,
                    t;
                Object.defineProperty(this, "parent", {
                    get: function () {
                        return t;
                    },
                    set: function (e) {
                        e = v.call(this, e);
                        if (e === t) return;
                        (t = e), t.$el.append(this.$el);
                    },
                }),
                    (this.parent = e);
            },
            y = function () {
                var e = this.x,
                    t = this.y,
                    n = this.z,
                    i = this.rotation,
                    s = this.scaleX,
                    o = this.scaleY,
                    u = this.skewX,
                    a = this.skewY,
                    f = this.width,
                    l = this.height,
                    c = this.alpha,
                    h = !!this.forceValues;
                Object.defineProperty(this, "forceValues", {
                    get: function () {
                        return h;
                    },
                    set: function (e) {
                        h = !!e;
                    },
                }),
                    Object.defineProperty(this, "x", {
                        get: function () {
                            return e;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (e === r && !h) return;
                            (e = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "y", {
                        get: function () {
                            return t;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (t === r && !h) return;
                            (t = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "z", {
                        get: function () {
                            return n;
                        },
                        set: function (e) {
                            var t = C(e);
                            if (n === t && !h) return;
                            (n = t), this.$el.css("z-index", n === null ? "" : n);
                        },
                    }),
                    Object.defineProperty(this, "rotation", {
                        get: function () {
                            return i;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (i === r && !h) return;
                            (i = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "scaleX", {
                        get: function () {
                            return s;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (s === r && !h) return;
                            (s = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "scaleY", {
                        get: function () {
                            return o;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (o === r && !h) return;
                            (o = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "skewX", {
                        get: function () {
                            return u;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (u === r && !h) return;
                            (u = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "skewY", {
                        get: function () {
                            return a;
                        },
                        set: function (n) {
                            var r = N(n);
                            if (a === r && !h) return;
                            (a = r), b(this.$el, e, t, i, s, o, u, a);
                        },
                    }),
                    Object.defineProperty(this, "width", {
                        get: function () {
                            return f;
                        },
                        set: function (e) {
                            var t = N(e);
                            if (f === t && !h) return;
                            (f = t), this.$el.css("width", f === null ? "" : f + r);
                        },
                    }),
                    Object.defineProperty(this, "height", {
                        get: function () {
                            return l;
                        },
                        set: function (e) {
                            var t = N(e);
                            if (l === t && !h) return;
                            (l = t), this.$el.css("height", l === null ? "" : l + r);
                        },
                    }),
                    Object.defineProperty(this, "alpha", {
                        get: function () {
                            return c;
                        },
                        set: function (e) {
                            var t = N(e);
                            if (c === t && !h) return;
                            (c = t), this.$el.css("opacity", c === null ? "" : c);
                        },
                    });
                var p = h;
                (h = !0), (this.x = e), (this.y = t), (this.z = n), (this.rotation = i), (this.scaleX = s), (this.scaleY = o), (this.skewX = u), (this.skewY = a), (this.width = f), (this.height = l), (this.alpha = c), (h = p);
            };
        return d;
    }),
    define("componentLibrary-Renderers/TextRenderer", ["require", "./HtmlRenderer"], function (e) {
        var t = e("./HtmlRenderer"),
            n = function () {
                t.apply(this), (this.__super__ = t.prototype), (this.text = "");
            };
        (n.prototype = new t()),
            (n.prototype.constructor = n),
            (n.prototype.start = function () {
                this.__super__.start.apply(this), r.call(this);
            }),
            (n.prototype.syncFromCss = function () {
                this.__super__.syncFromCss.apply(this), (this.text = this.$el.html());
            });
        var r = function () {
            var e = this.text;
            Object.defineProperty(this, "text", {
                get: function () {
                    return e;
                },
                set: function (t) {
                    if (e === t && !this.forceValues) return;
                    (e = t), this.$el.html(t);
                },
            });
            var t = this.forceValues;
            (this.forceValues = !0), (this.text = e), (this.forceValues = t);
        };
        return n;
    }),
    define("componentLibrary-Renderers/TemplateRenderer", ["require", "jquery", "underscore", "ComponentLibrary", "./HtmlRenderer"], function (e) {
        var t = e("jquery"),
            n = e("underscore"),
            r = e("ComponentLibrary"),
            i = e("./HtmlRenderer"),
            s = function () {
                i.apply(this), (this.__super__ = i.prototype), (this.template = ""), (this.templateData = {});
            };
        (s.prototype = new i()),
            (s.prototype.constructor = s),
            (s.prototype.initialize = function () {
                o.call(this);
            });
        var o = function () {
            var e = r.getComponent(this.template);
            (this.$el = t(n.template(e)(this.templateData))), this.class && this.$el.addClass(this.class);
            for (var i in this.attributes) this.$el.prop(i, this.attributes[i]);
        };
        return s;
    }),
    (function (e) {
        typeof define == "function" && define.amd ? define("jquery-ui/core", ["jquery"], e) : e(jQuery);
    })(function (e) {
        function t(t, r) {
            var i,
                s,
                o,
                u = t.nodeName.toLowerCase();
            return "area" === u
                ? ((i = t.parentNode), (s = i.name), !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : ((o = e("img[usemap='#" + s + "']")[0]), !!o && n(o)))
                : (/^(input|select|textarea|button|object)$/.test(u) ? !t.disabled : "a" === u ? t.href || r : r) && n(t);
        }
        function n(t) {
            return (
                e.expr.filters.visible(t) &&
                !e(t)
                    .parents()
                    .addBack()
                    .filter(function () {
                        return e.css(this, "visibility") === "hidden";
                    }).length
            );
        }
        (e.ui = e.ui || {}),
            e.extend(e.ui, {
                version: "1.11.4",
                keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 },
            }),
            e.fn.extend({
                scrollParent: function (t) {
                    var n = this.css("position"),
                        r = n === "absolute",
                        i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        s = this.parents()
                            .filter(function () {
                                var t = e(this);
                                return r && t.css("position") === "static" ? !1 : i.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                            })
                            .eq(0);
                    return n === "fixed" || !s.length ? e(this[0].ownerDocument || document) : s;
                },
                uniqueId: (function () {
                    var e = 0;
                    return function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++e);
                        });
                    };
                })(),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
                    });
                },
            }),
            e.extend(e.expr[":"], {
                data: e.expr.createPseudo
                    ? e.expr.createPseudo(function (t) {
                          return function (n) {
                              return !!e.data(n, t);
                          };
                      })
                    : function (t, n, r) {
                          return !!e.data(t, r[3]);
                      },
                focusable: function (n) {
                    return t(n, !isNaN(e.attr(n, "tabindex")));
                },
                tabbable: function (n) {
                    var r = e.attr(n, "tabindex"),
                        i = isNaN(r);
                    return (i || r >= 0) && t(n, !i);
                },
            }),
            e("<a>").outerWidth(1).jquery ||
                e.each(["Width", "Height"], function (t, n) {
                    function o(t, n, i, s) {
                        return (
                            e.each(r, function () {
                                (n -= parseFloat(e.css(t, "padding" + this)) || 0), i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
                            }),
                            n
                        );
                    }
                    var r = n === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                        i = n.toLowerCase(),
                        s = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
                    (e.fn["inner" + n] = function (t) {
                        return t === undefined
                            ? s["inner" + n].call(this)
                            : this.each(function () {
                                  e(this).css(i, o(this, t) + "px");
                              });
                    }),
                        (e.fn["outer" + n] = function (t, r) {
                            return typeof t != "number"
                                ? s["outer" + n].call(this, t)
                                : this.each(function () {
                                      e(this).css(i, o(this, t, !0, r) + "px");
                                  });
                        });
                }),
            e.fn.addBack ||
                (e.fn.addBack = function (e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
                }),
            e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
                (e.fn.removeData = (function (t) {
                    return function (n) {
                        return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
                    };
                })(e.fn.removeData)),
            (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
            e.fn.extend({
                focus: (function (t) {
                    return function (n, r) {
                        return typeof n == "number"
                            ? this.each(function () {
                                  var t = this;
                                  setTimeout(function () {
                                      e(t).focus(), r && r.call(t);
                                  }, n);
                              })
                            : t.apply(this, arguments);
                    };
                })(e.fn.focus),
                disableSelection: (function () {
                    var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.bind(e + ".ui-disableSelection", function (e) {
                            e.preventDefault();
                        });
                    };
                })(),
                enableSelection: function () {
                    return this.unbind(".ui-disableSelection");
                },
                zIndex: function (t) {
                    if (t !== undefined) return this.css("zIndex", t);
                    if (this.length) {
                        var n = e(this[0]),
                            r,
                            i;
                        while (n.length && n[0] !== document) {
                            r = n.css("position");
                            if (r === "absolute" || r === "relative" || r === "fixed") {
                                i = parseInt(n.css("zIndex"), 10);
                                if (!isNaN(i) && i !== 0) return i;
                            }
                            n = n.parent();
                        }
                    }
                    return 0;
                },
            }),
            (e.ui.plugin = {
                add: function (t, n, r) {
                    var i,
                        s = e.ui[t].prototype;
                    for (i in r) (s.plugins[i] = s.plugins[i] || []), s.plugins[i].push([n, r[i]]);
                },
                call: function (e, t, n, r) {
                    var i,
                        s = e.plugins[t];
                    if (!s) return;
                    if (!r && (!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)) return;
                    for (i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n);
                },
            });
    }),
    (function (e) {
        typeof define == "function" && define.amd ? define("jquery-ui/widget", ["jquery"], e) : e(jQuery);
    })(function (e) {
        var t = 0,
            n = Array.prototype.slice;
        return (
            (e.cleanData = (function (t) {
                return function (n) {
                    var r, i, s;
                    for (s = 0; (i = n[s]) != null; s++)
                        try {
                            (r = e._data(i, "events")), r && r.remove && e(i).triggerHandler("remove");
                        } catch (o) {}
                    t(n);
                };
            })(e.cleanData)),
            (e.widget = function (t, n, r) {
                var i,
                    s,
                    o,
                    u,
                    a = {},
                    f = t.split(".")[0];
                return (
                    (t = t.split(".")[1]),
                    (i = f + "-" + t),
                    r || ((r = n), (n = e.Widget)),
                    (e.expr[":"][i.toLowerCase()] = function (t) {
                        return !!e.data(t, i);
                    }),
                    (e[f] = e[f] || {}),
                    (s = e[f][t]),
                    (o = e[f][t] = function (e, t) {
                        if (!this._createWidget) return new o(e, t);
                        arguments.length && this._createWidget(e, t);
                    }),
                    e.extend(o, s, { version: r.version, _proto: e.extend({}, r), _childConstructors: [] }),
                    (u = new n()),
                    (u.options = e.widget.extend({}, u.options)),
                    e.each(r, function (t, r) {
                        if (!e.isFunction(r)) {
                            a[t] = r;
                            return;
                        }
                        a[t] = (function () {
                            var e = function () {
                                    return n.prototype[t].apply(this, arguments);
                                },
                                i = function (e) {
                                    return n.prototype[t].apply(this, e);
                                };
                            return function () {
                                var t = this._super,
                                    n = this._superApply,
                                    s;
                                return (this._super = e), (this._superApply = i), (s = r.apply(this, arguments)), (this._super = t), (this._superApply = n), s;
                            };
                        })();
                    }),
                    (o.prototype = e.widget.extend(u, { widgetEventPrefix: s ? u.widgetEventPrefix || t : t }, a, { constructor: o, namespace: f, widgetName: t, widgetFullName: i })),
                    s
                        ? (e.each(s._childConstructors, function (t, n) {
                              var r = n.prototype;
                              e.widget(r.namespace + "." + r.widgetName, o, n._proto);
                          }),
                          delete s._childConstructors)
                        : n._childConstructors.push(o),
                    e.widget.bridge(t, o),
                    o
                );
            }),
            (e.widget.extend = function (t) {
                var r = n.call(arguments, 1),
                    i = 0,
                    s = r.length,
                    o,
                    u;
                for (; i < s; i++) for (o in r[i]) (u = r[i][o]), r[i].hasOwnProperty(o) && u !== undefined && (e.isPlainObject(u) ? (t[o] = e.isPlainObject(t[o]) ? e.widget.extend({}, t[o], u) : e.widget.extend({}, u)) : (t[o] = u));
                return t;
            }),
            (e.widget.bridge = function (t, r) {
                var i = r.prototype.widgetFullName || t;
                e.fn[t] = function (s) {
                    var o = typeof s == "string",
                        u = n.call(arguments, 1),
                        a = this;
                    return (
                        o
                            ? this.each(function () {
                                  var n,
                                      r = e.data(this, i);
                                  if (s === "instance") return (a = r), !1;
                                  if (!r) return e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + s + "'");
                                  if (!e.isFunction(r[s]) || s.charAt(0) === "_") return e.error("no such method '" + s + "' for " + t + " widget instance");
                                  n = r[s].apply(r, u);
                                  if (n !== r && n !== undefined) return (a = n && n.jquery ? a.pushStack(n.get()) : n), !1;
                              })
                            : (u.length && (s = e.widget.extend.apply(null, [s].concat(u))),
                              this.each(function () {
                                  var t = e.data(this, i);
                                  t ? (t.option(s || {}), t._init && t._init()) : e.data(this, i, new r(s, this));
                              })),
                        a
                    );
                };
            }),
            (e.Widget = function () {}),
            (e.Widget._childConstructors = []),
            (e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { disabled: !1, create: null },
                _createWidget: function (n, r) {
                    (r = e(r || this.defaultElement || this)[0]),
                        (this.element = e(r)),
                        (this.uuid = t++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.bindings = e()),
                        (this.hoverable = e()),
                        (this.focusable = e()),
                        r !== this &&
                            (e.data(r, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (e) {
                                    e.target === r && this.destroy();
                                },
                            }),
                            (this.document = e(r.style ? r.ownerDocument : r.document || r)),
                            (this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
                        (this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init();
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function () {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                        this.widget()
                            .unbind(this.eventNamespace)
                            .removeAttr("aria-disabled")
                            .removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus");
                },
                _destroy: e.noop,
                widget: function () {
                    return this.element;
                },
                option: function (t, n) {
                    var r = t,
                        i,
                        s,
                        o;
                    if (arguments.length === 0) return e.widget.extend({}, this.options);
                    if (typeof t == "string") {
                        (r = {}), (i = t.split(".")), (t = i.shift());
                        if (i.length) {
                            s = r[t] = e.widget.extend({}, this.options[t]);
                            for (o = 0; o < i.length - 1; o++) (s[i[o]] = s[i[o]] || {}), (s = s[i[o]]);
                            t = i.pop();
                            if (arguments.length === 1) return s[t] === undefined ? null : s[t];
                            s[t] = n;
                        } else {
                            if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                            r[t] = n;
                        }
                    }
                    return this._setOptions(r), this;
                },
                _setOptions: function (e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this;
                },
                _setOption: function (e, t) {
                    return (
                        (this.options[e] = t), e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                    );
                },
                enable: function () {
                    return this._setOptions({ disabled: !1 });
                },
                disable: function () {
                    return this._setOptions({ disabled: !0 });
                },
                _on: function (t, n, r) {
                    var i,
                        s = this;
                    typeof t != "boolean" && ((r = n), (n = t), (t = !1)),
                        r ? ((n = i = e(n)), (this.bindings = this.bindings.add(n))) : ((r = n), (n = this.element), (i = this.widget())),
                        e.each(r, function (r, o) {
                            function u() {
                                if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                                return (typeof o == "string" ? s[o] : o).apply(s, arguments);
                            }
                            typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                            var a = r.match(/^([\w:-]*)\s*(.*)$/),
                                f = a[1] + s.eventNamespace,
                                l = a[2];
                            l ? i.delegate(l, f, u) : n.bind(f, u);
                        });
                },
                _off: function (t, n) {
                    (n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                        t.unbind(n).undelegate(n),
                        (this.bindings = e(this.bindings.not(t).get())),
                        (this.focusable = e(this.focusable.not(t).get())),
                        (this.hoverable = e(this.hoverable.not(t).get()));
                },
                _delay: function (e, t) {
                    function n() {
                        return (typeof e == "string" ? r[e] : e).apply(r, arguments);
                    }
                    var r = this;
                    return setTimeout(n, t || 0);
                },
                _hoverable: function (t) {
                    (this.hoverable = this.hoverable.add(t)),
                        this._on(t, {
                            mouseenter: function (t) {
                                e(t.currentTarget).addClass("ui-state-hover");
                            },
                            mouseleave: function (t) {
                                e(t.currentTarget).removeClass("ui-state-hover");
                            },
                        });
                },
                _focusable: function (t) {
                    (this.focusable = this.focusable.add(t)),
                        this._on(t, {
                            focusin: function (t) {
                                e(t.currentTarget).addClass("ui-state-focus");
                            },
                            focusout: function (t) {
                                e(t.currentTarget).removeClass("ui-state-focus");
                            },
                        });
                },
                _trigger: function (t, n, r) {
                    var i,
                        s,
                        o = this.options[t];
                    (r = r || {}), (n = e.Event(n)), (n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (n.target = this.element[0]), (s = n.originalEvent);
                    if (s) for (i in s) i in n || (n[i] = s[i]);
                    return this.element.trigger(n, r), !((e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1) || n.isDefaultPrevented());
                },
            }),
            e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) {
                e.Widget.prototype["_" + t] = function (r, i, s) {
                    typeof i == "string" && (i = { effect: i });
                    var o,
                        u = i ? (i === !0 || typeof i == "number" ? n : i.effect || n) : t;
                    (i = i || {}),
                        typeof i == "number" && (i = { duration: i }),
                        (o = !e.isEmptyObject(i)),
                        (i.complete = s),
                        i.delay && r.delay(i.delay),
                        o && e.effects && e.effects.effect[u]
                            ? r[t](i)
                            : u !== t && r[u]
                            ? r[u](i.duration, i.easing, s)
                            : r.queue(function (n) {
                                  e(this)[t](), s && s.call(r[0]), n();
                              });
                };
            }),
            e.widget
        );
    }),
    (function (e) {
        typeof define == "function" && define.amd ? define("jquery-ui/mouse", ["jquery", "./widget"], e) : e(jQuery);
    })(function (e) {
        var t = !1;
        return (
            e(document).mouseup(function () {
                t = !1;
            }),
            e.widget("ui.mouse", {
                version: "1.11.4",
                options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
                _mouseInit: function () {
                    var t = this;
                    this.element
                        .bind("mousedown." + this.widgetName, function (e) {
                            return t._mouseDown(e);
                        })
                        .bind("click." + this.widgetName, function (n) {
                            if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1;
                        }),
                        (this.started = !1);
                },
                _mouseDestroy: function () {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function (n) {
                    if (t) return;
                    (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(n), (this._mouseDownEvent = n);
                    var r = this,
                        i = n.which === 1,
                        s = typeof this.options.cancel == "string" && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                    if (!i || s || !this._mouseCapture(n)) return !0;
                    (this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                            (this._mouseDelayTimer = setTimeout(function () {
                                r.mouseDelayMet = !0;
                            }, this.options.delay));
                    if (this._mouseDistanceMet(n) && this._mouseDelayMet(n)) {
                        this._mouseStarted = this._mouseStart(n) !== !1;
                        if (!this._mouseStarted) return n.preventDefault(), !0;
                    }
                    return (
                        !0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"),
                        (this._mouseMoveDelegate = function (e) {
                            return r._mouseMove(e);
                        }),
                        (this._mouseUpDelegate = function (e) {
                            return r._mouseUp(e);
                        }),
                        this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        n.preventDefault(),
                        (t = !0),
                        !0
                    );
                },
                _mouseMove: function (t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which) return this._mouseUp(t);
                    }
                    if (t.which || t.button) this._mouseMoved = !0;
                    return this._mouseStarted
                        ? (this._mouseDrag(t), t.preventDefault())
                        : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
                },
                _mouseUp: function (n) {
                    return (
                        this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && ((this._mouseStarted = !1), n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)),
                        (t = !1),
                        !1
                    );
                },
                _mouseDistanceMet: function (e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function () {
                    return this.mouseDelayMet;
                },
                _mouseStart: function () {},
                _mouseDrag: function () {},
                _mouseStop: function () {},
                _mouseCapture: function () {
                    return !0;
                },
            })
        );
    }),
    (function (e) {
        typeof define == "function" && define.amd ? define("jquery-ui/draggable", ["jquery", "./core", "./mouse", "./widget"], e) : e(jQuery);
    })(function (e) {
        return (
            e.widget("ui.draggable", e.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null,
                },
                _create: function () {
                    this.options.helper === "original" && this._setPositionRelative(),
                        this.options.addClasses && this.element.addClass("ui-draggable"),
                        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                        this._setHandleClassName(),
                        this._mouseInit();
                },
                _setOption: function (e, t) {
                    this._super(e, t), e === "handle" && (this._removeHandleClassName(), this._setHandleClassName());
                },
                _destroy: function () {
                    if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                        this.destroyOnClear = !0;
                        return;
                    }
                    this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy();
                },
                _mouseCapture: function (t) {
                    var n = this.options;
                    return (
                        this._blurActiveElement(t),
                        this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : ((this.handle = this._getHandle(t)), this.handle ? (this._blockFrames(n.iframeFix === !0 ? "iframe" : n.iframeFix), !0) : !1)
                    );
                },
                _blockFrames: function (t) {
                    this.iframeBlocks = this.document.find(t).map(function () {
                        var t = e(this);
                        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
                    });
                },
                _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
                },
                _blurActiveElement: function (t) {
                    var n = this.document[0];
                    if (!this.handleElement.is(t.target)) return;
                    try {
                        n.activeElement && n.activeElement.nodeName.toLowerCase() !== "body" && e(n.activeElement).blur();
                    } catch (r) {}
                },
                _mouseStart: function (t) {
                    var n = this.options;
                    return (
                        (this.helper = this._createHelper(t)),
                        this.helper.addClass("ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        e.ui.ddmanager && (e.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        (this.cssPosition = this.helper.css("position")),
                        (this.scrollParent = this.helper.scrollParent(!0)),
                        (this.offsetParent = this.helper.offsetParent()),
                        (this.hasFixedAncestor =
                            this.helper.parents().filter(function () {
                                return e(this).css("position") === "fixed";
                            }).length > 0),
                        (this.positionAbs = this.element.offset()),
                        this._refreshOffsets(t),
                        (this.originalPosition = this.position = this._generatePosition(t, !1)),
                        (this.originalPageX = t.pageX),
                        (this.originalPageY = t.pageY),
                        n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
                        this._setContainment(),
                        this._trigger("start", t) === !1
                            ? (this._clear(), !1)
                            : (this._cacheHelperProportions(),
                              e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
                              this._normalizeRightBottom(),
                              this._mouseDrag(t, !0),
                              e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
                              !0)
                    );
                },
                _refreshOffsets: function (e) {
                    (this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                        (this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top });
                },
                _mouseDrag: function (t, n) {
                    this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), (this.position = this._generatePosition(t, !0)), (this.positionAbs = this._convertPositionTo("absolute"));
                    if (!n) {
                        var r = this._uiHash();
                        if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                        this.position = r.position;
                    }
                    return (this.helper[0].style.left = this.position.left + "px"), (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
                },
                _mouseStop: function (t) {
                    var n = this,
                        r = !1;
                    return (
                        e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)),
                        this.dropped && ((r = this.dropped), (this.dropped = !1)),
                        (this.options.revert === "invalid" && !r) || (this.options.revert === "valid" && r) || this.options.revert === !0 || (e.isFunction(this.options.revert) && this.options.revert.call(this.element, r))
                            ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                                  n._trigger("stop", t) !== !1 && n._clear();
                              })
                            : this._trigger("stop", t) !== !1 && this._clear(),
                        !1
                    );
                },
                _mouseUp: function (t) {
                    return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t);
                },
                cancel: function () {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
                },
                _getHandle: function (t) {
                    return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
                },
                _setHandleClassName: function () {
                    (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element), this.handleElement.addClass("ui-draggable-handle");
                },
                _removeHandleClassName: function () {
                    this.handleElement.removeClass("ui-draggable-handle");
                },
                _createHelper: function (t) {
                    var n = this.options,
                        r = e.isFunction(n.helper),
                        i = r ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                    return (
                        i.parents("body").length || i.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo),
                        r && i[0] === this.element[0] && this._setPositionRelative(),
                        i[0] !== this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"),
                        i
                    );
                },
                _setPositionRelative: function () {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
                },
                _adjustOffsetFromHelper: function (t) {
                    typeof t == "string" && (t = t.split(" ")),
                        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
                },
                _isRootNode: function (e) {
                    return /(html|body)/i.test(e.tagName) || e === this.document[0];
                },
                _getParentOffset: function () {
                    var t = this.offsetParent.offset(),
                        n = this.document[0];
                    return (
                        this.cssPosition === "absolute" && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
                        this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }),
                        { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                    );
                },
                _getRelativeOffset: function () {
                    if (this.cssPosition !== "relative") return { top: 0, left: 0 };
                    var e = this.element.position(),
                        t = this._isRootNode(this.scrollParent[0]);
                    return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) };
                },
                _cacheMargins: function () {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                    };
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
                },
                _setContainment: function () {
                    var t,
                        n,
                        r,
                        i = this.options,
                        s = this.document[0];
                    this.relativeContainer = null;
                    if (!i.containment) {
                        this.containment = null;
                        return;
                    }
                    if (i.containment === "window") {
                        this.containment = [
                            e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                            e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                            e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left,
                            e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                        ];
                        return;
                    }
                    if (i.containment === "document") {
                        this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                        return;
                    }
                    if (i.containment.constructor === Array) {
                        this.containment = i.containment;
                        return;
                    }
                    i.containment === "parent" && (i.containment = this.helper[0].parentNode), (n = e(i.containment)), (r = n[0]);
                    if (!r) return;
                    (t = /(scroll|auto)/.test(n.css("overflow"))),
                        (this.containment = [
                            (parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0),
                            (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0),
                            (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) -
                                (parseInt(n.css("borderRightWidth"), 10) || 0) -
                                (parseInt(n.css("paddingRight"), 10) || 0) -
                                this.helperProportions.width -
                                this.margins.left -
                                this.margins.right,
                            (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) -
                                (parseInt(n.css("borderBottomWidth"), 10) || 0) -
                                (parseInt(n.css("paddingBottom"), 10) || 0) -
                                this.helperProportions.height -
                                this.margins.top -
                                this.margins.bottom,
                        ]),
                        (this.relativeContainer = n);
                },
                _convertPositionTo: function (e, t) {
                    t || (t = this.position);
                    var n = e === "absolute" ? 1 : -1,
                        r = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * n,
                        left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * n,
                    };
                },
                _generatePosition: function (e, t) {
                    var n,
                        r,
                        i,
                        s,
                        o = this.options,
                        u = this._isRootNode(this.scrollParent[0]),
                        a = e.pageX,
                        f = e.pageY;
                    if (!u || !this.offset.scroll) this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() };
                    return (
                        t &&
                            (this.containment &&
                                (this.relativeContainer
                                    ? ((r = this.relativeContainer.offset()), (n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]))
                                    : (n = this.containment),
                                e.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left),
                                e.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top),
                                e.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left),
                                e.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)),
                            o.grid &&
                                ((i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY),
                                (f = n ? (i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1]) : i),
                                (s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX),
                                (a = n ? (s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0]) : s)),
                            o.axis === "y" && (a = this.originalPageX),
                            o.axis === "x" && (f = this.originalPageY)),
                        {
                            top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : u ? 0 : this.offset.scroll.top),
                            left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : u ? 0 : this.offset.scroll.left),
                        }
                    );
                },
                _clear: function () {
                    this.helper.removeClass("ui-draggable-dragging"),
                        this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
                        (this.helper = null),
                        (this.cancelHelperRemoval = !1),
                        this.destroyOnClear && this.destroy();
                },
                _normalizeRightBottom: function () {
                    this.options.axis !== "y" && this.helper.css("right") !== "auto" && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
                        this.options.axis !== "x" && this.helper.css("bottom") !== "auto" && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
                },
                _trigger: function (t, n, r) {
                    return (
                        (r = r || this._uiHash()),
                        e.ui.plugin.call(this, t, [n, r, this], !0),
                        /^(drag|start|stop)/.test(t) && ((this.positionAbs = this._convertPositionTo("absolute")), (r.offset = this.positionAbs)),
                        e.Widget.prototype._trigger.call(this, t, n, r)
                    );
                },
                plugins: {},
                _uiHash: function () {
                    return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
                },
            }),
            e.ui.plugin.add("draggable", "connectToSortable", {
                start: function (t, n, r) {
                    var i = e.extend({}, n, { item: r.element });
                    (r.sortables = []),
                        e(r.options.connectToSortable).each(function () {
                            var n = e(this).sortable("instance");
                            n && !n.options.disabled && (r.sortables.push(n), n.refreshPositions(), n._trigger("activate", t, i));
                        });
                },
                stop: function (t, n, r) {
                    var i = e.extend({}, n, { item: r.element });
                    (r.cancelHelperRemoval = !1),
                        e.each(r.sortables, function () {
                            var e = this;
                            e.isOver
                                ? ((e.isOver = 0),
                                  (r.cancelHelperRemoval = !0),
                                  (e.cancelHelperRemoval = !1),
                                  (e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }),
                                  e._mouseStop(t),
                                  (e.options.helper = e.options._helper))
                                : ((e.cancelHelperRemoval = !0), e._trigger("deactivate", t, i));
                        });
                },
                drag: function (t, n, r) {
                    e.each(r.sortables, function () {
                        var i = !1,
                            s = this;
                        (s.positionAbs = r.positionAbs),
                            (s.helperProportions = r.helperProportions),
                            (s.offset.click = r.offset.click),
                            s._intersectsWith(s.containerCache) &&
                                ((i = !0),
                                e.each(r.sortables, function () {
                                    return (
                                        (this.positionAbs = r.positionAbs),
                                        (this.helperProportions = r.helperProportions),
                                        (this.offset.click = r.offset.click),
                                        this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (i = !1),
                                        i
                                    );
                                })),
                            i
                                ? (s.isOver ||
                                      ((s.isOver = 1),
                                      (r._parent = n.helper.parent()),
                                      (s.currentItem = n.helper.appendTo(s.element).data("ui-sortable-item", !0)),
                                      (s.options._helper = s.options.helper),
                                      (s.options.helper = function () {
                                          return n.helper[0];
                                      }),
                                      (t.target = s.currentItem[0]),
                                      s._mouseCapture(t, !0),
                                      s._mouseStart(t, !0, !0),
                                      (s.offset.click.top = r.offset.click.top),
                                      (s.offset.click.left = r.offset.click.left),
                                      (s.offset.parent.left -= r.offset.parent.left - s.offset.parent.left),
                                      (s.offset.parent.top -= r.offset.parent.top - s.offset.parent.top),
                                      r._trigger("toSortable", t),
                                      (r.dropped = s.element),
                                      e.each(r.sortables, function () {
                                          this.refreshPositions();
                                      }),
                                      (r.currentItem = r.element),
                                      (s.fromOutside = r)),
                                  s.currentItem && (s._mouseDrag(t), (n.position = s.position)))
                                : s.isOver &&
                                  ((s.isOver = 0),
                                  (s.cancelHelperRemoval = !0),
                                  (s.options._revert = s.options.revert),
                                  (s.options.revert = !1),
                                  s._trigger("out", t, s._uiHash(s)),
                                  s._mouseStop(t, !0),
                                  (s.options.revert = s.options._revert),
                                  (s.options.helper = s.options._helper),
                                  s.placeholder && s.placeholder.remove(),
                                  n.helper.appendTo(r._parent),
                                  r._refreshOffsets(t),
                                  (n.position = r._generatePosition(t, !0)),
                                  r._trigger("fromSortable", t),
                                  (r.dropped = !1),
                                  e.each(r.sortables, function () {
                                      this.refreshPositions();
                                  }));
                    });
                },
            }),
            e.ui.plugin.add("draggable", "cursor", {
                start: function (t, n, r) {
                    var i = e("body"),
                        s = r.options;
                    i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor);
                },
                stop: function (t, n, r) {
                    var i = r.options;
                    i._cursor && e("body").css("cursor", i._cursor);
                },
            }),
            e.ui.plugin.add("draggable", "opacity", {
                start: function (t, n, r) {
                    var i = e(n.helper),
                        s = r.options;
                    i.css("opacity") && (s._opacity = i.css("opacity")), i.css("opacity", s.opacity);
                },
                stop: function (t, n, r) {
                    var i = r.options;
                    i._opacity && e(n.helper).css("opacity", i._opacity);
                },
            }),
            e.ui.plugin.add("draggable", "scroll", {
                start: function (e, t, n) {
                    n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)),
                        n.scrollParentNotHidden[0] !== n.document[0] && n.scrollParentNotHidden[0].tagName !== "HTML" && (n.overflowOffset = n.scrollParentNotHidden.offset());
                },
                drag: function (t, n, r) {
                    var i = r.options,
                        s = !1,
                        o = r.scrollParentNotHidden[0],
                        u = r.document[0];
                    if (o !== u && o.tagName !== "HTML") {
                        if (!i.axis || i.axis !== "x")
                            r.overflowOffset.top + o.offsetHeight - t.pageY < i.scrollSensitivity
                                ? (o.scrollTop = s = o.scrollTop + i.scrollSpeed)
                                : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (o.scrollTop = s = o.scrollTop - i.scrollSpeed);
                        if (!i.axis || i.axis !== "y")
                            r.overflowOffset.left + o.offsetWidth - t.pageX < i.scrollSensitivity
                                ? (o.scrollLeft = s = o.scrollLeft + i.scrollSpeed)
                                : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - i.scrollSpeed);
                    } else {
                        if (!i.axis || i.axis !== "x")
                            t.pageY - e(u).scrollTop() < i.scrollSensitivity
                                ? (s = e(u).scrollTop(e(u).scrollTop() - i.scrollSpeed))
                                : e(window).height() - (t.pageY - e(u).scrollTop()) < i.scrollSensitivity && (s = e(u).scrollTop(e(u).scrollTop() + i.scrollSpeed));
                        if (!i.axis || i.axis !== "y")
                            t.pageX - e(u).scrollLeft() < i.scrollSensitivity
                                ? (s = e(u).scrollLeft(e(u).scrollLeft() - i.scrollSpeed))
                                : e(window).width() - (t.pageX - e(u).scrollLeft()) < i.scrollSensitivity && (s = e(u).scrollLeft(e(u).scrollLeft() + i.scrollSpeed));
                    }
                    s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t);
                },
            }),
            e.ui.plugin.add("draggable", "snap", {
                start: function (t, n, r) {
                    var i = r.options;
                    (r.snapElements = []),
                        e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                            var t = e(this),
                                n = t.offset();
                            this !== r.element[0] && r.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: n.top, left: n.left });
                        });
                },
                drag: function (t, n, r) {
                    var i,
                        s,
                        o,
                        u,
                        a,
                        f,
                        l,
                        c,
                        h,
                        p,
                        d = r.options,
                        v = d.snapTolerance,
                        m = n.offset.left,
                        g = m + r.helperProportions.width,
                        y = n.offset.top,
                        b = y + r.helperProportions.height;
                    for (h = r.snapElements.length - 1; h >= 0; h--) {
                        (a = r.snapElements[h].left - r.margins.left), (f = a + r.snapElements[h].width), (l = r.snapElements[h].top - r.margins.top), (c = l + r.snapElements[h].height);
                        if (g < a - v || m > f + v || b < l - v || y > c + v || !e.contains(r.snapElements[h].item.ownerDocument, r.snapElements[h].item)) {
                            r.snapElements[h].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), { snapItem: r.snapElements[h].item })), (r.snapElements[h].snapping = !1);
                            continue;
                        }
                        d.snapMode !== "inner" &&
                            ((i = Math.abs(l - b) <= v),
                            (s = Math.abs(c - y) <= v),
                            (o = Math.abs(a - g) <= v),
                            (u = Math.abs(f - m) <= v),
                            i && (n.position.top = r._convertPositionTo("relative", { top: l - r.helperProportions.height, left: 0 }).top),
                            s && (n.position.top = r._convertPositionTo("relative", { top: c, left: 0 }).top),
                            o && (n.position.left = r._convertPositionTo("relative", { top: 0, left: a - r.helperProportions.width }).left),
                            u && (n.position.left = r._convertPositionTo("relative", { top: 0, left: f }).left)),
                            (p = i || s || o || u),
                            d.snapMode !== "outer" &&
                                ((i = Math.abs(l - y) <= v),
                                (s = Math.abs(c - b) <= v),
                                (o = Math.abs(a - m) <= v),
                                (u = Math.abs(f - g) <= v),
                                i && (n.position.top = r._convertPositionTo("relative", { top: l, left: 0 }).top),
                                s && (n.position.top = r._convertPositionTo("relative", { top: c - r.helperProportions.height, left: 0 }).top),
                                o && (n.position.left = r._convertPositionTo("relative", { top: 0, left: a }).left),
                                u && (n.position.left = r._convertPositionTo("relative", { top: 0, left: f - r.helperProportions.width }).left)),
                            !r.snapElements[h].snapping && (i || s || o || u || p) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), { snapItem: r.snapElements[h].item })),
                            (r.snapElements[h].snapping = i || s || o || u || p);
                    }
                },
            }),
            e.ui.plugin.add("draggable", "stack", {
                start: function (t, n, r) {
                    var i,
                        s = r.options,
                        o = e.makeArray(e(s.stack)).sort(function (t, n) {
                            return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
                        });
                    if (!o.length) return;
                    (i = parseInt(e(o[0]).css("zIndex"), 10) || 0),
                        e(o).each(function (t) {
                            e(this).css("zIndex", i + t);
                        }),
                        this.css("zIndex", i + o.length);
                },
            }),
            e.ui.plugin.add("draggable", "zIndex", {
                start: function (t, n, r) {
                    var i = e(n.helper),
                        s = r.options;
                    i.css("zIndex") && (s._zIndex = i.css("zIndex")), i.css("zIndex", s.zIndex);
                },
                stop: function (t, n, r) {
                    var i = r.options;
                    i._zIndex && e(n.helper).css("zIndex", i._zIndex);
                },
            }),
            e.ui.draggable
        );
    }),
    (function (e) {
        typeof define == "function" && define.amd ? define("jquery-ui-touch-punch", ["jquery", "jquery-ui/mouse"], e) : e(jQuery);
    })(function (e) {
        function s(e, t) {
            if (e.originalEvent.touches.length > 1) return;
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0],
                r = document.createEvent("MouseEvents");
            r.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(r);
        }
        e.support.touch = "ontouchend" in document;
        if (!e.support.touch) return;
        var t = e.ui.mouse.prototype,
            n = t._mouseInit,
            r = t._mouseDestroy,
            i;
        (t._touchStart = function (e) {
            var t = this;
            if (i || !t._mouseCapture(e.originalEvent.changedTouches[0])) return;
            (i = !0), (t._touchMoved = !1), s(e, "mouseover"), s(e, "mousemove"), s(e, "mousedown");
        }),
            (t._touchMove = function (e) {
                if (!i) return;
                (this._touchMoved = !0), s(e, "mousemove");
            }),
            (t._touchEnd = function (e) {
                if (!i) return;
                s(e, "mouseup"), s(e, "mouseout"), this._touchMoved || s(e, "click"), (i = !1);
            }),
            (t._mouseInit = function () {
                var t = this;
                t.element.bind({ touchstart: e.proxy(t, "_touchStart"), touchmove: e.proxy(t, "_touchMove"), touchend: e.proxy(t, "_touchEnd") }), n.call(t);
            }),
            (t._mouseDestroy = function () {
                var t = this;
                t.element.unbind({ touchstart: e.proxy(t, "_touchStart"), touchmove: e.proxy(t, "_touchMove"), touchend: e.proxy(t, "_touchEnd") }), r.call(t);
            });
    }),
    define("componentLibraryJQueryUI/Draggable", ["require", "jquery-ui/draggable", "jquery-ui-touch-punch"], function (e) {
        e("jquery-ui/draggable"), e("jquery-ui-touch-punch");
        var t = function () {
            (this.renderer = null), (this.config = {});
        };
        return (
            (t.prototype.start = function () {
                if (!this.renderer) throw new Error("Renderer must be specified.");
                this.renderer.$el.draggable(this.config);
            }),
            (t.prototype.destroy = function () {
                this.renderer && this.renderer.$el && this.renderer.$el.data("ui-draggable") && this.renderer.$el.draggable("destroy");
            }),
            t
        );
    }),
    define("util", ["require", "ComponentLibrary"], function (e) {
        function n(e, t) {
            e && e.off && e.off(null, null, t);
        }
        function r(e, t) {
            e && e.off && e.off("." + t);
        }
        function i(e, t) {
            e && r(e.$el, t);
        }
        function s(e, n, r, i) {
            var s = t.getComponent(n),
                o = e.getComponent(s);
            o[r] = i;
        }
        function o(e) {
            e.stopPropagation();
        }
        var t = e("ComponentLibrary");
        return { deregisterEvent: r, deregisterRendererEvent: i, deregisterBackboneEvent: n, setComponentReference: s, stopEvent: o };
    }),
    define("constants/Origin", [], function () {
        var e = {};
        Object.defineProperty(e, "X", { value: 74, enumerable: !0 }),
            Object.defineProperty(e, "Y", { value: 302, enumerable: !0 }),
            Object.defineProperty(e, "RADIUS", { value: 200, enumerable: !0 }),
            Object.defineProperty(e, "RATIO", { value: 0.1, enumerable: !0 });
        var t = [],
            n = [];
        for (var r in e) t.push(e[r]), n.push(r);
        return (
            Object.defineProperty(e, "valuesArray", {
                get: function () {
                    return t;
                },
            }),
            Object.defineProperty(e, "keysArray", {
                get: function () {
                    return n;
                },
            }),
            e
        );
    }),
    define("lib/ui/AimPath", ["require", "util", "constants/Origin"], function (e) {
        var t = e("util"),
            n = e("constants/Origin"),
            r = function () {
                (this.renderer = null), (this.model = null), (this.focusModel = null);
            };
        (r.prototype.start = function () {
            (this.canvas = this.renderer.$el.get(0)), (this.ctx = this.canvas.getContext("2d")), this.model.on("change:posX change:posY", i, this), this.focusModel.on("change:focused", i, this), i.call(this);
        }),
            (r.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.model, this);
            });
        var i = function () {
            var e = this.focusModel.getFocused();
            (this.ctx.strokeStyle = e ? "rgba(7, 185, 237, 0.8)" : "rgba(243, 243, 243, 0.8)"),
                (this.ctx.lineWidth = 3),
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                this.ctx.beginPath(),
                this.ctx.moveTo(n.X, n.Y),
                this.ctx.lineTo(n.X + this.model.getPosX(), n.Y - this.model.getPosY()),
                this.ctx.stroke();
        };
        return r;
    }),
    define("lib/ui/AnglePath", ["require", "util", "constants/Origin"], function (e) {
        var t = e("util"),
            n = e("constants/Origin"),
            r = function () {
                (this.renderer = null), (this.model = null), (this.angleModel = null), (this.focusModel = null);
            };
        (r.prototype.start = function () {
            (this.canvas = this.renderer.$el.get(0)), (this.ctx = this.canvas.getContext("2d")), this.model.on("change:posX change:posY", i, this), this.focusModel.on("change:focused", i, this), i.call(this);
        }),
            (r.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.model, this);
            });
        var i = function () {
            var e,
                t = this.focusModel.getFocused();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                (this.ctx.strokeStyle = t ? "rgba(7, 185, 237, 0.8)" : "rgba(243, 243, 243, 0.8)"),
                (this.ctx.lineWidth = 3),
                this.ctx.setLineDash([5]),
                this.ctx.beginPath(),
                this.ctx.moveTo(n.X, n.Y),
                this.ctx.lineTo(n.X + n.RADIUS, n.Y),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                this.ctx.beginPath(),
                (e = (-this.angleModel.getVal() * Math.PI) / 180),
                this.ctx.arc(n.X, n.Y, 20, 0, e, !0),
                this.ctx.stroke();
        };
        return r;
    }),
    define("constants/Global", [], function () {
        var e = {};
        return Object.defineProperty(e, "HEIGHT", { value: 500, enumerable: !0 }), Object.defineProperty(e, "WIDTH", { value: 525, enumerable: !0 }), Object.defineProperty(e, "GRAVITY", { value: 9.81, enumerable: !0 }), e;
    }),
    define("lib/ui/DrawPath", ["require", "constants/Origin", "constants/Global", "util"], function (e) {
        var t = e("constants/Origin"),
            n = e("constants/Global"),
            r = e("util"),
            i = 2,
            s = function () {
                (this.angleModel = null), (this.velocityModel = null), (this.renderer = null);
            };
        (s.prototype.start = function () {
            (this.canvas = this.renderer.$el.get(0)), (this.ctx = this.canvas.getContext("2d")), this.angleModel.on("change:val", u, this), this.velocityModel.on("change:val", u, this), o.call(this), u.call(this);
        }),
            (s.prototype.destroy = function () {
                r.deregisterRendererEvent(this.renderer, this.UID), r.deregisterBackboneEvent(this.angleModel, this), r.deregisterBackboneEvent(this.velocityModel, this);
            });
        var o = function () {
                var e = 8;
                (this.canvas.height = n.HEIGHT - e), (this.canvas.width = n.WIDTH);
            },
            u = function () {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), a.call(this);
            },
            a = function () {
                var e = t.X,
                    r = t.Y + 2,
                    s = (this.angleModel.getVal() * Math.PI) / 180,
                    o = this.velocityModel.getVal(),
                    u = 0,
                    a = 0,
                    f = 0,
                    l = t.RATIO;
                this.ctx.beginPath(), this.ctx.moveTo(e, r);
                do (f += 1 / l), (u = f * l + e), (a = (f * Math.tan(s) - (n.GRAVITY / 2) * Math.pow(f / (o * Math.cos(s)), 2)) * l - (r - i)), this.ctx.lineTo(u, -a);
                while (u < n.WIDTH && a > -n.HEIGHT);
                (this.ctx.strokeStyle = "#A3A3A3"), this.ctx.stroke();
            };
        return s;
    }),
    define("lib/ui/DrawLine", ["require", "constants/Origin", "constants/Global"], function (e) {
        var t = e("constants/Origin"),
            n = e("constants/Global"),
            r = function () {
                (this.renderer = null), (this.model = null), (this.fromX = null), (this.fromY = null), (this.to = null), (this.color = null), (this.lineWidth = 1), (this.modelKey = null);
            };
        r.prototype.start = function () {
            (this.canvas = this.renderer.$el.get(0)), (this.ctx = this.canvas.getContext("2d")), this.model.on("change:" + this.modelKey, s, this), i.call(this);
        };
        var i = function () {
                var e = 8;
                (this.canvas.height = n.HEIGHT - e), (this.canvas.width = n.WIDTH);
            },
            s = function () {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), (this.ctx.strokeStyle = this.color), (this.ctx.lineWidth = this.lineWidth);
                var e = -(this.model.getValue(this.fromY) - t.Y),
                    n = this.model.getValue(this.fromX) + t.X,
                    r = this.model.get(this.to),
                    i = -(r.y - t.Y),
                    s = r.x + t.X;
                this.ctx.beginPath(), this.ctx.moveTo(n, e), this.ctx.lineTo(s, i), this.ctx.stroke();
            };
        return r;
    }),
    define("lib/behaviour/CreateCannonBall", [], function () {
        var e = function () {
            (this.renderer = null), (this.cannonBallFactory = null), (this.model = null), (this.aimHandle = null);
        };
        (e.prototype.start = function () {
            this.renderer.$el.on("click." + this.UID, t.bind(this));
        }),
            (e.prototype.destroy = function () {
                this.renderer && this.renderer.$el && this.renderer.$el.off && this.renderer.$el.off("." + this.UID);
            });
        var t = function () {
            this.model.getEnableFireButton() && (this.cannonBallFactory.create(), this.model.setEnableFireButton(!1), this.aimHandle.show(!1));
        };
        return e;
    }),
    define("lib/behaviour/UpdateBall", ["require", "constants/Global", "constants/Origin"], function (e) {
        var t = e("constants/Global"),
            n = e("constants/Origin"),
            r = function () {
                (this.angleModel = null), (this.velocityModel = null), (this.aimHandle = null), (this.model = null);
            };
        (r.prototype.start = function () {
            (this.timerCount = 0), this.model.setBallVisible(!0);
        }),
            (r.prototype.update = function (e) {
                if (!this.model.getBallVisible()) {
                    i.call(this), this.entity.destroy();
                    return;
                }
                var r = (this.angleModel.getVal() * Math.PI) / 180,
                    s = this.velocityModel.getVal(),
                    o = t.WIDTH - n.X,
                    u = t.HEIGHT - n.Y,
                    a = 10;
                this.timerCount += e.elapsed;
                var f = ((s * Math.cos(r) * this.timerCount) / 1e3) * a,
                    l = f * Math.tan(r) - (t.GRAVITY / 2) * Math.pow(f / (s * Math.cos(r)), 2);
                (f *= n.RATIO), (l *= n.RATIO), this.model.set("ballX", f, { silent: !0 }), this.model.set("ballY", l, { silent: !0 }), this.model.trigger("change:ballX"), this.model.trigger("change:ballY");
                if (f > o || l < -u) i.call(this), this.entity.destroy();
            });
        var i = function () {
            var e = this.model.getMaximumBullets() - this.model.getFiredBullets();
            e > 0 && !this.model.getLockSim() && this.model.setEnableFireButton(!0), this.aimHandle.reset();
        };
        return r;
    }),
    define("lib/behaviour/UpdateFiredBullets", ["require", "util"], function (e) {
        var t = e("util"),
            n = function () {
                (this.renderer = null), (this.model = null);
            };
        (n.prototype.start = function () {
            this.renderer.$el.on("click." + this.UID, r.bind(this));
        }),
            (n.prototype.destroy = function () {
                t.deregisterRendererEvent(this.renderer, this.UID);
            });
        var r = function () {
            var e = this.model.getFiredBullets();
            this.model.getEnableFireButton() && this.model.setFiredBullets(e + 1);
        };
        return n;
    }),
    define("lib/behaviour/UpdateBulletsLeft", ["require", "util"], function (e) {
        var t = e("util"),
            n = function () {
                (this.renderer = null), (this.model = null);
            };
        (n.prototype.start = function () {
            this.model.on("change:firedBullets", r, this), this.model.on("change:maximumBullets", r, this), r.call(this);
        }),
            (n.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.model, this);
            });
        var r = function () {
                var e = this.model.getMaximumBullets() - this.model.getFiredBullets();
                switch (e) {
                    case 0:
                        i.call(this, "showNone");
                        break;
                    case 1:
                        i.call(this, "showOne");
                        break;
                    case 2:
                        i.call(this, "showTwo");
                        break;
                    default:
                        i.call(this, "showThree");
                }
            },
            i = function (e) {
                this.renderer.$el.attr("class", "bullets " + e);
            };
        return n;
    }),
    define("constants/References", [], function () {
        var e = {};
        return Object.defineProperty(e, "INDEX", { value: "~index" }), e;
    }),
    define("lib/behaviour/CreateTarget", ["require", "ComponentLibrary", "SceneManager", "constants/References"], function (e) {
        var t = e("ComponentLibrary"),
            n = e("SceneManager"),
            r = e("constants/References"),
            i = function () {
                (this.targetFactory = null), (this.targetsModel = null), (this.renderer = null), (this.entities = []);
            };
        i.prototype.start = function () {
            this.targetsModel.on("change:targets", s, this), s.call(this);
        };
        var s = function () {
                for (var e = 0, t = this.entities.length; e < t; e++) this.entities[e].destroy();
                var n = this.targetsModel.getTargets();
                for (var r = 0, i = n; r < i; r++) o.call(this, r + 1);
            },
            o = function (e) {
                var t = {};
                t[r.INDEX] = e;
                var n = this.targetFactory.create({ name: "target-" + e, references: t });
                this.renderer.entity.addChild(n), this.entities.push(n);
            };
        return i;
    }),
    define("lib/behaviour/DragTarget", ["require", "util"], function (e) {
        var t = e("util"),
            n = function () {
                (this.renderer = null), (this.model = null), (this.targetsModel = null), (this.validator = null), (this.offsetX = 0), (this.offsetY = 0);
            };
        (n.prototype.start = function () {
            this.renderer.$el.on("dragstart", i.bind(this)), this.renderer.$el.on("drag", r.bind(this)), this.renderer.$el.on("dragstop", s.bind(this));
        }),
            (n.prototype.destroy = function () {
                this.renderer.deregisterRendererEvent(this.renderer, this.UID);
            });
        var r = function (e, t) {
                var n = { x: t.position.left + this.offsetX, y: this.offsetY - t.position.top };
                (t.position.left = t.position.top = 0),
                    this.validator.validate(n),
                    this.targetsModel.getAllowTargetDrag() || ((n.x = t.originalPosition.left + this.offsetX), (n.y = this.offsetY - t.originalPosition.top)),
                    this.model.setValue("x", n.x, { silent: !0 }),
                    this.model.setValue("y", n.y, { silent: !0 }),
                    this.model.trigger("change:x"),
                    this.model.trigger("change:y");
            },
            i = function () {
                this.targetsModel.getShowTooltip() && this.model.setShowTooltip(!0);
            },
            s = function () {
                this.model.setShowTooltip(!1);
            };
        return n;
    }),
    define("lib/behaviour/TargetCollision", [], function () {
        var e = function () {
            (this.renderer = null), (this.model = null), (this.cannonModel = null), (this.centerRadius = 4), (this.chipSize = 8);
        };
        e.prototype.start = function () {
            this.cannonModel.on("change:ballX  change:ballY", t, this);
        };
        var t = function () {
            if (this.model.getDestroyed()) return;
            var e = this.model.getX(),
                t = this.model.getY(),
                n = this.cannonModel.getBallX(),
                r = this.cannonModel.getBallY();
            n > e - this.centerRadius &&
                n < e + this.centerRadius &&
                (r > t - this.centerRadius &&
                    r < t + this.centerRadius &&
                    (this.cannonModel.setBallVisible(!1), this.model.setCollisionX(n), this.model.setCollisionY(r), this.model.setDestroyed(!0), this.cannonModel.getLockSimAfterDestroy() && this.cannonModel.setLockSim(!0)),
                r > t + this.centerRadius && r < t + this.centerRadius + this.chipSize && !this.model.getChippedTop() && this.model.setChippedTop(!0),
                r > t - this.centerRadius - this.chipSize && r < t - this.centerRadius && !this.model.getChippedBottom() && this.model.setChippedBottom(!0));
        };
        return e;
    }),
    define("lib/behaviour/DestroyTarget", [], function () {
        var e = function () {
            (this.renderer = null), (this.explosionRenderer = null), (this.model = null);
        };
        e.prototype.start = function () {
            this.model.on("change:destroyed", t, this);
        };
        var t = function () {
            this.renderer.$el.addClass("destroyed"), this.explosionRenderer.$el.addClass("animate");
        };
        return e;
    }),
    define("lib/behaviour/ChipTarget", [], function () {
        var e = function () {
            (this.renderer = null), (this.explosionRenderer = null), (this.model = null);
        };
        e.prototype.start = function () {
            this.model.on("change:chippedTop", t, this), this.model.on("change:chippedBottom", n, this);
        };
        var t = function () {
                !this.model.getChippedBottom() && !this.model.getDestroyed() ? this.renderer.$el.removeClass().addClass("target chippedTop") : this.model.getChippedBottom() && this.renderer.$el.removeClass().addClass("target chipped");
            },
            n = function () {
                !this.model.getChippedTop() && !this.model.getDestroyed() ? this.renderer.$el.removeClass().addClass("target chippedBottom") : this.model.getChippedTop() && this.renderer.$el.removeClass().addClass("target chipped");
            };
        return e;
    }),
    define("lib/behaviour/LockDraggable", ["require", "util"], function (e) {
        var t = e("util"),
            n = function () {
                (this.renderer = null), (this.model = null);
            };
        (n.prototype.start = function () {
            this.model.on("change:lockSim", r, this);
        }),
            (n.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.model, this);
            });
        var r = function () {
            this.renderer.$el.draggable({ disabled: this.model.getLockSim() });
        };
        return n;
    }),
    define("lib/behaviour/UpdateVectors", ["require", "constants/Global", "constants/Origin"], function (e) {
        var t = e("constants/Global"),
            n = e("constants/Origin"),
            r = function () {
                (this.angleModel = null), (this.velocityModel = null), (this.model = null);
            };
        return (
            (r.prototype.start = function () {
                this.timerCount = 0;
            }),
            (r.prototype.update = function (e) {
                var r = 0.266;
                this.timerCount += e.elapsed;
                var i = 45,
                    s = 40,
                    o = ((this.timerCount * 1) / i) * 1.6,
                    u = o * r,
                    a = (this.angleModel.getVal() * Math.PI) / 180,
                    f = this.velocityModel.getVal(),
                    l = f * Math.cos(a),
                    c = -(f * Math.sin(a) - t.GRAVITY * u);
                (l = l * n.RATIO * 2.5), (c = -1 * c * n.RATIO * 2.5), (a = Math.atan2(c, l));
                var h = s * Math.cos(a) * Math.sin(a),
                    p = s * Math.pow(Math.cos(a), 2),
                    d = s * Math.pow(Math.sin(a), 2);
                this.model.setValue("vx", { x: this.model.getValue("ballX") + l, y: this.model.getValue("ballY") }),
                    this.model.setValue("vy", { x: this.model.getValue("ballX"), y: this.model.getValue("ballY") + c }),
                    this.model.setValue("vd", { x: this.model.getValue("ballX") + l, y: this.model.getValue("ballY") + c }),
                    this.model.setValue("an", { x: this.model.getValue("ballX") + h, y: this.model.getValue("ballY") - p }),
                    this.model.setValue("at", { x: this.model.getValue("ballX") - h, y: this.model.getValue("ballY") - d }),
                    this.model.setValue("ad", { x: this.model.getValue("ballX"), y: this.model.getValue("ballY") - s });
            }),
            r
        );
    }),
    define("lib/behaviour/UpdateDistance", ["require", "constants/Origin"], function (e) {
        function r() {
            var e = Math.round((this.model.getValue(this.modelKey) / t.RATIO) * 100) / 100;
            this.renderer.$el.text(e + " m");
        }
        var t = e("constants/Origin"),
            n = function () {
                (this.renderer = null), (this.model = null), (this.modelKey = "");
            };
        return (
            (n.prototype.start = function () {
                this.model.on("change:" + this.modelKey, r, this), r.call(this);
            }),
            (n.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            n
        );
    }),
    define("lib/behaviour/AimHandle", [], function () {
        function t() {
            this.model.setShowHandle(this.capi.getShowHandle());
        }
        var e = function () {
            (this.model = null), (this.capi = null);
        };
        return (
            (e.prototype.start = function () {
                this.capi.on("change:showHandle", t, this), t.call(this);
            }),
            (e.prototype.show = function (e) {
                this.model.setShowHandle(e);
            }),
            (e.prototype.reset = function () {
                t.call(this);
            }),
            e
        );
    }),
    define("lib/behaviour/TooltipPositioner", [], function () {
        function t() {
            (this.position.x = this.target.x), (this.position.y = this.target.y), (this.renderer.x = this.position.x), (this.renderer.y = this.position.y), this.renderer.$el.toggleClass("right", this.renderer.x < 198);
        }
        var e = function () {
            (this.target = null), (this.renderer = null);
        };
        return (
            (e.prototype.start = function () {
                (this.position = { x: 0, y: 0 }), t.call(this);
            }),
            (e.prototype.update = function () {
                if (this.position.x === this.target.x && this.position.y === this.target.y) return;
                t.call(this);
            }),
            e
        );
    }),
    define("lib/behaviour/TooltipCreator", ["require", "SceneManager"], function (e) {
        var t = e("SceneManager"),
            n = function () {
                (this.factory = null), (this.container = t.ActiveScene), (this.lastEntityCreated = null);
            };
        return (
            (n.prototype.start = function () {
                this.container.$el.on(
                    "click." + this.UID,
                    function (e) {
                        this.destroyLast.call(this);
                    }.bind(this)
                );
            }),
            (n.prototype.create = function (e) {
                this.destroyLast(), (this.lastEntityCreated = this.factory.create({ references: e })), (this.lastModel = e.model);
            }),
            (n.prototype.destroyLast = function () {
                this.lastEntityCreated && (this.lastModel.setShowTooltip(!1), this.lastEntityCreated.destroyed || this.lastEntityCreated.destroy());
            }),
            n
        );
    }),
    define("lib/behaviour/CreateTooltip", [], function () {
        function t(e) {
            e.stopPropagation();
            if (!this.targetsModel.getAllowTargetTooltips()) return;
            this.model.getShowTooltip() ? this.tooltipCreator.destroyLast() : (this.tooltipCreator.create({ renderer: this.renderer, model: this.model }), this.model.setShowTooltip(!this.model.getShowTooltip()));
        }
        var e = function () {
            (this.tooltipCreator = null), (this.renderer = null), (this.model = null), (this.targetsModel = null);
        };
        return (
            (e.prototype.start = function () {
                this.renderer.$el.on("click." + this.UID, t.bind(this));
            }),
            e
        );
    }),
    function () {
        var e = this,
            t = e.Backbone,
            n = [],
            r = n.push,
            i = n.slice,
            s = n.splice,
            o;
        typeof exports != "undefined" ? (o = exports) : (o = e.Backbone = {}), (o.VERSION = "1.0.0");
        var u = e._;
        !u && typeof require != "undefined" && (u = require("underscore")),
            (o.$ = e.jQuery || e.Zepto || e.ender || e.$),
            (o.noConflict = function () {
                return (e.Backbone = t), this;
            }),
            (o.emulateHTTP = !1),
            (o.emulateJSON = !1);
        var a = (o.Events = {
                on: function (e, t, n) {
                    if (!l(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var r = this._events[e] || (this._events[e] = []);
                    return r.push({ callback: t, context: n, ctx: n || this }), this;
                },
                once: function (e, t, n) {
                    if (!l(this, "once", e, [t, n]) || !t) return this;
                    var r = this,
                        i = u.once(function () {
                            r.off(e, i), t.apply(this, arguments);
                        });
                    return (i._callback = t), this.on(e, i, n);
                },
                off: function (e, t, n) {
                    var r, i, s, o, a, f, c, h;
                    if (!this._events || !l(this, "off", e, [t, n])) return this;
                    if (!e && !t && !n) return (this._events = {}), this;
                    o = e ? [e] : u.keys(this._events);
                    for (a = 0, f = o.length; a < f; a++) {
                        e = o[a];
                        if ((s = this._events[e])) {
                            this._events[e] = r = [];
                            if (t || n) for (c = 0, h = s.length; c < h; c++) (i = s[c]), ((t && t !== i.callback && t !== i.callback._callback) || (n && n !== i.context)) && r.push(i);
                            r.length || delete this._events[e];
                        }
                    }
                    return this;
                },
                trigger: function (e) {
                    if (!this._events) return this;
                    var t = i.call(arguments, 1);
                    if (!l(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && c(n, t), r && c(r, arguments), this;
                },
                stopListening: function (e, t, n) {
                    var r = this._listeners;
                    if (!r) return this;
                    var i = !t && !n;
                    typeof t == "object" && (n = this), e && ((r = {})[e._listenerId] = e);
                    for (var s in r) r[s].off(t, n, this), i && delete this._listeners[s];
                    return this;
                },
            }),
            f = /\s+/,
            l = function (e, t, n, r) {
                if (!n) return !0;
                if (typeof n == "object") {
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    return !1;
                }
                if (f.test(n)) {
                    var s = n.split(f);
                    for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                    return !1;
                }
                return !0;
            },
            c = function (e, t) {
                var n,
                    r = -1,
                    i = e.length,
                    s = t[0],
                    o = t[1],
                    u = t[2];
                switch (t.length) {
                    case 0:
                        while (++r < i) (n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        while (++r < i) (n = e[r]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        while (++r < i) (n = e[r]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        while (++r < i) (n = e[r]).callback.call(n.ctx, s, o, u);
                        return;
                    default:
                        while (++r < i) (n = e[r]).callback.apply(n.ctx, t);
                }
            },
            h = { listenTo: "on", listenToOnce: "once" };
        u.each(h, function (e, t) {
            a[t] = function (t, n, r) {
                var i = this._listeners || (this._listeners = {}),
                    s = t._listenerId || (t._listenerId = u.uniqueId("l"));
                return (i[s] = t), typeof n == "object" && (r = this), t[e](n, r, this), this;
            };
        }),
            (a.bind = a.on),
            (a.unbind = a.off),
            u.extend(o, a);
        var p = (o.Model = function (e, t) {
                var n,
                    r = e || {};
                t || (t = {}), (this.cid = u.uniqueId("c")), (this.attributes = {}), u.extend(this, u.pick(t, d)), t.parse && (r = this.parse(r, t) || {});
                if ((n = u.result(this, "defaults"))) r = u.defaults({}, r, n);
                this.set(r, t), (this.changed = {}), this.initialize.apply(this, arguments);
            }),
            d = ["url", "urlRoot", "collection"];
        u.extend(p.prototype, a, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function (e) {
                return u.clone(this.attributes);
            },
            sync: function () {
                return o.sync.apply(this, arguments);
            },
            get: function (e) {
                return this.attributes[e];
            },
            escape: function (e) {
                return u.escape(this.get(e));
            },
            has: function (e) {
                return this.get(e) != null;
            },
            set: function (e, t, n) {
                var r, i, s, o, a, f, l, c;
                if (e == null) return this;
                typeof e == "object" ? ((i = e), (n = t)) : ((i = {})[e] = t), n || (n = {});
                if (!this._validate(i, n)) return !1;
                (s = n.unset),
                    (a = n.silent),
                    (o = []),
                    (f = this._changing),
                    (this._changing = !0),
                    f || ((this._previousAttributes = u.clone(this.attributes)), (this.changed = {})),
                    (c = this.attributes),
                    (l = this._previousAttributes),
                    this.idAttribute in i && (this.id = i[this.idAttribute]);
                for (r in i) (t = i[r]), u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : (this.changed[r] = t), s ? delete c[r] : (c[r] = t);
                if (!a) {
                    o.length && (this._pending = !0);
                    for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n);
                }
                if (f) return this;
                if (!a) while (this._pending) (this._pending = !1), this.trigger("change", this, n);
                return (this._pending = !1), (this._changing = !1), this;
            },
            unset: function (e, t) {
                return this.set(e, void 0, u.extend({}, t, { unset: !0 }));
            },
            clear: function (e) {
                var t = {};
                for (var n in this.attributes) t[n] = void 0;
                return this.set(t, u.extend({}, e, { unset: !0 }));
            },
            hasChanged: function (e) {
                return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e);
            },
            changedAttributes: function (e) {
                if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
                var t,
                    n = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var i in e) {
                    if (u.isEqual(r[i], (t = e[i]))) continue;
                    (n || (n = {}))[i] = t;
                }
                return n;
            },
            previous: function (e) {
                return e == null || !this._previousAttributes ? null : this._previousAttributes[e];
            },
            previousAttributes: function () {
                return u.clone(this._previousAttributes);
            },
            fetch: function (e) {
                (e = e ? u.clone(e) : {}), e.parse === void 0 && (e.parse = !0);
                var t = this,
                    n = e.success;
                return (
                    (e.success = function (r) {
                        if (!t.set(t.parse(r, e), e)) return !1;
                        n && n(t, r, e), t.trigger("sync", t, r, e);
                    }),
                    j(this, e),
                    this.sync("read", this, e)
                );
            },
            save: function (e, t, n) {
                var r,
                    i,
                    s,
                    o = this.attributes;
                e == null || typeof e == "object" ? ((r = e), (n = t)) : ((r = {})[e] = t);
                if (r && (!n || !n.wait) && !this.set(r, n)) return !1;
                n = u.extend({ validate: !0 }, n);
                if (!this._validate(r, n)) return !1;
                r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
                var a = this,
                    f = n.success;
                return (
                    (n.success = function (e) {
                        a.attributes = o;
                        var t = a.parse(e, n);
                        n.wait && (t = u.extend(r || {}, t));
                        if (u.isObject(t) && !a.set(t, n)) return !1;
                        f && f(a, e, n), a.trigger("sync", a, e, n);
                    }),
                    j(this, n),
                    (i = this.isNew() ? "create" : n.patch ? "patch" : "update"),
                    i === "patch" && (n.attrs = r),
                    (s = this.sync(i, this, n)),
                    r && n.wait && (this.attributes = o),
                    s
                );
            },
            destroy: function (e) {
                e = e ? u.clone(e) : {};
                var t = this,
                    n = e.success,
                    r = function () {
                        t.trigger("destroy", t, t.collection, e);
                    };
                e.success = function (i) {
                    (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e);
                };
                if (this.isNew()) return e.success(), !1;
                j(this, e);
                var i = this.sync("delete", this, e);
                return e.wait || r(), i;
            },
            url: function () {
                var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || B();
                return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
            },
            parse: function (e, t) {
                return e;
            },
            clone: function () {
                return new this.constructor(this.attributes);
            },
            isNew: function () {
                return this.id == null;
            },
            isValid: function (e) {
                return this._validate({}, u.extend(e || {}, { validate: !0 }));
            },
            _validate: function (e, t) {
                if (!t.validate || !this.validate) return !0;
                e = u.extend({}, this.attributes, e);
                var n = (this.validationError = this.validate(e, t) || null);
                return n ? (this.trigger("invalid", this, n, u.extend(t || {}, { validationError: n })), !1) : !0;
            },
        });
        var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
        u.each(v, function (e) {
            p.prototype[e] = function () {
                var t = i.call(arguments);
                return t.unshift(this.attributes), u[e].apply(u, t);
            };
        });
        var m = (o.Collection = function (e, t) {
                t || (t = {}),
                    t.url && (this.url = t.url),
                    t.model && (this.model = t.model),
                    t.comparator !== void 0 && (this.comparator = t.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    e && this.reset(e, u.extend({ silent: !0 }, t));
            }),
            g = { add: !0, remove: !0, merge: !0 },
            y = { add: !0, merge: !1, remove: !1 };
        u.extend(m.prototype, a, {
            model: p,
            initialize: function () {},
            toJSON: function (e) {
                return this.map(function (t) {
                    return t.toJSON(e);
                });
            },
            sync: function () {
                return o.sync.apply(this, arguments);
            },
            add: function (e, t) {
                return this.set(e, u.defaults(t || {}, y));
            },
            remove: function (e, t) {
                (e = u.isArray(e) ? e.slice() : [e]), t || (t = {});
                var n, r, i, s;
                for (n = 0, r = e.length; n < r; n++) {
                    s = this.get(e[n]);
                    if (!s) continue;
                    delete this._byId[s.id], delete this._byId[s.cid], (i = this.indexOf(s)), this.models.splice(i, 1), this.length--, t.silent || ((t.index = i), s.trigger("remove", s, this, t)), this._removeReference(s);
                }
                return this;
            },
            set: function (e, t) {
                (t = u.defaults(t || {}, g)), t.parse && (e = this.parse(e, t)), u.isArray(e) || (e = e ? [e] : []);
                var n,
                    i,
                    o,
                    a,
                    f,
                    l,
                    c = t.at,
                    h = this.comparator && c == null && t.sort !== !1,
                    p = u.isString(this.comparator) ? this.comparator : null,
                    d = [],
                    v = [],
                    m = {};
                for (n = 0, i = e.length; n < i; n++) {
                    if (!(o = this._prepareModel(e[n], t))) continue;
                    (f = this.get(o))
                        ? (t.remove && (m[f.cid] = !0), t.merge && (f.set(o.attributes, t), h && !l && f.hasChanged(p) && (l = !0)))
                        : t.add && (d.push(o), o.on("all", this._onModelEvent, this), (this._byId[o.cid] = o), o.id != null && (this._byId[o.id] = o));
                }
                if (t.remove) {
                    for (n = 0, i = this.length; n < i; ++n) m[(o = this.models[n]).cid] || v.push(o);
                    v.length && this.remove(v, t);
                }
                d.length && (h && (l = !0), (this.length += d.length), c != null ? s.apply(this.models, [c, 0].concat(d)) : r.apply(this.models, d)), l && this.sort({ silent: !0 });
                if (t.silent) return this;
                for (n = 0, i = d.length; n < i; n++) (o = d[n]).trigger("add", o, this, t);
                return l && this.trigger("sort", this, t), this;
            },
            reset: function (e, t) {
                t || (t = {});
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return (t.previousModels = this.models), this._reset(), this.add(e, u.extend({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), this;
            },
            push: function (e, t) {
                return (e = this._prepareModel(e, t)), this.add(e, u.extend({ at: this.length }, t)), e;
            },
            pop: function (e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t;
            },
            unshift: function (e, t) {
                return (e = this._prepareModel(e, t)), this.add(e, u.extend({ at: 0 }, t)), e;
            },
            shift: function (e) {
                var t = this.at(0);
                return this.remove(t, e), t;
            },
            slice: function (e, t) {
                return this.models.slice(e, t);
            },
            get: function (e) {
                return e == null ? void 0 : this._byId[e.id != null ? e.id : e.cid || e];
            },
            at: function (e) {
                return this.models[e];
            },
            where: function (e, t) {
                return u.isEmpty(e)
                    ? t
                        ? void 0
                        : []
                    : this[t ? "find" : "filter"](function (t) {
                          for (var n in e) if (e[n] !== t.get(n)) return !1;
                          return !0;
                      });
            },
            findWhere: function (e) {
                return this.where(e, !0);
            },
            sort: function (e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return (
                    e || (e = {}),
                    u.isString(this.comparator) || this.comparator.length === 1 ? (this.models = this.sortBy(this.comparator, this)) : this.models.sort(u.bind(this.comparator, this)),
                    e.silent || this.trigger("sort", this, e),
                    this
                );
            },
            sortedIndex: function (e, t, n) {
                t || (t = this.comparator);
                var r = u.isFunction(t)
                    ? t
                    : function (e) {
                          return e.get(t);
                      };
                return u.sortedIndex(this.models, e, r, n);
            },
            pluck: function (e) {
                return u.invoke(this.models, "get", e);
            },
            fetch: function (e) {
                (e = e ? u.clone(e) : {}), e.parse === void 0 && (e.parse = !0);
                var t = e.success,
                    n = this;
                return (
                    (e.success = function (r) {
                        var i = e.reset ? "reset" : "set";
                        n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e);
                    }),
                    j(this, e),
                    this.sync("read", this, e)
                );
            },
            create: function (e, t) {
                t = t ? u.clone(t) : {};
                if (!(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var n = this,
                    r = t.success;
                return (
                    (t.success = function (i) {
                        t.wait && n.add(e, t), r && r(e, i, t);
                    }),
                    e.save(null, t),
                    e
                );
            },
            parse: function (e, t) {
                return e;
            },
            clone: function () {
                return new this.constructor(this.models);
            },
            _reset: function () {
                (this.length = 0), (this.models = []), (this._byId = {});
            },
            _prepareModel: function (e, t) {
                if (e instanceof p) return e.collection || (e.collection = this), e;
                t || (t = {}), (t.collection = this);
                var n = new this.model(e, t);
                return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1);
            },
            _removeReference: function (e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
            },
            _onModelEvent: function (e, t, n, r) {
                if ((e === "add" || e === "remove") && n !== this) return;
                e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments);
            },
        });
        var b = [
            "forEach",
            "each",
            "map",
            "collect",
            "reduce",
            "foldl",
            "inject",
            "reduceRight",
            "foldr",
            "find",
            "detect",
            "filter",
            "select",
            "reject",
            "every",
            "all",
            "some",
            "any",
            "include",
            "contains",
            "invoke",
            "max",
            "min",
            "toArray",
            "size",
            "first",
            "head",
            "take",
            "initial",
            "rest",
            "tail",
            "drop",
            "last",
            "without",
            "indexOf",
            "shuffle",
            "lastIndexOf",
            "isEmpty",
            "chain",
        ];
        u.each(b, function (e) {
            m.prototype[e] = function () {
                var t = i.call(arguments);
                return t.unshift(this.models), u[e].apply(u, t);
            };
        });
        var w = ["groupBy", "countBy", "sortBy"];
        u.each(w, function (e) {
            m.prototype[e] = function (t, n) {
                var r = u.isFunction(t)
                    ? t
                    : function (e) {
                          return e.get(t);
                      };
                return u[e](this.models, r, n);
            };
        });
        var E = (o.View = function (e) {
                (this.cid = u.uniqueId("view")), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
            }),
            S = /^(\S+)\s*(.*)$/,
            x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        u.extend(E.prototype, a, {
            tagName: "div",
            $: function (e) {
                return this.$el.find(e);
            },
            initialize: function () {},
            render: function () {
                return this;
            },
            remove: function () {
                return this.$el.remove(), this.stopListening(), this;
            },
            setElement: function (e, t) {
                return this.$el && this.undelegateEvents(), (this.$el = e instanceof o.$ ? e : o.$(e)), (this.el = this.$el[0]), t !== !1 && this.delegateEvents(), this;
            },
            delegateEvents: function (e) {
                if (!e && !(e = u.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    u.isFunction(n) || (n = this[e[t]]);
                    if (!n) continue;
                    var r = t.match(S),
                        i = r[1],
                        s = r[2];
                    (n = u.bind(n, this)), (i += ".delegateEvents" + this.cid), s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n);
                }
                return this;
            },
            undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid), this;
            },
            _configure: function (e) {
                this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, x)), (this.options = e);
            },
            _ensureElement: function () {
                if (!this.el) {
                    var e = u.extend({}, u.result(this, "attributes"));
                    this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                    var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                    this.setElement(t, !1);
                } else this.setElement(u.result(this, "el"), !1);
            },
        }),
            (o.sync = function (e, t, n) {
                var r = T[e];
                u.defaults(n || (n = {}), { emulateHTTP: o.emulateHTTP, emulateJSON: o.emulateJSON });
                var i = { type: r, dataType: "json" };
                n.url || (i.url = u.result(t, "url") || B()),
                    n.data == null && t && (e === "create" || e === "update" || e === "patch") && ((i.contentType = "application/json"), (i.data = JSON.stringify(n.attrs || t.toJSON(n)))),
                    n.emulateJSON && ((i.contentType = "application/x-www-form-urlencoded"), (i.data = i.data ? { model: i.data } : {}));
                if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
                    (i.type = "POST"), n.emulateJSON && (i.data._method = r);
                    var s = n.beforeSend;
                    n.beforeSend = function (e) {
                        e.setRequestHeader("X-HTTP-Method-Override", r);
                        if (s) return s.apply(this, arguments);
                    };
                }
                i.type !== "GET" && !n.emulateJSON && (i.processData = !1),
                    i.type === "PATCH" &&
                        window.ActiveXObject &&
                        (!window.external || !window.external.msActiveXFilteringEnabled) &&
                        (i.xhr = function () {
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        });
                var a = (n.xhr = o.ajax(u.extend(i, n)));
                return t.trigger("request", t, a, n), a;
            });
        var T = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
        o.ajax = function () {
            return o.$.ajax.apply(o.$, arguments);
        };
        var N = (o.Router = function (e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
            }),
            C = /\((.*?)\)/g,
            k = /(\(\?)?:\w+/g,
            L = /\*\w+/g,
            A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        u.extend(N.prototype, a, {
            initialize: function () {},
            route: function (e, t, n) {
                u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && ((n = t), (t = "")), n || (n = this[t]);
                var r = this;
                return (
                    o.history.route(e, function (i) {
                        var s = r._extractParameters(e, i);
                        n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s);
                    }),
                    this
                );
            },
            navigate: function (e, t) {
                return o.history.navigate(e, t), this;
            },
            _bindRoutes: function () {
                if (!this.routes) return;
                this.routes = u.result(this, "routes");
                var e,
                    t = u.keys(this.routes);
                while ((e = t.pop()) != null) this.route(e, this.routes[e]);
            },
            _routeToRegExp: function (e) {
                return (
                    (e = e
                        .replace(A, "\\$&")
                        .replace(C, "(?:$1)?")
                        .replace(k, function (e, t) {
                            return t ? e : "([^/]+)";
                        })
                        .replace(L, "(.*?)")),
                    new RegExp("^" + e + "$")
                );
            },
            _extractParameters: function (e, t) {
                var n = e.exec(t).slice(1);
                return u.map(n, function (e) {
                    return e ? decodeURIComponent(e) : null;
                });
            },
        });
        var O = (o.History = function () {
                (this.handlers = []), u.bindAll(this, "checkUrl"), typeof window != "undefined" && ((this.location = window.location), (this.history = window.history));
            }),
            M = /^[#\/]|\s+$/g,
            _ = /^\/+|\/+$/g,
            D = /msie [\w.]+/,
            P = /\/$/;
        (O.started = !1),
            u.extend(O.prototype, a, {
                interval: 50,
                getHash: function (e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : "";
                },
                getFragment: function (e, t) {
                    if (e == null)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = this.location.pathname;
                            var n = this.root.replace(P, "");
                            e.indexOf(n) || (e = e.substr(n.length));
                        } else e = this.getHash();
                    return e.replace(M, "");
                },
                start: function (e) {
                    if (O.started) throw new Error("Backbone.history has already been started");
                    (O.started = !0),
                        (this.options = u.extend({}, { root: "/" }, this.options, e)),
                        (this.root = this.options.root),
                        (this._wantsHashChange = this.options.hashChange !== !1),
                        (this._wantsPushState = !!this.options.pushState),
                        (this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState));
                    var t = this.getFragment(),
                        n = document.documentMode,
                        r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                    (this.root = ("/" + this.root + "/").replace(_, "/")),
                        r && this._wantsHashChange && ((this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow), this.navigate(t)),
                        this._hasPushState
                            ? o.$(window).on("popstate", this.checkUrl)
                            : this._wantsHashChange && "onhashchange" in window && !r
                            ? o.$(window).on("hashchange", this.checkUrl)
                            : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                        (this.fragment = t);
                    var i = this.location,
                        s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return (this.fragment = this.getFragment(null, !0)), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._wantsPushState && this._hasPushState && s && i.hash && ((this.fragment = this.getHash().replace(M, "")), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
                    if (!this.options.silent) return this.loadUrl();
                },
                stop: function () {
                    o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), (O.started = !1);
                },
                route: function (e, t) {
                    this.handlers.unshift({ route: e, callback: t });
                },
                checkUrl: function (e) {
                    var t = this.getFragment();
                    t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                    if (t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
                },
                loadUrl: function (e) {
                    var t = (this.fragment = this.getFragment(e)),
                        n = u.any(this.handlers, function (e) {
                            if (e.route.test(t)) return e.callback(t), !0;
                        });
                    return n;
                },
                navigate: function (e, t) {
                    if (!O.started) return !1;
                    if (!t || t === !0) t = { trigger: t };
                    e = this.getFragment(e || "");
                    if (this.fragment === e) return;
                    this.fragment = e;
                    var n = this.root + e;
                    if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace),
                            this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace));
                    }
                    t.trigger && this.loadUrl(e);
                },
                _updateHash: function (e, t, n) {
                    if (n) {
                        var r = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(r + "#" + t);
                    } else e.hash = "#" + t;
                },
            }),
            (o.history = new O());
        var H = function (e, t) {
            var n = this,
                r;
            e && u.has(e, "constructor")
                ? (r = e.constructor)
                : (r = function () {
                      return n.apply(this, arguments);
                  }),
                u.extend(r, n, t);
            var i = function () {
                this.constructor = r;
            };
            return (i.prototype = n.prototype), (r.prototype = new i()), e && u.extend(r.prototype, e), (r.__super__ = n.prototype), r;
        };
        p.extend = m.extend = N.extend = E.extend = O.extend = H;
        var B = function () {
                throw new Error('A "url" property or function must be specified');
            },
            j = function (e, t) {
                var n = t.error;
                t.error = function (r) {
                    n && n(e, r, t), e.trigger("error", e, r, t);
                };
            };
    }.call(this),
    define("backbone", ["underscore"], (function (e) {
        return function () {
            var t, n;
            return t || e.Backbone;
        };
    })(this)),
    define("componentLibrary-Utils/ExtendedBackboneModel", ["require", "backbone"], function (e) {
        var t = e("backbone"),
            n = t.Model.extend({
                initialize: function () {
                    (this.initialize = undefined), s.call(this), (this.getValue = r), (this.setValue = i);
                },
                destroy: function () {},
            }),
            r = function (e, t) {
                var n = f(e, t);
                return this[n] || a.call(this, e), this[n]();
            },
            i = function (e, t, n) {
                var r = l(e);
                return this[r] || a.call(this, e), this[r](t, n);
            },
            s = function () {
                for (var e in this.attributes) a.call(this, e);
            },
            o = function (e, t) {
                return this.get(e, t);
            },
            u = function (e, t, n) {
                this.set(e, t, n);
            },
            a = function (e) {
                if (e === "value") throw new Error("Can not have attribute name of value");
                var t = f(e),
                    n = l(e);
                if (!this[t] || typeof this[t] != "function") this[t] = o.bind(this, e);
                if (!this[n] || typeof this[n] != "function") this[n] = u.bind(this, e);
            },
            f = function (e) {
                return "get" + c(e);
            },
            l = function (e) {
                return "set" + c(e);
            },
            c = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
            };
        return n;
    }),
    define("lib/model/CannonBall", ["require", "componentLibrary-Utils/ExtendedBackboneModel"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel");
        return t.extend({
            defaults: { x: 0, y: 0 },
            getX: function () {
                return this.get("x");
            },
            setX: function (e) {
                this.set("x", e);
            },
            getY: function () {
                return this.get("y");
            },
            setY: function (e) {
                this.set("y", e);
            },
        });
    }),
    define("lib/model/InputValue", ["require", "componentLibrary-Utils/ExtendedBackboneModel"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel");
        return t.extend({
            defaults: { val: 0, minVal: 0, maxVal: 0, show: null, allowEdit: null, focused: !1 },
            getVal: function () {
                return this.get("val");
            },
            setVal: function (e, t) {
                this.set("val", e, t);
            },
            getMinVal: function () {
                return this.get("minVal");
            },
            setMinVal: function (e) {
                this.set("minVal", e);
            },
            getMaxVal: function () {
                return this.get("maxVal");
            },
            setMaxVal: function (e) {
                this.set("maxVal", e);
            },
            getShow: function () {
                return this.get("show");
            },
            setShow: function (e) {
                this.set("show", e);
            },
            getAllowEdit: function () {
                return this.get("allowEdit");
            },
            setAllowEdit: function (e) {
                this.set("allowEdit", e);
            },
        });
    }),
    define("lib/model/Cannon", ["require", "componentLibrary-Utils/ExtendedBackboneModel"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel");
        return t.extend({
            defaults: {
                showBulletPath: !0,
                firedBullets: 0,
                showBulletsLeft: !1,
                maximumBullets: 99,
                yVelocityAfter10sec: 0,
                radiusOfCurvature: 0,
                ballX: 0,
                ballY: 0,
                lockSimAfterDestroy: !1,
                lockSim: !1,
                enableFireButton: !0,
                showBulletGhost: !0,
                showBulletAccelerationVector: !1,
                showBulletVelocityVector: !1,
                vx: { x: 0, y: 0 },
                vy: { x: 0, y: 0 },
                timeOfFlight: 0,
                initialXVelocity: 0,
                initialYVelocity: 0,
                distanceTravelled: 0,
                ballVisible: !1,
            },
            getShowBulletPath: function () {
                return this.get("showBulletPath");
            },
            setShowBulletPath: function (e) {
                this.set("showBulletPath", e);
            },
            getFiredBullets: function () {
                return this.get("firedBullets");
            },
            setFiredBullets: function (e) {
                this.set("firedBullets", e);
            },
            getShowBulletsLeft: function () {
                return this.get("showBulletsLeft");
            },
            setShowBulletsLeft: function (e) {
                this.set("showBulletsLeft", e);
            },
            getMaximumBullets: function () {
                return this.get("maximumBullets");
            },
            setMaximumBullets: function (e) {
                this.set("maximumBullets", e);
            },
            getYVelocityAfter10sec: function () {
                return this.get("yVelocityAfter10sec");
            },
            setYVelocityAfter10sec: function (e) {
                this.set("yVelocityAfter10sec", e);
            },
            getRadiusOfCurvature: function () {
                return this.get("radiusOfCurvature");
            },
            setRadiusOfCurvature: function (e) {
                this.set("radiusOfCurvature", e);
            },
            getEnableFireButton: function () {
                return this.get("enableFireButton");
            },
            setEnableFireButton: function (e) {
                this.set("enableFireButton", e);
            },
            getBallX: function () {
                return this.get("ballX");
            },
            setBallX: function (e) {
                this.set("ballX", e);
            },
            getBallY: function () {
                return this.get("ballY");
            },
            setBallY: function (e) {
                this.set("ballY", e);
            },
            getLockSim: function () {
                return this.get("lockSim");
            },
            setLockSim: function (e) {
                this.set("lockSim", e);
            },
            getLockSimAfterDestroy: function () {
                return this.get("lockSimAfterDestroy");
            },
            setLockSimAfterDestroy: function (e) {
                this.set("lockSimAfterDestroy", e);
            },
            getTimeOfFlight: function () {
                return this.get("timeOfFlight");
            },
            setTimeOfFlight: function (e) {
                this.set("timeOfFlight", e);
            },
            getInitialXVelocity: function () {
                return this.get("initialXVelocity");
            },
            setInitialXVelocity: function (e) {
                this.set("initialXVelocity", e);
            },
            getInitialYVelocity: function () {
                return this.get("initialYVelocity");
            },
            setInitialYVelocity: function (e) {
                this.set("initialYVelocity", e);
            },
            getDistanceTravelled: function () {
                return this.get("distanceTravelled");
            },
            setDistanceTravelled: function (e) {
                this.set("distanceTravelled", e);
            },
            getBallVisible: function () {
                return this.get("ballVisible");
            },
            setBallVisible: function (e) {
                this.set("ballVisible", e);
            },
        });
    }),
    define("lib/model/Targets", ["require", "componentLibrary-Utils/ExtendedBackboneModel"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel");
        return t.extend({
            defaults: { targets: 0, showTooltip: !0, allowTargetDrag: !1, allowTargetTooltips: !0 },
            getTargets: function () {
                return this.get("targets");
            },
            setTargets: function (e) {
                this.set("targets", e);
            },
        });
    }),
    define("lib/model/Target", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "constants/Global", "constants/Origin"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("constants/Global"),
            r = e("constants/Origin"),
            i = t.extend({
                defaults: {
                    id: null,
                    x: 0,
                    y: 0,
                    visible: !0,
                    showTooltip: !1,
                    chippedTop: !1,
                    chippedBottom: !1,
                    destroyed: !1,
                    minX: 0,
                    maxX: n.WIDTH - r.X - 11,
                    minY: r.Y - n.HEIGHT + 17 + 8,
                    maxY: r.Y - 17,
                    collisionX: 0,
                    collisionY: 0,
                    collisionYDiff: 0,
                },
                start: function () {
                    this.id && this.setId(this.id);
                },
            });
        return i;
    }),
    define("lib/model/Aim", ["require", "componentLibrary-Utils/ExtendedBackboneModel"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel");
        return t.extend({
            defaults: { posX: 0, posY: 0, velocityFocused: !1, angleFocused: !1, showHandle: null, showGuidelines: null },
            getPosX: function () {
                return this.get("posX");
            },
            setPosX: function (e, t) {
                this.set("posX", e, t);
            },
            getPosY: function () {
                return this.get("posY");
            },
            setPosY: function (e, t) {
                this.set("posY", e, t);
            },
        });
    }),
    define("lib/capi/InputValue", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "api/snapshot/adapters/BackboneAdapter"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("api/snapshot/adapters/BackboneAdapter").getInstance();
        return t.extend({
            defaults: { val: 0, minVal: 0, maxVal: 0, show: !0, allowEdit: !0 },
            start: function () {
                this.setMinVal(this.minValue),
                    this.setMaxVal(this.maxValue),
                    n.expose("val", this, { alias: "Cannon Data." + this.alias, description: this.alias + " value" }),
                    n.expose("minVal", this, { alias: "Cannon Data.Min " + this.alias, description: "Minim " + this.alias + " value" }),
                    n.expose("maxVal", this, { alias: "Cannon Data.Max " + this.alias, description: "Maxim " + this.alias + " value" }),
                    n.expose("show", this, { alias: "Cannon InfoPanel.Show " + this.alias, description: this.alias + " visibility" }),
                    n.expose("allowEdit", this, { alias: "Cannon InfoPanel.Allow " + this.alias + " Change", description: "Allow change of " + this.alias + " value" });
            },
            getVal: function () {
                return this.get("val");
            },
            setVal: function (e) {
                this.set("val", e);
            },
            getMinVal: function () {
                return this.get("minVal");
            },
            setMinVal: function (e) {
                this.set("minVal", e);
            },
            getMaxVal: function () {
                return this.get("maxVal");
            },
            setMaxVal: function (e) {
                this.set("maxVal", e);
            },
            getShow: function () {
                return this.get("show");
            },
            setShow: function (e) {
                this.set("show", e);
            },
            getAllowEdit: function () {
                return this.get("allowEdit");
            },
            setAllowEdit: function (e) {
                this.set("allowEdit", e);
            },
        });
    }),
    define("lib/capi/Cannon", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "api/snapshot/adapters/BackboneAdapter"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("api/snapshot/adapters/BackboneAdapter").getInstance();
        return t.extend({
            defaults: {
                showBulletPath: !0,
                firedBullets: 0,
                showBulletsLeft: !1,
                maximumBullets: 99,
                lockSimAfterDestroy: !1,
                enableFireButton: !0,
                showBulletAccelerationVector: !1,
                showBulletVelocityVector: !1,
                showBulletGhost: !0,
                yVelocityAfter10sec: 0,
                radiusOfCurvature: 0,
                timeOfFlight: 0,
                initialXVelocity: 0,
                initialYVelocity: 0,
                distanceTravelled: 0,
            },
            start: function () {
                n.expose("showBulletPath", this, { alias: "Cannon.Show Bullet Path", description: "Show Bullet Path" }),
                    n.expose("firedBullets", this, { alias: "Cannon.Num Of Bullets Fired", description: "Number of Fired Bullets" }),
                    n.expose("showBulletsLeft", this, { alias: "Cannon.Show Bullets Left", description: "Show Bullets Left" }),
                    n.expose("maximumBullets", this, { alias: "Cannon.Max Bullets", description: "Maximum Allowed Bullets" }),
                    n.expose("yVelocityAfter10sec", this, { alias: "Cannon.Y Velocity After 10 secs", description: "Reports the velocity along Y axis after 10 seconds of bullet in flight", readonly: !0 }),
                    n.expose("radiusOfCurvature", this, { alias: "Cannon.Radius Of Curvature", description: "Reports the radius of curvature of the bullet" }),
                    n.expose("lockSimAfterDestroy", this, { alias: "Cannon Data.Lock Sim After Destroy", description: "" }),
                    n.expose("enableFireButton", this, { alias: "Cannon InfoPanel.Fire Button Enabled", description: "Enable Fire Button" }),
                    n.expose("showBulletGhost", this, { alias: "Cannon.Show Bullet Ghost", description: "Show Bullet Ghost" }),
                    n.expose("showBulletAccelerationVector", this, { alias: "Cannon.Show Bullet Acceleration Vector", description: "Show Bullet Acceleration Vector" }),
                    n.expose("showBulletVelocityVector", this, { alias: "Cannon.Show Bullet Velocity Vector", description: "Show Bullet Velocity Vector" }),
                    n.expose("timeOfFlight", this, { alias: "Cannon.Time Of Flight", description: "Time of Flight of last fired bullet" }),
                    n.expose("initialXVelocity", this, { alias: "Cannon.Initial X Velocity", description: "Initial x velocity of the last fired bullet" }),
                    n.expose("initialYVelocity", this, { alias: "Cannon.Initial Y Velocity", description: "Initial y velocity of the last fired bullet" }),
                    n.expose("distanceTravelled", this, { alias: "Cannon.Distance Travelled", description: "The distance travelled by the last fired bullet" });
            },
            getShowBulletPath: function () {
                return this.get("showBulletPath");
            },
            setShowBulletPath: function (e) {
                this.set("showBulletPath", e);
            },
            getFiredBullets: function () {
                return this.get("firedBullets");
            },
            setFiredBullets: function (e) {
                this.set("firedBullets", e);
            },
            getShowBulletsLeft: function () {
                return this.get("showBulletsLeft");
            },
            setShowBulletsLeft: function (e) {
                this.set("showBulletsLeft", e);
            },
            getMaximumBullets: function () {
                return this.get("maximumBullets");
            },
            setMaximumBullets: function (e) {
                this.set("maximumBullets", e);
            },
            getBallX: function () {
                return this.get("ballX");
            },
            setBallX: function (e) {
                this.set("ballX", e);
            },
            getBallY: function () {
                return this.get("ballY");
            },
            setBallY: function (e) {
                this.set("ballY", e);
            },
            getLockSim: function () {
                return this.get("lockSim");
            },
            setLockSim: function (e) {
                this.set("lockSim", e);
            },
            getLockSimAfterDestroy: function () {
                return this.get("lockSimAfterDestroy");
            },
            setLockSimAfterDestroy: function (e) {
                this.set("lockSimAfterDestroy", e);
            },
            getEnableFireButton: function () {
                return this.get("enableFireButton");
            },
            setEnableFireButton: function (e) {
                this.set("enableFireButton", e);
            },
            getYVelocityAfter10sec: function () {
                return this.get("yVelocityAfter10sec");
            },
            setYVelocityAfter10sec: function (e) {
                this.set("yVelocityAfter10sec", e);
            },
            getRadiusOfCurvature: function () {
                return this.get("radiusOfCurvature");
            },
            setRadiusOfCurvature: function (e) {
                this.set("radiusOfCurvature", e);
            },
            getTimeOfFlight: function () {
                return this.get("timeOfFlight");
            },
            setTimeOfFlight: function (e) {
                this.set("timeOfFlight", e);
            },
            getInitialXVelocity: function () {
                return this.get("initialXVelocity");
            },
            setInitialXVelocity: function (e) {
                this.set("initialXVelocity", e);
            },
            getInitialYVelocity: function () {
                return this.get("initialYVelocity");
            },
            setInitialYVelocity: function (e) {
                this.set("initialYVelocity", e);
            },
            getDistanceTravelled: function () {
                return this.get("distanceTravelled");
            },
            setDistanceTravelled: function (e) {
                this.set("distanceTravelled", e);
            },
        });
    }),
    define("lib/capi/Targets", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "api/snapshot/adapters/BackboneAdapter"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("api/snapshot/adapters/BackboneAdapter").getInstance();
        return t.extend({
            defaults: { targets: 0, showTooltip: !0, allowTargetDrag: !1, allowTargetTooltips: !0 },
            start: function () {
                n.expose("targets", this, { alias: "Target.Number Of Targets", description: "Number of total targets" }),
                    n.expose("showTooltip", this, { alias: "Target.Show Target Info", description: "Tooltip Visibility" }),
                    n.expose("allowTargetDrag", this, { alias: "Target.Allow Target Position Change ", description: "Allow Drag of Targets" }),
                    n.expose("allowTargetTooltips", this, { alias: "Target.Allow Targets to Show Tooltips", description: "Allow Targets to Show Tooltips on click" });
            },
            getTargets: function () {
                return this.get("targets");
            },
            setTargets: function (e) {
                this.set("targets", e);
            },
        });
    }),
    define("lib/capi/Target", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "api/snapshot/adapters/BackboneAdapter"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("api/snapshot/adapters/BackboneAdapter").getInstance(),
            r = t.extend({
                defaults: { id: null, x: 0, y: 0, visible: !0, destroyed: !1, collisionYDiff: 0 },
                start: function () {
                    this.id && this.setId(this.id), this.expose();
                },
                destroy: function () {
                    this.unexpose();
                },
                expose: function () {
                    n.expose("x", this, { alias: "Target Data.Target " + this.getValue("id") + ".X Position", description: "Target X Position" }),
                        n.expose("y", this, { alias: "Target Data.Target " + this.getValue("id") + ".Y Position", description: "Target Y Position" }),
                        n.expose("visible", this, { alias: "Target Data.Target " + this.getValue("id") + ".Visible", description: "Target Visibility" }),
                        n.expose("destroyed", this, { alias: "Target Data.Target " + this.getValue("id") + ".Destroyed", description: "If target is destroyed" }),
                        n.expose("collisionYDiff", this, {
                            alias: "Target Data.Target " + this.getValue("id") + ".Difference in Y from Center",
                            description: "The difference in height between the center of the target and the collision point",
                        });
                },
                unexpose: function () {
                    n.unexpose("x", this), n.unexpose("y", this), n.unexpose("visible", this), n.unexpose("destroyed", this), n.unexpose("collisionYDiff", this);
                },
            });
        return r;
    }),
    define("lib/capi/Aim", ["require", "componentLibrary-Utils/ExtendedBackboneModel", "api/snapshot/adapters/BackboneAdapter"], function (e) {
        var t = e("componentLibrary-Utils/ExtendedBackboneModel"),
            n = e("api/snapshot/adapters/BackboneAdapter").getInstance();
        return t.extend({
            defaults: { showHandle: !0, showGuidelines: !0 },
            start: function () {
                n.expose("showHandle", this, { alias: "Cannon InfoPanel.Show Controller Handle", description: "Controller Handle visibility" }),
                    n.expose("showGuidelines", this, { alias: "Cannon InfoPanel.Show GuideLines", description: "GuideLines visibility" });
            },
            getShowHandle: function () {
                return this.get("showHandle");
            },
            setShowHandle: function (e) {
                this.set("showHandle", e);
            },
            getShowGuidelines: function () {
                return this.get("showGuidelines");
            },
            setShowGuidelines: function (e) {
                this.set("showGuidelines", e);
            },
        });
    }),
    define("componentLibrary-Sync/ModelToInput", [], function () {
        var e = function () {
            (this.model = null), (this.modelKey = ""), (this.renderer = null), (this.suffix = ""), (this.validator = null);
        };
        (e.prototype.start = function () {
            this.renderer.$el.on("change." + this.UID, n.bind(this)), this.model.on("change:" + this.modelKey, t, this), t.call(this);
        }),
            (e.prototype.destroy = function () {
                this.renderer && this.renderer.$el && this.renderer.$el.off && this.renderer.$el.off("." + this.UID), this.model && this.model.off && this.model.off(null, null, this);
            });
        var t = function () {
                var e = this.model.getValue(this.modelKey).toString() + this.suffix;
                if (this.renderer.$el.val() === e) return;
                this.renderer.$el.val(e).trigger("change");
            },
            n = function () {
                var e = this.renderer.$el.val();
                if (this.suffix) {
                    var t = new RegExp(this.suffix + "$", "g");
                    e = e.replace(t, "");
                }
                this.validator && ((e = this.validator.validate(e)), this.renderer.$el.val(e + this.suffix)), this.model.setValue(this.modelKey, e);
            };
        return e;
    }),
    define("componentLibrary-Sync/ToggleVisibility", [], function () {
        function t() {
            var e = this.model.getValue(this.modelKey) === this.modelKeyValue;
            this.matching || (e = !e), this.renderer.$el.toggle(e);
        }
        var e = function () {
            (this.model = null), (this.modelKey = ""), (this.modelKeyValue = ""), (this.renderer = null), (this.matching = !0);
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/ToggleClass", [], function () {
        function t() {
            var e = this.model.getValue(this.modelKey) === this.modelKeyValue;
            this.matching || (e = !e), this.renderer.$el.toggleClass(this.className, e);
        }
        var e = function () {
            (this.model = null), (this.renderer = null), (this.modelKey = ""), (this.modelKeyValue = ""), (this.matching = !0), (this.className = "");
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/ModelToModel", [], function () {
        var e = function () {
            (this.modelA = null), (this.modelAKey = null), (this.modelB = null), (this.modelBKey = null);
        };
        (e.prototype.start = function () {
            this.modelA.on("change:" + this.modelAKey, n, this), this.modelB.on("change:" + this.modelBKey, t, this), n.call(this), t.call(this);
        }),
            (e.prototype.destroy = function () {
                this.modelB && this.modelB.off && this.modelB.off(null, null, this), this.modelA && this.modelA.off && this.modelA.off(null, null, this);
            });
        var t = function () {
                this.modelA.setValue(this.modelAKey, this.modelB.getValue(this.modelBKey));
            },
            n = function () {
                this.modelB.setValue(this.modelBKey, this.modelA.getValue(this.modelAKey));
            };
        return e;
    }),
    define("componentLibrary-Sync/ModelToText", [], function () {
        function t() {
            this.renderer.$el.text(this.model.getValue(this.modelKey));
        }
        var e = function () {
            (this.renderer = null), (this.model = null), (this.modelKey = "");
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/ModelToNumericProperty", [], function () {
        function t() {
            this.target[this.property] = this.factor * (this.model.getValue(this.modelKey) + this.offset);
        }
        var e = function () {
            (this.target = null), (this.property = ""), (this.model = null), (this.modelKey = ""), (this.factor = 1), (this.offset = 0);
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/ToggleProperty", [], function () {
        function t() {
            var e = this.model.getValue(this.modelKey) === this.modelKeyValue;
            this.matching || (e = !e), this.renderer.$el.prop(this.propertyName, e);
        }
        var e = function () {
            (this.model = null), (this.modelKey = ""), (this.modelKeyValue = ""), (this.renderer = null), (this.propertyName = ""), (this.matching = !0);
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/SetOnEvent", [], function () {
        function t() {
            this.model.setValue(this.modelKey, this.value);
        }
        var e = function () {
            (this.renderer = null), (this.model = null), (this.modelKey = ""), (this.eventName = ""), (this.value = null);
        };
        return (
            (e.prototype.start = function () {
                this.renderer.$el.on(this.eventName + "." + this.UID, t.bind(this));
            }),
            (e.prototype.destroy = function () {
                this.renderer && this.renderer.$el && this.renderer.$el.off && this.renderer.$el.off("." + this.UID);
            }),
            e
        );
    }),
    define("componentLibrary-Sync/ModelToProperty", [], function () {
        function t() {
            this.target[this.property] = this.model.getValue(this.modelKey);
        }
        var e = function () {
            (this.target = null), (this.property = ""), (this.model = null), (this.modelKey = "");
        };
        return (
            (e.prototype.start = function () {
                this.model.on("change:" + this.modelKey, t, this), t.call(this);
            }),
            (e.prototype.destroy = function () {
                this.model && this.model.off && this.model.off(null, null, this);
            }),
            e
        );
    }),
    define("utils/Point", [], function () {
        "use strict";
        var e = function (e, t) {
            (this.x = parseFloat(e)), (this.y = parseFloat(t));
        };
        return (
            (e.prototype.getMagnitude = function () {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            }),
            (e.prototype.normalize = function () {
                var e = this.getMagnitude();
                return (this.x = this.x / e), (this.y = this.y / e), this;
            }),
            (e.prototype.distanceTo = function (e) {
                return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
            }),
            (e.prototype.angle = function () {
                return e.toAngle(this.x, this.y);
            }),
            (e.prototype.screenAngle = function () {
                return 90 - e.toAngle(this.x, this.y);
            }),
            (e.prototype.dot = function (e) {
                return this.x * e.x + this.y * e.y;
            }),
            (e.prototype.clone = function () {
                return new e(this.x, this.y);
            }),
            (e.prototype.toString = function () {
                return this.x + "," + this.y;
            }),
            (e.prototype.distance = function () {
                return e.distance(this.x, this.y);
            }),
            (e.add = function (t, n) {
                return new e(t.x + n.x, t.y + n.y);
            }),
            (e.subtract = function (t, n) {
                return new e(t.x - n.x, t.y - n.y);
            }),
            (e.fromAngle = function (t) {
                var n = (t * Math.PI) / 180;
                return new e(Math.sin(n), Math.cos(n));
            }),
            (e.fromScreenAngle = function (t) {
                var n = ((-t + 90) * Math.PI) / 180;
                return new e(Math.sin(n), Math.cos(n));
            }),
            (e.toAngle = function (e, t) {
                return (Math.atan2(e, t) * 180) / Math.PI;
            }),
            (e.fromString = function (t) {
                var n = t.split(",");
                return new e(n[0], n[1]);
            }),
            (e.distance = function (e, t) {
                return Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
            }),
            e
        );
    }),
    define("lib/sync/DraggableToModel", ["require", "utils/Point"], function (e) {
        var t = e("utils/Point"),
            n = function () {
                (this.model = null), (this.renderer = null), (this.validator = null), (this.xKey = ""), (this.yKey = ""), (this.offsetX = 0), (this.offsetY = 0);
            };
        n.prototype.start = function () {
            this.renderer.$el.on("drag", r.bind(this));
        };
        var r = function (e, n) {
            var r = new t(n.position.left + this.offsetX, this.offsetY - n.position.top);
            (n.position.left = n.position.top = 0),
                this.validator.validate(r),
                (this.renderer.x = r.x - this.offsetX),
                (this.renderer.y = this.offsetY - r.y),
                this.model.setValue(this.xKey, r.x, { silent: !0 }),
                this.model.setValue(this.yKey, r.y, { silent: !0 }),
                this.model.trigger("change");
        };
        return n;
    }),
    define("lib/sync/AngleInput", ["require", "util", "utils/Point"], function (e) {
        function i() {
            var e = new n(this.aimModel.getPosX(), this.aimModel.getPosY()),
                t = e.x !== 0 || e.y !== 0 ? e.screenAngle() : 0;
            this.inputModel.setVal(t);
        }
        function s() {
            var e = this.aimModel.getPosX(),
                t = this.aimModel.getPosY(),
                r = this.inputModel.getVal(),
                i = n.fromScreenAngle(r).normalize(),
                s = n.distance(e, t);
            this.aimModel.setValue("posX", s * i.x, { silent: !0 }), this.aimModel.setValue("posY", s * i.y, { silent: !0 }), this.aimModel.trigger("change:posX"), this.aimModel.trigger("change:posY");
        }
        var t = e("util"),
            n = e("utils/Point"),
            r = function () {
                (this.inputModel = null), (this.cannonModel = null), (this.aimModel = null);
            };
        return (
            (r.prototype.start = function () {
                this.inputModel.on("change:val", s, this), this.aimModel.on("change", i, this), s.call(this);
            }),
            (r.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.inputModel, this), t.deregisterBackboneEvent(this.aimModel, this);
            }),
            r
        );
    }),
    define("lib/sync/VelocityInput", ["require", "util", "utils/Point", "constants/Origin"], function (e) {
        function s() {
            var e = new n(this.aimModel.getPosX(), this.aimModel.getPosY()),
                t = e.distance(),
                i = this.inputModel.getMinVal(),
                s = this.inputModel.getMaxVal(),
                o = s - i,
                u = i + (t * o) / r.RADIUS;
            this.inputModel.setVal(u);
        }
        function o() {
            var e = new n(this.aimModel.getPosX(), this.aimModel.getPosY());
            e.x === 0 && e.y === 0 && (e.x = 1), e.normalize();
            var t = this.inputModel.getVal(),
                i = this.inputModel.getMinVal(),
                s = this.inputModel.getMaxVal(),
                o = s - i,
                u = ((t - i) * r.RADIUS) / o;
            this.aimModel.setValue("posX", u * e.x, { silent: !0 }), this.aimModel.setValue("posY", u * e.y, { silent: !0 }), this.aimModel.trigger("change:posX"), this.aimModel.trigger("change:posY");
        }
        var t = e("util"),
            n = e("utils/Point"),
            r = e("constants/Origin"),
            i = function () {
                (this.inputModel = null), (this.cannonModel = null), (this.aimModel = null);
            };
        return (
            (i.prototype.start = function () {
                this.inputModel.on("change:val", o, this), this.aimModel.on("change", s, this), o.call(this);
            }),
            (i.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.inputModel, this), t.deregisterBackboneEvent(this.aimModel, this);
            }),
            i
        );
    }),
    define("lib/sync/LockSim", ["require", "util"], function (e) {
        var t = e("util"),
            n = function () {
                this.model = null;
            };
        (n.prototype.start = function () {
            this.model.on("change:lockSimAfterDestroy", r, this), r.call(this);
        }),
            (n.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.model, this);
            });
        var r = function () {
            this.model.getLockSimAfterDestroy() || (this.model.setLockSim(!1), this.model.setEnableFireButton(!0));
        };
        return n;
    }),
    define("lib/sync/Cannon", ["require", "util", "constants/Global"], function (e) {
        var t = e("util"),
            n = e("constants/Global"),
            r = function () {
                (this.velocityModel = null), (this.angleModel = null), (this.cannonModel = null);
            };
        (r.prototype.start = function () {
            i.call(this), this.velocityModel.on("change:val", i, this), this.angleModel.on("change:val", i, this);
        }),
            (r.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.inputModel, this);
            });
        var i = function () {
            var e = this.velocityModel.getVal() * Math.cos((this.angleModel.getVal() * Math.PI) / 180),
                t = this.velocityModel.getVal() * Math.sin((this.angleModel.getVal() * Math.PI) / 180),
                r = Math.round((t - n.GRAVITY * 10) * 10) / 10,
                i = Math.round((Math.pow(e, 2) + Math.pow(r, 2) / (n.GRAVITY * Math.cos(Math.atan2(r, e)))) * 10) / 10;
            this.cannonModel.setYVelocityAfter10sec(r), this.cannonModel.setRadiusOfCurvature(i);
        };
        return r;
    }),
    define("lib/sync/Flight", ["require", "util", "constants/Origin"], function (e) {
        var t = e("util"),
            n = e("constants/Origin"),
            r = function () {
                (this.velocityModel = null), (this.angleModel = null), (this.cannonModel = null), (this.targetModel = null);
            };
        (r.prototype.start = function () {
            this.targetModel.on("change:destroyed", i, this);
        }),
            (r.prototype.destroy = function () {
                t.deregisterBackboneEvent(this.targetModel, this);
            });
        var i = function () {
            var e = this.velocityModel.getVal() * Math.cos((this.angleModel.getVal() * Math.PI) / 180),
                t = this.velocityModel.getVal() * Math.sin((this.angleModel.getVal() * Math.PI) / 180),
                r = e > 0 ? this.targetModel.getCollisionX() / (n.RATIO * e) : 0,
                i = r * e;
            this.cannonModel.setInitialXVelocity(Math.round(e * 100) / 100),
                this.cannonModel.setInitialYVelocity(Math.round(t * 100) / 100),
                this.cannonModel.setTimeOfFlight(Math.round(r * 100) / 100),
                this.cannonModel.setDistanceTravelled(Math.round(i * 100) / 100);
            var s = (this.targetModel.getCollisionY() - this.targetModel.getY()) / n.RATIO;
            this.targetModel.setCollisionYDiff(Math.round(s * 10) / 10);
        };
        return r;
    }),
    define("lib/sync/ToggleRendererProperty", [], function () {
        var e = function () {
            (this.models = null), (this.modelKeys = null), (this.renderer = null), (this.modelKeyValues = null), (this.propertyName = "");
        };
        (e.prototype.start = function () {
            for (var e = 0; e < this.models.length; e++) this.models[e].on("change:" + this.modelKeys[e], t, this);
            t.call(this);
        }),
            (e.prototype.destroy = function () {
                for (var e = 0; e < this.models.length; e++) this.models[e] && this.models[e].off && this.models[e].off(null, null, this);
            });
        var t = function () {
            var e = !1;
            for (var t = 0; t < this.models.length; t++) this.models[t].getValue(this.modelKeys[t]) === this.modelKeyValues[t] && (e = !0);
            this.renderer.$el.prop(this.propertyName, e);
        };
        return e;
    }),
    define("lib/validator/Number", [], function () {
        var e = function () {};
        return (
            (e.prototype.validate = function (e) {
                return (e = parseFloat(e)), isNaN(e) && (e = 0), e;
            }),
            e
        );
    }),
    define("lib/validator/Range", [], function () {
        var e = function () {
            (this.model = null), (this.value = ""), (this.minValue = ""), (this.maxValue = "");
        };
        (e.prototype.start = function () {
            this.model.on("change:" + this.value + " change:" + this.minValue + " change:" + this.maxValue, t, this), t.call(this);
        }),
            (e.prototype.validate = function (e, t, n) {
                return Math.min(Math.max(Math.round(e), t), n);
            });
        var t = function () {
            var e = this.validate(this.model.getValue(this.value), this.model.getValue(this.minValue), this.model.getValue(this.maxValue));
            this.model.setValue(this.value, e);
        };
        return e;
    }),
    define("lib/validator/AimPosition", ["require", "utils/Point", "constants/Origin"], function (e) {
        function i(e) {
            var t = this.exitVelocityModel.getVal(),
                r = this.exitVelocityModel.getMinVal(),
                i = this.exitVelocityModel.getMaxVal(),
                s = i - r,
                o = ((t - r) * n.RADIUS) / s;
            e.normalize(), (e.x *= o), (e.y *= o);
        }
        function s(e) {
            var n = this.angleModel.getVal(),
                r = t.fromScreenAngle(n).normalize(),
                i = t.distance(e.x, e.y);
            (e.x = i * r.x), (e.y = i * r.y);
        }
        var t = e("utils/Point"),
            n = e("constants/Origin"),
            r = function () {
                (this.radius = 0), (this.exitVelocityModel = null), (this.angleModel = null);
            };
        return (
            (r.prototype.validate = function (e) {
                var t;
                (e.x = Math.max(e.x, 1)), (e.y = Math.max(e.y, 0)), this.exitVelocityModel.getAllowEdit() || i.call(this, e), this.angleModel.getAllowEdit() || s.call(this, e);
                if (e.x === 0 && e.y === 0) return;
                (t = e.clone().normalize()), e.distance() > this.radius && ((e.x = this.radius * t.x), (e.y = this.radius * t.y));
            }),
            r
        );
    }),
    define("lib/validator/TargetPosition", [], function () {
        var e = function () {
            (this.parentWidth = 0), (this.parentHeight = 0), (this.objectOffsetX = 0), (this.objectOffsetY = 0), (this.offsetX = 0), (this.offsetY = 0), (this.groundHeight = 0);
        };
        return (
            (e.prototype.validate = function (e) {
                (e.x = Math.min(Math.max(e.x, 0), this.parentWidth - this.offsetX - this.objectOffsetX)),
                    (e.y = Math.min(Math.max(e.y, this.offsetY - this.parentHeight + this.objectOffsetY + this.groundHeight), this.offsetY - this.objectOffsetY));
            }),
            e
        );
    }),
    define("components", [
        "require",
        "componentLibrary-Renderers/HtmlRenderer",
        "componentLibrary-Renderers/TextRenderer",
        "componentLibrary-Renderers/TemplateRenderer",
        "componentLibraryJQueryUI/Draggable",
        "lib/ui/AimPath",
        "lib/ui/AnglePath",
        "lib/ui/DrawPath",
        "lib/ui/DrawLine",
        "lib/behaviour/CreateCannonBall",
        "lib/behaviour/UpdateBall",
        "lib/behaviour/UpdateFiredBullets",
        "lib/behaviour/UpdateBulletsLeft",
        "lib/behaviour/CreateTarget",
        "lib/behaviour/DragTarget",
        "lib/behaviour/TargetCollision",
        "lib/behaviour/DestroyTarget",
        "lib/behaviour/ChipTarget",
        "lib/behaviour/LockDraggable",
        "lib/behaviour/UpdateVectors",
        "lib/behaviour/UpdateDistance",
        "lib/behaviour/AimHandle",
        "lib/behaviour/TooltipPositioner",
        "lib/behaviour/TooltipCreator",
        "lib/behaviour/CreateTooltip",
        "lib/model/CannonBall",
        "lib/model/InputValue",
        "lib/model/Cannon",
        "lib/model/Targets",
        "lib/model/Target",
        "lib/model/Aim",
        "lib/capi/InputValue",
        "lib/capi/Cannon",
        "lib/capi/Targets",
        "lib/capi/Target",
        "lib/capi/Aim",
        "componentLibrary-Sync/ModelToInput",
        "componentLibrary-Sync/ToggleVisibility",
        "componentLibrary-Sync/ToggleClass",
        "componentLibrary-Sync/ModelToModel",
        "componentLibrary-Sync/ModelToText",
        "componentLibrary-Sync/ModelToNumericProperty",
        "componentLibrary-Sync/ToggleProperty",
        "componentLibrary-Sync/SetOnEvent",
        "componentLibrary-Sync/ModelToProperty",
        "lib/sync/DraggableToModel",
        "lib/sync/AngleInput",
        "lib/sync/VelocityInput",
        "lib/sync/LockSim",
        "lib/sync/Cannon",
        "lib/sync/Flight",
        "lib/sync/ToggleRendererProperty",
        "lib/validator/Number",
        "lib/validator/Range",
        "lib/validator/AimPosition",
        "lib/validator/TargetPosition",
    ], function (e) {
        return {
            "ui/htmlRenderer": e("componentLibrary-Renderers/HtmlRenderer"),
            "ui/textRenderer": e("componentLibrary-Renderers/TextRenderer"),
            "ui/templateRenderer": e("componentLibrary-Renderers/TemplateRenderer"),
            "ui/draggable": e("componentLibraryJQueryUI/Draggable"),
            "ui/aimPath": e("lib/ui/AimPath"),
            "ui/anglePath": e("lib/ui/AnglePath"),
            "ui/drawPath": e("lib/ui/DrawPath"),
            "ui/drawLine": e("lib/ui/DrawLine"),
            "behaviour/createCannonBall": e("lib/behaviour/CreateCannonBall"),
            "behaviour/updateBall": e("lib/behaviour/UpdateBall"),
            "behaviour/updateFiredBullets": e("lib/behaviour/UpdateFiredBullets"),
            "behaviour/updateBulletsLeft": e("lib/behaviour/UpdateBulletsLeft"),
            "behaviour/createTarget": e("lib/behaviour/CreateTarget"),
            "behaviour/dragTarget": e("lib/behaviour/DragTarget"),
            "behaviour/targetCollision": e("lib/behaviour/TargetCollision"),
            "behaviour/destroyTarget": e("lib/behaviour/DestroyTarget"),
            "behaviour/chipTarget": e("lib/behaviour/ChipTarget"),
            "behaviour/lockDraggable": e("lib/behaviour/LockDraggable"),
            "behaviour/updateVectors": e("lib/behaviour/UpdateVectors"),
            "behaviour/updateDistance": e("lib/behaviour/UpdateDistance"),
            "behaviour/aimHandle": e("lib/behaviour/AimHandle"),
            "behaviour/tooltipPositioner": e("lib/behaviour/TooltipPositioner"),
            "behaviour/tooltipCreator": e("lib/behaviour/TooltipCreator"),
            "behaviour/createTooltip": e("lib/behaviour/CreateTooltip"),
            "model/cannonBall": e("lib/model/CannonBall"),
            "model/inputValue": e("lib/model/InputValue"),
            "model/cannon": e("lib/model/Cannon"),
            "model/targets": e("lib/model/Targets"),
            "model/target": e("lib/model/Target"),
            "model/aim": e("lib/model/Aim"),
            "capi/inputValue": e("lib/capi/InputValue"),
            "capi/cannon": e("lib/capi/Cannon"),
            "capi/targets": e("lib/capi/Targets"),
            "capi/target": e("lib/capi/Target"),
            "capi/aim": e("lib/capi/Aim"),
            "sync/modelToInput": e("componentLibrary-Sync/ModelToInput"),
            "sync/toggleVisibility": e("componentLibrary-Sync/ToggleVisibility"),
            "sync/toggleClass": e("componentLibrary-Sync/ToggleClass"),
            "sync/modelToModel": e("componentLibrary-Sync/ModelToModel"),
            "sync/modelToText": e("componentLibrary-Sync/ModelToText"),
            "sync/modelToNumericProperty": e("componentLibrary-Sync/ModelToNumericProperty"),
            "sync/toggleProperty": e("componentLibrary-Sync/ToggleProperty"),
            "sync/setOnEvent": e("componentLibrary-Sync/SetOnEvent"),
            "sync/modelToProperty": e("componentLibrary-Sync/ModelToProperty"),
            "sync/draggableToModel": e("lib/sync/DraggableToModel"),
            "sync/angleInput": e("lib/sync/AngleInput"),
            "sync/velocityInput": e("lib/sync/VelocityInput"),
            "sync/lockSim": e("lib/sync/LockSim"),
            "sync/cannon": e("lib/sync/Cannon"),
            "sync/flight": e("lib/sync/Flight"),
            "sync/toggleRendererProperty": e("lib/sync/ToggleRendererProperty"),
            "validator/number": e("lib/validator/Number"),
            "validator/range": e("lib/validator/Range"),
            "validator/aimPosition": e("lib/validator/AimPosition"),
            "validator/targetPosition": e("lib/validator/TargetPosition"),
        };
    }),
    define("scenes/config", ["require", "constants/Origin", "constants/Global", "constants/References"], function (e) {
        var t = e("constants/Origin"),
            n = e("constants/Global"),
            r = e("constants/References");
        return {
            id: "Config",
            factories: {
                tooltip: {
                    components: { renderer: { componentName: "ui/htmlRenderer", class: "tooltip" }, positioner: { componentName: "behaviour/tooltipPositioner", target: "~renderer", renderer: "&renderer" } },
                    children: {
                        horizontalDistance: {
                            components: { textRenderer: { componentName: "ui/textRenderer", text: "Horizontal Distance: ", class: "horizontalText" } },
                            children: {
                                horizontalValue: {
                                    components: {
                                        distanceRenderer: { componentName: "ui/textRenderer", type: "span", class: "value" },
                                        syncDistanceX: { componentName: "behaviour/updateDistance", renderer: "&distanceRenderer", model: "~model", modelKey: "x" },
                                    },
                                },
                            },
                        },
                        verticalDistance: {
                            components: { textRenderer: { componentName: "ui/textRenderer", text: "Vertical Distance: ", class: "verticalText" } },
                            children: {
                                verticalValue: {
                                    components: {
                                        distanceRenderer: { componentName: "ui/textRenderer", type: "span", class: "value" },
                                        syncDistanceY: { componentName: "behaviour/updateDistance", renderer: "&distanceRenderer", model: "~model", modelKey: "y" },
                                    },
                                },
                            },
                        },
                    },
                },
                cannonBall: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "ball", parent: "&boundariesWrapper.renderer" },
                        model: { componentName: "model/cannonBall" },
                        syncX: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "x", model: "&cannon.model", offset: t.X, modelKey: "ballX" },
                        syncY: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "y", model: "&cannon.model", offset: -t.Y, modelKey: "ballY", factor: -1 },
                        syncEnableFireButton: { componentName: "sync/toggleClass", renderer: "&fireButton.renderer", model: "&cannon.model", modelKey: "enableFireButton", modelKeyValue: !1, className: "disabled" },
                        updateBall: { componentName: "behaviour/updateBall", model: "&cannon.model", angleModel: "&angle.model", velocityModel: "&exitVelocity.model", aimHandle: "&aim.aimHandle" },
                        updateVectors: { componentName: "behaviour/updateVectors", model: "&cannon.model", angleModel: "&angle.model", velocityModel: "&exitVelocity.model" },
                    },
                    children: {
                        ghostBallX: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", class: "ballGhostX", parent: "&boundariesWrapper.renderer" },
                                syncBulletGhostX: { componentName: "sync/toggleVisibility", model: "&cannon.model", modelKey: "showBulletGhost", modelKeyValue: !0, renderer: "&renderer" },
                                syncX: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "x", model: "&cannon.model", offset: t.X, modelKey: "ballX" },
                            },
                        },
                        ghostBallY: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", class: "ballGhostY", parent: "&boundariesWrapper.renderer" },
                                syncBulletGhostY: { componentName: "sync/toggleVisibility", model: "&cannon.model", modelKey: "showBulletGhost", modelKeyValue: !0, renderer: "&renderer" },
                                syncY: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "y", model: "&cannon.model", offset: -t.Y, factor: -1, modelKey: "ballY" },
                            },
                        },
                        velocityLineX: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "vx", renderer: "&renderer", color: "#00ff00", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "vx" },
                                toggle: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletVelocityVector", modelKeyValue: !0 },
                            },
                        },
                        velocityLineY: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "vy", renderer: "&renderer", color: "#0000ff", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "vy" },
                                toggleTarget: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletVelocityVector", modelKeyValue: !0 },
                            },
                        },
                        velocityLineDiagonal: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "vd", renderer: "&renderer", color: "#ff0000", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "vd" },
                                toggle: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletVelocityVector", modelKeyValue: !0 },
                            },
                        },
                        accelerationLineNormal: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "an", renderer: "&renderer", color: "#00ff00", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "an" },
                                toggle: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletAccelerationVector", modelKeyValue: !0 },
                            },
                        },
                        accelerationLineTangential: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "at", renderer: "&renderer", color: "#ff0000", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "at" },
                                toggle: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletAccelerationVector", modelKeyValue: !0 },
                            },
                        },
                        accelerationLineDiagonal: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "canvas", attributes: { width: 525, height: 500 }, parent: "&boundariesWrapper.renderer" },
                                drawLine: { componentName: "ui/drawLine", model: "&cannon.model", modelKey: "ad", renderer: "&renderer", color: "#0000ff", lineWidth: 2, fromX: "ballX", fromY: "ballY", to: "ad" },
                                toggle: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletAccelerationVector", modelKeyValue: !0 },
                            },
                        },
                    },
                },
                target: {
                    components: {
                        capi: { componentName: "capi/target", id: r.INDEX },
                        model: { componentName: "model/target", id: r.INDEX },
                        renderer: { componentName: "ui/htmlRenderer", class: "target" },
                        targetLocationX: { componentName: "sync/modelToNumericProperty", target: "&renderer", model: "&model", modelKey: "x", property: "x", offset: t.X },
                        targetLocationY: { componentName: "sync/modelToNumericProperty", target: "&renderer", model: "&model", modelKey: "y", property: "y", offset: -t.Y, factor: -1 },
                        syncX: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "x", modelB: "&model", modelBKey: "x" },
                        syncY: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "y", modelB: "&model", modelBKey: "y" },
                        xRangeValidator: { componentName: "validator/range", model: "&model", value: "x", minValue: "minX", maxValue: "maxX" },
                        yRangeValidator: { componentName: "validator/range", model: "&model", value: "y", minValue: "minY", maxValue: "maxY" },
                        syncVisible: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "visible", modelB: "&model", modelBKey: "visible" },
                        syncDestroyed: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "destroyed", modelB: "&model", modelBKey: "destroyed" },
                        toggleTarget: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&model", modelKey: "visible", modelKeyValue: !0 },
                        explosion: { componentName: "ui/htmlRenderer", class: "explosion", parent: "&renderer" },
                        targetCollision: { componentName: "behaviour/targetCollision", renderer: "&renderer", model: "&model", cannonModel: "&cannon.model" },
                        destroyTarget: { componentName: "behaviour/destroyTarget", renderer: "&renderer", explosionRenderer: "&explosion", model: "&model" },
                        updateFlight: { componentName: "sync/flight", targetModel: "&model", velocityModel: "&exitVelocity.model", angleModel: "&angle.model", cannonModel: "&cannon.model" },
                        syncCollisionYDiff: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "collisionYDiff", modelB: "&model", modelBKey: "collisionYDiff" },
                        chipTarget: { componentName: "behaviour/chipTarget", renderer: "&renderer", explosionRenderer: "&explosion", model: "&model" },
                        draggable: { componentName: "ui/draggable", renderer: "&renderer" },
                        validator: { componentName: "validator/targetPosition", offsetX: t.X, offsetY: t.Y, parentWidth: n.WIDTH, parentHeight: n.HEIGHT, objectOffsetX: 11, objectOffsetY: 17, groundHeight: 8 },
                        dragTarget: { componentName: "behaviour/dragTarget", model: "&model", targetsModel: "&targets.targetsModel", renderer: "&renderer", validator: "&validator", offsetX: -t.X, offsetY: t.Y },
                        createTooltip: { componentName: "behaviour/createTooltip", model: "&model", targetsModel: "&targets.targetsModel", renderer: "&renderer", tooltipCreator: "&tooltipCreator.creator" },
                    },
                },
            },
            entities: {
                cannon: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "cannon", rotation: "90" },
                        capi: { componentName: "capi/cannon" },
                        model: { componentName: "model/cannon" },
                        LockSim: { componentName: "sync/lockSim", model: "&model" },
                        syncShowBulletsLeft: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showBulletsLeft", modelB: "&model", modelBKey: "showBulletsLeft" },
                        syncMaximumBullets: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "maximumBullets", modelB: "&model", modelBKey: "maximumBullets" },
                        syncData: { componentName: "sync/cannon", velocityModel: "&exitVelocity.model", angleModel: "&angle.model", cannonModel: "&model" },
                        syncShowBulletPath: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showBulletPath", modelB: "&model", modelBKey: "showBulletPath" },
                        syncRotation: { componentName: "sync/modelToNumericProperty", target: "&renderer", model: "&angle.model", modelKey: "val", property: "rotation", factor: -1 },
                        syncLockSimAfterDestroy: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "lockSimAfterDestroy", modelB: "&model", modelBKey: "lockSimAfterDestroy" },
                        syncShowBulletGhost: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showBulletGhost", modelB: "&model", modelBKey: "showBulletGhost" },
                        syncShowBulletAccelerationVector: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showBulletAccelerationVector", modelB: "&model", modelBKey: "showBulletAccelerationVector" },
                        showBulletVelocityVector: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showBulletVelocityVector", modelB: "&model", modelBKey: "showBulletVelocityVector" },
                        syncYVelocityAfter10sec: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "yVelocityAfter10sec", modelBKey: "yVelocityAfter10sec" },
                        syncRadiusOfCurvature: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "radiusOfCurvature", modelBKey: "radiusOfCurvature" },
                        syncTimeOfFlight: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "timeOfFlight", modelBKey: "timeOfFlight" },
                        syncInitialXVelocity: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "initialXVelocity", modelBKey: "initialXVelocity" },
                        syncInitialYVelocity: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "initialYVelocity", modelBKey: "initialYVelocity" },
                        syncDistanceTravelled: { componentName: "sync/modelToModel", modelA: "&model", modelB: "&capi", modelAKey: "distanceTravelled", modelBKey: "distanceTravelled" },
                    },
                },
                exitVelocity: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "exitVelocity", rotation: "0" },
                        model: { componentName: "model/inputValue" },
                        capi: { componentName: "capi/inputValue", alias: "Exit Velocity", minValue: 1, maxValue: 300 },
                        syncVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "val", modelB: "&model", modelBKey: "val" },
                        syncMinVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "minVal", modelB: "&model", modelBKey: "minVal" },
                        syncMaxVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "maxVal", modelB: "&model", modelBKey: "maxVal" },
                        syncShow: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "show", modelB: "&model", modelBKey: "show" },
                        syncAllowEdit: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "allowEdit", modelB: "&model", modelBKey: "allowEdit" },
                        syncRotation: { componentName: "sync/modelToNumericProperty", target: "&renderer", model: "&angle.model", modelKey: "val", property: "rotation", offset: 0, factor: -1 },
                        syncWithAim: { componentName: "sync/velocityInput", cannonModel: "&cannon.model", inputModel: "&model", aimModel: "&aim.model" },
                        rangeValidator: { componentName: "validator/range", model: "&model", value: "val", minValue: "minVal", maxValue: "maxVal" },
                        toggle: { componentName: "sync/toggleClass", model: "&model", renderer: "&renderer", modelKey: "show", modelKeyValue: !0, matching: !1, className: "isHidden" },
                    },
                    children: {
                        input: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "input", attributes: { id: "inputVelocity" } },
                                validator: { componentName: "validator/number" },
                                sync: { componentName: "sync/modelToInput", renderer: "&renderer", model: "&^.model", modelKey: "val", validator: "&validator" },
                                toggleFocus: { componentName: "sync/toggleClass", model: "&^.model", modelKey: "focused", modelKeyValue: !0, renderer: "&renderer", className: "focused" },
                                syncFocus: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&^.model", modelKey: "focused", eventName: "focus", value: !0 },
                                syncBlur: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&^.model", modelKey: "focused", eventName: "blur", value: !1 },
                                toggleDisabled: {
                                    componentName: "sync/toggleRendererProperty",
                                    models: ["&^.model", "&cannon.model"],
                                    modelKeys: ["allowEdit", "lockSim"],
                                    modelKeyValues: [!1, !0],
                                    propertyName: "disabled",
                                    renderer: "&renderer",
                                },
                            },
                        },
                        label: { components: { renderer: { componentName: "ui/textRenderer", type: "label", text: "Exit Velocity (m/s)", attributes: { for: "inputVelocity" } } } },
                    },
                },
                aim: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "aim" },
                        model: { componentName: "model/aim" },
                        capi: { componentName: "capi/aim" },
                        draggable: { componentName: "ui/draggable", renderer: "&renderer" },
                        validator: { componentName: "validator/aimPosition", radius: t.RADIUS, exitVelocityModel: "&exitVelocity.model", angleModel: "&angle.model" },
                        draggableToModel: { componentName: "sync/draggableToModel", model: "&model", renderer: "&renderer", validator: "&validator", xKey: "posX", yKey: "posY", offsetX: -t.X, offsetY: t.Y },
                        syncX: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "x", model: "&model", modelKey: "posX", offset: t.X },
                        syncY: { componentName: "sync/modelToNumericProperty", target: "&renderer", property: "y", model: "&model", modelKey: "posY", offset: -t.Y, factor: -1 },
                        syncVelocityFocus: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&exitVelocity.model", modelKey: "focused", eventName: "dragstart", value: !0 },
                        syncVelocityBlur: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&exitVelocity.model", modelKey: "focused", eventName: "dragstop", value: !1 },
                        syncAngleFocus: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&angle.model", modelKey: "focused", eventName: "dragstart", value: !0 },
                        syncAngleBlur: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&angle.model", modelKey: "focused", eventName: "dragstop", value: !1 },
                        aimHandle: { componentName: "behaviour/aimHandle", capi: "&capi", model: "&model" },
                        syncShowGuidelines: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "showGuidelines", modelB: "&model", modelBKey: "showGuidelines" },
                        toggle: { componentName: "sync/toggleClass", model: "&model", renderer: "&renderer", modelKey: "showHandle", modelKeyValue: !0, matching: !1, className: "isHidden" },
                        toggleAngle: { componentName: "sync/toggleClass", model: "&angle.model", renderer: "&renderer", modelKey: "allowEdit", modelKeyValue: !1, className: "angleDisabled" },
                        toggleVelocity: { componentName: "sync/toggleClass", model: "&exitVelocity.model", renderer: "&renderer", modelKey: "allowEdit", modelKeyValue: !1, className: "velocityDisabled" },
                        lockSim: { componentName: "behaviour/lockDraggable", model: "&cannon.model", renderer: "&renderer" },
                    },
                },
                angle: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "angle" },
                        model: { componentName: "model/inputValue" },
                        capi: { componentName: "capi/inputValue", alias: "Angle", minValue: 0, maxValue: 90 },
                        syncVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "val", modelB: "&model", modelBKey: "val" },
                        syncMinVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "minVal", modelB: "&model", modelBKey: "minVal" },
                        syncMaxVal: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "maxVal", modelB: "&model", modelBKey: "maxVal" },
                        syncShow: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "show", modelB: "&model", modelBKey: "show" },
                        syncAllowEdit: { componentName: "sync/modelToModel", modelA: "&capi", modelAKey: "allowEdit", modelB: "&model", modelBKey: "allowEdit" },
                        syncWithAim: { componentName: "sync/angleInput", cannonModel: "&cannon.model", inputModel: "&model", aimModel: "&aim.model" },
                        rangeValidator: { componentName: "validator/range", model: "&model", value: "val", minValue: "minVal", maxValue: "maxVal" },
                        toggle: { componentName: "sync/toggleClass", model: "&model", renderer: "&renderer", modelKey: "show", modelKeyValue: !0, matching: !1, className: "isHidden" },
                    },
                    children: {
                        input: {
                            components: {
                                renderer: { componentName: "ui/htmlRenderer", type: "input", attributes: { id: "inputAngle" } },
                                validator: { componentName: "validator/number" },
                                sync: { componentName: "sync/modelToInput", renderer: "&renderer", model: "&^.model", modelKey: "val", validator: "&validator" },
                                toggleFocus: { componentName: "sync/toggleClass", model: "&^.model", modelKey: "focused", modelKeyValue: !0, renderer: "&renderer", className: "focused" },
                                syncFocus: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&^.model", modelKey: "focused", eventName: "focus", value: !0 },
                                syncBlur: { componentName: "sync/setOnEvent", renderer: "&renderer", model: "&^.model", modelKey: "focused", eventName: "blur", value: !1 },
                                toggleDisabled: {
                                    componentName: "sync/toggleRendererProperty",
                                    models: ["&^.model", "&cannon.model"],
                                    modelKeys: ["allowEdit", "lockSim"],
                                    modelKeyValues: [!1, !0],
                                    propertyName: "disabled",
                                    renderer: "&renderer",
                                },
                            },
                        },
                        label: { components: { renderer: { componentName: "ui/textRenderer", type: "label", text: "Cannon Angle (" + String.fromCharCode(176) + ")", attributes: { for: "inputAngle" } } } },
                    },
                },
                aimPath: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", type: "canvas", class: "cannonPath", attributes: { width: 525, height: 500 } },
                        drawPath: { componentName: "ui/aimPath", renderer: "&renderer", model: "&aim.model", focusModel: "&exitVelocity.model" },
                        toggle: { componentName: "sync/toggleClass", model: "&aim.model", renderer: "&renderer", modelKey: "showGuidelines", modelKeyValue: !0, matching: !1, className: "isHidden" },
                    },
                },
                anglePath: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", type: "canvas", class: "anglePath", attributes: { width: 525, height: 500 } },
                        drawPath: { componentName: "ui/anglePath", renderer: "&renderer", model: "&aim.model", angleModel: "&angle.model", focusModel: "&angle.model" },
                        toggle: { componentName: "sync/toggleClass", model: "&aim.model", renderer: "&renderer", modelKey: "showGuidelines", modelKeyValue: !0, matching: !1, className: "isHidden" },
                    },
                },
                trajectoryPath: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", type: "canvas", class: "trajectoryPath", attributes: { width: 525, height: 500 } },
                        drawPath: { componentName: "ui/drawPath", renderer: "&renderer", angleModel: "&angle.model", velocityModel: "&exitVelocity.model" },
                        togglePath: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletPath", modelKeyValue: !0 },
                    },
                },
                boundariesWrapper: { components: { renderer: { componentName: "ui/htmlRenderer", class: "boundaries" } } },
                fireButton: {
                    components: {
                        renderer: { componentName: "ui/textRenderer", text: "FIRE", class: "fire" },
                        updateFiredBullets: { componentName: "behaviour/updateFiredBullets", renderer: "&renderer", model: "&cannon.model" },
                        syncFiredBullets: { componentName: "sync/modelToModel", modelA: "&cannon.capi", modelAKey: "firedBullets", modelB: "&cannon.model", modelBKey: "firedBullets" },
                        toggleDisabled: { componentName: "sync/toggleClass", renderer: "&renderer", model: "&cannon.model", modelKey: "enableFireButton", modelKeyValue: !1, className: "disabled" },
                        syncEnableFireButton: { componentName: "sync/modelToModel", modelA: "&cannon.capi", modelAKey: "enableFireButton", modelB: "&cannon.model", modelBKey: "enableFireButton" },
                        createCannonBall: { componentName: "behaviour/createCannonBall", renderer: "&renderer", cannonBallFactory: "+cannonBall", model: "&cannon.model", aimHandle: "&aim.aimHandle" },
                    },
                },
                bullets: {
                    components: {
                        renderer: { componentName: "ui/htmlRenderer", class: "bullets showThree" },
                        syncShowBulletsLeft: { componentName: "sync/modelToModel", modelA: "&cannon.capi", modelAKey: "showBulletsLeft", modelB: "&cannon.model", modelBKey: "showBulletsLeft" },
                        updateBulletsLeft: { componentName: "behaviour/updateBulletsLeft", renderer: "&renderer", model: "&cannon.model" },
                        toggleBullets: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletsLeft", modelKeyValue: !0 },
                    },
                },
                targets: {
                    components: {
                        targets: { componentName: "ui/htmlRenderer", class: "targets" },
                        targetsCapi: { componentName: "capi/targets" },
                        targetsModel: { componentName: "model/targets" },
                        renderer: { componentName: "ui/htmlRenderer", class: "bullets showThree" },
                        updateBulletsLeft: { componentName: "behaviour/updateBulletsLeft", renderer: "&renderer", model: "&cannon.model" },
                        toggleBullets: { componentName: "sync/toggleVisibility", renderer: "&renderer", model: "&cannon.model", modelKey: "showBulletsLeft", modelKeyValue: !0 },
                        syncTargets: { componentName: "sync/modelToModel", modelA: "&targetsCapi", modelAKey: "targets", modelB: "&targetsModel", modelBKey: "targets" },
                        syncShowTooltip: { componentName: "sync/modelToModel", modelA: "&targetsCapi", modelAKey: "showTooltip", modelB: "&targetsModel", modelBKey: "showTooltip" },
                        syncAllowTargetDrag: { componentName: "sync/modelToModel", modelA: "&targetsCapi", modelAKey: "allowTargetDrag", modelB: "&targetsModel", modelBKey: "allowTargetDrag" },
                        syncAllowTooltips: { componentName: "sync/modelToModel", modelA: "&targetsCapi", modelAKey: "allowTargetTooltips", modelB: "&targetsModel", modelBKey: "allowTargetTooltips" },
                        createTarget: { componentName: "behaviour/createTarget", targetFactory: "+target", renderer: "&targets", targetsModel: "&targetsModel" },
                    },
                },
                tooltipCreator: { components: { creator: { componentName: "behaviour/tooltipCreator", factory: "+tooltip" } } },
            },
        };
    }),
    define("scenes/index", ["require", "scenes/config"], function (e) {
        return { pauseOnBlur: !1, scenes: [e("scenes/config")] };
    }),
    define("main", [
        "require",
        "jquery",
        "sim-common/Detect",
        "sim-common/VersionCheck",
        "text!sim-common/templates/notSupported.html",
        "api/snapshot/adapters/BackboneAdapter",
        "api/snapshot/Controller",
        "api/snapshot/Transporter",
        "ComponentLibrary",
        "components",
        "SceneManager",
        "scenes/index",
    ], function (e) {
        function c() {
            (l.parent = n), u.init(a), f.create(l), f.startScene("Config");
        }
        function h() {
            o.addInitialSetupCompleteListener(c), s.notifyOnReady();
        }
        var t = e("jquery"),
            n;
        e("sim-common/Detect"), e("sim-common/VersionCheck");
        var r = e("text!sim-common/templates/notSupported.html"),
            i = e("api/snapshot/adapters/BackboneAdapter").getInstance(),
            s = e("api/snapshot/Controller"),
            o = e("api/snapshot/Transporter").getInstance(),
            u = e("ComponentLibrary"),
            a = e("components"),
            f = e("SceneManager"),
            l = e("scenes/index");
        t(document).ready(function () {
            n = t("body");
            if (!checkBrowser()) {
                n.prepend(r);
                return;
            }
            h();
            var sceneEntities = f.Scenes.Config.Entities;
            var numOfEntities = Object.keys(sceneEntities).length;
            var numOfTargets = 4,
            targetPos = {
                tar0:{x:200, y:100},
                tar1:{x:250, y:150},
                tar2:{x:300, y:200},
                tar3:{x:350, y:250}
            };
            //console.log(sceneEntities);

            //Hide Aim guidelines
            sceneEntities.aim.capi.setShowGuidelines(true);
            //Hide the draggable aim handle
            sceneEntities.aim.capi.setShowHandle(true);
            //Hide the bullet trajectory path
            sceneEntities.cannon.capi.setShowBulletPath(true);
            //Set number of bullets available
            sceneEntities.cannon.capi.setMaximumBullets(3);
            //Show bullets left
            sceneEntities.cannon.capi.setShowBulletsLeft(true);
            //Disable angle edit
            sceneEntities.angle.capi.setAllowEdit(true);

            sceneEntities.exitVelocity.capi.setVal(1);
            sceneEntities.angle.capi.setVal(65);
            sceneEntities.targets.targetsCapi.setAllowTargetDrag(true);
            sceneEntities.targets.targetsCapi.setTargets(numOfTargets);
            console.log("Just write something dumb to test out the pull request");
            for (var i = 0; i < numOfTargets; i++) {
                sceneEntities.targets.children[numOfEntities + i].capi.setX(targetPos["tar"+i].x);
                sceneEntities.targets.children[numOfEntities + i].capi.setY(targetPos["tar"+i].y);
              } 
        });
    }),
    require(["main"]);
