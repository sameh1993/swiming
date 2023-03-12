<script setup>
import pagination from "@/components/jwPagination.vue";
import { useProductStore } from "@/stores/products.js";
import { ref, reactive, computed } from "vue";
import mainButton from "@/components/helps/main-button.vue";
import { mapState } from "pinia";
import { getImageUrl } from "@/helps/funs-helps.js";
import { useCartsStore } from "@/stores/carts.js";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";

const productStore = useProductStore();
const cartStore = useCartsStore();
const Router = useRouter();

const muImg = getImageUrl;

let ourProducts = ref([]);
const customLabels = reactive({
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
});

const products = computed(() => {
  return productStore.products;
});

const onChangePage = function (pageOfItems) {
  ourProducts.value = pageOfItems;
};

const ImageUrl = function (img) {
  const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
  return imageUrl;
};

const addToCart = function (item) {
  cartStore.addToCart(item);
  notify({
    title: "shopping cart",
    text: "item is added to cart",
  });
};
</script>

<template>
  <section class="special-menu">
    <div class="container">
      <!-- <mainTitle title="special-menus" /> -->

      <div v-for="(item, index) of ourProducts" class="item d-flex">
        <div class="img flex-fill text-center">
          <img class="rounded rounded-circle" :src="getImageUrl(item.img)" />
        </div>
        <div class="name flex-fill">
          <h3>{{ item.title }}</h3>
          <p class="text-success text-bold">{{ item.discount }}% discount</p>
        </div>
        <div class="price flex-fill">${{ item.price }}</div>
        <div class="flex-fill">
          <mainButton @some-event="addToCart(item)" name="add to card" />
        </div>
      </div>

      <div class="ourPagination">
        <pagination
          :items="products"
          :labels="customLabels"
          :pageSize="7"
          @changePage="onChangePage"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/main.scss";

.ourPagination {
  margin: 25px auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.special-menu {
  .item {
    padding: 15px;
    background: #ededed;
    margin-bottom: 20px;
    border-radius: 8px;
    align-items: center;
    border-left: 3px solid var(--secondColor);

    @include media-breakpoint-up(lg) {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }

    @include media-breakpoint-down(md) {
      flex-direction: column;
      text-align: center;
      img {
        margin-bottom: 15px;
        width: 80px;
        height: 90px;
      }
      button {
        margin-top: 15px;
      }
    }
  }

  h3 {
    font-size: 1.4 rem !important;
  }

  img {
    height: 115px;
    width: 110px;
    border: 1px solid var(--second);
  }

  button {
    background-color: var(--secondColor) !important;
    border: 1px solid var(--secondColor);
    &:hover {
      background-color: #000 !important;
      color: #fff;
    }
    @include media-breakpoint-up(sm) {
      margin-bottom: 0 !important;
    }
  }

  .active > .page-link {
    background-color: var(--secondColor) !important;
  }
}
</style>
