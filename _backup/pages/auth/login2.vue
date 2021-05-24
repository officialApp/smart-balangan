<template>
  <div class="" style="padding:0;margin:0;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown delay-1s " style="width:100%;">
      <path
        fill="#0099ff"
        style="width:100%;"
        fill-opacity="1"
        d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,128C840,117,960,171,1080,213.3C1200,256,1320,288,1380,304L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div class="row justify-content-center animate__animated animate__backInUp">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <div class="text-center mx-auto">
            <img src="@/static/logobtn.png" class="kinoLightBox img-fluid " style="height:30px;">
            </div>
          </div>
          <div class="card-body">
            <p class="text-center font-bold font-times">LOGIN</p>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="login">

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Username</label>

                <div class="col-md-6">
                  <input
                    id="text"
                    type="text"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="vdata.username"
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
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary"><span class="typcn typcn-key"></span> LOGIN</button>
                  <button type="button"  @click="test" class="btn btn-sm btn-outline-primary   waves-effect">tes</button>
                </div>
              </div>
              
            </form>
            <hr class="style13">
            <div class="text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,192C840,235,960,277,1080,261.3C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
  </div>
</template>


<script>
import firebase from "firebase";
let db = firebase.firestore();
import autophp from '@/plugins/autophp.js'
    let sdb = new autophp()
    
export default {
  data() {
    return {
      vdata: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  mounted() {
     sdb.collection().ceklogin(this.$store).then(res=>{
                this.$router.push('/admin')
              }).catch(err=>{
                this.$router.push('/auth/login2')
              })
  },
  methods: {
    test(){
      //doc adalah select *
      sdb.collection("tbuser").doc().get("*","order by id").then(res => {
          console.log(res);
      });
      
    },
    login(){
       sdb.collection("tbuser").login(this.vdata,this.$store,this.$router,'/admin').then(res=>{
        })
    },
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.vdata.email+'@gmail.com', this.vdata.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.vdata.name
            })
            .then(() => {
              let user = {
                uid: data.user.uid,
                displayName: data.user.displayName,
                email: data.user.email,
                emailVerified: data.user.emailVerified,
             changepassword:"true",
             changettd:"true",
            unit:{
              nama_unit:"BELUM ADA"
            }

              };
              db.collection("users")
                .doc(data.user.uid)
                .set(user, { merge: true })
                .then(res => {
                  console.log("Login Berhasil");
                  this.$router.push("/");
                });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>