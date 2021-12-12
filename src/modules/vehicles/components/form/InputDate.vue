<template>
  <div class="md:flex items-center">
    <div class="relative">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-1
          flex
          items-center
          pointer-events-none
        "
      ></div>
      <input
        v-model.trim="v$.date_start.$model"
        name="start"
        type="date"
        class="input"
      />
      <div
        v-for="error of v$.date_start.$errors"
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
    <span class="mx-4 text-gray-500 xs:my-3 md:my-0 xs:block">to</span>
    <div class="relative">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      ></div>
      <input
        v-model.trim="v$.date_finish.$model"
        name="end"
        type="date"
        class="input"
      />
      <div
        v-for="error of v$.date_finish.$errors"
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
  </div>
</template>

<script>
import { inject } from "vue-demi";
export default {
  setup() {
    const v$ = inject("formRental");
    return { v$ };
  },
};
</script>
