<template>
  <div>
    <footer id="sponsor">
      <a
        :href="sponsor.url"
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        class="sponsor-img"
        :class="sponsor.level"
        target="_blank"
        rel="noopener noreferrer">
        <img :src="`/2019/static/img/sponsor/${sponsor.image}`" alt="">
      </a>
    </footer>
    <footer id="footer" class="main">
      <div class="container">
        <div class="info">
          <p class="bold">SITCON 學生計算機年會</p>
          <p class="bold">Students’ Information Technology Conference</p>
          <p><a href="mailto:contact@sitcon.org">contact@sitcon.org</a></p>
        </div>
        <div class="info">
          <a target="_blank" href="https://www.facebook.com/SITCONtw/" class="icon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
          <a target="_blank" href="https://www.flickr.com/people/sitcon/" class="icon"><font-awesome-icon :icon="['fab', 'flickr']" /></a>
          <a target="_blank" href="https://t.me/SITCONgeneral" class="icon"><font-awesome-icon :icon="['fab', 'telegram-plane']" /></a>
          <a target="_blank" href="https://twitter.com/sitcontw" class="icon"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a target="_blank" href="https://www.youtube.com/user/SITCONArchive" class="icon"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
        </div>
      </div>
      <div class="container year">
        <div class="info">
          <p><a target="_blank" class="bold" href="/2013">2013</a></p>
          <p><a target="_blank" class="bold" href="/2014">2014</a></p>
          <p><a target="_blank" class="bold" href="/2015">2015</a></p>
          <p><a target="_blank" class="bold" href="/2016">2016</a></p>
          <p><a target="_blank" class="bold" href="/2017">2017</a></p>
          <p><a target="_blank" class="bold" href="/2018">2018</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import sponsorData from '../../static/json/sponsor.json'

export default {
  data () {
    return {
      sponsors: sponsorData
    }
  }
}
</script>
