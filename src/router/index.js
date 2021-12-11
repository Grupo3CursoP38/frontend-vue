import { createRouter, createWebHistory } from "vue-router";
import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

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
    meta: {
      auth: true,
    },
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    let is_auth = await isAuth();

    if (!is_auth) {
      next({ name: "sign-in" });
      return;
    }
  }
  next();
});

async function isAuth() {
  if (!localStorage.getItem("setUser")) return false;

  const { data, id, refresh } = JSON.parse(localStorage.getItem("setUser"));

  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation RefreshToken($refresh: Refresh!) {
          refreshToken(refresh: $refresh) {
            access
          }
        }
      `,
      variables: {
        refresh: {
          refresh: refresh,
        },
      },
    });

    localStorage.setItem(
      "setUser",
      JSON.stringify({
        access: result.data.refreshToken.access,
        data,
        id,
        refresh,
      })
    );
    return true;
  } catch (error) {
    localStorage.clear();
    return false;
  }
}

export default router;
