<template>
	<div class="yemian">
		<div class="yemian1" v-for="item in list">
			<img :src="item.logo">
			<div class="pinglun">
				<div class="tou">{{item.mes}}</div>
				<p class="pp1">UP主：<span>{{item.mes1}}</span></p>
				<p class="pp2">播放：<span>{{item.mes2}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	export default{
			name:'yule1',
			data: function(){
					  	return{
					  		list:[]
					  	}
					  	
					  },
					  mounted:function(){
					  	var that = this;
					  	axios.get('/static/yule.json')
					  	.then(function(res){
					  			// console.log(res);
					  			that.list=res.data
					  	})
					  	.catch(function(){
					  		console.log("chucuo")
					  	})
					  }
		}
</script>

<style>
body{
	background:#f4f4f4;
}
	.yemian{
		width:100%;
		height:100%;
		background:#f4f4f4;
	}
	.yemian1{
		position:relative;
		width:95%;
		height:80px;
		background:white;
		margin-left:10px;
		margin-top:10px;
	}
	.yemian1 img{
		width:122px;
		height:69px;
		float:left;
		margin-top:6px;
		margin-left:6px;
	}
	.tou{
		position:absolute;
		left:135px;
		top:6px;
		color:#606060;
		background:white;
	}
	.pp1{
		float:left;
		position:absolute;
		top:57px;
		left:135px;
		font-size:13px;
		color:#aeaeae;
	}
	.pp2{
		float:left;
		position:absolute;
		top:57px;
		left:290px;
		font-size:13px;
		color:#aeaeae;
	}
	.pp2 span{
		font-size:12px;
	}