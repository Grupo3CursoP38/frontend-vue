<template>
  <section v-if="path === '/auth/sign-up'" class="flex w-full gap-3">
    <div class="w-1/2 mb-3">
      <label class="font-bold border-gray-900" for="name">Nombre</label>
      <input
        v-model.trim="v$.name.$model"
        class="input"
        id="name"
        type="text"
        autocomplete="off"
      />
      <div
        v-for="error of v$.name.$errors"
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
    <div class="w-1/2 mb-3">
      <label class="font-bold border-gray-900" for="username">Celular</label>
      <input
        v-model.trim="v$.phone.$model"
        class="input"
        id="username"
        type="number"
        autocomplete="off"
      />
      <div
        v-for="error of v$.phone.$errors"
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
  </section>
  <div class="mb-3">
    <label class="font-bold border-gray-900" for="email"
      >Correo electrónico</label
    >
    <input
      v-model.trim="v$.email.$model"
      class="input"
      id="email"
      type="email"
      autocomplete="off"
    />
    <div
      v-for="error of v$.email.$errors"
      :key="error.$uid"
      class="text-xs text-yellow-500 bg-yellow-100 w-full py-2 px-1 rounded-sm"
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="mb-3">
    <label class="font-bold border-gray-900" for="password">Contraseña</label>
    <input
      class="input"
      v-model.trim="v$.password.$model"
      id="password"
      type="password"
      placeholder="6+ caracteres"
    />
    <div
      v-for="error of v$.password.$errors"
      :key="error.$uid"
      class="text-xs text-yellow-500 bg-yellow-100 w-full py-2 px-1 rounded-sm"
    >
      {{ error.$message }}
    </div>
  </div>
  <div v-if="path === '/auth/sign-up'" class="mb-4">
    <input
      v-model="v$.check.$model"
      type="checkbox"
      id="check"
      class="mr-2 w-4 h-4 cursor-pointer"
    />
    <label for="check" class="font-light text-gray-600 text-sm cursor-pointer"
      >Crear una cuenta significa que está de acuerdo con nuestros Términos de
      servicio , Política de privacidad y nuestra Configuración de notificación
      predeterminada .</label
    >
  </div>
</template>

<script>
import { inject, ref, watchEffect } from "vue";
export default {
  props: {
    userForm: {
      type: Object,
    },
  },
  setup(props) {
    let v$ = ref();
    watchEffect(() => {
      v$ = props.userForm;
    });
    const path = inject("path");

    return { path, v$ };
  },
};
</script>

<style>
input:hover {
  box-shadow: 0 0 0 4px rgba(219, 230, 255, 1);
}
</style>
