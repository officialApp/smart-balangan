import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "leaflet/dist/leaflet.css";
Vue.config.productionTip = false



import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import "firebase/analytics";  
// import 'firebase/functions';
const config = {
  apiKey: "AIzaSyAbFVto_BzFMlbLeIwFJFWmhD-zxboOYxQ",
  authDomain: "kominfobalangan-d2008.firebaseapp.com",
  projectId: "kominfobalangan-d2008",
  storageBucket: "kominfobalangan-d2008.appspot.com",
  messagingSenderId: "494678481790",
  appId: "1:494678481790:web:b608138489f541ce00f12f",
  measurementId: "G-LJMRRD9RKK"
}; 
firebase.initializeApp(config);
// var db = firebase.firestore();
var userAgent = window.navigator.userAgent;
if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  // iPad or iPhone
}
else {

if (typeof cordova === "object") {
  firebase.analytics();
}else{
  if(window.location.href.indexOf('localhost:80')!=-1){
    firebase.analytics();
  }
  else{
    firebase.analytics();
    const messaging = firebase.messaging();
    // Add the public key generated from the console here.
    messaging.usePublicVapidKey("BOyWiIWmXY2AVZ-oe7InZFiYRrJDoIGet3J4ygFUAKXMg-WFi9heoPybaX3Syoa7UryLSGUtqUAj8wAdLM0pBM8");
    messaging.requestPermission().then(() => {
      console.log('Notification permission granted.');
      messaging.getToken().then((token) => {
        console.log(token);
        localStorage.setItem('notifid',token);
      })
    }).catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
    
    messaging.onMessage(payload => {
      console.log("Message received. ", payload);
      const { title, ...options } = payload.notification;
    });
  }

}}

Vue.config.productionTip = false

var pjson = require('../package.json');
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // meta ogurl
  var ogurl = document.createElement('meta');
  ogurl.setAttribute('property', 'og:url');
  ogurl.content = document.location.href;
  document.getElementsByTagName('head')[0].appendChild(ogurl);
    // meta ogtitle
    var ogtitle = document.createElement('meta');
    ogtitle.setAttribute('property', 'og:title');
    ogtitle.content = pjson.name + " " + to.name.replace('-',' ')
    document.getElementsByTagName('head')[0].appendChild(ogtitle);
        // meta ogdesc
        var ogdesc = document.createElement('meta');
        ogdesc.setAttribute('property', 'og:description');
        ogdesc.content = pjson.name + " " + to.name.replace('-',' ')
        document.getElementsByTagName('head')[0].appendChild(ogdesc);
  // meta description
  var desc = document.createElement('meta');
  desc.setAttribute('name', 'description');
  desc.content = pjson.name + " " + to.name.replace('-',' ')
  document.getElementsByTagName('head')[0].appendChild(desc);
  // Meta author 
  var author = document.createElement('meta');
  author.setAttribute('name', 'author');
  author.content = "Malik"
  document.getElementsByTagName('head')[0].appendChild(author);
  // Meta keywords 
  var keywords = document.createElement('meta');
  keywords.setAttribute('name', 'keywords');
  keywords.content = to.name.replace('-',',')+','+pjson.name
  document.getElementsByTagName('head')[0].appendChild(keywords);
  // HEAD TITLE
  document.title =  pjson.name + " " + to.name.replace('-',' ') 
  next();
});

new Vue({
  store,
  // disini
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      setTimeout(() => {
        this.$router.push(redirect)
      }, 500)
    }
  }
}).$mount('#app')

import "./plugins/ssrno";
// import "./plugins/directives";
import "./plugins/Instance";