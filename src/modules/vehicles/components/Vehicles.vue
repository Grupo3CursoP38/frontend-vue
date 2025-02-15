<template>
  <main class="container mx-auto">
    <h1 class="text-center font-bold text-2xl my-5">Vehiculos disponibles</h1>
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
              :to="`/vehicles/${vehicle.slug}`"
              class="font-semibold text-lg my-3 block hover:underline"
              >{{ vehicle.name }}</router-link
            >
            <p class="text-gray-600">{{ vehicle.short_description }}</p>
            <div class="my-2 flex justify-between">
              <span>Tipo: {{ vehicle.type }}</span>
              <button
                @click="rental(vehicle)"
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
import { useRouter } from "vue-router";

export default {
  components: { Loader },
  setup() {
    const { getters, dispatch } = useStore();
    const { push } = useRouter();
    const vehicles = computed(() => getters["vehiclesModule/getVehicles"]);

    const msg = ref({ state: false, message: "" });

    onMounted(async () => {
      msg.value.state = true;
      const res = await getVehicles();

      await dispatch("vehiclesModule/setVehicles", res);
      msg.value.state = false;
    });

    const rental = async (vehicle) => {
      await dispatch("vehiclesModule/setVehicle", vehicle);
      return push({ name: "rental-vehicles" });
    };

    return { vehicles, msg, rental };
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
