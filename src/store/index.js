import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //设置属性
    menuItems: {},
    currentUser: null,
    isLogin:false
  },
  getters: {
    //获取属性的状态
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {
    //改变属性的状态
    setMenuItems(state, data) {
      state.menuItems = data
    },
    removeMenuItems(state,data) {
      state.menuItems.forEach((item, index) => {
        if (item == data) {
          state.menuItems.splice(index,1)
        }
      })
    },
    //将新添加的项目 push到menuItems属性中
    pushToMenuItems(state, data) {
      state.menuItems.push(data)
    }
  },
  actions: {
    //应用mutations
  }
})