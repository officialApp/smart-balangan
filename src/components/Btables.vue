<template>
<!-- "buefy": "^0.9.2", -->
<!-- panggil dengan <Btables :tables="'test'" :hide="['']" @selected="ambil" /> dimana test adalah nama table, ganti autophp didalalmnya -->
    <section v-if="ready">
      <div v-if="selected">
        <!-- FORM -->
      </div>
      <div style="overflow:scroll;padding:10px;" class="scrollbarnya">
            <div class="sm-form float-right">
                <input type="text" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
          </div>
            <select class='form-control' style="width:20vw;" v-model="perPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="1000">semua</option>
            </select>
            <!-- b-table -->
        <b-table
            :data="td"
            :sticky-header="false"
            :selected.sync="selected"
            :per-page="perPage" :bordered="true" :striped="true" :narrowed="true" :hoverable="true" :mobile-cards="false" :paginated="true" :sort-icon="'arrow-up'" :sort-icon-size="'is-small'" :pagination-simple="false" :default-sort-direction="'asc'" :pagination-rounded="true" default-sort="id"
            >
            <b-table-column 
            :visible="!hide.includes(item.field)"
            :searchable="['nama field buat search'].includes(item.field)"
            v-for="(item, index) in keys" :key="index+'keys'"
            :field="item.field" :label="item.label" sortable  v-slot="props" >
            <span class="text-sm" >
                {{ props.row[item.field] }}
            </span>
            </b-table-column>
        </b-table>
      </div>
    </section>
</template>

<script>
import autophp from '@/plugins/autophp.js'
let sdb = new autophp()
    export default {
      props:['tables','hide'],
        data() {
            return {
                ready:false,
                datanya:[],
                keys:[],
                perPage:5,
                search:"",
                selected:false,
            }
        },
        watch:{
          selected(){
            this.$emit('selected',JSON.parse(JSON.stringify(this.selected)))
          }
        },
        methods: {
         async getData(){
            let that =this
            if(this.tables){

              let data = await sdb.collection(this.tables).doc().get("*","order by id")
              that.datanya = data
              that.keys = Object.keys(data[0])
              that.keys = that.keys.map(e=>{
                return {
                  field:e,
                  label:e.toUpperCase()
                }
              })
              this.ready = true
              this.$forceUpdate()
            }
            this.$forceUpdate()
          }
        },
       async mounted() {
         let that=this
         this.$nuxt.$on('getData',function(){
           that.getData()
         });
         this.getData()
          setTimeout(() => {
            this.$el.querySelectorAll('th').forEach(e=>{
              e.style.background = 'black';
              e.style.color = "white";
            })
          }, 2000);
        },
         computed:{
          td(){
            let data = this.datanya
            //! search fungsi
            let keys = Object.keys(data[0]);
            let that=this
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
            return data
          }
        },  
    }
</script>
<style >
.is-sticky-column-one {
    background: #23d160 !important;
    color: white !important;
}
.is-sticky-column-two {
    background: #167df0 !important;
    color: white !important;
}
.scrollbarnya::-webkit-scrollbar {
  width: 8px;
  height:10px;
}

/* Track */
.scrollbarnya::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.scrollbarnya::-webkit-scrollbar-thumb {
  cursor: grab;
  background: black; 
  border-radius: 10px;
}

/* Handle on hover */
.scrollbarnya::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>