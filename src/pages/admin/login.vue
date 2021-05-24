<template>
  <div style="margin:0;padding:0;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="">
      <path
        fill="#000b76"
        fill-opacity="1"
        d="M0,224L0,192L102.9,192L102.9,288L205.7,288L205.7,224L308.6,224L308.6,128L411.4,128L411.4,224L514.3,224L514.3,288L617.1,288L617.1,96L720,96L720,288L822.9,288L822.9,288L925.7,288L925.7,256L1028.6,256L1028.6,96L1131.4,96L1131.4,320L1234.3,320L1234.3,256L1337.1,256L1337.1,32L1440,32L1440,0L1337.1,0L1337.1,0L1234.3,0L1234.3,0L1131.4,0L1131.4,0L1028.6,0L1028.6,0L925.7,0L925.7,0L822.9,0L822.9,0L720,0L720,0L617.1,0L617.1,0L514.3,0L514.3,0L411.4,0L411.4,0L308.6,0L308.6,0L205.7,0L205.7,0L102.9,0L102.9,0L0,0L0,0Z"
      />
    </svg>
    <div class="row justify-content-center" style="">
      <div class="col-md-8">
        <div class="card animate__animated animate__backInDown">
          <div class="card-header text-center">
            
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="loginAuth" class="font-times">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Username</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="text"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="vdata.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="vdata.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-12 text-center">
                  <button
                    type="submit"
                    class="btn btn-primary font-times"
                    style="background:#000B76;position:absolute;z-index:10000;"
                  >
                    <span class="typcn typcn-key"></span> Login
                  </button>
                </div>
              </div>
              <br />
              <!-- <p class="text-center font-times">Atau login menggunakan</p>
              <br />
              <div v-if="cordova">
                <div class="col-md-12" @click="cordovaGoogleAuth">
                  <a class="btn btn-lg btn-outline-secondary text-sm btn-block" href="#">
                    <img
                      class="float-left pt-1"
                      src="https://img.icons8.com/color/16/000000/google-logo.png"
                    />Login Dengan Google
                  </a>
                </div>
              </div>
              <div v-else>
                <div class="col-md-12" @click="googleAuth">
                  <a class="btn btn-lg btn-outline-secondary text-sm btn-block" href="#">
                    <img
                      class="float-left pt-1"
                      src="https://img.icons8.com/color/16/000000/google-logo.png"
                    />Login Dengan Google
                  </a>
                </div>
              </div> -->
            </form>
            <!-- <button type="button" @click="facebookAuth" class="btn btn-sm btn-outline-dark text-green btn-block  "><span class="typcn typcn-social-facebook-circular"></span> Facebook</button> -->
            <br />
            <!-- <p
              class="text-center font-times font-bold"
              @click="$router.push('/auth/register')"
            >Daftar</p> -->
          </div>
        </div>
      </div>
    </div>
    <br>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="">
      <path
        fill="#000b76"
        fill-opacity="1"
        d="M0,224L0,192L102.9,192L102.9,288L205.7,288L205.7,224L308.6,224L308.6,128L411.4,128L411.4,224L514.3,224L514.3,288L617.1,288L617.1,96L720,96L720,288L822.9,288L822.9,288L925.7,288L925.7,256L1028.6,256L1028.6,96L1131.4,96L1131.4,320L1234.3,320L1234.3,256L1337.1,256L1337.1,32L1440,32L1440,320L1337.1,320L1337.1,320L1234.3,320L1234.3,320L1131.4,320L1131.4,320L1028.6,320L1028.6,320L925.7,320L925.7,320L822.9,320L822.9,320L720,320L720,320L617.1,320L617.1,320L514.3,320L514.3,320L411.4,320L411.4,320L308.6,320L308.6,320L205.7,320L205.7,320L102.9,320L102.9,320L0,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      vdata: {
        email: "",
        password: "",
      },
      Oauth: false,
      cordova: false,
      error: null,
    };
  },
  methods: {
    loginAuth() {
       if(this.vdata.email=='admin'&&this.vdata.password=='balangan_smartcity'){
         localStorage.setItem('asdo229eh','89wen#2-9haisdQ(-qeuwhdiasd');
         this.$router.push('/admin')
       }else{
         alert('login salah');
       }
    },
  },
  mounted() {
   
  },
};
</script>