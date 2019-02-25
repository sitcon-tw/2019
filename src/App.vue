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
    }
  },
  watch: {
    $route (to, from) {
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
