(() => {
  "use strict";
  var e = {
      579: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(537),
          a = t.n(r),
          o = t(645),
          i = t.n(o)()(a());
        i.push([
          e.id,
          '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/view/calculator.css"],
            names: [],
            mappings:
              "AAAA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,kCAAkC;AACpC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,uCAAuC;AACzC;AACA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,yBAAyB;EACzB,mCAAmC;EACnC,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,+DAA+D;AACjE;AACA;EACE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,MAAM;AACR;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,qBAAqB;EACrB,wCAAwC;EACxC,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,mDAAmD;EACnD,iDAAiD;EACjD,sDAAsD;EACtD,8CAA8C;EAC9C,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd;gEAC8D;EAC9D,iDAAiD;EACjD,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,OAAO;EACP,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iDAAiD;AACnD;AACA;EACE,UAAU;AACZ",
            sourcesContent: [
              '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var l = this[c][0];
                  null != l && (i[l] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var p = [].concat(e[s]);
                (r && i[p[0]]) ||
                  (void 0 !== o &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = o)),
                  t &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = t))
                      : (p[2] = t)),
                  a &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = a))
                      : (p[4] = "".concat(a))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              a =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              o = "/*# ".concat(a, " */"),
              i = t.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(e, " */");
              });
            return [n].concat(i).concat([o]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var l = e[c],
              s = r.base ? l[0] + r.base : l[0],
              p = o[s] || 0,
              u = "".concat(s, " ").concat(p);
            o[s] = p + 1;
            var A = t(u),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== A) n[A].references++, n[A].updater(d);
            else {
              var g = a(d, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: u, updater: g, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function a(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = t(o[i]);
              n[c].references--;
            }
            for (var l = r(e, a), s = 0; s < o.length; s++) {
              var p = t(o[s]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            o = l;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var o = t.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var o = (n[r] = { id: r, exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      function e(n) {
        for (
          var t = {
              0: !0,
              1: !0,
              2: !0,
              3: !0,
              4: !0,
              5: !0,
              6: !0,
              7: !0,
              8: !0,
              9: !0,
              ".": !0,
              "+": !0,
              "-": !0,
              e: !0,
            },
            r = { "(": !0, ")": !0, "*": !0, "/": !0, " ": !0, "^": !0 },
            a = 0;
          a < n.length;
          a++
        )
          if (!(n[a] in t) && !(n[a] in r))
            throw "В строке содержаться недопустимые символы!";
        n = n.split(" ").join("").split("");
        for (var o = 0, i = 0, c = 0; c < n.length; c++)
          if (("(" === n[c] && o++, ")" === n[c] && i++, o < i))
            throw "Проверьте скобки";
        if (o !== i) throw "Проверьте скобки";
        for (var l = 0; l < n.length; l++)
          n[l] in r && (n.splice(l, 0, "!"), n.splice(l + 2, 0, "!"), (l += 2)),
            "-" === n[l] &&
              "e" !== n[l - 1] &&
              (n.splice(l, 0, "!"),
              "(" === n[l + 2] && (n.splice(l + 2, 0, "!"), l++),
              l++),
            "+" === n[l] && "e" !== n[l - 1] && (n.splice(l, 0, "!"), l++);
        n = n.join("").split("!");
        for (var s = 0; s < n.length; s++) "" === n[s] && (n.splice(s, 1), s--);
        for (; -1 !== n.indexOf("("); )
          if (((o = n.indexOf("(")), (i = n.length), -1 !== o)) {
            i = o;
            for (var p = 1; 0 !== p; )
              "(" === n[++i] && p++, ")" === n[i] && p--;
            var u = e(n.slice(o + 1, i).join(""));
            if (
              (/[0-9]/.test(n[o - 1]) && (n.splice(o, 0, "*"), o++),
              "Ошибка" === u)
            )
              throw u;
            o--,
              n.splice(o + 1, i - o + 2, u),
              "-" === n[o]
                ? ((n[o + 1] *= -1), n.splice(o, 1))
                : "+" === n[o] && n.splice(o, 1);
          } else o = 0;
        var A = 0,
          d = n.join("").split(/[*/^]/).join("");
        if (n.join("").split(/[0-9]/).join("").length >= d.length)
          throw "Ошибка";
        for (; -1 !== n.indexOf("^"); )
          for (var g = 0; g < n.length; g++)
            "^" === n[g] &&
              ((A = Math.pow(parseFloat(n[g - 1]), parseFloat(n[g + 1]))),
              n.splice(g - 1, 3, "".concat(A)),
              (g -= 1));
        for (; -1 !== n.indexOf("*") || -1 !== n.indexOf("/"); )
          for (var h = 0; h < n.length; h++) {
            var b = n[h];
            "*" === b &&
              ((A = parseFloat(n[h - 1]) * parseFloat(n[h + 1])),
              n.splice(h - 1, 3, "".concat(A)),
              (h -= 1)),
              "/" === b &&
                ((A = parseFloat(n[h - 1]) / parseFloat(n[h + 1])),
                n.splice(h - 1, 3, "".concat(A)),
                (h -= 1));
          }
        A = 0;
        for (var m = 0; m < n.length; m++) A += parseFloat(n[m]);
        if ((A = parseFloat(A.toPrecision(12))) === 1 / 0 || A === -1 / 0)
          throw "Деление на ноль не возможно";
        if (isNaN(A)) throw "Ошибка";
        return "".concat(A);
      }
      var n = function (e, n) {
          return (e * n) / 100;
        },
        r = function (e) {
          return e < 0 ? "+".concat(-1 * e) : -1 * e;
        },
        a = function (n, t) {
          var r = e("".concat(n, "^").concat(t));
          return r >= 0 ? "+".concat(r) : "".concat(r);
        },
        o = function (e) {
          return a(e, 2);
        },
        i = function (e) {
          return a(e, 3);
        },
        c = function (e) {
          return a(10, e);
        },
        l = function (e) {
          return e >= 0 ? "+".concat(1 / e) : 1 / e;
        },
        s = function (e, n) {
          return a(e, 1 / n);
        },
        p = function (e) {
          return s(e, 2);
        },
        u = function (e) {
          return s(e, 3);
        };
      function A(e) {
        return 0 === (e = Math.round(e)) ? 1 : e * A(e - 1);
      }
      function d(e, n) {
        return e + "".concat(n);
      }
      function g(e) {
        return {
          string: e[e.length - 1].string,
          openBrakets: e[e.length - 1].openBrakets,
        };
      }
      function h(e, n) {
        n.openBrakets = [];
        for (var t = 0; -1 !== e.slice(t).indexOf("("); ) {
          var r = e.slice(t).indexOf("(");
          (t = r + 1), this.openBrakets.push(r);
        }
      }
      function b(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, n, t) {
        return (
          n && b(e.prototype, n),
          t && b(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var f = m(function e(n, t, r, a) {
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.execute = n),
            (this.undo = a),
            (this.type = t),
            (this.symbol = r);
        }),
        C = "calculate string",
        k = "calculate action",
        w = "calculate percent";
      function B(n) {
        return new f(e, C, n);
      }
      function E() {
        return new f(n, w, "%");
      }
      function x() {
        return new f(r, k, "+/-");
      }
      function v() {
        return new f(o, k, "^2");
      }
      function y() {
        return new f(i, k, "^3");
      }
      function _() {
        return new f(c, k, "10^");
      }
      function S() {
        return new f(l, k, "1/");
      }
      function j() {
        return new f(p, k, "^(1/2)");
      }
      function W() {
        return new f(u, k, "^(1/3)");
      }
      function M() {
        return new f(A, k, "!");
      }
      function Y() {
        return new f(null, null, null, g);
      }
      function z(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var I = (function () {
        function e() {
          var n = this;
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.current = 0),
            (this.commands = []),
            (this.openBrakets = []),
            (this.history = []),
            (this.memory = 0);
          var t = "0",
            r = !1;
          (this.next = void 0),
            (this.setString = function (e) {
              t = e;
            }),
            (this.getString = function () {
              return t;
            }),
            (this.changeIsEdit = function (e) {
              r = e;
            }),
            (this.getIsEddit = function () {
              return r;
            }),
            (this.execute = function (e) {
              if (n.openBrakets.length < 0) return !1;
              try {
                switch (e.type) {
                  case C:
                    n.calculateString(e, t);
                    break;
                  case k:
                    n.calculateAction(e, t);
                    break;
                  case w:
                    n.calculatePercent(e, t);
                }
                if (2 === t.split(/[-^/(+*]/).length && "+" === t[0]) {
                  var r = t.split("");
                  r.shift(), (t = r.join(""));
                }
              } catch (e) {
                n.setString(e), (n.openBrakets = []);
              }
              (n.next = void 0), n.changeIsEdit(!1);
            }),
            (this.undo = function (e) {
              if (n.commands.length) {
                n.changeIsEdit(!0);
                var t = e.undo(n.commands);
                t.string && (h(t.string, n), n.setString(t.string)),
                  n.commands.pop();
              }
            });
        }
        var n, t;
        return (
          (n = e),
          (t = [
            {
              key: "calculateString",
              value: function (e, n) {
                if ("M+" !== e.symbol && "M-" !== e.symbol) {
                  this.commands.push({
                    openBrakets: this.openBrakets,
                    command: e,
                    string: n,
                  });
                  var t = n,
                    r = this.openBrakets.length;
                  ")" === e.symbol ||
                  ("=" === e.symbol && this.openBrakets.length)
                    ? (this.current = e.execute(
                        "".concat(
                          n.slice(this.getIndex(), "".concat(n).length),
                          ")"
                        )
                      ))
                    : (this.current = e.execute(
                        n.slice(this.getIndex(), "".concat(n).length)
                      ));
                  var a = n.split("");
                  if (/[.0-9]/.test(n[this.getIndex() - 1]))
                    a.splice(
                      this.getIndex(),
                      "".concat(n).length,
                      "*".concat(this.current)
                    );
                  else if (/[-+]/.test(n[this.getIndex() - 1])) {
                    var o =
                      "".concat(n[this.getIndex() - 1], "1") * this.current;
                    a.splice(
                      this.getIndex() - 1,
                      "".concat(n).length,
                      o.toString()
                    );
                  } else
                    a.splice(
                      this.getIndex(),
                      "".concat(n).length,
                      this.current
                    );
                  if ((this.setString(a.join("")), "=" === e.symbol)) {
                    for (var i = 0; i < r; i++) t += ")";
                    this.history.push("".concat(t, " = ").concat(a.join("")));
                  }
                  return !0;
                }
                if (0 === this.findIndexWithMark(n.length - 1, n)) {
                  var c = +"".concat(e.symbol[1], "1") * +n;
                  this.memory = e.execute(
                    ""
                      .concat(this.memory)
                      .concat(c >= 0 ? "+" : "")
                      .concat(c)
                  );
                }
              },
            },
            {
              key: "calculateAction",
              value: function (e, n) {
                this.commands.push({
                  openBrakets: this.openBrakets,
                  command: e,
                  string: n,
                });
                var t = n.length - 1;
                if (!/[0-9]/.test(n[t])) throw "Выполнить действие невозможно";
                t = this.findIndexWithMark(t, n);
                var r = n.split("");
                try {
                  return (
                    (this.next = e.execute(
                      +r.slice(t, "".concat(n).length).join("")
                    )),
                    r.splice(t, "".concat(n).length, this.next),
                    this.setString(r.join("")),
                    !0
                  );
                } catch (e) {
                  throw "Неверный ввод";
                }
              },
            },
            {
              key: "calculatePercent",
              value: function (e, n) {
                var t,
                  r = this.findIndexWithMark(n.length - 1, n, !0);
                if (
                  (/[*/]/.test(n[r - 1])
                    ? ((t = this.findIndexWithMark(r - 2, n)),
                      (this.current = n.slice(t, r - 1)))
                    : ((t = this.findIndexWithMark(r - 2, n)),
                      (this.current = n.slice(t, r))),
                  !1 === t)
                )
                  throw "You need to write some action";
                (this.next = n.slice(r)),
                  (this.next = e.execute(+this.current, +this.next)),
                  this.commands.push({
                    openBrakets: this.openBrakets,
                    command: e,
                    string: n,
                  });
                var a = n.split("");
                a.splice(r, "".concat(n).length, this.next),
                  this.setString(a.join(""));
              },
            },
            {
              key: "getIndex",
              value: function () {
                return this.openBrakets.length
                  ? this.openBrakets[this.openBrakets.length - 1]
                  : this.openBrakets[0];
              },
            },
            {
              key: "findIndexWithMark",
              value: function (e, n, t) {
                if (!e) return !1;
                for (var r = !0, a = e; a > 0 && r; ) {
                  if ("(" === n[a] && t) return !1;
                  if (/[*/(]/.test(n[a])) return (r = a++), a;
                  "+" === n[a] || "-" === n[a]
                    ? "e" === n[a - 1]
                      ? (a -= 2)
                      : (r = !1)
                    : a--;
                }
                return a;
              },
            },
          ]) && z(n.prototype, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })();
      function O(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Z(e, n, t) {
        return (
          n && O(e.prototype, n),
          t && O(e, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var T = Z(function e(n, t, r, a, o, i) {
          var c = this;
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.areaResult = o),
            (this.value = n);
          var l = document.createElement("button");
          (l.innerText = this.value),
            (l.className = t),
            l.addEventListener("click", function () {
              switch (t) {
                case "action":
                  if ("=" === c.value)
                    for (; 0 !== r.openBrakets.length; )
                      r.execute(a), r.openBrakets.pop();
                  if (
                    (r.execute(a), "=" === c.value && !isNaN(r.getString()))
                  ) {
                    var e = document.createElement("div");
                    (e.className = "history_element"),
                      (e.innerText = r.history[r.history.length - 1]);
                    var o = i.firstChild;
                    i.classList.add("visible"), i.insertBefore(e, o);
                  }
                  break;
                case "number":
                  "x^(1/y)" === n &&
                    ((c.value = "^(1/"),
                    r.openBrakets.push(r.getString().length + 1)),
                    r.getIsEddit()
                      ? r.setString(d(r.getString(), c.value))
                      : !/[.0-9]/.test(c.value) && /[0-9]/.test(r.getString())
                      ? (r.setString(d(r.getString(), c.value)),
                        r.changeIsEdit(!0))
                      : (r.changeIsEdit(!0), r.setString("".concat(c.value)));
                  break;
                case "bracketOpen":
                  r.getIsEddit()
                    ? (1 === r.getString().length && "0" === r.getString()[0]
                        ? r.openBrakets.push(0)
                        : r.openBrakets.push(r.getString().length),
                      r.setString(d(r.getString(), c.value)))
                    : ((r.openBrakets = []),
                      r.openBrakets.push(0),
                      r.setString(c.value),
                      r.changeIsEdit(!0));
                  break;
                case "bracketClose":
                  0 === r.openBrakets.length && r.setString("Ошибка"),
                    r.execute(a),
                    r.openBrakets.pop();
                  break;
                case "memory":
                  "AC" === n && (r.setString("0"), r.changeIsEdit(!1)),
                    "MC" === n && (r.memory = 0),
                    "MR" === n &&
                      (r.setString(r.memory),
                      (r.openBrakets = []),
                      r.changeIsEdit(!1)),
                    ("M+" !== n && "M-" !== n) || r.execute(a);
                  break;
                case "undo":
                  r.undo(a);
              }
              c.areaResult && (c.areaResult.innerText = r.getString());
            }),
            (this.element = l),
            (this.type = t);
        }),
        D = t(379),
        L = t.n(D),
        N = t(795),
        P = t.n(N),
        R = t(569),
        U = t.n(R),
        q = t(565),
        F = t.n(q),
        X = t(216),
        H = t.n(X),
        J = t(589),
        Q = t.n(J),
        V = t(579),
        G = {};
      (G.styleTagTransform = Q()),
        (G.setAttributes = F()),
        (G.insert = U().bind(null, "head")),
        (G.domAPI = P()),
        (G.insertStyleElement = H()),
        L()(V.Z, G),
        V.Z && V.Z.locals && V.Z.locals,
        (function (e) {
          var n = document.createElement("div"),
            t = document.createElement("div"),
            r = document.createElement("div"),
            a = document.createElement("div"),
            o = document.createElement("div"),
            i = [];
          (n.className = "wrapper_calculator"),
            (r.className = "string_calculator"),
            (r.innerText = e.getString()),
            (a.className = "history_calculator"),
            (o.className = "buttons_calculator"),
            (t.className = "wrapper_calc_calculator"),
            (T.prototype.areaResult = r);
          for (var c = 0; c < 10; c++)
            i.push(new T(c, "number", e, null, r)),
              i[c].element.classList.add("num");
          i[0].element.classList.add("two_seat");
          var l = document.createElement("div");
          (l.innerText = "Темная тема"), (l.className = "darkMode");
          var s = document.createElement("div");
          s.classList.add("toggleWrapper");
          var p = document.createElement("input");
          (p.type = "checkbox"),
            (p.name = "toggle"),
            (p.id = "toggle"),
            (p.checked = !0),
            (p.className = "toggle");
          var u = document.createElement("label");
          (u.for = "toggle"),
            s.append(l),
            s.append(p),
            s.append(u),
            s.addEventListener("click", function () {
              (p.checked = !p.checked), n.classList.toggle("dark");
            });
          var A = new T("+", "number", e, null, r),
            d = new T("-", "number", e, null, r),
            g = new T("*", "number", e, null, r),
            b = new T(".", "number", e, null, r),
            m = new T("/", "number", e, null, r),
            f = new T("^", "number", e, null, r),
            C = new T("%", "action", e, new E(), r),
            k = new T("+/-", "action", e, new x(), r),
            w = new T("x^2", "action", e, new v(), r),
            z = new T("x^3", "action", e, new y(), r),
            I = new T("10^x", "action", e, new _(), r),
            O = new T("1/x", "action", e, new S(), r),
            Z = new T("x^(1/y)", "number", e, null, r),
            D = new T("x^(1/2)", "action", e, new j(), r),
            L = new T("x^(1/3)", "action", e, new W(), r),
            N = new T("!", "action", e, new M(), r),
            P = new T("=", "action", e, new B("="), r, a),
            R = new T("(", "bracketOpen", e, null, r),
            U = new T(")", "bracketClose", e, new B(")"), r),
            q = new T("MC", "memory", e),
            F = new T("MR", "memory", e, null, r),
            X = new T("M+", "memory", e, new B("M+")),
            H = new T("M-", "memory", e, new B("M-")),
            J = new T("AC", "memory", e, null, r);
          o.append(R.element),
            o.append(U.element),
            o.append(q.element),
            o.append(J.element),
            o.append(k.element),
            o.append(C.element),
            m.element.classList.add("elementary"),
            o.append(m.element),
            o.append(X.element),
            o.append(H.element),
            o.append(F.element),
            o.append(i[7].element),
            o.append(i[8].element),
            o.append(i[9].element),
            g.element.classList.add("elementary"),
            o.append(g.element),
            o.append(w.element),
            o.append(z.element),
            o.append(f.element),
            o.append(i[4].element),
            o.append(i[5].element),
            o.append(i[6].element),
            d.element.classList.add("elementary"),
            o.append(d.element),
            o.append(I.element),
            o.append(O.element),
            o.append(Z.element),
            o.append(i[1].element),
            o.append(i[2].element),
            o.append(i[3].element),
            A.element.classList.add("elementary"),
            o.append(A.element),
            o.append(D.element),
            o.append(L.element),
            o.append(N.element),
            o.append(i[0].element),
            b.element.classList.add("num"),
            o.append(b.element),
            P.element.classList.add("elementary"),
            o.append(P.element);
          var Q = new T("Вернуть", "undo", e, new Y(), r);
          t.append(r),
            t.append(o),
            n.append(t),
            n.append(a),
            t.append(Q.element),
            t.append(s),
            document.body.querySelector("main").append(n);
          var V = !1,
            G = !1,
            K = !1;
          document.addEventListener("keydown", function (n) {
            var t;
            switch (
              (8 === n.keyCode &&
                ("(" === (t = e.getString().split(""))[t.length - 1] &&
                  e.openBrakets.pop(),
                t.pop(),
                0 === t.length && (t.push("0"), e.changeIsEdit(!1)),
                e.setString(t.join("")),
                (r.innerText = t.join(""))),
              /[0-9]/.test(n.key) && i[n.key].element.click(),
              n.key)
            ) {
              case "+":
                A.element.click();
                break;
              case "-":
                d.element.click();
                break;
              case "*":
                g.element.click();
                break;
              case ".":
                b.element.click();
                break;
              case "/":
                m.element.click();
                break;
              case "^":
                f.element.click();
                break;
              case "%":
                C.element.click();
                break;
              case "(":
                R.element.click();
                break;
              case ")":
                U.element.click();
                break;
              case "!":
                N.element.click();
                break;
              case "=":
                P.element.click();
            }
            13 === n.keyCode && P.element.click(),
              17 === n.keyCode && (V = !0),
              90 === n.keyCode && (G = !0),
              86 === n.keyCode && (K = !0),
              V &&
                K &&
                (navigator.clipboard
                  .readText()
                  .then(function (n) {
                    0 === n.split(/[-+^*/.()0-9]/).join("").length &&
                      e.setString(n),
                      h(n, e);
                  })
                  .catch(function (e) {
                    console.log("Something went wrong", e);
                  }),
                (K = !1)),
              V && G && Q.element.click();
          }),
            document.addEventListener("keyup", function (e) {
              17 === e.keyCode && (V = !1),
                90 === e.keyCode && (G = !1),
                86 === e.keyCode && (K = !1);
            });
        })(new I());
    })();
})();
//# sourceMappingURL=bundle.js.map
