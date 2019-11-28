import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    //state 状态 mutations 触发状态 actions:异步分发
    //computed 计算属性 getters 计算
    state:{
        num:0
    },
    mutations:{
        add(state){
          state.num++
        },
        reduce(state){
            state.num--
          }
    },
    getters:{
        num(state){
            return state.num +=20
        }
    },
    actions:{ 
        addAction(context){
          context.commit("add")
        },
        reduceAction({commit}){
          commit("reduce")
        }
    },
    module:{
        state:{},
        mustations:{},
        getters:{},
        actions:{},
    }
})