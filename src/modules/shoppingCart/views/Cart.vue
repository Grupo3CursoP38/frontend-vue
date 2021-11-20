<template>
  <div class="bg-gray-50">
    <Navbar />

    <main class="w-full container mx-auto">
      <h1 class="font-bold text-2xl my-6 container mx-auto px-4 sm:px-8">
        Tu carrito (9)
      </h1>
      <Table />
    </main>
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Table from "../components/Table.vue";

export default {
  components: { Navbar, Table },
  setup() {},
};
</script>
