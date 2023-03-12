<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <div class="trainers">
    <div class="container">
      <!-- start main title -->
      <mainTitle title="meet our trainers" para="the best swimming teachers" />

      <div class="body text-center">
        <div class="d-flex justify-content-around">
          <div class="item">
            <div class="rouneded rounded-circle">dan</div>
            <h3>fintess instrunctor</h3>
          </div>

          <div class="item">
            <div class="rouneded rounded-circle">sandra</div>
            <h3>fintess instrunctor</h3>
          </div>

          <div class="item">
            <div class="rouneded rounded-circle">cam</div>
            <h3>fintess instrunctor</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";
.trainers {
  padding: 10em 0 11em;
  background-color: #00354b;
  background-image: url("/src/assets/images/bg2-trainer.jpg"),
    url("/src/assets/images/bg1-trainer.jpg");
  background-position: left 100%, center top;
  background-size: 100% 23%, 100% 20%;
  background-repeat: no-repeat, no-repeat;

  @include media-breakpoint-down(md) {
    background-size: 100% 13%;
  }

  .head {
    text-align: center !important;
    h2 {
      margin: auto !important;
      width: 100% !important;
    }
    p {
      margin: 15px auto 25px !important;
    }
    p {
      color: #fff;
    }
  }

  .body {
    color: #fff;
    .d-flex {
      margin-top: 35px;
      @include media-breakpoint-down(sm) {
        flex-wrap: wrap;
        .item {
          width: 100%;
          text-align: center;
          margin-top: 25px;
        }
      }
    }
    .rouneded {
      height: 130px;
      width: 130px;
      margin: auto;
      line-height: 130px;
      text-align: center;
      background-color: var(--mainColor);
      text-transform: capitalize;
      font-family: var(--mainColor);
      font-size: 26px;
    }
    h3 {
      margin-top: 25px;
      text-transform: capitalize;
      font-family: var(--titleFont);
    }
  }
}
</style>
