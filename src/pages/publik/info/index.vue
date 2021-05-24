<template>
  <div class="bg-white">
    <div
      class="bg-green-400"
      style="
        height: 90px;
        width: 100vw;
        background: rgb(31, 143, 175);
        background: linear-gradient(
          90deg,
          rgba(31, 143, 175, 1) 0%,
          rgba(186, 255, 217, 1) 100%
        );
      "
    >
      <button
        type="button"
        class="btn btn-sm btn-dark float-left ml-3 mt-2"
        @click="$router.go(-1)"
      >
        <!-- <span class="typcn text-xl typcn-arrow-left"></span> -->
        <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
             class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
      </button>
      <button type="button" class="btn btn-sm btn-dark float-right mr-3 mt-2">
        <!-- <span class="typcn text-xl typcn-pin"></span> -->
        <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
             class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
      </button>
      <p
        class="text-2xl pt-2 text-center uppercase"
        style="
          color: white;
          font-family: times new roman;
          text-shadow: 0 0 3px black, 0 0 5px black;
        "
      >
        LAYANAN PUBLIK
      </p>
    </div>
    <div class="p-3 rounded-t-2xl bg-white" style="margin-top: -30px">
      <div class="scroll bg-white rounded-lg"></div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <a href="https://balangankab.go.id/web/?l=Sejarah&s=2" target="__blank" class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
                <!-- <span class="typcn typcn-time"></span> -->
                <img src="https://upload.egov.balangankab.go.id/svg/time.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Sejarah Balangan
            </p>
          </div>
        </a>
        <!--  -->
         <div class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
              <img src="https://upload.egov.balangankab.go.id/svg/map.svg" 
                   class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Peta Wilayah
            </p>
          </div>
        </div>
        <!--  -->
             <div class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
                <img src="https://upload.egov.balangankab.go.id/svg/chart-bar.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Data TDA 2020
            </p>
          </div>
        </div>
        <!--  -->
         <div class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
                <img src="https://upload.egov.balangankab.go.id/svg/user-add-outline.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Pejabat Daerah
            </p>
          </div>
        </div>
        <!--  -->
         <div class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
                <img src="https://upload.egov.balangankab.go.id/svg/book.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Free E-Book
            </p>
          </div>
        </div>
        <!--  -->
         <div class="col-12 pl-2 pr-2 pb-2">
          <div class="shadow-lg rounded-lg hover:bg-green-400 p-3 text-left">
            <p class="pl-3 font-bold">
              <button type="button" class="btn btn-sm btn-dark mr-2 btn-circle">
                <img src="https://upload.egov.balangankab.go.id/svg/adjust-brightness.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              Data Menara Telekomunikasi
            </p>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
<style >
.scroll {
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.scroll::-webkit-scrollbar {
  display: none;
}
.flex-center {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
</style>