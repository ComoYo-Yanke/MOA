import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    base: './',
    root: resolve(__dirname, 'src/renderer'),
    server: {
        port: 5173,
        strictPort: true  // ✅ 如果端口被占用则报错
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/renderer')
        }
    },
})