<script setup>
import { defineProps } from "vue";

defineProps(["title", "para"]);
</script>

<template>
  <div class="head">
    <h2>{{ title }}</h2>
    <p v-if="para" class="lead">{{ para }}</p>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";
.head {
  text-align: left;
  color: #fff;
  h2 {
    font-size: 32px;
    text-transform: capitalize;
    font-family: var(--titleFont) !important;
    margin-bottom: 15px;
    width: 30%;
    letter-spacing: 2px;
    font-weight: 600;
    letter-spacing: 3px;
  }
  p {
    text-transform: capitalize;
    width: 52%;
    margin-top: 15px;
    font-size: 18px;
    letter-spacing: 2px;
    font-family: monospace;
    line-height: 2;
  }

  @include media-breakpoint-down(lg) {
    text-align: center;
    h2 {
      font-size: 28px;
      width: 100% !important;
    }
    p {
      width: 88%;
      margin-left: auto;
      margin-right: auto;
      font-size: 14px;
      width: 100%;
    }
  }

  @include media-breakpoint-down(md) {
    text-align: center;
    h2 {
      font-size: 28px;
      width: 100% !important;
    }
    p {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      font-size: 14px;
      width: 100%;
      line-height: 2;
    }
  }
}
</style>
