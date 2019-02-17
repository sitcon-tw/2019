<template>
  <div>
    <div class="spotlight-container card">
      <div
        v-for="(active, index) in actives"
        :key="index"
        class="spotlight card"
      >
        <div class="card-container">
          <div class="logo-image" :style="{ 'background-image': `url(/2019/static/img/active/${active.image})` }"></div>
          <div class="content">
            <h1>{{ active.name }}</h1>
            <p>{{ active.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activeData from '../../static/json/active.json'

export default {
  data () {
    return {
      actives: activeData
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  .logo-image {
    background-size: auto 200px !important;
    opacity: .5;
  }
}
</style>

