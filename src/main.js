import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/axios'

Vue.prototype.$http=axios
Vue.config.productionTip = false
document.title = '欢迎登录'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
