<script setup>
import { computed, onMounted } from "vue";
import { useCartsStore } from "@/stores/carts.js";
import { useProductStore } from "@/stores/products.js";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/helps/funs-helps.js";

const cartStore = useCartsStore();
const productStore = useProductStore();
const router = useRouter();
const route = useRoute();

const props = defineProps(["products"]);

const routeToDetialProduct = function (item) {
  console.log("sameh");
  productStore.assignProduct(item);
  router.push(`/product/${route.params.item}`);
  $("[data-bs-target]").click();
};

onMounted(() => {
  console.log(cartStore);
});
</script>

<template>
  <div class="cart">
    <div v-if="cartStore.products.length > 0" class="table-responsive">
      <table class="table text-center text-capitalize">
        <!-- <thead>
        <tr class="table-dark">
          <td>image</td>
          <td>product name</td>
          <td>price</td>
          <td>discount</td>
          <td>amount</td>
          <td>total</td>
          <td>
            <i class="fa fa-trash text-white"></i>
          </td>
        </tr>
      </thead> -->
        <tbody class="body">
          <tr
            class="item"
            v-for="(item, index) of cartStore.products"
            :key="index"
          >
            <td>
              <img :src="getImageUrl(item.img)" />
            </td>
            <td>
              <button class="product" @click="routeToDetialProduct(item)">
                {{ item.title.substring(0, 15) }} ....
              </button>
              <!-- <p>${{ item.price }}</p> -->
              <p class="text-danger">-{{ item.discount }}%</p>
            </td>

            <td class="amount">
              <i
                @click="cartStore.decrease(item)"
                class="fa fa-angle-left border"
              ></i>
              <div class="">{{ item.amount }}</div>
              <i
                @click="cartStore.increase(item)"
                class="fa fa-angle-right border"
              ></i>
            </td>
            <td>${{ item.total.toFixed(2) }}</td>
            <td class="flex-fill">
              <i
                @click="cartStore.deleteProduct(item.title)"
                class="fa fa-trash bg-gray"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="alert alert-danger text-capitalize display-3">
      your cart is empty
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.cart {
  .product {
    background: transparent;
    border: 0;
    outline: none;
    color: var(--secondColor);
  }
  .modal-header {
    padding: 15px 20px;
    i {
      font-size: 21px;
      margin-right: 8px;
    }
  }
  .fa-trash {
    color: var(--bs-danger);
  }

  .amount {
    display: flex;
    justify-content: center;
    div {
      font-size: 13px;
      line-height: 1.5;
      width: 21px;
      padding-top: 5px;
      height: 32px;
      background-color: var(--secondColor);
    }
    i {
      transition: all 0.4s;
      &:hover {
        background-color: var(--secondColor);
      }
    }
  }

  .body {
    .item {
      border-radius: 15px;
      border-left: 3px solid var(--secondColor);
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
      margin-bottom: 20px;
      padding-top: 5px;
      padding-bottom: 5px;
      & > * {
        flex: 1;
        // background-color: #f5f5f5 !important;
      }
      .fa {
        padding: 8px;
        margin: 0 5px;
        background-color: #d4d4d4;
      }
      img {
        width: 70px;
      }
      p {
        margin-bottom: 0;
        margin-top: 15px;
      }
    }
  }

  .alert-danger {
    padding: 10px 15px;
    font-size: 15px;
  }
}

table {
  @include media-breakpoint-down(sm) {
    min-width: 500px;
  }
  @include media-breakpoint-down(md) {
    min-width: 730px;
    tr td:first-child {
      width: 80px;
    }
  }
  .body {
    tr {
      line-height: 2;
    }
  }
}

.table > :not(caption) > * > * {
  font-size: 14px;
}
</style>
