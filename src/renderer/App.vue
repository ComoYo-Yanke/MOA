<template>
    <TitleBar />
    <Home/>
    <div >
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
</script>

<style>

</style>