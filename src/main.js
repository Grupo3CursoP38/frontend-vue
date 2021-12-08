import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { apolloProvider } from "./apollo";
import "./styles/tailwind.css";
import "./styles/main.css";
import "animate.css";

createApp(App).use(store).use(apolloProvider).use(router).mount("#app");
