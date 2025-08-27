import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// Example route components (replace with your actual components)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
