<template>
  <div class="flex justify-between py-5 md:px-10 items-center">
    <div>
      <h3 class="text-xl font-bold">{{ data.title }}</h3>
      <span class="text-gray-600">{{ data.description }}</span>
    </div>
    <div>
      <router-link
        v-if="data.validationPur"
        to="/profile/my-rental"
        class="btn btn-black mr-3"
        >Rental</router-link
      >
      <router-link
        v-if="data.validationEdit"
        to="/profile/edit"
        class="btn btn-black"
        >Edit</router-link
      >
    </div>
  </div>
  <hr />
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const data = ref(props.info);

    return { data };
  },
};
</script>
