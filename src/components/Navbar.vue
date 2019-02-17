<template>
  <div>
    <div class="nav" :class="{ 'toggle': toggleNavbar }">
      <div class="nav-logo">
        <div class="nav-toggle-btn" @click="toggleNavbar = true">
          <font-awesome-icon icon="bars" />
        </div>
        <router-link to="/2019">
          <p>SITCON 19</p>
        </router-link>
      </div>
      <div class="nav-container" :class="{ 'toggle': toggleNavbar }">
        <div class="nav-toggle-btn" @click="toggleNavbar = false">
          <img src="@/assets/images/SVG/XX.svg" alt="">
        </div>
        <div class="nav-container-logo">
          <img src="@/assets/images/SVG/sitcon-logo.svg" alt="">
        </div>
        <div
          class="nav-item home"
          :class="{ 'active': $route.name === 'Home' }"
          @click="toggleNavbar = false"
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
          @click="toggleNavbar = false"
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
export default {
  data () {
    return {
      toggleNavbar: false
    }
  },
  computed: {
    pages () {
      return this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main')
    }
  },
  mounted () {
    this.scrollHandler()
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler () {
      if (document.documentElement.clientWidth >= 900 && (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) this.toggleNavbar = true
      else this.toggleNavbar = false
    }
  },
  watch: {
    $route () {
      this.toggleNavbar = false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
