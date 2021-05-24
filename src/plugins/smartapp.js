// import autophp from '@/plugins/autophp.js'
// let sdb = new autophp()
import imageCompression from "browser-image-compression";
import axios from 'axios'
import md5 from 'md5'
import CryptoJS from 'crypto-js'
let apitoken = "borneojs";
let auth = false; // pake auth atau tidak
let scrambles = true; //  laravel wajib selalu true
let backend = "php"; //php, firebase, laravel
let table = "";
let id = "";
let errCount = 0;
let url = true ? "https://upload.egov.balangankab.go.id" : `http://localhost:${backend!='laravel'?'/autos':'8000'}`;
let urlBASE = url + "/apis2.php";
let urlupload = url+'/upload1.php';
class autophp {
   collection(tables) {
    table = tables;
    return this;
  }
    doc(ids) {
    if (ids) {
      id = ids;
    }
    return this;
  }
  async set(vdata,auths) {
    let fd = new FormData();
    console.log('vdata', vdata)
    // vdata.scramble = scrambles
    let keys = Object.keys(vdata)
    keys.forEach(e => {
      console.log(typeof vdata[e])
      if (typeof vdata[e] == 'string') {
        vdata[e] = vdata[e].replace(/'/g, "\\'");
        vdata[e] = vdata[e].replace(/"/g, `\"`);
      }
    })
    // if (id != "") {
    //     vdata.id = id;
    // }
    if(auths){
      auth=auths
    }
    if (auth) {
      fd.append('header', localStorage.getItem('auth._token.local'))
      fd.append('key-h',localStorage.getItem('auth._token.local'));
    }
    // auth
    let setoken = await verifyEnc()
    fd.append("api-token", scramble(apitoken));
    fd.append('se-token',setoken);
    fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    // table
    fd.append("t-bl", scramble(table));
    fd.append("backend", scramble(backend));
    if (scrambles) {
      fd.append('scramble', scrambles);
      fd.append("data", scramble(JSON.stringify(vdata)));
    } else {
      fd.append("data", JSON.stringify(vdata));
    }
    // type
    fd.append("key-z-token", scramble("set"));
    fd.append("key", getKey(vdata));

    function getKey(data) {
      return Object.keys(data);
    }
    return await axios.post(backend!='laravel'?urlBASE:url+'/api/set/data', fd).then(res => {
      console.log(res);
      return res.data;
    }).catch(err => {
      console.log('table not found')
      errCount++;
      if (errCount < 2) {
        this.set(vdata)
      }
    })
  }
  async get(vdata, vdata2,auths) {
    let fd = new FormData();
    // vdata.scramble = scrambles
    // table
    fd.append("t-bl", scramble(table));
    fd.append("backend", scramble(backend));
    // auth
        let setoken = await verifyEnc()
    fd.append("api-token", scramble(apitoken));
    fd.append('se-token',setoken);
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    
    if(auths){
      auth=auths
    }
    if (auth) {
      fd.append('header', localStorage.getItem('auth._token.local'))
      fd.append('key-h',localStorage.getItem('auth._token.local'));
    }
    fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
    // select
    if (scrambles) {
      fd.append('scramble', scrambles);
      // SELECT
      fd.append("sd28(#092/sd", scramble(vdata));
      fd.append("23*(kdj", scramble(vdata2));
    } else {
      fd.append("sd28(#092/sd", vdata);
      fd.append("23*(kdj", vdata2);
    }
    if (id.length != "") {
      fd.append("id", `${id}`);
    }
    // type
    fd.append("key-z-token", scramble("get"));
    return await axios.post(backend!='laravel'?urlBASE:url+'/api/get/data', fd).then(res => {
      console.log(res);
      return res.data;
    }).catch(err => {
      console.log('table not found')
    })
  }
  async delete(auths,vdata) {
    let fd = new FormData();
    if (scrambles) {
      fd.append('scramble', scrambles);
    }
    if(auths){
      auth=auths
    }
    if (auth) {
      fd.append('header', localStorage.getItem('auth._token.local'))
      fd.append('key-h',localStorage.getItem('auth._token.local'));
    }
    // table
    fd.append("t-bl", scramble(table));
    // auth
        let setoken = await verifyEnc()
    fd.append("api-token", scramble(apitoken));
    fd.append('se-token',setoken);
    fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    fd.append("backend", scramble(backend));
    // auth
    fd.append("sd28(#092/sd", vdata);
    if (id.length != "") {
      fd.append("id", `${id}`);
    }
    // type
    fd.append("key-z-token", scramble("delete"));
    return await axios.post(backend!='laravel'?urlBASE:url+'/api/delete/data', fd).then(res => {
      console.log(res);
      return res.data;
    }).catch(err => {
      console.log('Data tidak ditemukan')
    })
  }
  async select(vdata,auths) {
    let fd = new FormData();
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
        let setoken = await verifyEnc()
    fd.append('se-token',setoken);
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    
    if(auths){
      auth=auths
    }
    if (auth) {
      fd.append('header', localStorage.getItem('auth._token.local'))
      fd.append('key-h',localStorage.getItem('auth._token.local'));
    }
    // table
    fd.append("t-bl", scramble(table));
    // auth
    fd.append("api-token", scramble(apitoken));
    fd.append('5e19fb19a0aa66a0', scramble(auth.toString()))
    fd.append("backend", scramble(backend));
    if (scrambles) {
      fd.append('scramble', scrambles);
      // SELECT
      fd.append("sd28(#092/sd", scramble(vdata));
    } else {
      fd.append("sd28(#092/sd", vdata);
    }
    if (id.length != "") {
      fd.append("id", `${id}`);
    }
    // type
    fd.append("key-z-token", scramble('select'));
    return await axios.post(backend!='laravel'?urlBASE:url+'/api/select/data', fd).then(res => {
      console.log(res);
      return res.data;
    }).catch(err => {
      console.log('table not found')
    })
  }
  async login(vdata, store, router, routes) {
    console.log(vdata)
    let fd = new FormData();
        let setoken = await verifyEnc()
    fd.append('se-token',setoken);
    fd.append("api-token", scramble(apitoken));
    fd.append("token-u", scramble(vdata.username));
    fd.append("token-p", scramble(md5(vdata.password)));
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    fd.append("backend", scramble(backend));
    // type
    fd.append("key-z-token", scramble('login'));
    return await axios
      .post(url + '/apis.php', fd)
      .then(res => {
        console.log('data login', res)
        localStorage.setItem("auth._token.local", res.data.token);
        localStorage.setItem("auth.local", res.data.token);
        let fd2 = new FormData();
        fd2.append("api-token", scramble(apitoken));
        fd2.append('se-token',setoken);
        fd2.append('key-h',localStorage.getItem("auth._token.local"));
        fd2.append("key-z-token", scramble('getuser'));
        axios
          .post(url + '/apis.php', fd2, {
            headers: {
              Authorization: localStorage.getItem("auth._token.local")
            }
          })
          .then(res => {
            console.log('changeuser', res);
            this.Oauth = true
            if(store){
              store.commit("changeUsers", res.data);
            }
            localStorage.setItem("users", JSON.stringify(res.data));
            if(router){
              router.push(routes)
            }
          });
      })
      .catch(err => {
        alert("username salah");
      });
  }
  async login2(vdata,store,router,routes){
    let fd = new FormData();
    let setoken = await verifyEnc()
    fd.append('se-token',setoken);
    fd.append("api-token", scramble(apitoken));
    fd.append('token-u',scramble(vdata.username));
    fd.append('token-p',scramble(vdata.password));
    // return await axios.post(url+'/auth/login.php',fd).then(res=>{
      return await axios.post(backend!='laravel'?url + '/auth/login.php':url+'/api/login/data',fd).then(res=>{
      console.log('data login', res)
      localStorage.setItem("auth._token.local", res.data.token);
      localStorage.setItem("auth.local", res.data.token);
      let fd2 = new FormData();
      fd2.append("api-token", scramble(apitoken));
      fd2.append('se-token',setoken);
      fd2.append('key-h',localStorage.getItem("auth._token.local"));
      fd2.append("key-z-token", scramble('getuser'));
      // axios.post(url + '/apis.php', fd2, {
        axios.post(backend!='laravel'?url + '/apis.php':url+'/api/getuser/data', fd2, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log('changeuser', res);
          this.Oauth = true
          if(store){
            store.commit("changeUsers", res.data);
          }
          localStorage.setItem("users", JSON.stringify(res.data));
          if(routes){
            if(router){
              router.push(routes)
            }
          }else{

          }
        });
    })
  }
  async register(vdata){
    let fd = new FormData();
        let setoken = await verifyEnc()
    fd.append('se-token',setoken);
    // fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    fd.append("api-token", scramble(apitoken));
    fd.append('token-u',scramble(vdata.username));
    fd.append('token-p',scramble(vdata.password));
    // return await axios.post(url+'/auth/register.php',fd).then(res=>{
      return await axios.post(backend!='laravel'?url + '/auth/register.php':url+'/api/register/data',fd).then(res=>{
      return res.data
    })
  }
  async ceklogin(store, router) { // CEK LOGIN BACKEND PHP
    let fd2 = new FormData();
    let setoken = await verifyEnc()
    fd2.append("api-token", scramble(apitoken));
    fd2.append('se-token',setoken);
    fd2.append("backend", scramble(backend));
    fd2.append("key-z-token", scramble('getuser'));
    fd2.append('key-h',localStorage.getItem("auth._token.local"));
      // return await axios.post(url + "/apis.php", fd2, {
        return await axios.post(backend!='laravel'?url + '/apis.php':url+'/api/getuser/data', fd2, {
        headers: {
          Authorization: localStorage.getItem("auth._token.local")
        }
      })
      .then(res => {
        console.log(res)
        // if(res.data.indexOf('error')!=-1){
        //   router.push('/')
        // }else{
      if(typeof res.data=='object'){
            if(store){
              store.commit("changeUsers", res.data);
            }
            localStorage.setItem("users", JSON.stringify(res.data));
            return res
        } else {
          throw Error;
        }

        // }
      }).catch(err => {
        // alert('y')
        throw Error;
      })
  }
  async getuser(store) {
    let fd2 = new FormData();
        let setoken = await verifyEnc()
    fd2.append('se-token',setoken);
    // fd2.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia" + "cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
    // fd2.append('Authorization', '"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
    fd2.append("api-token", scramble(apitoken));
    fd2.append("backend", scramble(backend));
    fd2.append("key-z-token", scramble('getuser'));
    fd2.append('key-h',localStorage.getItem("auth._token.local"))
    return await axios
      .post(backend!='laravel'?url + '/apis.php':url+'/api/getuser/data', fd2, {
        headers: {
          Authorization: localStorage.getItem("auth._token.local")
        }
      })
      .then(res => {
        console.log(res);
        if(store){
          store.commit("changeUsers", res.data[0]);
        }
        localStorage.setItem("users", JSON.stringify(res.data[0]));
        return res.data[0]
      });
  }
  async upload(file) {
    let that = this;
    let el = file; // berikan id pada input file
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      let file = el.files[0];
      let fd = new FormData();
      const compressedFile = await imageCompression(file, options);
      let setoken = await verifyEnc()
      fd.append("api-token", scramble(apitoken));
      fd.append('se-token',setoken);
      fd.append("file", compressedFile);
      fd.append('data', `select * from tbuser`) //database setting di server
      fd.append('secret', `dsdxxoi4#$(*#sdsaaada@#`) //database setting di server
      if (auth) {
        fd.append('header', localStorage.getItem('auth._token.local'))
        fd.append('key-h',localStorage.getItem('auth._token.local'));
      }
      // return await axios.post(urlupload, fd).then(res => {
      return await axios.post(backend!='laravel'?urlupload:url+'/api/upload/data', fd).then(res => {
        let urlnya = backend != 'laravel' ? url+res.data : url+'/storage/'+res.data
        return urlnya
        //  console.log(res.data)
        // "https://upload.egov.balangankab.go.id" + res.data;
      })
    } catch (error) {
      console.log(error);
    }
  }
}

