<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="onClickLeft" />
    <div class="fanhyaun">房源信息</div>
    <van-cell
      title="小区名称"
      is-link
      :value="$store.state.searchs.search.name"
      to="/searchs"
    />
    <van-field v-model="zhujin" label="租金" :value="zhujin">
      <template #extra>
        <span class="wsx">￥/月</span>
      </template>
    </van-field>
    <van-field v-model="mianji" label="建筑面积" :value="mianji">
      <template #extra>
        <span class="wsx">m²</span>
      </template></van-field
    >
    <!-- 城市三级 -->
    <van-popup
      v-model="show1"
      position="bottom"
      :style="{ height: '40%' }"
      get-container="huxing"
    >
      <van-area :area-list="areaList1" @confirm="fn1" />
    </van-popup>
    <van-popup
      v-model="show2"
      position="bottom"
      :style="{ height: '40%' }"
      get-container="louceng"
      ><van-area :area-list="areaList2" @confirm="fn2"
    /></van-popup>
    <van-popup
      v-model="show3"
      position="bottom"
      :style="{ height: '40%' }"
      get-container="caoxiang"
      ><van-area :area-list="areaList3" @confirm="fn3"
    /></van-popup>
    <van-cell
      title="户型"
      is-link
      :value="a1"
      id="huxing"
      @click="show1 = true"
    />
    <van-cell
      title="所在楼层"
      is-link
      :value="a2"
      @click="show2 = true"
      id="louceng"
    />
    <van-cell
      title="朝向"
      is-link
      :value="a3"
      @click="show3 = true"
      id="caoxiang"
    />
    <!-- 城市三级 -->

    <van-cell title="房屋标题" />
    <van-field
      v-model="title"
      placeholder="请输入标题 (例如：整租小区名2空室5000元)"
    />

    <van-cell title="房屋图像" />
    <van-uploader v-model="fileList" multiple :after-read="afterRead"/>

    <van-cell title="房屋配置" />

    <van-grid :column-num="5">
      <!-- <van-grid-item
        v-for="(value, index) in arr"
        :key="index"
        :icon="value.icon"
        :text="value.text"
        :class="{ active: value.isshow }"
        @click="qqqq(value)"
      /> -->
<van-grid-item
 v-for="(value, index) in arr"
        :key="index"
         @click="qqqq(value)">
  <template #default>
    <div class="aaaawww" :class="{ active: value.isshow }">
     <van-icon :name="value.icon"></van-icon>
     <p>{{value.text}}</p>
    </div>
  </template>
</van-grid-item>

    </van-grid>
    <div class="color"></div>
    <van-cell title="房屋描述" />
    <van-field
      v-model="miaoshu"
      type="textarea"
      placeholder="请输入房屋描述信息"
      :autosize="{ maxHeight: 100, minHeight: 100 }"
      style="margin-bottom: 50px"
    />
    <div class="ssssss">
      <van-button type="default">取消</van-button>
      <van-button type="primary" @click="tijiao">提交</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { shangchuan, housescondition, housesimage } from '@/api'
