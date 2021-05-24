<template>
  <div class="bg-white">
    <div class="bg-green-400" style="height:90px;width:100vw;background: rgb(31,143,175);
background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);">
        <button type="button" class="btn btn-sm btn-dark  float-left ml-3 mt-2" @click="$router.go(-1)">
            <!-- <span class="typcn  text-xl typcn-arrow-left"></span> -->
            <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
                 class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
            </button>
        <button type="button" class="btn btn-sm btn-dark  float-right mr-3 mt-2">
            <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                 class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
            <!-- <span class="typcn text-xl typcn-pin"></span> -->
            </button>
    <p class="text-2xl pt-2 text-center uppercase" style="color:white;font-family:times new roman;text-shadow: 0 0 3px black, 0 0 5px black;">
        INFO HARIAN
    </p>
    </div>
    <div class="p-3 rounded-t-2xl bg-white" style="margin-top:-30px;">
        <div class="scroll bg-white rounded-lg">
        </div>
    </div>
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-3">
                <div class="shadow-lg rounded-lg">
                    <p class="text-lg font-bold ">WAKTU SHOLAT</p>
                    <button type="button" @click="getWaktuSholat" class="btn btn-sm btn-primary  ">test</button>
                    {{coords}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            coords:[],
            waktu:[]
        }
    },
    mounted() {
        this.getloc()
    },
    methods: {
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
    getWaktuSholat(){
        let tanggal = this.$datefns.format(new Date(),'YYYY-MM-DD')
        axios.get(`https://api.pray.zone/v2/times/day.json?longitude=115.4548356&latitude=-2.3382756&elevation=333&date=${tanggal}`).then(res=>{
            console.log(res.data)
        })
    }
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