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
        <div class="row justify-content-center">
            <div class="col-6 text-center pl-2 pr-2 pb-2" @click="$router.push('/harian/waktu_sholat')" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                     <img src="https://officialapp.website/icon/mosque-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                    <p class="text-center font-bold text-sm">Waktu Sholat</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </div>
            <div class="col-6 text-center pl-2 pr-2 pb-2" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                   <img src="https://officialapp.website/icon/market-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                    <p class="text-center font-bold text-sm">Harga Sembako</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </div>
            <div class="col-6 text-center pl-2 pr-2 pb-2" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                     <img src="https://officialapp.website/icon/weather-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                    <p class="text-center font-bold text-sm">Cuaca</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </div>
             <div class="col-6 text-center pl-2 pr-2 pb-2" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                     <img src="https://officialapp.website/icon/gold-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                    <p class="text-center font-bold text-sm">Harga Emas</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </div>
            <div class="col-6 text-center pl-2 pr-2 pb-2" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                    <img src="https://officialapp.website/icon/radio-tower-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                    <p class="text-center font-bold text-sm">Liputan Hari ini</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </div>
              <a href="https://www.youtube.com/c/MediaCenterPemkabBalangan/videos" target="__blank" class="col-6 text-center pl-2 pr-2 pb-2" >
                <div class="shadow-lg rounded-lg hover:bg-green-400" style="min-height:20vh;">
                    <br>
                    <img src="https://officialapp.website/icon/radio-tower-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
                     <p class="text-center font-bold text-sm">Berita Media Center</p>
                    <p class="text-gray-400 text-center text-sm">Balangan</p>
                </div>
            </a>

     </div>
    </div>
  </div>
</template>
<script>
export default{
    mounted() {
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