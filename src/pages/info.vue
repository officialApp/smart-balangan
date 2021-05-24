<template>
  <div class="animate__animated animate__fadeIn">
      <button  type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;right:10px;background:white;color:black;">
      <span class="text-dark font-bold text-lg p-1 ">!</span></button>
     <button @click="$router.go(-1)" type="button"  class="btn btn-sm btn-style9 rounded-circle   opacity-50" 
    style="position:absolute;z-index:100;top:5px;left:10px;background:black;">
            <img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
            style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
     </button>
     
   <div style="
   height:30vh;width:100vw;
  background: rgb(31,143,175);
background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);">
   </div>
   <div style="position:absolute;top:60px;border-radius:20px 20px 0px 0px;background:white;">
     <br>
     <br>
     <div class="row justify-content-center">
       <div class="col-10 text-center">
         <img src="@/static/icon.png" style="display:block;margin:auto;width:50vw;" alt="">
         <br>
       <p class="text-center font-bold text-lg">BALANGAN SMART APPS</p>

       <p >
         Balangan Smart Apps merupakan aplikasi yang dirancang untuk membantu memberikan kemudahan akses informasi untuk masyarakat
       </p>
       <br>
       <p class="font-bold">
         Dibuat Oleh
       </p>
       <br>
       <p class="font-bold">
         Dinas Komunikasi, Informatika Balangan
       </p>
       <p>Kabupaten Balangan</p>
       <br>
       <br>
       <br>
       <p class="font-bold"><a href="https://www.svgrepo.com/">Icons by svgrepo.com</a> </p>
       </div>
     </div>
     <div>

     </div>
   </div>
  </div>
</template>

