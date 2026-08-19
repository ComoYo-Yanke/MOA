import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    base: './',
    root: resolve(__dirname, 'src/renderer'),
    server: {
        port: 5173
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/renderer')
        }
    },
    include:['element-plus']
})