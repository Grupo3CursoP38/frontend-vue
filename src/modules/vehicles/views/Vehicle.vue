<template>
  <div class="bg-gray-50 h-screen">
    <Navbar class="bg-gray-50" />

    <Individual />
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Individual from "@/modules/vehicles/components/Individual.vue";

export default {
  components: { Individual, Navbar },
};
</script>
