import { resolve } from "_any-promise@1.3.0@any-promise";

export default{
    addCart(context,payload){
        return new Promise((resolve, reject) => {
                /*方法1：用for语句添加商品*/
            // let OldProduct = null
            // for(let item of state.cartList){
            //     if(item.iid == payload.iid){
            //         OldProduct = paylaod
            //     }
            // }
            /*方法2:用数组的find()方法添加商品*/
            let OldProduct = context.state.cartList.find(item => item.iid == payload.iid)

            if(OldProduct){//通过以上其中一种方法获得Oldproduct，判断Oldproduct，并设置商品数量
                context.commit('addCounter', OldProduct)
                resolve('商品添加成功 ~')
            }else{
                payload.count = 1
                context.commit('addToCart',payload)
                resolve('商品添加成功 ~')
            }
        })
    }
}