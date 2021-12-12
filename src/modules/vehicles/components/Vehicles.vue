<template>
  <main class="container mx-auto">
    <h1 class="text-center font-bold text-2xl my-5">Products List</h1>
    <div class="grid-section">
      <section v-for="vehicle in vehicles" :key="vehicle.id">
        <article
          v-if="!vehicle.in_use"
          class="bg-purple-50 rounded-md shadow-md"
        >
          <img
            :src="vehicle.img_url"
            class="w-full"
            width="100"
            height="100"
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
      </section>
    </div>
  </main>
  <Loader v-if="msg.state" :msg="msg.message" />
</template>

<script>
import { computed, onMounted, ref } from "vue-demi";
import { useStore } from "vuex";
import { getVehicles } from "../helpers/getVehicles";
import Loader from "@/global/components/Loader.vue";

export default {
  components: { Loader },
  setup() {
    const { getters, dispatch } = useStore();
    const vehicles = computed(() => getters["vehiclesModule/getVehicles"]);

    const msg = ref({ state: false, message: "" });

    onMounted(async () => {
      msg.value.state = true;
      const res = await getVehicles();

      dispatch("vehiclesModule/setVehicles", res);
      msg.value.state = false;
      console.log(typeof res);
    });

    const slug = (name) => name.toLowerCase().replace(/ /g, "-");

    return { vehicles, slug, msg };
  },
};
</script>

<style scoped>
.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
