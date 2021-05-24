<template>
  <div>
    <div class="sm-form ">
        <label for="username">Your username</label>
        <input type="text" id="username" name="username" class="form-control form-control-sm" placeholder="username" v-model="vdata.username" >
    </div>
    <div class="sm-form ">
        <label for="password">Your password</label>
        <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
    </div>
    <button type="button" @click="test" class="btn btn-sm btn-primary  ">test</button>
  </div>
</template>
<script>
import autophp from '@/plugins/autophp.js'
    let sdb = new autophp()
import axios from 'axios'
export default{
  data(){
    return{
      vdata:{}
    }
  },
  methods: {
    test(){
      //doc adalah select *
      sdb.collection("list_item").doc().get("*","order by id").then(res => {
          console.log(res);
      });
      
      
        //idnya letak di vdata
        // sdb.collection('test2').doc().set(this.vdata).then(res=>{
        //     console.log(res)
        // })
              
    }
  },
}
</script>