<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, OfficeBuilding } from '@element-plus/icons-vue'

const router = useRouter()
const isCollapse = ref(false)
const showRightPanel = ref(false)

const private_online = async () => {
    isCollapse.value = true
    await new Promise(resolve => setTimeout(resolve, 220))
    showRightPanel.value = true
    router.push({ name: 'private-online' })
}

const service_online = async () => {
    isCollapse.value = true
    await new Promise(resolve => setTimeout(resolve, 220))
    showRightPanel.value = true
    router.push({ name: 'servie-online' })
}

const goBackHome = async () => {
    router.push('/')
    showRightPanel.value = false
    await new Promise(resolve => setTimeout(resolve, 100))
    isCollapse.value = false
}
</script>

<template>
    <div class="wrapper">
        <!-- 整个Home白布容器，绑定collapse状态 -->
        <div class="home-wrap" :class="{ collapse: isCollapse }">
            <!-- 折叠状态才显示返回按钮，绝对定位在容器左上角 -->
            <button v-if="isCollapse" class="back-btn" @click="goBackHome">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64">
                    <rect x="27" y="27" width="10" height="10" fill="currentColor" />
                    <rect x="37" y="17" width="10" height="10" fill="currentColor" />
                    <rect x="47" y="7" width="10" height="10" fill="currentColor" />
                    <rect x="37" y="37" width="10" height="10" fill="currentColor" />
                    <rect x="47" y="47" width="10" height="10" fill="currentColor" />
                </svg>
            </button>

            <div class="title">
                On-line Mode
            </div>
            <div class="container">
                <div class="left">
                    <button class="btn_pri online-btn" @click="private_online">
                        <div class="center">
                            <el-icon :size="30">
                                <User />
                            </el-icon>
                            <div class="text Chinese">私人联机</div>
                            <div class="text English">Private</div>
                        </div>
                        <div class="shadow"></div>
                    </button>
                </div>
                <div class="border-bwt">
                </div>
                <div class="right">
                    <button class="btn_service online-btn" @click="service_online">
                        <div class="center">
                            <el-icon :size="30">
                                <OfficeBuilding />
                            </el-icon>
                            <div class="text Chinese">服务器联机</div>
                            <div class="text English">Service</div>
                        </div>
                        <div class="shadow"></div>
                    </button>
                </div>
            </div>
        </div>

        <!-- 右侧子页面 -->
        <Transition name="fadeRight" mode="out-in">
            <div v-if="showRightPanel" class="right-view">
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
/* 新增最外层 */
.wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

/* home外层盒子：负责整体位移收缩动画 */
.home-wrap {
    height: 100%;
    width: 100%;
    position: relative;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

/* 点击后：缩到左侧固定300px宽 */
.home-wrap.collapse {
    width: 10%;
    background-color: var(--color-bg-home-left-bar);
}

/* 折叠时内部原有内容透明度淡出，DOM保留，不销毁，保证移动动画顺滑 */
.home-wrap.collapse .title,
.home-wrap.collapse .container {
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
}

/* 侧边栏返回按钮 */
.back-btn {
    position: absolute;
    z-index: 10;
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 50px;
    color: var(--color-text);
    font-size: 20px;
    cursor: pointer;

    svg {
        color: var(--color-title);
    }
}



/* 右侧页面容器 */
.right-view {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
}

/* 右侧淡入淡出动画 */
.fadeRight-enter-from {
    opacity: 0;
    transform: translateX(40px);
}

.fadeRight-enter-active {
    transition: all 0.3s ease;
}

.fadeRight-leave-to {
    opacity: 0;
    transform: translateX(40px);
}

.fadeRight-leave-active {
    transition: all 0.3s ease;
}

/* ========= 下面全部是你原封不动的CSS，没有任何修改 ========= */
body {
    background-color: var(--color-bg);
}

.title {
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: var(--color-title);
    font-family: var(--family-title);
}

.container {
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    color: var(--color-text);
    transition: all ease 0.3s;
    justify-content: center;
    align-content: center;
    align-items: center;

    .left {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        box-sizing: border-box;

    }

    .border-bwt {
        display: flex;
        height: 95%;
        width: 2px;
        background-color: var(--color-bg-border);
        border-radius: 1000px;
        clip-path: polygon(0% 50%,
                45% 0%,
                100% 50%,
                45% 100%);
    }

    .right {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
}

.online-btn:hover {
    outline: hidden;
    border: 0;
    color: var(--color-selected-text);
    transform: translateY(-20px);
}

/* button:active {
    outline: hidden;
    border: 0;
    transition: all ease 0.1s;
    transform: translateY(0px);
} */

.online-btn {
    outline: hidden;
    background-color: transparent;
    border: 0;
    height: 100%;
    width: 100%;
    color: var(--color-text-muted);
    font-family: var(--family-title);
    transition: all ease 0.4s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.center {
    width: 20%;
    height: 15%;
    box-sizing: border-box;
    padding: 2% 0%;
}

.shadow {
    background-color: transparent;
    width: 100px;
    height: 1px;
    box-shadow: rgba(0, 0, 0, 0.366) 0px 30px 15px 1px;
}

.text {
    transition: all ease 0.6s;
}
</style>
