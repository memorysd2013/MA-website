<template>
  <div>
    <keytitle :kvTitle='kvTitle' :kvSubtitle='kvSubtitle'/>
    <div class="center column main-wrap">
      <div class="media column center">
        <h1 class="topic">PHOTOS</h1>
        <div class="album">
          <album/>
        </div>
        
        <h1 class="topic">VIEDOS</h1>
        <div class="yt flex-btw">
          <div v-for="(item,key,idx) in ytVideo" class="yt-box box">

            <iframe class="yt-video" :src="target[idx]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div class="text">
              <h2 class="title ft-bold">{{key}}</h2>
              <p class="detail">{{item}}</p>
            </div>
          </div>
        </div>

        <h1 class="topic">JAM TRACK CENTRAL</h1>
        <div class="jtc flex-btw">
          <div v-for="(item,idx) in mediaJtc" class="jtc-box box">
            <img class="jtc-pic outerLink" :src="item.pic"/>
            <div class="text">
              <h2 class="title ft-bold">{{item.title}}</h2>
              <p class="detail">{{item.detail}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import keytitle from '@/components/keytitle.vue';
import album from '@/components/album.vue';

export default {
data(){
  return{
    kvTitle:'MEDIA',
    kvSubtitle:'See photos and videos',
    mediaJtc:[],
    ytVideo:{
      'LET IT RING':'Testing Suhr Reactive Load',
      'B FLAT LOOP':'Suhr Antique',
      'SHOULD\'VE BEEN US SOLO':'Tori Kelly Tour',
      'EMPTY HANDS':'Original Song',
      'BREATH':'Acoustic improvisation',
      '70X7':'Original Song'},
    target:[
      'https://www.youtube.com/embed/YgcPgq5Y1Fs',
      'https://www.youtube.com/embed/ra3GH3jVkCI',
      'https://www.youtube.com/embed/JG3UproA74s',
      'https://www.youtube.com/embed/PEBqZBW_Reg',
      'https://www.youtube.com/embed/9kSk4sTSpj8',
      'https://www.youtube.com/embed/gr1T4kDaSjM'
    ]
  }
},
provide(){
  return{
    kvImg:"background-image:url('/title/media.jpg')",
  }
},
components:{
  keytitle,
  album,
},
created(){
  fetch('/mediaData.json')
    .then(res=>res.json())
    .then(data=>this.mediaJtc=data);
}
}
</script>

<style scoped>
.media{
background-color:#fff;
width:1140px;
padding:80px 15px;
}
.topic{
font-size:30px;
color:#444;
letter-spacing:3px;
margin-bottom:30px;
font-weight:300;
align-self:flex-start;
}
h2,p{
margin:0;
font-size:16px;
font-family:"Source Sans Pro",sans-serif;
text-align:center;
letter-spacing:1px;
}
.yt-video{
width:100%;
height:198px;
}
.jtc,.yt{
width:100%;
padding:0 15px;
display:flex;
flex-wrap:wrap;
align-items:flex-start;
}
.jtc-box{
width:48%;
}
.yt-box{
width:30%;
}
.jtc-pic{
width:100%;
}
.box{
border:1px solid #ccc;
border-radius:5px;
overflow:hidden;
margin-bottom:50px;
}
.text{
padding:25px;
}
.title{
color:#333;
margin-bottom:5px;
}
.detail{
font-weight:200;
}

@media screen and (max-width:1200px){
.media{
width:940px;
}
}@media screen and (max-width:992px){
.media{
width:720px;
}
}@media screen and (max-width:768px){
.media{
width:440px;
}
.jtc,.yt{
flex-direction:column;
}
.jtc-box,.yt-box{
width:100%;
}
}@media screen and (max-width:480px){
.media{
width:280px;
}
}
</style>