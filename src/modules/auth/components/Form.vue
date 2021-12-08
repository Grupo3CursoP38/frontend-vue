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
import { computed, inject, onMounted, provide } from "vue";
import { useForm } from "@/global/composables/useForm";
import { useStore } from "vuex";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/apollo";

export default {
  components: { Inputs },
  setup() {
    const path = inject("path");
    const text = computed(() =>
      path === "/auth/sign-in" ? "Sign in" : "Sign up"
    );
    const { state, dispatch } = useStore();

    provide(DefaultApolloClient, apolloClient);

    onMounted(() => {
      dispatch("authModule/reset");
    });
    const authForm = computed(() => state.authModule.form);
    const v$ = useForm(authForm);

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
              lastname: "",
              birthdate: "",
              password: data.password,
              id: 20,
            },
          },
        })
      );

      CreateUser().then((res) => {
        console.log(res);
      });

      // console.log(mutate);
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
    return { text, v$, validateButton, onSubmit };
  },
};
</script>
