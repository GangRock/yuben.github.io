(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["79e4a9b2"],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:""}},[t.showBack?a("q-icon",{attrs:{name:"arrow_back_ios"},on:{click:function(e){return t.$router.go(-1)}}}):t._e()],1),a("q-toolbar-title",{staticClass:"text-center"},[t._v("\n      "+t._s(t.title)+"\n    ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",to:t.rightTo},on:{click:t.rightCallBackFun}},[t._t("headerRight")],2)],1)],1)},i=[],r={name:"Header",data:function(){return{}},props:{title:{type:String,default:"冰肌玉肤·颜回本初"},showBack:{type:Boolean,default:!0},rightTo:{type:String,default:""},rightCallBackFun:{type:Function,default:function(){}}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,"2deecc86",null);e["a"]=l.exports},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{title:t.headerTitle,showBack:!1,rightTo:"/login"},scopedSlots:t._u([{key:"headerRight",fn:function(){return[a("span",{staticClass:"text-subtitle1"},[t._v("登录")])]},proxy:!0}])}),a("q-page",[a("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",autoplay:"",height:"14.7rem","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}}),a("q-carousel-slide",{attrs:{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}}),a("q-carousel-slide",{attrs:{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"}})],1),a("div",{staticClass:"q-pa-sm q-gutter-xs"},[a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-pa-sm",attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-4",attrs:{top:""}},[a("q-img",{attrs:{src:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.webp",ratio:4/3}})],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",{staticClass:"text-bold text-subtitle1",attrs:{lines:"1"}},[t._v("教程标题")]),a("q-item-label",{attrs:{lines:"4"}},[a("span",{staticClass:"text-weight-bold"},[t._v("Janet")]),t._v("\n              -- 长相思·雨 宋代：万俟咏 一声声，一更更。\n              窗外芭蕉窗里灯，此时无限情。 梦难成，恨难平。\n              不道愁人不喜听，空阶滴到明。\n            ")])],1)],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-pa-sm",attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-4",attrs:{top:""}},[a("q-img",{attrs:{src:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545020183.webp",ratio:4/3}})],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",{staticClass:"text-bold text-subtitle1",attrs:{lines:"1"}},[t._v("教程标题")]),a("q-item-label",{attrs:{lines:"4"}},[a("span",{staticClass:"text-weight-bold"},[t._v("Janet")]),t._v("\n              -- 长相思·雨 宋代：万俟咏 一声声，一更更。\n              窗外芭蕉窗里灯，此时无限情。 梦难成，恨难平。\n              不道愁人不喜听，空阶滴到明。\n            ")])],1)],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-pa-sm",attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-4",attrs:{top:""}},[a("q-img",{attrs:{src:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538545442.webp",ratio:4/3}})],1),a("q-item-section",{attrs:{top:""}},[a("q-item-label",{staticClass:"text-bold text-subtitle1",attrs:{lines:"1"}},[t._v("教程标题")]),a("q-item-label",{attrs:{lines:"4"}},[t._v("\n              -- 长相思·雨 宋代：万俟咏 一声声，一更更。\n              窗外芭蕉窗里灯，此时无限情。 梦难成，恨难平。\n              不道愁人不喜听，空阶滴到明。\n            ")])],1)],1)],1)],1)],1),a("Footer")],1)},i=[],r=a("0418"),n=a("fd2d"),o={name:"PageIndex",components:{Header:r["a"],Footer:n["a"]},props:{},data:function(){return{headerTitle:"冰肌玉肤·颜回本初",slide:1}}},l=o,c=a("2877"),p=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=p.exports},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"no-shadow"},[a("q-tabs",{staticClass:"bg-white text-grey-8 shadow-1",attrs:{dense:"","indicator-color":"transparent",align:"justify","active-color":"primary",breakpoint:0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",icon:"home",to:"/",exact:"",label:"首页"}}),a("q-route-tab",{attrs:{name:"person",icon:"person",to:"/user-center",exact:"",label:"个人中心"}}),a("q-route-tab",{attrs:{name:"goods",icon:"settings",to:"/inventory-info",exact:"",label:"商品管理"}}),a("q-route-tab",{attrs:{name:"cash",icon:"monetization_on",to:"/cash-deal",exact:"",label:"提现交易"}})],1)],1)},i=[],r={name:"Footer",data:function(){return{}},props:{tab:{type:String,default:"home"}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,"5ba968ea",null);e["a"]=l.exports}}]);