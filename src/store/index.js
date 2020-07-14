import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ImgIndex:0//保存轮播图第几张
  },
  mutations: {
    MUpImgIndex(state,queenIndex){
      state.ImgIndex = queenIndex//保存轮播图第几张
    }
  },
  actions: {
    AUpImdexIndex(context,queenIndex){
        context.commit('MUpImgIndex',queenIndex)//保存轮播图第几张
    }
  },
  modules: {
  }
})
