<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
        <home-swiper v-bind:banners="banners"></home-swiper>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import homeSwiper from './homeComps/homeSwiper'

import {getHomeMultidata} from 'network/home.js'

export default {
    name:'home',
    components:{ //tip:记得NavBar要写在对象里面！！！
        NavBar,
        homeSwiper
    },
    data(){
        return{
            banners:[],
            recommends:[]
        }
    },
    created(){
        getHomeMultidata().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
}
</style>