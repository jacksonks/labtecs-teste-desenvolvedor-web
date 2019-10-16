import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Register',
            component: Register
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
    ],
    mode: 'history'
})