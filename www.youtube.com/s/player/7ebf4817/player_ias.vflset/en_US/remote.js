(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.Fp(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Ega(a.B, b, c)
        },
        NAb = function(a) {
            if (a instanceof g.zt) return a;
            if ("function" == typeof a.Hk) return a.Hk(!1);
            if (g.ab(a)) {
                var b = 0,
                    c = new g.zt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.v2;
                        if (b in a) return g.At(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        OAb = function(a, b, c) {
            if (g.ab(a)) g.$b(a, b, c);
            else
                for (a = NAb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        PAb = function(a, b) {
            var c = [];
            OAb(b, function(d) {
                try {
                    var e = g.Pv.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.ula(e) && c.push(d)
            }, a);
            return c
        },
        QAb = function(a, b) {
            PAb(a, b).forEach(function(c) {
                g.Pv.prototype.remove.call(this, c)
            }, a)
        },
        RAb = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        SAb = function(a, b) {
            g.Fb(a, b) || a.push(b)
        },
        TAb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        UAb = function(a, b) {
            return g.ld(a, b)
        },
        VAb = function(a) {
            try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Ta.JSON) try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            return VAb(a)
        },
        WAb = function(a) {
            if (a.nm && "function" == typeof a.nm) return a.nm();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (g.ab(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.hd(a)
        },
        XAb = function(a) {
            if (a.An && "function" == typeof a.An) return a.An();
            if (!a.nm || "function" != typeof a.nm) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (g.ab(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.id(a)
                }
            }
        },
        YAb = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.ab(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = XAb(a), d = WAb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        ZAb = function(a, b, c, d) {
            var e = new g.Jo(null);
            a && g.Ko(e, a);
            b && g.Lo(e, b);
            c && g.Mo(e, c);
            d && (e.C = d);
            return e
        },
        $Ab = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Oc: 3,
                Nc: "channel_type"
            })
        },
        aBb = function(a, b) {
            a.j.Ni("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        bBb = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Oc: 3,
                Nc: "channel_type"
            })
        },
        cBb = function(a, b) {
            a.j.Ni("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        dBb = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Oc: 3,
                Nc: "channel_type"
            })
        },
        eBb = function(a, b) {
            a.j.Ni("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        fBb = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/channel/error", {
                Oc: 3,
                Nc: "channel_type"
            })
        },
        gBb = function(a, b) {
            a.j.Ni("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        hBb = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        iBb = function() {
            this.j = d8();
            this.j.Nh("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        mBb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Uv;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", jBb(this, a.capabilities || ""), kBb(this, a.compatibleSenderThemes || ""), lBb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        jBb = function(a, b) {
            a.capabilities.clear();
            g.Et(b.split(","), g.jb(UAb, nBb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        kBb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.Et(b.split(","), g.jb(UAb, oBb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        lBb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        pBb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        qBb = function(a) {
            return new e8(a)
        },
        rBb = function(a) {
            return Array.isArray(a) ? g.Rr(a, qBb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        sBb = function(a) {
            return Array.isArray(a) ? "[" + g.Rr(a, g8).join(",") + "]" : "null"
        },
        tBb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        uBb = function(a) {
            return g.Rr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        vBb = function(a, b) {
            return g.Db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Db(a, function(c) {
                return f8(c, b)
            })
        },
        wBb = function() {
            var a = (0, g.qC)();
            a && QAb(a, a.j.Hk(!0))
        },
        i8 = function() {
            var a = g.sC("yt-remote-connected-devices") || [];
            g.Wb(a);
            return a
        },
        xBb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Rr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        yBb = function(a) {
            g.rC("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (zBb) return zBb;
            var a = g.sC("yt-remote-device-id");
            a || (a = tBb(), g.rC("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Fb(b, d);) c++, d = a + "#" + c;
            return zBb = d
        },
        ABb = function() {
            var a = i8(),
                b = j8();
            g.uC() && g.Zb(a, b);
            a = xBb(a);
            if (0 == a.length) try {
                g.Rpa("remote_sid")
            } catch (c) {} else try {
                g.JB("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        BBb = function() {
            return g.sC("yt-remote-session-browser-channel")
        },
        CBb = function() {
            return g.sC("yt-remote-local-screens") || []
        },
        DBb = function() {
            g.rC("yt-remote-lounge-token-expiration", !0, 86400)
        },
        EBb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Rr(CBb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Rr(a, function(d) {
                    return d.loungeToken
                });
            g.Sr(c, function(d) {
                return !g.Fb(b, d)
            }) && DBb();
            g.rC("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.tC("yt-remote-session-screen-id"), g.tC("yt-remote-session-video-id"));
            ABb();
            a = i8();
            g.Hb(a, j8());
            yBb(a)
        },
        FBb = function() {
            if (!l8) {
                var a = g.bw();
                a && (l8 = new g.Mv(a))
            }
        },
        GBb = function() {
            FBb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.eE[a] = !0;
            var c = g.cE();
            c && c.publish.apply(c, arguments);
            g.eE[a] = !1
        },
        HBb = function() {},
        d8 = function() {
            if (!n8) {
                n8 = new g.Gg(new HBb);
                var a = g.zB("client_streamz_web_flush_count", -1); - 1 !== a && (n8.C = a)
            }
            return n8
        },
        IBb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        JBb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        KBb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? LBb(a.shift(), function() {
                o8(a)
            }) : MBb()
        },
        NBb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        LBb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Ze(d, g.Rw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        OBb = function() {
            var a = IBb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        MBb = function() {
            var a = KBb();
            a && a(!1, "No cast extension found")
        },
        QBb = function() {
            if (PBb) {
                var a = 2,
                    b = KBb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                LBb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", MBb, c)
            }
        },
        RBb = function() {
            QBb();
            var a = OBb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        TBb = function() {
            QBb();
            var a = OBb();
            a.push.apply(a, g.oa(SBb.map(NBb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.I.call(this);
            this.K = null != c ? (0, g.ib)(a, c) : a;
            this.Wi = b;
            this.G = (0, g.ib)(this.L3, this);
            this.j = !1;
            this.B = 0;
            this.C = this.kd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.I.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.Wi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.kd = null
        },
        UBb = function(a) {
            a.kd = g.Eg(function() {
                a.kd = null;
                a.j && !a.B && (a.j = !1, UBb(a))
            }, a.Wi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        VBb = function() {
            g.zb.call(this, "p")
        },
        WBb = function() {
            g.zb.call(this, "o")
        },
        YBb = function() {
            return XBb = XBb || new g.Kd
        },
        ZBb = function(a) {
            g.zb.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = YBb();
            b.dispatchEvent(new ZBb(b, a))
        },
        $Bb = function(a) {
            g.zb.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = YBb();
            b.dispatchEvent(new $Bb(b, a))
        },
        aCb = function(a, b, c, d) {
            g.zb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.uc = c;
            this.ac = d || 1;
            this.Za = new g.Kp(this);
            this.wb = 45E3;
            a = g.eS ? 125 : void 0;
            this.eb = new g.Dg(a);
            this.Ma = null;
            this.C = !1;
            this.Y = this.Ya = this.Z = this.Qa = this.Ba = this.Eb = this.oa = null;
            this.ra = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ga = null;
            this.Gb = -1;
            this.La = !1;
            this.rb = 0;
            this.Va = null;
            this.Qb = this.Ta = this.Ib = this.Da = !1;
            this.B = new bCb
        },
        bCb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        dCb = function(a, b, c) {
            a.Qa = 1;
            a.Z = a8(b.clone());
            a.Y = c;
            a.Da = !0;
            cCb(a, null)
        },
        cCb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.Ya = a.Z.clone();
            b8(a.Ya, "t", a.ac);
            a.K = 0;
            var c = a.G.Qa;
            a.B = new bCb;
            a.j = eCb(a.G, c ? b : null, !a.Y);
            0 < a.rb && (a.Va = new q8((0, g.ib)(a.HT, a, a.j), a.rb));
            a.Za.listen(a.j, "readystatechange", a.O3);
            b = a.Ma ? g.qd(a.Ma) : {};
            a.Y ? (a.Ga || (a.Ga = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Ya, a.Ga, a.Y, b)) : (a.Ga = "GET", a.j.send(a.Ya, a.Ga, null, b));
            s8(1)
        },
        fCb = function(a) {
            return a.j ? "GET" == a.Ga && 2 != a.Qa && a.G.Ue : !1
        },
        kCb = function(a, b, c) {
            for (var d = !0, e; !a.La && a.K < c.length;)
                if (e = gCb(a, c), e == hCb) {
                    4 ==
                        b && (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == iCb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else jCb(a, e);
            fCb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Qb && (a.Qb = !0, a.G.DQ(a)) : (y8(a), z8(a))
        },
        gCb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return hCb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return iCb;
            d += 1;
            if (d + c > b.length) return hCb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Eb = Date.now() + a.wb;
            lCb(a, a.wb)
        },
        lCb = function(a, b) {
            if (null != a.oa) throw Error("WatchDog timer not null");
            a.oa = u8((0, g.ib)(a.M3, a), b)
        },
        A8 = function(a) {
            a.oa && (g.Ta.clearTimeout(a.oa), a.oa = null)
        },
        z8 = function(a) {
            a.G.Pg() || a.La || mCb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.vb(a.Va);
            a.Va = null;
            a.eb.stop();
            a.Za.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        jCb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Lh && (c.j == a || nCb(c.B, a)))
                    if (!a.Ta && nCb(c.B, a) && 3 == c.Lh) {
                        try {
                            var d = c.Df.j.parse(b)
                        } catch (w) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    oCb(c);
                                    t8(18)
                                }
                            }
                            else c.Yd = e[1], 0 < c.Yd - c.Va && 37500 > e[2] && c.Ta && 0 == c.ra && !c.oa && (c.oa = u8((0, g.ib)(c.P3, c), 6E3));
                            if (1 >= pCb(c.B) && c.Wc) {
                                try {
                                    c.Wc()
                                } catch (w) {}
                                c.Wc = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Ta || c.j == a) && B8(c), !g.fc(b))
                    for (e = c.Df.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Va = f[0];
                        f = f[1];
                        if (2 == c.Lh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Qb = f[2];
                                var h = f[3];
                                null != h && (c.IT = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Za = 1.5 * l);
                                d = c;
                                var m = a.QO();
                                if (m) {
                                    var n = g.Vn(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (qCb(p, p.B), p.B = null))
                                    }
                                    if (d.Da) {
                                        var q = g.Vn(m, "X-HTTP-Session-Id");
                                        q && (d.Ke = q, g.Fp(d.Ma, d.Da, q))
                                    }
                                }
                                c.Lh = 3;
                                c.G && c.G.PT();
                                c.Gc && (c.Ld = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.zd = rCb(d, d.Qa ? d.Qb : null, d.ac);
                                if (r.Ta) {
                                    sCb(d.B,
                                        r);
                                    var t = r,
                                        v = d.Za;
                                    v && t.setTimeout(v);
                                    t.oa && (A8(t), x8(t));
                                    d.j = r
                                } else tCb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Lh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.OT(f), c.ra = 0)
                    }
                s8(4)
            } catch (w) {}
        },
        uCb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        vCb = function(a) {
            this.G = a || 10;
            g.Ta.PerformanceNavigationTiming ? (a = g.Ta.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ta.chrome && g.Ta.chrome.loadTimes && g.Ta.chrome.loadTimes() && g.Ta.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        wCb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        pCb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        nCb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        qCb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        sCb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        xCb = function(a) {
            if (null != a.B) return a.C.concat(a.B.ra);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Lb(a.C)
        },
        yCb = function(a, b) {
            var c = new v8;
            if (g.Ta.Image) {
                var d = new Image;
                d.onload = g.jb(F8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.jb(F8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.jb(F8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.jb(F8, c, "TestLoadImage: timeout", !1, b, d);
                g.Ta.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        zCb = function(a, b) {
            var c = new v8,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    F8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? F8(c, "TestPingServer: ok", !0, b) : F8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                F8(c, "TestPingServer: error", !1, b)
            })
        },
        F8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        ACb = function() {
            this.j = new r8
        },
        BCb = function(a, b, c) {
            var d = c || "";
            try {
                YAb(a, function(e, f) {
                    var h = e;
                    g.bb(e) && (h = g.Vm(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.N8 ? c.N8[a] || b : b
        },
        CCb = function(a) {
            this.C = [];
            this.Qb = this.zd = this.Ma = this.ac = this.j = this.Ke = this.Da = this.La = this.N = this.Eb = this.Y = null;
            this.Uf = this.Ya = 0;
            this.Sf = G8("failFast", !1, a);
            this.Ta = this.oa = this.Z = this.K = this.G = null;
            this.uc = !0;
            this.Yd = this.Va = -1;
            this.Ib = this.ra = this.Ba = 0;
            this.uh = G8("baseRetryDelayMs", 5E3, a);
            this.Vf = G8("retryDelaySeedMs", 1E4, a);
            this.Tf = G8("forwardChannelMaxRetries", 2, a);
            this.De = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Ee = a && a.Wpb || void 0;
            this.hg = a && a.Qob || void 0;
            this.Ue = a && a.Tpb || !1;
            this.Za = void 0;
            this.Qa = a && a.nda ||
                !1;
            this.D = "";
            this.B = new vCb(a && a.Xmb);
            this.Df = new ACb;
            this.wb = a && a.onb || !1;
            this.rb = a && a.dnb || !1;
            this.wb && this.rb && (this.rb = !1);
            this.Wf = a && a.Omb || !1;
            a && a.qnb && (this.uc = !1);
            this.Gc = !this.wb && this.uc && a && a.bnb || !1;
            this.md = void 0;
            a && a.gZ && 0 < a.gZ && (this.md = a.gZ);
            this.Wc = void 0;
            this.Ld = 0;
            this.eb = !1;
            this.Gb = this.Ga = null
        },
        C8 = function(a) {
            a.j && (DCb(a), a.j.cancel(), a.j = null)
        },
        ECb = function(a) {
            C8(a);
            a.Z && (g.Ta.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            wCb(a.B) || a.K || (a.K = !0, g.ng(a.KT, a), a.Ba = 0)
        },
        GCb = function(a, b) {
            if (pCb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (1 == a.Lh || 2 == a.Lh || a.Ba >= (a.Sf ? 0 : a.Tf)) return !1;
            a.K = u8((0, g.ib)(a.KT, a, b), FCb(a, a.Ba));
            a.Ba++;
            return !0
        },
        ICb = function(a, b) {
            var c;
            b ? c = b.uc : c = a.Ya++;
            var d = a.Ma.clone();
            g.Fp(d, "SID", a.D);
            g.Fp(d, "RID", c);
            g.Fp(d, "AID", a.Va);
            H8(a, d);
            a.N && a.Y && g.Jp(d, a.N, a.Y);
            c = new w8(a, a.D, c, a.Ba + 1);
            null === a.N && (c.Ma = a.Y);
            b && (a.C = b.ra.concat(a.C));
            b = HCb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.De) + Math.round(.5 * a.De * Math.random()));
            qCb(a.B, c);
            dCb(c, d, b)
        },
        H8 = function(a, b) {
            a.La && g.bd(a.La, function(c, d) {
                g.Fp(b, d, c)
            });
            a.G && YAb({}, function(c, d) {
                g.Fp(b, d, c)
            })
        },
        HCb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.ib)(a.G.Q3, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        BCb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        tCb = function(a) {
            a.j || a.Z || (a.Ib = 1, g.ng(a.JT, a), a.ra = 0)
        },
        oCb = function(a) {
            if (a.j || a.Z || 3 <= a.ra) return !1;
            a.Ib++;
            a.Z = u8((0, g.ib)(a.JT, a), FCb(a, a.ra));
            a.ra++;
            return !0
        },
        DCb = function(a) {
            null != a.Ga && (g.Ta.clearTimeout(a.Ga), a.Ga = null)
        },
        JCb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Ib);
            null === a.N && (a.j.Ma = a.Y);
            a.j.rb = 0;
            var b = a.zd.clone();
            g.Fp(b, "RID", "rpc");
            g.Fp(b, "SID", a.D);
            g.Fp(b, "AID", a.Va);
            g.Fp(b, "CI", a.Ta ? "0" : "1");
            !a.Ta && a.md && g.Fp(b, "TO", a.md);
            g.Fp(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.Y && g.Jp(b, a.N, a.Y);
            a.Za && a.j.setTimeout(a.Za);
            var c = a.j;
            a = a.Qb;
            c.Qa = 1;
            c.Z = a8(b.clone());
            c.Y = null;
            c.Da = !0;
            cCb(c, a)
        },
        B8 = function(a) {
            null != a.oa && (g.Ta.clearTimeout(a.oa), a.oa = null)
        },
        mCb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                DCb(a);
                a.j = null;
                var d = 2
            } else if (nCb(a.B, b)) c = b.ra, sCb(a.B, b), d = 1;
            else return;
            if (0 != a.Lh)
                if (b.C)
                    if (1 == d) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = YBb();
                        d.dispatchEvent(new aCb(d, c, b, e));
                        E8(a)
                    } else tCb(a);
            else {
                var f = b.Gb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && GCb(a, b) || 2 == d && oCb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        FCb = function(a, b) {
            var c = a.uh + Math.floor(Math.random() *
                a.Vf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = (0, g.ib)(a.tda, a),
                    d = a.hg,
                    e = !d;
                d = new g.Jo(d || "//www.google.com/images/cleardot.gif");
                g.Ta.location && "http" == g.Ta.location.protocol || g.Ko(d, "https");
                a8(d);
                e ? yCb(d.toString(), c) : zCb(d.toString(), c)
            } else t8(2);
            a.Lh = 0;
            a.G && a.G.NT(b);
            KCb(a);
            ECb(a)
        },
        KCb = function(a) {
            a.Lh = 0;
            a.Gb = [];
            if (a.G) {
                var b = xCb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Mb(a.Gb, b), g.Mb(a.Gb, a.C), a.B.C.length = 0, g.Lb(a.C), a.C.length = 0;
                a.G.LT()
            }
        },
        LCb = function(a) {
            if (0 == a.Lh) return a.Gb;
            var b = [];
            g.Mb(b, xCb(a.B));
            g.Mb(b, a.C);
            return b
        },
        rCb = function(a, b, c) {
            var d = g.Gp(c);
            "" != d.j ? (b && g.Lo(d, b + "." + d.j), g.Mo(d, d.D)) : (d = g.Ta.location, d = ZAb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Da;
            c = a.Ke;
            b && c && g.Fp(d, b, c);
            g.Fp(d, "VER", a.IT);
            H8(a, d);
            return d
        },
        eCb = function(a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.Ue && !a.Ee ? new g.On(new g.Fo({
                P0: c
            })) : new g.On(a.Ee);
            b.K = a.Qa;
            return b
        },
        MCb = function() {},
        NCb = function() {
            if (g.Df && !g.Uc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Kd.call(this);
            this.j = new CCb(b);
            this.G = a;
            this.B = b && b.C9 || null;
            a = b && b.B9 || null;
            b && b.Vmb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.uob || null;
            b && b.nZ && (a ? a["X-WebChannel-Content-Type"] = b.nZ : a = {
                "X-WebChannel-Content-Type": b.nZ
            });
            b && b.oW && (a ? a["X-WebChannel-Client-Profile"] = b.oW : a = {
                "X-WebChannel-Client-Profile": b.oW
            });
            this.j.Eb = a;
            (a = b && b.tob) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.nda || !1;
            this.D = b && b.opb || !1;
            (b = b && b.H8) && !g.fc(b) && (this.j.Da = b, g.jd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        OCb = function(a) {
            VBb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.gd(b)) ? g.od(b, this.j) : b : this.data = a
        },
        PCb = function(a) {
            WBb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        QCb = function(a, b) {
            this.B = a;
            this.j = b
        },
        RCb = function(a) {
            return LCb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? VAb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new SCb(L8, a))
        },
        SCb = function(a) {
            g.zb.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Kp(this);
            this.G = new g.Dg;
            this.G.setInterval(250)
        },
        UCb = function(a, b, c) {
            a.Wx = 1;
            a.Vr = a8(b.clone());
            a.Ru = c;
            a.Da = !0;
            TCb(a, null)
        },
        VCb = function(a, b, c, d, e) {
            a.Wx = 1;
            a.Vr = a8(b.clone());
            a.Ru = null;
            a.Da = c;
            e && (a.o0 = !1);
            TCb(a, d)
        },
        TCb = function(a, b) {
            a.Vx = Date.now();
            O8(a);
            a.Xr = a.Vr.clone();
            b8(a.Xr, "t", a.K);
            a.TG = 0;
            a.ij = a.j.bM(a.j.lC() ? b : null);
            0 < a.ZL && (a.QG = new q8((0, g.ib)(a.QT, a, a.ij), a.ZL));
            a.C.listen(a.ij, "readystatechange", a.S3);
            b = a.Qu ? g.qd(a.Qu) : {};
            a.Ru ? (a.SG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.ij.send(a.Xr, a.SG, a.Ru, b)) : (a.SG = "GET", a.o0 && !g.Vc && (b.Connection = "close"), a.ij.send(a.Xr, a.SG, null, b));
            a.j.Vn(1)
        },
        YCb = function(a, b) {
            var c = a.TG,
                d = b.indexOf("\n", c);
            if (-1 == d) return WCb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return XCb;
            d += 1;
            if (d + c > b.length) return WCb;
            b = b.slice(d, d + c);
            a.TG = d + c;
            return b
        },
        $Cb = function(a, b) {
            a.Vx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Xr = a.Vr.clone();
            g.Fp(a.Xr, "DOMAIN", c);
            g.Fp(a.Xr, "t", a.K);
            try {
                a.Do = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Wr = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in ZCb) f = R8[f] = ZCb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.ye(d + "</body></html>");
            a.Do.open();
            a.Do.write(g.xe(c));
            a.Do.close();
            a.Do.parentWindow.m = (0, g.ib)(a.yba, a);
            a.Do.parentWindow.d = (0, g.ib)(a.j_, a, !0);
            a.Do.parentWindow.rpcClose = (0, g.ib)(a.j_, a, !1);
            c = a.Do.createElement("DIV");
            a.Do.parentWindow.document.body.appendChild(c);
            d = g.oe(a.Xr.toString());
            d = g.ef(g.ke(d));
            d = g.ye('<iframe src="' + d + '"></iframe>');
            g.Nba(c, d);
            a.j.Vn(1)
        },
        O8 = function(a) {
            a.aM = Date.now() + a.B;
            aDb(a, a.B)
        },
        aDb = function(a, b) {
            if (null != a.Xx) throw Error("WatchDog timer not null");
            a.Xx = K8((0, g.ib)(a.R3, a), b)
        },
        bDb = function(a) {
            a.Xx && (g.Ta.clearTimeout(a.Xx), a.Xx = null)
        },
        Q8 = function(a) {
            a.j.Pg() || a.Pu || a.j.UG(a)
        },
        P8 = function(a) {
            bDb(a);
            g.vb(a.QG);
            a.QG = null;
            a.G.stop();
            a.C.removeAll();
            if (a.ij) {
                var b = a.ij;
                a.ij = null;
                b.abort();
                b.dispose()
            }
            a.Do && (a.Do = null)
        },
        cDb = function(a, b) {
            try {
                a.j.RT(a, b), a.j.Vn(4)
            } catch (c) {}
        },
        eDb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                dDb(a, b, function(h) {
                    h ? c(!0) : g.Ta.setTimeout(function() {
                        eDb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        dDb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Ta.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        fDb = function(a) {
            this.j = a;
            this.B = new r8
        },
        gDb = function(a) {
            var b = T8(a.j, a.XC, "/mail/images/cleardot.gif");
            a8(b);
            eDb(b.toString(), 5E3, (0, g.ib)(a.g6, a), 3, 2E3);
            a.Vn(1)
        },
        hDb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Lj = new N8(a), a.Lj.Qu = a.cM, b = a.j, b = T8(b, b.lC() ? a.kC : null, a.dM), M8(5), !g.Df || g.Uc(10)) b8(b, "TYPE", "xmlhttp"), VCb(a.Lj, b, !1, a.kC, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Lj;
                a = !!a.kC;
                c.Wx = 3;
                c.Vr = a8(b.clone());
                $Cb(c, a)
            }
        },
        iDb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.Y = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        jDb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        kDb = function(a, b, c, d) {
            g.zb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        lDb = function(a) {
            g.zb.call(this, "serverreachability", a)
        },
        nDb = function(a) {
            a.T3(1, 0);
            a.VG = T8(a, null, a.eM);
            mDb(a)
        },
        oDb = function(a) {
            a.Ds && (a.Ds.abort(), a.Ds = null);
            a.Kg && (a.Kg.cancel(), a.Kg = null);
            a.rq && (g.Ta.clearTimeout(a.rq), a.rq = null);
            V8(a);
            a.Yj && (a.Yj.cancel(), a.Yj = null);
            a.Yr && (g.Ta.clearTimeout(a.Yr), a.Yr = null)
        },
        pDb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new jDb(a.U3++, b));
            2 != a.j && 3 != a.j || mDb(a)
        },
        qDb = function(a) {
            var b = 0;
            a.Kg && b++;
            a.Yj && b++;
            return b
        },
        mDb = function(a) {
            a.Yj || a.Yr || (a.Yr = K8((0, g.ib)(a.VT, a), 0), a.Zx = 0)
        },
        tDb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.nC = Math.floor(1E5 * Math.random());
                    b = a.nC++;
                    var c = new N8(a, "", b);
                    c.Qu = a.Lo;
                    var d = rDb(a),
                        e = a.VG.clone();
                    g.Fp(e, "RID", b);
                    g.Fp(e, "CVER", "1");
                    W8(a, e);
                    UCb(c, e, d);
                    a.Yj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? sDb(a, b) : 0 == a.B.length || a.Yj || sDb(a))
        },
        sDb = function(a, b) {
            if (b)
                if (6 < a.Su) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.nC - 1;
                    b = rDb(a)
                } else c = b.N, b = b.Ru;
            else c = a.nC++, b = rDb(a);
            var d = a.VG.clone();
            g.Fp(d, "SID", a.D);
            g.Fp(d, "RID", c);
            g.Fp(d, "AID", a.ey);
            W8(a, d);
            c = new N8(a, a.D, c, a.Zx + 1);
            c.Qu = a.Lo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Yj = c;
            UCb(c, d, b)
        },
        W8 = function(a, b) {
            a.Mi && (a = a.Mi.bU()) && g.bd(a, function(c, d) {
                g.Fp(b, d, c)
            })
        },
        rDb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Su && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    ME: void 0
                }, f++) {
                e.ME = a.B[f].j;
                var h = a.B[f].map;
                e.ME = 6 >= a.Su ? f : e.ME - d;
                try {
                    g.bd(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.ME + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.ME + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        uDb = function(a) {
            a.Kg || a.rq || (a.N = 1, a.rq = K8((0, g.ib)(a.UT, a), 0), a.Yx = 0)
        },
        wDb = function(a) {
            if (a.Kg || a.rq || 3 <= a.Yx) return !1;
            a.N++;
            a.rq = K8((0, g.ib)(a.UT, a), vDb(a, a.Yx));
            a.Yx++;
            return !0
        },
        U8 = function(a, b, c) {
            a.xL = null == a.K ? c : !a.K;
            a.Mo = b.qq;
            a.Z || nDb(a)
        },
        V8 = function(a) {
            null != a.Tu && (g.Ta.clearTimeout(a.Tu), a.Tu = null)
        },
        vDb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Mi && (c = null);
                var d = (0, g.ib)(a.sda, a);
                c || (c = new g.Jo("//www.google.com/images/cleardot.gif"), a8(c));
                dDb(c.toString(), 1E4, d)
            } else M8(2);
            xDb(a, b)
        },
        xDb = function(a, b) {
            a.j = 0;
            a.Mi && a.Mi.XT(b);
            yDb(a);
            oDb(a)
        },
        yDb = function(a) {
            a.j = 0;
            a.Mo = -1;
            if (a.Mi)
                if (0 == a.C.length && 0 == a.B.length) a.Mi.fM();
                else {
                    var b = g.Lb(a.C),
                        c = g.Lb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Mi.fM(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.Gp(c);
            if ("" != d.j) b && g.Lo(d, b + "." + d.j), g.Mo(d, d.D);
            else {
                var e = window.location;
                d = ZAb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.mC && g.bd(a.mC, function(f, h) {
                g.Fp(d, h, f)
            });
            g.Fp(d, "VER", a.Su);
            W8(a, d);
            return d
        },
        zDb = function() {},
        ADb = function() {
            this.j = [];
            this.B = []
        },
        BDb = function(a) {
            g.zb.call(this, "channelMessage");
            this.message = a
        },
        CDb = function(a) {
            g.zb.call(this, "channelError");
            this.error = a
        },
        DDb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.dv(this.pba, 0, this);
            g.O(this, this.j);
            this.Wi = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.ib)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.ib)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        EDb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.Lv;
            this.B = new Y8(this.Gca, this);
            this.j = null;
            this.oa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Qa = c;
            this.ra = d;
            this.Ta = e;
            this.Ma = new $Ab;
            this.Ga = new bBb;
            this.La = new dBb;
            this.Da = new fBb;
            this.Va = new hBb;
            this.Ya = new iBb
        },
        FDb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.Lo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Lo = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.bn(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.cn(a) || "";
            a = g.oc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.nc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.jn(c + b, {})
        },
        GDb = function(a, b) {
            g.Kd.call(this);
            var c = this;
            this.Hd = a();
            this.Hd.subscribe("handlerOpened", this.W3, this);
            this.Hd.subscribe("handlerClosed", this.onClosed, this);
            this.Hd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Hd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        HDb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new NCb : e;
            var f = void 0 === f ? new g.Lv : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : pCb((new QCb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.oa = !1;
            this.logger = null;
            this.ra = [];
            this.Cg = void 0;
            this.Ma = new $Ab;
            this.Ga = new bBb;
            this.La = new dBb;
            this.Da = new fBb
        },
        IDb = function(a) {
            g.Ad(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.publish("webChannelOpened");
                aBb(a.Ma, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : RCb(new QCb(b, b.j));
                c && (a.ra = [].concat(g.oa(c)));
                cBb(a.Ga, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new DDb(c[0], c[1]));
                a.Cg = b.statusCode;
                eBb(a.La, "WEB_CHANNEL")
            });
            g.Ad(a.channel, "o", function() {
                401 === a.Cg || a.C.start();
                a.publish("webChannelError");
                gBb(a.Da, "WEB_CHANNEL")
            })
        },
        JDb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        KDb = function(a) {
            g.Kd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.X3, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        LDb = function(a, b, c, d, e) {
            function f() {
                return new EDb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.yB("enable_mdx_web_channel_desktop") ? new KDb(function() {
                return new HDb($8(a, "/wc"), b, c)
            }) : new GDb(f, e)
        },
        PDb = function() {
            var a = MDb;
            NDb();
            a9.push(a);
            ODb()
        },
        b9 = function(a, b) {
            NDb();
            var c = QDb(a, String(b));
            0 == a9.length ? RDb(c) : (ODb(), g.$b(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        NDb = function() {
            a9 || (a9 = g.Wa("yt.mdx.remote.debug.handlers_") || [], g.Va("yt.mdx.remote.debug.handlers_", a9))
        },
        RDb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        ODb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.$b(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        QDb = function(a, b) {
            var c = (Date.now() - SDb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.vF.call(this);
            this.K = a;
            this.screens = []
        },
        TDb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        UDb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Et(a.screens, function(f) {
                return !!vBb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = TDb(a, b[d]) || c;
            return c
        },
        VDb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Et(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        WDb = function(a, b, c, d, e) {
            g.vF.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.kd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + sBb(this.screens))
        },
        XDb = function(a) {
            if (a.screens.length) {
                var b = g.Rr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.ib)(a.f8, a), (0, g.ib)(a.e8, a))
            }
        },
        h9 = function(a) {
            if (g.yB("deprecate_pair_servlet_enabled")) return UDb(a, []);
            var b = rBb(CBb());
            b = g.Et(b, function(c) {
                return !c.uuid
            });
            return UDb(a, b)
        },
        j9 = function(a, b) {
            EBb(g.Rr(a.screens, pBb));
            b && DBb()
        },
        ZDb = function(a, b) {
            g.vF.call(this);
            this.K = b;
            b = (b = g.sC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Fb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            YDb("Initialized with " + g.Vm(this.j))
        },
        $Db = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.ib)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.ib)(function() {
                c(!1)
            }, a))
        },
        bEb = function(a, b) {
            a: if (TAb(b) != TAb(a.j)) var c = !1;
                else {
                    c = g.id(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (YDb("Updated online screens: " + g.Vm(a.j)), a.j = b, a.publish("screenChange"));aEb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.uB(a.C);
            a.C = g.sB((0, g.ib)(a.KR, a), 0 < a.D && a.D < g.kb() ? 2E4 : 1E4)
        },
        YDb = function(a) {
            b9("OnlineScreenService", a)
        },
        cEb = function(a) {
            var b = {};
            g.$b(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        aEb = function(a) {
            a = g.id(g.cd(a.j, function(b) {
                return b
            }));
            g.Wb(a);
            a.length ? g.rC("yt-remote-online-screen-ids", a.join(","), 60) : g.tC("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            dEb(this)
        },
        fEb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Ok(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                $Db(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? eEb(a, c, (0, g.ib)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                $Db(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        gEb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        hEb = function(a, b, c) {
            $Db(a.j, b, c)
        },
        eEb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.AB($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        iEb = function(a) {
            a.screens = a.B.Ok();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + sBb(a.screens))
        },
        dEb = function(a) {
            jEb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.ib)(a.p8, a));
            iEb(a);
            a.N || (a.C = rBb(g.sC("yt-remote-automatic-screen-cache") || []));
            jEb(a);
            a.info("Initializing automatic screens: " + sBb(a.C));
            a.j = new ZDb(a.D, (0, g.ib)(a.Ok, a, !0));
            a.j.subscribe("screenChange", (0, g.ib)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || kEb(a));
            jEb(a);
            a.G[b.uuid] = b.id;
            g.rC("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        kEb = function(a) {
            a = g.Et(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.rC("yt-remote-automatic-screen-cache", g.Rr(a, pBb))
        },
        jEb = function(a) {
            a.G = g.sC("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.vF.call(this);
            this.Da = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        lEb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Da, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.ib)(this.d4, this);
            this.Ga = (0, g.ib)(this.Gba, this);
            this.oa = g.sB(function() {
                mEb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.Y = "unknown"
        },
        oEb = function(a, b) {
            g.uB(a.N);
            a.N = 0;
            0 == b ? nEb(a) : a.N = g.sB(function() {
                nEb(a)
            }, b)
        },
        nEb = function(a) {
            pEb(a, "getLoungeToken");
            g.uB(a.G);
            a.G = g.sB(function() {
                qEb(a, null)
            }, 3E4)
        },
        pEb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Vm());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.ib)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Vm(c))
        },
        rEb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.AX(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Aj()
            }, 5)) : a.Aj(Error("Waiting for session status timed out."))
        },
        tEb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            sEb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", oEb(a, c)) : (g.dB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Aj())
            }, 5)
        },
        mEb = function(a, b) {
            g.uB(a.oa);
            a.oa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? tEb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.dB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), rEb(a, b.screenId))) : (g.dB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), rEb(a, b.screenId)) :
                rEb(a, b.screenId) : a.Aj(Error("Waiting for session status timed out."))
        },
        qEb = function(a, b) {
            g.uB(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, oEb(a, 3E4)) : (lEb(a, b.loungeToken), a.Ba = !1, a.Y = "unknown", oEb(a, b.loungeTokenRefreshIntervalMs))
        },
        sEb = function(a, b, c, d) {
            g.uB(a.K);
            a.K = 0;
            hEb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.sB(function() {
                    sEb(a, b, c, d - 1)
                }, 300)
            })
        },
        uEb = function(a) {
            g.uB(a.Z);
            a.Z = 0;
            g.uB(a.K);
            a.K = 0;
            g.uB(a.oa);
            a.oa = 0;
            g.uB(a.G);
            a.G = 0;
            g.uB(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ga = "";
            this.Qa = c;
            this.Ma = null;
            this.oa = function() {};
            this.Y = NaN;
            this.La = (0, g.ib)(this.e4, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        vEb = function(a) {
            a.G = a.D.dU(a.Ga, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Aj(b)
            })
        },
        wEb = function(a) {
            var b = {};
            b.pairingCode = a.Ga;
            b.theme = a.Qa;
            GBb() && (b.env_useStageMdx = 1);
            return g.hn(b)
        },
        xEb = function(a) {
            return new Promise(function(b) {
                a.Ga = tBb();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, wEb(a));
                    b(c);
                    vEb(a)
                } else a.oa = function() {
                    g.uB(a.Y);
                    a.oa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, wEb(a));
                    b(d);
                    vEb(a)
                }, a.Y = g.sB(function() {
                    a.oa()
                }, 100)
            })
        },
        zEb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                yEb(a, d, function(f) {
                    f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.dB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : xEb(a)
            })
        },
        AEb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                fEb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : xEb(a)
            })
        },
        yEb = function(a, b, c, d) {
            g.uB(a.K);
            a.K = 0;
            hEb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.sB(function() {
                    yEb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.uB(a.N), a.N = 0, 0 == b ? BEb(a) : a.N = g.sB(function() {
                BEb(a)
            }, b))
        },
        BEb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", lEb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        CEb = function(a) {
            g.uB(a.K);
            a.K = 0;
            g.uB(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.uB(a.Y)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.sB((0, g.ib)(this.mA, this, null), 150)
        },
        v9 = function(a, b) {
            g.vF.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.ib)(this.yaa, this)
        },
        DEb = function(a, b) {
            return b ? g.Db(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        MDb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.ib)(a.h_, a, b)), b.subscribe("sessionFailed", function() {
                return EEb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.mA(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        EEb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        FEb = function(a) {
            var b = a.B.cU(),
                c = a.j && a.j.B;
            a = g.Rr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = DEb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        MEb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : GEb() ? HEb(b, d) && (IEb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? JEb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? JEb(a, c) : (A9("Failed to load cast API: " + f), KEb(!1), IEb(!1), g.tC("yt-remote-cast-available"), g.tC("yt-remote-cast-receiver"),
                    LEb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Tta("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= IBb() && RBb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? MBb() : 89 <= IBb() ? TBb() : (QBb(), o8(SBb.map(NBb))))) : z9("Cannot initialize because not running Chrome")
        },
        LEb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Va("yt.mdx.remote.cloudview.instance_", null);
            NEb(!1);
            g.hE(OEb);
            OEb.length = 0
        },
        C9 = function() {
            return !!g.sC("yt-remote-cast-installed")
        },
        PEb = function() {
            var a = g.sC("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        QEb = function() {
            z9("clearCurrentReceiver");
            g.tC("yt-remote-cast-receiver")
        },
        REb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        SEb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), OEb.push(g.gE("yt-remote-cast2-api-ready", SEb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        GEb = function() {
            var a = 0 <= g.oc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.vK || a
        },
        TEb = function(a, b) {
            B9().init(a, b)
        },
        HEb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.rC("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.rC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.rC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.tC("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Va("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Wa("yt.mdx.remote.cloudview.instance_")
        },
        JEb = function(a, b) {
            KEb(!0);
            IEb(!1);
            TEb(a, function(c) {
                c ? (NEb(!0), g.iE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), KEb(!1), g.tC("yt-remote-cast-available"), g.tC("yt-remote-cast-receiver"), LEb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        KEb = function(a) {
            z9("setCastInstalled_ " + a);
            g.rC("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Wa("yt.mdx.remote.cloudview.apiReady_")
        },
        NEb = function(a) {
            z9("setApiReady_ " + a);
            g.Va("yt.mdx.remote.cloudview.apiReady_", a)
        },
        IEb = function(a) {
            g.Va("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Rk = this.zp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        UEb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.zp = !1;
            a.Rk = !1;
            a.N = 0;
            a.K = g.kb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.kb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.kb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.kb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && UEb(a)
        },
        VEb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.rd(a.trackData);
            b.hasPrevious = a.zp;
            b.hasNext = a.Rk;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.vF.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new ADb;
            this.B = this.j = null;
            this.Y = (0, g.ib)(this.k$, this);
            this.N = (0, g.ib)(this.YE, this);
            this.Z = (0, g.ib)(this.j$, this);
            this.oa = (0, g.ib)(this.m$, this);
            var d = 0;
            a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.hS, this), WEb(this))) : d = 3;
            0 != d && (b ? this.hS(d) : g.sB(function() {
                c.hS(d)
            }, 0));
            (a = REb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.oa)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        WEb = function(a) {
            g.$b("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.jb(this.waa, b), this))
            }, a)
        },
        XEb = function(a) {
            g.$b(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.enqueue(b)
        },
        YEb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            XEb(a);
            a.D.setPlayerContextData(VEb(b));
            WEb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.YE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.YE(a.B.media[0]))
        },
        ZEb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.ib)(function(d) {
                this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.vF.call(this);
            var e = this;
            this.K = NaN;
            this.Ga = !1;
            this.Y = this.Z = this.ra = this.Ba = NaN;
            this.oa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Ma = a;
            this.La = d;
            this.oa.push(g.iC(window, "beforeunload", function() {
                e.sz(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Qa = b.id;
            this.Da = b.idType;
            this.B = LDb(this.Ma, c, this.hU, "shortLived" == this.Da, this.Qa);
            this.B.listen("channelOpened", function() {
                $Eb(e)
            });
            this.B.listen("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                k8();
                isNaN(e.TD()) ? (1 == f && "shortLived" == e.Da && e.publish("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ga = !0, S9("Channel error: " + f + " with reconnection in " + e.TD() + " ms"), T9(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                aFb(e, f)
            });
            this.B.Gr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.uC() && g.rC("yt-remote-session-video-id", f)
            })
        },
        bFb = function(a) {
            return g.Db(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        cFb = function(a) {
            a.K = g.sB(function() {
                S9("Connecting timeout");
                a.sz(1)
            }, 2E4)
        },
        dFb = function(a) {
            g.uB(a.K);
            a.K = NaN
        },
        eFb = function(a) {
            g.uB(a.Ba);
            a.Ba = NaN
        },
        gFb = function(a) {
            fFb(a);
            a.ra = g.sB(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        fFb = function(a) {
            g.uB(a.ra);
            a.ra = NaN
        },
        $Eb = function(a) {
            S9("Channel opened");
            a.Ga && (a.Ga = !1, eFb(a), a.Ba = g.sB(function() {
                S9("Timing out waiting for a screen.");
                a.sz(1)
            }, 15E3))
        },
        iFb = function(a, b) {
            var c = null;
            if (b) {
                var d = bFb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Va("yt.mdx.remote.remoteClient_", c);
            b && (dFb(a), eFb(a));
            c = a.B.Zz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.vX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), hFb(a)) : a.sz(1)
        },
        jFb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.nd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        kFb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        mFb = function(a, b) {
            b.params = b.params || {};
            kFb(a, b, "NOW_PLAYING_MAY_CHANGE");
            lFb(a, b);
            a.publish("autoplayDismissed")
        },
        lFb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.vl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? gFb(a) : fFb(a);
            a.publish("remotePlayerChange")
        },
        nFb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        oFb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        pFb = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        qFb = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        rFb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.publish("autoplayDismissed")
        },
        sFb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.zp = "true" == b.params.hasPrevious;
            a.j.Rk = c;
            a.publish("previousNextChange")
        },
        aFb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Vm(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.C = g.Rr(b, function(d) {
                        return new mBb(d)
                    });
                    b = !!g.Db(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    iFb(a, b);
                    b = a.AY("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Jb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    iFb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new mBb(c8(b.params.device));
                    g.Db(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || SAb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new mBb(c8(b.params.device));
                    g.Jb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    kFb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    mFb(a, b);
                    break;
                case "onStateChange":
                    lFb(a, b);
                    break;
                case "onAdStateChange":
                    nFb(a, b);
                    break;
                case "onVolumeChanged":
                    oFb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    jFb(a, b);
                    break;
                case "nowAutoplaying":
                    pFb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    qFb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    rFb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    sFb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        hFb = function(a) {
            g.uB(a.Y);
            a.Y = g.sB(function() {
                a.sz(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Vm(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        tFb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.hh = a;
            this.j = [];
            this.j.push(this.hh.$_s("screenChange", (0, g.ib)(this.j4, this)));
            this.j.push(this.hh.$_s("onlineScreenChange", (0, g.ib)(this.baa, this)))
        },
        yFb = function(a, b) {
            FBb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.aB("MDX_CONFIG") || b;
                wBb();
                ABb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), GBb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Wa("yt.mdx.remote.deferredProxies_") || [], g.Va("yt.mdx.remote.deferredProxies_", X9));
                uFb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Va("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Va("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    MEb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Wa("yt.mdx.remote.initialized_") && (g.Va("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Vm(b)),
                    a$.push(g.gE("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.gE("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.gE("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.gE("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.gE("yt-remote-cast2-session-change", vFb)), a$.push(g.gE("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), QEb())
                    })), a$.push(g.gE("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = wFb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.yB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Vm(a)), a ? (g.rC("yt-remote-session-app", a.app), g.rC("yt-remote-session-name", a.name)) : (g.tC("yt-remote-session-app"), g.tC("yt-remote-session-name")), g.Va("yt.mdx.remote.channelParams_", a), c.start(), Z9() || xFb())
            }
        },
        zFb = function() {
            var a = Y9().hh.$_gos();
            var b = d$();
            b && e$() && (vBb(a, b) || a.push(b));
            return uBb(a)
        },
        BFb = function() {
            var a = AFb();
            !a && C9() && PEb() && (a = {
                key: "cast-selector-receiver",
                name: PEb()
            });
            return a
        },
        AFb = function() {
            var a = zFb(),
                b = d$();
            b || (b = c$());
            return g.Db(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Ok();
            return h8(b, a)
        },
        vFb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Gr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), CFb(null))
        },
        DFb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!EFb) {
                var a = g.Wa("yt.mdx.remote.screenService_");
                EFb = a ? new tFb(a) : null
            }
            return EFb
        },
        Z9 = function() {
            return g.Wa("yt.mdx.remote.currentScreenId_")
        },
        FFb = function(a) {
            g.Va("yt.mdx.remote.currentScreenId_", a)
        },
        GFb = function() {
            return g.Wa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Va("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Wa("yt.mdx.remote.connection_")
        },
        CFb = function(a) {
            var b = e$();
            b$(null);
            a || FFb("");
            g.Va("yt.mdx.remote.connection_", a);
            X9 && (g.$b(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.uC();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Ok();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                FFb(a.id);
                var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, wFb(), c);
                a.connect(b, GFb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), CFb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                CFb(a)
            }
        },
        xFb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), QEb(), $9("Skipping connecting because no session screen found."))
        },
        uFb = function() {
            var a = wFb();
            if (g.nd(a)) {
                a = j8();
                var b = g.sC("yt-remote-session-name") || "",
                    c = g.sC("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.aB("SESSION_INDEX", "0"));
                (b = g.aB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Va("yt.mdx.remote.channelParams_", a)
            }
        },
        wFb = function() {
            return g.Wa("yt.mdx.remote.channelParams_") || {}
        },
        JFb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Jc = c;
            this.events = new g.xK(this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                HFb(d, e)
            });
            this.D = !1;
            this.G = new g.lL(64);
            this.j = new g.dv(this.K0, 500, this);
            this.B = new g.dv(this.L0, 1E3, this);
            this.N = new p8(this.Qda, 0, this);
            this.C = {};
            this.Z = new g.dv(this.L1, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.O(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.M$);
            this.events.T(b, "captionschanged", this.h$);
            this.events.T(b, "captionssettingschanged", this.U0);
            this.events.T(b, "videoplayerreset", this.eK);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Jc.HW()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                IFb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Jc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.e_, this);
            a.subscribe("remotePlayerChange", this.dF, this);
            a.subscribe("remoteQueueChange", this.eK, this);
            a.subscribe("previousNextChange", this.b_, this);
            a.subscribe("nowAutoplaying", this.XZ, this);
            a.subscribe("autoplayDismissed", this.FZ, this);
            g.O(this, this.j);
            g.O(this, this.B);
            g.O(this, this.N);
            g.O(this, this.Z);
            g.O(this, this.K);
            this.U0();
            this.eK();
            this.dF()
        },
        HFb = function(a, b) {
            if (j$(a)) {
                a.Jc.unsubscribe("remotePlayerChange", a.dF, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Jc);
                if (c !== d.volume || b !== d.muted) a.Jc.setVolume(c, b), a.Z.start();
                a.Jc.subscribe("remotePlayerChange", a.dF, a)
            }
        },
        KFb = function(a) {
            a.Rc(0);
            a.j.stop();
            a.Dc(new g.lL(64))
        },
        LFb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.sd(c, b));
                a.Jc.gU(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Jc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Jc.playVideo(c.videoId, b, d, e, c.playerParams, c.ra, RAb(c));
            a.Dc(new g.lL(1))
        },
        MFb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    nY: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Jc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        xa: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            xa: "Cancel"
                        }, {
                            I: "button",
                            Ka: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            xa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.fG(this, 250);
            this.cancelButton = this.Ea("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ea("ytp-mdx-privacy-popup-confirm");
            g.O(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.Swa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        xa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.fG(this, 250);
            g.O(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Ec(a.Tb())
        },
        n$ = function(a, b) {
            g.oX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Yt = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        NFb = function(a) {
            g.uV.call(this, a);
            this.Lp = {
                key: tBb(),
                name: "This computer"
            };
            this.Wl = null;
            this.subscriptions = [];
            this.qR = this.Jc = null;
            this.Yt = [this.Lp];
            this.Gs = this.Lp;
            this.Ie = new g.lL(64);
            this.LY = 0;
            this.Xh = -1;
            this.vF = !1;
            this.tF = this.gB = null;
            if (!g.RR(this.player.U()) && !g.IG(this.player.U())) {
                a = this.player;
                var b = g.TT(a);
                b && (b = b.wp()) && (b = new n$(a, b), g.O(this, b));
                b = new m$(a);
                g.O(this, b);
                g.fU(a, b.element, 4);
                this.gB = new l$;
                g.O(this, this.gB);
                g.fU(a, this.gB.element, 4);
                this.vF = !!c$()
            }
        },
        o$ = function(a) {
            a.tF && (a.player.removeEventListener("presentingplayerstatechange",
                a.tF), a.tF = null)
        },
        OFb = function(a, b, c) {
            a.Ie = c;
            a.player.publish("presentingplayerstatechange", new g.kG(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Gs.key)
                if (b.key === a.Lp.key) g$();
                else if (IFb(a) && PFb(a), a.Gs = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.IG(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.rV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.ra,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = RAb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Vm(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && DFb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Ok(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        IFb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.vF || !a.gB ? !1 : g.bS(b) || g.dS(b)
        },
        PFb = function(a) {
            a.player.Tb().isPlaying() ? a.player.pauseVideo() : (a.tF = function(b) {
                !a.vF && g.nG(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.tF));
            a.gB && a.gB.qd();
            e$() || (i$ = !0)
        },
        ZCb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        nBb = {
            zpa: "atp",
            h7a: "ska",
            u3a: "que",
            FVa: "mus",
            g7a: "sus",
            DGa: "dsp",
            j5a: "seq",
            dUa: "mic",
            ixa: "dpa",
            Xqa: "cds",
            uVa: "mlm",
            Wwa: "dsdtr",
            fWa: "ntb",
            Sib: "vsp",
            Wxa: "scn",
            I3a: "rpe",
            Twa: "dcn",
            Uwa: "dcp",
            X_a: "pas",
            Vwa: "drq",
            FZa: "opf",
            Vxa: "els",
            B5a: "svq"
        },
        oBb = {
            y5: "u",
            CLASSIC: "cl",
            g5: "k",
            T2: "i",
            E2: "cr",
            n5: "m",
            Q2: "g",
            mV: "up"
        },
        zBb = "",
        l8 = null;
    HBb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.yB("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.gfa(c.value), c = {
                serializedIncrementBatch: g.Jg(c.j())
            }, g.LC("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, PBb = JBb("loadCastFramework") || JBb("loadCastApplicationFramework"),
        SBb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.lb(p8, g.I);
    g.k = p8.prototype;
    g.k.K3 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.kd ? this.C = g.kb() + this.Wi : this.kd = g.Eg(this.G, this.Wi)
    };
    g.k.stop = function() {
        this.kd && (g.Ta.clearTimeout(this.kd), this.kd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.va = function() {
        this.stop();
        p8.Rf.va.call(this)
    };
    g.k.L3 = function() {
        this.kd && (g.Ta.clearTimeout(this.kd), this.kd = null);
        this.C ? (this.kd = g.Eg(this.G, this.C - g.kb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.x(q8, g.I);
    g.k = q8.prototype;
    g.k.YL = function(a) {
        this.C = arguments;
        this.kd || this.B ? this.j = !0 : UBb(this)
    };
    g.k.stop = function() {
        this.kd && (g.Ta.clearTimeout(this.kd), this.kd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.kd || (this.j = !1, UBb(this))
    };
    g.k.va = function() {
        g.I.prototype.va.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Ta.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Ta.JSON.parse(a, void 0)
    };
    g.lb(VBb, g.zb);
    g.lb(WBb, g.zb);
    var XBb = null;
    g.lb(ZBb, g.zb);
    g.lb($Bb, g.zb);
    g.lb(aCb, g.zb);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var iCb = {},
        hCb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.wb = a
    };
    g.k.O3 = function(a) {
        a = a.target;
        var b = this.Va;
        b && 3 == g.Rn(a) ? b.YL() : this.HT(a)
    };
    g.k.HT = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Rn(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.eS || this.j && (this.B.B || g.Tn(this.j) || g.Un(this.j)))) {
                    this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Gb = e;
                    b: if (fCb(this)) {
                        var f = g.Un(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Rn(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Ta.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.Tn(this.j);
                    if (this.C = 200 == e) {
                        if (this.Ib && !this.Ta) {
                            b: {
                                if (this.j) {
                                    var n = g.Vn(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ta = !0,
                            jCb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Da ? (kCb(this, b, m), g.eS && this.C && 3 == b && (this.Za.listen(this.eb, "tick", this.N3), this.eb.start())) : jCb(this, m);
                        4 == b && y8(this);
                        this.C && !this.La && (4 == b ? mCb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Wfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.N3 = function() {
        if (this.j) {
            var a = g.Rn(this.j),
                b = g.Tn(this.j);
            this.K < b.length && (A8(this), kCb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.La = !0;
        y8(this)
    };
    g.k.M3 = function() {
        this.oa = null;
        var a = Date.now();
        0 <= a - this.Eb ? (2 != this.Qa && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : lCb(this, this.Eb - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.QO = function() {
        return this.j
    };
    vCb.prototype.cancel = function() {
        this.C = xCb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = CCb.prototype;
    g.k.IT = 8;
    g.k.Lh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.ac = a;
        this.La = b || {};
        c && void 0 !== d && (this.La.OSID = c, this.La.OAID = d);
        this.Ta = this.uc;
        this.Ma = rCb(this, null, this.ac);
        E8(this)
    };
    g.k.disconnect = function() {
        ECb(this);
        if (3 == this.Lh) {
            var a = this.Ya++,
                b = this.Ma.clone();
            g.Fp(b, "SID", this.D);
            g.Fp(b, "RID", a);
            g.Fp(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Qa = 2;
            a.Z = a8(b.clone());
            b = !1;
            if (g.Ta.navigator && g.Ta.navigator.sendBeacon) try {
                b = g.Ta.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ta.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = eCb(a.G, null), a.j.send(a.Z));
            a.Ba = Date.now();
            x8(a)
        }
        KCb(this)
    };
    g.k.Pg = function() {
        return 0 == this.Lh
    };
    g.k.getState = function() {
        return this.Lh
    };
    g.k.KT = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Lh) {
                if (!a) {
                    this.Ya = Math.floor(1E5 * Math.random());
                    a = this.Ya++;
                    var b = new w8(this, "", a),
                        c = this.Y;
                    this.Eb && (c ? (c = g.qd(c), g.sd(c, this.Eb)) : c = this.Eb);
                    null !== this.N || this.rb || (b.Ma = c, c = null);
                    var d;
                    if (this.wb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = HCb(this, b, d);
                    e = this.Ma.clone();
                    g.Fp(e, "RID", a);
                    g.Fp(e, "CVER", 22);
                    this.Da && g.Fp(e, "X-HTTP-Session-Id", this.Da);
                    H8(this, e);
                    c && (this.rb ? d = "headers=" + g.cf(g.Fga(c)) + "&" + d : this.N && g.Jp(e, this.N, c));
                    qCb(this.B, b);
                    this.Wf && g.Fp(e, "TYPE", "init");
                    this.wb ? (g.Fp(e, "$req", d), g.Fp(e, "SID", "null"), b.Ib = !0, dCb(b, e, null)) : dCb(b, e, d);
                    this.Lh = 2
                }
            } else 3 == this.Lh && (a ? ICb(this, a) : 0 == this.C.length || wCb(this.B) || ICb(this))
    };
    g.k.JT = function() {
        this.Z = null;
        JCb(this);
        if (this.Gc && !(this.eb || null == this.j || 0 >= this.Ld)) {
            var a = 2 * this.Ld;
            this.Ga = u8((0, g.ib)(this.g$, this), a)
        }
    };
    g.k.g$ = function() {
        this.Ga && (this.Ga = null, this.Ta = !1, this.eb = !0, t8(10), C8(this), JCb(this))
    };
    g.k.DQ = function(a) {
        this.j == a && this.Gc && !this.eb && (DCb(this), this.eb = !0, t8(11))
    };
    g.k.P3 = function() {
        null != this.oa && (this.oa = null, C8(this), oCb(this), t8(19))
    };
    g.k.tda = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = MCb.prototype;
    g.k.PT = function() {};
    g.k.OT = function() {};
    g.k.NT = function() {};
    g.k.LT = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.Q3 = function() {};
    g.lb(J8, g.Kd);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Qa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Vm(a), a = c);
        b.C.push(new uCb(b.Uf++, a));
        3 == b.Lh && E8(b)
    };
    J8.prototype.va = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Rf.va.call(this)
    };
    g.lb(OCb, VBb);
    g.lb(PCb, WBb);
    g.lb(I8, MCb);
    I8.prototype.PT = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.OT = function(a) {
        this.j.dispatchEvent(new OCb(a))
    };
    I8.prototype.NT = function(a) {
        this.j.dispatchEvent(new PCb(a))
    };
    I8.prototype.LT = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Kd;
    g.x(SCb, g.zb);
    g.k = N8.prototype;
    g.k.Qu = null;
    g.k.mq = !1;
    g.k.Xx = null;
    g.k.aM = null;
    g.k.Vx = null;
    g.k.Wx = null;
    g.k.Vr = null;
    g.k.Xr = null;
    g.k.Ru = null;
    g.k.ij = null;
    g.k.TG = 0;
    g.k.Do = null;
    g.k.SG = null;
    g.k.Wr = null;
    g.k.jC = -1;
    g.k.o0 = !0;
    g.k.Pu = !1;
    g.k.ZL = 0;
    g.k.QG = null;
    var XCb = {},
        WCb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.S3 = function(a) {
        a = a.target;
        var b = this.QG;
        b && 3 == g.Rn(a) ? b.YL() : this.QT(a)
    };
    g.k.QT = function(a) {
        try {
            if (a == this.ij) a: {
                var b = g.Rn(this.ij),
                    c = this.ij.B,
                    d = this.ij.getStatus();
                if (g.Df && !g.Uc(10) || g.Vc && !g.Tc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Tn(this.ij)) break a;this.Pu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Vn(3) : this.j.Vn(2));bDb(this);
                var e = this.ij.getStatus();this.jC = e;
                var f = g.Tn(this.ij);
                if (this.mq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Da) {
                        for (a = !0; !this.Pu && this.TG < f.length;) {
                            var h = YCb(this, f);
                            if (h == WCb) {
                                4 == b && (this.Wr = 4, M8(15), a = !1);
                                break
                            } else if (h == XCb) {
                                this.Wr = 4;
                                M8(16);
                                a = !1;
                                break
                            } else cDb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Wr = 1, M8(17), a = !1);
                        this.mq = this.mq && a;
                        a || (P8(this), Q8(this))
                    } else cDb(this, f);
                    this.mq && !this.Pu && (4 == b ? this.j.UG(this) : (this.mq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Wr = 3, M8(13)) : (this.Wr = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.yba = function(a) {
        K8((0, g.ib)(this.xba, this, a), 0)
    };
    g.k.xba = function(a) {
        this.Pu || (bDb(this), cDb(this, a), O8(this))
    };
    g.k.j_ = function(a) {
        K8((0, g.ib)(this.wba, this, a), 0)
    };
    g.k.wba = function(a) {
        this.Pu || (P8(this), this.mq = a, this.j.UG(this), this.j.Vn(4))
    };
    g.k.cancel = function() {
        this.Pu = !0;
        P8(this)
    };
    g.k.R3 = function() {
        this.Xx = null;
        var a = Date.now();
        0 <= a - this.aM ? (2 != this.Wx && this.j.Vn(3), P8(this), this.Wr = 2, M8(18), Q8(this)) : aDb(this, this.aM - a)
    };
    g.k.getLastError = function() {
        return this.Wr
    };
    g.k = fDb.prototype;
    g.k.cM = null;
    g.k.Lj = null;
    g.k.CK = !1;
    g.k.M0 = null;
    g.k.gI = null;
    g.k.MP = null;
    g.k.dM = null;
    g.k.Tl = null;
    g.k.qq = -1;
    g.k.kC = null;
    g.k.XC = null;
    g.k.connect = function(a) {
        this.dM = a;
        a = T8(this.j, null, this.dM);
        M8(3);
        this.M0 = Date.now();
        var b = this.j.Y;
        null != b ? (this.kC = b[0], (this.XC = b[1]) ? (this.Tl = 1, gDb(this)) : (this.Tl = 2, hDb(this))) : (b8(a, "MODE", "init"), this.Lj = new N8(this), this.Lj.Qu = this.cM, VCb(this.Lj, a, !1, null, !0), this.Tl = 0)
    };
    g.k.g6 = function(a) {
        if (a) this.Tl = 2, hDb(this);
        else {
            M8(4);
            var b = this.j;
            b.Mo = b.Ds.qq;
            X8(b, 9)
        }
        a && this.Vn(2)
    };
    g.k.bM = function(a) {
        return this.j.bM(a)
    };
    g.k.abort = function() {
        this.Lj && (this.Lj.cancel(), this.Lj = null);
        this.qq = -1
    };
    g.k.Pg = function() {
        return !1
    };
    g.k.RT = function(a, b) {
        this.qq = a.jC;
        if (0 == this.Tl)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Mo = this.qq;
                    X8(a, 2);
                    return
                }
                this.kC = c[0];
                this.XC = c[1]
            } else a = this.j, a.Mo = this.qq, X8(a, 2);
        else if (2 == this.Tl)
            if (this.CK) M8(7), this.MP = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.CK = !0, this.gI = Date.now(), a = this.gI - this.M0, !g.Df || g.Uc(10) || 500 > a) this.qq = 200, this.Lj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.gI = this.MP = Date.now(), this.CK = !1
    };
    g.k.UG = function() {
        this.qq = this.Lj.jC;
        if (this.Lj.mq) 0 == this.Tl ? this.XC ? (this.Tl = 1, gDb(this)) : (this.Tl = 2, hDb(this)) : 2 == this.Tl && ((!g.Df || g.Uc(10) ? !this.CK : 200 > this.MP - this.gI) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Tl ? M8(9) : 2 == this.Tl && M8(10);
            var a = this.j;
            this.Lj.getLastError();
            a.Mo = this.qq;
            X8(a, 2)
        }
    };
    g.k.lC = function() {
        return this.j.lC()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Vn = function(a) {
        this.j.Vn(a)
    };
    g.k = iDb.prototype;
    g.k.Lo = null;
    g.k.mC = null;
    g.k.Yj = null;
    g.k.Kg = null;
    g.k.eM = null;
    g.k.VG = null;
    g.k.ST = null;
    g.k.WG = null;
    g.k.nC = 0;
    g.k.U3 = 0;
    g.k.Mi = null;
    g.k.Yr = null;
    g.k.rq = null;
    g.k.Tu = null;
    g.k.Ds = null;
    g.k.xL = null;
    g.k.ey = -1;
    g.k.TT = -1;
    g.k.Mo = -1;
    g.k.Zx = 0;
    g.k.Yx = 0;
    g.k.Su = 8;
    g.lb(kDb, g.zb);
    g.lb(lDb, g.zb);
    g.k = iDb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.eM = b;
        this.mC = c || {};
        d && void 0 !== e && (this.mC.OSID = d, this.mC.OAID = e);
        this.Z ? (K8((0, g.ib)(this.qW, this, a), 100), nDb(this)) : this.qW(a)
    };
    g.k.disconnect = function() {
        oDb(this);
        if (3 == this.j) {
            var a = this.nC++,
                b = this.VG.clone();
            g.Fp(b, "SID", this.D);
            g.Fp(b, "RID", a);
            g.Fp(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.Wx = 2;
            a.Vr = a8(b.clone());
            (new Image).src = a.Vr.toString();
            a.Vx = Date.now();
            O8(a)
        }
        yDb(this)
    };
    g.k.qW = function(a) {
        this.Ds = new fDb(this);
        this.Ds.cM = this.Lo;
        this.Ds.B = this.G;
        this.Ds.connect(a)
    };
    g.k.Pg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.VT = function(a) {
        this.Yr = null;
        tDb(this, a)
    };
    g.k.UT = function() {
        this.rq = null;
        this.Kg = new N8(this, this.D, "rpc", this.N);
        this.Kg.Qu = this.Lo;
        this.Kg.ZL = 0;
        var a = this.ST.clone();
        g.Fp(a, "RID", "rpc");
        g.Fp(a, "SID", this.D);
        g.Fp(a, "CI", this.xL ? "0" : "1");
        g.Fp(a, "AID", this.ey);
        W8(this, a);
        if (!g.Df || g.Uc(10)) g.Fp(a, "TYPE", "xmlhttp"), VCb(this.Kg, a, !0, this.WG, !1);
        else {
            g.Fp(a, "TYPE", "html");
            var b = this.Kg,
                c = !!this.WG;
            b.Wx = 3;
            b.Vr = a8(a.clone());
            $Cb(b, c)
        }
    };
    g.k.RT = function(a, b) {
        if (0 != this.j && (this.Kg == a || this.Yj == a))
            if (this.Mo = a.jC, this.Yj == a && 3 == this.j)
                if (7 < this.Su) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.rq) {
                                if (this.Kg)
                                    if (this.Kg.Vx + 3E3 < this.Yj.Vx) V8(this), this.Kg.cancel(), this.Kg = null;
                                    else break a;
                                wDb(this);
                                M8(19)
                            }
                        }
                    else this.TT = a[1], 0 < this.TT - this.ey && 37500 > a[2] && this.xL && 0 == this.Yx && !this.Tu && (this.Tu = K8((0, g.ib)(this.V3, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Kg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.ey = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.WG = c[2], c = c[3], null != c ? this.Su = c : this.Su = 6, this.j = 3, this.Mi && this.Mi.aU(), this.ST = T8(this, this.lC() ? this.WG : null, this.eM), uDb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Mi && this.Mi.ZT(c), this.Yx = 0)
    };
    g.k.V3 = function() {
        null != this.Tu && (this.Tu = null, this.Kg.cancel(), this.Kg = null, wDb(this), M8(20))
    };
    g.k.UG = function(a) {
        if (this.Kg == a) {
            V8(this);
            this.Kg = null;
            var b = 2
        } else if (this.Yj == a) this.Yj = null, b = 1;
        else return;
        this.Mo = a.jC;
        if (0 != this.j)
            if (a.mq)
                if (1 == b) {
                    b = a.Ru ? a.Ru.length : 0;
                    a = Date.now() - a.Vx;
                    var c = L8;
                    c.dispatchEvent(new kDb(c, b, a, this.Zx));
                    mDb(this);
                    this.C.length = 0
                } else uDb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Mo)) {
                if (d = 1 == b) this.Yj || this.Yr || 1 == this.j || 2 <= this.Zx ? d = !1 : (this.Yr = K8((0, g.ib)(this.VT, this, a), vDb(this, this.Zx)), this.Zx++, d = !0);
                d = !(d || 2 == b && wDb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.T3 = function(a) {
        if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.sda = function(a) {
        a ? M8(2) : (M8(1), xDb(this, 8))
    };
    g.k.bM = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.On;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Mi && this.Mi.isActive(this)
    };
    g.k.Vn = function(a) {
        var b = L8;
        b.dispatchEvent(new lDb(b, a))
    };
    g.k.lC = function() {
        return !(!g.Df || g.Uc(10))
    };
    g.k = zDb.prototype;
    g.k.aU = function() {};
    g.k.ZT = function() {};
    g.k.XT = function() {};
    g.k.fM = function() {};
    g.k.bU = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = ADb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Fb(this.j, a) || g.Fb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.dib)(b, a);
        0 <= c ? (g.Gb(b, c), b = !0) : b = !1;
        return b || g.Hb(this.B, a)
    };
    g.k.nm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.x(BDb, g.zb);
    g.x(CDb, g.zb);
    g.lb(Y8, g.I);
    g.k = Y8.prototype;
    g.k.pba = function() {
        this.Wi = Math.min(3E5, 2 * this.Wi);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Wi + 15E3 * Math.random();
        g.ev(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Wi = 5E3
    };
    g.lb(EDb, zDb);
    g.k = EDb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Kh = function(a) {
        return this.C.Kh(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new iDb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa),
                e = this.j;
            e && (e.Mi = null);
            d.Mi = this;
            this.j = d;
            FDb(this);
            if (this.j) {
                d = g.aB("ID_TOKEN");
                var f = this.j.Lo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Lo = f
            }
            e ? (3 != e.getState() && 0 == qDb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.ey)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        FDb(this);
        this.j && (3 == this.j.getState() && tDb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.sd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Zz() && (FDb(this), pDb(this.j, a))
    };
    g.k.aU = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) pDb(this.j, a[b])
        }
        this.publish("handlerOpened");
        aBb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.XT = function(a) {
        var b = 2 == a && 401 == this.j.Mo;
        4 == a || b || this.B.start();
        this.publish("handlerError", a, b);
        gBb(this.Da, "BROWSER_CHANNEL")
    };
    g.k.fM = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        cBb(this.Ga, "BROWSER_CHANNEL");
        a && this.Va.j.hM("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Ya.j.hM("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.bU = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.sd(a, this.K);
        return a
    };
    g.k.ZT = function(a) {
        "S" == a[0] ? this.Y = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new DDb(a[0], a[1]));
        eBb(this.La, "BROWSER_CHANNEL")
    };
    g.k.Zz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Gr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Ta && this.j) {
            var b = this.j.Lo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Lo = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.Xs = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.lx = function() {
        var a = this.B;
        g.fv(a.j);
        a.start()
    };
    g.k.Gca = function() {
        this.B.isActive();
        0 == qDb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.jb(this.D, d, !f),
            onError: g.jb(this.C, e),
            onTimeout: g.jb(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.AB(b, a)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.x(GDb, g.Kd);
    g.k = GDb.prototype;
    g.k.connect = function(a, b, c) {
        this.Hd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Hd.disconnect(a)
    };
    g.k.lx = function() {
        this.Hd.lx()
    };
    g.k.getDeviceId = function() {
        return this.Hd.getDeviceId()
    };
    g.k.Xs = function() {
        return this.Hd.Xs()
    };
    g.k.Zz = function() {
        return this.Hd.Zz()
    };
    g.k.W3 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Hd,
            b = this.j;
        g.rC("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.xL,
            sessionId: a.j.D,
            arrayId: a.j.ey
        });
        g.rC("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Fb(a, b) || a.push(b);
        yBb(a);
        ABb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new BDb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new CDb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Hd.sendMessage(a, b)
    };
    g.k.Gr = function(a) {
        this.Hd.Gr(a)
    };
    g.k.dispose = function() {
        this.Hd.dispose()
    };
    g.k = HDb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, JDb(this), (a = g.aB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.x9 && (this.B.mdxVersion = "" + this.j.x9), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.y6 && (this.B.cst = this.j.y6),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            H8: "gsessionid",
            B9: this.D,
            C9: this.B
        }), this.channel.open(), this.K = 2, IDb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = void 0 === a ? 0 : a;
        this.C.stop();
        JDb(this);
        this.channel && (0 !== this.Y ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.Xs = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.lx = function() {
        var a = this.C;
        g.fv(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (JDb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Gr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.oa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Kh = function(a) {
        return this.G.Kh(a)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.x(KDb, g.Kd);
    g.k = KDb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.lx = function() {
        this.j.lx()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.Xs = function() {
        return this.j.Xs()
    };
    g.k.Zz = function() {
        return 3 === this.j.K
    };
    g.k.X3 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new BDb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new CDb(401 === this.j.Cg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Gr = function(a) {
        this.j.Gr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var SDb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.lb(g9, g.vF);
    g9.prototype.Ok = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!vBb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.x(WDb, g.vF);
    g.k = WDb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.kd) && this.D_()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.kd) || (g.uB(this.kd), this.kd = NaN)
    };
    g.k.va = function() {
        this.stop();
        g.vF.prototype.va.call(this)
    };
    g.k.D_ = function() {
        this.kd = NaN;
        this.j = g.AB($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(this.Z3, this),
            onError: (0, g.ib)(this.Y3, this),
            onTimeout: (0, g.ib)(this.a4, this)
        })
    };
    g.k.Z3 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new e8(a), b)
    };
    g.k.Y3 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= QFb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = QFb[this.B], this.kd = g.sB((0, g.ib)(this.D_, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.a4 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var QFb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.lb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.publish("screenChange");
        !g.sC("yt-remote-lounge-token-expiration") && XDb(this);
        g.uB(this.j);
        this.j = g.sB((0, g.ib)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        TDb(this, a);
        j9(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || XDb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        VDb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.wL = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.va = function() {
        g.uB(this.j);
        i9.Rf.va.call(this)
    };
    g.k.f8 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.e8 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.x(ZDb, g.vF);
    g.k = ZDb.prototype;
    g.k.start = function() {
        var a = parseInt(g.sC("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.kb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.kb() + 3E5, g.rC("yt-remote-fast-check-period", this.D), this.KR())
    };
    g.k.isEmpty = function() {
        return g.nd(this.j)
    };
    g.k.update = function() {
        YDb("Updating availability on schedule.");
        var a = this.K(),
            b = g.cd(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        bEb(this, b)
    };
    g.k.va = function() {
        g.uB(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.vF.prototype.va.call(this)
    };
    g.k.KR = function() {
        g.uB(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = cEb(this);
        if (TAb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.id(a).join(",")
            }, (0, g.ib)(this.Taa, this, a), (0, g.ib)(this.Saa, this))
        } else bEb(this, {}), k9(this)
    };
    g.k.Taa = function(a, b) {
        this.B = null;
        var c = g.id(cEb(this));
        if (g.Xb(c, g.id(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            bEb(this, c);
            k9(this)
        } else this.gg("Changing Screen set during request."), this.KR()
    };
    g.k.Saa = function(a) {
        this.gg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.gg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.lb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.wL = function(a, b, c, d) {
        this.B.contains(a) ? this.B.wL(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Ok = function(a) {
        return a ? this.screens : g.Kb(this.screens, g.Et(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.cU = function() {
        return g.Et(this.Ok(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.dU = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new WDb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.ib)(l.stop, l)
    };
    g.k.b4 = function(a, b, c, d) {
        g.AB($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || gEb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); gEb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.ib)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.ib)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.va = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Rf.va.call(this)
    };
    g.k.p8 = function() {
        iEb(this);
        this.publish("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.lb(n9, g.vF);
    g.k = n9.prototype;
    g.k.Aj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Da, a)
    };
    g.k.eU = function() {
        return null
    };
    g.k.dS = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.ib)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.ib)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.va = function() {
        this.dS("");
        n9.Rf.va.call(this)
    };
    g.x(q9, n9);
    g.k = q9.prototype;
    g.k.bS = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            uEb(this);
            this.Ba = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
        pEb(this, "getMdxSessionStatus")
    };
    g.k.mA = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Vm(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.ib)(function() {
            this.Aj()
        }, this), (0, g.ib)(function() {
            this.Aj(Error("Failed to stop receiver app."))
        }, this)) : this.Aj(Error("Stopping cast device without session."))
    };
    g.k.dS = function() {};
    g.k.va = function() {
        this.info("disposeInternal");
        uEb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga));
        this.C = null;
        n9.prototype.va.call(this)
    };
    g.k.Gba = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.bb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Vm(b)), a) {
                    case "mdxSessionStatus":
                        mEb(this, b);
                        break;
                    case "loungeToken":
                        qEb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.AX = function(a, b, c, d) {
        g.uB(this.Z);
        this.Z = 0;
        fEb(this.D, this.B.label, a, this.B.friendlyName, (0, g.ib)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.sB((0, g.ib)(this.AX, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.eU = function() {
        return this.C
    };
    g.k.d4 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.Aj())
    };
    g.x(r9, n9);
    g.k = r9.prototype;
    g.k.bS = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.La)
    };
    g.k.mA = function(a) {
        this.Ma = a;
        this.oa()
    };
    g.k.stop = function() {
        CEb(this);
        this.C ? this.C.stop((0, g.ib)(this.Aj, this, null), (0, g.ib)(this.Aj, this, "Failed to stop DIAL device.")) : this.Aj()
    };
    g.k.va = function() {
        CEb(this);
        this.C && this.C.removeUpdateListener(this.La);
        this.C = null;
        n9.prototype.va.call(this)
    };
    g.k.e4 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Aj())
    };
    g.x(u9, n9);
    u9.prototype.stop = function() {
        this.Aj()
    };
    u9.prototype.bS = function() {};
    u9.prototype.mA = function() {
        g.uB(this.C);
        this.C = NaN;
        var a = h8(this.D.Ok(), this.B.label);
        a ? o9(this, a) : this.Aj(Error("No such screen"))
    };
    u9.prototype.va = function() {
        g.uB(this.C);
        this.C = NaN;
        n9.prototype.va.call(this)
    };
    g.x(v9, g.vF);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.ib)(this.Baa, this);
        c = new chrome.cast.ApiConfig(c, (0, g.ib)(this.f_, this), e, d, a);
        c.customDialLaunchCallback = (0, g.ib)(this.t$, this);
        chrome.cast.initialize(c, (0, g.ib)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), PDb(), this.B.subscribe("onlineScreenChange", (0, g.ib)(this.fU, this)), this.C = FEb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(f) {
                this.gg("Failed to set initial custom receivers: " + g.Vm(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.ib)(function(f) {
            this.gg("Failed to initialize API: " + g.Vm(f));
            b(!1)
        }, this))
    };
    g.k.Pca = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = h8(this.B.Ok(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == a.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = DEb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(d) {
                    this.gg("Failed to set initial custom receivers: " + g.Vm(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.dS(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Sca = function(a) {
        this.isDisposed() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.mA(a) : this.gg("Setting connection data without a session")
    };
    g.k.g4 = function() {
        this.isDisposed() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.ib)(this.f_, this), (0, g.ib)(this.Waa, this))
    };
    g.k.va = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.ib)(this.fU, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = MDb,
            b = g.Wa("yt.mdx.remote.debug.handlers_");
        g.Hb(b || [], a);
        g.vb(this.j);
        g.vF.prototype.va.call(this)
    };
    g.k.gg = function(a) {
        b9("Controller", a)
    };
    g.k.h_ = function(a, b) {
        this.j == a && (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.yaa = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.gg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.gg("onReceiverAction_ called without receiver.")
    };
    g.k.t$ = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = zEb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.dB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = AEb(b, c)) : a = AEb(b, c)) : a = xEb(b);
        return a
    };
    g.k.f_ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Ok(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.ib)(this.h_, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return EEb(b, b.j)
                }), this.j.mA(null));
                this.j.bS(a)
            }
        }
    };
    g.k.f4 = function() {
        return this.j ? this.j.eU() : null
    };
    g.k.Waa = function(a) {
        this.isDisposed() || (this.gg("Failed to estabilish a session: " + g.Vm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.Baa = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.publish("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.fU = function() {
        this.isDisposed() || (this.C = FEb(this), w9("Updating custom receivers: " + g.Vm(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function() {
            this.gg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.Sca;
    v9.prototype.setConnectedScreenStatus = v9.prototype.Pca;
    v9.prototype.stopSession = v9.prototype.g4;
    v9.prototype.getCastSession = v9.prototype.f4;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var OEb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        UEb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.zp = a.hasPrevious, this.Rk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.vl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(VEb(this))
    };
    g.x(L9, g.vF);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Xs = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.lx = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Rd, R9(this, "play")) : Q9(this, "play"), YEb(this, 1, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Rd, R9(this, "pause")) : Q9(this, "pause"), YEb(this, 2, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Rd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            YEb(this, 3, a);
            this.publish("remotePlayerChange")
        } else O9(this, g.jb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Rd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            UEb(a);
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.ib)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.ib)(function() {
                        this.gg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.ib)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.ib)(function() {
                    this.gg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.jb(this.setVolume, a, b))
    };
    g.k.gU = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Vm(b.style), g.sd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.jb(this.gU, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.jb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Vm(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.wK = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.jb(this.wK, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.jb(this.nextVideo, a, b))
    };
    g.k.BH = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.BH)
    };
    g.k.HW = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.HW)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.vF.prototype.dispose.call(this)
    };
    g.k.va = function() {
        XEb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.vF.prototype.va.call(this)
    };
    g.k.hS = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.waa = function(a, b) {
        this.publish(a, b)
    };
    g.k.k$ = function(a) {
        if (!a) this.YE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.YE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), ZEb(this), this.publish("remotePlayerChange")
    };
    g.k.j$ = function(a) {
        a ? (ZEb(this), this.publish("remotePlayerChange")) : this.YE(null)
    };
    g.k.IS = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.m$ = function() {
        var a = REb();
        a && K9(this, a)
    };
    g.k.gg = function(a) {
        b9("CP", a)
    };
    g.x(U9, g.vF);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Vm(m));
            this.B.connect({
                method: c,
                params: g.Vm(m)
            }, a, BBb())
        } else S9("Connecting without params"), this.B.connect({}, a, BBb());
        cFb(this)
    };
    g.k.Gr = function(a) {
        this.B.Gr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Va("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), T9(this, 3));
        g.vF.prototype.dispose.call(this)
    };
    g.k.va = function() {
        dFb(this);
        fFb(this);
        eFb(this);
        g.uB(this.Z);
        this.Z = NaN;
        g.uB(this.Y);
        this.Y = NaN;
        this.D = null;
        g.jC(this.oa);
        this.oa.length = 0;
        this.B.dispose();
        g.vF.prototype.va.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.AY = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.L7 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.TD()) ? this.B.Zz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.sz = function(a) {
        S9("Disconnecting with " + a);
        g.Va("yt.mdx.remote.remoteClient_", null);
        dFb(this);
        this.publish("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.G7 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return VEb(a)
    };
    g.k.Uca = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.uB(this.Z), this.Z = g.sB(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Vm(this.j.trackData) == g.Vm(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.$b(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.vX = function() {
        var a = this.B.getDeviceId(),
            b = g.Db(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.TD = function() {
        return this.B.Xs()
    };
    g.k.q7 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.r7 = function() {
        return this.N || ""
    };
    g.k.i4 = function() {
        !isNaN(this.TD()) && this.B.lx()
    };
    g.k.Nca = function(a, b) {
        V9(this, a, b);
        hFb(this)
    };
    g.k.hU = function() {
        var a = g.KB("SAPISID", "") || g.KB("__Secure-1PAPISID") || "",
            b = g.KB("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Jg(g.Ig(a), 2);
        b = g.Jg(g.Ig(b), 2);
        return g.Jg(g.Ig("," + a + "," + b), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Kh;
    U9.prototype.getProxyState = U9.prototype.L7;
    U9.prototype.disconnect = U9.prototype.sz;
    U9.prototype.getPlayerContextData = U9.prototype.G7;
    U9.prototype.setPlayerContextData = U9.prototype.Uca;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.vX;
    U9.prototype.getReconnectTimeout = U9.prototype.TD;
    U9.prototype.getAutoplayMode = U9.prototype.q7;
    U9.prototype.getAutoplayVideoId = U9.prototype.r7;
    U9.prototype.reconnect = U9.prototype.i4;
    U9.prototype.sendMessage = U9.prototype.Nca;
    U9.prototype.getXsrfToken = U9.prototype.hU;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.AY;
    g.x(tFb, g9);
    g.k = tFb.prototype;
    g.k.Ok = function(a) {
        return this.hh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.hh.$_c(a)
    };
    g.k.get = function(a) {
        return this.hh.$_g(a)
    };
    g.k.start = function() {
        this.hh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.hh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.hh.$_r(a, b, c)
    };
    g.k.wL = function(a, b, c, d) {
        this.hh.$_un(a, b, c, d)
    };
    g.k.va = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.hh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.hh = null;
        g9.prototype.va.call(this)
    };
    g.k.j4 = function() {
        this.publish("screenChange")
    };
    g.k.baa = function() {
        this.publish("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.b4;
    l9.prototype.$_gsppc = l9.prototype.dU;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.wL;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Ok;
    l9.prototype.$_gos = l9.prototype.cU;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Kh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        EFb = null,
        a$ = [];
    g.x(JFb, g.I);
    g.k = JFb.prototype;
    g.k.va = function() {
        g.I.prototype.va.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Jc;
        a.unsubscribe("proxyStateChange", this.e_, this);
        a.unsubscribe("remotePlayerChange", this.dF, this);
        a.unsubscribe("remoteQueueChange", this.eK, this);
        a.unsubscribe("previousNextChange", this.b_, this);
        a.unsubscribe("nowAutoplaying", this.XZ, this);
        a.unsubscribe("autoplayDismissed", this.FZ, this);
        this.Jc = this.module = null
    };
    g.k.Qk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Jc.C)
            if (j$(this)) {
                if (1081 != M9(this.Jc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Jc).isPlaying() ? this.Jc.pause() : this.Jc.play();
                        break;
                    case "control_play":
                        this.Jc.play();
                        break;
                    case "control_pause":
                        this.Jc.pause();
                        break;
                    case "control_seek":
                        this.K.YL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        LFb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    LFb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.h$ = function(a) {
        this.N.K3(a)
    };
    g.k.Qda = function(a) {
        this.Qk("control_subtitles_set_track", g.nd(a) ? null : a)
    };
    g.k.U0 = function() {
        var a = this.J.getOption("captions", "track");
        g.nd(a) || LFb(this, a)
    };
    g.k.Rc = function(a) {
        this.module.Rc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.M$ = function() {
        g.nd(this.C) || MFb(this, this.C);
        this.D = !1
    };
    g.k.e_ = function(a, b) {
        this.B.stop();
        2 === b && this.L0()
    };
    g.k.dF = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Jc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Xh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Xh = 0;
                    break;
                default:
                    this.module.Xh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Dc(new g.lL(8));
                    this.K0();
                    break;
                case 1085:
                case 3:
                    this.Dc(new g.lL(9));
                    break;
                case 1083:
                case 0:
                    this.Dc(new g.lL(2));
                    this.K.stop();
                    this.Rc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Dc(new g.lL(4));
                    break;
                case 2:
                    this.Dc(new g.lL(4));
                    this.Rc(I9(a));
                    break;
                case -1:
                    this.Dc(new g.lL(64));
                    break;
                case -1E3:
                    this.Dc(new g.lL(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        bI: 2
                    }))
            }
            a = M9(this.Jc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, MFb(this, a));
            a = M9(this.Jc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.L1()
        } else KFb(this)
    };
    g.k.b_ = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.eK = function() {
        j$(this) || KFb(this)
    };
    g.k.XZ = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.FZ = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Jc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Jc).playerState ? k$(this, a) : b && this.Jc.seekTo(a)
    };
    g.k.L1 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Jc);
            this.events.Sc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                HFb(a, c)
            })
        }
    };
    g.k.K0 = function() {
        this.j.stop();
        if (!this.Jc.isDisposed()) {
            var a = M9(this.Jc);
            a.isPlaying() && this.Dc(new g.lL(8));
            this.Rc(I9(a));
            this.j.start()
        }
    };
    g.k.L0 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Jc.Xs();
        2 == this.Jc.C && !isNaN(a) && this.B.start()
    };
    g.k.Dc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.KDa(b, a)) {
            var c = g.lG(a, 2);
            c !== g.lG(this.G, 2) && this.J.BB(c);
            this.G = a;
            OFb(this.module, b, a)
        }
    };
    g.x(l$, g.V);
    l$.prototype.qd = function() {
        this.j.show()
    };
    l$.prototype.Lb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Lb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Lb()
    };
    g.x(m$, g.V);
    m$.prototype.onStateChange = function(a) {
        this.Ec(a.state)
    };
    m$.prototype.Ec = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.lG(a, 128) ? g.MJ("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.MJ("Playing on $RECEIVER_NAME", b) : g.MJ("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(n$, g.oX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Yt = g.bc(a, this.j, this), g.pX(this, g.Rr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Mj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Gk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Yt[a].name
    };
    n$.prototype.rh = function(a) {
        g.oX.prototype.rh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Yt[a]);
        this.Db.Lb()
    };
    g.x(NFb, g.uV);
    g.k = NFb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.QR(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        yFb(b, a);
        this.subscriptions.push(g.gE("yt-remote-before-disconnect", this.f$, this));
        this.subscriptions.push(g.gE("yt-remote-connection-change", this.Caa, this));
        this.subscriptions.push(g.gE("yt-remote-receiver-availability-change", this.d_,
            this));
        this.subscriptions.push(g.gE("yt-remote-auto-connect", this.Aaa, this));
        this.subscriptions.push(g.gE("yt-remote-receiver-resumed", this.zaa, this));
        this.subscriptions.push(g.gE("mdx-privacy-popup-confirm", this.cca, this));
        this.subscriptions.push(g.gE("mdx-privacy-popup-cancel", this.bca, this));
        this.d_()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.uV.prototype.load.call(this);
        this.Wl = new JFb(this, this.player, this.Jc);
        var a = (a = GFb()) ? a.currentTime : 0;
        var b = DFb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Rc(a);
        OFb(this, this.Ie, this.Ie);
        this.player.Yp(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Gs = this.Lp;
        g.wb(this.Wl, this.Jc);
        this.Jc = this.Wl = null;
        g.uV.prototype.unload.call(this);
        this.player.Yp(5);
        o$(this)
    };
    g.k.va = function() {
        g.hE(this.subscriptions);
        g.uV.prototype.va.call(this)
    };
    g.k.aF = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Wl.Qk.apply(this.Wl, [a].concat(g.oa(b)))
    };
    g.k.getAdState = function() {
        return this.Xh
    };
    g.k.zp = function() {
        return this.Jc ? M9(this.Jc).zp : !1
    };
    g.k.Rk = function() {
        return this.Jc ? M9(this.Jc).Rk : !1
    };
    g.k.Rc = function(a, b) {
        this.LY = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.zc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.LY
    };
    g.k.getProgressState = function() {
        var a = M9(this.Jc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Wh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Jc && this.Jc.nextVideo()
    };
    g.k.wK = function() {
        this.Jc && this.Jc.wK()
    };
    g.k.f$ = function(a) {
        1 === a && (this.qR = this.Jc ? M9(this.Jc) : null)
    };
    g.k.Caa = function() {
        var a = DFb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.Gs;
            this.loaded && this.unload();
            this.Jc = a;
            this.qR = null;
            b.key !== this.Lp.key && (this.Gs = b, this.load())
        } else g.vb(this.Jc), this.Jc = null, this.loaded && (this.unload(), (a = this.qR) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.d_ = function() {
        var a = [this.Lp],
            b = a.concat,
            c = zFb();
        C9() && g.sC("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Yt = b.call(a, c);
        a = BFb() || this.Lp;
        p$(this, a);
        this.player.zc("onMdxReceiversChange")
    };
    g.k.Aaa = function() {
        var a = BFb();
        p$(this, a)
    };
    g.k.zaa = function() {
        this.Gs = BFb()
    };
    g.k.cca = function() {
        this.vF = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.bca = function() {
        this.vF = !1;
        o$(this);
        p$(this, this.Lp);
        this.Gs = this.Lp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Oh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Yt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? SEb() : p$(this, b)), this.loaded ? this.Gs : this.Lp;
            case "quickCast":
                return 2 === this.Yt.length && "cast-selector-receiver" === this.Yt[1].key ? (b && SEb(), !0) : !1
        }
    };
    g.k.IS = function() {
        this.Jc.IS()
    };
    g.k.wl = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.aB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.aB("SESSION_INDEX") && !g.aB("LOGGED_IN"))
    };
    g.tV("remote", NFb);
})(_yt_player);