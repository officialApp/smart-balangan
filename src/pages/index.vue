<template>
  <div>
    <div
v-if="galready"
>
    <button @click="$router.push('/info')" type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;left:10px;background:black;">
      <span class="text-white text-lg p-1 ">!</span></button>
      <button @click="$router.push('/pencarian')" type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;right:10px;background:black;">
      <!-- <span class="typcn typcn-zoom text-lg"></span> -->
      <img src="https://upload.egov.balangankab.go.id/svg/zoom.svg" 
      style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
      </button>
     
    <div  style="height: 25vh; width: 100vw;margin-top:-30px;position:absolute; background: rgb(31,143,175);
background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);"></div>
<svg style="position:absolute;margin-top:70px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,117.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>



        <div class="rounded-lg animate__animated animate__fadeIn">
      <carousel-3d
      
        style="margin-top: 30px"
        :space="370"
        :height="260"
        :autoplay="true"
      >
        <slide
        v-for="(item, index) in galery" :key="index+'galery'"
          style="background: transparent; border: none; padding: 30px"
          :index="index"
        >
          <img
            :src="item.gambar"
            style="height: 210px"
            class="img-fluid shadow-xl"
          />
        </slide>
      </carousel-3d>
    </div>
    <div style="margin-top: -40px; max-height: 60vh; overflow: scroll">
      <div class="p-3 shadow-lg rounded-lg border-1 border-red-400" 
      
      >
        <div class="shadow-2xl p-2 rounded-lg animate__animated animate__backInDown">
          <KategoriLokasi/>
        </div>
          <div class="shadow-2xl p-2 rounded-lg animate__animated animate__backInDown">
          <BeritaTerbaru/>
        </div>

      </div>
    </div>
    <div
      style="
        position: absolute;
        top: 60px;
        border-radius: 20px 20px 0px 0px;
        background: white;
      "
    >
      <br />
      <br />
    </div>
  </div>
  
  <div v-else  style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);">
    <p class="text-center font-bold animated bounce infinite text-3xl">Loading ...</p>
  </div>
  </div>
</template>
<script>
import autophp2 from '@/plugins/autophp3.js'
let sdb2 = new autophp2()
import { Carousel3d, Slide } from "vue-carousel-3d";
import KategoriLokasi from '@/components/KategoriLokasi'
import BeritaTerbaru from '@/components/BeritaTerbaru'
import md5 from 'md5'
import autophp from '@/plugins/autophp.js'
let sdb = new autophp()
    
export default {
  data() {
    return {
      vdata:{},
      galery:[],
      galready:false
    };
  },
  mounted() {
    this.$router.push('/admin/login')
     let that =this
     setTimeout(() => {
      that.getloc() 
     }, 3000);
      //doc adalah select *
      // sdb2.collection("balangankab_galery").doc().get("*","order by id").then(res => {
      //     console.log('balangankab galery',res);
      //   that.galery=res
      //   that.$forceUpdate()
      //   that.galready=true
      // });
  },  
  methods:{
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
    init(){

    },
    beforeInit(){

    },
    login(){
      let data = {}
      data.username = 'kino'
      data.password = 'kino'
       sdb.collection('tbuser').login2(this.vdata,this.$store,this.$router,'/').then(res=>{
                console.log(res)
            })
    }
  },
  components: {
    Carousel3d,
    Slide,
    KategoriLokasi,
    BeritaTerbaru
  },
};
</script>
<style scoped>
#wave {
  position: relative;
  height: 70px;
  width: 600px;
  background: #e0efe3;
}
#wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 340px;
  height: 80px;
  background-color: white;
  right: -5px;
  top: 40px;
}
#wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 300px;
  height: 70px;
  background-color: #e0efe3;
  left: 0;
  top: 27px;
}
</style>