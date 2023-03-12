<script setup>
import { defineProps } from "vue";

const props = defineProps(["name"]);
</script>

<template>
  <button class="main-bottom btn" @click="$emit('someEvent')">
    {{ name }}
  </button>
</template>

<style lang="scss">
@import "@/main.scss";
</style>
