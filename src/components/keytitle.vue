<template>
	<div class="keytitle">
    <div class="kv-text">
			<h1 class="kv-title">{{this.kvTitle}}</h1>
			<h2 class="kv-subtitle">{{this.kvSubtitle}}</h2>
		</div>

	<keyview/>

	</div>
</template>

<script>
import keyview from '@/components/keyview.vue';

export default {
	props:['kvTitle','kvSubtitle'],
	components:{
		keyview,
	},
}
</script>

<style scoped>
.keytitle{
height:500px;
width:100%;
position:relative;
background-position:50% -45px;
background-color:rgba(0,0,0,0.7);
}
.kv-text{
text-align:center;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-30%);
}
.kv-title{
font-size:48px;
font-weight:bolder;
color:white;
letter-spacing:4px;
font-weight:600;
margin:0 0 30px;
font-family:"Source Sans Pro",sans-serif;
}
.kv-subtitle{
font-size:21px;
font-weight:100;
color:#EEE;
line-height:1.4;
margin:0 0 20px;
letter-spacing:0.4px;
}	
</style>