<template>
	<div class="album" 
	:style="`width:${this.nowAlbum[0]}px;
	height:${this.nowAlbum[1]}px;`">
		<div class="photo-box outerLink" 
		v-for="(item,idx) in nowSize" 
		:style="`top:${item[0]}px;
		left:${item[1]}px;
		transition:all .6 ease;`">

			<div class="photo" 
			:style="
			`background-image:url(\'https://ma-website-img.s3.us-east-2.amazonaws.com/img/media/${(idx+1)}.jpg\');
			width:${item[2]}px;
			height:${item[3]}px;
			`"></div>
		</div>
	</div>
</template>

<script>
export default {
data(){
	return{
		//<img :src="'/media/'+(idx+1)+'.jpg'"/>
		key:0,
		nowSize:[],
		nowAlbum:[],

		// 190 x 142
		bigestAlbum:[1146,429],
		bigest:[[0,0,190,142],[0,191,190,142],[0,382,381,285],[0,764,190,142],[0,955,190,142],[143,0,190,142],[143,191,190,142],[143,764,190,142],[143,955,190,142],[286,0,190,142],[286,191,190,142],[286,382,190,142],[286,573,190,142],[286,764,190,142],[286,955,190,142]],
		// 188 x 141
		mediumAlbum:[945,568],
		medium:[[0,0,188,141],[0,189,188,141],[0,378,377,283],[0,756,188,141],[142,0,188,141],[142,189,188,141],[142,756,188,141],[284,0,188,141],[284,189,188,141],[284,378,188,141],[284,567,188,141],[284,756,188,141],[426,0,188,141],[426,189,188,141],[426,378,188,141],[426,567,188,141],[426,756,188,141]],
		// 180 x 135
		smallAlbum:[724,680],
		small:[[0,0,180,135],
		[0,181,180,135],
		[0,362,361,271],
		[136,0,180,135],
		[136,181,180,135],
		[272,0,180,135],
		[272,181,180,135],
		[272,362,180,135],
		[272,543,180,135],
		[408,0,180,135],
		[408,181,180,135],
		[408,362,180,135],
		[408,543,180,135],
		[544,0,180,135],
		[544,181,180,135],
		[544,362,180,135],
		[544,543,180,135]],
		
		// 147 x 110
		thinAlbum:[444,666],
		thin:[[0,0,147,110],
		[0,148,147,110],
		[111,0,295,221],
		[0,296,147,110],
		[111,296,147,110],
		[222,296,147,110],
		[333,0,147,110],
		[333,148,147,110],
		[333,296,147,110],
		[444,0,147,110],
		[444,148,147,110],
		[444,296,147,110],
		[555,0,147,110],
		[555,148,147,110],
		[555,296,147,110]],

		// 93 x 70
		miniAlbum:[282,426],
		mini:[[0,0,93,70],
		[0,94,93,70],
		[71,0,187,141],
		[0,188,93,70],
		[71,188,93,70],
		[142,188,93,70],
		[213,0,93,70],
		[213,94,93,70],
		[213,188,93,70],
		[284,0,93,70],
		[284,94,93,70],
		[284,188,93,70],
		[355,0,93,70],
		[355,94,93,70],
		[355,188,93,70]],

	}
},
//https://ma-website-img.s3.us-east-2.amazonaws.com/img/media/1.jpg

methods:{
	getAlbum(){
		this.key=document.body.offsetWidth;
		if(this.key>=1200){
			this.nowSize=this.bigest;
			this.nowAlbum=this.bigestAlbum;

		}else if(this.key<1200&&this.key>=992){
			this.nowSize=this.medium;
			this.nowAlbum=this.mediumAlbum;

		}else if(this.key<992&&this.key>=768){
			this.nowSize=this.small;
			this.nowAlbum=this.smallAlbum;

		}else if(this.key<767&&this.key>=480){
			this.nowSize=this.thin;
			this.nowAlbum=this.thinAlbum;

		}else if(this.key<480){
			this.nowSize=this.mini;
			this.nowAlbum=this.miniAlbum;
		}
	}
},
mounted(){
	this.getAlbum();
	window.addEventListener('resize',this.getAlbum);
},
beforeDestroy() {
	window.removeEventListener('resize',this.getAlbum);
},
	
}
</script>

<style scoped>
.album{
width:1146px;
height:429px;
position:relative;
padding:0 0 80px;
}
.photo-box{
position:absolute;
}
.photo{
width:190px;
height:142px;
background-size:cover;
}
img{
width:100%;
}
</style>