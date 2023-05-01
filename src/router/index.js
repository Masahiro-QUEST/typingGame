import { createRouter, createWebHistory } from "vue-router";

import FrontPage from "../components/FrontPage";
import AuthPage from "../components/AuthPage.vue";
import PostPage from "../components/PostProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: FrontPage,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/post",
    name: "Post",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
