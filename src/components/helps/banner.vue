<script setup>
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="nav text-capitalize">
    <div class="container">
      <h3>{{ route.name }}</h3>
      <div class="c">
        <RouterLink class="me-2" to="/"> home </RouterLink><span> > </span>
        {{ " " + route.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding: 20px;
  color: #fff;
  font-size: 30px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.2);
  .c {
    font-size: 14px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
  span {
    margin-right: 10px;
    color: #fff;
    font-weight: 600;
  }
}
</style>
