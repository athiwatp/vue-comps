!function(t){function o(s){if(e[s])return e[s].exports;var n=e[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}({0:function(t,o,e){t.exports=e(49)},2:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},txt:{type:String,required:!0},button:{type:Object,"default":function(){return{action:null,txt:"OK"}},twoWay:!0},title:{type:String,"default":"提示"}},methods:{close:function(t){t&&"function"==typeof t&&t(),this.show=!1}}}},14:function(t,o){},25:function(t,o){t.exports=' <div class=modal style="margin-top: -64px" v-if=show transition=modal> <div class=modal-inner> <div class=modal-title>{{title}}</div> <div class=modal-text>{{txt}}</div> </div> <div class=modal-buttons> <span class="modal-button modal-button-bold" @click=close(button.action)>{{button.txt}}</span> </div> </div> <div v-show=show class=modal-overlay transition=opacity></div> '},37:function(t,o,e){var s,n;e(14),s=e(2),n=e(25),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},49:function(t,o,e){"use strict";t.exports=e(37)}});