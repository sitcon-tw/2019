<template>
  <div>
    <div class="spotlight-container card">
      <div class="spotlight box-container">
        <div class="content">
          <h1>我們歡迎個人贊助</h1>
          <p>
            <img src="@/assets/images/person-sponsor.jpg" alt="">
          </p>
          <p>
            SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。
          </p>
          <p>
            維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。<br />
            希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。<br />
            歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！<br />
          </p>
          <p><a href="https://sitcon.kktix.cc/events/sitcon2019-individual-sponsor" target="_blank" rel="noopener noreferrer">個人贊助辦法</a></p>
          <p>企業贊助亦歡迎來信 <a href="mailto:contact@sitcon.org" target="_blank" rel="noopener noreferrer">contact@sitcon.org</a></p>
        </div>
      </div>
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
import * as Layout from '@/components'
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
