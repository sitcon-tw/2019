<template>
  <div>
    <div class="spotlight-container card">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="spotlight card"
      >
        <div class="card-container">
          <div class="card-tag">
            <img :src="`/2019/static/img/${sponsor.level}.svg`" alt="">
          </div>
          <div class="logo-image" :style="{ 'background-image': `url(/2019/static/img/sponsor/${sponsor.image})` }"></div>
          <div class="content">
            <h1>{{ sponsor.name }}</h1>
            <p>{{ sponsor.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as Layout from '@/components';
import sponsorData from '../../static/json/sponsor.json'

export default {
  components: {
    ...Layout
  },
  data () {
    return {
      sponsors: sponsorData
    }
  }
}
</script>
