<template>
  <div class="p-4">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="shadow-lg rounded-lg p-5">
          <p class="font-bold text-2xl float-right"></p>
          <div class="text-center p-3">
            <img src="@/static/kopdiskominfo.png" alt="">
          </div>
          <hr class="style13" />
          <p class="p-2 text-sm font-bold"></p>
          
          <table>
            <tr class="">
              <td class="font-bold" style="">HALAMAN UTAMA : <img src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg" 
                     class="d-inline" style="height:30px;width:20px;" alt=""></td>
            </tr>
            <tr class="">
              <td class="m-2"></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Kuliner
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=kuliner')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=pariwisata')" class="btn btn-sm btn-dark">
                    Pariwisata
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=pariwisata')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=hotel')" class="btn btn-sm btn-dark">
                    Hotel
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=hotel')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=belanja')" class="btn btn-sm btn-dark">
                    Belanja
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=belanja')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=umkm')" class="btn btn-sm btn-dark">
                    UMKM
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=umkm')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=fasilitas umum')" class="btn btn-sm btn-dark">
                    Fasilitas Umum<img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=fasilitas umum')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kesehatan')" class="btn btn-sm btn-dark">
                    Kesehatan
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=kesehatan')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
                        <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=pendidikan')" class="btn btn-sm btn-dark">
                    Pendidikan
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=pendidikan')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td></td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=pemerintah')" class="btn btn-sm btn-dark">
                    Pemerintahan
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=pemerintah')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            
            <tr class="mb-5">
              <td></td>
              <td>
                <div class="mt-2 font-bold">
                  -
                    Transportasi<img src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg" 
                     class="d-inline" style="height:30px;width:20px;" alt="">
                </div>
              </td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=terminal')" class="btn btn-sm btn-dark">
                    Terminal<img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=terminal')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=transportasi online')" class="btn btn-sm btn-dark">
                    Transporatsi Online<img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=transportasi online')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=dealer mobil')" class="btn btn-sm btn-dark">
                    Dealer Mobil<img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=dealer mobil')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=dealer motor')" class="btn btn-sm btn-dark">
                    Dealer Motor<img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                  -<button type="button" @click="$router.push('/admin/kategori/menu?data=dealer motor')" class="btn btn-sm btn-dark ml-2">
                    + Kategori
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/archive.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="mt-5"></td>
              <td>
                <div class="mt-5 font-bold"> Info Harian <img src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg" 
                     class="d-inline" style="height:30px;width:20px;" alt=""></div>
              </td>
              <td>
                <div class="mt-5">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Harga Sembako
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Harga Emas
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Kurs Valuta Asing
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>

            <tr class="">
              <td></td>
              <td>
                <div class="mt-2 font-bold">Layanan Publik <img src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg" 
                     class="d-inline" style="height:30px;width:20px;" alt=""></div>
              </td>
              <td>
                <div class="mt-2 font-bold">Info Kabupaten <img src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg" 
                     class="d-inline" style="height:30px;width:20px;" alt=""></div>
                <div style="height: 120px"></div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=website')" class="btn btn-sm btn-dark">
                    Website
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/konten/aplikasi')" class="btn btn-sm btn-dark">
                    Aplikasi
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/konten/kode_pos')" class="btn btn-sm btn-dark">
                    Daftar Kode Pos
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/konten/telpon_penting')" class="btn btn-sm btn-dark">
                    Telpon Penting
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/konten/email_skpd')" class="btn btn-sm btn-dark">
                    E-Mail SKPD
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=lowongan kerja')" class="btn btn-sm btn-dark">
                    Lowongan Kerja
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=jasa pengiriman')" class="btn btn-sm btn-dark">
                    Jasa Pengiriman
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
              <td>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=sejarah tabalong')" class="btn btn-sm btn-dark">
                    Sejarah Tabalong
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=peta wilayah')" class="btn btn-sm btn-dark">
                    Peta Wilayah
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Pejabat Daerah
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
                <div class="mt-2">
                  -
                  <button type="button" @click="$router.push('/admin/kategori/menu/list_item?data=kuliner')" class="btn btn-sm btn-dark">
                    Free Ebook
                    <img
                      src="https://upload.egov.balangankab.go.id/svg/edit.svg"
                      class="d-inline"
                      style="
                        height: 20px;
                        width: 20px;
                        filter: brightness(0) invert(1);
                      "
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",
};
</script>