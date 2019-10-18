import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        userToken: null,
    },
    mutations: {
        setUser(state, payload) {
            state.userToken = payload.token
        },
        clearUser(state) {
            state.userToken = null
        },

    },
    actions: {
        registerUser({commit}, payload) {
            commit('setLoader', true)
            this.$http.post('api/auth/register', {
                email:payload.email,password:payload.password, password_confirmation:payload.confirm_password
            })
                .then((response) => {
                    this.$http.post('api/auth/login', {
                        email:payload.email,password:payload.password
                    })
                        .then((responseLogin) => {
                            commit('setUser',{token:responseLogin.data.token})
                        })
                        .catch((e) => {
                        })

                })
                .catch((e) => {
                })
            commit('setLoader', false)
        },
        logOut ({commit}) {
            commit('clearUser')
        },

        logIn({commit}, payload) {
            commit('setLoader', true)
            this.$http.post('api/auth/login', {
                email:payload.email,password:payload.password
            })
                .then((responseLogin) => {
                    commit('setUser',{token:responseLogin.data.token,email:payload.email})
                })
                .catch((e) => {
                })
            commit('setLoader', false)
        },
    },
    getters: {
        user(state) {
            return state.userToken
        },
    }
}