<template>
  <div id="app">
  <router-view></router-view>
  <main-bar-item></main-bar-item>    
  </div>
</template>

<script>
import MainBarItem from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
   MainBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
