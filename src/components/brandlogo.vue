<template>
	<div class="center column"
		@mouseout="isShow=false">
		<div class="window center">
			<div class="container" :style="this.rn">
				<div class="box" v-for="(i,idx) in items">
					<img class="brand-img" :src="'https://ma-website-img.s3.us-east-2.amazonaws.com/img/brand/'+i+'.png'"
					@mouseover="isShow=true"
					@mouseout="isShow=false"
					/>
				</div>
			</div>
		</div>
		
		<div id="btn" class="btn-area flex-btw"
			@mouseover="isShow=true">
			<div class="btn-wrap center" @click="picLast">
				<i class="fas fa-chevron-left" />
			</div>
			<div class="btn-wrap center" @click="picNext">
				<i class="fas fa-chevron-right" />
			</div>
		</div>
	</div>

</template>

<script>
export default {
data(){
	return{
		items:[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],
		id:1,
		span:180,
		isShow:false,
	}
},
computed:{
	mid(){
		return `display:flex;
			justify-content:center;
			overflow:hidden;`
	},
	rn(){
		return `transform:translateX(${900-this.id*this.span}px);`
	}
},
methods:{
	picNext(){
		//this.items.push(this.items[0]);
		//this.items.shift();
		if(this.id<9){
			this.id+=1;
		}else{
			this.id=1;
		};
		//console.log(this.items,this.id);
	},
	picLast(){
		// this.items.unshift(this.items[8]);
		// this.items.pop();
		if(this.id>1){
			this.id-=1;
		}else{
			this.id=9;
		};
		//console.log(this.items,this.id);
	},
	showBtn(){
		var btn=document.getElementById('btn');
		if(this.isShow){
			btn.classList.add('btn-show');	
		}else{
			btn.classList.remove('btn-show');	
		}
	}
},
watch:{
	isShow(){
		var btn=document.getElementById('btn');
		if(this.isShow){
			btn.classList.add('btn-show');	
		}else{
			btn.classList.remove('btn-show');	
		}
	}
},
mounted(){
	setInterval(()=>{
		this.picNext();
	},3200);
}
}
</script>

<style scoped>
.window{
overflow:hidden;
width:1080px;
}
.container{
padding:50px 0;
height:193px;
width:4240px;
box-sizing:border-box;
display:flex;
justify-content:space-evenly;
transition:all .25s;
}
.box{
padding:0 28px 0;
}
.brand-img{
width:124px;
height:93px;
}
.btn-area{
width:95%;
position:absolute;
transition:all .3s ease;
opacity:0.1;
z-index:10;
}
.btn-wrap{
color:#666;
background-color:#fff;
width:36px;
height:36px;
border-radius:50px;
border:1px solid #999;
transition:all .3s ease;
}
.btn-wrap:hover{
color:#fff;
background-color:#333;
transition:all .3s ease;
border:1px solid #333;
}
.btn-show{
width:90%;
opacity:1;
transition:all .3s ease;
}

@media screen and (max-width:1140px){
.window{
width:900px;
}
.box{
transform:translateX(90px);
}
}@media screen and (max-width:992px){
.window{
width:720px;
}
.box{
transform:translateX(0px);
}
}@media screen and (max-width:768px){
.window{
width:540px;
}
.box{
transform:translateX(90px);
}
}@media screen and (max-width:560px){
.window{
width:320px;
}
.box{
transform:translateX(0px);
}
}

</style>