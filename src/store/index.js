import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import session from './modules/session'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    session
  }
})

export default store
