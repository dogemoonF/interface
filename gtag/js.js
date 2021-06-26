// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.com.ph"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "IS_OUTBOUND",
                "vtp_affiliatedDomains": ["list"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "URL_NO_FRAGMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "HOST",
                "vtp_stripWww": true
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "EXTENSION"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "PATH"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "q,s,search,query,keyword",
                "vtp_multiQueryKeys": true,
                "vtp_ignoreEmptyQueryParam": true,
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrl",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-GVL3ZYG1BN",
                "vtp_sessionDuration": 0,
                "vtp_googleSignals": ["macro", 1],
                "vtp_foreignTld": ["macro", 2],
                "vtp_restrictDomain": ["macro", 3],
                "vtp_eventSettings": ["map", "purchase", ["map", "blacklisted", false, "conversion", true]],
                "vtp_dynamicEventSettings": ["map", "edit_rules", ["list"], "synthesis_rules", ["list"]],
                "tag_id": 7
            }, {
                "function": "__get",
                "vtp_eventName": "click",
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "link_id", ["macro", 6], "link_classes", ["macro", 7], "link_url", ["macro", 8], "link_domain", ["macro", 9], "outbound", true]],
                "vtp_deferrable": false,
                "tag_id": 17
            }, {
                "function": "__get",
                "vtp_eventName": "file_download",
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "link_id", ["macro", 6], "link_text", ["macro", 11], "link_url", ["macro", 8], "file_name", ["macro", 12], "file_extension", ["macro", 10]]],
                "vtp_deferrable": false,
                "tag_id": 24
            }, {
                "function": "__get",
                "vtp_eventName": ["template", "video_", ["macro", 13]],
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "video_url", ["macro", 14], "video_title", ["macro", 15], "video_provider", ["macro", 16], "video_current_time", ["macro", 17], "video_duration", ["macro", 18], "video_percent", ["macro", 19], "visible", ["macro", 20]]],
                "vtp_deferrable": false,
                "tag_id": 27
            }, {
                "function": "__get",
                "vtp_eventName": "view_search_results",
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "search_term", ["macro", 21]]],
                "vtp_deferrable": true,
                "tag_id": 32
            }, {
                "function": "__get",
                "vtp_eventName": "scroll",
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "percent_scrolled", ["macro", 22]]],
                "vtp_deferrable": false,
                "tag_id": 35
            }, {
                "function": "__get",
                "vtp_eventName": "page_view",
                "vtp_settings": ["map", "streamId", "G-GVL3ZYG1BN", "eventParameters", ["map", "page_referrer", ["macro", 24]]],
                "vtp_deferrable": false,
                "tag_id": 38
            }, {
                "function": "__dlm",
                "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-GVL3ZYG1BN", "value", ["macro", 24]]],
                "tag_id": 39
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_15",
                "tag_id": 40
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_22",
                "tag_id": 41
            }, {
                "function": "__ytl",
                "vtp_captureStart": true,
                "vtp_captureComplete": true,
                "vtp_captureProgress": true,
                "vtp_progressThresholdsPercent": "10,25,50,75",
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_uniqueTriggerId": "1_25",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 42
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "90",
                "vtp_verticalThresholdOn": true,
                "vtp_horizontalThresholdOn": false,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_uniqueTriggerId": "1_33",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 43
            }, {
                "function": "__ehl",
                "vtp_groupEvents": true,
                "vtp_groupEventsInterval": 1000,
                "vtp_uniqueTriggerId": "1_36",
                "tag_id": 44
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)1_15($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 10],
                "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)1_22($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)1_25($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 21],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)1_33($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 23],
                "arg1": ["list", "pushState", "popstate", "replaceState"],
                "any_of": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": ["macro", 25]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange-v2"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)1_36($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 8, 9, 12]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1]
                ],
                [
                    ["if", 2, 4, 5],
                    ["add", 2]
                ],
                [
                    ["if", 6, 7],
                    ["add", 3]
                ],
                [
                    ["if", 0],
                    ["unless", 8],
                    ["add", 4]
                ],
                [
                    ["if", 9, 10],
                    ["add", 5]
                ],
                [
                    ["if", 11, 13, 14],
                    ["unless", 12],
                    ["add", 6, 7]
                ],
                [
                    ["if", 15],
                    ["add", 10]
                ],
                [
                    ["if", 16],
                    ["add", 11]
                ]
            ]
        },
        "runtime": []




    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        fa = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = fa,
        na = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ri = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var qa = {},
        ra = function(a, b) {
            qa[a] = qa[a] || [];
            qa[a][b] = !0
        },
        sa = function(a) {
            for (var b = [], c = qa[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var ta = function() {},
        ua = function(a) {
            return "function" == typeof a
        },
        m = function(a) {
            return "string" == typeof a
        },
        va = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        wa = function(a) {
            var b = "[object Array]" == Object.prototype.toString.call(Object(a));
            Array.isArray ? Array.isArray(a) !== b && ra("TAGGING", 4) : ra("TAGGING", 5);
            return b
        },
        Ba = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        Ca = function(a, b) {
            if (a && wa(a))
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Da = function(a, b) {
            if (!va(a) || !va(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Fa = function(a, b) {
            for (var c = new Ea, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Ga = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ha = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ia =
        function(a) {
            return Math.round(Number(a)) || 0
        },
        Ja = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        La = function(a) {
            var b = [];
            if (wa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ma = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Oa = function() {
            return (new Date).getTime()
        },
        Ea = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ea.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ea.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ra = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Sa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ya = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Za = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        ab = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bb = /^\w{1,9}$/,
        cb = function(a) {
            var b = [];
            Ga(a, function(c, d) {
                bb.test(c) && d && b.push(c)
            });
            return b.join(",")
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var db = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        gb = function(a) {
            if (null == a) return String(a);
            var b = db.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        jb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        kb = function(a) {
            if (!a || "object" != gb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !jb(a, "constructor") && !jb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || jb(a, b)
        },
        B = function(a, b) {
            var c = b || ("array" == gb(a) ? [] : {}),
                d;
            for (d in a)
                if (jb(a, d)) {
                    var e = a[d];
                    "array" == gb(e) ? ("array" != gb(c[d]) && (c[d] = []), c[d] = B(e, c[d])) : kb(e) ? (kb(c[d]) || (c[d] = {}), c[d] = B(e, c[d])) : c[d] = e
                }
            return c
        };
    var lb = function(a) {
        if (void 0 === a || wa(a) || kb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var mb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Sf: a("consent"),
            Tf: a("consent_always_fire"),
            be: a("convert_case_to"),
            ce: a("convert_false_to"),
            de: a("convert_null_to"),
            ee: a("convert_true_to"),
            fe: a("convert_undefined_to"),
            Zh: a("debug_mode_metadata"),
            Ta: a("function"),
            Fg: a("instance_name"),
            Hg: a("live_only"),
            Ig: a("malware_disabled"),
            Jg: a("metadata"),
            bi: a("original_activity_id"),
            ci: a("original_vendor_template_id"),
            Lg: a("once_per_event"),
            We: a("once_per_load"),
            ei: a("priority_override"),
            fi: a("respected_consent_types"),
            cf: a("setup_tags"),
            df: a("tag_id"),
            ef: a("teardown_tags")
        }
    }();
    var Kb;
    var Mb = [],
        Nb = [],
        Ob = [],
        Pb = [],
        Qb = [],
        Rb = {},
        Sb, Tb, Ub, Vb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Rb[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.lf && b.lf(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === mb.Tf.toString() && a[f]) {}
            return void 0 !== d ? d(e) : Kb(c, e, b)
        },
        Xb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Wb(a[e], b, c));
            return d
        },
        Wb = function(a, b, c) {
            if (wa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Wb(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Mb[f];
                        if (!h || b.Hd(h)) return;
                        c[f] = !0;
                        try {
                            var k = Xb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Vb(k, b);
                            Ub && (d = Ub.Zg(d, k))
                        } catch (z) {
                            b.Af && b.Af(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Wb(a[l], b, c)] = Wb(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Wb(a[p], b, c);
                            Tb && (n = n || q === Tb.nc);
                            d.push(q)
                        }
                        return Tb && n ? Tb.bh(d) : d.join("");
                    case "escape":
                        d = Wb(a[1], b, c);
                        if (Tb && wa(a[1]) && "macro" === a[1][0] && Tb.uh(a)) return Tb.Ih(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) nb[a[r]] && (d = nb[a[r]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Pb[t]) throw Error("Unable to resolve tag reference " +
                            t + ".");
                        return d = {
                            uf: a[2],
                            index: t
                        };
                    case "zb":
                        var u = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        u["function"] = a[1];
                        var v = Yb(u, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Yb = function(a, b, c) {
            try {
                return Sb(Xb(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var ac = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Zb(a), f = 0; f < Nb.length; f++) {
                var h = Nb[f],
                    k = $b(h, e);
                if (k) {
                    for (var l = h.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(h.block || [])
                } else null === k && b(h.block || []);
            }
            for (var p = [], q = 0; q < Pb.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        $b = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], h = 0; h < f.length; h++) {
                var k = b(f[h]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Zb = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Yb(Ob[c], a));
                return b[c]
            }
        };
    var bc = {
        Zg: function(a, b) {
            b[mb.be] && "string" === typeof a && (a = 1 == b[mb.be] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(mb.de) && null === a && (a = b[mb.de]);
            b.hasOwnProperty(mb.fe) && void 0 === a && (a = b[mb.fe]);
            b.hasOwnProperty(mb.ee) && !0 === a && (a = b[mb.ee]);
            b.hasOwnProperty(mb.ce) && !1 === a && (a = b[mb.ce]);
            return a
        }
    };
    var ec = function(a, b) {
        var c = String(a);
        return c
    };
    var ic = function(a) {
            var b = {},
                c = 0;
            Ga(a, function(e, f) {
                void 0 !== f && (f = ec(f, 100), fc.hasOwnProperty(e) ? b[fc[e]] = gc(f) : hc.hasOwnProperty(e) ? b.hasOwnProperty(hc[e]) || (b[hc[e]] = gc(f)) : 10 > c && (b["k" + c] = gc(ec(e, 40)), b["v" + c] = gc(f), c++))
            });
            var d = [];
            Ga(b, function(e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        },
        gc = function(a) {
            return ("" + a).replace(/~/g, function() {
                return "~~"
            })
        },
        fc = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        },
        hc = {
            id: "id",
            name: "nm",
            brand: "br",
            category: "ca",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        };
    var jc = function(a) {
            var b = [];
            Ga(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        kc = function(a, b, c) {
            this.Ga = a.Ga;
            this.Xa = a.Xa;
            this.J = a.J;
            this.o = b;
            this.C = jc(a.Ga);
            this.m = jc(a.J);
            this.H = c ? this.m.length : 0;
            if (16384 < this.H) throw Error("EVENT_TOO_LARGE");
        };
    var lc = function() {
        this.events = [];
        this.m = this.Ga = "";
        this.o = 0
    };
    lc.prototype.add = function(a) {
        return this.C(a) ? (this.events.push(a), this.Ga = a.C, this.m = a.o, this.o += a.H, !0) : !1
    };
    lc.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.H + this.o,
            c = this.Ga === a.C && this.m === a.o;
        return 0 == this.events.length || b && c
    };
    var mc = function(a, b) {
            Ga(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        },
        nc = function(a, b) {
            var c = [];
            a.C && c.push(a.C);
            b && c.push("_s=" + b);
            mc(a.Xa, c);
            var d = !1;
            a.m && (c.push(a.m), d = !0);
            var e = c.join("&"),
                f = "",
                h = e.length + a.o.length + 1;
            d && 2048 < h && (f = c.pop(), e = c.join("&"));
            return {
                Nd: e,
                body: f
            }
        },
        oc = function(a, b) {
            var c = a.events;
            if (1 == c.length) return nc(c[0], b);
            var d = [];
            a.Ga && d.push(a.Ga);
            for (var e = {}, f = 0; f < c.length; f++) Ga(c[f].Xa, function(t, u) {
                null != u && (e[t] = e[t] || {}, e[t][String(u)] =
                    e[t][String(u)] + 1 || 1)
            });
            var h = {};
            Ga(e, function(t, u) {
                var v, x = -1,
                    z = 0;
                Ga(u, function(w, y) {
                    z += y;
                    var A = (w.length + t.length + 2) * (y - 1);
                    A > x && (v = w, x = A)
                });
                z == c.length && (h[t] = v)
            });
            mc(h, d);
            b && d.push("_s=" + b);
            for (var k = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
                    Xb: n.Xb
                }, p++) {
                var q = [];
                n.Xb = {};
                Ga(c[p].Xa, function(t) {
                    return function(u, v) {
                        h[u] != "" + v && (t.Xb[u] = v)
                    }
                }(n));
                c[p].m && q.push(c[p].m);
                mc(n.Xb, q);
                l.push(q.join("&"))
            }
            var r = l.join("\r\n");
            return {
                Nd: k,
                body: r
            }
        };
    var E = {
        Fb: "_ee",
        vc: "_syn_or_mod",
        gi: "_uei",
        kd: "_eu",
        di: "_pci",
        Xc: "event_callback",
        fc: "event_timeout",
        fa: "gtag.config",
        za: "gtag.get",
        na: "purchase",
        fb: "refund",
        Oa: "begin_checkout",
        cb: "add_to_cart",
        eb: "remove_from_cart",
        bg: "view_cart",
        ke: "add_to_wishlist",
        ya: "view_item",
        je: "view_promotion",
        ie: "select_promotion",
        Tc: "select_item",
        $b: "view_item_list",
        he: "add_payment_info",
        ag: "add_shipping_info",
        Ka: "value_key",
        Ja: "value_callback",
        oa: "allow_ad_personalization_signals",
        ed: "restricted_data_processing",
        xb: "allow_google_signals",
        qa: "cookie_expires",
        yb: "cookie_update",
        Cb: "session_duration",
        jc: "session_engaged_time",
        Ca: "user_properties",
        Ba: "transport_url",
        O: "ads_data_redaction",
        jd: "user_data",
        zb: "first_party_collection",
        B: "ad_storage",
        D: "analytics_storage",
        $d: "region",
        ae: "wait_for_update",
        Qa: "conversion_linker",
        Pa: "conversion_cookie_prefix",
        sa: "value",
        ba: "currency",
        Me: "trip_type",
        X: "items",
        Ge: "passengers"
    };
    E.ac = "page_view", E.me = "user_engagement", E.Wf = "app_remove", E.Xf = "app_store_refund", E.Yf = "app_store_subscription_cancel", E.Zf = "app_store_subscription_convert", E.$f = "app_store_subscription_renew", E.cg = "first_open", E.dg = "first_visit", E.eg = "in_app_purchase", E.fg = "session_start", E.gg = "allow_custom_scripts", E.hg = "allow_display_features", E.Uc = "allow_enhanced_conversions", E.Ce = "enhanced_conversions", E.hb = "client_id", E.aa = "cookie_domain", E.cc = "cookie_name", E.Ra = "cookie_path", E.Aa = "cookie_flags", E.we = "custom_map",
        E.ad = "groups", E.ib = "language", E.ue = "country", E.$h = "non_interaction", E.mb = "page_location", E.Fe = "page_path", E.La = "page_referrer", E.dd = "page_title", E.Bb = "send_page_view", E.Sa = "send_to", E.fd = "session_engaged", E.kc = "session_id", E.gd = "session_number", E.Bg = "tracking_id", E.ra = "linker", E.Ma = "url_passthrough", E.jb = "accept_incoming", E.I = "domains", E.lb = "url_position", E.kb = "decorate_forms", E.Je = "phone_conversion_number", E.He = "phone_conversion_callback", E.Ie = "phone_conversion_css_class", E.Ke = "phone_conversion_options",
        E.wg = "phone_conversion_ids", E.vg = "phone_conversion_country_code", E.ne = "aw_remarketing", E.oe = "aw_remarketing_only", E.bc = "gclid", E.xg = "quantity", E.mg = "affiliation", E.Be = "tax", E.Ae = "shipping", E.Wc = "list_name", E.ze = "checkout_step", E.ye = "checkout_option", E.ng = "coupon", E.og = "promotions", E.Db = "transaction_id", E.Eb = "user_id", E.yg = "retoken", E.ia = "cookie_prefix", E.te = "aw_merchant_id", E.qe = "aw_feed_country", E.se = "aw_feed_language", E.pe = "discount", E.xe = "disable_merchant_reported_purchases", E.Ee = "new_customer",
        E.ve = "customer_lifetime_value", E.lg = "dc_natural_search", E.kg = "dc_custom_params", E.sg = "method", E.Ag = "search_term", E.ig = "content_type", E.ug = "optimize_id", E.pg = "experiments", E.Ab = "google_signals", E.$c = "google_tld", E.mc = "update", E.Zc = "firebase_id", E.hc = "ga_restrict_domain", E.Yc = "event_settings", E.Vc = "dynamic_event_settings", E.zg = "screen_name", E.rg = "_x_19", E.qg = "_x_20", E.cd = "internal_traffic_results", E.Le = "traffic_type", E.ic = "referral_exclusion_definition", E.bd = "ignore_referrer", E.hd = "delivery_postal_code",
        E.De = "estimated_delivery_date", E.jg = "developer_id";
    E.Cg = [E.oa, E.Uc, E.xb, E.X, E.ed, E.aa, E.qa, E.Aa, E.cc, E.Ra, E.ia, E.yb, E.we, E.Vc, E.Xc, E.Yc, E.fc, E.zb, E.hc, E.Ab, E.$c, E.ad, E.cd, E.ra, E.ic, E.Sa, E.Bb, E.Cb, E.jc, E.Ba, E.mc, E.Ca, E.hd, E.kd], E.Ne = [E.mb, E.La, E.dd, E.ib, E.zg, E.Eb, E.Zc], E.Eg = [E.Wf, E.Xf, E.Yf, E.Zf, E.$f, E.cg, E.dg, E.eg, E.fg, E.me];
    E.Pe = [E.na, E.fb, E.Oa, E.cb, E.eb, E.bg, E.ke, E.ya, E.je, E.ie, E.$b, E.Tc, E.he, E.ag];
    E.Oe = [E.oa, E.xb, E.yb];
    E.Qe = [E.qa, E.fc, E.Cb, E.jc];
    var zc = function(a) {
        ra("GTM", a)
    };
    var Ac = function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    var Bc = new Ac(1936, !0),
        Cc = new Ac(1933);
    var Dc = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ec = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Fc, Gc = function() {
        if (void 0 === Fc) {
            var a = null,
                b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                Fc = a
            } else Fc = a
        }
        return Fc
    };
    var Ic = function(a, b) {
        this.m = b === Hc ? a : ""
    };
    Ic.prototype.toString = function() {
        return this.m + ""
    };
    var Hc = {};
    var Jc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Kc;
    a: {
        var Oc = oa.navigator;
        if (Oc) {
            var Pc = Oc.userAgent;
            if (Pc) {
                Kc = Pc;
                break a
            }
        }
        Kc = ""
    }
    var Qc = function(a) {
        return -1 != Kc.indexOf(a)
    };
    var Sc = function(a, b, c) {
        this.m = c === Rc ? a : ""
    };
    Sc.prototype.toString = function() {
        return this.m.toString()
    };
    var Tc = function(a) {
            return a instanceof Sc && a.constructor === Sc ? a.m : "type_error:SafeHtml"
        },
        Rc = {},
        Uc = function(a) {
            var b = Gc(),
                c = b ? b.createHTML(a) : a;
            return new Sc(c, null, Rc)
        },
        Vc = new Sc(oa.trustedTypes && oa.trustedTypes.emptyHTML || "", 0, Rc);
    var Wc = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = Tc(Vc);
            return !c.parentElement
        }),
        Xc = function(a, b) {
            if (Wc())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Tc(b)
        },
        Yc = null,
        Zc = /^[\w+/_-]+[=]{0,2}$/,
        $c = function(a) {
            if (!a.querySelector) return "";
            var b = a.querySelector("script[nonce]");
            if (b) {
                var c =
                    b.nonce || b.getAttribute("nonce");
                if (c && Zc.test(c)) return c
            }
            return ""
        };
    var G = window,
        I = document,
        ad = navigator,
        bd = I.currentScript && I.currentScript.src,
        cd = function(a, b) {
            var c = G[a];
            G[a] = void 0 === c ? b : c;
            return G[a]
        },
        dd = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        ed = function(a, b, c) {
            var d = I.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            var e, f = Gc(),
                h = f ? f.createScriptURL(a) : a;
            e = new Ic(h, Hc);
            d.src = e instanceof Ic && e.constructor === Ic ? e.m : "type_error:TrustedResourceUrl";
            var k;
            var l = d.ownerDocument && d.ownerDocument.defaultView;
            l && l != oa ? k = $c(l.document) : (null === Yc && (Yc = $c(oa.document)), k = Yc);
            var n = k;
            n && d.setAttribute("nonce", n);
            dd(d, b);
            c && (d.onerror = c);
            var p = I.getElementsByTagName("script")[0] || I.body || I.head;
            p.parentNode.insertBefore(d, p);
            return d
        },
        fd = function() {
            if (bd) {
                var a = bd.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        gd = function(a, b) {
            var c = I.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display =
                "none";
            c.style.visibility = "hidden";
            var d = I.body && I.body.lastChild || I.body || I.head;
            d.parentNode.insertBefore(c, d);
            dd(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        hd = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        id = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        jd = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" +
                b, c)
        },
        J = function(a) {
            G.setTimeout(a, 0)
        },
        kd = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        pd = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        qd = function(a) {
            var b = I.createElement("div"),
                c = Uc("A<div>" + a + "</div>");
            Xc(b, c);
            b = b.lastChild;
            for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d
        },
        rd = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e <
                b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        sd = function(a) {
            ad.sendBeacon && ad.sendBeacon(a) || hd(a)
        },
        td = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var ud = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[Cc.m] = !0
        }
    };
    ud.m = void 0;
    ud.o = function() {
        return ud.m ? ud.m : ud.m = new ud
    };
    var vd = function(a) {
        return ud.o().m(a.m, a.defaultValue)
    };
    var wd = [];

    function xd() {
        var a = cd("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: yd,
            update: zd,
            addListener: Ad,
            notifyListeners: Bd,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function yd(a, b, c, d, e, f) {
        var h = xd();
        h.active = !0;
        h.usedDefault = !0;
        if (void 0 != b) {
            var k = h.entries,
                l = k[a] || {},
                n = l.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial) k[a] = r;
                q && G.setTimeout(function() {
                    k[a] === r && r.quiet && (r.quiet = !1, Cd(a), Bd(), ra("TAGGING", 2))
                }, f)
            }
        }
    }

    function zd(a, b) {
        var c = xd();
        c.active = !0;
        if (void 0 != b) {
            var d = Dd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Dd(a);
            f.quiet ? (f.quiet = !1, Cd(a)) : h !== d && Cd(a)
        }
    }

    function Ad(a, b) {
        wd.push({
            xd: a,
            kh: b
        })
    }

    function Cd(a) {
        for (var b = 0; b < wd.length; ++b) {
            var c = wd[b];
            wa(c.xd) && -1 !== c.xd.indexOf(a) && (c.Df = !0)
        }
    }

    function Bd(a) {
        for (var b = 0; b < wd.length; ++b) {
            var c = wd[b];
            if (c.Df) {
                c.Df = !1;
                try {
                    c.kh({
                        nf: a
                    })
                } catch (d) {}
            }
        }
    }
    var Dd = function(a) {
            var b = xd().entries[a] || {};
            return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
        },
        Ed = function(a) {
            return (xd().entries[a] || {}).initial
        },
        Fd = function(a) {
            return !(xd().entries[a] || {}).quiet
        },
        Gd = function() {
            return vd(Cc) ? xd().active : !1
        },
        Hd = function() {
            return xd().usedDefault
        },
        Id = function(a, b) {
            xd().addListener(a, b)
        },
        Jd = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Fd(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Id(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Kd =
        function(a, b) {
            function c() {
                for (var f = [], h = 0; h < d.length; h++) {
                    var k = d[h];
                    !1 === Dd(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && Id(d, function(f) {
                var h = c();
                0 < h.length && (f.xd = h, a(f))
            })
        };

    function Ld(a) {
        for (var b = [], c = 0; c < Md.length; c++) {
            var d = a(Md[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Md = [E.B, E.D],
        Nd = function(a) {
            var b = a[E.$d];
            b && zc(40);
            var c = a[E.ae];
            c && zc(41);
            for (var d = wa(b) ? b : [b], e = 0; e < d.length; ++e)
                for (var f in a)
                    if (a.hasOwnProperty(f) && f !== E.$d && f !== E.ae)
                        if (-1 < Ba(Md, f)) {
                            var h = f,
                                k = a[f],
                                l = d[e];
                            xd().set(h, k, l, "PH", "PH-00", c)
                        } else {}
        },
        Od = function(a,
            b) {
            for (var c in a)
                if (a.hasOwnProperty(c))
                    if (-1 < Ba(Md, c)) {
                        var d = c,
                            e = a[c];
                        xd().update(d, e)
                    } else {}
            xd().notifyListeners(b)
        },
        N = function(a) {
            var b = Dd(a);
            return void 0 != b ? b : !0
        },
        Pd = function() {
            return "G1" + Ld(Dd)
        },
        Qd = function(a, b) {
            Kd(a, b)
        },
        Rd = function(a, b) {
            Jd(a, b)
        };
    var Td = function(a) {
            return Sd ? I.querySelectorAll(a) : null
        },
        Ud = function(a, b) {
            if (!Sd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Vd = !1;
    if (I.querySelectorAll) try {
        var Wd = I.querySelectorAll(":root");
        Wd && 1 == Wd.length && Wd[0] == I.documentElement && (Vd = !0)
    } catch (a) {}
    var Sd = Vd;
    var Xd = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0;
        var c = G.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                h = e.filter;
            if (h) {
                var k = h.indexOf("opacity(");
                0 <= k && (h = h.substring(k + 8, h.indexOf(")", k)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Yd = function() {
            var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d;
            if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, h) {
                    return f && h ? Math.min(f, h) : Math.max(f, h)
                };
                zc(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Zd = function(a) {
            var b = Yd(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                h = e.right - e.left;
            return f && h ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / h, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var fe = /:[0-9]+$/,
        ge = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var h = f.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        je = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = he(a.protocol) || he(G.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || G.location.hostname).replace(fe, "").toLowerCase());
            return ie(a, b, c, d, e)
        },
        ie = function(a, b, c, d, e) {
            var f, h = he(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = le(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(fe, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || ra("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= Ba(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ge(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        he = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        le = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        me = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || ra("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ne = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = me(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                k = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === k[0] && (k = k.substring(1));
            h = c(h);
            k = c(k);
            "" !== h && (h = "?" + h);
            "" !== k && (k = "#" + k);
            var l = "" + f + h + k;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var oe = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        pe = new RegExp(/support|noreply/i),
        qe = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        re = ["BR"];

    function se(a) {
        var b;
        if (a === I.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var h = 0; h < f.childElementCount; h++)
                                if (f.children[h] === a) {
                                    e = h + 1;
                                    break a
                                }
                            e = -1
                        } else e = 1
                    }
                    d = se(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }

    function te(a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }

    function ue(a) {
        if (0 == a.length) return null;
        var b;
        b = te(a, function(c) {
            return !pe.test(c.Rc)
        });
        b = te(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = te(b, function(c) {
            return !Xd(c.element)
        });
        return b[0]
    }

    function ve() {
        var a;
        var b = [],
            c = I.body;
        if (c) {
            for (var d = c.querySelectorAll("*"), e = 0; e < d.length && 1E4 > e; e++) {
                var f = d[e];
                if (!(0 <= qe.indexOf(f.tagName.toUpperCase()))) {
                    for (var h = !1, k = 0; k < f.childElementCount && 1E4 > k; k++)
                        if (!(0 <= re.indexOf(f.children[k].tagName.toUpperCase()))) {
                            h = !0;
                            break
                        }
                    h || b.push(f)
                }
            }
            a = {
                elements: b,
                status: 1E4 < d.length ? "2" : "1"
            }
        } else a = {
            elements: b,
            status: "4"
        };
        for (var l = a, n = l.elements, p = [], q = 0; q < n.length; q++) {
            var r = n[q],
                t = r.textContent;
            r.value && (t = r.value);
            if (t) {
                var u = t.match(oe);
                if (u) {
                    var v =
                        u[0],
                        x;
                    if (G.location) {
                        var z = ie(G.location, "host", !0);
                        x = 0 <= v.toLowerCase().indexOf(z)
                    } else x = !1;
                    x || p.push({
                        element: r,
                        Rc: v
                    })
                }
            }
        }
        var w = ue(p),
            y = [];
        if (w) {
            var A = w.element;
            y.push({
                Rc: w.Rc,
                querySelector: se(A),
                tagName: A.tagName,
                isVisible: !Xd(A),
                type: 1,
                zf: !0
            })
        }
        return {
            elements: y,
            status: 10 < p.length ? "3" : l.status
        }
    }
    var Je = {},
        O = null,
        Ke = Math.random();
    Je.K = "G-GVL3ZYG1BN";
    Je.uc = "550";
    Je.ai = "";
    Je.Vf = "ChEI8JzzhAYQ7MzQ1rreyuykARIlAMm4X525QAKhzkPY99SGqR4JJhOLTW9nWAqN4Lp/G0k5zfVV8RoChVY\x3d";
    var Le = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Me = {
            __paused: !0,
            __tg: !0
        },
        Ne;
    for (Ne in Le) Le.hasOwnProperty(Ne) && (Me[Ne] = !0);
    var Oe = "www.googletagmanager.com/gtm.js";
    Oe = "www.googletagmanager.com/gtag/js";
    var Pe = Oe,
        Qe = Ja(""),
        Re = null,
        Se = null,
        Te = "//www.googletagmanager.com/a?id=" + Je.K + "&cv=1",
        Ue = {},
        Ve = {},
        We = function() {
            var a = O.sequence || 1;
            O.sequence = a + 1;
            return a
        };
    Je.Uf = "";
    var Xe = {},
        Ye = new Ea,
        Ze = {},
        $e = {},
        cf = {
            name: "dataLayer",
            set: function(a, b) {
                B(ab(a, b), Ze);
                af()
            },
            get: function(a) {
                return bf(a, 2)
            },
            reset: function() {
                Ye = new Ea;
                Ze = {};
                af()
            }
        },
        bf = function(a, b) {
            return 2 != b ? Ye.get(a) : df(a)
        },
        df = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ze, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== Ba(b, d)) return
            }
            return d
        },
        ef = function(a, b) {
            $e.hasOwnProperty(a) || (Ye.set(a, b), B(ab(a, b), Ze), af())
        },
        af = function(a) {
            Ga($e, function(b, c) {
                Ye.set(b, c);
                B(ab(b,
                    void 0), Ze);
                B(ab(b, c), Ze);
                a && delete $e[b]
            })
        },
        gf = function(a, b, c) {
            Xe[a] = Xe[a] || {};
            Xe[a][b] = ff(b, c)
        },
        ff = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? df(a) : Ye.get(a);
            "array" === gb(d) || "object" === gb(d) ? c = B(d) : c = d;
            return c
        },
        hf = function(a, b) {
            if (Xe[a]) return Xe[a][b]
        },
        jf = function(a, b) {
            Xe[a] && delete Xe[a][b]
        };
    var mf = {},
        nf = function(a, b) {
            if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a];
            void 0 === mf[a] && (mf[a] = Math.floor(Math.random() * b));
            return mf[a]
        };
    var of = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };

    function pf(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };

    function qf(a) {
        return "null" !== a.origin
    };
    var tf = function(a, b, c, d) {
            return rf(d) ? pf(a, String(b || sf()), c) : []
        },
        wf = function(a, b, c, d, e) {
            if (rf(e)) {
                var f = uf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = vf(f, function(h) {
                        return h.Cc
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = vf(f, function(h) {
                        return h.Qb
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function xf(a, b, c, d) {
        var e = sf(),
            f = window;
        qf(f) && (f.document.cookie = a);
        var h = sf();
        return e != h || void 0 != c && 0 <= tf(b, h, !1, d).indexOf(c)
    }
    var Bf = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!rf(c.Ha)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = yf(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.mi);
            f = d(f, "samesite",
                c.ni);
            c.oi && (f = e(f, "secure"));
            var l = c.domain;
            if ("auto" === l) {
                for (var n = zf(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Af(q, c.path) && xf(r, a, b, c.Ha)) return 0
                }
                return 1
            }
            l && "none" !== l && (f = d(f, "domain", l));
            f = e(f, c.flags);
            return Af(l, c.path) ? 1 : xf(f, a, b, c.Ha) ? 0 : 1
        },
        Cf = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Bf(a, b, c)
        };

    function vf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function uf(a, b, c) {
        for (var d = [], e = tf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"), d.push({
                    id: h.join("."),
                    Cc: 1 * l[0] || 1,
                    Qb: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var yf = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Df = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Lf = /(^|\.)doubleclick\.net$/i,
        Af = function(a, b) {
            return Lf.test(window.document.location.hostname) || "/" === b && Df.test(a)
        },
        sf = function() {
            return qf(window) ? window.document.cookie : ""
        },
        zf = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Lf.test(e) || Df.test(e) || a.push("none");
            return a
        },
        rf = function(a) {
            if (!vd(Cc) || !a || !Gd()) return !0;
            if (!Fd(a)) return !1;
            var b = Dd(a);
            return null == b ? !0 : !!b
        };
    var Mf = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    var Nf = function() {
        return Qc("iPhone") && !Qc("iPod") && !Qc("iPad")
    };
    Qc("Opera");
    Qc("Trident") || Qc("MSIE");
    Qc("Edge");
    !Qc("Gecko") || -1 != Kc.toLowerCase().indexOf("webkit") && !Qc("Edge") || Qc("Trident") || Qc("MSIE") || Qc("Edge"); - 1 != Kc.toLowerCase().indexOf("webkit") && !Qc("Edge") && Qc("Mobile");
    Qc("Macintosh");
    Qc("Windows");
    Qc("Linux") || Qc("CrOS");
    var Of = oa.navigator || null;
    Of && (Of.appVersion || "").indexOf("X11");
    Qc("Android");
    Nf();
    Qc("iPad");
    Qc("iPod");
    Nf() || Qc("iPad") || Qc("iPod");
    Kc.toLowerCase().indexOf("kaios");
    var Pf = function() {
            if (!G.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                G.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Qf = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (k) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var h = c.parent;
                        if (h && h != c) {
                            f = h;
                            break a
                        }
                    } catch (k) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        };
    var Rf = function(a, b) {
            for (var c = "" + (a ? "" : ad.userAgent) + ((qf(G) ? I.cookie : null) || "") + (I.referrer || ""), d = c.length, e = G.history.length; 0 < e;) c += e-- ^ d++;
            return [Math.round(2147483647 * (b ? Pf() : Math.random())) ^ of (c) & 2147483647, Math.round(Oa() / 1E3)].join(".")
        },
        Uf = function(a, b, c, d, e) {
            var f = Sf(b);
            return wf(a, f, Tf(c), d, e)
        },
        Vf = function(a, b, c, d) {
            var e = "" + Sf(c),
                f = Tf(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Sf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Tf = function(a) {
            if (!a ||
                "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Wf(a, b, c) {
        var d, e = Number(null != a.rb ? a.rb : void 0);
        0 !== e && (d = new Date((b || Oa()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Xf = ["1"],
        Yf = {},
        bg = function(a) {
            var b = Zf(a.prefix);
            if (!Yf[b] && !$f(b, a.path, a.domain)) {
                var c = Rf();
                if (0 === ag(b, c, a)) {
                    var d = cd("google_tag_data", {});
                    d._gcl_au ? ra("GTM", 57) : d._gcl_au = c
                }
                $f(b, a.path, a.domain)
            }
        };

    function ag(a, b, c) {
        var d = Vf(b, "1", c.domain, c.path),
            e = Wf(c);
        e.Ha = "ad_storage";
        return Cf(a, d, e)
    }

    function $f(a, b, c) {
        var d = Uf(a, b, c, Xf, "ad_storage");
        d && (Yf[a] = d);
        return d
    }

    function Zf(a) {
        return (a || "_gcl") + "_au"
    };
    var cg = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Wd: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, k) {
            return k.timestamp - h.timestamp
        });
        return b
    };

    function dg(a, b) {
        var c = cg(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Wd] || (d[c[e].Wd] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    la: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].Wd].push(h)
            }
        }
        return d
    };

    function eg() {
        for (var a = fg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function gg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var fg, hg;

    function ig(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = hg[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        fg = fg || gg();
        hg = hg || eg();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var jg;
    var ng = function() {
            var a = kg,
                b = lg,
                c = mg(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                id(I, "mousedown", d);
                id(I, "keyup", d);
                id(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        og = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            mg().decorators.push(f)
        },
        pg = function(a, b, c) {
            for (var d = mg().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    k;
                if (k = !c || h.forms) a: {
                    var l = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (l && (p || n !== I.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Wa(e, h.callback())
                }
            }
            return e
        },
        mg = function() {
            var a = cd("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var qg = /(.*?)\*(.*?)\*(.*)/,
        rg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        sg = /^(?:www\.|m\.|amp\.)+/,
        tg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function ug(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var wg = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                        b.push(c);
                        var e = b,
                            f = e.push,
                            h, k = String(d);
                        fg = fg || gg();
                        hg = hg || eg();
                        for (var l = [], n = 0; n < k.length; n += 3) {
                            var p = n + 1 < k.length,
                                q = n + 2 < k.length,
                                r = k.charCodeAt(n),
                                t = p ? k.charCodeAt(n + 1) : 0,
                                u = q ? k.charCodeAt(n + 2) : 0,
                                v = r >> 2,
                                x = (r & 3) << 4 | t >> 4,
                                z = (t & 15) << 2 | u >> 6,
                                w = u & 63;
                            q || (w = 64, p || (z = 64));
                            l.push(fg[v], fg[x], fg[z], fg[w])
                        }
                        h = l.join("");
                        f.call(e, h)
                    }
                }
            var y = b.join("*");
            return ["1", vg(y),
                y
            ].join("*")
        },
        vg = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = jg)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            jg = d;
            for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ jg[(l ^ c.charCodeAt(n)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        yg = function() {
            return function(a) {
                var b = me(G.location.href),
                    c = b.search.replace("?", ""),
                    d = ge(c, "_gl", !0) || "";
                a.query = xg(d) || {};
                var e = je(b, "fragment").match(ug("_gl"));
                a.fragment = xg(e && e[3] || "") || {}
            }
        },
        zg = function(a) {
            var b = yg(),
                c = mg();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d
        },
        xg = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = qg.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var n = h[2], p = 0; p <
                                b; ++p)
                                if (n === vg(k, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var q = {}, r = k ? k.split("*") : [], t = 0; t < r.length; t += 2) q[r[t]] = ig(r[t + 1]);
                            return q
                        }
                    }
                }
            } catch (u) {}
        };

    function Ag(a, b, c, d) {
        function e(p) {
            var q = p,
                r = ug(a).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = tg.exec(c);
        if (!f) return "";
        var h = f[1],
            k = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }

    function Bg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = pg(b, 1, c),
            e = pg(b, 2, c),
            f = pg(b, 3, c);
        if (Ya(d)) {
            var h = wg(d);
            c ? Cg("_gl", h, a) : Dg("_gl", h, a, !1)
        }
        if (!c && Ya(e)) {
            var k = wg(e);
            Dg("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Dg(n, p, q, void 0);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Cg(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Ag(n, p, q, void 0)
            }
    }

    function Dg(a, b, c, d) {
        if (c.href) {
            var e = Ag(a, b, c.href, void 0 === d ? !1 : d);
            Jc.test(e) && (c.href = e)
        }
    }

    function Cg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Ag(a, b, c.action);
                Jc.test(n) && (c.action = n)
            }
        }
    }
    var kg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || Bg(e, e.hostname)
                }
            } catch (h) {}
        },
        lg = function(a) {
            try {
                if (a.action) {
                    var b = je(me(a.action), "host");
                    Bg(a, b)
                }
            } catch (c) {}
        },
        Eg = function(a, b, c, d) {
            ng();
            og(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Fg = function(a, b) {
            ng();
            og(a, [ie(G.location, "host", !0)], b, !0, !0)
        },
        Gg = function() {
            var a = I.location.hostname,
                b = rg.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(sg, ""),
                l = e.replace(sg, ""),
                n;
            if (!(n = k === l)) {
                var p = "." + l;
                n = k.substring(k.length - p.length, k.length) === p
            }
            return n
        },
        Hg = function(a, b) {
            return !1 === a ? !1 : a || b || Gg()
        };
    var Ig = {};
    var Jg = /^\w+$/,
        Kg = /^[\w-]+$/,
        Lg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Mg = function() {
            if (!vd(Cc) || !Gd()) return !0;
            var a = Dd("ad_storage");
            return null == a ? !0 : !!a
        },
        Ng = function(a, b) {
            Fd("ad_storage") ? Mg() ? a() : Kd(a, "ad_storage") : b ? ra("TAGGING", 3) : Jd(function() {
                Ng(a, !0)
            }, ["ad_storage"])
        },
        Pg = function(a) {
            return Og(a).map(function(b) {
                return b.la
            })
        },
        Og = function(a) {
            var b = [];
            if (!qf(G) || !I.cookie) return b;
            var c = tf(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Wb: d.Wb
                }, e++) {
                var f = Qg(c[e]);
                if (null != f) {
                    var h = f,
                        k = h.version;
                    d.Wb = h.la;
                    var l = h.timestamp,
                        n = h.labels,
                        p = Ca(b, function(q) {
                            return function(r) {
                                return r.la === q.Wb
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Rg(p.labels, n || [])) : b.push({
                        version: k,
                        la: d.Wb,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Sg(b)
        };

    function Rg(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Tg(a) {
        return a && "string" == typeof a && a.match(Jg) ? a : "_gcl"
    }
    var Vg = function() {
            var a = me(G.location.href),
                b = je(a, "query", !1, void 0, "gclid"),
                c = je(a, "query", !1, void 0, "gclsrc"),
                d = je(a, "query", !1, void 0, "wbraid"),
                e = je(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || ge(f, "gclid", void 0);
                c = c || ge(f, "gclsrc", void 0);
                d = d || ge(f, "wbraid", void 0)
            }
            return Ug(b, c, e, d)
        },
        Ug = function(a, b, c, d) {
            var e = {},
                f = function(h, k) {
                    e[k] || (e[k] = []);
                    e[k].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Kg.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Kg)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Wg = function(a, b) {
            switch (a) {
                case void 0:
                case "aw":
                    return "aw" === b;
                case "aw.ds":
                    return "aw" === b || "dc" === b;
                case "ds":
                case "3p.ds":
                    return "dc" === b;
                case "gf":
                    return "gf" === b;
                case "ha":
                    return "ha" === b
            }
            return !1
        },
        Yg = function(a) {
            var b = Vg();
            Ng(function() {
                Xg(b, a)
            })
        };

    function Xg(a, b, c, d) {
        function e(p, q) {
            var r = Zg(p, f);
            r && (Cf(r, q, h), k = !0)
        }
        b = b || {};
        d = d || [];
        var f = Tg(b.prefix);
        c = c || Oa();
        var h = Wf(b, c, !0);
        h.Ha = "ad_storage";
        var k = !1,
            l = Math.round(c / 1E3),
            n = function(p) {
                var q = ["GCL", l, p];
                0 < d.length && q.push(d.join("."));
                return q.join(".")
            };
        a.aw && e("aw", n(a.aw[0]));
        a.dc && e("dc", n(a.dc[0]));
        a.gf && e("gf", n(a.gf[0]));
        a.ha && e("ha", n(a.ha[0]));
        a.gp && e("gp", n(a.gp[0]));
        (void 0 == Ig.enable_gbraid_cookie_write ? 0 : Ig.enable_gbraid_cookie_write) && !k && a.gb && e("gb", n(a.gb[0]))
    }
    var ah = function(a, b) {
            var c = zg(!0);
            Ng(function() {
                for (var d = Tg(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Lg[f]) {
                        var h = Zg(f, d),
                            k = c[h];
                        if (k) {
                            var l = Math.min($g(k), Oa()),
                                n;
                            b: {
                                var p = l;
                                if (qf(G))
                                    for (var q = tf(h, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if ($g(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Wf(b, l, !0);
                                t.Ha = "ad_storage";
                                Cf(h, k, t)
                            }
                        }
                    }
                }
                Xg(Ug(c.gclid, c.gclsrc), b)
            })
        },
        Zg = function(a, b) {
            var c = Lg[a];
            if (void 0 !== c) return b + c
        },
        $g = function(a) {
            return 0 !== bh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Qg(a) {
        var b = bh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            la: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function bh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Kg.test(a[2]) ? [] : a
    }
    var ch = function(a, b, c, d, e) {
            if (wa(b) && qf(G)) {
                var f = Tg(e),
                    h = function() {
                        for (var k = {}, l = 0; l < a.length; ++l) {
                            var n = Zg(a[l], f);
                            if (n) {
                                var p = tf(n, I.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Ng(function() {
                    Eg(h, b, c, d)
                })
            }
        },
        Sg = function(a) {
            return a.filter(function(b) {
                return Kg.test(b.la)
            })
        },
        dh = function(a, b) {
            if (qf(G)) {
                for (var c = Tg(b.prefix), d = {}, e = 0; e < a.length; e++) Lg[a[e]] && (d[a[e]] = Lg[a[e]]);
                Ng(function() {
                    Ga(d, function(f, h) {
                        var k = tf(c + h, I.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            u) {
                            return $g(u) - $g(t)
                        });
                        if (k.length) {
                            var l = k[0],
                                n = $g(l),
                                p = 0 !== bh(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== bh(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            Xg(q, b, n, p)
                        }
                    })
                })
            }
        };

    function eh(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var fh = function(a) {
        function b(e, f, h) {
            h && (e[f] = h)
        }
        if (Gd()) {
            var c = Vg();
            if (eh(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Fg(function() {
                    return d
                }, 3);
                Fg(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function gh(a, b) {
        var c = Tg(b),
            d = Zg(a, c);
        if (!d) return 0;
        for (var e = Og(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function hh(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var ih = /^\d+\.fls\.doubleclick\.net$/;

    function jh(a, b) {
        Fd(E.B) ? N(E.B) ? a() : Kd(a, E.B) : b ? zc(42) : Rd(function() {
            jh(a, !0)
        }, [E.B])
    }

    function kh(a) {
        var b = me(G.location.href),
            c = je(b, "host", !1);
        if (c && c.match(ih)) {
            var d = je(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function lh(a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
            var d = kh("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Tg(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !N(E.B) && c,
                h;
            h = Vg()[a] || [];
            if (0 < h.length) return f ? ["0"] : h
        }
        var k = Zg(a, e);
        return k ? Pg(k) : []
    }

    function mh(a) {
        var b = [];
        Ga(a, function(c, d) {
            d = Sg(d);
            for (var e = [], f = 0; f < d.length; f++) e.push(d[f].la);
            e.length && b.push(c + ":" + e.join(","))
        });
        return b.join(";")
    }
    var nh = function(a) {
            var b = kh("gac");
            return b ? !N(E.B) && a ? "0" : decodeURIComponent(b) : mh(Mg() ? dg() : {})
        },
        oh = function(a) {
            var b = kh("gacgb");
            return b ? !N(E.B) && a ? "0" : decodeURIComponent(b) : mh(Mg() ? dg("_gac_gb", !0) : {})
        },
        ph = function(a, b, c) {
            var d = Vg(),
                e = [],
                f = d.gclid,
                h = d.dclid,
                k = d.gclsrc || "aw";
            !f || "aw.ds" !== k && "aw" !== k && "ds" !== k || c && !Wg(k, c) || e.push({
                la: f,
                Bd: k
            });
            !h || c && "dc" !== c || e.push({
                la: h,
                Bd: "ds"
            });
            jh(function() {
                bg(b);
                var l = Yf[Zf(b.prefix)],
                    n = !1;
                if (l && 0 < e.length)
                    for (var p = O.joined_auid = O.joined_auid || {}, q = 0; q < e.length; q++) {
                        var r = e[q],
                            t = r.la,
                            u = r.Bd,
                            v = (b.prefix || "_gcl") + "." + u + "." + t;
                        if (!p[v]) {
                            var x = "https://adservice.google.com/pagead/regclk";
                            x = "gb" === u ? x + "?gbraid=" + t + "&auid=" + l : x + "?gclid=" + t + "&auid=" + l + "&gclsrc=" + u;
                            sd(x);
                            n = p[v] = !0
                        }
                    }
                null == a && (a = n);
                if (a &&
                    l) {
                    var z = Zf(b.prefix),
                        w = Yf[z];
                    w && ag(z, w, b)
                }
            })
        },
        qh = function(a) {
            var b;
            if (kh("gclaw") || kh("gac") || 0 < (Vg().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (Vg().gb || []).length) c = !0;
                else {
                    var d = Math.max(gh("aw", a), hh(Mg() ? dg() : {}));
                    c = Math.max(gh("gb", a), hh(Mg() ? dg("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var rh = /[A-Z]+/,
        sh = /\s/,
        th = function(a) {
            if (m(a) && (a = Ma(a), !sh.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (rh.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            F: d
                        }
                    }
                }
            }
        },
        vh = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = th(a[c]);
                d && (b[d.id] = d)
            }
            uh(b);
            var e = [];
            Ga(b, function(f, h) {
                e.push(h)
            });
            return e
        };

    function uh(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.F[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var wh = function() {
        var a = !1;
        return a
    };
    var yh = function(a, b, c, d) {
            return (2 === xh() || d || "http:" != G.location.protocol ? a : b) + c
        },
        xh = function() {
            var a = fd(),
                b;
            if (1 === a) a: {
                var c = Pe;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = I.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Mh = function(a) {
            if (N(E.B)) return a;
            a = a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = ne(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = ne(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            });
            return a
        },
        Nh = function() {
            var a;
            if (!(a = Qe)) {
                var b;
                if (!0 === G._gtmdgs) b = !0;
                else {
                    var c = ad && ad.userAgent || "";
                    b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
                        11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
                }
                a = !b
            }
            if (a) return -1;
            var d = Ia("1");
            return nf(1, 100) < d ? nf(2, 2) : -1
        },
        Oh = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        };
    var Ph = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Qh = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Rh = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Sh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Th = function() {
            var a = !1;
            a = !0;
            return a
        },
        Vh = function(a) {
            var b = bf("gtm.allowlist") || bf("gtm.whitelist");
            b && zc(9);
            Th() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Za(La(b), Qh),
                d = bf("gtm.blocklist") ||
                bf("gtm.blacklist");
            d || (d = bf("tagTypeBlacklist")) && zc(3);
            d ? zc(8) : d = [];
            Uh() && (d = La(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ba(La(d), "google") && zc(2);
            var e = d && Za(La(d), Rh),
                f = {};
            return function(h) {
                var k = h && h[mb.Ta];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = Ve[k] || [],
                    n = a(k, l);
                if (b) {
                    var p;
                    if (p =
                        n) a: {
                        if (0 > Ba(c, k))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > Ba(c, l[q])) {
                                        zc(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= Ba(e, k);
                    if (t) r = t;
                    else {
                        var u = Fa(e, l || []);
                        u && zc(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= Ba(l, "sandboxedScripts")) || c && -1 !== Ba(c, "sandboxedScripts") || (v = Fa(e, Sh));
                return f[k] = v
            }
        },
        Uh = function() {
            return Ph.test(G.location && G.location.hostname)
        };
    var Wh = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Xh = function(a) {
            var b = O.zones;
            return b ? b.checkState(Je.K, a) : Wh
        },
        Yh = function(a) {
            var b = O.zones;
            !b && a && (b = O.zones = a());
            return b
        };
    var Zh = function() {},
        $h = function() {};
    var ai = !1,
        bi = 0,
        ci = [];

    function di(a) {
        if (!ai) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                ai = !0;
                for (var e = 0; e < ci.length; e++) J(ci[e])
            }
            ci.push = function() {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function ei() {
        if (!ai && 140 > bi) {
            bi++;
            try {
                I.documentElement.doScroll("left"), di()
            } catch (a) {
                G.setTimeout(ei, 50)
            }
        }
    }
    var fi = function(a) {
        ai ? a() : ci.push(a)
    };
    var hi = function(a, b) {
            this.m = !1;
            this.H = [];
            this.W = {
                tags: []
            };
            this.da = !1;
            this.o = this.C = 0;
            gi(this, a, b)
        },
        ii = function(a, b, c, d) {
            if (Me.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            kb(d) && (e = B(d, e));
            e.id = c;
            e.status = "timeout";
            return a.W.tags.push(e) - 1
        },
        oi = function(a, b, c, d) {
            var e = a.W.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        pi = function(a) {
            if (!a.m) {
                for (var b = a.H, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.H.length = 0
            }
        },
        gi = function(a, b, c) {
            ua(b) && qi(a, b);
            c && G.setTimeout(function() {
                return pi(a)
            }, Number(c))
        },
        qi = function(a,
            b) {
            var c = Sa(function() {
                return J(function() {
                    b(Je.K, a.W)
                })
            });
            a.m ? c() : a.H.push(c)
        },
        ri = function(a) {
            a.C++;
            return Sa(function() {
                a.o++;
                a.da && a.o >= a.C && pi(a)
            })
        };
    var si = function() {
        function a(d) {
            return !va(d) || 0 > d ? 0 : d
        }
        if (!O._li && G.performance && G.performance.timing) {
            var b = G.performance.timing.navigationStart,
                c = va(cf.get("gtm.start")) ? cf.get("gtm.start") : 0;
            O._li = {
                cst: a(c - b),
                cbt: a(Se - b)
            }
        }
    };
    var wi = {},
        xi = function() {
            return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
        },
        yi = !1;
    var Di = function(a) {},
        Ci = function() {
            return G.GoogleAnalyticsObject || "ga"
        },
        Ei = function(a, b) {
            return function() {
                var c = xi(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            l = 0 > h.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" +
                            b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload", h, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Ji = function() {
            return "&tc=" + Pb.filter(function(a) {
                return a
            }).length
        },
        Mi = function() {
            2022 <= Ki().length && Li()
        },
        Oi = function() {
            Ni || (Ni = G.setTimeout(Li, 500))
        },
        Li = function() {
            Ni && (G.clearTimeout(Ni), Ni = void 0);
            void 0 === Pi || Qi[Pi] && !Ri && !Si || (Ti[Pi] || Ui.vh() || 0 >= Vi-- ? (zc(1), Ti[Pi] = !0) : (Ui.Nh(), hd(Ki()), Qi[Pi] = !0, Wi = Xi = Yi = Si = Ri = ""))
        },
        Ki = function() {
            var a = Pi;
            if (void 0 === a) return "";
            var b = sa("GTM"),
                c = sa("TAGGING");
            return [Zi, Qi[a] ? "" : "&es=1", $i[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Ji(), Ri, Si, Yi ? Yi : "", Xi, Wi, "&z=0"].join("")
        },
        bj = function() {
            Zi = aj()
        },
        aj = function() {
            return [Te, "&v=3&t=t", "&pid=" + Da(), "&rv=" + Je.uc].join("")
        },
        cj = "0.005000" > Math.random(),
        Zi = aj(),
        Qi = {},
        Ri = "",
        Si = "",
        Wi = "",
        Xi = "",
        Yi = "",
        Pi = void 0,
        $i = {},
        Ti = {},
        Ni = void 0,
        Ui = function(a, b) {
            var c = 0,
                d = 0;
            return {
                vh: function() {
                    if (c < a) return !1;
                    Oa() - d >= b && (c = 0);
                    return c >= a
                },
                Nh: function() {
                    Oa() - d >= b && (c = 0);
                    c++;
                    d = Oa()
                }
            }
        }(2, 1E3),
        Vi = 1E3,
        dj = function(a, b, c) {
            if (cj && !Ti[a] && b) {
                a !== Pi && (Li(), Pi = a);
                var d, e = String(b[mb.Ta] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                Ri = Ri ? Ri + "." + f : "&tr=" + f;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (Rb[h] ? "1" : "2") + d;
                Wi = Wi ? Wi + "." + k : "&ti=" + k;
                Oi();
                Mi()
            }
        },
        ej = function(a, b, c) {
            if (cj && !Ti[a]) {
                a !== Pi && (Li(), Pi = a);
                var d = c + b;
                Si = Si ? Si + "." + d : "&epr=" + d;
                Oi();
                Mi()
            }
        },
        fj = function(a, b, c) {};

    function gj(a, b, c, d) {
        var e = Pb[a],
            f = hj(a, b, c, d);
        if (!f) return null;
        var h = Wb(e[mb.cf], c, []);
        if (h && h.length) {
            var k = h[0];
            f = gj(k.index, {
                onSuccess: f,
                onFailure: 1 === k.uf ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function hj(a, b, c, d) {
        function e() {
            if (f[mb.Ig]) k();
            else {
                var x = Xb(f, c, []);
                var y = ii(c.Ua, String(f[mb.Ta]), Number(f[mb.df]), x[mb.Jg]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = Oa() - F;
                        dj(c.id, Pb[a], "5");
                        oi(c.Ua, y, "success",
                            D);
                        h()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = Oa() - F;
                        dj(c.id, Pb[a], "6");
                        oi(c.Ua, y, "failure", D);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                dj(c.id, f, "1");
                var C = function() {
                    var D = Oa() - F;
                    dj(c.id, f, "7");
                    oi(c.Ua, y, "exception", D);
                    A || (A = !0, k())
                };
                var F = Oa();
                try {
                    Vb(x, c)
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Pb[a],
            h = b.onSuccess,
            k = b.onFailure,
            l = b.terminate;
        if (c.Hd(f)) return null;
        var n = Wb(f[mb.ef], c, []);
        if (n && n.length) {
            var p = n[0],
                q = gj(p.index, {
                    onSuccess: h,
                    onFailure: k,
                    terminate: l
                }, c, d);
            if (!q) return null;
            h = q;
            k = 2 === p.uf ? l : q
        }
        if (f[mb.We] || f[mb.Lg]) {
            var r = f[mb.We] ? Qb :
                c.Uh,
                t = h,
                u = k;
            if (!r[a]) {
                e = Sa(e);
                var v = ij(a, r, e);
                h = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function ij(a, b, c) {
        var d = [],
            e = [];
        b[a] = jj(d, e, c);
        return {
            onSuccess: function() {
                b[a] = kj;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = lj;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function jj(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function kj(a) {
        a()
    }

    function lj(a, b) {
        b()
    };
    var oj = function(a, b) {
        for (var c = [], d = 0; d < Pb.length; d++)
            if (a[d]) {
                var e = Pb[d];
                var f = ri(b.Ua);
                try {
                    var h = gj(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var k = c,
                            l = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Rb[p];
                        l.call(k, {
                            Mf: n,
                            Ef: q ? q.priorityOverride || 0 : 0,
                            jh: h
                        })
                    } else mj(d, b), f()
                } catch (u) {
                    f()
                }
            }
        var r = b.Ua;
        r.da = !0;
        r.o >= r.C && pi(r);
        c.sort(nj);
        for (var t = 0; t < c.length; t++) c[t].jh();
        return 0 < c.length
    };

    function nj(a, b) {
        var c, d = b.Ef,
            e = a.Ef;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Mf,
                k = b.Mf;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function mj(a, b) {
        if (!cj) return;
        var c = function(d) {
            var e = b.Hd(Pb[d]) ? "3" : "4",
                f = Wb(Pb[d][mb.cf], b, []);
            f && f.length && c(f[0].index);
            dj(b.id, Pb[d], e);
            var h = Wb(Pb[d][mb.ef], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var pj = !1,
        vj = function(a) {
            var b = a["gtm.uniqueEventId"],
                c = a.event;
            if ("gtm.js" === c) {
                if (pj) return !1;
                pj = !0
            }
            var d = Xh(b),
                e = !1;
            if (!d.active) {
                if ("gtm.js" !== c) return !1;
                e = !0;
                d = Xh(Number.MAX_SAFE_INTEGER)
            }
            cj && !Ti[b] && Pi !== b && (Li(), Pi = b, Wi = Ri = "", $i[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b, Oi());
            var f = a.eventCallback,
                h = a.eventTimeout,
                k = {
                    id: b,
                    name: c,
                    Hd: Vh(d.isAllowed),
                    Uh: [],
                    Af: function() {
                        zc(6)
                    },
                    lf: qj(b),
                    Ua: new hi(f,
                        h)
                };
            sj(b, k.Ua);
            var l = ac(k);
            e && (l = tj(l));
            var n = oj(l, k);
            "gtm.js" !== c && "gtm.sync" !== c || Di(Je.K);
            switch (c) {
                case "gtm.init":
                    n && zc(20)
            }
            return uj(l, n)
        };

    function qj(a) {
        return function(b) {
            cj && (lb(b) || fj(a, "input", b))
        }
    }

    function sj(a, b) {
        gf(a, "event", 1);
        gf(a, "ecommerce", 1);
        gf(a, "gtm");
        gf(a, "eventModel");
    }

    function rj() {
        var a = {};
        a.event = ff("event", 1);
        a.ecommerce = ff("ecommerce", 1);
        a.gtm = ff("gtm");
        a.eventModel = ff("eventModel");
        return a
    }

    function tj(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Le[String(Pb[c][mb.Ta])] && (b[c] = !0);
        return b
    }

    function uj(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Pb[c] && !Me[String(Pb[c][mb.Ta])]) return !0;
        return !1
    }

    function wj(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return me("" + c + b).href
        }
    }

    function xj(a, b) {
        return yj() ? wj(a, b) : void 0
    }

    function yj() {
        var a = !1;
        return a
    };
    var zj = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.remoteConfig = {};
            this.globalConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0
        },
        Aj = function(a) {
            var b = new zj;
            b.eventModel = a;
            return b
        },
        Bj = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Cj = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Dj = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        Ej = function(a, b) {
            a.globalConfig =
                b;
            return a
        },
        Fj = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Gj = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Hj = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Ij = function(a, b) {
            a.onFailure = b;
            return a
        };
    zj.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var Jj = function(a) {
        function b(e) {
            Ga(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Ga(c, function(e) {
            d.push(e)
        });
        return d
    };
    var Kj;
    if (3 === Je.uc.length) Kj = "g";
    else {
        var Lj = "G";
        Lj = "g";
        Kj = Lj
    }
    var Mj = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Kj,
            OPT: "o"
        },
        Nj = function(a) {
            var b = Je.K.split("-"),
                c = b[0].toUpperCase(),
                d = Mj[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Je.uc.length) {
                var h = "w";
                h = wh() ? "s" : "o";
                f = "2" + h
            } else f = "";
            return f + d + Je.uc + e
        };
    var Oj = function() {};
    var Pj = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Qj = function(a, b) {
            this.o = a;
            this.m = null;
            this.H = {};
            this.da = 0;
            this.W = void 0 === b ? 500 : b;
            this.C = null
        };
    na(Qj, Oj);
    var Sj = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Rj(a)
    };
    Qj.prototype.addEventListener = function(a) {
        var b = {},
            c = Ec(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.W && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.W));
        var e = function(f, h) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Pj(b), h && 0 === b.internalErrorState || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Tj(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Qj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Tj(this, "removeEventListener", null, a.listenerId)
    };
    var Vj = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === h && (k = 1)) : 3 === c && (k = 1, 1 === h && (k = 0));
            var l;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Uj(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || vd(Bc) && "CH" === a.publisherCC) ? !0 : n && Uj(a.purpose.consents, b)
                } else l = !0;
            else l =
                1 === k ? a.purpose && a.vendor ? Uj(a.purpose.legitimateInterests, b) && Uj(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Uj = function(a, b) {
            return !(!a || !a[b])
        },
        Tj = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Rj(a)) {
                Wj(a);
                var f = ++a.da;
                a.H[f] = c;
                if (a.m) {
                    var h = {};
                    a.m.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Rj = function(a) {
            if (a.m) return a.m;
            a.m = Qf(a.o, "__tcfapiLocator");
            return a.m
        },
        Wj = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.H[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Mf(a.o, a.C))
        };
    var Xj = !0;
    Xj = !1;
    var Yj = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Zj(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    var ak = Zj("", 550),
        bk = Zj("", 500);

    function ck() {
        var a = O.tcf || {};
        return O.tcf = a
    }
    var dk = function(a, b) {
            this.C = a;
            this.m = b;
            this.o = Oa();
        },
        ek = function(a) {},
        fk = function(a) {},
        lk = function() {
            var a = ck(),
                b = new Qj(G, Xj ? 3E3 : -1),
                c = new dk(b, a);
            if ((gk() ? !0 === G.gtag_enable_tcf_support : !1 !== G.gtag_enable_tcf_support) && !a.active && ("function" === typeof G.__tcfapi || Sj(b))) {
                a.active = !0;
                a.Rb = {};
                hk();
                var d = null;
                Xj ? d = G.setTimeout(function() {
                    ik(a);
                    jk(a);
                    d = null
                }, bk) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) ik(a), jk(a), ek(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = kk(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var h = {},
                                    k;
                                for (k in Yj)
                                    if (Yj.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var l, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var q;
                                            var r = n;
                                            !1 === r.gdprApplies ? q = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Pj(r)), q = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" ===
                                                r.eventStatus) ? !0 : !1);
                                            l = q ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Vj(n, "1", 0) : !1;
                                            h["1"] = l
                                        } else h[k] = Vj(e, k, Yj[k]);
                                f = h
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Rb = f, jk(a), ek(c))
                        }
                    }), fk(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), ik(a), jk(a)
                }
            }
        };

    function ik(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Xj && (a.Rb = kk())
    }

    function hk() {
        var a = {};
        Nd((a.ad_storage = "denied", a.wait_for_update = ak, a))
    }
    var gk = function() {
        var a = !1;
        a = !0;
        return a
    };

    function kk() {
        var a = {},
            b;
        for (b in Yj) Yj.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function jk(a) {
        var b = {};
        Od((b.ad_storage = a.Rb["1"] ? "granted" : "denied", b))
    }
    var mk = function() {
            var a = ck();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        nk = function() {
            var a = ck();
            return a.active ? a.tcString || "" : ""
        },
        ok = function() {
            var a = ck();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        pk = function(a) {
            if (!Yj.hasOwnProperty(String(a))) return !0;
            var b = ck();
            return b.active && b.Rb ? !!b.Rb[String(a)] : !0
        };
    var qk = !1;

    function rk(a) {
        var b = String(G.location).split(/[?#]/)[0],
            c = Je.Vf || G._CONSENT_MODE_SALT;
        return a ? c ? String( of (b + a + c)) : "0" : ""
    }

    function sk(a) {
        function b(u) {
            var v;
            O.reported_gclid || (O.reported_gclid = {});
            v = O.reported_gclid;
            var x;
            x = qk && h && (!Gd() || N(E.B)) ? l + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs") : l + (u ? "gcu" : "gcs");
            if (!v[x]) {
                v[x] = !0;
                var z = [],
                    w = {},
                    y = function(P, R) {
                        R && (z.push(P + "=" + encodeURIComponent(R)), w[P] = !0)
                    },
                    A = "https://www.google.com";
                if (Gd()) {
                    var C = N(E.B);
                    y("gcs", Pd());
                    u && y("gcu", "1");
                    Hd() && y("gcd", "G1" + Ld(Ed));
                    O.dedupe_gclid ||
                        (O.dedupe_gclid = "" + Rf());
                    y("rnd", O.dedupe_gclid);
                    if ((!l || n && "aw.ds" !== n) && N(E.B)) {
                        var F = Pg("_gcl_aw");
                        y("gclaw", F.join("."))
                    }
                    y("url", String(G.location).split(/[?#]/)[0]);
                    y("dclid", tk(d, p));
                    var D = !1;
                    D = !0;
                    C || !d && !D || (A = "https://pagead2.googlesyndication.com")
                }
                y("gdpr_consent", nk()), y("gdpr", ok());
                "1" === zg(!1)._up && y("gtm_up", "1");
                y("gclid", tk(d, l));
                y("gclsrc", n);
                if (!(w.gclid || w.dclid || w.gclaw) && (y("gbraid", tk(d, q)), !w.gbraid && Gd() && N(E.B))) {
                    var H = Pg("_gcl_gb");
                    y("gclgb", H.join("."))
                }
                y("gtm", Nj(!e));
                qk && h && N(E.B) && (bg(f || {}), y("auid", Yf[Zf(f.prefix)] || ""));
                a.qf && y("did", a.qf);
                var M = A + "/pagead/landing?" + z.join("&");
                sd(M)
            }
        }
        var c = !!a.wd,
            d = !!a.wa,
            e = a.T,
            f = void 0 === a.Ac ? {} : a.Ac,
            h = void 0 === a.Gc ? !0 : a.Gc,
            k = Vg(),
            l = k.gclid || "",
            n = k.gclsrc,
            p = k.dclid || "",
            q = k.gbraid || "",
            r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q),
            t = Gd();
        if (r || t) t ? Rd(function() {
            b();
            N(E.B) || Qd(function(u) {
                return b(!0, u.nf)
            }, E.B)
        }, [E.B]) : b()
    }

    function tk(a, b) {
        var c = a && !N(E.B);
        return b && c ? "0" : b
    }
    var fl = function() {
            var a = !0;
            pk(7) && pk(9) && pk(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !el() && (a = !1);
            return a
        },
        el = function() {
            var a = !0;
            pk(3) && pk(4) || (a = !1);
            return a
        };
    var Cl = !1;

    function Dl() {
        var a = O;
        return a.gcq = a.gcq || new El
    }
    var Fl = function(a, b, c) {
            Dl().register(a, b, c)
        },
        Gl = function(a, b, c, d) {
            Dl().push("event", [b, a], c, d)
        },
        Hl = function(a, b) {
            Dl().push("config", [a], b)
        },
        Il = function(a, b, c, d) {
            Dl().push("get", [a, b], c, d)
        },
        Jl = {},
        Kl = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = null;
            this.m = !1
        },
        Ll = function(a, b, c, d, e) {
            this.type = a;
            this.C = b;
            this.T = c || "";
            this.m = d;
            this.o = e
        },
        El = function() {
            this.H = {};
            this.o = {};
            this.m = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        Ml = function(a, b) {
            var c = th(b);
            return a.H[c.containerId] =
                a.H[c.containerId] || new Kl
        },
        Nl = function(a, b, c) {
            if (b) {
                var d = th(b);
                if (d && 1 === Ml(a, b).status) {
                    Ml(a, b).status = 2;
                    var e = {};
                    cj && (e.timeoutId = G.setTimeout(function() {
                        zc(38);
                        Oi()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Jl[d.containerId] = Oa();
                    if (wh()) {} else {
                        var h =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            k = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h),
                            l = xj(c, h) || k;
                        ed(l)
                    }
                }
            }
        },
        Ol = function(a, b, c, d) {
            if (d.T) {
                var e = Ml(a, d.T),
                    f = e.o;
                if (f) {
                    var h = B(c),
                        k = B(e.targetConfig[d.T]),
                        l = B(e.containerConfig),
                        n = B(e.remoteConfig),
                        p = B(a.o),
                        q = bf("gtm.uniqueEventId"),
                        r = th(d.T).prefix,
                        t = Hj(Gj(Ij(Fj(Ej(Dj(Cj(Bj(Aj(h), k), l), n), p), function() {
                            ej(q, r, "2");
                        }), function() {
                            ej(q, r, "3");
                        }), function(u, v) {
                            a.C[u] = v
                        }), function(u) {
                            return a.C[u]
                        });
                    try {
                        ej(q, r, "1");
                        f(d.T, b, d.C, t)
                    } catch (u) {
                        ej(q, r, "4");
                    }
                }
            }
        };
    g = El.prototype;
    g.register = function(a, b, c) {
        var d = Ml(this, a);
        if (3 !== d.status) {
            d.o = b;
            d.status = 3;
            if (c) {
                B(d.remoteConfig, c);
                d.remoteConfig = c
            }
            var e = th(a),
                f = Jl[e.containerId];
            if (void 0 !== f) {
                var h = O[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                O[e.containerId]._spx && (k = k.toLowerCase());
                var l = bf("gtm.uniqueEventId"),
                    n = k,
                    p = Oa() - h;
                if (cj && !Ti[l]) {
                    l !== Pi && (Li(), Pi = l);
                    var q = n + "." + Math.floor(h - f) +
                        "." + Math.floor(p);
                    Xi = Xi ? Xi + "," + q : "&cl=" + q
                }
                delete Jl[e.containerId]
            }
            this.flush()
        }
    };
    g.push = function(a, b, c, d) {
        var e = Math.floor(Oa() / 1E3);
        Nl(this, c, b[0][E.Ba] || this.o[E.Ba]);
        Cl && c && Ml(this, c).m && (d = !1);
        this.m.push(new Ll(a, e, c, b, d));
        d || this.flush()
    };
    g.insert = function(a, b, c) {
        var d = Math.floor(Oa() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new Ll(a, d, c, b, !1)) : this.m.push(new Ll(a, d, c, b, !1))
    };
    g.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) Cl ? !f.T || Ml(this, f.T).m ? (f.o = !1, this.m.push(f)) : c.push(f) : (f.o = !1, this.m.push(f));
            else switch (f.type) {
                case "require":
                    if (3 !== Ml(this, f.T).status && !a) {
                        Cl && this.m.push.apply(this.m, c);
                        return
                    }
                    cj && G.clearTimeout(f.m[0].timeoutId);
                    break;
                case "set":
                    Ga(f.m[0], function(r, t) {
                        B(ab(r, t), b.o)
                    });
                    break;
                case "config":
                    e.xa = {};
                    Ga(f.m[0], function(r) {
                        return function(t, u) {
                            B(ab(t, u), r.xa)
                        }
                    }(e));
                    var h = !!e.xa[E.mc];
                    delete e.xa[E.mc];
                    var k = Ml(this, f.T),
                        l = th(f.T),
                        n = l.containerId === l.id;
                    h || (n ? k.containerConfig = {} : k.targetConfig[f.T] = {});
                    k.m && h || Ol(this, E.fa, e.xa, f);
                    k.m = !0;
                    delete e.xa[E.Fb];
                    n ? B(e.xa, k.containerConfig) : B(e.xa, k.targetConfig[f.T]);
                    Cl && (d = !0);
                    break;
                case "event":
                    e.Vb = {};
                    Ga(f.m[0], function(r) {
                        return function(t, u) {
                            B(ab(t, u), r.Vb)
                        }
                    }(e));
                    Ol(this, f.m[1], e.Vb, f);
                    break;
                case "get":
                    var p = {},
                        q = (p[E.Ka] = f.m[0], p[E.Ja] = f.m[1], p);
                    Ol(this, E.za, q, f)
            }
            this.m.shift();
            e = {
                xa: e.xa,
                Vb: e.Vb
            }
        }
        Cl && (this.m.push.apply(this.m, c), d && this.flush())
    };
    g.getRemoteConfig = function(a) {
        return Ml(this, a).remoteConfig
    };
    var Pl = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": td(a, "className"),
                "gtm.elementId": a["for"] || kd(a, "id") || "",
                "gtm.elementTarget": a.formTarget || td(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || td(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Ql = function(a) {
            O.hasOwnProperty("autoEventsSettings") || (O.autoEventsSettings = {});
            var b = O.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Rl = function(a, b, c) {
            Ql(a)[b] = c
        },
        Sl = function(a, b, c, d) {
            var e = Ql(a),
                f = Ra(e, b, d);
            e[b] = c(f)
        },
        Tl = function(a, b, c) {
            var d = Ql(a);
            return Ra(d, b, c)
        };
    var Ul = !!G.MutationObserver,
        Vl = void 0,
        Wl = function(a) {
            if (!Vl) {
                var b = function() {
                    var c = I.body;
                    if (c)
                        if (Ul)(new MutationObserver(function() {
                            for (var e = 0; e < Vl.length; e++) J(Vl[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            id(c, "DOMNodeInserted", function() {
                                d || (d = !0, J(function() {
                                    d = !1;
                                    for (var e = 0; e < Vl.length; e++) J(Vl[e])
                                }))
                            })
                        }
                };
                Vl = [];
                I.body ? b() : J(b)
            }
            Vl.push(a)
        };
    var Xl = function(a, b, c) {
        function d() {
            var h = a();
            f += e ? (Oa() - e) * h.playbackRate / 1E3 : 0;
            e = Oa()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(h, k, l) {
                var n = a(),
                    p = n.rf,
                    q = void 0 !== l ? Math.round(l) : void 0 !== k ? Math.round(n.rf * k) : Math.round(n.dh),
                    r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = I.hidden ? !1 : .5 <= Zd(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = Pl(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = h;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Qh: function() {
                e = Oa()
            },
            ud: function() {
                d()
            }
        }
    };
    var Yl = !1,
        Zl = [];

    function $l() {
        if (!Yl) {
            Yl = !0;
            for (var a = 0; a < Zl.length; a++) J(Zl[a])
        }
    }
    var am = function(a) {
        Yl ? J(a) : Zl.push(a)
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    var bm = "HA GF G UA AW DC".split(" "),
        cm = !1,
        dm = {},
        em = !1;

    function fm(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = B(b), b[E.Xc] && (c.eventCallback = b[E.Xc]), b[E.fc] && (c.eventTimeout = b[E.fc]));
        return c
    }

    function gm(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: We()
        });
        return a["gtm.uniqueEventId"]
    }

    function hm() {
        cm = cm || !O.gtagRegistered, O.gtagRegistered = !0, cm && (O.addTargetToGroup = function(a) {
            im(a, "default")
        });
        return cm
    }
    var im = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) dm[b[c]] = dm[b[c]] || [], dm[b[c]].push(a)
        },
        jm = function(a) {
            Ga(dm, function(b, c) {
                var d = Ba(c, a);
                0 <= d && c.splice(d, 1)
            })
        };
    var km = {
            config: function(a) {
                var b, c;
                void 0 === c && (c = We());
                if (2 > a.length || !m(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !kb(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = th(a[1]);
                if (!e) return;
                jm(e.id);
                im(e.id, d[E.ad] || "default");
                delete d[E.ad];
                em || zc(43);
                if (hm() && -1 !== Ba(bm, e.prefix)) {
                    "G" === e.prefix && (d[E.Fb] = !0);
                    Hl(d, e.id);
                    return
                }
                ef("gtag.targets." +
                    e.id, void 0);
                ef("gtag.targets." + e.id, B(d));
                var f = {};
                f[E.Sa] = e.id;
                b = fm(E.fa, f);
                return b
            },
            consent: function(a) {
                function b() {
                    hm() && B(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    zc(39);
                    var c = We(),
                        d = a[1];
                    "default" === d ? (b(), Nd(a[2])) : "update" === d && (b(), Od(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && m(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!kb(a[2]) &&
                            void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = fm(b, c),
                        e = void 0;
                    void 0 === e && We();
                    var f;
                    var h = c && c[E.Sa];
                    void 0 === h && (h = bf(E.Sa, 2), void 0 === h && (h = "default"));
                    if (m(h) || wa(h)) {
                        for (var k = h.toString().replace(/\s+/g, "").split(","), l = [], n = 0; n < k.length; n++) 0 <= k[n].indexOf("-") ? l.push(k[n]) : l = l.concat(dm[k[n]] || []);
                        f = vh(l)
                    } else f =
                        void 0;
                    var p = f;
                    if (!p) return;
                    for (var q = hm(), r = [], t = 0; q && t < p.length; t++) {
                        var u = p[t];
                        if (-1 !== Ba(bm, u.prefix)) {
                            var v = B(c);
                            "G" === u.prefix && (v[E.Fb] = !0);
                            Gl(b, v, u.id)
                        }
                        r.push(u.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < p.length ? d.eventModel[E.Sa] = r.join() : delete d.eventModel[E.Sa];
                    em || zc(43);
                    return d
                }
            },
            get: function(a) {
                zc(53);
                if (4 !== a.length || !m(a[1]) || !m(a[2]) || !ua(a[3])) return;
                var b = th(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                em || zc(43);
                if (!hm() || -1 ===
                    Ba(bm, b.prefix)) return;
                We();
                var e = {};
                Zh(B((e[E.Ka] = c, e[E.Ja] = d, e)));
                Il(c, function(f) {
                    J(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    em = !0;
                    hm();
                    var b = {
                        event: "gtm.js",
                        "gtm.start": a[1].getTime()
                    };
                    return b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && kb(a[1]) ? b = B(a[1]) : 3 == a.length &&
                    m(a[1]) && (b = {}, kb(a[2]) || wa(a[2]) ? b[a[1]] = B(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (We(), hm()) {
                        B(b);
                        var c = B(b);
                        Dl().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        lm = {
            policy: !0
        };
    var mm = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        om = function(a) {
            var b = nm(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Im = function(a) {
        if (Hm(a)) return a;
        this.m = a
    };
    Im.prototype.ph = function() {
        return this.m
    };
    var Hm = function(a) {
        return !a || "object" !== gb(a) || kb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Im.prototype.getUntrustedUpdateValue = Im.prototype.ph;
    var Jm = [],
        Km = !1,
        Lm = !1,
        Mm = !1,
        Nm = function(a) {
            return G["dataLayer"].push(a)
        },
        Om = function(a) {
            var b = O["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0,
                e = a;
            return function() {
                ++d === c && (e(), e = null)
            }
        };

    function Pm(a) {
        var b = a._clear;
        Ga(a, function(d, e) {
            "_clear" !== d && (b && ef(d, void 0), ef(d, e))
        });
        Re || (Re = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = We(), a["gtm.uniqueEventId"] = c, ef("gtm.uniqueEventId", c));
        return vj(a)
    }

    function Qm() {
        var a = Jm[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ha(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function Rm() {
        for (var a = !1; !Mm && 0 < Jm.length;) {
            var b = !1;
            b = !1;
            b = !0;
            if (b && !Lm && Qm()) {
                var c = {};
                Jm.unshift((c.event =
                    "gtm.init", c));
                Lm = !0
            }
            var d = !1;
            d = !1;
            d = !0;
            if (d && !Km && Qm()) {
                var e = {};
                Jm.unshift((e.event = "gtm.init_consent", e));
                Km = !0
            }
            Mm = !0;
            delete Ze.eventModel;
            af();
            var f = Jm.shift();
            if (null != f) {
                var h = Hm(f);
                if (h) {
                    var k = f;
                    f = Hm(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var l = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], n = 0; n < l.length; n++) {
                        var p = l[n],
                            q = bf(p, 1);
                        if (wa(q) || kb(q)) q = B(q);
                        $e[p] = q
                    }
                }
                try {
                    if (ua(f)) try {
                        f.call(cf)
                    } catch (y) {} else if (wa(f)) {
                        var r = f;
                        if (m(r[0])) {
                            var t = r[0].split("."),
                                u = t.pop(),
                                v = r.slice(1),
                                x = bf(t.join("."), 2);
                            if (void 0 !== x && null !== x) try {
                                x[u].apply(x, v)
                            } catch (y) {}
                        }
                    } else {
                        if (Ha(f)) {
                            a: {
                                var z = f;
                                if (z.length && m(z[0])) {
                                    var w = km[z[0]];
                                    if (w && (!h || !lm[z[0]])) {
                                        f =
                                            w(z);
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            if (!f) {
                                Mm = !1;
                                continue
                            }
                        }
                        a = Pm(f) || a
                    }
                } finally {
                    h && af(!0)
                }
            }
            Mm = !1
        }
        return !a
    }

    function Sm() {
        var a = Rm();
        try {
            mm(G["dataLayer"], Je.K)
        } catch (b) {}
        return a
    }
    var Um = function() {
            var a = cd("dataLayer", []),
                b = cd("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            fi(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            am(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < O.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new Im(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var h = c.apply(a, e);
                Jm.push.apply(Jm, e);
                if (300 <
                    this.length)
                    for (zc(4); 300 < this.length;) this.shift();
                var k = "boolean" !== typeof h || h;
                return Rm() && k
            };
            var d = a.slice(0);
            Jm.push.apply(Jm, d);
            Tm() && J(Sm)
        },
        Tm = function() {
            var a = !0;
            return a
        };
    var Vm = {};
    Vm.nc = new String("undefined");
    var Wm = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Vm.nc ? b : a[d]);
            return c.join("")
        }
    };
    Wm.prototype.toString = function() {
        return this.m("undefined")
    };
    Wm.prototype.valueOf = Wm.prototype.toString;
    Vm.Og = Wm;
    Vm.sd = {};
    Vm.bh = function(a) {
        return new Wm(a)
    };
    var Xm = {};
    Vm.Oh = function(a, b) {
        var c = We();
        Xm[c] = [a, b];
        return c
    };
    Vm.pf = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Xm[c];
            if (d && "function" === typeof d[b]) d[b]();
            Xm[c] = void 0
        }
    };
    Vm.uh = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Vm.Ih = function(a) {
        if (a === Vm.nc) return a;
        var b = We();
        Vm.sd[b] = a;
        return 'google_tag_manager["' + Je.K + '"].macro(' + b + ")"
    };
    Vm.Eh = function(a, b, c) {
        a instanceof Vm.Og && (a = a.m(Vm.Oh(b, c)), b = ta);
        return {
            qh: a,
            onSuccess: b
        }
    };
    var Ym = ["input", "select", "textarea"],
        Zm = ["button", "hidden", "image", "reset", "submit"],
        $m = function(a) {
            var b = a.tagName.toLowerCase();
            return !Ca(Ym, function(c) {
                return c === b
            }) || "input" === b && Ca(Zm, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        an = function(a) {
            return a.form ? a.form.tagName ? a.form : I.getElementById(a.form) : rd(a, ["form"], 100)
        },
        bn = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if ($m(h)) {
                    if (h.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var nn = G.clearTimeout,
        on = G.setTimeout,
        V = function(a, b, c) {
            if (wh()) {
                b && J(b)
            } else return ed(a, b, c)
        },
        pn = function() {
            return new Date
        },
        qn = function() {
            return G.location.href
        },
        rn = function(a) {
            return je(me(a), "fragment")
        },
        sn = function(a) {
            return le(me(a))
        },
        tn = function(a, b) {
            return bf(a, b || 2)
        },
        un = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Nm(a)) : d = Nm(a);
            return d
        },
        vn = function(a, b) {
            G[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === G[a] || c && !G[a]) && (G[a] = b);
            return G[a]
        },
        wn = function(a, b, c) {
            return tf(a, b, void 0 === c ? !0 : !!c)
        },
        xn = function(a, b, c) {
            return 0 === Cf(a, b, c)
        },
        yn = function(a, b) {
            if (wh()) {
                b && J(b)
            } else gd(a, b)
        },
        zn = function(a) {
            return !!Tl(a, "init", !1)
        },
        An = function(a) {
            Rl(a, "init", !0)
        },
        Bn = function(a) {
            var b = Pe + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            V(yh("https://", "http://", b))
        },
        Cn = function(a, b, c) {
            cj && (lb(a) || fj(c, b, a))
        };
    var Dn = Vm.Eh;

    function $n(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var ao = new Ea;

    function bo(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = ao.get(e);
            f || (f = new RegExp(b, d), ao.set(e, f));
            return f.test(a)
        } catch (h) {
            return !1
        }
    }

    function co(a, b) {
        function c(h) {
            var k = me(h),
                l = je(k, "protocol"),
                n = je(k, "host", !0),
                p = je(k, "port"),
                q = je(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function eo(a) {
        return fo(a) ? 1 : 0
    }

    function fo(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && wa(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = B(a, {});
                B({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (eo(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var h = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < h.length; k++)
                                if (b[h[k]]) {
                                    f = b[h[k]](c);
                                    break a
                                }
                        } catch (n) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return $n(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= Ba(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return bo(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return co(b, c)
        }
        return !1
    };
    var go = encodeURI,
        Y = encodeURIComponent,
        ho = hd;
    var io = function(a, b) {
        if (!a) return !1;
        var c = je(me(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var jo = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var tp = {};
    tp[E.cc] = "";
    tp[E.ia] = "";
    tp[E.Aa] = "";
    tp[E.aa] = "auto";
    tp[E.Ra] = "/";
    tp[E.qa] = 63072E3;
    tp[E.Cb] = 30;
    tp[E.jc] = 1E4;
    tp[E.Bb] = !0;
    var up = function(a, b, c, d, e) {
        this.m = a;
        this.L = b;
        this.o = c;
        this.J = d.eventModel;
        this.Ng = d.containerConfig;
        this.Te = d;
        this.W = d.getWithConfig(E.hb) ? 1 : 7;
        this.H = e;
        this.da = this.ld = this.bf = this.C = this.Ve = this.Xe = this.Zb = !1;
        this.Va = 0;
        this.qd = this.ab = !1;
        this.rd = void 0;
        this.$a = 0;
        this.Se = this.Ue = this.Ze = this.od = this.nd = void 0
    };
    g = up.prototype;
    g.Da = function(a, b) {
        void 0 === this.s(a) && (this.J[a] =
            b)
    };
    g.Kf = function(a, b) {
        b <= this.W && (this.J[E.hb] = a, this.W = b)
    };
    g.s = function(a) {
        return void 0 !== this.J[a] ? this.J[a] : void 0 !== this.Te.getWithConfig(a) ? this.Te.getWithConfig(a) : void 0 !== this.H[a] ? this.H[a] : tp[a]
    };
    g.getRemoteConfig = function(a) {
        return this.H[a]
    };
    g.Ec = function(a) {
        var b = this.H[E.Yc];
        if (b && void 0 !== b[a || this.L]) return b[a || this.L]
    };
    g.abort = function() {
        throw "ABORT";
    };
    g.qb = function() {
        return !(!0 !== this.s(E.zb) && "true" !== this.s(E.zb) || !this.s(E.Ba))
    };
    var vp = !1,
        wp = function(a) {
            var b = !1;
            return !(!ad.sendBeacon || a.ab || a.C || a.ld || a.da || b || vp)
        };
    var Ap = function() {
            var a = 0,
                b = 0;
            return {
                start: function() {
                    a = Oa()
                },
                stop: function() {
                    b = this.get()
                },
                get: function() {
                    var c = 0;
                    xp && yp && zp && (c = Oa() - a);
                    return c + b
                }
            }
        },
        Ep = function() {
            Bp += Cp();
            Dp = Ap();
            xp && yp && zp && Dp.start()
        },
        Dp = void 0,
        Bp = 0,
        xp = !1,
        yp = !1,
        zp = !1,
        Fp = void 0,
        Gp = void 0,
        Hp = function() {
            if (!Dp) {
                xp = I.hasFocus();
                yp = !I.hidden;
                zp = !0;
                var a = function(b, c, d) {
                    id(b, c, function(e) {
                        Dp.stop();
                        d(e);
                        xp && yp && zp && Dp.start()
                    })
                };
                a(G, "focus", function() {
                    xp = !0
                });
                a(G, "blur", function() {
                    xp = !1
                });
                a(G, "pageshow", function(b) {
                    zp = !0;
                    b.persisted &&
                        zc(56);
                    Gp && Gp()
                });
                a(G, "pagehide", function() {
                    zp = !1;
                    Fp && Fp()
                });
                a(I, "visibilitychange", function() {
                    yp = !I.hidden
                });
                Ep();
                Bp = 0
            }
        },
        Cp = function() {
            return Dp && Dp.get() || 0
        };
    var Ip = function(a) {
        ra("GA4_EVENT", a)
    };
    var Kp = function(a) {
            return !a || Jp.test(a) || 0 <= Ba(E.Eg, a)
        },
        Lp = function(a) {
            var b = a[E.Fe];
            if (b) return b;
            var c = a[E.mb];
            if (m(c)) {
                if ("function" === typeof URL) try {
                    return (new URL(c)).pathname
                } catch (e) {
                    return
                }
                var d = me(c);
                return d.hostname ? je(d, "path") : void 0
            }
        },
        Mp = function(a, b, c) {
            if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name,
                        e = b[d];
                    return e
            }
        },
        Np = function(a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var h = f.edit_param.param_name,
                        k = Mp(a, b, f.edit_param.param_value),
                        l;
                    if (k) {
                        var n = Number(k);
                        l = isNaN(n) ? k : n
                    } else l = k;
                    b[h] = l
                } else f.delete_param && delete b[f.delete_param.param_name]
            }
        },
        Op = function(a, b) {
            var c = b.values || [],
                d = Mp(a.L, a.J, c[0]),
                e = Mp(a.L, a.J, c[1]),
                f = b.type;
            if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f) d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() : e;
            var h = !1;
            switch (f) {
                case "eq":
                case "eqi":
                    h = String(d) == String(e);
                    break;
                case "sw":
                case "swi":
                    h = 0 == String(d).indexOf(String(e));
                    break;
                case "ew":
                case "ewi":
                    h = $n(d, e);
                    break;
                case "cn":
                case "cni":
                    h = 0 <= String(d).indexOf(String(e));
                    break;
                case "lt":
                    h = Number(d) < Number(e);
                    break;
                case "le":
                    h = Number(d) <= Number(e);
                    break;
                case "gt":
                    h = Number(d) > Number(e);
                    break;
                case "ge":
                    h = Number(d) >= Number(e);
                    break;
                case "re":
                case "rei":
                    h = bo(d, e, "rei" === f)
            }
            return !!b.negate !== h
        },
        Pp = function(a, b) {
            var c = b.event_name_predicate;
            if (c && !Op(a, c)) return !1;
            var d = b.conditions || [];
            if (0 === d.length) return !0;
            for (var e = 0; e < d.length; e++) {
                for (var f = d[e].predicates || [], h = !0, k = 0; k < f.length; k++)
                    if (!Op(a, f[k])) {
                        h = !1;
                        break
                    }
                if (h) return !0
            }
            return !1
        },
        Jp = /^(_|ga_|google_|gtag\.|firebase_).*$/,
        Qp = !1;
    var Rp = !1;
    Rp = !0;

    function Sp() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var Tp = function() {
            var a = Sp();
            a.hid = a.hid || Da();
            return a.hid
        },
        Up = function(a, b) {
            var c = Sp();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Yp = function(a, b) {
            var c = Vp(b),
                d = String(b.s(E.aa)),
                e = String(b.s(E.Ra)),
                f = Number(b.s(E.qa)),
                h = b.s(E.yb),
                k = {
                    Ha: E.D,
                    domain: d,
                    path: e,
                    expires: f ? new Date(Oa() + 1E3 * f) : void 0,
                    flags: String(b.s(E.Aa))
                };
            if (!1 === h && Wp(b) === a) return !0;
            var l = Vf(a, Xp[0], d, e);
            return 1 !== Cf(c, l, k)
        },
        Wp = function(a) {
            var b = Vp(a),
                c = String(a.s(E.aa)),
                d = String(a.s(E.Ra)),
                e = Uf(b, c, d, Xp, E.D);
            if (!e) {
                var f = String(a.s(E.cc));
                f && f != b && (e = Uf(f, c, d, Xp, E.D))
            }
            return e
        },
        Vp = function(a) {
            return String(a.s(E.ia)) + "_ga"
        },
        Xp = ["GA1"];
    var aq = function(a, b) {
            var c = Zp(b),
                d = String(b.s(E.aa)),
                e = String(b.s(E.Ra)),
                f = Number(b.s(E.qa)),
                h = Vf(a, $p[0], d, e),
                k = {
                    Ha: E.D,
                    domain: d,
                    path: e,
                    expires: f ? new Date(Oa() + 1E3 * f) : void 0,
                    flags: String(b.s(E.Aa))
                };
            return 1 !== Cf(c, h, k)
        },
        bq = function(a) {
            var b = Zp(a),
                c = String(a.s(E.aa)),
                d = String(a.s(E.Ra));
            return Uf(b, c, d, $p, E.D)
        },
        $p = ["GS1"],
        Zp = function(a) {
            return String(a.s(E.ia)) + "_ga_" + a.m.substr(2)
        },
        cq = function(a) {
            var b;
            var c = a.J[E.kc],
                d = a.J[E.gd];
            b = c && d ? [c, d, Ia(a.J[E.fd]), a.o, a.Va].join(".") : void 0;
            return b
        };
    var dq = function(a) {
            var b = a.s(E.ra),
                c = a.getRemoteConfig(E.ra);
            if (c === b) return c;
            var d = B(b);
            c && c[E.I] && (d[E.I] = (d[E.I] || []).concat(c[E.I]));
            return d
        },
        eq = function(a, b) {
            var c = zg(!0);
            return "1" !== c._up ? {} : {
                clientId: c[a],
                Jf: c[b]
            }
        },
        fq = function(a, b, c) {
            var d = zg(!0),
                e = d[b];
            e && (a.Kf(e, 2), Yp(e, a));
            var f = d[c];
            f && aq(f, a);
            return !(!e || !f)
        },
        gq = !1,
        hq = !1;
    hq = !0;
    var iq = function(a) {
            if (hq) {
                var b =
                    dq(a) || {},
                    c = Vp(a),
                    d = Zp(a);
                Hg(b[E.jb], !!b[E.I]) && fq(a, c, d) && (gq = !0);
                b[E.I] && Eg(function() {
                    var e = {},
                        f = Wp(a);
                    f && (e[c] = f);
                    var h = bq(a);
                    h && (e[d] = h);
                    return e
                }, b[E.I], b[E.lb], !!b[E.kb])
            }
        },
        kq = function(a) {
            if (!a.s(E.Ma)) return {};
            var b = Vp(a),
                c = Zp(a);
            Fg(function() {
                var d;
                if (N("analytics_storage")) d = {};
                else {
                    var e = {};
                    d = (e._up = "1", e[b] = a.J[E.hb], e[c] = cq(a), e)
                }
                return d
            }, 1);
            if (!N("analytics_storage") && jq()) return eq(b, c);
            return {}
        },
        jq = function() {
            var a = ie(G.location, "host"),
                b = ie(me(I.referrer), "host");
            return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        };
    var lq = function() {
        var a = Oa(),
            b = a + 864E5,
            c = 20,
            d = 5E3;
        return function() {
            var e = Oa();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c) return !1;
            d--;
            c--;
            return !0
        }
    };
    var mq = !1;
    mq = !0;
    var nq = "" + Da(),
        oq = !1,
        pq = void 0;
    var rq = function(a, b) {
            Gd() && (a.gcs = Pd(), b.qb() && (Hd() && (a.gcd = "G1" + Ld(Ed)), b.Ue && (a.gcu = "1", a.gcut = qq[b.Se || ""])))
        },
        sq = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b) sq(a + "." + d, b[d], c);
            else c[a] = b;
            return c
        },
        tq = function(a) {
            var b = "https://www.google-analytics.com/g/collect";
            if (null != bd) {
                var c = wj(a.s(E.Ba), "/g/collect");
                if (c) return c
            }
            var d = !0;
            N(E.B) && N(E.D) || (d = !1);
            var e = !1 !== a.s(E.oa);
            e = !0;
            a.s(E.Ab) &&
                !a.s(E.hc) && e && !1 !== a.s(E.xb) && fl() && d && (b = "https://analytics.google.com/g/collect");
            return b
        },
        uq = {},
        qq = (uq[E.B] = "1", uq[E.D] = "2", uq),
        vq = {};
    vq[E.Bg] = "tid";
    vq[E.hb] = "cid";
    vq[E.ib] = "ul";
    vq[E.Zc] = "_fid";
    vq[E.Le] = "tt";
    vq[E.bd] = "ir";
    var wq = {};
    wq[E.kc] = "sid";
    wq[E.gd] = "sct";
    wq[E.fd] = "seg";
    wq[E.mb] = "dl";
    wq[E.La] = "dr";
    wq[E.dd] = "dt";
    wq[E.ba] = "cu";
    wq[E.Eb] = "uid";
    var xq = function(a, b) {
        function c(u, v) {
            if (void 0 !== v && -1 == E.Cg.indexOf(u)) {
                null === v && (v = "");
                var x;
                "_" === u.charAt(0) ? d[u] = ec(v, 300) : vq[u] ? (x = vq[u], d[x] = ec(v, 300)) : wq[u] ? (x = wq[u], f[x] = ec(v, 300)) : n(u, v) || l(u, v)
            }
        }
        var d = {},
            e = {},
            f = {};
        d.v = "2";
        d.tid = a.m;
        d.gtm = Nj();
        d._p = Tp();
        a.rd && (d.sr = a.rd);
        a.da && (d._gaz = 1);
        rq(d, a);
        a.Ze && (d.gtm_up = "1");
        e.en = ec(a.L, 40);
        a.Zb && (e._fv = a.Xe ? 2 : 1);
        a.Ve && (e._nsi = 1);
        a.C && (e._ss = a.bf ? 2 : 1);
        a.ab && (e._c = 1);
        0 < a.$a && (e._et = a.$a);
        if (a.qd) {
            var h = a.s(E.X);
            if (wa(h))
                for (var k = 0; k < h.length && 200 > k; k++) e["pr" + (k + 1)] = ic(h[k])
        }
        a.nd && (e._eu = a.nd);
        for (var l = function(u, v) {
                u = ec(u, 40);
                var x = "ep." + u,
                    z = "epn." + u;
                u = va(v) ? z : x;
                var w = va(v) ? x : z;
                e.hasOwnProperty(w) && delete e[w];
                e[u] = ec(v, 100)
            }, n = function(u, v) {
                var x = u.split(".");
                if (u === E.jd && "object" !== typeof v) return l(u, v), !0;
                if (x[0] ===
                    E.jd) {
                    if ((1 < x.length || "object" === typeof v) && a.qb()) {
                        var z = sq(u, v);
                        Ga(z, function(w, y) {
                            return void l(w, y)
                        })
                    }
                    return !0
                }
                return !1
            }, p = 0; p < E.Ne.length; ++p) {
            var q = E.Ne[p];
            c(q, a.s(q))
        }
        a.qd && c(E.ba, a.s(E.ba));
        Ga(a.Ng, c);
        Ga(a.J, c);
        var r = a.s(E.Ca) || {};
        !1 !== a.s(E.oa) && el() || (r._npa = "1");
        Ga(r, function(u, v) {
            if (b[u] !== v) {
                if (u !== E.Eb || f.uid) {
                    var x = (va(v) ? "upn." : "up.") + ec(u, 24);
                    e[x] = ec(v, 36)
                } else f.uid = ec(v, 36);
                b[u] =
                    v
            }
        });
        var t = !1;
        return kc.call(this, {
            Ga: d,
            Xa: f,
            J: e
        }, tq(a), t) || this
    };
    na(xq, kc);
    var yq = function(a) {
            var b = me(a),
                c = b.search;
            return b.protocol + "//" + b.hostname + b.pathname + (c ? c + "&richsstsse" : "?richsstsse")
        },
        zq = function(a, b) {};
    var Cq = function(a, b, c) {
            var d = a + "?" + b;
            Aq && 0 !== d.indexOf("https://www.google-analytics.com/g/collect") && 0 !== d.indexOf("https://analytics.google.com/g/collect") && !vp ? zq(d, c) : Bq(a, b, c)
        },
        Dq = function(a) {
            return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0
        },
        Aq = !1;
    var Eq = function() {
        this.C = 1;
        this.H = {};
        this.m = new lc;
        this.o = -1
    };
    Eq.prototype.add = function(a) {
        var b = this,
            c;
        try {
            c = new xq(a, this.H)
        } catch (h) {
            a.abort()
        }
        var d = wp(a);
        d && this.m.C(c) || this.flush();
        if (d && this.m.add(c)) {
            var e = 5E3;
            0 > this.o && (this.o = G.setTimeout(function() {
                return b.flush()
            }, e))
        } else {
            var f = nc(c, this.C++);
            Cq(c.o, f.Nd, f.body);
            Fq(c, a.ld, a.da, String(a.s(E.$c)))
        }
    };
    Eq.prototype.flush = function() {
        if (this.m.events.length) {
            var a = oc(this.m, this.C++);
            Cq(this.m.m, a.Nd, a.body);
            this.m = new lc;
            0 <= this.o && (G.clearTimeout(this.o), this.o = -1)
        }
    };
    var Fq = function(a, b, c, d) {
            function e(k) {
                f.push(k + "=" + encodeURIComponent("" + a.Ga[k]))
            }
            if (b || c) {
                var f = [];
                e("tid");
                e("cid");
                e("gtm");
                f.push("aip=1");
                a.Xa.uid && f.push("uid=" + encodeURIComponent("" + a.Xa.uid));
                b && (Bq("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")), $h("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
                if (c) {
                    f.push("z=" + Da());
                    var h = Dq(d);
                    h && hd(h + f.join("&"))
                }
            }
        },
        Bq = function(a, b,
            c) {
            var d = a + "?" + b;
            c ? ad.sendBeacon && ad.sendBeacon(d, c) : sd(d)
        };
    var Gq = window,
        Hq = document,
        Iq = function(a) {
            var b = Gq._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Gq["ga-disable-" + a]) return !0;
            try {
                var c = Gq.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = pf("AMP_TOKEN", String(Hq.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Hq.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Jq = {};
    var Kq = function(a, b) {
        var c = E.B;
        N(c) || Qd(function() {
            b.Ue = !0;
            b.Se = c;
            a.hf(b)
        }, c)
    };
    Jq.Dg = "";
    var Lq = function(a, b) {
        this.ab = a;
        this.$a = b;
        this.W = new Eq;
        this.da = !1;
        this.o = this.C = this.m = void 0;
        this.H = !1
    };
    g = Lq.prototype;
    g.Jh = function(a, b, c) {
        var d = this;
        this.da || (this.da = !0, a !== E.fa && zc(24));
        if (c.eventModel[E.Fb]) {
            if ("_" === a.charAt(0)) return;
            a !== E.fa && a !== E.za && Kp(a) && zc(58);
            Mq(c)
        }
        var e = new up(this.ab, a, b, c, this.$a),
            f = [E.D],
            h = !1;
        (e.s(E.Ab) || h) && f.push(E.B);
        Rd(function() {
            d.o = e;
            try {
                Iq(e.m) && (zc(28), e.abort());
                var k = Jq.Dg.replace(/\s+/g, "").split(",");
                0 <= Ba(k, e.L) && (zc(33), e.abort());
                var l = e.Ec();
                l && l.blacklisted && (zc(34), e.abort());
                var n = I.location.protocol;
                "http:" != n && "https:" != n && (zc(29), e.abort());
                ad && "preview" == ad.loadPurpose && (zc(30), e.abort());
                var p = O.grl;
                p || (p = lq(), O.grl = p);
                p() || (zc(35), e.abort());
                e.$a = Cp();
                var q = d.Ff,
                    r;
                b: {
                    if (!e.s(E.Ma) || N(E.D) || 1 === e.W) break b;e.Ze = !0;
                }
                e.L === E.fa ? (e.s(E.Ma) && fh(["aw", "dc"]), iq(e), r = kq(e)) : r = {};
                q.call(d, r);
                e.L !== E.za && Hp();
                e.L == E.fa && (e.s(E.Bb) || e.abort(), e.L = E.ac);
                var t = d.m,
                    u = d.C,
                    v = bq(e);
                v || (v = u);
                var x = Ia(e.s(E.Cb)),
                    z;
                z = Ia(e.s(E.jc));
                var w;
                a: {
                    if (v) {
                        var y = v.split(".");
                        if (!(4 > y.length || 5 < y.length)) {
                            w = {
                                sessionId: y[0],
                                Vd: Number(y[1]),
                                Kc: !!Number(y[2]),
                                Id: Number(y[3]),
                                Va: Number(y[4] || 0)
                            };
                            break a
                        }
                    }
                    w = void 0
                }
                w && w.Va && (e.Va = Math.max(0,
                    w.Va - Math.max(0, e.o - w.Id)));
                var A = !1;
                w || (A = e.Zb = !0, w = {
                    sessionId: String(e.o),
                    Vd: 1,
                    Kc: !1,
                    Id: e.o
                });
                e.o > w.Id + 60 * x && (A = !0, w.sessionId = String(e.o), w.Vd++, w.Kc = !1);
                if (A) e.C = !0, e.$a = 0, Ep(), Bp = 0;
                else if (Bp + Cp() > z || e.L == E.ac) w.Kc = !0;
                e.Da(E.kc, w.sessionId);
                e.Da(E.gd, w.Vd);
                e.Da(E.fd, w.Kc ? 1 : 0);
                var C = e.s(E.hb),
                    F = e.W;
                C || (C = Wp(e), F = 3);
                C || (C = t, F = 4);
                if (!C) {
                    var D = N(E.D),
                        H = Sp();
                    C = !H.from_cookie || D ? H.vid : void 0;
                    F = 5
                }
                C ? C = "" + C : (e.Zb = e.Ve = !0, C = Rf(), F = 6);
                e.Kf(C, F);
                var M = "",
                    P = I.location;
                if (P) {
                    var R = P.pathname || "";
                    "/" != R.charAt(0) &&
                        (R = "/" + R);
                    M = P.protocol + "//" + P.hostname + R + P.search
                }
                e.Da(E.mb, M);
                var ba;
                a: {
                    var T = bf("gtm.gtagReferrer." + e.m);ba = T ? "" + T : I.referrer
                }
                var W = ba;
                W && e.Da(E.La, W);
                e.Da(E.dd, I.title);
                e.Da(E.ib, (ad.language ||
                    "").toLowerCase());
                var ha = G.screen,
                    xa = ha ? ha.width : 0,
                    ya = ha ? ha.height : 0;
                e.rd = xa + "x" + ya;
                var K = !1 !== e.s(E.oa);
                K = !0;
                if (K && !1 !== e.s(E.xb) && fl() && N(E.B)) {
                    var da = e.s(E.Ab),
                        za = e.s(E.hc);
                    e.C && (e.ld = !!da);
                    da && !za && 0 === e.Va && (e.Va = 60, e.da = !0)
                }
                Nq(e);
                e.qd = 0 <= E.Pe.indexOf(e.L);
                for (var Na = e.s(E.cd) || [], Xa = 0; Xa < Na.length; Xa++) {
                    var Aa = Na[Xa];
                    if (Aa.rule_result) {
                        e.Da(E.Le,
                            Aa.traffic_type);
                        Ip(3);
                        break
                    }
                }
                if (void 0 === e.s(E.bd)) {
                    var Fb = e.s(E.ic),
                        eb, fb;
                    a: {
                        if (gq) {
                            var ld = dq(e) || {};
                            if (ld && ld[E.I])
                                for (var Ef = je(me(e.s(E.La)), "host", !0), ma = ld[E.I], U = 0; U < ma.length; U++)
                                    if (ma[U] instanceof RegExp) {
                                        if (ma[U].test(Ef)) {
                                            fb = !0;
                                            break a
                                        }
                                    } else if (0 <= Ef.indexOf(ma[U])) {
                                fb = !0;
                                break a
                            }
                        }
                        fb = !1
                    }
                    var Ta;
                    if (!(Ta = fb))
                        if (mq) Ta = !1;
                        else {
                            var Lc = je(me(e.s(E.La)), "host", !0),
                                yb;
                            var hb = String(e.s(E.aa));
                            if ("none" !== hb)
                                if ("auto" !== hb) yb = hb;
                                else {
                                    if (!oq) {
                                        for (var ib = String(e.s(E.Ra)), Q = zf(), Ka = 0; Ka < Q.length; Ka++)
                                            if ("none" !== Q[Ka]) {
                                                var Ua = String(e.s(E.ia)) + "_ga_autodomain";
                                                if (0 === Cf(Ua, nq, {
                                                        Ha: E.D,
                                                        domain: Q[Ka],
                                                        path: ib
                                                    })) {
                                                    Cf(Ua, void 0, {
                                                        Ha: E.D,
                                                        domain: Q[Ka],
                                                        path: ib
                                                    });
                                                    pq = Q[Ka];
                                                    break
                                                }
                                            }
                                        oq = !0
                                    }
                                    yb = pq
                                }
                            else yb = void 0;
                            var Mc = yb;
                            Ta = Mc ? 0 <= Lc.indexOf(Mc) : !1
                        }
                    if (!(eb = Ta)) {
                        var Nc;
                        if (Nc = Fb) a: {
                            for (var md = Fb.include_conditions || [], nd = 0; nd < md.length; nd++)
                                if (md[nd].test(e.s(E.La))) {
                                    Nc = !0;
                                    break a
                                }
                            Nc = !1
                        }
                        eb = Nc
                    }
                    eb && (e.Da(E.bd, 1),
                        Ip(4))
                }
                if (e.L == E.za) {
                    var Ff = e.s(E.Ka);
                    e.s(E.Ja)(e.s(Ff));
                    e.abort()
                }
                if (e.J[E.vc]) delete e.J[E.vc];
                else {
                    var Pa = e.s(E.Vc);
                    if (Pa) {
                        for (var $a = Pa.edit_rules || [], Va = 0; Va < $a.length; Va++) a: {
                            var Qa = $a[Va];
                            if (Pp(e, Qa)) {
                                if (Qa.new_event_name) {
                                    var dc = "string" === typeof Qa.new_event_name ? String(Qa.new_event_name) : Mp(e.L, e.J, Qa.new_event_name);
                                    if (Kp(dc)) break a;
                                    e.L = String(dc)
                                }
                                Np(e.L, e.J, Qa);
                                if (Rp) {
                                    e.J[E.vc] = !0;
                                    if (Qp) {
                                        var ke = e.L,
                                            Gf = e.J,
                                            Uq = e.m;
                                        Dl().insert("event", [Gf, ke], Uq)
                                    } else Gl(e.L, e.J, e.m, !0);
                                    Ip(2);
                                    e.abort()
                                } else Ip(2)
                            }
                        }
                        for (var zm =
                                Pa.synthesis_rules || [], ji = 0; ji < zm.length; ji++) {
                            var Hf = zm[ji];
                            if (Pp(e, Hf)) {
                                var If = Hf.new_event_name;
                                if (!Kp(If)) {
                                    var Jf = Hf.merge_source_event_params ? B(e.J) : {};
                                    Jf[E.vc] = !0;
                                    Np(If, Jf, Hf);
                                    if (Qp) {
                                        var Vq = If,
                                            Wq = Jf,
                                            Xq = e.m;
                                        Dl().insert("event", [Wq, Vq], Xq)
                                    } else Gl(If, Jf, e.m, !0);
                                    Ip(1)
                                }
                            }
                        }
                    }
                }
                var ki = e.J[E.kd];
                if (wa(ki))
                    for (var li = 0; li < ki.length; li++) Ip(ki[li]);
                var Am = sa("GA4_EVENT");
                Am && (e.nd = Am);
                var Yq = d.Ff,
                    Bm = d.m,
                    mi;
                var ni = cq(e);
                ni ? (aq(ni, e) || (zc(25), e.abort()), mi = ni) : mi = void 0;
                var Zq = mi,
                    Kf;
                a: {
                    var pc = e.J[E.hb];
                    if (Bm && pc === Bm) {
                        Kf = pc;
                        break a
                    }
                    pc ? (pc = "" + pc, Yp(pc, e) || (zc(31), e.abort()), Up(pc, N(E.D)), Kf = pc) : (zc(32), e.abort(), Kf = "")
                }
                Yq.call(d, {
                    clientId: Kf,
                    Jf: Zq
                });
                d.Wh();
                Ep();
                d.hf(e);
                c.onSuccess()
            } catch (dr) {
                c.onFailure()
            }
            delete qa.GA4_EVENT
        }, f)
    };
    g.hf = function(a) {
        this.W.add(a)
    };
    g.Ff = function(a) {
        var b = a.clientId,
            c = a.Jf;
        b && c && (this.m = b, this.C = c)
    };
    g.flush = function() {
        this.W.flush()
    };
    g.Wh = function() {
        var a = this;
        if (!this.H) {
            var b = N(E.D);
            Id([E.D], function() {
                var c = N(E.D);
                if (b ^ c && a.o && a.C && a.m) {
                    if (c) {
                        var d = Wp(a.o);
                        d ? (a.m = d, a.C = bq(a.o)) : (Yp(a.m, a.o), aq(a.C, a.o), Up(a.m, !0))
                    } else a.C = void 0, a.m = void 0;
                    b = c
                }
            });
            this.H = !0
        }
    };
    var Nq = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.ab = b(a.Ec());
        a.Zb && (a.Xe = b(a.Ec("first_visit")));
        a.C && (a.bf = b(a.Ec("session_start")))
    };

    function Mq(a) {
        delete a.eventModel[E.Fb];
        Oq(a.eventModel)
    }
    var Oq = function(a) {
        Ga(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[E.Ca] || {};
        Ga(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Pq = function(a) {
            if ("prerender" == I.visibilityState) return !1;
            a();
            return !0
        },
        Qq = function(a) {
            if (!Pq(a)) {
                var b = !1,
                    c = function() {
                        !b && Pq(a) && (b = !0, jd(I, "visibilitychange", c), zc(55))
                    };
                id(I, "visibilitychange", c);
                zc(54)
            }
        };
    var Rq = function(a, b, c) {
            Gl(b, c, a)
        },
        Sq = function(a, b, c) {
            Gl(b, c, a, !0)
        },
        $q = function(a, b) {
            var c = new Lq(a, b);
            Qq(function() {
                Tq(a, c)
            });
        };

    function Tq(a, b) {
        Fl(a, function(c, d, e, f) {
            b.Jh(d, e, f)
        }), Fp = function() {
            Dl().flush();
            1E3 <= Cp() && ad.sendBeacon && Rq(a, E.me, {});
            vp = !0;
            b.flush();
            Gp = function() {
                vp = !1;
                Gp = void 0
            }
        };
    }
    var Z = {
        g: {}
    };
    Z.g.ehl = ["google"],
        function() {
            function a(l) {
                return l.target && l.target.location && l.target.location.href ? l.target.location.href : qn()
            }

            function b(l, n) {
                id(l, "hashchange", function(p) {
                    var q = a(p);
                    n({
                        source: "hashchange",
                        state: null,
                        url: sn(q),
                        V: rn(q)
                    })
                })
            }

            function c(l, n) {
                id(l, "popstate", function(p) {
                    var q = a(p);
                    n({
                        source: "popstate",
                        state: p.state,
                        url: sn(q),
                        V: rn(q)
                    })
                })
            }

            function d(l, n, p) {
                var q = n.history,
                    r = q[l];
                if (ua(r)) try {
                    q[l] = function(t, u, v) {
                        r.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: l,
                            state: t,
                            url: sn(qn()),
                            V: rn(qn())
                        })
                    }
                } catch (t) {}
            }

            function e() {
                var l = {
                    source: null,
                    state: X("history").state || null,
                    url: sn(qn()),
                    V: rn(qn())
                };
                return function(n, p) {
                    var q = l,
                        r = {};
                    r[q.source] = !0;
                    r[n.source] = !0;
                    if (!r.popstate || !r.hashchange || q.V != n.V) {
                        var t = {
                            event: "gtm.historyChange-v2",
                            "gtm.historyChangeSource": n.source,
                            "gtm.oldUrlFragment": l.V,
                            "gtm.newUrlFragment": n.V,
                            "gtm.oldHistoryState": l.state,
                            "gtm.newHistoryState": n.state,
                            "gtm.oldUrl": l.url,
                            "gtm.newUrl": n.url,
                            "gtm.triggers": p.join(",")
                        };
                        l = n;
                        un(t)
                    }
                }
            }

            function f(l, n) {
                var p = "" +
                    n;
                if (h[p]) h[p].push(l);
                else {
                    var q = [l];
                    h[p] = q;
                    var r = e(),
                        t = -1;
                    k.push(function(u) {
                        0 <= t && nn(t);
                        n ? t = on(function() {
                            r(u, q);
                            t = -1
                        }, n) : r(u, q)
                    })
                }
            }
            var h = {},
                k = [];
            (function(l) {
                Z.__ehl = l;
                Z.__ehl.h = "ehl";
                Z.__ehl.i = !0;
                Z.__ehl.priorityOverride = 0
            })(function(l) {
                var n = X("self"),
                    p = l.vtp_uniqueTriggerId || "0",
                    q = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
                0 > q ? q = 0 : isNaN(q) && (q = 1E3);
                if (zn("ehl")) {
                    var r = Tl("ehl", "reg");
                    r ? (r(p, q), J(l.vtp_gtmOnSuccess)) :
                        J(l.vtp_gtmOnFailure)
                } else {
                    var t = function(u) {
                        for (var v = 0; v < k.length; v++) k[v](u)
                    };
                    b(n, t);
                    c(n, t);
                    d("pushState", n, t);
                    d("replaceState", n, t);
                    f(p, q);
                    Rl("ehl", "reg", f);
                    An("ehl");
                    J(l.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.g.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(l("horiz.pix")).length || Object.keys(l("horiz.pct")).length || Object.keys(l("vert.pix")).length || Object.keys(l("vert.pct")).length)
            }

            function b(w) {
                for (var y = [], A = w.split(","), C = 0; C < A.length; C++) {
                    var F = Number(A[C]);
                    if (isNaN(F)) return [];
                    p.test(A[C]) || y.push(F)
                }
                return y
            }

            function c() {
                var w = 0,
                    y = 0;
                return function() {
                    var A = Yd(),
                        C = A.height;
                    w = Math.max(v.scrollLeft + A.width, w);
                    y = Math.max(v.scrollTop + C, y);
                    return {
                        fh: w,
                        gh: y
                    }
                }
            }

            function d() {
                t = X("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                z = c()
            }

            function e(w, y, A, C) {
                var F = l(y),
                    D = {},
                    H;
                for (H in F) {
                    D.Za = H;
                    if (F.hasOwnProperty(D.Za)) {
                        var M = Number(D.Za);
                        w < M || (un({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": M,
                            "gtm.scrollUnits": A.toLowerCase(),
                            "gtm.scrollDirection": C,
                            "gtm.triggers": F[D.Za].join(",")
                        }), Sl("sdl", y, function(P) {
                            return function(R) {
                                delete R[P.Za];
                                return R
                            }
                        }(D), {}))
                    }
                    D = {
                        Za: D.Za
                    }
                }
            }

            function f() {
                var w = z(),
                    y = w.fh,
                    A = w.gh,
                    C = y / v.scrollWidth * 100,
                    F = A / v.scrollHeight * 100;
                e(y, "horiz.pix",
                    q.qc, r.Re);
                e(C, "horiz.pct", q.oc, r.Re);
                e(A, "vert.pix", q.qc, r.ff);
                e(F, "vert.pct", q.oc, r.ff);
                Rl("sdl", "pending", !1)
            }

            function h() {
                var w = 250,
                    y = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (w = 50, y = !0);
                var A = 0,
                    C = !1,
                    F = function() {
                        C ? A = on(F, w) : (A = 0, f(), zn("sdl") && !a() && (jd(t, "scroll", D), jd(t, "resize", D), Rl("sdl", "init", !1)));
                        C = !1
                    },
                    D = function() {
                        y && z();
                        A ? C = !0 : (A = on(F, w), Rl("sdl", "pending", !0))
                    };
                return D
            }

            function k(w, y, A) {
                if (y) {
                    var C = b(String(w));
                    Sl("sdl", A, function(F) {
                        for (var D = 0; D < C.length; D++) {
                            var H =
                                String(C[D]);
                            F.hasOwnProperty(H) || (F[H] = []);
                            F[H].push(y)
                        }
                        return F
                    }, {})
                }
            }

            function l(w) {
                return Tl("sdl", w, {})
            }

            function n(w) {
                J(w.vtp_gtmOnSuccess);
                var y = w.vtp_uniqueTriggerId,
                    A = w.vtp_horizontalThresholdsPixels,
                    C = w.vtp_horizontalThresholdsPercent,
                    F = w.vtp_verticalThresholdUnits,
                    D = w.vtp_verticalThresholdsPixels,
                    H = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                    case q.qc:
                        k(A, y, "horiz.pix");
                        break;
                    case q.oc:
                        k(C, y, "horiz.pct")
                }
                switch (F) {
                    case q.qc:
                        k(D, y, "vert.pix");
                        break;
                    case q.oc:
                        k(H,
                            y, "vert.pct")
                }
                zn("sdl") ? Tl("sdl", "pending") || (x || (d(), x = !0), J(function() {
                    return f()
                })) : (d(), x = !0, v && (An("sdl"), Rl("sdl", "pending", !0), J(function() {
                    f();
                    if (a()) {
                        var M = h();
                        id(t, "scroll", M);
                        id(t, "resize", M)
                    } else Rl("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    oc: "PERCENT",
                    qc: "PIXELS"
                },
                r = {
                    ff: "vertical",
                    Re: "horizontal"
                },
                t, u, v, x = !1,
                z;
            (function(w) {
                Z.__sdl = w;
                Z.__sdl.h = "sdl";
                Z.__sdl.i = !0;
                Z.__sdl.priorityOverride = 0
            })(function(w) {
                w.vtp_triggerStartOption ? n(w) : am(function() {
                    n(w)
                })
            })
        }();

    Z.g.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.h = "c";
                Z.__c.i = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                Cn(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.i = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(hf(a.vtp_gtmEventId, "event"));
                return b
            })
        }();

    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.i = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : tn("gtm.url", 1)) || qn();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return sn(String(c));
                var e = me(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? wa(k) ? n = k : n = String(k).replace(/\s+/g,
                        "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = je(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = je(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.i = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = tn(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Cn(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();




    Z.g.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return I.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var x = 0; x < p.length; x++)
                    if (0 <= u.indexOf("//" + p[x] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var x = u.getAttribute("src");
                if (b(x, "embed/")) {
                    if (0 < x.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var z = u.setAttribute,
                            w;
                        var y = -1 !== x.indexOf("?") ? "&" : "?";
                        if (-1 < x.indexOf("origin=")) w = x + y + "enablejsapi=1";
                        else {
                            if (!r) {
                                var A = X("document");
                                r = A.location.protocol + "//" + A.location.hostname;
                                A.location.port && (r += ":" + A.location.port)
                            }
                            w = x + y + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        z.call(u, "src", w);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.Xd) && (u.setAttribute("data-gtm-yt-inspected-" + v.Xd, "true"), c(u, v.wf))) {
                    u.id || (u.id = a());
                    var x = X("YT"),
                        z = x.get(u.id);
                    z || (z = new x.Player(u.id));
                    var w = f(z, v),
                        y = {},
                        A;
                    for (A in w) y.vb = A, w.hasOwnProperty(y.vb) && z.addEventListener(y.vb, function(C) {
                        return function(F) {
                            return w[C.vb](F.data)
                        }
                    }(y)), y = {
                        vb: y.vb
                    }
                }
            }

            function e(u) {
                J(function() {
                    function v() {
                        for (var z =
                                x.getElementsByTagName("iframe"), w = z.length, y = 0; y < w; y++) d(z[y], u)
                    }
                    var x = X("document");
                    v();
                    Wl(v)
                })
            }

            function f(u, v) {
                var x, z;

                function w() {
                    R = Xl(function() {
                        return {
                            url: L,
                            title: T,
                            rf: S,
                            dh: u.getCurrentTime(),
                            playbackRate: W
                        }
                    }, v.Xd, u.getIframe());
                    S = 0;
                    T = L = "";
                    W = 1;
                    return y
                }

                function y(K) {
                    switch (K) {
                        case q.PLAYING:
                            S = Math.round(u.getDuration());
                            L = u.getVideoUrl();
                            if (u.getVideoData) {
                                var da = u.getVideoData();
                                T = da ? da.title : ""
                            }
                            W = u.getPlaybackRate();
                            v.Yg ? un(R.createEvent("start")) : R.ud();
                            ba = l(v.Lh, v.Kh, u.getDuration());
                            return A(K);
                        default:
                            return y
                    }
                }

                function A() {
                    ha = u.getCurrentTime();
                    xa = pn().getTime();
                    R.Qh();
                    P();
                    return C
                }

                function C(K) {
                    var da;
                    switch (K) {
                        case q.ENDED:
                            return D(K);
                        case q.PAUSED:
                            da = "pause";
                        case q.BUFFERING:
                            var za = u.getCurrentTime() - ha;
                            da = 1 < Math.abs((pn().getTime() - xa) / 1E3 * W - za) ? "seek" : da || "buffering";
                            u.getCurrentTime() && (v.Xg ? un(R.createEvent(da)) : R.ud());
                            M();
                            return F;
                        case q.UNSTARTED:
                            return w(K);
                        default:
                            return C
                    }
                }

                function F(K) {
                    switch (K) {
                        case q.ENDED:
                            return D(K);
                        case q.PLAYING:
                            return A(K);
                        case q.UNSTARTED:
                            return w(K);
                        default:
                            return F
                    }
                }

                function D() {
                    for (; z;) {
                        var K = x;
                        nn(z);
                        K()
                    }
                    v.Wg && un(R.createEvent("complete", 1));
                    return w(q.UNSTARTED)
                }

                function H() {}

                function M() {
                    z && (nn(z), z = 0, x = H)
                }

                function P() {
                    if (ba.length && 0 !== W) {
                        var K = -1,
                            da;
                        do {
                            da = ba[0];
                            if (da.Wa > u.getDuration()) return;
                            K = (da.Wa - u.getCurrentTime()) / W;
                            if (0 > K && (ba.shift(), 0 === ba.length)) return
                        } while (0 > K);
                        x = function() {
                            z = 0;
                            x = H;
                            0 < ba.length && ba[0].Wa === da.Wa && (ba.shift(), un(R.createEvent("progress", da.Cf, da.Hf)));
                            P()
                        };
                        z = on(x, 1E3 * K)
                    }
                }
                var R, ba = [],
                    S, L, T, W, ha, xa, ya = w(q.UNSTARTED);
                z = 0;
                x = H;
                return {
                    onStateChange: function(K) {
                        ya = ya(K)
                    },
                    onPlaybackRateChange: function(K) {
                        ha = u.getCurrentTime();
                        xa = pn().getTime();
                        R.ud();
                        W = K;
                        M();
                        P()
                    }
                }
            }

            function h(u) {
                for (var v = u.split(","), x = v.length, z = [], w = 0; w < x; w++) {
                    var y = parseInt(v[w], 10);
                    isNaN(y) || 100 < y || 0 > y || z.push(y / 100)
                }
                z.sort(function(A, C) {
                    return A - C
                });
                return z
            }

            function k(u) {
                for (var v = u.split(","), x = v.length, z = [], w = 0; w < x; w++) {
                    var y = parseInt(v[w], 10);
                    isNaN(y) || 0 > y || z.push(y)
                }
                z.sort(function(A, C) {
                    return A - C
                });
                return z
            }

            function l(u, v, x) {
                var z = u.map(function(A) {
                    return {
                        Wa: A,
                        Hf: A,
                        Cf: void 0
                    }
                });
                if (!v.length) return z;
                var w = v.map(function(A) {
                    return {
                        Wa: A * x,
                        Hf: void 0,
                        Cf: A
                    }
                });
                if (!z.length) return w;
                var y = z.concat(w);
                y.sort(function(A, C) {
                    return A.Wa - C.Wa
                });
                return y
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    x = !!u.vtp_captureComplete,
                    z = !!u.vtp_capturePause,
                    w = h(u.vtp_progressThresholdsPercent + ""),
                    y = k(u.vtp_progressThresholdsTimeInSeconds + ""),
                    A = !!u.vtp_fixMissingApi;
                if (v || x || z || w.length || y.length) {
                    var C = {
                            Yg: v,
                            Wg: x,
                            Xg: z,
                            Kh: w,
                            Lh: y,
                            wf: A,
                            Xd: void 0 === u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        F = X("YT"),
                        D = function() {
                            e(C)
                        };
                    J(u.vtp_gtmOnSuccess);
                    if (F) F.ready && F.ready(D);
                    else {
                        var H = X("onYouTubeIframeAPIReady");
                        vn("onYouTubeIframeAPIReady", function() {
                            H && H();
                            D()
                        });
                        J(function() {
                            for (var M = X("document"), P = M.getElementsByTagName("script"), R = P.length, ba = 0; ba < R; ba++) {
                                var S = P[ba].getAttribute("src");
                                if (b(S, "iframe_api") || b(S, "player_api")) return
                            }
                            for (var L = M.getElementsByTagName("iframe"), T = L.length, W = 0; W < T; W++)
                                if (!t && c(L[W], C.wf)) {
                                    V("https://www.youtube.com/iframe_api");
                                    t = !0;
                                    break
                                }
                        })
                    }
                } else J(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, t = !1;
            (function(u) {
                Z.__ytl = u;
                Z.__ytl.h = "ytl";
                Z.__ytl.i = !0;
                Z.__ytl.priorityOverride = 0
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : fi(function() {
                    n(u)
                })
            })
        }();




    Z.g.aev = ["google"],
        function() {
            function a(t, u, v) {
                var x = t || hf(u, "gtm");
                if (x) return x[v]
            }

            function b(t, u, v, x, z) {
                z || (z = "element");
                var w = u + "." + v,
                    y;
                if (p.hasOwnProperty(w)) y = p[w];
                else {
                    var A = a(t, u, z);
                    if (A && (y = x(A), p[w] = y, q.push(w), 35 < q.length)) {
                        var C = q.shift();
                        delete p[C]
                    }
                }
                return y
            }

            function c(t, u, v, x) {
                var z = a(t, u, r[v]);
                return void 0 !== z ? z : x
            }

            function d(t, u) {
                if (!t) return !1;
                var v = e(qn());
                wa(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var x = [v], z = 0; z < u.length; z++) {
                    var w = u[z];
                    if (w.hasOwnProperty("is_regex"))
                        if (w.is_regex) try {
                            w =
                                new RegExp(w.domain)
                        } catch (A) {
                            continue
                        } else w = w.domain;
                    if (w instanceof RegExp) {
                        if (w.test(t)) return !1
                    } else {
                        var y = w;
                        if (0 != y.length) {
                            if (0 <= e(t).indexOf(y)) return !1;
                            x.push(e(y))
                        }
                    }
                }
                return !io(t, x)
            }

            function e(t) {
                n.test(t) || (t = "http://" + t);
                return je(me(t), "HOST", !0)
            }

            function f(t, u, v, x) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return b(u, v, "FORM." + t, h, "formSubmitElement") || x;
                    case "LENGTH":
                        var z = b(u, v, "FORM." + t, k);
                        return void 0 === z ? x : z;
                    case "INTERACTED_FIELD_ID":
                        return l(u, v, "id", x);
                    case "INTERACTED_FIELD_NAME":
                        return l(u,
                            v, "name", x);
                    case "INTERACTED_FIELD_TYPE":
                        return l(u, v, "type", x);
                    case "INTERACTED_FIELD_POSITION":
                        var w = a(u, v, "interactedFormFieldPosition");
                        return void 0 === w ? x : w;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = a(u, v, "interactSequenceNumber");
                        return void 0 === y ? x : y;
                    default:
                        return x
                }
            }

            function h(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return kd(t, "value");
                    case "button":
                        return pd(t);
                    default:
                        return null
                }
            }

            function k(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var u = 0, v = 0; v < t.elements.length; v++) $m(t.elements[v]) &&
                        u++;
                    return u
                }
            }

            function l(t, u, v, x) {
                var z = a(t, u, "interactedFormField");
                return z && kd(z, v) || x
            }
            var n = /^https?:\/\//i,
                p = {},
                q = [],
                r = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.h = "aev";
                Z.__aev.i = !0;
                Z.__aev.priorityOverride =
                    0
            })(function(t) {
                var u = t.vtp_gtmEventId,
                    v = t.vtp_defaultValue,
                    x = t.vtp_varType,
                    z;
                switch (x) {
                    case "TAG_NAME":
                        var w = a(z, u, "element");
                        return w && w.tagName || v;
                    case "TEXT":
                        return b(z, u, x, pd) || v;
                    case "URL":
                        var y;
                        a: {
                            var A = String(a(z, u, "elementUrl") || v || ""),
                                C = me(A),
                                F = String(t.vtp_component || "URL");
                            switch (F) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y =
                                        d(A, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = je(C, F, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === t.vtp_attribute) D = c(z, u, x, v);
                        else {
                            var H = t.vtp_attribute,
                                M = a(z, u, "element");
                            D = M && kd(M, H) || v || ""
                        }
                        return D;
                    case "MD":
                        var P = t.vtp_mdValue,
                            R = b(z, u, "MD", jn);
                        return P && R ? mn(R, P) || v : R || v;
                    case "FORM":
                        return f(String(t.vtp_component || "SUBMIT_TEXT"), z, u, v);
                    default:
                        var ba = c(z, u, x, v);
                        Cn(ba, "aev", t.vtp_gtmEventId);
                        return ba
                }
            })
        }();

    Z.g.dlm = ["google"],
        function() {
            (function(a) {
                Z.__dlm = a;
                Z.__dlm.h = "dlm";
                Z.__dlm.i = !0;
                Z.__dlm.priorityOverride = 0
            })(function(a) {
                var b = jo(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite ? Ga(b, function(c, d) {
                    ef(c, d)
                }) : un(b);
                J(a.vtp_gtmOnSuccess)
            })
        }();
    Z.g.gct = ["google"],
        function() {
            function a(d) {
                for (var e = [], f = 0; f < d.length; f++) try {
                    e.push(new RegExp(d[f]))
                } catch (h) {}
                return e
            }

            function b(d) {
                return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
            }

            function c(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                    var h = d[f].matchValue,
                        k;
                    switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            k = "^" + b(h);
                            break;
                        case "ENDS_WITH":
                            k = b(h) + "$";
                            break;
                        case "EQUALS":
                            k = "^" + b(h) + "$";
                            break;
                        case "REGEX":
                            k = h;
                            break;
                        default:
                            k = b(h)
                    }
                    e.push(k)
                }
                return e
            }(function(d) {
                Z.__gct = d;
                Z.__gct.h = "gct";
                Z.__gct.i = !0;
                Z.__gct.priorityOverride =
                    0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[E.Cb] = d.vtp_sessionDuration);
                e[E.Yc] = d.vtp_eventSettings;
                e[E.Vc] = d.vtp_dynamicEventSettings;
                e[E.Ab] = 1 === d.vtp_googleSignals;
                e[E.$c] = d.vtp_foreignTld;
                e[E.hc] = 1 === d.vtp_restrictDomain;
                e[E.cd] = d.vtp_internalTrafficResults;
                var f = E.ra,
                    h = d.vtp_linker;
                h && h[E.I] && (h[E.I] = a(h[E.I]));
                e[f] = h;
                var k = E.ic,
                    l = d.vtp_referralExclusionDefinition;
                l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
                e[k] = l;
                var n, p = d.vtp_trackingId;
                n = Dl().getRemoteConfig(p);
                var q = n.referral_exclusion_conditions;
                if (q) {
                    var r = c(q);
                    e[E.ic] = {
                        include_conditions: a(r)
                    }
                }
                var t = n.cross_domain_conditions;
                if (t) {
                    var u = c(t),
                        v = {};
                    e[E.ra] = (v[E.I] = a(u), v[E.kb] = !0, v[E.jb] = !0, v[E.lb] = "query", v)
                }
                $q(d.vtp_trackingId, e);
                J(d.vtp_gtmOnSuccess)
            })
        }();

    Z.g.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.i = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? Sq : Rq)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();









    Z.g.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var h = f.target;
                        if (h && 3 !== f.which && !(f.th || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            h = rd(h, ["a", "area"], 100);
                            if (!h) return f.returnValue;
                            var k = f.defaultPrevented || !1 === f.returnValue,
                                l = Tl("lcl", k ? "nv.mwt" : "mwt", 0),
                                n;
                            n = k ? Tl("lcl", "nv.ids", []) : Tl("lcl", "ids", []);
                            if (n.length) {
                                var p = Pl(h, "gtm.linkClick", n);
                                if (b(f, h, c) && !k && l && h.href) {
                                    var q = !!Ca(String(td(h, "rel") || "").split(" "), function(u) {
                                        return "noreferrer" === u.toLowerCase()
                                    });
                                    q && zc(36);
                                    var r = X((td(h, "target") || "_self").substring(1)),
                                        t = !0;
                                    if (un(p, Om(function() {
                                            var u;
                                            if (u = t && r) {
                                                var v;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (z) {
                                                        if (!c.createEvent) {
                                                            v = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.th = !0;
                                                    f.target.dispatchEvent(x);
                                                    v = !0
                                                } else v = !1;
                                                u = !v
                                            }
                                            u && (r.location.href = td(h, "href"))
                                        }), l)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else un(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                id(c, "click", e, !1);
                id(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = td(d, "href"),
                    h = f.indexOf("#"),
                    k = td(d, "target");
                if (k && "_self" !== k && "_parent" !== k && "_top" !== k || 0 === h) return !1;
                if (0 < h) {
                    var l = sn(f),
                        n = sn(e.location);
                    return l !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.h = "lcl";
                Z.__lcl.i = !0;
                Z.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var h = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var k = function(n) {
                        return Math.max(f, n)
                    };
                    Sl("lcl", "mwt", k, 0);
                    e || Sl("lcl", "nv.mwt", k, 0)
                }
                var l = function(n) {
                    n.push(h);
                    return n
                };
                Sl("lcl", "ids", l, []);
                e || Sl("lcl", "nv.ids", l, []);
                zn("lcl") || (a(), An("lcl"));
                J(c.vtp_gtmOnSuccess)
            })
        }();


    var ar = {};
    ar.macro = function(a) {
        if (Vm.sd.hasOwnProperty(a)) return Vm.sd[a]
    }, ar.onHtmlSuccess = Vm.pf(!0), ar.onHtmlFailure = Vm.pf(!1);
    ar.dataLayer = cf;
    ar.callback = function(a) {
        Ue.hasOwnProperty(a) && ua(Ue[a]) && Ue[a]();
        delete Ue[a]
    };
    ar.bootstrap = 0;
    ar._spx = !1;

    function br() {
        O[Je.K] = ar;
        Wa(Ve, Z.g);
        Tb = Tb || Vm;
        Ub = bc
    }

    function cr() {
        ud.o().o();
        O = G.google_tag_manager = G.google_tag_manager || {};
        lk();
        Ig.enable_gbraid_cookie_write = !0;
        if (O[Je.K]) {
            var a = O.zones;
            a && a.unregisterChild(Je.K);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Mb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Pb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Ob.push(h[k]);
            for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var p = l[n], q = {}, r = 0; r < p.length; r++) q[p[r][0]] = Array.prototype.slice.call(p[r], 1);
                Nb.push(q)
            }
            Rb = Z;
            Sb = eo;
            br();
            Um();
            ai = !1;
            bi = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) di();
            else {
                id(I, "DOMContentLoaded", di);
                id(I, "readystatechange", di);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var t = !0;
                    try {
                        t = !G.frameElement
                    } catch (z) {}
                    t && ei()
                }
                id(G, "load", di)
            }
            Yl = !1;
            "complete" === I.readyState ? $l() : id(G, "load", $l);
            a: {
                if (!cj) break a;G.setInterval(bj,
                    864E5);
            }
            Se = (new Date).getTime();
            ar.bootstrap = Se;
        }
    }
    (function(a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = me(I.referrer);
                b = "cct.google" === ie(c, "host")
            }
            if (!b) {
                var d = tf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0, ed("https://cct.google/taggy/agent.js"))
        }
        var f = function() {
                var n = G["google.tagmanager.debugui2.queue"];
                n || (n = [], G["google.tagmanager.debugui2.queue"] = n, ed("https://www.googletagmanager.com/debug/bootstrap"));
                var p = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: bd,
                        containerProduct: "GTM",
                        debug: !1
                    }
                };
                p.data.resume = function() {
                    a()
                };
                p.data.containerProduct =
                    "OGT";
                Je.Uf && (p.data.initialPublish = !0);
                n.push(p)
            },
            h = "x" === je(G.location, "query", !1, void 0, "gtm_debug");
        if (!h && I.referrer) {
            var k = me(I.referrer);
            h = "tagassistant.google.com" === ie(k, "host")
        }
        if (!h) {
            var l = tf("__TAG_ASSISTANT");
            h = l.length && l[0].length
        }
        G.__TAG_ASSISTANT_API && (h = !0);
        h && bd ? f() : a()
    })(cr);

})()