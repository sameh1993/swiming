<script setup>
import $ from "jquery";
import { onMounted, computed } from "vue";
import { useCartsStore } from "@/stores/carts.js";
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";

const cartStore = useCartsStore();
const authStore = useAuthStore();
const Router = useRouter();

const productCount = computed(() => {
  return cartStore.productsCount;
});

const routeToCart = function () {
  if (authStore.isIdToken) {
    Router.push("/shopping-cart");
  } else {
    Router.push("/auth/login");
    notify({
      title: "authentication",
      text: "you must be loggedin before add to cart",
    });
  }
};

onMounted(() => {
  $(".nav-item").click(function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".nav-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"> W </router-link>

      <div class="d-flex items">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" aria-current="page" to="/">
                home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/trainer">
                trainers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about">
                about us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/serivces">
                serivces
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                contact us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/main.scss";

.navbar {
  position: absolute;
  left: 0;
  right: 0;
  padding: 11px 3px;
  z-index: 300;
  padding-top: 15px;

  @include media-breakpoint-down(md) {
    padding-top: 0 !important;
  }

  @include media-breakpoint-down(lg) {
    .nav-item {
      transition: all 0.4s;
      &:hover {
        background-color: var(mainColor);
      }
    }
  }

  .container {
    position: relative;
    border-bottom: 2px solid #fff;
    padding-bottom: 15px;
    background: rgba(0, 0, 0, 0.4);
    padding-top: 12px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .navbar-brand {
    font-family: var(--titleFont);
    padding-left: 10px;
  }

  .items {
    .icons {
      display: flex;

      .profile {
        margin-left: 10px;
        margin-right: 10px;
        & > .nav-link {
          background-color: transparent;
        }
        &:hover {
          background: transparent !important;
        }
        .nav-item {
          padding: 15px;
          font-family: monospace;
        }
        a {
          padding-left: 0;
          padding-right: 0;
        }
      }
      .nav-item {
        font-size: 19px;
        .nav-link {
          &::after {
            display: none;
          }
        }
      }

      .active {
        color: #fff !important;
      }
    }
    @include media-breakpoint-down(md) {
      flex-direction: row-reverse;
      align-items: center;

      .icons {
        padding-top: 0 !important;
      }
    }
  }

  .position-relative {
    .dropdown-menu {
      left: auto;
      right: 0;
    }
    img {
      width: 45px;
    }
  }

  .cart-icon {
    position: relative !important;
    // margin-right: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 25px !important;
    @include media-breakpoint-down(lg) {
      margin-top: 5px;
      margin-left: auto;
      margin-right: auto;
      a {
        color: #777 !important;
      }
    }
    i {
      font-size: 21px;
      font-weight: 600;
    }
    span {
      background-color: #f00;
      border-radius: 50%;
      font-size: 9px;
      position: absolute;
      left: 7px;
      top: 0;
      text-align: center;
      color: #fff;
      padding: 2px;
    }
  }

  .navbar-brand {
    color: #fff;
    font-size: 23px;
    font-family: var(---mainFont);
    span {
      color: var(--secondColor);
      font-size: 32px;
      margin-bottom: 5px;
    }
  }
  .nav-item {
    position: static;
    text-transform: capitalize;
    background-color: transparent;
    font-size: 19px;
    user-select: none;
    font-family: var(--titleFont);
    &.active a {
      color: var(--secondColor);
    }
    .nav-link {
      position: relative;
      z-index: 5;
      color: #fff;
      font-family: var(--titleFont);
      user-select: none;

      @include media-breakpoint-down(md) {
        &:hover {
          background-color: #fff;
        }
      }
    }
  }

  .dropdown-menu {
    padding: 15px 10px;
    @include media-breakpoint-down(sm) {
      margin-left: 13px;
      margin-right: 13px;
    }

    .dropdown-item {
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
      .nav-link {
        color: #fff !important;
      }
    }
  }

  .navbar-collapse {
    @include media-breakpoint-up(sm) {
      .navbar-nav {
        align-items: center;
      }
    }

    .nav-link {
      transition: all 0.3s ease-in-out;
      @include media-breakpoint-down(lg) {
        color: #333;

        &:hover {
          background-color: #fff;
        }
      }
    }
  }

  & > .dropdown {
    position: static;
    .navbar-collapse > .dropdown-menu {
      min-width: 790px;
      padding: 23px 20px;
      position: absolute !important;
      top: 100%;
      border-top: 1px solid #ababab;
      z-index: 10;

      @include media-breakpoint-up(md) {
        padding: 13px 8px;
        margin-left: 50px !important;
      }

      .dropdown-item {
        font-size: 12px;
        padding-left: 4px;
        background: transparent !important;

        &:before {
          font-family: "fontAwesome";
          content: "\f105";
          margin-right: 8px;
          text-decoration: none !important;
        }

        &.active,
        &:hover {
          background-color: transparent;
          color: inherit;
        }

        .nav-link {
          @include media-breakpoint-up(md) {
            &:hover {
              text-decoration: underline !important ;
              background-color: transparent !important;
            }
          }
        }
      }

      .row > div:last-child {
        padding-top: 30px;
      }
    }
  }

  .navbar-toggler {
    border: 1px solid #fff;
    color: #fff;
    padding: 6px 9px;
    font-size: 20px;
    border-radius: 4px;
    .nav-link {
      text-decoration: none;
    }
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .right {
    .cart {
      position: relative;

      .fa-shopping-cart {
        font-size: 27px;
        color: var(---mainColor);
      }

      span {
        line-height: 14px;
        background-color: var(--secondColor);
        position: absolute;
        top: -2px;
        right: -4px;
        border-radius: 50%;
        font-size: 10px;
        padding: 3px;
      }
    }
    li {
      margin-left: 15px;
      font-size: 21px;
    }
  }

  @include media-breakpoint-up(sm) {
    .navbar-expand-lg .navbar-nav {
      align-items: center;
    }
  }
}

.navbar-toggler:hover {
  outline: none;
}

.navbar-toggler {
  outline: none;
  box-shadow: none !important;
}

.navbar-collapse {
  @include media-breakpoint-down(lg) {
    position: absolute !important;
    top: 119%;
    right: 0;
    left: 0;
    background: #f8f9fa;
    z-index: 60;
    margin-left: 15px;
    margin-right: 15px;
    border-top: 1px solid #ababab;

    .dropdown-item {
      font-size: 13px;
      &:hover {
        background-color: transparent !important;
      }
    }

    img {
      width: 62%;
      margin: 25px auto;
      display: block;
    }
  }
  @include media-breakpoint-down(md) {
    padding: 15px 19px;
    .nav-item {
      margin-left: 10px;
    }
  }
}

form {
  @include media-breakpoint-up(sm) {
    margin: 5px 10px;
  }
  .btn {
    position: absolute;
    right: 0;
  }

  input {
    border-radius: 25px !important;
    padding-left: 15px;
    padding-right: 15px;
    height: 38px;
  }
}
</style>
