<template>
	<div>
		<div id="header4">
			<div id="header1" @click><i class="iconfont">&#xe60a;</i></div>
			<div id="header3"><a href="#"></a></div>
			<div id="header2"><i class="iconfont">&#xe60e;</i></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'headers'
	}
</script>

<style>
	/*d{
		
		background:blue;
		display:flex;
		flex-direction:column;
		
		align-items:center;

	}*/
	#header4{
		height:40px;
		width:100%;
		display:flex;
		justify-content:space-between;
		/*height:40px;*/
	}
	#header1{
		height:40px;
		width:40px;
		/*background:red;*/
		justify-content: center;
		align-items: center;
		/*display:inline-block;*/
		text-align:center;
		line-height:40px;

	}
	#header1 i{
		font-size:20px;
		color:black;
	}
	#header2{
		height:40px;
		width:40px;
		/*background:yellow;*/
		justify-content: center;
		align-items: center;
		/*float:right;*/
		text-align:center;
		line-height:40px;
	}
	#header2 i{
		font-size:20px;
		color:black;
	}
	#header3{
		height:40px;
		width:100px;
		/*background:pink;*/
		/*display:inline-block;*/
	}
	#header3 a{
		display:block;
		width:100px;
		height:40px;
		background:url("./assets/logo1.png") center no-repeat;
		background-size:100%;
	}
	
</style>
<style src="./iconfont/iconfont.css"></style>