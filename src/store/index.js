import { createStore } from "vuex";
import { homeModule } from "@/modules/home/store";
import { authModule } from "@/modules/auth/store";
import { profileModule } from "@/modules/profile/store";

export default createStore({
  modules: {
    homeModule,
    authModule,
    profileModule,
  },
});
