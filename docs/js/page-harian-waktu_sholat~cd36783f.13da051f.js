(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-harian-waktu_sholat~cd36783f"],{"5ab5":function(t,a,s){},b8ab:function(t,a,s){"use strict";s("5ab5")},c27a:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-white"},[s("div",{staticClass:"bg-green-400",staticStyle:{height:"90px",width:"100vw",background:"linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%)"}},[s("button",{staticClass:"btn btn-sm btn-dark  float-left ml-3 mt-2",attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[s("img",{staticClass:"d-inline",staticStyle:{height:"30px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-left.svg",alt:""}})]),t._m(0),s("p",{staticClass:"text-2xl pt-2 text-center uppercase",staticStyle:{color:"white","font-family":"times new roman","text-shadow":"0 0 3px black, 0 0 5px black"}},[t._v(" INFO HARIAN ")])]),t._m(1),s("br"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-3"},[s("div",{staticClass:"shadow-lg rounded-lg"},[s("p",{staticClass:"text-lg font-bold "},[t._v("WAKTU SHOLAT")]),s("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.getWaktuSholat}},[t._v("test")]),t._v(" "+t._s(t.coords)+" ")])])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"btn btn-sm btn-dark  float-right mr-3 mt-2",attrs:{type:"button"}},[s("img",{staticClass:"d-inline",staticStyle:{height:"30px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/pin.svg",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p-3 rounded-t-2xl bg-white",staticStyle:{"margin-top":"-30px"}},[s("div",{staticClass:"scroll bg-white rounded-lg"})])}],i=s("bc3a"),o=s.n(i),l={data:function(){return{coords:[],waktu:[]}},mounted:function(){this.getloc()},methods:{getloc:function(){var t=this,a=function(a){t.coords=[a.coords.latitude,a.coords.longitude]};function s(t){alert("code: "+t.code+"\nmessage: "+t.message+"\n")}return navigator.geolocation.getCurrentPosition(a,s)},getWaktuSholat:function(){var t=this.$datefns.format(new Date,"YYYY-MM-DD");o.a.get("https://api.pray.zone/v2/times/day.json?longitude=115.4548356&latitude=-2.3382756&elevation=333&date=".concat(t)).then((function(t){console.log(t.data)}))}}},r=l,c=(s("b8ab"),s("2877")),d=Object(c["a"])(r,e,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=page-harian-waktu_sholat~cd36783f.13da051f.js.map