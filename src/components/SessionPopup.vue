<template>
  <div class="session-popup">
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
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>
