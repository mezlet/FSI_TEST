import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import UpdateDetails from "../views/UpdateDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/update",
    name: "update",
    component: UpdateDetails,
    beforeEnter(to, from, next) {
      // ...
      if (store.state.token) {
        next();
      } else {
        next({ name: "signup" });
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
