import { createRouter, createWebHistory } from "vue-router";
import Home from "@/modules/home/router";
import Auth from "@/modules/auth/router";
import Profile from "@/modules/profile/router";
import Vehicles from "@/modules/vehicles/router";

const routes = [
  {
    path: "/",
    ...Home,
  },
  {
    path: "/auth",
    ...Auth,
  },
  {
    path: "/profile",
    ...Profile,
  },
  {
    path: "/vehicles",
    ...Vehicles,
  },
  {
    name: "Error",
    path: "/:pathMatch(.*)*",
    component: () =>
      import(/* webpackChunkName: "error" */ "@/global/views/Error.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
