import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import type { AdsorptionData } from '../types/electron.d';

let win: BrowserWindow | null = null;
const change: number[] = [0, 2, 1, 2, 1, 2, 2, 2];

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
            preload: path.join(__dirname, '../preload/preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadURL('http://localhost:5173');


    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// 最小化
ipcMain.on('window-minimize', (): void => {
    if (win) win.minimize();
});

// 关闭
ipcMain.on('window-close', (): void => {
    if (win) win.close();  // 添加 if (win) 检查
});

// 拖拽
ipcMain.handle('custom-adsorption', (event: Electron.IpcMainInvokeEvent, res: AdsorptionData): void => {
    if (!win) return;  // 添加 null 检查

    const x: number = res.appX;
    const y: number = res.appY;
    const [w, h] = win.getSize();

    win.setPosition(x, y);
    win.setSize(
        w - change[Math.abs(x) % 8],
        h - change[Math.abs(y) % 8]
    );
});

app.whenReady().then(createWindow);

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', (): void => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});