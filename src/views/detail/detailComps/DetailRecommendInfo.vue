<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
  </div>
</template>

<script>
	export default {
		name: "DetailRecommendInfo",
    components: {
    },
    props: {
		  recommendList: {
        type: Array,
        default(){
          return []
        }
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
