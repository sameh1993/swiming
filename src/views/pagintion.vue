<template>
  <div class="card text-center m-3">
    <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
    <div class="card-body">
      <!-- <div v-for="(item, index) in pageOfItems" :key="index">
        {{ item.title }}
      </div> -->
    </div>
    <div class="card-footer pb-0 pt-3"></div>
  </div>
</template>

<script>
// import jwPaginationCustom from "@/components/jwPagination.vue";
import { mapState } from "pinia";
import { useProductStore } from "@/stores/products.js";

export default {
  components: {
    paginateComponent,
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  computed: {
    ...mapState(useProductStore, ["products"]),
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style lang="scss">
@import "@/main.scss";

.active > .page-link {
  background-color: var(--mainColor) !important;
}

.disabled {
  display: none !important;
}
</style>
