<template>
  <div>
    <div class="nav" :class="{ 'toggle': navbar.opened }">
      <div class="nav-logo">
        <div class="nav-toggle-btn" @click="toggleNavbar({ opened: true })">
          <font-awesome-icon icon="bars" />
        </div>
        <router-link to="/2019">
          <p>SITCON 19</p>
        </router-link>
      </div>
      <div class="nav-container" :class="{ 'toggle': navbar.opened }">
        <div class="nav-toggle-btn" @click="toggleNavbar({ opened: false })">
          <img src="@/assets/images/SVG/XX.svg" alt="">
        </div>
        <div class="nav-container-logo">
          <img src="@/assets/images/SVG/sitcon-logo.svg" alt="">
        </div>
        <div
          class="nav-item home"
          :class="{ 'active': $route.name === 'Home' }"
          @click="device.isMobile ? toggleNavbar({ opened: false }) : null"
        >
          <router-link to="/2019">
            <p>首頁</p>
          </router-link>
        </div>
        <div
          class="nav-item"
          :class="{ 'active': $route.name === page.name }"
          v-for="page in pages"
          :key="page.meta.index"
          @click="device.isMobile ? toggleNavbar({ opened: false }) : null"
        >
          <router-link :to="page.path">
            <p>{{ page.meta.label }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['device', 'navbar']),
    pages () {
      return this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main')
    }
  },
  mounted () {
    this.scrollHandler()
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    ...mapActions(['toggleNavbar']),
    scrollHandler () {
      if (!this.device.isMobile && (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) this.toggleNavbar({ opened: true })
      else this.toggleNavbar({ opened: false })
    }
  },
  watch: {
    $route () {
      this.toggleNavbar({ opened: false })
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
