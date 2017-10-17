<template>
  <div id="app">
      <router-view/>
      <headers></headers>
      <daohang></daohang>
      <swipter></swipter>
      <selector></selector>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
     return{

     }
  },
  methods:{
     
  }
}
</script>

<style>
    h1{
        background:red;
    }
</style>
