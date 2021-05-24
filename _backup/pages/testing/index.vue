<template>
  <div>
    <router-link to="/testing/auto">auto</router-link>
    <router-link to="/testing/auto2">auto2</router-link>
    <router-link to="/testing/auto3">auto3</router-link>
    <router-link to="/testing/auto4">auto4</router-link>
    <router-link to="/testing/auto5">auto5</router-link>
    <router-link to="/testing/auto6">auto6</router-link>
    <router-link to="/testing/auto7">auto7</router-link>
    <router-link to="/testing/auto8">auto8</router-link>
    <router-link to="/testing/auto9">auto9</router-link>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
// let rdb = firebase.database()
import autophp from '@/plugins/autophp';
let sdb = new autophp();
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    
  },
  metaInfo() {
      return {
        title: "Tentang TA_Maliki / Taufik Akbar Maliki",
        meta: [{  hid: "description",  name: "description",  content: "Tentang Taufik akbar maliki / TA_Maliki",},{  property: "og:title",  content: "Tentang Taufik akbar maliki / TA_Maliki",},{ property: "og:site_name", content: "TA_Maliki" },{ property: "og:type", content: "website" },{  property: `og:url`,  content: `${this.$store.state.url}`,},{  property: `og:image`,  content: `${this.$store.state.url}/Kino.jpg`,},{  property: `og:description`,  content: `documentasi ya`,},{  name: "keywords",  content: "blog,portofolio,freelance",},{ name: "robots", content: "index,follow" },],
      };
}}
</script>