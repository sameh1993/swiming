<script>
import useVulidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { signupUser } from "@/firebase/auth.js";
import { notify } from "@kyvg/vue3-notification";
export default {
  setup() {
    return { v$: useVulidate() };
  },
  data() {
    return {
      user: {
        name: "sameh sayed",
        email: "sameh@gmail.com",
        password: "sameh200320",
        confirmPass: "sameh200320",
      },
    };
  },
  validations() {
    return {
      user: {
        name: { required, minLength: minLength(6) },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPass: { required, sameAsPassword: sameAs(this.user.password) },
      },
    };
  },
  methods: {
    status(validation) {
      return {
        dirty: validation.$dirty,
        error: validation.$error,
      };
    },
    signupUser() {
      const userData = {
        email: this.user.email,
        password: this.user.password,
      };
      signupUser(userData)
        .then((result) => {
          console.log(result);

          this.$notify({
            title: "authentication",
            text: "user is registered",
          });
        })
        .catch((err) => {
          let error = err.errorCode;
          if (error == "auth/email-already-in-use") {
            error = "this email is  already in use";
          }
          error.replaceAll("auth/", "");
          error.replaceAll("-", "");
          console.log(error);
          notify({ title: "authentication", text: error });
        });
    },
  },
};
</script>

<template>
  <!--inner block start here-->
  <div class="signup-page-main border">
    <div class="signup-main">
      <div class="signup-head">
        <h1 class="text-small">Sign Up</h1>
      </div>
      <div class="signup-block">
        <form id="form" class="form" @submit.prevent="signupUser()">
          <div class="form-group">
            <label for=""> your name </label>
            <input
              type="text"
              :class="status(v$.user.name)"
              v-model="v$.user.name.$model"
              name="name"
              placeholder=" fullname name"
              class="form-control"
            />
            <p
              class="text-danger"
              v-for="(item, index) of v$.user.name.$errors"
              :key="index"
            >
              {{ item.$message }}
            </p>
          </div>

          <div class="form-group">
            <label for=""> your email </label>

            <input
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
            <label for=""> enter passsword </label>

            <input
              type="password"
              :class="status(v$.user.password)"
              v-model="v$.user.password.$model"
              name="password"
              placeholder="password"
              class="form-control"
            />
            <p
              class="text-danger"
              v-for="(item, index) of v$.user.password.$errors"
              :key="index"
            >
              {{ item.$message }}
            </p>
          </div>
          <div class="form-group">
            <label for=""> comfirm password </label>

            <input
              type="password"
              name="password"
              :class="status(v$.user.confirmPass)"
              class="lock form-control"
              v-model="v$.user.confirmPass.$model"
              placeholder=" comfirm password "
            />
            <p
              class="text-danger"
              v-for="(item, index) of v$.user.confirmPass.$errors"
              :key="index"
            >
              {{ item.$message }}
            </p>
          </div>
          <button :disabled="v$.$invalid" class="btn-submit mb-2">
            Submit
          </button>
        </form>
        <div class="sign-down">
          <p>
            Already have an account?
            <router-link class="text-info" to="/auth/login"
              >Login here.</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--inner block end here-->
</template>

<style lang="scss" scoped>
@import "@/main.scss";

:disabled {
  opacity: 0.5;
}

.signup-page-main {
  background-color: #f9f9f9;
  padding: 45px 27px 25px;
  border-radius: 10px;
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
    outline: none;
    box-shadow: none;
  }
  label {
    display: inline-block;
    font-size: 12px;
    text-transform: capitalize;
    font-size: 14px;
    margin-bottom: 2px;
    margin-left: 5px;
  }
  input[type="checkbox"] {
    margin-right: 10px;
  }
  .text-danger {
    margin-top: 4px;
  }

  button {
    border-radius: 19px;
    width: 130px;
    background-color: var(--secondColor);
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

.sign-down {
  p {
    text-transform: capitalize;
  }
}
</style>
