<template>
  <div
    class="
      animate__animated animate__backInUp
      xs:container xs:my-10
      md:mt-0 md:w-3/5
      mx-auto
    "
  >
    <h1 class="text-3xl font-bold text-gray-900 mb-3">
      {{ text }}
      <router-link class="xs:underline md:no-underline" to="/"
        >Rentme</router-link
      >
    </h1>

    <span class="flex items-center h-5 text-gray-400">
      <hr class="w-6/12 mr-3 border-gray-300" />
      O
      <hr class="w-6/12 ml-3 border-gray-300" />
    </span>

    <Form />
  </div>
</template>

<script>
import Form from "./Form";
import { computed, inject } from "vue";

export default {
  components: { Form },
  setup() {
    const path = inject("path");

    const text = computed(() =>
      path === "/auth/sign-in" ? "Iniciar sesión en" : "Registrarse en"
    );

    return { text };
  },
};
</script>
