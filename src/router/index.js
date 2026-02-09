import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    alias: "/home/",
    name: "Homepage",
    component: Homepage,
    meta: {
      title: "Homepage",
      icon: "",
    },
  },
  {
    path: "/:pathMatch(.*)/",
    redirect: (to) => {
      const newPath = to.path.replace(/\/$/, ""); 
      return { path: newPath };
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});


export default router;
