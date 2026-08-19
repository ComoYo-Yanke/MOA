<template>
    <div class="title-bar" @mousedown="mouseDown">

        <!-- 左侧 -->
        <div class="title-bar-left">
            <div class="app-icon"></div>
            <span class="title">
                MOA
            </span>
        </div>

        <!-- 右侧窗口按钮 -->
        <div class="window-controls">
            <button class="window-button" @click="minimizeWindow">
                <!-- <el-icon :size="30" :color="white"><Minus /></el-icon> -->
                <el-icon :size="20"><Setting /></el-icon>
            </button>
            <button class="window-button" @click="minimizeWindow">
                <!-- <el-icon :size="30" :color="white"><Minus /></el-icon> -->
                <el-icon :size="18"><SemiSelect /></el-icon>
            </button>

            <button class="window-button close-button" @click="closeWindow">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 90 90">
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975569182-qd92" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="22.5" data-node-y="22.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975569182-hwir" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="22.5" y="22.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975569182-p5sg" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975795837-79r0" data-node="true"
                        data-node-kind="rect" data-node-version="1" class="" data-node-custom-shape="true"
                        data-node-x="37.5" data-node-y="37.5" data-node-width="15" data-node-height="15">
                        <path
                            d="M37.50000000000027 37.499999237060536L52.50000000000027 37.499999237060536L52.50000000000027 52.499999237060536L37.50000000000027 52.499999237060536Z "
                            data-role="shape" id="shape-1786975795837-vtlm" fill="#ffffff" stroke-width="1.5"
                            stroke="none" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975795837-qoju" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975803510-hed8" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="52.5" data-node-y="52.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975803510-k0dm" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="52.5" y="52.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975803510-islr" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975806997-n6fq" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="67.5" data-node-y="67.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975806997-mewd" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="67.5" y="67.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975806997-bq9u" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975809165-04w6" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="52.5" data-node-y="22.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975809165-f1yx" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="52.5" y="22.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975809165-43q4" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975811349-s2yz" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="67.5" data-node-y="7.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975811349-sthm" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="67.5" y="7.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975811349-p59z" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975813533-k3no" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="7.5" data-node-y="7.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975813533-qg2w" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="7.5" y="7.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975813533-ajpl" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975815469-7961" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="22.5" data-node-y="52.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975815469-odzv" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="22.5" y="52.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975815469-glpw" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" id="node-1786975817279-wnzn" data-node="true"
                        data-node-kind="rect" data-node-version="1" data-node-x="7.5" data-node-y="67.5"
                        data-node-width="15" data-node-height="15" class="">
                        <rect width="15" height="15" data-role="shape" id="shape-1786975817279-makf" fill="#ffffff"
                            stroke-width="1.5" stroke="none" x="7.5" y="67.5" data-stroke-alignment="center" />
                        <text data-role="label" data-node-content="" data-node-align="center" data-line-height="1.2"
                            text-anchor="middle" xml:space="preserve" id="label-1786975817279-f9dx" fill="#1f2937"
                            font-family="system-ui, sans-serif" font-size="16" font-weight="normal" font-style="normal"
                            dominant-baseline="middle" alignment-baseline="middle" opacity="1"
                            style="pointer-events: none; user-select: none;" />
                    </g>
                </svg>
            </button>

        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits([
    'minimize',
    'close'
])

// 最小化和关闭信号
function minimizeWindow() {emit('minimize')}
function closeWindow() {emit('close')}

let isKeyDown = ref(false)
let dinatesX = ref(0)
let dinatesY = ref(0)

// 拖拽逻辑
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
    border-radius: 10px 10px 0 0;
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
    user-select: none;
    background-image: url(../../assets/icon/icon.ico);
    background-size: cover;
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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 6px;
    border: none;
    background: transparent;
    color: var(--titlebar-text);
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