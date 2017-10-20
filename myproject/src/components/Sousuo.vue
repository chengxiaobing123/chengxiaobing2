<template>
		<div class="sousuo">
			<div class="sousuo1">
				<div class="sousuo2">
					<router-link to="/"></router-link>
				</div>
				<input type="" placeholder="输入关键词">
				<router-link to="/">取消</router-link>
			</div>
			<div class="remensousuo">
				<p>热门搜索</p>
				<div>木鱼微剧场</div>
				<div>评论才是本体</div>
				<div>宇宙大新闻</div>
				<div>越狱</div>
				<div>野食小哥</div>
				<div>奥雷</div>
				<div>瞎看什么</div>
				<div>STN快报</div>
				<div>中国交通事故合集</div>
				<div>暴走大事件</div>
			</div>
		</div>
		
</template>

<script>
	export default{
		name:'sousuo'
	}
</script>

<style scoped>
	.sousuo1{
		width:100%;
		height:48px;
		background:#fd4c5c;
	}
	.sousuo2{
		margin-left:5px;
		display:block;
		width:70px;
		height:48px;
		background:url("../assets/logo2.png") center no-repeat;
		background-size:100%;
		float:left;
	}
	.sousuo1 input{
		width:250px;
		height:32px;
		display:inline-block;
		margin-left:10px;
		margin-top:6px;
		padding-left:20px;
		font-size:16px;
		border-radius:4px;
	}
	.sousuo1 a{
		color:white;
		margin-left:10px;
	}
	.remensousuo{
		width:100%;

	}
	.remensousuo p{
		width:100%;
		padding:10px;
		margin-top:20px;
	}
	.remensousuo div{
		margin-left:10px;
		margin-top:10px;
		float:left;
		border:1px solid #e5e5e5;
		border-radius:3px;
		padding:5px;
		color:#606060;
		font-size:14px;
	}
</style>