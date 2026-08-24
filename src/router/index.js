import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../renderer/views/Home.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'


const routes = [
    {
        path: '/',
        name: 'main',
        component: Home,
        children: [
            {
                path: 'online/pri',
                name: 'private-online',
                component: () => import('../renderer/views/online/private.vue'),
            },
            {
                path: 'online/ser',
                name: 'servie-online',
                component: () => import('../renderer/views/online/service.vue')
            }

        ],
    },

]

const router = createRouter({
    history: createWebHashHistory(), // electron必须hash模式，打包不会白屏
    routes
})

export default router
