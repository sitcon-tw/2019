<template>
  <div>
    <Navbar />
    <div class="spotlight-container">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="spotlight card"
      >
        <div class="card-container">
          <div class="logo-image" :style="{ 'background-image': `url(static/img/sponsor/${sponsor.image})` }"></div>
          <div class="content">
            <h1>{{ sponsor.name }}</h1>
            <p
              v-for="(content, index) in sponsor.description"
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
import sponsorData from '../../static/json/sponsor.json'

export default {
  data () {
    return {
      sponsors: sponsorData
    }
  },
  components: {
    ...layout
  }
}
</script>
