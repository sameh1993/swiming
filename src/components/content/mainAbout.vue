<template>
  <div class="aboutus">
    <div class="container">
      <div class="row">
        <div class="left col-lg-6 col-sm-12">
          <h2>We Have <span> 30+ </span> Years of Experience</h2>
          <p>
            "Orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat".
          </p>
          <p>
            Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non quae, fugiat. Lorem ipsum viverra feugiat.
            Pellen tesque libero ut justo, ultrices in ligula.
          </p>
        </div>
        <div class="right col-lg-6 col-sm-12">
          <div class="parent-img">
            <img src="@/assets/images/ab3.jpg" />
            <img src="@/assets/images/ab4.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.aboutus {
  padding: 4em 0;

  .row > div {
    margin-bottom: 30px;
  }
  .left {
    h2 {
      font-size: 50px;
      width: 75%;
      span {
        color: var(--secondColor);
      }
    }
    p {
      font-size: 17px;
      line-height: 2;
      margin-top: 20px;
    }
    @include media-breakpoint-down(md) {
      h2 {
        font-size: 27px;
        width: auto;
      }
    }
  }

  .parent-img {
    position: relative;
    min-height: 520px;
    img {
      // width: 45%;
      border-radius: 5px;

      &:last-child {
        top: 80px;
        left: 220px;
        border-radius: var(--border-radius);
        border: 6px solid #fff;
        border-radius: 4px;
        position: absolute;
      }
    }

    @include media-breakpoint-down(lg) {
      transform: translate(50px, 50px);
      img {
        width: 45%;
        &:last-child {
          left: 30%;
        }
      }
      min-height: 530px;
    }

    @include media-breakpoint-down(sm) {
      min-height: 345px;
      transform: translate(50px, 20px);
    }
  }
}
</style>
