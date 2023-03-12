<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <routerLink class="navbar-brand text-white" to="/">Navbar</routerLink>
      <button
        class="navbar-toggler fa fa-bars"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/"> menu </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/"> our story </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/"> contact us </RouterLink>
          </li>
        </ul>
        <form class="d-flex position-relative">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.navbar {
  background-color: transparent;
  border: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  .nav-brand {
    color: #fff;
  }

  .nav-item {
    .nav-link {
      color: #fff;
      text-transform: capitalize;
      font-family: var(--mainFont);
    }
  }

  form {
    .btn {
      position: absolute;
      right: 0;
    }
  }
}

.navbar-toggler {
  background: #666;
  color: #fff;
  border: 1px solid #fff;
  padding: 4px 6px;
  font-size: 20px;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
}

.navbar-collapse {
  background-color: var(--bs-dark);
  padding: 7px;
  margin-top: 5px;
  border-top: 1px solid var(--mainColor);
}
</style>
