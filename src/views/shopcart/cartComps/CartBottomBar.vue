<template>
    <div class="bottom-bar">
        <check-button class="check-all" :is-checked="isCheckAll" @click.native="checkClick"></check-button>
        <span>全选</span>
        <span class="total-price">合计：￥{{ totalPrice }}</span>
        <span class="calculate" @click="buyClick">去计算&nbsp({{ checkedLength }})</span>
        <toast :is-empty="isEmpty" :empty-msg="emptyMsg"></toast>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapState} from 'vuex'

import Toast from 'components/common/toast/Toast'

export default {
    name:'CartBottomBar',
    data(){
        return{
            emptyMsg:'',
            isEmpty:false
        }
    },
    components:{
        CheckButton,
        Toast
    },
    computed:{
        ...mapState(['cartList']),
        totalPrice(){
            return this.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkedLength(){
            return this.cartList.filter(item => {
                return item.checked
            }).length
        },
        isCheckAll(){
            if(this.cartList.length == 0){
                return false
            }
            return !this.cartList.find(item => {
                return !item.checked
            })
        }
    },
    methods:{
        checkClick(){
            if(this.isCheckAll){
                this.cartList.forEach(item => item.checked = false)
            }else{
                this.cartList.forEach(item => item.checked = true)
            }
        },
        buyClick(){
            if(!this.cartList.find(item => item.checked)){
                this.isEmpty = true
                this.emptyMsg = '请选择需要购买的商品'
            }
            setTimeout(() => {
                this.isEmpty = false
                this.emptyMsg = ''
            },2000)
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    background-color: #eee;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
}
.check-all{
    height: 20px;
    width: 20px;
    margin: 0 5px 0 10px;
}
.total-price{
    margin-left: 20px;
    flex: 1;
}
.calculate{
    background-color:red;
    width: 90px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
}
</style>