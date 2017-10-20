<template>
	<div class="denglu">
		
		<input v-model="username" type="text" placeholder="请输入用户名">
		<input v-model="password" type="text" placeholder="请输入密码">
		<button @click="reg()">登录</button>
		
		<p><router-link to="zhuce">注册账号</router-link></p>
	</div>
</template>

<script>
	import axios from "axios"
            export default {
                name:"denglu",
                data:function(){
                    return{
                        username:"",
                		password:""
            }
        },
        methods:{
            reg:function(){
            	var that=this;
                axios.post("/api/Denglu","username="+this.username+"&password="+this.password)
                	
                    .then(function(res){
                    	// var that=this;
                        if(res.data){
                            that.$router.push("/")
                        }else{
                            alert("lose")
                        }
                    }).catch(function(error){
                    console.log("失败")
                })
            }
        }
    }
</script>

<style>
	.denglu{
		margin:0 auto;
	}
	input{
		width:80%;
		height:30px;
		margin-left:40px;
		margin-top:20px;
	}
	.denglu p{
		float:right;
		margin-right:40px;
		color:black;
	}
	.denglu p a{
		color:black;
	}
</style>