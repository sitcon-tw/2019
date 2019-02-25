<template>
  <div>
    <div class="spotlight-container">
      <div class="spotlight">
        <session-table />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as layout from '@/components'

export default {
  components: {
    ...layout
  }
}
</script>

<style lang="scss" scoped>
.spotlight {
  @media screen and (max-width: 1024px) and (min-width: 900px) {
    padding: 1rem;
    width: calc(100% - 1rem * 2);
  }
}
</style>
