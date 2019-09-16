<template>
  <div class="about">
    <keytitle :kvTitle='kvTitle' :kvSubtitle='kvSubtitle'/>

    <div class="about-main">

      <div class="content">
        <section class="content-wrap">
          <h2>BIOGRAPHY</h2>
          <p>Mateus (Nogueira) Asato was born in December 29th of 1993, originally from Campo Grande, a very cozy medium-size town located in Brazil. His passion for music started when he was 9, after being influenced by one of his cousins who had learned how to play the guitar. In a musical-religious way, Mateus grew up in a Brazilian Baptist Church, which also gave him lots of inspiration to keep learning and increasing his musical knowledge. After taken 2 years of private guitar lessons, he became part of the worship team at his local church, a fact that he considers very important to his learning.</br></br>
          In September of 2010, Mateus at the age of 16 won for his first & only time a guitar contest. The national contest was called "Double Vision", and it had around 500 other guitar players participating.</p>
        </section>
      </div>

      <div class="pic-box flex-btw">

        <div class="pb-pic"></div>

        <div class="pb-text">
          <h2 style="margin:0 0 4px;font-weight:400;">DOUBLE VISION CONTEST</h2>
          <p style="margin:0;">Brazil, 2010</p>
        </div>

      </div>

      <section class="content-wrap" style="width:90%;margin:0 auto;">
        <p>Asato defines this contest as a very inspiring experience and a crucial factor to his professional's choice years later. In March of 2013, Mateus Asato made his toughest decision of life so far. He moved to Los Angeles with the purpose of studying music to achieve greater things in music. After two years living in California, Asato graduated from Musicians Institute in Hollywood with an award of "2014 Outstanding Guitar Player of Musicians Institute" and it's finally ready to share what he's been looking for in America.</p>
      </section>

      <div class="middle-kv">

        <div class="middle-text">
          <h2 class="middle-h2">OUTSTANDING GUITAR PLAYER OF MUSICIANS INSTITUTE</h2>
          <p class="middle-p">LOS ANGELES, 2014</p>
        </div>

        <div class="middle-kv-pic" :style="this.move"></div>
      </div>

      <section class="content-wrap" style="width:90%;text-align:center;padding:50px 5%;background-color:#f9f9f9;">
        <p>Mateus Asato has worked with great names in the music industry such as Adoração & Adoradores, Duranbah, Esteban, Israel Houghton, Jabin Chavez, Luan Santana, Mammoth, Storge2, Tiago Suguihara and currently tours with the American singer songwriter Tori Kelly.</p>
      </section>
      <!--自動輪播組件-->
      <brandlogo/>
    </div>
  </div>
</template>

<script>
import keytitle from '@/components/keytitle.vue';
import brandlogo from '@/components/brandlogo.vue';

export default {
data(){
  return{
    kvTitle:'ABOUT',
    kvSubtitle:'See more about Mateus and his career',
    tem:'',
  }
},
provide(){
  return{
    kvImg:"background-image:url('/title/about.jpg')",
  }
},
components:{
  keytitle,
  brandlogo,
},
computed:{
  move(){
  return `background-position:50% ${this.tem}px;`
},
},
methods:{
  scrollMove(){
    this.tem=Math.ceil((1400-window.scrollY)/5);
    //console.log(this.tem);
  }
},
create(){

},
mounted(){
  window.addEventListener("scroll", this.scrollMove);
},
beforeDestroy() {
  window.removeEventListener("scroll", this.scrollMove);
}

}
</script>

<style scoped>
.about{
position:relative;
width:100%;
}
.kv{
background-image:url('../assets/title/about.jpg');
}
.about-main{
width:100%;
background-color:#FFF;
}
.content{
padding:0 15px;
margin:0 7%;
background-color:#FFF;
}
.content-wrap{
padding: 50px 0;
font-family: 'Roboto', sans-serif;
color:#444;
}
h2{
font-size:30px;
font-weight:200;
letter-spacing:3px;
margin:0 0 30px;
}
p{
font-size:18px;
font-weight:lighter;
line-height:1.5;
letter-spacing:1px;
}
.pb-pic{
width:50%;
height:345px;
background:url('../assets/about/contest.jpg') center center / cover no-repeat;
}
.pb-text{
width:50%;
height:345px;
color:#444;
text-align:center;
padding:150px 0;
background-color:#f5f5f5;
box-sizing:border-box;
}
.middle-kv{
height:405px;
width:100%;
position:relative;
background-position:50% -45px;
background-color:rgba(0,0,0,0.7);
z-index:0;
}
.middle-kv-pic{
height:100%;
background-image:url('../assets/about/bg.jpg');
background-attachment: fixed;
}
.middle-text{
padding:150px 0;
position:absolute;
background:transparent;
color:#eEE;
text-align:center;
width:100%;
}
.middle-h2{
font-size:30px;
font-weight: 400;
letter-spacing: 3px;
}
.middle-p{
margin:30px 0 0;
font-size:20px;
color:#fff;
}

@media screen and (max-width:992px){
.pic-box{
flex-direction:column;
}
.pb-pic,.pb-text{
width:100%;
}
}
</style>