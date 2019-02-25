<template>
  <div>
    <div class="slido-container" :class="{ 'toggle': slido.opened }">
      <div class="side">
        <div class="title">
          <p>議程線上討論區</p>
          <p class="icon" @click="toggleSlido(true)">
            <font-awesome-icon icon="arrow-left" />
          </p>
        </div>
        <div class="session-table mobile">
          <session-box-mobile
            v-for="(session, index) in sessions.mobile"
            :key="`session-${index}`"
            :data="session"
          />
        </div>
      </div>
      <div class="slido">
        <h1 v-show="loading" class="bold">載入中...</h1>
        <div class="toggle-btn" @click="closeSlido()"></div>
        <iframe
          v-show="!loading"
          :src="qaLink"
          frameborder="0"
          @load="finishLoad"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SessionBoxMobile from '@/components/SessionBoxMobile.vue'

export default {
  components: {
    SessionBoxMobile
  },
  data () {
    return {
      rooms: ['R2', 'R0', 'R1', 'R3', 'S'],
      popupData: null,
      isMobile: false,
      qaLink: '',
      loading: false
    }
  },
  computed: {
    ...mapGetters(['device', 'sessions', 'slido'])
  },
  mounted () {
    this.openSlido()
  },
  methods: {
    ...mapActions(['toggleSlido', 'changeSlidoLink']),
    openSlido () {
      this.qaLink = this.slido.link
    },
    closeSlido () {
      this.toggleSlido(false)
    },
    finishLoad () {
      this.loading = false
    }
  },
  watch: {
    'slido.link' () {
      this.openSlido()
      this.loading = true
      if (this.device.isMobile) this.toggleSlido(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_color.scss';

.slido-container {
  color: $content;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: all ease-in-out .3s;

  @media screen and (max-width: 900px) {
    width: 200vw;
  }

  .side {
    width: 320px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 0 10px rgba($black, 0.5);
    z-index: 1;

    @media screen and (max-width: 900px) {
      width: 100vw;
    }

    &::-webkit-scrollbar {
      display: none
    }

    .title {
      padding: 10px;
      background-color: $tone_paper;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 20px;
        font-weight: 500;

        &.icon {
          padding-left: 2rem;
          cursor: pointer;
        }
      }
    }
  }
  .slido {
    width: calc(100% - 320px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
      width: 100vw;
    }

    .toggle-btn {
      position: absolute;
      top: 0;
      left: 0;
      height: 56px;
      width: 4rem;
      cursor: pointer;
    }

    iframe {
      height: 100%;
      width: 100%;
    }
  }

  &.toggle {
    width: calc(100% + 320px);
    transform: translateX(-320px);

    @media screen and (max-width: 900px) {
      width: 200vw;
      transform: translateX(-100vw);
    }
  }
}
</style>
