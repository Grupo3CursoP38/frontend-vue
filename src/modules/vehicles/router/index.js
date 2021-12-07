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
          /* webpackChunkName: "vehicles" */ "@/modules/vehicles/views/List.vue"
        ),
    },
    {
      path: "rental",
      name: "rental-vehicles",
      component: () =>
        import(
          /* webpackChunkName: "vehicles" */ "@/modules/vehicles/views/Rental.vue"
        ),
    },
    {
      path: ":id",
      name: "vehicle",
      component: () =>
        import(
          /* webpackChunkName: "vehicles" */ "@/modules/vehicles/views/Vehicle.vue"
        ),
    },
  ],
};
