(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-select-index"],{1959:function(t,e,i){"use strict";i.r(e);var n=i("f36f"),a=i("dfcd");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("f7a3");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5e9568b0",null,!1,n["a"],o);e["default"]=u.exports},"45a5":function(t,e,i){"use strict";i.r(e);var n=i("a52c"),a=i("b607");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("6de7");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5ec756e6",null,!1,n["a"],o);e["default"]=u.exports},"5e64":function(t,e,i){var n=i("d8c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3bc1da4c",n,!0,{sourceMap:!1,shadowMode:!1})},"6a8f":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},"6de7":function(t,e,i){"use strict";var n=i("eafa"),a=i.n(n);a.a},"71d4":function(t,e,i){var n=i("b5cd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4118f950",n,!0,{sourceMap:!1,shadowMode:!1})},"847e":function(t,e,i){"use strict";i("cb29"),i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(t){var e=this;t&&setTimeout((function(){return e.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var t=1,e=this.list;while(e[0][this.childName])e=e[0]?e[0][this.childName]:{},t++;this.columnNum=t}},setColumnData:function(){var t=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var e=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],i=0;i<this.columnNum;i++)0==i?(t[i]=this.list,e=e[this.childName]):(t[i]=e,e=e[this.defaultSelector[i]][this.childName]);else"single-column"==this.mode?t[0]=this.list:t=this.list;this.columnData=t},setSelectValue:function(){for(var t=null,e=0;e<this.columnNum;e++){t=this.columnData[e][this.defaultSelector[e]];var i={value:t?t[this.valueName]:null,label:t?t[this.labelName]:null};t&&t.extra&&(i.extra=t.extra),this.selectValue.push(i)}},columnChange:function(t){var e=this,i=null,n=t.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(t,e){t!=n[e]&&(i=e)})),this.defaultSelector=n;for(var a=i+1;a<this.columnNum;a++)this.columnData[a]=this.columnData[a-1][a-1==i?n[i]:0][this.childName],this.defaultSelector[a]=0;n.map((function(t,i){var a=e.columnData[i][n[i]],l={value:a?a[e.valueName]:null,label:a?a[e.labelName]:null};a&&void 0!==a.extra&&(l.extra=a.extra),e.selectValue.push(l)})),this.lastSelectIndex=n}else if("single-column"==this.mode){var l=this.columnData[0][n[0]],o={value:l?l[this.valueName]:null,label:l?l[this.labelName]:null};l&&void 0!==l.extra&&(o.extra=l.extra),this.selectValue.push(o)}else"mutil-column"==this.mode&&n.map((function(t,i){var a=e.columnData[i][n[i]],l={value:a?a[e.valueName]:null,label:a?a[e.labelName]:null};a&&void 0!==a.extra&&(l.extra=a.extra),e.selectValue.push(l)}))},close:function(){this.$emit("input",!1)},getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&this.$emit(t,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};e.default=n},"8f68":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},l=[]},"972e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.badge-button[data-v-5ec756e6]{padding:%?4?% %?6?%;background-color:#fa3534;color:#fff;border-radius:%?10?%;font-size:%?22?%;line-height:1}',""]),t.exports=e},a52c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var n={uSelect:i("1959").default,uSubsection:i("a553").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-select",{attrs:{"default-value":t.defaultValue,mode:t.mode,list:t.list},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),i("v-uni-view",{staticClass:"u-demo-result-line"},[t._v("select值："+t._s(t.result))])],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),i("u-subsection",{attrs:{current:t.current,list:["打开","收起"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.statusChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("模式")]),i("u-subsection",{attrs:{list:["单列","多列独立","多列联动"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modeChange.apply(void 0,arguments)}}})],1)],1)],1)},l=[]},a553:function(t,e,i){"use strict";i.r(e);var n=i("8f68"),a=i("fabd");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("c451");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],o);e["default"]=u.exports},b5cd:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-select__action[data-v-5e9568b0]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-5e9568b0]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-5e9568b0]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-5e9568b0]{color:#606266}.u-select--border[data-v-5e9568b0]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-5e9568b0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-5e9568b0]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-5e9568b0]{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.u-select__body__picker-view__item[data-v-5e9568b0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),t.exports=e},b607:function(t,e,i){"use strict";i.r(e);var n=i("f018"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},c451:function(t,e,i){"use strict";var n=i("5e64"),a=i.n(n);a.a},cb29:function(t,e,i){var n=i("23e7"),a=i("81d5"),l=i("44d2");n({target:"Array",proto:!0},{fill:a}),l("fill")},d8c6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},dfcd:function(t,e,i){"use strict";i.r(e);var n=i("847e"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},eafa:function(t,e,i){var n=i("972e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("58f11760",n,!0,{sourceMap:!1,shadowMode:!1})},f018:function(t,e,i){"use strict";i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{show:!1,result:"尚未选择",defaultValue:[3],mode:"single-column",list:[],list1:[{value:"江",label:"江"},{value:"湖",label:"湖"},{value:"夜",label:"夜"},{value:"雨",label:"雨"},{value:"十",label:"十"},{value:"年",label:"年"},{value:"灯",label:"灯"}],list2:[[{value:"昔",label:"昔"},{value:"去",label:"去"},{value:"雪",label:"雪"},{value:"如",label:"如"},{value:"花",label:"花"}],[{value:"今",label:"今"},{value:"来",label:"来"},{value:"花",label:"花"},{value:"似",label:"似"},{value:"雪",label:"雪"}]],list3:[{label:"中国",value:"1",children:[{label:"广西",value:"2",children:[{label:"南宁",value:"3"},{label:"梧州",value:"3"},{label:"柳州",value:"3"}]},{label:"广东",value:"2",children:[{label:"深圳",value:"3"},{label:"惠州",value:"3"},{label:"清远",value:"3"}]}]},{label:"美国",value:"1",children:[{label:"纽约",value:"2",children:[{label:"皇后街道",value:"3"}]}]}]}},onLoad:function(){this.list=this.list1},computed:{current:function(){return this.show?0:1}},methods:{statusChange:function(t){this.show=!t},modeChange:function(t){var e=["single-column","mutil-column","mutil-column-auto"];this.mode=e[t],this.list=0==t?this.list1:1==t?this.list2:this.list3,this.show=!0},confirm:function(t){var e=this;this.result="",t.map((function(t,i){e.result+=""==e.result?t.label:"-"+t.label}))},cancel:function(t){console.log(t)}}};e.default=n},f36f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var n={uPopup:i("46b3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-select"},[i("u-popup",{attrs:{maskCloseAble:t.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:t.safeAreaInsetBottom,"z-index":t.uZIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("v-uni-view",{staticClass:"u-select"},[i("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:t.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getResult("cancel")}}},[t._v(t._s(t.cancelText))]),i("v-uni-view",{staticClass:"u-select__header__title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:t.moving?t.cancelColor:t.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getResult("confirm")}}},[t._v(t._s(t.confirmText))])],1),i("v-uni-view",{staticClass:"u-select__body"},[i("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:t.defaultSelector},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.columnChange.apply(void 0,arguments)},pickstart:function(e){arguments[0]=e=t.$handleEvent(e),t.pickstart.apply(void 0,arguments)},pickend:function(e){arguments[0]=e=t.$handleEvent(e),t.pickend.apply(void 0,arguments)}}},t._l(t.columnData,(function(e,n){return i("v-uni-picker-view-column",{key:n},t._l(e,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-select__body__picker-view__item"},[i("v-uni-view",{staticClass:"u-line-1"},[t._v(t._s(e[t.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},l=[]},f7a3:function(t,e,i){"use strict";var n=i("71d4"),a=i.n(n);a.a},fabd:function(t,e,i){"use strict";i.r(e);var n=i("6a8f"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a}}]);