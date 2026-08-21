// src/types/electron.d.ts

// 拖拽吸附数据
export interface AdsorptionData {
    appX: number;
    appY: number;
}

// 版本信息
export interface Versions {
    node: string;
    electron: string;
    chrome: string;
}

// 暴露给渲染进程的 API
export interface ElectronWindowAPI {
    getVersions: () => Versions;
    platform: string;
    minimizeWindow: () => void;
    closeWindow: () => void;
    customAdsorption: (data: AdsorptionData) => Promise<void>;
    openSettings: () => void;
}

// 扩展 Window 接口
declare global {
    interface Window {
        electronWindow: ElectronWindowAPI;
    }
}