import { createStore } from 'vuex'

const store = createStore({
  state: {
    homeContentObj: {},
    cloneHomeContentObj: {},
  },
  getters: {
    getHomeContentObj(state) {
      return state.homeContentObj;
    },
    getCloneHomeContentObj(state) {
      return state.cloneHomeContentObj;
    },
  },
  mutations: {
    SET_HOME_CONTENT_OBJ(state, value) {
      state.homeContentObj = value;
    },
    SET_CLONE_HOME_CONTENT_OBJ(state, value) {
      state.cloneHomeContentObj = value;
    },
  },
  actions: {
    ['setHomeContentObj']({commit}, value) {
      commit('SET_HOME_CONTENT_OBJ', value);
    },
    ['setCloneHomeContentObj']({commit}, value) {
      commit('SET_CLONE_HOME_CONTENT_OBJ', value);
    },
  },
})

export default store;
