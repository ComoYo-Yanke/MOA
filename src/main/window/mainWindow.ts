import { BrowserWindow } from 'electron';
import path from 'path';
const dragAddon = require('electron-click-drag-plugin');

let win: BrowserWindow | null = null;

function createWindow(): void {
    win = new BrowserWindow({
        height: 600,
        width: 900,
        minWidth: 750,
        minHeight: 450,
        maxWidth: 1300,
        maxHeight: 800,
        center: true,
        useContentSize: false,
        title: 'MOA',
        frame: false,
        transparent: true,
        resizable: true,
        maximizable: false,
        minimizable: true,
        closable: true,
        alwaysOnTop: false,
        fullscreen: false,
        icon: path.join(__dirname, '../static/assets/icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, '../../preload/preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadURL('http://localhost:5173');

    win.webContents.openDevTools(); // 开发者工具

    win.on('closed', () => {
        win = null;
    });
}

// 原样导出
export { win, createWindow, dragAddon };