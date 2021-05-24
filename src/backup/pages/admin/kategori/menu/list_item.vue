<template>
  <div class="font-times">
    <!-- FORM -->
      
      <div class="tips float-right">
          <button type="button" @click="print1" v-show="pilih.name!='taufik'" class="btn btn-sm btn-outline-danger">
            <span class="typcn typcn-document-text"></span>
          </button>
          <span class="tipstextB">Print Satu</span>
      </div>
      <div class="row" v-if="show">
        <div class="offset-sm-2 col-sm-8">
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
     <div class="card">
        <div class="card-header">list_item</div>
        <div class="card-body">
      <!-- FORM --> 
          <tr>
              <td class='text-uppercase text-sm'>id_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_"
                    id="id"
                    name="id"
                    class="form-control form-control-sm"
                    v-model="vdata.id"
                    disabled
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>Nama Tempat</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nama_tempat_"
                    id="nama_tempat"
                    name="nama_tempat"
                    class="form-control form-control-sm"
                    v-model="vdata.nama_tempat"
                    required
              
                  >
                </div>
              </td>
            </tr>
            
          <tr>
              <td class='text-uppercase text-sm'>Koordinat</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="ex : -2.350631, 115.468547"
                    id="koordinat"
                    name="koordinat"
                    class="form-control form-control-sm"
                    v-model="vdata.koordinat"
                    required
              
                  >
                </div>
              </td>
            </tr>
              <tr>
              <td class='text-uppercase text-sm'>Iframe src</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="ex : https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.4610688071393!2d115.46635831446433!3d-2.3506256383754627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6abc18b1c4129901!2sTaman%20Hijau%20Balangan!5e0!3m2!1sid!2sid!4v1617929275804!5m2!1sid!2sid"
                    id="map"
                    name="map"
                    class="form-control form-control-sm"
                    v-model="vdata.map"
                    required
              
                  >
                </div>
              </td>
            </tr>
            
          <tr>
              <td class='text-uppercase text-sm'>Gambar</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                  <input type="file" id="filenya">
                  <button type="button" @click="upload" class="btn btn-sm btn-danger  ">Upload</button>
                  <img v-if="vdata.gambar" :src="vdata.gambar" alt="">
              </td>
            </tr>
                      <tr>
              <td class='text-uppercase text-sm'>Keterangan Tempat</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                 <wysiwyg v-model='vdata.deskripsi' :options="{image: {  uploadURL: 'https://upload.egov.balangankab.go.id/upload4.php',  dropzoneOptions: {}}}"/>
              </td>
            </tr>

        <tr>
            <td class='text-uppercase text-sm'>Kategori Menu</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
              <select class='form-control' v-model="vdata.id_menu">
              <option v-for="(item, index) in kategoris" :value="item.id" :key="index">{{item.nama_menu}}</option>
              </select>
              </td>
            </tr>
            <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <div class="text-center">
      <button
        type="submit"
        v-show="aksi=='insert'"
        class="btn btn-sm btn-outline-primary ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> {{aksi == 'insert' ? 'insert' : aksi == 'update' ? 'update' : 'remove'}}</button>
        <button
        type="submit"
        v-show="aksi!='insert'"
        @click="aksi='update'"
        class="btn btn-sm btn-outline-success ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> Update</button>
        <button
        type="submit"
        v-show="aksi!='insert'"
        @click="aksi='remove'"
        class="btn btn-sm btn-outline-danger ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> Delete</button>
      </div>
        </div>
            </div>
      <!-- SUBMIT -->
    </form>
     <hr class="style13" />
      </div>
      </div>
          <hr class="style16">

    
     <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
     <button type="button" class="btn btn-sm text-white bg-dark mr-2"
    v-if="!ready"
     @click="show=!show" style="width:40px;height:30px;"><span class="typcn typcn-arrow-maximise"></span></button>
    <div style="overflow-x:auto;width:100%;" v-if="ready">
      <!-- MODAL -->
      <!-- ======================================================= -->
      <!-- DATATABLE MULAI DISINI -->
      <!-- SEARCH INPUT -->
      <div class="container-fluid">
        <div class="row p-2">
          <div class="col-sm-4 text-center">
           <button type="button" class="btn btn-sm text-white bg-dark mr-2" @click="show=!show" style="width:40px;height:30px;"><span class="typcn typcn-arrow-maximise"></span></button>
        <button type="button" @click="aksi='insert';clearInput();show=true" class="text-uppercase font-times btn btn-sm btn-success"><span class="typcn typcn-plus"></span>Tambah</button> &nbsp;
          </div>
          <div class="col-sm-4 row">
            <!-- SELECTION  -->
            <div class="col-6">
            <select
              class="form-control"
              style="width: 80px; height: 30px; font-size: 12px"
              v-model="selected"
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
              <option :value="1000000">Semua</option>
            </select>
            </div>
            <!-- SELECTION -->
            <div class="col-3">
            </div>
            <div class="col-3">
              <div class="tips">
                <button
                  type="button"
                  @click="print2"
                  class="btn btn-sm btn-outline-danger"
                >
                  <span class="typcn typcn-document-text"></span>
                </button>
                <span class="tipstextB">Print Laporan</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <!-- SEARCH -->
            <div class="sm-form ">
                <input type="text" id="search" name="search" class="form-control form-control-sm" placeholder="Cari data ..." v-model="search" >
            </div>
            <!-- SEARCH -->
          </div>
        </div>
      </div>
      <!-- TABLE -->
      <div
        class="table-responsive-sm font-times p-3"
        style="box-shadow:1px 4px 6px black;overflow:scroll;"
        v-dragscroll
      >
        <template>
          <!-- DEKSTOP -->
          <table
            class="table-print table-sm table-bordered table-striped table-hover table-print border-black"
            style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color" :style="{background:thbackground}">
              <tr class="text-dark" style="overflow:scroll;color:white;">
                 <th class :style="{color:thcolor}">#</th>
                 
                <th
                  scope="col"
                  class="th-print cursor-pointer uppercase"
                  style="font-size:21px;"
                  @click="sort(item)"
                  v-for="(item, index) in thnya"
                  :key="index+'th'"
                  v-show="!less.includes(item)"
                >
                  <span :style="{color:thcolor}" style="font-size:13px;">
                    {{item}}
                    <template v-if="orderWith">
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-down"></span>
                      </span>
                    </template>
                    <template v-else>
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-up"></span>
                      </span>
                    </template>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index3) in td" :key="index3+'td'">
                 
                <td>{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true;aksi='update';show=true;"
                    class="cursor-pointer"
                   
                    v-for="(item2, indexs) in thnya"
                    :key="indexs+'th2'"
                    v-html="item[item2]"
                    v-show="!less.includes(item2)"
                  ></v-touch>
                   <!-- item[item2].split('-').length>2 && item[item2].indexOf('20')!=-1 ? format(item[item2]):item[item2]  -->
                </no-ssr>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- FUNGSI DIBAWAH TABEL SEPERTI PAGINATION -->
        <div class="float-right">
          <template v-if="datanya.length>=selected">
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-outline-info roundec-circle"
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-info roundec-circle"
            >Next</button>
          </template>
          <template v-else>
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Next</button>
          </template>
        </div>
                 
       
      </div>
    </div>
    <div v-else>
      <p class="text-center">Loading Table ...</p>
    </div>
  </div>
</template>
<script>
        import imageCompression from "browser-image-compression";
var id = require("date-fns/locale/id");
import axios from "axios";
import firebase from 'firebase'
// let db = firebase.firestore()
import autophp from '@/plugins/autophp'
let db = new autophp()
export default {
  components: {
  },
  data() {
    return {
      // style
      thbackground: "initial",
      thcolor: "asd",
      // valdatable
      datanya: [],
      kategoris: [],
      order:['id','nama_tempat','koordinat','gambar','deskripsi','id_menu'],
      vdata: {
        
      },
      ready: false,
      show: false,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      checkedItem:[],
      less: [,'_id'],
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      orderBy: "",
      orderWith: true,
      //form
      aksi: "insert",
      formOn: false,
      updateOn: false
    };
  },
  methods: {
      async upload(){
        let file = document.querySelector("#filenya"); // berikan id pada input file
        let that=this
              db.collection('tbuser').upload(file).then(res=>{
                  console.log(res)
                  that.vdata.gambar =  res 
                  that.$forceUpdate()
              })
    },
    insert(){
          delete this.vdata.id;
          let that = this
          db.collection(`list_item`).doc().set(this.vdata).then(res=>{
              console.log('berhasil')
              alert('simpan data berhasil!')
              that.refreshData()
          })
      },update(){
        let that =this
        //idnya di vdata
          db.collection(`list_item`).doc().set(this.vdata).then(res=>{
              alert('update data berhasil!')
              that.refreshData()
          })
      },remove(){
        let that = this
          if(confirm('Apakah yakin menghapus data?')){
              db.collection(`list_item`).doc(this.vdata.id).delete().then(res=>{
              alert('delete data berhasil!')
              that.refreshData()
              })
          }
      },
       refreshData() {
         let that = this
         db.collection(`list_item`).doc().get('*','').then(res=>{
          setTimeout(() => {
            (function() {
              var thElm;
              var startOffset;
              Array.prototype.forEach.call(
                document.querySelectorAll("table th"),
                function(th) {
                  th.style.position = "relative";
                  var grip = document.createElement("div");
                  grip.innerHTML = "&nbsp;";
                  grip.style.top = 0;
                  grip.style.right = 0;
                  grip.style.bottom = 0;
                  grip.style.width = "5px";
                  grip.style.position = "absolute";
                  grip.style.cursor = "col-resize";
                  grip.addEventListener("mousedown", function(e) {
                    thElm = th;
                    startOffset = th.offsetWidth - e.pageX;
                  });
                  th.appendChild(grip);
                }
              );
              document.addEventListener("mousemove", function(e) {
                if (thElm) {
                  thElm.style.width = startOffset + e.pageX + "px";
                }
              });
              document.addEventListener("mouseup", function() {
                thElm = undefined;
              });
            })();
            let hasil=[]
            let obj={}
            res.forEach((e,index)=>{
              that.order.forEach(e=>{
                obj[e]=res[index][e]
              })
              hasil.push(obj)
              obj={}
            })
            that.datanya=hasil;
            let keys = that.order;
            keys = that.$_.difference(keys, that.unless);
            that.thnya = keys;
          }, 1000);
         })
    },
      ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.updateOn = true;
      this.formOn = true;
      let clone = this.$_.clone(item);
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      console.log(clone);
      this.vdata = clone;
      this.pilih = item;
    },
     clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
    
    //!==================
    //! hapus dari sini
    //! =================
    checkedAll() {
      console.log(this.checkedItem);
    },
     susun(datas){
      let that=this
      let data = datas;
      let order = ['id','nama_menu']
      let hasil=[]
      let obj={}
      data.forEach((e,index)=>{
        order.forEach(e=>{
          obj[e]=data[index][e]
        })
        hasil.push(obj)
        obj={}
      })
      return hasil
    },
    print1() {
      this.$router.push(`/laporan/perdata?less=${this.less.toString()}`);
      this.$store.state.print2=[]
      this.$store.state.print2.push(this.pilih)
      this.$store.state.print2  = this.susun(this.$store.state.print2)
      alert("print satu");
    },
    print2() {
      this.$router.push(`/laporan/print?less=${this.less.toString()}`);
      let that=this
       this.$store.state.print2 = this.susun(this.td)
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.Gambars = hasil
      this.$forceUpdate()
    },
    isDate(value) {
      var dateFormat;
      if (toString.call(value) === "[object Date]") {
        return true;
      }
      if (typeof value.replace === "function") {
        value.replace(/^s+|s+$/gm, "");
      }
      dateFormat = /(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/;
      return dateFormat.test(value);
    },
    // MODAL
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    },
    // DATATABLE
   pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > (this.bagi+1)) {
        this.pagination = Math.round(this.bagi);
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    sort(item) {
      this.orderBy = item;
      this.orderWith = !this.orderWith;
    },
    //!==================
    //! hapus sampai sini
    //! =================
  },props: {
    unless: {
      type: Array,
      required: false,
      default: () => ["gone"]
    },
    date: {
      type: Array,
      required: false,
      default: () => ["ditanyakan"]
    }
  },
  watch: {
    datanya() {
      if (this.datanya.length > 0) {
        this.ready = true;
      }
    },
    selected() {
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    search() {
      this.pagination = 1;
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    }
  }, computed: {
    // DATATABLE
    bagi() {
      let data = this.datanya;
      data = data.length / 10;
      console.log(data);
      return data;
    },
    th() {
      let data = this.datanya;
      let keys = Object.keys(data[0]);
      keys = this.$_.difference(keys, this.unless);
      return keys;
    },
    td() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? "asc" : "desc";
        data = this.$_.orderBy(data, [this.orderBy], [ordernya]);
      }
      //! search fungsi
      let keys = this.thnya;
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true;
              }
            } else {
            }
          }
        });
        if (hasil) return v;
      });
        //! cari shortcut contoh
      // data = data.filter((v, i, a) => {
      //   let hasil = false;
      //   console.log(v.id_kelas==that.carikelas)
      //     if(v['id_kelas']==this.carikelas){
      //       return v
      //     }else if(this.carikelas==''){
      //       return v
      //     }
      // });
      data = data.map(e => {
        let obj = {};
        let kunci = Object.keys(e);
        kunci = that.$_.difference(kunci, that.unless);
        kunci.forEach((a, index) => {
          if (kunci.find(e => e == that.date[index])) {
          } else {
            // obj[a] = 'tanggal'
          }

          obj[a] = e[a];
          // typeof e[a] != "string"
          //   ? e[a]
          //   : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
          //   ? that.isDate(e[a])
          //     ? that.format(e[a])
          //     : e[a]
          //   : e[a];
        });
        return obj;
      });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },mounted() {
      let that = this;
      db.collection("menu_kategori").doc().get("*","order by id").then(res => {
          that.kategoris=res
          that.$forceUpdate()
      });
      
      
    this.refreshData();
    
  }
};</script>