import { createRouter, createWebHashHistory } from "vue-router"



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Home', component: () => import('@pages/HomePage.vue') },
        { path: '/:category', name: 'Category', component: () => import('@pages/CategoryPage.vue') },
        { path: '/:category/:marketType', name: 'Level', component: () => import('@pages/LevelPage.vue') },
    ],
})


export default router