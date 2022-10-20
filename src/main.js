import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import vueClickOutsideElement from "vue-click-outside-element";

const app = createApp(App);

app.use(vueClickOutsideElement);
app.mount("#app");
