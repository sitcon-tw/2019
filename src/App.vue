<template>
  <div id="app">
    <Navbar v-if="!hideNavbar" />
    <router-view />
  </div>
</template>

<script>
import * as Layout from '@/components'
export default {
  components: {
    ...Layout
  },
  data () {
    return {
      hideNavbar: false
    }
  },
  mounted () {
    this.toggleNavbar()
  },
  methods: {
    toggleNavbar () {
      if (this.$route.name === 'CFP') this.hideNavbar = true
      else this.hideNavbar = false
    }
  },
  watch: {
    $route (route) {
      this.toggleNavbar()
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
