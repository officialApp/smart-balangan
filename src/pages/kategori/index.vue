<template>
  <div class="bg-white">
    <div class="bg-green-400" style="height:90px;width:100vw;background: rgb(31,143,175);
background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);">
        <button type="button" class="btn btn-sm btn-dark  float-left ml-3 mt-2" @click="$router.go(-1)">
            <!-- <span class="typcn  text-xl typcn-arrow-left"></span> -->
          <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
        </button>
        <button type="button" class="btn btn-sm btn-dark  float-right mr-3 mt-2">
              <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
            <!-- <span class="typcn text-xl typcn-pin"></span> -->
            </button>
    <p class="text-2xl pt-2 text-center uppercase" style="color:white;font-family:times new roman;text-shadow: 0 0 3px black, 0 0 5px black;">
        {{$route.query.s}}
    </p>
    </div>
    <div class="p-3 rounded-t-2xl bg-white" style="margin-top:-30px;">
        <div class="scroll bg-white rounded-lg">
            <button  @click="ganti(item.id)" type="button" v-for="(item, index) in menu_kategori" :key="index+'menu kuliner'" class="btn btn-lg btn-style7 text-black rounded-lg ml-1 btn-menus">{{item.nama_menu}}</button>
        </div>
    </div>
    <br>
    <div class="container-fluid">

    <div class="row bg-grey-lightest">
        <div class="col-6 flex-center mt-3" @click="$store.state.detail_tempat=item;$store.state.title_tempat=title[0].nama_menu;$router.push(`/kategori/detail?id=${item.id}`)" v-for="(item, index) in datanya" :key="index">
                <img :src="item.gambar" style="width:100%;height:170px;display:block;margin:auto;" class="shadow-lg img-thumbnail rounded-lg "  alt="">
                 <span class=" text-sm float-right" style="left:25px;;bottom:10px;font-size:10px;position:absolute;color:white;font-family:times new roman;text-shadow: 0 0 3px black, 0 0 5px black;" >
                     {{title[0].nama_menu}}
                    <br>
                    <span class="font-bold">{{item.nama_tempat}}</span>
                    <br>
                    <span class="">
                        <!-- <span class="typcn typcn-pin"></span> -->
                    <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                         class="d-inline" style="height:20px;width:15px;filter: brightness(0) invert(1);" alt="">
                    {{item.koordinat}}</span>
                </span>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
import gpsdistance from 'gps-distance'
let db = firebase.firestore()
// let rdb = firebase.database()
import autophp from '@/plugins/autophp';
let sdb = new autophp();
export default{
  data(){
    return{
        menu_kategori:[],
        datanya:[],
        id_menu:1,
        title:"",
        jarak:0,
        coords:[]
    }
  },
  methods:{
    btnmenus(){
        setTimeout(() => {
            this.$el.querySelector('.btn-menus').click()
        }, 2000);
    },
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
    async ganti(id){
        let that= this
        this.datanya = await sdb.collection("list_item").doc().get("*",`where tb1.id_menu='${id}'`)
         this.datanya = this.datanya.filter(e=>{
        let arr = e.koordinat.split(',');
        e.koord = e.koordinat
        e.koordinat=that.distance(that.coords[0],that.coords[1],arr[0],arr[1])
        return e
    })
        this.title = this.menu_kategori.filter(e=>{
            if(id==e.id){
                return e
            }
        })
        this.$forceUpdate()
      }
  },
  async mounted() {
    this.getloc()
    let that=this
    let data = await sdb.collection("menu_kategori").doc().get("*",`where tb1.kategori='${this.$route.query.s}' order by tb1.id`)
    this.menu_kategori = data
    
    // this.datanya = await sdb.collection("list_item").doc().get("*",`where tb1.id_menu='${data[0].id}'`)
    // this.datanya = this.datanya.filter(e=>{
    //     let arr = e.koordinat.split(',');
    //     e.koord = e.koordinat
    //     e.koordinat=that.distance(that.coords[0],that.coords[1],arr[0],arr[1])
    //     return e
    // })
        that.$forceUpdate()
    this.title = data.filter(e=>{
        if(that.id_menu==e.id){
            return e
        }
    })
      this.btnmenus()
  },
 }
</script>
<style >
.scroll{
    white-space:nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling:touch;
    -ms-overflow-style:-ms-autohiding-scrollbar;
}
.scroll::-webkit-scrollbar{
    display:none;
}
.flex-center {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
}
</style>