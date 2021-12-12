<template>
  <div class="h-screen overflow-hidden">
    <Navbar class="container mx-auto" />

    <main class="mds:flex mds:justify-between w-full h-full">
      <Content />
    </main>
  </div>
</template>

<script>
import Navbar from "@/global/components/Navbar.vue";
import Content from "../components/Content.vue";

export default {
  components: { Navbar, Content },
};
</script>
