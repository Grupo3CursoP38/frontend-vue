export default {
  name: "products",
  component: () =>
    import(
      /* webpackChunkName: "products" */ "@/modules/products/layout/ProductsLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "list-products",
      component: () =>
        import(
          /* webpackChunkName: "list-products" */ "@/modules/products/views/List.vue"
        ),
    },
    {
      path: "rental",
      name: "rental-products",
      component: () =>
        import(
          /* webpackChunkName: "rental-products" */ "@/modules/products/views/Rental.vue"
        ),
    },
  ],
};
