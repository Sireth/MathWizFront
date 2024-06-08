import {createRouter, createWebHistory} from "vue-router";
import MathWizMainPage from "@/components/pages/MathWizMainPage.vue";
import MathWizAboutPage from "@/components/pages/MathWizAboutPage.vue";

const routes = [
    {
        path: '/about/',
        component: MathWizAboutPage
    },
    {
        path: '/',
        component: MathWizMainPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;