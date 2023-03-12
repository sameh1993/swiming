<script setup>
import { useCartsStore } from "@/stores/carts.js";
import { computed } from "vue";
const cartStore = useCartsStore();

const productsCount = computed(() => {
  return cartStore.productsCount;
});

const totalPrice = computed(() => {
  return cartStore.getMainTotal;
});
</script>

<template>
  <div class="order">
    <h4 class="text-capitalize">order summary</h4>
    <div class="subtotal d-flex justify-centent-between">
      <h5>
        subtotal ( {{ productsCount }} item{{ productsCount > 1 ? "s" : "" }} )
      </h5>
      <div>{{ totalPrice }}</div>
    </div>
    <div class="shipping d-flex justify-centent-between">
      <h5>shipping</h5>
      <div class="text-success">free</div>
    </div>
    <hr />
    <div class="total-price d-flex justify-centent-between">
      <div>total :</div>
      <div>${{ totalPrice }}</div>
    </div>
    <hr />
    <div class="checkout">
      <button class="btn">checkout</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 15px;

  h4 {
    margin-bottom: 15px;
  }
  .d-flex {
    justify-content: space-between;
    font-size: 15px;
  }
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  .total-price {
    font-weight: bold;
  }
  .checkout {
    text-align: center;
    button {
      border-radius: 15px;
      width: 120px;
      background-color: var(--secondColor);
      color: #fff;
      text-transform: capitalize;
    }
  }
}
</style>
