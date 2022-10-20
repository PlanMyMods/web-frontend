import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

// test 


Vue.use(VueRouter)

const Home = { template: '<div>Home</div>' }
const Modules = { template: '<div>Modules</div>' }

// will add more routes as we create more pages
const routes = [
    {path: '/', component: Home}, 
    {path: '/modules', component: Modules}, 
]

const router = new VueRouter({
    routes, 
    mode: 'history'
})

App.use(router);

createApp(App).mount("#app");
