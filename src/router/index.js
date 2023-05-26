//ライブラリ
import { createRouter, createWebHistory } from "vue-router";
//コンポーネント
import FrontPage from "../components/FrontPage";
import AuthPage from "../components/AuthPage.vue";
import PostPage from "../components/PostProject.vue";
import RankingPage from "../components/RankingPage.vue";
import AboutPage from "../components/AboutPage.vue"
//stage
import NyanStage from "../components/stage/NyanStage.vue";
import WanStage from "../components/stage/WanStage.vue";

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
  {
    path: "/nyanstage",
    name: "NyanStage",
    component: NyanStage,
  },
  {
    path: "/wanstage",
    name: "WanStage",
    component: WanStage,
  },
  {
    path: "/ranking",
    name: "RankingPage",
    component: RankingPage,
  },
  {
    path: "/about",
    name: "AboutMe",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
