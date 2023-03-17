import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from '@/plugins/vant'
import store from './store'
import BaiduMap from 'vue-baidu-map'
Vue.use(vant)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
