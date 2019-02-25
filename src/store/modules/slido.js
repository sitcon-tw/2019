import * as types from '../mutation-types'

const state = {
  slido: {
    opened: false,
    link: ''
  }
}

const getters = {
  slido: state => state.slido
}

const actions = {
  async toggleSlido ({ commit },
    status) {
    commit('TOGGLE_SLIDO', status)
  },

  async changeSlidoLink ({ commit },
    link) {
    commit('SLIDO_LINK', link)
  }
}

const mutations = {
  [types.TOGGLE_SLIDO] (state, status) {
    state.slido.opened = status
  },

  [types.SLIDO_LINK] (state, link) {
    state.slido.link = link || '/2019/noslido'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
