<template>
  <div>about
  <router-view></router-view>
    <router-link :to="{path:'/about/abouttwo'}">two</router-link>
    <div>id是：{{query}}</div>
  </div>
</template>
<script>
export default {
  // props:["id"],//布尔
  // props:["newsletterPopup"],//对象
  props:["query"],//函数
   beforeRouteEnter (to, from, next) {
    console.log("进来了")
      next()
  },
  beforeRouteUpdate(to, from, next){
 console.log("更新了")
 next()
  },
  beforeRouteLeave (to, from, next) {
     console.log("出去了")
       next()
  }
  }

</script>
<style>
</style>