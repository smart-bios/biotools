import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router'


Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    files: []
  },

  mutations: {

    setToken(state, token){
      state.token = token;
    },
    setUsuario(state, user){
      state.user = user;
    },
    setFiles(state, files){
      state.files = files
    }
  },

  actions: {
  
    saveToken({commit}, token){
      commit("setToken", token)
      commit("setUsuario", decode(token))
      localStorage.setItem("token", token)
    },

    autoLogin({commit}){
      let token = localStorage.getItem("token");
      if(token) {
        commit("setToken", token);
        commit("setUsuario", decode(token));
        router.push({name: 'Home'});
      }   
    },

    logout({commit}){
      commit("setToken", null);
      commit("setUsuario", null);
      localStorage.removeItem("token");
      router.push({name: 'Home'});
    },

    async loadFiles({commit}, user){

      let res= await axios.get(`/storage/list/6042a3a2c62d9162af2a0c08`)
      console.log(res.data)
      commit('setFiles', res.data.result)

    },

    async login({commit}, user){
      try {
        let res = await this.$axios.post('/user/login', user)
      if(res){
        commit("setToken", res.data.token)
        commit("setUsuario", decode(res.data.token))
        localStorage.setItem("token", res.data.token)
      }
        
      } catch (error) {
        
      }
    }

  }
})