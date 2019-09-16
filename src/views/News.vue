<template>
  <div>
    <keytitle :kvTitle='kvTitle' :kvSubtitle='kvSubtitle'/>
    <div class="news main-wrap">

      <div class="column center">
        <div v-for="(item,idx) in news" class="news-box column">
          <img class="outerLink" :src="item.pic"/>
          <h2 class="news-title ft-bold">{{item.title}}</h2>
          <h4 class="date">
            <i class="far fa-calendar-alt"></i>{{item.date}}</h4>
          <p>{{item.detail}}</p>
          <button class="news-btn">SEE MORE</button>
        </div>
      </div>
      
      <div class="twi-box">
        <h3 class="twi-title">TWITTER FEED</h3>
          
          <a id="twi" class="twitter-timeline" 
          href="https://twitter.com/mateusasato?ref_src=twsrc%5Etfw" 
          data-tweet-limit="4"
          data-chrome="noheader nofooter"
          >Tweets by mateusasato</a>
          
        
      </div>
    </div>
  </div>
</template>

<script>
import keytitle from '@/components/keytitle.vue';

export default {
data(){
  return{
    kvTitle:'NEWS',
    kvSubtitle:'Stay tuned...',
    news:[],
    TW_API:'',
  }
},
provide(){
  return{
    kvImg:"background-image:url('/title/news.jpg')",    
  }
},
components:{
  keytitle,
},
mounted(){
  fetch('/newsData.json')
    .then(res=>res.json())
    .then(data=>this.news=data)
    .catch(err=>console.log('fetchNewDataErr',err));
  }
}
</script>

<style scoped>
.news{
padding:80px 0;
display:flex;
justify-content:center;
align-items:flex-start;
}
.news-box{
border-bottom:1px solid #f5f5f5;
width:860px;
padding:0 0 50px;
margin:0 0 50px;
}
img{
width:100%;
border-radius:5px;
}
.news-title{
margin-top: 40px;
font-size: 24px;
letter-spacing: 1px;
font-family:"Source Sans Pro",sans-serif;
color:#444;
}
.date{
font-size: 13px;
line-height: 14px;
margin: 10px 0 15px 0;
color: #999;
font-style: italic;
}
.news-btn{
width:125px;
transition: all .2s ease-in-out;
font-weight: 400;
letter-spacing: 2px;
font-size: 13px;
border: 2px solid #444;
background-color: transparent;
color: #333;
line-height: 36px;
cursor: pointer;
outline: none;
white-space: nowrap;
margin: 5px;
height: 40px;
text-decoration: none
}
.news-btn:hover{
background-color:#444;
color:#fff;
}
.twi-box{
width:240px;
margin-left:40px;
}
.twi-title{
font-size:15px;
letter-spacing:1px;
color:#444;
line-height: 1.5;
margin:0 0 30px;
font-family: 'Source Sans Pro', sans-serif;
}


@media screen and (max-width:1200px){
.news{
padding:80px 3%;
}
.news-box{
width:690px;
}
}
@media screen and (max-width:992px){
.news{
flex-direction:column;
align-items:center;
}
.news-box,.twi-box{
width:720px;
}
.twi-box{
margin:0;
}
}@media screen and (max-width:768px){
.news-box,.twi-box{
width:100%;
}
}
</style>