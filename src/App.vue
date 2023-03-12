<script setup>
import navbar from "@/components/header/navbar-copy.vue";
import headerContent from "@/components/header/content-header.vue";
import ourFooter from "@/components/footer.vue";
import { useCartsStore } from "@/stores/carts.js";
import notifation from "@kyvg/vue3-notification";
import googlemap from "@/components/map/google-map.vue";

const cartStore = useCartsStore();
</script>

<template>
  <header class="header">
    <!-- start navbar -->
    <navbar />
    <!-- content  header component -->
    <headerContent />
    <!-- <googlemap /> -->
  </header>

  <!--- start router -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <!-- start footer -->
  <ourFooter />

  <Notifications class="notify" />
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.header {
  // height: 100vh;
  background-image: url("@/assets/images/bg-header.jpg");
  background-size: cover;
  position: relative;

  @include media-breakpoint-down(md) {
    background-size: 154% 100%;
    background-position: -100px;
    height: 100vh !important;
  }
  // @include media-breakpoint-down(md) {
  // }
}

body > * {
  overflow: hidden;
}

.notify {
  margin-right: 18px;
  margin-top: 18px;
}
</style>
