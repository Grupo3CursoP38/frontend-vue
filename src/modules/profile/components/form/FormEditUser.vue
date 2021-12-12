<template>
  <form
    @submit.prevent="onSubmit(v$)"
    class="space-y-3 w-full xs:px-2 md:px-10 py-5"
  >
    <InputsEditUser :userForm="v$" />
    <button
      :disabled="validateButton(v$)"
      :class="validateButton(v$) ? 'btn-disabled' : 'btn-blue'"
      type="submit"
      class="btn"
    >
      Guardar cambios
    </button>
  </form>

  <Loader v-if="msg.state" :msg="msg.message" />
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useForm } from "@/global/composables/useForm";
import InputsEditUser from "./InputsEditUser.vue";
import Loader from "@/global/components/Loader.vue";
import { getUpdate } from "@/modules/profile/helpers/getUpdate";
import { useRouter } from "vue-router";

export default {
  components: { InputsEditUser, Loader },
  setup() {
    const { state, getters, dispatch } = useStore();
    const { push } = useRouter();

    const userForm = computed(() => state.profileModule.user);

    const v$ = useForm(userForm);
    const msg = ref({ state: false, message: "" });

    const id = computed(() => getters["authModule/getId"]);
    const getTokens = computed(() => getters["authModule/getTokens"]);

    const validateButton = (v$) => {
      if (
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        v$.lastname.$invalid ||
        v$.birthdate.$invalid
      )
        return true;
      return false;
    };

    const onSubmit = async (v$) => {
      if (
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        v$.lastname.$invalid ||
        v$.birthdate.$invalid
      )
        return;

      msg.value.state = true;

      const data = {
        name: v$.name.$model,
        lastname: v$.lastname.$model,
        phone: v$.phone.$model,
        email: v$.email.$model,
        birthdate: v$.birthdate.$model,
      };

      const result = await getUpdate(data, id.value);

      if (result.status === 400) {
        msg.value.message = result.message;
        setTimeout(() => {
          msg.value.message = "";
          msg.value.state = false;
          return;
        }, 2000);
      }

      await dispatch("profileModule/updateProfile", {
        ...result,
        password: "",
        is_active: true,
      });
      localStorage.setItem(
        "setUser",
        JSON.stringify({
          ...getTokens.value,
          data: {
            ...result,
            is_active: true,
          },
        })
      );

      msg.value.message = "Se ha actualizado correctamente";
      setTimeout(() => {
        msg.value.message = "";
        msg.value.state = false;
        push({ name: "profile-home" });
        return;
      }, 2000);
    };

    return { v$, userForm, validateButton, onSubmit, msg };
  },
};
</script>
