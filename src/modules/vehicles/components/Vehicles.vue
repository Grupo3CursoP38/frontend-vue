<template>
  <main class="container mx-auto">
    <h1 class="text-center font-bold text-2xl my-5">Products List</h1>
    <section class="grid">
      <div v-for="vehicle in vehicles" :key="vehicle.id">
        <article
          v-if="vehicle.is_active"
          class="bg-purple-50 rounded-md shadow-md"
        >
          <img
            :src="vehicle.img_url"
            class="w-full"
            width="10"
            height="10"
            alt=""
          />
          <div class="px-5 py-5">
            <router-link
              :to="`/vehicles/${slug(vehicle.name)}`"
              class="font-semibold text-lg my-3 block hover:underline"
              >{{ vehicle.name }}</router-link
            >
            <p class="text-gray-600">{{ vehicle.short_description }}</p>
            <div class="my-2 flex justify-between">
              <span>Tipo: {{ vehicle.type }}</span>
              <button
                class="
                  hover:text-purple-500
                  underline
                  font-semibold
                  text-gray-800
                "
              >
                Reservar
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from "vue-demi";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters } = useStore();
    const vehicles = computed(() => getters["vehiclesModule/getVehicles"]);

    const slug = (name) => {
      return name.toLowerCase().replace(/ /g, "-");
    };

    return { vehicles, slug };
  },
};
</script>
