<template>
  <form @submit.prevent="onSubmit(v$)" class="mt-5">
    <Inputs :userForm="v$" />
    <button
      :disabled="validateButton(v$)"
      :class="validateButton(v$) ? 'btn-disabled' : 'btn-purple'"
      class="btn-lg"
      type="submit"
    >
      {{ text }}
    </button>
  </form>
</template>

<script>
import Inputs from "./Inputs";
import { computed, inject, onMounted } from "vue";
import { useForm } from "@/global/composables/useForm";
import { useStore } from "vuex";
import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export default {
  components: { Inputs },
  setup() {
    const path = inject("path");
    const text = computed(() =>
      path === "/auth/sign-in" ? "Sign in" : "Sign up"
    );
    const { state, dispatch } = useStore();

    provideApolloClient(apolloClient);

    onMounted(() => {
      dispatch("authModule/reset");
    });
    const authForm = computed(() => state.authModule.form);
    const v$ = useForm(authForm.value);

    const msg = inject("msg");

    const validateButtonRegister = (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        !v$.check.$model
      )
        return true;
      return false;
    };
    const validateButtonLogin = (v$) => {
      if (v$.password.$invalid || v$.email.$invalid) return true;
      return false;
    };
    const validateButton = computed(() =>
      path === "/auth/sign-in" ? validateButtonLogin : validateButtonRegister
    );
    const onSubmitRegister = async (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid ||
        v$.check.$invalid
      )
        return;

      msg.value.state = true;

      const data = {
        name: v$.name.$model,
        phone: v$.phone.$model,
        email: v$.email.$model,
        password: v$.password.$model,
        check: v$.check.$model,
      };
      console.log(data);

      const { mutate: CreateUser } = useMutation(
        gql`
          mutation CreateUser($user: SignUpInput!) {
            createUser(user: $user) {
              refresh
              access
            }
          }
        `,
        () => ({
          variables: {
            user: {
              email: data.email,
              name: data.name,
              phone: data.phone,
              lastname: data.name,
              birthdate: "2000-01-01",
              password: data.password,
              id: 25,
            },
          },
        })
      );

      CreateUser()
        .then((res) => {
          msg.value.message = "Usuario creado";

          setTimeout(() => {
            msg.value.state = false;
            msg.value.message = "";
          }, 2000);
          console.error(res);
        })
        .catch((error) => {
          msg.value.message = "El usuario no ha sido creado";

          setTimeout(() => {
            msg.value.state = false;
            msg.value.message = "";
          }, 2000);
          console.error(error);
        });
    };

    const onSubmitLogin = (v$) => {
      if (v$.password.$invalid || v$.email.$invalid) return;
      const data = {
        email: v$.email.$model,
        password: v$.password.$model,
      };
      console.log(data);
    };
    const onSubmit = computed(() =>
      path === "/auth/sign-in" ? onSubmitLogin : onSubmitRegister
    );
    return { text, v$, validateButton, onSubmit, msg };
  },
};
</script>
