<template>
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key='index'>
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color:#222;
}
.info-price{
    margin-top: 10px
}
.n-price{
    color: var(--color-high-text);
    font-size: 24px;
}
.o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.discount{
    background-color: var(--color-high-text);
    color: #FFF;
    border-radius: 10px;
    padding: 2px 5px;
    margin-left: 5px;
    font-size: 14px;
}
.info-other{
    display: flex;
    margin-top: 15px;
    font-size: 14px;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc
}
.info-service{
    display: flex;
    justify-content: space-between;
    padding:15px 0;
}
.info-service img{
    width: 14px;
}
.info-service-item{
    font-size: 12px;
    color:#222;
}
</style>