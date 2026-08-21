import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../renderer/views/Home.vue'


const routes = [
    {
        path: '/',
        name: 'main',
        component: Home,
        children:[
        ],
    },
    
]

const router = createRouter({
    history: createWebHashHistory(), // electron必须hash模式，打包不会白屏
    routes
})

export default router
