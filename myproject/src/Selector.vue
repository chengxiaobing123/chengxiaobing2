<template>
	<div id="h2">
		<router-link to="zonghe"><h2><span>文章</span><i class="iconfont">&#xe62d;</i></h2></router-link>
		<ul>
			<li>
				<div><img :src="src"></div>
				<h3>【LOL】SKT一波团战再度翻盘，EDG...</h3>
				<p>SKT一波团战再度翻盘，EDG无缘八强</p>
			</li>
			<li>		92年大龄男青年对相亲结婚的无力感。。。。。
			<span><i class="iconfont"></i>&nbsp;287</span>
			</li>
			<li>《中华小当家》漫画复活 新连载公布<span><i class="iconfont"></i>&nbsp;287</span></li>
			<li>软件捆绑安装太流氓 恐怕中文十级才能看懂<span><i class="iconfont"></i>&nbsp;287</span></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'selector',
		data:function(){
			return{
			src:'http://cdn.aixifan.com/dotnet/20120923/style/image/cover-night.png'
			}
		}
	}	
</script>

<style>
	#h2{
		background:#f4f4f4;
		width:100%;
		height:217px;
	}
	#h2 a{
		text-decoration: none;
	}
	#h2 h2{
		width:100%;
		height:24px;
		background:#f4f4f4;
		display:flex;
		justify-content:space-between;
		font-size:16px;
		line-height:24px;
		align-items: center;
	}
	#h2 h2 span{
		color:#ff851b;
		margin-left:4px;
		margin-top:2px;
		font-weight:100;
		margin-left:10px;
	}
	#h2 h2 i{
		color:#a4aaa4;
	}
	#h2 ul{
		width:93%;
		margin-left:10px;
		padding:5px;
		list-style: none;
		background:white;
	}
	#h2 ul li:nth-of-type(1) div{
		display:inline-block;

	}
	#h2 ul li:nth-of-type(1) h3{
		display:inline-block;
		font-size: 14px;
		position: absolute;
		top:10px;
		left:80px;
		color:#606060;
	}
	#h2 ul li:nth-of-type(1) img{
		width:80px;
		height:60px;
	}
	#h2 ul li:nth-of-type(1){
		height:60px;
		width:90%;
		border-bottom: 1px solid #f4f4f4;
		position: relative;
	}
	#h2 ul li:nth-of-type(1) p{
		font-size:12px;
		display:inline-block;
		position: absolute;
		top:40px;
		left:87px;
		color:#bcb1c7;
	}
	#h2 ul li:nth-of-type(2){
		height:26px;
		font-size:14px;
		padding-top:10px;
		color:#606060;
		border-bottom: 1px solid #f4f4f4;
	}
	#h2 ul li:nth-of-type(3){
		height:26px;
		font-size:14px;
		padding-top:10px;
		color:#606060;
	}
	#h2 ul li:nth-of-type(4){
		height:26px;
		font-size:14px;
		padding-top:10px;
		color:#606060;
	}
	#h2 ul li:nth-of-type(2) span{
		float:right;
		font-size:12px;
	}
	#h2 ul li:nth-of-type(3) span{
		float:right;
		font-size:12px;
	}
	#h2 ul li:nth-of-type(4) span{
		float:right;
		font-size:12px;
	}
</style>
<style src="./iconfont1/iconfont.css"></style>