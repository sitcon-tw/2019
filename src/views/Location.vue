<template>
  <div>
    <sitcon-map width="100%" height="400px" />
    <div class="spotlight-container">
      <div class="spotlight">
        <div class="content">
          <h1 class="bold">地點</h1>
          <p>
            中央研究院人文社會科學館<br />
            台北市南港區研究院路二段 128 號
          </p>
        </div>
      </div>
      <div class="spotlight">
        <div class="content">
          <h1 class="bold">大眾運輸</h1>
          <p>
            台鐵南港站、捷運南港站（2 號出口）換乘公車 212、270 或藍 25 至中研院站（約 9 分鐘）<br />
            捷運至南港展覽館站（5 號出口）搭乘 212、276、306、620、645、679、205、小1、小5、小12 等路線至中研院站（約 6 分鐘）<br />
            步行入院內至人文館
          </p>
        </div>
      </div>
      <div class="spotlight">
        <div class="content">
          <h1 class="bold">YouBike</h1>
          <p>
            在捷運<u>南港展覽館站</u>（5 號出口）租借 YouBike 後，沿著研究院路 2 段騎乘約 1km 於<u>中研公園站</u>歸還後步行至人文館。
          </p>
        </div>
      </div>
      <div class="spotlight">
        <div class="content">
          <h1 class="bold">自行開車</h1>
          <p>
            由國道三號，南深路-中研院匝道〈16km〉出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格。若您於週一至週五來訪，您須停車至人文社會館 B2，並需支付停車費用（每小時 20 元）。
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as layout from '@/components'

export default {
  components: {
    ...layout
  }
}
</script>

<style lang="scss" scoped>
#sitcon-map {
  @media screen and (min-width: 900px) {
    margin-top: 8rem;
  }
}

.spotlight-container {
  margin-top: 0;
}
</style>
