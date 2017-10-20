<template>
	<div id="erciyuan">
		  <a href=""><h2><span>国产</span><i class="iconfont">&#xe62d;</i></h2></a>
      <div class="erciyuan1">
          <div v-for="item in list">
              <img :src="item.logo">
              <p>{{item.mes}}</p>
          </div>
      </div>
	</div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'guochan',
  data: function(){
  	return{
  		list:[]
  	}
  	
  },
  mounted:function(){
  	var that = this;
  	axios.get('/static/guochan.json')
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
#erciyuan{
    background:#f4f4f4;
    width:100%;
    height:319px;
    /*display:flex;*/
    /*padding:5px;*/
  }
  #erciyuan a{
    text-decoration: none;
  }
  #erciyuan h2{
    width:100%;
    height:24px;
    background:#f4f4f4;
    display:flex;
    justify-content:space-between;
    font-size:16px;
    line-height:24px;
    align-items: center;
  }
  #erciyuan h2 span{
    color:#ff851b;
    margin-left:4px;
    margin-top:2px;
    font-weight:100;
    margin-left:10px;
  }
  #erciyuan h2 i{
    color:#a4aaa4;
  }

  .erciyuan1 div{
    float:left;
    width:45%;
    margin-left:10px;
    padding:0;
    overflow: hidden;
  }
  .erciyuan1 img{
    width:186px;
    height:106px;
  }
  .erciyuan1 p{
    height:30px;
    background:white;
    width:100%;
    line-height:30px;
    font-size:14px;
    color:#666666;
  }
</style>