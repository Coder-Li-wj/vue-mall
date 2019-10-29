<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banners" v-bind:key="item.image">
                <a v-bind:href="item.link">
                    <img v-bind:src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>

</style>