export default {
  data () {
    return {
      zhujin: '',
      mianji: '',
      title: '',
      miaoshu: '',
      show1: false,
      show2: false,
      show3: false,
      areaList1: {
        province_list: {},
        city_list: {
          110100: '一室',
          110200: '二室',
          110300: '三室',
          110400: '四室',
          110500: '四室+'
        },
        county_list: {}
      },
      areaList2: {
        province_list: {},
        city_list: {
          110100: '高楼层',
          110200: '中楼层',
          110300: '低楼层'
        },
        county_list: {}
      },
      areaList3: {
        province_list: {},
        city_list: {
          110100: '东',
          110200: '南',
          110300: '西',
          110400: '北',
          110500: '东南',
          110600: '东北',
          110700: '西南',
          110800: '西北'
        },
        county_list: {}
      },
      arr: [
        { text: '衣柜', icon: 'volume-o', isshow: false },
        { text: '洗衣机', icon: 'wap-home-o', isshow: false },
        { text: '空调', icon: 'photo-o', isshow: false },
        { text: '天然气', icon: 'gift-card-o', isshow: false },
        { text: '冰箱', icon: 'manager-o', isshow: false },
        { text: '暖气', icon: 'hot-sale-o', isshow: false },
        { text: '电视', icon: 'flower-o', isshow: false },
        { text: '热水器', icon: 'notes-o', isshow: false },
        { text: '宽带', icon: 'closed-eye', isshow: false },
        { text: '沙发', icon: 'logistics', isshow: false }
      ],
      fileList: [
        { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ],
      obj1: [],
      obj2: [],
      obj3: [],
      roomType: '',
      floor: '',
      oriented: '',
      img: '',
      peitao: '',
      img1: '',
      a1: '请选择',
      a2: '请选择',
      a3: '请选择'

    }
  },
  created () {
    this.housescondition()
  },
  // watch: {
  //   arr: {
  //     deep: true,
  //     handler (value) {
  //       const arr1 = []
  //       value.forEach(item => {
  //         if (item.isshow) {
  //           this.arr1.push(item.text)
  //         }
  //       })
  //       this.peitao = arr1.join('|')
  //     }

  //   }
  // },
  methods: {
    async housescondition () {
      const res = await housescondition(this.$store.state.chengshi.id)
      console.log(res)
      this.obj1 = res.data.body.roomType
      this.obj2 = res.data.body.floor
      this.obj3 = res.data.body.oriented
    },
    aaa (e) {
      e.target.classList.add('active')
      console.log(e)
      console.log(11)
    },
    tijiao () {
      this.shangchuan()
    },
    onClickLeft () {
      this.$router.push('/')
    },
    fn1 (e) {
      this.a1 = e[1].name
      this.show1 = false
      this.obj1.forEach((item) => {
        if (e[1].name === item.label) {
          this.roomType = item.value
        }
      })
    },
    fn2 (e) {
      this.a2 = e[1].name
      this.show2 = false
      this.obj2.forEach((item) => {
        if (e[1].name === item.label) {
          this.floor = item.value
        }
      })
    },
    fn3 (e) {
      this.a3 = e[1].name
      this.show3 = false
      this.obj3.forEach((item) => {
        if (e[1].name === item.label) {
          this.oriented = item.value
        }
      })
    },
    qqqq (item) {
      item.isshow = !item.isshow
      const arr1 = []
      this.arr.forEach(i => {
        if (i.isshow) {
          arr1.push(i.text)
        }
      })
      this.peitao = arr1.join('|')
    },
    afterRead (f) {
      // 此时可以自行将文件上传至服务器
      const data = new FormData()
      data.append('file', f.file)
      this.img = data
      this.housesimage()
    },
    async housesimage () {
      const res = await housesimage(this.img)
      console.log(res)
      this.img1 = res.data.body[0]
    },
    async shangchuan () {
      try {
        const res = await shangchuan(
          {
            title: this.title,
            description: this.miaoshu,
            houseImg: this.img1,
            oriented: this.oriented, // 朝向
            supporting: this.peitao,
            price: this.zhujin,
            roomType: this.roomType, // 几室
            size: this.mianji,
            floor: this.floor, // 楼层
            community: this.$store.state.searchs.search.id // 'AREA|93cbbe43-741d-de54'
          },
          this.$store.state.user
        )
        console.log(res)
        Toast.success('发布房屋成功')
        this.$router.push('/layout/gethome')
      } catch (error) {
        console.log(error)
        Toast.fail('发布房屋失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.active {
  text-align: center;
  color: #21b97a;
  .van-icon {
    font-size: 25px;
  color: #21b97a !important;

  }
}

.aaaawww {
  text-align: center;

  .van-icon {
    font-size: 25px;
    color: rgb(37, 37, 37);

  }
}
.ssssss {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  height: 45px;

  /deep/.van-button {
    height: 45px;
    padding: 0;
    border: 0;
    flex: 1;
  }
}
.color {
  background-color: #f6f5f6;
  height: 20px;
  width: 100%;
}
/deep/.van-grid-item {
  color: #000;
  .van-grid-item__text {
    color: #323233;
    font-size: 12px;
    line-height: 1.5;
    word-break: break-all;
  }
  .van-icon {
    color: #2b2b2b;
    text-align: center;
  }
}
/deep/.van-uploader__wrapper {
  padding: 5px;
}
.van-cell {
  position: relative;
  .aaa {
    position: absolute;
    right: 40px;
    top: 10px;
    color: #a0a0a0;
  }
  .wsx {
    position: absolute;
    right: 18px;
    top: 10px;
    color: #a0a0a0;
  }
}
/deep/.van-cell {
.van-icon {
  color: rgb(128, 128, 128) !important;
  text-align: center;
}
}
.fanhyaun {
  padding: 5px;
  padding-left: 18px;
  line-height: 35px;
  height: 35px;
  // width: 100%;
  color: #21b97a;
  font-size: 14px;
  border-bottom: 1px solid #eee;
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
