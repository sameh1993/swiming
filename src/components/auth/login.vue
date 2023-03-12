<script>
import useVulidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { loginUser } from "@/firebase/auth.js";
import { useAuthStore } from "../../stores/auth";
import { mapActions } from "pinia";
import { notify } from "@kyvg/vue3-notification";

export default {
  data() {
    return {
      v$: useVulidate(),
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      user: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["updateToken"]),
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
    logiinUser() {
      loginUser(this.user)
        .then((result) => {
          console.log(result.accessToken);
          this.updateToken(result.accessToken);
          this.$router.push("/");
          this.$notify({
            title: "authentication",
            text: "user is logged in",
          });
        })
        .catch((err) => {
          console.log(err);
          let error = err;
          if (err == "auth/user-not-found") {
            error = "user is not found";
          }
          this.$notify({
            title: "authentication",
            text: error,
          });
        });
    },
  },
};
</script>

<template>
  <div>
    <!--inner block start here-->
    <div class="signup-page-main border">
      <div class="signup-main">
        <div class="signup-head">
          <h1>Login</h1>
        </div>
        <div class="signup-block">
          <form id="login" class="form" @submit.prevent="logiinUser">
            <label for=""> email </label>
            <div class="form-group">
              <input
                autocomplete="off"
                type="text"
                :class="status(v$.user.email)"
                v-model="v$.user.email.$model"
                name="email"
                placeholder="Email"
                class="form-control"
              />
              <p
                class="text-danger"
                v-for="(item, index) of v$.user.email.$errors"
                :key="index"
              >
                {{ item.$message }}
              </p>
            </div>
            <div class="form-group">
              <label for=" "> password </label>
              <input
                autocomplete="off"
                type="password"
                name="password"
                :class="status(v$.user.password)"
                class="form-control"
                v-model="v$.user.password.$model"
                placeholder="Password"
              />
              <p
                class="text-danger"
                v-for="(item, index) of v$.user.password.$errors"
                :key="index"
              >
                {{ item.$message }}
              </p>
            </div>

            <button :disabled="v$.$invalid" class="btn-submit">Submit</button>
          </form>
          <div class="sign-down">
            <p class="text-capitalize">
              create account?
              <router-link class="text-info" to="/auth/register"
                >signup here.</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--inner block end here-->
    <!-- start footer -->
    <footer-comp></footer-comp>
    <!-- end footer -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
form {
  .alert-danger {
    padding: 11px;
    color: #fff !important;
  }
}

.signup-page-main {
  background-color: #f9f9f9;
  padding: 45px 27px;
  border-radius: 7px;
  width: 36%;
  margin: 130px auto;
  @include media-breakpoint-down(sm) {
    width: 100%;
    margin: 50px 0;
  }
  h1 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .sign-down {
    h4 {
      font-size: 13px;
      margin-top: 5px !important;
    }
  }
  input {
    border-radius: 15px;
    margin-top: 3px;
    outline: none;
    box-shadow: none;
  }
  input[type="checkbox"] {
    margin-right: 10px;
  }

  :disabled {
    opacity: 0.3;
  }

  label {
    margin-left: 5px;
    font-size: 15px;
    text-transform: capitalize;
  }

  button {
    width: 130px;
    background: var(--secondColor);
    border-radius: 19px;
    margin-top: 20px;
  }
}

.btn-submit {
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #337ab7;
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: 1em;
  display: block;
  font-family: "Carrois Gothic", sans-serif;
}

.form-group {
  margin-bottom: 17px;

  input {
    margin-bottom: 0 !important;
  }
}
</style>
