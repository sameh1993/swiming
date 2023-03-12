<script setup>
import cart from "@/components/cart/cart.vue";
import orderSummary from "@/components/cart/order-summary.vue";
import { useCartsStore } from "@/stores/carts.js";
import { computed } from "vue";
const cartStore = useCartsStore();

const productsCount = computed(() => {
  return cartStore.productsCount;
});
</script>
<template>
  <section class="shippping-cart">
    <div class="container">
      <h3>your cart</h3>
      <div v-if="productsCount > 0" class="row">
        <div class="col-md-8">
          <!-- start cart --->
          <cart />
        </div>
        <div class="col-md-4">
          <orderSummary />
        </div>
      </div>
      <div v-else class="empty-cart">
        <div class="content">
          <img src="@/assets/images/empty-state-cart.svg" />
          <div class="mt-2 alert text-center">
            your cart is empty . press start for add to cart
          </div>
          <router-link class="main-button" to="/menu">
            start shopping
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.shippping-cart {
  text-transform: capitalize;
  min-height: 400px;
  h3 {
    margin-bottom: 25px;
  }

  .order-summary {
    margin-bottom: 5px;
  }
  .item {
    .parent-img {
      width: 170px;
      text-align: center;
      img {
        width: 100px;
      }
    }
  }

  .empty-cart {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    .alert {
      font-size: 18px;
      color: var(--secondColor);
      margin-bottom: 0;
    }
    .content {
      text-align: center;
      img {
        display: block;
        margin: auto;
      }
      a {
        background-color: var(--secondColor);
        border-radius: 25px;
        color: #fff;
        text-transform: capitalize;
        text-decoration: none;
        display: block;
        padding: 8px 13px;
        width: 180px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>
