<template>
    <div class="detail"> 
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
        <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
            <!-- tips:scroll里的需要给一个固定高度 -->
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
            <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
            <goods-list ref="recommend" :goods="recommendList"></goods-list>
        </scroll>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <toast :message="message" :show="show"></toast>
    </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo'
import DetailParamInfo from './detailComps/DetailParamInfo'
import DetailCommentInfo from './detailComps/DetailCommentInfo'
import DetailRecommendInfo from './detailComps/DetailRecommendInfo'
import DetailBottomBar from './detailComps/DetailBottomBar'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail'//tips:import的是该函数，而不是该文件名
import {debounce} from '../../common/utils'
import {itemListenerMixin, BackTopMixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goodsList/GoodsList'
import Toast from 'components/common/toast/Toast'

import { mapActions } from 'vuex'


export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommendInfo,
        DetailBottomBar,
        Scroll,
        GoodsList,
        Toast
    },
    mixins:[itemListenerMixin, BackTopMixin],
    data(){
        return{
            iid:null,
            topImages: [],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommendList:[],
            itemImgListener:null,
            themeTopYs:[],
            getThemeY:null,
            currentIndex:0,
            message:'',
            show:false
        }
    },
    created(){
        //1.保存存入的iid
        this.iid = this.$route.params.iid
        //2.根据iid请求详情数据
        getDetail(this.iid).then(
            res => {
                // console.log(res)
                const data = res.result
                //获取顶部轮播图数据
                this.topImages = data.itemInfo.topImages

                //获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                //创建店铺信息
                this.shop = new Shop(data.shopInfo)

                //获取商品详细信息
                this.detailInfo = data.detailInfo

                //获取参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                
                //获取评论信息
                if (data.rate.list) {
                    this.commentInfo = data.rate.list[0]
                }

                //防抖
                this.getThemeY = debounce(() => {
                    this.themeTopYs = []
                    this.themeTopYs.push(0)
                    this.themeTopYs.push(this.$refs.param.$el.offsetTop)
                    this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                },100)
            }
        )
        //3.请求推荐数据
        getRecommend().then(
            res => {
                this.recommendList = res.data.list
            }
        )
    },
    mounted(){
        //通过mixin.js混入itemListenerMixin对象
    },
    destroyed(){
    //取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods:{
        ...mapActions(['addCart']),
        imageLoad(){
            this.$refs.scroll.refresh();

            this.getThemeY()
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
        },
        contentScroll(position){
            // console.log(position.y)
            const positionY = -position.y
            let len = this.themeTopYs.length
            for(let i = 0; i < len; i++){
                if(this.currentIndex!==i&&((i<len -1 && positionY >= this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) ||
                (i===len-1 && positionY >= this.themeTopYs[i])))
                {
                    this.currentIndex = i
                    // console.log(this.currentIndex);
                    this.$refs.nav.currentIndex=this.currentIndex
                }
            }

            //判断BackTop是否显示
            this.isShowBackTop = -position.y > 1000;
        },
        //添加购物车
        addToCart(){
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            // this.$store.dispatch('addCart', product)
            this.addCart(product).then(res => {
                this.show = true
                this.message = res

                setTimeout(() => {
                    this.show = false
                },2000)
            })
        }
    }
}
</script>

<style scoped>
.detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
}
.content{
    /* height: 568px */
    height: calc(100% - 44px - 49px);
    background-color: #fff;
}
/* .detail-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
} */
.detail-nav{
    z-index: 9;
    position: relative;
    background-color: #fff;
}
</style>