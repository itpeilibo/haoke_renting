<template>
  <div>
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/gethome">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/layout/getnews">咨询</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/layout/myhome">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
