<template>
  <div style="font-family:times new roman;">
    <div class="no-print bg-black" style="color:White;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2">
            <button
              type="button"
              @click="back()"
              class="btn btn-sm btn-outline-danger no-print "
            >Go Back!</button>
          </div>
          <div class="col-sm-6">
            <button type="button" @click="print()" class="btn btn-sm btn-primary float-right pr-4 mt-4"><span class="typcn typcn-printer"></span> Print</button>
          </div>
        </div>
      </div>
      <hr class="style13" />
    </div>
    <!--  -->
    <!-- DIMULAI DARI SINI PRINT PAGE -->
    <!--  -->
    <div style>
      <div class="row">
        <div class="col-3">
            <img
        src="@/static/logobalangan.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="margin-left:10px;position:absolute;left:100px;height:126px;"
        alt="no found"
      />
        </div>
        <div class="col-9">
         <p class="pl-3 text-center" style="font-size:32px;line-height:1.5;line-spacing:3px;">
           PEMERINTAH KABUPATEN BALANGAN
            <br /><span class="font-bold">DINAS KOMUNIKASI DAN INFORMATIKA</span> 
            <br />
          </p>
          <p
            class="pl-3 text-center"
            style="font-size:18px;"
          ></p>
      <p
        class="text-center"
        style="font-size:18px;"
      >Jl. Jend. Ahmad Yani Km. 3,5 Paringin Selatan Telp. (0526) 2028434</p>
        </div>
      </div>
      <img src="@/static/photo/line.jpg" class="img-fluid" style="width:100%;height:20px;" />
          <br>
      <p
        class="text-center underline text-uppercase"
        style="font-size:21px;font-weight:bold;"
      >SURAT KETERANGAN / IZIN</p>
          <br>
      <br />
      <div class="text-2xl">

      <p>Yang bertanda tangan di bawah ini : </p>
      <br>
      <div class="pl-4">
        <tr>
          <td>Nama</td>
          <td class="pl-5 pr-5">:</td>
          <td>NAMA</td>
        </tr>
          <tr>
          <td>NIP</td>
          <td class="pl-5 pr-5">:</td>
          <td>NIP</td>
        </tr>
          <tr>
          <td>Jabatan</td>
          <td class="pl-5 pr-5">:</td>
          <td>JABATAN</td>
        </tr>
      </div>
        <br>
      <p>Menerapkan / memberikan dipensasi izin</p>
      <p>(tidak masuk kerja / tidak ikut apel pagi / tidak ikut apel siang / meninggalkan kantor)*</p>
      <p>Kepada : </p>

      <br />
      <div class="pl-4">
        <tr>
          <td>Nama</td>
          <td class="pl-5 pr-5">:</td>
          <td>NAMA</td>
        </tr>
          <tr>
          <td>NIP</td>
          <td class="pl-5 pr-5">:</td>
          <td>NIP</td>
        </tr>
          <tr>
          <td>Jabatan</td>
          <td class="pl-5 pr-5">:</td>
          <td>JABATAN</td>
        </tr>
          <tr>
          <td>Hari / Tanggal</td>
          <td class="pl-5 pr-5">:</td>
          <td>TANGGAL</td>
        </tr>
          <tr>
          <td>Untuk Keperluan</td>
          <td class="pl-5 pr-5">:</td>
          <td>KEPERLUAN</td>
        </tr>
      </div>
      <br>
      <p>Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
      </div>
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <!-- PERDATA -->
        <!-- <table style="margin-left:50px;">
          <tr  v-for="(item, index) in 10" :key="index+'item'">
            <td class="text-capitalize">{{key | nounderline}}</td>
            <td>&nbsp;:&nbsp;</td>
            <td class="px-3">{{item}}</td>
          </tr>
        </table> -->
      <div class="row">
        <div class="col-sm-6" v-for="(item, indexs) in pembatas" :key="indexs">
          <table style="margin-left:50px;">
            <tr  v-for="(item2, index) in datanya" :key="index+'item'" v-if="!less.includes(item2[0])">
              <td class="text-capitalize">{{item2[indexs] | nounderline}}
              </td>
              <td>&nbsp;:&nbsp;</td>
              <td class="px-3">{{$store.state.print2[0][item2[indexs]]}}</td>
            </tr>
          </table>
        </div>
      </div>
        <!-- BANYAK DATA -->
    
      <!-- TABLE END -->
      <!-- TABLE END -->
      <!-- TABLE END -->
      <br />
      <br />
      <!-- TTD -->
      <!-- TTD -->
      <!-- TTD -->
      <div class="float-right text-2xl" style="padding-right:70px;">
        <p>Paringin, {{format(new Date())}}</p>
        <p class="text-center">Atasan langsung</p>
        <br />
        <br />
        <br />

        <p class="text-2xl text-center" style="">NAMANYA</p>
        <p class="text-2xl text-center" style="">NIP</p>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      datanya:[],
      pembatas:1,
      less: ["UrutID","Gambar",'_id'],
      thnya: [],
      records: "",
      key: [],
      vdata:{
        jabatan:"Kepala Bagian",
        nama:"....................................."
      },
      listnya: [
        { Nama: "Taufik", Jabatan: "Programmer" },
        { Nama: "Akbar", Jabatan: "Desainer" },
        { Nama: "Maliki", Jabatan: "Web Master" },
        { Nama: "Kino", Jabatan: "Traveller" }
      ],
      ttd_unit_head: "",
      ttd_deputy: "",
      ttds1: "",
      ttds2: "",
      ttds3: "",
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala"
      }
    };
  },
 filters: {
  nounderline: function (value) {
    if(value){
      return value.replace('_',' ')
    }
  }
},
  methods: {
    getKeys() {
      let data = this.$store.state.print2[0];
      data = Object.keys(data);
      this.key = data;
    },
    ganti(e) {
      console.log(e);
      this.ttd.Nama = JSON.parse(e).Nama;
      this.ttd.Jabatan = JSON.parse(e).Jabatan;
      this.$forceUpdate();
    },
    print() {
      document.addEventListener(
        "deviceready",
        function () {
          // cordova.plugins.printer is now available
          cordova.plugins.printer.print();
        },
        false
      );
      window.print();
    },
    back() {
      this.$router.go(-1);
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    }
  },
  mounted() {
    let data = Object.keys(this.$store.state.print2[0]);
    if(data.length > 20){
      this.pembatas=2;
    }else if(data.length > 30){
      this.pembatas=3
    }
    this.less = this.$route.query.less.split(',')
    this.$forceUpdate()
    this.datanya = this.$_.chunk(data,this.pembatas);
    console.log(this.pembatas,this.datanya)
    setTimeout(() => {
      this.getKeys();
    }, 500);
  }
};
</script>
<style scoped>
.setting {
  padding: 10px;
  line-heigth: 1.5;
}
td {
  font-size: 19px;
  line-heigth: 1.5;
}
@page {
  size: auto; /* auto is the initial value */

  /* this affects the margin in the printer settings */
  /* margin: 2cm 2cm 3cm 3cm; */
  margin:10%;
}
@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .table-print {
        border: 1px solid black;
    }
}
body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
</style>