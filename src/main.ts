import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HomeView from "./pages/HomeView.vue";
import CreateItemView from "./pages/CreateItemView.vue";
import UpdateItemView from "./pages/UpdateItemView.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/create", component: CreateItemView },
	{ path: "/update/:id", component: UpdateItemView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
