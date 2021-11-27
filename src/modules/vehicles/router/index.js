export default {
  name: "vehicles",
  component: () =>
    import(
      /* webpackChunkName: "vehicles " */ "@/modules/vehicles/layout/VehiclesLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "list-vehicles",
      component: () =>
        import(
          /* webpackChunkName: "list-vehicles" */ "@/modules/vehicles/views/List.vue"
        ),
    },
    {
      path: "rental",
      name: "rental-vehicles",
      component: () =>
        import(
          /* webpackChunkName: "rental-vehicles" */ "@/modules/vehicles/views/Rental.vue"
        ),
    },
  ],
};
