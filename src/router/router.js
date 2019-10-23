import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// import Home from 'views/home/Home.vue'
// import Cart from 'views/cart/Cart.vue'
// import Category from 'views/category/Category.vue'
// import Profile from 'views/profile/Profile.vue'

//懒加载导入路由
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')


const router = new VueRouter({
    routes:[
        { path: '', redirect:'/Home'},
        { path: '/home', component: Home},
        { path: '/cart', component: Cart},
        { path: '/profile', component: Profile},
        { path: '/category', component: Category},

    ],
    mode:"history"
})

export default router