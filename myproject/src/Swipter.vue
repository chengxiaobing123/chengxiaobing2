<template>
	<div id="swipter">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in list" key="item.logo"><img :src="item.logo"></mt-swipe-item>
		  <!-- <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		  <mt-swipe-item>4</mt-swipe-item>
		  <mt-swipe-item>5</mt-swipe-item> -->
		</mt-swipe>
		
	</div>
</template>
<script>
	export default{
		name:'swipter',
		data: function(){
			return{
					list: [
						{logo: "http://imgs.aixifan.com/cms/2017_10_16/1508151531078.jpg"},
						{logo: "http://imgs.aixifan.com/cms/2017_10_15/1507997210034.png"},
						{logo: "http://imgs.aixifan.com/cms/2017_10_15/1508052880668.jpg"},
						{logo: "http://imgs.aixifan.com/cms/2017_10_14/1507996228595.png"},
						{logo: "http://imgs.aixifan.com/cms/2017_10_13/1507888054237.png"}
						]
					}
				}
		 
	}

				
			
</script>
<style>
	#swipter{
		height:180px;
		width:100%;
		/*background:red;*/
	}
	#swipter img{
		width:100%;
		height:180px;
	}
</style>


