import Vue from 'vue'
import Gravatar from 'vue-gravatar'
import App from './App'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab)
library.add(fas)
library.add(far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('v-gravatar', Gravatar)

require('@/assets/images/favicon.ico')

Vue.config.devtools = true

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')

export { app }
