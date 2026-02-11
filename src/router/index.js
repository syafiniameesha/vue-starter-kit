import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import NextPage from "../views/NextPage/NextPage.vue";
import NextPageListing from "../views/NextPage/NextpageListing.vue";
import NextPageDetails from "../views/NextPage/NextPageDetails.vue";
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
    path: "/next-page",
    alias: "/next-page/",
    name: "NextPage",
    component: NextPage,
    meta: {
      title: "NextPage",
      icon: "",
    },
    children: [
      {
        path: "",
        name: "NextPageListing",
        component: NextPageListing,
        meta: {
          title: "NextPageListing",
          icon: "",
        },
      },
      {
        path: "details",
        name: "NextPageDetails",
        component: NextPageDetails,
        meta: {
          title: "NextPageDetails",
          icon: "",
        },
      }
    ]
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
