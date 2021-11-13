export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: "auth" */ "@/modules/auth/layout/AuthLayout.vue"
    ),
  children: [
    {
      path: "sign-in",
      name: "sign-in",
      component: () =>
        import(
          /* webpackChunkName: "sign-in" */ "@/modules/auth/views/SignIn.vue"
        ),
    },
    {
      path: "sign-up",
      name: "sign-up",
      component: () =>
        import(
          /* webpackChunkName: "sign-up" */ "@/modules/auth/views/SignUp.vue"
        ),
    },
  ],
};
