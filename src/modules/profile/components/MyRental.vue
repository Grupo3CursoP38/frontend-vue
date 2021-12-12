<template>
  <div v-for="rental in rentals" :key="rental.user">
    <section v-if="isActive(rental)" class="md:mx-10 mt-3 mb-5">
      <hr class="pb-2" />
      <span class="block mb-2"
        >Dias restantes para la entrega:
        {{ date(rental) }}
        {{ date(rental) === 1 ? "dia" : "dias" }}</span
      >
      <hr class="pt-2" />

      <div class="lg:flex lg:justify-between lg:items-center mb-4">
        <div class="flex justify-between items-center lg:w-2/4">
          <img
            :src="rental.vehicle.img_url"
            :alt="rental.vehicle.name"
            width="90"
            height="90"
            class="mr-5"
          />
          <div>
            <span class="text-sm text-green-700"
              >{{ rental.is_active ? "Activo" : "No activo" }} -
              {{ rental.vehicle.in_use && "En uso" }}
            </span>
            <h3 class="font-medium my-2">
              {{ rental.vehicle.name }} - {{ rental.vehicle.type }} de color
              {{ rental.vehicle.color }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ rental.vehicle.short_description }}
            </p>
          </div>
        </div>
        <span></span>
        <button
          @click="cancel(rental)"
          class="
            btn btn-red
            xs:my-2
            md:my-0
            xs:w-full
            md:w-auto
            xs:block xs:text-center
          "
        >
          Cancelar renta
        </button>
      </div>
    </section>
  </div>
  <Loader v-if="msg.state" :msg="msg.message" />
</template>

<script>
import { computed, onMounted, ref } from "vue-demi";
import { useStore } from "vuex";
import { getRental } from "@/modules/profile/helpers/getRental";
import { getCancelRental } from "@/modules/profile/helpers/getCancelRental";
import Loader from "@/global/components/Loader.vue";

export default {
  components: { Loader },
  setup() {
    const { getters, dispatch } = useStore();
    const id = computed(() => getters["authModule/getId"]);
    const msg = ref({ state: false, message: "" });

    onMounted(async () => {
      const res = await getRental(id.value);

      dispatch("profileModule/updateRentals", res);
    });

    const rentals = computed(() => getters["profileModule/getRental"]);

    const date = (rental) =>
      Math.round(
        (new Date(rental.date_finish).getTime() -
          new Date(rental.date_start).getTime()) /
          (1000 * 60 * 60 * 24)
      );

    const cancel = async (rental) => {
      msg.value.state = true;
      const res = await getCancelRental(rental.id, rental.vehicle.id);

      if (res?.status === 400) {
        msg.value.message = "Ocurrio un error al cancelar la renta";

        setTimeout(() => {
          msg.value.state = true;
          msg.value.message = "";
        }, 2000);
        return;
      }

      msg.value.message = "Renta cancelada";

      setTimeout(() => {
        msg.value.state = false;
        msg.value.message = "";
        dispatch("profileModule/cancelRental", rental);
      }, 2000);
    };

    const isActive = (rental) => rental.is_active;

    return { rentals, date, cancel, isActive, msg };
  },
};
</script>
