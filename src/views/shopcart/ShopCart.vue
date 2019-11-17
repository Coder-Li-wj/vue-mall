<template>
    <div>
        <!-- 购物车导航 -->
        <nav-bar class="nav-bar"><div slot="center">购物车({{len}})</div></nav-bar>
        <!-- 商品列表 -->
        <cart-list></cart-list>
        <!-- 底部汇总 -->
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './cartComps/CartList'
import CartBottomBar from './cartComps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
    name:"ShopCart",
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        ...mapGetters({
            len:'cartLength'
        })
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color:#fff;
}
</style>