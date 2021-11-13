<template>
  <Navbar class="container mx-auto" />
  <section class="container mx-auto mt-5">
    <div class="xs:w-full md:w-5/6 mx-auto md:pb-5">
      <router-link to="/profile" class="flex text-purple-500">
        <Icon :path="mdiArrowLeft" :size="24" type="mdi" class="w-5 mr-2" />
        Back</router-link
      >
    </div>
    <article class="md:border-2 xs:w-full md:w-5/6 mx-auto mb-10 rounded-sm">
      <Subtitle />
      <FormEditUser />
    </article>
  </section>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
import Icon from "@jamescoyle/vue-icon";
import Subtitle from "../components/Subtitle.vue";
import FormEditUser from "../components/form/FormEditUser.vue";
import Navbar from "@/global/components/Navbar.vue";

export default {
  components: {
    Subtitle,
    Icon,
    FormEditUser,
    Navbar,
  },
  data() {
    return {
      mdiArrowLeft,
    };
  },
};
</script>
