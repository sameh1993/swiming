import { defineStore } from "pinia";

export const useAuthStore = defineStore("register", {
  state: () => ({
    idToken: null,
  }),
  getters: {
    isIdToken: (state) => {
      return state.idToken;
    },
  },
  actions: {
    updateToken(value) {
      this.idToken = value;
    },
    logout() {
      this.idToken = null;
    },
  },
});
