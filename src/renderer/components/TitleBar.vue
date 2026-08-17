<template>
    <div class="title-bar" 
    @mousedown="mouseDown">

        <!-- 左侧 -->
        <div class="title-bar-left">
            <!-- <img src="/assets/icon.png" class="app-icon" /> -->
            <span class="title">
                ⛏ MOA
            </span>
        </div>

        <!-- 右侧窗口按钮 -->
        <div class="window-controls">

            <button class="window-button" @click="minimizeWindow">
                −
            </button>

            <button class="window-button close-button" @click="closeWindow">
                ×
            </button>

        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';

function minimizeWindow() {
    window.electronWindow.minimizeWindow()
}

function closeWindow() {
    window.electronWindow.closeWindow()
}
let isKeyDown = ref(false)
let dinatesX = ref(0)
let dinatesY = ref(0)

const mouseDown = (e) => {
    isKeyDown.value = true
    dinatesX.value = e.x
    dinatesY.value = e.y
    document.onmousemove = (event) => {
        if (isKeyDown.value) {
            const x = event.screenX - dinatesX.value
            const y = event.screenY - dinatesY.value
            // const x = dinatesX.value - event.screenX
            // const y = dinatesY.value - event.screenY
            // 给主进程传入坐标
            let data = {
                appX: x,
                appY: y
            }

            try {
                window.electronWindow.customAdsorption(data)
            } catch (err) {
                console.error('拖拽IPC异常', err)
            }
        }


    };
    document.onmouseup = (event) => {
        isKeyDown.value = false;
        // ✅清空事件，防止多次绑定
        document.onmousemove = null
        document.onmouseup = null
    }

}

</script>


<style scoped>
.title-bar {
    border-radius: 8px 8px 0 0;
    z-index: 999;
    position: fixed;
    height: 45px;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--titlebar-bg);
    color: var(--titlebar-text);
    user-select: none;
    font-size: 10px;

    /*
     * 允许拖动 Electron 窗口
     */
    /* app-region: drag; */

}


/* =========================
左侧
   ========================= */

.title-bar-left {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 12px;
    /* font-size: 16px; */
}

.app-icon {
    width: 20px;
    height: 20px;
}

.title {
    font-size: 12px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}


/* =========================
右侧按钮
   ========================= */

.window-controls {
    height: 100%;
    display: flex;
    /*
     * 非拖动区域
     */
    -webkit-app-region: no-drag;
}


.window-button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 5px;
    border: none;
    background: transparent;
    color: white;
    font-size: 30px;
    font-weight: 100;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}


.window-button:hover {
    background: rgba(255, 255, 255, 0.1);
}


/* 关闭按钮 */

.close-button:hover {
    background: var(--titlebar-close-hover);
}
</style>