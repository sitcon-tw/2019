import _ from 'lodash'
import sessionData from '../../../static/json/agenda.json'
import * as types from '../mutation-types'

const util = {
  parseSession (sessions) {
    let result = sessions.slice()
    return _.map(result, data => ({
      ...data,
      start: new Date(data.start).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false }),
      end: new Date(data.end).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false })
    }))
  },
  getDesktopSession (sessions) {
    let result = util.parseSession(sessions)
    result = util.filterAndJoinBlankBlock(result)
    return result.map(ele => {
      ele.start = util.formatTime(ele.start)
      ele.end = util.formatTime(ele.end)

      return ele
    })
  },
  getMobileSession (sessions) {
    let result = _.groupBy(util.parseSession(sessions), data => data.start)
    let keys = Object.keys(result)
    let value = Object.values(result)
    return keys.map((key, index) => ({
      time: util.formatTime(new Date(key)),
      sessions: value[index]
    })).sort((a, b) => {
      return a.time > b.time ? 1 : -1
    })
  },
  times (sessions) {
    let result = []
    let data = util.parseSession(sessions)
    let start = _.map(data, 'start')
    let end = _.map(data, 'end')
    result = _.concat(result, start, end)
    result = _.uniqBy(result, util.formatTime)
    return result.slice().sort().map(data => util.formatTime(data))
  },
  timeLine (sessions) {
    let result = util.parseSession(sessions)
    let start = _.map(result, 'start')
    result = _.uniqBy(start.sort(), util.formatTime)
    return result.slice().sort().map(data => util.formatTime(data))
  },
  timeTo2Dig (time) {
    if (time / 10 < 1) return `0${time}`
    else return `${time}`
  },
  formatTime (date) {
    return `${util.timeTo2Dig(new Date(date).getHours())}:${util.timeTo2Dig(new Date(date).getMinutes())}`
  },
  filterAndJoinBlankBlock (session) {
    let result = session
    // R0
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'R0',
      'broadcast': null,
      'start': '2019-03-24T12:00:00+08:00',
      'end': '2019-03-24T12:30:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    // R1
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'R1',
      'broadcast': null,
      'start': '2019-03-24T12:00:00+08:00',
      'end': '2019-03-24T12:30:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    // R2
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'R2',
      'broadcast': null,
      'start': '2019-03-24T13:30:00+08:00',
      'end': '2019-03-24T14:10:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    // R3
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'R3',
      'broadcast': null,
      'start': '2019-03-24T12:00:00+08:00',
      'end': '2019-03-24T12:30:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'R3',
      'broadcast': null,
      'start': '2019-03-24T14:20:00+08:00',
      'end': '2019-03-24T15:00:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    // S
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733602',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T11:10:00+08:00',
      'end': '2019-03-24T11:50:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733601',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T12:00:00+08:00',
      'end': '2019-03-24T12:30:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733602',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T12:40:00+08:00',
      'end': '2019-03-24T14:10:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733603',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T14:20:00+08:00',
      'end': '2019-03-24T15:00:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733604',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T15:40:00+08:00',
      'end': '2019-03-24T16:20:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })
    result.push({
      'id': '97f3ae3d-100e-4f78-87eb-61795a733604',
      'zh': {
        'title': ''
      },
      'summary': '',
      'type': 'BREAK',
      'room': 'S',
      'broadcast': null,
      'start': '2019-03-24T16:30:00+08:00',
      'end': '2019-03-24T17:10:00+08:00',
      'sli.do': '',
      'beginner': '',
      'speaker': {
        'name': '',
        'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
        'bio': ''
      }
    })

    return result
  }
}

const state = {
  sessions: {
    desktop: [],
    mobile: []
  },
  timeTable: {
    desktop: [],
    mobile: []
  }
}

const getters = {
  sessions: state => state.sessions,
  timeTable: state => state.timeTable
}

const actions = {
  async initSessionData ({ commit }) {
    commit('SESSIONS',
      {
        desktop: await util.getDesktopSession(sessionData),
        mobile: await util.getMobileSession(sessionData)
      }
    )
  },

  async initSessionTimeTable ({ commit }) {
    commit('TIME_TABLE',
      {
        desktop: await util.times(sessionData),
        mobile: await util.timeLine(sessionData)
      }
    )
  }
}

const mutations = {
  [types.SESSIONS] (state, sessions) {
    state.sessions.desktop = typeof sessions.desktop === 'undefined' ? state.session.desktop : sessions.desktop
    state.sessions.mobile = typeof sessions.mobile === 'undefined' ? state.session.mobile : sessions.mobile
  },

  [types.TIME_TABLE] (state, timeTable) {
    state.timeTable.desktop = typeof timeTable.desktop === 'undefined' ? state.session.desktop : timeTable.desktop
    state.timeTable.mobile = typeof timeTable.mobile === 'undefined' ? state.session.mobile : timeTable.mobile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
