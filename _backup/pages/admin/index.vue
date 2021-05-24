<template>
  <div>
    ADMIN 
    <button type="button" @click="$store.dispatch('logout')" class="btn btn-sm btn-danger">Logout</button>
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
  layout:"admin",
  mounted() {
       sdb.collection().ceklogin(this.$store).then(res=>{
                //   this.$router.push('/lembur')
                }).catch(err=>{
                  this.$router.push('/auth/login2')
                })
  },
}
</script>