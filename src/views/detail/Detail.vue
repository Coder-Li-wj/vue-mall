<template>
    <div id="detail"> 
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll">
            <!-- tips:scroll里的需要给一个固定高度 -->
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <ul>
                <li>list:1</li>
                <li>list:2</li>
                <li>list:3</li>
                <li>list:4</li>
                <li>list:5</li>
                <li>list:6</li>
                <li>list:7</li>
                <li>list:8</li>
                <li>list:9</li>
                <li>list:10</li>
                <li>list:11</li>
                <li>list:12</li>
                <li>list:13</li>
                <li>list:14</li>
                <li>list:15</li>
                <li>list:16</li>
                <li>list:17</li>
                <li>list:18</li>
                <li>list:19</li>
                <li>list:20</li>
                <li>list:21</li>
                <li>list:22</li>
                <li>list:23</li>
                <li>list:24</li>
                <li>list:25</li>
                <li>list:26</li>
                <li>list:27</li>
                <li>list:28</li>
                <li>list:29</li>
                <li>list:30</li>
                <li>list:31</li>
                <li>list:32</li>
                <li>list:33</li>
                <li>list:34</li>
                <li>list:35</li>
                <li>list:36</li>
                <li>list:37</li>
                <li>list:38</li>
                <li>list:39</li>
                <li>list:40</li>
                <li>list:41</li>
                <li>list:42</li>
                <li>list:43</li>
                <li>list:44</li>
                <li>list:45</li>
                <li>list:46</li>
                <li>list:47</li>
                <li>list:48</li>
                <li>list:49</li>
                <li>list:50</li>
                <li>list:51</li>
                <li>list:52</li>
                <li>list:53</li>
                <li>list:54</li>
                <li>list:55</li>
                <li>list:56</li>
                <li>list:57</li>
                <li>list:58</li>
                <li>list:59</li>
                <li>list:60</li>
                <li>list:61</li>
                <li>list:62</li>
                <li>list:63</li>
                <li>list:64</li>
                <li>list:65</li>
                <li>list:66</li>
                <li>list:67</li>
                <li>list:68</li>
                <li>list:69</li>
                <li>list:70</li>
                <li>list:71</li>
                <li>list:72</li>
                <li>list:73</li>
                <li>list:74</li>
                <li>list:75</li>
                <li>list:76</li>
                <li>list:77</li>
                <li>list:78</li>
                <li>list:79</li>
                <li>list:80</li>
                <li>list:81</li>
                <li>list:82</li>
                <li>list:83</li>
                <li>list:84</li>
                <li>list:85</li>
                <li>list:86</li>
                <li>list:87</li>
                <li>list:88</li>
                <li>list:89</li>
                <li>list:90</li>
                <li>list:91</li>
                <li>list:92</li>
                <li>list:93</li>
                <li>list:94</li>
                <li>list:95</li>
                <li>list:96</li>
                <li>list:97</li>
                <li>list:98</li>
                <li>list:99</li>
                <li>list:100</li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo'
import {getDetail, Goods, Shop} from '../../network/detail'//tips:import的是该函数，而不是该文件名

import Scroll from 'components/common/scroll/Scroll'

export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        Scroll
    },
    data(){
        return{
            iid:null,
            topImages: [],
            goods:{},
            shop:{},
            detailInfo:{}
        }
    },
    created(){
        //1.保存存入的iid
        this.iid = this.$route.params.iid
        //2.根据iid请求详情数据
        getDetail(this.iid).then(
            res => {
                console.log(res)
                const data = res.result
                //获取顶部轮播图数据
                this.topImages = data.itemInfo.topImages

                //获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                //创建店铺信息
                this.shop = new Shop(data.shopInfo)

                //获取商品详细信息
                this.detailInfo = data.detailInfo
            }
        )
    },
    methods:{
        imageLoad(){
            console.log(this.$refs.scroll)
            this.$refs.scroll.refresh();
        }
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    /* height: 100vh; */
}
.content{
    height: 568px
    /* height: calc(100% - 44px) */
}
.detail-nav{
    position: relative;
    z-index: 9;
}
</style>