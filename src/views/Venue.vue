<template>
  <div>
    <div class="spotlight-container">
      <div class="spotlight">
        <h1 class="bold">會場地圖</h1>
        <img src="@/assets/images/SVG/3F.svg" alt="3F 場地平面圖">
        <img src="@/assets/images/SVG/4F.svg" alt="4F 場地平面圖">
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as Layout from '@/components'

export default {
  components: {
    ...Layout
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_color.scss';

.spotlight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-left: 5%;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 900px) {
    margin-top: 4rem;
  }
}
</style>
