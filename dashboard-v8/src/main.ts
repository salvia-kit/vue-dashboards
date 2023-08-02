import "tailwindcss/tailwind.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// @ts-ignore
import routes from "~pages";
import App from "./App.vue";

// @ts-ignore
const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
