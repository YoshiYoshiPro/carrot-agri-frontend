import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Post from "../views/Post.vue";
import Plan from "../views/Plan.vue";
import Todo from "../views/Todo.vue";
import Management from "../views/Management.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: Post,
  },
  {
    path: "/plan",
    name: "plan",
    component: Plan,
  },
  {
    path: "/todo",
    name: "todo",
    component: Todo,
  },
  {
    path: "/management",
    name: "management",
    component: Management,
  },
  {
    path: "/history",
    name: "history",
    component: History,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
