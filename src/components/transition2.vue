<template>
   <div>
     <button @click="send">send</button>
     <transition name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div v-show="show" style="width:40px;height:40px;background:red;border-radius:50%"></div>
     </transition>
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
        send(){
          this.show = !this.show
        },
        beforeEnter: function(el){
            // el 指当前div  document.getElementById()
         //动画还未开始
        //  设置初始位置
        el.style.transform="translate(0,0)"
        },
        enter:function(el,done){
        //  强制刷新
          el.offsetWidth
        //  动画完成
          // el.style.transform="translate(130px,130px)"
          // el.style.transition="all 2s ease"
          el.style.animation="stylie-transform-keyframes 1s 0s linear infinite "
          done()
        },
        afterEnter:function(){
          this.show = !this.show
        }
    },
}
</script>
<style>
@keyframes stylie-transform-keyframes {
  0% {transform:translate(0px, 0px) scale(1) rotateX(-1deg) rotateY(184deg) rotateZ(0deg) translate(-50%, -50%);animation-timing-function: cubic-bezier(.25,.25,.75,.75);}
  20.13% {transform:translate(54px, -21px) scale(1) rotateX(-8deg) rotateY(183deg) rotateZ(0deg) translate(-50%, -50%);animation-timing-function: cubic-bezier(.25,.25,.75,.75);}
  40.10% {transform:translate(120px, -8px) scale(1) rotateX(0deg) rotateY(184deg) rotateZ(0deg) translate(-50%, -50%);animation-timing-function: cubic-bezier(.25,.25,.75,.75);}
  60.06% {transform:translate(170px, 45px) scale(1) rotateX(0deg) rotateY(184deg) rotateZ(0deg) translate(-50%, -50%);animation-timing-function: cubic-bezier(.25,.25,.75,.75);}
  80.03% {transform:translate(233px, 149px) scale(1) rotateX(0deg) rotateY(184deg) rotateZ(0deg) translate(-50%, -50%);animation-timing-function: cubic-bezier(.25,.25,.75,.75);}
  100% {transform:translate(292px, 305px) scale(1) rotateX(0deg) rotateY(184deg) rotateZ(0deg) translate(-50%, -50%);}
}
</style>