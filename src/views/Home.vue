<template>
  <div >
  <div class="home" :style="this.move">
    <div class="home-title" :style="this.textOp">
      <h1 class="row1">Welcome</h1>
      <h2 class="row2">Official Mateus Asato Website</h2>
    </div>
  </div>
  </div>

</template>


<script>
// @ is an alias to /src
//<img class="index-pic" src="../assets/title/index.jpg"/>
//transform:'translateY(`${this.tem}px`)'

export default {
  name: 'home',
  data(){
    return{
      tem:'',
    }
  },
  computed:{
    opa(){
      return 1-(this.tem*0.002);
    },
    move(){
      return `transform:translateY(${this.tem}px);`
    },
    textOp(){
      return `opacity:${this.opa}`
    }
  },
  methods:{
    scrollTest(){
      this.tem=Math.ceil(window.scrollY/1.8);
    }
  },
  mounted(){
    window.addEventListener("scroll", this.scrollTest);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollTest);
  }
}
</script>

<style>
.home{
width:100%;
height:100vh;
background-image:url('../assets/title/index.jpg');
background-position:center;
background-attachment:local;
background-repeat:no-repeat;
background-size:cover;
position:relative;
}
.home-title{
text-align:center;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-40%);
}
.row1{
font-size:116px;
font-weight:bolder;
color:white;
letter-spacing:-1px;
}
.row2{
font-family:"Source Sans Pro",sans-serif;
font-size:40px;
font-weight:100;
color:#EEE;
letter-spacing:-2px;
}

@media screen and (max-width:768px){
.row1{
font-size:72px;
}
.row2{
font-size:40px;
letter-spacing:0px;
}
}@media screen and (max-width:480px){
.row1{
font-size:54px;
}
.row2{
font-size:24px;
letter-spacing:0.7px;
}
}
</style>
