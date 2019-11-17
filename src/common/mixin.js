import {debounce} from '../common/utils'
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null
        }
    },
    mounted() {  
        //这个地方img标签确实被挂载了，但是其中的图片还没有占据高度
    
        //this.$refs.scroll.refresh对这个函数进行防抖操作
        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    
        //对监听的事件进行保存
        this.itemImgListener = () => {
          newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
      }
}

export const BackTopMixin = {
  data(){
    return {
      isShowBackTop:false,//判断是否吸顶
    }
  },
  components:{
    BackTop
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0,500);
    },
  }
}