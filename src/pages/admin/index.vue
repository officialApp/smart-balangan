<template>
  <div class="sm:p-4">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="shadow-lg rounded-lg p-5">
          <p class="font-bold text-2xl float-right"></p>
          <div class="text-center p-3">
            <img src="@/static/kopdiskominfo.png" alt="">
          </div>
          <hr class="style13" />
          <p class="p-2 text-sm font-bold"></p>
          <div class="">
            <div v-for="(item, index) in listMenu" :key="index">
              <div v-if="item.menu=='kuliner' || item.menu=='terminal' || item.menu=='harga sembako' || item.menu=='website' || item.menu=='sejarah balangan'">
                <button type="button" class="btn btn-sm btn-dark pl-4 pr-4 mt-2 mb-2">
                  {{item.bagian}}
                </button>
              </div>
              <div v-if="item.bagian!='info harian' && item.bagian!='info kabupaten' && item.bagian!='layanan publik'">
              <button type="button" class="btn btn-sm btn-primary capitalize"  @click="$router.push(`/admin/kategori/menu/list_item?data=${item.link}`)">
                {{item.menu}}
                <img src="https://upload.egov.balangankab.go.id/svg/edit.svg" 
                     class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              <button type="button" class="btn btn-sm btn-success ml-3 "  @click="$router.push(`/admin/kategori/menu?data=${item.link}`)">
              Kategori
                <img src="https://upload.egov.balangankab.go.id/svg/puzzle.svg" 
                     class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
              </button>
              </div>
              <div v-else>
                  <button type="button" class="btn btn-sm btn-primary capitalize"  @click="$router.push(`${item.link}`)">
                    {{item.menu}}
                    <img src="https://upload.egov.balangankab.go.id/svg/edit.svg" 
                        class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
                  </button>
              </div>
              <div v-if="listMenu[index+1]">
                <div v-if="listMenu[index].bagian!=listMenu[index+1].bagian">
                  <hr class="style13"> 
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      listMenu:[
            {
              menu:'kuliner',
              link:'kuliner',
              bagian:'halaman utama'
            },
            {
              menu:'pariwisata',
              link:'pariwisata',
              bagian:'halaman utama'
            },
            {
              menu:'hotel',
              link:'hotel',
              bagian:'halaman utama'
            },
            {
              menu:'belanja',
              link:'belanja',
              bagian:'halaman utama'
            },
            {
              menu:'umkm',
              link:'umkm',
              bagian:'halaman utama'
            },
            {
              menu:'fasilitas umum',
              link:'fasilitas umum',
              bagian:'halaman utama'
            },
            {
              menu:'kesehatan',
              link:'kesehatan',
              bagian:'halaman utama'
            },
            {
              menu:'pendidikan',
              link:'pendidikan',
              bagian:'halaman utama'
            },
            {
              menu:'pemerintahan',
              link:'pemerintah',
              bagian:'halaman utama'
            },
            {
              menu:'terminal',
              link:'terminal',
              bagian:'transportasi'
            },
            {
              menu:'transportasi online',
              link:'transportasi online',
              bagian:'transportasi'
            },
            {
              menu:'dealer mobil',
              link:'dealer mobil',
              bagian:'transportasi'
            },
            {
              menu:'dealer motor',
              link:'dealer motor',
              bagian:'transportasi'
            },
            {
              menu:'free ebook',
              link:'/admin/test',
              bagian:'info kabupaten'
            },
          ]
    }
  },
  layout: "admin",
};
</script>