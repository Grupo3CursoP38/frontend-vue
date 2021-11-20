<template>
  <div class="bg-gray-50">
    <Navbar class="bg-gray-50" />

    <main class="mds:flex mds:justify-between w-full">
      <section class="container-per">
        <h2 class="my-5 text-xl font-bold">Reservar vehiculo</h2>
        <Form />
      </section>
      <aside class="mds:w-2/5 xs:hidden lg:block">
        <img src="@/static/creative.png" alt="" class="w-full h-full" />
      </aside>
    </main>
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Form from "../components/Form.vue";

export default {
  components: { Navbar, Form },
};
</script>
