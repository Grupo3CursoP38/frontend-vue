export default {
  name: "shopping-cart",
  component: () =>
    import(
      /* webpackChunkName: "shopping-cart" */ "@/modules/shoppingCart/layout/ShoppingCartLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "cart-shopping-cart",
      component: () =>
        import(
          /* webpackChunkName: "cart-shopping-cart" */ "@/modules/shoppingCart/views/Cart.vue"
        ),
    },
  ],
};
