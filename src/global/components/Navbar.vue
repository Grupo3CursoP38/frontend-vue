<template>
  <nav class="py-3">
    <div class="xs:w-full md:w-5/6 mx-auto flex justify-between items-center">
      <router-link to="/"
        ><img width="100" height="100" src="@/static/logo.svg" alt="bouncer"
      /></router-link>
      <div class="flex justify-between items-center">
        <button @click="exit" class="btn btn-purple mr-3" v-if="token.exist">
          Exit
        </button>
        <router-link
          v-if="!token.exist"
          to="/auth/sign-in"
          class="btn btn-black mr-3"
          >Login</router-link
        >
        <router-link
          v-if="!token.exist"
          to="/auth/sign-up"
          class="btn btn-purple"
          >Sign up</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { getters, dispatch } = useStore();
    const token = computed(() => getters["authModule/token"]);

    const exit = () => {
      localStorage.removeItem("setUser");
      dispatch("authModule/setUser", {
        access: "",
        refresh: "",
        id: null,
        data: {},
      });
    };

    return { token, exit };
  },
};
</script>
