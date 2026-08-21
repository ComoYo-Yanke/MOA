import { app, BrowserWindow } from 'electron';
import { createWindow } from './window/mainWindow';
import { registerIpc } from './ipc/ipcRegister';

app.whenReady().then(() => {
    registerIpc()
    createWindow()
})

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', (): void => {
    if (BrowserWindow.getAllWindows().length === 0) {
        registerIpc()
        createWindow();
    }
});