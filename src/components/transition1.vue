<template>
  <div>
   <button @click="heart">heart</button>
   <transition name="fade" enter-active-class="animated heartBeat" leave-active-class="animated flash">
      <div v-show="show" style="width:100px;height:40px;border:1px solid pink">心动</div>
   </transition>
   <router-link :to="{path:'/'}">two</router-link>
     <button @click="run">two动态绑定</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
          show:false   
        }
    },
   methods: {
     heart(){
      this.show = !this.show
     },
     run(){//编程导航
      this.$router.push({path:"/"})
      // this.$router.push("/")
     }
   }, 
}
</script>
<style>
</style>