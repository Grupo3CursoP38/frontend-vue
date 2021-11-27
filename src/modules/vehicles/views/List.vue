<template>
  <div class="bg-gray-50">
    <Navbar class="bg-gray-50" />

    <Vehicles />
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Vehicles from "../components/Vehicles.vue";

export default {
  components: { Navbar, Vehicles },
};
</script>
