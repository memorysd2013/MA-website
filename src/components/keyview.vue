<template>
<div class="keyview" :style="this.move">
</div>
</template>

<script>
export default {
inject:['kvImg'],
data(){
	return {
		tem:'',
	}
},
computed:{
	move(){
	return `transform:translateY(${this.tem}px);${this.kvImg}`
},
},
methods:{
	scrollMove(){
		this.tem=Math.ceil(window.scrollY/1.8);
	}
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
.keyview{
height:100%;
width:100%;
position:relative;
background-position:50% -45px;
background-color:#333;
z-index:-10;
}

</style>