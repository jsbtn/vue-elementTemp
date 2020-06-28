import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//全局样式
import './assets/scss/main.scss'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
