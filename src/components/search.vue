<template>
  <div>
    <van-search
      v-model="value"
      show-action
      :label="$store.state.chengshi.name"
      placeholder="请输入搜索关键词"
      @click="onSearch1"
      disabled
    >
      <template #action>
        <div @click="$router.push('/baidu')"><van-icon name="location-o" /></div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
      // chengshi: {
      //   id: 'AREA|88cff55c-aaa4-e2e0',
      //   name: '北京'
      // }
    }
  },
  created () {
    this.chengshi = !this.$route.query ? this.chengshi : this.$route.query
  },
  methods: {
    onSearch1 () {
      this.$router.push({
        name: 'IndexBar'
      })
      this.$emit('iddd', this.chengshi.id)
    }
  }
}
</script>

<style scoped lang="less"></style>
