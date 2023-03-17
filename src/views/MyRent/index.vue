<template>
  <div>
    <van-nav-bar title="我的出租" left-arrow @click-left="onClickLeft" />

 <div v-if="list.length">
          <van-card
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="'http://liufusong.top:8080' + item.houseImg"
        v-for="(item, index) in list"
        :key="index"
        @click="fangzi(item)"
      >
        <template #tags>
          <van-tag plain type="danger" v-for="i in item.tags" :key="i">{{
            i
          }}</van-tag>
        </template>
      </van-card>
 </div>
      <van-loading size="24px" vertical v-else>加载中...</van-loading>
  </div>
</template>

<script>
import { getauserhouses } from '@/api'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getauserhouses()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getauserhouses () {
      const res = await getauserhouses(this.$store.state.user)
      console.log(res)
      this.list = res.data.body
    }
  }
}
</script>

<style scoped lang="less">

/deep/.van-card__thumb {
  width: 106px;
  height: 80px;
}
/deep/.van-card__desc {
  padding: 5px 0px;
}
/deep/.van-tag {
  color: #39becd;
  background: #e1f5f8;
  margin-right: 5px;
}
/deep/.van-nav-bar__content {
  background: #21b97a;
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
