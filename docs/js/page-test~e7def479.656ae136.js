(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test~e7def479"],{bd8c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"username"}},[t._v("Your username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"username",name:"username",placeholder:"username"},domProps:{value:t.vdata.username},on:{input:function(a){a.target.composing||t.$set(t.vdata,"username",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"password"}},[t._v("Your password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:t.vdata.password},on:{input:function(a){a.target.composing||t.$set(t.vdata,"password",a.target.value)}}})]),e("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.test}},[t._v("test")])])},o=[],r=e("4b97"),n=(e("bc3a"),new r["a"]),d={data:function(){return{vdata:{}}},methods:{test:function(){n.collection("list_item").doc().get("*","order by id").then((function(t){console.log(t)}))}}},l=d,i=e("2877"),m=Object(i["a"])(l,s,o,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=page-test~e7def479.656ae136.js.map