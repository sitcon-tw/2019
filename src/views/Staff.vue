<template>
  <div>
    <div class="spotlight-container">
      <div class="spotlight stagger">
        <div class="content">
          <p>
            SITCON 年會每年皆是許多志工奉獻時間精神所舉辦<br />
            若你對參與 SITCON 年會的籌備有興趣，歡迎填寫表單，我們將在明年活動開始籌備時通知您<br />
            <a href="http://" target="_blank" rel="noopener noreferrer">表單連結</a>
          </p>
        </div>
      </div>
      <div
        v-for="team in teams" :key="team.name"
        class="spotlight stagger"
      >
        <div class="content">
          <h1 class="bold">{{ team.name }}</h1>
          <p>{{ team.description }}</p>
          <div class="member-list">
            <div
              v-for="(member, index) in team.members" :key="index"
              class="member"
            >
              <div class="image">
                <v-gravatar :hash="member.emailHash" :size="320" default-img="https://sitcon.org/2019/static/img/default_avatar.png" />
              </div>
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import teamData from '../../static/json/staff.json'

export default {
  data () {
    return {
      teams: teamData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_color.scss';

.member-list {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .member {
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    padding-left: 0;

    @media screen and (max-width: 1440px) {
      width: 100px;
      padding: 10px 0;
    }

    .image {
      text-align: center;
      height: 100px;
      width: 100px;
      border-radius: 20px;
      border: 1px solid rgba($black, .5);
      box-sizing: border-box;
      overflow: hidden;
      background-color: $white;

      @media screen and (max-width: 1440px) {
        height: 80px;
        width: 80px;
      }

      img {
        height: 100px;

        @media screen and (max-width: 1440px) {
          height: 80px;
        }
      }
    }

    p {
      text-align: center;
      min-height: 60px;
      margin-top: 16px;
      font-size: 20px;

      @media screen and (max-width: 1440px) {
        font-size: 16px;
        min-height: 48px;
      }
    }
  }
}
</style>
