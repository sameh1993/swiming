<script setup>
import mainButton from "../helps/main-button.vue";
import mainTitle from "../helps/main-title.vue";
import { ref } from "vue";
import { getImageUrl } from "@/components/helps/funs-helps.js";

const serivces = ref([
  {
    name: "adults",
    image: "offer1.png",
    desc: `Lorem ipsum dolor `,
  },
  {
    name: "children",
    image: "offer2.png",
    desc: `Lorem ipsum dolor `,
  },
  {
    name: "family",
    image: "offer3.png",
    desc: `Lorem ipsum dolor `,
  },
]);
</script>

<template>
  <div class="offers">
    <div class="bg">
      <img src="@/assets/images/bg-offer2.jpg" />
    </div>
    <div class="container">
      <!-- start head -->
      <mainTitle
        title="we offer something
special for everyone"
        para="begginers and professionals"
      />

      <!-- start body -->
      <div class="body">
        <div class="container">
          <div class="row">
            <div v-for="(item, index) of serivces" class="col-md-4 col-sm-12">
              <div class="item">
                <div class="info">
                  <h4>{{ item.name }}</h4>
                  <p>{{ item.desc }}</p>
                </div>
                <div class="parent-img">
                  <img :src="getImageUrl(item.image)" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- redax section -->

    <div class="redax">
      <div class="container">
        <div class="content">
          <mainTitle
            title=" redax under water "
            para="begginers and professionals"
          />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            corrupti obcaecati porro possimus unde ea consequatur modi iure
            ratione fugiat repellat veritatis sit, accusantium tempora cumque
            accusamus impedit dolorem at.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/main.scss";

.offers {
  position: relative;
  background-image: url("@/assets/images/bg-redax.jpg");
  background-position: center 47%, center;
  background-repeat: no-repeat;
  background-size: 100% 79%;

  @include media-breakpoint-down(md) {
    background-position: center 82%, center bottom;
    background-size: 100% 60%, 100% 7.2%;
  }

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    img {
      width: 100%;
    }
  }

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
  .row {
    display: flex;
    justify-content: space-around;
    & > div {
      margin-top: 25px;
      text-align: center;

      .item {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        height: 310px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        z-index: 60;
        @include media-breakpoint-only(sm) {
          width: 75%;
          margin: auto;
          border-radius: 10px;
          height: 268px;
        }
        img {
          width: 90px;
          color: var(--mainColor);
        }
        h4 {
          text-transform: capitalize;
          font-family: var(--titleFont);
          font-weight: 600;
          font-size: 40px;
        }
      }
    }
    @include media-breakpoint-down(md) {
      background-position: center 82%, center bottom;
      background-size: 100% 730px, 100% 10%;
    }
    @include media-breakpoint-only(md) {
      background-position: center 52%, center bottom;
    }
    @include media-breakpoint-down(sm) {
      background-position: center 73%, center bottom;
      background-size: 100% 660px, 100% 10%;
    }
  }

  .redax {
    height: 650px;
    .container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
      .content {
        padding: 10px;
        color: #fff;
        padding-bottom: 30px;
      }

      @include media-breakpoint-down(md) {
        .head {
          text-align: left;
        }
        // .content {
        //   margin-bottom: 30px;
        // }
      }
    }
  }
}
</style>
