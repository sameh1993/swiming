<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <div class="special">
    <div class="container">
      <!-- start main title -->
      <main-title
        title="we offer something special everyone"
        para="begginer and prefessials"
      />

      <!-- start body -->
      <div class="content text-right text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        necessitatibus tempore quas illo animi saepe fuga tenetur? Nobis odit
        culpa hic, ut maiores a, quod aliquam porro quidem, saepe magnam!
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";
.special {
  height: 700px;
  background-image: url("@/assets/images/bg-special.jpg");
  background-position: right top;
  background-size: 100% 90%;
  padding: 25px 0;
  .head {
    position: relative;
    z-index: 5;
    @include media-breakpoint-up(md) {
      h2 {
        width: 70%;
      }
    }
    @include media-breakpoint-up(lg) {
      h2 {
        width: 44%;
      }
    }
  }

  .container {
    position: relative;
    height: 100%;

    .content {
      position: absolute;
      right: 30px;
      bottom: 25px;
      text-align: right;
      width: 47%;
      line-height: 1.9;
      @include media-breakpoint-down(md) {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
