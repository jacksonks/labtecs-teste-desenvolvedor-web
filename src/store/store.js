import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: [
        'User'
    ]
})

export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
        User
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});