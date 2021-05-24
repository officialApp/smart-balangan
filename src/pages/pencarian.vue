<template>
  <div class="animate__animated animate__fadeIn">
       <button  type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;right:10px;background:white;color:black;">
    <img src="https://upload.egov.balangankab.go.id/svg/zoom.svg" 
         class="d-inline" style="height:30px;width:20px;" alt="">
     <!-- <span class="typcn typcn-zoom text-lg"></span> -->
     
     </button>
     <button @click="$router.go(-1)" type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;left:10px;background:black;">
     <!-- <span class="typcn typcn-arrow-left text-lg"></span> -->
     <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
          class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
     </button>
   <div style="
   height:30vh;width:100vw;
  background: rgb(31,143,175);
background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);">
   </div>
   <div style="position:absolute;top:60px;border-radius:20px 20px 0px 0px;background:white;width:100vw;min-height:300px;">
     <br>
     <br>
     <div class="row justify-content-center" style="width:100vw;">
       <div class="col-11 text-center">
         <p class="text-left texl-lg font-bold">Pencarian 
           <img src="https://upload.egov.balangankab.go.id/svg/zoom.svg" 
                class="d-inline" style="height:30px;width:20px;" alt="">
           <!-- <span class="typcn typcn-zoom"></span> -->
         </p>
         <br>
         <label class="sr-only" for="input-id"></label>
         <div class="input-group mb-2">
             <input type="text" class="form-control py-0" id="input-id" placeholder="" v-model="search"> 
             <button type="button" class="float-right btn btn-sm btn-success" @click="cari">
               <!-- <span class="typcn typcn-zoom"></span> -->
               <img src="https://upload.egov.balangankab.go.id/svg/zoom.svg" 
                    class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
                Cari </button>
         </div>
         <br>
         <hr class="style13">
         <br>
          <div class="row bg-grey-lightest">
            <div class="col-6 flex-center mt-3" @click="$store.state.detail_tempat=item;$store.state.title_tempat=item.kategori;$router.push(`/kategori/detail?id=${item.id}`)" v-for="(item, index) in datanya" :key="index">
                    <img :src="item.gambar" style="width:100%;height:170px;display:block;margin:auto;" class="shadow-lg img-thumbnail rounded-lg "  alt="">
                    <span class=" text-sm float-right text-left" style="left:25px;bottom:10px;font-size:13px;position:absolute;color:white;font-family:times new roman;text-shadow: 0 0 3px black, 0 0 5px black;" >
                        {{item.kategori}}
                        <br>
                        <span class="font-bold">{{item.nama_tempat}}</span>
                        <br>
                        <span class="">
                          <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                               class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
                          <!-- <span class="typcn typcn-pin"></span> -->
                          {{item.koordinat}}
                          </span>
                    </span>
            </div>
        </div>
       </div>
     </div>
     <div>

     </div>
   </div>
  </div>
</template>
<script>
import autophp from '@/plugins/autophp.js'
    let sdb = new autophp()
import gpsdistance from 'gps-distance'
export default {
  data(){
    return {
      search:"",
      datanya:[],
      coords:0
    }
  },
  mounted() {
    this.getloc()
  },
  methods: {
    distance(a,b,c,d){
      var result = gpsdistance(a,b,c,d);
      let hasil ;
      hasil = result.toString().split('.');
      hasil=parseInt(hasil[0])>0?parseInt(hasil[0])+' km':hasil[1].substr(0, 3)+' m';
      return hasil
    },
    getloc(){
      let that = this;
       var onSuccess = function(position) {
           that.coords=[position.coords.latitude,position.coords.longitude]
    };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
       return navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
    async cari(id){
        let that= this
        this.datanya = await sdb.collection("list_item").doc().get("*",`left join menu_kategori tb2 on tb2.id=tb1.id_menu where tb1.nama_tempat LIKE '%${this.search}%'`)
        if(this.datanya.length>0){
          this.datanya = this.datanya.filter(e=>{
             let arr = e.koordinat.split(',');
              e.koord = e.koordinat
              e.koordinat=that.distance(that.coords[0],that.coords[1],arr[0],arr[1])
              return e
            })
        console.log(this.datanya)

          }
      this.$forceUpdate()
    },
  },
}
</script>