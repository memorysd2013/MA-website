<template>
  <div>
    <keytitle :kvTitle='kvTitle' :kvSubtitle='kvSubtitle'/>

    <div class="contact center column main-wrap">
      <form>
        <input style="grid-area:na" placeholder="Name">
        </input>
        <input style="grid-area:em" placeholder="Email Address">
        </input>
        <input style="grid-area:ph" placeholder="Phone">
        </input>
        <input style="grid-area:su" placeholder="Subject">
        </input>
        <textarea style="grid-area:yo" placeholder="Your Message">
        </textarea>
      </form>
      <div class="center column">
        <button>SEND MESSAGE</button>
        <span class="ps">We'll do out best to get back to you within 6-8 working hours.</span>
      </div>
    </div>

    <div class="gray-box center">
      <span class="email">contact@mateusasato.com</span>
      
    </div>

  </div>
</template>

<script>
import keytitle from '@/components/keytitle.vue';

export default {
data(){
  return{
    kvTitle:'CONTACT',
    kvSubtitle:'Send your message',
  }
},
provide(){
  return{
    kvImg:"background-image:url('/title/contact.jpg')",    
  }
},
components:{
  keytitle,
},
}
</script>

<style scoped>
.contact{
padding:50px 0;
}
form{
display:grid;
grid-template-columns:16% 17% 17% 17% 17% 16%;
grid-template-areas:
"na na na em em em"
"ph ph su su su su"
"yo yo yo yo yo yo";
width:850px;
}
input,textarea{
padding:8px 4px;
font-size:21px;
font-family:"Source Sans Pro",sans-serif;
font-weight:200;
letter-spacing:1px;
border-top: transparent;
border-left: transparent;
border-right: transparent;
border-bottom:1px solid #ccc;
outline:none;
margin:20px 10px 0;
height:37px;
resize:none;
transition:all .3s;
}
input:focus,textarea:focus{
transition:all .3s;
border-bottom:1px solid #777;
}
button{
border: 2px solid #444;
background-color: transparent;
color: #333;
line-height: 36px;
letter-spacing: 2px;
font-size: 13px;
border-radius:20px;
padding:0 22px;
outline:none;
margin:60px 5px 30px;
font-weight:bolder;
}
button:active{
color:white;
background-color: #444;
transition:all .1s;
}
.ps{
font-size:13px;
margin:0 0 25px;
color:#555;
text-align:center;
}
.gray-box{
padding:60px 0;
background-color:#f9f9f9;
}
.email{
font-size:30px;
color:#444;
font-family:"Source Sans Pro",sans-serif;
letter-spacing:1px;
font-weight:300;
}
@media screen and (max-width:1200px){
form{
width:760px;
}
}@media screen and (max-width:768px){
form{
width:80%;
display:flex;
flex-direction:column;
justify-content:center;
}
.email{
font-size:22px;
}
}
</style>