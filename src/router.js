import { createWebHistory, createRouter } from "vue-router";
import EmployeeOfTheMonthPage from "./pages/EmployeeOfTheMonthPage.vue";
import ProductDetailsPage from "./pages/ProductDetailsPage.vue";
import ProductListPage from "./pages/ProductListPage.vue";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import UserInfoPage from "./pages/UserInfoPage.vue";

const routes = [
    { path: '/', component: ProductListPage },
    { path: '/products/:title', component: ProductDetailsPage },
    { path: '/cart', component: ShoppingCartPage },
    { path: '/user-info', component: UserInfoPage },
    { path: '/employee', component: EmployeeOfTheMonthPage }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;