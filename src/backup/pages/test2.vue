<template>
  <div>
    <button type="button"  class="btn btn-sm btn-dark  " @click="test">test
      </button>
  </div>
</template>
<script>
import autophp from '@/plugins/autophp3.js'
    let sdb = new autophp()
    
export default{
  methods: {
    test(){
      //doc adalah select *
      sdb.collection("balangankab_galery").doc().get("*","order by id").then(res => {
          console.log(res);
      });
      
    }
  },
}
</script>