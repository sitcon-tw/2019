<template>
  <div class="session-popup">
    <div class="session-popup-placeholder">
      <div
        class="session-popup-close"
        @click="$router.push({ name: 'Agenda' })"
      >
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEyMDggOTA2IDI2IDI2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTMxLDcuNiwyOC40LDUsMTgsMTUuNCw3LjYsNSw1LDcuNiwxNS40LDE4LDUsMjguNCw3LjYsMzEsMTgsMjAuNiwyOC40LDMxLDMxLDI4LjQsMjAuNiwxOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMDMgOTAxKSIvPjwvc3ZnPg==" alt="">
      </div>
      <div class="session-popup-container">
        <div class="session-popup-content">
          <h1>{{ data.zh.title }}</h1>
          <p>{{ data.zh.description }}</p>
        </div>
        <div
          v-for="speaker in data.speakers"
          :key="speaker.id"
          class="session-popup-content"
        >
          <h1>About {{ speaker.zh.name }}</h1>
          <p><img :src="speaker.avatar" alt=""></p>
          <p>{{ speaker.zh.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import head from '../../util/head'

export default {
  props: {
    data: {
      type: Object
    }
  },
  mounted () {
    this.headSeoDetect()
    window.addEventListener('keydown', this.closePopupByEsc)
  },
  methods: {
    closePopupByEsc (event) {
      if (event.keyCode === 27) this.$router.push({ name: 'Agenda' })
    },
    headSeoDetect () {
      head.title(`${this.data.zh.title} by ${this.data.speakers.map(ele => ele.zh.name).join()} | 議程`)
      head.ogTitle(`${this.data.zh.title} by ${this.data.speakers.map(ele => ele.zh.name).join()} | 議程`)
      head.ogDescription(this.data.zh.description)
      head.ogImage(this.data.speakers[0].avatar)
      head.ogType('article')
    }
  },
  destroyed () {
    window.removeEventListener('keydown', this.closePopupByEsc)
  }
}
</script>
