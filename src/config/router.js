import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Register from '@/components/user/Register'
import Account from '@/components/user/Account'


Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'register',
    path: '/register',
    component: Register
},
{
    name: 'account',
    path: '/account',
    component: Account
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router