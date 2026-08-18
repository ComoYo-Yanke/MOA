<template>
    <div id="apps" :class="{
        fadeOut: fading,
        closeOut: closing
    }" @animationend="animationEnd">
        <TitleBar @minimize="minimizeWindow" @close="closeWindow" />
        <Home />
        <!-- <router-view/> -->
        <div>
            <el-tabs v-model="activeTab" @tab-click="handleTabClick">
                <el-tab-pane label="联机指引" name="guide">
                    <OnlineGuide />
                </el-tab-pane>
                <el-tab-pane label="工具下载" name="tools">
                    <ToolsDownload />
                </el-tab-pane>
                <el-tab-pane label="服务器租赁" name="server">
                    <ServerRental />
                </el-tab-pane>
                <el-tab-pane label="关于我" name="about">
                    <AboutMe />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script setup>
import TitleBar from './components/TitleBar.vue'
import Home from './views/Home.vue'
import { ref } from 'vue'
// 占位组件，暂时用空模板
const ToolsDownload = { template: '<div>工具下载页面</div>' }
const ServerRental = { template: '<div>服务器租赁页面</div>' }
const AboutMe = { template: '<div>关于我页面</div>' }

const activeTab = ref('guide')
const handleTabClick = () => { }

const fading = ref(false)
const closing = ref(false)


function minimizeWindow() {
    fading.value = true
}


function closeWindow() {
    closing.value = true
}


function animationEnd() {

    if (fading.value) {
        window.electronWindow.minimizeWindow()
        fading.value = false


    }

    if (closing.value) {
        window.electronWindow.closeWindow()
    }

}


</script>

<style>
#apps.fadeOut {
    animation: fadeWindowOut 300ms forwards;
}

#apps.closeOut {
    animation: closeWindowOut 300ms forwards;
}

@keyframes fadeWindowOut {

    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
        /* transform: perspective(800px) rotateX(0deg); */
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        /* clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); */
        filter: blur(0px);
    }
    25%{
        transform: translateY(125px) scale(0.9, 1.1);
        clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%);
        filter: blur(4px);
    }
    50%{
        transform: translateY(250px) scale(0.8, 1.5);
        clip-path: polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%);
        filter: blur(8px);
    }
    75%{
        transform: translateY(500px) scale(0.8, 1.5);
        clip-path: polygon(20% 0%, 80% 0%, 50% 100%, 50% 100%);
        filter: blur(8px);
    }
    100% {
        opacity: 0.5;
        transform: translateY(1000px) scale(0.5);
        /* transform: perspective(800px) rotateX(-180deg); */
        filter: blur(8px);
        
        clip-path: polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%);
    }

}


@keyframes closeWindowOut {

    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    to {
        opacity: 0;
        transform: translateY(200px) scale(0);
        /* filter: blur(8px); */
    }

}
</style>
