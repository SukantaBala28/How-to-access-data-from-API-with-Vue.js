import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.router = router

Vue.config.productionTip = false

new Vue({
  router: Vue.router,
  render: h => h(App),
}).$mount('#app')
