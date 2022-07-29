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
          '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  min-height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n.error {\n  position: absolute;\n\n  background: rgba(255, 123, 123, 0.69);\n  border: 0.5px black solid;\n  border-radius: 15px;\n  top: -25%;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: top 1s ease-in-out;\n  z-index: 10;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 10px;\n}\n.errorOn {\n  top: 20px;\n}\n@media all and (max-width: 991px) {\n  body {\n    margin: 0;\n  }\n  .wrapper_calc_calculator {\n    width: 50%;\n    min-width: 490px;\n    height: 100vh;\n  }\n  .history_calculator {\n    display: none !important;\n  }\n  .wrapper_calculator .string_calculator {\n    width: 100%;\n    min-height: calc(100vh * 3 / 8);\n  }\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vh / 38);\n  }\n  .buttons_calculator {\n    width: 100%;\n  }\n  .wrapper_calculator .undo {\n    width: 100px;\n    height: 30px;\n  }\n  .history_element {\n    width: 100%;\n  }\n}\n\n@media all and (max-width: 495px) {\n  .wrapper_calc_calculator {\n    width: 100% !important;\n    min-width: 100%;\n  }\n\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vw / 32);\n  }\n\n  .wrapper_calculator .num,\n  .wrapper_calculator .elementary {\n    font-size: calc(100vw / 16);\n  }\n  .wrapper_calculator .undo {\n    width: 40%;\n    height: 50px;\n    font-size: calc(100vw / 16);\n  }\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/view/calculator.css"],
            names: [],
            mappings:
              "AAAA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,kCAAkC;AACpC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,uCAAuC;AACzC;AACA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,yBAAyB;EACzB,mCAAmC;EACnC,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,+DAA+D;AACjE;AACA;EACE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,qBAAqB;AACvB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,MAAM;AACR;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;EACxB,6BAA6B;EAC7B,qBAAqB;EACrB,wCAAwC;EACxC,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,mDAAmD;EACnD,iDAAiD;EACjD,sDAAsD;EACtD,8CAA8C;EAC9C,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd;gEAC8D;EAC9D,iDAAiD;EACjD,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,OAAO;EACP,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iDAAiD;AACnD;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;;EAElB,qCAAqC;EACrC,yBAAyB;EACzB,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,2BAA2B;EAC3B,8BAA8B;EAC9B,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,SAAS;AACX;AACA;EACE;IACE,SAAS;EACX;EACA;IACE,UAAU;IACV,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,WAAW;IACX,+BAA+B;EACjC;EACA;IACE,qBAAqB;IACrB,uBAAuB;IACvB,2BAA2B;EAC7B;EACA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,uBAAuB;IACvB,2BAA2B;EAC7B;;EAEA;;IAEE,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,YAAY;IACZ,2BAA2B;EAC7B;AACF",
            sourcesContent: [
              '.wrapper_calculator {\n  width: 100%;\n  color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  transition: color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark {\n  color: black;\n}\n.wrapper_calc_calculator {\n  width: 28rem;\n  position: relative;\n}\n.history_calculator {\n  width: 28rem;\n  height: 32rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: none;\n}\n.wrapper_calculator .history_calculator div:nth-child(even) {\n  background: rgb(90, 91, 92);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator .history_calculator div:nth-child(odd) {\n  background: rgb(72, 73, 74);\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(even) {\n  background: rgb(231, 219, 219);\n}\n.wrapper_calculator.dark .history_calculator div:nth-child(odd) {\n  background: rgb(142, 161, 161);\n}\n.wrapper_calculator .visible {\n  display: block;\n}\n\n.wrapper_calculator .string_calculator {\n  width: 28rem;\n  min-height: 12rem;\n  background: rgb(72, 73, 74);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 50px 20px;\n  box-sizing: border-box;\n  font-size: 2.5rem;\n  transition: background 0.5s ease-in-out;\n}\n.wrapper_calculator.dark .string_calculator {\n  background: rgb(241, 242, 243);\n}\n\n.wrapper_calculator button {\n  width: 4rem;\n  height: 4rem;\n  background: rgb(90, 91, 92);\n  border-collapse: collapse;\n  border: 0.4px rgb(72, 73, 74) solid;\n  box-sizing: border-box;\n  color: white;\n  font-size: 1rem;\n  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\n}\n.wrapper_calculator.dark button {\n  background: rgb(231, 219, 219);\n  color: black;\n}\n.wrapper_calculator .two_seat {\n  width: calc(200% / 7);\n}\n.wrapper_calculator .num {\n  background: rgb(117, 118, 119);\n}\n.wrapper_calculator.dark .num {\n  background: rgb(185, 233, 253);\n}\n.wrapper_calculator .elementary {\n  background: rgb(241, 162, 59);\n}\n.wrapper_calculator.dark .elementary {\n  background: rgb(107, 157, 203);\n}\n.buttons_calculator {\n  width: 28rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.wrapper_calculator .undo {\n  position: absolute;\n  width: 100px;\n  height: 30px;\n  border-radius: 80px;\n  box-sizing: border-box;\n  left: 5px;\n  top: 15px;\n}\n.history_element {\n  display: flex;\n  align-items: center;\n  width: 28rem;\n  min-height: calc(100% / 10);\n  font-size: 2rem;\n  padding-left: 2rem;\n  box-sizing: border-box;\n}\n.toggleWrapper {\n  position: absolute;\n  top: 15px;\n  right: 5px;\n}\n.toggleWrapper .darkMode {\n  position: absolute;\n  left: -100px;\n  top: 0;\n}\n.toggleWrapper input.toggle {\n  opacity: 0;\n  position: absolute;\n}\n.toggleWrapper input.toggle + label {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  -moz-transition: 0.4s ease;\n  -o-transition: 0.4s ease;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-tap-highlight-color: transparent;\n  height: 30px;\n  width: 50px;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle + label:before {\n  content: "";\n  position: absolute;\n  display: block;\n  -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 15px;\n  width: 26px;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  background: #bbbbbb;\n}\n.toggleWrapper input.toggle + label:after {\n  content: "";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.04),\n    0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #bbbbbb;\n  height: 14px;\n  width: 14px;\n  top: 1px;\n  left: 0;\n  border-radius: 60px;\n}\n.toggleWrapper input.toggle:checked + label:before {\n  background: #ffffff;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.toggleWrapper input.toggle:checked + label:after {\n  left: 11px;\n}\n.error {\n  position: absolute;\n\n  background: rgba(255, 123, 123, 0.69);\n  border: 0.5px black solid;\n  border-radius: 15px;\n  top: -25%;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: top 1s ease-in-out;\n  z-index: 10;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 10px;\n}\n.errorOn {\n  top: 20px;\n}\n@media all and (max-width: 991px) {\n  body {\n    margin: 0;\n  }\n  .wrapper_calc_calculator {\n    width: 50%;\n    min-width: 490px;\n    height: 100vh;\n  }\n  .history_calculator {\n    display: none !important;\n  }\n  .wrapper_calculator .string_calculator {\n    width: 100%;\n    min-height: calc(100vh * 3 / 8);\n  }\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vh / 38);\n  }\n  .buttons_calculator {\n    width: 100%;\n  }\n  .wrapper_calculator .undo {\n    width: 100px;\n    height: 30px;\n  }\n  .history_element {\n    width: 100%;\n  }\n}\n\n@media all and (max-width: 495px) {\n  .wrapper_calc_calculator {\n    width: 100% !important;\n    min-width: 100%;\n  }\n\n  .wrapper_calculator button {\n    width: calc(100% / 7);\n    height: calc(100vh / 8);\n    font-size: calc(100vw / 32);\n  }\n\n  .wrapper_calculator .num,\n  .wrapper_calculator .elementary {\n    font-size: calc(100vw / 16);\n  }\n  .wrapper_calculator .undo {\n    width: 40%;\n    height: 50px;\n    font-size: calc(100vw / 16);\n  }\n}\n',
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
            o = 0;
          o < e.length;
          o++
        )
          if (!(e[o] in t) && !(e[o] in r))
            throw "В строке содержаться недопустимые символы!";
        e = e.split(" ").join("").split("");
        for (var i = 0, c = 0, l = 0; l < e.length; l++)
          if (("(" === e[l] && i++, ")" === e[l] && c++, i < c))
            throw "Проверьте скобки";
        if (i !== c) throw "Проверьте скобки";
        for (var s = 0; s < e.length; s++)
          e[s] in r && (e.splice(s, 0, "!"), e.splice(s + 2, 0, "!"), (s += 2)),
            "-" === e[s] &&
              "e" !== e[s - 1] &&
              (e.splice(s, 0, "!"),
              "(" === e[s + 2] && (e.splice(s + 2, 0, "!"), s++),
              s++),
            "+" === e[s] && "e" !== e[s - 1] && (e.splice(s, 0, "!"), s++);
        e = e.join("").split("!");
        for (var A = 0; A < e.length; A++) "" === e[A] && (e.splice(A, 1), A--);
        for (; -1 !== e.indexOf("("); )
          if (((i = e.indexOf("(")), (c = e.length), -1 !== i)) {
            c = i;
            for (var p = 1; 0 !== p; )
              "(" === e[++c] && p++, ")" === e[c] && p--;
            var u = n(e.slice(i + 1, c).join(""));
            if (
              (/[0-9]/.test(e[i - 1]) && (e.splice(i, 0, "*"), i++),
              "Ошибка" === u)
            )
              throw u;
            i--,
              e.splice(i + 1, c - i + 2, u),
              "-" === e[i]
                ? ((e[i + 1] *= -1), e.splice(i, 1))
                : "+" === e[i] && e.splice(i, 1);
          } else i = 0;
        var d = 0,
          h = e.join("").split(/[*/^]/).join("");
        if (e.join("").split(/[0-9]/).join("").length >= h.length)
          throw "Ошибка";
        for (; -1 !== e.indexOf("^"); )
          for (var g = 0; g < e.length; g++)
            "^" === e[g] &&
              (console.log(a),
              (d = (d = Math.pow(
                parseFloat(e[g - 1]),
                parseFloat(e[g + 1])
              )).toPrecision(14)),
              e.splice(g - 1, 3, "".concat(d)),
              (g -= 1));
        for (; -1 !== e.indexOf("*") || -1 !== e.indexOf("/"); )
          for (var b = 0; b < e.length; b++) {
            var m = e[b];
            "*" === m &&
              ((d = parseFloat(e[b - 1]) * parseFloat(e[b + 1])),
              e.splice(b - 1, 3, "".concat(d)),
              (d = d.toPrecision(14)),
              (b -= 1)),
              "/" === m &&
                ((d = parseFloat(e[b - 1]) / parseFloat(e[b + 1])),
                e.splice(b - 1, 3, "".concat(d)),
                (b -= 1));
          }
        d = 0;
        for (var f = 0; f < e.length; f++) d += parseFloat(e[f]);
        if (
          (console.log(d),
          (d = parseFloat(d.toFixed(14))) === 1 / 0 || d === -1 / 0)
        )
          throw "Деление на ноль не возможно";
        if (isNaN(d)) throw "Ошибка";
        return "".concat(d);
      }
      var e = function (n, e, t) {
          var r = (n * e) / 100;
          return r >= 0 && t ? "+".concat(r) : r;
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
        return 0 === (n = Math.round(n)) ? 1 : "+".concat(n * u(n - 1));
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
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function b(n, e, t) {
        return (
          e && g(n.prototype, e),
          t && g(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      var m = b(function n(e, t, r, a) {
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.execute = e),
            (this.undo = a),
            (this.type = t),
            (this.symbol = r);
        }),
        f = "calculate string",
        C = "calculate action",
        E = "calculate percent";
      function w(e) {
        return new m(n, f, e);
      }
      function B() {
        return new m(e, E, "%");
      }
      function k() {
        return new m(r, C, "+/-");
      }
      function x() {
        return new m(o, C, "^2");
      }
      function v() {
        return new m(i, C, "^3");
      }
      function y() {
        return new m(c, C, "10^");
      }
      function _() {
        return new m(l, C, "1/");
      }
      function I() {
        return new m(A, C, "^(1/2)");
      }
      function S() {
        return new m(p, C, "^(1/3)");
      }
      function z() {
        return new m(u, C, "!");
      }
      function W() {
        return new m(null, null, null, h);
      }
      function j(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      var Y = (function () {
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
              var r = t;
              try {
                switch (n.type) {
                  case f:
                    e.calculateString(n, t);
                    break;
                  case C:
                    e.calculateAction(n, t);
                    break;
                  case E:
                    e.calculatePercent(n, t);
                }
                if ("+" === t[0]) {
                  var a = t.split("");
                  a.shift(), (t = a.join(""));
                }
                return (
                  e.changeIsEdit(!1),
                  e.commands.push({
                    openBrakets: e.openBrakets,
                    command: n,
                    string: r,
                  }),
                  "M+" !== n.symbol && "M-" !== n.symbol
                    ? { status: "ok", string: t }
                    : { status: "ok", string: e.memory }
                );
              } catch (n) {
                return { status: "error", string: n };
              }
            }),
            (this.undo = function (n) {
              if (e.commands.length) {
                e.changeIsEdit(!0);
                var r = n.undo(e.commands);
                r.string &&
                  ((function (n, e) {
                    e.openBrakets = [];
                    for (var t = 0; -1 !== n.slice(t).indexOf("("); ) {
                      var r = n.slice(t).indexOf("(");
                      (t = r + 1), this.openBrakets.push(r);
                    }
                  })(r.string, e),
                  e.setString(r.string)),
                  e.commands.pop();
              }
              return { status: "ok", string: t };
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
                if (
                  0 ===
                  (1 === e.length && /[0-9]/.test(e)
                    ? 0
                    : this.findIndexWithMark(e.length - 1, e))
                ) {
                  var c = +"".concat(n.symbol[1], "1") * +e;
                  (this.memory = n.execute(
                    ""
                      .concat(this.memory)
                      .concat(c >= 0 ? "+" : "")
                      .concat(c)
                  )),
                    console.log(this.memory);
                }
              },
            },
            {
              key: "calculateAction",
              value: function (n, e) {
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
                if (!/[0-9]/.test(e[e.length - 1]))
                  throw "You need to write some action";
                var t,
                  r = this.findIndexWithMark(e.length - 1, e, !0),
                  a = !1;
                if (
                  (/[*/]/.test(e[r - 1])
                    ? ((t = this.findIndexWithMark(r - 2, e)),
                      (this.current = e.slice(t, r - 1)))
                    : ((t = this.findIndexWithMark(r - 1, e)),
                      (this.current = e.slice(t, r)),
                      (a = !0)),
                  -1 === t || 0 === r)
                )
                  throw "You need to write some action";
                (this.next = e.slice(r)),
                  (this.next = n.execute(+this.current, +this.next, a));
                var o = e.split("");
                o.splice(r, "".concat(e).length, this.next),
                  this.setString(o.join(""));
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
                  if ("+" === e[a] || "-" === e[a]) {
                    if ("e" !== e[a - 1]) return (r = !1), a;
                    a -= 2;
                  } else a--;
                }
                return a;
              },
            },
          ]) && j(e.prototype, t),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          n
        );
      })();
      function M(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function O(n, e, t) {
        return (
          e && M(n.prototype, e),
          t && M(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      var T = O(function n(e, t, r, a, o, i, c) {
          var l = this;
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.areaResult = o),
            (this.value = e);
          var s = document.createElement("button");
          (s.innerText = this.value),
            (s.className = t),
            s.addEventListener("click", function () {
              var n;
              switch (t) {
                case "action":
                  if ("=" === l.value)
                    for (; 0 !== r.openBrakets.length; )
                      (n = r.execute(a)), r.openBrakets.pop();
                  if (
                    ((n = r.execute(a)),
                    "=" === l.value && !isNaN(r.getString()))
                  ) {
                    var o = document.createElement("div");
                    (o.className = "history_element"),
                      (o.innerText = r.history[r.history.length - 1]);
                    var s = c.firstChild;
                    c.classList.add("visible"), c.insertBefore(o, s);
                  }
                  break;
                case "number":
                  "x^(1/y)" === e &&
                    ((l.value = "^(1/"),
                    r.openBrakets.push(r.getString().length + 1)),
                    r.getIsEddit()
                      ? (r.setString(d(r.getString(), l.value)),
                        (n = { status: "ok" }))
                      : !/[.0-9]/.test(l.value) && /[0-9]/.test(r.getString())
                      ? (r.setString(d(r.getString(), l.value)),
                        (n = { status: "ok" }),
                        r.changeIsEdit(!0))
                      : (r.changeIsEdit(!0),
                        r.setString("".concat(l.value)),
                        (n = { status: "ok" }));
                  break;
                case "bracketOpen":
                  r.getIsEddit()
                    ? (1 === r.getString().length && "0" === r.getString()[0]
                        ? r.openBrakets.push(0)
                        : r.openBrakets.push(r.getString().length),
                      r.setString(d(r.getString(), l.value)),
                      (n = { status: "ok" }))
                    : ((r.openBrakets = []),
                      r.openBrakets.push(0),
                      r.setString(l.value),
                      (n = { status: "ok" }),
                      r.changeIsEdit(!0));
                  break;
                case "bracketClose":
                  0 === r.openBrakets.length &&
                    (n = { status: "error", string: "Ошибка" }),
                    (n = r.execute(a)),
                    r.openBrakets.pop();
                  break;
                case "memory":
                  if (
                    ("AC" === e &&
                      (r.setString("0"),
                      (n = { status: "ok" }),
                      r.changeIsEdit(!1)),
                    "MC" === e && (r.memory = 0),
                    "MR" === e &&
                      (r.getIsEddit()
                        ? r.setString(
                            d(r.getString(), "(".concat(r.memory, ")"))
                          )
                        : (r.setString(r.memory), (r.openBrakets = [])),
                      (n = { status: "ok" })),
                    "M+" === e || "M-" === e)
                  ) {
                    var A = r.execute(a);
                    console.log(A);
                  }
                  break;
                case "undo":
                  n = r.undo(a);
              }
              l.areaResult &&
                ("ok" === n.status
                  ? (l.areaResult.innerText = r.getString())
                  : ((i.innerText = n.string),
                    i.classList.add("errorOn"),
                    setTimeout(function () {
                      i.classList.remove("errorOn");
                    }, 2e3)));
            }),
            (this.element = s),
            (this.type = t);
        }),
        Z = t(379),
        L = t.n(Z),
        D = t(795),
        N = t.n(D),
        q = t(569),
        P = t.n(q),
        U = t(565),
        R = t.n(U),
        X = t(216),
        F = t.n(X),
        V = t(589),
        H = t.n(V),
        J = t(579),
        Q = {};
      (Q.styleTagTransform = H()),
        (Q.setAttributes = R()),
        (Q.insert = P().bind(null, "head")),
        (Q.domAPI = N()),
        (Q.insertStyleElement = F()),
        L()(J.Z, Q),
        J.Z && J.Z.locals && J.Z.locals,
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
            (t.className = "wrapper_calc_calculator");
          var c = document.createElement("div");
          c.classList.add("error");
          for (var l = 0; l < 10; l++)
            i.push(new T(l, "number", n, null, r, c)),
              i[l].element.classList.add("num");
          i[0].element.classList.add("two_seat");
          var s = document.createElement("div");
          (s.innerText = "Темная тема"), (s.className = "darkMode");
          var A = document.createElement("div");
          A.classList.add("toggleWrapper");
          var p = document.createElement("input");
          (p.type = "checkbox"),
            (p.name = "toggle"),
            (p.id = "toggle"),
            (p.checked = !0),
            (p.className = "toggle");
          var u = document.createElement("label");
          (u.for = "toggle"),
            A.append(s),
            A.append(p),
            A.append(u),
            A.addEventListener("click", function () {
              (p.checked = !p.checked), e.classList.toggle("dark");
            });
          var d = new T("+", "number", n, null, r, c),
            h = new T("-", "number", n, null, r, c),
            g = new T("*", "number", n, null, r, c),
            b = new T(".", "number", n, null, r, c),
            m = new T("/", "number", n, null, r, c),
            f = new T("^", "number", n, null, r, c),
            C = new T("%", "action", n, new B(), r, c),
            E = new T("+/-", "action", n, new k(), r, c),
            j = new T("x^2", "action", n, new x(), r, c),
            Y = new T("x^3", "action", n, new v(), r, c),
            M = new T("10^x", "action", n, new y(), r, c),
            O = new T("1/x", "action", n, new _(), r, c),
            Z = new T("x^(1/y)", "number", n, null, r, c),
            L = new T("x^(1/2)", "action", n, new I(), r, c),
            D = new T("x^(1/3)", "action", n, new S(), r, c),
            N = new T("!", "action", n, new z(), r, c),
            q = new T("=", "action", n, new w("="), r, c, a),
            P = new T("(", "bracketOpen", n, null, r, c),
            U = new T(")", "bracketClose", n, new w(")"), r, c),
            R = new T("MC", "memory", n),
            X = new T("MR", "memory", n, null, r, c),
            F = new T("M+", "memory", n, new w("M+")),
            V = new T("M-", "memory", n, new w("M-")),
            H = new T("AC", "memory", n, null, r, c);
          o.append(P.element),
            o.append(U.element),
            o.append(R.element),
            o.append(H.element),
            o.append(E.element),
            o.append(C.element),
            m.element.classList.add("elementary"),
            o.append(m.element),
            o.append(F.element),
            o.append(V.element),
            o.append(X.element),
            o.append(i[7].element),
            o.append(i[8].element),
            o.append(i[9].element),
            g.element.classList.add("elementary"),
            o.append(g.element),
            o.append(j.element),
            o.append(Y.element),
            o.append(f.element),
            o.append(i[4].element),
            o.append(i[5].element),
            o.append(i[6].element),
            h.element.classList.add("elementary"),
            o.append(h.element),
            o.append(M.element),
            o.append(O.element),
            o.append(Z.element),
            o.append(i[1].element),
            o.append(i[2].element),
            o.append(i[3].element),
            d.element.classList.add("elementary"),
            o.append(d.element),
            o.append(L.element),
            o.append(D.element),
            o.append(N.element),
            o.append(i[0].element),
            b.element.classList.add("num"),
            o.append(b.element),
            q.element.classList.add("elementary"),
            o.append(q.element);
          var J = new T("Вернуть", "undo", n, new W(), r, c);
          t.append(r),
            t.append(c),
            t.append(o),
            e.append(t),
            e.append(a),
            t.append(J.element),
            t.append(A),
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
                d.element.click();
                break;
              case "-":
                h.element.click();
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
                P.element.click();
                break;
              case ")":
                U.element.click();
                break;
              case "!":
                N.element.click();
                break;
              case "=":
                e.preventDefault(), q.element.click();
            }
            13 === e.keyCode && q.element.click(),
              17 === e.keyCode && (Q = !0),
              90 === e.keyCode && (G = !0),
              86 === e.keyCode && (K = !0),
              Q &&
                K &&
                (navigator.clipboard
                  .readText()
                  .then(function (e) {
                    for (var t = "", a = 0; a < e.length; a++)
                      /[0-9]/.test(e[a]) && (t += e[a]),
                        ("." !== e[a] && "," !== e[a]) || (t += ".");
                    console.log(t), n.setString(t), (r.innerText = t);
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
        })(new Y());
    })();
})();
//# sourceMappingURL=bundle.js.map
