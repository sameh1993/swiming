import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  scrollBehavior(to, from, savePosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/trainer",
      name: "our trainers",
      component: () => import("@/views/trainer.vue"),
    },
    {
      path: "/serivces",
      name: "our serivces",
      component: () => import("@/views/serivces.vue"),
    },
    {
      path: "/contact",
      name: "constact us",
      component: () => import("@/views/contactus.vue"),
    },
    {
      path: "/login",
      component: () => import("@/components/auth/login.vue"),
      name: "login",
    },
    {
      path: "/register",
      component: () => import("@/components/auth/register.vue"),
      name: "register",
    },
    {
      path: "/catchAll(.*)*",
      name: "not found",
      component: () => import("@/views/not-found-page.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  // const cartStore = useAuthStore();
  // const isAuthenticated = cartStore.isIdToken;
  // if (
  //   // make sure the user is authenticated
  //   !isAuthenticated &&
  //   // ❗️ Avoid an infinite redirect
  //   to.name !== "login"
  // ) {
  //   // redirect the user to the login page
  //   return { name: "login" };
  // }
});

export default router;
