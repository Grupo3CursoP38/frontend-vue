<template>
  <section class="bg-blue-200 container-per">
    <h1 class="font-bold xs:text-4xl md:text-6xl mds:w-8/12 mb-7">
      Bienvenido a Rentme! 🎉
    </h1>
    <p class="mds:w-9/12 mb-6">
      Una manera diferente de aquilar bicicletas y/o patinetas.
    </p>
    <router-link to="/auth/sign-up" class="btn-lg btn-purple"
      >Comenzar</router-link
    >
  </section>
  <aside class="mds:w-4/12 xs:hidden md:block">
    <img src="@/static/hero.jpg" alt="" class="w-full h-full" />
  </aside>
</template>
