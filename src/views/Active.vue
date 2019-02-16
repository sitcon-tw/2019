<template>
  <div>
    <Navbar />
    <div class="spotlight-container card">
      <div
        v-for="(active, index) in actives"
        :key="index"
        class="spotlight card"
      >
        <div class="card-container">
          <div class="logo-image" :style="{ 'background-image': `url(static/img/active/${active.image})` }"></div>
          <div class="content">
            <h1>{{ active.name }}</h1>
            <p
              v-for="(content, index) in active.description"
              :key="index"
            >
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as layout from '@/components'
import activeData from '../../static/json/active.json'

export default {
  data () {
    return {
      actives: activeData
    }
  },
  components: {
    ...layout
  }
}
</script>
