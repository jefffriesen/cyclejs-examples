(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// IMPORTS =========================================================================================
require("../../common/scripts/polyfills");

var _require = require("cyclejs");

var Rx = _require.Rx;
var h = _require.h;
var createStream = _require.createStream;
var render = _require.render;

// INTERACTIONS ====================================================================================
var interaction$ = createStream(function (vtree$) {
  return render(vtree$, "main").interaction$;
});

// [INTERACTIONS] <- INTENT ========================================================================
var changeName$ = interaction$.choose("[name=name]", "input").map(function (event) {
  return event.target.value;
});

// [INTENT] <- MODEL ===============================================================================
var name$ = changeName$.startWith("");

// [MODEL] <- VIEW =================================================================================
var vtree$ = name$.map(function (name) {
  return h("div", null, [h("div", { className: "form-group" }, [h("label", null, ["Name:"]), h("input", { name: "name", className: "form-control", type: "text" })]), h("hr", null), h("h1", null, ["Hello ", name, "!"])]);
});

// CYCLE ===========================================================================================
interaction$.inject(vtree$);

},{"../../common/scripts/polyfills":2,"cyclejs":"cyclejs"}],2:[function(require,module,exports){
"use strict";

// IMPORTS =========================================================================================
require("babel/polyfill");

// SHIMS ===========================================================================================
/**
 * Example: `$observable.tap(console.spy("Here")).tap(console.spy("And There!")`
 * @param params to be logged in front of actual data
 * @return void
 */
console.spy = function spy() {
  var _console$log;

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return (_console$log = console.log).bind.apply(_console$log, [console].concat(params));
};

//let Cycle = require("cyclejs");
//let {Rx} = Cycle;

//Cycle.latest = function (DataNode, keys, resultSelector) {
//  let observables = keys.map(key => DataNode.get(key));
//  let args = observables.concat([
//    function selector(...list) {
//      let item = keys.reduce((item, key) => {
//        item[key.slice(0, -1)] = list[keys.indexOf(key)];
//        return item;
//      }, {});
//      return resultSelector(item);
//    }
//  ]);
//  return Rx.Observable.combineLatest.apply(null, args);
//};

},{"babel/polyfill":"babel/polyfill"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC8xLjEtaGVsbG8tY3ljbGUvc2NyaXB0cy9hcHAuanMiLCJidWlsZC9jb21tb24vc2NyaXB0cy9wb2x5ZmlsbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQSxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7ZUFDTixPQUFPLENBQUMsU0FBUyxDQUFDOztJQUFqRCxFQUFFLFlBQUYsRUFBRTtJQUFFLENBQUMsWUFBRCxDQUFDO0lBQUUsWUFBWSxZQUFaLFlBQVk7SUFBRSxNQUFNLFlBQU4sTUFBTTs7O0FBR2hDLElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN4QyxTQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDO0NBQzVDLENBQUMsQ0FBQzs7O0FBR0gsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztTQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztDQUFBLENBQUMsQ0FBQzs7O0FBRy9GLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUd0QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQzdCLFNBQ0UsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FDYixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBQyxFQUFFLENBQ2xDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDM0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FDcEUsQ0FBQyxFQUNGLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ2IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ3JDLENBQUMsQ0FDRjtDQUNILENBQUMsQ0FBQzs7O0FBR0gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0FDN0I1QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsR0FBWTs7O29DQUFSLE1BQU07QUFBTixVQUFNOzs7QUFDbEMsU0FBTyxnQkFBQSxPQUFPLENBQUMsR0FBRyxFQUFDLElBQUksTUFBQSxnQkFBQyxPQUFPLFNBQUssTUFBTSxFQUFDLENBQUM7Q0FDN0MsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBJTVBPUlRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5yZXF1aXJlKFwiLi4vLi4vY29tbW9uL3NjcmlwdHMvcG9seWZpbGxzXCIpO1xubGV0IHtSeCwgaCwgY3JlYXRlU3RyZWFtLCByZW5kZXJ9ID0gcmVxdWlyZShcImN5Y2xlanNcIik7XG5cbi8vIElOVEVSQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmxldCBpbnRlcmFjdGlvbiQgPSBjcmVhdGVTdHJlYW0odnRyZWUkID0+IHtcbiAgcmV0dXJuIHJlbmRlcih2dHJlZSQsIFwibWFpblwiKS5pbnRlcmFjdGlvbiQ7XG59KTtcblxuLy8gW0lOVEVSQUNUSU9OU10gPC0gSU5URU5UID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubGV0IGNoYW5nZU5hbWUkID0gaW50ZXJhY3Rpb24kLmNob29zZShcIltuYW1lPW5hbWVdXCIsIFwiaW5wdXRcIikubWFwKGV2ZW50ID0+IGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbi8vIFtJTlRFTlRdIDwtIE1PREVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmxldCBuYW1lJCA9IGNoYW5nZU5hbWUkLnN0YXJ0V2l0aChcIlwiKTtcblxuLy8gW01PREVMXSA8LSBWSUVXID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubGV0IHZ0cmVlJCA9IG5hbWUkLm1hcChuYW1lID0+IHtcbiAgcmV0dXJuIChcbiAgICBoKCdkaXYnLCBudWxsLCBbXG4gICAgICBoKCdkaXYnLCB7Y2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIn0sIFtcbiAgICAgICAgaCgnbGFiZWwnLCBudWxsLCBbXCJOYW1lOlwiXSksXG4gICAgICAgIGgoJ2lucHV0Jywge25hbWU6IFwibmFtZVwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHR5cGU6IFwidGV4dFwifSlcbiAgICAgIF0pLFxuICAgICAgaCgnaHInLCBudWxsKSxcbiAgICAgIGgoJ2gxJywgbnVsbCwgW1wiSGVsbG8gXCIsIG5hbWUsIFwiIVwiXSlcbiAgICBdKVxuICApO1xufSk7XG5cbi8vIENZQ0xFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmludGVyYWN0aW9uJC5pbmplY3QodnRyZWUkKTtcbiIsIi8vIElNUE9SVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlcXVpcmUoXCJiYWJlbC9wb2x5ZmlsbFwiKTtcblxuLy8gU0hJTVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBFeGFtcGxlOiBgJG9ic2VydmFibGUudGFwKGNvbnNvbGUuc3B5KFwiSGVyZVwiKSkudGFwKGNvbnNvbGUuc3B5KFwiQW5kIFRoZXJlIVwiKWBcbiAqIEBwYXJhbSBwYXJhbXMgdG8gYmUgbG9nZ2VkIGluIGZyb250IG9mIGFjdHVhbCBkYXRhXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuY29uc29sZS5zcHkgPSBmdW5jdGlvbiBzcHkoLi4ucGFyYW1zKSB7XG4gIHJldHVybiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsIC4uLnBhcmFtcyk7XG59O1xuXG4vL2xldCBDeWNsZSA9IHJlcXVpcmUoXCJjeWNsZWpzXCIpO1xuLy9sZXQge1J4fSA9IEN5Y2xlO1xuXG4vL0N5Y2xlLmxhdGVzdCA9IGZ1bmN0aW9uIChEYXRhTm9kZSwga2V5cywgcmVzdWx0U2VsZWN0b3IpIHtcbi8vICBsZXQgb2JzZXJ2YWJsZXMgPSBrZXlzLm1hcChrZXkgPT4gRGF0YU5vZGUuZ2V0KGtleSkpO1xuLy8gIGxldCBhcmdzID0gb2JzZXJ2YWJsZXMuY29uY2F0KFtcbi8vICAgIGZ1bmN0aW9uIHNlbGVjdG9yKC4uLmxpc3QpIHtcbi8vICAgICAgbGV0IGl0ZW0gPSBrZXlzLnJlZHVjZSgoaXRlbSwga2V5KSA9PiB7XG4vLyAgICAgICAgaXRlbVtrZXkuc2xpY2UoMCwgLTEpXSA9IGxpc3Rba2V5cy5pbmRleE9mKGtleSldO1xuLy8gICAgICAgIHJldHVybiBpdGVtO1xuLy8gICAgICB9LCB7fSk7XG4vLyAgICAgIHJldHVybiByZXN1bHRTZWxlY3RvcihpdGVtKTtcbi8vICAgIH1cbi8vICBdKTtcbi8vICByZXR1cm4gUnguT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0LmFwcGx5KG51bGwsIGFyZ3MpO1xuLy99O1xuIl19
