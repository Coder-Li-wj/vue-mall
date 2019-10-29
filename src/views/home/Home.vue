<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
        <home-swiper v-bind:banners="banners"></home-swiper>
        <recommend-view v-bind:recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <ul>
            <li>list--1</li>
            <li>list--2</li>
            <li>list--3</li>
            <li>list--4</li>
            <li>list--5</li>
            <li>list--6</li>
            <li>list--7</li>
            <li>list--8</li>
            <li>list--9</li>
            <li>list--10</li>
            <li>list--11</li>
            <li>list--12</li>
            <li>list--13</li>
            <li>list--14</li>
            <li>list--15</li>
            <li>list--16</li>
            <li>list--17</li>
            <li>list--18</li>
            <li>list--19</li>
            <li>list--20</li>
            <li>list--21</li>
            <li>list--22</li>
            <li>list--23</li>
            <li>list--24</li>
            <li>list--25</li>
            <li>list--26</li>
            <li>list--27</li>
            <li>list--28</li>
            <li>list--29</li>
            <li>list--30</li>
            <li>list--31</li>
            <li>list--32</li>
            <li>list--33</li>
            <li>list--34</li>
            <li>list--35</li>
            <li>list--36</li>
            <li>list--37</li>
            <li>list--38</li>
            <li>list--39</li>
            <li>list--40</li>
            <li>list--41</li>
            <li>list--42</li>
            <li>list--43</li>
            <li>list--44</li>
            <li>list--45</li>
            <li>list--46</li>
            <li>list--47</li>
            <li>list--48</li>
            <li>list--49</li>
            <li>list--50</li>
        </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './homeComps/HomeSwiper'
import RecommendView from './homeComps/RecommendView'
import FeatureView from './homeComps/FeatureView'

import {getHomeMultidata} from 'network/home.js'

export default {
    name:'home',
    components:{ //tip:记得NavBar要写在对象里面！！！
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView
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
#home{
    padding-top: 44px;
}
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
</style>