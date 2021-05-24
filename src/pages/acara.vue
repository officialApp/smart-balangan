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
        ACARA / EVENT
    </p>
    </div>
    <div class="p-3 rounded-t-2xl bg-white" style="margin-top:-30px;">
        <div class="scroll bg-white rounded-lg">
        </div>
    </div>
    <br>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12" v-for="(item, index) in acara" :key="index">
                <p class="float-right font-bold">{{item.tahun}}</p>
                <p class="float-left font-bold text-lg">{{item.bulan}}</p>
                <br>
                <div class="p-2 rounded-lg">
                    <div class="shadow-lg rounded-lg row rounded-l-lg">
                        <div class="col-3 text-center text-2xl font-bold rounded-lg p-3 bg-gray-300">
                            {{item.tgl}} <br>
                            <span class="text-xl">
                            {{item.hari}}
                            </span>
                        </div>
                        <div class="col-9 p-2 bg-gray-600 rounded-r-lg">
                            <p class="text-sm">{{item.waktu_acara}}</p>
                            <p class="font-bold text-lg">{{item.judul}}</p>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    </div>
  </div>
</template>
<script>
import autophp from '@/plugins/autophp3.js'
let sdb = new autophp()
export default{
    methods: {
        getData(){
         alert('y')   
        }
    },
    data(){
        return{
            acara:[
                {
                    judul:"",
                    tempat_acara:"",
                    waktu_acara:"",
                    tahun:"2020",
                    bulan:'April',
                    hari:"08",
                    keterangan:"",
                    gambar:"https://balangankab.go.id/icon.png",

                }
            ]
        }
    },
    mounted() {
        //doc adalah select *
        let that =this
        sdb.collection("balangankab_acara").doc().get("*","order by tanggal asc").then(res => {
            // console.log(res);
            that.acara = res 
            that.$forceUpdate()
        });
        
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