<template>
  <bm-overlay
    ref="customOverlay"
    :class="{ sample: true }"
    pane="labelPane"
    @draw="draw"
  >
    <div v-text="text" @click="handleClick"></div>
  </bm-overlay>
</template>

<script>
import { areamap, gethouses } from "@/api";
export default {
  props: ["text", "position", "item", "num"],
  data() {
    return {
      obj: {
        arr: [],
        coord: {},
      },
    };
  },
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload();
      },
      deep: true,
    },
  },
  methods: {
    async handleClick() {
      if (this.num === 2) {
        this.$emit("show");
        const resa = await gethouses({
          cityId: this.$store.state.chengshi.id,
          area: this.item.value,
        });
        this.$emit("ffangzi", resa.data.body.list);
        return;
      }
      console.log(this.item.coord);
      this.areamap();
    },
    async areamap() {
      const res = await areamap(this.item.value);
      // console.log(res.data.body)
      this.obj.arr = res.data.body;
      this.obj.coord = this.item.coord;
      this.$store.commit("getsonchengshi", this.obj);
      this.$emit("aaasss", this.item.coord, res.data.body);
    },
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - 60 + "px";
      el.style.top = pixel.y - 20 + "px";
    },
  },
};
</script>

<style>
.sample {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* line-height: 40px; */
  /* background: #21b97a(0, 0, 0, 0.5); */
  background-color: #21b97a;
  border: #fff 1px solid;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 12px;
  position: absolute;
}
.sample.active {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
}
</style>
