// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// // 导入vue.js
import Vue from 'vue'
// // 导入组件
import App from './App'
import "animate.css"
import router from './router'
import './mock'
import store from "./store"
// Vue.config.productionTip = false

// /* eslint-disable no-new */
// 全局前置导航守卫
localStorage.setItem("token","123123")
router.beforeEach((to,from,next)=>{
  var token = localStorage.getItem("token");
   if(to.path=="/one"){
     if(to.meta.required){
       if(!token){
        alert("未有权限")
        next("/")
       }else{
        next() 
       }
     }
   }else{
     next()
   }
})
// // 全局后置导航守卫
router.afterEach((to,from)=>{

})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
