import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.devtools = true

/* eslint-disable no-new */
const app = new Vue({
  router,
  ...App
}).$mount('#app')

export { app }
