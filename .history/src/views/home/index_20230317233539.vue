<template>
  <div>
    <!-- 头部固定 -->
    <Search />
    <!-- 轮播 -->
    <div class="my-swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="'http://liufusong.top:8080' + image.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中间nav区域 -->
    <div>
      <van-grid icon-size="50px" :border="false" class="my-grid">
        <van-grid-item
          to="/layout/gethome"
          :icon="require('@/assets/q1.png')"
          text="整租"
        />
        <van-grid-item
          to="/layout/gethome"
          :icon="require('@/assets/q2.png')"
          text="合租"
        />
        <van-grid-item
          :icon="require('@/assets/q3.png')"
          text="地图找房"
          to="/baidu"
        />
        <van-grid-item
          :icon="require('@/assets/q1.png')"
          text="去出租"
          @click="torouter"
        />
      </van-grid>
    </div>
    <!-- 租房小组 -->
    <van-cell title="租房小组" class="zufang" />
    <div class="bgc">
      <van-grid
        :column-num="2"
        direction="horizontal"
        gutter="10px"
        icon-size="40px"
      >
        <van-grid-item
          v-for="item in vangrid"
          :key="item.id"
          :icon="'http://liufusong.top:8080' + item.imgSrc"
          :text="item.title + '\n' + item.desc"
          class="my-van-grid-item"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getswiper, RentHouse } from '@/api'
import Search from '@/components/search.vue'
export default {
  name: 'home',
  data () {
    return {
      images: [],
      vangrid: [],
      value: ''
    }
  },
  created () {
    this.getswiper()
    this.RentHouse()
  },
  methods: {
    torouter () {
      if (this.$store.state.user) {
        this.$router.push('/Rental')
      } else {
        this.$router.push('/login')
      }
    },
    async getswiper () {
      const res = await getswiper()
      this.images = res.data.body
    },
    async RentHouse () {
      const res = await RentHouse('北京')
      this.vangrid = res.data.body
    }
  },
  components: { Search }
}
</script>
<style scoped lang="less">
/deep/.van-swipe-item {
  height: 212px;
  img {
    width: 100%;
    height: 212px;
  }
}
/deep/.van-search {
  z-index: 10000;
  position: fixed;
  top: 10px;
  left: 60px;
  background-color: rgba(0, 0, 0, 0);
}
// /deep/.van-grid {
//   width: 100%;
//   height: 122.4px;
// }
.my-grid {
  width: 100%;
  height: 122.4px;
}
.zufang {
  background-color: #eee;
}
// /deep/.van-grid-item__content {
//   display: flex;
//   justify-content: space-between;
// }
.bgc {
  // display: flex;
  // justify-content: space-around;
  // // padding: 20px;
  // margin: 5px;
  padding-bottom: 10px;
  background-color: #eee;
}
/deep/.van-grid-item__content {
  justify-content: space-around;
}
</style>
