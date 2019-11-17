<template>
    <div id="detail">
        <nav-bar>
            <div slot="center"  class="title">
                <div v-for='(item, index) in title' :key="index" 
                class='title-item' 
                :class="{active: index === currentIndex}"
                @click="titleClick(index)">
                {{ item }}
                </div>
            </div>
            <div slot="left" class="back" @click="backClick">
                <img src="../../../assets/img/common/back.svg" alt="">
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex : 0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
            this.$emit('titleClick', index)
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
    font-size: 13px
}
.back img{
    margin-top: 12px
}
.active{
    color:var(--color-high-text)
}
</style>