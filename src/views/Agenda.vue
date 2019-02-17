<template>
  <div>
    <div class="spotlight-container">
      <div class="spotlight">
        <session-table :sessionData="agendas" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as layout from '@/components'
import agendaData from '../../static/json/agenda.json'

export default {
  data () {
    return {
      agendas: agendaData
    }
  },
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
