<template>
    <div>
      <br>
      <div class="bg-grey-lightest">
        <a href="https://mediacenter.balangankab.go.id" class="float-right font-bold mr-3 mt-4" style="font-size:12px;">
           Berita Selengkapnya
        </a>
        <p class="p-3 font-bold text-lg">Berita Terbaru</p>
        <a target="__blank" :href="`https://mediacenter.balangankab.go.id/artikel/detail/${item.slug_berita}`" class="row border-b-1 p-2 border-black " v-for="(item, index) in beritas" :key="index+'berutas'">
          <div class="col-3 text-center">
            <img :src="'https://mediacenter.balangankab.go.id/upload/artikel/'+item.gambar" class="text-center img-fluid" alt="" style="max-height:60px;"></div>
          <div class="col-9">
            <p class="text-sm font-bold">{{item.judul}}</p>
            <p class="text-sm" v-html="item.content.substr(0,70)"></p>
            <p class="text-sm opacity-75 font-bold" style="font-size:12px;" >Source : Media Center</p>
          </div>
        </a>
      </div>
    </div>
</template>
<script>
import autophp from '@/plugins/autophp2.js'
let sdb = new autophp()
export default{
  data(){
    return{
      beritas:[]
    }
  },
  methods: {
    getBerita(){

    }
  },
  async mounted() {
    //doc adalah select *
    let that =this
    //doc adalah select *
    sdb.collection("artikel").doc().get("*","order by ditulis desc limit 10").then(res => {
        console.log(res);
      that.beritas=res
      that.$forceUpdate()
    });
    
  },
}
</script>