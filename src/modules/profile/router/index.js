export default {
  name: "profile",
  component: () =>
    import(
      /* webpackChunkName: "profile" */ "@/modules/profile/layout/ProfileLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "profile-home",
      component: () =>
        import(
          /* webpackChunkName: "profile-home" */ "@/modules/profile/views/Profile.vue"
        ),
    },
    {
      path: "edit",
      name: "profile-edit",
      component: () =>
        import(
          /* webpackChunkName: "profile-edit" */ "@/modules/profile/views/Edit.vue"
        ),
    },
    {
      path: "my-rental",
      name: "profile-rental",
      component: () =>
        import(
          /* webpackChunkName: "profile-rental" */ "@/modules/profile/views/Rental.vue"
        ),
    },
  ],
};
