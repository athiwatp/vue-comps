!function(t){function s(o){if(e[o])return e[o].exports;var a=e[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}var e={};return s.m=t,s.c=e,s.p="",s(0)}({0:function(t,s,e){t.exports=e(60)},12:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s["default"]={props:{show:{type:Boolean,"default":!1,required:!0,twoWay:!0},className:{type:String,"default":""},text:{type:String,"default":"Toast",required:!0},position:{type:String,"default":""}},computed:{setClassNames:function(){var t=[];switch(this.position){case"top":t.push("top-toast");break;case"bottom":t.push("bottom-toast");break;default:t.push("")}return t.push(this.className),t.join(" ")}}}},23:function(t,s){},35:function(t,s){t.exports=' <div class=toast-overlay v-if=show></div> <div class="toast-modal {{setClassNames}}" v-if=show transition=opacity> <i class=icon></i> <span class=toast>{{text}}</span> </div> '},47:function(t,s,e){var o,a;e(23),o=e(12),a=e(35),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},60:function(t,s,e){"use strict";t.exports=e(47)}});