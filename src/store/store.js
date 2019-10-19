import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['User']
})

export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
        User
    },
    state: {
        error: null,
        email:null,
    },
    mutations: {
        setError(state, payload) {
            state.error = payload
        },

        clearError(state, payload) {
            state.error = null
        },

        setEmail(state, payload) {
            state.email = payload
        },

        clearEmail(state) {
            state.email = null
        },
    },
    actions: {
        clearError({commit}) {
            commit('clearError')
        },

        email({commit}, payload){
            this.$http.get('api/user',{
                headers: {
                    Authorization: 'Bearer ' + payload.token
                }
            })
                .then((response) => {
                    commit('setEmail', response.data.email)
                })
                .catch((e) => {
                })

        }
    },
    getters: {
        error(state) {
            return state.error
        },
        email(state){
            return state.email
        }
    }

})