<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <div class="testimonials">
    <!-- start heading -->
    <mainTitle title="testimonials  " para="welcome testimonails paragraph" />

    <!-- body component -->
    <div class="bxslider">
      <div class="item">
        <!-- <img src="@/assets/images/" class="rounded rounded-circle" /> -->
        <div class="info text-center text-capitalize">
          <h3 class="">customer name</h3>
          <p class="lead">welcome testimonials</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: 2.7em 0;
  background-color: #f4f4f4;
  .info {
    p {
      width: 75%;
      margin: 0 auto;
    }
  }
}
</style>
