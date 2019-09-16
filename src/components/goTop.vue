<template>
	<div v-if="btnFlag" class="top center" @click="backTop">
		<i class="fas fa-chevron-up"/>
	</div>
</template>

<script>
export default {
data(){
	return{
		btnFlag:false,
	}
},
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
methods: {
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
	scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 400) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
}
}
</script>

<style scoped>
.top{
width:40px;
height:40px;
background-color:rgba(0,0,0,.3);
transition:all .3s ease;
position:fixed;
bottom:30px;
right:30px;
z-index:30;
}
.fa-chevron-up{
color:#fff;
}
.top:hover{
transition:all .3s ease;
background-color:#454545;
}
</style>