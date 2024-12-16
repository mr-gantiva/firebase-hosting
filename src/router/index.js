import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "@/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        login: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // const auth = getAuth();
  const requiresAuth = to.matched.some((record) => record.meta.login);

  if (requiresAuth && !auth.currentUser) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
