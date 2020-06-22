import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import filesupload from './components/content/files'
import profile from './components/content/profile'
import login from './components/ExampleComponent'
import signup from './components/Auth/Signup'
import logout from './components/Auth/logout'

const router = new VueRouter({

    hash: false,

    hashbang: false,
    history: true,
    mode: 'history',
    routes: [

        { path: '/filesupload', component: filesupload, name: 'upload' },
        { path: '/profile', component: profile },

        { path: '/login', component: login, name: 'login' },
        { path: '/logout', component: logout },
        { path: '/signup', component: signup },
        { path: '/signup', component: signup },






    ],



})

export default router