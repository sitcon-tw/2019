<template>
  <div class="session">
    <p class="tag">
      <span
        v-for="tag in data.tag"
        :key="tag"
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
