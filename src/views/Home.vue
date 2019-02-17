<template>
  <div>
    <header>
      <div class="main-logo">
        <img src="@/assets/images/main-logo.png" alt="">
      </div>
      <div class="action-box-container">
        <div class="action-box">
          <h2><a class="big very-bold" href="" target="_blank" rel="noopener noreferrer">前往報名</a></h2>
        </div>
        <div class="action-box">
          <h2>
            <span class="big">3/24</span>
            <br />
            <span>
              中央研究院<br />
              人文社會科學館
            </span>
          </h2>
        </div>
      </div>
    </header>
    <div class="box-container">
      <div class="box">
        <h2>
          <span>關於 SITCON</span><br />
          <span class="sub">About us</span>
        </h2>
        <p>
          SITCON 學生計算機年會係一學生自發組成的研討會，秉持著以學生為主軸的核心價值，藉以凝聚與傳遞學生的力量。<br />
          希望藉由提供一個經驗交流與資訊技術實務分享的平台，使已有成就者能夠傳承己身經驗，嶄露頭角者在激盪中獲得靈感與啟發，並同時讓初入茅廬者得以對資訊科學有更深入的了解；進而達到「學以致用、教學相長」的目標。
        </p>
      </div>
      <div class="box side">
        <img src="@/assets/images/box-open-1.png" alt="">
      </div>
    </div>
    <div class="box-container reverse">
      <div class="box">
        <h2>
          <span>開箱演算法</span><br />
          <span class="sub">Algorithm in a Box</span>
        </h2>
        <p>
          「Algorithm in a Box」的「Box」發想自「黑箱 Black Box」，點出近年來我們的閱聽內容與生活愈發受到演算法支配，但我們卻無從得知，這些藏在黑箱中的演算法具體是什麼模樣；同時，「黑箱」也代表了只知其用法，卻對演算法的原理和細節不求甚解。<br />
            另一方面，「Box」也可以解釋成「工具箱 Toolbox」，將演算法當成工具箱中的常備道具，也就是演算法的應用層面。我們希望能藉由「開箱」演算法，拆解「支配人們的演算法」的箱子，也要來拆解「不求甚解」的箱子、探究演算法的內涵與精神。
        </p>
      </div>
      <div class="box side">
        <img src="@/assets/images/box-open-2.png" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/_color.scss';

header {
  display: flex;
  flex-direction: row;
  margin: 64px 140px;
  width: calc(100% - 140px * 2);

  @media screen and (max-width: 1200px) {
    margin: 64px 2rem;
    width: calc(100% - 2rem * 2);
  }

  @media screen and (max-width: 900px) {
    margin-top: calc(4rem + 64px);
    flex-direction: column;
  }

  .main-logo {
    width: 60%;
    position: relative;
    text-align: right;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    img {
      width: 80%;

      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }

  .action-box {
    &-container {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      position: relative;

      @media screen and (max-width: 900px) {
        width: 100%;
        height: 300px;
      }
    }

    background-color: $tone_box_dark;
    padding: 2rem 3.5rem;
    width: 300px;

    @media screen and (max-width: 1500px) {
      width: 250px;
      padding: 1.5rem 3rem;
    }

    @media screen and (max-width: 1200px) {
      width: 200px;
      padding: 1rem 2.5rem;
    }

    @media screen and (max-width: 900px) {
      padding: 1rem 2rem;

      &:last-child {
        width: calc(100% - 2rem * 2);
      }
    }

    h2 {
      text-align: left;
      font-size: 36px;
      color: $tone_content;

      @media screen and (max-width: 1500px) {
        font-size: 30px;
      }

      @media screen and (max-width: 1200px) {
        font-size: 26px;
      }

      a,
      span {
        font-weight: 700;
        color: $tone_content;
      }

      a {
        text-decoration: none;
      }
    }
  }
}

.big {
  font-size: 48px;

  @media screen and (max-width: 1500px) {
    font-size: 36px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
}

.very-bold {
  font-weight: 900;
}

.box {
  &-container {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 4rem 140px;
    margin-right: 0;
    width: calc(100% - 140px);

    &.reverse {
      margin: 4rem 140px;
      margin-left: 0;
      flex-direction: row-reverse;

      .box {
        padding: 2rem 46px;
        width: calc(50% - 46px * 2);

        &.side {
          padding: 0;
          width: calc(50% + 70px);
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

  position: relative;
  background-color: $tone_box_dark;
  padding: 2rem 4rem;
  color: $tone_content;
  width: calc(50% - 4rem * 2);

  &.side {
    padding: 0;
    width: calc(50% + 70px);
    background: none;
    display: flex;

    img {
      height: 100%;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 1rem;

    span {
      font-weight: 700;

      &.sub {
        font-size: 18px;
      }
    }
  }

  p {
    font-size: 20px;
  }
}

</style>
