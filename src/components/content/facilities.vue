<script setup>
import maintitle from "@/components/helps/main-title.vue";
import { reactive } from "vue";
import { getImageUrl } from "@/helps/funs-helps.js";

const facilities = reactive([
  {
    img: "fac1.png",
    title: "first responders",
  },
  {
    img: "offer2.png",
    title: "kids zones",
  },
  {
    img: "fac3.png",
    title: "launge area",
  },
  {
    img: "fac4.png",
    title: "pool zones",
  },
  {
    img: "fac5.png",
    title: "changing rooms",
  },
  {
    img: "fac6.png",
    title: "showers",
  },
]);
</script>

<template>
  <div class="facilities">
    <div class="container">
      <!-- start heading -->
      <maintitle title="facilities" />

      <!-- start body-->
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
        <div
          v-for="(item, index) of facilities"
          :key="index"
          class="item text-center col"
        >
          <img :src="getImageUrl(item.img)" />
          <h4 class="text-capitalize">{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";
.facilities {
  padding: 2em 0;
  h2 {
    text-align: center;
    font-weight: bold;
    margin: auto;
    margin-bottom: 25px;
    font-size: 55px;
  }
  .row {
    img {
      height: 90px;
      margin: 25px 0;
    }
    h4 {
      color: #fff;
      font-size: 20px !important;
    }
    @include media-breakpoint-down(sm) {
      @include row-cols(1);
    }
  }
}
</style>
