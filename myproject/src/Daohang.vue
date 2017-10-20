<template>
	<div class="daohang">
		<ul>
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/find">AC正义</router-link></li>
			<li><router-link to="/yule">娱乐</router-link></li>
			<li><router-link to="/game">游戏</router-link></li>
			<li><router-link to="/diandian">▪ ▪ ▪</router-link></li>
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