(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["79bba56a"],{"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:""}},[t.showBack?a("q-icon",{attrs:{name:"arrow_back_ios"},on:{click:function(e){return t.$router.go(-1)}}}):t._e()],1),a("q-toolbar-title",{staticClass:"text-center"},[t._v("\n      "+t._s(t.title)+"\n    ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",to:t.rightTo},on:{click:t.rightCallBackFun}},[t._t("headerRight")],2)],1)],1)},r=[],o={name:"Header",data:function(){return{}},props:{title:{type:String,default:"冰肌玉肤·颜回本初"},showBack:{type:Boolean,default:!0},rightTo:{type:String,default:""},rightCallBackFun:{type:Function,default:function(){}}}},s=o,i=a("2877"),l=Object(i["a"])(s,n,r,!1,null,"2deecc86",null);e["a"]=l.exports},edc4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{title:t.headerTitle}}),a("q-page",[a("div",{staticClass:"q-pa-sm q-gutter-xs"},[a("q-list",t._l(t.prizes,function(e,n){return a("div",{key:"prize"+n},[a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle1 text-bold"},[t._v(t._s(e.item))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.date))])],1),a("q-item-section",{staticClass:"text-bold text-green text-h6",attrs:{side:""}},[t._v("\n              ￥"+t._s(e.count)+"\n            ")])],1),a("q-separator",{attrs:{spaced:""}})],1)}),0)],1)]),a("Footer",{attrs:{tab:t.tab}})],1)},r=[],o=a("0418"),s=a("fd2d"),i={name:"PagePrizeDetail",components:{Header:o["a"],Footer:s["a"]},props:{},data:function(){return{headerTitle:"奖金明细",tab:"",prizes:[{item:"突出贡献奖金",date:"2019-07-01:10:10:10",count:"5000"},{item:"突出贡献奖金",date:"2019-07-01:10:10:10",count:"4536"},{item:"突出贡献奖金",date:"2019-07-01:10:10:10",count:"100"}]}}},l=i,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"no-shadow"},[a("q-tabs",{staticClass:"bg-white text-grey-8 shadow-1",attrs:{dense:"","indicator-color":"transparent",align:"justify","active-color":"primary",breakpoint:0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",icon:"home",to:"/",exact:"",label:"首页"}}),a("q-route-tab",{attrs:{name:"person",icon:"person",to:"/user-center",exact:"",label:"个人中心"}}),a("q-route-tab",{attrs:{name:"goods",icon:"settings",to:"/inventory-info",exact:"",label:"商品管理"}}),a("q-route-tab",{attrs:{name:"cash",icon:"monetization_on",to:"/cash-deal",exact:"",label:"提现交易"}})],1)],1)},r=[],o={name:"Footer",data:function(){return{}},props:{tab:{type:String,default:"home"}}},s=o,i=a("2877"),l=Object(i["a"])(s,n,r,!1,null,"5ba968ea",null);e["a"]=l.exports}}]);