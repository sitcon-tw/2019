<template>
  <div>
    <div class="session session-time">
      <p>{{ data.time }}</p>
    </div>
    <session-box
      v-for="(session, index) in data.sessions"
      :key="`session-${index}`"
      :data="session"
      :isMobile="isMobile"
    />
  </div>
</template>

<script>
import SessionBox from './SessionBox'

export default {
  components: {
    SessionBox
  },
  props: {
    data: {
      type: Array | Object
    },
    time: {
      type: String
    },
    isMobile: {
      default: false,
      type: Boolean
    }
  }
}
</script>
