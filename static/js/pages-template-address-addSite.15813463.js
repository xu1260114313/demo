(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-address-addSite"],{"079d":function(t,e,i){"use strict";i.r(e);var a=i("4641"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"235b":function(t,e,i){"use strict";i.r(e);var a=i("a80e"),s=i("079d");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("3cb8");var d,o=i("f0c5"),l=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"4edd6b85",null,!1,a["a"],d);e["default"]=l.exports},"3cb8":function(t,e,i){"use strict";var a=i("66dc"),s=i.n(a);s.a},4641:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{show:!1}},methods:{setDefault:function(){},showRegionPicker:function(){this.show=!0}}};e.default=a},6116:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */[data-v-4edd6b85] .line{color:#c0c4cc;font-size:%?28?%}.wrap[data-v-4edd6b85]{background-color:#f2f2f2}.wrap .top[data-v-4edd6b85]{background-color:#fff;border-top:solid %?2?% #e4e7ed;padding:%?22?%}.wrap .top .item[data-v-4edd6b85]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;line-height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:solid %?2?% #e4e7ed}.wrap .top .item .left[data-v-4edd6b85]{width:%?180?%}.wrap .top .item uni-input[data-v-4edd6b85]{text-align:left}.wrap .top .address[data-v-4edd6b85]{padding:%?20?% 0}.wrap .top .address uni-textarea[data-v-4edd6b85]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard[data-v-4edd6b85]{padding-right:%?40?%}.wrap .top .site-clipboard uni-textarea[data-v-4edd6b85]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard .clipboard[data-v-4edd6b85]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#909399;height:%?80?%}.wrap .top .site-clipboard .clipboard .icon[data-v-4edd6b85]{margin-top:%?6?%;margin-left:%?10?%}.wrap .bottom[data-v-4edd6b85]{margin-top:%?20?%;padding:%?40?%;padding-right:0;background-color:#fff;font-size:%?28?%}.wrap .bottom .tag[data-v-4edd6b85]{display:-webkit-box;display:-webkit-flex;display:flex}.wrap .bottom .tag .left[data-v-4edd6b85]{width:%?160?%}.wrap .bottom .tag .right[data-v-4edd6b85]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.wrap .bottom .tag .right .tags[data-v-4edd6b85]{width:%?140?%;padding:%?16?% %?8?%;border:solid %?2?% #e4e7ed;text-align:center;border-radius:%?50?%;margin:0 %?10?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#606266;line-height:1}.wrap .bottom .default[data-v-4edd6b85]{margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:solid %?2?% #e4e7ed;line-height:%?64?%}.wrap .bottom .default .tips[data-v-4edd6b85]{font-size:%?24?%}',""]),t.exports=e},"66dc":function(t,e,i){var a=i("6116");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("a4ecd5f2",a,!0,{sourceMap:!1,shadowMode:!1})},a80e:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uIcon:i("db76").default,uPicker:i("eca1").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[t._v("收货人")]),i("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人姓名"}})],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[t._v("手机号码")]),i("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人手机号"}})],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRegionPicker.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[t._v("所在地区")]),i("v-uni-input",{attrs:{disabled:!0,type:"text","placeholder-class":"line",placeholder:"省市区县、乡镇等"}})],1),i("v-uni-view",{staticClass:"item address"},[i("v-uni-view",{staticClass:"left"},[t._v("详细地址")]),i("v-uni-textarea",{attrs:{type:"text","placeholder-class":"line",placeholder:"街道、楼牌等"}})],1)],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"tag"},[i("v-uni-view",{staticClass:"left"},[t._v("标签")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"tags"},[t._v("家")]),i("v-uni-text",{staticClass:"tags"},[t._v("公司")]),i("v-uni-text",{staticClass:"tags"},[t._v("学校")]),i("v-uni-view",{staticClass:"tags plus"},[i("u-icon",{attrs:{size:"22",name:"plus"}})],1)],1)],1),i("v-uni-view",{staticClass:"default"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"set"},[t._v("设置默认地址")]),i("v-uni-view",{staticClass:"tips"},[t._v("提醒：每次下单会默认推荐该地址")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-switch",{attrs:{color:"red"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setDefault.apply(void 0,arguments)}}})],1)],1)],1),i("u-picker",{ref:"uPicker",attrs:{mode:"region"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},n=[]}}]);