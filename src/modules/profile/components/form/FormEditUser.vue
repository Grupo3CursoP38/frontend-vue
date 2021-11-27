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
      Save Changes
    </button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useForm } from "@/global/composables/useForm";
import InputsEditUser from "./InputsEditUser.vue";

export default {
  components: { InputsEditUser },
  setup() {
    const userForm = computed(() => {
      return useStore().state.profileModule.user;
    });

    const v$ = useForm(userForm);

    const validateButton = (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        v$.lastname.$invalid ||
        v$.birthdate.$invalid
      )
        return true;
      return false;
    };

    const onSubmit = (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        v$.lastname.$invalid ||
        v$.birthdate.$invalid
      )
        return;

      const data = {
        name: v$.name.$model,
        lastname: v$.lastname.$model,
        phone: v$.phone.$model,
        email: v$.email.$model,
        password: v$.password.$model,
        birthdate: v$.birthdate.$model,
      };

      console.log(data);
    };

    return { v$, userForm, validateButton, onSubmit };
  },
};
</script>
