<template>
  <div>
    <van-search v-model="value" placeholder="请输入小区或者地址" />
    <van-cell
      :title="`${item.cityName}-${item.areaName}-${item.communityName}`"
      v-for="(item, index) in list"
      :key="index"
      @click="click1(item)"
    />
  </div>
</template>

<script>
import { areacommunity } from '@/api'

export default {
  data () {
    return {
      value: '',
      list: []
    }
  },
  methods: {
    click1 (item) {
      this.$store.commit('getsraechs', item)
      this.$router.push({
        path: '/Rental'
      })
    },
    async areacommunity () {
      const res = await areacommunity({
        name: this.value,
        id: this.$store.state.chengshi.id
      })
      this.list = res.data.body
      console.log(res)
    }
  },
  watch: {
    value: {
      handler () {
        this.areacommunity()
      }
    }
  }
}
</script>

<style></style>
