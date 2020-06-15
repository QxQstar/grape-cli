import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dmallmaxUI from 'dmallmax-ui'
import 'dmallmax-ui/dist/DMALLMAX.css';
import './filters/common/index.js'
import './styles/index.less'

Vue.use(dmallmaxUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    Vue.prototype.$rootApp = this
  },
  render: h => h(App)
}).$mount('#app')
