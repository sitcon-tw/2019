<template>
  <div>
    <div class="session-table">
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
          'grid-row-start': `${times.indexOf(formatTime(time)) + 2}`,
          'grid-row-end': `${times.indexOf(formatTime(timeLine[index])) + 2}`
        }"
      >
        <p>{{ formatTime(time) }}</p>
      </div>
      <session-box
        v-for="(session, index) in sessions"
        :key="`session-${index}`"
        :data="session"
        :style="{
          'grid-column-start': `${session.broadcast ? 'R2' : session.room}`,
          'grid-column-end': `${session.broadcast ? 'END' : `${rooms[rooms.indexOf(session.room) + 1]}`}`,
          'grid-row-start': `${times.indexOf(formatTime(session.start)) + 2}`,
          'grid-row-end': `${times.indexOf(formatTime(session.end)) + 2}`
        }"
      />
    </div>
    <session-popup v-if="popupData" :data="popupData" />
  </div>
</template>

<script>
import SessionBox from './SessionBox'
import SessionPopup from './SessionPopup'
import _ from 'lodash'

export default {
  components: {
    SessionBox,
    SessionPopup
  },
  props: {
    sessionData: {
      type: Array
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rooms: ['R2', 'R0', 'R1', 'R3', 'S'],
      timeLine: [],
      popupData: null
    }
  },
  computed: {
    sessions: function () {
      return this.parseSession()
    },
    times: function () {
      let result = []
      let data = this.parseSession()
      let start = _.map(data, 'start')
      let end = _.map(data, 'end')
      result = _.concat(result, start, end)
      result = _.uniqBy(result, this.formatTime)
      this.timeLine = _.uniqBy(start.sort(), this.formatTime)
      return result.slice().sort().map(data => this.formatTime(data))
    }
  },
  methods: {
    parseSession () {
      let result = this.sessionData.slice()
      if (!this.isMobile) result = this.filterAndJoinBlankBlock(result)
      return _.map(result, data => ({
        ...data,
        start: new Date(data.start),
        end: new Date(data.end)
      }))
    },
    timeTo2Dig (time) {
      if (time / 10 < 1) return `0${time}`
      else return `${time}`
    },
    formatTime (date) {
      return `${this.timeTo2Dig(date.getHours())}:${this.timeTo2Dig(date.getMinutes())}`
    },
    filterAndJoinBlankBlock (session) {
      let result = session.filter(data => data.zh.title !== '午餐')
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
        }
      } else {
        this.popupData = null
      }
    }
  },
  mounted () {
    this.openPopup()
  },
  watch: {
    $route (route) {
      this.openPopup()
    }
  }
}
</script>
