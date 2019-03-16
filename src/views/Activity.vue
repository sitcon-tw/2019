<template>
  <div>
    <div class="spotlight-container card">
      <div
        v-for="(activity, index) in activities"
        :key="index"
        class="spotlight card"
      >
        <div class="card-container">
          <div class="logo-image" :style="{ 'background-image': `url(/2019/static/img/activity/${activity.image})` }"></div>
          <div class="content">
            <h1>{{ activity.name }}</h1>
            <p v-html="activity.description.replace(/\|\|((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)\|+\|(.*)\|\|/gm, `<a href='$1' target='_blank' rel='noopener noreferrer'>$3</a>`)"></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as Layout from '@/components'
import activityData from '../../static/json/activity.json'

export default {
  components: {
    ...Layout
  },
  data () {
    return {
      activities: activityData
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  .logo-image {
    background-size: auto 200px !important;
    min-height: 350px;
    opacity: .5;

    @media screen and (max-width: 690px) {
      min-height: 200px;
    }
  }
}
</style>
