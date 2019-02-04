<template>
  <div>
    <Navbar />
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
              v-for="member in team.members" :key="member.name"
              class="member"
            >
              <div class="image">
                <img :src="member.avatar || 'http://sitcon.org/2018/static/img/staffs/stone.png'" alt="">
              </div>
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as layout from '@/components'

export default {
  data () {
    return {
      teams: [
        {
          name: '總招組',
          description: '掌握協調年會籌備進度，主持核心討論及決策。',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '編輯組',
          description: 'SITCON 編輯組負責年會的社群媒體經營與互動，包含：Facebook、Instagram、Plurk、Twitter、Telegram Channel。以及開源相關活動推廣與其他組別公告事項、大會公告等文案撰寫需求。適合對社群媒體經營有興趣，有新鮮腦汁可以榨的朋友們！',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '行銷組',
          description: '行銷組是銜接 SITCON 與社會的橋樑，負責探詢潛在的合作單位，連結更多支持 SITCON 理念的社群夥伴、媒體與贊助商，讓 SITCON 能被更多人看見。',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '場務組',
          description: 'SITCON 場務組主要負責年會的機動人力、動線、餐飲、報到、物流的規劃，是人數最多的一組，適合最有熱情、最有活力的朋友們！',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '財務組',
          description: '負責年會與金錢相關的業務',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '攝影組',
          description: '協助大會當天之靜態活動紀錄，及提供各組所需之影像素材。',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '製播組',
          description: '負責各廳議程影音紀錄、主廳畫面聯播，及會後剪輯。',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '開發組',
          description: 'SITCON 開發組主要負責年會的官網與通關 App 開發，適合對網頁開發有興趣、想法，有新鮮肝可以炸的朋友們！',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '網路組',
          description: '負責大會當下的網路架設與維護。',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        },
        {
          name: '文創組',
          description: '負責年會主視覺設計、網站設計、相關紀念品發想<del>挖坑</del>等事宜開場動畫與許多會場內的印刷品也都是由文創組設計',
          members: [
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            },
            {
              avatar: '',
              name: 'IU'
            },
            {
              avatar: '',
              name: '滷蛋'
            },
            {
              avatar: '',
              name: '葉子'
            }
          ]
        }
      ]
    }
  },
  components: {
    ...layout
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
    width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 60px;
    padding-left: 0;

    .image {
      text-align: center;
      height: 100px;
      width: 100px;
      border-radius: 20px;
      border: 1px solid rgba($black, .5);
      box-sizing: border-box;
      overflow: hidden;
      background-color: $white;

      img {
        height: 100px;
      }
    }

    p {
      margin-top: 16px;
      font-size: 24px;
    }
  }
}
</style>

