
<template>
<div id="admin">
    <div class="p-2 anim left shadow-2xl"  :style="menu?'width: 250px;z-index:1000;background:white;':'width: 50px;margin-left:-80px;'">
        <div class=" rounded-lg">
            <div class="text-center p-3 bg-dark text-white rounded-lg shadow-lg">
            <img src="https://upload.egov.balangankab.go.id/svg/user.svg" 
                            class="d-inline img-circle" style="height:50px;width:40px;filter: brightness(0) invert(1);" alt="">
                <div v-if="menu">
                    <hr class="style2 m-0">
                    <p class="text-white text-center">ADMIN</p>
                </div>
            </div>  

            <div class="dropdown mt-1 d-block text-sm" @click="$router.push('/admin')">
                <button type="button" class="btn btn-sm bg-dark text-white btn-block dropbtn">
                    <span v-if="menu">
                        DASHBOARD
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/cog.svg" 
                            class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:230px;">
                </div>
            </div>

        </div>
    </div> 
     <div class="anim right shadow-lg bg-dark p-2 float-right">
    <button type="button" class="btn btn-sm btn-outline-danger  " @click="logout">
        <img src="https://upload.egov.balangankab.go.id/svg/power.svg" 
             class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
    </button>
    </div>
    <div class="anim right shadow-lg bg-dark p-2">
    <button type="button" class="btn btn-sm btn-outline-danger  " @click="menu=!menu">
        <img src="https://upload.egov.balangankab.go.id/svg/th-menu.svg" 
             class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt="">
    </button>
    </div>
    <div style="min-height:50vh;width:100vw;" @click="menu=false">
            <router-view></router-view>
    </div>
    

</div>
    
</template>
<script >
export default{
    data(){
        return{
            menu:false
        }
    },
    methods: {
        logout(){
            localStorage.setItem('asdo229eh','false');
            this.$router.push('/admin/login')
        }
    },
    mounted() {
        if(localStorage.getItem('asdo229eh')=='89wen#2-9haisdQ(-qeuwhdiasd'){

        }else{
            this.$router.push('/admin/login')
        }
    },
}
</script>
<style>
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 5px;
  padding-left: 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.right {
    overflow: hidden;
    min-height: 50px;
}
.left {
    float: left;
    
    min-height: 100vh;
}

.anim{
    transition:all 0.4s ease-in-out ;
}

</style>
