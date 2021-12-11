<template>
  <router-view />
</template>

<script>
import { onMounted } from "vue-demi";
import { useStore } from "vuex";
export default {
  setup() {
    const { dispatch } = useStore();
    onMounted(() => {
      if (localStorage.getItem("setUser")) {
        dispatch(
          "authModule/setUser",
          JSON.parse(localStorage.getItem("setUser"))
        );
        dispatch("profileModule/updateProfile", {
          id: JSON.parse(localStorage.getItem("setUser"))?.id,
          ...JSON.parse(localStorage.getItem("setUser"))?.data,
          password: "",
        });
      }
    });
  },
};
</script>
