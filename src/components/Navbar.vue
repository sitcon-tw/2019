<template>
  <div>
    <div class="nav">
      <div class="nav-logo">
        <router-link to="/">
          <p>SITCON 19</p>
        </router-link>
      </div>
      <div class="nav-container">
        <div
          class="nav-item"
          v-for="page in pages"
          :key="page.meta.index"
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
  computed: {
    pages () {
      return this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main')
    }
  }
}
</script>
