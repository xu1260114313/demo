(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-avatarCropper-index"],{"11c1":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uToast:a("c046").default,uButton:a("a6a6").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-demo"},[a("v-uni-view",{staticClass:"u-demo-wrap"},[a("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),a("v-uni-view",{staticClass:"u-demo-area"},[a("u-toast",{ref:"uToast"}),a("v-uni-view",{staticClass:"u-avatar-wrap"},[t.avatar?a("v-uni-image",{staticClass:"u-avatar-demo",attrs:{src:t.avatar,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preAvatar.apply(void 0,arguments)}}}):t._e()],1),a("u-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseAvatar.apply(void 0,arguments)}}},[t._v("选择图片")])],1)],1)],1)},o=[]},"1d8d":function(t,e,a){"use strict";a.r(e);var i=a("11c1"),r=a("3f4a");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("dfa6");var n,f=a("f0c5"),s=Object(f["a"])(r["default"],i["b"],i["c"],!1,null,"1781d541",null,!1,i["a"],n);e["default"]=s.exports},3718:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{avatar:"https://cdn.uviewui.com/uview/common/logo.png"}},created:function(){var t=this;uni.$on("uAvatarCropper",(function(e){t.avatar=e}))},methods:{chooseAvatar:function(){this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{destWidth:300,rectWidth:200,fileType:"jpg"}})},qualityChange:function(t){this.quality=0==t?.3:1==t?.7:1},styleChange:function(t){0==t?(this.rectHeight=this.rectWidth=this.destHeight=this.destWidth=200,this.boundStyle={lineWidth:8,borderColor:this.$u.color["error"],mask:"rgba(0, 0, 0, 0.8)"}):(this.rectHeight=this.rectWidth=this.destHeight=this.destWidth=400,this.boundStyle={lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"})},preAvatar:function(){wx.previewImage({current:"",urls:[this.avatar]})}}};e.default=i},"3f4a":function(t,e,a){"use strict";a.r(e);var i=a("3718"),r=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"43f8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-btn[data-v-1ea4ff2e]::after{border:none}.u-btn[data-v-1ea4ff2e]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-1ea4ff2e]{border:1px solid #fff}.u-btn--default[data-v-1ea4ff2e]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-1ea4ff2e]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-1ea4ff2e]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-1ea4ff2e]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-1ea4ff2e]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-1ea4ff2e]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-1ea4ff2e]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-1ea4ff2e]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-1ea4ff2e]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-1ea4ff2e]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-1ea4ff2e]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-1ea4ff2e]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-1ea4ff2e]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-1ea4ff2e]{border-radius:%?100?%}.u-round-circle[data-v-1ea4ff2e]::after{border-radius:%?100?%}.u-loading[data-v-1ea4ff2e]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-1ea4ff2e]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-1ea4ff2e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-1ea4ff2e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-1ea4ff2e]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-1ea4ff2e]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-1ea4ff2e]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-1ea4ff2e]{background:#18b566!important;color:#fff}.u-info-hover[data-v-1ea4ff2e]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-1ea4ff2e]{background:#f29100!important;color:#fff}.u-error-hover[data-v-1ea4ff2e]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"46d8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.wrap[data-v-1781d541]{padding:%?24?%}.u-avatar-wrap[data-v-1781d541]{overflow:hidden;margin-bottom:%?20?%}.u-avatar-demo[data-v-1781d541]{width:%?150?%;height:%?150?%;border-radius:%?100?%}',""]),t.exports=e},"4dd6":function(t,e,a){"use strict";var i=a("7877"),r=a.n(i);r.a},"6c88":function(t,e,a){"use strict";a.r(e);var i=a("e3ef"),r=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"6cd7":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[]},7877:function(t,e,a){var i=a("43f8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("1f294fe0",i,!0,{sourceMap:!1,shadowMode:!1})},"84ff":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=i},"939e":function(t,e,a){var i=a("d2b5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("0c3bfacc",i,!0,{sourceMap:!1,shadowMode:!1})},a6a6:function(t,e,a){"use strict";a.r(e);var i=a("6cd7"),r=a("6c88");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("4dd6");var n,f=a("f0c5"),s=Object(f["a"])(r["default"],i["b"],i["c"],!1,null,"1ea4ff2e",null,!1,i["a"],n);e["default"]=s.exports},b6c3:function(t,e,a){"use strict";a.r(e);var i=a("84ff"),r=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},bd29:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("db76").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?a("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),a("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},o=[]},c046:function(t,e,a){"use strict";a.r(e);var i=a("bd29"),r=a("b6c3");for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("cb58");var n,f=a("f0c5"),s=Object(f["a"])(r["default"],i["b"],i["c"],!1,null,"36307caf",null,!1,i["a"],n);e["default"]=s.exports},c8aa:function(t,e,a){var i=a("46d8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("34bd26bd",i,!0,{sourceMap:!1,shadowMode:!1})},cb58:function(t,e,a){"use strict";var i=a("939e"),r=a.n(i);r.a},d2b5:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},dfa6:function(t,e,a){"use strict";var i=a("c8aa"),r=a.n(i);r.a},e3ef:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var r="",o="";r=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-i.top-i.targetWidth/2,e.rippleLeft=r-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i}}]);