(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-template"],{"289f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page {\n\tbackground-color: rgb(240, 242, 244);\n} */",""]),t.exports=e},3978:function(t,e,n){"use strict";n.r(e);var i=n("c02f"),a=n("ff30");for(var l in a)"default"!==l&&function(t){n.d(e,t,(function(){return a[t]}))}(l);n("e76f"),n("3b45");var o,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"13ab77fa",null,!1,i["a"],o);e["default"]=r.exports},"3b45":function(t,e,n){"use strict";var i=n("c5ca"),a=n.n(i);a.a},"527b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-cell-icon[data-v-13ab77fa]{width:%?36?%;height:%?36?%;margin-right:%?8?%}',""]),t.exports=e},5362:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{groupName:"部件",groupName_en:"Parts",list:[{path:"coupon",icon:"coupon",title:"Coupon 优惠券",title_en:"Coupon"}]},{groupName:"页面",groupName_en:"Page",list:[{path:"/pages/template/wxCenter/index",icon:"wxCenter",title:"WxCenter 仿微信个人中心",title_en:"WxCenter"},{path:"/pages/template/keyboardPay/index",icon:"keyboardPay",title:"KeyboardPay 自定义键盘支付模板",title_en:"KeyboardPay"},{path:"/pages/template/mallMenu/index1",icon:"mall_menu_1",title:"MallMenu 垂直分类(左右独立)",title_en:"MallMenu 1"},{path:"/pages/template/mallMenu/index2",icon:"mall_menu_2",title:"MallMenu 垂直分类(左右联动)",title_en:"MallMenu 2"},{path:"submitBar",icon:"submitBar",title:"SubmitBar 提交订单栏",title_en:"SubmitBar"},{path:"comment",icon:"comment",title:"Comment 评论列表",title_en:"Comment"},{path:"order",icon:"order",title:"Order 订单列表",title_en:"Order"},{path:"login",icon:"login",title:"Login 登录界面",title_en:"Login"},{path:"address",icon:"address",title:"Address 收货地址",title_en:"Address"},{path:"citySelect",icon:"citySelect",title:"CitySelect 城市选择",title_en:"CitySelect"}]}];e.default=i},"97b4":function(t,e,n){var i=n("289f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7439a376",i,!0,{sourceMap:!1,shadowMode:!1})},c02f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return i}));var i={pageNav:n("547b").default,uCellGroup:n("0ade").default,uCellItem:n("5933").default,uGap:n("23ee").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("page-nav",{attrs:{desc:t.desc,title:"nav.template"}}),n("v-uni-view",{staticClass:"list-wrap"},t._l(t.list,(function(e,i){return n("u-cell-group",{key:i,attrs:{"title-bg-color":"rgb(243, 244, 246)",title:t.getGroupTitle(e)}},t._l(e.list,(function(e,i){return n("u-cell-item",{key:i,attrs:{titleStyle:{fontWeight:500},title:t.getFieldTitle(e)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openPage(e.path)}}},[n("v-uni-image",{staticClass:"u-cell-icon",attrs:{slot:"icon",src:t.getIcon(e.icon),mode:"widthFix"},slot:"icon"})],1)})),1)})),1),n("u-gap",{attrs:{height:"70"}})],1)},l=[]},c5ca:function(t,e,n){var i=n("527b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b4d7cdfa",i,!0,{sourceMap:!1,shadowMode:!1})},e76f:function(t,e,n){"use strict";var i=n("97b4"),a=n.n(i);a.a},efa8:function(t,e,n){"use strict";var i=n("4ea4");n("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5362")),l={data:function(){return{list:a.default}},computed:{getIcon:function(){return function(t){return"https://cdn.uviewui.com/uview/example/"+t+".png"}},desc:function(){return this.$t("template.desc")}},onShow:function(){uni.setNavigationBarTitle({title:this.$t("nav.template")})},methods:{openPage:function(t){this.$u.route({url:0==t.indexOf("/page")?t:"/pages/template/"+t+"/index"})},getGroupTitle:function(t){return"zh"==this.$i18n.locale?t.groupName:t.groupName_en},getFieldTitle:function(t){return"zh"==this.$i18n.locale?t.title:t.title_en}}};e.default=l},ff30:function(t,e,n){"use strict";n.r(e);var i=n("efa8"),a=n.n(i);for(var l in i)"default"!==l&&function(t){n.d(e,t,(function(){return i[t]}))}(l);e["default"]=a.a}}]);