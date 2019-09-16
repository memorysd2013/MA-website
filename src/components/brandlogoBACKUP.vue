<template>
	<div>
		<div :style="this.mid">
			<div class="container">
				<div class="box" v-for="(i,idx) in items" :style="move">
					<h2>{{i}}</h2>
					<img class="brand-img" :src="'/brand/'+i+'.png'"/>
				</div>
			</div>
		</div>
		
		<button @click="picNext">+</button>
		<button @click="picLast">-</button>
	</div>

</template>

<script>
export default {
data(){
	return{
		items:[1,2,3,4,5,6,7,8,9],
		id:1,
	}
},
computed:{
	mid(){
		return `display:flex;
			justify-content:center;`
	},
},
methods:{
	picNext(){
		this.items.push(this.items[0]);
		this.items.shift();
		if(this.id<9){
			this.id+=1;
		}else{
			this.id=1;
		};
		//console.log(this.items,this.id);
	},
	picLast(){
		this.items.unshift(this.items[8]);
		this.items.pop();
		if(this.id>1){
			this.id-=1;
		}else{
			this.id=9;
		};
		//console.log(this.items,this.id);
	}


}
}
</script>

<style scoped>
.container{
outline:1px black solid;
padding:50px 0;
height:193px;
width:90%;
box-sizing:border-box;
display:flex;
justify-content:space-evenly;
overflow:hidden;
transition:all 1s;
}
.box{
outline:1px red solid;
margin:0 32px 0;
transform:translateX(92px);
}
.brand-img{
width:124px;
height:93px;
}

@media screen and (min-width:1310px){
.container{
width:86%;
}
.box{
margin:0 36px 0;
}
}@media screen and (max-width:1200px){
.box{
margin:0 40px 0;
transform:translateX(0);
}
}@media screen and (max-width:1072px){
.box{
margin:0 32px 0;
transform:translateX(0);
}
}@media screen and (max-width:992px){
.box{
margin:0 44px 0;
transform:translateX(103px);
}
}@media screen and (max-width:874px){
.box{
margin:0 30px 0;
transform:translateX(92px);
}
}@media screen and (max-width:768px){
.box{
margin:0 42px 0;
transform:translateX(0);
}
}@media screen and (max-width:665px){
.box{
margin:0 120px 0;
transform:translateX(0);
}
}
</style>