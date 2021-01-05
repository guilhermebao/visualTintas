import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Register from '@/components/user/Register'
import Account from '@/components/user/Account'
import Company from '@/components/company/Company'
import ProductList from '@/components/product/ProductList'


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
},
{
    name: 'company',
    path: '/company',
    component: Company
},
{
    name: 'product',
    path: '/product',
    component: ProductList
}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router