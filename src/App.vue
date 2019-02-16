<template>
  <div id="app">
    <Navbar v-if="!isCFP" />
    <router-view />
    <Footer v-if="!isCFP" />
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
      isCFP: false
    }
  },
  mounted () {
    this.toggleNavbar()
  },
  methods: {
    toggleNavbar () {
      if (this.$route.name === 'CFP') this.isCFP = true
      else this.isCFP = false
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
