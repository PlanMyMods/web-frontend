import { createRouter, createWebHistory } from "vue-router";
import Timetable from "@/views/TimetableView.vue";
import Settings from "@/views/SettingsView.vue";
import ModuleListView from "@/views/ModuleListView.vue";

const routes = [
  { path: "/", name: "Timetable", component: Timetable },
  { path: "/modules", name: "Modules", component: ModuleListView },
  { path: "/settings", name: "Settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
