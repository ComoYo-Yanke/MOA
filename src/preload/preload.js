const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronWindow', {

    // 版本信息
    getVersions: () => ({
        node: process.versions.node,
        electron: process.versions.electron,
        chrome: process.versions.chrome
    }),

    // 平台
    platform: process.platform,

    // =========================
    // 窗口控制
    // =========================

    minimizeWindow: () => {
        ipcRenderer.send('window-minimize')
    },

    closeWindow: () => {
        ipcRenderer.send('window-close')
    },

    customAdsorption: (data) => 
        ipcRenderer.invoke('custom-adsorption', data),
})