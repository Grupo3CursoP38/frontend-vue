<template>
  <form class="xs:w-full">
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="name">Nombre*</label>
      <input class="input" id="name" type="text" autocomplete="off" />
      <!-- <div
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        ddd
      </div> -->
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email"
        >Correo*</label
      >
      <input class="input" id="email" type="email" autocomplete="off" />
      <!-- <div
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        ddd
      </div> -->
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email"
        >Tipo vehiculo*</label
      >
      <select class="input">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <!-- <div
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        ddd
      </div> -->
    </div>
    <div class="lg:w-3/5 mb-3">
      <label class="font-light text-gray-500 text-sm" for="email">Fecha*</label>
      <InputDate />
      <!-- <div
        class="
          text-xs text-yellow-500
          bg-yellow-100
          w-full
          py-2
          px-1
          rounded-sm
        "
      >
        ddd
      </div> -->
    </div>

    <button :class="'btn-purple'" class="btn-lg my-5" type="submit">
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
import InputDate from "./form/InputDate.vue";
export default {
  components: { InputDate },
};
</script>

<style>
input:hover,
select:hover {
  box-shadow: 0 0 0 4px rgba(219, 230, 255, 1);
}
</style>
