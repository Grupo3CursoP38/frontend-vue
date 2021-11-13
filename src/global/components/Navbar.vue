<template>
  <nav class="py-3">
    <div class="xs:w-full md:w-5/6 mx-auto flex justify-between items-center">
      <router-link to="/"
        ><img width="100" height="100" src="@/static/logo.svg" alt="bouncer"
      /></router-link>
      <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> -->
      <div>
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
