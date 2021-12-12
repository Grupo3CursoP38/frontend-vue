<template>
  <form @submit.prevent="onSubmit(v$)" class="xs:w-full">
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="name">Nombre*</label>
      <input
        v-model.trim="v$.name.$model"
        class="input"
        id="name"
        type="text"
        autocomplete="off"
        disabled
      />
      <div
        v-for="error of v$.name.$errors"
        :key="error.$uid"
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email"
        >Correo*</label
      >
      <input
        v-model.trim="v$.email.$model"
        class="input"
        id="email"
        type="email"
        autocomplete="off"
        disabled
      />
      <div
        v-for="error of v$.email.$errors"
        :key="error.$uid"
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email"
        >Tipo vehiculo*</label
      >
      <select v-model.trim="v$.type.$model" disabled class="input">
        <option value="">Selecciona una opción</option>
        <option value="Bicicleta">Bicicleta</option>
        <option value="Patineta">Patineta</option>
      </select>
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email">Fecha*</label>
      <InputDate />
    </div>

    <button
      :disabled="validateButton(v$)"
      :class="validateButton(v$) ? 'btn-disabled' : 'btn-purple'"
      class="btn-lg my-5"
      type="submit"
    >
      Reservar
    </button>

    <div class="lg:w-3/5 mb-3">
      <label for="check" class="font-light text-gray-600 text-sm cursor-pointer"
        >you’re okay with our Terms of Service, Privacy Policy</label
      >
    </div>
  </form>
</template>

<script>
import { computed, onMounted, provide, ref } from "vue-demi";
import InputDate from "./form/InputDate.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useForm } from "@/global/composables/useForm";

export default {
  components: { InputDate },
  setup() {
    const { getters } = useStore();
    const { push } = useRouter();

    const vehicleId = computed(() => getters["vehiclesModule/getVehicleId"]);
    const vehicleType = computed(
      () => getters["vehiclesModule/getVehicleType"]
    );
    const user = computed(() => getters["profileModule/getUser"]);

    onMounted(
      () => vehicleId.value === null && push({ name: "list-vehicles" })
    );

    const form = ref({
      name: user.value.name,
      email: user.value.email,
      type: vehicleType.value,
      date_finish: "",
      date_start: "",
      user_id: user.value.id,
      vehicle_id: vehicleId.value,
      is_active: true,
    });

    const v$ = useForm(form.value);
    provide("formRental", v$);

    const validateButton = (v$) => {
      if (
        v$.date_finish.$invalid ||
        v$.date_start.$invalid ||
        v$.user_id.$invalid ||
        v$.vehicle_id.$invalid ||
        !v$.is_active.$model
      )
        return true;
      return false;
    };

    const onSubmit = (v$) => {
      if (
        v$.date_finish.$invalid ||
        v$.date_start.$invalid ||
        v$.user_id.$invalid ||
        v$.vehicle_id.$invalid ||
        !v$.is_active.$model
      )
        return;

      console.log({
        date_finish: v$.date_finish.$model,
        date_start: v$.date_start.$model,
        user_id: v$.user_id.$model,
        vehicle_id: v$.vehicle_id.$model,
        is_active: v$.is_active.$model,
      });
    };

    return { v$, validateButton, onSubmit };
  },
};
</script>

<style>
input:hover,
select:hover {
  box-shadow: 0 0 0 4px rgba(219, 230, 255, 1);
}
</style>
