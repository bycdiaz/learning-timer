import Vue from 'vue'
import App from './App.vue'
import router from './Router.js'
import './assets/css/reset.css'
import './assets/css/App.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