async function verifyEnc(){
   // authentication dengan encryption
   var CryptoJSAesJson = {
    stringify: function (cipherParams) {
        var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
    },
    parse: function (jsonStr) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
        return cipherParams;
    }
  }
  // let sec = await axios.post(url+'/auth/108starsofdestiny.php',fd)
  
  let sec = await axios.post(backend!='laravel'?url+'/auth/108starsofdestiny.php':url+'/api/get/jam',fd)
  let fd = new FormData()
  var encrypted = CryptoJS.AES.encrypt(JSON.stringify(apitoken), sec.data.toString(), {format: CryptoJSAesJson}).toString();
  return encrypted
}

function scramble(teks) {
  let char = "";
  let hasil = "";
  for (var i = 0; i < teks.length; i++) {
    char = "";
    char = teks.charAt(i);
    if (char == "a") {
      char = char.replace("a", "x");
    } else if (char == "b") {
      char = char.replace("b", "v");
    } else if (char == "c") {
      char = char.replace("c", "u");
    } else if (char == "d") {
      char = char.replace("d", "w");
    } else if (char == "e") {
      char = char.replace("e", "y");
    } else if (char == "f") {
      char = char.replace("f", "z");
    } else if (char == "g") {
      char = char.replace("g", "t");
    } else if (char == "h") {
      char = char.replace("h", "s");
    } else if (char == "i") {
      char = char.replace("i", "r");
    } else if (char == "j") {
      char = char.replace("j", "q");
    } else if (char == "k") {
      char = char.replace("k", "p");
    } else if (char == "l") {
      char = char.replace("l", "o");
    } else if (char == "m") {
      char = char.replace("m", "n");
    } else if (char == "z") {
      char = char.replace("z", "f");
    } else if (char == "y") {
      char = char.replace("y", "e");
    } else if (char == "x") {
      char = char.replace("x", "a");
    } else if (char == "w") {
      char = char.replace("w", "d");
    } else if (char == "v") {
      char = char.replace("v", "b");
    } else if (char == "u") {
      char = char.replace("u", "c");
    } else if (char == "t") {
      char = char.replace("t", "g");
    } else if (char == "s") {
      char = char.replace("s", "h");
    } else if (char == "r") {
      char = char.replace("r", "i");
    } else if (char == "q") {
      char = char.replace("q", "j");
    } else if (char == "p") {
      char = char.replace("p", "k");
    } else if (char == "o") {
      char = char.replace("o", "l");
    } else if (char == "n") {
      char = char.replace("n", "m");
    } else if (char == "1") {
      char = char.replace("1", "0");
    } else if (char == "2") {
      char = char.replace("2", "8");
    } else if (char == "3") {
      char = char.replace("3", "9");
    } else if (char == "4") {
      char = char.replace("4", "7");
    } else if (char == "5") {
      char = char.replace("5", "6");
    } else if (char == "0") {
      char = char.replace("0", "1");
    } else if (char == "8") {
      char = char.replace("8", "2");
    } else if (char == "9") {
      char = char.replace("9", "3");
    } else if (char == "7") {
      char = char.replace("7", "4");
    } else if (char == "6") {
      char = char.replace("6", "5");
    } else if (char == " ") {
      char = char.replace(" ", "_");
    } else if (char == "_") {
      char = char.replace("_", " ");
    } else if (char == "*") {
      char = char.replace("*", "/");
    } else if (char == "/") {
      char = char.replace("/", "*");
    } else if (char == ",") {
      char = char.replace(",", "^");
    } else if (char == "^") {
      char = char.replace("^", ",");
    }
    hasil = hasil + char;
  }
  return hasil;
}

export default autophp