<template>
  <div>
    <van-nav-bar title="地图" left-arrow @click-left="onClickLeft" />
    <div>
      <!-- 省 -->
      <baidu-map
        v-if="num === 0"
        class="map"
        :center="name"
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :dragging="false"
        :double-click-zoom="false"
        :zoom="11"
      >
        <div v-for="(item, index) in list" :key="index">
          <my-overlay
            @aaasss="aaasss"
            :position="{ lng: item.coord.longitude, lat: item.coord.latitude }"
            :text="`${item.label}  ${item.count}套`"
            :item="item"
            >></my-overlay
          >
        </div>
        <bm-navigation
          type="BMAP_NAVIGATION_CONTROL_LARGE"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-navigation>
      </baidu-map>
      <!-- 区域 |市 -->
      <baidu-map
        v-if="num !== 0"
        class="map"
        :center="obj"
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :dragging="false"
        :double-click-zoom="false"
        :zoom="num === 1 ? 14 : 17"
      >
        <div v-for="(item, index) in sonlist" :key="index">
          <my-overlay
            @aaasss="aaasss"
            :position="{ lng: item.coord.longitude, lat: item.coord.latitude }"
            :text="`${item.label}  ${item.count}套`"
            :item="item"
            :num="num"
            @show="show = true"
            @ffangzi="ffangzi"
            >></my-overlay
          >
        </div>
        <bm-navigation
          type="BMAP_NAVIGATION_CONTROL_LARGE"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-navigation>
      </baidu-map>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
      <van-cell title="房屋列表" center>
        <template #right-icon>
          <div @click="$router.push('/layout/gethome')">更多房源</div>
        </template>
      </van-cell>
      <!-- 卡片 -->
      <div class="qwea">
        <van-card
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :thumb="'http://liufusong.top:8080' + item.houseImg"
          v-for="(item, index) in fangzi"
          :key="index"
        >
          <template #tags>
            <van-tag plain type="danger" v-for="i in item.tags" :key="i">{{
              i
            }}</van-tag>
          </template>
        </van-card>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { areamap } from "@/api";
import MyOverlay from "@/components/MyOverlay.vue";
export default {
  data() {
    return {
      fangzi: [],
      show: false,
      num: 0,
      id: "",
      name: "",
      list: [],
      sonlist: [],
      obj: {
        lng: "",
        lat: "",
      },
      circlePath: {
        radius: 500,
      },
    };
  },
  created() {
    this.id = this.$store.state.chengshi.id;
    this.name = this.$store.state.chengshi.name;
    this.areamap();
  },
  methods: {
    ffangzi(list) {
      this.fangzi = list;
    },
    aaasss(obj, lists) {
      console.log("11111");

      this.obj.lat = obj.latitude;
      this.obj.lng = obj.longitude;
      this.sonlist = lists;
      if (this.num === 2) {
        this.num = 2;
        this.show = true;
      } else {
        this.num++;
      }
    },
    async areamap() {
      const res = await areamap(this.id);
      console.log(res);
      this.list = res.data.body;
    },
    updateCirclePath(e) {
      this.circlePath.center = e.target.getCenter();
      this.circlePath.radius = e.target.getRadius();
    },
    onClickLeft() {
      this.$router.back();
    },
  },
  components: { MyOverlay },
};
</script>
<style scoped lang="less">
/deep/.van-card__thumb {
  width: 106px;
  height: 80px;
}
/deep/.van-card__desc {
  padding: 5px 0px;
}
.van-cell {
  background-color: #ccc;
  height: 65px;
}
.map {
  width: 100%;
  height: 100vh;
}
/deep/.van-nav-bar__content {
  background: #21b97a;
}
/deep/.van-nav-bar__title {
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
