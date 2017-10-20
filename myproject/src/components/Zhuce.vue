<template>
	<div class="denglu">
		<form> 
		<input type="text" placeholder="请输入用户名" v-model="username">
		<input type="text" placeholder="请输入密码" v-model="password">
		<button @click="reg()">注册</button>
		</form>
		
	</div>
</template>

<script>
	import axios from "axios"
            export default {
                name:"zhuce",
                data:function(){
                    return{
                        username:"",
                		password:""
            }
        },
        methods:{
            reg:function(){
            	var that=this;
                axios.post("/api/register","username="+this.username+"&password="+this.password)
                	
                    .then(function(res){
                    	// var that=this;
                        if(res.data){
                            that.$router.push("/denglu")
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