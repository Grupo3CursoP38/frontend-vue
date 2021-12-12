<template>
  <div class="lg:flex md:justify-between py-5 md:px-10 lg:items-center">
    <div>
      <h3 class="text-xl font-bold">{{ data.title }}</h3>
      <span class="text-gray-600">{{ data.description }}</span>
    </div>
    <div class="xs:mt-5 lg:mt-0">
      <router-link
        v-if="data.validationPur"
        to="/profile/my-rental"
        class="btn btn-black mr-3"
        >Mis rentas</router-link
      >
      <button
        @click="isOpen = true"
        v-if="validationAccount"
        class="btn bg-gray-50 text-red-400 hover:text-red-500"
      >
        Desactivar Cuenta
      </button>
      <router-link
        v-if="data.validationEdit"
        to="/profile/edit"
        class="btn btn-black"
        >Editar</router-link
      >
    </div>
  </div>
  <hr />

  <Modal />
</template>

<script>
import Modal from "@/global/components/Modal.vue";
import { computed, provide, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  setup(props) {
    const data = ref(props.info);

    const { path } = useRoute();

    const validationAccount = computed(() =>
      path === "/profile/edit" ? true : false
    );

    const isOpen = ref(false);

    provide("isOpen", isOpen);

    return { data, validationAccount, isOpen };
  },
};
</script>
