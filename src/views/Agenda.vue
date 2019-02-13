<template>
  <div>
    <!-- <Navbar /> -->
    <div class="spotlight-container">
      <div class="spotlight">
        <session-table :sessionData="agendas" />
      </div>
    </div>
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
