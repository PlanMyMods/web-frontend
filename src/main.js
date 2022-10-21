import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home}, 
    {path: '/modules', component: Modules}, 
    
]

const router = new VueRouter({
    routes
})

App.use(router);

createApp(App).mount("#app");
