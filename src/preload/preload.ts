import { contextBridge, ipcRenderer } from 'electron';
import type { AdsorptionData, Versions, ElectronWindowAPI } from '../types/electron.d';

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
        ipcRenderer.invoke('custom-adsorption', )
};

contextBridge.exposeInMainWorld('electronWindow', electronWindow);