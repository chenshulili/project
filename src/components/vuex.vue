<template>
   <div>
    <!--  <button @click="add">+</button>-->
     <!--  <button @click="$store.commit('add')">+</button> --><!--mutations -->
         <button @click="addAction">+</button>
           <!--   {{num}}--> 
         <!-- {{$store.state.num}}--> 
       {{num}}
        <button @click="reduceAction">-</button>
   <!--  <button @click="$store.commit('reduce')">-</button> -->
   </div>
</template>
<script>
//辅助函数
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return{
        // num:0
      }
  },
  //计算属性 setter getter
//   computed: {
//       num(){
//        return  this.$store.state.num  
//       }
//   },
//   computed: {
//       ...mapState(["num"])
//   },
//   computed:mapState(["num"]),
computed: {
    ...mapGetters(["num"])
},
methods:mapActions(["addAction","reduceAction"])
//  methods: {
//       add(){
//         //   num++
//     this.$store.state.num++
//   },
//   reduce(){
//  this.$store.state.num--
//   }
//  },
}
</script>
<style></style>