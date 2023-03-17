<template>
  <div>
    <van-nav-bar
      fixed
      :title="xinxi.community"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 背景 -->
    <div class="bg"><img :src="'http://liufusong.top:8080' + bg" alt="" /></div>
    <!-- 列表 -->
    <div class="liebiao">
      <h3>{{ xinxi.title }}</h3>

      <van-tag type="danger" v-for="item in xinxi.tags" :key="item">{{
        item
      }}</van-tag>
      <hr />
      <div class="dfbj">
        <div>
          <h3>{{ xinxi.price }}/月</h3>
          <p>租金</p>
        </div>
        <div>
          <h3>{{ xinxi.roomType }}</h3>
          <p>房型</p>
        </div>
        <div>
          <h3>{{ xinxi.size }}平米</h3>
          <p>面积</p>
        </div>
      </div>
      <hr />
      <div class="wsww">
        <div>
          <p><span class="weee">装修：</span>精装</p>
          <p><span>楼层：</span>{{ xinxi.floor }}</p>
        </div>
        <div>
          <p><span>朝向：</span>{{ xinxi.oriented }}</p>
          <p><span>类型：</span>普通住宅</p>
        </div>
      </div>
    </div>
    <div class="wsxd"></div>
    <div>
      <div class="weerww">&nbsp; 小区：天山星城</div>
      <!-- <baidu-map class="map" :center="{ lng: 116.404, lat: 39.915 }" :zoom="15"> -->
      <!-- </baidu-map> -->
      <div class="wsxcd">
        <baidu-map
          class="map"
          :center="{
            lng: xinxi.coord.longitude,
            lat: xinxi.coord.latitude
          }"
          :zoom="17"
        >
          <bm-info-window
            :position="{
              lng: xinxi.coord.longitude,
              lat: xinxi.coord.latitude
            }"
            :show="true"
            width='0'
            height='0'
          >
            <p v-text="xinxi.community"></p>
          </bm-info-window>
        </baidu-map>
        <div class="qwersss">房屋配套</div>

        <div class="vvff">
          <div v-for="item in xinxi.supporting" :key="item" class="weebbb">
            <van-icon name="smile-comment-o" />
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wsxd"></div>
    <div class="qwersss">房源概括</div>
    <!-- 底部 -->
    <div class="wwaafa">
      <van-button type="default" class="btn1" @click="shouchang">收藏</van-button>
      <van-button type="default" class="btn2">在线咨询</van-button>
      <van-button type="primary" class="btn3">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import { gethousesfangwu, userfavorites } from '@/api'
import { Toast } from 'vant'
export default {
  name: 'fazi',
  data () {
    return {
      xinxi: {},
      bg: ''
    }
  },
  async created () {
    const res = await gethousesfangwu(this.$route.query.item.houseCode)
    this.xinxi = res.data.body
    this.bg = this.$route.query.item.houseImg
  },
  methods: {
    shouchang () {
      this.userfavorites()
    },
    onClickLeft () {
      this.$router.back()
    },
    async userfavorites () {
      try {
        const res = await userfavorites(
          this.$store.state.user,
          this.xinxi.houseCode
        )
        console.log(res)
        Toast.success('收藏成功')
      } catch (error) {
        Toast.fail('操作失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.btn1 {
  flex: 1;
}
.btn2 {
  flex: 1;
}
.btn3 {
  flex: 1;
}
.wwaafa {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.vvff {
  display: flex;
}
.weebbb {
  // display: flex;
  float: left;
  margin: 12px;
}
.qwersss {
  line-height: 1.5;
  border-bottom: #ccc 1px solid;
  margin: 10px;
}
.wsxcd {
  .map {
    width: 414px;
    height: 170px;
  }
}
.wsxd {
  background-color: #eee;
  height: 10px;
}
.liebiao {
  html {
    line-height: 1.4;
  }
  padding: 15px;
  background: #fff;
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  .wsww {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    span {
      color: rgb(143, 142, 142);
    }
  }
  .dfbj {
    display: flex;
    justify-content: space-around;
    div {
      text-align: center;
    }
    h3 {
      color: red;
    }
    p {
      color: #ccc;
    }
  }
}
.weerww {
  margin: 7px 0;
  font-size: 13px;
}
/deep/.van-tag {
  color: #39becd;
  background: #e1f5f8;
  margin-right: 5px;
}
.bg {
  height: 252px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}
/deep/.van-nav-bar__content {
  background: #21b97a;
  color: #fff;
}
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #f7f8fa;
  font-weight: 500;
  font-size: 16px;
}
/deep/.van-icon {
  color: #fff;
}
</style>
