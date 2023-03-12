<script setup>
import maintitle from "@/components/helps/main-title.vue";

import { reactive } from "vue";
import { getImageUrl } from "@/helps/funs-helps.js";

const serivces = reactive([
  {
    image: "s1.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    image: "s2.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    image: "s3.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    image: "s4.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    image: "s5.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    image: "s6.jpg",
    title: "Temporibus quibusdam",
    para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
]);
</script>

<template>
  <div class="serivces">
    <div class="container">
      <!-- start main title -->
      <maintitle
        title="serivces"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div class="row">
        <div
          v-for="(item, index) of serivces"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <div class="item">
            <img :src="getImageUrl(item.image)" class="img-fluid" />
            <div class="info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.para }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.serivces {
  padding: 2.3em 0;

  .head {
    text-align: center;
    margin-bottom: 40px;
    h2 {
      font-size: 38px;
    }
    h2,
    p {
      margin-left: auto;
      margin-right: auto;
    }
    p {
      font-size: 16px;
    }
  }

  .item {
    background-color: #fff;
    margin-bottom: 25px;
    img {
      height: 306px;
      border-radius: 3px;
      width: 100%;
    }
    .info {
      padding: 15px;
    }
  }
}
</style>
