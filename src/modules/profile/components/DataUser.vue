<template>
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Name</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.name }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Lastname</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.lastname }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Email</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.email }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Phone</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.phone }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Birthdate</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.birthdate }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Account</h4>
    <div class="w-4/6 text-green-700">
      <p>{{ user.is_active && "Active" }}</p>
    </div>
  </div>
  <hr />
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  setup() {
    const { state, dispatch } = useStore();

    onMounted(async () => {
      dispatch("profileModule/updateProfile", {
        ...JSON.parse(localStorage.getItem("setUser")).data,
        password: "",
        is_active: true,
      });
    });

    const user = computed(() => {
      return state.profileModule.user;
    });

    return { user };
  },
};
</script>
