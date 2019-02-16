<template>
  <div>
    <div class="nav">
      <div class="nav-logo">
        <div class="nav-toggle-btn" @click="toggleNavbar = true">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC3CAYAAAA1pmrJAAAACXBIWXMAAAsSAAALEgHS3X78AAACdElEQVR4nO3XwWkEQRAEwV6xhuk8kyxv+aB8DAMRFtQroZ7d3QH4p6/TA4C7iQiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQiAiQvDPze3oEcK9nd09vAC7mzgCJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiADJOzPfp0cA93p2d0+PAO7lzgCJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiACJiADJOzOf0yOAez27e3oDcDF3BkhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEjemfk5PQK417O7e3oEcC93BkhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEhEBEjemfmcHgHc6w/FsRUlmnEiQgAAAABJRU5ErkJggg==" alt="">
        </div>
        <router-link to="/">
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
        <div class="nav-item home">
          <router-link to="/2019">
            <p>首頁</p>
          </router-link>
        </div>
        <div
          class="nav-item"
          :class="{ 'active': $route.name === page.name }"
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
  data () {
    return {
      toggleNavbar: false
    }
  },
  computed: {
    pages () {
      return this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main')
    }
  }
}
</script>
