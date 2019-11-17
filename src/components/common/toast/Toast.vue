<template>
    <div class="toast">
        <div class="toast-item" v-show="show">{{ message }}</div>
        <div class="toast-item" v-show="isEmpty">{{ emptyMsg }}</div>
    </div>
</template>

<script>
export default {
    name:"Toast",
    props:{
        message:{
            type:String,
            default:''
        },
        show:{
            type:Boolean,
            default:false   
        },
        emptyMsg:{
            type:String,
            default:''
        },
        isEmpty:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
.toast-item{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgb(0,0,0,.7);
    color: #fff;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    padding:6px 10px;
}
</style>