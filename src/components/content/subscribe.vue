<script>
import mainTitle from "@/components/helps/main-title.vue";

export default {
  components: {
    mainTitle,
  },
};
</script>

<template>
  <section class="subscribe">
    <div class="container">
      <main-title
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. "
        title="Subscribe to get email"
      />

      <form class="form">
        <input
          type="text"
          class="form-group"
          placeholder=" enter your email "
        />
        <button type="submit" class="text-capitalize">subscribe</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/main.scss";
.subscribe {
  padding-top: 130px;
  text-align: center;
  .head {
    h2 {
      font-size: 36px;
      @include media-breakpoint-down(md) {
        font-size: 22px;
      }
    }
  }
  form {
    margin-top: 25px;

    input {
      border-radius: 25px 0 0 25px;
      padding: 14px 20px;
      outline: 0;
      min-width: 35%;
      border: 1px solid var(--mainColor);
    }
    button {
      padding: 15px 25px;
      background-color: var(--mainColor);
      border-radius: 0 25px 25px 0;
      border: 0;
      color: #f6f6f6;
    }
  }

  @include media-breakpoint-down(sm) {
    padding-top: 62px;
    .head {
      h2 {
        font-size: 22px;
      }
      p {
        margin-top: 50px;
      }
    }

    form {
      button {
        font-size: 14px;
        padding: 12px 20px;
      }
      input {
        font-size: 14px;
        padding: 10px 17px;
      }
    }
  }
}
</style>
