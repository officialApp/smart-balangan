<template>
    <div>
        <button type="button" @click="test" class="btn btn-sm btn-primary  ">test</button>
        <div v-if="datanya.length>0">
            <Btables :tables="'test'" :hide="['']" @selected="ambil" />
        </div>
    </div>
</template>
<script>
import Btables from '@/components/Btables.vue'
import autophp from '@/plugins/autophp4'
let sdb = new autophp();
export default{
    layout:"admin",
    data(){
        return{
            datanya:[]
        }
    },
    components:{
        Btables
    },
    methods: {
        ambil(){
            console.log('ok')
        },
        test(){
            //doc adalah select *
            
            
        }
    },
    mounted() {
        sdb.collection("test").doc().get("*","order by id").then(res => {
                this.datanya=res;
                console.log(res);
            });
    },
}
</script>