<template>
  <div>
    <session-popup v-if="popupData" :data="popupData" />
    <div v-if="!device.isMobile" class="session-table">
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
        v-for="(time, index) in timeTable.mobile"
        :key="`time-${time}`"
        class="session session-time"
        :style="{
          'grid-row-start': `${timeTable.desktop.indexOf(time) + 2}`,
          'grid-row-end': `${timeTable.desktop.indexOf(timeTable.mobile[index]) + 2}`
        }"
      >
        <p>{{ time }}</p>
      </div>
      <session-box
        v-for="(session, index) in sessions.desktop"
        :key="`session-${index}`"
        :data="session"
        :class="{ 'blank-cover': session.type === 'BREAK' }"
        :isMobile="device.isMobile"
        :style="{
          'grid-column-start': `${session.broadcast ? 'R2' : session.room}`,
          'grid-column-end': `${session.broadcast ? 'END' : `${rooms[rooms.indexOf(session.room) + 1]}`}`,
          'grid-row-start': `${timeTable.desktop.indexOf(session.start) + 2}`,
          'grid-row-end': `${timeTable.desktop.indexOf(session.end) + 2}`
        }"
      />
    </div>
    <div v-else class="session-table">
      <session-box-mobile
        v-for="(session, index) in sessions.mobile"
        :key="`session-${index}`"
        :data="session"
        :isMobile="device.isMobile"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  data () {
    return {
      rooms: ['R2', 'R0', 'R1', 'R3', 'S'],
      popupData: null
    }
  },
  computed: {
    ...mapGetters(['device', 'navbar', 'sessions', 'timeTable', 'popUpLock'])
  },
  mounted () {
    this.openPopup()
  },
  methods: {
    ...mapActions(['formatTime', 'initSessionData', 'toggleNavbar', 'togglePopUpLock']),
    async openPopup () {
      let target = _.find(this.sessions.desktop, data => data.id === this.$route.params.sessionId)
      if (!target) {
        await this.initSessionData()
        target = _.find(this.sessions.desktop, data => data.id === this.$route.params.sessionId)
      }
      if (this.$route.params.sessionId) {
        if (target) {
          this.popupData = target
          this.togglePopUpLock(true)
          if (!this.device.isMobile && (document.body.scrollTop || document.documentElement.scrollTop > 0)) this.toggleNavbar({ opened: true })
        }
      } else {
        this.popupData = null
        this.togglePopUpLock(false)
        if (!this.device.isMobile && (document.body.scrollTop || document.documentElement.scrollTop > 0)) this.toggleNavbar({ opened: true })
      }
    }
  },
  watch: {
    $route (to, from) {
      this.openPopup()
      if (!((from.name === 'Agenda' && to.name === 'AgendaPopup') || (from.name === 'AgendaPopup' && to.name === 'Agenda'))) this.toggleNavbar({ opened: false })
    }
  }
}
</script>
