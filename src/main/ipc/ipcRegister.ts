import { ipcMain } from 'electron';
import { win, dragAddon } from '../window/mainWindow';

export function registerIpc() {
    ipcMain.on('window-minimize', (): void => {
        if (win) win.minimize();
    });

    ipcMain.on('window-close', (): void => {
        if (win) win.close();
    });

    ipcMain.handle('custom-adsorption', (): void => {
        if (!win) return;
        const hwnd: Buffer = win.getNativeWindowHandle();
        let winId: Buffer | number = hwnd;
        dragAddon.startDrag(winId);
    });

    ipcMain.on('open-settings', () => {
        // TODO window of settings
    })
}