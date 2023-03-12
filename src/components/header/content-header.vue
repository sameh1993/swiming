<script setup>
import mainButton from "@/components/helps/main-button.vue";
import { useRoute, RouterLink } from "vue-router";
import banner from "@/components/helps/banner.vue";

const route = useRoute();
</script>

<template>
  <div :class="$route.name == 'home' ? 'home' : ''" class="content-header">
    <div v-if="$route.name == 'home'" class="container">
      <div class="row">
        <div class="info col-md-4 col-sm-12"></div>
        <div class="right col-md-8 col-sm-12">
          <div class="content">
            <h2>wiston pool</h2>
            <p>swim, train and have fun</p>

            <button class="brn">
              <i class="fa fa-search"></i>
              search
            </button>

            <button class="brn">
              <i class="fa fa-envelope"></i>
              contact
            </button>
          </div>
        </div>
      </div>
    </div>

    <banner v-else />
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.content-header {
  height: 100vh;

  position: relative;
  .right {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    flex-direction: column;
    color: #fff;
    padding-right: 20px;

    .content {
      text-align: right;
      // transform: translateY(60px);
      h2 {
        font-size: 80px;
        letter-spacing: 3px;
        font-family: var(--titleFont);
      }

      p {
        font-size: 32px;
        margin-bottom: 40px;
      }

      button {
        display: block;
        margin-left: auto;
        background-color: var(--mainColor);
        border-radius: 0 10px 0 15px;
        min-width: 150px;
        border: 0;
        overflow: hidden;
        position: relative;
        padding: 9px;
        margin-bottom: 20px;
        padding-left: 30px;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 30px;
        i {
          background-color: #fff;
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
          width: 37px;
          color: #000;
          line-height: 37px;
        }
      }
    }
  }
  .info {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 80px;
      margin-bottom: 50px;
    }
    h2 {
      font-size: 80px;
      text-transform: capitalize;
      font-family: var(--titleFont);
      margin-bottom: 85px;
    }
    p {
      line-height: 2;
      text-transform: capitalize;
    }
    button {
      background-color: #fff;
      border: 1px solid var(--mainColor);
      color: var(--mainColor);
      width: 150px;
      padding: 10px 0;
      &:hover {
        background-color: var(--secondColor);
        color: #fff;
      }
    }
    @include media-breakpoint-only(md) {
      h2 {
        font-size: 40px;
      }

      p {
        font-size: 13px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .right {
      h2 {
        font-size: 45px !important;
      }
      p {
        font-size: 22px !important;
      }
      img {
        width: 55%;
        display: block;
        transform: translate(0px, 52px) scale(1.5);
        margin: auto;
      }
    }
  }

  @include media-breakpoint-between(sm, md) {
    .right {
      h2 {
        font-size: 60px;
      }
    }
  }
}
</style>
