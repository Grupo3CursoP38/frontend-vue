<template>
  <section class="h-screen md:flex">
    <AsideBg :class="color" class="w-2/5 h-full xs:hidden md:inline" />

    <div class="xs:w-full md:w-3/5 md:h-full flex flex-col justify-between">
      <span class="xs:text-center md:text-right pt-5 pr-5"
        >{{ text }}
        <router-link
          class="text-purple-500 hover:text-purple-400 ml-2"
          :to="sign.path"
          >{{ sign.text }}</router-link
        ></span
      >
      <Content />
      <span></span>
    </div>
  </section>

  <Loader v-if="msg.state" :msg="msg.message" />
</template>

<script>
import AsideBg from "./AsideBg";
import Content from "./Content";
import { useRoute } from "vue-router";
import { computed, provide, ref } from "vue";
import Loader from "@/global/components/Loader.vue";

export default {
  components: { AsideBg, Content, Loader },

  setup() {
    const { path } = useRoute();
    provide("path", path);

    const msg = ref({ state: false, message: "" });

    provide(
      "msg",
      computed(() => msg.value)
    );

    const text = computed(() =>
      path === "/auth/sign-in" ? "¿No es un miembro? " : "¿Ya eres usuario?"
    );

    const sign = computed(() =>
      path === "/auth/sign-in"
        ? { path: "/auth/sign-up", text: "Regístrate ahora" }
        : { path: "/auth/sign-in", text: "Iniciar sesión" }
    );

    const color = computed(() =>
      path === "/auth/sign-in" ? "bg-purple-50" : "bg-red-50"
    );

    return { text, sign, color, msg };
  },
};
</script>
