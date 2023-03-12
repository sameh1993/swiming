<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <div class="about">
    <div class="container">
      <!-- start about title-->
      <main-title
        title="about us"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit.  at dolores ipsam? Quasi rerum enim "
      />

      <!-- start bosy -->
      <div class="body">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="item">children `s pool`</div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="item">training zone</div>
          </div>

          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="item">thermal weaters</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";
.about {
  background-image: url("@/assets/images/bg-about.jpg");
  background-size: 100% 86%;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 3em 0;
  .head {
    text-align: center;
    color: #fff;
    h2 {
      margin: 15px auto;
      font-size: 55px;
      width: 100%;
    }
    p {
      margin: 15px auto;
    }
    @include media-breakpoint-down(md) {
      text-align: center;
    }
  }
  p {
    color: #fff;
  }
  .body {
    padding: 25px 0;
    text-align: center;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.7);
      height: 345px;
      font-size: 35px;
      text-transform: capitalize;
      font-family: var(--titleFont);
      margin-top: 25px;
      font-weight: 600;
      @include media-breakpoint-down(md) {
        width: 70%;
        margin: 10px auto;
        font-size: 21px;
        height: 250px;
      }
      @include media-breakpoint-down(sm) {
        width: 90%;
      }
    }
  }
}
</style>
