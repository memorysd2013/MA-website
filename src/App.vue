<template>
  <div id="app">
    <navbar class="nav"/>
    <div class="contain">
      <router-view/>
    </div>
    <Footer class="footer"/>
    <goTop/>
  </div>
</template>

<script>
import goTop from '@/components/goTop.vue'
import navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components:{
    navbar,
    Footer,
    goTop,
  },
  method:{
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
  },
  updated(){
		path.setAttribute("style","top:-490px");
  },
  mounted(){
    window.addEventListener('load',this.backTop);
  },
  beforeDestroy() {
    window.reomveEventListener('load',this.backTop);    
  },
}
</script>

<style>
body{
background-color:#666;
margin:0;
padding:0;
}
#app{
font-family: 'Roboto', sans-serif;
position:relative;
}
.nav{
position:fixed;
top:0;
z-index:10;
}
.footer{
position:relative;
bottom:0;
}
.contain{
}
h1{
margin:0;
}

/* PUBLIC */

.center{
display:flex;
justify-content:center;
align-items:center;
}
.flex-btw{
display:flex;
justify-content:space-between;
}
.column{
display:flex;
flex-direction:column;
}
.main-wrap{
background-color:#fff;
}
.outerLink{
cursor:pointer;
transition:all .3s ease;
}
.outerLink:hover{
opacity:.8;
transition:all .3s ease;
}
.ft-light{
font-weight:lighter;
}
.ft-normal{
font-weight:400;
}
.ft-bold{
font-weight:700;
}
p{
font-size:14px;
line-height:1.8;
color:#555;
}
</style>
