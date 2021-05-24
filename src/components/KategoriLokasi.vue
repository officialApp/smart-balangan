<template>
    <div>
        <p class="pl-3 pb-2 font-bold text-lg">Kategori Lokasi</p>
        <hr class="style13">
        <div class="container-fluid">
          <div class="row justify-content-center"> 
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=kuliner')">
            
              <img src="https://officialapp.website/icon/restaurant-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Kuliner</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=pariwisata')">
             <img src="https://officialapp.website/icon/mountain-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Pariwisata</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=hotel')">
               <img src="https://officialapp.website/icon/hotel-signal-hotel-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Hotel</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=belanja')">
               <img src="https://officialapp.website/icon/shopping-bag-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Belanja</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=umkm')">
               <img src="https://officialapp.website/icon/tools-pen-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">UMKM</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=fasilitas umum')">
              <img src="https://officialapp.website/icon/bus-stop-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Fasilitas Umum</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=kesehatan')">
               <img src="https://officialapp.website/icon/health-care-accident-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Kesehatan</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/harian')">
             <img src="https://officialapp.website/icon/news-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Info Harian</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=pendidikan')">
              <img src="https://officialapp.website/icon/book-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Pendidikan</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/kategori?s=kantor pemerintahan')">
            <img src="https://officialapp.website/icon/post-office-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Kantor Pemerintahan</p>
            </div>
            <div class="col-4 mt-4 text-center" @click="$router.push('/publik')">
              <img src="https://officialapp.website/icon/customer-service-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Layanan Publik</p>
            </div>
            <div class="col-4 mt-4 text-center"  @click="$router.push('/transportasi')">
           <img src="https://officialapp.website/icon/bus-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Transporasi</p>
            </div>
               <div class="col-4 mt-4 text-center"  @click="$router.push('/acara')">
               <img src="https://officialapp.website/icon/seventeen-svgrepo-com.svg" 
                    style="height:60px;width:60px;display:block;margin:auto;" alt="">
              <p class="font-bold text-sm">Event/Acara</p>
            </div>
            
          </div>
        </div>
    </div>
</template>
