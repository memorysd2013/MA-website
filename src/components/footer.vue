<template>
	<div class="footer">
		<div class="container flex-btw">

			<div class="copyright column">

				<div>
					<img src="../assets/footer/footer-logo.png"/>
				</div>
				<div>
					<span>WEBSITE BY </span>
					<a href="www.google.com">EVAN</a>
				</div>
			</div>

			<div class="icon flex-btw">
				<div class="icon-squ fb">
					<i class="fab fa-facebook-f"></i>
				</div>
				<div class="icon-squ tr">
					<i class="fab fa-twitter"></i>			
				</div>
				<div class="icon-squ ig">
					<i class="fab fa-instagram"></i>
				</div>
				<div class="icon-squ yt">
					<i class="fab fa-youtube"></i>	
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
// eslint-disable-next-line 
	
}


</script>

<style scoped>

.footer{
background-color:rgb(41,41,41);
font-size:14px;
width:100%;
height:164px;
padding-top:5px;
}
.container{
position:relative;
padding:40px 15px;
margin:0 5%;
color:rgba(255,255,255,.25);
}
.copyright{
width:48%;
display:flex;
}
img{
height:29px;
margin-bottom:30px;
}
a{
color:#9a9a9a;
text-decoration:none;
}
.icon{
position:relative;
}
.icon:before{
content:'';
background:rgb(41,41,41);
box-shadow:0 60px 0 0 rgb(41,41,41);
width:136px;
height:30px;
position:absolute;
top:-30px;
left:0;
z-index:1;
}
.icon-squ{
position:relative;
transition: all .3s ease;
height:30px;
width:30px;
border-radius:5px;
margin:0 2px;
text-align:center;
}
.fab{
line-height:30px;
text-shadow:0px -30px white;
position:relative;
z-index:0;
}
.icon-squ:hover{
transition: all .3s ease;
padding-top:30px;
color:#333;
}
.icon-squ::before{
content:'';
position:absolute;
height:30px;
width:30px;
border-radius:5px;
left:0;
}
.icon-squ:hover::before{
top:0;
transition:all .3s;
}
.fb:hover::before{
background-color:rgb(66,103,178);
}
.tr:hover::before{
background-color:rgb(27,161,242);
}
.ig:hover::before{
background-color:rgb(239,80,243);
}
.yt:hover::before{
background-color:rgb(255,0,0);
}

@media screen and (max-width:400px){
.container{
margin:0;
}
}

</style>