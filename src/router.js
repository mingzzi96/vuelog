import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue'
import Home from './components/home.vue'
import Detail from './components/detail.vue'
import Author from './components/author.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)", // (\\d+) 는 숫자만 들어오는 것을 허용
    component: Detail,
    children : [
      // children 경로 조심하기. 앞에 슬래시 붙이지 않아야함.
      { path : 'author', component : Author },
      // { path : '/comment', component : Comment },
    ]
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