<template>
  <div id="app">
    <Navbar v-if="!navbar.hidden" />
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="main-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import * as Layout from '@/components'
import head from '../util/head'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ...Layout
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  computed: {
    ...mapGetters(['device', 'navbar', 'popUpLock'])
  },
  mounted () {
    this.toggle()
    this.deviceHandler()
    this.headSeoDetect()
    this.initSessionData()
    this.initSessionTimeTable()
    window.addEventListener('resize', this.deviceHandler)
  },
  methods: {
    ...mapActions(['initSessionData', 'initSessionTimeTable', 'toggleNavbar', 'toggleDevice']),
    toggle () {
      if (this.$route.name === 'CFP' || this.$route.name === 'Slido' || this.$route.name === 'NoSlido' || this.$route.query.mode === 'app') this.toggleNavbar({ hidden: true })
      else this.toggleNavbar({ hidden: false })
    },
    deviceHandler () {
      if (document.documentElement.clientWidth <= 900) this.toggleDevice('mobile')
      else this.toggleDevice('desktop')
    },
    headSeoDetect () {
      if (this.$route.meta.type === 'main' || this.$route.name === 'Home') {
        head.title(this.$route.meta.title || this.$route.meta.label)
        head.ogTitle(this.$route.meta.title || this.$route.meta.label)
        head.ogDescription('以學生為本、由學生自發舉辦，SITCON 學生計算機年會不只是學生「學以致用、教學相長」的實際展現，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發。')
        head.ogImage('https://sitcon.org/2019/static/img/og.jpg')
        head.ogType('website')
      }

      head.ogUrl(`https://sitcon.org${document.location.pathname}`)
    }
  },
  watch: {
    $route (to, from) {
      this.headSeoDetect()
      this.toggle()
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    popUpLock (status) {
      if (status) document.querySelector('body').classList.add('popup-scrolling-lock')
      else document.querySelector('body').classList.remove('popup-scrolling-lock')
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.deviceHandler)
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.main-view {
  min-height: 100vh;
  transition-property: transform,opacity;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(.55, 0, .1, 1);
}
</style>
