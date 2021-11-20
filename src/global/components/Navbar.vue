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
      <div class="flex justify-between items-center">
        <router-link to="/auth/sign-in" class="mr-3 relative">
          <Icon
            class="mt-1 mr-3"
            :path="mdiShoppingOutline"
            :size="24"
            type="mdi"
          />
          <span
            class="
              absolute
              right-0
              top-0
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              text-xs
              font-bold
              leading-none
              text-red-100
              bg-red-600
              rounded-full
            "
            >9</span
          >
        </router-link>
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

<script>
import Icon from "@jamescoyle/vue-icon";
import { mdiShoppingOutline } from "@mdi/js";

export default {
  components: { Icon },
  setup() {
    return { mdiShoppingOutline };
  },
};
</script>
