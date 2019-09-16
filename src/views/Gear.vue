<template>
  <div>
    <keytitle :kvTitle='kvTitle' :kvSubtitle='kvSubtitle'/>

    <div class="gear main-wrap">
      

      <div class="center">
        <div class="column">
          <div class="btn-area">
            <button style="border-radius:5px 0 0 5px;" class="btn" @click="pickAll" autofocus>Show All</button>
            <button class="btn" @click="pickGt">Guitars</button>
            <button class="btn" @click="pickAmp">Amps</button>
            <button class="btn" @click="pickPd">Pedals</button>
            <button style="border-radius:0 5px 5px 0;" class="btn" @click="pickSw">Softwares</button>        
          </div>
        
          <div v-for="(gear,idx) in gearData" :class="gear.sort">
          
            <div class="gear-box flex-btw">
              <div>
                <img :src="gear.pic" class="gear-pic"/>
              </div>
              <div class="gear-info">
                <h3 class="ft-normal">{{gear.model}}</h3>
                <h4 class="ft-normal">{{gear.brand}}</h4>
                <p>{{gear.detail}}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="center column">
        <h2 class="pb-title">PEDALBOARD</h2>
        <div class="pb flex-btw">

          <div class="pb-box">
            <img class="pb-img outerLink" src="/gear/pb1.jpg"/>
            <h3 class="pb-subtitle">MAIN PEDALBOARD</h3>
          </div>
          <div class="pb-box">
            <img class="pb-img outerLink" src="/gear/pb2.jpg"/>
            <h3 class="pb-subtitle font-bold">OVER SEA'S PEDALBOARD</h3>
          </div>

        </div>
      </div> 
    </div>

  </div>
</template>

<script>
import keytitle from '@/components/keytitle.vue';

var map=Array.prototype.map;
var gt=document.getElementsByClassName('guitar');
var amp=document.getElementsByClassName('amp');
var pd=document.getElementsByClassName('pedal');
var sw=document.getElementsByClassName('software');

export default {
data(){
  return{
    kvTitle:'GEAR',
    kvSubtitle:'See everything that Mateus uses',
    gearData:[],
  }
},
provide(){
  return{
    kvImg:"background-image:url('/title/gear.jpg')",
  }
},
components:{
  keytitle,
},
computed:{
  ani(){
    return `transform:scale(${this.rate});
    transition:all 2s;`
  }
},
methods:{
  pickAll(){
    var arrayAll=[gt,amp,pd,sw];
    arrayAll.forEach(all=>{
      map.call(all,obj=>{
        obj.classList.remove('anime');
        obj.classList.remove('disappear');
      })
    });
  },
  pickGt(){
    this.pickAll();
    var arrayGt=[amp,pd,sw];
    arrayGt.forEach(g=>{
      map.call(g,obj=>{
        obj.classList.remove('anime');     
        setTimeout(function(){
          obj.classList.add('disappear');
        },300);
      });
    });
  },
  pickAmp(){
    this.pickAll();
    var arrayAmp=[gt,pd,sw];
    arrayAmp.forEach(function(a){
      map.call(a,obj=>{
        obj.classList.add('anime');
        setTimeout(function(){
          obj.classList.add('disappear');
        },300);
      });
    });
  },
  pickPd(){
    this.pickAll();
    var arrayPd=[amp,gt,sw];
    arrayPd.forEach(function(p){
      map.call(p,obj=>{
        obj.classList.add('anime');
        setTimeout(function(){
          obj.classList.add('disappear');
        },300);
      });
    });
  },
  pickSw(){
    this.pickAll();
    var arraySw=[amp,pd,gt];
    arraySw.forEach(function(s){
      map.call(s,obj=>{
        obj.classList.add('anime');
        setTimeout(function(){
          obj.classList.add('disappear');
        },300);
      });
    });
  }
},
mounted(){
  fetch('/gearData.json')
  .then(res=>res.json())
  .then(data=>this.gearData=data);
}
}
</script>

<style scoped>


.gear{
padding:80px 10%;
}
.btn-area{
margin-bottom:60px;
}
.btn{
font-size:13px;
color:#666;
padding:12px 18px;
background:#fff;
border:1px solid #ddd;
outline:none;
margin:0;
}
.btn:focus{
color:#fff;
background:#454545;
border:1px solid #454545;
font-weight:bold;
}
.gear-box{
padding:0 0 40px;
border-bottom: 1px solid #ddd;
margin:0 0 40px;
transition:all .5s ease;
}
.gear-pic{
margin:0 40px 0 0;
}
.gear-info{
width:380px;
padding:10px 0;
}
.gear-info>h3{
color:#444;
font-size:22px;
letter-spacing:3px;
line-height:1.5;
margin:0;
padding:0;
}
.gear-info>h4{
color:#888;
font-size:14px;
margin:6px 0 0;
padding:0;
}
.gear-info>p{
color:#555;
font-size:14px;
font-weight:300;
line-height:1.8;
margin:20px 0 25px;
padding:0;
}
.guitar,.amp,.pedal,.software{
transition:all .3s ease;
transform:scale(1);
opacity:1;
}
.anime{
transition:all .3s ease;
transform:scale(0);
opacity:.2;
}
.disappear{
display:none;
transition:all .3s ease;
}
.pb{
width:1140px;
}
.pb-box{
border:1px solid #ddd;
border-radius:5px;
}
.pb-title{
text-align:center;
font-size:30px;
margin-bottom:30px;
font-weight:200;
letter-spacing:3px;
color:#333;
}
.pb-img{
width:550px;
}
.pb-subtitle{
text-align:center;
font-size:14px;
margin:25px;
font-weight:900;
color:#444;
letter-spacing:1px;
}


@media screen and (max-width:1200px){
.gear-pic{
width:560px;
}
.pb{
width:960px;
}
.pb-img{
width:460px;
}
}@media screen and (max-width:992px){
.gear-box{
flex-direction:column;
align-items:center;
}
.gear-pic{
margin:0 0 40px 0;
}
.gear-info{
width:100%;
}
.pb{
flex-direction:column;
align-items:center;
width:560px;
}
.pb-img{
width:100%;
}
.pb-box{
margin-bottom:50px;
}
}@media screen and (max-width:667px){
.gear-pic,.pb-box,.pb{
width:300px;
}
}
</style>