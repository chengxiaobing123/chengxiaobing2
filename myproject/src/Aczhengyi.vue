<template>
	<div id="aczhengyi">
		<div class="aczhengyi1">
			<div> &nbsp;AC 正义<i class="iconfont">&#xe501;</i></div>
			<div>
				<span>排序：</span>
				<div>&nbsp;最新发布<i class="iconfont">&#xe501;</i></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		  name: 'aczhengyi',
		}
</script>

<style>
	#aczhengyi{
		background:#ff3d36;
		height:35px;

	}
	#aczhengyi .aczhengyi1{
		display:flex;
		justify-content:space-between;

	}
	#aczhengyi .aczhengyi1 div{
		width:81px;
		height:27px;
		/*background:white;*/
		border-radius: 1px;
		margin-top:4px;
	}
	#aczhengyi .aczhengyi1 div:nth-of-type(1){
		line-height:27px;
		margin-left:10px;
		background:white;
		font-size:14px;
	}
	#aczhengyi .aczhengyi1 div:nth-of-type(2){
		width:150px;
		/*margin-right:5px;*/
		margin-right:-17px;
	}
	#aczhengyi .aczhengyi1 div:nth-of-type(2) span{
		float:left;
		margin-top:4px;
		font-size:14px;
		color:white;
	}
	#aczhengyi .aczhengyi1 div:nth-of-type(2) div{
		float:left;
		background:white;
		margin-top:0px;
		margin-left:0;
		font-size:14px;
	}
	
</style>
<style src="./iconfont2/iconfont.css"></style>