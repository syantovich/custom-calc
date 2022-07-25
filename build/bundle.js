(() => {
  "use strict";
  var n = {
      579: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(537),
          a = t.n(r),
          o = t(645),
          i = t.n(o)()(a());
        i.push([
          n.id,
          '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n@media all and (max-width: 991px) {\n  body {\n    margin: 0;\n  }\n  .wrapper_calc_calculator {\n    width: 50%;\n    min-width: 490px;\n    height: 100vh;\n  }\n  .history_calculator {\n    display: none !important;\n  }\n  .wrapper_calculator .string_calculator {\n    width: 100%;\n    min-height: calc(100vh * 3 / 8);\n  }\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vh / 38);\n  }\n  .buttons_calculator {\n    width: 100%;\n  }\n  .wrapper_calculator .undo {\n    width: 100px;\n    height: 30px;\n  }\n  .history_element {\n    width: 100%;\n  }\n}\n\n@media all and (max-width: 495px) {\n  .wrapper_calc_calculator {\n    width: 100% !important;\n    min-width: 100%;\n  }\n\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vw / 32);\n  }\n\n  .wrapper_calculator .num,\n  .wrapper_calculator .elementary {\n    font-size: calc(100vw / 16);\n  }\n  .wrapper_calculator .undo {\n    width: 40%;\n    height: 50px;\n    font-size: calc(100vw / 16);\n  }\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/view/calculator.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n@media all and (max-width: 991px) {\n  body {\n    margin: 0;\n  }\n  .wrapper_calc_calculator {\n    width: 50%;\n    min-width: 490px;\n    height: 100vh;\n  }\n  .history_calculator {\n    display: none !important;\n  }\n  .wrapper_calculator .string_calculator {\n    width: 100%;\n    min-height: calc(100vh * 3 / 8);\n  }\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vh / 38);\n  }\n  .buttons_calculator {\n    width: 100%;\n  }\n  .wrapper_calculator .undo {\n    width: 100px;\n    height: 30px;\n  }\n  .history_element {\n    width: 100%;\n  }\n}\n\n@media all and (max-width: 495px) {\n  .wrapper_calc_calculator {\n    width: 100% !important;\n    min-width: 100%;\n  }\n\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vw / 32);\n  }\n\n  .wrapper_calculator .num,\n  .wrapper_calculator .elementary {\n    font-size: calc(100vw / 16);\n  }\n  .wrapper_calculator .undo {\n    width: 40%;\n    height: 50px;\n    font-size: calc(100vw / 16);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, a, o) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var l = this[c][0];
                  null != l && (i[l] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var A = [].concat(n[s]);
                (r && i[A[0]]) ||
                  (void 0 !== o &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = o)),
                  t &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = t))
                      : (A[2] = t)),
                  a &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = a))
                      : (A[4] = "".concat(a))),
                  e.push(A));
              }
            }),
            e
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              a =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              o = "/*# ".concat(a, " */"),
              i = t.sources.map(function (n) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(n, " */");
              });
            return [e].concat(i).concat([o]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var o = {}, i = [], c = 0; c < n.length; c++) {
            var l = n[c],
              s = r.base ? l[0] + r.base : l[0],
              A = o[s] || 0,
              p = "".concat(s, " ").concat(A);
            o[s] = A + 1;
            var u = t(p),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(d);
            else {
              var h = a(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function a(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, a) {
          var o = r((n = n || []), (a = a || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < o.length; i++) {
              var c = t(o[i]);
              e[c].references--;
            }
            for (var l = r(n, a), s = 0; s < o.length; s++) {
              var A = t(o[s]);
              0 === e[A].references && (e[A].updater(), e.splice(A, 1));
            }
            o = l;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
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
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return n[r](o, o.exports, t), o.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      function n(e) {
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
          a < e.length;
          a++
        )
          if (!(e[a] in t) && !(e[a] in r))
            throw "В строке содержаться недопустимые символы!";
        e = e.split(" ").join("").split("");
        for (var o = 0, i = 0, c = 0; c < e.length; c++)
          if (("(" === e[c] && o++, ")" === e[c] && i++, o < i))
            throw "Проверьте скобки";
        if (o !== i) throw "Проверьте скобки";
        for (var l = 0; l < e.length; l++)
          e[l] in r && (e.splice(l, 0, "!"), e.splice(l + 2, 0, "!"), (l += 2)),
            "-" === e[l] &&
              "e" !== e[l - 1] &&
              (e.splice(l, 0, "!"),
              "(" === e[l + 2] && (e.splice(l + 2, 0, "!"), l++),
              l++),
            "+" === e[l] && "e" !== e[l - 1] && (e.splice(l, 0, "!"), l++);
        e = e.join("").split("!");
        for (var s = 0; s < e.length; s++) "" === e[s] && (e.splice(s, 1), s--);
        for (; -1 !== e.indexOf("("); )
          if (((o = e.indexOf("(")), (i = e.length), -1 !== o)) {
            i = o;
            for (var A = 1; 0 !== A; )
              "(" === e[++i] && A++, ")" === e[i] && A--;
            var p = n(e.slice(o + 1, i).join(""));
            if (
              (/[0-9]/.test(e[o - 1]) && (e.splice(o, 0, "*"), o++),
              "Ошибка" === p)
            )
              throw p;
            o--,
              e.splice(o + 1, i - o + 2, p),
              "-" === e[o]
                ? ((e[o + 1] *= -1), e.splice(o, 1))
                : "+" === e[o] && e.splice(o, 1);
          } else o = 0;
        var u = 0,
          d = e.join("").split(/[*/^]/).join("");
        if (e.join("").split(/[0-9]/).join("").length >= d.length)
          throw "Ошибка";
        for (; -1 !== e.indexOf("^"); )
          for (var h = 0; h < e.length; h++)
            "^" === e[h] &&
              ((u = Math.pow(parseFloat(e[h - 1]), parseFloat(e[h + 1]))),
              e.splice(h - 1, 3, "".concat(u)),
              (h -= 1));
        for (; -1 !== e.indexOf("*") || -1 !== e.indexOf("/"); )
          for (var g = 0; g < e.length; g++) {
            var b = e[g];
            "*" === b &&
              ((u = parseFloat(e[g - 1]) * parseFloat(e[g + 1])),
              e.splice(g - 1, 3, "".concat(u)),
              (g -= 1)),
              "/" === b &&
                ((u = parseFloat(e[g - 1]) / parseFloat(e[g + 1])),
                e.splice(g - 1, 3, "".concat(u)),
                (g -= 1));
          }
        u = 0;
        for (var m = 0; m < e.length; m++) u += parseFloat(e[m]);
        if ((u = parseFloat(u.toPrecision(12))) === 1 / 0 || u === -1 / 0)
          throw "Деление на ноль не возможно";
        if (isNaN(u)) throw "Ошибка";
        return "".concat(u);
      }
      var e = function (n, e) {
          return (n * e) / 100;
        },
        r = function (n) {
          return n < 0 ? "+".concat(-1 * n) : -1 * n;
        },
        a = function (e, t) {
          var r = n("".concat(e, "^").concat(t));
          return r >= 0 ? "+".concat(r) : "".concat(r);
        },
        o = function (n) {
          return a(n, 2);
        },
        i = function (n) {
          return a(n, 3);
        },
        c = function (n) {
          return a(10, n);
        },
        l = function (n) {
          return n >= 0 ? "+".concat(1 / n) : 1 / n;
        },
        s = function (n, e) {
          return a(n, 1 / e);
        },
        A = function (n) {
          return s(n, 2);
        },
        p = function (n) {
          return s(n, 3);
        };
      function u(n) {
        return 0 === (n = Math.round(n)) ? 1 : n * u(n - 1);
      }
      function d(n, e) {
        return n + "".concat(e);
      }
      function h(n) {
        return {
          string: n[n.length - 1].string,
          openBrakets: n[n.length - 1].openBrakets,
        };
      }
      function g(n, e) {
        e.openBrakets = [];
        for (var t = 0; -1 !== n.slice(t).indexOf("("); ) {
          var r = n.slice(t).indexOf("(");
          (t = r + 1), this.openBrakets.push(r);
        }
      }
      function b(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function m(n, e, t) {
        return (
          e && b(n.prototype, e),
          t && b(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      var f = m(function n(e, t, r, a) {
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.execute = e),
            (this.undo = a),
            (this.type = t),
            (this.symbol = r);
        }),
        C = "calculate string",
        w = "calculate action",
        E = "calculate percent";
      function B(e) {
        return new f(n, C, e);
      }
      function k() {
        return new f(e, E, "%");
      }
      function x() {
        return new f(r, w, "+/-");
      }
      function v() {
        return new f(o, w, "^2");
      }
      function y() {
        return new f(i, w, "^3");
      }
      function _() {
        return new f(c, w, "10^");
      }
      function I() {
        return new f(l, w, "1/");
      }
      function S() {
        return new f(A, w, "^(1/2)");
      }
      function W() {
        return new f(p, w, "^(1/3)");
      }
      function j() {
        return new f(u, w, "!");
      }
      function z() {
        return new f(null, null, null, h);
      }
      function Y(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      var M = (function () {
        function n() {
          var e = this;
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.current = 0),
            (this.commands = []),
            (this.openBrakets = []),
            (this.history = []),
            (this.memory = 0);
          var t = "0",
            r = !1;
          (this.next = void 0),
            (this.setString = function (n) {
              t = n;
            }),
            (this.getString = function () {
              return t;
            }),
            (this.changeIsEdit = function (n) {
              r = n;
            }),
            (this.getIsEddit = function () {
              return r;
            }),
            (this.execute = function (n) {
              if (e.openBrakets.length < 0) return !1;
              try {
                switch (n.type) {
                  case C:
                    e.calculateString(n, t);
                    break;
                  case w:
                    e.calculateAction(n, t);
                    break;
                  case E:
                    e.calculatePercent(n, t);
                }
                if (2 === t.split(/[-^/(+*]/).length && "+" === t[0]) {
                  var r = t.split("");
                  r.shift(), (t = r.join(""));
                }
              } catch (n) {
                e.setString(n), (e.openBrakets = []);
              }
              return (e.next = void 0), e.changeIsEdit(!1), t;
            }),
            (this.undo = function (n) {
              if (e.commands.length) {
                e.changeIsEdit(!0);
                var t = n.undo(e.commands);
                t.string && (g(t.string, e), e.setString(t.string)),
                  e.commands.pop();
              }
            });
        }
        var e, t;
        return (
          (e = n),
          (t = [
            {
              key: "calculateString",
              value: function (n, e) {
                if ("M+" !== n.symbol && "M-" !== n.symbol) {
                  this.commands.push({
                    openBrakets: this.openBrakets,
                    command: n,
                    string: e,
                  });
                  var t = e,
                    r = this.openBrakets.length;
                  ")" === n.symbol ||
                  ("=" === n.symbol && this.openBrakets.length)
                    ? (this.current = n.execute(
                        "".concat(
                          e.slice(this.getIndex(), "".concat(e).length),
                          ")"
                        )
                      ))
                    : (this.current = n.execute(
                        e.slice(this.getIndex(), "".concat(e).length)
                      ));
                  var a = e.split("");
                  if (/[.0-9]/.test(e[this.getIndex() - 1]))
                    a.splice(
                      this.getIndex(),
                      "".concat(e).length,
                      "*".concat(this.current)
                    );
                  else if (/[-+]/.test(e[this.getIndex() - 1])) {
                    var o =
                      "".concat(e[this.getIndex() - 1], "1") * this.current;
                    a.splice(
                      this.getIndex() - 1,
                      "".concat(e).length,
                      o.toString()
                    );
                  } else
                    a.splice(
                      this.getIndex(),
                      "".concat(e).length,
                      this.current
                    );
                  if ((this.setString(a.join("")), "=" === n.symbol)) {
                    for (var i = 0; i < r; i++) t += ")";
                    this.history.push("".concat(t, " = ").concat(a.join("")));
                  }
                  return !0;
                }
                if (0 === this.findIndexWithMark(e.length - 1, e)) {
                  var c = +"".concat(n.symbol[1], "1") * +e;
                  this.memory = n.execute(
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
              value: function (n, e) {
                this.commands.push({
                  openBrakets: this.openBrakets,
                  command: n,
                  string: e,
                });
                var t = e.length - 1;
                if (!/[0-9]/.test(e[t])) throw "Выполнить действие невозможно";
                t = this.findIndexWithMark(t, e);
                var r = e.split("");
                try {
                  return (
                    (this.next = n.execute(
                      +r.slice(t, "".concat(e).length).join("")
                    )),
                    r.splice(t, "".concat(e).length, this.next),
                    this.setString(r.join("")),
                    !0
                  );
                } catch (n) {
                  throw "Неверный ввод";
                }
              },
            },
            {
              key: "calculatePercent",
              value: function (n, e) {
                var t,
                  r = this.findIndexWithMark(e.length - 1, e, !0);
                if (
                  (/[*/]/.test(e[r - 1])
                    ? ((t = this.findIndexWithMark(r - 2, e)),
                      (this.current = e.slice(t, r - 1)))
                    : ((t = this.findIndexWithMark(r - 2, e)),
                      (this.current = e.slice(t, r))),
                  !1 === t)
                )
                  throw "You need to write some action";
                (this.next = e.slice(r)),
                  (this.next = n.execute(+this.current, +this.next)),
                  this.commands.push({
                    openBrakets: this.openBrakets,
                    command: n,
                    string: e,
                  });
                var a = e.split("");
                a.splice(r, "".concat(e).length, this.next),
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
              value: function (n, e, t) {
                if (!n) return !1;
                for (var r = !0, a = n; a > 0 && r; ) {
                  if ("(" === e[a] && t) return !1;
                  if (/[*/(]/.test(e[a])) return (r = a++), a;
                  "+" === e[a] || "-" === e[a]
                    ? "e" === e[a - 1]
                      ? (a -= 2)
                      : (r = !1)
                    : a--;
                }
                return a;
              },
            },
          ]) && Y(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          n
        );
      })();
      function O(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function Z(n, e, t) {
        return (
          e && O(n.prototype, e),
          t && O(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      var T = Z(function n(e, t, r, a, o, i) {
          var c = this;
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.areaResult = o),
            (this.value = e);
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
                    var n = document.createElement("div");
                    (n.className = "history_element"),
                      (n.innerText = r.history[r.history.length - 1]);
                    var o = i.firstChild;
                    i.classList.add("visible"), i.insertBefore(n, o);
                  }
                  break;
                case "number":
                  "x^(1/y)" === e &&
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
                  "AC" === e && (r.setString("0"), r.changeIsEdit(!1)),
                    "MC" === e && (r.memory = 0),
                    "MR" === e &&
                      (r.setString(r.memory),
                      (r.openBrakets = []),
                      r.changeIsEdit(!1)),
                    ("M+" !== e && "M-" !== e) || r.execute(a);
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
        V = t.n(X),
        H = t(589),
        J = t.n(H),
        Q = t(579),
        G = {};
      (G.styleTagTransform = J()),
        (G.setAttributes = F()),
        (G.insert = U().bind(null, "head")),
        (G.domAPI = P()),
        (G.insertStyleElement = V()),
        L()(Q.Z, G),
        Q.Z && Q.Z.locals && Q.Z.locals,
        (function (n) {
          var e = document.createElement("div"),
            t = document.createElement("div"),
            r = document.createElement("div"),
            a = document.createElement("div"),
            o = document.createElement("div"),
            i = [];
          (e.className = "wrapper_calculator"),
            (r.className = "string_calculator"),
            (r.innerText = n.getString()),
            (a.className = "history_calculator"),
            (o.className = "buttons_calculator"),
            (t.className = "wrapper_calc_calculator"),
            (T.prototype.areaResult = r);
          for (var c = 0; c < 10; c++)
            i.push(new T(c, "number", n, null, r)),
              i[c].element.classList.add("num");
          i[0].element.classList.add("two_seat");
          var l = document.createElement("div");
          (l.innerText = "Темная тема"), (l.className = "darkMode");
          var s = document.createElement("div");
          s.classList.add("toggleWrapper");
          var A = document.createElement("input");
          (A.type = "checkbox"),
            (A.name = "toggle"),
            (A.id = "toggle"),
            (A.checked = !0),
            (A.className = "toggle");
          var p = document.createElement("label");
          (p.for = "toggle"),
            s.append(l),
            s.append(A),
            s.append(p),
            s.addEventListener("click", function () {
              (A.checked = !A.checked), e.classList.toggle("dark");
            });
          var u = new T("+", "number", n, null, r),
            d = new T("-", "number", n, null, r),
            h = new T("*", "number", n, null, r),
            b = new T(".", "number", n, null, r),
            m = new T("/", "number", n, null, r),
            f = new T("^", "number", n, null, r),
            C = new T("%", "action", n, new k(), r),
            w = new T("+/-", "action", n, new x(), r),
            E = new T("x^2", "action", n, new v(), r),
            Y = new T("x^3", "action", n, new y(), r),
            M = new T("10^x", "action", n, new _(), r),
            O = new T("1/x", "action", n, new I(), r),
            Z = new T("x^(1/y)", "number", n, null, r),
            D = new T("x^(1/2)", "action", n, new S(), r),
            L = new T("x^(1/3)", "action", n, new W(), r),
            N = new T("!", "action", n, new j(), r),
            P = new T("=", "action", n, new B("="), r, a),
            R = new T("(", "bracketOpen", n, null, r),
            U = new T(")", "bracketClose", n, new B(")"), r),
            q = new T("MC", "memory", n),
            F = new T("MR", "memory", n, null, r),
            X = new T("M+", "memory", n, new B("M+")),
            V = new T("M-", "memory", n, new B("M-")),
            H = new T("AC", "memory", n, null, r);
          o.append(R.element),
            o.append(U.element),
            o.append(q.element),
            o.append(H.element),
            o.append(w.element),
            o.append(C.element),
            m.element.classList.add("elementary"),
            o.append(m.element),
            o.append(X.element),
            o.append(V.element),
            o.append(F.element),
            o.append(i[7].element),
            o.append(i[8].element),
            o.append(i[9].element),
            h.element.classList.add("elementary"),
            o.append(h.element),
            o.append(E.element),
            o.append(Y.element),
            o.append(f.element),
            o.append(i[4].element),
            o.append(i[5].element),
            o.append(i[6].element),
            d.element.classList.add("elementary"),
            o.append(d.element),
            o.append(M.element),
            o.append(O.element),
            o.append(Z.element),
            o.append(i[1].element),
            o.append(i[2].element),
            o.append(i[3].element),
            u.element.classList.add("elementary"),
            o.append(u.element),
            o.append(D.element),
            o.append(L.element),
            o.append(N.element),
            o.append(i[0].element),
            b.element.classList.add("num"),
            o.append(b.element),
            P.element.classList.add("elementary"),
            o.append(P.element);
          var J = new T("Вернуть", "undo", n, new z(), r);
          t.append(r),
            t.append(o),
            e.append(t),
            e.append(a),
            t.append(J.element),
            t.append(s),
            document.body.querySelector("main").append(e);
          var Q = !1,
            G = !1,
            K = !1;
          document.addEventListener("keydown", function (e) {
            var t;
            switch (
              (8 === e.keyCode &&
                ("(" === (t = n.getString().split(""))[t.length - 1] &&
                  n.openBrakets.pop(),
                t.pop(),
                0 === t.length && (t.push("0"), n.changeIsEdit(!1)),
                n.setString(t.join("")),
                (r.innerText = t.join(""))),
              /[0-9]/.test(e.key) && i[e.key].element.click(),
              e.key)
            ) {
              case "+":
                u.element.click();
                break;
              case "-":
                d.element.click();
                break;
              case "*":
                h.element.click();
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
            13 === e.keyCode && P.element.click(),
              17 === e.keyCode && (Q = !0),
              90 === e.keyCode && (G = !0),
              86 === e.keyCode && (K = !0),
              Q &&
                K &&
                (navigator.clipboard
                  .readText()
                  .then(function (e) {
                    0 === e.split(/[-+^*/.()0-9]/).join("").length &&
                      n.setString(e),
                      g(e, n);
                  })
                  .catch(function (n) {
                    console.log("Something went wrong", n);
                  }),
                (K = !1)),
              Q && G && J.element.click();
          }),
            document.addEventListener("keyup", function (n) {
              17 === n.keyCode && (Q = !1),
                90 === n.keyCode && (G = !1),
                86 === n.keyCode && (K = !1);
            });
        })(new M());
    })();
})();
//# sourceMappingURL=bundle.js.map
