<template>
<div id="footer">
	<button>还有啥？戳我去客户端看看(・ω・)ノ</button>
	<ul>
		<li>关于</li>
		<li>反馈</li>
		<li>地图</li>
		<li>帮助</li>
		<li>更多应用</li>
	</ul>
	<p>Copyright© 2007-2017 acfun.cn</p>
</div>
</template>

<script>
export default {
  name: 'footers',
  
}
</script>

<style>
#footer{
	width:100%;
	height:120px;
	background:#eeeeee;
	/*display:flex;*/

}
	button{
		width:80%;
		margin-left:40px;
		height:50px;
		background:#fd4c5b;
		color:white;
		border-radius: 10px
	}
	#footer ul{
		list-style:none;
		margin-left:60px;
	}
	#footer ul li{
		float:left;
		padding:10px;
		font-size:14px;
		color:#666666;
	}
	#footer p{
		color:#666666;
		font-size:12px;
		/*margin-left:60px;*/
		display:inline-block;
		height:12px;
		width:100%;
		text-align: center;
		/*border-bottom:5px;*/
		/*margin-bottom:5px;*/
	}
</style>