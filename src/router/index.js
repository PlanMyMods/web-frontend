import { createRouter, createWebHistory } from "vue-router";
import Timetable from "@/views/TimetableView.vue";
import Settings from "@/views/SettingsView.vue";
import ModuleListView from "@/views/ModuleListView.vue";
import ModulePageView from "@/views/ModulePageView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", redirect: { name: "Register" } },
  {
    path: "/timetable",
    name: "Timetable",
    component: Timetable,
  },
  {
    path: "/modules",
    name: "Modules",
    component: ModuleListView,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/module/:id",
    name: "ModulePage",
    component: ModulePageView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
