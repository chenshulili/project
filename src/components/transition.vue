<template>
   <div>
     <button @click="toggle">toggle</button>
     <button @click="get">get</button>
     <transition name="fade">
       <div  v-show="show" style="width:100px;height:100px;background:red"></div>
     </transition>
     <router-link to="/one">one</router-link>
   </div>
</template>
<script>
 export default{
  data(){
      return{
          show:false
      }
  },
  methods:{
      toggle(){
         this.show =! this.show 
      },
        getHome(){
       return  this.$http.post("/home/list")
      },
      getHomeList(){
       return  this.$http.post("/home/getlist")
      },
      get(){
        //并发请求
    //     this.$http.all([this.getHome(),this.getHomeList()]).then((res)=>{
    //   console.log(res)
    // })
    //限制数据
      this.$http.all([this.getHome(),this.getHomeList()]).then(
        this.$http.spread((one,two)=>{
          console.log(one)
        })
      )
      }
  },
  mounted() {
    // this.$http.get("../../static/01.txt").then((res)=>{
    //    console.log(res)
    // })
    // this.$http.post("../../static/01.txt",{"username":""}).then().catch(()=>{
    //  console.log(1)
    // })
    this.$http({
      url:"/home/list",
      method:"post",//如果是get传输数据params  如果是post传输数据data
      data:{},
      // methods:"post",
      // data:{},
    }).then((res)=>{
     console.log(res)
    }).catch(()=>{})
  },
  beforeRouteEnter (to, from, next) {
    console.log("进来了")
      next()
    // ...
  },
  beforeRouteUpdate(to, from, next){
 console.log("更新了")
 next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
     console.log("出去了")
       next()
  }

 }
</script>
<style scoped>
  .fade-enter,.fade-leave-to{
      opacity:0
  }
.fade-enter-active,.fade-leave-active{
     transition:all 2s ease;
  }
.fade-enter-to,.fade-leave{
      opacity:1
}
</style>