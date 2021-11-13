export default {
  name: "home",
  component: () =>
    import(
      /* webpackChunkName: "home" */ "@/modules/home/layout/HomeLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "index-home",
      component: () =>
        import(
          /* webpackChunkName: "index-home" */ "@/modules/home/views/Index.vue"
        ),
    },
  ],
};
