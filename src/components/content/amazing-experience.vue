<script setup>
import mainTitle from "@/components/helps/main-title.vue";
</script>

<template>
  <div class="amazing">
    <div class="container">
      <!-- start title -->
      <main-title
        title="amazing experience"
        para="for begginers and professionals"
      />

      <p class="text-right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        accusamus placeat deserunt ipsam amet ex eligendi quod explicabo soluta!
        Odit ratione commodi, accusamus tempora minus consequatur iure officiis
        amet nostrum!
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.amazing {
  height: 670px;
  padding: 2em 0;
  color: #fff;
  background-image: url(/src/assets/images/amazing.jpg);
  background-size: cover;
  background-position: left;
  background-size: 100% 100%;

  .head {
    text-align: right;
    h2 {
      margin-left: auto;
    }
    p {
      margin-left: auto;
      text-align: right;
      margin-bottom: 5px;
      line-height: 1.8;
    }
  }
  .text-right {
    text-align: right;
    line-height: 2.1;
    width: 65%;
    margin-left: auto;
  }
}
</style>
