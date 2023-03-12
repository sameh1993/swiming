<script setup>
import aboutus from "@/components/content/about.vue";
import offers from "@/components/content/offers.vue";
import Contactus from "../components/content/contactus.vue";
</script>

<template>
  <div class="about-us">
    <aboutus />

    <!-- offerts -->
    <offers />

    <!-- start contact us -->
    <Contactus />
  </div>
</template>

<style lang="scss">
.about-us {
  .about {
    padding: 2em 0;
  }
  .offers {
    padding: 2em 0;
    .bg {
      display: none;
    }
  }
}
</style>
