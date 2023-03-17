<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-index-anchor index="#" class="asdf">当前城市</van-index-anchor>
    <van-cell :title="$store.state.chengshi.name" class="fsfa" />
    <van-index-bar
      :index-list="indexList"
      :sticky="false"
      highlight-color="#21b97a"
    >
      <van-index-anchor
        :index="index"
        v-for="(item, index) in cities"
        :key="index"
      >
        {{ index }}
        <van-cell
          :title="i.label"
          v-for="(i, index) in item"
          :key="index"
          @click="chengshi(i)"
        />
      </van-index-anchor>
    </van-index-bar>
    <van-popup v-model="show" round overlay-class="my-class"
      >暂时没有数据哦</van-popup
    >
  </div>
</template>

<script>
import { getIndexBar } from '@/api'
export default {
  name: 'indexBar',
  data () {
    return {
      cities: {},
      indexList: [
        '热门城市',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      show: false
    }
  },
  mounted () {
    this.getIndexBar()
  },
  methods: {
    // 获取热门城市
    // async areahot () {
    //   const res = await areahot()
    //   this.re = res.data.body
    // },
    // 获取城市列表
    getIndexBar () {
      getIndexBar(1).then((res) => {
        const cities = res.data.body
        const citName = {}
        this.indexList.forEach((item) => {
          citName[item] = []
          cities.forEach((el) => {
            const a = el.short.substr(0, 1)
            const b = a.toLocaleUpperCase()

            if (b === item) {
              if (
                el.label === '北京' ||
                el.label === '上海' ||
                el.label === '深圳' ||
                el.label === '广州'
              ) {
                citName['热门城市'].push(el)
              } else {
                citName[item].push(el)
              }
            }
          })
        })
        for (const k in citName) {
          if (citName[k].length === 0) {
            citName[k].push({ label: '暂无数据' })
          }
        }
        this.cities = citName
      })
    },
    onClickLeft () {
      this.$router.back()
    },
    chengshi (a) {
      if (
        a.label === '北京' ||
        a.label === '上海' ||
        a.label === '深圳' ||
        a.label === '广州'
      ) {
        const obj = {
          name: a.label,
          id: a.value
        }
        this.$store.commit('getchengshi', obj)
        this.$router.back()
      } else {
        this.show = true
        setInterval(() => {
          this.show = false
        }, 1100)
      }
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-nav-bar__content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #21b97a;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
/deep/.van-index-bar__index {
  margin: 3.2px 0;
}
.asdf {
  margin-top: 50px;
}
.asdf {
  span {
    margin-left: 15px;
  }
}
/deep/.van-popup {
  width: 120px;
  height: 65px;
  text-align: center;
  font-size: 12px;
  line-height: 65px;
  background-color: #eee;
}
</style>
