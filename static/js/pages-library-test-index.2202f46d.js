(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-library-test-index"],{"326f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=i},"353e":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uToast:e("c046").default,uTable:e("92bd").default,uTr:e("2e8a").default,uTd:e("4366").default,uSubsection:e("a553").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-demo"},[e("v-uni-view",{staticClass:"u-demo-wrap"},[e("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),e("v-uni-view",{staticClass:"u-demo-area"},[e("u-toast",{ref:"uToast"}),e("v-uni-view",{staticClass:"u-no-demo-here",staticStyle:{"text-align":"left"}},[t._v("这里仅对部分验证规则进行演示，目前总的验证规则有如下：")]),e("u-table",{staticStyle:{"margin-top":"20rpx"}},[e("u-tr",[e("u-td",[t._v("邮箱号")]),e("u-td",[t._v("手机号")]),e("u-td",[t._v("URL")]),e("u-td",[t._v("普通日期")])],1),e("u-tr",[e("u-td",[t._v("十进制数")]),e("u-td",[t._v("身份证号")]),e("u-td",[t._v("车牌号")]),e("u-td",[t._v("金额")])],1),e("u-tr",[e("u-td",[t._v("汉字")]),e("u-td",[t._v("字母")]),e("u-td",[t._v("字母|数字")]),e("u-td",[t._v("包含值")])],1),e("u-tr",[e("u-td",[t._v("数值范围")]),e("u-td",[t._v("长度范围")]),e("u-td",{attrs:{width:"50%"}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"u-config-wrap"},[e("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("邮箱")]),e("u-subsection",{attrs:{list:t.email},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.emailChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("手机号")]),e("u-subsection",{attrs:{list:t.mobile},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.mobileChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("中文")]),e("u-subsection",{attrs:{list:t.chinese},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.chineseChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("整数")]),e("u-subsection",{attrs:{list:t.digits},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.digitsChange.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},"57d6":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{email:["google@gmail.com","google艾特gmail.com"],mobile:["13478561273","0778-3423082"],chinese:["天青色等烟雨","Beat it"],digits:[283,"下雨的声音"]}},methods:{toast:function(t){this.$refs.uToast.show({type:t?"success":"error",title:t?"验证通过":"验证失败"})},emailChange:function(t){this.toast(this.$u.test.email(this.email[t]))},mobileChange:function(t){this.toast(this.$u.test.mobile(this.mobile[t]))},chineseChange:function(t){this.toast(this.$u.test.chinese(this.chinese[t]))},digitsChange:function(t){this.toast(this.$u.test.digits(this.digits[t]))}}};i.default=n},"84ff":function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.tmpConfig.callback&&i.tmpConfig.callback(),i.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};i.default=n},"939e":function(t,i,e){var n=e("d2b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0c3bfacc",n,!0,{sourceMap:!1,shadowMode:!1})},ab35:function(t,i,e){"use strict";e.r(i);var n=e("57d6"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},b20e:function(t,i,e){var n=e("326f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("76cc7538",n,!0,{sourceMap:!1,shadowMode:!1})},b6c3:function(t,i,e){"use strict";e.r(i);var n=e("84ff"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},bd29:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uIcon:e("db76").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},s=[]},c046:function(t,i,e){"use strict";e.r(i);var n=e("bd29"),a=e("b6c3");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("cb58");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"36307caf",null,!1,n["a"],o);i["default"]=r.exports},cb58:function(t,i,e){"use strict";var n=e("939e"),a=e.n(n);a.a},d2b5:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=i},ed92:function(t,i,e){"use strict";e.r(i);var n=e("353e"),a=e("ab35");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ef81");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"43a5b090",null,!1,n["a"],o);i["default"]=r.exports},ef81:function(t,i,e){"use strict";var n=e("b20e"),a=e.n(n);a.a}}]);