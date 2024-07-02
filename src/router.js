import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue'
import Home from './components/home.vue'
import Detail from './components/detail.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 