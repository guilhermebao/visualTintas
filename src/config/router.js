import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Register from '@/components/user/Register'
import Account from '@/components/user/Account'
import Company from '@/components/company/Company'
import ProductList from '@/components/product/ProductList'
import Product from '@/components/product/Product'
import Budget from '@/components/budgets/Budget'

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
    name: 'productList',
    path: '/product',
    component: ProductList
},
{
    name: 'product',
    path: '/product/:id',
    component: Product
},
{
    name: 'budget',
    path: '/budget',
    component: Budget
}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router