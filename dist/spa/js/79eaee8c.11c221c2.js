(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["79eaee8c"],{"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:""}},[t.showBack?a("q-icon",{attrs:{name:"arrow_back_ios"},on:{click:function(e){return t.$router.go(-1)}}}):t._e()],1),a("q-toolbar-title",{staticClass:"text-center"},[t._v("\n      "+t._s(t.title)+"\n    ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",to:t.rightTo},on:{click:t.rightCallBackFun}},[t._t("headerRight")],2)],1)],1)},o=[],s={name:"Header",data:function(){return{}},props:{title:{type:String,default:"冰肌玉肤·颜回本初"},showBack:{type:Boolean,default:!0},rightTo:{type:String,default:""},rightCallBackFun:{type:Function,default:function(){}}}},l=s,r=a("2877"),c=Object(r["a"])(l,n,o,!1,null,"2deecc86",null);e["a"]=c.exports},"1e8c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{title:t.headerTitle}}),a("q-page",[a("div",{staticClass:"q-pa-sm q-gutter-xs"},[a("q-list",[a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",[a("q-input",{attrs:{label:"银行",dense:!1,type:"text",maxlength:"30"},model:{value:t.bankName,callback:function(e){t.bankName=e},expression:"bankName"}})],1)],1),a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",[a("q-input",{attrs:{label:"开户行",dense:!1,type:"text",maxlength:"100"},model:{value:t.subBankName,callback:function(e){t.subBankName=e},expression:"subBankName"}})],1)],1),a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",[a("q-input",{attrs:{label:"开户名",dense:!1,type:"text",maxlength:"30"},model:{value:t.accountName,callback:function(e){t.accountName=e},expression:"accountName"}})],1)],1),a("q-item",{staticClass:"q-pa-sm"},[a("q-item-section",[a("q-input",{attrs:{label:"银行卡号",dense:!1,type:"number",maxlength:"60"},model:{value:t.accountNo,callback:function(e){t.accountNo=e},expression:"accountNo"}})],1)],1)],1),a("q-btn",{staticClass:"full-width q-my-lg text-subtitle1",attrs:{unelevated:"",color:"primary",label:"确定"}})],1)]),a("Footer",{attrs:{tab:t.tab}})],1)},o=[],s=a("0418"),l=a("fd2d"),r={name:"PageBankCard",components:{Header:s["a"],Footer:l["a"]},props:{},data:function(){return{headerTitle:"我的银行卡",tab:"",bankName:"宇宙银行",subBankName:"地球支行",accountName:"灭霸001",accountNo:"123456789013268"}}},c=r,i=a("2877"),u=Object(i["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"no-shadow"},[a("q-tabs",{staticClass:"bg-white text-grey-8 shadow-1",attrs:{dense:"","indicator-color":"transparent",align:"justify","active-color":"primary",breakpoint:0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",icon:"home",to:"/",exact:"",label:"首页"}}),a("q-route-tab",{attrs:{name:"person",icon:"person",to:"/user-center",exact:"",label:"个人中心"}}),a("q-route-tab",{attrs:{name:"goods",icon:"settings",to:"/inventory-info",exact:"",label:"商品管理"}}),a("q-route-tab",{attrs:{name:"cash",icon:"monetization_on",to:"/cash-deal",exact:"",label:"提现交易"}})],1)],1)},o=[],s={name:"Footer",data:function(){return{}},props:{tab:{type:String,default:"home"}}},l=s,r=a("2877"),c=Object(r["a"])(l,n,o,!1,null,"5ba968ea",null);e["a"]=c.exports}}]);