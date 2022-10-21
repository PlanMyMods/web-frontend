import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Timetable from "@/views/TimetableView.vue";
import Settings from "@/views/SettingsView.vue";
import ModuleListView from "@/views/ModuleListView.vue";
import App from "./App.vue";
import "@/index.css";

const routes = [
  { path: "/", name: "Timetable", component: Timetable },
  { path: "/modules", name: "Modules", component: ModuleListView },
  { path: "/settings", name: "Settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
