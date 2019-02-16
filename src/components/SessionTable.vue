<template>
  <div>
    <div v-if="!isMobile" class="session-table">
      <div
        v-for="room in rooms"
        :key="room"
        class="session session-room"
        :style="{
          'grid-column-start': `${room}`,
          'grid-row-start': 1
        }"
      >
        <p>{{ room }}</p>
      </div>
      <div
        v-for="(time, index) in timeLine"
        :key="`time-${time}`"
        class="session session-time"
        :style="{
          'grid-row-start': `${times.indexOf(time) + 2}`,
          'grid-row-end': `${times.indexOf(timeLine[index]) + 2}`
        }"
      >
        <p>{{ time }}</p>
      </div>
      <session-box
        v-for="(session, index) in sessions"
        :key="`session-${index}`"
        :data="session"
        :class="{ 'blank-cover': session.type === 'BREAK' }"
        :isMobile="isMobile"
        :style="{
          'grid-column-start': `${session.broadcast ? 'R2' : session.room}`,
          'grid-column-end': `${session.broadcast ? 'END' : `${rooms[rooms.indexOf(session.room) + 1]}`}`,
          'grid-row-start': `${times.indexOf(formatTime(session.start)) + 2}`,
          'grid-row-end': `${times.indexOf(formatTime(session.end)) + 2}`
        }"
      />
    </div>
    <div v-else class="session-table">
      <session-box-mobile
        v-for="(session, index) in mobileSession"
        :key="`session-${index}`"
        :data="session"
        :isMobile="isMobile"
      />
    </div>
    <session-popup v-if="popupData" :data="popupData" />
  </div>
</template>

<script>
import SessionBox from './SessionBox'
import SessionBoxMobile from './SessionBoxMobile'
import SessionPopup from './SessionPopup'
import _ from 'lodash'

export default {
  components: {
    SessionBox,
    SessionBoxMobile,
    SessionPopup
  },
  props: {
    sessionData: {
      type: Array
    }
  },
  data () {
    return {
      rooms: ['R2', 'R0', 'R1', 'R3', 'S'],
      popupData: null,
      isMobile: false
    }
  },
  computed: {
    sessions: function () {
      return this.parseSession()
    },
    mobileSession: function () {
      let result = _.groupBy(this.sessions, data => data.start)
      let keys = Object.keys(result)
      let value = Object.values(result)
      return keys.map((key, index) => ({
        time: this.formatTime(new Date(key)),
        sessions: value[index]
      })).sort((a, b) => {
        return a.time > b.time ? 1 : -1
      })
    },
    times: function () {
      let result = []
      let data = this.parseSession()
      let start = _.map(data, 'start')
      let end = _.map(data, 'end')
      result = _.concat(result, start, end)
      result = _.uniqBy(result, this.formatTime)
      return result.slice().sort().map(data => this.formatTime(data))
    },
    timeLine: function () {
      let result = this.parseSession()
      let start = _.map(result, 'start')
      result = _.uniqBy(start.sort(), this.formatTime)
      return result.slice().sort().map(data => this.formatTime(data))
    }
  },
  methods: {
    parseSession () {
      let result = this.sessionData.slice()
      if (!this.isMobile) result = this.filterAndJoinBlankBlock(result)
      return _.map(result, data => ({
        ...data,
        start: new Date(data.start).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false }),
        end: new Date(data.end).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false })
      }))
    },
    timeTo2Dig (time) {
      if (time / 10 < 1) return `0${time}`
      else return `${time}`
    },
    formatTime (date) {
      return `${this.timeTo2Dig(new Date(date).getHours())}:${this.timeTo2Dig(new Date(date).getMinutes())}`
    },
    filterAndJoinBlankBlock (session) {
      let result = session
      // R0
      // R1
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
        'start': '2018-03-10T13:30:00+08:00',
        'end': '2018-03-10T14:10:00+08:00',
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
        'start': '2018-03-10T14:20:00+08:00',
        'end': '2018-03-10T15:00:00+08:00',
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
        'start': '2018-03-10T11:10:00+08:00',
        'end': '2018-03-10T11:50:00+08:00',
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
        'start': '2018-03-10T12:40:00+08:00',
        'end': '2018-03-10T14:10:00+08:00',
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
        'start': '2018-03-10T14:20:00+08:00',
        'end': '2018-03-10T15:00:00+08:00',
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
        'start': '2018-03-10T15:40:00+08:00',
        'end': '2018-03-10T16:20:00+08:00',
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
        'start': '2018-03-10T16:30:00+08:00',
        'end': '2018-03-10T17:10:00+08:00',
        'sli.do': '',
        'beginner': '',
        'speaker': {
          'name': '',
          'avatar': 'http://sitcon.org/2018/static/img/staffs/stone.png',
          'bio': ''
        }
      })

      return result
    },
    openPopup () {
      if (this.$route.params.sessionId) {
        const target = _.find(this.sessions, data => data.id === this.$route.params.sessionId)
        if (target) {
          this.popupData = target
          document.querySelector('body').classList.add('popup-scrolling-lock')
        }
      } else {
        this.popupData = null
        document.querySelector('body').classList.remove('popup-scrolling-lock')
      }
    },
    resize (event) {
      if (document.documentElement.clientWidth <= 900) this.isMobile = true
      else this.isMobile = false
    }
  },
  mounted () {
    this.openPopup()
    this.resize()

    window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  },
  watch: {
    $route (route) {
      this.openPopup()
    }
  }
}
</script>
