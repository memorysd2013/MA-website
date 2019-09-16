<template>
	<div id="nav" class="navbar flex-btw">
		<div class="logo">
			<i class="fas fa-bars" @click="toggleNavbar"></i>
			<div id="logo" class="logo-img logo-white"></div>
		</div>

		<div id="path" class="path center">
			<router-link class="rot" to="/home">HOME</router-link>
			<router-link class="rot" to="/about">ABOUT</router-link>
			<router-link class="rot" to="/news">NEWS</router-link>
			<router-link class="rot" to="/media">MEDIA</router-link>
			<router-link class="rot" to="/gear">GEAR</router-link>
			<router-link class="rot" to="/contact">CONTACT</router-link>
		</div>
	</div>
</template>

<script>
//<img class="logo-img" src="../assets/header/logo-dark@2x.png"/>
//<div id="logo" class="logo-img"></div>


export default {
	data(){
		return{
			show:true,
		}
	}, 
	methods:{
		scrollCatch(){
			let logoPic=document.getElementById('logo');
			let navColor=document.getElementById('nav');
			if(window.scrollY>175){
				navColor.classList.add('reverse');
				setTimeout(function(){
					logoPic.classList.remove('logo-white');
					logoPic.classList.add('logo-black');
				},1000);
			}else{
				navColor.classList.remove('reverse');
				setTimeout(function(){
					logoPic.classList.remove('logo-black');
					logoPic.classList.add('logo-white');
				},1000);
			};
		},
		toggleNavbar(){
			let path=document.getElementById('path');
			if(this.show){
				path.setAttribute("style","top:70px");
				this.show=false;
			}else{
				path.setAttribute("style","top:-490px");
				this.show=true;
			}

		}
	},
	mounted(){
    console.log('nav mount');

    window.addEventListener("scroll", this.scrollCatch);
    window.addEventListener("load", this.widthCatch);
  },
	updated(){
    console.log('nav update');
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.scrollCatch);
    window.removeEventListener("load", this.widthCatch);
  }
}
</script>

<style>
.navbar{
width:100%;
height:70px;
padding:0 30px;
border-bottom:1px solid #444;
box-sizing:border-box;
font-family: 'Source Sans Pro', sans-serif;
position:fixed;
top:0;
transition: all .3s ease;
color:white;
}
.fa-bars{
display:none;
line-height:70px;
}
.logo-img{
height:70px;
width:185px;
background-size:cover;
}
.logo-white{
background-image:url('../assets/header/logo-dark@2x.png');
}
.logo-black{
background-image:url('../assets/header/logo@2x.png');
}
.rot{
line-height:22px;
padding:24px 22px;
text-decoration:none;
font-size:12px;
letter-spacing:3px;
color:inherit;
letter-spacing:3.3px;
}
.reverse{
transition: all .3s ease;	
background-color:white;
color:black;
border-bottom:1px solid #eee;
}
.show{
top:70px;
transition: all .3s ease;
}

@media screen and (max-width:992px){
.fa-bars{
display:inline;
float:left;
position:relative;
left:-80px;
top:0;
}
.rot{
text-align:center;
width:60%;
border-bottom:1px solid rgba(255,255,255,.5);
}
.navbar,.path{
flex-direction:column;
justify-content:center;
align-items:center;
background-color:rgba(102,102,102,.8);
}
.path{
position:absolute;
top:-490px;
width:150%;
background-color:rgba(102,102,102,.8);
transition:all .3s ease;
}
.path,.logo{
color:#fff;
}

}@media screen and (max-width:480px){
.fa-bars{
left:-40px;
}	
}
</style>