<template>
  <div class="font-times">
    <!-- FORM -->
      
      <div class="row" v-if="show">
        <div class="offset-sm-2 col-sm-8">
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
     <div class="card">
        <div class="card-header">  <button type="button" @click="$router.push('/admin')" class="btn btn-sm btn-dark  mr-4"><img src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg" 
               class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt=""> Back</button> LIST APLIKASI</div>
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
              <td class='text-uppercase text-sm'>title</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="title"
                    id="nama_menu"
                    name="nama_menu"
                    class="form-control form-control-sm"
                    v-model="vdata.nama_menu"
                   
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>keterangan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                <textarea
                type="text"
                id="keterangan"
                name="keterangan"
                rows="2"
                placeholder="keterangan..."
                class="form-control md-textarea"
                v-model="vdata.keterangan"
                ></textarea>
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>gambar_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <input type="file" @input="upload" id="filenya">
                <div class="sm-form ">
                    <input type="text" id="gambar" name="gambar" class="form-control form-control-sm" placeholder="gambar" v-model="vdata.gambar" >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>link_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="link_"
                    id="link"
                    name="link"
                    class="form-control form-control-sm"
                    v-model="vdata.link"
                   
              
                  >
                </div>
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
            <thead class="mdb-color" :style="{background:'grey'}">
              <tr class="text-white" style="overflow:scroll;color:white;">
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
                    v-on:tap="ambil(item,index3);modal=true;aksi='update';show=true"
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
var id = require("date-fns/locale/id");
import axios from "axios";
            import imageCompression from "browser-image-compression";
import firebase from 'firebase'
import _ from 'lodash'
// let db = firebase.firestore()
import autophp from '~/plugins/autophp.js'
let sdb = new autophp()

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
      order:['id','nama_menu','keterangan','gambar','link'],
      vdata: {
        
      },
      ready: false,
      show: true,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      checkedItem:[],
      less: [,'_id','id'],
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
            let that = this;
            let el = document.querySelector("#filenya"); // berikan id pada input file
             const options = {
               maxSizeMB: 1,
              maxWidthOrHeight: 1920,
              useWebWorker: true
            }
            try {
              let file = el.files[0]; 
              let fd = new FormData();
              const compressedFile = await imageCompression(file, options);
              fd.append("file", compressedFile);
              fd.append('data', `select * from tbuser`)//database setting di server
              fd.append('secret', `dsdxxoi4#$(*#sdsaaada@#`)//database setting di server
              axios.post('https://upload.egov.balangankab.go.id/upload1.php', fd
             ).then(res => {
               console.log(res.data)
               that.vdata.gambar = "https://upload.egov.balangankab.go.id" + res.data;
               that.$$forceUpdate()
              })
            } catch (error) {
              console.log(error);
            }
          },
    insert(){
          delete this.vdata.id;
          let that = this
          sdb.collection('smartapp_aplikasi').doc().set(this.vdata).then(res=>{
              console.log(res)
            alert('simpan data berhasil!')
            that.refreshData()
          })
      },update(){
        let that = this
        sdb.collection('smartapp_aplikasi').doc().set(this.vdata).then(res=>{
              console.log(res)
              alert('update data berhasil!')
            that.refreshData()
          })
      },remove(){
          let that = this
          if(confirm('Apakah yakin menghapus data?')){
            sdb.collection("smartapp_aplikasi").doc(this.vdata.id).delete().then(res => {
                console.log(res);
              alert('delete data berhasil!')
            that.refreshData()
            });
          }
      },
       refreshData() {
         let that = this
         sdb.collection("smartapp_aplikasi").doc().select(`select * from smartapp_aplikasi`).then(arr => {
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
            arr.forEach((e,index)=>{
              that.order.forEach(e=>{
                obj[e]=arr[index][e]
              })
              hasil.push(obj)
              obj={}
            })
            this.datanya=hasil;
            let keys = this.order;
            keys = _.difference(keys, this.unless);
            this.thnya = keys;
          }, 1000);
         })
    },
      ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.updateOn = true;
      this.formOn = true;
      let clone = _.clone(item);
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
      let order = ['id','nama_menu','keterangan','gambar','link']
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
      keys = _.difference(keys, this.unless);
      return keys;
    },
    td() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? "asc" : "desc";
        data = _.orderBy(data, [this.orderBy], [ordernya]);
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
        kunci = _.difference(kunci, that.unless);
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
  },
  layout:"admin",
  mounted() {
    let that = this;
    this.refreshData();
  }
};</script>