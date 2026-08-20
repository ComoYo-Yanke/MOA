<template>
    <div id="apps" :class="{
        fadeOut: fading,
        closeOut: closing
    }" @animationend="animationEnd">
        <TitleBar 
        @minimize="minimizeWindow" 
        @close="closeWindow" />
        <Home />
        <!-- <router-view/> -->
    </div>

</template>

<script setup>
import TitleBar from './components/TitleBar.vue'
import Home from './views/Home.vue'
import { ref } from 'vue'

const fading = ref(false)
const closing = ref(false)


function minimizeWindow() {fading.value = true}
function closeWindow() {closing.value = true}

// 动画结束执行
function animationEnd() {
    if (fading.value) {
        window.electronWindow.minimizeWindow()
        fading.value = false
    }
    if (closing.value) {window.electronWindow.closeWindow()}
}


</script>

<style>
#apps.fadeOut {
    animation: fadeWindowOut 300ms forwards;
    overflow: visible;
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
        transform: translateY(400px) scale(0.8, 1.5);
        clip-path: polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%);
        filter: blur(8px);
    }
    75%{
        transform: translateY(600px) scale(0.8, 1.5);
        clip-path: polygon(20% 0%, 80% 0%, 50% 100%, 50% 100%);
        filter: blur(8px);
    }
    100% {
        opacity: 0.5;
        transform: translateY(1500px) scale(0.5);
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
