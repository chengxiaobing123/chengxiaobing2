<template>
		<div class="daohangtiao">
			<img src="../assets/avatar.jpg">
			<router-link to="denglu"><span>登录</span></router-link>
			<div class="daohangtiao1">
				<p>导 航</p>
			</div>
			<div class="dht1">
				<router-link to="/"><div>AC 正义</div></router-link>
				<router-link to="/"><div>文章</div></router-link>
				<router-link to="/"><div>娱乐</div></router-link>
				<router-link to="/"><div>动画</div></router-link>
				<router-link to="/"><div>二次元</div></router-link>
				<router-link to="/"><div>国产</div></router-link>
				<router-link to="/"><div>游戏</div></router-link>
				<router-link to="/"><div>音乐</div></router-link>
				<router-link to="/"><div>体育</div></router-link>
			</div>
		</div>
		
</template>

<script>
	export default{
		name:'doahangtiao'
	}
</script>

<style scoped>
	.daohangtiao{
		width:100%;
		border-top:1px solid #dddddd;
	}
	.daohangtiao img{
		width:52px;
		height:52px;
		border-radius:50%;
		border:1px solid #fe8a24;
		margin-left:10px;
		margin-top:10px;
		float:left;
	}
	.daohangtiao span{
		margin-left:20px;
		display:inline-block;
		height:52px;
		margin-top:10px;
		line-height:52px;
	}
	.daohangtiao .daohangtiao1 p{
		width:100%;
		text-align:center;
		font-size:20px;
		color:#ff9b45;
	}
	.daohangtiao .dht1 div{
		background:#eeeeee;
		width:67px;
		height:28px;
		line-height:28px;
		text-align:center;
		margin-left:10px;
		border-radius:4px;
		color:#707070;
		float:left;
		margin-top:10px;
	}
	a{
		color:black;
	}
</style>