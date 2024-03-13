import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Task from "../views/Task.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/task/:id", component: Task },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
