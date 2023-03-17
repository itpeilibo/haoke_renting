<template>
  <div>
    <div class="my-div1" v-if="!user">
      <img src="@/assets/bg.png" alt="" id="my-bg" />
      <div class="my-div">
        <div class="my-div2"><img src="@/assets/avatar.png" alt="" /></div>
        <p>游客</p>
        <van-button type="primary" size="small" to="/login">去登录</van-button>
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" to="/login" />
        <van-grid-item icon="home-o" text="我的出租" to="/login" />
        <van-grid-item icon="clock-o" text="看房记录" to="/login" />
        <van-grid-item icon="notes-o" text="成为房主" to="/login" />
        <van-grid-item icon="friends-o" text="个人资料" to="/login" />
        <van-grid-item icon="service-o" text="练习我们" />
      </van-grid>
      <div id="imgfather"><img src="@/assets/join.png" alt="" /></div>
    </div>
    <!-- ------------ -->
    <div class="my-div1" v-else>
      <img src="@/assets/avatar1.png" alt="" id="my-bg" />
      <div class="my-div">
        <div class="my-div2"><img src="@/assets/avatar1.png" alt="" /></div>
        <p>裴丽波</p>
        <van-button type="primary" size="small" @click="tuichu" class="tuichu"
          >退出</van-button
        >
        <h6>编辑个人资料</h6>
      </div>
      <van-grid :column-num="3" class="qwer">
        <van-grid-item icon="star-o" text="我的收藏" @click="torouter1" />
        <van-grid-item icon="home-o" text="我的出租" @click="torouter" />
        <van-grid-item icon="clock-o" text="看房记录" to="/login" />
        <van-grid-item icon="notes-o" text="成为房主" to="/login" />
        <van-grid-item icon="friends-o" text="个人资料" to="/login" />
        <van-grid-item icon="service-o" text="练习我们" />
      </van-grid>
      <div id="imgfather1"><img src="@/assets/join.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    tuichu() {
      // this.$router.push('./myhome')
      this.$store.commit("getToken", null);
    },
    torouter() {
      if (this.$store.state.user) {
        this.$router.push("/MyRent");
      } else {
        this.$router.push("/login");
      }
    },
    torouter1() {
      if (this.$store.state.user) {
        this.$router.push("/MyCollection");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped lang="less">
.qwer {
  position: fixed;
  top: 210px;
  left: 20px;
}
.tuichu {
  border-radius: 30px;
  color: #fff;
  padding: 2px 15px;
  background: #21b97a;
  font-size: 12px;
}
#my-bg {
  width: 100%;
}
/deep/.van-grid {
  margin-top: 120px;
}
.my-div1 {
  position: relative;
  #imgfather {
    margin: 10px 10px;
    img {
      width: 100%;
    }
  }
  #imgfather1 {
    margin: 110px 10px 0;
    img {
      width: 100%;
    }
  }

  .my-div {
    position: absolute;
    left: 49px;
    top: 129px;
    width: 310px;
    height: 140px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 3px #ddd;
    padding-top: 38px;
    text-align: center;
    .my-div2 {
      position: absolute;
      top: -35px;
      left: 120px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      box-shadow: 0 0 10px 3px #ddd;
      background-color: #fff;
      text-align: center;
      img {
        width: 90%;
        margin-top: 3px;
      }
    }
    .van-button {
      border-radius: 7px;
      font-size: 13px;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
    }
  }
}
</style>
