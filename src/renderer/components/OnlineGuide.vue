<template>
    <div class="guide-container">
        
    </div>
</template>

<script setup>
// 这个函数稍后我们会连接到主进程，实现跳转浏览器
const openLink = (url) => {
    // 临时用浏览器打开
    window.open(url, '_blank')
}
</script>

<style scoped>
.guide-container {
    border-radius: 5px;
    padding: 20px;
}


</style>