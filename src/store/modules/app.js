import * as types from '../mutation-types'

const state = {
  toggle: {
    navbar: {
      opened: false,
      hidden: false
    },
    popUpLocked: false
  },
  device: {
    isMobile: false
  }
}

const getters = {
  navbar: state => state.toggle.navbar,
  popUpLock: state => state.toggle.popUpLocked,
  device: state => state.device
}

const actions = {
  async toggleNavbar ({ commit },
    status) {
    commit(types.TOGGLE_NAVBAR, status)
  },

  async toggleDevice ({ commit },
    device) {
    commit(types.TOGGLE_DEVICE, device)
  },

  async togglePopUpLock ({ commit },
    status) {
    commit(types.TOGGLE_POPUP_LOCK, status)
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
  },

  [types.TOGGLE_NAVBAR] (state, status) {
    state.toggle.navbar.opened = typeof status.opened === 'undefined' ? state.toggle.navbar.opened : status.opened
    state.toggle.navbar.hidden = typeof status.hidden === 'undefined' ? state.toggle.navbar.hidden : status.hidden
  },

  [types.TOGGLE_POPUP_LOCK] (state, status) {
    state.toggle.popUpLocked = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
