import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/tienda',
        name: 'Tienda',
        component: () => import('../views/Store.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../components/store/Welcome.vue')
            },
        ]   
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router