<template>
  <div class="mx-auto container xs:px-5 md:px-20 my-10">
    <router-link to="/vehicles" class="flex text-blue-400">
      <Icon :path="mdiArrowLeft" :size="24" type="mdi" class="w-5 mr-2" />
      Back</router-link
    >
    <div class="flex flex-col lg:flex-row">
      <img class="xs:w-full lg:w-80" :src="vehicle.img_url" alt="iphonex" />
      <div class="flex mt-16 flex-col">
        <h2
          class="
            font-bold
            text-2xl
            lg:text-5xl
            text-center
            lg:text-left lg:pl-20
          "
        >
          {{ vehicle.name }}
        </h2>
        <p
          class="
            lg:w-9/12
            w-full
            text-center
            lg:text-justify
            text-opacity-80
            mt-4
            lg:pl-20
          "
        >
          {{ vehicle.long_description }}
        </p>
        <div class="lg:w-9/12 w-full lg:pl-20 lg:my-5">
          <router-link
            class="
              lg:w-1/4
              w-full
              rounded-lg
              bg-purple-700
              hover:bg-purple-500
              text-gray-50
              mt-8
              lg:mt-0
              mb-8
              lg:mb-0
              p-4
              shadow-button
            "
            to="/vehicles/rental"
          >
            Rentar
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Loader v-if="msg.state" :msg="msg.message" />
</template>

<script>
import { computed, onMounted, ref } from "vue-demi";
import { useStore } from "vuex";
import Icon from "@jamescoyle/vue-icon";
import { mdiArrowLeft } from "@mdi/js";
import { useRoute, useRouter } from "vue-router";
import { getVehicles } from "../helpers/getVehicles";
import Loader from "@/global/components/Loader.vue";

export default {
  components: { Icon, Loader },
  setup() {
    const { getters, dispatch } = useStore();
    const { path } = useRoute();
    const { push } = useRouter();
    const vehicle = computed(() => getters["vehiclesModule/getVehicle"]);
    const msg = ref({ state: false, message: "" });

    onMounted(async () => {
      msg.value.state = true;
      const res = await getVehicles();

      const vehicleRes = await res.filter(
        (vehicle) => vehicle.slug === path.replace("/vehicles/", "")
      )[0];
      vehicleRes === undefined && (await push({ name: "Error" }));

      await dispatch("vehiclesModule/setVehicle", vehicleRes);
      msg.value.state = false;
    });

    return { vehicle, mdiArrowLeft, msg };
  },
};
</script>
