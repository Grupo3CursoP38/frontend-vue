<template>
  <section class="modal-container">
    <div :class="msg && 'modal-bg'" class="modal">
      <div class="modal-textos">
        <img v-if="!msg" src="@/static/loader.svg" width="250" alt="loader" />
        <p v-else>{{ msg }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 40%;
  height: 30%;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
}
img {
  height: 50%;
}
.modal-bg {
  background: white;
}

@media screen and (max-width: 600px) {
  .modal {
    width: 70%;
  }
  img {
    height: 30%;
  }
}
</style>
