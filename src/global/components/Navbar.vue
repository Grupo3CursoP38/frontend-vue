<template>
  <nav class="py-3">
    <div class="xs:w-full md:w-5/6 mx-auto flex justify-between items-center">
      <router-link to="/"
        ><img width="100" height="100" src="@/static/logo.svg" alt="bouncer"
      /></router-link>
      <div class="flex justify-between items-center">
        <button class="btn btn-purple mr-3">Exit</button>
        <router-link to="/auth/sign-in" class="btn btn-black mr-3"
          >Login</router-link
        >
        <router-link to="/auth/sign-up" class="btn btn-purple"
          >Sign up</router-link
        >
      </div>
    </div>
  </nav>
</template>
