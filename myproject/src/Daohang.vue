<template>
	<div class="daohang">
		<ul>
			<li><a href="">首页</a></li>
			<li><a href="">AC正义</a></li>
			<li><a href="">娱乐</a></li>
			<li><a href="">游戏</a></li>
			<li><a href="">▪ ▪ ▪</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'daohang'
	}
</script>

<style>
	.daohang{
		/*background:red;*/
		width:100%;
		height:35px;
	}
	.daohang ul{
		display:flex;
		height:35px;
		width:100%;
		float:left;
		list-style: none;
	}
	.daohang ul li{
		width:20%;
		height:35px;
		line-height: 35px;
		text-align: center;
	}
	.daohang ul li a{
		color:black;
		text-decoration: none;

	}
</style>