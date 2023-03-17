<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        label="账号"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model.number="user.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" color="#21b97a"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="zhuce">还没有账号，去注册~~~</div>
  </div>
</template>

<script>
import { userlogin } from '@/api'
export default {
  data () {
    return {
      user: {
        username: 'hzhmqd',
        password: 123456
      },
      rules: {
        password: [
          {
            required: true,
            message: '请填写密码'
          }
        ],
        username: [
          {
            required: true,
            message: '请填写手机号'
          }
        ]
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      try {
        const res = await userlogin(this.user)
        console.log(res)
        this.$store.commit('getToken', res.data.body.token)
        this.$router.back()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-nav-bar__content {
  background: #21b97a;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
/deep/.van-cell {
  height: 70px;
  .van-field__label {
    line-height: 50px;
  }
  .van-field__control {
    line-height: 50px;
  }
}
.zhuce {
  text-align: center;
  margin-top: 30px;
  font-size: 15px;
  color: rgb(158, 158, 158);
}
</style>
