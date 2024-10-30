import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import CreateItemPage from "./pages/CreateItemPage.vue";
import UpdateItemPage from "./pages/UpdateItemPage.vue";

const routes = [
	{ path: "/", name: "home", component: HomePage },
	{ path: "/create", name: "create", component: CreateItemPage },
	{ path: "/update/:id", name: "update", component: UpdateItemPage },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
