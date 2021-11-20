import { createStore } from "vuex";
import { authModule } from "@/modules/auth/store";
import { profileModule } from "@/modules/profile/store";

export default createStore({
  modules: {
    authModule,
    profileModule,
  },
});
