(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login-app"],{"2a6e":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.codeLogin=e.sendCode=void 0;var a=i(n("871b")),o=function(t,e){return a.default.post("/v1/uac/sms?phoneNr=".concat(t,"&loginType=").concat(e),{},{custom:{module:"CHANGHONGLOGIN"}})};e.sendCode=o;var s=function(t){return a.default.post("/oauth/token?"+t,{},{custom:{module:"CHANGHONGLOGIN"}})};e.codeLogin=s},"505d":function(t,e,n){"use strict";n.r(e);var i=n("e69a"),a=n("d925");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("763a");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"023859b7",null,!1,i["a"],s);e["default"]=c.exports},"6bb0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */.wrap[data-v-023859b7]{font-size:%?28?%}.wrap .content[data-v-023859b7]{width:%?600?%;margin:%?80?% auto 0}.wrap .content .title[data-v-023859b7]{text-align:left;font-size:%?60?%;font-weight:500;margin-bottom:%?100?%}.wrap .content uni-input[data-v-023859b7]{text-align:left;margin-bottom:%?10?%;padding-bottom:%?6?%}.wrap .content .tips[data-v-023859b7]{color:#909399;margin-bottom:%?60?%;margin-top:%?8?%}.wrap .content .getCaptcha[data-v-023859b7]{background-color:#fdf3d0;color:#909399;border:none;font-size:%?30?%;padding:%?12?% 0}.wrap .content .getCaptcha[data-v-023859b7]::after{border:none}.wrap .content .alternative[data-v-023859b7]{color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?30?%}.wrap .buttom .loginType[data-v-023859b7]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?350?% %?150?% %?150?% %?150?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .buttom .loginType .item[data-v-023859b7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#606266;font-size:%?28?%}.wrap .buttom .hint[data-v-023859b7]{padding:%?20?% %?40?%;font-size:%?20?%;color:#909399}.wrap .buttom .hint .link[data-v-023859b7]{color:#f90}',""]),t.exports=e},"763a":function(t,e,n){"use strict";var i=n("cb15"),a=n.n(i);a.a},"8e71":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2a6e"),a={data:function(){return{tel:""}},computed:{inputStyle:function(){var t={};return this.tel&&(t.color="#fff",t.backgroundColor=this.$u.color["warning"]),t}},methods:{submit:function(){var t=this;this.$u.test.mobile(this.tel)?(0,i.sendCode)(this.tel,"SMS").then((function(e){t.$Router.push({name:"code",params:{mobile:t.tel}})})):this.$u.toast("请输入正确手机号")}}};e.default=a},cb15:function(t,e,n){var i=n("6bb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("04791327",i,!0,{sourceMap:!1,shadowMode:!1})},d925:function(t,e,n){"use strict";n.r(e);var i=n("8e71"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e69a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("6350").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"top"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title"},[t._v("欢迎登录社区")]),n("v-uni-input",{staticClass:"u-border-bottom",attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),n("v-uni-view",{staticClass:"tips"},[t._v("未注册的手机号验证后自动创建社区账号")]),n("v-uni-button",{staticClass:"getCaptcha",style:[t.inputStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("获取短信验证码")]),n("v-uni-view",{staticClass:"alternative"},[n("v-uni-view",{staticClass:"issue"},[t._v("遇到问题")])],1)],1),n("v-uni-view",{staticClass:"buttom"},[n("v-uni-view",{staticClass:"loginType"},[n("v-uni-view",{staticClass:"wechat item"},[n("v-uni-view",{staticClass:"icon"},[n("u-icon",{attrs:{size:"70",name:"weixin-fill",color:"rgb(83,194,64)"}})],1),t._v("微信")],1),n("v-uni-view",{staticClass:"QQ item"},[n("v-uni-view",{staticClass:"icon"},[n("u-icon",{attrs:{size:"70",name:"qq-fill",color:"rgb(17,183,233)"}})],1),t._v("QQ")],1)],1),n("v-uni-view",{staticClass:"hint"},[t._v("登录代表同意"),n("v-uni-text",{staticClass:"link"},[t._v("社区用户协议、隐私政策，")]),t._v("并授权使用您的社区账号信息（如昵称、头像、收获地址）以便您统一管理")],1)],1)],1)},o=[]}}]);