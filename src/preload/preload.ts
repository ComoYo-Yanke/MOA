import { contextBridge, ipcRenderer } from 'electron';
import type { Versions, ElectronWindowAPI } from '../types/electron.d';

const electronWindow: ElectronWindowAPI = {
    // 版本信息 - ✅ 修复 Versions 类型
    getVersions: (): Versions => ({
        node: process.versions.node,
        electron: process.versions.electron,
        chrome: process.versions.chrome
    }),

    // 平台
    platform: process.platform,

    // 窗口控制
    minimizeWindow: (): void => {
        ipcRenderer.send('window-minimize');
        console.log("最小化");
        
    },

    closeWindow: (): void => {
        ipcRenderer.send('window-close');
        console.log("关闭窗口");
    },

    customAdsorption: (): Promise<void> =>
        ipcRenderer.invoke('custom-adsorption'),

    openSettings: (): void => {
        ipcRenderer.send('open-settings');
    }
};

contextBridge.exposeInMainWorld('electronWindow', electronWindow);