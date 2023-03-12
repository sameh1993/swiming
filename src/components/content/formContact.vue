<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { validatorState } from "@/components/helps/funs-helps.js";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      msg: {
        sender: "",
        email: "",
        subject: "",
        numberPhone: "",
        msg: "",
      },
      validatorState,
    };
  },
  validations() {
    return {
      msg: {
        sender: { required, minLength: minLength(6) },
        email: { required, email },
        subject: { required, minLength: minLength(10) },
        numberPhone: {
          required,
          maxLength: maxLength(14),
        },
        msg: { required, minLength: minLength(6), maxLength: maxLength(300) },
      },
    };
  },
};
</script>

<template>
  <div class="form-con">
    <div class="container">
      <form class="form">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="form-group text-capitalize">
              <label for=""> name </label>
              <input
                class="form-control"
                type="text"
                placeholder=" enter name "
                v-model="v$.msg.sender.$model"
                :class="validatorState(v$.msg.sender)"
              />
            </div>
            <p
              v-for="(error, index) in v$.msg.sender.$errors"
              class="text-danger"
            >
              {{ error.$message }}
            </p>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="form-group text-capitalize">
              <label for=""> email </label>
              <input
                class="form-control"
                type="text"
                placeholder=" enter email "
                v-model="v$.msg.email.$model"
                :class="validatorState(v$.msg.email)"
              />
            </div>
            <p
              v-for="(error, index) in v$.msg.email.$errors"
              class="text-danger"
            >
              {{ error.$message }}
            </p>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="form-group text-capitalize">
              <label for=""> subject </label>
              <input
                class="form-control"
                type="text"
                placeholder=" enter subject "
                v-model="v$.msg.subject.$model"
                :class="validatorState(v$.msg.subject)"
              />
              <p
                v-for="(error, index) in v$.msg.subject.$errors"
                class="text-danger"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="form-group text-capitalize">
              <label for=""> phone number </label>
              <input
                class="form-control"
                type="text"
                placeholder=" enter number "
                v-model="v$.msg.numberPhone.$model"
                :class="validatorState(v$.msg.numberPhone)"
              />
            </div>
            <p
              v-for="(error, index) in v$.msg.numberPhone.$errors"
              class="text-danger"
            >
              {{ error.$message }}
            </p>
          </div>

          <div class="form-group text-capitalize">
            <label for=""> your message </label>
            <textarea
              class="form-control"
              placeholder=" enter message"
              v-model="v$.msg.msg.$model"
              :class="validatorState(v$.msg.msg)"
            ></textarea>
            <p v-for="(error, index) in v$.msg.msg.$errors" class="text-danger">
              {{ error.$message }}
            </p>
          </div>
        </div>

        <button type="button" :disabled="v$.$invalid" class="btn">
          send message
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.form-con {
  padding: 2em 0;

  .row > div {
    margin-bottom: 25px;
  }

  @include media-breakpoint-down(md) {
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 15px;
    margin-bottom: 25px;
  }

  .form {
    // background-color: #f5f5f5;
    // padding: 35px 25px;
    // border-radius: 20px;

    .form-group {
      label {
        margin-left: 5px;
        font-size: 14px;
        margin-bottom: 3px;
        font-weight: 600;
      }
      .form-control {
        border-radius: 17px;
        padding: 10px 20px;
      }

      ::placeholder {
        text-transform: capitalize;
      }
    }
    .btn {
      width: 150px;
      border-radius: 25px;
      margin-left: auto;
      display: block;
      text-transform: capitalize;
      line-height: 26px;
      margin-top: 15px;
      background: var(--secondColor);
      color: #fff;
    }
    p {
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
</style>
