<template>
	<div id="donghua">
	<router-link to="zonghe"><h2><span>动画</span><i class="iconfont">&#xe62d;</i></h2></router-link>
	<router-link to="xiangqing"><div class="nima">
		
		<div id="donghua1">
			<!-- <img src="./assets/2.jpg"> -->
			
		</div>
		<div class="nima1">妖怪公寓的幽雅日常</div>
		
	</div>
</router-link>
	<div class="nima">
		
		<div id="donghua2">
			<!-- <img src="./assets/2.jpg"> -->
			
		</div>
		<div class="nima1">动画同好会</div>
		
	</div>
	<div class="nima">
		
		<div id="donghua3">
			<!-- <img src="./assets/2.jpg"> -->
			
		</div>
		<div class="nima1">魅力英雄</div>
		
	</div>
	<div class="nima">
		
		<div id="donghua4">
			<!-- <img src="./assets/2.jpg"> -->
			
		</div>
		<div class="nima1">爱米-WE LOVE RICE-第二</div>
		
	</div>
	</div>
</template>
<!-- http://api.aixifan.com/regions?belong=0&loadCount=-1 -->
<script>
import axios from 'axios';


export default {
  name: 'dondhua',
  data: function(){
  	return{
  		list:[]
  	}
  	
  },
  mounted:function(){
  	var that = this;
  	axios.get('/static/donghua.json')
  	.then(function(res){
  			// console.log(res);
  			
  	})
  	.catch(function(){
  		console.log("chucuo")
  	})
  }
  }
</script>



<style>
#donghua{
		background:#f4f4f4;
		width:100%;
		height:319px;
		/*display:flex;*/
		/*padding:5px;*/
	}
	#donghua a{
		text-decoration: none;
	}
	#donghua h2{
		width:100%;
		height:24px;
		background:#f4f4f4;
		display:flex;
		justify-content:space-between;
		font-size:16px;
		line-height:24px;
		align-items: center;
	}
	#donghua h2 span{
		color:#ff851b;
		margin-left:4px;
		margin-top:2px;
		font-weight:100;
		margin-left:10px;
	}
	#donghua h2 i{
		color:#a4aaa4;
	}
	.nima{
		width:188px;
		height:136px;
		margin-left:8px;
		float:left;
		margin-top:5px;
	}
	#donghua1{
		width:188px;
		height:106px;
		background:url("./assets/2.jpg") center no-repeat;
		background-size:100%;margin-top:5px;
		
	}
	#donghua2{
		width:188px;
		height:106px;
		background:url("./assets/3.png") center no-repeat;
		background-size:100%;margin-top:5px;
		
	}
	#donghua3{
		width:188px;
		height:106px;
		background:url("./assets/4.jpg") center no-repeat;
		background-size:100%;margin-top:5px;
		
	}
	#donghua4{
		width:188px;
		height:106px;
		background:url("./assets/5.jpg") center no-repeat;
		background-size:100%;margin-top:5px;
		
	}
	.nima1{
		font-size:14px;
		line-height:30px;
		background:white;
		color:#606060;
	}
</style>