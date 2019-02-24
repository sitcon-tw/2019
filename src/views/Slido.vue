<template>
  <div>
    <div class="slido-container">
      <div class="side">
        <div class="title">
          <p>議程線上討論區</p>
        </div>
        <div class="session-table mobile">
          <session-box-mobile
            v-for="(session, index) in mobileSession"
            :key="`session-${index}`"
            :data="session"
          />
        </div>
      </div>
      <div class="slido">
        <h1 v-show="loading" class="bold">載入中...</h1>
        <iframe
          v-show="!loading"
          :src="qaLink"
          frameborder="0"
          @load="finishLoad"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import SessionBoxMobile from '@/components/SessionBoxMobile.vue'
import sessionData from '../../static/json/agenda.json'
import _ from 'lodash'

export default {
  components: {
    SessionBoxMobile
  },
  data () {
    return {
      rooms: ['R2', 'R0', 'R1', 'R3', 'S'],
      popupData: null,
      isMobile: false,
      qaLink: '',
      loading: false
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
  mounted () {
    this.openSlido()
  },
  methods: {
    parseSession () {
      let result = sessionData.slice()
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
    openSlido () {
      this.qaLink = this.$route.params.slide
    },
    finishLoad () {
      this.loading = false
    }
  },
  watch: {
    $route () {
      this.openSlido()
      this.loading = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_color.scss';

.slido-container {
  color: $content;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  .side {
    width: 320px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 0 10px rgba($black, 0.5);
    z-index: 1;

    &::-webkit-scrollbar {
      display: none
    }

    .title {
      background-color: $tone_paper;

      p {
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  .slido {
    width: calc(100% - 320px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
