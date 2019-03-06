<template>
  <div
    class="session"
    :class="{'clickable': data.zh.description, 'active': $route.name === 'Slido' && slido.link === data.qa }"
    @click="data.zh.description ? openPop(data) : null"
  >
    <a class="seo-only" v-show="false" :href="`/2019/agenda/${data.id}`"></a>
    <p class="tag">
      <span
        v-for="(tag, index) in data.tag"
        :key="`tag-${index}`"
      >
        {{ tag.zh }}
      </span>
    </p>
    <h2 class="session-title">{{ data.zh.title }}</h2>
    <p class="session-speaker">
      <span
        v-for="(speaker, index) in data.speakers"
        :key="speaker.name"
      >
        {{ speaker.zh.name }}
        {{ data.speakers.length - 1 !== index ? ' / ' : '' }}
      </span>
    </p>
    <p v-if="isMobile" class="room">
      {{ data.room }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    data: {
      type: Object
    },
    isMobile: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters(['device', 'slido'])
  },
  methods: {
    ...mapActions(['changeSlidoLink', 'toggleSlido']),
    openPop (data) {
      if (this.$route.name === 'Slido') {
        this.changeSlidoLink(data.qa)
        if (this.device.isMobile) this.toggleSlido(true)
      } else this.$router.push({ name: 'AgendaPopup', params: { sessionId: data.id } })
    }
  }
}
</script>
