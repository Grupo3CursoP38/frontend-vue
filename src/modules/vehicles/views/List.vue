<template>
  <div class="bg-gray-50">
    <Navbar class="bg-gray-50" />

    <Product />
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Product from "../components/Product.vue";

export default {
  components: { Navbar, Product },
};
</script>
