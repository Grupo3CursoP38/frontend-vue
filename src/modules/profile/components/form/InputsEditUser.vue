<template>
  <div class="space-y-2">
    <label for="name" class="block font-medium tracking-tight">Name</label>
    <input
      v-model.trim="v$.name.$model"
      id="name"
      type="text"
      class="input-group md:w-1/2 block"
      placeholder="name"
      autocomplete="off"
    />
    <div
      v-for="error of v$.name.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="space-y-2">
    <label for="name" class="block font-medium tracking-tight">Lastname</label>
    <input
      v-model.trim="v$.lastname.$model"
      id="lastname"
      type="text"
      class="input-group md:w-1/2 block"
      placeholder="lastname"
      autocomplete="off"
    />
    <div
      v-for="error of v$.lastname.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="space-y-2">
    <label for="name" class="block font-medium tracking-tight">Birthdate</label>
    <input
      v-model.trim="v$.birthdate.$model"
      id="birthdate"
      type="date"
      class="input-group md:w-1/2 block"
      placeholder="birthdate"
      autocomplete="off"
    />
    <div
      v-for="error of v$.birthdate.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="space-y-2">
    <label for="phone" class="block font-medium tracking-tight">Phone</label>
    <input
      v-model.trim="v$.phone.$model"
      id="phone"
      type="number"
      class="input-group md:w-1/2 block"
      placeholder="phone"
      autocomplete="off"
    />
    <div
      v-for="error of v$.phone.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="space-y-2">
    <label for="email" class="block font-medium tracking-tight">Email</label>
    <input
      v-model.trim="v$.email.$model"
      id="email"
      type="email"
      class="input-group md:w-1/2 block"
      placeholder="user@gmail.com"
      autocomplete="off"
    />
    <div
      v-for="error of v$.email.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
  <div class="space-y-2">
    <label for="password" class="block font-medium tracking-tight"
      >Password</label
    >
    <input
      v-model.trim="v$.password.$model"
      id="password"
      type="password"
      class="input-group md:w-1/2 block"
      placeholder="*********"
      autocomplete="off"
    />
    <div
      v-for="error of v$.password.$errors"
      :key="error.$uid"
      class="
        text-xs text-yellow-500
        bg-yellow-100
        md:w-1/2
        py-2
        px-1
        rounded-sm
      "
    >
      {{ error.$message }}
    </div>
  </div>
</template>

<script>
import { watchEffect } from "vue";
export default {
  props: {
    userForm: Object,
  },
  setup(props) {
    let v$;
    watchEffect(() => {
      v$ = props.userForm;
    });
    return { v$ };
  },
};
</script>
