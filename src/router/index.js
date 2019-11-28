import Vue from 'vue'
import Router from 'vue-router'
import transition from '@/components/transition'
import transition1 from '@/components/transition1'
import transition2 from '@/components/transition2'
import about from '@/components/about'
import abouttwo from '@/components/abouttwo'
import aboutthree from '@/components/aboutthree'
import wrap from '@/components/wrap'
import foo from '@/components/foo'
import Axios from "axios"
Vue.prototype.$http= Axios
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component: transition
    }, 
    {
      path: '/one',
      component: transition1,
      meta:{
        required:true
      },
    },
    {
      path: '/two',
      component: transition2
    },
    {
      // path: '/about:id',
      // props:true,//允许路由组件传参 布尔
        path: '/about',
      //  props: { newsletterPopup: 55555 },//对象
      props:(route)=>({query:route.query.q}),//函数
      // 路由预加载 webpack require.eans
      // 路由懒加载
      component: ()=>import("../components/about.vue"),
      children:[
        {
          path: '/about/abouttwo',
          component: abouttwo
        },
        {
          path: '/about/aboutthree',
          component: aboutthree
        }
      ]
    },
    {
      path: '/wrap', 
      components:{
        default:wrap,
        foo:foo
      }
    },
    {
      path: '/vuex',
      name:"vuex",
      component: ()=>import("../components/vuex.vue"),
    }
  ]
})
