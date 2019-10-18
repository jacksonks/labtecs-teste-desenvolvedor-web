import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Administration from './views/Administration.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Register',
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/Administration',
            name: 'Administration',
            component: Administration,
            meta: {
                requiresAuth: true
            }
        },
    ],
    mode: 'history'
})