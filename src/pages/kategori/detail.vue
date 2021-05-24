<template>
    <div>
        <button @click="$router.go(-1)" type="button" class="btn btn-sm btn-dark rounded-circle opacity-75 ml-3 mt-3" style="position:absolute;z-index:10;">
              <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
            <!-- <span class="typcn typcn-arrow-left text-2xl"></span> -->
            </button>
        <img :src="$store.state.detail_tempat.gambar" v-viewer class="" style="height:250px;width:100vw;">
        <span style="position:absolute;color:white;margin-top:-110px;padding-left:20px;" class="text-sm">
            {{$store.state.title_tempat}} 
            <br>
            <span class="text-lg font-bold">{{$store.state.detail_tempat.nama_tempat}}</span>
            <br>
            <!-- <span class="typcn typcn-map"></span> -->
              <img src="https://upload.egov.balangankab.go.id/svg/map.svg" class="float-left"
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
             {{$store.state.detail_tempat.koordinat}}
        </span>
        <div style="position:absolute;margin-top:-20px;" class="rounded-t-xl bg-white container-fluid">
            <div class="row">
                <div class="col-12">
                    <div v-if="menu=='deskripsi'">
                        <p class="font-bold text-xl pt-2 pb-2 pl-2">Deskripsi</p>
                        <p class=" text-md pl-2" v-html="$store.state.detail_tempat.deskripsi"></p>
                    </div>
                    <div v-else class="p-2">
                        <div style="overflow: scroll;height:600px;">

                        <div v-html="$store.state.detail_tempat.map">
                        </div>
                        <br>
                        <a target="__blank" :href="`http://www.google.com/maps/place/${$store.state.detail_tempat.koord}`" type="button"  class="btn btn-sm btn-dark  btn-block text-white p-2 rounded-lg">
                          <img src="https://upload.egov.balangankab.go.id/svg/map.svg" class="d-inline"
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
                         Kunjungi Lokasi</a>
                        </div>
                        <!-- <iframe :src="$store.state.detail_tempat.map" style="width:100%;height:300px;" allowfullscreen="" loading="lazy"></iframe> -->
                    </div>
                </div>
            </div>
        </div> 
        <div class="container-fluid" style="width:100vw;position:fixed;bottom:20px;">
        <div class="row p-3" >
            <div class="col-6 btn-md p-3 text-center rounded-l-lg "  :class="menu=='deskripsi'?'btn-dark':'btn-secondary'" @click="menu='deskripsi'">
                Deskripsi
            </div>
            <div class="col-6 btn-md p-3 text-center rounded-r-lg " :class="menu=='lokasi'?'btn-dark':'btn-secondary'" @click="menu='lokasi';frames()">
                Lokasi
            </div>
        </div> 
        </div>
    </div>
</template>
<script>
import autophp from '@/plugins/autophp.js'
import gpsdistance from 'gps-distance'
let sdb = new autophp()
export default{
    data(){
        return{
            datanya:[],
            menu:'deskripsi',
            title:{}
        }
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
        frames(){
            setTimeout(() => {
                this.$el.querySelector('iframe').style.width="100%";
                this.$el.querySelector('iframe').style.height="300px";
           }, 3000);
        }
    },
    async mounted() {
        let that = this;
        console.log(this.$store.state.detail_tempat)
        if(this.$store.state.detail_tempat){

        }else{
            this.$router.go(-1)
        }
        //doc adalah select *
        // this.datanya = await sdb.collection("list_item").doc().get("*",`where tb1.id=${this.$route.query.id}`)
        //   this.datanya = this.datanya.filter(e=>{
        //     let arr = e.koordinat.split(',');
        //     e.koordinat2=that.distance(that.coords[0],that.coords[1],arr[0],arr[1])
        //     return e
        // })
        // let data = await sdb.collection("menu_kuliner").doc().get("*",`where id='${this.datanya[0].id_menu}'`)
        // this.title=data[0]

    },
}
</script>