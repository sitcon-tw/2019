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
      color: $content;

      @media screen and (max-width: 1500px) {
        font-size: 30px;
      }

      @media screen and (max-width: 1200px) {
        font-size: 26px;
      }

      a,
      span {
        font-weight: 700;
        color: $content;
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
</style>
