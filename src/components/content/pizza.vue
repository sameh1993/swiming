<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <section class="pizza">
    <img class="part1" src="@/assets/images/bg-p1.png" />
    <img class="part2" src="@/assets/images/bg-p2.png" />
    <div class="content">
      <div class="container">
        <!--  start heading -->
        <main-title
          title="Halion Food"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
        />

        <div class="text-center">
          <img src="@/assets/images/pizza.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.pizza {
  position: relative;
  z-index: 9;
  background: #0ff;
  position: relative;
  background-image: url("@/assets/images/bg.jpg");
  background-size: cover;
  z-index: 5;
  color: #fff;

  .head p {
    margin-top: 30px;
  }
  .content {
    position: relative;
    z-index: 10;
  }
  .part1 {
    width: 100px;
    position: absolute;
    z-index: 2;
    right: 35px;
    top: -125px;
    @include media-breakpoint-down(md) {
      z-index: 2;
      right: 16px;
      top: -61px;
      width: 57px;
    }
    @include media-breakpoint-up(md) {
      z-index: 2;
      right: 16px;
      top: -134px;
      width: 128px;
    }
    @include media-breakpoint-only(md) {
      width: 100px;
    }
  }
  .part2 {
    position: absolute;
    width: 150px;
    left: 30px;
    @include media-breakpoint-down(md) {
      width: 37px;
      left: 16px;
      top: 11px;
    }
    @include media-breakpoint-up(md) {
      position: absolute;
      width: 130px;
      left: 115px;
      top: 30px;
    }
    @include media-breakpoint-only(md) {
      width: 90px;
      left: 95px;
    }
    // @include media-breakpoint-up(md) {
    //   position: absolute;
    //   width: 69px;
    //   left: 45px;
    //   top: -8px;
    // }
  }
  img {
    margin: auto;
    width: 35%;
    transform: translatey(90px) scale(1.4);
    @include media-breakpoint-down(sm) {
      transform: translatey(52px) scale(1.6);
    }
  }
}
</style>
