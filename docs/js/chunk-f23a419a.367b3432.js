(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f23a419a"],{"68d2":function(e,t,n){"use strict";n("fbd1")},"9f35":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.busy?n("div",[e._m(0)]):e._e(),n("router-view")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"absolute",height:"100vh",width:"100vw",background:"linear-gradient(90deg, rgba(8,34,11,0.5522584033613445) 3%, rgba(1,11,2,0.5046393557422969) 98%)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[n("p",{staticClass:"font-bold text-2xl text-red animated bounce infinite",staticStyle:{position:"absolute",top:"50%",left:"30%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[e._v("LOADING ...")])])}],s=n("53ca"),r=n("4b97"),a=new r["a"],c={data:function(){return{test:1,bearer:"",busy:!1}},methods:{version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var e=indexedDB.deleteDatabase(this.$store.state.indexdb);e.onsuccess=function(){console.log("Deleted database successfully")},e.onerror=function(){console.log("Couldn't delete database")},e.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.version(),this.loginOAuth()}},mounted:function(){var e=this,t=this;//! idleLogout();
window.addEventListener("scroll",(function(e){this.scrollY}));var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"),document.head.appendChild(n),setTimeout((function(){(new WOW).init()}),500),document.addEventListener("deviceready",(function(){var e=PushNotification.init({android:{senderID:"494678481790",sound:"true",vibrate:"true",clearNotifications:!0,forceShow:!0},ios:{alert:"true",badge:"true",sound:"true"}});PushNotification.createChannel((function(){console.log("success")}),(function(){console.log("error")}),{id:"test-channel",description:"My first test channel",importance:5,vibration:[500,1e3,500,500],sound:"test"}),e.on("registration",(function(e){localStorage.setItem("notifid",e.registrationId),t.regis=e.registrationId,t.$forceUpdate(),this.$store.state.users&&a.collection("tbuser").doc().set({id:this.$store.state.users.id,fcm:e.registrationId}).then((function(e){console.log(e)}))})),e.subscribe("epermit",(function(){}),(function(e){alert("error subscribe epermit")})),e.on("notification",(function(e){})),e.on("error",(function(e){console.log(e.message)}))}),!1),"object"===("undefined"===typeof cordova?"undefined":Object(s["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),window.powerManagement.dim((function(){console.log("Wakelock acquired")}),(function(){console.log("Failed to acquire wakelock")})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.mediaQueries()}))})),setTimeout((function(){e.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(t){e.busy=t}))}},d=c,u=(n("68d2"),n("2877")),l=Object(u["a"])(d,o,i,!1,null,null,null);t["default"]=l.exports},fbd1:function(e,t,n){}}]);
//# sourceMappingURL=chunk-f23a419a.367b3432.js.map